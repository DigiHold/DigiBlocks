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
} = wp.blockEditor;
const {
    SelectControl,
    TabPanel,
    ToggleControl,
	Spinner,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, TypographyControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;

/**
 * Edit function for the Button block
 */
const ButtonEdit = ({ attributes, setAttributes, clientId, isSelected }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        text,
        url,
        opensInNewTab,
        rel,
		iconSource,
        customSvg,
        iconValue,
        iconPosition,
        size,
        fill,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        boxShadow,
        boxShadowHover,
        padding,
        margin,
        onlyIcon,
        buttonTypography,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // States
    const [isEditingURL, setIsEditingURL] = useState(false);
    
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

	// Set the icon value
    const setIconValue = (newIcon) => {
        setAttributes({ iconValue: newIcon });
    };

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
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

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

    // Size options
    const sizeOptions = [
        { label: __("Small", "digiblocks"), value: "small" },
        { label: __("Medium", "digiblocks"), value: "medium" },
        { label: __("Large", "digiblocks"), value: "large" },
        { label: __("Custom", "digiblocks"), value: "custom" },
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

    // Generate CSS for button styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Size-based padding
        let sizeCSS = '';
        if (size === 'custom') {
            sizeCSS = getDimensionCSS(padding, 'padding', activeDevice);
        } else if (size === 'small') {
            sizeCSS = 'padding: 8px 16px;';
        } else if (size === 'large') {
            sizeCSS = 'padding: 16px 32px;';
        } else {
            sizeCSS = 'padding: 12px 24px;';
        }
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
			const borderWidthCSS = getDimensionCSS(borderWidth, 'border-width', activeDevice);
			
			// If border width CSS was generated, use it, otherwise use default 1px all around
			const borderWidthStyle = borderWidthCSS || 'border-width: 1px 1px 1px 1px;';
            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#333333'};
                ${borderWidthStyle}
            `;
        } else {
            borderCSS = 'border: none;';
        }

		// Border radius
        let borderRadiusCSS = '';
		borderRadiusCSS = getDimensionCSS(borderRadius, 'border-radius', activeDevice);
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Margin
        const marginCSS = getDimensionCSS(margin, 'margin', activeDevice);
        
        // Hover effects
        let hoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Typography CSS
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
            
            if (buttonTypography.textTransform) {
                buttonTypographyCSS += `text-transform: ${buttonTypography.textTransform};`;
            }
            
            if (buttonTypography.textDecoration) {
                buttonTypographyCSS += `text-decoration: ${buttonTypography.textDecoration};`;
            }
            
            if (buttonTypography.lineHeight && buttonTypography.lineHeight[activeDevice]) {
                buttonTypographyCSS += `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || 'em'};`;
            }
            
            if (buttonTypography.letterSpacing && buttonTypography.letterSpacing[activeDevice]) {
                buttonTypographyCSS += `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        return `
            /* Button Block - ${id} */
            .${id} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease;
                ${sizeCSS}
                ${borderCSS}
                ${borderRadiusCSS}
                ${boxShadowCSS}
                ${marginCSS}
                ${fill ? 'width: 100%;' : ''}
                gap: 8px; /* Space between icon and text */
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${textColor ? `color: ${textColor};` : ''}
            }
            
            .${id}:hover {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
                ${hoverCSS}
            }
            
            /* Icon styles */
            .${id} .digiblocks-button-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-button-icon svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
            }
            
            /* Button typography */
            .${id} {
                ${buttonTypographyCSS}
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

    // Render icon
    const renderIcon = () => {
		// For library icons, use the existing approach
		if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
			return (
				<span
					key="icon"
					className="digiblocks-button-icon"
					dangerouslySetInnerHTML={{
						__html: iconValue.svg,
					}}
				/>
			);
		}
		
		// For custom SVG
		if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
			return (
				<span
					key="icon"
					className="digiblocks-button-icon"
					dangerouslySetInnerHTML={{
						__html: customSvg,
					}}
				/>
			);
		}
		
		return null;
	};

    // Render button content
    const renderButtonContent = () => {
		const iconElement = renderIcon();
		
		const textElement = !onlyIcon ? (
			<RichText
				key="text"
				value={text}
				onChange={(value) => setAttributes({ text: value })}
				placeholder={__('Add text…', 'digiblocks')}
				allowedFormats={[]}
				withoutInteractiveFormatting
				identifier="text"
			/>
		) : null;
		
		if (iconPosition === 'left') {
			return [iconElement, textElement].filter(Boolean);
		} else {
			return [textElement, iconElement].filter(Boolean);
		}
	};

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="icon"
                            title={__("Icon", "digiblocks")}
                            initialOpen={true}
                        >
                           	{/* Icon select box display */}
							<div style={{ marginBottom: '2rem' }}>
								<ToggleGroupControl
									label={__("Icon Source", "digiblocks")}
									value={iconSource || 'library'}
									onChange={(value) => setAttributes({ iconSource: value })}
									isBlock
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								>
									<ToggleGroupControlOption 
										value="library" 
										label={__("Library", "digiblocks")} 
									/>
									<ToggleGroupControlOption 
										value="custom" 
										label={__("Custom", "digiblocks")} 
									/>
								</ToggleGroupControl>

								{/* Show library picker if 'library' is selected */}
								{iconSource === 'library' && (
									<>
										{!componentsLoaded ? (
											<div style={{ textAlign: 'center', padding: '20px 0' }}>
												<Spinner />
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
									</>
								)}

								{/* Show custom SVG textarea if 'custom' is selected */}
								{iconSource === 'custom' && (
									<div style={{ marginTop: '15px' }}>
										<div className="components-base-control">
											<label className="components-base-control__label" htmlFor="custom-svg-input">
												{__('Custom SVG Code', 'digiblocks')}
											</label>
											<textarea
												id="custom-svg-input"
												className="components-textarea-control__input"
												value={customSvg || ''}
												onChange={(e) => {
													const newSvg = e.target.value;
													
													// Create an iconValue object with the custom SVG
													const newIconValue = {
														id: 'custom-svg',
														name: 'Custom SVG',
														svg: newSvg,
														style: 'custom',
														categories: ['custom']
													};
													
													// Update both the customSvg attribute and the iconValue
													setAttributes({ 
														customSvg: newSvg,
														iconValue: newIconValue
													});
												}}
												placeholder={__('Paste your SVG code here...', 'digiblocks')}
												rows={10}
												style={{ width: '100%', marginTop: '8px' }}
											/>
											<p className="components-base-control__help">
												{__('Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.', 'digiblocks')}
											</p>
										</div>
										
										{/* Preview of custom SVG */}
										{customSvg && (
											<div style={{ marginTop: '15px', marginBottom: '15px' }}>
												<p><strong>{__('Preview:', 'digiblocks')}</strong></p>
												<div style={{ padding: '20px', background: '#f0f0f1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
													<div className="digiblocks-custom-svg-preview" style={{ width: '50px', height: '50px' }} dangerouslySetInnerHTML={{ __html: customSvg }}></div>
												</div>
											</div>
										)}
									</div>
								)}
							</div>
                            
                            {iconValue && (
                                <>
                                    <ToggleControl
                                        label={__('Only Icon', 'digiblocks')}
                                        checked={onlyIcon}
                                        onChange={(value) => setAttributes({ onlyIcon: value })}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    {!onlyIcon && (
                                        <ToggleGroupControl
                                            label={__("Icon Position", "digiblocks")}
                                            value={iconPosition}
                                            onChange={(value) => setAttributes({ iconPosition: value })}
                                            isBlock
                                            __next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
                                        >
                                            <ToggleGroupControlOption 
                                                value="left" 
                                                label={__("Left", "digiblocks")} 
                                            />
                                            <ToggleGroupControlOption 
                                                value="right" 
                                                label={__("Right", "digiblocks")}
                                            />
                                        </ToggleGroupControl>
                                    )}
                                </>
                            )}
                        </TabPanelBody>
                        <TabPanelBody
                            tab="options"
                            name="link"
                            title={__("Link", "digiblocks")}
                            initialOpen={false}
                        >
							<LinkControl
								value={url ? { url, opensInNewTab, rel } : undefined}
								onChange={(newLink) => {
									setAttributes({
										url: newLink.url,
										opensInNewTab: newLink.opensInNewTab,
										rel: newLink.rel || '',
									});
									setIsEditingURL(false);
								}}
								settings={[
									{
										id: 'opensInNewTab',
										title: __('Open in new tab'),
									},
									{
										id: 'rel',
										title: __('Add noopener noreferrer'),
									}
								]}
								onRemove={() => {
									setAttributes({ url: '', opensInNewTab: false, rel: '' });
									setIsEditingURL(false);
								}}
							/>
                        </TabPanelBody>
                        <TabPanelBody
                            tab="options"
                            name="size"
                            title={__("Size and Fill", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Size", "digiblocks")}
                                value={size}
                                options={sizeOptions}
                                onChange={(value) => setAttributes({ size: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Expand to Container Width', 'digiblocks')}
                                checked={fill}
                                onChange={(value) => setAttributes({ fill: value })}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                    </>
                );
            case 'style':
                return (
                    <>
						<TabPanelBody
                            tab="style"
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={true}
                        >
                            <TypographyControl
                                label={__("Button Typography", "digiblocks")}
                                value={buttonTypography}
                                onChange={(value) =>
                                    setAttributes({ buttonTypography: value })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
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
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === 'normal'
                                                ? __("Normal Colors", "digiblocks")
                                                : __("Hover Colors", "digiblocks")
                                        }
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
                        {size === 'custom' && (
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
                            </TabPanelBody>
                        )}
                        <TabPanelBody
                            tab="style"
                            name="margin"
                            title={__("Margin", "digiblocks")}
                            initialOpen={false}
                        >
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
                            name="box-style"
                            title={__("Box Style", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width with defaults when a style is first selected
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
                                    }
                                    
                                    setAttributes({ borderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border width and border radius controls only if a border style is selected */}
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    {/* Border Colors */}
                                    <TabPanel
                                        className="digiblocks-control-tabs"
                                        activeClass="active-tab"
                                        tabs={stateTabList}
                                    >
                                        {(tab) => (
                                            <PanelColorSettings
                                                title={__("Border Colors", "digiblocks")}
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
                                    
                                    {/* Border Width */}
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
                                </>
                            )}
                                    
							{/* Border Radius */}
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
                                onNormalChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({ boxShadowHover: value })
                                }
                            />
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
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
                            initialOpen={true}
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

    // Block props
    const blockProps = useBlockProps({
        className: `digiblocks-button ${id} ${size} ${fill ? 'is-fill' : ''} ${customClasses || ''}`,
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

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                {renderButtonContent()}
            </div>
        </>
    );
};

export default ButtonEdit;