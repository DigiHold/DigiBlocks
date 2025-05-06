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
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, TypographyControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;

/**
 * Edit function for the Button block
 */
const ButtonEdit = ({ attributes, setAttributes, clientId, isSelected }) => {
    const {
        id,
        anchor,
        customClasses,
        text,
        url,
        opensInNewTab,
        rel,
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
    const [activeTab, setActiveTab] = useState("options");
    
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

    // Generate CSS for button styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Size-based padding
        let sizeCSS = '';
        if (size === 'custom') {
            const currentPadding = padding[activeDevice];
            sizeCSS = `padding: ${currentPadding.top}${currentPadding.unit} ${currentPadding.right}${currentPadding.unit} ${currentPadding.bottom}${currentPadding.unit} ${currentPadding.left}${currentPadding.unit};`;
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
            const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
            const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' };
            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#333333'};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
            `;
        } else {
            borderCSS = 'border: none;';
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Margin
        const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
        
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
        `;
    };

    // Render button content
    const renderButtonContent = () => {
		const iconElement = iconValue && iconValue.svg ? (
			<span 
				key="icon"
				className="digiblocks-button-icon"
				dangerouslySetInnerHTML={{ __html: iconValue.svg }}
			/>
		) : null;
		
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
                            <FontAwesomeControl
                                label={__('Select Icon', 'digiblocks')}
                                value={iconValue}
                                onChange={(value) => setAttributes({ iconValue: value })}
                            />
                            
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
                                    // Initialize border width and radius with defaults when a style is first selected
                                    if ((value !== 'default' && value !== 'none') && 
                                        (borderStyle === 'default' || borderStyle === 'none' || !borderStyle)) {
                                        // Set initial border width if not already set
                                        if (!borderWidth || Object.keys(borderWidth).length === 0) {
                                            setAttributes({
                                                borderWidth: {
                                                    desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                                }
                                            });
                                        }
                                        
                                        // Set initial border radius if not already set
                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                            setAttributes({
                                                borderRadius: {
                                                    desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                                                    tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                                                    mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
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