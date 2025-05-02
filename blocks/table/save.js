/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Table block
 */
const TableSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        tableData,
        hasHeader,
        hasFooter,
        responsiveMode,
        animation,
        cellControls
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-table-block",
        `responsive-${responsiveMode}`,
        animation !== "none" ? `animate-${animation}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Get cell control value
    const getCellControl = (row, col, controlType) => {
        const cellKey = `${row}-${col}`;
        if (cellControls[cellKey] && cellControls[cellKey][controlType]) {
            return cellControls[cellKey][controlType];
        }
        return null;
    };

    // Render icon for cell based on control type
    const renderCellIcon = (row, col) => {
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4.5 4.75a.75.75 0 0 1-1.08.04L3.47 7.84a.75.75 0 1 1 1.06-1.07l2.5 2.46l4.94-4.26z" />
                            </svg>
                        </span>
                    );
                case 'cross':
                    return (
                        <span className="digiblocks-cell-icon digiblocks-cell-cross">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    );
                default:
                    return null;
            }
        }
        
        // Check for stars
        if (cellControls[cellKey].stars) {
            const starCount = parseInt(cellControls[cellKey].stars);
            const stars = [];
            
            for (let i = 0; i < 5; i++) {
                if (i < starCount) {
                    // Filled star
                    stars.push(
                        <span key={`star-${i}`} className="digiblocks-cell-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                    );
                } else {
                    // Empty star
                    stars.push(
                        <span key={`star-empty-${i}`} className="digiblocks-cell-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" opacity="0.5">
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

    // Common props
    const commonProps = {
        className: blockClasses,
        id: anchor || null,
        "data-custom-id": id
    };

    return (
        <div {...commonProps}>
            <div className="digiblocks-table-container">
                <table className="digiblocks-table">
                    {hasHeader && (
                        <thead>
                            <tr>
                                {tableData[0].map((cell, colIndex) => (
                                    <th key={`header-${colIndex}`}>
                                        {renderCellIcon(0, colIndex)}
                                        <RichText.Content
                                            tagName="span"
                                            value={cell}
                                        />
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    )}
                    <tbody>
                        {tableData.slice(hasHeader ? 1 : 0, hasFooter ? tableData.length - 1 : tableData.length).map((row, rowIndex) => {
                            const actualRowIndex = hasHeader ? rowIndex + 1 : rowIndex;
                            return (
                                <tr key={`row-${actualRowIndex}`}>
                                    {row.map((cell, colIndex) => (
                                        <td 
                                            key={`cell-${actualRowIndex}-${colIndex}`} 
                                            data-label={hasHeader ? tableData[0][colIndex] : ''}
                                        >
                                            {renderCellIcon(actualRowIndex, colIndex)}
                                            <RichText.Content
                                                tagName="span"
                                                value={cell}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                    {hasFooter && (
                        <tfoot>
                            <tr>
                                {tableData[tableData.length - 1].map((cell, colIndex) => (
                                    <td key={`footer-${colIndex}`}>
                                        {renderCellIcon(tableData.length - 1, colIndex)}
                                        <RichText.Content
                                            tagName="span"
                                            value={cell}
                                        />
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    )}
                </table>
            </div>
        </div>
    );
};

export default TableSave;