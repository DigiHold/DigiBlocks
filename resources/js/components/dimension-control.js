/**
 * Dimension Control Component
 * A control for setting dimensions (padding, margin, etc.) with linking capability
 */

const { __ } = wp.i18n;
const { 
    Button, 
    Dashicon, 
    __experimentalToggleGroupControl: ToggleGroupControl, 
    __experimentalToggleGroupControlOption: ToggleGroupControlOption 
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Dimension Control Component
 *
 * @param {Object} props - Component props
 * @return {JSX.Element} Dimension control component
 */
const DimensionControl = ({
    label,
    values = { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
    onChange,
    allowNegative = false,
    isResponsive = false,
    deviceIcon = null,
    toggleDevice = null,
    deviceLabel = '',
    min = 0,
    max = 100,
    step = 1,
}) => {
    const units = [
        { value: "px", label: "px" },
        { value: "rem", label: "rem" },
        { value: "em", label: "em" },
        { value: "%", label: "%" },
    ];

    const defaultValues = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: "px",
    };

    // Linked state
    const [isLinked, setIsLinked] = useState(true);
    
    // Track if values are at default
    const [isDefault, setIsDefault] = useState(true);
    
    // Use global device state for local rendering
    const [activeDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // Subscribe to global device state changes if component is responsive
    useEffect(() => {
        if (isResponsive) {
            const unsubscribe = window.digi.responsiveState.subscribe((device) => {
                setLocalActiveDevice(device);
            });
            
            // Cleanup subscription on unmount
            return unsubscribe;
        }
    }, [isResponsive]);
    
    // Check if values are at default
    useEffect(() => {
        const isAtDefault = 
            values.top === defaultValues.top &&
            values.right === defaultValues.right &&
            values.bottom === defaultValues.bottom &&
            values.left === defaultValues.left &&
            values.unit === defaultValues.unit;
        
        setIsDefault(isAtDefault);
    }, [values]);

    // Handle value change
    const handleValueChange = (key, value) => {
        let newValues = { ...values };

        if (isLinked) {
            // When linked, update all values
            newValues = {
                ...newValues,
                top: value,
                right: value,
                bottom: value,
                left: value,
            };
        } else {
            // When unlinked, update only the specific value
            newValues[key] = value;
        }

        onChange(newValues);
    };

    // Handle unit change
    const handleUnitChange = (unit) => {
        onChange({
            ...values,
            unit,
        });
    };

    // Get max value based on unit
    const getMaxValue = (unit) => {
        switch (unit) {
            case "px":
                return 500;
            case "rem":
                return 30;
            case "em":
                return 30;
            case "%":
                return 100;
            default:
                return 100;
        }
    };

    // Get step based on unit
    const getStepValue = (unit) => {
        switch (unit) {
            case "px":
                return 1;
            case "rem":
                return 0.1;
            case "em":
                return 0.1;
            case "%":
                return 1;
            default:
                return 1;
        }
    };

    // Reset values to default
    const resetValues = () => {
        onChange({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            unit: "px",
        });
    };

    // Use deviceIcon and toggleDevice from props if provided (from ResponsiveControl)
    // or fallback to global state-driven versions
    const renderDeviceIcon = () => {
        if (deviceIcon) {
            return deviceIcon;
        }
        return window.digi.deviceIcons[activeDevice];
    };

    const handleToggleDevice = () => {
        if (toggleDevice) {
            toggleDevice();
        } else {
            window.digi.responsiveState.toggleDevice();
        }
    };

    return (
        <div className={`digiblocks-dimension-control ${isResponsive ? 'is-responsive' : ''}`}>
            <div className="digiblocks-control__header">
                <div className="digiblocks-responsive-label-wrap">
                    <span className="digiblocks-control-label">{label}</span>
                    {isResponsive && (
                        <Button 
                            className="digiblocks-responsive-common-button"
                            onClick={handleToggleDevice}
                            aria-label={deviceLabel || __(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                        >
                            {renderDeviceIcon()}
                        </Button>
                    )}
                </div>
                <div className="digiblocks-control__actions">
                    <div>
                        <Button
                            isSmall
                            className={`digiblocks-reset ${isDefault ? '' : ''}`}
                            icon="image-rotate"
                            onClick={resetValues}
                            disabled={isDefault}
                            aria-label={__("Reset", "digiblocks")}
                        />
                    </div>
                    <ToggleGroupControl
                        value={values.unit}
                        onChange={handleUnitChange}
                        isSmall
                        isBlock
						hideLabelFromVision
                        aria-label={__("Select Units", "digiblocks")}
						__next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    >
                        {units.map((unit) => (
                            <ToggleGroupControlOption
                                key={unit.value}
                                value={unit.value}
                                label={unit.label}
                            />
                        ))}
                    </ToggleGroupControl>
                </div>
            </div>
            
            <div className="digiblocks-spacing-inputs">
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={values.top}
                    onChange={(e) => handleValueChange("top", parseFloat(e.target.value) || 0)}
                    min={allowNegative ? -getMaxValue(values.unit) : 0}
                    max={getMaxValue(values.unit)}
                    step={getStepValue(values.unit)}
                    aria-label={__("Top", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={values.right}
                    onChange={(e) => handleValueChange("right", parseFloat(e.target.value) || 0)}
                    min={allowNegative ? -getMaxValue(values.unit) : 0}
                    max={getMaxValue(values.unit)}
                    step={getStepValue(values.unit)}
                    aria-label={__("Right", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={values.bottom}
                    onChange={(e) => handleValueChange("bottom", parseFloat(e.target.value) || 0)}
                    min={allowNegative ? -getMaxValue(values.unit) : 0}
                    max={getMaxValue(values.unit)}
                    step={getStepValue(values.unit)}
                    aria-label={__("Bottom", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={values.left}
                    onChange={(e) => handleValueChange("left", parseFloat(e.target.value) || 0)}
                    min={allowNegative ? -getMaxValue(values.unit) : 0}
                    max={getMaxValue(values.unit)}
                    step={getStepValue(values.unit)}
                    aria-label={__("Left", "digiblocks")}
                />
                <span
                    className={`digiblocks-spacing-link ${
                        !isLinked ? "digiblocks-spacing-control-disconnected" : ""
                    } dashicons ${
                        isLinked ? "dashicons-admin-links" : "dashicons-editor-unlink"
                    }`}
                    onClick={() => setIsLinked(!isLinked)}
                    title={isLinked ? __("Unlink values", "digiblocks") : __("Link values", "digiblocks")}
                    role="button"
                    tabIndex="0"
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            setIsLinked(!isLinked);
                        }
                    }}
                ></span>
            </div>
            <div className="digiblocks-spacing-labels">
                <span className="digiblocks-spacing-label">{__("Top", "digiblocks")}</span>
                <span className="digiblocks-spacing-label">{__("Right", "digiblocks")}</span>
                <span className="digiblocks-spacing-label">{__("Bottom", "digiblocks")}</span>
                <span className="digiblocks-spacing-label">{__("Left", "digiblocks")}</span>
                <span className="digiblocks-spacing-label digiblocks-spacing-link-label"></span>
            </div>
        </div>
    );
};

export default DimensionControl;