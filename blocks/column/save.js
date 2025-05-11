/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;

/**
 * Column Block Save Component
 */
const ColumnSave = ({ attributes }) => {
    const {
        id,
        backgroundOverlay,
    } = attributes;

    // Build class names
    const classNames = `digiblocks-column ${id}`;
    
    // Save block props
    const blockProps = useBlockProps.save({
        className: classNames
    });

    // Save inner blocks props
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return (
        <div {...innerBlocksProps} />
    );
};

export default ColumnSave;