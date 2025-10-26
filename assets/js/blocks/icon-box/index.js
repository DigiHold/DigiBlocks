(() => {
  // blocks/icon-box/edit.js
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
    RangeControl,
    ToggleControl,
    TabPanel,
    Spinner,
    Button,
    TextControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveButtonGroup, ResponsiveRangeControl, TransformControl } = digi.components;
  var IconBoxEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      iconSource,
      customSvg,
      iconValue,
      align,
      justifyContent,
      iconLayout,
      iconContentGap,
      showTitle,
      showContent,
      showBadge,
      badgeText,
      title,
      content,
      titleColor,
      titleHoverColor,
      textColor,
      textHoverColor,
      backgroundColor,
      backgroundHoverColor,
      iconSize,
      iconHeight,
      iconColor,
      iconBackgroundColor,
      iconBorderStyle,
      iconBorderWidth,
      iconBorderRadius,
      iconBorderColor,
      iconHoverColor,
      iconHoverBackgroundColor,
      iconHoverBorderColor,
      titleTypography,
      contentTypography,
      iconPadding,
      iconMargin,
      titlePadding,
      titleMargin,
      contentPadding,
      contentMargin,
      padding,
      margin,
      animation,
      animationDuration,
      animationDelay,
      boxShadow,
      boxShadowHover,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      borderHoverColor,
      hoverEffect,
      linkEnabled,
      linkType,
      linkUrl,
      linkOpenInNewTab,
      linkRel,
      buttonText,
      buttonBackgroundColor,
      buttonBackgroundHoverColor,
      buttonTextColor,
      buttonTextHoverColor,
      buttonBorderStyle,
      buttonBorderWidth,
      buttonBorderRadius,
      buttonBorderColor,
      buttonBorderHoverColor,
      buttonBoxShadow,
      buttonBoxShadowHover,
      buttonPadding,
      buttonMargin,
      buttonTypography,
      badgeBackgroundColor,
      badgeBackgroundHoverColor,
      badgeTextColor,
      badgeTextHoverColor,
      badgeTypography,
      badgePadding,
      badgeBorderStyle,
      badgeBorderWidth,
      badgeBorderRadius,
      badgeBorderColor,
      badgeBorderHoverColor,
      badgeBoxShadow,
      badgeBoxShadowHover,
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
    const [isAnimating, setIsAnimating] = useState(false);
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
          animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
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
    const linkTypeOptions = [
      { label: __("Box", "digiblocks"), value: "box" },
      { label: __("Button", "digiblocks"), value: "button" }
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
      const currentAlign = getVal(align, activeDevice);
      let alignCSS = "";
      if (currentAlign === "flex-start") {
        alignCSS = `
				align-items: flex-start;
				text-align: left;
			`;
      } else if (currentAlign === "center") {
        alignCSS = `
				align-items: center;
				text-align: center;
			`;
      } else if (currentAlign === "flex-end") {
        alignCSS = `
				align-items: flex-end;
				text-align: right;
			`;
      }
      const currentJustify = getVal(justifyContent, activeDevice);
      let justifyContentCSS = "";
      if (currentJustify === "flex-start") {
        justifyContentCSS = `
				justify-content: flex-start;
			`;
      } else if (currentJustify === "center") {
        justifyContentCSS = `
				justify-content: center;
			`;
      } else if (currentJustify === "flex-end") {
        justifyContentCSS = `
				justify-content: flex-end;
			`;
      }
      const currentIconLayout = getVal(iconLayout, activeDevice);
      let flexDirectionCSS = "";
      if (currentIconLayout === "above") {
        flexDirectionCSS = "flex-direction: column;";
      } else if (currentIconLayout === "after") {
        flexDirectionCSS = "flex-direction: row-reverse;";
      } else {
        flexDirectionCSS = "flex-direction: row;";
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
      const paddingCSS = `${getDimensionCSS(padding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice)}`;
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
        if (titleTypography.textDecoration) {
          titleTypographyCSS += `text-decoration: ${titleTypography.textDecoration};`;
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
      let buttonTypographyCSS = "";
      if (buttonTypography) {
        if (buttonTypography.fontFamily) {
          buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
        }
        const buttonFontSize = getVal(buttonTypography.fontSize, activeDevice);
        if (buttonFontSize) {
          buttonTypographyCSS += `font-size: ${buttonFontSize}${buttonTypography.fontSizeUnit || "px"};`;
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
        const buttonLineHeight = getVal(buttonTypography.lineHeight, activeDevice);
        if (buttonLineHeight) {
          buttonTypographyCSS += `line-height: ${buttonLineHeight}${buttonTypography.lineHeightUnit || "em"};`;
        }
        const buttonLetterSpacing = getVal(buttonTypography.letterSpacing, activeDevice);
        if (buttonLetterSpacing || buttonLetterSpacing === 0) {
          buttonTypographyCSS += `letter-spacing: ${buttonLetterSpacing}${buttonTypography.letterSpacingUnit || "px"};`;
        }
      }
      let badgeTypographyCSS = "";
      if (badgeTypography) {
        if (badgeTypography.fontFamily) {
          badgeTypographyCSS += `font-family: ${badgeTypography.fontFamily};`;
        }
        const badgeFontSize = getVal(badgeTypography.fontSize, activeDevice);
        if (badgeFontSize) {
          badgeTypographyCSS += `font-size: ${badgeFontSize}${badgeTypography.fontSizeUnit || "rem"};`;
        }
        if (badgeTypography.fontWeight) {
          badgeTypographyCSS += `font-weight: ${badgeTypography.fontWeight};`;
        }
        if (badgeTypography.fontStyle) {
          badgeTypographyCSS += `font-style: ${badgeTypography.fontStyle};`;
        }
        if (badgeTypography.textTransform) {
          badgeTypographyCSS += `text-transform: ${badgeTypography.textTransform};`;
        }
        if (badgeTypography.textDecoration) {
          badgeTypographyCSS += `text-decoration: ${badgeTypography.textDecoration};`;
        }
        const badgeLineHeight = getVal(badgeTypography.lineHeight, activeDevice);
        if (badgeLineHeight) {
          badgeTypographyCSS += `line-height: ${badgeLineHeight}${badgeTypography.lineHeightUnit || "em"};`;
        }
        const badgeLetterSpacing = getVal(badgeTypography.letterSpacing, activeDevice);
        if (badgeLetterSpacing || badgeLetterSpacing === 0) {
          badgeTypographyCSS += `letter-spacing: ${badgeLetterSpacing}${badgeTypography.letterSpacingUnit || "em"};`;
        }
      }
      let iconCSS = "";
      let iconHoverCSS = "";
      let iconMarginCSS = "";
      const hasIcon = iconValue && iconValue.svg || iconSource === "custom" && customSvg && customSvg.trim() !== "";
      if (hasIcon) {
        if (iconBackgroundColor) {
          iconCSS += `background-color: ${iconBackgroundColor};`;
        }
        if (iconPadding && iconPadding[activeDevice]) {
          iconCSS += `${getDimensionCSS(iconPadding, "padding", activeDevice)}`;
        }
        if (iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none") {
          const currentIconBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] ? iconBorderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" };
          const currentIconBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] ? iconBorderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" };
          iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || "#e0e0e0"};
					${getDimensionCSS(iconBorderWidth, "border-width", activeDevice)}
					${getDimensionCSS(iconBorderRadius, "border-radius", activeDevice)}
                `;
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
        }
      }
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      if (borderHoverColor) {
        hoverCSS += `border-color: ${borderHoverColor};`;
      }
      if (hoverEffect === "lift") {
        hoverCSS += "transform: translateY(-10px);";
      } else if (hoverEffect === "scale") {
        hoverCSS += "transform: scale(1.05);";
      } else if (hoverEffect === "glow") {
        hoverCSS += "filter: brightness(1.1);";
      }
      let linkCSS = "";
      if (linkEnabled && linkType === "box") {
        linkCSS = `
				cursor: pointer;
				text-decoration: none;
			`;
      }
      let buttonCSS = "";
      let buttonHoverCSS = "";
      if (linkEnabled && linkType === "button") {
        let buttonBorderCSS = "";
        if (buttonBorderStyle && buttonBorderStyle !== "default" && buttonBorderStyle !== "none") {
          buttonBorderCSS = `
                    border-style: ${buttonBorderStyle};
                    border-color: ${buttonBorderColor || buttonBackgroundColor};
                    ${getDimensionCSS(buttonBorderWidth, "border-width", activeDevice)}
                `;
        } else {
          buttonBorderCSS = "border-style: none;";
        }
        let buttonBoxShadowCSS = "box-shadow: none;";
        if (buttonBoxShadow && buttonBoxShadow.enable) {
          const inset = buttonBoxShadow.position === "inset" ? "inset " : "";
          buttonBoxShadowCSS = `box-shadow: ${inset}${buttonBoxShadow.horizontal}px ${buttonBoxShadow.vertical}px ${buttonBoxShadow.blur}px ${buttonBoxShadow.spread}px ${buttonBoxShadow.color};`;
        }
        const buttonPaddingCSS = `${getDimensionCSS(buttonPadding, "padding", activeDevice)}`;
        const buttonMarginCSS = `${getDimensionCSS(buttonMargin, "margin", activeDevice)}`;
        if (buttonBoxShadowHover && buttonBoxShadowHover.enable) {
          const insetHover = buttonBoxShadowHover.position === "inset" ? "inset " : "";
          buttonHoverCSS += `box-shadow: ${insetHover}${buttonBoxShadowHover.horizontal}px ${buttonBoxShadowHover.vertical}px ${buttonBoxShadowHover.blur}px ${buttonBoxShadowHover.spread}px ${buttonBoxShadowHover.color};`;
        }
        if (buttonBackgroundHoverColor) {
          buttonHoverCSS += `background-color: ${buttonBackgroundHoverColor};`;
        }
        if (buttonTextHoverColor) {
          buttonHoverCSS += `color: ${buttonTextHoverColor};`;
        }
        if (buttonBorderHoverColor) {
          buttonHoverCSS += `border-color: ${buttonBorderHoverColor};`;
        }
        buttonCSS = `
                .${id} .digiblocks-button-wrapper {
                    display: flex;
                    justify-content: ${currentAlign === "center" ? "center" : currentAlign === "flex-end" ? "flex-end" : "flex-start"};
                    ${buttonMarginCSS}
                }
                
                .${id} .digiblocks-button {
                    display: inline-block;
                    background-color: ${buttonBackgroundColor};
                    color: ${buttonTextColor};
                    ${buttonPaddingCSS}
                    ${buttonBorderCSS}
                    ${getDimensionCSS(buttonBorderRadius, "border-radius", activeDevice)}
                    ${buttonBoxShadowCSS}
                    ${buttonTypographyCSS}
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .${id} .digiblocks-button:hover {
                    ${buttonHoverCSS}
                }
            `;
      }
      let badgeCSS = "";
      if (showBadge) {
        let badgeBorderCSS = "";
        if (badgeBorderStyle && badgeBorderStyle !== "default" && badgeBorderStyle !== "none") {
          badgeBorderCSS = `
					border-style: ${badgeBorderStyle};
					border-color: ${badgeBorderColor || "#e0e0e0"};
					${getDimensionCSS(badgeBorderWidth, "border-width", activeDevice)}
				`;
        } else {
          badgeBorderCSS = "border-style: none;";
        }
        let badgeBoxShadowCSS = "box-shadow: none;";
        if (badgeBoxShadow && badgeBoxShadow.enable) {
          const inset = badgeBoxShadow.position === "inset" ? "inset " : "";
          badgeBoxShadowCSS = `box-shadow: ${inset}${badgeBoxShadow.horizontal}px ${badgeBoxShadow.vertical}px ${badgeBoxShadow.blur}px ${badgeBoxShadow.spread}px ${badgeBoxShadow.color};`;
        }
        const badgePaddingCSS = `${getDimensionCSS(badgePadding, "padding", activeDevice)}`;
        let badgeHoverCSS = "";
        if (badgeBoxShadowHover && badgeBoxShadowHover.enable) {
          const insetHover = badgeBoxShadowHover.position === "inset" ? "inset " : "";
          badgeHoverCSS += `box-shadow: ${insetHover}${badgeBoxShadowHover.horizontal}px ${badgeBoxShadowHover.vertical}px ${badgeBoxShadowHover.blur}px ${badgeBoxShadowHover.spread}px ${badgeBoxShadowHover.color};`;
        }
        if (badgeBackgroundHoverColor) {
          badgeHoverCSS += `background-color: ${badgeBackgroundHoverColor};`;
        }
        if (badgeTextHoverColor) {
          badgeHoverCSS += `color: ${badgeTextHoverColor};`;
        }
        if (badgeBorderHoverColor) {
          badgeHoverCSS += `border-color: ${badgeBorderHoverColor};`;
        }
        badgeCSS = `
				.${id} .digiblocks-icon-box-badge {
					position: absolute;
					top: 8px;
					right: 8px;
					background-color: ${badgeBackgroundColor};
					color: ${badgeTextColor};
					${badgePaddingCSS}
					${badgeBorderCSS}
					${getDimensionCSS(badgeBorderRadius, "border-radius", activeDevice)}
					${badgeBoxShadowCSS}
					${badgeTypographyCSS}
					transition: all 0.3s ease;
					z-index: 1;
				}
				
				.${id}:hover .digiblocks-icon-box-badge {
					${badgeHoverCSS}
				}
			`;
      }
      const titlePaddingCSS = `${getDimensionCSS(titlePadding, "padding", activeDevice)}`;
      const titleMarginCSS = `${getDimensionCSS(titleMargin, "margin", activeDevice, true)}`;
      const contentPaddingCSS = `${getDimensionCSS(contentPadding, "padding", activeDevice)}`;
      const contentMarginCSS = `${getDimensionCSS(contentMargin, "margin", activeDevice, true)}`;
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
            /* Main block styles */
            .${id} {
				display: flex;
				position: relative;
				${alignCSS}
				${justifyContentCSS}
                background-color: ${backgroundColor || "transparent"};
                ${boxShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                ${borderRadiusCSS}
				${flexDirectionCSS}
				gap: ${getVal(iconContentGap, activeDevice).value || iconContentGap.desktop.value}${getVal(iconContentGap, activeDevice).unit || iconContentGap.desktop.unit};
                transition: all 0.3s ease;
                ${linkEnabled && linkType === "box" ? linkCSS : ""}
                ${positionCSS}
				${transformCSS}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            ${hasIcon ? `
				/* Icon styles */
				.${id} .digiblocks-icon-box-icon {
					${iconMarginCSS}
					display: inline-flex;
					align-items: center;
					justify-content: center;
					${iconCSS}
					transition: all 0.3s ease;
				}

				.${id} .digiblocks-icon-box-icon span {
					display: flex;
				}

				.${id} .digiblocks-icon-box-icon svg {
					width: ${getVal(iconSize, activeDevice).value || iconSize.desktop.value}${getVal(iconSize, activeDevice).unit || iconSize.desktop.unit};
					height: ${getVal(iconHeight, activeDevice).value ? `${getVal(iconHeight, activeDevice).value}${getVal(iconHeight, activeDevice).unit || iconHeight.desktop.unit}` : "100%"};
					fill: ${iconColor || "inherit"};
					transition: all 0.3s ease;
				}
				
				/* Icon hover styles */
				.${id}:hover .digiblocks-icon-box-icon {
					${iconHoverCSS}
				}
				
				.${id}:hover .digiblocks-icon-box-icon svg {
					${iconHoverColor ? `fill: ${iconHoverColor};` : ""}
				}
				` : ""}
            
            /* Title styles */
            .${id} .digiblocks-icon-box-title {
                color: ${titleColor || "inherit"};
				${titlePaddingCSS}
                ${titleMarginCSS}
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${id}:hover .digiblocks-icon-box-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            /* Content styles */
            .${id} .digiblocks-icon-box-content {
                display: flex;
                flex-direction: column;
            }

            .${id} .digiblocks-icon-box-text {
                color: ${textColor || "inherit"};
                ${contentTypographyCSS}
				${contentPaddingCSS}
                ${contentMarginCSS}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${id}:hover .digiblocks-icon-box-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
            }
            
            /* Button styles */
            ${buttonCSS}

			/* Badge styles */
			${badgeCSS}

			/* Tablet styles */
			@media (max-width: 991px) {
				.${id} {
					${getVal(align, "tablet") ? `
						${getVal(align, "tablet") === "flex-start" ? "align-items: flex-start; text-align: left;" : ""}
						${getVal(align, "tablet") === "center" ? "align-items: center; text-align: center;" : ""}
						${getVal(align, "tablet") === "flex-end" ? "align-items: flex-end; text-align: right;" : ""}
					` : ""}
					${getVal(iconLayout, "tablet") === "above" ? "flex-direction: column;" : getVal(iconLayout, "tablet") === "after" ? "flex-direction: row-reverse;" : getVal(iconLayout, "tablet") ? "flex-direction: row;" : ""}
					gap: ${getVal(iconContentGap, "tablet").value || getVal(iconContentGap, "desktop").value}${getVal(iconContentGap, "tablet").unit || getVal(iconContentGap, "desktop").unit};
				}
			}

			/* Mobile styles */
			@media (max-width: 767px) {
				.${id} {
					${getVal(align, "mobile") ? `
						${getVal(align, "mobile") === "flex-start" ? "align-items: flex-start; text-align: left;" : ""}
						${getVal(align, "mobile") === "center" ? "align-items: center; text-align: center;" : ""}
						${getVal(align, "mobile") === "flex-end" ? "align-items: flex-end; text-align: right;" : ""}
					` : ""}
					${getVal(iconLayout, "mobile") === "above" ? "flex-direction: column;" : getVal(iconLayout, "mobile") === "after" ? "flex-direction: row-reverse;" : getVal(iconLayout, "mobile") ? "flex-direction: row;" : ""}
					gap: ${getVal(iconContentGap, "mobile").value || getVal(iconContentGap, "desktop").value}${getVal(iconContentGap, "mobile").unit || getVal(iconContentGap, "desktop").unit};
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
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const renderIcon = () => {
      if (iconSource === "library" && iconValue && iconValue.svg && iconValue.svg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-icon" }, /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: iconValue.svg
            }
          }
        ));
      }
      if (iconSource === "custom" && customSvg && customSvg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-icon" }, /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: customSvg
            }
          }
        ));
      }
      if (!iconSource && iconValue && iconValue.svg && iconValue.svg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-icon" }, /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: iconValue.svg
            }
          }
        ));
      }
      return null;
    };
    const renderBadge = () => {
      if (!showBadge) {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-icon-box-badge" }, badgeText || __("Popular", "digiblocks"));
    };
    const renderButton = () => {
      if (!linkEnabled || linkType !== "button") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-button-wrapper" }, /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          className: "digiblocks-button",
          href: linkUrl || "#",
          target: linkOpenInNewTab ? "_blank" : "_self",
          rel: linkRel,
          onClick: (e) => e.preventDefault()
        },
        /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "span",
            value: buttonText,
            onChange: (value) => setAttributes({ buttonText: value }),
            placeholder: __("Button Text", "digiblocks")
          }
        )
      ));
    };
    const renderIconTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Icon Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconColor,
                onChange: (value) => setAttributes({
                  iconColor: value
                }),
                label: __(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: iconBackgroundColor,
                onChange: (value) => setAttributes({
                  iconBackgroundColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
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
              setAttributes({
                iconBorderStyle: value
              });
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), iconBorderStyle && iconBorderStyle !== "default" && iconBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Border Color",
              "digiblocks"
            ),
            enableAlpha: true,
            colorSettings: [
              {
                value: iconBorderColor,
                onChange: (value) => setAttributes({
                  iconBorderColor: value
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
              values: iconBorderWidth[localActiveDevice],
              onChange: (value) => setAttributes({
                iconBorderWidth: {
                  ...iconBorderWidth,
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
                  ...iconBorderRadius,
                  [localActiveDevice]: value
                }
              }),
              units: [
                { label: "px", value: "px" },
                { label: "%", value: "%" }
              ]
            }
          )
        )));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Icon Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconHoverColor,
                onChange: (value) => setAttributes({
                  iconHoverColor: value
                }),
                label: __(
                  "Icon Color",
                  "digiblocks"
                )
              },
              {
                value: iconHoverBackgroundColor,
                onChange: (value) => setAttributes({
                  iconHoverBackgroundColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              },
              {
                value: iconHoverBorderColor,
                onChange: (value) => setAttributes({
                  iconHoverBorderColor: value
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
                value: titleColor,
                onChange: (value) => setAttributes({
                  titleColor: value
                }),
                label: __(
                  "Title Color",
                  "digiblocks"
                )
              },
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
                value: titleHoverColor,
                onChange: (value) => setAttributes({
                  titleHoverColor: value
                }),
                label: __(
                  "Title Color",
                  "digiblocks"
                )
              },
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
    const renderButtonTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Button Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: buttonTextColor,
                onChange: (value) => setAttributes({
                  buttonTextColor: value
                }),
                label: __(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: buttonBackgroundColor,
                onChange: (value) => setAttributes({
                  buttonBackgroundColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          SelectControl,
          {
            label: __("Border Style", "digiblocks"),
            value: buttonBorderStyle || "default",
            options: borderStyleOptions,
            onChange: (value) => {
              if (value !== "default" && value !== "none" && (buttonBorderStyle === "default" || buttonBorderStyle === "none" || !buttonBorderStyle)) {
                if (!buttonBorderWidth || Object.keys(buttonBorderWidth).length === 0) {
                  setAttributes({
                    buttonBorderWidth: {
                      desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                      tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
                      mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
                    }
                  });
                }
              }
              setAttributes({
                buttonBorderStyle: value
              });
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), buttonBorderStyle && buttonBorderStyle !== "default" && buttonBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Border Color",
              "digiblocks"
            ),
            enableAlpha: true,
            colorSettings: [
              {
                value: buttonBorderColor,
                onChange: (value) => setAttributes({
                  buttonBorderColor: value
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
              values: buttonBorderWidth[localActiveDevice],
              onChange: (value) => setAttributes({
                buttonBorderWidth: {
                  ...buttonBorderWidth,
                  [localActiveDevice]: value
                }
              })
            }
          )
        )), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl,
          {
            label: __("Border Radius", "digiblocks")
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
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl,
          {
            label: __("Padding", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl,
            {
              values: buttonPadding[localActiveDevice],
              onChange: (value) => setAttributes({
                buttonPadding: {
                  ...buttonPadding,
                  [localActiveDevice]: value
                }
              })
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl,
          {
            label: __("Margin", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl,
            {
              values: buttonMargin[localActiveDevice],
              onChange: (value) => setAttributes({
                buttonMargin: {
                  ...buttonMargin,
                  [localActiveDevice]: value
                }
              })
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          BoxShadowControl,
          {
            normalValue: buttonBoxShadow,
            hoverValue: buttonBoxShadowHover,
            onNormalChange: (value) => setAttributes({
              buttonBoxShadow: value
            }),
            onHoverChange: (value) => setAttributes({
              buttonBoxShadowHover: value
            })
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Button Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: buttonTextHoverColor,
                onChange: (value) => setAttributes({
                  buttonTextHoverColor: value
                }),
                label: __(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: buttonBackgroundHoverColor,
                onChange: (value) => setAttributes({
                  buttonBackgroundHoverColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderBadgeTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Badge Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: badgeTextColor,
                onChange: (value) => setAttributes({
                  badgeTextColor: value
                }),
                label: __(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: badgeBackgroundColor,
                onChange: (value) => setAttributes({
                  badgeBackgroundColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              }
            ]
          }
        ), /* @__PURE__ */ wp.element.createElement(
          SelectControl,
          {
            label: __("Border Style", "digiblocks"),
            value: badgeBorderStyle || "none",
            options: borderStyleOptions,
            onChange: (value) => {
              if (value !== "default" && value !== "none" && (badgeBorderStyle === "default" || badgeBorderStyle === "none" || !badgeBorderStyle)) {
                if (!badgeBorderWidth || Object.keys(badgeBorderWidth).length === 0) {
                  setAttributes({
                    badgeBorderWidth: {
                      desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                      tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
                      mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
                    }
                  });
                }
              }
              setAttributes({
                badgeBorderStyle: value
              });
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), badgeBorderStyle && badgeBorderStyle !== "default" && badgeBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Border Color",
              "digiblocks"
            ),
            enableAlpha: true,
            colorSettings: [
              {
                value: badgeBorderColor,
                onChange: (value) => setAttributes({
                  badgeBorderColor: value
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
              values: badgeBorderWidth[localActiveDevice],
              onChange: (value) => setAttributes({
                badgeBorderWidth: {
                  ...badgeBorderWidth,
                  [localActiveDevice]: value
                }
              })
            }
          )
        )), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl,
          {
            label: __("Border Radius", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl,
            {
              values: badgeBorderRadius[localActiveDevice],
              onChange: (value) => setAttributes({
                badgeBorderRadius: {
                  ...badgeBorderRadius,
                  [localActiveDevice]: value
                }
              }),
              units: [
                { label: "px", value: "px" },
                { label: "%", value: "%" }
              ]
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          ResponsiveControl,
          {
            label: __("Padding", "digiblocks")
          },
          /* @__PURE__ */ wp.element.createElement(
            DimensionControl,
            {
              values: badgePadding[localActiveDevice],
              onChange: (value) => setAttributes({
                badgePadding: {
                  ...badgePadding,
                  [localActiveDevice]: value
                }
              }),
              units: [
                { label: "px", value: "px" },
                { label: "rem", value: "rem" },
                { label: "em", value: "em" },
                { label: "%", value: "%" }
              ]
            }
          )
        ), /* @__PURE__ */ wp.element.createElement(
          BoxShadowControl,
          {
            normalValue: badgeBoxShadow,
            hoverValue: badgeBoxShadowHover,
            onNormalChange: (value) => setAttributes({
              badgeBoxShadow: value
            }),
            onHoverChange: (value) => setAttributes({
              badgeBoxShadowHover: value
            })
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Badge Hover Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: badgeTextHoverColor,
                onChange: (value) => setAttributes({
                  badgeTextHoverColor: value
                }),
                label: __(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: badgeBackgroundHoverColor,
                onChange: (value) => setAttributes({
                  badgeBackgroundHoverColor: value
                }),
                label: __(
                  "Background Color",
                  "digiblocks"
                )
              },
              {
                value: badgeBorderHoverColor,
                onChange: (value) => setAttributes({
                  badgeBorderHoverColor: value
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
    const renderButtonTypographyContent = () => {
      return /* @__PURE__ */ wp.element.createElement(
        TypographyControl,
        {
          label: __(
            "Button Typography",
            "digiblocks"
          ),
          value: buttonTypography,
          onChange: (value) => setAttributes({
            buttonTypography: value
          }),
          defaults: {
            fontSize: { desktop: "", tablet: "", mobile: "" },
            fontSizeUnit: "px",
            lineHeight: { desktop: "", tablet: "", mobile: "" },
            lineHeightUnit: "em"
          }
        }
      );
    };
    const renderBadgeTypographyContent = () => {
      return /* @__PURE__ */ wp.element.createElement(
        TypographyControl,
        {
          label: __(
            "Badge Typography",
            "digiblocks"
          ),
          value: badgeTypography,
          onChange: (value) => setAttributes({
            badgeTypography: value
          }),
          defaults: {
            fontSize: { desktop: 0.7, tablet: 0.7, mobile: 0.7 },
            fontSizeUnit: "rem",
            fontWeight: "700",
            textTransform: "uppercase",
            lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
            lineHeightUnit: "em",
            letterSpacing: { desktop: 0.05, tablet: 0.05, mobile: 0.05 },
            letterSpacingUnit: "em"
          }
        }
      );
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "components-panel__body is-opened" }, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ wp.element.createElement(
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
            ResponsiveButtonGroup,
            {
              label: __("Align Items", "digiblocks"),
              value: align,
              onChange: (value) => setAttributes({ align: value }),
              options: [
                { label: __("Left", "digiblocks"), value: "flex-start" },
                { label: __("Center", "digiblocks"), value: "center" },
                { label: __("Right", "digiblocks"), value: "flex-end" }
              ]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveButtonGroup,
            {
              label: __("Justify Items", "digiblocks"),
              value: justifyContent,
              onChange: (value) => setAttributes({ justifyContent: value }),
              options: [
                { label: __("Left", "digiblocks"), value: "flex-start" },
                { label: __("Center", "digiblocks"), value: "center" },
                { label: __("Right", "digiblocks"), value: "flex-end" }
              ]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveButtonGroup,
            {
              label: __("Icon Layout", "digiblocks"),
              value: iconLayout,
              onChange: (value) => setAttributes({ iconLayout: value }),
              options: [
                { label: __("Before", "digiblocks"), value: "before" },
                { label: __("Above", "digiblocks"), value: "above" },
                { label: __("After", "digiblocks"), value: "after" }
              ]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ResponsiveRangeControl,
            {
              label: __("Gap", "digiblocks"),
              value: iconContentGap,
              onChange: (value) => setAttributes({ iconContentGap: value }),
              units: [
                { label: "px", value: "px" },
                { label: "%", value: "%" },
                { label: "em", value: "em" },
                { label: "rem", value: "rem" }
              ],
              defaultUnit: "px",
              min: 0,
              max: 100,
              step: 1,
              defaultValues: {
                desktop: 20,
                tablet: 15,
                mobile: 10
              }
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Title", "digiblocks"),
              checked: showTitle,
              onChange: (value) => setAttributes({ showTitle: value }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Description", "digiblocks"),
              checked: showContent,
              onChange: (value) => setAttributes({ showContent: value }),
              __nextHasNoMarginBottom: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            ToggleControl,
            {
              label: __("Show Badge", "digiblocks"),
              checked: showBadge,
              onChange: (value) => setAttributes({ showBadge: value }),
              __nextHasNoMarginBottom: true
            }
          ), showBadge && /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Badge Text", "digiblocks"),
              value: badgeText,
              onChange: (value) => setAttributes({ badgeText: value }),
              placeholder: __("Popular", "digiblocks"),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            }
          ), !linkEnabled ? /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement(
            "button",
            {
              className: "components-button width-full is-primary",
              onClick: () => setAttributes({ linkEnabled: true })
            },
            __("Add Link", "digiblocks")
          ))) : /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            LinkControl,
            {
              key: "link-control",
              value: {
                url: linkUrl,
                opensInNewTab: linkOpenInNewTab,
                rel: linkRel
              },
              settings: [
                {
                  id: "opensInNewTab",
                  title: __("Open in new tab", "digiblocks")
                },
                {
                  id: "rel",
                  title: __("Add noopener noreferrer", "digiblocks")
                }
              ],
              onChange: (newLink) => {
                setAttributes({
                  linkUrl: newLink.url,
                  linkOpenInNewTab: newLink.opensInNewTab,
                  linkRel: newLink.rel
                });
              },
              onRemove: () => {
                setAttributes({
                  linkEnabled: false,
                  linkUrl: "",
                  linkOpenInNewTab: false,
                  linkRel: ""
                });
              },
              suggestionsQuery: {
                type: "post",
                subtype: "any"
              },
              forceIsEditingLink: !linkUrl
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControl,
            {
              label: __("Link Type", "digiblocks"),
              value: linkType,
              onChange: (value) => setAttributes({ linkType: value }),
              isBlock: true,
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                value: "box",
                label: __("Box", "digiblocks")
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControlOption,
              {
                value: "button",
                label: __("Button", "digiblocks")
              }
            )
          )), linkType === "button" && /* @__PURE__ */ wp.element.createElement(
            TextControl,
            {
              label: __("Button Text", "digiblocks"),
              value: buttonText,
              onChange: (value) => setAttributes({ buttonText: value }),
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true
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
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderColorTabContent(tab.name)
            )
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
                  "Title Typography",
                  "digiblocks"
                ),
                value: titleTypography,
                onChange: (value) => setAttributes({
                  titleTypography: value
                }),
                defaults: {
                  fontSize: { desktop: "", tablet: "", mobile: "" },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: "", tablet: "", mobile: "" },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Content Typography",
                  "digiblocks"
                ),
                value: contentTypography,
                onChange: (value) => setAttributes({
                  contentTypography: value
                }),
                defaults: {
                  fontSize: { desktop: "", tablet: "", mobile: "" },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: "", tablet: "", mobile: "" },
                  lineHeightUnit: "em"
                }
              }
            ),
            linkEnabled && linkType === "button" && renderButtonTypographyContent(),
            showBadge && renderBadgeTypographyContent()
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "padding",
              title: __("Padding & Margin", "digiblocks"),
              initialOpen: false
            },
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
                      ...iconPadding,
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
                  values: iconMargin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconMargin: {
                      ...iconMargin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Title Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: titlePadding[localActiveDevice],
                  onChange: (value) => setAttributes({
                    titlePadding: {
                      ...titlePadding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Title Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: titleMargin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    titleMargin: {
                      ...titleMargin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Content Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: contentPadding[localActiveDevice],
                  onChange: (value) => setAttributes({
                    contentPadding: {
                      ...contentPadding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Content Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: contentMargin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    contentMargin: {
                      ...contentMargin,
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
              name: "icon",
              title: __("Icon", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Icon Width", "digiblocks"),
                value: iconSize,
                onChange: (value) => setAttributes({ iconSize: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getMaxValue(iconSize?.[localActiveDevice]?.unit),
                step: getStepValue(iconSize?.[localActiveDevice]?.unit)
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Icon Height", "digiblocks"),
                value: iconHeight,
                onChange: (value) => setAttributes({ iconHeight: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getMaxValue(iconHeight?.[localActiveDevice]?.unit),
                step: getStepValue(iconHeight?.[localActiveDevice]?.unit)
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderIconTabContent(tab.name)
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
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
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
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
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
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
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
          ), linkEnabled && linkType === "button" && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "button",
              title: __("Button", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderButtonTabContent(tab.name)
            )
          ), showBadge && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "badge",
              title: __("Badge", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderBadgeTabContent(tab.name)
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
                onNormalChange: (value) => setAttributes({
                  boxShadow: value
                }),
                onHoverChange: (value) => setAttributes({
                  boxShadowHover: value
                })
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
      className: `digiblocks-icon-box ${id} ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, renderBadge(), renderIcon(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-content" }, showTitle && /* @__PURE__ */ wp.element.createElement(
      RichText,
      {
        tagName: "h3",
        className: "digiblocks-icon-box-title",
        value: title,
        onChange: (value) => setAttributes({ title: value }),
        placeholder: __("Feature Title", "digiblocks")
      }
    ), showContent && /* @__PURE__ */ wp.element.createElement(
      RichText,
      {
        tagName: "p",
        className: "digiblocks-icon-box-text",
        value: content,
        onChange: (value) => setAttributes({ content: value }),
        placeholder: __(
          "Add your feature description here.",
          "digiblocks"
        )
      }
    ), renderButton())));
  };
  var edit_default = IconBoxEdit;

  // blocks/icon-box/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var IconBoxSave = ({ attributes }) => {
    const {
      id,
      iconSource,
      customSvg,
      iconValue,
      title,
      showTitle,
      showContent,
      showBadge,
      badgeText,
      content,
      animation,
      animationDuration,
      animationDelay,
      hoverEffect,
      anchor,
      customClasses,
      linkEnabled,
      linkType,
      linkUrl,
      linkOpenInNewTab,
      linkRel,
      buttonText
    } = attributes;
    const blockClasses = [
      "digiblocks-icon-box",
      id,
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
      hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
      customClasses || ""
      // Add custom classes if they exist
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    const renderIcon = () => {
      if (iconSource === "library" && iconValue && iconValue.svg && iconValue.svg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: iconValue.svg } }));
      }
      if (iconSource === "custom" && customSvg && customSvg.trim() !== "") {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-icon" }, /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: customSvg } }));
      }
      return null;
    };
    const renderBadge = () => {
      if (!showBadge) {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-icon-box-badge" }, badgeText || "Popular");
    };
    const renderButton = () => {
      if (!linkEnabled || linkType !== "button") {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-button-wrapper" }, /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          className: "digiblocks-button",
          href: linkUrl || "#",
          target: linkOpenInNewTab ? "_blank" : "_self",
          rel: linkOpenInNewTab ? linkRel || "noopener noreferrer" : linkRel
        },
        /* @__PURE__ */ wp.element.createElement(RichText2.Content, { tagName: "span", value: buttonText })
      ));
    };
    const boxContent = /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, renderBadge(), renderIcon(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-icon-box-content" }, showTitle !== false && /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        tagName: "h3",
        className: "digiblocks-icon-box-title",
        value: title
      }
    ), showContent !== false && /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        tagName: "p",
        className: "digiblocks-icon-box-text",
        value: content
      }
    ), renderButton()));
    if (linkEnabled && linkType === "box" && linkUrl) {
      return /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          ...blockProps,
          href: linkUrl,
          target: linkOpenInNewTab ? "_blank" : "_self",
          rel: linkOpenInNewTab ? linkRel || "noopener noreferrer" : linkRel
        },
        boxContent
      );
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, boxContent);
  };
  var save_default = IconBoxSave;

  // blocks/icon-box/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/icon-box", {
    apiVersion: 2,
    title: digiBlocksData.blocks["icon-box"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["icon-box"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["icon-box"].description,
    keywords: [__2("icon", "digiblocks"), __2("box", "digiblocks"), __2("feature", "digiblocks"), __2("service", "digiblocks")],
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
      align: {
        type: "object",
        default: {
          desktop: "center",
          tablet: "",
          mobile: ""
        }
      },
      justifyContent: {
        type: "object",
        default: {
          desktop: "center",
          tablet: "",
          mobile: ""
        }
      },
      iconLayout: {
        type: "object",
        default: {
          desktop: "above",
          tablet: "",
          mobile: ""
        }
      },
      iconContentGap: {
        type: "object",
        default: {
          desktop: { value: 20, unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      showTitle: {
        type: "boolean",
        default: true
      },
      showContent: {
        type: "boolean",
        default: true
      },
      showBadge: {
        type: "boolean",
        default: false
      },
      badgeText: {
        type: "string",
        default: __2("Popular", "digiblocks")
      },
      title: {
        type: "string",
        default: __2("Feature Title", "digiblocks")
      },
      content: {
        type: "string",
        default: __2("Add your feature description here. Explain what makes this feature special.", "digiblocks")
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
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      titlePadding: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      titleMargin: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "10", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      contentPadding: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      contentMargin: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "0", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      iconColor: {
        type: "string",
        default: "#1e73be"
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
        default: ""
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      iconBackgroundColor: {
        type: "string",
        default: "transparent"
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
      iconHoverColor: {
        type: "string",
        default: ""
      },
      iconHoverBackgroundColor: {
        type: "string",
        default: ""
      },
      iconHoverBorderColor: {
        type: "string",
        default: ""
      },
      linkEnabled: {
        type: "boolean",
        default: false
      },
      linkType: {
        type: "string",
        default: "box"
      },
      linkUrl: {
        type: "string",
        default: ""
      },
      linkOpenInNewTab: {
        type: "boolean",
        default: false
      },
      linkRel: {
        type: "string",
        default: ""
      },
      buttonText: {
        type: "string",
        default: __2("Learn More", "digiblocks")
      },
      buttonBackgroundColor: {
        type: "string",
        default: "#1e73be"
      },
      buttonBackgroundHoverColor: {
        type: "string",
        default: "#135e9e"
      },
      buttonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      buttonTextHoverColor: {
        type: "string",
        default: "#ffffff"
      },
      buttonBorderStyle: {
        type: "string",
        default: "default"
      },
      buttonBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      buttonBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      buttonBorderColor: {
        type: "string",
        default: ""
      },
      buttonBorderHoverColor: {
        type: "string",
        default: ""
      },
      buttonBoxShadow: {
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
      buttonBoxShadowHover: {
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
      buttonPadding: {
        type: "object",
        default: {
          desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: "px", isLinked: false },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      buttonMargin: {
        type: "object",
        default: {
          desktop: { top: 15, right: 0, bottom: 0, left: 0, unit: "px", isLinked: false },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      buttonTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: "", tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "500",
          fontStyle: "normal",
          textTransform: "",
          textDecoration: "",
          lineHeight: { desktop: "", tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: "", tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      badgeBackgroundColor: {
        type: "string",
        default: "#f59e0b"
      },
      badgeBackgroundHoverColor: {
        type: "string",
        default: ""
      },
      badgeTextColor: {
        type: "string",
        default: "#ffffff"
      },
      badgeTextHoverColor: {
        type: "string",
        default: ""
      },
      badgeTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 0.7, tablet: "", mobile: "" },
          fontSizeUnit: "rem",
          fontWeight: "700",
          fontStyle: "normal",
          textTransform: "uppercase",
          textDecoration: "",
          lineHeight: { desktop: 1.2, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0.05, tablet: "", mobile: "" },
          letterSpacingUnit: "em"
        }
      },
      badgePadding: {
        type: "object",
        default: {
          desktop: { top: 0.25, right: 0.5, bottom: 0.25, left: 0.5, unit: "rem", isLinked: false },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "rem" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "rem" }
        }
      },
      badgeBorderStyle: {
        type: "string",
        default: "none"
      },
      badgeBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      badgeBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      badgeBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      badgeBorderHoverColor: {
        type: "string",
        default: ""
      },
      badgeBoxShadow: {
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
      badgeBoxShadowHover: {
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
      iconSize: {
        type: "object",
        default: {
          desktop: { value: "48", unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      iconHeight: {
        type: "object",
        default: {
          desktop: { value: "", unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      titleTypography: {
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
      contentTypography: {
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
      padding: {
        type: "object",
        default: {
          desktop: {
            top: "",
            right: "",
            bottom: "",
            left: "",
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
            top: "",
            right: "",
            bottom: "",
            left: "",
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
      animationDuration: {
        type: "string",
        default: "normal"
      },
      animationDelay: {
        type: "number",
        default: ""
      },
      borderStyle: {
        type: "string",
        default: "default"
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: {
            top: "",
            right: "",
            bottom: "",
            left: "",
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
        iconValue: {
          id: "star",
          name: "Star",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
          style: "solid",
          categories: ["design", "lifestyle-and-hobbies", "social"]
        },
        title: __2("Feature Title", "digiblocks"),
        content: __2("Add your feature description here. Explain what makes this feature special.", "digiblocks"),
        iconColor: "#1e73be"
      },
      viewportWidth: 400
    },
    edit: edit_default,
    save: save_default
  });
})();
