(() => {
  // blocks/faq/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    TextControl,
    Tooltip,
    TabPanel,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;
  var FAQEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      items,
      titleColor,
      titleHoverColor,
      titleActiveColor,
      backgroundColor,
      backgroundHoverColor,
      backgroundActiveColor,
      contentColor,
      contentBackgroundColor,
      borderColor,
      borderHoverColor,
      borderRadius,
      borderWidth,
      borderStyle,
      boxShadow,
      boxShadowHover,
      padding,
      margin,
      titleTypography,
      contentTypography,
      iconPosition,
      iconColor,
      iconHoverColor,
      iconActiveColor,
      iconSize,
      animation,
      animationDuration,
      animationDelay,
      allowMultipleOpen,
      iconType,
      titleTag,
      questionPrefix,
      questionPrefixColor,
      answerPrefix,
      answerPrefixColor,
      layout,
      itemsSpacing,
      schemaType,
      schemaName,
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
      if (items && items.length > 0) {
        const updatedItems = items.map((item, index) => {
          if (!item.id) {
            return { ...item, id: `faq-item-${clientId.substr(0, 8)}-${index}` };
          }
          return item;
        });
        if (JSON.stringify(updatedItems) !== JSON.stringify(items)) {
          setAttributes({ items: updatedItems });
        }
      }
    }, [clientId, items, setAttributes]);
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
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const iconTypeOptions = [
      { label: __("Plus/Minus", "digiblocks"), value: "plusMinus" },
      { label: __("Arrow", "digiblocks"), value: "arrow" },
      { label: __("Chevron", "digiblocks"), value: "chevron" },
      { label: __("Triangle", "digiblocks"), value: "triangle" },
      { label: __("Circle Plus/Minus", "digiblocks"), value: "circlePlusMinus" }
    ];
    const iconPositionOptions = [
      { label: __("Right", "digiblocks"), value: "right" },
      { label: __("Left", "digiblocks"), value: "left" }
    ];
    const titleTagOptions = [
      { label: __("H2", "digiblocks"), value: "h2" },
      { label: __("H3", "digiblocks"), value: "h3" },
      { label: __("H4", "digiblocks"), value: "h4" },
      { label: __("H5", "digiblocks"), value: "h5" },
      { label: __("H6", "digiblocks"), value: "h6" },
      { label: __("p", "digiblocks"), value: "p" },
      { label: __("div", "digiblocks"), value: "div" }
    ];
    const layoutOptions = [
      { label: __("Boxed", "digiblocks"), value: "boxed" },
      { label: __("Classic", "digiblocks"), value: "classic" },
      { label: __("Separated", "digiblocks"), value: "separated" },
      { label: __("Minimalist", "digiblocks"), value: "minimalist" },
      { label: __("Bordered", "digiblocks"), value: "bordered" }
    ];
    const schemaTypeOptions = [
      { label: __("Default FAQ Schema", "digiblocks"), value: "FAQPage" },
      { label: __("Q&A Schema", "digiblocks"), value: "QAPage" }
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
      },
      {
        name: "active",
        title: __("Active", "digiblocks"),
        className: "digiblocks-tab-3 active"
      }
    ];
    const addNewItem = () => {
      const newItemIndex = items.length;
      const newItem = {
        id: `faq-item-${clientId.substr(0, 8)}-${newItemIndex}`,
        title: __("New FAQ Question", "digiblocks"),
        content: __("Add your answer here. Edit or remove this text inline or in the module Content settings.", "digiblocks"),
        isOpen: false
      };
      setAttributes({
        items: [...items, newItem]
      });
    };
    const removeItem = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setAttributes({
        items: newItems
      });
    };
    const duplicateItem = (index) => {
      const itemToDuplicate = items[index];
      const timestamp = Date.now();
      const newItem = {
        ...itemToDuplicate,
        id: `faq-item-${clientId.substr(0, 8)}-${timestamp}`,
        isOpen: false
      };
      const newItems = [...items];
      newItems.splice(index + 1, 0, newItem);
      setAttributes({
        items: newItems
      });
    };
    const moveItemUp = (index) => {
      if (index === 0)
        return;
      const newItems = [...items];
      const item = newItems[index];
      newItems.splice(index, 1);
      newItems.splice(index - 1, 0, item);
      setAttributes({
        items: newItems
      });
    };
    const moveItemDown = (index) => {
      if (index === items.length - 1)
        return;
      const newItems = [...items];
      const item = newItems[index];
      newItems.splice(index, 1);
      newItems.splice(index + 1, 0, item);
      setAttributes({
        items: newItems
      });
    };
    const toggleItem = (index) => {
      const newItems = items.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        if (!allowMultipleOpen && i !== index && item.isOpen) {
          return { ...item, isOpen: false };
        }
        return item;
      });
      setAttributes({
        items: newItems
      });
    };
    const updateItemTitle = (value, index) => {
      const newItems = [...items];
      newItems[index].title = value;
      setAttributes({
        items: newItems
      });
    };
    const updateItemContent = (value, index) => {
      const newItems = [...items];
      newItems[index].content = value;
      setAttributes({
        items: newItems
      });
    };
    const getIcon = (isOpen, type = iconType) => {
      switch (type) {
        case "plusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" })));
        case "arrow":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-arrow ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" })));
        case "chevron":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-chevron ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" })));
        case "triangle":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-triangle ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" })));
        case "circlePlusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })));
        default:
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, "\u2014") : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, "+");
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
      const itemSpacing = itemsSpacing[activeDevice] !== void 0 ? itemsSpacing[activeDevice] : 16;
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
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
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
      const baseCSS = `
			/* FAQ Block - ${id} */
			.${id} {
				${getDimensionCSS(margin, "margin", activeDevice)}
				width: 100%;
                ${positionCSS}
				${transformCSS}
			}

            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }
			
			/* Base styles for questions and answers */
			.${id} .digiblocks-faq-question {
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				display: flex;
				align-items: center;
				${iconPosition === "left" ? "flex-direction: row-reverse; justify-content: flex-end;" : "justify-content: space-between;"}
			}
			
			.${id} .digiblocks-faq-question-text {
				color: ${titleColor};
				${titleTypographyCSS}
				margin: 0;
				flex: 1;
				${questionPrefix ? "display: flex; align-items: center; gap: .5rem;" : ""}
				transition: color 0.3s ease;
			}
			
			.${id} .digiblocks-faq-question-prefix {
				${questionPrefixColor ? `color: ${questionPrefixColor};` : ""}
				font-weight: bold;
			}
			
			.${id} .digiblocks-faq-answer-prefix {
				${answerPrefixColor ? `color: ${answerPrefixColor};` : ""}
				font-weight: bold;
			}
			
			.${id} .digiblocks-faq-answer-content {
				display: flex;
				${answerPrefix ? "display: flex; gap: .5rem;" : ""}
				color: ${contentColor};
				${contentTypographyCSS}
			}
			
			/* Handle answer display states */
			.${id} .digiblocks-faq-answer {
				overflow: hidden;
				display: none;
				transition: height 0.3s ease;
			}
			
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			/* Icon styles */
			.${id} .digiblocks-faq-question {
				gap: 15px;
			}

			.${id} .digiblocks-faq-question-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				color: ${iconColor};
				transition: all 0.3s ease;
				font-size: ${getVal(iconSize, activeDevice)}px;
			}
			
			.${id} .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${id} .digiblocks-faq-question-icon svg {
				width: ${getVal(iconSize, activeDevice)}px;
				height: ${getVal(iconSize, activeDevice)}px;
				transition: transform 0.3s ease;
				fill: currentColor;
			}
			
			/* Rotate icons when active */
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-arrow,
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-chevron,
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-triangle {
				transform: rotate(180deg);
			}
			
			.${id} .digiblocks-faq-icon-arrow,
			.${id} .digiblocks-faq-icon-chevron,
			.${id} .digiblocks-faq-icon-triangle {
				display: inline-flex;
				transition: transform 0.3s ease;
			}
			
			/* Handle hover state */
			.${id} .digiblocks-faq-question:hover .digiblocks-faq-question-text {
				${titleHoverColor ? `color: ${titleHoverColor};` : ""}
			}
			
			.${id} .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${iconHoverColor ? `color: ${iconHoverColor};` : ""}
			}
			
			/* Handle active state */
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${titleActiveColor};
			}
			
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${iconActiveColor};
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
      let layoutCSS = "";
      switch (layout) {
        case "boxed":
          layoutCSS = `
					.${id} .digiblocks-faq-item {
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || "#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${itemSpacing}px;
					}
					
					.${id} .digiblocks-faq-item:hover {
						${boxShadowHoverCSS}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						border-top: 1px solid ${borderColor || "#e0e0e0"};
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ""}
					}
					
					.${id} .digiblocks-faq-item.is-active {
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ""}
					}
				`;
          break;
        case "classic":
          layoutCSS = `
					.${id} .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${borderColor || "#e0e0e0"};
						background-color: transparent;
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
					}
					
					.${id} .digiblocks-faq-answer {
						${getDimensionCSS(padding, "padding", activeDevice)}
						padding-top: 0;
					}
				`;
          break;
        case "separated":
          layoutCSS = `
					.${id} .digiblocks-faq-item {
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || "#ffffff"};
					}
					
					.${id} .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ""}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
						${boxShadowHoverCSS}
					}
					
					.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ""}
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ""}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ""}
						${borderCSS}
						border-top: none;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
						border-bottom-left-radius: ${borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice].left + borderRadius[activeDevice].unit : "8px"};
						border-bottom-right-radius: ${borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice].right + borderRadius[activeDevice].unit : "8px"};
						margin-top: -1px;
					}
				`;
          break;
        case "minimalist":
          layoutCSS = `
					.${id} .digiblocks-faq-item {
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
						border-bottom: 2px solid ${borderColor || "#e0e0e0"};
					}
					
					.${id} .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ""}
						border-color: ${titleHoverColor || borderHoverColor || "#cccccc"};
					}
					
					.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ""}
						border-color: ${titleActiveColor || "#1e73be"};
					}
					
					.${id} .digiblocks-faq-answer {
						${getDimensionCSS(padding, "padding", activeDevice)}
					}
				`;
          break;
        case "bordered":
          layoutCSS = `
					.${id} .digiblocks-faq-item {
						${borderCSS}
						background-color: transparent;
						margin-bottom: ${itemSpacing}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					.${id} .digiblocks-faq-item:hover {
						${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
						background-color: ${backgroundColor || "#f8f9fa"};
					}
					
					.${id} .digiblocks-faq-question:hover {
						${titleHoverColor ? `color: ${titleHoverColor};` : ""}
						${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
					}
					
					.${id} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${titleActiveColor ? `color: ${titleActiveColor};` : ""}
						${backgroundActiveColor ? `background-color: ${backgroundActiveColor};` : ""}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						${contentBackgroundColor ? `background-color: ${contentBackgroundColor};` : ""}
					}
					
					.${id} .digiblocks-faq-item.is-active {
						border-color: ${titleActiveColor || borderColor || "#1e73be"};
					}
				`;
          break;
        default:
          layoutCSS = `
					.${id} .digiblocks-faq-item {
						${borderCSS}
						${boxShadowCSS}
						background-color: ${backgroundColor || "#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${itemSpacing}px;
					}
					
					.${id} .digiblocks-faq-question {
						${paddingCSS}
					}
					
					.${id} .digiblocks-faq-answer {
						${paddingCSS}
						border-top: 1px solid #e0e0e0;
					}
				`;
      }
      const editorCSS = `
			.${id} .digiblocks-faq-item {
				position: relative;
			}
			
			.${id} .digiblocks-faq-item-controls {
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
		
			/* Respect the is-active class for showing/hiding answers */
			.${id} .digiblocks-faq-answer {
				display: none;
				transition: height 0.3s ease;
			}
			
			.${id} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			.${id} .digiblocks-faq-schema {
				margin-top: 15px;
			}
		`;
      const tabletStyles = `
			@media (max-width: 991px) {
				.${id} {
					${getDimensionCSS(margin, "margin", "tablet")}
				}
				
				.${id} .digiblocks-faq-item {
					margin-bottom: ${getVal(itemsSpacing, "tablet") || itemSpacing}px;
				}
				
				.${id} .digiblocks-faq-question,
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, "padding", "tablet")}
				}
				
				${layout === "minimalist" ? `
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, "padding", "tablet")}
					padding-left: 0;
					padding-right: 0;
				}
				` : ""}
				
				${(() => {
        const tabletIconSize = getVal(iconSize, "tablet");
        return tabletIconSize ? `
					.${id} .digiblocks-faq-question-icon {
						font-size: ${tabletIconSize}px;
					}
					
					.${id} .digiblocks-faq-question-icon svg {
						width: ${tabletIconSize}px;
						height: ${tabletIconSize}px;
					}
					` : "";
      })()}
				
				${(() => {
        const titleFontSize = getVal(titleTypography?.fontSize, "tablet");
        const titleLineHeight = getVal(titleTypography?.lineHeight, "tablet");
        if (!titleFontSize && !titleLineHeight)
          return "";
        return `
					.${id} .digiblocks-faq-question-text {
						${titleFontSize ? `font-size: ${titleFontSize}${titleTypography.fontSizeUnit || "px"};` : ""}
						${titleLineHeight ? `line-height: ${titleLineHeight}${titleTypography.lineHeightUnit || "em"};` : ""}
					}
					`;
      })()}
				
				${(() => {
        const contentFontSize = getVal(contentTypography?.fontSize, "tablet");
        const contentLineHeight = getVal(contentTypography?.lineHeight, "tablet");
        if (!contentFontSize && !contentLineHeight)
          return "";
        return `
					.${id} .digiblocks-faq-answer-content {
						${contentFontSize ? `font-size: ${contentFontSize}${contentTypography.fontSizeUnit || "px"};` : ""}
						${contentLineHeight ? `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || "em"};` : ""}
					}
					`;
      })()}
			}
		`;
      const mobileStyles = `
			@media (max-width: 767px) {
				.${id} {
					${getDimensionCSS(margin, "margin", "mobile")}
				}
				
				.${id} .digiblocks-faq-item {
					margin-bottom: ${getVal(itemsSpacing, "mobile") || getVal(itemsSpacing, "tablet") || itemSpacing}px;
				}
				
				.${id} .digiblocks-faq-question,
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, "padding", "mobile")}
				}
				
				${layout === "minimalist" ? `
				.${id} .digiblocks-faq-answer {
					${getDimensionCSS(padding, "padding", "mobile")}
					padding-left: 0;
					padding-right: 0;
				}
				` : ""}
				
				${(() => {
        const mobileIconSize = getVal(iconSize, "mobile");
        return mobileIconSize ? `
					.${id} .digiblocks-faq-question-icon {
						font-size: ${mobileIconSize}px;
					}
					
					.${id} .digiblocks-faq-question-icon svg {
						width: ${mobileIconSize}px;
						height: ${mobileIconSize}px;
					}
					` : "";
      })()}
				
				${(() => {
        const titleFontSize = getVal(titleTypography?.fontSize, "mobile");
        const titleLineHeight = getVal(titleTypography?.lineHeight, "mobile");
        if (!titleFontSize && !titleLineHeight)
          return "";
        return `
					.${id} .digiblocks-faq-question-text {
						${titleFontSize ? `font-size: ${titleFontSize}${titleTypography.fontSizeUnit || "px"};` : ""}
						${titleLineHeight ? `line-height: ${titleLineHeight}${titleTypography.lineHeightUnit || "em"};` : ""}
					}
					`;
      })()}
				
				${(() => {
        const contentFontSize = getVal(contentTypography?.fontSize, "mobile");
        const contentLineHeight = getVal(contentTypography?.lineHeight, "mobile");
        if (!contentFontSize && !contentLineHeight)
          return "";
        return `
					.${id} .digiblocks-faq-answer-content {
						${contentFontSize ? `font-size: ${contentFontSize}${contentTypography.fontSizeUnit || "px"};` : ""}
						${contentLineHeight ? `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || "em"};` : ""}
					}
					`;
      })()}
			}
		`;
      return `
			${baseCSS}
			${layoutCSS}
			${editorCSS}
			${tabletStyles}
			${mobileStyles}
		`;
    };
    const renderTitleTabContent = (tabName) => {
      if (tabName === "normal") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Question Colors",
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
              },
              {
                value: questionPrefixColor,
                onChange: (value) => setAttributes({
                  questionPrefixColor: value
                }),
                label: __(
                  "Prefix Color",
                  "digiblocks"
                ),
                disableCustomColors: !questionPrefix
              }
            ]
          }
        ));
      } else if (tabName === "hover") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Question Hover Colors",
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
              }
            ]
          }
        ));
      } else if (tabName === "active") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Question Active Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: titleActiveColor,
                onChange: (value) => setAttributes({
                  titleActiveColor: value
                }),
                label: __(
                  "Text Color",
                  "digiblocks"
                )
              },
              {
                value: backgroundActiveColor,
                onChange: (value) => setAttributes({
                  backgroundActiveColor: value
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
              }
            ]
          }
        ));
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
              }
            ]
          }
        ));
      } else if (tabName === "active") {
        return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
          PanelColorSettings,
          {
            title: __(
              "Icon Active Colors",
              "digiblocks"
            ),
            initialOpen: true,
            enableAlpha: true,
            colorSettings: [
              {
                value: iconActiveColor,
                onChange: (value) => setAttributes({
                  iconActiveColor: value
                }),
                label: __(
                  "Icon Color",
                  "digiblocks"
                )
              }
            ]
          }
        ));
      }
      return null;
    };
    const renderContentTabContent = () => {
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
        PanelColorSettings,
        {
          title: __(
            "Answer Colors",
            "digiblocks"
          ),
          initialOpen: true,
          enableAlpha: true,
          colorSettings: [
            {
              value: contentColor,
              onChange: (value) => setAttributes({
                contentColor: value
              }),
              label: __(
                "Text Color",
                "digiblocks"
              )
            },
            {
              value: contentBackgroundColor,
              onChange: (value) => setAttributes({
                contentBackgroundColor: value
              }),
              label: __(
                "Background Color",
                "digiblocks"
              )
            },
            {
              value: answerPrefixColor,
              onChange: (value) => setAttributes({
                answerPrefixColor: value
              }),
              label: __(
                "Prefix Color",
                "digiblocks"
              ),
              disableCustomColors: !answerPrefix
            }
          ]
        }
      ));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "content-settings",
              title: __("Items", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Allow Multiple Open", "digiblocks"),
                checked: allowMultipleOpen,
                onChange: () => setAttributes({ allowMultipleOpen: !allowMultipleOpen }),
                help: __("When enabled, multiple FAQ items can be open at the same time.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Layout", "digiblocks"),
                value: layout,
                options: layoutOptions,
                onChange: (value) => setAttributes({ layout: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { htmlFor: "question-prefix", className: "components-base-control__label" }, __("Question Prefix", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                id: "question-prefix",
                value: questionPrefix || "",
                onChange: (value) => setAttributes({ questionPrefix: value }),
                placeholder: __("Example: Q:", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __("Add a prefix to questions (e.g., 'Q:').", "digiblocks")))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { htmlFor: "answer-prefix", className: "components-base-control__label" }, __("Answer Prefix", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                id: "answer-prefix",
                value: answerPrefix || "",
                onChange: (value) => setAttributes({ answerPrefix: value }),
                placeholder: __("Example: A:", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __("Add a prefix to answers (e.g., 'A:').", "digiblocks")))),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Items Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: itemsSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    itemsSpacing: {
                      ...itemsSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "icon-settings",
              title: __("Icon Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Icon Type", "digiblocks"),
                value: iconType,
                options: iconTypeOptions,
                onChange: (value) => setAttributes({ iconType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Icon Position", "digiblocks"),
                value: iconPosition,
                options: iconPositionOptions,
                onChange: (value) => setAttributes({ iconPosition: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
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
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "schema-settings",
              title: __("SEO Schema", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Schema Type", "digiblocks"),
                value: schemaType,
                options: schemaTypeOptions,
                onChange: (value) => setAttributes({ schemaType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Schema Name", "digiblocks"),
                value: schemaName,
                onChange: (value) => setAttributes({ schemaName: value }),
                placeholder: __("Example: Product FAQ", "digiblocks"),
                help: __("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "heading-settings",
              title: __("HTML Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Question Tag", "digiblocks"),
                value: titleTag,
                options: titleTagOptions,
                onChange: (value) => setAttributes({ titleTag: value }),
                help: __("HTML tag for questions. Default is h3.", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "question-styles",
              title: __("Question Styles", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => renderTitleTabContent(tab.name)
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Question Typography",
                  "digiblocks"
                ),
                value: titleTypography,
                onChange: (value) => setAttributes({
                  titleTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 18, tablet: 16, mobile: 15 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "answer-styles",
              title: __("Answer Styles", "digiblocks"),
              initialOpen: false
            },
            renderContentTabContent(),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Answer Typography",
                  "digiblocks"
                ),
                value: contentTypography,
                onChange: (value) => setAttributes({
                  contentTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "icon-styles",
              title: __("Icon Styles", "digiblocks"),
              initialOpen: false
            },
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
              name: "border-box",
              title: __("Border & Radius", "digiblocks"),
              initialOpen: false
            },
            layout !== "classic" && layout !== "minimalist" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
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
                  setAttributes({
                    borderStyle: value
                  });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), borderStyle && borderStyle !== "default" && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
                  "Border Colors",
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
                  },
                  {
                    value: borderHoverColor,
                    onChange: (value) => setAttributes({
                      borderHoverColor: value
                    }),
                    label: __(
                      "Border Hover Color",
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
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
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
            )))
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
      }
    };
    const renderFAQItems = () => {
      if (!items || items.length === 0) {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-no-items" }, /* @__PURE__ */ wp.element.createElement("p", null, __("No FAQ items found. Please add some items.", "digiblocks")));
      }
      return items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: item.id,
            className: `digiblocks-faq-item ${item.isOpen ? "is-active" : ""}`,
            style: isLast ? { marginBottom: 0 } : {}
          },
          /* @__PURE__ */ wp.element.createElement(
            "div",
            {
              className: "digiblocks-faq-question",
              onClick: () => toggleItem(index)
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-question-text" }, questionPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-prefix" }, questionPrefix), /* @__PURE__ */ wp.element.createElement(
              RichText,
              {
                tagName: "span",
                value: item.title,
                onChange: (value) => updateItemTitle(value, index),
                placeholder: __("Enter question...", "digiblocks"),
                allowedFormats: ["core/bold", "core/italic"],
                className: "digiblocks-faq-question-text-content"
              }
            )),
            /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-icon" }, getIcon(item.isOpen))
          ),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer-content" }, answerPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-answer-prefix" }, answerPrefix), /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "div",
              value: item.content,
              onChange: (value) => updateItemContent(value, index),
              placeholder: __("Enter answer...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic", "core/link", "core/image", "core/list"],
              className: "digiblocks-faq-answer-text"
            }
          ))),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-item-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              className: "digiblocks-faq-item-move-up",
              onClick: () => moveItemUp(index),
              icon: "arrow-up-alt2",
              disabled: index === 0,
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              className: "digiblocks-faq-item-move-down",
              onClick: () => moveItemDown(index),
              icon: "arrow-down-alt2",
              disabled: index === items.length - 1,
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              className: "digiblocks-faq-item-duplicate",
              onClick: () => duplicateItem(index),
              icon: "admin-page",
              isSmall: true
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              className: "digiblocks-faq-item-remove",
              onClick: () => removeItem(index),
              icon: "trash",
              isSmall: true
            }
          )))
        );
      });
    };
    const blockProps = useBlockProps({
      className: `digiblocks-faq-block ${id} ${layout || "boxed"} ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-items" }, renderFAQItems()), /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        variant: "primary",
        icon: "plus",
        onClick: addNewItem,
        style: { width: "100%", marginTop: "20px", justifyContent: "center" }
      },
      __("Add FAQ Item", "digiblocks")
    )));
  };
  var edit_default = FAQEdit;

  // blocks/faq/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var FAQSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      items,
      titleTag,
      layout,
      questionPrefix,
      answerPrefix,
      animation,
      animationDuration,
      animationDelay,
      allowMultipleOpen,
      iconType
    } = attributes;
    const blockClasses = [
      "digiblocks-faq-block",
      id,
      layout || "boxed",
      customClasses || "",
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : ""
    ].filter(Boolean).join(" ");
    const getIcon = (isOpen, type = iconType) => {
      switch (type) {
        case "plusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" })));
        case "arrow":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-arrow ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" })));
        case "chevron":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-chevron ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { fillRule: "evenodd", d: "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" })));
        case "triangle":
          return /* @__PURE__ */ wp.element.createElement("span", { className: `digiblocks-faq-icon-triangle ${isOpen ? "is-open" : ""}` }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" })));
        case "circlePlusMinus":
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-minus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-circle-plus" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }), /* @__PURE__ */ wp.element.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })));
        default:
          return isOpen ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-minus" }, "\u2014") : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-icon-plus" }, "+");
      }
    };
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null,
      "data-allow-multiple": allowMultipleOpen ? "true" : "false"
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    const renderFAQItems = () => {
      if (!items || items.length === 0) {
        return null;
      }
      return items.map((item, index) => {
        return /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: item.id,
            className: `digiblocks-faq-item ${item.isOpen ? "is-active" : ""}`,
            "data-item-id": item.id
          },
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-question" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-question-text" }, questionPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-prefix" }, questionPrefix), /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: titleTag || "h3",
              value: item.title,
              className: "digiblocks-faq-question-text-content"
            }
          )), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-question-icon" }, getIcon(item.isOpen))),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-answer-content" }, answerPrefix && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-faq-answer-prefix" }, answerPrefix), /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: "div",
              className: "digiblocks-faq-answer-text",
              value: item.content
            }
          )))
        );
      });
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-faq-items" }, renderFAQItems()));
  };
  var save_default = FAQSave;

  // blocks/faq/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/faq", {
    apiVersion: 2,
    title: digiBlocksData.blocks["faq"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["faq"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["faq"].description,
    keywords: [__2("faq", "digiblocks"), __2("questions", "digiblocks"), __2("answers", "digiblocks"), __2("schema", "digiblocks")],
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
      items: {
        type: "array",
        default: [
          {
            id: "faq-item-1",
            title: __2("What is a frequently asked question?", "digiblocks"),
            content: __2("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.", "digiblocks"),
            isOpen: true
          },
          {
            id: "faq-item-2",
            title: __2("How do I add more questions and answers?", "digiblocks"),
            content: __2('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.', "digiblocks"),
            isOpen: false
          }
        ]
      },
      titleColor: {
        type: "string",
        default: ""
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      titleActiveColor: {
        type: "string",
        default: "#1e73be"
      },
      backgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      backgroundActiveColor: {
        type: "string",
        default: "#f7f7f7"
      },
      contentColor: {
        type: "string",
        default: "#666666"
      },
      contentBackgroundColor: {
        type: "string",
        default: ""
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      borderHoverColor: {
        type: "string",
        default: ""
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderStyle: {
        type: "string",
        default: "solid"
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
      padding: {
        type: "object",
        default: {
          desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: "px", isLinked: false },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      titleTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 18, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
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
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      iconPosition: {
        type: "string",
        default: "right"
      },
      iconColor: {
        type: "string",
        default: ""
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      iconActiveColor: {
        type: "string",
        default: "#1e73be"
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 16,
          tablet: "",
          mobile: ""
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
      allowMultipleOpen: {
        type: "boolean",
        default: false
      },
      iconType: {
        type: "string",
        default: "plusMinus"
      },
      titleTag: {
        type: "string",
        default: "h3"
      },
      questionPrefix: {
        type: "string",
        default: ""
      },
      questionPrefixColor: {
        type: "string",
        default: ""
      },
      answerPrefix: {
        type: "string",
        default: ""
      },
      answerPrefixColor: {
        type: "string",
        default: ""
      },
      layout: {
        type: "string",
        default: "boxed"
      },
      itemsSpacing: {
        type: "object",
        default: {
          desktop: 16,
          tablet: "",
          mobile: ""
        }
      },
      schemaType: {
        type: "string",
        default: "FAQPage"
      },
      schemaName: {
        type: "string",
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
        items: [
          {
            id: "faq-item-1",
            title: __2("What is a frequently asked question?", "digiblocks"),
            content: __2("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.", "digiblocks"),
            isOpen: true
          },
          {
            id: "faq-item-2",
            title: __2("How do I add more questions?", "digiblocks"),
            content: __2('Click the "Add FAQ Item" button to add more questions and answers.', "digiblocks"),
            isOpen: false
          }
        ],
        layout: "boxed",
        titleColor: "",
        titleActiveColor: "#1e73be",
        backgroundColor: "#ffffff"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
