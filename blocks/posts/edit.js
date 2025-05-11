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
    SelectControl,
    RangeControl,
    Placeholder,
    Spinner,
	TabPanel,
	Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useMemo, useRef } = wp.element;
const { useSelect } = wp.data;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Posts block
 */
const PostsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        postsToShow,
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
        order,
        orderBy,
        categories,
		enablePagination,
		paginationAlign,
		paginationBackgroundColor,
		paginationTextColor,
		paginationActiveBackgroundColor,
		paginationActiveTextColor,
        titleColor,
        titleHoverColor,
        excerptColor,
        catBackgroundColor,
        catColor,
        catHoverBackgroundColor,
        catHoverColor,
        metaColor,
        metaHoverColor,
        buttonBackgroundColor,
        buttonTextColor,
        buttonBackgroundHoverColor,
        buttonTextHoverColor,
        imageMargin,
        contentMargin,
        padding,
        margin,
        itemSpacing,
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
    const [activeTab, setActiveTab] = useState("options");
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    // Create a stable query object
    const postQueryObject = useMemo(() => {
        const query = {
            per_page: postsToShow,
            order,
            orderby: orderBy,
            _embed: true,
        };
        
        if (categories && categories.length > 0 && !categories.includes(0)) {
            query.categories = categories;
        }
        
        return query;
    }, [postsToShow, order, orderBy, categories]);

	// Create a stable query params object
	const queryParams = useMemo(() => ({
		postsToShow,
		order,
		orderBy,
		categories: categories && categories.length > 0 ? categories.join(',') : ''
	}), [postsToShow, order, orderBy, categories]);
	
    // Fetch categories for the category selector
	const allCategories = useSelect((select) => {
		const { getEntityRecords } = select('core');
		return getEntityRecords('taxonomy', 'category', { per_page: -1 }) || [];
	}, []);

	// Get categories for the category selector
	const formattedCategories = useMemo(() => {
		return [
			{ label: __('All Categories', 'digiblocks'), value: "0" },
			...allCategories.map(category => ({
				label: category.name,
				value: category.id.toString()
			}))
		];
	}, [allCategories]);

	// Fetch posts based on current settings for preview
	const posts = useSelect((select) => {
		const { getEntityRecords } = select('core');
		const queryObj = {
			per_page: postsToShow,
			order,
			orderby: orderBy,
			_embed: true,
		};
		
		if (categories && categories.length > 0 && !categories.includes(0)) {
			queryObj.categories = categories;
		}
		
		return getEntityRecords('postType', 'post', queryObj);
	}, [JSON.stringify(queryParams)]);

	// Use ref
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

    // Order options
    const orderOptions = [
        { label: __('Ascending', 'digiblocks'), value: 'asc' },
        { label: __('Descending', 'digiblocks'), value: 'desc' }
    ];

    // Order by options
    const orderByOptions = [
        { label: __('Date', 'digiblocks'), value: 'date' },
        { label: __('Title', 'digiblocks'), value: 'title' },
        { label: __('Author', 'digiblocks'), value: 'author' },
        { label: __('Modified Date', 'digiblocks'), value: 'modified' },
        { label: __('Comment Count', 'digiblocks'), value: 'comment_count' }
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
            /* Posts Block - ${id} */
            .${id} {
                margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};
                padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};
                width: 100%;
            }
            
            /* Grid layout */
            .${id} .digiblocks-posts-container {
                display: ${postStyle === 'list' ? 'flex' : 'grid'};
				${postStyle === 'list' ? `flex-direction: column;` : ''}
                ${postStyle !== 'list' ? `grid-template-columns: repeat(${columns[activeDevice]}, 1fr);` : ''}
                gap: ${itemSpacing[activeDevice]}px;
            }
            
            /* List layout */
            .${id}.style-list .digiblocks-post-item {
				flex-direction: row;
				flex-wrap: wrap;
				align-items: stretch;
            }
            
            .${id}.style-list .digiblocks-post-image {
                max-width: 35%;
				width: auto;
            }
            
            .${id}.style-list .digiblocks-post-image img {
                height: 100%;
				object-fit: cover;
            }
            
            .${id}.style-list .digiblocks-post-content {
                flex: 1;
            }
            
            /* Post item */
            .${id} .digiblocks-post-item {
				display: flex;
				flex-direction: column;
				gap: ${imageMargin[activeDevice]}px;
                ${cardStyle ? `
                background-color: ${cardBackgroundColor};
                padding: ${cardPadding[activeDevice].top}${cardPadding[activeDevice].unit} ${cardPadding[activeDevice].right}${cardPadding[activeDevice].unit} ${cardPadding[activeDevice].bottom}${cardPadding[activeDevice].unit} ${cardPadding[activeDevice].left}${cardPadding[activeDevice].unit};
                border-radius: ${cardBorderRadius[activeDevice].top}${cardBorderRadius[activeDevice].unit} ${cardBorderRadius[activeDevice].right}${cardBorderRadius[activeDevice].unit} ${cardBorderRadius[activeDevice].bottom}${cardBorderRadius[activeDevice].unit} ${cardBorderRadius[activeDevice].left}${cardBorderRadius[activeDevice].unit};
                ` : ''}
                
                ${cardStyle && cardBorderStyle !== 'none' ? `
                border-style: ${cardBorderStyle};
                border-color: ${cardBorderColor};
                border-width: ${cardBorderWidth[activeDevice].top}${cardBorderWidth[activeDevice].unit} ${cardBorderWidth[activeDevice].right}${cardBorderWidth[activeDevice].unit} ${cardBorderWidth[activeDevice].bottom}${cardBorderWidth[activeDevice].unit} ${cardBorderWidth[activeDevice].left}${cardBorderWidth[activeDevice].unit};
                ` : ''}
                
                ${cardStyle && cardShadow?.enable ? `box-shadow: ${cardShadow.horizontal}px ${cardShadow.vertical}px ${cardShadow.blur}px ${cardShadow.spread}px ${cardShadow.color};` : ''}
                transition: all 0.3s ease;
            }
            
            /* Featured image */
            .${id} .digiblocks-post-image {
                width: 100%;
                overflow: hidden;
				border-radius: ${imageBorderRadius[activeDevice].top}${imageBorderRadius[activeDevice].unit} ${imageBorderRadius[activeDevice].right}${imageBorderRadius[activeDevice].unit} ${imageBorderRadius[activeDevice].bottom}${imageBorderRadius[activeDevice].unit} ${imageBorderRadius[activeDevice].left}${imageBorderRadius[activeDevice].unit};
            }
            
            .${id} .digiblocks-post-image img {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.3s ease;
            }

			/* Content */
			.${id} .digiblocks-post-content {
				display: flex;
				flex-direction: column;
				gap: ${contentMargin[activeDevice]}px;
			}
            
            /* Post title */
            .${id} .digiblocks-post-title {
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
            
            .${id} .digiblocks-post-title a {
                color: ${titleColor};
                text-decoration: none;
            }
            
            /* Post excerpt */
            .${id} .digiblocks-post-excerpt {
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
            
            /* Categories */
            .${id} .digiblocks-post-categories {
                display: flex;
				flex-wrap: wrap;
				gap: .5rem;
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ''}
                ${textTypography.textTransform ? `text-transform: ${textTypography.textTransform};` : ''}
                ${textTypography.textDecoration ? `text-decoration: ${textTypography.textDecoration};` : ''}
                ${textTypography.lineHeight?.[activeDevice] ? `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};` : ''}
                ${textTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            .${id} .digiblocks-post-categories a {
				display: inline-flex;
				border-radius: 3px;
				padding: 3px 5px;
				background-color: ${catBackgroundColor};
				color: ${catColor};
				text-decoration: none;
				transition: all 0.3s ease;
			}
			
			.${id} .digiblocks-post-categories a:hover {
				background-color: ${catHoverBackgroundColor};
				color: ${catHoverColor};
			}

			/* Footer meta */
			.${id} .digiblocks-post-footer-meta {
				display: flex;
				align-items: center;
				gap: 10px;
				${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
				${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
				${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
				color: ${metaColor};
			}

			.${id} .digiblocks-author-avatar,
			.${id} .digiblocks-author-avatar a {
				display: flex;
			}

			.${id} .digiblocks-author-avatar {
				flex-shrink: 0;
			}

			.${id} .digiblocks-author-avatar img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				object-fit: cover;
			}

			.${id} .digiblocks-footer-meta-items {
				display: flex;
				flex-wrap: wrap;
				gap: 6px;
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ''}
                ${textTypography.textTransform ? `text-transform: ${textTypography.textTransform};` : ''}
                ${textTypography.textDecoration ? `text-decoration: ${textTypography.textDecoration};` : ''}
                ${textTypography.lineHeight?.[activeDevice] ? `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};` : ''}
                ${textTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};` : ''}
			}

			.${id} .digiblocks-footer-meta-items a {
				color: ${metaColor};
				text-decoration: none;
				transition: color 0.3s ease;
			}

			.${id} .digiblocks-footer-meta-items a:hover {
				color: ${metaHoverColor || titleColor};
			}

			/* Footer actions */
			.${id} .digiblocks-post-footer-actions {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				gap: 1rem;
			}
            
            /* Read more button */
            .${id} .digiblocks-post-read-more {
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
                padding: ${buttonPadding[activeDevice].top}${buttonPadding[activeDevice].unit} ${buttonPadding[activeDevice].right}${buttonPadding[activeDevice].unit} ${buttonPadding[activeDevice].bottom}${buttonPadding[activeDevice].unit} ${buttonPadding[activeDevice].left}${buttonPadding[activeDevice].unit};
                border-radius: ${buttonBorderRadius[activeDevice].top}${buttonBorderRadius[activeDevice].unit} ${buttonBorderRadius[activeDevice].right}${buttonBorderRadius[activeDevice].unit} ${buttonBorderRadius[activeDevice].bottom}${buttonBorderRadius[activeDevice].unit} ${buttonBorderRadius[activeDevice].left}${buttonBorderRadius[activeDevice].unit};
                transition: all 0.3s ease;
            }

			.${id} .digiblocks-post-read-more:hover {
				background-color: ${buttonBackgroundHoverColor || buttonBackgroundColor};
				color: ${buttonTextHoverColor || buttonTextColor};
			}

			/* Date meta */
			.${id} .digiblocks-post-comments-count {
				color: ${metaColor};
				text-decoration: none;
				transition: color 0.3s ease;
				${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ''}
                ${textTypography.textTransform ? `text-transform: ${textTypography.textTransform};` : ''}
                ${textTypography.textDecoration ? `text-decoration: ${textTypography.textDecoration};` : ''}
                ${textTypography.lineHeight?.[activeDevice] ? `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};` : ''}
                ${textTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};` : ''}
				display: flex;
				align-items: center;
				gap: .5rem;
			}
			
			.${id} .digiblocks-post-comments-count:hover {
				color: ${metaHoverColor || titleColor};
			}

			/* Pagination */
			.${id} .digiblocks-pagination {
				margin-top: 30px;
				display: flex;
				flex-wrap: wrap;
				gap: 5px;
				justify-content: ${paginationAlign};
			}

			.${id} .digiblocks-pagination .page-numbers {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				min-width: 36px;
				height: 36px;
				padding: 0 10px;
				background-color: ${paginationBackgroundColor};
				color: ${paginationTextColor};
				border-radius: 4px;
				text-decoration: none;
				transition: all 0.3s ease;
			}

			.${id} .digiblocks-pagination .page-numbers.current {
				background-color: ${paginationActiveBackgroundColor};
				color: ${paginationActiveTextColor};
			}

			.${id} .digiblocks-pagination .page-numbers:hover:not(.current) {
				background-color: ${paginationActiveBackgroundColor}40;
			}

			.${id} .digiblocks-pagination .page-numbers svg {
				width: 1em;
				height: 1em;
				fill: currentColor;
			}
            
            /* Animation keyframes */
            ${animationCSS}
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
                            
                            <RangeControl
                                label={__('Posts to Show', 'digiblocks')}
                                value={postsToShow}
                                onChange={(value) => setAttributes({ postsToShow: value })}
                                min={1}
                                max={20}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
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
                                help={__('Enable to show posts as cards with backgrounds and borders', 'digiblocks')}
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
                                        label={__('Show Categories', 'digiblocks')}
                                        checked={metaSettings.displayCategories}
                                        onChange={(value) => updateMetaSettings('displayCategories', value)}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <ToggleControl
                                        label={__('Show Comments Count', 'digiblocks')}
                                        checked={metaSettings.displayComments}
                                        onChange={(value) => updateMetaSettings('displayComments', value)}
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

						<TabPanelBody
							tab="options"
							name="pagination"
							title={__('Pagination', 'digiblocks')}
							initialOpen={false}
						>
							<ToggleControl
								label={__('Enable Pagination', 'digiblocks')}
								checked={enablePagination}
								onChange={(value) => setAttributes({ enablePagination: value })}
								__nextHasNoMarginBottom={true}
							/>
							
							{enablePagination && (
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
                            name="query"
                            title={__('Query', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__('Order By', 'digiblocks')}
                                value={orderBy}
                                options={orderByOptions}
                                onChange={(value) => setAttributes({ orderBy: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__('Order', 'digiblocks')}
                                value={order}
                                options={orderOptions}
                                onChange={(value) => setAttributes({ order: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
								label={__('Category', 'digiblocks')}
								value={categories.length === 0 ? "0" : categories[0].toString()}
								options={formattedCategories}
								onChange={(value) => {
									const selectedValue = parseInt(value, 10);
									if (selectedValue === 0) {
										setAttributes({ categories: [] });
									} else {
										setAttributes({ categories: [selectedValue] });
									}
								}}
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
														value: catBackgroundColor,
														onChange: (value) => setAttributes({ catBackgroundColor: value }),
														label: __('Categories Background Color', 'digiblocks'),
													},
													{
														value: catColor,
														onChange: (value) => setAttributes({ catColor: value }),
														label: __('Categories Color', 'digiblocks'),
													},
													{
														value: metaColor,
														onChange: (value) => setAttributes({ metaColor: value }),
														label: __('Meta Color', 'digiblocks'),
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
														value: catHoverBackgroundColor,
														onChange: (value) => setAttributes({ catHoverBackgroundColor: value }),
														label: __('Categories Hover Background Color', 'digiblocks'),
													},
													{
														value: catHoverColor,
														onChange: (value) => setAttributes({ catHoverColor: value }),
														label: __('Categories Hover Color', 'digiblocks'),
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
                                label={__('Excerpt Typography', 'digiblocks')}
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

    // Helper to limit excerpt length
    const trimExcerpt = (excerpt, wordCount) => {
		if (!excerpt) return '';
		
		// Create a temporary div to decode HTML entities
		const temp = document.createElement('div');
		temp.innerHTML = excerpt;
		const decodedExcerpt = temp.textContent || temp.innerText || '';
		
		const words = decodedExcerpt.split(' ');
		if (words.length <= wordCount) return decodedExcerpt;
		return words.slice(0, wordCount).join(' ') + '...';
	};

    // Build class names
    const blockClasses = `digiblocks-posts ${id} style-${postStyle} ${customClasses || ""}`;

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
                {!posts ? (
                    <Placeholder
                        icon="admin-post"
                        label={__('Posts', 'digiblocks')}
                    >
                        <Spinner />
                    </Placeholder>
                ) : posts.length === 0 ? (
                    <p className="digiblocks-posts-no-results">
                        {__('No posts found.', 'digiblocks')}
                    </p>
                ) : (
					<>
						<div className={`digiblocks-posts-container layout-${postStyle}`}>
							{posts.map((post) => (
								<div key={post.id} className="digiblocks-post-item">
									{displayFeaturedImage && post._embedded?.['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
										<div className="digiblocks-post-image">
											<span>
												{post._embedded['wp:featuredmedia'][0].source_url && (
													<img 
														src={post._embedded['wp:featuredmedia'][0].source_url} 
														alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered} 
													/>
												)}
											</span>
										</div>
									)}
									
									<div className="digiblocks-post-content">
										{displayTitle && (
											<h3 className="digiblocks-post-title">
												<a href="#" onClick={(e) => e.preventDefault()}>{post.title.rendered}</a>
											</h3>
										)}
										
										{displayExcerpt && (
											<div className="digiblocks-post-excerpt">
												{trimExcerpt(post.excerpt.rendered.replace(/<[^>]*>/g, ''), excerptLength)}
											</div>
										)}

										{/* Categories */}
										{displayMeta && metaSettings.displayCategories && post._embedded?.['wp:term']?.[0] && (
											<div className="digiblocks-post-categories">
												{post._embedded['wp:term'][0].map((category) => (
													<a 
														key={category.id} 
														href="#" 
														onClick={(e) => e.preventDefault()}
														className="digiblocks-category-link"
													>
														{category.name}
													</a>
												))}
											</div>
										)}

										{/* Footer meta section */}
										{displayMeta && (
											<div className="digiblocks-post-footer-meta">
												{metaSettings.displayAuthor && post._embedded?.author?.[0] && (
													<div className="digiblocks-author-avatar">
														<a href="#" onClick={(e) => e.preventDefault()}>
															{post._embedded.author[0].avatar_urls?.['96'] ? (
																<img 
																	src={post._embedded.author[0].avatar_urls['96']} 
																	alt={post._embedded.author[0].name || ''}
																/>
															) : (
																<span className="digiblocks-avatar-placeholder"></span>
															)}
														</a>
													</div>
												)}
												<div className="digiblocks-footer-meta-items">
													{metaSettings.displayAuthor && post._embedded?.author?.[0] && (
														<span className="digiblocks-posted-by">
															<span className="digiblocks-meta-prefix">{__('by', 'digiblocks')}</span>{' '}
															<a href="#" onClick={(e) => e.preventDefault()}>
																{post._embedded.author[0].name}
															</a>
														</span>
													)}
													{metaSettings.displayDate && (
														<span className="digiblocks-posted-on">
															<span className="digiblocks-meta-prefix">{__('on', 'digiblocks')}</span>{' '}
															<time dateTime={post.date}>
																{new Date(post.date).toLocaleDateString('en-US', {
																	year: 'numeric',
																	month: 'long',
																	day: 'numeric'
																})}
															</time>
														</span>
													)}
												</div>
											</div>
										)}
										
										{(displayReadMoreButton || (displayMeta && metaSettings.displayComments)) && (
											<div className="digiblocks-post-footer-actions">
												{displayReadMoreButton && (
													<a href="#" onClick={(e) => e.preventDefault()} className="digiblocks-post-read-more">
														{readMoreText}
													</a>
												)}
												
												{displayMeta && metaSettings.displayComments && (
													<a href="#" className="digiblocks-post-comments-count" onClick={(e) => e.preventDefault()}>
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 64C125.8 64 32 148.6 32 240c0 37.1 15.5 70.6 40 100c5.2 6.3 8.4 14.8 7.4 23.9c-3.1 27-11.4 52.5-25.7 76.3c-.5 .9-1.1 1.8-1.6 2.6c11.1-2.9 22.2-7 32.7-11.5L91.2 446l-6.4-14.7c17-7.4 33-16.7 48.4-27.4c8.5-5.9 19.4-7.5 29.2-4.2C193 410.1 224.1 416 256 416c130.2 0 224-84.6 224-176s-93.8-176-224-176zM0 240C0 125.2 114.5 32 256 32s256 93.2 256 208s-114.5 208-256 208c-36 0-70.5-6.7-103.8-17.9c-.2-.1-.5 0-.7 .1c-16.9 11.7-34.7 22.1-53.9 30.5C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.8s-1.1-12.8 3.4-17.4c8.1-8.2 15.2-18.2 21.7-29c11.7-19.6 18.7-40.6 21.3-63.1c0 0-.1-.1-.1-.2C19.6 327.1 0 286.6 0 240z"/></svg>
														{post.comment_count === 0 ? (
															__('Leave a Comment', 'digiblocks')
														) : post.comment_count === 1 ? (
															__('1 Comment', 'digiblocks')
														) : (
															sprintf(__('%d Comments', 'digiblocks'), post.comment_count || 0)
														)}
													</a>
												)}
											</div>
										)}
									</div>
								</div>
							))}
						</div>

						{enablePagination && (
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
					</>
                )}
            </div>
        </>
    );
};

export default PostsEdit;