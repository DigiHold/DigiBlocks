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
    Button,
    ToggleControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    TextControl
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { animations } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;

/**
 * SocialIcon Component
 */
const SocialIcon = ({ icon, index, updateIcon, removeIcon, moveIcon, componentsLoaded, isPanelOpen, togglePanelState }) => {
    // Handle drag start
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', index.toString());
        e.dataTransfer.effectAllowed = 'move';
        
        // Add a class to the dragged item for visual feedback
        e.currentTarget.classList.add('dragging');
    };
    
    // Handle drag over
    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        e.currentTarget.classList.add('drag-over');
    };
    
    // Handle drag leave
    const handleDragLeave = (e) => {
        e.currentTarget.classList.remove('drag-over');
    };
    
    // Handle drop
    const handleDrop = (e) => {
        e.preventDefault();
        const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
        
        // Move the icon if the indices are different
        if (draggedIndex !== index) {
            moveIcon(draggedIndex, index);
        }
        
        // Remove any drag-related classes
        e.currentTarget.classList.remove('drag-over');
    };
    
    // Handle drag end (cleanup)
    const handleDragEnd = (e) => {
        // Remove dragging class from any elements
        document.querySelectorAll('.dragging').forEach(el => {
            el.classList.remove('dragging');
        });
        
        // Remove drag-over class from any elements
        document.querySelectorAll('.drag-over').forEach(el => {
            el.classList.remove('drag-over');
        });
    };
    
    // Toggle panel open/closed
    const togglePanel = () => {
        togglePanelState(index);
    };

    return (
        <div 
            className={`digiblocks-social-icon-item ${isPanelOpen ? 'is-open' : 'is-closed'}`}
            draggable="true"
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
        >
            <div className="digiblocks-social-icon-header">
                <div className="digiblocks-social-icon-drag-handle" title={__('Drag to reorder', 'digiblocks')}>
                    <span className="dashicons dashicons-menu"></span>
                </div>
                
                <span 
                    className="digiblocks-social-icon-title"
                    onClick={togglePanel}
                >
                    {icon.label || __('Social', 'digiblocks') + ' ' + (index + 1)}
                </span>
                
                <div className="digiblocks-social-icon-actions">
                    <Button
                        icon={isPanelOpen ? "arrow-up-alt2" : "arrow-down-alt2"}
                        onClick={togglePanel}
                        label={isPanelOpen ? __('Collapse', 'digiblocks') : __('Expand', 'digiblocks')}
                        isSmall
                    />
                    
                    <Button
                        icon="trash"
                        onClick={() => removeIcon(index)}
                        label={__('Remove Icon', 'digiblocks')}
                        isSmall
                        isDestructive
                    />
                </div>
            </div>
            
            {isPanelOpen && (
                <div className="digiblocks-social-icon-content">
                    <div className="digiblocks-social-icon-fields">
						{!componentsLoaded ? (
							<div style={{ textAlign: 'center', padding: '20px 0' }}>
								<div className="components-spinner"></div>
								<p>{__('Loading icon selector...', 'digiblocks')}</p>
							</div>
						) : (
							<FontAwesomeControl
								label={__('Select Icon', 'digiblocks')}
								value={icon.iconValue}
								onChange={(newIcon) => updateIcon(index, 'iconValue', newIcon)}
							/>
						)}
                        
                        <TextControl
                            label={__('URL', 'digiblocks')}
                            value={icon.url || ''}
                            onChange={(url) => updateIcon(index, 'url', url)}
                            placeholder="https://example.com"
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                        
                        <TextControl
                            label={__('Label', 'digiblocks')}
                            value={icon.label || ''}
                            onChange={(label) => updateIcon(index, 'label', label)}
                            placeholder={__('e.g. Facebook', 'digiblocks')}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                        
                        <ToggleControl
                            label={__('Open in new tab', 'digiblocks')}
                            checked={icon.openInNewTab || false}
                            onChange={(openInNewTab) => updateIcon(index, 'openInNewTab', openInNewTab)}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                        
                        <TextControl
                            label={__('Rel Attribute', 'digiblocks')}
                            value={icon.rel || ''}
                            onChange={(rel) => updateIcon(index, 'rel', rel)}
                            placeholder={__('e.g. nofollow', 'digiblocks')}
                            help={__('Optional. Add rel attributes like "nofollow", "sponsored", etc.', 'digiblocks')}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

/**
 * Edit function for the Social Icons block
 */
const SocialIconsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        icons,
        iconSize,
        iconSpacing,
        iconColor,
        iconHoverColor,
        iconBackground,
        iconHoverBackground,
        iconBorderStyle,
        iconBorderWidth, 
        iconBorderRadius,
        iconBorderColor,
        iconHoverBorderColor,
        labelColor,
        labelHoverColor,
        labelSpacing,
        align,
        padding,
        animation,
        showLabels,
        labelPosition,
        textTypography,
        iconsState
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
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Check if the ID needs to be regenerated using clientId
		if (!id || !id.includes(clientId.substr(0, 8))) {
			setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
		}

        // Initialize icons array with at least one item if empty
        if (!icons || icons.length === 0) {
            setAttributes({
                icons: [
                    {
                        id: `social-icon-${clientId.substr(0, 8)}-0`,
                        iconValue: null,
                        url: '',
                        label: '',
                        openInNewTab: true,
                        rel: 'nofollow'
                    }
                ]
            });
        }
        
        // Initialize iconsState if empty
        if (!iconsState || Object.keys(iconsState).length === 0) {
            const initialState = {};
            if (icons && icons.length > 0) {
                icons.forEach((_, index) => {
                    initialState[index] = true; // Default to open
                });
                setAttributes({ iconsState: initialState });
            }
        }
    }, [clientId, icons, iconsState, setAttributes]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (previewTimeoutRef.current) {
                clearTimeout(previewTimeoutRef.current);
            }
        };
    }, []);

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

    // Function to toggle panel state
    const togglePanelState = (index) => {
        const updatedState = { ...iconsState };
        updatedState[index] = !updatedState[index];
        setAttributes({ iconsState: updatedState });
    };

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

    // Border style options
    const borderStyleOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
    ];

    // Label position options
    const labelPositionOptions = [
        { label: __("Bottom", "digiblocks"), value: "bottom" },
        { label: __("Right", "digiblocks"), value: "right" },
        { label: __("Left", "digiblocks"), value: "left" },
        { label: __("Top", "digiblocks"), value: "top" },
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

    // Function to add a new icon
    const addIcon = () => {
		const newIconIndex = icons.length;
        const updatedIcons = [...icons, {
            id: `social-icon-${clientId.substr(0, 8)}-${newIconIndex}`,
            iconValue: null,
            url: '',
            label: '',
            openInNewTab: true,
            rel: 'nofollow'
        }];
        
        // Update state for the new icon too
        const updatedState = { ...iconsState };
        updatedState[updatedIcons.length - 1] = true; // Open by default
        
        setAttributes({ 
            icons: updatedIcons,
            iconsState: updatedState
        });
    };

    // Function to remove an icon
    const removeIcon = (index) => {
        if (icons.length > 1) {
            const updatedIcons = [...icons];
            updatedIcons.splice(index, 1);
            
            // Update states - rebuild the object with correct indices
            const updatedState = {};
            updatedIcons.forEach((_, i) => {
                const oldIndex = i >= index ? i + 1 : i;
                updatedState[i] = iconsState[oldIndex] !== undefined ? iconsState[oldIndex] : true;
            });
            
            setAttributes({ 
                icons: updatedIcons,
                iconsState: updatedState
            });
        }
    };

    // Function to update an icon's properties
    const updateIcon = (index, property, value) => {
        const updatedIcons = [...icons];
        updatedIcons[index] = {
            ...updatedIcons[index],
            [property]: value
        };
        setAttributes({ icons: updatedIcons });
    };
    
    // Function to move an icon (for drag and drop reordering)
    const moveIcon = (fromIndex, toIndex) => {
        // Make a copy of the icons array
        const updatedIcons = [...icons];
        
        // Remove the item from its original position
        const [movedItem] = updatedIcons.splice(fromIndex, 1);
        
        // Insert the item at the new position
        updatedIcons.splice(toIndex, 0, movedItem);
        
        // Update the states - rebuild the object with correct indices
        const updatedState = {};
        // Copy each item's state to its new position
        Object.keys(iconsState).forEach(oldIndexStr => {
            const oldIndex = Number(oldIndexStr);
            let newIndex;
            
            if (oldIndex === fromIndex) {
                newIndex = toIndex;
            } else if (oldIndex > fromIndex && oldIndex <= toIndex) {
                newIndex = oldIndex - 1;
            } else if (oldIndex < fromIndex && oldIndex >= toIndex) {
                newIndex = oldIndex + 1;
            } else {
                newIndex = oldIndex;
            }
            
            updatedState[newIndex] = iconsState[oldIndex];
        });
        
        // Update the state with the new order
        setAttributes({ 
            icons: updatedIcons,
            iconsState: updatedState
        });
    };

    // Render styles tab content based on active state tab
    const renderStylesTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__("Icon Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconColor,
                                onChange: (value) => setAttributes({ iconColor: value }),
                                label: __("Icon Color", "digiblocks")
                            },
                            {
                                value: iconBackground,
                                onChange: (value) => setAttributes({ iconBackground: value }),
                                label: __("Background Color", "digiblocks")
                            },
                            {
                                value: iconBorderColor,
                                onChange: (value) => setAttributes({ iconBorderColor: value }),
                                label: __("Border Color", "digiblocks")
                            },
                            ...(showLabels ? [
                                {
                                    value: labelColor,
                                    onChange: (value) => setAttributes({ labelColor: value }),
                                    label: __("Label Color", "digiblocks")
                                }
                            ] : [])
                        ]}
                    />
                </>
            );
        } else {
            return (
                <>
                    <PanelColorSettings
                        title={__("Icon Hover Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconHoverColor,
                                onChange: (value) => setAttributes({ iconHoverColor: value }),
                                label: __("Icon Hover Color", "digiblocks")
                            },
                            {
                                value: iconHoverBackground,
                                onChange: (value) => setAttributes({ iconHoverBackground: value }),
                                label: __("Hover Background", "digiblocks")
                            },
                            {
                                value: iconHoverBorderColor,
                                onChange: (value) => setAttributes({ iconHoverBorderColor: value }),
                                label: __("Hover Border Color", "digiblocks")
                            },
                            ...(showLabels ? [
                                {
                                    value: labelHoverColor,
                                    onChange: (value) => setAttributes({ labelHoverColor: value }),
                                    label: __("Label Hover Color", "digiblocks")
                                }
                            ] : [])
                        ]}
                    />
                </>
            );
        }
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        const blockId = id;
        
        // Icon size
        const currentIconSize = iconSize[activeDevice] || 24;
        
        // Icon spacing
        const currentIconSpacing = iconSpacing[activeDevice] || 10;
        
        // Label spacing
        const currentLabelSpacing = labelSpacing[activeDevice] || 5;
        
        // Border styles
        let borderCSS = '';
        if (iconBorderStyle && iconBorderStyle !== 'none') {
            const currentBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] 
                ? iconBorderWidth[activeDevice] 
                : { value: 1, unit: 'px' };
            
            const currentBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] 
                ? iconBorderRadius[activeDevice] 
                : { value: 0, unit: 'px' };
            
            borderCSS = `
                border-style: ${iconBorderStyle};
                border-color: ${iconBorderColor || '#e0e0e0'};
                border-width: ${currentBorderWidth.value}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.value}${currentBorderRadius.unit};
            `;
        }
        
        // Label typography
        let textTypographyCSS = '';
        if (textTypography) {
            if (textTypography.fontFamily) {
                textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
            }
            
            if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
                textTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};`;
            }
            
            if (textTypography.fontWeight) {
                textTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
            }
            
            if (textTypography.fontStyle) {
                textTypographyCSS += `font-style: ${textTypography.fontStyle};`;
            }
            
            if (textTypography.textTransform) {
                textTypographyCSS += `text-transform: ${textTypography.textTransform};`;
            }
            
            if (textTypography.textDecoration) {
                textTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
            }
            
            if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
                textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};`;
            }
            
            if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
                textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Padding
        const paddingCSS = padding && padding[activeDevice] 
            ? `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`
            : '';
            
        // Animation CSS
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Label position specific styles
        let labelPositionCSS = '';
        if (showLabels && labelPosition) {
            switch (labelPosition) {
                case 'top':
                    labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: column-reverse;
                        }
                    `;
                    break;
                case 'right':
                    labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: row;
                        }
                    `;
                    break;
                case 'bottom':
                    labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: column;
                        }
                    `;
                    break;
                case 'left':
                    labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: row-reverse;
                        }
                    `;
                    break;
            }
        }
        
        // Complete CSS
        return `
            /* Social Icons Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                display: flex;
                flex-wrap: wrap;
                gap: ${currentIconSpacing}px;
                justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon {
                display: flex;
                align-items: center;
                text-decoration: none;
                gap: ${currentLabelSpacing}px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${iconBackground || 'transparent'};
                color: ${iconColor || '#333333'};
                ${borderCSS}
				${paddingCSS}
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-icon span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-icon svg {
                width: ${currentIconSize}px;
                height: ${currentIconSize}px;
                fill: ${iconColor || '#333333'};
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
                background-color: ${iconHoverBackground || iconBackground || 'transparent'};
                ${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-icon svg {
                fill: ${iconHoverColor || iconColor || '#333333'};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-label {
                ${textTypographyCSS}
                color: ${labelColor || iconColor || '#333333'};
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-label {
                color: ${labelHoverColor || iconHoverColor || labelColor || iconColor || '#333333'};
            }
            
            ${labelPositionCSS}
            ${animationCSS}
            
            /* Responsive styles */
            @media (max-width: 991px) {
                [data-custom-id="${blockId}"] {
                    gap: ${iconSpacing.tablet || currentIconSpacing}px;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-social-icon {
                    gap: ${labelSpacing.tablet || currentLabelSpacing}px;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-social-icon-icon svg {
                    width: ${iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.tablet || currentIconSize}px;
                }
                
                ${textTypography && textTypography.fontSize && textTypography.fontSize.tablet ? `
                [data-custom-id="${blockId}"] .digiblocks-social-icon-label {
                    font-size: ${textTypography.fontSize.tablet}${textTypography.fontSizeUnit || 'px'};
                }
                ` : ''}
            }
            
            @media (max-width: 767px) {
                [data-custom-id="${blockId}"] {
                    gap: ${iconSpacing.mobile || iconSpacing.tablet || currentIconSpacing}px;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-social-icon {
                    gap: ${labelSpacing.mobile || labelSpacing.tablet || currentLabelSpacing}px;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-social-icon-icon svg {
                    width: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                }
                
                ${textTypography && textTypography.fontSize && textTypography.fontSize.mobile ? `
                [data-custom-id="${blockId}"] .digiblocks-social-icon-label {
                    font-size: ${textTypography.fontSize.mobile}${textTypography.fontSizeUnit || 'px'};
                }
                ` : ''}
            }
        `;
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <div className="components-panel__body is-opened">
                            <div className="digiblocks-social-icons-list">
                                {icons.map((icon, index) => (
                                    <SocialIcon
                                        key={icon.id || index}
                                        icon={icon}
                                        index={index}
                                        updateIcon={updateIcon}
                                        removeIcon={removeIcon}
                                        moveIcon={moveIcon}
                                        isLast={index === icons.length - 1}
                                        totalIcons={icons.length}
                                        componentsLoaded={componentsLoaded}
                                        isPanelOpen={iconsState && iconsState[index] !== undefined ? iconsState[index] : true}
                                        togglePanelState={togglePanelState}
                                    />
                                ))}
                                
                                <Button
                                    variant="secondary"
                                    isSecondary
                                    className="digiblocks-add-social-icon"
                                    onClick={addIcon}
                                >
                                    {__('Add Social Icon', 'digiblocks')}
                                </Button>
                            </div>
                            
                            <ToggleControl
                                label={__('Show Labels', 'digiblocks')}
                                checked={showLabels}
                                onChange={(value) => setAttributes({ showLabels: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showLabels && (
                                <SelectControl
                                    label={__('Label Position', 'digiblocks')}
                                    value={labelPosition}
                                    options={labelPositionOptions}
                                    onChange={(value) => setAttributes({ labelPosition: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
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
                            name="colors"
                            title={__("Colors", "digiblocks")}
                            initialOpen={true}
                        >
							<TabPanel
								className="digiblocks-control-tabs"
								activeClass="active-tab"
								tabs={stateTabList}
							>
								{(tab) => renderStylesTabContent(tab.name)}
							</TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="size-shape"
                            title={__("Size & Shape", "digiblocks")}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__(
                                    "Icon Size",
                                    "digiblocks"
                                )}
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
                                    min={16}
                                    max={100}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__(
                                    "Icon Spacing",
                                    "digiblocks"
                                )}
                            >
                                <RangeControl
                                    value={iconSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconSpacing: {
                                                ...iconSpacing,
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
                            
                            {showLabels && (
								<ResponsiveControl
									label={__(
										"Label Spacing",
										"digiblocks"
									)}
								>
									<RangeControl
										value={labelSpacing[localActiveDevice]}
										onChange={(value) =>
											setAttributes({
												labelSpacing: {
													...labelSpacing,
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
							)}
                            
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={iconBorderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius if not already set
                                    if (value !== 'none' && (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0)) {
                                        setAttributes({
                                            iconBorderWidth: {
                                                desktop: { value: 1, unit: 'px' },
                                                tablet: { value: 1, unit: 'px' },
                                                mobile: { value: 1, unit: 'px' }
                                            }
                                        });
                                    }
                                    
                                    if (value !== 'none' && (!iconBorderRadius || Object.keys(iconBorderRadius).length === 0)) {
                                        setAttributes({
                                            iconBorderRadius: {
                                                desktop: { value: 0, unit: 'px' },
                                                tablet: { value: 0, unit: 'px' },
                                                mobile: { value: 0, unit: 'px' }
                                            }
                                        });
                                    }
                                    
                                    setAttributes({ iconBorderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border width and border radius controls only if a border style is selected */}
                            {iconBorderStyle && iconBorderStyle !== 'none' && (
                                <>
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={iconBorderWidth[localActiveDevice]?.value || 1}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconBorderWidth: {
                                                        ...iconBorderWidth,
                                                        [localActiveDevice]: { value, unit: 'px' },
                                                    },
                                                })
                                            }
                                            min={1}
                                            max={20}
                                            step={1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={iconBorderRadius[localActiveDevice]?.value || 0}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconBorderRadius: {
                                                        ...iconBorderRadius,
                                                        [localActiveDevice]: { value, unit: 'px' },
                                                    },
                                                })
                                            }
                                            min={0}
                                            max={50}
                                            step={1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                            
                            <ResponsiveControl
                                label={__("Padding", "digiblocks")}
                            >
                                <DimensionControl
                                    values={padding && padding[localActiveDevice] ? padding[localActiveDevice] : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                        unit: 'px'
                                    }}
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
                        </TabPanelBody>
                        
                        {showLabels && (
                            <TabPanelBody
                                tab="style"
                                name="typography"
                                title={__("Typography", "digiblocks")}
                                initialOpen={false}
                            >
                                <TypographyControl
                                    label={__(
                                        "Label Typography",
                                        "digiblocks"
                                    )}
                                    value={textTypography}
                                    onChange={(value) =>
                                        setAttributes({
                                            textTypography: value,
                                        })
                                    }
                                    defaults={{
                                        fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                        fontSizeUnit: 'px',
                                        lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                        lineHeightUnit: 'em',
                                    }}
                                />
                            </TabPanelBody>
                        )}
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
                                label={__("Animation Effect", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
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

    // Block props
    const blockProps = useBlockProps({
        className: `digiblocks-social-icons align-${align} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
        "data-custom-id": id, // Always set the block ID as data attribute for CSS targeting
    });

    // Render social icons list
    const renderSocialIcons = () => {
        return icons.map((icon, index) => {
            // Skip rendering icons without iconValue or URL
            if (!icon.iconValue || !icon.iconValue.svg) {
                return null;
            }
            
            // For the editor, we don't need actual links
            return (
                <div 
                    key={icon.id || index} 
                    className="digiblocks-social-icon"
                    title={icon.label || ''}
                >
                    <div className="digiblocks-social-icon-icon">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: icon.iconValue.svg
                            }}
                        />
                    </div>
                    {showLabels && icon.label && (
                        <span className="digiblocks-social-icon-label">{icon.label}</span>
                    )}
                </div>
            );
        }).filter(Boolean); // Filter out null items (icons without iconValue)
    };

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
                {renderSocialIcons()}
            </div>
        </>
    );
};

export default SocialIconsEdit;