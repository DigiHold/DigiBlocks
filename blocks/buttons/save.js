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
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-buttons-block",
		id,
        animation !== "none" ? `animate-${animation}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return <div {...innerBlocksProps} />;
};

export default ButtonsSave;