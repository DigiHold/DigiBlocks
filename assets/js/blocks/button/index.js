(() => {
  // blocks/button/edit.js
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
    TabPanel,
    ToggleControl,
    Spinner,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect } = window.wp.element;
  var { useBlockId, getDimensionCSS } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, BoxShadowControl, TypographyControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;
  var ButtonEdit = ({ attributes, setAttributes, clientId, isSelected }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      text,
      url,
      opensInNewTab,
      rel,
      iconSource,
      customSvg,
      iconValue,
      iconPosition,
      size,
      fill,
      textColor,
      textHoverColor,
      backgroundColor,
      backgroundHoverColor,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      borderHoverColor,
      boxShadow,
      boxShadowHover,
      padding,
      margin,
      onlyIcon,
      buttonTypography
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [isEditingURL, setIsEditingURL] = useState(false);
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const [componentsLoaded, setComponentsLoaded] = useState(false);
    const setIconValue = (newIcon) => {
      setAttributes({ iconValue: newIcon });
    };
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
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
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
    const sizeOptions = [
      { label: __("Small", "digiblocks"), value: "small" },
      { label: __("Medium", "digiblocks"), value: "medium" },
      { label: __("Large", "digiblocks"), value: "large" },
      { label: __("Custom", "digiblocks"), value: "custom" }
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
    const FontAwesomeControl2 = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      let sizeCSS = "";
      if (size === "custom") {
        sizeCSS = getDimensionCSS(padding, "padding", activeDevice);
      } else if (size === "small") {
        sizeCSS = "padding: 8px 16px;";
      } else if (size === "large") {
        sizeCSS = "padding: 16px 32px;";
      } else {
        sizeCSS = "padding: 12px 24px;";
      }
      let borderCSS = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
        const borderWidthCSS = getDimensionCSS(borderWidth, "border-width", activeDevice);
        const borderWidthStyle = borderWidthCSS || "border-width: 1px 1px 1px 1px;";
        borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor};
                ${borderWidthStyle}
            `;
      } else {
        borderCSS = "border: none;";
      }
      let borderRadiusCSS = "";
      borderRadiusCSS = getDimensionCSS(borderRadius, "border-radius", activeDevice);
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      const marginCSS = getDimensionCSS(margin, "margin", activeDevice);
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
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
      return `
            /* Button Block - ${id} */
            .${id} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease;
                ${sizeCSS}
                ${borderCSS}
                ${borderRadiusCSS}
                ${boxShadowCSS}
                ${marginCSS}
                ${fill ? "width: 100%;" : ""}
                gap: 8px; /* Space between icon and text */
                ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                ${textColor ? `color: ${textColor};` : ""}
            }
            
            .${id}:hover {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
                ${hoverCSS}
            }
            
            /* Icon styles */
            .${id} .digiblocks-button-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-button-icon svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
            }
            
            /* Button typography */
            .${id} {
                ${buttonTypographyCSS}
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
    const renderIcon = () => {
      if (iconSource === "library" && iconValue && iconValue.svg && iconValue.svg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            key: "icon",
            className: "digiblocks-button-icon",
            dangerouslySetInnerHTML: {
              __html: iconValue.svg
            }
          }
        );
      }
      if (iconSource === "custom" && customSvg && customSvg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            key: "icon",
            className: "digiblocks-button-icon",
            dangerouslySetInnerHTML: {
              __html: customSvg
            }
          }
        );
      }
      return null;
    };
    const renderButtonContent = () => {
      const iconElement = renderIcon();
      const textElement = !onlyIcon ? /* @__PURE__ */ wp.element.createElement(
        RichText,
        {
          key: "text",
          value: text,
          onChange: (value) => setAttributes({ text: value }),
          placeholder: __("Add text\u2026", "digiblocks"),
          allowedFormats: [],
          withoutInteractiveFormatting: true,
          identifier: "text"
        }
      ) : null;
      if (iconPosition === "left") {
        return [iconElement, textElement].filter(Boolean);
      } else {
        return [textElement, iconElement].filter(Boolean);
      }
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "icon",
              title: __("Icon", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Icon Source", "digiblocks"),
                value: iconSource || "library",
                onChange: (value) => setAttributes({ iconSource: value }),
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
            ), iconSource === "library" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement(Spinner, null), /* @__PURE__ */ wp.element.createElement("p", null, __("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
              FontAwesomeControl2,
              {
                label: __("Select Icon", "digiblocks"),
                value: iconValue,
                onChange: setIconValue
              }
            ), iconValue && componentsLoaded && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px", padding: "10px", background: "#f0f0f1", borderRadius: "3px" } }, /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("Selected Icon:", "digiblocks")), " ", iconValue.name), /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 5px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("Style:", "digiblocks")), " ", iconValue.style), iconValue.categories && iconValue.categories.length > 0 && /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("Categories:", "digiblocks")), " ", iconValue.categories.join(", "))))), iconSource === "custom" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "custom-svg-input" }, __("Custom SVG Code", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "textarea",
              {
                id: "custom-svg-input",
                className: "components-textarea-control__input",
                value: customSvg || "",
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
                    customSvg: newSvg,
                    iconValue: newIconValue
                  });
                },
                placeholder: __("Paste your SVG code here...", "digiblocks"),
                rows: 10,
                style: { width: "100%", marginTop: "8px" }
              }
            ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.", "digiblocks"))), customSvg && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px" } }, /* @__PURE__ */ wp.element.createElement("p", null, /* @__PURE__ */ wp.element.createElement("strong", null, __("Preview:", "digiblocks"))), /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "20px", background: "#f0f0f1", borderRadius: "3px", display: "flex", justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-custom-svg-preview", style: { width: "50px", height: "50px" }, dangerouslySetInnerHTML: { __html: customSvg } }))))),
            iconValue && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Only Icon", "digiblocks"),
                checked: onlyIcon,
                onChange: (value) => setAttributes({ onlyIcon: value }),
                __nextHasNoMarginBottom: true
              }
            ), !onlyIcon && /* @__PURE__ */ wp.element.createElement(
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
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "link",
              title: __("Link", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              LinkControl,
              {
                value: url ? { url, opensInNewTab, rel } : void 0,
                onChange: (newLink) => {
                  setAttributes({
                    url: newLink.url,
                    opensInNewTab: newLink.opensInNewTab,
                    rel: newLink.rel || ""
                  });
                  setIsEditingURL(false);
                },
                settings: [
                  {
                    id: "opensInNewTab",
                    title: __("Open in new tab")
                  },
                  {
                    id: "rel",
                    title: __("Add noopener noreferrer")
                  }
                ],
                onRemove: () => {
                  setAttributes({ url: "", opensInNewTab: false, rel: "" });
                  setIsEditingURL(false);
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "size",
              title: __("Size and Fill", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Size", "digiblocks"),
                value: size,
                options: sizeOptions,
                onChange: (value) => setAttributes({ size: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Expand to Container Width", "digiblocks"),
                checked: fill,
                onChange: (value) => setAttributes({ fill: value }),
                __nextHasNoMarginBottom: true
              }
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "typography",
              title: __("Typography", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Button Typography", "digiblocks"),
                value: buttonTypography,
                onChange: (value) => setAttributes({ buttonTypography: value }),
                defaults: {
                  fontSize: { desktop: "", tablet: "", mobile: "" },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: "", tablet: "", mobile: "" },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
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
                tabs: stateTabList
              },
              (tab) => /* @__PURE__ */ wp.element.createElement(
                PanelColorSettings,
                {
                  title: tab.name === "normal" ? __("Normal Colors", "digiblocks") : __("Hover Colors", "digiblocks"),
                  initialOpen: true,
                  enableAlpha: true,
                  colorSettings: [
                    {
                      value: tab.name === "normal" ? textColor : textHoverColor,
                      onChange: (value) => setAttributes(
                        tab.name === "normal" ? { textColor: value } : { textHoverColor: value }
                      ),
                      label: __("Text Color", "digiblocks")
                    },
                    {
                      value: tab.name === "normal" ? backgroundColor : backgroundHoverColor,
                      onChange: (value) => setAttributes(
                        tab.name === "normal" ? { backgroundColor: value } : { backgroundHoverColor: value }
                      ),
                      label: __("Background Color", "digiblocks")
                    }
                  ]
                }
              )
            )
          ), size === "custom" && /* @__PURE__ */ wp.element.createElement(
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
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "margin",
              title: __("Margin", "digiblocks"),
              initialOpen: false
            },
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
                  if (value !== "default" && value !== "none" && (borderStyle === "default" || borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
                          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
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
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => /* @__PURE__ */ wp.element.createElement(
                PanelColorSettings,
                {
                  title: __("Border Colors", "digiblocks"),
                  enableAlpha: true,
                  colorSettings: [
                    {
                      value: tab.name === "normal" ? borderColor : borderHoverColor,
                      onChange: (value) => setAttributes(
                        tab.name === "normal" ? { borderColor: value } : { borderHoverColor: value }
                      ),
                      label: __("Border Color", "digiblocks")
                    }
                  ]
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
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
            )),
            /* @__PURE__ */ wp.element.createElement(
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
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
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
              initialOpen: true
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
      className: `digiblocks-button ${id} ${size} ${fill ? "is-fill" : ""} ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, renderButtonContent()));
  };
  var edit_default = ButtonEdit;

  // blocks/button/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var ButtonSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      text,
      url,
      opensInNewTab,
      rel,
      iconSource,
      customSvg,
      iconValue,
      iconPosition,
      size,
      fill,
      onlyIcon
    } = attributes;
    const blockClasses = [
      "digiblocks-button",
      id,
      size,
      fill ? "is-fill" : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const renderIcon = () => {
      if (iconSource === "library" && iconValue && iconValue.svg && iconValue.svg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            className: "digiblocks-button-icon",
            dangerouslySetInnerHTML: { __html: iconValue.svg }
          }
        );
      }
      if (iconSource === "custom" && customSvg && customSvg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            className: "digiblocks-button-icon",
            dangerouslySetInnerHTML: { __html: customSvg }
          }
        );
      }
      return null;
    };
    const buttonContent = /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, iconPosition === "left" && renderIcon(), !onlyIcon && /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        value: text
      }
    ), iconPosition === "right" && renderIcon());
    if (url) {
      return /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          ...useBlockProps2.save({
            className: blockClasses,
            id: anchor || null,
            href: url,
            target: opensInNewTab ? "_blank" : void 0,
            rel: rel ? "noopener noreferrer" : void 0
          })
        },
        buttonContent
      );
    }
    return /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        ...useBlockProps2.save({
          className: blockClasses,
          id: anchor || null
        })
      },
      buttonContent
    );
  };
  var save_default = ButtonSave;

  // blocks/button/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/button", {
    apiVersion: 2,
    title: __2("Button", "digiblocks"),
    parent: ["digiblocks/buttons"],
    icon: {
      src: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm0 9H5v-7h14v7z" }))
    },
    description: __2("A single button within the buttons block", "digiblocks"),
    supports: {
      inserter: false,
      // Can only be inserted within buttons block
      html: false,
      className: false,
      customClassName: false,
      anchor: false,
      reusable: false
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
      text: {
        type: "string",
        default: __2("Button", "digiblocks")
      },
      url: {
        type: "string",
        default: ""
      },
      opensInNewTab: {
        type: "boolean",
        default: false
      },
      rel: {
        type: "boolean",
        default: false
      },
      iconSource: {
        type: "string",
        default: "library"
      },
      customSvg: {
        type: "string",
        default: ""
      },
      iconValue: {
        type: "object",
        default: null
      },
      iconPosition: {
        type: "string",
        default: "left"
      },
      size: {
        type: "string",
        default: "medium"
      },
      fill: {
        type: "boolean",
        default: false
      },
      buttonTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: "", tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: "", tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: "", tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      textColor: {
        type: "string",
        default: "#ffffff"
      },
      textHoverColor: {
        type: "string",
        default: ""
      },
      backgroundColor: {
        type: "string",
        default: "#1e73be"
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      borderStyle: {
        type: "string",
        default: "default"
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
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderColor: {
        type: "string",
        default: ""
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
      padding: {
        type: "object",
        default: {
          desktop: { top: 12, right: 24, bottom: 12, left: 24, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      onlyIcon: {
        type: "boolean",
        default: false
      }
    },
    example: {
      attributes: {
        text: __2("Button", "digiblocks"),
        backgroundColor: "#1e73be",
        textColor: "#ffffff"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
