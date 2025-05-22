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
    ToggleControl,
    RangeControl,
    Button,
    TextControl,
    Notice,
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
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl } = digi.components;

/**
 * Edit function for the Post Comments block
 */
const PostCommentsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        showAvatars,
        avatarSize,
        commentsPerPage,
        nestedComments,
        commentsOrder,
        displayTitle,
        titleText,
        customFormTitle,
        formTitle,
        displayLoggedIn,
        loggedInText,
        displayCookieConsent,
        cookieConsentText,
        displaySubmitButton,
        submitButtonText,
        displayCancelReply,
        cancelReplyText,
        titleColor,
		linkColor,
		linkHoverColor,
        textColor,
        metaColor,
        metaHoverColor,
        borderColor,
        backgroundColor,
        commentBackgroundColor,
        threadedCommentsBackgroundColor,
        replyButtonColor,
        replyButtonBgColor,
        replyButtonHoverColor,
        replyButtonBgHoverColor,
        formBackgroundColor,
        formInputColor,
        formInputBgColor,
        formInputBorderColor,
        formInputFocusBorderColor,
        submitButtonTextColor,
        submitButtonBgColor,
        submitButtonTextHoverColor,
        submitButtonBgHoverColor,
        padding,
        margin,
        avatarRadius,
        formBorderRadius,
        buttonBorderRadius,
        formPadding,
        buttonPadding,
        titleTypography,
        textTypography,
        contentTypography,
        buttonTypography,
        animation,
		boxShadow,
		boxShadowHover,
		commentBoxShadow,
		commentBoxShadowHover,
		threadedCommentBoxShadow,
		threadedCommentBoxShadowHover,
		formBoxShadow,
		formBoxShadowHover,
        buttonBoxShadow,
        buttonBoxShadowHover,
        borderRadius,
        borderWidth,
        borderStyle,
        commentBorderRadius,
        commentBorderWidth,
        commentBorderStyle,
        threadedCommentBorderRadius,
        threadedCommentBorderWidth,
        threadedCommentBorderStyle,
        formBorderWidth,
        formBorderStyle,
        buttonBorderWidth,
        buttonBorderStyle,
        buttonBorderColor,
        buttonBorderHoverColor,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state for local rendering
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

    // Border style options
    const borderStyleOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
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

    // Comments order options
    const commentsOrderOptions = [
        { label: __("Oldest first", "digiblocks"), value: "asc" },
        { label: __("Newest first", "digiblocks"), value: "desc" },
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
        
        return `
            /* Comments Block - ${id} */
            .${id} {
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                width: 100%;
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${borderStyle !== 'none' ? `
                    border-style: ${borderStyle};
                    border-color: ${borderColor || '#e0e0e0'};
                    ${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
                ` : ''}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                ${boxShadow && boxShadow.enable ? `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};transition: all 0.3s ease;` : ''}
            }

			.${id}:hover {
				${boxShadowHover && boxShadowHover.enable ? `box-shadow: ${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};` : ''}
			}

            /* Comments Title */
            .${id} .digiblocks-comments-title {
                color: ${titleColor || '#333333'};
                margin: 0 0 1.5rem;
                ${titleTypography.fontFamily ? `font-family: ${titleTypography.fontFamily};` : ''}
                ${titleTypography.fontSize?.[activeDevice] ? `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};` : ''}
                ${titleTypography.fontWeight ? `font-weight: ${titleTypography.fontWeight};` : ''}
                ${titleTypography.fontStyle ? `font-style: ${titleTypography.fontStyle};` : ''}
                ${titleTypography.textTransform ? `text-transform: ${titleTypography.textTransform};` : ''}
                ${titleTypography.textDecoration ? `text-decoration: ${titleTypography.textDecoration};` : ''}
                ${titleTypography.lineHeight?.[activeDevice] ? `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};` : ''}
                ${titleTypography.letterSpacing?.[activeDevice] ? `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};` : ''}
            }
            
            /* Comments List */
            .${id} .digiblocks-comments-list {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            /* Comment Item */
            .${id} .digiblocks-comment {
                margin-bottom: 1.5rem;
                ${commentBackgroundColor ? `background-color: ${commentBackgroundColor};` : ''}
                ${commentBorderStyle !== 'none' ? `
                    border-style: ${commentBorderStyle};
                    border-color: ${borderColor || '#e0e0e0'};
                    ${getDimensionCSS(commentBorderWidth, 'border-width', activeDevice)}
                ` : ''}
                ${getDimensionCSS(commentBorderRadius, 'border-radius', activeDevice)}
                ${commentBoxShadow && commentBoxShadow.enable ? `box-shadow: ${commentBoxShadow.horizontal}px ${commentBoxShadow.vertical}px ${commentBoxShadow.blur}px ${commentBoxShadow.spread}px ${commentBoxShadow.color};transition: all 0.3s ease;` : ''}
                padding: 1.5rem;
            }

			.${id} .digiblocks-comment:hover {
				${commentBoxShadowHover && commentBoxShadowHover.enable ? `box-shadow: ${commentBoxShadowHover.horizontal}px ${commentBoxShadowHover.vertical}px ${commentBoxShadowHover.blur}px ${commentBoxShadowHover.spread}px ${commentBoxShadowHover.color};` : ''}
			}
            
            /* Nested Comments */
            .${id} .digiblocks-comment-children {
                margin-top: 1.5rem;
                margin-left: 2.5rem;
                list-style: none;
                padding: 0;
            }
            
            .${id} .digiblocks-comment-children .digiblocks-comment {
                ${threadedCommentsBackgroundColor ? `background-color: ${threadedCommentsBackgroundColor};` : ''}
                ${threadedCommentBorderStyle !== 'none' ? `
                    border-style: ${threadedCommentBorderStyle};
                    border-color: ${borderColor || '#e0e0e0'};
                    ${getDimensionCSS(threadedCommentBorderWidth, 'border-width', activeDevice)}
                ` : ''}
                ${getDimensionCSS(threadedCommentBorderRadius, 'border-radius', activeDevice)}
                ${threadedCommentBoxShadow && threadedCommentBoxShadow.enable ? `box-shadow: ${threadedCommentBoxShadow.horizontal}px ${threadedCommentBoxShadow.vertical}px ${threadedCommentBoxShadow.blur}px ${threadedCommentBoxShadow.spread}px ${threadedCommentBoxShadow.color};transition: all 0.3s ease;` : ''}
            }

			.${id} .digiblocks-comment-children .digiblocks-comment:hover {
				${threadedCommentBoxShadowHover && threadedCommentBoxShadowHover.enable ? `box-shadow: ${threadedCommentBoxShadowHover.horizontal}px ${threadedCommentBoxShadowHover.vertical}px ${threadedCommentBoxShadowHover.blur}px ${threadedCommentBoxShadowHover.spread}px ${threadedCommentBoxShadowHover.color};` : ''}
			}
            
            /* Comment Header */
            .${id} .digiblocks-comment-header {
                display: flex;
                align-items: center;
                margin-bottom: 0.75rem;
                gap: 1rem;
            }
            
            /* Comment Avatar */
            .${id} .digiblocks-comment-avatar {
                flex-shrink: 0;
            }
            
            .${id} .digiblocks-comment-avatar img {
                width: ${avatarSize[activeDevice]}px;
                height: ${avatarSize[activeDevice]}px;
                ${getDimensionCSS(avatarRadius, 'border-radius', activeDevice)}
                object-fit: cover;
            }
            
            /* Comment Meta */
            .${id} .digiblocks-comment-meta {
                flex-grow: 1;
            }
            
            .${id} .digiblocks-comment-author {
                margin: 0 0 0.25rem;
				color: ${textColor || '#333333'};
                ${contentTypography.fontFamily ? `font-family: ${contentTypography.fontFamily};` : ''}
                ${contentTypography.fontSize?.[activeDevice] ? `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};` : ''}
                ${contentTypography.fontWeight ? `font-weight: ${contentTypography.fontWeight};` : ''}
                ${contentTypography.fontStyle ? `font-style: ${contentTypography.fontStyle};` : ''}
                font-weight: bold;
            }
            
            .${id} .digiblocks-comment-author a {
                color: ${linkColor || '#4a6cf7'};
				text-decoration: none;
            }
            
            .${id} .digiblocks-comment-author a:hover {
                color: ${linkHoverColor || '#333333'};
            }
            
            .${id} .digiblocks-comment-date {
                font-size: 0.875em;
                color: ${metaColor || '#666666'};
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
                ${textTypography.fontStyle ? `font-style: ${textTypography.fontStyle};` : ''}
            }
            
            /* Comment Content */
            .${id} .digiblocks-comment-content {
                color: ${textColor || '#333333'};
                ${contentTypography.fontFamily ? `font-family: ${contentTypography.fontFamily};` : ''}
                ${contentTypography.fontSize?.[activeDevice] ? `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};` : ''}
                ${contentTypography.fontWeight ? `font-weight: ${contentTypography.fontWeight};` : ''}
                ${contentTypography.fontStyle ? `font-style: ${contentTypography.fontStyle};` : ''}
                ${contentTypography.lineHeight?.[activeDevice] ? `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};` : ''}
                margin-bottom: 1rem;
            }
            
            /* Comment Reply Link */
            .${id} .digiblocks-comment-reply {
                text-align: right;
            }
            
            .${id} .digiblocks-comment-reply-link {
                display: inline-block;
                color: ${replyButtonColor || '#4a6cf7'};
                background-color: ${replyButtonBgColor || 'transparent'};
                ${buttonTypography.fontFamily ? `font-family: ${buttonTypography.fontFamily};` : ''}
                ${buttonTypography.fontSize?.[activeDevice] ? `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || 'px'};` : ''}
                ${buttonTypography.fontWeight ? `font-weight: ${buttonTypography.fontWeight};` : ''}
                ${buttonBorderStyle !== 'none' ? `
                    border-style: ${buttonBorderStyle};
                    border-color: ${buttonBorderColor || '#4a6cf7'};
                    ${getDimensionCSS(buttonBorderWidth, 'border-width', activeDevice)}
                ` : ''}
                ${getDimensionCSS(buttonBorderRadius, 'border-radius', activeDevice)}
                ${getDimensionCSS(buttonPadding, 'padding', activeDevice)}
                ${buttonBoxShadow && buttonBoxShadow.enable ? `box-shadow: ${buttonBoxShadow.horizontal}px ${buttonBoxShadow.vertical}px ${buttonBoxShadow.blur}px ${buttonBoxShadow.spread}px ${buttonBoxShadow.color};` : ''}
                text-decoration: none;
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-comment-reply-link:hover {
                color: ${replyButtonHoverColor || '#3a5ce5'};
                background-color: ${replyButtonBgHoverColor || 'transparent'};
                ${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
                ${buttonBoxShadowHover && buttonBoxShadowHover.enable ? `box-shadow: ${buttonBoxShadowHover.horizontal}px ${buttonBoxShadowHover.vertical}px ${buttonBoxShadowHover.blur}px ${buttonBoxShadowHover.spread}px ${buttonBoxShadowHover.color};` : ''}
            }
            
            /* Comment Form */
            .${id} .digiblocks-comment-form {
                margin-top: 2rem;
                background-color: ${formBackgroundColor || '#f9f9f9'};
                ${formBorderStyle !== 'none' ? `
                    border-style: ${formBorderStyle};
                    border-color: ${borderColor || '#e0e0e0'};
                    ${getDimensionCSS(formBorderWidth, 'border-width', activeDevice)}
                ` : ''}
                ${getDimensionCSS(formBorderRadius, 'border-radius', activeDevice)}
                ${getDimensionCSS(formPadding, 'padding', activeDevice)}
                ${formBoxShadow && formBoxShadow.enable ? `box-shadow: ${formBoxShadow.horizontal}px ${formBoxShadow.vertical}px ${formBoxShadow.blur}px ${formBoxShadow.spread}px ${formBoxShadow.color};transition: all 0.3s ease;` : ''}
            }

			.${id} .digiblocks-comment-form:hover {
				${formBoxShadowHover && formBoxShadowHover.enable ? `box-shadow: ${formBoxShadowHover.horizontal}px ${formBoxShadowHover.vertical}px ${formBoxShadowHover.blur}px ${formBoxShadowHover.spread}px ${formBoxShadowHover.color};` : ''}
			}
            
            .${id} .digiblocks-comment-form-title {
                margin-top: 0;
                margin-bottom: 1rem;
                color: ${titleColor || '#333333'};
                ${titleTypography.fontFamily ? `font-family: ${titleTypography.fontFamily};` : ''}
                ${titleTypography.fontSize?.[activeDevice] ? `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};` : ''}
                ${titleTypography.fontWeight ? `font-weight: ${titleTypography.fontWeight};` : ''}
            }
            
            .${id} .digiblocks-form-row {
                margin-bottom: 1rem;
            }
            
            .${id} .digiblocks-form-label {
                display: block;
                margin-bottom: 0.5rem;
                color: ${textColor || '#333333'};
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
            }
            
            .${id} .digiblocks-form-checkbox .digiblocks-form-label {
                margin-bottom: 0;
            }
            
            .${id} .digiblocks-form-input,
            .${id} .digiblocks-form-textarea {
                width: 100%;
                padding: 0.75rem;
                color: ${formInputColor || '#333333'};
                background-color: ${formInputBgColor || '#ffffff'};
                border: 1px solid ${formInputBorderColor || '#d1d5db'};
                border-radius: 4px;
                font-family: inherit;
                font-size: inherit;
                transition: border-color 0.3s ease;
            }
            
            .${id} .digiblocks-form-input:focus,
            .${id} .digiblocks-form-textarea:focus {
                outline: none;
                border-color: ${formInputFocusBorderColor || '#4a6cf7'};
            }
            
            .${id} .digiblocks-form-checkbox {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .${id} .digiblocks-form-checkbox-input {
                margin: 0;
            }
            
            .${id} .digiblocks-form-submit {
                margin-top: 1rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0.75rem 1.5rem;
                background-color: ${submitButtonBgColor || '#4a6cf7'};
                color: ${submitButtonTextColor || '#ffffff'};
                ${buttonTypography.fontFamily ? `font-family: ${buttonTypography.fontFamily};` : ''}
                ${buttonTypography.fontSize?.[activeDevice] ? `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || 'px'};` : ''}
                ${buttonTypography.fontWeight ? `font-weight: ${buttonTypography.fontWeight};` : ''}
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-form-submit:hover {
                background-color: ${submitButtonBgHoverColor || '#3a5ce5'};
                color: ${submitButtonTextHoverColor || '#ffffff'};
            }
            
            .${id} .digiblocks-form-cancel-reply {
                margin-left: 1rem;
                color: ${metaColor || '#666666'};
                text-decoration: none;
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
            }
            
            .${id} .digiblocks-logged-in-as {
                margin-bottom: 1rem;
                font-style: italic;
                color: ${metaColor || '#666666'};
                ${textTypography.fontFamily ? `font-family: ${textTypography.fontFamily};` : ''}
                ${textTypography.fontSize?.[activeDevice] ? `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};` : ''}
                ${textTypography.fontWeight ? `font-weight: ${textTypography.fontWeight};` : ''}
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

    // Render color tab content based on active tab
    const renderColorTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Text Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: titleColor,
                                onChange: (value) =>
                                    setAttributes({
                                        titleColor: value,
                                    }),
                                label: __(
                                    "Title Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: linkColor,
                                onChange: (value) =>
                                    setAttributes({
                                        linkColor: value,
                                    }),
                                label: __(
                                    "Name Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: textColor,
                                onChange: (value) =>
                                    setAttributes({
                                        textColor: value,
                                    }),
                                label: __(
                                    "Comment Text Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: metaColor,
                                onChange: (value) =>
                                    setAttributes({
                                        metaColor: value,
                                    }),
                                label: __(
                                    "Meta Text Color",
                                    "digiblocks"
                                ),
                            }
                        ]}
                    />
                    
                    <PanelColorSettings
                        title={__(
                            "Background Colors",
                            "digiblocks"
                        )}
                        initialOpen={false}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: backgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundColor: value,
                                    }),
                                label: __(
                                    "Block Background",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: commentBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        commentBackgroundColor: value,
                                    }),
                                label: __(
                                    "Comment Background",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: threadedCommentsBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        threadedCommentsBackgroundColor: value,
                                    }),
                                label: __(
                                    "Threaded Comment Background",
                                    "digiblocks"
                                ),
                            }
                        ]}
                    />
                    
                    <PanelColorSettings
                        title={__(
                            "Border Color",
                            "digiblocks"
                        )}
                        initialOpen={false}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: borderColor,
                                onChange: (value) =>
                                    setAttributes({
                                        borderColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            }
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: metaHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        metaHoverColor: value,
                                    }),
                                label: __(
                                    "Meta Text Hover Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: linkHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        linkHoverColor: value,
                                    }),
                                label: __(
                                    "Name Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };

    // Render reply button tab content based on active tab
    const renderReplyButtonTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Reply Button Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: replyButtonColor,
                                onChange: (value) =>
                                    setAttributes({
                                        replyButtonColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: replyButtonBgColor,
                                onChange: (value) =>
                                    setAttributes({
                                        replyButtonBgColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: buttonBorderColor,
                                onChange: (value) =>
                                    setAttributes({
                                        buttonBorderColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            }
                        ]}
                    />
                    
                    <SelectControl
                        label={__("Border Style", "digiblocks")}
                        value={buttonBorderStyle || 'none'}
                        options={borderStyleOptions}
                        onChange={(value) => setAttributes({ buttonBorderStyle: value })}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    {buttonBorderStyle !== 'none' && (
                        <ResponsiveControl label={__("Border Width", "digiblocks")}>
                            <DimensionControl
                                values={buttonBorderWidth[localActiveDevice]}
                                onChange={(value) =>
                                    setAttributes({
                                        buttonBorderWidth: {
                                            ...buttonBorderWidth,
                                            [localActiveDevice]: value,
                                        },
                                    })
                                }
                                linked={true}
                            />
                        </ResponsiveControl>
                    )}
                    
                    <ResponsiveControl label={__("Border Radius", "digiblocks")}>
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
                            linked={true}
                            units={[
                                { label: 'px', value: 'px' },
                                { label: '%', value: '%' }
                            ]}
                        />
                    </ResponsiveControl>
                    
                    <ResponsiveControl label={__("Padding", "digiblocks")}>
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
                            linked={false}
                        />
                    </ResponsiveControl>
                    
                    <BoxShadowControl
                        normalValue={buttonBoxShadow}
                        hoverValue={buttonBoxShadowHover}
                        onNormalChange={(value) =>
                            setAttributes({
                                buttonBoxShadow: value,
                            })
                        }
                        onHoverChange={(value) =>
                            setAttributes({
                                buttonBoxShadowHover: value,
                            })
                        }
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Reply Button Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: replyButtonHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        replyButtonHoverColor: value,
                                    }),
                                label: __(
                                    "Text Hover Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: replyButtonBgHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        replyButtonBgHoverColor: value,
                                    }),
                                label: __(
                                    "Background Hover Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: buttonBorderHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        buttonBorderHoverColor: value,
                                    }),
                                label: __(
                                    "Border Hover Color",
                                    "digiblocks"
                                ),
                            }
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };

    // Render form tab content based on active tab
    const renderFormTabContent = () => {
        return (
            <>
                <PanelColorSettings
                    title={__(
                        "Form Colors",
                        "digiblocks"
                    )}
                    initialOpen={true}
                    enableAlpha={true}
                    colorSettings={[
                        {
                            value: formBackgroundColor,
                            onChange: (value) =>
                                setAttributes({
                                    formBackgroundColor: value,
                                }),
                            label: __(
                                "Form Background",
                                "digiblocks"
                            ),
                        },
                        {
                            value: formInputColor,
                            onChange: (value) =>
                                setAttributes({
                                    formInputColor: value,
                                }),
                            label: __(
                                "Input Text Color",
                                "digiblocks"
                            ),
                        },
                        {
                            value: formInputBgColor,
                            onChange: (value) =>
                                setAttributes({
                                    formInputBgColor: value,
                                }),
                            label: __(
                                "Input Background",
                                "digiblocks"
                            ),
                        },
                        {
                            value: formInputBorderColor,
                            onChange: (value) =>
                                setAttributes({
                                    formInputBorderColor: value,
                                }),
                            label: __(
                                "Input Border",
                                "digiblocks"
                            ),
                        },
                        {
                            value: formInputFocusBorderColor,
                            onChange: (value) =>
                                setAttributes({
                                    formInputFocusBorderColor: value,
                                }),
                            label: __(
                                "Input Focus Border",
                                "digiblocks"
                            ),
                        }
                    ]}
                />
                
                <SelectControl
                    label={__("Form Border Style", "digiblocks")}
                    value={formBorderStyle || 'none'}
                    options={borderStyleOptions}
                    onChange={(value) => setAttributes({ formBorderStyle: value })}
                    __next40pxDefaultSize={true}
                    __nextHasNoMarginBottom={true}
                />
                
                {formBorderStyle !== 'none' && (
                    <ResponsiveControl label={__("Form Border Width", "digiblocks")}>
                        <DimensionControl
                            values={formBorderWidth[localActiveDevice]}
                            onChange={(value) =>
                                setAttributes({
                                    formBorderWidth: {
                                        ...formBorderWidth,
                                        [localActiveDevice]: value,
                                    },
                                })
                            }
                            linked={true}
                        />
                    </ResponsiveControl>
                )}
                
                <ResponsiveControl label={__("Form Border Radius", "digiblocks")}>
                    <DimensionControl
                        values={formBorderRadius[localActiveDevice]}
                        onChange={(value) =>
                            setAttributes({
                                formBorderRadius: {
                                    ...formBorderRadius,
                                    [localActiveDevice]: value,
                                },
                            })
                        }
                        linked={true}
                        units={[
                            { label: 'px', value: 'px' },
                            { label: '%', value: '%' }
                        ]}
                    />
                </ResponsiveControl>
                
                <ResponsiveControl label={__("Form Padding", "digiblocks")}>
                    <DimensionControl
                        values={formPadding[localActiveDevice]}
                        onChange={(value) =>
                            setAttributes({
                                formPadding: {
                                    ...formPadding,
                                    [localActiveDevice]: value,
                                },
                            })
                        }
                        linked={false}
                    />
                </ResponsiveControl>
                
                <PanelColorSettings
                    title={__(
                        "Submit Button Colors",
                        "digiblocks"
                    )}
                    initialOpen={false}
                    enableAlpha={true}
                    colorSettings={[
                        {
                            value: submitButtonTextColor,
                            onChange: (value) =>
                                setAttributes({
                                    submitButtonTextColor: value,
                                }),
                            label: __(
                                "Text Color",
                                "digiblocks"
                            ),
                        },
                        {
                            value: submitButtonBgColor,
                            onChange: (value) =>
                                setAttributes({
                                    submitButtonBgColor: value,
                                }),
                            label: __(
                                "Background Color",
                                "digiblocks"
                            ),
                        },
                        {
                            value: submitButtonTextHoverColor,
                            onChange: (value) =>
                                setAttributes({
                                    submitButtonTextHoverColor: value,
                                }),
                            label: __(
                                "Text Hover Color",
                                "digiblocks"
                            ),
                        },
                        {
                            value: submitButtonBgHoverColor,
                            onChange: (value) =>
                                setAttributes({
                                    submitButtonBgHoverColor: value,
                                }),
                            label: __(
                                "Background Hover Color",
                                "digiblocks"
                            ),
                        }
                    ]}
                />

            	<BoxShadowControl
					normalValue={formBoxShadow}
					hoverValue={formBoxShadowHover}
					onNormalChange={(value) =>
						setAttributes({
							formBoxShadow: value,
						})
					}
					onHoverChange={(value) =>
						setAttributes({
							formBoxShadowHover: value,
						})
					}
				/>
            </>
        );
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
                                {__('This is a placeholder. The actual comments will be displayed on the frontend.', 'digiblocks')}
                            </Notice>

                            <ToggleGroupControl
                                label={__("Comments Order", "digiblocks")}
                                value={commentsOrder}
                                onChange={(value) => setAttributes({ commentsOrder: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                {commentsOrderOptions.map(option => (
                                    <ToggleGroupControlOption 
                                        key={option.value} 
                                        value={option.value} 
                                        label={option.label} 
                                    />
                                ))}
                            </ToggleGroupControl>

                            <RangeControl
                                label={__('Comments per page', 'digiblocks')}
                                value={commentsPerPage}
                                onChange={(value) => setAttributes({ commentsPerPage: value })}
                                min={0}
                                max={100}
                                step={1}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__('Show Avatars', 'digiblocks')}
                                checked={showAvatars}
                                onChange={(value) => setAttributes({ showAvatars: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {showAvatars && (
                                <ResponsiveControl label={__('Avatar Size', 'digiblocks')}>
                                    <RangeControl
                                        value={avatarSize[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                avatarSize: {
                                                    ...avatarSize,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                        min={20}
                                        max={100}
                                        step={1}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                            )}

                            <ToggleControl
                                label={__('Enable Nested Comments', 'digiblocks')}
                                checked={nestedComments}
                                onChange={(value) => setAttributes({ nestedComments: value })}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="labels"
                            title={__('Labels', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Display Title', 'digiblocks')}
                                checked={displayTitle}
                                onChange={(value) => setAttributes({ displayTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {displayTitle && (
                                <TextControl
                                    label={__('Title Text', 'digiblocks')}
                                    value={titleText}
                                    onChange={(value) => setAttributes({ titleText: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <ToggleControl
                                label={__('Display Custom Form Title', 'digiblocks')}
                                checked={customFormTitle}
                                onChange={(value) => setAttributes({ customFormTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {customFormTitle && (
                                <TextControl
                                    label={__('Form Title', 'digiblocks')}
                                    value={formTitle}
                                    onChange={(value) => setAttributes({ formTitle: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <ToggleControl
                                label={__('Display Logged In Message', 'digiblocks')}
                                checked={displayLoggedIn}
                                onChange={(value) => setAttributes({ displayLoggedIn: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {displayLoggedIn && (
                                <TextControl
                                    label={__('Logged In Text', 'digiblocks')}
                                    value={loggedInText}
                                    onChange={(value) => setAttributes({ loggedInText: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <ToggleControl
                                label={__('Display Cookie Consent', 'digiblocks')}
                                checked={displayCookieConsent}
                                onChange={(value) => setAttributes({ displayCookieConsent: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {displayCookieConsent && (
                                <TextControl
                                    label={__('Cookie Consent Text', 'digiblocks')}
                                    value={cookieConsentText}
                                    onChange={(value) => setAttributes({ cookieConsentText: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <ToggleControl
                                label={__('Custom Submit Button Text', 'digiblocks')}
                                checked={displaySubmitButton}
                                onChange={(value) => setAttributes({ displaySubmitButton: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {displaySubmitButton && (
                                <TextControl
                                    label={__('Submit Button Text', 'digiblocks')}
                                    value={submitButtonText}
                                    onChange={(value) => setAttributes({ submitButtonText: value })}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}

                            <ToggleControl
                                label={__('Custom Cancel Reply Text', 'digiblocks')}
                                checked={displayCancelReply}
                                onChange={(value) => setAttributes({ displayCancelReply: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {displayCancelReply && (
                                <TextControl
                                    label={__('Cancel Reply Text', 'digiblocks')}
                                    value={cancelReplyText}
                                    onChange={(value) => setAttributes({ cancelReplyText: value })}
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
                            title={__("Colors", "digiblocks")}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderColorTabContent(tab.name)}
                            </TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__(
                                    "Title Typography",
                                    "digiblocks"
                                )}
                                value={titleTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        titleTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                                    fontWeight: '600',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Comment Typography",
                                    "digiblocks"
                                )}
                                value={contentTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        contentTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Meta Typography",
                                    "digiblocks"
                                )}
                                value={textTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        textTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Button Typography",
                                    "digiblocks"
                                )}
                                value={buttonTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        buttonTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                                    fontWeight: '500',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
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
                        
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__("Borders & Radius", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle !== 'none' && (
                                <ResponsiveControl label={__("Border Width", "digiblocks")}>
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
                                        linked={true}
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ResponsiveControl label={__("Border Radius", "digiblocks")}>
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
                                    linked={true}
                                    units={[
                                        { label: 'px', value: 'px' },
                                        { label: '%', value: '%' }
                                    ]}
                                />
                            </ResponsiveControl>
                            
                            <SelectControl
                                label={__("Comment Border Style", "digiblocks")}
                                value={commentBorderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ commentBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {commentBorderStyle !== 'none' && (
                                <ResponsiveControl label={__("Comment Border Width", "digiblocks")}>
                                    <DimensionControl
                                        values={commentBorderWidth[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                commentBorderWidth: {
                                                    ...commentBorderWidth,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                        linked={true}
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ResponsiveControl label={__("Comment Border Radius", "digiblocks")}>
                                <DimensionControl
                                    values={commentBorderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            commentBorderRadius: {
                                                ...commentBorderRadius,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    linked={true}
                                    units={[
                                        { label: 'px', value: 'px' },
                                        { label: '%', value: '%' }
                                    ]}
                                />
                            </ResponsiveControl>
                            
                            {nestedComments && (
                                <>
                                    <SelectControl
                                        label={__("Nested Comment Border Style", "digiblocks")}
                                        value={threadedCommentBorderStyle || 'none'}
                                        options={borderStyleOptions}
                                        onChange={(value) => setAttributes({ threadedCommentBorderStyle: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    {threadedCommentBorderStyle !== 'none' && (
                                        <ResponsiveControl label={__("Nested Comment Border Width", "digiblocks")}>
                                            <DimensionControl
                                                values={threadedCommentBorderWidth[localActiveDevice]}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        threadedCommentBorderWidth: {
                                                            ...threadedCommentBorderWidth,
                                                            [localActiveDevice]: value,
                                                        },
                                                    })
                                                }
                                                linked={true}
                                            />
                                        </ResponsiveControl>
                                    )}
                                    
                                    <ResponsiveControl label={__("Nested Comment Border Radius", "digiblocks")}>
                                        <DimensionControl
                                            values={threadedCommentBorderRadius[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    threadedCommentBorderRadius: {
                                                        ...threadedCommentBorderRadius,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            linked={true}
                                            units={[
                                                { label: 'px', value: 'px' },
                                                { label: '%', value: '%' }
                                            ]}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                            
                            {showAvatars && (
                                <ResponsiveControl label={__("Avatar Radius", "digiblocks")}>
                                    <DimensionControl
                                        values={avatarRadius[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                avatarRadius: {
                                                    ...avatarRadius,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                        linked={true}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' }
                                        ]}
                                    />
                                </ResponsiveControl>
                            )}
                            
							<div style={{ marginBottom: '1rem' }}>
								<BoxShadowControl
									label={__('Block Box Shadow', 'digiblocks')}
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
							</div>
                            
                            <div style={{ marginBottom: '1rem' }}>
								<BoxShadowControl
									label={__('Comment Box Shadow', 'digiblocks')}
									normalValue={commentBoxShadow}
									hoverValue={commentBoxShadowHover}
									onNormalChange={(value) =>
										setAttributes({
											commentBoxShadow: value,
										})
									}
									onHoverChange={(value) =>
										setAttributes({
											commentBoxShadowHover: value,
										})
									}
								/>
							</div>
                            
                            {nestedComments && (
								<div style={{ marginBottom: '1rem' }}>
									<BoxShadowControl
										label={__('Nested Comment Box Shadow', 'digiblocks')}
										normalValue={threadedCommentBoxShadow}
										hoverValue={threadedCommentBoxShadowHover}
										onNormalChange={(value) =>
											setAttributes({
												threadedCommentBoxShadow: value,
											})
										}
										onHoverChange={(value) =>
											setAttributes({
												threadedCommentBoxShadowHover: value,
											})
										}
									/>
								</div>
							)}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="replyButton"
                            title={__("Reply Button", "digiblocks")}
                            initialOpen={false}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderReplyButtonTabContent(tab.name)}
                            </TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="form"
                            title={__("Comment Form", "digiblocks")}
                            initialOpen={false}
                        >
                            {renderFormTabContent()}
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
                                label={__(
                                    "Animation Effect",
                                    "digiblocks"
                                )}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) =>
                                    setAttributes({
                                        animation: value,
                                    })
                                }
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

    // Build class names
    const blockClasses = `digiblocks-comments ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ""}`;

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: blockClasses,
        id: anchor || null,
    });

    // Example comments for the preview
    const exampleComments = [
        {
            id: 1,
            author: 'John Smith',
            authorUrl: '#',
            avatarUrl: 'https://i.pravatar.cc/150',
            date: '3 days ago',
            content: 'This is an example comment. The actual comments will be displayed from WordPress database on the frontend. This block allows you to style how the comments look.',
            children: [
                {
                    id: 2,
                    author: 'Sarah Johnson',
                    authorUrl: '#',
                    avatarUrl: 'https://i.pravatar.cc/150',
                    date: '2 days ago',
                    content: 'This is a reply to the above comment. You can customize the appearance of nested comments separately from top-level comments.',
                }
            ]
        },
        {
            id: 3,
            author: 'Michael Brown',
            authorUrl: '#',
            avatarUrl: 'https://i.pravatar.cc/150',
            date: '1 day ago',
            content: 'Another example comment. You can control many aspects of the comments appearance including typography, colors, spacing, and more.',
        }
    ];

    // Render comment function
    const renderComment = (comment, isChild = false) => {
        return (
            <li key={comment.id} className="digiblocks-comment">
                <div className="digiblocks-comment-header">
                    {showAvatars && (
                        <div className="digiblocks-comment-avatar">
                            <img src={comment.avatarUrl} alt={comment.author} />
                        </div>
                    )}
                    <div className="digiblocks-comment-meta">
                        <h4 className="digiblocks-comment-author">
                            <a href={comment.authorUrl}>{comment.author}</a>
                        </h4>
                        <div className="digiblocks-comment-date">
                            {comment.date}
                        </div>
                    </div>
                </div>
                <div className="digiblocks-comment-content">
                    <p>{comment.content}</p>
                </div>
                <div className="digiblocks-comment-reply">
                    <a href="#" className="digiblocks-comment-reply-link" onClick={(e) => e.preventDefault()}>
                        {__('Reply', 'digiblocks')}
                    </a>
                </div>
                
                {nestedComments && comment.children && comment.children.length > 0 && (
                    <ul className="digiblocks-comment-children">
                        {comment.children.map(childComment => renderComment(childComment, true))}
                    </ul>
                )}
            </li>
        );
    };

    // Form for post comments preview
    const renderForm = () => {
        return (
            <div className="digiblocks-comment-form">
                {customFormTitle && (
                    <h3 className="digiblocks-comment-form-title">
                        {formTitle || __('Leave a Reply', 'digiblocks')}
                    </h3>
                )}
                
                {displayLoggedIn && (
                    <div className="digiblocks-logged-in-as">
                        {loggedInText || __('Logged in as admin. Log out?', 'digiblocks')}
                    </div>
                )}
                
                <form>
                    <div className="digiblocks-form-row">
                        <label htmlFor="comment" className="digiblocks-form-label">{__('Comment', 'digiblocks')}</label>
                        <textarea id="comment" className="digiblocks-form-textarea" rows="6"></textarea>
                    </div>
                    
                    <div className="digiblocks-form-row digiblocks-form-row-name">
                        <label htmlFor="author" className="digiblocks-form-label">{__('Name', 'digiblocks')}</label>
                        <input id="author" className="digiblocks-form-input" type="text" />
                    </div>
                    
                    <div className="digiblocks-form-row digiblocks-form-row-email">
                        <label htmlFor="email" className="digiblocks-form-label">{__('Email', 'digiblocks')}</label>
                        <input id="email" className="digiblocks-form-input" type="email" />
                    </div>
                    
                    <div className="digiblocks-form-row digiblocks-form-row-website">
                        <label htmlFor="url" className="digiblocks-form-label">{__('Website', 'digiblocks')}</label>
                        <input id="url" className="digiblocks-form-input" type="url" />
                    </div>
                    
                    {displayCookieConsent && (
                        <div className="digiblocks-form-row digiblocks-form-checkbox">
                            <input 
                                type="checkbox" 
                                id="wp-comment-cookies-consent" 
                                className="digiblocks-form-checkbox-input" 
                            />
                            <label htmlFor="wp-comment-cookies-consent" className="digiblocks-form-label">
                                {cookieConsentText || __('Save my name, email, and website in this browser for the next time I comment.', 'digiblocks')}
                            </label>
                        </div>
                    )}
                    
                    <button type="button" className="digiblocks-form-submit">
                        {submitButtonText || __('Post Comment', 'digiblocks')}
                    </button>
                    
                    {displayCancelReply && (
                        <a href="#" className="digiblocks-form-cancel-reply" onClick={(e) => e.preventDefault()}>
                            {cancelReplyText || __('Cancel reply', 'digiblocks')}
                        </a>
                    )}
                </form>
            </div>
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
                {displayTitle && (
                    <h3 className="digiblocks-comments-title">
                        {titleText || __('Comments', 'digiblocks')}
                    </h3>
                )}
                
                <ul className="digiblocks-comments-list">
                    {exampleComments.map(comment => renderComment(comment))}
                </ul>
                
                {renderForm()}
            </div>
        </>
    );
};

export default PostCommentsEdit;