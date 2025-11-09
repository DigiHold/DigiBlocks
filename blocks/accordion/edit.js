/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings
} = wp.blockEditor;
const {
    TextControl,
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    TabPanel
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Edit function for the Accordion block
 */
const AccordionEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        items,
        titleColor,
        titleHoverColor,
        titleActiveColor,
        backgroundColor,
        backgroundHoverColor,
        backgroundActiveColor,
        contentColor,
        contentHoverColor,
        borderColor,
        borderHoverColor,
        borderRadius,
        borderWidth,
        borderStyle,
        boxShadow,
        boxShadowHover,
        padding,
        margin,
        titleTypography,
        contentTypography,
        iconPosition,
        iconColor,
        iconHoverColor,
        iconActiveColor,
        iconSize,
        animation,
		animationDuration,
		animationDelay,
        allowMultipleOpen,
        iconType,
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

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
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
    
    // State for color tabs
    const [titleColorTab, setTitleColorTab] = useState("normal");
    const [backgroundColorTab, setBackgroundColorTab] = useState("normal");
    const [iconColorTab, setIconColorTab] = useState("normal");
    const [borderColorTab, setBorderColorTab] = useState("normal");
    const [contentColorTab, setContentColorTab] = useState("normal");

    // Add a new accordion item
    const addItem = () => {
        const newItems = [...items, {
            id: `item-${items.length + 1}-${Date.now().toString(36)}`,
            title: __('New Accordion Item', 'digiblocks'),
            content: __('Add your content here.', 'digiblocks'),
            isOpen: false
        }];
        setAttributes({ items: newItems });
    };

    // Remove an item
    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setAttributes({ items: newItems });
    };

    // Handle title change for an item
    const updateItemTitle = (title, index) => {
        const newItems = [...items];
        newItems[index].title = title;
        setAttributes({ items: newItems });
    };

    // Handle content change for an item
    const updateItemContent = (content, index) => {
        const newItems = [...items];
        newItems[index].content = content;
        setAttributes({ items: newItems });
    };

    // Toggle the open state of an item
    const toggleItem = (index) => {
        const newItems = [...items];
        
        if (!allowMultipleOpen) {
            // Close all other items
            newItems.forEach((item, i) => {
                if (i !== index) {
                    newItems[i].isOpen = false;
                }
            });
        }
        
        // Toggle the clicked item
        newItems[index].isOpen = !newItems[index].isOpen;
        setAttributes({ items: newItems });
    };

    // Move an item up
    const moveItemUp = (index) => {
        if (index === 0) return;
        const newItems = [...items];
        const temp = newItems[index];
        newItems[index] = newItems[index - 1];
        newItems[index - 1] = temp;
        setAttributes({ items: newItems });
    };

    // Move an item down
    const moveItemDown = (index) => {
        if (index === items.length - 1) return;
        const newItems = [...items];
        const temp = newItems[index];
        newItems[index] = newItems[index + 1];
        newItems[index + 1] = temp;
        setAttributes({ items: newItems });
    };

	// Duplicate item function
	const duplicateItem = (index) => {
		const itemToDuplicate = items[index];
		const timestamp = Date.now();
		const newItem = {
			...itemToDuplicate,
			id: `accordion-item-${clientId.substr(0, 8)}-${timestamp}`,
			isOpen: false
		};
		
		const newItems = [...items];
		newItems.splice(index + 1, 0, newItem);
		setAttributes({
			items: newItems
		});
	};

    // Border style options
    const borderStyleOptions = [
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

    // Animation options - using the same as the Icon Box block
    const animationOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        ...Object.keys(animations).map((animation) => ({
            label: animation
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
            value: animation,
        })),
    ];

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

    // Define the tabs for the custom tab panel
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

    // Function to render icons based on iconType and state
    const renderItemIcon = (isOpen) => {
        const size = getVal(iconSize, localActiveDevice) || 16;

        if (iconType === 'plusMinus') {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={isOpen ? "M19 13H5v-2h14v2z" : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"} />
                </svg>
            );
        } else if (iconType === 'arrowUpDown') {
            return (
                <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={isOpen ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"} />
                </svg>
            );
        }

        return null;
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

    // Generate CSS for all styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Border styles
		let borderCSS = '';
		if (borderStyle && borderStyle !== 'none') {
			const currentBorderWidth = {
				top: getVal({ desktop: borderWidth.desktop?.top || 1, tablet: borderWidth.tablet?.top || '', mobile: borderWidth.mobile?.top || '' }, activeDevice),
				right: getVal({ desktop: borderWidth.desktop?.right || 1, tablet: borderWidth.tablet?.right || '', mobile: borderWidth.mobile?.right || '' }, activeDevice),
				bottom: getVal({ desktop: borderWidth.desktop?.bottom || 1, tablet: borderWidth.tablet?.bottom || '', mobile: borderWidth.mobile?.bottom || '' }, activeDevice),
				left: getVal({ desktop: borderWidth.desktop?.left || 1, tablet: borderWidth.tablet?.left || '', mobile: borderWidth.mobile?.left || '' }, activeDevice),
				unit: getVal({ desktop: borderWidth.desktop?.unit || 'px', tablet: borderWidth.tablet?.unit || '', mobile: borderWidth.mobile?.unit || '' }, activeDevice)
			};
			const currentBorderRadius = {
				top: getVal({ desktop: borderRadius.desktop?.top || 8, tablet: borderRadius.tablet?.top || '', mobile: borderRadius.mobile?.top || '' }, activeDevice),
				right: getVal({ desktop: borderRadius.desktop?.right || 8, tablet: borderRadius.tablet?.right || '', mobile: borderRadius.mobile?.right || '' }, activeDevice),
				bottom: getVal({ desktop: borderRadius.desktop?.bottom || 8, tablet: borderRadius.tablet?.bottom || '', mobile: borderRadius.mobile?.bottom || '' }, activeDevice),
				left: getVal({ desktop: borderRadius.desktop?.left || 8, tablet: borderRadius.tablet?.left || '', mobile: borderRadius.mobile?.left || '' }, activeDevice),
				unit: getVal({ desktop: borderRadius.desktop?.unit || 'px', tablet: borderRadius.tablet?.unit || '', mobile: borderRadius.mobile?.unit || '' }, activeDevice)
			};
			
			borderCSS = `
				border-style: ${borderStyle};
				border-color: ${borderColor || '#e0e0e0'};
				border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
				border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
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

		// Box shadow hover
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const inset = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Padding and margin
		const currentPadding = {
			top: getVal({ desktop: padding.desktop?.top || 20, tablet: padding.tablet?.top || '', mobile: padding.mobile?.top || '' }, activeDevice),
			right: getVal({ desktop: padding.desktop?.right || 20, tablet: padding.tablet?.right || '', mobile: padding.mobile?.right || '' }, activeDevice),
			bottom: getVal({ desktop: padding.desktop?.bottom || 20, tablet: padding.tablet?.bottom || '', mobile: padding.mobile?.bottom || '' }, activeDevice),
			left: getVal({ desktop: padding.desktop?.left || 20, tablet: padding.tablet?.left || '', mobile: padding.mobile?.left || '' }, activeDevice),
			unit: getVal({ desktop: padding.desktop?.unit || 'px', tablet: padding.tablet?.unit || '', mobile: padding.mobile?.unit || '' }, activeDevice)
		};
		const currentMargin = {
			top: getVal({ desktop: margin.desktop?.top || 0, tablet: margin.tablet?.top || '', mobile: margin.mobile?.top || '' }, activeDevice),
			right: getVal({ desktop: margin.desktop?.right || 0, tablet: margin.tablet?.right || '', mobile: margin.mobile?.right || '' }, activeDevice),
			bottom: getVal({ desktop: margin.desktop?.bottom || 30, tablet: margin.tablet?.bottom || '', mobile: margin.mobile?.bottom || '' }, activeDevice),
			left: getVal({ desktop: margin.desktop?.left || 0, tablet: margin.tablet?.left || '', mobile: margin.mobile?.left || '' }, activeDevice),
			unit: getVal({ desktop: margin.desktop?.unit || 'px', tablet: margin.tablet?.unit || '', mobile: margin.mobile?.unit || '' }, activeDevice)
		};
		const paddingCSS = `padding: ${currentPadding.top}${currentPadding.unit} ${currentPadding.right}${currentPadding.unit} ${currentPadding.bottom}${currentPadding.unit} ${currentPadding.left}${currentPadding.unit};`;
		const marginCSS = `margin: ${currentMargin.top}${currentMargin.unit} ${currentMargin.right}${currentMargin.unit} ${currentMargin.bottom}${currentMargin.unit} ${currentMargin.left}${currentMargin.unit};`;
        
		// Title typography CSS
        let titleTypographyCSS = '';
        if (titleTypography) {
            if (titleTypography.fontFamily) {
                titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
            }
            
            const titleFontSize = getVal(titleTypography.fontSize || { desktop: { value: 18, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }, activeDevice);
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
            
            const titleLineHeight = getVal(titleTypography.lineHeight || { desktop: { value: 1.5, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } }, activeDevice);
			if (titleLineHeight && titleLineHeight.value !== "" && titleLineHeight.value !== null && titleLineHeight.value !== undefined) {
				titleTypographyCSS += `line-height: ${titleLineHeight.value}${titleLineHeight.unit !== null ? titleLineHeight.unit : ''};`;
			}
						
			const titleLetterSpacing = getVal(titleTypography.letterSpacing || { desktop: { value: 0, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }, activeDevice);
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
			
			const contentFontSize = getVal(contentTypography.fontSize || { desktop: { value: 16, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }, activeDevice);
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
			
			const contentLineHeight = getVal(contentTypography.lineHeight || { desktop: { value: 1.5, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } }, activeDevice);
			if (contentLineHeight && contentLineHeight.value !== "" && contentLineHeight.value !== null && contentLineHeight.value !== undefined) {
				contentTypographyCSS += `line-height: ${contentLineHeight.value}${contentLineHeight.unit !== null ? contentLineHeight.unit : ''};`;
			}
			
			const contentLetterSpacing = getVal(contentTypography.letterSpacing || { desktop: { value: 0, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }, activeDevice);
			if (contentLetterSpacing && contentLetterSpacing.value !== "" && contentLetterSpacing.value !== null && contentLetterSpacing.value !== undefined) {
				contentTypographyCSS += `letter-spacing: ${contentLetterSpacing.value}${contentLetterSpacing.unit !== null ? contentLetterSpacing.unit : ''};`;
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
        
        // Assemble the full CSS
        return `
            /* Accordion item */
            .${id} {
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }

            .${id} .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${backgroundColor || '#ffffff'};
                ${borderCSS}
                ${boxShadowCSS}
				${marginCSS}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            .${id} .digiblocks-accordion-item:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
				${boxShadowHover && boxShadowHover.enable ? boxShadowHoverCSS : ''}
            }
            
            /* Accordion header */
            .${id} .digiblocks-accordion-header {
                position: relative;
                cursor: pointer;
                ${paddingCSS}
                display: flex;
                align-items: center;
                justify-content: space-between;
				gap: .75rem;
                ${iconPosition === 'left' ? 'flex-direction: row-reverse;' : ''}
                ${iconPosition === 'left' ? 'justify-content: flex-end;' : ''}
                transition: background-color 0.3s ease;
            }
            
            /* Accordion title */
            .${id} .digiblocks-accordion-title {
                margin: 0;
                color: ${titleColor};
                flex: 1;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for title */
            .${id} .digiblocks-accordion-header:hover .digiblocks-accordion-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            }
            
            /* Accordion title active state */
            .${id} .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${titleActiveColor || '#1e73be'};
            }
            
            /* Accordion icon */
            .${id} .digiblocks-accordion-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* SVG icon fill color */
            .${id} .digiblocks-accordion-icon svg {
                fill: ${iconColor};
                width: ${getVal(iconSize, activeDevice)}px;
				height: ${getVal(iconSize, activeDevice)}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            .${id} .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
            }
            
            /* Active icon color */
            .${id} .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${iconActiveColor || '#1e73be'};
            }
            
            /* Active header background */
            .${id} .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${backgroundActiveColor || '#f7f7f7'};
            }
            
            /* Accordion content */
            .${id} .digiblocks-accordion-content {
                overflow: hidden;
                ${paddingCSS}
                color: ${contentColor || '#666666'};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            .${id} .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${contentHoverColor ? `color: ${contentHoverColor};` : ''}
            }
            
            .${id} .digiblocks-accordion-content p:first-child {
                margin-top: 0;
            }
            
            .${id} .digiblocks-accordion-content p:last-child {
                margin-bottom: 0;
            }
            
            /* Item controls in editor */
			.${id} .digiblocks-accordion-item {
				position: relative;
			}

			.${id} .digiblocks-accordion-item-controls {
				display: flex;
				gap: 5px;
				position: absolute;
				right: 10px;
				top: 0;
				background-color: #fff;
				padding: 2px;
				border-radius: 3px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.12);
				z-index: 10;
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
						<div className="components-panel__body is-opened">
                            <ToggleControl
                                label={__("Allow Multiple Open", "digiblocks")}
                                checked={allowMultipleOpen}
                                onChange={(value) => setAttributes({ allowMultipleOpen: value })}
                                help={__("If enabled, multiple accordion items can be open at the same time.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleGroupControl
                                label={__("Icon Type", "digiblocks")}
                                value={iconType}
                                onChange={(value) => setAttributes({ iconType: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="plusMinus" 
                                    label={__("Plus/Minus", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="arrowUpDown" 
                                    label={__("Up/Down", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
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
                                    min={12}
                                    max={48}
                                    step={1}
                                    __nextHasNoMarginBottom={true}
                                    __next40pxDefaultSize={true}
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
                            {/* Single tab control for all colors */}
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={[
                                    {
                                        name: 'normal',
                                        title: __('Normal', 'digiblocks'),
                                        className: 'digiblocks-tab-1 normal',
                                    },
                                    {
                                        name: 'hover',
                                        title: __('Hover', 'digiblocks'),
                                        className: 'digiblocks-tab-2 hover',
                                    },
                                ]}
                                onSelect={(tabName) => {
                                    setTitleColorTab(tabName);
                                    setBackgroundColorTab(tabName);
                                    setIconColorTab(tabName);
                                    setBorderColorTab(tabName);
                                    setContentColorTab(tabName);
                                }}
                            >
                                {(tab) => {
                                    if (tab.name === 'normal') {
                                        return (
                                            <>
                                                <PanelColorSettings
                                                    title={__("Title Colors", "digiblocks")}
                                                    initialOpen={true}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: titleColor,
                                                            onChange: (value) => setAttributes({ titleColor: value }),
                                                            label: __("Title Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: titleActiveColor,
                                                            onChange: (value) => setAttributes({ titleActiveColor: value }),
                                                            label: __("Active Title Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Icon Colors", "digiblocks")}
                                                    initialOpen={false}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: iconColor,
                                                            onChange: (value) => setAttributes({ iconColor: value }),
                                                            label: __("Icon Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: iconActiveColor,
                                                            onChange: (value) => setAttributes({ iconActiveColor: value }),
                                                            label: __("Active Icon Color", "digiblocks"),
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
                                                            label: __("Background Color", "digiblocks"),
                                                        },
                                                        {
                                                            value: backgroundActiveColor,
                                                            onChange: (value) => setAttributes({ backgroundActiveColor: value }),
                                                            label: __("Active Background Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Content Colors", "digiblocks")}
                                                    initialOpen={false}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: contentColor,
                                                            onChange: (value) => setAttributes({ contentColor: value }),
                                                            label: __("Content Text Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Border Colors", "digiblocks")}
                                                    initialOpen={false}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: borderColor,
                                                            onChange: (value) => setAttributes({ borderColor: value }),
                                                            label: __("Border Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                            </>
                                        );
                                    } else {
                                        return (
                                            <>
                                                <PanelColorSettings
                                                    title={__("Title Hover Colors", "digiblocks")}
                                                    initialOpen={true}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: titleHoverColor,
                                                            onChange: (value) => setAttributes({ titleHoverColor: value }),
                                                            label: __("Title Hover Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Icon Hover Colors", "digiblocks")}
                                                    initialOpen={false}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: iconHoverColor,
                                                            onChange: (value) => setAttributes({ iconHoverColor: value }),
                                                            label: __("Icon Hover Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Background Hover Colors", "digiblocks")}
                                                    initialOpen={false}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: backgroundHoverColor,
                                                            onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                                                            label: __("Background Hover Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Content Hover Colors", "digiblocks")}
                                                    initialOpen={false}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: contentHoverColor,
                                                            onChange: (value) => setAttributes({ contentHoverColor: value }),
                                                            label: __("Content Hover Color", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                                
                                                <PanelColorSettings
                                                    title={__("Border Hover Colors", "digiblocks")}
                                                    initialOpen={false}
													enableAlpha={true}
                                                    colorSettings={[
                                                        {
                                                            value: borderHoverColor,
                                                            onChange: (value) => setAttributes({ borderHoverColor: value }),
                                                            label: __("Border Hover Color", "digiblocks"),
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
							name="typo"
							title={__("Typography", "digiblocks")}
							initialOpen={false}
						>
                            <TypographyControl
                                label={__("Title Typography", "digiblocks")}
                                value={titleTypography}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                            />
                            
                            <TypographyControl
                                label={__("Content Typography", "digiblocks")}
                                value={contentTypography}
                                onChange={(value) => setAttributes({ contentTypography: value })}
                            />
                        </TabPanelBody>
                        
						<TabPanelBody
							tab="style"
							name="border"
							title={__("Border & Shadow", "digiblocks")}
							initialOpen={false}
						>
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize={true}
                            />
                            
                            {borderStyle !== 'none' && (
                                <>
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
                                label={__("Animation", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize={true}
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
        className: `digiblocks-accordion ${id} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    return (
        <>
            <InspectorControls>
                <CustomTabPanel
                    tabs={tabList}
                    activeTab={activeTab}
                    onSelect={(tab) => {
                        // Prevent default focus behavior that causes scrolling
                        requestAnimationFrame(() => {
                            setActiveTab(tab);
                        });
                    }}
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className="digiblocks-accordion-wrapper">
                    {items.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`digiblocks-accordion-item ${item.isOpen ? 'is-active' : ''}`}
                        >
                            <div className="digiblocks-accordion-header" onClick={() => toggleItem(index)}>
                                <RichText
                                    tagName="h4"
                                    className="digiblocks-accordion-title"
                                    value={item.title}
                                    onChange={(value) => updateItemTitle(value, index)}
                                    placeholder={__("Accordion Title", "digiblocks")}
                                />
                                <span className="digiblocks-accordion-icon">
                                    {renderItemIcon(item.isOpen)}
                                </span>
                            </div>
                            
                            <div 
                                className="digiblocks-accordion-content" 
                                style={{ display: item.isOpen ? 'block' : 'none' }}
                            >
                                <RichText
                                    tagName="div"
                                    value={item.content}
                                    onChange={(value) => updateItemContent(value, index)}
                                    placeholder={__("Add your content here.", "digiblocks")}
                                />
                            </div>
                            
                            {/* Item Controls */}
							<div className="digiblocks-accordion-item-controls">
								<Tooltip text={__('Move Up', 'digiblocks')}>
									<Button
										className="digiblocks-accordion-item-move-up"
										onClick={(e) => {
											e.stopPropagation();
											moveItemUp(index);
										}}
										icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>}
										disabled={index === 0}
										isSmall
									/>
								</Tooltip>
								<Tooltip text={__('Move Down', 'digiblocks')}>
									<Button
										className="digiblocks-accordion-item-move-down"
										onClick={(e) => {
											e.stopPropagation();
											moveItemDown(index);
										}}
										icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>}
										disabled={index === items.length - 1}
										isSmall
									/>
								</Tooltip>
								<Tooltip text={__('Duplicate', 'digiblocks')}>
									<Button
										className="digiblocks-accordion-item-duplicate"
										onClick={(e) => {
											e.stopPropagation();
											duplicateItem(index);
										}}
										icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"/></svg>}
										isSmall
									/>
								</Tooltip>
								<Tooltip text={__('Remove', 'digiblocks')}>
									<Button
										className="digiblocks-accordion-item-remove"
										onClick={(e) => {
											e.stopPropagation();
											removeItem(index);
										}}
										icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"/></svg>}
										isSmall
									/>
								</Tooltip>
							</div>
                        </div>
                    ))}
                    
                    {/* Add item button */}
                    <Button
						variant="primary"
						icon="plus"
						onClick={addItem}
                        style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}
					>
						{__("Add Accordion Item", "digiblocks")}
					</Button>
                </div>
            </div>
        </>
    );
};

export default AccordionEdit;