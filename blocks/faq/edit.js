/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    TextControl,
    Tooltip,
    TabPanel,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
	__experimentalNumberControl: NumberControl,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Edit function for the FAQ block
 */
const FAQEdit = ({ attributes, setAttributes, clientId }) => {
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
        contentBackgroundColor,
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
        titleTag,
        questionPrefix,
        questionPrefixColor,
        answerPrefix,
        answerPrefixColor,
        layout,
        itemsSpacing,
        schemaType,
        schemaName,
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

    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});

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
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Initialize items with IDs if needed
        if (items && items.length > 0) {
            const updatedItems = items.map((item, index) => {
                if (!item.id) {
                    return { ...item, id: `faq-item-${clientId.substr(0, 8)}-${index}` };
                }
                return item;
            });
            
            if (JSON.stringify(updatedItems) !== JSON.stringify(items)) {
                setAttributes({ items: updatedItems });
            }
        }
    }, [clientId, items, setAttributes]);

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

    // Icon type options
    const iconTypeOptions = [
        { label: __("Plus/Minus", "digiblocks"), value: "plusMinus" },
        { label: __("Arrow", "digiblocks"), value: "arrow" },
        { label: __("Chevron", "digiblocks"), value: "chevron" },
        { label: __("Triangle", "digiblocks"), value: "triangle" },
        { label: __("Circle Plus/Minus", "digiblocks"), value: "circlePlusMinus" },
    ];

    // Icon position options
    const iconPositionOptions = [
        { label: __("Right", "digiblocks"), value: "right" },
        { label: __("Left", "digiblocks"), value: "left" },
    ];

    // Title tag options
    const titleTagOptions = [
        { label: __("H2", "digiblocks"), value: "h2" },
        { label: __("H3", "digiblocks"), value: "h3" },
        { label: __("H4", "digiblocks"), value: "h4" },
        { label: __("H5", "digiblocks"), value: "h5" },
        { label: __("H6", "digiblocks"), value: "h6" },
        { label: __("p", "digiblocks"), value: "p" },
        { label: __("div", "digiblocks"), value: "div" },
    ];

    // Layout options
    const layoutOptions = [
        { label: __("Boxed", "digiblocks"), value: "boxed" },
        { label: __("Classic", "digiblocks"), value: "classic" },
        { label: __("Separated", "digiblocks"), value: "separated" },
        { label: __("Minimalist", "digiblocks"), value: "minimalist" },
        { label: __("Bordered", "digiblocks"), value: "bordered" },
    ];

    // Schema type options
    const schemaTypeOptions = [
        { label: __("Default FAQ Schema", "digiblocks"), value: "FAQPage" },
        { label: __("Q&A Schema", "digiblocks"), value: "QAPage" },
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

    // Tabs for normal/hover/active states
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
        },
        {
            name: 'active',
            title: __('Active', 'digiblocks'),
            className: 'digiblocks-tab-3 active'
        }
    ];

    // Add item function
    const addNewItem = () => {
		const newItemIndex = items.length;
        const newItem = {
            id: `faq-item-${clientId.substr(0, 8)}-${newItemIndex}`,
            title: __('New FAQ Question', 'digiblocks'),
            content: __('Add your answer here. Edit or remove this text inline or in the module Content settings.', 'digiblocks'),
            isOpen: false
        };
        
        setAttributes({
            items: [...items, newItem]
        });
    };

    // Remove item function
    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setAttributes({
            items: newItems
        });
    };

    // Duplicate item function
    const duplicateItem = (index) => {
        const itemToDuplicate = items[index];
		const timestamp = Date.now();
        const newItem = {
            ...itemToDuplicate,
            id: `faq-item-${clientId.substr(0, 8)}-${timestamp}`,
            isOpen: false
        };
        
        const newItems = [...items];
        newItems.splice(index + 1, 0, newItem);
        setAttributes({
            items: newItems
        });
    };

    // Move item up function
    const moveItemUp = (index) => {
        if (index === 0) return;
        
        const newItems = [...items];
        const item = newItems[index];
        newItems.splice(index, 1);
        newItems.splice(index - 1, 0, item);
        
        setAttributes({
            items: newItems
        });
    };

    // Move item down function
    const moveItemDown = (index) => {
        if (index === items.length - 1) return;
        
        const newItems = [...items];
        const item = newItems[index];
        newItems.splice(index, 1);
        newItems.splice(index + 1, 0, item);
        
        setAttributes({
            items: newItems
        });
    };

    // Toggle item function
    const toggleItem = (index) => {
        const newItems = items.map((item, i) => {
            if (i === index) {
                return { ...item, isOpen: !item.isOpen };
            }
            
            // If multiple open is not allowed, close other items
            if (!allowMultipleOpen && i !== index && item.isOpen) {
                return { ...item, isOpen: false };
            }
            
            return item;
        });
        
        setAttributes({
            items: newItems
        });
    };

    // Update item title function
    const updateItemTitle = (value, index) => {
        const newItems = [...items];
        newItems[index].title = value;
        
        setAttributes({
            items: newItems
        });
    };

    // Update item content function
    const updateItemContent = (value, index) => {
        const newItems = [...items];
        newItems[index].content = value;
        
        setAttributes({
            items: newItems
        });
    };

    // Generate icon JSX based on icon type and state
    const getIcon = (isOpen, type = iconType) => {
        switch (type) {
            case 'plusMinus':
                return isOpen ? (
                    <span className="digiblocks-faq-icon-minus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                        </svg>
                    </span>
                ) : (
                    <span className="digiblocks-faq-icon-plus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </span>
                );
            case 'arrow':
                return (
                    <span className={`digiblocks-faq-icon-arrow ${isOpen ? 'is-open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                );
            case 'chevron':
                return (
                    <span className={`digiblocks-faq-icon-chevron ${isOpen ? 'is-open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                        </svg>
                    </span>
                );
            case 'triangle':
                return (
                    <span className={`digiblocks-faq-icon-triangle ${isOpen ? 'is-open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </span>
                );
            case 'circlePlusMinus':
                return isOpen ? (
                    <span className="digiblocks-faq-icon-circle-minus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </span>
                ) : (
                    <span className="digiblocks-faq-icon-circle-plus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </span>
                );
            default:
                return isOpen ? (
                    <span className="digiblocks-faq-icon-minus">—</span>
                ) : (
                    <span className="digiblocks-faq-icon-plus">+</span>
                );
        }
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

    // Generate CSS for styling the FAQ block
	const generateCSS = () => {
		const activeDevice = window.digi.responsiveState.activeDevice;
		
		// Properly handle 0 values with explicit undefined check
		const itemSpacing = itemsSpacing[activeDevice] !== undefined ? itemsSpacing[activeDevice] : 16;
		
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
			borderCSS = 'border: none;';
		}
		
		// Box shadow
		let boxShadowCSS = 'box-shadow: none;';
		if (boxShadow && boxShadow.enable) {
			const inset = boxShadow.position === 'inset' ? 'inset ' : '';
			boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
		}
		
		// Padding
		const paddingCSS = `${getDimensionCSS(padding, 'padding', activeDevice)}`;
		
		// Title typography CSS
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
			
			if (titleTypography.textDecoration) {
				titleTypographyCSS += `text-decoration: ${titleTypography.textDecoration};`;
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
		
		// Content typography CSS
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
			
			if (contentTypography.textDecoration) {
				contentTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
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
		
		// Hover box shadow
		let boxShadowHoverCSS = '';
		if (boxShadowHover && boxShadowHover.enable) {
			const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
			boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
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
		
		// Base styles for all layouts
		const baseCSS = `
			/* FAQ Block - ${id} */
			.${id} {
				${getDimensionCSS(margin, 'margin', activeDevice)}
				width: 100%;
                ${positionCSS}
				${transformCSS}
			}

            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }
			
			/* Base styles for questions and answers */
			.${id} .digiblocks-faq-question {
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				display: flex;
				align-items: center;
				${iconPosition === 'left' ? 'flex-direction: row-reverse; justify-content: flex-end;' : 'justify-content: space-between;'}
			}
			
			.${id} .digiblocks-faq-question-text {
				color: ${titleColor};
				${titleTypographyCSS}
				margin: 0;
				flex: 1;
				${questionPrefix ? 'display: flex; align-items: center; gap: .5rem;' : ''}
				transition: color 0.3s ease;
			}
			
			.${id} .digiblocks-faq-question-prefix {
				${questionPrefixColor ? `color: ${questionPrefixColor};` : ''}
				font-weight: bold;
			}
			
			.${id} .digiblocks-faq-answer-prefix {
				${answerPrefixColor ? `color: ${answerPrefixColor};` : ''}
				font-weight: bold;
			}
			
			.${id} .digiblocks-faq-answer-content {
				display: flex;
				${answerPrefix ? 'display: flex; gap: .5rem;' : ''}
				color: ${contentColor};
				${contentTypographyCSS}
			}
			
			/* Handle answer display states */
			.${id} .digiblocks-faq-answer {
				overflow: hidden;
				display: none;
				transition: height 0.3s ease;
			}
			
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			/* Icon styles */
			.${id} .digiblocks-faq-question {
				gap: 15px;
			}

			.${id} .digiblocks-faq-question-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				color: ${iconColor};
				transition: all 0.3s ease;
				font-size: ${getVal(iconSize, activeDevice)}px;
			}
			
			.${id} .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${id} .digiblocks-faq-question-icon svg {
				width: ${getVal(iconSize, activeDevice)}px;
				height: ${getVal(iconSize, activeDevice)}px;
				transition: transform 0.3s ease;
				fill: currentColor;
			}
			
			/* Rotate icons when active */
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-arrow,
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-chevron,
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-triangle {
				transform: rotate(180deg);
			}
			
			.${id} .digiblocks-faq-icon-arrow,
			.${id} .digiblocks-faq-icon-chevron,
			.${id} .digiblocks-faq-icon-triangle {
				display: inline-flex;
				transition: transform 0.3s ease;
			}
			
			/* Handle hover state */
			.${id} .digiblocks-faq-question:hover .digiblocks-faq-question-text {
				${titleHoverColor ? `color: ${titleHoverColor};` : ''}
			}
			
			.${id} .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${iconHoverColor ? `color: ${iconHoverColor};` : ''}
			}
			
			/* Handle active state */
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${titleActiveColor};
			}
			
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${iconActiveColor};
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
		
		// Layout-specific styles
		let layoutCSS = '';
		switch (layout) {
			case 'boxed':
				layoutCSS = `
					.${id} .digiblocks-faq-item {
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || '#ffffff'};
						transition: all 0.3s ease;
						margin-bottom: ${itemSpacing}px;
					}
					
					.${id} .digiblocks-faq-item:hover {
						${boxShadowHoverCSS}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						border-top: 1px solid ${borderColor || '#e0e0e0'};
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ''}
					}
					
					.${id} .digiblocks-faq-item.is-active {
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ''}
					}
				`;
				break;
			
			case 'classic':
				layoutCSS = `
					.${id} .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${borderColor || '#e0e0e0'};
						background-color: transparent;
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
					}
					
					.${id} .digiblocks-faq-answer {
						${getDimensionCSS(padding, 'padding', activeDevice)}
						padding-top: 0;
					}
				`;
				break;
			
			case 'separated':
				layoutCSS = `
					.${id} .digiblocks-faq-item {
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || '#ffffff'};
					}
					
					.${id} .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ''}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
						${boxShadowHoverCSS}
					}
					
					.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ''}
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ''}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ''}
						${borderCSS}
						border-top: none;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
						border-bottom-left-radius: ${borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice].left + borderRadius[activeDevice].unit : '8px'};
						border-bottom-right-radius: ${borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice].right + borderRadius[activeDevice].unit : '8px'};
						margin-top: -1px;
					}
				`;
				break;
			
			case 'minimalist':
				layoutCSS = `
					.${id} .digiblocks-faq-item {
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
						border-bottom: 2px solid ${borderColor || '#e0e0e0'};
					}
					
					.${id} .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ''}
						border-color: ${titleHoverColor || borderHoverColor || '#cccccc'};
					}
					
					.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ''}
						border-color: ${titleActiveColor || '#1e73be'};
					}
					
					.${id} .digiblocks-faq-answer {
						${getDimensionCSS(padding, 'padding', activeDevice)}
					}
				`;
				break;
			
			case 'bordered':
				layoutCSS = `
					.${id} .digiblocks-faq-item {
						${borderCSS}
						background-color: transparent;
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					.${id} .digiblocks-faq-item:hover {
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
						background-color: ${backgroundColor || '#f8f9fa'};
					}
					
					.${id} .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ''}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
					}
					
					.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ''}
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ''}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ''}
					}
					
					.${id} .digiblocks-faq-item.is-active {
						border-color: ${titleActiveColor || borderColor || '#1e73be'};
					}
				`;
				break;
			
			default:
				layoutCSS = `
					.${id} .digiblocks-faq-item {
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || '#ffffff'};
						transition: all 0.3s ease;
						margin-bottom: ${itemSpacing}px;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						border-top: 1px solid #e0e0e0;
					}
				`;
		}
		
		// Editor-specific styles
		const editorCSS = `
			.${id} .digiblocks-faq-item {
				position: relative;
			}
			
			.${id} .digiblocks-faq-item-controls {
				display: flex;
				gap: 5px;
				position: absolute;
				right: 10px;
				top: -28px;
				background-color: #fff;
				padding: 2px;
				border-radius: 3px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.12);
				z-index: 10;
			}
		
			/* Respect the is-active class for showing/hiding answers */
			.${id} .digiblocks-faq-answer {
				display: none;
				transition: height 0.3s ease;
			}
			
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			.${id} .digiblocks-faq-schema {
				margin-top: 15px;
			}
		`;
		
		// Responsive styles
		const tabletStyles = `
			@media (max-width: 991px) {
				.${id} {
					${getDimensionCSS(margin, 'margin', 'tablet')}
				}
				
				.${id} .digiblocks-faq-item {
					margin-bottom: ${getVal(itemsSpacing, 'tablet') || itemSpacing}px;
				}
				
				.${id} .digiblocks-faq-question,
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, 'padding', 'tablet')}
				}
				
				${layout === 'minimalist' ? `
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, 'padding', 'tablet')}
					padding-left: 0;
					padding-right: 0;
				}
				` : ''}
				
				${(() => {
					const tabletIconSize = getVal(iconSize, 'tablet');
					return tabletIconSize ? `
					.${id} .digiblocks-faq-question-icon {
						font-size: ${tabletIconSize}px;
					}
					
					.${id} .digiblocks-faq-question-icon svg {
						width: ${tabletIconSize}px;
						height: ${tabletIconSize}px;
					}
					` : '';
				})()}
				
				${(() => {
					const titleFontSize = getVal(titleTypography?.fontSize, 'tablet');
					const titleLineHeight = getVal(titleTypography?.lineHeight, 'tablet');
					if (!titleFontSize && !titleLineHeight) return '';
					
					return `
					.${id} .digiblocks-faq-question-text {
						${titleFontSize ? `font-size: ${titleFontSize}${titleTypography.fontSizeUnit || 'px'};` : ''}
						${titleLineHeight ? `line-height: ${titleLineHeight}${titleTypography.lineHeightUnit || 'em'};` : ''}
					}
					`;
				})()}
				
				${(() => {
					const contentFontSize = getVal(contentTypography?.fontSize, 'tablet');
					const contentLineHeight = getVal(contentTypography?.lineHeight, 'tablet');
					if (!contentFontSize && !contentLineHeight) return '';
					
					return `
					.${id} .digiblocks-faq-answer-content {
						${contentFontSize ? `font-size: ${contentFontSize}${contentTypography.fontSizeUnit || 'px'};` : ''}
						${contentLineHeight ? `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || 'em'};` : ''}
					}
					`;
				})()}
			}
		`;

		const mobileStyles = `
			@media (max-width: 767px) {
				.${id} {
					${getDimensionCSS(margin, 'margin', 'mobile')}
				}
				
				.${id} .digiblocks-faq-item {
					margin-bottom: ${getVal(itemsSpacing, 'mobile') || getVal(itemsSpacing, 'tablet') || itemSpacing}px;
				}
				
				.${id} .digiblocks-faq-question,
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, 'padding', 'mobile')}
				}
				
				${layout === 'minimalist' ? `
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, 'padding', 'mobile')}
					padding-left: 0;
					padding-right: 0;
				}
				` : ''}
				
				${(() => {
					const mobileIconSize = getVal(iconSize, 'mobile');
					return mobileIconSize ? `
					.${id} .digiblocks-faq-question-icon {
						font-size: ${mobileIconSize}px;
					}
					
					.${id} .digiblocks-faq-question-icon svg {
						width: ${mobileIconSize}px;
						height: ${mobileIconSize}px;
					}
					` : '';
				})()}
				
				${(() => {
					const titleFontSize = getVal(titleTypography?.fontSize, 'mobile');
					const titleLineHeight = getVal(titleTypography?.lineHeight, 'mobile');
					if (!titleFontSize && !titleLineHeight) return '';
					
					return `
					.${id} .digiblocks-faq-question-text {
						${titleFontSize ? `font-size: ${titleFontSize}${titleTypography.fontSizeUnit || 'px'};` : ''}
						${titleLineHeight ? `line-height: ${titleLineHeight}${titleTypography.lineHeightUnit || 'em'};` : ''}
					}
					`;
				})()}
				
				${(() => {
					const contentFontSize = getVal(contentTypography?.fontSize, 'mobile');
					const contentLineHeight = getVal(contentTypography?.lineHeight, 'mobile');
					if (!contentFontSize && !contentLineHeight) return '';
					
					return `
					.${id} .digiblocks-faq-answer-content {
						${contentFontSize ? `font-size: ${contentFontSize}${contentTypography.fontSizeUnit || 'px'};` : ''}
						${contentLineHeight ? `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || 'em'};` : ''}
					}
					`;
				})()}
			}
		`;
		
		// Combine all styles
		return `
			${baseCSS}
			${layoutCSS}
			${editorCSS}
			${tabletStyles}
			${mobileStyles}
		`;
	};

    // Render title/heading tab content based on active tab
    const renderTitleTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Question Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: titleColor,
                                onChange: (value) =>
                                    setAttributes({
                                        titleColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
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
                            {
                                value: questionPrefixColor,
                                onChange: (value) =>
                                    setAttributes({
                                        questionPrefixColor: value,
                                    }),
                                label: __(
                                    "Prefix Color",
                                    "digiblocks"
                                ),
                                disableCustomColors: !questionPrefix,
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
                            "Question Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: titleHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        titleHoverColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
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
        } else if (tabName === 'active') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Question Active Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: titleActiveColor,
                                onChange: (value) =>
                                    setAttributes({
                                        titleActiveColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: backgroundActiveColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundActiveColor: value,
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
                        ]}
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
                        ]}
                    />
                </>
            );
        } else if (tabName === 'active') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Icon Active Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconActiveColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconActiveColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
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

    // Render content tab content based on active tab
    const renderContentTabContent = () => {
        return (
            <>
                <PanelColorSettings
                    title={__(
                        "Answer Colors",
                        "digiblocks"
                    )}
                    initialOpen={true}
                    enableAlpha={true}
                    colorSettings={[
                        {
                            value: contentColor,
                            onChange: (value) =>
                                setAttributes({
                                    contentColor: value,
                                }),
                            label: __(
                                "Text Color",
                                "digiblocks"
                            ),
                        },
                        {
                            value: contentBackgroundColor,
                            onChange: (value) =>
                                setAttributes({
                                    contentBackgroundColor: value,
                                }),
                            label: __(
                                "Background Color",
                                "digiblocks"
                            ),
                        },
                        {
                            value: answerPrefixColor,
                            onChange: (value) =>
                                setAttributes({
                                    answerPrefixColor: value,
                                }),
                            label: __(
                                "Prefix Color",
                                "digiblocks"
                            ),
                            disableCustomColors: !answerPrefix,
                        },
                    ]}
                />
            </>
        );
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="content-settings"
                            title={__("Items", "digiblocks")}
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__("Allow Multiple Open", "digiblocks")}
                                checked={allowMultipleOpen}
                                onChange={() => setAttributes({ allowMultipleOpen: !allowMultipleOpen })}
                                help={__("When enabled, multiple FAQ items can be open at the same time.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__("Layout", "digiblocks")}
                                value={layout}
                                options={layoutOptions}
                                onChange={(value) => setAttributes({ layout: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label htmlFor="question-prefix" className="components-base-control__label">
                                        {__("Question Prefix", "digiblocks")}
                                    </label>
                                    <TextControl
                                        id="question-prefix"
                                        value={questionPrefix || ""}
                                        onChange={(value) => setAttributes({ questionPrefix: value })}
                                        placeholder={__("Example: Q:", "digiblocks")}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
                                    />
                                    <p className="components-base-control__help">
                                        {__("Add a prefix to questions (e.g., 'Q:').", "digiblocks")}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label htmlFor="answer-prefix" className="components-base-control__label">
                                        {__("Answer Prefix", "digiblocks")}
                                    </label>
                                    <TextControl
                                        id="answer-prefix"
                                        value={answerPrefix || ""}
                                        onChange={(value) => setAttributes({ answerPrefix: value })}
                                        placeholder={__("Example: A:", "digiblocks")}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
                                    />
                                    <p className="components-base-control__help">
                                        {__("Add a prefix to answers (e.g., 'A:').", "digiblocks")}
                                    </p>
                                </div>
                            </div>
                            
                            <ResponsiveControl
                                label={__("Items Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={itemsSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            itemsSpacing: {
                                                ...itemsSpacing,
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
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="icon-settings"
                            title={__("Icon Settings", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Icon Type", "digiblocks")}
                                value={iconType}
                                options={iconTypeOptions}
                                onChange={(value) => setAttributes({ iconType: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__("Icon Position", "digiblocks")}
                                value={iconPosition}
                                options={iconPositionOptions}
                                onChange={(value) => setAttributes({ iconPosition: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
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
                                    min={8}
                                    max={100}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="schema-settings"
                            title={__("SEO Schema", "digiblocks")}
                            initialOpen={false}
                        >
							<SelectControl
								label={__("Schema Type", "digiblocks")}
								value={schemaType}
								options={schemaTypeOptions}
								onChange={(value) => setAttributes({ schemaType: value })}
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							/>
							
							<TextControl
								label={__("Schema Name", "digiblocks")}
								value={schemaName}
								onChange={(value) => setAttributes({ schemaName: value })}
								placeholder={__("Example: Product FAQ", "digiblocks")}
								help={__("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).", "digiblocks")}
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							/>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="heading-settings"
                            title={__("HTML Settings", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Question Tag", "digiblocks")}
                                value={titleTag}
                                options={titleTagOptions}
                                onChange={(value) => setAttributes({ titleTag: value })}
                                help={__("HTML tag for questions. Default is h3.", "digiblocks")}
                                __next40pxDefaultSize={true}
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
                            name="question-styles"
                            title={__("Question Styles", "digiblocks")}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderTitleTabContent(tab.name)}
                            </TabPanel>
                            
                            <TypographyControl
                                label={__(
                                    "Question Typography",
                                    "digiblocks"
                                )}
                                value={titleTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        titleTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 18, tablet: 16, mobile: 15 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="answer-styles"
                            title={__("Answer Styles", "digiblocks")}
                            initialOpen={false}
                        >
                            {renderContentTabContent()}
                            
                            <TypographyControl
                                label={__(
                                    "Answer Typography",
                                    "digiblocks"
                                )}
                                value={contentTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        contentTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="icon-styles"
                            title={__("Icon Styles", "digiblocks")}
                            initialOpen={false}
                        >
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
                            name="border-box"
                            title={__("Border & Radius", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* Only show border style controls for layouts that support custom borders */}
							{layout !== 'classic' && layout !== 'minimalist' && (
								<>
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
													"Border Colors",
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
													{
														value: borderHoverColor,
														onChange: (value) =>
															setAttributes({
																borderHoverColor: value,
															}),
														label: __(
															"Border Hover Color",
															"digiblocks"
														),
													},
												]}
											/>
											
											{/* Border Width */}
											<ResponsiveControl
												label={__("Border Width", "digiblocks")}
											>
												<DimensionControl
													values={borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
														top: 1,
														right: 1,
														bottom: 1,
														left: 1,
														unit: 'px'
													}}
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
											
											{/* Border Radius */}
											<ResponsiveControl
												label={__("Border Radius", "digiblocks")}
											>
												<DimensionControl
													values={borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
														top: 8,
														right: 8,
														bottom: 8,
														left: 8,
														unit: 'px'
													}}
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
										</>
									)}
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
        }
    };

    // Render FAQ items
    const renderFAQItems = () => {
        if (!items || items.length === 0) {
            return (
                <div className="digiblocks-no-items">
                    <p>{__('No FAQ items found. Please add some items.', 'digiblocks')}</p>
                </div>
            );
        }
        
        return items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
                <div
                    key={item.id}
                    className={`digiblocks-faq-item ${item.isOpen ? 'is-active' : ''}`}
                    style={isLast ? { marginBottom: 0 } : {}}
                >
                    <div 
                        className="digiblocks-faq-question"
                        onClick={() => toggleItem(index)}
                    >
                        <div className="digiblocks-faq-question-text">
                            {questionPrefix && (
                                <span className="digiblocks-faq-question-prefix">{questionPrefix}</span>
                            )}
                            <RichText
                                tagName="span"
                                value={item.title}
                                onChange={(value) => updateItemTitle(value, index)}
                                placeholder={__('Enter question...', 'digiblocks')}
                                allowedFormats={['core/bold', 'core/italic']}
                                className="digiblocks-faq-question-text-content"
                            />
                        </div>
                        <span className="digiblocks-faq-question-icon">
                            {getIcon(item.isOpen)}
                        </span>
                    </div>
                    <div className="digiblocks-faq-answer">
                        <div className="digiblocks-faq-answer-content">
                            {answerPrefix && (
                                <span className="digiblocks-faq-answer-prefix">{answerPrefix}</span>
                            )}
                            <RichText
                                tagName="div"
                                value={item.content}
                                onChange={(value) => updateItemContent(value, index)}
                                placeholder={__('Enter answer...', 'digiblocks')}
                                allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/image', 'core/list']}
                                className="digiblocks-faq-answer-text"
                            />
                        </div>
                    </div>
                    
                    {/* Item Controls */}
                    <div className="digiblocks-faq-item-controls">
                        <Tooltip text={__('Move Up', 'digiblocks')}>
                            <Button
                                className="digiblocks-faq-item-move-up"
                                onClick={() => moveItemUp(index)}
                                icon="arrow-up-alt2"
                                disabled={index === 0}
                                isSmall
                            />
                        </Tooltip>
                        <Tooltip text={__('Move Down', 'digiblocks')}>
                            <Button
                                className="digiblocks-faq-item-move-down"
                                onClick={() => moveItemDown(index)}
                                icon="arrow-down-alt2"
                                disabled={index === items.length - 1}
                                isSmall
                            />
                        </Tooltip>
                        <Tooltip text={__('Duplicate', 'digiblocks')}>
                            <Button
                                className="digiblocks-faq-item-duplicate"
                                onClick={() => duplicateItem(index)}
                                icon="admin-page"
                                isSmall
                            />
                        </Tooltip>
                        <Tooltip text={__('Remove', 'digiblocks')}>
                            <Button
                                className="digiblocks-faq-item-remove"
                                onClick={() => removeItem(index)}
                                icon="trash"
                                isSmall
                            />
                        </Tooltip>
                    </div>
                </div>
            );
        });
    };

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-faq-block ${id} ${layout || 'boxed'} ${customClasses || ''}`,
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
                <div className="digiblocks-faq-items">
                    {renderFAQItems()}
                </div>
                
                <Button
                    variant="primary"
                    icon="plus"
                    onClick={addNewItem}
					style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}
				>
                    {__("Add FAQ Item", "digiblocks")}
                </Button>
            </div>
        </>
    );
};

export default FAQEdit;