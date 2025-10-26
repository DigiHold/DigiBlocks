(() => {
  // blocks/row/edit.js
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
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useSelect } = window.wp.data;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl, ResponsiveButtonGroup, GradientControl, TransformControl } = digi.components;
  var RowEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      contentWidth,
      contentMaxWidth,
      horizontalAlign,
      verticalAlign,
      heightType,
      minHeight,
      nestedWidth,
      gap,
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
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const { isNested, hasChildBlocks } = useSelect(
      (select) => {
        const { getBlockParentsByBlockName, getBlockCount } = select("core/block-editor");
        return {
          isNested: getBlockParentsByBlockName(clientId, "digiblocks/row").length > 0,
          hasChildBlocks: getBlockCount(clientId) > 0
        };
      },
      [clientId]
    );
    useEffect(() => {
      setAttributes({ isNested });
    }, [isNested, setAttributes]);
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
    const getGapValue = (gapObj, device) => {
      if (gapObj[device] && gapObj[device].value !== "") {
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
        if (gapObj.tablet && gapObj.tablet.value !== "") {
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
      const getRowPadding = (padding2, device) => {
        const hasDeviceValues = (dev) => {
          return padding2 && padding2[dev] && (padding2[dev].top !== void 0 && padding2[dev].top !== "" || padding2[dev].right !== void 0 && padding2[dev].right !== "" || padding2[dev].bottom !== void 0 && padding2[dev].bottom !== "" || padding2[dev].left !== void 0 && padding2[dev].left !== "");
        };
        let values;
        if (hasDeviceValues(device)) {
          values = padding2[device];
        } else if (device === "tablet" && hasDeviceValues("desktop")) {
          values = padding2["desktop"];
        } else if (device === "mobile") {
          if (hasDeviceValues("tablet")) {
            values = padding2["tablet"];
          } else if (hasDeviceValues("desktop")) {
            values = padding2["desktop"];
          } else {
            return "";
          }
        } else {
          return "";
        }
        const ensureMinPadding = (value, unit2) => {
          if (value === void 0 || value === "") {
            return "0" + unit2;
          }
          if (unit2 === "px" && parseFloat(value) < 10) {
            return "10px";
          }
          return value + unit2;
        };
        const unit = values.unit || "px";
        const top = ensureMinPadding(values.top, unit);
        const right = ensureMinPadding(values.right, unit);
        const bottom = ensureMinPadding(values.bottom, unit);
        const left = ensureMinPadding(values.left, unit);
        return `padding: ${top} ${right} ${bottom} ${left} !important;`;
      };
      const paddingCSS = getRowPadding(padding, activeDevice);
      const tabletPaddingCSS = getRowPadding(padding, "tablet");
      const mobilePaddingCSS = getRowPadding(padding, "mobile");
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
      if (!isNested) {
        if (heightType[activeDevice] === "full") {
          heightCSS = "height: 100vh;";
        } else if (heightType[activeDevice] === "custom") {
          heightCSS = `min-height: ${minHeight[activeDevice]}px !important;`;
        }
      }
      let contentWidthCSS = "";
      if (!isNested) {
        const widthValue = contentWidth[activeDevice] !== void 0 && contentWidth[activeDevice] !== "" ? contentWidth[activeDevice] : contentWidth.desktop;
        contentWidthCSS = `width: ${widthValue}px;
            margin-left: auto;
            margin-right: auto;`;
      }
      let contentMaxWidthCSS = "";
      if (!isNested) {
        const maxWidthValue = contentMaxWidth[activeDevice] !== void 0 && contentMaxWidth[activeDevice] !== "" ? contentMaxWidth[activeDevice] : contentMaxWidth.desktop;
        contentMaxWidthCSS = `max-width: ${maxWidthValue}%;`;
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
            /* Row Block - ${id} */
            .${id} {
                position: relative;
                ${paddingCSS}
                ${getDimensionCSS(margin, "margin", activeDevice)}
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

            .${id} > .digiblocks-row-inner {
                display: flex;
                align-items: ${verticalAlign[activeDevice]};
                justify-content: ${horizontalAlign[activeDevice]};
                gap: ${getGapValue(gap, activeDevice).value}${getGapValue(gap, activeDevice).unit};
                ${!isNested ? contentWidthCSS : ""}
                ${!isNested ? contentMaxWidthCSS : ""}
            }

            .${id}.is-nested > .block-editor-block-list__layout {
				display: flex;
				align-items: ${verticalAlign[activeDevice]};
				justify-content: ${horizontalAlign[activeDevice]};
				gap: ${getGapValue(gap, activeDevice).value}${getGapValue(gap, activeDevice).unit};
				width: ${nestedWidth[activeDevice] === "full" ? "100%" : "auto"};
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
                    ${tabletPaddingCSS}
                    ${getDimensionCSS(margin, "margin", "tablet")}
                    ${!isNested && heightType["tablet"] === "custom" ? `min-height: ${minHeight["tablet"]}px;` : ""}
                    ${getDimensionCSS(borderRadius, "border-radius", "tablet")}
                    ${borderStyle !== "none" ? `${getDimensionCSS(borderWidth, "border-width", "tablet", true)}` : ""}
                }

                .${id} > .digiblocks-row-inner {
                    ${!isNested ? `
                        width: ${contentWidth.tablet !== void 0 && contentWidth.tablet !== "" ? contentWidth.tablet : contentWidth.desktop}px;
                        max-width: ${contentMaxWidth.tablet !== void 0 && contentMaxWidth.tablet !== "" ? contentMaxWidth.tablet : contentMaxWidth.desktop}%;
                    ` : ""}
                    align-items: ${verticalAlign["tablet"]};
                    justify-content: ${horizontalAlign["tablet"]};
                    gap: ${getGapValue(gap, "tablet").value}${getGapValue(gap, "tablet").unit};
                }

                .${id}.is-nested > .block-editor-block-list__layout {
					align-items: ${verticalAlign["tablet"]};
					justify-content: ${horizontalAlign["tablet"]};
					gap: ${getGapValue(gap, "tablet").value}${getGapValue(gap, "tablet").unit};
					width: ${nestedWidth["tablet"] === "full" ? "100%" : "auto"};
				}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    ${mobilePaddingCSS}
                    ${getDimensionCSS(margin, "margin", "mobile")}
                    ${!isNested && heightType["mobile"] === "custom" ? `min-height: ${minHeight["mobile"]}px;` : ""}
                    ${getDimensionCSS(borderRadius, "border-radius", "mobile")}
                    ${borderStyle !== "none" ? `${getDimensionCSS(borderWidth, "border-width", "mobile", true)}` : ""}
                }

                .${id} > .digiblocks-row-inner {
                    ${!isNested ? `
                        width: ${contentWidth.mobile !== void 0 && contentWidth.mobile !== "" ? contentWidth.mobile : contentWidth.tablet !== void 0 && contentWidth.tablet !== "" ? contentWidth.tablet : contentWidth.desktop}px;
                        max-width: ${contentMaxWidth.mobile !== void 0 && contentMaxWidth.mobile !== "" ? contentMaxWidth.mobile : contentMaxWidth.tablet !== void 0 && contentMaxWidth.tablet !== "" ? contentMaxWidth.tablet : contentMaxWidth.desktop}%;
                    ` : ""}
                    align-items: ${verticalAlign["mobile"]};
                    justify-content: ${horizontalAlign["mobile"]};
                    gap: ${getGapValue(gap, "mobile").value}${getGapValue(gap, "mobile").unit};
                }

                .${id}.is-nested > .block-editor-block-list__layout {
					align-items: ${verticalAlign["mobile"]};
					justify-content: ${horizontalAlign["mobile"]};
					gap: ${getGapValue(gap, "mobile").value}${getGapValue(gap, "mobile").unit};
					width: ${nestedWidth["mobile"] === "full" ? "100%" : "auto"};
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
      className: `digiblocks-row ${id} ${customClasses || ""} ${isNested ? "is-nested" : ""}`,
      id: anchor || null
    });
    const innerBlocksProps = useInnerBlocksProps(
      isNested ? {} : { className: "digiblocks-row-inner" },
      {
        templateLock: false,
        orientation: "horizontal",
        renderAppender: hasChildBlocks ? window.wp.blockEditor.InnerBlocks.DefaultBlockAppender : window.wp.blockEditor.InnerBlocks.ButtonBlockAppender
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
              title: __("Row Layout", "digiblocks"),
              initialOpen: true
            },
            !isNested && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Content Width (px)", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: contentWidth[localActiveDevice] !== "" ? contentWidth[localActiveDevice] : localActiveDevice === "desktop" ? digiBlocksData.contentWidth || 1200 : contentWidth.desktop || digiBlocksData.contentWidth || 1200,
                  onChange: (value) => setAttributes({
                    contentWidth: {
                      ...contentWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 300,
                  max: 2e3,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Content Max Width (%)", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: contentMaxWidth[localActiveDevice] !== "" ? contentMaxWidth[localActiveDevice] : localActiveDevice === "desktop" ? digiBlocksData.contentMaxWidth || 90 : contentMaxWidth.desktop || digiBlocksData.contentMaxWidth || 90,
                  onChange: (value) => setAttributes({
                    contentMaxWidth: {
                      ...contentMaxWidth,
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
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Gap", "digiblocks"),
                value: gap,
                onChange: (value) => setAttributes({ gap: value }),
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
            ), /* @__PURE__ */ wp.element.createElement(
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
            ), heightType[localActiveDevice] === "custom" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Min Height", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: minHeight[localActiveDevice],
                  onChange: (value) => setAttributes({
                    minHeight: {
                      ...minHeight,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 1e3,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )),
            isNested && /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Width", "digiblocks"),
                value: nestedWidth,
                onChange: (value) => setAttributes({ nestedWidth: value }),
                options: [
                  { label: __("Auto", "digiblocks"), value: "auto" },
                  { label: __("Full", "digiblocks"), value: "full" }
                ]
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
                  { label: __("Bottom", "digiblocks"), value: "flex-end" }
                ]
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
                help: __("Hide content that overflows the row boundaries.", "digiblocks"),
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, backgroundVideo?.url && /* @__PURE__ */ wp.element.createElement(BackgroundVideo, null), /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps })));
  };
  var edit_default = RowEdit;

  // blocks/row/save.js
  var { __: __2 } = window.wp.i18n;
  var { useBlockProps: useBlockProps2, useInnerBlocksProps: useInnerBlocksProps2 } = window.wp.blockEditor;
  var RowSave = ({ attributes }) => {
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
    const classNames = `digiblocks-row ${id} ${customClasses || ""} ${isNested ? "is-nested" : ""}${animation !== "none" ? ` animate-${animation} digi-animate-hidden` : ""}`;
    let blockProps, innerBlocksProps;
    if (isNested) {
      blockProps = useBlockProps2.save({
        className: classNames,
        id: anchor || null
      });
      innerBlocksProps = useInnerBlocksProps2.save();
    } else {
      blockProps = useBlockProps2.save({
        className: classNames,
        id: anchor || null
      });
      innerBlocksProps = useInnerBlocksProps2.save({
        className: "digiblocks-row-inner"
      });
    }
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    const BackgroundVideo = () => {
      if (!backgroundVideo?.url)
        return null;
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-bg-video-container" }, /* @__PURE__ */ wp.element.createElement("video", { className: "digiblocks-bg-video", autoPlay: true, muted: true, loop: true, playsInline: true, poster: backgroundVideoFallbackImage?.url || "" }, /* @__PURE__ */ wp.element.createElement("source", { src: backgroundVideo.url, type: "video/mp4" })));
    };
    return isNested ? /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, backgroundVideo && backgroundVideo.url && /* @__PURE__ */ wp.element.createElement(BackgroundVideo, null), innerBlocksProps.children) : /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, backgroundVideo && backgroundVideo.url && /* @__PURE__ */ wp.element.createElement(BackgroundVideo, null), /* @__PURE__ */ wp.element.createElement("div", { ...innerBlocksProps }));
  };
  var save_default = RowSave;

  // blocks/row/index.js
  var { __: __3 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/row", {
    apiVersion: 2,
    title: digiBlocksData.blocks["row"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["row"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["row"].description,
    keywords: [__3("row", "digiblocks"), __3("flex", "digiblocks"), __3("horizontal", "digiblocks"), __3("layout", "digiblocks")],
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
      anchor: {
        type: "string",
        default: ""
      },
      customClasses: {
        type: "string",
        default: ""
      },
      contentWidth: {
        type: "object",
        default: {
          desktop: parseInt(digiBlocksData.contentWidth) || 1200,
          tablet: "",
          mobile: ""
        }
      },
      contentMaxWidth: {
        type: "object",
        default: {
          desktop: parseInt(digiBlocksData.contentMaxWidth) || 90,
          tablet: "",
          mobile: ""
        }
      },
      heightType: {
        type: "object",
        default: {
          desktop: "auto",
          tablet: "auto",
          mobile: "auto"
        }
      },
      nestedWidth: {
        type: "object",
        default: {
          desktop: "auto",
          tablet: "auto",
          mobile: "auto"
        }
      },
      horizontalAlign: {
        type: "object",
        default: {
          desktop: "flex-start",
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
      minHeight: {
        type: "object",
        default: {
          desktop: 0,
          tablet: 0,
          mobile: 0
        }
      },
      gap: {
        type: "object",
        default: {
          desktop: { value: 20, unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
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
        backgroundColor: "#f8f9fa",
        padding: {
          desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      innerBlocks: [
        {
          name: "digiblocks/text",
          attributes: {
            content: __3("Row content goes here...", "digiblocks")
          }
        }
      ],
      viewportWidth: 500
    },
    edit: edit_default,
    save: save_default
  });
})();
