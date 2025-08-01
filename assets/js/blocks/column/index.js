(() => {
  // blocks/column/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck,
    ButtonBlockAppender
  } = window.wp.blockEditor;
  var {
    ToggleControl,
    SelectControl,
    RangeControl,
    Button
  } = window.wp.components;
  var { useState, useEffect } = window.wp.element;
  var { useSelect, useDispatch } = window.wp.data;
  var { useBlockId, getDimensionCSS } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, GradientControl } = digi.components;
  var ColumnEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      visibility,
      width,
      order,
      hoverEffect,
      backgroundColor,
      backgroundGradient,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      backgroundSize,
      backgroundOverlay,
      backgroundOverlayOpacity,
      backgroundOverlayBlendMode,
      padding,
      margin,
      borderStyle,
      borderWidth,
      borderColor,
      borderRadius,
      boxShadow,
      boxShadowHover
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const [isInternalWidthUpdate, setIsInternalWidthUpdate] = useState(false);
    const { parentClientId, hasChildBlocks } = useSelect(
      (select) => {
        const { getBlockParents, getBlockCount } = select("core/block-editor");
        const parents = getBlockParents(clientId);
        const parentId = parents.length > 0 ? parents[0] : null;
        return {
          parentClientId: parentId,
          hasChildBlocks: getBlockCount(clientId) > 0
        };
      },
      [clientId]
    );
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const handleWidthChange = (newWidth, device) => {
      setAttributes({
        width: {
          ...width,
          [device]: Math.round(newWidth * 100) / 100
          // Round to 2 decimal places
        }
      });
    };
    const generateGradientCSS = () => {
      if (!backgroundGradient.enable || !backgroundGradient.colors.length) {
        return "";
      }
      const colorStops = backgroundGradient.colors.map((stop) => `${stop.color} ${stop.position}%`).join(", ");
      if (backgroundGradient.type === "radial") {
        return `background-image: radial-gradient(circle at ${backgroundGradient.position}, ${colorStops});`;
      } else {
        return `background-image: linear-gradient(${backgroundGradient.angle}deg, ${colorStops});`;
      }
    };
    const bgPositionOptions = [
      { label: __("Top Left", "digiblocks"), value: "top left" },
      { label: __("Top Center", "digiblocks"), value: "top center" },
      { label: __("Top Right", "digiblocks"), value: "top right" },
      { label: __("Center Left", "digiblocks"), value: "center left" },
      { label: __("Center Center", "digiblocks"), value: "center center" },
      { label: __("Center Right", "digiblocks"), value: "center right" },
      { label: __("Bottom Left", "digiblocks"), value: "bottom left" },
      { label: __("Bottom Center", "digiblocks"), value: "bottom center" },
      { label: __("Bottom Right", "digiblocks"), value: "bottom right" }
    ];
    const bgRepeatOptions = [
      { label: __("No Repeat", "digiblocks"), value: "no-repeat" },
      { label: __("Repeat", "digiblocks"), value: "repeat" },
      { label: __("Repeat X", "digiblocks"), value: "repeat-x" },
      { label: __("Repeat Y", "digiblocks"), value: "repeat-y" }
    ];
    const bgSizeOptions = [
      { label: __("Cover", "digiblocks"), value: "cover" },
      { label: __("Contain", "digiblocks"), value: "contain" },
      { label: __("Auto", "digiblocks"), value: "auto" },
      { label: __("100%", "digiblocks"), value: "100%" }
    ];
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Double", "digiblocks"), value: "double" }
    ];
    const blendModeOptions = [
      { label: __("Normal", "digiblocks"), value: "normal" },
      { label: __("Multiply", "digiblocks"), value: "multiply" },
      { label: __("Screen", "digiblocks"), value: "screen" },
      { label: __("Overlay", "digiblocks"), value: "overlay" },
      { label: __("Darken", "digiblocks"), value: "darken" },
      { label: __("Lighten", "digiblocks"), value: "lighten" },
      { label: __("Color Dodge", "digiblocks"), value: "color-dodge" },
      { label: __("Color Burn", "digiblocks"), value: "color-burn" },
      { label: __("Hard Light", "digiblocks"), value: "hard-light" },
      { label: __("Soft Light", "digiblocks"), value: "soft-light" },
      { label: __("Difference", "digiblocks"), value: "difference" },
      { label: __("Exclusion", "digiblocks"), value: "exclusion" },
      { label: __("Hue", "digiblocks"), value: "hue" },
      { label: __("Saturation", "digiblocks"), value: "saturation" },
      { label: __("Color", "digiblocks"), value: "color" },
      { label: __("Luminosity", "digiblocks"), value: "luminosity" }
    ];
    const hoverEffectOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Lift", "digiblocks"), value: "lift" },
      { label: __("Scale", "digiblocks"), value: "scale" },
      { label: __("Glow", "digiblocks"), value: "glow" }
    ];
    const tabList = [
      {
        name: "options",
        title: __("Layout", "digiblocks"),
        icon: tabIcons.optionsIcon
      },
      {
        name: "style",
        title: __("Style", "digiblocks"),
        icon: tabIcons.styleIcon
      },
      {
        name: "background",
        title: __("Background", "digiblocks"),
        icon: tabIcons.backgroundIcon
      }
    ];
    const generateColumnCSS = () => {
      const activeDevice = localActiveDevice;
      const getColumnPadding = (padding2, device) => {
        const hasDeviceValues = (dev) => {
          return padding2 && padding2[dev] && (padding2[dev].top !== void 0 && padding2[dev].top !== "" || padding2[dev].right !== void 0 && padding2[dev].right !== "" || padding2[dev].bottom !== void 0 && padding2[dev].bottom !== "" || padding2[dev].left !== void 0 && padding2[dev].left !== "");
        };
        let values;
        if (hasDeviceValues(device)) {
          values = padding2[device];
        } else if (device === "tablet" && hasDeviceValues("desktop")) {
          values = padding2["desktop"];
        } else if (device === "mobile") {
          if (hasDeviceValues("tablet")) {
            values = padding2["tablet"];
          } else if (hasDeviceValues("desktop")) {
            values = padding2["desktop"];
          } else {
            return "";
          }
        } else {
          return "";
        }
        const ensureMinPadding = (value, unit2) => {
          if (value === void 0 || value === "") {
            return unit2 === "px" ? "10px" : "0" + unit2;
          }
          if (unit2 === "px" && parseFloat(value) < 10) {
            return "10px";
          }
          return value + unit2;
        };
        const unit = values.unit || "px";
        const top = ensureMinPadding(values.top, unit);
        const right = ensureMinPadding(values.right, unit);
        const bottom = ensureMinPadding(values.bottom, unit);
        const left = ensureMinPadding(values.left, unit);
        return `padding: ${top} ${right} ${bottom} ${left} !important;`;
      };
      const paddingCSS = getColumnPadding(padding, activeDevice);
      const tabletPaddingCSS = getColumnPadding(padding, "tablet");
      const mobilePaddingCSS = getColumnPadding(padding, "mobile");
      let backgroundStyles = "";
      if (backgroundColor) {
        backgroundStyles += `background-color: ${backgroundColor};`;
      }
      const gradientCSS = generateGradientCSS();
      if (gradientCSS) {
        backgroundStyles += gradientCSS;
      }
      if (backgroundImage && backgroundImage.url) {
        const imageCSS = `url(${backgroundImage.url})`;
        if (gradientCSS) {
          backgroundStyles = backgroundStyles.replace(
            /background-image: ([^;]+);/,
            `background-image: ${imageCSS}, $1;`
          );
        } else {
          backgroundStyles += `background-image: ${imageCSS};`;
        }
        backgroundStyles += `background-position: ${backgroundPosition};
            background-repeat: ${backgroundRepeat};
            background-size: ${backgroundSize};`;
      }
      let overlayCSS = "";
      if (backgroundOverlay) {
        overlayCSS = `
            .${id}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${backgroundOverlay};
                opacity: ${backgroundOverlayOpacity};
                mix-blend-mode: ${backgroundOverlayBlendMode};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${id} > * {
                position: relative;
                z-index: 2;
            }`;
      }
      let boxShadowCSS = "";
      if (boxShadow && boxShadow.enable) {
        boxShadowCSS = `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let hoverCSS = "";
      let boxShadowHoverCSS = "";
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
            /* Column Block - ${id} */
            .${id} {
                position: relative;
                width: ${width[activeDevice]}%;
                ${paddingCSS}
				${getDimensionCSS(margin, "margin", activeDevice)}
                display: flex;
                flex-direction: column;
                ${order[activeDevice] !== 0 ? `order: ${order[activeDevice]};` : ""}
                ${backgroundStyles}
                ${borderStyle !== "none" ? `
					border-style: ${borderStyle}!important;
					${getDimensionCSS(borderWidth, "border-width", activeDevice, true)}
					border-color: ${borderColor}!important;` : ""}
                ${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
				${boxShadowCSS}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${id}:hover {
                ${hoverCSS}
            }

            .${id} > div {
                width: 100%;
            }
            
            ${overlayCSS}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${id} {
                    width: ${width["tablet"]}%;
					${tabletPaddingCSS}
					${getDimensionCSS(margin, "margin", "tablet")}
                    ${order["tablet"] !== 0 ? `order: ${order["tablet"]};` : ""}
					${getDimensionCSS(borderRadius, "border-radius", "tablet")}
                    ${borderStyle !== "none" ? `${getDimensionCSS(borderWidth, "border-width", "tablet", true)}` : ""}
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    width: ${width["mobile"]}%;
					${mobilePaddingCSS}
					${getDimensionCSS(margin, "margin", "mobile")}
                    ${order["mobile"] !== 0 ? `order: ${order["mobile"]};` : ""}
					${getDimensionCSS(borderRadius, "border-radius", "mobile")}
                    ${borderStyle !== "none" ? `${getDimensionCSS(borderWidth, "border-width", "mobile", true)}` : ""}
                }
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
    const blockProps = useBlockProps({
      className: `digiblocks-column ${id}`
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
      templateLock: false,
      renderAppender: hasChildBlocks ? void 0 : () => /* @__PURE__ */ wp.element.createElement(ButtonBlockAppender, { rootClientId: clientId })
    });
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "column",
              title: __("Column", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Width (%)", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: width[localActiveDevice],
                  onChange: (value) => handleWidthChange(value, localActiveDevice),
                  min: 10,
                  max: 100,
                  step: 0.01,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Order", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: order[localActiveDevice],
                  onChange: (value) => setAttributes({
                    order: {
                      ...order,
                      [localActiveDevice]: value
                    }
                  }),
                  min: -10,
                  max: 10,
                  step: 1,
                  allowReset: true,
                  resetFallbackValue: 0,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "layout",
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
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "layout",
              name: "effect",
              title: __("Hover Effect", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Hover Effect", "digiblocks"),
                value: hoverEffect || "none",
                options: hoverEffectOptions,
                onChange: (value) => setAttributes({ hoverEffect: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "layout",
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
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "borders",
              title: __("Borders & Radius", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: borderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ borderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
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
              PanelColorSettings,
              {
                title: "",
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
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
                    { label: "%", value: "%" },
                    { label: "em", value: "em" }
                  ]
                }
              )
            ),
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
        case "background":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "background",
              name: "background",
              title: __("Background", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Background Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundColor,
                    onChange: (value) => setAttributes({ backgroundColor: value }),
                    label: __("Background Color", "digiblocks")
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-control" }, /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__label" }, __("Background Image", "digiblocks")), /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: (media) => {
                  setAttributes({
                    backgroundImage: {
                      url: media.url,
                      id: media.id,
                      alt: media.alt || "",
                      size: media.sizes?.full?.url ? "full" : ""
                    }
                  });
                },
                allowedTypes: ["image"],
                value: backgroundImage?.id,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-upload-wrapper" }, backgroundImage?.url ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-preview" }, /* @__PURE__ */ wp.element.createElement("img", { src: backgroundImage.url, alt: backgroundImage.alt || "" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-controls" }, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isPrimary: true,
                    onClick: open
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-edit" })
                ), /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isDestructive: true,
                    onClick: () => setAttributes({ backgroundImage: { url: "", id: 0, alt: "", size: "" } })
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-trash" })
                ))) : /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    className: "digiblocks-media-upload-button",
                    isPrimary: true,
                    onClick: open
                  },
                  __("Select Image", "digiblocks")
                ))
              }
            ))),
            backgroundImage?.url && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Position", "digiblocks"),
                value: backgroundPosition,
                options: bgPositionOptions,
                onChange: (value) => setAttributes({ backgroundPosition: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Repeat", "digiblocks"),
                value: backgroundRepeat,
                options: bgRepeatOptions,
                onChange: (value) => setAttributes({ backgroundRepeat: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Size", "digiblocks"),
                value: backgroundSize,
                options: bgSizeOptions,
                onChange: (value) => setAttributes({ backgroundSize: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "background",
              name: "gradient",
              title: __("Background Gradient", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              GradientControl,
              {
                value: backgroundGradient,
                onChange: (value) => setAttributes({ backgroundGradient: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "background",
              name: "overlay",
              title: __("Background Overlay", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Overlay Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundOverlay,
                    onChange: (value) => setAttributes({ backgroundOverlay: value }),
                    label: __("Overlay Color", "digiblocks")
                  }
                ]
              }
            ),
            backgroundOverlay && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Overlay Opacity", "digiblocks"),
                value: backgroundOverlayOpacity,
                onChange: (value) => setAttributes({ backgroundOverlayOpacity: value }),
                min: 0,
                max: 1,
                step: 0.01,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Blend Mode", "digiblocks"),
                value: backgroundOverlayBlendMode,
                options: blendModeOptions,
                onChange: (value) => setAttributes({ backgroundOverlayBlendMode: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))
          ));
        default:
          return null;
      }
    };
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateColumnCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps }));
  };
  var edit_default = ColumnEdit;

  // blocks/column/save.js
  var { __: __2 } = window.wp.i18n;
  var { useBlockProps: useBlockProps2, useInnerBlocksProps: useInnerBlocksProps2 } = window.wp.blockEditor;
  var ColumnSave = ({ attributes }) => {
    const {
      id,
      backgroundOverlay
    } = attributes;
    const classNames = `digiblocks-column ${id}`;
    const blockProps = useBlockProps2.save({
      className: classNames
    });
    const innerBlocksProps = useInnerBlocksProps2.save(blockProps);
    return /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps });
  };
  var save_default = ColumnSave;

  // blocks/column/index.js
  var { __: __3 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/column", {
    apiVersion: 2,
    title: __3("Column", "digiblocks"),
    parent: ["digiblocks/container"],
    icon: {
      src: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "24", height: "24" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M448 64l0 384 128 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l128 0zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" }))
    },
    description: __3("Flexible column component to use within Container blocks", "digiblocks"),
    supports: {
      inserter: false,
      // Can only be inserted within container block
      reusable: false,
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
      visibility: {
        type: "object",
        default: {
          desktop: false,
          tablet: false,
          mobile: false
        }
      },
      width: {
        type: "object",
        default: {
          desktop: 100,
          tablet: 100,
          mobile: 100
        }
      },
      order: {
        type: "object",
        default: {
          desktop: 0,
          tablet: 0,
          mobile: 0
        }
      },
      hoverEffect: {
        type: "string",
        default: "none"
      },
      backgroundColor: {
        type: "string",
        default: ""
      },
      backgroundGradient: {
        type: "object",
        default: {
          enable: false,
          type: "linear",
          angle: 90,
          position: "center center",
          colors: [
            { color: "#667eea", position: 0 },
            { color: "#764ba2", position: 100 }
          ]
        }
      },
      backgroundImage: {
        type: "object",
        default: {
          url: "",
          id: 0,
          alt: "",
          size: ""
        }
      },
      backgroundPosition: {
        type: "string",
        default: "center center"
      },
      backgroundRepeat: {
        type: "string",
        default: "no-repeat"
      },
      backgroundSize: {
        type: "string",
        default: "cover"
      },
      backgroundOverlay: {
        type: "string",
        default: ""
      },
      backgroundOverlayOpacity: {
        type: "number",
        default: 0.7
      },
      backgroundOverlayBlendMode: {
        type: "string",
        default: "normal"
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
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
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
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
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
    edit: edit_default,
    save: save_default
  });
})();
