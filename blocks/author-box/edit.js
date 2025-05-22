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
const { ResponsiveButtonGroup, ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveRangeControl } = digi.components;

/**
 * Edit function for the Author Box block
 */
const AuthorBoxEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        layout,
        spacing,
        avatarSize,
        nameColor,
        nameHoverColor,
        descriptionColor,
        backgroundColor,
        backgroundHoverColor,
        avatarBorderColor,
        avatarBorderHoverColor,
        avatarBorderWidth,
        avatarBorderRadius,
        socialIconColor,
        socialIconHoverColor,
        socialIconBackgroundColor,
        socialIconBackgroundHoverColor,
        socialButtonSize,
        socialIconSize,
        socialIconSpacing,
        socialIconBorderRadius,
        socialIconBorderStyle,
        socialIconBorderWidth,
        socialIconBorderColor,
        socialIconBorderHoverColor,
        padding,
        margin,
        boxShadow,
        boxShadowHover,
        borderWidth,
        borderStyle,
        borderColor,
        borderHoverColor,
        borderRadius,
        titleTypography,
        contentTypography,
        animation,
        displayAvatar,
        displayName,
        displayBio,
        displaySocial,
        socialProfiles
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

    // Layout options
    const layoutOptions = [
        { label: __("Horizontal", "digiblocks"), value: "horizontal" },
        { label: __("Vertical", "digiblocks"), value: "vertical" },
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

    // Social media platforms
    const socialPlatforms = [
        { id: 'website', label: __('Website', 'digiblocks'), icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192C2.8 212.5 0 233.9 0 256s2.8 43.5 8.1 64H131.2c-2.1-20.6-3.2-42-3.2-64s1.1-43.4 3.2-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>' },
        { id: 'facebook', label: __('Facebook', 'digiblocks'), icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>' },
        { id: 'twitter', label: __('Twitter/X', 'digiblocks'), icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>' },
        { id: 'instagram', label: __('Instagram', 'digiblocks'), icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>' },
        { id: 'linkedin', label: __('LinkedIn', 'digiblocks'), icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>' },
        { id: 'youtube', label: __('YouTube', 'digiblocks'), icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>' },
        { id: 'github', label: __('GitHub', 'digiblocks'), icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>' }
    ];

    // Toggle a social profile (enable/disable)
	const toggleSocialProfile = (profileId) => {
		// Create a deep copy of the current social profiles
		const updatedProfiles = JSON.parse(JSON.stringify(socialProfiles || {}));
		
		// If profile doesn't exist, initialize it
		if (!updatedProfiles[profileId]) {
			updatedProfiles[profileId] = { enabled: true };
		} else {
			// Toggle enabled state
			updatedProfiles[profileId].enabled = !updatedProfiles[profileId].enabled;
		}
		
		// Update the attribute with the new profile state
		setAttributes({ socialProfiles: updatedProfiles });
	};

    // Initialize socialProfiles if it's empty
    useEffect(() => {
        if (!socialProfiles || Object.keys(socialProfiles).length === 0) {
            const initialProfiles = {};
            socialPlatforms.forEach(platform => {
                initialProfiles[platform.id] = {
                    enabled: false
                };
            });
            setAttributes({ socialProfiles: initialProfiles });
        }
    }, []);

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
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
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }

        // Box shadow hover
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const inset = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Title typography CSS
        let titleTypographyCSS = '';
        if (titleTypography) {
            if (titleTypography.fontFamily) {
                titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
            }
            
            if (titleTypography.fontSize && titleTypography.fontSize[activeDevice]) {
                titleTypographyCSS += `font-size: ${titleTypography.fontSize[activeDevice]}${titleTypography.fontSizeUnit || 'px'};`;
            }
            
            if (titleTypography.fontWeight) {
                titleTypographyCSS += `font-weight: ${titleTypography.fontWeight};`;
            }
            
            if (titleTypography.fontStyle) {
                titleTypographyCSS += `font-style: ${titleTypography.fontStyle};`;
            }
            
            if (titleTypography.textTransform) {
                titleTypographyCSS += `text-transform: ${titleTypography.textTransform};`;
            }
            
            if (titleTypography.textDecoration) {
                titleTypographyCSS += `text-decoration: ${titleTypography.textDecoration};`;
            }
            
            if (titleTypography.lineHeight && titleTypography.lineHeight[activeDevice]) {
                titleTypographyCSS += `line-height: ${titleTypography.lineHeight[activeDevice]}${titleTypography.lineHeightUnit || 'em'};`;
            }
            
            if (titleTypography.letterSpacing && titleTypography.letterSpacing[activeDevice]) {
                titleTypographyCSS += `letter-spacing: ${titleTypography.letterSpacing[activeDevice]}${titleTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Content typography CSS (for bio)
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

        // Social icons border styles
        let socialIconBorderCSS = '';
        if (socialIconBorderStyle && socialIconBorderStyle !== 'none') {
            socialIconBorderCSS = `
                border-style: ${socialIconBorderStyle};
                border-color: ${socialIconBorderColor || 'transparent'};
                ${getDimensionCSS(socialIconBorderWidth, 'border-width', activeDevice)}
            `;
        }

        // Set base styles for the block
        return `
            /* Main block styles */
            .${id} {
                display: flex;
                flex-direction: ${layout === 'vertical' ? 'column' : 'row'};
                align-items: ${layout === 'vertical' ? 'center' : 'flex-start'};
                ${layout === 'vertical' ? 'text-align: center;' : ''}
				gap: ${spacing[activeDevice]}px;
                background-color: ${backgroundColor || 'transparent'};
                ${boxShadowCSS}
                ${borderCSS}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
                ${boxShadowHoverCSS}
            }
            
            /* Author avatar */
			.${id} .digiblocks-author-avatar {
				display: flex;
			}

            .${id} .digiblocks-author-avatar img {
                width: ${avatarSize[activeDevice]}px;
                height: ${avatarSize[activeDevice]}px;
                ${getDimensionCSS(avatarBorderRadius, 'border-radius', activeDevice)};
                object-fit: cover;
                ${avatarBorderWidth && avatarBorderWidth[activeDevice] && avatarBorderWidth[activeDevice].top ? 
                    `border: ${avatarBorderWidth[activeDevice].top}${avatarBorderWidth[activeDevice].unit || 'px'} solid ${avatarBorderColor || '#e0e0e0'};` : ''}
                transition: all 0.3s ease;
            }
            
            .${id}:hover .digiblocks-author-avatar img {
                ${avatarBorderHoverColor ? `border-color: ${avatarBorderHoverColor};` : ''}
            }
            
            /* Author content */
            .${id} .digiblocks-author-content {
                flex: 1;
                ${layout === 'vertical' ? 'width: 100%;' : ''}
            }
            
            /* Author name */
            .${id} .digiblocks-author-name {
                color: ${nameColor || '#333333'};
                margin-top: 0;
                margin-bottom: 0.3em;
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            .${id}:hover .digiblocks-author-name {
                ${nameHoverColor ? `color: ${nameHoverColor};` : ''}
            }
            
            /* Author bio */
            .${id} .digiblocks-author-description {
                color: ${descriptionColor || '#666666'};
                margin-top: 0;
                margin-bottom: 1em;
                ${contentTypographyCSS}
            }
            
            /* Social icons */
            .${id} .digiblocks-author-social {
                display: flex;
                gap: ${socialIconSpacing[activeDevice]?.value || 8}${socialIconSpacing[activeDevice]?.unit || 'px'};
                ${layout === 'vertical' ? 'justify-content: center;' : ''}
            }
            
            .${id} .digiblocks-author-social a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: ${socialButtonSize[activeDevice]?.value || 36}${socialButtonSize[activeDevice]?.unit || 'px'};
                height: ${socialButtonSize[activeDevice]?.value || 36}${socialButtonSize[activeDevice]?.unit || 'px'};
                ${getDimensionCSS(socialIconBorderRadius, 'border-radius', activeDevice)}
                background-color: ${socialIconBackgroundColor || '#f0f0f0'};
                color: ${socialIconColor || '#333333'};
                ${socialIconBorderCSS}
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-author-social a span,
            .${id} .digiblocks-author-social a svg {
                display: flex;
            }
            
            .${id} .digiblocks-author-social a svg {
                width: ${socialIconSize[activeDevice]?.value || 18}${socialIconSize[activeDevice]?.unit || 'px'};
                height: ${socialIconSize[activeDevice]?.value || 18}${socialIconSize[activeDevice]?.unit || 'px'};
                fill: currentColor;
            }
            
            .${id} .digiblocks-author-social a:hover {
                background-color: ${socialIconBackgroundHoverColor || '#333333'};
                color: ${socialIconHoverColor || '#ffffff'};
                ${socialIconBorderHoverColor ? `border-color: ${socialIconBorderHoverColor};` : ''}
                transform: translateY(-2px);
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
                            "Color Settings",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: nameColor,
                                onChange: (value) =>
                                    setAttributes({
                                        nameColor: value,
                                    }),
                                label: __(
                                    "Name Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: descriptionColor,
                                onChange: (value) =>
                                    setAttributes({
                                        descriptionColor: value,
                                    }),
                                label: __(
                                    "Bio Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: backgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Hover Color Settings",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: nameHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        nameHoverColor: value,
                                    }),
                                label: __(
                                    "Name Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: backgroundHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundHoverColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: borderHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        borderHoverColor: value,
                                    }),
                                label: __(
                                    "Border Color",
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

    // Render avatar tab content
    const renderAvatarTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Avatar Border",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: avatarBorderColor,
                                onChange: (value) =>
                                    setAttributes({
                                        avatarBorderColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
					
					<ResponsiveControl
                        label={__("Spacing", "digiblocks")}
                    >
						<RangeControl
							value={spacing[localActiveDevice]}
							onChange={(value) =>
                                setAttributes({
                                    spacing: {
                                        ...spacing,
                                        [localActiveDevice]: value,
                                    },
                                })
                            }
							min={10}
							max={200}
							step={1}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
						/>
					</ResponsiveControl>
					
					<ResponsiveControl
                        label={__("Avatar Size", "digiblocks")}
                    >
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
							min={40}
							max={200}
							step={5}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
						/>
					</ResponsiveControl>
                    
                    <ResponsiveControl
                        label={__("Border Width", "digiblocks")}
                    >
                        <DimensionControl
                            values={avatarBorderWidth && avatarBorderWidth[localActiveDevice] ? avatarBorderWidth[localActiveDevice] : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                unit: 'px'
                            }}
                            onChange={(value) =>
                                setAttributes({
                                    avatarBorderWidth: {
                                        ...avatarBorderWidth,
                                        [localActiveDevice]: value,
                                    },
                                })
                            }
                            linked={true}
                        />
                    </ResponsiveControl>
                    
                    <ResponsiveControl
                        label={__("Border Radius", "digiblocks")}
                    >
                        <DimensionControl
                            values={avatarBorderRadius && avatarBorderRadius[localActiveDevice] ? avatarBorderRadius[localActiveDevice] : {
                                top: 50,
                                right: 50,
                                bottom: 50,
                                left: 50,
                                unit: '%'
                            }}
                            onChange={(value) =>
                                setAttributes({
                                    avatarBorderRadius: {
                                        ...avatarBorderRadius,
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
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Avatar Border Hover",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: avatarBorderHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        avatarBorderHoverColor: value,
                                    }),
                                label: __(
                                    "Border Color",
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

    // Render social tab content
    const renderSocialTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Social Icon Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: socialIconColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: socialIconBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconBackgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: socialIconBorderColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconBorderColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                    
                    {/* Border Style Dropdown */}
                    <SelectControl
                        label={__("Border Style", "digiblocks")}
                        value={socialIconBorderStyle || 'none'}
                        options={borderStyleOptions}
                        onChange={(value) => {
                            setAttributes({
                                socialIconBorderStyle: value,
                            });
                        }}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    {/* Show border width only if border style is selected */}
                    {socialIconBorderStyle && socialIconBorderStyle !== 'none' && (
                        <>
                            <ResponsiveControl
                                label={__("Border Width", "digiblocks")}
                            >
                                <DimensionControl
                                    values={socialIconBorderWidth && socialIconBorderWidth[localActiveDevice] ? socialIconBorderWidth[localActiveDevice] : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                        unit: 'px'
                                    }}
                                    onChange={(value) =>
                                        setAttributes({
                                            socialIconBorderWidth: {
                                                ...socialIconBorderWidth,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    linked={true}
                                />
                            </ResponsiveControl>
                        </>
                    )}
					
					<ResponsiveRangeControl
						label={__("Button Size", "digiblocks")}
						value={socialButtonSize}
						onChange={(value) => setAttributes({ socialButtonSize: value })}
						units={[
							{ label: 'px', value: 'px' },
							{ label: 'em', value: 'em' },
							{ label: 'rem', value: 'rem' },
						]}
						defaultUnit="px"
						min={20}
						max={100}
						step={1}
						defaultValues={{
							desktop: { value: 36, unit: 'px' },
							tablet: { value: 32, unit: 'px' },
							mobile: { value: 28, unit: 'px' }
						}}
					/>
					
					<ResponsiveRangeControl
						label={__("Icon Size", "digiblocks")}
						value={socialIconSize}
						onChange={(value) => setAttributes({ socialIconSize: value })}
						units={[
							{ label: 'px', value: 'px' },
							{ label: 'em', value: 'em' },
							{ label: 'rem', value: 'rem' },
						]}
						defaultUnit="px"
						min={10}
						max={60}
						step={1}
						defaultValues={{
							desktop: { value: 18, unit: 'px' },
							tablet: { value: 16, unit: 'px' },
							mobile: { value: 14, unit: 'px' }
						}}
					/>
					
					<ResponsiveRangeControl
						label={__("Icon Spacing", "digiblocks")}
						value={socialIconSpacing}
						onChange={(value) => setAttributes({ socialIconSpacing: value })}
						units={[
							{ label: 'px', value: 'px' },
							{ label: 'em', value: 'em' },
							{ label: 'rem', value: 'rem' },
						]}
						defaultUnit="px"
						min={2}
						max={50}
						step={1}
						defaultValues={{
							desktop: { value: 8, unit: 'px' },
							tablet: { value: 8, unit: 'px' },
							mobile: { value: 6, unit: 'px' }
						}}
					/>
					
					<ResponsiveControl
						label={__("Border Radius", "digiblocks")}
					>
						<DimensionControl
							values={socialIconBorderRadius && socialIconBorderRadius[localActiveDevice] ? socialIconBorderRadius[localActiveDevice] : {
								top: 50,
								right: 50,
								bottom: 50,
								left: 50,
								unit: '%'
							}}
							onChange={(value) =>
								setAttributes({
									socialIconBorderRadius: {
										...socialIconBorderRadius,
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
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Social Icon Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: socialIconHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconHoverColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: socialIconBackgroundHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconBackgroundHoverColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: socialIconBorderHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconBorderHoverColor: value,
                                    }),
                                label: __(
                                    "Border Hover Color",
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
                                {__('This is a placeholder. The actual author information will be displayed from the user profile on the frontend.', 'digiblocks')}
                            </Notice>

                            <ToggleGroupControl
                                label={__("Layout", "digiblocks")}
                                value={layout}
                                onChange={(value) => setAttributes({ layout: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                {layoutOptions.map(option => (
                                    <ToggleGroupControlOption 
                                        key={option.value} 
                                        value={option.value} 
                                        label={option.label} 
                                    />
                                ))}
                            </ToggleGroupControl>

							<ToggleControl
                                label={__("Display Avatar", "digiblocks")}
                                checked={displayAvatar}
                                onChange={(value) => setAttributes({ displayAvatar: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Display Name", "digiblocks")}
                                checked={displayName}
                                onChange={(value) => setAttributes({ displayName: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Display Bio", "digiblocks")}
                                checked={displayBio}
                                onChange={(value) => setAttributes({ displayBio: value })}
                                help={__("The bio text must be filled in the user profile page.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />

                            <ToggleControl
                                label={__("Display Social Icons", "digiblocks")}
                                checked={displaySocial}
                                onChange={(value) => setAttributes({ displaySocial: value })}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

                        {displaySocial && (
                            <TabPanelBody
                                tab="options"
                                name="social"
                                title={__('Social Media', 'digiblocks')}
                                initialOpen={false}
                            >
                                <Notice
                                    status="info"
                                    isDismissible={false}
                                    className="digiblocks-notice components-base-control"
                                >
                                    {__('Social links will be pulled from the user profile on the frontend.', 'digiblocks')}
                                </Notice>
                                
                                <p>{__("Select which social networks to display:", "digiblocks")}</p>
                                
                                {socialPlatforms.map(platform => {
                                    const isEnabled = socialProfiles && 
                                                     socialProfiles[platform.id] && 
                                                     socialProfiles[platform.id].enabled;
                                    
                                    return (
                                        <div key={platform.id} style={{ marginBottom: '10px' }}>
                                            <ToggleControl
                                                label={platform.label}
                                                checked={isEnabled}
                                                onChange={() => toggleSocialProfile(platform.id)}
                                                __nextHasNoMarginBottom={true}
                                            />
                                        </div>
                                    );
                                })}
                            </TabPanelBody>
                        )}
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
                        
                        {displayAvatar && (
                            <TabPanelBody
                                tab="style"
                                name="avatar"
                                title={__("Avatar", "digiblocks")}
                                initialOpen={false}
                            >
                                <TabPanel
                                    className="digiblocks-control-tabs"
                                    activeClass="active-tab"
                                    tabs={stateTabList}
                                >
                                    {(tab) => renderAvatarTabContent(tab.name)}
                                </TabPanel>
                            </TabPanelBody>
                        )}
                        
                        {displaySocial && (
                            <TabPanelBody
                                tab="style"
                                name="social"
                                title={__("Social Icons", "digiblocks")}
                                initialOpen={false}
                            >
                                <TabPanel
                                    className="digiblocks-control-tabs"
                                    activeClass="active-tab"
                                    tabs={stateTabList}
                                >
                                    {(tab) => renderSocialTabContent(tab.name)}
                                </TabPanel>
                            </TabPanelBody>
                        )}
                        
                        <TabPanelBody
                            tab="style"
                            name="typo"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            {displayName && (
                                <TypographyControl
                                    label={__(
                                        "Name Typography",
                                        "digiblocks"
                                    )}
                                    value={titleTypography}
                                    onChange={(value) =>
                                        setAttributes({
                                            titleTypography: value,
                                        })
                                    }
                                    defaults={{
                                        fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                                        fontSizeUnit: 'px',
                                        fontWeight: '600',
                                        lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                        lineHeightUnit: 'em',
                                    }}
                                />
                            )}
                            
                            {displayBio && (
                                <TypographyControl
                                    label={__(
                                        "Bio Typography",
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
                                        fontSizeUnit: 'px',
                                        fontWeight: 'normal',
                                        lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                        lineHeightUnit: 'em',
                                    }}
                                />
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__("Border & Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* Border Style Dropdown */}
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    setAttributes({
                                        borderStyle: value,
                                    });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border color and width only if border style is selected */}
                            {borderStyle && borderStyle !== 'none' && (
                                <>
                                    {/* Border Color */}
                                    <PanelColorSettings
                                        title={__(
                                            "Border Color",
                                            "digiblocks"
                                        )}
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
                                </>
                            )}
                            
                            {/* Border Radius (always show) */}
                            <ResponsiveControl
                                label={__("Border Radius", "digiblocks")}
                            >
                                <DimensionControl
                                    values={borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
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
                                    values={padding && padding[localActiveDevice] ? padding[localActiveDevice] : {
                                        top: 30,
                                        right: 30,
                                        bottom: 30,
                                        left: 30,
                                        unit: 'px'
                                    }}
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
                                    values={margin && margin[localActiveDevice] ? margin[localActiveDevice] : {
                                        top: 0,
                                        right: 0,
                                        bottom: 30,
                                        left: 0,
                                        unit: 'px'
                                    }}
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

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-author-box ${id} layout-${layout} ${customClasses || ''} ${animation !== 'none' ? `animate-${animation}` : ''}`,
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
                {displayAvatar && (
                    <div className="digiblocks-author-avatar">
                        <img src="https://i.pravatar.cc/500" alt="Author" />
                    </div>
                )}
                
                <div className="digiblocks-author-content">
                    {displayName && (
                        <h3 className="digiblocks-author-name">
                            {__('Author Name', 'digiblocks')}
                        </h3>
                    )}
                    
                    {displayBio && (
                        <p className="digiblocks-author-description">
                            {__('This is a placeholder for the author biography. The actual bio will be pulled from the user profile when displayed on the frontend.', 'digiblocks')}
                        </p>
                    )}
                    
                    {displaySocial && (
                        <div className="digiblocks-author-social">
                            {socialPlatforms.map(platform => {
                                const isEnabled = socialProfiles && 
                                                socialProfiles[platform.id] && 
                                                socialProfiles[platform.id].enabled;
                                
                                if (isEnabled) {
                                    return (
                                        <a key={platform.id} href="#" onClick={(e) => e.preventDefault()}>
                                            <span dangerouslySetInnerHTML={{ __html: platform.icon }}></span>
                                        </a>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AuthorBoxEdit;