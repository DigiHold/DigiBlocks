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
 * Responsive Button Group Control Component
 */
const ResponsiveButtonGroup = ({
    label,
    value,
    onChange,
    options = [],
    defaultValue = options.length > 0 ? options[0].value : '',
    defaultValues = null
}) => {
    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi?.responsiveState?.activeDevice || 'desktop'
    );
    
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

    // Ensure value is properly structured with device keys
    const ensureResponsiveValue = (val) => {
        if (!val || typeof val !== 'object') {
            return {
                desktop: defaultValue,
                tablet: defaultValue,
                mobile: defaultValue
            };
        }
        
        const result = {};
        ['desktop', 'tablet', 'mobile'].forEach(device => {
            if (val[device] !== undefined) {
                result[device] = val[device];
            } else {
                result[device] = defaultValue;
            }
        });
        
        return result;
    };

    const values = ensureResponsiveValue(value);

    // Update value for current device
    const updateValue = (newValue) => {
        onChange({
            ...values,
            [localActiveDevice]: newValue
        });
    };

    // Reset to default value
    const resetValue = () => {
        if (defaultValues) {
            const defaultVal = defaultValues[localActiveDevice] !== undefined ? 
                defaultValues[localActiveDevice] : 
                (defaultValues.default !== undefined ? defaultValues.default : options[0].value);
            updateValue(defaultVal);
        } else {
            updateValue(defaultValue);
        }
    };

    // Determine if reset button should be disabled
    const isResetDisabled = () => {
        if (!defaultValues) return false;
        
        const defaultVal = defaultValues[localActiveDevice] !== undefined ? 
            defaultValues[localActiveDevice] : 
            (defaultValues.default !== undefined ? defaultValues.default : options[0].value);
        
        return values[localActiveDevice] === defaultVal;
    };

    // THIS IS ALSO KEY - use the same handleToggleDevice approach as ResponsiveControl
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

    // Get device icon
    const getDeviceIcon = (device) => {
        // If global icons exist, use them
        if (window.digi?.icons?.deviceIcons?.[device]) {
            return window.digi.icons.deviceIcons[device];
        }
        // Fallback to a simple icon
        return <span className={`dashicon dashicons dashicons-${device}`}></span>;
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
                            </div>
                        </div>
                        <div className="digiblocks-range-control__mobile-controls">
                            <ToggleGroupControl
                                value={values[localActiveDevice]}
                                onChange={updateValue}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                {options.map(option => (
                                    <ToggleGroupControlOption
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                    />
                                ))}
                            </ToggleGroupControl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveButtonGroup;