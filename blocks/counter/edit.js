/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar
} = wp.blockEditor;
const {
	TextControl,
	TabPanel,
    SelectControl,
    RangeControl,
    ToggleControl,
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
const { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Edit function for the Counter block
 */
const CounterEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        displayIcon,
		iconSource,
		customSvg,
        iconValue,
        startNumber,
        endNumber,
        title,
        description,
        counterColor,
        counterHoverColor,
        titleColor,
        titleHoverColor,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        iconColor,
        iconHoverColor,
        iconBackgroundColor,
        iconHoverBackgroundColor,
        iconSize,
        iconPadding,
        iconMargin,
        iconBorderStyle,
        iconBorderWidth,
        iconBorderRadius,
        iconBorderColor,
        iconHoverBorderColor,
        typography,
        titleTypography,
        contentTypography,
        padding,
        margin,
        align,
        animation,
		animationDataDuration,
		animationDataDelay,
        boxShadow,
        boxShadowHover,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        hoverEffect,
        animationDuration,
        animationDelay,
        thousandSeparator,
        decimalPlaces,
        decimalSeparator,
        layoutStyle,
        verticalSpacing,
        counterPrefix,
        counterPrefixSpacing,
        counterSuffix,
        counterSuffixSpacing,
        numberWithCommas,
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
	useBlockId( id, clientId, setAttributes );

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
			if (!isEmpty(obj.mobile)) return obj.mobile;
			if (!isEmpty(obj.tablet)) return obj.tablet;
			return obj.desktop;
		}
		if (device === 'tablet') {
			if (!isEmpty(obj.tablet)) return obj.tablet;
			return obj.desktop;
		}
		return obj.desktop;
	};

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    const [counterValue, setCounterValue] = useState(startNumber || 0);
    const [isCounterAnimating, setIsCounterAnimating] = useState(false);
	const [activeColorTab, setActiveColorTab] = useState("normal");
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
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

    // Set the icon value
    const setIconValue = (newIcon) => {
        setAttributes({ iconValue: newIcon });
    };
	
	// Use ref
	const previewTimeoutRef = useRef(null);

	// Effect to trigger animation preview when animation attribute changes
	useEffect(() => {
		if (animation && animation !== 'none') {
			const timeoutId = setTimeout(() => {
				animationPreview(id, animation, animations, previewTimeoutRef, animationDataDuration, animationDataDelay);
			}, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [animation]);

	// Button click handler
	const handlePreviewClick = () => {
		animationPreview(id, animation, animations, previewTimeoutRef, animationDataDuration, animationDataDelay);
	};

    // Counter animation preview
    const animateCounter = () => {
        if (isCounterAnimating) return;
        
        const startValue = parseInt(startNumber) || 0;
        const endValue = parseInt(endNumber) || 0;
        const duration = animationDuration || 2000;
        const steps = 50; // Number of steps for the animation
        const stepDuration = duration / steps;
        const increment = (endValue - startValue) / steps;
        
        setIsCounterAnimating(true);
        setCounterValue(startValue);
        
        let currentStep = 0;
        
        const intervalId = setInterval(() => {
            currentStep++;
            
            if (currentStep >= steps) {
                setCounterValue(endValue);
                clearInterval(intervalId);
                setIsCounterAnimating(false);
            } else {
                const newValue = startValue + (increment * currentStep);
                setCounterValue(Math.round(newValue));
            }
        }, stepDuration);
        
        return () => clearInterval(intervalId);
    };

    // Format number with commas and decimal places
    const formatNumber = (number) => {
        if (typeof number !== 'number') {
            number = parseFloat(number) || 0;
        }
        
        // Handle decimal places
        let formattedNumber = number;
        if (decimalPlaces && decimalPlaces > 0) {
            formattedNumber = number.toFixed(decimalPlaces);
        } else {
            formattedNumber = Math.round(number);
        }
        
        // Convert to string for manipulation
        let numberStr = formattedNumber.toString();
        
        // Replace decimal separator if specified
        if (decimalPlaces > 0 && decimalSeparator && decimalSeparator !== '.') {
            numberStr = numberStr.replace('.', decimalSeparator);
        }
        
        // Add thousand separator if enabled
        if (numberWithCommas && thousandSeparator) {
            // Split by decimal separator
            let parts = numberStr.split(decimalSeparator || '.');
            
            // Format the integer part with commas
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
            
            // Join back with decimal part if exists
            numberStr = parts.join(decimalSeparator || '.');
        }
        
        return numberStr;
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

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Lift", "digiblocks"), value: "lift" },
        { label: __("Scale", "digiblocks"), value: "scale" },
        { label: __("Glow", "digiblocks"), value: "glow" },
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

    // Layout styles
    const layoutOptions = [
        { label: __("Stacked", "digiblocks"), value: "stacked" },
        { label: __("Inline", "digiblocks"), value: "inline" },
        { label: __("Centered", "digiblocks"), value: "centered" },
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
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
            `;
        } else {
            borderCSS = 'border-style: none;';
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Padding and margin
        const paddingCSS = `${getDimensionCSS(padding, 'padding', activeDevice)}`;
        const marginCSS = `${getDimensionCSS(margin, 'margin', activeDevice)}`;
        
        // Title typography CSS
        let titleTypographyCSS = '';
        if (titleTypography) {
            if (titleTypography.fontFamily) {
                titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
            }
            
            const titleFontSize = getVal(titleTypography.fontSize, activeDevice);
			if (titleFontSize && titleFontSize.value !== "" && titleFontSize.value !== null && titleFontSize.value !== undefined) {
				titleTypographyCSS += `font-size: ${titleFontSize.value}${titleFontSize.unit !== null ? titleFontSize.unit : ''};`;
			}
            
            if (titleTypography.fontWeight) {
                titleTypographyCSS += `font-weight: ${titleTypography.fontWeight};`;
            }
            
            if (titleTypography.fontStyle) {
                titleTypographyCSS += `font-style: ${titleTypography.fontStyle};`;
            }
            
            if (titleTypography.textTransform) {
                titleTypographyCSS += `text-transform: ${titleTypography.textTransform};`;
            }
            
            if (titleTypography.textDecoration) {
                titleTypographyCSS += `text-decoration: ${titleTypography.textDecoration};`;
            }
            
            const titleLineHeight = getVal(titleTypography.lineHeight, activeDevice);
			if (titleLineHeight && titleLineHeight.value !== "" && titleLineHeight.value !== null && titleLineHeight.value !== undefined) {
				titleTypographyCSS += `line-height: ${titleLineHeight.value}${titleLineHeight.unit !== null ? titleLineHeight.unit : ''};`;
			}

            const titleLetterSpacing = getVal(titleTypography.letterSpacing, activeDevice);
			if (titleLetterSpacing && titleLetterSpacing.value !== "" && titleLetterSpacing.value !== null && titleLetterSpacing.value !== undefined) {
				titleTypographyCSS += `letter-spacing: ${titleLetterSpacing.value}${titleLetterSpacing.unit !== null ? titleLetterSpacing.unit : ''};`;
			}
        }
        
        // Content typography CSS
        let contentTypographyCSS = '';
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }
            
            const contentFontSize = getVal(contentTypography.fontSize, activeDevice);
			if (contentFontSize && contentFontSize.value !== "" && contentFontSize.value !== null && contentFontSize.value !== undefined) {
				contentTypographyCSS += `font-size: ${contentFontSize.value}${contentFontSize.unit !== null ? contentFontSize.unit : ''};`;
			}
            
            if (contentTypography.fontWeight) {
                contentTypographyCSS += `font-weight: ${contentTypography.fontWeight};`;
            }
            
            if (contentTypography.fontStyle) {
                contentTypographyCSS += `font-style: ${contentTypography.fontStyle};`;
            }
            
            if (contentTypography.textTransform) {
                contentTypographyCSS += `text-transform: ${contentTypography.textTransform};`;
            }
            
            if (contentTypography.textDecoration) {
                contentTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
            }
            
            const contentLineHeight = getVal(contentTypography.lineHeight, activeDevice);
			if (contentLineHeight && contentLineHeight.value !== "" && contentLineHeight.value !== null && contentLineHeight.value !== undefined) {
				contentTypographyCSS += `line-height: ${contentLineHeight.value}${contentLineHeight.unit !== null ? contentLineHeight.unit : ''};`;
			}

            const contentLetterSpacing = getVal(contentTypography.letterSpacing, activeDevice);
			if (contentLetterSpacing && contentLetterSpacing.value !== "" && contentLetterSpacing.value !== null && contentLetterSpacing.value !== undefined) {
				contentTypographyCSS += `letter-spacing: ${contentLetterSpacing.value}${contentLetterSpacing.unit !== null ? contentLetterSpacing.unit : ''};`;
			}
        }
        
        // Counter typography CSS
        let typographyCSS = '';
        if (typography) {
            if (typography.fontFamily) {
                typographyCSS += `font-family: ${typography.fontFamily};`;
            }

			 const fontSize = getVal(typography.fontSize, activeDevice);
			if (fontSize && fontSize.value !== "" && fontSize.value !== null && fontSize.value !== undefined) {
				typographyCSS += `font-size: ${fontSize.value}${fontSize.unit !== null ? fontSize.unit : ''};`;
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
            
            const lineHeight = getVal(typography.lineHeight, activeDevice);
			if (lineHeight && lineHeight.value !== "" && lineHeight.value !== null && lineHeight.value !== undefined) {
				typographyCSS += `line-height: ${lineHeight.value}${lineHeight.unit !== null ? lineHeight.unit : ''};`;
			}

			const letterSpacing = getVal(typography.letterSpacing, activeDevice);
			if (letterSpacing && letterSpacing.value !== "" && letterSpacing.value !== null && letterSpacing.value !== undefined) {
				typographyCSS += `letter-spacing: ${letterSpacing.value}${letterSpacing.unit !== null ? letterSpacing.unit : ''};`;
			}
        }
        
        // Icon styles - only apply if an icon exists
        let iconCSS = '';
        let iconHoverCSS = '';
        let iconMarginCSS = '';
        
        // Only process icon styles if an icon actually exists
        if (displayIcon && iconValue && iconValue.svg) {
            // Icon background color
            if (iconBackgroundColor) {
                iconCSS += `background-color: ${iconBackgroundColor};`;
            }
            
            // Icon border styles
            if (iconBorderStyle && iconBorderStyle !== 'default' && iconBorderStyle !== 'none') {                
                iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || '#e0e0e0'};
					${getDimensionCSS(iconBorderWidth, 'border-width', activeDevice)}
					${getDimensionCSS(iconBorderRadius, 'border-radius', activeDevice)}
                `;
            }
            
            // Icon padding
            if (iconPadding && iconPadding[activeDevice]) {
                iconCSS += `${getDimensionCSS(iconPadding, 'padding', activeDevice)}`;
            }
            
            // Icon hover styles
            if (iconHoverColor) {
                iconHoverCSS += `fill: ${iconHoverColor} !important; color: ${iconHoverColor} !important;`;
            }
            
            if (iconHoverBackgroundColor) {
                iconHoverCSS += `background-color: ${iconHoverBackgroundColor};`;
            }
            
            if (iconHoverBorderColor) {
                iconHoverCSS += `border-color: ${iconHoverBorderColor};`;
            }
            
            // Custom icon margin if set
            if (iconMargin && iconMargin[activeDevice]) {
                iconMarginCSS = `${getDimensionCSS(iconMargin, 'margin', activeDevice)}`;
            } else {
                // Default margins if not set
                const defaultBottom = activeDevice === 'desktop' ? 20 : activeDevice === 'tablet' ? 15 : 10;
                iconMarginCSS = `margin: 0px 0px ${defaultBottom}px 0px;`;
            }
        }
        
        // Hover effects
        let hoverCSS = '';
        
        // Box shadow hover
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
        
        // Set base styles for the block
        return `
            /* Main block styles */
            .${id} {
                background-color: ${backgroundColor || 'transparent'};
                ${boxShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                transition: all 0.3s ease;
                text-align: ${align || 'center'};
                ${positionCSS}
				${transformCSS}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            /* Layout styles */
            .${id} .digiblocks-counter-inner {
                display: flex;
                flex-direction: ${layoutStyle === 'inline' ? 'row' : 'column'};
                align-items: ${layoutStyle === 'inline' ? 'center' : align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'};
                justify-content: ${layoutStyle === 'inline' ? 'flex-start' : 'center'};
                gap: ${verticalSpacing || 15}px;
                ${layoutStyle === 'centered' ? 'text-align: center;' : ''}
            }
            
            ${displayIcon && iconValue && iconValue.svg ? `
            /* Icon styles */
            .${id} .digiblocks-counter-icon {
				${iconMarginCSS}
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${iconCSS}
                transition: all 0.3s ease;
            }

            .${id} .digiblocks-counter-icon span {
                display: flex;
            }

            .${id} .digiblocks-counter-icon svg {
                width: ${iconSize && iconSize[activeDevice] ? iconSize[activeDevice] : 32}px;
                height: 100%;
                fill: ${iconColor || 'inherit'};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${id}:hover .digiblocks-counter-icon {
                ${iconHoverCSS}
            }
            
            .${id}:hover .digiblocks-counter-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
            }
            ` : ''}
            
            /* Counter styles */
            .${id} .digiblocks-counter-number-wrapper {
                display: flex;
                align-items: center;
                justify-content: ${align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'};
                margin-bottom: 10px;
            }
            
            .${id} .digiblocks-counter-prefix {
                margin-right: ${counterPrefixSpacing || 5}px;
                color: ${counterColor};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-counter-suffix {
                margin-left: ${counterSuffixSpacing || 5}px;
                color: ${counterColor};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-counter-number {
                color: ${counterColor};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Counter hover styles */
            .${id}:hover .digiblocks-counter-number,
            .${id}:hover .digiblocks-counter-prefix,
            .${id}:hover .digiblocks-counter-suffix {
                ${counterHoverColor ? `color: ${counterHoverColor};` : ''}
            }
            
            /* Title styles */
            .${id} .digiblocks-counter-title {
                color: ${titleColor || 'inherit'};
                margin-bottom: 10px;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${id}:hover .digiblocks-counter-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            }
            
            /* Content styles */
            .${id} .digiblocks-counter-description {
                color: ${textColor || 'inherit'};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${id}:hover .digiblocks-counter-description {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
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

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Render icon
    const renderIcon = () => {
        // For library icons
        if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
            return (
                <div className="digiblocks-counter-icon">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: iconValue.svg,
                        }}
                    />
                </div>
            );
        }
        
        // For custom SVG
        if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
            return (
                <div className="digiblocks-counter-icon">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: customSvg,
                        }}
                    />
                </div>
            );
        }
        
        return null;
    };

	// Render color tab content based on active tab
	const renderColorTabContent = (tabName) => {
		if (tabName === 'normal') {
			return (
				<>
					<PanelColorSettings
						title={__("Counter Colors", "digiblocks")}
						initialOpen={true}
						enableAlpha={true}
						colorSettings={[
							{
								value: counterColor,
								onChange: (value) => setAttributes({ counterColor: value }),
								label: __("Counter Color", "digiblocks")
							}
						]}
					/>
					
					<PanelColorSettings
						title={__("Content Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: titleColor,
								onChange: (value) => setAttributes({ titleColor: value }),
								label: __("Title Color", "digiblocks")
							},
							{
								value: textColor,
								onChange: (value) => setAttributes({ textColor: value }),
								label: __("Description Color", "digiblocks")
							}
						]}
					/>
					
					{displayIcon && (
						<PanelColorSettings
							title={__("Icon Colors", "digiblocks")}
							initialOpen={false}
							enableAlpha={true}
							colorSettings={[
								{
									value: iconColor,
									onChange: (value) => setAttributes({ iconColor: value }),
									label: __("Icon Color", "digiblocks")
								},
								{
									value: iconBackgroundColor,
									onChange: (value) => setAttributes({ iconBackgroundColor: value }),
									label: __("Icon Background", "digiblocks")
								}
							]}
						/>
					)}
					
					<PanelColorSettings
						title={__("Block Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: (value) => setAttributes({ backgroundColor: value }),
								label: __("Background Color", "digiblocks")
							}
						]}
					/>
				</>
			);
		} else if (tabName === 'hover') {
			return (
				<>
					<PanelColorSettings
						title={__("Counter Hover Colors", "digiblocks")}
						initialOpen={true}
						enableAlpha={true}
						colorSettings={[
							{
								value: counterHoverColor,
								onChange: (value) => setAttributes({ counterHoverColor: value }),
								label: __("Counter Hover Color", "digiblocks")
							}
						]}
					/>
					
					<PanelColorSettings
						title={__("Content Hover Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: titleHoverColor,
								onChange: (value) => setAttributes({ titleHoverColor: value }),
								label: __("Title Hover Color", "digiblocks")
							},
							{
								value: textHoverColor,
								onChange: (value) => setAttributes({ textHoverColor: value }),
								label: __("Description Hover Color", "digiblocks")
							}
						]}
					/>
					
					{displayIcon && (
						<PanelColorSettings
							title={__("Icon Hover Colors", "digiblocks")}
							initialOpen={false}
							enableAlpha={true}
							colorSettings={[
								{
									value: iconHoverColor,
									onChange: (value) => setAttributes({ iconHoverColor: value }),
									label: __("Icon Hover Color", "digiblocks")
								},
								{
									value: iconHoverBackgroundColor,
									onChange: (value) => setAttributes({ iconHoverBackgroundColor: value }),
									label: __("Icon Hover Background", "digiblocks")
								}
							]}
						/>
					)}
					
					<PanelColorSettings
						title={__("Block Hover Colors", "digiblocks")}
						initialOpen={false}
						enableAlpha={true}
						colorSettings={[
							{
								value: backgroundHoverColor,
								onChange: (value) => setAttributes({ backgroundHoverColor: value }),
								label: __("Background Hover Color", "digiblocks")
							}
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
                        <div className="components-panel__body is-opened">
                            <ToggleControl
                                label={__("Display Icon", "digiblocks")}
                                checked={displayIcon}
                                onChange={(value) => setAttributes({ displayIcon: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displayIcon && (
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
                                                    <div className="components-spinner"></div>
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
                            )}
                            
                            <SelectControl
                                label={__("Layout Style", "digiblocks")}
                                value={layoutStyle || 'stacked'}
                                options={layoutOptions}
                                onChange={(value) => setAttributes({ layoutStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__("Spacing", "digiblocks")}
                                value={verticalSpacing || 15}
                                onChange={(value) => setAttributes({ verticalSpacing: value })}
                                min={0}
                                max={100}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Starting Number", "digiblocks")}
                                type="number"
                                value={startNumber}
                                onChange={(value) => setAttributes({ startNumber: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Ending Number", "digiblocks")}
                                type="number"
                                value={endNumber}
                                onChange={(value) => setAttributes({ endNumber: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Counter Prefix", "digiblocks")}
                                value={counterPrefix || ''}
                                onChange={(value) => setAttributes({ counterPrefix: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {counterPrefix && (
                                <RangeControl
                                    label={__("Prefix Spacing", "digiblocks")}
                                    value={counterPrefixSpacing || 5}
                                    onChange={(value) => setAttributes({ counterPrefixSpacing: value })}
                                    min={0}
                                    max={30}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <TextControl
                                label={__("Counter Suffix", "digiblocks")}
                                value={counterSuffix || ''}
                                onChange={(value) => setAttributes({ counterSuffix: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {counterSuffix && (
                                <RangeControl
                                    label={__("Suffix Spacing", "digiblocks")}
                                    value={counterSuffixSpacing || 5}
                                    onChange={(value) => setAttributes({ counterSuffixSpacing: value })}
                                    min={0}
                                    max={30}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <TextControl
                                label={__("Title", "digiblocks")}
                                value={title || ''}
                                onChange={(value) => setAttributes({ title: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__("Description", "digiblocks")}
                                value={description || ''}
                                onChange={(value) => setAttributes({ description: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__("Use Thousand Separator", "digiblocks")}
                                checked={numberWithCommas}
                                onChange={(value) => setAttributes({ numberWithCommas: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {numberWithCommas && (
                                <TextControl
                                    label={__("Thousand Separator", "digiblocks")}
                                    value={thousandSeparator || ','}
                                    onChange={(value) => setAttributes({ thousandSeparator: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <RangeControl
                                label={__("Decimal Places", "digiblocks")}
                                value={decimalPlaces || 0}
                                onChange={(value) => setAttributes({ decimalPlaces: value })}
                                min={0}
                                max={10}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {decimalPlaces > 0 && (
                                <TextControl
                                    label={__("Decimal Separator", "digiblocks")}
                                    value={decimalSeparator || '.'}
                                    onChange={(value) => setAttributes({ decimalSeparator: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <div style={{ marginTop: '10px' }}>
                                <Button
                                    isPrimary
                                    onClick={animateCounter}
                                    disabled={isCounterAnimating}
                                >
                                    {__("Preview Counter Animation", "digiblocks")}
                                </Button>
                            </div>
                        </div>
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
								onSelect={(tab) => setActiveColorTab(tab.name)}
							>
								{(tab) => renderColorTabContent(tab.name)}
							</TabPanel>
						</TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
							<TypographyControl
                                label={__("Counter Typography", "digiblocks")}
                                value={typography || {}}
                                onChange={(value) => setAttributes({ typography: value })}
                            />
                            
                            <TypographyControl
                                label={__("Title Typography", "digiblocks")}
                                value={titleTypography || {}}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                            />
                            
                            <TypographyControl
                                label={__("Description Typography", "digiblocks")}
                                value={contentTypography || {}}
                                onChange={(value) => setAttributes({ contentTypography: value })}
                            />
                        </TabPanelBody>
                        
                        {displayIcon && (
                            <TabPanelBody
                                tab="style"
                                name="icon"
                                title={__("Icon", "digiblocks")}
                                initialOpen={false}
                            >
                                <ResponsiveControl
                                    label={__("Icon Size", "digiblocks")}
                                >
                                    <RangeControl
                                        value={iconSize && iconSize[localActiveDevice] ? iconSize[localActiveDevice] : 32}
                                        onChange={(value) => setAttributes({
                                            iconSize: {
                                                ...iconSize || { desktop: 32, tablet: '', mobile: '' },
                                                [localActiveDevice]: value
                                            }
                                        })}
                                        min={8}
                                        max={200}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                                
                                <SelectControl
                                    label={__("Border Style", "digiblocks")}
                                    value={iconBorderStyle || 'default'}
                                    options={borderStyleOptions}
                                    onChange={(value) => {
                                        if ((value !== 'default' && value !== 'none') && 
                                            (iconBorderStyle === 'default' || iconBorderStyle === 'none' || !iconBorderStyle)) {
                                            if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                                                setAttributes({
                                                    iconBorderWidth: {
                                                        desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                                    }
                                                });
                                            }
                                        }
                                        
                                        setAttributes({ iconBorderStyle: value });
                                    }}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                                
                                {iconBorderStyle && iconBorderStyle !== 'default' && iconBorderStyle !== 'none' && (
                                    <>
                                        <PanelColorSettings
                                            title={__("Border Colors", "digiblocks")}
                                            enableAlpha={true}
                                            colorSettings={[
                                                {
                                                    value: iconBorderColor,
                                                    onChange: (value) => setAttributes({ iconBorderColor: value }),
                                                    label: __("Border Color", "digiblocks")
                                                },
                                                {
                                                    value: iconHoverBorderColor,
                                                    onChange: (value) => setAttributes({ iconHoverBorderColor: value }),
                                                    label: __("Border Hover Color", "digiblocks")
                                                }
                                            ]}
                                        />
                                        
                                        <DimensionControl
                                            label={__("Border Width", "digiblocks")}
                                            value={iconBorderWidth}
                                            onChange={(value) => setAttributes({ iconBorderWidth: value })}
                                        />

                                        <DimensionControl
                                            label={__("Border Radius", "digiblocks")}
                                            value={iconBorderRadius}
                                            onChange={(value) => setAttributes({ iconBorderRadius: value })}
                                            units={[
                                                { label: 'px', value: 'px' },
                                                { label: '%', value: '%' }
                                            ]}
                                        />
                                    </>
                                )}
                                
                                <DimensionControl
                                    label={__("Icon Padding", "digiblocks")}
                                    value={iconPadding}
                                    onChange={(value) => setAttributes({ iconPadding: value })}
                                />

                                <DimensionControl
                                    label={__("Icon Margin", "digiblocks")}
                                    value={iconMargin}
                                    onChange={(value) => setAttributes({ iconMargin: value })}
                                />
                            </TabPanelBody>
                        )}
                        
                        <TabPanelBody
                            tab="style"
                            name="animation"
                            title={__("Counter Animation", "digiblocks")}
                            initialOpen={false}
                        >
                            <RangeControl
                                label={__("Animation Duration (ms)", "digiblocks")}
                                value={animationDuration || 2000}
                                onChange={(value) => setAttributes({ animationDuration: value })}
                                min={100}
                                max={10000}
                                step={100}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__("Animation Delay (ms)", "digiblocks")}
                                value={animationDelay || 0}
                                onChange={(value) => setAttributes({ animationDelay: value })}
                                min={0}
                                max={10000}
                                step={100}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__("Border & Radius", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius with defaults when a style is first selected
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
                                        
                                        // Set initial border radius if not already set
                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                            setAttributes({
                                                borderRadius: {
                                                    desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
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
                            
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    <PanelColorSettings
                                        title={__("Border Color", "digiblocks")}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                label: __("Border Color", "digiblocks")
                                            }
                                        ]}
                                    />
                                    
                                    <DimensionControl
                                        label={__("Border Width", "digiblocks")}
                                        value={borderWidth}
                                        onChange={(value) => setAttributes({ borderWidth: value })}
                                    />

                                    <DimensionControl
                                        label={__("Border Radius", "digiblocks")}
                                        value={borderRadius}
                                        onChange={(value) => setAttributes({ borderRadius: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' }
                                        ]}
                                    />
                                </>
                            )}
                            
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
                                label={__("Animation Effect", "digiblocks")}
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
										value={animationDataDuration}
										options={[
											{ label: __("Slow", "digiblocks"), value: "slow" },
											{ label: __("Normal", "digiblocks"), value: "normal" },
											{ label: __("Fast", "digiblocks"), value: "fast" }
										]}
										onChange={(value) => setAttributes({ animationDataDuration: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
									
									<TextControl
										label={__("Animation Delay (ms)", "digiblocks")}
										value={animationDataDelay || 0}
										onChange={(value) => setAttributes({ animationDataDelay: parseInt(value) || 0 })}
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

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-counter ${id} align-${align} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    // Format the counter values 
    const formattedCounter = formatNumber(counterValue);

    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={align}
                    onChange={(value) => setAttributes({ align: value })}
                />
            </BlockControls>

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
                <div className="digiblocks-counter-inner">
                    {displayIcon && renderIcon()}
                    
                    <div className="digiblocks-counter-content">
                        <div className="digiblocks-counter-number-wrapper">
                            {counterPrefix && (
                                <span className="digiblocks-counter-prefix">{counterPrefix}</span>
                            )}
                            <span className="digiblocks-counter-number">{formattedCounter}</span>
                            {counterSuffix && (
                                <span className="digiblocks-counter-suffix">{counterSuffix}</span>
                            )}
                        </div>
                        
                        {title && (
                            <h3 className="digiblocks-counter-title">{title}</h3>
                        )}
                        
                        {description && (
                            <p className="digiblocks-counter-description">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterEdit;