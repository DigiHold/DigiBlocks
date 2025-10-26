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
        animationDuration,
        animationDelay,
        cellControls
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-table-block",
		id,
        `responsive-${responsiveMode}`,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
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
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        </span>
                    );
				case 'warning':
					return (
						<span className="digiblocks-cell-icon digiblocks-cell-warning">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
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
    const blockProps = {
        className: blockClasses,
        id: anchor || null,
    };

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    return (
        <div {...blockProps}>
            <div className="digiblocks-table-container">
                <table className="digiblocks-table">
                    {hasHeader && (
                        <thead>
                            <tr>
                                {tableData[0].map((cell, colIndex) => (
                                    <th key={`header-${colIndex}`}>
										<div className="digiblocks-cell-content">
											{renderCellIcon(0, colIndex)}
											<RichText.Content
												tagName="span"
												value={cell}
											/>
										</div>
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
											<div className="digiblocks-cell-content">
												{renderCellIcon(actualRowIndex, colIndex)}
												<RichText.Content
													tagName="span"
													value={cell}
												/>
											</div>
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
										<div className="digiblocks-cell-content">
											{renderCellIcon(tableData.length - 1, colIndex)}
											<RichText.Content
												tagName="span"
												value={cell}
											/>
										</div>
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