/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
    RangeControl, 
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Fallback device icons - ensure we always have icons even if global ones aren't ready
 */
const fallbackIcons = {
    desktop: (
        <svg width="8" height="7" viewBox="0 0 8 7" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z" />
        </svg>
    ),
    tablet: (
        <svg width="6" height="8" viewBox="0 0 6 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0H1C0.447715 0 0 0.447715 0 1V7C0 7.55228 0.447715 8 1 8H5C5.55228 8 6 7.55228 6 7V1C6 0.447715 5.55228 0 5 0ZM5 7H1V1H5V7Z" />
        </svg>
    ),
    mobile: (
        <svg width="4" height="8" viewBox="0 0 4 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33333 0H0.666667C0.297995 0 0 0.298 0 0.666667V7.33333C0 7.702 0.297995 8 0.666667 8H3.33333C3.70201 8 4 7.702 4 7.33333V0.666667C4 0.298 3.70201 0 3.33333 0ZM2 7.33333C1.63201 7.33333 1.33333 7.03467 1.33333 6.66667C1.33333 6.29867 1.63201 6 2 6C2.36799 6 2.66667 6.29867 2.66667 6.66667C2.66667 7.03467 2.36799 7.33333 2 7.33333ZM3.33333 5.33333H0.666667V1.33333H3.33333V5.33333Z" />
        </svg>
    )
};

/**
 * Responsive Range Control Component
 * 
 * @param {Object} props Component properties
 * @param {string} props.label Control label
 * @param {Object} props.value Current responsive values (object with desktop, tablet, mobile keys)
 * @param {Function} props.onChange Change handler
 * @param {Object} props.units Unit options array (optional)
 * @param {string} props.defaultUnit Default unit value (optional)
 * @param {number} props.min Minimum value
 * @param {number} props.max Maximum value  
 * @param {number} props.step Step value
 * @param {Object} props.defaultValues Default values for reset
 * @returns {JSX.Element} Responsive range control component
 */
const ResponsiveRangeControl = ({
    label,
    value,
    onChange,
    units = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' },
        { label: 'vh', value: 'vh' },
    ],
    defaultUnit = 'px',
    min = 0,
    max = 100,
    step = 1,
    defaultValues = null
}) => {
    // Initialize responsiveState if it doesn't exist
    if (!window.digi) window.digi = {};
    if (!window.digi.responsiveState) {
        window.digi.responsiveState = {
            activeDevice: 'desktop',
            listeners: [],
            setActiveDevice(device) {
                this.activeDevice = device;
                this.notifyListeners();
            },
            toggleDevice() {
                if (this.activeDevice === "desktop") this.setActiveDevice("tablet");
                else if (this.activeDevice === "tablet") this.setActiveDevice("mobile");
                else this.setActiveDevice("desktop");
            },
            subscribe(callback) {
                this.listeners.push(callback);
                return () => {
                    this.listeners = this.listeners.filter(cb => cb !== callback);
                };
            },
            notifyListeners() {
                this.listeners.forEach(callback => callback(this.activeDevice));
            },
            getNextDevice() {
                if (this.activeDevice === "desktop") return "tablet";
                if (this.activeDevice === "tablet") return "mobile";
                return "desktop";
            }
        };
    }
    
    // Use global device state instead of local state
    const [activeDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for current unit
    const [currentUnit, setCurrentUnit] = useState(defaultUnit);

    // Ensure value is properly structured with device keys
    const ensureResponsiveValue = (val) => {
        if (!val || typeof val !== 'object') {
            return {
                desktop: { value: min, unit: defaultUnit },
                tablet: { value: min, unit: defaultUnit },
                mobile: { value: min, unit: defaultUnit }
            };
        }
        
        const result = {};
        ['desktop', 'tablet', 'mobile'].forEach(device => {
            if (val[device] && typeof val[device] === 'object' && 'value' in val[device]) {
                result[device] = val[device];
            } else {
                // Handle backward compatibility for old number values
                const deviceValue = typeof val[device] === 'number' ? val[device] : min;
                result[device] = { value: deviceValue, unit: defaultUnit };
            }
        });
        
        return result;
    };

    const values = ensureResponsiveValue(value);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Update currentUnit when device or values change
    useEffect(() => {
        if (values[activeDevice] && values[activeDevice].unit) {
            setCurrentUnit(values[activeDevice].unit);
        }
    }, [activeDevice, values]);

    // Update value for current device
    const updateValue = (newValue) => {
        const updatedValues = {
            ...values,
            [activeDevice]: { value: newValue, unit: currentUnit }
        };
        onChange(updatedValues);
    };

    // Reset to default value
    const resetValue = () => {
        if (defaultValues) {
            const defaultValue = defaultValues[activeDevice] !== undefined ? 
                defaultValues[activeDevice] : 
                (defaultValues.default !== undefined ? defaultValues.default : min);
            updateValue(defaultValue);
        } else {
            updateValue(min);
        }
    };

    // Get device icon with fallback
    const getDeviceIcon = (device) => {
        // If global icons exist, use them
        if (window.digi?.icons?.deviceIcons?.[device]) {
            return window.digi.icons.deviceIcons[device];
        }
        // Otherwise use fallback icons
        return fallbackIcons[device];
    };

    // Render responsive control button - uses global state with fallback
    const renderResponsiveControl = () => {
        // Check if global function exists
        if (typeof window.digi?.createDeviceToggleButton === 'function') {
            return (
                <div className="digiblocks-responsive-control-inner">
                    {window.digi.createDeviceToggleButton(Button)}
                </div>
            );
        }
        
        // Fallback
        return (
            <div className="digiblocks-responsive-control-inner">
                <Button 
                    className="digiblocks-responsive-common-button"
                    onClick={() => window.digi.responsiveState.toggleDevice()}
                    aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                >
                    {getDeviceIcon(activeDevice)}
                </Button>
            </div>
        );
    };

    // Determine if reset button should be disabled
    const isResetDisabled = () => {
        if (!defaultValues) return true;
        
        const defaultValue = defaultValues[activeDevice] !== undefined ? 
            defaultValues[activeDevice] : 
            (defaultValues.default !== undefined ? defaultValues.default : min);
        
        return values[activeDevice].value === defaultValue;
    };

    return (
        <div className="digiblocks-size-type-field-tabs">
            <div className="digiblocks-responsive-control-inner">
                <div className="components-base-control">
                    <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                        <div className="digiblocks-control__header">
                            <div className="digiblocks-responsive-label-wrap">
                                <span className="digiblocks-control-label">{label}</span>
                                {renderResponsiveControl()}
                            </div>
                            <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                <div tabIndex="0">
                                    <button 
                                        type="button" 
                                        disabled={isResetDisabled()}
                                        className="components-button digiblocks-reset is-secondary is-small"
                                        onClick={resetValue}
                                    >
                                        <span className="dashicon dashicons dashicons-image-rotate"></span>
                                    </button>
                                </div>
                                {units && units.length > 1 && (
                                    <ToggleGroupControl
                                        value={currentUnit}
                                        onChange={(unit) => {
                                            setCurrentUnit(unit);
                                            // Update value with new unit
                                            const updatedValues = {
                                                ...values,
                                                [activeDevice]: { ...values[activeDevice], unit }
                                            };
                                            onChange(updatedValues);
                                        }}
                                        isBlock
                                        isSmall
                                        hideLabelFromVision
                                        aria-label={__("Select Units", "digiblocks")}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        {units.map(unit => (
                                            <ToggleGroupControlOption
                                                key={unit.value}
                                                value={unit.value}
                                                label={unit.label}
                                            />
                                        ))}
                                    </ToggleGroupControl>
                                )}
                            </div>
                        </div>
                        <div className="digiblocks-range-control__mobile-controls">
                            <RangeControl
                                value={values[activeDevice].value}
                                onChange={updateValue}
                                min={min}
                                max={max}
                                step={step}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveRangeControl;