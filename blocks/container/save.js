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
		isNested,
        id,
        anchor,
        customClasses,
        backgroundVideo,
        backgroundVideoFallbackImage,
        animation,
        animationDuration,
        animationDelay,
    } = attributes;

    // Build class names
    const classNames = `digiblocks-container ${isNested ? '' : 'alignfull'} ${id} ${customClasses || ''}${animation !== 'none' ? ` animate-${animation} digi-animate-hidden` : ''}`;
    
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