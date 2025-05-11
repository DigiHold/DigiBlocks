/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, useInnerBlocksProps } = wp.blockEditor;

/**
 * Container Block Save Component
 */
const ContainerSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        backgroundVideo,
        backgroundVideoFallbackImage,
        animation,
    } = attributes;

    // Build class names
    const classNames = `digiblocks-container alignfull ${id} ${customClasses || ''}${animation !== 'none' ? ` animate-${animation}` : ''}`;
    
    // Save block props
    const blockProps = useBlockProps.save({
        className: classNames,
        id: anchor || null,
    });

    // Save inner blocks props
    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'digiblocks-container-inner'
    });

    return (
        <div {...blockProps}>
            {/* Background video if set */}
            {backgroundVideo && backgroundVideo.url && (
                <div className="digiblocks-bg-video-container">
                    <video className="digiblocks-bg-video" autoPlay muted loop playsInline poster={backgroundVideoFallbackImage?.url || ''}>
                        <source src={backgroundVideo.url} type="video/mp4" />
                    </video>
                </div>
            )}
            
            {/* Container content */}
            <div {...innerBlocksProps} />
        </div>
    );
};

export default ContainerSave;