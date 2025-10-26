/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    BlockControls,
    PanelColorSettings,
    LinkControl,
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    TabPanel,
    Button,
    ToggleControl,
    Modal,
    Tooltip,
    ToolbarGroup,
    ToolbarButton,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
	__experimentalNumberControl: NumberControl,
    Draggable,
} = wp.components;
const { useState, useEffect, useRef, useMemo } = wp.element;
const { __unstableStripHTML: stripHTML } = wp.dom;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const {
    ResponsiveControl,
	ResponsiveRangeControl,
    DimensionControl,
    TypographyControl,
    BoxShadowControl,
    CustomTabPanel,
    TabPanelBody,
	TransformControl
} = digi.components;

/**
 * Edit function for the Icon List block
 */
const IconListEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        items,
		defaultIconSource,
		defaultCustomSvg,
        defaultIcon,
        contentTypography,
        listLayout,
        listAlign,
        iconPosition,
        iconSize,
        iconSpace,
        itemSpace,
        iconColor,
        iconHoverColor,
        textColor,
        textHoverColor,
        animation,
		animationDuration,
		animationDelay,
        padding,
        margin,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        boxShadow,
        boxShadowHover,
        backgroundColor,
        backgroundHoverColor,
        hoverEffect,
        position,
        horizontalOrientation,
        horizontalOffset,
        verticalOrientation,
        verticalOffset,
        zIndex,
		transform,
        transformHover,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

	// Get responsive value with fallback
	const getVal = (obj, device) => {
		if (!obj || typeof obj !== 'object') return null;
		
		if (device === 'mobile') {
			return (obj.mobile !== '' && obj.mobile !== undefined && obj.mobile !== null) ? obj.mobile : 
				(obj.tablet !== '' && obj.tablet !== undefined && obj.tablet !== null) ? obj.tablet : 
				obj.desktop;
		}
		if (device === 'tablet') {
			return (obj.tablet !== '' && obj.tablet !== undefined && obj.tablet !== null) ? obj.tablet : 
				obj.desktop;
		}
		return obj.desktop;
	};

	// Initialize items with deep cloned objects when empty or ensure items are unique
	useEffect(() => {
		// If items array is empty, initialize with default items
		if (!items || items.length === 0) {
			const defaultItems = [
				{
					id: 'item-1',
					content: __('First list item with icon', 'digiblocks'),
					iconSource: 'library',
					icon: {
						id: 'check',
						name: 'Check',
						svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
						style: 'solid',
						categories: ['design']
					},
					customSvg: '',
					linkEnabled: false,
					linkUrl: '',
					linkOpenInNewTab: false,
					linkRel: ''
				},
				{
					id: 'item-2',
					content: __('Second list item with star icon', 'digiblocks'),
					iconSource: 'library',
					icon: {
						id: 'star',
						name: 'Star',
						svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
						style: 'solid',
						categories: ['design']
					},
					customSvg: '',
					linkUrl: '',
					linkOpenInNewTab: false,
					linkRel: ''
				},
				{
					id: 'item-3',
					content: __('Third list item with heart icon', 'digiblocks'),
					iconSource: 'library',
					icon: {
						id: 'heart',
						name: 'Heart',
						svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',
						style: 'solid',
						categories: ['design']
					},
					customSvg: '',
					linkUrl: '',
					linkOpenInNewTab: false,
					linkRel: ''
				}
			];
			setAttributes({ items: defaultItems });
		} else {
			// Ensure each item has a unique ID (in case of duplication)
			const hasNonUniqueIds = items.some((item, index) => 
				items.findIndex(i => i.id === item.id) !== index
			);
			
			if (hasNonUniqueIds) {
				const uniqueItems = items.map((item, index) => ({
					...JSON.parse(JSON.stringify(item)), // Deep clone to break references
					id: `item-${Date.now()}-${index}`
				}));
				setAttributes({ items: uniqueItems });
			}
		}
	}, [clientId]);

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi.responsiveState.activeDevice
    );

    // States
    const [iconModalOpen, setIconModalOpen] = useState(false);
    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [currentEditingItem, setCurrentEditingItem] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
	const [draggedItemIndex, setDraggedItemIndex] = useState(null);
	const [dropTargetIndex, setDropTargetIndex] = useState(null);
	const [expandedItemId, setExpandedItemId] = useState(null);

    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });

        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});
	
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

    // Use ref
	const previewTimeoutRef = useRef(null);

	// Effect to trigger animation preview when animation attribute changes
	useEffect(() => {
		if (animation && animation !== 'none') {
			const timeoutId = setTimeout(() => {
				animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
			}, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [animation]);

	// Button click handler
	const handlePreviewClick = () => {
		animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
	};

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

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Lift", "digiblocks"), value: "lift" },
        { label: __("Scale", "digiblocks"), value: "scale" },
        { label: __("Glow", "digiblocks"), value: "glow" },
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
            name: "options",
            title: __("Options", "digiblocks"),
            icon: tabIcons.optionsIcon,
        },
        {
            name: "style",
            title: __("Style", "digiblocks"),
            icon: tabIcons.styleIcon,
        },
        {
            name: "advanced",
            title: __("Advanced", "digiblocks"),
            icon: tabIcons.advancedIcon,
        },
    ];

    // State tabs
    const stateTabList = [
        {
            name: "normal",
            title: __("Normal", "digiblocks"),
            className: "digiblocks-tab-1 normal",
        },
        {
            name: "hover",
            title: __("Hover", "digiblocks"),
            className: "digiblocks-tab-2 hover",
        },
    ];

    // Add list item
    const addListItem = () => {
        const newItems = [...items];
        newItems.push({
            id: `item-${Date.now()}`,
            content: __("New list item", "digiblocks"),
            icon: { ...defaultIcon },
            linkUrl: "",
            linkOpenInNewTab: false,
            linkRel: "",
        });
        setAttributes({ items: newItems });
    };

    // Remove list item
    const removeListItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setAttributes({ items: newItems });
    };

    // Update list item
	const updateListItem = (index, field, value) => {
		const newItems = items.map((item, i) => {
			if (i === index) {
				return {
					...item,
					[field]: value
				};
			}
			return item;
		});
		setAttributes({ items: newItems });
	};

    // Move item up
    const moveItemUp = (index) => {
        if (index === 0) return;
        const newItems = [...items];
        [newItems[index - 1], newItems[index]] = [
            newItems[index],
            newItems[index - 1],
        ];
        setAttributes({ items: newItems });
    };

    // Move item down
    const moveItemDown = (index) => {
        if (index === items.length - 1) return;
        const newItems = [...items];
        [newItems[index], newItems[index + 1]] = [
            newItems[index + 1],
            newItems[index],
        ];
        setAttributes({ items: newItems });
    };

    // Duplicate item
    const duplicateItem = (index) => {
        const newItems = [...items];
        const duplicatedItem = { ...items[index], id: `item-${Date.now()}` };
        newItems.splice(index + 1, 0, duplicatedItem);
        setAttributes({ items: newItems });
    };

    // Set icon for item
    const setItemIcon = (index, icon) => {
        const newItems = [...items];
        newItems[index].icon = icon;
        setAttributes({ items: newItems });
    };

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

	const handleDragStart = (index) => {
		setDraggedItemIndex(index);
	};

	const handleDragEnd = () => {
		setDraggedItemIndex(null);
		setDropTargetIndex(null);
	};

	const handleDragEnter = (index) => {
		if (draggedItemIndex === null || draggedItemIndex === index) return;
		setDropTargetIndex(index);
	};

	const handleDrop = (index) => {
		if (draggedItemIndex === null || draggedItemIndex === index) return;
		
		const newItems = [...items];
		const [draggedItem] = newItems.splice(draggedItemIndex, 1);
		newItems.splice(index, 0, draggedItem);
		
		setAttributes({ items: newItems });
		setDraggedItemIndex(null);
		setDropTargetIndex(null);
	};

	const toggleItemExpanded = (itemId) => {
		setExpandedItemId(expandedItemId === itemId ? null : itemId);
	};

	const LinkControlWrapper = ({ item, index, updateListItem }) => {
		const linkValue = useMemo(() => {
			if (!item.linkUrl) {
				return undefined;
			}
			return {
				url: item.linkUrl,
				opensInNewTab: item.linkOpenInNewTab || false,
			};
		}, [item.linkUrl, item.linkOpenInNewTab]);

		const handleLinkChange = (newLink) => {
			if (newLink && newLink.url !== undefined) {
				const newItems = [...items];
				newItems[index] = {
					...newItems[index],
					linkUrl: newLink.url,
					linkOpenInNewTab: newLink.opensInNewTab || false,
				};
				setAttributes({ items: newItems });
			}
		};

		const handleLinkRemove = () => {
			const newItems = [...items];
			newItems[index] = {
				...newItems[index],
				linkUrl: "",
				linkOpenInNewTab: false,
				linkRel: "",
			};
			setAttributes({ items: newItems });
		};

		const handleRelChange = (value) => {
			const newItems = [...items];
			newItems[index] = {
				...newItems[index],
				linkRel: value ? 'nofollow' : '',
			};
			setAttributes({ items: newItems });
		};

		return (
			<>
				<LinkControl
					value={linkValue}
					settings={[
						{
							id: "opensInNewTab",
							title: __("Open in new tab", "digiblocks"),
						},
					]}
					onChange={handleLinkChange}
					onRemove={handleLinkRemove}
					suggestionsQuery={{
						type: 'post',
						subtype: 'page',
						perPage: 20,
					}}
					showInitialSuggestions={false}
				/>
				
				{item.linkUrl && (
					<ToggleControl
						label={__('Add nofollow', 'digiblocks')}
						checked={item.linkRel === 'nofollow'}
						onChange={handleRelChange}
						__nextHasNoMarginBottom={true}
						style={{ marginTop: '12px' }}
					/>
				)}
			</>
		);
	};

	const renderStructurePanel = () => {
		return (
			<div className="digiblocks-structure-panel">
				<div className="digiblocks-structure-list">
					{items.map((item, index) => {
						const isExpanded = expandedItemId === item.id;
						const itemText = item.content ? stripHTML(item.content) : __('List Item', 'digiblocks');
						
						return (
							<Draggable
								key={item.id}
								elementId={`structure-item-${item.id}`}
								transferData={{
									type: 'icon-list-item',
									index: index,
								}}
								onDragStart={() => handleDragStart(index)}
								onDragEnd={handleDragEnd}
							>
								{({ onDraggableStart, onDraggableEnd }) => (
									<div
										id={`structure-item-${item.id}`}
										className={`digiblocks-structure-item ${
											draggedItemIndex === index ? 'is-dragging' : ''
										} ${dropTargetIndex === index ? 'drop-target' : ''} ${
											isExpanded ? 'is-expanded' : ''
										}`}
										onDragEnter={() => handleDragEnter(index)}
										onDragOver={(e) => e.preventDefault()}
										onDrop={() => handleDrop(index)}
									>
										<div 
											className="digiblocks-structure-item-header"
											draggable
											onDragStart={onDraggableStart}
											onDragEnd={onDraggableEnd}
										>
											<button
												className="digiblocks-structure-item-title"
												onClick={() => toggleItemExpanded(item.id)}
												type="button"
											>
												<span className="digiblocks-structure-item-icon">
													{item.icon && item.icon.svg && (
														<span dangerouslySetInnerHTML={{ __html: item.icon.svg }} />
													)}
												</span>
												<span className="digiblocks-structure-item-text">
													{itemText}
												</span>
											</button>
											
											<div className="digiblocks-structure-item-actions">
												<Tooltip text={__("Duplicate", "digiblocks")}>
													<button
														className="digiblocks-structure-item-action"
														onClick={(e) => {
															e.stopPropagation();
															duplicateItem(index);
														}}
														type="button"
														aria-label={__("Duplicate", "digiblocks")}
													>
														<span className="dashicons dashicons-admin-page"></span>
													</button>
												</Tooltip>
												<Tooltip text={__("Remove", "digiblocks")}>
													<button
														className="digiblocks-structure-item-action digiblocks-structure-item-action-remove"
														onClick={(e) => {
															e.stopPropagation();
															removeListItem(index);
														}}
														type="button"
														aria-label={__("Remove", "digiblocks")}
													>
														<span className="dashicons dashicons-no-alt"></span>
													</button>
												</Tooltip>
											</div>
										</div>
										
										{isExpanded && (
											<div className="digiblocks-structure-item-content">
												<div className="digiblocks-structure-item-control">
													<label className="digiblocks-structure-item-label">
														{__('Text', 'digiblocks')}
													</label>
													<RichText
														tagName="div"
														value={item.content}
														onChange={(value) => updateListItem(index, "content", value)}
														placeholder={__("List item text...", "digiblocks")}
														className="digiblocks-structure-item-input"
													/>
												</div>
												
												<div className="digiblocks-structure-item-control">
													<ToggleGroupControl
														label={__("Icon Source", "digiblocks")}
														value={item.iconSource || 'library'}
														onChange={(value) => {
															const newItems = [...items];
															newItems[index].iconSource = value;
															setAttributes({ items: newItems });
														}}
														isBlock
														__next40pxDefaultSize={true}
														__nextHasNoMarginBottom={true}
													>
														<ToggleGroupControlOption 
															value="library" 
															label={__("Library", "digiblocks")} 
														/>
														<ToggleGroupControlOption 
															value="custom" 
															label={__("Custom", "digiblocks")} 
														/>
													</ToggleGroupControl>

													{(!item.iconSource || item.iconSource === 'library') && (
														<>
															{!componentsLoaded ? (
																<div style={{ textAlign: 'center', padding: '20px 0' }}>
																	<div className="components-spinner"></div>
																	<p>{__('Loading icon selector...', 'digiblocks')}</p>
																</div>
															) : (
																<FontAwesomeControl
																	value={item.icon}
																	onChange={(newIcon) => setItemIcon(index, newIcon)}
																/>
															)}
														</>
													)}

													{item.iconSource === 'custom' && (
														<div style={{ marginTop: '15px' }}>
															<div className="components-base-control">
																<label className="components-base-control__label" htmlFor={`custom-svg-input-${index}`}>
																	{__('Custom SVG Code', 'digiblocks')}
																</label>
																<textarea
																	id={`custom-svg-input-${index}`}
																	className="components-textarea-control__input"
																	value={item.customSvg || ''}
																	onChange={(e) => {
																		const newSvg = e.target.value;
																		const newItems = [...items];
																		
																		const newIconValue = {
																			id: 'custom-svg',
																			name: 'Custom SVG',
																			svg: newSvg,
																			style: 'custom',
																			categories: ['custom']
																		};
																		
																		newItems[index].customSvg = newSvg;
																		newItems[index].icon = newIconValue;
																		
																		setAttributes({ items: newItems });
																	}}
																	placeholder={__('Paste your SVG code here...', 'digiblocks')}
																	rows={6}
																	style={{ width: '100%', marginTop: '8px' }}
																/>
																<p className="components-base-control__help">
																	{__('Paste your SVG code here. Make sure it only contains valid SVG markup.', 'digiblocks')}
																</p>
															</div>
															
															{item.customSvg && (
																<div style={{ marginTop: '15px' }}>
																	<p><strong>{__('Preview:', 'digiblocks')}</strong></p>
																	<div style={{ padding: '20px', background: '#f0f0f1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
																		<div style={{ width: '50px', height: '50px' }} dangerouslySetInnerHTML={{ __html: item.customSvg }}></div>
																	</div>
																</div>
															)}
														</div>
													)}
												</div>
												
												<div className="digiblocks-structure-item-control">
													<label className="digiblocks-structure-item-label">
														{__('Link', 'digiblocks')}
													</label>
													<LinkControlWrapper 
														key={`link-control-${item.id}`}
														item={item}
														index={index}
														updateListItem={updateListItem}
													/>
												</div>
											</div>
										)}
									</div>
								)}
							</Draggable>
						);
					})}
				</div>
				
				<div className="digiblocks-structure-add-item">
					<Button
						variant="secondary"
						icon="plus"
						onClick={addListItem}
						className="digiblocks-structure-add-button"
					>
						{__("Add Item", "digiblocks")}
					</Button>
				</div>
			</div>
		);
	};

    const getMaxValue = (unit) => {
        switch (unit) {
            case '%':
                return 100;
            case 'em':
            case 'rem':
                return 50;
            case 'vw':
            case 'vh':
                return 100;
            default:
                return 2000;
        }
    };

    const getStepValue = (unit) => {
        switch (unit) {
            case '%':
            case 'vw':
            case 'vh':
                return 1;
            case 'em':
            case 'rem':
                return 0.1;
            default:
                return 1;
        }
    };

	const getTransformOrigin = (transform, device) => {
        const xMap = { left: '0%', center: '50%', right: '100%' };
        const yMap = { top: '0%', center: '50%', bottom: '100%' };
        
        const x = xMap[transform.xAnchor?.[device] || 'center'];
        const y = yMap[transform.yAnchor?.[device] || 'center'];
        
        return `${x} ${y}`;
    };

	const getTransformCSS = (transform, device) => {
		if (!transform) return '';
		
		const transforms = [];
		
		const getValue = (prop) => {
			if (!prop) return '';
			
			let val = prop[device];
			
			// Check if value is empty
			const isEmpty = (v) => {
				if (v === '' || v === undefined || v === null) return true;
				if (typeof v === 'object' && v !== null) {
					return v.value === '' || v.value === undefined || v.value === null;
				}
				return false;
			};
			
			// Tablet fallback to desktop
			if (device === 'tablet' && isEmpty(val)) {
				val = prop.desktop;
			}
			
			// Mobile fallback to tablet, then desktop
			if (device === 'mobile' && isEmpty(val)) {
				val = prop.tablet;
				if (isEmpty(val)) {
					val = prop.desktop;
				}
			}
			
			return typeof val === 'object' && val !== null ? (val.value !== undefined ? val.value : '') : val;
		};
		
		const rotateValue = getValue(transform.rotate);
		if (rotateValue !== '' && rotateValue !== undefined && rotateValue !== null) {
			if (transform.rotate3d) {
				const perspectiveValue = getValue(transform.perspective);
				if (perspectiveValue !== '' && perspectiveValue !== undefined && perspectiveValue !== null) {
					transforms.push(`perspective(${perspectiveValue}px)`);
				}
			}
			transforms.push(`rotate(${rotateValue}deg)`);
		}
		
		if (transform.rotate3d) {
			const rotateXValue = getValue(transform.rotateX);
			if (rotateXValue !== '' && rotateXValue !== undefined && rotateXValue !== null) {
				transforms.push(`rotateX(${rotateXValue}deg)`);
			}
			const rotateYValue = getValue(transform.rotateY);
			if (rotateYValue !== '' && rotateYValue !== undefined && rotateYValue !== null) {
				transforms.push(`rotateY(${rotateYValue}deg)`);
			}
		}
		
		const offsetXValue = transform.offsetX?.[device]?.value;
		const offsetYValue = transform.offsetY?.[device]?.value;
		const hasOffsetX = offsetXValue !== '' && offsetXValue !== undefined && offsetXValue !== null;
		const hasOffsetY = offsetYValue !== '' && offsetYValue !== undefined && offsetYValue !== null;
		
		if (hasOffsetX || hasOffsetY) {
			const x = hasOffsetX ? `${offsetXValue}${transform.offsetX[device].unit || 'px'}` : '0';
			const y = hasOffsetY ? `${offsetYValue}${transform.offsetY[device].unit || 'px'}` : '0';
			transforms.push(`translate(${x}, ${y})`);
		}
		
		if (transform.keepProportions) {
			const scaleValue = getValue(transform.scale);
			if (scaleValue !== '' && scaleValue !== undefined && scaleValue !== null && scaleValue != 1) {
				transforms.push(`scale(${scaleValue})`);
			}
		} else {
			const scaleXValue = getValue(transform.scaleX);
			const scaleYValue = getValue(transform.scaleY);
			const scaleX = (scaleXValue !== '' && scaleXValue !== undefined && scaleXValue !== null) ? scaleXValue : 1;
			const scaleY = (scaleYValue !== '' && scaleYValue !== undefined && scaleYValue !== null) ? scaleYValue : 1;
			if (scaleX != 1 || scaleY != 1) {
				transforms.push(`scale(${scaleX}, ${scaleY})`);
			}
		}
		
		const skewXValue = getValue(transform.skewX);
		if (skewXValue !== '' && skewXValue !== undefined && skewXValue !== null) {
			transforms.push(`skewX(${skewXValue}deg)`);
		}
		const skewYValue = getValue(transform.skewY);
		if (skewYValue !== '' && skewYValue !== undefined && skewYValue !== null) {
			transforms.push(`skewY(${skewYValue}deg)`);
		}
		
		if (transform.flipHorizontal) {
			transforms.push('scaleX(-1)');
		}
		if (transform.flipVertical) {
			transforms.push('scaleY(-1)');
		}
		
		return transforms.length > 0 ? transforms.join(' ') : '';
	};

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;

        // Border styles
        let borderCSS = "";
        if (
            borderStyle &&
            borderStyle !== "default" &&
            borderStyle !== "none"
        ) {
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
			`;
        } else {
            borderCSS = "border: none;";
        }

        // Box shadow
        let boxShadowCSS = "box-shadow: none;";
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === "inset" ? "inset " : "";
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }

        // Padding and margin
        const paddingCSS = `${getDimensionCSS(padding, 'padding', activeDevice)}`;
        const marginCSS = `${getDimensionCSS(margin, 'margin', activeDevice)}`;

        // Content typography CSS
        let contentTypographyCSS = "";
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }

            const contentFontSize = getVal(contentTypography.fontSize, activeDevice);
			if (contentFontSize || contentFontSize === 0) {
				contentTypographyCSS += `font-size: ${contentFontSize}${contentTypography.fontSizeUnit || 'px'};`;
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

            const contentLineHeight = getVal(contentTypography.lineHeight, activeDevice);
			if (contentLineHeight || contentLineHeight === 0) {
				contentTypographyCSS += `line-height: ${contentLineHeight}${contentTypography.lineHeightUnit || 'em'};`;
			}

			const contentLetterSpacing = getVal(contentTypography.letterSpacing, activeDevice);
			if (contentLetterSpacing || contentLetterSpacing === 0) {
				contentTypographyCSS += `letter-spacing: ${contentLetterSpacing}${contentTypography.letterSpacingUnit || 'px'};`;
			}
        }

        // Hover effects
        let hoverCSS = "";

        // Box shadow hover
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover =
                boxShadowHover.position === "inset" ? "inset " : "";
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }

        // Additional hover effects
        if (hoverEffect === "lift") {
            hoverCSS += "transform: translateY(-10px);";
        } else if (hoverEffect === "scale") {
            hoverCSS += "transform: scale(1.05);";
        } else if (hoverEffect === "glow") {
            hoverCSS += "filter: brightness(1.1);";
        }

        // Position styles
        let positionCSS = '';
        if (position && position !== 'default') {
            positionCSS += `position: ${position} !important;`;
            
            const horizontalValue = horizontalOffset?.[activeDevice]?.value;
            const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || 'px';
            if (horizontalValue !== '' && horizontalValue !== undefined) {
                if (horizontalOrientation === 'left') {
                    positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
                } else {
                    positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
                }
            }
            
            const verticalValue = verticalOffset?.[activeDevice]?.value;
            const verticalUnit = verticalOffset?.[activeDevice]?.unit || 'px';
            if (verticalValue !== '' && verticalValue !== undefined) {
                if (verticalOrientation === 'top') {
                    positionCSS += `top: ${verticalValue}${verticalUnit};`;
                } else {
                    positionCSS += `bottom: ${verticalValue}${verticalUnit};`;
                }
            }
        }

        if (zIndex !== '' && zIndex !== undefined && zIndex !== null) {
            positionCSS += `z-index: ${zIndex};`;
        }

		// Transform
		let transformCSS = '';
		const transformValue = getTransformCSS(transform, activeDevice);
		if (transformValue) {
			transformCSS += `transform: ${transformValue};`;
			transformCSS += `transform-origin: ${getTransformOrigin(transform, activeDevice)};`;
		}

		const transformHoverValue = getTransformCSS(transformHover, activeDevice);
		if (transformHoverValue && transformHover && transformHover.transitionDuration !== '' && transformHover.transitionDuration !== undefined && transformHover.transitionDuration !== null) {
			const duration = transformHover.transitionDuration;
			transformCSS += `transition: transform ${duration}ms ease;`;
		}

		let transformHoverCSS = '';
		if (transformHoverValue) {
			transformHoverCSS += `transform: ${transformHoverValue};`;
			transformHoverCSS += `transform-origin: ${getTransformOrigin(transformHover, activeDevice)};`;
		}

        return `
            /* Icon List Block - ${id} */
            .${id} {
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                ${boxShadowCSS}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ""}
                transition: all 0.3s ease;
                ${positionCSS}
				${transformCSS}
            }
            
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ""}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ""}
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            /* List container */
            .${id} .digiblocks-icon-list-wrapper {
                text-align: ${listAlign};
            }
            
            .${id} .digiblocks-icon-list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
				flex-direction: ${listLayout === 'horizontal' ? 'row' : 'column'};
				flex-wrap: wrap;
				justify-content: ${listAlign === 'center' ? 'center' : (listAlign === 'right' ? 'flex-end' : 'flex-start')};
				gap: ${getVal(itemSpace, activeDevice) || 16}px;
            }
            
            /* List item */
            .${id} .digiblocks-icon-list-item {
                display: inline-flex;
                align-items: center;
				gap: ${getVal(iconSpace, activeDevice) || 12}px;
				justify-content: ${listAlign === 'center' ? 'center' : (listAlign === 'right' ? 'flex-end' : 'flex-start')};
                transition: all 0.3s ease;
            }
            
            .${id} .digiblocks-icon-list-item:last-child {
                margin-bottom: 0;
            }
            
            /* Icon */
            .${id} .digiblocks-icon-list-icon {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${iconColor || "#1e73be"};
                transition: color 0.3s ease;
            }
            
            .${id} .digiblocks-icon-list-icon span {
                display: flex;
            }
            
            .${id} .digiblocks-icon-list-icon svg {
                width: ${getVal(iconSize, activeDevice) || 24}px;
				height: ${getVal(iconSize, activeDevice) || 24}px;
                fill: currentColor;
            }
            
            /* Text content */
            .${id} .digiblocks-icon-list-content {
                color: ${textColor};
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Hover states */
            .${id} .digiblocks-icon-list-item:hover .digiblocks-icon-list-icon {
                color: ${iconHoverColor};
            }
            
            .${id} .digiblocks-icon-list-item:hover .digiblocks-icon-list-content {
                color: ${textHoverColor};
            }

            .${id} .digiblocks-icon-list-child {
                display: inline-flex;
                ${iconPosition === "after" ? "flex-direction: row-reverse;" : ""}
				gap: ${getVal(iconSpace, activeDevice) || 12}px;
                align-items: center;
            }
            
            /* Link cursor for clickable items */
            .${id} .digiblocks-icon-list-item a {
                cursor: pointer;
                text-decoration: none;
                color: inherit;
            }
            
            /* Editor specific styles */
            .digiblocks-icon-list-item-controls {
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
            
            .${id} .digiblocks-icon-list-item {
                position: relative;
            }
            
            .${id} .digiblocks-icon-list-item:hover .digiblocks-icon-list-item-controls {
                opacity: 1;
            }

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

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case "options":
                return (
                    <>
						<TabPanelBody
							tab="options"
							name="structure"
							title={__("Structure", "digiblocks")}
							initialOpen={true}
						>
							{renderStructurePanel()}
						</TabPanelBody>
                        <TabPanelBody
                            tab="options"
                            name="list-items"
                            title={__("List Items", "digiblocks")}
                            initialOpen={false}
                        >
							<ToggleGroupControl
								label={__("Default Icon Source", "digiblocks")}
								value={defaultIconSource || 'library'}
								onChange={(value) => setAttributes({ defaultIconSource: value })}
								isBlock
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							>
								<ToggleGroupControlOption 
									value="library" 
									label={__("Library", "digiblocks")} 
								/>
								<ToggleGroupControlOption 
									value="custom" 
									label={__("Custom", "digiblocks")} 
								/>
							</ToggleGroupControl>

							{/* Library icon picker */}
							{(!defaultIconSource || defaultIconSource === 'library') && (
								<>
									{!componentsLoaded ? (
										<div style={{ textAlign: 'center', padding: '20px 0' }}>
											<div className="components-spinner"></div>
											<p>{__('Loading icon selector...', 'digiblocks')}</p>
										</div>
									) : (
										<FontAwesomeControl
											label={__('Select Icon', 'digiblocks')}
											value={defaultIcon}
											onChange={(value) => setAttributes({ defaultIcon: value })}
										/>
									)}
								</>
							)}

							{/* Custom SVG input */}
							{defaultIconSource === 'custom' && (
								<div style={{ marginTop: '15px' }}>
									<div className="components-base-control">
										<label className="components-base-control__label" htmlFor="default-custom-svg-input">
											{__('Custom SVG Code', 'digiblocks')}
										</label>
										<textarea
											id="default-custom-svg-input"
											className="components-textarea-control__input"
											value={defaultCustomSvg || ''}
											onChange={(e) => {
												const newSvg = e.target.value;
												
												// Create a default icon object with the custom SVG
												const newIconValue = {
													id: 'custom-svg',
													name: 'Custom SVG',
													svg: newSvg,
													style: 'custom',
													categories: ['custom']
												};
												
												// Update both the customSvg attribute and the defaultIcon
												setAttributes({ 
													defaultCustomSvg: newSvg,
													defaultIcon: newIconValue
												});
											}}
											placeholder={__('Paste your SVG code here...', 'digiblocks')}
											rows={6}
											style={{ width: '100%', marginTop: '8px' }}
										/>
										<p className="components-base-control__help">
											{__('Paste your SVG code here. Make sure it only contains valid SVG markup.', 'digiblocks')}
										</p>
									</div>
									
									{/* Preview of custom SVG */}
									{defaultCustomSvg && (
										<div style={{ marginTop: '15px', marginBottom: '15px' }}>
											<p><strong>{__('Preview:', 'digiblocks')}</strong></p>
											<div style={{ padding: '20px', background: '#f0f0f1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
												<div style={{ width: '50px', height: '50px' }} dangerouslySetInnerHTML={{ __html: defaultCustomSvg }}></div>
											</div>
										</div>
									)}
								</div>
							)}

							<ToggleGroupControl
								label={__("List Layout", "digiblocks")}
								value={listLayout}
								onChange={(value) => setAttributes({ listLayout: value })}
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
								label={__("List Alignment", "digiblocks")}
								value={listAlign}
								onChange={(value) => setAttributes({ listAlign: value })}
								isBlock
								__next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
							>
								<ToggleGroupControlOption 
									value="left" 
									label={__("Left", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="center" 
									label={__("Center", "digiblocks")}
								/>
								<ToggleGroupControlOption 
									value="right" 
									label={__("Right", "digiblocks")}
								/>
							</ToggleGroupControl>
							
							<ToggleGroupControl
								label={__("Icon Position", "digiblocks")}
								value={iconPosition}
								onChange={(value) => setAttributes({ iconPosition: value })}
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

                            <ResponsiveControl
                                label={__("Item Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={itemSpace[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            itemSpace: {
                                                ...itemSpace,
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

                            <ResponsiveControl
                                label={__("Icon Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={iconSpace[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconSpace: {
                                                ...iconSpace,
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
                    </>
                );
            case "style":
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="icon-style"
                            title={__("Icon Style", "digiblocks")}
                            initialOpen={true}
                        >
                            <ResponsiveControl
                                label={__("Icon Size", "digiblocks")}
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
                                    min={8}
                                    max={100}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>

                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === "normal"
                                                ? __(
                                                      "Icon Colors",
                                                      "digiblocks"
                                                  )
                                                : __(
                                                      "Icon Hover Colors",
                                                      "digiblocks"
                                                  )
                                        }
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value:
                                                    tab.name === "normal"
                                                        ? iconColor
                                                        : iconHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === "normal"
                                                            ? {
                                                                  iconColor:
                                                                      value,
                                                              }
                                                            : {
                                                                  iconHoverColor:
                                                                      value,
                                                              }
                                                    ),
                                                label: __(
                                                    "Icon Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="text-style"
                            title={__("Text Style", "digiblocks")}
                            initialOpen={false}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === "normal"
                                                ? __(
                                                      "Text Colors",
                                                      "digiblocks"
                                                  )
                                                : __(
                                                      "Text Hover Colors",
                                                      "digiblocks"
                                                  )
                                        }
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value:
                                                    tab.name === "normal"
                                                        ? textColor
                                                        : textHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === "normal"
                                                            ? {
                                                                  textColor:
                                                                      value,
                                                              }
                                                            : {
                                                                  textHoverColor:
                                                                      value,
                                                              }
                                                    ),
                                                label: __(
                                                    "Text Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>

                            <TypographyControl
                                label={__("Typography", "digiblocks")}
                                value={contentTypography}
                                onChange={(value) =>
                                    setAttributes({ contentTypography: value })
                                }
                                defaults={{
                                    fontSize: {
                                        desktop: 16,
                                        tablet: 15,
                                        mobile: 14,
                                    },
                                    fontSizeUnit: "px",
                                    lineHeight: {
                                        desktop: 1.5,
                                        tablet: 1.4,
                                        mobile: 1.3,
                                    },
                                    lineHeightUnit: "em",
                                }}
                            />
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="box-style"
                            title={__("Box Style", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || "default"}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    setAttributes({ borderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {borderStyle &&
                                borderStyle !== "default" &&
                                borderStyle !== "none" && (
                                    <>
                                        <PanelColorSettings
                                            title={__(
                                                "Border Colors",
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
                                                {
                                                    value: borderHoverColor,
                                                    onChange: (value) =>
                                                        setAttributes({
                                                            borderHoverColor:
                                                                value,
                                                        }),
                                                    label: __(
                                                        "Border Hover Color",
                                                        "digiblocks"
                                                    ),
                                                },
                                            ]}
                                        />

                                        <ResponsiveControl
                                            label={__(
                                                "Border Width",
                                                "digiblocks"
                                            )}
                                        >
                                            <DimensionControl
                                                values={borderWidth[localActiveDevice]}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        borderWidth: {
                                                            ...borderWidth,
                                                            [localActiveDevice]:
                                                                value,
                                                        },
                                                    })
                                                }
                                            />
                                        </ResponsiveControl>

                                        <ResponsiveControl
                                            label={__(
                                                "Border Radius",
                                                "digiblocks"
                                            )}
                                        >
                                            <DimensionControl
                                                values={borderRadius[localActiveDevice]}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        borderRadius: {
                                                            ...borderRadius,
                                                            [localActiveDevice]:
                                                                value,
                                                        },
                                                    })
                                                }
                                                units={[
                                                    {
                                                        label: "px",
                                                        value: "px",
                                                    },
                                                    { label: "%", value: "%" },
                                                ]}
                                            />
                                        </ResponsiveControl>
                                    </>
                                )}

                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => (
                                    <PanelColorSettings
                                        title={
                                            tab.name === "normal"
                                                ? __(
                                                      "Background Colors",
                                                      "digiblocks"
                                                  )
                                                : __(
                                                      "Background Hover Colors",
                                                      "digiblocks"
                                                  )
                                        }
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value:
                                                    tab.name === "normal"
                                                        ? backgroundColor
                                                        : backgroundHoverColor,
                                                onChange: (value) =>
                                                    setAttributes(
                                                        tab.name === "normal"
                                                            ? {
                                                                  backgroundColor:
                                                                      value,
                                                              }
                                                            : {
                                                                  backgroundHoverColor:
                                                                      value,
                                                              }
                                                    ),
                                                label: __(
                                                    "Background Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                )}
                            </TabPanel>

                            <SelectControl
                                label={__("Hover Effect", "digiblocks")}
                                value={hoverEffect}
                                options={hoverEffectOptions}
                                onChange={(value) =>
                                    setAttributes({ hoverEffect: value })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

                        <TabPanelBody
                            tab="style"
                            name="shadow"
                            title={__("Box Shadow", "digiblocks")}
                            initialOpen={false}
                        >
							<BoxShadowControl
								normalValue={boxShadow}
								hoverValue={boxShadowHover}
								onNormalChange={(value) => setAttributes({ boxShadow: value })}
								onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
							/>
                        </TabPanelBody>
                    </>
                );
            case "advanced":
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={true}
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
                            tab="advanced"
                            name="position"
                            title={__("Position", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Position", "digiblocks")}
                                value={position}
                                options={[
                                    { label: __("Default", "digiblocks"), value: "default" },
                                    { label: __("Relative", "digiblocks"), value: "relative" },
                                    { label: __("Absolute", "digiblocks"), value: "absolute" },
                                    { label: __("Fixed", "digiblocks"), value: "fixed" },
                                ]}
                                onChange={(value) => setAttributes({ position: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {position !== 'default' && (
                                <>
                                    <ToggleGroupControl
                                        label={__("Horizontal Orientation", "digiblocks")}
                                        value={horizontalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ horizontalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="left"
                                            label={__("Left", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="right"
                                            label={__("Right", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={horizontalOffset}
                                        onChange={(value) => setAttributes({ horizontalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(horizontalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(horizontalOffset?.[localActiveDevice]?.unit)}
                                    />

                                    <ToggleGroupControl
                                        label={__("Vertical Orientation", "digiblocks")}
                                        value={verticalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ verticalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="top"
                                            label={__("Top", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="bottom"
                                            label={__("Bottom", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={verticalOffset}
                                        onChange={(value) => setAttributes({ verticalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(verticalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(verticalOffset?.[localActiveDevice]?.unit)}
                                    />
                                </>
                            )}

                            <RangeControl
                                label={__("Z-Index", "digiblocks")}
                                value={zIndex}
                                onChange={(value) => setAttributes({ zIndex: value })}
                                min={-999}
                                max={9999}
                                allowReset={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="transform"
                            title={__('Transform', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TransformControl
                                normalValue={transform}
                                hoverValue={transformHover}
                                onNormalChange={(value) => setAttributes({ transform: value })}
                                onHoverChange={(value) => setAttributes({ transformHover: value })}
                            />
                        </TabPanelBody>

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
                                onChange={(value) =>
                                    setAttributes({ animation: value })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

							{animation && animation !== 'none' && (
								<>
									<SelectControl
										label={__("Animation Duration", "digiblocks")}
										value={animationDuration}
										options={[
											{ label: __("Slow", "digiblocks"), value: "slow" },
											{ label: __("Normal", "digiblocks"), value: "normal" },
											{ label: __("Fast", "digiblocks"), value: "fast" }
										]}
										onChange={(value) => setAttributes({ animationDuration: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
									
									<NumberControl
										label={__("Animation Delay (ms)", "digiblocks")}
										value={animationDelay || 0}
										onChange={(value) => setAttributes({ animationDelay: parseInt(value) || 0 })}
										min={0}
										step={100}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</>
							)}

                            {animation && animation !== "none" && (
                                <div style={{ marginTop: "10px" }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={handlePreviewClick}
                                        style={{ width: "100%" }}
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
                            <div className="components-base-control html-anchor-control">
                                <div className="components-base-control__field">
                                    <label
                                        className="components-base-control__label"
                                        htmlFor="html-anchor"
                                    >
                                        {__("HTML anchor", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="html-anchor"
                                        value={anchor || ""}
                                        onChange={(e) =>
                                            setAttributes({
                                                anchor: e.target.value,
                                            })
                                        }
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p
                                    id="html-anchor-help"
                                    className="components-base-control__help"
                                >
                                    {__(
                                        'Enter a word or two — without spaces — to make a unique web address just for this block, called an "anchor". Then, you\'ll be able to link directly to this section of your page.',
                                        "digiblocks"
                                    )}
                                </p>
                            </div>

                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label
                                        className="components-base-control__label"
                                        htmlFor="additional-css-classes"
                                    >
                                        {__(
                                            "Additional CSS class(es)",
                                            "digiblocks"
                                        )}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="additional-css-classes"
                                        value={customClasses || ""}
                                        onChange={(e) =>
                                            setAttributes({
                                                customClasses: e.target.value,
                                            })
                                        }
                                        aria-describedby="additional-css-classes-help"
                                        autoComplete="off"
                                    />
                                </div>
                                <p
                                    id="additional-css-classes-help"
                                    className="components-base-control__help"
                                >
                                    {__(
                                        "Separate multiple classes with spaces.",
                                        "digiblocks"
                                    )}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
    };

    // Render list items
    const renderListItems = () => {
		return items.map((item, index) => {
			const itemContent = item.content || "";
			const itemLink = item.linkUrl || "";
			const hasLink = !!itemLink;

			const ItemTag = "div";
			const itemProps = {};

			return (
				<li key={item.id} className="digiblocks-icon-list-item">
					<ItemTag className="digiblocks-icon-list-child" {...itemProps}>
						<span className="digiblocks-icon-list-icon">
							{item.icon && item.icon.svg && (
								<span
									dangerouslySetInnerHTML={{
										__html: item.icon.svg,
									}}
								/>
							)}
						</span>
						<RichText
							tagName="span"
							className="digiblocks-icon-list-content"
							value={itemContent}
							onChange={(value) =>
								updateListItem(index, "content", value)
							}
							placeholder={__(
								"List item text...",
								"digiblocks"
							)}
							allowedFormats={[
								"core/bold",
								"core/italic",
								"core/underline",
							]}
						/>
					</ItemTag>
					<div className="digiblocks-icon-list-item-controls">
						<Tooltip text={__("Duplicate", "digiblocks")}>
							<Button
								icon="admin-page"
								onClick={() => duplicateItem(index)}
								isSmall
							/>
						</Tooltip>
						<Tooltip text={__("Remove", "digiblocks")}>
							<Button
								icon="trash"
								onClick={() => removeListItem(index)}
								isSmall
							/>
						</Tooltip>
					</div>
				</li>
			);
		});
	};

    const blockProps = useBlockProps({
        className: `digiblocks-icon-list-block ${id} ${customClasses || ""}`,
        id: anchor || null,
    });

    return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="plus"
						label={__("Add Icon List Item", "digiblocks")}
						onClick={addListItem}
					/>
				</ToolbarGroup>
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

			<style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

			<div {...blockProps}>
				<div className="digiblocks-icon-list-wrapper">
					<ul className="digiblocks-icon-list">
						{renderListItems()}
					</ul>
				</div>

				{iconModalOpen && currentEditingItem !== null && (
					<Modal
						title={__("Choose Icon", "digiblocks")}
						onRequestClose={() => setIconModalOpen(false)}
						className="digiblocks-icon-modal"
					>
						<ToggleGroupControl
							label={__("Icon Source", "digiblocks")}
							value={items[currentEditingItem].iconSource || 'library'}
							onChange={(value) => {
								const newItems = [...items];
								newItems[currentEditingItem].iconSource = value;
								setAttributes({ items: newItems });
							}}
							isBlock
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
						>
							<ToggleGroupControlOption 
								value="library" 
								label={__("Library", "digiblocks")} 
							/>
							<ToggleGroupControlOption 
								value="custom" 
								label={__("Custom", "digiblocks")} 
							/>
						</ToggleGroupControl>

						{(!items[currentEditingItem].iconSource || items[currentEditingItem].iconSource === 'library') && (
							<>
								{!componentsLoaded ? (
									<div style={{ textAlign: 'center', padding: '20px 0' }}>
										<div className="components-spinner"></div>
										<p>{__('Loading icon selector...', 'digiblocks')}</p>
									</div>
								) : (
									<FontAwesomeControl
										value={items[currentEditingItem].icon}
										onChange={(newIcon) => {
											setItemIcon(currentEditingItem, newIcon);
											setIconModalOpen(false);
										}}
									/>
								)}
							</>
						)}

						{items[currentEditingItem].iconSource === 'custom' && (
							<div style={{ marginTop: '15px' }}>
								<div className="components-base-control">
									<label className="components-base-control__label" htmlFor="custom-svg-input">
										{__('Custom SVG Code', 'digiblocks')}
									</label>
									<textarea
										id="custom-svg-input"
										className="components-textarea-control__input"
										value={items[currentEditingItem].customSvg || ''}
										onChange={(e) => {
											const newSvg = e.target.value;
											const newItems = [...items];
											
											const newIconValue = {
												id: 'custom-svg',
												name: 'Custom SVG',
												svg: newSvg,
												style: 'custom',
												categories: ['custom']
											};
											
											newItems[currentEditingItem].customSvg = newSvg;
											newItems[currentEditingItem].icon = newIconValue;
											
											setAttributes({ items: newItems });
										}}
										placeholder={__('Paste your SVG code here...', 'digiblocks')}
										rows={6}
										style={{ width: '100%', marginTop: '8px' }}
									/>
									<p className="components-base-control__help">
										{__('Paste your SVG code here. Make sure it only contains valid SVG markup.', 'digiblocks')}
									</p>
								</div>
								
								{items[currentEditingItem].customSvg && (
									<div style={{ marginTop: '15px', marginBottom: '15px' }}>
										<p><strong>{__('Preview:', 'digiblocks')}</strong></p>
										<div style={{ padding: '20px', background: '#f0f0f1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<div style={{ width: '50px', height: '50px' }} dangerouslySetInnerHTML={{ __html: items[currentEditingItem].customSvg }}></div>
										</div>
									</div>
								)}
								
								<div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
									<Button 
										variant="primary" 
										onClick={() => setIconModalOpen(false)}
									>
										{__("Apply", "digiblocks")}
									</Button>
								</div>
							</div>
						)}
					</Modal>
				)}
			</div>
		</>
	);
};

export default IconListEdit;
