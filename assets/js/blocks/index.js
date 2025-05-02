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
  var { animations } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var AccordionEdit = ({ attributes, setAttributes, clientId }) => {
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
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState("options");
    const [titleColorTab, setTitleColorTab] = useState("normal");
    const [backgroundColorTab, setBackgroundColorTab] = useState("normal");
    const [iconColorTab, setIconColorTab] = useState("normal");
    const [borderColorTab, setBorderColorTab] = useState("normal");
    const [contentColorTab, setContentColorTab] = useState("normal");
    useEffect(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    useEffect(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
    }, [clientId]);
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
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations[animation]) {
        const originalKeyframes = animations[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
				${updatedKeyframes}
				
				[data-custom-id="${id}"] {
					animation: none; /* Reset first */
				}
			`;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
				[data-custom-id="${id}"] {
					animation: ${uniqueAnimName} 1.5s forwards !important;
				}
			`;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
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
      const blockId = id;
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
            [data-custom-id="${blockId}"] .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${backgroundColor || "#ffffff"};
                ${borderCSS}
                ${boxShadowCSS}
				${marginCSS}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
				${boxShadowHover && boxShadowHover.enable ? boxShadowHoverCSS : ""}
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
                ${iconPosition === "left" ? "flex-direction: row-reverse;" : ""}
                ${iconPosition === "left" ? "justify-content: flex-end;" : ""}
                transition: background-color 0.3s ease;
            }
            
            /* Accordion title */
            [data-custom-id="${blockId}"] .digiblocks-accordion-title {
                margin: 0;
                color: ${titleColor || "#333333"};
                flex: 1;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for title */
            [data-custom-id="${blockId}"] .digiblocks-accordion-header:hover .digiblocks-accordion-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            /* Accordion title active state */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${titleActiveColor || "#1e73be"};
            }
            
            /* Accordion icon */
            [data-custom-id="${blockId}"] .digiblocks-accordion-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* SVG icon fill color */
            [data-custom-id="${blockId}"] .digiblocks-accordion-icon svg {
                fill: ${iconColor || "#333333"};
                width: ${iconSize[activeDevice]}px;
                height: ${iconSize[activeDevice]}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            [data-custom-id="${blockId}"] .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ""}
            }
            
            /* Active icon color */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${iconActiveColor || "#1e73be"};
            }
            
            /* Active header background */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${backgroundActiveColor || "#f7f7f7"};
            }
            
            /* Accordion content */
            [data-custom-id="${blockId}"] .digiblocks-accordion-content {
                overflow: hidden;
                ${paddingCSS}
                color: ${contentColor || "#666666"};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            [data-custom-id="${blockId}"] .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${contentHoverColor ? `color: ${contentHoverColor};` : ""}
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
              __nextHasNoMarginBottom: true,
              __next40pxDefaultSize: true
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
              __nextHasNoMarginBottom: true,
              __next40pxDefaultSize: true
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
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __("Preview Animation", "digiblocks")
            ))
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
      className: `digiblocks-accordion ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
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
      iconPosition === "left" ? "icon-position-left" : "icon-position-right",
      allowMultipleOpen ? "allow-multiple-open" : "single-open",
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id,
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

  // blocks/call-to-action/edit.js
  var { __: __2 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps3,
    RichText: RichText3,
    InspectorControls: InspectorControls2,
    PanelColorSettings: PanelColorSettings2,
    __experimentalLinkControl: LinkControl,
    BlockControls,
    AlignmentToolbar,
    MediaUpload,
    MediaUploadCheck
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl2,
    RangeControl: RangeControl2,
    ToggleControl: ToggleControl2,
    Button: Button2,
    __experimentalToggleGroupControl: ToggleGroupControl2,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption2,
    TabPanel: TabPanel2,
    TextControl,
    BaseControl
  } = window.wp.components;
  var { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = window.wp.element;
  var { animations: animations2 } = digi.utils;
  var { tabIcons: tabIcons2 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl2, DimensionControl: DimensionControl2, TypographyControl: TypographyControl2, BoxShadowControl: BoxShadowControl2, CustomTabPanel: CustomTabPanel2, TabPanelBody: TabPanelBody2 } = digi.components;
  var CallToActionEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      style,
      horizontalLayout,
      title,
      content,
      headingTag,
      titleColor,
      textColor,
      buttonColor,
      buttonTextColor,
      backgroundColor,
      backgroundType,
      backgroundImage,
      backgroundOverlayColor,
      backgroundOverlayOpacity,
      backgroundPosition,
      backgroundSize,
      backgroundRepeat,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      padding,
      margin,
      align,
      titleTypography,
      contentTypography,
      buttonTypography,
      contentWidth,
      width,
      animation,
      boxShadow,
      boxShadowHover,
      buttonBorderRadius,
      buttonPadding,
      buttonsAlign,
      buttons,
      titleHoverColor,
      textHoverColor,
      buttonHoverColor,
      buttonTextHoverColor,
      backgroundHoverColor,
      highlightText,
      highlightColor,
      highlightType,
      verticalAlign,
      reverseColumnsMobile,
      minHeight
    } = attributes;
    const [localActiveDevice, setLocalActiveDevice] = useState2(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState2(false);
    const previewTimeoutRef = useRef2(null);
    useEffect2(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState2("options");
    useEffect2(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!buttons || !Array.isArray(buttons) || buttons.length === 0) {
        setAttributes({
          buttons: [
            {
              id: "button-1",
              text: __2("Click Here", "digiblocks"),
              url: "#",
              openInNewTab: false,
              rel: "",
              isPrimary: true,
              isFullWidth: false,
              customColors: false,
              backgroundColor: "",
              textColor: "",
              hoverBackgroundColor: "",
              hoverTextColor: "",
              borderRadius: ""
            }
          ]
        });
      }
      if (!titleTypography) {
        setAttributes({
          titleTypography: {
            fontFamily: "",
            fontSize: { desktop: 36, tablet: 32, mobile: 28 },
            fontSizeUnit: "px",
            fontWeight: "700",
            fontStyle: "normal",
            textTransform: "none",
            textDecoration: "none",
            lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
            lineHeightUnit: "em",
            letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
            letterSpacingUnit: "px"
          }
        });
      }
      if (!contentTypography) {
        setAttributes({
          contentTypography: {
            fontFamily: "",
            fontSize: { desktop: 18, tablet: 16, mobile: 16 },
            fontSizeUnit: "px",
            fontWeight: "400",
            fontStyle: "normal",
            textTransform: "none",
            textDecoration: "none",
            lineHeight: { desktop: 1.6, tablet: 1.6, mobile: 1.5 },
            lineHeightUnit: "em",
            letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
            letterSpacingUnit: "px"
          }
        });
      }
      if (!buttonTypography) {
        setAttributes({
          buttonTypography: {
            fontFamily: "",
            fontSize: { desktop: 16, tablet: 16, mobile: 16 },
            fontSizeUnit: "px",
            fontWeight: "500",
            fontStyle: "normal",
            textTransform: "none",
            textDecoration: "none",
            lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
            lineHeightUnit: "em",
            letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
            letterSpacingUnit: "px"
          }
        });
      }
      if (!boxShadowHover) {
        setAttributes({
          boxShadowHover: {
            enable: false,
            color: "rgba(0, 0, 0, 0.2)",
            horizontal: 0,
            vertical: 0,
            blur: 0,
            spread: 0,
            position: "outset"
          }
        });
      }
    }, [clientId, id, buttons, titleTypography, contentTypography, buttonTypography, boxShadowHover, setAttributes]);
    useEffect2(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations2[animation]) {
        const originalKeyframes = animations2[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect2(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const borderStyleOptions = [
      { label: __2("None", "digiblocks"), value: "none" },
      { label: __2("Solid", "digiblocks"), value: "solid" },
      { label: __2("Dotted", "digiblocks"), value: "dotted" },
      { label: __2("Dashed", "digiblocks"), value: "dashed" },
      { label: __2("Double", "digiblocks"), value: "double" },
      { label: __2("Groove", "digiblocks"), value: "groove" },
      { label: __2("Ridge", "digiblocks"), value: "ridge" },
      { label: __2("Inset", "digiblocks"), value: "inset" },
      { label: __2("Outset", "digiblocks"), value: "outset" }
    ];
    const animationOptions = [
      { label: __2("None", "digiblocks"), value: "none" },
      ...Object.keys(animations2).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const styleOptions = [
      { label: __2("Basic", "digiblocks"), value: "basic" },
      { label: __2("Split", "digiblocks"), value: "split" },
      { label: __2("Cover", "digiblocks"), value: "cover" },
      { label: __2("Box", "digiblocks"), value: "box" },
      { label: __2("Modern", "digiblocks"), value: "modern" },
      { label: __2("Gradient", "digiblocks"), value: "gradient" },
      { label: __2("Minimal", "digiblocks"), value: "minimal" },
      { label: __2("Callout", "digiblocks"), value: "callout" },
      { label: __2("Banner", "digiblocks"), value: "banner" }
    ];
    const headingTagOptions = [
      { label: "H1", value: "h1" },
      { label: "H2", value: "h2" },
      { label: "H3", value: "h3" },
      { label: "H4", value: "h4" },
      { label: "H5", value: "h5" },
      { label: "H6", value: "h6" }
    ];
    const backgroundTypeOptions = [
      { label: __2("Color", "digiblocks"), value: "color" },
      { label: __2("Image", "digiblocks"), value: "image" },
      { label: __2("Gradient", "digiblocks"), value: "gradient" }
    ];
    const backgroundPositionOptions = [
      { label: __2("Center Center", "digiblocks"), value: "center center" },
      { label: __2("Center Top", "digiblocks"), value: "center top" },
      { label: __2("Center Bottom", "digiblocks"), value: "center bottom" },
      { label: __2("Left Top", "digiblocks"), value: "left top" },
      { label: __2("Left Center", "digiblocks"), value: "left center" },
      { label: __2("Left Bottom", "digiblocks"), value: "left bottom" },
      { label: __2("Right Top", "digiblocks"), value: "right top" },
      { label: __2("Right Center", "digiblocks"), value: "right center" },
      { label: __2("Right Bottom", "digiblocks"), value: "right bottom" }
    ];
    const backgroundSizeOptions = [
      { label: __2("Cover", "digiblocks"), value: "cover" },
      { label: __2("Contain", "digiblocks"), value: "contain" },
      { label: __2("Auto", "digiblocks"), value: "auto" }
    ];
    const backgroundRepeatOptions = [
      { label: __2("No Repeat", "digiblocks"), value: "no-repeat" },
      { label: __2("Repeat", "digiblocks"), value: "repeat" },
      { label: __2("Repeat X", "digiblocks"), value: "repeat-x" },
      { label: __2("Repeat Y", "digiblocks"), value: "repeat-y" }
    ];
    const buttonsAlignOptions = [
      { label: __2("Left", "digiblocks"), value: "left" },
      { label: __2("Center", "digiblocks"), value: "center" },
      { label: __2("Right", "digiblocks"), value: "right" }
    ];
    const verticalAlignOptions = [
      { label: __2("Top", "digiblocks"), value: "flex-start" },
      { label: __2("Center", "digiblocks"), value: "center" },
      { label: __2("Bottom", "digiblocks"), value: "flex-end" }
    ];
    const highlightTypeOptions = [
      { label: __2("None", "digiblocks"), value: "none" },
      { label: __2("Background", "digiblocks"), value: "background" },
      { label: __2("Text", "digiblocks"), value: "text" },
      { label: __2("Underline", "digiblocks"), value: "underline" }
    ];
    const DEFAULT_IMAGE_SIZE = { width: 300, height: 200 };
    const tabList = [
      {
        name: "options",
        title: __2("Options", "digiblocks"),
        icon: tabIcons2.optionsIcon
      },
      {
        name: "style",
        title: __2("Style", "digiblocks"),
        icon: tabIcons2.styleIcon
      },
      {
        name: "advanced",
        title: __2("Advanced", "digiblocks"),
        icon: tabIcons2.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __2("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __2("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const addButton = () => {
      const newButtonId = `button-${buttons.length + 1}`;
      const newButtons = [...buttons, {
        id: newButtonId,
        text: __2("Click Here", "digiblocks"),
        url: "#",
        openInNewTab: false,
        rel: "",
        isPrimary: false,
        isFullWidth: false,
        customColors: false,
        backgroundColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
        borderRadius: ""
      }];
      setAttributes({ buttons: newButtons });
    };
    const removeButton = (buttonId) => {
      const newButtons = buttons.filter((button) => button.id !== buttonId);
      setAttributes({ buttons: newButtons });
    };
    const updateButton = (buttonId, property, value) => {
      const newButtons = buttons.map((button) => {
        if (button.id === buttonId) {
          return {
            ...button,
            [property]: value
          };
        }
        return button;
      });
      setAttributes({ buttons: newButtons });
    };
    const renderStylePreview = (styleOption) => {
      const isSelected = style === styleOption.value;
      const containerStyle = {
        display: "inline-flex",
        flexDirection: "column",
        width: "70px",
        height: "70px",
        margin: "5px",
        border: `1px solid ${isSelected ? "#007cba" : "#ddd"}`,
        backgroundColor: isSelected ? "rgba(0,124,186,0.1)" : "white",
        borderRadius: "4px",
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 0.2s ease"
      };
      const labelStyle = {
        textAlign: "center",
        fontSize: "10px",
        padding: "3px 0",
        fontWeight: isSelected ? "500" : "normal",
        borderBottom: `1px solid ${isSelected ? "#e0e0e0" : "transparent"}`,
        backgroundColor: isSelected ? "rgba(0,124,186,0.05)" : "transparent"
      };
      const previewStyle = {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px"
      };
      let previewContent = null;
      switch (styleOption.value) {
        case "basic":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "80%", height: "4px", backgroundColor: "#333", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "60%", height: "2px", backgroundColor: "#777", marginBottom: "6px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "40%", height: "6px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "split":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "100%", backgroundColor: "#007cba", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "70%", backgroundColor: "#fff", opacity: 0.2 } })), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "100%", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "80%", height: "3px", backgroundColor: "#333", marginBottom: "2px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "60%", height: "2px", backgroundColor: "#777", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "40%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } })));
          break;
        case "cover":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", backgroundColor: "#007cba", opacity: 0.7, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#fff", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#fff", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#fff", borderRadius: "2px" } }));
          break;
        case "box":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "90%", height: "90%", margin: "auto", border: "2px solid #007cba", borderRadius: "3px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "modern":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "3px", position: "relative" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { position: "absolute", left: "0", top: "20%", width: "5px", height: "60%", backgroundColor: "#007cba" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px", marginLeft: "8px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px", marginLeft: "8px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px", marginLeft: "8px" } }));
          break;
        case "gradient":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#fff", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#fff", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#fff", borderRadius: "2px" } }));
          break;
        case "minimal":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "1px", backgroundColor: "#007cba", marginBottom: "1px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "callout":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            border: "1px solid #eee",
            borderLeft: "5px solid #007cba",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "5px"
          } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "banner":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f0f7ff",
            position: "relative"
          } }, /* @__PURE__ */ wp.element.createElement("div", { style: { height: "4px", width: "100%", backgroundColor: "#007cba" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } })));
          break;
        default:
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "80%", height: "4px", backgroundColor: "#333", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "60%", height: "2px", backgroundColor: "#777", marginBottom: "6px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "40%", height: "6px", backgroundColor: "#007cba", borderRadius: "2px" } }));
      }
      return /* @__PURE__ */ wp.element.createElement("div", { style: containerStyle, onClick: () => setAttributes({ style: styleOption.value }) }, /* @__PURE__ */ wp.element.createElement("div", { style: labelStyle }, styleOption.label), /* @__PURE__ */ wp.element.createElement("div", { style: previewStyle }, previewContent));
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
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
      const paddingCSS = padding && padding[activeDevice] ? `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};` : "padding: 40px 30px;";
      const marginCSS = margin && margin[activeDevice] ? `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};` : "margin: 0 0 30px 0;";
      let backgroundCSS = "";
      if (backgroundType === "color") {
        backgroundCSS = `background-color: ${backgroundColor || "#f5f5f5"};`;
      } else if (backgroundType === "image" && backgroundImage && backgroundImage.url) {
        backgroundCSS = `
                background-image: url(${backgroundImage.url});
                background-position: ${backgroundPosition || "center center"};
                background-size: ${backgroundSize || "cover"};
                background-repeat: ${backgroundRepeat || "no-repeat"};
            `;
      } else if (backgroundType === "gradient") {
        backgroundCSS = `background: linear-gradient(135deg, ${backgroundColor || "#6a11cb"} 0%, ${backgroundHoverColor || "#2575fc"} 100%);`;
      }
      const minHeightCSS = minHeight && minHeight[activeDevice] ? `min-height: ${minHeight[activeDevice]}px;` : "";
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
      let buttonTypographyCSS = "";
      if (buttonTypography) {
        if (buttonTypography.fontFamily) {
          buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
        }
        if (buttonTypography.fontSize && buttonTypography.fontSize[activeDevice]) {
          buttonTypographyCSS += `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || "px"};`;
        }
        if (buttonTypography.fontWeight) {
          buttonTypographyCSS += `font-weight: ${buttonTypography.fontWeight};`;
        }
        if (buttonTypography.fontStyle) {
          buttonTypographyCSS += `font-style: ${buttonTypography.fontStyle};`;
        }
        if (buttonTypography.textTransform) {
          buttonTypographyCSS += `text-transform: ${buttonTypography.textTransform};`;
        }
        if (buttonTypography.textDecoration) {
          buttonTypographyCSS += `text-decoration: ${buttonTypography.textDecoration};`;
        }
        if (buttonTypography.lineHeight && buttonTypography.lineHeight[activeDevice]) {
          buttonTypographyCSS += `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || "em"};`;
        }
        if (buttonTypography.letterSpacing && buttonTypography.letterSpacing[activeDevice]) {
          buttonTypographyCSS += `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || "px"};`;
        }
      }
      const buttonPaddingCSS = buttonPadding && buttonPadding[activeDevice] ? `padding: ${buttonPadding[activeDevice].top}${buttonPadding[activeDevice].unit} ${buttonPadding[activeDevice].right}${buttonPadding[activeDevice].unit} ${buttonPadding[activeDevice].bottom}${buttonPadding[activeDevice].unit} ${buttonPadding[activeDevice].left}${buttonPadding[activeDevice].unit};` : "padding: 10px 20px;";
      const buttonBorderRadiusCSS = buttonBorderRadius && buttonBorderRadius[activeDevice] ? `border-radius: ${buttonBorderRadius[activeDevice].top}${buttonBorderRadius[activeDevice].unit} ${buttonBorderRadius[activeDevice].right}${buttonBorderRadius[activeDevice].unit} ${buttonBorderRadius[activeDevice].bottom}${buttonBorderRadius[activeDevice].unit} ${buttonBorderRadius[activeDevice].left}${buttonBorderRadius[activeDevice].unit};` : "border-radius: 4px;";
      const contentWidthCSS = contentWidth ? `max-width: ${contentWidth}${typeof contentWidth === "number" ? "%" : ""};` : "";
      const widthCSS = width ? `width: ${width}${typeof width === "number" ? "px" : ""};` : "width: 100%;";
      const textAlignCSS = align ? `text-align: ${align};` : "";
      const verticalAlignCSS = verticalAlign ? `justify-content: ${verticalAlign};` : "justify-content: center;";
      const buttonsAlignCSS = buttonsAlign ? `text-align: ${buttonsAlign};` : "text-align: left;";
      const mobileReverseCSS = reverseColumnsMobile ? '@media (max-width: 767px) { [data-custom-id="' + blockId + '"] .digiblocks-cta-split-container { flex-direction: column-reverse; } } body[data-digiblocks-device="mobile"] [data-custom-id="' + blockId + '"] .digiblocks-cta-split-container { flex-direction: column-reverse; }' : "";
      let highlightCSS = "";
      if (highlightText && highlightType && highlightType !== "none" && highlightColor) {
        switch (highlightType) {
          case "background":
            highlightCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-cta-highlight {
                            background-color: ${highlightColor};
                            padding: 0 5px;
                            border-radius: 3px;
                        }
                    `;
            break;
          case "text":
            highlightCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-cta-highlight {
                            color: ${highlightColor};
                        }
                    `;
            break;
          case "underline":
            highlightCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-cta-highlight {
                            border-bottom: 2px solid ${highlightColor};
                            padding-bottom: 2px;
                        }
                    `;
            break;
        }
      }
      let styleSpecificCSS = "";
      switch (style) {
        case "split":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        padding: 0;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-split-container {
                        display: flex;
                        align-items: stretch;
                        min-height: inherit;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-image-container {
                        flex: 1;
                        min-height: 300px;
                        background-image: url(${backgroundImage?.url || ""});
                        background-position: ${backgroundPosition || "center center"};
                        background-size: ${backgroundSize || "cover"};
                        background-repeat: ${backgroundRepeat || "no-repeat"};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-content-container {
                        flex: 1;
                        ${paddingCSS}
                        ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                        display: flex;
                        flex-direction: column;
                        ${verticalAlignCSS}
                    }

					@media (max-width: 767px) {
                        [data-custom-id="${blockId}"] .digiblocks-cta-split-container {
                            flex-direction: column;
                        }
                        
                        [data-custom-id="${blockId}"] .digiblocks-cta-image-container {
                            min-height: 200px;
                        }
                    }
                `;
          break;
        case "cover":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        position: relative;
                        z-index: 1;
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-background {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        ${backgroundCSS}
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background-color: ${backgroundOverlayColor || "rgba(0,0,0,0.5)"};
                        opacity: ${backgroundOverlayOpacity !== void 0 ? backgroundOverlayOpacity / 100 : 0.5};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-title {
                        color: ${titleColor || "#fff"};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-content {
						color: ${textColor || "rgba(255, 255, 255, 0.9)"};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button {
                        border: 2px solid #fff;
                        color: #fff;
                        background-color: transparent;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button.is-primary {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button.is-primary:hover {
                        background-color: transparent;
                        color: #fff;
                    }
                `;
          break;
        case "box":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        border: 2px solid ${borderColor || "#e0e0e0"};
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                `;
          break;
        case "modern":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        position: relative;
                        padding-left: 50px;
                    }
                    
                    [data-custom-id="${blockId}"]:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 20%;
                        height: 60%;
                        width: 8px;
                        background-color: ${buttonColor || "#1e73be"};
                        border-radius: 4px;
                    }
                `;
          break;
        case "gradient":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        background: linear-gradient(135deg, ${backgroundColor || "#6a11cb"} 0%, ${backgroundHoverColor || "#2575fc"} 100%);
                        color: #fff;
                        border-radius: 10px;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-title {
                        color: ${titleColor || "#fff"};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-content {
						color: ${textColor || "rgba(255, 255, 255, 0.9)"};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button {
                        border: 2px solid #fff;
                        color: #fff;
                        background-color: transparent;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button.is-primary {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button.is-primary:hover {
                        background-color: transparent;
                        color: #fff;
                    }
                `;
          break;
        case "minimal":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        border-top: 1px solid #eee;
                        border-bottom: 1px solid #eee;
                        padding-top: 50px;
                        padding-bottom: 50px;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-buttons {
                        position: relative;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-buttons:before {
                        content: '';
                        position: absolute;
                        top: -20px;
                        left: 0;
                        width: 50px;
                        height: 2px;
                        background-color: ${buttonColor || "#1e73be"};
                    }
                `;
          break;
        case "callout":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        border-left: 5px solid ${buttonColor || "#1e73be"};
                        background-color: ${backgroundColor || "#f5f5f5"};
                        padding: 30px;
                        position: relative;
                        border-radius: 0 4px 4px 0;
                    }
                    
                    [data-custom-id="${blockId}"]:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        width: 5px;
                        background-color: ${buttonColor || "#1e73be"};
                        border-radius: 4px 0 0 4px;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-title {
                        color: ${titleColor || "#333"};
                        margin-bottom: 15px;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-content {
                        color: ${textColor || "#666"};
                        margin-bottom: 20px;
                    }
                `;
          break;
        case "banner":
          styleSpecificCSS = `
                    [data-custom-id="${blockId}"] {
                        position: relative;
                        padding: 30px;
                        background-color: ${backgroundColor || "#f0f7ff"};
                        border-radius: 0;
                        overflow: visible;
                    }
                    
                    [data-custom-id="${blockId}"]:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background-color: ${buttonColor || "#1e73be"};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-title {
                        color: ${titleColor || "#333"};
                        margin-bottom: 15px;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-content {
                        color: ${textColor || "#666"};
                        margin-bottom: 20px;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button {
                        background-color: ${buttonColor || "#1e73be"};
                        color: ${buttonTextColor || "#fff"};
                        border-radius: 4px;
                        padding: 10px 20px;
                        transition: all 0.3s ease;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                `;
          break;
        default:
          styleSpecificCSS = "";
      }
      let horizontalLayoutCSS = "";
      if (horizontalLayout) {
        highlightCSS = `
				[data-custom-id="${blockId}"] .digiblocks-cta-horizontal {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 2rem;
					width: 100%;
				}
				
				[data-custom-id="${blockId}"] .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
					flex: 1;
				}
				
				[data-custom-id="${blockId}"] .digiblocks-cta-horizontal .digiblocks-cta-buttons {
					flex-shrink: 0;
				}
				
				/* Responsive styles for horizontal layout */
				@media (max-width: 767px) {
					[data-custom-id="${blockId}"] .digiblocks-cta-horizontal {
						flex-direction: column;
						align-items: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
						gap: 1rem;
					}
					
					[data-custom-id="${blockId}"] .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
						width: 100%;
						text-align: ${align};
					}
				}

				body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-horizontal {
					flex-direction: column;
					align-items: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
					gap: 1rem;
				}
				
				body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
					width: 100%;
					text-align: ${align};
				}
			`;
      }
      const titleWithHighlightCSS = highlightText && highlightType && highlightType !== "none" ? `
            [data-custom-id="${blockId}"] .digiblocks-cta-title {
                white-space: pre-wrap;
            }
        ` : "";
      let hoverCSS = `
            [data-custom-id="${blockId}"] .digiblocks-cta-title {
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-content {
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"]:hover .digiblocks-cta-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            [data-custom-id="${blockId}"]:hover .digiblocks-cta-content {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
            }
            
            [data-custom-id="${blockId}"]:hover {
                ${backgroundHoverColor && style !== "gradient" && style !== "split" ? `background-color: ${backgroundHoverColor};` : ""}
                
                ${boxShadowHover && boxShadowHover.enable ? `
                    ${boxShadowHover.position === "inset" ? "box-shadow: inset" : "box-shadow:"} 
                    ${boxShadowHover.horizontal}px 
                    ${boxShadowHover.vertical}px 
                    ${boxShadowHover.blur}px 
                    ${boxShadowHover.spread}px 
                    ${boxShadowHover.color};` : ""}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-button {
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-button:hover {
                ${buttonHoverColor ? `background-color: ${buttonHoverColor};` : ""}
                ${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}
            }
        `;
      return `
            /* Call to Action Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                ${style !== "split" ? backgroundCSS : ""}
                ${borderCSS}
                ${boxShadowCSS}
                ${style !== "split" ? paddingCSS : ""}
                ${marginCSS}
                ${widthCSS}
                ${minHeightCSS}
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-container {
                ${contentWidthCSS}
                margin: 0 auto;
                ${style !== "split" ? textAlignCSS : ""}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-title {
                color: ${titleColor || "#333333"};
                margin-top: 0;
                margin-bottom: 20px;
                ${titleTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-content {
                color: ${textColor || "#666666"};
                margin-bottom: 30px;
                ${contentTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-buttons {
                ${buttonsAlignCSS}
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                ${buttonsAlign === "center" ? "justify-content: center;" : buttonsAlign === "right" ? "justify-content: flex-end;" : "justify-content: flex-start;"}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                border: none;
                cursor: pointer;
                background-color: ${buttonColor || "#1e73be"};
                color: ${buttonTextColor || "#ffffff"};
                ${buttonPaddingCSS}
                ${buttonBorderRadiusCSS}
                ${buttonTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-button.is-full-width {
                width: 100%;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cta-button:not(.is-primary) {
                background-color: transparent;
                color: ${buttonColor || "#1e73be"};
                border: 2px solid ${buttonColor || "#1e73be"};
            }
            
            ${styleSpecificCSS}
            ${horizontalLayoutCSS}
            ${highlightCSS}
            ${titleWithHighlightCSS}
            ${hoverCSS}
            ${mobileReverseCSS}
            
            /* Responsive styles */
			@media (max-width: 991px) {
                [data-custom-id="${blockId}"] {
                    ${style !== "split" ? padding && padding["tablet"] && padding["tablet"].top && padding["tablet"].right && padding["tablet"].bottom && padding["tablet"].left && padding["tablet"].unit ? `padding: ${padding["tablet"].top}${padding["tablet"].unit} ${padding["tablet"].right}${padding["tablet"].unit} ${padding["tablet"].bottom}${padding["tablet"].unit} ${padding["tablet"].left}${padding["tablet"].unit};` : "padding: 30px 25px;" : ""}
                    
                    margin: ${margin && margin["tablet"] ? `${margin["tablet"].top}${margin["tablet"].unit} ${margin["tablet"].right}${margin["tablet"].unit} ${margin["tablet"].bottom}${margin["tablet"].unit} ${margin["tablet"].left}${margin["tablet"].unit}` : "0 0 25px 0"};
                    
                    ${minHeight && minHeight["tablet"] ? `min-height: ${minHeight["tablet"]}px;` : ""}
                    
                    ${borderStyle && borderStyle !== "none" ? borderWidth && borderWidth["tablet"] ? `border-width: ${borderWidth["tablet"].top}${borderWidth["tablet"].unit} ${borderWidth["tablet"].right}${borderWidth["tablet"].unit} ${borderWidth["tablet"].bottom}${borderWidth["tablet"].unit} ${borderWidth["tablet"].left}${borderWidth["tablet"].unit};` : "" : ""}
                    
                    ${borderStyle && borderStyle !== "none" ? borderRadius && borderRadius["tablet"] ? `border-radius: ${borderRadius["tablet"].top}${borderRadius["tablet"].unit} ${borderRadius["tablet"].right}${borderRadius["tablet"].unit} ${borderRadius["tablet"].bottom}${borderRadius["tablet"].unit} ${borderRadius["tablet"].left}${borderRadius["tablet"].unit};` : "" : ""}
                }
                
                [data-custom-id="${blockId}"] .digiblocks-cta-title {
                    ${titleTypography && titleTypography.fontSize && titleTypography.fontSize["tablet"] ? `font-size: ${titleTypography.fontSize["tablet"]}${titleTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${titleTypography && titleTypography.lineHeight && titleTypography.lineHeight["tablet"] ? `line-height: ${titleTypography.lineHeight["tablet"]}${titleTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${titleTypography && titleTypography.letterSpacing && titleTypography.letterSpacing["tablet"] ? `letter-spacing: ${titleTypography.letterSpacing["tablet"]}${titleTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                [data-custom-id="${blockId}"] .digiblocks-cta-content {
                    ${contentTypography && contentTypography.fontSize && contentTypography.fontSize["tablet"] ? `font-size: ${contentTypography.fontSize["tablet"]}${contentTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${contentTypography && contentTypography.lineHeight && contentTypography.lineHeight["tablet"] ? `line-height: ${contentTypography.lineHeight["tablet"]}${contentTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${contentTypography && contentTypography.letterSpacing && contentTypography.letterSpacing["tablet"] ? `letter-spacing: ${contentTypography.letterSpacing["tablet"]}${contentTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                [data-custom-id="${blockId}"] .digiblocks-cta-button {
                    ${buttonTypography && buttonTypography.fontSize && buttonTypography.fontSize["tablet"] ? `font-size: ${buttonTypography.fontSize["tablet"]}${buttonTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${buttonPadding && buttonPadding["tablet"] ? `padding: ${buttonPadding["tablet"].top}${buttonPadding["tablet"].unit} ${buttonPadding["tablet"].right}${buttonPadding["tablet"].unit} ${buttonPadding["tablet"].bottom}${buttonPadding["tablet"].unit} ${buttonPadding["tablet"].left}${buttonPadding["tablet"].unit};` : ""}
                    
                    ${buttonBorderRadius && buttonBorderRadius["tablet"] ? `border-radius: ${buttonBorderRadius["tablet"].top}${buttonBorderRadius["tablet"].unit} ${buttonBorderRadius["tablet"].right}${buttonBorderRadius["tablet"].unit} ${buttonBorderRadius["tablet"].bottom}${buttonBorderRadius["tablet"].unit} ${buttonBorderRadius["tablet"].left}${buttonBorderRadius["tablet"].unit};` : ""}
                }
            }

			body[data-digiblocks-device="tablet"] [data-custom-id="${blockId}"] {
				${style !== "split" ? padding && padding["tablet"] && padding["tablet"].top && padding["tablet"].right && padding["tablet"].bottom && padding["tablet"].left && padding["tablet"].unit ? `padding: ${padding["tablet"].top}${padding["tablet"].unit} ${padding["tablet"].right}${padding["tablet"].unit} ${padding["tablet"].bottom}${padding["tablet"].unit} ${padding["tablet"].left}${padding["tablet"].unit};` : "padding: 30px 25px;" : ""}
				
				margin: ${margin && margin["tablet"] ? `${margin["tablet"].top}${margin["tablet"].unit} ${margin["tablet"].right}${margin["tablet"].unit} ${margin["tablet"].bottom}${margin["tablet"].unit} ${margin["tablet"].left}${margin["tablet"].unit}` : "0 0 25px 0"};
				
				${minHeight && minHeight["tablet"] ? `min-height: ${minHeight["tablet"]}px;` : ""}
				
				${borderStyle && borderStyle !== "none" ? borderWidth && borderWidth["tablet"] ? `border-width: ${borderWidth["tablet"].top}${borderWidth["tablet"].unit} ${borderWidth["tablet"].right}${borderWidth["tablet"].unit} ${borderWidth["tablet"].bottom}${borderWidth["tablet"].unit} ${borderWidth["tablet"].left}${borderWidth["tablet"].unit};` : "" : ""}
				
				${borderStyle && borderStyle !== "none" ? borderRadius && borderRadius["tablet"] ? `border-radius: ${borderRadius["tablet"].top}${borderRadius["tablet"].unit} ${borderRadius["tablet"].right}${borderRadius["tablet"].unit} ${borderRadius["tablet"].bottom}${borderRadius["tablet"].unit} ${borderRadius["tablet"].left}${borderRadius["tablet"].unit};` : "" : ""}
			}
			
			body[data-digiblocks-device="tablet"] [data-custom-id="${blockId}"] .digiblocks-cta-title {
				${titleTypography && titleTypography.fontSize && titleTypography.fontSize["tablet"] ? `font-size: ${titleTypography.fontSize["tablet"]}${titleTypography.fontSizeUnit || "px"};` : ""}
				
				${titleTypography && titleTypography.lineHeight && titleTypography.lineHeight["tablet"] ? `line-height: ${titleTypography.lineHeight["tablet"]}${titleTypography.lineHeightUnit || "em"};` : ""}
				
				${titleTypography && titleTypography.letterSpacing && titleTypography.letterSpacing["tablet"] ? `letter-spacing: ${titleTypography.letterSpacing["tablet"]}${titleTypography.letterSpacingUnit || "px"};` : ""}
			}
			
			body[data-digiblocks-device="tablet"] [data-custom-id="${blockId}"] .digiblocks-cta-content {
				${contentTypography && contentTypography.fontSize && contentTypography.fontSize["tablet"] ? `font-size: ${contentTypography.fontSize["tablet"]}${contentTypography.fontSizeUnit || "px"};` : ""}
				
				${contentTypography && contentTypography.lineHeight && contentTypography.lineHeight["tablet"] ? `line-height: ${contentTypography.lineHeight["tablet"]}${contentTypography.lineHeightUnit || "em"};` : ""}
				
				${contentTypography && contentTypography.letterSpacing && contentTypography.letterSpacing["tablet"] ? `letter-spacing: ${contentTypography.letterSpacing["tablet"]}${contentTypography.letterSpacingUnit || "px"};` : ""}
			}
			
			body[data-digiblocks-device="tablet"] [data-custom-id="${blockId}"] .digiblocks-cta-button {
				${buttonTypography && buttonTypography.fontSize && buttonTypography.fontSize["tablet"] ? `font-size: ${buttonTypography.fontSize["tablet"]}${buttonTypography.fontSizeUnit || "px"};` : ""}
				
				${buttonPadding && buttonPadding["tablet"] ? `padding: ${buttonPadding["tablet"].top}${buttonPadding["tablet"].unit} ${buttonPadding["tablet"].right}${buttonPadding["tablet"].unit} ${buttonPadding["tablet"].bottom}${buttonPadding["tablet"].unit} ${buttonPadding["tablet"].left}${buttonPadding["tablet"].unit};` : ""}
				
				${buttonBorderRadius && buttonBorderRadius["tablet"] ? `border-radius: ${buttonBorderRadius["tablet"].top}${buttonBorderRadius["tablet"].unit} ${buttonBorderRadius["tablet"].right}${buttonBorderRadius["tablet"].unit} ${buttonBorderRadius["tablet"].bottom}${buttonBorderRadius["tablet"].unit} ${buttonBorderRadius["tablet"].left}${buttonBorderRadius["tablet"].unit};` : ""}
			}

			@media (max-width: 767px) {
                [data-custom-id="${blockId}"] {
                    ${style !== "split" ? padding && padding["mobile"] && padding["mobile"].top && padding["mobile"].right && padding["mobile"].bottom && padding["mobile"].left && padding["mobile"].unit ? `padding: ${padding["mobile"].top}${padding["mobile"].unit} ${padding["mobile"].right}${padding["mobile"].unit} ${padding["mobile"].bottom}${padding["mobile"].unit} ${padding["mobile"].left}${padding["mobile"].unit};` : "padding: 25px 20px;" : ""}
                    
                    margin: ${margin && margin["mobile"] ? `${margin["mobile"].top}${margin["mobile"].unit} ${margin["mobile"].right}${margin["mobile"].unit} ${margin["mobile"].bottom}${margin["mobile"].unit} ${margin["mobile"].left}${margin["mobile"].unit}` : "0 0 20px 0"};
                    
                    ${minHeight && minHeight["mobile"] ? `min-height: ${minHeight["mobile"]}px;` : ""}
                    
                    ${borderStyle && borderStyle !== "none" ? borderWidth && borderWidth["mobile"] ? `border-width: ${borderWidth["mobile"].top}${borderWidth["mobile"].unit} ${borderWidth["mobile"].right}${borderWidth["mobile"].unit} ${borderWidth["mobile"].bottom}${borderWidth["mobile"].unit} ${borderWidth["mobile"].left}${borderWidth["mobile"].unit};` : "" : ""}
                    
                    ${borderStyle && borderStyle !== "none" ? borderRadius && borderRadius["mobile"] ? `border-radius: ${borderRadius["mobile"].top}${borderRadius["mobile"].unit} ${borderRadius["mobile"].right}${borderRadius["mobile"].unit} ${borderRadius["mobile"].bottom}${borderRadius["mobile"].unit} ${borderRadius["mobile"].left}${borderRadius["mobile"].unit};` : "" : ""}
                }
                
                ${style === "split" ? `[data-custom-id="${blockId}"] .digiblocks-cta-split-container {
                        flex-direction: ${reverseColumnsMobile ? "column-reverse" : "column"};
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-image-container {
                        min-height: 200px;
                    }
                    
                    [data-custom-id="${blockId}"] .digiblocks-cta-content-container {
                        padding: ${padding && padding["mobile"] ? `${padding["mobile"].top}${padding["mobile"].unit} ${padding["mobile"].right}${padding["mobile"].unit} ${padding["mobile"].bottom}${padding["mobile"].unit} ${padding["mobile"].left}${padding["mobile"].unit}` : "25px 20px"};
                    }` : ""}
                
                [data-custom-id="${blockId}"] .digiblocks-cta-title {
                    ${titleTypography && titleTypography.fontSize && titleTypography.fontSize["mobile"] ? `font-size: ${titleTypography.fontSize["mobile"]}${titleTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${titleTypography && titleTypography.lineHeight && titleTypography.lineHeight["mobile"] ? `line-height: ${titleTypography.lineHeight["mobile"]}${titleTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${titleTypography && titleTypography.letterSpacing && titleTypography.letterSpacing["mobile"] ? `letter-spacing: ${titleTypography.letterSpacing["mobile"]}${titleTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                [data-custom-id="${blockId}"] .digiblocks-cta-content {
                    ${contentTypography && contentTypography.fontSize && contentTypography.fontSize["mobile"] ? `font-size: ${contentTypography.fontSize["mobile"]}${contentTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${contentTypography && contentTypography.lineHeight && contentTypography.lineHeight["mobile"] ? `line-height: ${contentTypography.lineHeight["mobile"]}${contentTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${contentTypography && contentTypography.letterSpacing && contentTypography.letterSpacing["mobile"] ? `letter-spacing: ${contentTypography.letterSpacing["mobile"]}${contentTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                [data-custom-id="${blockId}"] .digiblocks-cta-button {
                    ${buttonTypography && buttonTypography.fontSize && buttonTypography.fontSize["mobile"] ? `font-size: ${buttonTypography.fontSize["mobile"]}${buttonTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${buttonPadding && buttonPadding["mobile"] ? `padding: ${buttonPadding["mobile"].top}${buttonPadding["mobile"].unit} ${buttonPadding["mobile"].right}${buttonPadding["mobile"].unit} ${buttonPadding["mobile"].bottom}${buttonPadding["mobile"].unit} ${buttonPadding["mobile"].left}${buttonPadding["mobile"].unit};` : ""}
                    
                    ${buttonBorderRadius && buttonBorderRadius["mobile"] ? `border-radius: ${buttonBorderRadius["mobile"].top}${buttonBorderRadius["mobile"].unit} ${buttonBorderRadius["mobile"].right}${buttonBorderRadius["mobile"].unit} ${buttonBorderRadius["mobile"].bottom}${buttonBorderRadius["mobile"].unit} ${buttonBorderRadius["mobile"].left}${buttonBorderRadius["mobile"].unit};` : ""}
                }
                
                [data-custom-id="${blockId}"] .digiblocks-cta-buttons {
                    flex-direction: column;
					gap: 10px;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-cta-button {
                    width: 100%;
                }
            }
			
			body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] {
				${style !== "split" ? padding && padding["mobile"] && padding["mobile"].top && padding["mobile"].right && padding["mobile"].bottom && padding["mobile"].left && padding["mobile"].unit ? `padding: ${padding["mobile"].top}${padding["mobile"].unit} ${padding["mobile"].right}${padding["mobile"].unit} ${padding["mobile"].bottom}${padding["mobile"].unit} ${padding["mobile"].left}${padding["mobile"].unit};` : "padding: 25px 20px;" : ""}
				
				margin: ${margin && margin["mobile"] ? `${margin["mobile"].top}${margin["mobile"].unit} ${margin["mobile"].right}${margin["mobile"].unit} ${margin["mobile"].bottom}${margin["mobile"].unit} ${margin["mobile"].left}${margin["mobile"].unit}` : "0 0 20px 0"};
				
				${minHeight && minHeight["mobile"] ? `min-height: ${minHeight["mobile"]}px;` : ""}
				
				${borderStyle && borderStyle !== "none" ? borderWidth && borderWidth["mobile"] ? `border-width: ${borderWidth["mobile"].top}${borderWidth["mobile"].unit} ${borderWidth["mobile"].right}${borderWidth["mobile"].unit} ${borderWidth["mobile"].bottom}${borderWidth["mobile"].unit} ${borderWidth["mobile"].left}${borderWidth["mobile"].unit};` : "" : ""}
				
				${borderStyle && borderStyle !== "none" ? borderRadius && borderRadius["mobile"] ? `border-radius: ${borderRadius["mobile"].top}${borderRadius["mobile"].unit} ${borderRadius["mobile"].right}${borderRadius["mobile"].unit} ${borderRadius["mobile"].bottom}${borderRadius["mobile"].unit} ${borderRadius["mobile"].left}${borderRadius["mobile"].unit};` : "" : ""}
			}
			
			${style === "split" ? `body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-split-container {
					flex-direction: ${reverseColumnsMobile ? "column-reverse" : "column"};
				}
				
				body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-image-container {
					min-height: 200px;
				}
				
				body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-content-container {
					padding: ${padding && padding["mobile"] ? `${padding["mobile"].top}${padding["mobile"].unit} ${padding["mobile"].right}${padding["mobile"].unit} ${padding["mobile"].bottom}${padding["mobile"].unit} ${padding["mobile"].left}${padding["mobile"].unit}` : "25px 20px"};
				}` : ""}
			
			body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-title {
				${titleTypography && titleTypography.fontSize && titleTypography.fontSize["mobile"] ? `font-size: ${titleTypography.fontSize["mobile"]}${titleTypography.fontSizeUnit || "px"};` : ""}
				
				${titleTypography && titleTypography.lineHeight && titleTypography.lineHeight["mobile"] ? `line-height: ${titleTypography.lineHeight["mobile"]}${titleTypography.lineHeightUnit || "em"};` : ""}
				
				${titleTypography && titleTypography.letterSpacing && titleTypography.letterSpacing["mobile"] ? `letter-spacing: ${titleTypography.letterSpacing["mobile"]}${titleTypography.letterSpacingUnit || "px"};` : ""}
			}
			
			body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-content {
				${contentTypography && contentTypography.fontSize && contentTypography.fontSize["mobile"] ? `font-size: ${contentTypography.fontSize["mobile"]}${contentTypography.fontSizeUnit || "px"};` : ""}
				
				${contentTypography && contentTypography.lineHeight && contentTypography.lineHeight["mobile"] ? `line-height: ${contentTypography.lineHeight["mobile"]}${contentTypography.lineHeightUnit || "em"};` : ""}
				
				${contentTypography && contentTypography.letterSpacing && contentTypography.letterSpacing["mobile"] ? `letter-spacing: ${contentTypography.letterSpacing["mobile"]}${contentTypography.letterSpacingUnit || "px"};` : ""}
			}
			
			body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-button {
				${buttonTypography && buttonTypography.fontSize && buttonTypography.fontSize["mobile"] ? `font-size: ${buttonTypography.fontSize["mobile"]}${buttonTypography.fontSizeUnit || "px"};` : ""}
				
				${buttonPadding && buttonPadding["mobile"] ? `padding: ${buttonPadding["mobile"].top}${buttonPadding["mobile"].unit} ${buttonPadding["mobile"].right}${buttonPadding["mobile"].unit} ${buttonPadding["mobile"].bottom}${buttonPadding["mobile"].unit} ${buttonPadding["mobile"].left}${buttonPadding["mobile"].unit};` : ""}
				
				${buttonBorderRadius && buttonBorderRadius["mobile"] ? `border-radius: ${buttonBorderRadius["mobile"].top}${buttonBorderRadius["mobile"].unit} ${buttonBorderRadius["mobile"].right}${buttonBorderRadius["mobile"].unit} ${buttonBorderRadius["mobile"].bottom}${buttonBorderRadius["mobile"].unit} ${buttonBorderRadius["mobile"].left}${buttonBorderRadius["mobile"].unit};` : ""}
			}
			
			body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-buttons {
				flex-direction: column;
				gap: 10px;
			}
			
			body[data-digiblocks-device="mobile"] [data-custom-id="${blockId}"] .digiblocks-cta-button {
				width: 100%;
			}
        `;
    };
    const renderTitleWithHighlight = () => {
      if (!highlightText || !title)
        return title;
      const index = title.indexOf(highlightText);
      if (index === -1)
        return title;
      const before = title.substring(0, index);
      const highlight = title.substring(index, index + highlightText.length);
      const after = title.substring(index + highlightText.length);
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, before, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cta-highlight" }, highlight), after);
    };
    const renderButtonEditor = (button, index) => {
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-button-editor", key: button.id, style: { marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "5px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" } }, /* @__PURE__ */ wp.element.createElement("h3", { style: { margin: 0 } }, __2("Button", "digiblocks"), " ", index + 1), buttons.length > 1 && /* @__PURE__ */ wp.element.createElement(
        Button2,
        {
          isDestructive: true,
          onClick: () => removeButton(button.id),
          icon: "trash"
        },
        __2("Remove", "digiblocks")
      )), /* @__PURE__ */ wp.element.createElement(
        TextControl,
        {
          label: __2("Button Text", "digiblocks"),
          value: button.text || "",
          onChange: (value) => updateButton(button.id, "text", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
        LinkControl,
        {
          label: __2("Button Link", "digiblocks"),
          value: {
            url: button.url || "",
            opensInNewTab: button.openInNewTab,
            rel: button.rel
          },
          settings: [
            {
              id: "opensInNewTab",
              title: __2("Open in new tab", "digiblocks")
            },
            {
              id: "rel",
              title: __2("Add noopener noreferrer", "digiblocks")
            }
          ],
          onChange: (linkObject) => {
            updateButton(button.id, "url", linkObject.url);
            updateButton(button.id, "openInNewTab", linkObject.opensInNewTab);
            updateButton(button.id, "rel", linkObject.rel);
          }
        }
      )), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, /* @__PURE__ */ wp.element.createElement(
        ToggleControl2,
        {
          label: __2("Primary Button", "digiblocks"),
          checked: button.isPrimary || false,
          onChange: (value) => updateButton(button.id, "isPrimary", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        ToggleControl2,
        {
          label: __2("Full Width Button", "digiblocks"),
          checked: button.isFullWidth || false,
          onChange: (value) => updateButton(button.id, "isFullWidth", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        ToggleControl2,
        {
          label: __2("Custom Colors", "digiblocks"),
          checked: button.customColors || false,
          onChange: (value) => updateButton(button.id, "customColors", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      )), button.customColors && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, /* @__PURE__ */ wp.element.createElement(
        PanelColorSettings2,
        {
          title: __2("Button Colors", "digiblocks"),
          initialOpen: true,
          enableAlpha: true,
          colorSettings: [
            {
              value: button.backgroundColor,
              onChange: (value) => updateButton(button.id, "backgroundColor", value),
              label: __2("Background Color", "digiblocks")
            },
            {
              value: button.textColor,
              onChange: (value) => updateButton(button.id, "textColor", value),
              label: __2("Text Color", "digiblocks")
            },
            {
              value: button.hoverBackgroundColor,
              onChange: (value) => updateButton(button.id, "hoverBackgroundColor", value),
              label: __2("Hover Background Color", "digiblocks")
            },
            {
              value: button.hoverTextColor,
              onChange: (value) => updateButton(button.id, "hoverTextColor", value),
              label: __2("Hover Text Color", "digiblocks")
            }
          ]
        }
      ), /* @__PURE__ */ wp.element.createElement(
        TextControl,
        {
          label: __2("Border Radius", "digiblocks"),
          type: "number",
          value: button.borderRadius || "",
          onChange: (value) => updateButton(button.id, "borderRadius", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      )));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "options",
              name: "general",
              title: __2("General", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __2("CTA Style", "digiblocks"),
                id: "cta-style-selector",
                className: "digiblocks-cta-style-selector"
              },
              /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", justifyContent: "center", margin: "0 -5px" } }, styleOptions.map((styleOption) => /* @__PURE__ */ wp.element.createElement("div", { key: styleOption.value }, renderStylePreview(styleOption))))
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl2,
              {
                label: __2("Horizontal Layout", "digiblocks"),
                help: __2("Display content and buttons side by side", "digiblocks"),
                checked: horizontalLayout || false,
                onChange: (value) => setAttributes({ horizontalLayout: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl2,
              {
                label: __2("Heading Tag", "digiblocks"),
                value: headingTag || "h2",
                options: headingTagOptions,
                onChange: (value) => setAttributes({ headingTag: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            style === "split" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl2,
              {
                label: __2("Vertical Align", "digiblocks"),
                value: verticalAlign || "center",
                onChange: (value) => setAttributes({ verticalAlign: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              verticalAlignOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption2,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleControl2,
              {
                label: __2("Reverse Columns on Mobile", "digiblocks"),
                help: __2("Place the image above the text on mobile devices", "digiblocks"),
                checked: reverseColumnsMobile || false,
                onChange: (value) => setAttributes({ reverseColumnsMobile: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Content Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl2,
                {
                  value: contentWidth,
                  onChange: (value) => setAttributes({ contentWidth: value }),
                  min: 10,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Min Height", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl2,
                {
                  value: minHeight && minHeight[localActiveDevice] ? minHeight[localActiveDevice] : 0,
                  onChange: (value) => setAttributes({
                    minHeight: {
                      ...minHeight || {},
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 1e3,
                  step: 10,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "options",
              name: "content",
              title: __2("Content", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __2("Title Highlight", "digiblocks"),
                id: "title-highlight",
                help: __2("Enter text within the title to highlight", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                TextControl,
                {
                  value: highlightText || "",
                  onChange: (value) => setAttributes({ highlightText: value }),
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            highlightText && /* @__PURE__ */ wp.element.createElement(
              SelectControl2,
              {
                label: __2("Highlight Type", "digiblocks"),
                value: highlightType || "background",
                options: highlightTypeOptions,
                onChange: (value) => setAttributes({ highlightType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            highlightText && highlightType && highlightType !== "none" && /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings2,
              {
                title: __2("Highlight Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: highlightColor,
                    onChange: (value) => setAttributes({ highlightColor: value }),
                    label: __2("Highlight Color", "digiblocks")
                  }
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "options",
              name: "buttons",
              title: __2("Buttons", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl2,
              {
                label: __2("Buttons Alignment", "digiblocks"),
                value: buttonsAlign || "left",
                onChange: (value) => setAttributes({ buttonsAlign: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              buttonsAlignOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption2,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl2,
                {
                  values: buttonPadding && buttonPadding[localActiveDevice] ? buttonPadding[localActiveDevice] : {
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 20,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    buttonPadding: {
                      ...buttonPadding || {},
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl2,
                {
                  values: buttonBorderRadius && buttonBorderRadius[localActiveDevice] ? buttonBorderRadius[localActiveDevice] : {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    buttonBorderRadius: {
                      ...buttonBorderRadius || {},
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-button-list" }, buttons && buttons.map((button, i) => renderButtonEditor(button, i))),
            /* @__PURE__ */ wp.element.createElement(
              Button2,
              {
                variant: "secondary",
                onClick: addButton,
                style: { marginTop: "10px", width: "100%" }
              },
              __2("Add Button", "digiblocks")
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "style",
              name: "colors",
              title: __2("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel2,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => {
                if (tab.name === "normal") {
                  return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings2,
                    {
                      title: __2("Text Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: titleColor,
                          onChange: (value) => setAttributes({ titleColor: value }),
                          label: __2("Title Color", "digiblocks")
                        },
                        {
                          value: textColor,
                          onChange: (value) => setAttributes({ textColor: value }),
                          label: __2("Text Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings2,
                    {
                      title: __2("Button Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: buttonColor,
                          onChange: (value) => setAttributes({ buttonColor: value }),
                          label: __2("Button Color", "digiblocks")
                        },
                        {
                          value: buttonTextColor,
                          onChange: (value) => setAttributes({ buttonTextColor: value }),
                          label: __2("Button Text Color", "digiblocks")
                        }
                      ]
                    }
                  ), borderStyle && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings2,
                    {
                      title: __2("Border Color", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: borderColor,
                          onChange: (value) => setAttributes({ borderColor: value }),
                          label: __2("Border Color", "digiblocks")
                        }
                      ]
                    }
                  ));
                } else {
                  return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings2,
                    {
                      title: __2("Text Hover Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: titleHoverColor,
                          onChange: (value) => setAttributes({ titleHoverColor: value }),
                          label: __2("Title Hover Color", "digiblocks")
                        },
                        {
                          value: textHoverColor,
                          onChange: (value) => setAttributes({ textHoverColor: value }),
                          label: __2("Text Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings2,
                    {
                      title: __2("Button Hover Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: buttonHoverColor,
                          onChange: (value) => setAttributes({ buttonHoverColor: value }),
                          label: __2("Button Hover Color", "digiblocks")
                        },
                        {
                          value: buttonTextHoverColor,
                          onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                          label: __2("Button Text Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), backgroundType === "color" && style !== "gradient" && /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings2,
                    {
                      title: __2("Background Hover Color", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: backgroundHoverColor,
                          onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                          label: __2("Background Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ));
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "style",
              name: "background",
              title: __2("Background", "digiblocks"),
              initialOpen: false
            },
            style !== "gradient" && /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl2,
              {
                label: __2("Background Type", "digiblocks"),
                value: backgroundType || "color",
                onChange: (value) => setAttributes({ backgroundType: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              backgroundTypeOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption2,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ),
            backgroundType === "color" && style !== "gradient" && /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings2,
              {
                title: __2("Background Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundColor,
                    onChange: (value) => setAttributes({ backgroundColor: value }),
                    label: __2("Background Color", "digiblocks")
                  }
                ]
              }
            ),
            backgroundType === "gradient" || style === "gradient" ? /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings2,
              {
                title: __2("Gradient Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundColor,
                    onChange: (value) => setAttributes({ backgroundColor: value }),
                    label: __2("Start Color", "digiblocks")
                  },
                  {
                    value: backgroundHoverColor,
                    onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                    label: __2("End Color", "digiblocks")
                  }
                ]
              }
            ) : null,
            backgroundType === "image" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: (media) => {
                  setAttributes({
                    backgroundImage: {
                      id: media.id,
                      url: media.url,
                      alt: media.alt || "",
                      width: media.width,
                      height: media.height
                    }
                  });
                },
                allowedTypes: ["image"],
                value: backgroundImage?.id,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, !backgroundImage?.url ? /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ wp.element.createElement(
                  Button2,
                  {
                    variant: "secondary",
                    onClick: open,
                    icon: "format-image",
                    style: { width: "100%" }
                  },
                  __2("Select Image", "digiblocks")
                )) : /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ wp.element.createElement(
                  "img",
                  {
                    src: backgroundImage.url,
                    alt: backgroundImage.alt,
                    style: {
                      display: "block",
                      width: "100%",
                      height: "auto",
                      maxHeight: "150px",
                      objectFit: "cover",
                      marginBottom: "8px"
                    }
                  }
                ), /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ wp.element.createElement(
                  Button2,
                  {
                    variant: "secondary",
                    onClick: open,
                    style: { flexGrow: 1 }
                  },
                  __2("Replace", "digiblocks")
                ), /* @__PURE__ */ wp.element.createElement(
                  Button2,
                  {
                    variant: "secondary",
                    onClick: () => setAttributes({ backgroundImage: null }),
                    isDestructive: true
                  },
                  __2("Remove", "digiblocks")
                ))))
              }
            ))), backgroundImage?.url && !style.includes("split") && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              RangeControl2,
              {
                label: __2("Overlay Opacity (%)", "digiblocks"),
                value: backgroundOverlayOpacity || 50,
                onChange: (value) => setAttributes({ backgroundOverlayOpacity: value }),
                min: 0,
                max: 100,
                step: 5,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings2,
              {
                title: __2("Overlay Color", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundOverlayColor,
                    onChange: (value) => setAttributes({ backgroundOverlayColor: value }),
                    label: __2("Overlay Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl2,
              {
                label: __2("Background Position", "digiblocks"),
                value: backgroundPosition || "center center",
                options: backgroundPositionOptions,
                onChange: (value) => setAttributes({ backgroundPosition: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl2,
              {
                label: __2("Background Size", "digiblocks"),
                value: backgroundSize || "cover",
                options: backgroundSizeOptions,
                onChange: (value) => setAttributes({ backgroundSize: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl2,
              {
                label: __2("Background Repeat", "digiblocks"),
                value: backgroundRepeat || "no-repeat",
                options: backgroundRepeatOptions,
                onChange: (value) => setAttributes({ backgroundRepeat: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "style",
              name: "typography",
              title: __2("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl2,
              {
                label: __2("Title Typography", "digiblocks"),
                value: titleTypography,
                onChange: (value) => setAttributes({ titleTypography: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl2,
              {
                label: __2("Content Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({ contentTypography: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl2,
              {
                label: __2("Button Typography", "digiblocks"),
                value: buttonTypography,
                onChange: (value) => setAttributes({ buttonTypography: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "style",
              name: "border",
              title: __2("Border", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl2,
              {
                label: __2("Border Style", "digiblocks"),
                value: borderStyle || "none",
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ borderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl2,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth || {},
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl2,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    borderRadius: {
                      ...borderRadius || {},
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "style",
              name: "spacing",
              title: __2("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl2,
                {
                  values: padding && padding[localActiveDevice] ? padding[localActiveDevice] : {
                    top: 40,
                    right: 30,
                    bottom: 40,
                    left: 30,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    padding: {
                      ...padding || {},
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl2,
              {
                label: __2("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl2,
                {
                  values: margin && margin[localActiveDevice] ? margin[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 30,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    margin: {
                      ...margin || {},
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "style",
              name: "shadow",
              title: __2("Box Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl2,
              {
                normalValue: boxShadow || {
                  enable: false,
                  color: "rgba(0, 0, 0, 0.2)",
                  horizontal: 0,
                  vertical: 0,
                  blur: 0,
                  spread: 0,
                  position: "outset"
                },
                hoverValue: boxShadowHover || {
                  enable: false,
                  color: "rgba(0, 0, 0, 0.2)",
                  horizontal: 0,
                  vertical: 0,
                  blur: 0,
                  spread: 0,
                  position: "outset"
                },
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
              }
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "advanced",
              name: "animation",
              title: __2("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl2,
              {
                label: __2("Animation Effect", "digiblocks"),
                value: animation || "none",
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button2,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __2("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody2,
            {
              tab: "advanced",
              name: "additional",
              title: __2("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __2("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __2(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __2("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __2("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __2("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps3({
      className: `digiblocks-cta style-${style} ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    const renderButtons = () => {
      if (!buttons || buttons.length === 0)
        return null;
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-buttons" }, buttons.map((button) => {
        const buttonClasses = [
          "digiblocks-cta-button",
          button.isPrimary ? "is-primary" : "",
          button.isFullWidth ? "is-full-width" : ""
        ].filter(Boolean).join(" ");
        const buttonStyle = button.customColors ? {
          backgroundColor: button.isPrimary ? button.backgroundColor || buttonColor : "transparent",
          color: button.isPrimary ? button.textColor || buttonTextColor : button.backgroundColor || buttonColor,
          borderColor: button.backgroundColor || buttonColor,
          borderStyle: "solid",
          borderWidth: "2px",
          borderRadius: button.borderRadius ? `${button.borderRadius}px` : void 0
        } : {};
        return /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            key: button.id,
            className: buttonClasses,
            style: button.customColors ? buttonStyle : {}
          },
          button.text || __2("Click Here", "digiblocks")
        );
      }));
    };
    const getBlockContent = () => {
      const HeadingTag = headingTag || "h2";
      switch (style) {
        case "split":
          return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-split-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText3,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title,
              onChange: (value) => setAttributes({ title: value }),
              placeholder: __2("Add title...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic"]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText3,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              placeholder: __2("Add content...", "digiblocks")
            }
          )), renderButtons())), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-image-container" }, !backgroundImage?.url && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-placeholder" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
            MediaUpload,
            {
              onSelect: (media) => {
                setAttributes({
                  backgroundImage: {
                    id: media.id,
                    url: media.url,
                    alt: media.alt || "",
                    width: media.width,
                    height: media.height
                  }
                });
              },
              allowedTypes: ["image"],
              value: backgroundImage?.id,
              render: ({ open }) => /* @__PURE__ */ wp.element.createElement(
                Button2,
                {
                  variant: "secondary",
                  onClick: open,
                  icon: "format-image"
                },
                __2("Select Image", "digiblocks")
              )
            }
          )))));
        case "cover":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-background" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-overlay" }), /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText3,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title,
              onChange: (value) => setAttributes({ title: value }),
              placeholder: __2("Add title...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic"]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText3,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              placeholder: __2("Add content...", "digiblocks")
            }
          )), renderButtons()), !backgroundImage?.url && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-placeholder" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
            MediaUpload,
            {
              onSelect: (media) => {
                setAttributes({
                  backgroundImage: {
                    id: media.id,
                    url: media.url,
                    alt: media.alt || "",
                    width: media.width,
                    height: media.height
                  }
                });
              },
              allowedTypes: ["image"],
              value: backgroundImage?.id,
              render: ({ open }) => /* @__PURE__ */ wp.element.createElement(
                Button2,
                {
                  variant: "secondary",
                  onClick: open,
                  icon: "format-image"
                },
                __2("Select Background Image", "digiblocks")
              )
            }
          ))));
        default:
          return /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText3,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title,
              onChange: (value) => setAttributes({ title: value }),
              placeholder: __2("Add title...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic"],
              withoutInteractiveFormatting: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText3,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              placeholder: __2("Add content...", "digiblocks"),
              withoutInteractiveFormatting: true
            }
          )), renderButtons());
      }
    };
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls2, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel2,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement(BlockControls, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, getBlockContent()));
  };
  var edit_default2 = CallToActionEdit;

  // blocks/call-to-action/save.js
  var { useBlockProps: useBlockProps4, RichText: RichText4 } = window.wp.blockEditor;
  var CallToActionSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      style,
      horizontalLayout,
      title,
      content,
      headingTag,
      backgroundImage,
      backgroundType,
      align,
      animation,
      buttons,
      highlightText,
      highlightType,
      highlightColor
    } = attributes;
    const blockClasses = [
      "digiblocks-cta",
      `style-${style}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses
    ].filter(Boolean).join(" ");
    const HeadingTag = headingTag || "h2";
    const renderButtons = () => {
      if (!buttons || buttons.length === 0)
        return null;
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-buttons" }, buttons.map((button) => {
        const buttonClasses = [
          "digiblocks-cta-button",
          button.isPrimary ? "is-primary" : "",
          button.isFullWidth ? "is-full-width" : ""
        ].filter(Boolean).join(" ");
        const target = button.openInNewTab ? "_blank" : void 0;
        const rel = button.openInNewTab ? "noopener noreferrer" : button.rel || void 0;
        return /* @__PURE__ */ wp.element.createElement(
          "a",
          {
            key: button.id,
            className: buttonClasses,
            href: button.url || "#",
            target,
            rel,
            "data-button-id": button.id
          },
          button.text || "Click Here"
        );
      }));
    };
    const getBlockContent = () => {
      switch (style) {
        case "split":
          return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-split-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText4.Content,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText4.Content,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content
            }
          )), renderButtons())), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-image-container" }));
        case "cover":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-background" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-overlay" }), /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText4.Content,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText4.Content,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content
            }
          )), renderButtons()));
        default:
          return /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText4.Content,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText4.Content,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content
            }
          )), renderButtons());
      }
    };
    return /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        ...useBlockProps4.save({
          className: blockClasses,
          id: anchor || null,
          "data-custom-id": id,
          "data-style": style,
          "data-background-type": backgroundType || "color",
          "data-align": align || "left",
          "data-highlight-text": highlightText || "",
          "data-highlight-type": highlightType || "none",
          "data-highlight-color": highlightColor || "#ffde59"
        })
      },
      getBlockContent()
    );
  };
  var save_default2 = CallToActionSave;

  // blocks/countdown/edit.js
  var { __: __3 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps5,
    InspectorControls: InspectorControls3,
    PanelColorSettings: PanelColorSettings3,
    BlockControls: BlockControls2,
    AlignmentToolbar: AlignmentToolbar2
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl3,
    RangeControl: RangeControl3,
    TabPanel: TabPanel3,
    ToggleControl: ToggleControl3,
    TextControl: TextControl2,
    DateTimePicker,
    Button: Button3,
    __experimentalToggleGroupControl: ToggleGroupControl3,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption3,
    BaseControl: BaseControl2
  } = window.wp.components;
  var { useState: useState3, useEffect: useEffect3, useRef: useRef3 } = window.wp.element;
  var { animations: animations3 } = digi.utils;
  var { tabIcons: tabIcons3 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl3, DimensionControl: DimensionControl3, TypographyControl: TypographyControl3, BoxShadowControl: BoxShadowControl3, CustomTabPanel: CustomTabPanel3, TabPanelBody: TabPanelBody3 } = digi.components;
  var CountdownEdit = ({ attributes, setAttributes, clientId }) => {
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
    const [localActiveDevice, setLocalActiveDevice] = useState3(window.digi.responsiveState.activeDevice);
    const [timeRemaining, setTimeRemaining] = useState3({
      days: 30,
      hours: 23,
      minutes: 59,
      seconds: 59
    });
    const [isAnimating, setIsAnimating] = useState3(false);
    const previewTimeoutRef = useRef3(null);
    const countdownIntervalRef = useRef3(null);
    useEffect3(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState3("options");
    const [activeStyleTab, setActiveStyleTab] = useState3("normal");
    useEffect3(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!endDate) {
        const oneWeekFromNow = /* @__PURE__ */ new Date();
        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
        setAttributes({ endDate: oneWeekFromNow.toISOString() });
      }
      const updateCountdown = () => {
        const now = /* @__PURE__ */ new Date();
        let targetDate = /* @__PURE__ */ new Date();
        if (endDate) {
          targetDate = new Date(endDate);
        } else {
          targetDate.setDate(targetDate.getDate() + 30);
        }
        const difference = targetDate - now;
        if (difference > 0) {
          const days = Math.floor(difference / (1e3 * 60 * 60 * 24));
          const hours = Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
          const minutes = Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60));
          const seconds = Math.floor(difference % (1e3 * 60) / 1e3);
          setTimeRemaining({
            days,
            hours,
            minutes,
            seconds
          });
        } else {
          setTimeRemaining({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          });
        }
      };
      updateCountdown();
      countdownIntervalRef.current = setInterval(updateCountdown, 1e3);
      return () => {
        if (countdownIntervalRef.current) {
          clearInterval(countdownIntervalRef.current);
        }
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, [clientId, endDate, setAttributes]);
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      setIsAnimating(true);
      const timestamp = Date.now();
      if (animations3[animation]) {
        const originalKeyframes = animations3[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
          setIsAnimating(false);
        }, 1500);
      }
    };
    useEffect3(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const boxStyleOptions = [
      { label: __3("Default", "digiblocks"), value: "default" },
      { label: __3("Filled", "digiblocks"), value: "filled" },
      { label: __3("Outlined", "digiblocks"), value: "outlined" },
      { label: __3("Pill", "digiblocks"), value: "pill" },
      { label: __3("Rounded", "digiblocks"), value: "rounded" },
      { label: __3("Circle", "digiblocks"), value: "circle" }
    ];
    const labelPositionOptions = [
      { label: __3("Bottom", "digiblocks"), value: "bottom" },
      { label: __3("Top", "digiblocks"), value: "top" },
      { label: __3("Inside", "digiblocks"), value: "inside" }
    ];
    const styleOptions = [
      { label: __3("Boxes", "digiblocks"), value: "boxes" },
      { label: __3("Simple", "digiblocks"), value: "simple" }
    ];
    const separatorTypeOptions = [
      { label: __3("Colon", "digiblocks"), value: "colon" },
      { label: __3("Hyphen", "digiblocks"), value: "hyphen" },
      { label: __3("Slash", "digiblocks"), value: "slash" },
      { label: __3("Dot", "digiblocks"), value: "dot" }
    ];
    const animationOptions = [
      { label: __3("None", "digiblocks"), value: "none" },
      ...Object.keys(animations3).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __3("Options", "digiblocks"),
        icon: tabIcons3.optionsIcon
      },
      {
        name: "style",
        title: __3("Style", "digiblocks"),
        icon: tabIcons3.styleIcon
      },
      {
        name: "advanced",
        title: __3("Advanced", "digiblocks"),
        icon: tabIcons3.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __3("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __3("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const formatTime = (value) => {
      return value.toString().padStart(2, "0");
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      const blockId = id;
      const currentBoxPadding = boxPadding && boxPadding[activeDevice] ? boxPadding[activeDevice] : { top: 10, right: 10, bottom: 10, left: 10, unit: "px" };
      const currentBoxMargin = boxMargin && boxMargin[activeDevice] ? boxMargin[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
      const currentBoxBorderRadius = boxBorderRadius && boxBorderRadius[activeDevice] ? boxBorderRadius[activeDevice] : { top: 4, right: 4, bottom: 4, left: 4, unit: "px" };
      const currentBoxBorderWidth = boxBorderWidth && boxBorderWidth[activeDevice] ? boxBorderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
      const currentItemSpacing = itemSpacing && itemSpacing[activeDevice] !== void 0 ? itemSpacing[activeDevice] : 20;
      const currentLabelSpacing = labelSpacing && labelSpacing[activeDevice] !== void 0 ? labelSpacing[activeDevice] : 5;
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
        if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
          contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || "em"};`;
        }
        if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
          contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || "px"};`;
        }
      }
      let boxShadowCSS = "";
      if (showBoxShadow && boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (showBoxShadow && boxShadowHover && boxShadowHover.enable) {
        const inset = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      let specificStyles = "";
      if (style === "boxes") {
        switch (boxStyle) {
          case "filled":
            specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor || "#333333"};
                            border-radius: ${currentBoxBorderRadius.top}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.right}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.bottom}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.left}${currentBoxBorderRadius.unit};
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor || "#333333"};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "outlined":
            specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${digitColor || "#333333"};
                            border: ${currentBoxBorderWidth.top}${currentBoxBorderWidth.unit} solid ${boxBorderColor || "#e0e0e0"};
                            border-radius: ${currentBoxBorderRadius.top}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.right}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.bottom}${currentBoxBorderRadius.unit} ${currentBoxBorderRadius.left}${currentBoxBorderRadius.unit};
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || "transparent"};
                            color: ${digitHoverColor || digitColor || "#333333"};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "pill":
            specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor || "#333333"};
                            border-radius: 50px;
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor || "#333333"};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "rounded":
            specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor || "#333333"};
                            border-radius: 8px;
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor || "#333333"};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "circle":
            specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor || "#333333"};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: ${currentBoxPadding.top}${currentBoxPadding.unit} ${currentBoxPadding.right}${currentBoxPadding.unit} ${currentBoxPadding.bottom}${currentBoxPadding.unit} ${currentBoxPadding.left}${currentBoxPadding.unit};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor || "#333333"};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "default":
          default:
            specificStyles = `
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                            color: ${digitColor || "#333333"};
                            ${boxShadowCSS}
                        }
                        [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${digitHoverColor || digitColor || "#333333"};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
        }
      } else {
        specificStyles = `
                [data-custom-id="${blockId}"] .digiblocks-countdown-item-inner {
                    color: ${digitColor || "#333333"};
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${digitHoverColor || digitColor || "#333333"};
                }
            `;
      }
      let separatorStyles = "";
      if (displaySeparator) {
        let separatorContent = "";
        switch (separatorType) {
          case "colon":
            separatorContent = ":";
            break;
          case "hyphen":
            separatorContent = "-";
            break;
          case "slash":
            separatorContent = "/";
            break;
          case "dot":
            separatorContent = "\u2022";
            break;
          default:
            separatorContent = ":";
            break;
        }
        separatorStyles = `
                [data-custom-id="${blockId}"] .digiblocks-countdown-separator {
                    color: ${separatorColor || "#333333"};
                    font-size: ${titleTypography && titleTypography.fontSize && titleTypography.fontSize[activeDevice] ? titleTypography.fontSize[activeDevice] + (titleTypography.fontSizeUnit || "px") : "2rem"};
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-separator::before {
                    content: "${separatorContent}";
                }
                [data-custom-id="${blockId}"]:hover .digiblocks-countdown-separator {
                    color: ${separatorHoverColor || separatorColor || "#333333"};
                }
            `;
      }
      let equalWidthStyles = "";
      if (style === "boxes" && boxesEqual) {
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
      let labelPositionStyles = "";
      if (labelPosition === "top") {
        labelPositionStyles = `
                [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-label {
                    margin-bottom: ${currentLabelSpacing}px;
                    margin-top: 0;
                }
            `;
      } else if (labelPosition === "inside") {
        if (style === "boxes") {
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
        labelPositionStyles = `
                [data-custom-id="${blockId}"] .digiblocks-countdown-item {
                    flex-direction: column;
                }
                [data-custom-id="${blockId}"] .digiblocks-countdown-label {
                    margin-top: ${currentLabelSpacing}px;
                }
            `;
      }
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
                justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
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
                color: ${labelColor || "#666666"};
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"]:hover .digiblocks-countdown-label {
                color: ${labelHoverColor || labelColor || "#666666"};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-countdown-expired {
                ${titleTypographyCSS}
                color: ${digitColor || "#333333"};
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
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl3,
            {
              label: __3("Style", "digiblocks"),
              value: style,
              onChange: (value) => setAttributes({ style: value }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            styleOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption3,
              {
                key: option.value,
                value: option.value,
                label: option.label
              }
            ))
          ), style === "boxes" && /* @__PURE__ */ wp.element.createElement(
            SelectControl3,
            {
              label: __3("Box Style", "digiblocks"),
              value: boxStyle,
              options: boxStyleOptions,
              onChange: (value) => setAttributes({ boxStyle: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), style === "boxes" && /* @__PURE__ */ wp.element.createElement(
            ToggleControl3,
            {
              label: __3("Equal Width Boxes", "digiblocks"),
              checked: !!boxesEqual,
              onChange: () => setAttributes({ boxesEqual: !boxesEqual }),
              help: __3("Make all countdown boxes the same width", "digiblocks"),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            SelectControl3,
            {
              label: __3("Label Position", "digiblocks"),
              value: labelPosition,
              options: labelPositionOptions,
              onChange: (value) => setAttributes({ labelPosition: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl3,
            {
              label: __3("Show Separators", "digiblocks"),
              checked: !!displaySeparator,
              onChange: () => setAttributes({ displaySeparator: !displaySeparator }),
              __nextHasNoMarginBottom: true
            }
          ), displaySeparator && /* @__PURE__ */ wp.element.createElement(
            SelectControl3,
            {
              label: __3("Separator Type", "digiblocks"),
              value: separatorType,
              options: separatorTypeOptions,
              onChange: (value) => setAttributes({ separatorType: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            BaseControl2,
            {
              label: __3("End Date & Time", "digiblocks"),
              id: "countdown-date-time",
              __nextHasNoMarginBottom: true
            },
            /* @__PURE__ */ wp.element.createElement(
              DateTimePicker,
              {
                currentDate: endDate,
                onChange: (date) => setAttributes({ endDate: date }),
                is12Hour: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl2,
            {
              label: __3("Expired Message", "digiblocks"),
              value: expiredMessage,
              onChange: (value) => setAttributes({ expiredMessage: value }),
              placeholder: __3("Time's up!", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl2,
            {
              label: __3("Days Label", "digiblocks"),
              value: daysLabel,
              onChange: (value) => setAttributes({ daysLabel: value }),
              placeholder: __3("Days", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl2,
            {
              label: __3("Hours Label", "digiblocks"),
              value: hoursLabel,
              onChange: (value) => setAttributes({ hoursLabel: value }),
              placeholder: __3("Hours", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl2,
            {
              label: __3("Minutes Label", "digiblocks"),
              value: minutesLabel,
              onChange: (value) => setAttributes({ minutesLabel: value }),
              placeholder: __3("Minutes", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl2,
            {
              label: __3("Seconds Label", "digiblocks"),
              value: secondsLabel,
              onChange: (value) => setAttributes({ secondsLabel: value }),
              placeholder: __3("Seconds", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl3,
            {
              label: __3("Show Days", "digiblocks"),
              checked: showDays,
              onChange: () => setAttributes({ showDays: !showDays }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl3,
            {
              label: __3("Show Hours", "digiblocks"),
              checked: showHours,
              onChange: () => setAttributes({ showHours: !showHours }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl3,
            {
              label: __3("Show Minutes", "digiblocks"),
              checked: showMinutes,
              onChange: () => setAttributes({ showMinutes: !showMinutes }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl3,
            {
              label: __3("Show Seconds", "digiblocks"),
              checked: showSeconds,
              onChange: () => setAttributes({ showSeconds: !showSeconds }),
              __nextHasNoMarginBottom: true
            }
          )));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody3,
            {
              tab: "style",
              name: "colors",
              title: __3("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel3,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => {
                if (tab.name === "normal") {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings3,
                    {
                      title: __3("Normal Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: digitColor,
                          onChange: (value) => setAttributes({ digitColor: value }),
                          label: __3("Digit Color", "digiblocks")
                        },
                        ...style === "boxes" ? [
                          {
                            value: digitBackground,
                            onChange: (value) => setAttributes({ digitBackground: value }),
                            label: __3("Box Background", "digiblocks")
                          }
                        ] : [],
                        {
                          value: labelColor,
                          onChange: (value) => setAttributes({ labelColor: value }),
                          label: __3("Label Color", "digiblocks")
                        },
                        ...displaySeparator ? [
                          {
                            value: separatorColor,
                            onChange: (value) => setAttributes({ separatorColor: value }),
                            label: __3("Separator Color", "digiblocks")
                          }
                        ] : [],
                        ...style === "boxes" && boxStyle === "outlined" ? [
                          {
                            value: boxBorderColor,
                            onChange: (value) => setAttributes({ boxBorderColor: value }),
                            label: __3("Border Color", "digiblocks")
                          }
                        ] : []
                      ]
                    }
                  );
                } else {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings3,
                    {
                      title: __3("Hover Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: digitHoverColor,
                          onChange: (value) => setAttributes({ digitHoverColor: value }),
                          label: __3("Digit Color", "digiblocks")
                        },
                        ...style === "boxes" ? [
                          {
                            value: digitHoverBackground,
                            onChange: (value) => setAttributes({ digitHoverBackground: value }),
                            label: __3("Box Background", "digiblocks")
                          }
                        ] : [],
                        {
                          value: labelHoverColor,
                          onChange: (value) => setAttributes({ labelHoverColor: value }),
                          label: __3("Label Color", "digiblocks")
                        },
                        ...displaySeparator ? [
                          {
                            value: separatorHoverColor,
                            onChange: (value) => setAttributes({ separatorHoverColor: value }),
                            label: __3("Separator Color", "digiblocks")
                          }
                        ] : []
                      ]
                    }
                  );
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody3,
            {
              tab: "style",
              name: "typography",
              title: __3("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl3,
              {
                label: __3("Digit Typography", "digiblocks"),
                value: titleTypography,
                onChange: (value) => setAttributes({ titleTypography: value }),
                defaults: {
                  fontSize: { desktop: 32, tablet: 28, mobile: 24 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                  lineHeightUnit: "em",
                  fontWeight: "600"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl3,
              {
                label: __3("Label Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({ contentTypography: value }),
                defaults: {
                  fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.4 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), style === "boxes" && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody3,
            {
              tab: "style",
              name: "boxStyles",
              title: __3("Box Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl3,
              {
                label: __3("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl3,
                {
                  values: boxBorderRadius && boxBorderRadius[localActiveDevice] ? boxBorderRadius[localActiveDevice] : {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    boxBorderRadius: {
                      ...boxBorderRadius,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ),
            boxStyle === "outlined" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl3,
              {
                label: __3("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl3,
                {
                  values: boxBorderWidth && boxBorderWidth[localActiveDevice] ? boxBorderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    boxBorderWidth: {
                      ...boxBorderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl3,
              {
                label: __3("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl3,
                {
                  values: boxPadding && boxPadding[localActiveDevice] ? boxPadding[localActiveDevice] : {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    boxPadding: {
                      ...boxPadding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl3,
              {
                label: __3("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl3,
                {
                  values: boxMargin && boxMargin[localActiveDevice] ? boxMargin[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    boxMargin: {
                      ...boxMargin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl3,
              {
                label: __3("Box Shadow", "digiblocks"),
                checked: !!showBoxShadow,
                onChange: () => setAttributes({ showBoxShadow: !showBoxShadow }),
                __nextHasNoMarginBottom: true
              }
            ),
            showBoxShadow && /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl3,
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
            TabPanelBody3,
            {
              tab: "style",
              name: "spacing",
              title: __3("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl3,
              {
                label: __3("Items Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl3,
                {
                  value: itemSpacing && itemSpacing[localActiveDevice] !== void 0 ? itemSpacing[localActiveDevice] : 20,
                  onChange: (value) => setAttributes({
                    itemSpacing: {
                      ...itemSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 100,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl3,
              {
                label: __3("Label Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl3,
                {
                  value: labelSpacing && labelSpacing[localActiveDevice] !== void 0 ? labelSpacing[localActiveDevice] : 5,
                  onChange: (value) => setAttributes({
                    labelSpacing: {
                      ...labelSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 50,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody3,
            {
              tab: "advanced",
              name: "animation",
              title: __3("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl3,
              {
                label: __3("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button3,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                disabled: isAnimating,
                style: { width: "100%" }
              },
              isAnimating ? __3("Animating...", "digiblocks") : __3("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody3,
            {
              tab: "advanced",
              name: "additional",
              title: __3("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __3("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __3(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __3("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __3("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __3("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps5({
      className: `digiblocks-countdown ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    if (!showDays && !showHours && !showMinutes && !showSeconds) {
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls3, null, /* @__PURE__ */ wp.element.createElement(
        CustomTabPanel3,
        {
          tabs: tabList,
          activeTab,
          onSelect: setActiveTab
        },
        renderTabContent()
      )), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps, style: { textAlign: align } }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-error" }, __3("Please enable at least one time unit in the block settings.", "digiblocks"))));
    }
    const renderCountdownItems = () => {
      const {
        days,
        hours,
        minutes,
        seconds
      } = timeRemaining;
      const items = [];
      if (showDays) {
        items.push(
          /* @__PURE__ */ wp.element.createElement("div", { key: "days", className: "digiblocks-countdown-item digiblocks-countdown-days" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(days)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || __3("Days", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(days))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || __3("Days", "digiblocks")))
        );
        if (displaySeparator && (showHours || showMinutes || showSeconds)) {
          items.push(
            /* @__PURE__ */ wp.element.createElement("div", { key: "days-separator", className: "digiblocks-countdown-separator" })
          );
        }
      }
      if (showHours) {
        items.push(
          /* @__PURE__ */ wp.element.createElement("div", { key: "hours", className: "digiblocks-countdown-item digiblocks-countdown-hours" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(hours)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || __3("Hours", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(hours))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || __3("Hours", "digiblocks")))
        );
        if (displaySeparator && (showMinutes || showSeconds)) {
          items.push(
            /* @__PURE__ */ wp.element.createElement("div", { key: "hours-separator", className: "digiblocks-countdown-separator" })
          );
        }
      }
      if (showMinutes) {
        items.push(
          /* @__PURE__ */ wp.element.createElement("div", { key: "minutes", className: "digiblocks-countdown-item digiblocks-countdown-minutes" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(minutes)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || __3("Minutes", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(minutes))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || __3("Minutes", "digiblocks")))
        );
        if (displaySeparator && showSeconds) {
          items.push(
            /* @__PURE__ */ wp.element.createElement("div", { key: "minutes-separator", className: "digiblocks-countdown-separator" })
          );
        }
      }
      if (showSeconds) {
        items.push(
          /* @__PURE__ */ wp.element.createElement("div", { key: "seconds", className: "digiblocks-countdown-item digiblocks-countdown-seconds" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(seconds)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || __3("Seconds", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(seconds))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || __3("Seconds", "digiblocks")))
        );
      }
      return items;
    };
    const isCountdownExpired = timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0;
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls2, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar2,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls3, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel3,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, isCountdownExpired ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-expired" }, expiredMessage || __3("Time's up!", "digiblocks")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-container" }, renderCountdownItems())));
  };
  var edit_default3 = CountdownEdit;

  // blocks/countdown/save.js
  var { useBlockProps: useBlockProps6 } = window.wp.blockEditor;
  var CountdownSave = ({ attributes }) => {
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
      displaySeparator,
      separatorType,
      expiredMessage,
      animation,
      align,
      style,
      boxesEqual,
      labelPosition
    } = attributes;
    const blockClasses = [
      "digiblocks-countdown",
      `align-${align}`,
      animation !== "none" ? `animate-${animation}` : "",
      style === "boxes" ? "digiblocks-countdown-boxes" : "digiblocks-countdown-simple",
      boxesEqual ? "digiblocks-countdown-equal-width" : "",
      `digiblocks-countdown-labels-${labelPosition}`,
      displaySeparator ? "digiblocks-countdown-has-separators" : "",
      displaySeparator ? `digiblocks-countdown-separator-${separatorType}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps6.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id,
      "data-end-date": endDate || "",
      "data-show-days": showDays ? "true" : "false",
      "data-show-hours": showHours ? "true" : "false",
      "data-show-minutes": showMinutes ? "true" : "false",
      "data-show-seconds": showSeconds ? "true" : "false",
      "data-days-label": daysLabel || "Days",
      "data-hours-label": hoursLabel || "Hours",
      "data-minutes-label": minutesLabel || "Minutes",
      "data-seconds-label": secondsLabel || "Seconds",
      "data-expired-message": expiredMessage || "Time's up!",
      "data-label-position": labelPosition || "bottom"
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-container" }, showDays && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-days" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || "Days")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || "Days")), displaySeparator && (showHours || showMinutes || showSeconds) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-separator" })), showHours && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-hours" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || "Hours")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || "Hours")), displaySeparator && (showMinutes || showSeconds) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-separator" })), showMinutes && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-minutes" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || "Minutes")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || "Minutes")), displaySeparator && showSeconds && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-separator" })), showSeconds && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-seconds" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || "Seconds")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || "Seconds"))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-expired", style: { display: "none" } }, expiredMessage || "Time's up!"));
  };
  var save_default3 = CountdownSave;

  // blocks/counter/edit.js
  var { __: __4 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps7,
    InspectorControls: InspectorControls4,
    PanelColorSettings: PanelColorSettings4,
    BlockControls: BlockControls3,
    AlignmentToolbar: AlignmentToolbar3
  } = window.wp.blockEditor;
  var {
    TabPanel: TabPanel4,
    SelectControl: SelectControl4,
    RangeControl: RangeControl4,
    TextControl: TextControl3,
    ToggleControl: ToggleControl4,
    Button: Button4,
    __experimentalToggleGroupControl: ToggleGroupControl4,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption4
  } = window.wp.components;
  var { useState: useState4, useEffect: useEffect4, useRef: useRef4 } = window.wp.element;
  var { animations: animations4 } = digi.utils;
  var { tabIcons: tabIcons4 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl4, DimensionControl: DimensionControl4, TypographyControl: TypographyControl4, BoxShadowControl: BoxShadowControl4, CustomTabPanel: CustomTabPanel4, TabPanelBody: TabPanelBody4 } = digi.components;
  var CounterEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      iconValue,
      startNumber,
      endNumber,
      title,
      description,
      counterColor,
      counterHoverColor,
      titleColor,
      titleHoverColor,
      textColor,
      textHoverColor,
      backgroundColor,
      backgroundHoverColor,
      iconColor,
      iconHoverColor,
      iconBackgroundColor,
      iconHoverBackgroundColor,
      iconSize,
      iconPadding,
      iconMargin,
      iconBorderStyle,
      iconBorderWidth,
      iconBorderRadius,
      iconBorderColor,
      iconHoverBorderColor,
      typography,
      titleTypography,
      contentTypography,
      padding,
      margin,
      align,
      animation,
      boxShadow,
      boxShadowHover,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      hoverEffect,
      animationDuration,
      animationDelay,
      thousandSeparator,
      decimalPlaces,
      decimalSeparator,
      layoutStyle,
      verticalSpacing,
      counterPrefix,
      counterPrefixSpacing,
      counterSuffix,
      counterSuffixSpacing,
      numberWithCommas,
      displayIcon
    } = attributes;
    const [localActiveDevice, setLocalActiveDevice] = useState4(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState4(false);
    const previewTimeoutRef = useRef4(null);
    const [counterValue, setCounterValue] = useState4(startNumber || 0);
    const [isCounterAnimating, setIsCounterAnimating] = useState4(false);
    const [activeColorTab, setActiveColorTab] = useState4("normal");
    useEffect4(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState4("options");
    useEffect4(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!iconMargin) {
        setAttributes({
          iconMargin: {
            desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
            tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
            mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
          }
        });
      }
    }, [clientId, iconMargin, setAttributes]);
    useEffect4(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    const [componentsLoaded, setComponentsLoaded] = useState4(false);
    useEffect4(() => {
      const checkComponents = () => {
        if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
          setComponentsLoaded(true);
          return true;
        }
        return false;
      };
      if (!checkComponents()) {
        const timeout = setTimeout(() => {
          if (checkComponents()) {
            clearTimeout(timeout);
          }
        }, 500);
        return () => clearTimeout(timeout);
      }
    }, []);
    const setIconValue = (newIcon) => {
      setAttributes({ iconValue: newIcon });
    };
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations4[animation]) {
        const originalKeyframes = animations4[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect4(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const animateCounter = () => {
      if (isCounterAnimating)
        return;
      const startValue = parseInt(startNumber) || 0;
      const endValue = parseInt(endNumber) || 0;
      const duration = animationDuration || 2e3;
      const steps = 50;
      const stepDuration = duration / steps;
      const increment = (endValue - startValue) / steps;
      setIsCounterAnimating(true);
      setCounterValue(startValue);
      let currentStep = 0;
      const intervalId = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCounterValue(endValue);
          clearInterval(intervalId);
          setIsCounterAnimating(false);
        } else {
          const newValue = startValue + increment * currentStep;
          setCounterValue(Math.round(newValue));
        }
      }, stepDuration);
      return () => clearInterval(intervalId);
    };
    const formatNumber = (number) => {
      if (typeof number !== "number") {
        number = parseFloat(number) || 0;
      }
      let formattedNumber = number;
      if (decimalPlaces && decimalPlaces > 0) {
        formattedNumber = number.toFixed(decimalPlaces);
      } else {
        formattedNumber = Math.round(number);
      }
      let numberStr = formattedNumber.toString();
      if (decimalPlaces > 0 && decimalSeparator && decimalSeparator !== ".") {
        numberStr = numberStr.replace(".", decimalSeparator);
      }
      if (numberWithCommas && thousandSeparator) {
        let parts = numberStr.split(decimalSeparator || ".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        numberStr = parts.join(decimalSeparator || ".");
      }
      return numberStr;
    };
    const borderStyleOptions = [
      { label: __4("Default", "digiblocks"), value: "default" },
      { label: __4("None", "digiblocks"), value: "none" },
      { label: __4("Solid", "digiblocks"), value: "solid" },
      { label: __4("Dotted", "digiblocks"), value: "dotted" },
      { label: __4("Dashed", "digiblocks"), value: "dashed" },
      { label: __4("Double", "digiblocks"), value: "double" },
      { label: __4("Groove", "digiblocks"), value: "groove" },
      { label: __4("Inset", "digiblocks"), value: "inset" },
      { label: __4("Outset", "digiblocks"), value: "outset" },
      { label: __4("Ridge", "digiblocks"), value: "ridge" }
    ];
    const hoverEffectOptions = [
      { label: __4("None", "digiblocks"), value: "none" },
      { label: __4("Lift", "digiblocks"), value: "lift" },
      { label: __4("Scale", "digiblocks"), value: "scale" },
      { label: __4("Glow", "digiblocks"), value: "glow" }
    ];
    const animationOptions = [
      { label: __4("None", "digiblocks"), value: "none" },
      ...Object.keys(animations4).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const layoutOptions = [
      { label: __4("Stacked", "digiblocks"), value: "stacked" },
      { label: __4("Inline", "digiblocks"), value: "inline" },
      { label: __4("Centered", "digiblocks"), value: "centered" }
    ];
    const tabList = [
      {
        name: "options",
        title: __4("Options", "digiblocks"),
        icon: tabIcons4.optionsIcon
      },
      {
        name: "style",
        title: __4("Style", "digiblocks"),
        icon: tabIcons4.styleIcon
      },
      {
        name: "advanced",
        title: __4("Advanced", "digiblocks"),
        icon: tabIcons4.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __4("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __4("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
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
      let typographyCSS = "";
      if (typography) {
        if (typography.fontFamily) {
          typographyCSS += `font-family: ${typography.fontFamily};`;
        }
        if (typography.fontSize && typography.fontSize[activeDevice]) {
          typographyCSS += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || "px"};`;
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
          typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || "em"};`;
        }
        if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
          typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || "px"};`;
        }
      }
      let iconCSS = "";
      let iconHoverCSS = "";
      let iconMarginCSS = "";
      if (displayIcon && iconValue && iconValue.svg) {
        if (iconBackgroundColor) {
          iconCSS += `background-color: ${iconBackgroundColor};`;
        }
        if (iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none") {
          const currentIconBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] ? iconBorderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
          const currentIconBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] ? iconBorderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
          iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || "#e0e0e0"};
                    border-width: ${currentIconBorderWidth.top}${currentIconBorderWidth.unit} ${currentIconBorderWidth.right}${currentIconBorderWidth.unit} ${currentIconBorderWidth.bottom}${currentIconBorderWidth.unit} ${currentIconBorderWidth.left}${currentIconBorderWidth.unit};
                    border-radius: ${currentIconBorderRadius.top}${currentIconBorderRadius.unit} ${currentIconBorderRadius.right}${currentIconBorderRadius.unit} ${currentIconBorderRadius.bottom}${currentIconBorderRadius.unit} ${currentIconBorderRadius.left}${currentIconBorderRadius.unit};
                `;
        }
        if (iconPadding && iconPadding[activeDevice]) {
          iconCSS += `padding: ${iconPadding[activeDevice].top}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].right}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].bottom}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].left}${iconPadding[activeDevice].unit};`;
        }
        if (iconHoverColor) {
          iconHoverCSS += `fill: ${iconHoverColor} !important; color: ${iconHoverColor} !important;`;
        }
        if (iconHoverBackgroundColor) {
          iconHoverCSS += `background-color: ${iconHoverBackgroundColor};`;
        }
        if (iconHoverBorderColor) {
          iconHoverCSS += `border-color: ${iconHoverBorderColor};`;
        }
        if (iconMargin && iconMargin[activeDevice]) {
          iconMarginCSS = `${iconMargin[activeDevice].top}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].right}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].bottom}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].left}${iconMargin[activeDevice].unit}`;
        } else {
          const defaultBottom = activeDevice === "desktop" ? 20 : activeDevice === "tablet" ? 15 : 10;
          iconMarginCSS = `0px 0px ${defaultBottom}px 0px`;
        }
      }
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      if (hoverEffect === "lift") {
        hoverCSS += "transform: translateY(-10px);";
      } else if (hoverEffect === "scale") {
        hoverCSS += "transform: scale(1.05);";
      } else if (hoverEffect === "glow") {
        hoverCSS += "filter: brightness(1.1);";
      }
      return `
            /* Main block styles */
            [data-custom-id="${blockId}"] {
                background-color: ${backgroundColor || "transparent"};
                ${boxShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                transition: all 0.3s ease;
                text-align: ${align || "center"};
            }
            
            /* Hover effects */
            [data-custom-id="${blockId}"]:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${hoverCSS}
            }
            
            /* Layout styles */
            [data-custom-id="${blockId}"] .digiblocks-counter-inner {
                display: flex;
                flex-direction: ${layoutStyle === "inline" ? "row" : "column"};
                align-items: ${layoutStyle === "inline" ? "center" : align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"};
                justify-content: ${layoutStyle === "inline" ? "flex-start" : "center"};
                gap: ${verticalSpacing || 15}px;
                ${layoutStyle === "centered" ? "text-align: center;" : ""}
            }
            
            ${displayIcon && iconValue && iconValue.svg ? `
            /* Icon styles */
            [data-custom-id="${blockId}"] .digiblocks-counter-icon {
                margin: ${iconMarginCSS};
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${iconCSS}
                transition: all 0.3s ease;
            }

            [data-custom-id="${blockId}"] .digiblocks-counter-icon span {
                display: flex;
            }

            [data-custom-id="${blockId}"] .digiblocks-counter-icon svg {
                width: ${iconSize && iconSize[activeDevice] ? iconSize[activeDevice] : 32}px;
                height: 100%;
                fill: ${iconColor || "inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-counter-icon {
                ${iconHoverCSS}
            }
            
            [data-custom-id="${blockId}"]:hover .digiblocks-counter-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ""}
            }
            ` : ""}
            
            /* Counter styles */
            [data-custom-id="${blockId}"] .digiblocks-counter-number-wrapper {
                display: flex;
                align-items: center;
                justify-content: ${align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"};
                margin-bottom: 10px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-counter-prefix {
                margin-right: ${counterPrefixSpacing || 5}px;
                color: ${counterColor || "#333333"};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-counter-suffix {
                margin-left: ${counterSuffixSpacing || 5}px;
                color: ${counterColor || "#333333"};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-counter-number {
                color: ${counterColor || "#333333"};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Counter hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-counter-number,
            [data-custom-id="${blockId}"]:hover .digiblocks-counter-prefix,
            [data-custom-id="${blockId}"]:hover .digiblocks-counter-suffix {
                ${counterHoverColor ? `color: ${counterHoverColor};` : ""}
            }
            
            /* Title styles */
            [data-custom-id="${blockId}"] .digiblocks-counter-title {
                color: ${titleColor || "inherit"};
                margin-bottom: 10px;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-counter-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            /* Content styles */
            [data-custom-id="${blockId}"] .digiblocks-counter-description {
                color: ${textColor || "inherit"};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-counter-description {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
            }
        `;
    };
    const FontAwesomeControl3 = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const renderIcon = () => {
      if (!displayIcon || !iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-icon" }, /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: iconValue.svg
          }
        }
      ));
    };
    const renderColorTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Counter Colors", "digiblocks"),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: counterColor,
                onChange: (value) => setAttributes({ counterColor: value }),
                label: __4("Counter Color", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Content Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __4("Title Color", "digiblocks")
              },
              {
                value: textColor,
                onChange: (value) => setAttributes({ textColor: value }),
                label: __4("Description Color", "digiblocks")
              }
            ]
          }
        ), displayIcon && /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Icon Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconColor,
                onChange: (value) => setAttributes({ iconColor: value }),
                label: __4("Icon Color", "digiblocks")
              },
              {
                value: iconBackgroundColor,
                onChange: (value) => setAttributes({ iconBackgroundColor: value }),
                label: __4("Icon Background", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Block Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({ backgroundColor: value }),
                label: __4("Background Color", "digiblocks")
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Counter Hover Colors", "digiblocks"),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: counterHoverColor,
                onChange: (value) => setAttributes({ counterHoverColor: value }),
                label: __4("Counter Hover Color", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Content Hover Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleHoverColor,
                onChange: (value) => setAttributes({ titleHoverColor: value }),
                label: __4("Title Hover Color", "digiblocks")
              },
              {
                value: textHoverColor,
                onChange: (value) => setAttributes({ textHoverColor: value }),
                label: __4("Description Hover Color", "digiblocks")
              }
            ]
          }
        ), displayIcon && /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Icon Hover Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconHoverColor,
                onChange: (value) => setAttributes({ iconHoverColor: value }),
                label: __4("Icon Hover Color", "digiblocks")
              },
              {
                value: iconHoverBackgroundColor,
                onChange: (value) => setAttributes({ iconHoverBackgroundColor: value }),
                label: __4("Icon Hover Background", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings4,
          {
            title: __4("Block Hover Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: backgroundHoverColor,
                onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                label: __4("Background Hover Color", "digiblocks")
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            ToggleControl4,
            {
              label: __4("Display Icon", "digiblocks"),
              checked: displayIcon,
              onChange: (value) => setAttributes({ displayIcon: value })
            }
          ), displayIcon && /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "2rem" } }, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __4("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
            FontAwesomeControl3,
            {
              label: __4("Select Icon", "digiblocks"),
              value: iconValue,
              onChange: setIconValue
            }
          ), iconValue && componentsLoaded && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px", padding: "10px", background: "#f0f0f1", borderRadius: "3px" } }, /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __4("Selected Icon:", "digiblocks")), " ", iconValue.name), /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __4("Style:", "digiblocks")), " ", iconValue.style), iconValue.categories && iconValue.categories.length > 0 && /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __4("Categories:", "digiblocks")), " ", iconValue.categories.join(", "))))), /* @__PURE__ */ wp.element.createElement(
            SelectControl4,
            {
              label: __4("Layout Style", "digiblocks"),
              value: layoutStyle || "stacked",
              options: layoutOptions,
              onChange: (value) => setAttributes({ layoutStyle: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RangeControl4,
            {
              label: __4("Spacing", "digiblocks"),
              value: verticalSpacing || 15,
              onChange: (value) => setAttributes({ verticalSpacing: value }),
              min: 0,
              max: 100,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Starting Number", "digiblocks"),
              type: "number",
              value: startNumber,
              onChange: (value) => setAttributes({ startNumber: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Ending Number", "digiblocks"),
              type: "number",
              value: endNumber,
              onChange: (value) => setAttributes({ endNumber: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Counter Prefix", "digiblocks"),
              value: counterPrefix || "",
              onChange: (value) => setAttributes({ counterPrefix: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), counterPrefix && /* @__PURE__ */ wp.element.createElement(
            RangeControl4,
            {
              label: __4("Prefix Spacing", "digiblocks"),
              value: counterPrefixSpacing || 5,
              onChange: (value) => setAttributes({ counterPrefixSpacing: value }),
              min: 0,
              max: 30,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Counter Suffix", "digiblocks"),
              value: counterSuffix || "",
              onChange: (value) => setAttributes({ counterSuffix: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), counterSuffix && /* @__PURE__ */ wp.element.createElement(
            RangeControl4,
            {
              label: __4("Suffix Spacing", "digiblocks"),
              value: counterSuffixSpacing || 5,
              onChange: (value) => setAttributes({ counterSuffixSpacing: value }),
              min: 0,
              max: 30,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Title", "digiblocks"),
              value: title || "",
              onChange: (value) => setAttributes({ title: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Description", "digiblocks"),
              value: description || "",
              onChange: (value) => setAttributes({ description: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl4,
            {
              label: __4("Use Thousand Separator", "digiblocks"),
              checked: numberWithCommas,
              onChange: (value) => setAttributes({ numberWithCommas: value })
            }
          ), numberWithCommas && /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Thousand Separator", "digiblocks"),
              value: thousandSeparator || ",",
              onChange: (value) => setAttributes({ thousandSeparator: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RangeControl4,
            {
              label: __4("Decimal Places", "digiblocks"),
              value: decimalPlaces || 0,
              onChange: (value) => setAttributes({ decimalPlaces: value }),
              min: 0,
              max: 10,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), decimalPlaces > 0 && /* @__PURE__ */ wp.element.createElement(
            TextControl3,
            {
              label: __4("Decimal Separator", "digiblocks"),
              value: decimalSeparator || ".",
              onChange: (value) => setAttributes({ decimalSeparator: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
            Button4,
            {
              isPrimary: true,
              onClick: animateCounter,
              disabled: isCounterAnimating
            },
            __4("Preview Counter Animation", "digiblocks")
          ))));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody4,
            {
              tab: "style",
              name: "colors",
              title: __4("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel4,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList,
                onSelect: (tab) => setActiveColorTab(tab.name)
              },
              (tab) => renderColorTabContent(tab.name)
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody4,
            {
              tab: "style",
              name: "typography",
              title: __4("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl4,
              {
                label: __4("Counter Typography", "digiblocks"),
                value: typography || {},
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: 48, tablet: 42, mobile: 36 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl4,
              {
                label: __4("Title Typography", "digiblocks"),
                value: titleTypography || {},
                onChange: (value) => setAttributes({ titleTypography: value }),
                defaults: {
                  fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl4,
              {
                label: __4("Description Typography", "digiblocks"),
                value: contentTypography || {},
                onChange: (value) => setAttributes({ contentTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), displayIcon && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody4,
            {
              tab: "style",
              name: "icon",
              title: __4("Icon", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl4,
              {
                label: __4("Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl4,
                {
                  value: iconSize && iconSize[localActiveDevice] ? iconSize[localActiveDevice] : 32,
                  onChange: (value) => setAttributes({
                    iconSize: {
                      ...iconSize || { desktop: 32, tablet: 28, mobile: 24 },
                      [localActiveDevice]: value
                    }
                  }),
                  min: 8,
                  max: 200,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl4,
              {
                label: __4("Border Style", "digiblocks"),
                value: iconBorderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "default" && value !== "none" && (iconBorderStyle === "default" || iconBorderStyle === "none" || !iconBorderStyle)) {
                    if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                      setAttributes({
                        iconBorderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!iconBorderRadius || Object.keys(iconBorderRadius).length === 0) {
                      setAttributes({
                        iconBorderRadius: {
                          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({ iconBorderStyle: value });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings4,
              {
                title: __4("Border Colors", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: iconBorderColor,
                    onChange: (value) => setAttributes({ iconBorderColor: value }),
                    label: __4("Border Color", "digiblocks")
                  },
                  {
                    value: iconHoverBorderColor,
                    onChange: (value) => setAttributes({ iconHoverBorderColor: value }),
                    label: __4("Border Hover Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl4,
              {
                label: __4("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: iconBorderWidth && iconBorderWidth[localActiveDevice] ? iconBorderWidth[localActiveDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                  onChange: (value) => setAttributes({
                    iconBorderWidth: {
                      ...iconBorderWidth || {},
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl4,
              {
                label: __4("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: iconBorderRadius && iconBorderRadius[localActiveDevice] ? iconBorderRadius[localActiveDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                  onChange: (value) => setAttributes({
                    iconBorderRadius: {
                      ...iconBorderRadius || {},
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
              ResponsiveControl4,
              {
                label: __4("Icon Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: iconPadding && iconPadding[localActiveDevice] ? iconPadding[localActiveDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                  onChange: (value) => setAttributes({
                    iconPadding: {
                      ...iconPadding || {},
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl4,
              {
                label: __4("Icon Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: iconMargin && iconMargin[localActiveDevice] ? iconMargin[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: localActiveDevice === "desktop" ? 20 : localActiveDevice === "tablet" ? 15 : 10,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    iconMargin: {
                      ...iconMargin || {
                        desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
                        tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
                        mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
                      },
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody4,
            {
              tab: "style",
              name: "animation",
              title: __4("Counter Animation", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl4,
              {
                label: __4("Animation Duration (ms)", "digiblocks"),
                value: animationDuration || 2e3,
                onChange: (value) => setAttributes({ animationDuration: value }),
                min: 100,
                max: 1e4,
                step: 100,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              RangeControl4,
              {
                label: __4("Animation Delay (ms)", "digiblocks"),
                value: animationDelay || 0,
                onChange: (value) => setAttributes({ animationDelay: value }),
                min: 0,
                max: 1e4,
                step: 100,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody4,
            {
              tab: "style",
              name: "border",
              title: __4("Border & Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl4,
              {
                label: __4("Border Style", "digiblocks"),
                value: borderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "default" && value !== "none" && (borderStyle === "default" || borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({ borderStyle: value });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings4,
              {
                title: __4("Border Color", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
                    label: __4("Border Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl4,
              {
                label: __4("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl4,
              {
                label: __4("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
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
              SelectControl4,
              {
                label: __4("Hover Effect", "digiblocks"),
                value: hoverEffect || "none",
                options: hoverEffectOptions,
                onChange: (value) => setAttributes({ hoverEffect: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl4,
              {
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody4,
            {
              tab: "style",
              name: "spacing",
              title: __4("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl4,
              {
                label: __4("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: padding && padding[localActiveDevice] ? padding[localActiveDevice] : { top: 30, right: 30, bottom: 30, left: 30, unit: "px" },
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
              ResponsiveControl4,
              {
                label: __4("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl4,
                {
                  values: margin && margin[localActiveDevice] ? margin[localActiveDevice] : { top: 0, right: 0, bottom: 30, left: 0, unit: "px" },
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
            TabPanelBody4,
            {
              tab: "advanced",
              name: "animation",
              title: __4("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl4,
              {
                label: __4("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button4,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __4("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody4,
            {
              tab: "advanced",
              name: "additional",
              title: __4("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __4("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __4(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __4("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __4("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __4("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps7({
      className: `digiblocks-counter align-${align} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    const formattedCounter = formatNumber(counterValue);
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls3, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar3,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls4, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel4,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-inner" }, displayIcon && renderIcon(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-number-wrapper" }, counterPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-prefix" }, counterPrefix), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-number" }, formattedCounter), counterSuffix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-suffix" }, counterSuffix)), title && /* @__PURE__ */ wp.element.createElement("h3", { className: "digiblocks-counter-title" }, title), description && /* @__PURE__ */ wp.element.createElement("p", { className: "digiblocks-counter-description" }, description)))));
  };
  var edit_default4 = CounterEdit;

  // blocks/counter/save.js
  var { useBlockProps: useBlockProps8 } = window.wp.blockEditor;
  var CounterSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      iconValue,
      startNumber,
      endNumber,
      counterPrefix,
      counterSuffix,
      title,
      description,
      align,
      animation,
      layoutStyle,
      displayIcon,
      numberWithCommas,
      thousandSeparator,
      decimalPlaces,
      decimalSeparator,
      animationDuration,
      animationDelay
    } = attributes;
    const blockClasses = [
      "digiblocks-counter",
      `align-${align || "center"}`,
      `layout-${layoutStyle || "stacked"}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps8.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id,
      "data-start-value": startNumber || 0,
      "data-end-value": endNumber || 0,
      "data-animation-duration": animationDuration || 2e3,
      "data-animation-delay": animationDelay || 0,
      "data-thousand-separator": numberWithCommas ? thousandSeparator || "," : "",
      "data-decimal-places": decimalPlaces || 0,
      "data-decimal-separator": decimalSeparator || "."
    });
    const renderIcon = () => {
      if (!displayIcon || !iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: iconValue.svg } }));
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-inner" }, displayIcon && renderIcon(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-number-wrapper" }, counterPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-prefix" }, counterPrefix), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-number" }, startNumber || 0), counterSuffix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-suffix" }, counterSuffix)), title && /* @__PURE__ */ wp.element.createElement("h3", { className: "digiblocks-counter-title" }, title), description && /* @__PURE__ */ wp.element.createElement("p", { className: "digiblocks-counter-description" }, description))));
  };
  var save_default4 = CounterSave;

  // blocks/faq/edit.js
  var { __: __5 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps9,
    RichText: RichText5,
    InspectorControls: InspectorControls5,
    PanelColorSettings: PanelColorSettings5
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl5,
    RangeControl: RangeControl5,
    ToggleControl: ToggleControl5,
    Button: Button5,
    TextControl: TextControl4,
    Tooltip: Tooltip2,
    TabPanel: TabPanel5,
    __experimentalToggleGroupControl: ToggleGroupControl5,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption5
  } = window.wp.components;
  var { useState: useState5, useEffect: useEffect5, useRef: useRef5 } = window.wp.element;
  var { animations: animations5 } = digi.utils;
  var { tabIcons: tabIcons5 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl5, DimensionControl: DimensionControl5, TypographyControl: TypographyControl5, BoxShadowControl: BoxShadowControl5, CustomTabPanel: CustomTabPanel5, TabPanelBody: TabPanelBody5 } = digi.components;
  var FAQEdit = ({ attributes, setAttributes, clientId }) => {
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
      allowMultipleOpen,
      iconType,
      titleTag,
      questionPrefix,
      questionPrefixColor,
      answerPrefix,
      answerPrefixColor,
      layout,
      itemsSpacing,
      schemaEnabled,
      schemaType,
      schemaName
    } = attributes;
    const [activeTab, setActiveTab] = useState5("options");
    const [localActiveDevice, setLocalActiveDevice] = useState5(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState5(false);
    const previewTimeoutRef = useRef5(null);
    useEffect5(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect5(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
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
    useEffect5(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations5[animation]) {
        const originalKeyframes = animations5[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect5(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const borderStyleOptions = [
      { label: __5("Default", "digiblocks"), value: "default" },
      { label: __5("None", "digiblocks"), value: "none" },
      { label: __5("Solid", "digiblocks"), value: "solid" },
      { label: __5("Dotted", "digiblocks"), value: "dotted" },
      { label: __5("Dashed", "digiblocks"), value: "dashed" },
      { label: __5("Double", "digiblocks"), value: "double" },
      { label: __5("Groove", "digiblocks"), value: "groove" },
      { label: __5("Inset", "digiblocks"), value: "inset" },
      { label: __5("Outset", "digiblocks"), value: "outset" },
      { label: __5("Ridge", "digiblocks"), value: "ridge" }
    ];
    const animationOptions = [
      { label: __5("None", "digiblocks"), value: "none" },
      ...Object.keys(animations5).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const iconTypeOptions = [
      { label: __5("Plus/Minus", "digiblocks"), value: "plusMinus" },
      { label: __5("Arrow", "digiblocks"), value: "arrow" },
      { label: __5("Chevron", "digiblocks"), value: "chevron" },
      { label: __5("Triangle", "digiblocks"), value: "triangle" },
      { label: __5("Circle Plus/Minus", "digiblocks"), value: "circlePlusMinus" }
    ];
    const iconPositionOptions = [
      { label: __5("Right", "digiblocks"), value: "right" },
      { label: __5("Left", "digiblocks"), value: "left" }
    ];
    const titleTagOptions = [
      { label: __5("H2", "digiblocks"), value: "h2" },
      { label: __5("H3", "digiblocks"), value: "h3" },
      { label: __5("H4", "digiblocks"), value: "h4" },
      { label: __5("H5", "digiblocks"), value: "h5" },
      { label: __5("H6", "digiblocks"), value: "h6" },
      { label: __5("p", "digiblocks"), value: "p" },
      { label: __5("div", "digiblocks"), value: "div" }
    ];
    const layoutOptions = [
      { label: __5("Boxed", "digiblocks"), value: "boxed" },
      { label: __5("Classic", "digiblocks"), value: "classic" },
      { label: __5("Separated", "digiblocks"), value: "separated" },
      { label: __5("Minimalist", "digiblocks"), value: "minimalist" },
      { label: __5("Bordered", "digiblocks"), value: "bordered" }
    ];
    const schemaTypeOptions = [
      { label: __5("Default FAQ Schema", "digiblocks"), value: "FAQPage" },
      { label: __5("Q&A Schema", "digiblocks"), value: "QAPage" }
    ];
    const tabList = [
      {
        name: "options",
        title: __5("Options", "digiblocks"),
        icon: tabIcons5.optionsIcon
      },
      {
        name: "style",
        title: __5("Style", "digiblocks"),
        icon: tabIcons5.styleIcon
      },
      {
        name: "advanced",
        title: __5("Advanced", "digiblocks"),
        icon: tabIcons5.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __5("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __5("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      },
      {
        name: "active",
        title: __5("Active", "digiblocks"),
        className: "digiblocks-tab-3 active"
      }
    ];
    const addNewItem = () => {
      const newItemIndex = items.length;
      const newItem = {
        id: `faq-item-${clientId.substr(0, 8)}-${newItemIndex}`,
        title: __5("New FAQ Question", "digiblocks"),
        content: __5("Add your answer here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
        isOpen: false
      };
      setAttributes({
        items: [...items, newItem]
      });
    };
    const removeItem = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setAttributes({
        items: newItems
      });
    };
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
    const moveItemUp = (index) => {
      if (index === 0)
        return;
      const newItems = [...items];
      const item = newItems[index];
      newItems.splice(index, 1);
      newItems.splice(index - 1, 0, item);
      setAttributes({
        items: newItems
      });
    };
    const moveItemDown = (index) => {
      if (index === items.length - 1)
        return;
      const newItems = [...items];
      const item = newItems[index];
      newItems.splice(index, 1);
      newItems.splice(index + 1, 0, item);
      setAttributes({
        items: newItems
      });
    };
    const toggleItem = (index) => {
      const newItems = items.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        if (!allowMultipleOpen && i !== index && item.isOpen) {
          return { ...item, isOpen: false };
        }
        return item;
      });
      setAttributes({
        items: newItems
      });
    };
    const updateItemTitle = (value, index) => {
      const newItems = [...items];
      newItems[index].title = value;
      setAttributes({
        items: newItems
      });
    };
    const updateItemContent = (value, index) => {
      const newItems = [...items];
      newItems[index].content = value;
      setAttributes({
        items: newItems
      });
    };
    const getIcon = (isOpen, type = iconType) => {
      switch (type) {
        case "plusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" })));
        case "arrow":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-arrow ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" })));
        case "chevron":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-chevron ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" })));
        case "triangle":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-triangle ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" })));
        case "circlePlusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })));
        default:
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, "\u2014") : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, "+");
      }
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      let baseStyles = "";
      const marginValue = margin[activeDevice] || { top: 0, right: 0, bottom: 30, left: 0, unit: "px" };
      const itemSpacing = itemsSpacing[activeDevice] !== void 0 ? itemsSpacing[activeDevice] : 16;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
        const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
        const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" };
        borderCSS = `
				border-style: ${borderStyle};
				border-color: ${borderColor || "#e0e0e0"};
				border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
				border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
			`;
      } else {
        borderCSS = "border: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
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
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      const baseCSS = `
			/* FAQ Block - ${blockId} */
			[data-custom-id="${blockId}"] {
				margin: ${marginValue.top}${marginValue.unit} ${marginValue.right}${marginValue.unit} ${marginValue.bottom}${marginValue.unit} ${marginValue.left}${marginValue.unit};
				width: 100%;
			}
			
			/* Base styles for questions and answers */
			[data-custom-id="${blockId}"] .digiblocks-faq-question {
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				display: flex;
				align-items: center;
				${iconPosition === "left" ? "flex-direction: row-reverse; justify-content: flex-end;" : "justify-content: space-between;"}
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-question-text {
				color: ${titleColor};
				${titleTypographyCSS}
				margin: 0;
				flex: 1;
				${questionPrefix ? "display: flex; align-items: center; gap: .5rem;" : ""}
				transition: color 0.3s ease;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-question-prefix {
				${questionPrefixColor ? `color: ${questionPrefixColor};` : ""}
				font-weight: bold;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-answer-prefix {
				${answerPrefixColor ? `color: ${answerPrefixColor};` : ""}
				font-weight: bold;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-answer-content {
				display: flex;
				${answerPrefix ? "display: flex; gap: .5rem;" : ""}
				color: ${contentColor};
				${contentTypographyCSS}
			}
			
			/* Handle answer display states */
			[data-custom-id="${blockId}"] .digiblocks-faq-answer {
				overflow: hidden;
				display: none;
				transition: height 0.3s ease;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			/* Icon styles */
			[data-custom-id="${blockId}"] .digiblocks-faq-question {
				gap: 15px;
			}

			[data-custom-id="${blockId}"] .digiblocks-faq-question-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				color: ${iconColor};
				transition: all 0.3s ease;
				font-size: ${iconSize[activeDevice]}px;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-question-icon svg {
				width: ${iconSize[activeDevice]}px;
				height: ${iconSize[activeDevice]}px;
				transition: transform 0.3s ease;
				fill: currentColor;
			}
			
			/* Rotate icons when active */
			[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-arrow,
			[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-chevron,
			[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-triangle {
				transform: rotate(180deg);
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-icon-arrow,
			[data-custom-id="${blockId}"] .digiblocks-faq-icon-chevron,
			[data-custom-id="${blockId}"] .digiblocks-faq-icon-triangle {
				display: inline-flex;
				transition: transform 0.3s ease;
			}
			
			/* Handle hover state */
			[data-custom-id="${blockId}"] .digiblocks-faq-question:hover .digiblocks-faq-question-text {
				${titleHoverColor ? `color: ${titleHoverColor};` : ""}
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${iconHoverColor ? `color: ${iconHoverColor};` : ""}
			}
			
			/* Handle active state */
			[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${titleActiveColor};
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${iconActiveColor};
			}
		`;
      let layoutCSS = "";
      switch (layout) {
        case "boxed":
          layoutCSS = `
					[data-custom-id="${blockId}"] .digiblocks-faq-item {
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || "#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${itemSpacing}px;
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-item:hover {
						${boxShadowHoverCSS}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question {
						${paddingCSS}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-answer {
						${paddingCSS}
						border-top: 1px solid ${borderColor || "#e0e0e0"};
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ""}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active {
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ""}
					}
				`;
          break;
        case "classic":
          layoutCSS = `
					[data-custom-id="${blockId}"] .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${borderColor || "#e0e0e0"};
						background-color: transparent;
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question {
						${paddingCSS}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-answer {
						padding: 0 ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};
					}
				`;
          break;
        case "separated":
          layoutCSS = `
					[data-custom-id="${blockId}"] .digiblocks-faq-item {
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question {
						${paddingCSS}
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || "#ffffff"};
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ""}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
						${boxShadowHoverCSS}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ""}
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ""}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-answer {
						${paddingCSS}
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ""}
						border: 1px solid ${borderColor || "#e0e0e0"};
						border-top: none;
						border-bottom-left-radius: ${borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice].left + borderRadius[activeDevice].unit : "8px"};
						border-bottom-right-radius: ${borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice].right + borderRadius[activeDevice].unit : "8px"};
						margin-top: -1px;
					}
				`;
          break;
        case "minimalist":
          layoutCSS = `
					[data-custom-id="${blockId}"] .digiblocks-faq-item {
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question {
						${paddingCSS}
						border-bottom: 2px solid ${borderColor || "#e0e0e0"};
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ""}
						border-color: ${titleHoverColor || borderHoverColor || "#cccccc"};
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ""}
						border-color: ${titleActiveColor || "#1e73be"};
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-answer {
						padding: ${padding[activeDevice].top}${padding[activeDevice].unit} 0 ${padding[activeDevice].bottom}${padding[activeDevice].unit} 0;
					}
				`;
          break;
        case "bordered":
          layoutCSS = `
					[data-custom-id="${blockId}"] .digiblocks-faq-item {
						${borderCSS}
						background-color: transparent;
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-item:hover {
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question {
						${paddingCSS}
						background-color: ${backgroundColor || "#f8f9fa"};
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ""}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ""}
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ""}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-answer {
						${paddingCSS}
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ""}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active {
						border-color: ${titleActiveColor || borderColor || "#1e73be"};
					}
				`;
          break;
        default:
          layoutCSS = `
					[data-custom-id="${blockId}"] .digiblocks-faq-item {
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || "#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${itemSpacing}px;
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-question {
						${paddingCSS}
					}
					
					[data-custom-id="${blockId}"] .digiblocks-faq-answer {
						${paddingCSS}
						border-top: 1px solid #e0e0e0;
					}
				`;
      }
      const editorCSS = `
			[data-custom-id="${blockId}"] .digiblocks-faq-item {
				position: relative;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-item-controls {
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
			[data-custom-id="${blockId}"] .digiblocks-faq-answer {
				display: none;
				transition: height 0.3s ease;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-faq-schema {
				margin-top: 15px;
			}
		`;
      const tabletStyles = `
			@media (max-width: 991px) {
				[data-custom-id="${blockId}"] {
					${margin.tablet ? `margin: ${margin.tablet.top}${margin.tablet.unit} ${margin.tablet.right}${margin.tablet.unit} ${margin.tablet.bottom}${margin.tablet.unit} ${margin.tablet.left}${margin.tablet.unit};` : ""}
				}
				
				[data-custom-id="${blockId}"] .digiblocks-faq-item {
					margin-bottom: ${itemsSpacing.tablet !== void 0 ? itemsSpacing.tablet : itemSpacing}px;
				}
				
				[data-custom-id="${blockId}"] .digiblocks-faq-question,
				[data-custom-id="${blockId}"] .digiblocks-faq-answer {
					${padding.tablet ? `padding: ${padding.tablet.top}${padding.tablet.unit} ${padding.tablet.right}${padding.tablet.unit} ${padding.tablet.bottom}${padding.tablet.unit} ${padding.tablet.left}${padding.tablet.unit};` : ""}
				}
				
				${layout === "minimalist" ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-answer {
					padding: ${padding.tablet?.top || padding[activeDevice].top}${padding.tablet?.unit || padding[activeDevice].unit} 0 ${padding.tablet?.bottom || padding[activeDevice].bottom}${padding.tablet?.unit || padding[activeDevice].unit} 0;
				}
				` : ""}
				
				${iconSize && iconSize.tablet ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-question-icon {
					font-size: ${iconSize.tablet}px;
				}
				
				[data-custom-id="${blockId}"] .digiblocks-faq-question-icon svg {
					width: ${iconSize.tablet}px;
					height: ${iconSize.tablet}px;
				}
				` : ""}
				
				${titleTypography && titleTypography.fontSize && titleTypography.fontSize.tablet ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-question-text {
					font-size: ${titleTypography.fontSize.tablet}${titleTypography.fontSizeUnit || "px"};
					${titleTypography.lineHeight && titleTypography.lineHeight.tablet ? `line-height: ${titleTypography.lineHeight.tablet}${titleTypography.lineHeightUnit || "em"};` : ""}
				}
				` : ""}
				
				${contentTypography && contentTypography.fontSize && contentTypography.fontSize.tablet ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-answer-content {
					font-size: ${contentTypography.fontSize.tablet}${contentTypography.fontSizeUnit || "px"};
					${contentTypography.lineHeight && contentTypography.lineHeight.tablet ? `line-height: ${contentTypography.lineHeight.tablet}${contentTypography.lineHeightUnit || "em"};` : ""}
				}
				` : ""}
			}
		`;
      const mobileStyles = `
			@media (max-width: 767px) {
				[data-custom-id="${blockId}"] {
					${margin.mobile ? `margin: ${margin.mobile.top}${margin.mobile.unit} ${margin.mobile.right}${margin.mobile.unit} ${margin.mobile.bottom}${margin.mobile.unit} ${margin.mobile.left}${margin.mobile.unit};` : ""}
				}
				
				[data-custom-id="${blockId}"] .digiblocks-faq-item {
					margin-bottom: ${itemsSpacing.mobile !== void 0 ? itemsSpacing.mobile : itemSpacing}px;
				}
				
				[data-custom-id="${blockId}"] .digiblocks-faq-question,
				[data-custom-id="${blockId}"] .digiblocks-faq-answer {
					${padding.mobile ? `padding: ${padding.mobile.top}${padding.mobile.unit} ${padding.mobile.right}${padding.mobile.unit} ${padding.mobile.bottom}${padding.mobile.unit} ${padding.mobile.left}${padding.mobile.unit};` : ""}
				}
				
				${layout === "minimalist" ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-answer {
					padding: ${padding.mobile?.top || padding[activeDevice].top}${padding.mobile?.unit || padding[activeDevice].unit} 0 ${padding.mobile?.bottom || padding[activeDevice].bottom}${padding.mobile?.unit || padding[activeDevice].unit} 0;
				}
				` : ""}
				
				${iconSize && iconSize.mobile ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-question-icon {
					font-size: ${iconSize.mobile}px;
				}
				
				[data-custom-id="${blockId}"] .digiblocks-faq-question-icon svg {
					width: ${iconSize.mobile}px;
					height: ${iconSize.mobile}px;
				}
				` : ""}
				
				${titleTypography && titleTypography.fontSize && titleTypography.fontSize.mobile ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-question-text {
					font-size: ${titleTypography.fontSize.mobile}${titleTypography.fontSizeUnit || "px"};
					${titleTypography.lineHeight && titleTypography.lineHeight.mobile ? `line-height: ${titleTypography.lineHeight.mobile}${titleTypography.lineHeightUnit || "em"};` : ""}
				}
				` : ""}
				
				${contentTypography && contentTypography.fontSize && contentTypography.fontSize.mobile ? `
				[data-custom-id="${blockId}"] .digiblocks-faq-answer-content {
					font-size: ${contentTypography.fontSize.mobile}${contentTypography.fontSizeUnit || "px"};
					${contentTypography.lineHeight && contentTypography.lineHeight.mobile ? `line-height: ${contentTypography.lineHeight.mobile}${contentTypography.lineHeightUnit || "em"};` : ""}
				}
				` : ""}
			}
		`;
      let animationCSS = "";
      if (animation && animation !== "none" && animations5[animation]) {
        animationCSS = animations5[animation].keyframes;
      }
      return `
			${baseCSS}
			${layoutCSS}
			${editorCSS}
			${tabletStyles}
			${mobileStyles}
			${animationCSS}
		`;
    };
    const renderTitleTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings5,
          {
            title: __5(
              "Question Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleColor,
                onChange: (value) => setAttributes({
                  titleColor: value
                }),
                label: __5(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({
                  backgroundColor: value
                }),
                label: __5(
                  "Background Color",
                  "digiblocks"
                )
              },
              {
                value: questionPrefixColor,
                onChange: (value) => setAttributes({
                  questionPrefixColor: value
                }),
                label: __5(
                  "Prefix Color",
                  "digiblocks"
                ),
                disableCustomColors: !questionPrefix
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings5,
          {
            title: __5(
              "Question Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleHoverColor,
                onChange: (value) => setAttributes({
                  titleHoverColor: value
                }),
                label: __5(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundHoverColor,
                onChange: (value) => setAttributes({
                  backgroundHoverColor: value
                }),
                label: __5(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "active") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings5,
          {
            title: __5(
              "Question Active Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleActiveColor,
                onChange: (value) => setAttributes({
                  titleActiveColor: value
                }),
                label: __5(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundActiveColor,
                onChange: (value) => setAttributes({
                  backgroundActiveColor: value
                }),
                label: __5(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderIconTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings5,
          {
            title: __5(
              "Icon Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconColor,
                onChange: (value) => setAttributes({
                  iconColor: value
                }),
                label: __5(
                  "Icon Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings5,
          {
            title: __5(
              "Icon Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconHoverColor,
                onChange: (value) => setAttributes({
                  iconHoverColor: value
                }),
                label: __5(
                  "Icon Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "active") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings5,
          {
            title: __5(
              "Icon Active Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconActiveColor,
                onChange: (value) => setAttributes({
                  iconActiveColor: value
                }),
                label: __5(
                  "Icon Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderContentTabContent = () => {
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
        PanelColorSettings5,
        {
          title: __5(
            "Answer Colors",
            "digiblocks"
          ),
          initialOpen: true,
          enableAlpha: true,
          colorSettings: [
            {
              value: contentColor,
              onChange: (value) => setAttributes({
                contentColor: value
              }),
              label: __5(
                "Text Color",
                "digiblocks"
              )
            },
            {
              value: contentBackgroundColor,
              onChange: (value) => setAttributes({
                contentBackgroundColor: value
              }),
              label: __5(
                "Background Color",
                "digiblocks"
              )
            },
            {
              value: answerPrefixColor,
              onChange: (value) => setAttributes({
                answerPrefixColor: value
              }),
              label: __5(
                "Prefix Color",
                "digiblocks"
              ),
              disableCustomColors: !answerPrefix
            }
          ]
        }
      ));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "options",
              name: "content-settings",
              title: __5("Items", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl5,
              {
                label: __5("Allow Multiple Open", "digiblocks"),
                checked: allowMultipleOpen,
                onChange: () => setAttributes({ allowMultipleOpen: !allowMultipleOpen }),
                help: __5("When enabled, multiple FAQ items can be open at the same time.", "digiblocks")
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl5,
              {
                label: __5("Layout", "digiblocks"),
                value: layout,
                options: layoutOptions,
                onChange: (value) => setAttributes({ layout: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { htmlFor: "question-prefix", className: "components-base-control__label" }, __5("Question Prefix", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              TextControl4,
              {
                id: "question-prefix",
                value: questionPrefix || "",
                onChange: (value) => setAttributes({ questionPrefix: value }),
                placeholder: __5("Example: Q:", "digiblocks")
              }
            ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __5("Add a prefix to questions (e.g., 'Q:').", "digiblocks")))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { htmlFor: "answer-prefix", className: "components-base-control__label" }, __5("Answer Prefix", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              TextControl4,
              {
                id: "answer-prefix",
                value: answerPrefix || "",
                onChange: (value) => setAttributes({ answerPrefix: value }),
                placeholder: __5("Example: A:", "digiblocks")
              }
            ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __5("Add a prefix to answers (e.g., 'A:').", "digiblocks")))),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl5,
              {
                label: __5("Items Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl5,
                {
                  value: itemsSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    itemsSpacing: {
                      ...itemsSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "options",
              name: "icon-settings",
              title: __5("Icon Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl5,
              {
                label: __5("Icon Type", "digiblocks"),
                value: iconType,
                options: iconTypeOptions,
                onChange: (value) => setAttributes({ iconType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl5,
              {
                label: __5("Icon Position", "digiblocks"),
                value: iconPosition,
                options: iconPositionOptions,
                onChange: (value) => setAttributes({ iconPosition: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl5,
              {
                label: __5("Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl5,
                {
                  value: iconSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSize: {
                      ...iconSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 8,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "options",
              name: "schema-settings",
              title: __5("SEO Schema", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl5,
              {
                label: __5("Enable Schema Markup", "digiblocks"),
                checked: schemaEnabled,
                onChange: () => setAttributes({ schemaEnabled: !schemaEnabled }),
                help: __5("Add JSON-LD schema markup for better SEO results.", "digiblocks")
              }
            ),
            schemaEnabled && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl5,
              {
                label: __5("Schema Type", "digiblocks"),
                value: schemaType,
                options: schemaTypeOptions,
                onChange: (value) => setAttributes({ schemaType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              TextControl4,
              {
                label: __5("Schema Name", "digiblocks"),
                value: schemaName,
                onChange: (value) => setAttributes({ schemaName: value }),
                placeholder: __5("Example: Product FAQ", "digiblocks"),
                help: __5("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "options",
              name: "heading-settings",
              title: __5("HTML Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl5,
              {
                label: __5("Question Tag", "digiblocks"),
                value: titleTag,
                options: titleTagOptions,
                onChange: (value) => setAttributes({ titleTag: value }),
                help: __5("HTML tag for questions. Default is h3.", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "style",
              name: "question-styles",
              title: __5("Question Styles", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel5,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderTitleTabContent(tab.name)
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl5,
              {
                label: __5(
                  "Question Typography",
                  "digiblocks"
                ),
                value: titleTypography,
                onChange: (value) => setAttributes({
                  titleTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 18, tablet: 16, mobile: 15 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "style",
              name: "answer-styles",
              title: __5("Answer Styles", "digiblocks"),
              initialOpen: false
            },
            renderContentTabContent(),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl5,
              {
                label: __5(
                  "Answer Typography",
                  "digiblocks"
                ),
                value: contentTypography,
                onChange: (value) => setAttributes({
                  contentTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "style",
              name: "icon-styles",
              title: __5("Icon Styles", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel5,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderIconTabContent(tab.name)
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "style",
              name: "border-box",
              title: __5("Border & Shadow", "digiblocks"),
              initialOpen: false
            },
            layout !== "classic" && layout !== "minimalist" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl5,
              {
                label: __5("Border Style", "digiblocks"),
                value: borderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "default" && value !== "none" && (borderStyle === "default" || borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({
                    borderStyle: value
                  });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings5,
              {
                title: __5(
                  "Border Colors",
                  "digiblocks"
                ),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({
                      borderColor: value
                    }),
                    label: __5(
                      "Border Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: borderHoverColor,
                    onChange: (value) => setAttributes({
                      borderHoverColor: value
                    }),
                    label: __5(
                      "Border Hover Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl5,
              {
                label: __5("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl5,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl5,
              {
                label: __5("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl5,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: "px"
                  },
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
            ))),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl5,
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
            TabPanelBody5,
            {
              tab: "style",
              name: "spacing",
              title: __5("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl5,
              {
                label: __5("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl5,
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
              ResponsiveControl5,
              {
                label: __5("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl5,
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
            TabPanelBody5,
            {
              tab: "advanced",
              name: "animation",
              title: __5("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl5,
              {
                label: __5("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button5,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __5("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody5,
            {
              tab: "advanced",
              name: "additional",
              title: __5("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __5("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __5(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __5("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __5("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __5("Separate multiple classes with spaces.", "digiblocks")))
          ));
      }
    };
    const renderFAQItems = () => {
      if (!items || items.length === 0) {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-no-items" }, /* @__PURE__ */ wp.element.createElement("p", null, __5("No FAQ items found. Please add some items.", "digiblocks")));
      }
      return items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: item.id,
            className: `digiblocks-faq-item ${item.isOpen ? "is-active" : ""}`,
            style: isLast ? { marginBottom: 0 } : {}
          },
          /* @__PURE__ */ wp.element.createElement(
            "div",
            {
              className: "digiblocks-faq-question",
              onClick: () => toggleItem(index)
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-question-text" }, questionPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-prefix" }, questionPrefix), /* @__PURE__ */ wp.element.createElement(
              RichText5,
              {
                tagName: "span",
                value: item.title,
                onChange: (value) => updateItemTitle(value, index),
                placeholder: __5("Enter question...", "digiblocks"),
                allowedFormats: ["core/bold", "core/italic"],
                className: "digiblocks-faq-question-text-content"
              }
            )),
            /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-icon" }, getIcon(item.isOpen))
          ),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer-content" }, answerPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-answer-prefix" }, answerPrefix), /* @__PURE__ */ wp.element.createElement(
            RichText5,
            {
              tagName: "div",
              value: item.content,
              onChange: (value) => updateItemContent(value, index),
              placeholder: __5("Enter answer...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic", "core/link", "core/image", "core/list"],
              className: "digiblocks-faq-answer-text"
            }
          ))),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-item-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip2, { text: __5("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button5,
            {
              className: "digiblocks-faq-item-move-up",
              onClick: () => moveItemUp(index),
              icon: "arrow-up-alt2",
              disabled: index === 0,
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip2, { text: __5("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button5,
            {
              className: "digiblocks-faq-item-move-down",
              onClick: () => moveItemDown(index),
              icon: "arrow-down-alt2",
              disabled: index === items.length - 1,
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip2, { text: __5("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button5,
            {
              className: "digiblocks-faq-item-duplicate",
              onClick: () => duplicateItem(index),
              icon: "admin-page",
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip2, { text: __5("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button5,
            {
              className: "digiblocks-faq-item-remove",
              onClick: () => removeItem(index),
              icon: "trash",
              isSmall: true
            }
          )))
        );
      });
    };
    const blockProps = useBlockProps9({
      className: `digiblocks-faq-block ${layout || "boxed"} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls5, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel5,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-items" }, renderFAQItems()), /* @__PURE__ */ wp.element.createElement(
      Button5,
      {
        variant: "primary",
        icon: "plus",
        onClick: addNewItem,
        style: { width: "100%", marginTop: "20px", justifyContent: "center" }
      },
      __5("Add FAQ Item", "digiblocks")
    )));
  };
  var edit_default5 = FAQEdit;

  // blocks/faq/save.js
  var { useBlockProps: useBlockProps10, RichText: RichText6 } = window.wp.blockEditor;
  var FAQSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      items,
      titleTag,
      layout,
      questionPrefix,
      answerPrefix,
      animation,
      allowMultipleOpen,
      iconType,
      iconPosition,
      schemaEnabled
    } = attributes;
    const blockClasses = [
      "digiblocks-faq-block",
      layout || "boxed",
      customClasses || "",
      animation !== "none" ? `animate-${animation}` : ""
    ].filter(Boolean).join(" ");
    const getIcon = (isOpen, type = iconType) => {
      switch (type) {
        case "plusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" })));
        case "arrow":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-arrow ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" })));
        case "chevron":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-chevron ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" })));
        case "triangle":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-triangle ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" })));
        case "circlePlusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })));
        default:
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, "\u2014") : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, "+");
      }
    };
    const blockProps = useBlockProps10.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id,
      "data-allow-multiple": allowMultipleOpen ? "true" : "false"
    });
    const renderFAQItems = () => {
      if (!items || items.length === 0) {
        return null;
      }
      return items.map((item, index) => {
        return /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: item.id,
            className: `digiblocks-faq-item ${item.isOpen ? "is-active" : ""}`,
            "data-item-id": item.id
          },
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-question" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-question-text" }, questionPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-prefix" }, questionPrefix), /* @__PURE__ */ wp.element.createElement(
            RichText6.Content,
            {
              tagName: titleTag || "h3",
              value: item.title,
              className: "digiblocks-faq-question-text-content"
            }
          )), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-icon" }, getIcon(item.isOpen))),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer-content" }, answerPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-answer-prefix" }, answerPrefix), /* @__PURE__ */ wp.element.createElement(
            RichText6.Content,
            {
              tagName: "div",
              className: "digiblocks-faq-answer-text",
              value: item.content
            }
          )))
        );
      });
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-items" }, renderFAQItems()));
  };
  var save_default5 = FAQSave;

  // blocks/google-map/edit.js
  var { __: __6 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps11,
    InspectorControls: InspectorControls6,
    PanelColorSettings: PanelColorSettings6,
    BlockControls: BlockControls4
  } = window.wp.blockEditor;
  var {
    PanelBody,
    TextControl: TextControl5,
    TextareaControl,
    RangeControl: RangeControl6,
    SelectControl: SelectControl6,
    Button: Button6,
    Placeholder,
    Spinner,
    ToggleControl: ToggleControl6,
    BaseControl: BaseControl3,
    __experimentalToggleGroupControl: ToggleGroupControl6,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption6
  } = window.wp.components;
  var { useState: useState6, useEffect: useEffect6, useRef: useRef6 } = window.wp.element;
  var { animations: animations6, debounce } = digi.utils;
  var { tabIcons: tabIcons6 } = digi.icons;
  var {
    ResponsiveControl: ResponsiveControl6,
    DimensionControl: DimensionControl6,
    CustomTabPanel: CustomTabPanel6,
    BoxShadowControl: BoxShadowControl6,
    TabPanelBody: TabPanelBody6
  } = digi.components;
  var GoogleMapEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      mapHeight,
      zoom,
      mapType,
      mapStyle,
      customMapStyle,
      markers,
      address,
      animation,
      enableZoom,
      enableScroll,
      enableFullscreenControl,
      enableStreetViewControl,
      enableMapTypeControl,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      boxShadow,
      boxShadowHover
    } = attributes;
    const [localActiveDevice, setLocalActiveDevice] = useState6(window.digi.responsiveState.activeDevice);
    const [isLoading, setIsLoading] = useState6(false);
    const [geocodeError, setGeocodeError] = useState6(null);
    const [mapLoaded, setMapLoaded] = useState6(false);
    const [mapInstance, setMapInstance] = useState6(null);
    const [markerInstances, setMarkerInstances] = useState6([]);
    const mapContainerRef = useRef6(null);
    const geocoder = useRef6(null);
    const [activeTab, setActiveTab] = useState6("options");
    const previewTimeoutRef = useRef6(null);
    useEffect6(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect6(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!markers) {
        setAttributes({ markers: [] });
      }
    }, [clientId, id, setAttributes]);
    useEffect6(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    useEffect6(() => {
      if (!mapLoaded && typeof google === "undefined" && !window.googleMapsLoading) {
        if (!digiBlocksData.googleMapsApiKey) {
          setGeocodeError(__6("Google Maps API key not found. Please add it in the DigiBlocks settings.", "digiblocks"));
          return;
        }
        window.googleMapsLoading = true;
        window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
        const ourCallback = () => {
          setMapLoaded(true);
          geocoder.current = new google.maps.Geocoder();
        };
        window.digiblocksGoogleMapsCallbacks.push(ourCallback);
        if (typeof window.digiblocksGoogleMapsCallback !== "function") {
          window.digiblocksGoogleMapsCallback = () => {
            window.googleMapsInitialized = true;
            window.googleMapsLoading = false;
            window.digiblocksGoogleMapsCallbacks.forEach((callback) => {
              if (typeof callback === "function") {
                callback();
              }
            });
          };
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${digiBlocksData.googleMapsApiKey}&callback=digiblocksGoogleMapsCallback&loading=async`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        return () => {
          const index = window.digiblocksGoogleMapsCallbacks.indexOf(ourCallback);
          if (index > -1) {
            window.digiblocksGoogleMapsCallbacks.splice(index, 1);
          }
        };
      } else if (!mapLoaded && typeof google !== "undefined") {
        setMapLoaded(true);
        geocoder.current = new google.maps.Geocoder();
      } else if (!mapLoaded && window.googleMapsLoading) {
        const ourCallback = () => {
          setMapLoaded(true);
          geocoder.current = new google.maps.Geocoder();
        };
        window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
        window.digiblocksGoogleMapsCallbacks.push(ourCallback);
        return () => {
          const index = window.digiblocksGoogleMapsCallbacks.indexOf(ourCallback);
          if (index > -1) {
            window.digiblocksGoogleMapsCallbacks.splice(index, 1);
          }
        };
      }
    }, [mapLoaded]);
    useEffect6(() => {
      if (mapLoaded && mapContainerRef.current && !mapInstance) {
        const center = { lat: 40.7128, lng: -74.006 };
        const mapOptions = {
          center,
          zoom: zoom || 10,
          mapTypeId: mapType || "roadmap",
          zoomControl: enableZoom,
          scrollwheel: enableScroll,
          fullscreenControl: enableFullscreenControl,
          streetViewControl: enableStreetViewControl,
          mapTypeControl: enableMapTypeControl
        };
        const hasMarkers = markers && markers.length > 0;
        if (mapStyle && mapStyle !== "default" && !hasMarkers) {
          if (mapStyle === "custom" && customMapStyle) {
            try {
              const customStyleObj = JSON.parse(customMapStyle);
              mapOptions.styles = customStyleObj;
            } catch (error) {
              console.error("Invalid map style JSON:", error);
            }
          } else if (predefinedMapStyles[mapStyle]) {
            mapOptions.styles = predefinedMapStyles[mapStyle];
          }
        }
        const globalMapId = digiBlocksData.googleMapsMapId || "";
        if (globalMapId && hasMarkers) {
          mapOptions.mapId = globalMapId;
          setAttributes({ mapId: globalMapId });
        } else if (attributes.mapId) {
          setAttributes({ mapId: "" });
        }
        const map = new google.maps.Map(mapContainerRef.current, mapOptions);
        setMapInstance(map);
        if (!geocoder.current) {
          geocoder.current = new google.maps.Geocoder();
        }
        if (address) {
          geocodeAddress(address, map);
        }
        if (markers && markers.length > 0 && globalMapId) {
          addMarkers(markers, map);
        }
      }
    }, [mapLoaded, mapContainerRef, mapInstance, zoom, mapType, mapStyle, customMapStyle, address, markers, enableZoom, enableScroll, enableFullscreenControl, enableStreetViewControl, enableMapTypeControl, attributes.mapId]);
    useEffect6(() => {
      if (mapInstance) {
        mapInstance.setZoom(zoom);
        mapInstance.setMapTypeId(mapType);
        if (mapStyle && mapStyle !== "default") {
          if (mapStyle === "custom" && customMapStyle) {
            try {
              const customStyleObj = JSON.parse(customMapStyle);
              mapInstance.setOptions({ styles: customStyleObj });
            } catch (error) {
              console.error("Invalid map style JSON:", error);
            }
          } else if (predefinedMapStyles[mapStyle]) {
            mapInstance.setOptions({ styles: predefinedMapStyles[mapStyle] });
          }
        } else {
          mapInstance.setOptions({ styles: [] });
        }
        mapInstance.setOptions({
          zoomControl: enableZoom,
          scrollwheel: enableScroll,
          fullscreenControl: enableFullscreenControl,
          streetViewControl: enableStreetViewControl,
          mapTypeControl: enableMapTypeControl
        });
      }
    }, [mapInstance, zoom, mapType, mapStyle, customMapStyle, enableZoom, enableScroll, enableFullscreenControl, enableStreetViewControl, enableMapTypeControl]);
    const geocodeAddress = (address2, map, markerIndex = -1) => {
      if (!geocoder.current)
        return;
      setIsLoading(true);
      setGeocodeError(null);
      geocoder.current.geocode({ address: address2 }, (results, status) => {
        setIsLoading(false);
        if (status === "OK" && results && results.length > 0) {
          const location = results[0].geometry.location;
          if (markerIndex >= 0) {
            const updatedMarkers = [...markers];
            updatedMarkers[markerIndex] = {
              ...updatedMarkers[markerIndex],
              latitude: location.lat(),
              longitude: location.lng()
            };
            setAttributes({ markers: updatedMarkers });
            if (mapInstance) {
              addMarkers(updatedMarkers, mapInstance);
            }
          } else {
            map.setCenter(location);
            if (markers && markers.length > 0) {
              const updatedMarkers = [...markers];
              updatedMarkers[0] = {
                ...updatedMarkers[0],
                address: address2,
                latitude: location.lat(),
                longitude: location.lng()
              };
              setAttributes({ markers: updatedMarkers });
              if (mapInstance) {
                addMarkers(updatedMarkers, mapInstance);
              }
            }
          }
        } else {
          setGeocodeError(__6("Could not find address. Please try a different one or use the map to position your marker.", "digiblocks"));
        }
      });
    };
    const addNewMarker = () => {
      const newMarkers = [...markers || []];
      const markerId = `marker-${Date.now()}`;
      const center = mapInstance ? mapInstance.getCenter() : { lat: 40.7128, lng: -74.006 };
      newMarkers.push({
        id: markerId,
        address: "",
        latitude: typeof center.lat === "function" ? center.lat() : center.lat,
        longitude: typeof center.lng === "function" ? center.lng() : center.lng,
        title: ""
      });
      setAttributes({ markers: newMarkers });
      if (mapInstance) {
        addMarkers(newMarkers, mapInstance);
      }
    };
    const updateMarker = (index, field, value) => {
      const updatedMarkers = [...markers];
      updatedMarkers[index] = {
        ...updatedMarkers[index],
        [field]: value
      };
      setAttributes({ markers: updatedMarkers });
      if (field === "address" && value && geocoder.current && mapInstance) {
        geocodeAddress(value, mapInstance);
      }
    };
    const removeMarker = (index) => {
      const updatedMarkers = [...markers];
      updatedMarkers.splice(index, 1);
      setAttributes({ markers: updatedMarkers });
      if (updatedMarkers.length === 0) {
        setAttributes({ mapId: "" });
        if (mapInstance && mapStyle && mapStyle !== "default") {
          if (mapStyle === "custom" && customMapStyle) {
            try {
              const customStyleObj = JSON.parse(customMapStyle);
              mapInstance.setOptions({ styles: customStyleObj });
            } catch (error) {
              console.error("Invalid map style JSON:", error);
            }
          } else if (predefinedMapStyles[mapStyle]) {
            mapInstance.setOptions({ styles: predefinedMapStyles[mapStyle] });
          }
        }
      }
    };
    const applyMapStyle = (map, style, customStyle) => {
      if (!map)
        return;
      if (style && style !== "default") {
        if (style === "custom" && customStyle) {
          try {
            const customStyleObj = JSON.parse(customStyle);
            map.setOptions({ styles: customStyleObj });
          } catch (error) {
            console.error("Invalid map style JSON:", error);
          }
        } else if (predefinedMapStyles[style]) {
          map.setOptions({ styles: predefinedMapStyles[style] });
        }
      } else {
        map.setOptions({ styles: [] });
      }
    };
    const addMarkers = async (markers2, map) => {
      const hasMapId = !!digiBlocksData.googleMapsMapId;
      if (!hasMapId) {
        console.warn("Map ID is required for Advanced Markers");
        return;
      }
      if (!markers2 || markers2.length === 0) {
        return;
      }
      if (markerInstances.length > 0) {
        markerInstances.forEach((marker) => marker.map = null);
      }
      try {
        if (!google.maps.marker) {
          await google.maps.importLibrary("marker");
        }
        const newMarkerInstances = markers2.map((marker) => {
          if (!marker.latitude || !marker.longitude)
            return null;
          const position = { lat: marker.latitude, lng: marker.longitude };
          const title = marker.title || "";
          const description = marker.description || "";
          const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
            map,
            position,
            title
          });
          if (description) {
            const infoContent = document.createElement("div");
            infoContent.className = "digiblocks-map-info-content";
            infoContent.style.cssText = "min-width: 200px; max-width: 300px; padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);";
            if (title) {
              const titleElement = document.createElement("div");
              titleElement.className = "digiblocks-map-info-title";
              titleElement.style.cssText = "font-weight: bold; margin-bottom: 5px; font-size: 16px;";
              titleElement.textContent = title;
              infoContent.appendChild(titleElement);
            }
            const descElement = document.createElement("div");
            descElement.className = "digiblocks-map-info-description";
            descElement.style.cssText = "font-size: 14px;";
            descElement.innerHTML = description;
            infoContent.appendChild(descElement);
            const infoWindow = new google.maps.InfoWindow({
              content: infoContent
            });
            google.maps.event.addListener(advancedMarker, "click", function() {
              infoWindow.open({
                anchor: advancedMarker,
                map
              });
            });
            if (markers2.length === 1) {
              infoWindow.open({
                anchor: advancedMarker,
                map
              });
            }
          }
          return advancedMarker;
        }).filter(Boolean);
        setMarkerInstances(newMarkerInstances);
      } catch (error) {
        console.error("Error creating advanced markers:", error);
      }
    };
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations6[animation]) {
        const originalKeyframes = animations6[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect6(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const borderStyleOptions = [
      { label: __6("None", "digiblocks"), value: "none" },
      { label: __6("Solid", "digiblocks"), value: "solid" },
      { label: __6("Dotted", "digiblocks"), value: "dotted" },
      { label: __6("Dashed", "digiblocks"), value: "dashed" },
      { label: __6("Double", "digiblocks"), value: "double" },
      { label: __6("Groove", "digiblocks"), value: "groove" },
      { label: __6("Ridge", "digiblocks"), value: "ridge" },
      { label: __6("Inset", "digiblocks"), value: "inset" },
      { label: __6("Outset", "digiblocks"), value: "outset" }
    ];
    const mapTypeOptions = [
      { label: __6("Roadmap", "digiblocks"), value: "roadmap" },
      { label: __6("Satellite", "digiblocks"), value: "satellite" },
      { label: __6("Hybrid", "digiblocks"), value: "hybrid" },
      { label: __6("Terrain", "digiblocks"), value: "terrain" }
    ];
    const mapStyleOptions = [
      { label: __6("Default", "digiblocks"), value: "default" },
      { label: __6("Silver", "digiblocks"), value: "silver" },
      { label: __6("Retro", "digiblocks"), value: "retro" },
      { label: __6("Dark", "digiblocks"), value: "dark" },
      { label: __6("Night", "digiblocks"), value: "night" },
      { label: __6("Aubergine", "digiblocks"), value: "aubergine" },
      { label: __6("Custom", "digiblocks"), value: "custom" }
    ];
    const predefinedMapStyles = {
      default: [],
      silver: [
        { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
        { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
        { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }
      ],
      retro: [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c9b2a6" }] },
        { featureType: "administrative.land_parcel", elementType: "geometry.stroke", stylers: [{ color: "#dcd2be" }] },
        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#ae9e90" }] },
        { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#93817c" }] },
        { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#a5b076" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#447530" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#f5f1e6" }] },
        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#fdfcf8" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#f8c967" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#e9bc62" }] },
        { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#e98d58" }] },
        { featureType: "road.highway.controlled_access", elementType: "geometry.stroke", stylers: [{ color: "#db8555" }] },
        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#806b63" }] },
        { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "transit.line", elementType: "labels.text.fill", stylers: [{ color: "#8f7d77" }] },
        { featureType: "transit.line", elementType: "labels.text.stroke", stylers: [{ color: "#ebe3cd" }] },
        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
        { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#b9d3c2" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#92998d" }] }
      ],
      dark: [
        { elementType: "geometry", stylers: [{ color: "#212121" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
        { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
        { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
        { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "poi.park", elementType: "labels.text.stroke", stylers: [{ color: "#1b1b1b" }] },
        { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
        { featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#4e4e4e" }] },
        { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] }
      ],
      night: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
        { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
        { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
        { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
        { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
      ],
      aubergine: [
        { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
        { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
        { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#64779e" }] },
        { featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
        { featureType: "landscape.man_made", elementType: "geometry.stroke", stylers: [{ color: "#334e87" }] },
        { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#023e58" }] },
        { featureType: "poi", elementType: "geometry", stylers: [{ color: "#283d6a" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6f9ba5" }] },
        { featureType: "poi", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
        { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#023e58" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#3C7680" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#304a7d" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
        { featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2c6675" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#255763" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#b0d5ce" }] },
        { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ color: "#023e58" }] },
        { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
        { featureType: "transit", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
        { featureType: "transit.line", elementType: "geometry.fill", stylers: [{ color: "#283d6a" }] },
        { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#3a4762" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4e6d70" }] }
      ]
    };
    const animationOptions = [
      { label: __6("None", "digiblocks"), value: "none" },
      ...Object.keys(animations6).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __6("Options", "digiblocks"),
        icon: tabIcons6.optionsIcon
      },
      {
        name: "style",
        title: __6("Style", "digiblocks"),
        icon: tabIcons6.styleIcon
      },
      {
        name: "advanced",
        title: __6("Advanced", "digiblocks"),
        icon: tabIcons6.advancedIcon
      }
    ];
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      const currentHeight = mapHeight && mapHeight[activeDevice] ? mapHeight[activeDevice] : activeDevice === "desktop" ? 400 : activeDevice === "tablet" ? 350 : 300;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "none") {
        const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
        const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
        borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
            `;
      }
      let boxShadowCSS = "";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const inset = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      let animationCSS = "";
      if (animation && animation !== "none" && animations6[animation]) {
        animationCSS = animations6[animation].keyframes;
      }
      return `
            /* Google Map Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                height: ${currentHeight}px;
                width: 100%;
                overflow: hidden;
                ${borderCSS}
                ${boxShadowCSS}
				transition: all .3s ease;
            }

            [data-custom-id="${blockId}"]:hover {
                ${boxShadowHoverCSS}
            }
            
            /* Animation keyframes */
            ${animationCSS}
            
            /* Responsive styles */
            @media (max-width: 991px) {
                [data-custom-id="${blockId}"] {
                    height: ${mapHeight && mapHeight.tablet ? mapHeight.tablet : 350}px;
                }
            }
            
            @media (max-width: 767px) {
                [data-custom-id="${blockId}"] {
                    height: ${mapHeight && mapHeight.mobile ? mapHeight.mobile : 300}px;
                }
            }
        `;
    };
    const renderMarkerSettings = () => {
      const markerCount = Array.isArray(markers) ? markers.length : 0;
      const hasMapId = !!digiBlocksData.googleMapsMapId;
      if (markerCount > 0 && !hasMapId) {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-warning", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, /* @__PURE__ */ wp.element.createElement("p", null, __6("A Map ID is required to use markers with the Google Maps block.", "digiblocks")), /* @__PURE__ */ wp.element.createElement("p", null, __6("Please configure a Map ID in the DigiBlocks settings before adding markers.", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
          Button6,
          {
            isPrimary: true,
            href: `${window.ajaxurl ? window.ajaxurl.replace("admin-ajax.php", "") : "/wp-admin/"}admin.php?page=digiblocks-settings`,
            target: "_blank",
            style: { marginTop: "10px" }
          },
          __6("Go to Settings", "digiblocks")
        )));
      }
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, Array.isArray(markers) && markers.length > 0 ? /* @__PURE__ */ wp.element.createElement("div", null, markers.map((marker, index) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: marker.id || `marker-${index}`,
          className: "digiblocks-google-map-marker",
          style: {
            marginBottom: "16px",
            padding: "16px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px"
          }
        },
        /* @__PURE__ */ wp.element.createElement("h3", { style: { margin: "0 0 10px 0" } }, __6("Marker", "digiblocks"), " #", index + 1),
        /* @__PURE__ */ wp.element.createElement(
          TextControl5,
          {
            label: __6("Title", "digiblocks"),
            value: marker.title || "",
            onChange: (value) => updateMarker(index, "title", value),
            placeholder: __6("Enter marker title", "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          TextareaControl,
          {
            label: __6("Description", "digiblocks"),
            value: marker.description || "",
            onChange: (value) => updateMarker(index, "description", value),
            placeholder: __6("Enter marker description (will appear above marker)", "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          TextControl5,
          {
            label: __6("Address", "digiblocks"),
            value: marker.address || "",
            onChange: (value) => {
              const updatedMarkers = [...markers];
              updatedMarkers[index] = {
                ...updatedMarkers[index],
                address: value
              };
              setAttributes({ markers: updatedMarkers });
            },
            onBlur: () => {
              if (markers[index]?.address && geocoder.current && mapInstance) {
                geocodeAddress(markers[index].address, mapInstance, index);
              }
            },
            placeholder: __6("Enter marker address", "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px", display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ wp.element.createElement(
          Button6,
          {
            isDestructive: true,
            onClick: () => removeMarker(index)
          },
          __6("Remove Marker", "digiblocks")
        ))
      )), /* @__PURE__ */ wp.element.createElement(
        Button6,
        {
          isPrimary: true,
          onClick: addNewMarker,
          style: { marginTop: "10px", width: "100%", justifyContent: "center" }
        },
        __6("Add Marker", "digiblocks")
      )) : /* @__PURE__ */ wp.element.createElement("div", null, /* @__PURE__ */ wp.element.createElement("p", null, __6("No markers added yet. Add your first marker!", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
        Button6,
        {
          isPrimary: true,
          onClick: addNewMarker,
          style: { width: "100%", justifyContent: "center" }
        },
        __6("Add Marker", "digiblocks")
      )));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "options",
              name: "map-settings",
              title: __6("Map Settings", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TextControl5,
              {
                label: __6("Address", "digiblocks"),
                value: address || "",
                onChange: (value) => {
                  setAttributes({ address: value });
                  if (value && geocoder.current && mapInstance) {
                    geocodeAddress(value, mapInstance);
                  }
                },
                placeholder: __6("Enter location address", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            geocodeError && /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-error", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, geocodeError)),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl6,
              {
                label: __6("Map Type", "digiblocks"),
                value: mapType,
                options: mapTypeOptions,
                onChange: (value) => setAttributes({ mapType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            (!markers || markers.length === 0) && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl6,
              {
                label: __6("Map Style", "digiblocks"),
                value: mapStyle,
                options: mapStyleOptions,
                onChange: (value) => setAttributes({ mapStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), mapStyle === "custom" && /* @__PURE__ */ wp.element.createElement(
              TextareaControl,
              {
                label: __6("Custom Map Style JSON", "digiblocks"),
                help: __6("Paste a valid Google Maps style JSON. You can create styles with the Google Maps Styling Wizard.", "digiblocks"),
                value: customMapStyle || "",
                onChange: (value) => setAttributes({ customMapStyle: value }),
                rows: 6,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )),
            markers && markers.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-info", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, __6("Map Style options are not available when markers are present, as markers require a Map ID which overrides custom styling.", "digiblocks"))),
            /* @__PURE__ */ wp.element.createElement(
              RangeControl6,
              {
                label: __6("Zoom Level", "digiblocks"),
                value: zoom,
                onChange: (value) => setAttributes({ zoom: value }),
                min: 1,
                max: 20,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "options",
              name: "marker-settings",
              title: __6("Markers", "digiblocks"),
              initialOpen: false
            },
            renderMarkerSettings()
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "options",
              name: "map-controls",
              title: __6("Map Controls", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(BaseControl3, { id: `${id}-map-controls` }, /* @__PURE__ */ wp.element.createElement(
              ToggleControl6,
              {
                label: __6("Enable Zoom Control", "digiblocks"),
                checked: enableZoom !== false,
                onChange: (value) => setAttributes({ enableZoom: value })
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleControl6,
              {
                label: __6("Enable Mousewheel Zoom", "digiblocks"),
                checked: enableScroll !== false,
                onChange: (value) => setAttributes({ enableScroll: value })
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleControl6,
              {
                label: __6("Enable Fullscreen Control", "digiblocks"),
                checked: enableFullscreenControl !== false,
                onChange: (value) => setAttributes({ enableFullscreenControl: value })
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleControl6,
              {
                label: __6("Enable Street View Control", "digiblocks"),
                checked: enableStreetViewControl !== false,
                onChange: (value) => setAttributes({ enableStreetViewControl: value })
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleControl6,
              {
                label: __6("Enable Map Type Control", "digiblocks"),
                checked: enableMapTypeControl !== false,
                onChange: (value) => setAttributes({ enableMapTypeControl: value })
              }
            ))
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "style",
              name: "map-dimensions",
              title: __6("Map Size", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl6,
              {
                label: __6("Map Height", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl6,
                {
                  value: mapHeight && mapHeight[localActiveDevice] ? mapHeight[localActiveDevice] : localActiveDevice === "desktop" ? 400 : localActiveDevice === "tablet" ? 350 : 300,
                  onChange: (value) => {
                    setAttributes({
                      mapHeight: {
                        ...mapHeight,
                        [localActiveDevice]: value
                      }
                    });
                  },
                  min: 150,
                  max: 800,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "style",
              name: "map-border",
              title: __6("Border", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl6,
              {
                label: __6("Border Style", "digiblocks"),
                value: borderStyle || "none",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "none" && (borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({ borderStyle: value });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings6,
              {
                title: __6("Border Color", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
                    label: __6("Border Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl6,
              {
                label: __6("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl6,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl6,
              {
                label: __6("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl6,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
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
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "style",
              name: "box-shadow",
              title: __6("Box Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl6,
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
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "advanced",
              name: "animation",
              title: __6("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl6,
              {
                label: __6("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button6,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __6("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody6,
            {
              tab: "advanced",
              name: "additional",
              title: __6("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __6("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __6(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __6("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __6("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __6("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps11({
      className: `digiblocks-google-map ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls6, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel6,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, !digiBlocksData.googleMapsApiKey ? /* @__PURE__ */ wp.element.createElement(
      Placeholder,
      {
        icon: "location-alt",
        label: __6("Google Map", "digiblocks"),
        instructions: __6("You need to add your Google Maps API key in the DigiBlocks settings to use this block.", "digiblocks")
      },
      /* @__PURE__ */ wp.element.createElement(
        Button6,
        {
          isPrimary: true,
          href: `${window.ajaxurl ? window.ajaxurl.replace("admin-ajax.php", "") : "/wp-admin/"}admin.php?page=digiblocks-settings`,
          target: "_blank"
        },
        __6("Go to Settings", "digiblocks")
      )
    ) : isLoading ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-loading", style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } }, /* @__PURE__ */ wp.element.createElement(Spinner, null), /* @__PURE__ */ wp.element.createElement("span", { style: { marginLeft: "10px" } }, __6("Loading map...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        ref: mapContainerRef,
        className: "digiblocks-google-map-container",
        style: { width: "100%", height: "100%" }
      }
    )));
  };
  var edit_default6 = GoogleMapEdit;

  // blocks/google-map/save.js
  var { useBlockProps: useBlockProps12 } = window.wp.blockEditor;
  var GoogleMapSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      mapHeight,
      zoom,
      mapType,
      mapStyle,
      customMapStyle,
      mapId,
      markers,
      address,
      animation,
      enableZoom,
      enableScroll,
      enableFullscreenControl,
      enableStreetViewControl,
      enableMapTypeControl
    } = attributes;
    const blockClasses = [
      "digiblocks-google-map",
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps12.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id,
      "data-map-zoom": zoom || 10,
      "data-map-type": mapType || "roadmap",
      "data-map-style": mapStyle || "default",
      "data-custom-map-style": customMapStyle || "",
      "data-map-id": mapId || "",
      "data-enable-zoom": enableZoom !== false ? "true" : "false",
      "data-enable-scroll": enableScroll !== false ? "true" : "false",
      "data-enable-fullscreen": enableFullscreenControl !== false ? "true" : "false",
      "data-enable-streetview": enableStreetViewControl !== false ? "true" : "false",
      "data-enable-maptype": enableMapTypeControl !== false ? "true" : "false"
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-container" }), markers && markers.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-markers", style: { display: "none" } }, markers.map((marker) => /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        key: marker.id,
        className: "digiblocks-google-map-marker",
        "data-lat": marker.latitude,
        "data-lng": marker.longitude,
        "data-title": marker.title || "",
        "data-description": marker.description || "",
        "data-address": marker.address || ""
      }
    ))), address && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-address", style: { display: "none" }, "data-address": address }));
  };
  var save_default6 = GoogleMapSave;

  // blocks/heading/edit.js
  var { __: __7 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps13,
    RichText: RichText7,
    InspectorControls: InspectorControls7,
    PanelColorSettings: PanelColorSettings7,
    LinkControl: LinkControl2,
    BlockControls: BlockControls5,
    AlignmentToolbar: AlignmentToolbar4
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl7,
    RangeControl: RangeControl7,
    ToggleControl: ToggleControl7,
    Button: Button7,
    __experimentalToggleGroupControl: ToggleGroupControl7,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption7,
    TabPanel: TabPanel6,
    BaseControl: BaseControl4
  } = window.wp.components;
  var { useState: useState7, useEffect: useEffect7, useRef: useRef7 } = window.wp.element;
  var { animations: animations7 } = digi.utils;
  var { tabIcons: tabIcons7 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl7, DimensionControl: DimensionControl7, TypographyControl: TypographyControl6, CustomTabPanel: CustomTabPanel7, TabPanelBody: TabPanelBody7 } = digi.components;
  var HeadingEdit = ({ attributes, setAttributes, clientId }) => {
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
    const [localActiveDevice, setLocalActiveDevice] = useState7(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState7(false);
    const previewTimeoutRef = useRef7(null);
    useEffect7(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState7("options");
    useEffect7(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
    }, [clientId]);
    useEffect7(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations7[animation]) {
        const originalKeyframes = animations7[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect7(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const animationOptions = [
      { label: __7("None", "digiblocks"), value: "none" },
      ...Object.keys(animations7).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const headingLevelOptions = [
      { label: "H1", value: 1 },
      { label: "H2", value: 2 },
      { label: "H3", value: 3 },
      { label: "H4", value: 4 },
      { label: "H5", value: 5 },
      { label: "H6", value: 6 }
    ];
    const highlightTypeOptions = [
      { label: __7("Background", "digiblocks"), value: "background" },
      { label: __7("Text Color", "digiblocks"), value: "color" },
      { label: __7("Underline", "digiblocks"), value: "underline" }
    ];
    const tabList = [
      {
        name: "options",
        title: __7("Options", "digiblocks"),
        icon: tabIcons7.optionsIcon
      },
      {
        name: "style",
        title: __7("Style", "digiblocks"),
        icon: tabIcons7.styleIcon
      },
      {
        name: "advanced",
        title: __7("Advanced", "digiblocks"),
        icon: tabIcons7.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __7("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __7("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      let typographyCSS = "";
      if (typography) {
        if (typography.fontFamily) {
          typographyCSS += `font-family: ${typography.fontFamily};`;
        }
        if (typography.fontSize && typography.fontSize[activeDevice]) {
          typographyCSS += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || "px"};`;
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
          typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || "em"};`;
        }
        if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
          typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || "px"};`;
        }
      }
      let textShadowCSS = "";
      if (shadowEnabled && textShadow) {
        textShadowCSS = `text-shadow: ${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color};`;
      }
      const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
      const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
      let animationCSS = "";
      if (animation && animation !== "none" && animations7[animation]) {
        animationCSS = animations7[animation].keyframes;
      }
      let separatorCSS = "";
      if (displaySeparator && separatorColor) {
        const separatorWidthValue = separatorWidth[activeDevice] || 50;
        const separatorHeightValue = separatorHeight[activeDevice] || 3;
        const separatorSpacingValue = separatorSpacing[activeDevice] || 10;
        const separatorBorderRadiusValues = separatorBorderRadius && separatorBorderRadius[activeDevice] ? separatorBorderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
        const position = separatorPosition === "top" ? "top: 0;" : "bottom: 0;";
        const alignment = align === "center" ? "left: 50%; transform: translateX(-50%);" : align === "right" ? "right: 0;" : "left: 0;";
        switch (separatorStyle) {
          case "line-solid":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "line-gradient":
            separatorCSS = `
                        [data-custom-id="${blockId}"]::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background: linear-gradient(to right, ${separatorColor}, ${separatorSecondaryColor || "#ffffff"}, ${separatorColor});
                            border-radius: ${separatorBorderRadiusValues.top}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.right}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.bottom}${separatorBorderRadiusValues.unit} ${separatorBorderRadiusValues.left}${separatorBorderRadiusValues.unit};
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "line-double":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue + separatorHeightValue + 3}px;` : `margin-bottom: ${separatorSpacingValue + separatorHeightValue + 3}px;`}
                        }
                    `;
            break;
          case "line-dashed":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "line-dotted":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "wave":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "dots":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "glow":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "faded":
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
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
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
        }
      }
      let highlightCSS = "";
      if (highlightText && highlightText.trim() !== "") {
        if (highlightType === "background") {
          highlightCSS = `
                    [data-custom-id="${blockId}"] .digiblocks-highlight {
                        background-color: ${highlightColor};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `;
        } else if (highlightType === "color") {
          highlightCSS = `
                    [data-custom-id="${blockId}"] .digiblocks-highlight {
                        color: ${highlightColor};
                    }
                `;
        } else if (highlightType === "underline") {
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
      let linkCSS = "";
      if (linkEnabled) {
        linkCSS = `
                [data-custom-id="${blockId}"] {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                [data-custom-id="${blockId}"]:hover {
                    ${textHoverColor ? `color: ${textHoverColor};` : ""}
                    ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                }
            `;
      }
      return `
            /* Main heading styles */
            [data-custom-id="${blockId}"] {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${align};
                ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                ${paddingCSS}
                ${marginCSS}
                transition: color 0.3s ease, background-color 0.3s ease;
            }

            [data-custom-id="${blockId}"] .digiblocks-heading-text {
                ${typographyCSS}
                ${textShadowCSS}
                color: ${textColor || "inherit"};
                margin: 0;
            }
            
            /* Hover effects */
            [data-custom-id="${blockId}"]:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
            }

            [data-custom-id="${blockId}"]:hover .digiblocks-heading-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
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
    const renderHeadingWithHighlight = () => {
      if (!highlightText || highlightText.trim() === "") {
        return content;
      }
      const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      };
      const parts = content.split(new RegExp(`(${escapeRegExp(highlightText)})`, "g"));
      return parts.map((part, index) => {
        if (part === highlightText) {
          return `<span class="digiblocks-highlight">${part}</span>`;
        }
        return part;
      }).join("");
    };
    const SeparatorStylePreview2 = ({ style, color, secondaryColor, isSelected, onClick }) => {
      const previewStyles = {
        container: {
          display: "inline-block",
          width: "60px",
          height: "40px",
          margin: "5px",
          padding: "5px",
          border: `1px solid ${isSelected ? "#007cba" : "#ddd"}`,
          backgroundColor: isSelected ? "rgba(0,124,186,0.1)" : "white",
          borderRadius: "4px",
          cursor: "pointer",
          position: "relative"
        },
        preview: {
          position: "absolute",
          bottom: "5px",
          left: "5px",
          right: "5px",
          height: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      };
      let previewContent = null;
      switch (style) {
        case "line-solid":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: color, borderRadius: "1px" } });
          break;
        case "line-gradient":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", background: `linear-gradient(to right, ${color}, ${secondaryColor || "#ffffff"}, ${color})`, borderRadius: "1px" } });
          break;
        case "line-double":
          previewContent = /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "2px", backgroundColor: color, borderRadius: "1px", marginBottom: "2px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "2px", backgroundColor: secondaryColor || color, borderRadius: "1px" } }));
          break;
        case "line-dashed":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 6px, transparent 6px, transparent 10px)`,
            borderRadius: "1px"
          } });
          break;
        case "line-dotted":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 2px, transparent 2px, transparent 4px)`,
            borderRadius: "1px"
          } });
          break;
        case "wave":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            backgroundImage: `repeating-linear-gradient(45deg, ${color}, ${color} 2px, transparent 2px, transparent 6px)`,
            borderRadius: "1px"
          } });
          break;
        case "dots":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "5px",
            display: "flex",
            justifyContent: "space-between"
          } }, [...Array(5)].map((_, i) => /* @__PURE__ */ wp.element.createElement("div", { key: i, style: {
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: color
          } })));
          break;
        case "glow":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "50%",
            height: "3px",
            backgroundColor: color,
            boxShadow: `0 0 5px 1px ${color}`,
            borderRadius: "1px"
          } });
          break;
        case "faded":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
            borderRadius: "1px"
          } });
          break;
        default:
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: color, borderRadius: "1px" } });
      }
      return /* @__PURE__ */ wp.element.createElement("div", { style: previewStyles.container, onClick }, /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", fontSize: "8px", marginBottom: "5px" } }, style.replace("line-", "").charAt(0).toUpperCase() + style.replace("line-", "").slice(1)), /* @__PURE__ */ wp.element.createElement("div", { style: previewStyles.preview }, previewContent));
    };
    const renderSeparatorStyleGrid = () => {
      const separatorStyleOptions = [
        { label: __7("Solid Line", "digiblocks"), value: "line-solid" },
        { label: __7("Gradient Line", "digiblocks"), value: "line-gradient" },
        { label: __7("Double Line", "digiblocks"), value: "line-double" },
        { label: __7("Dashed Line", "digiblocks"), value: "line-dashed" },
        { label: __7("Dotted Line", "digiblocks"), value: "line-dotted" },
        { label: __7("Wave", "digiblocks"), value: "wave" },
        { label: __7("Dot Pattern", "digiblocks"), value: "dots" },
        { label: __7("Glow", "digiblocks"), value: "glow" },
        { label: __7("Faded Edges", "digiblocks"), value: "faded" }
      ];
      const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        justifyContent: "center",
        margin: "0 -5px",
        maxHeight: "200px",
        overflow: "auto",
        padding: "4px 0",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9"
      };
      return /* @__PURE__ */ wp.element.createElement("div", { style: containerStyle }, separatorStyleOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
        SeparatorStylePreview2,
        {
          key: option.value,
          style: option.value,
          color: separatorColor,
          secondaryColor: separatorSecondaryColor,
          isSelected: separatorStyle === option.value,
          onClick: () => setAttributes({ separatorStyle: option.value })
        }
      )));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "options",
              name: "heading-settings",
              title: __7("Heading Settings", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl7,
              {
                label: __7("Heading Level", "digiblocks"),
                value: level,
                options: headingLevelOptions,
                onChange: (value) => setAttributes({ level: parseInt(value) }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            !linkEnabled ? /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                className: "components-button width-full is-primary",
                onClick: () => setAttributes({ linkEnabled: true })
              },
              __7("Add Link", "digiblocks")
            ))) : /* @__PURE__ */ wp.element.createElement(
              LinkControl2,
              {
                key: "link-control",
                value: {
                  url: linkUrl,
                  opensInNewTab: linkOpenInNewTab,
                  rel: linkRel
                },
                settings: [
                  {
                    id: "opensInNewTab",
                    title: __7("Open in new tab", "digiblocks")
                  },
                  {
                    id: "rel",
                    title: __7("Add noopener noreferrer", "digiblocks")
                  }
                ],
                onChange: (newLink) => {
                  setAttributes({
                    linkUrl: newLink.url,
                    linkOpenInNewTab: newLink.opensInNewTab,
                    linkRel: newLink.rel
                  });
                },
                onRemove: () => {
                  setAttributes({
                    linkEnabled: false,
                    linkUrl: "",
                    linkOpenInNewTab: false,
                    linkRel: ""
                  });
                },
                suggestionsQuery: {
                  type: "post",
                  subtype: "any"
                },
                forceIsEditingLink: !linkUrl
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "options",
              name: "separator",
              title: __7("Separator", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl7,
              {
                label: __7("Display Separator", "digiblocks"),
                checked: displaySeparator,
                onChange: (value) => setAttributes({ displaySeparator: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            displaySeparator && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              BaseControl4,
              {
                label: __7("Separator Style", "digiblocks"),
                className: "digiblocks-separator-style-selector"
              },
              renderSeparatorStyleGrid()
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl7,
              {
                label: __7("Position", "digiblocks"),
                value: separatorPosition,
                onChange: (value) => setAttributes({ separatorPosition: value }),
                isBlock: true,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption7,
                {
                  value: "bottom",
                  label: __7("Bottom", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption7,
                {
                  value: "top",
                  label: __7("Top", "digiblocks")
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings7,
              {
                title: __7("Separator Colors", "digiblocks"),
                initialOpen: true,
                colorSettings: [
                  {
                    value: separatorColor,
                    onChange: (value) => setAttributes({ separatorColor: value }),
                    label: __7("Primary Color", "digiblocks")
                  },
                  ...separatorStyle === "line-gradient" || separatorStyle === "line-double" ? [{
                    value: separatorSecondaryColor,
                    onChange: (value) => setAttributes({ separatorSecondaryColor: value }),
                    label: __7("Secondary Color", "digiblocks")
                  }] : []
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl7,
              {
                label: __7("Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl7,
                {
                  value: separatorWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    separatorWidth: {
                      ...separatorWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 10,
                  max: 300,
                  step: 1,
                  __nextHasNoMarginBottom: true,
                  __next40pxDefaultSize: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl7,
              {
                label: __7("Height", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl7,
                {
                  value: separatorHeight[localActiveDevice],
                  onChange: (value) => setAttributes({
                    separatorHeight: {
                      ...separatorHeight,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 1,
                  max: 20,
                  step: 1,
                  __nextHasNoMarginBottom: true,
                  __next40pxDefaultSize: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl7,
              {
                label: __7("Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl7,
                {
                  value: separatorSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    separatorSpacing: {
                      ...separatorSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 50,
                  step: 1,
                  __nextHasNoMarginBottom: true,
                  __next40pxDefaultSize: true
                }
              )
            ), ["line-solid", "line-gradient", "line-double", "line-dashed", "line-dotted", "glow", "faded"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl7,
              {
                label: __7("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl7,
                {
                  values: separatorBorderRadius && separatorBorderRadius[localActiveDevice] ? separatorBorderRadius[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    separatorBorderRadius: {
                      ...separatorBorderRadius,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "options",
              name: "text-highlight",
              title: __7("Text Highlight", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "highlight-text" }, __7("Text to Highlight", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "highlight-text",
                value: highlightText || "",
                onChange: (e) => setAttributes({ highlightText: e.target.value }),
                placeholder: __7("Enter text to highlight", "digiblocks")
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __7("The text you enter here will be highlighted in your heading.", "digiblocks"))),
            highlightText && highlightText.trim() !== "" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl7,
              {
                label: __7("Highlight Type", "digiblocks"),
                value: highlightType,
                onChange: (value) => setAttributes({ highlightType: value }),
                isBlock: true,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption7,
                {
                  value: "background",
                  label: __7("Background", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption7,
                {
                  value: "color",
                  label: __7("Text", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption7,
                {
                  value: "underline",
                  label: __7("Underline", "digiblocks")
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings7,
              {
                title: __7("Highlight Color", "digiblocks"),
                initialOpen: true,
                colorSettings: [
                  {
                    value: highlightColor,
                    onChange: (value) => setAttributes({ highlightColor: value }),
                    label: __7("Color", "digiblocks")
                  }
                ]
              }
            ))
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "style",
              name: "colors",
              title: __7("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel6,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => {
                if (tab.name === "normal") {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings7,
                    {
                      title: __7("Color Settings", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: textColor,
                          onChange: (value) => setAttributes({ textColor: value }),
                          label: __7("Text Color", "digiblocks")
                        },
                        {
                          value: backgroundColor,
                          onChange: (value) => setAttributes({ backgroundColor: value }),
                          label: __7("Background Color", "digiblocks")
                        }
                      ]
                    }
                  );
                } else {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings7,
                    {
                      title: __7("Hover Color Settings", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: textHoverColor,
                          onChange: (value) => setAttributes({ textHoverColor: value }),
                          label: __7("Text Hover Color", "digiblocks")
                        },
                        {
                          value: backgroundHoverColor,
                          onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                          label: __7("Background Hover Color", "digiblocks")
                        }
                      ]
                    }
                  );
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "style",
              name: "typo",
              title: __7("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl6,
              {
                label: __7("Typography Settings", "digiblocks"),
                value: typography,
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: 32, tablet: 28, mobile: 24 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "style",
              name: "text-shadow",
              title: __7("Text Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl7,
              {
                label: __7("Enable Text Shadow", "digiblocks"),
                checked: shadowEnabled,
                onChange: (value) => setAttributes({ shadowEnabled: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            shadowEnabled && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings7,
              {
                title: __7("Shadow Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: textShadow.color,
                    onChange: (value) => setAttributes({
                      textShadow: {
                        ...textShadow,
                        color: value
                      }
                    }),
                    label: __7("Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              RangeControl7,
              {
                label: __7("Horizontal Offset", "digiblocks"),
                value: textShadow.horizontal,
                onChange: (value) => setAttributes({
                  textShadow: {
                    ...textShadow,
                    horizontal: value
                  }
                }),
                min: -20,
                max: 20,
                step: 1,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              RangeControl7,
              {
                label: __7("Vertical Offset", "digiblocks"),
                value: textShadow.vertical,
                onChange: (value) => setAttributes({
                  textShadow: {
                    ...textShadow,
                    vertical: value
                  }
                }),
                min: -20,
                max: 20,
                step: 1,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              RangeControl7,
              {
                label: __7("Blur Radius", "digiblocks"),
                value: textShadow.blur,
                onChange: (value) => setAttributes({
                  textShadow: {
                    ...textShadow,
                    blur: value
                  }
                }),
                min: 0,
                max: 20,
                step: 1,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "style",
              name: "spacing",
              title: __7("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl7,
              {
                label: __7("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl7,
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
              ResponsiveControl7,
              {
                label: __7("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl7,
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
            TabPanelBody7,
            {
              tab: "advanced",
              name: "animation",
              title: __7("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl7,
              {
                label: __7("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button7,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __7("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody7,
            {
              tab: "advanced",
              name: "additional",
              title: __7("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __7("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __7(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __7("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __7("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __7("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps13({
      className: `digiblocks-heading align-${align} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    const HeadingTag = `h${level}`;
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls5, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar4,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls7, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel7,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement(HeadingTag, { className: "digiblocks-heading-text" }, /* @__PURE__ */ wp.element.createElement(
      RichText7,
      {
        value: content,
        onChange: (value) => setAttributes({ content: value }),
        placeholder: __7("Add Your Heading", "digiblocks"),
        allowedFormats: ["core/bold", "core/italic"]
      }
    ))));
  };
  var edit_default7 = HeadingEdit;

  // blocks/heading/save.js
  var { useBlockProps: useBlockProps14, RichText: RichText8 } = window.wp.blockEditor;
  var HeadingSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      content,
      level,
      align,
      animation,
      highlightText,
      highlightType,
      displaySeparator,
      separatorStyle,
      linkEnabled,
      linkUrl,
      linkOpenInNewTab,
      linkRel
    } = attributes;
    const blockClasses = [
      "digiblocks-heading",
      `align-${align}`,
      animation !== "none" ? `animate-${animation}` : "",
      displaySeparator ? `has-separator separator-${separatorStyle}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const commonProps = {
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id
    };
    const renderHeadingWithHighlight = () => {
      if (!highlightText || highlightText.trim() === "") {
        return content;
      }
      const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      };
      const parts = content.split(new RegExp(`(${escapeRegExp(highlightText)})`, "g"));
      return parts.map((part, index) => {
        if (part === highlightText) {
          return `<span class="digiblocks-highlight">${part}</span>`;
        }
        return part;
      }).join("");
    };
    const HeadingTag = `h${level}`;
    const processedContent = highlightText && highlightText.trim() !== "" ? /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: renderHeadingWithHighlight() } }) : /* @__PURE__ */ wp.element.createElement(RichText8.Content, { value: content });
    if (linkEnabled && linkUrl) {
      return /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          href: linkUrl,
          target: linkOpenInNewTab ? "_blank" : "_self",
          rel: linkOpenInNewTab ? "noopener noreferrer" : void 0,
          ...commonProps
        },
        /* @__PURE__ */ wp.element.createElement(HeadingTag, { className: "digiblocks-heading-text" }, processedContent)
      );
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...commonProps }, /* @__PURE__ */ wp.element.createElement(HeadingTag, { className: "digiblocks-heading-text" }, processedContent));
  };
  var save_default7 = HeadingSave;

  // blocks/icon/edit.js
  var { __: __8 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps15,
    InspectorControls: InspectorControls8,
    PanelColorSettings: PanelColorSettings8,
    LinkControl: LinkControl3,
    BlockControls: BlockControls6,
    AlignmentToolbar: AlignmentToolbar5
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl8,
    RangeControl: RangeControl8,
    TabPanel: TabPanel7,
    Spinner: Spinner2,
    Button: Button8,
    __experimentalToggleGroupControl: ToggleGroupControl8,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption8
  } = window.wp.components;
  var { useState: useState8, useEffect: useEffect8, useRef: useRef8 } = window.wp.element;
  var { animations: animations8 } = digi.utils;
  var { tabIcons: tabIcons8 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl8, DimensionControl: DimensionControl8, BoxShadowControl: BoxShadowControl7, CustomTabPanel: CustomTabPanel8, TabPanelBody: TabPanelBody8 } = digi.components;
  var IconEdit = ({ attributes, setAttributes, clientId }) => {
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
    const [localActiveDevice, setLocalActiveDevice] = useState8(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState8(false);
    const previewTimeoutRef = useRef8(null);
    useEffect8(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState8("options");
    useEffect8(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!iconMargin) {
        setAttributes({
          iconMargin: {
            desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
            tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
            mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
          }
        });
      }
    }, [clientId, iconMargin, setAttributes]);
    useEffect8(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    const [componentsLoaded, setComponentsLoaded] = useState8(false);
    useEffect8(() => {
      const checkComponents = () => {
        if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
          setComponentsLoaded(true);
          return true;
        }
        return false;
      };
      if (!checkComponents()) {
        const timeout = setTimeout(() => {
          if (checkComponents()) {
            clearTimeout(timeout);
          }
        }, 500);
        return () => clearTimeout(timeout);
      }
    }, []);
    const setIconValue = (newIcon) => {
      setAttributes({ iconValue: newIcon });
    };
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations8[animation]) {
        const originalKeyframes = animations8[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect8(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const borderStyleOptions = [
      { label: __8("Default", "digiblocks"), value: "default" },
      { label: __8("None", "digiblocks"), value: "none" },
      { label: __8("Solid", "digiblocks"), value: "solid" },
      { label: __8("Dotted", "digiblocks"), value: "dotted" },
      { label: __8("Dashed", "digiblocks"), value: "dashed" },
      { label: __8("Double", "digiblocks"), value: "double" },
      { label: __8("Groove", "digiblocks"), value: "groove" },
      { label: __8("Inset", "digiblocks"), value: "inset" },
      { label: __8("Outset", "digiblocks"), value: "outset" },
      { label: __8("Ridge", "digiblocks"), value: "ridge" }
    ];
    const hoverEffectOptions = [
      { label: __8("None", "digiblocks"), value: "none" },
      { label: __8("Lift", "digiblocks"), value: "lift" },
      { label: __8("Scale", "digiblocks"), value: "scale" },
      { label: __8("Glow", "digiblocks"), value: "glow" },
      { label: __8("Spin", "digiblocks"), value: "spin" },
      { label: __8("Pulse", "digiblocks"), value: "pulse" },
      { label: __8("Shake", "digiblocks"), value: "shake" }
    ];
    const animationOptions = [
      { label: __8("None", "digiblocks"), value: "none" },
      ...Object.keys(animations8).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __8("Options", "digiblocks"),
        icon: tabIcons8.optionsIcon
      },
      {
        name: "style",
        title: __8("Style", "digiblocks"),
        icon: tabIcons8.styleIcon
      },
      {
        name: "advanced",
        title: __8("Advanced", "digiblocks"),
        icon: tabIcons8.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __8("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __8("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      let containerStyles = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
        const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
        const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" };
        containerStyles += `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
            `;
      }
      let boxShadowCSS = "";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let iconCSS = "";
      let iconHoverCSS = "";
      let iconTransformCSS = "";
      if (iconValue && iconValue.svg) {
        if (iconBackgroundColor) {
          iconCSS += `background-color: ${iconBackgroundColor};`;
        }
        if (iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none") {
          const currentIconBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] ? iconBorderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
          const currentIconBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] ? iconBorderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
          iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || "#e0e0e0"};
                    border-width: ${currentIconBorderWidth.top}${currentIconBorderWidth.unit} ${currentIconBorderWidth.right}${currentIconBorderWidth.unit} ${currentIconBorderWidth.bottom}${currentIconBorderWidth.unit} ${currentIconBorderWidth.left}${currentIconBorderWidth.unit};
                    border-radius: ${currentIconBorderRadius.top}${currentIconBorderRadius.unit} ${currentIconBorderRadius.right}${currentIconBorderRadius.unit} ${currentIconBorderRadius.bottom}${currentIconBorderRadius.unit} ${currentIconBorderRadius.left}${currentIconBorderRadius.unit};
                `;
        }
        if (iconPadding && iconPadding[activeDevice]) {
          iconCSS += `padding: ${iconPadding[activeDevice].top}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].right}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].bottom}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].left}${iconPadding[activeDevice].unit};`;
        }
        if (iconHoverColor) {
          iconHoverCSS += `fill: ${iconHoverColor} !important; color: ${iconHoverColor} !important;`;
        }
        if (iconHoverBackgroundColor) {
          iconHoverCSS += `background-color: ${iconHoverBackgroundColor};`;
        }
        if (iconHoverBorderColor) {
          iconHoverCSS += `border-color: ${iconHoverBorderColor};`;
        }
        const transformProps = [];
        if (rotateIcon) {
          transformProps.push(`rotate(${rotateIcon}deg)`);
        }
        if (flipHorizontal) {
          transformProps.push("scaleX(-1)");
        }
        if (flipVertical) {
          transformProps.push("scaleY(-1)");
        }
        if (transformProps.length > 0) {
          iconTransformCSS = `transform: ${transformProps.join(" ")};`;
        }
      }
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      if (hoverEffect === "lift") {
        hoverCSS += "transform: translateY(-10px);";
      } else if (hoverEffect === "scale") {
        hoverCSS += "transform: scale(1.05);";
      } else if (hoverEffect === "glow") {
        hoverCSS += "filter: brightness(1.1);";
      } else if (hoverEffect === "spin") {
        hoverCSS += "animation: digiblocks-icon-spin 2s linear infinite;";
      } else if (hoverEffect === "pulse") {
        hoverCSS += "animation: digiblocks-icon-pulse 1.5s ease-in-out infinite;";
      } else if (hoverEffect === "shake") {
        hoverCSS += "animation: digiblocks-icon-shake 0.5s ease-in-out infinite;";
      }
      let linkCSS = "";
      if (linkEnabled) {
        linkCSS = `
                cursor: pointer;
                text-decoration: none;
            `;
      }
      let marginCSS = "";
      if (iconMargin && iconMargin[activeDevice]) {
        marginCSS = `margin: ${iconMargin[activeDevice].top}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].right}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].bottom}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].left}${iconMargin[activeDevice].unit};`;
      }
      return `
            /* Icon Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                display: flex;
				justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
                align-items: center;
                background-color: ${backgroundColor || "transparent"};
                ${boxShadowCSS}
                ${containerStyles}
                transition: all 0.3s ease;
                ${linkEnabled ? linkCSS : ""}
                ${marginCSS}
            }
            
            /* Hover effects */
            [data-custom-id="${blockId}"]:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${hoverCSS}
            }
            
            /* Icon styles */
            [data-custom-id="${blockId}"] .digiblocks-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${iconCSS}
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-icon span {
                display: flex;
                ${iconTransformCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-icon svg {
                width: ${iconSize[activeDevice]}px;
                height: auto;
                fill: ${iconColor || "inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-icon {
                ${iconHoverCSS}
            }
            
            [data-custom-id="${blockId}"]:hover .digiblocks-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ""}
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
    const FontAwesomeControl3 = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const renderIcon = () => {
      if (!iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon" }, /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: iconValue.svg
          }
        }
      ));
    };
    const renderIconTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings8,
          {
            title: __8(
              "Icon Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconColor,
                onChange: (value) => setAttributes({
                  iconColor: value
                }),
                label: __8(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: iconBackgroundColor,
                onChange: (value) => setAttributes({
                  iconBackgroundColor: value
                }),
                label: __8(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          SelectControl8,
          {
            label: __8("Border Style", "digiblocks"),
            value: iconBorderStyle || "default",
            options: borderStyleOptions,
            onChange: (value) => {
              if (value !== "default" && value !== "none" && (iconBorderStyle === "default" || iconBorderStyle === "none" || !iconBorderStyle)) {
                if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                  setAttributes({
                    iconBorderWidth: {
                      desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                      tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                      mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                    }
                  });
                }
                if (!iconBorderRadius || Object.keys(iconBorderRadius).length === 0) {
                  setAttributes({
                    iconBorderRadius: {
                      desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                      tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                      mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
                    }
                  });
                }
              }
              setAttributes({
                iconBorderStyle: value
              });
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings8,
          {
            title: __8(
              "Border Color",
              "digiblocks"
            ),
            enableAlpha: true,
            colorSettings: [
              {
                value: iconBorderColor,
                onChange: (value) => setAttributes({
                  iconBorderColor: value
                }),
                label: __8(
                  "Border Color",
                  "digiblocks"
                )
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl8,
          {
            label: __8("Border Width", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl8,
            {
              values: iconBorderWidth && iconBorderWidth[localActiveDevice] ? iconBorderWidth[localActiveDevice] : {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconBorderWidth: {
                  ...iconBorderWidth,
                  [localActiveDevice]: value
                }
              })
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl8,
          {
            label: __8("Border Radius", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl8,
            {
              values: iconBorderRadius && iconBorderRadius[localActiveDevice] ? iconBorderRadius[localActiveDevice] : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconBorderRadius: {
                  ...iconBorderRadius,
                  [localActiveDevice]: value
                }
              }),
              units: [
                { label: "px", value: "px" },
                { label: "%", value: "%" }
              ]
            }
          )
        )), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl8,
          {
            label: __8("Padding", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl8,
            {
              values: iconPadding && iconPadding[localActiveDevice] ? iconPadding[localActiveDevice] : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconPadding: {
                  ...iconPadding,
                  [localActiveDevice]: value
                }
              })
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl8,
          {
            label: __8("Margin", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl8,
            {
              values: iconMargin && iconMargin[localActiveDevice] ? iconMargin[localActiveDevice] : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconMargin: {
                  ...iconMargin || {
                    desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                    tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                    mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
                  },
                  [localActiveDevice]: value
                }
              })
            }
          )
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings8,
          {
            title: __8(
              "Icon Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconHoverColor,
                onChange: (value) => setAttributes({
                  iconHoverColor: value
                }),
                label: __8(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: iconHoverBackgroundColor,
                onChange: (value) => setAttributes({
                  iconHoverBackgroundColor: value
                }),
                label: __8(
                  "Background Color",
                  "digiblocks"
                )
              },
              {
                value: iconHoverBorderColor,
                onChange: (value) => setAttributes({
                  iconHoverBorderColor: value
                }),
                label: __8(
                  "Border Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderContainerTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings8,
          {
            title: __8(
              "Container Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({
                  backgroundColor: value
                }),
                label: __8(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings8,
          {
            title: __8(
              "Container Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: backgroundHoverColor,
                onChange: (value) => setAttributes({
                  backgroundHoverColor: value
                }),
                label: __8(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "2rem" } }, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement(Spinner2, null), /* @__PURE__ */ wp.element.createElement("p", null, __8("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
            FontAwesomeControl3,
            {
              label: __8("Select Icon", "digiblocks"),
              value: iconValue,
              onChange: setIconValue
            }
          ), iconValue && componentsLoaded && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px", padding: "10px", background: "#f0f0f1", borderRadius: "3px" } }, /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __8("Selected Icon:", "digiblocks")), " ", iconValue.name), /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __8("Style:", "digiblocks")), " ", iconValue.style), iconValue.categories && iconValue.categories.length > 0 && /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __8("Categories:", "digiblocks")), " ", iconValue.categories.join(", "))))), /* @__PURE__ */ wp.element.createElement("div", { className: "icon-transform-controls" }, /* @__PURE__ */ wp.element.createElement(
            RangeControl8,
            {
              label: __8("Rotate", "digiblocks"),
              value: rotateIcon || 0,
              onChange: (value) => setAttributes({ rotateIcon: value }),
              min: 0,
              max: 360,
              step: 1,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-toggle-controls", style: { display: "flex", justifyContent: "space-between", marginBottom: "20px" } }, /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl8,
            {
              label: __8("Flip Horizontal", "digiblocks"),
              value: flipHorizontal ? "yes" : "no",
              onChange: (value) => setAttributes({ flipHorizontal: value === "yes" }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption8, { value: "no", label: __8("Off", "digiblocks") }),
            /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption8, { value: "yes", label: __8("On", "digiblocks") })
          )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-toggle-controls", style: { display: "flex", justifyContent: "space-between", marginBottom: "20px" } }, /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl8,
            {
              label: __8("Flip Vertical", "digiblocks"),
              value: flipVertical ? "yes" : "no",
              onChange: (value) => setAttributes({ flipVertical: value === "yes" }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption8, { value: "no", label: __8("Off", "digiblocks") }),
            /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption8, { value: "yes", label: __8("On", "digiblocks") })
          ))), !linkEnabled ? /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement(
            "button",
            {
              className: "components-button width-full is-primary",
              onClick: () => setAttributes({ linkEnabled: true })
            },
            __8("Add Link", "digiblocks")
          ))) : /* @__PURE__ */ wp.element.createElement(
            LinkControl3,
            {
              key: "link-control",
              value: {
                url: linkUrl,
                opensInNewTab: linkOpenInNewTab,
                rel: linkRel
              },
              settings: [
                {
                  id: "opensInNewTab",
                  title: __8("Open in new tab", "digiblocks")
                },
                {
                  id: "rel",
                  title: __8("Add noopener noreferrer", "digiblocks")
                }
              ],
              onChange: (newLink) => {
                setAttributes({
                  linkUrl: newLink.url,
                  linkOpenInNewTab: newLink.opensInNewTab,
                  linkRel: newLink.rel
                });
              },
              onRemove: () => {
                setAttributes({
                  linkEnabled: false,
                  linkUrl: "",
                  linkOpenInNewTab: false,
                  linkRel: ""
                });
              },
              suggestionsQuery: {
                type: "post",
                subtype: "any"
              },
              forceIsEditingLink: !linkUrl
            }
          )));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody8,
            {
              tab: "style",
              name: "icon",
              title: __8("Icon", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl8,
              {
                label: __8(
                  "Icon Size",
                  "digiblocks"
                )
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl8,
                {
                  value: iconSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSize: {
                      ...iconSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 8,
                  max: 500,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              TabPanel7,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderIconTabContent(tab.name)
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody8,
            {
              tab: "style",
              name: "container",
              title: __8("Container", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel7,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderContainerTabContent(tab.name)
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl8,
              {
                label: __8("Border Style", "digiblocks"),
                value: borderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "default" && value !== "none" && (borderStyle === "default" || borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({
                    borderStyle: value
                  });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings8,
              {
                title: __8(
                  "Border Color",
                  "digiblocks"
                ),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({
                      borderColor: value
                    }),
                    label: __8(
                      "Border Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl8,
              {
                label: __8("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl8,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl8,
              {
                label: __8("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl8,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
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
              SelectControl8,
              {
                label: __8(
                  "Hover Effect",
                  "digiblocks"
                ),
                value: hoverEffect,
                options: hoverEffectOptions,
                onChange: (value) => setAttributes({
                  hoverEffect: value
                }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody8,
            {
              tab: "style",
              name: "shadow",
              title: __8("Box Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl7,
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
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody8,
            {
              tab: "advanced",
              name: "animation",
              title: __8("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl8,
              {
                label: __8(
                  "Animation Effect",
                  "digiblocks"
                ),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({
                  animation: value
                }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button8,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __8("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody8,
            {
              tab: "advanced",
              name: "additional",
              title: __8("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __8("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __8(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __8("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __8("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __8("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps15({
      className: `digiblocks-icon align-${align} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls6, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar5,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls8, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel8,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, renderIcon()));
  };
  var edit_default8 = IconEdit;

  // blocks/icon/save.js
  var { useBlockProps: useBlockProps16 } = window.wp.blockEditor;
  var IconSave = ({ attributes }) => {
    const {
      id,
      iconValue,
      align,
      animation,
      hoverEffect,
      anchor,
      customClasses,
      linkEnabled,
      linkUrl,
      linkOpenInNewTab,
      linkRel,
      rotateIcon,
      flipHorizontal,
      flipVertical
    } = attributes;
    const blockClasses = [
      "digiblocks-icon",
      `align-${align}`,
      animation !== "none" ? `animate-${animation}` : "",
      hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
      customClasses || ""
      // Add custom classes if they exist
    ].filter(Boolean).join(" ");
    const commonProps = {
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id
    };
    const renderIcon = () => {
      if (!iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: iconValue.svg } }));
    };
    if (linkEnabled && linkUrl) {
      return /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          href: linkUrl,
          target: linkOpenInNewTab ? "_blank" : "_self",
          rel: linkOpenInNewTab ? "noopener noreferrer" : void 0,
          ...commonProps
        },
        renderIcon()
      );
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...commonProps }, renderIcon());
  };
  var save_default8 = IconSave;

  // blocks/icon-box/edit.js
  var { __: __9 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps17,
    RichText: RichText9,
    InspectorControls: InspectorControls9,
    PanelColorSettings: PanelColorSettings9,
    LinkControl: LinkControl4,
    BlockControls: BlockControls7,
    AlignmentToolbar: AlignmentToolbar6
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl9,
    RangeControl: RangeControl9,
    TabPanel: TabPanel8,
    Spinner: Spinner3,
    Button: Button9,
    __experimentalToggleGroupControl: ToggleGroupControl9,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption9
  } = window.wp.components;
  var { useState: useState9, useEffect: useEffect9, useRef: useRef9 } = window.wp.element;
  var { animations: animations9 } = digi.utils;
  var { tabIcons: tabIcons9 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl9, DimensionControl: DimensionControl9, TypographyControl: TypographyControl7, BoxShadowControl: BoxShadowControl8, CustomTabPanel: CustomTabPanel9, TabPanelBody: TabPanelBody9 } = digi.components;
  var IconBoxEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      iconValue,
      title,
      content,
      titleColor,
      titleHoverColor,
      textColor,
      textHoverColor,
      backgroundColor,
      backgroundHoverColor,
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
      titleTypography,
      contentTypography,
      padding,
      margin,
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
      linkRel
    } = attributes;
    const [localActiveDevice, setLocalActiveDevice] = useState9(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState9(false);
    const previewTimeoutRef = useRef9(null);
    useEffect9(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState9("options");
    useEffect9(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!iconMargin) {
        setAttributes({
          iconMargin: {
            desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
            tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
            mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
          }
        });
      }
    }, [clientId, iconMargin, setAttributes]);
    useEffect9(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    const [componentsLoaded, setComponentsLoaded] = useState9(false);
    useEffect9(() => {
      const checkComponents = () => {
        if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
          setComponentsLoaded(true);
          return true;
        }
        return false;
      };
      if (!checkComponents()) {
        const timeout = setTimeout(() => {
          if (checkComponents()) {
            clearTimeout(timeout);
          }
        }, 500);
        return () => clearTimeout(timeout);
      }
    }, []);
    const setIconValue = (newIcon) => {
      setAttributes({ iconValue: newIcon });
    };
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations9[animation]) {
        const originalKeyframes = animations9[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
				${updatedKeyframes}
				
				[data-custom-id="${id}"] {
					animation: none; /* Reset first */
				}
			`;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
				[data-custom-id="${id}"] {
					animation: ${uniqueAnimName} 1.5s forwards !important;
				}
			`;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect9(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const borderStyleOptions = [
      { label: __9("Default", "digiblocks"), value: "default" },
      { label: __9("None", "digiblocks"), value: "none" },
      { label: __9("Solid", "digiblocks"), value: "solid" },
      { label: __9("Dotted", "digiblocks"), value: "dotted" },
      { label: __9("Dashed", "digiblocks"), value: "dashed" },
      { label: __9("Double", "digiblocks"), value: "double" },
      { label: __9("Groove", "digiblocks"), value: "groove" },
      { label: __9("Inset", "digiblocks"), value: "inset" },
      { label: __9("Outset", "digiblocks"), value: "outset" },
      { label: __9("Ridge", "digiblocks"), value: "ridge" }
    ];
    const hoverEffectOptions = [
      { label: __9("None", "digiblocks"), value: "none" },
      { label: __9("Lift", "digiblocks"), value: "lift" },
      { label: __9("Scale", "digiblocks"), value: "scale" },
      { label: __9("Glow", "digiblocks"), value: "glow" }
    ];
    const animationOptions = [
      { label: __9("None", "digiblocks"), value: "none" },
      ...Object.keys(animations9).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __9("Options", "digiblocks"),
        icon: tabIcons9.optionsIcon
      },
      {
        name: "style",
        title: __9("Style", "digiblocks"),
        icon: tabIcons9.styleIcon
      },
      {
        name: "advanced",
        title: __9("Advanced", "digiblocks"),
        icon: tabIcons9.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __9("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __9("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
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
      let iconCSS = "";
      let iconHoverCSS = "";
      let iconMarginCSS = "";
      if (iconValue && iconValue.svg) {
        if (iconBackgroundColor) {
          iconCSS += `background-color: ${iconBackgroundColor};`;
        }
        if (iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none") {
          const currentIconBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] ? iconBorderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
          const currentIconBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] ? iconBorderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
          iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || "#e0e0e0"};
                    border-width: ${currentIconBorderWidth.top}${currentIconBorderWidth.unit} ${currentIconBorderWidth.right}${currentIconBorderWidth.unit} ${currentIconBorderWidth.bottom}${currentIconBorderWidth.unit} ${currentIconBorderWidth.left}${currentIconBorderWidth.unit};
                    border-radius: ${currentIconBorderRadius.top}${currentIconBorderRadius.unit} ${currentIconBorderRadius.right}${currentIconBorderRadius.unit} ${currentIconBorderRadius.bottom}${currentIconBorderRadius.unit} ${currentIconBorderRadius.left}${currentIconBorderRadius.unit};
                `;
        }
        if (iconPadding && iconPadding[activeDevice]) {
          iconCSS += `padding: ${iconPadding[activeDevice].top}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].right}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].bottom}${iconPadding[activeDevice].unit} ${iconPadding[activeDevice].left}${iconPadding[activeDevice].unit};`;
        }
        if (iconHoverColor) {
          iconHoverCSS += `fill: ${iconHoverColor} !important; color: ${iconHoverColor} !important;`;
        }
        if (iconHoverBackgroundColor) {
          iconHoverCSS += `background-color: ${iconHoverBackgroundColor};`;
        }
        if (iconHoverBorderColor) {
          iconHoverCSS += `border-color: ${iconHoverBorderColor};`;
        }
        if (iconMargin && iconMargin[activeDevice]) {
          iconMarginCSS = `${iconMargin[activeDevice].top}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].right}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].bottom}${iconMargin[activeDevice].unit} ${iconMargin[activeDevice].left}${iconMargin[activeDevice].unit}`;
        } else {
          const defaultBottom = activeDevice === "desktop" ? 20 : activeDevice === "tablet" ? 15 : 10;
          iconMarginCSS = `0px 0px ${defaultBottom}px 0px`;
        }
      }
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      if (hoverEffect === "lift") {
        hoverCSS += "transform: translateY(-10px);";
      } else if (hoverEffect === "scale") {
        hoverCSS += "transform: scale(1.05);";
      } else if (hoverEffect === "glow") {
        hoverCSS += "filter: brightness(1.1);";
      }
      let linkCSS = "";
      if (linkEnabled) {
        linkCSS = `
                cursor: pointer;
                text-decoration: none;
            `;
      }
      return `
            /* Main block styles */
            [data-custom-id="${blockId}"] {
                background-color: ${backgroundColor || "transparent"};
                ${boxShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                transition: all 0.3s ease;
                ${linkEnabled ? linkCSS : ""}
            }
            
            /* Hover effects */
            [data-custom-id="${blockId}"]:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${hoverCSS}
            }
            
            ${iconValue && iconValue.svg ? `
            /* Icon styles */
            [data-custom-id="${blockId}"] .digiblocks-icon-box-icon {
                margin: ${iconMarginCSS};
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${iconCSS}
                transition: all 0.3s ease;
            }

            [data-custom-id="${blockId}"] .digiblocks-icon-box-icon span {
                display: flex;
            }

            [data-custom-id="${blockId}"] .digiblocks-icon-box-icon svg {
                width: ${iconSize[activeDevice]}px;
                height: 100%;
                fill: ${iconColor || "inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-icon-box-icon {
                ${iconHoverCSS}
            }
            
            [data-custom-id="${blockId}"]:hover .digiblocks-icon-box-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ""}
            }
            ` : ""}
            
            /* Title styles */
            [data-custom-id="${blockId}"] .digiblocks-icon-box-title {
                color: ${titleColor || "inherit"};
                margin-bottom: 10px;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-icon-box-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            /* Content styles */
            [data-custom-id="${blockId}"] .digiblocks-icon-box-text {
                color: ${textColor || "inherit"};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            [data-custom-id="${blockId}"]:hover .digiblocks-icon-box-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
            }
        `;
    };
    const FontAwesomeControl3 = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const renderIcon = () => {
      if (!iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-icon" }, /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: iconValue.svg
          }
        }
      ));
    };
    const renderIconTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings9,
          {
            title: __9(
              "Icon Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconColor,
                onChange: (value) => setAttributes({
                  iconColor: value
                }),
                label: __9(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: iconBackgroundColor,
                onChange: (value) => setAttributes({
                  iconBackgroundColor: value
                }),
                label: __9(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          SelectControl9,
          {
            label: __9("Border Style", "digiblocks"),
            value: iconBorderStyle || "default",
            options: borderStyleOptions,
            onChange: (value) => {
              if (value !== "default" && value !== "none" && (iconBorderStyle === "default" || iconBorderStyle === "none" || !iconBorderStyle)) {
                if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                  setAttributes({
                    iconBorderWidth: {
                      desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                      tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                      mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                    }
                  });
                }
                if (!iconBorderRadius || Object.keys(iconBorderRadius).length === 0) {
                  setAttributes({
                    iconBorderRadius: {
                      desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                      tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                      mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
                    }
                  });
                }
              }
              setAttributes({
                iconBorderStyle: value
              });
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings9,
          {
            title: __9(
              "Border Color",
              "digiblocks"
            ),
            enableAlpha: true,
            colorSettings: [
              {
                value: iconBorderColor,
                onChange: (value) => setAttributes({
                  iconBorderColor: value
                }),
                label: __9(
                  "Border Color",
                  "digiblocks"
                )
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl9,
          {
            label: __9("Border Width", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl9,
            {
              values: iconBorderWidth && iconBorderWidth[localActiveDevice] ? iconBorderWidth[localActiveDevice] : {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconBorderWidth: {
                  ...iconBorderWidth,
                  [localActiveDevice]: value
                }
              })
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl9,
          {
            label: __9("Border Radius", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl9,
            {
              values: iconBorderRadius && iconBorderRadius[localActiveDevice] ? iconBorderRadius[localActiveDevice] : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconBorderRadius: {
                  ...iconBorderRadius,
                  [localActiveDevice]: value
                }
              }),
              units: [
                { label: "px", value: "px" },
                { label: "%", value: "%" }
              ]
            }
          )
        )), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl9,
          {
            label: __9("Padding", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl9,
            {
              values: iconPadding && iconPadding[localActiveDevice] ? iconPadding[localActiveDevice] : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconPadding: {
                  ...iconPadding,
                  [localActiveDevice]: value
                }
              })
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl9,
          {
            label: __9("Margin", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl9,
            {
              values: iconMargin && iconMargin[localActiveDevice] ? iconMargin[localActiveDevice] : {
                top: 0,
                right: 0,
                bottom: localActiveDevice === "desktop" ? 20 : localActiveDevice === "tablet" ? 15 : 10,
                left: 0,
                unit: "px"
              },
              onChange: (value) => setAttributes({
                iconMargin: {
                  ...iconMargin || {
                    desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
                    tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
                    mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
                  },
                  [localActiveDevice]: value
                }
              })
            }
          )
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings9,
          {
            title: __9(
              "Icon Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconHoverColor,
                onChange: (value) => setAttributes({
                  iconHoverColor: value
                }),
                label: __9(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: iconHoverBackgroundColor,
                onChange: (value) => setAttributes({
                  iconHoverBackgroundColor: value
                }),
                label: __9(
                  "Background Color",
                  "digiblocks"
                )
              },
              {
                value: iconHoverBorderColor,
                onChange: (value) => setAttributes({
                  iconHoverBorderColor: value
                }),
                label: __9(
                  "Border Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderColorTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings9,
          {
            title: __9(
              "Color Settings",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleColor,
                onChange: (value) => setAttributes({
                  titleColor: value
                }),
                label: __9(
                  "Title Color",
                  "digiblocks"
                )
              },
              {
                value: textColor,
                onChange: (value) => setAttributes({
                  textColor: value
                }),
                label: __9(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({
                  backgroundColor: value
                }),
                label: __9(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings9,
          {
            title: __9(
              "Hover Color Settings",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleHoverColor,
                onChange: (value) => setAttributes({
                  titleHoverColor: value
                }),
                label: __9(
                  "Title Color",
                  "digiblocks"
                )
              },
              {
                value: textHoverColor,
                onChange: (value) => setAttributes({
                  textHoverColor: value
                }),
                label: __9(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundHoverColor,
                onChange: (value) => setAttributes({
                  backgroundHoverColor: value
                }),
                label: __9(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "2rem" } }, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement(Spinner3, null), /* @__PURE__ */ wp.element.createElement("p", null, __9("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
            FontAwesomeControl3,
            {
              label: __9("Select Icon", "digiblocks"),
              value: iconValue,
              onChange: setIconValue
            }
          ), iconValue && componentsLoaded && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px", padding: "10px", background: "#f0f0f1", borderRadius: "3px" } }, /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __9("Selected Icon:", "digiblocks")), " ", iconValue.name), /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __9("Style:", "digiblocks")), " ", iconValue.style), iconValue.categories && iconValue.categories.length > 0 && /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __9("Categories:", "digiblocks")), " ", iconValue.categories.join(", "))))), !linkEnabled ? /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement(
            "button",
            {
              className: "components-button width-full is-primary",
              onClick: () => setAttributes({ linkEnabled: true })
            },
            __9("Add Link", "digiblocks")
          ))) : /* @__PURE__ */ wp.element.createElement(
            LinkControl4,
            {
              key: "link-control",
              value: {
                url: linkUrl,
                opensInNewTab: linkOpenInNewTab,
                rel: linkRel
              },
              settings: [
                {
                  id: "opensInNewTab",
                  title: __9("Open in new tab", "digiblocks")
                },
                {
                  id: "rel",
                  title: __9("Add noopener noreferrer", "digiblocks")
                }
              ],
              onChange: (newLink) => {
                setAttributes({
                  linkUrl: newLink.url,
                  linkOpenInNewTab: newLink.opensInNewTab,
                  linkRel: newLink.rel
                });
              },
              onRemove: () => {
                setAttributes({
                  linkEnabled: false,
                  linkUrl: "",
                  linkOpenInNewTab: false,
                  linkRel: ""
                });
              },
              suggestionsQuery: {
                type: "post",
                subtype: "any"
              },
              forceIsEditingLink: !linkUrl
            }
          )));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody9,
            {
              tab: "style",
              name: "colors",
              title: __9("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel8,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderColorTabContent(tab.name)
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody9,
            {
              tab: "style",
              name: "typo",
              title: __9("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl7,
              {
                label: __9(
                  "Title Typography",
                  "digiblocks"
                ),
                value: titleTypography,
                onChange: (value) => setAttributes({
                  titleTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl7,
              {
                label: __9(
                  "Content Typography",
                  "digiblocks"
                ),
                value: contentTypography,
                onChange: (value) => setAttributes({
                  contentTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody9,
            {
              tab: "style",
              name: "icon",
              title: __9("Icon", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl9,
              {
                label: __9(
                  "Icon Size",
                  "digiblocks"
                )
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl9,
                {
                  value: iconSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSize: {
                      ...iconSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 16,
                  max: 500,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              TabPanel8,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderIconTabContent(tab.name)
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody9,
            {
              tab: "style",
              name: "box-style",
              title: __9("Box Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl9,
              {
                label: __9("Border Style", "digiblocks"),
                value: borderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "default" && value !== "none" && (borderStyle === "default" || borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({
                    borderStyle: value
                  });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings9,
              {
                title: __9(
                  "Border Color",
                  "digiblocks"
                ),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({
                      borderColor: value
                    }),
                    label: __9(
                      "Border Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl9,
              {
                label: __9("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl9,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl9,
              {
                label: __9("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl9,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
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
              SelectControl9,
              {
                label: __9(
                  "Hover Effect",
                  "digiblocks"
                ),
                value: hoverEffect,
                options: hoverEffectOptions,
                onChange: (value) => setAttributes({
                  hoverEffect: value
                }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody9,
            {
              tab: "style",
              name: "shadow",
              title: __9("Box Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl8,
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
            TabPanelBody9,
            {
              tab: "style",
              name: "spacing",
              title: __9("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl9,
              {
                label: __9("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl9,
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
              ResponsiveControl9,
              {
                label: __9("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl9,
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
            TabPanelBody9,
            {
              tab: "advanced",
              name: "animation",
              title: __9("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl9,
              {
                label: __9(
                  "Animation Effect",
                  "digiblocks"
                ),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({
                  animation: value
                }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button9,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __9("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody9,
            {
              tab: "advanced",
              name: "additional",
              title: __9("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __9("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __9(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __9("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __9("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __9("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps17({
      className: `digiblocks-icon-box align-${align} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    const boxContent = /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-content" }, renderIcon(), /* @__PURE__ */ wp.element.createElement(
      RichText9,
      {
        tagName: "h3",
        className: "digiblocks-icon-box-title",
        value: title,
        onChange: (value) => setAttributes({ title: value }),
        placeholder: __9("Feature Title", "digiblocks")
      }
    ), /* @__PURE__ */ wp.element.createElement(
      RichText9,
      {
        tagName: "p",
        className: "digiblocks-icon-box-text",
        value: content,
        onChange: (value) => setAttributes({ content: value }),
        placeholder: __9(
          "Add your feature description here.",
          "digiblocks"
        )
      }
    ));
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls7, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar6,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls9, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel9,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, boxContent));
  };
  var edit_default9 = IconBoxEdit;

  // blocks/icon-box/save.js
  var { useBlockProps: useBlockProps18, RichText: RichText10 } = window.wp.blockEditor;
  var IconBoxSave = ({ attributes }) => {
    const {
      id,
      iconValue,
      title,
      content,
      align,
      animation,
      hoverEffect,
      anchor,
      customClasses,
      linkEnabled,
      linkUrl,
      linkOpenInNewTab,
      linkRel
    } = attributes;
    const blockClasses = [
      "digiblocks-icon-box",
      `align-${align}`,
      animation !== "none" ? `animate-${animation}` : "",
      hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
      customClasses || ""
      // Add custom classes if they exist
    ].filter(Boolean).join(" ");
    const commonProps = {
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id
    };
    const boxContent = /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-content" }, iconValue && iconValue.svg && iconValue.svg.trim() !== "" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: iconValue.svg } })), /* @__PURE__ */ wp.element.createElement(
      RichText10.Content,
      {
        tagName: "h3",
        className: "digiblocks-icon-box-title",
        value: title
      }
    ), /* @__PURE__ */ wp.element.createElement(
      RichText10.Content,
      {
        tagName: "p",
        className: "digiblocks-icon-box-text",
        value: content
      }
    ));
    if (linkEnabled && linkUrl) {
      return /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          href: linkUrl,
          target: linkOpenInNewTab ? "_blank" : "_self",
          rel: linkOpenInNewTab ? "noopener noreferrer" : void 0,
          ...commonProps
        },
        boxContent
      );
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...commonProps }, boxContent);
  };
  var save_default9 = IconBoxSave;

  // blocks/separator/edit.js
  var { __: __10 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps19,
    InspectorControls: InspectorControls10,
    PanelColorSettings: PanelColorSettings10,
    BlockControls: BlockControls8,
    AlignmentToolbar: AlignmentToolbar7
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl10,
    RangeControl: RangeControl10,
    Button: Button10,
    TextControl: TextControl6,
    __experimentalToggleGroupControl: ToggleGroupControl10,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption10,
    BaseControl: BaseControl5
  } = window.wp.components;
  var { useState: useState10, useEffect: useEffect10, useRef: useRef10 } = window.wp.element;
  var { animations: animations10 } = digi.utils;
  var { tabIcons: tabIcons10 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl10, TypographyControl: TypographyControl8, CustomTabPanel: CustomTabPanel10, TabPanelBody: TabPanelBody10 } = digi.components;
  var SeparatorStylePreview = ({ style, primaryColor, secondaryColor, isSelected, onClick }) => {
    const containerStyle = {
      display: "inline-flex",
      flexDirection: "column",
      width: "60px",
      height: "60px",
      margin: "5px",
      border: `1px solid ${isSelected ? "#007cba" : "#ddd"}`,
      backgroundColor: isSelected ? "rgba(0,124,186,0.1)" : "white",
      borderRadius: "4px",
      cursor: "pointer",
      overflow: "hidden",
      transition: "all 0.2s ease"
    };
    const labelStyle = {
      textAlign: "center",
      fontSize: "10px",
      padding: "3px 0",
      fontWeight: isSelected ? "500" : "normal",
      borderBottom: `1px solid ${isSelected ? "#e0e0e0" : "transparent"}`,
      backgroundColor: isSelected ? "rgba(0,124,186,0.05)" : "transparent"
    };
    const previewStyle = {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "8px"
    };
    let previewContent = null;
    switch (style) {
      case "line":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: primaryColor, borderRadius: "1px" } });
        break;
      case "dashed":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "2px",
          backgroundImage: `linear-gradient(to right, ${primaryColor} 50%, transparent 50%)`,
          backgroundSize: "8px 2px",
          backgroundRepeat: "repeat-x",
          borderRadius: "1px"
        } });
        break;
      case "dotted":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "3px",
          backgroundImage: `radial-gradient(circle, ${primaryColor} 1px, transparent 1px)`,
          backgroundSize: "4px 3px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x"
        } });
        break;
      case "double":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", flexDirection: "column", width: "100%", gap: "2px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { height: "1px", backgroundColor: primaryColor, borderRadius: "1px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { height: "1px", backgroundColor: primaryColor, borderRadius: "1px" } }));
        break;
      case "gradient":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "3px",
          background: `linear-gradient(to right, ${secondaryColor || "transparent"}, ${primaryColor}, ${secondaryColor || "transparent"})`,
          borderRadius: "1px"
        } });
        break;
      case "shadow":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "2px",
          backgroundColor: primaryColor,
          boxShadow: `0 1px 2px rgba(0,0,0,0.3)`,
          borderRadius: "1px"
        } });
        break;
      case "wave":
        previewContent = /* @__PURE__ */ wp.element.createElement("svg", { height: "20", width: "100%", viewBox: "0 0 100 20", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M0,10 C20,5 30,15 50,10 C70,5 80,15 100,10 L100,20 L0,20 Z", fill: primaryColor }));
        break;
      case "zigzag":
        previewContent = /* @__PURE__ */ wp.element.createElement("svg", { height: "10", width: "100%", viewBox: "0 0 100 10", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement(
          "polyline",
          {
            points: "0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0",
            fill: "none",
            stroke: primaryColor,
            strokeWidth: "2"
          }
        ));
        break;
      case "slant":
        previewContent = /* @__PURE__ */ wp.element.createElement("svg", { height: "10", width: "100%", viewBox: "0 0 100 10", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("polygon", { points: "0,0 100,10 100,0", fill: primaryColor }));
        break;
      default:
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: primaryColor, borderRadius: "1px" } });
    }
    const getDisplayName = () => {
      switch (style) {
        case "line":
          return "Line";
        case "dashed":
          return "Dashed";
        case "dotted":
          return "Dotted";
        case "double":
          return "Double";
        case "gradient":
          return "Gradient";
        case "shadow":
          return "Shadow";
        case "wave":
          return "Wave";
        case "zigzag":
          return "Zigzag";
        case "slant":
          return "Slant";
        default:
          return style.charAt(0).toUpperCase() + style.slice(1);
      }
    };
    return /* @__PURE__ */ wp.element.createElement("div", { style: containerStyle, onClick }, /* @__PURE__ */ wp.element.createElement("div", { style: labelStyle }, getDisplayName()), /* @__PURE__ */ wp.element.createElement("div", { style: previewStyle }, previewContent));
  };
  var SeparatorEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
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
    const [localActiveDevice, setLocalActiveDevice] = useState10(window.digi.responsiveState.activeDevice);
    const previewTimeoutRef = useRef10(null);
    useEffect10(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState10("options");
    useEffect10(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    useEffect10(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
    }, [clientId]);
    const [componentsLoaded, setComponentsLoaded] = useState10(false);
    useEffect10(() => {
      const checkComponents = () => {
        if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
          setComponentsLoaded(true);
          return true;
        }
        return false;
      };
      if (!checkComponents()) {
        const timeout = setTimeout(() => {
          if (checkComponents()) {
            clearTimeout(timeout);
          }
        }, 500);
        return () => clearTimeout(timeout);
      }
    }, []);
    const setIconValue = (newIcon) => {
      setAttributes({ iconValue: newIcon });
    };
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations10[animation]) {
        const originalKeyframes = animations10[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect10(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const widthUnitOptions = [
      { label: "px", value: "px" },
      { label: "%", value: "%" }
    ];
    const heightUnitOptions = [
      { label: "px", value: "px" },
      { label: "%", value: "%" }
    ];
    const contentTypeOptions = [
      { label: __10("None", "digiblocks"), value: "none" },
      { label: __10("Text", "digiblocks"), value: "text" },
      { label: __10("Icon", "digiblocks"), value: "icon" }
    ];
    const animationOptions = [
      { label: __10("None", "digiblocks"), value: "none" },
      ...Object.keys(animations10).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __10("Options", "digiblocks"),
        icon: tabIcons10.optionsIcon
      },
      {
        name: "style",
        title: __10("Style", "digiblocks"),
        icon: tabIcons10.styleIcon
      },
      {
        name: "advanced",
        title: __10("Advanced", "digiblocks"),
        icon: tabIcons10.advancedIcon
      }
    ];
    const FontAwesomeControl3 = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const renderStyleSVG = () => {
      switch (separatorStyle) {
        case "wave":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z", fill: primaryColor }));
        case "zigzag":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0", fill: primaryColor }));
        case "slant":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M1200 120L0 16.48 0 0 1200 0 1200 120z", fill: primaryColor }));
        default:
          return null;
      }
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      let separatorBaseStyles = "";
      const marginValue = margin[activeDevice] || { top: 30, bottom: 30, unit: "px" };
      const currentWidth = width[activeDevice] || 100;
      const currentHeight = height[activeDevice] || 3;
      let separatorSpecificStyles = "";
      let beforeAfterStyles = "";
      switch (separatorStyle) {
        case "line":
          separatorBaseStyles = `
                    background-color: ${primaryColor};
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                `;
          break;
        case "dashed":
          separatorBaseStyles = `
                    border-top: ${currentHeight}${heightUnit} dashed ${primaryColor};
                    width: ${currentWidth}${widthUnit};
                `;
          break;
        case "dotted":
          separatorBaseStyles = `
                    border-top: ${currentHeight}${heightUnit} dotted ${primaryColor};
                    width: ${currentWidth}${widthUnit};
                `;
          break;
        case "double":
          separatorBaseStyles = `
                    border-top: ${Math.max(1, Math.floor(currentHeight / 3))}${heightUnit} solid ${primaryColor};
                    border-bottom: ${Math.max(1, Math.floor(currentHeight / 3))}${heightUnit} solid ${primaryColor};
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                `;
          break;
        case "gradient":
          separatorBaseStyles = `
                    background: linear-gradient(90deg, ${secondaryColor || "transparent"} 0%, ${primaryColor} 50%, ${secondaryColor || "transparent"} 100%);
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                `;
          break;
        case "shadow":
          separatorBaseStyles = `
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    background-color: ${primaryColor};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                    box-shadow: 0 ${Math.max(2, currentHeight / 2)}px ${Math.max(4, currentHeight)}px rgba(0,0,0,0.2);
                `;
          break;
        case "wave":
        case "zigzag":
        case "slant":
          separatorBaseStyles = `
                    width: 100%;
                    height: 100%;
                    position: relative;
                `;
          separatorSpecificStyles = `
                    [data-custom-id="${blockId}"] .digiblocks-separator-shape {
                        width: 100%;
                        height: 100%;
                    }
                    [data-custom-id="${blockId}"] .digiblocks-separator-shape svg {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                `;
          break;
      }
      let contentStyles = "";
      if ((contentType === "text" || contentType === "icon") && !["wave", "zigzag", "slant"].includes(separatorStyle)) {
        const currentGap = gap[activeDevice] || 15;
        contentStyles = `
                [data-custom-id="${blockId}"] .digiblocks-separator-content {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 0 ${currentGap}px;
                    ${contentType === "text" && textColor ? `color: ${textColor};` : ""}
                }
                
                [data-custom-id="${blockId}"].digiblocks-separator-has-content .digiblocks-separator-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    transform: translateY(-50%);
                }
            `;
      }
      if (contentType === "icon" && iconValue && iconValue.svg) {
        contentStyles += `
                [data-custom-id="${blockId}"] .digiblocks-separator-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-separator-icon svg {
                    width: ${iconSize[activeDevice] || 24}px;
                    height: ${iconSize[activeDevice] || 24}px;
                    fill: ${textColor || primaryColor};
                }
            `;
      }
      if (contentType === "text" && typography) {
        let typographyStyles = "";
        if (typography.fontFamily) {
          typographyStyles += `font-family: ${typography.fontFamily};`;
        }
        if (typography.fontSize && typography.fontSize[activeDevice]) {
          typographyStyles += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || "px"};`;
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
        if (typography.lineHeight && typography.lineHeight[activeDevice]) {
          typographyStyles += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || "em"};`;
        }
        if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
          typographyStyles += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || "px"};`;
        }
        contentStyles += `
                [data-custom-id="${blockId}"] .digiblocks-separator-text {
                    ${typographyStyles}
                }
            `;
      }
      let animationCSS = "";
      if (animation && animation !== "none" && animations10[animation]) {
        animationCSS = animations10[animation].keyframes;
      }
      let alignmentStyles = "";
      switch (align) {
        case "center":
          alignmentStyles = "margin-left: auto; margin-right: auto;";
          break;
        case "right":
          alignmentStyles = "margin-left: auto; margin-right: 0;";
          break;
        default:
          alignmentStyles = "margin-left: 0; margin-right: auto;";
          break;
      }
      return `
            /* Separator Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                margin-top: ${marginValue.top}${marginValue.unit};
                margin-bottom: ${marginValue.bottom}${marginValue.unit};
                display: flex;
                align-items: center;
                justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
                position: relative;
                clear: both;
                width: 100%;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-separator-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
                width: 100%;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-separator-line {
                ${separatorBaseStyles}
                ${alignmentStyles}
            }
            
            ${separatorSpecificStyles}
            ${contentStyles}
            ${animationCSS}
            
            /* Responsive styles will be handled by media queries */
            @media (max-width: 991px) {
                [data-custom-id="${blockId}"] {
                    margin-top: ${margin.tablet ? margin.tablet.top + (margin.tablet.unit || "px") : marginValue.top + marginValue.unit};
                    margin-bottom: ${margin.tablet ? margin.tablet.bottom + (margin.tablet.unit || "px") : marginValue.bottom + marginValue.unit};
                }
                
                [data-custom-id="${blockId}"] .digiblocks-separator-line {
                    width: ${width.tablet ? width.tablet + widthUnit : currentWidth + widthUnit};
                    height: ${height.tablet ? height.tablet + heightUnit : currentHeight + heightUnit};
                    ${borderRadius.tablet ? `border-radius: ${borderRadius.tablet}px;` : ""}
                }
                
                ${contentType === "icon" ? `
                [data-custom-id="${blockId}"] .digiblocks-separator-icon svg {
                    width: ${iconSize.tablet || 20}px;
                    height: ${iconSize.tablet || 20}px;
                }` : ""}
            }
            
            @media (max-width: 767px) {
                [data-custom-id="${blockId}"] {
                    margin-top: ${margin.mobile ? margin.mobile.top + (margin.mobile.unit || "px") : marginValue.top + marginValue.unit};
                    margin-bottom: ${margin.mobile ? margin.mobile.bottom + (margin.mobile.unit || "px") : marginValue.bottom + marginValue.unit};
                }
                
                [data-custom-id="${blockId}"] .digiblocks-separator-line {
                    width: ${width.mobile ? width.mobile + widthUnit : currentWidth + widthUnit};
                    height: ${height.mobile ? height.mobile + heightUnit : currentHeight + heightUnit};
                    ${borderRadius.mobile ? `border-radius: ${borderRadius.mobile}px;` : ""}
                }
                
                ${contentType === "icon" ? `
                [data-custom-id="${blockId}"] .digiblocks-separator-icon svg {
                    width: ${iconSize.mobile || 16}px;
                    height: ${iconSize.mobile || 16}px;
                }` : ""}
            }
        `;
    };
    const renderIcon = () => {
      if (!iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-icon" }, /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: iconValue.svg
          }
        }
      ));
    };
    const renderSeparatorStyleGrid = () => {
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
      const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        justifyContent: "center",
        margin: "0 -5px",
        maxHeight: "200px",
        overflow: "auto",
        padding: "4px 0",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9"
      };
      return /* @__PURE__ */ wp.element.createElement("div", { style: containerStyle }, separatorStyleOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
        SeparatorStylePreview,
        {
          key: option.value,
          style: option.value,
          primaryColor: primaryColor || "#1e73be",
          secondaryColor,
          isSelected: separatorStyle === option.value,
          onClick: () => {
            if (["wave", "zigzag", "slant"].includes(option.value) && contentType !== "none") {
              setAttributes({
                separatorStyle: option.value,
                contentType: "none"
              });
            } else {
              setAttributes({ separatorStyle: option.value });
            }
          }
        }
      )));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            BaseControl5,
            {
              label: __10("Separator Style", "digiblocks"),
              id: "separator-style-selector"
            },
            renderSeparatorStyleGrid()
          ), !["wave", "zigzag", "slant"].includes(separatorStyle) ? /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl10,
            {
              label: __10("Content Type", "digiblocks"),
              value: contentType,
              onChange: (value) => setAttributes({ contentType: value }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            contentTypeOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption10,
              {
                key: option.value,
                value: option.value,
                label: option.label
              }
            ))
          ) : /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-warning", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, __10("Content is not available with this separator style.", "digiblocks"))), contentType === "text" && /* @__PURE__ */ wp.element.createElement(
            TextControl6,
            {
              label: __10("Text Content", "digiblocks"),
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), contentType === "icon" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __10("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
            FontAwesomeControl3,
            {
              label: __10("Select Icon", "digiblocks"),
              value: iconValue,
              onChange: setIconValue
            }
          ))));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody10,
            {
              tab: "style",
              name: "colors",
              title: __10("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings10,
              {
                title: __10("Separator Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: primaryColor,
                    onChange: (value) => setAttributes({ primaryColor: value }),
                    label: __10("Primary Color", "digiblocks")
                  },
                  ...separatorStyle === "gradient" ? [
                    {
                      value: secondaryColor,
                      onChange: (value) => setAttributes({ secondaryColor: value }),
                      label: __10("Secondary Color", "digiblocks")
                    }
                  ] : [],
                  ...contentType !== "none" ? [
                    {
                      value: textColor,
                      onChange: (value) => setAttributes({ textColor: value }),
                      label: contentType === "text" ? __10("Text Color", "digiblocks") : __10("Icon Color", "digiblocks")
                    }
                  ] : []
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody10,
            {
              tab: "style",
              name: "dimensions",
              title: __10("Dimensions", "digiblocks"),
              initialOpen: false
            },
            !["wave", "zigzag", "slant"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __10("Width", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __10(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                disabled: width[localActiveDevice] === 100,
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  width: {
                    ...width,
                    [localActiveDevice]: 100
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl10,
              {
                value: widthUnit,
                onChange: (value) => setAttributes({ widthUnit: value }),
                isBlock: true,
                isSmall: true,
                hideLabelFromVision: true,
                "aria-label": __10("Width Unit", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              widthUnitOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption10,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl10,
              {
                value: width[localActiveDevice],
                onChange: (value) => setAttributes({
                  width: {
                    ...width,
                    [localActiveDevice]: value
                  }
                }),
                min: 1,
                max: widthUnit === "%" ? 100 : 1e3,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __10("Height", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __10(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                disabled: height[localActiveDevice] === 3,
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  height: {
                    ...height,
                    [localActiveDevice]: 3
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl10,
              {
                value: heightUnit,
                onChange: (value) => setAttributes({ heightUnit: value }),
                isBlock: true,
                isSmall: true,
                hideLabelFromVision: true,
                "aria-label": __10("Height Unit", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              heightUnitOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption10,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl10,
              {
                value: height[localActiveDevice],
                onChange: (value) => setAttributes({
                  height: {
                    ...height,
                    [localActiveDevice]: value
                  }
                }),
                min: 1,
                max: heightUnit === "%" ? 20 : 100,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))))))),
            ["line", "gradient", "shadow"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __10("Border Radius", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __10(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-unit-control" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl10,
              {
                value: borderRadius[localActiveDevice],
                onChange: (value) => setAttributes({
                  borderRadius: {
                    ...borderRadius,
                    [localActiveDevice]: value
                  }
                }),
                min: 0,
                max: 50,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))),
            (contentType === "text" || contentType === "icon") && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __10("Gap", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __10(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-unit-control" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl10,
              {
                value: gap[localActiveDevice],
                onChange: (value) => setAttributes({
                  gap: {
                    ...gap,
                    [localActiveDevice]: value
                  }
                }),
                min: 0,
                max: 100,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))),
            contentType === "icon" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __10("Icon Size", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __10(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-unit-control" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl10,
              {
                value: iconSize[localActiveDevice],
                onChange: (value) => setAttributes({
                  iconSize: {
                    ...iconSize,
                    [localActiveDevice]: value
                  }
                }),
                min: 8,
                max: 100,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl10,
              {
                label: __10("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-margin-control" }, /* @__PURE__ */ wp.element.createElement(
                RangeControl10,
                {
                  label: __10("Top", "digiblocks"),
                  value: margin[localActiveDevice]?.top || 30,
                  onChange: (value) => {
                    const updatedMargin = {
                      ...margin,
                      [localActiveDevice]: {
                        ...margin[localActiveDevice],
                        top: value,
                        unit: margin[localActiveDevice]?.unit || "px"
                      }
                    };
                    setAttributes({ margin: updatedMargin });
                  },
                  min: 0,
                  max: 200,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              ), /* @__PURE__ */ wp.element.createElement(
                RangeControl10,
                {
                  label: __10("Bottom", "digiblocks"),
                  value: margin[localActiveDevice]?.bottom || 30,
                  onChange: (value) => {
                    const updatedMargin = {
                      ...margin,
                      [localActiveDevice]: {
                        ...margin[localActiveDevice],
                        bottom: value,
                        unit: margin[localActiveDevice]?.unit || "px"
                      }
                    };
                    setAttributes({ margin: updatedMargin });
                  },
                  min: 0,
                  max: 200,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              ))
            )
          ), contentType === "text" && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody10,
            {
              tab: "style",
              name: "typography",
              title: __10("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl8,
              {
                label: __10("Text Typography", "digiblocks"),
                value: typography,
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
                  lineHeightUnit: "em"
                }
              }
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody10,
            {
              tab: "advanced",
              name: "animation",
              title: __10("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl10,
              {
                label: __10("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button10,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __10("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody10,
            {
              tab: "advanced",
              name: "additional",
              title: __10("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __10("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __10(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __10("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __10("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __10("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps19({
      className: `digiblocks-separator ${contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) ? "digiblocks-separator-has-content" : ""} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls8, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar7,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls10, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel10,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-container" }, contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-content" }, contentType === "text" && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-separator-text" }, content), contentType === "icon" && renderIcon()), ["wave", "zigzag", "slant"].includes(separatorStyle) ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-shape" }, renderStyleSVG()) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-line" }))));
  };
  var edit_default10 = SeparatorEdit;

  // blocks/separator/save.js
  var { useBlockProps: useBlockProps20, RichText: RichText11 } = window.wp.blockEditor;
  var SeparatorSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      contentType,
      content,
      align,
      iconValue,
      separatorStyle,
      primaryColor,
      secondaryColor,
      animation
    } = attributes;
    const renderStyleSVG = () => {
      switch (separatorStyle) {
        case "wave":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z", fill: primaryColor }));
        case "zigzag":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0", fill: primaryColor }));
        case "slant":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M1200 120L0 16.48 0 0 1200 0 1200 120z", fill: primaryColor }));
        default:
          return null;
      }
    };
    const renderIcon = () => {
      if (!iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: iconValue.svg } }));
    };
    const blockClasses = [
      "digiblocks-separator",
      contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) ? "digiblocks-separator-has-content" : "",
      `align-${align}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps20.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id,
      "data-separator-style": separatorStyle
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-container" }, contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-content" }, contentType === "text" && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-separator-text" }, content), contentType === "icon" && renderIcon()), ["wave", "zigzag", "slant"].includes(separatorStyle) ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-shape" }, renderStyleSVG()) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-line" })));
  };
  var save_default10 = SeparatorSave;

  // blocks/social-icons/edit.js
  var { __: __11 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps21,
    InspectorControls: InspectorControls11,
    PanelColorSettings: PanelColorSettings11,
    BlockControls: BlockControls9,
    AlignmentToolbar: AlignmentToolbar8
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl11,
    RangeControl: RangeControl11,
    TabPanel: TabPanel9,
    Button: Button11,
    ToggleControl: ToggleControl8,
    __experimentalToggleGroupControl: ToggleGroupControl11,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption11,
    TextControl: TextControl7
  } = window.wp.components;
  var { useState: useState11, useEffect: useEffect11, useRef: useRef11 } = window.wp.element;
  var { animations: animations11 } = digi.utils;
  var { tabIcons: tabIcons11 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl11, DimensionControl: DimensionControl10, TypographyControl: TypographyControl9, CustomTabPanel: CustomTabPanel11, TabPanelBody: TabPanelBody11, FontAwesomeControl } = digi.components;
  var SocialIcon = ({ icon, index, updateIcon, removeIcon, moveIcon, componentsLoaded, isPanelOpen, togglePanelState }) => {
    const handleDragStart = (e) => {
      e.dataTransfer.setData("text/plain", index.toString());
      e.dataTransfer.effectAllowed = "move";
      e.currentTarget.classList.add("dragging");
    };
    const handleDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      e.currentTarget.classList.add("drag-over");
    };
    const handleDragLeave = (e) => {
      e.currentTarget.classList.remove("drag-over");
    };
    const handleDrop = (e) => {
      e.preventDefault();
      const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
      if (draggedIndex !== index) {
        moveIcon(draggedIndex, index);
      }
      e.currentTarget.classList.remove("drag-over");
    };
    const handleDragEnd = (e) => {
      document.querySelectorAll(".dragging").forEach((el) => {
        el.classList.remove("dragging");
      });
      document.querySelectorAll(".drag-over").forEach((el) => {
        el.classList.remove("drag-over");
      });
    };
    const togglePanel = () => {
      togglePanelState(index);
    };
    return /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        className: `digiblocks-social-icon-item ${isPanelOpen ? "is-open" : "is-closed"}`,
        draggable: "true",
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onDragEnd: handleDragEnd
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icon-header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icon-drag-handle", title: __11("Drag to reorder", "digiblocks") }, /* @__PURE__ */ wp.element.createElement("span", { className: "dashicons dashicons-menu" })), /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          className: "digiblocks-social-icon-title",
          onClick: togglePanel
        },
        icon.label || __11("Social", "digiblocks") + " " + (index + 1)
      ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icon-actions" }, /* @__PURE__ */ wp.element.createElement(
        Button11,
        {
          icon: isPanelOpen ? "arrow-up-alt2" : "arrow-down-alt2",
          onClick: togglePanel,
          label: isPanelOpen ? __11("Collapse", "digiblocks") : __11("Expand", "digiblocks"),
          isSmall: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button11,
        {
          icon: "trash",
          onClick: () => removeIcon(index),
          label: __11("Remove Icon", "digiblocks"),
          isSmall: true,
          isDestructive: true
        }
      ))),
      isPanelOpen && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icon-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icon-fields" }, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __11("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
        FontAwesomeControl,
        {
          label: __11("Select Icon", "digiblocks"),
          value: icon.iconValue,
          onChange: (newIcon) => updateIcon(index, "iconValue", newIcon)
        }
      ), /* @__PURE__ */ wp.element.createElement(
        TextControl7,
        {
          label: __11("URL", "digiblocks"),
          value: icon.url || "",
          onChange: (url) => updateIcon(index, "url", url),
          placeholder: "https://example.com",
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        TextControl7,
        {
          label: __11("Label", "digiblocks"),
          value: icon.label || "",
          onChange: (label) => updateIcon(index, "label", label),
          placeholder: __11("e.g. Facebook", "digiblocks"),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        ToggleControl8,
        {
          label: __11("Open in new tab", "digiblocks"),
          checked: icon.openInNewTab || false,
          onChange: (openInNewTab) => updateIcon(index, "openInNewTab", openInNewTab),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        TextControl7,
        {
          label: __11("Rel Attribute", "digiblocks"),
          value: icon.rel || "",
          onChange: (rel) => updateIcon(index, "rel", rel),
          placeholder: __11("e.g. nofollow", "digiblocks"),
          help: __11('Optional. Add rel attributes like "nofollow", "sponsored", etc.', "digiblocks"),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      )))
    );
  };
  var SocialIconsEdit = ({ attributes, setAttributes, clientId }) => {
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
    const [localActiveDevice, setLocalActiveDevice] = useState11(window.digi.responsiveState.activeDevice);
    const previewTimeoutRef = useRef11(null);
    useEffect11(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState11("options");
    useEffect11(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!icons || icons.length === 0) {
        setAttributes({
          icons: [
            {
              id: `social-icon-${clientId.substr(0, 8)}-0`,
              iconValue: null,
              url: "",
              label: "",
              openInNewTab: true,
              rel: "nofollow"
            }
          ]
        });
      }
      if (!iconsState || Object.keys(iconsState).length === 0) {
        const initialState = {};
        if (icons && icons.length > 0) {
          icons.forEach((_, index) => {
            initialState[index] = true;
          });
          setAttributes({ iconsState: initialState });
        }
      }
    }, [clientId, icons, iconsState, setAttributes]);
    useEffect11(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    const [componentsLoaded, setComponentsLoaded] = useState11(false);
    useEffect11(() => {
      const checkComponents = () => {
        if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
          setComponentsLoaded(true);
          return true;
        }
        return false;
      };
      if (!checkComponents()) {
        const timeout = setTimeout(() => {
          if (checkComponents()) {
            clearTimeout(timeout);
          }
        }, 500);
        return () => clearTimeout(timeout);
      }
    }, []);
    const togglePanelState = (index) => {
      const updatedState = { ...iconsState };
      updatedState[index] = !updatedState[index];
      setAttributes({ iconsState: updatedState });
    };
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations11[animation]) {
        const originalKeyframes = animations11[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect11(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const borderStyleOptions = [
      { label: __11("None", "digiblocks"), value: "none" },
      { label: __11("Solid", "digiblocks"), value: "solid" },
      { label: __11("Dotted", "digiblocks"), value: "dotted" },
      { label: __11("Dashed", "digiblocks"), value: "dashed" },
      { label: __11("Double", "digiblocks"), value: "double" }
    ];
    const labelPositionOptions = [
      { label: __11("Bottom", "digiblocks"), value: "bottom" },
      { label: __11("Right", "digiblocks"), value: "right" },
      { label: __11("Left", "digiblocks"), value: "left" },
      { label: __11("Top", "digiblocks"), value: "top" }
    ];
    const animationOptions = [
      { label: __11("None", "digiblocks"), value: "none" },
      ...Object.keys(animations11).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __11("Options", "digiblocks"),
        icon: tabIcons11.optionsIcon
      },
      {
        name: "style",
        title: __11("Style", "digiblocks"),
        icon: tabIcons11.styleIcon
      },
      {
        name: "advanced",
        title: __11("Advanced", "digiblocks"),
        icon: tabIcons11.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __11("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __11("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const addIcon = () => {
      const newIconIndex = icons.length;
      const updatedIcons = [...icons, {
        id: `social-icon-${clientId.substr(0, 8)}-${newIconIndex}`,
        iconValue: null,
        url: "",
        label: "",
        openInNewTab: true,
        rel: "nofollow"
      }];
      const updatedState = { ...iconsState };
      updatedState[updatedIcons.length - 1] = true;
      setAttributes({
        icons: updatedIcons,
        iconsState: updatedState
      });
    };
    const removeIcon = (index) => {
      if (icons.length > 1) {
        const updatedIcons = [...icons];
        updatedIcons.splice(index, 1);
        const updatedState = {};
        updatedIcons.forEach((_, i) => {
          const oldIndex = i >= index ? i + 1 : i;
          updatedState[i] = iconsState[oldIndex] !== void 0 ? iconsState[oldIndex] : true;
        });
        setAttributes({
          icons: updatedIcons,
          iconsState: updatedState
        });
      }
    };
    const updateIcon = (index, property, value) => {
      const updatedIcons = [...icons];
      updatedIcons[index] = {
        ...updatedIcons[index],
        [property]: value
      };
      setAttributes({ icons: updatedIcons });
    };
    const moveIcon = (fromIndex, toIndex) => {
      const updatedIcons = [...icons];
      const [movedItem] = updatedIcons.splice(fromIndex, 1);
      updatedIcons.splice(toIndex, 0, movedItem);
      const updatedState = {};
      Object.keys(iconsState).forEach((oldIndexStr) => {
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
      setAttributes({
        icons: updatedIcons,
        iconsState: updatedState
      });
    };
    const renderStylesTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings11,
          {
            title: __11("Icon Colors", "digiblocks"),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconColor,
                onChange: (value) => setAttributes({ iconColor: value }),
                label: __11("Icon Color", "digiblocks")
              },
              {
                value: iconBackground,
                onChange: (value) => setAttributes({ iconBackground: value }),
                label: __11("Background Color", "digiblocks")
              },
              {
                value: iconBorderColor,
                onChange: (value) => setAttributes({ iconBorderColor: value }),
                label: __11("Border Color", "digiblocks")
              },
              ...showLabels ? [
                {
                  value: labelColor,
                  onChange: (value) => setAttributes({ labelColor: value }),
                  label: __11("Label Color", "digiblocks")
                }
              ] : []
            ]
          }
        ));
      } else {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings11,
          {
            title: __11("Icon Hover Colors", "digiblocks"),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconHoverColor,
                onChange: (value) => setAttributes({ iconHoverColor: value }),
                label: __11("Icon Hover Color", "digiblocks")
              },
              {
                value: iconHoverBackground,
                onChange: (value) => setAttributes({ iconHoverBackground: value }),
                label: __11("Hover Background", "digiblocks")
              },
              {
                value: iconHoverBorderColor,
                onChange: (value) => setAttributes({ iconHoverBorderColor: value }),
                label: __11("Hover Border Color", "digiblocks")
              },
              ...showLabels ? [
                {
                  value: labelHoverColor,
                  onChange: (value) => setAttributes({ labelHoverColor: value }),
                  label: __11("Label Hover Color", "digiblocks")
                }
              ] : []
            ]
          }
        ));
      }
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      const currentIconSize = iconSize[activeDevice] || 24;
      const currentIconSpacing = iconSpacing[activeDevice] || 10;
      const currentLabelSpacing = labelSpacing[activeDevice] || 5;
      let borderCSS = "";
      if (iconBorderStyle && iconBorderStyle !== "none") {
        const currentBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] ? iconBorderWidth[activeDevice] : { value: 1, unit: "px" };
        const currentBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] ? iconBorderRadius[activeDevice] : { value: 0, unit: "px" };
        borderCSS = `
                border-style: ${iconBorderStyle};
                border-color: ${iconBorderColor || "#e0e0e0"};
                border-width: ${currentBorderWidth.value}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.value}${currentBorderRadius.unit};
            `;
      }
      let textTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
          textTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || "px"};`;
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
          textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || "em"};`;
        }
        if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
          textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || "px"};`;
        }
      }
      const paddingCSS = padding && padding[activeDevice] ? `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};` : "";
      let animationCSS = "";
      if (animation && animation !== "none" && animations11[animation]) {
        animationCSS = animations11[animation].keyframes;
      }
      let labelPositionCSS = "";
      if (showLabels && labelPosition) {
        switch (labelPosition) {
          case "top":
            labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: column-reverse;
                        }
                    `;
            break;
          case "right":
            labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: row;
                        }
                    `;
            break;
          case "bottom":
            labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: column;
                        }
                    `;
            break;
          case "left":
            labelPositionCSS = `
                        [data-custom-id="${blockId}"] .digiblocks-social-icon {
                            flex-direction: row-reverse;
                        }
                    `;
            break;
        }
      }
      return `
            /* Social Icons Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                display: flex;
                flex-wrap: wrap;
                gap: ${currentIconSpacing}px;
                justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
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
                background-color: ${iconBackground || "transparent"};
                color: ${iconColor || "#333333"};
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
                fill: ${iconColor || "#333333"};
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
                background-color: ${iconHoverBackground || iconBackground || "transparent"};
                ${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ""}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-icon svg {
                fill: ${iconHoverColor || iconColor || "#333333"};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-label {
                ${textTypographyCSS}
                color: ${labelColor || iconColor || "#333333"};
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-label {
                color: ${labelHoverColor || iconHoverColor || labelColor || iconColor || "#333333"};
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
                    font-size: ${textTypography.fontSize.tablet}${textTypography.fontSizeUnit || "px"};
                }
                ` : ""}
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
                    font-size: ${textTypography.fontSize.mobile}${textTypography.fontSizeUnit || "px"};
                }
                ` : ""}
            }
        `;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icons-list" }, icons.map((icon, index) => /* @__PURE__ */ wp.element.createElement(
            SocialIcon,
            {
              key: icon.id || index,
              icon,
              index,
              updateIcon,
              removeIcon,
              moveIcon,
              isLast: index === icons.length - 1,
              totalIcons: icons.length,
              componentsLoaded,
              isPanelOpen: iconsState && iconsState[index] !== void 0 ? iconsState[index] : true,
              togglePanelState
            }
          )), /* @__PURE__ */ wp.element.createElement(
            Button11,
            {
              variant: "secondary",
              isSecondary: true,
              className: "digiblocks-add-social-icon",
              onClick: addIcon
            },
            __11("Add Social Icon", "digiblocks")
          )), /* @__PURE__ */ wp.element.createElement(
            ToggleControl8,
            {
              label: __11("Show Labels", "digiblocks"),
              checked: showLabels,
              onChange: (value) => setAttributes({ showLabels: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), showLabels && /* @__PURE__ */ wp.element.createElement(
            SelectControl11,
            {
              label: __11("Label Position", "digiblocks"),
              value: labelPosition,
              options: labelPositionOptions,
              onChange: (value) => setAttributes({ labelPosition: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          )));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody11,
            {
              tab: "style",
              name: "colors",
              title: __11("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel9,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderStylesTabContent(tab.name)
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody11,
            {
              tab: "style",
              name: "size-shape",
              title: __11("Size & Shape", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl11,
              {
                label: __11(
                  "Icon Size",
                  "digiblocks"
                )
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl11,
                {
                  value: iconSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSize: {
                      ...iconSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 16,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl11,
              {
                label: __11(
                  "Icon Spacing",
                  "digiblocks"
                )
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl11,
                {
                  value: iconSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSpacing: {
                      ...iconSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            showLabels && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl11,
              {
                label: __11(
                  "Label Spacing",
                  "digiblocks"
                )
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl11,
                {
                  value: labelSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    labelSpacing: {
                      ...labelSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl11,
              {
                label: __11("Border Style", "digiblocks"),
                value: iconBorderStyle || "none",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "none" && (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0)) {
                    setAttributes({
                      iconBorderWidth: {
                        desktop: { value: 1, unit: "px" },
                        tablet: { value: 1, unit: "px" },
                        mobile: { value: 1, unit: "px" }
                      }
                    });
                  }
                  if (value !== "none" && (!iconBorderRadius || Object.keys(iconBorderRadius).length === 0)) {
                    setAttributes({
                      iconBorderRadius: {
                        desktop: { value: 0, unit: "px" },
                        tablet: { value: 0, unit: "px" },
                        mobile: { value: 0, unit: "px" }
                      }
                    });
                  }
                  setAttributes({ iconBorderStyle: value });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            iconBorderStyle && iconBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl11,
              {
                label: __11("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl11,
                {
                  value: iconBorderWidth[localActiveDevice]?.value || 1,
                  onChange: (value) => setAttributes({
                    iconBorderWidth: {
                      ...iconBorderWidth,
                      [localActiveDevice]: { value, unit: "px" }
                    }
                  }),
                  min: 1,
                  max: 20,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl11,
              {
                label: __11("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl11,
                {
                  value: iconBorderRadius[localActiveDevice]?.value || 0,
                  onChange: (value) => setAttributes({
                    iconBorderRadius: {
                      ...iconBorderRadius,
                      [localActiveDevice]: { value, unit: "px" }
                    }
                  }),
                  min: 0,
                  max: 50,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl11,
              {
                label: __11("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl10,
                {
                  values: padding && padding[localActiveDevice] ? padding[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    padding: {
                      ...padding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ), showLabels && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody11,
            {
              tab: "style",
              name: "typography",
              title: __11("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl9,
              {
                label: __11(
                  "Label Typography",
                  "digiblocks"
                ),
                value: textTypography,
                onChange: (value) => setAttributes({
                  textTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody11,
            {
              tab: "advanced",
              name: "animation",
              title: __11("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl11,
              {
                label: __11("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button11,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __11("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody11,
            {
              tab: "advanced",
              name: "additional",
              title: __11("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __11("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __11(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __11("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __11("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __11("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps21({
      className: `digiblocks-social-icons align-${align} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    const renderSocialIcons = () => {
      return icons.map((icon, index) => {
        if (!icon.iconValue || !icon.iconValue.svg) {
          return null;
        }
        return /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: icon.id || index,
            className: "digiblocks-social-icon",
            title: icon.label || ""
          },
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icon-icon" }, /* @__PURE__ */ wp.element.createElement(
            "span",
            {
              dangerouslySetInnerHTML: {
                __html: icon.iconValue.svg
              }
            }
          )),
          showLabels && icon.label && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-social-icon-label" }, icon.label)
        );
      }).filter(Boolean);
    };
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls9, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar8,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls11, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel11,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, renderSocialIcons()));
  };
  var edit_default11 = SocialIconsEdit;

  // blocks/social-icons/save.js
  var { useBlockProps: useBlockProps22 } = window.wp.blockEditor;
  var SocialIconsSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      icons,
      align,
      animation,
      showLabels,
      labelPosition
    } = attributes;
    const blockClasses = [
      "digiblocks-social-icons",
      `align-${align}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps22.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id
    });
    const renderSocialIcons = () => {
      return icons.map((icon, index) => {
        if (!icon.iconValue || !icon.iconValue.svg || !icon.url) {
          return null;
        }
        let relAttr = icon.openInNewTab ? "noopener noreferrer" : "";
        if (icon.rel) {
          relAttr = relAttr ? `${relAttr} ${icon.rel}` : icon.rel;
        }
        return /* @__PURE__ */ wp.element.createElement(
          "a",
          {
            key: icon.id || index,
            href: icon.url,
            className: "digiblocks-social-icon",
            target: icon.openInNewTab ? "_blank" : "_self",
            rel: relAttr || void 0,
            "aria-label": icon.label || icon.iconValue.name || "Social icon"
          },
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-social-icon-icon" }, /* @__PURE__ */ wp.element.createElement(
            "span",
            {
              dangerouslySetInnerHTML: {
                __html: icon.iconValue.svg
              }
            }
          )),
          showLabels && icon.label && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-social-icon-label" }, icon.label)
        );
      }).filter(Boolean);
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, renderSocialIcons());
  };
  var save_default11 = SocialIconsSave;

  // blocks/spacer/edit.js
  var { __: __12 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps23,
    InspectorControls: InspectorControls12
  } = window.wp.blockEditor;
  var {
    RangeControl: RangeControl12
  } = window.wp.components;
  var { useState: useState12, useEffect: useEffect12 } = window.wp.element;
  var { tabIcons: tabIcons12 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl12, CustomTabPanel: CustomTabPanel12 } = digi.components;
  var SpacerEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      height
    } = attributes;
    const [localActiveDevice, setLocalActiveDevice] = useState12(window.digi.responsiveState.activeDevice);
    useEffect12(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState12("options");
    useEffect12(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
    }, [clientId]);
    const tabList = [
      {
        name: "options",
        title: __12("Options", "digiblocks"),
        icon: tabIcons12.optionsIcon
      },
      {
        name: "advanced",
        title: __12("Advanced", "digiblocks"),
        icon: tabIcons12.advancedIcon
      }
    ];
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      const currentHeight = height[activeDevice] || (activeDevice === "tablet" ? 60 : activeDevice === "mobile" ? 40 : 80);
      return `
            /* Spacer Block Styles */
            [data-custom-id="${blockId}"] {
                height: ${currentHeight}px;
                position: relative;
            }
            
            /* Editor-only styles */
            .editor-styles-wrapper [data-custom-id="${blockId}"] .digiblocks-spacer-icon-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #e4e4e4;
                height: 100%;
                border-radius: 4px;
                pointer-events: none;
            }
            
            .editor-styles-wrapper [data-custom-id="${blockId}"] .digiblocks-spacer-icon-wrapper svg {
                width: 1em;
				min-width: 1.5rem;
                height: 100%;
                fill: #949494;
            }
        `;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            ResponsiveControl12,
            {
              label: __12("Height", "digiblocks")
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl12,
              {
                value: height[localActiveDevice],
                onChange: (value) => setAttributes({
                  height: {
                    ...height,
                    [localActiveDevice]: value
                  }
                }),
                min: 1,
                max: 500,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          )));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __12("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
          )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __12(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
            "a",
            {
              className: "components-external-link",
              href: "https://wordpress.org/documentation/article/page-jumps/",
              target: "_blank",
              rel: "external noreferrer noopener"
            },
            /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __12("Learn more about anchors", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
          ))), /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __12("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
          )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __12("Separate multiple classes with spaces.", "digiblocks")))));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps23({
      className: `digiblocks-spacer ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls12, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel12,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-spacer-icon-wrapper" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z" })))));
  };
  var edit_default12 = SpacerEdit;

  // blocks/spacer/save.js
  var { useBlockProps: useBlockProps24 } = window.wp.blockEditor;
  var SpacerSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      height
    } = attributes;
    const blockClasses = [
      "digiblocks-spacer",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps24.save({
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps });
  };
  var save_default12 = SpacerSave;

  // blocks/team/edit.js
  var { __: __13 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps25,
    RichText: RichText12,
    InspectorControls: InspectorControls13,
    PanelColorSettings: PanelColorSettings12,
    MediaUpload: MediaUpload2,
    MediaUploadCheck: MediaUploadCheck2
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl12,
    RangeControl: RangeControl13,
    TabPanel: TabPanel10,
    ToggleControl: ToggleControl9,
    Button: Button12,
    TextControl: TextControl8,
    Tooltip: Tooltip3,
    __experimentalToggleGroupControl: ToggleGroupControl12,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption12,
    Placeholder: Placeholder2,
    Spinner: Spinner4,
    Dashicon
  } = window.wp.components;
  var { useState: useState13, useEffect: useEffect13, useRef: useRef12 } = window.wp.element;
  var { animations: animations12 } = digi.utils;
  var { tabIcons: tabIcons13 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl13, DimensionControl: DimensionControl11, TypographyControl: TypographyControl10, BoxShadowControl: BoxShadowControl9, CustomTabPanel: CustomTabPanel13, TabPanelBody: TabPanelBody12, FontAwesomeControl: FontAwesomeControl2 } = digi.components;
  var TeamMember = ({
    member,
    index,
    updateMember,
    removeMember,
    moveUp,
    moveDown,
    duplicateMember,
    socialIconsColor,
    socialIconsSize,
    imageShape,
    showPosition,
    showDescription,
    showSocialIcons,
    isLast
  }) => {
    const updateSocialLink = (platform, url) => {
      const newSocialLinks = [...member.socialLinks || []];
      const linkIndex = newSocialLinks.findIndex((link) => link.platform === platform);
      if (linkIndex !== -1) {
        newSocialLinks[linkIndex].url = url;
      } else {
        newSocialLinks.push({ platform, url });
      }
      updateMember(index, { ...member, socialLinks: newSocialLinks });
    };
    const getSocialIcon = (platform) => {
      switch (platform) {
        case "facebook":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" }));
        case "twitter":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" }));
        case "linkedin":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" }));
        case "instagram":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }));
        case "github":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" }));
        case "youtube":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" }));
        case "pinterest":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" }));
        case "dribbble":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" }));
        default:
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" }));
      }
    };
    const socialLink = member.socialLinks && member.socialLinks.find((link) => link.platform === "facebook");
    const socialLinkUrl = socialLink ? socialLink.url : "";
    return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-editor" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip3, { text: __13("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
      Button12,
      {
        className: "digiblocks-team-member-move-up",
        onClick: moveUp,
        icon: "arrow-up-alt2",
        isSmall: true
      }
    )), /* @__PURE__ */ wp.element.createElement(Tooltip3, { text: __13("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
      Button12,
      {
        className: "digiblocks-team-member-move-down",
        onClick: moveDown,
        icon: "arrow-down-alt2",
        isSmall: true
      }
    )), /* @__PURE__ */ wp.element.createElement(Tooltip3, { text: __13("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
      Button12,
      {
        className: "digiblocks-team-member-duplicate",
        onClick: duplicateMember,
        icon: "admin-page",
        isSmall: true
      }
    )), /* @__PURE__ */ wp.element.createElement(Tooltip3, { text: __13("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
      Button12,
      {
        className: "digiblocks-team-member-remove",
        onClick: removeMember,
        icon: "trash",
        isSmall: true
      }
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-team-member-image-container ${imageShape ? `shape-${imageShape}` : "shape-circle"}` }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck2, null, /* @__PURE__ */ wp.element.createElement(
      MediaUpload2,
      {
        onSelect: (media) => {
          updateMember(index, {
            ...member,
            imageUrl: media.url,
            imageId: media.id
          });
        },
        allowedTypes: ["image"],
        value: member.imageId,
        render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-image" }, member.imageUrl ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-image-wrapper" }, /* @__PURE__ */ wp.element.createElement("img", { src: member.imageUrl, alt: member.name }), /* @__PURE__ */ wp.element.createElement(
          Button12,
          {
            className: "digiblocks-team-member-change-image",
            onClick: open
          },
          __13("Change Image", "digiblocks")
        )) : /* @__PURE__ */ wp.element.createElement(
          Button12,
          {
            className: "digiblocks-team-member-upload-button",
            onClick: open
          },
          /* @__PURE__ */ wp.element.createElement(Dashicon, { icon: "format-image" }),
          /* @__PURE__ */ wp.element.createElement("span", null, __13("Upload Image", "digiblocks"))
        ))
      }
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-content" }, /* @__PURE__ */ wp.element.createElement(
      RichText12,
      {
        tagName: "h3",
        className: "digiblocks-team-member-name",
        value: member.name,
        onChange: (name) => updateMember(index, { ...member, name }),
        placeholder: __13("Member Name", "digiblocks")
      }
    ), showPosition && /* @__PURE__ */ wp.element.createElement(
      RichText12,
      {
        tagName: "p",
        className: "digiblocks-team-member-position",
        value: member.position,
        onChange: (position) => updateMember(index, { ...member, position }),
        placeholder: __13("Member Position", "digiblocks")
      }
    ), showDescription && /* @__PURE__ */ wp.element.createElement(
      RichText12,
      {
        tagName: "div",
        className: "digiblocks-team-member-description",
        value: member.description,
        onChange: (description) => updateMember(index, { ...member, description }),
        placeholder: __13("Member Description", "digiblocks")
      }
    ), showSocialIcons && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-social-links" }, (member.socialLinks || []).map((link, i) => /* @__PURE__ */ wp.element.createElement("div", { key: i, className: "digiblocks-team-member-social-link-item" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-social-link-icon", style: { color: socialIconsColor } }, getSocialIcon(link.platform)), /* @__PURE__ */ wp.element.createElement(
      TextControl8,
      {
        className: "digiblocks-team-member-social-link-input",
        value: link.url,
        onChange: (url) => updateSocialLink(link.platform, url),
        placeholder: `${link.platform.charAt(0).toUpperCase() + link.platform.slice(1)} URL`
      }
    )))))));
  };
  var TeamEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      layout,
      columns,
      gap,
      alignment,
      showDescription,
      showPosition,
      showSocialIcons,
      imageSize,
      imageShape,
      imageBorderWidth,
      imageBorderColor,
      imageBorderHoverColor,
      imageMargin,
      nameColor,
      nameHoverColor,
      positionColor,
      positionHoverColor,
      descriptionColor,
      descriptionHoverColor,
      cardBackgroundColor,
      cardBackgroundHoverColor,
      socialIconsColor,
      socialIconsHoverColor,
      socialIconsBackgroundColor,
      socialIconsBackgroundHoverColor,
      socialIconsSize,
      socialIconsSpacing,
      headingTypography,
      textTypography,
      contentTypography,
      padding,
      margin,
      animation,
      borderStyle,
      borderRadius,
      borderWidth,
      borderColor,
      borderHoverColor,
      boxShadow,
      boxShadowHover,
      members
    } = attributes;
    const [activeTab, setActiveTab] = useState13("options");
    const [localActiveDevice, setLocalActiveDevice] = useState13(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState13(false);
    const previewTimeoutRef = useRef12(null);
    useEffect13(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect13(() => {
      return () => {
        if (previewTimeoutRef.current) {
          clearTimeout(previewTimeoutRef.current);
        }
      };
    }, []);
    useEffect13(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (members && members.length > 0) {
        const updatedMembers = members.map((member, index) => {
          if (!member.id) {
            return {
              ...member,
              id: `member-${clientId.substr(0, 8)}-${index}`
            };
          }
          return member;
        });
        if (JSON.stringify(updatedMembers) !== JSON.stringify(members)) {
          setAttributes({ members: updatedMembers });
        }
      }
    }, [clientId, id, members, setAttributes]);
    const triggerAnimationPreview = () => {
      if (!animation || animation === "none") {
        return;
      }
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
      const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
      if (!blockElement) {
        return;
      }
      const timestamp = Date.now();
      if (animations12[animation]) {
        const originalKeyframes = animations12[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
          console.error("Could not extract animation name from keyframes");
          return;
        }
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        const styleElement = document.createElement("style");
        styleElement.id = `animation-style-${id}_${timestamp}`;
        const updatedKeyframes = originalKeyframes.replace(
          new RegExp(originalAnimName, "g"),
          uniqueAnimName
        );
        styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
          el.remove();
        });
        document.head.appendChild(styleElement);
        blockElement.offsetHeight;
        const animationStyleElement = document.createElement("style");
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
        document.head.appendChild(animationStyleElement);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
        }, 1500);
      }
    };
    useEffect13(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const borderStyleOptions = [
      { label: __13("Default", "digiblocks"), value: "default" },
      { label: __13("None", "digiblocks"), value: "none" },
      { label: __13("Solid", "digiblocks"), value: "solid" },
      { label: __13("Dotted", "digiblocks"), value: "dotted" },
      { label: __13("Dashed", "digiblocks"), value: "dashed" },
      { label: __13("Double", "digiblocks"), value: "double" },
      { label: __13("Groove", "digiblocks"), value: "groove" },
      { label: __13("Inset", "digiblocks"), value: "inset" },
      { label: __13("Outset", "digiblocks"), value: "outset" },
      { label: __13("Ridge", "digiblocks"), value: "ridge" }
    ];
    const animationOptions = [
      { label: __13("None", "digiblocks"), value: "none" },
      ...Object.keys(animations12).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const layoutOptions = [
      { label: __13("Grid", "digiblocks"), value: "grid" },
      { label: __13("List", "digiblocks"), value: "list" },
      { label: __13("Carousel", "digiblocks"), value: "carousel" }
    ];
    const imageShapeOptions = [
      { label: __13("Circle", "digiblocks"), value: "circle" },
      { label: __13("Square", "digiblocks"), value: "square" },
      { label: __13("Rounded", "digiblocks"), value: "rounded" },
      { label: __13("Hexagon", "digiblocks"), value: "hexagon" }
    ];
    const alignmentOptions = [
      { label: __13("Center", "digiblocks"), value: "center" },
      { label: __13("Left", "digiblocks"), value: "left" },
      { label: __13("Right", "digiblocks"), value: "right" }
    ];
    const tabList = [
      {
        name: "options",
        title: __13("Options", "digiblocks"),
        icon: tabIcons13.optionsIcon
      },
      {
        name: "style",
        title: __13("Style", "digiblocks"),
        icon: tabIcons13.styleIcon
      },
      {
        name: "advanced",
        title: __13("Advanced", "digiblocks"),
        icon: tabIcons13.advancedIcon
      }
    ];
    const stateTabList = [
      {
        name: "normal",
        title: __13("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __13("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const addNewMember = () => {
      const newMemberIndex = members.length;
      const newMember = {
        id: `member-${clientId.substr(0, 8)}-${Date.now()}`,
        name: __13("New Team Member", "digiblocks"),
        position: __13("Position", "digiblocks"),
        description: __13("Add a short description about this team member.", "digiblocks"),
        imageUrl: "",
        imageId: 0,
        socialLinks: [
          { platform: "facebook", url: "" },
          { platform: "twitter", url: "" },
          { platform: "linkedin", url: "" },
          { platform: "instagram", url: "" }
        ]
      };
      setAttributes({
        members: [...members, newMember]
      });
    };
    const removeMember = (index) => {
      const newMembers = [...members];
      newMembers.splice(index, 1);
      setAttributes({
        members: newMembers
      });
    };
    const duplicateMember = (index) => {
      const memberToDuplicate = members[index];
      const newMember = {
        ...memberToDuplicate,
        id: `member-${clientId.substr(0, 8)}-${Date.now()}`
      };
      const newMembers = [...members];
      newMembers.splice(index + 1, 0, newMember);
      setAttributes({
        members: newMembers
      });
    };
    const moveMemberUp = (index) => {
      if (index === 0)
        return;
      const newMembers = [...members];
      const member = newMembers[index];
      newMembers.splice(index, 1);
      newMembers.splice(index - 1, 0, member);
      setAttributes({
        members: newMembers
      });
    };
    const moveMemberDown = (index) => {
      if (index === members.length - 1)
        return;
      const newMembers = [...members];
      const member = newMembers[index];
      newMembers.splice(index, 1);
      newMembers.splice(index + 1, 0, member);
      setAttributes({
        members: newMembers
      });
    };
    const updateMember = (index, updatedMember) => {
      const newMembers = [...members];
      newMembers[index] = updatedMember;
      setAttributes({
        members: newMembers
      });
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      const blockId = id;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
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
      const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
      const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
      let imageShapeCSS = "";
      switch (imageShape) {
        case "circle":
          imageShapeCSS = "border-radius: 50%;";
          break;
        case "square":
          imageShapeCSS = "border-radius: 0;";
          break;
        case "rounded":
          imageShapeCSS = "border-radius: 10px;";
          break;
        case "hexagon":
          imageShapeCSS = `
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                    border-radius: 0;
                `;
          break;
        default:
          imageShapeCSS = "border-radius: 50%;";
      }
      let headingTypographyCSS = "";
      if (headingTypography) {
        if (headingTypography.fontFamily) {
          headingTypographyCSS += `font-family: ${headingTypography.fontFamily};`;
        }
        if (headingTypography.fontSize && headingTypography.fontSize[activeDevice]) {
          headingTypographyCSS += `font-size: ${headingTypography.fontSize[activeDevice]}${headingTypography.fontSizeUnit || "px"};`;
        }
        if (headingTypography.fontWeight) {
          headingTypographyCSS += `font-weight: ${headingTypography.fontWeight};`;
        }
        if (headingTypography.fontStyle) {
          headingTypographyCSS += `font-style: ${headingTypography.fontStyle};`;
        }
        if (headingTypography.textTransform) {
          headingTypographyCSS += `text-transform: ${headingTypography.textTransform};`;
        }
        if (headingTypography.textDecoration) {
          headingTypographyCSS += `text-decoration: ${headingTypography.textDecoration};`;
        }
        if (headingTypography.lineHeight && headingTypography.lineHeight[activeDevice]) {
          headingTypographyCSS += `line-height: ${headingTypography.lineHeight[activeDevice]}${headingTypography.lineHeightUnit || "em"};`;
        }
        if (headingTypography.letterSpacing && headingTypography.letterSpacing[activeDevice]) {
          headingTypographyCSS += `letter-spacing: ${headingTypography.letterSpacing[activeDevice]}${headingTypography.letterSpacingUnit || "px"};`;
        }
      }
      let textTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
          textTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || "px"};`;
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
          textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || "em"};`;
        }
        if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
          textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || "px"};`;
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
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      let layoutCSS = "";
      if (layout === "grid") {
        layoutCSS = `
                display: grid;
                grid-template-columns: repeat(${columns[activeDevice]}, 1fr);
                grid-gap: ${gap[activeDevice].vertical}${gap[activeDevice].unit} ${gap[activeDevice].horizontal}${gap[activeDevice].unit};
            `;
      } else if (layout === "list") {
        layoutCSS = `
                display: flex;
                flex-direction: column;
                gap: ${gap[activeDevice].vertical}${gap[activeDevice].unit};
            `;
      } else if (layout === "carousel") {
        layoutCSS = `
                display: grid;
                grid-template-columns: repeat(${columns[activeDevice]}, 1fr);
                grid-gap: ${gap[activeDevice].vertical}${gap[activeDevice].unit} ${gap[activeDevice].horizontal}${gap[activeDevice].unit};
            `;
      }
      let animationCSS = "";
      if (animation && animation !== "none" && animations12[animation]) {
        animationCSS = animations12[animation].keyframes;
      }
      return `
            /* Team Block Styles - ${blockId} */
            [data-custom-id="${blockId}"] {
                ${marginCSS}
                text-align: ${alignment};
            }
            
            /* Team Container */
            [data-custom-id="${blockId}"] .digiblocks-team-container {
                ${layoutCSS}
            }
            
            /* Team Member */
            [data-custom-id="${blockId}"] .digiblocks-team-member {
                ${borderCSS}
                ${boxShadowCSS}
                ${paddingCSS}
                background-color: ${cardBackgroundColor || "transparent"};
                transition: all 0.3s ease;
                overflow: hidden;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover {
                ${boxShadowHoverCSS}
                ${cardBackgroundHoverColor ? `background-color: ${cardBackgroundHoverColor};` : ""}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
            }
            
            /* Member Image */
            [data-custom-id="${blockId}"] .digiblocks-team-member-image {
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
                margin: ${imageMargin[activeDevice].top}${imageMargin[activeDevice].unit} ${imageMargin[activeDevice].right}${imageMargin[activeDevice].unit} ${imageMargin[activeDevice].bottom}${imageMargin[activeDevice].unit} ${imageMargin[activeDevice].left}${imageMargin[activeDevice].unit};
                margin-left: auto;
                margin-right: auto;
                position: relative;
                overflow: hidden;
                ${imageShapeCSS}
                border: ${imageBorderWidth[activeDevice]}px solid ${imageBorderColor || "transparent"};
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-image {
                ${imageBorderHoverColor ? `border-color: ${imageBorderHoverColor};` : ""}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            
            /* Member Name */
            [data-custom-id="${blockId}"] .digiblocks-team-member-name {
                color: ${nameColor || "#333333"};
                margin-top: 15px;
                margin-bottom: 5px;
                ${headingTypographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-name {
                ${nameHoverColor ? `color: ${nameHoverColor};` : ""}
            }
            
            /* Member Position */
            [data-custom-id="${blockId}"] .digiblocks-team-member-position {
                color: ${positionColor || "#666666"};
                margin-top: 0;
                margin-bottom: 10px;
                ${textTypographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-position {
                ${positionHoverColor ? `color: ${positionHoverColor};` : ""}
            }
            
            /* Member Description */
            [data-custom-id="${blockId}"] .digiblocks-team-member-description {
                color: ${descriptionColor || "#666666"};
                margin-bottom: 15px;
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-description {
                ${descriptionHoverColor ? `color: ${descriptionHoverColor};` : ""}
            }
            
            /* Social Links */
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: ${socialIconsSpacing[activeDevice]}px;
                margin-top: 15px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link {
                display: flex;
                align-items: center;
                justify-content: center;
                width: ${socialIconsSize[activeDevice] * 2}px;
                height: ${socialIconsSize[activeDevice] * 2}px;
                ${socialIconsBackgroundColor ? `background-color: ${socialIconsBackgroundColor};` : ""}
                border-radius: 50%;
                transition: all 0.3s ease;
                color: ${socialIconsColor || "#1e73be"};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link:hover {
                ${socialIconsHoverColor ? `color: ${socialIconsHoverColor};` : ""}
                ${socialIconsBackgroundHoverColor ? `background-color: ${socialIconsBackgroundHoverColor};` : ""}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link svg {
                width: ${socialIconsSize[activeDevice]}px;
                height: ${socialIconsSize[activeDevice]}px;
                fill: currentColor;
            }
            
            /* Editor Specific Styles */
            [data-custom-id="${blockId}"] .digiblocks-team-member-editor {
                position: relative;
                ${borderCSS}
                ${boxShadowCSS}
                ${paddingCSS}
                background-color: ${cardBackgroundColor || "transparent"};
                margin-bottom: 20px;
                overflow: hidden;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 10px;
                top: 10px;
                background-color: #fff;
                padding: 2px;
                border-radius: 3px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12);
                z-index: 10;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-inner {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-upload-button {
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 2px dashed #ddd;
                background-color: #f5f5f5;
                ${imageShapeCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image-container {
                position: relative;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image-wrapper {
                position: relative;
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
                ${imageShapeCSS}
                border: ${imageBorderWidth[activeDevice]}px solid ${imageBorderColor || "transparent"};
                overflow: hidden;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-change-image {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0,0,0,0.7);
                color: white;
                text-align: center;
                padding: 5px;
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image-wrapper:hover .digiblocks-team-member-change-image {
                opacity: 1;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-content {
                width: 100%;
                text-align: ${alignment};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-name {
                color: ${nameColor || "#333333"};
                margin-top: 15px;
                margin-bottom: 5px;
                ${headingTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-position {
                color: ${positionColor || "#666666"};
                margin-top: 0;
                margin-bottom: 10px;
                ${textTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-description {
                color: ${descriptionColor || "#666666"};
                margin-bottom: 15px;
                ${contentTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: ${alignment === "center" ? "center" : alignment === "left" ? "flex-start" : "flex-end"};
                gap: 10px;
                margin-top: 15px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-item {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                width: 100%;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-icon {
                width: 30px;
                min-width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-icon svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-input {
                flex: 1;
            }
            
            /* List Layout Adjustments */
            ${layout === "list" ? `
                [data-custom-id="${blockId}"] .digiblocks-team-member-inner {
                    flex-direction: row;
                    align-items: flex-start;
                    text-align: left;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-team-member-image-container {
                    margin-right: 20px;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-team-member-content {
                    text-align: left;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-team-member-social-links {
                    justify-content: flex-start;
                }
            ` : ""}
            
            ${animationCSS}
        `;
    };
    const renderMemberTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings12,
          {
            title: __13(
              "Member Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: nameColor,
                onChange: (value) => setAttributes({
                  nameColor: value
                }),
                label: __13(
                  "Name Color",
                  "digiblocks"
                )
              },
              {
                value: positionColor,
                onChange: (value) => setAttributes({
                  positionColor: value
                }),
                label: __13(
                  "Position Color",
                  "digiblocks"
                )
              },
              {
                value: descriptionColor,
                onChange: (value) => setAttributes({
                  descriptionColor: value
                }),
                label: __13(
                  "Description Color",
                  "digiblocks"
                )
              },
              {
                value: cardBackgroundColor,
                onChange: (value) => setAttributes({
                  cardBackgroundColor: value
                }),
                label: __13(
                  "Card Background",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings12,
          {
            title: __13(
              "Member Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: nameHoverColor,
                onChange: (value) => setAttributes({
                  nameHoverColor: value
                }),
                label: __13(
                  "Name Color",
                  "digiblocks"
                )
              },
              {
                value: positionHoverColor,
                onChange: (value) => setAttributes({
                  positionHoverColor: value
                }),
                label: __13(
                  "Position Color",
                  "digiblocks"
                )
              },
              {
                value: descriptionHoverColor,
                onChange: (value) => setAttributes({
                  descriptionHoverColor: value
                }),
                label: __13(
                  "Description Color",
                  "digiblocks"
                )
              },
              {
                value: cardBackgroundHoverColor,
                onChange: (value) => setAttributes({
                  cardBackgroundHoverColor: value
                }),
                label: __13(
                  "Card Background",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderImageTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings12,
          {
            title: __13(
              "Border Color",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: imageBorderColor,
                onChange: (value) => setAttributes({
                  imageBorderColor: value
                }),
                label: __13(
                  "Border Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings12,
          {
            title: __13(
              "Border Hover Color",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: imageBorderHoverColor,
                onChange: (value) => setAttributes({
                  imageBorderHoverColor: value
                }),
                label: __13(
                  "Border Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderSocialTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings12,
          {
            title: __13(
              "Social Icon Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: socialIconsColor,
                onChange: (value) => setAttributes({
                  socialIconsColor: value
                }),
                label: __13(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: socialIconsBackgroundColor,
                onChange: (value) => setAttributes({
                  socialIconsBackgroundColor: value
                }),
                label: __13(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings12,
          {
            title: __13(
              "Social Icon Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: socialIconsHoverColor,
                onChange: (value) => setAttributes({
                  socialIconsHoverColor: value
                }),
                label: __13(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: socialIconsBackgroundHoverColor,
                onChange: (value) => setAttributes({
                  socialIconsBackgroundHoverColor: value
                }),
                label: __13(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "options",
              name: "layout-settings",
              title: __13("Layout", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Layout Type", "digiblocks"),
                value: layout,
                options: layoutOptions,
                onChange: (value) => setAttributes({ layout: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            layout !== "list" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Columns", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl13,
                {
                  value: columns[localActiveDevice],
                  onChange: (value) => setAttributes({
                    columns: {
                      ...columns,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 1,
                  max: localActiveDevice === "mobile" ? 2 : localActiveDevice === "tablet" ? 3 : 6,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Alignment", "digiblocks"),
                value: alignment,
                options: alignmentOptions,
                onChange: (value) => setAttributes({ alignment: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", gap: "16px" } }, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Horizontal Gap", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl13,
                {
                  value: gap[localActiveDevice].horizontal,
                  onChange: (value) => setAttributes({
                    gap: {
                      ...gap,
                      [localActiveDevice]: {
                        ...gap[localActiveDevice],
                        horizontal: value
                      }
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Vertical Gap", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl13,
                {
                  value: gap[localActiveDevice].vertical,
                  onChange: (value) => setAttributes({
                    gap: {
                      ...gap,
                      [localActiveDevice]: {
                        ...gap[localActiveDevice],
                        vertical: value
                      }
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "options",
              name: "content-settings",
              title: __13("Content", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl9,
              {
                label: __13("Show Position", "digiblocks"),
                checked: showPosition,
                onChange: () => setAttributes({ showPosition: !showPosition })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl9,
              {
                label: __13("Show Description", "digiblocks"),
                checked: showDescription,
                onChange: () => setAttributes({ showDescription: !showDescription })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl9,
              {
                label: __13("Show Social Icons", "digiblocks"),
                checked: showSocialIcons,
                onChange: () => setAttributes({ showSocialIcons: !showSocialIcons })
              }
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "member-styles",
              title: __13("Member", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel10,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderMemberTabContent(tab.name)
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl10,
              {
                label: __13(
                  "Name Typography",
                  "digiblocks"
                ),
                value: headingTypography,
                onChange: (value) => setAttributes({
                  headingTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl10,
              {
                label: __13(
                  "Position Typography",
                  "digiblocks"
                ),
                value: textTypography,
                onChange: (value) => setAttributes({
                  textTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl10,
              {
                label: __13(
                  "Description Typography",
                  "digiblocks"
                ),
                value: contentTypography,
                onChange: (value) => setAttributes({
                  contentTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "image-styles",
              title: __13("Image", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Image Shape", "digiblocks"),
                value: imageShape,
                options: imageShapeOptions,
                onChange: (value) => setAttributes({ imageShape: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Image Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl13,
                {
                  value: imageSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageSize: {
                      ...imageSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 40,
                  max: 300,
                  step: 5,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl13,
                {
                  value: imageBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageBorderWidth: {
                      ...imageBorderWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 20,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              TabPanel10,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderImageTabContent(tab.name)
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Image Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl11,
                {
                  values: imageMargin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageMargin: {
                      ...imageMargin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "social-styles",
              title: __13("Social Icons", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel10,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderSocialTabContent(tab.name)
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl13,
                {
                  value: socialIconsSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    socialIconsSize: {
                      ...socialIconsSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 10,
                  max: 50,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Icons Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl13,
                {
                  value: socialIconsSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    socialIconsSpacing: {
                      ...socialIconsSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 50,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "card-styles",
              title: __13("Card Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Border Style", "digiblocks"),
                value: borderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "default" && value !== "none" && (borderStyle === "default" || borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
                          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({
                    borderStyle: value
                  });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings12,
              {
                title: __13(
                  "Border Colors",
                  "digiblocks"
                ),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({
                      borderColor: value
                    }),
                    label: __13(
                      "Border Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: borderHoverColor,
                    onChange: (value) => setAttributes({
                      borderHoverColor: value
                    }),
                    label: __13(
                      "Border Hover Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl11,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl11,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: "px"
                  },
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
              BoxShadowControl9,
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
            TabPanelBody12,
            {
              tab: "style",
              name: "spacing",
              title: __13("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl13,
              {
                label: __13("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl11,
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
              ResponsiveControl13,
              {
                label: __13("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl11,
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
            TabPanelBody12,
            {
              tab: "advanced",
              name: "animation",
              title: __13("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button12,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: triggerAnimationPreview,
                style: { width: "100%" }
              },
              __13("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "advanced",
              name: "additional",
              title: __13("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __13("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __13(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __13("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __13("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __13("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const renderTeamMembers = () => {
      if (!members || members.length === 0) {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-no-members" }, /* @__PURE__ */ wp.element.createElement("p", null, __13("No team members found. Please add some members.", "digiblocks")));
      }
      return members.map((member, index) => {
        const isLast = index === members.length - 1;
        return /* @__PURE__ */ wp.element.createElement(
          TeamMember,
          {
            key: member.id,
            member,
            index,
            updateMember,
            removeMember: () => removeMember(index),
            moveUp: () => moveMemberUp(index),
            moveDown: () => moveMemberDown(index),
            duplicateMember: () => duplicateMember(index),
            socialIconsColor,
            socialIconsSize: socialIconsSize[localActiveDevice],
            imageShape,
            showPosition,
            showDescription,
            showSocialIcons,
            isLast
          }
        );
      });
    };
    const blockProps = useBlockProps25({
      className: `digiblocks-team-block layout-${layout} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls13, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel13,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-container" }, renderTeamMembers()), /* @__PURE__ */ wp.element.createElement(
      Button12,
      {
        variant: "primary",
        icon: "plus",
        onClick: addNewMember,
        style: { width: "100%", marginTop: "20px", justifyContent: "center" }
      },
      __13("Add Team Member", "digiblocks")
    )));
  };
  var edit_default13 = TeamEdit;

  // blocks/team/save.js
  var { useBlockProps: useBlockProps26, RichText: RichText13 } = window.wp.blockEditor;
  var TeamMemberComponent = ({ member, imageShape, showPosition, showDescription, showSocialIcons, alignment }) => {
    if (!member) {
      member = {
        name: "",
        position: "",
        description: "",
        imageUrl: "",
        socialLinks: []
      };
    }
    const getSocialIcon = (platform) => {
      switch (platform) {
        case "facebook":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" }));
        case "twitter":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" }));
        case "linkedin":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" }));
        case "instagram":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }));
        case "github":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" }));
        case "youtube":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" }));
        case "pinterest":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" }));
        case "dribbble":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" }));
        default:
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" }));
      }
    };
    const socialLinks = member.socialLinks || [];
    const activeSocialLinks = socialLinks.filter((link) => link && link.url && link.url.trim() !== "");
    return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member", id: member.id }, /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-team-member-image-container shape-${imageShape}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-image" }, member.imageUrl ? /* @__PURE__ */ wp.element.createElement("img", { src: member.imageUrl, alt: member.name }) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-placeholder" }))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-content" }, /* @__PURE__ */ wp.element.createElement(
      RichText13,
      {
        tagName: "h3",
        className: "digiblocks-team-member-name",
        value: member.name
      }
    ), showPosition && member.position && /* @__PURE__ */ wp.element.createElement(
      RichText13,
      {
        tagName: "p",
        className: "digiblocks-team-member-position",
        value: member.position
      }
    ), showDescription && member.description && /* @__PURE__ */ wp.element.createElement(
      RichText13,
      {
        tagName: "div",
        className: "digiblocks-team-member-description",
        value: member.description
      }
    ), showSocialIcons && activeSocialLinks.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-social-links" }, activeSocialLinks.map((link, i) => /* @__PURE__ */ wp.element.createElement(
      "a",
      {
        key: i,
        href: link.url,
        className: "digiblocks-team-member-social-link",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": link.platform
      },
      getSocialIcon(link.platform)
    )))));
  };
  var TeamSave = ({ attributes }) => {
    const {
      id,
      layout,
      alignment,
      showPosition,
      showDescription,
      showSocialIcons,
      imageShape,
      animation,
      anchor,
      customClasses,
      members
    } = attributes;
    const blockClasses = [
      "digiblocks-team-block",
      `layout-${layout}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
      // Add custom classes if they exist
    ].filter(Boolean).join(" ");
    const commonProps = {
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...commonProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-container" }, (members || []).map((member, index) => /* @__PURE__ */ wp.element.createElement(
      TeamMemberComponent,
      {
        key: member.id,
        member,
        imageShape,
        showPosition,
        showDescription,
        showSocialIcons,
        alignment
      }
    ))));
  };
  var save_default13 = TeamSave;

  // resources/js/blocks/index.js
  var { __: __14 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  var getBlockActiveStatus = (blockName) => {
    if (digiBlocksData.activeBlocks && typeof digiBlocksData.activeBlocks[blockName] !== "undefined") {
      return digiBlocksData.activeBlocks[blockName];
    }
    return true;
  };
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
    keywords: [__14("accordion", "digiblocks"), __14("toggle", "digiblocks"), __14("collapse", "digiblocks"), __14("faq", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      inserter: getBlockActiveStatus("accordion") ? true : false,
      // Remove the block if disabled
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
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
            title: __14("Accordion Item 1", "digiblocks"),
            content: __14("Add your content here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
            isOpen: true
          },
          {
            id: "item-2",
            title: __14("Accordion Item 2", "digiblocks"),
            content: __14("Add your content here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
            isOpen: false
          }
        ]
      },
      titleColor: {
        type: "string",
        default: "#333333"
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
          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
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
        default: "#333333"
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
            title: __14("Accordion Item 1", "digiblocks"),
            content: __14("This is some sample content for the accordion item.", "digiblocks"),
            isOpen: true
          },
          {
            id: "item-2",
            title: __14("Accordion Item 2", "digiblocks"),
            content: __14("Click on an accordion item to see it expand.", "digiblocks"),
            isOpen: false
          }
        ]
      }
    },
    edit: edit_default,
    save: save_default
  });
  registerBlockType("digiblocks/call-to-action", {
    apiVersion: 2,
    title: digiBlocksData.blocks["call-to-action"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["call-to-action"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["call-to-action"].description,
    keywords: [__14("cta", "digiblocks"), __14("call to action", "digiblocks"), __14("button", "digiblocks"), __14("conversion", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("call-to-action") ? true : false,
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      style: {
        type: "string",
        default: "basic"
      },
      horizontalLayout: {
        type: "boolean",
        default: false
      },
      title: {
        type: "string",
        default: __14("Ready to Get Started?", "digiblocks")
      },
      content: {
        type: "string",
        default: __14("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.", "digiblocks")
      },
      headingTag: {
        type: "string",
        default: "h2"
      },
      titleColor: {
        type: "string",
        default: "#333333"
      },
      textColor: {
        type: "string",
        default: "#666666"
      },
      buttonColor: {
        type: "string",
        default: "#1e73be"
      },
      buttonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      backgroundColor: {
        type: "string",
        default: "#f5f5f5"
      },
      backgroundType: {
        type: "string",
        default: "color"
      },
      backgroundImage: {
        type: "object",
        default: null
      },
      backgroundOverlayColor: {
        type: "string",
        default: "rgba(0,0,0,0.5)"
      },
      backgroundOverlayOpacity: {
        type: "number",
        default: 50
      },
      backgroundPosition: {
        type: "string",
        default: "center center"
      },
      backgroundSize: {
        type: "string",
        default: "cover"
      },
      backgroundRepeat: {
        type: "string",
        default: "no-repeat"
      },
      borderStyle: {
        type: "string",
        default: "none"
      },
      borderWidth: {
        type: "object"
      },
      borderRadius: {
        type: "object"
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      padding: {
        type: "object"
      },
      margin: {
        type: "object"
      },
      align: {
        type: "string",
        default: "left"
      },
      titleTypography: {
        type: "object"
      },
      contentTypography: {
        type: "object"
      },
      buttonTypography: {
        type: "object"
      },
      contentWidth: {
        type: "number"
      },
      width: {
        type: "string",
        default: "100%"
      },
      animation: {
        type: "string",
        default: "none"
      },
      boxShadow: {
        type: "object"
      },
      boxShadowHover: {
        type: "object"
      },
      buttonBorderRadius: {
        type: "object"
      },
      buttonPadding: {
        type: "object"
      },
      buttonsAlign: {
        type: "string",
        default: "left"
      },
      buttons: {
        type: "array",
        default: []
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      textHoverColor: {
        type: "string",
        default: ""
      },
      buttonHoverColor: {
        type: "string",
        default: ""
      },
      buttonTextHoverColor: {
        type: "string",
        default: ""
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      highlightText: {
        type: "string",
        default: ""
      },
      highlightColor: {
        type: "string",
        default: "#ffde59"
      },
      highlightType: {
        type: "string",
        default: "none"
      },
      verticalAlign: {
        type: "string",
        default: "center"
      },
      reverseColumnsMobile: {
        type: "boolean",
        default: false
      },
      minHeight: {
        type: "object"
      },
      gradientDirection: {
        type: "number",
        default: 135
      },
      ribbonColor: {
        type: "string",
        default: "#1e73be"
      },
      ribbonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      ribbonPosition: {
        type: "string",
        default: "top-right"
      },
      ribbonText: {
        type: "string",
        default: "Special Offer"
      }
    },
    example: {
      attributes: {
        style: "basic",
        title: __14("Ready to Get Started?", "digiblocks"),
        content: __14("Join us today and experience the difference.", "digiblocks"),
        buttons: [
          {
            id: "button-1",
            text: __14("Sign Up Now", "digiblocks"),
            url: "#",
            isPrimary: true
          }
        ],
        backgroundColor: "#f5f5f5"
      }
    },
    edit: edit_default2,
    save: save_default2
  });
  registerBlockType("digiblocks/countdown", {
    apiVersion: 2,
    title: digiBlocksData.blocks["countdown"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["countdown"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["countdown"].description,
    keywords: [__14("countdown", "digiblocks"), __14("timer", "digiblocks"), __14("clock", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("countdown") ? true : false,
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      endDate: {
        type: "string",
        default: ""
      },
      showDays: {
        type: "boolean",
        default: true
      },
      showHours: {
        type: "boolean",
        default: true
      },
      showMinutes: {
        type: "boolean",
        default: true
      },
      showSeconds: {
        type: "boolean",
        default: true
      },
      daysLabel: {
        type: "string",
        default: __14("Days", "digiblocks")
      },
      hoursLabel: {
        type: "string",
        default: __14("Hours", "digiblocks")
      },
      minutesLabel: {
        type: "string",
        default: __14("Minutes", "digiblocks")
      },
      secondsLabel: {
        type: "string",
        default: __14("Seconds", "digiblocks")
      },
      digitColor: {
        type: "string",
        default: "#333333"
      },
      digitBackground: {
        type: "string",
        default: "#f0f0f0"
      },
      digitHoverColor: {
        type: "string",
        default: ""
      },
      digitHoverBackground: {
        type: "string",
        default: ""
      },
      labelColor: {
        type: "string",
        default: "#666666"
      },
      labelHoverColor: {
        type: "string",
        default: ""
      },
      separatorColor: {
        type: "string",
        default: "#333333"
      },
      separatorHoverColor: {
        type: "string",
        default: ""
      },
      boxStyle: {
        type: "string",
        default: "default"
      },
      boxBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" }
        }
      },
      boxPadding: {
        type: "object",
        default: {
          desktop: { top: 10, right: 10, bottom: 10, left: 10, unit: "px" },
          tablet: { top: 10, right: 10, bottom: 10, left: 10, unit: "px" },
          mobile: { top: 10, right: 10, bottom: 10, left: 10, unit: "px" }
        }
      },
      boxMargin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      boxBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
        }
      },
      boxBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      showBoxShadow: {
        type: "boolean",
        default: false
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
      itemSpacing: {
        type: "object",
        default: {
          desktop: 48,
          tablet: 30,
          mobile: 16
        }
      },
      align: {
        type: "string",
        default: "center"
      },
      labelPosition: {
        type: "string",
        default: "bottom"
      },
      labelSpacing: {
        type: "object",
        default: {
          desktop: 5,
          tablet: 4,
          mobile: 3
        }
      },
      titleTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 70, tablet: 38, mobile: 26 },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      contentTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: 14, mobile: 12 },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.4 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      expiredMessage: {
        type: "string",
        default: __14("Time's up!", "digiblocks")
      },
      animation: {
        type: "string",
        default: "none"
      },
      displaySeparator: {
        type: "boolean",
        default: false
      },
      separatorType: {
        type: "string",
        default: "colon"
      },
      boxesEqual: {
        type: "boolean",
        default: false
      },
      style: {
        type: "string",
        default: "boxes"
      }
    },
    example: {
      attributes: {
        endDate: new Date(Date.now() + 2592e6).toISOString(),
        // 30 days from now
        style: "boxes",
        boxStyle: "filled",
        digitColor: "#ffffff",
        digitBackground: "#1e73be",
        labelColor: "#333333",
        showDays: true,
        showHours: true,
        showMinutes: true,
        showSeconds: true,
        titleTypography: {
          fontSize: { desktop: 32 }
        },
        contentTypography: {
          fontSize: { desktop: 14 }
        }
      }
    },
    edit: edit_default3,
    save: save_default3
  });
  registerBlockType("digiblocks/counter", {
    apiVersion: 2,
    title: digiBlocksData.blocks["counter"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["counter"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["counter"].description,
    keywords: [__14("counter", "digiblocks"), __14("number", "digiblocks"), __14("stats", "digiblocks"), __14("count up", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("counter") ? true : false,
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      iconValue: {
        type: "object",
        default: null
      },
      startNumber: {
        type: "string",
        default: "0"
      },
      endNumber: {
        type: "string",
        default: "100"
      },
      counterPrefix: {
        type: "string",
        default: ""
      },
      counterPrefixSpacing: {
        type: "number",
        default: 5
      },
      counterSuffix: {
        type: "string",
        default: ""
      },
      counterSuffixSpacing: {
        type: "number",
        default: 5
      },
      title: {
        type: "string",
        default: "Counter Title"
      },
      description: {
        type: "string",
        default: "Add description here."
      },
      counterColor: {
        type: "string",
        default: "#333333"
      },
      counterHoverColor: {
        type: "string",
        default: ""
      },
      titleColor: {
        type: "string",
        default: "#333333"
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      textColor: {
        type: "string",
        default: "#666666"
      },
      textHoverColor: {
        type: "string",
        default: ""
      },
      backgroundColor: {
        type: "string",
        default: "transparent"
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      iconColor: {
        type: "string",
        default: "#1e73be"
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      iconBackgroundColor: {
        type: "string",
        default: "transparent"
      },
      iconHoverBackgroundColor: {
        type: "string",
        default: ""
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 32,
          tablet: 28,
          mobile: 24
        }
      },
      iconPadding: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      iconMargin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
        }
      },
      iconBorderStyle: {
        type: "string",
        default: "default"
      },
      iconBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
        }
      },
      iconBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      iconBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      iconHoverBorderColor: {
        type: "string",
        default: ""
      },
      typography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 48, tablet: 42, mobile: 36 },
          fontSizeUnit: "px",
          fontWeight: "700",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      titleTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 20, tablet: 18, mobile: 16 },
          fontSizeUnit: "px",
          fontWeight: "500",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
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
      padding: {
        type: "object",
        default: {
          desktop: {
            top: 30,
            right: 30,
            bottom: 30,
            left: 30,
            unit: "px"
          },
          tablet: {
            top: 25,
            right: 25,
            bottom: 25,
            left: 25,
            unit: "px"
          },
          mobile: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
            unit: "px"
          }
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: {
            top: 0,
            right: 0,
            bottom: 30,
            left: 0,
            unit: "px"
          },
          tablet: {
            top: 0,
            right: 0,
            bottom: 25,
            left: 0,
            unit: "px"
          },
          mobile: {
            top: 0,
            right: 0,
            bottom: 20,
            left: 0,
            unit: "px"
          }
        }
      },
      align: {
        type: "string",
        default: "center"
      },
      animation: {
        type: "string",
        default: "none"
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
      borderStyle: {
        type: "string",
        default: "default"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          },
          tablet: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          },
          mobile: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          },
          tablet: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          },
          mobile: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      hoverEffect: {
        type: "string",
        default: "none"
      },
      animationDuration: {
        type: "number",
        default: 2e3
      },
      animationDelay: {
        type: "number",
        default: 0
      },
      thousandSeparator: {
        type: "string",
        default: ","
      },
      decimalPlaces: {
        type: "number",
        default: 0
      },
      decimalSeparator: {
        type: "string",
        default: "."
      },
      layoutStyle: {
        type: "string",
        default: "stacked"
      },
      verticalSpacing: {
        type: "number",
        default: 15
      },
      displayIcon: {
        type: "boolean",
        default: false
      },
      numberWithCommas: {
        type: "boolean",
        default: true
      }
    },
    example: {
      attributes: {
        startNumber: "0",
        endNumber: "100",
        counterPrefix: "",
        counterSuffix: "+",
        title: "Happy Clients",
        description: "Serving clients with excellence",
        displayIcon: true,
        iconValue: {
          id: "user-check",
          name: "User Check",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z"/></svg>',
          style: "solid",
          categories: ["users-people"]
        },
        counterColor: "#1e73be",
        iconColor: "#1e73be",
        backgroundColor: "#ffffff"
      }
    },
    edit: edit_default4,
    save: save_default4
  });
  registerBlockType("digiblocks/faq", {
    apiVersion: 2,
    title: digiBlocksData.blocks["faq"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["faq"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["faq"].description,
    keywords: [__14("faq", "digiblocks"), __14("questions", "digiblocks"), __14("answers", "digiblocks"), __14("schema", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      inserter: getBlockActiveStatus("faq") ? true : false,
      // Remove the block if disabled
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      items: {
        type: "array",
        default: [
          {
            id: "faq-item-1",
            title: __14("What is a frequently asked question?", "digiblocks"),
            content: __14("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.", "digiblocks"),
            isOpen: true
          },
          {
            id: "faq-item-2",
            title: __14("How do I add more questions and answers?", "digiblocks"),
            content: __14('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.', "digiblocks"),
            isOpen: false
          }
        ]
      },
      titleColor: {
        type: "string",
        default: "#333333"
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
      contentBackgroundColor: {
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
          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
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
          fontSize: { desktop: 18, tablet: 16, mobile: 15 },
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
        default: "#333333"
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
      },
      titleTag: {
        type: "string",
        default: "h3"
      },
      questionPrefix: {
        type: "string",
        default: ""
      },
      questionPrefixColor: {
        type: "string",
        default: ""
      },
      answerPrefix: {
        type: "string",
        default: ""
      },
      answerPrefixColor: {
        type: "string",
        default: ""
      },
      layout: {
        type: "string",
        default: "boxed"
      },
      itemsSpacing: {
        type: "object",
        default: {
          desktop: 16,
          tablet: 12,
          mobile: 8
        }
      },
      schemaEnabled: {
        type: "boolean",
        default: true
      },
      schemaType: {
        type: "string",
        default: "FAQPage"
      },
      schemaName: {
        type: "string",
        default: ""
      }
    },
    example: {
      attributes: {
        items: [
          {
            id: "faq-item-1",
            title: __14("What is a frequently asked question?", "digiblocks"),
            content: __14("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.", "digiblocks"),
            isOpen: true
          },
          {
            id: "faq-item-2",
            title: __14("How do I add more questions?", "digiblocks"),
            content: __14('Click the "Add FAQ Item" button to add more questions and answers.', "digiblocks"),
            isOpen: false
          }
        ],
        layout: "boxed",
        titleColor: "#333333",
        titleActiveColor: "#1e73be",
        backgroundColor: "#ffffff"
      }
    },
    edit: edit_default5,
    save: save_default5
  });
  registerBlockType("digiblocks/google-map", {
    apiVersion: 2,
    title: digiBlocksData.blocks["google-map"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["google-map"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["google-map"].description,
    keywords: [__14("map", "digiblocks"), __14("google", "digiblocks"), __14("location", "digiblocks"), __14("marker", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("google-map") ? true : false,
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      address: {
        type: "string",
        default: ""
      },
      mapHeight: {
        type: "object",
        default: {
          desktop: 400,
          tablet: 350,
          mobile: 300
        }
      },
      zoom: {
        type: "number",
        default: 10
      },
      mapType: {
        type: "string",
        default: "roadmap"
      },
      mapStyle: {
        type: "string",
        default: "default"
      },
      customMapStyle: {
        type: "string",
        default: ""
      },
      mapId: {
        type: "string",
        default: ""
      },
      markers: {
        type: "array",
        default: []
      },
      animation: {
        type: "string",
        default: "none"
      },
      enableZoom: {
        type: "boolean",
        default: true
      },
      enableScroll: {
        type: "boolean",
        default: true
      },
      enableFullscreenControl: {
        type: "boolean",
        default: true
      },
      enableStreetViewControl: {
        type: "boolean",
        default: true
      },
      enableMapTypeControl: {
        type: "boolean",
        default: true
      },
      borderStyle: {
        type: "string",
        default: "none"
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
        }
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
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
      }
    },
    example: {
      attributes: {
        address: "New York, NY",
        mapHeight: {
          desktop: 300
        },
        zoom: 12,
        mapType: "roadmap",
        markers: [
          {
            id: "marker-1",
            address: "New York, NY",
            latitude: 40.7128,
            longitude: -74.006,
            title: "New York City"
          }
        ]
      }
    },
    edit: edit_default6,
    save: save_default6
  });
  registerBlockType("digiblocks/heading", {
    apiVersion: 2,
    title: digiBlocksData.blocks["heading"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["heading"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["heading"].description,
    keywords: [__14("heading", "digiblocks"), __14("title", "digiblocks"), __14("header", "digiblocks")],
    // Disable default controls and settings panels
    supports: {
      inserter: getBlockActiveStatus("heading") ? true : false,
      // Remove the block if disabled
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      content: {
        type: "string",
        default: __14("Add Your Heading", "digiblocks")
      },
      level: {
        type: "number",
        default: 2
      },
      textColor: {
        type: "string",
        default: "#333333"
      },
      textHoverColor: {
        type: "string",
        default: ""
      },
      backgroundColor: {
        type: "string",
        default: ""
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      typography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 32, tablet: 28, mobile: 24 },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      align: {
        type: "string",
        default: "left"
      },
      padding: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
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
      animation: {
        type: "string",
        default: "none"
      },
      highlightText: {
        type: "string",
        default: ""
      },
      highlightColor: {
        type: "string",
        default: "#ffde59"
      },
      highlightType: {
        type: "string",
        default: "background"
      },
      displaySeparator: {
        type: "boolean",
        default: false
      },
      separatorColor: {
        type: "string",
        default: "#1e73be"
      },
      separatorSecondaryColor: {
        type: "string",
        default: "#e0e0e0"
      },
      separatorWidth: {
        type: "object",
        default: {
          desktop: 50,
          tablet: 40,
          mobile: 30
        }
      },
      separatorHeight: {
        type: "object",
        default: {
          desktop: 3,
          tablet: 2,
          mobile: 2
        }
      },
      separatorPosition: {
        type: "string",
        default: "bottom"
      },
      separatorStyle: {
        type: "string",
        default: "line-solid"
      },
      separatorSpacing: {
        type: "object",
        default: {
          desktop: 10,
          tablet: 8,
          mobile: 6
        }
      },
      separatorBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      linkEnabled: {
        type: "boolean",
        default: false
      },
      linkUrl: {
        type: "string",
        default: ""
      },
      linkOpenInNewTab: {
        type: "boolean",
        default: false
      },
      linkRel: {
        type: "string",
        default: ""
      },
      shadowEnabled: {
        type: "boolean",
        default: false
      },
      textShadow: {
        type: "object",
        default: {
          horizontal: 2,
          vertical: 2,
          blur: 3,
          color: "rgba(0,0,0,0.3)"
        }
      }
    },
    example: {
      attributes: {
        content: __14("Beautiful Heading", "digiblocks"),
        level: 2,
        textColor: "#333333",
        typography: {
          fontSize: { desktop: 32 },
          fontWeight: "600",
          lineHeight: { desktop: 1.2 }
        },
        displaySeparator: true,
        separatorStyle: "line-gradient",
        separatorColor: "#1e73be"
      }
    },
    edit: edit_default7,
    save: save_default7
  });
  registerBlockType("digiblocks/icon", {
    apiVersion: 2,
    title: digiBlocksData.blocks["icon"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["icon"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["icon"].description,
    keywords: [__14("icon", "digiblocks"), __14("symbol", "digiblocks"), __14("fontawesome", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      inserter: getBlockActiveStatus("icon") ? true : false,
      // Remove the block if disabled
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      iconValue: {
        type: "object",
        default: {
          id: "heart",
          name: "Heart",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>',
          style: "solid",
          categories: ["symbols", "emoji"]
        }
      },
      iconColor: {
        type: "string",
        default: "#1e73be"
      },
      iconBackgroundColor: {
        type: "string",
        default: "transparent"
      },
      iconBorderStyle: {
        type: "string",
        default: "default"
      },
      iconBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
        }
      },
      iconBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      iconBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      iconPadding: {
        type: "object",
        default: {
          desktop: { top: 10, right: 10, bottom: 10, left: 10, unit: "px" },
          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          mobile: { top: 5, right: 5, bottom: 5, left: 5, unit: "px" }
        }
      },
      iconMargin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      iconHoverBackgroundColor: {
        type: "string",
        default: ""
      },
      iconHoverBorderColor: {
        type: "string",
        default: ""
      },
      linkEnabled: {
        type: "boolean",
        default: false
      },
      linkUrl: {
        type: "string",
        default: ""
      },
      linkOpenInNewTab: {
        type: "boolean",
        default: false
      },
      linkRel: {
        type: "string",
        default: ""
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 48,
          tablet: 40,
          mobile: 32
        }
      },
      backgroundColor: {
        type: "string",
        default: "transparent"
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      align: {
        type: "string",
        default: "center"
      },
      animation: {
        type: "string",
        default: "none"
      },
      borderStyle: {
        type: "string",
        default: "default"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          },
          tablet: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          },
          mobile: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          },
          tablet: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          },
          mobile: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      hoverEffect: {
        type: "string",
        default: "none"
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
      rotateIcon: {
        type: "number",
        default: 0
      },
      flipHorizontal: {
        type: "boolean",
        default: false
      },
      flipVertical: {
        type: "boolean",
        default: false
      }
    },
    example: {
      attributes: {
        iconValue: {
          id: "star",
          name: "Star",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
          style: "solid",
          categories: ["design", "basic-shapes"]
        },
        iconColor: "#1e73be",
        backgroundColor: "transparent",
        iconSize: { desktop: 20 }
      },
      viewportWidth: 100
    },
    edit: edit_default8,
    save: save_default8
  });
  registerBlockType("digiblocks/icon-box", {
    apiVersion: 2,
    title: digiBlocksData.blocks["icon-box"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["icon-box"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["icon-box"].description,
    keywords: [__14("icon", "digiblocks"), __14("box", "digiblocks"), __14("feature", "digiblocks"), __14("service", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      inserter: getBlockActiveStatus("icon-box") ? true : false,
      // Remove the block if disabled
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      iconValue: {
        type: "object",
        default: null
      },
      title: {
        type: "string",
        default: __14("Feature Title", "digiblocks")
      },
      content: {
        type: "string",
        default: __14("Add your feature description here. Explain what makes this feature special.", "digiblocks")
      },
      iconColor: {
        type: "string",
        default: "#1e73be"
      },
      titleColor: {
        type: "string",
        default: "#333333"
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      textColor: {
        type: "string",
        default: "#666666"
      },
      textHoverColor: {
        type: "string",
        default: ""
      },
      backgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      iconBackgroundColor: {
        type: "string",
        default: "transparent"
      },
      iconBorderStyle: {
        type: "string",
        default: "default"
      },
      iconBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
        }
      },
      iconBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      iconBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      iconPadding: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      iconMargin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
        }
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      iconHoverBackgroundColor: {
        type: "string",
        default: ""
      },
      iconHoverBorderColor: {
        type: "string",
        default: ""
      },
      linkEnabled: {
        type: "boolean",
        default: false
      },
      linkUrl: {
        type: "string",
        default: ""
      },
      linkOpenInNewTab: {
        type: "boolean",
        default: false
      },
      linkRel: {
        type: "string",
        default: ""
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 48,
          tablet: 40,
          mobile: 32
        }
      },
      titleTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 22, tablet: 20, mobile: 18 },
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
      padding: {
        type: "object",
        default: {
          desktop: {
            top: 30,
            right: 30,
            bottom: 30,
            left: 30,
            unit: "px"
          },
          tablet: {
            top: 25,
            right: 25,
            bottom: 25,
            left: 25,
            unit: "px"
          },
          mobile: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
            unit: "px"
          }
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: {
            top: 0,
            right: 0,
            bottom: 30,
            left: 0,
            unit: "px"
          },
          tablet: {
            top: 0,
            right: 0,
            bottom: 25,
            left: 0,
            unit: "px"
          },
          mobile: {
            top: 0,
            right: 0,
            bottom: 20,
            left: 0,
            unit: "px"
          }
        }
      },
      align: {
        type: "string",
        default: "center"
      },
      animation: {
        type: "string",
        default: "none"
      },
      borderStyle: {
        type: "string",
        default: "default"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          },
          tablet: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          },
          mobile: {
            top: 8,
            right: 8,
            bottom: 8,
            left: 8,
            unit: "px"
          }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          },
          tablet: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          },
          mobile: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            unit: "px"
          }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      hoverEffect: {
        type: "string",
        default: "none"
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
      }
    },
    example: {
      attributes: {
        iconValue: {
          id: "star",
          name: "Star",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
          style: "solid",
          categories: ["design", "lifestyle-and-hobbies", "social"]
        },
        title: __14("Feature Title", "digiblocks"),
        content: __14("Add your feature description here. Explain what makes this feature special.", "digiblocks"),
        iconColor: "#1e73be",
        backgroundColor: "#ffffff"
      },
      viewportWidth: 400
    },
    edit: edit_default9,
    save: save_default9
  });
  registerBlockType("digiblocks/separator", {
    apiVersion: 2,
    title: digiBlocksData.blocks["separator"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["separator"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["separator"].description,
    keywords: [__14("separator", "digiblocks"), __14("divider", "digiblocks"), __14("horizontal rule", "digiblocks"), __14("hr", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      inserter: getBlockActiveStatus("separator") ? true : false,
      // Remove the block if disabled
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      contentType: {
        type: "string",
        default: "none"
      },
      content: {
        type: "string",
        default: "Separator"
      },
      iconValue: {
        type: "object",
        default: null
      },
      separatorStyle: {
        type: "string",
        default: "line"
      },
      primaryColor: {
        type: "string",
        default: "#222222"
      },
      secondaryColor: {
        type: "string",
        default: "#f0f0f0"
      },
      textColor: {
        type: "string",
        default: "#333333"
      },
      width: {
        type: "object",
        default: {
          desktop: 100,
          tablet: 100,
          mobile: 100
        }
      },
      widthUnit: {
        type: "string",
        default: "%"
      },
      height: {
        type: "object",
        default: {
          desktop: 3,
          tablet: 2,
          mobile: 2
        }
      },
      heightUnit: {
        type: "string",
        default: "px"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: 0,
          tablet: 0,
          mobile: 0
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: {
            top: 30,
            bottom: 30,
            unit: "px"
          },
          tablet: {
            top: 25,
            bottom: 25,
            unit: "px"
          },
          mobile: {
            top: 20,
            bottom: 20,
            unit: "px"
          }
        }
      },
      align: {
        type: "string",
        default: "center"
      },
      animation: {
        type: "string",
        default: "none"
      },
      typography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: 15, mobile: 14 },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 24,
          tablet: 20,
          mobile: 16
        }
      },
      gap: {
        type: "object",
        default: {
          desktop: 15,
          tablet: 10,
          mobile: 8
        }
      }
    },
    example: {
      attributes: {
        separatorStyle: "gradient",
        primaryColor: "#1e73be",
        secondaryColor: "#f0f0f0",
        width: { desktop: 80 },
        height: { desktop: 4 },
        contentType: "text",
        content: "Section",
        textColor: "#333333"
      }
    },
    edit: edit_default10,
    save: save_default10
  });
  registerBlockType("digiblocks/social-icons", {
    apiVersion: 2,
    title: digiBlocksData.blocks["social-icons"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["social-icons"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["social-icons"].description,
    keywords: [__14("social", "digiblocks"), __14("icons", "digiblocks"), __14("networks", "digiblocks"), __14("media", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      inserter: getBlockActiveStatus("social-icons") ? true : false,
      // Remove the block if disabled
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      icons: {
        type: "array",
        default: [
          {
            id: "social-icon-1",
            iconValue: null,
            url: "",
            label: "",
            openInNewTab: true,
            rel: "nofollow"
          }
        ]
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 24,
          tablet: 22,
          mobile: 20
        }
      },
      iconSpacing: {
        type: "object",
        default: {
          desktop: 10,
          tablet: 8,
          mobile: 6
        }
      },
      labelSpacing: {
        type: "object",
        default: {
          desktop: 5,
          tablet: 5,
          mobile: 5
        }
      },
      iconColor: {
        type: "string",
        default: "#333333"
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      labelColor: {
        type: "string",
        default: ""
      },
      labelHoverColor: {
        type: "string",
        default: ""
      },
      iconBackground: {
        type: "string",
        default: "transparent"
      },
      iconHoverBackground: {
        type: "string",
        default: ""
      },
      iconBorderStyle: {
        type: "string",
        default: "none"
      },
      iconBorderWidth: {
        type: "object",
        default: {
          desktop: { value: 1, unit: "px" },
          tablet: { value: 1, unit: "px" },
          mobile: { value: 1, unit: "px" }
        }
      },
      iconBorderRadius: {
        type: "object",
        default: {
          desktop: { value: 0, unit: "px" },
          tablet: { value: 0, unit: "px" },
          mobile: { value: 0, unit: "px" }
        }
      },
      iconBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      iconHoverBorderColor: {
        type: "string",
        default: ""
      },
      align: {
        type: "string",
        default: "left"
      },
      padding: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      animation: {
        type: "string",
        default: "none"
      },
      showLabels: {
        type: "boolean",
        default: false
      },
      labelPosition: {
        type: "string",
        default: "bottom"
      },
      textTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 14, tablet: 13, mobile: 12 },
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
      }
    },
    example: {
      attributes: {
        icons: [
          {
            id: "example-icon-1",
            iconValue: {
              name: "Facebook",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"></path></svg>'
            },
            url: "https://facebook.com",
            label: "Facebook",
            openInNewTab: true,
            rel: "nofollow"
          },
          {
            id: "example-icon-2",
            iconValue: {
              name: "Twitter",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>'
            },
            url: "https://twitter.com",
            label: "Twitter",
            openInNewTab: true,
            rel: "nofollow"
          },
          {
            id: "example-icon-3",
            iconValue: {
              name: "Instagram",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>'
            },
            url: "https://instagram.com",
            label: "Instagram",
            openInNewTab: true,
            rel: "nofollow"
          }
        ],
        iconSpacing: { desktop: 20 },
        align: "center",
        iconColor: "#1e73be",
        labelColor: "#09053a",
        iconBackground: "transparent",
        showLabels: true,
        labelPosition: "right"
      }
    },
    edit: edit_default11,
    save: save_default11
  });
  registerBlockType("digiblocks/spacer", {
    apiVersion: 2,
    title: digiBlocksData.blocks["spacer"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["spacer"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["spacer"].description,
    keywords: [__14("spacer", "digiblocks"), __14("gap", "digiblocks"), __14("spacing", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("spacer") ? true : false,
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      height: {
        type: "object",
        default: {
          desktop: 80,
          tablet: 60,
          mobile: 40
        }
      }
    },
    example: {
      attributes: {
        height: {
          desktop: 80
        }
      }
    },
    edit: edit_default12,
    save: save_default12
  });
  registerBlockType("digiblocks/team", {
    apiVersion: 2,
    title: digiBlocksData.blocks["team"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["team"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["team"].description,
    keywords: [__14("team", "digiblocks"), __14("staff", "digiblocks"), __14("members", "digiblocks"), __14("employees", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("spacer") ? true : false,
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      layout: {
        type: "string",
        default: "grid"
      },
      columns: {
        type: "object",
        default: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        }
      },
      gap: {
        type: "object",
        default: {
          desktop: { horizontal: 30, vertical: 30, unit: "px" },
          tablet: { horizontal: 20, vertical: 20, unit: "px" },
          mobile: { horizontal: 15, vertical: 15, unit: "px" }
        }
      },
      alignment: {
        type: "string",
        default: "center"
      },
      showDescription: {
        type: "boolean",
        default: true
      },
      showPosition: {
        type: "boolean",
        default: true
      },
      showSocialIcons: {
        type: "boolean",
        default: true
      },
      imageSize: {
        type: "object",
        default: {
          desktop: 150,
          tablet: 120,
          mobile: 100
        }
      },
      imageShape: {
        type: "string",
        default: "circle"
      },
      imageBorderWidth: {
        type: "object",
        default: {
          desktop: 0,
          tablet: 0,
          mobile: 0
        }
      },
      imageBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      imageBorderHoverColor: {
        type: "string",
        default: ""
      },
      imageMargin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: "px" }
        }
      },
      nameColor: {
        type: "string",
        default: "#333333"
      },
      nameHoverColor: {
        type: "string",
        default: ""
      },
      positionColor: {
        type: "string",
        default: "#666666"
      },
      positionHoverColor: {
        type: "string",
        default: ""
      },
      descriptionColor: {
        type: "string",
        default: "#666666"
      },
      descriptionHoverColor: {
        type: "string",
        default: ""
      },
      cardBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      cardBackgroundHoverColor: {
        type: "string",
        default: ""
      },
      socialIconsColor: {
        type: "string",
        default: "#1e73be"
      },
      socialIconsHoverColor: {
        type: "string",
        default: "#135e9e"
      },
      socialIconsBackgroundColor: {
        type: "string",
        default: "transparent"
      },
      socialIconsBackgroundHoverColor: {
        type: "string",
        default: ""
      },
      socialIconsSize: {
        type: "object",
        default: {
          desktop: 16,
          tablet: 14,
          mobile: 12
        }
      },
      socialIconsSpacing: {
        type: "object",
        default: {
          desktop: 10,
          tablet: 8,
          mobile: 6
        }
      },
      headingTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 22, tablet: 20, mobile: 18 },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      textTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: 15, mobile: 14 },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "italic",
          textTransform: "",
          textDecoration: "",
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
      padding: {
        type: "object",
        default: {
          desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: "px" },
          tablet: { top: 25, right: 25, bottom: 25, left: 25, unit: "px" },
          mobile: { top: 20, right: 20, bottom: 20, left: 20, unit: "px" }
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
      animation: {
        type: "string",
        default: "none"
      },
      borderStyle: {
        type: "string",
        default: "default"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      borderHoverColor: {
        type: "string",
        default: ""
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
      members: {
        type: "array",
        default: [
          {
            id: "member-1",
            name: "John Doe",
            position: "CEO & Founder",
            description: "John has over 15 years of experience in the industry and leads our company with a focus on innovation and growth.",
            imageUrl: "",
            imageId: 0,
            socialLinks: [
              { platform: "facebook", url: "" },
              { platform: "twitter", url: "" },
              { platform: "linkedin", url: "" },
              { platform: "instagram", url: "" }
            ]
          },
          {
            id: "member-2",
            name: "Jane Smith",
            position: "Marketing Director",
            description: "Jane brings creativity and strategic thinking to our marketing initiatives, with expertise in digital marketing and brand development.",
            imageUrl: "",
            imageId: 0,
            socialLinks: [
              { platform: "facebook", url: "" },
              { platform: "twitter", url: "" },
              { platform: "linkedin", url: "" },
              { platform: "instagram", url: "" }
            ]
          },
          {
            id: "member-3",
            name: "Michael Johnson",
            position: "Technical Lead",
            description: "Michael oversees all technical aspects of our projects, ensuring high-quality solutions that meet our clients' needs.",
            imageUrl: "",
            imageId: 0,
            socialLinks: [
              { platform: "facebook", url: "" },
              { platform: "twitter", url: "" },
              { platform: "linkedin", url: "" },
              { platform: "github", url: "" }
            ]
          }
        ]
      }
    },
    example: {
      attributes: {
        layout: "grid",
        columns: {
          desktop: 3
        },
        members: [
          {
            id: "member-1",
            name: "John Doe",
            position: "CEO & Founder",
            description: "John has over 15 years of experience in the industry.",
            imageUrl: ""
          },
          {
            id: "member-2",
            name: "Jane Smith",
            position: "Marketing Director",
            description: "Jane brings creativity and strategic thinking to our marketing initiatives.",
            imageUrl: ""
          }
        ]
      }
    },
    edit: edit_default13,
    save: save_default13
  });
})();
