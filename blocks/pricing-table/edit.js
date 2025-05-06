/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    BlockControls,
    AlignmentToolbar,
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    ButtonGroup,
    Tooltip,
    TextControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    TabPanel,
    Placeholder,
    Dashicon,
    TextareaControl,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Pricing Table block
 */
const PricingTableEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        columns,
        columnGap,
        headerBackgroundColor,
        headerTextColor,
        bodyBackgroundColor,
        bodyTextColor,
        featuredColumnHighlightColor,
        buttonBackgroundColor,
        buttonBackgroundHoverColor,
        buttonTextColor,
        buttonTextHoverColor,
        padding,
        margin,
        titleTypography,
        headingTypography,
        textTypography,
        buttonTypography,
        boxShadow,
        boxShadowHover,
        borderRadius,
        borderStyle,
        borderWidth,
        borderColor,
        align,
        textAlign,
        animation,
        ribbonStyle,
        ribbonColor,
        ribbonTextColor,
        iconIncludedColor,
        iconExcludedColor,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");
    
    // State for active column in editor
    const [activeColumn, setActiveColumn] = useState(0);

    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Initialize default columns if not set
    useEffect(() => {
        if (!columns || columns.length === 0) {
            setAttributes({
                columns: [
                    {
                        id: `column-1-${Date.now().toString(36)}`,
                        title: __('Basic', 'digiblocks'),
                        subtitle: __('For small businesses', 'digiblocks'),
                        currency: '$',
                        price: '9.99',
                        period: __('/month', 'digiblocks'),
                        features: [
                            {
                                text: __('1 Website', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('5GB Storage', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('10,000 Visitors', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('Live Chat Support', 'digiblocks'),
                                included: false
                            },
                            {
                                text: __('Custom Domain', 'digiblocks'),
                                included: false
                            }
                        ],
                        buttonText: __('Get Started', 'digiblocks'),
                        buttonUrl: '',
                        featured: false
                    },
                    {
                        id: `column-2-${Date.now().toString(36)}`,
                        title: __('Pro', 'digiblocks'),
                        subtitle: __('For growing businesses', 'digiblocks'),
                        currency: '$',
                        price: '19.99',
                        period: __('/month', 'digiblocks'),
                        features: [
                            {
                                text: __('5 Websites', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('20GB Storage', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('50,000 Visitors', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('Live Chat Support', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('Custom Domain', 'digiblocks'),
                                included: false
                            }
                        ],
                        buttonText: __('Get Started', 'digiblocks'),
                        buttonUrl: '',
                        featured: true
                    },
                    {
                        id: `column-3-${Date.now().toString(36)}`,
                        title: __('Premium', 'digiblocks'),
                        subtitle: __('For large businesses', 'digiblocks'),
                        currency: '$',
                        price: '29.99',
                        period: __('/month', 'digiblocks'),
                        features: [
                            {
                                text: __('Unlimited Websites', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('100GB Storage', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('Unlimited Visitors', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('Live Chat Support', 'digiblocks'),
                                included: true
                            },
                            {
                                text: __('Custom Domain', 'digiblocks'),
                                included: true
                            }
                        ],
                        buttonText: __('Get Started', 'digiblocks'),
                        buttonUrl: '',
                        featured: false
                    }
                ]
            });
        }
    }, [columns, setAttributes]);

    // Use ref for animation
    const previewTimeoutRef = useRef(null);

    // Effect to trigger animation preview when animation attribute changes
    useEffect(() => {
        if (animation && animation !== 'none') {
            const timeoutId = setTimeout(() => {
                animationPreview(id, animation, animations, previewTimeoutRef);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation, id]);

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

    // Ribbon style options
    const ribbonStyleOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Corner", "digiblocks"), value: "corner" },
        { label: __("Top", "digiblocks"), value: "top" },
        { label: __("Side", "digiblocks"), value: "side" },
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

    // Add a new pricing column
    const addColumn = () => {
        if (!columns) return;
        
        const newColumns = [...columns];
        const newColumnId = `column-${columns.length + 1}-${Date.now().toString(36)}`;
        
        newColumns.push({
            id: newColumnId,
            title: __('New Plan', 'digiblocks'),
            subtitle: __('Description', 'digiblocks'),
            currency: '$',
            price: '0',
            period: __('/month', 'digiblocks'),
            features: [
                {
                    text: __('Feature 1', 'digiblocks'),
                    included: true
                },
                {
                    text: __('Feature 2', 'digiblocks'),
                    included: true
                },
                {
                    text: __('Feature 3', 'digiblocks'),
                    included: false
                }
            ],
            buttonText: __('Get Started', 'digiblocks'),
            buttonUrl: '',
            featured: false
        });
        
        setAttributes({ columns: newColumns });
        setActiveColumn(newColumns.length - 1);
    };

    // Remove a pricing column
    const removeColumn = (index) => {
        if (!columns || columns.length <= 1) return;
        
        const newColumns = [...columns];
        newColumns.splice(index, 1);
        setAttributes({ columns: newColumns });
        
        // Update active column
        if (activeColumn >= newColumns.length) {
            setActiveColumn(newColumns.length - 1);
        }
    };

    // Update specific column property
    const updateColumnProp = (index, prop, value) => {
        if (!columns) return;
        
        const newColumns = [...columns];
        if (newColumns[index]) {
            newColumns[index] = {
                ...newColumns[index],
                [prop]: value
            };
            setAttributes({ columns: newColumns });
        }
    };

    // Toggle featured status for a column
    const toggleFeatured = (index) => {
        if (!columns) return;
        
        const newColumns = [...columns];
        if (newColumns[index]) {
            newColumns[index] = {
                ...newColumns[index],
                featured: !newColumns[index].featured
            };
            setAttributes({ columns: newColumns });
        }
    };

    // Add a feature to a column
    const addFeature = (columnIndex) => {
        if (!columns) return;
        
        const newColumns = [...columns];
        if (newColumns[columnIndex]) {
            const features = [...(newColumns[columnIndex].features || [])];
            features.push({
                text: __('New Feature', 'digiblocks'),
                included: true
            });
            
            newColumns[columnIndex] = {
                ...newColumns[columnIndex],
                features
            };
            
            setAttributes({ columns: newColumns });
        }
    };

    // Remove a feature from a column
    const removeFeature = (columnIndex, featureIndex) => {
        if (!columns) return;
        
        const newColumns = [...columns];
        if (newColumns[columnIndex] && newColumns[columnIndex].features) {
            const features = [...newColumns[columnIndex].features];
            features.splice(featureIndex, 1);
            
            newColumns[columnIndex] = {
                ...newColumns[columnIndex],
                features
            };
            
            setAttributes({ columns: newColumns });
        }
    };

    // Update a feature
    const updateFeature = (columnIndex, featureIndex, prop, value) => {
        if (!columns) return;
        
        const newColumns = [...columns];
        if (newColumns[columnIndex] && newColumns[columnIndex].features && newColumns[columnIndex].features[featureIndex]) {
            const features = [...newColumns[columnIndex].features];
            features[featureIndex] = {
                ...features[featureIndex],
                [prop]: value
            };
            
            newColumns[columnIndex] = {
                ...newColumns[columnIndex],
                features
            };
            
            setAttributes({ columns: newColumns });
        }
    };

    // Move a column up or down
    const moveColumn = (index, direction) => {
        if (!columns) return;
        if ((direction === 'up' && index === 0) || (direction === 'down' && index === columns.length - 1)) {
            return; // Can't move beyond boundaries
        }
        
        const newColumns = [...columns];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        
        // Swap columns
        [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
        
        setAttributes({ columns: newColumns });
        setActiveColumn(targetIndex);
    };
    
    // Duplicate a column
    const duplicateColumn = (index) => {
        if (!columns) return;
        
        const newColumns = [...columns];
        const columnToDuplicate = { ...newColumns[index] };
        
        // Create a new ID for the duplicated column
        columnToDuplicate.id = `column-${Date.now().toString(36)}`;
        
        // Insert the duplicated column after the original
        newColumns.splice(index + 1, 0, columnToDuplicate);
        
        setAttributes({ columns: newColumns });
        setActiveColumn(index + 1);
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        if (!id) return ''; // Prevent rendering if ID is not yet set

        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
            const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
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
        
        // Box shadow hover
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Border radius
        const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' };
        const borderRadiusCSS = `
            border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
        `;
        
        // Padding and margin
        const currentPadding = padding && padding[activeDevice] ? padding[activeDevice] : { top: 30, right: 30, bottom: 30, left: 30, unit: 'px' };
        const paddingCSS = `
            padding: ${currentPadding.top}${currentPadding.unit} ${currentPadding.right}${currentPadding.unit} ${currentPadding.bottom}${currentPadding.unit} ${currentPadding.left}${currentPadding.unit};
        `;
        
        const currentMargin = margin && margin[activeDevice] ? margin[activeDevice] : { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' };
        const marginCSS = `
            margin: ${currentMargin.top}${currentMargin.unit} ${currentMargin.right}${currentMargin.unit} ${currentMargin.bottom}${currentMargin.unit} ${currentMargin.left}${currentMargin.unit};
        `;
        
        // Typography for title
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
        
        // Typography for price
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
        
        // Typography for features
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
        
        // Typography for button
        let buttonTypographyCSS = '';
        if (buttonTypography) {
            if (buttonTypography.fontFamily) {
                buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
            }
            
            if (buttonTypography.fontSize && buttonTypography.fontSize[activeDevice]) {
                buttonTypographyCSS += `font-size: ${buttonTypography.fontSize[activeDevice]}${buttonTypography.fontSizeUnit || 'px'};`;
            }
            
            if (buttonTypography.fontWeight) {
                buttonTypographyCSS += `font-weight: ${buttonTypography.fontWeight};`;
            }
            
            if (buttonTypography.fontStyle) {
                buttonTypographyCSS += `font-style: ${buttonTypography.fontStyle};`;
            }
            
            if (buttonTypography.textTransform) {
                buttonTypographyCSS += `text-transform: ${buttonTypography.textTransform};`;
            }
            
            if (buttonTypography.textDecoration) {
                buttonTypographyCSS += `text-decoration: ${buttonTypography.textDecoration};`;
            }
            
            if (buttonTypography.lineHeight && buttonTypography.lineHeight[activeDevice]) {
                buttonTypographyCSS += `line-height: ${buttonTypography.lineHeight[activeDevice]}${buttonTypography.lineHeightUnit || 'em'};`;
            }
            
            if (buttonTypography.letterSpacing && buttonTypography.letterSpacing[activeDevice]) {
                buttonTypographyCSS += `letter-spacing: ${buttonTypography.letterSpacing[activeDevice]}${buttonTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        // Base styles for the block
        return `
            /* Pricing Table Block - ${id} */
            .${id} {
                ${marginCSS}
                transition: all 0.3s ease;
            }
            
            /* Pricing Table Container */
            .${id} .digiblocks-pricing-table {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: ${columnGap || 30}px;
                align-items: stretch;
            }
            
            /* Responsive styles for smaller screens */
            @media (max-width: 767px) {
                .${id} .digiblocks-pricing-table {
                    flex-direction: column;
                    align-items: center;
                }
                
                .${id} .digiblocks-pricing-column {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin-bottom: 30px;
                }
            }
            
            /* Pricing Column */
            .${id} .digiblocks-pricing-column {
                flex: 1;
                flex-basis: 0;
                min-width: 250px;
                display: flex;
                flex-direction: column;
                text-align: ${textAlign || 'center'};
                ${borderCSS}
                ${borderRadiusCSS}
                ${boxShadowCSS}
                overflow: hidden;
                transition: all 0.3s ease;
                position: relative;
                background-color: #fff;
            }
            
            /* Featured Column */
            .${id} .digiblocks-pricing-column.is-featured {
                ${featuredColumnHighlightColor ? `border-color: ${featuredColumnHighlightColor};` : ''}
                transform: translateY(-10px);
                ${boxShadow && boxShadow.enable ? boxShadowCSS : 'box-shadow: 0 8px 24px rgba(0,0,0,0.15);'}
                z-index: 2;
            }
            
            /* Hover effects */
            .${id} .digiblocks-pricing-column:hover {
                ${boxShadowHover && boxShadowHover.enable ? boxShadowHoverCSS : ''}
                transform: translateY(-5px);
            }
            
            /* Header Section */
            .${id} .digiblocks-pricing-header {
                ${paddingCSS}
                background-color: ${headerBackgroundColor || '#f8f9fa'};
                color: ${headerTextColor || '#333'};
            }
            
            /* Title */
            .${id} .digiblocks-pricing-title {
                margin-top: 0;
                margin-bottom: 10px;
                ${titleTypographyCSS}
                color: ${headerTextColor || '#333'};
            }
            
            /* Subtitle */
            .${id} .digiblocks-pricing-subtitle {
                margin-top: 0;
                margin-bottom: 20px;
                opacity: 0.8;
                color: ${headerTextColor || '#333'};
            }
            
            /* Price Container */
            .${id} .digiblocks-pricing-price-container {
                margin-bottom: 10px;
            }
            
            /* Price */
            .${id} .digiblocks-pricing-price {
                display: flex;
                align-items: center;
                justify-content: center;
                ${headingTypographyCSS}
                color: ${headerTextColor || '#333'};
            }
            
            /* Currency */
            .${id} .digiblocks-pricing-currency {
                font-size: 0.5em;
                align-self: flex-start;
                margin-top: 0.5em;
            }
            
            /* Period */
            .${id} .digiblocks-pricing-period {
                font-size: 0.3em;
                opacity: 0.7;
                align-self: flex-end;
            }
            
            /* Content/Body Section */
            .${id} .digiblocks-pricing-body {
                ${paddingCSS}
                background-color: ${bodyBackgroundColor || '#fff'};
                color: ${bodyTextColor || '#666'};
                flex-grow: 1;
                display: flex;
                flex-direction: column;
            }
            
            /* Features List */
            .${id} .digiblocks-pricing-features {
                list-style: none;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                flex-grow: 1;
            }
            
            /* Feature Item */
            .${id} .digiblocks-pricing-feature-item {
                padding: 10px 0;
                display: flex;
                align-items: center;
                ${textAlign === 'center' ? 'justify-content: center;' : ''}
                ${textTypographyCSS}
                ${borderStyle !== 'none' ? `border-bottom: 1px solid ${borderColor}20;` : ''}
            }
            
            .${id} .digiblocks-pricing-feature-item:last-child {
                border-bottom: none;
            }
            
            /* Feature Icon */
            .${id} .digiblocks-pricing-feature-icon {
                margin-right: 8px;
                flex-shrink: 0;
            }
            
            /* Included Icon */
            .${id} .digiblocks-pricing-feature-icon.included svg {
                color: ${iconIncludedColor || '#28a745'};
            }
            
            /* Excluded Icon */
            .${id} .digiblocks-pricing-feature-icon.excluded svg {
                color: ${iconExcludedColor || '#dc3545'};
            }
            
            /* Feature Text */
            .${id} .digiblocks-pricing-feature-text {
                flex-grow: 1;
            }
            
            /* Button */
            .${id} .digiblocks-pricing-button {
                display: inline-block;
                ${buttonTypographyCSS}
                padding: 10px 20px;
                background-color: ${buttonBackgroundColor || '#4a6cf7'};
                color: ${buttonTextColor || '#fff'};
                border-radius: 4px;
                text-decoration: none;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            /* Button Hover */
            .${id} .digiblocks-pricing-button:hover {
                background-color: ${buttonBackgroundHoverColor || '#3151d3'};
                color: ${buttonTextHoverColor || buttonTextColor || '#fff'};
            }
            
            /* Featured Button */
            .${id} .is-featured .digiblocks-pricing-button {
                transform: scale(1.05);
            }
            
            /* Ribbons */
            ${ribbonStyle !== 'none' ? `
            .${id} .digiblocks-pricing-ribbon {
                position: absolute;
                z-index: 2;
                overflow: hidden;
                ${ribbonStyle === 'corner' ? `
                    width: 150px;
                    height: 150px;
                    top: -10px;
                    right: -10px;
                    
                    .digiblocks-pricing-ribbon-text {
                        position: absolute;
                        transform: rotate(45deg);
                        right: -40px;
                        top: 30px;
                        width: 200px;
                        background-color: ${ribbonColor || '#4a6cf7'};
                        color: ${ribbonTextColor || '#fff'};
                        text-align: center;
                        padding: 5px 0;
                        font-size: 0.85em;
                        font-weight: bold;
                        text-transform: uppercase;
                        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                    }
                ` : ''}
                
                ${ribbonStyle === 'top' ? `
                    top: 0;
                    left: 0;
                    right: 0;
                    text-align: center;
                    
                    .digiblocks-pricing-ribbon-text {
                        display: inline-block;
                        background-color: ${ribbonColor || '#4a6cf7'};
                        color: ${ribbonTextColor || '#fff'};
                        padding: 5px 15px;
                        font-size: 0.85em;
                        font-weight: bold;
                        text-transform: uppercase;
                        border-radius: 0 0 4px 4px;
                    }
                ` : ''}
                
                ${ribbonStyle === 'side' ? `
                    top: 20px;
                    left: -10px;
                    
                    .digiblocks-pricing-ribbon-text {
                        display: inline-block;
                        background-color: ${ribbonColor || '#4a6cf7'};
                        color: ${ribbonTextColor || '#fff'};
                        padding: 5px 15px;
                        font-size: 0.85em;
                        font-weight: bold;
                        text-transform: uppercase;
                        border-radius: 0 4px 4px 0;
                        position: relative;
                        
                        &:before {
                            content: '';
                            position: absolute;
                            top: 100%;
                            left: 0;
                            border-style: solid;
                            border-width: 0 10px 10px 0;
                            border-color: transparent ${ribbonColor || '#4a6cf7'}88 transparent transparent;
                        }
                    }
                ` : ''}
            }
            ` : ''}
            
            /* Editor Controls */
            .${id} .digiblocks-pricing-column-controls {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 10;
                display: flex;
                gap: 2px;
                background-color: #fff;
                border-radius: 0 0 0 4px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                padding: 2px;
            }
            
            .${id} .digiblocks-pricing-column.is-active {
                outline: 2px dashed #007cba;
                z-index: 3;
            }
            
            .${id} .digiblocks-feature-edit-controls {
                display: flex;
                gap: 2px;
                margin-left: auto;
            }
            
            /* Animation keyframes */
            ${animationCSS}
        `;
    };

    // Render icon for feature
    const renderFeatureIcon = (included) => {
        if (included) {
            return (
                <span className="digiblocks-pricing-feature-icon included">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                </span>
            );
        } else {
            return (
                <span className="digiblocks-pricing-feature-icon excluded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </span>
            );
        }
    };

    // Render ribbon
    const renderRibbon = (column) => {
        if (!column.featured || ribbonStyle === 'none') {
            return null;
        }
        
        return (
            <div className="digiblocks-pricing-ribbon">
                <span className="digiblocks-pricing-ribbon-text">
                    {__('Popular', 'digiblocks')}
                </span>
            </div>
        );
    };

    // Render column edit controls
    const renderColumnControls = (index) => {
        return (
            <div className="digiblocks-pricing-column-controls">
                <Tooltip text={__('Move Left', 'digiblocks')}>
                    <Button
                        icon="arrow-left-alt2"
                        isSmall
                        disabled={index === 0}
                        onClick={() => moveColumn(index, 'up')}
                    />
                </Tooltip>
                <Tooltip text={__('Move Right', 'digiblocks')}>
                    <Button
                        icon="arrow-right-alt2"
                        isSmall
                        disabled={index === columns.length - 1}
                        onClick={() => moveColumn(index, 'down')}
                    />
                </Tooltip>
                <Tooltip text={__('Duplicate', 'digiblocks')}>
                    <Button
                        icon="admin-page"
                        isSmall
                        onClick={() => duplicateColumn(index)}
                    />
                </Tooltip>
                <Tooltip text={index === activeColumn ? __('Active', 'digiblocks') : __('Edit', 'digiblocks')}>
                    <Button
                        icon="edit"
                        isSmall
                        isPrimary={index === activeColumn}
                        onClick={() => setActiveColumn(index)}
                    />
                </Tooltip>
                <Tooltip text={__('Toggle Featured', 'digiblocks')}>
                    <Button
                        icon="star-filled"
                        isSmall
                        isPrimary={columns[index].featured}
                        onClick={() => toggleFeatured(index)}
                    />
                </Tooltip>
                <Tooltip text={__('Remove', 'digiblocks')}>
                    <Button
                        icon="trash"
                        isSmall
                        isDestructive
                        disabled={columns.length <= 1}
                        onClick={() => removeColumn(index)}
                    />
                </Tooltip>
            </div>
        );
    };

    // Render pricing columns
    const renderColumns = () => {
        if (!columns || columns.length === 0) {
            return (
                <Placeholder
                    icon={<Dashicon icon="money-alt" />}
                    label={__('Pricing Table', 'digiblocks')}
                    instructions={__('Add your first pricing column.', 'digiblocks')}
                >
                    <Button
                        isPrimary
                        onClick={addColumn}
                    >
                        {__('Add Column', 'digiblocks')}
                    </Button>
                </Placeholder>
            );
        }
        
        return columns.map((column, index) => (
            <div
                key={column.id}
                className={`digiblocks-pricing-column ${column.featured ? 'is-featured' : ''} ${index === activeColumn ? 'is-active' : ''}`}
                onClick={() => setActiveColumn(index)}
            >
                {renderColumnControls(index)}
                {renderRibbon(column)}
                
                <div className="digiblocks-pricing-header">
                    <RichText
                        tagName="h3"
                        className="digiblocks-pricing-title"
                        value={column.title}
                        onChange={(value) => updateColumnProp(index, 'title', value)}
                        placeholder={__('Plan Title', 'digiblocks')}
                    />
                    
                    <RichText
                        tagName="p"
                        className="digiblocks-pricing-subtitle"
                        value={column.subtitle}
                        onChange={(value) => updateColumnProp(index, 'subtitle', value)}
                        placeholder={__('Plan Description', 'digiblocks')}
                    />
                    
                    <div className="digiblocks-pricing-price-container">
                        <div className="digiblocks-pricing-price">
                            <RichText
                                tagName="span"
                                className="digiblocks-pricing-currency"
                                value={column.currency}
                                onChange={(value) => updateColumnProp(index, 'currency', value)}
                                placeholder={__('$', 'digiblocks')}
                            />
                            
                            <RichText
                                tagName="span"
                                className="digiblocks-pricing-amount"
                                value={column.price}
                                onChange={(value) => updateColumnProp(index, 'price', value)}
                                placeholder={__('99', 'digiblocks')}
                            />
                            
                            <RichText
                                tagName="span"
                                className="digiblocks-pricing-period"
                                value={column.period}
                                onChange={(value) => updateColumnProp(index, 'period', value)}
                                placeholder={__('/month', 'digiblocks')}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="digiblocks-pricing-body">
                    <ul className="digiblocks-pricing-features">
                        {column.features && column.features.map((feature, featureIndex) => (
                            <li key={`${column.id}-feature-${featureIndex}`} className="digiblocks-pricing-feature-item">
                                {renderFeatureIcon(feature.included)}
                                
                                <RichText
                                    tagName="span"
                                    className="digiblocks-pricing-feature-text"
                                    value={feature.text}
                                    onChange={(value) => updateFeature(index, featureIndex, 'text', value)}
                                    placeholder={__('Feature', 'digiblocks')}
                                />
                                
                                <div className="digiblocks-feature-edit-controls">
                                    <Tooltip text={feature.included ? __('Mark as Excluded', 'digiblocks') : __('Mark as Included', 'digiblocks')}>
                                        <Button
                                            icon={feature.included ? 'yes' : 'no-alt'}
                                            isSmall
                                            isPrimary={feature.included}
                                            onClick={() => updateFeature(index, featureIndex, 'included', !feature.included)}
                                        />
                                    </Tooltip>
                                    
                                    <Tooltip text={__('Remove Feature', 'digiblocks')}>
                                        <Button
                                            icon="trash"
                                            isSmall
                                            isDestructive
                                            onClick={() => removeFeature(index, featureIndex)}
                                        />
                                    </Tooltip>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                    <Button
                        isSecondary
                        isSmall
                        icon="plus"
                        onClick={() => addFeature(index)}
                        style={{ alignSelf: 'center', marginBottom: '15px' }}
                    >
                        {__('Add Feature', 'digiblocks')}
                    </Button>
                    
                    <div className="digiblocks-pricing-button-container">
                        <div className="digiblocks-pricing-button-wrapper">
                            <RichText
                                tagName="span"
                                className="digiblocks-pricing-button"
                                value={column.buttonText}
                                onChange={(value) => updateColumnProp(index, 'buttonText', value)}
                                placeholder={__('Button Text', 'digiblocks')}
                            />
                        </div>
                        
                        <TextControl
                            label={__('Button URL', 'digiblocks')}
                            value={column.buttonUrl || ''}
                            onChange={(value) => updateColumnProp(index, 'buttonUrl', value)}
                            style={{ marginTop: '10px' }}
                        />
                    </div>
                </div>
            </div>
        ));
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="general-settings"
                            title={__("General Settings", "digiblocks")}
                            initialOpen={true}
                        >
                            <RangeControl
                                label={__("Column Gap", "digiblocks")}
                                value={columnGap}
                                onChange={(value) => setAttributes({ columnGap: value })}
                                min={0}
                                max={100}
                                step={1}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__("Text Alignment", "digiblocks")}
                                value={textAlign}
                                options={[
                                    { label: __('Left', 'digiblocks'), value: 'left' },
                                    { label: __('Center', 'digiblocks'), value: 'center' },
                                    { label: __('Right', 'digiblocks'), value: 'right' },
                                ]}
                                onChange={(value) => setAttributes({ textAlign: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__("Ribbon Style", "digiblocks")}
                                value={ribbonStyle}
                                options={ribbonStyleOptions}
                                onChange={(value) => setAttributes({ ribbonStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {ribbonStyle !== 'none' && (
                                <PanelColorSettings
                                    title={__("Ribbon Colors", "digiblocks")}
                                    initialOpen={true}
                                    enableAlpha={true}
                                    colorSettings={[
                                        {
                                            value: ribbonColor,
                                            onChange: (value) => setAttributes({ ribbonColor: value }),
                                            label: __("Ribbon Background", "digiblocks"),
                                        },
                                        {
                                            value: ribbonTextColor,
                                            onChange: (value) => setAttributes({ ribbonTextColor: value }),
                                            label: __("Ribbon Text", "digiblocks"),
                                        },
                                    ]}
                                />
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="feature-settings"
                            title={__("Feature Icons", "digiblocks")}
                            initialOpen={false}
                        >
                            <PanelColorSettings
                                title={__("Icon Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: iconIncludedColor,
                                        onChange: (value) => setAttributes({ iconIncludedColor: value }),
                                        label: __("Included Features", "digiblocks"),
                                    },
                                    {
                                        value: iconExcludedColor,
                                        onChange: (value) => setAttributes({ iconExcludedColor: value }),
                                        label: __("Excluded Features", "digiblocks"),
                                    },
                                ]}
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
                            <PanelColorSettings
                                title={__("Header Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: headerBackgroundColor,
                                        onChange: (value) => setAttributes({ headerBackgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                    {
                                        value: headerTextColor,
                                        onChange: (value) => setAttributes({ headerTextColor: value }),
                                        label: __("Text Color", "digiblocks"),
                                    },
                                ]}
                            />
                            
                            <PanelColorSettings
                                title={__("Body Colors", "digiblocks")}
                                initialOpen={false}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: bodyBackgroundColor,
                                        onChange: (value) => setAttributes({ bodyBackgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                    {
                                        value: bodyTextColor,
                                        onChange: (value) => setAttributes({ bodyTextColor: value }),
                                        label: __("Text Color", "digiblocks"),
                                    },
                                ]}
                            />
                            
                            <PanelColorSettings
                                title={__("Featured Column", "digiblocks")}
                                initialOpen={false}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: featuredColumnHighlightColor,
                                        onChange: (value) => setAttributes({ featuredColumnHighlightColor: value }),
                                        label: __("Highlight Color", "digiblocks"),
                                    },
                                ]}
                            />
                            
                            <PanelColorSettings
                                title={__("Button Colors", "digiblocks")}
                                initialOpen={false}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: buttonBackgroundColor,
                                        onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                    {
                                        value: buttonBackgroundHoverColor,
                                        onChange: (value) => setAttributes({ buttonBackgroundHoverColor: value }),
                                        label: __("Background Hover", "digiblocks"),
                                    },
                                    {
                                        value: buttonTextColor,
                                        onChange: (value) => setAttributes({ buttonTextColor: value }),
                                        label: __("Text Color", "digiblocks"),
                                    },
                                    {
                                        value: buttonTextHoverColor,
                                        onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                                        label: __("Text Hover", "digiblocks"),
                                    },
                                ]}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typo"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__("Title Typography", "digiblocks")}
                                value={titleTypography}
                                onChange={(value) => setAttributes({ titleTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Price Typography", "digiblocks")}
                                value={headingTypography}
                                onChange={(value) => setAttributes({ headingTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 48, tablet: 42, mobile: 36 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Features Typography", "digiblocks")}
                                value={textTypography}
                                onChange={(value) => setAttributes({ textTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__("Button Typography", "digiblocks")}
                                value={buttonTypography}
                                onChange={(value) => setAttributes({ buttonTypography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="border-shadow"
                            title={__("Border & Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle !== 'none' && (
                                <>
                                    <PanelColorSettings
                                        title={__("Border Color", "digiblocks")}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                label: __("Border Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                    
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
                            
                            <ResponsiveControl
                                label={__("Border Radius", "digiblocks")}
                            >
                                <DimensionControl
                                    values={borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                                        top: 8,
                                        right: 8,
                                        bottom: 8,
                                        left: 8,
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
        className: `digiblocks-pricing-table-block ${id} ${customClasses || ''}`,
        id: anchor || null,
    });

    return (
        <>
            {/* Add alignment control to the toolbar */}
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
                <div className="digiblocks-pricing-table">
                    {renderColumns()}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button
                        isPrimary
                        icon="plus"
                        onClick={addColumn}
                    >
                        {__('Add Pricing Column', 'digiblocks')}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PricingTableEdit;