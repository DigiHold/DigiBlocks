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
    Notice,
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
const { ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the DigiCommerce Product Features block
 */
const DigiProductFeaturesEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        showTitle,
        titleText,
        titleTag,
        showAlternating,
        padding,
        margin,
        titleTypography,
        nameTypography,
        valueTypography,
        titleColor,
        nameColor,
        valueColor,
        backgroundColor,
        alternatingColor,
        borderColor,
        borderWidth,
        borderRadius,
        cellPadding,
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

    // Title tag options
    const titleTagOptions = [
        { label: __("H1", "digiblocks"), value: "h1" },
        { label: __("H2", "digiblocks"), value: "h2" },
        { label: __("H3", "digiblocks"), value: "h3" },
        { label: __("H4", "digiblocks"), value: "h4" },
        { label: __("H5", "digiblocks"), value: "h5" },
        { label: __("H6", "digiblocks"), value: "h6" },
        { label: __("DIV", "digiblocks"), value: "div" },
        { label: __("SPAN", "digiblocks"), value: "span" },
        { label: __("P", "digiblocks"), value: "p" },
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
            /* DigiCommerce Product Features Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
            }
            
            .${id} .digiblocks-features-title {
                color: ${titleColor};
                ${titleTypography.fontFamily ? `font-family: ${titleTypography.fontFamily};` : ''}
                ${titleTypography.fontSize?.[activeDevice] ? `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};` : ''}
                ${titleTypography.fontWeight ? `font-weight: ${titleTypography.fontWeight};` : ''}
                ${titleTypography.fontStyle ? `font-style: ${titleTypography.fontStyle};` : ''}
                ${titleTypography.textTransform ? `text-transform: ${titleTypography.textTransform};` : ''}
                ${titleTypography.textDecoration ? `text-decoration: ${titleTypography.textDecoration};` : ''}
                ${titleTypography.lineHeight?.[activeDevice] ? `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};` : ''}
                ${titleTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};` : ''}
                margin: 0 0 20px 0;
            }
            
            .${id} .digiblocks-features-table-wrapper {
                overflow: hidden;
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
				border-style: solid;
                border-color: ${borderColor || '#e0e0e0'};
                ${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
                background-color: ${backgroundColor};
            }
            
            .${id} .digiblocks-features-table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                background-color: transparent;
            }
            
            .${id} .digiblocks-feature-row {
                border: none;
            }
            
            .${id} .digiblocks-feature-row:not(:last-child) .digiblocks-feature-name,
            .${id} .digiblocks-feature-row:not(:last-child) .digiblocks-feature-value {
                border-bottom: 1px solid ${borderColor};
            }
            
            ${showAlternating ? `
            .${id} .digiblocks-feature-row:nth-child(even) {
                background-color: ${alternatingColor};
            }
            ` : ''}
            
            .${id} .digiblocks-feature-name,
            .${id} .digiblocks-feature-value {
                ${getDimensionCSS(cellPadding, 'padding', activeDevice)}
                border: none;
                vertical-align: top;
            }
            
            .${id} .digiblocks-feature-name {
                color: ${nameColor};
                ${nameTypography.fontFamily ? `font-family: ${nameTypography.fontFamily};` : ''}
                ${nameTypography.fontSize?.[activeDevice] ? `font-size: ${nameTypography.fontSize[activeDevice]}${nameTypography.fontSizeUnit || 'px'};` : ''}
                ${nameTypography.fontWeight ? `font-weight: ${nameTypography.fontWeight};` : ''}
                ${nameTypography.fontStyle ? `font-style: ${nameTypography.fontStyle};` : ''}
                ${nameTypography.textTransform ? `text-transform: ${nameTypography.textTransform};` : ''}
                ${nameTypography.textDecoration ? `text-decoration: ${nameTypography.textDecoration};` : ''}
                ${nameTypography.lineHeight?.[activeDevice] ? `line-height: ${nameTypography.lineHeight[activeDevice]}${nameTypography.lineHeightUnit || 'em'};` : ''}
                ${nameTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${nameTypography.letterSpacing[activeDevice]}${nameTypography.letterSpacingUnit || 'px'};` : ''}
                width: 40%;
                min-width: 150px;
            }
            
            .${id} .digiblocks-feature-value {
                color: ${valueColor};
                ${valueTypography.fontFamily ? `font-family: ${valueTypography.fontFamily};` : ''}
                ${valueTypography.fontSize?.[activeDevice] ? `font-size: ${valueTypography.fontSize[activeDevice]}${valueTypography.fontSizeUnit || 'px'};` : ''}
                ${valueTypography.fontWeight ? `font-weight: ${valueTypography.fontWeight};` : ''}
                ${valueTypography.fontStyle ? `font-style: ${valueTypography.fontStyle};` : ''}
                ${valueTypography.textTransform ? `text-transform: ${valueTypography.textTransform};` : ''}
                ${valueTypography.textDecoration ? `text-decoration: ${valueTypography.textDecoration};` : ''}
                ${valueTypography.lineHeight?.[activeDevice] ? `line-height: ${valueTypography.lineHeight[activeDevice]}${valueTypography.lineHeightUnit || 'em'};` : ''}
                ${valueTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${valueTypography.letterSpacing[activeDevice]}${valueTypography.letterSpacingUnit || 'px'};` : ''}
                width: 60%;
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
                                {__('This is a placeholder. Product features will be displayed on single product pages.', 'digiblocks')}
                            </Notice>
                            
                            <ToggleControl
                                label={__('Show Title', 'digiblocks')}
                                checked={showTitle}
                                onChange={(value) => setAttributes({ showTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showTitle && (
                                <>
                                    <TextControl
                                        label={__('Title Text', 'digiblocks')}
                                        value={titleText}
                                        onChange={(value) => setAttributes({ titleText: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Title Tag', 'digiblocks')}
                                        value={titleTag}
                                        options={titleTagOptions}
                                        onChange={(value) => setAttributes({ titleTag: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="layout"
                            title={__('Layout', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Alternating Row Colors', 'digiblocks')}
                                checked={showAlternating}
                                onChange={(value) => setAttributes({ showAlternating: value })}
                                help={__('Enable alternating background colors for table rows.', 'digiblocks')}
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
                            name="colors"
                            title={__('Colors', 'digiblocks')}
                            initialOpen={true}
                        >
                            <PanelColorSettings
                                title={__("Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    ...(showTitle ? [{
                                        value: titleColor,
                                        onChange: (value) => setAttributes({ titleColor: value }),
                                        label: __("Title Color", "digiblocks"),
                                    }] : []),
                                    {
                                        value: nameColor,
                                        onChange: (value) => setAttributes({ nameColor: value }),
                                        label: __("Feature Name Color", "digiblocks"),
                                    },
                                    {
                                        value: valueColor,
                                        onChange: (value) => setAttributes({ valueColor: value }),
                                        label: __("Feature Value Color", "digiblocks"),
                                    },
                                    {
                                        value: backgroundColor,
                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                    ...(showAlternating ? [{
                                        value: alternatingColor,
                                        onChange: (value) => setAttributes({ alternatingColor: value }),
                                        label: __("Alternating Row Color", "digiblocks"),
                                    }] : []),
                                    {
                                        value: borderColor,
                                        onChange: (value) => setAttributes({ borderColor: value }),
                                        label: __("Border Color", "digiblocks"),
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
                            {showTitle && (
                                <TypographyControl
                                    label={__('Title Typography', 'digiblocks')}
                                    value={titleTypography}
                                    onChange={(value) => setAttributes({ titleTypography: value })}
                                    defaults={{
                                        fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                                        fontWeight: '700',
                                        lineHeight: { desktop: 1.3, tablet: 1.3, mobile: 1.3 },
                                    }}
                                />
                            )}
                            
                            <TypographyControl
                                label={__('Feature Name Typography', 'digiblocks')}
                                value={nameTypography}
                                onChange={(value) => setAttributes({ nameTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.4 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Feature Value Typography', 'digiblocks')}
                                value={valueTypography}
                                onChange={(value) => setAttributes({ valueTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.4 },
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
                                label={__('Cell Padding', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={cellPadding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            cellPadding: {
                                                ...cellPadding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__('Border', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Border Width', 'digiblocks')}
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
    const blockClasses = `digiblocks-product-features ${id} ${customClasses || ""}${animationClass}`;

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
                {showTitle && (
                    <div className="digiblocks-features-title" style={{ 
                        fontSize: titleTypography.fontSize?.[localActiveDevice] + (titleTypography.fontSizeUnit || 'px'),
                        fontWeight: titleTypography.fontWeight,
                        color: titleColor,
                        marginBottom: '20px'
                    }}>
                        {titleText}
                    </div>
                )}
                
                <div className="digiblocks-features-table-wrapper">
                    <table className="digiblocks-features-table">
                        <tbody>
                            <tr className="digiblocks-feature-row digiblocks-feature-row-0">
                                <td className="digiblocks-feature-name">{__('File Size', 'digiblocks')}</td>
                                <td className="digiblocks-feature-value">{__('25 MB', 'digiblocks')}</td>
                            </tr>
                            <tr className="digiblocks-feature-row digiblocks-feature-row-1">
                                <td className="digiblocks-feature-name">{__('Format', 'digiblocks')}</td>
                                <td className="digiblocks-feature-value">{__('PDF, DOCX', 'digiblocks')}</td>
                            </tr>
                            <tr className="digiblocks-feature-row digiblocks-feature-row-2">
                                <td className="digiblocks-feature-name">{__('License', 'digiblocks')}</td>
                                <td className="digiblocks-feature-value">{__('Commercial Use', 'digiblocks')}</td>
                            </tr>
                            <tr className="digiblocks-feature-row digiblocks-feature-row-3">
                                <td className="digiblocks-feature-name">{__('Support', 'digiblocks')}</td>
                                <td className="digiblocks-feature-value">{__('1 Year', 'digiblocks')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DigiProductFeaturesEdit;