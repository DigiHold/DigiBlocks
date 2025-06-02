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
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    TabPanel,
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
const { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl } = digi.components;

/**
 * Edit function for the Search Results block
 */
const SearchResultsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        postsPerPage,
        columns,
        postStyle,
        displayFeaturedImage,
        displayTitle,
        displayMeta,
        displayExcerpt,
        displayReadMoreButton,
        metaSettings,
        excerptLength,
        readMoreText,
        noResultsText,
        headingText,
        displayHeading,
        showPagination,
        paginationAlign,
        paginationBackgroundColor,
        paginationTextColor,
        paginationActiveBackgroundColor,
        paginationActiveTextColor,
        titleColor,
        titleHoverColor,
        excerptColor,
        metaColor,
        metaHoverColor,
        buttonBackgroundColor,
        buttonTextColor,
        buttonBackgroundHoverColor,
        buttonTextHoverColor,
        headingColor,
        noResultsColor,
        imageMargin,
        contentMargin,
        padding,
        margin,
        itemSpacing,
        headingTypography,
        titleTypography,
        textTypography,
        contentTypography,
        buttonTypography,
        buttonPadding,
        buttonBorderRadius,
        imageSize,
        imageBorderRadius,
        cardStyle,
        cardBackgroundColor,
        cardPadding,
        cardBorderRadius,
        cardBorderStyle,
        cardBorderWidth,
        cardBorderColor,
        cardShadow,
        cardShadowHover,
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

    // Button click handler
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

    // Available image sizes
    const imageSizes = [
        { label: __('Thumbnail', 'digiblocks'), value: 'thumbnail' },
        { label: __('Medium', 'digiblocks'), value: 'medium' },
        { label: __('Large', 'digiblocks'), value: 'large' },
        { label: __('Full', 'digiblocks'), value: 'full' }
    ];

    // Border style options
    const borderStyleOptions = [
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Solid', 'digiblocks'), value: 'solid' },
        { label: __('Dashed', 'digiblocks'), value: 'dashed' },
        { label: __('Dotted', 'digiblocks'), value: 'dotted' },
        { label: __('Double', 'digiblocks'), value: 'double' },
    ];

    // Update meta settings
    const updateMetaSettings = (key, value) => {
        setAttributes({
            metaSettings: {
                ...metaSettings,
                [key]: value,
            },
        });
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        return `
            /* Search Results Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                width: 100%;
            }

            /* Block Heading */
            .${id} .digiblocks-search-results-heading {
                color: ${headingColor};
                margin-top: 0;
                margin-bottom: 1.5rem;
                ${headingTypography.fontFamily ? `font-family: ${headingTypography.fontFamily};` : ''}
                ${headingTypography.fontSize?.[activeDevice] ? `font-size: ${headingTypography.fontSize[activeDevice]}${headingTypography.fontSizeUnit || 'px'};` : ''}
                ${headingTypography.fontWeight ? `font-weight: ${headingTypography.fontWeight};` : ''}
                ${headingTypography.fontStyle ? `font-style: ${headingTypography.fontStyle};` : ''}
                ${headingTypography.textTransform ? `text-transform: ${headingTypography.textTransform};` : ''}
                ${headingTypography.textDecoration ? `text-decoration: ${headingTypography.textDecoration};` : ''}
                ${headingTypography.lineHeight?.[activeDevice] ? `line-height: ${headingTypography.lineHeight[activeDevice]}${headingTypography.lineHeightUnit || 'em'};` : ''}
                ${headingTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${headingTypography.letterSpacing[activeDevice]}${headingTypography.letterSpacingUnit || 'px'};` : ''}
            }

            /* No Results Message */
            .${id} .digiblocks-search-no-results {
                color: ${noResultsColor};
                text-align: center;
                padding: 2rem;
                ${contentTypography.fontFamily ? `font-family: ${contentTypography.fontFamily};` : ''}
                ${contentTypography.fontSize?.[activeDevice] ? `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};` : ''}
                ${contentTypography.fontWeight ? `font-weight: ${contentTypography.fontWeight};` : ''}
                ${contentTypography.fontStyle ? `font-style: ${contentTypography.fontStyle};` : ''}
                ${contentTypography.lineHeight?.[activeDevice] ? `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};` : ''}
                ${contentTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            /* Grid layout */
            .${id} .digiblocks-search-container {
                display: ${postStyle === 'list' ? 'flex' : 'grid'};
                ${postStyle === 'list' ? `flex-direction: column;` : ''}
                ${postStyle !== 'list' ? `grid-template-columns: repeat(${columns[activeDevice]}, 1fr);` : ''}
                gap: ${itemSpacing[activeDevice]}px;
            }
            
            /* List layout */
            .${id}.style-list .digiblocks-search-item {
                flex-direction: row;
                flex-wrap: wrap;
                align-items: stretch;
            }
            
            .${id}.style-list .digiblocks-search-image {
                max-width: 35%;
                width: auto;
            }
            
            .${id}.style-list .digiblocks-search-image img {
                height: 100%;
                object-fit: cover;
            }
            
            .${id}.style-list .digiblocks-search-content {
                flex: 1;
            }
            
            /* Search item */
            .${id} .digiblocks-search-item {
                display: flex;
                flex-direction: column;
                gap: ${imageMargin[activeDevice]}px;
                ${cardStyle ? `
                    background-color: ${cardBackgroundColor};
                    ${getDimensionCSS(cardPadding, 'padding', activeDevice)}
                    ${getDimensionCSS(cardBorderRadius, 'border-radius', activeDevice)}
                    ` : ''}
                
                ${cardStyle && cardBorderStyle !== 'none' ? `
                    border-style: ${cardBorderStyle};
                    border-color: ${cardBorderColor};
                    ${getDimensionCSS(cardBorderWidth, 'border-width', activeDevice)}
                    ` : ''}
                
                ${cardStyle && cardShadow?.enable ? `box-shadow: ${cardShadow.horizontal}px ${cardShadow.vertical}px ${cardShadow.blur}px ${cardShadow.spread}px ${cardShadow.color};` : ''}
                transition: all 0.3s ease;
            }

            .${id} .digiblocks-search-item:hover {
                ${cardStyle && cardShadowHover?.enable ? `box-shadow: ${cardShadowHover.horizontal}px ${cardShadowHover.vertical}px ${cardShadowHover.blur}px ${cardShadowHover.spread}px ${cardShadowHover.color};` : ''}
            }
            
            /* Featured image */
            .${id} .digiblocks-search-image {
                width: 100%;
                overflow: hidden;
                ${getDimensionCSS(imageBorderRadius, 'border-radius', activeDevice)}
            }
            
            .${id} .digiblocks-search-image img {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.3s ease;
            }

            .${id} .digiblocks-search-image:hover img {
                transform: scale(1.05);
            }

            /* Content */
            .${id} .digiblocks-search-content {
                display: flex;
                flex-direction: column;
                gap: ${contentMargin[activeDevice]}px;
            }
            
            /* Search result title */
            .${id} .digiblocks-search-title {
                margin: 0;
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
            
            .${id} .digiblocks-search-title a {
                color: ${titleColor};
                text-decoration: none;
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-search-title a:hover {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            }
            
            /* Search result excerpt */
            .${id} .digiblocks-search-excerpt {
                color: ${excerptColor};
                ${contentTypography.fontFamily ? `font-family: ${contentTypography.fontFamily};` : ''}
                ${contentTypography.fontSize?.[activeDevice] ? `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};` : ''}
                ${contentTypography.fontWeight ? `font-weight: ${contentTypography.fontWeight};` : ''}
                ${contentTypography.fontStyle ? `font-style: ${contentTypography.fontStyle};` : ''}
                ${contentTypography.textTransform ? `text-transform: ${contentTypography.textTransform};` : ''}
                ${contentTypography.textDecoration ? `text-decoration: ${contentTypography.textDecoration};` : ''}
                ${contentTypography.lineHeight?.[activeDevice] ? `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};` : ''}
                ${contentTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            /* Meta information */
            .${id} .digiblocks-search-meta {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                color: ${metaColor};
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ''}
                ${textTypography.textTransform ? `text-transform: ${textTypography.textTransform};` : ''}
                ${textTypography.textDecoration ? `text-decoration: ${textTypography.textDecoration};` : ''}
                ${textTypography.lineHeight?.[activeDevice] ? `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};` : ''}
                ${textTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};` : ''}
            }

            .${id} .digiblocks-search-meta a {
                color: ${metaColor};
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .${id} .digiblocks-search-meta a:hover {
                color: ${metaHoverColor || titleColor};
            }
            
            /* Read more button */
            .${id} .digiblocks-search-read-more {
                display: inline-flex;
                background-color: ${buttonBackgroundColor};
                color: ${buttonTextColor};
                ${buttonTypography.fontFamily ? `font-family: ${buttonTypography.fontFamily};` : ''}
                ${buttonTypography.fontSize?.[activeDevice] ? `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || 'px'};` : ''}
                ${buttonTypography.fontWeight ? `font-weight: ${buttonTypography.fontWeight};` : ''}
                ${buttonTypography.fontStyle ? `font-style: ${buttonTypography.fontStyle};` : ''}
                ${buttonTypography.textTransform ? `text-transform: ${buttonTypography.textTransform};` : ''}
                ${buttonTypography.textDecoration ? `text-decoration: ${buttonTypography.textDecoration};` : ''}
                ${buttonTypography.lineHeight?.[activeDevice] ? `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || 'em'};` : ''}
                ${buttonTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || 'px'};` : ''}
                text-decoration: none;
                ${getDimensionCSS(buttonPadding, 'padding', activeDevice)}
                ${getDimensionCSS(buttonBorderRadius, 'border-radius', activeDevice)}
                transition: all 0.3s ease;
            }

            .${id} .digiblocks-search-read-more:hover {
                background-color: ${buttonBackgroundHoverColor || buttonBackgroundColor};
                color: ${buttonTextHoverColor || buttonTextColor};
            }

            /* Pagination */
            .${id} .digiblocks-pagination {
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: ${paginationAlign};
            }

            .${id} .digiblocks-pagination .page-numbers {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 42px;
                height: 42px;
                padding: 0 12px;
                background-color: ${paginationBackgroundColor};
                color: ${paginationTextColor};
                border-radius: 8px;
                text-decoration: none;
                transition: all 0.3s ease;
                font-weight: 500;
            }

            .${id} .digiblocks-pagination .page-numbers.current {
                background-color: ${paginationActiveBackgroundColor};
                color: ${paginationActiveTextColor};
                transform: translateY(-1px);
                box-shadow: 0 4px 12px ${paginationActiveBackgroundColor}40;
            }

            .${id} .digiblocks-pagination .page-numbers:hover:not(.current) {
                background-color: ${paginationActiveBackgroundColor}20;
                transform: translateY(-1px);
            }

            .${id} .digiblocks-pagination .page-numbers svg {
                width: 1em;
                height: 1em;
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
                            name="search"
                            title={__('Search Settings', 'digiblocks')}
                            initialOpen={true}
                        >
                            <Notice
                                status="warning"
                                isDismissible={false}
                                className="digiblocks-notice components-base-control"
                            >
                                {__('This block displays search results. The preview shows example content. Actual search results will be displayed based on the current search query.', 'digiblocks')}
                            </Notice>
                            
                            <RangeControl
                                label={__('Posts Per Page', 'digiblocks')}
                                value={postsPerPage}
                                onChange={(value) => setAttributes({ postsPerPage: value })}
                                min={1}
                                max={20}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <TextControl
                                label={__('No Results Text', 'digiblocks')}
                                value={noResultsText}
                                onChange={(value) => setAttributes({ noResultsText: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Display Heading', 'digiblocks')}
                                checked={displayHeading}
                                onChange={(value) => setAttributes({ displayHeading: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displayHeading && (
                                <TextControl
                                    label={__('Heading Text', 'digiblocks')}
                                    value={headingText}
                                    onChange={(value) => setAttributes({ headingText: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <ToggleControl
                                label={__('Show Pagination', 'digiblocks')}
                                checked={showPagination}
                                onChange={(value) => setAttributes({ showPagination: value })}
                                __nextHasNoMarginBottom={true}
                            />
							
							{showPagination && (
                                <>
                                    <ToggleGroupControl
                                        label={__("Pagination Alignment", "digiblocks")}
                                        value={paginationAlign}
                                        onChange={(value) => setAttributes({ paginationAlign: value })}
                                        isBlock
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption 
                                            value="flex-start" 
                                            label={__("Left", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption 
                                            value="center" 
                                            label={__("Center", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption 
                                            value="flex-end" 
                                            label={__("Right", "digiblocks")}
                                        />
                                    </ToggleGroupControl>
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="layout"
                            title={__('Layout', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleGroupControl
                                label={__("Post Style", "digiblocks")}
                                value={postStyle}
                                onChange={(value) => setAttributes({ postStyle: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="grid" 
                                    label={__("Grid", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="list" 
                                    label={__("List", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            {postStyle === 'grid' && (
                                <ResponsiveControl
                                    label={__('Columns', 'digiblocks')}
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
                                        max={localActiveDevice === 'desktop' ? 6 : localActiveDevice === 'tablet' ? 4 : 2}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ResponsiveControl
                                label={__('Item Spacing', 'digiblocks')}
                            >
                                <RangeControl
                                    value={itemSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            itemSpacing: {
                                                ...itemSpacing,
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
                            
                            <ToggleControl
                                label={__('Card Style', 'digiblocks')}
                                checked={cardStyle}
                                onChange={(value) => setAttributes({ cardStyle: value })}
                                help={__('Enable to show results as cards with backgrounds and borders', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="content"
                            title={__('Content', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Display Featured Image', 'digiblocks')}
                                checked={displayFeaturedImage}
                                onChange={(value) => setAttributes({ displayFeaturedImage: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displayFeaturedImage && (
                                <SelectControl
                                    label={__('Image Size', 'digiblocks')}
                                    value={imageSize}
                                    options={imageSizes}
                                    onChange={(value) => setAttributes({ imageSize: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <ToggleControl
                                label={__('Display Title', 'digiblocks')}
                                checked={displayTitle}
                                onChange={(value) => setAttributes({ displayTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Display Meta', 'digiblocks')}
                                checked={displayMeta}
                                onChange={(value) => setAttributes({ displayMeta: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displayMeta && (
                                <div className="digiblocks-meta-options" style={{ marginLeft: '24px', marginBottom: '16px' }}>
                                    <ToggleControl
                                        label={__('Show Author', 'digiblocks')}
                                        checked={metaSettings.displayAuthor}
                                        onChange={(value) => updateMetaSettings('displayAuthor', value)}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <ToggleControl
                                        label={__('Show Date', 'digiblocks')}
                                        checked={metaSettings.displayDate}
                                        onChange={(value) => updateMetaSettings('displayDate', value)}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <ToggleControl
                                        label={__('Show Post Type', 'digiblocks')}
                                        checked={metaSettings.displayPostType}
                                        onChange={(value) => updateMetaSettings('displayPostType', value)}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </div>
                            )}
                            
                            <ToggleControl
                                label={__('Display Excerpt', 'digiblocks')}
                                checked={displayExcerpt}
                                onChange={(value) => setAttributes({ displayExcerpt: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displayExcerpt && (
                                <RangeControl
                                    label={__('Excerpt Length (words)', 'digiblocks')}
                                    value={excerptLength}
                                    onChange={(value) => setAttributes({ excerptLength: value })}
                                    min={5}
                                    max={100}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                            
                            <ToggleControl
                                label={__('Display Read More Button', 'digiblocks')}
                                checked={displayReadMoreButton}
                                onChange={(value) => setAttributes({ displayReadMoreButton: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displayReadMoreButton && (
                                <TextControl
                                    label={__('Read More Text', 'digiblocks')}
                                    value={readMoreText}
                                    onChange={(value) => setAttributes({ readMoreText: value })}
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
                            {displayHeading && (
                                <PanelColorSettings
                                    title={__("Heading Color", "digiblocks")}
                                    initialOpen={true}
                                    enableAlpha={true}
                                    colorSettings={[
                                        {
                                            value: headingColor,
                                            onChange: (value) => setAttributes({ headingColor: value }),
                                            label: __("Heading Color", "digiblocks"),
                                        }
                                    ]}
                                />
                            )}
                            
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
                                                        value: titleColor,
                                                        onChange: (value) => setAttributes({ titleColor: value }),
                                                        label: __("Title Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: excerptColor,
                                                        onChange: (value) => setAttributes({ excerptColor: value }),
                                                        label: __('Excerpt Color', 'digiblocks'),
                                                    },
                                                    {
                                                        value: metaColor,
                                                        onChange: (value) => setAttributes({ metaColor: value }),
                                                        label: __('Meta Color', 'digiblocks'),
                                                    },
                                                    {
                                                        value: noResultsColor,
                                                        onChange: (value) => setAttributes({ noResultsColor: value }),
                                                        label: __('No Results Color', 'digiblocks'),
                                                    },
                                                    {
                                                        value: buttonBackgroundColor,
                                                        onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                                                        label: __('Button Background', 'digiblocks'),
                                                    },
                                                    {
                                                        value: buttonTextColor,
                                                        onChange: (value) => setAttributes({ buttonTextColor: value }),
                                                        label: __('Button Text', 'digiblocks'),
                                                    },
                                                    {
                                                        value: paginationBackgroundColor,
                                                        onChange: (value) => setAttributes({ paginationBackgroundColor: value }),
                                                        label: __("Pagination Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: paginationTextColor,
                                                        onChange: (value) => setAttributes({ paginationTextColor: value }),
                                                        label: __("Pagination Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: paginationActiveBackgroundColor,
                                                        onChange: (value) => setAttributes({ paginationActiveBackgroundColor: value }),
                                                        label: __("Pagination Active Background", "digiblocks"),
                                                    },
                                                    {
                                                        value: paginationActiveTextColor,
                                                        onChange: (value) => setAttributes({ paginationActiveTextColor: value }),
                                                        label: __("Pagination Active Color", "digiblocks"),
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
                                                        value: titleHoverColor,
                                                        onChange: (value) => setAttributes({ titleHoverColor: value }),
                                                        label: __("Title Hover Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: metaHoverColor,
                                                        onChange: (value) => setAttributes({ metaHoverColor: value }),
                                                        label: __('Meta Hover Color', 'digiblocks'),
                                                    },
                                                    {
                                                        value: buttonBackgroundHoverColor,
                                                        onChange: (value) => setAttributes({ buttonBackgroundHoverColor: value }),
                                                        label: __('Button Background Hover', 'digiblocks'),
                                                    },
                                                    {
                                                        value: buttonTextHoverColor,
                                                        onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                                                        label: __('Button Text Hover', 'digiblocks'),
                                                    },
                                                ]}
                                            />
                                        );
                                    }
                                }}
                            </TabPanel>
                            
                            {cardStyle && (
                                <>
                                    <h3>{__('Card Colors', 'digiblocks')}</h3>
                                    <PanelColorSettings
                                        title=""
                                        colorSettings={[
                                            {
                                                value: cardBackgroundColor,
                                                onChange: (value) => setAttributes({ cardBackgroundColor: value }),
                                                label: __('Card Background', 'digiblocks'),
                                            },
                                            {
                                                value: cardBorderColor,
                                                onChange: (value) => setAttributes({ cardBorderColor: value }),
                                                label: __('Card Border', 'digiblocks'),
                                            },
                                        ]}
                                    />
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__('Typography', 'digiblocks')}
                            initialOpen={false}
                        >
                            {displayHeading && (
                                <TypographyControl
                                    label={__('Heading Typography', 'digiblocks')}
                                    value={headingTypography}
                                    onChange={(value) => setAttributes({ headingTypography: value })}
                                    defaults={{
                                        fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                                        fontWeight: '600',
                                        lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                    }}
                                />
                            )}
                            
                            <TypographyControl
                                label={__('Title Typography', 'digiblocks')}
                                value={titleTypography}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Meta Typography', 'digiblocks')}
                                value={textTypography}
                                onChange={(value) => setAttributes({ textTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Content Typography', 'digiblocks')}
                                value={contentTypography}
                                onChange={(value) => setAttributes({ contentTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__('Button Typography', 'digiblocks')}
                                value={buttonTypography}
                                onChange={(value) => setAttributes({ buttonTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontWeight: '500',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
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
                            
                            <ResponsiveControl
                                label={__('Image Margin', 'digiblocks')}
                            >
                                <RangeControl
                                    value={imageMargin[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            imageMargin: {
                                                ...imageMargin,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={1}
                                    max={100}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl
                                label={__('Content Margin', 'digiblocks')}
                            >
                                <RangeControl
                                    value={contentMargin[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            contentMargin: {
                                                ...contentMargin,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={1}
                                    max={100}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Button Padding', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={buttonPadding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonPadding: {
                                                ...buttonPadding,
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
                                label={__('Image Border Radius', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={imageBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            imageBorderRadius: {
                                                ...imageBorderRadius,
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
                                label={__('Button Border Radius', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={buttonBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonBorderRadius: {
                                                ...buttonBorderRadius,
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
                            
                            {cardStyle && (
                                <>
                                    <SelectControl
                                        label={__('Card Border Style', 'digiblocks')}
                                        value={cardBorderStyle}
                                        options={borderStyleOptions}
                                        onChange={(value) => setAttributes({ cardBorderStyle: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    {cardBorderStyle !== 'none' && (
                                        <ResponsiveControl
                                            label={__('Card Border Width', 'digiblocks')}
                                        >
                                            <DimensionControl
                                                values={cardBorderWidth[localActiveDevice]}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        cardBorderWidth: {
                                                            ...cardBorderWidth,
                                                            [localActiveDevice]: value,
                                                        },
                                                    })
                                                }
                                            />
                                        </ResponsiveControl>
                                    )}
                                    
                                    <ResponsiveControl
                                        label={__('Card Border Radius', 'digiblocks')}
                                    >
                                        <DimensionControl
                                            values={cardBorderRadius[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    cardBorderRadius: {
                                                        ...cardBorderRadius,
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
                                        label={__('Card Shadow', 'digiblocks')}
                                        normalValue={cardShadow}
                                        hoverValue={cardShadowHover}
                                        onNormalChange={(value) => setAttributes({ cardShadow: value })}
                                        onHoverChange={(value) => setAttributes({ cardShadowHover: value })}
                                    />
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
    const blockClasses = `digiblocks-search-results ${id} style-${postStyle} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ""}`;

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: blockClasses,
        id: anchor || null,
    });

    // Example search results data for the preview
    const exampleResults = [
        {
            id: 1,
            title: __('Example Search Result 1', 'digiblocks'),
            excerpt: __('This is a preview of how search results will appear on your site. The actual results will be based on the current search query.', 'digiblocks'),
            author: {
                name: __('John Doe', 'digiblocks'),
            },
            date: new Date().toISOString(),
            post_type: 'post'
        },
        {
            id: 2,
            title: __('Example Search Result 2', 'digiblocks'),
            excerpt: __('Search results are displayed based on the WordPress search functionality and user queries.', 'digiblocks'),
            author: {
                name: __('Jane Smith', 'digiblocks'),
            },
            date: new Date().toISOString(),
            post_type: 'page'
        },
        {
            id: 3,
            title: __('Example Search Result 3', 'digiblocks'),
            excerpt: __('Configure this block\'s appearance and settings in the inspector panel. This is just a preview of how it will look.', 'digiblocks'),
            author: {
                name: __('Alex Johnson', 'digiblocks'),
            },
            date: new Date().toISOString(),
            post_type: 'post'
        }
    ];

    // Helper to limit excerpt length
    const trimExcerpt = (excerpt, wordCount) => {
        if (!excerpt) return '';
        
        const words = excerpt.split(' ');
        if (words.length <= wordCount) return excerpt;
        return words.slice(0, wordCount).join(' ') + '...';
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
                {displayHeading && (
                    <RichText
                        tagName="h3"
                        className="digiblocks-search-results-heading"
                        value={headingText}
                        onChange={(value) => setAttributes({ headingText: value })}
                        placeholder={__('Search Results', 'digiblocks')}
                    />
                )}
                
                {/* Preview of search results */}
                <div className={`digiblocks-search-container layout-${postStyle}`}>
                    {exampleResults.slice(0, postsPerPage).map((result) => (
                        <div key={result.id} className="digiblocks-search-item">
                            {displayFeaturedImage && (
                                <div className="digiblocks-search-image">
                                    <span>
                                        <img 
                                            src={`https://picsum.photos/600/400?random=${result.id}`}
                                            alt={result.title}
                                        />
                                    </span>
                                </div>
                            )}
                            
                            <div className="digiblocks-search-content">
                                {displayTitle && (
                                    <h3 className="digiblocks-search-title">
                                        <a href="#" onClick={(e) => e.preventDefault()}>{result.title}</a>
                                    </h3>
                                )}
                                
                                {displayMeta && (
                                    <div className="digiblocks-search-meta">
                                        {metaSettings.displayAuthor && result.author && (
                                            <span className="digiblocks-author">
                                                <span className="digiblocks-meta-prefix">{__('by', 'digiblocks')}</span>{' '}
                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                    {result.author.name}
                                                </a>
                                            </span>
                                        )}
                                        {metaSettings.displayDate && (
                                            <span className="digiblocks-date">
                                                <span className="digiblocks-meta-prefix">{__('on', 'digiblocks')}</span>{' '}
                                                <time dateTime={result.date}>
                                                    {new Date(result.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </time>
                                            </span>
                                        )}
                                        {metaSettings.displayPostType && (
                                            <span className="digiblocks-post-type">
                                                {result.post_type.charAt(0).toUpperCase() + result.post_type.slice(1)}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {displayExcerpt && (
                                    <div className="digiblocks-search-excerpt">
                                        {trimExcerpt(result.excerpt, excerptLength)}
                                    </div>
                                )}
                                
                                {displayReadMoreButton && (
                                    <div className="digiblocks-search-actions">
                                        <a href="#" onClick={(e) => e.preventDefault()} className="digiblocks-search-read-more">
                                            {readMoreText}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Preview */}
                {showPagination && (
					<div className="digiblocks-pagination">
						<a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"/></svg>
						</a>
						<a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>1</a>
						<span className="page-numbers current">2</span>
						<a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>3</a>
						<span className="page-numbers dots">…</span>
						<a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>8</a>
						<a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"/></svg>
						</a>
					</div>
				)}
            </div>
        </>
    );
};

export default SearchResultsEdit;