(() => {
  // blocks/call-to-action/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar,
    MediaUpload,
    MediaUploadCheck
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    TabPanel,
    TextControl,
    BaseControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var CallToActionEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      style,
      horizontalLayout,
      title,
      content,
      headingTag,
      titleColor,
      textColor,
      buttonColor,
      buttonTextColor,
      backgroundColor,
      backgroundType,
      backgroundImage,
      backgroundOverlayColor,
      backgroundOverlayOpacity,
      backgroundPosition,
      backgroundSize,
      backgroundRepeat,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      padding,
      margin,
      align,
      titleTypography,
      contentTypography,
      buttonTypography,
      contentWidth,
      width,
      animation,
      boxShadow,
      boxShadowHover,
      buttonBorderRadius,
      buttonPadding,
      buttonsAlign,
      buttons,
      titleHoverColor,
      textHoverColor,
      buttonHoverColor,
      buttonTextHoverColor,
      backgroundHoverColor,
      highlightText,
      highlightColor,
      highlightType,
      verticalAlign,
      reverseColumnsMobile,
      minHeight
    } = attributes;
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
    useBlockId(id, clientId, setAttributes);
    useEffect(() => {
      if (!buttons || !Array.isArray(buttons) || buttons.length === 0) {
        setAttributes({
          buttons: [
            {
              id: "button-1",
              text: __("Click Here", "digiblocks"),
              url: "#",
              openInNewTab: false,
              rel: "",
              isPrimary: true,
              isFullWidth: false,
              customColors: false,
              backgroundColor: "",
              textColor: "",
              hoverBackgroundColor: "",
              hoverTextColor: "",
              borderRadius: ""
            }
          ]
        });
      }
      if (!titleTypography) {
        setAttributes({
          titleTypography: {
            fontFamily: "",
            fontSize: { desktop: 36, tablet: 32, mobile: 28 },
            fontSizeUnit: "px",
            fontWeight: "700",
            fontStyle: "normal",
            textTransform: "none",
            textDecoration: "none",
            lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
            lineHeightUnit: "em",
            letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
            letterSpacingUnit: "px"
          }
        });
      }
      if (!contentTypography) {
        setAttributes({
          contentTypography: {
            fontFamily: "",
            fontSize: { desktop: 18, tablet: 16, mobile: 16 },
            fontSizeUnit: "px",
            fontWeight: "400",
            fontStyle: "normal",
            textTransform: "none",
            textDecoration: "none",
            lineHeight: { desktop: 1.6, tablet: 1.6, mobile: 1.5 },
            lineHeightUnit: "em",
            letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
            letterSpacingUnit: "px"
          }
        });
      }
      if (!buttonTypography) {
        setAttributes({
          buttonTypography: {
            fontFamily: "",
            fontSize: { desktop: 16, tablet: 16, mobile: 16 },
            fontSizeUnit: "px",
            fontWeight: "500",
            fontStyle: "normal",
            textTransform: "none",
            textDecoration: "none",
            lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
            lineHeightUnit: "em",
            letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
            letterSpacingUnit: "px"
          }
        });
      }
      if (!boxShadowHover) {
        setAttributes({
          boxShadowHover: {
            enable: false,
            color: "rgba(0, 0, 0, 0.2)",
            horizontal: 0,
            vertical: 0,
            blur: 0,
            spread: 0,
            position: "outset"
          }
        });
      }
    }, [buttons, titleTypography, contentTypography, buttonTypography, boxShadowHover, setAttributes]);
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
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Double", "digiblocks"), value: "double" },
      { label: __("Groove", "digiblocks"), value: "groove" },
      { label: __("Ridge", "digiblocks"), value: "ridge" },
      { label: __("Inset", "digiblocks"), value: "inset" },
      { label: __("Outset", "digiblocks"), value: "outset" }
    ];
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const styleOptions = [
      { label: __("Basic", "digiblocks"), value: "basic" },
      { label: __("Split", "digiblocks"), value: "split" },
      { label: __("Cover", "digiblocks"), value: "cover" },
      { label: __("Box", "digiblocks"), value: "box" },
      { label: __("Modern", "digiblocks"), value: "modern" },
      { label: __("Gradient", "digiblocks"), value: "gradient" },
      { label: __("Minimal", "digiblocks"), value: "minimal" },
      { label: __("Callout", "digiblocks"), value: "callout" },
      { label: __("Banner", "digiblocks"), value: "banner" }
    ];
    const headingTagOptions = [
      { label: "H1", value: "h1" },
      { label: "H2", value: "h2" },
      { label: "H3", value: "h3" },
      { label: "H4", value: "h4" },
      { label: "H5", value: "h5" },
      { label: "H6", value: "h6" }
    ];
    const backgroundTypeOptions = [
      { label: __("Color", "digiblocks"), value: "color" },
      { label: __("Image", "digiblocks"), value: "image" },
      { label: __("Gradient", "digiblocks"), value: "gradient" }
    ];
    const backgroundPositionOptions = [
      { label: __("Center Center", "digiblocks"), value: "center center" },
      { label: __("Center Top", "digiblocks"), value: "center top" },
      { label: __("Center Bottom", "digiblocks"), value: "center bottom" },
      { label: __("Left Top", "digiblocks"), value: "left top" },
      { label: __("Left Center", "digiblocks"), value: "left center" },
      { label: __("Left Bottom", "digiblocks"), value: "left bottom" },
      { label: __("Right Top", "digiblocks"), value: "right top" },
      { label: __("Right Center", "digiblocks"), value: "right center" },
      { label: __("Right Bottom", "digiblocks"), value: "right bottom" }
    ];
    const backgroundSizeOptions = [
      { label: __("Cover", "digiblocks"), value: "cover" },
      { label: __("Contain", "digiblocks"), value: "contain" },
      { label: __("Auto", "digiblocks"), value: "auto" }
    ];
    const backgroundRepeatOptions = [
      { label: __("No Repeat", "digiblocks"), value: "no-repeat" },
      { label: __("Repeat", "digiblocks"), value: "repeat" },
      { label: __("Repeat X", "digiblocks"), value: "repeat-x" },
      { label: __("Repeat Y", "digiblocks"), value: "repeat-y" }
    ];
    const buttonsAlignOptions = [
      { label: __("Left", "digiblocks"), value: "left" },
      { label: __("Center", "digiblocks"), value: "center" },
      { label: __("Right", "digiblocks"), value: "right" }
    ];
    const verticalAlignOptions = [
      { label: __("Top", "digiblocks"), value: "flex-start" },
      { label: __("Center", "digiblocks"), value: "center" },
      { label: __("Bottom", "digiblocks"), value: "flex-end" }
    ];
    const highlightTypeOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Background", "digiblocks"), value: "background" },
      { label: __("Text", "digiblocks"), value: "text" },
      { label: __("Underline", "digiblocks"), value: "underline" }
    ];
    const DEFAULT_IMAGE_SIZE = { width: 300, height: 200 };
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
    const addButton = () => {
      const newButtonId = `button-${buttons.length + 1}`;
      const newButtons = [...buttons, {
        id: newButtonId,
        text: __("Click Here", "digiblocks"),
        url: "#",
        openInNewTab: false,
        rel: "",
        isPrimary: false,
        isFullWidth: false,
        customColors: false,
        backgroundColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
        borderRadius: ""
      }];
      setAttributes({ buttons: newButtons });
    };
    const removeButton = (buttonId) => {
      const newButtons = buttons.filter((button) => button.id !== buttonId);
      setAttributes({ buttons: newButtons });
    };
    const updateButton = (buttonId, property, value) => {
      const newButtons = buttons.map((button) => {
        if (button.id === buttonId) {
          return {
            ...button,
            [property]: value
          };
        }
        return button;
      });
      setAttributes({ buttons: newButtons });
    };
    const renderStylePreview = (styleOption) => {
      const isSelected = style === styleOption.value;
      const containerStyle = {
        display: "inline-flex",
        flexDirection: "column",
        width: "70px",
        height: "70px",
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
      switch (styleOption.value) {
        case "basic":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "80%", height: "4px", backgroundColor: "#333", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "60%", height: "2px", backgroundColor: "#777", marginBottom: "6px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "40%", height: "6px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "split":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "100%", backgroundColor: "#007cba", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "70%", backgroundColor: "#fff", opacity: 0.2 } })), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "100%", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "80%", height: "3px", backgroundColor: "#333", marginBottom: "2px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "60%", height: "2px", backgroundColor: "#777", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "40%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } })));
          break;
        case "cover":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", backgroundColor: "#007cba", opacity: 0.7, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#fff", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#fff", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#fff", borderRadius: "2px" } }));
          break;
        case "box":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "90%", height: "90%", margin: "auto", border: "2px solid #007cba", borderRadius: "3px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "modern":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "3px", position: "relative" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { position: "absolute", left: "0", top: "20%", width: "5px", height: "60%", backgroundColor: "#007cba" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px", marginLeft: "8px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px", marginLeft: "8px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px", marginLeft: "8px" } }));
          break;
        case "gradient":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#fff", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#fff", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#fff", borderRadius: "2px" } }));
          break;
        case "minimal":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "1px", backgroundColor: "#007cba", marginBottom: "1px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "callout":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            border: "1px solid #eee",
            borderLeft: "5px solid #007cba",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "5px"
          } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } }));
          break;
        case "banner":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f0f7ff",
            position: "relative"
          } }, /* @__PURE__ */ wp.element.createElement("div", { style: { height: "4px", width: "100%", backgroundColor: "#007cba" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "70%", height: "3px", backgroundColor: "#333", marginBottom: "3px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "50%", height: "2px", backgroundColor: "#777", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "30%", height: "4px", backgroundColor: "#007cba", borderRadius: "2px" } })));
          break;
        default:
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "80%", height: "4px", backgroundColor: "#333", marginBottom: "4px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "60%", height: "2px", backgroundColor: "#777", marginBottom: "6px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "40%", height: "6px", backgroundColor: "#007cba", borderRadius: "2px" } }));
      }
      return /* @__PURE__ */ wp.element.createElement("div", { style: containerStyle, onClick: () => setAttributes({ style: styleOption.value }) }, /* @__PURE__ */ wp.element.createElement("div", { style: labelStyle }, styleOption.label), /* @__PURE__ */ wp.element.createElement("div", { style: previewStyle }, previewContent));
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "none") {
        const borderWidthCSS = getDimensionCSS(borderWidth, "border-width", activeDevice);
        const borderWidthOutput = borderWidthCSS || "border-width: 1px 1px 1px 1px;";
        borderCSS = `
				border-style: ${borderStyle};
				border-color: ${borderColor || "#e0e0e0"};
				${borderWidthOutput}
			`;
      } else {
        borderCSS = "border-style: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let backgroundCSS = "";
      if (backgroundType === "color") {
        backgroundCSS = `background-color: ${backgroundColor || "#f5f5f5"};`;
      } else if (backgroundType === "image" && backgroundImage && backgroundImage.url) {
        backgroundCSS = `
                background-image: url(${backgroundImage.url});
                background-position: ${backgroundPosition || "center center"};
                background-size: ${backgroundSize || "cover"};
                background-repeat: ${backgroundRepeat || "no-repeat"};
            `;
      } else if (backgroundType === "gradient") {
        backgroundCSS = `background: linear-gradient(135deg, ${backgroundColor || "#6a11cb"} 0%, ${backgroundHoverColor || "#2575fc"} 100%);`;
      }
      const minHeightCSS = minHeight && minHeight[activeDevice] ? `min-height: ${minHeight[activeDevice]}px;` : "";
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
      let buttonTypographyCSS = "";
      if (buttonTypography) {
        if (buttonTypography.fontFamily) {
          buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
        }
        if (buttonTypography.fontSize && buttonTypography.fontSize[activeDevice]) {
          buttonTypographyCSS += `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || "px"};`;
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
        if (buttonTypography.lineHeight && buttonTypography.lineHeight[activeDevice]) {
          buttonTypographyCSS += `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || "em"};`;
        }
        if (buttonTypography.letterSpacing && buttonTypography.letterSpacing[activeDevice]) {
          buttonTypographyCSS += `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || "px"};`;
        }
      }
      const contentWidthCSS = contentWidth ? `max-width: ${contentWidth}${typeof contentWidth === "number" ? "%" : ""};` : "";
      const widthCSS = width ? `width: ${width}${typeof width === "number" ? "px" : ""};` : "width: 100%;";
      const textAlignCSS = align ? `text-align: ${align};` : "";
      const verticalAlignCSS = verticalAlign ? `justify-content: ${verticalAlign};` : "justify-content: center;";
      const buttonsAlignCSS = buttonsAlign ? `text-align: ${buttonsAlign};` : "text-align: left;";
      const mobileReverseCSS = reverseColumnsMobile ? "@media (max-width: 767px) { ." + id + " .digiblocks-cta-split-container { flex-direction: column-reverse; } }" : "";
      let highlightCSS = "";
      if (highlightText && highlightType && highlightType !== "none" && highlightColor) {
        switch (highlightType) {
          case "background":
            highlightCSS = `
                        .${id} .digiblocks-cta-highlight {
                            background-color: ${highlightColor};
                            padding: 0 5px;
                            border-radius: 3px;
                        }
                    `;
            break;
          case "text":
            highlightCSS = `
                        .${id} .digiblocks-cta-highlight {
                            color: ${highlightColor};
                        }
                    `;
            break;
          case "underline":
            highlightCSS = `
                        .${id} .digiblocks-cta-highlight {
                            border-bottom: 2px solid ${highlightColor};
                            padding-bottom: 2px;
                        }
                    `;
            break;
        }
      }
      let styleSpecificCSS = "";
      switch (style) {
        case "split":
          styleSpecificCSS = `
                    .${id} {
                        padding: 0;
                    }
                    
                    .${id} .digiblocks-cta-split-container {
                        display: flex;
                        align-items: stretch;
                        min-height: inherit;
                    }
                    
                    .${id} .digiblocks-cta-image-container {
                        flex: 1;
                        min-height: 300px;
                        background-image: url(${backgroundImage?.url || ""});
                        background-position: ${backgroundPosition || "center center"};
                        background-size: ${backgroundSize || "cover"};
                        background-repeat: ${backgroundRepeat || "no-repeat"};
                    }
                    
                    .${id} .digiblocks-cta-content-container {
                        flex: 1;
                        ${getDimensionCSS(padding, "padding", activeDevice)}
                        ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                        display: flex;
                        flex-direction: column;
                        ${verticalAlignCSS}
                    }

					@media (max-width: 767px) {
                        .${id} .digiblocks-cta-split-container {
                            flex-direction: column;
                        }
                        
                        .${id} .digiblocks-cta-image-container {
                            min-height: 200px;
                        }
                    }
                `;
          break;
        case "cover":
          styleSpecificCSS = `
                    .${id} {
                        position: relative;
                        z-index: 1;
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    .${id} .digiblocks-cta-background {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        ${backgroundCSS}
                    }
                    
                    .${id} .digiblocks-cta-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background-color: ${backgroundOverlayColor || "rgba(0,0,0,0.5)"};
                        opacity: ${backgroundOverlayOpacity !== void 0 ? backgroundOverlayOpacity / 100 : 0.5};
                    }
                    
                    .${id} .digiblocks-cta-title {
                        color: ${titleColor || "#fff"};
                    }
                    
                    .${id} .digiblocks-cta-content {
						color: ${textColor || "rgba(255, 255, 255, 0.9)"};
                    }
                    
                    .${id} .digiblocks-cta-button {
                        border: 2px solid #fff;
                        color: #fff;
                        background-color: transparent;
                    }
                    
                    .${id} .digiblocks-cta-button.is-primary {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${id} .digiblocks-cta-button:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${id} .digiblocks-cta-button.is-primary:hover {
                        background-color: transparent;
                        color: #fff;
                    }
                `;
          break;
        case "box":
          styleSpecificCSS = `
                    .${id} {
                        border: 2px solid ${borderColor || "#e0e0e0"};
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                `;
          break;
        case "modern":
          styleSpecificCSS = `
                    .${id} {
                        position: relative;
                        padding-left: 50px;
                    }
                    
                    .${id}:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 20%;
                        height: 60%;
                        width: 8px;
                        background-color: ${buttonColor || "#1e73be"};
                        border-radius: 4px;
                    }
                `;
          break;
        case "gradient":
          styleSpecificCSS = `
                    .${id} {
                        background: linear-gradient(135deg, ${backgroundColor || "#6a11cb"} 0%, ${backgroundHoverColor || "#2575fc"} 100%);
                        color: #fff;
                        border-radius: 10px;
                    }
                    
                    .${id} .digiblocks-cta-title {
                        color: ${titleColor || "#fff"};
                    }
                    
                    .${id} .digiblocks-cta-content {
						color: ${textColor || "rgba(255, 255, 255, 0.9)"};
                    }
                    
                    .${id} .digiblocks-cta-button {
                        border: 2px solid #fff;
                        color: #fff;
                        background-color: transparent;
                    }
                    
                    .${id} .digiblocks-cta-button.is-primary {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${id} .digiblocks-cta-button:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${id} .digiblocks-cta-button.is-primary:hover {
                        background-color: transparent;
                        color: #fff;
                    }
                `;
          break;
        case "minimal":
          styleSpecificCSS = `
                    .${id} {
                        border-top: 1px solid #eee;
                        border-bottom: 1px solid #eee;
                        padding-top: 50px;
                        padding-bottom: 50px;
                    }
                    
                    .${id} .digiblocks-cta-buttons {
                        position: relative;
                    }
                    
                    .${id} .digiblocks-cta-buttons:before {
                        content: '';
                        position: absolute;
                        top: -20px;
                        left: 0;
                        width: 50px;
                        height: 2px;
                        background-color: ${buttonColor || "#1e73be"};
                    }
                `;
          break;
        case "callout":
          styleSpecificCSS = `
                    .${id} {
                        border-left: 5px solid ${buttonColor || "#1e73be"};
                        background-color: ${backgroundColor || "#f5f5f5"};
                        padding: 30px;
                        position: relative;
                        border-radius: 0 4px 4px 0;
                    }
                    
                    .${id}:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        width: 5px;
                        background-color: ${buttonColor || "#1e73be"};
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .${id} .digiblocks-cta-title {
                        color: ${titleColor};
                        margin-bottom: 15px;
                    }
                    
                    .${id} .digiblocks-cta-content {
                        color: ${textColor || "#666"};
                        margin-bottom: 20px;
                    }
                `;
          break;
        case "banner":
          styleSpecificCSS = `
                    .${id} {
                        position: relative;
                        padding: 30px;
                        background-color: ${backgroundColor || "#f0f7ff"};
                        border-radius: 0;
                        overflow: visible;
                    }
                    
                    .${id}:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background-color: ${buttonColor || "#1e73be"};
                    }
                    
                    .${id} .digiblocks-cta-title {
                        color: ${titleColor};
                        margin-bottom: 15px;
                    }
                    
                    .${id} .digiblocks-cta-content {
                        color: ${textColor || "#666"};
                        margin-bottom: 20px;
                    }
                    
                    .${id} .digiblocks-cta-button {
                        background-color: ${buttonColor || "#1e73be"};
                        color: ${buttonTextColor || "#fff"};
                        border-radius: 4px;
                        padding: 10px 20px;
                        transition: all 0.3s ease;
                    }
                    
                    .${id} .digiblocks-cta-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                `;
          break;
        default:
          styleSpecificCSS = "";
      }
      let horizontalLayoutCSS = "";
      if (horizontalLayout) {
        highlightCSS = `
				.${id} .digiblocks-cta-horizontal {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 2rem;
					width: 100%;
				}
				
				.${id} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
					flex: 1;
				}
				
				.${id} .digiblocks-cta-horizontal .digiblocks-cta-buttons {
					flex-shrink: 0;
				}
				
				/* Responsive styles for horizontal layout */
				@media (max-width: 767px) {
					.${id} .digiblocks-cta-horizontal {
						flex-direction: column;
						align-items: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
						gap: 1rem;
					}
					
					.${id} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
						width: 100%;
						text-align: ${align};
					}
				}
			`;
      }
      const titleWithHighlightCSS = highlightText && highlightType && highlightType !== "none" ? `
            .${id} .digiblocks-cta-title {
                white-space: pre-wrap;
            }
        ` : "";
      let hoverCSS = `
            .${id} .digiblocks-cta-title {
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-cta-content {
                transition: color 0.3s ease;
            }
            
            .${id}:hover .digiblocks-cta-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
            }
            
            .${id}:hover .digiblocks-cta-content {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
            }
            
            .${id}:hover {
                ${backgroundHoverColor && style !== "gradient" && style !== "split" ? `background-color: ${backgroundHoverColor};` : ""}
                
                ${boxShadowHover && boxShadowHover.enable ? `
                    ${boxShadowHover.position === "inset" ? "box-shadow: inset" : "box-shadow:"} 
                    ${boxShadowHover.horizontal}px 
                    ${boxShadowHover.vertical}px 
                    ${boxShadowHover.blur}px 
                    ${boxShadowHover.spread}px 
                    ${boxShadowHover.color};` : ""}
            }
            
            .${id} .digiblocks-cta-button {
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-cta-button:hover {
                ${buttonHoverColor ? `background-color: ${buttonHoverColor};` : ""}
                ${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}
            }
        `;
      return `
            /* Call to Action Block - ${id} */
            .${id} {
                ${style !== "split" ? backgroundCSS : ""}
                ${borderCSS}
				${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
                ${boxShadowCSS}
                ${style !== "split" ? `${getDimensionCSS(padding, "padding", activeDevice)}` : ""}
                ${getDimensionCSS(margin, "margin", activeDevice)}
                ${widthCSS}
                ${minHeightCSS}
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .${id} .digiblocks-cta-container {
                ${contentWidthCSS}
                margin: 0 auto;
                ${style !== "split" ? textAlignCSS : ""}
            }
            
            .${id} .digiblocks-cta-title {
                color: ${titleColor};
                margin-top: 0;
                margin-bottom: 20px;
                ${titleTypographyCSS}
            }
            
            .${id} .digiblocks-cta-content {
                color: ${textColor || "#666666"};
                margin-bottom: 30px;
                ${contentTypographyCSS}
            }
            
            .${id} .digiblocks-cta-buttons {
                ${buttonsAlignCSS}
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                ${buttonsAlign === "center" ? "justify-content: center;" : buttonsAlign === "right" ? "justify-content: flex-end;" : "justify-content: flex-start;"}
            }
            
            .${id} .digiblocks-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                border: none;
                cursor: pointer;
                background-color: ${buttonColor || "#1e73be"};
                color: ${buttonTextColor || "#ffffff"};
                ${getDimensionCSS(buttonPadding, "padding", activeDevice)}
                ${getDimensionCSS(buttonBorderRadius, "border-radius", activeDevice)}
                ${buttonTypographyCSS}
            }
            
            .${id} .digiblocks-cta-button.is-full-width {
                width: 100%;
            }
            
            .${id} .digiblocks-cta-button:not(.is-primary) {
                background-color: transparent;
                color: ${buttonColor || "#1e73be"};
                border: 2px solid ${buttonColor || "#1e73be"};
            }
            
            ${styleSpecificCSS}
            ${horizontalLayoutCSS}
            ${highlightCSS}
            ${titleWithHighlightCSS}
            ${hoverCSS}
            ${mobileReverseCSS}
            
            /* Responsive styles */
			@media (max-width: 991px) {
                .${id} {
                    ${style !== "split" ? `${getDimensionCSS(padding, "padding", "tablet")}` : ""}
                    
					${getDimensionCSS(margin, "margin", "tablet")}
                    
                    ${minHeight && minHeight["tablet"] ? `min-height: ${minHeight["tablet"]}px;` : ""}
                    
                    ${borderStyle && borderStyle !== "none" ? borderWidth && borderWidth["tablet"] ? `${getDimensionCSS(borderWidth, "border-width", "tablet")}` : "" : ""}
                    
                    ${borderStyle && borderStyle !== "none" ? borderRadius && borderRadius["tablet"] ? `${getDimensionCSS(borderRadius, "border-radius", "tablet")}` : "" : ""}
                }
                
                .${id} .digiblocks-cta-title {
                    ${titleTypography && titleTypography.fontSize && titleTypography.fontSize["tablet"] ? `font-size: ${titleTypography.fontSize["tablet"]}${titleTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${titleTypography && titleTypography.lineHeight && titleTypography.lineHeight["tablet"] ? `line-height: ${titleTypography.lineHeight["tablet"]}${titleTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${titleTypography && titleTypography.letterSpacing && titleTypography.letterSpacing["tablet"] ? `letter-spacing: ${titleTypography.letterSpacing["tablet"]}${titleTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                .${id} .digiblocks-cta-content {
                    ${contentTypography && contentTypography.fontSize && contentTypography.fontSize["tablet"] ? `font-size: ${contentTypography.fontSize["tablet"]}${contentTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${contentTypography && contentTypography.lineHeight && contentTypography.lineHeight["tablet"] ? `line-height: ${contentTypography.lineHeight["tablet"]}${contentTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${contentTypography && contentTypography.letterSpacing && contentTypography.letterSpacing["tablet"] ? `letter-spacing: ${contentTypography.letterSpacing["tablet"]}${contentTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                .${id} .digiblocks-cta-button {
                    ${buttonTypography && buttonTypography.fontSize && buttonTypography.fontSize["tablet"] ? `font-size: ${buttonTypography.fontSize["tablet"]}${buttonTypography.fontSizeUnit || "px"};` : ""}

					${getDimensionCSS(buttonPadding, "padding", "tablet")}
					${getDimensionCSS(buttonBorderRadius, "border-radius", "tablet")}
                }
            }

			@media (max-width: 767px) {
                .${id} {
					${style !== "split" ? `${getDimensionCSS(padding, "padding", "mobile")}` : ""}

					${getDimensionCSS(margin, "margin", "mobile")}
					
					${minHeight && minHeight["mobile"] ? `min-height: ${minHeight["mobile"]}px;` : ""}
					
					${borderStyle && borderStyle !== "none" ? borderWidth && borderWidth["mobile"] ? `${getDimensionCSS(borderWidth, "border-width", "mobile")}` : "" : ""}
					
					${getDimensionCSS(borderRadius, "border-radius", "mobile")}
                }
                
                ${style === "split" ? `.${id} .digiblocks-cta-split-container {
                        flex-direction: ${reverseColumnsMobile ? "column-reverse" : "column"};
                    }
                    
                    .${id} .digiblocks-cta-image-container {
                        min-height: 200px;
                    }
                    
                    .${id} .digiblocks-cta-content-container {
                        ${getDimensionCSS(padding, "padding", "mobile")}
                    }` : ""}
                
                .${id} .digiblocks-cta-title {
                    ${titleTypography && titleTypography.fontSize && titleTypography.fontSize["mobile"] ? `font-size: ${titleTypography.fontSize["mobile"]}${titleTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${titleTypography && titleTypography.lineHeight && titleTypography.lineHeight["mobile"] ? `line-height: ${titleTypography.lineHeight["mobile"]}${titleTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${titleTypography && titleTypography.letterSpacing && titleTypography.letterSpacing["mobile"] ? `letter-spacing: ${titleTypography.letterSpacing["mobile"]}${titleTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                .${id} .digiblocks-cta-content {
                    ${contentTypography && contentTypography.fontSize && contentTypography.fontSize["mobile"] ? `font-size: ${contentTypography.fontSize["mobile"]}${contentTypography.fontSizeUnit || "px"};` : ""}
                    
                    ${contentTypography && contentTypography.lineHeight && contentTypography.lineHeight["mobile"] ? `line-height: ${contentTypography.lineHeight["mobile"]}${contentTypography.lineHeightUnit || "em"};` : ""}
                    
                    ${contentTypography && contentTypography.letterSpacing && contentTypography.letterSpacing["mobile"] ? `letter-spacing: ${contentTypography.letterSpacing["mobile"]}${contentTypography.letterSpacingUnit || "px"};` : ""}
                }
                
                .${id} .digiblocks-cta-button {
                    ${buttonTypography && buttonTypography.fontSize && buttonTypography.fontSize["mobile"] ? `font-size: ${buttonTypography.fontSize["mobile"]}${buttonTypography.fontSizeUnit || "px"};` : ""}
                    
					${getDimensionCSS(buttonPadding, "padding", "mobile")}
					${getDimensionCSS(buttonBorderRadius, "border-radius", "mobile")}
                }
                
                .${id} .digiblocks-cta-buttons {
                    flex-direction: column;
					gap: 10px;
                }
                
                .${id} .digiblocks-cta-button {
                    width: 100%;
                }
            }

			/* Change image for Split layout */
			.${id} .digiblocks-image-upload-container {
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			
			.${id} .digiblocks-image-upload-container img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
				cursor: pointer;
				transition: transform 0.3s ease;
			}
			
			.${id} .digiblocks-image-upload-container:hover img {
				transform: scale(1.05);
			}
			
			.${id} .digiblocks-change-image-button {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background-color: rgba(0, 0, 0, 0.5);
				color: white;
				padding: 8px 0;
				text-align: center;
				font-size: 12px;
				cursor: pointer;
				opacity: 0;
				transition: opacity 0.3s ease;
				border: none;
				width: 100%;
			}
			
			.${id} .digiblocks-image-upload-container:hover .digiblocks-change-image-button {
				opacity: 1;
			}
			
			.${id} .digiblocks-image-placeholder {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #f0f0f0;
				color: #888;
				font-size: 14px;
				cursor: pointer;
				min-height: 300px;
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
    const renderTitleWithHighlight = () => {
      if (!highlightText || !title)
        return title;
      const index = title.indexOf(highlightText);
      if (index === -1)
        return title;
      const before = title.substring(0, index);
      const highlight = title.substring(index, index + highlightText.length);
      const after = title.substring(index + highlightText.length);
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, before, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cta-highlight" }, highlight), after);
    };
    const renderButtonEditor = (button, index) => {
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-button-editor", key: button.id, style: { marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "5px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" } }, /* @__PURE__ */ wp.element.createElement("h3", { style: { margin: 0 } }, __("Button", "digiblocks"), " ", index + 1), buttons.length > 1 && /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          isDestructive: true,
          onClick: () => removeButton(button.id),
          icon: "trash"
        },
        __("Remove", "digiblocks")
      )), /* @__PURE__ */ wp.element.createElement(
        TextControl,
        {
          label: __("Button Text", "digiblocks"),
          value: button.text || "",
          onChange: (value) => updateButton(button.id, "text", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
        TextControl,
        {
          label: __("Button URL", "digiblocks"),
          value: button.url || "",
          onChange: (value) => updateButton(button.id, "url", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      )), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, /* @__PURE__ */ wp.element.createElement(
        ToggleControl,
        {
          label: __("Open in new tab", "digiblocks"),
          checked: button.openInNewTab || false,
          onChange: (value) => updateButton(button.id, "openInNewTab", value),
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        ToggleControl,
        {
          label: __("Add noopener noreferrer", "digiblocks"),
          checked: !!button.rel,
          onChange: (value) => updateButton(button.id, "rel", value ? "noopener noreferrer" : ""),
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        ToggleControl,
        {
          label: __("Primary Button", "digiblocks"),
          checked: button.isPrimary || false,
          onChange: (value) => updateButton(button.id, "isPrimary", value),
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        ToggleControl,
        {
          label: __("Full Width Button", "digiblocks"),
          checked: button.isFullWidth || false,
          onChange: (value) => updateButton(button.id, "isFullWidth", value),
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        ToggleControl,
        {
          label: __("Custom Colors", "digiblocks"),
          checked: button.customColors || false,
          onChange: (value) => updateButton(button.id, "customColors", value),
          __nextHasNoMarginBottom: true
        }
      )), button.customColors && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px" } }, /* @__PURE__ */ wp.element.createElement(
        PanelColorSettings,
        {
          title: __("Button Colors", "digiblocks"),
          initialOpen: true,
          enableAlpha: true,
          colorSettings: [
            {
              value: button.backgroundColor,
              onChange: (value) => updateButton(button.id, "backgroundColor", value),
              label: __("Background Color", "digiblocks")
            },
            {
              value: button.textColor,
              onChange: (value) => updateButton(button.id, "textColor", value),
              label: __("Text Color", "digiblocks")
            },
            {
              value: button.hoverBackgroundColor,
              onChange: (value) => updateButton(button.id, "hoverBackgroundColor", value),
              label: __("Hover Background Color", "digiblocks")
            },
            {
              value: button.hoverTextColor,
              onChange: (value) => updateButton(button.id, "hoverTextColor", value),
              label: __("Hover Text Color", "digiblocks")
            }
          ]
        }
      ), /* @__PURE__ */ wp.element.createElement(
        TextControl,
        {
          label: __("Border Radius", "digiblocks"),
          type: "number",
          value: button.borderRadius || "",
          onChange: (value) => updateButton(button.id, "borderRadius", value),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      )));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "general",
              title: __("General", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("CTA Style", "digiblocks"),
                id: "cta-style-selector",
                className: "digiblocks-cta-style-selector",
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", justifyContent: "center", margin: "0 -5px" } }, styleOptions.map((styleOption) => /* @__PURE__ */ wp.element.createElement("div", { key: styleOption.value }, renderStylePreview(styleOption))))
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Horizontal Layout", "digiblocks"),
                help: __("Display content and buttons side by side", "digiblocks"),
                checked: horizontalLayout || false,
                onChange: (value) => setAttributes({ horizontalLayout: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Heading Tag", "digiblocks"),
                value: headingTag || "h2",
                options: headingTagOptions,
                onChange: (value) => setAttributes({ headingTag: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            style === "split" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Vertical Align", "digiblocks"),
                value: verticalAlign || "center",
                onChange: (value) => setAttributes({ verticalAlign: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              verticalAlignOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Reverse Columns on Mobile", "digiblocks"),
                help: __("Place the image above the text on mobile devices", "digiblocks"),
                checked: reverseColumnsMobile || false,
                onChange: (value) => setAttributes({ reverseColumnsMobile: value }),
                __nextHasNoMarginBottom: true
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Content Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: contentWidth,
                  onChange: (value) => setAttributes({ contentWidth: value }),
                  min: 10,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Min Height", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: minHeight && minHeight[localActiveDevice] ? minHeight[localActiveDevice] : 0,
                  onChange: (value) => setAttributes({
                    minHeight: {
                      ...minHeight || {},
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 1e3,
                  step: 10,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "content",
              title: __("Content", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("Title Highlight", "digiblocks"),
                id: "title-highlight",
                help: __("Enter text within the title to highlight", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                TextControl,
                {
                  value: highlightText || "",
                  onChange: (value) => setAttributes({ highlightText: value }),
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            highlightText && /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Highlight Type", "digiblocks"),
                value: highlightType || "background",
                options: highlightTypeOptions,
                onChange: (value) => setAttributes({ highlightType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            highlightText && highlightType && highlightType !== "none" && /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Highlight Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: highlightColor,
                    onChange: (value) => setAttributes({ highlightColor: value }),
                    label: __("Highlight Color", "digiblocks")
                  }
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "buttons",
              title: __("Buttons", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Buttons Alignment", "digiblocks"),
                value: buttonsAlign || "left",
                onChange: (value) => setAttributes({ buttonsAlign: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              buttonsAlignOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: buttonPadding && buttonPadding[localActiveDevice] ? buttonPadding[localActiveDevice] : {
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 20,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    buttonPadding: {
                      ...buttonPadding || {},
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: buttonBorderRadius && buttonBorderRadius[localActiveDevice] ? buttonBorderRadius[localActiveDevice] : {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    buttonBorderRadius: {
                      ...buttonBorderRadius || {},
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
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-button-list" }, buttons && buttons.map((button, i) => renderButtonEditor(button, i))),
            /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                onClick: addButton,
                style: { marginTop: "10px", width: "100%" }
              },
              __("Add Button", "digiblocks")
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
                          value: textColor,
                          onChange: (value) => setAttributes({ textColor: value }),
                          label: __("Text Color", "digiblocks")
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
                          value: buttonColor,
                          onChange: (value) => setAttributes({ buttonColor: value }),
                          label: __("Button Color", "digiblocks")
                        },
                        {
                          value: buttonTextColor,
                          onChange: (value) => setAttributes({ buttonTextColor: value }),
                          label: __("Button Text Color", "digiblocks")
                        }
                      ]
                    }
                  ), borderStyle && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Border Color", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: borderColor,
                          onChange: (value) => setAttributes({ borderColor: value }),
                          label: __("Border Color", "digiblocks")
                        }
                      ]
                    }
                  ));
                } else {
                  return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Text Hover Colors", "digiblocks"),
                      initialOpen: true,
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
                          label: __("Text Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Button Hover Colors", "digiblocks"),
                      initialOpen: false,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: buttonHoverColor,
                          onChange: (value) => setAttributes({ buttonHoverColor: value }),
                          label: __("Button Hover Color", "digiblocks")
                        },
                        {
                          value: buttonTextHoverColor,
                          onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                          label: __("Button Text Hover Color", "digiblocks")
                        }
                      ]
                    }
                  ), backgroundType === "color" && style !== "gradient" && /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Background Hover Color", "digiblocks"),
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
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "background",
              title: __("Background", "digiblocks"),
              initialOpen: false
            },
            style !== "gradient" && /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Background Type", "digiblocks"),
                value: backgroundType || "color",
                onChange: (value) => setAttributes({ backgroundType: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              backgroundTypeOptions.map((option) => /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  key: option.value,
                  value: option.value,
                  label: option.label
                }
              ))
            ),
            backgroundType === "color" && style !== "gradient" && /* @__PURE__ */ wp.element.createElement(
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
            backgroundType === "gradient" || style === "gradient" ? /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Gradient Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundColor,
                    onChange: (value) => setAttributes({ backgroundColor: value }),
                    label: __("Start Color", "digiblocks")
                  },
                  {
                    value: backgroundHoverColor,
                    onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                    label: __("End Color", "digiblocks")
                  }
                ]
              }
            ) : null,
            backgroundType === "image" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: (media) => {
                  setAttributes({
                    backgroundImage: {
                      id: media.id,
                      url: media.url,
                      alt: media.alt || "",
                      width: media.width,
                      height: media.height
                    }
                  });
                },
                allowedTypes: ["image"],
                value: backgroundImage?.id,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, !backgroundImage?.url ? /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    variant: "secondary",
                    onClick: open,
                    icon: "format-image",
                    style: { width: "100%" }
                  },
                  __("Select Image", "digiblocks")
                )) : /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ wp.element.createElement(
                  "img",
                  {
                    src: backgroundImage.url,
                    alt: backgroundImage.alt,
                    style: {
                      display: "block",
                      width: "100%",
                      height: "auto",
                      maxHeight: "150px",
                      objectFit: "cover",
                      marginBottom: "8px"
                    }
                  }
                ), /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    variant: "secondary",
                    onClick: open,
                    style: { flexGrow: 1 }
                  },
                  __("Replace", "digiblocks")
                ), /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    variant: "secondary",
                    onClick: () => setAttributes({ backgroundImage: null }),
                    isDestructive: true
                  },
                  __("Remove", "digiblocks")
                ))))
              }
            ))), backgroundImage?.url && !style.includes("split") && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Overlay Opacity (%)", "digiblocks"),
                value: backgroundOverlayOpacity || 50,
                onChange: (value) => setAttributes({ backgroundOverlayOpacity: value }),
                min: 0,
                max: 100,
                step: 5,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Overlay Color", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundOverlayColor,
                    onChange: (value) => setAttributes({ backgroundOverlayColor: value }),
                    label: __("Overlay Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Position", "digiblocks"),
                value: backgroundPosition || "center center",
                options: backgroundPositionOptions,
                onChange: (value) => setAttributes({ backgroundPosition: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Size", "digiblocks"),
                value: backgroundSize || "cover",
                options: backgroundSizeOptions,
                onChange: (value) => setAttributes({ backgroundSize: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Repeat", "digiblocks"),
                value: backgroundRepeat || "no-repeat",
                options: backgroundRepeatOptions,
                onChange: (value) => setAttributes({ backgroundRepeat: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))
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
                onChange: (value) => setAttributes({ titleTypography: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Content Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({ contentTypography: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Button Typography", "digiblocks"),
                value: buttonTypography,
                onChange: (value) => setAttributes({ buttonTypography: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "border",
              title: __("Border", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: borderStyle || "none",
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ borderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
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
                      ...borderWidth || {},
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
                      ...borderRadius || {},
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
                  values: padding && padding[localActiveDevice] ? padding[localActiveDevice] : {
                    top: 40,
                    right: 30,
                    bottom: 40,
                    left: 30,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    padding: {
                      ...padding || {},
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
                  values: margin && margin[localActiveDevice] ? margin[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 30,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    margin: {
                      ...margin || {},
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
                normalValue: boxShadow || {
                  enable: false,
                  color: "rgba(0, 0, 0, 0.2)",
                  horizontal: 0,
                  vertical: 0,
                  blur: 0,
                  spread: 0,
                  position: "outset"
                },
                hoverValue: boxShadowHover || {
                  enable: false,
                  color: "rgba(0, 0, 0, 0.2)",
                  horizontal: 0,
                  vertical: 0,
                  blur: 0,
                  spread: 0,
                  position: "outset"
                },
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
              name: "animation",
              title: __("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Animation Effect", "digiblocks"),
                value: animation || "none",
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
      className: `digiblocks-cta ${id} style-${style} ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    const renderButtons = () => {
      if (!buttons || buttons.length === 0)
        return null;
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-buttons" }, buttons.map((button) => {
        const buttonClasses = [
          "digiblocks-cta-button",
          button.isPrimary ? "is-primary" : "",
          button.isFullWidth ? "is-full-width" : ""
        ].filter(Boolean).join(" ");
        const buttonStyle = button.customColors ? {
          backgroundColor: button.isPrimary ? button.backgroundColor || buttonColor : "transparent",
          color: button.isPrimary ? button.textColor || buttonTextColor : button.backgroundColor || buttonColor,
          borderColor: button.backgroundColor || buttonColor,
          borderStyle: "solid",
          borderWidth: "2px",
          borderRadius: button.borderRadius ? `${button.borderRadius}px` : void 0
        } : {};
        return /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            key: button.id,
            className: buttonClasses,
            style: button.customColors ? buttonStyle : {}
          },
          button.text || __("Click Here", "digiblocks")
        );
      }));
    };
    const getBlockContent = () => {
      const HeadingTag = headingTag || "h2";
      switch (style) {
        case "split":
          return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-split-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title,
              onChange: (value) => setAttributes({ title: value }),
              placeholder: __("Add title...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic"]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              placeholder: __("Add content...", "digiblocks")
            }
          )), renderButtons())), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-image-container" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
            MediaUpload,
            {
              onSelect: (media) => {
                setAttributes({
                  backgroundImage: {
                    id: media.id,
                    url: media.url,
                    alt: media.alt || "",
                    width: media.width,
                    height: media.height
                  }
                });
              },
              allowedTypes: ["image"],
              value: backgroundImage?.id,
              render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-upload-container" }, backgroundImage?.url ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                "img",
                {
                  src: backgroundImage.url,
                  alt: backgroundImage.alt || "",
                  onClick: open
                }
              ), /* @__PURE__ */ wp.element.createElement(
                "button",
                {
                  className: "digiblocks-change-image-button",
                  onClick: open
                },
                __("Change Image", "digiblocks")
              )) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-placeholder", onClick: open }, __("Choose Image", "digiblocks")))
            }
          ))));
        case "cover":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-background" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-overlay" }), /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title,
              onChange: (value) => setAttributes({ title: value }),
              placeholder: __("Add title...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic"]
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              placeholder: __("Add content...", "digiblocks")
            }
          )), renderButtons()), !backgroundImage?.url && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-placeholder" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
            MediaUpload,
            {
              onSelect: (media) => {
                setAttributes({
                  backgroundImage: {
                    id: media.id,
                    url: media.url,
                    alt: media.alt || "",
                    width: media.width,
                    height: media.height
                  }
                });
              },
              allowedTypes: ["image"],
              value: backgroundImage?.id,
              render: ({ open }) => /* @__PURE__ */ wp.element.createElement(
                Button,
                {
                  variant: "secondary",
                  onClick: open,
                  icon: "format-image"
                },
                __("Select Background Image", "digiblocks")
              )
            }
          ))));
        default:
          return /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title,
              onChange: (value) => setAttributes({ title: value }),
              placeholder: __("Add title...", "digiblocks"),
              allowedFormats: ["core/bold", "core/italic"],
              withoutInteractiveFormatting: true
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content,
              onChange: (value) => setAttributes({ content: value }),
              placeholder: __("Add content...", "digiblocks"),
              withoutInteractiveFormatting: true
            }
          )), renderButtons());
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
    )), /* @__PURE__ */ wp.element.createElement(BlockControls, null, /* @__PURE__ */ wp.element.createElement(
      AlignmentToolbar,
      {
        value: align,
        onChange: (value) => setAttributes({ align: value })
      }
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, getBlockContent()));
  };
  var edit_default = CallToActionEdit;

  // blocks/call-to-action/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var CallToActionSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      style,
      horizontalLayout,
      title,
      content,
      headingTag,
      backgroundImage,
      backgroundType,
      align,
      animation,
      buttons,
      highlightText,
      highlightType,
      highlightColor
    } = attributes;
    const blockClasses = [
      "digiblocks-cta",
      id,
      `style-${style}`,
      animation !== "none" ? `animate-${animation}` : "",
      customClasses
    ].filter(Boolean).join(" ");
    const HeadingTag = headingTag || "h2";
    const renderButtons = () => {
      if (!buttons || buttons.length === 0)
        return null;
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-buttons" }, buttons.map((button) => {
        const buttonClasses = [
          "digiblocks-cta-button",
          button.isPrimary ? "is-primary" : "",
          button.isFullWidth ? "is-full-width" : ""
        ].filter(Boolean).join(" ");
        const target = button.openInNewTab ? "_blank" : void 0;
        const rel = button.rel || void 0;
        return /* @__PURE__ */ wp.element.createElement(
          "a",
          {
            key: button.id,
            className: buttonClasses,
            href: button.url || "#",
            target,
            rel,
            "data-button-id": button.id
          },
          button.text || "Click Here"
        );
      }));
    };
    const getBlockContent = () => {
      switch (style) {
        case "split":
          return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-split-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content
            }
          )), renderButtons())), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-image-container" }));
        case "cover":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-background" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-overlay" }), /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content
            }
          )), renderButtons()));
        default:
          return /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-cta-container ${horizontalLayout ? "digiblocks-cta-horizontal" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cta-content-wrapper" }, /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: HeadingTag,
              className: "digiblocks-cta-title",
              value: title
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText2.Content,
            {
              tagName: "p",
              className: "digiblocks-cta-content",
              value: content
            }
          )), renderButtons());
      }
    };
    return /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        ...useBlockProps2.save({
          className: blockClasses,
          id: anchor || null,
          "data-style": style,
          "data-background-type": backgroundType || "color",
          "data-align": align || "left",
          "data-highlight-text": highlightText || "",
          "data-highlight-type": highlightType || "none",
          "data-highlight-color": highlightColor || "#ffde59"
        })
      },
      getBlockContent()
    );
  };
  var save_default = CallToActionSave;

  // blocks/call-to-action/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/call-to-action", {
    apiVersion: 2,
    title: digiBlocksData.blocks["call-to-action"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["call-to-action"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["call-to-action"].description,
    keywords: [__2("cta", "digiblocks"), __2("call to action", "digiblocks"), __2("button", "digiblocks"), __2("conversion", "digiblocks")],
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
      style: {
        type: "string",
        default: "basic"
      },
      horizontalLayout: {
        type: "boolean",
        default: false
      },
      title: {
        type: "string",
        default: __2("Ready to Get Started?", "digiblocks")
      },
      content: {
        type: "string",
        default: __2("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.", "digiblocks")
      },
      headingTag: {
        type: "string",
        default: "h2"
      },
      titleColor: {
        type: "string",
        default: ""
      },
      textColor: {
        type: "string",
        default: "#666666"
      },
      buttonColor: {
        type: "string",
        default: "#1e73be"
      },
      buttonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      backgroundColor: {
        type: "string",
        default: "#f5f5f5"
      },
      backgroundType: {
        type: "string",
        default: "color"
      },
      backgroundImage: {
        type: "object",
        default: null
      },
      backgroundOverlayColor: {
        type: "string",
        default: "rgba(0,0,0,0.5)"
      },
      backgroundOverlayOpacity: {
        type: "number",
        default: 50
      },
      backgroundPosition: {
        type: "string",
        default: "center center"
      },
      backgroundSize: {
        type: "string",
        default: "cover"
      },
      backgroundRepeat: {
        type: "string",
        default: "no-repeat"
      },
      borderStyle: {
        type: "string",
        default: "none"
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      padding: {
        type: "object",
        default: {
          desktop: { top: 40, right: 30, bottom: 40, left: 30, unit: "px" },
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
      align: {
        type: "string",
        default: "left"
      },
      titleTypography: {
        type: "object"
      },
      contentTypography: {
        type: "object"
      },
      buttonTypography: {
        type: "object"
      },
      contentWidth: {
        type: "number"
      },
      width: {
        type: "string",
        default: "100%"
      },
      animation: {
        type: "string",
        default: "none"
      },
      boxShadow: {
        type: "object"
      },
      boxShadowHover: {
        type: "object"
      },
      buttonBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      buttonPadding: {
        type: "object",
        default: {
          desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      buttonsAlign: {
        type: "string",
        default: "left"
      },
      buttons: {
        type: "array",
        default: []
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      textHoverColor: {
        type: "string",
        default: ""
      },
      buttonHoverColor: {
        type: "string",
        default: ""
      },
      buttonTextHoverColor: {
        type: "string",
        default: ""
      },
      backgroundHoverColor: {
        type: "string",
        default: ""
      },
      highlightText: {
        type: "string",
        default: ""
      },
      highlightColor: {
        type: "string",
        default: "#ffde59"
      },
      highlightType: {
        type: "string",
        default: "none"
      },
      verticalAlign: {
        type: "string",
        default: "center"
      },
      reverseColumnsMobile: {
        type: "boolean",
        default: false
      },
      minHeight: {
        type: "object"
      },
      gradientDirection: {
        type: "number",
        default: 135
      },
      ribbonColor: {
        type: "string",
        default: "#1e73be"
      },
      ribbonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      ribbonPosition: {
        type: "string",
        default: "top-right"
      },
      ribbonText: {
        type: "string",
        default: "Special Offer"
      }
    },
    example: {
      attributes: {
        style: "basic",
        title: __2("Ready to Get Started?", "digiblocks"),
        content: __2("Join us today and experience the difference.", "digiblocks"),
        buttons: [
          {
            id: "button-1",
            text: __2("Sign Up Now", "digiblocks"),
            url: "#",
            isPrimary: true
          }
        ],
        backgroundColor: "#f5f5f5"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
