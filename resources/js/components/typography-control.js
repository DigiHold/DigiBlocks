/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
    SelectControl, 
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
 * Typography Control Component that matches WordPress native typography controls
 * 
 * @param {Object} props Component properties
 * @param {string} props.label Control label
 * @param {Object} props.value Current typography values
 * @param {Function} props.onChange Change handler
 * @param {Object} props.defaults Default values
 * @returns {JSX.Element} Typography control component
 */
const TypographyControl = ({ label, value, onChange, defaults = {} }) => {
    // State for panel toggle
    const [isOpen, setIsOpen] = useState(false);
    
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

    // First useEffect - Load Google Font data and set initial font options
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

    // Second useEffect - Load fonts when component mounts and when values change
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

    // Third useEffect - Force loading saved fonts on initial render
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
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

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
        setIsOpen(!isOpen);
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

    return (
        <div className={`digiblocks-typography-options digiblocks-control-popup__options ${isOpen ? 'active' : ''}`}>
            <div className="digiblocks-control-popup__options--action-wrapper">
                <span className="digiblocks-control-label">{label || __('Typography', 'digiblocks')}</span>
                <button 
                    type="button" 
                    aria-pressed={isOpen}
                    className={`components-button digiblocks-typography-button digiblocks-control-popup__options--action-button ${isOpen ? 'is-pressed' : ''}`}
                    onClick={toggleTypographyPanel}
                >
                    <span className="dashicon dashicons dashicons-edit"></span>
                </button>
            </div>
            
            {isOpen && (
                <div className="digiblocks-typography-advanced digiblocks-control-popup">
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
                                            {renderResponsiveControl()}
                                        </div>
                                        <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                            <div tabIndex="0">
                                                <button 
                                                    type="button" 
                                                    disabled={values.fontSize[activeDevice] === defaults.fontSize?.[activeDevice]}
                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                    onClick={() => updateResponsiveValue('fontSize', activeDevice, defaults.fontSize?.[activeDevice] || 16)}
                                                >
                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                </button>
                                            </div>
                                            <ToggleGroupControl
                                                value={values.fontSizeUnit}
                                                onChange={(value) => updateTypographyValue('fontSizeUnit', value)}
                                                isBlock
                                                isSmall
												hideLabelFromVision
                                                aria-label={__("Select Units", "digiblocks")}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            >
                                                {fontSizeUnits.map(unit => (
                                                    <ToggleGroupControlOption
                                                        key={unit.value}
                                                        value={unit.value}
                                                        label={unit.label}
                                                    />
                                                ))}
                                            </ToggleGroupControl>
                                        </div>
                                    </div>
                                    <div className="digiblocks-range-control__mobile-controls">
                                        <RangeControl
                                            value={values.fontSize[activeDevice]}
                                            onChange={(newValue) => updateResponsiveValue('fontSize', activeDevice, newValue)}
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
                                            {renderResponsiveControl()}
                                        </div>
                                        <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                            <div tabIndex="0">
                                                <button 
                                                    type="button" 
                                                    disabled={values.lineHeight[activeDevice] === defaults.lineHeight?.[activeDevice]}
                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                    onClick={() => updateResponsiveValue('lineHeight', activeDevice, defaults.lineHeight?.[activeDevice] || 1.5)}
                                                >
                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                </button>
                                            </div>
                                            <ToggleGroupControl
                                                value={values.lineHeightUnit}
                                                onChange={(value) => updateTypographyValue('lineHeightUnit', value)}
                                                isBlock
                                                isSmall
												hideLabelFromVision
                                                aria-label={__("Select Units", "digiblocks")}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            >
                                                {lineHeightUnits.map(unit => (
                                                    <ToggleGroupControlOption
                                                        key={unit.value}
                                                        value={unit.value}
                                                        label={unit.label}
                                                    />
                                                ))}
                                            </ToggleGroupControl>
                                        </div>
                                    </div>
                                    <div className="digiblocks-range-control__mobile-controls">
                                        <RangeControl
                                            value={values.lineHeight[activeDevice]}
                                            onChange={(newValue) => updateResponsiveValue('lineHeight', activeDevice, newValue)}
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
                                            {renderResponsiveControl()}
                                        </div>
                                        <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                            <div tabIndex="0">
                                                <button 
                                                    type="button" 
                                                    disabled={values.letterSpacing[activeDevice] === defaults.letterSpacing?.[activeDevice]}
                                                    className="components-button digiblocks-reset is-secondary is-small"
                                                    onClick={() => updateResponsiveValue('letterSpacing', activeDevice, defaults.letterSpacing?.[activeDevice] || 0)}
                                                >
                                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                </button>
                                            </div>
                                            <ToggleGroupControl
                                                value={values.letterSpacingUnit}
                                                onChange={(value) => updateTypographyValue('letterSpacingUnit', value)}
                                                isBlock
                                                isSmall
												hideLabelFromVision
                                                aria-label={__("Select Units", "digiblocks")}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            >
                                                {letterSpacingUnits.map(unit => (
                                                    <ToggleGroupControlOption
                                                        key={unit.value}
                                                        value={unit.value}
                                                        label={unit.label}
                                                    />
                                                ))}
                                            </ToggleGroupControl>
                                        </div>
                                    </div>
                                    <div className="digiblocks-range-control__mobile-controls">
                                        <RangeControl
                                            value={values.letterSpacing[activeDevice]}
                                            onChange={(newValue) => updateResponsiveValue('letterSpacing', activeDevice, newValue)}
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