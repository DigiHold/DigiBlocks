/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    RichText,
} = wp.blockEditor;
const {
    TextareaControl,
    ToggleControl,
    SelectControl,
    Button,
    TabPanel,
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
 * Edit function for the Copyright block
 */
const CopyrightEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        copyrightText,
        textAlign,
        textColor,
        textHoverColor,
        linkColor,
        linkHoverColor,
        typography,
        padding,
        margin,
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

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Typography CSS
        let typographyCSS = '';
        if (typography) {
            if (typography.fontFamily) {
                typographyCSS += `font-family: ${typography.fontFamily};`;
            }
            
            if (typography.fontSize && typography.fontSize[activeDevice]) {
                typographyCSS += `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};`;
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
                typographyCSS += `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};`;
            }
            
            if (typography.letterSpacing && typography.letterSpacing[activeDevice]) {
                typographyCSS += `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};`;
            }
        }
        
        return `
            /* Copyright Block - ${id} */
            .${id} {
                text-align: ${textAlign[activeDevice] || 'left'};
                color: ${textColor || '#666666'};
                ${typographyCSS}
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                transition: color 0.3s ease;
            }

            .${id}:hover {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
            }

            .${id} strong {
                color: inherit;
            }

            .${id} a {
                color: ${linkColor || textColor || '#666666'};
                text-decoration: inherit;
                transition: color 0.3s ease;
            }

            .${id} a:hover {
                color: ${linkHoverColor || linkColor || textColor || '#666666'};
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

    // Process copyright text to show preview with replaced placeholders
    const processPreviewText = (text) => {
        if (!text) return '';
        
        const currentYear = new Date().getFullYear();
        const siteName = 'Your Site Name'; // Placeholder for preview
        const siteUrl = 'https://yoursite.com'; // Placeholder for preview
        
        return text
            .replace(/{year}/g, currentYear)
            .replace(/{sitename}/g, siteName)
            .replace(/{siteurl}/g, `<a href="${siteUrl}">${siteName}</a>`);
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="content"
                            title={__('Content', 'digiblocks')}
                            initialOpen={true}
                        >
                            <TextareaControl
                                label={__('Copyright Text', 'digiblocks')}
                                value={copyrightText}
                                onChange={(value) => setAttributes({ copyrightText: value })}
                                placeholder={__('© {year} {sitename}. All rights reserved.', 'digiblocks')}
                                help={__('Use {year} for current year, {sitename} for site name, and {siteurl} for site name with link.', 'digiblocks')}
                                rows={3}
                                __nextHasNoMarginBottom={true}
                            />

                            <ResponsiveButtonGroup
                                label={__('Text Alignment', 'digiblocks')}
                                value={textAlign}
                                onChange={(value) => setAttributes({ textAlign: value })}
                                options={[
                                    { label: __('Left', 'digiblocks'), value: 'left' },
                                    { label: __('Center', 'digiblocks'), value: 'center' },
                                    { label: __('Right', 'digiblocks'), value: 'right' },
                                ]}
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
                            title={__("Colors", "digiblocks")}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => {
                                    if (tab.name === 'normal') {
                                        return (
                                            <PanelColorSettings
                                                title={__("Colors", "digiblocks")}
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
                                                ]}
                                            />
                                        );
                                    } else {
                                        return (
                                            <PanelColorSettings
                                                title={__("Hover Colors", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: textHoverColor,
                                                        onChange: (value) => setAttributes({ textHoverColor: value }),
                                                        label: __("Text Hover Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: linkHoverColor,
                                                        onChange: (value) => setAttributes({ linkHoverColor: value }),
                                                        label: __("Link Hover Color", "digiblocks"),
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
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__("Typography", "digiblocks")}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    fontSizeUnit: 'px',
                                    fontWeight: 'normal',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
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
        className: `digiblocks-copyright ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`,
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
                <div 
                    className="digiblocks-copyright-text"
                    dangerouslySetInnerHTML={{ 
                        __html: processPreviewText(copyrightText || __('© {year} {sitename}. All rights reserved.', 'digiblocks'))
                    }}
                />
            </div>
        </>
    );
};

export default CopyrightEdit;