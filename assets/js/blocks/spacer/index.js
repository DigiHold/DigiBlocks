(() => {
  // blocks/spacer/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls
  } = window.wp.blockEditor;
  var {
    ToggleControl,
    RangeControl
  } = window.wp.components;
  var { useState, useEffect } = window.wp.element;
  var { useBlockId } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, CustomTabPanel } = digi.components;
  var SpacerEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      height
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
      const currentHeight = height[activeDevice] || (activeDevice === "tablet" ? 60 : activeDevice === "mobile" ? 40 : 80);
      return `
            /* Spacer Block Styles */
            .${id} {
                height: ${currentHeight}px;
                position: relative;
            }
            
            /* Editor-only styles */
            .editor-styles-wrapper .${id} .digiblocks-spacer-icon-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #e4e4e4;
                height: 100%;
                border-radius: 4px;
                pointer-events: none;
            }
            
            .editor-styles-wrapper .${id} .digiblocks-spacer-icon-wrapper svg {
                width: 1em;
				min-width: 1.5rem;
                height: 100%;
                fill: #949494;
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
            ResponsiveControl,
            {
              label: __("Height", "digiblocks")
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
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
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
          ))), /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
          )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __("Separate multiple classes with spaces.", "digiblocks")))));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps({
      className: `digiblocks-spacer ${id} ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-spacer-icon-wrapper" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z" })))));
  };
  var edit_default = SpacerEdit;

  // blocks/spacer/save.js
  var { useBlockProps: useBlockProps2 } = window.wp.blockEditor;
  var SpacerSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      height
    } = attributes;
    const blockClasses = [
      "digiblocks-spacer",
      id,
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps });
  };
  var save_default = SpacerSave;

  // blocks/spacer/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
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
    keywords: [__2("spacer", "digiblocks"), __2("gap", "digiblocks"), __2("spacing", "digiblocks")],
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
    edit: edit_default,
    save: save_default
  });
})();
