/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
} = wp.components;
const { useState, useEffect, useMemo } = wp.element;
const { useSelect } = wp.data;

/**
 * Responsive Button Group Control Component
 */
const ResponsiveButtonGroup = ({
    label,
    value,
    onChange,
    options = []
}) => {
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi?.responsiveState?.activeDevice || 'desktop'
    );
    
    const blockDefaults = useSelect((select) => {
        const { getSelectedBlock } = select('core/block-editor');
        const { getBlockType } = select('core/blocks');
        
        const selectedBlock = getSelectedBlock();
        if (!selectedBlock) {
            return null;
        }
        
        const blockType = getBlockType(selectedBlock.name);
        if (!blockType?.attributes) {
            return null;
        }
        
        const currentAttributes = selectedBlock.attributes;
        
        for (const [attrName, attrValue] of Object.entries(currentAttributes)) {
            if (attrValue === value && blockType.attributes[attrName]?.default) {
                const defaultValue = blockType.attributes[attrName].default;
                
                if (typeof defaultValue === 'object' && 
                    defaultValue.desktop !== undefined &&
                    defaultValue.tablet !== undefined &&
                    defaultValue.mobile !== undefined) {
                    return defaultValue;
                }
            }
        }
        
        return null;
    }, [value]);
    
    useEffect(() => {
        if (!window.digi?.responsiveState?.subscribe) return;
        
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        return unsubscribe;
    }, []);

    const ensureResponsiveValue = (val) => {
        if (!val || typeof val !== 'object') {
            return {
                desktop: '',
                tablet: '',
                mobile: ''
            };
        }
        
        return {
            desktop: val.desktop !== undefined ? val.desktop : '',
            tablet: val.tablet !== undefined ? val.tablet : '',
            mobile: val.mobile !== undefined ? val.mobile : ''
        };
    };

    const values = ensureResponsiveValue(value);

    const updateValue = (newValue) => {
        onChange({
            ...values,
            [localActiveDevice]: newValue
        });
    };

    const getDefaultValue = (device) => {
        if (blockDefaults && blockDefaults[device] !== undefined) {
            return blockDefaults[device];
        }
        return '';
    };

    const resetValue = () => {
        const defaultVal = getDefaultValue(localActiveDevice);
        onChange({
            ...values,
            [localActiveDevice]: defaultVal
        });
    };

    const isResetDisabled = () => {
        const expectedDefault = getDefaultValue(localActiveDevice);
        return values[localActiveDevice] === expectedDefault;
    };

    const getInheritedValue = () => {
        if (localActiveDevice === 'desktop') {
            return null;
        }

        if (values[localActiveDevice] !== '' && values[localActiveDevice] !== undefined) {
            return null;
        }

        if (localActiveDevice === 'mobile') {
            if (values.tablet !== '' && values.tablet !== undefined) {
                return values.tablet;
            }
            if (values.desktop !== '' && values.desktop !== undefined) {
                return values.desktop;
            }
        }

        if (localActiveDevice === 'tablet') {
            if (values.desktop !== '' && values.desktop !== undefined) {
                return values.desktop;
            }
        }

        return null;
    };

    const isInherited = getInheritedValue() !== null;
    const displayValue = (values[localActiveDevice] !== '' && values[localActiveDevice] !== undefined)
        ? values[localActiveDevice]
        : getInheritedValue();

    const handleToggleDevice = () => {
        if (window.digi?.responsiveState?.toggleDevice) {
            window.digi.responsiveState.toggleDevice();
        } else {
            const nextDevice = localActiveDevice === "desktop" ? "tablet" : 
                              localActiveDevice === "tablet" ? "mobile" : "desktop";
            setLocalActiveDevice(nextDevice);
        }
    };

    const getDeviceIcon = (device) => {
        if (window.digi?.icons?.deviceIcons?.[device]) {
            return window.digi.icons.deviceIcons[device];
        }
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
                                value={displayValue === '' ? undefined : displayValue}
                                onChange={updateValue}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                                className={isInherited ? 'is-inherited' : ''}
                            >
                                {options.map(option => (
                                    <ToggleGroupControlOption
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                        onClick={() => {
                                            if (isInherited && option.value === displayValue) {
                                                updateValue(option.value);
                                            }
                                        }}
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