/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Logo block
 */
const LogoSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        logoType,
        imageUrl,
        imageAlt,
        text,
        textIcon,
        iconPosition,
        animation,
        hoverEffect,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
    } = attributes;

    // Build block classes
    const blockClasses = [
        "digiblocks-logo",
		id,
        animation !== "none" ? `animate-${animation}` : "",
        hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const commonProps = {
        className: blockClasses,
        id: anchor || null,
    };

    // Render logo content
    const logoContent = logoType === 'image' ? (
        imageUrl ? (
            <img 
                src={imageUrl} 
                alt={imageAlt}
                className="digiblocks-logo-image"
            />
        ) : null
    ) : text || textIcon ? (
        <div className="digiblocks-logo-text-wrapper">
            {textIcon && textIcon.svg && iconPosition === 'above' && (
                <div className="digiblocks-logo-icon">
                    <span dangerouslySetInnerHTML={{ __html: textIcon.svg }} />
                </div>
            )}
            {textIcon && textIcon.svg && iconPosition === 'before' && (
                <div className="digiblocks-logo-icon">
                    <span dangerouslySetInnerHTML={{ __html: textIcon.svg }} />
                </div>
            )}
            {text && (
                <RichText.Content
                    className="digiblocks-logo-text"
                    tagName="span"
                    value={text}
                />
            )}
            {textIcon && textIcon.svg && iconPosition === 'after' && (
                <div className="digiblocks-logo-icon">
                    <span dangerouslySetInnerHTML={{ __html: textIcon.svg }} />
                </div>
            )}
        </div>
    ) : null;

    // Container content
    const containerContent = logoContent ? (
        <div className="digiblocks-logo-container">
            {logoContent}
        </div>
    ) : null;

    // Final output - If link is enabled but no URL, use the site URL
    const finalLinkUrl = linkEnabled ? (linkUrl || window.location.origin) : null;
    
    if (linkEnabled && finalLinkUrl && containerContent) {
        return (
            <div {...commonProps}>
                <a 
                    href={finalLinkUrl}
                    target={linkOpenInNewTab ? "_blank" : "_self"}
                    rel={linkOpenInNewTab ? "noopener noreferrer" : linkRel || undefined}
                    className="digiblocks-logo-link"
                >
                    {containerContent}
                </a>
            </div>
        );
    }

    // Return without link
    return (
        <div {...commonProps}>
            {containerContent}
        </div>
    );
};

export default LogoSave;