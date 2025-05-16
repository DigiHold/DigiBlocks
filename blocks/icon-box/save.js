/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Icon Box block
 */
const IconBoxSave = ({ attributes }) => {
    const { 
        id,
        iconSource,
        customSvg,
        iconValue,
        title,
        showTitle,
        showContent,
        content,
        align,
        animation,
        hoverEffect,
        anchor,
        customClasses,
        linkEnabled,
        linkType,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
        buttonText
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-icon-box",
        id,
        `align-${align}`,
        animation !== "none" ? `animate-${animation}` : "",
        hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
        customClasses || "" // Add custom classes if they exist
    ]
        .filter(Boolean)
        .join(" ");

    // Get the block props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    // Render icon 
    const renderIcon = () => {
        // For library icons - this is the primary case
        if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
            return (
                <div className="digiblocks-icon-box-icon">
                    <span dangerouslySetInnerHTML={{ __html: iconValue.svg }} />
                </div>
            );
        }
        
        // For custom SVG
		if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
			return (
				<div className="digiblocks-icon-box-icon">
					<span dangerouslySetInnerHTML={{ __html: customSvg }} />
				</div>
			);
		}
        
        return null;
    };
    
    // Render button if needed
    const renderButton = () => {
        if (!linkEnabled || linkType !== 'button') {
            return null;
        }
        
        return (
            <div className="digiblocks-button-wrapper">
                <a 
                    className="digiblocks-button"
                    href={linkUrl || '#'}
                    target={linkOpenInNewTab ? "_blank" : "_self"}
                    rel={linkOpenInNewTab ? (linkRel || "noopener noreferrer") : linkRel}
                >
                    <RichText.Content tagName="span" value={buttonText} />
                </a>
            </div>
        );
    };

    // Box content structure
    const boxContent = (
        <div className="digiblocks-icon-box-content">
            {renderIcon()}
            {showTitle !== false && (
                <RichText.Content
                    tagName="h3"
                    className="digiblocks-icon-box-title"
                    value={title}
                />
            )}
            {showContent !== false && (
                <RichText.Content
                    tagName="p"
                    className="digiblocks-icon-box-text"
                    value={content}
                />
            )}
            {renderButton()}
        </div>
    );

    // Different markup based on link type
    if (linkEnabled && linkType === 'box' && linkUrl) {
        return (
            <a 
                {...blockProps}
                href={linkUrl}
                target={linkOpenInNewTab ? "_blank" : "_self"}
                rel={linkOpenInNewTab ? (linkRel || "noopener noreferrer") : linkRel}
            >
                {boxContent}
            </a>
        );
    }

    // Render as a div when no link or button is used
    return (
        <div {...blockProps}>
            {boxContent}
        </div>
    );
};

export default IconBoxSave;