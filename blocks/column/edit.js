/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck,
    ButtonBlockAppender
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef, useMemo } = wp.element;
const { useSelect, useDispatch, select } = wp.data;

/**
 * Internal dependencies
 */
const { useBlockId } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Column Block Edit Component
 */
const ColumnEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        width,
        order,
        backgroundColor,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundOverlay,
        backgroundOverlayOpacity,
        backgroundOverlayBlendMode,
        padding,
        margin,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        boxShadow,
        boxShadowHover,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("layout");
    
    // State to track if width adjustment is internal to prevent loops
    const [isInternalWidthUpdate, setIsInternalWidthUpdate] = useState(false);
    
    // Get parent block info only
	const { parentClientId, hasChildBlocks } = useSelect((select) => {
		const { getBlockParents, getBlockCount } = select('core/block-editor');
		
		// Get the parent container block
		const parents = getBlockParents(clientId);
		const parentId = parents.length > 0 ? parents[0] : null;
		
		return {
			parentClientId: parentId,
			hasChildBlocks: getBlockCount(clientId) > 0
		};
	}, [clientId]);

	// Get the parent block to access its innerBlocks
	const parentBlock = useSelect(
		(select) => parentClientId ? select('core/block-editor').getBlock(parentClientId) : null,
		[parentClientId]
	);

	// Memoize the sibling columns to prevent unnecessary re-renders
	const siblingColumns = useMemo(() => {
		if (!parentBlock || !parentBlock.innerBlocks) return [];
		
		return parentBlock.innerBlocks
			.filter(block => block.name === 'digiblocks/column')
			.map(block => ({
				clientId: block.clientId,
				width: block.attributes.width,
				isCurrent: block.clientId === clientId
			}));
	}, [parentBlock, clientId]);

    // Get dispatch function to update other columns
    const { updateBlockAttributes } = useDispatch('core/block-editor');
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

	// Handle width change with user-friendly distribution
	const handleWidthChange = (newWidth, device) => {
		// Enforce minimum width constraint
		const minWidth = 10;
		
		// Get all sibling columns
		const allColumns = siblingColumns;
		const totalColumns = allColumns.length;
		
		// Skip if only one column
		if (totalColumns <= 1) {
			setAttributes({
				width: {
					...width,
					[device]: 100,
				},
			});
			return;
		}
		
		// Ensure newWidth is within valid range
		newWidth = Math.max(minWidth, Math.min(newWidth, 100 - (minWidth * (totalColumns - 1))));
		
		// Skip if already in update loop
		if (isInternalWidthUpdate) {
			setAttributes({
				width: {
					...width,
					[device]: Math.round(newWidth * 10) / 10,
				},
			});
			return;
		}
		
		// Set flag to prevent recursive updates
		setIsInternalWidthUpdate(true);
		
		try {
			// Get current column index
			const currentIndex = allColumns.findIndex(col => col.isCurrent);
			if (currentIndex === -1) return;
			
			// Current column's old width
			const oldWidth = parseFloat(width[device] || 0);
			
			// Width difference
			const widthDiff = newWidth - oldWidth;
			
			// Update current column's width
			setAttributes({
				width: {
					...width,
					[device]: Math.round(newWidth * 10) / 10,
				},
			});
			
			// Auto-adjust the remaining width among the REMAINING columns
			// (excluding the current one and previously manually set ones)
			
			// Get indexes of columns after current
			const remainingColumnIndexes = [];
			for (let i = 0; i < totalColumns; i++) {
				if (i !== currentIndex) {
					remainingColumnIndexes.push(i);
				}
			}
			
			if (remainingColumnIndexes.length === 0) return;
			
			// Last column will always be adjusted to make total 100%
			const lastAdjustableIdx = remainingColumnIndexes[remainingColumnIndexes.length - 1];
			const lastAdjustableCol = allColumns[lastAdjustableIdx];
			
			// Get total width of all columns except the last adjustable one
			const widthWithoutLast = allColumns.reduce((sum, col, idx) => {
				if (idx === lastAdjustableIdx) return sum;
				
				// For current column, use new width
				if (col.isCurrent) {
					return sum + newWidth;
				}
				
				return sum + parseFloat(col.width[device] || 0);
			}, 0);
			
			// Calculate last column's width to make total 100%
			const lastColWidth = 100 - widthWithoutLast;
			
			// Ensure minimum width
			const finalLastColWidth = Math.max(minWidth, Math.round(lastColWidth * 10) / 10);
			
			// Adjust last column
			updateBlockAttributes(lastAdjustableCol.clientId, {
				width: {
					...lastAdjustableCol.width,
					[device]: finalLastColWidth
				}
			});
			
			// Verify total is 100%
			setTimeout(() => {
				const updatedColumns = select('core/block-editor').getBlocks(parentClientId)
					.filter(block => block.name === 'digiblocks/column');
				
				const updatedTotal = updatedColumns.reduce((sum, col) => 
					sum + parseFloat(col.attributes.width[device] || 0), 0);
				
				// Fix any rounding errors if needed
				if (Math.abs(updatedTotal - 100) > 0.1) {
					const adjustCol = updatedColumns[lastAdjustableIdx];
					const currentAdjustWidth = parseFloat(adjustCol.attributes.width[device] || 0);
					const fixedWidth = currentAdjustWidth + (100 - updatedTotal);
					
					updateBlockAttributes(adjustCol.clientId, {
						width: {
							...adjustCol.attributes.width,
							[device]: Math.max(minWidth, Math.round(fixedWidth * 10) / 10)
						}
					});
				}
			}, 50);
		} finally {
			// Reset internal update flag after a delay
			setTimeout(() => {
				setIsInternalWidthUpdate(false);
			}, 100);
		}
	};

    // Background position options
    const bgPositionOptions = [
        { label: __('Top Left', 'digiblocks'), value: 'top left' },
        { label: __('Top Center', 'digiblocks'), value: 'top center' },
        { label: __('Top Right', 'digiblocks'), value: 'top right' },
        { label: __('Center Left', 'digiblocks'), value: 'center left' },
        { label: __('Center Center', 'digiblocks'), value: 'center center' },
        { label: __('Center Right', 'digiblocks'), value: 'center right' },
        { label: __('Bottom Left', 'digiblocks'), value: 'bottom left' },
        { label: __('Bottom Center', 'digiblocks'), value: 'bottom center' },
        { label: __('Bottom Right', 'digiblocks'), value: 'bottom right' },
    ];

    // Background repeat options
    const bgRepeatOptions = [
        { label: __('No Repeat', 'digiblocks'), value: 'no-repeat' },
        { label: __('Repeat', 'digiblocks'), value: 'repeat' },
        { label: __('Repeat X', 'digiblocks'), value: 'repeat-x' },
        { label: __('Repeat Y', 'digiblocks'), value: 'repeat-y' },
    ];

    // Background size options
    const bgSizeOptions = [
        { label: __('Cover', 'digiblocks'), value: 'cover' },
        { label: __('Contain', 'digiblocks'), value: 'contain' },
        { label: __('Auto', 'digiblocks'), value: 'auto' },
        { label: __('100%', 'digiblocks'), value: '100%' },
    ];

    // Border style options
    const borderStyleOptions = [
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Solid', 'digiblocks'), value: 'solid' },
        { label: __('Dashed', 'digiblocks'), value: 'dashed' },
        { label: __('Dotted', 'digiblocks'), value: 'dotted' },
        { label: __('Double', 'digiblocks'), value: 'double' },
    ];

    // Blend mode options
    const blendModeOptions = [
        { label: __('Normal', 'digiblocks'), value: 'normal' },
        { label: __('Multiply', 'digiblocks'), value: 'multiply' },
        { label: __('Screen', 'digiblocks'), value: 'screen' },
        { label: __('Overlay', 'digiblocks'), value: 'overlay' },
        { label: __('Darken', 'digiblocks'), value: 'darken' },
        { label: __('Lighten', 'digiblocks'), value: 'lighten' },
        { label: __('Color Dodge', 'digiblocks'), value: 'color-dodge' },
        { label: __('Color Burn', 'digiblocks'), value: 'color-burn' },
        { label: __('Hard Light', 'digiblocks'), value: 'hard-light' },
        { label: __('Soft Light', 'digiblocks'), value: 'soft-light' },
        { label: __('Difference', 'digiblocks'), value: 'difference' },
        { label: __('Exclusion', 'digiblocks'), value: 'exclusion' },
        { label: __('Hue', 'digiblocks'), value: 'hue' },
        { label: __('Saturation', 'digiblocks'), value: 'saturation' },
        { label: __('Color', 'digiblocks'), value: 'color' },
        { label: __('Luminosity', 'digiblocks'), value: 'luminosity' },
    ];

    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'layout', 
            title: __('Layout', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        { 
            name: 'style', 
            title: __('Style', 'digiblocks'),
            icon: tabIcons.styleIcon
        },
        { 
            name: 'background', 
            title: __('Background', 'digiblocks'),
            icon: tabIcons.backgroundIcon
        }
    ];

    // Generate CSS for column styling
    const generateColumnCSS = () => {
        const activeDevice = localActiveDevice;

        // Function to ensure minimum padding of 10px
        const ensureMinPadding = (paddingValue, unit) => {
            // If padding is 0 or very small (less than 10px), return 10px
            if (unit === 'px' && parseFloat(paddingValue) < 10) {
                return '15px';
            }
            // Otherwise return the original value
            return paddingValue + unit;
        };

        // Apply minimum padding
        const paddingTop = ensureMinPadding(padding[activeDevice].top, padding[activeDevice].unit);
        const paddingRight = ensureMinPadding(padding[activeDevice].right, padding[activeDevice].unit);
        const paddingBottom = ensureMinPadding(padding[activeDevice].bottom, padding[activeDevice].unit);
        const paddingLeft = ensureMinPadding(padding[activeDevice].left, padding[activeDevice].unit);
        
        // Background image CSS
        let backgroundImageCSS = '';
        if (backgroundImage && backgroundImage.url) {
            backgroundImageCSS = `background-image: url(${backgroundImage.url});
            background-position: ${backgroundPosition};
            background-repeat: ${backgroundRepeat};
            background-size: ${backgroundSize};`;
        }
        
        // Background overlay CSS
        let overlayCSS = '';
        if (backgroundOverlay) {
            overlayCSS = `
            .${id}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${backgroundOverlay};
                opacity: ${backgroundOverlayOpacity};
                mix-blend-mode: ${backgroundOverlayBlendMode};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${id} > * {
                position: relative;
                z-index: 2;
            }`;
        }
        
        // Box shadow CSS
        let boxShadowCSS = '';
        if (boxShadow && boxShadow.enable) {
            boxShadowCSS = `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Box shadow hover
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        return `
            /* Column Block - ${id} */
            .${id} {
                position: relative;
                width: ${width[activeDevice]}%;
                padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
                margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};
                display: flex;
                flex-direction: column;
                ${order[activeDevice] !== 0 ? `order: ${order[activeDevice]};` : ''}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${backgroundImageCSS}
                ${borderStyle !== 'none' ? `
                border-style: ${borderStyle}!important;
                border-width: ${borderWidth[activeDevice].top}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].right}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].bottom}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].left}${borderWidth[activeDevice].unit}!important;
                border-color: ${borderColor}!important;` : ''}
                border-radius: ${borderRadius[activeDevice].top}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].right}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].bottom}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].left}${borderRadius[activeDevice].unit};
                ${boxShadowCSS}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${id}:hover {
                ${boxShadowHoverCSS}
            }

            .${id} > div {
                width: 100%;
            }
            
            ${overlayCSS}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${id} {
                    width: ${width['tablet']}%;
                    padding: ${padding['tablet'].top}${padding['tablet'].unit} ${padding['tablet'].right}${padding['tablet'].unit} ${padding['tablet'].bottom}${padding['tablet'].unit} ${padding['tablet'].left}${padding['tablet'].unit};
                    margin: ${margin['tablet'].top}${margin['tablet'].unit} ${margin['tablet'].right}${margin['tablet'].unit} ${margin['tablet'].bottom}${margin['tablet'].unit} ${margin['tablet'].left}${margin['tablet'].unit};
                    ${order['tablet'] !== 0 ? `order: ${order['tablet']};` : ''}
                    border-radius: ${borderRadius['tablet'].top}${borderRadius['tablet'].unit} ${borderRadius['tablet'].right}${borderRadius['tablet'].unit} ${borderRadius['tablet'].bottom}${borderRadius['tablet'].unit} ${borderRadius['tablet'].left}${borderRadius['tablet'].unit};
                    ${borderStyle !== 'none' ? `border-width: ${borderWidth['tablet'].top}${borderWidth['tablet'].unit} ${borderWidth['tablet'].right}${borderWidth['tablet'].unit} ${borderWidth['tablet'].bottom}${borderWidth['tablet'].unit} ${borderWidth['tablet'].left}${borderWidth['tablet'].unit};` : ''}
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    width: ${width['mobile']}%;
                    padding: ${padding['mobile'].top}${padding['mobile'].unit} ${padding['mobile'].right}${padding['mobile'].unit} ${padding['mobile'].bottom}${padding['mobile'].unit} ${padding['mobile'].left}${padding['mobile'].unit};
                    margin: ${margin['mobile'].top}${margin['mobile'].unit} ${margin['mobile'].right}${margin['mobile'].unit} ${margin['mobile'].bottom}${margin['mobile'].unit} ${margin['mobile'].left}${margin['mobile'].unit};
                    ${order['mobile'] !== 0 ? `order: ${order['mobile']};` : ''}
                    border-radius: ${borderRadius['mobile'].top}${borderRadius['mobile'].unit} ${borderRadius['mobile'].right}${borderRadius['mobile'].unit} ${borderRadius['mobile'].bottom}${borderRadius['mobile'].unit} ${borderRadius['mobile'].left}${borderRadius['mobile'].unit};
                    ${borderStyle !== 'none' ? `border-width: ${borderWidth['mobile'].top}${borderWidth['mobile'].unit} ${borderWidth['mobile'].right}${borderWidth['mobile'].unit} ${borderWidth['mobile'].bottom}${borderWidth['mobile'].unit} ${borderWidth['mobile'].left}${borderWidth['mobile'].unit};` : ''}
                }
            }
        `;
    };

    // Generate block props
    const blockProps = useBlockProps({
        className: `digiblocks-column ${id}`,
    });

    // Generate inner blocks props
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        templateLock: false,
        renderAppender: hasChildBlocks 
            ? undefined
            : () => <ButtonBlockAppender rootClientId={clientId} />
    });

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'layout':
                return (
                    <>
                        <TabPanelBody
                            tab="layout"
                            name="column"
                            title={__('Column', 'digiblocks')}
                            initialOpen={true}
                        >
                            <ResponsiveControl
								label={__('Width (%)', 'digiblocks')}
							>
								<RangeControl
									value={width[localActiveDevice]}
									onChange={(value) => handleWidthChange(value, localActiveDevice)}
									min={10}
									max={100}
									step={1}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
							</ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Order', 'digiblocks')}
                            >
                                <RangeControl
                                    value={order[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            order: {
                                                ...order,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={-10}
                                    max={10}
                                    step={1}
                                    allowReset={true}
                                    resetFallbackValue={0}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="layout"
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
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__('Borders & Radius', 'digiblocks')}
                            initialOpen={true}
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
                                    
                                    <PanelColorSettings
                                        title=""
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                label: __('Border Color', 'digiblocks'),
                                            },
                                        ]}
                                    />
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
                                        { label: '%', value: '%' },
                                        { label: 'em', value: 'em' },
                                    ]}
                                />
                            </ResponsiveControl>
                            
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
                            />
                        </TabPanelBody>
                    </>
                );
            case 'background':
                return (
                    <>
                        <TabPanelBody
                            tab="background"
                            name="background"
                            title={__('Background', 'digiblocks')}
                            initialOpen={true}
                        >
                            <PanelColorSettings
                                title={__("Background Color", "digiblocks")}
                                initialOpen={true}
                                colorSettings={[
                                    {
                                        value: backgroundColor,
                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                ]}
                            />
                            
                            <div className="digiblocks-media-control">
                                <p className="components-base-control__label">{__('Background Image', 'digiblocks')}</p>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                backgroundImage: {
                                                    url: media.url,
                                                    id: media.id,
                                                    alt: media.alt || '',
                                                    size: media.sizes?.full?.url ? 'full' : '',
                                                }
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={backgroundImage?.id}
                                        render={({ open }) => (
                                            <div className="digiblocks-media-upload-wrapper">
                                                {backgroundImage?.url ? (
                                                    <div className="digiblocks-media-preview">
                                                        <img src={backgroundImage.url} alt={backgroundImage.alt || ''} />
                                                        <div className="digiblocks-media-controls">
                                                            <Button
                                                                isPrimary
                                                                onClick={open}
                                                            >
                                                                <span class="dashicon dashicons dashicons-edit"></span>
                                                            </Button>
                                                            <Button 
                                                                isDestructive
                                                                onClick={() => setAttributes({ backgroundImage: { url: '', id: 0, alt: '', size: '' } })}
                                                            >
                                                                <span class="dashicon dashicons dashicons-trash"></span>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        className="digiblocks-media-upload-button"
                                                        isPrimary
                                                        onClick={open}
                                                    >
                                                        {__('Select Image', 'digiblocks')}
                                                    </Button>
                                                )}
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            
                            {backgroundImage?.url && (
                                <>
                                    <SelectControl
                                        label={__('Background Position', 'digiblocks')}
                                        value={backgroundPosition}
                                        options={bgPositionOptions}
                                        onChange={(value) => setAttributes({ backgroundPosition: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Background Repeat', 'digiblocks')}
                                        value={backgroundRepeat}
                                        options={bgRepeatOptions}
                                        onChange={(value) => setAttributes({ backgroundRepeat: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Background Size', 'digiblocks')}
                                        value={backgroundSize}
                                        options={bgSizeOptions}
                                        onChange={(value) => setAttributes({ backgroundSize: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="background"
                            name="overlay"
                            title={__('Background Overlay', 'digiblocks')}
                            initialOpen={false}
                        >
                            <PanelColorSettings
                                title={__("Overlay Color", "digiblocks")}
                                initialOpen={true}
                                colorSettings={[
                                    {
                                        value: backgroundOverlay,
                                        onChange: (value) => setAttributes({ backgroundOverlay: value }),
                                        label: __("Overlay Color", "digiblocks"),
                                    },
                                ]}
                            />
                            
                            {backgroundOverlay && (
                                <>
                                    <RangeControl
                                        label={__('Overlay Opacity', 'digiblocks')}
                                        value={backgroundOverlayOpacity}
                                        onChange={(value) => setAttributes({ backgroundOverlayOpacity: value })}
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__('Blend Mode', 'digiblocks')}
                                        value={backgroundOverlayBlendMode}
                                        options={blendModeOptions}
                                        onChange={(value) => setAttributes({ backgroundOverlayBlendMode: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </>
                            )}
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
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
            <style dangerouslySetInnerHTML={{ __html: generateColumnCSS() }} />

            {/* Column content */}
            <div {...innerBlocksProps} />
        </>
    );
};

export default ColumnEdit;