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
    SelectControl,
    ToggleControl,
    Notice,
    Button,
    TabPanel,
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
 * Edit function for the DigiCommerce Product Content block
 */
const DigiProductContentEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        contentType,
        alignment,
        padding,
        margin,
        typography,
        textColor,
        linkColor,
        linkHoverColor,
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

    // Content type options
    const contentTypeOptions = [
        { label: __('Product Description', 'digiblocks'), value: 'description' },
        { label: __('Short Description', 'digiblocks'), value: 'short_description' },
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
            /* DigiCommerce Product Content Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
            }
            
            .${id} .digiblocks-product-content {
                text-align: ${alignment[activeDevice]};
                color: ${textColor};
                ${typography.fontFamily ? `font-family: ${typography.fontFamily};` : ''}
                ${typography.fontSize?.[activeDevice] ? `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};` : ''}
                ${typography.fontWeight ? `font-weight: ${typography.fontWeight};` : ''}
                ${typography.fontStyle ? `font-style: ${typography.fontStyle};` : ''}
                ${typography.textTransform ? `text-transform: ${typography.textTransform};` : ''}
                ${typography.textDecoration ? `text-decoration: ${typography.textDecoration};` : ''}
                ${typography.lineHeight?.[activeDevice] ? `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};` : ''}
                ${typography.letterSpacing?.[activeDevice] ? `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-product-content p {
                margin: 0 0 1em 0;
            }
            
            .${id} .digiblocks-product-content p:last-child {
                margin-bottom: 0;
            }
            
            .${id} .digiblocks-product-content a {
                color: ${linkColor};
                text-decoration: none;
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-product-content a:hover {
                color: ${linkHoverColor};
            }
            
            .${id} .digiblocks-placeholder-notice {
                padding: 12px;
                background-color: #e7f3ff;
                border: 1px solid #004085;
                border-radius: 4px;
                color: #004085;
                font-size: 14px;
                margin-bottom: 16px;
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

    // Get placeholder content based on content type
    const getPlaceholderContent = () => {
        if (contentType === 'short_description') {
            return __('This is a sample short product description. It provides a brief overview of the product features and benefits. The actual short description will be displayed here on single product pages.', 'digiblocks');
        } else {
            return `
                <h3>${__('Product Features', 'digiblocks')}</h3>
                <p>${__('This is a sample product description that would appear on the single product page. It contains detailed information about the product, its features, benefits, and usage instructions.', 'digiblocks')}</p>
                <ul>
                    <li>${__('Feature 1: High-quality materials and construction', 'digiblocks')}</li>
                    <li>${__('Feature 2: Easy to use and user-friendly design', 'digiblocks')}</li>
                    <li>${__('Feature 3: Compatible with multiple platforms', 'digiblocks')}</li>
                </ul>
                <p>${__('The actual product description content will be displayed here when viewing a single product page.', 'digiblocks')}</p>
            `;
        }
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="content"
                            title={__('Content', 'digiblocks')}
                            initialOpen={true}
                        >
                            <Notice
                                status="warning"
                                isDismissible={false}
                                className="digiblocks-notice components-base-control"
                            >
                                {__('This is a placeholder. The actual product content will be displayed on single product pages.', 'digiblocks')}
                            </Notice>
                            
                            <SelectControl
                                label={__('Content Type', 'digiblocks')}
                                value={contentType}
                                options={contentTypeOptions}
                                onChange={(value) => setAttributes({ contentType: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="alignment"
                            title={__('Alignment', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Text Alignment', 'digiblocks')}
                            >
                                <ToggleGroupControl
                                    value={alignment[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            alignment: {
                                                ...alignment,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
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
                                    <ToggleGroupControlOption 
                                        value="justify" 
                                        label={__("Justify", "digiblocks")}
                                    />
                                </ToggleGroupControl>
                            </ResponsiveControl>
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
                                            <PanelColorSettings
                                                title={__("Colors", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: textColor,
                                                        onChange: (value) => setAttributes({ textColor: value }),
                                                        label: __("Text Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: linkColor,
                                                        onChange: (value) => setAttributes({ linkColor: value }),
                                                        label: __("Link Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    } else {
                                        return (
                                            <PanelColorSettings
                                                title={__("Hover Colors", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: linkHoverColor,
                                                        onChange: (value) => setAttributes({ linkHoverColor: value }),
                                                        label: __("Link Hover Color", "digiblocks"),
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
                                label={__('Typography', 'digiblocks')}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
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
    const animationClass = (animation !== 'none') ? ` animate-${animation}` : '';
    const blockClasses = `digiblocks-product-content-wrapper ${id} ${customClasses || ""}${animationClass}`;

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
                <div 
                    className="digiblocks-product-content"
                    dangerouslySetInnerHTML={{ __html: getPlaceholderContent() }}
                />
            </div>
        </>
    );
};

export default DigiProductContentEdit;