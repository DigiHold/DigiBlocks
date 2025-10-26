(() => {
  // blocks/image/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    RichText,
    MediaUpload,
    MediaUploadCheck,
    LinkControl,
    PanelColorSettings
  } = window.wp.blockEditor;
  var {
    TabPanel,
    Notice,
    SelectControl,
    ToggleControl,
    Button,
    RangeControl,
    __experimentalUnitControl: UnitControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    __experimentalNumberControl: NumberControl,
    Spinner,
    Placeholder,
    TextControl,
    PanelRow,
    Modal
  } = window.wp.components;
  var { useState, useEffect, useRef, useCallback } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, ResponsiveRangeControl, BoxShadowControl, TransformControl, CustomTabPanel, TabPanelBody } = digi.components;
  var ImageEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      imageId,
      imageUrl,
      altText,
      title,
      dimensionType,
      containerWidth,
      caption,
      width,
      widthUnit,
      height,
      heightUnit,
      sizeSlug,
      align,
      alignTablet,
      alignMobile,
      objectFit,
      borderStyle,
      borderWidth,
      borderRadius,
      borderColor,
      borderHoverColor,
      boxShadow,
      boxShadowHover,
      padding,
      margin,
      url,
      opensInNewTab,
      rel,
      animation,
      animationDuration,
      animationDelay,
      hoverEffect,
      overlayEnable,
      overlayColor,
      overlayHoverOnly,
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
    const [isAnimating, setIsAnimating] = useState(false);
    const [isEditingURL, setIsEditingURL] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchPage, setSearchPage] = useState(1);
    const [hasMoreResults, setHasMoreResults] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const searchTimeoutRef = useRef(null);
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
    useEffect(() => {
      if (imageId && sizeSlug) {
        const media = window.wp.media.attachment(imageId);
        if (media.get("url")) {
          updateImageUrl(media);
        } else {
          media.fetch().then(() => {
            updateImageUrl(media);
          });
        }
      }
    }, [sizeSlug, imageId]);
    const updateImageUrl = (media) => {
      let selectedUrl = media.get("url");
      const sizes = media.get("sizes");
      if (sizes && sizes[sizeSlug]) {
        selectedUrl = sizes[sizeSlug].url;
      }
      setAttributes({
        imageUrl: selectedUrl
      });
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
    const debouncedSearch = useCallback((query, page = 1) => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      searchTimeoutRef.current = setTimeout(() => {
        if (query.trim()) {
          searchImages(query, page);
        } else {
          setSearchResults([]);
          setHasMoreResults(false);
        }
      }, 500);
    }, []);
    useEffect(() => {
      if (isSearchModalOpen && searchQuery) {
        debouncedSearch(searchQuery, 1);
      }
      return () => {
        if (searchTimeoutRef.current) {
          clearTimeout(searchTimeoutRef.current);
        }
      };
    }, [searchQuery, isSearchModalOpen, debouncedSearch]);
    const searchImages = (query, page = 1) => {
      if (!query.trim())
        return;
      setIsSearching(true);
      const formData = new FormData();
      formData.append("action", "digiblocks_search_images");
      formData.append("query", query);
      formData.append("page", page);
      formData.append("per_page", 20);
      formData.append("nonce", digiBlocksData.image_search_nonce || "");
      fetch(digiBlocksData.ajax_url, {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((data) => {
        setIsSearching(false);
        if (data.success) {
          if (page === 1) {
            setSearchResults(data.data.images);
          } else {
            setSearchResults((prev) => [...prev, ...data.data.images]);
          }
          setHasMoreResults(data.data.images.length === 20);
          setSearchPage(page);
        } else {
          console.error("Search error:", data.data);
          alert(__("Search failed. Please check your API configuration.", "digiblocks"));
        }
      }).catch((error) => {
        setIsSearching(false);
        console.error("Search error:", error);
        alert(__("Search failed. Please try again.", "digiblocks"));
      });
    };
    const downloadAndUseImage = (imageData) => {
      setIsDownloading(true);
      const formData = new FormData();
      formData.append("action", "digiblocks_download_image");
      formData.append("image_data", JSON.stringify(imageData));
      formData.append("nonce", digiBlocksData.image_search_nonce || "");
      fetch(digiBlocksData.ajax_url, {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((data) => {
        setIsDownloading(false);
        if (data.success) {
          const media = data.data;
          setAttributes({
            imageUrl: media.url,
            imageId: media.id,
            altText: media.alt || "",
            title: media.title || ""
          });
          setIsSearchModalOpen(false);
          setSearchQuery("");
          setSearchResults([]);
          setSearchPage(1);
          setHasMoreResults(false);
        } else {
          console.error("Download error:", data.data);
          alert(__("Failed to download image. Please try again.", "digiblocks"));
        }
      }).catch((error) => {
        setIsDownloading(false);
        console.error("Download error:", error);
        alert(__("Failed to download image. Please try again.", "digiblocks"));
      });
    };
    const loadMoreResults = () => {
      if (!isSearching && hasMoreResults) {
        searchImages(searchQuery, searchPage + 1);
      }
    };
    const isImageSearchAvailable = digiBlocksData && digiBlocksData.image_search_available;
    const borderStyleOptions = [
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
      { label: __("Zoom In", "digiblocks"), value: "zoom-in" },
      { label: __("Zoom Out", "digiblocks"), value: "zoom-out" },
      { label: __("Grayscale to Color", "digiblocks"), value: "grayscale" },
      { label: __("Blur to Clear", "digiblocks"), value: "blur" },
      { label: __("Rotate", "digiblocks"), value: "rotate" },
      { label: __("Glow", "digiblocks"), value: "glow" }
    ];
    const objectFitOptions = [
      { label: __("Cover", "digiblocks"), value: "cover" },
      { label: __("Contain", "digiblocks"), value: "contain" },
      { label: __("Fill", "digiblocks"), value: "fill" },
      { label: __("None", "digiblocks"), value: "none" }
    ];
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const imageSizeOptions = [
      { label: __("Thumbnail", "digiblocks"), value: "thumbnail" },
      { label: __("Medium", "digiblocks"), value: "medium" },
      { label: __("Large", "digiblocks"), value: "large" },
      { label: __("Full Size", "digiblocks"), value: "full" }
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
    const onSelectImage = (media) => {
      if (!media || !media.url) {
        setAttributes({
          imageUrl: void 0,
          imageId: void 0,
          altText: ""
        });
        return;
      }
      let selectedUrl = media.url;
      if (sizeSlug && media.sizes && media.sizes[sizeSlug]) {
        selectedUrl = media.sizes[sizeSlug].url;
      }
      setAttributes({
        imageUrl: selectedUrl,
        imageId: media.id,
        altText: media.alt || "",
        title: media.title || ""
      });
    };
    const onRemoveImage = () => {
      setAttributes({
        imageUrl: void 0,
        imageId: void 0,
        altText: "",
        title: ""
      });
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
      let widthCSS = "";
      let heightCSS = "";
      if (dimensionType === "custom") {
        const currentWidth = width[activeDevice] ? width[activeDevice] === "auto" ? "auto" : `${width[activeDevice]}${widthUnit}` : "100%";
        const currentHeight = height[activeDevice] ? height[activeDevice] === "auto" ? "auto" : `${height[activeDevice]}${heightUnit}` : "auto";
        widthCSS = `width: ${currentWidth};`;
        heightCSS = `height: ${currentHeight};`;
      }
      let containerWidthCSS = "";
      if (containerWidth === "full") {
        containerWidthCSS = `width: 100%;`;
      }
      let borderCSS = "";
      if (borderStyle && borderStyle !== "none") {
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
      const paddingCSS = padding && padding[activeDevice] ? `${getDimensionCSS(padding, "padding", activeDevice)}` : "padding: 0;";
      const marginCSS = margin && margin[activeDevice] ? `${getDimensionCSS(margin, "margin", activeDevice)}` : "margin: 0 0 30px 0;";
      let overlayCSS = "";
      if (overlayEnable) {
        overlayCSS = `
                .${id} .digiblocks-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${overlayColor || "rgba(0,0,0,0.5)"};
                    opacity: ${overlayHoverOnly ? "0" : "1"};
                    transition: opacity 0.3s ease;
                }
                
                .${id}:hover .digiblocks-image-overlay {
                    opacity: 1;
                }
            `;
      }
      let hoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      if (borderHoverColor) {
        hoverCSS += `border-color: ${borderHoverColor};`;
      }
      let imageHoverCSS = "";
      if (hoverEffect === "zoom-in") {
        imageHoverCSS = "transform: scale(1.1);";
      } else if (hoverEffect === "zoom-out") {
        imageHoverCSS = "transform: scale(1);";
      } else if (hoverEffect === "grayscale") {
        imageHoverCSS = "filter: grayscale(0);";
      } else if (hoverEffect === "blur") {
        imageHoverCSS = "filter: blur(0);";
      } else if (hoverEffect === "rotate") {
        imageHoverCSS = "transform: rotate(5deg);";
      } else if (hoverEffect === "glow") {
        imageHoverCSS = "filter: brightness(1.1);";
      }
      let imageCSS = "";
      if (hoverEffect === "zoom-out") {
        imageCSS = "transform: scale(1.1);";
      } else if (hoverEffect === "grayscale") {
        imageCSS = "filter: grayscale(100%);";
      } else if (hoverEffect === "blur") {
        imageCSS = "filter: blur(5px);";
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
            /* Main block styles */
            .${id} {
                display: flex;
				${align === "left" ? "justify-content: flex-start;" : align === "right" ? "justify-content: flex-end;" : "justify-content: center;"}
                text-align: ${align};
                ${paddingCSS}
                ${marginCSS}
                ${positionCSS}
                ${containerWidthCSS}
				${transformCSS}
                transition: all 0.3s ease;
            }
            
            /* Image styles */
            .${id} img {
                display: flex;
                ${widthCSS}
                ${heightCSS}
                max-width: 100%;
                object-fit: ${objectFit};
                ${imageCSS}
                ${borderCSS}
                ${boxShadowCSS}
				${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
                transition: all 0.3s ease;
            }
            
            /* Hover styles */
            .${id}:hover {
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            .${id}:hover img {
                ${imageHoverCSS}
            }
            
            /* Overlay */
            ${overlayCSS}

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
    const imageSearchModalCSS = () => {
      return `
			.digiblocks-image-search-modal .components-modal__content {
				padding: 0 !important;
				overflow: hidden !important;
				width: 90vw !important;
				max-width: 1200px !important;
				display: flex !important;
				flex-direction: column !important;
			}

			.digiblocks-image-search-modal .components-modal__header {
				flex-shrink: 0;
			}

			.digiblocks-image-search-modal .components-modal__content > div:nth-child(2) {
				overflow: auto;
			}

			.digiblocks-image-search-content {
				height: 100%;
				display: flex;
				flex-direction: column;
				overflow: hidden;
				flex: 1;
			}

			.digiblocks-search-header {
				padding: 20px;
				border-bottom: 1px solid #ddd;
				background: #f9f9f9;
				flex-shrink: 0;
			}

			.digiblocks-search-input-wrapper {
				display: flex;
				gap: 10px;
				align-items: center;
			}

			.digiblocks-search-input {
				flex: 1;
				padding: 8px 12px;
				border: 1px solid #ddd;
				border-radius: 4px;
				font-size: 14px;
			}

			.digiblocks-search-input:focus {
				outline: none;
				border-color: #007cba;
				box-shadow: 0 0 0 1px #007cba;
			}

			.digiblocks-search-results {
				flex: 1;
				overflow-y: auto !important;
				overflow-x: hidden !important;
				padding: 20px;
				min-height: 0 !important;
				max-height: none !important;
			}

			.digiblocks-image-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				gap: 16px;
				margin-bottom: 20px;
			}

			.digiblocks-image-item {
				position: relative;
				aspect-ratio: 4/3;
				cursor: pointer;
				border-radius: 8px;
				overflow: hidden;
				transition: transform 0.2s ease;
				background: #f5f5f5;
			}

			.digiblocks-image-item:hover {
				transform: scale(1.02);
			}

			.digiblocks-image-item img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.digiblocks-image-overlay {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				background: linear-gradient(transparent, rgba(0,0,0,0.8));
				color: white;
				padding: 16px;
				opacity: 0;
				transition: opacity 0.2s ease;
			}

			.digiblocks-image-item:hover .digiblocks-image-overlay {
				opacity: 1;
			}

			.digiblocks-image-info {
				margin-bottom: 8px;
			}

			.digiblocks-image-title {
				display: block;
				font-weight: 600;
				font-size: 14px;
				margin-bottom: 4px;
				line-height: 1.2;
			}

			.digiblocks-image-author {
				display: block;
				font-size: 12px;
				opacity: 0.8;
			}

			.digiblocks-load-more {
				text-align: center;
				margin-top: 20px;
			}

			.digiblocks-no-results {
				text-align: center;
				padding: 40px 20px;
				color: #666;
			}

			.digiblocks-image-upload-buttons {
				display: flex;
				gap: 12px;
				align-items: center;
				flex-wrap: wrap;
			}

			.digiblocks-image-upload-buttons button {
				display: flex;
				gap: 5px;
				align-items: center;
			}

			.digiblocks-media-upload-button,
			.digiblocks-media-search-button {
				display: flex;
				align-items: center;
				gap: 8px;
				width: 100%;
			}

			.digiblocks-media-controls {
				display: flex;
				gap: 8px;
				align-items: center;
				margin-top: 12px;
				flex-wrap: wrap;
			}

			.digiblocks-media-controls .components-button {
				display: flex;
				align-items: center;
				gap: 6px;
			}

			.digiblocks-searching-state {
				text-align: center;
				padding: 40px 20px;
				color: #666;
			}

			.digiblocks-downloading-overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: rgba(0,0,0,0.8);
				display: flex;
				align-items: center;
				justify-content: center;
				color: white;
				font-weight: 600;
				z-index: 10;
			}

			.digiblocks-typing-indicator {
				text-align: center;
				padding: 20px;
				color: #666;
				font-style: italic;
			}
		`;
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "image",
              title: __("Image", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-upload-section" }, imageUrl ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-preview" }, /* @__PURE__ */ wp.element.createElement("img", { src: imageUrl, alt: altText || "" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-media-controls" }, isImageSearchAvailable && /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                isPrimary: true,
                onClick: () => setIsSearchModalOpen(true),
                disabled: isDownloading
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-search" })
            ), /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: onSelectImage,
                allowedTypes: ["image"],
                value: imageId,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    isPrimary: true,
                    onClick: open,
                    disabled: isDownloading
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-edit" })
                )
              }
            ), /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                isDestructive: true,
                onClick: onRemoveImage,
                disabled: isDownloading
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-trash" })
            ))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-upload-buttons" }, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: onSelectImage,
                allowedTypes: ["image"],
                value: imageId,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    className: "digiblocks-media-upload-button",
                    isPrimary: true,
                    onClick: open,
                    disabled: isDownloading
                  },
                  /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-admin-media" }),
                  __("Select Image", "digiblocks")
                )
              }
            ), isImageSearchAvailable && /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                className: "digiblocks-media-search-button",
                isSecondary: true,
                onClick: () => setIsSearchModalOpen(true),
                disabled: isDownloading
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-search" }),
              __("Search Images", "digiblocks")
            )))),
            imageUrl && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "16px" } }, /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Alt Text", "digiblocks"),
                value: altText,
                onChange: (value) => setAttributes({ altText: value }),
                help: __("Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Title", "digiblocks"),
                value: title,
                onChange: (value) => setAttributes({ title: value }),
                help: __("Shown as a tooltip when a user hovers over the image.", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Image Size", "digiblocks"),
                value: sizeSlug,
                options: imageSizeOptions,
                onChange: (value) => setAttributes({ sizeSlug: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "16px" } }, /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__label" }, __("Link Settings", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              LinkControl,
              {
                value: url ? { url, opensInNewTab, rel } : void 0,
                onChange: (newLink) => {
                  setAttributes({
                    url: newLink.url,
                    opensInNewTab: newLink.opensInNewTab,
                    rel: newLink.rel || ""
                  });
                  setIsEditingURL(false);
                },
                settings: [
                  {
                    id: "opensInNewTab",
                    title: __("Open in new tab")
                  },
                  {
                    id: "rel",
                    title: __("Add noopener noreferrer")
                  }
                ],
                onRemove: () => {
                  setAttributes({ url: "", opensInNewTab: false, rel: "" });
                  setIsEditingURL(false);
                }
              }
            ))),
            !isImageSearchAvailable && /* @__PURE__ */ wp.element.createElement(
              Notice,
              {
                status: "info",
                isDismissible: false,
                style: { marginTop: "16px" }
              },
              /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 8px 0" } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("\u{1F4A1} Enhanced Image Search Available", "digiblocks"))),
              /* @__PURE__ */ wp.element.createElement("p", { style: { margin: "0 0 12px 0" } }, __("Configure API providers to search and download images directly from Unsplash, Pexels, and Pixabay.", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement(
                Button,
                {
                  isSecondary: true,
                  isSmall: true,
                  href: `${digiBlocksData.admin_url}admin.php?page=digiblocks-settings#image-providers`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  icon: "admin-settings"
                },
                __("Configure Image Providers", "digiblocks")
              )
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "dimensions",
              title: __("Dimensions", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Dimension Type", "digiblocks"),
                value: dimensionType,
                onChange: (value) => setAttributes({ dimensionType: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "default",
                  label: __("Default", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "custom",
                  label: __("Custom", "digiblocks")
                }
              )
            ),
            dimensionType === "custom" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Width", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
                disabled: width[localActiveDevice] === 100,
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  width: {
                    ...width,
                    [localActiveDevice]: 100
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                value: widthUnit,
                onChange: (value) => setAttributes({ widthUnit: value }),
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
                min: 1,
                max: widthUnit === "%" ? 100 : 1e3,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )))))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __("Height", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
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
                disabled: height[localActiveDevice] === 300,
                className: "components-button digiblocks-reset is-secondary is-small",
                onClick: () => setAttributes({
                  height: {
                    ...height,
                    [localActiveDevice]: 300
                  }
                })
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
            )), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                value: heightUnit,
                onChange: (value) => setAttributes({ heightUnit: value }),
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
                min: 1,
                max: heightUnit === "%" ? 100 : 1e3,
                step: 1,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ))))))),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Container Width", "digiblocks"),
                value: containerWidth,
                onChange: (value) => setAttributes({ containerWidth: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "auto",
                  label: __("Auto", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "full",
                  label: __("Full", "digiblocks")
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Object Fit", "digiblocks"),
                value: objectFit,
                options: objectFitOptions,
                onChange: (value) => setAttributes({ objectFit: value }),
                help: __("Determines how the image should be resized to fit its container.", "digiblocks"),
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
              tab: "style",
              name: "border",
              title: __("Border", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TabPanel,
              {
                className: "digiblocks-control-tabs",
                activeClass: "active-tab",
                tabs: stateTabList
              },
              (tab) => tab.name === "normal" ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                SelectControl,
                {
                  label: __("Border Style", "digiblocks"),
                  value: borderStyle,
                  options: borderStyleOptions,
                  onChange: (value) => {
                    if (value !== "none" && (borderStyle === "none" || !borderStyle)) {
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
                            desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
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
              ), borderStyle && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
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
              )), /* @__PURE__ */ wp.element.createElement(
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
              )) : /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
                PanelColorSettings,
                {
                  title: __("Border Hover Color", "digiblocks"),
                  initialOpen: true,
                  enableAlpha: true,
                  colorSettings: [
                    {
                      value: borderHoverColor,
                      onChange: (value) => setAttributes({ borderHoverColor: value }),
                      label: __("Border Hover Color", "digiblocks")
                    }
                  ]
                }
              ))
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
              name: "effects",
              title: __("Effects", "digiblocks"),
              initialOpen: false
            },
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
            ),
            /* @__PURE__ */ wp.element.createElement(PanelRow, null, /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Enable Overlay", "digiblocks"),
                checked: overlayEnable,
                onChange: () => setAttributes({ overlayEnable: !overlayEnable })
              }
            )),
            overlayEnable && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Overlay Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: overlayColor,
                    onChange: (value) => setAttributes({ overlayColor: value }),
                    label: __("Overlay Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(PanelRow, null, /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Overlay Only on Hover", "digiblocks"),
                checked: overlayHoverOnly,
                onChange: () => setAttributes({ overlayHoverOnly: !overlayHoverOnly })
              }
            )))
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
      className: `digiblocks-image ${id} ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`,
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
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: imageSearchModalCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, imageUrl ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, url ? /* @__PURE__ */ wp.element.createElement("a", { href: "#", onClick: (e) => e.preventDefault() }, /* @__PURE__ */ wp.element.createElement(
      "img",
      {
        src: imageUrl,
        alt: altText,
        title
      }
    ), overlayEnable && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-overlay" })) : /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
      "img",
      {
        src: imageUrl,
        alt: altText,
        title
      }
    ), overlayEnable && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-overlay" }))) : /* @__PURE__ */ wp.element.createElement(
      Placeholder,
      {
        icon: "format-image",
        label: __("Image", "digiblocks"),
        instructions: __("Upload an image or select one from your media library.", "digiblocks")
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-upload-buttons" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
        MediaUpload,
        {
          onSelect: onSelectImage,
          allowedTypes: ["image"],
          value: imageId,
          render: ({ open }) => /* @__PURE__ */ wp.element.createElement(
            Button,
            {
              isPrimary: true,
              onClick: open,
              disabled: isDownloading
            },
            /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-admin-media" }),
            __("Select Image", "digiblocks")
          )
        }
      )), isImageSearchAvailable && /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          isSecondary: true,
          onClick: () => setIsSearchModalOpen(true),
          disabled: isDownloading
        },
        /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-search" }),
        __("Search Images", "digiblocks")
      ))
    )), isSearchModalOpen && /* @__PURE__ */ wp.element.createElement(
      Modal,
      {
        title: __("Search Images", "digiblocks"),
        onRequestClose: () => {
          setIsSearchModalOpen(false);
          setSearchQuery("");
          setSearchResults([]);
          setSearchPage(1);
          setHasMoreResults(false);
        },
        className: "digiblocks-image-search-modal",
        overlayClassName: "digiblocks-modal-overlay",
        shouldCloseOnClickOutside: false
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-search-content" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-search-header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-search-input-wrapper" }, /* @__PURE__ */ wp.element.createElement(
        "input",
        {
          type: "text",
          placeholder: __("Search for images...", "digiblocks"),
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "digiblocks-search-input",
          autoFocus: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          isPrimary: true,
          onClick: () => searchImages(searchQuery, 1),
          disabled: !searchQuery.trim() || isSearching
        },
        isSearching ? __("Searching...", "digiblocks") : __("Search", "digiblocks")
      ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-search-results" }, isSearching && searchResults.length === 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-searching-state" }, /* @__PURE__ */ wp.element.createElement(Spinner, null), /* @__PURE__ */ wp.element.createElement("p", null, __("Searching for images...", "digiblocks"))), searchQuery && !isSearching && searchResults.length === 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-typing-indicator" }, /* @__PURE__ */ wp.element.createElement("p", null, __("Type your search term and wait for results...", "digiblocks"))), searchResults.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-grid" }, searchResults.map((image, index) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: `${image.id}-${index}`,
          className: "digiblocks-image-item",
          onClick: () => downloadAndUseImage(image)
        },
        /* @__PURE__ */ wp.element.createElement(
          "img",
          {
            src: image.thumb,
            alt: image.alt,
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-overlay" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-info" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-image-title" }, image.title), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-image-author" }, "by ", image.author)), /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            isPrimary: true,
            size: "small"
          },
          __("Use Image", "digiblocks")
        )),
        isDownloading && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-downloading-overlay" }, /* @__PURE__ */ wp.element.createElement(Spinner, null))
      ))), hasMoreResults && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-load-more" }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          isSecondary: true,
          onClick: loadMoreResults,
          disabled: isSearching
        },
        isSearching ? __("Loading...", "digiblocks") : __("Load More", "digiblocks")
      ))))
    ));
  };
  var edit_default = ImageEdit;

  // blocks/image/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var ImageSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      imageUrl,
      altText,
      title,
      animation,
      animationDuration,
      animationDelay,
      url,
      opensInNewTab,
      rel,
      overlayEnable
    } = attributes;
    const blockClassNames = [
      "digiblocks-image",
      id,
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClassNames,
      id: anchor || void 0
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    if (!imageUrl) {
      return null;
    }
    let imageContent = /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
      "img",
      {
        src: imageUrl,
        alt: altText || "",
        title: title || ""
      }
    ), overlayEnable && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-overlay" }));
    if (url) {
      imageContent = /* @__PURE__ */ wp.element.createElement(
        "a",
        {
          href: url,
          target: opensInNewTab ? "_blank" : void 0,
          rel: rel ? "noopener noreferrer" : void 0
        },
        imageContent
      );
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, imageContent);
  };
  var save_default = ImageSave;

  // blocks/image/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/image", {
    apiVersion: 2,
    title: digiBlocksData.blocks["image"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["image"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["image"].description,
    keywords: [__2("image", "digiblocks"), __2("picture", "digiblocks"), __2("photo", "digiblocks"), __2("media", "digiblocks")],
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
      imageId: {
        type: "number"
      },
      imageUrl: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src"
      },
      altText: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "alt",
        default: ""
      },
      title: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "title",
        default: ""
      },
      caption: {
        type: "string",
        source: "html",
        selector: "figcaption",
        default: ""
      },
      dimensionType: {
        type: "string",
        default: "default"
      },
      containerWidth: {
        type: "string",
        default: "auto"
      },
      width: {
        type: "object",
        default: {
          desktop: 100,
          tablet: 100,
          mobile: 100
        }
      },
      widthUnit: {
        type: "string",
        default: "%"
      },
      height: {
        type: "object",
        default: {
          desktop: "auto",
          tablet: "auto",
          mobile: "auto"
        }
      },
      heightUnit: {
        type: "string",
        default: "px"
      },
      sizeSlug: {
        type: "string",
        default: "large"
      },
      align: {
        type: "string",
        default: "center"
      },
      alignTablet: {
        type: "string",
        default: "center"
      },
      alignMobile: {
        type: "string",
        default: "center"
      },
      objectFit: {
        type: "string",
        default: "cover"
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
      borderHoverColor: {
        type: "string"
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
      url: {
        type: "string",
        default: ""
      },
      opensInNewTab: {
        type: "boolean",
        default: false
      },
      rel: {
        type: "string",
        default: ""
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
      hoverEffect: {
        type: "string",
        default: "none"
      },
      overlayEnable: {
        type: "boolean",
        default: false
      },
      overlayColor: {
        type: "string",
        default: "rgba(0,0,0,0.5)"
      },
      overlayHoverOnly: {
        type: "boolean",
        default: true
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
        imageUrl: "https://s.w.org/images/core/5.3/MtBlanc1.jpg",
        sizeSlug: "large",
        width: {
          desktop: 100,
          tablet: 100,
          mobile: 100
        },
        widthUnit: "%"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
