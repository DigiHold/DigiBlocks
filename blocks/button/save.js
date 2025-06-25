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
        iconSource,
		customSvg,
        iconValue,
        iconPosition,
        size,
        fill,
        onlyIcon,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-button",
		id,
        size,
        fill ? 'is-fill' : '',
        customClasses || ''
    ]
        .filter(Boolean)
        .join(" ");

	// Render icon
    const renderIcon = () => {
		// For library icons
		if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
			return (
				<span 
					className="digiblocks-button-icon"
					dangerouslySetInnerHTML={{ __html: iconValue.svg }}
				/>
			);
		}
		
		// For custom SVG
		if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
			return (
				<span 
					className="digiblocks-button-icon"
					dangerouslySetInnerHTML={{ __html: customSvg }}
				/>
			);
		}
		
		return null;
	};

    const buttonContent = (
        <>
            {iconPosition === 'left' && (
                renderIcon()
            )}
            {!onlyIcon && (
                <RichText.Content
                    value={text}
                />
            )}
            {iconPosition === 'right' && (
                renderIcon()
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
            })}
        >
            {buttonContent}
        </div>
    );
};

export default ButtonSave;