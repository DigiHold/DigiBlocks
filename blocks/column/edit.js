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
    ButtonBlockAppender
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
const { ResponsiveControl, ResponsiveRangeControl, ResponsiveButtonGroup, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Column Block Edit Component
 */
const ColumnEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
		visibility,
        animation,
		animationDuration,
		animationDelay,
        width,
        minHeight,
        order,
		alignSelf,
		justifyContent,
        columnGap,
        rowGap,
        overflowHidden,
		hoverEffect,
        backgroundColor,
        backgroundGradient,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
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
        position,
        horizontalOrientation,
        horizontalOffset,
        verticalOrientation,
        verticalOffset,
        zIndex,
		transform,
        transformHover,
    } = attributes;

	// Migrate old width format "50" to new format "50%"
    useEffect(() => {
        if (width && typeof width.desktop === 'number') {
            setAttributes({
                width: {
                    desktop: { value: width.desktop, unit: '%' },
                    tablet: { value: typeof width.tablet === 'number' ? width.tablet : '', unit: typeof width.tablet === 'number' ? '%' : '' },
                    mobile: { value: typeof width.mobile === 'number' ? width.mobile : '', unit: typeof width.mobile === 'number' ? '%' : '' }
                }
            });
        }
    }, []);

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

    // Ref for animation preview
    const previewTimeoutRef = useRef(null);

    // Effect to trigger animation preview when animation attribute changes
    useEffect(() => {
        if (animation && animation !== 'none') {
            const timeoutId = setTimeout(() => {
                animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);

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

	// Get responsive value with fallback
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
    
    // Get parent block info only
	const {
    parentClientId, hasChildBlocks } = useSelect(
		(select) => {
			const {
    getBlockParents, getBlockCount } = select('core/block-editor');
			
			// Get the parent container block
			const parents = getBlockParents(clientId);
			const parentId = parents.length > 0 ? parents[0] : null;
			
			return {
				parentClientId: parentId,
				hasChildBlocks: getBlockCount(clientId) > 0
			};
		},
		[clientId]
	);

	const getContentMaxValue = (unit) => {
		switch(unit) {
			case '%': return 100;
			case 'em':
			case 'rem': return 10;
			case 'vw':
			case 'vh': return 100;
			default: return 2000;
		}
	};

	const getContentStepValue = (unit) => {
		switch(unit) {
			case 'em':
			case 'rem': return 0.1;
			default: return 1;
		}
	};
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

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

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Lift", "digiblocks"), value: "lift" },
        { label: __("Scale", "digiblocks"), value: "scale" },
        { label: __("Glow", "digiblocks"), value: "glow" },
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
	const isValueSet = (val) => {
		return val !== undefined && val !== null && val !== '';
	};

	const getGapValue = (gapObj, device) => {
		if (!gapObj || typeof gapObj !== 'object') {
			return {
				value: 0,
				unit: 'px'
			};
		}

		if (gapObj[device] && isValueSet(gapObj[device].value)) {
			return {
				value: gapObj[device].value,
				unit: gapObj[device].unit || 'px'
			};
		}

		if (device === 'tablet') {
			if (gapObj.desktop && isValueSet(gapObj.desktop.value)) {
				return {
					value: gapObj.desktop.value,
					unit: gapObj.desktop.unit || 'px'
				};
			}
		}

		if (device === 'mobile') {
			if (gapObj.tablet && isValueSet(gapObj.tablet.value)) {
				return {
					value: gapObj.tablet.value,
					unit: gapObj.tablet.unit || 'px'
				};
			}
			if (gapObj.desktop && isValueSet(gapObj.desktop.value)) {
				return {
					value: gapObj.desktop.value,
					unit: gapObj.desktop.unit || 'px'
				};
			}
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

    // Generate CSS for column styling
    const generateColumnCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Height CSS
		let heightCSS = '';
		if (minHeight?.[activeDevice]?.value !== "" && minHeight?.[activeDevice]?.value !== undefined) {
			const minHeightValue = minHeight?.[activeDevice]?.value || minHeight?.desktop?.value || 0;
			const minHeightUnit = minHeight?.[activeDevice]?.unit || minHeight?.desktop?.unit || 'px';
			heightCSS = minHeightValue ? `min-height: ${minHeightValue}${minHeightUnit} !important;` : '';
		}
        
        // Background styles - priority: gradient > image > color
        let backgroundStyles = '';
        
        // Background color (lowest priority)
        if (backgroundColor) {
            backgroundStyles += `background-color: ${backgroundColor};`;
        }
        
        // Background gradient
		if (backgroundGradient) {
			backgroundStyles += `background-image: ${backgroundGradient};`;
		}
        
        // Background image (highest priority)
        if (backgroundImage && backgroundImage.url) {
            // If gradient is enabled, use comma to layer them
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
			.${id} {
				position: relative !important;
			}
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

		// Hover effects
        let hoverCSS = '';
        
        // Box shadow hover
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }

        // Additional hover effects
        if (hoverEffect === 'lift') {
            hoverCSS += 'transform: translateY(-10px);';
        } else if (hoverEffect === 'scale') {
            hoverCSS += 'transform: scale(1.05);';
        } else if (hoverEffect === 'glow') {
            hoverCSS += 'filter: brightness(1.1);';
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
            /* Column Block - ${id} */
            .${id} {
                width: ${width[activeDevice]?.value !== "" && width[activeDevice]?.value !== undefined
					? width[activeDevice].value + width[activeDevice].unit
					: width.desktop.value + (width.desktop.unit !== null ? width.desktop.unit : '')};
                ${heightCSS}
				${getDimensionCSS(padding, 'padding', activeDevice)}
				${getDimensionCSS(margin, 'margin', activeDevice)}
                display: flex;
                flex-direction: column;
                ${getVal(alignSelf, activeDevice) ? `align-self: ${getVal(alignSelf, activeDevice)};` : ''}
                ${getVal(justifyContent, activeDevice) ? `justify-content: ${getVal(justifyContent, activeDevice)};` : ''}
                ${order[activeDevice] !== 0 ? `order: ${order[activeDevice]};` : ''}
                ${backgroundStyles}
                ${borderStyle !== 'none' ? `
					border-style: ${borderStyle}!important;
					${getDimensionCSS(borderWidth, 'border-width', activeDevice, true)}
					border-color: ${borderColor}!important;` : ''}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
				${boxShadowCSS}
                transition: all 0.3s ease;
                ${positionCSS}
				${transformCSS}
				gap: ${getGapValue(rowGap, 'desktop').value}${getGapValue(rowGap, 'desktop').unit} ${getGapValue(columnGap, 'desktop').value}${getGapValue(columnGap, 'desktop').unit};
                ${overflowHidden ? 'overflow: hidden;' : ''}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            ${overlayCSS}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${id} {
                    width: ${width.tablet?.value !== "" 
						? width.tablet.value + (width.tablet.unit !== null ? width.tablet.unit : '')
						: width.desktop.value + (width.desktop.unit !== null ? width.desktop.unit : '')};
					${getDimensionCSS(padding, 'padding', 'tablet')}
					${getDimensionCSS(margin, 'margin', 'tablet')}
                    ${order['tablet'] !== 0 ? `order: ${order['tablet']};` : ''}
					${getVal(alignSelf, 'tablet') ? `align-self: ${getVal(alignSelf, 'tablet')};` : ''}
					${getVal(justifyContent, 'tablet') ? `justify-content: ${getVal(justifyContent, 'tablet')};` : ''}
					${getDimensionCSS(borderRadius, 'border-radius', 'tablet')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'tablet', true)}` : ''}
					gap: ${getGapValue(rowGap, 'tablet').value}${getGapValue(rowGap, 'tablet').unit} ${getGapValue(columnGap, 'tablet').value}${getGapValue(columnGap, 'tablet').unit};
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    width: ${width.mobile?.value !== "" 
						? width.mobile.value + (width.mobile.unit !== null ? width.mobile.unit : '')
						: (width.tablet?.value !== "" 
							? width.tablet.value + (width.tablet.unit !== null ? width.tablet.unit : '')
							: width.desktop.value + (width.desktop.unit !== null ? width.desktop.unit : ''))};
					${getDimensionCSS(padding, 'padding', 'mobile')}
					${getDimensionCSS(margin, 'margin', 'mobile')}
                    ${order['mobile'] !== 0 ? `order: ${order['mobile']};` : ''}
					${getVal(alignSelf, 'mobile') ? `align-self: ${getVal(alignSelf, 'mobile')};` : ''}
					${getVal(justifyContent, 'mobile') ? `justify-content: ${getVal(justifyContent, 'mobile')};` : ''}
					${getDimensionCSS(borderRadius, 'border-radius', 'mobile')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'mobile', true)}` : ''}
					gap: ${getGapValue(rowGap, 'mobile').value}${getGapValue(rowGap, 'mobile').unit} ${getGapValue(columnGap, 'mobile').value}${getGapValue(columnGap, 'mobile').unit};
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

    // Generate block props
    const blockProps = useBlockProps({
        className: `digiblocks-column ${id} ${customClasses || ''}`,
		id: anchor || null,
    });

    // Generate inner blocks props
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        templateLock: false,
        renderAppender: hasChildBlocks 
            ? undefined
            : () => <ButtonBlockAppender rootClientId={clientId} />
    });

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="column"
                            title={__('Column', 'digiblocks')}
                            initialOpen={true}
                        >
                            <ResponsiveRangeControl
								label={__('Width', 'digiblocks')}
								value={width}
								onChange={(value) => setAttributes({ width: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
									{ label: 'vw', value: 'vw' }
								]}
								defaultValues={{ desktop: { value: 100, unit: '%' }, tablet: { value: '', unit: '' }, mobile: { value: '', unit: '' } }}
								min={0}
								max={getContentMaxValue(width[localActiveDevice]?.unit)}
								step={getContentStepValue(width[localActiveDevice]?.unit)}
							/>

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
								max={getContentMaxValue(minHeight[localActiveDevice]?.unit)}
								step={getContentStepValue(minHeight[localActiveDevice]?.unit)}
							/>
                            
                            <ResponsiveControl
                                label={__('Order', 'digiblocks')}
                            >
                                <RangeControl
                                    value={order[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            order: {
                                                ...order,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={-10}
                                    max={10}
                                    step={1}
                                    allowReset={true}
                                    resetFallbackValue={0}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

							<ResponsiveButtonGroup
								label={__("Align Self", "digiblocks")}
								value={alignSelf}
								onChange={(value) => setAttributes({ alignSelf: value })}
								options={[
									{ label: __("Start", "digiblocks"), value: "flex-start" },
									{ label: __("Center", "digiblocks"), value: "center" },
									{ label: __("End", "digiblocks"), value: "flex-end" },
									{ label: __("Stretch", "digiblocks"), value: "stretch" },
								]}
							/>

							<ResponsiveButtonGroup
								label={__("Justify Content", "digiblocks")}
								value={justifyContent}
								onChange={(value) => setAttributes({ justifyContent: value })}
								options={[
									{ label: __("Start", "digiblocks"), value: "flex-start" },
									{ label: __("Center", "digiblocks"), value: "center" },
									{ label: __("End", "digiblocks"), value: "flex-end" },
									{ label: __("Space", "digiblocks"), value: "space-between" }
								]}
							/>

							<ResponsiveRangeControl
								label={__("Column Gap", "digiblocks")}
								value={columnGap}
								onChange={(value) => setAttributes({ columnGap: value })}
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

							<ResponsiveRangeControl
								label={__("Row Gap", "digiblocks")}
								value={rowGap}
								onChange={(value) => setAttributes({ rowGap: value })}
								units={[ // no % unit as it doesn't work on Row Gap
									{ label: 'px', value: 'px' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								defaultUnit="px"
								min={0}
								max={100}
								step={1}
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
                                help={__('Hide content that overflows the container boundaries.', 'digiblocks')}
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
                                                                <span className="dashicon dashicons dashicons-edit"></span>
                                                            </Button>
                                                            <Button 
                                                                isDestructive
                                                                onClick={() => setAttributes({ backgroundImage: { url: '', id: 0, alt: '', size: '' } })}
                                                            >
                                                                <span className="dashicon dashicons dashicons-trash"></span>
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
										__next40pxDefaultSize={true}
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
                                        label={__('Border Width', 'digiblocks')}
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
                                label={__('Border Radius', 'digiblocks')}
                                value={borderRadius}
                                onChange={(value) => setAttributes({ borderRadius: value })}
                                units={[
                                    { label: 'px', value: 'px' },
                                    { label: '%', value: '%' },
                                    { label: 'em', value: 'em' },
                                ]}
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
                                label={__('Padding', 'digiblocks')}
                                value={padding}
                                onChange={(value) => setAttributes({ padding: value })}
                            />
                            
                            <DimensionControl
                                label={__('Margin', 'digiblocks')}
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
                            tab="layout"
                            name="effect"
                            title={__('Hover Effect', 'digiblocks')}
                            initialOpen={false}
                        >
							<SelectControl
                                label={__("Hover Effect", "digiblocks")}
                                value={hoverEffect || 'none'}
                                options={hoverEffectOptions}
                                onChange={(value) => setAttributes({ hoverEffect: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
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
            <style dangerouslySetInnerHTML={{ __html: generateColumnCSS() }} />

            {/* Column content */}
            <div {...innerBlocksProps} />
        </>
    );
};

export default ColumnEdit;