/**
 * WordPress dependencies
 */
const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;

/**
 * Save function for the Buttons block
 */
const ButtonsSave = ({ attributes }) => {
    const { 
        id, 
        anchor,
        customClasses,
        animation,
        animationDuration,
        animationDelay,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-buttons-block",
		id,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return <div {...innerBlocksProps} />;
};

export default ButtonsSave;