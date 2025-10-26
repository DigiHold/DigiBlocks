(() => {
  // blocks/heading/edit.js
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
    TextControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl,
    TabPanel,
    BaseControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, ResponsiveButtonGroup, ResponsiveRangeControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;
  var HeadingEdit = ({ attributes, setAttributes, clientId, mergeBlocks, onReplace }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      content,
      headingTag,
      maxWidth,
      textColor,
      textHoverColor,
      backgroundColor,
      backgroundHoverColor,
      typography,
      align,
      padding,
      margin,
      animation,
      animationDuration,
      animationDelay,
      highlightText,
      highlightColor,
      highlightType,
      textEffect,
      displaySeparator,
      separatorColor,
      separatorSecondaryColor,
      separatorWidth,
      separatorHeight,
      separatorBorderRadius,
      separatorPosition,
      separatorStyle,
      separatorSpacing,
      linkEnabled,
      linkUrl,
      linkOpenInNewTab,
      linkRel,
      shadowEnabled,
      textShadow,
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
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const handleApplyHighlight = () => {
      if (!highlightText || highlightText.trim() === "" || !content) {
        return;
      }
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = content;
      const existingHighlights = tempDiv.querySelectorAll(".digiblocks-highlight");
      existingHighlights.forEach((highlight) => {
        const textNode = document.createTextNode(highlight.textContent);
        highlight.parentNode.replaceChild(textNode, highlight);
      });
      tempDiv.normalize();
      const walker = document.createTreeWalker(
        tempDiv,
        NodeFilter.SHOW_TEXT,
        null
      );
      const nodesToProcess = [];
      let currentNode;
      while (currentNode = walker.nextNode()) {
        if (currentNode.nodeValue && currentNode.nodeValue.includes(highlightText)) {
          nodesToProcess.push(currentNode);
        }
      }
      nodesToProcess.forEach((node) => {
        const text = node.nodeValue;
        const index = text.indexOf(highlightText);
        if (index === -1)
          return;
        const before = text.substring(0, index);
        const match = text.substring(index, index + highlightText.length);
        const after = text.substring(index + highlightText.length);
        const fragment = document.createDocumentFragment();
        if (before) {
          fragment.appendChild(document.createTextNode(before));
        }
        const span = document.createElement("span");
        span.className = "digiblocks-highlight";
        span.textContent = match;
        fragment.appendChild(span);
        if (after) {
          fragment.appendChild(document.createTextNode(after));
        }
        node.parentNode.replaceChild(fragment, node);
      });
      setAttributes({ content: tempDiv.innerHTML });
    };
    const headingTagOptions = [
      { label: __("H1", "digiblocks"), value: "h1" },
      { label: __("H2", "digiblocks"), value: "h2" },
      { label: __("H3", "digiblocks"), value: "h3" },
      { label: __("H4", "digiblocks"), value: "h4" },
      { label: __("H5", "digiblocks"), value: "h5" },
      { label: __("H6", "digiblocks"), value: "h6" }
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
    const getVal = (obj, device) => {
      if (!obj || typeof obj !== "object")
        return null;
      const isEmpty = (val) => {
        if (val === "" || val === void 0 || val === null)
          return true;
        if (typeof val === "object" && val !== null) {
          return val.value === "" || val.value === void 0 || val.value === null;
        }
        return false;
      };
      if (device === "mobile") {
        return !isEmpty(obj.mobile) ? obj.mobile : !isEmpty(obj.tablet) ? obj.tablet : obj.desktop;
      }
      if (device === "tablet") {
        return !isEmpty(obj.tablet) ? obj.tablet : obj.desktop;
      }
      return obj.desktop;
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
      let typographyCSS = "";
      if (typography) {
        if (typography.fontFamily) {
          typographyCSS += `font-family: ${typography.fontFamily};`;
        }
        if (typography.fontSize && typography.fontSize[activeDevice]) {
          typographyCSS += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || "px"};`;
        }
        if (typography.fontWeight) {
          typographyCSS += `font-weight: ${typography.fontWeight};`;
        }
        if (typography.fontStyle) {
          typographyCSS += `font-style: ${typography.fontStyle};`;
        }
        if (typography.textTransform) {
          typographyCSS += `text-transform: ${typography.textTransform};`;
        }
        if (typography.textDecoration) {
          typographyCSS += `text-decoration: ${typography.textDecoration};`;
        }
        if (typography.lineHeight && typography.lineHeight[activeDevice]) {
          typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || "em"};`;
        }
        if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
          typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || "px"};`;
        }
      }
      let textShadowCSS = "";
      if (shadowEnabled && textShadow) {
        textShadowCSS = `text-shadow: ${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color};`;
      }
      const paddingCSS = `${getDimensionCSS(padding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice, true)}`;
      let maxWidthCSS = "";
      const maxWidthValue = getVal(maxWidth, activeDevice);
      const alignValue = getVal(align, activeDevice);
      if (maxWidthValue && maxWidthValue.value) {
        maxWidthCSS = `max-width: ${maxWidthValue.value}${maxWidthValue.unit};`;
        if (alignValue === "center") {
          maxWidthCSS += "margin-left: auto;margin-right: auto;";
        } else if (alignValue === "right") {
          maxWidthCSS += "margin-left: auto;";
        }
      }
      let separatorCSS = "";
      if (displaySeparator && separatorColor) {
        const separatorWidthValue = separatorWidth[activeDevice] || 50;
        const separatorHeightValue = separatorHeight[activeDevice] || 3;
        const separatorSpacingValue = separatorSpacing[activeDevice] || 10;
        const position2 = separatorPosition === "top" ? "top: 0;" : "bottom: 0;";
        const alignment = align === "center" ? "left: 50%; transform: translateX(-50%);" : align === "right" ? "right: 0;" : "left: 0;";
        switch (separatorStyle) {
          case "line-solid":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "line-gradient":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background: linear-gradient(to right, ${separatorColor}, ${separatorSecondaryColor || "#ffffff"}, ${separatorColor});
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "line-double":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                        
                        .${id}::after {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorSecondaryColor || separatorColor};
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue + separatorHeightValue + 3}px;` : `margin-bottom: ${separatorSpacingValue + separatorHeightValue + 3}px;`}
                        }
                    `;
            break;
          case "line-dashed":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${separatorColor}, 
                                ${separatorColor} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "line-dotted":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${separatorColor}, 
                                ${separatorColor} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "wave":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue * 4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${separatorColor}, 
                                ${separatorColor} 5px, 
                                transparent 5px, 
                                transparent 15px
                            );
                            mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            -webkit-mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "dots":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue * 3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${separatorColor} 25%, 
                                transparent 25%
                            );
                            background-size: ${separatorHeightValue * 3}px ${separatorHeightValue * 3}px;
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "glow":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
                            box-shadow: 0 0 ${separatorHeightValue * 3}px ${separatorHeightValue}px ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          case "faded":
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background: linear-gradient(to right, transparent, ${separatorColor}, transparent);
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            break;
          default:
            separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position2}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, "border-radius", activeDevice)}
                            ${separatorPosition === "top" ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
        }
      }
      let highlightCSS = "";
      if (highlightText && highlightText.trim() !== "") {
        if (highlightType === "background") {
          highlightCSS = `
                    .${id} .digiblocks-highlight {
                        background-color: ${highlightColor};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `;
        } else if (highlightType === "color") {
          highlightCSS = `
                    .${id} .digiblocks-highlight {
                        color: ${highlightColor};
                    }
                `;
        } else if (highlightType === "underline") {
          highlightCSS = `
                    .${id} .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${highlightColor};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `;
        }
      }
      let effectCSS = "";
      if (textEffect && textEffect !== "none") {
        effectCSS = `
				.${id} {
					mix-blend-mode: ${textEffect};
				}
			`;
      }
      let linkCSS = "";
      if (linkEnabled) {
        linkCSS = `
                .${id} {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                .${id}:hover {
                    ${textHoverColor ? `color: ${textHoverColor};` : ""}
                    ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
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
            /* Main heading styles */
            .${id} {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${alignValue};
                ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                ${paddingCSS}
                ${marginCSS}
                ${positionCSS}
                transition: color 0.3s ease, background-color 0.3s ease;
                ${positionCSS}
				${transformCSS}
            }

            .${id} .digiblocks-heading-text {
                ${typographyCSS}
                margin: 0;
                ${maxWidthCSS}
                ${textShadowCSS}
                color: ${textColor || "inherit"};
				${transformHoverCSS}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
            }

            .${id}:hover .digiblocks-heading-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ""}
            }
            
            /* Separator styles */
            ${separatorCSS}
            
            /* Highlight styles */
            ${highlightCSS}
            
            /* Effect */
            ${effectCSS}
            
            /* Link styles */
            ${linkCSS}

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
    const SeparatorStylePreview = ({ style, color, secondaryColor, isSelected, onClick }) => {
      const previewStyles = {
        container: {
          display: "inline-block",
          width: "60px",
          height: "40px",
          margin: "5px",
          padding: "5px",
          border: `1px solid ${isSelected ? "#007cba" : "#ddd"}`,
          backgroundColor: isSelected ? "rgba(0,124,186,0.1)" : "white",
          borderRadius: "4px",
          cursor: "pointer",
          position: "relative"
        },
        preview: {
          position: "absolute",
          bottom: "5px",
          left: "5px",
          right: "5px",
          height: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      };
      let previewContent = null;
      switch (style) {
        case "line-solid":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: color, borderRadius: "1px" } });
          break;
        case "line-gradient":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", background: `linear-gradient(to right, ${color}, ${secondaryColor || "#ffffff"}, ${color})`, borderRadius: "1px" } });
          break;
        case "line-double":
          previewContent = /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "2px", backgroundColor: color, borderRadius: "1px", marginBottom: "2px" } }), /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "2px", backgroundColor: secondaryColor || color, borderRadius: "1px" } }));
          break;
        case "line-dashed":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 6px, transparent 6px, transparent 10px)`,
            borderRadius: "1px"
          } });
          break;
        case "line-dotted":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 2px, transparent 2px, transparent 4px)`,
            borderRadius: "1px"
          } });
          break;
        case "wave":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            backgroundImage: `repeating-linear-gradient(45deg, ${color}, ${color} 2px, transparent 2px, transparent 6px)`,
            borderRadius: "1px"
          } });
          break;
        case "dots":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "5px",
            display: "flex",
            justifyContent: "space-between"
          } }, [...Array(5)].map((_, i) => /* @__PURE__ */ wp.element.createElement("div", { key: i, style: {
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: color
          } })));
          break;
        case "glow":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "50%",
            height: "3px",
            backgroundColor: color,
            boxShadow: `0 0 5px 1px ${color}`,
            borderRadius: "1px"
          } });
          break;
        case "faded":
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: {
            width: "100%",
            height: "3px",
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
            borderRadius: "1px"
          } });
          break;
        default:
          previewContent = /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", height: "3px", backgroundColor: color, borderRadius: "1px" } });
      }
      return /* @__PURE__ */ wp.element.createElement("div", { style: previewStyles.container, onClick }, /* @__PURE__ */ wp.element.createElement("div", { style: { textAlign: "center", fontSize: "8px", marginBottom: "5px" } }, style.replace("line-", "").charAt(0).toUpperCase() + style.replace("line-", "").slice(1)), /* @__PURE__ */ wp.element.createElement("div", { style: previewStyles.preview }, previewContent));
    };
    const renderSeparatorStyleGrid = () => {
      const separatorStyleOptions = [
        { label: __("Solid Line", "digiblocks"), value: "line-solid" },
        { label: __("Gradient Line", "digiblocks"), value: "line-gradient" },
        { label: __("Double Line", "digiblocks"), value: "line-double" },
        { label: __("Dashed Line", "digiblocks"), value: "line-dashed" },
        { label: __("Dotted Line", "digiblocks"), value: "line-dotted" },
        { label: __("Wave", "digiblocks"), value: "wave" },
        { label: __("Dot Pattern", "digiblocks"), value: "dots" },
        { label: __("Glow", "digiblocks"), value: "glow" },
        { label: __("Faded Edges", "digiblocks"), value: "faded" }
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
          color: separatorColor,
          secondaryColor: separatorSecondaryColor,
          isSelected: separatorStyle === option.value,
          onClick: () => setAttributes({ separatorStyle: option.value })
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
              name: "heading-settings",
              title: __("Heading Settings", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Heading Tags", "digiblocks"),
                value: headingTag,
                options: headingTagOptions,
                onChange: (value) => setAttributes({ headingTag: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveButtonGroup,
              {
                label: __("Alignment", "digiblocks"),
                value: align,
                onChange: (value) => setAttributes({ align: value }),
                options: [
                  { label: __("Left", "digiblocks"), value: "left" },
                  { label: __("Center", "digiblocks"), value: "center" },
                  { label: __("Right", "digiblocks"), value: "right" }
                ]
              }
            ),
            !linkEnabled ? /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                className: "components-button width-full is-primary",
                onClick: () => setAttributes({ linkEnabled: true })
              },
              __("Add Link", "digiblocks")
            ))) : /* @__PURE__ */ wp.element.createElement(
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
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Max Width", "digiblocks"),
                value: maxWidth,
                onChange: (value) => setAttributes({ maxWidth: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getMaxValue(maxWidth?.[localActiveDevice]?.unit),
                step: getStepValue(maxWidth?.[localActiveDevice]?.unit)
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "separator",
              title: __("Separator", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Display Separator", "digiblocks"),
                checked: displaySeparator,
                onChange: (value) => setAttributes({ displaySeparator: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            displaySeparator && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                label: __("Separator Style", "digiblocks"),
                className: "digiblocks-separator-style-selector",
                __nextHasNoMarginBottom: true
              },
              renderSeparatorStyleGrid()
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Position", "digiblocks"),
                value: separatorPosition,
                onChange: (value) => setAttributes({ separatorPosition: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "bottom",
                  label: __("Bottom", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "top",
                  label: __("Top", "digiblocks")
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Separator Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: separatorColor,
                    onChange: (value) => setAttributes({ separatorColor: value }),
                    label: __("Primary Color", "digiblocks")
                  },
                  ...separatorStyle === "line-gradient" || separatorStyle === "line-double" ? [{
                    value: separatorSecondaryColor,
                    onChange: (value) => setAttributes({ separatorSecondaryColor: value }),
                    label: __("Secondary Color", "digiblocks")
                  }] : []
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: separatorWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    separatorWidth: {
                      ...separatorWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 10,
                  max: 300,
                  step: 1,
                  __nextHasNoMarginBottom: true,
                  __next40pxDefaultSize: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Height", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: separatorHeight[localActiveDevice],
                  onChange: (value) => setAttributes({
                    separatorHeight: {
                      ...separatorHeight,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 1,
                  max: 20,
                  step: 1,
                  __nextHasNoMarginBottom: true,
                  __next40pxDefaultSize: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: separatorSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    separatorSpacing: {
                      ...separatorSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 50,
                  step: 1,
                  __nextHasNoMarginBottom: true,
                  __next40pxDefaultSize: true
                }
              )
            ), ["line-solid", "line-gradient", "line-double", "line-dashed", "line-dotted", "glow", "faded"].includes(separatorStyle) && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: separatorBorderRadius && separatorBorderRadius[localActiveDevice] ? separatorBorderRadius[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    separatorBorderRadius: {
                      ...separatorBorderRadius,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "text-highlight",
              title: __("Text Highlight", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Text to Highlight", "digiblocks"),
                value: highlightText || "",
                onChange: (value) => setAttributes({ highlightText: value }),
                placeholder: __("Enter text to highlight", "digiblocks"),
                help: __("The text you enter here will be highlighted in your heading.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            highlightText && highlightText.trim() !== "" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px", marginBottom: "16px" } }, /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                onClick: handleApplyHighlight,
                style: { width: "100%" }
              },
              __("Apply Highlight", "digiblocks")
            )),
            highlightText && highlightText.trim() !== "" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Highlight Type", "digiblocks"),
                value: highlightType,
                options: [
                  { label: __("Background", "digiblocks"), value: "background" },
                  { label: __("Text", "digiblocks"), value: "color" },
                  { label: __("Underline", "digiblocks"), value: "underline" }
                ],
                onChange: (value) => setAttributes({ highlightType: value }),
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Highlight Color", "digiblocks"),
                initialOpen: true,
                colorSettings: [
                  {
                    value: highlightColor,
                    onChange: (value) => setAttributes({ highlightColor: value }),
                    label: __("Color", "digiblocks")
                  }
                ]
              }
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "effect",
              title: __("Text Effect", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Blend Mode", "digiblocks"),
                value: textEffect,
                options: [
                  { label: __("None", "digiblocks"), value: "none" },
                  { label: __("Difference", "digiblocks"), value: "difference" },
                  { label: __("Multiply", "digiblocks"), value: "multiply" },
                  { label: __("Screen", "digiblocks"), value: "screen" },
                  { label: __("Overlay", "digiblocks"), value: "overlay" },
                  { label: __("Darken", "digiblocks"), value: "darken" },
                  { label: __("Lighten", "digiblocks"), value: "lighten" },
                  { label: __("Color Dodge", "digiblocks"), value: "color-dodge" },
                  { label: __("Color Burn", "digiblocks"), value: "color-burn" },
                  { label: __("Hard Light", "digiblocks"), value: "hard-light" },
                  { label: __("Soft Light", "digiblocks"), value: "soft-light" },
                  { label: __("Exclusion", "digiblocks"), value: "exclusion" },
                  { label: __("Hue", "digiblocks"), value: "hue" },
                  { label: __("Saturation", "digiblocks"), value: "saturation" },
                  { label: __("Color", "digiblocks"), value: "color" },
                  { label: __("Luminosity", "digiblocks"), value: "luminosity" }
                ],
                onChange: (value) => setAttributes({ textEffect: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__help" }, __("Apply a blend mode effect to the heading text.", "digiblocks"))
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
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Color Settings", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: textColor,
                          onChange: (value) => setAttributes({ textColor: value }),
                          label: __("Text Color", "digiblocks")
                        },
                        {
                          value: backgroundColor,
                          onChange: (value) => setAttributes({ backgroundColor: value }),
                          label: __("Background Color", "digiblocks")
                        }
                      ]
                    }
                  );
                } else {
                  return /* @__PURE__ */ wp.element.createElement(
                    PanelColorSettings,
                    {
                      title: __("Hover Color Settings", "digiblocks"),
                      initialOpen: true,
                      enableAlpha: true,
                      colorSettings: [
                        {
                          value: textHoverColor,
                          onChange: (value) => setAttributes({ textHoverColor: value }),
                          label: __("Text Hover Color", "digiblocks")
                        },
                        {
                          value: backgroundHoverColor,
                          onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                          label: __("Background Hover Color", "digiblocks")
                        }
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
              name: "typo",
              title: __("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Typography Settings", "digiblocks"),
                value: typography,
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: "", tablet: "", mobile: "" },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: "", tablet: "", mobile: "" },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "text-shadow",
              title: __("Text Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Enable Text Shadow", "digiblocks"),
                checked: shadowEnabled,
                onChange: (value) => setAttributes({ shadowEnabled: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            shadowEnabled && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Shadow Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: textShadow.color,
                    onChange: (value) => setAttributes({
                      textShadow: {
                        ...textShadow,
                        color: value
                      }
                    }),
                    label: __("Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Horizontal Offset", "digiblocks"),
                value: textShadow.horizontal,
                onChange: (value) => setAttributes({
                  textShadow: {
                    ...textShadow,
                    horizontal: value
                  }
                }),
                min: -20,
                max: 20,
                step: 1,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Vertical Offset", "digiblocks"),
                value: textShadow.vertical,
                onChange: (value) => setAttributes({
                  textShadow: {
                    ...textShadow,
                    vertical: value
                  }
                }),
                min: -20,
                max: 20,
                step: 1,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Blur Radius", "digiblocks"),
                value: textShadow.blur,
                onChange: (value) => setAttributes({
                  textShadow: {
                    ...textShadow,
                    blur: value
                  }
                }),
                min: 0,
                max: 20,
                step: 1,
                __nextHasNoMarginBottom: true,
                __next40pxDefaultSize: true
              }
            ))
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
        default:
          return null;
      }
    };
    const blockProps = useBlockProps({
      className: `digiblocks-heading ${id} ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement(
      RichText,
      {
        identifier: "content",
        tagName: headingTag,
        className: "digiblocks-heading-text",
        value: content,
        onChange: (value) => setAttributes({ content: value }),
        onMerge: mergeBlocks,
        onReplace,
        onRemove: onReplace ? () => onReplace([]) : void 0,
        placeholder: __("Add Your Heading", "digiblocks")
      }
    )));
  };
  var edit_default = HeadingEdit;

  // blocks/heading/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var HeadingSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      content,
      headingTag,
      animation,
      animationDuration,
      animationDelay,
      displaySeparator,
      separatorStyle,
      linkEnabled,
      linkUrl,
      linkOpenInNewTab
    } = attributes;
    const blockClasses = [
      "digiblocks-heading",
      id,
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
      displaySeparator ? `has-separator separator-${separatorStyle}` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = {
      className: blockClasses,
      id: anchor || null
    };
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    const TagName = headingTag;
    const processedContent = /* @__PURE__ */ wp.element.createElement(RichText2.Content, { value: content });
    if (linkEnabled && linkUrl) {
      return /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          href: linkUrl,
          target: linkOpenInNewTab ? "_blank" : "_self",
          rel: linkOpenInNewTab ? "noopener noreferrer" : void 0,
          ...blockProps
        },
        /* @__PURE__ */ wp.element.createElement(TagName, { className: "digiblocks-heading-text" }, processedContent)
      );
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement(TagName, { className: "digiblocks-heading-text" }, processedContent));
  };
  var save_default = HeadingSave;

  // blocks/heading/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/heading", {
    apiVersion: 3,
    title: digiBlocksData.blocks["heading"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["heading"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["heading"].description,
    keywords: [__2("heading", "digiblocks"), __2("title", "digiblocks"), __2("header", "digiblocks")],
    // Disable default controls and settings panels
    supports: {
      html: true,
      className: false,
      customClassName: false,
      anchor: false,
      splitting: true
    },
    transforms: {
      from: [
        {
          type: "block",
          blocks: ["core/paragraph", "digiblocks/text"],
          transform: (attributes) => {
            return window.wp.blocks.createBlock("digiblocks/heading", {
              content: attributes.content
            });
          }
        }
      ],
      to: [
        {
          type: "block",
          blocks: ["digiblocks/text"],
          transform: (attributes) => {
            return window.wp.blocks.createBlock("digiblocks/text", {
              content: attributes.content
            });
          }
        }
      ]
    },
    merge: (attributes, attributesToMerge) => {
      return {
        content: (attributes.content || "") + (attributesToMerge.content || "")
      };
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
      content: {
        type: "rich-text",
        source: "rich-text",
        selector: "h1,h2,h3,h4,h5,h6",
        role: "content"
      },
      headingTag: {
        type: "string",
        default: "h2"
      },
      textEffect: {
        type: "string",
        default: "none"
      },
      maxWidth: {
        type: "object",
        default: {
          desktop: { value: "", unit: "px" },
          tablet: { value: "", unit: "px" },
          mobile: { value: "", unit: "px" }
        }
      },
      textColor: {
        type: "string",
        default: ""
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
      typography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: "", tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: "", tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: "", tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      align: {
        type: "object",
        default: {
          desktop: "left",
          tablet: "",
          mobile: ""
        }
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
        default: "background"
      },
      displaySeparator: {
        type: "boolean",
        default: false
      },
      separatorColor: {
        type: "string",
        default: "#1e73be"
      },
      separatorSecondaryColor: {
        type: "string",
        default: "#e0e0e0"
      },
      separatorWidth: {
        type: "object",
        default: {
          desktop: 50,
          tablet: 40,
          mobile: 30
        }
      },
      separatorHeight: {
        type: "object",
        default: {
          desktop: 3,
          tablet: 2,
          mobile: 2
        }
      },
      separatorPosition: {
        type: "string",
        default: "bottom"
      },
      separatorStyle: {
        type: "string",
        default: "line-solid"
      },
      separatorSpacing: {
        type: "object",
        default: {
          desktop: 10,
          tablet: 8,
          mobile: 6
        }
      },
      separatorBorderRadius: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      linkEnabled: {
        type: "boolean",
        default: false
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
      shadowEnabled: {
        type: "boolean",
        default: false
      },
      textShadow: {
        type: "object",
        default: {
          horizontal: 2,
          vertical: 2,
          blur: 3,
          color: "rgba(0,0,0,0.3)"
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
        content: __2("Beautiful Heading", "digiblocks"),
        level: 2,
        textColor: "#333333",
        typography: {
          fontSize: { desktop: 32 },
          fontWeight: "600",
          lineHeight: { desktop: 1.2 }
        },
        displaySeparator: true,
        separatorStyle: "line-gradient",
        separatorColor: "#1e73be"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
