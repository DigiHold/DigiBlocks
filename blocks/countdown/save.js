/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Countdown block
 */
const CountdownSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        endDate,
        showDays,
        showHours,
        showMinutes,
        showSeconds,
        daysLabel,
        hoursLabel,
        minutesLabel,
        secondsLabel,
        displaySeparator,
        separatorType,
        expiredMessage,
        animation,
        align,
        style,
        boxesEqual,
        labelPosition
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-countdown",
		id,
        `align-${align}`,
        animation !== "none" ? `animate-${animation}` : "",
        style === "boxes" ? "digiblocks-countdown-boxes" : "digiblocks-countdown-simple",
        boxesEqual ? "digiblocks-countdown-equal-width" : "",
        `digiblocks-countdown-labels-${labelPosition}`,
        displaySeparator ? "digiblocks-countdown-has-separators" : "",
        displaySeparator ? `digiblocks-countdown-separator-${separatorType}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build block props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
        "data-end-date": endDate || "",
        "data-show-days": showDays ? "true" : "false",
        "data-show-hours": showHours ? "true" : "false",
        "data-show-minutes": showMinutes ? "true" : "false",
        "data-show-seconds": showSeconds ? "true" : "false",
        "data-days-label": daysLabel || "Days",
        "data-hours-label": hoursLabel || "Hours",
        "data-minutes-label": minutesLabel || "Minutes",
        "data-seconds-label": secondsLabel || "Seconds",
        "data-expired-message": expiredMessage || "Time's up!",
        "data-label-position": labelPosition || "bottom",
    });
    
    // Empty placeholder for the frontend JavaScript to populate
    return (
        <div {...blockProps}>
            <div className="digiblocks-countdown-container">
                {/* Initial placeholder structure - will be populated by JS on frontend */}
                {showDays && (
                    <>
                        <div className="digiblocks-countdown-item digiblocks-countdown-days">
                            <div className="digiblocks-countdown-item-inner">
                                {labelPosition === 'inside' ? (
                                    <>
                                        <div className="digiblocks-countdown-digit">00</div>
                                        <div className="digiblocks-countdown-label">{daysLabel || "Days"}</div>
                                    </>
                                ) : (
                                    <div className="digiblocks-countdown-digit">00</div>
                                )}
                            </div>
                            {labelPosition !== 'inside' && (
                                <div className="digiblocks-countdown-label">{daysLabel || "Days"}</div>
                            )}
                        </div>
                        
                        {displaySeparator && (showHours || showMinutes || showSeconds) && (
                            <div className="digiblocks-countdown-separator"></div>
                        )}
                    </>
                )}
                
                {showHours && (
                    <>
                        <div className="digiblocks-countdown-item digiblocks-countdown-hours">
                            <div className="digiblocks-countdown-item-inner">
                                {labelPosition === 'inside' ? (
                                    <>
                                        <div className="digiblocks-countdown-digit">00</div>
                                        <div className="digiblocks-countdown-label">{hoursLabel || "Hours"}</div>
                                    </>
                                ) : (
                                    <div className="digiblocks-countdown-digit">00</div>
                                )}
                            </div>
                            {labelPosition !== 'inside' && (
                                <div className="digiblocks-countdown-label">{hoursLabel || "Hours"}</div>
                            )}
                        </div>
                        
                        {displaySeparator && (showMinutes || showSeconds) && (
                            <div className="digiblocks-countdown-separator"></div>
                        )}
                    </>
                )}
                
                {showMinutes && (
                    <>
                        <div className="digiblocks-countdown-item digiblocks-countdown-minutes">
                            <div className="digiblocks-countdown-item-inner">
                                {labelPosition === 'inside' ? (
                                    <>
                                        <div className="digiblocks-countdown-digit">00</div>
                                        <div className="digiblocks-countdown-label">{minutesLabel || "Minutes"}</div>
                                    </>
                                ) : (
                                    <div className="digiblocks-countdown-digit">00</div>
                                )}
                            </div>
                            {labelPosition !== 'inside' && (
                                <div className="digiblocks-countdown-label">{minutesLabel || "Minutes"}</div>
                            )}
                        </div>
                        
                        {displaySeparator && showSeconds && (
                            <div className="digiblocks-countdown-separator"></div>
                        )}
                    </>
                )}
                
                {showSeconds && (
                    <div className="digiblocks-countdown-item digiblocks-countdown-seconds">
                        <div className="digiblocks-countdown-item-inner">
                            {labelPosition === 'inside' ? (
                                <>
                                    <div className="digiblocks-countdown-digit">00</div>
                                    <div className="digiblocks-countdown-label">{secondsLabel || "Seconds"}</div>
                                </>
                            ) : (
                                <div className="digiblocks-countdown-digit">00</div>
                            )}
                        </div>
                        {labelPosition !== 'inside' && (
                            <div className="digiblocks-countdown-label">{secondsLabel || "Seconds"}</div>
                        )}
                    </div>
                )}
            </div>
            
            <div className="digiblocks-countdown-expired" style={{ display: 'none' }}>
                {expiredMessage || "Time's up!"}
            </div>
        </div>
    );
};

export default CountdownSave;