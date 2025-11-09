/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    LinkControl
} = wp.blockEditor;
const {
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    TabPanel,
    Spinner,
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
const { ResponsiveButtonGroup, ResponsiveRangeControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Edit function for the Icon block
 */
const IconEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
		iconSource,
        customSvg,
        iconValue,
        iconSize,
        iconHeight,
        iconColor,
        iconBackgroundColor,
        iconBorderStyle,
        iconBorderWidth,
        iconBorderRadius,
        iconBorderColor,
        iconPadding,
        iconMargin,
        iconHoverColor,
        iconHoverBackgroundColor,
        iconHoverBorderColor,
        backgroundColor,
        backgroundHoverColor,
        align,
        animation,
		animationDuration,
		animationDelay,
        boxShadow,
        boxShadowHover,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        hoverEffect,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
        rotateIcon,
        flipHorizontal,
        flipVertical,
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
			return !isEmpty(obj.mobile) ? obj.mobile :
				!isEmpty(obj.tablet) ? obj.tablet :
				obj.desktop;
		}
		if (device === 'tablet') {
			return !isEmpty(obj.tablet) ? obj.tablet : obj.desktop;
		}
		return obj.desktop;
	};

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    
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
    
    // Use useEffect to set the ID only once when component mounts and initialize missing attributes
    useEffect(() => {
        // Initialize iconMargin if it's null
        if (!iconMargin) {
            setAttributes({
                iconMargin: {
                    desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                    tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                    mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
                }
            });
        }
    }, [iconMargin, setAttributes]);

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

	const getMaxValue = (unit) => {
		switch (unit) {
			case '%':
				return 100;
			case 'em':
			case 'rem':
				return 10;
			case 'px':
			default:
				return 1000;
		}
	};

	const getStepValue = (unit) => {
		switch (unit) {
			case '%':
			case 'em':
			case 'rem':
				return 0.1;
			case 'px':
			default:
				return 1;
		}
	};

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
        { label: __("Spin", "digiblocks"), value: "spin" },
        { label: __("Pulse", "digiblocks"), value: "pulse" },
        { label: __("Shake", "digiblocks"), value: "shake" },
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
        
        // Container styles
        let containerStyles = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
            containerStyles += `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
            `;
        }
        
        // Box shadow
        let boxShadowCSS = '';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Icon styles - only apply if an icon exists
        let iconCSS = '';
        let iconHoverCSS = '';
        let iconTransformCSS = '';
        
        // Only process icon styles if an icon actually exists
        if (iconValue && iconValue.svg) {
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
            
            // Icon transform properties for rotation and flip
            const transformProps = [];
            
            if (rotateIcon) {
                transformProps.push(`rotate(${rotateIcon}deg)`);
            }
            
            if (flipHorizontal) {
                transformProps.push('scaleX(-1)');
            }
            
            if (flipVertical) {
                transformProps.push('scaleY(-1)');
            }
            
            if (transformProps.length > 0) {
                iconTransformCSS = `transform: ${transformProps.join(' ')};`;
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
        } else if (hoverEffect === 'spin') {
            hoverCSS += 'animation: digiblocks-icon-spin 2s linear infinite;';
        } else if (hoverEffect === 'pulse') {
            hoverCSS += 'animation: digiblocks-icon-pulse 1.5s ease-in-out infinite;';
        } else if (hoverEffect === 'shake') {
            hoverCSS += 'animation: digiblocks-icon-shake 0.5s ease-in-out infinite;';
        }
        
        // Link styles
        let linkCSS = '';
        if (linkEnabled) {
            linkCSS = `
                cursor: pointer;
                text-decoration: none;
            `;
        }
        
        // Margin handling
        let marginCSS = '';
        if (iconMargin && iconMargin[activeDevice]) {
            marginCSS = `${getDimensionCSS(iconMargin, 'margin', activeDevice)}`;
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
            /* Icon Block - ${id} */
            .${id} {
                display: flex;
				justify-content: ${getVal(align, activeDevice)};
                align-items: center;
                background-color: ${backgroundColor || 'transparent'};
                ${boxShadowCSS}
                ${containerStyles}
                transition: all 0.3s ease;
                ${linkEnabled ? linkCSS : ''}
                ${marginCSS}
                ${positionCSS}
				${transformCSS}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            /* Icon styles */
            .${id} .digiblocks-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${iconCSS}
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-icon span {
                display: flex;
                ${iconTransformCSS}
            }
            
            .${id} .digiblocks-icon svg {
				width: ${(() => {
					const sizeObj = getVal(iconSize, activeDevice);
					return (sizeObj && sizeObj.value !== "" && sizeObj.value !== undefined && sizeObj.value !== null) ? `${sizeObj.value}${sizeObj.unit !== null ? sizeObj.unit : ''}` : '48px';
				})()};
				height: ${(() => {
					const heightObj = getVal(iconHeight, activeDevice);
					return (heightObj && heightObj.value !== "" && heightObj.value !== undefined && heightObj.value !== null) ? `${heightObj.value}${heightObj.unit !== null ? heightObj.unit : ''}` : 'auto';
				})()};
				fill: ${iconColor || 'inherit'};
				transition: all 0.3s ease;
			}
            
            /* Icon hover styles */
            .${id}:hover .digiblocks-icon {
                ${iconHoverCSS}
            }
            
            .${id}:hover .digiblocks-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
            }
            
            /* Hover effect animations */
            @keyframes digiblocks-icon-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            @keyframes digiblocks-icon-pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            @keyframes digiblocks-icon-shake {
                0% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                50% { transform: translateX(0); }
                75% { transform: translateX(5px); }
                100% { transform: translateX(0); }
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
		// For library icons, use the existing approach
		if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
			return (
				<div className="digiblocks-icon">
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
				<div className="digiblocks-icon">
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

    // Render icon tab content based on active tab
    const renderIconTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Icon Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: iconBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconBackgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                    
                    {/* Icon Border Controls */}
                    <SelectControl
                        label={__("Border Style", "digiblocks")}
                        value={iconBorderStyle || 'default'}
                        options={borderStyleOptions}
                        onChange={(value) => {
                            // Initialize border width and radius with defaults when a style is first selected
                            if ((value !== 'default' && value !== 'none') && 
                                (iconBorderStyle === 'default' || iconBorderStyle === 'none' || !iconBorderStyle)) {
                                // Set initial border width if not already set
                                if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                                    setAttributes({
                                        iconBorderWidth: {
                                            desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                            tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                            mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                        }
                                    });
                                }
                            }
                            
                            setAttributes({
                                iconBorderStyle: value,
                            });
                        }}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    {/* Show border width and border radius controls only if a border style is selected */}
                    {iconBorderStyle && iconBorderStyle !== 'default' && iconBorderStyle !== 'none' && (
                        <>
                            {/* Border Color */}
                            <PanelColorSettings
                                title={__(
                                    "Border Color",
                                    "digiblocks"
                                )}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: iconBorderColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                iconBorderColor: value,
                                            }),
                                        label: __(
                                            "Border Color",
                                            "digiblocks"
                                        ),
                                    },
                                ]}
                            />
                            
                            {/* Border Width */}
                            <DimensionControl
								label={__("Border Width", "digiblocks")}
								value={iconBorderWidth}
								onChange={(value) => setAttributes({ iconBorderWidth: value })}
							/>
                            
                            {/* Border Radius */}
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
                    
                    {/* Icon Padding */}
                    <DimensionControl
						label={__("Padding", "digiblocks")}
						value={iconPadding}
						onChange={(value) => setAttributes({ iconPadding: value })}
					/>
                    
                    {/* Icon Margin */}
                    <DimensionControl
						label={__("Margin", "digiblocks")}
						value={iconMargin}
						onChange={(value) => setAttributes({ iconMargin: value })}
					/>
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Icon Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconHoverColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: iconHoverBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconHoverBackgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: iconHoverBorderColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconHoverBorderColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };

    // Render container tab content based on active tab
    const renderContainerTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Container Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: backgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Container Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: backgroundHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundHoverColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
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
                        <div className="components-panel__body is-opened">
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

                            {/* Icon transform controls */}
                            <div className="icon-transform-controls">
                                <RangeControl
                                    label={__("Rotate", "digiblocks")}
                                    value={rotateIcon || 0}
                                    onChange={(value) => setAttributes({ rotateIcon: value })}
                                    min={0}
                                    max={360}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                                
                                <div className="digiblocks-toggle-controls" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <ToggleGroupControl
                                        label={__("Flip Horizontal", "digiblocks")}
                                        value={flipHorizontal ? 'yes' : 'no'}
                                        onChange={(value) => setAttributes({ flipHorizontal: value === 'yes' })}
                                        isBlock
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
											value="no"
											label={__("Off", "digiblocks")}
										/>
                                        <ToggleGroupControlOption
											value="yes"
											label={__("On", "digiblocks")}
										/>
                                    </ToggleGroupControl>
                                </div>

                                <div className="digiblocks-toggle-controls" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <ToggleGroupControl
                                        label={__("Flip Vertical", "digiblocks")}
                                        value={flipVertical ? 'yes' : 'no'}
                                        onChange={(value) => setAttributes({ flipVertical: value === 'yes' })}
                                        isBlock
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
											value="no"
											label={__("Off", "digiblocks")}
										/>
                                        <ToggleGroupControlOption
											value="yes"
											label={__("On", "digiblocks")}
										/>
                                    </ToggleGroupControl>
                                </div>
                            </div>

                            {/* Link settings */}
                            {!linkEnabled ? (
                                <div className="components-base-control">
                                    <div className="components-base-control__field">
                                        <button
                                            className="components-button width-full is-primary"
                                            onClick={() => setAttributes({ linkEnabled: true })}
                                        >
                                            {__("Add Link", "digiblocks")}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <LinkControl
                                    key="link-control"
                                    value={{
                                        url: linkUrl,
                                        opensInNewTab: linkOpenInNewTab,
                                        rel: linkRel
                                    }}
                                    settings={[
                                        {
                                            id: 'opensInNewTab',
                                            title: __('Open in new tab', 'digiblocks'),
                                        },
                                        {
                                            id: 'rel',
                                            title: __('Add noopener noreferrer', 'digiblocks'),
                                        },
                                    ]}
                                    onChange={(newLink) => {
                                        setAttributes({
                                            linkUrl: newLink.url,
                                            linkOpenInNewTab: newLink.opensInNewTab,
                                            linkRel: newLink.rel
                                        });
                                    }}
                                    onRemove={() => {
                                        setAttributes({
                                            linkEnabled: false,
                                            linkUrl: '',
                                            linkOpenInNewTab: false,
                                            linkRel: ''
                                        });
                                    }}
                                    suggestionsQuery={{
                                        type: 'post',
                                        subtype: 'any',
                                    }}
                                    forceIsEditingLink={!linkUrl}
                                />
                            )}
                        </div>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="icon"
                            title={__("Icon", "digiblocks")}
                            initialOpen={true}
                        >
                            <ResponsiveRangeControl
								label={__("Icon Width", "digiblocks")}
								value={iconSize}
								onChange={(value) => setAttributes({ iconSize: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								defaultValues={{ desktop: { value: 48, unit: 'px' }, tablet: { value: '', unit: '' }, mobile: { value: '', unit: '' } }}
								min={0}
								max={getMaxValue(iconSize?.[localActiveDevice]?.unit || 'px')}
								step={getStepValue(iconSize?.[localActiveDevice]?.unit || 'px')}
							/>

							<ResponsiveRangeControl
								label={__("Icon Height", "digiblocks")}
								value={iconHeight}
								onChange={(value) => setAttributes({ iconHeight: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								defaultUnit="px"
								min={0}
								max={getMaxValue(iconHeight?.[localActiveDevice]?.unit)}
								step={getStepValue(iconHeight?.[localActiveDevice]?.unit)}
							/>

                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderIconTabContent(tab.name)}
                            </TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="container"
                            title={__("Container", "digiblocks")}
                            initialOpen={false}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderContainerTabContent(tab.name)}
                            </TabPanel>
                            
                            {/* Border Style Dropdown */}
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
                                                    tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                                }
                                            });
                                        }
                                        
                                        // Set initial border radius if not already set
                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                            setAttributes({
                                                borderRadius: {
                                                    desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                                                    tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                                                    mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
                                                }
                                            });
                                        }
                                    }
                                    
                                    setAttributes({
                                        borderStyle: value,
                                    });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border width and border radius controls only if a border style is selected */}
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    {/* Border Color */}
                                    <PanelColorSettings
                                        title={__(
                                            "Border Color",
                                            "digiblocks"
                                        )}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) =>
                                                    setAttributes({
                                                        borderColor: value,
                                                    }),
                                                label: __(
                                                    "Border Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                    
                                    {/* Border Width */}
                                    <DimensionControl
                                        label={__("Border Width", "digiblocks")}
                                        value={borderWidth}
                                        onChange={(value) => setAttributes({ borderWidth: value })}
                                    />

                                    {/* Border Radius */}
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
                                label={__(
                                    "Hover Effect",
                                    "digiblocks"
                                )}
                                value={hoverEffect}
                                options={hoverEffectOptions}
                                onChange={(value) =>
                                    setAttributes({
                                        hoverEffect: value,
                                    })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
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
                                label={__(
                                    "Animation Effect",
                                    "digiblocks"
                                )}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) =>
                                    setAttributes({
                                        animation: value,
                                    })
                                }
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
        className: `digiblocks-icon ${id} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
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
                {renderIcon()}
            </div>
        </>
    );
};

export default IconEdit;