/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
} = wp.blockEditor;
const {
	TabPanel,
    SelectControl,
    ToggleControl,
    Button,
    Notice,
    TextControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Post Navigation block
 */
const PostNavigationEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        showPostTitle,
        showNavLabels,
        previousLabel,
        nextLabel,
        showFeaturedImage,
        imageSize,
        color,
        hoverColor,
        backgroundColor,
        backgroundHoverColor,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        padding,
        margin,
        typography,
        boxShadow,
		boxShadowHover,
        animation,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
        // Try to get the saved tab for this block
        if (window.digi.uiState) {
            const savedTab = window.digi.uiState.getActiveTab(clientId);
            if (savedTab) return savedTab;
        }
        return "options"; // Default fallback
    });
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
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

    // Image size options
    const imageSizeOptions = [
        { label: __('Thumbnail', 'digiblocks'), value: 'thumbnail' },
        { label: __('Medium', 'digiblocks'), value: 'medium' },
        { label: __('Large', 'digiblocks'), value: 'large' },
        { label: __('Full', 'digiblocks'), value: 'full' },
    ];

    // Border style options
    const borderStyleOptions = [
        { label: __("Default", "digiblocks"), value: "default" },
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
        
        // Border styling
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                ${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
            `;
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};transition: all 0.3s ease;`;
        }

		// Hover effects
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        return `
            /* Post Navigation Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
            }
            
            .${id} .digiblocks-post-navigation-links {
				display: flex;
				justify-content: space-between;
				gap: 1rem;
				width: 100%;
			}
            
            .${id} .digiblocks-post-navigation-link {
				flex: 1;
                display: inline-flex;
                align-items: center;
                color: ${color || '#333'};
                background-color: ${backgroundColor || 'transparent'};
                padding: 10px 15px;
                text-decoration: none;
                transition: all 0.3s ease;
                gap: 10px;
                ${borderCSS}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                ${typography.fontFamily ? `font-family: ${typography.fontFamily};` : ''}
                ${typography.fontSize?.[activeDevice] ? `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};` : ''}
                ${typography.fontWeight ? `font-weight: ${typography.fontWeight};` : ''}
                ${typography.fontStyle ? `font-style: ${typography.fontStyle};` : ''}
                ${typography.textTransform ? `text-transform: ${typography.textTransform};` : ''}
                ${typography.textDecoration ? `text-decoration: ${typography.textDecoration};` : ''}
                ${typography.lineHeight?.[activeDevice] ? `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};` : ''}
                ${typography.letterSpacing?.[activeDevice] ? `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};` : ''}
				${boxShadowCSS}
            }
            
            .${id} .digiblocks-post-navigation-link:hover {
                color: ${hoverColor || color || '#007bff'};
                background-color: ${backgroundHoverColor || backgroundColor || 'transparent'};
				${borderHoverColor ? `
					border-color: ${borderHoverColor};
					` : ''}
				${boxShadowHoverCSS}
            }

			.${id} .digiblocks-post-navigation-next {
				text-align: right;
			}

			.${id} .digiblocks-post-navigation-content {
				display: flex;
				flex-direction: column;
				gap: .5rem;
				flex: 1;
			}
            
            .${id} .digiblocks-post-navigation-label {
                font-size: 0.9em;
                opacity: 0.8;
            }
            
            .${id} .digiblocks-post-navigation-title {
                font-weight: 600;
            }
            
            .${id} .digiblocks-post-navigation-image {
                width: 60px;
                height: 60px;
                border-radius: 4px;
                object-fit: cover;
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
                            name="general"
                            title={__('General', 'digiblocks')}
                            initialOpen={true}
                        >
                            <Notice
                                status="warning"
                                isDismissible={false}
                                className="digiblocks-notice components-base-control"
                            >
                                {__('This is a placeholder. The actual post navigation will be displayed on single posts.', 'digiblocks')}
                            </Notice>
                            
                            <ToggleControl
                                label={__("Show Post Titles", "digiblocks")}
                                checked={showPostTitle}
                                onChange={(value) => setAttributes({ showPostTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__("Show Navigation Labels", "digiblocks")}
                                checked={showNavLabels}
                                onChange={(value) => setAttributes({ showNavLabels: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showNavLabels && (
                                <>
                                    <TextControl
                                        label={__("Previous Label", "digiblocks")}
                                        value={previousLabel}
                                        onChange={(value) => setAttributes({ previousLabel: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <TextControl
                                        label={__("Next Label", "digiblocks")}
                                        value={nextLabel}
                                        onChange={(value) => setAttributes({ nextLabel: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                            
                            <ToggleControl
                                label={__("Show Featured Images", "digiblocks")}
                                checked={showFeaturedImage}
                                onChange={(value) => setAttributes({ showFeaturedImage: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showFeaturedImage && (
                                <SelectControl
                                    label={__("Image Size", "digiblocks")}
                                    value={imageSize}
                                    options={imageSizeOptions}
                                    onChange={(value) => setAttributes({ imageSize: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                        </TabPanelBody>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="colors"
                            title={__('Colors', 'digiblocks')}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={[
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
                                ]}
                            >
                                {(tab) => {
                                    if (tab.name === 'normal') {
                                        return (
                                            <PanelColorSettings
                                                title={__("Normal Colors", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: color,
                                                        onChange: (value) => setAttributes({ color: value }),
                                                        label: __("Text Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundColor,
                                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                                        label: __("Background Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    } else if (tab.name === 'hover') {
                                        return (
                                            <PanelColorSettings
                                                title={__("Hover Colors", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: hoverColor,
                                                        onChange: (value) => setAttributes({ hoverColor: value }),
                                                        label: __("Text Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundHoverColor,
                                                        onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                                                        label: __("Background Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: borderHoverColor,
                                                        onChange: (value) => setAttributes({ borderHoverColor: value }),
                                                        label: __("Border Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    }
                                }}
                            </TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typo"
                            title={__('Typography', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__("Typography", "digiblocks")}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__('Border', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    <PanelColorSettings
                                        title={__("Border Color", "digiblocks")}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                label: __("Border Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                    
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderWidth[localActiveDevice]}
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
                            
                            <ResponsiveControl
                                label={__("Border Radius", "digiblocks")}
                            >
                                <DimensionControl
                                    values={borderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            borderRadius: {
                                                ...borderRadius,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({ boxShadowHover: value })
                                }
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
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
                                label={__("Animation Effect", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
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

    // Build class names
    const blockClasses = `digiblocks-post-navigation ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`;

    // Block props without any inline styles - we'll use the style tag for everything
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

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className="digiblocks-post-navigation-links">
                    {/* Previous Post Link (placeholder) */}
                    <a href="#" className="digiblocks-post-navigation-link digiblocks-post-navigation-prev" onClick={(e) => e.preventDefault()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        <div className="digiblocks-post-navigation-content">
                            {showNavLabels && (
                                <span className="digiblocks-post-navigation-label">{previousLabel}</span>
                            )}
                            {showPostTitle && (
                                <span className="digiblocks-post-navigation-title">{__('Previous Post Title', 'digiblocks')}</span>
                            )}
                        </div>
                        {showFeaturedImage && (
                            <img src="https://picsum.photos/500/500" alt="" className="digiblocks-post-navigation-image" />
                        )}
                    </a>
                    
                    {/* Next Post Link (placeholder) */}
                    <a href="#" className="digiblocks-post-navigation-link digiblocks-post-navigation-next" onClick={(e) => e.preventDefault()}>
                        {showFeaturedImage && (
                            <img src="https://picsum.photos/500/500" alt="" className="digiblocks-post-navigation-image" />
                        )}
                        <div className="digiblocks-post-navigation-content">
                            {showNavLabels && (
                                <span className="digiblocks-post-navigation-label">{nextLabel}</span>
                            )}
                            {showPostTitle && (
                                <span className="digiblocks-post-navigation-title">{__('Next Post Title', 'digiblocks')}</span>
                            )}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default PostNavigationEdit;