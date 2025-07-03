/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Counter block
 */
const CounterSave = ({ attributes }) => {
    const { 
        id, 
        anchor, 
        customClasses,
        iconSource,
        customSvg,
        iconValue,
        startNumber,
        endNumber,
        counterPrefix,
        counterSuffix,
        title,
        description,
        align,
        animation,
        layoutStyle,
        displayIcon,
        numberWithCommas,
        thousandSeparator,
        decimalPlaces,
        decimalSeparator,
        animationDuration,
        animationDelay
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-counter",
        id,
        `align-${align || 'center'}`,
        `layout-${layoutStyle || 'stacked'}`,
        animation !== "none" ? `animate-${animation}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
        "data-start-value": startNumber || 0,
        "data-end-value": endNumber || 0,
        "data-animation-duration": animationDuration || 2000,
        "data-animation-delay": animationDelay || 0,
        "data-thousand-separator": numberWithCommas ? (thousandSeparator || ',') : '',
        "data-decimal-places": decimalPlaces || 0,
        "data-decimal-separator": decimalSeparator || '.',
    });

    // Render icon if provided
    const renderIcon = () => {
        // For library icons
        if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
            return (
                <div className="digiblocks-counter-icon">
                    <span dangerouslySetInnerHTML={{ __html: iconValue.svg }} />
                </div>
            );
        }
        
        // For custom SVG
        if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
            return (
                <div className="digiblocks-counter-icon">
                    <span dangerouslySetInnerHTML={{ __html: customSvg }} />
                </div>
            );
        }
        
        return null;
    };

    return (
        <div {...blockProps}>
            <div className="digiblocks-counter-inner">
                {displayIcon && renderIcon()}
                
                <div className="digiblocks-counter-content">
                    <div className="digiblocks-counter-number-wrapper">
                        {counterPrefix && (
                            <span className="digiblocks-counter-prefix">{counterPrefix}</span>
                        )}
                        <span className="digiblocks-counter-number">{startNumber || 0}</span>
                        {counterSuffix && (
                            <span className="digiblocks-counter-suffix">{counterSuffix}</span>
                        )}
                    </div>
                    
                    {title && (
                        <h3 className="digiblocks-counter-title">{title}</h3>
                    )}
                    
                    {description && (
                        <p className="digiblocks-counter-description">{description}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CounterSave;