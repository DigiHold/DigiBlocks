/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Icon Box block
 */
const IconBoxSave = ({ attributes }) => {
    const {
        id,
        iconSource,
        customSvg,
        iconValue,
        title,
        showTitle,
        showContent,
		showBadge,
		badgeText,
        content,
        animation,
        animationDuration,
        animationDelay,
        hoverEffect,
        anchor,
        customClasses,
        linkEnabled,
        linkType,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
        buttonText,
        buttonIconSource,
        buttonIcon,
        buttonCustomSvg,
        buttonIconPosition
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-icon-box",
        id,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
        customClasses || "" // Add custom classes if they exist
    ]
        .filter(Boolean)
        .join(" ");

    // Get the block props
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
        // For library icons - this is the primary case
        if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
            return (
                <div className="digiblocks-icon-box-icon">
                    <span dangerouslySetInnerHTML={{ __html: iconValue.svg }} />
                </div>
            );
        }
        
        // For custom SVG
		if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
			return (
				<div className="digiblocks-icon-box-icon">
					<span dangerouslySetInnerHTML={{ __html: customSvg }} />
				</div>
			);
		}
        
        return null;
    };

	// Render badge
	const renderBadge = () => {
		if (!showBadge) {
			return null;
		}
		
		return (
			<span className="digiblocks-icon-box-badge">
				{badgeText || 'Popular'}
			</span>
		);
	};
    
    // Render button if needed
    const renderButton = () => {
        if (!linkEnabled || linkType !== 'button') {
            return null;
        }

        let buttonIconElement = null;

        if (buttonIconSource === 'library' && buttonIcon && buttonIcon.svg) {
            buttonIconElement = (
                <span
                    className="digiblocks-button-icon"
                    dangerouslySetInnerHTML={{ __html: buttonIcon.svg }}
                />
            );
        } else if (buttonIconSource === 'custom' && buttonCustomSvg && buttonCustomSvg.trim() !== '') {
            buttonIconElement = (
                <span
                    className="digiblocks-button-icon"
                    dangerouslySetInnerHTML={{ __html: buttonCustomSvg }}
                />
            );
        }

        return (
            <div className="digiblocks-button-wrapper">
                <a
                    className="digiblocks-button"
                    href={linkUrl || '#'}
                    target={linkOpenInNewTab ? "_blank" : "_self"}
                    rel={linkOpenInNewTab ? (linkRel || "noopener noreferrer") : linkRel}
                >
                    {buttonIconPosition === 'before' && buttonIconElement}
                    <RichText.Content tagName="span" value={buttonText} />
                    {buttonIconPosition === 'after' && buttonIconElement}
                </a>
            </div>
        );
    };

    // Box content structure
    const boxContent = (
        <>
			{renderBadge()}
            {renderIcon()}
            <div className="digiblocks-icon-box-content">
                {showTitle !== false && (
                    <RichText.Content
                        tagName="h3"
                        className="digiblocks-icon-box-title"
                        value={title}
                    />
                )}
                {showContent !== false && (
                    <RichText.Content
                        tagName="p"
                        className="digiblocks-icon-box-text"
                        value={content}
                    />
                )}
                {renderButton()}
            </div>
        </>
    );

    // Different markup based on link type
    if (linkEnabled && linkType === 'box' && linkUrl) {
        return (
            <a 
                {...blockProps}
                href={linkUrl}
                target={linkOpenInNewTab ? "_blank" : "_self"}
                rel={linkOpenInNewTab ? (linkRel || "noopener noreferrer") : linkRel}
            >
                {boxContent}
            </a>
        );
    }

    // Render as a div when no link or button is used
    return (
        <div {...blockProps}>
            {boxContent}
        </div>
    );
};

export default IconBoxSave;