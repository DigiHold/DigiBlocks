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
    RangeControl,
    ToggleControl,
    Notice,
    TabPanel,
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
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Product Reviews Form block
 */
const WooProductReviewsFormEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        formBackgroundColor,
        formTextColor,
        labelColor,
        inputBackgroundColor,
        inputTextColor,
        inputBorderColor,
        inputFocusBorderColor,
        buttonBackgroundColor,
        buttonTextColor,
        buttonBackgroundHoverColor,
        buttonTextHoverColor,
        ratingStarColor,
        ratingStarHoverColor,
        padding,
        margin,
        formPadding,
        inputPadding,
        buttonPadding,
        labelTypography,
        inputTypography,
        buttonTypography,
        inputBorderRadius,
        buttonBorderRadius,
        formBorderRadius,
        formBorderStyle,
        formBorderWidth,
        formBorderColor,
        formShadow,
        formShadowHover,
        inputBorderStyle,
        inputBorderWidth,
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

    // Border style options
    const borderStyleOptions = [
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Solid', 'digiblocks'), value: 'solid' },
        { label: __('Dashed', 'digiblocks'), value: 'dashed' },
        { label: __('Dotted', 'digiblocks'), value: 'dotted' },
        { label: __('Double', 'digiblocks'), value: 'double' },
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
            /* Product Reviews Form Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                width: 100%;
            }
            
            .${id} .digiblocks-product-reviews-form {
                background-color: ${formBackgroundColor};
                color: ${formTextColor};
                ${getDimensionCSS(formPadding, 'padding', activeDevice)}
                ${getDimensionCSS(formBorderRadius, 'border-radius', activeDevice)}
                ${formBorderStyle !== 'none' ? `
                    border-style: ${formBorderStyle};
                    border-color: ${formBorderColor};
                    ${getDimensionCSS(formBorderWidth, 'border-width', activeDevice)}
                ` : ''}
                ${formShadow?.enable ? `box-shadow: ${formShadow.horizontal}px ${formShadow.vertical}px ${formShadow.blur}px ${formShadow.spread}px ${formShadow.color};` : ''}
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-product-reviews-form:hover {
                ${formShadowHover?.enable ? `box-shadow: ${formShadowHover.horizontal}px ${formShadowHover.vertical}px ${formShadowHover.blur}px ${formShadowHover.spread}px ${formShadowHover.color};` : ''}
            }
            
            .${id} .digiblocks-product-reviews-form h3 {
                margin-top: 0;
                padding-top: 0;
            }
            
            .${id} .digiblocks-product-reviews-form label {
                color: ${labelColor};
                ${labelTypography.fontFamily ? `font-family: ${labelTypography.fontFamily};` : ''}
                ${labelTypography.fontSize?.[activeDevice] ? `font-size: ${labelTypography.fontSize[activeDevice]}${labelTypography.fontSizeUnit || 'px'};` : ''}
                ${labelTypography.fontWeight ? `font-weight: ${labelTypography.fontWeight};` : ''}
                ${labelTypography.fontStyle ? `font-style: ${labelTypography.fontStyle};` : ''}
                ${labelTypography.textTransform ? `text-transform: ${labelTypography.textTransform};` : ''}
                ${labelTypography.textDecoration ? `text-decoration: ${labelTypography.textDecoration};` : ''}
                ${labelTypography.lineHeight?.[activeDevice] ? `line-height: ${labelTypography.lineHeight[activeDevice]}${labelTypography.lineHeightUnit || 'em'};` : ''}
                ${labelTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${labelTypography.letterSpacing[activeDevice]}${labelTypography.letterSpacingUnit || 'px'};` : ''}
                display: block;
                margin-bottom: 8px;
            }
            
            .${id} .digiblocks-product-reviews-form input,
            .${id} .digiblocks-product-reviews-form textarea,
            .${id} .digiblocks-product-reviews-form select {
                background-color: ${inputBackgroundColor};
                color: ${inputTextColor};
                border-color: ${inputBorderColor};
                ${inputBorderStyle !== 'none' ? `border-style: ${inputBorderStyle};` : 'border: none;'}
                ${inputBorderStyle !== 'none' ? getDimensionCSS(inputBorderWidth, 'border-width', activeDevice) : ''}
                ${getDimensionCSS(inputBorderRadius, 'border-radius', activeDevice)}
                ${getDimensionCSS(inputPadding, 'padding', activeDevice)}
                ${inputTypography.fontFamily ? `font-family: ${inputTypography.fontFamily};` : ''}
                ${inputTypography.fontSize?.[activeDevice] ? `font-size: ${inputTypography.fontSize[activeDevice]}${inputTypography.fontSizeUnit || 'px'};` : ''}
                ${inputTypography.fontWeight ? `font-weight: ${inputTypography.fontWeight};` : ''}
                ${inputTypography.fontStyle ? `font-style: ${inputTypography.fontStyle};` : ''}
                ${inputTypography.lineHeight?.[activeDevice] ? `line-height: ${inputTypography.lineHeight[activeDevice]}${inputTypography.lineHeightUnit || 'em'};` : ''}
                ${inputTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${inputTypography.letterSpacing[activeDevice]}${inputTypography.letterSpacingUnit || 'px'};` : ''}
                width: 100%;
                transition: border-color 0.3s ease;
            }
            
            .${id} .digiblocks-product-reviews-form input:focus,
            .${id} .digiblocks-product-reviews-form textarea:focus,
            .${id} .digiblocks-product-reviews-form select:focus {
                border-color: ${inputFocusBorderColor};
                outline: none;
            }
            
            .${id} .digiblocks-product-reviews-form .form-row {
                margin-bottom: 20px;
            }
            
            .${id} .digiblocks-product-reviews-form .stars {
                display: inline-flex;
                gap: 5px;
                margin-bottom: 15px;
            }

			.${id} .digiblocks-product-reviews-form .stars span {
				display: flex;
				gap: .1rem
			}
            
            .${id} .digiblocks-product-reviews-form .stars a {
                color: ${ratingStarColor};
                text-decoration: none;
                font-size: 18px;
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-product-reviews-form .stars a:hover,
            .${id} .digiblocks-product-reviews-form .stars a.active {
                color: ${ratingStarHoverColor};
            }
            
            .${id} .digiblocks-product-reviews-form button {
                background-color: ${buttonBackgroundColor};
                color: ${buttonTextColor};
                border: none;
                ${getDimensionCSS(buttonPadding, 'padding', activeDevice)}
                ${getDimensionCSS(buttonBorderRadius, 'border-radius', activeDevice)}
                ${buttonTypography.fontFamily ? `font-family: ${buttonTypography.fontFamily};` : ''}
                ${buttonTypography.fontSize?.[activeDevice] ? `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || 'px'};` : ''}
                ${buttonTypography.fontWeight ? `font-weight: ${buttonTypography.fontWeight};` : ''}
                ${buttonTypography.fontStyle ? `font-style: ${buttonTypography.fontStyle};` : ''}
                ${buttonTypography.textTransform ? `text-transform: ${buttonTypography.textTransform};` : ''}
                ${buttonTypography.textDecoration ? `text-decoration: ${buttonTypography.textDecoration};` : ''}
                ${buttonTypography.lineHeight?.[activeDevice] ? `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || 'em'};` : ''}
                ${buttonTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || 'px'};` : ''}
				width: 100%;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-product-reviews-form button:hover {
                background-color: ${buttonBackgroundHoverColor || buttonBackgroundColor};
                color: ${buttonTextHoverColor || buttonTextColor};
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
                            name="general"
                            title={__('General', 'digiblocks')}
                            initialOpen={true}
                        >
                            <Notice
                                status="warning"
                                isDismissible={false}
                                className="digiblocks-notice components-base-control"
                            >
                                {__('This is a placeholder. The actual product reviews section will be displayed on single product pages.', 'digiblocks')}
                            </Notice>
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
                                                title={__("Normal Colors", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: formBackgroundColor,
                                                        onChange: (value) => setAttributes({ formBackgroundColor: value }),
                                                        label: __("Form Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: formTextColor,
                                                        onChange: (value) => setAttributes({ formTextColor: value }),
                                                        label: __("Form Text", "digiblocks"),
                                                    },
                                                    {
                                                        value: labelColor,
                                                        onChange: (value) => setAttributes({ labelColor: value }),
                                                        label: __("Label Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: inputBackgroundColor,
                                                        onChange: (value) => setAttributes({ inputBackgroundColor: value }),
                                                        label: __("Input Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: inputTextColor,
                                                        onChange: (value) => setAttributes({ inputTextColor: value }),
                                                        label: __("Input Text", "digiblocks"),
                                                    },
                                                    {
                                                        value: inputBorderColor,
                                                        onChange: (value) => setAttributes({ inputBorderColor: value }),
                                                        label: __("Input Border", "digiblocks"),
                                                    },
                                                    {
                                                        value: inputFocusBorderColor,
                                                        onChange: (value) => setAttributes({ inputFocusBorderColor: value }),
                                                        label: __("Input Focus Border", "digiblocks"),
                                                    },
                                                    {
                                                        value: buttonBackgroundColor,
                                                        onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                                                        label: __("Button Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: buttonTextColor,
                                                        onChange: (value) => setAttributes({ buttonTextColor: value }),
                                                        label: __("Button Text", "digiblocks"),
                                                    },
                                                    {
                                                        value: ratingStarColor,
                                                        onChange: (value) => setAttributes({ ratingStarColor: value }),
                                                        label: __("Rating Star", "digiblocks"),
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
                                                        value: buttonBackgroundHoverColor,
                                                        onChange: (value) => setAttributes({ buttonBackgroundHoverColor: value }),
                                                        label: __("Button Background Hover", "digiblocks"),
                                                    },
                                                    {
                                                        value: buttonTextHoverColor,
                                                        onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                                                        label: __("Button Text Hover", "digiblocks"),
                                                    },
                                                    {
                                                        value: ratingStarHoverColor,
                                                        onChange: (value) => setAttributes({ ratingStarHoverColor: value }),
                                                        label: __("Rating Star Hover", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    }
                                }}
                            </TabPanel>
                            
                            <h3>{__('Form Border', 'digiblocks')}</h3>
                            <PanelColorSettings
                                title=""
                                colorSettings={[
                                    {
                                        value: formBorderColor,
                                        onChange: (value) => setAttributes({ formBorderColor: value }),
                                        label: __('Form Border Color', 'digiblocks'),
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
                                label={__('Label Typography', 'digiblocks')}
                                value={labelTypography}
                                onChange={(value) => setAttributes({ labelTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Input Typography', 'digiblocks')}
                                value={inputTypography}
                                onChange={(value) => setAttributes({ inputTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Button Typography', 'digiblocks')}
                                value={buttonTypography}
                                onChange={(value) => setAttributes({ buttonTypography: value })}
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
                                label={__('Form Padding', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={formPadding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            formPadding: {
                                                ...formPadding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            
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
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__('Borders & Radius', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__('Form Border Style', 'digiblocks')}
                                value={formBorderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ formBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {formBorderStyle !== 'none' && (
                                <ResponsiveControl
                                    label={__('Form Border Width', 'digiblocks')}
                                >
                                    <DimensionControl
                                        values={formBorderWidth[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                formBorderWidth: {
                                                    ...formBorderWidth,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ResponsiveControl
                                label={__('Form Border Radius', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={formBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            formBorderRadius: {
                                                ...formBorderRadius,
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
                            
                            <SelectControl
                                label={__('Input Border Style', 'digiblocks')}
                                value={inputBorderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ inputBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {inputBorderStyle !== 'none' && (
                                <ResponsiveControl
                                    label={__('Input Border Width', 'digiblocks')}
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
                                label={__('Input Border Radius', 'digiblocks')}
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
                            
                            <BoxShadowControl
                                label={__('Form Shadow', 'digiblocks')}
                                normalValue={formShadow}
                                hoverValue={formShadowHover}
                                onNormalChange={(value) => setAttributes({ formShadow: value })}
                                onHoverChange={(value) => setAttributes({ formShadowHover: value })}
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
    const blockClasses = `digiblocks-product-reviews-form-wrapper ${id} ${customClasses || ""}`;

    // Block props without any inline styles - we'll use the style tag for everything
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
                <div className="digiblocks-product-reviews-form">
					<div id="review_form_wrapper">
                        <div id="review_form">
                            <h3>{__('Add a review', 'digiblocks')}</h3>
                            
                            <div className="comment-form-rating">
                                <label>{__('Your rating', 'digiblocks')}</label>
                                <div className="stars">
                                    <a href="#" onClick={(e) => e.preventDefault()}>★</a>
                                    <a href="#" onClick={(e) => e.preventDefault()}>★</a>
                                    <a href="#" onClick={(e) => e.preventDefault()}>★</a>
                                    <a href="#" onClick={(e) => e.preventDefault()}>★</a>
                                    <a href="#" onClick={(e) => e.preventDefault()}>★</a>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <label>{__('Your review', 'digiblocks')} *</label>
                                <textarea 
                                    rows="5" 
                                    placeholder={__('Write your review here...', 'digiblocks')}
                                    readOnly
                                ></textarea>
                            </div>
                            
                            <div className="form-row">
                                <label>{__('Name', 'digiblocks')} *</label>
                                <input 
                                    type="text" 
                                    placeholder={__('Your name', 'digiblocks')}
                                    readOnly
                                />
                            </div>
                            
                            <div className="form-row">
                                <label>{__('Email', 'digiblocks')} *</label>
                                <input 
                                    type="email" 
                                    placeholder={__('Your email', 'digiblocks')}
                                    readOnly
                                />
                            </div>
                            
                            <button type="submit">
                                {__('Submit', 'digiblocks')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WooProductReviewsFormEdit;