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
    RangeControl,
    Button,
    Notice,
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
 * Edit function for the Product Reviews block
 */
const WooProductReviewsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        showStars,
        showCount,
        showText,
        alignment,
        starsColor,
        starsEmptyColor,
        countColor,
        countHoverColor,
        textColor,
        textHoverColor,
        starsSize,
        spacing,
        padding,
        margin,
        countTypography,
        textTypography,
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

    // Alignment options
    const alignmentOptions = [
        { label: __('Left', 'digiblocks'), value: 'left' },
        { label: __('Center', 'digiblocks'), value: 'center' },
        { label: __('Right', 'digiblocks'), value: 'right' }
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
            /* Product Reviews Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                width: 100%;
            }
            
            .${id} .digiblocks-product-reviews {
                display: flex;
                align-items: center;
                gap: ${spacing[activeDevice]}px;
                justify-content: ${alignment[activeDevice]};
                flex-wrap: wrap;
            }
            
            .${id} .digiblocks-product-reviews-stars {
                display: flex;
                align-items: center;
                gap: 2px;
            }
            
            .${id} .digiblocks-product-reviews-stars .star {
                width: ${starsSize[activeDevice]}px;
                height: ${starsSize[activeDevice]}px;
                fill: ${starsEmptyColor};
                transition: fill 0.3s ease;
            }
            
            .${id} .digiblocks-product-reviews-stars .star.filled {
                fill: ${starsColor};
            }
            
            .${id} .digiblocks-product-reviews-count {
                color: ${countColor};
                text-decoration: none;
                transition: color 0.3s ease;
                ${countTypography.fontFamily ? `font-family: ${countTypography.fontFamily};` : ''}
                ${countTypography.fontSize?.[activeDevice] ? `font-size: ${countTypography.fontSize[activeDevice]}${countTypography.fontSizeUnit || 'px'};` : ''}
                ${countTypography.fontWeight ? `font-weight: ${countTypography.fontWeight};` : ''}
                ${countTypography.fontStyle ? `font-style: ${countTypography.fontStyle};` : ''}
                ${countTypography.textTransform ? `text-transform: ${countTypography.textTransform};` : ''}
                ${countTypography.textDecoration ? `text-decoration: ${countTypography.textDecoration};` : ''}
                ${countTypography.lineHeight?.[activeDevice] ? `line-height: ${countTypography.lineHeight[activeDevice]}${countTypography.lineHeightUnit || 'em'};` : ''}
                ${countTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${countTypography.letterSpacing[activeDevice]}${countTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-product-reviews-count:hover {
                color: ${countHoverColor || countColor};
            }
            
            .${id} .digiblocks-product-reviews-text {
                color: ${textColor};
                text-decoration: none;
                transition: color 0.3s ease;
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ''}
                ${textTypography.textTransform ? `text-transform: ${textTypography.textTransform};` : ''}
                ${textTypography.textDecoration ? `text-decoration: ${textTypography.textDecoration};` : ''}
                ${textTypography.lineHeight?.[activeDevice] ? `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};` : ''}
                ${textTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-product-reviews-text:hover {
                color: ${textHoverColor || textColor};
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
                                {__('This is a placeholder. The actual reviews will be displayed on single product pages.', 'digiblocks')}
                            </Notice>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="display"
                            title={__('Display Options', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Show Stars', 'digiblocks')}
                                checked={showStars}
                                onChange={(value) => setAttributes({ showStars: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Show Review Count', 'digiblocks')}
                                checked={showCount}
                                onChange={(value) => setAttributes({ showCount: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Show Reviews Text', 'digiblocks')}
                                checked={showText}
                                onChange={(value) => setAttributes({ showText: value })}
                                help={__('Show "customer review" or "customer reviews" text', 'digiblocks')}
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
                                                        value: starsColor,
                                                        onChange: (value) => setAttributes({ starsColor: value }),
                                                        label: __("Stars Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: starsEmptyColor,
                                                        onChange: (value) => setAttributes({ starsEmptyColor: value }),
                                                        label: __("Empty Stars Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: countColor,
                                                        onChange: (value) => setAttributes({ countColor: value }),
                                                        label: __("Count Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: textColor,
                                                        onChange: (value) => setAttributes({ textColor: value }),
                                                        label: __("Text Color", "digiblocks"),
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
                                                        value: countHoverColor,
                                                        onChange: (value) => setAttributes({ countHoverColor: value }),
                                                        label: __("Count Hover Color", "digiblocks"),
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
                            name="sizing"
                            title={__('Sizing & Spacing', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Stars Size', 'digiblocks')}
                            >
                                <RangeControl
                                    value={starsSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            starsSize: {
                                                ...starsSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={10}
                                    max={40}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl
                                label={__('Items Spacing', 'digiblocks')}
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

                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__('Typography', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__('Count Typography', 'digiblocks')}
                                value={countTypography}
                                onChange={(value) => setAttributes({ countTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Text Typography', 'digiblocks')}
                                value={textTypography}
                                onChange={(value) => setAttributes({ textTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
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

    // Render sample stars for preview
    const renderStars = (rating = 4.5) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const isFilled = i <= Math.floor(rating);
            const isHalf = i === Math.ceil(rating) && rating % 1 !== 0;
            
            stars.push(
                <svg 
                    key={i}
                    className={`star ${isFilled ? 'filled' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    width={starsSize[localActiveDevice]}
                    height={starsSize[localActiveDevice]}
                >
                    {isHalf ? (
                        <defs>
                            <linearGradient id={`half-${i}`}>
                                <stop offset="50%" stopColor={starsColor} />
                                <stop offset="50%" stopColor={starsEmptyColor} />
                            </linearGradient>
                        </defs>
                    ) : null}
                    <path 
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill={isHalf ? `url(#half-${i})` : (isFilled ? starsColor : starsEmptyColor)}
                    />
                </svg>
            );
        }
        return stars;
    };

    // Build class names
    const blockClasses = `digiblocks-product-reviews-block ${id} ${customClasses || ""}`;

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
                <div className="digiblocks-product-reviews">
                    {showStars && (
                        <div className="digiblocks-product-reviews-stars">
                            {renderStars(4.5)}
                        </div>
                    )}
                    
                    {showCount && (
                        <span className="digiblocks-product-reviews-count">
                            (24)
                        </span>
                    )}
                    
                    {showText && (
                        <span className="digiblocks-product-reviews-text">
                            {__('customer reviews', 'digiblocks')}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};

export default WooProductReviewsEdit;