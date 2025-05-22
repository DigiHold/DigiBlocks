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
    RangeControl,
    ToggleControl,
    SelectControl,
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
const { ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody, ResponsiveButtonGroup } = digi.components;

/**
 * Edit function for the Post Meta block
 */
const PostMetaEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        displayAuthor,
        displayDate,
        displayCategories,
        displayTags,
        iconDisplay,
        separator,
        layout,
        align,
        spacing,
        textColor,
        textHoverColor,
        iconColor,
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
        
        // Get spacing based on the current device
        const itemSpacing = spacing && spacing[activeDevice] ? spacing[activeDevice] : 15;

		// Alignment CSS
        let alignCSS = '';
        if (align && align[activeDevice]) {
            if (align[activeDevice] === 'center') {
                alignCSS = 'justify-content: center;';
            } else if (align[activeDevice] === 'right') {
                alignCSS = 'justify-content: flex-end;';
            } else if (align[activeDevice] === 'left') {
                alignCSS = 'justify-content: flex-start;';
            }
        }
        
        // Calculate separator styles
        let separatorCSS = '';
        if (separator === 'dot') {
            separatorCSS = `
				.${id} .digiblocks-meta-item:not(:last-child)::after {
					content: "•";
					display: inline-block;
					margin-left: ${itemSpacing / 2}px;
					color: ${textColor || 'inherit'};
				}
				body.rtl .${id} .digiblocks-meta-item:not(:last-child)::after {
					margin-right: ${itemSpacing / 2}px;
				}
            `;
        } else if (separator === 'line') {
            separatorCSS = `
                .${id} .digiblocks-meta-item:not(:last-child)::after {
                    content: "|";
                    display: inline-block;
                    margin-left: ${itemSpacing / 2}px;
                    color: ${textColor || 'inherit'};
                }
				body.rtl .${id} .digiblocks-meta-item:not(:last-child)::after {
					margin-right: ${itemSpacing / 2}px;
				}
            `;
        } else if (separator === 'slash') {
            separatorCSS = `
                .${id} .digiblocks-meta-item:not(:last-child)::after {
                    content: "/";
                    display: inline-block;
                    margin-left: ${itemSpacing / 2}px;
                    color: ${textColor || 'inherit'};
                }
				body.rtl .${id} .digiblocks-meta-item:not(:last-child)::after {
					margin-right: ${itemSpacing / 2}px;
				}
            `;
        }
        
        return `
            /* Post Meta Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                
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
            
            .${id} .digiblocks-meta-list {
                display: flex;
                flex-wrap: wrap;
                ${alignCSS}
                ${layout === 'block' ? 'flex-direction: column;' : ''}
                gap: ${itemSpacing}px;
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            .${id} .digiblocks-meta-item {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${textColor || 'inherit'};
                transition: color 0.3s ease;
            }

			.${id} .digiblocks-meta-item a {
				color: ${textColor || 'inherit'};
				text-decoration: none;
			}
            
            .${id} .digiblocks-meta-item a:hover {
                color: ${textHoverColor || textColor || 'inherit'};
            }
            
            .${id} .digiblocks-meta-icon {
                display: inline-flex;
                color: ${iconColor || textColor || 'inherit'};
            }
            
            .${id} .digiblocks-meta-icon svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
            }
            
            ${separatorCSS}
            
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
                                {__('This is a placeholder. The actual post metadata will be displayed on single posts and archives.', 'digiblocks')}
                            </Notice>

                            <ToggleControl
                                label={__('Display Author', 'digiblocks')}
                                checked={displayAuthor}
                                onChange={(value) => setAttributes({ displayAuthor: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Display Date', 'digiblocks')}
                                checked={displayDate}
                                onChange={(value) => setAttributes({ displayDate: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Display Categories', 'digiblocks')}
                                checked={displayCategories}
                                onChange={(value) => setAttributes({ displayCategories: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Display Tags', 'digiblocks')}
                                checked={displayTags}
                                onChange={(value) => setAttributes({ displayTags: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Display Icons', 'digiblocks')}
                                checked={iconDisplay}
                                onChange={(value) => setAttributes({ iconDisplay: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
							<ToggleGroupControl
                                label={__("Layout", "digiblocks")}
                                value={layout}
                                onChange={(value) => setAttributes({ layout: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="inline" 
                                    label={__("Inline", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="block" 
                                    label={__("Block", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
							<ToggleGroupControl
                                label={__("Separator", "digiblocks")}
                                value={separator}
                                onChange={(value) => setAttributes({ separator: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="none" 
                                    label={__("None", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="dot" 
                                    label={__("Dot", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="line" 
                                    label={__("Line", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="slash" 
                                    label={__("Slash", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
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
                            
                            <ResponsiveControl
								label={__('Item Spacing', 'digiblocks')}
							>
								<RangeControl
									value={spacing[localActiveDevice]}
									onChange={(value) => {
										const newSpacing = { ...spacing };
										newSpacing[localActiveDevice] = value;
										setAttributes({ spacing: newSpacing });
									}}
									min={0}
									max={50}
									step={1}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
							</ResponsiveControl>
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
                                        value: textHoverColor,
                                        onChange: (value) => setAttributes({ textHoverColor: value }),
                                        label: __("Text Hover Color", "digiblocks"),
                                    },
                                    {
                                        value: iconColor,
                                        onChange: (value) => setAttributes({ iconColor: value }),
                                        label: __("Icon Color", "digiblocks"),
                                    },
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
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
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
    const blockClasses = `digiblocks-post-meta ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`;

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: blockClasses,
        id: anchor || null, 
    });

    // SVG icons for the meta items
    const authorIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>';
    const dateIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4 272 112c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>';
    const categoriesIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-156.1 0c-17 0-33.3-6.7-45.3-18.7L210.7 73.4c-6-6-14.1-9.4-22.6-9.4L64 64zM0 96C0 60.7 28.7 32 64 32l124.1 0c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4L448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"/></svg>';
    const tagsIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M32 229.5L32 80c0-8.8 7.2-16 16-16l149.5 0c8.5 0 16.6 3.4 22.6 9.4l176 176c12.5 12.5 12.5 32.8 0 45.3L262.6 428.1c-12.5 12.5-32.8 12.5-45.3 0l-176-176L18.7 274.7l22.6-22.6c-6-6-9.4-14.1-9.4-22.6zm-32 0c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80L0 229.5zM112 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>';

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
                <ul className="digiblocks-meta-list">
                    {displayAuthor && (
                        <li className="digiblocks-meta-item">
							{iconDisplay && (
								<span className="digiblocks-meta-icon" dangerouslySetInnerHTML={{ __html: authorIcon }} />
							)}
							<span className="digiblocks-meta-value">{__('John Doe', 'digiblocks')}</span>
                        </li>
                    )}
                    
                    {displayDate && (
                        <li className="digiblocks-meta-item">
							{iconDisplay && (
								<span className="digiblocks-meta-icon" dangerouslySetInnerHTML={{ __html: dateIcon }} />
							)}
							<span className="digiblocks-meta-value">{__('May 20, 2025', 'digiblocks')}</span>
                        </li>
                    )}
                    
                    {displayCategories && (
                        <li className="digiblocks-meta-item">
							{iconDisplay && (
								<span className="digiblocks-meta-icon" dangerouslySetInnerHTML={{ __html: categoriesIcon }} />
							)}
							<span className="digiblocks-meta-value">{__('Web Design, WordPress', 'digiblocks')}</span>
                        </li>
                    )}
                    
                    {displayTags && (
                        <li className="digiblocks-meta-item">
							{iconDisplay && (
								<span className="digiblocks-meta-icon" dangerouslySetInnerHTML={{ __html: tagsIcon }} />
							)}
							<span className="digiblocks-meta-value">{__('Design, Development, Blocks', 'digiblocks')}</span>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default PostMetaEdit;