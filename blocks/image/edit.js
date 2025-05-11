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
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    RangeControl,
    __experimentalUnitControl: UnitControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    Spinner,
    Placeholder,
    TextControl,
    PanelRow,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Image block
 */
const ImageEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        imageId,
        imageUrl,
        altText,
        title,
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
        hoverEffect,
        overlayEnable,
        overlayColor,
        overlayHoverOnly,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);

    // States
    const [isEditingURL, setIsEditingURL] = useState(false);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");

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
                animationPreview(id, animation, animations, previewTimeoutRef);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);

    // Button click handler for animation preview
    const handlePreviewClick = () => {
        animationPreview(id, animation, animations, previewTimeoutRef);
    };

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

    // Alignment handler for each device
    const handleAlignmentChange = (device, value) => {
        if (device === 'desktop') {
            setAttributes({ align: value });
        } else if (device === 'tablet') {
            setAttributes({ alignTablet: value });
        } else if (device === 'mobile') {
            setAttributes({ alignMobile: value });
        }
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Get alignment based on active device
        const currentAlign = activeDevice === 'desktop' 
            ? align 
            : activeDevice === 'tablet' 
                ? alignTablet 
                : alignMobile;
        
        // Calculate width and height based on device
        const currentWidth = width[activeDevice] ? 
            (width[activeDevice] === 'auto' ? 'auto' : `${width[activeDevice]}${widthUnit}`) : 
            '100%';
        
        const currentHeight = height[activeDevice] ? 
            (height[activeDevice] === 'auto' ? 'auto' : `${height[activeDevice]}${heightUnit}`) : 
            'auto';
        
        // Create border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
            const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
            const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' };
            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
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
            `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};` : 
            'padding: 0;';
            
        const marginCSS = margin && margin[activeDevice] ? 
            `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};` : 
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
        
        // Set base styles for the block
        return `
            /* Main block styles */
            .${id} {
                display: flex;
				${currentAlign === 'left' ? 'justify-content: flex-start;' : (currentAlign === 'right' ? 'justify-content: flex-end;' : 'justify-content: center;')}
                text-align: ${currentAlign};
                width: 100%;
                ${marginCSS}
                transition: all 0.3s ease;
            }
            
            /* Figure styles */
            .${id} figure {
                display: inline-block;
                position: relative;
                margin: 0;
                width: ${currentWidth};
                max-width: 100%;
                ${paddingCSS}
                ${borderCSS}
                ${boxShadowCSS}
                overflow: hidden;
                transition: all 0.3s ease;
            }
            
            /* Image styles */
            .${id} figure img {
                display: block;
                width: 100%;
                height: ${currentHeight};
                object-fit: ${objectFit};
                ${imageCSS}
                transition: all 0.3s ease;
            }
            
            /* Hover styles */
            .${id} figure:hover {
                ${hoverCSS}
            }
            
            .${id} figure:hover img {
                ${imageHoverCSS}
            }
            
            /* Overlay */
            ${overlayCSS}
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
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    value={imageId}
                                    render={({ open }) => (
                                        <div className="digiblocks-media-upload-wrapper">
                                            {imageUrl ? (
                                                <div className="digiblocks-media-preview">
                                                    <img src={imageUrl} alt={altText || ''} />
                                                    <div className="digiblocks-media-controls">
                                                        <Button
                                                            isPrimary
                                                            onClick={open}
                                                        >
                                                            <span className="dashicon dashicons dashicons-edit"></span>
                                                        </Button>
                                                        <Button 
                                                            isDestructive
                                                            onClick={onRemoveImage}
                                                        >
                                                            <span className="dashicon dashicons dashicons-trash"></span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Button
                                                    className="digiblocks-media-upload-button"
                                                    isPrimary
                                                    onClick={open}
                                                >
                                                    {__('Select Image', 'digiblocks')}
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                            
                            {imageUrl && (
                                <div style={{ marginTop: '16px' }}>
                                    <TextControl
                                        label={__('Alt Text', 'digiblocks')}
                                        value={altText}
                                        onChange={(value) => setAttributes({ altText: value })}
                                        help={__('Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.', 'digiblocks')}
                                    />
                                    
                                    <TextControl
                                        label={__('Title', 'digiblocks')}
                                        value={title}
                                        onChange={(value) => setAttributes({ title: value })}
                                        help={__('Shown as a tooltip when a user hovers over the image.', 'digiblocks')}
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
                            name="spacing"
                            title={__("Spacing", "digiblocks")}
                            initialOpen={false}
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
                                                                    tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                                    mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                                                }
                                                            });
                                                        }
                                                        
                                                        // Set initial border radius if not already set
                                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                                            setAttributes({
                                                                borderRadius: {
                                                                    desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                                                    tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                                                    mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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
                                onNormalChange={(value) =>
                                    setAttributes({
                                        boxShadow: value,
                                    })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({
                                        boxShadowHover: value,
                                    })
                                }
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
                            name="animation"
                            title={__("Animation", "digiblocks")}
                            initialOpen={true}
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

            <div {...blockProps}>
                <figure>
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
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    allowedTypes={['image']}
                                    value={imageId}
                                    render={({ open }) => (
                                        <Button
                                            isPrimary
                                            onClick={open}
                                        >
                                            {__('Select Image', 'digiblocks')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        </Placeholder>
                    )}
                </figure>
            </div>
        </>
    );
};

export default ImageEdit;