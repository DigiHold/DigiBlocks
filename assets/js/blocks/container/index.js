(() => {
  // blocks/container/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck
  } = window.wp.blockEditor;
  var {
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useDispatch, useSelect } = window.wp.data;
  var { createBlock } = window.wp.blocks;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl, ResponsiveButtonGroup, GradientControl, TransformControl } = digi.components;
  var containerLayouts = [
    {
      name: "1-col",
      label: __("1 Column", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M88 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h86c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z" })),
      columns: [100]
    },
    {
      name: "2-col-equal",
      label: __("2 Columns Equal", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M41.3 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h39.2c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM88 48H48.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z" })),
      columns: [50, 50]
    },
    {
      name: "3-col-equal",
      label: __("3 Columns Equal", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M26.2 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h24.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2zM57.1 48H32.9c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h24.2c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM88 48H63.8c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z" })),
      columns: [33.33, 33.33, 33.33]
    },
    {
      name: "4-col-equal",
      label: __("4 Columns Equal", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M19 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM42 48H25c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM64.9 48H48c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM87.9 48H71c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z" })),
      columns: [25, 25, 25, 25]
    },
    {
      name: "1-3-col",
      label: __("1/3 + 2/3", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M24.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h22c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM87.9 48H30.2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h57.7c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z" })),
      columns: [33.33, 66.67]
    },
    {
      name: "3-1-col",
      label: __("2/3 + 1/3", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M60.6 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h58.6c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48H66.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h21.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z" })),
      columns: [66.67, 33.33]
    },
    {
      name: "1-4-1-4-2-4-col",
      label: __("1/4 + 1/4 + 2/4", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M20.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h18.1c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM44.6 48H26.5c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h18.1c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48h-37c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h37c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z" })),
      columns: [25, 25, 50]
    },
    {
      name: "2-4-1-4-1-4-col",
      label: __("2/4 + 1/4 + 1/4", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM45.4 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H45.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z" })),
      columns: [50, 25, 25]
    },
    {
      name: "1-4-2-4-1-4-col",
      label: __("1/4 + 2/4 + 1/4", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2zM26.4 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-37c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2z" })),
      columns: [25, 50, 25]
    },
    {
      name: "5-col-equal",
      label: __("5 Columns Equal", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M20.3 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H20.3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM38.7 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H38.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM57.1 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H57.1c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM75.4 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H75.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z" })),
      columns: [20, 20, 20, 20, 20]
    },
    {
      name: "6-col-equal",
      label: __("6 Columns Equal", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M17.3 48H27c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM32.4 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM47.8 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM62.9 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM78.3 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM2 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z" })),
      columns: [16.67, 16.67, 16.67, 16.67, 16.67, 16.67]
    },
    {
      name: "1-6-4-6-1-6-col",
      label: __("1/6 + 4/6 + 1/6", "digiblocks"),
      icon: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", viewBox: "0 0 90 48" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M19.2 48h51.5c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H19.2c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM77.1 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H77.1c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM2 48h11.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z" })),
      columns: [16.67, 66.67, 16.67]
    }
  ];
  var ContainerEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      flexWrap,
      id,
      anchor,
      visibility,
      customClasses,
      layout,
      contentLayout,
      horizontalAlign,
      verticalAlign,
      columnVerticalAlign,
      heightType,
      minHeight,
      columnGap,
      rowGap,
      reverseColumnsMobile,
      stackOnTablet,
      stackOnMobile,
      overflowHidden,
      backgroundColor,
      backgroundGradient,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      backgroundSize,
      backgroundVideo,
      backgroundVideoFallbackImage,
      backgroundOverlay,
      backgroundOverlayOpacity,
      backgroundOverlayBlendMode,
      padding,
      margin,
      borderStyle,
      borderWidth,
      borderColor,
      borderRadius,
      boxShadow,
      boxShadowHover,
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
    const getContentMaxValue = (unit) => {
      switch (unit) {
        case "%":
          return 100;
        case "em":
        case "rem":
          return 10;
        case "vw":
        case "vh":
          return 100;
        default:
          return 2e3;
      }
    };
    const getContentStepValue = (unit) => {
      switch (unit) {
        case "em":
        case "rem":
          return 0.1;
        default:
          return 1;
      }
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
    const [showLayoutSelector, setShowLayoutSelector] = useState(!layout);
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const { isNested } = useSelect(
      (select) => {
        const { getBlockParentsByBlockName } = select("core/block-editor");
        return {
          isNested: getBlockParentsByBlockName(clientId, "digiblocks/container").length > 0
        };
      },
      [clientId]
    );
    const contentWidth = attributes.contentWidth || {
      desktop: isNested ? { value: 100, unit: "%" } : { value: parseInt(digiBlocksData.contentWidth) || 1200, unit: "px" },
      tablet: { value: "", unit: "" },
      mobile: { value: "", unit: "" }
    };
    const contentMaxWidth = attributes.contentMaxWidth || {
      desktop: isNested ? { value: 100, unit: "%" } : { value: parseInt(digiBlocksData.contentMaxWidth) || 90, unit: "%" },
      tablet: { value: "", unit: "" },
      mobile: { value: "", unit: "" }
    };
    useEffect(() => {
      if (attributes.isNested !== isNested) {
        setAttributes({ isNested });
      }
    }, [isNested]);
    const prevContentLayout = useRef(contentLayout);
    useEffect(() => {
      if (prevContentLayout.current === contentLayout) {
        prevContentLayout.current = contentLayout;
        return;
      }
      if (contentLayout === "full" && prevContentLayout.current === "boxed") {
        setAttributes({
          contentWidth: {
            desktop: { value: 100, unit: "%" },
            tablet: { value: "", unit: "" },
            mobile: { value: "", unit: "" }
          },
          contentMaxWidth: {
            desktop: { value: 100, unit: "%" },
            tablet: { value: "", unit: "" },
            mobile: { value: "", unit: "" }
          }
        });
      } else if (contentLayout === "boxed" && prevContentLayout.current === "full") {
        setAttributes({
          contentWidth: {
            desktop: isNested ? { value: 100, unit: "%" } : { value: parseInt(digiBlocksData.contentWidth) || 1200, unit: "px" },
            tablet: { value: "", unit: "" },
            mobile: { value: "", unit: "" }
          },
          contentMaxWidth: {
            desktop: isNested ? { value: 100, unit: "%" } : { value: parseInt(digiBlocksData.contentMaxWidth) || 90, unit: "%" },
            tablet: { value: "", unit: "" },
            mobile: { value: "", unit: "" }
          }
        });
      }
      prevContentLayout.current = contentLayout;
    }, [contentLayout, isNested]);
    const { innerBlocks, hasChildBlocks } = useSelect(
      (select) => {
        const { getBlocks } = select("core/block-editor");
        const blocks = getBlocks(clientId);
        return {
          innerBlocks: blocks,
          hasChildBlocks: blocks.length > 0
        };
      },
      [clientId]
    );
    const { replaceInnerBlocks } = useDispatch("core/block-editor");
    const createColumnsFromLayout = (selectedLayout) => {
      const layoutConfig = containerLayouts.find((l) => l.name === selectedLayout);
      if (!layoutConfig)
        return;
      const existingColumns = innerBlocks.map((column) => ({
        clientId: column.clientId,
        attributes: column.attributes,
        innerBlocks: column.innerBlocks
      }));
      const newColumnCount = layoutConfig.columns.length;
      const prevColumnCount = existingColumns.length;
      const columnBlocks = [];
      layoutConfig.columns.forEach((columnWidth, index) => {
        if (index < prevColumnCount) {
          const existingColumn = existingColumns[index];
          columnBlocks.push(createBlock(
            "digiblocks/column",
            {
              ...existingColumn.attributes,
              width: {
                desktop: columnWidth,
                tablet: stackOnTablet ? 100 : columnWidth,
                mobile: stackOnMobile ? 100 : columnWidth
              }
            },
            [...existingColumn.innerBlocks]
            // Keep existing blocks
          ));
        } else {
          columnBlocks.push(createBlock(
            "digiblocks/column",
            {
              id: `column-${id}-${index}`,
              width: {
                desktop: { value: columnWidth, unit: "%" },
                tablet: { value: stackOnTablet ? 100 : "", unit: stackOnTablet ? "%" : "" },
                mobile: { value: stackOnMobile ? 100 : "", unit: stackOnMobile ? "%" : "" }
              }
            },
            []
            // No inner blocks for new columns
          ));
        }
      });
      if (prevColumnCount > newColumnCount && newColumnCount > 0) {
        const blocksToMove = [];
        for (let i = newColumnCount; i < prevColumnCount; i++) {
          blocksToMove.push(...existingColumns[i].innerBlocks);
        }
        if (blocksToMove.length > 0) {
          const lastColumnBlocks = columnBlocks[columnBlocks.length - 1].innerBlocks;
          columnBlocks[columnBlocks.length - 1].innerBlocks = [...lastColumnBlocks, ...blocksToMove];
        }
      }
      replaceInnerBlocks(clientId, columnBlocks, false);
      setAttributes({ layout: selectedLayout });
      setShowLayoutSelector(false);
    };
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const generateGradientCSS = () => {
      if (!backgroundGradient.enable || !backgroundGradient.colors.length) {
        return "";
      }
      const colorStops = backgroundGradient.colors.map((stop) => `${stop.color} ${stop.position}%`).join(", ");
      if (backgroundGradient.type === "radial") {
        return `background-image: radial-gradient(circle at ${backgroundGradient.position}, ${colorStops});`;
      } else {
        return `background-image: linear-gradient(${backgroundGradient.angle}deg, ${colorStops});`;
      }
    };
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
    };
    const bgPositionOptions = [
      { label: __("Top Left", "digiblocks"), value: "top left" },
      { label: __("Top Center", "digiblocks"), value: "top center" },
      { label: __("Top Right", "digiblocks"), value: "top right" },
      { label: __("Center Left", "digiblocks"), value: "center left" },
      { label: __("Center Center", "digiblocks"), value: "center center" },
      { label: __("Center Right", "digiblocks"), value: "center right" },
      { label: __("Bottom Left", "digiblocks"), value: "bottom left" },
      { label: __("Bottom Center", "digiblocks"), value: "bottom center" },
      { label: __("Bottom Right", "digiblocks"), value: "bottom right" }
    ];
    const bgRepeatOptions = [
      { label: __("No Repeat", "digiblocks"), value: "no-repeat" },
      { label: __("Repeat", "digiblocks"), value: "repeat" },
      { label: __("Repeat X", "digiblocks"), value: "repeat-x" },
      { label: __("Repeat Y", "digiblocks"), value: "repeat-y" }
    ];
    const bgSizeOptions = [
      { label: __("Cover", "digiblocks"), value: "cover" },
      { label: __("Contain", "digiblocks"), value: "contain" },
      { label: __("Auto", "digiblocks"), value: "auto" },
      { label: __("100%", "digiblocks"), value: "100%" }
    ];
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Double", "digiblocks"), value: "double" }
    ];
    const blendModeOptions = [
      { label: __("Normal", "digiblocks"), value: "normal" },
      { label: __("Multiply", "digiblocks"), value: "multiply" },
      { label: __("Screen", "digiblocks"), value: "screen" },
      { label: __("Overlay", "digiblocks"), value: "overlay" },
      { label: __("Darken", "digiblocks"), value: "darken" },
      { label: __("Lighten", "digiblocks"), value: "lighten" },
      { label: __("Color Dodge", "digiblocks"), value: "color-dodge" },
      { label: __("Color Burn", "digiblocks"), value: "color-burn" },
      { label: __("Hard Light", "digiblocks"), value: "hard-light" },
      { label: __("Soft Light", "digiblocks"), value: "soft-light" },
      { label: __("Difference", "digiblocks"), value: "difference" },
      { label: __("Exclusion", "digiblocks"), value: "exclusion" },
      { label: __("Hue", "digiblocks"), value: "hue" },
      { label: __("Saturation", "digiblocks"), value: "saturation" },
      { label: __("Color", "digiblocks"), value: "color" },
      { label: __("Luminosity", "digiblocks"), value: "luminosity" }
    ];
    const tabList = [
      {
        name: "options",
        title: __("Layout", "digiblocks"),
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
    const isValueSet = (val) => {
      return val !== void 0 && val !== null && val !== "";
    };
    const getGapValue = (gapObj, device) => {
      if (gapObj[device] && isValueSet(gapObj[device].value)) {
        return {
          value: gapObj[device].value,
          unit: gapObj[device].unit || "px"
        };
      }
      if (device === "tablet") {
        return {
          value: gapObj.desktop.value,
          unit: gapObj.desktop.unit || "px"
        };
      }
      if (device === "mobile") {
        if (gapObj.tablet && isValueSet(gapObj.tablet.value)) {
          return {
            value: gapObj.tablet.value,
            unit: gapObj.tablet.unit || "px"
          };
        }
        return {
          value: gapObj.desktop.value,
          unit: gapObj.desktop.unit || "px"
        };
      }
      return {
        value: 0,
        unit: "px"
      };
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
      let backgroundStyles = "";
      if (backgroundColor) {
        backgroundStyles += `background-color: ${backgroundColor};`;
      }
      const gradientCSS = generateGradientCSS();
      if (gradientCSS) {
        backgroundStyles += gradientCSS;
      }
      if (backgroundImage && backgroundImage.url) {
        const imageCSS = `url(${backgroundImage.url})`;
        if (gradientCSS) {
          backgroundStyles = backgroundStyles.replace(
            /background-image: ([^;]+);/,
            `background-image: ${imageCSS}, $1;`
          );
        } else {
          backgroundStyles += `background-image: ${imageCSS};`;
        }
        backgroundStyles += `background-position: ${backgroundPosition};
            background-repeat: ${backgroundRepeat};
            background-size: ${backgroundSize};`;
      }
      let overlayCSS = "";
      if (backgroundOverlay) {
        overlayCSS = `
            .${id}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${backgroundOverlay};
                opacity: ${backgroundOverlayOpacity};
                mix-blend-mode: ${backgroundOverlayBlendMode};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${id} > * {
                position: relative;
                z-index: 2;
            }`;
      }
      let boxShadowCSS = "";
      if (boxShadow && boxShadow.enable) {
        boxShadowCSS = `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      let heightCSS = "";
      if (getVal(heightType, activeDevice) === "full") {
        heightCSS = "height: 100vh;";
      } else if (getVal(heightType, activeDevice) === "custom") {
        const minHeightValue = minHeight[activeDevice]?.value || minHeight.desktop?.value || 0;
        const minHeightUnit = minHeight[activeDevice]?.unit || minHeight.desktop?.unit || "px";
        heightCSS = minHeightValue ? `min-height: ${minHeightValue}${minHeightUnit} !important;` : "";
      }
      const contentWidthCSS = `width: ${contentWidth.desktop.value}${contentWidth.desktop.unit};`;
      const contentMaxWidthCSS = `max-width: ${contentMaxWidth.desktop.value}${contentMaxWidth.desktop.unit};`;
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
            /* Container Block - ${id} */
            .${id} {
                position: relative;
				${getDimensionCSS(padding, "padding", activeDevice)}
				${getDimensionCSS(margin, "margin", activeDevice, true)}
                width: 100%;
                ${heightCSS}
                ${backgroundStyles}
                ${borderStyle !== "none" ? `
                border-style: ${borderStyle}!important;
				${getDimensionCSS(borderWidth, "border-width", activeDevice, true)}
                border-color: ${borderColor}!important;` : ""}
				${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
                ${boxShadowCSS}
                ${overflowHidden ? "overflow: hidden;" : ""}
                transition: all 0.3s ease;
                ${positionCSS}
				${transformCSS}
            }
            
            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }

			.${id} > .digiblocks-container-inner {
                display: flex;
				flex-wrap: ${getVal(flexWrap, activeDevice)};
				align-items: ${getVal(verticalAlign, activeDevice)};
				justify-content: ${getVal(horizontalAlign, activeDevice)};
				gap: ${getGapValue(rowGap, "desktop").value}${getGapValue(rowGap, "desktop").unit} ${getGapValue(columnGap, "desktop").value}${getGapValue(columnGap, "desktop").unit};
				${contentWidthCSS}
				${contentMaxWidthCSS}
				margin-left: auto;
				margin-right: auto;
            }
            
            ${overlayCSS}
            
            /* Background video */
            .${id} > .digiblocks-bg-video-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 0;
                pointer-events: none;
                border-radius: inherit;
            }
            
            .${id} > .digiblocks-bg-video {
                position: absolute;
                top: 50%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                transform: translateX(-50%) translateY(-50%);
                object-fit: cover;
            }
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${id} {
					${getDimensionCSS(padding, "padding", "tablet")}
					${getDimensionCSS(margin, "margin", "tablet")}
					${heightType["tablet"] === "custom" && minHeight.tablet?.value ? `min-height: ${minHeight.tablet.value}${minHeight.tablet.unit};` : ""}
					${getDimensionCSS(borderRadius, "border-radius", "tablet")}
					${borderStyle !== "none" ? `border-width: ${borderWidth["tablet"].top}${borderWidth["tablet"].unit} ${borderWidth["tablet"].right}${borderWidth["tablet"].unit} ${borderWidth["tablet"].bottom}${borderWidth["tablet"].unit} ${borderWidth["tablet"].left}${borderWidth["tablet"].unit};` : ""}
				}

				.${id} > .digiblocks-container-inner {
					width: ${contentWidth.tablet.value !== "" ? contentWidth.tablet.value + contentWidth.tablet.unit : contentWidth.desktop.value + contentWidth.desktop.unit};
					max-width: ${contentMaxWidth.tablet.value !== "" ? contentMaxWidth.tablet.value + contentMaxWidth.tablet.unit : contentMaxWidth.desktop.value + contentMaxWidth.desktop.unit};
					flex-wrap: ${getVal(flexWrap, "tablet")};
					align-items: ${getVal(verticalAlign, "tablet")};
					justify-content: ${getVal(horizontalAlign, "tablet")};
					gap: ${getGapValue(rowGap, "tablet").value}${getGapValue(rowGap, "tablet").unit} ${getGapValue(columnGap, "tablet").value}${getGapValue(columnGap, "tablet").unit};
					${stackOnTablet ? "flex-direction: column;" : ""}
				}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
					${getDimensionCSS(padding, "padding", "mobile")}
					${getDimensionCSS(margin, "margin", "mobile")}
					${heightType["mobile"] === "custom" && minHeight.mobile?.value ? `min-height: ${minHeight.mobile.value}${minHeight.mobile.unit};` : ""}
					${getDimensionCSS(borderRadius, "border-radius", "mobile")}
					${borderStyle !== "none" ? `border-width: ${borderWidth["mobile"].top}${borderWidth["mobile"].unit} ${borderWidth["mobile"].right}${borderWidth["mobile"].unit} ${borderWidth["mobile"].bottom}${borderWidth["mobile"].unit} ${borderWidth["mobile"].left}${borderWidth["mobile"].unit};` : ""}
				}

				.${id} > .digiblocks-container-inner {
					width: ${contentWidth.mobile.value !== "" ? contentWidth.mobile.value + contentWidth.mobile.unit : contentWidth.tablet.value !== "" ? contentWidth.tablet.value + contentWidth.tablet.unit : contentWidth.desktop.value + contentWidth.desktop.unit};
					max-width: ${contentMaxWidth.mobile.value !== "" ? contentMaxWidth.mobile.value + contentMaxWidth.mobile.unit : contentMaxWidth.tablet.value !== "" ? contentMaxWidth.tablet.value + contentMaxWidth.tablet.unit : contentMaxWidth.desktop.value + contentMaxWidth.desktop.unit};
					flex-wrap: ${getVal(flexWrap, "mobile")};
					align-items: ${getVal(verticalAlign, "mobile")};
					justify-content: ${getVal(horizontalAlign, "mobile")};
					gap: ${getGapValue(rowGap, "mobile").value}${getGapValue(rowGap, "mobile").unit} ${getGapValue(columnGap, "mobile").value}${getGapValue(columnGap, "mobile").unit};
					${stackOnMobile ? "flex-direction: column;" : ""}
					${reverseColumnsMobile ? "flex-direction: column-reverse;" : ""}
				}
            }

			${Object.keys(verticalAlign).some((device) => verticalAlign[device] === "stretch") ? `
				/* Column vertical alignment when container uses stretch */
				@media (min-width: 992px) {
					.${id} > .digiblocks-container-inner .digiblocks-column {
						${getVal(verticalAlign, "desktop") === "stretch" ? `justify-content: ${getVal(columnVerticalAlign, "desktop")};` : ""}
					}
				}
				
				@media (max-width: 991px) {
					.${id} > .digiblocks-container-inner .digiblocks-column {
						${getVal(verticalAlign, "tablet") === "stretch" ? `justify-content: ${getVal(columnVerticalAlign, "tablet")};` : ""}
					}
				}
				
				@media (max-width: 767px) {
					.${id} > .digiblocks-container-inner .digiblocks-column {
						${getVal(verticalAlign, "mobile") === "stretch" ? `justify-content: ${getVal(columnVerticalAlign, "mobile")};` : ""}
					}
				}
			` : ""}

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
    const blockProps = useBlockProps({
      className: `digiblocks-container ${isNested ? "" : "alignfull"} ${id} ${customClasses || ""}`,
      id: anchor || null
    });
    const allowedBlocks = ["digiblocks/column"];
    const innerBlocksProps = useInnerBlocksProps(
      { className: "digiblocks-container-inner" },
      {
        allowedBlocks: showLayoutSelector ? [] : allowedBlocks,
        orientation: "horizontal",
        renderAppender: hasChildBlocks ? void 0 : window.wp.blockEditor.ButtonBlockAppender
      }
    );
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "layout",
              title: __("Container Layout", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                onClick: () => setShowLayoutSelector(true),
                className: "digiblocks-change-layout-button"
              },
              layout ? __("Change Layout", "digiblocks") : __("Select Layout", "digiblocks")
            ),
            !isNested && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Layout", "digiblocks"),
                value: contentLayout,
                onChange: (value) => setAttributes({ contentLayout: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "boxed",
                  label: __("Boxed", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "full",
                  label: __("Full Width", "digiblocks")
                }
              )
            )),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Content Width", "digiblocks"),
                value: contentWidth,
                onChange: (value) => setAttributes({ contentWidth: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vw", value: "vw" }
                ],
                defaultUnit: isNested ? "%" : "px",
                min: 0,
                max: getContentMaxValue(contentWidth[localActiveDevice]?.unit),
                step: getContentStepValue(contentWidth[localActiveDevice]?.unit)
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Content Max Width", "digiblocks"),
                value: contentMaxWidth,
                onChange: (value) => setAttributes({ contentMaxWidth: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vw", value: "vw" }
                ],
                defaultUnit: "%",
                min: 0,
                max: getContentMaxValue(contentMaxWidth[localActiveDevice]?.unit),
                step: getContentStepValue(contentMaxWidth[localActiveDevice]?.unit)
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Flex Wrap", "digiblocks"),
                value: flexWrap,
                onChange: (value) => setAttributes({ flexWrap: value }),
                options: [
                  { label: __("No Wrap", "digiblocks"), value: "nowrap" },
                  { label: __("Wrap", "digiblocks"), value: "wrap" }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Height", "digiblocks"),
                value: heightType,
                onChange: (value) => setAttributes({ heightType: value }),
                options: [
                  { label: __("Auto", "digiblocks"), value: "auto" },
                  { label: __("Full", "digiblocks"), value: "full" },
                  { label: __("Custom", "digiblocks"), value: "custom" }
                ]
              }
            ),
            heightType[localActiveDevice] === "custom" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Min Height", "digiblocks"),
                value: minHeight,
                onChange: (value) => setAttributes({ minHeight: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vh", value: "vh" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getContentMaxValue(minHeight[localActiveDevice]?.unit),
                step: getContentStepValue(minHeight[localActiveDevice]?.unit)
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
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
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Vertical Align", "digiblocks"),
                value: verticalAlign,
                onChange: (value) => setAttributes({ verticalAlign: value }),
                options: [
                  { label: __("Top", "digiblocks"), value: "flex-start" },
                  { label: __("Middle", "digiblocks"), value: "center" },
                  { label: __("Bottom", "digiblocks"), value: "flex-end" },
                  { label: __("Stretch", "digiblocks"), value: "stretch" }
                ]
              }
            ),
            verticalAlign[localActiveDevice] === "stretch" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Column Vertical Align", "digiblocks"),
                value: columnVerticalAlign,
                onChange: (value) => setAttributes({ columnVerticalAlign: value }),
                options: [
                  { label: __("Top", "digiblocks"), value: "flex-start" },
                  { label: __("Middle", "digiblocks"), value: "center" },
                  { label: __("Bottom", "digiblocks"), value: "flex-end" }
                ],
                help: __("Controls the vertical alignment of content within stretched columns.", "digiblocks")
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Column Gap", "digiblocks"),
                value: columnGap,
                onChange: (value) => setAttributes({ columnGap: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" }
                ],
                defaultUnit: "px",
                min: 0,
                max: 100,
                step: 1
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Row Gap", "digiblocks"),
                value: rowGap,
                onChange: (value) => setAttributes({ rowGap: value }),
                units: [
                  // no % unit as it doesn't work on Row Gap
                  { label: "px", value: "px" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" }
                ],
                defaultUnit: "px",
                min: 0,
                max: 100,
                step: 1
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "advanced",
              title: __("Advanced", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Overflow Hidden", "digiblocks"),
                checked: overflowHidden,
                onChange: (value) => setAttributes({ overflowHidden: value }),
                help: __("Hide content that overflows the container boundaries.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Stack on Tablet", "digiblocks"),
                checked: stackOnTablet,
                onChange: (value) => setAttributes({ stackOnTablet: value }),
                help: __("Stack columns vertically on tablet devices.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Stack on Mobile", "digiblocks"),
                checked: stackOnMobile,
                onChange: (value) => setAttributes({ stackOnMobile: value }),
                help: __("Stack columns vertically on mobile devices.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Reverse Columns on Mobile", "digiblocks"),
                checked: reverseColumnsMobile,
                onChange: (value) => setAttributes({ reverseColumnsMobile: value }),
                help: __("Reverse the order of columns on mobile devices.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "background",
              name: "background",
              title: __("Background", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
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
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-control" }, /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__label" }, __("Background Image", "digiblocks")), /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: (media) => {
                  setAttributes({
                    backgroundImage: {
                      url: media.url,
                      id: media.id,
                      alt: media.alt || "",
                      size: media.sizes?.full?.url ? "full" : ""
                    }
                  });
                },
                allowedTypes: ["image"],
                value: backgroundImage?.id,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-upload-wrapper" }, backgroundImage?.url ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-preview" }, /* @__PURE__ */ wp.element.createElement("img", { src: backgroundImage.url, alt: backgroundImage.alt || "" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-controls" }, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isPrimary: true,
                    onClick: open
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-edit" })
                ), /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isDestructive: true,
                    onClick: () => setAttributes({ backgroundImage: { url: "", id: 0, alt: "", size: "" } })
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-trash" })
                ))) : /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    className: "digiblocks-media-upload-button",
                    isPrimary: true,
                    onClick: open
                  },
                  __("Select Image", "digiblocks")
                ))
              }
            ))),
            backgroundImage?.url && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Position", "digiblocks"),
                value: backgroundPosition,
                options: bgPositionOptions,
                onChange: (value) => setAttributes({ backgroundPosition: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Repeat", "digiblocks"),
                value: backgroundRepeat,
                options: bgRepeatOptions,
                onChange: (value) => setAttributes({ backgroundRepeat: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Background Size", "digiblocks"),
                value: backgroundSize,
                options: bgSizeOptions,
                onChange: (value) => setAttributes({ backgroundSize: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "background",
              name: "gradient",
              title: __("Background Gradient", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              GradientControl,
              {
                value: backgroundGradient,
                onChange: (value) => setAttributes({ backgroundGradient: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "background",
              name: "backgroundVideo",
              title: __("Background Video", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-control" }, /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__label" }, __("Background Video", "digiblocks")), /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: (media) => {
                  setAttributes({
                    backgroundVideo: {
                      url: media.url,
                      id: media.id
                    }
                  });
                },
                allowedTypes: ["video"],
                value: backgroundVideo?.id,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-upload-wrapper" }, backgroundVideo?.url ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-preview" }, /* @__PURE__ */ wp.element.createElement("video", { controls: true }, /* @__PURE__ */ wp.element.createElement("source", { src: backgroundVideo.url }), __("Your browser does not support the video tag.", "digiblocks")), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-controls" }, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isPrimary: true,
                    onClick: open
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-edit" })
                ), /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isDestructive: true,
                    onClick: () => setAttributes({ backgroundVideo: { url: "", id: 0 } })
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-trash" })
                ))) : /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    className: "digiblocks-media-upload-button",
                    isPrimary: true,
                    onClick: open
                  },
                  __("Select Video", "digiblocks")
                ))
              }
            ))),
            backgroundVideo?.url && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-control" }, /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__label" }, __("Video Fallback Image", "digiblocks")), /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: (media) => {
                  setAttributes({
                    backgroundVideoFallbackImage: {
                      url: media.url,
                      id: media.id,
                      alt: media.alt || ""
                    }
                  });
                },
                allowedTypes: ["image"],
                value: backgroundVideoFallbackImage?.id,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-upload-wrapper" }, backgroundVideoFallbackImage?.url ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-preview" }, /* @__PURE__ */ wp.element.createElement("img", { src: backgroundVideoFallbackImage.url, alt: backgroundVideoFallbackImage.alt || "" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-controls" }, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isPrimary: true,
                    onClick: open
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-edit" })
                ), /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isDestructive: true,
                    onClick: () => setAttributes({ backgroundVideoFallbackImage: { url: "", id: 0, alt: "" } })
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { class: "dashicon dashicons dashicons-trash" })
                ))) : /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    className: "digiblocks-media-upload-button",
                    isPrimary: true,
                    onClick: open
                  },
                  __("Select Fallback Image", "digiblocks")
                ))
              }
            )))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "background",
              name: "overlay",
              title: __("Background Overlay", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Overlay Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundOverlay,
                    onChange: (value) => setAttributes({ backgroundOverlay: value }),
                    label: __("Overlay Color", "digiblocks")
                  }
                ]
              }
            ),
            backgroundOverlay && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Overlay Opacity", "digiblocks"),
                value: backgroundOverlayOpacity,
                onChange: (value) => setAttributes({ backgroundOverlayOpacity: value }),
                min: 0,
                max: 1,
                step: 0.01,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Blend Mode", "digiblocks"),
                value: backgroundOverlayBlendMode,
                options: blendModeOptions,
                onChange: (value) => setAttributes({ backgroundOverlayBlendMode: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "borders",
              title: __("Borders & Radius", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: borderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ borderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
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
              PanelColorSettings,
              {
                title: "",
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
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
                    { label: "%", value: "%" },
                    { label: "em", value: "em" }
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
              tab: "layout",
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
    const LayoutSelector = () => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-layout-selector" }, /* @__PURE__ */ wp.element.createElement("h2", null, __("Select a Layout", "digiblocks")), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-layout-grid" }, containerLayouts.map((layout2) => /* @__PURE__ */ wp.element.createElement(Tooltip, { text: layout2.label, key: layout2.name }, /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        className: "digiblocks-layout-option",
        onClick: () => createColumnsFromLayout(layout2.name),
        "aria-label": layout2.label
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-layout-icon" }, layout2.icon),
      /* @__PURE__ */ wp.element.createElement("span", { className: "screen-reader-text" }, layout2.label)
    )))));
    const BackgroundVideo = () => {
      if (!backgroundVideo?.url)
        return null;
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-bg-video-container" }, /* @__PURE__ */ wp.element.createElement("video", { className: "digiblocks-bg-video", autoPlay: true, muted: true, loop: true, playsInline: true, poster: backgroundVideoFallbackImage?.url || "" }, /* @__PURE__ */ wp.element.createElement("source", { src: backgroundVideo.url, type: "video/mp4" })));
    };
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, backgroundVideo?.url && /* @__PURE__ */ wp.element.createElement(BackgroundVideo, null), showLayoutSelector ? /* @__PURE__ */ wp.element.createElement(LayoutSelector, null) : /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps })));
  };
  var edit_default = ContainerEdit;

  // blocks/container/save.js
  var { __: __2 } = window.wp.i18n;
  var { useBlockProps: useBlockProps2, useInnerBlocksProps: useInnerBlocksProps2 } = window.wp.blockEditor;
  var ContainerSave = ({ attributes }) => {
    const {
      isNested,
      id,
      anchor,
      customClasses,
      backgroundVideo,
      backgroundVideoFallbackImage,
      animation,
      animationDuration,
      animationDelay
    } = attributes;
    const classNames = `digiblocks-container ${isNested ? "" : "alignfull"} ${id} ${customClasses || ""}${animation !== "none" ? ` animate-${animation} digi-animate-hidden` : ""}`;
    const blockProps = useBlockProps2.save({
      className: classNames,
      id: anchor || null
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    const innerBlocksProps = useInnerBlocksProps2.save({
      className: "digiblocks-container-inner"
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, backgroundVideo && backgroundVideo.url && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-bg-video-container" }, /* @__PURE__ */ wp.element.createElement("video", { className: "digiblocks-bg-video", autoPlay: true, muted: true, loop: true, playsInline: true, poster: backgroundVideoFallbackImage?.url || "" }, /* @__PURE__ */ wp.element.createElement("source", { src: backgroundVideo.url, type: "video/mp4" }))), /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps }));
  };
  var save_default = ContainerSave;

  // blocks/container/index.js
  var { __: __3 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/container", {
    apiVersion: 2,
    title: digiBlocksData.blocks["container"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["container"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["container"].description,
    keywords: [__3("container", "digiblocks"), __3("section", "digiblocks"), __3("row", "digiblocks"), __3("layout", "digiblocks"), __3("columns", "digiblocks")],
    supports: {
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      isNested: {
        type: "boolean",
        default: false
      },
      id: {
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
      flexWrap: {
        type: "object",
        default: {
          desktop: "nowrap",
          tablet: "",
          mobile: ""
        }
      },
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      layout: {
        type: "string",
        default: ""
      },
      contentLayout: {
        type: "string",
        default: "boxed"
      },
      contentWidth: {
        type: "object",
        default: {
          desktop: { value: parseInt(digiBlocksData.contentWidth) || 1200, unit: "px" },
          tablet: { value: "", unit: "" },
          mobile: { value: "", unit: "" }
        }
      },
      contentMaxWidth: {
        type: "object",
        default: {
          desktop: { value: parseInt(digiBlocksData.contentMaxWidth) || 90, unit: "%" },
          tablet: { value: "", unit: "" },
          mobile: { value: "", unit: "" }
        }
      },
      heightType: {
        type: "object",
        default: {
          desktop: "auto",
          tablet: "",
          mobile: ""
        }
      },
      minHeight: {
        type: "object",
        default: {
          desktop: { value: 0, unit: "px" },
          tablet: { value: "", unit: "" },
          mobile: { value: "", unit: "" }
        }
      },
      horizontalAlign: {
        type: "object",
        default: {
          desktop: "center",
          tablet: "",
          mobile: ""
        }
      },
      verticalAlign: {
        type: "object",
        default: {
          desktop: "center",
          tablet: "",
          mobile: ""
        }
      },
      columnVerticalAlign: {
        type: "object",
        default: {
          desktop: "flex-start",
          tablet: "",
          mobile: ""
        }
      },
      columnGap: {
        type: "object",
        default: {
          desktop: { value: 20, unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      rowGap: {
        type: "object",
        default: {
          desktop: { value: 20, unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      reverseColumnsMobile: {
        type: "boolean",
        default: false
      },
      stackOnTablet: {
        type: "boolean",
        default: false
      },
      stackOnMobile: {
        type: "boolean",
        default: true
      },
      overflowHidden: {
        type: "boolean",
        default: false
      },
      backgroundColor: {
        type: "string",
        default: ""
      },
      backgroundGradient: {
        type: "object",
        default: {
          enable: false,
          type: "linear",
          angle: 90,
          position: "center center",
          colors: [
            { color: "#667eea", position: 0 },
            { color: "#764ba2", position: 100 }
          ]
        }
      },
      backgroundImage: {
        type: "object",
        default: {
          url: "",
          id: 0,
          alt: "",
          size: ""
        }
      },
      backgroundPosition: {
        type: "string",
        default: "center center"
      },
      backgroundRepeat: {
        type: "string",
        default: "no-repeat"
      },
      backgroundSize: {
        type: "string",
        default: "cover"
      },
      backgroundVideo: {
        type: "object",
        default: {
          url: "",
          id: 0,
          alt: "",
          size: ""
        }
      },
      backgroundVideoFallbackImage: {
        type: "object",
        default: {
          url: "",
          id: 0,
          alt: "",
          size: ""
        }
      },
      backgroundOverlay: {
        type: "string",
        default: ""
      },
      backgroundOverlayOpacity: {
        type: "number",
        default: 0.7
      },
      backgroundOverlayBlendMode: {
        type: "string",
        default: "normal"
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
      borderStyle: {
        type: "string",
        default: "none"
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      borderRadius: {
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
        layout: "",
        backgroundColor: "#f8f9fa",
        padding: {
          desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      // No inner blocks to ensure layout selector appears
      innerBlocks: [],
      viewportWidth: 500
    },
    edit: edit_default,
    save: save_default
  });
})();
