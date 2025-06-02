/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    RichText,
} = wp.blockEditor;
const {
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    TabPanel,
    Button,
    CheckboxControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl } = digi.components;

/**
 * Edit function for the Search Form block
 */
const SearchFormEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        placeholder,
        buttonText,
        searchType,
        enableAjax,
        postTypes,
        layout,
        buttonPosition,
        inputBackgroundColor,
        inputTextColor,
        inputBorderColor,
        inputFocusBorderColor,
        buttonBackgroundColor,
        buttonTextColor,
        buttonBackgroundHoverColor,
        buttonTextHoverColor,
        dropdownBackgroundColor,
        dropdownTextColor,
        dropdownBorderColor,
        resultsBackgroundColor,
        resultsTextColor,
        resultsBorderColor,
        resultsHoverBackgroundColor,
        inputBorderStyle,
        inputBorderWidth,
        inputBorderRadius,
        buttonBorderStyle,
        buttonBorderWidth,
        buttonBorderColor,
        buttonBorderHoverColor,
        buttonBorderRadius,
        dropdownBorderStyle,
        dropdownBorderWidth,
        dropdownBorderRadius,
        inputPadding,
        buttonPadding,
        dropdownPadding,
        formGap,
        typography,
        buttonTypography,
        textTypography,
        boxShadow,
        boxShadowHover,
        padding,
        margin,
        animation,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
        if (window.digi.uiState) {
            const savedTab = window.digi.uiState.getActiveTab(clientId);
            if (savedTab) return savedTab;
        }
        return "options";
    });
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        return unsubscribe;
    }, []);

    // Use ref for animation preview
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

    // Button click handler for animation preview
    const handlePreviewClick = () => {
        animationPreview(id, animation, animations, previewTimeoutRef);
    };

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

    // Search type options
    const searchTypeOptions = [
        { label: __("All Content", "digiblocks"), value: "all" },
        { label: __("Posts Only", "digiblocks"), value: "post" },
        { label: __("Pages Only", "digiblocks"), value: "page" },
        { label: __("Custom", "digiblocks"), value: "custom" },
    ];

    // Available post types from WordPress
    const availablePostTypes = [
        { label: __("All Types", "digiblocks"), value: "all" },
        ...(window.digiBlocksData?.postTypes || [
            { label: __("Posts", "digiblocks"), value: "post" },
            { label: __("Pages", "digiblocks"), value: "page" },
        ])
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
		const activeDevice = localActiveDevice;
		
		// Form layout - only apply when button position is outside
		let layoutCSS = '';
		if (buttonPosition === 'outside') {
			if (layout === 'vertical') {
				layoutCSS = `
					flex-direction: column;
					align-items: stretch;
				`;
			} else {
				layoutCSS = `
					flex-direction: row;
					align-items: center;
				`;
			}
		} else {
			// When button is inside, always use horizontal layout
			layoutCSS = `
				flex-direction: row;
				align-items: center;
			`;
		}
	
		// Input styles
		let inputBorderCSS = '';
		if (inputBorderStyle && inputBorderStyle !== 'default' && inputBorderStyle !== 'none') {
			inputBorderCSS = `
				border-style: ${inputBorderStyle};
				border-color: ${inputBorderColor || '#e0e0e0'};
				${getDimensionCSS(inputBorderWidth, 'border-width', activeDevice)}
			`;
		} else {
			inputBorderCSS = 'border: 1px solid #e0e0e0;';
		}
	
		// Button styles
		let buttonBorderCSS = '';
		if (buttonBorderStyle && buttonBorderStyle !== 'default' && buttonBorderStyle !== 'none') {
			buttonBorderCSS = `
				border-style: ${buttonBorderStyle};
				border-color: ${buttonBorderColor};
				${getDimensionCSS(buttonBorderWidth, 'border-width', activeDevice)}
			`;
		} else {
			buttonBorderCSS = 'border: none;';
		}
	
		// Dropdown styles
		let dropdownBorderCSS = '';
		if (dropdownBorderStyle && dropdownBorderStyle !== 'default' && dropdownBorderStyle !== 'none') {
			dropdownBorderCSS = `
				border-style: ${dropdownBorderStyle};
				border-color: ${dropdownBorderColor || '#e0e0e0'};
				${getDimensionCSS(dropdownBorderWidth, 'border-width', activeDevice)}
			`;
		} else {
			dropdownBorderCSS = 'border: 1px solid #e0e0e0;';
		}
	
		// Input typography CSS
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
			if (typography.lineHeight && typography.lineHeight[activeDevice]) {
				typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};`;
			}
			if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
				typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};`;
			}
		}
	
		// Button typography CSS
		let buttonTypographyCSS = '';
		if (buttonTypography) {
			if (buttonTypography.fontFamily) {
				buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
			}
			if (buttonTypography.fontSize && buttonTypography.fontSize[activeDevice]) {
				buttonTypographyCSS += `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || 'px'};`;
			}
			if (buttonTypography.fontWeight) {
				buttonTypographyCSS += `font-weight: ${buttonTypography.fontWeight};`;
			}
			if (buttonTypography.fontStyle) {
				buttonTypographyCSS += `font-style: ${buttonTypography.fontStyle};`;
			}
			if (buttonTypography.lineHeight && buttonTypography.lineHeight[activeDevice]) {
				buttonTypographyCSS += `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || 'em'};`;
			}
			if (buttonTypography.letterSpacing && buttonTypography.letterSpacing[activeDevice]) {
				buttonTypographyCSS += `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || 'px'};`;
			}
		}
	
		// Button typography CSS
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
			if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
				textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};`;
			}
			if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
				textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};`;
			}
		}
	
		// Box shadow
		let boxShadowCSS = 'box-shadow: none;';
		if (boxShadow && boxShadow.enable) {
			const inset = boxShadow.position === 'inset' ? 'inset ' : '';
			boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
		}
	
		// Hover box shadow
		let boxShadowHoverCSS = '';
		if (boxShadowHover && boxShadowHover.enable) {
			const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
			boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
		}
	
		return `
			/* Search Form Block - ${id} */
			.${id} {
				${getDimensionCSS(padding, 'padding', activeDevice)}
				${getDimensionCSS(margin, 'margin', activeDevice)}
				${boxShadowCSS}
				transition: all 0.3s ease;
			}
	
			.${id}:hover {
				${boxShadowHoverCSS}
			}
	
			.${id} .digiblocks-search-form {
				display: flex;
				${buttonPosition === 'outside' ? `gap: ${formGap[activeDevice]}px;` : ''}
				${layoutCSS}
				width: 100%;
			}
	
			.${id} .digiblocks-search-input-wrapper {
				flex: 1;
				${buttonPosition === 'inside' ? 'position: relative;' : ''}
			}
	
			.${id} .digiblocks-search-input {
				width: 100%;
				background-color: ${inputBackgroundColor};
				color: ${inputTextColor};
				${inputBorderCSS}
				${getDimensionCSS(inputBorderRadius, 'border-radius', activeDevice)}
				${getDimensionCSS(inputPadding, 'padding', activeDevice)}
				${typographyCSS}
				transition: all 0.3s ease;
				outline: none;
				${buttonPosition === 'inside' ? 'padding-right: 100px;' : ''}
			}
	
			.${id} .digiblocks-search-input:focus {
				border-color: ${inputFocusBorderColor || inputBorderColor};
			}
	
			.${id} .digiblocks-search-input::placeholder {
				color: ${inputTextColor}99;
			}
	
			.${id} .digiblocks-search-button {
				background-color: ${buttonBackgroundColor};
				color: ${buttonTextColor};
				${buttonBorderCSS}
				${getDimensionCSS(buttonBorderRadius, 'border-radius', activeDevice)}
				${getDimensionCSS(buttonPadding, 'padding', activeDevice)}
				${buttonTypographyCSS}
				cursor: pointer;
				transition: all 0.3s ease;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 8px;
				${buttonPosition === 'inside' ? `
					position: absolute;
					right: 5px;
					top: 50%;
					transform: translateY(-50%);
					z-index: 2;
				` : ''}
			}
	
			.${id} .digiblocks-search-button:hover {
				background-color: ${buttonBackgroundHoverColor || buttonBackgroundColor};
				color: ${buttonTextHoverColor || buttonTextColor};
				border-color: ${buttonBorderHoverColor || buttonBorderColor};
			}
	
			.${id} .digiblocks-search-button svg {
				width: 16px;
				height: 16px;
				fill: currentColor;
			}
	
			.${id} .digiblocks-post-type-selector {
				background-color: ${dropdownBackgroundColor};
				color: ${dropdownTextColor};
				${dropdownBorderCSS}
				${getDimensionCSS(dropdownBorderRadius, 'border-radius', activeDevice)}
				${getDimensionCSS(dropdownPadding, 'padding', activeDevice)}
				outline: none;
				cursor: pointer;
				transition: all 0.3s ease;
				min-width: 120px;
			}
	
			.${id} .digiblocks-search-results {
				position: absolute;
				top: 100%;
				left: 0;
				right: 0;
				background-color: ${resultsBackgroundColor};
				color: ${resultsTextColor};
				border: 1px solid ${resultsBorderColor};
				border-radius: 4px;
				margin-top: 5px;
				max-height: 300px;
				overflow-y: auto;
				z-index: 1000;
				display: none;
				${textTypographyCSS}
			}
	
			.${id} .digiblocks-search-results.show {
				display: block;
			}
	
			.${id} .digiblocks-search-result-item {
				padding: 12px 16px;
				border-bottom: 1px solid ${resultsBorderColor}33;
				cursor: pointer;
				transition: all 0.3s ease;
			}
	
			.${id} .digiblocks-search-result-item:hover {
				background-color: ${resultsHoverBackgroundColor};
			}
	
			.${id} .digiblocks-search-result-item:last-child {
				border-bottom: none;
			}
	
			.${id} .digiblocks-search-result-title {
				font-weight: 600;
				margin-bottom: 4px;
			}
	
			.${id} .digiblocks-search-result-excerpt {
				font-size: 14px;
				opacity: 0.8;
				line-height: 1.4;
			}
	
			/* Responsive adjustments */
			@media (max-width: 768px) {
				.${id} .digiblocks-search-form {
					flex-direction: column;
					gap: ${Math.max(formGap[activeDevice] * 0.8, 8)}px;
				}
				
				.${id} .digiblocks-search-button {
					${buttonPosition === 'inside' ? `
						position: static;
						transform: none;
						width: 100%;
					` : ''}
				}
				
				.${id} .digiblocks-search-input {
					${buttonPosition === 'inside' ? 'padding-right: 16px;' : ''}
				}
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
                            name="general"
                            title={__('General', 'digiblocks')}
                            initialOpen={true}
                        >
                            <TextControl
                                label={__('Placeholder Text', 'digiblocks')}
                                value={placeholder}
                                onChange={(value) => setAttributes({ placeholder: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__('Button Text', 'digiblocks')}
                                value={buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__('Search Type', 'digiblocks')}
                                value={searchType}
                                options={searchTypeOptions}Box Shadow
                                onChange={(value) => setAttributes({ searchType: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {searchType === 'custom' && (
                                <div style={{ marginBottom: '24px' }}>
                                    <p>{__('Select post types to search:', 'digiblocks')}</p>
                                    {availablePostTypes.map((postType) => (
                                        <CheckboxControl
                                            key={postType.value}
                                            label={postType.label}
                                            checked={postTypes.includes(postType.value)}
                                            onChange={(checked) => {
                                                if (checked) {
                                                    setAttributes({
                                                        postTypes: [...postTypes, postType.value]
                                                    });
                                                } else {
                                                    setAttributes({
                                                        postTypes: postTypes.filter(type => type !== postType.value)
                                                    });
                                                }
                                            }}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    ))}
                                </div>
                            )}
                            
                            <ToggleControl
                                label={__('Enable AJAX Search', 'digiblocks')}
                                checked={enableAjax}
                                onChange={(value) => setAttributes({ enableAjax: value })}
                                help={__('Enable live search results without page reload', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="layout"
                            title={__('Layout', 'digiblocks')}
                            initialOpen={false}
                        >
							<ToggleGroupControl
                                label={__("Button Position", "digiblocks")}
                                value={buttonPosition}
                                onChange={(value) => setAttributes({ buttonPosition: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="inside" 
                                    label={__("Inside", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="outside" 
                                    label={__("Outside", "digiblocks")}
                                />
                            </ToggleGroupControl>

							{buttonPosition === 'outside' && (
								<>
									<ToggleGroupControl
										label={__("Layout", "digiblocks")}
										value={layout}
										onChange={(value) => setAttributes({ layout: value })}
										isBlock
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									>
										<ToggleGroupControlOption 
											value="horizontal" 
											label={__("Horizontal", "digiblocks")}
										/>
										<ToggleGroupControlOption 
											value="vertical" 
											label={__("Vertical", "digiblocks")}
										/>
									</ToggleGroupControl>

									<ResponsiveControl
										label={__('Form Gap', 'digiblocks')}
									>
										<RangeControl
											value={formGap[localActiveDevice]}
											onChange={(value) =>
												setAttributes({
													formGap: {
														...formGap,
														[localActiveDevice]: value,
													},
												})
											}
											min={0}
											max={50}
											__next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
										/>
									</ResponsiveControl>
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
                            title={__('Colors', 'digiblocks')}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => {
                                    if (tab.name === 'normal') {
                                        return (
                                            <>
                                                <PanelColorSettings
                                                    title={__("Input Colors", "digiblocks")}
                                                    initialOpen={true}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: inputBackgroundColor,
                                                            onChange: (value) => setAttributes({ inputBackgroundColor: value }),
                                                            label: __("Background Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: inputTextColor,
                                                            onChange: (value) => setAttributes({ inputTextColor: value }),
                                                            label: __("Text Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: inputBorderColor,
                                                            onChange: (value) => setAttributes({ inputBorderColor: value }),
                                                            label: __("Border Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: inputFocusBorderColor,
                                                            onChange: (value) => setAttributes({ inputFocusBorderColor: value }),
                                                            label: __("Focus Border Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Button Colors", "digiblocks")}
                                                    initialOpen={false}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: buttonBackgroundColor,
                                                            onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                                                            label: __("Background Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: buttonTextColor,
                                                            onChange: (value) => setAttributes({ buttonTextColor: value }),
                                                            label: __("Text Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: buttonBorderColor,
                                                            onChange: (value) => setAttributes({ buttonBorderColor: value }),
                                                            label: __("Border Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                {enableAjax && (
                                                    <PanelColorSettings
                                                        title={__("Search Results Colors", "digiblocks")}
                                                        initialOpen={false}
                                                        enableAlpha={true}
                                                        colorSettings={[
                                                            {
                                                                value: resultsBackgroundColor,
                                                                onChange: (value) => setAttributes({ resultsBackgroundColor: value }),
                                                                label: __("Background Color", "digiblocks"),
                                                            },
                                                            {
                                                                value: resultsTextColor,
                                                                onChange: (value) => setAttributes({ resultsTextColor: value }),
                                                                label: __("Text Color", "digiblocks"),
                                                            },
                                                            {
                                                                value: resultsBorderColor,
                                                                onChange: (value) => setAttributes({ resultsBorderColor: value }),
                                                                label: __("Border Color", "digiblocks"),
                                                            },
                                                        ]}
                                                    />
                                                )}
                                            </>
                                        );
                                    } else {
                                        return (
                                            <PanelColorSettings
                                                title={__("Hover Colors", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: buttonBackgroundHoverColor,
                                                        onChange: (value) => setAttributes({ buttonBackgroundHoverColor: value }),
                                                        label: __("Button Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: buttonTextHoverColor,
                                                        onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                                                        label: __("Button Text", "digiblocks"),
                                                    },
													{
														value: buttonBorderHoverColor,
														onChange: (value) => setAttributes({ buttonBorderHoverColor: value }),
														label: __("Button Border Color", "digiblocks"),
													},
                                                    {
                                                        value: resultsHoverBackgroundColor,
                                                        onChange: (value) => setAttributes({ resultsHoverBackgroundColor: value }),
                                                        label: __("Results Hover Background", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    }
                                }}
                            </TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__('Typography', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__('Input Typography', 'digiblocks')}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Button Typography', 'digiblocks')}
                                value={buttonTypography}
                                onChange={(value) => setAttributes({ buttonTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    fontWeight: '500',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Results Typography', 'digiblocks')}
                                value={textTypography}
                                onChange={(value) => setAttributes({ textTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    fontSizeUnit: 'px',
                                    fontWeight: 'normal',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__('Borders & Radius', 'digiblocks')}
                            initialOpen={false}
                        >
                            <h3>{__('Input Border', 'digiblocks')}</h3>
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={inputBorderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ inputBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {inputBorderStyle && inputBorderStyle !== 'default' && inputBorderStyle !== 'none' && (
                                <ResponsiveControl
                                    label={__("Border Width", "digiblocks")}
                                >
                                    <DimensionControl
                                        values={inputBorderWidth[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                inputBorderWidth: {
                                                    ...inputBorderWidth,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ResponsiveControl
                                label={__("Input Border Radius", "digiblocks")}
                            >
                                <DimensionControl
                                    values={inputBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            inputBorderRadius: {
                                                ...inputBorderRadius,
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
                            
                            <h3>{__('Button Border', 'digiblocks')}</h3>
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={buttonBorderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ buttonBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {buttonBorderStyle && buttonBorderStyle !== 'default' && buttonBorderStyle !== 'none' && (
                                <ResponsiveControl
                                    label={__("Border Width", "digiblocks")}
                                >
                                    <DimensionControl
                                        values={buttonBorderWidth[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                buttonBorderWidth: {
                                                    ...buttonBorderWidth,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ResponsiveControl
                                label={__("Button Border Radius", "digiblocks")}
                            >
                                <DimensionControl
                                    values={buttonBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonBorderRadius: {
                                                ...buttonBorderRadius,
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
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Input Padding', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={inputPadding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            inputPadding: {
                                                ...inputPadding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Button Padding', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={buttonPadding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonPadding: {
                                                ...buttonPadding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Block Padding', 'digiblocks')}
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
                                label={__('Block Margin', 'digiblocks')}
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
                            name="shadow"
                            title={__('Box Shadow', 'digiblocks')}
                            initialOpen={false}
                        >
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
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
                            title={__('Animation', 'digiblocks')}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__('Animation Effect', 'digiblocks')}
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
                            title={__('Additional', 'digiblocks')}
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

    // Build class names
    const blockClasses = `digiblocks-search-form-block ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ""}`;

    // Block props
    const blockProps = useBlockProps({
        className: blockClasses,
        id: anchor || null,
    });

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
                <form className="digiblocks-search-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="digiblocks-search-input-wrapper">
                        <input
                            type="search"
                            className="digiblocks-search-input"
                            placeholder={placeholder}
                            aria-label={__('Search', 'digiblocks')}
                        />
                        
                        {enableAjax && (
                            <div className="digiblocks-search-results">
                                <div className="digiblocks-search-result-item">
                                    <div className="digiblocks-search-result-title">
                                        {__('Sample Search Result', 'digiblocks')}
                                    </div>
                                    <div className="digiblocks-search-result-excerpt">
                                        {__('This is a preview of how search results will appear with AJAX enabled.', 'digiblocks')}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <button type="submit" className="digiblocks-search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                        {buttonText}
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchFormEdit;