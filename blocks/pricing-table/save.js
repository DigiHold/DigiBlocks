/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Pricing Table block
 */
const PricingTableSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        tables,
        columns,
        tableStyle,
        align,
        animation,
        animationDuration,
        animationDelay,
        showRibbon,
        ribbonStyle,
        ribbonPosition
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-pricing-table-block",
        id,
        `align-${align}`,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        tableStyle ? `style-${tableStyle}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // Main wrapper with styles
    return (
        <div {...blockProps}>
            <div className="digiblocks-pricing-tables-container">
                {tables.map((table) => (
                    <div
                        key={table.id}
                        className={`digiblocks-pricing-table ${table.isHighlighted ? 'digiblocks-pricing-table-highlighted' : ''}`}
                        style={table.backgroundColor ? { backgroundColor: table.backgroundColor } : null}
                    >
                        {/* Ribbon (if enabled and highlighted) */}
                        {showRibbon && table.isHighlighted && (
                            <div className="digiblocks-pricing-table-ribbon">
                                <RichText.Content value={table.ribbonText} />
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
                            <RichText.Content
                                tagName="h3"
                                className="digiblocks-pricing-table-title"
                                value={table.title}
                                style={table.textColor ? { color: table.textColor } : null}
                            />
                            
                            {/* Price */}
                            <div className="digiblocks-pricing-table-price" style={table.textColor ? { color: table.textColor } : null}>
                                <RichText.Content
                                    tagName="span"
                                    className="digiblocks-pricing-table-amount"
                                    value={table.price}
                                />
                                <RichText.Content
                                    tagName="span"
                                    className="digiblocks-pricing-table-period"
                                    value={table.period}
                                />
                            </div>
                            
                            {/* Description */}
                            <RichText.Content
                                tagName="div"
                                className="digiblocks-pricing-table-description"
                                value={table.description}
                                style={table.textColor ? { color: table.textColor } : null}
                            />
                        </div>
                        
                        {/* Features */}
                        <div className="digiblocks-pricing-table-features">
                            {table.features.map((feature, featureIndex) => (
                                <div 
                                    key={`feature-${featureIndex}`}
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
                                    <RichText.Content
                                        tagName="div"
                                        className="digiblocks-pricing-table-feature-text"
                                        value={feature.text}
                                        style={table.textColor ? { color: table.textColor } : null}
                                    />
                                </div>
                            ))}
                        </div>
                        
						{/* Footer */}
						{table.buttonUrl && table.buttonUrl.trim() !== '' && (
							<div className="digiblocks-pricing-table-footer">
								<a 
									href={table.buttonUrl || '#'}
									className="digiblocks-pricing-table-button"
									style={table.buttonBackgroundColor ? { 
										backgroundColor: table.buttonBackgroundColor,
										color: table.buttonTextColor || '#ffffff'
									} : null}
									target={table.buttonOpenInNewTab ? '_blank' : undefined}
									rel={table.buttonOpenInNewTab 
										? `noopener noreferrer ${table.buttonRel || ''}`.trim()
										: table.buttonRel || undefined}
								>
									<RichText.Content
										tagName="span"
										value={table.buttonText}
									/>
								</a>
							</div>
						)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTableSave;