/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
} = wp.blockEditor;
const {
    ToggleControl,
    SelectControl,
    RangeControl,
    Notice,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the DigiCommerce Product Gallery block
 */
const DigiProductGalleryEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        visibility,
        customClasses,
        thumbnailPosition,
        enableLightbox,
        galleryLayout,
        thumbnailColumns,
        imageSize,
        thumbnailSize,
        mainImageBorderRadius,
        thumbnailBorderRadius,
        mainImageShadow,
        mainImageShadowHover,
        thumbnailShadow,
        thumbnailShadowHover,
        spacing,
        thumbnailSpacing,
        padding,
        margin,
        lightboxBackgroundColor,
        animation,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
        if (window.digi.uiState) {
            const savedTab = window.digi.uiState.getActiveTab(clientId);
            if (savedTab) return savedTab;
        }
        return "options";
    });

    // State for active main image
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        return unsubscribe;
    }, []);

    // Use ref for animation preview
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

    // Mock images for placeholder - using modern product images
    const mockImages = [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&crop=center',
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
        { label: __('Thumbnail', 'digiblocks'), value: 'thumbnail' },
        { label: __('Medium', 'digiblocks'), value: 'medium' },
        { label: __('Large', 'digiblocks'), value: 'large' },
        { label: __('Full', 'digiblocks'), value: 'full' }
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

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        return `
            /* DigiCommerce Product Gallery Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                width: 100%;
            }
            
            /* Gallery Container */
            .${id} .digiblocks-product-gallery {
                display: flex;
                flex-direction: ${thumbnailPosition === 'left' ? 'row' : 'column'};
                gap: ${spacing[activeDevice]}px;
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-left {
                flex-direction: row;
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-right {
                flex-direction: row-reverse;
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-bottom {
                flex-direction: column;
            }
            
            /* Main Image */
            .${id} .digiblocks-main-image {
				width: 100%;
                flex: 1;
                position: relative;
                overflow: hidden;
                cursor: ${enableLightbox ? 'zoom-in' : 'default'};
                ${getDimensionCSS(mainImageBorderRadius, 'border-radius', activeDevice)}
                ${mainImageShadow?.enable ? `box-shadow: ${mainImageShadow.horizontal}px ${mainImageShadow.vertical}px ${mainImageShadow.blur}px ${mainImageShadow.spread}px ${mainImageShadow.color};` : ''}
                transition: all 0.3s ease;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            
            .${id} .digiblocks-main-image:hover {
                ${mainImageShadowHover?.enable ? `box-shadow: ${mainImageShadowHover.horizontal}px ${mainImageShadowHover.vertical}px ${mainImageShadowHover.blur}px ${mainImageShadowHover.spread}px ${mainImageShadowHover.color};` : ''}
                transform: translateY(-3px);
            }
            
            .${id} .digiblocks-main-image img {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.3s ease;
                border-radius: inherit;
            }
            
            .${id} .digiblocks-main-image:hover img {
                transform: scale(1.03);
            }
            
            /* Thumbnails Container */
            .${id} .digiblocks-thumbnails {
                display: grid;
                gap: ${thumbnailSpacing[activeDevice]}px;
				width: 100%;
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-bottom .digiblocks-thumbnails,
            .${id} .digiblocks-product-gallery.thumbnail-top .digiblocks-thumbnails {
                grid-template-columns: repeat(${thumbnailColumns[activeDevice]}, 1fr);
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails,
            .${id} .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails {
                grid-template-columns: 1fr;
                width: 140px;
                max-height: 450px;
                overflow-y: auto;
                overflow-x: hidden;
                scrollbar-width: thin;
                scrollbar-color: rgba(0,0,0,0.2) transparent;
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails::-webkit-scrollbar,
            .${id} .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails::-webkit-scrollbar {
                width: 4px;
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails::-webkit-scrollbar-track,
            .${id} .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails::-webkit-scrollbar-track {
                background: transparent;
            }
            
            .${id} .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails::-webkit-scrollbar-thumb,
            .${id} .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails::-webkit-scrollbar-thumb {
                background: rgba(0,0,0,0.2);
                border-radius: 2px;
            }
            
            /* Thumbnail Items */
            .${id} .digiblocks-thumbnail {
                position: relative;
                cursor: pointer;
                overflow: hidden;
                ${getDimensionCSS(thumbnailBorderRadius, 'border-radius', activeDevice)}
                ${thumbnailShadow?.enable ? `box-shadow: ${thumbnailShadow.horizontal}px ${thumbnailShadow.vertical}px ${thumbnailShadow.blur}px ${thumbnailShadow.spread}px ${thumbnailShadow.color};` : ''}
                transition: all 0.3s ease;
                opacity: 0.6;
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            }
            
            .${id} .digiblocks-thumbnail.active {
                opacity: 1;
                transform: scale(1.05);
            }
            
            .${id} .digiblocks-thumbnail:hover {
                ${thumbnailShadowHover?.enable ? `box-shadow: ${thumbnailShadowHover.horizontal}px ${thumbnailShadowHover.vertical}px ${thumbnailShadowHover.blur}px ${thumbnailShadowHover.spread}px ${thumbnailShadowHover.color};` : ''}
                opacity: 1;
                transform: scale(1.02);
            }
            
            .${id} .digiblocks-thumbnail img {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.3s ease;
                aspect-ratio: 1;
                object-fit: cover;
                border-radius: inherit;
            }
            
            /* Lightbox Icon */
            .${id} .digiblocks-lightbox-icon {
                position: absolute;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 50%;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255, 255, 255, 0.8);
            }
            
            .${id} .digiblocks-main-image:hover .digiblocks-lightbox-icon {
                opacity: 1;
                transform: scale(1.05);
            }
            
            .${id} .digiblocks-lightbox-icon svg {
                width: 22px;
                height: 22px;
                fill: #333;
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
            
            /* Responsive Styles */
            @media (max-width: 991px) {
                .${id} .digiblocks-product-gallery {
                    gap: ${spacing.tablet || spacing.desktop}px;
                }
                
                .${id} .digiblocks-thumbnails {
                    gap: ${thumbnailSpacing.tablet || thumbnailSpacing.desktop}px;
                }
                
                .${id} .digiblocks-product-gallery.thumbnail-bottom .digiblocks-thumbnails,
                .${id} .digiblocks-product-gallery.thumbnail-top .digiblocks-thumbnails {
                    grid-template-columns: repeat(${thumbnailColumns.tablet || thumbnailColumns.desktop}, 1fr);
                }
                
                .${id} .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails,
                .${id} .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails {
                    width: 120px;
                }
            }
            
            @media (max-width: 767px) {
                .${id} .digiblocks-product-gallery {
                    gap: ${spacing.mobile || spacing.desktop}px;
                    flex-direction: column !important;
                }
                
                .${id} .digiblocks-thumbnails {
                    gap: ${thumbnailSpacing.mobile || thumbnailSpacing.desktop}px;
                }
                
                .${id} .digiblocks-thumbnails {
                    grid-template-columns: repeat(${thumbnailColumns.mobile || thumbnailColumns.desktop}, 1fr) !important;
                    width: 100% !important;
                    max-height: none !important;
                }
            }
        `;
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="layout"
                            title={__('Layout', 'digiblocks')}
                            initialOpen={true}
                        >
							<Notice
								status="warning"
								isDismissible={false}
								className="digiblocks-notice components-base-control"
							>
								{__('This is a placeholder gallery. The actual DigiCommerce product images will be displayed on single product pages.', 'digiblocks')}
							</Notice>

                            <ToggleGroupControl
                                label={__("Thumbnail Position", "digiblocks")}
                                value={thumbnailPosition}
                                onChange={(value) => setAttributes({ thumbnailPosition: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="bottom" 
                                    label={__("Bottom", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="left" 
                                    label={__("Left", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="right" 
                                    label={__("Right", "digiblocks")}
                                />
                            </ToggleGroupControl>

							{thumbnailPosition === 'bottom' && (
								<ResponsiveControl
									label={__('Thumbnail Columns', 'digiblocks')}
								>
									<RangeControl
										value={thumbnailColumns[localActiveDevice]}
										onChange={(value) =>
											setAttributes({
												thumbnailColumns: {
													...thumbnailColumns,
													[localActiveDevice]: value,
												},
											})
										}
										min={1}
										max={8}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</ResponsiveControl>
							)}

                            <ToggleControl
                                label={__('Enable Lightbox', 'digiblocks')}
                                checked={enableLightbox}
                                onChange={(value) => setAttributes({ enableLightbox: value })}
                                help={__('Enable lightbox functionality for gallery images', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="images"
                            title={__('Image Settings', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__('Main Image Size', 'digiblocks')}
                                value={imageSize}
                                options={imageSizeOptions}
                                onChange={(value) => setAttributes({ imageSize: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <SelectControl
                                label={__('Thumbnail Size', 'digiblocks')}
                                value={thumbnailSize}
                                options={imageSizeOptions}
                                onChange={(value) => setAttributes({ thumbnailSize: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={true}
                        >
                            <ResponsiveControl
                                label={__('Gallery Spacing', 'digiblocks')}
                            >
                                <RangeControl
                                    value={spacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            spacing: {
                                                ...spacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={80}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl
                                label={__('Thumbnail Spacing', 'digiblocks')}
                            >
                                <RangeControl
                                    value={thumbnailSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            thumbnailSpacing: {
                                                ...thumbnailSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={40}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl
                                label={__('Padding', 'digiblocks')}
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
                                label={__('Margin', 'digiblocks')}
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
                            name="borders"
                            title={__('Borders & Radius', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Main Image Border Radius', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={mainImageBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            mainImageBorderRadius: {
                                                ...mainImageBorderRadius,
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

                            <ResponsiveControl
                                label={__('Thumbnail Border Radius', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={thumbnailBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            thumbnailBorderRadius: {
                                                ...thumbnailBorderRadius,
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
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="shadows"
                            title={__('Shadows', 'digiblocks')}
                            initialOpen={false}
                        >
                            <BoxShadowControl
                                label={__('Main Image Shadow', 'digiblocks')}
                                normalValue={mainImageShadow}
                                hoverValue={mainImageShadowHover}
                                onNormalChange={(value) => setAttributes({ mainImageShadow: value })}
                                onHoverChange={(value) => setAttributes({ mainImageShadowHover: value })}
                            />
							
							<div style={{ marginTop: '1rem' }}>
								<BoxShadowControl
									label={__('Thumbnail Shadow', 'digiblocks')}
									normalValue={thumbnailShadow}
									hoverValue={thumbnailShadowHover}
									onNormalChange={(value) => setAttributes({ thumbnailShadow: value })}
									onHoverChange={(value) => setAttributes({ thumbnailShadowHover: value })}
								/>
							</div>
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__('Animation', 'digiblocks')}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__('Animation Effect', 'digiblocks')}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {animation && animation !== 'none' && (
                                <div style={{ marginTop: '10px' }}>
                                    <Button
                                        variant="secondary"
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
                            title={__('Additional', 'digiblocks')}
                            initialOpen={false}
                        >
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
                                </p>
                            </div>

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

    // Build class names
    const blockClasses = `digiblocks-digi-product-gallery-block ${id} ${customClasses || ""}`;

    // Block props
    const blockProps = useBlockProps({
        className: blockClasses,
        id: anchor || null,
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

            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className={`digiblocks-product-gallery thumbnail-${thumbnailPosition}`}>
                    {/* Main Image */}
                    <div className="digiblocks-main-image">
                        <img 
                            src={mockImages[activeImageIndex]} 
                            alt={__('DigiCommerce Product Image', 'digiblocks')}
                        />
                        {enableLightbox && (
                            <div className="digiblocks-lightbox-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"/></svg>
                            </div>
                        )}
                    </div>

                    {/* Thumbnails */}
                    <div className="digiblocks-thumbnails">
                        {mockImages.map((image, index) => (
                            <div 
                                key={index}
                                className={`digiblocks-thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                                onClick={() => setActiveImageIndex(index)}
                            >
                                <img 
                                    src={image} 
                                    alt={__('DigiCommerce Product Thumbnail', 'digiblocks') + ' ' + (index + 1)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DigiProductGalleryEdit;