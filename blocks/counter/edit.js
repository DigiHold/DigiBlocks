/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar
} = wp.blockEditor;
const {
	TabPanel,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Counter block
 */
const CounterEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        iconValue,
        startNumber,
        endNumber,
        title,
        description,
        counterColor,
        counterHoverColor,
        titleColor,
        titleHoverColor,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        iconColor,
        iconHoverColor,
        iconBackgroundColor,
        iconHoverBackgroundColor,
        iconSize,
        iconPadding,
        iconMargin,
        iconBorderStyle,
        iconBorderWidth,
        iconBorderRadius,
        iconBorderColor,
        iconHoverBorderColor,
        typography,
        titleTypography,
        contentTypography,
        padding,
        margin,
        align,
        animation,
        boxShadow,
        boxShadowHover,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        hoverEffect,
        animationDuration,
        animationDelay,
        thousandSeparator,
        decimalPlaces,
        decimalSeparator,
        layoutStyle,
        verticalSpacing,
        counterPrefix,
        counterPrefixSpacing,
        counterSuffix,
        counterSuffixSpacing,
        numberWithCommas,
        displayIcon
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    const [counterValue, setCounterValue] = useState(startNumber || 0);
    const [isCounterAnimating, setIsCounterAnimating] = useState(false);
	const [activeColorTab, setActiveColorTab] = useState("normal");
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});

    // State to track if global components are loaded
    const [componentsLoaded, setComponentsLoaded] = useState(false);

    // Check if the global components are loaded
    useEffect(() => {
        // Function to check if digi components are available
        const checkComponents = () => {
            if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
                setComponentsLoaded(true);
                return true;
            }
            return false;
        };
        
        // If components aren't immediately available, set up a small delay to check again
        if (!checkComponents()) {
            const timeout = setTimeout(() => {
                if (checkComponents()) {
                    clearTimeout(timeout);
                }
            }, 500);
            
            return () => clearTimeout(timeout);
        }
    }, []);

    // Set the icon value
    const setIconValue = (newIcon) => {
        setAttributes({ iconValue: newIcon });
    };
	
	// Use ref
	const previewTimeoutRef = useRef(null);

	// Effect to trigger animation preview when animation attribute changes
	useEffect(() => {
		if (animation && animation !== 'none') {
			const timeoutId = setTimeout(() => {
				animationPreview(id, animation, animations, previewTimeoutRef);
			}, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [animation]);

	// Button click handler
	const handlePreviewClick = () => {
		animationPreview(id, animation, animations, previewTimeoutRef);
	};

    // Counter animation preview
    const animateCounter = () => {
        if (isCounterAnimating) return;
        
        const startValue = parseInt(startNumber) || 0;
        const endValue = parseInt(endNumber) || 0;
        const duration = animationDuration || 2000;
        const steps = 50; // Number of steps for the animation
        const stepDuration = duration / steps;
        const increment = (endValue - startValue) / steps;
        
        setIsCounterAnimating(true);
        setCounterValue(startValue);
        
        let currentStep = 0;
        
        const intervalId = setInterval(() => {
            currentStep++;
            
            if (currentStep >= steps) {
                setCounterValue(endValue);
                clearInterval(intervalId);
                setIsCounterAnimating(false);
            } else {
                const newValue = startValue + (increment * currentStep);
                setCounterValue(Math.round(newValue));
            }
        }, stepDuration);
        
        return () => clearInterval(intervalId);
    };

    // Format number with commas and decimal places
    const formatNumber = (number) => {
        if (typeof number !== 'number') {
            number = parseFloat(number) || 0;
        }
        
        // Handle decimal places
        let formattedNumber = number;
        if (decimalPlaces && decimalPlaces > 0) {
            formattedNumber = number.toFixed(decimalPlaces);
        } else {
            formattedNumber = Math.round(number);
        }
        
        // Convert to string for manipulation
        let numberStr = formattedNumber.toString();
        
        // Replace decimal separator if specified
        if (decimalPlaces > 0 && decimalSeparator && decimalSeparator !== '.') {
            numberStr = numberStr.replace('.', decimalSeparator);
        }
        
        // Add thousand separator if enabled
        if (numberWithCommas && thousandSeparator) {
            // Split by decimal separator
            let parts = numberStr.split(decimalSeparator || '.');
            
            // Format the integer part with commas
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
            
            // Join back with decimal part if exists
            numberStr = parts.join(decimalSeparator || '.');
        }
        
        return numberStr;
    };

    // Border style options
    const borderStyleOptions = [
        { label: __("Default", "digiblocks"), value: "default" },
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
        { label: __("Groove", "digiblocks"), value: "groove" },
        { label: __("Inset", "digiblocks"), value: "inset" },
        { label: __("Outset", "digiblocks"), value: "outset" },
        { label: __("Ridge", "digiblocks"), value: "ridge" },
    ];

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Lift", "digiblocks"), value: "lift" },
        { label: __("Scale", "digiblocks"), value: "scale" },
        { label: __("Glow", "digiblocks"), value: "glow" },
    ];

    // Animation options
    const animationOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        ...Object.keys(animations).map((animation) => ({
            label: animation
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
            value: animation,
        })),
    ];

    // Layout styles
    const layoutOptions = [
        { label: __("Stacked", "digiblocks"), value: "stacked" },
        { label: __("Inline", "digiblocks"), value: "inline" },
        { label: __("Centered", "digiblocks"), value: "centered" },
    ];

    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'options', 
            title: __('Options', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        { 
            name: 'style', 
            title: __('Style', 'digiblocks'),
            icon: tabIcons.styleIcon
        },
        { 
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Tabs for normal/hover states
    const stateTabList = [
        {
            name: 'normal',
            title: __('Normal', 'digiblocks'),
            className: 'digiblocks-tab-1 normal'
        },
        {
            name: 'hover',
            title: __('Hover', 'digiblocks'),
            className: 'digiblocks-tab-2 hover'
        }
    ];

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
            `;
        } else {
            borderCSS = 'border-style: none;';
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Padding and margin
        const paddingCSS = `${getDimensionCSS(padding, 'padding', activeDevice)}`;
        const marginCSS = `${getDimensionCSS(margin, 'margin', activeDevice)}`;
        
        // Title typography CSS
        let titleTypographyCSS = '';
        if (titleTypography) {
            if (titleTypography.fontFamily) {
                titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
            }
            
            if (titleTypography.fontSize && titleTypography.fontSize[activeDevice]) {
                titleTypographyCSS += `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};`;
            }
            
            if (titleTypography.fontWeight) {
                titleTypographyCSS += `font-weight: ${titleTypography.fontWeight};`;
            }
            
            if (titleTypography.fontStyle) {
                titleTypographyCSS += `font-style: ${titleTypography.fontStyle};`;
            }
            
            if (titleTypography.textTransform) {
                titleTypographyCSS += `text-transform: ${titleTypography.textTransform};`;
            }
            
            if (titleTypography.textDecoration) {
                titleTypographyCSS += `text-decoration: ${titleTypography.textDecoration};`;
            }
            
            if (titleTypography.lineHeight && titleTypography.lineHeight[activeDevice]) {
                titleTypographyCSS += `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};`;
            }
            
            if (titleTypography.letterSpacing && titleTypography.letterSpacing[activeDevice]) {
                titleTypographyCSS += `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Content typography CSS
        let contentTypographyCSS = '';
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }
            
            if (contentTypography.fontSize && contentTypography.fontSize[activeDevice]) {
                contentTypographyCSS += `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};`;
            }
            
            if (contentTypography.fontWeight) {
                contentTypographyCSS += `font-weight: ${contentTypography.fontWeight};`;
            }
            
            if (contentTypography.fontStyle) {
                contentTypographyCSS += `font-style: ${contentTypography.fontStyle};`;
            }
            
            if (contentTypography.textTransform) {
                contentTypographyCSS += `text-transform: ${contentTypography.textTransform};`;
            }
            
            if (contentTypography.textDecoration) {
                contentTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
            }
            
            if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
                contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};`;
            }
            
            if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
                contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Counter typography CSS
        let typographyCSS = '';
        if (typography) {
            if (typography.fontFamily) {
                typographyCSS += `font-family: ${typography.fontFamily};`;
            }

			if (typography.fontSize && typography.fontSize[activeDevice]) {
                typographyCSS += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};`;
            }
            
            if (typography.fontWeight) {
                typographyCSS += `font-weight: ${typography.fontWeight};`;
            }
            
            if (typography.fontStyle) {
                typographyCSS += `font-style: ${typography.fontStyle};`;
            }
            
            if (typography.textTransform) {
                typographyCSS += `text-transform: ${typography.textTransform};`;
            }
            
            if (typography.textDecoration) {
                typographyCSS += `text-decoration: ${typography.textDecoration};`;
            }
            
            if (typography.lineHeight && typography.lineHeight[activeDevice]) {
                typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};`;
            }
            
            if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
                typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Icon styles - only apply if an icon exists
        let iconCSS = '';
        let iconHoverCSS = '';
        let iconMarginCSS = '';
        
        // Only process icon styles if an icon actually exists
        if (displayIcon && iconValue && iconValue.svg) {
            // Icon background color
            if (iconBackgroundColor) {
                iconCSS += `background-color: ${iconBackgroundColor};`;
            }
            
            // Icon border styles
            if (iconBorderStyle && iconBorderStyle !== 'default' && iconBorderStyle !== 'none') {                
                iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || '#e0e0e0'};
					${getDimensionCSS(iconBorderWidth, 'border-width', activeDevice)}
					${getDimensionCSS(iconBorderRadius, 'border-radius', activeDevice)}
                `;
            }
            
            // Icon padding
            if (iconPadding && iconPadding[activeDevice]) {
                iconCSS += `${getDimensionCSS(iconPadding, 'padding', activeDevice)}`;
            }
            
            // Icon hover styles
            if (iconHoverColor) {
                iconHoverCSS += `fill: ${iconHoverColor} !important; color: ${iconHoverColor} !important;`;
            }
            
            if (iconHoverBackgroundColor) {
                iconHoverCSS += `background-color: ${iconHoverBackgroundColor};`;
            }
            
            if (iconHoverBorderColor) {
                iconHoverCSS += `border-color: ${iconHoverBorderColor};`;
            }
            
            // Custom icon margin if set
            if (iconMargin && iconMargin[activeDevice]) {
                iconMarginCSS = `${getDimensionCSS(iconMargin, 'margin', activeDevice)}`;
            } else {
                // Default margins if not set
                const defaultBottom = activeDevice === 'desktop' ? 20 : activeDevice === 'tablet' ? 15 : 10;
                iconMarginCSS = `margin: 0px 0px ${defaultBottom}px 0px;`;
            }
        }
        
        // Hover effects
        let hoverCSS = '';
        
        // Box shadow hover
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Additional hover effects
        if (hoverEffect === 'lift') {
            hoverCSS += 'transform: translateY(-10px);';
        } else if (hoverEffect === 'scale') {
            hoverCSS += 'transform: scale(1.05);';
        } else if (hoverEffect === 'glow') {
            hoverCSS += 'filter: brightness(1.1);';
        }
        
        // Set base styles for the block
        return `
            /* Main block styles */
            .${id} {
                background-color: ${backgroundColor || 'transparent'};
                ${boxShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                transition: all 0.3s ease;
                text-align: ${align || 'center'};
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${hoverCSS}
            }
            
            /* Layout styles */
            .${id} .digiblocks-counter-inner {
                display: flex;
                flex-direction: ${layoutStyle === 'inline' ? 'row' : 'column'};
                align-items: ${layoutStyle === 'inline' ? 'center' : align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'};
                justify-content: ${layoutStyle === 'inline' ? 'flex-start' : 'center'};
                gap: ${verticalSpacing || 15}px;
                ${layoutStyle === 'centered' ? 'text-align: center;' : ''}
            }
            
            ${displayIcon && iconValue && iconValue.svg ? `
            /* Icon styles */
            .${id} .digiblocks-counter-icon {
				${iconMarginCSS}
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${iconCSS}
                transition: all 0.3s ease;
            }

            .${id} .digiblocks-counter-icon span {
                display: flex;
            }

            .${id} .digiblocks-counter-icon svg {
                width: ${iconSize && iconSize[activeDevice] ? iconSize[activeDevice] : 32}px;
                height: 100%;
                fill: ${iconColor || 'inherit'};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${id}:hover .digiblocks-counter-icon {
                ${iconHoverCSS}
            }
            
            .${id}:hover .digiblocks-counter-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
            }
            ` : ''}
            
            /* Counter styles */
            .${id} .digiblocks-counter-number-wrapper {
                display: flex;
                align-items: center;
                justify-content: ${align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'};
                margin-bottom: 10px;
            }
            
            .${id} .digiblocks-counter-prefix {
                margin-right: ${counterPrefixSpacing || 5}px;
                color: ${counterColor || '#333333'};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-counter-suffix {
                margin-left: ${counterSuffixSpacing || 5}px;
                color: ${counterColor || '#333333'};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-counter-number {
                color: ${counterColor || '#333333'};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Counter hover styles */
            .${id}:hover .digiblocks-counter-number,
            .${id}:hover .digiblocks-counter-prefix,
            .${id}:hover .digiblocks-counter-suffix {
                ${counterHoverColor ? `color: ${counterHoverColor};` : ''}
            }
            
            /* Title styles */
            .${id} .digiblocks-counter-title {
                color: ${titleColor || 'inherit'};
                margin-bottom: 10px;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${id}:hover .digiblocks-counter-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            }
            
            /* Content styles */
            .${id} .digiblocks-counter-description {
                color: ${textColor || 'inherit'};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${id}:hover .digiblocks-counter-description {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
            }

			/* Visibility Controls */
			${visibility.desktop ? `
				@media (min-width: 992px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}
        `;
    };

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Render icon
    const renderIcon = () => {
        // Make sure we only try to display an icon if the iconValue exists and has a non-empty svg property
        if (!displayIcon || !iconValue || !iconValue.svg || iconValue.svg.trim() === '') {
            return null;
        }
        
        return (
            <div className="digiblocks-counter-icon">
                <span
                    dangerouslySetInnerHTML={{
                        __html: iconValue.svg,
                    }}
                />
            </div>
        );
    };

	// Render color tab content based on active tab
	const renderColorTabContent = (tabName) => {
		if (tabName === 'normal') {
			return (
				<>
					<PanelColorSettings
						title={__("Counter Colors", "digiblocks")}
						initialOpen={true}
						enableAlpha={true}
						colorSettings={[
							{
								value: counterColor,
								onChange: (value) => setAttributes({ counterColor: value }),
								label: __("Counter Color", "digiblocks")
							}
						]}
					/>
					
					<PanelColorSettings
						title={__("Content Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: titleColor,
								onChange: (value) => setAttributes({ titleColor: value }),
								label: __("Title Color", "digiblocks")
							},
							{
								value: textColor,
								onChange: (value) => setAttributes({ textColor: value }),
								label: __("Description Color", "digiblocks")
							}
						]}
					/>
					
					{displayIcon && (
						<PanelColorSettings
							title={__("Icon Colors", "digiblocks")}
							initialOpen={false}
							enableAlpha={true}
							colorSettings={[
								{
									value: iconColor,
									onChange: (value) => setAttributes({ iconColor: value }),
									label: __("Icon Color", "digiblocks")
								},
								{
									value: iconBackgroundColor,
									onChange: (value) => setAttributes({ iconBackgroundColor: value }),
									label: __("Icon Background", "digiblocks")
								}
							]}
						/>
					)}
					
					<PanelColorSettings
						title={__("Block Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: (value) => setAttributes({ backgroundColor: value }),
								label: __("Background Color", "digiblocks")
							}
						]}
					/>
				</>
			);
		} else if (tabName === 'hover') {
			return (
				<>
					<PanelColorSettings
						title={__("Counter Hover Colors", "digiblocks")}
						initialOpen={true}
						enableAlpha={true}
						colorSettings={[
							{
								value: counterHoverColor,
								onChange: (value) => setAttributes({ counterHoverColor: value }),
								label: __("Counter Hover Color", "digiblocks")
							}
						]}
					/>
					
					<PanelColorSettings
						title={__("Content Hover Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: titleHoverColor,
								onChange: (value) => setAttributes({ titleHoverColor: value }),
								label: __("Title Hover Color", "digiblocks")
							},
							{
								value: textHoverColor,
								onChange: (value) => setAttributes({ textHoverColor: value }),
								label: __("Description Hover Color", "digiblocks")
							}
						]}
					/>
					
					{displayIcon && (
						<PanelColorSettings
							title={__("Icon Hover Colors", "digiblocks")}
							initialOpen={false}
							enableAlpha={true}
							colorSettings={[
								{
									value: iconHoverColor,
									onChange: (value) => setAttributes({ iconHoverColor: value }),
									label: __("Icon Hover Color", "digiblocks")
								},
								{
									value: iconHoverBackgroundColor,
									onChange: (value) => setAttributes({ iconHoverBackgroundColor: value }),
									label: __("Icon Hover Background", "digiblocks")
								}
							]}
						/>
					)}
					
					<PanelColorSettings
						title={__("Block Hover Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: backgroundHoverColor,
								onChange: (value) => setAttributes({ backgroundHoverColor: value }),
								label: __("Background Hover Color", "digiblocks")
							}
						]}
					/>
				</>
			);
		}
		
		return null;
	};

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <div className="components-panel__body is-opened">
                            <ToggleControl
                                label={__("Display Icon", "digiblocks")}
                                checked={displayIcon}
                                onChange={(value) => setAttributes({ displayIcon: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displayIcon && (
                                <div style={{ marginBottom: '2rem' }}>
                                    {!componentsLoaded ? (
                                        <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                            <div className="components-spinner"></div>
                                            <p>{__('Loading icon selector...', 'digiblocks')}</p>
                                        </div>
                                    ) : (
                                        <FontAwesomeControl
                                            label={__('Select Icon', 'digiblocks')}
                                            value={iconValue}
                                            onChange={setIconValue}
                                        />
                                    )}
                                    
                                    {iconValue && componentsLoaded && (
                                        <>
                                            {/* Show info about selected icon */}
                                            <div style={{ marginTop: '15px', marginBottom: '15px', padding: '10px', background: '#f0f0f1', borderRadius: '3px' }}>
                                                <p style={{ margin: '0 0 5px 0' }}>
                                                    <strong>{__('Selected Icon:', 'digiblocks')}</strong> {iconValue.name}
                                                </p>
                                                <p style={{ margin: '0 0 5px 0' }}>
                                                    <strong>{__('Style:', 'digiblocks')}</strong> {iconValue.style}
                                                </p>
                                                {iconValue.categories && iconValue.categories.length > 0 && (
                                                    <p style={{ margin: '0' }}>
                                                        <strong>{__('Categories:', 'digiblocks')}</strong> {iconValue.categories.join(', ')}
                                                    </p>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                            
                            <SelectControl
                                label={__("Layout Style", "digiblocks")}
                                value={layoutStyle || 'stacked'}
                                options={layoutOptions}
                                onChange={(value) => setAttributes({ layoutStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__("Spacing", "digiblocks")}
                                value={verticalSpacing || 15}
                                onChange={(value) => setAttributes({ verticalSpacing: value })}
                                min={0}
                                max={100}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Starting Number", "digiblocks")}
                                type="number"
                                value={startNumber}
                                onChange={(value) => setAttributes({ startNumber: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Ending Number", "digiblocks")}
                                type="number"
                                value={endNumber}
                                onChange={(value) => setAttributes({ endNumber: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Counter Prefix", "digiblocks")}
                                value={counterPrefix || ''}
                                onChange={(value) => setAttributes({ counterPrefix: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {counterPrefix && (
                                <RangeControl
                                    label={__("Prefix Spacing", "digiblocks")}
                                    value={counterPrefixSpacing || 5}
                                    onChange={(value) => setAttributes({ counterPrefixSpacing: value })}
                                    min={0}
                                    max={30}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <TextControl
                                label={__("Counter Suffix", "digiblocks")}
                                value={counterSuffix || ''}
                                onChange={(value) => setAttributes({ counterSuffix: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {counterSuffix && (
                                <RangeControl
                                    label={__("Suffix Spacing", "digiblocks")}
                                    value={counterSuffixSpacing || 5}
                                    onChange={(value) => setAttributes({ counterSuffixSpacing: value })}
                                    min={0}
                                    max={30}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <TextControl
                                label={__("Title", "digiblocks")}
                                value={title || ''}
                                onChange={(value) => setAttributes({ title: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Description", "digiblocks")}
                                value={description || ''}
                                onChange={(value) => setAttributes({ description: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__("Use Thousand Separator", "digiblocks")}
                                checked={numberWithCommas}
                                onChange={(value) => setAttributes({ numberWithCommas: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {numberWithCommas && (
                                <TextControl
                                    label={__("Thousand Separator", "digiblocks")}
                                    value={thousandSeparator || ','}
                                    onChange={(value) => setAttributes({ thousandSeparator: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <RangeControl
                                label={__("Decimal Places", "digiblocks")}
                                value={decimalPlaces || 0}
                                onChange={(value) => setAttributes({ decimalPlaces: value })}
                                min={0}
                                max={10}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {decimalPlaces > 0 && (
                                <TextControl
                                    label={__("Decimal Separator", "digiblocks")}
                                    value={decimalSeparator || '.'}
                                    onChange={(value) => setAttributes({ decimalSeparator: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <div style={{ marginTop: '10px' }}>
                                <Button
                                    isPrimary
                                    onClick={animateCounter}
                                    disabled={isCounterAnimating}
                                >
                                    {__("Preview Counter Animation", "digiblocks")}
                                </Button>
                            </div>
                        </div>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
							tab="style"
							name="colors"
							title={__("Colors", "digiblocks")}
							initialOpen={true}
						>
							<TabPanel
								className="digiblocks-control-tabs"
								activeClass="active-tab"
								tabs={stateTabList}
								onSelect={(tab) => setActiveColorTab(tab.name)}
							>
								{(tab) => renderColorTabContent(tab.name)}
							</TabPanel>
						</TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
							<TypographyControl
                                label={__("Counter Typography", "digiblocks")}
                                value={typography || {}}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 48, tablet: 42, mobile: 36 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Title Typography", "digiblocks")}
                                value={titleTypography || {}}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Description Typography", "digiblocks")}
                                value={contentTypography || {}}
                                onChange={(value) => setAttributes({ contentTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        {displayIcon && (
                            <TabPanelBody
                                tab="style"
                                name="icon"
                                title={__("Icon", "digiblocks")}
                                initialOpen={false}
                            >
                                <ResponsiveControl
                                    label={__("Icon Size", "digiblocks")}
                                >
                                    <RangeControl
                                        value={iconSize && iconSize[localActiveDevice] ? iconSize[localActiveDevice] : 32}
                                        onChange={(value) => setAttributes({
                                            iconSize: {
                                                ...iconSize || { desktop: 32, tablet: 28, mobile: 24 },
                                                [localActiveDevice]: value
                                            }
                                        })}
                                        min={8}
                                        max={200}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                                
                                <SelectControl
                                    label={__("Border Style", "digiblocks")}
                                    value={iconBorderStyle || 'default'}
                                    options={borderStyleOptions}
                                    onChange={(value) => {
                                        if ((value !== 'default' && value !== 'none') && 
                                            (iconBorderStyle === 'default' || iconBorderStyle === 'none' || !iconBorderStyle)) {
                                            if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                                                setAttributes({
                                                    iconBorderWidth: {
                                                        desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                                    }
                                                });
                                            }
                                        }
                                        
                                        setAttributes({ iconBorderStyle: value });
                                    }}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                                
                                {iconBorderStyle && iconBorderStyle !== 'default' && iconBorderStyle !== 'none' && (
                                    <>
                                        <PanelColorSettings
                                            title={__("Border Colors", "digiblocks")}
                                            enableAlpha={true}
                                            colorSettings={[
                                                {
                                                    value: iconBorderColor,
                                                    onChange: (value) => setAttributes({ iconBorderColor: value }),
                                                    label: __("Border Color", "digiblocks")
                                                },
                                                {
                                                    value: iconHoverBorderColor,
                                                    onChange: (value) => setAttributes({ iconHoverBorderColor: value }),
                                                    label: __("Border Hover Color", "digiblocks")
                                                }
                                            ]}
                                        />
                                        
                                        <ResponsiveControl
                                            label={__("Border Width", "digiblocks")}
                                        >
                                            <DimensionControl
                                                values={iconBorderWidth[localActiveDevice]}
                                                onChange={(value) => setAttributes({
                                                    iconBorderWidth: {
                                                        ...iconBorderWidth || {},
                                                        [localActiveDevice]: value
                                                    }
                                                })}
                                            />
                                        </ResponsiveControl>
                                        
                                        <ResponsiveControl
                                            label={__("Border Radius", "digiblocks")}
                                        >
                                            <DimensionControl
                                                values={iconBorderRadius[localActiveDevice]}
                                                onChange={(value) => setAttributes({
                                                    iconBorderRadius: {
                                                        ...iconBorderRadius || {},
                                                        [localActiveDevice]: value
                                                    }
                                                })}
                                                units={[
                                                    { label: 'px', value: 'px' },
                                                    { label: '%', value: '%' }
                                                ]}
                                            />
                                        </ResponsiveControl>
                                    </>
                                )}
                                
                                <ResponsiveControl
                                    label={__("Icon Padding", "digiblocks")}
                                >
                                    <DimensionControl
                                        values={iconPadding[localActiveDevice]}
                                        onChange={(value) => setAttributes({
                                            iconPadding: {
                                                ...iconPadding || {},
                                                [localActiveDevice]: value
                                            }
                                        })}
                                    />
                                </ResponsiveControl>
                                
                                <ResponsiveControl
                                    label={__("Icon Margin", "digiblocks")}
                                >
                                    <DimensionControl
                                        values={iconMargin && iconMargin[localActiveDevice] 
                                            ? iconMargin[localActiveDevice] 
                                            : {
                                                top: 0,
                                                right: 0,
                                                bottom: localActiveDevice === 'desktop' ? 20 : localActiveDevice === 'tablet' ? 15 : 10,
                                                left: 0,
                                                unit: 'px'
                                            }}
                                        onChange={(value) => setAttributes({
                                            iconMargin: {
                                                ...iconMargin || {
                                                    desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
                                                    tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' },
                                                    mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: 'px' }
                                                },
                                                [localActiveDevice]: value
                                            }
                                        })}
                                    />
                                </ResponsiveControl>
                            </TabPanelBody>
                        )}
                        
                        <TabPanelBody
                            tab="style"
                            name="animation"
                            title={__("Counter Animation", "digiblocks")}
                            initialOpen={false}
                        >
                            <RangeControl
                                label={__("Animation Duration (ms)", "digiblocks")}
                                value={animationDuration || 2000}
                                onChange={(value) => setAttributes({ animationDuration: value })}
                                min={100}
                                max={10000}
                                step={100}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__("Animation Delay (ms)", "digiblocks")}
                                value={animationDelay || 0}
                                onChange={(value) => setAttributes({ animationDelay: value })}
                                min={0}
                                max={10000}
                                step={100}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__("Border & Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius with defaults when a style is first selected
                                    if ((value !== 'default' && value !== 'none') && 
                                        (borderStyle === 'default' || borderStyle === 'none' || !borderStyle)) {
                                        // Set initial border width if not already set
                                        if (!borderWidth || Object.keys(borderWidth).length === 0) {
                                            setAttributes({
                                                borderWidth: {
                                                    desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                                    mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                                }
                                            });
                                        }
                                        
                                        // Set initial border radius if not already set
                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                            setAttributes({
                                                borderRadius: {
                                                    desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                                                    tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                                    mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                                }
                                            });
                                        }
                                    }
                                    
                                    setAttributes({ borderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    <PanelColorSettings
                                        title={__("Border Color", "digiblocks")}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                label: __("Border Color", "digiblocks")
                                            }
                                        ]}
                                    />
                                    
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderWidth[localActiveDevice]}
                                            onChange={(value) => setAttributes({
                                                borderWidth: {
                                                    ...borderWidth,
                                                    [localActiveDevice]: value
                                                }
                                            })}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderRadius[localActiveDevice]}
                                            onChange={(value) => setAttributes({
                                                borderRadius: {
                                                    ...borderRadius,
                                                    [localActiveDevice]: value
                                                }
                                            })}
                                            units={[
                                                { label: 'px', value: 'px' },
                                                { label: '%', value: '%' }
                                            ]}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                            
                            <SelectControl
                                label={__("Hover Effect", "digiblocks")}
                                value={hoverEffect || 'none'}
                                options={hoverEffectOptions}
                                onChange={(value) => setAttributes({ hoverEffect: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__("Spacing", "digiblocks")}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__("Padding", "digiblocks")}
                            >
                                <DimensionControl
                                    values={padding && padding[localActiveDevice] 
                                        ? padding[localActiveDevice] 
                                        : { top: 30, right: 30, bottom: 30, left: 30, unit: 'px' }}
                                    onChange={(value) => setAttributes({
                                        padding: {
                                            ...padding,
                                            [localActiveDevice]: value
                                        }
                                    })}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Margin", "digiblocks")}
                            >
                                <DimensionControl
                                    values={margin && margin[localActiveDevice] 
                                        ? margin[localActiveDevice] 
                                        : { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' }}
                                    onChange={(value) => setAttributes({
                                        margin: {
                                            ...margin,
                                            [localActiveDevice]: value
                                        }
                                    })}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__("Animation", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Animation Effect", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Animation Preview Button */}
                            {animation && animation !== 'none' && (
                                <div style={{ marginTop: '10px' }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={handlePreviewClick}
                                        style={{ width: '100%' }}
                                    >
                                        {__("Preview Animation", "digiblocks")}
                                    </Button>
                                </div>
                            )}
                        </TabPanelBody>

						<TabPanelBody
							tab="advanced"
							name="visibility"
							title={__('Visibility', 'digiblocks')}
							initialOpen={false}
						>
							<div className="components-base-control__help" style={{ 
								padding: '12px', 
								backgroundColor: '#f0f6fc', 
								border: '1px solid #c3ddfd', 
								borderRadius: '4px',
								marginBottom: '16px'
							}}>
								<strong>{__('Editor Note:', 'digiblocks')}</strong><br />
								{__('Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.', 'digiblocks')}
							</div>
							
							<ToggleControl
								label={__('Hide on Desktop', 'digiblocks')}
								checked={visibility.desktop}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										desktop: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Tablet', 'digiblocks')}
								checked={visibility.tablet}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										tablet: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Mobile', 'digiblocks')}
								checked={visibility.mobile}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										mobile: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
						</TabPanelBody>
                        
                        <TabPanelBody
                            tab="advanced"
                            name="additional"
                            title={__("Additional", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* HTML Anchor field */}
                            <div className="components-base-control html-anchor-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="html-anchor">
                                        {__("HTML anchor", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="html-anchor"
                                        value={anchor || ""}
                                        onChange={(e) =>
                                            setAttributes({ anchor: e.target.value })
                                        }
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="html-anchor-help" className="components-base-control__help">
                                    {__("Enter a word or two — without spaces — to make a unique web address just for this block, called an \"anchor\". Then, you'll be able to link directly to this section of your page.", "digiblocks")}
                                    {' '}
                                    <a 
                                        className="components-external-link" 
                                        href="https://wordpress.org/documentation/article/page-jumps/" 
                                        target="_blank" 
                                        rel="external noreferrer noopener"
                                    >
                                        <span className="components-external-link__contents">
                                            {__("Learn more about anchors", "digiblocks")}
                                        </span>
                                        <span className="components-external-link__icon" aria-label="(opens in a new tab)">↗</span>
                                    </a>
                                </p>
                            </div>

                            {/* Additional CSS classes field */}
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="additional-css-classes">
                                        {__("Additional CSS class(es)", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="additional-css-classes"
                                        value={customClasses || ""}
                                        onChange={(e) =>
                                            setAttributes({ customClasses: e.target.value })
                                        }
                                        aria-describedby="additional-css-classes-help"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="additional-css-classes-help" className="components-base-control__help">
                                    {__("Separate multiple classes with spaces.", "digiblocks")}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
    };

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-counter ${id} align-${align} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    // Format the counter values 
    const formattedCounter = formatNumber(counterValue);

    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={align}
                    onChange={(value) => setAttributes({ align: value })}
                />
            </BlockControls>

            <InspectorControls>
                <CustomTabPanel
                    tabs={tabList}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className="digiblocks-counter-inner">
                    {displayIcon && renderIcon()}
                    
                    <div className="digiblocks-counter-content">
                        <div className="digiblocks-counter-number-wrapper">
                            {counterPrefix && (
                                <span className="digiblocks-counter-prefix">{counterPrefix}</span>
                            )}
                            <span className="digiblocks-counter-number">{formattedCounter}</span>
                            {counterSuffix && (
                                <span className="digiblocks-counter-suffix">{counterSuffix}</span>
                            )}
                        </div>
                        
                        {title && (
                            <h3 className="digiblocks-counter-title">{title}</h3>
                        )}
                        
                        {description && (
                            <p className="digiblocks-counter-description">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterEdit;