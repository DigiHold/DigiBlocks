/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    TabPanel,
    Button,
    ToggleControl,
    Tooltip,
    TextControl,
    Popover,
    BaseControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef, Fragment } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Social Icons SVG components
 */
const socialIconsSVG = {
    facebook: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>,
    twitter: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>,
    instagram: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>,
    pinterest: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="1em" height="1em"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>,
    youtube: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>,
    dribbble: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"/></svg>,
    github: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="1em" height="1em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>,
    behance: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"/></svg>,
    vimeo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"/></svg>,
    tiktok: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>,
    email: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>,
    website: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="1em" height="1em"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>,
};

// Icon for adding a new social profile
const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>;

/**
 * Edit function for the Social Icons block
 */
const SocialIconsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        icons,
        iconSize,
        iconSpacing,
        iconColor,
        iconHoverColor,
        iconBackground,
        iconHoverBackground,
        iconBorderStyle,
        iconBorderWidth, 
        iconBorderRadius,
        iconBorderColor,
        iconHoverBorderColor,
        labelColor,
        labelHoverColor,
        labelSpacing,
        align,
        padding,
        animation,
        showLabels,
        labelPosition,
        textTypography,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");
    
    // State for URL popover
    const [urlPopover, setUrlPopover] = useState(null);
    
    // State for social network selection popover
    const [socialSelectPopover, setSocialSelectPopover] = useState(null);
    
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
        // Ensure we have at least one icon if the array is empty
		if (!icons || icons.length === 0) {
			setAttributes({
				icons: [
					{
						id: `social-icon-${clientId.substr(0, 8)}-1`,
						iconValue: {
							name: 'Facebook',
							network: 'facebook',
							svg: 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'
						},
						url: 'https://facebook.com',
						label: 'Facebook',
						openInNewTab: true,
						rel: 'nofollow'
					}
				]
			});
		}
    }, [clientId, icons, setAttributes, id]);

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

    // Available social networks
    const socialNetworks = [
        { label: __('Facebook', 'digiblocks'), value: 'facebook' },
        { label: __('Twitter', 'digiblocks'), value: 'twitter' },
        { label: __('LinkedIn', 'digiblocks'), value: 'linkedin' },
        { label: __('Instagram', 'digiblocks'), value: 'instagram' },
        { label: __('Pinterest', 'digiblocks'), value: 'pinterest' },
        { label: __('YouTube', 'digiblocks'), value: 'youtube' },
        { label: __('Dribbble', 'digiblocks'), value: 'dribbble' },
        { label: __('GitHub', 'digiblocks'), value: 'github' },
        { label: __('Behance', 'digiblocks'), value: 'behance' },
        { label: __('Vimeo', 'digiblocks'), value: 'vimeo' },
        { label: __('TikTok', 'digiblocks'), value: 'tiktok' },
        { label: __('Email', 'digiblocks'), value: 'email' },
        { label: __('Website', 'digiblocks'), value: 'website' },
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

    // Add social icon
    const addSocialIcon = () => {
        // Open the social selection popover for the newly added icon
        openSocialSelectPopover();
    };
    
    // Open social network selection popover
    const openSocialSelectPopover = () => {
        setSocialSelectPopover({
            target: document.querySelector('.add-social')
        });
    };
    
    // Close social network selection popover
    const closeSocialSelectPopover = () => {
        setSocialSelectPopover(null);
    };
    
    // Add a specific social network
    const addSpecificSocialNetwork = (network) => {
        // Get list of networks already in use
        const usedNetworks = icons.map(icon => 
            icon.iconValue && icon.iconValue.network ? icon.iconValue.network : null
        ).filter(Boolean);
        
        // Only add if this network isn't already in use
        if (usedNetworks.includes(network)) {
            return;
        }
        
        const newSocialId = `social-icon-${clientId.substr(0, 8)}-${Date.now()}`;
        const newIcon = {
            id: newSocialId,
            iconValue: {
                name: network.charAt(0).toUpperCase() + network.slice(1),
                network: network,
                svg: socialIconsSVG[network] ? socialIconsSVG[network].props.children.props.d : ''
            },
            url: '',
            label: network.charAt(0).toUpperCase() + network.slice(1),
            openInNewTab: true,
            rel: 'nofollow'
        };
        
        setAttributes({
            icons: [...icons, newIcon]
        });
        
        // Close the social selection popover
        closeSocialSelectPopover();
        
        // Open the URL popover for the newly added social icon
        setTimeout(() => {
            const socialIndex = icons.length;
            openUrlPopover(socialIndex);
        }, 100);
    };
    
    // Remove social icon
    const removeSocialIcon = (index) => {
        // Only remove if there are more than 1 icons (ensure at least one remains)
        if (icons.length > 1) {
            const newIcons = [...icons];
            newIcons.splice(index, 1);
            setAttributes({
                icons: newIcons
            });
        }
    };
    
    // Update social icon
    const updateSocialIcon = (index, key, value) => {
        const newIcons = [...icons];
        newIcons[index] = {
            ...newIcons[index],
            [key]: value
        };
        
        setAttributes({
            icons: newIcons
        });
    };
    
    // Open URL popover
    const openUrlPopover = (index) => {
        setUrlPopover({
            index,
            target: document.getElementById(`social-icon-${index}`)
        });
    };
    
    // Close URL popover
    const closeUrlPopover = () => {
        setUrlPopover(null);
    };

    // Generate CSS for styling the Social Icons block
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Icon size
        const currentIconSize = iconSize[activeDevice] || 24;
        
        // Icon spacing
        const currentIconSpacing = iconSpacing[activeDevice] || 10;
        
        // Label spacing
        const currentLabelSpacing = labelSpacing[activeDevice] || 5;
        
        // Border styles
        let borderCSS = '';
        if (iconBorderStyle && iconBorderStyle !== 'none') {
            const currentBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] 
                ? iconBorderWidth[activeDevice] 
                : { value: 1, unit: 'px' };
            
            const currentBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] 
                ? iconBorderRadius[activeDevice] 
                : { value: 0, unit: 'px' };
            
            borderCSS = `
                border-style: ${iconBorderStyle};
                border-color: ${iconBorderColor || '#e0e0e0'};
                border-width: ${currentBorderWidth.value}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.value}${currentBorderRadius.unit};
            `;
        }
        
        // Label typography
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
        
        // Padding
        const paddingCSS = padding && padding[activeDevice] 
            ? `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`
            : '';
            
        // Animation CSS
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Label position specific styles
        let labelPositionCSS = '';
        if (showLabels && labelPosition) {
            switch (labelPosition) {
                case 'top':
                    labelPositionCSS = `
                        .${id} .digiblocks-social-icon {
                            flex-direction: column-reverse;
                        }
                    `;
                    break;
                case 'right':
                    labelPositionCSS = `
                        .${id} .digiblocks-social-icon {
                            flex-direction: row;
                        }
                    `;
                    break;
                case 'bottom':
                    labelPositionCSS = `
                        .${id} .digiblocks-social-icon {
                            flex-direction: column;
                        }
                    `;
                    break;
                case 'left':
                    labelPositionCSS = `
                        .${id} .digiblocks-social-icon {
                            flex-direction: row-reverse;
                        }
                    `;
                    break;
            }
        }
        
        return `
            /* Social Icons Block - ${id} */
            .${id} {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: ${currentIconSpacing}px;
                justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};
            }
            
            .${id} .digiblocks-social-wrapper {
                position: relative;
				display: flex;
            }
            
            .${id} .digiblocks-social-icon {
                display: flex;
                align-items: center;
                text-decoration: none;
                gap: ${currentLabelSpacing}px;
            }
            
            .${id} .digiblocks-social-icon-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${iconBackground || 'transparent'};
                color: ${iconColor || '#333333'};
                ${borderCSS}
                ${paddingCSS}
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .${id} .digiblocks-social-icon-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${iconBackground || 'transparent'};
                color: ${iconColor || '#333333'};
                ${borderCSS}
                ${paddingCSS}
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .${id} .digiblocks-social-icon-icon span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-social-icon-icon svg {
                width: ${currentIconSize}px;
                height: ${currentIconSize}px;
                fill: currentColor;
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
                background-color: ${iconHoverBackground || iconBackground || 'transparent'};
                ${iconHoverBorderColor ? `border-color: ${iconHoverBorderColor};` : ''}
                ${iconHoverColor ? `color: ${iconHoverColor};` : ''}
            }
            
            .${id} .digiblocks-social-icon-label {
                ${textTypographyCSS}
                color: ${labelColor || iconColor || '#333333'};
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-social-icon:hover .digiblocks-social-icon-label {
                color: ${labelHoverColor || iconHoverColor || labelColor || iconColor || '#333333'};
            }
            
            /* Editor-specific styles */
            .${id} .digiblocks-social-icon-remove {
                position: absolute;
                top: -18px;
                right: -10px;
                background-color: #fff;
                border-radius: 50%;
                padding: 2px;
                display: none;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                z-index: 10;
            }
            
            .${id} .digiblocks-social-wrapper:hover .digiblocks-social-icon-remove {
                display: block;
            }
            
            .${id} .digiblocks-social-icon.add-social {
                background-color: #f0f0f0;
                color: #333;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            
            .${id} .digiblocks-social-icon.add-social svg {
                width: .6rem;
                height: .6rem;
                fill: currentColor;
            }
            
            ${labelPositionCSS}
            ${animationCSS}
            
            /* Responsive styles */
            @media (max-width: 991px) {
                .${id} {
                    gap: ${iconSpacing.tablet || currentIconSpacing}px;
                }
                
                .${id} .digiblocks-social-icon {
                    gap: ${labelSpacing.tablet || currentLabelSpacing}px;
                }
                
                .${id} .digiblocks-social-icon-icon svg {
                    width: ${iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.tablet || currentIconSize}px;
                }
                
                ${textTypography && textTypography.fontSize && textTypography.fontSize.tablet ? `
                .${id} .digiblocks-social-icon-label {
                    font-size: ${textTypography.fontSize.tablet}${textTypography.fontSizeUnit || 'px'};
                }
                ` : ''}
                
                .${id} .digiblocks-social-icon.add-social {
                    width: ${iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.tablet || currentIconSize}px;
                }
            }
            
            @media (max-width: 767px) {
                .${id} {
                    gap: ${iconSpacing.mobile || iconSpacing.tablet || currentIconSpacing}px;
                }
                
                .${id} .digiblocks-social-icon {
                    gap: ${labelSpacing.mobile || labelSpacing.tablet || currentLabelSpacing}px;
                }
                
                .${id} .digiblocks-social-icon-icon svg {
                    width: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                }
                
                ${textTypography && textTypography.fontSize && textTypography.fontSize.mobile ? `
                .${id} .digiblocks-social-icon-label {
                    font-size: ${textTypography.fontSize.mobile}${textTypography.fontSizeUnit || 'px'};
                }
                ` : ''}
                
                .${id} .digiblocks-social-icon.add-social {
                    width: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                    height: ${iconSize.mobile || iconSize.tablet || currentIconSize}px;
                }
            }
        `;
    };

    // Render styles tab content based on active state tab
    const renderStylesTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__("Icon Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconColor,
                                onChange: (value) => setAttributes({ iconColor: value }),
                                label: __("Icon Color", "digiblocks")
                            },
                            {
                                value: iconBackground,
                                onChange: (value) => setAttributes({ iconBackground: value }),
                                label: __("Background Color", "digiblocks")
                            },
                            {
                                value: iconBorderColor,
                                onChange: (value) => setAttributes({ iconBorderColor: value }),
                                label: __("Border Color", "digiblocks")
                            },
                            ...(showLabels ? [
                                {
                                    value: labelColor,
                                    onChange: (value) => setAttributes({ labelColor: value }),
                                    label: __("Label Color", "digiblocks")
                                }
                            ] : [])
                        ]}
                    />
                </>
            );
        } else {
            return (
                <>
                    <PanelColorSettings
                        title={__("Icon Hover Colors", "digiblocks")}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconHoverColor,
                                onChange: (value) => setAttributes({ iconHoverColor: value }),
                                label: __("Icon Hover Color", "digiblocks")
                            },
                            {
                                value: iconHoverBackground,
                                onChange: (value) => setAttributes({ iconHoverBackground: value }),
                                label: __("Hover Background", "digiblocks")
                            },
                            {
                                value: iconHoverBorderColor,
                                onChange: (value) => setAttributes({ iconHoverBorderColor: value }),
                                label: __("Hover Border Color", "digiblocks")
                            },
                            ...(showLabels ? [
                                {
                                    value: labelHoverColor,
                                    onChange: (value) => setAttributes({ labelHoverColor: value }),
                                    label: __("Label Hover Color", "digiblocks")
                                }
                            ] : [])
                        ]}
                    />
                </>
            );
        }
    };

    // Render social network selection popover
    const renderSocialSelectPopover = () => {
        if (!socialSelectPopover) return null;
        
        const { target } = socialSelectPopover;
        
        // Get the list of networks not already in use
        const usedNetworks = icons.map(icon => 
            icon.iconValue && icon.iconValue.network ? icon.iconValue.network : null
        ).filter(Boolean);
        
        // Filter out networks that are already in use
        const availableNetworks = socialNetworks.filter(network => 
            !usedNetworks.includes(network.value)
        );
        
        // If no networks are available, don't show the popover
        if (availableNetworks.length === 0) {
            closeSocialSelectPopover();
            return null;
        }
        
        return (
            <Popover
                anchor={target}
                onClose={closeSocialSelectPopover}
                position="bottom center"
                expandOnMobile
                className="digiblocks-social-select-popover"
            >
                <div style={{ padding: '12px', width: '280px', maxHeight: '400px', overflowY: 'auto' }}>
                    <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        {__('Select Social Network', 'digiblocks')}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {availableNetworks.map(network => (
                            <Button
                                key={network.value}
                                variant="secondary"
                                onClick={() => addSpecificSocialNetwork(network.value)}
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'flex-start',
                                    padding: '8px',
                                    gap: '8px'
                                }}
                            >
                                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    {socialIconsSVG[network.value]}
                                </span>
                                <span>{network.label}</span>
                            </Button>
                        ))}
                    </div>
                </div>
            </Popover>
        );
    };

    // URL Popover for social links
    const renderUrlPopover = () => {
        if (!urlPopover) return null;
        
        const { index, target } = urlPopover;
        const icon = icons[index];
        
        return (
            <Popover
                anchor={target}
                onClose={closeUrlPopover}
                position="bottom center"
                expandOnMobile
                className="digiblocks-social-url-popover"
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '12px', minWidth: '280px' }}>
                    <SelectControl
                        label={__('Social Network', 'digiblocks')}
                        value={icon.iconValue ? icon.iconValue.network : ''}
                        options={socialNetworks}
                        onChange={(value) => {
                            const newIcons = [...icons];
                            newIcons[index] = {
                                ...newIcons[index],
                                iconValue: {
                                    name: value.charAt(0).toUpperCase() + value.slice(1),
                                    network: value,
                                    svg: socialIconsSVG[value] ? socialIconsSVG[value].props.children.props.d : ''
                                }
                            };
                            setAttributes({ icons: newIcons });
                        }}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    <TextControl
                        label={__('URL', 'digiblocks')}
                        value={icon.url || ''}
                        onChange={(value) => updateSocialIcon(index, 'url', value)}
                        placeholder={
                            icon.iconValue && icon.iconValue.network === 'email' 
                            ? 'mailto:example@domain.com' 
                            : icon.iconValue && icon.iconValue.network === 'website' 
                            ? 'https://example.com' 
                            : `https://${icon.iconValue ? icon.iconValue.network : 'example'}.com/username`
                        }
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    <TextControl
                        label={__('Label', 'digiblocks')}
                        value={icon.label || ''}
                        onChange={(value) => updateSocialIcon(index, 'label', value)}
                        placeholder={icon.iconValue ? icon.iconValue.name : __('Social Media', 'digiblocks')}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    <ToggleControl
                        label={__('Open in new tab', 'digiblocks')}
                        checked={icon.openInNewTab === undefined ? true : icon.openInNewTab}
                        onChange={(value) => updateSocialIcon(index, 'openInNewTab', value)}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    <TextControl
                        label={__('Rel Attribute', 'digiblocks')}
                        value={icon.rel || ''}
                        onChange={(value) => updateSocialIcon(index, 'rel', value)}
                        placeholder={__('e.g. nofollow', 'digiblocks')}
                        help={__('Optional. Add rel attributes like "nofollow", "sponsored", etc.', 'digiblocks')}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
                    />
                    
                    <Button
                        variant="primary"
                        onClick={closeUrlPopover}
                        style={{ justifyContent: 'center', width: '100%' }}
                    >
                        {__('Done', 'digiblocks')}
                    </Button>
                </div>
            </Popover>
        );
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <div className="components-panel__body is-opened">
                            <ToggleControl
                                label={__('Show Labels', 'digiblocks')}
                                checked={showLabels}
                                onChange={(value) => setAttributes({ showLabels: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showLabels && (
                                <ToggleGroupControl
									label={__("Label Position", "digiblocks")}
									value={labelPosition}
                                    onChange={(value) => setAttributes({ labelPosition: value })}
									isBlock
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								>
									<ToggleGroupControlOption 
										value="bottom" 
										label={__("Bottom", "digiblocks")}
									/>
									<ToggleGroupControlOption 
										value="right" 
										label={__("Right", "digiblocks")}
									/>
									<ToggleGroupControlOption 
										value="left" 
										label={__("Left", "digiblocks")}
									/>
									<ToggleGroupControlOption 
										value="top" 
										label={__("Top", "digiblocks")}
									/>
								</ToggleGroupControl>
                            )}
                        </div>
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
                                {(tab) => renderStylesTabContent(tab.name)}
                            </TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="size-shape"
                            title={__("Size & Shape", "digiblocks")}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__(
                                    "Icon Size",
                                    "digiblocks"
                                )}
                            >
                                <RangeControl
                                    value={iconSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconSize: {
                                                ...iconSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={16}
                                    max={100}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__(
                                    "Icon Spacing",
                                    "digiblocks"
                                )}
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
                                    max={100}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            {showLabels && (
                                <ResponsiveControl
                                    label={__(
                                        "Label Spacing",
                                        "digiblocks"
                                    )}
                                >
                                    <RangeControl
                                        value={labelSpacing[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                labelSpacing: {
                                                    ...labelSpacing,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                        min={0}
                                        max={100}
                                        step={1}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={iconBorderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius if not already set
                                    if (value !== 'none' && (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0)) {
                                        setAttributes({
                                            iconBorderWidth: {
                                                desktop: { value: 1, unit: 'px' },
                                                tablet: { value: 1, unit: 'px' },
                                                mobile: { value: 1, unit: 'px' }
                                            }
                                        });
                                    }
                                    
                                    if (value !== 'none' && (!iconBorderRadius || Object.keys(iconBorderRadius).length === 0)) {
                                        setAttributes({
                                            iconBorderRadius: {
                                                desktop: { value: 0, unit: 'px' },
                                                tablet: { value: 0, unit: 'px' },
                                                mobile: { value: 0, unit: 'px' }
                                            }
                                        });
                                    }
                                    
                                    setAttributes({ iconBorderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border width and border radius controls only if a border style is selected */}
                            {iconBorderStyle && iconBorderStyle !== 'none' && (
                                <>
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={iconBorderWidth[localActiveDevice]?.value || 1}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconBorderWidth: {
                                                        ...iconBorderWidth,
                                                        [localActiveDevice]: { value, unit: 'px' },
                                                    },
                                                })
                                            }
                                            min={1}
                                            max={20}
                                            step={1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={iconBorderRadius[localActiveDevice]?.value || 0}
                                            onChange={(value) =>
                                                setAttributes({
                                                    iconBorderRadius: {
                                                        ...iconBorderRadius,
                                                        [localActiveDevice]: { value, unit: 'px' },
                                                    },
                                                })
                                            }
                                            min={0}
                                            max={50}
                                            step={1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                            
                            <ResponsiveControl
                                label={__("Padding", "digiblocks")}
                            >
                                <DimensionControl
                                    values={padding && padding[localActiveDevice] ? padding[localActiveDevice] : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
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
                        </TabPanelBody>
                        
                        {showLabels && (
                            <TabPanelBody
                                tab="style"
                                name="typography"
                                title={__("Typography", "digiblocks")}
                                initialOpen={false}
                            >
                                <TypographyControl
                                    label={__(
                                        "Label Typography",
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
                                        fontSizeUnit: 'px',
                                        lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                        lineHeightUnit: 'em',
                                    }}
                                />
                            </TabPanelBody>
                        )}
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

    // Block props
    const blockProps = useBlockProps({
        className: `digiblocks-social-icons ${id} align-${align} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    // Render social icons list
    const renderSocialIcons = () => {
        const socialIconsList = icons.map((icon, index) => {
            // For the editor, we render interactive icons
            return (
                <div 
                    key={icon.id || index} 
                    className="digiblocks-social-wrapper"
                    id={`social-icon-${index}`}
                >
					<div 
						className="digiblocks-social-icon"
						onClick={() => {
							openUrlPopover(index);
						}}
					>
						<div 
							className="digiblocks-social-icon-icon"
						>
							{icon.iconValue && icon.iconValue.network ? (
								<span dangerouslySetInnerHTML={{
									__html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${
										icon.iconValue.network === 'facebook' ? '0 0 320 512' :
										icon.iconValue.network === 'twitter' ? '0 0 512 512' : 
										icon.iconValue.network === 'linkedin' ? '0 0 448 512' :
										icon.iconValue.network === 'instagram' ? '0 0 448 512' :
										icon.iconValue.network === 'pinterest' ? '0 0 384 512' :
										icon.iconValue.network === 'youtube' ? '0 0 576 512' :
										icon.iconValue.network === 'dribbble' ? '0 0 512 512' :
										icon.iconValue.network === 'github' ? '0 0 496 512' :
										icon.iconValue.network === 'behance' ? '0 0 576 512' :
										icon.iconValue.network === 'vimeo' ? '0 0 448 512' :
										icon.iconValue.network === 'tiktok' ? '0 0 448 512' :
										icon.iconValue.network === 'email' ? '0 0 512 512' :
										'0 0 640 512'}" fill="currentColor"><path d="${icon.iconValue.svg}"/></svg>`
								}} />
							) : (
								<div
									style={{
										width: '100%',
										height: '100%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: '#f0f0f0',
										borderRadius: '50%',
										fontSize: '20px',
										color: '#555'
									}}
								>
									?
								</div>
							)}
						</div>
						
						{showLabels && icon.label && (
							<span className="digiblocks-social-icon-label">{icon.label}</span>
						)}
					</div>
                    
                    {/* Remove button */}
                    {icons.length > 1 && (
                        <Button
                            className="digiblocks-social-icon-remove"
                            onClick={() => removeSocialIcon(index)}
                            icon="no-alt"
                            isSmall
                            label={__('Remove', 'digiblocks')}
                        />
                    )}
                </div>
            );
        });
        
        // Add the "add social icon" button
        socialIconsList.push(
            <div
                key="add-social-icon"
                className="digiblocks-social-icon add-social"
                onClick={addSocialIcon}
                title={__('Add Social Icon', 'digiblocks')}
            >
                {plusIcon}
            </div>
        );
        
        return socialIconsList;
    };

    return (
        <>
            <BlockControls>
                <AlignmentToolbar
                    value={align}
                    onChange={(value) => setAttributes({ align: value })}
                />
            </BlockControls>

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
                {renderSocialIcons()}
                
                {/* Social Network Selection Popover */}
                {renderSocialSelectPopover()}
                
                {/* URL Popover */}
                {renderUrlPopover()}
            </div>
        </>
    );
};

export default SocialIconsEdit;