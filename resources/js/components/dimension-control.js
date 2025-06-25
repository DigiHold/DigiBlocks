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
    values = { top: '', right: '', bottom: '', left: '', unit: 'px', isLinked: true },
    onChange,
    allowNegative = false,
    isResponsive = false,
    deviceIcon = null,
    toggleDevice = null,
    deviceLabel = '',
    min = 0,
    max = 100,
    step = 1,
    units = [
        { value: "px", label: "px" },
        { value: "rem", label: "rem" },
        { value: "em", label: "em" },
        { value: "%", label: "%" },
    ]
}) => {
    // Use the isLinked value from props, with fallback to true
    const [isLinked, setIsLinked] = useState(values.isLinked !== undefined ? values.isLinked : true);
    
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
    
    // Update local isLinked state when values.isLinked changes
    useEffect(() => {
        if (values.isLinked !== undefined && values.isLinked !== isLinked) {
            setIsLinked(values.isLinked);
        }
    }, [values.isLinked]);
    
    // Check if values are at default (all empty)
    useEffect(() => {
        const isAtDefault = 
            values.top === '' &&
            values.right === '' &&
            values.bottom === '' &&
            values.left === '';
        
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
        
        // If at least one value is not empty, ensure all empty values are 0
        const hasAnyValue = ['top', 'right', 'bottom', 'left'].some(
            side => newValues[side] !== '' && newValues[side] !== undefined
        );
        
        if (hasAnyValue) {
            ['top', 'right', 'bottom', 'left'].forEach(side => {
                if (newValues[side] === '' || newValues[side] === undefined) {
                    newValues[side] = 0;
                }
            });
        }

        // Always include the isLinked state
        newValues.isLinked = isLinked;

        onChange(newValues);
    };

    // Handle unit change
    const handleUnitChange = (unit) => {
        onChange({
            ...values,
            unit,
            isLinked, // Include current isLinked state
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

    // Reset values to empty
    const resetValues = () => {
        const newValues = {
            top: '',
            right: '',
            bottom: '',
            left: '',
            unit: values.unit,
            isLinked: true, // Reset to linked state
        };
        onChange(newValues);
        setIsLinked(true); // Also update local state
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

    // Handle input change - special logic to handle both numbers and empty strings
    const handleInputChange = (key, e) => {
        // Get value from input
        const inputValue = e.target.value;
        
        // If input is empty or just a minus sign (for negative values), set as empty string
        if (inputValue === '' || inputValue === '-') {
            handleValueChange(key, '');
        } else {
            // Parse as number otherwise
            const numValue = parseFloat(inputValue);
            if (!isNaN(numValue)) {
                handleValueChange(key, numValue);
            }
        }
    };

    // Handle link toggle
    const handleLinkToggle = () => {
        const newLinkedState = !isLinked;
        setIsLinked(newLinkedState);
        // Save the linked state to attributes
        onChange({
            ...values,
            isLinked: newLinkedState
        });
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
                            className="digiblocks-reset"
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
                    value={values.top === '' ? '' : values.top}
                    onChange={(e) => handleInputChange("top", e)}
                    min={allowNegative ? -getMaxValue(values.unit) : 0}
                    max={getMaxValue(values.unit)}
                    step={getStepValue(values.unit)}
                    aria-label={__("Top", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={values.right === '' ? '' : values.right}
                    onChange={(e) => handleInputChange("right", e)}
                    min={allowNegative ? -getMaxValue(values.unit) : 0}
                    max={getMaxValue(values.unit)}
                    step={getStepValue(values.unit)}
                    aria-label={__("Right", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={values.bottom === '' ? '' : values.bottom}
                    onChange={(e) => handleInputChange("bottom", e)}
                    min={allowNegative ? -getMaxValue(values.unit) : 0}
                    max={getMaxValue(values.unit)}
                    step={getStepValue(values.unit)}
                    aria-label={__("Bottom", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={values.left === '' ? '' : values.left}
                    onChange={(e) => handleInputChange("left", e)}
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
                    onClick={handleLinkToggle}
                    title={isLinked ? __("Unlink values", "digiblocks") : __("Link values", "digiblocks")}
                    role="button"
                    tabIndex="0"
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            handleLinkToggle();
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