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
    SelectControl,
    TextControl,
    ToggleControl,
    RangeControl,
    Button,
    Notice,
    TabPanel,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;
const { useSelect } = wp.data;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveButtonGroup, ResponsiveControl, ResponsiveRangeControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Table of Contents block
 */
const TableOfContentsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        title,
        showTitle,
        titleTag,
        headingSelector,
        maxDepth,
        listType,
        scrollOffset,
        enableSmoothScroll,
        enableSEOMarkup,
        minimizeBox,
        showAsCollapsible,
        initialCollapseState,
        collapseButtonText,
        align,
        width,
        maxWidth,
        backgroundColor,
        titleColor,
        textColor,
        linkColor,
        linkHoverColor,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        padding,
        margin,
        boxShadow,
		boxShadowHover,
        titleTypography,
        typography,
        listSpacing,
        animation,
    } = attributes;

    // State for active tab and device
    const [activeTab, setActiveTab] = useState(() => {
        // Try to get the saved tab for this block
        if (window.digi.uiState) {
            const savedTab = window.digi.uiState.getActiveTab(clientId);
            if (savedTab) return savedTab;
        }
        return "options"; // Default fallback
    });
    
    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // Create unique class
    useBlockId(id, clientId, setAttributes);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    // Animation preview ref
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

    // Get all blocks from the current editor to find headings for the preview
    const headings = useSelect((select) => {
        const { getBlocks } = select('core/block-editor');
        const blocks = getBlocks();
        
        // Recursive function to find heading blocks
        const findHeadingBlocks = (blocks, currentDepth = 1) => {
            if (currentDepth > maxDepth) return [];
            
            return blocks.reduce((foundHeadings, block) => {
                // Check if this is a heading block
                if (block.name === 'core/heading') {
                    // Only include headings that match our selector
                    const level = block.attributes.level;
                    if (
                        (headingSelector === 'h2' && level === 2) || 
                        (headingSelector === 'h2,h3' && (level === 2 || level === 3)) ||
                        (headingSelector === 'h2,h3,h4' && (level === 2 || level === 3 || level === 4))
                    ) {
                        foundHeadings.push({
                            content: block.attributes.content,
                            level: level,
                            anchor: block.attributes.anchor || '',
                            // Generate an ID from the content if no anchor is available
                            id: block.attributes.anchor || 
                                block.attributes.content
                                    .toLowerCase()
                                    .replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
                                    .replace(/[^\w\s-]/g, "") // Remove special chars
                                    .replace(/\s+/g, "-") // Replace spaces with hyphens
                                    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
                        });
                    }
                }
                
                // If this block has inner blocks, recursively search those
                if (block.innerBlocks && block.innerBlocks.length) {
                    return [...foundHeadings, ...findHeadingBlocks(block.innerBlocks, currentDepth + 1)];
                }
                
                return foundHeadings;
            }, []);
        };
        
        return findHeadingBlocks(blocks);
    }, [headingSelector, maxDepth]);

    // Heading tag options
    const headingTagOptions = [
        { label: __('H2', 'digiblocks'), value: 'h2' },
        { label: __('H3', 'digiblocks'), value: 'h3' },
        { label: __('H4', 'digiblocks'), value: 'h4' },
        { label: __('H5', 'digiblocks'), value: 'h5' },
        { label: __('H6', 'digiblocks'), value: 'h6' },
        { label: __('Div', 'digiblocks'), value: 'div' },
    ];

    // Heading selector options
    const headingSelectorOptions = [
        { label: __('H2 Only', 'digiblocks'), value: 'h2' },
        { label: __('H2 and H3', 'digiblocks'), value: 'h2,h3' },
        { label: __('H2, H3, and H4', 'digiblocks'), value: 'h2,h3,h4' },
    ];

    // List type options
    const listTypeOptions = [
        { label: __('Unordered List', 'digiblocks'), value: 'ul' },
        { label: __('Ordered List', 'digiblocks'), value: 'ol' },
    ];

    // Border style options
    const borderStyleOptions = [
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Solid', 'digiblocks'), value: 'solid' },
        { label: __('Dashed', 'digiblocks'), value: 'dashed' },
        { label: __('Dotted', 'digiblocks'), value: 'dotted' },
        { label: __('Double', 'digiblocks'), value: 'double' },
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
        
        // Width and max-width handling
        const widthValue = width[activeDevice]?.value ? `${width[activeDevice].value}${width[activeDevice].unit}` : '100%';
        const maxWidthValue = maxWidth[activeDevice]?.value ? `${maxWidth[activeDevice].value}${maxWidth[activeDevice].unit}` : 'none';
        
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
            /* Table of Contents Block - ${id} */
            .${id} {
                width: ${widthValue};
                max-width: ${maxWidthValue};
                margin-left: ${align[activeDevice] === 'center' ? 'auto' : (align[activeDevice] === 'right' ? 'auto' : '0')};
                margin-right: ${align[activeDevice] === 'center' ? 'auto' : (align[activeDevice] === 'left' ? 'auto' : '0')};
                text-align: ${align[activeDevice]};
                ${getDimensionCSS(margin, 'margin', activeDevice)}
            }
            
            .${id} .digiblocks-toc-container {
                position: relative;
                background-color: ${backgroundColor};
                ${borderStyle !== 'none' ? `
                    border-style: ${borderStyle};
                    border-color: ${borderColor};
                    ${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
                    ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                ` : ''}
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${boxShadowCSS}
            }
            
            .${id} .digiblocks-toc-container:hover {
                ${boxShadowHoverCSS}
            }
            
            /* Title styles */
            .${id} .digiblocks-toc-title {
                margin-top: 0;
                margin-bottom: ${listSpacing[activeDevice].value}${listSpacing[activeDevice].unit};
                color: ${titleColor};
                ${titleTypography.fontFamily ? `font-family: ${titleTypography.fontFamily};` : ''}
                ${titleTypography.fontSize?.[activeDevice] ? `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};` : ''}
                ${titleTypography.fontWeight ? `font-weight: ${titleTypography.fontWeight};` : ''}
                ${titleTypography.fontStyle ? `font-style: ${titleTypography.fontStyle};` : ''}
                ${titleTypography.textTransform ? `text-transform: ${titleTypography.textTransform};` : ''}
                ${titleTypography.textDecoration ? `text-decoration: ${titleTypography.textDecoration};` : ''}
                ${titleTypography.lineHeight?.[activeDevice] ? `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};` : ''}
                ${titleTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            /* List styles */
            .${id} .digiblocks-toc-list {
                margin: 0;
                padding-left: 22px; /* Default indent for lists */
                color: ${textColor};
                ${typography.fontFamily ? `font-family: ${typography.fontFamily};` : ''}
                ${typography.fontSize?.[activeDevice] ? `font-size: ${typography.fontSize[activeDevice]}${typography.fontSizeUnit || 'px'};` : ''}
                ${typography.fontWeight ? `font-weight: ${typography.fontWeight};` : ''}
                ${typography.fontStyle ? `font-style: ${typography.fontStyle};` : ''}
                ${typography.textTransform ? `text-transform: ${typography.textTransform};` : ''}
                ${typography.textDecoration ? `text-decoration: ${typography.textDecoration};` : ''}
                ${typography.lineHeight?.[activeDevice] ? `line-height: ${typography.lineHeight[activeDevice]}${typography.lineHeightUnit || 'em'};` : ''}
                ${typography.letterSpacing?.[activeDevice] ? `letter-spacing: ${typography.letterSpacing[activeDevice]}${typography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-toc-list li {
                margin-bottom: ${listSpacing[activeDevice].value}${listSpacing[activeDevice].unit};
            }
            
            .${id} .digiblocks-toc-list li:last-child {
                margin-bottom: 0;
            }
            
            .${id} .digiblocks-toc-list a {
                color: ${linkColor};
                text-decoration: none;
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-toc-list a:hover {
                color: ${linkHoverColor};
            }
            
            /* Collapsible TOC styles */
            .${id} .digiblocks-toc-toggle-button {
                display: ${showAsCollapsible ? 'inline-flex' : 'none'};
                align-items: center;
                position: ${minimizeBox ? 'absolute' : 'relative'};
                ${minimizeBox ? 'right: 15px; top: 15px;' : 'margin-left: 15px;'}
                padding: 5px 10px;
                font-size: 14px;
                line-height: 1;
                border: 1px solid ${borderColor};
                border-radius: 4px;
                background-color: transparent;
                color: ${textColor};
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-toc-toggle-button:hover {
                background-color: ${backgroundColor !== '#ffffff' ? '#ffffff' : '#f1f1f1'};
            }
            
            .${id} .digiblocks-toc-content {
                display: ${showAsCollapsible && initialCollapseState ? 'none' : 'block'};
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
                                {__('This block automatically generates a table of contents based on the headings in your content. The actual TOC will be populated on the frontend.', 'digiblocks')}
                            </Notice>
                            
                            <ToggleControl
                                label={__('Show Title', 'digiblocks')}
                                checked={showTitle}
                                onChange={(value) => setAttributes({ showTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showTitle && (
                                <>
                                    <TextControl
                                        label={__('Title', 'digiblocks')}
                                        value={title}
                                        onChange={(value) => setAttributes({ title: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Title Tag', 'digiblocks')}
                                        value={titleTag}
                                        options={headingTagOptions}
                                        onChange={(value) => setAttributes({ titleTag: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                            
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
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="content"
                            title={__('Content', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__('Headings to Include', 'digiblocks')}
                                value={headingSelector}
                                options={headingSelectorOptions}
                                onChange={(value) => setAttributes({ headingSelector: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__('Maximum Depth', 'digiblocks')}
                                value={maxDepth}
                                onChange={(value) => setAttributes({ maxDepth: value })}
                                min={1}
                                max={6}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__('List Type', 'digiblocks')}
                                value={listType}
                                options={listTypeOptions}
                                onChange={(value) => setAttributes({ listType: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="behavior"
                            title={__('Behavior', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Enable Smooth Scrolling', 'digiblocks')}
                                checked={enableSmoothScroll}
                                onChange={(value) => setAttributes({ enableSmoothScroll: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {enableSmoothScroll && (
                                <RangeControl
                                    label={__('Scroll Offset (px)', 'digiblocks')}
                                    help={__('Adjust for sticky header height or add extra space', 'digiblocks')}
                                    value={scrollOffset}
                                    onChange={(value) => setAttributes({ scrollOffset: value })}
                                    min={0}
                                    max={200}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <ToggleControl
                                label={__('Enable SEO Markup', 'digiblocks')}
                                help={__('Adds schema.org markup for better SEO', 'digiblocks')}
                                checked={enableSEOMarkup}
                                onChange={(value) => setAttributes({ enableSEOMarkup: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Show as Collapsible', 'digiblocks')}
                                checked={showAsCollapsible}
                                onChange={(value) => setAttributes({ showAsCollapsible: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showAsCollapsible && (
                                <>
                                    <ToggleControl
                                        label={__('Initially Collapsed', 'digiblocks')}
                                        checked={initialCollapseState}
                                        onChange={(value) => setAttributes({ initialCollapseState: value })}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <ToggleControl
                                        label={__('Minimize Box Design', 'digiblocks')}
                                        help={__('Places the toggle button in the top-right corner', 'digiblocks')}
                                        checked={minimizeBox}
                                        onChange={(value) => setAttributes({ minimizeBox: value })}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <div className="digiblocks-collapse-button-text">
                                        <p className="components-base-control__label">{__('Toggle Button Text', 'digiblocks')}</p>
                                        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                                            <TextControl
                                                label={__('Show', 'digiblocks')}
                                                value={collapseButtonText.show}
                                                onChange={(value) => setAttributes({ 
                                                    collapseButtonText: {
                                                        ...collapseButtonText,
                                                        show: value
                                                    }
                                                })}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            />
                                            <TextControl
                                                label={__('Hide', 'digiblocks')}
                                                value={collapseButtonText.hide}
                                                onChange={(value) => setAttributes({ 
                                                    collapseButtonText: {
                                                        ...collapseButtonText,
                                                        hide: value
                                                    }
                                                })}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="dimensions"
                            title={__('Dimensions', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__('Width', 'digiblocks')}
                                value={width}
                                onChange={(value) => setAttributes({ width: value })}
                                min={10}
                                max={100}
                                units={[
                                    { label: '%', value: '%' },
                                    { label: 'px', value: 'px' },
                                ]}
                                defaultUnit="%"
                                defaultValues={{
                                    desktop: { value: 100, unit: '%' },
                                    tablet: { value: 100, unit: '%' },
                                    mobile: { value: 100, unit: '%' }
                                }}
                            />
                            
                            <ResponsiveRangeControl
                                label={__('Max Width', 'digiblocks')}
                                value={maxWidth}
                                onChange={(value) => setAttributes({ maxWidth: value })}
                                min={0}
                                max={2000}
                                units={[
                                    { label: 'px', value: 'px' },
                                    { label: '%', value: '%' },
                                    { label: 'em', value: 'em' },
                                    { label: 'rem', value: 'rem' },
                                ]}
                                defaultUnit="px"
                                step={1}
                            />
                            
                            <ResponsiveRangeControl
								label={__('List Item Spacing', 'digiblocks')}
								value={listSpacing}
								onChange={(value) => setAttributes({ listSpacing: value })}
								min={0}
								max={40}
								units={[
									{ label: 'px', value: 'px' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								defaultUnit="px"
								defaultValues={{
									desktop: { value: 15, unit: 'px' },
									tablet: { value: 12, unit: 'px' },
									mobile: { value: 10, unit: 'px' }
								}}
								step={1}
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
                                                        value: backgroundColor,
                                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                                        label: __("Background Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: titleColor,
                                                        onChange: (value) => setAttributes({ titleColor: value }),
                                                        label: __("Title Color", "digiblocks"),
                                                    },
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
                                                        value: borderColor,
                                                        onChange: (value) => setAttributes({ borderColor: value }),
                                                        label: __("Border Color", "digiblocks"),
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
                            title={__('Typography', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__('Title Typography', 'digiblocks')}
                                value={titleTypography}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Content Typography', 'digiblocks')}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__('Borders & Shadow', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__('Border Style', 'digiblocks')}
                                value={borderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle !== 'none' && (
                                <ResponsiveControl
                                    label={__('Border Width', 'digiblocks')}
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
                            )}
                            
                            <ResponsiveControl
                                label={__('Border Radius', 'digiblocks')}
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
                                    units={[
                                        { label: 'px', value: 'px' },
                                        { label: '%', value: '%' }
                                    ]}
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

    // Generate TOC item component
    const TocItem = ({ heading, depth }) => {
        const indentStyle = {
			paddingLeft: `${(depth - 2) * 16}px`,
			marginBottom: listSpacing[localActiveDevice].value + listSpacing[localActiveDevice].unit
		};
		
		return (
			<li style={depth > 2 ? indentStyle : null}>
				<a href={`#${heading.id}`} onClick={(e) => e.preventDefault()}>
					{heading.content.replace(/<\/?[^>]+(>|$)/g, "")}
				</a>
			</li>
		);
    };

    // Generate the table of contents preview
    const renderTocList = () => {
        // Prevent default behavior for all preview links
        const handleLinkClick = (e) => {
            e.preventDefault();
        };

        if (!headings || headings.length === 0) {
            // Show a preview list in the editor when no headings are found
            return (
                <div className="digiblocks-toc-content">
                    <ListTag className="digiblocks-toc-list">
                        <li><a href="#heading-1" onClick={handleLinkClick}>{__('Sample Heading 1', 'digiblocks')}</a></li>
                        <li><a href="#heading-2" onClick={handleLinkClick}>{__('Sample Heading 2', 'digiblocks')}</a></li>
                        {headingSelector !== 'h2' && (
                            <li style={{paddingLeft: "16px"}}><a href="#heading-3" onClick={handleLinkClick}>{__('Sample Sub-heading 1', 'digiblocks')}</a></li>
                        )}
                        {headingSelector !== 'h2' && (
                            <li style={{paddingLeft: "16px"}}><a href="#heading-4" onClick={handleLinkClick}>{__('Sample Sub-heading 2', 'digiblocks')}</a></li>
                        )}
                        <li><a href="#heading-5" onClick={handleLinkClick}>{__('Sample Heading 3', 'digiblocks')}</a></li>
                        {headingSelector === 'h2,h3,h4' && (
                            <li style={{paddingLeft: "32px"}}><a href="#heading-6" onClick={handleLinkClick}>{__('Sample Deep Heading', 'digiblocks')}</a></li>
                        )}
                    </ListTag>
                </div>
            );
        }
        
        // Filter headings based on selector and max depth
        const filteredHeadings = headings.filter(heading => {
            if (headingSelector === 'h2' && heading.level !== 2) return false;
            if (headingSelector === 'h2,h3' && heading.level > 3) return false;
            if (headingSelector === 'h2,h3,h4' && heading.level > 4) return false;
            return true;
        });
        
        if (filteredHeadings.length === 0) {
            // Show a preview list if there are no matching headings
            return (
                <div className="digiblocks-toc-content">
                    <ListTag className="digiblocks-toc-list">
                        <li><a href="#heading-1" onClick={handleLinkClick}>{__('Sample Heading 1', 'digiblocks')}</a></li>
                        <li><a href="#heading-2" onClick={handleLinkClick}>{__('Sample Heading 2', 'digiblocks')}</a></li>
                        {headingSelector !== 'h2' && (
                            <li style={{paddingLeft: "16px"}}><a href="#heading-3" onClick={handleLinkClick}>{__('Sample Sub-heading', 'digiblocks')}</a></li>
                        )}
                        <li><a href="#heading-4" onClick={handleLinkClick}>{__('Sample Heading 3', 'digiblocks')}</a></li>
                    </ListTag>
                </div>
            );
        }
        
        return (
            <div className="digiblocks-toc-content">
                <ListTag className="digiblocks-toc-list">
                    {filteredHeadings.map((heading, index) => (
                        <TocItem key={index} heading={heading} depth={heading.level} />
                    ))}
                </ListTag>
            </div>
        );
    };

    // Build class names
    const blockClasses = `digiblocks-table-of-contents ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`;
    
    // Determine which tag to use for the list
    const ListTag = listType === 'ol' ? 'ol' : 'ul';
    
    // Determine which tag to use for the title
    const TitleTag = titleTag;

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
                <div className="digiblocks-toc-container">
                    {showTitle && (
                        <RichText
                            tagName={TitleTag}
                            className="digiblocks-toc-title"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Table of Contents', 'digiblocks')}
                        />
                    )}
                    
                    {showAsCollapsible && (
                        <button 
                            className="digiblocks-toc-toggle-button"
                            aria-expanded={!initialCollapseState}
                        >
                            {initialCollapseState ? collapseButtonText.show : collapseButtonText.hide}
                        </button>
                    )}
                    
                    {renderTocList()}
                </div>
            </div>
        </>
    );
};

export default TableOfContentsEdit;