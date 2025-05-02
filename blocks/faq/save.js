/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the FAQ block
 */
const FAQSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        items,
        titleTag,
        layout,
        questionPrefix,
        answerPrefix,
        animation,
        allowMultipleOpen,
        iconType,
        iconPosition,
        schemaEnabled
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-faq-block",
        layout || 'boxed',
        customClasses || "",
        animation !== "none" ? `animate-${animation}` : ""
    ]
        .filter(Boolean)
        .join(" ");

    // Utility function to render icon based on type and state
    const getIcon = (isOpen, type = iconType) => {
        switch (type) {
            case 'plusMinus':
                return isOpen ? (
                    <span className="digiblocks-faq-icon-minus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                        </svg>
                    </span>
                ) : (
                    <span className="digiblocks-faq-icon-plus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </span>
                );
            case 'arrow':
                return (
                    <span className={`digiblocks-faq-icon-arrow ${isOpen ? 'is-open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                );
            case 'chevron':
                return (
                    <span className={`digiblocks-faq-icon-chevron ${isOpen ? 'is-open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                        </svg>
                    </span>
                );
            case 'triangle':
                return (
                    <span className={`digiblocks-faq-icon-triangle ${isOpen ? 'is-open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </span>
                );
            case 'circlePlusMinus':
                return isOpen ? (
                    <span className="digiblocks-faq-icon-circle-minus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </span>
                ) : (
                    <span className="digiblocks-faq-icon-circle-plus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </span>
                );
            default:
                return isOpen ? (
                    <span className="digiblocks-faq-icon-minus">—</span>
                ) : (
                    <span className="digiblocks-faq-icon-plus">+</span>
                );
        }
    };

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
        "data-custom-id": id,
        "data-allow-multiple": allowMultipleOpen ? "true" : "false"
    });

    // Render FAQ items
    const renderFAQItems = () => {
        if (!items || items.length === 0) {
            return null;
        }
        
        return items.map((item, index) => {
            return (
                <div
                    key={item.id}
                    className={`digiblocks-faq-item ${item.isOpen ? 'is-active' : ''}`}
                    data-item-id={item.id}
                >
                    <div className="digiblocks-faq-question">
                        <div className="digiblocks-faq-question-text">
                            {questionPrefix && (
                                <span className="digiblocks-faq-question-prefix">{questionPrefix}</span>
                            )}
                            <RichText.Content
                                tagName={titleTag || 'h3'}
                                value={item.title}
                                className="digiblocks-faq-question-text-content"
                            />
                        </div>
                        <span className="digiblocks-faq-question-icon">
                            {getIcon(item.isOpen)}
                        </span>
                    </div>
                    <div className="digiblocks-faq-answer">
                        <div className="digiblocks-faq-answer-content">
                            {answerPrefix && (
                                <span className="digiblocks-faq-answer-prefix">{answerPrefix}</span>
                            )}
                            <RichText.Content
                                tagName="div"
                                className="digiblocks-faq-answer-text"
                                value={item.content}
                            />
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div {...blockProps}>
            <div className="digiblocks-faq-items">
                {renderFAQItems()}
            </div>
        </div>
    );
};

export default FAQSave;