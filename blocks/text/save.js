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
        hoverEffect,
        anchor,
        customClasses,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-text",
        id,
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

    return (
        <RichText.Content
            {...blockProps}
            tagName={htmlTag}
            value={content}
        />
    );
};

export default TextSave;