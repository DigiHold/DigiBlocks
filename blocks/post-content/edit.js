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
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    Notice,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { 
    ResponsiveControl, 
    DimensionControl, 
    TypographyControl, 
    CustomTabPanel, 
    TabPanelBody 
} = digi.components;

/**
 * Edit function for the Post Content block
 */
const PostContentEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        color,
        textAlign,
        columns,
        dropcap,
        dropCapColor,
        dropCapSize,
        dropCapSpace,
        listSpacing,
        paragraphSpacing,
        headingSpacing,
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

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        return `
            /* Post Content Block - ${id} */
            .${id} {
                color: ${color};
                text-align: ${textAlign[activeDevice]};
                ${columns[activeDevice] > 1 ? `column-count: ${columns[activeDevice]};` : ''}
                ${columns[activeDevice] > 1 ? 'column-gap: 2.5em;' : ''}
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                transition: color 0.3s ease;
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
            
            .${id} p {
                margin-bottom: ${paragraphSpacing[activeDevice]}px;
            }
            
            .${id} h1, .${id} h2, .${id} h3, .${id} h4, .${id} h5, .${id} h6 {
                margin-bottom: ${headingSpacing[activeDevice]}px;
            }
            
            .${id} ul, .${id} ol {
                margin-bottom: ${listSpacing[activeDevice]}px;
            }
            
            ${dropcap ? `
            .${id} p:first-of-type:first-letter {
                color: ${dropCapColor};
                float: left;
                font-size: ${dropCapSize[activeDevice]}em;
                line-height: 0.8;
                margin-right: ${dropCapSpace[activeDevice]}px;
                padding-top: 4px;
            }
            ` : ''}
            
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

    // Some sample post content for the preview
    const sampleContent = `
        <h2>Sample Post Heading</h2>
        <p>This is a placeholder for your post content. When published, this block will display the actual content of your post or page. You can style this content using the controls in the sidebar.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.</p>
        <h3>Another Heading</h3>
        <p>Here's some more example content that shows how your typography and spacing settings will affect the appearance of your content.</p>
        <ul>
            <li>This is a list item</li>
            <li>This is another list item</li>
            <li>And one more list item</li>
        </ul>
    `;

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
                                {__('This is a placeholder. The actual post content will be displayed on the frontend.', 'digiblocks')}
                            </Notice>
                            
                            <ToggleControl
                                label={__("Enable Drop Cap", "digiblocks")}
                                checked={dropcap}
                                onChange={(value) => setAttributes({ dropcap: value })}
                                help={__("Enlarge the first letter of the first paragraph.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {dropcap && (
                                <>
                                    <PanelColorSettings
                                        title={__("Drop Cap Color", "digiblocks")}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: dropCapColor,
                                                onChange: (value) => setAttributes({ dropCapColor: value }),
                                                label: __("Color", "digiblocks"),
                                            }
                                        ]}
                                    />
                                    
                                    <ResponsiveControl
                                        label={__("Drop Cap Size", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={dropCapSize[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    dropCapSize: {
                                                        ...dropCapSize,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={1}
                                            max={10}
                                            step={0.1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Drop Cap Spacing", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={dropCapSpace[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    dropCapSpace: {
                                                        ...dropCapSpace,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={0}
                                            max={50}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                            
                            <ResponsiveControl
                                label={__("Content Columns", "digiblocks")}
                            >
                                <RangeControl
                                    value={columns[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            columns: {
                                                ...columns,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={1}
                                    max={localActiveDevice === 'desktop' ? 3 : (localActiveDevice === 'tablet' ? 2 : 1)}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Paragraph Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={paragraphSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            paragraphSpacing: {
                                                ...paragraphSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={60}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Heading Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={headingSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            headingSpacing: {
                                                ...headingSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={60}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("List Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={listSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            listSpacing: {
                                                ...listSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={60}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ToggleGroupControl
                                label={__("Text Alignment", "digiblocks")}
                                value={textAlign[localActiveDevice]}
                                onChange={(value) =>
                                    setAttributes({
                                        textAlign: {
                                            ...textAlign,
                                            [localActiveDevice]: value,
                                        },
                                    })
                                }
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
                                <ToggleGroupControlOption 
                                    value="justify" 
                                    label={__("Justify", "digiblocks")}
                                />
                            </ToggleGroupControl>
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
                                title={__("Text Color", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: color,
                                        onChange: (value) => setAttributes({ color: value }),
                                        label: __("Color", "digiblocks"),
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
                                label={__("Content Typography", "digiblocks")}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.7, tablet: 1.6, mobile: 1.5 },
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
    const blockClasses = `digiblocks-post-content ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`;

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

            <div {...blockProps} dangerouslySetInnerHTML={{__html: sampleContent}}></div>
        </>
    );
};

export default PostContentEdit;