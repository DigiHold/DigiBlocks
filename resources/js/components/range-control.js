/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Button, TextControl } = wp.components;
const { useState, useEffect, useRef } = wp.element;

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
        { label: 'vw', value: 'vw' },
        { label: 'vh', value: 'vh' },
    ],
    defaultUnit = 'px',
    min = 0,
    max = 100,
    step = 1,
    defaultValues = null
}) => {
    const getStepForUnit = (unit) => {
        if (typeof step === 'object') {
            return step[unit] !== undefined ? step[unit] : 1;
        }
        return step;
    };
    // Custom icon definition - always appended to units
    const customIcon = {
        label: __('Custom', 'digiblocks'),
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8" height="8">
                <path d="M58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6l294-294C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2l-294 294zM404 48c6.4 0 12.6 2.6 17.2 7.1l35.7 35.7c4.6 4.6 7.1 10.7 7.1 17.2s-2.6 12.6-7.1 17.2L404 178.1 333.9 108 386.8 55.1c4.6-4.6 10.7-7.1 17.2-7.1zM109.9 332L300 141.9 370.1 212 180 402.1 109.9 332zM81.3 371.3l59.4 59.4-82.2 22.8 22.8-82.2z"/>
            </svg>
        ),
        value: 'custom'
    };

    // Ensure custom icon is always at the end of units array
    const unitsWithCustom = units && Array.isArray(units) ? [...units, customIcon] : null;
    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi?.responsiveState?.activeDevice || 'desktop'
    );

	// Units selector
	const UnitsSelector = window.digi?.utils?.UnitsSelector;
    
    // State for current unit
    const [currentUnit, setCurrentUnit] = useState(defaultUnit);

    // Local state to track input value for empty detection
    const [inputValue, setInputValue] = useState('');

    // Ref to track if we're in the middle of user input (don't sync from props)
    const isUserInputRef = useRef(false);

    // Ref to store typing timeout
    const typingTimeoutRef = useRef(null);

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
                    unit: val[device].unit !== undefined ? val[device].unit : defaultUnit
                };
            } else {
                result[device] = { value: '', unit: defaultUnit };
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
            const deviceUnit = values[localActiveDevice].unit;

            if (deviceUnit === null) {
                setCurrentUnit('custom');
            } else if (deviceUnit) {
                setCurrentUnit(deviceUnit);
            } else {
                setCurrentUnit(defaultUnit);
            }

            // Only update input value if user is not actively typing (check ref, not state)
            if (!isUserInputRef.current) {
                setInputValue(values[localActiveDevice].value === '' ? '' : String(values[localActiveDevice].value));
            }
        }
    }, [localActiveDevice, values, defaultUnit]);

    // Handle direct input changes
    const handleInputChange = (e) => {
        const newValue = e.target.value;

        // Mark that user is typing (use ref to avoid re-renders)
        isUserInputRef.current = true;

        // Clear any existing timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        // Update local input state
        setInputValue(newValue);

        // If empty, update with empty string
        if (newValue === '') {
            const updatedValues = {
                ...values,
                [localActiveDevice]: { value: '', unit: currentUnit === 'custom' ? null : currentUnit }
            };
            onChange(updatedValues);
            isUserInputRef.current = false;
            return;
        }

        // If custom mode, save as string
        if (currentUnit === 'custom') {
            const updatedValues = {
                ...values,
                [localActiveDevice]: { value: newValue, unit: null }
            };
            onChange(updatedValues);
            isUserInputRef.current = false;
            return;
        }

        // Allow intermediate typing states for negative numbers and decimals
        // This prevents premature conversion during typing sequences like: - → -0 → -0. → -0.0 → -0.02
        const isIntermediateState =
            newValue === '-' ||                    // Just minus sign
            newValue === '.' ||                    // Just decimal point
            newValue === '-.' ||                   // Minus and decimal
            newValue === '-0' ||                   // Negative zero (intermediate for -0.5)
            /^-?\d*\.$/.test(newValue) ||         // Ends with decimal (5., -5., 0.)
            /^-?0\.0*$/.test(newValue);           // Zero with trailing zeros (0.0, -0.0, -0.00)

        if (isIntermediateState) {
            typingTimeoutRef.current = setTimeout(() => {
                isUserInputRef.current = false;
            }, 1000);
            return;
        }

        // For non-empty values in range mode, convert to number
        const numValue = parseFloat(newValue);
        if (!isNaN(numValue)) {
            const updatedValues = {
                ...values,
                [localActiveDevice]: { value: numValue, unit: currentUnit }
            };
            onChange(updatedValues);
            isUserInputRef.current = false;
        }
    };

    // Handle input blur to finalize typing
    const handleInputBlur = () => {
        isUserInputRef.current = false;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
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
        if (defaultValues) {
            onChange(defaultValues);
        } else {
            onChange(undefined);
        }
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
        // If no value exists, disable reset
        if (!value) return true;

        // If defaultValues exist, check if current values match defaults
        if (defaultValues) {
            const devices = ['desktop', 'tablet', 'mobile'];
            return devices.every(device => {
                const currentVal = values[device]?.value;
                const currentUnit = values[device]?.unit;
                const defaultVal = defaultValues[device]?.value;
                const defaultUnit = defaultValues[device]?.unit;

                return currentVal === defaultVal && currentUnit === defaultUnit;
            });
        }

        // If no defaultValues, disable when all values are empty
        return values.desktop.value === '' && values.tablet.value === '' && values.mobile.value === '';
    };
    
    const getPercentage = () => {
        if (values[localActiveDevice].value === '') return 0;

        const value = parseFloat(values[localActiveDevice].value);
        const range = max - min;
        const normalizedValue = value - min;
        return Math.max(0, Math.min(100, (normalizedValue / range) * 100));
    };

    const percentage = getPercentage();

    // Get inherited placeholder value for tablet/mobile
    const getPlaceholder = () => {
        if (localActiveDevice === 'desktop') {
            return '';
        }

        if (localActiveDevice === 'mobile') {
            if (values.tablet.value !== '') {
                return values.tablet.value;
            }
            if (values.desktop.value !== '') {
                return values.desktop.value;
            }
        }

        if (localActiveDevice === 'tablet') {
            if (values.desktop.value !== '') {
                return values.desktop.value;
            }
        }

        return '';
    };

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
                                {unitsWithCustom && unitsWithCustom.length > 1 && UnitsSelector && (
                                    <UnitsSelector
                                        value={currentUnit}
                                        onChange={(unit) => {
                                            setCurrentUnit(unit);

                                            let newUnit = unit;
                                            let newValue = values[localActiveDevice].value;

                                            if (unit === 'custom') {
                                                newUnit = null;
                                                if (newValue !== '' && currentUnit !== 'custom') {
                                                    newValue = `${newValue}${currentUnit}`;
                                                }
                                            } else if (currentUnit === 'custom') {
                                                const numValue = parseFloat(newValue);
                                                newValue = !isNaN(numValue) ? numValue : '';
                                            } else {
                                                if (newValue !== '' && currentUnit !== 'custom') {
                                                    const currentValue = parseFloat(newValue);
                                                    if (!isNaN(currentValue)) {
                                                        if (currentUnit === 'px' && unit === '%') {
                                                            newValue = 100;
                                                        } else if (currentUnit === '%' && unit === 'px') {
                                                            newValue = 1200;
                                                        } else if (currentUnit === 'px' && (unit === 'em' || unit === 'rem')) {
                                                            newValue = parseFloat((currentValue / 16).toFixed(2));
                                                        } else if ((currentUnit === 'em' || currentUnit === 'rem') && unit === 'px') {
                                                            newValue = Math.round(currentValue * 16);
                                                        } else if (currentUnit === '%' && (unit === 'vw' || unit === 'vh')) {
                                                            newValue = currentValue;
                                                        } else if ((currentUnit === 'vw' || currentUnit === 'vh') && unit === '%') {
                                                            newValue = currentValue;
                                                        } else if (currentUnit === 'em' && unit === 'rem') {
                                                            newValue = currentValue;
                                                        } else if (currentUnit === 'rem' && unit === 'em') {
                                                            newValue = currentValue;
                                                        }
                                                    }
                                                }
                                            }

                                            const updatedValues = {
                                                ...values,
                                                [localActiveDevice]: { value: newValue, unit: newUnit }
                                            };
                                            onChange(updatedValues);
                                        }}
                                        units={unitsWithCustom}
                                        ariaLabel={__("Select Units", "digiblocks")}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="digiblocks-range-control__mobile-controls">
                            {currentUnit === 'custom' ? (
                                <TextControl
                                    value={inputValue}
                                    onChange={(newValue) => {
                                        setInputValue(newValue);
                                        const updatedValues = {
                                            ...values,
                                            [localActiveDevice]: { value: newValue, unit: null }
                                        };
                                        onChange(updatedValues);
                                    }}
                                />
                            ) : (
                                <div className="digiblocks-custom-range-control">
                                    <div className="range-slider-wrapper">
                                        <input
                                            className="range-slider"
                                            id={inputId}
                                            max={max}
                                            min={min}
                                            step={getStepForUnit(currentUnit)}
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
                                            onBlur={handleInputBlur}
                                            min={min}
                                            max={max}
                                            step={getStepForUnit(currentUnit)}
                                            placeholder={getPlaceholder()}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveRangeControl;