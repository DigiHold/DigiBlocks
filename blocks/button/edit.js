/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    LinkControl,
} = wp.blockEditor;
const {
    TextControl,
    SelectControl,
    TabPanel,
    ToggleControl,
	RangeControl,
	Button,
	Spinner,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveRangeControl, DimensionControl, BoxShadowControl, TypographyControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Edit function for the Button block
 */
const ButtonEdit = ({ attributes, setAttributes, clientId, isSelected }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        text,
        url,
        opensInNewTab,
        rel,
		iconSource,
        customSvg,
        iconValue,
        iconPosition,
        iconWidth,
        iconHeight,
        iconGap,
        iconColor,
        iconHoverColor,
        size,
        fill,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        boxShadow,
        boxShadowHover,
        padding,
        margin,
        onlyIcon,
        buttonTypography,
		animation,
		animationDuration,
		animationDelay,
        position,
        horizontalOrientation,
        horizontalOffset,
        verticalOrientation,
        verticalOffset,
        zIndex,
		hoverEffect,
		transform,
        transformHover,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // States
    const [isEditingURL, setIsEditingURL] = useState(false);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});
	
	// State to track if global components are loaded
    const [componentsLoaded, setComponentsLoaded] = useState(false);

	// Set the icon value
    const setIconValue = (newIcon) => {
        setAttributes({ iconValue: newIcon });
    };

    // Check if the global components are loaded
    useEffect(() => {
        // Function to check if digi components are available
        const checkComponents = () => {
            if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
                setComponentsLoaded(true);
                return true;
            }
            return false;
        };
        
        // If components aren't immediately available, set up a small delay to check again
        if (!checkComponents()) {
            const timeout = setTimeout(() => {
                if (checkComponents()) {
                    clearTimeout(timeout);
                }
            }, 500);
            
            return () => clearTimeout(timeout);
        }
    }, []);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });

        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

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

    // Border style options
    const borderStyleOptions = [
        { label: __("Default", "digiblocks"), value: "default" },
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
        { label: __("Groove", "digiblocks"), value: "groove" },
        { label: __("Inset", "digiblocks"), value: "inset" },
        { label: __("Outset", "digiblocks"), value: "outset" },
        { label: __("Ridge", "digiblocks"), value: "ridge" },
    ];

    // Size options
    const sizeOptions = [
        { label: __("Small", "digiblocks"), value: "small" },
        { label: __("Medium", "digiblocks"), value: "medium" },
        { label: __("Large", "digiblocks"), value: "large" },
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

	// Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

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

    // Generate CSS for button styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Always use custom padding
        const paddingCSS = getDimensionCSS(padding, 'padding', activeDevice);
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
			const borderWidthCSS = getDimensionCSS(borderWidth, 'border-width', activeDevice);
			
			// If border width CSS was generated, use it, otherwise use default 1px all around
			const borderWidthStyle = borderWidthCSS || 'border-width: 1px 1px 1px 1px;';
            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor};
                ${borderWidthStyle}
            `;
        } else {
            borderCSS = 'border: none;';
        }

		// Border radius
        let borderRadiusCSS = '';
		borderRadiusCSS = getDimensionCSS(borderRadius, 'border-radius', activeDevice);
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Margin
        const marginCSS = getDimensionCSS(margin, 'margin', activeDevice);
        
        // Hover effects
        let hoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Typography CSS
        let buttonTypographyCSS = '';
        if (buttonTypography) {
            if (buttonTypography.fontFamily) {
                buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
            }

            const fontSizeValue = getVal(buttonTypography.fontSize, activeDevice);
            if (fontSizeValue && fontSizeValue.value !== "" && fontSizeValue.value !== null && fontSizeValue.value !== undefined) {
                buttonTypographyCSS += `font-size: ${fontSizeValue.value}${fontSizeValue.unit !== null ? fontSizeValue.unit : ''};`;
            }

            if (buttonTypography.fontWeight) {
                buttonTypographyCSS += `font-weight: ${buttonTypography.fontWeight};`;
            }

            if (buttonTypography.fontStyle) {
                buttonTypographyCSS += `font-style: ${buttonTypography.fontStyle};`;
            }

            if (buttonTypography.textTransform) {
                buttonTypographyCSS += `text-transform: ${buttonTypography.textTransform};`;
            }

            if (buttonTypography.textDecoration) {
                buttonTypographyCSS += `text-decoration: ${buttonTypography.textDecoration};`;
            }

            const lineHeightValue = getVal(buttonTypography.lineHeight, activeDevice);
            if (lineHeightValue && lineHeightValue.value !== "" && lineHeightValue.value !== null && lineHeightValue.value !== undefined) {
                buttonTypographyCSS += `line-height: ${lineHeightValue.value}${lineHeightValue.unit !== null ? lineHeightValue.unit : ''};`;
            }

            const letterSpacingValue = getVal(buttonTypography.letterSpacing, activeDevice);
            if (letterSpacingValue && letterSpacingValue.value !== "" && letterSpacingValue.value !== null && letterSpacingValue.value !== undefined) {
                buttonTypographyCSS += `letter-spacing: ${letterSpacingValue.value}${letterSpacingValue.unit !== null ? letterSpacingValue.unit : ''};`;
            }
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

		let hoverEffectCSS = '';
		const effectColor = backgroundHoverColor || backgroundColor;

		if (hoverEffect && hoverEffect !== 'none') {
			switch (hoverEffect) {
				case 'sweep-corners':
					hoverEffectCSS = `
						.${id} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${id}::before, .${id}::after, .${id} .digiblocks-button-content-wrapper::before, .${id} .digiblocks-button-content-wrapper::after {
							content: "";
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							left: 0;
							background-color: ${effectColor};
							transition: all 0.5s ease;
							z-index: -1;
						}
						.${id}::before {
							transform: translate(-100%, -100%);
						}
						.${id}::after {
							transform: translate(-100%, 100%);
						}
						.${id} .digiblocks-button-content-wrapper::before {
							transform: translate(100%, -100%);
						}
						.${id} .digiblocks-button-content-wrapper::after {
							transform: translate(100%, 100%);
						}
						.${id}:hover::before {
							transform: translate(-49%, -49%);
						}
						.${id}:hover::after {
							transform: translate(-49%, 49%);
						}
						.${id}:hover .digiblocks-button-content-wrapper::before {
							transform: translate(50%, -50%);
						}
						.${id}:hover .digiblocks-button-content-wrapper::after {
							transform: translate(50%, 50%);
						}
						.${id} .digiblocks-button-text {
							position: relative;
							z-index: 1;
						}
					`;
					break;
				case 'sweep-to-right':
					hoverEffectCSS = `
						.${id} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${id}::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 0;
							height: 100%;
							background-color: ${effectColor};
							transition: width 0.4s ease;
							z-index: -1;
						}
						.${id}:hover::before {
							width: 100%;
						}
					`;
					break;
				case 'sweep-to-left':
					hoverEffectCSS = `
						.${id} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${id}::before {
							content: "";
							position: absolute;
							top: 0;
							right: 0;
							width: 0;
							height: 100%;
							background-color: ${effectColor};
							transition: width 0.4s ease;
							z-index: -1;
						}
						.${id}:hover::before {
							width: 100%;
						}
					`;
					break;
				case 'sweep-to-top':
					hoverEffectCSS = `
						.${id} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${id}::before {
							content: "";
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							height: 0;
							background-color: ${effectColor};
							transition: height 0.4s ease;
							z-index: -1;
						}
						.${id}:hover::before {
							height: 100%;
						}
					`;
					break;
				case 'sweep-to-bottom':
					hoverEffectCSS = `
						.${id} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${id}::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 0;
							background-color: ${effectColor};
							transition: height 0.4s ease;
							z-index: -1;
						}
						.${id}:hover::before {
							height: 100%;
						}
					`;
					break;
				case 'grow-shadow':
					hoverEffectCSS = `
						.${id} {
							transition: all 0.3s ease, box-shadow 0.3s ease;
						}
						.${id}:hover {
							transform: translateY(-3px);
							box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
						}
					`;
					break;
				case 'pulse':
					hoverEffectCSS = `
						.${id} {
							transition: all 0.3s ease;
						}
						.${id}:hover {
							animation: button-pulse 0.6s ease-in-out;
						}
						@keyframes button-pulse {
							0%, 100% { transform: scale(1); }
							50% { transform: scale(1.05); }
						}
					`;
					break;
				case 'bounce':
					hoverEffectCSS = `
						.${id} {
							transition: all 0.3s ease;
						}
						.${id}:hover {
							animation: button-bounce 0.6s ease;
						}
						@keyframes button-bounce {
							0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
							40% { transform: translateY(-10px); }
							60% { transform: translateY(-5px); }
						}
					`;
					break;
				case 'border-expand':
					hoverEffectCSS = `
						.${id} {
							position: relative;
							overflow: hidden;
						}
						.${id}::before {
							content: "";
							position: absolute;
							top: 50%;
							left: 50%;
							width: 0;
							height: 0;
							border: 2px solid ${effectColor};
							border-radius: inherit;
							transform: translate(-50%, -50%);
							transition: all 0.4s ease;
							opacity: 0;
						}
						.${id}:hover::before {
							width: calc(100% - 8px);
							height: calc(100% - 8px);
							opacity: 1;
						}
					`;
					break;
				case 'shine':
					hoverEffectCSS = `
						.${id} {
							position: relative;
							overflow: hidden;
						}
						.${id}::after {
							content: "";
							position: absolute;
							top: 0;
							left: -100%;
							width: 50%;
							height: 100%;
							background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
							transition: left 0.6s ease;
						}
						.${id}:hover::after {
							left: 100%;
						}
					`;
					break;
				default:
					break;
			}
		}

        return `
            /* Button Block - ${id} */
            .${id} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease;
                ${paddingCSS}
                ${borderCSS}
                ${borderRadiusCSS}
                ${boxShadowCSS}
                ${marginCSS}
                ${fill ? 'width: 100%;' : ''}
                ${(() => {
                    const gapValue = getVal(iconGap, activeDevice);
                    if (gapValue && gapValue.value !== '' && gapValue.value !== null && gapValue.value !== undefined) {
                        return `gap: ${gapValue.value}${gapValue.unit || 'px'};`;
                    }
                    return 'gap: 8px;';
                })()}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${textColor ? `color: ${textColor};` : ''}
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
                ${(!hoverEffect || ['none', 'grow-shadow', 'pulse', 'bounce', 'shine'].includes(hoverEffect)) ? (backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : '') : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
                ${hoverCSS}
				${transformHoverCSS}
            }

			${hoverEffectCSS}

            /* Icon styles */
            .${id} .digiblocks-button-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                ${iconColor ? `color: ${iconColor};` : ''}
            }

            .${id} .digiblocks-button-icon svg {
                ${(() => {
                    const widthValue = getVal(iconWidth, activeDevice);
                    const heightValue = getVal(iconHeight, activeDevice);
                    let iconStyles = '';

                    if (widthValue && widthValue.value !== '' && widthValue.value !== null && widthValue.value !== undefined) {
                        iconStyles += `width: ${widthValue.value}${widthValue.unit || 'px'};`;
                    } else {
                        iconStyles += 'width: 1em;';
                    }

                    if (heightValue && heightValue.value !== '' && heightValue.value !== null && heightValue.value !== undefined) {
                        iconStyles += `height: ${heightValue.value}${heightValue.unit || 'px'};`;
                    } else {
                        iconStyles += 'height: 1em;';
                    }

                    iconStyles += 'fill: currentColor;';
                    return iconStyles;
                })()}
            }

            .${id}:hover .digiblocks-button-icon {
                ${iconHoverColor ? `color: ${iconHoverColor};` : ''}
            }
            
            /* Button typography */
            .${id} {
                ${buttonTypographyCSS}
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

    // Render icon
    const renderIcon = () => {
		// For library icons, use the existing approach
		if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
			return (
				<span
					key="icon"
					className="digiblocks-button-icon"
					dangerouslySetInnerHTML={{
						__html: iconValue.svg,
					}}
				/>
			);
		}
		
		// For custom SVG
		if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
			return (
				<span
					key="icon"
					className="digiblocks-button-icon"
					dangerouslySetInnerHTML={{
						__html: customSvg,
					}}
				/>
			);
		}
		
		return null;
	};

    // Render button content
    const renderButtonContent = () => {
		const iconElement = renderIcon();

		const textElement = !onlyIcon ? (
			<RichText
				key="text"
				value={text}
				onChange={(value) => setAttributes({ text: value })}
				placeholder={__('Add text…', 'digiblocks')}
				allowedFormats={[]}
				withoutInteractiveFormatting
				identifier="text"
			/>
		) : null;

		const contentArray = iconPosition === 'left'
			? [iconElement, textElement].filter(Boolean)
			: [textElement, iconElement].filter(Boolean);

		const needsWrappers = hoverEffect && hoverEffect !== 'none' && ['sweep-corners', 'sweep-to-right', 'sweep-to-left', 'sweep-to-top', 'sweep-to-bottom'].includes(hoverEffect);

		if (needsWrappers) {
			return (
				<>
					<span className="digiblocks-button-content-wrapper">
						<span className="digiblocks-button-text">{contentArray}</span>
					</span>
				</>
			);
		}

		return contentArray;
	};

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="icon"
                            title={__("Icon", "digiblocks")}
                            initialOpen={true}
                        >
                           	{/* Icon select box display */}
							<div style={{ marginBottom: '2rem' }}>
								<ToggleGroupControl
									label={__("Icon Source", "digiblocks")}
									value={iconSource || 'library'}
									onChange={(value) => setAttributes({ iconSource: value })}
									isBlock
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								>
									<ToggleGroupControlOption 
										value="library" 
										label={__("Library", "digiblocks")} 
									/>
									<ToggleGroupControlOption 
										value="custom" 
										label={__("Custom", "digiblocks")} 
									/>
								</ToggleGroupControl>

								{/* Show library picker if 'library' is selected */}
								{iconSource === 'library' && (
									<>
										{!componentsLoaded ? (
											<div style={{ textAlign: 'center', padding: '20px 0' }}>
												<Spinner />
												<p>{__('Loading icon selector...', 'digiblocks')}</p>
											</div>
										) : (
											<FontAwesomeControl
												label={__('Select Icon', 'digiblocks')}
												value={iconValue}
												onChange={setIconValue}
											/>
										)}
										
										{iconValue && componentsLoaded && (
											<>
												{/* Show info about selected icon */}
												<div style={{ marginTop: '15px', marginBottom: '15px', padding: '10px', background: '#f0f0f1', borderRadius: '3px' }}>
													<p style={{ margin: '0 0 5px 0' }}>
														<strong>{__('Selected Icon:', 'digiblocks')}</strong> {iconValue.name}
													</p>
													<p style={{ margin: '0 0 5px 0' }}>
														<strong>{__('Style:', 'digiblocks')}</strong> {iconValue.style}
													</p>
													{iconValue.categories && iconValue.categories.length > 0 && (
														<p style={{ margin: '0' }}>
															<strong>{__('Categories:', 'digiblocks')}</strong> {iconValue.categories.join(', ')}
														</p>
													)}
												</div>
											</>
										)}
									</>
								)}

								{/* Show custom SVG textarea if 'custom' is selected */}
								{iconSource === 'custom' && (
									<div style={{ marginTop: '15px' }}>
										<div className="components-base-control">
											<label className="components-base-control__label" htmlFor="custom-svg-input">
												{__('Custom SVG Code', 'digiblocks')}
											</label>
											<textarea
												id="custom-svg-input"
												className="components-textarea-control__input"
												value={customSvg || ''}
												onChange={(e) => {
													const newSvg = e.target.value;
													
													// Create an iconValue object with the custom SVG
													const newIconValue = {
														id: 'custom-svg',
														name: 'Custom SVG',
														svg: newSvg,
														style: 'custom',
														categories: ['custom']
													};
													
													// Update both the customSvg attribute and the iconValue
													setAttributes({ 
														customSvg: newSvg,
														iconValue: newIconValue
													});
												}}
												placeholder={__('Paste your SVG code here...', 'digiblocks')}
												rows={10}
												style={{ width: '100%', marginTop: '8px' }}
											/>
											<p className="components-base-control__help">
												{__('Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.', 'digiblocks')}
											</p>
										</div>
										
										{/* Preview of custom SVG */}
										{customSvg && (
											<div style={{ marginTop: '15px', marginBottom: '15px' }}>
												<p><strong>{__('Preview:', 'digiblocks')}</strong></p>
												<div style={{ padding: '20px', background: '#f0f0f1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
													<div className="digiblocks-custom-svg-preview" style={{ width: '50px', height: '50px' }} dangerouslySetInnerHTML={{ __html: customSvg }}></div>
												</div>
											</div>
										)}
									</div>
								)}
							</div>
                            
                            {iconValue && (
                                <>
                                    <ToggleControl
                                        label={__('Only Icon', 'digiblocks')}
                                        checked={onlyIcon}
                                        onChange={(value) => setAttributes({ onlyIcon: value })}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    {!onlyIcon && (
                                        <ToggleGroupControl
                                            label={__("Icon Position", "digiblocks")}
                                            value={iconPosition}
                                            onChange={(value) => setAttributes({ iconPosition: value })}
                                            isBlock
                                            __next40pxDefaultSize={true}
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
                                    )}
                                </>
                            )}
                        </TabPanelBody>
                        <TabPanelBody
                            tab="options"
                            name="link"
                            title={__("Link", "digiblocks")}
                            initialOpen={false}
                        >
							<LinkControl
								value={url ? { url, opensInNewTab, rel } : undefined}
								onChange={(newLink) => {
									setAttributes({
										url: newLink.url,
										opensInNewTab: newLink.opensInNewTab,
										rel: newLink.rel || '',
									});
									setIsEditingURL(false);
								}}
								settings={[
									{
										id: 'opensInNewTab',
										title: __('Open in new tab'),
									},
									{
										id: 'rel',
										title: __('Add noopener noreferrer'),
									}
								]}
								onRemove={() => {
									setAttributes({ url: '', opensInNewTab: false, rel: '' });
									setIsEditingURL(false);
								}}
							/>
                        </TabPanelBody>
                        <TabPanelBody
                            tab="options"
                            name="size"
                            title={__("Size and Fill", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Size", "digiblocks")}
                                value={size}
                                options={sizeOptions}
                                onChange={(value) => {
                                    // Update size and set default padding for the size
                                    let newPadding = { ...padding };
                                    
                                    if (value === 'small') {
                                        newPadding.desktop = { top: '8', right: '16', bottom: '8', left: '16', unit: 'px', isLinked: false };
                                    } else if (value === 'large') {
                                        newPadding.desktop = { top: '16', right: '32', bottom: '16', left: '32', unit: 'px', isLinked: false };
                                    } else if (value === 'medium') {
                                        newPadding.desktop = { top: '12', right: '24', bottom: '12', left: '24', unit: 'px', isLinked: false };
                                    }
                                    
                                    setAttributes({ 
                                        size: value,
                                        padding: newPadding
                                    });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Expand to Container Width', 'digiblocks')}
                                checked={fill}
                                onChange={(value) => setAttributes({ fill: value })}
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
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={true}
                        >
                            <TypographyControl
                                label={__("Button Typography", "digiblocks")}
                                value={buttonTypography}
                                onChange={(value) =>
                                    setAttributes({ buttonTypography: value })
                                }
                            />
                        </TabPanelBody>

                        {iconValue && (
                            <TabPanelBody
                                tab="style"
                                name="icon"
                                title={__("Icon", "digiblocks")}
                                initialOpen={false}
                            >
                                <ResponsiveRangeControl
                                    label={__("Icon Width", "digiblocks")}
                                    value={iconWidth}
                                    onChange={(value) => setAttributes({ iconWidth: value })}
                                    units={[
                                        { label: 'px', value: 'px' },
                                        { label: 'em', value: 'em' },
                                        { label: 'rem', value: 'rem' },
                                    ]}
                                    defaultValues={{
                                        desktop: { value: '', unit: 'px' },
                                        tablet: { value: '', unit: 'px' },
                                        mobile: { value: '', unit: 'px' }
                                    }}
                                    min={0}
                                    max={200}
                                    step={1}
                                />

                                <ResponsiveRangeControl
                                    label={__("Icon Height", "digiblocks")}
                                    value={iconHeight}
                                    onChange={(value) => setAttributes({ iconHeight: value })}
                                    units={[
                                        { label: 'px', value: 'px' },
                                        { label: 'em', value: 'em' },
                                        { label: 'rem', value: 'rem' },
                                    ]}
                                    defaultValues={{
                                        desktop: { value: '', unit: 'px' },
                                        tablet: { value: '', unit: 'px' },
                                        mobile: { value: '', unit: 'px' }
                                    }}
                                    min={0}
                                    max={200}
                                    step={1}
                                />

                                {!onlyIcon && (
                                    <ResponsiveRangeControl
                                        label={__("Gap", "digiblocks")}
                                        value={iconGap}
                                        onChange={(value) => setAttributes({ iconGap: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                        ]}
                                        defaultValues={{
                                            desktop: { value: '', unit: 'px' },
                                            tablet: { value: '', unit: 'px' },
                                            mobile: { value: '', unit: 'px' }
                                        }}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                )}

                                <TabPanel
                                    className="digiblocks-control-tabs"
                                    activeClass="active-tab"
                                    tabs={stateTabList}
                                >
                                    {(tab) => (
                                        <PanelColorSettings
                                            title={
                                                tab.name === 'normal'
                                                    ? __("Icon Colors", "digiblocks")
                                                    : __("Icon Hover Colors", "digiblocks")
                                            }
                                            initialOpen={true}
                                            enableAlpha={true}
                                            colorSettings={[
                                                {
                                                    value: tab.name === 'normal' ? iconColor : iconHoverColor,
                                                    onChange: (value) =>
                                                        setAttributes(
                                                            tab.name === 'normal'
                                                                ? { iconColor: value }
                                                                : { iconHoverColor: value }
                                                        ),
                                                    label: __("Icon Color", "digiblocks"),
                                                },
                                            ]}
                                        />
                                    )}
                                </TabPanel>
                            </TabPanelBody>
                        )}

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
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === 'normal'
                                                ? __("Normal Colors", "digiblocks")
                                                : __("Hover Colors", "digiblocks")
                                        }
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: tab.name === 'normal' ? textColor : textHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === 'normal'
                                                            ? { textColor: value }
                                                            : { textHoverColor: value }
                                                    ),
                                                label: __("Text Color", "digiblocks"),
                                            },
                                            {
                                                value: tab.name === 'normal' ? backgroundColor : backgroundHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === 'normal'
                                                            ? { backgroundColor: value }
                                                            : { backgroundHoverColor: value }
                                                    ),
                                                label: __("Background Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>
                        </TabPanelBody>

						<TabPanelBody
                            tab="style"
                            name="hover-effect"
                            title={__("Hover Effect", "digiblocks")}
                            initialOpen={false}
                        >
							<SelectControl
								label={__("Hover Effect", "digiblocks")}
								value={hoverEffect || 'none'}
								options={[
									{ label: __("None", "digiblocks"), value: "none" },
									{ label: __("Sweep from Corners", "digiblocks"), value: "sweep-corners" },
									{ label: __("Sweep to Right", "digiblocks"), value: "sweep-to-right" },
									{ label: __("Sweep to Left", "digiblocks"), value: "sweep-to-left" },
									{ label: __("Sweep to Top", "digiblocks"), value: "sweep-to-top" },
									{ label: __("Sweep to Bottom", "digiblocks"), value: "sweep-to-bottom" },
									{ label: __("Grow Shadow", "digiblocks"), value: "grow-shadow" },
									{ label: __("Pulse", "digiblocks"), value: "pulse" },
									{ label: __("Bounce", "digiblocks"), value: "bounce" },
									{ label: __("Border Expand", "digiblocks"), value: "border-expand" },
									{ label: __("Shine", "digiblocks"), value: "shine" },
								]}
								onChange={(value) => setAttributes({ hoverEffect: value })}
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							/>

							{hoverEffect && hoverEffect !== 'none' && (
								<div style={{
									padding: '12px',
									backgroundColor: '#f0f6fc',
									border: '1px solid #c3ddfd',
									borderRadius: '4px',
									marginTop: '12px'
								}}>
									<p style={{ margin: 0, fontSize: '13px' }}>
										<strong>{__('Note:', 'digiblocks')}</strong>{' '}
										{['sweep-corners', 'sweep-to-right', 'sweep-to-left', 'sweep-to-top', 'sweep-to-bottom', 'border-expand'].includes(hoverEffect)
											? __('The sweep/border color will use the hover background color if set, otherwise the normal background color.', 'digiblocks')
											: __('The hover background color will be applied along with this effect.', 'digiblocks')
										}
									</p>
								</div>
							)}
						</TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="box-style"
                            title={__("Box Style", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width with defaults when a style is first selected
                                    if ((value !== 'default' && value !== 'none') && 
                                        (borderStyle === 'default' || borderStyle === 'none' || !borderStyle)) {
                                        // Set initial border width if not already set
                                        if (!borderWidth || Object.keys(borderWidth).length === 0) {
                                            setAttributes({
                                                borderWidth: {
                                                    desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                                    mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                                }
                                            });
                                        }
                                    }
                                    
                                    setAttributes({ borderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border width and border radius controls only if a border style is selected */}
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    {/* Border Colors */}
                                    <TabPanel
                                        className="digiblocks-control-tabs"
                                        activeClass="active-tab"
                                        tabs={stateTabList}
                                    >
                                        {(tab) => (
                                            <PanelColorSettings
                                                title={__("Border Colors", "digiblocks")}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: tab.name === 'normal' ? borderColor : borderHoverColor,
                                                        onChange: (value) =>
                                                            setAttributes(
                                                                tab.name === 'normal'
                                                                    ? { borderColor: value }
                                                                    : { borderHoverColor: value }
                                                            ),
                                                        label: __("Border Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        )}
                                    </TabPanel>
                                    
                                    <DimensionControl
                                        label={__("Border Width", "digiblocks")}
                                        value={borderWidth}
                                        onChange={(value) => setAttributes({ borderWidth: value })}
                                    />
                                </>
                            )}
                                    
							<DimensionControl
								label={__("Border Radius", "digiblocks")}
								value={borderRadius}
								onChange={(value) => setAttributes({ borderRadius: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' }
								]}
							/>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="shadow"
                            title={__("Box Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({ boxShadowHover: value })
                                }
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
                            title={__("Spacing", "digiblocks")}
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
                                        defaultValues={{ desktop: { value: 0, unit: 'px' }, tablet: { value: 0, unit: 'px' }, mobile: { value: 0, unit: 'px' } }}
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
                                        defaultValues={{ desktop: { value: 0, unit: 'px' }, tablet: { value: 0, unit: 'px' }, mobile: { value: 0, unit: 'px' } }}
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
                            title={__("Additional", "digiblocks")}
                            initialOpen={true}
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

    // Block props
    const blockProps = useBlockProps({
        className: `digiblocks-button ${id} ${size} ${customClasses || ''}`,
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
                {renderButtonContent()}
            </div>
        </>
    );
};

export default ButtonEdit;