(() => {
  // blocks/newsletter/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    RichText
  } = window.wp.blockEditor;
  var {
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    TabPanel,
    Notice,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl, TransformControl } = digi.components;
  var NewsletterEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      layout,
      align,
      title,
      showTitle,
      description,
      showDescription,
      emailPlaceholder,
      namePlaceholder,
      buttonText,
      showNameField,
      successMessage,
      errorMessage,
      titleColor,
      titleHoverColor,
      descriptionColor,
      inputTextColor,
      inputBackgroundColor,
      inputBorderColor,
      inputBorderFocusColor,
      inputPlaceholderColor,
      buttonTextColor,
      buttonBackgroundColor,
      buttonTextHoverColor,
      buttonBackgroundHoverColor,
      buttonBorderColor,
      buttonBorderHoverColor,
      backgroundColor,
      backgroundHoverColor,
      containerBorderColor,
      containerBorderHoverColor,
      titleTypography,
      contentTypography,
      textTypography,
      buttonTypography,
      containerBorderRadius,
      containerBorderWidth,
      containerBorderStyle,
      inputBorderRadius,
      inputBorderWidth,
      inputBorderStyle,
      buttonBorderRadius,
      buttonBorderWidth,
      buttonBorderStyle,
      spacing,
      inputSpacing,
      padding,
      margin,
      boxShadow,
      boxShadowHover,
      buttonBoxShadow,
      buttonBoxShadowHover,
      inputBoxShadow,
      inputBoxShadowHover,
      animation,
      animationDuration,
      animationDelay,
      position,
      horizontalOrientation,
      horizontalOffset,
      verticalOrientation,
      verticalOffset,
      zIndex,
      transform,
      transformHover
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
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
    };
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const layoutOptions = [
      { label: __("Stacked", "digiblocks"), value: "stacked" },
      { label: __("Inline", "digiblocks"), value: "inline" }
    ];
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Double", "digiblocks"), value: "double" }
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
        case "vw":
        case "vh":
          return 100;
        default:
          return 2e3;
      }
    };
    const getStepValue = (unit) => {
      switch (unit) {
        case "%":
        case "vw":
        case "vh":
          return 1;
        case "em":
        case "rem":
          return 0.1;
        default:
          return 1;
      }
    };
    const getTransformOrigin = (transform2, device) => {
      const xMap = { left: "0%", center: "50%", right: "100%" };
      const yMap = { top: "0%", center: "50%", bottom: "100%" };
      const x = xMap[transform2.xAnchor?.[device] || "center"];
      const y = yMap[transform2.yAnchor?.[device] || "center"];
      return `${x} ${y}`;
    };
    const getTransformCSS = (transform2, device) => {
      if (!transform2)
        return "";
      const transforms = [];
      const getValue = (prop) => {
        if (!prop)
          return "";
        let val = prop[device];
        const isEmpty = (v) => {
          if (v === "" || v === void 0 || v === null)
            return true;
          if (typeof v === "object" && v !== null) {
            return v.value === "" || v.value === void 0 || v.value === null;
          }
          return false;
        };
        if (device === "tablet" && isEmpty(val)) {
          val = prop.desktop;
        }
        if (device === "mobile" && isEmpty(val)) {
          val = prop.tablet;
          if (isEmpty(val)) {
            val = prop.desktop;
          }
        }
        return typeof val === "object" && val !== null ? val.value !== void 0 ? val.value : "" : val;
      };
      const rotateValue = getValue(transform2.rotate);
      if (rotateValue !== "" && rotateValue !== void 0 && rotateValue !== null) {
        if (transform2.rotate3d) {
          const perspectiveValue = getValue(transform2.perspective);
          if (perspectiveValue !== "" && perspectiveValue !== void 0 && perspectiveValue !== null) {
            transforms.push(`perspective(${perspectiveValue}px)`);
          }
        }
        transforms.push(`rotate(${rotateValue}deg)`);
      }
      if (transform2.rotate3d) {
        const rotateXValue = getValue(transform2.rotateX);
        if (rotateXValue !== "" && rotateXValue !== void 0 && rotateXValue !== null) {
          transforms.push(`rotateX(${rotateXValue}deg)`);
        }
        const rotateYValue = getValue(transform2.rotateY);
        if (rotateYValue !== "" && rotateYValue !== void 0 && rotateYValue !== null) {
          transforms.push(`rotateY(${rotateYValue}deg)`);
        }
      }
      const offsetXValue = transform2.offsetX?.[device]?.value;
      const offsetYValue = transform2.offsetY?.[device]?.value;
      const hasOffsetX = offsetXValue !== "" && offsetXValue !== void 0 && offsetXValue !== null;
      const hasOffsetY = offsetYValue !== "" && offsetYValue !== void 0 && offsetYValue !== null;
      if (hasOffsetX || hasOffsetY) {
        const x = hasOffsetX ? `${offsetXValue}${transform2.offsetX[device].unit || "px"}` : "0";
        const y = hasOffsetY ? `${offsetYValue}${transform2.offsetY[device].unit || "px"}` : "0";
        transforms.push(`translate(${x}, ${y})`);
      }
      if (transform2.keepProportions) {
        const scaleValue = getValue(transform2.scale);
        if (scaleValue !== "" && scaleValue !== void 0 && scaleValue !== null && scaleValue != 1) {
          transforms.push(`scale(${scaleValue})`);
        }
      } else {
        const scaleXValue = getValue(transform2.scaleX);
        const scaleYValue = getValue(transform2.scaleY);
        const scaleX = scaleXValue !== "" && scaleXValue !== void 0 && scaleXValue !== null ? scaleXValue : 1;
        const scaleY = scaleYValue !== "" && scaleYValue !== void 0 && scaleYValue !== null ? scaleYValue : 1;
        if (scaleX != 1 || scaleY != 1) {
          transforms.push(`scale(${scaleX}, ${scaleY})`);
        }
      }
      const skewXValue = getValue(transform2.skewX);
      if (skewXValue !== "" && skewXValue !== void 0 && skewXValue !== null) {
        transforms.push(`skewX(${skewXValue}deg)`);
      }
      const skewYValue = getValue(transform2.skewY);
      if (skewYValue !== "" && skewYValue !== void 0 && skewYValue !== null) {
        transforms.push(`skewY(${skewYValue}deg)`);
      }
      if (transform2.flipHorizontal) {
        transforms.push("scaleX(-1)");
      }
      if (transform2.flipVertical) {
        transforms.push("scaleY(-1)");
      }
      return transforms.length > 0 ? transforms.join(" ") : "";
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      let positionCSS = "";
      if (position && position !== "default") {
        positionCSS += `position: ${position} !important;`;
        const horizontalValue = horizontalOffset?.[activeDevice]?.value;
        const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || "px";
        if (horizontalValue !== "" && horizontalValue !== void 0) {
          if (horizontalOrientation === "left") {
            positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
          } else {
            positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
          }
        }
        const verticalValue = verticalOffset?.[activeDevice]?.value;
        const verticalUnit = verticalOffset?.[activeDevice]?.unit || "px";
        if (verticalValue !== "" && verticalValue !== void 0) {
          if (verticalOrientation === "top") {
            positionCSS += `top: ${verticalValue}${verticalUnit};`;
          } else {
            positionCSS += `bottom: ${verticalValue}${verticalUnit};`;
          }
        }
      }
      if (zIndex !== "" && zIndex !== void 0 && zIndex !== null) {
        positionCSS += `z-index: ${zIndex};`;
      }
      let transformCSS = "";
      const transformValue = getTransformCSS(transform, activeDevice);
      if (transformValue) {
        transformCSS += `transform: ${transformValue};`;
        transformCSS += `transform-origin: ${getTransformOrigin(transform, activeDevice)};`;
      }
      const transformHoverValue = getTransformCSS(transformHover, activeDevice);
      if (transformHoverValue && transformHover && transformHover.transitionDuration !== "" && transformHover.transitionDuration !== void 0 && transformHover.transitionDuration !== null) {
        const duration = transformHover.transitionDuration;
        transformCSS += `transition: transform ${duration}ms ease;`;
      }
      let transformHoverCSS = "";
      if (transformHoverValue) {
        transformHoverCSS += `transform: ${transformHoverValue};`;
        transformHoverCSS += `transform-origin: ${getTransformOrigin(transformHover, activeDevice)};`;
      }
      return `
            /* Newsletter Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, "padding", activeDevice)}
                ${getDimensionCSS(margin, "margin", activeDevice)}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                ${boxShadow?.enable ? `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};` : ""}
				${containerBorderStyle !== "none" ? "border: " + (containerBorderWidth[activeDevice] || 1) + "px " + (containerBorderStyle || "solid") + " " + containerBorderColor + ";" : "border: none;"}
                ${getDimensionCSS(containerBorderRadius, "border-radius", activeDevice)}
                transition: all 0.3s ease;
                text-align: ${getVal(align, activeDevice) === "center" ? "center" : getVal(align, activeDevice) === "right" ? "right" : "left"};
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${containerBorderHoverColor ? `border-color: ${containerBorderHoverColor};` : ""}
                ${boxShadowHover?.enable ? `box-shadow: ${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};` : ""}
				${transformHoverCSS}
            }

            /* Newsletter Title */
            .${id} .digiblocks-newsletter-title {
                color: ${titleColor};
                margin-top: 0;
                margin-bottom: ${getVal(spacing, activeDevice)?.value || 20}${getVal(spacing, activeDevice)?.unit || "px"};
                ${titleTypography.fontFamily ? `font-family: ${titleTypography.fontFamily};` : ""}
                ${getVal(titleTypography.fontSize, activeDevice) ? `font-size: ${getVal(titleTypography.fontSize, activeDevice)}${titleTypography.fontSizeUnit || "px"};` : ""}
                ${titleTypography.fontWeight ? `font-weight: ${titleTypography.fontWeight};` : ""}
                ${titleTypography.fontStyle ? `font-style: ${titleTypography.fontStyle};` : ""}
                ${titleTypography.textTransform ? `text-transform: ${titleTypography.textTransform};` : ""}
                ${titleTypography.textDecoration ? `text-decoration: ${titleTypography.textDecoration};` : ""}
                ${getVal(titleTypography.lineHeight, activeDevice) ? `line-height: ${getVal(titleTypography.lineHeight, activeDevice)}${titleTypography.lineHeightUnit || "em"};` : ""}
                ${getVal(titleTypography.letterSpacing, activeDevice) ? `letter-spacing: ${getVal(titleTypography.letterSpacing, activeDevice)}${titleTypography.letterSpacingUnit || "px"};` : ""}
                transition: color 0.3s ease;
            }

            .${id}:hover .digiblocks-newsletter-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }

            /* Newsletter Description */
            .${id} .digiblocks-newsletter-description {
                color: ${descriptionColor};
                margin-bottom: ${spacing[activeDevice]?.value || 20}${spacing[activeDevice]?.unit || "px"};
                ${contentTypography.fontFamily ? `font-family: ${contentTypography.fontFamily};` : ""}
                ${getVal(contentTypography.fontSize, activeDevice) ? `font-size: ${getVal(contentTypography.fontSize, activeDevice)}${contentTypography.fontSizeUnit || "px"};` : ""}
                ${contentTypography.fontWeight ? `font-weight: ${contentTypography.fontWeight};` : ""}
                ${contentTypography.fontStyle ? `font-style: ${contentTypography.fontStyle};` : ""}
                ${contentTypography.textTransform ? `text-transform: ${contentTypography.textTransform};` : ""}
                ${contentTypography.textDecoration ? `text-decoration: ${contentTypography.textDecoration};` : ""}
                ${getVal(contentTypography.lineHeight, activeDevice) ? `line-height: ${getVal(contentTypography.lineHeight, activeDevice)}${contentTypography.lineHeightUnit || "em"};` : ""}
				${getVal(contentTypography.letterSpacing, activeDevice) !== null ? `letter-spacing: ${getVal(contentTypography.letterSpacing, activeDevice)}${contentTypography.letterSpacingUnit || "px"};` : ""}
            }

            /* Newsletter Form */
            .${id} .digiblocks-newsletter-form {
                display: flex;
                ${layout === "stacked" ? "flex-direction: column;" : "flex-direction: row;"}
                gap: ${getVal(inputSpacing, activeDevice)?.value || 10}${getVal(inputSpacing, activeDevice)?.unit || "px"};
                ${layout === "inline" && getVal(align, activeDevice) === "center" ? "justify-content: center;" : ""}
				${layout === "inline" && getVal(align, activeDevice) === "right" ? "justify-content: flex-end;" : ""}
            }

            /* Form Fields */
            .${id} .digiblocks-newsletter-fields {
                display: flex;
                ${layout === "stacked" ? "flex-direction: column;" : "flex-direction: row;"}
                gap: ${getVal(inputSpacing, activeDevice)?.value || 10}${getVal(inputSpacing, activeDevice)?.unit || "px"};
                ${layout === "inline" ? "flex: 1;" : "width: 100%;"}
            }

            .${id} .digiblocks-newsletter-field {
                ${layout === "stacked" ? "width: 100%;" : "flex: 1;"}
            }

            /* Input Container with Icon */
            .${id} .digiblocks-newsletter-input-container {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
            }

            .${id} .digiblocks-newsletter-input-icon {
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
                ${textTypography.fontSize?.[activeDevice] ? `width: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || "px"};` : "width: 1em;"}
                ${textTypography.fontSize?.[activeDevice] ? `height: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || "px"};` : "height: 1em;"}
                fill: ${inputTextColor};
                pointer-events: none;
                z-index: 2;
                opacity: 0.7;
                transition: all 0.3s ease;
            }

            /* Input Styles */
            .${id} .digiblocks-newsletter-input {
                width: 100%;
                padding: 12px 16px 12px 50px;
                color: ${inputTextColor};
                background-color: ${inputBackgroundColor};
				${inputBorderStyle !== "none" ? "border: " + (inputBorderWidth[activeDevice] || 1) + "px " + (inputBorderStyle || "solid") + " " + inputBorderColor + ";" : "border: none;"}
                ${getDimensionCSS(inputBorderRadius, "border-radius", activeDevice)}
                ${inputBoxShadow?.enable ? `box-shadow: ${inputBoxShadow.horizontal}px ${inputBoxShadow.vertical}px ${inputBoxShadow.blur}px ${inputBoxShadow.spread}px ${inputBoxShadow.color};` : ""}
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ""}
                ${getVal(textTypography.fontSize, activeDevice) ? `font-size: ${getVal(textTypography.fontSize, activeDevice)}${textTypography.fontSizeUnit || "px"};` : ""}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ""}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ""}
                ${textTypography.textTransform ? `text-transform: ${textTypography.textTransform};` : ""}
                ${textTypography.textDecoration ? `text-decoration: ${textTypography.textDecoration};` : ""}
                ${getVal(textTypography.lineHeight, activeDevice) ? `line-height: ${getVal(textTypography.lineHeight, activeDevice)}${textTypography.lineHeightUnit || "em"};` : ""}
				${getVal(textTypography.letterSpacing, activeDevice) !== null ? `letter-spacing: ${getVal(textTypography.letterSpacing, activeDevice)}${textTypography.letterSpacingUnit || "px"};` : ""}
                transition: all 0.3s ease;
                outline: none;
				box-shadow: none;
            }

            .${id} .digiblocks-newsletter-input::placeholder {
                color: ${inputPlaceholderColor};
            }

            .${id} .digiblocks-newsletter-input:focus {
                border-color: ${inputBorderFocusColor};
                ${inputBoxShadowHover?.enable ? `box-shadow: ${inputBoxShadowHover.horizontal}px ${inputBoxShadowHover.vertical}px ${inputBoxShadowHover.blur}px ${inputBoxShadowHover.spread}px ${inputBoxShadowHover.color};` : ""}
            }

            .${id} .digiblocks-newsletter-input:focus + .digiblocks-newsletter-input-icon {
                opacity: 1;
                fill: ${inputBorderFocusColor || inputTextColor};
            }

            /* Button Styles */
            .${id} .digiblocks-newsletter-button {
                padding: 12px 24px;
                color: ${buttonTextColor};
                background-color: ${buttonBackgroundColor};
				${buttonBorderStyle !== "none" ? "border: " + (buttonBorderWidth[activeDevice] || 1) + "px " + (buttonBorderStyle || "solid") + " " + buttonBorderColor + ";" : "border: none;"}
                ${getDimensionCSS(buttonBorderRadius, "border-radius", activeDevice)}
                ${getVal(buttonTypography.fontSize, activeDevice) ? `font-size: ${getVal(buttonTypography.fontSize, activeDevice)}${buttonTypography.fontSizeUnit || "px"};` : ""}
                ${buttonTypography.fontFamily ? `font-family: ${buttonTypography.fontFamily};` : ""}
                ${buttonTypography.fontSize?.[activeDevice] ? `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || "px"};` : ""}
                ${buttonTypography.fontWeight ? `font-weight: ${buttonTypography.fontWeight};` : ""}
                ${buttonTypography.fontStyle ? `font-style: ${buttonTypography.fontStyle};` : ""}
                ${buttonTypography.textTransform ? `text-transform: ${buttonTypography.textTransform};` : ""}
                ${buttonTypography.textDecoration ? `text-decoration: ${buttonTypography.textDecoration};` : ""}
                ${getVal(buttonTypography.lineHeight, activeDevice) ? `line-height: ${getVal(buttonTypography.lineHeight, activeDevice)}${buttonTypography.lineHeightUnit || "em"};` : ""}
				${getVal(buttonTypography.letterSpacing, activeDevice) !== null ? `letter-spacing: ${getVal(buttonTypography.letterSpacing, activeDevice)}${buttonTypography.letterSpacingUnit || "px"};` : ""}
                cursor: pointer;
                transition: all 0.3s ease;
                ${layout === "stacked" ? "width: 100%;" : "white-space: nowrap;"}
            }

            .${id} .digiblocks-newsletter-button:hover {
                color: ${buttonTextHoverColor || buttonTextColor};
                background-color: ${buttonBackgroundHoverColor || buttonBackgroundColor};
                border-color: ${buttonBorderHoverColor || buttonBorderColor};
                ${buttonBoxShadowHover?.enable ? `box-shadow: ${buttonBoxShadowHover.horizontal}px ${buttonBoxShadowHover.vertical}px ${buttonBoxShadowHover.blur}px ${buttonBoxShadowHover.spread}px ${buttonBoxShadowHover.color};` : ""}
            }

            /* Messages */
            .${id} .digiblocks-newsletter-message {
                margin-top: ${spacing[activeDevice]}px;
                padding: 12px;
                border-radius: 4px;
                display: none;
            }

            .${id} .digiblocks-newsletter-message.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }

            .${id} .digiblocks-newsletter-message.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }

			/* Responsive */
			@media (max-width: 767px) {
				.${id} .digiblocks-newsletter-form {
					flex-direction: column;
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
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "content",
              title: __("Content", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              Notice,
              {
                status: "warning",
                isDismissible: false,
                className: "digiblocks-notice components-base-control"
              },
              /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, __("Configure your newsletter platform in ", "digiblocks"), /* @__PURE__ */ wp.element.createElement(
                "a",
                {
                  href: "/wp-admin/admin.php?page=digiblocks-settings",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                __("DigiBlocks Settings", "digiblocks")
              ), __(" to enable subscriptions.", "digiblocks"))
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Title", "digiblocks"),
                checked: showTitle,
                onChange: (value) => setAttributes({ showTitle: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Description", "digiblocks"),
                checked: showDescription,
                onChange: (value) => setAttributes({ showDescription: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Name Field", "digiblocks"),
                checked: showNameField,
                onChange: (value) => setAttributes({ showNameField: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Email Placeholder", "digiblocks"),
                value: emailPlaceholder,
                onChange: (value) => setAttributes({ emailPlaceholder: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            showNameField && /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Name Placeholder", "digiblocks"),
                value: namePlaceholder,
                onChange: (value) => setAttributes({ namePlaceholder: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Success Message", "digiblocks"),
                value: successMessage,
                onChange: (value) => setAttributes({ successMessage: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Error Message", "digiblocks"),
                value: errorMessage,
                onChange: (value) => setAttributes({ errorMessage: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "layout",
              title: __("Layout", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
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
                  value: "stacked",
                  label: __("Stacked", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "inline",
                  label: __("Inline", "digiblocks")
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Alignment", "digiblocks"),
                value: align,
                onChange: (value) => setAttributes({ align: value }),
                options: [
                  { label: __("Left", "digiblocks"), value: "left" },
                  { label: __("Center", "digiblocks"), value: "center" },
                  { label: __("Right", "digiblocks"), value: "right" }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Content Spacing", "digiblocks"),
                value: spacing,
                onChange: (value) => setAttributes({ spacing: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" }
                ],
                defaultUnit: "px",
                min: 0,
                max: 100,
                step: 1,
                defaultValues: {
                  desktop: { value: 20, unit: "px" },
                  tablet: { value: 20, unit: "px" },
                  mobile: { value: 20, unit: "px" }
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Field Spacing", "digiblocks"),
                value: inputSpacing,
                onChange: (value) => setAttributes({ inputSpacing: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" }
                ],
                defaultUnit: "px",
                min: 0,
                max: 50,
                step: 1,
                defaultValues: {
                  desktop: { value: 10, unit: "px" },
                  tablet: { value: 8, unit: "px" },
                  mobile: { value: 6, unit: "px" }
                }
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
                  return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Text Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: titleColor,
                          onChange: (value) => setAttributes({ titleColor: value }),
                          label: __("Title Color", "digiblocks")
                        },
                        {
                          value: descriptionColor,
                          onChange: (value) => setAttributes({ descriptionColor: value }),
                          label: __("Description Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Input Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: inputTextColor,
                          onChange: (value) => setAttributes({ inputTextColor: value }),
                          label: __("Input Text Color", "digiblocks")
                        },
                        {
                          value: inputBackgroundColor,
                          onChange: (value) => setAttributes({ inputBackgroundColor: value }),
                          label: __("Input Background", "digiblocks")
                        },
                        {
                          value: inputBorderColor,
                          onChange: (value) => setAttributes({ inputBorderColor: value }),
                          label: __("Input Border", "digiblocks")
                        },
                        {
                          value: inputBorderFocusColor,
                          onChange: (value) => setAttributes({ inputBorderFocusColor: value }),
                          label: __("Input Border Focus", "digiblocks")
                        },
                        {
                          value: inputPlaceholderColor,
                          onChange: (value) => setAttributes({ inputPlaceholderColor: value }),
                          label: __("Placeholder Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Button Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: buttonTextColor,
                          onChange: (value) => setAttributes({ buttonTextColor: value }),
                          label: __("Button Text", "digiblocks")
                        },
                        {
                          value: buttonBackgroundColor,
                          onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                          label: __("Button Background", "digiblocks")
                        },
                        {
                          value: buttonBorderColor,
                          onChange: (value) => setAttributes({ buttonBorderColor: value }),
                          label: __("Button Border", "digiblocks")
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
                          value: containerBorderColor,
                          onChange: (value) => setAttributes({ containerBorderColor: value }),
                          label: __("Border Color", "digiblocks")
                        }
                      ]
                    }
                  ));
                } else {
                  return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Hover Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: titleHoverColor,
                          onChange: (value) => setAttributes({ titleHoverColor: value }),
                          label: __("Title Hover Color", "digiblocks")
                        },
                        {
                          value: buttonTextHoverColor,
                          onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                          label: __("Button Text Hover", "digiblocks")
                        },
                        {
                          value: buttonBackgroundHoverColor,
                          onChange: (value) => setAttributes({ buttonBackgroundHoverColor: value }),
                          label: __("Button Background Hover", "digiblocks")
                        },
                        {
                          value: buttonBorderHoverColor,
                          onChange: (value) => setAttributes({ buttonBorderHoverColor: value }),
                          label: __("Button Border Hover", "digiblocks")
                        },
                        {
                          value: backgroundHoverColor,
                          onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                          label: __("Background Hover", "digiblocks")
                        },
                        {
                          value: containerBorderHoverColor,
                          onChange: (value) => setAttributes({ containerBorderHoverColor: value }),
                          label: __("Border Hover", "digiblocks")
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
              name: "typography",
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
                  fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                  fontWeight: "600",
                  lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 }
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Description Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({ contentTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 }
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Input Typography", "digiblocks"),
                value: textTypography,
                onChange: (value) => setAttributes({ textTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 }
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Button Typography", "digiblocks"),
                value: buttonTypography,
                onChange: (value) => setAttributes({ buttonTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontWeight: "500",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 }
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "borders",
              title: __("Borders & Radius", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("h4", null, __("Container Border", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Container Border Style", "digiblocks"),
                value: containerBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ containerBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Container Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: containerBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    containerBorderWidth: {
                      ...containerBorderWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 10,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Container Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: containerBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    containerBorderRadius: {
                      ...containerBorderRadius,
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
            /* @__PURE__ */ wp.element.createElement("h4", null, __("Input Border", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Input Border Style", "digiblocks"),
                value: inputBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ inputBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Input Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: inputBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    inputBorderWidth: {
                      ...inputBorderWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 10,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Input Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: inputBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    inputBorderRadius: {
                      ...inputBorderRadius,
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
            /* @__PURE__ */ wp.element.createElement("h4", null, __("Button Border", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Button Border Style", "digiblocks"),
                value: buttonBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ buttonBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Button Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: buttonBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    buttonBorderWidth: {
                      ...buttonBorderWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 10,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Button Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: buttonBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    buttonBorderRadius: {
                      ...buttonBorderRadius,
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
                label: __("Container Shadow", "digiblocks"),
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                label: __("Input Shadow", "digiblocks"),
                normalValue: inputBoxShadow,
                hoverValue: inputBoxShadowHover,
                onNormalChange: (value) => setAttributes({ inputBoxShadow: value }),
                onHoverChange: (value) => setAttributes({ inputBoxShadowHover: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                label: __("Button Shadow", "digiblocks"),
                normalValue: buttonBoxShadow,
                hoverValue: buttonBoxShadowHover,
                onNormalChange: (value) => setAttributes({ buttonBoxShadow: value }),
                onHoverChange: (value) => setAttributes({ buttonBoxShadowHover: value })
              }
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "spacing",
              title: __("Spacing", "digiblocks"),
              initialOpen: true
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
              tab: "advanced",
              name: "position",
              title: __("Position", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Position", "digiblocks"),
                value: position,
                options: [
                  { label: __("Default", "digiblocks"), value: "default" },
                  { label: __("Relative", "digiblocks"), value: "relative" },
                  { label: __("Absolute", "digiblocks"), value: "absolute" },
                  { label: __("Fixed", "digiblocks"), value: "fixed" }
                ],
                onChange: (value) => setAttributes({ position: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            position !== "default" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Horizontal Orientation", "digiblocks"),
                value: horizontalOrientation,
                isBlock: true,
                onChange: (value) => setAttributes({ horizontalOrientation: value }),
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
              ResponsiveRangeControl,
              {
                label: __("Offset", "digiblocks"),
                value: horizontalOffset,
                onChange: (value) => setAttributes({ horizontalOffset: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vw", value: "vw" },
                  { label: "vh", value: "vh" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getMaxValue(horizontalOffset?.[localActiveDevice]?.unit),
                step: getStepValue(horizontalOffset?.[localActiveDevice]?.unit)
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Vertical Orientation", "digiblocks"),
                value: verticalOrientation,
                isBlock: true,
                onChange: (value) => setAttributes({ verticalOrientation: value }),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "top",
                  label: __("Top", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "bottom",
                  label: __("Bottom", "digiblocks")
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Offset", "digiblocks"),
                value: verticalOffset,
                onChange: (value) => setAttributes({ verticalOffset: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vw", value: "vw" },
                  { label: "vh", value: "vh" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getMaxValue(verticalOffset?.[localActiveDevice]?.unit),
                step: getStepValue(verticalOffset?.[localActiveDevice]?.unit)
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Z-Index", "digiblocks"),
                value: zIndex,
                onChange: (value) => setAttributes({ zIndex: value }),
                min: -999,
                max: 9999,
                allowReset: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "transform",
              title: __("Transform", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TransformControl,
              {
                normalValue: transform,
                hoverValue: transformHover,
                onNormalChange: (value) => setAttributes({ transform: value }),
                onHoverChange: (value) => setAttributes({ transformHover: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "animation",
              title: __("Animation", "digiblocks"),
              initialOpen: false
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
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Animation Duration", "digiblocks"),
                value: animationDuration,
                options: [
                  { label: __("Slow", "digiblocks"), value: "slow" },
                  { label: __("Normal", "digiblocks"), value: "normal" },
                  { label: __("Fast", "digiblocks"), value: "fast" }
                ],
                onChange: (value) => setAttributes({ animationDuration: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              NumberControl,
              {
                label: __("Animation Delay (ms)", "digiblocks"),
                value: animationDelay || 0,
                onChange: (value) => setAttributes({ animationDelay: parseInt(value) || 0 }),
                min: 0,
                step: 100,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )),
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
    const animationClass = "none" !== animation ? ` animate-${animation}` : "";
    const blockClasses = `digiblocks-newsletter ${id}${animationClass} ${customClasses || ""}`;
    const blockProps = useBlockProps({
      className: blockClasses,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, showTitle && /* @__PURE__ */ wp.element.createElement(
      RichText,
      {
        tagName: "h3",
        className: "digiblocks-newsletter-title",
        value: title,
        onChange: (value) => setAttributes({ title: value }),
        placeholder: __("Subscribe to our Newsletter", "digiblocks")
      }
    ), showDescription && /* @__PURE__ */ wp.element.createElement(
      RichText,
      {
        tagName: "p",
        className: "digiblocks-newsletter-description",
        value: description,
        onChange: (value) => setAttributes({ description: value }),
        placeholder: __("Stay updated with our latest news and offers", "digiblocks")
      }
    ), /* @__PURE__ */ wp.element.createElement("form", { className: "digiblocks-newsletter-form", onSubmit: (e) => e.preventDefault() }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-fields" }, showNameField && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-field" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-input-container" }, /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        type: "text",
        className: "digiblocks-newsletter-input",
        placeholder: namePlaceholder,
        disabled: true
      }
    ), /* @__PURE__ */ wp.element.createElement("svg", { className: "digiblocks-newsletter-input-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" })))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-field" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-input-container" }, /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        type: "email",
        className: "digiblocks-newsletter-input",
        placeholder: emailPlaceholder,
        disabled: true
      }
    ), /* @__PURE__ */ wp.element.createElement("svg", { className: "digiblocks-newsletter-input-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }))))), /* @__PURE__ */ wp.element.createElement(
      RichText,
      {
        tagName: "button",
        className: "digiblocks-newsletter-button",
        value: buttonText,
        onChange: (value) => setAttributes({ buttonText: value }),
        placeholder: __("Subscribe", "digiblocks")
      }
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-message success" }, successMessage), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-message error" }, errorMessage)));
  };
  var edit_default = NewsletterEdit;

  // blocks/newsletter/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var NewsletterSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      title,
      showTitle,
      description,
      showDescription,
      emailPlaceholder,
      namePlaceholder,
      buttonText,
      showNameField,
      successMessage,
      errorMessage,
      animation,
      animationDuration,
      animationDelay
    } = attributes;
    const animationClass = "none" !== animation ? ` animate-${animation} digi-animate-hidden` : "";
    const blockClasses = `digiblocks-newsletter ${id}${animationClass} ${customClasses || ""}`;
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, showTitle && /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        tagName: "h3",
        className: "digiblocks-newsletter-title",
        value: title
      }
    ), showDescription && /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        tagName: "p",
        className: "digiblocks-newsletter-description",
        value: description
      }
    ), /* @__PURE__ */ wp.element.createElement("form", { className: "digiblocks-newsletter-form", method: "post" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-fields" }, showNameField && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-field" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-input-container" }, /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        type: "text",
        name: "digiblocks_newsletter_name",
        className: "digiblocks-newsletter-input",
        placeholder: namePlaceholder,
        required: showNameField
      }
    ), /* @__PURE__ */ wp.element.createElement("svg", { className: "digiblocks-newsletter-input-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" })))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-field" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-input-container" }, /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        type: "email",
        name: "digiblocks_newsletter_email",
        className: "digiblocks-newsletter-input",
        placeholder: emailPlaceholder,
        required: true
      }
    ), /* @__PURE__ */ wp.element.createElement("svg", { className: "digiblocks-newsletter-input-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" }))))), /* @__PURE__ */ wp.element.createElement("button", { type: "submit", className: "digiblocks-newsletter-button" }, /* @__PURE__ */ wp.element.createElement(RichText2.Content, { value: buttonText })), /* @__PURE__ */ wp.element.createElement("input", { type: "hidden", name: "action", value: "digiblocks_newsletter_subscribe" }), /* @__PURE__ */ wp.element.createElement("input", { type: "hidden", name: "digiblocks_newsletter_nonce", value: "" }), /* @__PURE__ */ wp.element.createElement("input", { type: "hidden", name: "block_id", value: id })), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-message success", style: { display: "none" } }, successMessage), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-newsletter-message error", style: { display: "none" } }, errorMessage));
  };
  var save_default = NewsletterSave;

  // blocks/newsletter/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/newsletter", {
    apiVersion: 2,
    title: digiBlocksData.blocks["newsletter"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["newsletter"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["newsletter"].description,
    keywords: [__2("newsletter", "digiblocks"), __2("subscribe", "digiblocks"), __2("email", "digiblocks"), __2("mailchimp", "digiblocks")],
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
        default: "stacked"
      },
      align: {
        type: "object",
        default: {
          desktop: "left",
          tablet: "",
          mobile: ""
        }
      },
      title: {
        type: "string",
        default: __2("Subscribe to our Newsletter", "digiblocks")
      },
      showTitle: {
        type: "boolean",
        default: true
      },
      description: {
        type: "string",
        default: __2("Stay updated with our latest news and offers", "digiblocks")
      },
      showDescription: {
        type: "boolean",
        default: true
      },
      emailPlaceholder: {
        type: "string",
        default: __2("Enter your email address", "digiblocks")
      },
      namePlaceholder: {
        type: "string",
        default: __2("Enter your name", "digiblocks")
      },
      buttonText: {
        type: "string",
        default: __2("Subscribe", "digiblocks")
      },
      showNameField: {
        type: "boolean",
        default: false
      },
      successMessage: {
        type: "string",
        default: __2("Thank you for subscribing!", "digiblocks")
      },
      errorMessage: {
        type: "string",
        default: __2("Something went wrong. Please try again.", "digiblocks")
      },
      titleColor: {
        type: "string",
        default: ""
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      descriptionColor: {
        type: "string",
        default: "#666666"
      },
      inputTextColor: {
        type: "string",
        default: ""
      },
      inputBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      inputBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      inputBorderFocusColor: {
        type: "string",
        default: "#4a6cf7"
      },
      inputPlaceholderColor: {
        type: "string",
        default: "#999999"
      },
      buttonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      buttonBackgroundColor: {
        type: "string",
        default: "#4a6cf7"
      },
      buttonTextHoverColor: {
        type: "string",
        default: ""
      },
      buttonBackgroundHoverColor: {
        type: "string",
        default: ""
      },
      buttonBorderColor: {
        type: "string",
        default: ""
      },
      buttonBorderHoverColor: {
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
      containerBorderColor: {
        type: "string",
        default: ""
      },
      containerBorderHoverColor: {
        type: "string",
        default: ""
      },
      titleTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 24, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.4, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      contentTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "normal",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      textTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "normal",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      buttonTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "500",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      containerBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      containerBorderWidth: {
        type: "object",
        default: {
          desktop: 1,
          tablet: 1,
          mobile: 1
        }
      },
      containerBorderStyle: {
        type: "string",
        default: "none"
      },
      inputBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      inputBorderWidth: {
        type: "object",
        default: {
          desktop: 1,
          tablet: 1,
          mobile: 1
        }
      },
      inputBorderStyle: {
        type: "string",
        default: "solid"
      },
      buttonBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      buttonBorderWidth: {
        type: "object",
        default: {
          desktop: 1,
          tablet: 1,
          mobile: 1
        }
      },
      buttonBorderStyle: {
        type: "string",
        default: "solid"
      },
      spacing: {
        type: "object",
        default: {
          desktop: { value: 20, unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      inputSpacing: {
        type: "object",
        default: {
          desktop: { value: 10, unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
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
      boxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.1)",
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
      buttonBoxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.1)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      buttonBoxShadowHover: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.15)",
          horizontal: 0,
          vertical: 2,
          blur: 8,
          spread: 0,
          position: "outset"
        }
      },
      inputBoxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.1)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      inputBoxShadowHover: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.15)",
          horizontal: 0,
          vertical: 2,
          blur: 4,
          spread: 0,
          position: "outset"
        }
      },
      animation: {
        type: "string",
        default: "none"
      },
      animationDuration: {
        type: "string",
        default: "normal"
      },
      animationDelay: {
        type: "number",
        default: ""
      },
      position: {
        type: "string",
        default: "default"
      },
      horizontalOrientation: {
        type: "string",
        default: "left"
      },
      horizontalOffset: {
        type: "object",
        default: {
          desktop: { value: 0, unit: "px" },
          tablet: { value: 0, unit: "px" },
          mobile: { value: 0, unit: "px" }
        }
      },
      verticalOrientation: {
        type: "string",
        default: "top"
      },
      verticalOffset: {
        type: "object",
        default: {
          desktop: { value: 0, unit: "px" },
          tablet: { value: 0, unit: "px" },
          mobile: { value: 0, unit: "px" }
        }
      },
      zIndex: {
        type: "number",
        default: ""
      },
      transform: {
        type: "object",
        default: {
          rotate: { desktop: "", tablet: "", mobile: "" },
          rotate3d: false,
          rotateX: { desktop: "", tablet: "", mobile: "" },
          rotateY: { desktop: "", tablet: "", mobile: "" },
          perspective: { desktop: "", tablet: "", mobile: "" },
          offsetX: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          offsetY: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          keepProportions: true,
          scale: { desktop: "", tablet: "", mobile: "" },
          scaleX: { desktop: "", tablet: "", mobile: "" },
          scaleY: { desktop: "", tablet: "", mobile: "" },
          skewX: { desktop: "", tablet: "", mobile: "" },
          skewY: { desktop: "", tablet: "", mobile: "" },
          flipHorizontal: false,
          flipVertical: false,
          xAnchor: { desktop: "center", tablet: "", mobile: "" },
          yAnchor: { desktop: "center", tablet: "", mobile: "" },
          transitionDuration: ""
        }
      },
      transformHover: {
        type: "object",
        default: {
          rotate: { desktop: "", tablet: "", mobile: "" },
          rotate3d: false,
          rotateX: { desktop: "", tablet: "", mobile: "" },
          rotateY: { desktop: "", tablet: "", mobile: "" },
          perspective: { desktop: "", tablet: "", mobile: "" },
          offsetX: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          offsetY: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          keepProportions: true,
          scale: { desktop: "", tablet: "", mobile: "" },
          scaleX: { desktop: "", tablet: "", mobile: "" },
          scaleY: { desktop: "", tablet: "", mobile: "" },
          skewX: { desktop: "", tablet: "", mobile: "" },
          skewY: { desktop: "", tablet: "", mobile: "" },
          flipHorizontal: false,
          flipVertical: false,
          xAnchor: { desktop: "center", tablet: "", mobile: "" },
          yAnchor: { desktop: "center", tablet: "", mobile: "" },
          transitionDuration: ""
        }
      }
    },
    example: {
      attributes: {
        title: __2("Subscribe to our Newsletter", "digiblocks"),
        description: __2("Stay updated with our latest news and offers", "digiblocks"),
        layout: "stacked",
        showTitle: true,
        showDescription: true,
        showNameField: false,
        buttonText: __2("Subscribe", "digiblocks")
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
