/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
} = wp.blockEditor;
const {
    TextControl,
    SelectControl,
    RangeControl,
    Notice,
    Button,
    TabPanel,
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
const { ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the DigiCommerce Product Add To Cart block
 */
const DigiProductAddToCartEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        buttonText,
        buttonAlignment,
        buttonWidth,
        buttonCustomWidth,
        backgroundColor,
        textColor,
        backgroundHoverColor,
        textHoverColor,
        variationBackgroundColor,
        variationTextColor,
        variationBorderColor,
        padding,
        margin,
        buttonPadding,
        buttonBorderRadius,
        variationBorderRadius,
        typography,
        animation,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
        // Try to get the saved tab for this block
        if (window.digi.uiState) {
            const savedTab = window.digi.uiState.getActiveTab(clientId);
            if (savedTab) return savedTab;
        }
        return "options"; // Default fallback
    });
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
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

    // Button click handler
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

        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        return `
            /* DigiCommerce Product Add To Cart Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                width: 100%;
            }
            
            .${id} .digiblocks-digi-add-to-cart-container {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            .${id} .digiblocks-digi-variations {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
            }
            
            .${id} .digiblocks-digi-variation-item {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-digi-variation-item input[type="radio"] {
                display: none;
            }
            
            .${id} .digiblocks-digi-variation-item label {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 12px 16px;
                background-color: ${variationBackgroundColor};
                color: ${variationTextColor};
                border: 2px solid ${variationBorderColor};
                ${getDimensionCSS(variationBorderRadius, 'border-radius', activeDevice)}
                transition: all 0.3s ease;
                margin: 0;
            }
            
            .${id} .digiblocks-digi-variation-item input[type="radio"]:checked + label {
                border-color: ${backgroundColor};
                background-color: ${backgroundColor}20;
                color: ${backgroundColor};
            }
            
            .${id} .digiblocks-digi-variation-item label:hover {
                border-color: ${backgroundColor};
                transform: translateY(-1px);
            }
            
            .${id} .digiblocks-digi-variation-name {
                font-weight: 600;
                font-size: 14px;
                margin-bottom: 4px;
            }
            
            .${id} .digiblocks-digi-variation-price {
                font-weight: 500;
                font-size: 13px;
            }
            
            .${id} .digiblocks-digi-actions {
                display: flex;
                justify-content: ${buttonAlignment};
            }
            
            .${id} .digiblocks-digi-add-to-cart-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background-color: ${backgroundColor};
                color: ${textColor};
                ${buttonWidth === 'full' ? 'width: 100%;' : buttonWidth === 'custom' ? `width: ${buttonCustomWidth[activeDevice]}px;` : 'width: auto;'}
                ${typography.fontFamily ? `font-family: ${typography.fontFamily};` : ''}
                ${typography.fontSize?.[activeDevice] ? `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};` : ''}
                ${typography.fontWeight ? `font-weight: ${typography.fontWeight};` : ''}
                ${typography.fontStyle ? `font-style: ${typography.fontStyle};` : ''}
                ${typography.textTransform ? `text-transform: ${typography.textTransform};` : ''}
                ${typography.textDecoration ? `text-decoration: ${typography.textDecoration};` : ''}
                ${typography.lineHeight?.[activeDevice] ? `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};` : ''}
                ${typography.letterSpacing?.[activeDevice] ? `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};` : ''}
                text-decoration: none;
                border: none;
                cursor: pointer;
                ${getDimensionCSS(buttonPadding, 'padding', activeDevice)}
                ${getDimensionCSS(buttonBorderRadius, 'border-radius', activeDevice)}
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-digi-add-to-cart-button:hover {
                background-color: ${backgroundHoverColor || backgroundColor};
                color: ${textHoverColor || textColor};
                transform: translateY(-1px);
            }
            
            .${id} .digiblocks-digi-add-to-cart-button:active {
                transform: translateY(0);
            }
            
            .${id} .digiblocks-digi-add-to-cart-button svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
                flex-shrink: 0;
            }
            
            /* Animation keyframes */
            ${animationCSS}

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
                            name="notice"
                            title={__('Notice', 'digiblocks')}
                            initialOpen={true}
                        >
                            <Notice
                                status="warning"
                                isDismissible={false}
                                className="digiblocks-notice components-base-control"
                            >
                                {__('This is a placeholder. The actual add to cart button will be displayed on single DigiCommerce product pages.', 'digiblocks')}
                            </Notice>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="content"
                            title={__('Content', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TextControl
                                label={__('Button Text', 'digiblocks')}
                                value={buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                                __next40pxDefaultSize={true}
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
                                label={__("Button Alignment", "digiblocks")}
                                value={buttonAlignment}
                                onChange={(value) => setAttributes({ buttonAlignment: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="flex-start" 
                                    label={__("Left", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="center" 
                                    label={__("Center", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="flex-end" 
                                    label={__("Right", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            <SelectControl
                                label={__('Button Width', 'digiblocks')}
                                value={buttonWidth}
                                options={[
                                    { label: __('Auto', 'digiblocks'), value: 'auto' },
                                    { label: __('Full Width', 'digiblocks'), value: 'full' },
                                    { label: __('Custom', 'digiblocks'), value: 'custom' }
                                ]}
                                onChange={(value) => setAttributes({ buttonWidth: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {buttonWidth === 'custom' && (
                                <ResponsiveControl
                                    label={__('Custom Width', 'digiblocks')}
                                >
                                    <RangeControl
                                        value={buttonCustomWidth[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                buttonCustomWidth: {
                                                    ...buttonCustomWidth,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                        min={100}
                                        max={500}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
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
                                                    title={__("Button Colors", "digiblocks")}
                                                    initialOpen={true}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: backgroundColor,
                                                            onChange: (value) => setAttributes({ backgroundColor: value }),
                                                            label: __("Background Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: textColor,
                                                            onChange: (value) => setAttributes({ textColor: value }),
                                                            label: __("Text Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Variations Colors", "digiblocks")}
                                                    initialOpen={false}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: variationBackgroundColor,
                                                            onChange: (value) => setAttributes({ variationBackgroundColor: value }),
                                                            label: __("Background", "digiblocks"),
                                                        },
                                                        {
                                                            value: variationTextColor,
                                                            onChange: (value) => setAttributes({ variationTextColor: value }),
                                                            label: __("Text", "digiblocks"),
                                                        },
                                                        {
                                                            value: variationBorderColor,
                                                            onChange: (value) => setAttributes({ variationBorderColor: value }),
                                                            label: __("Border", "digiblocks"),
                                                        }
                                                    ]}
                                                />
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
                                                        value: backgroundHoverColor,
                                                        onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                                                        label: __("Background Hover Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: textHoverColor,
                                                        onChange: (value) => setAttributes({ textHoverColor: value }),
                                                        label: __("Text Hover Color", "digiblocks"),
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
                                label={__('Button Typography', 'digiblocks')}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontWeight: '500',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Padding', 'digiblocks')}
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
                                label={__('Margin', 'digiblocks')}
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
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__('Borders & Radius', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Button Border Radius', 'digiblocks')}
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
                            
                            <ResponsiveControl
                                label={__('Variations Border Radius', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={variationBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            variationBorderRadius: {
                                                ...variationBorderRadius,
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
                            title={__('Additional', 'digiblocks')}
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

    // Build class names
    const blockClasses = `digiblocks-digi-product-add-to-cart ${id} ${customClasses || ""}`;

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

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className="digiblocks-digi-add-to-cart-container">
                    {/* Sample variations for preview */}
                    <div className="digiblocks-digi-variations">
                        <div className="digiblocks-digi-variation-item">
                            <input type="radio" id="personal-license" name="sample_variation" value="personal" defaultChecked />
                            <label htmlFor="personal-license">
                                <span className="digiblocks-digi-variation-name">{__('Personal License', 'digiblocks')}</span>
                                <span className="digiblocks-digi-variation-price">$29</span>
                            </label>
                        </div>
                        <div className="digiblocks-digi-variation-item">
                            <input type="radio" id="commercial-license" name="sample_variation" value="commercial" />
                            <label htmlFor="commercial-license">
                                <span className="digiblocks-digi-variation-name">{__('Commercial License', 'digiblocks')}</span>
                                <span className="digiblocks-digi-variation-price">$99</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="digiblocks-digi-actions">
                        <button className="digiblocks-digi-add-to-cart-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l7.4 36.9c2.2 10.7 11.2 18.2 22 18.2H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DigiProductAddToCartEdit;