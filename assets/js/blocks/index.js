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
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
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
            FontAwesomeControl,
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
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
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
            FontAwesomeControl,
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
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
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
            FontAwesomeControl,
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
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
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
            FontAwesomeControl,
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
    Tooltip: Tooltip3,
    TextControl: TextControl7,
    Popover,
    BaseControl: BaseControl6,
    __experimentalToggleGroupControl: ToggleGroupControl11,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption11
  } = window.wp.components;
  var { useState: useState11, useEffect: useEffect11, useRef: useRef11, Fragment } = window.wp.element;
  var { animations: animations11 } = digi.utils;
  var { tabIcons: tabIcons11 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl11, DimensionControl: DimensionControl10, TypographyControl: TypographyControl9, BoxShadowControl: BoxShadowControl9, CustomTabPanel: CustomTabPanel11, TabPanelBody: TabPanelBody11 } = digi.components;
  var socialIconsSVG = {
    facebook: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" })),
    twitter: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" })),
    linkedin: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" })),
    instagram: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" })),
    pinterest: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" })),
    youtube: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" })),
    dribbble: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" })),
    github: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" })),
    behance: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" })),
    vimeo: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" })),
    tiktok: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" })),
    email: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" })),
    website: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" }))
  };
  var plusIcon = /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }));
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
      textTypography
    } = attributes;
    const [localActiveDevice, setLocalActiveDevice] = useState11(window.digi.responsiveState.activeDevice);
    const previewTimeoutRef = useRef11(null);
    const [activeTab, setActiveTab] = useState11("options");
    const [urlPopover, setUrlPopover] = useState11(null);
    const [socialSelectPopover, setSocialSelectPopover] = useState11(null);
    useEffect11(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect11(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!icons || icons.length === 0) {
        setAttributes({
          icons: [
            {
              id: `social-icon-${clientId.substr(0, 8)}-1`,
              iconValue: {
                name: "Facebook",
                network: "facebook",
                svg: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
              },
              url: "https://facebook.com",
              label: "Facebook",
              openInNewTab: true,
              rel: "nofollow"
            }
          ]
        });
      }
    }, [clientId, icons, setAttributes, id]);
    useEffect11(() => {
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
    const socialNetworks = [
      { label: __11("Facebook", "digiblocks"), value: "facebook" },
      { label: __11("Twitter", "digiblocks"), value: "twitter" },
      { label: __11("LinkedIn", "digiblocks"), value: "linkedin" },
      { label: __11("Instagram", "digiblocks"), value: "instagram" },
      { label: __11("Pinterest", "digiblocks"), value: "pinterest" },
      { label: __11("YouTube", "digiblocks"), value: "youtube" },
      { label: __11("Dribbble", "digiblocks"), value: "dribbble" },
      { label: __11("GitHub", "digiblocks"), value: "github" },
      { label: __11("Behance", "digiblocks"), value: "behance" },
      { label: __11("Vimeo", "digiblocks"), value: "vimeo" },
      { label: __11("TikTok", "digiblocks"), value: "tiktok" },
      { label: __11("Email", "digiblocks"), value: "email" },
      { label: __11("Website", "digiblocks"), value: "website" }
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
    const addSocialIcon = () => {
      openSocialSelectPopover();
    };
    const openSocialSelectPopover = () => {
      setSocialSelectPopover({
        target: document.querySelector(".add-social")
      });
    };
    const closeSocialSelectPopover = () => {
      setSocialSelectPopover(null);
    };
    const addSpecificSocialNetwork = (network) => {
      const usedNetworks = icons.map(
        (icon) => icon.iconValue && icon.iconValue.network ? icon.iconValue.network : null
      ).filter(Boolean);
      if (usedNetworks.includes(network)) {
        return;
      }
      const newSocialId = `social-icon-${clientId.substr(0, 8)}-${Date.now()}`;
      const newIcon = {
        id: newSocialId,
        iconValue: {
          name: network.charAt(0).toUpperCase() + network.slice(1),
          network,
          svg: socialIconsSVG[network] ? socialIconsSVG[network].props.children.props.d : ""
        },
        url: "",
        label: network.charAt(0).toUpperCase() + network.slice(1),
        openInNewTab: true,
        rel: "nofollow"
      };
      setAttributes({
        icons: [...icons, newIcon]
      });
      closeSocialSelectPopover();
      setTimeout(() => {
        const socialIndex = icons.length;
        openUrlPopover(socialIndex);
      }, 100);
    };
    const removeSocialIcon = (index) => {
      if (icons.length > 1) {
        const newIcons = [...icons];
        newIcons.splice(index, 1);
        setAttributes({
          icons: newIcons
        });
      }
    };
    const updateSocialIcon = (index, key, value) => {
      const newIcons = [...icons];
      newIcons[index] = {
        ...newIcons[index],
        [key]: value
      };
      setAttributes({
        icons: newIcons
      });
    };
    const openUrlPopover = (index) => {
      setUrlPopover({
        index,
        target: document.getElementById(`social-icon-${index}`)
      });
    };
    const closeUrlPopover = () => {
      setUrlPopover(null);
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
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
                align-items: center;
                flex-wrap: wrap;
                gap: ${currentIconSpacing}px;
                justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-wrapper {
                position: relative;
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
                cursor: pointer;
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
                cursor: pointer;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-icon span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-icon svg {
                width: ${currentIconSize}px;
                height: ${currentIconSize}px;
                fill: currentColor;
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
                background-color: ${iconHoverBackground || iconBackground || "transparent"};
                ${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ""}
                ${iconHoverColor ? `color: ${iconHoverColor};` : ""}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon-label {
                ${textTypographyCSS}
                color: ${labelColor || iconColor || "#333333"};
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon:hover .digiblocks-social-icon-label {
                color: ${labelHoverColor || iconHoverColor || labelColor || iconColor || "#333333"};
            }
            
            /* Editor-specific styles */
            [data-custom-id="${blockId}"] .digiblocks-social-icon-remove {
                position: absolute;
                top: -8px;
                right: -8px;
                background-color: #fff;
                border-radius: 50%;
                padding: 2px;
                display: none;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                z-index: 10;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-wrapper:hover .digiblocks-social-icon-remove {
                display: block;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon.add-social {
                background-color: #f0f0f0;
                color: #333;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-social-icon.add-social svg {
                width: .6rem;
                height: .6rem;
                fill: currentColor;
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
                
                [data-custom-id="${blockId}"] .digiblocks-social-icon.add-social {
                    width: ${iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.tablet || currentIconSize}px;
                }
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
                
                [data-custom-id="${blockId}"] .digiblocks-social-icon.add-social {
                    width: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                }
            }
        `;
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
    const renderSocialSelectPopover = () => {
      if (!socialSelectPopover)
        return null;
      const { target } = socialSelectPopover;
      const usedNetworks = icons.map(
        (icon) => icon.iconValue && icon.iconValue.network ? icon.iconValue.network : null
      ).filter(Boolean);
      const availableNetworks = socialNetworks.filter(
        (network) => !usedNetworks.includes(network.value)
      );
      if (availableNetworks.length === 0) {
        closeSocialSelectPopover();
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement(
        Popover,
        {
          anchor: target,
          onClose: closeSocialSelectPopover,
          position: "bottom center",
          expandOnMobile: true,
          className: "digiblocks-social-select-popover"
        },
        /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "12px", width: "280px", maxHeight: "400px", overflowY: "auto" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "10px", fontWeight: "bold" } }, __11("Select Social Network", "digiblocks")), /* @__PURE__ */ wp.element.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" } }, availableNetworks.map((network) => /* @__PURE__ */ wp.element.createElement(
          Button11,
          {
            key: network.value,
            variant: "secondary",
            onClick: () => addSpecificSocialNetwork(network.value),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "8px",
              gap: "8px"
            }
          },
          /* @__PURE__ */ wp.element.createElement("span", { style: { display: "inline-flex", alignItems: "center" } }, socialIconsSVG[network.value]),
          /* @__PURE__ */ wp.element.createElement("span", null, network.label)
        ))))
      );
    };
    const renderUrlPopover = () => {
      if (!urlPopover)
        return null;
      const { index, target } = urlPopover;
      const icon = icons[index];
      return /* @__PURE__ */ wp.element.createElement(
        Popover,
        {
          anchor: target,
          onClose: closeUrlPopover,
          position: "bottom center",
          expandOnMobile: true,
          className: "digiblocks-social-url-popover"
        },
        /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", padding: "12px", minWidth: "280px" } }, /* @__PURE__ */ wp.element.createElement(
          SelectControl11,
          {
            label: __11("Social Network", "digiblocks"),
            value: icon.iconValue ? icon.iconValue.network : "",
            options: socialNetworks,
            onChange: (value) => {
              const newIcons = [...icons];
              newIcons[index] = {
                ...newIcons[index],
                iconValue: {
                  name: value.charAt(0).toUpperCase() + value.slice(1),
                  network: value,
                  svg: socialIconsSVG[value] ? socialIconsSVG[value].props.children.props.d : ""
                }
              };
              setAttributes({ icons: newIcons });
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          TextControl7,
          {
            label: __11("URL", "digiblocks"),
            value: icon.url || "",
            onChange: (value) => updateSocialIcon(index, "url", value),
            placeholder: icon.iconValue && icon.iconValue.network === "email" ? "mailto:example@domain.com" : icon.iconValue && icon.iconValue.network === "website" ? "https://example.com" : `https://${icon.iconValue ? icon.iconValue.network : "example"}.com/username`,
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          TextControl7,
          {
            label: __11("Label", "digiblocks"),
            value: icon.label || "",
            onChange: (value) => updateSocialIcon(index, "label", value),
            placeholder: icon.iconValue ? icon.iconValue.name : __11("Social Media", "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          ToggleControl8,
          {
            label: __11("Open in new tab", "digiblocks"),
            checked: icon.openInNewTab === void 0 ? true : icon.openInNewTab,
            onChange: (value) => updateSocialIcon(index, "openInNewTab", value),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          TextControl7,
          {
            label: __11("Rel Attribute", "digiblocks"),
            value: icon.rel || "",
            onChange: (value) => updateSocialIcon(index, "rel", value),
            placeholder: __11("e.g. nofollow", "digiblocks"),
            help: __11('Optional. Add rel attributes like "nofollow", "sponsored", etc.', "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          Button11,
          {
            variant: "primary",
            onClick: closeUrlPopover,
            style: { justifyContent: "center", width: "100%" }
          },
          __11("Done", "digiblocks")
        ))
      );
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
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
      const socialIconsList = icons.map((icon, index) => {
        return /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: icon.id || index,
            className: "digiblocks-social-wrapper",
            id: `social-icon-${index}`
          },
          /* @__PURE__ */ wp.element.createElement(
            "div",
            {
              className: "digiblocks-social-icon",
              onClick: () => {
                openUrlPopover(index);
              }
            },
            /* @__PURE__ */ wp.element.createElement(
              "div",
              {
                className: "digiblocks-social-icon-icon"
              },
              icon.iconValue && icon.iconValue.network ? /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: {
                __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${icon.iconValue.network === "facebook" ? "0 0 320 512" : icon.iconValue.network === "twitter" ? "0 0 512 512" : icon.iconValue.network === "linkedin" ? "0 0 448 512" : icon.iconValue.network === "instagram" ? "0 0 448 512" : icon.iconValue.network === "pinterest" ? "0 0 384 512" : icon.iconValue.network === "youtube" ? "0 0 576 512" : icon.iconValue.network === "dribbble" ? "0 0 512 512" : icon.iconValue.network === "github" ? "0 0 496 512" : icon.iconValue.network === "behance" ? "0 0 576 512" : icon.iconValue.network === "vimeo" ? "0 0 448 512" : icon.iconValue.network === "tiktok" ? "0 0 448 512" : icon.iconValue.network === "email" ? "0 0 512 512" : "0 0 640 512"}" fill="currentColor"><path d="${icon.iconValue.svg}"/></svg>`
              } }) : /* @__PURE__ */ wp.element.createElement(
                "div",
                {
                  style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    fontSize: "20px",
                    color: "#555"
                  }
                },
                "?"
              )
            ),
            showLabels && icon.label && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-social-icon-label" }, icon.label)
          ),
          icons.length > 1 && /* @__PURE__ */ wp.element.createElement(
            Button11,
            {
              className: "digiblocks-social-icon-remove",
              onClick: () => removeSocialIcon(index),
              icon: "no-alt",
              isSmall: true,
              label: __11("Remove", "digiblocks")
            }
          )
        );
      });
      socialIconsList.push(
        /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: "add-social-icon",
            className: "digiblocks-social-icon add-social",
            onClick: addSocialIcon,
            title: __11("Add Social Icon", "digiblocks")
          },
          plusIcon
        )
      );
      return socialIconsList;
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, renderSocialIcons(), renderSocialSelectPopover(), renderUrlPopover()));
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
        if (!icon.iconValue || !icon.iconValue.network || !icon.url) {
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
                __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${icon.iconValue.network === "facebook" ? "0 0 320 512" : icon.iconValue.network === "twitter" ? "0 0 512 512" : icon.iconValue.network === "linkedin" ? "0 0 448 512" : icon.iconValue.network === "instagram" ? "0 0 448 512" : icon.iconValue.network === "pinterest" ? "0 0 384 512" : icon.iconValue.network === "youtube" ? "0 0 576 512" : icon.iconValue.network === "dribbble" ? "0 0 512 512" : icon.iconValue.network === "github" ? "0 0 496 512" : icon.iconValue.network === "behance" ? "0 0 576 512" : icon.iconValue.network === "vimeo" ? "0 0 448 512" : icon.iconValue.network === "tiktok" ? "0 0 448 512" : icon.iconValue.network === "email" ? "0 0 512 512" : "0 0 640 512"}" fill="currentColor"><path d="${icon.iconValue.network === "facebook" ? "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" : icon.iconValue.network === "twitter" ? "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" : icon.iconValue.network === "linkedin" ? "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" : icon.iconValue.network === "instagram" ? "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" : icon.iconValue.network === "pinterest" ? "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" : icon.iconValue.network === "youtube" ? "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" : icon.iconValue.network === "dribbble" ? "M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" : icon.iconValue.network === "github" ? "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" : icon.iconValue.network === "behance" ? "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" : icon.iconValue.network === "vimeo" ? "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" : icon.iconValue.network === "tiktok" ? "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" : icon.iconValue.network === "email" ? "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" : "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}"/></svg>`
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

  // blocks/table/edit.js
  var { __: __13 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps25,
    RichText: RichText12,
    InspectorControls: InspectorControls13,
    PanelColorSettings: PanelColorSettings12,
    BlockControls: BlockControls10
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl12,
    RangeControl: RangeControl13,
    ToggleControl: ToggleControl9,
    Button: Button12,
    ButtonGroup,
    Dropdown,
    ToolbarGroup,
    ToolbarButton,
    BaseControl: BaseControl7,
    Popover: Popover2,
    __experimentalToggleGroupControl: ToggleGroupControl12,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption12
  } = window.wp.components;
  var { useState: useState13, useEffect: useEffect13, useRef: useRef12 } = window.wp.element;
  var { animations: animations12 } = digi.utils;
  var { tabIcons: tabIcons13 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl13, DimensionControl: DimensionControl11, TypographyControl: TypographyControl10, BoxShadowControl: BoxShadowControl10, CustomTabPanel: CustomTabPanel13, TabPanelBody: TabPanelBody12 } = digi.components;
  var TableEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      tableData,
      hasHeader,
      hasFooter,
      tableBorderColor,
      tableBorderWidth,
      tableBorderStyle,
      cellPadding,
      tableBorderCollapse,
      headerBackgroundColor,
      headerTextColor,
      headingTypography,
      bodyBackgroundColor,
      altRowBackgroundColor,
      bodyTextColor,
      textTypography,
      footerBackgroundColor,
      footerTextColor,
      contentTypography,
      borderRadius,
      boxShadow,
      margin,
      cellAlignment,
      headerAlignment,
      footerAlignment,
      tablePreset,
      responsiveMode,
      animation,
      firstColHeader,
      cellControls
    } = attributes;
    const [localActiveDevice, setLocalActiveDevice] = useState13(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState13(false);
    const previewTimeoutRef = useRef12(null);
    const [activeTab, setActiveTab] = useState13("options");
    const [selectedCell, setSelectedCell] = useState13({ row: -1, col: -1 });
    const [isRatingPopoverOpen, setIsRatingPopoverOpen] = useState13(false);
    useEffect13(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect13(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (!tableData || tableData.length === 0) {
        setAttributes({
          tableData: [
            ["Header 1", "Header 2", "Header 3"],
            ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
            ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"]
          ]
        });
      }
      if (!cellControls) {
        setAttributes({
          cellControls: {}
        });
      }
    }, [clientId, id, tableData, cellControls, setAttributes]);
    useEffect13(() => {
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
    const borderStyleOptions = [
      { label: __13("Solid", "digiblocks"), value: "solid" },
      { label: __13("Dotted", "digiblocks"), value: "dotted" },
      { label: __13("Dashed", "digiblocks"), value: "dashed" },
      { label: __13("Double", "digiblocks"), value: "double" },
      { label: __13("None", "digiblocks"), value: "none" }
    ];
    const tablePresetOptions = [
      { label: __13("Default", "digiblocks"), value: "default" },
      { label: __13("Striped", "digiblocks"), value: "striped" },
      { label: __13("Bordered", "digiblocks"), value: "bordered" },
      { label: __13("Borderless", "digiblocks"), value: "borderless" },
      { label: __13("Modern", "digiblocks"), value: "modern" },
      { label: __13("Minimal", "digiblocks"), value: "minimal" }
    ];
    const animationOptions = [
      { label: __13("None", "digiblocks"), value: "none" },
      ...Object.keys(animations12).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
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
    const addRow = (index) => {
      if (!tableData || tableData.length === 0)
        return;
      const newTableData = [...tableData];
      const columnsCount = newTableData[0].length;
      const newRow = Array(columnsCount).fill("");
      newTableData.splice(index + 1, 0, newRow);
      setAttributes({ tableData: newTableData });
    };
    const deleteRow = (index) => {
      if (!tableData || tableData.length <= 1) {
        return;
      }
      const newTableData = [...tableData];
      newTableData.splice(index, 1);
      setAttributes({ tableData: newTableData });
    };
    const addColumn = (index) => {
      if (!tableData || tableData.length === 0)
        return;
      const newTableData = tableData.map((row) => {
        const newRow = [...row];
        newRow.splice(index + 1, 0, "");
        return newRow;
      });
      setAttributes({ tableData: newTableData });
    };
    const deleteColumn = (index) => {
      if (!tableData || tableData[0].length <= 1) {
        return;
      }
      const newTableData = tableData.map((row) => {
        const newRow = [...row];
        newRow.splice(index, 1);
        return newRow;
      });
      setAttributes({ tableData: newTableData });
    };
    const updateCellContent = (value, rowIndex, colIndex) => {
      const newTableData = [...tableData];
      newTableData[rowIndex][colIndex] = value;
      setAttributes({ tableData: newTableData });
    };
    const handleCellClick = (rowIndex, colIndex) => {
      setSelectedCell({ row: rowIndex, col: colIndex });
    };
    const getCellControl = (row, col, controlType) => {
      if (!cellControls)
        return null;
      const cellKey = `${row}-${col}`;
      if (cellControls[cellKey] && cellControls[cellKey][controlType]) {
        return cellControls[cellKey][controlType];
      }
      return null;
    };
    const setCellControl = (row, col, controlType, value) => {
      const cellKey = `${row}-${col}`;
      const updatedControls = { ...cellControls || {} };
      if (!updatedControls[cellKey]) {
        updatedControls[cellKey] = {};
      }
      updatedControls[cellKey][controlType] = value;
      setAttributes({ cellControls: updatedControls });
    };
    const clearCellControl = (row, col, controlType) => {
      if (!cellControls)
        return;
      const cellKey = `${row}-${col}`;
      const updatedControls = { ...cellControls };
      if (updatedControls[cellKey] && updatedControls[cellKey][controlType]) {
        delete updatedControls[cellKey][controlType];
        if (Object.keys(updatedControls[cellKey]).length === 0) {
          delete updatedControls[cellKey];
        }
        setAttributes({ cellControls: updatedControls });
      }
    };
    const applyTablePreset = (preset) => {
      let newAttributes = {};
      switch (preset) {
        case "striped":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#dee2e6",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#f8f9fa",
            headerTextColor: "#212529",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "#f2f2f2",
            bodyTextColor: "#212529"
          };
          break;
        case "bordered":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 2,
            tableBorderColor: "#dee2e6",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#f8f9fa",
            headerTextColor: "#212529",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "",
            bodyTextColor: "#212529"
          };
          break;
        case "borderless":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "none",
            tableBorderWidth: 0,
            tableBorderColor: "transparent",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "transparent",
            headerTextColor: "#212529",
            bodyBackgroundColor: "transparent",
            altRowBackgroundColor: "",
            bodyTextColor: "#212529"
          };
          break;
        case "modern":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#e0e0e0",
            tableBorderCollapse: "separate",
            headerBackgroundColor: "#4a6cf7",
            headerTextColor: "#ffffff",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "#f8f9fa",
            bodyTextColor: "#212529",
            boxShadow: {
              enable: true,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 4,
              blur: 15,
              spread: 0,
              position: "outset"
            },
            borderRadius: {
              desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
              tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
              mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
            }
          };
          break;
        case "minimal":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#e0e0e0",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#ffffff",
            headerTextColor: "#212529",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "",
            bodyTextColor: "#212529",
            boxShadow: {
              enable: false,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 0,
              blur: 0,
              spread: 0,
              position: "outset"
            },
            borderRadius: {
              desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
              tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
              mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
            }
          };
          break;
        default:
          newAttributes = {
            tablePreset: "default",
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#e0e0e0",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#f8f9fa",
            headerTextColor: "#333333",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "",
            bodyTextColor: "#666666",
            boxShadow: {
              enable: false,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 0,
              blur: 0,
              spread: 0,
              position: "outset"
            },
            borderRadius: {
              desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
              tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
              mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
            }
          };
      }
      setAttributes(newAttributes);
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const blockId = id;
      if (!blockId)
        return "";
      let borderCSS = "";
      if (tableBorderStyle !== "none") {
        borderCSS = `
                border-style: ${tableBorderStyle};
                border-width: ${tableBorderWidth}px;
                border-color: ${tableBorderColor};
            `;
      } else {
        borderCSS = "border: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" };
      const borderRadiusCSS = `
            border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
        `;
      const currentCellPadding = cellPadding && cellPadding[activeDevice] ? cellPadding[activeDevice] : { top: 15, right: 15, bottom: 15, left: 15, unit: "px" };
      const cellPaddingCSS = `
            padding: ${currentCellPadding.top}${currentCellPadding.unit} ${currentCellPadding.right}${currentCellPadding.unit} ${currentCellPadding.bottom}${currentCellPadding.unit} ${currentCellPadding.left}${currentCellPadding.unit};
        `;
      const marginValue = margin && margin[activeDevice] ? margin[activeDevice] : { top: 0, right: 0, bottom: 30, left: 0, unit: "px" };
      const marginCSS = `
            margin: ${marginValue.top}${marginValue.unit} ${marginValue.right}${marginValue.unit} ${marginValue.bottom}${marginValue.unit} ${marginValue.left}${marginValue.unit};
        `;
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
      let bodyTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          bodyTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
          bodyTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || "px"};`;
        }
        if (textTypography.fontWeight) {
          bodyTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
        }
        if (textTypography.fontStyle) {
          bodyTypographyCSS += `font-style: ${textTypography.fontStyle};`;
        }
        if (textTypography.textTransform) {
          bodyTypographyCSS += `text-transform: ${textTypography.textTransform};`;
        }
        if (textTypography.textDecoration) {
          bodyTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
        }
        if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
          bodyTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || "em"};`;
        }
        if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
          bodyTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || "px"};`;
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
      return `
            /* Table Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                ${marginCSS}
                ${boxShadowCSS}
                ${borderRadiusCSS}
                width: 100%;
                overflow: hidden;
            }
            
            /* Set up main table styles */
            [data-custom-id="${blockId}"] .digiblocks-table {
                width: 100%;
                border-collapse: ${tableBorderCollapse};
                border-spacing: 0;
                color: ${bodyTextColor};
                ${bodyTypographyCSS}
                ${borderCSS}
                ${borderRadiusCSS}
                overflow: hidden;
            }
            
            /* Table header styles */
            [data-custom-id="${blockId}"] .digiblocks-table thead th {
                background-color: ${headerBackgroundColor};
                color: ${headerTextColor};
                ${headingTypographyCSS}
                ${cellPaddingCSS}
                text-align: ${headerAlignment};
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }
            
            /* Table body styles */
            [data-custom-id="${blockId}"] .digiblocks-table tbody td {
                background-color: ${bodyBackgroundColor};
                ${cellPaddingCSS}
                text-align: ${cellAlignment};
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }
            
            /* First column styles if it's a header */
            ${firstColHeader ? `
            [data-custom-id="${blockId}"] .digiblocks-table tbody td:first-child {
                background-color: ${headerBackgroundColor};
                color: ${headerTextColor};
                ${headingTypographyCSS}
                font-weight: bold;
                text-align: ${headerAlignment};
            }
            ` : ""}
            
            /* Alternating row styles if enabled */
            ${altRowBackgroundColor ? `
            [data-custom-id="${blockId}"] .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${altRowBackgroundColor};
            }
            ${firstColHeader ? `
            [data-custom-id="${blockId}"] .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${headerBackgroundColor};
            }
            ` : ""}
            ` : ""}
            
            /* Footer styles if enabled */
            ${hasFooter ? `
            [data-custom-id="${blockId}"] .digiblocks-table tfoot td {
                background-color: ${footerBackgroundColor};
                color: ${footerTextColor};
                ${contentTypographyCSS}
                ${cellPaddingCSS}
                text-align: ${footerAlignment};
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }
            ` : ""}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${responsiveMode === "stack" ? `
                [data-custom-id="${blockId}"] .digiblocks-table {
                    border-collapse: collapse;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-table thead,
                [data-custom-id="${blockId}"] .digiblocks-table tfoot {
                    display: none;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-table tbody tr {
                    display: block;
                    margin-bottom: 1rem;
                    border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
                }
                
                [data-custom-id="${blockId}"] .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
                    text-align: right;
                    border-bottom: 1px solid ${tableBorderColor};
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-table tbody td::before {
                    content: attr(data-label);
                    font-weight: bold;
                    margin-right: 1rem;
                    text-align: left;
                    flex: 1;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-table tbody td:last-child {
                    border-bottom: none;
                }
                
                ${firstColHeader ? `
                [data-custom-id="${blockId}"] .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${headerBackgroundColor};
                    color: ${headerTextColor};
                    justify-content: center;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-table tbody td:first-child::before {
                    content: '';
                    display: none;
                }
                ` : ""}
                ` : ""}
                
                /* Scroll mode */
                ${responsiveMode === "scroll" ? `
                [data-custom-id="${blockId}"] {
                    overflow-x: auto;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-table {
                    min-width: 600px; /* Ensure it's wider than most mobile screens */
                }
                ` : ""}
            }
            
            /* Cell content layout */
            [data-custom-id="${blockId}"] .digiblocks-cell-content {
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cell-icon {
                flex-shrink: 0;
            }
            
            /* Cell control icons */
            [data-custom-id="${blockId}"] .digiblocks-table .digiblocks-cell-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-right: 5px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-table .digiblocks-cell-check {
                color: #28a745;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-table .digiblocks-cell-cross {
                color: #dc3545;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-table .digiblocks-cell-stars {
                color: #ffc107;
                display: inline-flex;
            }
            
            /* Selected cell highlight */
            [data-custom-id="${blockId}"] .digiblocks-table .digiblocks-selected-cell {
                position: relative;
                outline: 2px solid #4a6cf7;
                outline-offset: -2px;
                z-index: 1;
            }
            
            /* Cell Controls Toolbar */
            [data-custom-id="${blockId}"] .digiblocks-cell-controls-toolbar {
                margin-bottom: 15px;
                padding: 12px;
                background-color: #f0f0f1;
                border-radius: 4px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cell-controls-label {
                font-weight: bold;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-rating-selector {
                padding: 10px;
                min-width: 200px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-rating-selector h3 {
                margin-top: 0;
                margin-bottom: 10px;
            }
            
            /* Table instructions */
            [data-custom-id="${blockId}"] .digiblocks-table-instructions {
                margin-bottom: 15px;
                font-style: italic;
                color: #555;
            }
            
            /* Editor controls */
            [data-custom-id="${blockId}"] .digiblocks-table-controls {
                margin-top: 20px;
                margin-bottom: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-row-controls,
            [data-custom-id="${blockId}"] .digiblocks-col-controls {
                position: relative;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cell-control-panel {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                z-index: 100;
                width: 240px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-cell-control-panel h3 {
                margin-top: 0;
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-control-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 5px;
            }
            
            /* Table caption if any */
            [data-custom-id="${blockId}"] .digiblocks-table-caption {
                text-align: center;
                margin-bottom: 10px;
                font-style: italic;
            }
            
            /* Animation CSS for the table */
            ${animation && animation !== "none" && animations12[animation] ? animations12[animation].keyframes : ""}
        `;
    };
    const renderCellControlToolbar = () => {
      if (selectedCell.row === -1 || selectedCell.col === -1) {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-controls-toolbar" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-controls-label" }, __13("Selected Cell:", "digiblocks"), " Row ", selectedCell.row + 1, ", Column ", selectedCell.col + 1), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-controls-buttons" }, /* @__PURE__ */ wp.element.createElement(ButtonGroup, null, /* @__PURE__ */ wp.element.createElement(
        Button12,
        {
          icon: () => /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4.5 4.75a.75.75 0 0 1-1.08.04L3.47 7.84a.75.75 0 1 1 1.06-1.07l2.5 2.46l4.94-4.26z" })),
          label: __13("Add Check", "digiblocks"),
          onClick: () => setCellControl(selectedCell.row, selectedCell.col, "icon", "check")
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button12,
        {
          icon: () => /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z" })),
          label: __13("Add Cross", "digiblocks"),
          onClick: () => setCellControl(selectedCell.row, selectedCell.col, "icon", "cross")
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button12,
        {
          icon: "star-filled",
          label: __13("Add Rating", "digiblocks"),
          onClick: () => {
            setIsRatingPopoverOpen(true);
          }
        }
      ), getCellControl(selectedCell.row, selectedCell.col, "icon") || getCellControl(selectedCell.row, selectedCell.col, "stars") ? /* @__PURE__ */ wp.element.createElement(
        Button12,
        {
          icon: "trash",
          label: __13("Remove Icons", "digiblocks"),
          onClick: () => {
            clearCellControl(selectedCell.row, selectedCell.col, "icon");
            clearCellControl(selectedCell.row, selectedCell.col, "stars");
          }
        }
      ) : null), isRatingPopoverOpen && /* @__PURE__ */ wp.element.createElement(
        Popover2,
        {
          onClose: () => setIsRatingPopoverOpen(false),
          position: "bottom center"
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-rating-selector" }, /* @__PURE__ */ wp.element.createElement("h3", null, __13("Select Rating", "digiblocks")), /* @__PURE__ */ wp.element.createElement(ButtonGroup, null, [1, 2, 3, 4, 5].map((num) => /* @__PURE__ */ wp.element.createElement(
          Button12,
          {
            key: `star-${num}`,
            isSecondary: true,
            onClick: () => {
              setCellControl(selectedCell.row, selectedCell.col, "stars", num.toString());
              setIsRatingPopoverOpen(false);
            }
          },
          num
        ))))
      )));
    };
    const renderCellIcon = (row, col) => {
      if (!cellControls)
        return null;
      const cellKey = `${row}-${col}`;
      if (!cellControls[cellKey]) {
        return null;
      }
      if (cellControls[cellKey].icon) {
        const icon = cellControls[cellKey].icon;
        switch (icon) {
          case "check":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-check" }, /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4.5 4.75a.75.75 0 0 1-1.08.04L3.47 7.84a.75.75 0 1 1 1.06-1.07l2.5 2.46l4.94-4.26z" })));
          case "cross":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-cross" }, /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z" })));
          default:
            return null;
        }
      }
      if (cellControls[cellKey].stars) {
        const starCount = parseInt(cellControls[cellKey].stars) || 0;
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < starCount) {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" })))
            );
          } else {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-empty-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", opacity: "0.5" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z" })))
            );
          }
        }
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-stars" }, stars);
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
              name: "general-settings",
              title: __13("Table Structure", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl9,
              {
                label: __13("Enable Header Row", "digiblocks"),
                checked: hasHeader,
                onChange: () => setAttributes({ hasHeader: !hasHeader }),
                help: __13("Display the first row as table header.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl9,
              {
                label: __13("Enable Footer Row", "digiblocks"),
                checked: hasFooter,
                onChange: () => setAttributes({ hasFooter: !hasFooter }),
                help: __13("Display the last row as table footer.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl9,
              {
                label: __13("First Column as Header", "digiblocks"),
                checked: firstColHeader,
                onChange: () => setAttributes({ firstColHeader: !firstColHeader }),
                help: __13("Use the first column as a header column.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "options",
              name: "preset-settings",
              title: __13("Table Presets", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Table Style Preset", "digiblocks"),
                value: tablePreset,
                options: tablePresetOptions,
                onChange: (value) => applyTablePreset(value),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "options",
              name: "responsive-settings",
              title: __13("Responsive Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl7,
              {
                label: __13("Mobile Behavior", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl12,
                {
                  value: responsiveMode,
                  onChange: (value) => setAttributes({ responsiveMode: value }),
                  help: __13("How the table should behave on small screens.", "digiblocks"),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption12, { value: "stack", label: __13("Stack", "digiblocks"), "aria-label": __13("Stack Behavior", "digiblocks") }),
                /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption12, { value: "scroll", label: __13("Scroll", "digiblocks"), "aria-label": __13("Scroll Behavior", "digiblocks") })
              )
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "border-settings",
              title: __13("Borders & Shadow", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Border Style", "digiblocks"),
                value: tableBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ tableBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            tableBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              RangeControl13,
              {
                label: __13("Border Width", "digiblocks"),
                value: tableBorderWidth,
                onChange: (value) => setAttributes({ tableBorderWidth: value }),
                min: 1,
                max: 10,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings12,
              {
                title: __13("Border Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: tableBorderColor,
                    onChange: (value) => setAttributes({ tableBorderColor: value }),
                    label: __13("Border Color", "digiblocks")
                  }
                ]
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Border Collapse", "digiblocks"),
                value: tableBorderCollapse,
                options: [
                  { label: __13("Collapse", "digiblocks"), value: "collapse" },
                  { label: __13("Separate", "digiblocks"), value: "separate" }
                ],
                onChange: (value) => setAttributes({ tableBorderCollapse: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
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
            ),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl10,
              {
                normalValue: boxShadow,
                onNormalChange: (value) => setAttributes({
                  boxShadow: value
                })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "header-settings",
              title: __13("Header Styles", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings12,
              {
                title: __13(
                  "Header Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: headerBackgroundColor,
                    onChange: (value) => setAttributes({
                      headerBackgroundColor: value
                    }),
                    label: __13(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: headerTextColor,
                    onChange: (value) => setAttributes({
                      headerTextColor: value
                    }),
                    label: __13(
                      "Text Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl10,
              {
                label: __13(
                  "Header Typography",
                  "digiblocks"
                ),
                value: headingTypography,
                onChange: (value) => setAttributes({
                  headingTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 18, tablet: 16, mobile: 15 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Text Alignment", "digiblocks"),
                value: headerAlignment,
                options: [
                  { label: __13("Left", "digiblocks"), value: "left" },
                  { label: __13("Center", "digiblocks"), value: "center" },
                  { label: __13("Right", "digiblocks"), value: "right" }
                ],
                onChange: (value) => setAttributes({ headerAlignment: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "body-settings",
              title: __13("Body Styles", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings12,
              {
                title: __13(
                  "Body Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: bodyBackgroundColor,
                    onChange: (value) => setAttributes({
                      bodyBackgroundColor: value
                    }),
                    label: __13(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: altRowBackgroundColor,
                    onChange: (value) => setAttributes({
                      altRowBackgroundColor: value
                    }),
                    label: __13(
                      "Alternate Row Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: bodyTextColor,
                    onChange: (value) => setAttributes({
                      bodyTextColor: value
                    }),
                    label: __13(
                      "Text Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl10,
              {
                label: __13(
                  "Body Typography",
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
              SelectControl12,
              {
                label: __13("Text Alignment", "digiblocks"),
                value: cellAlignment,
                options: [
                  { label: __13("Left", "digiblocks"), value: "left" },
                  { label: __13("Center", "digiblocks"), value: "center" },
                  { label: __13("Right", "digiblocks"), value: "right" }
                ],
                onChange: (value) => setAttributes({ cellAlignment: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), hasFooter && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody12,
            {
              tab: "style",
              name: "footer-settings",
              title: __13("Footer Styles", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings12,
              {
                title: __13(
                  "Footer Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: footerBackgroundColor,
                    onChange: (value) => setAttributes({
                      footerBackgroundColor: value
                    }),
                    label: __13(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: footerTextColor,
                    onChange: (value) => setAttributes({
                      footerTextColor: value
                    }),
                    label: __13(
                      "Text Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl10,
              {
                label: __13(
                  "Footer Typography",
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
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl12,
              {
                label: __13("Text Alignment", "digiblocks"),
                value: footerAlignment,
                options: [
                  { label: __13("Left", "digiblocks"), value: "left" },
                  { label: __13("Center", "digiblocks"), value: "center" },
                  { label: __13("Right", "digiblocks"), value: "right" }
                ],
                onChange: (value) => setAttributes({ footerAlignment: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
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
                label: __13("Cell Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl11,
                {
                  values: cellPadding && cellPadding[localActiveDevice] ? cellPadding[localActiveDevice] : {
                    top: 15,
                    right: 15,
                    bottom: 15,
                    left: 15,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    cellPadding: {
                      ...cellPadding,
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
                  values: margin && margin[localActiveDevice] ? margin[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 30,
                    left: 0,
                    unit: "px"
                  },
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
                label: __13(
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
    const renderTableContent = () => {
      return /* @__PURE__ */ wp.element.createElement("table", { className: "digiblocks-table" }, hasHeader && tableData.length > 0 && /* @__PURE__ */ wp.element.createElement("thead", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[0].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
        "th",
        {
          key: `header-${colIndex}`,
          onClick: () => handleCellClick(0, colIndex),
          className: selectedCell.row === 0 && selectedCell.col === colIndex ? "digiblocks-selected-cell" : ""
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(0, colIndex), /* @__PURE__ */ wp.element.createElement(
          RichText12,
          {
            tagName: "span",
            value: cell,
            onChange: (value) => updateCellContent(value, 0, colIndex),
            placeholder: __13("Header text", "digiblocks")
          }
        ))
      )))), /* @__PURE__ */ wp.element.createElement("tbody", null, tableData.slice(
        hasHeader ? 1 : 0,
        hasFooter ? tableData.length - 1 : tableData.length
      ).map((row, rowIndex) => {
        const actualRowIndex = hasHeader ? rowIndex + 1 : rowIndex;
        return /* @__PURE__ */ wp.element.createElement("tr", { key: `row-${actualRowIndex}` }, row.map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
          "td",
          {
            key: `cell-${actualRowIndex}-${colIndex}`,
            "data-label": hasHeader && tableData[0] && tableData[0][colIndex] ? tableData[0][colIndex] : "",
            onClick: () => handleCellClick(actualRowIndex, colIndex),
            className: selectedCell.row === actualRowIndex && selectedCell.col === colIndex ? "digiblocks-selected-cell" : ""
          },
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(actualRowIndex, colIndex), /* @__PURE__ */ wp.element.createElement(
            RichText12,
            {
              tagName: "span",
              value: cell,
              onChange: (value) => updateCellContent(value, actualRowIndex, colIndex),
              placeholder: __13("Cell text", "digiblocks")
            }
          ))
        )));
      })), hasFooter && tableData.length > 1 && /* @__PURE__ */ wp.element.createElement("tfoot", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[tableData.length - 1].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
        "td",
        {
          key: `footer-${colIndex}`,
          onClick: () => handleCellClick(tableData.length - 1, colIndex),
          className: selectedCell.row === tableData.length - 1 && selectedCell.col === colIndex ? "digiblocks-selected-cell" : ""
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(tableData.length - 1, colIndex), /* @__PURE__ */ wp.element.createElement(
          RichText12,
          {
            tagName: "span",
            value: cell,
            onChange: (value) => updateCellContent(value, tableData.length - 1, colIndex),
            placeholder: __13("Footer text", "digiblocks")
          }
        ))
      )))));
    };
    const blockProps = useBlockProps25({
      className: `digiblocks-table-block ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    if (!tableData || !Array.isArray(tableData) || tableData.length === 0) {
      return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("p", null, __13("Initializing table...", "digiblocks")));
    }
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls10, null, /* @__PURE__ */ wp.element.createElement(ToolbarGroup, null, /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-row-before",
        label: __13("Add Row Before", "digiblocks"),
        onClick: () => {
          if (selectedCell.row >= 0) {
            addRow(selectedCell.row - 1);
          } else {
            addRow(0);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-row-after",
        label: __13("Add Row After", "digiblocks"),
        onClick: () => {
          if (selectedCell.row >= 0) {
            addRow(selectedCell.row);
          } else {
            addRow(tableData.length - 1);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-row-delete",
        label: __13("Delete Row", "digiblocks"),
        onClick: () => {
          if (selectedCell.row >= 0) {
            deleteRow(selectedCell.row);
            setSelectedCell({ row: -1, col: -1 });
          }
        },
        disabled: tableData.length <= 1 || selectedCell.row < 0
      }
    )), /* @__PURE__ */ wp.element.createElement(ToolbarGroup, null, /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-col-before",
        label: __13("Add Column Before", "digiblocks"),
        onClick: () => {
          if (selectedCell.col >= 0) {
            addColumn(selectedCell.col - 1);
          } else {
            addColumn(0);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-col-after",
        label: __13("Add Column After", "digiblocks"),
        onClick: () => {
          if (selectedCell.col >= 0) {
            addColumn(selectedCell.col);
          } else {
            addColumn(tableData[0].length - 1);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-col-delete",
        label: __13("Delete Column", "digiblocks"),
        onClick: () => {
          if (selectedCell.col >= 0) {
            deleteColumn(selectedCell.col);
            setSelectedCell({ row: -1, col: -1 });
          }
        },
        disabled: tableData[0].length <= 1 || selectedCell.col < 0
      }
    ))), /* @__PURE__ */ wp.element.createElement(InspectorControls13, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel13,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-instructions" }, /* @__PURE__ */ wp.element.createElement("p", null, __13("Click on any cell to select it and add icons, checks, crosses, or star ratings.", "digiblocks"))), selectedCell.row !== -1 && selectedCell.col !== -1 && renderCellControlToolbar(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-container" }, renderTableContent()), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-controls" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-row-controls" }, /* @__PURE__ */ wp.element.createElement(
      Button12,
      {
        isPrimary: true,
        icon: "plus",
        onClick: () => addRow(tableData.length - 1)
      },
      __13("Add Row", "digiblocks")
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-col-controls" }, /* @__PURE__ */ wp.element.createElement(
      Button12,
      {
        isPrimary: true,
        icon: "plus",
        onClick: () => addColumn(tableData[0].length - 1)
      },
      __13("Add Column", "digiblocks")
    )))));
  };
  var edit_default13 = TableEdit;

  // blocks/table/save.js
  var { __: __14 } = window.wp.i18n;
  var { useBlockProps: useBlockProps26, RichText: RichText13 } = window.wp.blockEditor;
  var TableSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      tableData,
      hasHeader,
      hasFooter,
      responsiveMode,
      animation,
      cellControls
    } = attributes;
    const blockClasses = [
      "digiblocks-table-block",
      `responsive-${responsiveMode}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const getCellControl = (row, col, controlType) => {
      const cellKey = `${row}-${col}`;
      if (cellControls[cellKey] && cellControls[cellKey][controlType]) {
        return cellControls[cellKey][controlType];
      }
      return null;
    };
    const renderCellIcon = (row, col) => {
      const cellKey = `${row}-${col}`;
      if (!cellControls[cellKey]) {
        return null;
      }
      if (cellControls[cellKey].icon) {
        const icon = cellControls[cellKey].icon;
        switch (icon) {
          case "check":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-check" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4.5 4.75a.75.75 0 0 1-1.08.04L3.47 7.84a.75.75 0 1 1 1.06-1.07l2.5 2.46l4.94-4.26z" })));
          case "cross":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-cross" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z" })));
          default:
            return null;
        }
      }
      if (cellControls[cellKey].stars) {
        const starCount = parseInt(cellControls[cellKey].stars);
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < starCount) {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" })))
            );
          } else {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-empty-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", opacity: "0.5" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z" })))
            );
          }
        }
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-stars" }, stars);
      }
      return null;
    };
    const commonProps = {
      className: blockClasses,
      id: anchor || null,
      "data-custom-id": id
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...commonProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-container" }, /* @__PURE__ */ wp.element.createElement("table", { className: "digiblocks-table" }, hasHeader && /* @__PURE__ */ wp.element.createElement("thead", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[0].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement("th", { key: `header-${colIndex}` }, renderCellIcon(0, colIndex), /* @__PURE__ */ wp.element.createElement(
      RichText13.Content,
      {
        tagName: "span",
        value: cell
      }
    ))))), /* @__PURE__ */ wp.element.createElement("tbody", null, tableData.slice(hasHeader ? 1 : 0, hasFooter ? tableData.length - 1 : tableData.length).map((row, rowIndex) => {
      const actualRowIndex = hasHeader ? rowIndex + 1 : rowIndex;
      return /* @__PURE__ */ wp.element.createElement("tr", { key: `row-${actualRowIndex}` }, row.map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
        "td",
        {
          key: `cell-${actualRowIndex}-${colIndex}`,
          "data-label": hasHeader ? tableData[0][colIndex] : ""
        },
        renderCellIcon(actualRowIndex, colIndex),
        /* @__PURE__ */ wp.element.createElement(
          RichText13.Content,
          {
            tagName: "span",
            value: cell
          }
        )
      )));
    })), hasFooter && /* @__PURE__ */ wp.element.createElement("tfoot", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[tableData.length - 1].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement("td", { key: `footer-${colIndex}` }, renderCellIcon(tableData.length - 1, colIndex), /* @__PURE__ */ wp.element.createElement(
      RichText13.Content,
      {
        tagName: "span",
        value: cell
      }
    ))))))));
  };
  var save_default13 = TableSave;

  // blocks/team/edit.js
  var { __: __15 } = window.wp.i18n;
  var {
    useBlockProps: useBlockProps27,
    RichText: RichText14,
    InspectorControls: InspectorControls14,
    PanelColorSettings: PanelColorSettings13,
    MediaUpload: MediaUpload2,
    MediaUploadCheck: MediaUploadCheck2,
    URLPopover
  } = window.wp.blockEditor;
  var {
    SelectControl: SelectControl13,
    RangeControl: RangeControl14,
    Button: Button13,
    ToggleControl: ToggleControl10,
    Tooltip: Tooltip4,
    TextControl: TextControl8,
    Popover: Popover3,
    __experimentalToggleGroupControl: ToggleGroupControl13,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption13,
    BaseControl: BaseControl8,
    Icon
  } = window.wp.components;
  var { useState: useState14, useEffect: useEffect14, useRef: useRef13, Fragment: Fragment2 } = window.wp.element;
  var { animations: animations13 } = digi.utils;
  var { tabIcons: tabIcons14 } = digi.icons;
  var { ResponsiveControl: ResponsiveControl14, DimensionControl: DimensionControl12, TypographyControl: TypographyControl11, BoxShadowControl: BoxShadowControl11, CustomTabPanel: CustomTabPanel14, TabPanelBody: TabPanelBody13 } = digi.components;
  var socialIconsSVG2 = {
    facebook: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" })),
    twitter: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" })),
    linkedin: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" })),
    instagram: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" })),
    pinterest: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" })),
    youtube: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" })),
    dribbble: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" })),
    github: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" })),
    behance: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" })),
    vimeo: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" })),
    tiktok: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" })),
    email: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" })),
    website: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" }))
  };
  var plusIcon2 = /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }));
  var TeamEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      customClasses,
      members,
      columns,
      gutter,
      layout,
      alignment,
      imageStyle,
      imageSize,
      imageBorderRadius,
      imageBorderWidth,
      imageBorderColor,
      imageBorderStyle,
      typography,
      textTypography,
      contentTypography,
      nameColor,
      positionColor,
      bioColor,
      iconColor,
      iconHoverColor,
      iconSize,
      iconSpacing,
      iconBackgroundColor,
      iconBackgroundHoverColor,
      iconBorderRadius,
      iconPadding,
      boxBackgroundColor,
      boxBorderColor,
      boxBorderRadius,
      boxBorderWidth,
      boxBorderStyle,
      boxPadding,
      boxMargin,
      boxShadow,
      boxShadowHover,
      animation,
      showName,
      showPosition,
      showBio,
      showSocial
    } = attributes;
    const [activeTab, setActiveTab] = useState14("options");
    const [socialSelectPopover, setSocialSelectPopover] = useState14(null);
    const [urlPopover, setUrlPopover] = useState14(null);
    const [localActiveDevice, setLocalActiveDevice] = useState14(window.digi.responsiveState.activeDevice);
    const [animating, setAnimating] = useState14(false);
    const previewTimeoutRef = useRef13(null);
    useEffect14(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect14(() => {
      if (!id || !id.includes(clientId.substr(0, 8))) {
        setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
      }
      if (members && members.length > 0) {
        const updatedMembers = members.map((member, index) => {
          if (!member.id) {
            return { ...member, id: `team-member-${clientId.substr(0, 8)}-${index}` };
          }
          if (member.socials && member.socials.length > 0) {
            const updatedSocials = member.socials.map((social, sIndex) => {
              if (!social.id) {
                return { ...social, id: `social-${index}-${sIndex}` };
              }
              return social;
            });
            return { ...member, socials: updatedSocials };
          }
          return member;
        });
        if (JSON.stringify(updatedMembers) !== JSON.stringify(members)) {
          setAttributes({ members: updatedMembers });
        }
      }
    }, [clientId, members, setAttributes, id]);
    useEffect14(() => {
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
      if (animations13[animation]) {
        const originalKeyframes = animations13[animation].keyframes;
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
        setAnimating(true);
        previewTimeoutRef.current = setTimeout(() => {
          styleElement.remove();
          animationStyleElement.remove();
          blockElement.style.animation = "";
          setAnimating(false);
        }, 1500);
      }
    };
    useEffect14(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          triggerAnimationPreview();
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const imageStyleOptions = [
      { label: __15("Default", "digiblocks"), value: "default" },
      { label: __15("Circle", "digiblocks"), value: "circle" },
      { label: __15("Square", "digiblocks"), value: "square" },
      { label: __15("Rounded", "digiblocks"), value: "rounded" }
    ];
    const borderStyleOptions = [
      { label: __15("None", "digiblocks"), value: "none" },
      { label: __15("Solid", "digiblocks"), value: "solid" },
      { label: __15("Dotted", "digiblocks"), value: "dotted" },
      { label: __15("Dashed", "digiblocks"), value: "dashed" },
      { label: __15("Double", "digiblocks"), value: "double" },
      { label: __15("Groove", "digiblocks"), value: "groove" },
      { label: __15("Ridge", "digiblocks"), value: "ridge" },
      { label: __15("Inset", "digiblocks"), value: "inset" },
      { label: __15("Outset", "digiblocks"), value: "outset" }
    ];
    const socialNetworks = [
      { label: __15("Facebook", "digiblocks"), value: "facebook" },
      { label: __15("Twitter", "digiblocks"), value: "twitter" },
      { label: __15("LinkedIn", "digiblocks"), value: "linkedin" },
      { label: __15("Instagram", "digiblocks"), value: "instagram" },
      { label: __15("Pinterest", "digiblocks"), value: "pinterest" },
      { label: __15("YouTube", "digiblocks"), value: "youtube" },
      { label: __15("Dribbble", "digiblocks"), value: "dribbble" },
      { label: __15("GitHub", "digiblocks"), value: "github" },
      { label: __15("Behance", "digiblocks"), value: "behance" },
      { label: __15("Vimeo", "digiblocks"), value: "vimeo" },
      { label: __15("TikTok", "digiblocks"), value: "tiktok" },
      { label: __15("Email", "digiblocks"), value: "email" },
      { label: __15("Website", "digiblocks"), value: "website" }
    ];
    const animationOptions = [
      { label: __15("None", "digiblocks"), value: "none" },
      ...Object.keys(animations13).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __15("Options", "digiblocks"),
        icon: tabIcons14.optionsIcon
      },
      {
        name: "style",
        title: __15("Style", "digiblocks"),
        icon: tabIcons14.styleIcon
      },
      {
        name: "advanced",
        title: __15("Advanced", "digiblocks"),
        icon: tabIcons14.advancedIcon
      }
    ];
    const addTeamMember = () => {
      const newMemberId = `team-member-${clientId.substr(0, 8)}-${Date.now()}`;
      const newMember = {
        id: newMemberId,
        name: __15("New Team Member", "digiblocks"),
        position: __15("Position", "digiblocks"),
        bio: __15("Add a short bio about this team member.", "digiblocks"),
        image: {
          url: "",
          id: "",
          alt: ""
        },
        socials: [
          {
            id: `social-${newMemberId}-1`,
            network: "facebook",
            url: "https://facebook.com"
          },
          {
            id: `social-${newMemberId}-2`,
            network: "twitter",
            url: "https://twitter.com"
          }
        ]
      };
      setAttributes({
        members: [...members, newMember]
      });
    };
    const removeTeamMember = (index) => {
      const newMembers = [...members];
      newMembers.splice(index, 1);
      setAttributes({
        members: newMembers
      });
    };
    const duplicateTeamMember = (index) => {
      const memberToDuplicate = members[index];
      const timestamp = Date.now();
      const newMemberId = `team-member-${clientId.substr(0, 8)}-${timestamp}`;
      const newMember = {
        ...memberToDuplicate,
        id: newMemberId,
        socials: memberToDuplicate.socials ? memberToDuplicate.socials.map((social, sIndex) => ({
          ...social,
          id: `social-${newMemberId}-${sIndex}`
        })) : []
      };
      const newMembers = [...members];
      newMembers.splice(index + 1, 0, newMember);
      setAttributes({
        members: newMembers
      });
    };
    const moveTeamMemberUp = (index) => {
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
    const moveTeamMemberDown = (index) => {
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
    const updateTeamMember = (index, key, value) => {
      const newMembers = [...members];
      newMembers[index] = {
        ...newMembers[index],
        [key]: value
      };
      setAttributes({
        members: newMembers
      });
    };
    const updateTeamMemberImage = (index, media) => {
      const newMembers = [...members];
      if (!newMembers[index].image) {
        newMembers[index].image = {};
      }
      newMembers[index].image = {
        url: media.url || "",
        id: media.id || "",
        alt: media.alt || ""
      };
      setAttributes({
        members: newMembers
      });
    };
    const openSocialSelectPopover = (memberIndex) => {
      setSocialSelectPopover({
        memberIndex,
        target: document.getElementById(`add-social-${memberIndex}`)
      });
    };
    const closeSocialSelectPopover = () => {
      setSocialSelectPopover(null);
    };
    const addSpecificSocialLink = (memberIndex, network) => {
      const newMembers = [...members];
      const member = newMembers[memberIndex];
      const socials = member.socials || [];
      socials.push({
        id: `social-${member.id}-${Date.now()}`,
        network,
        url: ""
      });
      newMembers[memberIndex] = {
        ...member,
        socials
      };
      setAttributes({
        members: newMembers
      });
      closeSocialSelectPopover();
      setTimeout(() => {
        const socialIndex = socials.length - 1;
        openUrlPopover(memberIndex, socialIndex);
      }, 100);
    };
    const renderSocialSelectPopover = () => {
      if (!socialSelectPopover)
        return null;
      const { memberIndex, target } = socialSelectPopover;
      const usedNetworks = members[memberIndex].socials ? members[memberIndex].socials.map((social) => social.network) : [];
      const availableNetworks = socialNetworks.filter((network) => !usedNetworks.includes(network.value));
      return /* @__PURE__ */ wp.element.createElement(
        Popover3,
        {
          anchor: target,
          onClose: closeSocialSelectPopover,
          position: "bottom center",
          expandOnMobile: true,
          className: "digiblocks-team-social-select-popover"
        },
        /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "12px", width: "280px", maxHeight: "400px", overflowY: "auto" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "10px", fontWeight: "bold" } }, __15("Select Social Network", "digiblocks")), /* @__PURE__ */ wp.element.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" } }, availableNetworks.map((network) => /* @__PURE__ */ wp.element.createElement(
          Button13,
          {
            key: network.value,
            variant: "secondary",
            onClick: () => addSpecificSocialLink(memberIndex, network.value),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "8px",
              gap: "8px"
            }
          },
          /* @__PURE__ */ wp.element.createElement("span", { style: { display: "inline-flex", alignItems: "center" } }, socialIconsSVG2[network.value]),
          /* @__PURE__ */ wp.element.createElement("span", null, network.label)
        ))))
      );
    };
    const removeSocialLink = (memberIndex, socialIndex) => {
      const newMembers = [...members];
      const member = newMembers[memberIndex];
      const socials = [...member.socials];
      socials.splice(socialIndex, 1);
      newMembers[memberIndex] = {
        ...member,
        socials
      };
      setAttributes({
        members: newMembers
      });
    };
    const updateSocialLink = (memberIndex, socialIndex, key, value) => {
      const newMembers = [...members];
      const member = newMembers[memberIndex];
      const socials = [...member.socials];
      socials[socialIndex] = {
        ...socials[socialIndex],
        [key]: value
      };
      newMembers[memberIndex] = {
        ...member,
        socials
      };
      setAttributes({
        members: newMembers
      });
    };
    const openUrlPopover = (memberIndex, socialIndex) => {
      setUrlPopover({
        memberIndex,
        socialIndex,
        target: document.getElementById(`social-link-${memberIndex}-${socialIndex}`)
      });
    };
    const closeUrlPopover = () => {
      setUrlPopover(null);
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      const blockId = id;
      const columnWidth = {
        desktop: `calc((100% - ${(columns.desktop - 1) * gutter.desktop}px) / ${columns.desktop})`,
        tablet: `calc((100% - ${(columns.tablet - 1) * gutter.tablet}px) / ${columns.tablet})`,
        mobile: `calc((100% - ${(columns.mobile - 1) * gutter.mobile}px) / ${columns.mobile})`
      };
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      let nameTypographyCSS = "";
      if (typography) {
        if (typography.fontFamily) {
          nameTypographyCSS += `font-family: ${typography.fontFamily};`;
        }
        if (typography.fontSize && typography.fontSize[activeDevice]) {
          nameTypographyCSS += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || "px"};`;
        }
        if (typography.fontWeight) {
          nameTypographyCSS += `font-weight: ${typography.fontWeight};`;
        }
        if (typography.fontStyle) {
          nameTypographyCSS += `font-style: ${typography.fontStyle};`;
        }
        if (typography.textTransform) {
          nameTypographyCSS += `text-transform: ${typography.textTransform};`;
        }
        if (typography.textDecoration) {
          nameTypographyCSS += `text-decoration: ${typography.textDecoration};`;
        }
        if (typography.lineHeight && typography.lineHeight[activeDevice]) {
          nameTypographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || "em"};`;
        }
        if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
          nameTypographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || "px"};`;
        }
      }
      let positionTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          positionTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
          positionTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || "px"};`;
        }
        if (textTypography.fontWeight) {
          positionTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
        }
        if (textTypography.fontStyle) {
          positionTypographyCSS += `font-style: ${textTypography.fontStyle};`;
        }
        if (textTypography.textTransform) {
          positionTypographyCSS += `text-transform: ${textTypography.textTransform};`;
        }
        if (textTypography.textDecoration) {
          positionTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
        }
        if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
          positionTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || "em"};`;
        }
        if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
          positionTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || "px"};`;
        }
      }
      let bioTypographyCSS = "";
      if (contentTypography) {
        if (contentTypography.fontFamily) {
          bioTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
        }
        if (contentTypography.fontSize && contentTypography.fontSize[activeDevice]) {
          bioTypographyCSS += `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || "px"};`;
        }
        if (contentTypography.fontWeight) {
          bioTypographyCSS += `font-weight: ${contentTypography.fontWeight};`;
        }
        if (contentTypography.fontStyle) {
          bioTypographyCSS += `font-style: ${contentTypography.fontStyle};`;
        }
        if (contentTypography.textTransform) {
          bioTypographyCSS += `text-transform: ${contentTypography.textTransform};`;
        }
        if (contentTypography.textDecoration) {
          bioTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
        }
        if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
          bioTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || "em"};`;
        }
        if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
          bioTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || "px"};`;
        }
      }
      let imageBorderRadiusValue;
      if (imageStyle === "circle") {
        imageBorderRadiusValue = "50%";
      } else if (imageStyle === "square") {
        imageBorderRadiusValue = "0";
      } else if (imageStyle === "rounded") {
        imageBorderRadiusValue = "8px";
      } else {
        const imageRadius = imageBorderRadius && imageBorderRadius[activeDevice] ? imageBorderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
        imageBorderRadiusValue = `${imageRadius.top}${imageRadius.unit} ${imageRadius.right}${imageRadius.unit} ${imageRadius.bottom}${imageRadius.unit} ${imageRadius.left}${imageRadius.unit}`;
      }
      const boxRadius = boxBorderRadius && boxBorderRadius[activeDevice] ? boxBorderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" };
      const boxBorderRadiusValue = `${boxRadius.top}${boxRadius.unit} ${boxRadius.right}${boxRadius.unit} ${boxRadius.bottom}${boxRadius.unit} ${boxRadius.left}${boxRadius.unit}`;
      const boxWidth = boxBorderWidth && boxBorderWidth[activeDevice] ? boxBorderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
      const boxBorderWidthValue = `${boxWidth.top}${boxWidth.unit} ${boxWidth.right}${boxWidth.unit} ${boxWidth.bottom}${boxWidth.unit} ${boxWidth.left}${boxWidth.unit}`;
      const boxPad = boxPadding && boxPadding[activeDevice] ? boxPadding[activeDevice] : { top: 30, right: 30, bottom: 30, left: 30, unit: "px" };
      const boxPaddingValue = `${boxPad.top}${boxPad.unit} ${boxPad.right}${boxPad.unit} ${boxPad.bottom}${boxPad.unit} ${boxPad.left}${boxPad.unit}`;
      const boxMarg = boxMargin && boxMargin[activeDevice] ? boxMargin[activeDevice] : { top: 0, right: 0, bottom: 30, left: 0, unit: "px" };
      const boxMarginValue = `${boxMarg.top}${boxMarg.unit} ${boxMarg.right}${boxMarg.unit} ${boxMarg.bottom}${boxMarg.unit} ${boxMarg.left}${boxMarg.unit}`;
      const imageWidth = imageBorderWidth && imageBorderWidth[activeDevice] ? imageBorderWidth[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
      const imageBorderWidthValue = `${imageWidth.top}${imageWidth.unit} ${imageWidth.right}${imageWidth.unit} ${imageWidth.bottom}${imageWidth.unit} ${imageWidth.left}${imageWidth.unit}`;
      const iconRadius = iconBorderRadius && iconBorderRadius[activeDevice] ? iconBorderRadius[activeDevice] : { top: 50, right: 50, bottom: 50, left: 50, unit: "%" };
      const iconBorderRadiusValue = `${iconRadius.top}${iconRadius.unit} ${iconRadius.right}${iconRadius.unit} ${iconRadius.bottom}${iconRadius.unit} ${iconRadius.left}${iconRadius.unit}`;
      const iconPad = iconPadding && iconPadding[activeDevice] ? iconPadding[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: "px" };
      const iconPaddingValue = `${iconPad.top}${iconPad.unit} ${iconPad.right}${iconPad.unit} ${iconPad.bottom}${iconPad.unit} ${iconPad.left}${iconPad.unit}`;
      return `
            /* Team Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                margin: ${boxMarginValue};
            }
            
            /* Grid Layout */
            [data-custom-id="${blockId}"] .digiblocks-team-container {
                display: flex;
                flex-wrap: wrap;
                gap: ${gutter[activeDevice]}px;
                justify-content: ${alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"};
            }
            
            /* List Layout */
            [data-custom-id="${blockId}"].layout-list .digiblocks-team-container {
                display: flex;
				flex-direction: column;
				gap: ${gutter[activeDevice]}px;
            }
            
            [data-custom-id="${blockId}"].layout-list .digiblocks-team-member {
                display: flex;
                align-items: center;
                width: 100%;
				gap: ${gutter[activeDevice]}px;
            }
            
            [data-custom-id="${blockId}"].layout-list .digiblocks-team-member-image {
                margin: 0;
            }
            
            [data-custom-id="${blockId}"].layout-list .digiblocks-team-member-content {
                text-align: left !important;
            }

			[data-custom-id="${blockId}"].layout-list .digiblocks-team-member-social {
				justify-content: flex-start;
			}
            
            /* Team Member */
            [data-custom-id="${blockId}"] .digiblocks-team-member {
				display: flex;
				align-items: ${alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"};
				gap: 15px;
                ${layout === "grid" ? `width: ${columnWidth[activeDevice]}; flex-direction: column;` : ""}
                text-align: ${alignment};
                position: relative;
				background-color: ${boxBackgroundColor || "transparent"};
				${boxBorderStyle !== "none" ? `
					border-style: ${boxBorderStyle};
					border-color: ${boxBorderColor || "#e0e0e0"};
					border-width: ${boxBorderWidthValue};
					border-radius: ${boxBorderRadiusValue};
				` : ""}
				${boxShadowCSS}
				padding: ${boxPaddingValue};
				transition: all 0.3s ease;
            }
            
            /* Hover effects */
            ${boxShadowHover && boxShadowHover.enable ? `
                [data-custom-id="${blockId}"] .digiblocks-team-member:hover {
                    ${boxShadowHoverCSS}
                }
            ` : ""}
            
            /* Team Member Image */
            [data-custom-id="${blockId}"] .digiblocks-team-member-image {
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
				max-width: 100%;
                border-radius: ${imageBorderRadiusValue};
                overflow: hidden;
                display: flex;
                ${imageBorderStyle !== "none" ? `
					border-width: ${imageBorderWidthValue};
					border-style: ${imageBorderStyle};
					border-color: ${imageBorderColor};
                ` : ""}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            
            /* Team Member Name */
            [data-custom-id="${blockId}"] .digiblocks-team-member-name {
                color: ${nameColor};
                margin-top: 0;
                margin-bottom: 5px;
                ${nameTypographyCSS}
            }
            
            /* Team Member Position */
            [data-custom-id="${blockId}"] .digiblocks-team-member-position {
                color: ${positionColor};
                margin-bottom: 10px;
                ${positionTypographyCSS}
            }
            
            /* Team Member Bio */
            [data-custom-id="${blockId}"] .digiblocks-team-member-bio {
                color: ${bioColor};
                margin-bottom: ${showSocial ? "15px" : "0"};
                ${bioTypographyCSS}
            }
            
            /* Team Member Social */
            [data-custom-id="${blockId}"] .digiblocks-team-member-social {
				display: flex;
				align-items: center;
				justify-content: ${alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"};
				gap: ${iconSpacing[activeDevice]}px;
				flex-wrap: wrap;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-team-member-social-icon {
				color: ${iconColor};
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: ${iconBorderRadiusValue};
				background-color: ${iconBackgroundColor};
				padding: ${iconPaddingValue};
				transition: all 0.3s ease;
				cursor: pointer;
				position: relative;
				z-index: 1;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-team-member-social-icon:hover {
				color: ${iconHoverColor};
				${iconBackgroundHoverColor ? `background-color: ${iconBackgroundHoverColor};` : ""}
			}
			
			[data-custom-id="${blockId}"] .digiblocks-team-member-social-icon svg {
				width: ${iconSize[activeDevice] ? `${iconSize[activeDevice]}px` : "1.2rem"};
				height: ${iconSize[activeDevice] ? `${iconSize[activeDevice]}px` : "1.2rem"};
				fill: currentColor;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-team-member-social-icon-wrapper {
				position: relative;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-team-member-social-icon.add-social {
				background-color: #f0f0f0;
				color: #333;
				width: 30px;
				height: 30px;
			}
			
			[data-custom-id="${blockId}"] .digiblocks-team-member-social-icon.add-social svg {
				width: .6rem;
				height: .6rem;
			}
            
            /* Editor Styles */
            [data-custom-id="${blockId}"] .digiblocks-team-member-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 5px;
                top: 5px;
                background-color: rgba(255, 255, 255, 0.8);
                padding: 5px;
                border-radius: 5px;
                z-index: 10;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-placeholder {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f0f0f0;
                color: #888;
                font-size: 14px;
                cursor: pointer;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-icon.add-social {
                background-color: #f0f0f0;
                color: #333;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-icon-controls {
                position: absolute;
                top: -5px;
                right: -5px;
                display: none;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                padding: 2px;
                z-index: 2;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-icon-wrapper {
                position: relative;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-icon-wrapper:hover .digiblocks-team-member-social-icon-controls {
                display: block;
            }
        `;
    };
    const renderTeamMembers = () => {
      return members.map((member, index) => {
        return /* @__PURE__ */ wp.element.createElement("div", { key: member.id, className: "digiblocks-team-member" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip4, { text: __15("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button13,
          {
            className: "digiblocks-team-member-move-up",
            onClick: () => moveTeamMemberUp(index),
            icon: "arrow-up-alt2",
            disabled: index === 0,
            isSmall: true
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip4, { text: __15("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button13,
          {
            className: "digiblocks-team-member-move-down",
            onClick: () => moveTeamMemberDown(index),
            icon: "arrow-down-alt2",
            disabled: index === members.length - 1,
            isSmall: true
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip4, { text: __15("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button13,
          {
            className: "digiblocks-team-member-duplicate",
            onClick: () => duplicateTeamMember(index),
            icon: "admin-page",
            isSmall: true
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip4, { text: __15("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button13,
          {
            className: "digiblocks-team-member-remove",
            onClick: () => removeTeamMember(index),
            icon: "trash",
            isSmall: true,
            disabled: members.length <= 1
          }
        ))), showName && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-image" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck2, null, /* @__PURE__ */ wp.element.createElement(
          MediaUpload2,
          {
            onSelect: (media) => updateTeamMemberImage(index, media),
            allowedTypes: ["image"],
            value: member.image && member.image.id ? member.image.id : "",
            render: ({ open }) => member.image && member.image.url ? /* @__PURE__ */ wp.element.createElement(
              "img",
              {
                src: member.image.url,
                alt: member.image.alt || member.name,
                onClick: open,
                style: { cursor: "pointer" }
              }
            ) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-placeholder", onClick: open }, __15("Choose Image", "digiblocks"))
          }
        ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-content" }, showName && /* @__PURE__ */ wp.element.createElement(
          RichText14,
          {
            tagName: "h3",
            className: "digiblocks-team-member-name",
            value: member.name,
            onChange: (value) => updateTeamMember(index, "name", value),
            placeholder: __15("Team Member Name", "digiblocks"),
            allowedFormats: ["core/bold", "core/italic"]
          }
        ), showPosition && /* @__PURE__ */ wp.element.createElement(
          RichText14,
          {
            tagName: "div",
            className: "digiblocks-team-member-position",
            value: member.position,
            onChange: (value) => updateTeamMember(index, "position", value),
            placeholder: __15("Position or Role", "digiblocks"),
            allowedFormats: ["core/bold", "core/italic"]
          }
        ), showBio && /* @__PURE__ */ wp.element.createElement(
          RichText14,
          {
            tagName: "div",
            className: "digiblocks-team-member-bio",
            value: member.bio,
            onChange: (value) => updateTeamMember(index, "bio", value),
            placeholder: __15("Add a short bio about this team member.", "digiblocks"),
            allowedFormats: ["core/bold", "core/italic", "core/link"]
          }
        ), showSocial && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-social" }, member.socials && member.socials.map((social, socialIndex) => /* @__PURE__ */ wp.element.createElement("div", { key: social.id, className: "digiblocks-team-member-social-icon-wrapper" }, /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            id: `social-link-${index}-${socialIndex}`,
            className: "digiblocks-team-member-social-icon",
            onClick: () => openUrlPopover(index, socialIndex)
          },
          socialIconsSVG2[social.network]
        ), /* @__PURE__ */ wp.element.createElement(
          Button13,
          {
            className: "digiblocks-team-member-social-icon-remove",
            onClick: () => removeSocialLink(index, socialIndex),
            icon: "no-alt",
            isSmall: true,
            label: __15("Remove", "digiblocks"),
            style: {
              position: "absolute",
              top: "-12px",
              right: "-10px",
              background: "#fff",
              borderRadius: "50%",
              padding: "2px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              zIndex: 2
            }
          }
        ))), /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            id: `add-social-${index}`,
            className: "digiblocks-team-member-social-icon add-social",
            onClick: () => openSocialSelectPopover(index),
            title: __15("Add Social Link", "digiblocks")
          },
          plusIcon2
        ))));
      });
    };
    const renderUrlPopover = () => {
      if (!urlPopover)
        return null;
      const { memberIndex, socialIndex, target } = urlPopover;
      const social = members[memberIndex].socials[socialIndex];
      return /* @__PURE__ */ wp.element.createElement(
        Popover3,
        {
          anchor: target,
          onClose: closeUrlPopover,
          position: "bottom center",
          expandOnMobile: true,
          className: "digiblocks-team-social-url-popover"
        },
        /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", padding: "12px", minWidth: "280px" } }, /* @__PURE__ */ wp.element.createElement(
          SelectControl13,
          {
            label: __15("Social Network", "digiblocks"),
            value: social.network,
            options: socialNetworks,
            onChange: (value) => updateSocialLink(memberIndex, socialIndex, "network", value),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          TextControl8,
          {
            label: __15("URL", "digiblocks"),
            value: social.url,
            onChange: (value) => updateSocialLink(memberIndex, socialIndex, "url", value),
            placeholder: social.network === "email" ? "mailto:example@domain.com" : social.network === "website" ? "https://example.com" : `https://${social.network}.com/username`,
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          Button13,
          {
            variant: "primary",
            onClick: closeUrlPopover,
            style: { justifyContent: "center", width: "100%" }
          },
          __15("Done", "digiblocks")
        ))
      );
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "options",
              name: "layout-settings",
              title: __15("Layout Settings", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(BaseControl8, { id: "team-alignment-control", label: __15("Layout Type", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl13,
              {
                value: layout,
                onChange: (value) => setAttributes({ layout: value }),
                isBlock: true
              },
              /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption13, { value: "grid", label: __15("Grid", "digiblocks"), "aria-label": __15("Grid Layout", "digiblocks") }),
              /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption13, { value: "list", label: __15("List", "digiblocks"), "aria-label": __15("List Layout", "digiblocks") })
            )),
            layout === "grid" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BaseControl8, { id: "team-alignment-control", label: __15("Alignment", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl13,
              {
                value: alignment,
                onChange: (value) => setAttributes({ alignment: value }),
                isBlock: true
              },
              /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption13, { value: "left", label: __15("Left", "digiblocks"), "aria-label": __15("Left alignment", "digiblocks") }),
              /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption13, { value: "center", label: __15("Center", "digiblocks"), "aria-label": __15("Center alignment", "digiblocks") }),
              /* @__PURE__ */ wp.element.createElement(ToggleGroupControlOption13, { value: "right", label: __15("Right", "digiblocks"), "aria-label": __15("Right alignment", "digiblocks") })
            )), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Columns", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl14,
                {
                  value: columns[localActiveDevice],
                  onChange: (value) => setAttributes({
                    columns: {
                      ...columns,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 1,
                  max: 6,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl14,
                {
                  value: gutter[localActiveDevice],
                  onChange: (value) => setAttributes({
                    gutter: {
                      ...gutter,
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
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "options",
              name: "content-settings",
              title: __15("Content Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl10,
              {
                label: __15("Show Name", "digiblocks"),
                checked: showName,
                onChange: () => setAttributes({ showName: !showName })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl10,
              {
                label: __15("Show Position", "digiblocks"),
                checked: showPosition,
                onChange: () => setAttributes({ showPosition: !showPosition })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl10,
              {
                label: __15("Show Bio", "digiblocks"),
                checked: showBio,
                onChange: () => setAttributes({ showBio: !showBio })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl10,
              {
                label: __15("Show Social Icons", "digiblocks"),
                checked: showSocial,
                onChange: () => setAttributes({ showSocial: !showSocial })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "options",
              name: "image-settings",
              title: __15("Image Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl13,
              {
                label: __15("Image Style", "digiblocks"),
                value: imageStyle,
                options: imageStyleOptions,
                onChange: (value) => setAttributes({ imageStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Image Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl14,
                {
                  value: imageSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageSize: {
                      ...imageSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 50,
                  max: 300,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl13,
              {
                label: __15("Border Style", "digiblocks"),
                value: imageBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ imageBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            imageBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings13,
              {
                title: __15("Border Color", "digiblocks"),
                initialOpen: false,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: imageBorderColor,
                    onChange: (value) => setAttributes({ imageBorderColor: value }),
                    label: __15("Border Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: imageBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageBorderWidth: {
                      ...imageBorderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )),
            imageStyle === "default" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: imageBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageBorderRadius: {
                      ...imageBorderRadius,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "style",
              name: "colors",
              title: __15("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings13,
              {
                title: __15("Text Colors", "digiblocks"),
                initialOpen: true,
                colorSettings: [
                  {
                    value: nameColor,
                    onChange: (value) => setAttributes({ nameColor: value }),
                    label: __15("Name Color", "digiblocks")
                  },
                  {
                    value: positionColor,
                    onChange: (value) => setAttributes({ positionColor: value }),
                    label: __15("Position Color", "digiblocks")
                  },
                  {
                    value: bioColor,
                    onChange: (value) => setAttributes({ bioColor: value }),
                    label: __15("Bio Color", "digiblocks")
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings13,
              {
                title: __15("Social Icon Colors", "digiblocks"),
                initialOpen: false,
                colorSettings: [
                  {
                    value: iconColor,
                    onChange: (value) => setAttributes({ iconColor: value }),
                    label: __15("Icon Color", "digiblocks")
                  },
                  {
                    value: iconHoverColor,
                    onChange: (value) => setAttributes({ iconHoverColor: value }),
                    label: __15("Icon Hover Color", "digiblocks")
                  },
                  {
                    value: iconBackgroundColor,
                    onChange: (value) => setAttributes({ iconBackgroundColor: value }),
                    label: __15("Icon Background", "digiblocks")
                  },
                  {
                    value: iconBackgroundHoverColor,
                    onChange: (value) => setAttributes({ iconBackgroundHoverColor: value }),
                    label: __15("Icon Background Hover", "digiblocks")
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings13,
              {
                title: __15("Box Colors", "digiblocks"),
                initialOpen: false,
                colorSettings: [
                  {
                    value: boxBackgroundColor,
                    onChange: (value) => setAttributes({ boxBackgroundColor: value }),
                    label: __15("Background Color", "digiblocks")
                  },
                  {
                    value: boxBorderColor,
                    onChange: (value) => setAttributes({ boxBorderColor: value }),
                    label: __15("Border Color", "digiblocks")
                  }
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "style",
              name: "typography",
              title: __15("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl11,
              {
                label: __15("Name Typography", "digiblocks"),
                value: typography,
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl11,
              {
                label: __15("Position Typography", "digiblocks"),
                value: textTypography,
                onChange: (value) => setAttributes({ textTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl11,
              {
                label: __15("Bio Typography", "digiblocks"),
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
            TabPanelBody13,
            {
              tab: "style",
              name: "social-icons",
              title: __15("Social Icons", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl14,
                {
                  value: iconSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSize: {
                      ...iconSize,
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
              ResponsiveControl14,
              {
                label: __15("Icon Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl14,
                {
                  value: iconSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSpacing: {
                      ...iconSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 30,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Icon Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: iconPadding[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconPadding: {
                      ...iconPadding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: iconBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconBorderRadius: {
                      ...iconBorderRadius,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "style",
              name: "box-style",
              title: __15("Box Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl13,
              {
                label: __15("Border Style", "digiblocks"),
                value: boxBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ boxBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            boxBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: boxBorderWidth[localActiveDevice],
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
              ResponsiveControl14,
              {
                label: __15("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: boxBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    boxBorderRadius: {
                      ...boxBorderRadius,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl11,
              {
                label: __15("Box Shadow", "digiblocks"),
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl14,
              {
                label: __15("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: boxPadding[localActiveDevice],
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
              ResponsiveControl14,
              {
                label: __15("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl12,
                {
                  values: boxMargin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    boxMargin: {
                      ...boxMargin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "advanced",
              name: "animation",
              title: __15("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl13,
              {
                label: __15("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button13,
              {
                variant: "secondary",
                onClick: triggerAnimationPreview,
                style: { width: "100%" },
                disabled: animating
              },
              animating ? __15("Previewing...", "digiblocks") : __15("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody13,
            {
              tab: "advanced",
              name: "additional",
              title: __15("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __15("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __15(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __15("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __15("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __15("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps27({
      className: `digiblocks-team-block layout-${layout} align-${alignment} ${customClasses || ""}`,
      id: anchor || null,
      // Set the anchor as ID if provided
      "data-custom-id": id
      // Always set the block ID as data attribute for CSS targeting
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls14, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel14,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-container" }, renderTeamMembers()), /* @__PURE__ */ wp.element.createElement(
      Button13,
      {
        variant: "primary",
        icon: "plus",
        onClick: addTeamMember,
        style: { width: "100%", marginTop: "20px", justifyContent: "center" }
      },
      __15("Add Team Member", "digiblocks")
    ), renderUrlPopover(), renderSocialSelectPopover()));
  };
  var edit_default14 = TeamEdit;

  // blocks/team/save.js
  var { useBlockProps: useBlockProps28, RichText: RichText15 } = window.wp.blockEditor;
  var socialIconsSVG3 = {
    facebook: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" })),
    twitter: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" })),
    linkedin: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" })),
    instagram: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" })),
    pinterest: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" })),
    youtube: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" })),
    dribbble: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" })),
    github: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" })),
    behance: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" })),
    vimeo: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" })),
    tiktok: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" })),
    email: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" })),
    website: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" }))
  };
  var TeamSave = ({ attributes }) => {
    const {
      id,
      members,
      layout,
      alignment,
      animation,
      anchor,
      customClasses,
      showName,
      showPosition,
      showBio,
      showSocial
    } = attributes;
    const blockClass = `digiblocks-team-block layout-${layout} align-${alignment} ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`;
    const blockProps = useBlockProps28.save({
      className: blockClass,
      id: anchor || null,
      "data-custom-id": id
    });
    const renderTeamMembers = () => {
      return members.map((member) => {
        return /* @__PURE__ */ wp.element.createElement("div", { key: member.id, className: "digiblocks-team-member" }, showName && member.image && member.image.url && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-image" }, /* @__PURE__ */ wp.element.createElement(
          "img",
          {
            src: member.image.url,
            alt: member.image.alt || member.name
          }
        )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-content" }, showName && /* @__PURE__ */ wp.element.createElement(
          RichText15.Content,
          {
            tagName: "h3",
            className: "digiblocks-team-member-name",
            value: member.name
          }
        ), showPosition && /* @__PURE__ */ wp.element.createElement(
          RichText15.Content,
          {
            tagName: "div",
            className: "digiblocks-team-member-position",
            value: member.position
          }
        ), showBio && /* @__PURE__ */ wp.element.createElement(
          RichText15.Content,
          {
            tagName: "div",
            className: "digiblocks-team-member-bio",
            value: member.bio
          }
        ), showSocial && member.socials && member.socials.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-social" }, member.socials.map((social) => {
          const SocialIcon = socialIconsSVG3[social.network];
          return /* @__PURE__ */ wp.element.createElement(
            "a",
            {
              key: social.id,
              href: social.url,
              className: "digiblocks-team-member-social-icon",
              rel: "noopener noreferrer",
              target: "_blank",
              "aria-label": social.network
            },
            SocialIcon
          );
        }))));
      });
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-container" }, renderTeamMembers()));
  };
  var save_default14 = TeamSave;

  // resources/js/blocks/index.js
  var { __: __16 } = window.wp.i18n;
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
    keywords: [__16("accordion", "digiblocks"), __16("toggle", "digiblocks"), __16("collapse", "digiblocks"), __16("faq", "digiblocks")],
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
            title: __16("Accordion Item 1", "digiblocks"),
            content: __16("Add your content here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
            isOpen: true
          },
          {
            id: "item-2",
            title: __16("Accordion Item 2", "digiblocks"),
            content: __16("Add your content here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
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
            title: __16("Accordion Item 1", "digiblocks"),
            content: __16("This is some sample content for the accordion item.", "digiblocks"),
            isOpen: true
          },
          {
            id: "item-2",
            title: __16("Accordion Item 2", "digiblocks"),
            content: __16("Click on an accordion item to see it expand.", "digiblocks"),
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
    keywords: [__16("cta", "digiblocks"), __16("call to action", "digiblocks"), __16("button", "digiblocks"), __16("conversion", "digiblocks")],
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
        default: __16("Ready to Get Started?", "digiblocks")
      },
      content: {
        type: "string",
        default: __16("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.", "digiblocks")
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
        title: __16("Ready to Get Started?", "digiblocks"),
        content: __16("Join us today and experience the difference.", "digiblocks"),
        buttons: [
          {
            id: "button-1",
            text: __16("Sign Up Now", "digiblocks"),
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
    keywords: [__16("countdown", "digiblocks"), __16("timer", "digiblocks"), __16("clock", "digiblocks")],
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
        default: __16("Days", "digiblocks")
      },
      hoursLabel: {
        type: "string",
        default: __16("Hours", "digiblocks")
      },
      minutesLabel: {
        type: "string",
        default: __16("Minutes", "digiblocks")
      },
      secondsLabel: {
        type: "string",
        default: __16("Seconds", "digiblocks")
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
        default: __16("Time's up!", "digiblocks")
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
    keywords: [__16("counter", "digiblocks"), __16("number", "digiblocks"), __16("stats", "digiblocks"), __16("count up", "digiblocks")],
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
    keywords: [__16("faq", "digiblocks"), __16("questions", "digiblocks"), __16("answers", "digiblocks"), __16("schema", "digiblocks")],
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
            title: __16("What is a frequently asked question?", "digiblocks"),
            content: __16("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.", "digiblocks"),
            isOpen: true
          },
          {
            id: "faq-item-2",
            title: __16("How do I add more questions and answers?", "digiblocks"),
            content: __16('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.', "digiblocks"),
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
            title: __16("What is a frequently asked question?", "digiblocks"),
            content: __16("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.", "digiblocks"),
            isOpen: true
          },
          {
            id: "faq-item-2",
            title: __16("How do I add more questions?", "digiblocks"),
            content: __16('Click the "Add FAQ Item" button to add more questions and answers.', "digiblocks"),
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
    keywords: [__16("map", "digiblocks"), __16("google", "digiblocks"), __16("location", "digiblocks"), __16("marker", "digiblocks")],
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
    keywords: [__16("heading", "digiblocks"), __16("title", "digiblocks"), __16("header", "digiblocks")],
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
        default: __16("Add Your Heading", "digiblocks")
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
        content: __16("Beautiful Heading", "digiblocks"),
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
    keywords: [__16("icon", "digiblocks"), __16("symbol", "digiblocks"), __16("fontawesome", "digiblocks")],
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
    keywords: [__16("icon", "digiblocks"), __16("box", "digiblocks"), __16("feature", "digiblocks"), __16("service", "digiblocks")],
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
        default: __16("Feature Title", "digiblocks")
      },
      content: {
        type: "string",
        default: __16("Add your feature description here. Explain what makes this feature special.", "digiblocks")
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
        title: __16("Feature Title", "digiblocks"),
        content: __16("Add your feature description here. Explain what makes this feature special.", "digiblocks"),
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
    keywords: [__16("separator", "digiblocks"), __16("divider", "digiblocks"), __16("horizontal rule", "digiblocks"), __16("hr", "digiblocks")],
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
    keywords: [__16("social", "digiblocks"), __16("icons", "digiblocks"), __16("networks", "digiblocks"), __16("media", "digiblocks")],
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
            iconValue: {
              name: "Facebook",
              network: "facebook",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg>'
            },
            url: "https://facebook.com",
            label: "Facebook",
            openInNewTab: true,
            rel: "nofollow"
          },
          {
            id: "social-icon-2",
            iconValue: {
              name: "Twitter",
              network: "twitter",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>'
            },
            url: "https://twitter.com",
            label: "Twitter",
            openInNewTab: true,
            rel: "nofollow"
          },
          {
            id: "social-icon-3",
            iconValue: {
              name: "Instagram",
              network: "instagram",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>'
            },
            url: "https://instagram.com",
            label: "Instagram",
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
              network: "facebook",
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
              network: "twitter",
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
              network: "instagram",
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
    keywords: [__16("spacer", "digiblocks"), __16("gap", "digiblocks"), __16("spacing", "digiblocks")],
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
  registerBlockType("digiblocks/table", {
    apiVersion: 2,
    title: digiBlocksData.blocks["table"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["table"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["table"].description,
    keywords: [__16("table", "digiblocks"), __16("comparison", "digiblocks"), __16("grid", "digiblocks"), __16("cells", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("table") ? true : false,
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
      tableData: {
        type: "array",
        default: [
          ["Header 1", "Header 2", "Header 3"],
          ["Cell 1,1", "Cell 1,2", "Cell 1,3"],
          ["Cell 2,1", "Cell 2,2", "Cell 2,3"]
        ]
      },
      hasHeader: {
        type: "boolean",
        default: true
      },
      hasFooter: {
        type: "boolean",
        default: false
      },
      tableBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      tableBorderWidth: {
        type: "number",
        default: 1
      },
      tableBorderStyle: {
        type: "string",
        default: "solid"
      },
      cellPadding: {
        type: "object",
        default: {
          desktop: { top: 15, right: 15, bottom: 15, left: 15, unit: "px" },
          tablet: { top: 12, right: 12, bottom: 12, left: 12, unit: "px" },
          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
        }
      },
      tableBorderCollapse: {
        type: "string",
        default: "collapse"
      },
      headerBackgroundColor: {
        type: "string",
        default: "#f8f9fa"
      },
      headerTextColor: {
        type: "string",
        default: "#333333"
      },
      headingTypography: {
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
      bodyBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      altRowBackgroundColor: {
        type: "string",
        default: ""
      },
      bodyTextColor: {
        type: "string",
        default: "#666666"
      },
      textTypography: {
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
      footerBackgroundColor: {
        type: "string",
        default: "#f8f9fa"
      },
      footerTextColor: {
        type: "string",
        default: "#333333"
      },
      contentTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: 15, mobile: 14 },
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
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
        }
      },
      boxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.1)",
          horizontal: 0,
          vertical: 2,
          blur: 10,
          spread: 0,
          position: "outset"
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
      cellAlignment: {
        type: "string",
        default: "left"
      },
      headerAlignment: {
        type: "string",
        default: "left"
      },
      footerAlignment: {
        type: "string",
        default: "left"
      },
      tablePreset: {
        type: "string",
        default: "default"
      },
      responsiveMode: {
        type: "string",
        default: "stack"
      },
      animation: {
        type: "string",
        default: "none"
      },
      firstColHeader: {
        type: "boolean",
        default: false
      },
      cellControls: {
        type: "object",
        default: {}
      }
    },
    example: {
      attributes: {
        tableData: [
          ["Feature", "Basic", "Premium"],
          ["Storage", "10GB", "1TB"],
          ["Users", "1", "Unlimited"],
          ["Support", "Email", "24/7 Phone"],
          ["Price", "$9.99", "$29.99"]
        ],
        hasHeader: true,
        headerBackgroundColor: "#f8f9fa",
        bodyBackgroundColor: "#ffffff",
        altRowBackgroundColor: "#f9f9f9"
      }
    },
    edit: edit_default13,
    save: save_default13
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
    keywords: [__16("team", "digiblocks"), __16("members", "digiblocks"), __16("staff", "digiblocks"), __16("people", "digiblocks")],
    supports: {
      inserter: getBlockActiveStatus("team") ? true : false,
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
      members: {
        type: "array",
        default: [
          {
            id: "team-member-1",
            name: __16("John Doe", "digiblocks"),
            position: __16("CEO & Founder", "digiblocks"),
            bio: __16("John has over 15 years of experience in the industry and leads our team with vision and expertise.", "digiblocks"),
            image: {
              url: "",
              id: "",
              alt: ""
            },
            socials: [
              {
                id: "social-1",
                network: "facebook",
                url: "https://facebook.com"
              },
              {
                id: "social-2",
                network: "twitter",
                url: "https://twitter.com"
              }
            ]
          },
          {
            id: "team-member-2",
            name: __16("Jane Smith", "digiblocks"),
            position: __16("Creative Director", "digiblocks"),
            bio: __16("Jane brings creativity and innovation to every project with her background in design and marketing.", "digiblocks"),
            image: {
              url: "",
              id: "",
              alt: ""
            },
            socials: [
              {
                id: "social-3",
                network: "linkedin",
                url: "https://linkedin.com"
              },
              {
                id: "social-4",
                network: "instagram",
                url: "https://instagram.com"
              }
            ]
          },
          {
            id: "team-member-3",
            name: __16("Mike Johnson", "digiblocks"),
            position: __16("Lead Developer", "digiblocks"),
            bio: __16("Mike is our technical expert, specializing in cutting-edge technologies and solving complex problems.", "digiblocks"),
            image: {
              url: "",
              id: "",
              alt: ""
            },
            socials: [
              {
                id: "social-5",
                network: "github",
                url: "https://github.com"
              },
              {
                id: "social-6",
                network: "dribbble",
                url: "https://dribbble.com"
              }
            ]
          }
        ]
      },
      columns: {
        type: "object",
        default: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        }
      },
      gutter: {
        type: "object",
        default: {
          desktop: 30,
          tablet: 20,
          mobile: 15
        }
      },
      layout: {
        type: "string",
        default: "grid"
      },
      alignment: {
        type: "string",
        default: "center"
      },
      imageStyle: {
        type: "string",
        default: "circle"
      },
      imageSize: {
        type: "object",
        default: {
          desktop: 150,
          tablet: 120,
          mobile: 100
        }
      },
      imageBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
        }
      },
      imageBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
        }
      },
      imageBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      imageBorderStyle: {
        type: "string",
        default: "none"
      },
      typography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 22, tablet: 20, mobile: 18 },
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
      textTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: 15, mobile: 14 },
          fontSizeUnit: "px",
          fontWeight: "400",
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
          fontWeight: "400",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
          letterSpacingUnit: "px"
        }
      },
      nameColor: {
        type: "string",
        default: "#333333"
      },
      positionColor: {
        type: "string",
        default: "#666666"
      },
      bioColor: {
        type: "string",
        default: "#666666"
      },
      iconColor: {
        type: "string",
        default: "#1e73be"
      },
      iconHoverColor: {
        type: "string",
        default: "#135e9e"
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 20,
          tablet: 18,
          mobile: 16
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
      iconBackgroundColor: {
        type: "string",
        default: "transparent"
      },
      iconBackgroundHoverColor: {
        type: "string",
        default: ""
      },
      iconBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 50, right: 50, bottom: 50, left: 50, unit: "%" },
          tablet: { top: 50, right: 50, bottom: 50, left: 50, unit: "%" },
          mobile: { top: 50, right: 50, bottom: 50, left: 50, unit: "%" }
        }
      },
      iconPadding: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: 6, right: 6, bottom: 6, left: 6, unit: "px" },
          mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" }
        }
      },
      boxBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      boxBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      boxBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" }
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
      boxBorderStyle: {
        type: "string",
        default: "solid"
      },
      boxPadding: {
        type: "object",
        default: {
          desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: "px" },
          tablet: { top: 25, right: 25, bottom: 25, left: 25, unit: "px" },
          mobile: { top: 20, right: 20, bottom: 20, left: 20, unit: "px" }
        }
      },
      boxMargin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 25, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" }
        }
      },
      boxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.1)",
          horizontal: 0,
          vertical: 5,
          blur: 15,
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
          vertical: 10,
          blur: 25,
          spread: 0,
          position: "outset"
        }
      },
      animation: {
        type: "string",
        default: "none"
      },
      showName: {
        type: "boolean",
        default: true
      },
      showPosition: {
        type: "boolean",
        default: true
      },
      showBio: {
        type: "boolean",
        default: true
      },
      showSocial: {
        type: "boolean",
        default: true
      }
    },
    example: {
      attributes: {
        members: [
          {
            id: "team-member-1",
            name: __16("John Doe", "digiblocks"),
            position: __16("CEO & Founder", "digiblocks"),
            bio: __16("John has over 15 years of experience in the industry.", "digiblocks"),
            socials: [
              {
                id: "social-1",
                network: "facebook",
                url: "https://facebook.com"
              },
              {
                id: "social-2",
                network: "twitter",
                url: "https://twitter.com"
              }
            ]
          },
          {
            id: "team-member-2",
            name: __16("Jane Smith", "digiblocks"),
            position: __16("Creative Director", "digiblocks"),
            bio: __16("Jane brings creativity to every project.", "digiblocks"),
            socials: [
              {
                id: "social-3",
                network: "linkedin",
                url: "https://linkedin.com"
              }
            ]
          }
        ],
        columns: {
          desktop: 2,
          tablet: 2,
          mobile: 1
        }
      }
    },
    edit: edit_default14,
    save: save_default14
  });
})();
