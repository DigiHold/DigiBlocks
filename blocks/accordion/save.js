/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Accordion block
 */
const AccordionSave = ({ attributes }) => {
    const { 
        id, 
        anchor, 
        customClasses, 
        items,
        iconPosition,
        iconType,
        allowMultipleOpen,
        animation,
        animationDuration,
        animationDelay,
    } = attributes;

    // Function to render icons based on iconType and state
    const renderItemIcon = (isOpen) => {
        if (iconType === 'plusMinus') {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={isOpen ? "M19 13H5v-2h14v2z" : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"} />
                </svg>
            );
        } else if (iconType === 'arrowUpDown') {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={isOpen ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"} />
                </svg>
            );
        }

        return null;
    };

    // Build class names
    const blockClasses = [
        "digiblocks-accordion",
		id,
        iconPosition === 'left' ? "icon-position-left" : "icon-position-right",
        allowMultipleOpen ? "allow-multiple-open" : "single-open",
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
        "data-icon-type": iconType,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    return (
        <div {...blockProps}>
            <div className="digiblocks-accordion-wrapper">
                {items.map((item) => (
                    <div 
                        key={item.id} 
                        className={`digiblocks-accordion-item ${item.isOpen ? 'is-active' : ''}`}
                        data-item-id={item.id}
                    >
                        <div className="digiblocks-accordion-header">
                            <RichText.Content
                                tagName="h4"
                                className="digiblocks-accordion-title"
                                value={item.title}
                            />
                            <span className="digiblocks-accordion-icon">
                                {renderItemIcon(item.isOpen)}
                            </span>
                        </div>

                        <div 
                            className="digiblocks-accordion-content" 
                            style={{ display: item.isOpen ? 'block' : 'none' }}
                        >
                            <RichText.Content
                                tagName="div"
                                value={item.content}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccordionSave;