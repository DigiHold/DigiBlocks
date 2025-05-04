/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck,
} = wp.blockEditor;
const {
	BaseControl,
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    TabPanel,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { animations } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Testimonials block
 */
const TestimonialsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        testimonials,
        columns,
        nameColor,
        nameHoverColor,
        positionColor,
        contentColor,
        backgroundColor,
        backgroundHoverColor,
        quoteIconColor,
        ratingColor,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        boxShadow,
        boxShadowHover,
        padding,
        margin,
        contentTypography,
        headingTypography,
        textTypography,
        imageSize,
        quoteIconSize,
        showRating,
        showQuoteIcon,
        animation,
        align,
        itemSpacing,
    } = attributes;

    // State for active tab
    const [activeTab, setActiveTab] = useState("options");

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    const previewTimeoutRef = useRef(null);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Check if the ID needs to be regenerated using clientId
        if (!id || !id.includes(clientId.substr(0, 8))) {
            setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
        }
        
        // Initialize testimonials with IDs if needed
        if (testimonials && testimonials.length > 0) {
            const updatedTestimonials = testimonials.map((item, index) => {
                if (!item.id) {
                    return { ...item, id: `testimonial-${clientId.substr(0, 8)}-${index}` };
                }
                return item;
            });
            
            if (JSON.stringify(updatedTestimonials) !== JSON.stringify(testimonials)) {
                setAttributes({ testimonials: updatedTestimonials });
            }
        }
    }, [clientId, testimonials, setAttributes]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (previewTimeoutRef.current) {
                clearTimeout(previewTimeoutRef.current);
            }
        };
    }, []);

    // Animation preview function
    const triggerAnimationPreview = () => {
        // Only proceed if we have a valid animation
        if (!animation || animation === 'none') {
            return;
        }
        
        // Clear any existing timeout
        if (previewTimeoutRef.current) {
            clearTimeout(previewTimeoutRef.current);
        }
        
        // Find the block element
        const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
        if (!blockElement) {
            return;
        }
        
        // Generate a timestamp to ensure unique animation names on each click
        const timestamp = Date.now();
        
        // Apply animation directly
        if (animations[animation]) {
            // Extract the original animation name from the keyframes
            const originalKeyframes = animations[animation].keyframes;
            const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
            
            if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
                console.error('Could not extract animation name from keyframes');
                return;
            }
            
            const originalAnimName = originalAnimNameMatch[1];
            const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
            
            // Create a style element with a unique animation name to avoid conflicts
            const styleElement = document.createElement('style');
            styleElement.id = `animation-style-${id}_${timestamp}`;
            
            // Replace the original animation name with our unique name
            const updatedKeyframes = originalKeyframes.replace(
                new RegExp(originalAnimName, 'g'),
                uniqueAnimName
            );
            
            styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
            
            // Remove any existing animation style for this block
            document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach(el => {
                el.remove();
            });
            
            // Add the style to the document
            document.head.appendChild(styleElement);
            
            // Force reflow to ensure animation reset
            blockElement.offsetHeight;
            
            // Now apply the animation
            const animationStyleElement = document.createElement('style');
            animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
            animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
            document.head.appendChild(animationStyleElement);
            
            // Clean up after animation
            previewTimeoutRef.current = setTimeout(() => {
                styleElement.remove();
                animationStyleElement.remove();
                blockElement.style.animation = '';
            }, 1500);
        }
    };

    // Effect to trigger animation preview when animation attribute changes
    useEffect(() => {
        if (animation && animation !== 'none') {
            const timeoutId = setTimeout(() => {
                triggerAnimationPreview();
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);

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

    // Add item function
    const addNewTestimonial = () => {
        const newTestimonialIndex = testimonials.length;
        const newTestimonial = {
            id: `testimonial-${clientId.substr(0, 8)}-${newTestimonialIndex}`,
            name: __('New Name', 'digiblocks'),
            position: __('Position', 'digiblocks'),
            company: __('Company', 'digiblocks'),
            content: __('Add your testimonial content here...', 'digiblocks'),
            imageUrl: '',
            imageId: '',
            rating: 5
        };
        
        setAttributes({
            testimonials: [...testimonials, newTestimonial]
        });
    };

    // Remove item function
    const removeTestimonial = (index) => {
        const newTestimonials = [...testimonials];
        newTestimonials.splice(index, 1);
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Duplicate item function
    const duplicateTestimonial = (index) => {
        const itemToDuplicate = testimonials[index];
        const timestamp = Date.now();
        const newTestimonial = {
            ...itemToDuplicate,
            id: `testimonial-${clientId.substr(0, 8)}-${timestamp}`,
        };
        
        const newTestimonials = [...testimonials];
        newTestimonials.splice(index + 1, 0, newTestimonial);
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Move item up function
    const moveTestimonialUp = (index) => {
        if (index === 0) return;
        
        const newTestimonials = [...testimonials];
        const item = newTestimonials[index];
        newTestimonials.splice(index, 1);
        newTestimonials.splice(index - 1, 0, item);
        
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Move item down function
    const moveTestimonialDown = (index) => {
        if (index === testimonials.length - 1) return;
        
        const newTestimonials = [...testimonials];
        const item = newTestimonials[index];
        newTestimonials.splice(index, 1);
        newTestimonials.splice(index + 1, 0, item);
        
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Update item name function
    const updateTestimonialName = (value, index) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index].name = value;
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Update item position function
    const updateTestimonialPosition = (value, index) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index].position = value;
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Update item company function
    const updateTestimonialCompany = (value, index) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index].company = value;
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Update item content function
    const updateTestimonialContent = (value, index) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index].content = value;
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Update item rating function
    const updateTestimonialRating = (value, index) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index].rating = value;
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Update item image function
    const updateTestimonialImage = (media, index) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index].imageUrl = media.url;
        newTestimonials[index].imageId = media.id;
        setAttributes({
            testimonials: newTestimonials
        });
    };

    // Generate rating stars
    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`digiblocks-rating-star ${i <= rating ? 'filled' : ''}`}
                    style={{ color: i <= rating ? ratingColor : '#e0e0e0' }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                </span>
            );
        }
        return stars;
    };

    // Generate CSS for styling the Testimonials block
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        const blockId = id;
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
            const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
            const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' };
            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
            `;
        } else {
            borderCSS = 'border: none;';
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Padding and margin
        const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
        const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
        
        // Content typography CSS
        let contentTypographyCSS = '';
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }
            
            if (contentTypography.fontSize && contentTypography.fontSize[activeDevice]) {
                contentTypographyCSS += `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};`;
            }
            
            if (contentTypography.fontWeight) {
                contentTypographyCSS += `font-weight: ${contentTypography.fontWeight};`;
            }
            
            if (contentTypography.fontStyle) {
                contentTypographyCSS += `font-style: ${contentTypography.fontStyle};`;
            }
            
            if (contentTypography.textTransform) {
                contentTypographyCSS += `text-transform: ${contentTypography.textTransform};`;
            }
            
            if (contentTypography.textDecoration) {
                contentTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
            }
            
            if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
                contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};`;
            }
            
            if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
                contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Name typography CSS
        let headingTypographyCSS = '';
        if (headingTypography) {
            if (headingTypography.fontFamily) {
                headingTypographyCSS += `font-family: ${headingTypography.fontFamily};`;
            }
            
            if (headingTypography.fontSize && headingTypography.fontSize[activeDevice]) {
                headingTypographyCSS += `font-size: ${headingTypography.fontSize[activeDevice]}${headingTypography.fontSizeUnit || 'px'};`;
            }
            
            if (headingTypography.fontWeight) {
                headingTypographyCSS += `font-weight: ${headingTypography.fontWeight};`;
            }
            
            if (headingTypography.fontStyle) {
                headingTypographyCSS += `font-style: ${headingTypography.fontStyle};`;
            }
            
            if (headingTypography.textTransform) {
                headingTypographyCSS += `text-transform: ${headingTypography.textTransform};`;
            }
            
            if (headingTypography.textDecoration) {
                headingTypographyCSS += `text-decoration: ${headingTypography.textDecoration};`;
            }
            
            if (headingTypography.lineHeight && headingTypography.lineHeight[activeDevice]) {
                headingTypographyCSS += `line-height: ${headingTypography.lineHeight[activeDevice]}${headingTypography.lineHeightUnit || 'em'};`;
            }
            
            if (headingTypography.letterSpacing && headingTypography.letterSpacing[activeDevice]) {
                headingTypographyCSS += `letter-spacing: ${headingTypography.letterSpacing[activeDevice]}${headingTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Position typography CSS
        let textTypographyCSS = '';
        if (textTypography) {
            if (textTypography.fontFamily) {
                textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
            }
            
            if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
                textTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};`;
            }
            
            if (textTypography.fontWeight) {
                textTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
            }
            
            if (textTypography.fontStyle) {
                textTypographyCSS += `font-style: ${textTypography.fontStyle};`;
            }
            
            if (textTypography.textTransform) {
                textTypographyCSS += `text-transform: ${textTypography.textTransform};`;
            }
            
            if (textTypography.textDecoration) {
                textTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
            }
            
            if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
                textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};`;
            }
            
            if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
                textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Hover effects
        let hoverCSS = '';
        
        // Box shadow hover
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }

        const columnsDevice = columns[activeDevice] || 2;
        const spacingDevice = itemSpacing[activeDevice] || 30;
        
        // Set base styles for the block
        return `
            /* Testimonials Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                position: relative;
                width: 100%;
            }

			[data-custom-id="${blockId}"] .digiblocks-testimonials-grid {
				display: grid;
				grid-template-columns: repeat(${columnsDevice}, 1fr);
				gap: ${spacingDevice}px;
			}
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                ${boxShadowCSS}
                background-color: ${backgroundColor || 'transparent'};
                transition: all 0.3s ease;
                position: relative;
				text-align: ${align};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-content:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${hoverCSS}
            }
            
            ${showQuoteIcon ? `
            [data-custom-id="${blockId}"] .digiblocks-testimonial-quote-icon {
                position: absolute;
                top: 6px;
                left: 10px;
                color: ${quoteIconColor};
                opacity: 0.3;
                line-height: 1;
            }

            [data-custom-id="${blockId}"] .digiblocks-testimonial-quote-icon svg {
                width: ${quoteIconSize[activeDevice]}px;
				height: ${quoteIconSize[activeDevice]}px;
            }
            ` : ''}
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-text {
                ${contentTypographyCSS}
                color: ${contentColor};
                margin: 0;
				position: relative;
				z-index: 1;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-author {
                display: flex;
                align-items: center;
                gap: 15px;
				justify-content: ${align === 'center' ? 'center' : 'flex-start'};
				${align === 'center' ? 'flex-direction: column;' : ''}
				${align === 'right' ? 'flex-direction: row-reverse;' : ''}
				position: relative;
				z-index: 1;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-image {
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
                border-radius: 50%;
                object-fit: cover;
                background: ${quoteIconColor};
                flex-shrink: 0;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-name {
                ${headingTypographyCSS}
                color: ${nameColor};
                margin: 0;
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-content:hover .digiblocks-testimonial-name {
                ${nameHoverColor ? `color: ${nameHoverColor};` : ''}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-testimonial-position {
                ${textTypographyCSS}
                color: ${positionColor};
                margin: 5px 0 0 0;
            }
            
            ${showRating ? `
            [data-custom-id="${blockId}"] .digiblocks-testimonial-rating {
                display: flex;
				align-items: center;
				gap: 2px;
				justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
				position: relative;
				z-index: 1;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-rating-star {
                font-size: 16px;
            }
            ` : ''}
            
            /* Editor-specific styles */
            [data-custom-id="${blockId}"] .digiblocks-testimonial-item-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 10px;
                top: -28px;
                background-color: #fff;
                padding: 2px;
                border-radius: 3px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12);
                z-index: 10;
            }

			[data-custom-id="${blockId}"] .digiblocks-image-button {
				position: relative;
				height: auto;
				padding: 0;
			}

			[data-custom-id="${blockId}"] .digiblocks-image-button span {
				position: absolute;
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
                            name="layouts"
                            title={__("Layout", "digiblocks")}
                            initialOpen={true}
                        >
							<ResponsiveControl
                                label={__("Columns", "digiblocks")}
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
                                    max={5}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Item Spacing", "digiblocks")}
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
                                    max={100}
                                    step={5}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

							<BaseControl label={__("Alignment", "digiblocks")}>
								<ToggleGroupControl
									value={align}
									onChange={(value) => setAttributes({ align: value })}
									isBlock
								>
									<ToggleGroupControlOption value="left" label={__("Left", "digiblocks")} aria-label={__("Left alignment", "digiblocks")} />
									<ToggleGroupControlOption value="center" label={__("Center", "digiblocks")} aria-label={__("Center alignment", "digiblocks")} />
									<ToggleGroupControlOption value="right" label={__("Right", "digiblocks")} aria-label={__("Right alignment", "digiblocks")} />
								</ToggleGroupControl>
							</BaseControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="testimonial-items"
                            title={__("Testimonials", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Show Ratings", "digiblocks")}
                                checked={showRating}
                                onChange={() => setAttributes({ showRating: !showRating })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__("Show Quote Icon", "digiblocks")}
                                checked={showQuoteIcon}
                                onChange={() => setAttributes({ showQuoteIcon: !showQuoteIcon })}
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
                                                title={__("Color Settings", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: nameColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                nameColor: value,
                                                            }),
                                                        label: __("Name Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: positionColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                positionColor: value,
                                                            }),
                                                        label: __("Position Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: contentColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                contentColor: value,
                                                            }),
                                                        label: __("Content Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                backgroundColor: value,
                                                            }),
                                                        label: __("Background Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: quoteIconColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                quoteIconColor: value,
                                                            }),
                                                        label: __("Quote Icon Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: ratingColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                ratingColor: value,
                                                            }),
                                                        label: __("Rating Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    } else if (tab.name === 'hover') {
                                        return (
                                            <PanelColorSettings
                                                title={__("Hover Color Settings", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: nameHoverColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                nameHoverColor: value,
                                                            }),
                                                        label: __("Name Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundHoverColor,
                                                        onChange: (value) =>
                                                            setAttributes({
                                                                backgroundHoverColor: value,
                                                            }),
                                                        label: __("Background Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    }
                                    
                                    return null;
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
                                label={__("Content Typography", "digiblocks")}
                                value={contentTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        contentTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.7, tablet: 1.6, mobile: 1.5 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Name Typography", "digiblocks")}
                                value={headingTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        headingTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.3, tablet: 1.3, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Position Typography", "digiblocks")}
                                value={textTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        textTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.4 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="sizes"
                            title={__("Sizes & Spacing", "digiblocks")}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__("Image Size", "digiblocks")}
                            >
                                <RangeControl
                                    value={imageSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            imageSize: {
                                                ...imageSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={32}
                                    max={200}
                                    step={4}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Quote Icon Size", "digiblocks")}
                            >
                                <RangeControl
                                    value={quoteIconSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            quoteIconSize: {
                                                ...quoteIconSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={20}
                                    max={200}
                                    step={5}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border-shadow"
                            title={__("Border & Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius with defaults when a style is first selected
                                    if ((value !== 'default' && value !== 'none') && 
                                        (borderStyle === 'default' || borderStyle === 'none' || !borderStyle)) {
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
                                                    desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
                                                    tablet: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
                                                    mobile: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' }
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
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    {/* Border Color */}
                                    <PanelColorSettings
                                        title={__("Border Color", "digiblocks")}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) =>
                                                    setAttributes({
                                                        borderColor: value,
                                                    }),
                                                label: __("Border Color", "digiblocks"),
                                            },
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
                                    
                                    {/* Border Radius */}
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                                                top: 12,
                                                right: 12,
                                                bottom: 12,
                                                left: 12,
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
                            )}
                            
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
                                        onClick={triggerAnimationPreview}
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

    // Render single testimonial
	const renderSingleTestimonial = (testimonial, index) => (
		<div
			key={testimonial.id}
			className="digiblocks-testimonial-item"
		>
			<div className="digiblocks-testimonial-content">
				{showQuoteIcon && <div className="digiblocks-testimonial-quote-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor"><path d="m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"/><path d="m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"/></svg></div>}
				
				{showRating && (
					<div className="digiblocks-testimonial-rating">
						{generateStars(testimonial.rating)}
					</div>
				)}
				
				<RichText
					tagName="p"
					className="digiblocks-testimonial-text"
					value={testimonial.content}
					onChange={(value) => updateTestimonialContent(value, index)}
					placeholder={__('Enter testimonial content...', 'digiblocks')}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
				
				<div className="digiblocks-testimonial-author">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => updateTestimonialImage(media, index)}
							allowedTypes={['image']}
							value={testimonial.imageId}
							render={({ open }) => (
								<Button 
									className={`digiblocks-image-button ${!testimonial.imageUrl ? 'empty' : ''}`} 
									onClick={open}
									icon={!testimonial.imageUrl ? 'format-image' : ''}
								>
									{testimonial.imageUrl ? (
										<img 
											src={testimonial.imageUrl} 
											alt={testimonial.name}
											className="digiblocks-testimonial-image"
										/>
									) : (
										<div 
											className="digiblocks-testimonial-image"
											style={{ background: quoteIconColor }}
										/>
									)}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					
					<div className="digiblocks-testimonial-info">
						<RichText
							tagName="h3"
							className="digiblocks-testimonial-name"
							value={testimonial.name}
							onChange={(value) => updateTestimonialName(value, index)}
							placeholder={__('Testimonial Name', 'digiblocks')}
							allowedFormats={['core/bold', 'core/italic']}
						/>
						<RichText
							tagName="p"
							className="digiblocks-testimonial-position"
							value={testimonial.position + (testimonial.company ? `, ${testimonial.company}` : '')}
							onChange={(value) => {
								const parts = value.split(',');
								updateTestimonialPosition(parts[0].trim(), index);
								if (parts[1]) {
									updateTestimonialCompany(parts[1].trim(), index);
								}
							}}
							placeholder={__('Position, Company', 'digiblocks')}
							allowedFormats={['core/bold', 'core/italic']}
						/>
					</div>
				</div>
				
				{/* Item Controls */}
				<div className="digiblocks-testimonial-item-controls">
					<Tooltip text={__('Move Up', 'digiblocks')}>
						<Button
							className="digiblocks-testimonial-item-move-up"
							onClick={() => moveTestimonialUp(index)}
							icon="arrow-up-alt2"
							disabled={index === 0}
							isSmall
						/>
					</Tooltip>
					<Tooltip text={__('Move Down', 'digiblocks')}>
						<Button
							className="digiblocks-testimonial-item-move-down"
							onClick={() => moveTestimonialDown(index)}
							icon="arrow-down-alt2"
							disabled={index === testimonials.length - 1}
							isSmall
						/>
					</Tooltip>
					<Tooltip text={__('Duplicate', 'digiblocks')}>
						<Button
							className="digiblocks-testimonial-item-duplicate"
							onClick={() => duplicateTestimonial(index)}
							icon="admin-page"
							isSmall
						/>
					</Tooltip>
					<Tooltip text={__('Remove', 'digiblocks')}>
						<Button
							className="digiblocks-testimonial-item-remove"
							onClick={() => removeTestimonial(index)}
							icon="trash"
							isSmall
						/>
					</Tooltip>
				</div>
			</div>
		</div>
	);

    // Render testimonials
    const renderTestimonials = () => {
		if (!testimonials || testimonials.length === 0) {
			return (
				<div className="digiblocks-no-testimonials">
					<p>{__('No testimonials found. Please add some testimonials.', 'digiblocks')}</p>
				</div>
			);
		}
		
		return testimonials.map((testimonial, index) => renderSingleTestimonial(testimonial, index));
	};

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-testimonials-block grid ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
        "data-custom-id": id, // Always set the block ID as data attribute for CSS targeting
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
				<div className="digiblocks-testimonials-grid">
					{renderTestimonials()}
				</div>
                
                <Button
                    variant="primary"
                    icon="plus"
                    onClick={addNewTestimonial}
                    style={{ width: '100%', marginTop: '40px', justifyContent: 'center' }}
                >
                    {__("Add Testimonial", "digiblocks")}
                </Button>
            </div>
        </>
    );
};

export default TestimonialsEdit;