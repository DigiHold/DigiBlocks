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
        hoverEffect,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-icon-list-block",
		id,
        animation !== "none" ? `animate-${animation}` : "",
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

    // Render list items
    const renderListItems = () => {
        return items.map((item) => {
            const itemContent = (
                <>
                    {item.icon && item.icon.svg && (
						<div className="digiblocks-icon-list-icon">
							<span dangerouslySetInnerHTML={{ __html: item.icon.svg }} />
						</div>
					)}
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
                <ul className="digiblocks-icon-list">
                    {renderListItems()}
                </ul>
            </div>
        </div>
    );
};

export default IconListSave;