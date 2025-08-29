(() => {
  // blocks/buttons/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect } = window.wp.element;
  var { useBlockId, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveButtonGroup, CustomTabPanel, TabPanelBody } = digi.components;
  var ButtonsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      layout,
      horizontalAlign,
      verticalAlign,
      buttonSpacing,
      animation
    } = attributes;
    const getVal = (obj, device) => {
      if (!obj || typeof obj !== "object")
        return null;
      if (device === "mobile") {
        return obj.mobile !== "" && obj.mobile !== void 0 && obj.mobile !== null ? obj.mobile : obj.tablet !== "" && obj.tablet !== void 0 && obj.tablet !== null ? obj.tablet : obj.desktop;
      }
      if (device === "tablet") {
        return obj.tablet !== "" && obj.tablet !== void 0 && obj.tablet !== null ? obj.tablet : obj.desktop;
      }
      return obj.desktop;
    };
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useBlockId(id, clientId, setAttributes);
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
        name: "advanced",
        title: __("Advanced", "digiblocks"),
        icon: tabIcons.advancedIcon
      }
    ];
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      return `
            /* Buttons Block - ${id} */
            .${id} {
                display: flex;
                flex-wrap: wrap;
                ${layout === "vertical" ? "flex-direction: column;" : ""}
                align-items: ${verticalAlign[activeDevice]};
    			justify-content: ${horizontalAlign[activeDevice]};
                gap: ${getVal(buttonSpacing, activeDevice)}px;
                transition: all 0.3s ease;
            }

			/* Editor Style */
			.digiblocks-button-inserter {
				display: flex;
				position: absolute;
				bottom: 0;
				right: 0;
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
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl,
            {
              label: __("Layout", "digiblocks"),
              value: layout,
              onChange: (value) => setAttributes({ layout: value }),
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
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveButtonGroup,
            {
              label: __("Horizontal Align", "digiblocks"),
              value: horizontalAlign,
              onChange: (value) => setAttributes({ horizontalAlign: value }),
              options: [
                { label: __("Left", "digiblocks"), value: "flex-start" },
                { label: __("Center", "digiblocks"), value: "center" },
                { label: __("Right", "digiblocks"), value: "flex-end" },
                { label: __("Space", "digiblocks"), value: "space-between" }
              ]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveButtonGroup,
            {
              label: __("Vertical Align", "digiblocks"),
              value: verticalAlign,
              onChange: (value) => setAttributes({ verticalAlign: value }),
              options: [
                { label: __("Top", "digiblocks"), value: "flex-start" },
                { label: __("Middle", "digiblocks"), value: "center" },
                { label: __("Bottom", "digiblocks"), value: "flex-end" }
              ]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveControl,
            {
              label: __("Button Spacing", "digiblocks")
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                value: buttonSpacing[localActiveDevice],
                onChange: (value) => setAttributes({
                  buttonSpacing: {
                    ...buttonSpacing,
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
          )));
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
            )
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
      className: `digiblocks-buttons-block ${id} ${customClasses || ""}`,
      id: anchor || null
    });
    const ALLOWED_BLOCKS = ["digiblocks/button"];
    const BUTTON_TEMPLATE = [
      ["digiblocks/button", {}]
    ];
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
      allowedBlocks: ALLOWED_BLOCKS,
      template: BUTTON_TEMPLATE,
      renderAppender: false,
      orientation: layout === "vertical" ? "vertical" : "horizontal"
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps }, innerBlocksProps.children, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-button-inserter" }, /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        variant: "primary",
        isSmall: true,
        icon: "plus",
        onClick: () => {
          const buttonBlock = window.wp.blocks.createBlock("digiblocks/button");
          window.wp.data.dispatch("core/block-editor").insertBlock(buttonBlock, void 0, clientId);
        }
      },
      __("Add", "digiblocks")
    ))));
  };
  var edit_default = ButtonsEdit;

  // blocks/buttons/save.js
  var { useBlockProps: useBlockProps2, useInnerBlocksProps: useInnerBlocksProps2 } = window.wp.blockEditor;
  var ButtonsSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      animation
    } = attributes;
    const blockClasses = [
      "digiblocks-buttons-block",
      id,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null
    });
    const innerBlocksProps = useInnerBlocksProps2.save(blockProps);
    return /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps });
  };
  var save_default = ButtonsSave;

  // blocks/buttons/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/buttons", {
    apiVersion: 2,
    title: digiBlocksData.blocks["buttons"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["buttons"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["buttons"].description,
    keywords: [__2("buttons", "digiblocks"), __2("button group", "digiblocks"), __2("link", "digiblocks")],
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
      layout: {
        type: "string",
        default: "horizontal"
      },
      horizontalAlign: {
        type: "object",
        default: {
          desktop: "center",
          tablet: "center",
          mobile: "center"
        }
      },
      verticalAlign: {
        type: "object",
        default: {
          desktop: "flex-start",
          tablet: "flex-start",
          mobile: "flex-start"
        }
      },
      buttonSpacing: {
        type: "object",
        default: {
          desktop: 10,
          tablet: "",
          mobile: ""
        }
      },
      animation: {
        type: "string",
        default: "none"
      }
    },
    example: {
      innerBlocks: [
        {
          name: "digiblocks/button",
          attributes: {
            text: __2("Call to Action", "digiblocks")
          }
        },
        {
          name: "digiblocks/button",
          attributes: {
            text: __2("Learn More", "digiblocks")
          }
        }
      ]
    },
    edit: edit_default,
    save: save_default
  });
})();
