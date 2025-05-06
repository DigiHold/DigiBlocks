/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Spacer block
 */
const SpacerSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        height
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-spacer",
		id,
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    return (
        <div {...blockProps}>
            {/* Spacer content - empty by design */}
        </div>
    );
};

export default SpacerSave;