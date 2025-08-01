(() => {
  // blocks/pricing-table/edit.js
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
    Button,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;
  var PricingTableEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      tables,
      columns,
      tableStyle,
      align,
      animation,
      titleTypography,
      headingTypography,
      textTypography,
      contentTypography,
      buttonTypography,
      padding,
      margin,
      borderRadius,
      borderWidth,
      borderStyle,
      borderColor,
      boxShadow,
      boxShadowHover,
      buttonRadius,
      buttonPadding,
      buttonBorderStyle,
      buttonBorderWidth,
      buttonBorderColor,
      buttonBorderHoverColor,
      showRibbon,
      ribbonStyle,
      ribbonPosition,
      tableTextColor,
      tableBackgroundColor,
      headerBackgroundColor,
      buttonTextColor,
      buttonBackgroundColor,
      buttonTextHoverColor,
      buttonBackgroundHoverColor,
      ribbonTextColor,
      ribbonBackgroundColor
    } = attributes;
    useBlockId(id, clientId, setAttributes);
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
    const [activeTable, setActiveTable] = useState(0);
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
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect(() => {
      if (!tables || tables.length === 0) {
        setAttributes({
          tables: [
            {
              id: `table-1-${Date.now().toString(36)}`,
              title: __("Basic Plan", "digiblocks"),
              price: "$19",
              period: "/month",
              description: __("Great for starters", "digiblocks"),
              iconValue: null,
              features: [
                { text: __("1 Website", "digiblocks"), enabled: true },
                { text: __("5GB Storage", "digiblocks"), enabled: true },
                { text: __("10k Visits Monthly", "digiblocks"), enabled: true },
                { text: __("Premium Support", "digiblocks"), enabled: false }
              ],
              buttonText: __("Get Started", "digiblocks"),
              buttonUrl: "",
              buttonOpenInNewTab: false,
              buttonRel: "",
              isHighlighted: false,
              ribbonText: __("Popular", "digiblocks"),
              backgroundColor: "",
              headerBackgroundColor: "",
              textColor: "",
              buttonBackgroundColor: "",
              buttonTextColor: ""
            },
            {
              id: `table-2-${Date.now().toString(36)}`,
              title: __("Pro Plan", "digiblocks"),
              price: "$49",
              period: "/month",
              description: __("For growing businesses", "digiblocks"),
              iconValue: null,
              features: [
                { text: __("5 Websites", "digiblocks"), enabled: true },
                { text: __("20GB Storage", "digiblocks"), enabled: true },
                { text: __("50k Visits Monthly", "digiblocks"), enabled: true },
                { text: __("Premium Support", "digiblocks"), enabled: true }
              ],
              buttonText: __("Get Started", "digiblocks"),
              buttonUrl: "",
              buttonOpenInNewTab: false,
              buttonRel: "",
              isHighlighted: true,
              ribbonText: __("Popular", "digiblocks"),
              backgroundColor: "",
              headerBackgroundColor: "",
              textColor: "",
              buttonBackgroundColor: "",
              buttonTextColor: ""
            }
          ],
          columns: 2,
          tableStyle: "style1",
          align: "center",
          showRibbon: true,
          ribbonStyle: "corner",
          ribbonPosition: "right",
          titleTypography: titleTypography || {
            fontSize: { desktop: 24, tablet: 20, mobile: 18 },
            fontSizeUnit: "px",
            lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
            lineHeightUnit: "em",
            fontWeight: "",
            fontFamily: ""
          },
          headingTypography: headingTypography || {
            fontSize: { desktop: 36, tablet: 30, mobile: 26 },
            fontSizeUnit: "px",
            lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
            lineHeightUnit: "em",
            fontWeight: "bold",
            fontFamily: ""
          },
          textTypography: textTypography || {
            fontSize: { desktop: 16, tablet: 15, mobile: 14 },
            fontSizeUnit: "px",
            lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
            lineHeightUnit: "em",
            fontWeight: "",
            fontFamily: ""
          },
          contentTypography: contentTypography || {
            fontSize: { desktop: 16, tablet: 15, mobile: 14 },
            fontSizeUnit: "px",
            lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
            lineHeightUnit: "em",
            fontWeight: "",
            fontFamily: ""
          },
          buttonTypography: buttonTypography || {
            fontSize: { desktop: 16, tablet: 15, mobile: 14 },
            fontSizeUnit: "px",
            lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
            lineHeightUnit: "em",
            fontWeight: "",
            fontFamily: ""
          }
        });
      }
    }, [tables, setAttributes]);
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
    const tableStyleOptions = [
      { label: __("Style 1", "digiblocks"), value: "style1" },
      { label: __("Style 2", "digiblocks"), value: "style2" },
      { label: __("Style 3", "digiblocks"), value: "style3" },
      { label: __("Style 4", "digiblocks"), value: "style4" },
      { label: __("Minimal", "digiblocks"), value: "minimal" }
    ];
    const ribbonStyleOptions = [
      { label: __("Corner", "digiblocks"), value: "corner" },
      { label: __("Banner", "digiblocks"), value: "banner" },
      { label: __("Side", "digiblocks"), value: "side" },
      { label: __("Flag", "digiblocks"), value: "flag" }
    ];
    const ribbonPositionOptions = [
      { label: __("Right", "digiblocks"), value: "right" },
      { label: __("Left", "digiblocks"), value: "left" }
    ];
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Double", "digiblocks"), value: "double" }
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
    const addTable = () => {
      const newTables = [...tables, {
        id: `table-${tables.length + 1}-${Date.now().toString(36)}`,
        title: __("New Plan", "digiblocks"),
        price: "$29",
        period: "/month",
        description: __("Add your description", "digiblocks"),
        iconValue: null,
        features: [
          { text: __("Feature 1", "digiblocks"), enabled: true },
          { text: __("Feature 2", "digiblocks"), enabled: true },
          { text: __("Feature 3", "digiblocks"), enabled: false }
        ],
        buttonText: __("Get Started", "digiblocks"),
        buttonUrl: "",
        buttonOpenInNewTab: false,
        buttonRel: "",
        isHighlighted: false,
        ribbonText: __("Popular", "digiblocks"),
        backgroundColor: "",
        headerBackgroundColor: "",
        textColor: "",
        buttonBackgroundColor: "",
        buttonTextColor: ""
      }];
      setAttributes({ tables: newTables });
      setActiveTable(newTables.length - 1);
    };
    const removeTable = (index) => {
      if (tables.length <= 1) {
        return;
      }
      const newTables = [...tables];
      newTables.splice(index, 1);
      setAttributes({ tables: newTables });
      if (activeTable >= newTables.length) {
        setActiveTable(newTables.length - 1);
      }
    };
    const duplicateTable = (index) => {
      const tableToDuplicate = tables[index];
      const newTable = {
        ...tableToDuplicate,
        id: `table-${tables.length + 1}-${Date.now().toString(36)}`
      };
      const newTables = [...tables];
      newTables.splice(index + 1, 0, newTable);
      setAttributes({ tables: newTables });
      setActiveTable(index + 1);
    };
    const moveTableUp = (index) => {
      if (index === 0)
        return;
      const newTables = [...tables];
      const temp = newTables[index];
      newTables[index] = newTables[index - 1];
      newTables[index - 1] = temp;
      setAttributes({ tables: newTables });
      setActiveTable(index - 1);
    };
    const moveTableDown = (index) => {
      if (index === tables.length - 1)
        return;
      const newTables = [...tables];
      const temp = newTables[index];
      newTables[index] = newTables[index + 1];
      newTables[index + 1] = temp;
      setAttributes({ tables: newTables });
      setActiveTable(index + 1);
    };
    const updateTableAttribute = (index, key, value) => {
      const newTables = [...tables];
      newTables[index] = {
        ...newTables[index],
        [key]: value
      };
      setAttributes({ tables: newTables });
    };
    const addFeature = (tableIndex) => {
      const newTables = [...tables];
      newTables[tableIndex].features.push({
        text: __("New Feature", "digiblocks"),
        enabled: true
      });
      setAttributes({ tables: newTables });
    };
    const removeFeature = (tableIndex, featureIndex) => {
      if (tables[tableIndex].features.length <= 1) {
        return;
      }
      const newTables = [...tables];
      newTables[tableIndex].features.splice(featureIndex, 1);
      setAttributes({ tables: newTables });
    };
    const updateFeature = (tableIndex, featureIndex, key, value) => {
      const newTables = [...tables];
      newTables[tableIndex].features[featureIndex] = {
        ...newTables[tableIndex].features[featureIndex],
        [key]: value
      };
      setAttributes({ tables: newTables });
    };
    const toggleFeatureEnabled = (tableIndex, featureIndex) => {
      const newTables = [...tables];
      newTables[tableIndex].features[featureIndex].enabled = !newTables[tableIndex].features[featureIndex].enabled;
      setAttributes({ tables: newTables });
    };
    const applyTableStyle = (style) => {
      setAttributes({ tableStyle: style });
      let newAttributes = {};
      switch (style) {
        case "style1":
          newAttributes = {
            tableBackgroundColor: "#ffffff",
            headerBackgroundColor: "#f8f9fa",
            tableTextColor: "#333333",
            buttonBackgroundColor: "#4a6cf7",
            buttonTextColor: "#ffffff",
            buttonBackgroundHoverColor: "#3151e1",
            buttonTextHoverColor: "#ffffff",
            ribbonBackgroundColor: "#4a6cf7",
            ribbonTextColor: "#ffffff",
            borderStyle: "solid",
            borderWidth: {
              desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            borderColor: "#e6e6e6",
            borderRadius: {
              desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            boxShadow: {
              enable: false,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 0,
              blur: 0,
              spread: 0,
              position: "outset"
            }
          };
          break;
        case "style2":
          newAttributes = {
            tableBackgroundColor: "#ffffff",
            headerBackgroundColor: "#4a6cf7",
            tableTextColor: "#333333",
            buttonBackgroundColor: "#4a6cf7",
            buttonTextColor: "#ffffff",
            buttonBackgroundHoverColor: "#3151e1",
            buttonTextHoverColor: "#ffffff",
            ribbonBackgroundColor: "#ff9800",
            ribbonTextColor: "#ffffff",
            borderStyle: "none",
            borderWidth: {
              desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            borderColor: "#e6e6e6",
            borderRadius: {
              desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            boxShadow: {
              enable: true,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 4,
              blur: 15,
              spread: 0,
              position: "outset"
            }
          };
          break;
        case "style3":
          newAttributes = {
            tableBackgroundColor: "#ffffff",
            headerBackgroundColor: "#ffffff",
            tableTextColor: "#333333",
            buttonBackgroundColor: "#4a6cf7",
            buttonTextColor: "#ffffff",
            buttonBackgroundHoverColor: "#3151e1",
            buttonTextHoverColor: "#ffffff",
            ribbonBackgroundColor: "#ff5252",
            ribbonTextColor: "#ffffff",
            borderStyle: "solid",
            borderWidth: {
              desktop: { top: 3, right: 3, bottom: 3, left: 3, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            borderColor: "#4a6cf7",
            borderRadius: {
              desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            boxShadow: {
              enable: false,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 0,
              blur: 0,
              spread: 0,
              position: "outset"
            }
          };
          break;
        case "style4":
          newAttributes = {
            tableBackgroundColor: "#f8f9fa",
            headerBackgroundColor: "#ffffff",
            tableTextColor: "#333333",
            buttonBackgroundColor: "#333333",
            buttonTextColor: "#ffffff",
            buttonBackgroundHoverColor: "#000000",
            buttonTextHoverColor: "#ffffff",
            ribbonBackgroundColor: "#333333",
            ribbonTextColor: "#ffffff",
            borderStyle: "none",
            borderWidth: {
              desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            borderColor: "#e6e6e6",
            borderRadius: {
              desktop: { top: 16, right: 16, bottom: 16, left: 16, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            boxShadow: {
              enable: true,
              color: "rgba(0, 0, 0, 0.08)",
              horizontal: 0,
              vertical: 10,
              blur: 25,
              spread: 0,
              position: "outset"
            }
          };
          break;
        case "minimal":
          newAttributes = {
            tableBackgroundColor: "transparent",
            headerBackgroundColor: "transparent",
            tableTextColor: "#333333",
            buttonBackgroundColor: "transparent",
            buttonTextColor: "#4a6cf7",
            buttonBackgroundHoverColor: "transparent",
            buttonTextHoverColor: "#3151e1",
            ribbonBackgroundColor: "#f8f9fa",
            ribbonTextColor: "#333333",
            borderStyle: "solid",
            borderWidth: {
              desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            borderColor: "#e6e6e6",
            borderRadius: {
              desktop: { top: "", right: "", bottom: 0, left: 0, unit: "px" },
              tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
              mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
            },
            boxShadow: {
              enable: false,
              color: "rgba(0, 0, 0, 0.1)",
              horizontal: 0,
              vertical: 0,
              blur: 0,
              spread: 0,
              position: "outset"
            }
          };
          break;
        default:
          newAttributes = {};
      }
      setAttributes(newAttributes);
    };
    const FontAwesomeControl2 = componentsLoaded ? window.digi.components.FontAwesomeControl : null;
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "none") {
        borderCSS = `
				border-style: ${borderStyle};
				border-color: ${borderColor || "#e6e6e6"};
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
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const inset = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      const paddingCSS = `${getDimensionCSS(padding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice)}`;
      const defaultTitleTypography = {
        fontFamily: "",
        fontSize: { desktop: 24, tablet: 20, mobile: 18 },
        fontSizeUnit: "px",
        fontWeight: "",
        fontStyle: "normal",
        textTransform: "",
        textDecoration: "",
        lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
        lineHeightUnit: "em",
        letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
        letterSpacingUnit: "px"
      };
      const defaultHeadingTypography = {
        fontFamily: "",
        fontSize: { desktop: 36, tablet: 30, mobile: 26 },
        fontSizeUnit: "px",
        fontWeight: "bold",
        fontStyle: "normal",
        textTransform: "",
        textDecoration: "",
        lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
        lineHeightUnit: "em",
        letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
        letterSpacingUnit: "px"
      };
      const defaultTextTypography = {
        fontFamily: "",
        fontSize: { desktop: 16, tablet: 15, mobile: 14 },
        fontSizeUnit: "px",
        fontWeight: "",
        fontStyle: "normal",
        textTransform: "",
        textDecoration: "",
        lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
        lineHeightUnit: "em",
        letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
        letterSpacingUnit: "px"
      };
      const defaultContentTypography = {
        fontFamily: "",
        fontSize: { desktop: 16, tablet: 15, mobile: 14 },
        fontSizeUnit: "px",
        fontWeight: "",
        fontStyle: "normal",
        textTransform: "",
        textDecoration: "",
        lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
        lineHeightUnit: "em",
        letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
        letterSpacingUnit: "px"
      };
      const defaultButtonTypography = {
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
      };
      let titleTypographyCSS = "";
      const actualTitleTypo = titleTypography || defaultTitleTypography;
      if (actualTitleTypo.fontFamily) {
        titleTypographyCSS += `font-family: ${actualTitleTypo.fontFamily};`;
      }
      if (actualTitleTypo.fontSize && actualTitleTypo.fontSize[activeDevice]) {
        titleTypographyCSS += `font-size: ${actualTitleTypo.fontSize[activeDevice]}${actualTitleTypo.fontSizeUnit || "px"};`;
      } else if (defaultTitleTypography.fontSize && defaultTitleTypography.fontSize[activeDevice]) {
        titleTypographyCSS += `font-size: ${defaultTitleTypography.fontSize[activeDevice]}px;`;
      }
      if (actualTitleTypo.fontWeight) {
        titleTypographyCSS += `font-weight: ${actualTitleTypo.fontWeight};`;
      }
      if (actualTitleTypo.fontStyle) {
        titleTypographyCSS += `font-style: ${actualTitleTypo.fontStyle};`;
      }
      if (actualTitleTypo.textTransform) {
        titleTypographyCSS += `text-transform: ${actualTitleTypo.textTransform};`;
      }
      if (actualTitleTypo.textDecoration) {
        titleTypographyCSS += `text-decoration: ${actualTitleTypo.textDecoration};`;
      }
      if (actualTitleTypo.lineHeight && actualTitleTypo.lineHeight[activeDevice]) {
        titleTypographyCSS += `line-height: ${actualTitleTypo.lineHeight[activeDevice]}${actualTitleTypo.lineHeightUnit || "em"};`;
      } else if (defaultTitleTypography.lineHeight && defaultTitleTypography.lineHeight[activeDevice]) {
        titleTypographyCSS += `line-height: ${defaultTitleTypography.lineHeight[activeDevice]}em;`;
      }
      if (actualTitleTypo.letterSpacing && actualTitleTypo.letterSpacing[activeDevice]) {
        titleTypographyCSS += `letter-spacing: ${actualTitleTypo.letterSpacing[activeDevice]}${actualTitleTypo.letterSpacingUnit || "px"};`;
      }
      let priceTypographyCSS = "";
      const actualHeadingTypo = headingTypography || defaultHeadingTypography;
      if (actualHeadingTypo.fontFamily) {
        priceTypographyCSS += `font-family: ${actualHeadingTypo.fontFamily};`;
      }
      if (actualHeadingTypo.fontSize && actualHeadingTypo.fontSize[activeDevice]) {
        priceTypographyCSS += `font-size: ${actualHeadingTypo.fontSize[activeDevice]}${actualHeadingTypo.fontSizeUnit || "px"};`;
      } else if (defaultHeadingTypography.fontSize && defaultHeadingTypography.fontSize[activeDevice]) {
        priceTypographyCSS += `font-size: ${defaultHeadingTypography.fontSize[activeDevice]}px;`;
      }
      if (actualHeadingTypo.fontWeight) {
        priceTypographyCSS += `font-weight: ${actualHeadingTypo.fontWeight};`;
      } else {
        priceTypographyCSS += `font-weight: bold;`;
      }
      if (actualHeadingTypo.fontStyle) {
        priceTypographyCSS += `font-style: ${actualHeadingTypo.fontStyle};`;
      }
      if (actualHeadingTypo.textTransform) {
        priceTypographyCSS += `text-transform: ${actualHeadingTypo.textTransform};`;
      }
      if (actualHeadingTypo.textDecoration) {
        priceTypographyCSS += `text-decoration: ${actualHeadingTypo.textDecoration};`;
      }
      if (actualHeadingTypo.lineHeight && actualHeadingTypo.lineHeight[activeDevice]) {
        priceTypographyCSS += `line-height: ${actualHeadingTypo.lineHeight[activeDevice]}${actualHeadingTypo.lineHeightUnit || "em"};`;
      } else if (defaultHeadingTypography.lineHeight && defaultHeadingTypography.lineHeight[activeDevice]) {
        priceTypographyCSS += `line-height: ${defaultHeadingTypography.lineHeight[activeDevice]}em;`;
      }
      if (actualHeadingTypo.letterSpacing && actualHeadingTypo.letterSpacing[activeDevice]) {
        priceTypographyCSS += `letter-spacing: ${actualHeadingTypo.letterSpacing[activeDevice]}${actualHeadingTypo.letterSpacingUnit || "px"};`;
      }
      let textTypographyCSS = "";
      const actualTextTypo = textTypography || defaultTextTypography;
      if (actualTextTypo.fontFamily) {
        textTypographyCSS += `font-family: ${actualTextTypo.fontFamily};`;
      }
      if (actualTextTypo.fontSize && actualTextTypo.fontSize[activeDevice]) {
        textTypographyCSS += `font-size: ${actualTextTypo.fontSize[activeDevice]}${actualTextTypo.fontSizeUnit || "px"};`;
      } else if (defaultTextTypography.fontSize && defaultTextTypography.fontSize[activeDevice]) {
        textTypographyCSS += `font-size: ${defaultTextTypography.fontSize[activeDevice]}px;`;
      }
      if (actualTextTypo.fontWeight) {
        textTypographyCSS += `font-weight: ${actualTextTypo.fontWeight};`;
      }
      if (actualTextTypo.fontStyle) {
        textTypographyCSS += `font-style: ${actualTextTypo.fontStyle};`;
      }
      if (actualTextTypo.textTransform) {
        textTypographyCSS += `text-transform: ${actualTextTypo.textTransform};`;
      }
      if (actualTextTypo.textDecoration) {
        textTypographyCSS += `text-decoration: ${actualTextTypo.textDecoration};`;
      }
      if (actualTextTypo.lineHeight && actualTextTypo.lineHeight[activeDevice]) {
        textTypographyCSS += `line-height: ${actualTextTypo.lineHeight[activeDevice]}${actualTextTypo.lineHeightUnit || "em"};`;
      } else if (defaultTextTypography.lineHeight && defaultTextTypography.lineHeight[activeDevice]) {
        textTypographyCSS += `line-height: ${defaultTextTypography.lineHeight[activeDevice]}em;`;
      }
      if (actualTextTypo.letterSpacing && actualTextTypo.letterSpacing[activeDevice]) {
        textTypographyCSS += `letter-spacing: ${actualTextTypo.letterSpacing[activeDevice]}${actualTextTypo.letterSpacingUnit || "px"};`;
      }
      let contentTypographyCSS = "";
      const actualContentTypo = contentTypography || defaultContentTypography;
      if (actualContentTypo.fontFamily) {
        contentTypographyCSS += `font-family: ${actualContentTypo.fontFamily};`;
      }
      if (actualContentTypo.fontSize && actualContentTypo.fontSize[activeDevice]) {
        contentTypographyCSS += `font-size: ${actualContentTypo.fontSize[activeDevice]}${actualContentTypo.fontSizeUnit || "px"};`;
      } else if (defaultContentTypography.fontSize && defaultContentTypography.fontSize[activeDevice]) {
        contentTypographyCSS += `font-size: ${defaultContentTypography.fontSize[activeDevice]}px;`;
      }
      if (actualContentTypo.fontWeight) {
        contentTypographyCSS += `font-weight: ${actualContentTypo.fontWeight};`;
      }
      if (actualContentTypo.fontStyle) {
        contentTypographyCSS += `font-style: ${actualContentTypo.fontStyle};`;
      }
      if (actualContentTypo.textTransform) {
        contentTypographyCSS += `text-transform: ${actualContentTypo.textTransform};`;
      }
      if (actualContentTypo.textDecoration) {
        contentTypographyCSS += `text-decoration: ${actualContentTypo.textDecoration};`;
      }
      if (actualContentTypo.lineHeight && actualContentTypo.lineHeight[activeDevice]) {
        contentTypographyCSS += `line-height: ${actualContentTypo.lineHeight[activeDevice]}${actualContentTypo.lineHeightUnit || "em"};`;
      } else if (defaultContentTypography.lineHeight && defaultContentTypography.lineHeight[activeDevice]) {
        contentTypographyCSS += `line-height: ${defaultContentTypography.lineHeight[activeDevice]}em;`;
      }
      if (actualContentTypo.letterSpacing && actualContentTypo.letterSpacing[activeDevice]) {
        contentTypographyCSS += `letter-spacing: ${actualContentTypo.letterSpacing[activeDevice]}${actualContentTypo.letterSpacingUnit || "px"};`;
      }
      let buttonTypographyCSS = "";
      const actualButtonTypo = buttonTypography || defaultButtonTypography;
      if (actualButtonTypo.fontFamily) {
        buttonTypographyCSS += `font-family: ${actualButtonTypo.fontFamily};`;
      }
      if (actualButtonTypo.fontSize && actualButtonTypo.fontSize[activeDevice]) {
        buttonTypographyCSS += `font-size: ${actualButtonTypo.fontSize[activeDevice]}${actualButtonTypo.fontSizeUnit || "px"};`;
      } else if (defaultButtonTypography.fontSize && defaultButtonTypography.fontSize[activeDevice]) {
        buttonTypographyCSS += `font-size: ${defaultButtonTypography.fontSize[activeDevice]}px;`;
      }
      if (actualButtonTypo.fontWeight) {
        buttonTypographyCSS += `font-weight: ${actualButtonTypo.fontWeight};`;
      }
      if (actualButtonTypo.fontStyle) {
        buttonTypographyCSS += `font-style: ${actualButtonTypo.fontStyle};`;
      }
      if (actualButtonTypo.textTransform) {
        buttonTypographyCSS += `text-transform: ${actualButtonTypo.textTransform};`;
      }
      if (actualButtonTypo.textDecoration) {
        buttonTypographyCSS += `text-decoration: ${actualButtonTypo.textDecoration};`;
      }
      if (actualButtonTypo.lineHeight && actualButtonTypo.lineHeight[activeDevice]) {
        buttonTypographyCSS += `line-height: ${actualButtonTypo.lineHeight[activeDevice]}${actualButtonTypo.lineHeightUnit || "em"};`;
      } else if (defaultButtonTypography.lineHeight && defaultButtonTypography.lineHeight[activeDevice]) {
        buttonTypographyCSS += `line-height: ${defaultButtonTypography.lineHeight[activeDevice]}em;`;
      }
      if (actualButtonTypo.letterSpacing && actualButtonTypo.letterSpacing[activeDevice]) {
        buttonTypographyCSS += `letter-spacing: ${actualButtonTypo.letterSpacing[activeDevice]}${actualButtonTypo.letterSpacingUnit || "px"};`;
      }
      const buttonRadiusValue = buttonRadius || 4;
      const buttonPaddingValue = buttonPadding && buttonPadding[activeDevice] ? `${getDimensionCSS(buttonPadding, "padding", activeDevice)}` : "padding: 10px 20px";
      let buttonBorderCSS = "";
      if (buttonBorderStyle && buttonBorderStyle !== "none") {
        buttonBorderCSS = `
				border-style: ${buttonBorderStyle};
				border-color: ${buttonBorderColor || buttonBackgroundColor || "#4a6cf7"};
				${getDimensionCSS(buttonBorderWidth, "border-width", activeDevice)}
			`;
      } else {
        buttonBorderCSS = "border: none;";
      }
      let tableSpecificCSS = "";
      switch (tableStyle) {
        case "style1":
          tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${id} .digiblocks-pricing-table-header {
						display: flex;
						flex-direction: column;
						gap: 10px;
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
				`;
          break;
        case "style2":
          tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
						overflow: hidden;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 30px 20px;
						margin: -1px -1px 0 -1px;
						color: #ffffff;
					}
					
					.${id} .digiblocks-pricing-table-title {
						color: #ffffff !important;
					}
					
					.${id} .digiblocks-pricing-table-price {
						color: #ffffff !important;
					}
					
					.${id} .digiblocks-pricing-table-description {
						color: rgba(255, 255, 255, 0.8) !important;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-highlighted {
						transform: scale(1.05);
						z-index: 1;
					}
				`;
          break;
        case "style3":
          tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-highlighted {
						border-top-width: 10px !important;
					}
				`;
          break;
        case "style4":
          tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
						border-radius: 16px;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 40px 20px 20px;
						border-radius: 16px 16px 0 0;
					}
					
					.${id} .digiblocks-pricing-table-price {
						font-size: 3rem;
						line-height: 1;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px 30px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 20px 20px 40px;
					}
					
					.${id} .digiblocks-pricing-table-button {
						padding: 15px 35px;
						border-radius: 50px;
					}
				`;
          break;
        case "minimal":
          tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
					
					.${id} .digiblocks-pricing-table-button {
						background: transparent;
						border: 1px solid #4a6cf7;
						padding: 10px 25px;
					}
					
					.${id} .digiblocks-pricing-table-button:hover {
						background: #f8f9fa;
					}
				`;
          break;
        default:
          tableSpecificCSS = "";
      }
      let ribbonCSS = "";
      if (showRibbon) {
        switch (ribbonStyle) {
          case "corner":
            ribbonCSS = `
						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 0;
							${ribbonPosition === "right" ? "right" : "left"}: 0;
							background: ${ribbonBackgroundColor || "#4a6cf7"};
							color: ${ribbonTextColor || "#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							text-transform: uppercase;
							z-index: 2;
							${ribbonPosition === "right" ? "border-radius: 0 0 0 4px;" : "border-radius: 0 0 4px 0;"}
						}
					`;
            break;
          case "banner":
            ribbonCSS = `
						.${id} .digiblocks-pricing-table-highlighted {
							overflow: hidden;
						}

						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 7px;
							${ribbonPosition === "right" ? "right" : "left"}: -24px;
							background: ${ribbonBackgroundColor || "#4a6cf7"};
							color: ${ribbonTextColor || "#ffffff"};
							padding: 5px 30px;
							font-size: 12px;
							font-weight: bold;
							transform: ${ribbonPosition === "right" ? "rotate(45deg)" : "rotate(-45deg)"};
							z-index: 2;
							transform-origin: center center;
						}
					`;
            break;
          case "side":
            ribbonCSS = `
						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 30px;
							${ribbonPosition === "right" ? "right" : "left"}: 0;
							background: ${ribbonBackgroundColor || "#4a6cf7"};
							color: ${ribbonTextColor || "#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							${ribbonPosition === "right" ? "border-radius: 4px 0 0 4px;" : "border-radius: 0 4px 4px 0;"}
							z-index: 2;
						}
					`;
            break;
          case "flag":
            ribbonCSS = `
						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 15px;
							${ribbonPosition === "right" ? "right" : "left"}: 15px;
							background: ${ribbonBackgroundColor || "#4a6cf7"};
							color: ${ribbonTextColor || "#ffffff"};
							padding: 8px 15px;
							font-size: 12px;
							font-weight: bold;
							border-radius: 50px;
							z-index: 2;
						}
					`;
            break;
          default:
            ribbonCSS = "";
        }
      }
      return `
			/* Pricing Table Block - ${id} */
			.${id} {
				${marginCSS}
				width: 100%;
				position: relative;
			}
			
			/* Grid container for tables */
			.${id} .digiblocks-pricing-tables-container {
				display: grid;
				gap: 30px;
				grid-template-columns: repeat(${columns}, 1fr);
			}
			
			/* Individual pricing table */
			.${id} .digiblocks-pricing-table {
				display: flex;
				flex-direction: column;
				background-color: ${tableBackgroundColor || "#ffffff"};
				color: ${tableTextColor || "#333333"};
				${borderCSS}
				${boxShadowCSS}
				${paddingCSS}
				position: relative;
				transition: all 0.3s ease;
			}
			
			/* Highlighted table */
			.${id} .digiblocks-pricing-table-highlighted {
				z-index: 1;
			}
			
			/* Hover effect */
			.${id} .digiblocks-pricing-table:hover {
				${boxShadowHover && boxShadowHover.enable ? boxShadowHoverCSS : ""}
			}
			
			/* Header section */
			.${id} .digiblocks-pricing-table-header {
				background-color: ${headerBackgroundColor || "transparent"};
				text-align: center;
			}
			
			/* Icon */
			.${id} .digiblocks-pricing-table-icon {
				display: inline-flex;
				justify-content: center;
			}

			.${id} .digiblocks-pricing-table-icon span {
				display: flex;
			}
			
			.${id} .digiblocks-pricing-table-icon svg {
				width: 50px;
				height: 50px;
			}
			
			${tables.map((table, index) => `
				/* Custom colors for table ${index + 1} */
				.${id} .digiblocks-pricing-table:nth-child(${index + 1}) .digiblocks-pricing-table-icon svg {
					fill: ${table.iconColor || tableTextColor || "#333333"};
					transition: fill 0.3s ease;
				}
				
				.${id} .digiblocks-pricing-table:nth-child(${index + 1}):hover .digiblocks-pricing-table-icon svg {
					fill: ${table.iconHoverColor || table.iconColor || tableTextColor || "#333333"};
				}
			`).join("")}
			
			/* Title */
			.${id} .digiblocks-pricing-table-title {
				margin: 0;
				color: ${tableTextColor || "#333333"};
				${titleTypographyCSS}
			}
			
			/* Price section */
			.${id} .digiblocks-pricing-table-price {
				color: ${tableTextColor || "#333333"};
				${priceTypographyCSS}
			}
			
			.${id} .digiblocks-pricing-table-period {
				${textTypographyCSS}
				opacity: 0.8;
			}
			
			/* Description */
			.${id} .digiblocks-pricing-table-description {
				${textTypographyCSS}
			}
			
			/* Features section */
			.${id} .digiblocks-pricing-table-feature-wrapper {
				display: flex;
				align-items: center;
				justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "space-between"};
				gap: 10px;
			}

			.${id} .digiblocks-pricing-table-feature-item {
				display: flex;
				align-items: center;
				justify-content: ${align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"};
				gap: 10px;
				${contentTypographyCSS}
			}
			
			.${id} .digiblocks-pricing-table-feature-icon {
				display: inline-flex;
				align-items: center;
			}
			
			.${id} .digiblocks-pricing-table-feature-icon span {
				display: flex;
			}
			
			.${id} .digiblocks-pricing-table-feature-check {
				color: #28a745;
			}
			
			.${id} .digiblocks-pricing-table-feature-cross {
				color: #dc3545;
			}
			
			.${id} .digiblocks-pricing-table-feature-text {
				flex: 1;
			}
			
			.${id} .digiblocks-pricing-table-feature-disabled {
				opacity: 0.5;
				text-decoration: line-through;
			}
			
			/* Footer section */
			.${id} .digiblocks-pricing-table-footer {
				margin-top: auto;
				text-align: center;
			}
			
			/* Button */
			.${id} .digiblocks-pricing-table-button {
				background-color: ${buttonBackgroundColor || "#4a6cf7"};
				color: ${buttonTextColor || "#ffffff"};
				${buttonPaddingValue}
				border-radius: ${buttonRadiusValue}px;
				cursor: pointer;
				display: inline-block;
				text-decoration: none;
				transition: all 0.3s ease;
				${buttonBorderCSS}
				${buttonTypographyCSS}
			}
			
			.${id} .digiblocks-pricing-table-button:hover {
				background-color: ${buttonBackgroundHoverColor || "#3151e1"};
				color: ${buttonTextHoverColor || "#ffffff"};
				${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ""}
			}
			
			/* Ribbon */
			${ribbonCSS}
			
			/* Table-specific styles */
			${tableSpecificCSS}
			
			/* Editor controls */
			.${id} .digiblocks-pricing-table-controls {
				margin-top: 20px;
				margin-bottom: 20px;
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				justify-content: center;
			}
			
			.${id} .digiblocks-table-item-controls {
				position: absolute;
				top: 5px;
				left: 5px;
				display: flex;
				gap: 5px;
				z-index: 10;
				background: rgba(255, 255, 255, 0.9);
				border-radius: 4px;
				padding: 3px;
			}
			
			.${id} .digiblocks-feature-item-controls {
				display: flex;
				gap: 5px;
			}
			
			/* Responsive styles */
			@media (max-width: 991px) {
				.${id} .digiblocks-pricing-tables-container {
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				}
				
				.${id} .digiblocks-pricing-table-highlighted {
					transform: none !important;
				}
			}
			
			@media (max-width: 767px) {
				.${id} .digiblocks-pricing-tables-container {
					grid-template-columns: 1fr;
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
    const renderPricingTable = (table, index) => {
      return /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: table.id,
          className: `digiblocks-pricing-table ${activeTable === index ? "digiblocks-table-active" : ""} ${table.isHighlighted ? "digiblocks-pricing-table-highlighted" : ""}`,
          onClick: () => setActiveTable(index),
          style: table.backgroundColor ? { backgroundColor: table.backgroundColor } : null
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-table-item-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Left", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            icon: "arrow-left-alt2",
            isSmall: true,
            onClick: (e) => {
              e.stopPropagation();
              moveTableUp(index);
            },
            disabled: index === 0
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Right", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            icon: "arrow-right-alt2",
            isSmall: true,
            onClick: (e) => {
              e.stopPropagation();
              moveTableDown(index);
            },
            disabled: index === tables.length - 1
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            icon: "admin-page",
            isSmall: true,
            onClick: (e) => {
              e.stopPropagation();
              duplicateTable(index);
            }
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            icon: "trash",
            isSmall: true,
            onClick: (e) => {
              e.stopPropagation();
              removeTable(index);
            },
            disabled: tables.length <= 1
          }
        ))),
        showRibbon && table.isHighlighted && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-ribbon" }, /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "span",
            value: table.ribbonText,
            onChange: (value) => updateTableAttribute(index, "ribbonText", value),
            placeholder: __("Popular", "digiblocks")
          }
        )),
        /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            className: "digiblocks-pricing-table-header",
            style: table.headerBackgroundColor ? { backgroundColor: table.headerBackgroundColor } : null
          },
          table.iconValue && table.iconValue.svg && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-icon" }, /* @__PURE__ */ wp.element.createElement(
            "span",
            {
              dangerouslySetInnerHTML: {
                __html: table.iconValue.svg
              }
            }
          )),
          /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "h3",
              className: "digiblocks-pricing-table-title",
              value: table.title,
              onChange: (value) => updateTableAttribute(index, "title", value),
              placeholder: __("Plan Title", "digiblocks"),
              style: table.textColor ? { color: table.textColor } : null
            }
          ),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-price", style: table.textColor ? { color: table.textColor } : null }, /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "span",
              className: "digiblocks-pricing-table-amount",
              value: table.price,
              onChange: (value) => updateTableAttribute(index, "price", value),
              placeholder: __("$0", "digiblocks")
            }
          ), /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "span",
              className: "digiblocks-pricing-table-period",
              value: table.period,
              onChange: (value) => updateTableAttribute(index, "period", value),
              placeholder: __("/month", "digiblocks")
            }
          )),
          /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "div",
              className: "digiblocks-pricing-table-description",
              value: table.description,
              onChange: (value) => updateTableAttribute(index, "description", value),
              placeholder: __("Short description", "digiblocks"),
              style: table.textColor ? { color: table.textColor } : null
            }
          )
        ),
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-features" }, table.features.map((feature, featureIndex) => /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            key: `feature-${featureIndex}`,
            className: "digiblocks-pricing-table-feature-wrapper"
          },
          /* @__PURE__ */ wp.element.createElement(
            "div",
            {
              className: `digiblocks-pricing-table-feature-item ${!feature.enabled ? "digiblocks-pricing-table-feature-disabled" : ""}`
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-feature-icon" }, feature.enabled ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-pricing-table-feature-check" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "16", height: "16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-pricing-table-feature-cross" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "16", height: "16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" })))),
            /* @__PURE__ */ wp.element.createElement(
              RichText,
              {
                tagName: "div",
                className: "digiblocks-pricing-table-feature-text",
                value: feature.text,
                onChange: (value) => updateFeature(index, featureIndex, "text", value),
                placeholder: __("Feature", "digiblocks"),
                style: table.textColor ? { color: table.textColor } : null
              }
            )
          ),
          /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-feature-item-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: feature.enabled ? __("Disable", "digiblocks") : __("Enable", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: feature.enabled ? "visibility" : "hidden",
              isSmall: true,
              onClick: (e) => {
                e.stopPropagation();
                toggleFeatureEnabled(index, featureIndex);
              }
            }
          )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              icon: "trash",
              isSmall: true,
              onClick: (e) => {
                e.stopPropagation();
                removeFeature(index, featureIndex);
              },
              disabled: table.features.length <= 1
            }
          )))
        )), /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            variant: "secondary",
            isSmall: true,
            onClick: (e) => {
              e.stopPropagation();
              addFeature(index);
            },
            style: { width: "100%", marginTop: "10px" }
          },
          __("Add Feature", "digiblocks")
        )),
        table.buttonUrl && table.buttonUrl.trim() !== "" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-footer" }, /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            className: "digiblocks-pricing-table-button",
            style: table.buttonBackgroundColor ? {
              backgroundColor: table.buttonBackgroundColor,
              color: table.buttonTextColor || buttonTextColor || "#ffffff"
            } : null
          },
          /* @__PURE__ */ wp.element.createElement(
            RichText,
            {
              tagName: "span",
              value: table.buttonText,
              onChange: (value) => updateTableAttribute(index, "buttonText", value),
              placeholder: __("Get Started", "digiblocks")
            }
          )
        ))
      );
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "layout",
              title: __("Layout", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Columns", "digiblocks"),
                value: columns,
                onChange: (value) => setAttributes({ columns: value }),
                min: 1,
                max: 4,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Table Style", "digiblocks"),
                value: tableStyle,
                options: tableStyleOptions,
                onChange: (value) => applyTableStyle(value),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Alignment", "digiblocks"),
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
                  label: __("Left", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "center",
                  label: __("Center", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "right",
                  label: __("Right", "digiblocks")
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "ribbon",
              title: __("Ribbon", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Ribbon", "digiblocks"),
                checked: showRibbon,
                onChange: (value) => setAttributes({ showRibbon: value }),
                help: __("Display a ribbon on highlighted tables.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            showRibbon && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Ribbon Style", "digiblocks"),
                value: ribbonStyle,
                options: ribbonStyleOptions,
                onChange: (value) => setAttributes({ ribbonStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Ribbon Position", "digiblocks"),
                value: ribbonPosition,
                options: ribbonPositionOptions,
                onChange: (value) => setAttributes({ ribbonPosition: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
                  "Ribbon Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: ribbonBackgroundColor,
                    onChange: (value) => setAttributes({
                      ribbonBackgroundColor: value
                    }),
                    label: __(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: ribbonTextColor,
                    onChange: (value) => setAttributes({
                      ribbonTextColor: value
                    }),
                    label: __(
                      "Text Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "table-config",
              title: __("Table Settings", "digiblocks"),
              initialOpen: false
            },
            tables[activeTable] && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("h3", null, __("Editing Table", "digiblocks"), " #", activeTable + 1), /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Highlight This Table", "digiblocks"),
                checked: tables[activeTable].isHighlighted,
                onChange: (value) => updateTableAttribute(activeTable, "isHighlighted", value),
                help: __("Apply special styling to highlight this table.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ), !componentsLoaded ? /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", padding: "20px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-spinner" }), /* @__PURE__ */ wp.element.createElement("p", null, __("Loading icon selector...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
              FontAwesomeControl2,
              {
                label: __("Select Icon", "digiblocks"),
                value: tables[activeTable].iconValue,
                onChange: (value) => updateTableAttribute(activeTable, "iconValue", value)
              }
            ), tables[activeTable] && tables[activeTable].iconValue && /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __(
                  "Icon Colors",
                  "digiblocks"
                ),
                initialOpen: false,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: tables[activeTable].iconColor,
                    onChange: (value) => updateTableAttribute(activeTable, "iconColor", value),
                    label: __(
                      "Icon Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: tables[activeTable].iconHoverColor,
                    onChange: (value) => updateTableAttribute(activeTable, "iconHoverColor", value),
                    label: __(
                      "Icon Hover Color",
                      "digiblocks"
                    )
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "15px", marginBottom: "10px" } }, /* @__PURE__ */ wp.element.createElement("p", null, /* @__PURE__ */ wp.element.createElement("strong", null, __("Button Link", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(
              LinkControl,
              {
                value: tables[activeTable].buttonUrl ? {
                  url: tables[activeTable].buttonUrl,
                  opensInNewTab: !!tables[activeTable].buttonOpenInNewTab,
                  rel: tables[activeTable].buttonRel || ""
                } : void 0,
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
                  if (newLink && newLink.url) {
                    const newTables = [...tables];
                    newTables[activeTable] = {
                      ...newTables[activeTable],
                      buttonUrl: newLink.url,
                      buttonOpenInNewTab: !!newLink.opensInNewTab,
                      buttonRel: newLink.rel || ""
                    };
                    setAttributes({ tables: newTables });
                  }
                },
                onRemove: () => {
                  const newTables = [...tables];
                  newTables[activeTable] = {
                    ...newTables[activeTable],
                    buttonUrl: "",
                    buttonOpenInNewTab: false,
                    buttonRel: ""
                  };
                  setAttributes({ tables: newTables });
                },
                suggestionsQuery: {
                  type: "post",
                  subtype: "any"
                },
                forceIsEditingLink: !tables[activeTable].buttonUrl
              }
            )))
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
              PanelColorSettings,
              {
                title: __(
                  "Table Colors",
                  "digiblocks"
                ),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: tableBackgroundColor,
                    onChange: (value) => setAttributes({
                      tableBackgroundColor: value
                    }),
                    label: __(
                      "Background Color",
                      "digiblocks"
                    )
                  },
                  {
                    value: headerBackgroundColor,
                    onChange: (value) => setAttributes({
                      headerBackgroundColor: value
                    }),
                    label: __(
                      "Header Background",
                      "digiblocks"
                    )
                  },
                  {
                    value: tableTextColor,
                    onChange: (value) => setAttributes({
                      tableTextColor: value
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
              PanelColorSettings,
              {
                title: __(
                  "Button Colors",
                  "digiblocks"
                ),
                initialOpen: false,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: buttonBackgroundColor,
                    onChange: (value) => setAttributes({
                      buttonBackgroundColor: value
                    }),
                    label: __(
                      "Background Color",
                      "digiblocks"
                    )
                  },
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
                    value: buttonBackgroundHoverColor,
                    onChange: (value) => setAttributes({
                      buttonBackgroundHoverColor: value
                    }),
                    label: __(
                      "Hover Background",
                      "digiblocks"
                    )
                  },
                  {
                    value: buttonTextHoverColor,
                    onChange: (value) => setAttributes({
                      buttonTextHoverColor: value
                    }),
                    label: __(
                      "Hover Text",
                      "digiblocks"
                    )
                  }
                ]
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
                label: __(
                  "Title Typography",
                  "digiblocks"
                ),
                value: titleTypography,
                onChange: (value) => setAttributes({
                  titleTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 24, tablet: 20, mobile: 18 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Price Typography",
                  "digiblocks"
                ),
                value: headingTypography,
                onChange: (value) => setAttributes({
                  headingTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 36, tablet: 30, mobile: 26 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Description Typography",
                  "digiblocks"
                ),
                value: textTypography,
                onChange: (value) => setAttributes({
                  textTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __(
                  "Features Typography",
                  "digiblocks"
                ),
                value: contentTypography,
                onChange: (value) => setAttributes({
                  contentTypography: value
                }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
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
              name: "borders",
              title: __("Borders & Shadow", "digiblocks"),
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
              PanelColorSettings,
              {
                title: __("Border Color", "digiblocks"),
                initialOpen: true,
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
              name: "button-style",
              title: __("Button Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Border Radius", "digiblocks"),
                value: buttonRadius,
                onChange: (value) => setAttributes({ buttonRadius: value }),
                min: 0,
                max: 50,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: buttonBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ buttonBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            buttonBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: buttonBorderWidth && buttonBorderWidth[localActiveDevice] ? buttonBorderWidth[localActiveDevice] : {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    buttonBorderWidth: {
                      ...buttonBorderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Border Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: buttonBorderColor,
                    onChange: (value) => setAttributes({ buttonBorderColor: value }),
                    label: __("Border Color", "digiblocks")
                  },
                  {
                    value: buttonBorderHoverColor,
                    onChange: (value) => setAttributes({ buttonBorderHoverColor: value }),
                    label: __("Border Hover Color", "digiblocks")
                  }
                ]
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Button Padding", "digiblocks")
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
                      ...buttonPadding,
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
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
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
      className: `digiblocks-pricing-table-block ${id} ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-tables-container" }, tables.map((table, index) => renderPricingTable(table, index))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-controls" }, /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        variant: "primary",
        icon: "plus",
        onClick: addTable
      },
      __("Add Pricing Table", "digiblocks")
    ))));
  };
  var edit_default = PricingTableEdit;

  // blocks/pricing-table/save.js
  var { __: __2 } = window.wp.i18n;
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var PricingTableSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      tables,
      columns,
      tableStyle,
      align,
      animation,
      showRibbon,
      ribbonStyle,
      ribbonPosition
    } = attributes;
    const blockClasses = [
      "digiblocks-pricing-table-block",
      id,
      `align-${align}`,
      animation !== "none" ? `animate-${animation}` : "",
      tableStyle ? `style-${tableStyle}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ wp.element.createElement("div", { className: blockClasses, id: anchor || null }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-tables-container" }, tables.map((table) => /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        key: table.id,
        className: `digiblocks-pricing-table ${table.isHighlighted ? "digiblocks-pricing-table-highlighted" : ""}`,
        style: table.backgroundColor ? { backgroundColor: table.backgroundColor } : null
      },
      showRibbon && table.isHighlighted && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-ribbon" }, /* @__PURE__ */ wp.element.createElement(RichText2.Content, { value: table.ribbonText })),
      /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          className: "digiblocks-pricing-table-header",
          style: table.headerBackgroundColor ? { backgroundColor: table.headerBackgroundColor } : null
        },
        table.iconValue && table.iconValue.svg && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-icon" }, /* @__PURE__ */ wp.element.createElement(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: table.iconValue.svg
            }
          }
        )),
        /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "h3",
            className: "digiblocks-pricing-table-title",
            value: table.title,
            style: table.textColor ? { color: table.textColor } : null
          }
        ),
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-price", style: table.textColor ? { color: table.textColor } : null }, /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "span",
            className: "digiblocks-pricing-table-amount",
            value: table.price
          }
        ), /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "span",
            className: "digiblocks-pricing-table-period",
            value: table.period
          }
        )),
        /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "div",
            className: "digiblocks-pricing-table-description",
            value: table.description,
            style: table.textColor ? { color: table.textColor } : null
          }
        )
      ),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-features" }, table.features.map((feature, featureIndex) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: `feature-${featureIndex}`,
          className: `digiblocks-pricing-table-feature-item ${!feature.enabled ? "digiblocks-pricing-table-feature-disabled" : ""}`
        },
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-feature-icon" }, feature.enabled ? /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-pricing-table-feature-check" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "16", height: "16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))) : /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-pricing-table-feature-cross" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "16", height: "16", fill: "currentColor" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" })))),
        /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "div",
            className: "digiblocks-pricing-table-feature-text",
            value: feature.text,
            style: table.textColor ? { color: table.textColor } : null
          }
        )
      ))),
      table.buttonUrl && table.buttonUrl.trim() !== "" && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-pricing-table-footer" }, /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          href: table.buttonUrl || "#",
          className: "digiblocks-pricing-table-button",
          style: table.buttonBackgroundColor ? {
            backgroundColor: table.buttonBackgroundColor,
            color: table.buttonTextColor || "#ffffff"
          } : null,
          target: table.buttonOpenInNewTab ? "_blank" : void 0,
          rel: table.buttonOpenInNewTab ? `noopener noreferrer ${table.buttonRel || ""}`.trim() : table.buttonRel || void 0
        },
        /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "span",
            value: table.buttonText
          }
        )
      ))
    ))));
  };
  var save_default = PricingTableSave;

  // blocks/pricing-table/index.js
  var { __: __3 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/pricing-table", {
    apiVersion: 2,
    title: digiBlocksData.blocks["pricing-table"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["pricing-table"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["pricing-table"].description,
    keywords: [__3("pricing", "digiblocks"), __3("price", "digiblocks"), __3("table", "digiblocks"), __3("plan", "digiblocks"), __3("subscription", "digiblocks")],
    // Disable all default controls and settings panels
    supports: {
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string"
      },
      anchor: {
        type: "string"
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
        type: "string"
      },
      tables: {
        type: "array",
        default: []
      },
      columns: {
        type: "number",
        default: 2
      },
      tableStyle: {
        type: "string",
        default: "style1"
      },
      align: {
        type: "string",
        default: "center"
      },
      animation: {
        type: "string",
        default: "none"
      },
      titleTypography: {
        type: "object",
        default: {}
      },
      headingTypography: {
        type: "object",
        default: {}
      },
      textTypography: {
        type: "object",
        default: {}
      },
      contentTypography: {
        type: "object",
        default: {}
      },
      buttonTypography: {
        type: "object",
        default: {}
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
          desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: "px" },
          tablet: { top: 0, right: 0, bottom: 20, left: 0, unit: "px" },
          mobile: { top: 0, right: 0, bottom: 15, left: 0, unit: "px" }
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
      borderStyle: {
        type: "string",
        default: "solid"
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
        default: "#e6e6e6"
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
          color: "rgba(0, 0, 0, 0.15)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      buttonRadius: {
        type: "number",
        default: 4
      },
      buttonPadding: {
        type: "object",
        default: {
          desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: "px" },
          tablet: { top: 8, right: 16, bottom: 8, left: 16, unit: "px" },
          mobile: { top: 6, right: 12, bottom: 6, left: 12, unit: "px" }
        }
      },
      buttonBorderStyle: {
        type: "string",
        default: "none"
      },
      buttonBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
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
      showRibbon: {
        type: "boolean",
        default: true
      },
      ribbonStyle: {
        type: "string",
        default: "corner"
      },
      ribbonPosition: {
        type: "string",
        default: "right"
      },
      tableTextColor: {
        type: "string",
        default: "#333333"
      },
      tableBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      headerBackgroundColor: {
        type: "string",
        default: "#f8f9fa"
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
        default: "#ffffff"
      },
      buttonBackgroundHoverColor: {
        type: "string",
        default: "#3151e1"
      },
      ribbonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      ribbonBackgroundColor: {
        type: "string",
        default: "#4a6cf7"
      }
    },
    example: {
      attributes: {
        tables: [
          {
            id: "table-1-example",
            title: "Basic Plan",
            price: "$19",
            period: "/month",
            description: "Great for starters",
            features: [
              { text: "1 Website", enabled: true },
              { text: "5GB Storage", enabled: true },
              { text: "Premium Support", enabled: false }
            ],
            buttonText: "Get Started",
            isHighlighted: false,
            ribbonText: "Popular"
          }
        ],
        columns: 1,
        tableStyle: "style1",
        showRibbon: true
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
