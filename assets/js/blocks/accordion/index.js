(() => {
  // blocks/accordion/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    TabPanel
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var AccordionEdit = ({ attributes, setAttributes, clientId }) => {
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
      allowMultipleOpen,
      iconType
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const [titleColorTab, setTitleColorTab] = useState("normal");
    const [backgroundColorTab, setBackgroundColorTab] = useState("normal");
    const [iconColorTab, setIconColorTab] = useState("normal");
    const [borderColorTab, setBorderColorTab] = useState("normal");
    const [contentColorTab, setContentColorTab] = useState("normal");
    const addItem = () => {
      const newItems = [...items, {
        id: `item-${items.length + 1}-${Date.now().toString(36)}`,
        title: __("New Accordion Item", "digiblocks"),
        content: __("Add your content here.", "digiblocks"),
        isOpen: false
      }];
      setAttributes({ items: newItems });
    };
    const removeItem = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setAttributes({ items: newItems });
    };
    const updateItemTitle = (title, index) => {
      const newItems = [...items];
      newItems[index].title = title;
      setAttributes({ items: newItems });
    };
    const updateItemContent = (content, index) => {
      const newItems = [...items];
      newItems[index].content = content;
      setAttributes({ items: newItems });
    };
    const toggleItem = (index) => {
      const newItems = [...items];
      if (!allowMultipleOpen) {
        newItems.forEach((item, i) => {
          if (i !== index) {
            newItems[i].isOpen = false;
          }
        });
      }
      newItems[index].isOpen = !newItems[index].isOpen;
      setAttributes({ items: newItems });
    };
    const moveItemUp = (index) => {
      if (index === 0)
        return;
      const newItems = [...items];
      const temp = newItems[index];
      newItems[index] = newItems[index - 1];
      newItems[index - 1] = temp;
      setAttributes({ items: newItems });
    };
    const moveItemDown = (index) => {
      if (index === items.length - 1)
        return;
      const newItems = [...items];
      const temp = newItems[index];
      newItems[index] = newItems[index + 1];
      newItems[index + 1] = temp;
      setAttributes({ items: newItems });
    };
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
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Double", "digiblocks"), value: "double" },
      { label: __("Groove", "digiblocks"), value: "groove" },
      { label: __("Inset", "digiblocks"), value: "inset" },
      { label: __("Outset", "digiblocks"), value: "outset" },
      { label: __("Ridge", "digiblocks"), value: "ridge" }
    ];
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          animationPreview(id, animation, animations, previewTimeoutRef);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef);
    };
    const tabList = [
      {
        name: "options",
        title: __("Options", "digiblocks"),
        icon: tabIcons.optionsIcon
      },
      {
        name: "style",
        title: __("Style", "digiblocks"),
        icon: tabIcons.styleIcon
      },
      {
        name: "advanced",
        title: __("Advanced", "digiblocks"),
        icon: tabIcons.advancedIcon
      }
    ];
    const renderItemIcon = (isOpen) => {
      const size = iconSize[localActiveDevice] || 16;
      if (iconType === "plusMinus") {
        return /* @__PURE__ */ wp.element.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { d: isOpen ? "M19 13H5v-2h14v2z" : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }));
      } else if (iconType === "arrowUpDown") {
        return /* @__PURE__ */ wp.element.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { d: isOpen ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" }));
      }
      return null;
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "none") {
        const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
        const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" };
        borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
            `;
      } else {
        borderCSS = "border-style: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const inset = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
      const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
      let titleTypographyCSS = "";
      if (titleTypography) {
        if (titleTypography.fontFamily) {
          titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
        }
        if (titleTypography.fontSize && titleTypography.fontSize[activeDevice]) {
          titleTypographyCSS += `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || "px"};`;
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
          titleTypographyCSS += `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || "em"};`;
        }
        if (titleTypography.letterSpacing && titleTypography.letterSpacing[activeDevice]) {
          titleTypographyCSS += `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || "px"};`;
        }
      }
      let contentTypographyCSS = "";
      if (contentTypography) {
        if (contentTypography.fontFamily) {
          contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
        }
        if (contentTypography.fontSize && contentTypography.fontSize[activeDevice]) {
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
        if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
          contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || "em"};`;
        }
        if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
          contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || "px"};`;
        }
      }
      let animationCSS = "";
      if (animation && animation !== "none" && animations[animation]) {
        animationCSS = animations[animation].keyframes;
      }
      return `
            /* Accordion item */
            .${id} .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${backgroundColor || "#ffffff"};
                ${borderCSS}
                ${boxShadowCSS}
				${marginCSS}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            .${id} .digiblocks-accordion-item:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
				${boxShadowHover && boxShadowHover.enable ? boxShadowHoverCSS : ""}
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
                ${iconPosition === "left" ? "flex-direction: row-reverse;" : ""}
                ${iconPosition === "left" ? "justify-content: flex-end;" : ""}
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
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            /* Accordion title active state */
            .${id} .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${titleActiveColor || "#1e73be"};
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
                width: ${iconSize[activeDevice]}px;
                height: ${iconSize[activeDevice]}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            .${id} .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ""}
            }
            
            /* Active icon color */
            .${id} .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${iconActiveColor || "#1e73be"};
            }
            
            /* Active header background */
            .${id} .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${backgroundActiveColor || "#f7f7f7"};
            }
            
            /* Accordion content */
            .${id} .digiblocks-accordion-content {
                overflow: hidden;
                ${paddingCSS}
                color: ${contentColor || "#666666"};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            .${id} .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${contentHoverColor ? `color: ${contentHoverColor};` : ""}
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
            
            /* Animation keyframes */
            ${animationCSS}

			/* Visibility Controls */
			${visibility.desktop ? `
				@media (min-width: 992px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}
        `;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Allow Multiple Open", "digiblocks"),
              checked: allowMultipleOpen,
              onChange: (value) => setAttributes({ allowMultipleOpen: value }),
              help: __("If enabled, multiple accordion items can be open at the same time.", "digiblocks"),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl,
            {
              label: __("Icon Type", "digiblocks"),
              value: iconType,
              onChange: (value) => setAttributes({ iconType: value }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                value: "plusMinus",
                label: __("Plus/Minus", "digiblocks")
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                value: "arrowUpDown",
                label: __("Up/Down", "digiblocks")
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl,
            {
              label: __("Icon Position", "digiblocks"),
              value: iconPosition,
              onChange: (value) => setAttributes({ iconPosition: value }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                value: "left",
                label: __("Left", "digiblocks")
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                value: "right",
                label: __("Right", "digiblocks")
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveControl,
            {
              label: __("Icon Size", "digiblocks")
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                value: iconSize[localActiveDevice],
                onChange: (value) => setAttributes({
                  iconSize: {
                    ...iconSize,
                    [localActiveDevice]: value
                  }
                }),
                min: 12,
                max: 48,
                step: 1,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            )
          )));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "colors",
              title: __("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: [
                  {
                    name: "normal",
                    title: __("Normal", "digiblocks"),
                    className: "digiblocks-tab-1 normal"
                  },
                  {
                    name: "hover",
                    title: __("Hover", "digiblocks"),
                    className: "digiblocks-tab-2 hover"
                  }
                ],
                onSelect: (tabName) => {
                  setTitleColorTab(tabName);
                  setBackgroundColorTab(tabName);
                  setIconColorTab(tabName);
                  setBorderColorTab(tabName);
                  setContentColorTab(tabName);
                }
              },
              (tab) => {
                if (tab.name === "normal") {
                  return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Title Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: titleColor,
                          onChange: (value) => setAttributes({ titleColor: value }),
                          label: __("Title Color", "digiblocks")
                        },
                        {
                          value: titleActiveColor,
                          onChange: (value) => setAttributes({ titleActiveColor: value }),
                          label: __("Active Title Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Icon Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: iconColor,
                          onChange: (value) => setAttributes({ iconColor: value }),
                          label: __("Icon Color", "digiblocks")
                        },
                        {
                          value: iconActiveColor,
                          onChange: (value) => setAttributes({ iconActiveColor: value }),
                          label: __("Active Icon Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Background Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: backgroundColor,
                          onChange: (value) => setAttributes({ backgroundColor: value }),
                          label: __("Background Color", "digiblocks")
                        },
                        {
                          value: backgroundActiveColor,
                          onChange: (value) => setAttributes({ backgroundActiveColor: value }),
                          label: __("Active Background Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Content Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: contentColor,
                          onChange: (value) => setAttributes({ contentColor: value }),
                          label: __("Content Text Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Border Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: borderColor,
                          onChange: (value) => setAttributes({ borderColor: value }),
                          label: __("Border Color", "digiblocks")
                        }
                      ]
                    }
                  ));
                } else {
                  return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Title Hover Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: titleHoverColor,
                          onChange: (value) => setAttributes({ titleHoverColor: value }),
                          label: __("Title Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Icon Hover Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: iconHoverColor,
                          onChange: (value) => setAttributes({ iconHoverColor: value }),
                          label: __("Icon Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Background Hover Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: backgroundHoverColor,
                          onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                          label: __("Background Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Content Hover Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: contentHoverColor,
                          onChange: (value) => setAttributes({ contentHoverColor: value }),
                          label: __("Content Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Border Hover Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: borderHoverColor,
                          onChange: (value) => setAttributes({ borderHoverColor: value }),
                          label: __("Border Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ));
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "typo",
              title: __("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Title Typography", "digiblocks"),
                value: titleTypography,
                onChange: (value) => setAttributes({ titleTypography: value }),
                defaults: {
                  fontSize: { desktop: 18, tablet: 16, mobile: 16 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Content Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({ contentTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "border",
              title: __("Border & Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: borderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ borderStyle: value }),
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ),
            borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: borderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: borderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    borderRadius: {
                      ...borderRadius,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            )),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({
                  boxShadow: value
                }),
                onHoverChange: (value) => setAttributes({
                  boxShadowHover: value
                })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "spacing",
              title: __("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: padding[localActiveDevice],
                  onChange: (value) => setAttributes({
                    padding: {
                      ...padding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: margin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    margin: {
                      ...margin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "animation",
              title: __("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Animation", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: handlePreviewClick,
                style: { width: "100%" }
              },
              __("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "visibility",
              title: __("Visibility", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__help", style: {
              padding: "12px",
              backgroundColor: "#f0f6fc",
              border: "1px solid #c3ddfd",
              borderRadius: "4px",
              marginBottom: "16px"
            } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("Editor Note:", "digiblocks")), /* @__PURE__ */ wp.element.createElement("br", null), __("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Desktop", "digiblocks"),
                checked: visibility.desktop,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    desktop: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Tablet", "digiblocks"),
                checked: visibility.tablet,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    tablet: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Mobile", "digiblocks"),
                checked: visibility.mobile,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    mobile: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "additional",
              title: __("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "html-anchor",
                value: anchor || "",
                onChange: (e) => setAttributes({ anchor: e.target.value }),
                "aria-describedby": "html-anchor-help",
                autoCapitalize: "none",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "additional-css-classes",
                value: customClasses || "",
                onChange: (e) => setAttributes({ customClasses: e.target.value }),
                "aria-describedby": "additional-css-classes-help",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps({
      className: `digiblocks-accordion ${id} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: (tab) => {
          requestAnimationFrame(() => {
            setActiveTab(tab);
          });
        }
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-accordion-wrapper" }, items.map((item, index) => /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        key: item.id,
        className: `digiblocks-accordion-item ${item.isOpen ? "is-active" : ""}`
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-accordion-header", onClick: () => toggleItem(index) }, /* @__PURE__ */ wp.element.createElement(
        RichText,
        {
          tagName: "h4",
          className: "digiblocks-accordion-title",
          value: item.title,
          onChange: (value) => updateItemTitle(value, index),
          placeholder: __("Accordion Title", "digiblocks")
        }
      ), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-accordion-icon" }, renderItemIcon(item.isOpen))),
      /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          className: "digiblocks-accordion-content",
          style: { display: item.isOpen ? "block" : "none" }
        },
        /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "div",
            value: item.content,
            onChange: (value) => updateItemContent(value, index),
            placeholder: __("Add your content here.", "digiblocks")
          }
        )
      ),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-accordion-item-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-accordion-item-move-up",
          onClick: (e) => {
            e.stopPropagation();
            moveItemUp(index);
          },
          icon: "arrow-up-alt2",
          disabled: index === 0,
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-accordion-item-move-down",
          onClick: (e) => {
            e.stopPropagation();
            moveItemDown(index);
          },
          icon: "arrow-down-alt2",
          disabled: index === items.length - 1,
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-accordion-item-duplicate",
          onClick: (e) => {
            e.stopPropagation();
            duplicateItem(index);
          },
          icon: "admin-page",
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-accordion-item-remove",
          onClick: (e) => {
            e.stopPropagation();
            removeItem(index);
          },
          icon: "trash",
          isSmall: true
        }
      )))
    )), /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        variant: "primary",
        icon: "plus",
        onClick: addItem,
        style: { width: "100%", marginTop: "20px", justifyContent: "center" }
      },
      __("Add Accordion Item", "digiblocks")
    ))));
  };
  var edit_default = AccordionEdit;

  // blocks/accordion/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var AccordionSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      items,
      iconPosition,
      iconType,
      allowMultipleOpen,
      animation
    } = attributes;
    const renderItemIcon = (isOpen) => {
      if (iconType === "plusMinus") {
        return /* @__PURE__ */ wp.element.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { d: isOpen ? "M19 13H5v-2h14v2z" : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }));
      } else if (iconType === "arrowUpDown") {
        return /* @__PURE__ */ wp.element.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { d: isOpen ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" }));
      }
      return null;
    };
    const blockClasses = [
      "digiblocks-accordion",
      id,
      iconPosition === "left" ? "icon-position-left" : "icon-position-right",
      allowMultipleOpen ? "allow-multiple-open" : "single-open",
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null,
      "data-icon-type": iconType
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-accordion-wrapper" }, items.map((item) => /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        key: item.id,
        className: `digiblocks-accordion-item ${item.isOpen ? "is-active" : ""}`,
        "data-item-id": item.id
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-accordion-header" }, /* @__PURE__ */ wp.element.createElement(
        RichText2.Content,
        {
          tagName: "h4",
          className: "digiblocks-accordion-title",
          value: item.title
        }
      ), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-accordion-icon" }, renderItemIcon(item.isOpen))),
      /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          className: "digiblocks-accordion-content",
          style: { display: item.isOpen ? "block" : "none" }
        },
        /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "div",
            value: item.content
          }
        )
      )
    ))));
  };
  var save_default = AccordionSave;

  // blocks/accordion/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/accordion", {
    apiVersion: 2,
    title: digiBlocksData.blocks["accordion"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["accordion"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["accordion"].description,
    keywords: [__2("accordion", "digiblocks"), __2("toggle", "digiblocks"), __2("collapse", "digiblocks"), __2("faq", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string",
        default: ""
      },
      anchor: {
        type: "string",
        default: ""
      },
      visibility: {
        type: "object",
        default: {
          desktop: false,
          tablet: false,
          mobile: false
        }
      },
      customClasses: {
        type: "string",
        default: ""
      },
      items: {
        type: "array",
        default: [
          {
            id: "item-1",
            title: __2("Accordion Item 1", "digiblocks"),
            content: __2("Add your content here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
            isOpen: true
          },
          {
            id: "item-2",
            title: __2("Accordion Item 2", "digiblocks"),
            content: __2("Add your content here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
            isOpen: false
          }
        ]
      },
      titleColor: {
        type: "string",
        default: ""
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      titleActiveColor: {
        type: "string",
        default: "#1e73be"
      },
      backgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      backgroundActiveColor: {
        type: "string",
        default: "#f7f7f7"
      },
      contentColor: {
        type: "string",
        default: "#666666"
      },
      contentHoverColor: {
        type: "string",
        default: ""
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      borderHoverColor: {
        type: "string",
        default: ""
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderStyle: {
        type: "string",
        default: "solid"
      },
      boxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      boxShadowHover: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      padding: {
        type: "object",
        default: {
          desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: "px" },
          tablet: { top: 15, right: 15, bottom: 15, left: 15, unit: "px" },
          mobile: { top: 10, right: 10, bottom: 10, left: 10, unit: "px" }
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 25, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" }
        }
      },
      titleTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 18, tablet: 16, mobile: 16 },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      contentTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: 15, mobile: 14 },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      iconPosition: {
        type: "string",
        default: "right"
      },
      iconColor: {
        type: "string",
        default: ""
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      iconActiveColor: {
        type: "string",
        default: "#1e73be"
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 16,
          tablet: 14,
          mobile: 12
        }
      },
      animation: {
        type: "string",
        default: "none"
      },
      allowMultipleOpen: {
        type: "boolean",
        default: false
      },
      iconType: {
        type: "string",
        default: "plusMinus"
      }
    },
    example: {
      attributes: {
        items: [
          {
            id: "item-1",
            title: __2("Accordion Item 1", "digiblocks"),
            content: __2("This is some sample content for the accordion item.", "digiblocks"),
            isOpen: true
          },
          {
            id: "item-2",
            title: __2("Accordion Item 2", "digiblocks"),
            content: __2("Click on an accordion item to see it expand.", "digiblocks"),
            isOpen: false
          }
        ]
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
