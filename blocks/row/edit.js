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
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
	GradientPicker,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;
const { useSelect } = wp.data;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl, ResponsiveButtonGroup, TransformControl } = digi.components;

/**
 * Row Block Edit Component
 */
const RowEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
		flexDirection,
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
        backgroundColor,
        backgroundGradient,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundVideo,
        backgroundVideoFallbackImage,
        backgroundOverlay,
		backgroundOverlayGradient,
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
		animationDuration,
		animationDelay,
        position,
        horizontalOrientation,
        horizontalOffset,
        verticalOrientation,
        verticalOffset,
        zIndex,
		transform,
        transformHover,
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

	const getVal = (obj, device) => {
		if (!obj || typeof obj !== 'object') return null;

		const isEmpty = (val) => {
			if (val === '' || val === undefined || val === null) return true;
			if (typeof val === 'object' && val !== null) {
				return val.value === '' || val.value === undefined || val.value === null;
			}
			return false;
		};

		if (device === 'mobile') {
			return !isEmpty(obj.mobile) ? obj.mobile :
				!isEmpty(obj.tablet) ? obj.tablet :
				obj.desktop;
		}
		if (device === 'tablet') {
			return !isEmpty(obj.tablet) ? obj.tablet : obj.desktop;
		}
		return obj.desktop;
	};

    // Check if this row is nested inside another row
    const {
    isNested, hasChildBlocks } = useSelect(
        (select) => {
            const {
    getBlockParentsByBlockName, getBlockCount } = select('core/block-editor');
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
                animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);

    const getContentMaxValue = (unit) => {
		switch (unit) {
			case '%':
				return 100;
			case 'vw':
				return 100;
			case 'vh':
				return 100;
			case 'em':
			case 'rem':
				return 100;
			case 'px':
			default:
				return 3000;
		}
	};

	const getContentStepValue = (unit) => {
		switch (unit) {
			case 'em':
			case 'rem':
				return 0.1;
			case '%':
			case 'vw':
			case 'vh':
				return 1;
			case 'px':
			default:
				return 1;
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
        animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
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
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Helper function to get gap value with fallback
    const getGapValue = (gapObj, device) => {
        if (gapObj[device] && gapObj[device].value !== "") {
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
            if (gapObj.tablet && gapObj.tablet.value !== "") {
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

    const getMaxValue = (unit) => {
        switch (unit) {
            case '%':
                return 100;
            case 'em':
            case 'rem':
                return 50;
            case 'vw':
            case 'vh':
                return 100;
            default:
                return 2000;
        }
    };

    const getStepValue = (unit) => {
        switch (unit) {
            case '%':
            case 'vw':
            case 'vh':
                return 1;
            case 'em':
            case 'rem':
                return 0.1;
            default:
                return 1;
        }
    };

	const getTransformOrigin = (transform, device) => {
        const xMap = { left: '0%', center: '50%', right: '100%' };
        const yMap = { top: '0%', center: '50%', bottom: '100%' };
        
        const x = xMap[transform.xAnchor?.[device] || 'center'];
        const y = yMap[transform.yAnchor?.[device] || 'center'];
        
        return `${x} ${y}`;
    };

	const getTransformCSS = (transform, device) => {
		if (!transform) return '';
		
		const transforms = [];
		
		const getValue = (prop) => {
			if (!prop) return '';
			
			let val = prop[device];
			
			// Check if value is empty
			const isEmpty = (v) => {
				if (v === '' || v === undefined || v === null) return true;
				if (typeof v === 'object' && v !== null) {
					return v.value === '' || v.value === undefined || v.value === null;
				}
				return false;
			};
			
			// Tablet fallback to desktop
			if (device === 'tablet' && isEmpty(val)) {
				val = prop.desktop;
			}
			
			// Mobile fallback to tablet, then desktop
			if (device === 'mobile' && isEmpty(val)) {
				val = prop.tablet;
				if (isEmpty(val)) {
					val = prop.desktop;
				}
			}
			
			return typeof val === 'object' && val !== null ? (val.value !== undefined ? val.value : '') : val;
		};
		
		const rotateValue = getValue(transform.rotate);
		if (rotateValue !== '' && rotateValue !== undefined && rotateValue !== null) {
			if (transform.rotate3d) {
				const perspectiveValue = getValue(transform.perspective);
				if (perspectiveValue !== '' && perspectiveValue !== undefined && perspectiveValue !== null) {
					transforms.push(`perspective(${perspectiveValue}px)`);
				}
			}
			transforms.push(`rotate(${rotateValue}deg)`);
		}
		
		if (transform.rotate3d) {
			const rotateXValue = getValue(transform.rotateX);
			if (rotateXValue !== '' && rotateXValue !== undefined && rotateXValue !== null) {
				transforms.push(`rotateX(${rotateXValue}deg)`);
			}
			const rotateYValue = getValue(transform.rotateY);
			if (rotateYValue !== '' && rotateYValue !== undefined && rotateYValue !== null) {
				transforms.push(`rotateY(${rotateYValue}deg)`);
			}
		}
		
		const offsetXValue = transform.offsetX?.[device]?.value;
		const offsetYValue = transform.offsetY?.[device]?.value;
		const hasOffsetX = offsetXValue !== '' && offsetXValue !== undefined && offsetXValue !== null;
		const hasOffsetY = offsetYValue !== '' && offsetYValue !== undefined && offsetYValue !== null;
		
		if (hasOffsetX || hasOffsetY) {
			const x = hasOffsetX ? `${offsetXValue}${transform.offsetX[device].unit || 'px'}` : '0';
			const y = hasOffsetY ? `${offsetYValue}${transform.offsetY[device].unit || 'px'}` : '0';
			transforms.push(`translate(${x}, ${y})`);
		}
		
		if (transform.keepProportions) {
			const scaleValue = getValue(transform.scale);
			if (scaleValue !== '' && scaleValue !== undefined && scaleValue !== null && scaleValue != 1) {
				transforms.push(`scale(${scaleValue})`);
			}
		} else {
			const scaleXValue = getValue(transform.scaleX);
			const scaleYValue = getValue(transform.scaleY);
			const scaleX = (scaleXValue !== '' && scaleXValue !== undefined && scaleXValue !== null) ? scaleXValue : 1;
			const scaleY = (scaleYValue !== '' && scaleYValue !== undefined && scaleYValue !== null) ? scaleYValue : 1;
			if (scaleX != 1 || scaleY != 1) {
				transforms.push(`scale(${scaleX}, ${scaleY})`);
			}
		}
		
		const skewXValue = getValue(transform.skewX);
		if (skewXValue !== '' && skewXValue !== undefined && skewXValue !== null) {
			transforms.push(`skewX(${skewXValue}deg)`);
		}
		const skewYValue = getValue(transform.skewY);
		if (skewYValue !== '' && skewYValue !== undefined && skewYValue !== null) {
			transforms.push(`skewY(${skewYValue}deg)`);
		}
		
		if (transform.flipHorizontal) {
			transforms.push('scaleX(-1)');
		}
		if (transform.flipVertical) {
			transforms.push('scaleY(-1)');
		}
		
		return transforms.length > 0 ? transforms.join(' ') : '';
	};

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Background styles - priority: gradient > image > color
        let backgroundStyles = '';
        
        if (backgroundColor) {
            backgroundStyles += `background-color: ${backgroundColor};`;
        }
        
        // Background gradient
        if (backgroundGradient) {
			backgroundStyles += `background-image: ${backgroundGradient};`;
		}
        
		if (backgroundImage && backgroundImage.url) {
			const imageCSS = `url(${backgroundImage.url})`;
			if (backgroundGradient) {
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
		if (backgroundOverlay || backgroundOverlayGradient) {
			let overlayBackground = '';
			if (backgroundOverlayGradient) {
				overlayBackground = `background: ${backgroundOverlayGradient};`;
			} else if (backgroundOverlay) {
				overlayBackground = `background-color: ${backgroundOverlay};`;
			}
			
			overlayCSS = `
			.${id}:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				${overlayBackground}
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
		if (heightType['desktop'] === 'full') {
			heightCSS = 'height: 100vh;';
		} else if (heightType['desktop'] === 'custom' && minHeight.desktop?.value) {
			heightCSS = `min-height: ${minHeight.desktop.value}${minHeight.desktop.unit};`;
		}

        // Position styles
        let positionCSS = '';
        if (position && position !== 'default') {
            positionCSS += `position: ${position} !important;`;
            
            let horizontalValue = horizontalOffset?.[activeDevice]?.value;
            const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || 'px';
            if (horizontalValue === '' || horizontalValue === undefined) {
                if (activeDevice === 'tablet') {
                    horizontalValue = horizontalOffset?.desktop?.value;
                } else if (activeDevice === 'mobile') {
                    horizontalValue = horizontalOffset?.tablet?.value !== '' && horizontalOffset?.tablet?.value !== undefined
                        ? horizontalOffset?.tablet?.value
                        : horizontalOffset?.desktop?.value;
                }
            }
            if (horizontalValue !== '' && horizontalValue !== undefined) {
                if (horizontalOrientation === 'left') {
                    positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
                } else {
                    positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
                }
            }
            
            let verticalValue = verticalOffset?.[activeDevice]?.value;
            const verticalUnit = verticalOffset?.[activeDevice]?.unit || 'px';
            if (verticalValue === '' || verticalValue === undefined) {
                if (activeDevice === 'tablet') {
                    verticalValue = verticalOffset?.desktop?.value;
                } else if (activeDevice === 'mobile') {
                    verticalValue = verticalOffset?.tablet?.value !== '' && verticalOffset?.tablet?.value !== undefined
                        ? verticalOffset?.tablet?.value
                        : verticalOffset?.desktop?.value;
                }
            }
            if (verticalValue !== '' && verticalValue !== undefined) {
                if (verticalOrientation === 'top') {
                    positionCSS += `top: ${verticalValue}${verticalUnit};`;
                } else {
                    positionCSS += `bottom: ${verticalValue}${verticalUnit};`;
                }
            }
        }

        if (zIndex !== '' && zIndex !== undefined && zIndex !== null) {
            positionCSS += `z-index: ${zIndex};`;
        }

		// Transform
		let transformCSS = '';
		const transformValue = getTransformCSS(transform, activeDevice);
		if (transformValue) {
			transformCSS += `transform: ${transformValue};`;
			transformCSS += `transform-origin: ${getTransformOrigin(transform, activeDevice)};`;
		}

		const transformHoverValue = getTransformCSS(transformHover, activeDevice);
		if (transformHoverValue && transformHover && transformHover.transitionDuration !== '' && transformHover.transitionDuration !== undefined && transformHover.transitionDuration !== null) {
			const duration = transformHover.transitionDuration;
			transformCSS += `transition: transform ${duration}ms ease;`;
		}

		let transformHoverCSS = '';
		if (transformHoverValue) {
			transformHoverCSS += `transform: ${transformHoverValue};`;
			transformHoverCSS += `transform-origin: ${getTransformOrigin(transformHover, activeDevice)};`;
		}
        
        return `
            /* Row Block - ${id} */
            .${id} {
				display: flex;
                position: relative;
                ${getDimensionCSS(padding, 'padding', activeDevice)}
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
                transition: all 0.3s ease;
                ${positionCSS}
				${transformCSS}
            }
            
            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }

            .${id} > .digiblocks-row-inner {
                display: flex;
				${getVal(flexDirection, activeDevice) ? `flex-direction: ${getVal(flexDirection, activeDevice)};` : ''}
                align-items: ${getVal(verticalAlign, activeDevice)};
                justify-content: ${getVal(horizontalAlign, activeDevice)};
                gap: ${getGapValue(gap, activeDevice).value}${getGapValue(gap, activeDevice).unit};
                width: ${contentWidth.desktop.value}${contentWidth.desktop.unit};
    			max-width: ${contentMaxWidth.desktop.value}${contentMaxWidth.desktop.unit};
            }

            .${id}.is-nested > .block-editor-block-list__layout {
				display: flex;
				${getVal(flexDirection, activeDevice) ? `flex-direction: ${getVal(flexDirection, activeDevice)};` : ''}
				align-items: ${getVal(verticalAlign, activeDevice)};
				justify-content: ${getVal(horizontalAlign, activeDevice)};
				gap: ${getGapValue(gap, activeDevice).value}${getGapValue(gap, activeDevice).unit};
				width: ${getVal(nestedWidth, activeDevice) === 'full' ? '100%' : 'auto'};
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
                    ${getDimensionCSS(padding, 'padding', 'tablet')}
                    ${getDimensionCSS(margin, 'margin', 'tablet')}
                    ${heightType['tablet'] === 'custom' && minHeight.tablet?.value ? `min-height: ${minHeight.tablet.value}${minHeight.tablet.unit};` : ''}
                    ${getDimensionCSS(borderRadius, 'border-radius', 'tablet')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'tablet', true)}` : ''}
                }

                .${id} > .digiblocks-row-inner {
                    ${contentWidth.tablet.value !== ""
						? `width: ${contentWidth.tablet.value}${contentWidth.tablet.unit};`
						: ''}
					${contentMaxWidth.tablet.value !== ""
						? `max-width: ${contentMaxWidth.tablet.value}${contentMaxWidth.tablet.unit};`
						: ''}
					${getVal(flexDirection, 'tablet') ? `flex-direction: ${getVal(flexDirection, 'tablet')};` : ''}
                    align-items: ${getVal(verticalAlign, 'tablet')};
                    justify-content: ${getVal(horizontalAlign, 'tablet')};
                    gap: ${getGapValue(gap, 'tablet').value}${getGapValue(gap, 'tablet').unit};
                }

                .${id}.is-nested > .block-editor-block-list__layout {
					${getVal(flexDirection, 'tablet') ? `flex-direction: ${getVal(flexDirection, 'tablet')};` : ''}
					align-items: ${getVal(verticalAlign, 'tablet')};
					justify-content: ${getVal(horizontalAlign, 'tablet')};
					gap: ${getGapValue(gap, 'tablet').value}${getGapValue(gap, 'tablet').unit};
					width: ${getVal(nestedWidth, 'tablet') === 'full' ? '100%' : 'auto'};
				}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    ${getDimensionCSS(padding, 'padding', 'mobile')}
                    ${getDimensionCSS(margin, 'margin', 'mobile')}
                    ${heightType['mobile'] === 'custom' && minHeight.mobile?.value ? `min-height: ${minHeight.mobile.value}${minHeight.mobile.unit};` : ''}
                    ${getDimensionCSS(borderRadius, 'border-radius', 'mobile')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'mobile', true)}` : ''}
                }

                .${id} > .digiblocks-row-inner {
                    ${contentWidth.mobile.value !== ""
						? `width: ${contentWidth.mobile.value}${contentWidth.mobile.unit};`
						: (contentWidth.tablet.value !== ""
							? `width: ${contentWidth.tablet.value}${contentWidth.tablet.unit};`
							: `width: ${contentWidth.desktop.value}${contentWidth.desktop.unit};`)}
					${contentMaxWidth.mobile.value !== ""
						? `max-width: ${contentMaxWidth.mobile.value}${contentMaxWidth.mobile.unit};`
						: (contentMaxWidth.tablet.value !== ""
							? `max-width: ${contentMaxWidth.tablet.value}${contentMaxWidth.tablet.unit};`
							: `max-width: ${contentMaxWidth.desktop.value}${contentMaxWidth.desktop.unit};`)}
					${getVal(flexDirection, 'mobile') ? `flex-direction: ${getVal(flexDirection, 'mobile')};` : ''}
                    align-items: ${getVal(verticalAlign, 'mobile')};
                    justify-content: ${getVal(horizontalAlign, 'mobile')};
                    gap: ${getGapValue(gap, 'mobile').value}${getGapValue(gap, 'mobile').unit};
                }

                .${id}.is-nested > .block-editor-block-list__layout {
					${getVal(flexDirection, 'mobile') ? `flex-direction: ${getVal(flexDirection, 'mobile')};` : ''}
					align-items: ${getVal(verticalAlign, 'mobile')};
					justify-content: ${getVal(horizontalAlign, 'mobile')};
					gap: ${getGapValue(gap, 'mobile').value}${getGapValue(gap, 'mobile').unit};
					width: ${getVal(nestedWidth, 'mobile') === 'full' ? '100%' : 'auto'};
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

			/* Correct issue with appender */
			.digiblocks-row-inner > *:not(.block-list-appender) {
				z-index: 1000;
			}
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
									<ResponsiveRangeControl
										label={__('Content Width', 'digiblocks')}
										value={contentWidth}
										onChange={(value) => setAttributes({ contentWidth: value })}
										units={[
											{ label: 'px', value: 'px' },
											{ label: '%', value: '%' },
											{ label: 'em', value: 'em' },
											{ label: 'rem', value: 'rem' },
											{ label: 'vw', value: 'vw' }
										]}
										defaultValues={{ desktop: { value: 1200, unit: 'px' }, tablet: { value: '', unit: '' }, mobile: { value: '', unit: '' } }}
										min={0}
										max={getContentMaxValue(contentWidth[localActiveDevice]?.unit || 'px')}
										step={getContentStepValue(contentWidth[localActiveDevice]?.unit || 'px')}
									/>

									<ResponsiveRangeControl
										label={__('Content Max Width', 'digiblocks')}
										value={contentMaxWidth}
										onChange={(value) => setAttributes({ contentMaxWidth: value })}
										units={[
											{ label: '%', value: '%' },
											{ label: 'px', value: 'px' },
											{ label: 'vw', value: 'vw' }
										]}
										defaultValues={{ desktop: { value: 90, unit: '%' }, tablet: { value: '', unit: '' }, mobile: { value: '', unit: '' } }}
										min={0}
										max={100}
										step={1}
									/>
								</>
							)}
							
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
								defaultValues={{ desktop: { value: 20, unit: 'px' }, tablet: { value: '', unit: '' }, mobile: { value: '', unit: '' } }}
								min={0}
								max={100}
								step={1}
							/>

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
								<ResponsiveRangeControl
									label={__('Min Height', 'digiblocks')}
									value={minHeight}
									onChange={(value) => setAttributes({ minHeight: value })}
									units={[
										{ label: 'px', value: 'px' },
										{ label: 'em', value: 'em' },
										{ label: 'rem', value: 'rem' },
										{ label: 'vh', value: 'vh' }
									]}
									defaultUnit='px'
									min={0}
									max={getContentMaxValue(minHeight[localActiveDevice]?.unit || 'px')}
									step={getContentStepValue(minHeight[localActiveDevice]?.unit || 'px')}
								/>
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
								label={__("Justify Content", "digiblocks")}
								value={horizontalAlign}
								onChange={(value) => setAttributes({ horizontalAlign: value })}
								options={[
									{ label: __("Start", "digiblocks"), value: "flex-start" },
									{ label: __("Center", "digiblocks"), value: "center" },
									{ label: __("End", "digiblocks"), value: "flex-end" },
									{ label: __("Space", "digiblocks"), value: "space-between" }
								]}
							/>

                            <ResponsiveButtonGroup
                                label={__("Align Items", "digiblocks")}
                                value={verticalAlign}
                                onChange={(value) => setAttributes({ verticalAlign: value })}
                                options={[
                                    { label: __("Start", "digiblocks"), value: "flex-start" },
                                    { label: __("Center", "digiblocks"), value: "center" },
                                    { label: __("End", "digiblocks"), value: "flex-end" }
                                ]}
                            />

							<ResponsiveButtonGroup
								label={__('Flex Direction', 'digiblocks')}
								value={flexDirection}
								onChange={(value) => setAttributes({ flexDirection: value })}
								options={[
									{ label: __('Row', 'digiblocks'), value: 'row' },
									{ label: __('Column', 'digiblocks'), value: 'column' },
								]}
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
                        </TabPanelBody>
                    </>
                );
            case 'style':
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
							<ToggleControl
								label={__('Enable Gradient', 'digiblocks')}
								checked={!!backgroundGradient}
								onChange={(value) => {
									if (value) {
										setAttributes({ backgroundGradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)' });
									} else {
										setAttributes({ backgroundGradient: '' });
									}
								}}
								__nextHasNoMarginBottom={true}
							/>
							
							{backgroundGradient && (
								<div style={{ marginTop: '12px' }}>
									<label className="components-base-control__label" style={{ marginBottom: '8px', display: 'block' }}>
										{__('Background Gradient', 'digiblocks')}
									</label>
									<GradientPicker
										value={backgroundGradient || undefined}
										onChange={(value) => setAttributes({ 
											backgroundGradient: value || ''
										})}
										clearable={true}
										gradients={[
											{
												name: 'Vivid cyan blue to vivid purple',
												gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
												slug: 'vivid-cyan-blue-to-vivid-purple',
											},
											{
												name: 'Light green cyan to vivid green cyan',
												gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
												slug: 'light-green-cyan-to-vivid-green-cyan',
											},
											{
												name: 'Luminous vivid amber to luminous vivid orange',
												gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
												slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
											},
										]}
									/>
								</div>
							)}
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
								enableAlpha={true}
								colorSettings={[
									{
										value: backgroundOverlay,
										onChange: (value) => setAttributes({ 
											backgroundOverlay: value,
											backgroundOverlayGradient: ''
										}),
										label: __("Overlay Color", "digiblocks"),
									},
								]}
							/>

							<ToggleControl
								label={__('Enable Gradient', 'digiblocks')}
								checked={!!backgroundOverlayGradient}
								onChange={(value) => {
									if (value) {
										setAttributes({ 
											backgroundOverlayGradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
											backgroundOverlay: ''
										});
									} else {
										setAttributes({ backgroundOverlayGradient: '' });
									}
								}}
								__nextHasNoMarginBottom={true}
							/>

							{backgroundOverlayGradient && (
								<div style={{ marginTop: '12px' }}>
									<label className="components-base-control__label" style={{ marginBottom: '8px', display: 'block' }}>
										{__('Overlay Gradient', 'digiblocks')}
									</label>
									<GradientPicker
										value={backgroundOverlayGradient || undefined}
										onChange={(value) => setAttributes({ 
											backgroundOverlayGradient: value || '',
											backgroundOverlay: ''
										})}
										clearable={true}
										gradients={[
											{
												name: 'Vivid cyan blue to vivid purple',
												gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
												slug: 'vivid-cyan-blue-to-vivid-purple',
											},
											{
												name: 'Light green cyan to vivid green cyan',
												gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
												slug: 'light-green-cyan-to-vivid-green-cyan',
											},
											{
												name: 'Luminous vivid amber to luminous vivid orange',
												gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
												slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
											},
										]}
									/>
								</div>
							)}

							{(backgroundOverlay || backgroundOverlayGradient) && (
								<>
									<RangeControl
										label={__('Overlay Opacity', 'digiblocks')}
										value={backgroundOverlayOpacity}
										onChange={(value) => setAttributes({ backgroundOverlayOpacity: value })}
										min={0}
										max={1}
										step={0.01}
										__nextHasNoMarginBottom={true}
									/>

									<SelectControl
										label={__('Blend Mode', 'digiblocks')}
										value={backgroundOverlayBlendMode}
										options={[
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
										]}
										onChange={(value) => setAttributes({ backgroundOverlayBlendMode: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</>
							)}
                        </TabPanelBody>

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
                                    <DimensionControl
										label={__("Border Width", "digiblocks")}
										value={borderWidth}
										onChange={(value) => setAttributes({ borderWidth: value })}
									/>
                                    
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
                            
                            <DimensionControl
								label={__("Border Radius", "digiblocks")}
								value={borderRadius}
								onChange={(value) => setAttributes({ borderRadius: value })}
								units={[ { label: 'px', value: 'px' }, { label: '%', value: '%' }, { label: 'em', value: 'em' }, ]}
							/>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="shadow"
                            title={__('Box Shadow', 'digiblocks')}
                            initialOpen={false}
                        >
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
                            />
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={true}
                        >
                            <DimensionControl
								label={__("Padding", "digiblocks")}
								value={padding}
								onChange={(value) => setAttributes({ padding: value })}
							/>
                            
                            <DimensionControl
								label={__("Margin", "digiblocks")}
								value={margin}
								onChange={(value) => setAttributes({ margin: value })}
							/>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="advanced"
                            name="position"
                            title={__("Position", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Position", "digiblocks")}
                                value={position}
                                options={[
                                    { label: __("Default", "digiblocks"), value: "default" },
                                    { label: __("Relative", "digiblocks"), value: "relative" },
                                    { label: __("Absolute", "digiblocks"), value: "absolute" },
                                    { label: __("Fixed", "digiblocks"), value: "fixed" },
                                ]}
                                onChange={(value) => setAttributes({ position: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {position !== 'default' && (
                                <>
                                    <ToggleGroupControl
                                        label={__("Horizontal Orientation", "digiblocks")}
                                        value={horizontalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ horizontalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="left"
                                            label={__("Left", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="right"
                                            label={__("Right", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={horizontalOffset}
                                        onChange={(value) => setAttributes({ horizontalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(horizontalOffset?.[localActiveDevice]?.unit || 'px')}
                                        step={getStepValue(horizontalOffset?.[localActiveDevice]?.unit || 'px')}
                                    />

                                    <ToggleGroupControl
                                        label={__("Vertical Orientation", "digiblocks")}
                                        value={verticalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ verticalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="top"
                                            label={__("Top", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="bottom"
                                            label={__("Bottom", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={verticalOffset}
                                        onChange={(value) => setAttributes({ verticalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(verticalOffset?.[localActiveDevice]?.unit || 'px')}
                                        step={getStepValue(verticalOffset?.[localActiveDevice]?.unit || 'px')}
                                    />
                                </>
                            )}

                            <RangeControl
                                label={__("Z-Index", "digiblocks")}
                                value={zIndex}
                                onChange={(value) => setAttributes({ zIndex: value })}
                                min={-999}
                                max={9999}
                                allowReset={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="transform"
                            title={__('Transform', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TransformControl
                                normalValue={transform}
                                hoverValue={transformHover}
                                onNormalChange={(value) => setAttributes({ transform: value })}
                                onHoverChange={(value) => setAttributes({ transformHover: value })}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__('Animation', 'digiblocks')}
                            initialOpen={false}
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
								<>
									<SelectControl
										label={__("Animation Duration", "digiblocks")}
										value={animationDuration}
										options={[
											{ label: __("Slow", "digiblocks"), value: "slow" },
											{ label: __("Normal", "digiblocks"), value: "normal" },
											{ label: __("Fast", "digiblocks"), value: "fast" }
										]}
										onChange={(value) => setAttributes({ animationDuration: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
									
									<TextControl
										label={__("Animation Delay (ms)", "digiblocks")}
										value={animationDelay || 0}
										onChange={(value) => setAttributes({ animationDelay: parseInt(value) || 0 })}
										type="number"
										min={0}
										step={100}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</>
							)}
                            
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