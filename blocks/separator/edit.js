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
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    TextControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    BaseControl
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, TypographyControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * SeparatorStylePreview Component - Creates a visual preview of a separator style
 */
const SeparatorStylePreview = ({ style, primaryColor, secondaryColor, isSelected, onClick }) => {
    // Style for the container
    const containerStyle = {
        display: 'inline-flex',
        flexDirection: 'column',
        width: '60px',
        height: '60px',
        margin: '5px',
        border: `1px solid ${isSelected ? '#007cba' : '#ddd'}`,
        backgroundColor: isSelected ? 'rgba(0,124,186,0.1)' : 'white',
        borderRadius: '4px',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 0.2s ease'
    };

    // Style for the label
    const labelStyle = {
        textAlign: 'center',
        fontSize: '10px',
        padding: '3px 0',
        fontWeight: isSelected ? '500' : 'normal',
        borderBottom: `1px solid ${isSelected ? '#e0e0e0' : 'transparent'}`,
        backgroundColor: isSelected ? 'rgba(0,124,186,0.05)' : 'transparent'
    };

    // Style for the preview area
    const previewStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px'
    };

    // Generate preview based on style
    let previewContent = null;
    
    switch (style) {
        case 'line':
            previewContent = <div style={{ width: '100%', height: '3px', backgroundColor: primaryColor, borderRadius: '1px' }} />;
            break;
            
        case 'dashed':
            previewContent = (
                <div style={{ 
                    width: '100%', 
                    height: '2px', 
                    backgroundImage: `linear-gradient(to right, ${primaryColor} 50%, transparent 50%)`,
                    backgroundSize: '8px 2px',
                    backgroundRepeat: 'repeat-x',
                    borderRadius: '1px'
                }} />
            );
            break;
            
        case 'dotted':
            previewContent = (
                <div style={{ 
                    width: '100%', 
                    height: '3px', 
                    backgroundImage: `radial-gradient(circle, ${primaryColor} 1px, transparent 1px)`,
                    backgroundSize: '4px 3px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat-x'
                }} />
            );
            break;
            
        case 'double':
            previewContent = (
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '2px' }}>
                    <div style={{ height: '1px', backgroundColor: primaryColor, borderRadius: '1px' }} />
                    <div style={{ height: '1px', backgroundColor: primaryColor, borderRadius: '1px' }} />
                </div>
            );
            break;
            
        case 'gradient':
            previewContent = (
                <div style={{ 
                    width: '100%', 
                    height: '3px', 
                    background: `linear-gradient(to right, ${secondaryColor || 'transparent'}, ${primaryColor}, ${secondaryColor || 'transparent'})`,
                    borderRadius: '1px'
                }} />
            );
            break;
            
        case 'shadow':
            previewContent = (
                <div style={{ 
                    width: '100%', 
                    height: '2px', 
                    backgroundColor: primaryColor,
                    boxShadow: `0 1px 2px rgba(0,0,0,0.3)`,
                    borderRadius: '1px'
                }} />
            );
            break;
            
        case 'wave':
            previewContent = (
                <svg height="20" width="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 C20,5 30,15 50,10 C70,5 80,15 100,10 L100,20 L0,20 Z" fill={primaryColor} />
                </svg>
            );
            break;
            
        case 'zigzag':
            previewContent = (
				<svg height="10" width="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
					<polyline 
						points="0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0" 
						fill="none" 
						stroke={primaryColor} 
						strokeWidth="2"
					/>
				</svg>
            );
            break;
            
        case 'slant':
            previewContent = (
                <svg height="10" width="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon points="0,0 100,10 100,0" fill={primaryColor} />
                </svg>
            );
            break;
            
        default:
            previewContent = <div style={{ width: '100%', height: '3px', backgroundColor: primaryColor, borderRadius: '1px' }} />;
    }

    // Get style name for display
    const getDisplayName = () => {
        switch (style) {
            case 'line': return 'Line';
            case 'dashed': return 'Dashed';
            case 'dotted': return 'Dotted';
            case 'double': return 'Double';
            case 'gradient': return 'Gradient';
            case 'shadow': return 'Shadow';
            case 'wave': return 'Wave';
            case 'zigzag': return 'Zigzag';
            case 'slant': return 'Slant';
            default: return style.charAt(0).toUpperCase() + style.slice(1);
        }
    };
    
    return (
        <div style={containerStyle} onClick={onClick}>
            <div style={labelStyle}>
                {getDisplayName()}
            </div>
            <div style={previewStyle}>
                {previewContent}
            </div>
        </div>
    );
};

/**
 * Edit function for the Separator block
 */
const SeparatorEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        contentType,
        content,
        align,
        iconValue,
        separatorStyle,
        primaryColor,
        secondaryColor,
        width,
        widthUnit,
        height,
        heightUnit,
        borderRadius,
        margin,
        animation,
        typography,
        iconSize,
        gap,
        textColor
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
			return (obj.tablet !== '' && obj.tablet !== undefined && obj.tablet !== null) ? obj.tablet : obj.desktop;
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
    const [activeTab, setActiveTab] = useState("options");

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
				animationPreview(id, animation, animations, previewTimeoutRef);
			}, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [animation]);

	// Button click handler
	const handlePreviewClick = () => {
		animationPreview(id, animation, animations, previewTimeoutRef);
	};

    // Width unit options
    const widthUnitOptions = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' }
    ];

    // Height unit options
    const heightUnitOptions = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' }
    ];

    // Content type options
    const contentTypeOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Text", "digiblocks"), value: "text" },
        { label: __("Icon", "digiblocks"), value: "icon" }
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

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Helper function to render SVG for special separator styles
    const renderStyleSVG = () => {
        switch (separatorStyle) {
            case 'wave':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={primaryColor}></path>
                    </svg>
                );
            case 'zigzag':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0" fill={primaryColor}></path>
					</svg>
                );
            case 'slant':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={primaryColor}></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    // Generate CSS for the separator
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Base styles
        let separatorBaseStyles = '';
        const marginValue = margin[activeDevice] || { top: 30, bottom: 30, unit: 'px' };
        
        // Width and height with units
        const currentWidth = width[activeDevice] || 100;
        const currentHeight = height[activeDevice] || 3;
        
        // Handle different separator styles
        let separatorSpecificStyles = '';
        let beforeAfterStyles = '';
        
        // Styles based on separator type
        switch (separatorStyle) {
            case 'line':
                separatorBaseStyles = `
                    background-color: ${primaryColor};
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                `;
                break;
                
            case 'dashed':
                separatorBaseStyles = `
                    border-top: ${currentHeight}${heightUnit} dashed ${primaryColor};
                    width: ${currentWidth}${widthUnit};
                `;
                break;
                
            case 'dotted':
                separatorBaseStyles = `
                    border-top: ${currentHeight}${heightUnit} dotted ${primaryColor};
                    width: ${currentWidth}${widthUnit};
                `;
                break;
                
            case 'double':
                separatorBaseStyles = `
                    border-top: ${Math.max(1, Math.floor(currentHeight / 3))}${heightUnit} solid ${primaryColor};
                    border-bottom: ${Math.max(1, Math.floor(currentHeight / 3))}${heightUnit} solid ${primaryColor};
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                `;
                break;
                
            case 'gradient':
                separatorBaseStyles = `
                    background: linear-gradient(90deg, ${secondaryColor || 'transparent'} 0%, ${primaryColor} 50%, ${secondaryColor || 'transparent'} 100%);
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                `;
                break;
                
            case 'shadow':
                separatorBaseStyles = `
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    background-color: ${primaryColor};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                    box-shadow: 0 ${Math.max(2, currentHeight/2)}px ${Math.max(4, currentHeight)}px rgba(0,0,0,0.2);
                `;
                break;
                
            case 'wave':
            case 'zigzag':
            case 'slant':
                separatorBaseStyles = `
                    width: 100%;
                    height: 100%;
                    position: relative;
                `;
                separatorSpecificStyles = `
                    .${id} .digiblocks-separator-shape {
                        width: 100%;
                        height: 100%;
                    }
                    .${id} .digiblocks-separator-shape svg {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                `;
                break;
        }
        
        // Content styles for text or icon - only for compatible separator styles
        let contentStyles = '';
        if ((contentType === 'text' || contentType === 'icon') && !['wave', 'zigzag', 'slant'].includes(separatorStyle)) {
            const currentGap = gap[activeDevice] || 15;
            
            // Common styles for text/icon container
            contentStyles = `
                .${id} .digiblocks-separator-content {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 0 ${currentGap}px;
                    ${contentType === 'text' && textColor ? `color: ${textColor};` : ''}
                }
                
                .${id}.digiblocks-separator-has-content .digiblocks-separator-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    transform: translateY(-50%);
                }
            `;
        }
        
        // Icon-specific styles
        if (contentType === 'icon' && iconValue && iconValue.svg) {
            contentStyles += `
                .${id} .digiblocks-separator-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .${id} .digiblocks-separator-icon svg {
                    width: ${getVal(iconSize, activeDevice) || 24}px;
					height: ${getVal(iconSize, activeDevice) || 24}px;
                    fill: ${textColor || primaryColor};
                }
            `;
        }
        
        // Text-specific styles
        if (contentType === 'text' && typography) {
            let typographyStyles = '';
            
            if (typography.fontFamily) {
                typographyStyles += `font-family: ${typography.fontFamily};`;
            }
            
            const fontSize = getVal(typography.fontSize, activeDevice);
			if (fontSize) {
				typographyStyles += `font-size: ${fontSize}${typography.fontSizeUnit || 'px'};`;
			}
            
            if (typography.fontWeight) {
                typographyStyles += `font-weight: ${typography.fontWeight};`;
            }
            
            if (typography.fontStyle) {
                typographyStyles += `font-style: ${typography.fontStyle};`;
            }
            
            if (typography.textTransform) {
                typographyStyles += `text-transform: ${typography.textTransform};`;
            }
            
            const lineHeight = getVal(typography.lineHeight, activeDevice);
			if (lineHeight) {
				typographyStyles += `line-height: ${lineHeight}${typography.lineHeightUnit || 'em'};`;
			}
            
            const letterSpacing = getVal(typography.letterSpacing, activeDevice);
			if (letterSpacing || letterSpacing === 0) {
				typographyStyles += `letter-spacing: ${letterSpacing}${typography.letterSpacingUnit || 'px'};`;
			}
            
            contentStyles += `
                .${id} .digiblocks-separator-text {
                    ${typographyStyles}
                }
            `;
        }
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Alignment styles
        let alignmentStyles = '';
        switch (align) {
            case 'center':
                alignmentStyles = 'margin-left: auto; margin-right: auto;';
                break;
            case 'right':
                alignmentStyles = 'margin-left: auto; margin-right: 0;';
                break;
            default: // 'left'
                alignmentStyles = 'margin-left: 0; margin-right: auto;';
                break;
        }
        
        // Complete CSS
        return `
            /* Separator Block - ${id} */
            .${id} {
                margin-top: ${marginValue.top}${marginValue.unit};
                margin-bottom: ${marginValue.bottom}${marginValue.unit};
                display: flex;
                align-items: center;
                justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
                position: relative;
                clear: both;
                width: 100%;
            }
            
            .${id} .digiblocks-separator-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
                width: 100%;
            }
            
            .${id} .digiblocks-separator-line {
                ${separatorBaseStyles}
                ${alignmentStyles}
            }
            
            ${separatorSpecificStyles}
            ${contentStyles}
            ${animationCSS}
            
            /* Responsive styles will be handled by media queries */
            @media (max-width: 991px) {
                .${id} {
                    margin-top: ${margin.tablet ? margin.tablet.top + (margin.tablet.unit || 'px') : marginValue.top + marginValue.unit};
                    margin-bottom: ${margin.tablet ? margin.tablet.bottom + (margin.tablet.unit || 'px') : marginValue.bottom + marginValue.unit};
                }
                
                .${id} .digiblocks-separator-line {
                    width: ${width.tablet ? width.tablet + widthUnit : currentWidth + widthUnit};
                    height: ${height.tablet ? height.tablet + heightUnit : currentHeight + heightUnit};
                    ${borderRadius.tablet ? `border-radius: ${borderRadius.tablet}px;` : ''}
                }
                
                ${contentType === 'icon' ? `
                .${id} .digiblocks-separator-icon svg {
                    width: ${iconSize.tablet || 20}px;
                    height: ${iconSize.tablet || 20}px;
                }` : ''}
            }
            
            @media (max-width: 767px) {
                .${id} {
                    margin-top: ${margin.mobile ? margin.mobile.top + (margin.mobile.unit || 'px') : marginValue.top + marginValue.unit};
                    margin-bottom: ${margin.mobile ? margin.mobile.bottom + (margin.mobile.unit || 'px') : marginValue.bottom + marginValue.unit};
                }
                
                .${id} .digiblocks-separator-line {
                    width: ${width.mobile ? width.mobile + widthUnit : currentWidth + widthUnit};
                    height: ${height.mobile ? height.mobile + heightUnit : currentHeight + heightUnit};
                    ${borderRadius.mobile ? `border-radius: ${borderRadius.mobile}px;` : ''}
                }
                
                ${contentType === 'icon' ? `
                .${id} .digiblocks-separator-icon svg {
                    width: ${iconSize.mobile || 16}px;
                    height: ${iconSize.mobile || 16}px;
                }` : ''}
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
        // Make sure we only try to display an icon if the iconValue exists and has a non-empty svg property
        if (!iconValue || !iconValue.svg || iconValue.svg.trim() === '') {
            return null;
        }
        
        return (
            <div className="digiblocks-separator-icon">
                <span
                    dangerouslySetInnerHTML={{
                        __html: iconValue.svg,
                    }}
                />
            </div>
        );
    };

    // Render separator style grid selector
    const renderSeparatorStyleGrid = () => {
        // Style options to display
        const separatorStyleOptions = [
            { label: "Line", value: "line" },
            { label: "Dashed", value: "dashed" },
            { label: "Dotted", value: "dotted" },
            { label: "Double", value: "double" },
            { label: "Gradient", value: "gradient" },
            { label: "Shadow", value: "shadow" },
            { label: "Wave", value: "wave" },
            { label: "Zigzag", value: "zigzag" },
            { label: "Slant", value: "slant" }
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
                        primaryColor={primaryColor || '#1e73be'}
                        secondaryColor={secondaryColor}
                        isSelected={separatorStyle === option.value}
                        onClick={() => {
                            // If switching to a style that doesn't support content, reset content type
                            if (['wave', 'zigzag', 'slant'].includes(option.value) && contentType !== 'none') {
                                setAttributes({ 
                                    separatorStyle: option.value,
                                    contentType: 'none'
                                });
                            } else {
                                setAttributes({ separatorStyle: option.value });
                            }
                        }}
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
                        <div className="components-panel__body is-opened">
                            <BaseControl
                                label={__("Separator Style", "digiblocks")}
                                id="separator-style-selector"
								__nextHasNoMarginBottom={true}
                            >
                                {renderSeparatorStyleGrid()}
                            </BaseControl>
                            
                            {/* Only show content type if not using special separator styles */}
                            {!['wave', 'zigzag', 'slant'].includes(separatorStyle) ? (
                                <ToggleGroupControl
                                    label={__("Content Type", "digiblocks")}
                                    value={contentType}
                                    onChange={(value) => setAttributes({ contentType: value })}
                                    isBlock
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                >
                                    {contentTypeOptions.map(option => (
                                        <ToggleGroupControlOption
                                            key={option.value}
                                            value={option.value}
                                            label={option.label}
                                        />
                                    ))}
                                </ToggleGroupControl>
                            ) : (
                                <div className="components-notice is-warning" style={{ margin: '0 0 16px 0' }}>
                                    <div className="components-notice__content">
                                        {__("Content is not available with this separator style.", "digiblocks")}
                                    </div>
                                </div>
                            )}
                            
                            {contentType === 'text' && (
                                <TextControl
                                    label={__("Text Content", "digiblocks")}
                                    value={content}
                                    onChange={(value) => setAttributes({ content: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            {contentType === 'icon' && (
                                <div style={{ marginTop: '15px' }}>
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
                                </div>
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
                            <PanelColorSettings
                                title={__("Separator Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: primaryColor,
                                        onChange: (value) => setAttributes({ primaryColor: value }),
                                        label: __("Primary Color", "digiblocks")
                                    },
                                    ...(separatorStyle === 'gradient' ? [
                                        {
                                            value: secondaryColor,
                                            onChange: (value) => setAttributes({ secondaryColor: value }),
                                            label: __("Secondary Color", "digiblocks")
                                        }
                                    ] : []),
                                    ...(contentType !== 'none' ? [
                                        {
                                            value: textColor,
                                            onChange: (value) => setAttributes({ textColor: value }),
                                            label: contentType === 'text' ? __("Text Color", "digiblocks") : __("Icon Color", "digiblocks")
                                        }
                                    ] : [])
                                ]}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="dimensions"
                            title={__("Dimensions", "digiblocks")}
                            initialOpen={false}
                        >
							{!['wave', 'zigzag', 'slant'].includes(separatorStyle) && (
								<>
									<div className="digiblocks-size-type-field-tabs">
										<div className="digiblocks-responsive-control-inner">
											<div className="components-base-control">
												<div className="digiblocks-range-control digiblocks-size-type-field-tabs">
													<div className="digiblocks-control__header">
														<div className="digiblocks-responsive-label-wrap">
															<span className="digiblocks-control-label">{__('Width', 'digiblocks')}</span>
															<button 
																type="button" 
																aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
																className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
																onClick={() => window.digi.responsiveState.toggleDevice()}
															>
																{window.digi.icons.deviceIcons[localActiveDevice]}
															</button>
														</div>
														<div className="digiblocks-range-control__actions digiblocks-control__actions">
															<div tabIndex="0">
																<button 
																	type="button" 
																	disabled={width[localActiveDevice] === 100}
																	className="components-button digiblocks-reset is-secondary is-small"
																	onClick={() => setAttributes({
																		width: {
																			...width,
																			[localActiveDevice]: 100
																		}
																	})}
																>
																	<span className="dashicon dashicons dashicons-image-rotate"></span>
																</button>
															</div>
															<ToggleGroupControl
																value={widthUnit}
																onChange={(value) => setAttributes({ widthUnit: value })}
																isBlock
																isSmall
																hideLabelFromVision
																aria-label={__("Width Unit", "digiblocks")}
																__next40pxDefaultSize={true}
																__nextHasNoMarginBottom={true}
															>
																{widthUnitOptions.map(option => (
																	<ToggleGroupControlOption
																		key={option.value}
																		value={option.value}
																		label={option.label}
																	/>
																))}
															</ToggleGroupControl>
														</div>
													</div>
													<div className="digiblocks-range-control__mobile-controls">
														<RangeControl
															value={width[localActiveDevice]}
															onChange={(value) => setAttributes({
																width: {
																	...width,
																	[localActiveDevice]: value
																}
															})}
															min={1}
															max={widthUnit === '%' ? 100 : 1000}
															step={1}
															__next40pxDefaultSize={true}
															__nextHasNoMarginBottom={true}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="digiblocks-size-type-field-tabs">
										<div className="digiblocks-responsive-control-inner">
											<div className="components-base-control">
												<div className="digiblocks-range-control digiblocks-size-type-field-tabs">
													<div className="digiblocks-control__header">
														<div className="digiblocks-responsive-label-wrap">
															<span className="digiblocks-control-label">{__('Height', 'digiblocks')}</span>
															<button 
																type="button" 
																aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
																className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
																onClick={() => window.digi.responsiveState.toggleDevice()}
															>
																{window.digi.icons.deviceIcons[localActiveDevice]}
															</button>
														</div>
														<div className="digiblocks-range-control__actions digiblocks-control__actions">
															<div tabIndex="0">
																<button 
																	type="button" 
																	disabled={height[localActiveDevice] === 3}
																	className="components-button digiblocks-reset is-secondary is-small"
																	onClick={() => setAttributes({
																		height: {
																			...height,
																			[localActiveDevice]: 3
																		}
																	})}
																>
																	<span className="dashicon dashicons dashicons-image-rotate"></span>
																</button>
															</div>
															<ToggleGroupControl
																value={heightUnit}
																onChange={(value) => setAttributes({ heightUnit: value })}
																isBlock
																isSmall
																hideLabelFromVision
																aria-label={__("Height Unit", "digiblocks")}
																__next40pxDefaultSize={true}
																__nextHasNoMarginBottom={true}
															>
																{heightUnitOptions.map(option => (
																	<ToggleGroupControlOption
																		key={option.value}
																		value={option.value}
																		label={option.label}
																	/>
																))}
															</ToggleGroupControl>
														</div>
													</div>
													<div className="digiblocks-range-control__mobile-controls">
														<RangeControl
															value={height[localActiveDevice]}
															onChange={(value) => setAttributes({
																height: {
																	...height,
																	[localActiveDevice]: value
																}
															})}
															min={1}
															max={heightUnit === '%' ? 20 : 100}
															step={1}
															__next40pxDefaultSize={true}
															__nextHasNoMarginBottom={true}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</>
                            )}
                            
                            {['line', 'gradient', 'shadow'].includes(separatorStyle) && (
                                <div className="digiblocks-responsive-control">
                                    <div className="digiblocks-control__header">
                                        <div className="digiblocks-responsive-label-wrap">
                                            <span className="digiblocks-control-label">{__("Border Radius", "digiblocks")}</span>
                                            <button 
                                                type="button" 
                                                aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                                                className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
                                                onClick={() => window.digi.responsiveState.toggleDevice()}
                                            >
                                                {window.digi.icons.deviceIcons[localActiveDevice]}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="digiblocks-responsive-control-content">
                                        <div className="digiblocks-unit-control">
                                            <RangeControl
                                                value={borderRadius[localActiveDevice]}
                                                onChange={(value) => setAttributes({
                                                    borderRadius: {
                                                        ...borderRadius,
                                                        [localActiveDevice]: value
                                                    }
                                                })}
                                                min={0}
                                                max={50}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {(contentType === 'text' || contentType === 'icon') && (
                                <div className="digiblocks-responsive-control">
                                    <div className="digiblocks-control__header">
                                        <div className="digiblocks-responsive-label-wrap">
                                            <span className="digiblocks-control-label">{__("Gap", "digiblocks")}</span>
                                            <button 
                                                type="button" 
                                                aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                                                className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
                                                onClick={() => window.digi.responsiveState.toggleDevice()}
                                            >
                                                {window.digi.icons.deviceIcons[localActiveDevice]}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="digiblocks-responsive-control-content">
                                        <div className="digiblocks-unit-control">
                                            <RangeControl
                                                value={gap[localActiveDevice]}
                                                onChange={(value) => setAttributes({
                                                    gap: {
                                                        ...gap,
                                                        [localActiveDevice]: value
                                                    }
                                                })}
                                                min={0}
                                                max={100}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {contentType === 'icon' && (
                                <div className="digiblocks-responsive-control">
                                    <div className="digiblocks-control__header">
                                        <div className="digiblocks-responsive-label-wrap">
                                            <span className="digiblocks-control-label">{__("Icon Size", "digiblocks")}</span>
                                            <button 
                                                type="button" 
                                                aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                                                className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
                                                onClick={() => window.digi.responsiveState.toggleDevice()}
                                            >
                                                {window.digi.icons.deviceIcons[localActiveDevice]}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="digiblocks-responsive-control-content">
                                        <div className="digiblocks-unit-control">
                                            <RangeControl
                                                value={iconSize[localActiveDevice]}
                                                onChange={(value) => setAttributes({
                                                    iconSize: {
                                                        ...iconSize,
                                                        [localActiveDevice]: value
                                                    }
                                                })}
                                                min={8}
                                                max={100}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <ResponsiveControl
                                label={__("Margin", "digiblocks")}
                            >
                                <div className="digiblocks-margin-control">
                                    <RangeControl
                                        label={__("Top", "digiblocks")}
                                        value={margin[localActiveDevice]?.top || 30}
                                        onChange={(value) => {
                                            const updatedMargin = {
                                                ...margin,
                                                [localActiveDevice]: {
                                                    ...margin[localActiveDevice],
                                                    top: value,
                                                    unit: margin[localActiveDevice]?.unit || 'px'
                                                }
                                            };
                                            setAttributes({ margin: updatedMargin });
                                        }}
                                        min={0}
                                        max={200}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    <RangeControl
                                        label={__("Bottom", "digiblocks")}
                                        value={margin[localActiveDevice]?.bottom || 30}
                                        onChange={(value) => {
                                            const updatedMargin = {
                                                ...margin,
                                                [localActiveDevice]: {
                                                    ...margin[localActiveDevice],
                                                    bottom: value,
                                                    unit: margin[localActiveDevice]?.unit || 'px'
                                                }
                                            };
                                            setAttributes({ margin: updatedMargin });
                                        }}
                                        min={0}
                                        max={200}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </div>
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        {contentType === 'text' && (
                            <TabPanelBody
                                tab="style"
                                name="typography"
                                title={__("Typography", "digiblocks")}
                                initialOpen={false}
                            >
                                <TypographyControl
                                    label={__("Text Typography", "digiblocks")}
                                    value={typography}
                                    onChange={(value) => setAttributes({ typography: value })}
                                    defaults={{
                                        fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                        fontSizeUnit: 'px',
                                        lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
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
                                        onChange={(e) => setAttributes({ anchor: e.target.value })}
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
                                        onChange={(e) => setAttributes({ customClasses: e.target.value })}
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
        className: `digiblocks-separator ${id} ${contentType !== 'none' && !['wave', 'zigzag', 'slant'].includes(separatorStyle) ? 'digiblocks-separator-has-content' : ''} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

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
                <div className="digiblocks-separator-container">
                    {contentType !== 'none' && !['wave', 'zigzag', 'slant'].includes(separatorStyle) && (
                        <div className="digiblocks-separator-content">
                            {contentType === 'text' && (
                                <span className="digiblocks-separator-text">{content}</span>
                            )}
                            {contentType === 'icon' && renderIcon()}
                        </div>
                    )}
                    
                    {['wave', 'zigzag', 'slant'].includes(separatorStyle) ? (
                        <div className="digiblocks-separator-shape">
                            {renderStyleSVG()}
                        </div>
                    ) : (
                        <div className="digiblocks-separator-line"></div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SeparatorEdit;