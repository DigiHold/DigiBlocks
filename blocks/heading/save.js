/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Heading block
 */
const HeadingSave = ({ attributes }) => {
    const { 
        id, 
        anchor, 
        customClasses, 
        content,
        level,
        align,
        animation,
        highlightText,
        highlightType,
        displaySeparator,
        separatorStyle,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab,
        linkRel
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-heading",
        `align-${align}`,
        animation !== "none" ? `animate-${animation}` : "",
        displaySeparator ? `has-separator separator-${separatorStyle}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const commonProps = {
        className: blockClasses,
        id: anchor || null,
        "data-custom-id": id
    };

    // Function to render highlighted content
    const renderHeadingWithHighlight = () => {
        if (!highlightText || highlightText.trim() === '') {
            return content;
        }

        // Regular expression to escape special characters
        const escapeRegExp = (string) => {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        const parts = content.split(new RegExp(`(${escapeRegExp(highlightText)})`, 'g'));
        
        return parts.map((part, index) => {
            if (part === highlightText) {
                return `<span class="digiblocks-highlight">${part}</span>`;
            }
            return part;
        }).join('');
    };

    // Create the proper heading tag based on level
    const HeadingTag = `h${level}`;

    // Get processed content with highlights
    const processedContent = highlightText && highlightText.trim() !== '' ? 
        <span dangerouslySetInnerHTML={{ __html: renderHeadingWithHighlight() }} /> : 
        <RichText.Content value={content} />;

    // If link is enabled, make the entire heading a link
    if (linkEnabled && linkUrl) {
        return (
            <a 
                href={linkUrl}
                target={linkOpenInNewTab ? "_blank" : "_self"}
                rel={linkOpenInNewTab ? "noopener noreferrer" : undefined}
                {...commonProps}
            >
                <HeadingTag className="digiblocks-heading-text">
                    {processedContent}
                </HeadingTag>
            </a>
        );
    }

    // Otherwise, render as a div with the heading inside
    return (
        <div {...commonProps}>
            <HeadingTag className="digiblocks-heading-text">
                {processedContent}
            </HeadingTag>
        </div>
    );
};

export default HeadingSave;