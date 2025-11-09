/**
 * Dimension Control Component
 * A control for setting dimensions (padding, margin, etc.) with linking capability
 */

const { __ } = wp.i18n;
const { Button, Dashicon } = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Dimension Control Component
 *
 * @param {Object} props - Component props
 * @return {JSX.Element} Dimension control component
 */
const DimensionControl = ({
    label,
    value = null,
    onChange,
    allowNegative = false,
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
	// Units selector
	const UnitsSelector = window.digi?.utils?.UnitsSelector;

    // Use global device state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi?.responsiveState?.activeDevice || 'desktop'
    );

    // Ensure value is properly structured with device keys
    const ensureResponsiveValue = (val) => {
        if (!val || typeof val !== 'object') {
            return {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px', isLinked: true },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px', isLinked: true },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px', isLinked: true }
            };
        }

        const result = {};
        ['desktop', 'tablet', 'mobile'].forEach(device => {
            if (val[device] && typeof val[device] === 'object') {
                result[device] = {
                    top: val[device].top !== undefined ? val[device].top : '',
                    right: val[device].right !== undefined ? val[device].right : '',
                    bottom: val[device].bottom !== undefined ? val[device].bottom : '',
                    left: val[device].left !== undefined ? val[device].left : '',
                    unit: val[device].unit !== undefined ? val[device].unit : 'px',
                    isLinked: val[device].isLinked !== undefined ? val[device].isLinked : true
                };
            } else {
                result[device] = { top: '', right: '', bottom: '', left: '', unit: 'px', isLinked: true };
            }
        });

        return result;
    };

    const values = ensureResponsiveValue(value);
    const currentDeviceValues = values[localActiveDevice];

    // Use the isLinked value from current device
    const [isLinked, setIsLinked] = useState(currentDeviceValues.isLinked !== undefined ? currentDeviceValues.isLinked : true);

    // Track if values are at default
    const [isDefault, setIsDefault] = useState(true);

    // Subscribe to global device state changes
    useEffect(() => {
        if (!window.digi?.responsiveState?.subscribe) return;

        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });

        return unsubscribe;
    }, []);
    
    // Update local isLinked state when device or values change
    useEffect(() => {
        const deviceValues = values[localActiveDevice];
        if (deviceValues.isLinked !== undefined && deviceValues.isLinked !== isLinked) {
            setIsLinked(deviceValues.isLinked);
        }
    }, [localActiveDevice, values]);

    // Check if current device values are at default (all empty)
    useEffect(() => {
        const isAtDefault =
            currentDeviceValues.top === '' &&
            currentDeviceValues.right === '' &&
            currentDeviceValues.bottom === '' &&
            currentDeviceValues.left === '';

        setIsDefault(isAtDefault);
    }, [currentDeviceValues]);

    // Handle value change
    const handleValueChange = (key, inputValue) => {
        let newDeviceValues = { ...currentDeviceValues };

        if (isLinked) {
            newDeviceValues = {
                ...newDeviceValues,
                top: inputValue,
                right: inputValue,
                bottom: inputValue,
                left: inputValue,
            };
        } else {
            newDeviceValues[key] = inputValue;
        }

        const hasAnyValue = ['top', 'right', 'bottom', 'left'].some(
            side => newDeviceValues[side] !== '' && newDeviceValues[side] !== undefined
        );

        if (hasAnyValue) {
            ['top', 'right', 'bottom', 'left'].forEach(side => {
                if (newDeviceValues[side] === '' || newDeviceValues[side] === undefined) {
                    newDeviceValues[side] = 0;
                }
            });
        }

        newDeviceValues.isLinked = isLinked;

        onChange({
            ...values,
            [localActiveDevice]: newDeviceValues
        });
    };

    // Handle unit change
    const handleUnitChange = (unit) => {
        onChange({
            ...values,
            [localActiveDevice]: {
                ...currentDeviceValues,
                unit,
                isLinked
            }
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
        onChange({
            ...values,
            [localActiveDevice]: {
                top: '',
                right: '',
                bottom: '',
                left: '',
                unit: currentDeviceValues.unit,
                isLinked: true
            }
        });
        setIsLinked(true);
    };

    // Get device icon
    const getDeviceIcon = (device) => {
        if (window.digi?.icons?.deviceIcons?.[device]) {
            return window.digi.icons.deviceIcons[device];
        }
        return <span className={`dashicon dashicons dashicons-${device}`}></span>;
    };

    // Handle device toggle
    const handleToggleDevice = () => {
        if (window.digi?.responsiveState?.toggleDevice) {
            window.digi.responsiveState.toggleDevice();
        } else {
            const nextDevice = localActiveDevice === "desktop" ? "tablet" :
                              localActiveDevice === "tablet" ? "mobile" : "desktop";
            setLocalActiveDevice(nextDevice);
        }
    };

    // Get inherited placeholder value for tablet/mobile
    const getPlaceholder = (side) => {
        if (localActiveDevice === 'desktop') {
            return '';
        }

        if (localActiveDevice === 'mobile') {
            if (values.tablet[side] !== '' && values.tablet[side] !== undefined) {
                return values.tablet[side];
            }
            if (values.desktop[side] !== '' && values.desktop[side] !== undefined) {
                return values.desktop[side];
            }
        }

        if (localActiveDevice === 'tablet') {
            if (values.desktop[side] !== '' && values.desktop[side] !== undefined) {
                return values.desktop[side];
            }
        }

        return '';
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
        onChange({
            ...values,
            [localActiveDevice]: {
                ...currentDeviceValues,
                isLinked: newLinkedState
            }
        });
    };

    return (
        <div className="digiblocks-dimension-control is-responsive">
            <div className="digiblocks-control__header">
                <div className="digiblocks-responsive-label-wrap">
                    <span className="digiblocks-control-label">{label}</span>
                    <Button
                        className="digiblocks-responsive-common-button"
                        onClick={handleToggleDevice}
                        aria-label={__(`Switch to ${window.digi?.responsiveState?.getNextDevice() || 'next'} view`, "digiblocks")}
                    >
                        {getDeviceIcon(localActiveDevice)}
                    </Button>
                </div>
                <div className="digiblocks-control__actions">
                    <div>
                        <Button
                            isSmall
							isSecondary
                            className="digiblocks-reset"
                            icon="image-rotate"
                            onClick={resetValues}
                            disabled={isDefault}
                            aria-label={__("Reset", "digiblocks")}
                        />
                    </div>
					{UnitsSelector && (
						<UnitsSelector
							value={currentDeviceValues.unit}
							onChange={handleUnitChange}
							units={units}
							ariaLabel={__("Select Units", "digiblocks")}
						/>
					)}
                </div>
            </div>
            
            <div className="digiblocks-spacing-inputs">
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={currentDeviceValues.top === '' ? '' : currentDeviceValues.top}
                    onChange={(e) => handleInputChange("top", e)}
                    min={allowNegative ? -getMaxValue(currentDeviceValues.unit) : 0}
                    max={getMaxValue(currentDeviceValues.unit)}
                    step={getStepValue(currentDeviceValues.unit)}
                    placeholder={getPlaceholder('top')}
                    aria-label={__("Top", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={currentDeviceValues.right === '' ? '' : currentDeviceValues.right}
                    onChange={(e) => handleInputChange("right", e)}
                    min={allowNegative ? -getMaxValue(currentDeviceValues.unit) : 0}
                    max={getMaxValue(currentDeviceValues.unit)}
                    step={getStepValue(currentDeviceValues.unit)}
                    placeholder={getPlaceholder('right')}
                    aria-label={__("Right", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={currentDeviceValues.bottom === '' ? '' : currentDeviceValues.bottom}
                    onChange={(e) => handleInputChange("bottom", e)}
                    min={allowNegative ? -getMaxValue(currentDeviceValues.unit) : 0}
                    max={getMaxValue(currentDeviceValues.unit)}
                    step={getStepValue(currentDeviceValues.unit)}
                    placeholder={getPlaceholder('bottom')}
                    aria-label={__("Bottom", "digiblocks")}
                />
                <input
                    className="digiblocks-spacing-input"
                    type="number"
                    value={currentDeviceValues.left === '' ? '' : currentDeviceValues.left}
                    onChange={(e) => handleInputChange("left", e)}
                    min={allowNegative ? -getMaxValue(currentDeviceValues.unit) : 0}
                    max={getMaxValue(currentDeviceValues.unit)}
                    step={getStepValue(currentDeviceValues.unit)}
                    placeholder={getPlaceholder('left')}
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