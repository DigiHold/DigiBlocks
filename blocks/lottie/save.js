/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Lottie block
 */
const LottieSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        lottieSource,
        autoplay,
        loop,
        speed,
        showControls,
        animation,
        animationDuration,
        animationDelay,
    } = attributes;

    // If no source, don't render anything
    if (!lottieSource) {
        return null;
    }

    // Build class names
    const blockClasses = `digiblocks-lottie ${id} ${customClasses || ""}`;
    const animationClass = animation && animation !== 'none' ? ` animate-${animation} digi-animate-hidden` : '';

    // Build block props
    const blockProps = useBlockProps.save({
        className: blockClasses + animationClass,
        id: anchor || undefined,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    return (
        <div {...blockProps}>
            <div 
                className="digiblocks-lottie-container" 
                data-src={lottieSource}
                data-autoplay={autoplay.toString()}
                data-loop={loop.toString()}
                data-speed={speed.toString()}
                data-controls={showControls.toString()}
            >
                <canvas 
                    width="100%" 
                    height="100%" 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'block' 
                    }}
                ></canvas>
            </div>
        </div>
    );
};

export default LottieSave;