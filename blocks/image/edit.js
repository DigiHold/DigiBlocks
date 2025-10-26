/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    RichText,
    MediaUpload,
    MediaUploadCheck,
    LinkControl,
    PanelColorSettings,
} = wp.blockEditor;
const {
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
    Modal,
} = wp.components;
const { useState, useEffect, useRef, useCallback } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, ResponsiveRangeControl, BoxShadowControl, TransformControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Image block
 */
const ImageEdit = ({ attributes, setAttributes, clientId }) => {
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
        transformHover,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);

    // States
    const [isEditingURL, setIsEditingURL] = useState(false);
    
    // Image search states
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchPage, setSearchPage] = useState(1);
    const [hasMoreResults, setHasMoreResults] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    
    // Ref for search timeout
    const searchTimeoutRef = useRef(null);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});

    // Correct image size URL
    useEffect(() => {
        if (imageId && sizeSlug) {
            // We need to fetch the media item to get the correct URL for the selected size
            const media = wp.media.attachment(imageId);
            if (media.get('url')) {
                // If already loaded
                updateImageUrl(media);
            } else {
                // Fetch the media data
                media.fetch().then(() => {
                    updateImageUrl(media);
                });
            }
        }
    }, [sizeSlug, imageId]);

    // Update image
    const updateImageUrl = (media) => {
        let selectedUrl = media.get('url');
        const sizes = media.get('sizes');
        
        if (sizes && sizes[sizeSlug]) {
            selectedUrl = sizes[sizeSlug].url;
        }
        
        setAttributes({
            imageUrl: selectedUrl
        });
    };

    // Preview ref
    const previewTimeoutRef = useRef(null);

    // Effect to trigger animation preview when animation attribute changes
    useEffect(() => {
        if (animation && animation !== 'none') {
            const timeoutId = setTimeout(() => {
                animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);

    // Button click handler for animation preview
    const handlePreviewClick = () => {
        animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
    };

    // Debounced search function
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
        }, 500); // 500ms delay
    }, []);

    // Effect for auto-search on query change
    useEffect(() => {
        if (isSearchModalOpen && searchQuery) {
            debouncedSearch(searchQuery, 1);
        }
        
        // Cleanup timeout on unmount
        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }
        };
    }, [searchQuery, isSearchModalOpen, debouncedSearch]);

    // Search images
    const searchImages = (query, page = 1) => {
        if (!query.trim()) return;
        
        setIsSearching(true);
        
        const formData = new FormData();
        formData.append('action', 'digiblocks_search_images');
        formData.append('query', query);
        formData.append('page', page);
        formData.append('per_page', 20);
        formData.append('nonce', digiBlocksData.image_search_nonce || '');

        fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            setIsSearching(false);
            if (data.success) {
                if (page === 1) {
                    setSearchResults(data.data.images);
                } else {
                    setSearchResults(prev => [...prev, ...data.data.images]);
                }
                setHasMoreResults(data.data.images.length === 20);
                setSearchPage(page);
            } else {
                console.error('Search error:', data.data);
                alert(__('Search failed. Please check your API configuration.', 'digiblocks'));
            }
        })
        .catch(error => {
            setIsSearching(false);
            console.error('Search error:', error);
            alert(__('Search failed. Please try again.', 'digiblocks'));
        });
    };

    // Download and use image
    const downloadAndUseImage = (imageData) => {
        setIsDownloading(true);
        
        const formData = new FormData();
        formData.append('action', 'digiblocks_download_image');
        formData.append('image_data', JSON.stringify(imageData));
        formData.append('nonce', digiBlocksData.image_search_nonce || '');

        fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            setIsDownloading(false);
            if (data.success) {
                // Use the downloaded image exactly like a regular upload
                const media = data.data;
                setAttributes({
                    imageUrl: media.url,
                    imageId: media.id,
                    altText: media.alt || '',
                    title: media.title || '',
                });
                setIsSearchModalOpen(false);
                // Reset search state
                setSearchQuery('');
                setSearchResults([]);
                setSearchPage(1);
                setHasMoreResults(false);
            } else {
                console.error('Download error:', data.data);
                alert(__('Failed to download image. Please try again.', 'digiblocks'));
            }
        })
        .catch(error => {
            setIsDownloading(false);
            console.error('Download error:', error);
            alert(__('Failed to download image. Please try again.', 'digiblocks'));
        });
    };

    // Load more results
    const loadMoreResults = () => {
        if (!isSearching && hasMoreResults) {
            searchImages(searchQuery, searchPage + 1);
        }
    };

    // Check if image search is available
    const isImageSearchAvailable = digiBlocksData && digiBlocksData.image_search_available;

    // Border style options
    const borderStyleOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
        { label: __("Groove", "digiblocks"), value: "groove" },
        { label: __("Inset", "digiblocks"), value: "inset" },
        { label: __("Outset", "digiblocks"), value: "outset" },
        { label: __("Ridge", "digiblocks"), value: "ridge" },
    ];

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Zoom In", "digiblocks"), value: "zoom-in" },
        { label: __("Zoom Out", "digiblocks"), value: "zoom-out" },
        { label: __("Grayscale to Color", "digiblocks"), value: "grayscale" },
        { label: __("Blur to Clear", "digiblocks"), value: "blur" },
        { label: __("Rotate", "digiblocks"), value: "rotate" },
        { label: __("Glow", "digiblocks"), value: "glow" },
    ];

    // Object fit options
    const objectFitOptions = [
        { label: __("Cover", "digiblocks"), value: "cover" },
        { label: __("Contain", "digiblocks"), value: "contain" },
        { label: __("Fill", "digiblocks"), value: "fill" },
        { label: __("None", "digiblocks"), value: "none" },
    ];

    // Animation options
    const animationOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        ...Object.keys(animations).map((animation) => ({
            label: animation
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
            value: animation,
        })),
    ];

    // Image size options
    const imageSizeOptions = [
        { label: __("Thumbnail", "digiblocks"), value: "thumbnail" },
        { label: __("Medium", "digiblocks"), value: "medium" },
        { label: __("Large", "digiblocks"), value: "large" },
        { label: __("Full Size", "digiblocks"), value: "full" },
    ];

    // Define the tabs for our custom tab panel
    const tabList = [
        {
            name: 'options',
            title: __('Options', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        {
            name: 'style',
            title: __('Style', 'digiblocks'),
            icon: tabIcons.styleIcon
        },
        {
            name: 'advanced',
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Tabs for normal/hover states
    const stateTabList = [
        {
            name: 'normal',
            title: __('Normal', 'digiblocks'),
            className: 'digiblocks-tab-1 normal'
        },
        {
            name: 'hover',
            title: __('Hover', 'digiblocks'),
            className: 'digiblocks-tab-2 hover'
        }
    ];

    // Width unit options
    const widthUnitOptions = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' },
        { label: 'vw', value: 'vw' }
    ];

    // Height unit options
    const heightUnitOptions = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' },
        { label: 'vh', value: 'vh' }
    ];

    const getMaxValue = (unit) => {
        switch (unit) {
            case '%':
                return 100;
            case 'em':
            case 'rem':
                return 50;
            case 'vw':
            case 'vh':
                return 100;
            default:
                return 2000;
        }
    };

    const getStepValue = (unit) => {
        switch (unit) {
            case '%':
            case 'vw':
            case 'vh':
                return 1;
            case 'em':
            case 'rem':
                return 0.1;
            default:
                return 1;
        }
    };

    // Handle image select
    const onSelectImage = (media) => {
        if (!media || !media.url) {
            setAttributes({
                imageUrl: undefined,
                imageId: undefined,
                altText: '',
            });
            return;
        }
    
        // Get the URL for the selected size or fallback to the full URL
        let selectedUrl = media.url;
        if (sizeSlug && media.sizes && media.sizes[sizeSlug]) {
            selectedUrl = media.sizes[sizeSlug].url;
        }
    
        // Set the image URL and ID, and alt text if it exists
        setAttributes({
            imageUrl: selectedUrl,
            imageId: media.id,
            altText: media.alt || '',
            title: media.title || '',
        });
    };

    // Handle image removal
    const onRemoveImage = () => {
        setAttributes({
            imageUrl: undefined,
            imageId: undefined,
            altText: '',
            title: '',
        });
    };

	const getTransformOrigin = (transform, device) => {
        const xMap = { left: '0%', center: '50%', right: '100%' };
        const yMap = { top: '0%', center: '50%', bottom: '100%' };
        
        const x = xMap[transform.xAnchor?.[device] || 'center'];
        const y = yMap[transform.yAnchor?.[device] || 'center'];
        
        return `${x} ${y}`;
    };

	const getTransformCSS = (transform, device) => {
		if (!transform) return '';
		
		const transforms = [];
		
		const getValue = (prop) => {
			if (!prop) return '';
			
			let val = prop[device];
			
			// Check if value is empty
			const isEmpty = (v) => {
				if (v === '' || v === undefined || v === null) return true;
				if (typeof v === 'object' && v !== null) {
					return v.value === '' || v.value === undefined || v.value === null;
				}
				return false;
			};
			
			// Tablet fallback to desktop
			if (device === 'tablet' && isEmpty(val)) {
				val = prop.desktop;
			}
			
			// Mobile fallback to tablet, then desktop
			if (device === 'mobile' && isEmpty(val)) {
				val = prop.tablet;
				if (isEmpty(val)) {
					val = prop.desktop;
				}
			}
			
			return typeof val === 'object' && val !== null ? (val.value !== undefined ? val.value : '') : val;
		};
		
		const rotateValue = getValue(transform.rotate);
		if (rotateValue !== '' && rotateValue !== undefined && rotateValue !== null) {
			if (transform.rotate3d) {
				const perspectiveValue = getValue(transform.perspective);
				if (perspectiveValue !== '' && perspectiveValue !== undefined && perspectiveValue !== null) {
					transforms.push(`perspective(${perspectiveValue}px)`);
				}
			}
			transforms.push(`rotate(${rotateValue}deg)`);
		}
		
		if (transform.rotate3d) {
			const rotateXValue = getValue(transform.rotateX);
			if (rotateXValue !== '' && rotateXValue !== undefined && rotateXValue !== null) {
				transforms.push(`rotateX(${rotateXValue}deg)`);
			}
			const rotateYValue = getValue(transform.rotateY);
			if (rotateYValue !== '' && rotateYValue !== undefined && rotateYValue !== null) {
				transforms.push(`rotateY(${rotateYValue}deg)`);
			}
		}
		
		const offsetXValue = transform.offsetX?.[device]?.value;
		const offsetYValue = transform.offsetY?.[device]?.value;
		const hasOffsetX = offsetXValue !== '' && offsetXValue !== undefined && offsetXValue !== null;
		const hasOffsetY = offsetYValue !== '' && offsetYValue !== undefined && offsetYValue !== null;
		
		if (hasOffsetX || hasOffsetY) {
			const x = hasOffsetX ? `${offsetXValue}${transform.offsetX[device].unit || 'px'}` : '0';
			const y = hasOffsetY ? `${offsetYValue}${transform.offsetY[device].unit || 'px'}` : '0';
			transforms.push(`translate(${x}, ${y})`);
		}
		
		if (transform.keepProportions) {
			const scaleValue = getValue(transform.scale);
			if (scaleValue !== '' && scaleValue !== undefined && scaleValue !== null && scaleValue != 1) {
				transforms.push(`scale(${scaleValue})`);
			}
		} else {
			const scaleXValue = getValue(transform.scaleX);
			const scaleYValue = getValue(transform.scaleY);
			const scaleX = (scaleXValue !== '' && scaleXValue !== undefined && scaleXValue !== null) ? scaleXValue : 1;
			const scaleY = (scaleYValue !== '' && scaleYValue !== undefined && scaleYValue !== null) ? scaleYValue : 1;
			if (scaleX != 1 || scaleY != 1) {
				transforms.push(`scale(${scaleX}, ${scaleY})`);
			}
		}
		
		const skewXValue = getValue(transform.skewX);
		if (skewXValue !== '' && skewXValue !== undefined && skewXValue !== null) {
			transforms.push(`skewX(${skewXValue}deg)`);
		}
		const skewYValue = getValue(transform.skewY);
		if (skewYValue !== '' && skewYValue !== undefined && skewYValue !== null) {
			transforms.push(`skewY(${skewYValue}deg)`);
		}
		
		if (transform.flipHorizontal) {
			transforms.push('scaleX(-1)');
		}
		if (transform.flipVertical) {
			transforms.push('scaleY(-1)');
		}
		
		return transforms.length > 0 ? transforms.join(' ') : '';
	};

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Calculate width and height based on device
        let widthCSS = '';
        let heightCSS = '';

        if (dimensionType === 'custom') {
            const currentWidth = width[activeDevice] ? 
                (width[activeDevice] === 'auto' ? 'auto' : `${width[activeDevice]}${widthUnit}`) : 
                '100%';

            const currentHeight = height[activeDevice] ? 
                (height[activeDevice] === 'auto' ? 'auto' : `${height[activeDevice]}${heightUnit}`) : 
                'auto';
            
            widthCSS = `width: ${currentWidth};`;
            heightCSS = `height: ${currentHeight};`;
        }

        let containerWidthCSS = '';

        if (containerWidth === 'full') {
            containerWidthCSS = `width: 100%;`;
        }
        
        // Create border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
            `;
        } else {
            borderCSS = 'border-style: none;';
        }
        
        // Create box shadow styles
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Create padding and margin styles
        const paddingCSS = padding && padding[activeDevice] ? 
            `${getDimensionCSS(padding, 'padding', activeDevice)}` : 
            'padding: 0;';
            
        const marginCSS = margin && margin[activeDevice] ? 
            `${getDimensionCSS(margin, 'margin', activeDevice)}` : 
            'margin: 0 0 30px 0;';
        
        // Overlay CSS
        let overlayCSS = '';
        if (overlayEnable) {
            overlayCSS = `
                .${id} .digiblocks-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${overlayColor || 'rgba(0,0,0,0.5)'};
                    opacity: ${overlayHoverOnly ? '0' : '1'};
                    transition: opacity 0.3s ease;
                }
                
                .${id}:hover .digiblocks-image-overlay {
                    opacity: 1;
                }
            `;
        }
        
        // Hover effects
        let hoverCSS = '';
        
        // Box shadow hover
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Border hover color
        if (borderHoverColor) {
            hoverCSS += `border-color: ${borderHoverColor};`;
        }
        
        // Image hover effects
        let imageHoverCSS = '';
        if (hoverEffect === 'zoom-in') {
            imageHoverCSS = 'transform: scale(1.1);';
        } else if (hoverEffect === 'zoom-out') {
            imageHoverCSS = 'transform: scale(1);';
        } else if (hoverEffect === 'grayscale') {
            imageHoverCSS = 'filter: grayscale(0);';
        } else if (hoverEffect === 'blur') {
            imageHoverCSS = 'filter: blur(0);';
        } else if (hoverEffect === 'rotate') {
            imageHoverCSS = 'transform: rotate(5deg);';
        } else if (hoverEffect === 'glow') {
            imageHoverCSS = 'filter: brightness(1.1);';
        }
        
        // Image CSS for hover effects
        let imageCSS = '';
        if (hoverEffect === 'zoom-out') {
            imageCSS = 'transform: scale(1.1);';
        } else if (hoverEffect === 'grayscale') {
            imageCSS = 'filter: grayscale(100%);';
        } else if (hoverEffect === 'blur') {
            imageCSS = 'filter: blur(5px);';
        }

        // Position styles
        let positionCSS = '';
        if (position && position !== 'default') {
            positionCSS += `position: ${position} !important;`;
            
            const horizontalValue = horizontalOffset?.[activeDevice]?.value;
            const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || 'px';
            if (horizontalValue !== '' && horizontalValue !== undefined) {
                if (horizontalOrientation === 'left') {
                    positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
                } else {
                    positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
                }
            }
            
            const verticalValue = verticalOffset?.[activeDevice]?.value;
            const verticalUnit = verticalOffset?.[activeDevice]?.unit || 'px';
            if (verticalValue !== '' && verticalValue !== undefined) {
                if (verticalOrientation === 'top') {
                    positionCSS += `top: ${verticalValue}${verticalUnit};`;
                } else {
                    positionCSS += `bottom: ${verticalValue}${verticalUnit};`;
                }
            }
        }

        if (zIndex !== '' && zIndex !== undefined && zIndex !== null) {
            positionCSS += `z-index: ${zIndex};`;
        }

		// Transform
		let transformCSS = '';
		const transformValue = getTransformCSS(transform, activeDevice);
		if (transformValue) {
			transformCSS += `transform: ${transformValue};`;
			transformCSS += `transform-origin: ${getTransformOrigin(transform, activeDevice)};`;
		}

		const transformHoverValue = getTransformCSS(transformHover, activeDevice);
		if (transformHoverValue && transformHover && transformHover.transitionDuration !== '' && transformHover.transitionDuration !== undefined && transformHover.transitionDuration !== null) {
			const duration = transformHover.transitionDuration;
			transformCSS += `transition: transform ${duration}ms ease;`;
		}

		let transformHoverCSS = '';
		if (transformHoverValue) {
			transformHoverCSS += `transform: ${transformHoverValue};`;
			transformHoverCSS += `transform-origin: ${getTransformOrigin(transformHover, activeDevice)};`;
		}
        
        // Set base styles for the block
        return `
            /* Main block styles */
            .${id} {
                display: flex;
				${align === 'left' ? 'justify-content: flex-start;' : (align === 'right' ? 'justify-content: flex-end;' : 'justify-content: center;')}
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
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
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
			` : ''}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}
        `;
    };

    // CSS styles for image search modal
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

    // Define the render function for each tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="image"
                            title={__("Image", "digiblocks")}
                            initialOpen={true}
                        >
                            <MediaUploadCheck>
                                <div className="digiblocks-image-upload-section">
                                    {imageUrl ? (
                                        <div className="digiblocks-media-preview">
                                            <img src={imageUrl} alt={altText || ''} />
                                            <div className="digiblocks-media-controls">
                                                {isImageSearchAvailable && (
                                                    <Button
                                                        isPrimary
                                                        onClick={() => setIsSearchModalOpen(true)}
                                                        disabled={isDownloading}
                                                    >
                                                        <span className="dashicon dashicons dashicons-search"></span>
                                                    </Button>
                                                )}
                                                <MediaUpload
                                                    onSelect={onSelectImage}
                                                    allowedTypes={['image']}
                                                    value={imageId}
                                                    render={({ open }) => (
                                                        <Button
															isPrimary
                                                            onClick={open}
                                                            disabled={isDownloading}
                                                        >
                                                            <span className="dashicon dashicons dashicons-edit"></span>
                                                        </Button>
                                                    )}
                                                />
                                                <Button 
                                                    isDestructive
                                                    onClick={onRemoveImage}
                                                    disabled={isDownloading}
                                                >
                                                    <span className="dashicon dashicons dashicons-trash"></span>
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="digiblocks-image-upload-buttons">
                                            <MediaUpload
                                                onSelect={onSelectImage}
                                                allowedTypes={['image']}
                                                value={imageId}
                                                render={({ open }) => (
                                                    <Button
                                                        className="digiblocks-media-upload-button"
                                                        isPrimary
                                                        onClick={open}
                                                        disabled={isDownloading}
                                                    >
                                                        <span className="dashicon dashicons dashicons-admin-media"></span>
                                                        {__('Select Image', 'digiblocks')}
                                                    </Button>
                                                )}
                                            />
                                            {isImageSearchAvailable && (
                                                <Button
                                                    className="digiblocks-media-search-button"
                                                    isSecondary
                                                    onClick={() => setIsSearchModalOpen(true)}
                                                    disabled={isDownloading}
                                                >
                                                    <span className="dashicon dashicons dashicons-search"></span>
                                                    {__('Search Images', 'digiblocks')}
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </MediaUploadCheck>
                            
                            {imageUrl && (
                                <div style={{ marginTop: '16px' }}>
                                    <TextControl
                                        label={__('Alt Text', 'digiblocks')}
                                        value={altText}
                                        onChange={(value) => setAttributes({ altText: value })}
                                        help={__('Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.', 'digiblocks')}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
                                    />
                                    
                                    <TextControl
                                        label={__('Title', 'digiblocks')}
                                        value={title}
                                        onChange={(value) => setAttributes({ title: value })}
                                        help={__('Shown as a tooltip when a user hovers over the image.', 'digiblocks')}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Image Size', 'digiblocks')}
                                        value={sizeSlug}
                                        options={imageSizeOptions}
                                        onChange={(value) => setAttributes({ sizeSlug: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />

                                    {/* Link Control */}
                                    <div style={{ marginTop: '16px' }}>
                                        <p className="components-base-control__label">{__('Link Settings', 'digiblocks')}</p>
                                        <LinkControl
                                            value={url ? { url, opensInNewTab, rel } : undefined}
                                            onChange={(newLink) => {
                                                setAttributes({
                                                    url: newLink.url,
                                                    opensInNewTab: newLink.opensInNewTab,
                                                    rel: newLink.rel || '',
                                                });
                                                setIsEditingURL(false);
                                            }}
                                            settings={[
                                                {
                                                    id: 'opensInNewTab',
                                                    title: __('Open in new tab'),
                                                },
                                                {
                                                    id: 'rel',
                                                    title: __('Add noopener noreferrer'),
                                                }
                                            ]}
                                            onRemove={() => {
                                                setAttributes({ url: '', opensInNewTab: false, rel: '' });
                                                setIsEditingURL(false);
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

							 {/* Image Search Notice */}
							 {!isImageSearchAvailable && (
								<Notice
									status="info"
									isDismissible={false}
									style={{ marginTop: '16px' }}
								>
									<p style={{ margin: '0 0 8px 0' }}>
										<strong>{__('💡 Enhanced Image Search Available', 'digiblocks')}</strong>
									</p>
									<p style={{ margin: '0 0 12px 0' }}>
										{__('Configure API providers to search and download images directly from Unsplash, Pexels, and Pixabay.', 'digiblocks')}
									</p>
									<Button
										isSecondary
										isSmall
										href={`${digiBlocksData.admin_url}admin.php?page=digiblocks-settings#image-providers`}
										target="_blank"
										rel="noopener noreferrer"
										icon="admin-settings"
									>
										{__('Configure Image Providers', 'digiblocks')}
									</Button>
								</Notice>
							)}
                        </TabPanelBody>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="dimensions"
                            title={__("Dimensions", "digiblocks")}
                            initialOpen={true}
                        >
                            <ToggleGroupControl
                                label={__("Dimension Type", "digiblocks")}
                                value={dimensionType}
                                onChange={(value) => setAttributes({ dimensionType: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="default" 
                                    label={__("Default", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="custom" 
                                    label={__("Custom", "digiblocks")}
                                />
                            </ToggleGroupControl>

                            {dimensionType === 'custom' && (
                                <>
                                    <div className="digiblocks-size-type-field-tabs">
                                        <div className="digiblocks-responsive-control-inner">
                                            <div className="components-base-control">
                                                <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                                                    <div className="digiblocks-control__header">
                                                        <div className="digiblocks-responsive-label-wrap">
                                                            <span className="digiblocks-control-label">{__('Width', 'digiblocks')}</span>
                                                            <button 
                                                                type="button" 
                                                                aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                                                                className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
                                                                onClick={() => window.digi.responsiveState.toggleDevice()}
                                                            >
                                                                {window.digi.icons.deviceIcons[localActiveDevice]}
                                                            </button>
                                                        </div>
                                                        <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                                            <div tabIndex="0">
                                                                <button 
                                                                    type="button" 
                                                                    disabled={width[localActiveDevice] === 100}
                                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                                    onClick={() => setAttributes({
                                                                        width: {
                                                                            ...width,
                                                                            [localActiveDevice]: 100
                                                                        }
                                                                    })}
                                                                >
                                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                                </button>
                                                            </div>
                                                            <ToggleGroupControl
                                                                value={widthUnit}
                                                                onChange={(value) => setAttributes({ widthUnit: value })}
                                                                isBlock
                                                                isSmall
                                                                hideLabelFromVision
                                                                aria-label={__("Width Unit", "digiblocks")}
                                                                __next40pxDefaultSize={true}
                                                                __nextHasNoMarginBottom={true}
                                                            >
                                                                {widthUnitOptions.map(option => (
                                                                    <ToggleGroupControlOption
                                                                        key={option.value}
                                                                        value={option.value}
                                                                        label={option.label}
                                                                    />
                                                                ))}
                                                            </ToggleGroupControl>
                                                        </div>
                                                    </div>
                                                    <div className="digiblocks-range-control__mobile-controls">
                                                        <RangeControl
                                                            value={width[localActiveDevice]}
                                                            onChange={(value) => setAttributes({
                                                                width: {
                                                                    ...width,
                                                                    [localActiveDevice]: value
                                                                }
                                                            })}
                                                            min={1}
                                                            max={widthUnit === '%' ? 100 : 1000}
                                                            step={1}
                                                            __next40pxDefaultSize={true}
                                                            __nextHasNoMarginBottom={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="digiblocks-size-type-field-tabs">
                                        <div className="digiblocks-responsive-control-inner">
                                            <div className="components-base-control">
                                                <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                                                    <div className="digiblocks-control__header">
                                                        <div className="digiblocks-responsive-label-wrap">
                                                            <span className="digiblocks-control-label">{__('Height', 'digiblocks')}</span>
                                                            <button 
                                                                type="button" 
                                                                aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                                                                className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
                                                                onClick={() => window.digi.responsiveState.toggleDevice()}
                                                            >
                                                                {window.digi.icons.deviceIcons[localActiveDevice]}
                                                            </button>
                                                        </div>
                                                        <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                                            <div tabIndex="0">
                                                                <button 
                                                                    type="button" 
                                                                    disabled={height[localActiveDevice] === 300}
                                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                                    onClick={() => setAttributes({
                                                                        height: {
                                                                            ...height,
                                                                            [localActiveDevice]: 300
                                                                        }
                                                                    })}
                                                                >
                                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                                </button>
                                                            </div>
                                                            <ToggleGroupControl
                                                                value={heightUnit}
                                                                onChange={(value) => setAttributes({ heightUnit: value })}
                                                                isBlock
                                                                isSmall
                                                                hideLabelFromVision
                                                                aria-label={__("Height Unit", "digiblocks")}
                                                                __next40pxDefaultSize={true}
                                                                __nextHasNoMarginBottom={true}
                                                            >
                                                                {heightUnitOptions.map(option => (
                                                                    <ToggleGroupControlOption
                                                                        key={option.value}
                                                                        value={option.value}
                                                                        label={option.label}
                                                                    />
                                                                ))}
                                                            </ToggleGroupControl>
                                                        </div>
                                                    </div>
                                                    <div className="digiblocks-range-control__mobile-controls">
                                                        <RangeControl
                                                            value={height[localActiveDevice]}
                                                            onChange={(value) => setAttributes({
                                                                height: {
                                                                    ...height,
                                                                    [localActiveDevice]: value
                                                                }
                                                            })}
                                                            min={1}
                                                            max={heightUnit === '%' ? 100 : 1000}
                                                            step={1}
                                                            __next40pxDefaultSize={true}
                                                            __nextHasNoMarginBottom={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            <ToggleGroupControl
                                label={__("Container Width", "digiblocks")}
                                value={containerWidth}
                                onChange={(value) => setAttributes({ containerWidth: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="auto" 
                                    label={__("Auto", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="full" 
                                    label={__("Full", "digiblocks")}
                                />
                            </ToggleGroupControl>
							
							<SelectControl
								label={__("Object Fit", "digiblocks")}
								value={objectFit}
								options={objectFitOptions}
								onChange={(value) => setAttributes({ objectFit: value })}
								help={__('Determines how the image should be resized to fit its container.', 'digiblocks')}
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleGroupControl
								label={__("Alignment", "digiblocks")}
								value={align}
								onChange={(value) => setAttributes({ align: value })}
								isBlock
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							>
								<ToggleGroupControlOption 
									value="left" 
									label={__("Left", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="center" 
									label={__("Center", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="right" 
									label={__("Right", "digiblocks")}
								/>
							</ToggleGroupControl>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__("Border", "digiblocks")}
                            initialOpen={false}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => 
                                    tab.name === 'normal' ? (
                                        <>
                                            <SelectControl
                                                label={__("Border Style", "digiblocks")}
                                                value={borderStyle}
                                                options={borderStyleOptions}
                                                onChange={(value) => {
                                                    // Initialize border width and radius with defaults when a style is first selected
                                                    if (value !== 'none' && (borderStyle === 'none' || !borderStyle)) {
                                                        // Set initial border width if not already set
                                                        if (!borderWidth || Object.keys(borderWidth).length === 0) {
                                                            setAttributes({
                                                                borderWidth: {
                                                                    desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                                    tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                                                    mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                                                }
                                                            });
                                                        }
                                                        
                                                        // Set initial border radius if not already set
                                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                                            setAttributes({
                                                                borderRadius: {
                                                                    desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                                                    tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                                                    mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                                                }
                                                            });
                                                        }
                                                    }
                                                    
                                                    setAttributes({
                                                        borderStyle: value,
                                                    });
                                                }}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            />
                                            
                                            {/* Show border width and border radius controls only if a border style is selected */}
                                            {borderStyle && borderStyle !== 'none' && (
                                                <>
                                                    {/* Border Color */}
                                                    <PanelColorSettings
                                                        title={__("Border Color", "digiblocks")}
                                                        initialOpen={true}
                                                        enableAlpha={true}
                                                        colorSettings={[
                                                            {
                                                                value: borderColor,
                                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                                label: __("Border Color", "digiblocks")
                                                            }
                                                        ]}
                                                    />
                                                    
                                                    {/* Border Width */}
                                                    <ResponsiveControl
                                                        label={__("Border Width", "digiblocks")}
                                                    >
                                                        <DimensionControl
                                                            values={borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                                                                top: 1,
                                                                right: 1,
                                                                bottom: 1,
                                                                left: 1,
                                                                unit: 'px'
                                                            }}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    borderWidth: {
                                                                        ...borderWidth,
                                                                        [localActiveDevice]: value,
                                                                    },
                                                                })
                                                            }
                                                        />
                                                    </ResponsiveControl>
                                                </>
                                            )}
                                            
                                            {/* Border Radius - show regardless of border style */}
                                            <ResponsiveControl
                                                label={__("Border Radius", "digiblocks")}
                                            >
                                                <DimensionControl
                                                    values={borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        left: 0,
                                                        unit: 'px'
                                                    }}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            borderRadius: {
                                                                ...borderRadius,
                                                                [localActiveDevice]: value,
                                                            },
                                                        })
                                                    }
                                                    units={[
                                                        { label: 'px', value: 'px' },
                                                        { label: '%', value: '%' }
                                                    ]}
                                                />
                                            </ResponsiveControl>
                                        </>
                                    ) : (
                                        <>
                                            {/* Hover border color */}
                                            <PanelColorSettings
                                                title={__("Border Hover Color", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: borderHoverColor,
                                                        onChange: (value) => setAttributes({ borderHoverColor: value }),
                                                        label: __("Border Hover Color", "digiblocks")
                                                    }
                                                ]}
                                            />
                                        </>
                                    )
                                }
                            </TabPanel>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="shadow"
                            title={__("Box Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* Box Shadow Control */}
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value, }) }
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value, }) }
                            />
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="effects"
                            title={__("Effects", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__(
                                    "Hover Effect",
                                    "digiblocks"
                                )}
                                value={hoverEffect}
                                options={hoverEffectOptions}
                                onChange={(value) =>
                                    setAttributes({
                                        hoverEffect: value,
                                    })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <PanelRow>
                                <ToggleControl
                                    label={__('Enable Overlay', 'digiblocks')}
                                    checked={overlayEnable}
                                    onChange={() => setAttributes({ overlayEnable: !overlayEnable })}
                                />
                            </PanelRow>
                            
                            {overlayEnable && (
                                <>
                                    <PanelColorSettings
                                        title={__("Overlay Color", "digiblocks")}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: overlayColor,
                                                onChange: (value) => setAttributes({ overlayColor: value }),
                                                label: __("Overlay Color", "digiblocks")
                                            }
                                        ]}
                                    />
                                    
                                    <PanelRow>
                                        <ToggleControl
                                            label={__('Show Overlay Only on Hover', 'digiblocks')}
                                            checked={overlayHoverOnly}
                                            onChange={() => setAttributes({ overlayHoverOnly: !overlayHoverOnly })}
                                        />
                                    </PanelRow>
                                </>
                            )}
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={true}
                        >
                            <ResponsiveControl
                                label={__("Padding", "digiblocks")}
                            >
                                <DimensionControl
                                    values={padding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            padding: {
                                                ...padding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            <ResponsiveControl
                                label={__("Margin", "digiblocks")}
                            >
                                <DimensionControl
                                    values={margin[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            margin: {
                                                ...margin,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="advanced"
                            name="position"
                            title={__("Position", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Position", "digiblocks")}
                                value={position}
                                options={[
                                    { label: __("Default", "digiblocks"), value: "default" },
                                    { label: __("Relative", "digiblocks"), value: "relative" },
                                    { label: __("Absolute", "digiblocks"), value: "absolute" },
                                    { label: __("Fixed", "digiblocks"), value: "fixed" },
                                ]}
                                onChange={(value) => setAttributes({ position: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {position !== 'default' && (
                                <>
                                    <ToggleGroupControl
                                        label={__("Horizontal Orientation", "digiblocks")}
                                        value={horizontalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ horizontalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="left"
                                            label={__("Left", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="right"
                                            label={__("Right", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={horizontalOffset}
                                        onChange={(value) => setAttributes({ horizontalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(horizontalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(horizontalOffset?.[localActiveDevice]?.unit)}
                                    />

                                    <ToggleGroupControl
                                        label={__("Vertical Orientation", "digiblocks")}
                                        value={verticalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ verticalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="top"
                                            label={__("Top", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="bottom"
                                            label={__("Bottom", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={verticalOffset}
                                        onChange={(value) => setAttributes({ verticalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(verticalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(verticalOffset?.[localActiveDevice]?.unit)}
                                    />
                                </>
                            )}

                            <RangeControl
                                label={__("Z-Index", "digiblocks")}
                                value={zIndex}
                                onChange={(value) => setAttributes({ zIndex: value })}
                                min={-999}
                                max={9999}
                                allowReset={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="transform"
                            title={__('Transform', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TransformControl
                                normalValue={transform}
                                hoverValue={transformHover}
                                onNormalChange={(value) => setAttributes({ transform: value })}
                                onHoverChange={(value) => setAttributes({ transformHover: value })}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__('Animation', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__(
                                    "Animation Effect",
                                    "digiblocks"
                                )}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) =>
                                    setAttributes({
                                        animation: value,
                                    })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

							{animation && animation !== 'none' && (
								<>
									<SelectControl
										label={__("Animation Duration", "digiblocks")}
										value={animationDuration}
										options={[
											{ label: __("Slow", "digiblocks"), value: "slow" },
											{ label: __("Normal", "digiblocks"), value: "normal" },
											{ label: __("Fast", "digiblocks"), value: "fast" }
										]}
										onChange={(value) => setAttributes({ animationDuration: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
									
									<NumberControl
										label={__("Animation Delay (ms)", "digiblocks")}
										value={animationDelay || 0}
										onChange={(value) => setAttributes({ animationDelay: parseInt(value) || 0 })}
										min={0}
										step={100}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</>
							)}
                            
                            {/* Animation Preview Button */}
                            {animation && animation !== 'none' && (
                                <div style={{ marginTop: '10px' }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={handlePreviewClick}
                                        style={{ width: '100%' }}
                                    >
                                        {__("Preview Animation", "digiblocks")}
                                    </Button>
                                </div>
                            )}
                        </TabPanelBody>
						
						<TabPanelBody
							tab="advanced"
							name="visibility"
							title={__('Visibility', 'digiblocks')}
							initialOpen={false}
						>
							<div className="components-base-control__help" style={{ 
								padding: '12px', 
								backgroundColor: '#f0f6fc', 
								border: '1px solid #c3ddfd', 
								borderRadius: '4px',
								marginBottom: '16px'
							}}>
								<strong>{__('Editor Note:', 'digiblocks')}</strong><br />
								{__('Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.', 'digiblocks')}
							</div>
							
							<ToggleControl
								label={__('Hide on Desktop', 'digiblocks')}
								checked={visibility.desktop}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										desktop: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Tablet', 'digiblocks')}
								checked={visibility.tablet}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										tablet: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Mobile', 'digiblocks')}
								checked={visibility.mobile}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										mobile: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
						</TabPanelBody>
						
                        <TabPanelBody
                            tab="advanced"
                            name="additional"
                            title={__("Additional", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* HTML Anchor field */}
                            <div className="components-base-control html-anchor-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="html-anchor">
                                        {__("HTML anchor", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="html-anchor"
                                        value={anchor || ""}
                                        onChange={(e) =>
                                            setAttributes({ anchor: e.target.value })
                                        }
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="html-anchor-help" className="components-base-control__help">
                                    {__("Enter a word or two — without spaces — to make a unique web address just for this block, called an \"anchor\". Then, you'll be able to link directly to this section of your page.", "digiblocks")}
                                    {' '}
                                    <a 
                                        className="components-external-link" 
                                        href="https://wordpress.org/documentation/article/page-jumps/" 
                                        target="_blank" 
                                        rel="external noreferrer noopener"
                                    >
                                        <span className="components-external-link__contents">
                                            {__("Learn more about anchors", "digiblocks")}
                                        </span>
                                        <span className="components-external-link__icon" aria-label="(opens in a new tab)">↗</span>
                                    </a>
                                </p>
                            </div>

                            {/* Additional CSS classes field */}
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="additional-css-classes">
                                        {__("Additional CSS class(es)", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="additional-css-classes"
                                        value={customClasses || ""}
                                        onChange={(e) =>
                                            setAttributes({ customClasses: e.target.value })
                                        }
                                        aria-describedby="additional-css-classes-help"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="additional-css-classes-help" className="components-base-control__help">
                                    {__("Separate multiple classes with spaces.", "digiblocks")}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
    };

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-image ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    return (
        <>
            <InspectorControls>
                <CustomTabPanel
                    tabs={tabList}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />
            
            {/* CSS for image search modal */}
            <style dangerouslySetInnerHTML={{ __html: imageSearchModalCSS() }} />

            <div {...blockProps}>
                {imageUrl ? (
                    <>
                        {url ? (
                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <img 
                                    src={imageUrl} 
                                    alt={altText} 
                                    title={title}
                                />
                                {overlayEnable && (
                                    <div className="digiblocks-image-overlay"></div>
                                )}
                            </a>
                        ) : (
                            <>
                                <img 
                                    src={imageUrl} 
                                    alt={altText} 
                                    title={title}
                                />
                                {overlayEnable && (
                                    <div className="digiblocks-image-overlay"></div>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <Placeholder
                        icon="format-image"
                        label={__('Image', 'digiblocks')}
                        instructions={__('Upload an image or select one from your media library.', 'digiblocks')}
                    >
                        <div className="digiblocks-image-upload-buttons">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    value={imageId}
                                    render={({ open }) => (
                                        <Button
                                            isPrimary
                                            onClick={open}
                                            disabled={isDownloading}
                                        >
                                            <span className="dashicon dashicons dashicons-admin-media"></span>
                                            {__('Select Image', 'digiblocks')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                            {isImageSearchAvailable && (
                                <Button
                                    isSecondary
                                    onClick={() => setIsSearchModalOpen(true)}
                                    disabled={isDownloading}
                                >
                                    <span className="dashicon dashicons dashicons-search"></span>
                                    {__('Search Images', 'digiblocks')}
                                </Button>
                            )}
                        </div>
                    </Placeholder>
                )}
            </div>

            {/* Image Search Modal */}
			{isSearchModalOpen && (
				<Modal
					title={__('Search Images', 'digiblocks')}
					onRequestClose={() => {
						setIsSearchModalOpen(false);
						setSearchQuery('');
						setSearchResults([]);
						setSearchPage(1);
						setHasMoreResults(false);
					}}
					className="digiblocks-image-search-modal"
					overlayClassName="digiblocks-modal-overlay"
					shouldCloseOnClickOutside={false}
				>
					<div className="digiblocks-image-search-content">
						<div className="digiblocks-search-header">
							<div className="digiblocks-search-input-wrapper">
								<input
									type="text"
									placeholder={__('Search for images...', 'digiblocks')}
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="digiblocks-search-input"
									autoFocus
								/>
								<Button
									isPrimary
									onClick={() => searchImages(searchQuery, 1)}
									disabled={!searchQuery.trim() || isSearching}
								>
									{isSearching ? __('Searching...', 'digiblocks') : __('Search', 'digiblocks')}
								</Button>
							</div>
						</div>
						
						<div className="digiblocks-search-results">
                            {isSearching && searchResults.length === 0 && (
                                <div className="digiblocks-searching-state">
                                    <Spinner />
                                    <p>{__('Searching for images...', 'digiblocks')}</p>
                                </div>
                            )}

                            {searchQuery && !isSearching && searchResults.length === 0 && (
                                <div className="digiblocks-typing-indicator">
                                    <p>{__('Type your search term and wait for results...', 'digiblocks')}</p>
                                </div>
                            )}
                            
                            {searchResults.length > 0 && (
                                <div className="digiblocks-image-grid">
                                    {searchResults.map((image, index) => (
                                        <div
                                            key={`${image.id}-${index}`}
                                            className="digiblocks-image-item"
                                            onClick={() => downloadAndUseImage(image)}
                                        >
                                            <img
                                                src={image.thumb}
                                                alt={image.alt}
                                                loading="lazy"
                                            />
                                            <div className="digiblocks-image-overlay">
                                                <div className="digiblocks-image-info">
                                                    <span className="digiblocks-image-title">{image.title}</span>
                                                    <span className="digiblocks-image-author">by {image.author}</span>
                                                </div>
                                                <Button
                                                    isPrimary
                                                    size="small"
                                                >
                                                    {__('Use Image', 'digiblocks')}
                                                </Button>
                                            </div>
                                            {isDownloading && (
                                                <div className="digiblocks-downloading-overlay">
                                                    <Spinner />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {hasMoreResults && (
                                <div className="digiblocks-load-more">
                                    <Button
                                        isSecondary
                                        onClick={loadMoreResults}
                                        disabled={isSearching}
                                    >
                                        {isSearching ? __('Loading...', 'digiblocks') : __('Load More', 'digiblocks')}
                                    </Button>
                                </div>
                            )}
                        </div>
					</div>
				</Modal>
			)}
        </>
    );
};

export default ImageEdit;