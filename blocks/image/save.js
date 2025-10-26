/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Image block
 */
const ImageSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        imageUrl,
        altText,
        title,
        animation,
        animationDuration,
        animationDelay,
        url,
        opensInNewTab,
        rel,
        overlayEnable,
    } = attributes;

    // Block class names
    const blockClassNames = [
        'digiblocks-image',
        id,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        customClasses || '',
    ].filter(Boolean).join(' ');

    // Block props
    const blockProps = useBlockProps.save({
        className: blockClassNames,
        id: anchor || undefined
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // If no image, return null
    if (!imageUrl) {
        return null;
    }

    // Prepare the image content
    let imageContent = (
        <>
            <img 
                src={imageUrl} 
                alt={altText || ''} 
                title={title || ''}
            />
            {overlayEnable && (
                <div className="digiblocks-image-overlay"></div>
            )}
        </>
    );

    // Wrap with link if URL is provided
    if (url) {
        imageContent = (
            <a 
                href={url}
                target={opensInNewTab ? '_blank' : undefined}
                rel={rel ? 'noopener noreferrer' : undefined}
            >
                {imageContent}
            </a>
        );
    }

    return (
        <div {...blockProps}>
            {imageContent}
        </div>
    );
};

export default ImageSave;