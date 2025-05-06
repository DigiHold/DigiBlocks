/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    LinkControl,
    BlockControls,
    AlignmentToolbar
} = wp.blockEditor;
const {
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
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Icon block
 */
const IconEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        iconValue,
        iconSize,
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
        flipVertical
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

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
    const [activeTab, setActiveTab] = useState("options");
    
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

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Container styles
        let containerStyles = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
            const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
            const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' };
            
            containerStyles += `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
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
                const currentIconBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] 
                    ? iconBorderWidth[activeDevice] 
                    : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
                const currentIconBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] 
                    ? iconBorderRadius[activeDevice] 
                    : { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' };
                
                iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || '#e0e0e0'};
                    border-width: ${currentIconBorderWidth.top}${currentIconBorderWidth.unit} ${currentIconBorderWidth.right}${currentIconBorderWidth.unit} ${currentIconBorderWidth.bottom}${currentIconBorderWidth.unit} ${currentIconBorderWidth.left}${currentIconBorderWidth.unit};
                    border-radius: ${currentIconBorderRadius.top}${currentIconBorderRadius.unit} ${currentIconBorderRadius.right}${currentIconBorderRadius.unit} ${currentIconBorderRadius.bottom}${currentIconBorderRadius.unit} ${currentIconBorderRadius.left}${currentIconBorderRadius.unit};
                `;
            }
            
            // Icon padding
            if (iconPadding && iconPadding[activeDevice]) {
                iconCSS += `padding: ${iconPadding[activeDevice].top}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].right}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].bottom}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].left}${iconPadding[activeDevice].unit};`;
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
            marginCSS = `margin: ${iconMargin[activeDevice].top}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].right}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].bottom}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].left}${iconMargin[activeDevice].unit};`;
        }
        
        // Set base styles for the block
        return `
            /* Icon Block - ${id} */
            .${id} {
                display: flex;
				justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
                align-items: center;
                background-color: ${backgroundColor || 'transparent'};
                ${boxShadowCSS}
                ${containerStyles}
                transition: all 0.3s ease;
                ${linkEnabled ? linkCSS : ''}
                ${marginCSS}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${hoverCSS}
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
                width: ${iconSize[activeDevice]}px;
                height: auto;
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
        `;
    };

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Render icon
    const renderIcon = () => {
        // Make sure we only try to display an icon if the iconValue exists and has a non-empty svg property
        if (!iconValue || !iconValue.svg || iconValue.svg.trim() === '') {
            return null;
        }
        
        return (
            <div className="digiblocks-icon">
                <span
                    dangerouslySetInnerHTML={{
                        __html: iconValue.svg,
                    }}
                />
            </div>
        );
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
                                
                                // Set initial border radius if not already set
                                if (!iconBorderRadius || Object.keys(iconBorderRadius).length === 0) {
                                    setAttributes({
                                        iconBorderRadius: {
                                            desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                            tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                            mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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
                            <ResponsiveControl
                                label={__("Border Width", "digiblocks")}
                            >
                                <DimensionControl
                                    values={iconBorderWidth && iconBorderWidth[localActiveDevice] ? iconBorderWidth[localActiveDevice] : {
                                        top: 1,
                                        right: 1,
                                        bottom: 1,
                                        left: 1,
                                        unit: 'px'
                                    }}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconBorderWidth: {
                                                ...iconBorderWidth,
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
                                    values={iconBorderRadius && iconBorderRadius[localActiveDevice] ? iconBorderRadius[localActiveDevice] : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                        unit: 'px'
                                    }}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconBorderRadius: {
                                                ...iconBorderRadius,
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
                    
                    {/* Icon Padding */}
                    <ResponsiveControl
                        label={__("Padding", "digiblocks")}
                    >
                        <DimensionControl
                            values={iconPadding && iconPadding[localActiveDevice] ? iconPadding[localActiveDevice] : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                unit: 'px'
                            }}
                            onChange={(value) =>
                                setAttributes({
                                    iconPadding: {
                                        ...iconPadding,
                                        [localActiveDevice]: value,
                                    },
                                })
                            }
                        />
                    </ResponsiveControl>
                    
                    {/* Icon Margin */}
                    <ResponsiveControl
                        label={__("Margin", "digiblocks")}
                    >
                        <DimensionControl
                            values={iconMargin && iconMargin[localActiveDevice] ? iconMargin[localActiveDevice] : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                unit: 'px'
                            }}
                            onChange={(value) =>
                                setAttributes({
                                    iconMargin: {
                                        ...iconMargin || {
                                            desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                            tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                            mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
                                        },
                                        [localActiveDevice]: value,
                                    },
                                })
                            }
                        />
                    </ResponsiveControl>
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
                            </div>

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
                            {/* Icon Size */}
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
                                    min={8}
                                    max={500}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

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
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                left: 0,
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
                            {/* Box Shadow Control */}
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
        className: `digiblocks-icon ${id} align-${align} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

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
                {renderIcon()}
            </div>
        </>
    );
};

export default IconEdit;