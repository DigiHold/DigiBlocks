(() => {
  // blocks/text/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings
  } = window.wp.blockEditor;
  var {
    SelectControl,
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveButtonGroup } = digi.components;
  var TextEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      content,
      align,
      htmlTag,
      maxWidth,
      textColor,
      textHoverColor,
      backgroundColor,
      backgroundHoverColor,
      typography,
      padding,
      margin,
      animation,
      boxShadow,
      boxShadowHover,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      borderHoverColor,
      backgroundGradient,
      textShadow,
      hoverEffect
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
    const htmlTagOptions = [
      { label: __("Paragraph", "digiblocks"), value: "p" },
      { label: __("Span", "digiblocks"), value: "span" },
      { label: __("Div", "digiblocks"), value: "div" }
    ];
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
      { label: __("Glow", "digiblocks"), value: "glow" },
      { label: __("Bounce", "digiblocks"), value: "bounce" }
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
    const getMaxValue = (unit) => {
      switch (unit) {
        case "%":
          return 100;
        case "em":
        case "rem":
          return 50;
        case "px":
        default:
          return 1500;
      }
    };
    const getStepValue = (unit) => {
      switch (unit) {
        case "%":
          return 1;
        case "em":
        case "rem":
          return 0.1;
        case "px":
        default:
          return 1;
      }
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      let alignCSS = "";
      if (align[activeDevice] === "left") {
        alignCSS = "text-align: left;";
      } else if (align[activeDevice] === "center") {
        alignCSS = "text-align: center;";
      } else if (align[activeDevice] === "right") {
        alignCSS = "text-align: right;";
      } else if (align[activeDevice] === "justify") {
        alignCSS = "text-align: justify;";
      }
      let borderRadiusCSS = getDimensionCSS(borderRadius, "border-radius", activeDevice);
      let borderCSS = "";
      if (borderStyle && borderStyle !== "default" && borderStyle !== "none") {
        borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
                ${getDimensionCSS(borderWidth, "border-width", activeDevice)}
            `;
      } else {
        borderCSS = "border-style: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let textShadowCSS = "";
      if (textShadow && textShadow.enable) {
        textShadowCSS = `text-shadow: ${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color};`;
      }
      const paddingCSS = `${getDimensionCSS(padding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice)}`;
      let maxWidthCSS = "";
      if (maxWidth) {
        maxWidthCSS = `max-width: ${maxWidth[activeDevice].value}${maxWidth[activeDevice].unit};margin-left: auto;margin-right: auto;`;
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
      let backgroundCSS = "";
      if (backgroundGradient && backgroundGradient !== "none") {
        backgroundCSS = `background: ${backgroundGradient};`;
      } else if (backgroundColor) {
        backgroundCSS = `background-color: ${backgroundColor};`;
      }
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      if (hoverEffect === "lift") {
        hoverCSS += "transform: translateY(-5px);";
      } else if (hoverEffect === "scale") {
        hoverCSS += "transform: scale(1.02);";
      } else if (hoverEffect === "glow") {
        hoverCSS += "filter: brightness(1.1);";
      } else if (hoverEffect === "bounce") {
        hoverCSS += "transform: translateY(-3px); transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);";
      }
      return `
            /* Main text block styles */
            .${id} {
                transition: all 0.3s ease;
            }

            .${id} ${htmlTag} {
                ${alignCSS}
                color: ${textColor || "inherit"};
                ${backgroundCSS}
                ${boxShadowCSS}
                ${textShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                ${borderRadiusCSS}
                ${maxWidthCSS}
                ${typographyCSS}
                transition: all 0.3s ease;
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            
            /* Hover effects */
            .${id}:hover ${htmlTag} {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
                ${hoverCSS}
            }

            /* Visibility Controls */
            ${visibility.desktop ? `
                @media (min-width: 992px) {
                    .${id} ${htmlTag} {
                        opacity: 0.5 !important;
                    }
                }
            ` : ""}

            ${visibility.tablet ? `
                @media (min-width: 768px) and (max-width: 991px) {
                    .${id} ${htmlTag} {
                        opacity: 0.5 !important;
                    }
                }
            ` : ""}

            ${visibility.mobile ? `
                @media (max-width: 767px) {
                    .${id} ${htmlTag} {
                        opacity: 0.5 !important;
                    }
                }
            ` : ""}
        `;
    };
    const renderColorTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Color Settings",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: textColor,
                onChange: (value) => setAttributes({
                  textColor: value
                }),
                label: __(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({
                  backgroundColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Hover Color Settings",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: textHoverColor,
                onChange: (value) => setAttributes({
                  textHoverColor: value
                }),
                label: __(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundHoverColor,
                onChange: (value) => setAttributes({
                  backgroundHoverColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              },
              {
                value: borderHoverColor,
                onChange: (value) => setAttributes({
                  borderHoverColor: value
                }),
                label: __(
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
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            SelectControl,
            {
              label: __("HTML Tag", "digiblocks"),
              value: htmlTag,
              options: htmlTagOptions,
              onChange: (value) => setAttributes({ htmlTag: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveButtonGroup,
            {
              label: __("Text Alignment", "digiblocks"),
              value: align,
              onChange: (value) => setAttributes({ align: value }),
              options: [
                { label: __("Left", "digiblocks"), value: "left" },
                { label: __("Center", "digiblocks"), value: "center" },
                { label: __("Right", "digiblocks"), value: "right" },
                { label: __("Justify", "digiblocks"), value: "justify" }
              ]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveRangeControl,
            {
              label: __("Max Width", "digiblocks"),
              value: maxWidth,
              onChange: (value) => setAttributes({ maxWidth: value }),
              units: [
                { label: "px", value: "px" },
                { label: "%", value: "%" },
                { label: "em", value: "em" },
                { label: "rem", value: "rem" }
              ],
              defaultUnit: "px",
              min: 0,
              max: getMaxValue(maxWidth?.[localActiveDevice]?.unit),
              step: getStepValue(maxWidth?.[localActiveDevice]?.unit)
            }
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
              ToggleGroupControl,
              {
                label: __("State", "digiblocks"),
                value: "normal",
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "normal",
                  label: __("Normal", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "hover",
                  label: __("Hover", "digiblocks")
                }
              )
            ),
            renderColorTabContent("normal")
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
                label: __(
                  "Typography",
                  "digiblocks"
                ),
                value: typography,
                onChange: (value) => setAttributes({
                  typography: value
                }),
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
              name: "border",
              title: __("Border", "digiblocks"),
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
                  setAttributes({
                    borderStyle: value
                  });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
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
                    label: __(
                      "Border Color",
                      "digiblocks"
                    )
                  }
                ]
              }
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
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __(
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
            TabPanelBody,
            {
              tab: "style",
              name: "shadow",
              title: __("Shadows", "digiblocks"),
              initialOpen: false
            },
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
                label: __(
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
      className: `digiblocks-text ${id} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement(
      RichText,
      {
        tagName: htmlTag,
        value: content,
        onChange: (value) => setAttributes({ content: value }),
        placeholder: __("Start writing your content", "digiblocks"),
        allowedFormats: ["core/bold", "core/italic", "core/link", "core/strikethrough", "core/underline", "core/text-color", "core/code", "core/superscript", "core/subscript"]
      }
    )));
  };
  var edit_default = TextEdit;

  // blocks/text/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var TextSave = ({ attributes }) => {
    const {
      id,
      htmlTag,
      content,
      animation,
      hoverEffect,
      anchor,
      customClasses
    } = attributes;
    const blockClasses = [
      "digiblocks-text",
      id,
      animation !== "none" ? `animate-${animation}` : "",
      hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
      customClasses || ""
      // Add custom classes if they exist
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null
    });
    return /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        ...blockProps,
        tagName: htmlTag,
        value: content
      }
    );
  };
  var save_default = TextSave;

  // blocks/text/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/text", {
    apiVersion: 2,
    title: digiBlocksData.blocks["text"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["text"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["text"].description,
    keywords: [__2("text", "digiblocks"), __2("paragraph", "digiblocks"), __2("content", "digiblocks")],
    // Disable default controls and settings panels
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
      content: {
        type: "string",
        default: __2("This is a powerful text block with advanced styling options.", "digiblocks")
      },
      htmlTag: {
        type: "string",
        default: "p"
      },
      align: {
        type: "object",
        default: {
          desktop: "left",
          tablet: "left",
          mobile: "left"
        }
      },
      maxWidth: {
        type: "object",
        default: {
          desktop: { value: "", unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      textColor: {
        type: "string",
        default: ""
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
      backgroundGradient: {
        type: "string",
        default: "none"
      },
      typography: {
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
      textShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.3)",
          horizontal: 0,
          vertical: 0,
          blur: 0
        }
      },
      padding: {
        type: "object",
        default: {
          desktop: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            unit: "px"
          },
          tablet: {
            top: "",
            right: "",
            bottom: "",
            left: "",
            unit: "px"
          },
          mobile: {
            top: "",
            right: "",
            bottom: "",
            left: "",
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
            bottom: 16,
            left: 0,
            unit: "px"
          },
          tablet: {
            top: "",
            right: "",
            bottom: "",
            left: "",
            unit: "px"
          },
          mobile: {
            top: "",
            right: "",
            bottom: "",
            left: "",
            unit: "px"
          }
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
          desktop: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            unit: "px"
          },
          tablet: {
            top: "",
            right: "",
            bottom: "",
            left: "",
            unit: "px"
          },
          mobile: {
            top: "",
            right: "",
            bottom: "",
            left: "",
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
            top: "",
            right: "",
            bottom: "",
            left: "",
            unit: "px"
          },
          mobile: {
            top: "",
            right: "",
            bottom: "",
            left: "",
            unit: "px"
          }
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
        content: __2("This is a powerful text block with advanced styling options. You can customize typography, colors, spacing, borders, shadows and add animations.", "digiblocks"),
        textColor: "#2563eb",
        htmlTag: "h2"
      },
      viewportWidth: 400
    },
    edit: edit_default,
    save: save_default
  });
})();
