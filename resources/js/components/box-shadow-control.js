/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { RangeControl, TabPanel, ToggleControl, __experimentalToggleGroupControl: ToggleGroupControl, __experimentalToggleGroupControlOption: ToggleGroupControlOption } = wp.components;
const { PanelColorSettings } = wp.blockEditor;

/**
 * BoxShadowControl Component
 * 
 * A reusable component for controlling box shadow settings in DigiBlocks.
 */
const BoxShadowControl = ({
    normalValue = {},
    hoverValue = {},
    onNormalChange,
    onHoverChange,
    label = __('Box Shadow', 'digiblocks')
}) => {
    // Set default values if not provided
    const defaultShadow = {
        enable: false,
        color: 'rgba(0, 0, 0, 0.2)',
        horizontal: 0,
        vertical: 0,
        blur: 0,
        spread: 0,
        position: 'outset'
    };

    // Merge defaults with provided values
    const normal = { ...defaultShadow, ...normalValue };
    const hover = { ...defaultShadow, ...hoverValue };

    // Tabs for the panel
    const tabs = [
        {
            name: 'normal',
            title: __('Normal', 'digiblocks'),
            className: 'digiblocks-tab-1 normal'
        },
        {
            name: 'hover',
            title: __('Hover', 'digiblocks'),
            className: 'digiblocks-tab-2 hover'
        }
    ];

    // Helper function to handle shadow property changes
    const updateShadowProperty = (tab, property, value) => {
        if (tab === 'normal') {
            onNormalChange({
                ...normal,
                [property]: value
            });
        } else {
            onHoverChange({
                ...hover,
                [property]: value
            });
        }
    };

    // Generate CSS value from shadow object
    const getShadowCSS = (shadow) => {
        if (!shadow.enable) return 'none';
        
        const inset = shadow.position === 'inset' ? 'inset ' : '';
        return `${inset}${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
    };

    // Render shadow controls based on the active tab
    const renderShadowControls = (tab) => {
        const currentValue = tab === 'normal' ? normal : hover;
        
        return (
            <div className="digiblocks-box-shadow-controls">
                {/* Enable/Disable Toggle Button */}
                <div className="digiblocks-toggle-wrapper" style={{ marginBottom: '16px' }}>
                    <ToggleControl
						label={__('Enable Box Shadow', 'digiblocks')}
						checked={currentValue.enable}
						onChange={() => updateShadowProperty(tab, 'enable', !currentValue.enable)}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
                </div>

                {currentValue.enable && (
                    <>
                        {/* Color Picker */}
						<PanelColorSettings
							title={__(
								"Color",
								"digiblocks"
							)}
							colorSettings={[
								{
									value: currentValue.color,
									onChange: (value) =>
										updateShadowProperty(tab, 'color', value),
									label: __(
										"Color",
										"digiblocks"
									),
								},
							]}
						/>

                        {/* Horizontal Offset */}
                        <RangeControl
                            label={__('Horizontal', 'digiblocks')}
                            value={currentValue.horizontal}
                            onChange={(value) => updateShadowProperty(tab, 'horizontal', value)}
                            min={-100}
                            max={100}
                            step={1}
                            allowReset={true}
                            resetFallbackValue={0}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
                        />

                        {/* Vertical Offset */}
                        <RangeControl
                            label={__('Vertical', 'digiblocks')}
                            value={currentValue.vertical}
                            onChange={(value) => updateShadowProperty(tab, 'vertical', value)}
                            min={-100}
                            max={100}
                            step={1}
                            allowReset={true}
                            resetFallbackValue={0}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
                        />

                        {/* Blur Radius */}
                        <RangeControl
                            label={__('Blur', 'digiblocks')}
                            value={currentValue.blur}
                            onChange={(value) => updateShadowProperty(tab, 'blur', value)}
                            min={0}
                            max={100}
                            step={1}
                            allowReset={true}
                            resetFallbackValue={0}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
                        />

                        {/* Spread */}
                        <RangeControl
                            label={__('Spread', 'digiblocks')}
                            value={currentValue.spread}
                            onChange={(value) => updateShadowProperty(tab, 'spread', value)}
                            min={-100}
                            max={100}
                            step={1}
                            allowReset={true}
                            resetFallbackValue={0}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
                        />

                        {/* Position (Outset/Inset) */}
                        <div className="digiblocks-multi-buttons-control">
                            <div className="digiblocks-multi-buttons-control__label">
                                {__('Position', 'digiblocks')}
                            </div>
                            <ToggleGroupControl
                                value={currentValue.position}
                                onChange={(value) => updateShadowProperty(tab, 'position', value)}
                                isBlock
								__next40pxDefaultSize={true}
                            	__nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="outset" 
                                    label={__('Outset', 'digiblocks')} 
                                />
                                <ToggleGroupControlOption 
                                    value="inset" 
                                    label={__('Inset', 'digiblocks')} 
                                />
                            </ToggleGroupControl>
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="digiblocks-box-shadow-control">
            <TabPanel
                className="digiblocks-control-tabs"
                activeClass="active-tab"
                tabs={tabs}
            >
                {(tab) => renderShadowControls(tab.name)}
            </TabPanel>
        </div>
    );
};

export default BoxShadowControl;