(() => {
  // blocks/lottie/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    PanelColorSettings
  } = window.wp.blockEditor;
  var {
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    Placeholder,
    Spinner,
    Button,
    RadioControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { MediaUpload, MediaUploadCheck } = window.wp.blockEditor;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var dotLottieScriptLoaded = false;
  var dotLottieLoadPromise = null;
  var loadDotLottieScript = () => {
    if (dotLottieScriptLoaded) {
      return Promise.resolve();
    }
    if (dotLottieLoadPromise) {
      return dotLottieLoadPromise;
    }
    dotLottieLoadPromise = new Promise((resolve, reject) => {
      const scriptUrl = digiBlocksData.lottie;
      if (!scriptUrl) {
        reject(new Error("Lottie script URL not found in digiBlocksData"));
        return;
      }
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => {
        dotLottieScriptLoaded = true;
        resolve();
      };
      script.onerror = () => {
        reject(new Error("Failed to load Lottie script from: " + scriptUrl));
      };
      document.head.appendChild(script);
    });
    return dotLottieLoadPromise;
  };
  var LottieEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      lottieSource,
      sourceType,
      lottieFile,
      autoplay,
      loop,
      speed,
      width,
      widthUnit,
      height,
      heightUnit,
      alignment,
      backgroundColor,
      showControls,
      padding,
      margin,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      shadow,
      animation
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
    const [isLoading, setIsLoading] = useState(false);
    const [animationError, setAnimationError] = useState(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(dotLottieScriptLoaded);
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const dotLottieRef = useRef(null);
    const controlsRef = useRef(null);
    const previewTimeoutRef = useRef(null);
    const isMounted = useRef(true);
    const widthUnitOptions = [
      { label: "px", value: "px" },
      { label: "%", value: "%" },
      { label: "vw", value: "vw" }
    ];
    const heightUnitOptions = [
      { label: "px", value: "px" },
      { label: "%", value: "%" },
      { label: "vh", value: "vh" }
    ];
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect(() => {
      isMounted.current = true;
      return () => {
        isMounted.current = false;
        if (dotLottieRef.current) {
          try {
            dotLottieRef.current.pause();
            dotLottieRef.current.destroy();
          } catch (e) {
            console.warn("Error destroying animation during cleanup:", e);
          }
          dotLottieRef.current = null;
        }
        if (window.lottieResizeObserver) {
          window.lottieResizeObserver.disconnect();
          window.lottieResizeObserver = null;
        }
      };
    }, []);
    useEffect(() => {
      if (isScriptLoaded)
        return;
      setIsLoading(true);
      loadDotLottieScript().then(() => {
        if (isMounted.current) {
          setIsScriptLoaded(true);
          setIsLoading(false);
          if (lottieSource && canvasRef.current) {
            initializeAnimation();
          }
        }
      }).catch((error) => {
        if (isMounted.current) {
          setAnimationError("Failed to load animation library: " + error.message);
          setIsLoading(false);
        }
      });
    }, []);
    useEffect(() => {
      if (isScriptLoaded && lottieSource && canvasRef.current) {
        initializeAnimation();
      }
    }, [isScriptLoaded, lottieSource, canvasRef.current]);
    useEffect(() => {
      if (!dotLottieRef.current)
        return;
      if (showControls && !controlsRef.current) {
        createControls();
      } else if (!showControls && controlsRef.current) {
        controlsRef.current.remove();
        controlsRef.current = null;
      }
    }, [showControls]);
    const initializeAnimation = () => {
      if (!window.DotLottie || !lottieSource || !canvasRef.current) {
        return;
      }
      setIsLoading(true);
      setAnimationError(null);
      try {
        if (dotLottieRef.current) {
          dotLottieRef.current.destroy?.();
          dotLottieRef.current = null;
        }
        dotLottieRef.current = new window.DotLottie({
          autoplay,
          loop,
          canvas: canvasRef.current,
          src: lottieSource
        });
        dotLottieRef.current.addEventListener("DOMLoaded", () => {
          if (isMounted.current) {
            if (speed !== 1) {
              dotLottieRef.current.setSpeed(speed);
            }
            if (!loop) {
              dotLottieRef.current.addEventListener("complete", () => {
                dotLottieRef.current.pause();
                dotLottieRef.current.goToFrame(0);
              });
            }
            if (!autoplay) {
              dotLottieRef.current.pause();
              dotLottieRef.current.goToFrame(0);
            }
            setIsLoading(false);
            if (showControls) {
              createControls();
            }
          }
        });
        dotLottieRef.current.addEventListener("error", (error) => {
          console.error("Animation failed to load:", error);
          if (isMounted.current) {
            setAnimationError("Animation failed to load. Check the file or URL.");
            setIsLoading(false);
          }
        });
        setTimeout(() => {
          if (isMounted.current && isLoading) {
            setIsLoading(false);
          }
        }, 3e3);
      } catch (error) {
        console.error("Error initializing animation:", error);
        setAnimationError("Failed to initialize animation: " + error.message);
        setIsLoading(false);
      }
    };
    const createControlsWithDelay = () => {
      setTimeout(() => {
        if (isMounted.current) {
          createControls();
        }
      }, 100);
    };
    const createControls = () => {
      if (!containerRef.current || !dotLottieRef.current)
        return;
      if (controlsRef.current) {
        controlsRef.current.remove();
      }
      const controls = document.createElement("div");
      controls.className = "digiblocks-lottie-controls";
      controls.style.position = "absolute";
      controls.style.bottom = "10px";
      controls.style.left = "0";
      controls.style.right = "0";
      controls.style.display = "flex";
      controls.style.justifyContent = "center";
      controls.style.zIndex = "10";
      const playPauseBtn = document.createElement("button");
      playPauseBtn.className = "digiblocks-lottie-play-pause";
      let isPlaying = autoplay;
      playPauseBtn.innerHTML = isPlaying ? "\u23F8\uFE0F" : "\u25B6\uFE0F";
      playPauseBtn.style.background = "rgba(0,0,0,0.3)";
      playPauseBtn.style.color = "white";
      playPauseBtn.style.border = "none";
      playPauseBtn.style.borderRadius = "4px";
      playPauseBtn.style.padding = "5px 10px";
      playPauseBtn.style.cursor = "pointer";
      playPauseBtn.addEventListener("click", () => {
        if (!dotLottieRef.current)
          return;
        if (isPlaying) {
          dotLottieRef.current.pause();
          playPauseBtn.innerHTML = "\u25B6\uFE0F";
        } else {
          dotLottieRef.current.play();
          playPauseBtn.innerHTML = "\u23F8\uFE0F";
        }
        isPlaying = !isPlaying;
      });
      controls.appendChild(playPauseBtn);
      containerRef.current.appendChild(controls);
      controlsRef.current = controls;
    };
    useEffect(() => {
      if (!dotLottieRef.current || !dotLottieRef.current.isLoaded)
        return;
      try {
        dotLottieRef.current.setLoop(loop);
        dotLottieRef.current.setSpeed(speed);
        if (autoplay) {
          dotLottieRef.current.play();
        } else {
          dotLottieRef.current.pause();
          dotLottieRef.current.goToFrame(0);
        }
        if (!loop) {
          dotLottieRef.current.removeEventListener("complete");
          dotLottieRef.current.addEventListener("complete", () => {
            dotLottieRef.current.pause();
            dotLottieRef.current.goToFrame(0);
          });
        }
      } catch (error) {
        console.error("Error updating animation settings:", error);
      }
    }, [autoplay, loop, speed]);
    const onFileSelect = (media) => {
      if (!media || !media.url)
        return;
      setAttributes({
        lottieSource: media.url,
        lottieFile: media,
        sourceType: "file"
      });
    };
    const onURLChange = (url) => {
      setAttributes({
        lottieSource: url,
        sourceType: "url"
      });
    };
    const loadFromUrl = () => {
      if (!lottieSource) {
        setAnimationError("Please enter a valid URL");
        return;
      }
      if (!isScriptLoaded) {
        setAnimationError("Animation library is still loading. Please wait a moment.");
        return;
      }
      initializeAnimation();
    };
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef);
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      let animationCSS = "";
      if (animation && animation !== "none" && animations[animation]) {
        animationCSS = animations[animation].keyframes;
      }
      return `
            /* Lottie Block - ${id} */
            .${id} {
				${getDimensionCSS(padding, "padding", activeDevice)}
				${getDimensionCSS(margin, "margin", activeDevice)}
                width: 100%;
                display: flex;
                justify-content: ${alignment === "left" ? "flex-start" : alignment === "right" ? "flex-end" : "center"};
            }
            
            .${id} .digiblocks-lottie-container {
                width: ${width[activeDevice]}${widthUnit};
                height: ${height[activeDevice]}${heightUnit};
                ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                overflow: hidden;
                position: relative;
                ${borderStyle !== "none" ? `
					border-style: ${borderStyle};
					border-color: ${borderColor};
					${getDimensionCSS(borderWidth, "border-width", activeDevice)}
                ` : ""}
				${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
                ${shadow.enable ? `box-shadow: ${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.spread}px ${shadow.color};` : ""}
            }
            
            .${id} canvas {
                width: 100%;
                height: 100%;
            }
            
            .${id} .digiblocks-lottie-error {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            
            .${id} .digiblocks-lottie-error {
                color: #cc1818;
                max-width: 90%;
                padding: 10px;
            }
            
            /* Animation keyframes */
            ${animationCSS}

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
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Double", "digiblocks"), value: "double" }
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
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "source",
              title: __("Source", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              RadioControl,
              {
                label: __("Source Type", "digiblocks"),
                selected: sourceType,
                options: [
                  { label: __("File", "digiblocks"), value: "file" },
                  { label: __("URL", "digiblocks"), value: "url" }
                ],
                onChange: (value) => setAttributes({ sourceType: value })
              }
            ),
            sourceType === "file" && /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "12px" } }, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: onFileSelect,
                allowedTypes: ["application/json", "text/plain", "application/octet-stream"],
                value: lottieFile?.id || 0,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", null, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    variant: "secondary",
                    onClick: open,
                    style: { marginBottom: "8px", width: "100%" }
                  },
                  lottieSource ? __("Replace Lottie File", "digiblocks") : __("Upload Lottie File", "digiblocks")
                ), lottieSource && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-lottie-file-name", style: {
                  fontSize: "12px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginBottom: "8px"
                } }, lottieFile?.filename || lottieSource.split("/").pop()))
              }
            ))),
            sourceType === "url" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Lottie URL", "digiblocks"),
                value: lottieSource,
                onChange: onURLChange,
                placeholder: "https://example.com/animation.json",
                help: __("Enter the URL to a JSON Lottie animation file", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                onClick: loadFromUrl,
                style: { marginTop: "8px" },
                disabled: !lottieSource
              },
              __("Load Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "animation",
              title: __("Animation", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Autoplay", "digiblocks"),
                checked: autoplay,
                onChange: (value) => setAttributes({ autoplay: value }),
                help: __("Automatically start the animation when the page loads", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Loop", "digiblocks"),
                checked: loop,
                onChange: (value) => setAttributes({ loop: value }),
                help: __("Repeat the animation indefinitely", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Animation Speed", "digiblocks"),
                value: speed,
                onChange: (value) => setAttributes({ speed: value }),
                min: 0.1,
                max: 3,
                step: 0.1,
                help: __("1 = normal speed, 2 = double speed, 0.5 = half speed", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Controls", "digiblocks"),
                checked: showControls,
                onChange: (value) => setAttributes({ showControls: value }),
                help: __("Display play/pause control", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "dimensions",
              title: __("Dimensions", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Width", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
                disabled: width[localActiveDevice] === (widthUnit === "%" || widthUnit === "vw" ? 100 : 300),
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  width: {
                    ...width,
                    [localActiveDevice]: widthUnit === "%" || widthUnit === "vw" ? 100 : 300
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                value: widthUnit,
                onChange: (value) => {
                  const currentWidth = width[localActiveDevice];
                  let newWidth = currentWidth;
                  if ((value === "%" || value === "vw") && currentWidth > 100) {
                    newWidth = 100;
                  } else if ((widthUnit === "%" || widthUnit === "vw") && value === "px" && currentWidth < 50) {
                    newWidth = 300;
                  }
                  setAttributes({
                    widthUnit: value,
                    width: {
                      ...width,
                      [localActiveDevice]: newWidth
                    }
                  });
                },
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
                min: 10,
                max: widthUnit === "%" || widthUnit === "vw" ? 100 : 1e3,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Height", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
                disabled: height[localActiveDevice] === (heightUnit === "%" || heightUnit === "vh" ? 100 : 300),
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  height: {
                    ...height,
                    [localActiveDevice]: heightUnit === "%" || heightUnit === "vh" ? 100 : 300
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                value: heightUnit,
                onChange: (value) => {
                  const currentHeight = height[localActiveDevice];
                  let newHeight = currentHeight;
                  if ((value === "%" || value === "vh") && currentHeight > 100) {
                    newHeight = 100;
                  } else if ((heightUnit === "%" || heightUnit === "vh") && value === "px" && currentHeight < 50) {
                    newHeight = 300;
                  }
                  setAttributes({
                    heightUnit: value,
                    height: {
                      ...height,
                      [localActiveDevice]: newHeight
                    }
                  });
                },
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
                min: 10,
                max: heightUnit === "%" || heightUnit === "vh" ? 100 : 1e3,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))))),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Alignment", "digiblocks"),
                value: alignment,
                onChange: (value) => setAttributes({ alignment: value }),
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
                title: __("Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundColor,
                    onChange: (value) => setAttributes({ backgroundColor: value }),
                    label: __("Background Color", "digiblocks")
                  },
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "borders",
              title: __("Borders & Shadows", "digiblocks"),
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
            borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(
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
            ),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                label: __("Shadow", "digiblocks"),
                normalValue: shadow,
                onNormalChange: (value) => setAttributes({ shadow: value })
              }
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
                value: animation,
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
    const blockClasses = `digiblocks-lottie ${id} ${customClasses || ""}`;
    const animationClass = animation && animation !== "none" ? ` animate-${animation}` : "";
    const blockProps = useBlockProps({
      className: blockClasses + animationClass,
      id: anchor || null
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, !lottieSource ? /* @__PURE__ */ wp.element.createElement(
      Placeholder,
      {
        icon: "format-image",
        label: __("Lottie Animation", "digiblocks"),
        instructions: __("Upload a Lottie animation file or provide a URL to a Lottie JSON file.", "digiblocks")
      },
      sourceType === "file" ? /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
        MediaUpload,
        {
          onSelect: onFileSelect,
          allowedTypes: ["application/json", "text/plain", "application/octet-stream"],
          render: ({ open }) => /* @__PURE__ */ wp.element.createElement(Button, { variant: "primary", onClick: open }, __("Upload Lottie File", "digiblocks"))
        }
      )) : /* @__PURE__ */ wp.element.createElement("div", { style: { width: "100%", maxWidth: "400px" } }, /* @__PURE__ */ wp.element.createElement(
        TextControl,
        {
          placeholder: __("Enter Lottie JSON URL", "digiblocks"),
          value: lottieSource,
          onChange: onURLChange,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          variant: "primary",
          onClick: loadFromUrl,
          style: { marginTop: "10px" },
          disabled: !lottieSource
        },
        __("Load Animation", "digiblocks")
      )),
      /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "12px", display: "flex", justifyContent: "center" } }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          variant: "link",
          onClick: () => setAttributes({ sourceType: sourceType === "file" ? "url" : "file" })
        },
        sourceType === "file" ? __("Or use URL instead", "digiblocks") : __("Or upload a file instead", "digiblocks")
      ))
    ) : /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        className: "digiblocks-lottie-container",
        ref: containerRef,
        style: {
          width: `${width[localActiveDevice]}${widthUnit}`,
          height: `${height[localActiveDevice]}${heightUnit}`,
          position: "relative"
        }
      },
      /* @__PURE__ */ wp.element.createElement(
        "canvas",
        {
          ref: canvasRef,
          style: {
            width: "100%",
            height: "100%",
            display: "block"
          }
        }
      ),
      animationError && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-lottie-error", style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "#cc1818",
        maxWidth: "90%",
        padding: "10px"
      } }, /* @__PURE__ */ wp.element.createElement("p", null, animationError), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          variant: "secondary",
          onClick: () => {
            setAnimationError(null);
            initializeAnimation();
          }
        },
        __("Try Again", "digiblocks")
      ))
    )));
  };
  var edit_default = LottieEdit;

  // blocks/lottie/save.js
  var { __: __2 } = window.wp.i18n;
  var { useBlockProps: useBlockProps2 } = window.wp.blockEditor;
  var LottieSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      lottieSource,
      autoplay,
      loop,
      speed,
      width,
      widthUnit,
      height,
      heightUnit,
      alignment,
      backgroundColor,
      showControls,
      animation,
      borderStyle,
      borderColor,
      borderWidth,
      borderRadius,
      shadow
    } = attributes;
    if (!lottieSource) {
      return null;
    }
    const blockClasses = `digiblocks-lottie ${id} ${customClasses || ""}`;
    const animationClass = animation && animation !== "none" ? ` animate-${animation}` : "";
    const blockProps = useBlockProps2.save({
      className: blockClasses + animationClass,
      id: anchor || void 0
    });
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        className: "digiblocks-lottie-container",
        "data-src": lottieSource,
        "data-autoplay": autoplay.toString(),
        "data-loop": loop.toString(),
        "data-speed": speed.toString(),
        "data-controls": showControls.toString()
      },
      /* @__PURE__ */ wp.element.createElement(
        "canvas",
        {
          width: "100%",
          height: "100%",
          style: {
            width: "100%",
            height: "100%",
            display: "block"
          }
        }
      )
    ));
  };
  var save_default = LottieSave;

  // blocks/lottie/index.js
  var { __: __3 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/lottie", {
    apiVersion: 2,
    title: digiBlocksData.blocks["lottie"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["lottie"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["lottie"].description,
    keywords: [__3("lottie", "digiblocks"), __3("animation", "digiblocks"), __3("dotlottie", "digiblocks"), __3("motion", "digiblocks")],
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
      lottieSource: {
        type: "string",
        default: ""
      },
      sourceType: {
        type: "string",
        default: "file"
      },
      lottieFile: {
        type: "object",
        default: null
      },
      autoplay: {
        type: "boolean",
        default: true
      },
      loop: {
        type: "boolean",
        default: true
      },
      speed: {
        type: "number",
        default: 1
      },
      width: {
        type: "object",
        default: {
          desktop: 300,
          tablet: 300,
          mobile: 300
        }
      },
      widthUnit: {
        type: "string",
        default: "px"
      },
      height: {
        type: "object",
        default: {
          desktop: 300,
          tablet: 300,
          mobile: 300
        }
      },
      heightUnit: {
        type: "string",
        default: "px"
      },
      alignment: {
        type: "string",
        default: "center"
      },
      backgroundColor: {
        type: "string",
        default: ""
      },
      showControls: {
        type: "boolean",
        default: false
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
      shadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0
        }
      },
      animation: {
        type: "string",
        default: "none"
      }
    },
    example: {
      attributes: {
        lottieSource: "https://lottie.host/74c2e0cc-daa3-4269-b9a8-3205d6cd70d6/V7KchLpRt2.lottie",
        autoplay: true,
        loop: true,
        width: {
          desktop: 300,
          tablet: 300,
          mobile: 300
        },
        height: {
          desktop: 300,
          tablet: 300,
          mobile: 300
        }
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
