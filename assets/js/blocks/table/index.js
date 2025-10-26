(() => {
  // blocks/table/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    BlockControls
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    ToolbarGroup,
    ToolbarButton,
    BaseControl,
    Popover,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;
  var TableEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      tableData,
      hasHeader,
      hasFooter,
      tableBorderColor,
      tableBorderWidth,
      tableBorderStyle,
      cellPadding,
      tableBorderCollapse,
      headerBackgroundColor,
      headerTextColor,
      headingTypography,
      bodyBackgroundColor,
      altRowBackgroundColor,
      bodyTextColor,
      textTypography,
      footerBackgroundColor,
      footerTextColor,
      contentTypography,
      borderRadius,
      boxShadow,
      boxShadowHover,
      margin,
      cellAlignment,
      headerAlignment,
      footerAlignment,
      tablePreset,
      responsiveMode,
      animation,
      animationDuration,
      animationDelay,
      firstColHeader,
      cellControls,
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
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const [selectedCell, setSelectedCell] = useState({ row: -1, col: -1 });
    const [isRatingPopoverOpen, setIsRatingPopoverOpen] = useState(false);
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect(() => {
      if (!tableData || tableData.length === 0) {
        setAttributes({
          tableData: [
            ["Header 1", "Header 2", "Header 3"],
            ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
            ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"]
          ]
        });
      }
      if (!cellControls) {
        setAttributes({
          cellControls: {}
        });
      }
    }, [tableData, cellControls, setAttributes]);
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
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Double", "digiblocks"), value: "double" },
      { label: __("None", "digiblocks"), value: "none" }
    ];
    const tablePresetOptions = [
      { label: __("Default", "digiblocks"), value: "default" },
      { label: __("Striped", "digiblocks"), value: "striped" },
      { label: __("Bordered", "digiblocks"), value: "bordered" },
      { label: __("Borderless", "digiblocks"), value: "borderless" },
      { label: __("Modern", "digiblocks"), value: "modern" },
      { label: __("Minimal", "digiblocks"), value: "minimal" }
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
    const addRow = (index) => {
      if (!tableData || tableData.length === 0)
        return;
      const newTableData = [...tableData];
      const columnsCount = newTableData[0].length;
      const newRow = Array(columnsCount).fill("");
      newTableData.splice(index + 1, 0, newRow);
      setAttributes({ tableData: newTableData });
    };
    const deleteRow = (index) => {
      if (!tableData || tableData.length <= 1) {
        return;
      }
      const newTableData = [...tableData];
      newTableData.splice(index, 1);
      setAttributes({ tableData: newTableData });
    };
    const addColumn = (index) => {
      if (!tableData || tableData.length === 0)
        return;
      const newTableData = tableData.map((row) => {
        const newRow = [...row];
        newRow.splice(index + 1, 0, "");
        return newRow;
      });
      setAttributes({ tableData: newTableData });
    };
    const deleteColumn = (index) => {
      if (!tableData || tableData[0].length <= 1) {
        return;
      }
      const newTableData = tableData.map((row) => {
        const newRow = [...row];
        newRow.splice(index, 1);
        return newRow;
      });
      setAttributes({ tableData: newTableData });
    };
    const updateCellContent = (value, rowIndex, colIndex) => {
      const newTableData = [...tableData];
      newTableData[rowIndex][colIndex] = value;
      setAttributes({ tableData: newTableData });
    };
    const handleCellClick = (rowIndex, colIndex) => {
      setSelectedCell({ row: rowIndex, col: colIndex });
    };
    const getCellControl = (row, col, controlType) => {
      if (!cellControls)
        return null;
      const cellKey = `${row}-${col}`;
      if (cellControls[cellKey] && cellControls[cellKey][controlType]) {
        return cellControls[cellKey][controlType];
      }
      return null;
    };
    const setCellControl = (row, col, controlType, value) => {
      const cellKey = `${row}-${col}`;
      const updatedControls = { ...cellControls || {} };
      if (!updatedControls[cellKey]) {
        updatedControls[cellKey] = {};
      }
      updatedControls[cellKey][controlType] = value;
      setAttributes({ cellControls: updatedControls });
    };
    const clearCellControl = (row, col, controlType) => {
      if (!cellControls)
        return;
      const cellKey = `${row}-${col}`;
      const updatedControls = { ...cellControls };
      if (updatedControls[cellKey] && updatedControls[cellKey][controlType]) {
        delete updatedControls[cellKey][controlType];
        if (Object.keys(updatedControls[cellKey]).length === 0) {
          delete updatedControls[cellKey];
        }
        setAttributes({ cellControls: updatedControls });
      }
    };
    const applyTablePreset = (preset) => {
      let newAttributes = {};
      switch (preset) {
        case "striped":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#dee2e6",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#f8f9fa",
            headerTextColor: "#212529",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "#f2f2f2",
            bodyTextColor: "#212529"
          };
          break;
        case "bordered":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 2,
            tableBorderColor: "#dee2e6",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#f8f9fa",
            headerTextColor: "#212529",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "",
            bodyTextColor: "#212529"
          };
          break;
        case "borderless":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "none",
            tableBorderWidth: 0,
            tableBorderColor: "transparent",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "transparent",
            headerTextColor: "#212529",
            bodyBackgroundColor: "transparent",
            altRowBackgroundColor: "",
            bodyTextColor: "#212529"
          };
          break;
        case "modern":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#e0e0e0",
            tableBorderCollapse: "separate",
            headerBackgroundColor: "#4a6cf7",
            headerTextColor: "#ffffff",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "#f8f9fa",
            bodyTextColor: "#212529",
            boxShadow: {
              enable: true,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 4,
              blur: 15,
              spread: 0,
              position: "outset"
            },
            borderRadius: {
              desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            }
          };
          break;
        case "minimal":
          newAttributes = {
            tablePreset: preset,
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#e0e0e0",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#ffffff",
            headerTextColor: "#212529",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "",
            bodyTextColor: "#212529",
            boxShadow: {
              enable: false,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 0,
              blur: 0,
              spread: 0,
              position: "outset"
            },
            borderRadius: {
              desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            }
          };
          break;
        default:
          newAttributes = {
            tablePreset: "default",
            tableBorderStyle: "solid",
            tableBorderWidth: 1,
            tableBorderColor: "#e0e0e0",
            tableBorderCollapse: "collapse",
            headerBackgroundColor: "#f8f9fa",
            headerTextColor: "#333333",
            bodyBackgroundColor: "#ffffff",
            altRowBackgroundColor: "",
            bodyTextColor: "#666666",
            boxShadow: {
              enable: false,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 0,
              blur: 0,
              spread: 0,
              position: "outset"
            },
            borderRadius: {
              desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            }
          };
      }
      setAttributes(newAttributes);
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
      if (!id)
        return "";
      const getFlexAlignment = (textAlign) => {
        switch (textAlign) {
          case "left":
            return "flex-start";
          case "center":
            return "center";
          case "right":
            return "flex-end";
          default:
            return "flex-start";
        }
      };
      let borderCSS = "";
      if (tableBorderStyle !== "none") {
        borderCSS = `
                border-style: ${tableBorderStyle};
                border-width: ${tableBorderWidth}px;
                border-color: ${tableBorderColor};
            `;
      } else {
        borderCSS = "border: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      const borderRadiusCSS = `${getDimensionCSS(borderRadius, "border-radius", activeDevice)}`;
      const cellPaddingCSS = `${getDimensionCSS(cellPadding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice)}`;
      let headingTypographyCSS = "";
      if (headingTypography) {
        if (headingTypography.fontFamily) {
          headingTypographyCSS += `font-family: ${headingTypography.fontFamily};`;
        }
        const headerFontSize = getVal(headingTypography.fontSize, activeDevice);
        if (headerFontSize) {
          headingTypographyCSS += `font-size: ${headerFontSize}${headingTypography.fontSizeUnit || "px"};`;
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
        const headerLineHeight = getVal(headingTypography.lineHeight, activeDevice);
        if (headerLineHeight) {
          headingTypographyCSS += `line-height: ${headerLineHeight}${headingTypography.lineHeightUnit || "em"};`;
        }
        const headerLetterSpacing = getVal(headingTypography.letterSpacing, activeDevice);
        if (headerLetterSpacing || headerLetterSpacing === 0) {
          headingTypographyCSS += `letter-spacing: ${headerLetterSpacing}${headingTypography.letterSpacingUnit || "px"};`;
        }
      }
      let bodyTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          bodyTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        const bodyFontSize = getVal(textTypography.fontSize, activeDevice);
        if (bodyFontSize) {
          bodyTypographyCSS += `font-size: ${bodyFontSize}${textTypography.fontSizeUnit || "px"};`;
        }
        if (textTypography.fontWeight) {
          bodyTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
        }
        if (textTypography.fontStyle) {
          bodyTypographyCSS += `font-style: ${textTypography.fontStyle};`;
        }
        if (textTypography.textTransform) {
          bodyTypographyCSS += `text-transform: ${textTypography.textTransform};`;
        }
        if (textTypography.textDecoration) {
          bodyTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
        }
        const bodyLineHeight = getVal(textTypography.lineHeight, activeDevice);
        if (bodyLineHeight) {
          bodyTypographyCSS += `line-height: ${bodyLineHeight}${textTypography.lineHeightUnit || "em"};`;
        }
        const bodyLetterSpacing = getVal(textTypography.letterSpacing, activeDevice);
        if (bodyLetterSpacing || bodyLetterSpacing === 0) {
          bodyTypographyCSS += `letter-spacing: ${bodyLetterSpacing}${textTypography.letterSpacingUnit || "px"};`;
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
            /* Table Block - ${id} */
            .${id} {
                ${marginCSS}
                ${boxShadowCSS}
                ${borderRadiusCSS}
                width: 100%;
                transition: all 0.3s ease;
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }
            
            /* Set up main table styles */
            .${id} .digiblocks-table {
                width: 100%;
                border-collapse: ${tableBorderCollapse};
                border-spacing: 0;
                color: ${bodyTextColor};
                ${bodyTypographyCSS}
                ${borderCSS}
                ${borderRadiusCSS}
            }
            
            /* Table header styles */
            .${id} .digiblocks-table thead th {
                background-color: ${headerBackgroundColor};
                color: ${headerTextColor};
                ${headingTypographyCSS}
                ${cellPaddingCSS}
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }

            .${id} .digiblocks-table thead th .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(headerAlignment)};
            }
            
            /* Table body styles */
            .${id} .digiblocks-table tbody td {
                background-color: ${bodyBackgroundColor};
                ${cellPaddingCSS}
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }

            .${id} .digiblocks-table tbody td .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(cellAlignment)};
            }
            
            /* First column styles if it's a header */
            ${firstColHeader ? `
            .${id} .digiblocks-table tbody td:first-child {
                background-color: ${headerBackgroundColor};
                color: ${headerTextColor};
                ${headingTypographyCSS}
                font-weight: bold;
            }

            .${id} .digiblocks-table tbody td:first-child .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(headerAlignment)};
            }
            ` : ""}
            
            /* Alternating row styles if enabled */
            ${altRowBackgroundColor ? `
            .${id} .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${altRowBackgroundColor};
            }
            ${firstColHeader ? `
            .${id} .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${headerBackgroundColor};
            }
            ` : ""}
            ` : ""}
            
            /* Footer styles if enabled */
            ${hasFooter ? `
            .${id} .digiblocks-table tfoot td {
                background-color: ${footerBackgroundColor};
                color: ${footerTextColor};
                ${contentTypographyCSS}
                ${cellPaddingCSS}
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }

            .${id} .digiblocks-table tfoot td .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(footerAlignment)};
            }
            ` : ""}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${responsiveMode === "stack" ? `
                .${id} {
					border-radius: 0;
					box-shadow: none;
                }

                .${id} .digiblocks-table {
                    border-collapse: collapse;
					border: 0;
					border-radius: 0;
                }
                
                .${id} .digiblocks-table thead,
                .${id} .digiblocks-table tfoot {
                    display: none;
                }

				.${id} .digiblocks-table tbody {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
                
                .${id} .digiblocks-table tbody tr {
                    display: block;
                    border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
					${boxShadowCSS}
					transition: all 0.3s ease;
                }

				/* Hover effects */
				${boxShadowHover && boxShadowHover.enable ? `
				.${id} .digiblocks-table tbody tr:hover {
						${boxShadowHoverCSS}
					}
				` : ""}
                
                .${id} .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
					gap: 1rem;
                    text-align: right;
                    border-bottom: 1px solid ${tableBorderColor};
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                
                .${id} .digiblocks-table tbody td::before {
                    content: attr(data-label);
                    font-weight: bold;
                    text-align: left;
                    flex: 1;
                }
                
                .${id} .digiblocks-table tbody td:last-child {
                    border-bottom: none;
                }
                
                ${firstColHeader ? `
                .${id} .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${headerBackgroundColor};
                    color: ${headerTextColor};
                    justify-content: center;
                }
                
                .${id} .digiblocks-table tbody td:first-child::before {
                    content: '';
                    display: none;
                }
                ` : ""}
                ` : ""}
                
                /* Scroll mode */
                ${responsiveMode === "scroll" ? `
                .${id} {
                    overflow-x: auto;
                }
                
                .${id} .digiblocks-table {
                    min-width: 600px; /* Ensure it's wider than most mobile screens */
                }
                ` : ""}
            }
            
            /* Cell content layout */
            .${id} .digiblocks-cell-content {
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .${id} .digiblocks-cell-icon {
                flex-shrink: 0;
            }
            
            /* Cell control icons */
            .${id} .digiblocks-table .digiblocks-cell-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-table .digiblocks-cell-check {
                color: #28a745;
            }
            
            .${id} .digiblocks-table .digiblocks-cell-warning {
                color: #dca236;
            }
            
            .${id} .digiblocks-table .digiblocks-cell-cross {
                color: #dc3545;
            }
            
            .${id} .digiblocks-table .digiblocks-cell-stars {
                color: #ffc107;
                display: inline-flex;
				gap: 5px;
            }
            
            /* Selected cell highlight */
            .${id} .digiblocks-table .digiblocks-selected-cell {
                position: relative;
                outline: 2px solid #4a6cf7;
                outline-offset: -2px;
                z-index: 1;
            }
            
            /* Cell Controls Toolbar */
            .${id} .digiblocks-cell-controls-toolbar {
                margin-bottom: 15px;
                padding: 12px;
                background-color: #f0f0f1;
                border-radius: 4px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }
            
            .${id} .digiblocks-cell-controls-label {
                font-weight: bold;
            }

			.${id} .digiblocks-cell-controls-buttons .components-button-group {
                display: flex;
                align-items: center;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-check-button {
                color: #28a745;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-warning-button {
                color: #dca236;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-cross-button {
                color: #dc3545;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-rating-button {
                color: #ffc107;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-remove-button {
                color: #fe5252;
            }
            
            .components-popover.digiblocks-cell-control-popover .components-popover__content {
				min-width: 200px;
				padding: 1rem;
			}
            
            .components-popover.digiblocks-cell-control-popover .components-popover__content h3 {
				font-size: 1rem;
				margin: 0 0 1rem;
			}

			.components-popover.digiblocks-cell-control-popover .components-button-group {
				display: flex;
			}

			.components-popover.digiblocks-cell-control-popover .components-button-group button {
				flex: 1;
			}
            
            /* Table instructions */
            .${id} .digiblocks-table-instructions {
                margin-bottom: 15px;
                font-style: italic;
                color: #555;
            }
            
            /* Editor controls */
            .${id} .digiblocks-table-controls {
                margin-top: 20px;
                margin-bottom: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
            }
            
            .${id} .digiblocks-row-controls,
            .${id} .digiblocks-col-controls {
                position: relative;
            }
            
            .${id} .digiblocks-cell-control-panel {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                z-index: 100;
                width: 240px;
            }
            
            .${id} .digiblocks-cell-control-panel h3 {
                margin-top: 0;
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            .${id} .digiblocks-control-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 5px;
            }
            
            /* Table caption if any */
            .${id} .digiblocks-table-caption {
                text-align: center;
                margin-bottom: 10px;
                font-style: italic;
            }
            
            /* Animation CSS for the table */
            ${animation && animation !== "none" && animations[animation] ? animations[animation].keyframes : ""}

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
    const renderCellControlToolbar = () => {
      if (selectedCell.row === -1 || selectedCell.col === -1) {
        return null;
      }
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-controls-toolbar" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-controls-label" }, __("Selected Cell:", "digiblocks"), " Row ", selectedCell.row + 1, ", Column ", selectedCell.col + 1), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-controls-buttons" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-button-group" }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-cell-control-check-button",
          icon: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" })),
          label: __("Add Check", "digiblocks"),
          onClick: () => {
            clearCellControl(selectedCell.row, selectedCell.col, "stars");
            setCellControl(selectedCell.row, selectedCell.col, "icon", "check");
          }
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-cell-control-warning-button",
          icon: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" })),
          label: __("Add Warning", "digiblocks"),
          onClick: () => {
            clearCellControl(selectedCell.row, selectedCell.col, "stars");
            setCellControl(selectedCell.row, selectedCell.col, "icon", "warning");
          }
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-cell-control-cross-button",
          icon: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" })),
          label: __("Add Cross", "digiblocks"),
          onClick: () => {
            clearCellControl(selectedCell.row, selectedCell.col, "stars");
            setCellControl(selectedCell.row, selectedCell.col, "icon", "cross");
          }
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-cell-control-rating-button",
          icon: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" })),
          label: __("Add Rating", "digiblocks"),
          onClick: () => {
            clearCellControl(selectedCell.row, selectedCell.col, "icon");
            setIsRatingPopoverOpen(true);
          }
        }
      ), getCellControl(selectedCell.row, selectedCell.col, "icon") || getCellControl(selectedCell.row, selectedCell.col, "stars") ? /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-cell-control-remove-button",
          icon: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "16", height: "16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" })),
          label: __("Remove Icons", "digiblocks"),
          onClick: () => {
            clearCellControl(selectedCell.row, selectedCell.col, "icon");
            clearCellControl(selectedCell.row, selectedCell.col, "stars");
          }
        }
      ) : null), isRatingPopoverOpen && /* @__PURE__ */ wp.element.createElement(
        Popover,
        {
          className: "digiblocks-cell-control-popover",
          onClose: () => setIsRatingPopoverOpen(false),
          position: "bottom center"
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-rating-selector" }, /* @__PURE__ */ wp.element.createElement("h3", null, __("Select Rating", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
          ToggleGroupControl,
          {
            isBlock: true,
            onChange: (value) => {
              setCellControl(selectedCell.row, selectedCell.col, "stars", value.toString());
              setIsRatingPopoverOpen(false);
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          },
          [1, 2, 3, 4, 5].map((num) => /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControlOption,
            {
              key: `star-${num}`,
              value: num,
              label: num.toString()
            }
          ))
        ))
      )));
    };
    const renderCellIcon = (row, col) => {
      if (!cellControls)
        return null;
      const cellKey = `${row}-${col}`;
      if (!cellControls[cellKey]) {
        return null;
      }
      if (cellControls[cellKey].icon) {
        const icon = cellControls[cellKey].icon;
        switch (icon) {
          case "check":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-check" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" })));
          case "warning":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-warning" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" })));
          case "cross":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-cross" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" })));
          default:
            return null;
        }
      }
      if (cellControls[cellKey].stars) {
        const starCount = parseInt(cellControls[cellKey].stars) || 0;
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < starCount) {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" })))
            );
          } else {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-empty-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", opacity: "0.5" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z" })))
            );
          }
        }
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-stars" }, stars);
      }
      return null;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "general-settings",
              title: __("Table Structure", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Enable Header Row", "digiblocks"),
                checked: hasHeader,
                onChange: () => setAttributes({ hasHeader: !hasHeader }),
                help: __("Display the first row as table header.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Enable Footer Row", "digiblocks"),
                checked: hasFooter,
                onChange: () => setAttributes({ hasFooter: !hasFooter }),
                help: __("Display the last row as table footer.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("First Column as Header", "digiblocks"),
                checked: firstColHeader,
                onChange: () => setAttributes({ firstColHeader: !firstColHeader }),
                help: __("Use the first column as a header column.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "preset-settings",
              title: __("Table Presets", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Table Style Preset", "digiblocks"),
                value: tablePreset,
                options: tablePresetOptions,
                onChange: (value) => applyTablePreset(value),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "responsive-settings",
              title: __("Responsive Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("Mobile Behavior", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl,
                {
                  value: responsiveMode,
                  onChange: (value) => setAttributes({ responsiveMode: value }),
                  help: __("How the table should behave on small screens.", "digiblocks"),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "stack",
                    label: __("Stack", "digiblocks"),
                    "aria-label": __("Stack Behavior", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "scroll",
                    label: __("Scroll", "digiblocks"),
                    "aria-label": __("Scroll Behavior", "digiblocks")
                  }
                )
              )
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "border-settings",
              title: __("Borders & Radius", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: tableBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ tableBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            tableBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Border Width", "digiblocks"),
                value: tableBorderWidth,
                onChange: (value) => setAttributes({ tableBorderWidth: value }),
                min: 1,
                max: 10,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Border Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: tableBorderColor,
                    onChange: (value) => setAttributes({ tableBorderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Collapse", "digiblocks"),
                value: tableBorderCollapse,
                options: [
                  { label: __("Collapse", "digiblocks"), value: "collapse" },
                  { label: __("Separate", "digiblocks"), value: "separate" }
                ],
                onChange: (value) => setAttributes({ tableBorderCollapse: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
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
              name: "header-settings",
              title: __("Header Styles", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
                  "Header Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: headerBackgroundColor,
                    onChange: (value) => setAttributes({
                      headerBackgroundColor: value
                    }),
                    label: __(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: headerTextColor,
                    onChange: (value) => setAttributes({
                      headerTextColor: value
                    }),
                    label: __(
                      "Text Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Header Typography",
                  "digiblocks"
                ),
                value: headingTypography,
                onChange: (value) => setAttributes({
                  headingTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 18, tablet: 16, mobile: 15 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("Text Alignment", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl,
                {
                  value: headerAlignment,
                  onChange: (value) => setAttributes({ headerAlignment: value }),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "left",
                    label: __("Left", "digiblocks"),
                    "aria-label": __("Left", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "center",
                    label: __("Center", "digiblocks"),
                    "aria-label": __("Center", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "right",
                    label: __("Right", "digiblocks"),
                    "aria-label": __("Right", "digiblocks")
                  }
                )
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "body-settings",
              title: __("Body Styles", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
                  "Body Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: bodyBackgroundColor,
                    onChange: (value) => setAttributes({
                      bodyBackgroundColor: value
                    }),
                    label: __(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: altRowBackgroundColor,
                    onChange: (value) => setAttributes({
                      altRowBackgroundColor: value
                    }),
                    label: __(
                      "Alternate Row Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: bodyTextColor,
                    onChange: (value) => setAttributes({
                      bodyTextColor: value
                    }),
                    label: __(
                      "Text Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Body Typography",
                  "digiblocks"
                ),
                value: textTypography,
                onChange: (value) => setAttributes({
                  textTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("Text Alignment", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl,
                {
                  value: cellAlignment,
                  onChange: (value) => setAttributes({ cellAlignment: value }),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "left",
                    label: __("Left", "digiblocks"),
                    "aria-label": __("Left", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "center",
                    label: __("Center", "digiblocks"),
                    "aria-label": __("Center", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "right",
                    label: __("Right", "digiblocks"),
                    "aria-label": __("Right", "digiblocks")
                  }
                )
              )
            )
          ), hasFooter && /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "footer-settings",
              title: __("Footer Styles", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
                  "Footer Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: footerBackgroundColor,
                    onChange: (value) => setAttributes({
                      footerBackgroundColor: value
                    }),
                    label: __(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: footerTextColor,
                    onChange: (value) => setAttributes({
                      footerTextColor: value
                    }),
                    label: __(
                      "Text Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Footer Typography",
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
            ),
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("Text Alignment", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl,
                {
                  value: footerAlignment,
                  onChange: (value) => setAttributes({ footerAlignment: value }),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "left",
                    label: __("Left", "digiblocks"),
                    "aria-label": __("Left", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "center",
                    label: __("Center", "digiblocks"),
                    "aria-label": __("Center", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "right",
                    label: __("Right", "digiblocks"),
                    "aria-label": __("Right", "digiblocks")
                  }
                )
              )
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
                label: __("Cell Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: cellPadding && cellPadding[localActiveDevice] ? cellPadding[localActiveDevice] : {
                    top: 15,
                    right: 15,
                    bottom: 15,
                    left: 15,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    cellPadding: {
                      ...cellPadding,
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
    const renderTableContent = () => {
      return /* @__PURE__ */ wp.element.createElement("table", { className: "digiblocks-table" }, hasHeader && tableData.length > 0 && /* @__PURE__ */ wp.element.createElement("thead", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[0].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
        "th",
        {
          key: `header-${colIndex}`,
          onClick: () => handleCellClick(0, colIndex),
          className: selectedCell.row === 0 && selectedCell.col === colIndex ? "digiblocks-selected-cell" : ""
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(0, colIndex), /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "span",
            value: cell,
            onChange: (value) => updateCellContent(value, 0, colIndex),
            placeholder: __("Header text", "digiblocks")
          }
        ))
      )))), /* @__PURE__ */ wp.element.createElement("tbody", null, tableData.slice(
        hasHeader ? 1 : 0,
        hasFooter ? tableData.length - 1 : tableData.length
      ).map((row, rowIndex) => {
        const actualRowIndex = hasHeader ? rowIndex + 1 : rowIndex;
        return /* @__PURE__ */ wp.element.createElement("tr", { key: `row-${actualRowIndex}` }, row.map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
          "td",
          {
            key: `cell-${actualRowIndex}-${colIndex}`,
            "data-label": hasHeader && tableData[0] && tableData[0][colIndex] ? tableData[0][colIndex] : "",
            onClick: () => handleCellClick(actualRowIndex, colIndex),
            className: selectedCell.row === actualRowIndex && selectedCell.col === colIndex ? "digiblocks-selected-cell" : ""
          },
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(actualRowIndex, colIndex), /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "span",
              value: cell,
              onChange: (value) => updateCellContent(value, actualRowIndex, colIndex),
              placeholder: __("Cell text", "digiblocks")
            }
          ))
        )));
      })), hasFooter && tableData.length > 1 && /* @__PURE__ */ wp.element.createElement("tfoot", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[tableData.length - 1].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
        "td",
        {
          key: `footer-${colIndex}`,
          onClick: () => handleCellClick(tableData.length - 1, colIndex),
          className: selectedCell.row === tableData.length - 1 && selectedCell.col === colIndex ? "digiblocks-selected-cell" : ""
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(tableData.length - 1, colIndex), /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "span",
            value: cell,
            onChange: (value) => updateCellContent(value, tableData.length - 1, colIndex),
            placeholder: __("Footer text", "digiblocks")
          }
        ))
      )))));
    };
    const blockProps = useBlockProps({
      className: `digiblocks-table-block ${id} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    if (!tableData || !Array.isArray(tableData) || tableData.length === 0) {
      return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("p", null, __("Initializing table...", "digiblocks")));
    }
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(BlockControls, null, /* @__PURE__ */ wp.element.createElement(ToolbarGroup, null, /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-row-before",
        label: __("Add Row Before", "digiblocks"),
        onClick: () => {
          if (selectedCell.row >= 0) {
            addRow(selectedCell.row - 1);
          } else {
            addRow(0);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-row-after",
        label: __("Add Row After", "digiblocks"),
        onClick: () => {
          if (selectedCell.row >= 0) {
            addRow(selectedCell.row);
          } else {
            addRow(tableData.length - 1);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-row-delete",
        label: __("Delete Row", "digiblocks"),
        onClick: () => {
          if (selectedCell.row >= 0) {
            deleteRow(selectedCell.row);
            setSelectedCell({ row: -1, col: -1 });
          }
        },
        disabled: tableData.length <= 1 || selectedCell.row < 0
      }
    )), /* @__PURE__ */ wp.element.createElement(ToolbarGroup, null, /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-col-before",
        label: __("Add Column Before", "digiblocks"),
        onClick: () => {
          if (selectedCell.col >= 0) {
            addColumn(selectedCell.col - 1);
          } else {
            addColumn(0);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-col-after",
        label: __("Add Column After", "digiblocks"),
        onClick: () => {
          if (selectedCell.col >= 0) {
            addColumn(selectedCell.col);
          } else {
            addColumn(tableData[0].length - 1);
          }
        }
      }
    ), /* @__PURE__ */ wp.element.createElement(
      ToolbarButton,
      {
        icon: "table-col-delete",
        label: __("Delete Column", "digiblocks"),
        onClick: () => {
          if (selectedCell.col >= 0) {
            deleteColumn(selectedCell.col);
            setSelectedCell({ row: -1, col: -1 });
          }
        },
        disabled: tableData[0].length <= 1 || selectedCell.col < 0
      }
    ))), /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-instructions" }, /* @__PURE__ */ wp.element.createElement("p", null, __("Click on any cell to select it and add icons, checks, warnings, crosses, or star ratings.", "digiblocks"))), selectedCell.row !== -1 && selectedCell.col !== -1 && renderCellControlToolbar(), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-container" }, renderTableContent()), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-controls" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-row-controls" }, /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        isPrimary: true,
        icon: "plus",
        onClick: () => addRow(tableData.length - 1)
      },
      __("Add Row", "digiblocks")
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-col-controls" }, /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        isPrimary: true,
        icon: "plus",
        onClick: () => addColumn(tableData[0].length - 1)
      },
      __("Add Column", "digiblocks")
    )))));
  };
  var edit_default = TableEdit;

  // blocks/table/save.js
  var { __: __2 } = window.wp.i18n;
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var TableSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      tableData,
      hasHeader,
      hasFooter,
      responsiveMode,
      animation,
      animationDuration,
      animationDelay,
      cellControls
    } = attributes;
    const blockClasses = [
      "digiblocks-table-block",
      id,
      `responsive-${responsiveMode}`,
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const getCellControl = (row, col, controlType) => {
      const cellKey = `${row}-${col}`;
      if (cellControls[cellKey] && cellControls[cellKey][controlType]) {
        return cellControls[cellKey][controlType];
      }
      return null;
    };
    const renderCellIcon = (row, col) => {
      const cellKey = `${row}-${col}`;
      if (!cellControls[cellKey]) {
        return null;
      }
      if (cellControls[cellKey].icon) {
        const icon = cellControls[cellKey].icon;
        switch (icon) {
          case "check":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-check" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" })));
          case "warning":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-warning" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" })));
          case "cross":
            return /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-cell-icon digiblocks-cell-cross" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "20", height: "20", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" })));
          default:
            return null;
        }
      }
      if (cellControls[cellKey].stars) {
        const starCount = parseInt(cellControls[cellKey].stars);
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < starCount) {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" })))
            );
          } else {
            stars.push(
              /* @__PURE__ */ wp.element.createElement("span", { key: `star-empty-${i}`, className: "digiblocks-cell-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", opacity: "0.5" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z" })))
            );
          }
        }
        return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-stars" }, stars);
      }
      return null;
    };
    const blockProps = {
      className: blockClasses,
      id: anchor || null
    };
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-container" }, /* @__PURE__ */ wp.element.createElement("table", { className: "digiblocks-table" }, hasHeader && /* @__PURE__ */ wp.element.createElement("thead", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[0].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement("th", { key: `header-${colIndex}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(0, colIndex), /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        tagName: "span",
        value: cell
      }
    )))))), /* @__PURE__ */ wp.element.createElement("tbody", null, tableData.slice(hasHeader ? 1 : 0, hasFooter ? tableData.length - 1 : tableData.length).map((row, rowIndex) => {
      const actualRowIndex = hasHeader ? rowIndex + 1 : rowIndex;
      return /* @__PURE__ */ wp.element.createElement("tr", { key: `row-${actualRowIndex}` }, row.map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement(
        "td",
        {
          key: `cell-${actualRowIndex}-${colIndex}`,
          "data-label": hasHeader ? tableData[0][colIndex] : ""
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(actualRowIndex, colIndex), /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "span",
            value: cell
          }
        ))
      )));
    })), hasFooter && /* @__PURE__ */ wp.element.createElement("tfoot", null, /* @__PURE__ */ wp.element.createElement("tr", null, tableData[tableData.length - 1].map((cell, colIndex) => /* @__PURE__ */ wp.element.createElement("td", { key: `footer-${colIndex}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-cell-content" }, renderCellIcon(tableData.length - 1, colIndex), /* @__PURE__ */ wp.element.createElement(
      RichText2.Content,
      {
        tagName: "span",
        value: cell
      }
    )))))))));
  };
  var save_default = TableSave;

  // blocks/table/index.js
  var { __: __3 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/table", {
    apiVersion: 2,
    title: digiBlocksData.blocks["table"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["table"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["table"].description,
    keywords: [__3("table", "digiblocks"), __3("comparison", "digiblocks"), __3("grid", "digiblocks"), __3("cells", "digiblocks")],
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
      tableData: {
        type: "array",
        default: [
          ["Header 1", "Header 2", "Header 3"],
          ["Cell 1,1", "Cell 1,2", "Cell 1,3"],
          ["Cell 2,1", "Cell 2,2", "Cell 2,3"]
        ]
      },
      hasHeader: {
        type: "boolean",
        default: true
      },
      hasFooter: {
        type: "boolean",
        default: false
      },
      tableBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      tableBorderWidth: {
        type: "number",
        default: 1
      },
      tableBorderStyle: {
        type: "string",
        default: "solid"
      },
      cellPadding: {
        type: "object",
        default: {
          desktop: { top: 15, right: 15, bottom: 15, left: 15, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      tableBorderCollapse: {
        type: "string",
        default: "collapse"
      },
      headerBackgroundColor: {
        type: "string",
        default: "#f8f9fa"
      },
      headerTextColor: {
        type: "string",
        default: "#333333"
      },
      headingTypography: {
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
      bodyBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      altRowBackgroundColor: {
        type: "string",
        default: ""
      },
      bodyTextColor: {
        type: "string",
        default: "#666666"
      },
      textTypography: {
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
      footerBackgroundColor: {
        type: "string",
        default: "#f8f9fa"
      },
      footerTextColor: {
        type: "string",
        default: "#333333"
      },
      contentTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
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
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
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
          vertical: 2,
          blur: 10,
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
          vertical: 10,
          blur: 25,
          spread: 0,
          position: "outset"
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
      cellAlignment: {
        type: "string",
        default: "left"
      },
      headerAlignment: {
        type: "string",
        default: "left"
      },
      footerAlignment: {
        type: "string",
        default: "left"
      },
      tablePreset: {
        type: "string",
        default: "default"
      },
      responsiveMode: {
        type: "string",
        default: "stack"
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
      firstColHeader: {
        type: "boolean",
        default: false
      },
      cellControls: {
        type: "object",
        default: {}
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
        tableData: [
          ["Feature", "Basic", "Premium"],
          ["Storage", "10GB", "1TB"],
          ["Users", "1", "Unlimited"],
          ["Support", "Email", "24/7 Phone"],
          ["Price", "$9.99", "$29.99"]
        ],
        hasHeader: true,
        headerBackgroundColor: "#f8f9fa",
        bodyBackgroundColor: "#ffffff",
        altRowBackgroundColor: "#f9f9f9"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
