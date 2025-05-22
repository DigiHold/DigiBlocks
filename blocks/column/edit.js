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
	ToggleControl,
    SelectControl,
    RangeControl,
    Button
} = wp.components;
const { useState, useEffect } = wp.element;
const { useSelect, useDispatch } = wp.data;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Column Block Edit Component
 */
const ColumnEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
		visibility,
        width,
        order,
		hoverEffect,
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
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});
    
    // State to track if width adjustment is internal to prevent loops
    const [isInternalWidthUpdate, setIsInternalWidthUpdate] = useState(false);
    
    // Get parent block info only
	const { parentClientId, hasChildBlocks } = useSelect(
		(select) => {
			const { getBlockParents, getBlockCount } = select('core/block-editor');
			
			// Get the parent container block
			const parents = getBlockParents(clientId);
			const parentId = parents.length > 0 ? parents[0] : null;
			
			return {
				parentClientId: parentId,
				hasChildBlocks: getBlockCount(clientId) > 0
			};
		},
		[clientId]
	);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

	// Handle width change
	const handleWidthChange = (newWidth, device) => {
		setAttributes({
			width: {
				...width,
				[device]: Math.round(newWidth * 100) / 100, // Round to 2 decimal places
			},
		});
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

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Lift", "digiblocks"), value: "lift" },
        { label: __("Scale", "digiblocks"), value: "scale" },
        { label: __("Glow", "digiblocks"), value: "glow" },
    ];

    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'options', 
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

        /**
		 * Get responsive padding with minimum 15px enforcement for column block
		 * 
		 * @param {Object} padding Padding object with responsive values
		 * @param {string} device Current device (desktop, tablet, mobile)
		 * @return {string} Complete padding CSS rule
		 */
		const getColumnPadding = (padding, device) => {
			// Check if device has valid padding values
			const hasDeviceValues = (dev) => {
				return padding && padding[dev] && (
					(padding[dev].top !== undefined && padding[dev].top !== '') ||
					(padding[dev].right !== undefined && padding[dev].right !== '') ||
					(padding[dev].bottom !== undefined && padding[dev].bottom !== '') ||
					(padding[dev].left !== undefined && padding[dev].left !== '')
				);
			};
			
			// Determine which device values to use (with fallbacks)
			let values;
			
			if (hasDeviceValues(device)) {
				values = padding[device];
			} else if (device === 'tablet' && hasDeviceValues('desktop')) {
				values = padding['desktop'];
			} else if (device === 'mobile') {
				if (hasDeviceValues('tablet')) {
					values = padding['tablet'];
				} else if (hasDeviceValues('desktop')) {
					values = padding['desktop'];
				} else {
					// No valid values found for any device
					return '';
				}
			} else {
				// No valid values found
				return '';
			}
			
			// Apply minimum padding of 10px if needed
			const ensureMinPadding = (value, unit) => {
				// For empty or undefined values, use 10px if unit is pixels
				if (value === undefined || value === '') {
					return unit === 'px' ? '10px' : '0' + unit;
				}
				// For values below 10px
				if (unit === 'px' && parseFloat(value) < 10) {
					return '10px';
				}
				// For all other values
				return value + unit;
			};
			
			const unit = values.unit || 'px';
			
			const top = ensureMinPadding(values.top, unit);
			const right = ensureMinPadding(values.right, unit);
			const bottom = ensureMinPadding(values.bottom, unit);
			const left = ensureMinPadding(values.left, unit);
			
			return `padding: ${top} ${right} ${bottom} ${left} !important;`;
		};

		// Get responsive padding with minimum 10px enforcement
		const paddingCSS = getColumnPadding(padding, activeDevice);
		const tabletPaddingCSS = getColumnPadding(padding, 'tablet');
		const mobilePaddingCSS = getColumnPadding(padding, 'mobile');
        
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

		// Hover effects
        let hoverCSS = '';
        
        // Box shadow hover
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }

        // Additional hover effects
        if (hoverEffect === 'lift') {
            hoverCSS += 'transform: translateY(-10px);';
        } else if (hoverEffect === 'scale') {
            hoverCSS += 'transform: scale(1.05);';
        } else if (hoverEffect === 'glow') {
            hoverCSS += 'filter: brightness(1.1);';
        }
        
        return `
            /* Column Block - ${id} */
            .${id} {
                position: relative;
                width: ${width[activeDevice]}%;
                ${paddingCSS}
				${getDimensionCSS(margin, 'margin', activeDevice)}
                display: flex;
                flex-direction: column;
                ${order[activeDevice] !== 0 ? `order: ${order[activeDevice]};` : ''}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${backgroundImageCSS}
                ${borderStyle !== 'none' ? `
					border-style: ${borderStyle}!important;
					${getDimensionCSS(borderWidth, 'border-width', activeDevice, true)}
					border-color: ${borderColor}!important;` : ''}
                ${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
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
					${tabletPaddingCSS}
					${getDimensionCSS(margin, 'margin', 'tablet')}
                    ${order['tablet'] !== 0 ? `order: ${order['tablet']};` : ''}
					${getDimensionCSS(borderRadius, 'border-radius', 'tablet')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'tablet', true)}` : ''}
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    width: ${width['mobile']}%;
					${mobilePaddingCSS}
					${getDimensionCSS(margin, 'margin', 'mobile')}
                    ${order['mobile'] !== 0 ? `order: ${order['mobile']};` : ''}
					${getDimensionCSS(borderRadius, 'border-radius', 'mobile')}
                    ${borderStyle !== 'none' ? `${getDimensionCSS(borderWidth, 'border-width', 'mobile', true)}` : ''}
                }
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
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
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
									step={0.01}
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

						<TabPanelBody
                            tab="layout"
                            name="effect"
                            title={__('Hover Effect', 'digiblocks')}
                            initialOpen={false}
                        >
							<SelectControl
                                label={__("Hover Effect", "digiblocks")}
                                value={hoverEffect || 'none'}
                                options={hoverEffectOptions}
                                onChange={(value) => setAttributes({ hoverEffect: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
						</TabPanelBody>

						<TabPanelBody
							tab="layout"
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
										enableAlpha={true}
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
								enableAlpha={true}
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
								enableAlpha={true}
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