/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Text block
 */
const TextSave = ({ attributes }) => {
    const { 
        id,
        htmlTag,
        content,
        animation,
        animationDuration,
        animationDelay,
        hoverEffect,
        anchor,
        customClasses,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-text",
        id,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
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

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    return (
        <RichText.Content
            {...blockProps}
            tagName={htmlTag}
            value={content}
        />
    );
};

export default TextSave;