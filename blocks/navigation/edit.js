/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    RichText,
	LinkControl,
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    TabPanel,
    ToggleControl,
    Button,
    Modal,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;
const { useSelect } = wp.data;
const apiFetch = wp.apiFetch;
const { addQueryArgs } = wp.url;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;

/**
 * Edit function for the Navigation block
 */
const NavigationEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        menuType,
        selectedMenu,
        customItems,
        orientation,
        layout,
        align,
        mobileBreakpoint,
        showMobileToggle,
        toggleIcon,
        customToggleIcon,
        toggleIconColor,
        toggleIconHoverColor,
        textTypography,
        linkColor,
        linkHoverColor,
        linkBackgroundColor,
        linkHoverBackgroundColor,
        submenuBackgroundColor,
        submenuBorderColor,
        submenuMobileBackgroundColor,
        submenuMobileLinkColor,
        submenuMobileLinkHoverColor,
        submenuMobileLinkHoverBackgroundColor,
        itemSpacing,
        padding,
        borderRadius,
        animation,
        mobileFullWidth,
    } = attributes;

    // Create unique class
    useBlockId( id, clientId, setAttributes );

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");
    
    // States for modals
    const [iconModalOpen, setIconModalOpen] = useState(false);
    const [isEditingLink, setIsEditingLink] = useState(false);
    const [currentEditingItem, setCurrentEditingItem] = useState(null);
    
    // State for WordPres menu items
    const [menuItems, setMenuItems] = useState([]);
    const [isLoadingMenu, setIsLoadingMenu] = useState(false);
	
	// State to track if global components are loaded
    const [componentsLoaded, setComponentsLoaded] = useState(false);

    // Check if the global components are loaded
    useEffect(() => {
        // Function to check if digi components are available
        const checkComponents = () => {
            if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
                setComponentsLoaded(true);
                return true;
            }
            return false;
        };
        
        // If components aren't immediately available, set up a small delay to check again
        if (!checkComponents()) {
            const timeout = setTimeout(() => {
                if (checkComponents()) {
                    clearTimeout(timeout);
                }
            }, 500);
            
            return () => clearTimeout(timeout);
        }
    }, []);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        return unsubscribe;
    }, []);

    // Fetch available WordPress menus
    const menus = useSelect((select) => {
        const menuEntities = select('core').getMenus();
        return menuEntities || [];
    }, []);
    
	// Fetch WordPress menu items when a menu is selected
	useEffect(() => {
		if (menuType === 'wordpress' && selectedMenu && selectedMenu.id) {
			setIsLoadingMenu(true);
			
			// Direct wp.ajax API approach
			wp.ajax.post('digiblocks_get_menu_items', {
				menu_id: selectedMenu.id,
				navigation_nonce: digiBlocksData.navigation_nonce
			})
			.then(response => {
				// Check if we got a success property (wp_send_json_success sets this)
				if (response && Array.isArray(response)) {
					setMenuItems(response);
				} else if (response && response.success && Array.isArray(response.data)) {
					setMenuItems(response.data);
				} else {
					console.error('Invalid response format:', response);
					setMenuItems([]);
				}
				setIsLoadingMenu(false);
			})
			.catch(error => {
				console.error('AJAX error:', error);
				setMenuItems([]);
				setIsLoadingMenu(false);
			});
		}
	}, [menuType, selectedMenu]);

    // Add new custom menu item
    const addCustomItem = () => {
        const newItem = {
            id: `nav-item-${Date.now()}`,
            text: __('Menu Item', 'digiblocks'),
            url: '',
            opensInNewTab: false,
            rel: '',
            icon: null,
			iconPosition: 'before',
            submenu: []
        };
        
        setAttributes({
            customItems: [...customItems, newItem]
        });
    };

    // Update custom item
    const updateCustomItem = (index, field, value) => {
        const newItems = [...customItems];
        newItems[index] = { ...newItems[index], [field]: value };
        setAttributes({ customItems: newItems });
    };

    // Remove custom item
    const removeCustomItem = (index) => {
        const newItems = customItems.filter((_, i) => i !== index);
        setAttributes({ customItems: newItems });
    };

    // Move custom item
    const moveCustomItem = (index, direction) => {
        const newItems = [...customItems];
        if (direction === 'up' && index > 0) {
            [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
        } else if (direction === 'down' && index < newItems.length - 1) {
            [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
        }
        setAttributes({ customItems: newItems });
    };

    // Duplicate item
    const duplicateItem = (index) => {
        const newItems = [...customItems];
        const duplicatedItem = { ...customItems[index], id: `nav-item-${Date.now()}` };
        newItems.splice(index + 1, 0, duplicatedItem);
        setAttributes({ customItems: newItems });
    };

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

    // Toggle icon options
    const toggleIconOptions = [
        { label: __("Hamburger", "digiblocks"), value: "hamburger" },
        { label: __("Custom Icon", "digiblocks"), value: "custom" },
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

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Typography CSS
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
        
        return `
			/* Navigation Block - ${id} */
			.${id} {
				display: flex;
				flex-direction: column;
				gap: 10px;
				${mobileFullWidth && activeDevice === 'mobile' ? 'width: 100%;' : ''}
				transition: all 0.3s ease;
			}
			
			.${id} .digiblocks-navigation-menu {
				display: flex;
				${orientation === 'horizontal' ? 'flex-direction: row;' : 'flex-direction: column;'}
				justify-content: ${align};
				gap: ${itemSpacing[activeDevice]}px;
				list-style: none;
				margin: 0;
				padding: 0;
			}
			
			.${id} .digiblocks-navigation-link {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 8px;
				text-decoration: none;
				padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};
				color: ${linkColor};
				background-color: ${linkBackgroundColor};
				border-radius: ${borderRadius[activeDevice].top}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].right}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].bottom}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].left}${borderRadius[activeDevice].unit};
				transition: all 0.3s ease;
				${textTypographyCSS}
			}
			
			.${id} .digiblocks-navigation-link:hover {
				color: ${linkHoverColor};
				background-color: ${linkHoverBackgroundColor};
			}
			
			.${id} .digiblocks-navigation-icon {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${id} .digiblocks-navigation-icon svg {
				width: 1em;
				height: 1em;
				fill: currentColor;
			}
			
			/* Base submenu styles */
			.${id} .digiblocks-navigation-submenu {
				display: none;
				position: absolute;
				background-color: ${submenuBackgroundColor};
				border: 1px solid ${submenuBorderColor};
				border-radius: 4px;
				padding: 0;
				min-width: 200px;
				box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
				z-index: 100;
				list-style: none;
				margin: 0;
			}
			
			/* Top level submenu positioning */
			.${id} > .digiblocks-navigation-menu > .digiblocks-navigation-menu-item > .digiblocks-navigation-submenu {
				top: 100%;
				left: 0;
			}
			
			/* Nested submenu positioning */
			.${id} .digiblocks-navigation-submenu .digiblocks-navigation-submenu {
				top: 0;
				left: 100%;
				margin-top: -1px;
			}
			
			/* RTL support for nested submenus */
			.rtl .${id} .digiblocks-navigation-submenu .digiblocks-navigation-submenu {
				left: auto;
				right: 100%;
			}
			
			/* RTL support for top level submenus */
			.rtl .${id} > .digiblocks-navigation-menu > .digiblocks-navigation-menu-item > .digiblocks-navigation-submenu {
				left: auto;
				right: 0;
			}
			
			/* Show submenu on hover for ANY level */
			.${id} .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
				display: block !important;
			}
			
			/* Special case for vertical orientation */
			${orientation === 'vertical' ? `
			.${id} > .digiblocks-navigation-menu > .digiblocks-navigation-menu-item > .digiblocks-navigation-submenu {
				top: 0;
				left: 100%;
			}
			.rtl .${id} > .digiblocks-navigation-menu > .digiblocks-navigation-menu-item > .digiblocks-navigation-submenu {
				left: auto;
				right: 100%;
			}
			` : ''}
			
			/* Submenu icon styling */
			.${id} .digiblocks-navigation-submenu-icon {
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
			
			.${id} .digiblocks-navigation-submenu-icon svg {
				width: 12px;
				height: 12px;
				fill: currentColor;
			}
			
			.${id} .digiblocks-mobile-toggle {
				display: none;
				background: none;
				border: none;
				cursor: pointer;
				padding: 5px;
				color: ${toggleIconColor};
				transition: color 0.3s ease;
			}
			
			.${id} .digiblocks-mobile-toggle:hover {
				color: ${toggleIconHoverColor};
			}

			/* Submenu toggle button styles */
			.${id} .digiblocks-navigation-link-sub {
				display: flex;
				align-items: stretch;
				justify-content: space-between;
			}
			
			.${id} .digiblocks-navigation-link-sub .digiblocks-navigation-link {
				flex: 1;
			}

			.${id} .digiblocks-submenu-toggle {
				display: none;
				cursor: pointer;
				padding: 0 .907em;
				font-weight: 400;
				background: none;
				border: none;
				color: inherit;
			}
			
			.${id} .digiblocks-submenu-toggle svg {
				width: 1em;
				height: 100%;
				fill: currentColor;
				display: block;
			}
			
			.${id} .digiblocks-submenu-toggle .icon-minus {
				display: none;
			}
			
			.${id} .digiblocks-submenu-toggle.is-open .icon-plus {
				display: none;
			}
			
			.${id} .digiblocks-submenu-toggle.is-open .icon-minus {
				display: block;
			}
			
			/* Editor specific styles */
			.${id} .digiblocks-navigation-item-controls {
				display: flex;
				gap: 5px;
				position: absolute;
				right: 0;
				top: 0;
				background-color: #fff;
				padding: 2px;
				border-radius: 3px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.12);
				z-index: 10;
				opacity: 0;
				transition: opacity 0.3s ease;
			}
			
			.${id} .digiblocks-navigation-menu-item {
				position: relative;
			}
			
			.${id} .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-item-controls {
				opacity: 1;
			}
			
			/* WordPress menu item styles */
			.${id} .wordpress-menu-item {
				padding: 8px 10px;
				background-color: ${linkBackgroundColor};
				color: ${linkColor};
				border-radius: ${borderRadius[activeDevice].top}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].right}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].bottom}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].left}${borderRadius[activeDevice].unit};
				${textTypographyCSS}
			}
			
			.${id} .wordpress-menu-item:hover {
				color: ${linkHoverColor};
				background-color: ${linkHoverBackgroundColor};
			}
			
			/* Navigation Menu Placeholder */
			.${id} .digiblocks-navigation-placeholder {
				color: #757575;
				background-color: #f0f0f0;
				border: 1px dashed #ccc;
				padding: 20px;
				text-align: center;
				border-radius: 4px;
				margin: 10px 0;
				min-height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.3s ease;
			}
			
			.${id} .digiblocks-navigation-placeholder:hover {
				border-color: #999;
				background-color: #f5f5f5;
			}
			
			.${id} .digiblocks-menu-placeholder {
				background-color: rgba(0, 0, 0, 0.05);
				padding: 8px 16px;
				border-radius: 4px;
				margin-bottom: 8px;
			}
			
			/* Loading spinner */
			.${id} .digiblocks-loading-spinner {
				display: inline-block;
				width: 20px;
				height: 20px;
				margin-right: 10px;
				border: 3px solid rgba(0, 0, 0, 0.1);
				border-radius: 50%;
				border-top-color: #646970;
				animation: digiblocks-spinner 1s linear infinite;
			}
			
			@keyframes digiblocks-spinner {
				to {
					transform: rotate(360deg);
				}
			}

			/* Mobile Styles */
			@media (max-width: ${mobileBreakpoint}px) {
				.${id} .digiblocks-mobile-toggle {
					display: block;
				}
				
				.${id} .digiblocks-navigation-menu {
					display: none;
					flex-direction: column;
					position: absolute;
					top: 100%;
					left: 0;
					right: 0;
					background-color: ${submenuBackgroundColor};
					border-top: 1px solid ${submenuBorderColor};
					gap: 0;
					z-index: 1000;
				}
				
				.${id} .digiblocks-navigation-menu.is-open {
					display: flex;
				}
				
				/* Override hover behavior in mobile */
				.${id} .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
					display: none;
				}
			}
		`;
    };
    
    // Render WordPress menu item
	const renderWordPressMenuItem = (item) => {
		// Find direct children of this item
		const childItems = menuItems.filter(childItem => 
			childItem.menu_item_parent === item.ID.toString() || 
			childItem.menu_item_parent === item.ID
		);
		
		// Check if this item has children
		const hasChildren = childItems.length > 0;
		
		// Determine icon based on whether item has children and its depth
		const getSubmenuIcon = (hasChildren, isTopLevel) => {
			if (!hasChildren) return null;
			
			if (isTopLevel) {
				// Top level with submenu - down arrow
				return (
					<span className="digiblocks-navigation-submenu-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
							<path d="M241 369c-9.4 9.4-24.6 9.4-33.9 0L47 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 369z" />
						</svg>
					</span>
				);
			} else {
				// Nested submenu - use right arrow (or left for RTL)
				const isRtl = document.documentElement.dir === 'rtl';
				
				if (isRtl) {
					return (
						<span className="digiblocks-navigation-submenu-icon submenu-icon-rtl">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em">
								<path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z" />
							</svg>
						</span>
					);
				} else {
					return (
						<span className="digiblocks-navigation-submenu-icon submenu-icon-ltr">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em">
								<path d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z" />
							</svg>
						</span>
					);
				}
			}
		};
		
		// Get the parent item's depth level
		const getItemDepth = (item) => {
			let depth = 0;
			let currentItem = item;
			
			while (currentItem.menu_item_parent && 
				currentItem.menu_item_parent !== "0" && 
				currentItem.menu_item_parent !== 0) {
				depth++;
				// Find the parent item
				currentItem = menuItems.find(menuItem => 
					menuItem.ID === currentItem.menu_item_parent || 
					menuItem.ID.toString() === currentItem.menu_item_parent
				);
				
				// Safety check to prevent infinite loops
				if (!currentItem) break;
			}
			
			return depth;
		};
		
		// Determine if this is a top-level item
		const isTopLevel = item.menu_item_parent === "0" || 
						item.menu_item_parent === 0 || 
						!item.menu_item_parent;
		
		// Additional classes for items with submenus
		const additionalClasses = hasChildren ? ' has-submenu menu-item-has-children' : '';
		
		// Icon for items with submenus
		const icon = getSubmenuIcon(hasChildren, isTopLevel);
		
		return (
			<li key={item.ID} className={`digiblocks-navigation-menu-item${additionalClasses}`}>
				{hasChildren ? (
					<span className="digiblocks-navigation-link-sub">
						<div className="digiblocks-navigation-link wordpress-menu-item">
							<span>{item.title}</span>
							{icon}
						</div>
						<button className="digiblocks-submenu-toggle">
							<svg className="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
								<path d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 160L40 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0 0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160 160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0 0-160z"/>
							</svg>
							<svg className="icon-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
								<path d="M432 256c0 13.3-10.7 24-24 24L40 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l368 0c13.3 0 24 10.7 24 24z"/>
							</svg>
						</button>
					</span>
				) : (
					<div className="digiblocks-navigation-link wordpress-menu-item">
						<span>{item.title}</span>
						{icon}
					</div>
				)}
				
				{hasChildren && (
					<ul className={`digiblocks-navigation-submenu depth-${getItemDepth(item) + 1}`}>
						{/* Recursively render child items */}
						{childItems.map(childItem => renderWordPressMenuItem(childItem))}
					</ul>
				)}
			</li>
		);
	};

    // Handle link edit
    const handleLinkEdit = (index) => {
        setCurrentEditingItem(index);
        setIsEditingLink(true);
    };

    // Render custom menu item
    const renderCustomItem = (item, index) => {
		// Determine if the item has children/submenu
        const hasChildren = item.submenu && item.submenu.length > 0;
        
		const iconElement = item.icon && item.icon.svg ? (
			<span 
				className="digiblocks-navigation-icon"
				dangerouslySetInnerHTML={{ __html: item.icon.svg }}
			/>
		) : null;

        return (
            <li key={item.id} className={`digiblocks-navigation-menu-item ${hasChildren ? 'has-submenu menu-item-has-children' : ''}`}>
                {hasChildren ? (
                    <span className="digiblocks-navigation-link-sub">
                        <div className="digiblocks-navigation-link">
                            {(item.iconPosition === 'before' || !item.iconPosition) && iconElement}
                            <RichText
                                value={item.text}
                                onChange={(value) => updateCustomItem(index, 'text', value)}
                                placeholder={__('Menu Item', 'digiblocks')}
                                allowedFormats={[]}
                                tagName="span"
                            />
                            {item.iconPosition === 'after' && iconElement}
                        </div>
                        <button className="digiblocks-submenu-toggle">
                            <svg className="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
                                <path d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 160L40 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0 0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160 160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0 0-160z"/>
                            </svg>
                            <svg className="icon-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
                                <path d="M432 256c0 13.3-10.7 24-24 24L40 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l368 0c13.3 0 24 10.7 24 24z"/>
                            </svg>
                        </button>
                    </span>
                ) : (
                    <div className="digiblocks-navigation-link">
                        {(item.iconPosition === 'before' || !item.iconPosition) && iconElement}
                        <RichText
                            value={item.text}
                            onChange={(value) => updateCustomItem(index, 'text', value)}
                            placeholder={__('Menu Item', 'digiblocks')}
                            allowedFormats={[]}
                            tagName="span"
                        />
                        {item.iconPosition === 'after' && iconElement}
                    </div>
                )}
                
                <div className="digiblocks-navigation-item-controls">
                    <Tooltip text={__('Edit Icon', 'digiblocks')}>
                        <Button
                            icon="admin-customizer"
                            onClick={() => {
                                setCurrentEditingItem(index);
                                setIconModalOpen(true);
                            }}
                            isSmall
                        />
                    </Tooltip>
                    
                    <Tooltip text={__('Link', 'digiblocks')}>
                        <Button
                            icon="admin-links"
                            onClick={() => handleLinkEdit(index)}
                            isSmall
                            variant={item.url && item.url !== '#' ? 'primary' : 'secondary'}
                        />
                    </Tooltip>
                    
                    <Tooltip text={__('Move Up', 'digiblocks')}>
                        <Button
                            icon="arrow-up-alt2"
                            onClick={() => moveCustomItem(index, 'up')}
                            disabled={index === 0}
                            isSmall
                        />
                    </Tooltip>
                    
                    <Tooltip text={__('Move Down', 'digiblocks')}>
                        <Button
                            icon="arrow-down-alt2"
                            onClick={() => moveCustomItem(index, 'down')}
                            disabled={index === customItems.length - 1}
                            isSmall
                        />
                    </Tooltip>
                    
                    <Tooltip text={__('Duplicate', 'digiblocks')}>
                        <Button
                            icon="admin-page"
                            onClick={() => duplicateItem(index)}
                            isSmall
                        />
                    </Tooltip>
                    
                    <Tooltip text={__('Remove', 'digiblocks')}>
                        <Button
                            icon="trash"
                            onClick={() => removeCustomItem(index)}
                            isSmall
                        />
                    </Tooltip>
                </div>

                {hasChildren && item.submenu && (
                    <ul className="digiblocks-navigation-submenu">
                        {item.submenu.map((subItem, subIndex) => (
                            <li key={subItem.id} className="digiblocks-navigation-menu-item">
                                <div className="digiblocks-navigation-link">
                                    <span>{subItem.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    };

    // Render menu preview
	const renderMenuPreview = () => {
		if (menuType === 'wordpress' && selectedMenu) {
			return (
				<div className="digiblocks-navigation-menu-preview">
					<ul className="digiblocks-navigation-menu">
						{isLoadingMenu ? (
							<li className="digiblocks-menu-placeholder">
								<span className="digiblocks-loading-spinner"></span>
								{__('Loading menu items...', 'digiblocks')}
							</li>
						) : menuItems.length > 0 ? (
							// Only render top-level items here
							menuItems
								.filter(item => item.menu_item_parent === "0" || 
												item.menu_item_parent === 0 || 
												!item.menu_item_parent)
								.map(item => renderWordPressMenuItem(item))
						) : (
							<li className="digiblocks-menu-placeholder">
								{__('Menu:', 'digiblocks')} {selectedMenu.name}
							</li>
						)}
					</ul>
				</div>
			);
		} else if (menuType === 'custom' && customItems.length > 0) {
			// Custom menu items rendering (unchanged)
			return (
				<div className="digiblocks-navigation-menu-preview">
					<ul className="digiblocks-navigation-menu">
						{customItems.map((item, index) => renderCustomItem(item, index))}
					</ul>
				</div>
			);
		} else {
			// Placeholder
			return (
				<div className="digiblocks-navigation-placeholder">
					{menuType === 'wordpress' ? __('Please select a menu to display', 'digiblocks') : __('Add menu items to get started', 'digiblocks')}
				</div>
			);
		}
	};

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="menu-selection"
                            title={__("Menu Selection", "digiblocks")}
                            initialOpen={true}
                        >
                            <ToggleGroupControl
                                label={__("Menu Type", "digiblocks")}
                                value={menuType}
                                onChange={(value) => setAttributes({ menuType: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="wordpress" 
                                    label={__("Menu", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="custom" 
                                    label={__("Custom Menu", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            {menuType === 'wordpress' && (
                                <SelectControl
                                    label={__("Select Menu", "digiblocks")}
                                    value={selectedMenu ? selectedMenu.id : ''}
                                    options={[
                                        { label: __('— Select a Menu —', 'digiblocks'), value: '' },
                                        ...menus.map(menu => ({
                                            label: menu.name,
                                            value: menu.id,
                                        }))
                                    ]}
                                    onChange={(value) => {
                                        const menu = menus.find(m => m.id === Number(value));
                                        setAttributes({ selectedMenu: menu || null });
                                    }}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="layout"
                            title={__("Layout Options", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleGroupControl
                                label={__("Orientation", "digiblocks")}
                                value={orientation}
                                onChange={(value) => setAttributes({ orientation: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="horizontal" 
                                    label={__("Horizontal", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="vertical" 
                                    label={__("Vertical", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            <ToggleGroupControl
                                label={__("Alignment", "digiblocks")}
                                value={align}
                                onChange={(value) => setAttributes({ align: value })}
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
                                <ToggleGroupControlOption 
                                    value="space-between" 
                                    label={__("Spread", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
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
                                    max={50}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="mobile"
                            title={__("Mobile Settings", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Show Mobile Toggle', 'digiblocks')}
                                checked={showMobileToggle}
                                onChange={(value) => setAttributes({ showMobileToggle: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showMobileToggle && (
                                <>
                                    <SelectControl
                                        label={__("Toggle Icon", "digiblocks")}
                                        value={toggleIcon}
                                        options={toggleIconOptions}
                                        onChange={(value) => setAttributes({ toggleIcon: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    {toggleIcon === 'custom' && (
										<>
											{!componentsLoaded ? (
												<div style={{ textAlign: 'center', padding: '20px 0' }}>
													<div className="components-spinner"></div>
													<p>{__('Loading icon selector...', 'digiblocks')}</p>
												</div>
											) : (
												<FontAwesomeControl
													label={__('Custom Toggle Icon', 'digiblocks')}
													value={customToggleIcon}
													onChange={(value) => setAttributes({ customToggleIcon: value })}
												/>
											)}
										</>
                                    )}
                                </>
                            )}
                            
                            <RangeControl
                                label={__("Mobile Breakpoint", "digiblocks")}
                                value={mobileBreakpoint}
                                onChange={(value) => setAttributes({ mobileBreakpoint: value })}
                                min={320}
                                max={1200}
                                step={10}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Mobile Full Width', 'digiblocks')}
                                checked={mobileFullWidth}
                                onChange={(value) => setAttributes({ mobileFullWidth: value })}
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
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={true}
                        >
                            <TypographyControl
                                label={__("Link Typography", "digiblocks")}
                                value={textTypography}
                                onChange={(value) =>
                                    setAttributes({ textTypography: value })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="colors"
                            title={__("Colors", "digiblocks")}
                            initialOpen={false}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={tab.name === 'normal' ? __("Normal Colors", "digiblocks") : __("Hover Colors", "digiblocks")}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: tab.name === 'normal' ? linkColor : linkHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === 'normal'
                                                            ? { linkColor: value }
                                                            : { linkHoverColor: value }
                                                    ),
                                                label: __("Link Color", "digiblocks"),
                                            },
                                            {
                                                value: tab.name === 'normal' ? linkBackgroundColor : linkHoverBackgroundColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === 'normal'
                                                            ? { linkBackgroundColor: value }
                                                            : { linkHoverBackgroundColor: value }
                                                    ),
                                                label: __("Background Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>
                            
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={__("Toggle Icon Colors", "digiblocks")}
                                        initialOpen={false}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: tab.name === 'normal' ? toggleIconColor : toggleIconHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === 'normal'
                                                            ? { toggleIconColor: value }
                                                            : { toggleIconHoverColor: value }
                                                    ),
                                                label: __("Toggle Icon Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>
                            
                            <PanelColorSettings
                                title={__("Submenu Colors", "digiblocks")}
                                initialOpen={false}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: submenuBackgroundColor,
                                        onChange: (value) => setAttributes({ submenuBackgroundColor: value }),
                                        label: __("Submenu Background", "digiblocks"),
                                    },
                                    {
                                        value: submenuBorderColor,
                                        onChange: (value) => setAttributes({ submenuBorderColor: value }),
                                        label: __("Submenu Border", "digiblocks"),
                                    },
                                ]}
                            />
							
							{showMobileToggle && (
								<TabPanel
									className="digiblocks-control-tabs"
									activeClass="active-tab"
									tabs={stateTabList}
								>
									{(tab) => (
										<PanelColorSettings
											title={tab.name === 'normal' ? __("Mobile Submenu Colors", "digiblocks") : __("Mobile Submenu Hover Colors", "digiblocks")}
											initialOpen={true}
											enableAlpha={true}
											colorSettings={[
												{
													value: tab.name === 'normal' ? submenuMobileLinkColor : submenuMobileLinkHoverColor,
													onChange: (value) =>
														setAttributes(
															tab.name === 'normal'
																? { submenuMobileLinkColor: value }
																: { submenuMobileLinkHoverColor: value }
														),
													label: __("Link Color", "digiblocks"),
												},
												{
													value: tab.name === 'normal' ? submenuMobileBackgroundColor : submenuMobileLinkHoverBackgroundColor,
													onChange: (value) =>
														setAttributes(
															tab.name === 'normal'
																? { submenuMobileBackgroundColor: value }
																: { submenuMobileLinkHoverBackgroundColor: value }
														),
													label: __("Background Color", "digiblocks"),
												},
											]}
										/>
									)}
								</TabPanel>
							)}
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
                                label={__("Border Radius", "digiblocks")}
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
        className: `digiblocks-navigation ${id} ${customClasses || ''}`,
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
                {showMobileToggle && (
                    <button className="digiblocks-mobile-toggle">
                        {toggleIcon === 'hamburger' ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        ) : customToggleIcon && customToggleIcon.svg ? (
                            <span dangerouslySetInnerHTML={{ __html: customToggleIcon.svg }} />
                        ) : null}
                    </button>
                )}
                
                {renderMenuPreview()}
                
                {menuType === 'custom' && (
                    <Button
                        variant="primary"
                        icon="plus"
                        onClick={addCustomItem}
                        style={{
                            width: "100%",
                            justifyContent: "center",
                        }}
                    >
                        {__("Add Navigation Item", "digiblocks")}
                    </Button>
                )}
            </div>
            
            {/* Icon Modal */}
            {iconModalOpen && currentEditingItem !== null && (
                <Modal
                    title={__("Choose Icon", "digiblocks")}
                    onRequestClose={() => setIconModalOpen(false)}
                    className="digiblocks-icon-modal"
                >
                    {!componentsLoaded ? (
						<div style={{ textAlign: 'center', padding: '20px 0' }}>
							<div className="components-spinner"></div>
							<p>{__('Loading icon selector...', 'digiblocks')}</p>
						</div>
					) : (
						<FontAwesomeControl
							value={customItems[currentEditingItem].icon}
							onChange={(newIcon) => {
								updateCustomItem(currentEditingItem, 'icon', newIcon);
								setIconModalOpen(false);
							}}
						/>
					)}

					{/* Add icon position control */}
					<div style={{ marginTop: '20px' }}>
						<ToggleGroupControl
							label={__("Icon Position", "digiblocks")}
							value={customItems[currentEditingItem].iconPosition || 'before'}
							onChange={(value) => {
								updateCustomItem(currentEditingItem, 'iconPosition', value);
							}}
							isBlock
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
						>
							<ToggleGroupControlOption 
								value="before" 
								label={__("Before", "digiblocks")}
							/>
							<ToggleGroupControlOption 
								value="after" 
								label={__("After", "digiblocks")}
							/>
						</ToggleGroupControl>
					</div>
                </Modal>
            )}
            
            {/* Link Editing UI */}
            {isEditingLink && currentEditingItem !== null && (
				<Modal
					title={__("Link Settings", "digiblocks")}
					onRequestClose={() => setIsEditingLink(false)}
					className="digiblocks-link-modal"
				>
					<LinkControl
						value={{
							url: customItems[currentEditingItem]?.url || '',
							opensInNewTab: !!customItems[currentEditingItem]?.opensInNewTab,
							rel: customItems[currentEditingItem]?.rel || ''
						}}
						settings={[
							{
								id: "opensInNewTab",
								title: __("Open in new tab", "digiblocks"),
							},
							{
								id: "rel",
								title: __("Add nofollow", "digiblocks"),
							},
						]}
						onChange={(newLink) => {
							const newItems = [...customItems];
							newItems[currentEditingItem] = {
								...newItems[currentEditingItem],
								url: newLink.url || '#',
								opensInNewTab: !!newLink.opensInNewTab,
								rel: newLink.rel || ''
							};
							setAttributes({ customItems: newItems });
						}}
						onRemove={() => {
							const newItems = [...customItems];
							newItems[currentEditingItem] = {
								...newItems[currentEditingItem],
								url: '#',
								opensInNewTab: false,
								rel: ''
							};
							setAttributes({ customItems: newItems });
						}}
						forceIsEditingLink={true}
					/>
				</Modal>
			)}
        </>
    );
};

export default NavigationEdit;