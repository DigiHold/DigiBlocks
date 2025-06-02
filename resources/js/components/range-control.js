/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Units Range Control Component
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
    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi?.responsiveState?.activeDevice || 'desktop'
    );
    
    // State for current unit
    const [currentUnit, setCurrentUnit] = useState(defaultUnit);
    
    // Local state to track input value for empty detection
    const [inputValue, setInputValue] = useState('');
    
    // Generate unique ID for inputs
    const [inputId] = useState(`range-control-${Math.floor(Math.random() * 10000)}`);

    // Ensure value is properly structured with device keys
    const ensureResponsiveValue = (val) => {
        if (!val || typeof val !== 'object') {
            return {
                desktop: { value: '', unit: defaultUnit },
                tablet: { value: '', unit: defaultUnit },
                mobile: { value: '', unit: defaultUnit }
            };
        }
        
        const result = {};
        ['desktop', 'tablet', 'mobile'].forEach(device => {
            if (val[device] && typeof val[device] === 'object') {
                result[device] = {
                    value: val[device].value !== undefined ? val[device].value : '',
                    unit: val[device].unit || defaultUnit
                };
            } else {
                // Handle backward compatibility for old number values
                const deviceValue = typeof val[device] === 'number' ? val[device] : '';
                result[device] = { value: deviceValue, unit: defaultUnit };
            }
        });
        
        return result;
    };

    const values = ensureResponsiveValue(value);

    // Subscribe to global device state changes
    useEffect(() => {
        // Skip if global state doesn't exist
        if (!window.digi?.responsiveState?.subscribe) return;
        
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Update currentUnit and input value when device or values change
    useEffect(() => {
        if (values[localActiveDevice]) {
            if (values[localActiveDevice].unit) {
                setCurrentUnit(values[localActiveDevice].unit);
            }
            
            // Set local input value state to match current value
            setInputValue(values[localActiveDevice].value === '' ? '' : String(values[localActiveDevice].value));
        }
    }, [localActiveDevice, values]);

    // Handle direct input changes
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        
        // Update local input state
        setInputValue(newValue);
        
        // If empty, update with empty string
        if (newValue === '') {
            const updatedValues = {
                ...values,
                [localActiveDevice]: { value: '', unit: currentUnit }
            };
            onChange(updatedValues);
            return;
        }
        
        // For non-empty values, convert to number
        const numValue = parseFloat(newValue);
        if (!isNaN(numValue)) {
            const updatedValues = {
                ...values,
                [localActiveDevice]: { value: numValue, unit: currentUnit }
            };
            onChange(updatedValues);
        }
    };
    
    // Handle slider changes
    const handleSliderChange = (e) => {
        const newValue = parseFloat(e.target.value);
        
        // Slider will never give us undefined/empty
        const updatedValues = {
            ...values,
            [localActiveDevice]: { value: newValue, unit: currentUnit }
        };
        onChange(updatedValues);
        
        // Keep input state in sync
        setInputValue(String(newValue));
    };

    // Reset to default value
    const resetValue = () => {
        let defaultValue = '';
        
        if (defaultValues) {
            defaultValue = defaultValues[localActiveDevice] !== undefined ? 
                defaultValues[localActiveDevice] : 
                (defaultValues.default !== undefined ? defaultValues.default : '');
        }
        
        const updatedValues = {
            ...values,
            [localActiveDevice]: { value: defaultValue, unit: currentUnit }
        };
        onChange(updatedValues);
        
        // Update input state
        setInputValue(defaultValue === '' ? '' : String(defaultValue));
    };

    // Get device icon
    const getDeviceIcon = (device) => {
        // If global icons exist, use them
        if (window.digi?.icons?.deviceIcons?.[device]) {
            return window.digi.icons.deviceIcons[device];
        }
        // Fallback to a simple icon
        return <span className={`dashicon dashicons dashicons-${device}`}></span>;
    };

    // Handle device toggle
    const handleToggleDevice = () => {
        if (window.digi?.responsiveState?.toggleDevice) {
            window.digi.responsiveState.toggleDevice();
        } else {
            // Fallback toggle logic
            const nextDevice = localActiveDevice === "desktop" ? "tablet" : 
                              localActiveDevice === "tablet" ? "mobile" : "desktop";
            setLocalActiveDevice(nextDevice);
        }
    };

    // Determine if reset button should be disabled
    const isResetDisabled = () => {
        if (!defaultValues && values[localActiveDevice].value === '') return true;
        
        if (defaultValues) {
            const defaultValue = defaultValues[localActiveDevice] !== undefined ? 
                defaultValues[localActiveDevice] : 
                (defaultValues.default !== undefined ? defaultValues.default : '');
            
            return values[localActiveDevice].value === defaultValue;
        }
        
        return false;
    };
    
    // Calculate percentage for slider positioning
    const getPercentage = () => {
        if (values[localActiveDevice].value === '') return 0;
        
        const value = parseFloat(values[localActiveDevice].value);
        return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
    };
    
    const percentage = getPercentage();

    return (
        <div className="digiblocks-size-type-field-tabs">
            <div className="digiblocks-responsive-control-inner">
                <div className="components-base-control">
                    <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
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
                                                [localActiveDevice]: { ...values[localActiveDevice], unit }
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
                            <div className="digiblocks-custom-range-control">
                                <div className="range-slider-wrapper">
                                    <input 
                                        className="range-slider"
                                        id={inputId}
                                        max={max}
                                        min={min}
                                        step={step}
                                        type="range"
                                        value={values[localActiveDevice].value === '' ? 0 : values[localActiveDevice].value}
                                        onChange={handleSliderChange}
                                    />
                                    <div className="range-track">
                                        <div 
                                            className="range-track-fill"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <div 
                                        className="range-thumb"
                                        style={{ left: `${percentage}%` }}
                                    ></div>
                                </div>
                                <div className="input-wrapper">
                                    <input 
                                        className="number-input"
                                        type="number"
                                        id={`number-${inputId}`}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        min={min}
                                        max={max}
                                        step={step}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveRangeControl;