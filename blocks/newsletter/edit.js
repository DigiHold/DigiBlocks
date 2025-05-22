/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    RichText,
} = wp.blockEditor;
const {
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    TabPanel,
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
const { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl } = digi.components;

/**
 * Edit function for the Newsletter block
 */
const NewsletterEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        layout,
        align,
        title,
        showTitle,
        description,
        showDescription,
        emailPlaceholder,
        namePlaceholder,
        buttonText,
        showNameField,
        successMessage,
        errorMessage,
        titleColor,
        titleHoverColor,
        descriptionColor,
        inputTextColor,
        inputBackgroundColor,
        inputBorderColor,
        inputBorderFocusColor,
        inputPlaceholderColor,
        buttonTextColor,
        buttonBackgroundColor,
        buttonTextHoverColor,
        buttonBackgroundHoverColor,
        buttonBorderColor,
        buttonBorderHoverColor,
        backgroundColor,
        backgroundHoverColor,
        containerBorderColor,
        containerBorderHoverColor,
        titleTypography,
        contentTypography,
        textTypography,
        buttonTypography,
        containerBorderRadius,
        containerBorderWidth,
        containerBorderStyle,
        inputBorderRadius,
        inputBorderWidth,
        inputBorderStyle,
        buttonBorderRadius,
        buttonBorderWidth,
        buttonBorderStyle,
        spacing,
        inputSpacing,
        padding,
        margin,
        boxShadow,
        boxShadowHover,
        buttonBoxShadow,
        buttonBoxShadowHover,
        inputBoxShadow,
        inputBoxShadowHover,
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

    // Layout options
    const layoutOptions = [
        { label: __('Stacked', 'digiblocks'), value: 'stacked' },
        { label: __('Inline', 'digiblocks'), value: 'inline' },
    ];

    // Border style options
    const borderStyleOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Double", "digiblocks"), value: "double" },
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
            /* Newsletter Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${boxShadow?.enable ? `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};` : ''}
				${containerBorderStyle !== 'none' ? 'border: ' + (containerBorderWidth[activeDevice] || 1) + 'px ' + (containerBorderStyle || 'solid') + ' ' + containerBorderColor + ';' : 'border: none;'}
                ${getDimensionCSS(containerBorderRadius, 'border-radius', activeDevice)}
                transition: all 0.3s ease;
                text-align: ${align[activeDevice] === 'center' ? 'center' : align[activeDevice] === 'right' ? 'right' : 'left'};
            }

            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${containerBorderHoverColor ? `border-color: ${containerBorderHoverColor};` : ''}
                ${boxShadowHover?.enable ? `box-shadow: ${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};` : ''}
            }

            /* Newsletter Title */
            .${id} .digiblocks-newsletter-title {
                color: ${titleColor};
                margin-top: 0;
                margin-bottom: ${spacing[activeDevice]?.value || 20}${spacing[activeDevice]?.unit || 'px'};
                ${titleTypography.fontFamily ? `font-family: ${titleTypography.fontFamily};` : ''}
                ${titleTypography.fontSize?.[activeDevice] ? `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};` : ''}
                ${titleTypography.fontWeight ? `font-weight: ${titleTypography.fontWeight};` : ''}
                ${titleTypography.fontStyle ? `font-style: ${titleTypography.fontStyle};` : ''}
                ${titleTypography.textTransform ? `text-transform: ${titleTypography.textTransform};` : ''}
                ${titleTypography.textDecoration ? `text-decoration: ${titleTypography.textDecoration};` : ''}
                ${titleTypography.lineHeight?.[activeDevice] ? `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};` : ''}
                ${titleTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};` : ''}
                transition: color 0.3s ease;
            }

            .${id}:hover .digiblocks-newsletter-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            }

            /* Newsletter Description */
            .${id} .digiblocks-newsletter-description {
                color: ${descriptionColor};
                margin-bottom: ${spacing[activeDevice]?.value || 20}${spacing[activeDevice]?.unit || 'px'};
                ${contentTypography.fontFamily ? `font-family: ${contentTypography.fontFamily};` : ''}
                ${contentTypography.fontSize?.[activeDevice] ? `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};` : ''}
                ${contentTypography.fontWeight ? `font-weight: ${contentTypography.fontWeight};` : ''}
                ${contentTypography.fontStyle ? `font-style: ${contentTypography.fontStyle};` : ''}
                ${contentTypography.textTransform ? `text-transform: ${contentTypography.textTransform};` : ''}
                ${contentTypography.textDecoration ? `text-decoration: ${contentTypography.textDecoration};` : ''}
                ${contentTypography.lineHeight?.[activeDevice] ? `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};` : ''}
                ${contentTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};` : ''}
            }

            /* Newsletter Form */
            .${id} .digiblocks-newsletter-form {
                display: flex;
                ${layout === 'stacked' ? 'flex-direction: column;' : 'flex-direction: row;'}
                gap: ${inputSpacing[activeDevice]?.value || 10}${inputSpacing[activeDevice]?.unit || 'px'};
                ${layout === 'inline' && align[activeDevice] === 'center' ? 'justify-content: center;' : ''}
                ${layout === 'inline' && align[activeDevice] === 'right' ? 'justify-content: flex-end;' : ''}
            }

            /* Form Fields */
            .${id} .digiblocks-newsletter-fields {
                display: flex;
                ${layout === 'stacked' ? 'flex-direction: column;' : 'flex-direction: row;'}
                gap: ${inputSpacing[activeDevice]?.value || 10}${inputSpacing[activeDevice]?.unit || 'px'};
                ${layout === 'inline' ? 'flex: 1;' : 'width: 100%;'}
            }

            .${id} .digiblocks-newsletter-field {
                ${layout === 'stacked' ? 'width: 100%;' : 'flex: 1;'}
            }

            /* Input Container with Icon */
            .${id} .digiblocks-newsletter-input-container {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
            }

            .${id} .digiblocks-newsletter-input-icon {
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
                ${textTypography.fontSize?.[activeDevice] ? `width: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : 'width: 1em;'}
                ${textTypography.fontSize?.[activeDevice] ? `height: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : 'height: 1em;'}
                fill: ${inputTextColor};
                pointer-events: none;
                z-index: 2;
                opacity: 0.7;
                transition: all 0.3s ease;
            }

            /* Input Styles */
            .${id} .digiblocks-newsletter-input {
                width: 100%;
                padding: 12px 16px 12px 50px;
                color: ${inputTextColor};
                background-color: ${inputBackgroundColor};
				${inputBorderStyle !== 'none' ? 'border: ' + (inputBorderWidth[activeDevice] || 1) + 'px ' + (inputBorderStyle || 'solid') + ' ' + inputBorderColor + ';' : 'border: none;'}
                ${getDimensionCSS(inputBorderRadius, 'border-radius', activeDevice)}
                ${inputBoxShadow?.enable ? `box-shadow: ${inputBoxShadow.horizontal}px ${inputBoxShadow.vertical}px ${inputBoxShadow.blur}px ${inputBoxShadow.spread}px ${inputBoxShadow.color};` : ''}
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ''}
                ${textTypography.textTransform ? `text-transform: ${textTypography.textTransform};` : ''}
                ${textTypography.textDecoration ? `text-decoration: ${textTypography.textDecoration};` : ''}
                ${textTypography.lineHeight?.[activeDevice] ? `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};` : ''}
                ${textTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};` : ''}
                transition: all 0.3s ease;
                outline: none;
				box-shadow: none;
            }

            .${id} .digiblocks-newsletter-input::placeholder {
                color: ${inputPlaceholderColor};
            }

            .${id} .digiblocks-newsletter-input:focus {
                border-color: ${inputBorderFocusColor};
                ${inputBoxShadowHover?.enable ? `box-shadow: ${inputBoxShadowHover.horizontal}px ${inputBoxShadowHover.vertical}px ${inputBoxShadowHover.blur}px ${inputBoxShadowHover.spread}px ${inputBoxShadowHover.color};` : ''}
            }

            .${id} .digiblocks-newsletter-input:focus + .digiblocks-newsletter-input-icon {
                opacity: 1;
                fill: ${inputBorderFocusColor || inputTextColor};
            }

            /* Button Styles */
            .${id} .digiblocks-newsletter-button {
                padding: 12px 24px;
                color: ${buttonTextColor};
                background-color: ${buttonBackgroundColor};
				${buttonBorderStyle !== 'none' ? 'border: ' + (buttonBorderWidth[activeDevice] || 1) + 'px ' + (buttonBorderStyle || 'solid') + ' ' + buttonBorderColor + ';' : 'border: none;'}
                ${getDimensionCSS(buttonBorderRadius, 'border-radius', activeDevice)}
                ${buttonBoxShadow?.enable ? `box-shadow: ${buttonBoxShadow.horizontal}px ${buttonBoxShadow.vertical}px ${buttonBoxShadow.blur}px ${buttonBoxShadow.spread}px ${buttonBoxShadow.color};` : ''}
                ${buttonTypography.fontFamily ? `font-family: ${buttonTypography.fontFamily};` : ''}
                ${buttonTypography.fontSize?.[activeDevice] ? `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || 'px'};` : ''}
                ${buttonTypography.fontWeight ? `font-weight: ${buttonTypography.fontWeight};` : ''}
                ${buttonTypography.fontStyle ? `font-style: ${buttonTypography.fontStyle};` : ''}
                ${buttonTypography.textTransform ? `text-transform: ${buttonTypography.textTransform};` : ''}
                ${buttonTypography.textDecoration ? `text-decoration: ${buttonTypography.textDecoration};` : ''}
                ${buttonTypography.lineHeight?.[activeDevice] ? `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || 'em'};` : ''}
                ${buttonTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || 'px'};` : ''}
                cursor: pointer;
                transition: all 0.3s ease;
                ${layout === 'stacked' ? 'width: 100%;' : 'white-space: nowrap;'}
            }

            .${id} .digiblocks-newsletter-button:hover {
                color: ${buttonTextHoverColor || buttonTextColor};
                background-color: ${buttonBackgroundHoverColor || buttonBackgroundColor};
                border-color: ${buttonBorderHoverColor || buttonBorderColor};
                ${buttonBoxShadowHover?.enable ? `box-shadow: ${buttonBoxShadowHover.horizontal}px ${buttonBoxShadowHover.vertical}px ${buttonBoxShadowHover.blur}px ${buttonBoxShadowHover.spread}px ${buttonBoxShadowHover.color};` : ''}
            }

            /* Messages */
            .${id} .digiblocks-newsletter-message {
                margin-top: ${spacing[activeDevice]}px;
                padding: 12px;
                border-radius: 4px;
                display: none;
            }

            .${id} .digiblocks-newsletter-message.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }

            .${id} .digiblocks-newsletter-message.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }

            /* Animation keyframes */
            ${animationCSS}

			/* Responsive */
			@media (max-width: 767px) {
				.${id} .digiblocks-newsletter-form {
					flex-direction: column;
				}
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
								<>
									{__('Configure your newsletter platform in ', 'digiblocks')}
									<a 
										href="/wp-admin/admin.php?page=digiblocks-settings" 
										target="_blank" 
										rel="noopener noreferrer"
									>
										{__('DigiBlocks Settings', 'digiblocks')}
									</a>
									{__(' to enable subscriptions.', 'digiblocks')}
								</>
							</Notice>

                            <ToggleControl
                                label={__('Show Title', 'digiblocks')}
                                checked={showTitle}
                                onChange={(value) => setAttributes({ showTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__('Show Description', 'digiblocks')}
                                checked={showDescription}
                                onChange={(value) => setAttributes({ showDescription: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__('Show Name Field', 'digiblocks')}
                                checked={showNameField}
                                onChange={(value) => setAttributes({ showNameField: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <TextControl
                                label={__('Email Placeholder', 'digiblocks')}
                                value={emailPlaceholder}
                                onChange={(value) => setAttributes({ emailPlaceholder: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {showNameField && (
                                <TextControl
                                    label={__('Name Placeholder', 'digiblocks')}
                                    value={namePlaceholder}
                                    onChange={(value) => setAttributes({ namePlaceholder: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <TextControl
                                label={__('Success Message', 'digiblocks')}
                                value={successMessage}
                                onChange={(value) => setAttributes({ successMessage: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <TextControl
                                label={__('Error Message', 'digiblocks')}
                                value={errorMessage}
                                onChange={(value) => setAttributes({ errorMessage: value })}
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
                                label={__("Layout", "digiblocks")}
                                value={layout}
                                onChange={(value) => setAttributes({ layout: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="stacked" 
                                    label={__("Stacked", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="inline" 
                                    label={__("Inline", "digiblocks")}
                                />
                            </ToggleGroupControl>

                            <ResponsiveButtonGroup
                                label={__('Alignment', 'digiblocks')}
                                value={align}
                                onChange={(value) => setAttributes({ align: value })}
                                options={[
                                    { label: __('Left', 'digiblocks'), value: 'left' },
                                    { label: __('Center', 'digiblocks'), value: 'center' },
                                    { label: __('Right', 'digiblocks'), value: 'right' },
                                ]}
                            />

                            <ResponsiveRangeControl
                                label={__("Content Spacing", "digiblocks")}
                                value={spacing}
                                onChange={(value) => setAttributes({ spacing: value })}
                                units={[
									{ label: 'px', value: 'px' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
                                ]}
                                defaultUnit="px"
                                min={0}
                                max={100}
                                step={1}
                                defaultValues={{
                                    desktop: { value: 20, unit: 'px' },
									tablet: { value: 20, unit: 'px' },
									mobile: { value: 20, unit: 'px' }
                                }}
                            />

                            <ResponsiveRangeControl
                                label={__("Field Spacing", "digiblocks")}
                                value={inputSpacing}
                                onChange={(value) => setAttributes({ inputSpacing: value })}
                                units={[
									{ label: 'px', value: 'px' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
                                ]}
                                defaultUnit="px"
                                min={0}
                                max={50}
                                step={1}
                                defaultValues={{
                                    desktop: { value: 10, unit: 'px' },
                                    tablet: { value: 8, unit: 'px' },
                                    mobile: { value: 6, unit: 'px' },
                                }}
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
                                                    title={__("Text Colors", "digiblocks")}
                                                    initialOpen={true}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: titleColor,
                                                            onChange: (value) => setAttributes({ titleColor: value }),
                                                            label: __("Title Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: descriptionColor,
                                                            onChange: (value) => setAttributes({ descriptionColor: value }),
                                                            label: __('Description Color', 'digiblocks'),
                                                        },
                                                    ]}
                                                />

                                                <PanelColorSettings
                                                    title={__("Input Colors", "digiblocks")}
                                                    initialOpen={false}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: inputTextColor,
                                                            onChange: (value) => setAttributes({ inputTextColor: value }),
                                                            label: __('Input Text Color', 'digiblocks'),
                                                        },
                                                        {
                                                            value: inputBackgroundColor,
                                                            onChange: (value) => setAttributes({ inputBackgroundColor: value }),
                                                            label: __('Input Background', 'digiblocks'),
                                                        },
                                                        {
                                                            value: inputBorderColor,
                                                            onChange: (value) => setAttributes({ inputBorderColor: value }),
                                                            label: __('Input Border', 'digiblocks'),
                                                        },
                                                        {
                                                            value: inputBorderFocusColor,
                                                            onChange: (value) => setAttributes({ inputBorderFocusColor: value }),
                                                            label: __('Input Border Focus', 'digiblocks'),
                                                        },
                                                        {
                                                            value: inputPlaceholderColor,
                                                            onChange: (value) => setAttributes({ inputPlaceholderColor: value }),
                                                            label: __('Placeholder Color', 'digiblocks'),
                                                        },
                                                    ]}
                                                />

                                                <PanelColorSettings
                                                    title={__("Button Colors", "digiblocks")}
                                                    initialOpen={false}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: buttonTextColor,
                                                            onChange: (value) => setAttributes({ buttonTextColor: value }),
                                                            label: __('Button Text', 'digiblocks'),
                                                        },
                                                        {
                                                            value: buttonBackgroundColor,
                                                            onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                                                            label: __('Button Background', 'digiblocks'),
                                                        },
                                                        {
                                                            value: buttonBorderColor,
                                                            onChange: (value) => setAttributes({ buttonBorderColor: value }),
                                                            label: __('Button Border', 'digiblocks'),
                                                        },
                                                    ]}
                                                />

                                                <PanelColorSettings
                                                    title={__("Background Colors", "digiblocks")}
                                                    initialOpen={false}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: backgroundColor,
                                                            onChange: (value) => setAttributes({ backgroundColor: value }),
                                                            label: __('Background Color', 'digiblocks'),
                                                        },
                                                        {
                                                            value: containerBorderColor,
                                                            onChange: (value) => setAttributes({ containerBorderColor: value }),
                                                            label: __('Border Color', 'digiblocks'),
                                                        },
                                                    ]}
                                                />
                                            </>
                                        );
                                    } else {
                                        return (
                                            <>
                                                <PanelColorSettings
                                                    title={__("Hover Colors", "digiblocks")}
                                                    initialOpen={true}
                                                    enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: titleHoverColor,
                                                            onChange: (value) => setAttributes({ titleHoverColor: value }),
                                                            label: __("Title Hover Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: buttonTextHoverColor,
                                                            onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                                                            label: __('Button Text Hover', 'digiblocks'),
                                                        },
                                                        {
                                                            value: buttonBackgroundHoverColor,
                                                            onChange: (value) => setAttributes({ buttonBackgroundHoverColor: value }),
                                                            label: __('Button Background Hover', 'digiblocks'),
                                                        },
                                                        {
                                                            value: buttonBorderHoverColor,
                                                            onChange: (value) => setAttributes({ buttonBorderHoverColor: value }),
                                                            label: __('Button Border Hover', 'digiblocks'),
                                                        },
                                                        {
                                                            value: backgroundHoverColor,
                                                            onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                                                            label: __('Background Hover', 'digiblocks'),
                                                        },
                                                        {
                                                            value: containerBorderHoverColor,
                                                            onChange: (value) => setAttributes({ containerBorderHoverColor: value }),
                                                            label: __('Border Hover', 'digiblocks'),
                                                        },
                                                    ]}
                                                />
                                            </>
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
                                label={__('Title Typography', 'digiblocks')}
                                value={titleTypography}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Description Typography', 'digiblocks')}
                                value={contentTypography}
                                onChange={(value) => setAttributes({ contentTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                }}
                            />

                            <TypographyControl
                                label={__('Input Typography', 'digiblocks')}
                                value={textTypography}
                                onChange={(value) => setAttributes({ textTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
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
                            name="borders"
                            title={__('Borders & Radius', 'digiblocks')}
                            initialOpen={false}
                        >
							<h4>{__('Container Border', 'digiblocks')}</h4>
							
							<SelectControl
								label={__('Container Border Style', 'digiblocks')}
								value={containerBorderStyle}
								options={borderStyleOptions}
								onChange={(value) => setAttributes({ containerBorderStyle: value })}
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							/>

							<ResponsiveControl
								label={__('Container Border Width', 'digiblocks')}
							>
								<RangeControl
									value={containerBorderWidth[localActiveDevice]}
									onChange={(value) =>
										setAttributes({
											containerBorderWidth: {
												...containerBorderWidth,
												[localActiveDevice]: value,
											},
										})
									}
									min={0}
									max={10}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
							</ResponsiveControl>
							
							<ResponsiveControl
								label={__('Container Border Radius', 'digiblocks')}
							>
								<DimensionControl
									values={containerBorderRadius[localActiveDevice]}
									onChange={(value) =>
										setAttributes({
											containerBorderRadius: {
												...containerBorderRadius,
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

                            <h4>{__('Input Border', 'digiblocks')}</h4>
                            
                            <SelectControl
                                label={__('Input Border Style', 'digiblocks')}
                                value={inputBorderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ inputBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <ResponsiveControl
                                label={__('Input Border Width', 'digiblocks')}
                            >
                                <RangeControl
                                    value={inputBorderWidth[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            inputBorderWidth: {
                                                ...inputBorderWidth,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={10}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
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

                            <h4>{__('Button Border', 'digiblocks')}</h4>
                            
                            <SelectControl
                                label={__('Button Border Style', 'digiblocks')}
                                value={buttonBorderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ buttonBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <ResponsiveControl
                                label={__('Button Border Width', 'digiblocks')}
                            >
                                <RangeControl
                                    value={buttonBorderWidth[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonBorderWidth: {
                                                ...buttonBorderWidth,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={10}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
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
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="shadow"
                            title={__('Box Shadow', 'digiblocks')}
                            initialOpen={false}
                        >
                            <BoxShadowControl
                                label={__('Container Shadow', 'digiblocks')}
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
                            />

                            <BoxShadowControl
                                label={__('Input Shadow', 'digiblocks')}
                                normalValue={inputBoxShadow}
                                hoverValue={inputBoxShadowHover}
                                onNormalChange={(value) => setAttributes({ inputBoxShadow: value })}
                                onHoverChange={(value) => setAttributes({ inputBoxShadowHover: value })}
                            />

                            <BoxShadowControl
                                label={__('Button Shadow', 'digiblocks')}
                                normalValue={buttonBoxShadow}
                                hoverValue={buttonBoxShadowHover}
                                onNormalChange={(value) => setAttributes({ buttonBoxShadow: value })}
                                onHoverChange={(value) => setAttributes({ buttonBoxShadowHover: value })}
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
    const animationClass = ('none' !== animation) ? ` animate-${animation}` : '';
    const blockClasses = `digiblocks-newsletter ${id}${animationClass} ${customClasses || ""}`;

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
                {showTitle && (
                    <RichText
                        tagName="h3"
                        className="digiblocks-newsletter-title"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Subscribe to our Newsletter', 'digiblocks')}
                    />
                )}

                {showDescription && (
                    <RichText
                        tagName="p"
                        className="digiblocks-newsletter-description"
                        value={description}
                        onChange={(value) => setAttributes({ description: value })}
                        placeholder={__('Stay updated with our latest news and offers', 'digiblocks')}
                    />
                )}

                <form className="digiblocks-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="digiblocks-newsletter-fields">
                        {showNameField && (
                            <div className="digiblocks-newsletter-field">
                                <div className="digiblocks-newsletter-input-container">
                                    <input
                                        type="text"
                                        className="digiblocks-newsletter-input"
                                        placeholder={namePlaceholder}
                                        disabled
                                    />
                                    <svg className="digiblocks-newsletter-input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
                                        <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                                    </svg>
                                </div>
                            </div>
                        )}
                        <div className="digiblocks-newsletter-field">
                            <div className="digiblocks-newsletter-input-container">
                                <input
                                    type="email"
                                    className="digiblocks-newsletter-input"
                                    placeholder={emailPlaceholder}
                                    disabled
                                />
                                <svg className="digiblocks-newsletter-input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
                                    <path d="M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <RichText
                        tagName="button"
                        className="digiblocks-newsletter-button"
                        value={buttonText}
                        onChange={(value) => setAttributes({ buttonText: value })}
                        placeholder={__('Subscribe', 'digiblocks')}
                    />
                </form>

                <div className="digiblocks-newsletter-message success">
                    {successMessage}
                </div>
                <div className="digiblocks-newsletter-message error">
                    {errorMessage}
                </div>
            </div>
        </>
    );
};

export default NewsletterEdit;