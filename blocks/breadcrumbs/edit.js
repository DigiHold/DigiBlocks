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
    TextControl,
    ToggleControl,
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
const { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Breadcrumbs block
 */
const BreadcrumbsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        align,
        textColor,
        linkColor,
        linkHoverColor,
        separatorColor,
        typography,
        margin,
        animation,
        showHome,
        homeText,
        showCurrent,
        useYoast,
        useRankMath,
        separatorSize,
        separatorSpacing,
        useMicrodata,
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
        
        return `
            /* Breadcrumbs Block - ${id} */
            .${id} {
                text-align: ${align[activeDevice]};
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-breadcrumb-list {
                display: inline-flex;
                flex-wrap: wrap;
                align-items: center;
                list-style: none;
                margin: 0;
                padding: 0;
            }
            
            .${id} .digiblocks-breadcrumb-item {
                display: flex;
                align-items: center;
                color: ${textColor};
                /* Typography */
                ${typography.fontFamily ? `font-family: ${typography.fontFamily};` : ''}
                ${typography.fontSize?.[activeDevice] ? `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};` : ''}
                ${typography.fontWeight ? `font-weight: ${typography.fontWeight};` : ''}
                ${typography.fontStyle ? `font-style: ${typography.fontStyle};` : ''}
                ${typography.textTransform ? `text-transform: ${typography.textTransform};` : ''}
                ${typography.textDecoration ? `text-decoration: ${typography.textDecoration};` : ''}
                ${typography.lineHeight?.[activeDevice] ? `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};` : ''}
                ${typography.letterSpacing?.[activeDevice] ? `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-breadcrumb-link {
                color: ${linkColor};
                text-decoration: none;
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-breadcrumb-link:hover {
                color: ${linkHoverColor};
            }
            
            .${id} .digiblocks-breadcrumb-separator {
                display: flex;
                align-items: center;
                margin: 0 ${separatorSpacing[activeDevice]}px;
                color: ${separatorColor};
            }
            
            .${id} .digiblocks-breadcrumb-separator svg {
                width: ${separatorSize[activeDevice]}px;
                height: ${separatorSize[activeDevice]}px;
                fill: currentColor;
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
                                {__('This is a placeholder. The actual breadcrumb trail will be displayed on the frontend.', 'digiblocks')}
                            </Notice>

                            <ResponsiveButtonGroup
                                label={__('Alignment', 'digiblocks')}
                                value={align}
                                onChange={(value) => setAttributes({ align: value })}
                                options={[
                                    { label: __('Left', 'digiblocks'), value: 'left' },
                                    { label: __('Center', 'digiblocks'), value: 'center' },
                                    { label: __('Right', 'digiblocks'), value: 'right' },
                                ]}
                            />
                            
                            <ToggleControl
                                label={__('Show Home Link', 'digiblocks')}
                                checked={showHome}
                                onChange={(value) => setAttributes({ showHome: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showHome && (
                                <TextControl
                                    label={__('Home Text', 'digiblocks')}
                                    value={homeText}
                                    onChange={(value) => setAttributes({ homeText: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                    placeholder={__('Home', 'digiblocks')}
                                />
                            )}
                            
                            <ToggleControl
                                label={__('Show Current Page', 'digiblocks')}
                                checked={showCurrent}
                                onChange={(value) => setAttributes({ showCurrent: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Add Schema Markup (Microdata)', 'digiblocks')}
                                checked={useMicrodata}
                                onChange={(value) => setAttributes({ useMicrodata: value })}
                                help={__('Adds structured data to help search engines understand your content.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="separator"
                            title={__('Separator', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__("Separator Size", "digiblocks")}
                            >
                                <RangeControl
                                    value={separatorSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            separatorSize: {
                                                ...separatorSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={6}
                                    max={36}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Separator Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={separatorSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            separatorSpacing: {
                                                ...separatorSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={30}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="integrations"
                            title={__('Integrations', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Use Yoast SEO Breadcrumbs', 'digiblocks')}
                                checked={useYoast}
                                onChange={(value) => setAttributes({ useYoast: value })}
                                help={__('If Yoast SEO is activated, use its breadcrumb format.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Use Rank Math Breadcrumbs', 'digiblocks')}
                                checked={useRankMath}
                                onChange={(value) => setAttributes({ useRankMath: value })}
                                help={__('If Rank Math is activated, use its breadcrumb format.', 'digiblocks')}
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
                            name="colors"
                            title={__('Colors', 'digiblocks')}
                            initialOpen={true}
                        >
                            <PanelColorSettings
                                title={__("Text & Link Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: textColor,
                                        onChange: (value) => setAttributes({ textColor: value }),
                                        label: __("Text Color", "digiblocks"),
                                    },
                                    {
                                        value: linkColor,
                                        onChange: (value) => setAttributes({ linkColor: value }),
                                        label: __("Link Color", "digiblocks"),
                                    },
                                    {
                                        value: linkHoverColor,
                                        onChange: (value) => setAttributes({ linkHoverColor: value }),
                                        label: __("Link Hover Color", "digiblocks"),
                                    },
                                    {
                                        value: separatorColor,
                                        onChange: (value) => setAttributes({ separatorColor: value }),
                                        label: __("Separator Color", "digiblocks"),
                                    }
                                ]}
                            />
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
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={false}
                        >
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
    const blockClasses = `digiblocks-breadcrumbs ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`;

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: blockClasses,
        id: anchor || null, 
    });

    // Function to render a placeholder breadcrumb trail
    const renderPlaceholderBreadcrumbs = () => {
        const items = [
            { label: homeText || __('Home', 'digiblocks'), url: '#' },
            { label: __('Category', 'digiblocks'), url: '#' },
            { label: __('Current Page', 'digiblocks'), url: '', current: true }
        ];

        return (
            <nav aria-label={__('Breadcrumb', 'digiblocks')}>
                <ol className="digiblocks-breadcrumb-list">
                    {items.map((item, index) => {
                        // For the last item, check if we should show it
                        if (index === items.length - 1 && !showCurrent) {
                            return null;
                        }
                        
                        // For the home item, check if we should show it
                        if (index === 0 && !showHome) {
                            return null;
                        }
                        
                        // Generate the separator (except for the first item)
                        const showSeparator = index < items.length - 1;
						const separator = showSeparator ? (
							<span className="digiblocks-breadcrumb-separator" aria-hidden="true">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em">
									<path d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"/>
								</svg>
							</span>
						) : null;

						return (
							<li key={index} className="digiblocks-breadcrumb-item">
								{item.current ? (
									<span className="digiblocks-breadcrumb-current">{item.label}</span>
								) : (
									<>
										<a href={item.url} className="digiblocks-breadcrumb-link">{item.label}</a>
										{separator}
									</>
								)}
							</li>
						);
                    })}
                </ol>
            </nav>
        );
    };

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
                {renderPlaceholderBreadcrumbs()}
            </div>
        </>
    );
};

export default BreadcrumbsEdit;