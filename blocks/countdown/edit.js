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
    SelectControl,
    RangeControl,
    TabPanel,
    ToggleControl,
    TextControl,
    DateTimePicker,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
	__experimentalNumberControl: NumberControl,
    BaseControl
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Edit function for the Countdown block
 */
const CountdownEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        endDate,
        showDays,
        showHours,
        showMinutes,
        showSeconds,
        daysLabel,
        hoursLabel,
        minutesLabel,
        secondsLabel,
        digitColor,
        digitBackground,
        digitHoverColor,
        digitHoverBackground,
        labelColor,
        labelHoverColor,
        separatorColor,
        separatorHoverColor,
        boxStyle,
        boxBorderRadius,
        boxPadding,
        boxMargin,
        boxBorderWidth,
        boxBorderColor,
        boxShadow,
        boxShadowHover,
        itemSpacing,
        align,
        labelPosition,
        labelSpacing,
        titleTypography,
        contentTypography,
        expiredMessage,
        animation,
		animationDuration,
		animationDelay,
        displaySeparator,
        separatorType,
        boxesEqual,
        style,
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
		
		if (device === 'mobile') {
			return (obj.mobile !== '' && obj.mobile !== undefined && obj.mobile !== null) ? obj.mobile : 
				(obj.tablet !== '' && obj.tablet !== undefined && obj.tablet !== null) ? obj.tablet : 
				obj.desktop;
		}
		if (device === 'tablet') {
			return (obj.tablet !== '' && obj.tablet !== undefined && obj.tablet !== null) ? obj.tablet : 
				obj.desktop;
		}
		return obj.desktop;
	};

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State to track time remaining (for preview in editor)
    const [timeRemaining, setTimeRemaining] = useState({
        days: 30,
        hours: 23,
        minutes: 59,
        seconds: 59
    });
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    const countdownIntervalRef = useRef(null);
    
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

    // State for active style tab
    const [activeStyleTab, setActiveStyleTab] = useState("normal");
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Set a default end date only if one doesn't exist yet
		if (!endDate) {
			const oneWeekFromNow = new Date();
			oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
			setAttributes({ endDate: oneWeekFromNow.toISOString() });
		}
        
        // Initialize the countdown timer for editor preview
        const updateCountdown = () => {
            const now = new Date();
            let targetDate = new Date();
            
            // If endDate is set, use it
            if (endDate) {
                targetDate = new Date(endDate);
            } else {
                // Otherwise set a default date 30 days in the future for preview
                targetDate.setDate(targetDate.getDate() + 30);
            }
            
            // Calculate time difference
            const difference = targetDate - now;
            
            if (difference > 0) {
                // Calculate days, hours, minutes, seconds
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                setTimeRemaining({
                    days,
                    hours,
                    minutes,
                    seconds
                });
            } else {
                // Target date passed
                setTimeRemaining({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            }
        };
        
        // Initial update
        updateCountdown();
        
        // Setup interval
        countdownIntervalRef.current = setInterval(updateCountdown, 1000);
        
        // Cleanup on unmount
        return () => {
            if (countdownIntervalRef.current) {
                clearInterval(countdownIntervalRef.current);
            }
        };
    }, [endDate, setAttributes]);

    // Use ref
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

	// Button click handler
	const handlePreviewClick = () => {
		animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
	};

    // Box style options
    const boxStyleOptions = [
        { label: __("Default", "digiblocks"), value: "default" },
        { label: __("Filled", "digiblocks"), value: "filled" },
        { label: __("Outlined", "digiblocks"), value: "outlined" },
        { label: __("Pill", "digiblocks"), value: "pill" },
        { label: __("Rounded", "digiblocks"), value: "rounded" },
        { label: __("Circle", "digiblocks"), value: "circle" }
    ];

    // Box label position options
    const labelPositionOptions = [
        { label: __("Bottom", "digiblocks"), value: "bottom" },
        { label: __("Top", "digiblocks"), value: "top" },
        { label: __("Inside", "digiblocks"), value: "inside" }
    ];

    // Style options
    const styleOptions = [
        { label: __("Boxes", "digiblocks"), value: "boxes" },
        { label: __("Simple", "digiblocks"), value: "simple" }
    ];

    // Separator type options
    const separatorTypeOptions = [
        { label: __("Colon", "digiblocks"), value: "colon" },
        { label: __("Hyphen", "digiblocks"), value: "hyphen" },
        { label: __("Slash", "digiblocks"), value: "slash" },
        { label: __("Dot", "digiblocks"), value: "dot" }
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

    // Format time with leading zeros
    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
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

    // Generate CSS for the countdown box styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Get current values for the active device
		const currentItemSpacing = getVal(itemSpacing, localActiveDevice);
		const currentLabelSpacing = getVal(labelSpacing, localActiveDevice);
        
        // Digit typography
        let titleTypographyCSS = '';
        if (titleTypography) {
            if (titleTypography.fontFamily) {
                titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
            }
            const titleFontSize = getVal(titleTypography.fontSize, activeDevice);
			if (titleFontSize) {
				titleTypographyCSS += `font-size: ${titleFontSize}${titleTypography.fontSizeUnit || 'px'};`;
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
            const titleLineHeight = getVal(titleTypography.lineHeight, activeDevice);
			if (titleLineHeight) {
				titleTypographyCSS += `line-height: ${titleLineHeight}${titleTypography.lineHeightUnit || 'em'};`;
			}
            const titleLetterSpacing = getVal(titleTypography.letterSpacing, activeDevice);
			if (titleLetterSpacing || titleLetterSpacing === 0) {
				titleTypographyCSS += `letter-spacing: ${titleLetterSpacing}${titleTypography.letterSpacingUnit || 'px'};`;
			}
        }

        // Label typography
        let contentTypographyCSS = '';
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }
            const contentFontSize = getVal(contentTypography.fontSize, activeDevice);
			if (contentFontSize) {
				contentTypographyCSS += `font-size: ${contentFontSize}${contentTypography.fontSizeUnit || 'px'};`;
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
            const contentLineHeight = getVal(contentTypography.lineHeight, activeDevice);
			if (contentLineHeight) {
				contentTypographyCSS += `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || 'em'};`;
			}
            const contentLetterSpacing = getVal(contentTypography.letterSpacing, activeDevice);
			if (contentLetterSpacing || contentLetterSpacing === 0) {
				contentTypographyCSS += `letter-spacing: ${contentLetterSpacing}${contentTypography.letterSpacingUnit || 'px'};`;
			}
        }
        
        // Box shadow style
        let boxShadowCSS = '';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Box shadow hover style
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const inset = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }

        // Create specific styles based on box style
        let specificStyles = '';
        
        if (style === 'boxes') {
            // Box style specific properties
            switch (boxStyle) {
                case 'filled':
                    specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor};
							${getDimensionCSS(boxPadding, 'padding', activeDevice)}
							${getDimensionCSS(boxBorderRadius, 'border-radius', activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'outlined':
                    specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${digitColor};
							${getDimensionCSS(boxPadding, 'padding', activeDevice)}
							border-style: solid;
							${getDimensionCSS(boxBorderWidth, 'border-width', activeDevice)}
							border-color: ${boxBorderColor || '#e0e0e0'};
							${getDimensionCSS(boxBorderRadius, 'border-radius', activeDevice)}
							${getDimensionCSS(boxPadding, 'padding', activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || 'transparent'};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'pill':
                    specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor};
                            border-radius: 50px;
							${getDimensionCSS(boxPadding, 'padding', activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'rounded':
                    specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor};
                            border-radius: 8px;
							${getDimensionCSS(boxPadding, 'padding', activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'circle':
                    specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							${getDimensionCSS(boxPadding, 'padding', activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'default':
                default:
                    specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            color: ${digitColor};
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
            }
        } else {
            // Simple style (no boxes)
            specificStyles = `
                .${id} .digiblocks-countdown-item-inner {
                    color: ${digitColor};
                }
                .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${digitHoverColor || digitColor};
                }
            `;
        }

        // Separator styles based on type
        let separatorStyles = '';
        if (displaySeparator) {
            let separatorContent = '';
            
            switch (separatorType) {
                case 'colon':
                    separatorContent = ':';
                    break;
                case 'hyphen':
                    separatorContent = '-';
                    break;
                case 'slash':
                    separatorContent = '/';
                    break;
                case 'dot':
                    separatorContent = '•';
                    break;
                default:
                    separatorContent = ':';
                    break;
            }
            
            separatorStyles = `
                .${id} .digiblocks-countdown-separator {
                    color: ${separatorColor};
                    font-size: ${titleTypography && titleTypography.fontSize && titleTypography.fontSize[activeDevice] ? titleTypography.fontSize[activeDevice] + (titleTypography.fontSizeUnit || 'px') : '2rem'};
                }
                .${id} .digiblocks-countdown-separator::before {
                    content: "${separatorContent}";
                }
                .${id}:hover .digiblocks-countdown-separator {
                    color: ${separatorHoverColor || separatorColor};
                }
            `;
        }
        
        // Equal width boxes if needed
        let equalWidthStyles = '';
        if (style === 'boxes' && boxesEqual) {
            equalWidthStyles = `
                .${id} .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                .${id} .digiblocks-countdown-item-inner {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                }
            `;
        }

        // Labels positioning
        let labelPositionStyles = '';
        if (labelPosition === 'top') {
            labelPositionStyles = `
                .${id} .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                .${id} .digiblocks-countdown-label {
                    margin-bottom: ${currentLabelSpacing}px;
                    margin-top: 0;
                }
            `;
        } else if (labelPosition === 'inside') {
            if (style === 'boxes') {
                labelPositionStyles = `
                    .${id} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${id} .digiblocks-countdown-digit {
                        margin-bottom: ${currentLabelSpacing}px;
                    }
                    .${id} .digiblocks-countdown-label {
                        margin-top: 0;
                    }
                    .${id} .digiblocks-countdown-item-inner {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `;
            } else {
                // For simple style with inside labels, make it similar to bottom labels
                labelPositionStyles = `
                    .${id} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${id} .digiblocks-countdown-label {
                        margin-top: ${currentLabelSpacing}px;
                    }
                `;
            }
        } else {
            // Default bottom position
            labelPositionStyles = `
                .${id} .digiblocks-countdown-item {
                    flex-direction: column;
                }
                .${id} .digiblocks-countdown-label {
                    margin-top: ${currentLabelSpacing}px;
                }
            `;
        }

        // Position styles
        let positionCSS = '';
        if (position && position !== 'default') {
            positionCSS += `position: ${position} !important;`;
            
            const horizontalValue = horizontalOffset?.[activeDevice]?.value;
            const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || 'px';
            if (horizontalValue !== '' && horizontalValue !== undefined) {
                if (horizontalOrientation === 'left') {
                    positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
                } else {
                    positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
                }
            }
            
            const verticalValue = verticalOffset?.[activeDevice]?.value;
            const verticalUnit = verticalOffset?.[activeDevice]?.unit || 'px';
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

        // Complete CSS
        return `
            /* Countdown Block - ${id} */
            .${id} {
				${getDimensionCSS(boxMargin, 'margin', activeDevice)}
                text-align: ${align};
                display: block;
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }
            
            .${id} .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
                gap: ${currentItemSpacing}px;
            }
            
            .${id} .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            .${id} .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-countdown-digit {
                ${titleTypographyCSS}
            }
            
            .${id} .digiblocks-countdown-label {
                ${contentTypographyCSS}
                color: ${labelColor || '#666666'};
                transition: color 0.3s ease;
            }
            
            .${id}:hover .digiblocks-countdown-label {
                color: ${labelHoverColor || labelColor || '#666666'};
            }
            
            .${id} .digiblocks-countdown-expired {
                ${titleTypographyCSS}
                color: ${digitColor};
                text-align: ${align};
            }
            
            /* Box style specific */
            ${specificStyles}
            
            /* Separator styles */
            ${separatorStyles}
            
            /* Equal width styles */
            ${equalWidthStyles}
            
            /* Label positioning */
            ${labelPositionStyles}

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
                        <div className="components-panel__body is-opened">
                            <ToggleGroupControl
                                label={__("Style", "digiblocks")}
                                value={style}
                                onChange={(value) => setAttributes({ style: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                {styleOptions.map(option => (
                                    <ToggleGroupControlOption
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                    />
                                ))}
                            </ToggleGroupControl>

                            {style === 'boxes' && (
                                <SelectControl
                                    label={__("Box Style", "digiblocks")}
                                    value={boxStyle}
                                    options={boxStyleOptions}
                                    onChange={(value) => setAttributes({ boxStyle: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            {style === 'boxes' && (
                                <ToggleControl
                                    label={__("Equal Width Boxes", "digiblocks")}
                                    checked={!!boxesEqual}
                                    onChange={() => setAttributes({ boxesEqual: !boxesEqual })}
                                    help={__("Make all countdown boxes the same width", "digiblocks")}
                                	__nextHasNoMarginBottom={true}
                                />
                            )}

                            <SelectControl
                                label={__("Label Position", "digiblocks")}
                                value={labelPosition}
                                options={labelPositionOptions}
                                onChange={(value) => setAttributes({ labelPosition: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Show Separators", "digiblocks")}
                                checked={!!displaySeparator}
                                onChange={() => setAttributes({ displaySeparator: !displaySeparator })}
                                __nextHasNoMarginBottom={true}
                            />

                            {displaySeparator && (
                                <SelectControl
                                    label={__("Separator Type", "digiblocks")}
                                    value={separatorType}
                                    options={separatorTypeOptions}
                                    onChange={(value) => setAttributes({ separatorType: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <BaseControl
                                label={__("End Date & Time", "digiblocks")}
                                id="countdown-date-time"
								__nextHasNoMarginBottom={true}
                            >
                                <DateTimePicker
                                    currentDate={endDate}
                                    onChange={(date) => setAttributes({ endDate: date })}
                                    is12Hour={true}
                                />
                            </BaseControl>

                            <TextControl
                                label={__("Expired Message", "digiblocks")}
                                value={expiredMessage}
                                onChange={(value) => setAttributes({ expiredMessage: value })}
                                placeholder={__("Time's up!", "digiblocks")}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <TextControl
                                label={__("Days Label", "digiblocks")}
                                value={daysLabel}
                                onChange={(value) => setAttributes({ daysLabel: value })}
                                placeholder={__("Days", "digiblocks")}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <TextControl
                                label={__("Hours Label", "digiblocks")}
                                value={hoursLabel}
                                onChange={(value) => setAttributes({ hoursLabel: value })}
                                placeholder={__("Hours", "digiblocks")}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <TextControl
                                label={__("Minutes Label", "digiblocks")}
                                value={minutesLabel}
                                onChange={(value) => setAttributes({ minutesLabel: value })}
                                placeholder={__("Minutes", "digiblocks")}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <TextControl
                                label={__("Seconds Label", "digiblocks")}
                                value={secondsLabel}
                                onChange={(value) => setAttributes({ secondsLabel: value })}
                                placeholder={__("Seconds", "digiblocks")}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__("Show Days", "digiblocks")}
                                checked={showDays}
                                onChange={() => setAttributes({ showDays: !showDays })}
								__nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Show Hours", "digiblocks")}
                                checked={showHours}
                                onChange={() => setAttributes({ showHours: !showHours })}
								__nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Show Minutes", "digiblocks")}
                                checked={showMinutes}
                                onChange={() => setAttributes({ showMinutes: !showMinutes })}
								__nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Show Seconds", "digiblocks")}
                                checked={showSeconds}
                                onChange={() => setAttributes({ showSeconds: !showSeconds })}
								__nextHasNoMarginBottom={true}
                            />
							
                            <ResponsiveControl
                                label={__("Items Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={itemSpacing && itemSpacing[localActiveDevice] !== undefined ? itemSpacing[localActiveDevice] : 20}
                                    onChange={(value) =>
                                        setAttributes({
                                            itemSpacing: {
                                                ...itemSpacing,
                                                [localActiveDevice]: value
                                            }
                                        })
                                    }
                                    min={0}
                                    max={100}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl
                                label={__("Label Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={labelSpacing && labelSpacing[localActiveDevice] !== undefined ? labelSpacing[localActiveDevice] : 5}
                                    onChange={(value) =>
                                        setAttributes({
                                            labelSpacing: {
                                                ...labelSpacing,
                                                [localActiveDevice]: value
                                            }
                                        })
                                    }
                                    min={0}
                                    max={50}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
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
														value: digitColor,
														onChange: (value) => setAttributes({ digitColor: value }),
														label: __("Digit Color", "digiblocks")
													},
													...(style === 'boxes' ? [
														{
															value: digitBackground,
															onChange: (value) => setAttributes({ digitBackground: value }),
															label: __("Box Background", "digiblocks")
														}
													] : []),
													{
														value: labelColor,
														onChange: (value) => setAttributes({ labelColor: value }),
														label: __("Label Color", "digiblocks")
													},
													...(displaySeparator ? [
														{
															value: separatorColor,
															onChange: (value) => setAttributes({ separatorColor: value }),
															label: __("Separator Color", "digiblocks")
														}
													] : []),
													...(style === 'boxes' && boxStyle === 'outlined' ? [
														{
															value: boxBorderColor,
															onChange: (value) => setAttributes({ boxBorderColor: value }),
															label: __("Border Color", "digiblocks")
														}
													] : [])
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
														value: digitHoverColor,
														onChange: (value) => setAttributes({ digitHoverColor: value }),
														label: __("Digit Color", "digiblocks")
													},
													...(style === 'boxes' ? [
														{
															value: digitHoverBackground,
															onChange: (value) => setAttributes({ digitHoverBackground: value }),
															label: __("Box Background", "digiblocks")
														}
													] : []),
													{
														value: labelHoverColor,
														onChange: (value) => setAttributes({ labelHoverColor: value }),
														label: __("Label Color", "digiblocks")
													},
													...(displaySeparator ? [
														{
															value: separatorHoverColor,
															onChange: (value) => setAttributes({ separatorHoverColor: value }),
															label: __("Separator Color", "digiblocks")
														}
													] : [])
												]}
											/>
                                        );
                                    }
                                }}
                            </TabPanel>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__("Digit Typography", "digiblocks")}
                                value={titleTypography}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 32, tablet: 28, mobile: 24 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                    fontWeight: '600'
                                }}
                            />

                            <TypographyControl
                                label={__("Label Typography", "digiblocks")}
                                value={contentTypography}
                                onChange={(value) => setAttributes({ contentTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.4 },
                                    lineHeightUnit: 'em'
                                }}
                            />
                        </TabPanelBody>

                        {style === 'boxes' && (
							<>
								<TabPanelBody
									tab="style"
									name="boxStyles"
									title={__("Box Style", "digiblocks")}
									initialOpen={false}
								>
									<ResponsiveControl
										label={__("Border Radius", "digiblocks")}
									>
										<DimensionControl
											values={boxBorderRadius && boxBorderRadius[localActiveDevice] ? boxBorderRadius[localActiveDevice] : {
												top: 4,
												right: 4,
												bottom: 4,
												left: 4,
												unit: 'px'
											}}
											onChange={(value) =>
												setAttributes({
													boxBorderRadius: {
														...boxBorderRadius,
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

									{boxStyle === 'outlined' && (
										<ResponsiveControl
											label={__("Border Width", "digiblocks")}
										>
											<DimensionControl
												values={boxBorderWidth && boxBorderWidth[localActiveDevice] ? boxBorderWidth[localActiveDevice] : {
													top: 1,
													right: 1,
													bottom: 1,
													left: 1,
													unit: 'px'
												}}
												onChange={(value) =>
													setAttributes({
														boxBorderWidth: {
															...boxBorderWidth,
															[localActiveDevice]: value,
														},
													})
												}
											/>
										</ResponsiveControl>
									)}
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
                        )}
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
							<ResponsiveControl
								label={__("Padding", "digiblocks")}
							>
								<DimensionControl
									values={boxPadding && boxPadding[localActiveDevice] ? boxPadding[localActiveDevice] : {
										top: 10,
										right: 10,
										bottom: 10,
										left: 10,
										unit: 'px'
									}}
									onChange={(value) =>
										setAttributes({
											boxPadding: {
												...boxPadding,
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
									values={boxMargin && boxMargin[localActiveDevice] ? boxMargin[localActiveDevice] : {
										top: 0,
										right: 0,
										bottom: 0,
										left: 0,
										unit: 'px'
									}}
									onChange={(value) =>
										setAttributes({
											boxMargin: {
												...boxMargin,
												[localActiveDevice]: value,
											},
										})
									}
								/>
							</ResponsiveControl>
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
                                        max={getMaxValue(horizontalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(horizontalOffset?.[localActiveDevice]?.unit)}
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
                                        max={getMaxValue(verticalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(verticalOffset?.[localActiveDevice]?.unit)}
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
									
									<NumberControl
										label={__("Animation Delay (ms)", "digiblocks")}
										value={animationDelay || 0}
										onChange={(value) => setAttributes({ animationDelay: parseInt(value) || 0 })}
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
                                        disabled={isAnimating}
                                        style={{ width: '100%' }}
                                    >
                                        {isAnimating ? __("Animating...", "digiblocks") : __("Preview Animation", "digiblocks")}
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
        className: `digiblocks-countdown ${id} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    // If no digit units are shown, display a message
    if (!showDays && !showHours && !showMinutes && !showSeconds) {
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

                <div {...blockProps} style={{ textAlign: align }}>
                    <div className="digiblocks-countdown-error">
                        {__("Please enable at least one time unit in the block settings.", "digiblocks")}
                    </div>
                </div>
            </>
        );
    }

    // Create the countdown display
    const renderCountdownItems = () => {
        const {
            days,
            hours,
            minutes,
            seconds
        } = timeRemaining;

        const items = [];

        // Days
        if (showDays) {
            items.push(
                <div key="days" className="digiblocks-countdown-item digiblocks-countdown-days">
                    <div className="digiblocks-countdown-item-inner">
                        {labelPosition === 'inside' ? (
                            <>
                                <div className="digiblocks-countdown-digit">{formatTime(days)}</div>
                                <div className="digiblocks-countdown-label">{daysLabel || __("Days", "digiblocks")}</div>
                            </>
                        ) : (
                            <div className="digiblocks-countdown-digit">{formatTime(days)}</div>
                        )}
                    </div>
                    {labelPosition !== 'inside' && (
                        <div className="digiblocks-countdown-label">{daysLabel || __("Days", "digiblocks")}</div>
                    )}
                </div>
            );

            // Add separator
            if (displaySeparator && (showHours || showMinutes || showSeconds)) {
                items.push(
                    <div key="days-separator" className="digiblocks-countdown-separator"></div>
                );
            }
        }

        // Hours
        if (showHours) {
            items.push(
                <div key="hours" className="digiblocks-countdown-item digiblocks-countdown-hours">
                    <div className="digiblocks-countdown-item-inner">
                        {labelPosition === 'inside' ? (
                            <>
                                <div className="digiblocks-countdown-digit">{formatTime(hours)}</div>
                                <div className="digiblocks-countdown-label">{hoursLabel || __("Hours", "digiblocks")}</div>
                            </>
                        ) : (
                            <div className="digiblocks-countdown-digit">{formatTime(hours)}</div>
                        )}
                    </div>
                    {labelPosition !== 'inside' && (
                        <div className="digiblocks-countdown-label">{hoursLabel || __("Hours", "digiblocks")}</div>
                    )}
                </div>
            );

            // Add separator
            if (displaySeparator && (showMinutes || showSeconds)) {
                items.push(
                    <div key="hours-separator" className="digiblocks-countdown-separator"></div>
                );
            }
        }

        // Minutes
        if (showMinutes) {
            items.push(
                <div key="minutes" className="digiblocks-countdown-item digiblocks-countdown-minutes">
                    <div className="digiblocks-countdown-item-inner">
                        {labelPosition === 'inside' ? (
                            <>
                                <div className="digiblocks-countdown-digit">{formatTime(minutes)}</div>
                                <div className="digiblocks-countdown-label">{minutesLabel || __("Minutes", "digiblocks")}</div>
                            </>
                        ) : (
                            <div className="digiblocks-countdown-digit">{formatTime(minutes)}</div>
                        )}
                    </div>
                    {labelPosition !== 'inside' && (
                        <div className="digiblocks-countdown-label">{minutesLabel || __("Minutes", "digiblocks")}</div>
                    )}
                </div>
            );

            // Add separator
            if (displaySeparator && showSeconds) {
                items.push(
                    <div key="minutes-separator" className="digiblocks-countdown-separator"></div>
                );
            }
        }

        // Seconds
        if (showSeconds) {
            items.push(
                <div key="seconds" className="digiblocks-countdown-item digiblocks-countdown-seconds">
                    <div className="digiblocks-countdown-item-inner">
                        {labelPosition === 'inside' ? (
                            <>
                                <div className="digiblocks-countdown-digit">{formatTime(seconds)}</div>
                                <div className="digiblocks-countdown-label">{secondsLabel || __("Seconds", "digiblocks")}</div>
                            </>
                        ) : (
                            <div className="digiblocks-countdown-digit">{formatTime(seconds)}</div>
                        )}
                    </div>
                    {labelPosition !== 'inside' && (
                        <div className="digiblocks-countdown-label">{secondsLabel || __("Seconds", "digiblocks")}</div>
                    )}
                </div>
            );
        }

        return items;
    };

    // Is countdown expired?
    const isCountdownExpired = timeRemaining.days === 0 && 
                               timeRemaining.hours === 0 && 
                               timeRemaining.minutes === 0 && 
                               timeRemaining.seconds === 0;

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
                {isCountdownExpired ? (
                    <div className="digiblocks-countdown-expired">
                        {expiredMessage || __("Time's up!", "digiblocks")}
                    </div>
                ) : (
                    <div className="digiblocks-countdown-container">
                        {renderCountdownItems()}
                    </div>
                )}
            </div>
        </>
    );
};

export default CountdownEdit;