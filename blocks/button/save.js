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
		animation,
        animationDuration,
        animationDelay,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-button",
		id,
        size,
        fill ? 'is-fill' : '',
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        customClasses || ''
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

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
        <div {...blockProps}>
            {buttonContent}
        </div>
    );
};

export default ButtonSave;