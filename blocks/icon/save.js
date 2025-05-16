/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Icon block
 */
const IconSave = ({ attributes }) => {
    const { 
        id,
		iconSource,
		customSvg,
        iconValue, 
        align, 
        animation, 
        hoverEffect,
        anchor,
        customClasses,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-icon",
		id,
        `align-${align}`,
        animation !== "none" ? `animate-${animation}` : "",
        hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
        customClasses || "" // Add custom classes if they exist
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const commonProps = {
        className: blockClasses,
        id: anchor || null,
    };

    // Render icon
    const renderIcon = () => {
		// For library icons
		if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
			return (
				<div className="digiblocks-icon">
					<span dangerouslySetInnerHTML={{ __html: iconValue.svg }} />
				</div>
			);
		}
		
		// For custom SVG
		if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
			return (
				<div className="digiblocks-icon">
					<span dangerouslySetInnerHTML={{ __html: customSvg }} />
				</div>
			);
		}
		
		return null;
	};

    // If link is enabled, make the entire icon a link
    if (linkEnabled && linkUrl) {
        return (
            <a 
                href={linkUrl}
                target={linkOpenInNewTab ? "_blank" : "_self"}
                rel={linkOpenInNewTab ? "noopener noreferrer" : undefined}
                {...commonProps}
            >
                {renderIcon()}
            </a>
        );
    }

    // Otherwise, render as a div
    return (
        <div {...commonProps}>
            {renderIcon()}
        </div>
    );
};

export default IconSave;