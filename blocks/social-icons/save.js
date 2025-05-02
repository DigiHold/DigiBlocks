/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Social Icons block
 */
const SocialIconsSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        icons,
        align,
        animation,
        showLabels,
        labelPosition
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-social-icons",
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
        "data-custom-id": id,
    });

    // Render social icons
    const renderSocialIcons = () => {
        return icons.map((icon, index) => {
            // Skip rendering icons without iconValue or URL
            if (!icon.iconValue || !icon.iconValue.svg || !icon.url) {
                return null;
            }

            // Build rel attribute
            let relAttr = icon.openInNewTab ? "noopener noreferrer" : "";
            if (icon.rel) {
                relAttr = relAttr ? `${relAttr} ${icon.rel}` : icon.rel;
            }

            return (
                <a 
                    key={icon.id || index} 
                    href={icon.url}
                    className="digiblocks-social-icon"
                    target={icon.openInNewTab ? "_blank" : "_self"}
                    rel={relAttr || undefined}
                    aria-label={icon.label || icon.iconValue.name || "Social icon"}
                >
                    <div className="digiblocks-social-icon-icon">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: icon.iconValue.svg
                            }}
                        />
                    </div>
                    {showLabels && icon.label && (
                        <span className="digiblocks-social-icon-label">{icon.label}</span>
                    )}
                </a>
            );
        }).filter(Boolean); // Filter out null items (icons without iconValue or URL)
    };

    return (
        <div {...blockProps}>
            {renderSocialIcons()}
        </div>
    );
};

export default SocialIconsSave;