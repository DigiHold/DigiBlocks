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
    ToggleControl,
    SelectControl,
    RangeControl,
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
 * Edit function for the DigiCommerce Product Meta block
 */
const DigiProductMetaEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        showCategories,
        showTags,
        categoriesLabel,
        tagsLabel,
        layout,
        alignment,
        spacing,
        padding,
        margin,
        labelTypography,
        valueTypography,
        labelColor,
        categoryColor,
        categoryHoverColor,
        tagColor,
        tagHoverColor,
        categoryBackgroundColor,
        categoryHoverBackgroundColor,
        tagBackgroundColor,
        tagHoverBackgroundColor,
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
            /* DigiCommerce Product Meta Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
            }
            
            .${id} .digiblocks-product-meta-container {
                display: flex;
                flex-direction: ${layout === 'horizontal' ? 'row' : 'column'};
                gap: ${spacing[activeDevice]}px;
                ${layout === 'horizontal' ? 'flex-wrap: wrap;' : ''}
                ${layout === 'horizontal' ? 'align-items: flex-start;' : ''}
                ${layout === 'horizontal' ? `justify-content: ${alignment[activeDevice]};` : ''}
            }
            
            .${id} .digiblocks-meta-item {
                display: flex;
                align-items: center;
				justify-content: ${alignment[activeDevice]};
                gap: 8px;
            }
            
            .${id} .digiblocks-meta-label {
                color: ${labelColor};
                ${labelTypography.fontFamily ? `font-family: ${labelTypography.fontFamily};` : ''}
                ${labelTypography.fontSize?.[activeDevice] ? `font-size: ${labelTypography.fontSize[activeDevice]}${labelTypography.fontSizeUnit || 'px'};` : ''}
                ${labelTypography.fontWeight ? `font-weight: ${labelTypography.fontWeight};` : ''}
                ${labelTypography.fontStyle ? `font-style: ${labelTypography.fontStyle};` : ''}
                ${labelTypography.textTransform ? `text-transform: ${labelTypography.textTransform};` : ''}
                ${labelTypography.textDecoration ? `text-decoration: ${labelTypography.textDecoration};` : ''}
                ${labelTypography.lineHeight?.[activeDevice] ? `line-height: ${labelTypography.lineHeight[activeDevice]}${labelTypography.lineHeightUnit || 'em'};` : ''}
                ${labelTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${labelTypography.letterSpacing[activeDevice]}${labelTypography.letterSpacingUnit || 'px'};` : ''}
                margin: 0;
                flex-shrink: 0;
            }
            
            .${id} .digiblocks-meta-value {
                ${valueTypography.fontFamily ? `font-family: ${valueTypography.fontFamily};` : ''}
                ${valueTypography.fontSize?.[activeDevice] ? `font-size: ${valueTypography.fontSize[activeDevice]}${valueTypography.fontSizeUnit || 'px'};` : ''}
                ${valueTypography.fontWeight ? `font-weight: ${valueTypography.fontWeight};` : ''}
                ${valueTypography.fontStyle ? `font-style: ${valueTypography.fontStyle};` : ''}
                ${valueTypography.textTransform ? `text-transform: ${valueTypography.textTransform};` : ''}
                ${valueTypography.textDecoration ? `text-decoration: ${valueTypography.textDecoration};` : ''}
                ${valueTypography.lineHeight?.[activeDevice] ? `line-height: ${valueTypography.lineHeight[activeDevice]}${valueTypography.lineHeightUnit || 'em'};` : ''}
                ${valueTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${valueTypography.letterSpacing[activeDevice]}${valueTypography.letterSpacingUnit || 'px'};` : ''}
                margin: 0;
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }
            
            .${id} .digiblocks-category-link,
            .${id} .digiblocks-tag-link {
                text-decoration: none;
                padding: 4px 8px;
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                transition: all 0.3s ease;
                display: inline-block;
                font-size: 0.9em;
            }
            
            .${id} .digiblocks-category-link {
                color: ${categoryColor};
                background-color: ${categoryBackgroundColor};
            }
            
            .${id} .digiblocks-category-link:hover {
                color: ${categoryHoverColor};
                background-color: ${categoryHoverBackgroundColor};
            }
            
            .${id} .digiblocks-tag-link {
                color: ${tagColor};
                background-color: ${tagBackgroundColor};
            }
            
            .${id} .digiblocks-tag-link:hover {
                color: ${tagHoverColor};
                background-color: ${tagHoverBackgroundColor};
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
                            name="content"
                            title={__('Content', 'digiblocks')}
                            initialOpen={true}
                        >
							<Notice
								status="warning"
								isDismissible={false}
								className="digiblocks-notice components-base-control"
							>
								{__('This is a placeholder. The actual meta will be displayed on single product pages.', 'digiblocks')}
							</Notice>
                            
                            <ToggleControl
                                label={__('Show Categories', 'digiblocks')}
                                checked={showCategories}
                                onChange={(value) => setAttributes({ showCategories: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showCategories && (
                                <TextControl
                                    label={__('Categories Label', 'digiblocks')}
                                    value={categoriesLabel}
                                    onChange={(value) => setAttributes({ categoriesLabel: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <ToggleControl
                                label={__('Show Tags', 'digiblocks')}
                                checked={showTags}
                                onChange={(value) => setAttributes({ showTags: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showTags && (
                                <TextControl
                                    label={__('Tags Label', 'digiblocks')}
                                    value={tagsLabel}
                                    onChange={(value) => setAttributes({ tagsLabel: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="layout"
                            title={__('Layout', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleGroupControl
                                label={__("Layout", "digiblocks")}
                                value={layout}
                                onChange={(value) => setAttributes({ layout: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="vertical" 
                                    label={__("Vertical", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="horizontal" 
                                    label={__("Horizontal", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            <ResponsiveControl
                                label={__('Alignment', 'digiblocks')}
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
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Item Spacing', 'digiblocks')}
                            >
                                <RangeControl
                                    value={spacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            spacing: {
                                                ...spacing,
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
                                                        value: labelColor,
                                                        onChange: (value) => setAttributes({ labelColor: value }),
                                                        label: __("Label Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: categoryColor,
                                                        onChange: (value) => setAttributes({ categoryColor: value }),
                                                        label: __("Category Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: categoryBackgroundColor,
                                                        onChange: (value) => setAttributes({ categoryBackgroundColor: value }),
                                                        label: __("Category Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: tagColor,
                                                        onChange: (value) => setAttributes({ tagColor: value }),
                                                        label: __("Tag Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: tagBackgroundColor,
                                                        onChange: (value) => setAttributes({ tagBackgroundColor: value }),
                                                        label: __("Tag Background", "digiblocks"),
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
                                                        value: categoryHoverColor,
                                                        onChange: (value) => setAttributes({ categoryHoverColor: value }),
                                                        label: __("Category Hover Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: categoryHoverBackgroundColor,
                                                        onChange: (value) => setAttributes({ categoryHoverBackgroundColor: value }),
                                                        label: __("Category Hover Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: tagHoverColor,
                                                        onChange: (value) => setAttributes({ tagHoverColor: value }),
                                                        label: __("Tag Hover Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: tagHoverBackgroundColor,
                                                        onChange: (value) => setAttributes({ tagHoverBackgroundColor: value }),
                                                        label: __("Tag Hover Background", "digiblocks"),
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
                                label={__('Label Typography', 'digiblocks')}
                                value={labelTypography}
                                onChange={(value) => setAttributes({ labelTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: { desktop: 0.5, tablet: 0.5, mobile: 0.5 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Value Typography', 'digiblocks')}
                                value={valueTypography}
                                onChange={(value) => setAttributes({ valueTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
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
    const animationClass = (animation !== 'none') ? ` animate-${animation}` : '';
    const blockClasses = `digiblocks-product-meta ${id} ${customClasses || ""}${animationClass}`;

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
                <div className="digiblocks-product-meta-container">
                    {showCategories && (
                        <div className="digiblocks-meta-item digiblocks-categories-item">
                            <span className="digiblocks-meta-label">{categoriesLabel}</span>
                            <div className="digiblocks-meta-value">
                                <a href="#" className="digiblocks-category-link" onClick={(e) => e.preventDefault()}>
                                    {__('Digital Products', 'digiblocks')}
                                </a>
                                <a href="#" className="digiblocks-category-link" onClick={(e) => e.preventDefault()}>
                                    {__('Software', 'digiblocks')}
                                </a>
                            </div>
                        </div>
                    )}
                    
                    {showTags && (
                        <div className="digiblocks-meta-item digiblocks-tags-item">
                            <span className="digiblocks-meta-label">{tagsLabel}</span>
                            <div className="digiblocks-meta-value">
                                <a href="#" className="digiblocks-tag-link" onClick={(e) => e.preventDefault()}>
                                    {__('download', 'digiblocks')}
                                </a>
                                <a href="#" className="digiblocks-tag-link" onClick={(e) => e.preventDefault()}>
                                    {__('digital', 'digiblocks')}
                                </a>
                                <a href="#" className="digiblocks-tag-link" onClick={(e) => e.preventDefault()}>
                                    {__('instant', 'digiblocks')}
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DigiProductMetaEdit;