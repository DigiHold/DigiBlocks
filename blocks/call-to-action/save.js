/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Call to Action block
 */
const CallToActionSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        style,
        horizontalLayout,
        title,
        content,
        headingTag,
        backgroundImage,
        backgroundType,
        align,
        animation,
        animationDuration,
        animationDelay,
        buttons,
        highlightText,
        highlightType,
        highlightColor
    } = attributes;

    // Block classes
    const blockClasses = [
        "digiblocks-cta",
		id,
        `style-${style}`,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        customClasses
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
		id: anchor || null,
		"data-style": style,
		"data-background-type": backgroundType || 'color',
		"data-align": align || 'left',
		"data-highlight-text": highlightText || '',
		"data-highlight-type": highlightType || 'none',
		"data-highlight-color": highlightColor || '#ffde59'
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // Generate heading tag (h1-h6)
    const HeadingTag = headingTag || 'h2';

    // Render buttons
    const renderButtons = () => {
        if (!buttons || buttons.length === 0) return null;
        
        return (
            <div className="digiblocks-cta-buttons">
                {buttons.map((button) => {
                    const buttonClasses = [
                        'digiblocks-cta-button',
                        button.isPrimary ? 'is-primary' : '',
                        button.isFullWidth ? 'is-full-width' : '',
                    ].filter(Boolean).join(' ');
                    
                    const target = button.openInNewTab ? '_blank' : undefined;
                    const rel = button.rel || undefined;
                    
                    return (
                        <a 
                            key={button.id} 
                            className={buttonClasses}
                            href={button.url || '#'}
                            target={target}
                            rel={rel}
                            data-button-id={button.id}
                        >
                            {button.text || 'Click Here'}
                        </a>
                    );
                })}
            </div>
        );
    };

    // Generate block content based on chosen style
    const getBlockContent = () => {
        switch (style) {
            case 'split':
                return (
                    <div className="digiblocks-cta-split-container">
                        <div className="digiblocks-cta-content-container">
                            <div className={`digiblocks-cta-container ${horizontalLayout ? 'digiblocks-cta-horizontal' : ''}`}>
								<div className="digiblocks-cta-content-wrapper">
									<RichText.Content
										tagName={HeadingTag}
										className="digiblocks-cta-title"
										value={title}
									/>
									<RichText.Content
										tagName="p"
										className="digiblocks-cta-content"
										value={content}
									/>
								</div>
                                {renderButtons()}
                            </div>
                        </div>
                        <div className="digiblocks-cta-image-container"></div>
                    </div>
                );
                
            case 'cover':
                return (
                    <>
                        <div className="digiblocks-cta-background"></div>
                        <div className="digiblocks-cta-overlay"></div>
                        <div className={`digiblocks-cta-container ${horizontalLayout ? 'digiblocks-cta-horizontal' : ''}`}>
							<div className="digiblocks-cta-content-wrapper">
								<RichText.Content
									tagName={HeadingTag}
									className="digiblocks-cta-title"
									value={title}
								/>
								<RichText.Content
									tagName="p"
									className="digiblocks-cta-content"
									value={content}
								/>
							</div>
                            {renderButtons()}
                        </div>
                    </>
                );
                
            default: // 'basic', 'box', 'modern', 'gradient', 'minimal', 'callout', 'banner'
                return (
                    <div className={`digiblocks-cta-container ${horizontalLayout ? 'digiblocks-cta-horizontal' : ''}`}>
						<div className="digiblocks-cta-content-wrapper">
							<RichText.Content
								tagName={HeadingTag}
								className="digiblocks-cta-title"
								value={title}
							/>
							<RichText.Content
								tagName="p"
								className="digiblocks-cta-content"
								value={content}
							/>
						</div>
                        {renderButtons()}
                    </div>
                );
        }
    };

    return (
        <div {...blockProps}>
            {getBlockContent()}
        </div>
    );
};

export default CallToActionSave;