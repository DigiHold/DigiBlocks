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
        iconValue, 
        title, 
        content, 
        align, 
        animation, 
        hoverEffect,
        anchor,
        customClasses,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab,
        linkRel
    } = attributes;

    // Build class names
    const blockClasses = [
		"digiblocks-icon-box",
		`align-${align}`,
		animation !== "none" ? `animate-${animation}` : "",
		hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
		customClasses || "" // Add custom classes if they exist
	]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const commonProps = {
        className: blockClasses,
        id: anchor || null,
        "data-custom-id": id
    };

    // Box content structure (always the same regardless of link)
    const boxContent = (
        <div className="digiblocks-icon-box-content">
            {iconValue && iconValue.svg && iconValue.svg.trim() !== '' && (
                <div className="digiblocks-icon-box-icon">
                    <span dangerouslySetInnerHTML={{ __html: iconValue.svg }} />
                </div>
            )}
            <RichText.Content
                tagName="h3"
                className="digiblocks-icon-box-title"
                value={title}
            />
            <RichText.Content
                tagName="p"
                className="digiblocks-icon-box-text"
                value={content}
            />
        </div>
    );

    // If link is enabled, make the entire box a link
    if (linkEnabled && linkUrl) {
        return (
            <a 
                href={linkUrl}
                target={linkOpenInNewTab ? "_blank" : "_self"}
                rel={linkOpenInNewTab ? "noopener noreferrer" : undefined}
                {...commonProps}
            >
                {boxContent}
            </a>
        );
    }

    // Otherwise, render as a div
    return (
        <div {...commonProps}>
            {boxContent}
        </div>
    );
};

export default IconBoxSave;