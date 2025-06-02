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
    ToggleControl,
    SelectControl,
    Button,
    Notice,
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
 * Edit function for the Product Price block
 */
const WooPriceEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        showRegularPrice,
        showSalePrice,
        showCurrency,
        alignment,
        priceColor,
        salePriceColor,
        regularPriceColor,
        currencyColor,
        backgroundColor,
        padding,
        margin,
        priceTypography,
        regularPriceTypography,
        borderRadius,
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

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        return `
            /* Product Price Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                text-align: ${alignment};
                display: inline-block;
                width: 100%;
            }
            
            .${id} .digiblocks-price-wrapper {
                display: inline-flex;
                align-items: baseline;
                gap: 8px;
                flex-wrap: wrap;
            }
            
            .${id} .digiblocks-price {
                color: ${priceColor};
                ${priceTypography.fontFamily ? `font-family: ${priceTypography.fontFamily};` : ''}
                ${priceTypography.fontSize?.[activeDevice] ? `font-size: ${priceTypography.fontSize[activeDevice]}${priceTypography.fontSizeUnit || 'px'};` : ''}
                ${priceTypography.fontWeight ? `font-weight: ${priceTypography.fontWeight};` : ''}
                ${priceTypography.fontStyle ? `font-style: ${priceTypography.fontStyle};` : ''}
                ${priceTypography.textTransform ? `text-transform: ${priceTypography.textTransform};` : ''}
                ${priceTypography.textDecoration ? `text-decoration: ${priceTypography.textDecoration};` : ''}
                ${priceTypography.lineHeight?.[activeDevice] ? `line-height: ${priceTypography.lineHeight[activeDevice]}${priceTypography.lineHeightUnit || 'em'};` : ''}
                ${priceTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${priceTypography.letterSpacing[activeDevice]}${priceTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-sale-price {
                color: ${salePriceColor};
            }
            
            .${id} .digiblocks-regular-price {
                color: ${regularPriceColor};
                ${regularPriceTypography.fontFamily ? `font-family: ${regularPriceTypography.fontFamily};` : ''}
                ${regularPriceTypography.fontSize?.[activeDevice] ? `font-size: ${regularPriceTypography.fontSize[activeDevice]}${regularPriceTypography.fontSizeUnit || 'px'};` : ''}
                ${regularPriceTypography.fontWeight ? `font-weight: ${regularPriceTypography.fontWeight};` : ''}
                ${regularPriceTypography.fontStyle ? `font-style: ${regularPriceTypography.fontStyle};` : ''}
                ${regularPriceTypography.textTransform ? `text-transform: ${regularPriceTypography.textTransform};` : ''}
                ${regularPriceTypography.textDecoration ? `text-decoration: ${regularPriceTypography.textDecoration};` : ''}
                ${regularPriceTypography.lineHeight?.[activeDevice] ? `line-height: ${regularPriceTypography.lineHeight[activeDevice]}${regularPriceTypography.lineHeightUnit || 'em'};` : ''}
                ${regularPriceTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${regularPriceTypography.letterSpacing[activeDevice]}${regularPriceTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-currency {
                color: ${currencyColor || 'inherit'};
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
                            name="display"
                            title={__('Display Options', 'digiblocks')}
                            initialOpen={true}
                        >
							<Notice
								status="warning"
								isDismissible={false}
								className="digiblocks-notice components-base-control"
							>
								{__('This is a placeholder. The actual product price will be displayed on frontend.', 'digiblocks')}
							</Notice>

                            <ToggleControl
                                label={__('Show Sale Price', 'digiblocks')}
                                checked={showSalePrice}
                                onChange={(value) => setAttributes({ showSalePrice: value })}
                                help={__('Display the sale price when product is on sale', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Show Regular Price', 'digiblocks')}
                                checked={showRegularPrice}
                                onChange={(value) => setAttributes({ showRegularPrice: value })}
                                help={__('Display the regular price when product is on sale', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Show Currency Symbol', 'digiblocks')}
                                checked={showCurrency}
                                onChange={(value) => setAttributes({ showCurrency: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleGroupControl
                                label={__("Alignment", "digiblocks")}
                                value={alignment}
                                onChange={(value) => setAttributes({ alignment: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="left" 
                                    label={__("Left", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="center" 
                                    label={__("Center", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="right" 
                                    label={__("Right", "digiblocks")}
                                />
                            </ToggleGroupControl>
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
                            <PanelColorSettings
                                title={__("Price Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: priceColor,
                                        onChange: (value) => setAttributes({ priceColor: value }),
                                        label: __("Price Color", "digiblocks"),
                                    },
                                    {
                                        value: salePriceColor,
                                        onChange: (value) => setAttributes({ salePriceColor: value }),
                                        label: __("Sale Price Color", "digiblocks"),
                                    },
                                    {
                                        value: regularPriceColor,
                                        onChange: (value) => setAttributes({ regularPriceColor: value }),
                                        label: __("Regular Price Color", "digiblocks"),
                                    },
                                    {
                                        value: currencyColor,
                                        onChange: (value) => setAttributes({ currencyColor: value }),
                                        label: __("Currency Color", "digiblocks"),
                                    },
                                    {
                                        value: backgroundColor,
                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                ]}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__('Typography', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__('Price Typography', 'digiblocks')}
                                value={priceTypography}
                                onChange={(value) => setAttributes({ priceTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Regular Price Typography', 'digiblocks')}
                                value={regularPriceTypography}
                                onChange={(value) => setAttributes({ regularPriceTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 18, tablet: 16, mobile: 14 },
                                    fontWeight: '400',
                                    textDecoration: 'line-through',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
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
                                label={__('Border Radius', 'digiblocks')}
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
    const blockClasses = `digiblocks-woo-price ${id} ${customClasses || ""}`;

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
                <div className="digiblocks-price-wrapper">
                    {showSalePrice && (
                        <span className="digiblocks-price digiblocks-sale-price">
                            {showCurrency && <span className="digiblocks-currency">$</span>}
                            19.99
                        </span>
                    )}
                    {showRegularPrice && showSalePrice && (
                        <span className="digiblocks-price digiblocks-regular-price">
                            {showCurrency && <span className="digiblocks-currency">$</span>}
                            29.99
                        </span>
                    )}
                    {!showSalePrice && (
                        <span className="digiblocks-price">
                            {showCurrency && <span className="digiblocks-currency">$</span>}
                            24.99
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};

export default WooPriceEdit;