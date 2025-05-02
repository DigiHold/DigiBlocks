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
    BaseControl
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { animations } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Countdown block
 */
const CountdownEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
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
        showBoxShadow,
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
        displaySeparator,
        separatorType,
        boxesEqual,
        style
    } = attributes;

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
    const previewTimeoutRef = useRef(null);
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
    const [activeTab, setActiveTab] = useState("options");
    
    // State for active style tab
    const [activeStyleTab, setActiveStyleTab] = useState("normal");
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Check if the ID needs to be regenerated using clientId
		if (!id || !id.includes(clientId.substr(0, 8))) {
			setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
		}

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
            
            if (previewTimeoutRef.current) {
                clearTimeout(previewTimeoutRef.current);
            }
        };
    }, [clientId, endDate, setAttributes]);

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
        
        setIsAnimating(true);
        
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
                setIsAnimating(false);
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

    // Generate CSS for the countdown box styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        const blockId = id;
        
        // Get device-specific values
        const currentBoxPadding = boxPadding && boxPadding[activeDevice] ? boxPadding[activeDevice] : { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' };
        const currentBoxMargin = boxMargin && boxMargin[activeDevice] ? boxMargin[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' };
        const currentBoxBorderRadius = boxBorderRadius && boxBorderRadius[activeDevice] ? boxBorderRadius[activeDevice] : { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' };
        const currentBoxBorderWidth = boxBorderWidth && boxBorderWidth[activeDevice] ? boxBorderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
        const currentItemSpacing = itemSpacing && itemSpacing[activeDevice] !== undefined ? itemSpacing[activeDevice] : 20;
        const currentLabelSpacing = labelSpacing && labelSpacing[activeDevice] !== undefined ? labelSpacing[activeDevice] : 5;
        
        // Digit typography
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
            if (titleTypography.lineHeight && titleTypography.lineHeight[activeDevice]) {
                titleTypographyCSS += `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};`;
            }
            if (titleTypography.letterSpacing && titleTypography.letterSpacing[activeDevice]) {
                titleTypographyCSS += `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};`;
            }
        }

        // Label typography
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
            if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
                contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};`;
            }
            if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
                contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Box shadow style
        let boxShadowCSS = '';
        if (showBoxShadow && boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Box shadow hover style
        let boxShadowHoverCSS = '';
        if (showBoxShadow && boxShadowHover && boxShadowHover.enable) {
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
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor || '#333333'};
                            border-radius: ${currentBoxBorderRadius.top}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.right}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.bottom}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.left}${currentBoxBorderRadius.unit};
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor || '#333333'};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'outlined':
                    specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${digitColor || '#333333'};
                            border: ${currentBoxBorderWidth.top}${currentBoxBorderWidth.unit} solid ${boxBorderColor || '#e0e0e0'};
                            border-radius: ${currentBoxBorderRadius.top}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.right}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.bottom}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.left}${currentBoxBorderRadius.unit};
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || 'transparent'};
                            color: ${digitHoverColor || digitColor || '#333333'};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'pill':
                    specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor || '#333333'};
                            border-radius: 50px;
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor || '#333333'};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'rounded':
                    specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor || '#333333'};
                            border-radius: 8px;
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor || '#333333'};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'circle':
                    specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || '#f0f0f0'};
                            color: ${digitColor || '#333333'};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || '#e0e0e0'};
                            color: ${digitHoverColor || digitColor || '#333333'};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
                case 'default':
                default:
                    specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            color: ${digitColor || '#333333'};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${digitHoverColor || digitColor || '#333333'};
                            ${boxShadowHoverCSS}
                        }
                    `;
                    break;
            }
        } else {
            // Simple style (no boxes)
            specificStyles = `
                [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                    color: ${digitColor || '#333333'};
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${digitHoverColor || digitColor || '#333333'};
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
                [data-custom-id="${blockId}"] .digiblocks-countdown-separator {
                    color: ${separatorColor || '#333333'};
                    font-size: ${titleTypography && titleTypography.fontSize && titleTypography.fontSize[activeDevice] ? titleTypography.fontSize[activeDevice] + (titleTypography.fontSizeUnit || 'px') : '2rem'};
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-separator::before {
                    content: "${separatorContent}";
                }
                [data-custom-id="${blockId}"]:hover .digiblocks-countdown-separator {
                    color: ${separatorHoverColor || separatorColor || '#333333'};
                }
            `;
        }
        
        // Equal width boxes if needed
        let equalWidthStyles = '';
        if (style === 'boxes' && boxesEqual) {
            equalWidthStyles = `
                [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
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
                [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-label {
                    margin-bottom: ${currentLabelSpacing}px;
                    margin-top: 0;
                }
            `;
        } else if (labelPosition === 'inside') {
            if (style === 'boxes') {
                labelPositionStyles = `
                    [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    [data-custom-id="${blockId}"] .digiblocks-countdown-digit {
                        margin-bottom: ${currentLabelSpacing}px;
                    }
                    [data-custom-id="${blockId}"] .digiblocks-countdown-label {
                        margin-top: 0;
                    }
                    [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `;
            } else {
                // For simple style with inside labels, make it similar to bottom labels
                labelPositionStyles = `
                    [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    [data-custom-id="${blockId}"] .digiblocks-countdown-label {
                        margin-top: ${currentLabelSpacing}px;
                    }
                `;
            }
        } else {
            // Default bottom position
            labelPositionStyles = `
                [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                    flex-direction: column;
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-label {
                    margin-top: ${currentLabelSpacing}px;
                }
            `;
        }

        // Complete CSS
        return `
            /* Countdown Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                margin: ${currentBoxMargin.top}${currentBoxMargin.unit} ${currentBoxMargin.right}${currentBoxMargin.unit} ${currentBoxMargin.bottom}${currentBoxMargin.unit} ${currentBoxMargin.left}${currentBoxMargin.unit};
                text-align: ${align};
                display: block;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
                gap: ${currentItemSpacing}px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-countdown-digit {
                ${titleTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-countdown-label {
                ${contentTypographyCSS}
                color: ${labelColor || '#666666'};
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"]:hover .digiblocks-countdown-label {
                color: ${labelHoverColor || labelColor || '#666666'};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-countdown-expired {
                ${titleTypographyCSS}
                color: ${digitColor || '#333333'};
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

                                <ToggleControl
                                    label={__("Box Shadow", "digiblocks")}
                                    checked={!!showBoxShadow}
                                    onChange={() => setAttributes({ showBoxShadow: !showBoxShadow })}
									__nextHasNoMarginBottom={true}
                                />

                                {showBoxShadow && (
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
                                )}
                            </TabPanelBody>
                        )}

                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__("Spacing", "digiblocks")}
                            initialOpen={false}
                        >
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
        className: `digiblocks-countdown ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
        "data-custom-id": id, // Always set the block ID as data attribute for CSS targeting
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