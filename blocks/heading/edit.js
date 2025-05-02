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
    BlockControls,
    AlignmentToolbar
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    TabPanel,
    BaseControl
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { animations } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Heading block
 */
const HeadingEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        content,
        level,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        typography,
        align,
        padding,
        margin,
        animation,
        highlightText,
        highlightColor,
        highlightType,
        displaySeparator,
        separatorColor,
        separatorSecondaryColor,
        separatorWidth,
        separatorHeight,
        separatorBorderRadius,
        separatorPosition,
        separatorStyle,
        separatorSpacing,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
        shadowEnabled,
        textShadow
    } = attributes;

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
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

	// Add unique data-custom-id
	useEffect(() => {
        if (!id || !id.includes(clientId.substr(0, 8))) {
            setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
        }
    }, [clientId]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (previewTimeoutRef.current) {
                clearTimeout(previewTimeoutRef.current);
            }
        };
    }, []);

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

    // Heading level options
    const headingLevelOptions = [
        { label: 'H1', value: 1 },
        { label: 'H2', value: 2 },
        { label: 'H3', value: 3 },
        { label: 'H4', value: 4 },
        { label: 'H5', value: 5 },
        { label: 'H6', value: 6 },
    ];

    // Highlight type options
    const highlightTypeOptions = [
        { label: __('Background', 'digiblocks'), value: 'background' },
        { label: __('Text Color', 'digiblocks'), value: 'color' },
        { label: __('Underline', 'digiblocks'), value: 'underline' },
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

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        const blockId = id;
        
        // Typography CSS
        let typographyCSS = '';
        if (typography) {
            if (typography.fontFamily) {
                typographyCSS += `font-family: ${typography.fontFamily};`;
            }
            
            if (typography.fontSize && typography.fontSize[activeDevice]) {
                typographyCSS += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};`;
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
            
            if (typography.lineHeight && typography.lineHeight[activeDevice]) {
                typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};`;
            }
            
            if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
                typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Text shadow CSS
        let textShadowCSS = '';
        if (shadowEnabled && textShadow) {
            textShadowCSS = `text-shadow: ${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color};`;
        }
        
        // Padding and margin
        const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
        const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Enhanced Separator CSS
        let separatorCSS = '';
        if (displaySeparator && separatorColor) {
            const separatorWidthValue = separatorWidth[activeDevice] || 50;
            const separatorHeightValue = separatorHeight[activeDevice] || 3;
            const separatorSpacingValue = separatorSpacing[activeDevice] || 10;
            
            // Get border radius values for the separator
            const separatorBorderRadiusValues = separatorBorderRadius && separatorBorderRadius[activeDevice] 
                ? separatorBorderRadius[activeDevice] 
                : { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' };
            
            const position = separatorPosition === 'top' ? 'top: 0;' : 'bottom: 0;';
            const alignment = align === 'center' ? 'left: 50%; transform: translateX(-50%);' :
                              align === 'right' ? 'right: 0;' : 'left: 0;';
            
            // Different CSS for each separator style
            switch (separatorStyle) {
                case 'line-solid':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'line-gradient':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background: linear-gradient(to right, ${separatorColor}, ${separatorSecondaryColor || '#ffffff'}, ${separatorColor});
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'line-double':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                        
                        [data-custom-id="${blockId}"]::after {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorSecondaryColor || separatorColor};
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue + separatorHeightValue + 3}px;` : `margin-bottom: ${separatorSpacingValue + separatorHeightValue + 3}px;`}
                        }
                    `;
                    break;
                
                case 'line-dashed':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${separatorColor}, 
                                ${separatorColor} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'line-dotted':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${separatorColor}, 
                                ${separatorColor} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'wave':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue * 4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${separatorColor}, 
                                ${separatorColor} 5px, 
                                transparent 5px, 
                                transparent 15px
                            );
                            mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            -webkit-mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'dots':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue * 3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${separatorColor} 25%, 
                                transparent 25%
                            );
                            background-size: ${separatorHeightValue * 3}px ${separatorHeightValue * 3}px;
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'glow':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
                            box-shadow: 0 0 ${separatorHeightValue * 3}px ${separatorHeightValue}px ${separatorColor};
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'faded':
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background: linear-gradient(to right, transparent, ${separatorColor}, transparent);
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                default:
                    separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            }
        }
        
        // Highlight styles
        let highlightCSS = '';
        if (highlightText && highlightText.trim() !== '') {
            if (highlightType === 'background') {
                highlightCSS = `
                    [data-custom-id="${blockId}"] .digiblocks-highlight {
                        background-color: ${highlightColor};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `;
            } else if (highlightType === 'color') {
                highlightCSS = `
                    [data-custom-id="${blockId}"] .digiblocks-highlight {
                        color: ${highlightColor};
                    }
                `;
            } else if (highlightType === 'underline') {
                highlightCSS = `
                    [data-custom-id="${blockId}"] .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${highlightColor};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `;
            }
        }
        
        // Link styles
        let linkCSS = '';
        if (linkEnabled) {
            linkCSS = `
                [data-custom-id="${blockId}"] {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                [data-custom-id="${blockId}"]:hover {
                    ${textHoverColor ? `color: ${textHoverColor};` : ''}
                    ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                }
            `;
        }
        
        // Set base styles for the block
        return `
            /* Main heading styles */
            [data-custom-id="${blockId}"] {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${align};
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${paddingCSS}
                ${marginCSS}
                transition: color 0.3s ease, background-color 0.3s ease;
            }

            [data-custom-id="${blockId}"] .digiblocks-heading-text {
                ${typographyCSS}
                ${textShadowCSS}
                color: ${textColor || 'inherit'};
                margin: 0;
            }
            
            /* Hover effects */
            [data-custom-id="${blockId}"]:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
            }

            [data-custom-id="${blockId}"]:hover .digiblocks-heading-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
            }
            
            /* Animation keyframes */
            ${animationCSS}
            
            /* Separator styles */
            ${separatorCSS}
            
            /* Highlight styles */
            ${highlightCSS}
            
            /* Link styles */
            ${linkCSS}
        `;
    };

    // Function to render highlighted content
    const renderHeadingWithHighlight = () => {
        if (!highlightText || highlightText.trim() === '') {
            return content;
        }

        // Regular expression to escape special characters
        const escapeRegExp = (string) => {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        const parts = content.split(new RegExp(`(${escapeRegExp(highlightText)})`, 'g'));
        
        return parts.map((part, index) => {
            if (part === highlightText) {
                return `<span class="digiblocks-highlight">${part}</span>`;
            }
            return part;
        }).join('');
    };

    // Separator styles preview component
    const SeparatorStylePreview = ({ style, color, secondaryColor, isSelected, onClick }) => {
        const previewStyles = {
            container: {
                display: 'inline-block',
                width: '60px',
                height: '40px',
                margin: '5px',
                padding: '5px',
                border: `1px solid ${isSelected ? '#007cba' : '#ddd'}`,
                backgroundColor: isSelected ? 'rgba(0,124,186,0.1)' : 'white',
                borderRadius: '4px',
                cursor: 'pointer',
                position: 'relative'
            },
            preview: {
                position: 'absolute',
                bottom: '5px',
                left: '5px',
                right: '5px',
                height: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        };

        // Generate preview based on style
        let previewContent = null;
        
        switch (style) {
            case 'line-solid':
                previewContent = <div style={{ width: '100%', height: '3px', backgroundColor: color, borderRadius: '1px' }} />;
                break;
                
            case 'line-gradient':
                previewContent = <div style={{ width: '100%', height: '3px', background: `linear-gradient(to right, ${color}, ${secondaryColor || '#ffffff'}, ${color})`, borderRadius: '1px' }} />;
                break;
                
            case 'line-double':
                previewContent = (
                    <>
                        <div style={{ width: '100%', height: '2px', backgroundColor: color, borderRadius: '1px', marginBottom: '2px' }} />
                        <div style={{ width: '100%', height: '2px', backgroundColor: secondaryColor || color, borderRadius: '1px' }} />
                    </>
                );
                break;
                
            case 'line-dashed':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 6px, transparent 6px, transparent 10px)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'line-dotted':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 2px, transparent 2px, transparent 4px)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'wave':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        backgroundImage: `repeating-linear-gradient(45deg, ${color}, ${color} 2px, transparent 2px, transparent 6px)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'dots':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '5px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} style={{ 
                                width: '4px', 
                                height: '4px', 
                                borderRadius: '50%', 
                                backgroundColor: color 
                            }} />
                        ))}
                    </div>
                );
                break;
                
            case 'glow':
                previewContent = (
                    <div style={{ 
                        width: '50%', 
                        height: '3px', 
                        backgroundColor: color,
                        boxShadow: `0 0 5px 1px ${color}`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'faded':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            default:
                previewContent = <div style={{ width: '100%', height: '3px', backgroundColor: color, borderRadius: '1px' }} />;
        }
        
        return (
            <div style={previewStyles.container} onClick={onClick}>
                <div style={{ textAlign: 'center', fontSize: '8px', marginBottom: '5px' }}>
                    {style.replace('line-', '').charAt(0).toUpperCase() + style.replace('line-', '').slice(1)}
                </div>
                <div style={previewStyles.preview}>
                    {previewContent}
                </div>
            </div>
        );
    };

	// Render separator style grid selector
    const renderSeparatorStyleGrid = () => {
        // Style options
		const separatorStyleOptions = [
			{ label: __('Solid Line', 'digiblocks'), value: 'line-solid' },
			{ label: __('Gradient Line', 'digiblocks'), value: 'line-gradient' },
			{ label: __('Double Line', 'digiblocks'), value: 'line-double' },
			{ label: __('Dashed Line', 'digiblocks'), value: 'line-dashed' },
			{ label: __('Dotted Line', 'digiblocks'), value: 'line-dotted' },
			{ label: __('Wave', 'digiblocks'), value: 'wave' },
			{ label: __('Dot Pattern', 'digiblocks'), value: 'dots' },
			{ label: __('Glow', 'digiblocks'), value: 'glow' },
			{ label: __('Faded Edges', 'digiblocks'), value: 'faded' },
		];

        // Main container style
        const containerStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            justifyContent: 'center',
            margin: '0 -5px',
            maxHeight: '200px',
            overflow: 'auto',
            padding: '4px 0',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            backgroundColor: '#f9f9f9'
        };

        return (
            <div style={containerStyle}>
				{separatorStyleOptions.map((option) => (
					<SeparatorStylePreview
						key={option.value}
						style={option.value}
						color={separatorColor}
						secondaryColor={separatorSecondaryColor}
						isSelected={separatorStyle === option.value}
						onClick={() => setAttributes({ separatorStyle: option.value })}
					/>
				))}
			</div>
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
                            name="heading-settings"
                            title={__("Heading Settings", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Heading Level", "digiblocks")}
                                value={level}
                                options={headingLevelOptions}
                                onChange={(value) => setAttributes({ level: parseInt(value) })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

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
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="separator"
                            title={__("Separator", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Display Separator", "digiblocks")}
                                checked={displaySeparator}
                                onChange={(value) => setAttributes({ displaySeparator: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displaySeparator && (
                                <>
                                    <BaseControl
                                        label={__("Separator Style", "digiblocks")}
                                        className="digiblocks-separator-style-selector"
                                    >
                                        {renderSeparatorStyleGrid()}
                                    </BaseControl>
                                    
                                    <ToggleGroupControl
                                        label={__("Position", "digiblocks")}
                                        value={separatorPosition}
                                        onChange={(value) => setAttributes({ separatorPosition: value })}
                                        isBlock
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    >
                                        <ToggleGroupControlOption 
                                            value="bottom" 
                                            label={__("Bottom", "digiblocks")} 
                                        />
                                        <ToggleGroupControlOption 
                                            value="top" 
                                            label={__("Top", "digiblocks")} 
                                        />
                                    </ToggleGroupControl>
                                    
                                    <PanelColorSettings
                                        title={__("Separator Colors", "digiblocks")}
                                        initialOpen={true}
                                        colorSettings={[
                                            {
                                                value: separatorColor,
                                                onChange: (value) => setAttributes({ separatorColor: value }),
                                                label: __("Primary Color", "digiblocks"),
                                            },
                                            ...(separatorStyle === 'line-gradient' || 
                                               separatorStyle === 'line-double' ? 
                                              [{
                                                  value: separatorSecondaryColor,
                                                  onChange: (value) => setAttributes({ separatorSecondaryColor: value }),
                                                  label: __("Secondary Color", "digiblocks"),
                                              }] : [])
                                        ]}
                                    />
                                    
                                    <ResponsiveControl
                                        label={__("Width", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={separatorWidth[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatorWidth: {
                                                        ...separatorWidth,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={10}
                                            max={300}
                                            step={1}
                                            __nextHasNoMarginBottom={true}
                                            __next40pxDefaultSize={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Height", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={separatorHeight[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatorHeight: {
                                                        ...separatorHeight,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={1}
                                            max={20}
                                            step={1}
                                            __nextHasNoMarginBottom={true}
                                            __next40pxDefaultSize={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Spacing", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={separatorSpacing[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatorSpacing: {
                                                        ...separatorSpacing,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={0}
                                            max={50}
                                            step={1}
                                            __nextHasNoMarginBottom={true}
                                            __next40pxDefaultSize={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    {(['line-solid', 'line-gradient', 'line-double', 'line-dashed', 'line-dotted', 'glow', 'faded'].includes(separatorStyle)) && (
                                        <ResponsiveControl
                                            label={__("Border Radius", "digiblocks")}
                                        >
                                            <DimensionControl
                                                values={separatorBorderRadius && separatorBorderRadius[localActiveDevice] ? separatorBorderRadius[localActiveDevice] : {
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    left: 0,
                                                    unit: 'px'
                                                }}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        separatorBorderRadius: {
                                                            ...separatorBorderRadius,
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
                                    )}
                                </>
                            )}
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="text-highlight"
                            title={__("Text Highlight", "digiblocks")}
                            initialOpen={false}
                        >
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="highlight-text">
                                        {__("Text to Highlight", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="highlight-text"
                                        value={highlightText || ""}
                                        onChange={(e) =>
                                            setAttributes({ highlightText: e.target.value })
                                        }
                                        placeholder={__("Enter text to highlight", "digiblocks")}
                                    />
                                </div>
                                <p className="components-base-control__help">
                                    {__("The text you enter here will be highlighted in your heading.", "digiblocks")}
                                </p>
                            </div>

                            {highlightText && highlightText.trim() !== '' && (
                                <>
                                    <ToggleGroupControl
                                        label={__("Highlight Type", "digiblocks")}
                                        value={highlightType}
                                        onChange={(value) => setAttributes({ highlightType: value })}
                                        isBlock
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    >
                                        <ToggleGroupControlOption 
                                            value="background" 
                                            label={__("Background", "digiblocks")} 
                                        />
                                        <ToggleGroupControlOption 
                                            value="color" 
                                            label={__("Text", "digiblocks")} 
                                        />
                                        <ToggleGroupControlOption 
                                            value="underline" 
                                            label={__("Underline", "digiblocks")} 
                                        />
                                    </ToggleGroupControl>
                                    
                                    <PanelColorSettings
                                        title={__("Highlight Color", "digiblocks")}
                                        initialOpen={true}
                                        colorSettings={[
                                            {
                                                value: highlightColor,
                                                onChange: (value) => setAttributes({ highlightColor: value }),
                                                label: __("Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                </>
                            )}
                        </TabPanelBody>
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
                                                title={__("Color Settings", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: textColor,
                                                        onChange: (value) => setAttributes({ textColor: value }),
                                                        label: __("Text Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundColor,
                                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                                        label: __("Background Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    } else {
                                        return (
                                            <PanelColorSettings
                                                title={__("Hover Color Settings", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: textHoverColor,
                                                        onChange: (value) => setAttributes({ textHoverColor: value }),
                                                        label: __("Text Hover Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundHoverColor,
                                                        onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                                                        label: __("Background Hover Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
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
                                label={__("Typography Settings", "digiblocks")}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 32, tablet: 28, mobile: 24 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="text-shadow"
                            title={__("Text Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Enable Text Shadow", "digiblocks")}
                                checked={shadowEnabled}
                                onChange={(value) => setAttributes({ shadowEnabled: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {shadowEnabled && (
                                <>
                                    <PanelColorSettings
                                        title={__("Shadow Color", "digiblocks")}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: textShadow.color,
                                                onChange: (value) => 
                                                    setAttributes({ 
                                                        textShadow: {
                                                            ...textShadow,
                                                            color: value
                                                        }
                                                    }),
                                                label: __("Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                    
                                    <RangeControl
                                        label={__("Horizontal Offset", "digiblocks")}
                                        value={textShadow.horizontal}
                                        onChange={(value) => 
                                            setAttributes({ 
                                                textShadow: {
                                                    ...textShadow,
                                                    horizontal: value
                                                }
                                            })
                                        }
                                        min={-20}
                                        max={20}
                                        step={1}
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    />
                                    
                                    <RangeControl
                                        label={__("Vertical Offset", "digiblocks")}
                                        value={textShadow.vertical}
                                        onChange={(value) => 
                                            setAttributes({ 
                                                textShadow: {
                                                    ...textShadow,
                                                    vertical: value
                                                }
                                            })
                                        }
                                        min={-20}
                                        max={20}
                                        step={1}
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    />
                                    
                                    <RangeControl
                                        label={__("Blur Radius", "digiblocks")}
                                        value={textShadow.blur}
                                        onChange={(value) => 
                                            setAttributes({ 
                                                textShadow: {
                                                    ...textShadow,
                                                    blur: value
                                                }
                                            })
                                        }
                                        min={0}
                                        max={20}
                                        step={1}
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    />
                                </>
                            )}
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

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-heading align-${align} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
        "data-custom-id": id, // Always set the block ID as data attribute for CSS targeting
    });

    // Create the proper heading tag based on level
    const HeadingTag = `h${level}`;

    return (
        <>
            {/* Add alignment control to the toolbar */}
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
                <HeadingTag className="digiblocks-heading-text">
                    <RichText
                        value={content}
                        onChange={(value) => setAttributes({ content: value })}
                        placeholder={__("Add Your Heading", "digiblocks")}
                        allowedFormats={['core/bold', 'core/italic']}
                    />
                </HeadingTag>
            </div>
        </>
    );
};

export default HeadingEdit;