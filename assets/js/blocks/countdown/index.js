(() => {
  // blocks/countdown/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    TabPanel,
    ToggleControl,
    TextControl,
    DateTimePicker,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl,
    BaseControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;
  var CountdownEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
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
      animationDuration,
      animationDelay,
      displaySeparator,
      separatorType,
      boxesEqual,
      style,
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
    const [timeRemaining, setTimeRemaining] = useState({
      days: 30,
      hours: 23,
      minutes: 59,
      seconds: 59
    });
    const [isAnimating, setIsAnimating] = useState(false);
    const countdownIntervalRef = useRef(null);
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
    const [activeStyleTab, setActiveStyleTab] = useState("normal");
    useEffect(() => {
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
      };
    }, [endDate, setAttributes]);
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
    const boxStyleOptions = [
      { label: __("Default", "digiblocks"), value: "default" },
      { label: __("Filled", "digiblocks"), value: "filled" },
      { label: __("Outlined", "digiblocks"), value: "outlined" },
      { label: __("Pill", "digiblocks"), value: "pill" },
      { label: __("Rounded", "digiblocks"), value: "rounded" },
      { label: __("Circle", "digiblocks"), value: "circle" }
    ];
    const labelPositionOptions = [
      { label: __("Bottom", "digiblocks"), value: "bottom" },
      { label: __("Top", "digiblocks"), value: "top" },
      { label: __("Inside", "digiblocks"), value: "inside" }
    ];
    const styleOptions = [
      { label: __("Boxes", "digiblocks"), value: "boxes" },
      { label: __("Simple", "digiblocks"), value: "simple" }
    ];
    const separatorTypeOptions = [
      { label: __("Colon", "digiblocks"), value: "colon" },
      { label: __("Hyphen", "digiblocks"), value: "hyphen" },
      { label: __("Slash", "digiblocks"), value: "slash" },
      { label: __("Dot", "digiblocks"), value: "dot" }
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
    const formatTime = (value) => {
      return value.toString().padStart(2, "0");
    };
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
      const currentItemSpacing = getVal(itemSpacing, localActiveDevice);
      const currentLabelSpacing = getVal(labelSpacing, localActiveDevice);
      let titleTypographyCSS = "";
      if (titleTypography) {
        if (titleTypography.fontFamily) {
          titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
        }
        const titleFontSize = getVal(titleTypography.fontSize, activeDevice);
        if (titleFontSize) {
          titleTypographyCSS += `font-size: ${titleFontSize}${titleTypography.fontSizeUnit || "px"};`;
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
        const titleLineHeight = getVal(titleTypography.lineHeight, activeDevice);
        if (titleLineHeight) {
          titleTypographyCSS += `line-height: ${titleLineHeight}${titleTypography.lineHeightUnit || "em"};`;
        }
        const titleLetterSpacing = getVal(titleTypography.letterSpacing, activeDevice);
        if (titleLetterSpacing || titleLetterSpacing === 0) {
          titleTypographyCSS += `letter-spacing: ${titleLetterSpacing}${titleTypography.letterSpacingUnit || "px"};`;
        }
      }
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
        const contentLineHeight = getVal(contentTypography.lineHeight, activeDevice);
        if (contentLineHeight) {
          contentTypographyCSS += `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || "em"};`;
        }
        const contentLetterSpacing = getVal(contentTypography.letterSpacing, activeDevice);
        if (contentLetterSpacing || contentLetterSpacing === 0) {
          contentTypographyCSS += `letter-spacing: ${contentLetterSpacing}${contentTypography.letterSpacingUnit || "px"};`;
        }
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
      let specificStyles = "";
      if (style === "boxes") {
        switch (boxStyle) {
          case "filled":
            specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor};
							${getDimensionCSS(boxPadding, "padding", activeDevice)}
							${getDimensionCSS(boxBorderRadius, "border-radius", activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "outlined":
            specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${digitColor};
							${getDimensionCSS(boxPadding, "padding", activeDevice)}
							border-style: solid;
							${getDimensionCSS(boxBorderWidth, "border-width", activeDevice)}
							border-color: ${boxBorderColor || "#e0e0e0"};
							${getDimensionCSS(boxBorderRadius, "border-radius", activeDevice)}
							${getDimensionCSS(boxPadding, "padding", activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || "transparent"};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "pill":
            specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor};
                            border-radius: 50px;
							${getDimensionCSS(boxPadding, "padding", activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "rounded":
            specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor};
                            border-radius: 8px;
							${getDimensionCSS(boxPadding, "padding", activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "circle":
            specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            background-color: ${digitBackground || "#f0f0f0"};
                            color: ${digitColor};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							${getDimensionCSS(boxPadding, "padding", activeDevice)}
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${digitHoverBackground || digitBackground || "#e0e0e0"};
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
          case "default":
          default:
            specificStyles = `
                        .${id} .digiblocks-countdown-item-inner {
                            color: ${digitColor};
                            ${boxShadowCSS}
                        }
                        .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${digitHoverColor || digitColor};
                            ${boxShadowHoverCSS}
                        }
                    `;
            break;
        }
      } else {
        specificStyles = `
                .${id} .digiblocks-countdown-item-inner {
                    color: ${digitColor};
                }
                .${id} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${digitHoverColor || digitColor};
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
                .${id} .digiblocks-countdown-separator {
                    color: ${separatorColor};
                    font-size: ${titleTypography && titleTypography.fontSize && titleTypography.fontSize[activeDevice] ? titleTypography.fontSize[activeDevice] + (titleTypography.fontSizeUnit || "px") : "2rem"};
                }
                .${id} .digiblocks-countdown-separator::before {
                    content: "${separatorContent}";
                }
                .${id}:hover .digiblocks-countdown-separator {
                    color: ${separatorHoverColor || separatorColor};
                }
            `;
      }
      let equalWidthStyles = "";
      if (style === "boxes" && boxesEqual) {
        equalWidthStyles = `
                .${id} .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                .${id} .digiblocks-countdown-item-inner {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                }
            `;
      }
      let labelPositionStyles = "";
      if (labelPosition === "top") {
        labelPositionStyles = `
                .${id} .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                .${id} .digiblocks-countdown-label {
                    margin-bottom: ${currentLabelSpacing}px;
                    margin-top: 0;
                }
            `;
      } else if (labelPosition === "inside") {
        if (style === "boxes") {
          labelPositionStyles = `
                    .${id} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${id} .digiblocks-countdown-digit {
                        margin-bottom: ${currentLabelSpacing}px;
                    }
                    .${id} .digiblocks-countdown-label {
                        margin-top: 0;
                    }
                    .${id} .digiblocks-countdown-item-inner {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `;
        } else {
          labelPositionStyles = `
                    .${id} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${id} .digiblocks-countdown-label {
                        margin-top: ${currentLabelSpacing}px;
                    }
                `;
        }
      } else {
        labelPositionStyles = `
                .${id} .digiblocks-countdown-item {
                    flex-direction: column;
                }
                .${id} .digiblocks-countdown-label {
                    margin-top: ${currentLabelSpacing}px;
                }
            `;
      }
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
            /* Countdown Block - ${id} */
            .${id} {
				${getDimensionCSS(boxMargin, "margin", activeDevice)}
                text-align: ${align};
                display: block;
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }
            
            .${id} .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
                gap: ${currentItemSpacing}px;
            }
            
            .${id} .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            .${id} .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-countdown-digit {
                ${titleTypographyCSS}
            }
            
            .${id} .digiblocks-countdown-label {
                ${contentTypographyCSS}
                color: ${labelColor || "#666666"};
                transition: color 0.3s ease;
            }
            
            .${id}:hover .digiblocks-countdown-label {
                color: ${labelHoverColor || labelColor || "#666666"};
            }
            
            .${id} .digiblocks-countdown-expired {
                ${titleTypographyCSS}
                color: ${digitColor};
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
              label: __("Style", "digiblocks"),
              value: style,
              onChange: (value) => setAttributes({ style: value }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            styleOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                key: option.value,
                value: option.value,
                label: option.label
              }
            ))
          ), style === "boxes" && /* @__PURE__ */ wp.element.createElement(
            SelectControl,
            {
              label: __("Box Style", "digiblocks"),
              value: boxStyle,
              options: boxStyleOptions,
              onChange: (value) => setAttributes({ boxStyle: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), style === "boxes" && /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Equal Width Boxes", "digiblocks"),
              checked: !!boxesEqual,
              onChange: () => setAttributes({ boxesEqual: !boxesEqual }),
              help: __("Make all countdown boxes the same width", "digiblocks"),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            SelectControl,
            {
              label: __("Label Position", "digiblocks"),
              value: labelPosition,
              options: labelPositionOptions,
              onChange: (value) => setAttributes({ labelPosition: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Separators", "digiblocks"),
              checked: !!displaySeparator,
              onChange: () => setAttributes({ displaySeparator: !displaySeparator }),
              __nextHasNoMarginBottom: true
            }
          ), displaySeparator && /* @__PURE__ */ wp.element.createElement(
            SelectControl,
            {
              label: __("Separator Type", "digiblocks"),
              value: separatorType,
              options: separatorTypeOptions,
              onChange: (value) => setAttributes({ separatorType: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            BaseControl,
            {
              label: __("End Date & Time", "digiblocks"),
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
            TextControl,
            {
              label: __("Expired Message", "digiblocks"),
              value: expiredMessage,
              onChange: (value) => setAttributes({ expiredMessage: value }),
              placeholder: __("Time's up!", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Days Label", "digiblocks"),
              value: daysLabel,
              onChange: (value) => setAttributes({ daysLabel: value }),
              placeholder: __("Days", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Hours Label", "digiblocks"),
              value: hoursLabel,
              onChange: (value) => setAttributes({ hoursLabel: value }),
              placeholder: __("Hours", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Minutes Label", "digiblocks"),
              value: minutesLabel,
              onChange: (value) => setAttributes({ minutesLabel: value }),
              placeholder: __("Minutes", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Seconds Label", "digiblocks"),
              value: secondsLabel,
              onChange: (value) => setAttributes({ secondsLabel: value }),
              placeholder: __("Seconds", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Days", "digiblocks"),
              checked: showDays,
              onChange: () => setAttributes({ showDays: !showDays }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Hours", "digiblocks"),
              checked: showHours,
              onChange: () => setAttributes({ showHours: !showHours }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Minutes", "digiblocks"),
              checked: showMinutes,
              onChange: () => setAttributes({ showMinutes: !showMinutes }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Seconds", "digiblocks"),
              checked: showSeconds,
              onChange: () => setAttributes({ showSeconds: !showSeconds }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveControl,
            {
              label: __("Items Spacing", "digiblocks")
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
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
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveControl,
            {
              label: __("Label Spacing", "digiblocks")
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
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
                tabs: stateTabList
              },
              (tab) => {
                if (tab.name === "normal") {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Normal Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: digitColor,
                          onChange: (value) => setAttributes({ digitColor: value }),
                          label: __("Digit Color", "digiblocks")
                        },
                        ...style === "boxes" ? [
                          {
                            value: digitBackground,
                            onChange: (value) => setAttributes({ digitBackground: value }),
                            label: __("Box Background", "digiblocks")
                          }
                        ] : [],
                        {
                          value: labelColor,
                          onChange: (value) => setAttributes({ labelColor: value }),
                          label: __("Label Color", "digiblocks")
                        },
                        ...displaySeparator ? [
                          {
                            value: separatorColor,
                            onChange: (value) => setAttributes({ separatorColor: value }),
                            label: __("Separator Color", "digiblocks")
                          }
                        ] : [],
                        ...style === "boxes" && boxStyle === "outlined" ? [
                          {
                            value: boxBorderColor,
                            onChange: (value) => setAttributes({ boxBorderColor: value }),
                            label: __("Border Color", "digiblocks")
                          }
                        ] : []
                      ]
                    }
                  );
                } else {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Hover Colors", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: digitHoverColor,
                          onChange: (value) => setAttributes({ digitHoverColor: value }),
                          label: __("Digit Color", "digiblocks")
                        },
                        ...style === "boxes" ? [
                          {
                            value: digitHoverBackground,
                            onChange: (value) => setAttributes({ digitHoverBackground: value }),
                            label: __("Box Background", "digiblocks")
                          }
                        ] : [],
                        {
                          value: labelHoverColor,
                          onChange: (value) => setAttributes({ labelHoverColor: value }),
                          label: __("Label Color", "digiblocks")
                        },
                        ...displaySeparator ? [
                          {
                            value: separatorHoverColor,
                            onChange: (value) => setAttributes({ separatorHoverColor: value }),
                            label: __("Separator Color", "digiblocks")
                          }
                        ] : []
                      ]
                    }
                  );
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
                label: __("Digit Typography", "digiblocks"),
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
              TypographyControl,
              {
                label: __("Label Typography", "digiblocks"),
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
          ), style === "boxes" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "boxStyles",
              title: __("Box Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
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
              ResponsiveControl,
              {
                label: __("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
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
          )));
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
              ResponsiveControl,
              {
                label: __("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
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
                disabled: isAnimating,
                style: { width: "100%" }
              },
              isAnimating ? __("Animating...", "digiblocks") : __("Preview Animation", "digiblocks")
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
      className: `digiblocks-countdown ${id} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    if (!showDays && !showHours && !showMinutes && !showSeconds) {
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
        CustomTabPanel,
        {
          tabs: tabList,
          activeTab,
          onSelect: setActiveTab
        },
        renderTabContent()
      )), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps, style: { textAlign: align } }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-error" }, __("Please enable at least one time unit in the block settings.", "digiblocks"))));
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
          /* @__PURE__ */ wp.element.createElement("div", { key: "days", className: "digiblocks-countdown-item digiblocks-countdown-days" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(days)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || __("Days", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(days))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || __("Days", "digiblocks")))
        );
        if (displaySeparator && (showHours || showMinutes || showSeconds)) {
          items.push(
            /* @__PURE__ */ wp.element.createElement("div", { key: "days-separator", className: "digiblocks-countdown-separator" })
          );
        }
      }
      if (showHours) {
        items.push(
          /* @__PURE__ */ wp.element.createElement("div", { key: "hours", className: "digiblocks-countdown-item digiblocks-countdown-hours" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(hours)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || __("Hours", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(hours))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || __("Hours", "digiblocks")))
        );
        if (displaySeparator && (showMinutes || showSeconds)) {
          items.push(
            /* @__PURE__ */ wp.element.createElement("div", { key: "hours-separator", className: "digiblocks-countdown-separator" })
          );
        }
      }
      if (showMinutes) {
        items.push(
          /* @__PURE__ */ wp.element.createElement("div", { key: "minutes", className: "digiblocks-countdown-item digiblocks-countdown-minutes" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(minutes)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || __("Minutes", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(minutes))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || __("Minutes", "digiblocks")))
        );
        if (displaySeparator && showSeconds) {
          items.push(
            /* @__PURE__ */ wp.element.createElement("div", { key: "minutes-separator", className: "digiblocks-countdown-separator" })
          );
        }
      }
      if (showSeconds) {
        items.push(
          /* @__PURE__ */ wp.element.createElement("div", { key: "seconds", className: "digiblocks-countdown-item digiblocks-countdown-seconds" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(seconds)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || __("Seconds", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, formatTime(seconds))), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || __("Seconds", "digiblocks")))
        );
      }
      return items;
    };
    const isCountdownExpired = timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0;
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, isCountdownExpired ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-expired" }, expiredMessage || __("Time's up!", "digiblocks")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-container" }, renderCountdownItems())));
  };
  var edit_default = CountdownEdit;

  // blocks/countdown/save.js
  var { useBlockProps: useBlockProps2 } = window.wp.blockEditor;
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
      animationDuration,
      animationDelay,
      align,
      style,
      boxesEqual,
      labelPosition
    } = attributes;
    const blockClasses = [
      "digiblocks-countdown",
      id,
      `align-${align}`,
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
      style === "boxes" ? "digiblocks-countdown-boxes" : "digiblocks-countdown-simple",
      boxesEqual ? "digiblocks-countdown-equal-width" : "",
      `digiblocks-countdown-labels-${labelPosition}`,
      displaySeparator ? "digiblocks-countdown-has-separators" : "",
      displaySeparator ? `digiblocks-countdown-separator-${separatorType}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null,
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
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-container" }, showDays && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-days" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || "Days")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, daysLabel || "Days")), displaySeparator && (showHours || showMinutes || showSeconds) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-separator" })), showHours && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-hours" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || "Hours")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, hoursLabel || "Hours")), displaySeparator && (showMinutes || showSeconds) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-separator" })), showMinutes && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-minutes" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || "Minutes")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, minutesLabel || "Minutes")), displaySeparator && showSeconds && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-separator" })), showSeconds && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item digiblocks-countdown-seconds" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-item-inner" }, labelPosition === "inside" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00"), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || "Seconds")) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-digit" }, "00")), labelPosition !== "inside" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-label" }, secondsLabel || "Seconds"))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-countdown-expired", style: { display: "none" } }, expiredMessage || "Time's up!"));
  };
  var save_default = CountdownSave;

  // blocks/countdown/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
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
    keywords: [__2("countdown", "digiblocks"), __2("timer", "digiblocks"), __2("clock", "digiblocks")],
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
        default: __2("Days", "digiblocks")
      },
      hoursLabel: {
        type: "string",
        default: __2("Hours", "digiblocks")
      },
      minutesLabel: {
        type: "string",
        default: __2("Minutes", "digiblocks")
      },
      secondsLabel: {
        type: "string",
        default: __2("Seconds", "digiblocks")
      },
      digitColor: {
        type: "string",
        default: ""
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
        default: ""
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
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxPadding: {
        type: "object",
        default: {
          desktop: { top: 10, right: 10, bottom: 10, left: 10, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxMargin: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxBorderColor: {
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
      },
      itemSpacing: {
        type: "object",
        default: {
          desktop: 48,
          tablet: "",
          mobile: ""
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
          tablet: "",
          mobile: ""
        }
      },
      titleTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 70, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.2, tablet: "", mobile: "" },
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
          fontWeight: "",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.4, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      expiredMessage: {
        type: "string",
        default: __2("Time's up!", "digiblocks")
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
    edit: edit_default,
    save: save_default
  });
})();
