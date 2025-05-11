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
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    TabPanel,
    Button,
    PanelBody,
    Modal,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const {
    ResponsiveControl,
    DimensionControl,
    TypographyControl,
    BoxShadowControl,
    CustomTabPanel,
    TabPanelBody,
    FontAwesomeControl,
} = digi.components;

/**
 * Edit function for the Icon List block
 */
const IconListEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        items,
        defaultIcon,
        contentTypography,
        listLayout,
        listAlign,
        iconPosition,
        iconSize,
        iconSpace,
        itemSpace,
        iconColor,
        iconHoverColor,
        textColor,
        textHoverColor,
        animation,
        padding,
        margin,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        boxShadow,
        boxShadowHover,
        backgroundColor,
        backgroundHoverColor,
        hoverEffect,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi.responsiveState.activeDevice
    );

    // States
    const [iconModalOpen, setIconModalOpen] = useState(false);
    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [currentEditingItem, setCurrentEditingItem] = useState(null);
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
            name: "options",
            title: __("Options", "digiblocks"),
            icon: tabIcons.optionsIcon,
        },
        {
            name: "style",
            title: __("Style", "digiblocks"),
            icon: tabIcons.styleIcon,
        },
        {
            name: "advanced",
            title: __("Advanced", "digiblocks"),
            icon: tabIcons.advancedIcon,
        },
    ];

    // State tabs
    const stateTabList = [
        {
            name: "normal",
            title: __("Normal", "digiblocks"),
            className: "digiblocks-tab-1 normal",
        },
        {
            name: "hover",
            title: __("Hover", "digiblocks"),
            className: "digiblocks-tab-2 hover",
        },
    ];

    // Add list item
    const addListItem = () => {
        const newItems = [...items];
        newItems.push({
            id: `item-${Date.now()}`,
            content: __("New list item", "digiblocks"),
            icon: { ...defaultIcon },
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: "",
        });
        setAttributes({ items: newItems });
    };

    // Remove list item
    const removeListItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setAttributes({ items: newItems });
    };

    // Update list item
    const updateListItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setAttributes({ items: newItems });
    };

    // Move item up
    const moveItemUp = (index) => {
        if (index === 0) return;
        const newItems = [...items];
        [newItems[index - 1], newItems[index]] = [
            newItems[index],
            newItems[index - 1],
        ];
        setAttributes({ items: newItems });
    };

    // Move item down
    const moveItemDown = (index) => {
        if (index === items.length - 1) return;
        const newItems = [...items];
        [newItems[index], newItems[index + 1]] = [
            newItems[index + 1],
            newItems[index],
        ];
        setAttributes({ items: newItems });
    };

    // Duplicate item
    const duplicateItem = (index) => {
        const newItems = [...items];
        const duplicatedItem = { ...items[index], id: `item-${Date.now()}` };
        newItems.splice(index + 1, 0, duplicatedItem);
        setAttributes({ items: newItems });
    };

    // Set icon for item
    const setItemIcon = (index, icon) => {
        const newItems = [...items];
        newItems[index].icon = icon;
        setAttributes({ items: newItems });
    };

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;

        // Border styles
        let borderCSS = "";
        if (
            borderStyle &&
            borderStyle !== "default" &&
            borderStyle !== "none"
        ) {
            const currentBorderWidth =
                borderWidth && borderWidth[activeDevice]
                    ? borderWidth[activeDevice]
                    : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
            const currentBorderRadius =
                borderRadius && borderRadius[activeDevice]
                    ? borderRadius[activeDevice]
                    : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" };

            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
            `;
        } else {
            borderCSS = "border: none;";
        }

        // Box shadow
        let boxShadowCSS = "box-shadow: none;";
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === "inset" ? "inset " : "";
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }

        // Padding and margin
        const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
        const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;

        // Content typography CSS
        let contentTypographyCSS = "";
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }

            if (
                contentTypography.fontSize &&
                contentTypography.fontSize[activeDevice]
            ) {
                contentTypographyCSS += `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || "px"};`;
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

            if (
                contentTypography.lineHeight &&
                contentTypography.lineHeight[activeDevice]
            ) {
                contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || "em"};`;
            }

            if (
                contentTypography.letterSpacing &&
                contentTypography.letterSpacing[activeDevice]
            ) {
                contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || "px"};`;
            }
        }

        // Hover effects
        let hoverCSS = "";

        // Box shadow hover
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover =
                boxShadowHover.position === "inset" ? "inset " : "";
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }

        // Additional hover effects
        if (hoverEffect === "lift") {
            hoverCSS += "transform: translateY(-10px);";
        } else if (hoverEffect === "scale") {
            hoverCSS += "transform: scale(1.05);";
        } else if (hoverEffect === "glow") {
            hoverCSS += "filter: brightness(1.1);";
        }

        return `
            /* Icon List Block - ${id} */
            .${id} {
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                ${boxShadowCSS}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                transition: all 0.3s ease;
            }
            
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
                ${hoverCSS}
            }
            
            /* List container */
            .${id} .digiblocks-icon-list-wrapper {
                text-align: ${listAlign};
            }
            
            .${id} .digiblocks-icon-list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
				flex-direction: ${listLayout === 'horizontal' ? 'row' : 'column'};
				flex-wrap: wrap;
				gap: ${itemSpace[activeDevice] !== undefined ? itemSpace[activeDevice] : 16}px;
            }
            
            /* List item */
            .${id} .digiblocks-icon-list-item {
                display: inline-flex;
                align-items: center;
				gap: ${iconSpace[activeDevice] !== undefined ? iconSpace[activeDevice] : 12}px;
				justify-content: ${listAlign === 'center' ? 'center' : (listAlign === 'right' ? 'flex-end' : 'flex-start')};
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-icon-list-item:last-child {
                margin-bottom: 0;
            }
            
            /* Icon */
            .${id} .digiblocks-icon-list-icon {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${iconColor || "#1e73be"};
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-icon-list-icon span {
                display: flex;
            }
            
            .${id} .digiblocks-icon-list-icon svg {
                width: ${iconSize[activeDevice] !== undefined ? iconSize[activeDevice] : 24}px;
                height: ${iconSize[activeDevice] !== undefined ? iconSize[activeDevice] : 24}px;
                fill: currentColor;
            }
            
            /* Text content */
            .${id} .digiblocks-icon-list-content {
                color: ${textColor || "#333333"};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover states */
            .${id} .digiblocks-icon-list-item:hover .digiblocks-icon-list-icon {
                color: ${iconHoverColor};
            }
            
            .${id} .digiblocks-icon-list-item:hover .digiblocks-icon-list-content {
                color: ${textHoverColor};
            }

            .${id} .digiblocks-icon-list-child {
                display: inline-flex;
                ${iconPosition === "after" ? "flex-direction: row-reverse;" : ""}
				gap: ${iconSpace[activeDevice] !== undefined ? iconSpace[activeDevice] : 12}px;
                align-items: center;
            }
            
            /* Link cursor for clickable items */
            .${id} .digiblocks-icon-list-item a {
                cursor: pointer;
                text-decoration: none;
                color: inherit;
            }
            
            /* Editor specific styles */
            .digiblocks-icon-list-item-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 0;
                top: 0;
                background-color: #fff;
                padding: 2px;
                border-radius: 3px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12);
                z-index: 10;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .${id} .digiblocks-icon-list-item {
                position: relative;
            }
            
            .${id} .digiblocks-icon-list-item:hover .digiblocks-icon-list-item-controls {
                opacity: 1;
            }
        `;
    };

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case "options":
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="list-items"
                            title={__("List Items", "digiblocks")}
                            initialOpen={true}
                        >
							{!componentsLoaded ? (
								<div style={{ textAlign: 'center', padding: '20px 0' }}>
									<div className="components-spinner"></div>
									<p>{__('Loading icon selector...', 'digiblocks')}</p>
								</div>
							) : (
								<FontAwesomeControl
									label={__('Select Icon', 'digiblocks')}
									value={defaultIcon}
									onChange={(value) => setAttributes({ defaultIcon: value })}
								/>
							)}

							<ToggleGroupControl
								label={__("List Layout", "digiblocks")}
								value={listLayout}
								onChange={(value) => setAttributes({ listLayout: value })}
								isBlock
								__next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
							>
								<ToggleGroupControlOption 
									value="horizontal" 
									label={__("Horizontal", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="vertical" 
									label={__("Vertical", "digiblocks")}
								/>
							</ToggleGroupControl>

							<ToggleGroupControl
								label={__("List Alignment", "digiblocks")}
								value={listAlign}
								onChange={(value) => setAttributes({ listAlign: value })}
								isBlock
								__next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
							>
								<ToggleGroupControlOption 
									value="left" 
									label={__("Left", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="center" 
									label={__("Center", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="right" 
									label={__("Right", "digiblocks")}
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
									value="before" 
									label={__("Before", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="after" 
									label={__("After", "digiblocks")}
								/>
							</ToggleGroupControl>

                            <ResponsiveControl
                                label={__("Item Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={itemSpace[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            itemSpace: {
                                                ...itemSpace,
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

                            <ResponsiveControl
                                label={__("Icon Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={iconSpace[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconSpace: {
                                                ...iconSpace,
                                                [localActiveDevice]: value,
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
                        </TabPanelBody>
                    </>
                );
            case "style":
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="icon-style"
                            title={__("Icon Style", "digiblocks")}
                            initialOpen={true}
                        >
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

                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === "normal"
                                                ? __(
                                                      "Icon Colors",
                                                      "digiblocks"
                                                  )
                                                : __(
                                                      "Icon Hover Colors",
                                                      "digiblocks"
                                                  )
                                        }
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value:
                                                    tab.name === "normal"
                                                        ? iconColor
                                                        : iconHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === "normal"
                                                            ? {
                                                                  iconColor:
                                                                      value,
                                                              }
                                                            : {
                                                                  iconHoverColor:
                                                                      value,
                                                              }
                                                    ),
                                                label: __(
                                                    "Icon Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="text-style"
                            title={__("Text Style", "digiblocks")}
                            initialOpen={false}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === "normal"
                                                ? __(
                                                      "Text Colors",
                                                      "digiblocks"
                                                  )
                                                : __(
                                                      "Text Hover Colors",
                                                      "digiblocks"
                                                  )
                                        }
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value:
                                                    tab.name === "normal"
                                                        ? textColor
                                                        : textHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === "normal"
                                                            ? {
                                                                  textColor:
                                                                      value,
                                                              }
                                                            : {
                                                                  textHoverColor:
                                                                      value,
                                                              }
                                                    ),
                                                label: __(
                                                    "Text Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>

                            <TypographyControl
                                label={__("Typography", "digiblocks")}
                                value={contentTypography}
                                onChange={(value) =>
                                    setAttributes({ contentTypography: value })
                                }
                                defaults={{
                                    fontSize: {
                                        desktop: 16,
                                        tablet: 15,
                                        mobile: 14,
                                    },
                                    fontSizeUnit: "px",
                                    lineHeight: {
                                        desktop: 1.5,
                                        tablet: 1.4,
                                        mobile: 1.3,
                                    },
                                    lineHeightUnit: "em",
                                }}
                            />
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="box-style"
                            title={__("Box Style", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || "default"}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    setAttributes({ borderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {borderStyle &&
                                borderStyle !== "default" &&
                                borderStyle !== "none" && (
                                    <>
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
                                                            borderHoverColor:
                                                                value,
                                                        }),
                                                    label: __(
                                                        "Border Hover Color",
                                                        "digiblocks"
                                                    ),
                                                },
                                            ]}
                                        />

                                        <ResponsiveControl
                                            label={__(
                                                "Border Width",
                                                "digiblocks"
                                            )}
                                        >
                                            <DimensionControl
                                                values={
                                                    (borderWidth &&
                                                        borderWidth[
                                                            localActiveDevice
                                                        ]) || {
                                                        top: 1,
                                                        right: 1,
                                                        bottom: 1,
                                                        left: 1,
                                                        unit: "px",
                                                    }
                                                }
                                                onChange={(value) =>
                                                    setAttributes({
                                                        borderWidth: {
                                                            ...borderWidth,
                                                            [localActiveDevice]:
                                                                value,
                                                        },
                                                    })
                                                }
                                            />
                                        </ResponsiveControl>

                                        <ResponsiveControl
                                            label={__(
                                                "Border Radius",
                                                "digiblocks"
                                            )}
                                        >
                                            <DimensionControl
                                                values={
                                                    (borderRadius &&
                                                        borderRadius[
                                                            localActiveDevice
                                                        ]) || {
                                                        top: 8,
                                                        right: 8,
                                                        bottom: 8,
                                                        left: 8,
                                                        unit: "px",
                                                    }
                                                }
                                                onChange={(value) =>
                                                    setAttributes({
                                                        borderRadius: {
                                                            ...borderRadius,
                                                            [localActiveDevice]:
                                                                value,
                                                        },
                                                    })
                                                }
                                                units={[
                                                    {
                                                        label: "px",
                                                        value: "px",
                                                    },
                                                    { label: "%", value: "%" },
                                                ]}
                                            />
                                        </ResponsiveControl>
                                    </>
                                )}

                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === "normal"
                                                ? __(
                                                      "Background Colors",
                                                      "digiblocks"
                                                  )
                                                : __(
                                                      "Background Hover Colors",
                                                      "digiblocks"
                                                  )
                                        }
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value:
                                                    tab.name === "normal"
                                                        ? backgroundColor
                                                        : backgroundHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === "normal"
                                                            ? {
                                                                  backgroundColor:
                                                                      value,
                                                              }
                                                            : {
                                                                  backgroundHoverColor:
                                                                      value,
                                                              }
                                                    ),
                                                label: __(
                                                    "Background Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>

                            <SelectControl
                                label={__("Hover Effect", "digiblocks")}
                                value={hoverEffect}
                                options={hoverEffectOptions}
                                onChange={(value) =>
                                    setAttributes({ hoverEffect: value })
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
                                onNormalChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({ boxShadowHover: value })
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
            case "advanced":
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
                                onChange={(value) =>
                                    setAttributes({ animation: value })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {animation && animation !== "none" && (
                                <div style={{ marginTop: "10px" }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={handlePreviewClick}
                                        style={{ width: "100%" }}
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
                            <div className="components-base-control html-anchor-control">
                                <div className="components-base-control__field">
                                    <label
                                        className="components-base-control__label"
                                        htmlFor="html-anchor"
                                    >
                                        {__("HTML anchor", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="html-anchor"
                                        value={anchor || ""}
                                        onChange={(e) =>
                                            setAttributes({
                                                anchor: e.target.value,
                                            })
                                        }
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p
                                    id="html-anchor-help"
                                    className="components-base-control__help"
                                >
                                    {__(
                                        'Enter a word or two — without spaces — to make a unique web address just for this block, called an "anchor". Then, you\'ll be able to link directly to this section of your page.',
                                        "digiblocks"
                                    )}
                                </p>
                            </div>

                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label
                                        className="components-base-control__label"
                                        htmlFor="additional-css-classes"
                                    >
                                        {__(
                                            "Additional CSS class(es)",
                                            "digiblocks"
                                        )}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="additional-css-classes"
                                        value={customClasses || ""}
                                        onChange={(e) =>
                                            setAttributes({
                                                customClasses: e.target.value,
                                            })
                                        }
                                        aria-describedby="additional-css-classes-help"
                                        autoComplete="off"
                                    />
                                </div>
                                <p
                                    id="additional-css-classes-help"
                                    className="components-base-control__help"
                                >
                                    {__(
                                        "Separate multiple classes with spaces.",
                                        "digiblocks"
                                    )}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
    };

    // Render list items
    const renderListItems = () => {
        return items.map((item, index) => {
            const isLast = index === items.length - 1;

            const itemContent = (
                <>
                    {item.icon && item.icon.svg && (
						<div className="digiblocks-icon-list-icon">
							<span
								dangerouslySetInnerHTML={{
									__html: item.icon.svg,
								}}
							/>
						</div>
					)}
                    <RichText
                        className="digiblocks-icon-list-content"
                        value={item.content}
                        onChange={(value) =>
                            updateListItem(index, "content", value)
                        }
                        placeholder={__(
                            "Enter list item text...",
                            "digiblocks"
                        )}
                        allowedFormats={[
                            "core/bold",
                            "core/italic",
                            "core/inline-code",
                        ]}
                    />
                </>
            );

            return (
                <li
                    key={item.id}
                    className="digiblocks-icon-list-item"
                    style={isLast ? { marginBottom: 0 } : {}}
                >
                    {item.linkUrl ? (
                        <a href="#" onClick={(e) => e.preventDefault()} className="digiblocks-icon-list-child">{itemContent}</a>
                    ) : (
                        <div className="digiblocks-icon-list-child">{itemContent}</div>
                    )}

                    <div className="digiblocks-icon-list-item-controls">
                        <Tooltip text={__("Edit Icon", "digiblocks")}>
                            <Button
                                icon="admin-customizer"
                                onClick={() => {
                                    setCurrentEditingItem(index);
                                    setIconModalOpen(true);
                                }}
                                isSmall
                            />
                        </Tooltip>

                        <Tooltip text={__("Link", "digiblocks")}>
                            <Button
                                icon="admin-links"
                                onClick={() => {
                                    setCurrentEditingItem(index);
                                    setLinkModalOpen(true);
                                }}
                                isSmall
                                variant={
                                    item.linkUrl ? "primary" : "secondary"
                                }
                            />
                        </Tooltip>
                        <Tooltip text={__("Move Up", "digiblocks")}>
                            <Button
                                icon="arrow-up-alt2"
                                onClick={() => moveItemUp(index)}
                                disabled={index === 0}
                                isSmall
                            />
                        </Tooltip>
                        <Tooltip text={__("Move Down", "digiblocks")}>
                            <Button
                                icon="arrow-down-alt2"
                                onClick={() => moveItemDown(index)}
                                disabled={index === items.length - 1}
                                isSmall
                            />
                        </Tooltip>
                        <Tooltip text={__("Duplicate", "digiblocks")}>
                            <Button
                                icon="admin-page"
                                onClick={() => duplicateItem(index)}
                                isSmall
                            />
                        </Tooltip>
                        <Tooltip text={__("Remove", "digiblocks")}>
                            <Button
                                icon="trash"
                                onClick={() => removeListItem(index)}
                                isSmall
                            />
                        </Tooltip>
                    </div>
                </li>
            );
        });
    };

    const blockProps = useBlockProps({
        className: `digiblocks-icon-list-block ${id} ${customClasses || ""}`,
        id: anchor || null,
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

            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className="digiblocks-icon-list-wrapper">
                    <ul className="digiblocks-icon-list">
                        {renderListItems()}
                    </ul>
                </div>

                {iconModalOpen && currentEditingItem !== null && (
                    <Modal
                        title={__("Choose Icon", "digiblocks")}
                        onRequestClose={() => setIconModalOpen(false)}
                        className="digiblocks-icon-modal"
                    >
                        {!componentsLoaded ? (
							<div style={{ textAlign: 'center', padding: '20px 0' }}>
								<div className="components-spinner"></div>
								<p>{__('Loading icon selector...', 'digiblocks')}</p>
							</div>
						) : (
							<FontAwesomeControl
								value={items[currentEditingItem].icon}
								onChange={(newIcon) => {
									setItemIcon(currentEditingItem, newIcon);
									setIconModalOpen(false);
								}}
							/>
						)}
                    </Modal>
                )}

                {linkModalOpen && currentEditingItem !== null && (
                    <Modal
                        title={__("Link Settings", "digiblocks")}
                        onRequestClose={() => setLinkModalOpen(false)}
                        className="digiblocks-link-modal"
                    >
						<LinkControl
							value={
								items[currentEditingItem].linkUrl
									? {
										url: items[currentEditingItem].linkUrl,
										opensInNewTab: items[currentEditingItem].linkOpenInNewTab,
										rel: items[currentEditingItem].linkRel,
									}
									: undefined
							}
							settings={[
								{
									id: "opensInNewTab",
									title: __("Open in new tab", "digiblocks"),
								},
								{
									id: "rel",
									title: __("Add nofollow", "digiblocks"),
								},
							]}
							onChange={(newLink) => {
								if (newLink && newLink.url) {
									updateListItem(currentEditingItem, "linkUrl", newLink.url);
									updateListItem(currentEditingItem, "linkOpenInNewTab", !!newLink.opensInNewTab);
									updateListItem(currentEditingItem, "linkRel", newLink.rel || "");
									setLinkModalOpen(false);
								}
							}}
							onRemove={() => {
								updateListItem(currentEditingItem, "linkUrl", "");
								updateListItem(currentEditingItem, "linkOpenInNewTab", false);
								updateListItem(currentEditingItem, "linkRel", "");
								setLinkModalOpen(false);
							}}
							forceIsEditingLink={!items[currentEditingItem].linkUrl}
							allowDirectEntry={true}
							suggestionsQuery={{
								type: 'post',
								subtype: 'any'
							}}
						/>
                    </Modal>
                )}

                <Button
                    variant="primary"
                    icon="plus"
                    onClick={addListItem}
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    {__("Add Icon List Item", "digiblocks")}
                </Button>
            </div>
        </>
    );
};

export default IconListEdit;
