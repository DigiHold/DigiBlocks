/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    LinkControl,
    MediaUpload,
    MediaUploadCheck,
} = wp.blockEditor;
const {
    TabPanel,
    SelectControl,
    Button,
    ToggleControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, ResponsiveRangeControl, ResponsiveButtonGroup, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Logo block
 */
const LogoEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        logoType,
        imageId,
        imageUrl,
        imageAlt,
        text,
        textIcon,
        iconPosition,
        iconSize,
        textTypography,
        logoWidth,
        logoHeight,
        logoAlignment,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        boxShadow,
        boxShadowHover,
        padding,
        margin,
        animation,
        hoverEffect,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");
	
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
    
    // State for FontAwesome modal
    const [iconModalOpen, setIconModalOpen] = useState(false);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Set default link URL to site URL if not set
        if (linkEnabled && !linkUrl) {
            setAttributes({ linkUrl: window.location.origin });
        }
    }, [setAttributes, linkEnabled, linkUrl]);

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

    // Border style options
    const borderStyleOptions = [
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

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
		// Get values with proper fallbacks
		const getIconSize = () => {
			const device = iconSize[activeDevice];
			if (!device || device.value === undefined) return '30px';
			return `${device.value}${device.unit || 'px'}`;
		};

		const getLogoWidth = () => {
			const device = logoWidth[activeDevice];
			if (!device || device.value === undefined) return '200';
			return `${device.value}${device.unit || 'px'}`;
		};

		const getLogoHeight = () => {
			const device = logoHeight[activeDevice];
			if (!device || device.value === undefined || device.value === 0) return '';
			return `${device.value}${device.unit || 'px'}`;
		};

		// Logo width and height
		const currentIconSize = getIconSize();
		const currentLogoWidth = getLogoWidth();
		const currentLogoHeight = getLogoHeight();
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
            `;
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Text typography CSS
        let textTypographyCSS = '';
        if (textTypography) {
            if (textTypography.fontFamily) {
                textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
            }
            
            if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
                textTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};`;
            }
            
            if (textTypography.fontWeight) {
                textTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
            }
            
            if (textTypography.fontStyle) {
                textTypographyCSS += `font-style: ${textTypography.fontStyle};`;
            }
            
            if (textTypography.textTransform) {
                textTypographyCSS += `text-transform: ${textTypography.textTransform};`;
            }
            
            if (textTypography.textDecoration) {
                textTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
            }
            
            if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
                textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};`;
            }
            
            if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
                textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};`;
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
        
        // Icon position style for text logo
        let iconPositionCSS = '';
        if (logoType === 'text' && textIcon && textIcon.svg) {
            switch (iconPosition) {
                case 'above':
                    iconPositionCSS = 'flex-direction: column;';
                    break;
                default:
                    iconPositionCSS = 'flex-direction: row;';
            }
        }
        
        return `
            /* Logo Block - ${id} */
            .${id} {
				display: flex;
				justify-content: ${logoAlignment[activeDevice]};
            }
            
            .${id} .digiblocks-logo-container {
                display: inline-flex;
                align-items: center;
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${borderCSS}
                ${boxShadowCSS}
				${getDimensionCSS(padding, 'padding', activeDevice)}
				${getDimensionCSS(margin, 'margin', activeDevice)}
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-logo-container:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
                ${hoverCSS}
            }
            
            .${id} .digiblocks-logo-image {
				min-width: 150px;
                width: ${currentLogoWidth};
				max-width: 100%;
                ${currentLogoHeight !== 'auto' ? `height: ${currentLogoHeight};` : ''}
                object-fit: contain;
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-logo-text-wrapper {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                ${iconPositionCSS}
            }
            
            .${id} .digiblocks-logo-text {
                display: inline-block;
                ${textTypographyCSS}
                color: ${textColor || '#333333'};
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-logo-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-logo-icon span {
				display: flex;
            }
            
            .${id} .digiblocks-logo-icon svg {
				display: flex;
                width: ${currentIconSize};
                height: 100%;
                fill: ${textColor || '#333333'};
                transition: fill 0.3s ease;
            }
            
            .${id} .digiblocks-logo-container:hover .digiblocks-logo-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
            }
            
            .${id} .digiblocks-logo-container:hover .digiblocks-logo-icon svg {
                ${textHoverColor ? `fill: ${textHoverColor};` : ''}
            }
            
            .${id} a {
				display: inline-flex;
                text-decoration: none;
                color: inherit;
            }
            
            .${id} .digiblocks-logo-placeholder {
                cursor: pointer;
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

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="logo-type"
                            title={__("Logo Type", "digiblocks")}
                            initialOpen={true}
                        >
                            <ToggleGroupControl
                                label={__("Logo Type", "digiblocks")}
                                value={logoType}
                                onChange={(value) => setAttributes({ logoType: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="image" 
                                    label={__("Image", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="text" 
                                    label={__("Text", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            {logoType === 'image' ? (
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                imageId: media.id,
                                                imageUrl: media.url,
                                                imageAlt: media.alt || media.title || ''
                                            });
                                        }}
                                        value={imageId}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                            <div>
                                                {!imageUrl ? (
                                                    <Button
                                                        onClick={open}
                                                        variant="secondary"
                                                        style={{ width: '100%', marginBottom: '12px' }}
                                                    >
                                                        {__('Select Logo Image', 'digiblocks')}
                                                    </Button>
                                                ) : (
                                                    <div style={{ marginBottom: '12px' }}>
                                                        <img 
                                                            src={imageUrl} 
                                                            alt={imageAlt}
                                                            style={{ 
                                                                maxWidth: '100%', 
                                                                height: 'auto',
                                                                border: '1px solid #ddd',
                                                                borderRadius: '4px',
                                                                padding: '4px'
                                                            }}
                                                        />
                                                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                                            <Button 
                                                                onClick={open}
                                                                variant="secondary"
                                                                style={{ flex: 1 }}
                                                            >
                                                                {__('Replace', 'digiblocks')}
                                                            </Button>
                                                            <Button 
                                                                onClick={() => setAttributes({ imageId: 0, imageUrl: '', imageAlt: '' })}
                                                                variant="secondary"
                                                                isDestructive
                                                                style={{ flex: 1 }}
                                                            >
                                                                {__('Remove', 'digiblocks')}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            ) : (
                                <div>
                                    <div style={{ marginTop: '16px' }}>
										{!componentsLoaded ? (
											<div style={{ textAlign: 'center', padding: '20px 0' }}>
												<div className="components-spinner"></div>
												<p>{__('Loading icon selector...', 'digiblocks')}</p>
											</div>
										) : (
											<FontAwesomeControl
												value={textIcon}
												onChange={(value) => {
													setAttributes({ textIcon: value });
													setIconModalOpen(false);
												}}
											/>
										)}
                                        
										<ToggleGroupControl
											label={__("Icon Position", "digiblocks")}
											value={iconPosition}
											onChange={(value) => setAttributes({ iconPosition: value })}
											isBlock
											__next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
											style={{ marginTop: '16px' }}
										>
											<ToggleGroupControlOption 
												value="before" 
												label={__("Before", "digiblocks")}
											/>
											<ToggleGroupControlOption 
												value="after" 
												label={__("After", "digiblocks")}
											/>
											<ToggleGroupControlOption 
												value="above" 
												label={__("Above", "digiblocks")}
											/>
										</ToggleGroupControl>
                                    </div>
                                </div>
                            )}
                            
							<ResponsiveButtonGroup
                                label={__('Alignment', 'digiblocks')}
                                value={logoAlignment}
                                onChange={(value) => setAttributes({ logoAlignment: value })}
                                options={[
                                    { label: __('Left', 'digiblocks'), value: 'flex-start' },
                                    { label: __('Center', 'digiblocks'), value: 'center' },
                                    { label: __('Right', 'digiblocks'), value: 'flex-end' },
                                ]}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="dimensions"
                            title={__("Dimensions", "digiblocks")}
                            initialOpen={false}
                        >
                            {logoType === 'image' ? (
								<>
									<ResponsiveRangeControl
										label={__("Logo Width", "digiblocks")}
										value={logoWidth}
										onChange={(value) => setAttributes({ logoWidth: value })}
										units={[
											{ label: 'px', value: 'px' },
											{ label: '%', value: '%' },
											{ label: 'em', value: 'em' },
											{ label: 'rem', value: 'rem' },
											{ label: 'vw', value: 'vw' },
										]}
										defaultUnit="px"
										min={0}
										max={1000}
										step={1}
										defaultValues={{
											desktop: 200,
											tablet: 180,
											mobile: 150
										}}
									/>

									<ResponsiveRangeControl
										label={__("Logo Height", "digiblocks")}
										value={logoHeight}
										onChange={(value) => setAttributes({ logoHeight: value })}
										units={[
											{ label: 'px', value: 'px' },
											{ label: '%', value: '%' },
											{ label: 'em', value: 'em' },
											{ label: 'rem', value: 'rem' },
											{ label: 'vh', value: 'vh' },
										]}
										defaultUnit="px"
										min={0}
										max={500}
										step={1}
										defaultValues={{
											desktop: 0,
											tablet: 0,
											mobile: 0
										}}
									/>
								</>
							) : (
								<ResponsiveRangeControl
									label={__("Icon Size", "digiblocks")}
									value={iconSize}
									onChange={(value) => setAttributes({ iconSize: value })}
									units={[
										{ label: 'px', value: 'px' },
										{ label: 'em', value: 'em' },
										{ label: 'rem', value: 'rem' },
									]}
									defaultUnit="px"
									min={0}
									max={1000}
									step={1}
									defaultValues={{
										desktop: 30,
										tablet: 28,
										mobile: 26
									}}
								/>
							)}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="link"
                            title={__("Link Settings", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Enable Link', 'digiblocks')}
                                checked={linkEnabled}
                                onChange={(value) => {
                                    setAttributes({ linkEnabled: value });
                                    // Set default link URL when enabling
                                    if (value && !linkUrl) {
                                        setAttributes({ linkUrl: window.location.origin });
                                    }
                                }}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {linkEnabled && (
                                <>
                                    <p style={{ 
                                        fontSize: '12px', 
                                        color: '#666', 
                                        marginBottom: '12px',
                                        fontStyle: 'italic' 
                                    }}>
                                        {__('By default, the logo links to the site URL. You can change it by adding a custom URL below.', 'digiblocks')}
                                    </p>
                                    <LinkControl
                                        value={{
                                            url: linkUrl,
                                            opensInNewTab: linkOpenInNewTab,
                                            rel: linkRel
                                        }}
                                        settings={[
                                            {
                                                id: 'opensInNewTab',
                                                title: __('Open in new tab', 'digiblocks'),
                                            },
                                            {
                                                id: 'rel',
                                                title: __('Add noopener noreferrer', 'digiblocks'),
                                            },
                                        ]}
                                        onChange={(newLink) => {
                                            setAttributes({
                                                linkUrl: newLink.url,
                                                linkOpenInNewTab: newLink.opensInNewTab,
                                                linkRel: newLink.rel
                                            });
                                        }}
                                        onRemove={() => {
                                            setAttributes({
                                                linkUrl: '',
                                                linkOpenInNewTab: false,
                                                linkRel: ''
                                            });
                                        }}
                                        suggestionsQuery={{
                                            type: 'post',
                                            subtype: 'any',
                                        }}
                                        forceIsEditingLink={false}
                                    />
                                </>
                            )}
                        </TabPanelBody>
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
                            {logoType === 'text' && (
                                <TabPanel
                                    className="digiblocks-control-tabs first"
                                    activeClass="active-tab"
                                    tabs={stateTabList}
                                >
                                    {(tab) => (
                                        <PanelColorSettings
                                            title={__(
                                                tab.name === 'normal' ? "Text Colors" : "Text Hover Colors",
                                                "digiblocks"
                                            )}
                                            initialOpen={true}
                                            enableAlpha={true}
                                            colorSettings={[
                                                {
                                                    value: tab.name === 'normal' ? textColor : textHoverColor,
                                                    onChange: (value) =>
                                                        setAttributes(
                                                            tab.name === 'normal' 
                                                                ? { textColor: value }
                                                                : { textHoverColor: value }
                                                        ),
                                                    label: __("Text Color", "digiblocks"),
                                                },
                                            ]}
                                        />
                                    )}
                                </TabPanel>
                            )}
                            
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={__(
                                            tab.name === 'normal' ? "Background Colors" : "Background Hover Colors",
                                            "digiblocks"
                                        )}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: tab.name === 'normal' ? backgroundColor : backgroundHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === 'normal' 
                                                            ? { backgroundColor: value }
                                                            : { backgroundHoverColor: value }
                                                    ),
                                                label: __("Background Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>
                        </TabPanelBody>
                        
                        {logoType === 'text' && (
                            <TabPanelBody
                                tab="style"
                                name="typography"
                                title={__("Typography", "digiblocks")}
                                initialOpen={false}
                            >
                                <TypographyControl
                                    label={__("Text Typography", "digiblocks")}
                                    value={textTypography}
                                    onChange={(value) => setAttributes({ textTypography: value })}
                                    defaults={{
                                        fontSize: { desktop: 28, tablet: 26, mobile: 24 },
                                        fontSizeUnit: 'px',
                                        lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                                        lineHeightUnit: 'em',
                                    }}
                                />
                            </TabPanelBody>
                        )}
                        
                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__("Border", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    setAttributes({ borderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle && borderStyle !== 'none' && (
                                <>
                                    <TabPanel
                                        className="digiblocks-control-tabs"
                                        activeClass="active-tab"
                                        tabs={stateTabList}
                                    >
                                        {(tab) => (
                                            <PanelColorSettings
                                                title={__(
                                                    tab.name === 'normal' ? "Border Colors" : "Border Hover Colors",
                                                    "digiblocks"
                                                )}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: tab.name === 'normal' ? borderColor : borderHoverColor,
                                                        onChange: (value) =>
                                                            setAttributes(
                                                                tab.name === 'normal' 
                                                                    ? { borderColor: value }
                                                                    : { borderHoverColor: value }
                                                            ),
                                                        label: __("Border Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        )}
                                    </TabPanel>
                                    
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderWidth[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderWidth: {
                                                        ...borderWidth,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderRadius[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderRadius: {
                                                        ...borderRadius,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            units={[
                                                { label: 'px', value: 'px' },
                                                { label: '%', value: '%' }
                                            ]}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="shadow"
                            title={__("Box Shadow", "digiblocks")}
                            initialOpen={false}
                        >
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
                                    values={padding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            padding: {
                                                ...padding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            <ResponsiveControl
                                label={__("Margin", "digiblocks")}
                            >
                                <DimensionControl
                                    values={margin[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            margin: {
                                                ...margin,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="hover-effect"
                            title={__("Hover Effect", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Hover Effect", "digiblocks")}
                                value={hoverEffect}
                                options={hoverEffectOptions}
                                onChange={(value) => setAttributes({ hoverEffect: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
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
                                        onChange={(e) => setAttributes({ anchor: e.target.value })}
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="html-anchor-help" className="components-base-control__help">
                                    {__("Enter a word or two — without spaces — to make a unique web address just for this block, called an \"anchor\". Then, you'll be able to link directly to this section of your page.", "digiblocks")}
                                </p>
                            </div>

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
                                        onChange={(e) => setAttributes({ customClasses: e.target.value })}
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

    // Block props
    const blockProps = useBlockProps({
        className: `digiblocks-logo ${id} ${customClasses || ''}`,
        id: anchor || null,
    });

    // Render logo content
    const renderLogo = () => {
		const logoContent = logoType === 'image' ? (
			imageUrl ? (
				<img 
					src={imageUrl} 
					alt={imageAlt}
					className="digiblocks-logo-image"
				/>
			) : (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								imageId: media.id,
								imageUrl: media.url,
								imageAlt: media.alt || media.title || ''
							});
						}}
						value={imageId}
						allowedTypes={['image']}
						render={({ open }) => (
							<div 
								className="digiblocks-logo-placeholder"
								style={{ 
									padding: '20px', 
									border: '2px dashed #ccc', 
									textAlign: 'center',
									color: '#999',
									cursor: 'pointer'
								}}
								onClick={open}
							>
								{__('Select logo image', 'digiblocks')}
							</div>
						)}
					/>
				</MediaUploadCheck>
			)
		) : (
			<div className="digiblocks-logo-text-wrapper">
				{textIcon && textIcon.svg && iconPosition === 'above' && (
					<div className="digiblocks-logo-icon">
						<span dangerouslySetInnerHTML={{ __html: textIcon.svg }} />
					</div>
				)}
				{textIcon && textIcon.svg && iconPosition === 'before' && (
					<div className="digiblocks-logo-icon">
						<span dangerouslySetInnerHTML={{ __html: textIcon.svg }} />
					</div>
				)}
				<RichText
					className="digiblocks-logo-text"
					tagName="span"
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					placeholder={__('Enter your logo text...', 'digiblocks')}
					allowedFormats={[]}
				/>
				{textIcon && textIcon.svg && iconPosition === 'after' && (
					<div className="digiblocks-logo-icon">
						<span dangerouslySetInnerHTML={{ __html: textIcon.svg }} />
					</div>
				)}
			</div>
		);
	
		const containerContent = (
			<div className="digiblocks-logo-container">
				{logoContent}
			</div>
		);
	
		// In the editor, use # for links to prevent navigation
		return linkEnabled ? (
			<a href="#" onClick={(e) => e.preventDefault()} className="digiblocks-logo-link">
				{containerContent}
			</a>
		) : (
			containerContent
		);
	};

    return (
        <>
            <InspectorControls>
                <CustomTabPanel
                    tabs={tabList}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                {renderLogo()}
            </div>
        </>
    );
};

export default LogoEdit;