(() => {
  // blocks/counter/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar
  } = window.wp.blockEditor;
  var {
    TabPanel,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var CounterEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      displayIcon,
      iconSource,
      customSvg,
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
      numberWithCommas
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [isAnimating, setIsAnimating] = useState(false);
    const [counterValue, setCounterValue] = useState(startNumber || 0);
    const [isCounterAnimating, setIsCounterAnimating] = useState(false);
    const [activeColorTab, setActiveColorTab] = useState("normal");
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
    const setIconValue = (newIcon) => {
      setAttributes({ iconValue: newIcon });
    };
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
    const layoutOptions = [
      { label: __("Stacked", "digiblocks"), value: "stacked" },
      { label: __("Inline", "digiblocks"), value: "inline" },
      { label: __("Centered", "digiblocks"), value: "centered" }
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
        borderCSS = "border-style: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      const paddingCSS = `${getDimensionCSS(padding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice)}`;
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
          iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || "#e0e0e0"};
					${getDimensionCSS(iconBorderWidth, "border-width", activeDevice)}
					${getDimensionCSS(iconBorderRadius, "border-radius", activeDevice)}
                `;
        }
        if (iconPadding && iconPadding[activeDevice]) {
          iconCSS += `${getDimensionCSS(iconPadding, "padding", activeDevice)}`;
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
          iconMarginCSS = `${getDimensionCSS(iconMargin, "margin", activeDevice)}`;
        } else {
          const defaultBottom = activeDevice === "desktop" ? 20 : activeDevice === "tablet" ? 15 : 10;
          iconMarginCSS = `margin: 0px 0px ${defaultBottom}px 0px;`;
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
            .${id} {
                background-color: ${backgroundColor || "transparent"};
                ${boxShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                transition: all 0.3s ease;
                text-align: ${align || "center"};
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${hoverCSS}
            }
            
            /* Layout styles */
            .${id} .digiblocks-counter-inner {
                display: flex;
                flex-direction: ${layoutStyle === "inline" ? "row" : "column"};
                align-items: ${layoutStyle === "inline" ? "center" : align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"};
                justify-content: ${layoutStyle === "inline" ? "flex-start" : "center"};
                gap: ${verticalSpacing || 15}px;
                ${layoutStyle === "centered" ? "text-align: center;" : ""}
            }
            
            ${displayIcon && iconValue && iconValue.svg ? `
            /* Icon styles */
            .${id} .digiblocks-counter-icon {
				${iconMarginCSS}
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${iconCSS}
                transition: all 0.3s ease;
            }

            .${id} .digiblocks-counter-icon span {
                display: flex;
            }

            .${id} .digiblocks-counter-icon svg {
                width: ${iconSize && iconSize[activeDevice] ? iconSize[activeDevice] : 32}px;
                height: 100%;
                fill: ${iconColor || "inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${id}:hover .digiblocks-counter-icon {
                ${iconHoverCSS}
            }
            
            .${id}:hover .digiblocks-counter-icon svg {
                ${iconHoverColor ? `fill: ${iconHoverColor};` : ""}
            }
            ` : ""}
            
            /* Counter styles */
            .${id} .digiblocks-counter-number-wrapper {
                display: flex;
                align-items: center;
                justify-content: ${align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"};
                margin-bottom: 10px;
            }
            
            .${id} .digiblocks-counter-prefix {
                margin-right: ${counterPrefixSpacing || 5}px;
                color: ${counterColor};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-counter-suffix {
                margin-left: ${counterSuffixSpacing || 5}px;
                color: ${counterColor};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-counter-number {
                color: ${counterColor};
                ${typographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Counter hover styles */
            .${id}:hover .digiblocks-counter-number,
            .${id}:hover .digiblocks-counter-prefix,
            .${id}:hover .digiblocks-counter-suffix {
                ${counterHoverColor ? `color: ${counterHoverColor};` : ""}
            }
            
            /* Title styles */
            .${id} .digiblocks-counter-title {
                color: ${titleColor || "inherit"};
                margin-bottom: 10px;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${id}:hover .digiblocks-counter-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            /* Content styles */
            .${id} .digiblocks-counter-description {
                color: ${textColor || "inherit"};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${id}:hover .digiblocks-counter-description {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
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
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const renderIcon = () => {
      if (iconSource === "library" && iconValue && iconValue.svg && iconValue.svg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-icon" }, /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: iconValue.svg
            }
          }
        ));
      }
      if (iconSource === "custom" && customSvg && customSvg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-icon" }, /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: customSvg
            }
          }
        ));
      }
      return null;
    };
    const renderColorTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Counter Colors", "digiblocks"),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: counterColor,
                onChange: (value) => setAttributes({ counterColor: value }),
                label: __("Counter Color", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Content Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __("Title Color", "digiblocks")
              },
              {
                value: textColor,
                onChange: (value) => setAttributes({ textColor: value }),
                label: __("Description Color", "digiblocks")
              }
            ]
          }
        ), displayIcon && /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Icon Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconColor,
                onChange: (value) => setAttributes({ iconColor: value }),
                label: __("Icon Color", "digiblocks")
              },
              {
                value: iconBackgroundColor,
                onChange: (value) => setAttributes({ iconBackgroundColor: value }),
                label: __("Icon Background", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Block Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({ backgroundColor: value }),
                label: __("Background Color", "digiblocks")
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Counter Hover Colors", "digiblocks"),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: counterHoverColor,
                onChange: (value) => setAttributes({ counterHoverColor: value }),
                label: __("Counter Hover Color", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Content Hover Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleHoverColor,
                onChange: (value) => setAttributes({ titleHoverColor: value }),
                label: __("Title Hover Color", "digiblocks")
              },
              {
                value: textHoverColor,
                onChange: (value) => setAttributes({ textHoverColor: value }),
                label: __("Description Hover Color", "digiblocks")
              }
            ]
          }
        ), displayIcon && /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Icon Hover Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconHoverColor,
                onChange: (value) => setAttributes({ iconHoverColor: value }),
                label: __("Icon Hover Color", "digiblocks")
              },
              {
                value: iconHoverBackgroundColor,
                onChange: (value) => setAttributes({ iconHoverBackgroundColor: value }),
                label: __("Icon Hover Background", "digiblocks")
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __("Block Hover Colors", "digiblocks"),
            initialOpen: false,
            enableAlpha: true,
            colorSettings: [
              {
                value: backgroundHoverColor,
                onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                label: __("Background Hover Color", "digiblocks")
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
            ToggleControl,
            {
              label: __("Display Icon", "digiblocks"),
              checked: displayIcon,
              onChange: (value) => setAttributes({ displayIcon: value }),
              __nextHasNoMarginBottom: true
            }
          ), displayIcon && /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ wp.element.createElement(
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
          ), iconSource === "library" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
            FontAwesomeControl,
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
          ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.", "digiblocks"))), customSvg && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "15px" } }, /* @__PURE__ */ wp.element.createElement("p", null, /* @__PURE__ */ wp.element.createElement("strong", null, __("Preview:", "digiblocks"))), /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "20px", background: "#f0f0f1", borderRadius: "3px", display: "flex", justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-custom-svg-preview", style: { width: "50px", height: "50px" }, dangerouslySetInnerHTML: { __html: customSvg } }))))), /* @__PURE__ */ wp.element.createElement(
            SelectControl,
            {
              label: __("Layout Style", "digiblocks"),
              value: layoutStyle || "stacked",
              options: layoutOptions,
              onChange: (value) => setAttributes({ layoutStyle: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RangeControl,
            {
              label: __("Spacing", "digiblocks"),
              value: verticalSpacing || 15,
              onChange: (value) => setAttributes({ verticalSpacing: value }),
              min: 0,
              max: 100,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Starting Number", "digiblocks"),
              type: "number",
              value: startNumber,
              onChange: (value) => setAttributes({ startNumber: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Ending Number", "digiblocks"),
              type: "number",
              value: endNumber,
              onChange: (value) => setAttributes({ endNumber: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Counter Prefix", "digiblocks"),
              value: counterPrefix || "",
              onChange: (value) => setAttributes({ counterPrefix: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), counterPrefix && /* @__PURE__ */ wp.element.createElement(
            RangeControl,
            {
              label: __("Prefix Spacing", "digiblocks"),
              value: counterPrefixSpacing || 5,
              onChange: (value) => setAttributes({ counterPrefixSpacing: value }),
              min: 0,
              max: 30,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Counter Suffix", "digiblocks"),
              value: counterSuffix || "",
              onChange: (value) => setAttributes({ counterSuffix: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), counterSuffix && /* @__PURE__ */ wp.element.createElement(
            RangeControl,
            {
              label: __("Suffix Spacing", "digiblocks"),
              value: counterSuffixSpacing || 5,
              onChange: (value) => setAttributes({ counterSuffixSpacing: value }),
              min: 0,
              max: 30,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Title", "digiblocks"),
              value: title || "",
              onChange: (value) => setAttributes({ title: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Description", "digiblocks"),
              value: description || "",
              onChange: (value) => setAttributes({ description: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Use Thousand Separator", "digiblocks"),
              checked: numberWithCommas,
              onChange: (value) => setAttributes({ numberWithCommas: value }),
              __nextHasNoMarginBottom: true
            }
          ), numberWithCommas && /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Thousand Separator", "digiblocks"),
              value: thousandSeparator || ",",
              onChange: (value) => setAttributes({ thousandSeparator: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RangeControl,
            {
              label: __("Decimal Places", "digiblocks"),
              value: decimalPlaces || 0,
              onChange: (value) => setAttributes({ decimalPlaces: value }),
              min: 0,
              max: 10,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), decimalPlaces > 0 && /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Decimal Separator", "digiblocks"),
              value: decimalSeparator || ".",
              onChange: (value) => setAttributes({ decimalSeparator: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              isPrimary: true,
              onClick: animateCounter,
              disabled: isCounterAnimating
            },
            __("Preview Counter Animation", "digiblocks")
          ))));
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
                tabs: stateTabList,
                onSelect: (tab) => setActiveColorTab(tab.name)
              },
              (tab) => renderColorTabContent(tab.name)
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
                label: __("Counter Typography", "digiblocks"),
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
              TypographyControl,
              {
                label: __("Title Typography", "digiblocks"),
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
              TypographyControl,
              {
                label: __("Description Typography", "digiblocks"),
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
            TabPanelBody,
            {
              tab: "style",
              name: "icon",
              title: __("Icon", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
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
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: iconBorderStyle || "default",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "default" && value !== "none" && (iconBorderStyle === "default" || iconBorderStyle === "none" || !iconBorderStyle)) {
                    if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                      setAttributes({
                        iconBorderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
                          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
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
              PanelColorSettings,
              {
                title: __("Border Colors", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: iconBorderColor,
                    onChange: (value) => setAttributes({ iconBorderColor: value }),
                    label: __("Border Color", "digiblocks")
                  },
                  {
                    value: iconHoverBorderColor,
                    onChange: (value) => setAttributes({ iconHoverBorderColor: value }),
                    label: __("Border Hover Color", "digiblocks")
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
                  values: iconBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconBorderWidth: {
                      ...iconBorderWidth || {},
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
                  values: iconBorderRadius[localActiveDevice],
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
              ResponsiveControl,
              {
                label: __("Icon Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: iconPadding[localActiveDevice],
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
              ResponsiveControl,
              {
                label: __("Icon Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
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
            TabPanelBody,
            {
              tab: "style",
              name: "animation",
              title: __("Counter Animation", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Animation Duration (ms)", "digiblocks"),
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
              RangeControl,
              {
                label: __("Animation Delay (ms)", "digiblocks"),
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
                          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
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
              PanelColorSettings,
              {
                title: __("Border Color", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
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
              SelectControl,
              {
                label: __("Hover Effect", "digiblocks"),
                value: hoverEffect || "none",
                options: hoverEffectOptions,
                onChange: (value) => setAttributes({ hoverEffect: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
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
              ResponsiveControl,
              {
                label: __("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
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
    const blockProps = useBlockProps({
      className: `digiblocks-counter ${id} align-${align} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    const formattedCounter = formatNumber(counterValue);
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-inner" }, displayIcon && renderIcon(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-number-wrapper" }, counterPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-prefix" }, counterPrefix), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-number" }, formattedCounter), counterSuffix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-suffix" }, counterSuffix)), title && /* @__PURE__ */ wp.element.createElement("h3", { className: "digiblocks-counter-title" }, title), description && /* @__PURE__ */ wp.element.createElement("p", { className: "digiblocks-counter-description" }, description)))));
  };
  var edit_default = CounterEdit;

  // blocks/counter/save.js
  var { useBlockProps: useBlockProps2 } = window.wp.blockEditor;
  var CounterSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      iconSource,
      customSvg,
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
      id,
      `align-${align || "center"}`,
      `layout-${layoutStyle || "stacked"}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null,
      "data-start-value": startNumber || 0,
      "data-end-value": endNumber || 0,
      "data-animation-duration": animationDuration || 2e3,
      "data-animation-delay": animationDelay || 0,
      "data-thousand-separator": numberWithCommas ? thousandSeparator || "," : "",
      "data-decimal-places": decimalPlaces || 0,
      "data-decimal-separator": decimalSeparator || "."
    });
    const renderIcon = () => {
      if (iconSource === "library" && iconValue && iconValue.svg && iconValue.svg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: iconValue.svg } }));
      }
      if (iconSource === "custom" && customSvg && customSvg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: customSvg } }));
      }
      return null;
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-inner" }, displayIcon && renderIcon(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-counter-number-wrapper" }, counterPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-prefix" }, counterPrefix), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-number" }, startNumber || 0), counterSuffix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-counter-suffix" }, counterSuffix)), title && /* @__PURE__ */ wp.element.createElement("h3", { className: "digiblocks-counter-title" }, title), description && /* @__PURE__ */ wp.element.createElement("p", { className: "digiblocks-counter-description" }, description))));
  };
  var save_default = CounterSave;

  // blocks/counter/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
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
    keywords: [__2("counter", "digiblocks"), __2("number", "digiblocks"), __2("stats", "digiblocks"), __2("count up", "digiblocks")],
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
      displayIcon: {
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
        default: ""
      },
      counterHoverColor: {
        type: "string",
        default: ""
      },
      titleColor: {
        type: "string",
        default: ""
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
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
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
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      iconBorderRadius: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
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
    edit: edit_default,
    save: save_default
  });
})();
