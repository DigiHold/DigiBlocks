/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
	LinkControl,
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;

/**
 * Edit function for the Pricing Table block
 */
const PricingTableEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        tables,
        columns,
        tableStyle,
        align,
        animation,
        titleTypography,
        headingTypography,
        textTypography,
        contentTypography,
        buttonTypography,
        padding,
        margin,
        borderRadius,
        borderWidth,
        borderStyle,
        borderColor,
        boxShadow,
        boxShadowHover,
        buttonRadius,
        buttonPadding,
        buttonBorderStyle,
        buttonBorderWidth,
        buttonBorderColor,
        buttonBorderHoverColor,
        showRibbon,
        ribbonStyle,
        ribbonPosition,
        tableTextColor,
        tableBackgroundColor,
        headerBackgroundColor,
        buttonTextColor,
        buttonBackgroundColor,
        buttonTextHoverColor,
        buttonBackgroundHoverColor,
        ribbonTextColor,
        ribbonBackgroundColor,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    
    // State for active tab in inspector controls
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});
    
    // State for active table when editing
    const [activeTable, setActiveTable] = useState(0);
	
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
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Initialize default tables if empty
    useEffect(() => {
        if (!tables || tables.length === 0) {
            setAttributes({
                tables: [
                    {
                        id: `table-1-${Date.now().toString(36)}`,
                        title: __('Basic Plan', 'digiblocks'),
                        price: '$19',
                        period: '/month',
                        description: __('Great for starters', 'digiblocks'),
                        iconValue: null,
                        features: [
                            { text: __('1 Website', 'digiblocks'), enabled: true },
                            { text: __('5GB Storage', 'digiblocks'), enabled: true },
                            { text: __('10k Visits Monthly', 'digiblocks'), enabled: true },
                            { text: __('Premium Support', 'digiblocks'), enabled: false }
                        ],
                        buttonText: __('Get Started', 'digiblocks'),
                        buttonUrl: '',
                        buttonOpenInNewTab: false,
						buttonRel: '',
                        isHighlighted: false,
                        ribbonText: __('Popular', 'digiblocks'),
                        backgroundColor: '',
                        headerBackgroundColor: '',
                        textColor: '',
                        buttonBackgroundColor: '',
                        buttonTextColor: '',
                    },
                    {
                        id: `table-2-${Date.now().toString(36)}`,
                        title: __('Pro Plan', 'digiblocks'),
                        price: '$49',
                        period: '/month',
                        description: __('For growing businesses', 'digiblocks'),
                        iconValue: null,
                        features: [
                            { text: __('5 Websites', 'digiblocks'), enabled: true },
                            { text: __('20GB Storage', 'digiblocks'), enabled: true },
                            { text: __('50k Visits Monthly', 'digiblocks'), enabled: true },
                            { text: __('Premium Support', 'digiblocks'), enabled: true }
                        ],
                        buttonText: __('Get Started', 'digiblocks'),
                        buttonUrl: '',
                        buttonOpenInNewTab: false,
						buttonRel: '',
                        isHighlighted: true, 
                        ribbonText: __('Popular', 'digiblocks'),
                        backgroundColor: '',
                        headerBackgroundColor: '',
                        textColor: '',
                        buttonBackgroundColor: '',
                        buttonTextColor: '',
                    }
                ],
                columns: 2,
                tableStyle: 'style1',
                align: 'center',
                showRibbon: true,
                ribbonStyle: 'corner',
                ribbonPosition: 'right',titleTypography: titleTypography || {
					fontSize: { desktop: 24, tablet: 20, mobile: 18 },
					fontSizeUnit: 'px',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					fontWeight: '',
					fontFamily: '',
				},
				headingTypography: headingTypography || {
					fontSize: { desktop: 36, tablet: 30, mobile: 26 },
					fontSizeUnit: 'px',
					lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
					lineHeightUnit: 'em',
					fontWeight: 'bold',
					fontFamily: '',
				},
				textTypography: textTypography || {
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
					fontSizeUnit: 'px',
					lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
					lineHeightUnit: 'em',
					fontWeight: '',
					fontFamily: '',
				},
				contentTypography: contentTypography || {
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
					fontSizeUnit: 'px',
					lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
					lineHeightUnit: 'em',
					fontWeight: '',
					fontFamily: '',
				},
				buttonTypography: buttonTypography || {
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
					fontSizeUnit: 'px',
					lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
					lineHeightUnit: 'em',
					fontWeight: '',
					fontFamily: '',
				}
            });
        }
    }, [tables, setAttributes]);

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

    // Table style options
    const tableStyleOptions = [
        { label: __("Style 1", "digiblocks"), value: "style1" },
        { label: __("Style 2", "digiblocks"), value: "style2" },
        { label: __("Style 3", "digiblocks"), value: "style3" },
        { label: __("Style 4", "digiblocks"), value: "style4" },
        { label: __("Minimal", "digiblocks"), value: "minimal" },
    ];

    // Ribbon style options
    const ribbonStyleOptions = [
        { label: __("Corner", "digiblocks"), value: "corner" },
        { label: __("Banner", "digiblocks"), value: "banner" },
        { label: __("Side", "digiblocks"), value: "side" },
        { label: __("Flag", "digiblocks"), value: "flag" },
    ];

    // Ribbon position options
    const ribbonPositionOptions = [
        { label: __("Right", "digiblocks"), value: "right" },
        { label: __("Left", "digiblocks"), value: "left" },
    ];

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

    // Add a new pricing table
    const addTable = () => {
        const newTables = [...tables, {
            id: `table-${tables.length + 1}-${Date.now().toString(36)}`,
            title: __('New Plan', 'digiblocks'),
            price: '$29',
            period: '/month',
            description: __('Add your description', 'digiblocks'),
            iconValue: null,
            features: [
                { text: __('Feature 1', 'digiblocks'), enabled: true },
                { text: __('Feature 2', 'digiblocks'), enabled: true },
                { text: __('Feature 3', 'digiblocks'), enabled: false }
            ],
            buttonText: __('Get Started', 'digiblocks'),
            buttonUrl: '',
            buttonOpenInNewTab: false,
			buttonRel: '',
            isHighlighted: false,
            ribbonText: __('Popular', 'digiblocks'),
            backgroundColor: '',
            headerBackgroundColor: '',
            textColor: '',
            buttonBackgroundColor: '',
            buttonTextColor: '',
        }];
        
        setAttributes({ tables: newTables });
        setActiveTable(newTables.length - 1);
    };

    // Remove a pricing table
    const removeTable = (index) => {
        if (tables.length <= 1) {
            return; // Don't remove the last table
        }
        
        const newTables = [...tables];
        newTables.splice(index, 1);
        setAttributes({ tables: newTables });
        
        if (activeTable >= newTables.length) {
            setActiveTable(newTables.length - 1);
        }
    };

    // Duplicate a pricing table
    const duplicateTable = (index) => {
        const tableToDuplicate = tables[index];
        const newTable = {
            ...tableToDuplicate,
            id: `table-${tables.length + 1}-${Date.now().toString(36)}`,
        };
        
        const newTables = [...tables];
        newTables.splice(index + 1, 0, newTable);
        
        setAttributes({ tables: newTables });
        setActiveTable(index + 1);
    };

    // Move table up in order
    const moveTableUp = (index) => {
        if (index === 0) return;
        
        const newTables = [...tables];
        const temp = newTables[index];
        newTables[index] = newTables[index - 1];
        newTables[index - 1] = temp;
        
        setAttributes({ tables: newTables });
        setActiveTable(index - 1);
    };

    // Move table down in order
    const moveTableDown = (index) => {
        if (index === tables.length - 1) return;
        
        const newTables = [...tables];
        const temp = newTables[index];
        newTables[index] = newTables[index + 1];
        newTables[index + 1] = temp;
        
        setAttributes({ tables: newTables });
        setActiveTable(index + 1);
    };

    // Update table attribute
    const updateTableAttribute = (index, key, value) => {
        const newTables = [...tables];
        newTables[index] = {
            ...newTables[index],
            [key]: value
        };
        setAttributes({ tables: newTables });
    };

    // Add feature to a table
    const addFeature = (tableIndex) => {
        const newTables = [...tables];
        newTables[tableIndex].features.push({
            text: __('New Feature', 'digiblocks'),
            enabled: true
        });
        setAttributes({ tables: newTables });
    };

    // Remove feature from a table
    const removeFeature = (tableIndex, featureIndex) => {
        if (tables[tableIndex].features.length <= 1) {
            return; // Don't remove the last feature
        }
        
        const newTables = [...tables];
        newTables[tableIndex].features.splice(featureIndex, 1);
        setAttributes({ tables: newTables });
    };

    // Update feature
    const updateFeature = (tableIndex, featureIndex, key, value) => {
        const newTables = [...tables];
        newTables[tableIndex].features[featureIndex] = {
            ...newTables[tableIndex].features[featureIndex],
            [key]: value
        };
        setAttributes({ tables: newTables });
    };

    // Toggle feature enabled
    const toggleFeatureEnabled = (tableIndex, featureIndex) => {
        const newTables = [...tables];
        newTables[tableIndex].features[featureIndex].enabled = !newTables[tableIndex].features[featureIndex].enabled;
        setAttributes({ tables: newTables });
    };

    // Apply table style preset
    const applyTableStyle = (style) => {
        setAttributes({ tableStyle: style });
        
        let newAttributes = {};
        
        switch (style) {
            case 'style1':
                newAttributes = {
                    tableBackgroundColor: '#ffffff',
                    headerBackgroundColor: '#f8f9fa',
                    tableTextColor: '#333333',
                    buttonBackgroundColor: '#4a6cf7',
                    buttonTextColor: '#ffffff',
                    buttonBackgroundHoverColor: '#3151e1',
                    buttonTextHoverColor: '#ffffff',
                    ribbonBackgroundColor: '#4a6cf7',
                    ribbonTextColor: '#ffffff',
                    borderStyle: 'solid',
					borderWidth: {
                        desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    borderColor: '#e6e6e6',
                    borderRadius: {
                        desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    boxShadow: {
                        enable: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        horizontal: 0,
                        vertical: 0,
                        blur: 0,
                        spread: 0,
                        position: 'outset'
                    },
                };
                break;
                
            case 'style2':
                newAttributes = {
                    tableBackgroundColor: '#ffffff',
                    headerBackgroundColor: '#4a6cf7',
                    tableTextColor: '#333333',
                    buttonBackgroundColor: '#4a6cf7',
                    buttonTextColor: '#ffffff',
                    buttonBackgroundHoverColor: '#3151e1',
                    buttonTextHoverColor: '#ffffff',
                    ribbonBackgroundColor: '#ff9800',
                    ribbonTextColor: '#ffffff',
                    borderStyle: 'none',
					borderWidth: {
                        desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    borderColor: '#e6e6e6',
                    borderRadius: {
                        desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    boxShadow: {
                        enable: true,
                        color: 'rgba(0, 0, 0, 0.1)',
                        horizontal: 0,
                        vertical: 4,
                        blur: 15,
                        spread: 0,
                        position: 'outset'
                    },
                };
                break;
                
            case 'style3':
                newAttributes = {
                    tableBackgroundColor: '#ffffff',
                    headerBackgroundColor: '#ffffff',
                    tableTextColor: '#333333',
                    buttonBackgroundColor: '#4a6cf7',
                    buttonTextColor: '#ffffff',
                    buttonBackgroundHoverColor: '#3151e1',
                    buttonTextHoverColor: '#ffffff',
                    ribbonBackgroundColor: '#ff5252',
                    ribbonTextColor: '#ffffff',
                    borderStyle: 'solid',
					borderWidth: {
                        desktop: { top: 3, right: 3, bottom: 3, left: 3, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    borderColor: '#4a6cf7',
                    borderRadius: {
                        desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    boxShadow: {
                        enable: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        horizontal: 0,
                        vertical: 0,
                        blur: 0,
                        spread: 0,
                        position: 'outset'
                    },
                };
                break;
                
            case 'style4':
                newAttributes = {
                    tableBackgroundColor: '#f8f9fa',
                    headerBackgroundColor: '#ffffff',
                    tableTextColor: '#333333',
                    buttonBackgroundColor: '#333333',
                    buttonTextColor: '#ffffff',
                    buttonBackgroundHoverColor: '#000000',
                    buttonTextHoverColor: '#ffffff',
                    ribbonBackgroundColor: '#333333',
                    ribbonTextColor: '#ffffff',
                    borderStyle: 'none',
					borderWidth: {
                        desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    borderColor: '#e6e6e6',
                    borderRadius: {
                        desktop: { top: 16, right: 16, bottom: 16, left: 16, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    boxShadow: {
                        enable: true,
                        color: 'rgba(0, 0, 0, 0.08)',
                        horizontal: 0,
                        vertical: 10,
                        blur: 25,
                        spread: 0,
                        position: 'outset'
                    },
                };
                break;
                
            case 'minimal':
                newAttributes = {
                    tableBackgroundColor: 'transparent',
                    headerBackgroundColor: 'transparent',
                    tableTextColor: '#333333',
                    buttonBackgroundColor: 'transparent',
                    buttonTextColor: '#4a6cf7',
                    buttonBackgroundHoverColor: 'transparent',
                    buttonTextHoverColor: '#3151e1',
                    ribbonBackgroundColor: '#f8f9fa',
                    ribbonTextColor: '#333333',
                    borderStyle: 'solid',
					borderWidth: {
                        desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    borderColor: '#e6e6e6',
                    borderRadius: {
                        desktop: { top: '', right: '', bottom: 0, left: 0, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    },
                    boxShadow: {
                        enable: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        horizontal: 0,
                        vertical: 0,
                        blur: 0,
                        spread: 0,
                        position: 'outset'
                    },
                };
                break;
                
            default:
                newAttributes = {};
        }
        
        setAttributes(newAttributes);
    };

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Generate CSS for block styling
	const generateCSS = () => {
		const activeDevice = localActiveDevice;
		
		// Border styles
		let borderCSS = '';
		if (borderStyle && borderStyle !== 'none') {
			borderCSS = `
				border-style: ${borderStyle};
				border-color: ${borderColor || '#e6e6e6'};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
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
			const inset = boxShadowHover.position === 'inset' ? 'inset ' : '';
			boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
		}
		
		// Padding
		const paddingCSS = `${getDimensionCSS(padding, 'padding', activeDevice)}`;
		
		// Margin
		const marginCSS = `${getDimensionCSS(margin, 'margin', activeDevice)}`;
		
		// Default typography values
		const defaultTitleTypography = {
			fontFamily: '',
			fontSize: { desktop: 24, tablet: 20, mobile: 18 },
			fontSizeUnit: 'px',
			fontWeight: '',
			fontStyle: 'normal',
			textTransform: '',
			textDecoration: '',
			lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
			lineHeightUnit: 'em',
			letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
			letterSpacingUnit: 'px'
		};
		
		const defaultHeadingTypography = {
			fontFamily: '',
			fontSize: { desktop: 36, tablet: 30, mobile: 26 },
			fontSizeUnit: 'px',
			fontWeight: 'bold',
			fontStyle: 'normal',
			textTransform: '',
			textDecoration: '',
			lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
			lineHeightUnit: 'em',
			letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
			letterSpacingUnit: 'px'
		};
		
		const defaultTextTypography = {
			fontFamily: '',
			fontSize: { desktop: 16, tablet: 15, mobile: 14 },
			fontSizeUnit: 'px',
			fontWeight: '',
			fontStyle: 'normal',
			textTransform: '',
			textDecoration: '',
			lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
			lineHeightUnit: 'em',
			letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
			letterSpacingUnit: 'px'
		};
		
		const defaultContentTypography = {
			fontFamily: '',
			fontSize: { desktop: 16, tablet: 15, mobile: 14 },
			fontSizeUnit: 'px',
			fontWeight: '',
			fontStyle: 'normal',
			textTransform: '',
			textDecoration: '',
			lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
			lineHeightUnit: 'em',
			letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
			letterSpacingUnit: 'px'
		};
		
		const defaultButtonTypography = {
			fontFamily: '',
			fontSize: { desktop: 16, tablet: 15, mobile: 14 },
			fontSizeUnit: 'px',
			fontWeight: '',
			fontStyle: 'normal',
			textTransform: '',
			textDecoration: '',
			lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
			lineHeightUnit: 'em',
			letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
			letterSpacingUnit: 'px'
		};
		
		// Typography for title with defaults
		let titleTypographyCSS = '';
		const actualTitleTypo = titleTypography || defaultTitleTypography;
		
		if (actualTitleTypo.fontFamily) {
			titleTypographyCSS += `font-family: ${actualTitleTypo.fontFamily};`;
		}
		
		if (actualTitleTypo.fontSize && actualTitleTypo.fontSize[activeDevice]) {
			titleTypographyCSS += `font-size: ${actualTitleTypo.fontSize[activeDevice]}${actualTitleTypo.fontSizeUnit || 'px'};`;
		} else if (defaultTitleTypography.fontSize && defaultTitleTypography.fontSize[activeDevice]) {
			titleTypographyCSS += `font-size: ${defaultTitleTypography.fontSize[activeDevice]}px;`;
		}
		
		if (actualTitleTypo.fontWeight) {
			titleTypographyCSS += `font-weight: ${actualTitleTypo.fontWeight};`;
		}
		
		if (actualTitleTypo.fontStyle) {
			titleTypographyCSS += `font-style: ${actualTitleTypo.fontStyle};`;
		}
		
		if (actualTitleTypo.textTransform) {
			titleTypographyCSS += `text-transform: ${actualTitleTypo.textTransform};`;
		}
		
		if (actualTitleTypo.textDecoration) {
			titleTypographyCSS += `text-decoration: ${actualTitleTypo.textDecoration};`;
		}
		
		if (actualTitleTypo.lineHeight && actualTitleTypo.lineHeight[activeDevice]) {
			titleTypographyCSS += `line-height: ${actualTitleTypo.lineHeight[activeDevice]}${actualTitleTypo.lineHeightUnit || 'em'};`;
		} else if (defaultTitleTypography.lineHeight && defaultTitleTypography.lineHeight[activeDevice]) {
			titleTypographyCSS += `line-height: ${defaultTitleTypography.lineHeight[activeDevice]}em;`;
		}
		
		if (actualTitleTypo.letterSpacing && actualTitleTypo.letterSpacing[activeDevice]) {
			titleTypographyCSS += `letter-spacing: ${actualTitleTypo.letterSpacing[activeDevice]}${actualTitleTypo.letterSpacingUnit || 'px'};`;
		}
		
		// Typography for price with defaults
		let priceTypographyCSS = '';
		const actualHeadingTypo = headingTypography || defaultHeadingTypography;
		
		if (actualHeadingTypo.fontFamily) {
			priceTypographyCSS += `font-family: ${actualHeadingTypo.fontFamily};`;
		}
		
		if (actualHeadingTypo.fontSize && actualHeadingTypo.fontSize[activeDevice]) {
			priceTypographyCSS += `font-size: ${actualHeadingTypo.fontSize[activeDevice]}${actualHeadingTypo.fontSizeUnit || 'px'};`;
		} else if (defaultHeadingTypography.fontSize && defaultHeadingTypography.fontSize[activeDevice]) {
			priceTypographyCSS += `font-size: ${defaultHeadingTypography.fontSize[activeDevice]}px;`;
		}
		
		if (actualHeadingTypo.fontWeight) {
			priceTypographyCSS += `font-weight: ${actualHeadingTypo.fontWeight};`;
		} else {
			priceTypographyCSS += `font-weight: bold;`; // Default for price
		}
		
		if (actualHeadingTypo.fontStyle) {
			priceTypographyCSS += `font-style: ${actualHeadingTypo.fontStyle};`;
		}
		
		if (actualHeadingTypo.textTransform) {
			priceTypographyCSS += `text-transform: ${actualHeadingTypo.textTransform};`;
		}
		
		if (actualHeadingTypo.textDecoration) {
			priceTypographyCSS += `text-decoration: ${actualHeadingTypo.textDecoration};`;
		}
		
		if (actualHeadingTypo.lineHeight && actualHeadingTypo.lineHeight[activeDevice]) {
			priceTypographyCSS += `line-height: ${actualHeadingTypo.lineHeight[activeDevice]}${actualHeadingTypo.lineHeightUnit || 'em'};`;
		} else if (defaultHeadingTypography.lineHeight && defaultHeadingTypography.lineHeight[activeDevice]) {
			priceTypographyCSS += `line-height: ${defaultHeadingTypography.lineHeight[activeDevice]}em;`;
		}
		
		if (actualHeadingTypo.letterSpacing && actualHeadingTypo.letterSpacing[activeDevice]) {
			priceTypographyCSS += `letter-spacing: ${actualHeadingTypo.letterSpacing[activeDevice]}${actualHeadingTypo.letterSpacingUnit || 'px'};`;
		}
		
		// Typography for other text with defaults
		let textTypographyCSS = '';
		const actualTextTypo = textTypography || defaultTextTypography;
		
		if (actualTextTypo.fontFamily) {
			textTypographyCSS += `font-family: ${actualTextTypo.fontFamily};`;
		}
		
		if (actualTextTypo.fontSize && actualTextTypo.fontSize[activeDevice]) {
			textTypographyCSS += `font-size: ${actualTextTypo.fontSize[activeDevice]}${actualTextTypo.fontSizeUnit || 'px'};`;
		} else if (defaultTextTypography.fontSize && defaultTextTypography.fontSize[activeDevice]) {
			textTypographyCSS += `font-size: ${defaultTextTypography.fontSize[activeDevice]}px;`;
		}
		
		if (actualTextTypo.fontWeight) {
			textTypographyCSS += `font-weight: ${actualTextTypo.fontWeight};`;
		}
		
		if (actualTextTypo.fontStyle) {
			textTypographyCSS += `font-style: ${actualTextTypo.fontStyle};`;
		}
		
		if (actualTextTypo.textTransform) {
			textTypographyCSS += `text-transform: ${actualTextTypo.textTransform};`;
		}
		
		if (actualTextTypo.textDecoration) {
			textTypographyCSS += `text-decoration: ${actualTextTypo.textDecoration};`;
		}
		
		if (actualTextTypo.lineHeight && actualTextTypo.lineHeight[activeDevice]) {
			textTypographyCSS += `line-height: ${actualTextTypo.lineHeight[activeDevice]}${actualTextTypo.lineHeightUnit || 'em'};`;
		} else if (defaultTextTypography.lineHeight && defaultTextTypography.lineHeight[activeDevice]) {
			textTypographyCSS += `line-height: ${defaultTextTypography.lineHeight[activeDevice]}em;`;
		}
		
		if (actualTextTypo.letterSpacing && actualTextTypo.letterSpacing[activeDevice]) {
			textTypographyCSS += `letter-spacing: ${actualTextTypo.letterSpacing[activeDevice]}${actualTextTypo.letterSpacingUnit || 'px'};`;
		}
		
		// Content typography (feature list) with defaults
		let contentTypographyCSS = '';
		const actualContentTypo = contentTypography || defaultContentTypography;
		
		if (actualContentTypo.fontFamily) {
			contentTypographyCSS += `font-family: ${actualContentTypo.fontFamily};`;
		}
		
		if (actualContentTypo.fontSize && actualContentTypo.fontSize[activeDevice]) {
			contentTypographyCSS += `font-size: ${actualContentTypo.fontSize[activeDevice]}${actualContentTypo.fontSizeUnit || 'px'};`;
		} else if (defaultContentTypography.fontSize && defaultContentTypography.fontSize[activeDevice]) {
			contentTypographyCSS += `font-size: ${defaultContentTypography.fontSize[activeDevice]}px;`;
		}
		
		if (actualContentTypo.fontWeight) {
			contentTypographyCSS += `font-weight: ${actualContentTypo.fontWeight};`;
		}
		
		if (actualContentTypo.fontStyle) {
			contentTypographyCSS += `font-style: ${actualContentTypo.fontStyle};`;
		}
		
		if (actualContentTypo.textTransform) {
			contentTypographyCSS += `text-transform: ${actualContentTypo.textTransform};`;
		}
		
		if (actualContentTypo.textDecoration) {
			contentTypographyCSS += `text-decoration: ${actualContentTypo.textDecoration};`;
		}
		
		if (actualContentTypo.lineHeight && actualContentTypo.lineHeight[activeDevice]) {
			contentTypographyCSS += `line-height: ${actualContentTypo.lineHeight[activeDevice]}${actualContentTypo.lineHeightUnit || 'em'};`;
		} else if (defaultContentTypography.lineHeight && defaultContentTypography.lineHeight[activeDevice]) {
			contentTypographyCSS += `line-height: ${defaultContentTypography.lineHeight[activeDevice]}em;`;
		}
		
		if (actualContentTypo.letterSpacing && actualContentTypo.letterSpacing[activeDevice]) {
			contentTypographyCSS += `letter-spacing: ${actualContentTypo.letterSpacing[activeDevice]}${actualContentTypo.letterSpacingUnit || 'px'};`;
		}
		
		// Button typography with defaults
		let buttonTypographyCSS = '';
		const actualButtonTypo = buttonTypography || defaultButtonTypography;
		
		if (actualButtonTypo.fontFamily) {
			buttonTypographyCSS += `font-family: ${actualButtonTypo.fontFamily};`;
		}
		
		if (actualButtonTypo.fontSize && actualButtonTypo.fontSize[activeDevice]) {
			buttonTypographyCSS += `font-size: ${actualButtonTypo.fontSize[activeDevice]}${actualButtonTypo.fontSizeUnit || 'px'};`;
		} else if (defaultButtonTypography.fontSize && defaultButtonTypography.fontSize[activeDevice]) {
			buttonTypographyCSS += `font-size: ${defaultButtonTypography.fontSize[activeDevice]}px;`;
		}
		
		if (actualButtonTypo.fontWeight) {
			buttonTypographyCSS += `font-weight: ${actualButtonTypo.fontWeight};`;
		}
		
		if (actualButtonTypo.fontStyle) {
			buttonTypographyCSS += `font-style: ${actualButtonTypo.fontStyle};`;
		}
		
		if (actualButtonTypo.textTransform) {
			buttonTypographyCSS += `text-transform: ${actualButtonTypo.textTransform};`;
		}
		
		if (actualButtonTypo.textDecoration) {
			buttonTypographyCSS += `text-decoration: ${actualButtonTypo.textDecoration};`;
		}
		
		if (actualButtonTypo.lineHeight && actualButtonTypo.lineHeight[activeDevice]) {
			buttonTypographyCSS += `line-height: ${actualButtonTypo.lineHeight[activeDevice]}${actualButtonTypo.lineHeightUnit || 'em'};`;
		} else if (defaultButtonTypography.lineHeight && defaultButtonTypography.lineHeight[activeDevice]) {
			buttonTypographyCSS += `line-height: ${defaultButtonTypography.lineHeight[activeDevice]}em;`;
		}
		
		if (actualButtonTypo.letterSpacing && actualButtonTypo.letterSpacing[activeDevice]) {
			buttonTypographyCSS += `letter-spacing: ${actualButtonTypo.letterSpacing[activeDevice]}${actualButtonTypo.letterSpacingUnit || 'px'};`;
		}
		
		// Button styles for different design/shape options
		const buttonRadiusValue = buttonRadius || 4;
		const buttonPaddingValue = buttonPadding && buttonPadding[activeDevice] 
			? `${getDimensionCSS(buttonPadding, 'padding', activeDevice)}`
			: 'padding: 10px 20px';
		
		// Button border styles
		let buttonBorderCSS = '';
		if (buttonBorderStyle && buttonBorderStyle !== 'none') {
			buttonBorderCSS = `
				border-style: ${buttonBorderStyle};
				border-color: ${buttonBorderColor || buttonBackgroundColor || '#4a6cf7'};
				${getDimensionCSS(buttonBorderWidth, 'border-width', activeDevice)}
			`;
		} else {
			buttonBorderCSS = 'border: none;';
		}
		
		// Style variations based on tableStyle
		let tableSpecificCSS = '';
		
		switch (tableStyle) {
			case 'style1':
				tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${id} .digiblocks-pricing-table-header {
						display: flex;
						flex-direction: column;
						gap: 10px;
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
				`;
				break;
				
			case 'style2':
				tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
						overflow: hidden;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 30px 20px;
						margin: -1px -1px 0 -1px;
						color: #ffffff;
					}
					
					.${id} .digiblocks-pricing-table-title {
						color: #ffffff !important;
					}
					
					.${id} .digiblocks-pricing-table-price {
						color: #ffffff !important;
					}
					
					.${id} .digiblocks-pricing-table-description {
						color: rgba(255, 255, 255, 0.8) !important;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-highlighted {
						transform: scale(1.05);
						z-index: 1;
					}
				`;
				break;
				
			case 'style3':
				tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${id} .digiblocks-pricing-table-highlighted {
						border-top-width: 10px !important;
					}
				`;
				break;
				
			case 'style4':
				tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
						border-radius: 16px;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 40px 20px 20px;
						border-radius: 16px 16px 0 0;
					}
					
					.${id} .digiblocks-pricing-table-price {
						font-size: 3rem;
						line-height: 1;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px 30px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 20px 20px 40px;
					}
					
					.${id} .digiblocks-pricing-table-button {
						padding: 15px 35px;
						border-radius: 50px;
					}
				`;
				break;
				
			case 'minimal':
				tableSpecificCSS = `
					.${id} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${id} .digiblocks-pricing-table-header {
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${id} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${id} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
					
					.${id} .digiblocks-pricing-table-button {
						background: transparent;
						border: 1px solid #4a6cf7;
						padding: 10px 25px;
					}
					
					.${id} .digiblocks-pricing-table-button:hover {
						background: #f8f9fa;
					}
				`;
				break;
				
			default:
				tableSpecificCSS = '';
		}
		
		// Ribbon styles
		let ribbonCSS = '';
		if (showRibbon) {
			switch (ribbonStyle) {
				case 'corner':
					ribbonCSS = `
						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 0;
							${ribbonPosition === 'right' ? 'right' : 'left'}: 0;
							background: ${ribbonBackgroundColor || '#4a6cf7'};
							color: ${ribbonTextColor || '#ffffff'};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							text-transform: uppercase;
							z-index: 2;
							${ribbonPosition === 'right' ? 'border-radius: 0 0 0 4px;' : 'border-radius: 0 0 4px 0;'}
						}
					`;
					break;
					
				case 'banner':
					ribbonCSS = `
						.${id} .digiblocks-pricing-table-highlighted {
							overflow: hidden;
						}

						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 7px;
							${ribbonPosition === 'right' ? 'right' : 'left'}: -24px;
							background: ${ribbonBackgroundColor || '#4a6cf7'};
							color: ${ribbonTextColor || '#ffffff'};
							padding: 5px 30px;
							font-size: 12px;
							font-weight: bold;
							transform: ${ribbonPosition === 'right' ? 'rotate(45deg)' : 'rotate(-45deg)'};
							z-index: 2;
							transform-origin: center center;
						}
					`;
					break;
					
				case 'side':
					ribbonCSS = `
						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 30px;
							${ribbonPosition === 'right' ? 'right' : 'left'}: 0;
							background: ${ribbonBackgroundColor || '#4a6cf7'};
							color: ${ribbonTextColor || '#ffffff'};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							${ribbonPosition === 'right' ? 
								'border-radius: 4px 0 0 4px;' : 
								'border-radius: 0 4px 4px 0;'
							}
							z-index: 2;
						}
					`;
					break;
					
				case 'flag':
					ribbonCSS = `
						.${id} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 15px;
							${ribbonPosition === 'right' ? 'right' : 'left'}: 15px;
							background: ${ribbonBackgroundColor || '#4a6cf7'};
							color: ${ribbonTextColor || '#ffffff'};
							padding: 8px 15px;
							font-size: 12px;
							font-weight: bold;
							border-radius: 50px;
							z-index: 2;
						}
					`;
					break;
					
				default:
					ribbonCSS = '';
			}
		}
		
		// Base styles for the block
		return `
			/* Pricing Table Block - ${id} */
			.${id} {
				${marginCSS}
				width: 100%;
				position: relative;
			}
			
			/* Grid container for tables */
			.${id} .digiblocks-pricing-tables-container {
				display: grid;
				gap: 30px;
				grid-template-columns: repeat(${columns}, 1fr);
			}
			
			/* Individual pricing table */
			.${id} .digiblocks-pricing-table {
				display: flex;
				flex-direction: column;
				background-color: ${tableBackgroundColor || '#ffffff'};
				color: ${tableTextColor || '#333333'};
				${borderCSS}
				${boxShadowCSS}
				${paddingCSS}
				position: relative;
				transition: all 0.3s ease;
			}
			
			/* Highlighted table */
			.${id} .digiblocks-pricing-table-highlighted {
				z-index: 1;
			}
			
			/* Hover effect */
			.${id} .digiblocks-pricing-table:hover {
				${boxShadowHover && boxShadowHover.enable ? boxShadowHoverCSS : ''}
			}
			
			/* Header section */
			.${id} .digiblocks-pricing-table-header {
				background-color: ${headerBackgroundColor || 'transparent'};
				text-align: center;
			}
			
			/* Icon */
			.${id} .digiblocks-pricing-table-icon {
				display: inline-flex;
				justify-content: center;
			}

			.${id} .digiblocks-pricing-table-icon span {
				display: flex;
			}
			
			.${id} .digiblocks-pricing-table-icon svg {
				width: 50px;
				height: 50px;
			}
			
			${tables.map((table, index) => `
				/* Custom colors for table ${index + 1} */
				.${id} .digiblocks-pricing-table:nth-child(${index + 1}) .digiblocks-pricing-table-icon svg {
					fill: ${table.iconColor || tableTextColor || '#333333'};
					transition: fill 0.3s ease;
				}
				
				.${id} .digiblocks-pricing-table:nth-child(${index + 1}):hover .digiblocks-pricing-table-icon svg {
					fill: ${table.iconHoverColor || table.iconColor || tableTextColor || '#333333'};
				}
			`).join('')}
			
			/* Title */
			.${id} .digiblocks-pricing-table-title {
				margin: 0;
				color: ${tableTextColor || '#333333'};
				${titleTypographyCSS}
			}
			
			/* Price section */
			.${id} .digiblocks-pricing-table-price {
				color: ${tableTextColor || '#333333'};
				${priceTypographyCSS}
			}
			
			.${id} .digiblocks-pricing-table-period {
				${textTypographyCSS}
				opacity: 0.8;
			}
			
			/* Description */
			.${id} .digiblocks-pricing-table-description {
				${textTypographyCSS}
			}
			
			/* Features section */
			.${id} .digiblocks-pricing-table-feature-wrapper {
				display: flex;
				align-items: center;
				justify-content: ${align === 'center' ? 'center' : (align === 'right' ? 'flex-end' : 'space-between')};
				gap: 10px;
			}

			.${id} .digiblocks-pricing-table-feature-item {
				display: flex;
				align-items: center;
				justify-content: ${align === 'center' ? 'center' : (align === 'right' ? 'flex-end' : 'flex-start')};
				gap: 10px;
				${contentTypographyCSS}
			}
			
			.${id} .digiblocks-pricing-table-feature-icon {
				display: inline-flex;
				align-items: center;
			}
			
			.${id} .digiblocks-pricing-table-feature-icon span {
				display: flex;
			}
			
			.${id} .digiblocks-pricing-table-feature-check {
				color: #28a745;
			}
			
			.${id} .digiblocks-pricing-table-feature-cross {
				color: #dc3545;
			}
			
			.${id} .digiblocks-pricing-table-feature-text {
				flex: 1;
			}
			
			.${id} .digiblocks-pricing-table-feature-disabled {
				opacity: 0.5;
				text-decoration: line-through;
			}
			
			/* Footer section */
			.${id} .digiblocks-pricing-table-footer {
				margin-top: auto;
				text-align: center;
			}
			
			/* Button */
			.${id} .digiblocks-pricing-table-button {
				background-color: ${buttonBackgroundColor || '#4a6cf7'};
				color: ${buttonTextColor || '#ffffff'};
				${buttonPaddingValue}
				border-radius: ${buttonRadiusValue}px;
				cursor: pointer;
				display: inline-block;
				text-decoration: none;
				transition: all 0.3s ease;
				${buttonBorderCSS}
				${buttonTypographyCSS}
			}
			
			.${id} .digiblocks-pricing-table-button:hover {
				background-color: ${buttonBackgroundHoverColor || '#3151e1'};
				color: ${buttonTextHoverColor || '#ffffff'};
				${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
			}
			
			/* Ribbon */
			${ribbonCSS}
			
			/* Table-specific styles */
			${tableSpecificCSS}
			
			/* Editor controls */
			.${id} .digiblocks-pricing-table-controls {
				margin-top: 20px;
				margin-bottom: 20px;
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				justify-content: center;
			}
			
			.${id} .digiblocks-table-item-controls {
				position: absolute;
				top: 5px;
				right: 5px;
				display: flex;
				gap: 5px;
				z-index: 10;
				background: rgba(255, 255, 255, 0.9);
				border-radius: 4px;
				padding: 3px;
			}
			
			.${id} .digiblocks-feature-item-controls {
				display: flex;
				gap: 5px;
			}
			
			.${id} .digiblocks-table-active {
				outline: 2px solid #4a6cf7;
				outline-offset: -2px;
			}
			
			/* Responsive styles */
			@media (max-width: 991px) {
				.${id} .digiblocks-pricing-tables-container {
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				}
				
				.${id} .digiblocks-pricing-table-highlighted {
					transform: none !important;
				}
			}
			
			@media (max-width: 767px) {
				.${id} .digiblocks-pricing-tables-container {
					grid-template-columns: 1fr;
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
    
    // Render pricing table item
    const renderPricingTable = (table, index) => {
        return (
            <div 
                key={table.id}
                className={`digiblocks-pricing-table ${activeTable === index ? 'digiblocks-table-active' : ''} ${table.isHighlighted ? 'digiblocks-pricing-table-highlighted' : ''}`}
                onClick={() => setActiveTable(index)}
                style={table.backgroundColor ? { backgroundColor: table.backgroundColor } : null}
            >
                {/* Table Controls */}
                <div className="digiblocks-table-item-controls">
                    <Tooltip text={__('Move Left', 'digiblocks')}>
                        <Button
                            icon="arrow-left-alt2"
                            isSmall
                            onClick={(e) => {
                                e.stopPropagation();
                                moveTableUp(index);
                            }}
                            disabled={index === 0}
                        />
                    </Tooltip>
                    <Tooltip text={__('Move Right', 'digiblocks')}>
                        <Button
                            icon="arrow-right-alt2"
                            isSmall
                            onClick={(e) => {
                                e.stopPropagation();
                                moveTableDown(index);
                            }}
                            disabled={index === tables.length - 1}
                        />
                    </Tooltip>
                    <Tooltip text={__('Duplicate', 'digiblocks')}>
                        <Button
                            icon="admin-page"
                            isSmall
                            onClick={(e) => {
                                e.stopPropagation();
                                duplicateTable(index);
                            }}
                        />
                    </Tooltip>
                    <Tooltip text={__('Remove', 'digiblocks')}>
                        <Button
                            icon="trash"
                            isSmall
                            onClick={(e) => {
                                e.stopPropagation();
                                removeTable(index);
                            }}
                            disabled={tables.length <= 1}
                        />
                    </Tooltip>
                </div>
                
                {/* Ribbon (if enabled and highlighted) */}
                {showRibbon && table.isHighlighted && (
                    <div className="digiblocks-pricing-table-ribbon">
                        <RichText
                            tagName="span"
                            value={table.ribbonText}
                            onChange={(value) => updateTableAttribute(index, 'ribbonText', value)}
                            placeholder={__('Popular', 'digiblocks')}
                        />
                    </div>
                )}
                
                {/* Header */}
                <div 
                    className="digiblocks-pricing-table-header"
                    style={table.headerBackgroundColor ? { backgroundColor: table.headerBackgroundColor } : null}
                >
                    {/* Icon (if set) */}
                    {table.iconValue && table.iconValue.svg && (
                        <div className="digiblocks-pricing-table-icon">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: table.iconValue.svg,
                                }}
                            />
                        </div>
                    )}
                    
                    {/* Title */}
                    <RichText
                        tagName="h3"
                        className="digiblocks-pricing-table-title"
                        value={table.title}
                        onChange={(value) => updateTableAttribute(index, 'title', value)}
                        placeholder={__('Plan Title', 'digiblocks')}
                        style={table.textColor ? { color: table.textColor } : null}
                    />
                    
                    {/* Price */}
                    <div className="digiblocks-pricing-table-price" style={table.textColor ? { color: table.textColor } : null}>
                        <RichText
                            tagName="span"
                            className="digiblocks-pricing-table-amount"
                            value={table.price}
                            onChange={(value) => updateTableAttribute(index, 'price', value)}
                            placeholder={__('$0', 'digiblocks')}
                        />
                        <RichText
                            tagName="span"
                            className="digiblocks-pricing-table-period"
                            value={table.period}
                            onChange={(value) => updateTableAttribute(index, 'period', value)}
                            placeholder={__('/month', 'digiblocks')}
                        />
                    </div>
                    
                    {/* Description */}
                    <RichText
                        tagName="div"
                        className="digiblocks-pricing-table-description"
                        value={table.description}
                        onChange={(value) => updateTableAttribute(index, 'description', value)}
                        placeholder={__('Short description', 'digiblocks')}
                        style={table.textColor ? { color: table.textColor } : null}
                    />
                </div>
                
                {/* Features */}
                <div className="digiblocks-pricing-table-features">
                    {table.features.map((feature, featureIndex) => (
						<div 
							key={`feature-${featureIndex}`}
							className="digiblocks-pricing-table-feature-wrapper"
						>
							<div 
								className={`digiblocks-pricing-table-feature-item ${!feature.enabled ? 'digiblocks-pricing-table-feature-disabled' : ''}`}
							>
								{/* Feature icon (check or cross) */}
								<div className="digiblocks-pricing-table-feature-icon">
									{feature.enabled ? (
										<span className="digiblocks-pricing-table-feature-check">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
												<path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
											</svg>
										</span>
									) : (
										<span className="digiblocks-pricing-table-feature-cross">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
												<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
											</svg>
										</span>
									)}
								</div>
								
								{/* Feature text */}
								<RichText
									tagName="div"
									className="digiblocks-pricing-table-feature-text"
									value={feature.text}
									onChange={(value) => updateFeature(index, featureIndex, 'text', value)}
									placeholder={__('Feature', 'digiblocks')}
									style={table.textColor ? { color: table.textColor } : null}
								/>
							</div>
                            
                            {/* Feature item controls */}
                            <div className="digiblocks-feature-item-controls">
                                <Tooltip text={feature.enabled ? __('Disable', 'digiblocks') : __('Enable', 'digiblocks')}>
                                    <Button
                                        icon={feature.enabled ? 'visibility' : 'hidden'}
                                        isSmall
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFeatureEnabled(index, featureIndex);
                                        }}
                                    />
                                </Tooltip>
                                <Tooltip text={__('Remove', 'digiblocks')}>
                                    <Button
                                        icon="trash"
                                        isSmall
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFeature(index, featureIndex);
                                        }}
                                        disabled={table.features.length <= 1}
                                    />
                                </Tooltip>
                            </div>
						</div>
                    ))}
                    
                    {/* Add feature button */}
                    <Button
                        variant="secondary"
                        isSmall
                        onClick={(e) => {
                            e.stopPropagation();
                            addFeature(index);
                        }}
                        style={{ width: '100%', marginTop: '10px' }}
                    >
                        {__('Add Feature', 'digiblocks')}
                    </Button>
                </div>
                
                {/* Footer */}
                <div className="digiblocks-pricing-table-footer">
                    <div 
                        className="digiblocks-pricing-table-button"
                        style={table.buttonBackgroundColor ? { 
                            backgroundColor: table.buttonBackgroundColor,
                            color: table.buttonTextColor || buttonTextColor || '#ffffff'
                        } : null}
                    >
                        <RichText
                            tagName="span"
                            value={table.buttonText}
                            onChange={(value) => updateTableAttribute(index, 'buttonText', value)}
                            placeholder={__('Get Started', 'digiblocks')}
                        />
                    </div>
                </div>
            </div>
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
                            name="layout"
                            title={__("Layout", "digiblocks")}
                            initialOpen={true}
                        >
                            <RangeControl
                                label={__("Columns", "digiblocks")}
                                value={columns}
                                onChange={(value) => setAttributes({ columns: value })}
                                min={1}
                                max={4}
                                step={1}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
                                label={__("Table Style", "digiblocks")}
                                value={tableStyle}
                                options={tableStyleOptions}
                                onChange={(value) => applyTableStyle(value)}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleGroupControl
                                label={__("Alignment", "digiblocks")}
                                value={align}
                                onChange={(value) => setAttributes({ align: value })}
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
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="ribbon"
                            title={__("Ribbon", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Show Ribbon", "digiblocks")}
                                checked={showRibbon}
                                onChange={(value) => setAttributes({ showRibbon: value })}
                                help={__("Display a ribbon on highlighted tables.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {showRibbon && (
                                <>
                                    <SelectControl
                                        label={__("Ribbon Style", "digiblocks")}
                                        value={ribbonStyle}
                                        options={ribbonStyleOptions}
                                        onChange={(value) => setAttributes({ ribbonStyle: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <SelectControl
                                        label={__("Ribbon Position", "digiblocks")}
                                        value={ribbonPosition}
                                        options={ribbonPositionOptions}
                                        onChange={(value) => setAttributes({ ribbonPosition: value })}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <PanelColorSettings
                                        title={__(
                                            "Ribbon Colors",
                                            "digiblocks"
                                        )}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: ribbonBackgroundColor,
                                                onChange: (value) =>
                                                    setAttributes({
                                                        ribbonBackgroundColor: value,
                                                    }),
                                                label: __(
                                                    "Background Color",
                                                    "digiblocks"
                                                ),
                                            },
                                            {
                                                value: ribbonTextColor,
                                                onChange: (value) =>
                                                    setAttributes({
                                                        ribbonTextColor: value,
                                                    }),
                                                label: __(
                                                    "Text Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="table-config"
                            title={__("Table Settings", "digiblocks")}
                            initialOpen={false}
                        >
                            {tables[activeTable] && (
                                <>
                                    <h3>{__("Editing Table", "digiblocks")} #{activeTable + 1}</h3>
                                    
                                    <ToggleControl
                                        label={__("Highlight This Table", "digiblocks")}
                                        checked={tables[activeTable].isHighlighted}
                                        onChange={(value) => updateTableAttribute(activeTable, 'isHighlighted', value)}
                                        help={__("Apply special styling to highlight this table.", "digiblocks")}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    {!componentsLoaded ? (
                                        <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                            <div className="components-spinner"></div>
                                            <p>{__('Loading icon selector...', 'digiblocks')}</p>
                                        </div>
                                    ) : (
                                        <FontAwesomeControl
											label={__('Select Icon', 'digiblocks')}
											value={tables[activeTable].iconValue}
											onChange={(value) => updateTableAttribute(activeTable, 'iconValue', value)}
										/>
                                    )}

									{tables[activeTable] && tables[activeTable].iconValue && (
										<PanelColorSettings
											title={__(
												"Icon Colors",
												"digiblocks"
											)}
											initialOpen={false}
											enableAlpha={true}
											colorSettings={[
												{
													value: tables[activeTable].iconColor,
													onChange: (value) => updateTableAttribute(activeTable, 'iconColor', value),
													label: __(
														"Icon Color",
														"digiblocks"
													),
												},
												{
													value: tables[activeTable].iconHoverColor,
													onChange: (value) => updateTableAttribute(activeTable, 'iconHoverColor', value),
													label: __(
														"Icon Hover Color",
														"digiblocks"
													),
												}
											]}
										/>
									)}

									{/* Add Link Control here */}
									<div style={{ marginTop: '15px', marginBottom: '10px' }}>
										<p><strong>{__("Button Link", "digiblocks")}</strong></p>
										<LinkControl
											value={tables[activeTable].buttonUrl ? {
												url: tables[activeTable].buttonUrl,
												opensInNewTab: !!tables[activeTable].buttonOpenInNewTab,
												rel: tables[activeTable].buttonRel || ''
											} : undefined}
											settings={[
												{
													id: 'opensInNewTab',
													title: __('Open in new tab', 'digiblocks'),
												},
												{
													id: 'rel',
													title: __('Add noopener noreferrer', 'digiblocks'),
												}
											]}
											onChange={(newLink) => {
												if (newLink && newLink.url) {
													// Create a new copy of the tables array
													const newTables = [...tables];
													
													// Update the entire table object at once
													newTables[activeTable] = {
														...newTables[activeTable],
														buttonUrl: newLink.url,
														buttonOpenInNewTab: !!newLink.opensInNewTab,
														buttonRel: newLink.rel || ''
													};
													
													// Set all attributes at once
													setAttributes({ tables: newTables });
												}
											}}
											onRemove={() => {
												// Create a new copy of the tables array
												const newTables = [...tables];
												
												// Update the entire table object at once
												newTables[activeTable] = {
													...newTables[activeTable],
													buttonUrl: '',
													buttonOpenInNewTab: false,
													buttonRel: ''
												};
												
												// Set all attributes at once
												setAttributes({ tables: newTables });
											}}
											suggestionsQuery={{
												type: 'post',
												subtype: 'any',
											}}
											forceIsEditingLink={!tables[activeTable].buttonUrl}
										/>
									</div>
                                </>
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
                            <PanelColorSettings
                                title={__(
                                    "Table Colors",
                                    "digiblocks"
                                )}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: tableBackgroundColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                tableBackgroundColor: value,
                                            }),
                                        label: __(
                                            "Background Color",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: headerBackgroundColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                headerBackgroundColor: value,
                                            }),
                                        label: __(
                                            "Header Background",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: tableTextColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                tableTextColor: value,
                                            }),
                                        label: __(
                                            "Text Color",
                                            "digiblocks"
                                        ),
                                    },
                                ]}
                            />
                            
                            <PanelColorSettings
                                title={__(
                                    "Button Colors",
                                    "digiblocks"
                                )}
                                initialOpen={false}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: buttonBackgroundColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                buttonBackgroundColor: value,
                                            }),
                                        label: __(
                                            "Background Color",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: buttonTextColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                buttonTextColor: value,
                                            }),
                                        label: __(
                                            "Text Color",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: buttonBackgroundHoverColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                buttonBackgroundHoverColor: value,
                                            }),
                                        label: __(
                                            "Hover Background",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: buttonTextHoverColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                buttonTextHoverColor: value,
                                            }),
                                        label: __(
                                            "Hover Text",
                                            "digiblocks"
                                        ),
                                    },
                                ]}
                            />
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
                                    fontSize: { desktop: 24, tablet: 20, mobile: 18 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Price Typography",
                                    "digiblocks"
                                )}
                                value={headingTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        headingTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 36, tablet: 30, mobile: 26 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Description Typography",
                                    "digiblocks"
                                )}
                                value={textTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        textTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Features Typography",
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
                                    lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                                    lineHeightUnit: 'em',
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
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__("Borders & Shadow", "digiblocks")}
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
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="button-style"
                            title={__("Button Style", "digiblocks")}
                            initialOpen={false}
                        >
                            <RangeControl
                                label={__("Border Radius", "digiblocks")}
                                value={buttonRadius}
                                onChange={(value) => setAttributes({ buttonRadius: value })}
                                min={0}
                                max={50}
                                step={1}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <SelectControl
								label={__("Border Style", "digiblocks")}
								value={buttonBorderStyle}
								options={borderStyleOptions}
								onChange={(value) => setAttributes({ buttonBorderStyle: value })}
								__next40pxDefaultSize={true}
								__nextHasNoMarginBottom={true}
							/>
							
							{buttonBorderStyle !== 'none' && (
								<>
									<ResponsiveControl
										label={__("Border Width", "digiblocks")}
									>
										<DimensionControl
											values={buttonBorderWidth && buttonBorderWidth[localActiveDevice] ? buttonBorderWidth[localActiveDevice] : {
												top: 1,
												right: 1,
												bottom: 1,
												left: 1,
												unit: 'px'
											}}
											onChange={(value) =>
												setAttributes({
													buttonBorderWidth: {
														...buttonBorderWidth,
														[localActiveDevice]: value,
													},
												})
											}
										/>
									</ResponsiveControl>
									
									<PanelColorSettings
										title={__("Border Colors", "digiblocks")}
										initialOpen={true}
										enableAlpha={true}
										colorSettings={[
											{
												value: buttonBorderColor,
												onChange: (value) => setAttributes({ buttonBorderColor: value }),
												label: __("Border Color", "digiblocks"),
											},
											{
												value: buttonBorderHoverColor,
												onChange: (value) => setAttributes({ buttonBorderHoverColor: value }),
												label: __("Border Hover Color", "digiblocks"),
											},
										]}
									/>
								</>
							)}
                            
                            <ResponsiveControl
                                label={__("Button Padding", "digiblocks")}
                            >
                                <DimensionControl
                                    values={buttonPadding && buttonPadding[localActiveDevice] ? buttonPadding[localActiveDevice] : {
                                        top: 10,
                                        right: 20,
                                        bottom: 10,
                                        left: 20,
                                        unit: 'px'
                                    }}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonPadding: {
                                                ...buttonPadding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
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
        className: `digiblocks-pricing-table-block ${id} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
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
                <div className="digiblocks-pricing-tables-container">
                    {tables.map((table, index) => renderPricingTable(table, index))}
                </div>
                
                <div className="digiblocks-pricing-table-controls">
                    <Button
                        variant="primary"
                        icon="plus"
                        onClick={addTable}
                    >
                        {__("Add Pricing Table", "digiblocks")}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PricingTableEdit;