(() => {
  // blocks/column/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck,
    ButtonBlockAppender
  } = window.wp.blockEditor;
  var {
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useSelect, useDispatch } = window.wp.data;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveRangeControl, ResponsiveButtonGroup, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, GradientControl, TransformControl } = digi.components;
  var ColumnEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      visibility,
      animation,
      animationDuration,
      animationDelay,
      width,
      order,
      alignSelf,
      columnGap,
      rowGap,
      hoverEffect,
      backgroundColor,
      backgroundGradient,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      backgroundSize,
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
      position,
      horizontalOrientation,
      horizontalOffset,
      verticalOrientation,
      verticalOffset,
      zIndex,
      transform,
      transformHover
    } = attributes;
    useEffect(() => {
      if (width && typeof width.desktop === "number") {
        setAttributes({
          width: {
            desktop: { value: width.desktop, unit: "%" },
            tablet: { value: typeof width.tablet === "number" ? width.tablet : "", unit: typeof width.tablet === "number" ? "%" : "" },
            mobile: { value: typeof width.mobile === "number" ? width.mobile : "", unit: typeof width.mobile === "number" ? "%" : "" }
          }
        });
      }
    }, []);
    useBlockId(id, clientId, setAttributes);
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
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
    const { parentClientId, hasChildBlocks } = useSelect(
      (select) => {
        const { getBlockParents, getBlockCount } = select("core/block-editor");
        const parents = getBlockParents(clientId);
        const parentId = parents.length > 0 ? parents[0] : null;
        return {
          parentClientId: parentId,
          hasChildBlocks: getBlockCount(clientId) > 0
        };
      },
      [clientId]
    );
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
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
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
    const hoverEffectOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Lift", "digiblocks"), value: "lift" },
      { label: __("Scale", "digiblocks"), value: "scale" },
      { label: __("Glow", "digiblocks"), value: "glow" }
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
    const generateColumnCSS = () => {
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
            .${id} {
                position: relative !important;
            }
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
      let hoverCSS = "";
      let boxShadowHoverCSS = "";
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
            /* Column Block - ${id} */
            .${id} {
                width: ${width[activeDevice]?.value !== "" && width[activeDevice]?.value !== void 0 ? width[activeDevice].value + width[activeDevice].unit : width.desktop.value + width.desktop.unit};
				${getDimensionCSS(padding, "padding", activeDevice)}
				${getDimensionCSS(margin, "margin", activeDevice)}
                display: flex;
                flex-direction: column;
                ${getVal(alignSelf, activeDevice) ? `align-self: ${getVal(alignSelf, activeDevice)};` : ""}
                ${order[activeDevice] !== 0 ? `order: ${order[activeDevice]};` : ""}
                ${backgroundStyles}
                ${borderStyle !== "none" ? `
					border-style: ${borderStyle}!important;
					${getDimensionCSS(borderWidth, "border-width", activeDevice, true)}
					border-color: ${borderColor}!important;` : ""}
                ${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
				${boxShadowCSS}
                transition: all 0.3s ease;
                ${positionCSS}
				${transformCSS}
				gap: ${getGapValue(rowGap, "desktop").value}${getGapValue(rowGap, "desktop").unit} ${getGapValue(columnGap, "desktop").value}${getGapValue(columnGap, "desktop").unit};
            }
            
            /* Hover effects */
            .${id}:hover {
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            ${overlayCSS}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${id} {
                    width: ${width.tablet?.value !== "" ? width.tablet.value + width.tablet.unit : width.desktop.value + width.desktop.unit};
					${getDimensionCSS(padding, "padding", "tablet")}
					${getDimensionCSS(margin, "margin", "tablet")}
                    ${order["tablet"] !== 0 ? `order: ${order["tablet"]};` : ""}
					${getVal(alignSelf, "tablet") ? `align-self: ${getVal(alignSelf, "tablet")};` : ""}
					${getDimensionCSS(borderRadius, "border-radius", "tablet")}
                    ${borderStyle !== "none" ? `${getDimensionCSS(borderWidth, "border-width", "tablet", true)}` : ""}
					gap: ${getGapValue(rowGap, "tablet").value}${getGapValue(rowGap, "tablet").unit} ${getGapValue(columnGap, "tablet").value}${getGapValue(columnGap, "tablet").unit};
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    width: ${width.mobile?.value !== "" ? width.mobile.value + width.mobile.unit : width.tablet?.value !== "" ? width.tablet.value + width.tablet.unit : width.desktop.value + width.desktop.unit};
					${getDimensionCSS(padding, "padding", "mobile")}
					${getDimensionCSS(margin, "margin", "mobile")}
                    ${order["mobile"] !== 0 ? `order: ${order["mobile"]};` : ""}
					${getVal(alignSelf, "mobile") ? `align-self: ${getVal(alignSelf, "mobile")};` : ""}
					${getDimensionCSS(borderRadius, "border-radius", "mobile")}
                    ${borderStyle !== "none" ? `${getDimensionCSS(borderWidth, "border-width", "mobile", true)}` : ""}
					gap: ${getGapValue(rowGap, "mobile").value}${getGapValue(rowGap, "mobile").unit} ${getGapValue(columnGap, "mobile").value}${getGapValue(columnGap, "mobile").unit};
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
    const blockProps = useBlockProps({
      className: `digiblocks-column ${id}`
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
      templateLock: false,
      renderAppender: hasChildBlocks ? void 0 : () => /* @__PURE__ */ wp.element.createElement(ButtonBlockAppender, { rootClientId: clientId })
    });
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "column",
              title: __("Column", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Width", "digiblocks"),
                value: width,
                onChange: (value) => setAttributes({ width: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vw", value: "vw" }
                ],
                defaultUnit: "%",
                min: 0,
                max: getContentMaxValue(width[localActiveDevice]?.unit),
                step: getContentStepValue(width[localActiveDevice]?.unit)
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Order", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: order[localActiveDevice],
                  onChange: (value) => setAttributes({
                    order: {
                      ...order,
                      [localActiveDevice]: value
                    }
                  }),
                  min: -10,
                  max: 10,
                  step: 1,
                  allowReset: true,
                  resetFallbackValue: 0,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Align Self", "digiblocks"),
                value: alignSelf,
                onChange: (value) => setAttributes({ alignSelf: value }),
                options: [
                  { label: __("Top", "digiblocks"), value: "flex-start" },
                  { label: __("Middle", "digiblocks"), value: "center" },
                  { label: __("Bottom", "digiblocks"), value: "flex-end" }
                ]
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
              initialOpen: true
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
              tab: "layout",
              name: "effect",
              title: __("Hover Effect", "digiblocks"),
              initialOpen: false
            },
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
          ));
        default:
          return null;
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateColumnCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps }));
  };
  var edit_default = ColumnEdit;

  // blocks/column/save.js
  var { __: __2 } = window.wp.i18n;
  var { useBlockProps: useBlockProps2, useInnerBlocksProps: useInnerBlocksProps2 } = window.wp.blockEditor;
  var ColumnSave = ({ attributes }) => {
    const {
      id,
      backgroundOverlay,
      animation,
      animationDuration,
      animationDelay
    } = attributes;
    const classNames = `digiblocks-column ${id}${animation !== "none" ? ` animate-${animation} digi-animate-hidden` : ""}`;
    const blockProps = useBlockProps2.save({
      className: classNames
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    const innerBlocksProps = useInnerBlocksProps2.save(blockProps);
    return /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps });
  };
  var save_default = ColumnSave;

  // blocks/column/index.js
  var { __: __3 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/column", {
    apiVersion: 2,
    title: __3("Column", "digiblocks"),
    parent: ["digiblocks/container"],
    icon: {
      src: () => /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "24", height: "24" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M448 64l0 384 128 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l128 0zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" }))
    },
    description: __3("Flexible column component to use within Container blocks", "digiblocks"),
    supports: {
      inserter: false,
      // Can only be inserted within container block
      reusable: false,
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
      visibility: {
        type: "object",
        default: {
          desktop: false,
          tablet: false,
          mobile: false
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
      width: {
        type: "object",
        default: {
          desktop: { value: 100, unit: "%" },
          tablet: { value: "", unit: "" },
          mobile: { value: "", unit: "" }
        }
      },
      order: {
        type: "object",
        default: {
          desktop: 0,
          tablet: 0,
          mobile: 0
        }
      },
      alignSelf: {
        type: "object",
        default: {
          desktop: "",
          tablet: "",
          mobile: ""
        }
      },
      columnGap: {
        type: "object",
        default: {
          desktop: { value: "", unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      rowGap: {
        type: "object",
        default: {
          desktop: { value: "", unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      hoverEffect: {
        type: "string",
        default: "none"
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
    edit: edit_default,
    save: save_default
  });
})();
