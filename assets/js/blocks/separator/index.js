(() => {
  // blocks/separator/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar
  } = window.wp.blockEditor;
  var {
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    TextControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl,
    BaseControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveRangeControl, TypographyControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;
  var SeparatorStylePreview = ({ style, primaryColor, secondaryColor, isSelected, onClick }) => {
    const containerStyle = {
      display: "inline-flex",
      flexDirection: "column",
      width: "60px",
      height: "60px",
      margin: "5px",
      border: `1px solid ${isSelected ? "#007cba" : "#ddd"}`,
      backgroundColor: isSelected ? "rgba(0,124,186,0.1)" : "white",
      borderRadius: "4px",
      cursor: "pointer",
      overflow: "hidden",
      transition: "all 0.2s ease"
    };
    const labelStyle = {
      textAlign: "center",
      fontSize: "10px",
      padding: "3px 0",
      fontWeight: isSelected ? "500" : "normal",
      borderBottom: `1px solid ${isSelected ? "#e0e0e0" : "transparent"}`,
      backgroundColor: isSelected ? "rgba(0,124,186,0.05)" : "transparent"
    };
    const previewStyle = {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "8px"
    };
    let previewContent = null;
    switch (style) {
      case "line":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: primaryColor, borderRadius: "1px" } });
        break;
      case "dashed":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "2px",
          backgroundImage: `linear-gradient(to right, ${primaryColor} 50%, transparent 50%)`,
          backgroundSize: "8px 2px",
          backgroundRepeat: "repeat-x",
          borderRadius: "1px"
        } });
        break;
      case "dotted":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "3px",
          backgroundImage: `radial-gradient(circle, ${primaryColor} 1px, transparent 1px)`,
          backgroundSize: "4px 3px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x"
        } });
        break;
      case "double":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", flexDirection: "column", width: "100%", gap: "2px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { height: "1px", backgroundColor: primaryColor, borderRadius: "1px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { height: "1px", backgroundColor: primaryColor, borderRadius: "1px" } }));
        break;
      case "gradient":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "3px",
          background: `linear-gradient(to right, ${secondaryColor || "transparent"}, ${primaryColor}, ${secondaryColor || "transparent"})`,
          borderRadius: "1px"
        } });
        break;
      case "shadow":
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
          width: "100%",
          height: "2px",
          backgroundColor: primaryColor,
          boxShadow: `0 1px 2px rgba(0,0,0,0.3)`,
          borderRadius: "1px"
        } });
        break;
      case "wave":
        previewContent = /* @__PURE__ */ wp.element.createElement("svg", { height: "20", width: "100%", viewBox: "0 0 100 20", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M0,10 C20,5 30,15 50,10 C70,5 80,15 100,10 L100,20 L0,20 Z", fill: primaryColor }));
        break;
      case "zigzag":
        previewContent = /* @__PURE__ */ wp.element.createElement("svg", { height: "10", width: "100%", viewBox: "0 0 100 10", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement(
          "polyline",
          {
            points: "0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0",
            fill: "none",
            stroke: primaryColor,
            strokeWidth: "2"
          }
        ));
        break;
      case "slant":
        previewContent = /* @__PURE__ */ wp.element.createElement("svg", { height: "10", width: "100%", viewBox: "0 0 100 10", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("polygon", { points: "0,0 100,10 100,0", fill: primaryColor }));
        break;
      default:
        previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: primaryColor, borderRadius: "1px" } });
    }
    const getDisplayName = () => {
      switch (style) {
        case "line":
          return "Line";
        case "dashed":
          return "Dashed";
        case "dotted":
          return "Dotted";
        case "double":
          return "Double";
        case "gradient":
          return "Gradient";
        case "shadow":
          return "Shadow";
        case "wave":
          return "Wave";
        case "zigzag":
          return "Zigzag";
        case "slant":
          return "Slant";
        default:
          return style.charAt(0).toUpperCase() + style.slice(1);
      }
    };
    return /* @__PURE__ */ wp.element.createElement("div", { style: containerStyle, onClick }, /* @__PURE__ */ wp.element.createElement("div", { style: labelStyle }, getDisplayName()), /* @__PURE__ */ wp.element.createElement("div", { style: previewStyle }, previewContent));
  };
  var SeparatorEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      contentType,
      content,
      align,
      iconValue,
      separatorStyle,
      primaryColor,
      secondaryColor,
      width,
      widthUnit,
      height,
      heightUnit,
      borderRadius,
      margin,
      animation,
      animationDuration,
      animationDelay,
      typography,
      iconSize,
      gap,
      textColor,
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
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const [activeTab, setActiveTab] = useState("options");
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
          animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
    };
    const widthUnitOptions = [
      { label: "px", value: "px" },
      { label: "%", value: "%" }
    ];
    const heightUnitOptions = [
      { label: "px", value: "px" },
      { label: "%", value: "%" }
    ];
    const contentTypeOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Text", "digiblocks"), value: "text" },
      { label: __("Icon", "digiblocks"), value: "icon" }
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
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const renderStyleSVG = () => {
      switch (separatorStyle) {
        case "wave":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z", fill: primaryColor }));
        case "zigzag":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0", fill: primaryColor }));
        case "slant":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M1200 120L0 16.48 0 0 1200 0 1200 120z", fill: primaryColor }));
        default:
          return null;
      }
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
      const activeDevice = window.digi.responsiveState.activeDevice;
      let separatorBaseStyles = "";
      const marginValue = margin[activeDevice] || { top: 30, bottom: 30, unit: "px" };
      const currentWidth = width[activeDevice] || 100;
      const currentHeight = height[activeDevice] || 3;
      let separatorSpecificStyles = "";
      let beforeAfterStyles = "";
      switch (separatorStyle) {
        case "line":
          separatorBaseStyles = `
                    background-color: ${primaryColor};
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                `;
          break;
        case "dashed":
          separatorBaseStyles = `
                    border-top: ${currentHeight}${heightUnit} dashed ${primaryColor};
                    width: ${currentWidth}${widthUnit};
                `;
          break;
        case "dotted":
          separatorBaseStyles = `
                    border-top: ${currentHeight}${heightUnit} dotted ${primaryColor};
                    width: ${currentWidth}${widthUnit};
                `;
          break;
        case "double":
          separatorBaseStyles = `
                    border-top: ${Math.max(1, Math.floor(currentHeight / 3))}${heightUnit} solid ${primaryColor};
                    border-bottom: ${Math.max(1, Math.floor(currentHeight / 3))}${heightUnit} solid ${primaryColor};
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                `;
          break;
        case "gradient":
          separatorBaseStyles = `
                    background: linear-gradient(90deg, ${secondaryColor || "transparent"} 0%, ${primaryColor} 50%, ${secondaryColor || "transparent"} 100%);
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                `;
          break;
        case "shadow":
          separatorBaseStyles = `
                    height: ${currentHeight}${heightUnit};
                    width: ${currentWidth}${widthUnit};
                    background-color: ${primaryColor};
                    border-radius: ${borderRadius[activeDevice] || 0}px;
                    box-shadow: 0 ${Math.max(2, currentHeight / 2)}px ${Math.max(4, currentHeight)}px rgba(0,0,0,0.2);
                `;
          break;
        case "wave":
        case "zigzag":
        case "slant":
          separatorBaseStyles = `
                    width: 100%;
                    height: 100%;
                    position: relative;
                `;
          separatorSpecificStyles = `
                    .${id} .digiblocks-separator-shape {
                        width: 100%;
                        height: 100%;
                    }
                    .${id} .digiblocks-separator-shape svg {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                `;
          break;
      }
      let contentStyles = "";
      if ((contentType === "text" || contentType === "icon") && !["wave", "zigzag", "slant"].includes(separatorStyle)) {
        const currentGap = gap[activeDevice] || 15;
        contentStyles = `
                .${id} .digiblocks-separator-content {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 0 ${currentGap}px;
                    ${contentType === "text" && textColor ? `color: ${textColor};` : ""}
                }
                
                .${id}.digiblocks-separator-has-content .digiblocks-separator-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    transform: translateY(-50%);
                }
            `;
      }
      if (contentType === "icon" && iconValue && iconValue.svg) {
        contentStyles += `
                .${id} .digiblocks-separator-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .${id} .digiblocks-separator-icon svg {
                    width: ${getVal(iconSize, activeDevice) || 24}px;
					height: ${getVal(iconSize, activeDevice) || 24}px;
                    fill: ${textColor || primaryColor};
                }
            `;
      }
      if (contentType === "text" && typography) {
        let typographyStyles = "";
        if (typography.fontFamily) {
          typographyStyles += `font-family: ${typography.fontFamily};`;
        }
        const fontSize = getVal(typography.fontSize, activeDevice);
        if (fontSize) {
          typographyStyles += `font-size: ${fontSize}${typography.fontSizeUnit || "px"};`;
        }
        if (typography.fontWeight) {
          typographyStyles += `font-weight: ${typography.fontWeight};`;
        }
        if (typography.fontStyle) {
          typographyStyles += `font-style: ${typography.fontStyle};`;
        }
        if (typography.textTransform) {
          typographyStyles += `text-transform: ${typography.textTransform};`;
        }
        const lineHeight = getVal(typography.lineHeight, activeDevice);
        if (lineHeight) {
          typographyStyles += `line-height: ${lineHeight}${typography.lineHeightUnit || "em"};`;
        }
        const letterSpacing = getVal(typography.letterSpacing, activeDevice);
        if (letterSpacing || letterSpacing === 0) {
          typographyStyles += `letter-spacing: ${letterSpacing}${typography.letterSpacingUnit || "px"};`;
        }
        contentStyles += `
                .${id} .digiblocks-separator-text {
                    ${typographyStyles}
                }
            `;
      }
      let alignmentStyles = "";
      switch (align) {
        case "center":
          alignmentStyles = "margin-left: auto; margin-right: auto;";
          break;
        case "right":
          alignmentStyles = "margin-left: auto; margin-right: 0;";
          break;
        default:
          alignmentStyles = "margin-left: 0; margin-right: auto;";
          break;
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
            /* Separator Block - ${id} */
            .${id} {
                margin-top: ${marginValue.top}${marginValue.unit};
                margin-bottom: ${marginValue.bottom}${marginValue.unit};
                display: flex;
                align-items: center;
                justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
                position: relative;
                clear: both;
                width: 100%;
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
				${transformHoverCSS}
            }
            
            .${id} .digiblocks-separator-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
                width: 100%;
            }
            
            .${id} .digiblocks-separator-line {
                ${separatorBaseStyles}
                ${alignmentStyles}
            }
            
            ${separatorSpecificStyles}
            ${contentStyles}
            
            /* Responsive styles will be handled by media queries */
            @media (max-width: 991px) {
                .${id} {
                    margin-top: ${margin.tablet ? margin.tablet.top + (margin.tablet.unit || "px") : marginValue.top + marginValue.unit};
                    margin-bottom: ${margin.tablet ? margin.tablet.bottom + (margin.tablet.unit || "px") : marginValue.bottom + marginValue.unit};
                }
                
                .${id} .digiblocks-separator-line {
                    width: ${width.tablet ? width.tablet + widthUnit : currentWidth + widthUnit};
                    height: ${height.tablet ? height.tablet + heightUnit : currentHeight + heightUnit};
                    ${borderRadius.tablet ? `border-radius: ${borderRadius.tablet}px;` : ""}
                }
                
                ${contentType === "icon" ? `
                .${id} .digiblocks-separator-icon svg {
                    width: ${iconSize.tablet || 20}px;
                    height: ${iconSize.tablet || 20}px;
                }` : ""}
            }
            
            @media (max-width: 767px) {
                .${id} {
                    margin-top: ${margin.mobile ? margin.mobile.top + (margin.mobile.unit || "px") : marginValue.top + marginValue.unit};
                    margin-bottom: ${margin.mobile ? margin.mobile.bottom + (margin.mobile.unit || "px") : marginValue.bottom + marginValue.unit};
                }
                
                .${id} .digiblocks-separator-line {
                    width: ${width.mobile ? width.mobile + widthUnit : currentWidth + widthUnit};
                    height: ${height.mobile ? height.mobile + heightUnit : currentHeight + heightUnit};
                    ${borderRadius.mobile ? `border-radius: ${borderRadius.mobile}px;` : ""}
                }
                
                ${contentType === "icon" ? `
                .${id} .digiblocks-separator-icon svg {
                    width: ${iconSize.mobile || 16}px;
                    height: ${iconSize.mobile || 16}px;
                }` : ""}
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
      if (!iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-icon" }, /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: iconValue.svg
          }
        }
      ));
    };
    const renderSeparatorStyleGrid = () => {
      const separatorStyleOptions = [
        { label: "Line", value: "line" },
        { label: "Dashed", value: "dashed" },
        { label: "Dotted", value: "dotted" },
        { label: "Double", value: "double" },
        { label: "Gradient", value: "gradient" },
        { label: "Shadow", value: "shadow" },
        { label: "Wave", value: "wave" },
        { label: "Zigzag", value: "zigzag" },
        { label: "Slant", value: "slant" }
      ];
      const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        justifyContent: "center",
        margin: "0 -5px",
        maxHeight: "200px",
        overflow: "auto",
        padding: "4px 0",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9"
      };
      return /* @__PURE__ */ wp.element.createElement("div", { style: containerStyle }, separatorStyleOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
        SeparatorStylePreview,
        {
          key: option.value,
          style: option.value,
          primaryColor: primaryColor || "#1e73be",
          secondaryColor,
          isSelected: separatorStyle === option.value,
          onClick: () => {
            if (["wave", "zigzag", "slant"].includes(option.value) && contentType !== "none") {
              setAttributes({
                separatorStyle: option.value,
                contentType: "none"
              });
            } else {
              setAttributes({ separatorStyle: option.value });
            }
          }
        }
      )));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement(
            BaseControl,
            {
              label: __("Separator Style", "digiblocks"),
              id: "separator-style-selector",
              __nextHasNoMarginBottom: true
            },
            renderSeparatorStyleGrid()
          ), !["wave", "zigzag", "slant"].includes(separatorStyle) ? /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl,
            {
              label: __("Content Type", "digiblocks"),
              value: contentType,
              onChange: (value) => setAttributes({ contentType: value }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            contentTypeOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                key: option.value,
                value: option.value,
                label: option.label
              }
            ))
          ) : /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-warning", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, __("Content is not available with this separator style.", "digiblocks"))), contentType === "text" && /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Text Content", "digiblocks"),
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), contentType === "icon" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
            FontAwesomeControl,
            {
              label: __("Select Icon", "digiblocks"),
              value: iconValue,
              onChange: setIconValue
            }
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
              PanelColorSettings,
              {
                title: __("Separator Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: primaryColor,
                    onChange: (value) => setAttributes({ primaryColor: value }),
                    label: __("Primary Color", "digiblocks")
                  },
                  ...separatorStyle === "gradient" ? [
                    {
                      value: secondaryColor,
                      onChange: (value) => setAttributes({ secondaryColor: value }),
                      label: __("Secondary Color", "digiblocks")
                    }
                  ] : [],
                  ...contentType !== "none" ? [
                    {
                      value: textColor,
                      onChange: (value) => setAttributes({ textColor: value }),
                      label: contentType === "text" ? __("Text Color", "digiblocks") : __("Icon Color", "digiblocks")
                    }
                  ] : []
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "dimensions",
              title: __("Dimensions", "digiblocks"),
              initialOpen: false
            },
            !["wave", "zigzag", "slant"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Width", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                disabled: width[localActiveDevice] === 100,
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  width: {
                    ...width,
                    [localActiveDevice]: 100
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                value: widthUnit,
                onChange: (value) => setAttributes({ widthUnit: value }),
                isBlock: true,
                isSmall: true,
                hideLabelFromVision: true,
                "aria-label": __("Width Unit", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              widthUnitOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                value: width[localActiveDevice],
                onChange: (value) => setAttributes({
                  width: {
                    ...width,
                    [localActiveDevice]: value
                  }
                }),
                min: 1,
                max: widthUnit === "%" ? 100 : 1e3,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Height", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                disabled: height[localActiveDevice] === 3,
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  height: {
                    ...height,
                    [localActiveDevice]: 3
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                value: heightUnit,
                onChange: (value) => setAttributes({ heightUnit: value }),
                isBlock: true,
                isSmall: true,
                hideLabelFromVision: true,
                "aria-label": __("Height Unit", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              heightUnitOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
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
                max: heightUnit === "%" ? 20 : 100,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))))))),
            ["line", "gradient", "shadow"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Border Radius", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-unit-control" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                value: borderRadius[localActiveDevice],
                onChange: (value) => setAttributes({
                  borderRadius: {
                    ...borderRadius,
                    [localActiveDevice]: value
                  }
                }),
                min: 0,
                max: 50,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))),
            (contentType === "text" || contentType === "icon") && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Gap", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-unit-control" }, /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                value: gap[localActiveDevice],
                onChange: (value) => setAttributes({
                  gap: {
                    ...gap,
                    [localActiveDevice]: value
                  }
                }),
                min: 0,
                max: 100,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))),
            contentType === "icon" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Icon Size", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                type: "button",
                "aria-label": __(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks"),
                className: `components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`,
                onClick: () => window.digi.responsiveState.toggleDevice()
              },
              window.digi.icons.deviceIcons[localActiveDevice]
            ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-unit-control" }, /* @__PURE__ */ wp.element.createElement(
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
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-margin-control" }, /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  label: __("Top", "digiblocks"),
                  value: margin[localActiveDevice]?.top || 30,
                  onChange: (value) => {
                    const updatedMargin = {
                      ...margin,
                      [localActiveDevice]: {
                        ...margin[localActiveDevice],
                        top: value,
                        unit: margin[localActiveDevice]?.unit || "px"
                      }
                    };
                    setAttributes({ margin: updatedMargin });
                  },
                  min: 0,
                  max: 200,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              ), /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  label: __("Bottom", "digiblocks"),
                  value: margin[localActiveDevice]?.bottom || 30,
                  onChange: (value) => {
                    const updatedMargin = {
                      ...margin,
                      [localActiveDevice]: {
                        ...margin[localActiveDevice],
                        bottom: value,
                        unit: margin[localActiveDevice]?.unit || "px"
                      }
                    };
                    setAttributes({ margin: updatedMargin });
                  },
                  min: 0,
                  max: 200,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              ))
            )
          ), contentType === "text" && /* @__PURE__ */ wp.element.createElement(
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
                label: __("Text Typography", "digiblocks"),
                value: typography,
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
                  lineHeightUnit: "em"
                }
              }
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
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
    const blockProps = useBlockProps({
      className: `digiblocks-separator ${id} ${contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) ? "digiblocks-separator-has-content" : ""} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-container" }, contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-content" }, contentType === "text" && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-separator-text" }, content), contentType === "icon" && renderIcon()), ["wave", "zigzag", "slant"].includes(separatorStyle) ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-shape" }, renderStyleSVG()) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-line" }))));
  };
  var edit_default = SeparatorEdit;

  // blocks/separator/save.js
  var { useBlockProps: useBlockProps2, RichText } = window.wp.blockEditor;
  var SeparatorSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      contentType,
      content,
      align,
      iconValue,
      separatorStyle,
      primaryColor,
      secondaryColor,
      animation,
      animationDuration,
      animationDelay
    } = attributes;
    const renderStyleSVG = () => {
      switch (separatorStyle) {
        case "wave":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z", fill: primaryColor }));
        case "zigzag":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0", fill: primaryColor }));
        case "slant":
          return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M1200 120L0 16.48 0 0 1200 0 1200 120z", fill: primaryColor }));
        default:
          return null;
      }
    };
    const renderIcon = () => {
      if (!iconValue || !iconValue.svg || iconValue.svg.trim() === "") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: iconValue.svg } }));
    };
    const blockClasses = [
      "digiblocks-separator",
      id,
      contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) ? "digiblocks-separator-has-content" : "",
      `align-${align}`,
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null,
      "data-separator-style": separatorStyle
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-container" }, contentType !== "none" && !["wave", "zigzag", "slant"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-content" }, contentType === "text" && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-separator-text" }, content), contentType === "icon" && renderIcon()), ["wave", "zigzag", "slant"].includes(separatorStyle) ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-shape" }, renderStyleSVG()) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-separator-line" })));
  };
  var save_default = SeparatorSave;

  // blocks/separator/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/separator", {
    apiVersion: 2,
    title: digiBlocksData.blocks["separator"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["separator"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["separator"].description,
    keywords: [__2("separator", "digiblocks"), __2("divider", "digiblocks"), __2("horizontal rule", "digiblocks"), __2("hr", "digiblocks")],
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
      contentType: {
        type: "string",
        default: "none"
      },
      content: {
        type: "string",
        default: "Separator"
      },
      iconValue: {
        type: "object",
        default: null
      },
      separatorStyle: {
        type: "string",
        default: "line"
      },
      primaryColor: {
        type: "string",
        default: "#222222"
      },
      secondaryColor: {
        type: "string",
        default: "#f0f0f0"
      },
      textColor: {
        type: "string",
        default: "#333333"
      },
      width: {
        type: "object",
        default: {
          desktop: 100,
          tablet: "",
          mobile: ""
        }
      },
      widthUnit: {
        type: "string",
        default: "%"
      },
      height: {
        type: "object",
        default: {
          desktop: 3,
          tablet: "",
          mobile: ""
        }
      },
      heightUnit: {
        type: "string",
        default: "px"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: 0,
          tablet: "",
          mobile: ""
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: {
            top: 30,
            bottom: 30,
            unit: "px"
          },
          tablet: {
            top: "",
            bottom: "",
            unit: "px"
          },
          mobile: {
            top: "",
            bottom: "",
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
      animationDuration: {
        type: "string",
        default: "normal"
      },
      animationDelay: {
        type: "number",
        default: ""
      },
      typography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 24,
          tablet: "",
          mobile: ""
        }
      },
      gap: {
        type: "object",
        default: {
          desktop: 15,
          tablet: "",
          mobile: ""
        }
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
        separatorStyle: "gradient",
        primaryColor: "#1e73be",
        secondaryColor: "#f0f0f0",
        width: { desktop: 80 },
        height: { desktop: 4 },
        contentType: "text",
        content: "Section",
        textColor: "#333333"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
