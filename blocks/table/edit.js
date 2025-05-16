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
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    ToolbarGroup,
    ToolbarButton,
    BaseControl,
    Popover,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Table block
 */
const TableEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        tableData,
        hasHeader,
        hasFooter,
        tableBorderColor,
        tableBorderWidth,
        tableBorderStyle,
        cellPadding,
        tableBorderCollapse,
        headerBackgroundColor,
        headerTextColor,
        headingTypography,
        bodyBackgroundColor,
        altRowBackgroundColor,
        bodyTextColor,
        textTypography,
        footerBackgroundColor,
        footerTextColor,
        contentTypography,
        borderRadius,
        boxShadow,
        boxShadowHover,
        margin,
        cellAlignment,
        headerAlignment,
        footerAlignment,
        tablePreset,
        responsiveMode,
        animation,
        firstColHeader,
        cellControls
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});
    
    // State for currently selected cell
    const [selectedCell, setSelectedCell] = useState({ row: -1, col: -1 });
    
    // State for rating popover
    const [isRatingPopoverOpen, setIsRatingPopoverOpen] = useState(false);
    
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
        // Initialize default table data if empty
        if (!tableData || tableData.length === 0) {
            setAttributes({
                tableData: [
                    ['Header 1', 'Header 2', 'Header 3'],
                    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
                    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
                ]
            });
        }
        
        // Initialize cell controls if it's empty
        if (!cellControls) {
            setAttributes({
                cellControls: {}
            });
        }
    }, [tableData, cellControls, setAttributes]);

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
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
        { label: __("None", "digiblocks"), value: "none" },
    ];

    // Table preset options
    const tablePresetOptions = [
        { label: __("Default", "digiblocks"), value: "default" },
        { label: __("Striped", "digiblocks"), value: "striped" },
        { label: __("Bordered", "digiblocks"), value: "bordered" },
        { label: __("Borderless", "digiblocks"), value: "borderless" },
        { label: __("Modern", "digiblocks"), value: "modern" },
        { label: __("Minimal", "digiblocks"), value: "minimal" },
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

    // Row actions
    const addRow = (index) => {
        if (!tableData || tableData.length === 0) return;
        
        const newTableData = [...tableData];
        const columnsCount = newTableData[0].length;
        const newRow = Array(columnsCount).fill('');
        
        newTableData.splice(index + 1, 0, newRow);
        setAttributes({ tableData: newTableData });
    };

    const deleteRow = (index) => {
        if (!tableData || tableData.length <= 1) {
            return; // Don't delete the last row
        }
        
        const newTableData = [...tableData];
        newTableData.splice(index, 1);
        setAttributes({ tableData: newTableData });
    };

    // Column actions
    const addColumn = (index) => {
        if (!tableData || tableData.length === 0) return;
        
        const newTableData = tableData.map(row => {
            const newRow = [...row];
            newRow.splice(index + 1, 0, '');
            return newRow;
        });
        
        setAttributes({ tableData: newTableData });
    };

    const deleteColumn = (index) => {
        if (!tableData || tableData[0].length <= 1) {
            return; // Don't delete the last column
        }
        
        const newTableData = tableData.map(row => {
            const newRow = [...row];
            newRow.splice(index, 1);
            return newRow;
        });
        
        setAttributes({ tableData: newTableData });
    };

    // Update cell content
    const updateCellContent = (value, rowIndex, colIndex) => {
        const newTableData = [...tableData];
        newTableData[rowIndex][colIndex] = value;
        setAttributes({ tableData: newTableData });
    };

    // Cell selection handler
    const handleCellClick = (rowIndex, colIndex) => {
        setSelectedCell({ row: rowIndex, col: colIndex });
    };

    // Get cell control value
    const getCellControl = (row, col, controlType) => {
        if (!cellControls) return null;
        
        const cellKey = `${row}-${col}`;
        if (cellControls[cellKey] && cellControls[cellKey][controlType]) {
            return cellControls[cellKey][controlType];
        }
        return null;
    };

    // Set cell control value
    const setCellControl = (row, col, controlType, value) => {
        const cellKey = `${row}-${col}`;
        const updatedControls = { ...(cellControls || {}) };
        
        if (!updatedControls[cellKey]) {
            updatedControls[cellKey] = {};
        }
        
        updatedControls[cellKey][controlType] = value;
        setAttributes({ cellControls: updatedControls });
    };

    // Clear cell control
    const clearCellControl = (row, col, controlType) => {
        if (!cellControls) return;
        
        const cellKey = `${row}-${col}`;
        const updatedControls = { ...cellControls };
        
        if (updatedControls[cellKey] && updatedControls[cellKey][controlType]) {
            delete updatedControls[cellKey][controlType];
            
            // If the cell has no more controls, remove the cell entry
            if (Object.keys(updatedControls[cellKey]).length === 0) {
                delete updatedControls[cellKey];
            }
            
            setAttributes({ cellControls: updatedControls });
        }
    };

    // Apply table preset
    const applyTablePreset = (preset) => {
        let newAttributes = {};
        
        switch (preset) {
            case 'striped':
                newAttributes = {
                    tablePreset: preset,
                    tableBorderStyle: 'solid',
                    tableBorderWidth: 1,
                    tableBorderColor: '#dee2e6',
                    tableBorderCollapse: 'collapse',
                    headerBackgroundColor: '#f8f9fa',
                    headerTextColor: '#212529',
                    bodyBackgroundColor: '#ffffff',
                    altRowBackgroundColor: '#f2f2f2',
                    bodyTextColor: '#212529',
                };
                break;
                
            case 'bordered':
                newAttributes = {
                    tablePreset: preset,
                    tableBorderStyle: 'solid',
                    tableBorderWidth: 2,
                    tableBorderColor: '#dee2e6',
                    tableBorderCollapse: 'collapse',
                    headerBackgroundColor: '#f8f9fa',
                    headerTextColor: '#212529',
                    bodyBackgroundColor: '#ffffff',
                    altRowBackgroundColor: '',
                    bodyTextColor: '#212529',
                };
                break;
                
            case 'borderless':
                newAttributes = {
                    tablePreset: preset,
                    tableBorderStyle: 'none',
                    tableBorderWidth: 0,
                    tableBorderColor: 'transparent',
                    tableBorderCollapse: 'collapse',
                    headerBackgroundColor: 'transparent',
                    headerTextColor: '#212529',
                    bodyBackgroundColor: 'transparent',
                    altRowBackgroundColor: '',
                    bodyTextColor: '#212529',
                };
                break;
                
            case 'modern':
                newAttributes = {
                    tablePreset: preset,
                    tableBorderStyle: 'solid',
                    tableBorderWidth: 1,
                    tableBorderColor: '#e0e0e0',
                    tableBorderCollapse: 'separate',
                    headerBackgroundColor: '#4a6cf7',
                    headerTextColor: '#ffffff',
                    bodyBackgroundColor: '#ffffff',
                    altRowBackgroundColor: '#f8f9fa',
                    bodyTextColor: '#212529',
                    boxShadow: {
                        enable: true,
                        color: 'rgba(0, 0, 0, 0.1)',
                        horizontal: 0,
                        vertical: 4,
                        blur: 15,
                        spread: 0,
                        position: 'outset'
                    },
                    borderRadius: {
                        desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    }
                };
                break;
                
            case 'minimal':
                newAttributes = {
                    tablePreset: preset,
                    tableBorderStyle: 'solid',
                    tableBorderWidth: 1,
                    tableBorderColor: '#e0e0e0',
                    tableBorderCollapse: 'collapse',
                    headerBackgroundColor: '#ffffff',
                    headerTextColor: '#212529',
                    bodyBackgroundColor: '#ffffff',
                    altRowBackgroundColor: '',
                    bodyTextColor: '#212529',
                    boxShadow: {
                        enable: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        horizontal: 0,
                        vertical: 0,
                        blur: 0,
                        spread: 0,
                        position: 'outset'
                    },
                    borderRadius: {
                        desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    }
                };
                break;
                
            default: // default preset
                newAttributes = {
                    tablePreset: 'default',
                    tableBorderStyle: 'solid',
                    tableBorderWidth: 1,
                    tableBorderColor: '#e0e0e0',
                    tableBorderCollapse: 'collapse',
                    headerBackgroundColor: '#f8f9fa',
                    headerTextColor: '#333333',
                    bodyBackgroundColor: '#ffffff',
                    altRowBackgroundColor: '',
                    bodyTextColor: '#666666',
                    boxShadow: {
                        enable: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        horizontal: 0,
                        vertical: 0,
                        blur: 0,
                        spread: 0,
                        position: 'outset'
                    },
                    borderRadius: {
                        desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                        mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                    }
                };
        }
        
        setAttributes(newAttributes);
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        if (!id) return ''; // Prevent rendering if ID is not yet set

		const getFlexAlignment = (textAlign) => {
			switch (textAlign) {
				case 'left':
					return 'flex-start';
				case 'center':
					return 'center';
				case 'right':
					return 'flex-end';
				default:
					return 'flex-start';
			}
		};

        // Border styles
        let borderCSS = '';
        if (tableBorderStyle !== 'none') {
            borderCSS = `
                border-style: ${tableBorderStyle};
                border-width: ${tableBorderWidth}px;
                border-color: ${tableBorderColor};
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
        const borderRadiusCSS = `${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}`;
        
        // Cell padding
        const cellPaddingCSS = `${getDimensionCSS(cellPadding, 'padding', activeDevice)}`;
        
        // Margin
        const marginCSS = `${getDimensionCSS(margin, 'margin', activeDevice)}`;
        
        // Typography for header
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
        
        // Typography for body
        let bodyTypographyCSS = '';
        if (textTypography) {
            if (textTypography.fontFamily) {
                bodyTypographyCSS += `font-family: ${textTypography.fontFamily};`;
            }
            
            if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
                bodyTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};`;
            }
            
            if (textTypography.fontWeight) {
                bodyTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
            }
            
            if (textTypography.fontStyle) {
                bodyTypographyCSS += `font-style: ${textTypography.fontStyle};`;
            }
            
            if (textTypography.textTransform) {
                bodyTypographyCSS += `text-transform: ${textTypography.textTransform};`;
            }
            
            if (textTypography.textDecoration) {
                bodyTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
            }
            
            if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
                bodyTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};`;
            }
            
            if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
                bodyTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Typography for footer
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
        
        // Base styles for the table
        return `
            /* Table Block - ${id} */
            .${id} {
                ${marginCSS}
                ${boxShadowCSS}
                ${borderRadiusCSS}
                width: 100%;
                transition: all 0.3s ease;
            }

			/* Hover effects */
            ${boxShadowHover && boxShadowHover.enable ? `
                .${id}:hover {
                    ${boxShadowHoverCSS}
                }
            ` : ''}
            
            /* Set up main table styles */
            .${id} .digiblocks-table {
                width: 100%;
                border-collapse: ${tableBorderCollapse};
                border-spacing: 0;
                color: ${bodyTextColor};
                ${bodyTypographyCSS}
                ${borderCSS}
                ${borderRadiusCSS}
            }
            
            /* Table header styles */
            .${id} .digiblocks-table thead th {
                background-color: ${headerBackgroundColor};
                color: ${headerTextColor};
                ${headingTypographyCSS}
                ${cellPaddingCSS}
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }

            .${id} .digiblocks-table thead th .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(headerAlignment)};
            }
            
            /* Table body styles */
            .${id} .digiblocks-table tbody td {
                background-color: ${bodyBackgroundColor};
                ${cellPaddingCSS}
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }

            .${id} .digiblocks-table tbody td .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(cellAlignment)};
            }
            
            /* First column styles if it's a header */
            ${firstColHeader ? `
            .${id} .digiblocks-table tbody td:first-child {
                background-color: ${headerBackgroundColor};
                color: ${headerTextColor};
                ${headingTypographyCSS}
                font-weight: bold;
            }

            .${id} .digiblocks-table tbody td:first-child .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(headerAlignment)};
            }
            ` : ''}
            
            /* Alternating row styles if enabled */
            ${altRowBackgroundColor ? `
            .${id} .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${altRowBackgroundColor};
            }
            ${firstColHeader ? `
            .${id} .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${headerBackgroundColor};
            }
            ` : ''}
            ` : ''}
            
            /* Footer styles if enabled */
            ${hasFooter ? `
            .${id} .digiblocks-table tfoot td {
                background-color: ${footerBackgroundColor};
                color: ${footerTextColor};
                ${contentTypographyCSS}
                ${cellPaddingCSS}
                vertical-align: middle;
                border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
            }

            .${id} .digiblocks-table tfoot td .digiblocks-cell-content {
                justify-content: ${getFlexAlignment(footerAlignment)};
            }
            ` : ''}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${responsiveMode === 'stack' ? `
                .${id} {
					border-radius: 0;
					box-shadow: none;
                }

                .${id} .digiblocks-table {
                    border-collapse: collapse;
					border: 0;
					border-radius: 0;
                }
                
                .${id} .digiblocks-table thead,
                .${id} .digiblocks-table tfoot {
                    display: none;
                }

				.${id} .digiblocks-table tbody {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
                
                .${id} .digiblocks-table tbody tr {
                    display: block;
                    border: ${tableBorderWidth}px ${tableBorderStyle} ${tableBorderColor};
					${boxShadowCSS}
					transition: all 0.3s ease;
                }

				/* Hover effects */
				${boxShadowHover && boxShadowHover.enable ? `
				.${id} .digiblocks-table tbody tr:hover {
						${boxShadowHoverCSS}
					}
				` : ''}
                
                .${id} .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
					gap: 1rem;
                    text-align: right;
                    border-bottom: 1px solid ${tableBorderColor};
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                
                .${id} .digiblocks-table tbody td::before {
                    content: attr(data-label);
                    font-weight: bold;
                    text-align: left;
                    flex: 1;
                }
                
                .${id} .digiblocks-table tbody td:last-child {
                    border-bottom: none;
                }
                
                ${firstColHeader ? `
                .${id} .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${headerBackgroundColor};
                    color: ${headerTextColor};
                    justify-content: center;
                }
                
                .${id} .digiblocks-table tbody td:first-child::before {
                    content: '';
                    display: none;
                }
                ` : ''}
                ` : ''}
                
                /* Scroll mode */
                ${responsiveMode === 'scroll' ? `
                .${id} {
                    overflow-x: auto;
                }
                
                .${id} .digiblocks-table {
                    min-width: 600px; /* Ensure it's wider than most mobile screens */
                }
                ` : ''}
            }
            
            /* Cell content layout */
            .${id} .digiblocks-cell-content {
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .${id} .digiblocks-cell-icon {
                flex-shrink: 0;
            }
            
            /* Cell control icons */
            .${id} .digiblocks-table .digiblocks-cell-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-table .digiblocks-cell-check {
                color: #28a745;
            }
            
            .${id} .digiblocks-table .digiblocks-cell-cross {
                color: #dc3545;
            }
            
            .${id} .digiblocks-table .digiblocks-cell-stars {
                color: #ffc107;
                display: inline-flex;
				gap: 5px;
            }
            
            /* Selected cell highlight */
            .${id} .digiblocks-table .digiblocks-selected-cell {
                position: relative;
                outline: 2px solid #4a6cf7;
                outline-offset: -2px;
                z-index: 1;
            }
            
            /* Cell Controls Toolbar */
            .${id} .digiblocks-cell-controls-toolbar {
                margin-bottom: 15px;
                padding: 12px;
                background-color: #f0f0f1;
                border-radius: 4px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }
            
            .${id} .digiblocks-cell-controls-label {
                font-weight: bold;
            }

			.${id} .digiblocks-cell-controls-buttons .components-button-group {
                display: flex;
                align-items: center;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-check-button {
                color: #28a745;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-cross-button {
                color: #dc3545;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-rating-button {
                color: #ffc107;
            }

			.${id} .digiblocks-cell-controls-buttons .digiblocks-cell-control-remove-button {
                color: #fe5252;
            }
            
            .components-popover.digiblocks-cell-control-popover .components-popover__content {
				min-width: 200px;
				padding: 1rem;
			}
            
            .components-popover.digiblocks-cell-control-popover .components-popover__content h3 {
				font-size: 1rem;
				margin: 0 0 1rem;
			}

			.components-popover.digiblocks-cell-control-popover .components-button-group {
				display: flex;
			}

			.components-popover.digiblocks-cell-control-popover .components-button-group button {
				flex: 1;
			}
            
            /* Table instructions */
            .${id} .digiblocks-table-instructions {
                margin-bottom: 15px;
                font-style: italic;
                color: #555;
            }
            
            /* Editor controls */
            .${id} .digiblocks-table-controls {
                margin-top: 20px;
                margin-bottom: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
            }
            
            .${id} .digiblocks-row-controls,
            .${id} .digiblocks-col-controls {
                position: relative;
            }
            
            .${id} .digiblocks-cell-control-panel {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                z-index: 100;
                width: 240px;
            }
            
            .${id} .digiblocks-cell-control-panel h3 {
                margin-top: 0;
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            .${id} .digiblocks-control-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 5px;
            }
            
            /* Table caption if any */
            .${id} .digiblocks-table-caption {
                text-align: center;
                margin-bottom: 10px;
                font-style: italic;
            }
            
            /* Animation CSS for the table */
            ${animation && animation !== 'none' && animations[animation] ? animations[animation].keyframes : ''}
        `;
    };

    // Render cell control toolbar
    const renderCellControlToolbar = () => {
        if (selectedCell.row === -1 || selectedCell.col === -1) {
            return null;
        }
        
        return (
            <div className="digiblocks-cell-controls-toolbar">
                <div className="digiblocks-cell-controls-label">
                    {__("Selected Cell:", "digiblocks")} Row {selectedCell.row + 1}, Column {selectedCell.col + 1}
                </div>
                <div className="digiblocks-cell-controls-buttons">
					<div className="components-button-group">
						<Button
							className="digiblocks-cell-control-check-button"
							icon={() => (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
							)}
							label={__("Add Check", "digiblocks")}
							onClick={() => {
								// Clear existing stars control first
								clearCellControl(selectedCell.row, selectedCell.col, 'stars');
								setCellControl(selectedCell.row, selectedCell.col, 'icon', 'check');
							}}
						/>
						<Button
							className="digiblocks-cell-control-cross-button"
							icon={() => (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
							)}
							label={__("Add Cross", "digiblocks")}
							onClick={() => {
								// Clear existing stars control first
								clearCellControl(selectedCell.row, selectedCell.col, 'stars');
								setCellControl(selectedCell.row, selectedCell.col, 'icon', 'cross');
							}}
						/>
						<Button
							className="digiblocks-cell-control-rating-button"
							icon={() => (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
							)}
							label={__("Add Rating", "digiblocks")}
							onClick={() => {
								// Clear existing icon control first
								clearCellControl(selectedCell.row, selectedCell.col, 'icon');
								setIsRatingPopoverOpen(true);
							}}
						/>
						{getCellControl(selectedCell.row, selectedCell.col, 'icon') || 
							getCellControl(selectedCell.row, selectedCell.col, 'stars') ? (
								<Button
									className="digiblocks-cell-control-remove-button"
									icon={() => (
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
									)}
									label={__("Remove Icons", "digiblocks")}
									onClick={() => {
										clearCellControl(selectedCell.row, selectedCell.col, 'icon');
										clearCellControl(selectedCell.row, selectedCell.col, 'stars');
									}}
								/>
							) : null}
					</div>
                    
                    {isRatingPopoverOpen && (
                        <Popover
							className="digiblocks-cell-control-popover"
                            onClose={() => setIsRatingPopoverOpen(false)}
                            position="bottom center"
                        >
                            <div className="digiblocks-rating-selector">
                                <h3>{__("Select Rating", "digiblocks")}</h3>
                                <ToggleGroupControl
									isBlock
									onChange={(value) => {
										setCellControl(selectedCell.row, selectedCell.col, 'stars', value.toString());
										setIsRatingPopoverOpen(false);
									}}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								>
									{[1, 2, 3, 4, 5].map((num) => (
										<ToggleGroupControlOption 
											key={`star-${num}`}
											value={num} 
											label={num.toString()} 
										/>
									))}
								</ToggleGroupControl>
                            </div>
                        </Popover>
                    )}
                </div>
            </div>
        );
    };

    // Render icon for cell based on control type
    const renderCellIcon = (row, col) => {
        if (!cellControls) return null;
        
        const cellKey = `${row}-${col}`;
        if (!cellControls[cellKey]) {
            return null;
        }
        
        // Check for icons
        if (cellControls[cellKey].icon) {
            const icon = cellControls[cellKey].icon;
            
            switch (icon) {
                case 'check':
                    return (
                        <span className="digiblocks-cell-icon digiblocks-cell-check">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        </span>
                    );
                case 'cross':
                    return (
                        <span className="digiblocks-cell-icon digiblocks-cell-cross">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                        </span>
                    );
                default:
                    return null;
            }
        }
        
        // Check for stars
        if (cellControls[cellKey].stars) {
            const starCount = parseInt(cellControls[cellKey].stars) || 0;
            const stars = [];
            
            for (let i = 0; i < 5; i++) {
                if (i < starCount) {
                    // Filled star
                    stars.push(
                        <span key={`star-${i}`} className="digiblocks-cell-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                    );
                } else {
                    // Empty star
                    stars.push(
                        <span key={`star-empty-${i}`} className="digiblocks-cell-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" opacity="0.5">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z" />
                            </svg>
                        </span>
                    );
                }
            }
            
            return <div className="digiblocks-cell-stars">{stars}</div>;
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
                            name="general-settings"
                            title={__("Table Structure", "digiblocks")}
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__("Enable Header Row", "digiblocks")}
                                checked={hasHeader}
                                onChange={() => setAttributes({ hasHeader: !hasHeader })}
                                help={__("Display the first row as table header.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__("Enable Footer Row", "digiblocks")}
                                checked={hasFooter}
                                onChange={() => setAttributes({ hasFooter: !hasFooter })}
                                help={__("Display the last row as table footer.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__("First Column as Header", "digiblocks")}
                                checked={firstColHeader}
                                onChange={() => setAttributes({ firstColHeader: !firstColHeader })}
                                help={__("Use the first column as a header column.", "digiblocks")}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="preset-settings"
                            title={__("Table Presets", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Table Style Preset", "digiblocks")}
                                value={tablePreset}
                                options={tablePresetOptions}
                                onChange={(value) => applyTablePreset(value)}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="responsive-settings"
                            title={__("Responsive Settings", "digiblocks")}
                            initialOpen={false}
                        >
                            <BaseControl
								label={__("Mobile Behavior", "digiblocks")}
								__nextHasNoMarginBottom={true}
							>
                                <ToggleGroupControl
                                    value={responsiveMode}
									onChange={(value) => setAttributes({ responsiveMode: value })}
									help={__("How the table should behave on small screens.", "digiblocks")}
									isBlock
                                    __next40pxDefaultSize={true}
                                	__nextHasNoMarginBottom={true}
                                >
                                    <ToggleGroupControlOption
										value="stack"
										label={__("Stack", "digiblocks")}
										aria-label={__("Stack Behavior", "digiblocks")}
									/>
                                    <ToggleGroupControlOption
										value="scroll"
										label={__("Scroll", "digiblocks")}
										aria-label={__("Scroll Behavior", "digiblocks")}
									/>
                                </ToggleGroupControl>
                            </BaseControl>
                        </TabPanelBody>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="border-settings"
                            title={__("Borders & Shadow", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={tableBorderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ tableBorderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {tableBorderStyle !== 'none' && (
                                <>
                                    <RangeControl
                                        label={__("Border Width", "digiblocks")}
                                        value={tableBorderWidth}
                                        onChange={(value) => setAttributes({ tableBorderWidth: value })}
                                        min={1}
                                        max={10}
                                        step={1}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                    
                                    <PanelColorSettings
                                        title={__("Border Color", "digiblocks")}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: tableBorderColor,
                                                onChange: (value) => setAttributes({ tableBorderColor: value }),
                                                label: __("Border Color", "digiblocks"),
                                            }
                                        ]}
                                    />
                                </>
                            )}
                            
                            <SelectControl
                                label={__("Border Collapse", "digiblocks")}
                                value={tableBorderCollapse}
                                options={[
                                    { label: __("Collapse", "digiblocks"), value: "collapse" },
                                    { label: __("Separate", "digiblocks"), value: "separate" },
                                ]}
                                onChange={(value) => setAttributes({ tableBorderCollapse: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
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
                            
							<BoxShadowControl
                                label={__("Box Shadow", "digiblocks")}
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) => setAttributes({ boxShadow: value })}
                                onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="header-settings"
                            title={__("Header Styles", "digiblocks")}
                            initialOpen={false}
                        >
                            <PanelColorSettings
                                title={__(
                                    "Header Colors",
                                    "digiblocks"
                                )}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: headerBackgroundColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                headerBackgroundColor: value,
                                            }),
                                        label: __(
                                            "Background Color",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: headerTextColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                headerTextColor: value,
                                            }),
                                        label: __(
                                            "Text Color",
                                            "digiblocks"
                                        ),
                                    },
                                ]}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Header Typography",
                                    "digiblocks"
                                )}
                                value={headingTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        headingTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 18, tablet: 16, mobile: 15 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
							<BaseControl
								label={__("Text Alignment", "digiblocks")}
								__nextHasNoMarginBottom={true}
							>
                                <ToggleGroupControl
                                    value={headerAlignment}
									onChange={(value) => setAttributes({ headerAlignment: value })}
									isBlock
                                    __next40pxDefaultSize={true}
                                	__nextHasNoMarginBottom={true}
                                >
                                    <ToggleGroupControlOption
										value="left"
										label={__("Left", "digiblocks")}
										aria-label={__("Left", "digiblocks")}
									/>
                                    <ToggleGroupControlOption
										value="center"
										label={__("Center", "digiblocks")}
										aria-label={__("Center", "digiblocks")}
									/>
                                    <ToggleGroupControlOption
										value="right"
										label={__("Right", "digiblocks")}
										aria-label={__("Right", "digiblocks")}
									/>
                                </ToggleGroupControl>
                            </BaseControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="body-settings"
                            title={__("Body Styles", "digiblocks")}
                            initialOpen={false}
                        >
                            <PanelColorSettings
                                title={__(
                                    "Body Colors",
                                    "digiblocks"
                                )}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: bodyBackgroundColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                bodyBackgroundColor: value,
                                            }),
                                        label: __(
                                            "Background Color",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: altRowBackgroundColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                altRowBackgroundColor: value,
                                            }),
                                        label: __(
                                            "Alternate Row Color",
                                            "digiblocks"
                                        ),
                                    },
                                    {
                                        value: bodyTextColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                bodyTextColor: value,
                                            }),
                                        label: __(
                                            "Text Color",
                                            "digiblocks"
                                        ),
                                    },
                                ]}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Body Typography",
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
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
							<BaseControl
								label={__("Text Alignment", "digiblocks")}
								__nextHasNoMarginBottom={true}
							>
                                <ToggleGroupControl
                                    value={cellAlignment}
									onChange={(value) => setAttributes({ cellAlignment: value })}
									isBlock
                                    __next40pxDefaultSize={true}
                                	__nextHasNoMarginBottom={true}
                                >
                                    <ToggleGroupControlOption
										value="left"
										label={__("Left", "digiblocks")}
										aria-label={__("Left", "digiblocks")}
									/>
                                    <ToggleGroupControlOption
										value="center"
										label={__("Center", "digiblocks")}
										aria-label={__("Center", "digiblocks")}
									/>
                                    <ToggleGroupControlOption
										value="right"
										label={__("Right", "digiblocks")}
										aria-label={__("Right", "digiblocks")}
									/>
                                </ToggleGroupControl>
                            </BaseControl>
                        </TabPanelBody>
                        
                        {hasFooter && (
                            <TabPanelBody
                                tab="style"
                                name="footer-settings"
                                title={__("Footer Styles", "digiblocks")}
                                initialOpen={false}
                            >
                                <PanelColorSettings
                                    title={__(
                                        "Footer Colors",
                                        "digiblocks"
                                    )}
                                    initialOpen={true}
                                    enableAlpha={true}
                                    colorSettings={[
                                        {
                                            value: footerBackgroundColor,
                                            onChange: (value) =>
                                                setAttributes({
                                                    footerBackgroundColor: value,
                                                }),
                                            label: __(
                                                "Background Color",
                                                "digiblocks"
                                            ),
                                        },
                                        {
                                            value: footerTextColor,
                                            onChange: (value) =>
                                                setAttributes({
                                                    footerTextColor: value,
                                                }),
                                            label: __(
                                                "Text Color",
                                                "digiblocks"
                                            ),
                                        },
                                    ]}
                                />
                                
                                <TypographyControl
                                    label={__(
                                        "Footer Typography",
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
                                        lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                        lineHeightUnit: 'em',
                                    }}
                                />
                                
								<BaseControl
									label={__("Text Alignment", "digiblocks")}
									__nextHasNoMarginBottom={true}
								>
									<ToggleGroupControl
										value={footerAlignment}
										onChange={(value) => setAttributes({ footerAlignment: value })}
										isBlock
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									>
										<ToggleGroupControlOption
											value="left"
											label={__("Left", "digiblocks")}
											aria-label={__("Left", "digiblocks")}
										/>
										<ToggleGroupControlOption
											value="center"
											label={__("Center", "digiblocks")}
											aria-label={__("Center", "digiblocks")}
										/>
										<ToggleGroupControlOption
											value="right"
											label={__("Right", "digiblocks")}
											aria-label={__("Right", "digiblocks")}
										/>
									</ToggleGroupControl>
								</BaseControl>
                            </TabPanelBody>
                        )}
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__("Spacing", "digiblocks")}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__("Cell Padding", "digiblocks")}
                            >
                                <DimensionControl
                                    values={cellPadding && cellPadding[localActiveDevice] ? cellPadding[localActiveDevice] : {
                                        top: 15,
                                        right: 15,
                                        bottom: 15,
                                        left: 15,
                                        unit: 'px'
                                    }}
                                    onChange={(value) =>
                                        setAttributes({
                                            cellPadding: {
                                                ...cellPadding,
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

    // Render table cells
    const renderTableContent = () => {
        return (
            <table className="digiblocks-table">
                {hasHeader && tableData.length > 0 && (
                    <thead>
                        <tr>
                            {tableData[0].map((cell, colIndex) => (
                                <th 
                                    key={`header-${colIndex}`}
                                    onClick={() => handleCellClick(0, colIndex)}
                                    className={selectedCell.row === 0 && selectedCell.col === colIndex ? 'digiblocks-selected-cell' : ''}
                                >
                                    <div className="digiblocks-cell-content">
                                        {renderCellIcon(0, colIndex)}
                                        <RichText
                                            tagName="span"
                                            value={cell}
                                            onChange={(value) => updateCellContent(value, 0, colIndex)}
                                            placeholder={__("Header text", "digiblocks")}
                                        />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {tableData.slice(
                        hasHeader ? 1 : 0, 
                        hasFooter ? tableData.length - 1 : tableData.length
                    ).map((row, rowIndex) => {
                        const actualRowIndex = hasHeader ? rowIndex + 1 : rowIndex;
                        return (
                            <tr key={`row-${actualRowIndex}`}>
                                {row.map((cell, colIndex) => (
                                    <td 
                                        key={`cell-${actualRowIndex}-${colIndex}`}
                                        data-label={hasHeader && tableData[0] && tableData[0][colIndex] ? tableData[0][colIndex] : ''}
                                        onClick={() => handleCellClick(actualRowIndex, colIndex)}
                                        className={selectedCell.row === actualRowIndex && selectedCell.col === colIndex ? 'digiblocks-selected-cell' : ''}
                                    >
                                        <div className="digiblocks-cell-content">
                                            {renderCellIcon(actualRowIndex, colIndex)}
                                            <RichText
                                                tagName="span"
                                                value={cell}
                                                onChange={(value) => updateCellContent(value, actualRowIndex, colIndex)}
                                                placeholder={__("Cell text", "digiblocks")}
                                            />
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
                {hasFooter && tableData.length > 1 && (
                    <tfoot>
                        <tr>
                            {tableData[tableData.length - 1].map((cell, colIndex) => (
                                <td 
                                    key={`footer-${colIndex}`}
                                    onClick={() => handleCellClick(tableData.length - 1, colIndex)}
                                    className={selectedCell.row === tableData.length - 1 && selectedCell.col === colIndex ? 'digiblocks-selected-cell' : ''}
                                >
                                    <div className="digiblocks-cell-content">
                                        {renderCellIcon(tableData.length - 1, colIndex)}
                                        <RichText
                                            tagName="span"
                                            value={cell}
                                            onChange={(value) => updateCellContent(value, tableData.length - 1, colIndex)}
                                            placeholder={__("Footer text", "digiblocks")}
                                        />
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tfoot>
                )}
            </table>
        );
    };

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-table-block ${id} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    // Safety check for tableData
    if (!tableData || !Array.isArray(tableData) || tableData.length === 0) {
        return (
            <div {...blockProps}>
                <p>{__("Initializing table...", "digiblocks")}</p>
            </div>
        );
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="table-row-before"
                        label={__("Add Row Before", "digiblocks")}
                        onClick={() => {
                            if (selectedCell.row >= 0) {
                                addRow(selectedCell.row - 1);
                            } else {
                                addRow(0);
                            }
                        }}
                    />
                    <ToolbarButton
                        icon="table-row-after"
                        label={__("Add Row After", "digiblocks")}
                        onClick={() => {
                            if (selectedCell.row >= 0) {
                                addRow(selectedCell.row);
                            } else {
                                addRow(tableData.length - 1);
                            }
                        }}
                    />
                    <ToolbarButton
                        icon="table-row-delete"
                        label={__("Delete Row", "digiblocks")}
                        onClick={() => {
                            if (selectedCell.row >= 0) {
                                deleteRow(selectedCell.row);
                                setSelectedCell({ row: -1, col: -1 });
                            }
                        }}
                        disabled={tableData.length <= 1 || selectedCell.row < 0}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="table-col-before"
                        label={__("Add Column Before", "digiblocks")}
                        onClick={() => {
                            if (selectedCell.col >= 0) {
                                addColumn(selectedCell.col - 1);
                            } else {
                                addColumn(0);
                            }
                        }}
                    />
                    <ToolbarButton
                        icon="table-col-after"
                        label={__("Add Column After", "digiblocks")}
                        onClick={() => {
                            if (selectedCell.col >= 0) {
                                addColumn(selectedCell.col);
                            } else {
                                addColumn(tableData[0].length - 1);
                            }
                        }}
                    />
                    <ToolbarButton
                        icon="table-col-delete"
                        label={__("Delete Column", "digiblocks")}
                        onClick={() => {
                            if (selectedCell.col >= 0) {
                                deleteColumn(selectedCell.col);
                                setSelectedCell({ row: -1, col: -1 });
                            }
                        }}
                        disabled={tableData[0].length <= 1 || selectedCell.col < 0}
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

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className="digiblocks-table-instructions">
                    <p>{__("Click on any cell to select it and add icons, checks, crosses, or star ratings.", "digiblocks")}</p>
                </div>
                
                {selectedCell.row !== -1 && selectedCell.col !== -1 && renderCellControlToolbar()}
                
                <div className="digiblocks-table-container">
                    {renderTableContent()}
                </div>
                
                <div className="digiblocks-table-controls">
                    <div className="digiblocks-row-controls">
                        <Button
                            isPrimary
                            icon="plus"
                            onClick={() => addRow(tableData.length - 1)}
                        >
                            {__("Add Row", "digiblocks")}
                        </Button>
                    </div>
                    <div className="digiblocks-col-controls">
                        <Button
                            isPrimary
                            icon="plus"
                            onClick={() => addColumn(tableData[0].length - 1)}
                        >
                            {__("Add Column", "digiblocks")}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableEdit;