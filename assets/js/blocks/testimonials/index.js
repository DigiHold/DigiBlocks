(() => {
  // blocks/testimonials/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck
  } = window.wp.blockEditor;
  var {
    BaseControl,
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    TabPanel,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var TestimonialsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      testimonials,
      columns,
      nameColor,
      nameHoverColor,
      positionColor,
      contentColor,
      backgroundColor,
      backgroundHoverColor,
      quoteIconColor,
      ratingColor,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      boxShadow,
      boxShadowHover,
      padding,
      margin,
      contentTypography,
      headingTypography,
      textTypography,
      imageSize,
      quoteIconSize,
      showRating,
      showQuoteIcon,
      animation,
      align,
      itemSpacing
    } = attributes;
    useBlockId(id, clientId, setAttributes);
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
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect(() => {
      if (testimonials && testimonials.length > 0) {
        const updatedTestimonials = testimonials.map((item, index) => {
          if (!item.id) {
            return { ...item, id: `testimonial-${clientId.substr(0, 8)}-${index}` };
          }
          return item;
        });
        if (JSON.stringify(updatedTestimonials) !== JSON.stringify(testimonials)) {
          setAttributes({ testimonials: updatedTestimonials });
        }
      }
    }, [clientId, testimonials, setAttributes]);
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
    const addNewTestimonial = () => {
      const newTestimonialIndex = testimonials.length;
      const newTestimonial = {
        id: `testimonial-${clientId.substr(0, 8)}-${newTestimonialIndex}`,
        name: __("New Name", "digiblocks"),
        position: __("Position", "digiblocks"),
        company: __("Company", "digiblocks"),
        content: __("Add your testimonial content here...", "digiblocks"),
        imageUrl: "",
        imageId: "",
        rating: 5
      };
      setAttributes({
        testimonials: [...testimonials, newTestimonial]
      });
    };
    const removeTestimonial = (index) => {
      const newTestimonials = [...testimonials];
      newTestimonials.splice(index, 1);
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const duplicateTestimonial = (index) => {
      const itemToDuplicate = testimonials[index];
      const timestamp = Date.now();
      const newTestimonial = {
        ...itemToDuplicate,
        id: `testimonial-${clientId.substr(0, 8)}-${timestamp}`
      };
      const newTestimonials = [...testimonials];
      newTestimonials.splice(index + 1, 0, newTestimonial);
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const moveTestimonialUp = (index) => {
      if (index === 0)
        return;
      const newTestimonials = [...testimonials];
      const item = newTestimonials[index];
      newTestimonials.splice(index, 1);
      newTestimonials.splice(index - 1, 0, item);
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const moveTestimonialDown = (index) => {
      if (index === testimonials.length - 1)
        return;
      const newTestimonials = [...testimonials];
      const item = newTestimonials[index];
      newTestimonials.splice(index, 1);
      newTestimonials.splice(index + 1, 0, item);
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const updateTestimonialName = (value, index) => {
      const newTestimonials = [...testimonials];
      newTestimonials[index].name = value;
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const updateTestimonialPosition = (value, index) => {
      const newTestimonials = [...testimonials];
      newTestimonials[index].position = value;
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const updateTestimonialCompany = (value, index) => {
      const newTestimonials = [...testimonials];
      newTestimonials[index].company = value;
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const updateTestimonialContent = (value, index) => {
      const newTestimonials = [...testimonials];
      newTestimonials[index].content = value;
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const updateTestimonialRating = (value, index) => {
      const newTestimonials = [...testimonials];
      newTestimonials[index].rating = value;
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const updateTestimonialImage = (media, index) => {
      const newTestimonials = [...testimonials];
      newTestimonials[index].imageUrl = media.url;
      newTestimonials[index].imageId = media.id;
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const generateStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          /* @__PURE__ */ wp.element.createElement(
            "span",
            {
              key: i,
              className: `digiblocks-rating-star ${i <= rating ? "filled" : ""}`,
              style: { color: i <= rating ? ratingColor : "#e0e0e0" }
            },
            /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" }))
          )
        );
      }
      return stars;
    };
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
        const contentFontSize = getVal(contentTypography.fontSize, activeDevice);
        if (contentFontSize) {
          contentTypographyCSS += `font-size: ${contentFontSize}${contentTypography.fontSizeUnit || "px"};`;
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
        const contentLineHeight = getVal(contentTypography.lineHeight, activeDevice);
        if (contentLineHeight) {
          contentTypographyCSS += `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || "em"};`;
        }
        const contentLetterSpacing = getVal(contentTypography.letterSpacing, activeDevice);
        if (contentLetterSpacing || contentLetterSpacing === 0) {
          contentTypographyCSS += `letter-spacing: ${contentLetterSpacing}${contentTypography.letterSpacingUnit || "px"};`;
        }
      }
      let headingTypographyCSS = "";
      if (headingTypography) {
        if (headingTypography.fontFamily) {
          headingTypographyCSS += `font-family: ${headingTypography.fontFamily};`;
        }
        const headingFontSize = getVal(headingTypography.fontSize, activeDevice);
        if (headingFontSize) {
          headingTypographyCSS += `font-size: ${headingFontSize}${headingTypography.fontSizeUnit || "px"};`;
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
        const headingLineHeight = getVal(headingTypography.lineHeight, activeDevice);
        if (headingLineHeight) {
          headingTypographyCSS += `line-height: ${headingLineHeight}${headingTypography.lineHeightUnit || "em"};`;
        }
        const headingLetterSpacing = getVal(headingTypography.letterSpacing, activeDevice);
        if (headingLetterSpacing || headingLetterSpacing === 0) {
          headingTypographyCSS += `letter-spacing: ${headingLetterSpacing}${headingTypography.letterSpacingUnit || "px"};`;
        }
      }
      let textTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        const textFontSize = getVal(textTypography.fontSize, activeDevice);
        if (textFontSize) {
          textTypographyCSS += `font-size: ${textFontSize}${textTypography.fontSizeUnit || "px"};`;
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
        const textLineHeight = getVal(textTypography.lineHeight, activeDevice);
        if (textLineHeight) {
          textTypographyCSS += `line-height: ${textLineHeight}${textTypography.lineHeightUnit || "em"};`;
        }
        const textLetterSpacing = getVal(textTypography.letterSpacing, activeDevice);
        if (textLetterSpacing || textLetterSpacing === 0) {
          textTypographyCSS += `letter-spacing: ${textLetterSpacing}${textTypography.letterSpacingUnit || "px"};`;
        }
      }
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      const columnsDevice = columns[activeDevice] || 2;
      const spacingDevice = getVal(itemSpacing, activeDevice) || 30;
      return `
            /* Testimonials Block - ${id} */
            .${id} {
                position: relative;
                width: 100%;
            }

			.${id} .digiblocks-testimonials-grid {
				display: grid;
				grid-template-columns: repeat(${columnsDevice}, 1fr);
				gap: ${spacingDevice}px;
			}
            
            .${id} .digiblocks-testimonial-content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                ${boxShadowCSS}
                background-color: ${backgroundColor || "transparent"};
                transition: all 0.3s ease;
                position: relative;
				text-align: ${align};
            }
            
            .${id} .digiblocks-testimonial-content:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${hoverCSS}
            }
            
            ${showQuoteIcon ? `
            .${id} .digiblocks-testimonial-quote-icon {
                position: absolute;
                top: 6px;
                left: 10px;
                color: ${quoteIconColor};
                opacity: 0.3;
                line-height: 1;
            }

            .${id} .digiblocks-testimonial-quote-icon svg {
                width: ${getVal(quoteIconSize, activeDevice)}px;
				height: ${getVal(quoteIconSize, activeDevice)}px;
            }
            ` : ""}
            
            .${id} .digiblocks-testimonial-text {
                ${contentTypographyCSS}
                color: ${contentColor};
                margin: 0;
				position: relative;
				z-index: 1;
            }
            
            .${id} .digiblocks-testimonial-author {
                display: flex;
                align-items: center;
                gap: 15px;
				justify-content: ${align === "center" ? "center" : "flex-start"};
				${align === "center" ? "flex-direction: column;" : ""}
				${align === "right" ? "flex-direction: row-reverse;" : ""}
				position: relative;
				z-index: 1;
            }
            
            .${id} .digiblocks-testimonial-image {
                width: ${getVal(imageSize, activeDevice)}px;
				height: ${getVal(imageSize, activeDevice)}px;
                border-radius: 50%;
                object-fit: cover;
                background: ${quoteIconColor};
                flex-shrink: 0;
            }
            
            .${id} .digiblocks-testimonial-name {
                ${headingTypographyCSS}
                color: ${nameColor};
                margin: 0;
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-testimonial-content:hover .digiblocks-testimonial-name {
                ${nameHoverColor ? `color: ${nameHoverColor};` : ""}
            }
            
            .${id} .digiblocks-testimonial-position {
                ${textTypographyCSS}
                color: ${positionColor};
                margin: 5px 0 0 0;
            }
            
            ${showRating ? `
            .${id} .digiblocks-testimonial-rating {
                display: flex;
				align-items: center;
				gap: 2px;
				justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
				position: relative;
				z-index: 1;
            }
            
            .${id} .digiblocks-rating-star {
                font-size: 16px;
            }
            ` : ""}
            
            /* Editor-specific styles */
            .${id} .digiblocks-testimonial-item-controls {
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

			.${id} .digiblocks-image-button {
				position: relative;
				height: auto;
				padding: 0;
			}

			.${id} .digiblocks-image-button span {
				position: absolute;
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
              name: "layouts",
              title: __("Layout", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Columns", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: columns[localActiveDevice],
                  onChange: (value) => setAttributes({
                    columns: {
                      ...columns,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 1,
                  max: 5,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
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
                  value: itemSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    itemSpacing: {
                      ...itemSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 5,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("Alignment", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl,
                {
                  value: align,
                  onChange: (value) => setAttributes({ align: value }),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "left",
                    label: __("Left", "digiblocks"),
                    "aria-label": __("Left alignment", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "center",
                    label: __("Center", "digiblocks"),
                    "aria-label": __("Center alignment", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "right",
                    label: __("Right", "digiblocks"),
                    "aria-label": __("Right alignment", "digiblocks")
                  }
                )
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "testimonial-items",
              title: __("Testimonials", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Ratings", "digiblocks"),
                checked: showRating,
                onChange: () => setAttributes({ showRating: !showRating }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Quote Icon", "digiblocks"),
                checked: showQuoteIcon,
                onChange: () => setAttributes({ showQuoteIcon: !showQuoteIcon }),
                __nextHasNoMarginBottom: true
              }
            )
          ));
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
                tabs: stateTabList
              },
              (tab) => {
                if (tab.name === "normal") {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Color Settings", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: nameColor,
                          onChange: (value) => setAttributes({
                            nameColor: value
                          }),
                          label: __("Name Color", "digiblocks")
                        },
                        {
                          value: positionColor,
                          onChange: (value) => setAttributes({
                            positionColor: value
                          }),
                          label: __("Position Color", "digiblocks")
                        },
                        {
                          value: contentColor,
                          onChange: (value) => setAttributes({
                            contentColor: value
                          }),
                          label: __("Content Color", "digiblocks")
                        },
                        {
                          value: backgroundColor,
                          onChange: (value) => setAttributes({
                            backgroundColor: value
                          }),
                          label: __("Background Color", "digiblocks")
                        },
                        {
                          value: quoteIconColor,
                          onChange: (value) => setAttributes({
                            quoteIconColor: value
                          }),
                          label: __("Quote Icon Color", "digiblocks")
                        },
                        {
                          value: ratingColor,
                          onChange: (value) => setAttributes({
                            ratingColor: value
                          }),
                          label: __("Rating Color", "digiblocks")
                        }
                      ]
                    }
                  );
                } else if (tab.name === "hover") {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Hover Color Settings", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: nameHoverColor,
                          onChange: (value) => setAttributes({
                            nameHoverColor: value
                          }),
                          label: __("Name Color", "digiblocks")
                        },
                        {
                          value: backgroundHoverColor,
                          onChange: (value) => setAttributes({
                            backgroundHoverColor: value
                          }),
                          label: __("Background Color", "digiblocks")
                        }
                      ]
                    }
                  );
                }
                return null;
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "typography",
              title: __("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Content Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({
                  contentTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.7, tablet: 1.6, mobile: 1.5 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Name Typography", "digiblocks"),
                value: headingTypography,
                onChange: (value) => setAttributes({
                  headingTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.3, tablet: 1.3, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Position Typography", "digiblocks"),
                value: textTypography,
                onChange: (value) => setAttributes({
                  textTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.4 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "sizes",
              title: __("Sizes & Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Image Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: imageSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageSize: {
                      ...imageSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 32,
                  max: 200,
                  step: 4,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Quote Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: quoteIconSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    quoteIconSize: {
                      ...quoteIconSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 20,
                  max: 200,
                  step: 5,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "border-shadow",
              title: __("Border & Shadow", "digiblocks"),
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
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: "px" },
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
                title: __("Border Color", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({
                      borderColor: value
                    }),
                    label: __("Border Color", "digiblocks")
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
    const renderSingleTestimonial = (testimonial, index) => /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        key: testimonial.id,
        className: "digiblocks-testimonial-item"
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-content" }, showQuoteIcon && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-quote-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z" }))), showRating && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-rating" }, generateStars(testimonial.rating)), /* @__PURE__ */ wp.element.createElement(
        RichText,
        {
          tagName: "p",
          className: "digiblocks-testimonial-text",
          value: testimonial.content,
          onChange: (value) => updateTestimonialContent(value, index),
          placeholder: __("Enter testimonial content...", "digiblocks"),
          allowedFormats: ["core/bold", "core/italic", "core/link"]
        }
      ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-author" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
        MediaUpload,
        {
          onSelect: (media) => updateTestimonialImage(media, index),
          allowedTypes: ["image"],
          value: testimonial.imageId,
          render: ({ open }) => /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              className: `digiblocks-image-button ${!testimonial.imageUrl ? "empty" : ""}`,
              onClick: open,
              icon: !testimonial.imageUrl ? "format-image" : ""
            },
            testimonial.imageUrl ? /* @__PURE__ */ wp.element.createElement(
              "img",
              {
                src: testimonial.imageUrl,
                alt: testimonial.name,
                className: "digiblocks-testimonial-image"
              }
            ) : /* @__PURE__ */ wp.element.createElement(
              "div",
              {
                className: "digiblocks-testimonial-image",
                style: { background: quoteIconColor }
              }
            )
          )
        }
      )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-info" }, /* @__PURE__ */ wp.element.createElement(
        RichText,
        {
          tagName: "h3",
          className: "digiblocks-testimonial-name",
          value: testimonial.name,
          onChange: (value) => updateTestimonialName(value, index),
          placeholder: __("Testimonial Name", "digiblocks"),
          allowedFormats: ["core/bold", "core/italic"]
        }
      ), /* @__PURE__ */ wp.element.createElement(
        RichText,
        {
          tagName: "p",
          className: "digiblocks-testimonial-position",
          value: testimonial.position + (testimonial.company ? `, ${testimonial.company}` : ""),
          onChange: (value) => {
            const parts = value.split(",");
            updateTestimonialPosition(parts[0].trim(), index);
            if (parts[1]) {
              updateTestimonialCompany(parts[1].trim(), index);
            }
          },
          placeholder: __("Position, Company", "digiblocks"),
          allowedFormats: ["core/bold", "core/italic"]
        }
      ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-item-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-testimonial-item-move-up",
          onClick: () => moveTestimonialUp(index),
          icon: "arrow-up-alt2",
          disabled: index === 0,
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-testimonial-item-move-down",
          onClick: () => moveTestimonialDown(index),
          icon: "arrow-down-alt2",
          disabled: index === testimonials.length - 1,
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-testimonial-item-duplicate",
          onClick: () => duplicateTestimonial(index),
          icon: "admin-page",
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-testimonial-item-remove",
          onClick: () => removeTestimonial(index),
          icon: "trash",
          isSmall: true
        }
      ))))
    );
    const renderTestimonials = () => {
      if (!testimonials || testimonials.length === 0) {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-no-testimonials" }, /* @__PURE__ */ wp.element.createElement("p", null, __("No testimonials found. Please add some testimonials.", "digiblocks")));
      }
      return testimonials.map((testimonial, index) => renderSingleTestimonial(testimonial, index));
    };
    const blockProps = useBlockProps({
      className: `digiblocks-testimonials-block ${id} grid ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonials-grid" }, renderTestimonials()), /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        variant: "primary",
        icon: "plus",
        onClick: addNewTestimonial,
        style: { width: "100%", marginTop: "40px", justifyContent: "center" }
      },
      __("Add Testimonial", "digiblocks")
    )));
  };
  var edit_default = TestimonialsEdit;

  // blocks/testimonials/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var TestimonialsSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      testimonials,
      showRating,
      showQuoteIcon,
      animation,
      columns,
      autoplay,
      autoplaySpeed,
      showArrows,
      showDots,
      ratingColor
    } = attributes;
    const blockClasses = [
      "digiblocks-testimonials-block",
      id,
      "grid",
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null
    });
    const generateStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          /* @__PURE__ */ wp.element.createElement(
            "span",
            {
              key: i,
              className: `digiblocks-rating-star ${i <= rating ? "filled" : ""}`,
              style: { color: i <= rating ? ratingColor : "#e0e0e0" }
            },
            /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" }))
          )
        );
      }
      return stars;
    };
    const renderTestimonials = () => {
      if (!testimonials || testimonials.length === 0) {
        return null;
      }
      return testimonials.map((testimonial) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: testimonial.id,
          className: "digiblocks-testimonial-item"
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-content" }, showQuoteIcon && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-quote-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z" }))), showRating && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-rating" }, generateStars(testimonial.rating)), /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "p",
            className: "digiblocks-testimonial-text",
            value: testimonial.content
          }
        ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-author" }, testimonial.imageUrl && /* @__PURE__ */ wp.element.createElement(
          "img",
          {
            src: testimonial.imageUrl,
            alt: testimonial.name,
            className: "digiblocks-testimonial-image"
          }
        ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonial-info" }, /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "h3",
            className: "digiblocks-testimonial-name",
            value: testimonial.name
          }
        ), /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "p",
            className: "digiblocks-testimonial-position",
            value: testimonial.position + (testimonial.company ? `, ${testimonial.company}` : "")
          }
        ))))
      ));
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-testimonials-grid" }, renderTestimonials()));
  };
  var save_default = TestimonialsSave;

  // blocks/testimonials/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/testimonials", {
    apiVersion: 2,
    title: digiBlocksData.blocks["testimonials"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["testimonials"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["testimonials"].description,
    keywords: [__2("testimonials", "digiblocks"), __2("reviews", "digiblocks"), __2("quotes", "digiblocks"), __2("testimonial", "digiblocks")],
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
      testimonials: {
        type: "array",
        default: [
          {
            id: "testimonial-1",
            name: __2("John Doe", "digiblocks"),
            position: __2("CEO", "digiblocks"),
            company: __2("Tech Innovations Inc.", "digiblocks"),
            content: __2("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.", "digiblocks"),
            imageUrl: "",
            imageId: "",
            rating: 5
          },
          {
            id: "testimonial-2",
            name: __2("Sarah Johnson", "digiblocks"),
            position: __2("Marketing Director", "digiblocks"),
            company: __2("Creative Solutions", "digiblocks"),
            content: __2("I cannot recommend this service enough. The quality and attention to detail exceeded our expectations.", "digiblocks"),
            imageUrl: "",
            imageId: "",
            rating: 5
          }
        ]
      },
      columns: {
        type: "object",
        default: {
          desktop: 2,
          tablet: 2,
          mobile: 1
        }
      },
      align: {
        type: "string",
        default: "left"
      },
      autoplay: {
        type: "boolean",
        default: true
      },
      autoplaySpeed: {
        type: "number",
        default: 3e3
      },
      showArrows: {
        type: "boolean",
        default: true
      },
      showDots: {
        type: "boolean",
        default: true
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
      contentColor: {
        type: "string",
        default: "#444444"
      },
      backgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      quoteIconColor: {
        type: "string",
        default: "#e0e0e0"
      },
      ratingColor: {
        type: "string",
        default: "#ffc107"
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
          desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      boxShadow: {
        type: "object",
        default: {
          enable: true,
          color: "rgba(0, 0, 0, 0.12)",
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
          enable: true,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 10,
          blur: 20,
          spread: 0,
          position: "outset"
        }
      },
      padding: {
        type: "object",
        default: {
          desktop: { top: 40, right: 40, bottom: 40, left: 40, unit: "px" },
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
      contentTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "italic",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.7, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      headingTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 20, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.3, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      textTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 14, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.4, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0.5, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      imageSize: {
        type: "object",
        default: {
          desktop: 64,
          tablet: "",
          mobile: ""
        }
      },
      quoteIconSize: {
        type: "object",
        default: {
          desktop: 80,
          tablet: "",
          mobile: ""
        }
      },
      showRating: {
        type: "boolean",
        default: true
      },
      showQuoteIcon: {
        type: "boolean",
        default: true
      },
      animation: {
        type: "string",
        default: "none"
      },
      itemSpacing: {
        type: "object",
        default: {
          desktop: 30,
          tablet: "",
          mobile: ""
        }
      }
    },
    example: {
      attributes: {
        testimonials: [
          {
            id: "testimonial-1",
            name: __2("John Doe", "digiblocks"),
            position: __2("CEO", "digiblocks"),
            company: __2("Tech Innovations Inc.", "digiblocks"),
            content: __2("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.", "digiblocks"),
            imageUrl: "",
            imageId: "",
            rating: 5
          },
          {
            id: "testimonial-2",
            name: __2("Charlotte Lebon", "digiblocks"),
            position: __2("Marketing", "digiblocks"),
            company: __2("Creative Solutions", "digiblocks"),
            content: __2("We've seen a 40% increase in customer engagement since implementing this solution. Highly recommended for any business.", "digiblocks"),
            imageUrl: "",
            imageId: "",
            rating: 5
          }
        ],
        layout: "card",
        backgroundColor: "#ffffff"
      },
      viewportWidth: 800
    },
    edit: edit_default,
    save: save_default
  });
})();
