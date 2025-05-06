/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Pricing Table block
 */
const PricingTableSave = ({ attributes }) => {
    const { 
        id, 
        anchor, 
        customClasses,
        columns,
        animation,
        ribbonStyle,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-pricing-table-block",
        id,
        animation !== "none" ? `animate-${animation}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Render featured ribbon for a column
    const renderRibbon = (column) => {
        if (!column.featured || ribbonStyle === 'none') {
            return null;
        }
        
        return (
            <div className="digiblocks-pricing-ribbon">
                <span className="digiblocks-pricing-ribbon-text">
                    Popular
                </span>
            </div>
        );
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

    return (
        <div className={blockClasses} id={anchor || null}>
            <div className="digiblocks-pricing-table">
                {columns && columns.map((column) => (
                    <div 
                        key={column.id} 
                        className={`digiblocks-pricing-column ${column.featured ? 'is-featured' : ''}`}
                    >
                        {renderRibbon(column)}
                        
                        <div className="digiblocks-pricing-header">
                            <RichText.Content
                                tagName="h3"
                                className="digiblocks-pricing-title"
                                value={column.title}
                            />
                            
                            <RichText.Content
                                tagName="p"
                                className="digiblocks-pricing-subtitle"
                                value={column.subtitle}
                            />
                            
                            <div className="digiblocks-pricing-price-container">
                                <div className="digiblocks-pricing-price">
                                    <RichText.Content
                                        tagName="span"
                                        className="digiblocks-pricing-currency"
                                        value={column.currency}
                                    />
                                    
                                    <RichText.Content
                                        tagName="span"
                                        className="digiblocks-pricing-amount"
                                        value={column.price}
                                    />
                                    
                                    <RichText.Content
                                        tagName="span"
                                        className="digiblocks-pricing-period"
                                        value={column.period}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="digiblocks-pricing-body">
                            <ul className="digiblocks-pricing-features">
                                {column.features && column.features.map((feature, featureIndex) => (
                                    <li key={`${column.id}-feature-${featureIndex}`} className="digiblocks-pricing-feature-item">
                                        {renderFeatureIcon(feature.included)}
                                        
                                        <RichText.Content
                                            tagName="span"
                                            className="digiblocks-pricing-feature-text"
                                            value={feature.text}
                                        />
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="digiblocks-pricing-button-container">
                                {column.buttonUrl ? (
                                    <a 
                                        href={column.buttonUrl}
                                        className="digiblocks-pricing-button"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <RichText.Content
                                            value={column.buttonText}
                                        />
                                    </a>
                                ) : (
                                    <span className="digiblocks-pricing-button">
                                        <RichText.Content
                                            value={column.buttonText}
                                        />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTableSave;