(() => {
  // blocks/icon-list/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    LinkControl
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    TabPanel,
    Button,
    ToggleControl,
    Modal,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var {
    ResponsiveControl,
    DimensionControl,
    TypographyControl,
    BoxShadowControl,
    CustomTabPanel,
    TabPanelBody,
    FontAwesomeControl
  } = digi.components;
  var IconListEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      items,
      defaultIconSource,
      defaultCustomSvg,
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
      hoverEffect
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    useEffect(() => {
      if (!items || items.length === 0) {
        const defaultItems = [
          {
            id: "item-1",
            content: __("First list item with icon", "digiblocks"),
            iconSource: "library",
            icon: {
              id: "check",
              name: "Check",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              style: "solid",
              categories: ["design"]
            },
            customSvg: "",
            linkEnabled: false,
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: ""
          },
          {
            id: "item-2",
            content: __("Second list item with star icon", "digiblocks"),
            iconSource: "library",
            icon: {
              id: "star",
              name: "Star",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
              style: "solid",
              categories: ["design"]
            },
            customSvg: "",
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: ""
          },
          {
            id: "item-3",
            content: __("Third list item with heart icon", "digiblocks"),
            iconSource: "library",
            icon: {
              id: "heart",
              name: "Heart",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',
              style: "solid",
              categories: ["design"]
            },
            customSvg: "",
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: ""
          }
        ];
        setAttributes({ items: defaultItems });
      } else {
        const hasNonUniqueIds = items.some(
          (item, index) => items.findIndex((i) => i.id === item.id) !== index
        );
        if (hasNonUniqueIds) {
          const uniqueItems = items.map((item, index) => ({
            ...JSON.parse(JSON.stringify(item)),
            // Deep clone to break references
            id: `item-${Date.now()}-${index}`
          }));
          setAttributes({ items: uniqueItems });
        }
      }
    }, [clientId]);
    const [localActiveDevice, setLocalActiveDevice] = useState(
      window.digi.responsiveState.activeDevice
    );
    const [iconModalOpen, setIconModalOpen] = useState(false);
    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [currentEditingItem, setCurrentEditingItem] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
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
    const [componentsLoaded, setComponentsLoaded] = useState(false);
    useEffect(() => {
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
      { label: __("Ridge", "digiblocks"), value: "ridge" }
    ];
    const hoverEffectOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Lift", "digiblocks"), value: "lift" },
      { label: __("Scale", "digiblocks"), value: "scale" },
      { label: __("Glow", "digiblocks"), value: "glow" }
    ];
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
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
    const stateTabList = [
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
    ];
    const addListItem = () => {
      const newItems = [...items];
      newItems.push({
        id: `item-${Date.now()}`,
        content: __("New list item", "digiblocks"),
        icon: { ...defaultIcon },
        linkUrl: "",
        linkOpenInNewTab: false,
        linkRel: ""
      });
      setAttributes({ items: newItems });
    };
    const removeListItem = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setAttributes({ items: newItems });
    };
    const updateListItem = (index, field, value) => {
      const newItems = items.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [field]: value
          };
        }
        return item;
      });
      setAttributes({ items: newItems });
    };
    const moveItemUp = (index) => {
      if (index === 0)
        return;
      const newItems = [...items];
      [newItems[index - 1], newItems[index]] = [
        newItems[index],
        newItems[index - 1]
      ];
      setAttributes({ items: newItems });
    };
    const moveItemDown = (index) => {
      if (index === items.length - 1)
        return;
      const newItems = [...items];
      [newItems[index], newItems[index + 1]] = [
        newItems[index + 1],
        newItems[index]
      ];
      setAttributes({ items: newItems });
    };
    const duplicateItem = (index) => {
      const newItems = [...items];
      const duplicatedItem = { ...items[index], id: `item-${Date.now()}` };
      newItems.splice(index + 1, 0, duplicatedItem);
      setAttributes({ items: newItems });
    };
    const setItemIcon = (index, icon) => {
      const newItems = [...items];
      newItems[index].icon = icon;
      setAttributes({ items: newItems });
    };
    const FontAwesomeControl2 = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
        borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
				${getDimensionCSS(borderWidth, "border-width", activeDevice)}
				${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
			`;
      } else {
        borderCSS = "border: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      const paddingCSS = `${getDimensionCSS(padding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice)}`;
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
				flex-direction: ${listLayout === "horizontal" ? "row" : "column"};
				flex-wrap: wrap;
				justify-content: ${listAlign === "center" ? "center" : listAlign === "right" ? "flex-end" : "flex-start"};
				gap: ${itemSpace[activeDevice] !== void 0 ? itemSpace[activeDevice] : 16}px;
            }
            
            /* List item */
            .${id} .digiblocks-icon-list-item {
                display: inline-flex;
                align-items: center;
				gap: ${iconSpace[activeDevice] !== void 0 ? iconSpace[activeDevice] : 12}px;
				justify-content: ${listAlign === "center" ? "center" : listAlign === "right" ? "flex-end" : "flex-start"};
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
                width: ${iconSize[activeDevice] !== void 0 ? iconSize[activeDevice] : 24}px;
                height: ${iconSize[activeDevice] !== void 0 ? iconSize[activeDevice] : 24}px;
                fill: currentColor;
            }
            
            /* Text content */
            .${id} .digiblocks-icon-list-content {
                color: ${textColor};
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
				gap: ${iconSpace[activeDevice] !== void 0 ? iconSpace[activeDevice] : 12}px;
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
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "list-items",
              title: __("List Items", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Default Icon Source", "digiblocks"),
                value: defaultIconSource || "library",
                onChange: (value) => setAttributes({ defaultIconSource: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "library",
                  label: __("Library", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "custom",
                  label: __("Custom", "digiblocks")
                }
              )
            ),
            (!defaultIconSource || defaultIconSource === "library") && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
              FontAwesomeControl2,
              {
                label: __("Select Icon", "digiblocks"),
                value: defaultIcon,
                onChange: (value) => setAttributes({ defaultIcon: value })
              }
            )),
            defaultIconSource === "custom" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "default-custom-svg-input" }, __("Custom SVG Code", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "textarea",
              {
                id: "default-custom-svg-input",
                className: "components-textarea-control__input",
                value: defaultCustomSvg || "",
                onChange: (e) => {
                  const newSvg = e.target.value;
                  const newIconValue = {
                    id: "custom-svg",
                    name: "Custom SVG",
                    svg: newSvg,
                    style: "custom",
                    categories: ["custom"]
                  };
                  setAttributes({
                    defaultCustomSvg: newSvg,
                    defaultIcon: newIconValue
                  });
                },
                placeholder: __("Paste your SVG code here...", "digiblocks"),
                rows: 6,
                style: { width: "100%", marginTop: "8px" }
              }
            ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __("Paste your SVG code here. Make sure it only contains valid SVG markup.", "digiblocks"))), defaultCustomSvg && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px" } }, /* @__PURE__ */ wp.element.createElement("p", null, /* @__PURE__ */ wp.element.createElement("strong", null, __("Preview:", "digiblocks"))), /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "20px", background: "#f0f0f1", borderRadius: "3px", display: "flex", justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50px", height: "50px" }, dangerouslySetInnerHTML: { __html: defaultCustomSvg } })))),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("List Layout", "digiblocks"),
                value: listLayout,
                onChange: (value) => setAttributes({ listLayout: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "horizontal",
                  label: __("Horizontal", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "vertical",
                  label: __("Vertical", "digiblocks")
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("List Alignment", "digiblocks"),
                value: listAlign,
                onChange: (value) => setAttributes({ listAlign: value }),
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
                  value: "center",
                  label: __("Center", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "right",
                  label: __("Right", "digiblocks")
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
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
                  value: "before",
                  label: __("Before", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "after",
                  label: __("After", "digiblocks")
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Item Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: itemSpace[localActiveDevice],
                  onChange: (value) => setAttributes({
                    itemSpace: {
                      ...itemSpace,
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
              ResponsiveControl,
              {
                label: __("Icon Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: iconSpace[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSpace: {
                      ...iconSpace,
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
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "icon-style",
              title: __("Icon Style", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
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
                  min: 8,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => /* @__PURE__ */ wp.element.createElement(
                PanelColorSettings,
                {
                  title: tab.name === "normal" ? __(
                    "Icon Colors",
                    "digiblocks"
                  ) : __(
                    "Icon Hover Colors",
                    "digiblocks"
                  ),
                  initialOpen: true,
                  enableAlpha: true,
                  colorSettings: [
                    {
                      value: tab.name === "normal" ? iconColor : iconHoverColor,
                      onChange: (value) => setAttributes(
                        tab.name === "normal" ? {
                          iconColor: value
                        } : {
                          iconHoverColor: value
                        }
                      ),
                      label: __(
                        "Icon Color",
                        "digiblocks"
                      )
                    }
                  ]
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "text-style",
              title: __("Text Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => /* @__PURE__ */ wp.element.createElement(
                PanelColorSettings,
                {
                  title: tab.name === "normal" ? __(
                    "Text Colors",
                    "digiblocks"
                  ) : __(
                    "Text Hover Colors",
                    "digiblocks"
                  ),
                  initialOpen: true,
                  enableAlpha: true,
                  colorSettings: [
                    {
                      value: tab.name === "normal" ? textColor : textHoverColor,
                      onChange: (value) => setAttributes(
                        tab.name === "normal" ? {
                          textColor: value
                        } : {
                          textHoverColor: value
                        }
                      ),
                      label: __(
                        "Text Color",
                        "digiblocks"
                      )
                    }
                  ]
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({ contentTypography: value }),
                defaults: {
                  fontSize: {
                    desktop: 16,
                    tablet: 15,
                    mobile: 14
                  },
                  fontSizeUnit: "px",
                  lineHeight: {
                    desktop: 1.5,
                    tablet: 1.4,
                    mobile: 1.3
                  },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "box-style",
              title: __("Box Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: borderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  setAttributes({ borderStyle: value });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
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
                    label: __(
                      "Border Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: borderHoverColor,
                    onChange: (value) => setAttributes({
                      borderHoverColor: value
                    }),
                    label: __(
                      "Border Hover Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __(
                  "Border Width",
                  "digiblocks"
                )
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
                label: __(
                  "Border Radius",
                  "digiblocks"
                )
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
                    {
                      label: "px",
                      value: "px"
                    },
                    { label: "%", value: "%" }
                  ]
                }
              )
            )),
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => /* @__PURE__ */ wp.element.createElement(
                PanelColorSettings,
                {
                  title: tab.name === "normal" ? __(
                    "Background Colors",
                    "digiblocks"
                  ) : __(
                    "Background Hover Colors",
                    "digiblocks"
                  ),
                  initialOpen: true,
                  enableAlpha: true,
                  colorSettings: [
                    {
                      value: tab.name === "normal" ? backgroundColor : backgroundHoverColor,
                      onChange: (value) => setAttributes(
                        tab.name === "normal" ? {
                          backgroundColor: value
                        } : {
                          backgroundHoverColor: value
                        }
                      ),
                      label: __(
                        "Background Color",
                        "digiblocks"
                      )
                    }
                  ]
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Hover Effect", "digiblocks"),
                value: hoverEffect,
                options: hoverEffectOptions,
                onChange: (value) => setAttributes({ hoverEffect: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "shadow",
              title: __("Box Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
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
                label: __("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
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
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement(
              "label",
              {
                className: "components-base-control__label",
                htmlFor: "html-anchor"
              },
              __("HTML anchor", "digiblocks")
            ), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "html-anchor",
                value: anchor || "",
                onChange: (e) => setAttributes({
                  anchor: e.target.value
                }),
                "aria-describedby": "html-anchor-help",
                autoCapitalize: "none",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement(
              "p",
              {
                id: "html-anchor-help",
                className: "components-base-control__help"
              },
              __(
                `Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,
                "digiblocks"
              )
            )),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement(
              "label",
              {
                className: "components-base-control__label",
                htmlFor: "additional-css-classes"
              },
              __(
                "Additional CSS class(es)",
                "digiblocks"
              )
            ), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "additional-css-classes",
                value: customClasses || "",
                onChange: (e) => setAttributes({
                  customClasses: e.target.value
                }),
                "aria-describedby": "additional-css-classes-help",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement(
              "p",
              {
                id: "additional-css-classes-help",
                className: "components-base-control__help"
              },
              __(
                "Separate multiple classes with spaces.",
                "digiblocks"
              )
            ))
          ));
        default:
          return null;
      }
    };
    const renderListItems = () => {
      return items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemContent = /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, item.icon && item.icon.svg && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-icon" }, /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: item.icon.svg
            }
          }
        )), /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            className: "digiblocks-icon-list-content",
            value: item.content,
            onChange: (value) => updateListItem(index, "content", value),
            placeholder: __(
              "Enter list item text...",
              "digiblocks"
            ),
            allowedFormats: [
              "core/bold",
              "core/italic",
              "core/inline-code"
            ]
          }
        ));
        return /* @__PURE__ */ wp.element.createElement(
          "li",
          {
            key: item.id,
            className: "digiblocks-icon-list-item",
            style: isLast ? { marginBottom: 0 } : {}
          },
          item.linkUrl ? /* @__PURE__ */ wp.element.createElement("a", { href: "#", onClick: (e) => e.preventDefault(), className: "digiblocks-icon-list-child" }, itemContent) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-child" }, itemContent),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-item-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Edit Icon", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: "admin-customizer",
              onClick: () => {
                setCurrentEditingItem(index);
                setIconModalOpen(true);
              },
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Link", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: "admin-links",
              onClick: () => {
                setCurrentEditingItem(index);
                setLinkModalOpen(true);
              },
              isSmall: true,
              variant: item.linkUrl ? "primary" : "secondary"
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: "arrow-up-alt2",
              onClick: () => moveItemUp(index),
              disabled: index === 0,
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: "arrow-down-alt2",
              onClick: () => moveItemDown(index),
              disabled: index === items.length - 1,
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: "admin-page",
              onClick: () => duplicateItem(index),
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: "trash",
              onClick: () => removeListItem(index),
              isSmall: true
            }
          )))
        );
      });
    };
    const blockProps = useBlockProps({
      className: `digiblocks-icon-list-block ${id} ${customClasses || ""}`,
      id: anchor || null
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-wrapper" }, /* @__PURE__ */ wp.element.createElement("ul", { className: "digiblocks-icon-list" }, renderListItems())), iconModalOpen && currentEditingItem !== null && /* @__PURE__ */ wp.element.createElement(
      Modal,
      {
        title: __("Choose Icon", "digiblocks"),
        onRequestClose: () => setIconModalOpen(false),
        className: "digiblocks-icon-modal"
      },
      /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControl,
        {
          label: __("Icon Source", "digiblocks"),
          value: items[currentEditingItem].iconSource || "library",
          onChange: (value) => {
            const newItems = [...items];
            newItems[currentEditingItem].iconSource = value;
            setAttributes({ items: newItems });
          },
          isBlock: true,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        },
        /* @__PURE__ */ wp.element.createElement(
          ToggleGroupControlOption,
          {
            value: "library",
            label: __("Library", "digiblocks")
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          ToggleGroupControlOption,
          {
            value: "custom",
            label: __("Custom", "digiblocks")
          }
        )
      ),
      (!items[currentEditingItem].iconSource || items[currentEditingItem].iconSource === "library") && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
        FontAwesomeControl2,
        {
          value: items[currentEditingItem].icon,
          onChange: (newIcon) => {
            setItemIcon(currentEditingItem, newIcon);
            setIconModalOpen(false);
          }
        }
      )),
      items[currentEditingItem].iconSource === "custom" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "custom-svg-input" }, __("Custom SVG Code", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
        "textarea",
        {
          id: "custom-svg-input",
          className: "components-textarea-control__input",
          value: items[currentEditingItem].customSvg || "",
          onChange: (e) => {
            const newSvg = e.target.value;
            const newItems = [...items];
            const newIconValue = {
              id: "custom-svg",
              name: "Custom SVG",
              svg: newSvg,
              style: "custom",
              categories: ["custom"]
            };
            newItems[currentEditingItem].customSvg = newSvg;
            newItems[currentEditingItem].icon = newIconValue;
            setAttributes({ items: newItems });
          },
          placeholder: __("Paste your SVG code here...", "digiblocks"),
          rows: 6,
          style: { width: "100%", marginTop: "8px" }
        }
      ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __("Paste your SVG code here. Make sure it only contains valid SVG markup.", "digiblocks"))), items[currentEditingItem].customSvg && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px" } }, /* @__PURE__ */ wp.element.createElement("p", null, /* @__PURE__ */ wp.element.createElement("strong", null, __("Preview:", "digiblocks"))), /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "20px", background: "#f0f0f1", borderRadius: "3px", display: "flex", justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50px", height: "50px" }, dangerouslySetInnerHTML: { __html: items[currentEditingItem].customSvg } }))), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          variant: "primary",
          onClick: () => setIconModalOpen(false)
        },
        __("Apply", "digiblocks")
      )))
    ), linkModalOpen && currentEditingItem !== null && /* @__PURE__ */ wp.element.createElement(
      Modal,
      {
        title: __("Link Settings", "digiblocks"),
        onRequestClose: () => setLinkModalOpen(false),
        className: "digiblocks-link-modal"
      },
      /* @__PURE__ */ wp.element.createElement(
        LinkControl,
        {
          value: items[currentEditingItem].linkUrl ? {
            url: items[currentEditingItem].linkUrl,
            opensInNewTab: items[currentEditingItem].linkOpenInNewTab,
            rel: items[currentEditingItem].linkRel
          } : void 0,
          settings: [
            {
              id: "opensInNewTab",
              title: __("Open in new tab", "digiblocks")
            },
            {
              id: "rel",
              title: __("Add nofollow", "digiblocks")
            }
          ],
          onChange: (newLink) => {
            if (newLink && newLink.url) {
              updateListItem(currentEditingItem, "linkUrl", newLink.url);
              updateListItem(currentEditingItem, "linkOpenInNewTab", !!newLink.opensInNewTab);
              updateListItem(currentEditingItem, "linkRel", newLink.rel || "");
              setLinkModalOpen(false);
            }
          },
          onRemove: () => {
            updateListItem(currentEditingItem, "linkUrl", "");
            updateListItem(currentEditingItem, "linkOpenInNewTab", false);
            updateListItem(currentEditingItem, "linkRel", "");
            setLinkModalOpen(false);
          },
          forceIsEditingLink: !items[currentEditingItem].linkUrl,
          allowDirectEntry: true,
          suggestionsQuery: {
            type: "post",
            subtype: "any"
          }
        }
      )
    ), /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        variant: "primary",
        icon: "plus",
        onClick: addListItem,
        style: {
          marginTop: "20px",
          width: "100%",
          justifyContent: "center"
        }
      },
      __("Add Icon List Item", "digiblocks")
    )));
  };
  var edit_default = IconListEdit;

  // blocks/icon-list/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var IconListSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      items,
      animation,
      hoverEffect,
      listLayout,
      listAlign,
      iconPosition
    } = attributes;
    const blockClasses = [
      "digiblocks-icon-list-block",
      id,
      animation !== "none" ? `animate-${animation}` : "",
      hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null
    });
    const renderListItems = () => {
      return items.map((item) => {
        const renderIcon = () => {
          if ((!item.iconSource || item.iconSource === "library") && item.icon && item.icon.svg && item.icon.svg.trim() !== "") {
            return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: item.icon.svg } }));
          }
          if (item.iconSource === "custom" && item.customSvg && item.customSvg.trim() !== "") {
            return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: item.customSvg } }));
          }
          return null;
        };
        const itemContent = /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, renderIcon(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-content" }, /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            value: item.content
          }
        )));
        if (item.linkUrl) {
          let relValue = item.linkRel || "";
          if (item.linkOpenInNewTab) {
            const relParts = relValue.split(" ").filter(Boolean);
            if (!relParts.includes("noopener")) {
              relParts.push("noopener");
            }
            if (!relParts.includes("noreferrer")) {
              relParts.push("noreferrer");
            }
            relValue = relParts.join(" ");
          }
          return /* @__PURE__ */ wp.element.createElement("li", { key: item.id, className: "digiblocks-icon-list-item" }, /* @__PURE__ */ wp.element.createElement(
            "a",
            {
              className: "digiblocks-icon-list-child",
              href: item.linkUrl,
              target: item.linkOpenInNewTab ? "_blank" : "_self",
              rel: relValue || void 0
            },
            itemContent
          ));
        }
        return /* @__PURE__ */ wp.element.createElement("li", { key: item.id, className: "digiblocks-icon-list-item" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-child" }, itemContent));
      });
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-list-wrapper" }, /* @__PURE__ */ wp.element.createElement("ul", { className: `digiblocks-icon-list ${iconPosition === "after" ? "icon-position-after" : "icon-position-before"}` }, renderListItems())));
  };
  var save_default = IconListSave;

  // blocks/icon-list/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/icon-list", {
    apiVersion: 2,
    title: digiBlocksData.blocks["icon-list"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["icon-list"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["icon-list"].description,
    keywords: [__2("icon", "digiblocks"), __2("list", "digiblocks"), __2("menu", "digiblocks"), __2("feature", "digiblocks"), __2("service", "digiblocks")],
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
      defaultIconSource: {
        type: "string",
        default: "library"
      },
      defaultCustomSvg: {
        type: "string",
        default: ""
      },
      items: {
        type: "array",
        default: [
          {
            id: "item-1",
            content: __2("First list item with icon", "digiblocks"),
            iconSource: "library",
            icon: {
              id: "check",
              name: "Check",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
              style: "solid",
              categories: ["design"]
            },
            customSvg: "",
            linkEnabled: false,
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: ""
          },
          {
            id: "item-2",
            content: __2("Second list item with star icon", "digiblocks"),
            iconSource: "library",
            icon: {
              id: "star",
              name: "Star",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
              style: "solid",
              categories: ["design"]
            },
            customSvg: "",
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: ""
          },
          {
            id: "item-3",
            content: __2("Third list item with heart icon", "digiblocks"),
            iconSource: "library",
            icon: {
              id: "heart",
              name: "Heart",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',
              style: "solid",
              categories: ["design"]
            },
            customSvg: "",
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: ""
          }
        ]
      },
      defaultIcon: {
        type: "object",
        default: {
          id: "check",
          name: "Check",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
          style: "solid",
          categories: ["design"]
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
      listLayout: {
        type: "string",
        default: "vertical"
      },
      listAlign: {
        type: "string",
        default: "left"
      },
      iconPosition: {
        type: "string",
        default: "before"
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 24,
          tablet: 20,
          mobile: 18
        }
      },
      iconSpace: {
        type: "object",
        default: {
          desktop: 12,
          tablet: 10,
          mobile: 8
        }
      },
      itemSpace: {
        type: "object",
        default: {
          desktop: 16,
          tablet: 12,
          mobile: 8
        }
      },
      iconColor: {
        type: "string",
        default: "#1e73be"
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      textColor: {
        type: "string",
        default: ""
      },
      textHoverColor: {
        type: "string",
        default: ""
      },
      animation: {
        type: "string",
        default: "none"
      },
      padding: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
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
      borderStyle: {
        type: "string",
        default: "none"
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
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
      backgroundColor: {
        type: "string",
        default: ""
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      hoverEffect: {
        type: "string",
        default: "none"
      }
    },
    example: {
      attributes: {
        items: [
          {
            id: "item-1",
            content: __2("Professional feature", "digiblocks"),
            icon: {
              id: "star",
              name: "Star",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
              style: "solid",
              categories: ["design"]
            }
          },
          {
            id: "item-2",
            content: __2("24/7 support service", "digiblocks"),
            icon: {
              id: "headset",
              name: "Headset",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>',
              style: "solid",
              categories: ["business", "technology"]
            }
          },
          {
            id: "item-3",
            content: __2("Free updates and documentation", "digiblocks"),
            icon: {
              id: "download",
              name: "Download",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 0c17.7 0 32 14.3 32 32V242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7V32c0-17.7 14.3-32 32-32zM48 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H464c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H304 208 48zm272 80c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z"/></svg>',
              style: "solid",
              categories: ["arrows", "technology"]
            }
          }
        ],
        iconColor: "#1e73be",
        textColor: "#333333"
      },
      viewportWidth: 800
    },
    edit: edit_default,
    save: save_default
  });
})();
