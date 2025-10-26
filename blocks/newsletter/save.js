/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Newsletter block
 */
const NewsletterSave = ({ attributes }) => {
    const { 
        id,
        anchor,
        customClasses,
        title,
        showTitle,
        description,
        showDescription,
        emailPlaceholder,
        namePlaceholder,
        buttonText,
        showNameField,
        successMessage,
        errorMessage,
        animation,
        animationDuration,
        animationDelay,
    } = attributes;

    // Build class names
    const animationClass = ('none' !== animation) ? ` animate-${animation} digi-animate-hidden` : '';
    const blockClasses = `digiblocks-newsletter ${id}${animationClass} ${customClasses || ""}`;

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

    return (
        <div {...blockProps}>
            {showTitle && (
                <RichText.Content
                    tagName="h3"
                    className="digiblocks-newsletter-title"
                    value={title}
                />
            )}

            {showDescription && (
                <RichText.Content
                    tagName="p"
                    className="digiblocks-newsletter-description"
                    value={description}
                />
            )}

            <form className="digiblocks-newsletter-form" method="post">
                <div className="digiblocks-newsletter-fields">
                    {showNameField && (
                        <div className="digiblocks-newsletter-field">
                            <div className="digiblocks-newsletter-input-container">
                                <input
                                    type="text"
                                    name="digiblocks_newsletter_name"
                                    className="digiblocks-newsletter-input"
                                    placeholder={namePlaceholder}
                                    required={showNameField}
                                />
                                <svg className="digiblocks-newsletter-input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">
                                    <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                                </svg>
                            </div>
                        </div>
                    )}
                    <div className="digiblocks-newsletter-field">
                        <div className="digiblocks-newsletter-input-container">
                            <input
                                type="email"
                                name="digiblocks_newsletter_email"
                                className="digiblocks-newsletter-input"
                                placeholder={emailPlaceholder}
                                required
                            />
                            <svg className="digiblocks-newsletter-input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
                                <path d="M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <button type="submit" className="digiblocks-newsletter-button">
                    <RichText.Content value={buttonText} />
                </button>

                {/* Hidden fields for form processing */}
                <input type="hidden" name="action" value="digiblocks_newsletter_subscribe" />
                <input type="hidden" name="digiblocks_newsletter_nonce" value="" />
                <input type="hidden" name="block_id" value={id} />
            </form>

            <div className="digiblocks-newsletter-message success" style={{ display: 'none' }}>
                {successMessage}
            </div>
            <div className="digiblocks-newsletter-message error" style={{ display: 'none' }}>
                {errorMessage}
            </div>
        </div>
    );
};

export default NewsletterSave;