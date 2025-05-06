/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Separator block
 */
const SeparatorSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        contentType,
        content,
        align,
        iconValue,
        separatorStyle,
        primaryColor,
        secondaryColor,
        animation
    } = attributes;

    // Helper function to render SVG for special separator styles
    const renderStyleSVG = () => {
        switch (separatorStyle) {
            case 'wave':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={primaryColor}></path>
                    </svg>
                );
            case 'zigzag':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0" fill={primaryColor}></path>
					</svg>
                );
            case 'slant':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={primaryColor}></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    // Render icon if provided
    const renderIcon = () => {
        // Make sure we only try to display an icon if the iconValue exists and has a non-empty svg property
        if (!iconValue || !iconValue.svg || iconValue.svg.trim() === '') {
            return null;
        }
        
        return (
            <div className="digiblocks-separator-icon">
                <span dangerouslySetInnerHTML={{ __html: iconValue.svg }} />
            </div>
        );
    };

    // Build class names
    const blockClasses = [
        "digiblocks-separator",
		id,
        contentType !== 'none' && !['wave', 'zigzag', 'slant'].includes(separatorStyle) ? 'digiblocks-separator-has-content' : '',
        `align-${align}`,
        animation !== "none" ? `animate-${animation}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
        "data-separator-style": separatorStyle,
    });

    return (
        <div {...blockProps}>
            <div className="digiblocks-separator-container">
                {contentType !== 'none' && !['wave', 'zigzag', 'slant'].includes(separatorStyle) && (
                    <div className="digiblocks-separator-content">
                        {contentType === 'text' && (
                            <span className="digiblocks-separator-text">{content}</span>
                        )}
                        {contentType === 'icon' && renderIcon()}
                    </div>
                )}
                
                {['wave', 'zigzag', 'slant'].includes(separatorStyle) ? (
                    <div className="digiblocks-separator-shape">
                        {renderStyleSVG()}
                    </div>
                ) : (
                    <div className="digiblocks-separator-line"></div>
                )}
            </div>
        </div>
    );
};

export default SeparatorSave;