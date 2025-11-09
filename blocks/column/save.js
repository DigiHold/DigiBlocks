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
        anchor,
        customClasses,
        animation,
        animationDuration,
        animationDelay,
    } = attributes;

    // Build class names
    const classNames = `digiblocks-column ${id} ${customClasses || ''}${animation !== 'none' ? ` animate-${animation} digi-animate-hidden` : ''}`;
    
    // Save block props
    const blockProps = useBlockProps.save({
        className: classNames,
        id: anchor || null,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // Save inner blocks props
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return (
        <div {...innerBlocksProps} />
    );
};

export default ColumnSave;