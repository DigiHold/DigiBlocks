/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;

/**
 * Row Block Save Component
 */
const RowSave = ({ attributes }) => {
    const {
        isNested,
        id,
        anchor,
        customClasses,
        backgroundVideo,
        backgroundVideoFallbackImage,
        animation,
    } = attributes;

    // Build class names
    const classNames = `digiblocks-row ${id} ${customClasses || ''} ${isNested ? 'is-nested' : ''}${animation !== 'none' ? ` animate-${animation}` : ''}`;
    
    // Configure block props and inner blocks props based on nesting
    let blockProps, innerBlocksProps;

    if (isNested) {
        // For nested rows, use regular useBlockProps.save and get innerBlocks children separately
        blockProps = useBlockProps.save({
            className: classNames,
            id: anchor || null,
        });

        innerBlocksProps = useInnerBlocksProps.save();
    } else {
        // For non-nested rows, use useBlockProps.save for main div and useInnerBlocksProps.save for inner wrapper
        blockProps = useBlockProps.save({
            className: classNames,
            id: anchor || null,
        });

        innerBlocksProps = useInnerBlocksProps.save({
            className: 'digiblocks-row-inner'
        });
    }

    // Background video component
    const BackgroundVideo = () => {
        if (!backgroundVideo?.url) return null;
        
        return (
            <div className="digiblocks-bg-video-container">
                <video className="digiblocks-bg-video" autoPlay muted loop playsInline poster={backgroundVideoFallbackImage?.url || ''}>
                    <source src={backgroundVideo.url} type="video/mp4" />
                </video>
            </div>
        );
    };

    return isNested ? (
        <div {...blockProps}>
            {backgroundVideo && backgroundVideo.url && <BackgroundVideo />}
            {innerBlocksProps.children}
        </div>
    ) : (
        <div {...blockProps}>
            {backgroundVideo && backgroundVideo.url && <BackgroundVideo />}
            <div {...innerBlocksProps} />
        </div>
    );
};

export default RowSave;