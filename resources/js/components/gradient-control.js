/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    ToggleControl,
    SelectControl,
    RangeControl,
    Button,
    ColorIndicator,
    Dropdown,
    ColorPicker,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState } = wp.element;

/**
 * Gradient Control Component
 * 
 * @param {Object} props Component props
 * @param {Object} props.value Current gradient value
 * @param {Function} props.onChange Callback for value changes
 */
const GradientControl = ({ value, onChange }) => {
    const {
        enable = false,
        type = 'linear',
        angle = 90,
        position = 'center center',
        colors = [
            { color: '#667eea', position: 0 },
            { color: '#764ba2', position: 100 }
        ]
    } = value;

    // Update the gradient value
    const updateGradient = (newValue) => {
        onChange({
            ...value,
            ...newValue
        });
    };

    // Add a new color stop
    const addColorStop = () => {
        const newColors = [...colors];
        const lastPosition = colors.length > 0 ? Math.max(...colors.map(c => c.position)) : 0;
        const newPosition = Math.min(lastPosition + 25, 100);
        
        newColors.push({
            color: '#ffffff',
            position: newPosition
        });
        
        updateGradient({ colors: newColors });
    };

    // Remove a color stop
    const removeColorStop = (index) => {
        if (colors.length <= 2) return; // Keep at least 2 colors
        
        const newColors = colors.filter((_, i) => i !== index);
        updateGradient({ colors: newColors });
    };

    // Update a color stop
    const updateColorStop = (index, newColorValue, newPosition) => {
        const newColors = [...colors];
        newColors[index] = {
            color: newColorValue !== undefined ? newColorValue : newColors[index].color,
            position: newPosition !== undefined ? newPosition : newColors[index].position
        };
        
        updateGradient({ colors: newColors });
    };

    // Radial gradient position options
    const radialPositionOptions = [
        { label: __('Top Left', 'digiblocks'), value: 'top left' },
        { label: __('Top Center', 'digiblocks'), value: 'top center' },
        { label: __('Top Right', 'digiblocks'), value: 'top right' },
        { label: __('Center Left', 'digiblocks'), value: 'center left' },
        { label: __('Center Center', 'digiblocks'), value: 'center center' },
        { label: __('Center Right', 'digiblocks'), value: 'center right' },
        { label: __('Bottom Left', 'digiblocks'), value: 'bottom left' },
        { label: __('Bottom Center', 'digiblocks'), value: 'bottom center' },
        { label: __('Bottom Right', 'digiblocks'), value: 'bottom right' },
    ];

    // Generate preview gradient CSS
    const generatePreviewCSS = () => {
        if (!enable || !colors.length) return { background: 'transparent' };

        const colorStops = colors
            .map(stop => `${stop.color} ${stop.position}%`)
            .join(', ');

        if (type === 'radial') {
            return {
                background: `radial-gradient(circle at ${position}, ${colorStops})`
            };
        } else {
            return {
                background: `linear-gradient(${angle}deg, ${colorStops})`
            };
        }
    };

    return (
        <div className="digiblocks-gradient-control">
            <ToggleControl
                label={__('Enable Gradient', 'digiblocks')}
                checked={enable}
                onChange={(newEnable) => updateGradient({ enable: newEnable })}
                __nextHasNoMarginBottom={true}
            />

            {enable && (
                <>
                    {/* Gradient Preview */}
                    <div className="digiblocks-gradient-preview">
                        <div 
                            className="digiblocks-gradient-preview-inner"
                            style={generatePreviewCSS()}
                        />
                    </div>

                    {/* Gradient Type */}
                    <ToggleGroupControl
                        label={__('Gradient Type', 'digiblocks')}
                        value={type}
                        onChange={(newType) => updateGradient({ type: newType })}
                        isBlock
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    >
                        <ToggleGroupControlOption 
                            value="linear" 
                            label={__('Linear', 'digiblocks')}
                        />
                        <ToggleGroupControlOption 
                            value="radial" 
                            label={__('Radial', 'digiblocks')}
                        />
                    </ToggleGroupControl>

                    {/* Linear Gradient Angle */}
                    {type === 'linear' && (
                        <RangeControl
                            label={__('Angle', 'digiblocks')}
                            value={angle}
                            onChange={(newAngle) => updateGradient({ angle: newAngle })}
                            min={0}
                            max={360}
                            step={1}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    )}

                    {/* Radial Gradient Position */}
                    {type === 'radial' && (
                        <SelectControl
                            label={__('Position', 'digiblocks')}
                            value={position}
                            options={radialPositionOptions}
                            onChange={(newPosition) => updateGradient({ position: newPosition })}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    )}

                    {/* Color Stops */}
                    <div className="digiblocks-gradient-colors">
                        <div className="digiblocks-gradient-colors-header">
                            <strong>{__('Colors', 'digiblocks')}</strong>
                            <Button
                                variant="secondary"
                                isSmall
                                onClick={addColorStop}
                                disabled={colors.length >= 5} // Limit to 5 colors
                            >
                                {__('Add Color', 'digiblocks')}
                            </Button>
                        </div>

                        <div className="digiblocks-gradient-color-stops">
                            {colors.map((colorStop, index) => (
                                <div key={index} className="digiblocks-gradient-color-stop">
                                    <div className="digiblocks-gradient-color-stop-color">
                                        <Dropdown
                                            className="digiblocks-color-dropdown"
                                            contentClassName="digiblocks-color-dropdown-content"
                                            renderToggle={({ isOpen, onToggle }) => (
                                                <Button
                                                    className="digiblocks-color-indicator-button"
                                                    onClick={onToggle}
                                                    aria-expanded={isOpen}
                                                    style={{ backgroundColor: colorStop.color }}
                                                >
                                                    <ColorIndicator colorValue={colorStop.color} />
                                                </Button>
                                            )}
                                            renderContent={() => (
                                                <ColorPicker
                                                    color={colorStop.color}
                                                    onChange={(newColor) => updateColorStop(index, newColor)}
                                                    enableAlpha
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="digiblocks-gradient-color-stop-position">
                                        <RangeControl
                                            value={colorStop.position}
                                            onChange={(newPosition) => updateColorStop(index, undefined, newPosition)}
                                            min={0}
                                            max={100}
                                            step={1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </div>

                                    <div className="digiblocks-gradient-color-stop-remove">
                                        <Button
                                            isDestructive
                                            isSmall
                                            onClick={() => removeColorStop(index)}
                                            disabled={colors.length <= 2}
                                            icon="trash"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default GradientControl;