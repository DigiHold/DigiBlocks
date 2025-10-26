/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
    SelectControl, 
    RangeControl, 
    Button
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Typography Control Component that matches WordPress native typography controls
 */
const TypographyControl = ({ label, value, onChange, defaults = {} }) => {
	// Generate a unique ID for this typography control
    const [controlId] = useState(`typography-${Math.random().toString(36).substr(2, 9)}`);
    
    // State for panel toggle - use UI state for persistence
    const [isOpen, setIsOpen] = useState(() => {
        return window.digi.uiState.getPanelState('typography', controlId) ?? false;
    });

	// Units selector
	const UnitsSelector = window.digi?.utils?.UnitsSelector;
    
    // State for font weight options (will be dynamically updated based on selected font)
    const [fontWeightOptions, setFontWeightOptions] = useState([
        { label: __('Default', 'digiblocks'), value: '' },
        { label: '100', value: '100' },
        { label: '200', value: '200' },
        { label: '300', value: '300' },
        { label: '400', value: '400' },
        { label: '500', value: '500' },
        { label: '600', value: '600' },
        { label: '700', value: '700' },
        { label: '800', value: '800' },
        { label: '900', value: '900' },
    ]);
    
    // State for font family options
    const [fontFamilyOptions, setFontFamilyOptions] = useState([
        { label: __('Default', 'digiblocks'), value: '' },
        { label: __('System UI', 'digiblocks'), value: 'system-ui' },
        { label: __('Arial', 'digiblocks'), value: 'Arial, sans-serif' },
        { label: __('Helvetica', 'digiblocks'), value: 'Helvetica, sans-serif' },
        { label: __('Times New Roman', 'digiblocks'), value: 'Times New Roman, serif' },
        { label: __('Georgia', 'digiblocks'), value: 'Georgia, serif' },
    ]);

    // State to track if fonts have been loaded
    const [fontLoaded, setFontLoaded] = useState(false);
    
    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(
        window.digi?.responsiveState?.activeDevice || 'desktop'
    );
    
    // Expand the received values with defaults
    const values = {
        fontFamily: '',
        fontSize: { desktop: 16, tablet: 15, mobile: 14 },
        fontSizeUnit: 'px',
        fontWeight: '',
        fontStyle: 'normal',
        textTransform: '',
        textDecoration: '',
        lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
        lineHeightUnit: 'em',
        letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
        letterSpacingUnit: 'px',
        ...defaults,
        ...value
    };

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

    // Load Google Font data and set initial font options
    useEffect(() => {
        // Get Google Fonts data
        let googleFontsData = window.digi?.getGoogleFonts;
        
        // If it's a function, execute it to get the data
        if (typeof googleFontsData === 'function') {
            googleFontsData = googleFontsData();
        }
        
        // Process the Google Fonts data
        if (googleFontsData && typeof googleFontsData === 'object') {
            // Create options from Google Fonts - just use the font name for both label and value
            const googleFontOptions = Object.keys(googleFontsData).map(fontName => ({
                label: fontName,
                value: fontName
            }));
            
            // Define system font options
            const systemFontOptions = [
                { label: __('Default', 'digiblocks'), value: '' },
                { label: __('System UI', 'digiblocks'), value: 'system-ui' },
                { label: __('Arial', 'digiblocks'), value: 'Arial, sans-serif' },
                { label: __('Helvetica', 'digiblocks'), value: 'Helvetica, sans-serif' },
                { label: __('Times New Roman', 'digiblocks'), value: 'Times New Roman, serif' },
                { label: __('Georgia', 'digiblocks'), value: 'Georgia, serif' },
            ];
            
            // Replace the options completely instead of appending
            setFontFamilyOptions([...systemFontOptions, ...googleFontOptions]);
        }
    }, []);

    // Load fonts when component mounts and when values change
    useEffect(() => {
        // This will run when the component mounts and anytime values.fontFamily or values.fontWeight changes
        if (values.fontFamily && !values.fontFamily.includes(',') && values.fontFamily !== 'system-ui') {
            // Use setTimeout to ensure this runs after other initialization
            setTimeout(() => {
                window.digi.utils.loadGoogleFont(values.fontFamily, values.fontWeight || '');
                setFontLoaded(true);
            }, 0);
        }
    }, [values.fontFamily, values.fontWeight]);

    // Force loading saved fonts on initial render
    useEffect(() => {
        // This specifically targets the initial load only
        if (!fontLoaded && values.fontFamily && !values.fontFamily.includes(',') && values.fontFamily !== 'system-ui') {
            // Add a small delay to ensure WordPress editor is fully loaded
            const timer = setTimeout(() => {
                window.digi.utils.loadGoogleFont(values.fontFamily, values.fontWeight || '');
                setFontLoaded(true);
            }, 100);
            
            return () => clearTimeout(timer);
        }
    }, [fontLoaded]);

    // Update font weight options when font family changes
    useEffect(() => {
        // Skip for system fonts or when no font is selected
        if (!values.fontFamily || 
            values.fontFamily === '' || 
            values.fontFamily.includes(',') ||  // System fonts typically include commas
            values.fontFamily === 'system-ui') {
            
            // Default weight options
            setFontWeightOptions([
                { label: __('Default', 'digiblocks'), value: '' },
                { label: '100', value: '100' },
                { label: '200', value: '200' },
                { label: '300', value: '300' },
                { label: '400', value: '400' },
                { label: '500', value: '500' },
                { label: '600', value: '600' },
                { label: '700', value: '700' },
                { label: '800', value: '800' },
                { label: '900', value: '900' },
            ]);
            return;
        }
        
        // Get Google Fonts data
        let googleFontsData = window.digi?.getGoogleFonts;
        
        // If it's a function, execute it to get the data
        if (typeof googleFontsData === 'function') {
            googleFontsData = googleFontsData();
        }
        
        // Get available weights for the selected font
        if (googleFontsData && googleFontsData[values.fontFamily] && googleFontsData[values.fontFamily].weight) {
            const fontData = googleFontsData[values.fontFamily];
            const weights = fontData.weight.map(weight => ({
                label: weight === 'Default' ? __('Default', 'digiblocks') : weight,
                value: weight === 'Default' ? '' : weight
            }));
            
            setFontWeightOptions(weights);
            
            // Check if current weight is available for this font
            const weightExists = weights.some(option => option.value === values.fontWeight);
            if (!weightExists && values.fontWeight !== '') {
                // Reset to default if the current weight isn't available
                updateTypographyValue('fontWeight', '');
            }
        }
    }, [values.fontFamily]);

    // Font size units
    const fontSizeUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' },
        { label: 'vw', value: 'vw' },
    ];

    // Line height units
    const lineHeightUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
    ];

    // Letter spacing units
    const letterSpacingUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
    ];

    // Font style options
    const fontStyleOptions = [
        { label: __('Default', 'digiblocks'), value: 'normal' },
        { label: __('Italic', 'digiblocks'), value: 'italic' },
        { label: __('Oblique', 'digiblocks'), value: 'oblique' },
    ];

    // Text transform options
    const textTransformOptions = [
        { label: __('Default', 'digiblocks'), value: '' },
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Capitalize', 'digiblocks'), value: 'capitalize' },
        { label: __('Uppercase', 'digiblocks'), value: 'uppercase' },
        { label: __('Lowercase', 'digiblocks'), value: 'lowercase' },
    ];

    // Text decoration options
    const textDecorationOptions = [
        { label: __('Default', 'digiblocks'), value: '' },
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Underline', 'digiblocks'), value: 'underline' },
        { label: __('Overline', 'digiblocks'), value: 'overline' },
        { label: __('Line Through', 'digiblocks'), value: 'line-through' },
    ];

    // Update handler for all typography settings
    const updateTypographyValue = (property, newValue) => {
        const updatedValues = {
            ...values,
            [property]: newValue
        };
        
        onChange(updatedValues);
        
        // Load Google Fonts when font family or font weight changes
        if (property === 'fontFamily') {
            window.digi.utils.loadGoogleFont(newValue);
        } else if (property === 'fontWeight' && values.fontFamily) {
            window.digi.utils.loadGoogleFont(values.fontFamily, newValue);
        }
    };

    // Update responsive value (fontSize, lineHeight, letterSpacing)
    const updateResponsiveValue = (property, device, newValue) => {
        onChange({
            ...values,
            [property]: {
                ...values[property],
                [device]: newValue
            }
        });
    };

    // Toggle panel open/closed
    const toggleTypographyPanel = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        window.digi.uiState.setPanelState('typography', controlId, newState);
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

    return (
        <div className={`digiblocks-typography-options digiblocks-control-popup__options ${isOpen ? 'active' : ''}`}>
            <div className="digiblocks-control-popup__options--action-wrapper">
                <span className="digiblocks-control-label">{label || __('Typography', 'digiblocks')}</span>
                <button 
                    type="button" 
                    aria-pressed={isOpen}
                    className={`components-button digiblocks-pencil-button digiblocks-control-popup__options--action-button ${isOpen ? 'is-pressed' : ''}`}
                    onClick={toggleTypographyPanel}
                >
                    <span className="dashicon dashicons dashicons-edit"></span>
                </button>
            </div>
            
            {isOpen && (
                <div className="digiblocks-popover digiblocks-control-popup">
                    <div className="components-base-control digiblocks-font-family-searchable-select__wrapper">
                        <label className="components-input-control__label" htmlFor="font-family">
                            {__('Font Family', 'digiblocks')}
                        </label>
                        <SelectControl
                            id="font-family"
                            value={values.fontFamily}
                            options={fontFamilyOptions}
                            onChange={(newValue) => updateTypographyValue('fontFamily', newValue)}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    </div>
                    
                    <div className="digiblocks-size-type-field-tabs">
                        <div className="digiblocks-responsive-control-inner">
                            <div className="components-base-control">
                                <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                                    <div className="digiblocks-control__header">
                                        <div className="digiblocks-responsive-label-wrap">
                                            <span className="digiblocks-control-label">{__('Font Size', 'digiblocks')}</span>
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
                                                    disabled={values.fontSize[localActiveDevice] === defaults.fontSize?.[localActiveDevice]}
                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                    onClick={() => updateResponsiveValue('fontSize', localActiveDevice, defaults.fontSize?.[localActiveDevice] || 16)}
                                                >
                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                </button>
                                            </div>
											{UnitsSelector && (
												<UnitsSelector
													value={values.fontSizeUnit}
													onChange={(value) => updateTypographyValue('fontSizeUnit', value)}
													units={fontSizeUnits}
													ariaLabel={__("Select Units", "digiblocks")}
												/>
											)}
                                        </div>
                                    </div>
                                    <div className="digiblocks-range-control__mobile-controls">
                                        <RangeControl
                                            value={values.fontSize[localActiveDevice]}
                                            onChange={(newValue) => updateResponsiveValue('fontSize', localActiveDevice, newValue)}
                                            min={0}
                                            max={200}
                                            step={values.fontSizeUnit === 'px' ? 1 : 0.1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="digiblocks-select-control digiblocks-select-control--layout-inline">
                        <SelectControl
                            label={__('Weight', 'digiblocks')}
                            value={values.fontWeight}
                            options={fontWeightOptions}
                            onChange={(newValue) => updateTypographyValue('fontWeight', newValue)}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    </div>

                    <div className="digiblocks-select-control digiblocks-select-control--layout-inline">
                        <SelectControl
                            label={__('Style', 'digiblocks')}
                            value={values.fontStyle}
                            options={fontStyleOptions}
                            onChange={(newValue) => updateTypographyValue('fontStyle', newValue)}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    </div>

                    <div className="digiblocks-select-control digiblocks-select-control--layout-inline">
                        <SelectControl
                            label={__('Transform', 'digiblocks')}
                            value={values.textTransform}
                            options={textTransformOptions}
                            onChange={(newValue) => updateTypographyValue('textTransform', newValue)}
                            __next40pxDefaultSize={true}
                            __nextHasNoMarginBottom={true}
                        />
                    </div>

                    <div className="digiblocks-typography-decoration">
                        <div className="digiblocks-select-control digiblocks-select-control--layout-inline">
                            <SelectControl
                                label={__('Decoration', 'digiblocks')}
                                value={values.textDecoration}
                                options={textDecorationOptions}
                                onChange={(newValue) => updateTypographyValue('textDecoration', newValue)}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </div>
                    </div>

                    <div className="digiblocks-size-type-field-tabs">
                        <div className="digiblocks-responsive-control-inner">
                            <div className="components-base-control">
                                <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                                    <div className="digiblocks-control__header">
                                        <div className="digiblocks-responsive-label-wrap">
                                            <span className="digiblocks-control-label">{__('Line Height', 'digiblocks')}</span>
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
                                                    disabled={values.lineHeight[localActiveDevice] === defaults.lineHeight?.[localActiveDevice]}
                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                    onClick={() => updateResponsiveValue('lineHeight', localActiveDevice, defaults.lineHeight?.[localActiveDevice] || 1.5)}
                                                >
                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                </button>
                                            </div>
											{UnitsSelector && (
												<UnitsSelector
													value={values.lineHeightUnit}
													onChange={(value) => updateTypographyValue('lineHeightUnit', value)}
													units={lineHeightUnits}
													ariaLabel={__("Select Units", "digiblocks")}
												/>
											)}
                                        </div>
                                    </div>
                                    <div className="digiblocks-range-control__mobile-controls">
                                        <RangeControl
                                            value={values.lineHeight[localActiveDevice]}
                                            onChange={(newValue) => updateResponsiveValue('lineHeight', localActiveDevice, newValue)}
                                            min={0}
                                            max={values.lineHeightUnit === 'px' ? 200 : 3}
                                            step={values.lineHeightUnit === 'px' ? 1 : 0.1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="digiblocks-size-type-field-tabs">
                        <div className="digiblocks-responsive-control-inner">
                            <div className="components-base-control">
                                <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                                    <div className="digiblocks-control__header">
                                        <div className="digiblocks-responsive-label-wrap">
                                            <span className="digiblocks-control-label">{__('Letter Spacing', 'digiblocks')}</span>
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
                                                    disabled={values.letterSpacing[localActiveDevice] === defaults.letterSpacing?.[localActiveDevice]}
                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                    onClick={() => updateResponsiveValue('letterSpacing', localActiveDevice, defaults.letterSpacing?.[localActiveDevice] || 0)}
                                                >
                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                </button>
                                            </div>
											{UnitsSelector && (
												<UnitsSelector
													value={values.letterSpacingUnit}
													onChange={(value) => updateTypographyValue('letterSpacingUnit', value)}
													units={letterSpacingUnits}
													ariaLabel={__("Select Units", "digiblocks")}
												/>
											)}
                                        </div>
                                    </div>
                                    <div className="digiblocks-range-control__mobile-controls">
                                        <RangeControl
                                            value={values.letterSpacing[localActiveDevice]}
                                            onChange={(newValue) => updateResponsiveValue('letterSpacing', localActiveDevice, newValue)}
                                            min={-50}
                                            max={200}
                                            step={values.letterSpacingUnit === 'px' ? 1 : 0.1}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TypographyControl;