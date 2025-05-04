/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Button block
 */
const ButtonSave = ({ attributes }) => {
    const { 
        id, 
        anchor,
        customClasses,
        text,
        url,
        opensInNewTab,
        rel,
        iconValue,
        iconPosition,
        size,
        fill,
        onlyIcon,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-button",
        size,
        fill ? 'is-fill' : '',
        customClasses || ''
    ]
        .filter(Boolean)
        .join(" ");

    const buttonContent = (
        <>
            {iconValue && iconValue.svg && iconPosition === 'left' && (
                <span 
                    className="digiblocks-button-icon"
                    dangerouslySetInnerHTML={{ __html: iconValue.svg }}
                />
            )}
            {!onlyIcon && (
                <RichText.Content
                    value={text}
                />
            )}
            {iconValue && iconValue.svg && iconPosition === 'right' && (
                <span 
                    className="digiblocks-button-icon"
                    dangerouslySetInnerHTML={{ __html: iconValue.svg }}
                />
            )}
        </>
    );

    // Return button as link or div based on URL
    if (url) {
        return (
			<a
            
                {...useBlockProps.save({
                    className: blockClasses,
                    id: anchor || null,
                    "data-custom-id": id,
                    href: url,
                    target: opensInNewTab ? '_blank' : undefined,
                    rel: rel ? 'noopener noreferrer' : undefined,
                })}
            >
                {buttonContent}
            </a>
        );
    }

    return (
        <div
            {...useBlockProps.save({
                className: blockClasses,
                id: anchor || null,
                "data-custom-id": id,
            })}
        >
            {buttonContent}
        </div>
    );
};

export default ButtonSave;