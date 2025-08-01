/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck,
} = wp.blockEditor;
const {
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;
const { useSelect } = wp.data;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl, ResponsiveButtonGroup, GradientControl } = digi.components;

/**
 * Row Block Edit Component
 */
const RowEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        contentWidth,
        contentMaxWidth,
        horizontalAlign,
        verticalAlign,
        heightType,
        minHeight,
		nestedWidth,
        gap,
        overflowHidden,
        zIndex,
        backgroundColor,
        backgroundGradient,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundVideo,
        backgroundVideoFallbackImage,
        backgroundOverlay,
        backgroundOverlayOpacity,
        backgroundOverlayBlendMode,
        padding,
        margin,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        boxShadow,
        boxShadowHover,
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

    // Ref for animation preview
    const previewTimeoutRef = useRef(null);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        return unsubscribe;
    }, []);

    // Check if this row is nested inside another row
    const { isNested, hasChildBlocks } = useSelect(
        (select) => {
            const { getBlockParentsByBlockName, getBlockCount } = select('core/block-editor');
            return {
                isNested: getBlockParentsByBlockName(clientId, 'digiblocks/row').length > 0,
                hasChildBlocks: getBlockCount(clientId) > 0,
            };
        },
        [clientId]
    );

    // Update the isNested attribute when component mounts or when parent changes
    useEffect(() => {
        setAttributes({ isNested });
    }, [isNested, setAttributes]);

    // Effect to trigger animation preview when animation attribute changes
    useEffect(() => {
        if (animation && animation !== 'none') {
            const timeoutId = setTimeout(() => {
                animationPreview(id, animation, animations, previewTimeoutRef);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);

    // Generate gradient CSS
    const generateGradientCSS = () => {
        if (!backgroundGradient.enable || !backgroundGradient.colors.length) {
            return '';
        }

        const colorStops = backgroundGradient.colors
            .map(stop => `${stop.color} ${stop.position}%`)
            .join(', ');

        if (backgroundGradient.type === 'radial') {
            return `background-image: radial-gradient(circle at ${backgroundGradient.position}, ${colorStops});`;
        } else {
            return `background-image: linear-gradient(${backgroundGradient.angle}deg, ${colorStops});`;
        }
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

    // Button click handler for animation preview
    const handlePreviewClick = () => {
        animationPreview(id, animation, animations, previewTimeoutRef);
    };

    // Background position options
    const bgPositionOptions = [
        { label: __('Top Left', 'digiblocks'), value: 'top left' },
        { label: __('Top Center', 'digiblocks'), value: 'top center' },
        { label: __('Top Right', 'digiblocks'), value: 'top right' },
        { label: __('Center Left', 'digiblocks'), value: 'center left' },
        { label: __('Center Center', 'digiblocks'), value: 'center center' },
        { label: __('Center Right', 'digiblocks'), value: 'center right' },
        { label: __('Bottom Left', 'digiblocks'), value: 'bottom left' },
        { label: __('Bottom Center', 'digiblocks'), value: 'bottom center' },
        { label: __('Bottom Right', 'digiblocks'), value: 'bottom right' },
    ];

    // Background repeat options
    const bgRepeatOptions = [
        { label: __('No Repeat', 'digiblocks'), value: 'no-repeat' },
        { label: __('Repeat', 'digiblocks'), value: 'repeat' },
        { label: __('Repeat X', 'digiblocks'), value: 'repeat-x' },
        { label: __('Repeat Y', 'digiblocks'), value: 'repeat-y' },
    ];

    // Background size options
    const bgSizeOptions = [
        { label: __('Cover', 'digiblocks'), value: 'cover' },
        { label: __('Contain', 'digiblocks'), value: 'contain' },
        { label: __('Auto', 'digiblocks'), value: 'auto' },
        { label: __('100%', 'digiblocks'), value: '100%' },
    ];

    // Border style options
    const borderStyleOptions = [
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Solid', 'digiblocks'), value: 'solid' },
        { label: __('Dashed', 'digiblocks'), value: 'dashed' },
        { label: __('Dotted', 'digiblocks'), value: 'dotted' },
        { label: __('Double', 'digiblocks'), value: 'double' },
    ];

    // Blend mode options
    const blendModeOptions = [
        { label: __('Normal', 'digiblocks'), value: 'normal' },
        { label: __('Multiply', 'digiblocks'), value: 'multiply' },
        { label: __('Screen', 'digiblocks'), value: 'screen' },
        { label: __('Overlay', 'digiblocks'), value: 'overlay' },
        { label: __('Darken', 'digiblocks'), value: 'darken' },
        { label: __('Lighten', 'digiblocks'), value: 'lighten' },
        { label: __('Color Dodge', 'digiblocks'), value: 'color-dodge' },
        { label: __('Color Burn', 'digiblocks'), value: 'color-burn' },
        { label: __('Hard Light', 'digiblocks'), value: 'hard-light' },
        { label: __('Soft Light', 'digiblocks'), value: 'soft-light' },
        { label: __('Difference', 'digiblocks'), value: 'difference' },
        { label: __('Exclusion', 'digiblocks'), value: 'exclusion' },
        { label: __('Hue', 'digiblocks'), value: 'hue' },
        { label: __('Saturation', 'digiblocks'), value: 'saturation' },
        { label: __('Color', 'digiblocks'), value: 'color' },
        { label: __('Luminosity', 'digiblocks'), value: 'luminosity' },
    ];

    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'options', 
            title: __('Layout', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        { 
            name: 'style', 
            title: __('Style', 'digiblocks'),
            icon: tabIcons.styleIcon
        },
        { 
            name: 'background', 
            title: __('Background', 'digiblocks'),
            icon: tabIcons.backgroundIcon
        },
        { 
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Helper function to get gap value with fallback
    const getGapValue = (gapObj, device) => {
        if (gapObj[device] && gapObj[device].value !== '') {
            return {
                value: gapObj[device].value,
                unit: gapObj[device].unit || 'px'
            };
        }
        
        if (device === 'tablet') {
            return {
                value: gapObj.desktop.value,
                unit: gapObj.desktop.unit || 'px'
            };
        }
        
        if (device === 'mobile') {
            if (gapObj.tablet && gapObj.tablet.value !== '') {
                return {
                    value: gapObj.tablet.value,
                    unit: gapObj.tablet.unit || 'px'
                };
            }
            return {
                value: gapObj.desktop.value,
                unit: gapObj.desktop.unit || 'px'
            };
        }
        
        return {
            value: 0,
            unit: 'px'
        };
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Get responsive padding with minimum 10px enforcement
        const getRowPadding = (padding, device) => {
            const hasDeviceValues = (dev) => {
                return padding && padding[dev] && (
                    (padding[dev].top !== undefined && padding[dev].top !== '') ||
                    (padding[dev].right !== undefined && padding[dev].right !== '') ||
                    (padding[dev].bottom !== undefined && padding[dev].bottom !== '') ||
                    (padding[dev].left !== undefined && padding[dev].left !== '')
                );
            };
            
            let values;
            
            if (hasDeviceValues(device)) {
                values = padding[device];
            } else if (device === 'tablet' && hasDeviceValues('desktop')) {
                values = padding['desktop'];
            } else if (device === 'mobile') {
                if (hasDeviceValues('tablet')) {
                    values = padding['tablet'];
                } else if (hasDeviceValues('desktop')) {
                    values = padding['desktop'];
                } else {
                    return '';
                }
            } else {
                return '';
            }
            
            const ensureMinPadding = (value, unit) => {
                if (value === undefined || value === '') {
                    return '0' + unit;
                }
                if (unit === 'px' && parseFloat(value) < 10) {
                    return '10px';
                }
                return value + unit;
            };
            
            const unit = values.unit || 'px';
            
            const top = ensureMinPadding(values.top, unit);
            const right = ensureMinPadding(values.right, unit);
            const bottom = ensureMinPadding(values.bottom, unit);
            const left = ensureMinPadding(values.left, unit);
            
            return `padding: ${top} ${right} ${bottom} ${left} !important;`;
        };

        const paddingCSS = getRowPadding(padding, activeDevice);
        const tabletPaddingCSS = getRowPadding(padding, 'tablet');
        const mobilePaddingCSS = getRowPadding(padding, 'mobile');
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }

        // Background styles - priority: gradient > image > color
        let backgroundStyles = '';
        
        if (backgroundColor) {
            backgroundStyles += `background-color: ${backgroundColor};`;
        }
        
        const gradientCSS = generateGradientCSS();
        if (gradientCSS) {
            backgroundStyles += gradientCSS;
        }
        
        if (backgroundImage && backgroundImage.url) {
            const imageCSS = `url(${backgroundImage.url})`;
            if (gradientCSS) {
                backgroundStyles = backgroundStyles.replace(
                    /background-image: ([^;]+);/, 
                    `background-image: ${imageCSS}, $1;`
                );
            } else {
                backgroundStyles += `background-image: ${imageCSS};`;
            }
            backgroundStyles += `background-position: ${backgroundPosition};
            background-repeat: ${backgroundRepeat};
            background-size: ${backgroundSize};`;
        }
        
        // Background overlay CSS
        let overlayCSS = '';
        if (backgroundOverlay) {
            overlayCSS = `
            .${id}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${backgroundOverlay};
                opacity: ${backgroundOverlayOpacity};
                mix-blend-mode: ${backgroundOverlayBlendMode};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${id} > * {
                position: relative;
                z-index: 2;
            }`;
        }
        
        // Box shadow CSS
        let boxShadowCSS = '';
        if (boxShadow && boxShadow.enable) {
            boxShadowCSS = `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }

        // Box shadow hover
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Height CSS for non-nested rows only
        let heightCSS = '';
        if (!isNested) {
            if (heightType[activeDevice] === 'full') {
                heightCSS = 'height: 100vh;';
            } else if (heightType[activeDevice] === 'custom') {
                heightCSS = `min-height: ${minHeight[activeDevice]}px !important;`;
            }
        }
        
        // Content width CSS for non-nested rows
        let contentWidthCSS = '';
        if (!isNested) {
            const widthValue = contentWidth[activeDevice] !== undefined && contentWidth[activeDevice] !== '' 
                ? contentWidth[activeDevice] 
                : contentWidth.desktop;
                
            contentWidthCSS = `width: ${widthValue}px;
            margin-left: auto;
            margin-right: auto;`;
        }
        
        // Content max width CSS for non-nested rows
        let contentMaxWidthCSS = '';
        if (!isNested) {
            const maxWidthValue = contentMaxWidth[activeDevice] !== undefined && contentMaxWidth[activeDevice] !== '' 
                ? contentMaxWidth[activeDevice] 
                : contentMaxWidth.desktop;
                
            contentMaxWidthCSS = `max-width: ${maxWidthValue}%;`;
        }
        
        return `
            /* Row Block - ${id} */
            .${id} {
                position: relative;
                ${paddingCSS}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                width: 100%;
                ${heightCSS}
                ${backgroundStyles}
                ${borderStyle !== 'none' ? `
                border-style: ${borderStyle}!important;
                ${getDimensionCSS(borderWidth, 'border-width', activeDevice, true)}
                border-color: ${borderColor}!important;` : ''}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                ${boxShadowCSS}
                ${overflowHidden ? 'overflow: hidden;' : ''}
                ${zIndex ? `z-index: ${zIndex};` : ''}
                transition: all 0.3s ease;
            }
            
            .${id}:hover {
                ${boxShadowHoverCSS}
            }

            .${id} > .digiblocks-row-inner {
                display: flex;
                align-items: ${verticalAlign[activeDevice]};
                justify-content: ${horizontalAlign[activeDevice]};
                gap: ${getGapValue(gap, activeDevice).value}${getGapValue(gap, activeDevice).unit};
                ${!isNested ? contentWidthCSS : ''}
                ${!isNested ? contentMaxWidthCSS : ''}
            }

            .${id}.is-nested > .block-editor-block-list__layout {
				display: flex;
				align-items: ${verticalAlign[activeDevice]};
				justify-content: ${horizontalAlign[activeDevice]};
				gap: ${getGapValue(gap, activeDevice).value}${getGapValue(gap, activeDevice).unit};
				width: ${nestedWidth[activeDevice] === 'full' ? '100%' : 'auto'};
			}
            
            ${overlayCSS}
            
            /* Background video */
            .${id} > .digiblocks-bg-video-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 0;
                pointer-events: none;
                border-radius: inherit;
            }
            
            .${id} > .digiblocks-bg-video {
                position: absolute;
                top: 50%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                transform: translateX(-50%) translateY(-50%);
                object-fit: cover;
            }
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${id} {
                    ${tabletPaddingCSS}
                    ${getDimensionCSS(margin, 'margin', 'tablet')}
                    ${!isNested && heightType['tablet'] === 'custom' ? `min-height: ${minHeight['tablet']}px;` : ''}
                    ${getDimensionCSS(borderRadius, 'border-radius', 'tablet')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'tablet', true)}` : ''}
                }

                .${id} > .digiblocks-row-inner {
                    ${!isNested ? `
                        width: ${contentWidth.tablet !== undefined && contentWidth.tablet !== '' 
                            ? contentWidth.tablet 
                            : contentWidth.desktop}px;
                        max-width: ${contentMaxWidth.tablet !== undefined && contentMaxWidth.tablet !== '' 
                            ? contentMaxWidth.tablet 
                            : contentMaxWidth.desktop}%;
                    ` : ''}
                    align-items: ${verticalAlign['tablet']};
                    justify-content: ${horizontalAlign['tablet']};
                    gap: ${getGapValue(gap, 'tablet').value}${getGapValue(gap, 'tablet').unit};
                }

                .${id}.is-nested > .block-editor-block-list__layout {
					align-items: ${verticalAlign['tablet']};
					justify-content: ${horizontalAlign['tablet']};
					gap: ${getGapValue(gap, 'tablet').value}${getGapValue(gap, 'tablet').unit};
					width: ${nestedWidth['tablet'] === 'full' ? '100%' : 'auto'};
				}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    ${mobilePaddingCSS}
                    ${getDimensionCSS(margin, 'margin', 'mobile')}
                    ${!isNested && heightType['mobile'] === 'custom' ? `min-height: ${minHeight['mobile']}px;` : ''}
                    ${getDimensionCSS(borderRadius, 'border-radius', 'mobile')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'mobile', true)}` : ''}
                }

                .${id} > .digiblocks-row-inner {
                    ${!isNested ? `
                        width: ${contentWidth.mobile !== undefined && contentWidth.mobile !== '' 
                            ? contentWidth.mobile 
                            : (contentWidth.tablet !== undefined && contentWidth.tablet !== '' 
                                ? contentWidth.tablet 
                                : contentWidth.desktop)}px;
                        max-width: ${contentMaxWidth.mobile !== undefined && contentMaxWidth.mobile !== '' 
                            ? contentMaxWidth.mobile 
                            : (contentMaxWidth.tablet !== undefined && contentMaxWidth.tablet !== '' 
                                ? contentMaxWidth.tablet 
                                : contentMaxWidth.desktop)}%;
                    ` : ''}
                    align-items: ${verticalAlign['mobile']};
                    justify-content: ${horizontalAlign['mobile']};
                    gap: ${getGapValue(gap, 'mobile').value}${getGapValue(gap, 'mobile').unit};
                }

                .${id}.is-nested > .block-editor-block-list__layout {
					align-items: ${verticalAlign['mobile']};
					justify-content: ${horizontalAlign['mobile']};
					gap: ${getGapValue(gap, 'mobile').value}${getGapValue(gap, 'mobile').unit};
					width: ${nestedWidth['mobile'] === 'full' ? '100%' : 'auto'};
				}
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

    // Generate block props and inner blocks props
    const blockProps = useBlockProps({
        className: `digiblocks-row ${id} ${customClasses || ''} ${isNested ? 'is-nested' : ''}`,
        id: anchor || null,
    });

    // Configure inner blocks props based on nesting
    const innerBlocksProps = useInnerBlocksProps(
        isNested ? {} : { className: 'digiblocks-row-inner' },
        {
            templateLock: false,
            orientation: 'horizontal',
            renderAppender: hasChildBlocks ? wp.blockEditor.InnerBlocks.DefaultBlockAppender : wp.blockEditor.InnerBlocks.ButtonBlockAppender,
        }
    );

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="layout"
                            title={__('Row Layout', 'digiblocks')}
                            initialOpen={true}
                        >
                            {!isNested && (
								<>
									<ResponsiveControl
										label={__('Content Width (px)', 'digiblocks')}
									>
										<RangeControl
											value={
												contentWidth[localActiveDevice] !== '' ? 
												contentWidth[localActiveDevice] : 
												(localActiveDevice === 'desktop' ? 
													(digiBlocksData.contentWidth || 1200) : 
													contentWidth.desktop || digiBlocksData.contentWidth || 1200)
											}
											onChange={(value) =>
												setAttributes({
													contentWidth: {
														...contentWidth,
														[localActiveDevice]: value,
													},
												})
											}
											min={300}
											max={2000}
											step={1}
											__next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
										/>
									</ResponsiveControl>

									<ResponsiveControl
										label={__('Content Max Width (%)', 'digiblocks')}
									>
										<RangeControl
											value={
												contentMaxWidth[localActiveDevice] !== '' ? 
												contentMaxWidth[localActiveDevice] : 
												(localActiveDevice === 'desktop' ? 
													(digiBlocksData.contentMaxWidth || 90) : 
													contentMaxWidth.desktop || digiBlocksData.contentMaxWidth || 90)
											}
											onChange={(value) =>
												setAttributes({
													contentMaxWidth: {
														...contentMaxWidth,
														[localActiveDevice]: value,
													},
												})
											}
											min={0}
											max={100}
											step={1}
											__next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
										/>
									</ResponsiveControl>

									<ResponsiveButtonGroup
										label={__("Height", "digiblocks")}
										value={heightType}
										onChange={(value) => setAttributes({ heightType: value })}
										options={[
											{ label: __("Auto", "digiblocks"), value: "auto" },
											{ label: __("Full", "digiblocks"), value: "full" },
											{ label: __("Custom", "digiblocks"), value: "custom" }
										]}
									/>

									{heightType[localActiveDevice] === 'custom' && (
										<ResponsiveControl
											label={__('Min Height', 'digiblocks')}
										>
											<RangeControl
												value={minHeight[localActiveDevice]}
												onChange={(value) =>
													setAttributes({
														minHeight: {
															...minHeight,
															[localActiveDevice]: value,
														},
													})
												}
												min={0}
												max={1000}
												__next40pxDefaultSize={true}
												__nextHasNoMarginBottom={true}
											/>
										</ResponsiveControl>
									)}
								</>
							)}

							{isNested && (
								<ResponsiveButtonGroup
									label={__("Width", "digiblocks")}
									value={nestedWidth}
									onChange={(value) => setAttributes({ nestedWidth: value })}
									options={[
										{ label: __("Auto", "digiblocks"), value: "auto" },
										{ label: __("Full", "digiblocks"), value: "full" }
									]}
								/>
							)}

							<ResponsiveButtonGroup
								label={__("Horizontal Align", "digiblocks")}
								value={horizontalAlign}
								onChange={(value) => setAttributes({ horizontalAlign: value })}
								options={[
									{ label: __("Left", "digiblocks"), value: "flex-start" },
									{ label: __("Center", "digiblocks"), value: "center" },
									{ label: __("Right", "digiblocks"), value: "flex-end" },
									{ label: __("Space", "digiblocks"), value: "space-between" }
								]}
							/>

                            <ResponsiveButtonGroup
                                label={__("Vertical Align", "digiblocks")}
                                value={verticalAlign}
                                onChange={(value) => setAttributes({ verticalAlign: value })}
                                options={[
                                    { label: __("Top", "digiblocks"), value: "flex-start" },
                                    { label: __("Middle", "digiblocks"), value: "center" },
                                    { label: __("Bottom", "digiblocks"), value: "flex-end" }
                                ]}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="layout"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__("Gap", "digiblocks")}
                                value={gap}
                                onChange={(value) => setAttributes({ gap: value })}
                                units={[
                                    { label: 'px', value: 'px' },
                                    { label: '%', value: '%' },
                                    { label: 'em', value: 'em' },
                                    { label: 'rem', value: 'rem' },
                                ]}
                                defaultUnit="px"
                                min={0}
                                max={100}
                                step={1}
                            />
                            
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
                            tab="layout"
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
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__('Borders & Radius', 'digiblocks')}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__('Border Style', 'digiblocks')}
                                value={borderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle !== 'none' && (
                                <>
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
                                    
                                    <PanelColorSettings
                                        title=""
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                label: __('Border Color', 'digiblocks'),
                                            },
                                        ]}
                                    />
                                </>
                            )}
                            
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
                                        { label: '%', value: '%' },
                                        { label: 'em', value: 'em' },
                                    ]}
                                />
                            </ResponsiveControl>
                            
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="advanced"
                            title={__('Advanced', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Overflow Hidden', 'digiblocks')}
                                checked={overflowHidden}
                                onChange={(value) => setAttributes({ overflowHidden: value })}
                                help={__('Hide content that overflows the row boundaries.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__('Z-Index', 'digiblocks')}
                                value={zIndex}
                                onChange={(value) => setAttributes({ zIndex: value })}
                                min={-99}
                                max={99}
                                step={1}
                                allowReset={true}
                                resetFallbackValue={0}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                    </>
                );
            case 'background':
                return (
                    <>
                        <TabPanelBody
                            tab="background"
                            name="background"
                            title={__('Background', 'digiblocks')}
                            initialOpen={true}
                        >
                            <PanelColorSettings
                                title={__("Background Color", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: backgroundColor,
                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                ]}
                            />
                            
                            <div className="digiblocks-media-control">
                                <p className="components-base-control__label">{__('Background Image', 'digiblocks')}</p>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                backgroundImage: {
                                                    url: media.url,
                                                    id: media.id,
                                                    alt: media.alt || '',
                                                    size: media.sizes?.full?.url ? 'full' : '',
                                                }
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={backgroundImage?.id}
                                        render={({ open }) => (
                                            <div className="digiblocks-media-upload-wrapper">
                                                {backgroundImage?.url ? (
                                                    <div className="digiblocks-media-preview">
                                                        <img src={backgroundImage.url} alt={backgroundImage.alt || ''} />
                                                        <div className="digiblocks-media-controls">
                                                            <Button
                                                                isPrimary
                                                                onClick={open}
                                                            >
                                                                <span class="dashicon dashicons dashicons-edit"></span>
                                                            </Button>
                                                            <Button 
                                                                isDestructive
                                                                onClick={() => setAttributes({ backgroundImage: { url: '', id: 0, alt: '', size: '' } })}
                                                            >
                                                                <span class="dashicon dashicons dashicons-trash"></span>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        className="digiblocks-media-upload-button"
                                                        isPrimary
                                                        onClick={open}
                                                    >
                                                        {__('Select Image', 'digiblocks')}
                                                    </Button>
                                                )}
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            
                            {backgroundImage?.url && (
                                <>
                                    <SelectControl
                                        label={__('Background Position', 'digiblocks')}
                                        value={backgroundPosition}
                                        options={bgPositionOptions}
                                        onChange={(value) => setAttributes({ backgroundPosition: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Background Repeat', 'digiblocks')}
                                        value={backgroundRepeat}
                                        options={bgRepeatOptions}
                                        onChange={(value) => setAttributes({ backgroundRepeat: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Background Size', 'digiblocks')}
                                        value={backgroundSize}
                                        options={bgSizeOptions}
                                        onChange={(value) => setAttributes({ backgroundSize: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                        </TabPanelBody>

                        <TabPanelBody
                            tab="background"
                            name="gradient"
                            title={__('Background Gradient', 'digiblocks')}
                            initialOpen={false}
                        >
                            <GradientControl
                                value={backgroundGradient}
                                onChange={(value) => setAttributes({ backgroundGradient: value })}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="background"
                            name="backgroundVideo"
                            title={__('Background Video', 'digiblocks')}
                            initialOpen={false}
                        >
                            <div className="digiblocks-media-control">
                                <p className="components-base-control__label">{__('Background Video', 'digiblocks')}</p>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                backgroundVideo: {
                                                    url: media.url,
                                                    id: media.id,
                                                }
                                            });
                                        }}
                                        allowedTypes={['video']}
                                        value={backgroundVideo?.id}
                                        render={({ open }) => (
                                            <div className="digiblocks-media-upload-wrapper">
                                                {backgroundVideo?.url ? (
                                                    <div className="digiblocks-media-preview">
                                                        <video controls>
                                                            <source src={backgroundVideo.url} />
                                                            {__('Your browser does not support the video tag.', 'digiblocks')}
                                                        </video>
                                                        <div className="digiblocks-media-controls">
                                                            <Button
                                                                isPrimary
                                                                onClick={open}
                                                            >
                                                                <span class="dashicon dashicons dashicons-edit"></span>
                                                            </Button>
                                                            <Button 
                                                                isDestructive
                                                                onClick={() => setAttributes({ backgroundVideo: { url: '', id: 0 } })}
                                                            >
                                                                <span class="dashicon dashicons dashicons-trash"></span>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        className="digiblocks-media-upload-button"
                                                        isPrimary
                                                        onClick={open}
                                                    >
                                                        {__('Select Video', 'digiblocks')}
                                                    </Button>
                                                )}
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            
                            {backgroundVideo?.url && (
                                <div className="digiblocks-media-control">
                                    <p className="components-base-control__label">{__('Video Fallback Image', 'digiblocks')}</p>
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    backgroundVideoFallbackImage: {
                                                        url: media.url,
                                                        id: media.id,
                                                        alt: media.alt || '',
                                                    }
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={backgroundVideoFallbackImage?.id}
                                            render={({ open }) => (
                                                <div className="digiblocks-media-upload-wrapper">
                                                    {backgroundVideoFallbackImage?.url ? (
                                                        <div className="digiblocks-media-preview">
                                                            <img src={backgroundVideoFallbackImage.url} alt={backgroundVideoFallbackImage.alt || ''} />
                                                            <div className="digiblocks-media-controls">
                                                                <Button
                                                                    isPrimary
                                                                    onClick={open}
                                                                >
                                                                    <span class="dashicon dashicons dashicons-edit"></span>
                                                                </Button>
                                                                <Button 
                                                                    isDestructive
                                                                    onClick={() => setAttributes({ backgroundVideoFallbackImage: { url: '', id: 0, alt: '' } })}
                                                                >
                                                                    <span class="dashicon dashicons dashicons-trash"></span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Button
                                                            className="digiblocks-media-upload-button"
                                                            isPrimary
                                                            onClick={open}
                                                        >
                                                            {__('Select Fallback Image', 'digiblocks')}
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        />
                                    </MediaUploadCheck>
                                </div>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="background"
                            name="overlay"
                            title={__('Background Overlay', 'digiblocks')}
                            initialOpen={false}
                        >
                            <PanelColorSettings
                                title={__("Overlay Color", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: backgroundOverlay,
                                        onChange: (value) => setAttributes({ backgroundOverlay: value }),
                                        label: __("Overlay Color", "digiblocks"),
                                    },
                                ]}
                            />
                            
                            {backgroundOverlay && (
                                <>
                                    <RangeControl
                                        label={__('Overlay Opacity', 'digiblocks')}
                                        value={backgroundOverlayOpacity}
                                        onChange={(value) => setAttributes({ backgroundOverlayOpacity: value })}
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Blend Mode', 'digiblocks')}
                                        value={backgroundOverlayBlendMode}
                                        options={blendModeOptions}
                                        onChange={(value) => setAttributes({ backgroundOverlayBlendMode: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
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

    // Background video component
    const BackgroundVideo = () => {
        if (!backgroundVideo?.url) return null;
        
        return (
            <div className="digiblocks-bg-video-container">
                <video className="digiblocks-bg-video" autoPlay muted loop playsInline poster={backgroundVideoFallbackImage?.url || ''}>
                    <source src={backgroundVideo.url} type="video/mp4" />
                </video>
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
                    customClass="four"
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                {backgroundVideo?.url && <BackgroundVideo />}
                <div {...innerBlocksProps} />
            </div>
        </>
    );
};

export default RowEdit;