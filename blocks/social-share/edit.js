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
    ToggleControl,
    RangeControl,
    Button,
    TabPanel,
    PanelBody,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Social Share block
 */
const SocialShareEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        showLabels,
        buttonStyle,
        buttonSize,
        iconSpacing,
        alignment,
        useCustomColors,
        buttonBackgroundColor,
        buttonTextColor,
        buttonHoverBackgroundColor,
        buttonHoverTextColor,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
		borderHoverColor,
        padding,
        margin,
        typography,
        facebook,
        twitter,
        linkedin,
        pinterest,
        reddit,
        whatsapp,
        telegram,
        email,
        print,
        animation
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

    // Border style options
    const borderStyleOptions = [
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Solid', 'digiblocks'), value: 'solid' },
        { label: __('Dashed', 'digiblocks'), value: 'dashed' },
        { label: __('Dotted', 'digiblocks'), value: 'dotted' },
        { label: __('Double', 'digiblocks'), value: 'double' },
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

    // Social networks data
    const socialNetworks = {
        facebook: {
            label: __('Facebook', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>',
            color: '#1877f2',
            shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=SHARE_URL'
        },
        twitter: {
            label: __('X', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>',
            color: '#000000',
            shareUrl: 'https://twitter.com/intent/tweet?url=SHARE_URL'
        },
        linkedin: {
            label: __('LinkedIn', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>',
            color: '#0077b5',
            shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=SHARE_URL'
        },
        pinterest: {
            label: __('Pinterest', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1em" height="1em"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>',
            color: '#e60023',
            shareUrl: 'https://pinterest.com/pin/create/button/?url=SHARE_URL'
        },
        reddit: {
            label: __('Reddit', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"/></svg>',
            color: '#ff4500',
            shareUrl: 'https://www.reddit.com/submit?url=SHARE_URL'
        },
        whatsapp: {
            label: __('WhatsApp', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>',
            color: '#25d366',
            shareUrl: 'https://api.whatsapp.com/send?text=SHARE_URL'
        },
        telegram: {
            label: __('Telegram', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="1em" height="1em"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>',
            color: '#0088cc',
            shareUrl: 'https://t.me/share/url?url=SHARE_URL'
        },
        email: {
            label: __('Email', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>',
            color: '#D44638',
            shareUrl: 'mailto:?body=SHARE_URL'
        },
        print: {
            label: __('Print', 'digiblocks'),
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M128 0C92.7 0 64 28.7 64 64l0 96 64 0 0-96 226.7 0L384 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0L128 0zM384 352l0 32 0 64-256 0 0-64 0-16 0-16 256 0zm64 32l32 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-64zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>',
            color: '#000000',
            shareUrl: 'javascript:window.print()'
        }
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }

        // Build CSS for each social button
        let socialButtonsCSS = '';
        Object.keys(socialNetworks).forEach(network => {
            if (attributes[network]) {
                const socialColor = socialNetworks[network].color;
                
                if (!useCustomColors) {
                    socialButtonsCSS += `
                        .${id} .digiblocks-social-share-${network} {
                            ${buttonStyle === 'filled' ? `background-color: ${socialColor};` : ''}
                            ${buttonStyle === 'filled' ? 'color: #ffffff;' : `color: ${socialColor};`}
                            ${buttonStyle === 'outlined' ? `border-color: ${socialColor};` : ''}
                        }
                        
                        .${id} .digiblocks-social-share-${network}:hover {
                            ${buttonStyle === 'filled' ? `background-color: ${socialColor}DD;` : ''}
                            ${buttonStyle === 'outlined' || buttonStyle === 'plain' ? `background-color: ${socialColor}22;` : ''}
                        }
                    `;
                }
            }
        });
        
        return `
            /* Social Share Buttons Block - ${id} */
            .${id} {
                ${getDimensionCSS(margin, 'margin', activeDevice)}
                display: flex;
                flex-wrap: wrap;
                justify-content: ${alignment[activeDevice]};
                gap: ${iconSpacing[activeDevice]}px;
            }
            
            .${id} .digiblocks-social-share-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
				gap: 8px;
                ${getDimensionCSS(padding, 'padding', activeDevice)}
                ${borderStyle !== 'none' ? `border-style: ${borderStyle};` : ''}
                ${borderStyle !== 'none' ? getDimensionCSS(borderWidth, 'border-width', activeDevice) : ''}
                ${borderStyle !== 'none' ? `border-color: ${borderColor || '#e0e0e0'};` : ''}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
                text-decoration: none;
                transition: all 0.3s ease;
                cursor: pointer;
                line-height: 1;
                /* Button size */
                ${buttonSize[activeDevice] ? `
                    width: ${buttonSize[activeDevice]}px;
                    height: ${buttonSize[activeDevice]}px;
                ` : ''}
                ${showLabels ? 'width: auto;height: auto;' : ''}
                
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

			${borderStyle !== 'none' && borderHoverColor ? `
				.${id} .digiblocks-social-share-button:hover {
					border-color: ${borderHoverColor};
				}
				` : ''}
            
            .${id} .digiblocks-social-share-button span,
            .${id} .digiblocks-social-share-button svg {
                display: flex;
            }
            
            .${id} .digiblocks-social-share-button svg {
                width: ${Math.floor(buttonSize[activeDevice] * 0.45)}px;
                height: ${Math.floor(buttonSize[activeDevice] * 0.45)}px;
                fill: currentColor;
            }
            
            /* Custom colors if enabled */
            ${useCustomColors ? `
                .${id} .digiblocks-social-share-button {
                    background-color: ${buttonBackgroundColor || 'transparent'};
                    color: ${buttonTextColor || '#333333'};
					${buttonStyle === 'outlined' ? `
						border-color: ${borderColor || '#e0e0e0'};
						` : ''}
                }
                
                .${id} .digiblocks-social-share-button:hover {
                    background-color: ${buttonHoverBackgroundColor || (buttonBackgroundColor ? buttonBackgroundColor + 'DD' : 'rgba(0,0,0,0.05)')};
                    color: ${buttonHoverTextColor || buttonTextColor || '#333333'};
                }
            ` : `
                /* Default styling based on button style */
                ${buttonStyle === 'filled' ? `
                    .${id} .digiblocks-social-share-button {
                        background-color: #555555;
                        color: #ffffff;
                    }
                ` : buttonStyle === 'outlined' ? `
                    .${id} .digiblocks-social-share-button {
                        background-color: transparent;
                        border-style: ${borderStyle !== 'none' ? borderStyle : 'solid'};
						border-width: ${getDimensionCSS(borderWidth, 'border-width', activeDevice).trim() || '2px'};
						border-color: ${borderColor || '#e0e0e0'};
                    }
                ` : `
                    .${id} .digiblocks-social-share-button {
                        background-color: transparent;
                    }
                    
                    .${id} .digiblocks-social-share-button:hover {
                        background-color: rgba(0,0,0,0.05);
                    }
                `}
            `}
            
            /* Individual social network styling */
            ${!useCustomColors ? socialButtonsCSS : ''}
            
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
                            name="social-networks"
                            title={__('Social Networks', 'digiblocks')}
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__('Facebook', 'digiblocks')}
                                checked={facebook}
                                onChange={(value) => setAttributes({ facebook: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('X (Twitter)', 'digiblocks')}
                                checked={twitter}
                                onChange={(value) => setAttributes({ twitter: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('LinkedIn', 'digiblocks')}
                                checked={linkedin}
                                onChange={(value) => setAttributes({ linkedin: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Pinterest', 'digiblocks')}
                                checked={pinterest}
                                onChange={(value) => setAttributes({ pinterest: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Reddit', 'digiblocks')}
                                checked={reddit}
                                onChange={(value) => setAttributes({ reddit: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('WhatsApp', 'digiblocks')}
                                checked={whatsapp}
                                onChange={(value) => setAttributes({ whatsapp: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Telegram', 'digiblocks')}
                                checked={telegram}
                                onChange={(value) => setAttributes({ telegram: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Email', 'digiblocks')}
                                checked={email}
                                onChange={(value) => setAttributes({ email: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Print', 'digiblocks')}
                                checked={print}
                                onChange={(value) => setAttributes({ print: value })}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="display"
                            title={__('Display', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Show Labels', 'digiblocks')}
                                checked={showLabels}
                                onChange={(value) => setAttributes({ showLabels: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleGroupControl
                                label={__("Button Style", "digiblocks")}
                                value={buttonStyle}
                                onChange={(value) => setAttributes({ buttonStyle: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="filled" 
                                    label={__("Filled", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="outlined" 
                                    label={__("Outlined", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="plain" 
                                    label={__("Plain", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            <ResponsiveControl
                                label={__('Button Size', 'digiblocks')}
                            >
                                <RangeControl
                                    value={buttonSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonSize: {
                                                ...buttonSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={20}
                                    max={80}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Buttons Spacing', 'digiblocks')}
                            >
                                <RangeControl
                                    value={iconSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconSpacing: {
                                                ...iconSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={40}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <ResponsiveControl
                                label={__('Buttons Alignment', 'digiblocks')}
                            >
                                <ToggleGroupControl
                                    value={alignment[localActiveDevice]}
                                    onChange={(value) => 
                                        setAttributes({
                                            alignment: {
                                                ...alignment,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
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
                            <ToggleControl
                                label={__('Use Custom Colors', 'digiblocks')}
                                checked={useCustomColors}
                                onChange={(value) => setAttributes({ useCustomColors: value })}
                                help={__('By default, social share buttons use their brand colors. Enable this to use custom colors.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {useCustomColors && (
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
                                                            value: buttonBackgroundColor,
                                                            onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                                                            label: __("Button Background", "digiblocks"),
                                                        },
                                                        {
                                                            value: buttonTextColor,
                                                            onChange: (value) => setAttributes({ buttonTextColor: value }),
                                                            label: __("Button Text", "digiblocks"),
                                                        }
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
                                                            value: buttonHoverBackgroundColor,
                                                            onChange: (value) => setAttributes({ buttonHoverBackgroundColor: value }),
                                                            label: __("Button Background", "digiblocks"),
                                                        },
                                                        {
                                                            value: buttonHoverTextColor,
                                                            onChange: (value) => setAttributes({ buttonHoverTextColor: value }),
                                                            label: __("Button Text", "digiblocks"),
                                                        },
                                                    ]}
                                                />
                                            );
                                        }
                                    }}
                                </TabPanel>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typography"
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
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border"
                            title={__('Border', 'digiblocks')}
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
								<>
									<TabPanel
										className="digiblocks-control-tabs"
										activeClass="active-tab"
										tabs={stateTabList}
									>
										{(tab) => {
											if (tab.name === 'normal') {
												return (
													<PanelColorSettings
														title={__("Border Color", "digiblocks")}
														initialOpen={true}
														enableAlpha={true}
														colorSettings={[
															{
																value: borderColor,
																onChange: (value) => setAttributes({ borderColor: value }),
																label: __("Border Color", "digiblocks"),
															}
														]}
													/>
												);
											} else {
												return (
													<PanelColorSettings
														title={__("Border Hover Color", "digiblocks")}
														initialOpen={true}
														enableAlpha={true}
														colorSettings={[
															{
																value: borderHoverColor,
																onChange: (value) => setAttributes({ borderHoverColor: value }),
																label: __("Border Hover Color", "digiblocks"),
															}
														]}
													/>
												);
											}
										}}
									</TabPanel>

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
								</>
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
                            initialOpen={false}
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
    const blockClasses = `digiblocks-social-share ${id} style-${buttonStyle} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`;

    // Block props
    const blockProps = useBlockProps({
        className: blockClasses,
        id: anchor || null,
    });

    // Render preview of buttons
    const renderSocialButtons = () => {
        return Object.keys(socialNetworks).map((network) => {
            if (attributes[network]) {
                const socialData = socialNetworks[network];
                return (
                    <div 
                        key={network}
                        className={`digiblocks-social-share-button digiblocks-social-share-${network}`}
                        role="button"
                        tabIndex="0"
                    >
                        <span dangerouslySetInnerHTML={{ __html: socialData.icon }} />
                        {showLabels && (
                            <span className="digiblocks-social-share-label">{socialData.label}</span>
                        )}
                    </div>
                );
            }
            return null;
        });
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
                {renderSocialButtons()}
            </div>
        </>
    );
};

export default SocialShareEdit;