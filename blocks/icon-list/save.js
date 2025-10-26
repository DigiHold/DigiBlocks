/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Icon List block
 */
const IconListSave = ({ attributes }) => {
    const { 
        id, 
        anchor,
        customClasses,
        items,
        animation,
        animationDuration,
        animationDelay,
        hoverEffect,
        listLayout,
        listAlign,
        iconPosition
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-icon-list-block",
        id,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        hoverEffect !== "none" ? `has-hover-${hoverEffect}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build block props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // Render list items
    const renderListItems = () => {
        return items.map((item) => {
            // Render icon based on source
            const renderIcon = () => {
                // For library icons or when iconSource is not set (backward compatibility)
                if ((!item.iconSource || item.iconSource === 'library') && item.icon && item.icon.svg && item.icon.svg.trim() !== '') {
                    return (
                        <div className="digiblocks-icon-list-icon">
                            <span dangerouslySetInnerHTML={{ __html: item.icon.svg }} />
                        </div>
                    );
                }
                
                // For custom SVG
                if (item.iconSource === 'custom' && item.customSvg && item.customSvg.trim() !== '') {
                    return (
                        <div className="digiblocks-icon-list-icon">
                            <span dangerouslySetInnerHTML={{ __html: item.customSvg }} />
                        </div>
                    );
                }
                
                return null;
            };

            const itemContent = (
                <>
                    {renderIcon()}
                    <div className="digiblocks-icon-list-content">
                        <RichText.Content
                            value={item.content}
                        />
                    </div>
                </>
            );

            // Wrap content in link if enabled
            if (item.linkUrl) {
                // Handle rel attribute properly
                let relValue = item.linkRel || '';
                
                // Add noopener noreferrer when opening in new tab
                if (item.linkOpenInNewTab) {
                    const relParts = relValue.split(' ').filter(Boolean);
                    
                    if (!relParts.includes('noopener')) {
                        relParts.push('noopener');
                    }
                    
                    if (!relParts.includes('noreferrer')) {
                        relParts.push('noreferrer');
                    }
                    
                    relValue = relParts.join(' ');
                }
                
                return (
                    <li key={item.id} className="digiblocks-icon-list-item">
                        <a 
                            className="digiblocks-icon-list-child" 
                            href={item.linkUrl} 
                            target={item.linkOpenInNewTab ? "_blank" : "_self"} 
                            rel={relValue || undefined}
                        > 
                            {itemContent} 
                        </a> 
                    </li> 
                );
            }

            // Return plain list item
            return (
                <li key={item.id} className="digiblocks-icon-list-item">
                    <div className="digiblocks-icon-list-child">{itemContent}</div>
                </li>
            );
        });
    };

    return (
        <div {...blockProps}>
            <div className="digiblocks-icon-list-wrapper">
                <ul className={`digiblocks-icon-list ${iconPosition === 'after' ? 'icon-position-after' : 'icon-position-before'}`}>
                    {renderListItems()}
                </ul>
            </div>
        </div>
    );
};

export default IconListSave;