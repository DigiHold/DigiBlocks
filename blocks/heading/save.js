/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Heading block
 */
const HeadingSave = ({ attributes }) => {
    const { 
        id, 
        anchor, 
        customClasses, 
        content,
        headingTag,
        animation,
        animationDuration,
        animationDelay,
        displaySeparator,
        separatorStyle,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-heading",
		id,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        displaySeparator ? `has-separator separator-${separatorStyle}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = {
        className: blockClasses,
        id: anchor || null,
    };

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // Create the proper heading tag
    const TagName = headingTag;

    // Get processed content
    const processedContent = <RichText.Content value={content} />;

    // If link is enabled, make the entire heading a link
    if (linkEnabled && linkUrl) {
        return (
            <a 
                href={linkUrl}
                target={linkOpenInNewTab ? "_blank" : "_self"}
                rel={linkOpenInNewTab ? "noopener noreferrer" : undefined}
                {...blockProps}
            >
                <TagName className="digiblocks-heading-text">
                    {processedContent}
                </TagName>
            </a>
        );
    }

    // Otherwise, render as a div with the heading inside
    return (
        <div {...blockProps}>
            <TagName className="digiblocks-heading-text">
                {processedContent}
            </TagName>
        </div>
    );
};

export default HeadingSave;