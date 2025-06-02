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
    RangeControl,
    Button,
    Notice,
    TabPanel,
    TextControl,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl } = digi.components;

/**
 * Edit function for the Cart Icon block
 */
const WooCartIconEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        iconType,
        customIcon,
        showCount,
        showText,
        showTotal,
        showMiniCart,
        hideOnEmpty,
        cartText,
        emptyCartText,
        layout,
        align,
        iconSize,
        iconColor,
        iconHoverColor,
        countColor,
        countBackgroundColor,
        countHoverColor,
        countHoverBackgroundColor,
        textColor,
        textHoverColor,
        totalColor,
        totalHoverColor,
        backgroundColor,
        backgroundHoverColor,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        spacing,
        padding,
        margin,
        typography,
        textTypography,
        miniCartWidth,
        miniCartPosition,
        miniCartBackgroundColor,
        miniCartBorderColor,
        miniCartTextColor,
        miniCartHeadingColor,
        miniCartPriceColor,
        miniCartTotalColor,
        miniCartButtonBackgroundColor,
        miniCartButtonTextColor,
        miniCartButtonHoverBackgroundColor,
        miniCartButtonHoverTextColor,
        miniCartRemoveColor,
        miniCartRemoveHoverColor,
        miniCartTypography,
        miniCartHeadingTypography,
        miniCartButtonTypography,
        animation,
        hoverEffect
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

    // Icon type options
    const iconTypeOptions = [
        { label: __("Shopping Cart", "digiblocks"), value: "cart" },
        { label: __("Shopping Bag", "digiblocks"), value: "bag" },
        { label: __("Shopping Basket", "digiblocks"), value: "basket" },
        { label: __("Custom Icon", "digiblocks"), value: "custom" },
    ];

    // Border style options
    const borderStyleOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
    ];

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

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Scale", "digiblocks"), value: "scale" },
        { label: __("Bounce", "digiblocks"), value: "bounce" },
        { label: __("Pulse", "digiblocks"), value: "pulse" },
    ];

    // Mini cart position options
    const miniCartPositionOptions = [
        { label: __("Left", "digiblocks"), value: "left" },
        { label: __("Right", "digiblocks"), value: "right" },
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

    // Get cart icon SVG
    const getCartIcon = () => {
        switch (iconType) {
            case 'bag':
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>';
            case 'basket':
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-13.4 19.1-7.3 30.8L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>';
            case 'custom':
                return customIcon || '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
            default: // cart
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
        }
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Alignment CSS
        let alignCSS = '';
        if (align[activeDevice] === 'flex-start') {
            alignCSS = 'justify-content: flex-start; text-align: left;';
        } else if (align[activeDevice] === 'center') {
            alignCSS = 'justify-content: center; text-align: center;';
        } else if (align[activeDevice] === 'flex-end') {
            alignCSS = 'justify-content: flex-end; text-align: right;';
        }

        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                ${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
            `;
        }

        // Typography CSS
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
            if (typography.textTransform) {
                typographyCSS += `text-transform: ${typography.textTransform};`;
            }
            if (typography.textDecoration) {
                typographyCSS += `text-decoration: ${typography.textDecoration};`;
            }
            if (typography.lineHeight && typography.lineHeight[activeDevice]) {
                typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};`;
            }
            if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
                typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};`;
            }
        }

        // Count typography CSS
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
            if (textTypography.textTransform) {
                textTypographyCSS += `text-transform: ${textTypography.textTransform};`;
            }
            if (textTypography.textDecoration) {
                textTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
            }
            if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
                textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};`;
            }
            if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
                textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};`;
            }
        }

        return `
            /* Main block styles */
            .${id} {
				position: relative;
				display: flex;
				${alignCSS}
				width: auto;
                ${getDimensionCSS(margin, 'margin', activeDevice)}
            }

            .${id} .digiblocks-cart-icon-link {
                display: inline-flex;
                align-items: center;
                flex-direction: ${layout[activeDevice] === 'vertical' ? 'column' : 'row'};
                gap: ${spacing[activeDevice]}px;
                background-color: ${backgroundColor || 'transparent'};
                ${borderCSS}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${typographyCSS}
                text-decoration: none;
                color: inherit;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
            }

            /* Hover effects */
            .${id} .digiblocks-cart-icon-link:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
                ${hoverEffect === 'scale' ? 'transform: scale(1.05);' : ''}
                ${hoverEffect === 'bounce' ? 'animation: bounce 0.6s;' : ''}
                ${hoverEffect === 'pulse' ? 'animation: pulse 0.6s;' : ''}
            }

            /* Icon container */
            .${id} .digiblocks-cart-icon-icon {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            /* Cart icon */
			.${id} .digiblocks-cart-icon-icon span {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .${id} .digiblocks-cart-icon-icon svg {
                width: ${iconSize[activeDevice]}px;
                height: ${iconSize[activeDevice]}px;
                fill: ${iconColor || '#333333'};
                transition: all 0.3s ease;
            }

            .${id}:hover .digiblocks-cart-icon-icon svg {
                fill: ${iconHoverColor || iconColor || '#333333'};
            }

            /* Cart count */
            .${id} .digiblocks-cart-count {
                position: absolute;
                top: -8px;
                right: -8px;
                background-color: ${countBackgroundColor || '#e74c3c'};
                color: ${countColor || '#ffffff'};
                border-radius: 50%;
                min-width: 18px;
                height: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                ${textTypographyCSS}
                transition: all 0.3s ease;
            }

            .${id}:hover .digiblocks-cart-count {
                background-color: ${countHoverBackgroundColor || countBackgroundColor || '#e74c3c'};
                color: ${countHoverColor || countColor || '#ffffff'};
            }

            /* Cart text */
            .${id} .digiblocks-cart-text {
                color: ${textColor || '#333333'};
                transition: color 0.3s ease;
            }

            .${id}:hover .digiblocks-cart-text {
                color: ${textHoverColor || textColor || '#333333'};
            }

            /* Cart total */
            .${id} .digiblocks-cart-total {
                color: ${totalColor || '#333333'};
                transition: color 0.3s ease;
            }

            .${id}:hover .digiblocks-cart-total {
                color: ${totalHoverColor || totalColor || '#333333'};
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

            /* Animation keyframes */
            @keyframes bounce {
                0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
                40%, 43% { transform: translate3d(0,-30px,0); }
                70% { transform: translate3d(0,-15px,0); }
                90% { transform: translate3d(0,-4px,0); }
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
    };

    // Render color tab content based on active tab
    const renderColorTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__("Icon Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconColor,
                                onChange: (value) => setAttributes({ iconColor: value }),
                                label: __("Icon Color", "digiblocks"),
                            },
                            {
                                value: backgroundColor,
                                onChange: (value) => setAttributes({ backgroundColor: value }),
                                label: __("Background Color", "digiblocks"),
                            },
                        ]}
                    />

                    {showCount && (
                        <PanelColorSettings
                            title={__("Count Colors", "digiblocks")}
                            initialOpen={false}
                            enableAlpha={true}
                            colorSettings={[
                                {
                                    value: countColor,
                                    onChange: (value) => setAttributes({ countColor: value }),
                                    label: __("Count Text Color", "digiblocks"),
                                },
                                {
                                    value: countBackgroundColor,
                                    onChange: (value) => setAttributes({ countBackgroundColor: value }),
                                    label: __("Count Background", "digiblocks"),
                                },
                            ]}
                        />
                    )}

                    {(showText || showTotal) && (
                        <PanelColorSettings
                            title={__("Text Colors", "digiblocks")}
                            initialOpen={false}
                            enableAlpha={true}
                            colorSettings={[
                                {
                                    value: textColor,
                                    onChange: (value) => setAttributes({ textColor: value }),
                                    label: __("Text Color", "digiblocks"),
                                },
                                {
                                    value: totalColor,
                                    onChange: (value) => setAttributes({ totalColor: value }),
                                    label: __("Total Color", "digiblocks"),
                                },
                            ]}
                        />
                    )}

                    {borderStyle && borderStyle !== 'none' && (
                        <PanelColorSettings
                            title={__("Border Color", "digiblocks")}
                            enableAlpha={true}
                            colorSettings={[
                                {
                                    value: borderColor,
                                    onChange: (value) => setAttributes({ borderColor: value }),
                                    label: __("Border Color", "digiblocks"),
                                },
                            ]}
                        />
                    )}
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__("Hover Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconHoverColor,
                                onChange: (value) => setAttributes({ iconHoverColor: value }),
                                label: __("Icon Color", "digiblocks"),
                            },
                            {
                                value: backgroundHoverColor,
                                onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                                label: __("Background Color", "digiblocks"),
                            },
                        ]}
                    />

                    {showCount && (
                        <PanelColorSettings
                            title={__("Count Hover Colors", "digiblocks")}
                            initialOpen={false}
                            enableAlpha={true}
                            colorSettings={[
                                {
                                    value: countHoverColor,
                                    onChange: (value) => setAttributes({ countHoverColor: value }),
                                    label: __("Count Text Color", "digiblocks"),
                                },
                                {
                                    value: countHoverBackgroundColor,
                                    onChange: (value) => setAttributes({ countHoverBackgroundColor: value }),
                                    label: __("Count Background", "digiblocks"),
                                },
                            ]}
                        />
                    )}

                    {(showText || showTotal) && (
                        <PanelColorSettings
                            title={__("Text Hover Colors", "digiblocks")}
                            initialOpen={false}
                            enableAlpha={true}
                            colorSettings={[
                                {
                                    value: textHoverColor,
                                    onChange: (value) => setAttributes({ textHoverColor: value }),
                                    label: __("Text Color", "digiblocks"),
                                },
                                {
                                    value: totalHoverColor,
                                    onChange: (value) => setAttributes({ totalHoverColor: value }),
                                    label: __("Total Color", "digiblocks"),
                                },
                            ]}
                        />
                    )}

                    {borderStyle && borderStyle !== 'none' && (
                        <PanelColorSettings
                            title={__("Border Hover Color", "digiblocks")}
                            enableAlpha={true}
                            colorSettings={[
                                {
                                    value: borderHoverColor,
                                    onChange: (value) => setAttributes({ borderHoverColor: value }),
                                    label: __("Border Color", "digiblocks"),
                                },
                            ]}
                        />
                    )}
                </>
            );
        }
        
        return null;
    };

    // Render mini cart color tab content
    const renderMiniCartColorTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__("Mini Cart Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: miniCartBackgroundColor,
                                onChange: (value) => setAttributes({ miniCartBackgroundColor: value }),
                                label: __("Background Color", "digiblocks"),
                            },
                            {
                                value: miniCartBorderColor,
                                onChange: (value) => setAttributes({ miniCartBorderColor: value }),
                                label: __("Border Color", "digiblocks"),
                            },
                            {
                                value: miniCartTextColor,
                                onChange: (value) => setAttributes({ miniCartTextColor: value }),
                                label: __("Text Color", "digiblocks"),
                            },
                            {
                                value: miniCartHeadingColor,
                                onChange: (value) => setAttributes({ miniCartHeadingColor: value }),
                                label: __("Heading Color", "digiblocks"),
                            },
                            {
                                value: miniCartPriceColor,
                                onChange: (value) => setAttributes({ miniCartPriceColor: value }),
                                label: __("Price Color", "digiblocks"),
                            },
                            {
                                value: miniCartTotalColor,
                                onChange: (value) => setAttributes({ miniCartTotalColor: value }),
                                label: __("Total Color", "digiblocks"),
                            },
                        ]}
                    />

                    <PanelColorSettings
                        title={__("Button Colors", "digiblocks")}
                        initialOpen={false}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: miniCartButtonBackgroundColor,
                                onChange: (value) => setAttributes({ miniCartButtonBackgroundColor: value }),
                                label: __("Button Background", "digiblocks"),
                            },
                            {
                                value: miniCartButtonTextColor,
                                onChange: (value) => setAttributes({ miniCartButtonTextColor: value }),
                                label: __("Button Text", "digiblocks"),
                            },
                            {
                                value: miniCartRemoveColor,
                                onChange: (value) => setAttributes({ miniCartRemoveColor: value }),
                                label: __("Remove Color", "digiblocks"),
                            },
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__("Button Hover Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: miniCartButtonHoverBackgroundColor,
                                onChange: (value) => setAttributes({ miniCartButtonHoverBackgroundColor: value }),
                                label: __("Button Background", "digiblocks"),
                            },
                            {
                                value: miniCartButtonHoverTextColor,
                                onChange: (value) => setAttributes({ miniCartButtonHoverTextColor: value }),
                                label: __("Button Text", "digiblocks"),
                            },
                            {
                                value: miniCartRemoveHoverColor,
                                onChange: (value) => setAttributes({ miniCartRemoveHoverColor: value }),
                                label: __("Remove Color", "digiblocks"),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
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
								{__('This is a placeholder. The actual cart count and total will be displayed on the frontend.', 'digiblocks')}
							</Notice>

                            <SelectControl
                                label={__("Icon Type", "digiblocks")}
                                value={iconType}
                                options={iconTypeOptions}
                                onChange={(value) => setAttributes({ iconType: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {iconType === 'custom' && (
                                <div className="components-base-control">
                                    <label className="components-base-control__label">
                                        {__('Custom Icon SVG', 'digiblocks')}
                                    </label>
                                    <textarea
                                        className="components-textarea-control__input"
                                        value={customIcon || ''}
                                        onChange={(e) => setAttributes({ customIcon: e.target.value })}
                                        placeholder={__('Paste your SVG code here...', 'digiblocks')}
                                        rows={4}
                                        style={{ width: '100%', marginTop: '8px' }}
                                    />
                                    <p className="components-base-control__help">
                                        {__('Enter your custom SVG icon code.', 'digiblocks')}
                                    </p>
                                </div>
                            )}

                            <ToggleControl
                                label={__("Show Count", "digiblocks")}
                                checked={showCount}
                                onChange={(value) => setAttributes({ showCount: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Show Text", "digiblocks")}
                                checked={showText}
                                onChange={(value) => setAttributes({ showText: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Show Total", "digiblocks")}
                                checked={showTotal}
                                onChange={(value) => setAttributes({ showTotal: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Show Mini Cart", "digiblocks")}
                                checked={showMiniCart}
                                onChange={(value) => setAttributes({ showMiniCart: value })}
                                help={__('Display a mini cart dropdown when hovering over the cart icon.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />

                            <ResponsiveButtonGroup
                                label={__('Layout', 'digiblocks')}
                                value={layout}
                                onChange={(value) => setAttributes({ layout: value })}
                                options={[
                                    { label: __('Horizontal', 'digiblocks'), value: 'horizontal' },
                                    { label: __('Vertical', 'digiblocks'), value: 'vertical' },
                                ]}
                            />

                            <ResponsiveButtonGroup
                                label={__('Alignment', 'digiblocks')}
                                value={align}
                                onChange={(value) => setAttributes({ align: value })}
                                options={[
                                    { label: __('Left', 'digiblocks'), value: 'flex-start' },
                                    { label: __('Center', 'digiblocks'), value: 'center' },
                                    { label: __('Right', 'digiblocks'), value: 'flex-end' },
                                ]}
                            />

                            <ToggleControl
                                label={__("Hide When Cart is Empty", "digiblocks")}
                                checked={hideOnEmpty}
                                onChange={(value) => setAttributes({ hideOnEmpty: value })}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="text"
                            title={__('Text Settings', 'digiblocks')}
                            initialOpen={false}
                        >
                            {(showText || showCount) && (
                                <>
                                    <TextControl
                                        label={__("Cart Text", "digiblocks")}
                                        value={cartText}
                                        onChange={(value) => setAttributes({ cartText: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />

                                    <TextControl
                                        label={__("Empty Cart Text", "digiblocks")}
                                        value={emptyCartText}
                                        onChange={(value) => setAttributes({ emptyCartText: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                        </TabPanelBody>

                        {showMiniCart && (
                            <TabPanelBody
                                tab="options"
                                name="minicart"
                                title={__('Mini Cart Settings', 'digiblocks')}
                                initialOpen={false}
                            >
                                <ResponsiveControl
									label={__("Mini Cart Width", "digiblocks")}
								>
									<RangeControl
										value={miniCartWidth[localActiveDevice]}
										onChange={(value) =>
											setAttributes({
												miniCartWidth: {
													...miniCartWidth,
													[localActiveDevice]: value,
												},
											})
										}
										min={250}
										max={500}
										step={10}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</ResponsiveControl>

                                <SelectControl
                                    label={__("Position", "digiblocks")}
                                    value={miniCartPosition}
                                    options={miniCartPositionOptions}
                                    onChange={(value) => setAttributes({ miniCartPosition: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </TabPanelBody>
                        )}
                    </>
                );
            case 'style':
                return (
                    <>
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
                                {(tab) => renderColorTabContent(tab.name)}
                            </TabPanel>
                        </TabPanelBody>

                        {showMiniCart && (
                            <TabPanelBody
                                tab="style"
                                name="minicart-colors"
                                title={__("Mini Cart Colors", "digiblocks")}
                                initialOpen={false}
                            >
                                <TabPanel
                                    className="digiblocks-control-tabs"
                                    activeClass="active-tab"
                                    tabs={stateTabList}
                                >
                                    {(tab) => renderMiniCartColorTabContent(tab.name)}
                                </TabPanel>
                            </TabPanelBody>
                        )}

                        <TabPanelBody
                            tab="style"
                            name="sizing"
                            title={__("Sizing & Spacing", "digiblocks")}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__("Icon Size", "digiblocks")}
                            >
                                <RangeControl
                                    value={iconSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconSize: {
                                                ...iconSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={16}
                                    max={80}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl
                                label={__("Spacing", "digiblocks")}
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
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

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
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__("Text Typography", "digiblocks")}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    fontWeight: '500',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />

                            <TypographyControl
                                label={__("Count Typography", "digiblocks")}
                                value={textTypography}
                                onChange={(value) => setAttributes({ textTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 12, tablet: 11, mobile: 10 },
                                    fontSizeUnit: 'px',
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1, tablet: 1, mobile: 1 },
                                    lineHeightUnit: 'em',
                                }}
                            />

                            {showMiniCart && (
                                <>
                                    <TypographyControl
                                        label={__("Mini Cart Typography", "digiblocks")}
                                        value={miniCartTypography}
                                        onChange={(value) => setAttributes({ miniCartTypography: value })}
                                        defaults={{
                                            fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                            fontSizeUnit: 'px',
                                            fontWeight: 'normal',
                                            lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                            lineHeightUnit: 'em',
                                        }}
                                    />

                                    <TypographyControl
                                        label={__("Mini Cart Heading Typography", "digiblocks")}
                                        value={miniCartHeadingTypography}
                                        onChange={(value) => setAttributes({ miniCartHeadingTypography: value })}
                                        defaults={{
                                            fontSize: { desktop: 18, tablet: 17, mobile: 16 },
                                            fontSizeUnit: 'px',
                                            fontWeight: '600',
                                            lineHeight: { desktop: 1.3, tablet: 1.2, mobile: 1.1 },
                                            lineHeightUnit: 'em',
                                        }}
                                    />

                                    <TypographyControl
                                        label={__("Mini Cart Button Typography", "digiblocks")}
                                        value={miniCartButtonTypography}
                                        onChange={(value) => setAttributes({ miniCartButtonTypography: value })}
                                        defaults={{
                                            fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                            fontSizeUnit: 'px',
                                            fontWeight: '600',
                                            lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                            lineHeightUnit: 'em',
                                        }}
                                    />
                                </>
                            )}
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__("Border", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {borderStyle && borderStyle !== 'none' && (
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
                            )}

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
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__("Animation", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Animation Effect", "digiblocks")}
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

                            <SelectControl
                                label={__("Hover Effect", "digiblocks")}
                                value={hoverEffect}
                                options={hoverEffectOptions}
                                onChange={(value) => setAttributes({ hoverEffect: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
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
                            title={__("Additional", "digiblocks")}
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

    // Block props
    const blockProps = useBlockProps({
        className: `digiblocks-cart-icon ${id} ${customClasses || ''} ${animation !== 'none' ? `animate-${animation}` : ''}`,
        id: anchor || null,
    });

    // Render preview
    const renderPreview = () => {
        const iconSvg = getCartIcon();

        return (
			<div className="digiblocks-cart-icon-link">
				<div className="digiblocks-cart-icon-icon">
					<span dangerouslySetInnerHTML={{ __html: iconSvg }} />
					{showCount && (
						<span className="digiblocks-cart-count">3</span>
					)}
				</div>
				
				{showText && (
					<span className="digiblocks-cart-text">{cartText || __('Cart', 'digiblocks')}</span>
				)}
				
				{showTotal && (
					<span className="digiblocks-cart-total">$49.99</span>
				)}
			</div>
        );
    };

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
                {renderPreview()}
            </div>
        </>
    );
};

export default WooCartIconEdit;