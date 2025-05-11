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
} = wp.blockEditor;
const {
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
	Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;
const { useDispatch, useSelect } = wp.data;
const { createBlock } = wp.blocks;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Container layouts
 */
const containerLayouts = [
    {
        name: '1-col',
        label: __('1 Column', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M88 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h86c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"></path></svg>
        ),
        columns: [100]
    },
    {
        name: '2-col-equal',
        label: __('2 Columns Equal', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M41.3 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h39.2c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM88 48H48.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"></path></svg>
        ),
        columns: [50, 50]
    },
    {
        name: '3-col-equal',
        label: __('3 Columns Equal', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M26.2 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h24.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2zM57.1 48H32.9c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h24.2c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM88 48H63.8c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"></path></svg>
        ),
        columns: [33.33, 33.33, 33.33]
    },
    {
        name: '4-col-equal',
        label: __('4 Columns Equal', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M19 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM42 48H25c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM64.9 48H48c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM87.9 48H71c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"></path></svg>
        ),
        columns: [25, 25, 25, 25]
    },
    {
        name: '1-3-col',
        label: __('1/3 + 2/3', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M24.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h22c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM87.9 48H30.2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h57.7c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"></path></svg>
        ),
        columns: [33.33, 66.67]
    },
    {
        name: '3-1-col',
        label: __('2/3 + 1/3', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M60.6 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h58.6c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48H66.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h21.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"></path></svg>
        ),
        columns: [66.67, 33.33]
    },
    {
        name: '1-4-1-4-2-4-col',
        label: __('1/4 + 1/4 + 2/4', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M20.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h18.1c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM44.6 48H26.5c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h18.1c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48h-37c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h37c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"></path></svg>
        ),
        columns: [25, 25, 50]
    },
    {
        name: '2-4-1-4-1-4-col',
        label: __('2/4 + 1/4 + 1/4', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM45.4 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H45.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"></path></svg>
        ),
        columns: [50, 25, 25]
    },
    {
        name: '1-4-2-4-1-4-col',
        label: __('1/4 + 2/4 + 1/4', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2zM26.4 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-37c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2z"></path></svg>
        ),
        columns: [25, 50, 25]
    },
    {
        name: '5-col-equal',
        label: __('5 Columns Equal', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M20.3 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H20.3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM38.7 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H38.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM57.1 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H57.1c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM75.4 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H75.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"></path></svg>
        ),
        columns: [20, 20, 20, 20, 20]
    },
    {
        name: '6-col-equal',
        label: __('6 Columns Equal', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M17.3 48H27c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM32.4 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM47.8 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM62.9 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM78.3 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM2 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"></path></svg>
        ),
        columns: [16.67, 16.67, 16.67, 16.67, 16.67, 16.67]
    },
    {
        name: '1-6-4-6-1-6-col',
        label: __('1/6 + 4/6 + 1/6', 'digiblocks'),
        icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 90 48"><path d="M19.2 48h51.5c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H19.2c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM77.1 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H77.1c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM2 48h11.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"></path></svg>
        ),
        columns: [16.67, 66.67, 16.67]
    }
];

/**
 * Container Block Edit Component
 */
const ContainerEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        layout,
        contentLayout,
        contentWidth,
        contentMaxWidth,
        horizontalAlign,
        verticalAlign,
        heightType,
        minHeight,
        columnGap,
        rowGap,
        reverseColumnsMobile,
        stackOnTablet,
        stackOnMobile,
        overflowHidden,
        zIndex,
        backgroundColor,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundVideo,
        backgroundVideoFallbackImage,
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
        animation,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("layout");
    
    // State for showing the layout selector
    const [showLayoutSelector, setShowLayoutSelector] = useState(!layout);

    // Ref for animation preview
    const previewTimeoutRef = useRef(null);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    // Get inner blocks
    const { innerBlocks, hasChildBlocks } = useSelect(
        (select) => {
            const { getBlocks } = select('core/block-editor');
            const blocks = getBlocks(clientId);
            return {
                innerBlocks: blocks,
                hasChildBlocks: blocks.length > 0,
            };
        },
        [clientId]
    );

    // Access dispatch methods
    const { replaceInnerBlocks } = useDispatch('core/block-editor');

    // Create columns based on selected layout
	const createColumnsFromLayout = (selectedLayout) => {
		const layoutConfig = containerLayouts.find(l => l.name === selectedLayout);
		
		if (!layoutConfig) return;
		
		// Get existing columns with their attributes and inner blocks
		const existingColumns = innerBlocks.map(column => ({
			clientId: column.clientId,
			attributes: column.attributes,
			innerBlocks: column.innerBlocks
		}));
		
		// New column count from selected layout
		const newColumnCount = layoutConfig.columns.length;
		// Previous column count
		const prevColumnCount = existingColumns.length;
		
		// Create new column blocks array
		const columnBlocks = [];
		
		// For each column in the new layout
		layoutConfig.columns.forEach((columnWidth, index) => {
			if (index < prevColumnCount) {
				// If this column existed before, keep its attributes but update width
				const existingColumn = existingColumns[index];
				
				// Create the column with preserved attributes
				columnBlocks.push(createBlock(
					'digiblocks/column',
					{
						...existingColumn.attributes,
						width: {
							...existingColumn.attributes.width,
							desktop: columnWidth,
							tablet: stackOnTablet ? 100 : columnWidth,
							mobile: stackOnMobile ? 100 : columnWidth
						}
					},
					[...existingColumn.innerBlocks] // Keep existing blocks
				));
			} else {
				// This is a new column, create with default attributes
				columnBlocks.push(createBlock(
					'digiblocks/column',
					{
						id: `column-${id}-${index}`,
						width: {
							desktop: columnWidth,
							tablet: stackOnTablet ? 100 : columnWidth,
							mobile: stackOnMobile ? 100 : columnWidth
						}
					},
					[] // No inner blocks for new columns
				));
			}
		});
		
		// If we're reducing columns, move blocks from removed columns to the last column
		if (prevColumnCount > newColumnCount && newColumnCount > 0) {
			const blocksToMove = [];
			
			// Collect blocks from removed columns
			for (let i = newColumnCount; i < prevColumnCount; i++) {
				blocksToMove.push(...existingColumns[i].innerBlocks);
			}
			
			// Add these blocks to the last column
			if (blocksToMove.length > 0) {
				const lastColumnBlocks = columnBlocks[columnBlocks.length - 1].innerBlocks;
				columnBlocks[columnBlocks.length - 1].innerBlocks = [...lastColumnBlocks, ...blocksToMove];
			}
		}
		
		// Replace inner blocks with new column structure
		replaceInnerBlocks(clientId, columnBlocks, false);
		
		// Update layout attribute
		setAttributes({ layout: selectedLayout });
		
		// Hide layout selector
		setShowLayoutSelector(false);
	};

    // Effect to trigger animation preview when animation attribute changes
    useEffect(() => {
        if (animation && animation !== 'none') {
            const timeoutId = setTimeout(() => {
                animationPreview(id, animation, animations, previewTimeoutRef);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);

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

    // Button click handler for animation preview
    const handlePreviewClick = () => {
        animationPreview(id, animation, animations, previewTimeoutRef);
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
        },
        { 
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;

		// Function to ensure minimum padding of 10px
		const ensureMinPadding = (paddingValue, unit) => {
			// If padding is 0 or very small (less than 10px), return 10px
			if (unit === 'px' && parseFloat(paddingValue) < 10) {
				return '10px';
			}
			// Otherwise return the original value
			return paddingValue + unit;
		};

		// Apply minimum padding
		const paddingTop = ensureMinPadding(padding[activeDevice].top, padding[activeDevice].unit);
		const paddingRight = ensureMinPadding(padding[activeDevice].right, padding[activeDevice].unit);
		const paddingBottom = ensureMinPadding(padding[activeDevice].bottom, padding[activeDevice].unit);
		const paddingLeft = ensureMinPadding(padding[activeDevice].left, padding[activeDevice].unit);
		
		// Apply minimum padding for tablet
		const tabletPaddingTop = ensureMinPadding(padding['tablet'].top, padding['tablet'].unit);
		const tabletPaddingRight = ensureMinPadding(padding['tablet'].right, padding['tablet'].unit);
		const tabletPaddingBottom = ensureMinPadding(padding['tablet'].bottom, padding['tablet'].unit);
		const tabletPaddingLeft = ensureMinPadding(padding['tablet'].left, padding['tablet'].unit);
		
		// Apply minimum padding for mobile
		const mobilePaddingTop = ensureMinPadding(padding['mobile'].top, padding['mobile'].unit);
		const mobilePaddingRight = ensureMinPadding(padding['mobile'].right, padding['mobile'].unit);
		const mobilePaddingBottom = ensureMinPadding(padding['mobile'].bottom, padding['mobile'].unit);
		const mobilePaddingLeft = ensureMinPadding(padding['mobile'].left, padding['mobile'].unit);
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
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
        
        // Height CSS
        let heightCSS = '';
        if (heightType === 'full') {
            heightCSS = 'height: 100vh;';
        } else if (heightType === 'custom') {
            heightCSS = `min-height: ${minHeight[activeDevice]}px !important;`;
        }
        
        // Content width CSS
        let contentWidthCSS = '';
		if (contentLayout === 'full') {
            contentWidthCSS = 'width: 100%;';
        } else {
			contentWidthCSS = `width: ${contentWidth[activeDevice]}px;
            margin-left: auto;
            margin-right: auto;`;
        }
        
        // Content max width CSS
        let contentMaxWidthCSS = '';
		if (contentLayout === 'full') {
            contentMaxWidthCSS = 'max-width: 100%;';
        } else {
			contentMaxWidthCSS = `max-width: ${contentMaxWidth[activeDevice]}%;`;
        }
        
        return `
            /* Container Block - ${id} */
            .${id} {
                position: relative;
                padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
                margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};
                width: 100%;
                ${heightCSS}
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${backgroundImageCSS}
                ${borderStyle !== 'none' ? `
                border-style: ${borderStyle}!important;
                border-width: ${borderWidth[activeDevice].top}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].right}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].bottom}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].left}${borderWidth[activeDevice].unit}!important;
                border-color: ${borderColor}!important;` : ''}
                border-radius: ${borderRadius[activeDevice].top}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].right}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].bottom}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].left}${borderRadius[activeDevice].unit};
                ${boxShadowCSS}
                ${overflowHidden ? 'overflow: hidden;' : ''}
                ${zIndex ? `z-index: ${zIndex};` : ''}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${id}:hover {
                ${boxShadowHoverCSS}
            }

			.${id} .digiblocks-container-inner {
                display: flex;
				flex-wrap: nowrap;
                gap: ${rowGap[activeDevice]}px ${columnGap[activeDevice]}px;
                width: 100%;
                ${contentWidthCSS}
                ${contentMaxWidthCSS}
                align-items: ${verticalAlign};
                justify-content: ${horizontalAlign};
            }
            
            ${overlayCSS}
            
            /* Background video */
            .${id} .digiblocks-bg-video-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 0;
                pointer-events: none;
                border-radius: inherit;
            }
            
            .${id} .digiblocks-bg-video {
                position: absolute;
                top: 50%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                transform: translateX(-50%) translateY(-50%);
                object-fit: cover;
            }

			/* Responsive preview */
			body[data-digiblocks-device="tablet"] .${id} .digiblocks-container-inner {
				${stackOnTablet ? 'flex-direction: column;' : ''}
			}

			${stackOnTablet ? `
				body[data-digiblocks-device="tablet"] .${id} .digiblocks-container-inner .digiblocks-column {
					width: 100%;
				}` : ''}
			
			body[data-digiblocks-device="mobile"] .${id} .digiblocks-container-inner {
				${stackOnMobile ? 'flex-direction: column;' : ''}
				${reverseColumnsMobile ? 'flex-direction: column-reverse;' : ''}
			}

			${stackOnMobile ? `
				body[data-digiblocks-device="mobile"] .${id} .digiblocks-container-inner .digiblocks-column {
					width: 100%;
				}` : ''}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${id} {
                    padding: ${tabletPaddingTop} ${tabletPaddingRight} ${tabletPaddingBottom} ${tabletPaddingLeft};
                    margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};
                    ${heightType === 'custom' ? `min-height: ${minHeight['tablet']}px;` : ''}
                    border-radius: ${borderRadius[activeDevice].top}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].right}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].bottom}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].left}${borderRadius[activeDevice].unit};
                    ${borderStyle !== 'none' ? `border-width: ${borderWidth['tablet'].top}${borderWidth['tablet'].unit} ${borderWidth['tablet'].right}${borderWidth['tablet'].unit} ${borderWidth['tablet'].bottom}${borderWidth['tablet'].unit} ${borderWidth['tablet'].left}${borderWidth['tablet'].unit};` : ''}
                }

				.${id} .digiblocks-container-inner {
					gap: ${rowGap[activeDevice]}px ${columnGap[activeDevice]}px;
                    ${stackOnTablet ? 'flex-direction: column;' : ''}
				}

				${stackOnTablet ? `
					.${id} .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}` : ''}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${id} {
                    padding: ${mobilePaddingTop} ${mobilePaddingRight} ${mobilePaddingBottom} ${mobilePaddingLeft};
                    margin: ${margin['mobile'].top}${margin['mobile'].unit} ${margin['mobile'].right}${margin['mobile'].unit} ${margin['mobile'].bottom}${margin['mobile'].unit} ${margin['mobile'].left}${margin['mobile'].unit};
                    ${heightType === 'custom' ? `min-height: ${minHeight['mobile']}px;` : ''}
                    border-radius: ${borderRadius['mobile'].top}${borderRadius['mobile'].unit} ${borderRadius['mobile'].right}${borderRadius['mobile'].unit} ${borderRadius['mobile'].bottom}${borderRadius['mobile'].unit} ${borderRadius['mobile'].left}${borderRadius['mobile'].unit};
                    ${borderStyle !== 'none' ? `border-width: ${borderWidth['mobile'].top}${borderWidth['mobile'].unit} ${borderWidth['mobile'].right}${borderWidth['mobile'].unit} ${borderWidth['mobile'].bottom}${borderWidth['mobile'].unit} ${borderWidth['mobile'].left}${borderWidth['mobile'].unit};` : ''}
                }

				.${id} .digiblocks-container-inner {
					gap: ${rowGap['mobile']}px ${columnGap['mobile']}px;
                    ${stackOnMobile ? 'flex-direction: column;' : ''}
                    ${reverseColumnsMobile ? 'flex-direction: column-reverse;' : ''}
				}

				${stackOnMobile ? `
					.${id} .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}` : ''}
            }
            
            /* Animation keyframes */
            ${animationCSS}
        `;
    };

    // Generate block props
    const blockProps = useBlockProps({
        className: `digiblocks-container ${id} ${customClasses || ''}`,
        id: anchor || null,
    });

    // Generate inner blocks props
    const allowedBlocks = ['digiblocks/column'];
    
    // If no layout is selected yet, don't allow inner blocks
    const innerBlocksProps = useInnerBlocksProps(
		{ className: 'digiblocks-container-inner' },
		{
			allowedBlocks: showLayoutSelector ? [] : allowedBlocks,
			orientation: 'horizontal',
			renderAppender: hasChildBlocks ? undefined : wp.blockEditor.ButtonBlockAppender,
		}
	);

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'layout':
                return (
                    <>
                        <TabPanelBody
                            tab="layout"
                            name="layout"
                            title={__('Container Layout', 'digiblocks')}
                            initialOpen={true}
                        >
                            <Button
                                variant="secondary"
                                onClick={() => setShowLayoutSelector(true)}
                                className="digiblocks-change-layout-button"
                            >
                                {layout ? __('Change Layout', 'digiblocks') : __('Select Layout', 'digiblocks')}
                            </Button>
                            
							<ToggleGroupControl
                                label={__("Layout", "digiblocks")}
                                value={contentLayout}
                                onChange={(value) => setAttributes({ contentLayout: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="boxed" 
                                    label={__("Boxed", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="full" 
                                    label={__("Full Width", "digiblocks")}
                                />
                            </ToggleGroupControl>

							{contentLayout === 'boxed' && (
								<>
									<ResponsiveControl
										label={__('Content Width (px)', 'digiblocks')}
									>
										<RangeControl
											value={contentWidth[localActiveDevice]}
											onChange={(value) =>
												setAttributes({
													contentWidth: {
														...contentWidth,
														[localActiveDevice]: value,
													},
												})
											}
											min={0}
											max={2000}
											step={1}
											__next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
										/>
									</ResponsiveControl>

									<ResponsiveControl
										label={__('Content Max Width (%)', 'digiblocks')}
									>
										<RangeControl
											value={contentMaxWidth[localActiveDevice]}
											onChange={(value) =>
												setAttributes({
													contentMaxWidth: {
														...contentMaxWidth,
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
								</>
							)}
                            
                            <ToggleGroupControl
                                label={__("Height", "digiblocks")}
                                value={heightType}
                                onChange={(value) => setAttributes({ heightType: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="auto" 
                                    label={__("Auto", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="full" 
                                    label={__("Full", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="custom" 
                                    label={__("Custom", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            {heightType === 'custom' && (
                                <ResponsiveControl
                                    label={__('Min Height', 'digiblocks')}
                                >
                                    <RangeControl
                                        value={minHeight[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                minHeight: {
                                                    ...minHeight,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                        min={0}
                                        max={1000}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ToggleGroupControl
                                label={__("Horizontal Align", "digiblocks")}
                                value={horizontalAlign}
                                onChange={(value) => setAttributes({ horizontalAlign: value })}
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
                                    label={__("Space", "digiblocks")}
                                />
                            </ToggleGroupControl>
                            
                            <ToggleGroupControl
                                label={__("Vertical Align", "digiblocks")}
                                value={verticalAlign}
                                onChange={(value) => setAttributes({ verticalAlign: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="flex-start" 
                                    label={__("Top", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="center" 
                                    label={__("Middle", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="flex-end" 
                                    label={__("Bottom", "digiblocks")}
                                />
                            </ToggleGroupControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="layout"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Column Gap', 'digiblocks')}
                            >
                                <RangeControl
                                    value={columnGap[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            columnGap: {
                                                ...columnGap,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={100}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Row Gap', 'digiblocks')}
                            >
                                <RangeControl
                                    value={rowGap[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            rowGap: {
                                                ...rowGap,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={100}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
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
                            name="responsive"
                            title={__('Responsive', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Stack on Tablet', 'digiblocks')}
                                checked={stackOnTablet}
                                onChange={(value) => setAttributes({ stackOnTablet: value })}
                                help={__('Stack columns vertically on tablet devices.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Stack on Mobile', 'digiblocks')}
                                checked={stackOnMobile}
                                onChange={(value) => setAttributes({ stackOnMobile: value })}
                                help={__('Stack columns vertically on mobile devices.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Reverse Columns on Mobile', 'digiblocks')}
                                checked={reverseColumnsMobile}
                                onChange={(value) => setAttributes({ reverseColumnsMobile: value })}
                                help={__('Reverse the order of columns on mobile devices.', 'digiblocks')}
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
                        
                        <TabPanelBody
                            tab="style"
                            name="advanced"
                            title={__('Advanced', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Overflow Hidden', 'digiblocks')}
                                checked={overflowHidden}
                                onChange={(value) => setAttributes({ overflowHidden: value })}
                                help={__('Hide content that overflows the container boundaries.', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__('Z-Index', 'digiblocks')}
                                value={zIndex}
                                onChange={(value) => setAttributes({ zIndex: value })}
                                min={-99}
                                max={99}
                                step={1}
                                allowReset={true}
                                resetFallbackValue={0}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
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
                            name="backgroundVideo"
                            title={__('Background Video', 'digiblocks')}
                            initialOpen={false}
                        >
                            <div className="digiblocks-media-control">
                                <p className="components-base-control__label">{__('Background Video', 'digiblocks')}</p>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                backgroundVideo: {
                                                    url: media.url,
                                                    id: media.id,
                                                }
                                            });
                                        }}
                                        allowedTypes={['video']}
                                        value={backgroundVideo?.id}
                                        render={({ open }) => (
                                            <div className="digiblocks-media-upload-wrapper">
                                                {backgroundVideo?.url ? (
                                                    <div className="digiblocks-media-preview">
                                                        <video controls>
                                                            <source src={backgroundVideo.url} />
                                                            {__('Your browser does not support the video tag.', 'digiblocks')}
                                                        </video>
                                                        <div className="digiblocks-media-controls">
                                                            <Button
                                                                isPrimary
                                                                onClick={open}
                                                            >
																<span class="dashicon dashicons dashicons-edit"></span>
                                                            </Button>
                                                            <Button 
                                                                isDestructive
                                                                onClick={() => setAttributes({ backgroundVideo: { url: '', id: 0 } })}
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
                                                        {__('Select Video', 'digiblocks')}
                                                    </Button>
                                                )}
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            
                            {backgroundVideo?.url && (
                                <div className="digiblocks-media-control">
                                    <p className="components-base-control__label">{__('Video Fallback Image', 'digiblocks')}</p>
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    backgroundVideoFallbackImage: {
                                                        url: media.url,
                                                        id: media.id,
                                                        alt: media.alt || '',
                                                    }
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={backgroundVideoFallbackImage?.id}
                                            render={({ open }) => (
                                                <div className="digiblocks-media-upload-wrapper">
                                                    {backgroundVideoFallbackImage?.url ? (
                                                        <div className="digiblocks-media-preview">
                                                            <img src={backgroundVideoFallbackImage.url} alt={backgroundVideoFallbackImage.alt || ''} />
                                                            <div className="digiblocks-media-controls">
                                                                <Button
                                                                    isPrimary
                                                                    onClick={open}
                                                                >
                                                                    <span class="dashicon dashicons dashicons-edit"></span>
                                                                </Button>
                                                                <Button 
                                                                    isDestructive
                                                                    onClick={() => setAttributes({ backgroundVideoFallbackImage: { url: '', id: 0, alt: '' } })}
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
                                                            {__('Select Fallback Image', 'digiblocks')}
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        />
                                    </MediaUploadCheck>
                                </div>
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
            case 'advanced':
                return (
                    <>
						<TabPanelBody
							tab="style"
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

    // Layout selector component
    const LayoutSelector = () => (
		<div className="digiblocks-layout-selector">
			<h2>{__('Select a Layout', 'digiblocks')}</h2>
			<div className="digiblocks-layout-grid">
				{containerLayouts.map((layout) => (
					<Tooltip text={layout.label} key={layout.name}>
						<div
							className="digiblocks-layout-option"
							onClick={() => createColumnsFromLayout(layout.name)}
							aria-label={layout.label}
						>
							<div className="digiblocks-layout-icon">
								{layout.icon}
							</div>
							<span className="screen-reader-text">{layout.label}</span>
						</div>
					</Tooltip>
				))}
			</div>
		</div>
	);

    // Background video component
    const BackgroundVideo = () => {
        if (!backgroundVideo?.url) return null;
        
        return (
            <div className="digiblocks-bg-video-container">
                <video className="digiblocks-bg-video" autoPlay muted loop playsInline poster={backgroundVideoFallbackImage?.url || ''}>
                    <source src={backgroundVideo.url} type="video/mp4" />
                </video>
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
					customClass="four"
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                {/* Background video if set */}
                {backgroundVideo?.url && <BackgroundVideo />}
                
                {/* Layout selector or inner blocks */}
                {showLayoutSelector ? (
                    <LayoutSelector />
                ) : (
                    <div {...innerBlocksProps} />
                )}
            </div>
        </>
    );
};

export default ContainerEdit;