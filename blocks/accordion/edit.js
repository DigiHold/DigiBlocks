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
const { animations } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Accordion block
 */
const AccordionEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
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
        allowMultipleOpen,
        iconType
    } = attributes;

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const previewTimeoutRef = useRef(null);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");
    
    // State for color tabs
    const [titleColorTab, setTitleColorTab] = useState("normal");
    const [backgroundColorTab, setBackgroundColorTab] = useState("normal");
    const [iconColorTab, setIconColorTab] = useState("normal");
    const [borderColorTab, setBorderColorTab] = useState("normal");
    const [contentColorTab, setContentColorTab] = useState("normal");

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (previewTimeoutRef.current) {
                clearTimeout(previewTimeoutRef.current);
            }
        };
    }, []);

    // Add unique data-custom-id
	useEffect(() => {
        if (!id || !id.includes(clientId.substr(0, 8))) {
            setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
        }
    }, [clientId]);

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

    // Animation preview function
	const triggerAnimationPreview = () => {
		// Only proceed if we have a valid animation
		if (!animation || animation === 'none') {
			return;
		}
		
		// Clear any existing timeout
		if (previewTimeoutRef.current) {
			clearTimeout(previewTimeoutRef.current);
		}
		
		// Find the block element
		const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
		if (!blockElement) {
			return;
		}
		
		// Generate a timestamp to ensure unique animation names on each click
		const timestamp = Date.now();
		
		// Apply animation directly
		if (animations[animation]) {
			// Extract the original animation name from the keyframes
			const originalKeyframes = animations[animation].keyframes;
			const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
			
			if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
				console.error('Could not extract animation name from keyframes');
				return;
			}
			
			const originalAnimName = originalAnimNameMatch[1];
			const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
			
			// Create a style element with a unique animation name to avoid conflicts
			const styleElement = document.createElement('style');
			styleElement.id = `animation-style-${id}_${timestamp}`;
			
			// Replace the original animation name with our unique name
			const updatedKeyframes = originalKeyframes.replace(
				new RegExp(originalAnimName, 'g'),
				uniqueAnimName
			);
			
			styleElement.textContent = `
				${updatedKeyframes}
				
				[data-custom-id="${id}"] {
					animation: none; /* Reset first */
				}
			`;
			
			// Remove any existing animation style for this block
			document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach(el => {
				el.remove();
			});
			
			// Add the style to the document
			document.head.appendChild(styleElement);
			
			// Force reflow to ensure animation reset
			blockElement.offsetHeight;
			
			// Now apply the animation
			const animationStyleElement = document.createElement('style');
			animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
			animationStyleElement.textContent = `
				[data-custom-id="${id}"] {
					animation: ${uniqueAnimName} 1.5s forwards !important;
				}
			`;
			document.head.appendChild(animationStyleElement);
			
			// Clean up after animation
			previewTimeoutRef.current = setTimeout(() => {
				styleElement.remove();
				animationStyleElement.remove();
				blockElement.style.animation = '';
			}, 1500);
		}
	};

	// Effect to trigger animation preview when animation attribute changes
	useEffect(() => {
		if (animation && animation !== 'none') {
			const timeoutId = setTimeout(() => {
				triggerAnimationPreview();
			}, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [animation]);

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
        const size = iconSize[localActiveDevice] || 16;

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

    // Generate CSS for all styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        const blockId = id;
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
            const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
            const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' };
            
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
        const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
        const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
        
        // Title typography CSS
        let titleTypographyCSS = '';
        if (titleTypography) {
            if (titleTypography.fontFamily) {
                titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
            }
            
            if (titleTypography.fontSize && titleTypography.fontSize[activeDevice]) {
                titleTypographyCSS += `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};`;
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
            
            if (titleTypography.lineHeight && titleTypography.lineHeight[activeDevice]) {
                titleTypographyCSS += `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};`;
            }
            
            if (titleTypography.letterSpacing && titleTypography.letterSpacing[activeDevice]) {
                titleTypographyCSS += `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Content typography CSS
        let contentTypographyCSS = '';
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }
            
            if (contentTypography.fontSize && contentTypography.fontSize[activeDevice]) {
                contentTypographyCSS += `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};`;
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
            
            if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
                contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};`;
            }
            
            if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
                contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Assemble the full CSS
        return `
            /* Accordion item */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${backgroundColor || '#ffffff'};
                ${borderCSS}
                ${boxShadowCSS}
				${marginCSS}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
				${boxShadowHover && boxShadowHover.enable ? boxShadowHoverCSS : ''}
            }
            
            /* Accordion header */
            [data-custom-id="${blockId}"] .digiblocks-accordion-header {
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
            [data-custom-id="${blockId}"] .digiblocks-accordion-title {
                margin: 0;
                color: ${titleColor || '#333333'};
                flex: 1;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for title */
            [data-custom-id="${blockId}"] .digiblocks-accordion-header:hover .digiblocks-accordion-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            }
            
            /* Accordion title active state */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${titleActiveColor || '#1e73be'};
            }
            
            /* Accordion icon */
            [data-custom-id="${blockId}"] .digiblocks-accordion-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* SVG icon fill color */
            [data-custom-id="${blockId}"] .digiblocks-accordion-icon svg {
                fill: ${iconColor || '#333333'};
                width: ${iconSize[activeDevice]}px;
                height: ${iconSize[activeDevice]}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            [data-custom-id="${blockId}"] .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
            }
            
            /* Active icon color */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${iconActiveColor || '#1e73be'};
            }
            
            /* Active header background */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${backgroundActiveColor || '#f7f7f7'};
            }
            
            /* Accordion content */
            [data-custom-id="${blockId}"] .digiblocks-accordion-content {
                overflow: hidden;
                ${paddingCSS}
                color: ${contentColor || '#666666'};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${contentHoverColor ? `color: ${contentHoverColor};` : ''}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-accordion-content p:first-child {
                margin-top: 0;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-accordion-content p:last-child {
                margin-bottom: 0;
            }
            
            /* Item controls in editor */
			[data-custom-id="${blockId}"] .digiblocks-accordion-item {
				position: relative;
			}

			[data-custom-id="${blockId}"] .digiblocks-accordion-item-controls {
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
            
            /* Animation keyframes */
            ${animationCSS}
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
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize={true}
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
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize={true}
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
                                defaults={{
                                    fontSize: { desktop: 18, tablet: 16, mobile: 16 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Content Typography", "digiblocks")}
                                value={contentTypography}
                                onChange={(value) => setAttributes({ contentTypography: value })}
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
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
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
                                    
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
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
                                                { label: '%', value: '%' }
                                            ]}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                            
							<BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) =>
                                    setAttributes({
                                        boxShadow: value,
                                    })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({
                                        boxShadowHover: value,
                                    })
                                }
                            />
                        </TabPanelBody>
                        
						<TabPanelBody
							tab="style"
							name="spacing"
							title={__("Spacing", "digiblocks")}
							initialOpen={false}
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
                    </>
                );
                
            case 'advanced':
                return (
                    <>
						<TabPanelBody
							tab="advanced"
							name="animation"
							title={__("Animation", "digiblocks")}
							initialOpen={true}
						>
                            <SelectControl
                                label={__("Animation", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize={true}
                            />
                            
                            {/* Animation Preview Button */}
                            {animation && animation !== 'none' && (
                                <div style={{ marginTop: '10px' }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={triggerAnimationPreview}
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
        className: `digiblocks-accordion ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
        "data-custom-id": id, // Always set the block ID as data attribute for CSS targeting
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
										icon="arrow-up-alt2"
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
										icon="arrow-down-alt2"
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
										icon="admin-page"
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
										icon="trash"
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