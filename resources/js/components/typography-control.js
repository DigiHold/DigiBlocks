/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { SelectControl } = wp.components;
const { useState, useEffect, useRef } = wp.element;

import ResponsiveRangeControl from './range-control';

/**
 * Custom Font Family Select with search and live preview
 */
const FontFamilySelect = ({ label, value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [loadedFonts, setLoadedFonts] = useState(new Set());
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);
    const listRef = useRef(null);
    const observerRef = useRef(null);

    const getSelectedLabel = () => {
        const selected = options.find(opt => opt.value === value);
        return selected ? selected.label : __('Default', 'digiblocks');
    };

    useEffect(() => {
        setFilteredOptions(
            options.filter(option => 
                option.label.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, options]);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }, 0);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !listRef.current) return;

        if (!observerRef.current) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const fontFamily = entry.target.dataset.fontFamily;
                            if (fontFamily && !loadedFonts.has(fontFamily) && 
                                fontFamily !== '' && fontFamily !== 'system-ui') {
                                const isSystemFont = fontFamily.includes(',');
                                if (!isSystemFont) {
                                    window.digi?.utils?.loadGoogleFont(fontFamily, '400');
                                }
                                setLoadedFonts(prev => new Set([...prev, fontFamily]));
                            }
                        }
                    });
                },
                {
                    root: listRef.current,
                    rootMargin: '50px',
                    threshold: 0.1
                }
            );
        }

        const items = listRef.current.querySelectorAll('.digiblocks-font-option');
        items.forEach(item => observerRef.current.observe(item));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [isOpen, filteredOptions]);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSearchTerm('');
        }
    };

    const getFontStyle = (fontValue) => {
        if (!fontValue) {
            return {};
        }
        return { fontFamily: fontValue };
    };

    return (
        <div className="digiblocks-font-family-select" ref={dropdownRef}>
            <div className="digiblocks-font-family-select__field">
                {label && (
                    <label className="digiblocks-font-family-select__label">
                        {label}
                    </label>
                )}
                <div className="digiblocks-font-family-select__control">
                    <button
                        type="button"
                        className="digiblocks-font-family-select__trigger"
                        onClick={handleToggle}
                        aria-expanded={isOpen}
                        aria-haspopup="listbox"
                    >
                        <span className="digiblocks-font-family-select__value" style={getFontStyle(value)}>
                            {getSelectedLabel()}
                        </span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7L9 11L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="digiblocks-font-family-select__dropdown">
                            <div className="digiblocks-font-family-select__search">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder={__('Search fonts...', 'digiblocks')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="digiblocks-font-family-select__search-input"
                                />
                            </div>
                            <div 
                                className="digiblocks-font-family-select__list" 
                                ref={listRef}
                                role="listbox"
                            >
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            className={`digiblocks-font-option ${value === option.value ? 'is-selected' : ''}`}
                                            onClick={() => handleSelect(option.value)}
                                            data-font-family={option.value}
                                            style={getFontStyle(option.value)}
                                            role="option"
                                            aria-selected={value === option.value}
                                        >
                                            {option.label}
                                            {value === option.value && (
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 5L7 13L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            )}
                                        </button>
                                    ))
                                ) : (
                                    <div className="digiblocks-font-family-select__no-results">
                                        {__('No fonts found', 'digiblocks')}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

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
    
    const ensureResponsiveValue = (val, defaultUnit = 'px') => {
        if (!val || typeof val !== 'object') {
            return {
                desktop: { value: '', unit: defaultUnit },
                tablet: { value: '', unit: defaultUnit },
                mobile: { value: '', unit: defaultUnit }
            };
        }

        const result = {};
        ['desktop', 'tablet', 'mobile'].forEach(device => {
            if (val[device] && typeof val[device] === 'object' && val[device].hasOwnProperty('value')) {
                result[device] = {
                    value: val[device].value !== undefined ? val[device].value : '',
                    unit: val[device].unit || defaultUnit
                };
            } else {
                const deviceValue = typeof val[device] === 'number' ? val[device] : '';
                result[device] = { value: deviceValue, unit: defaultUnit };
            }
        });

        return result;
    };

    const values = {
        fontFamily: '',
        fontSize: ensureResponsiveValue(value?.fontSize || defaults?.fontSize, 'px'),
        fontWeight: '',
        fontStyle: 'normal',
        textTransform: '',
        textDecoration: '',
        lineHeight: ensureResponsiveValue(value?.lineHeight || defaults?.lineHeight, 'em'),
        letterSpacing: ensureResponsiveValue(value?.letterSpacing || defaults?.letterSpacing, 'px'),
        ...defaults,
        ...value
    };


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

    // Toggle panel open/closed
    const toggleTypographyPanel = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        window.digi.uiState.setPanelState('typography', controlId, newState);
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
                    <FontFamilySelect
                        label={__('Font Family', 'digiblocks')}
                        value={values.fontFamily}
                        options={fontFamilyOptions}
                        onChange={(newValue) => updateTypographyValue('fontFamily', newValue)}
                    />
                    
                    <ResponsiveRangeControl
                        label={__('Font Size', 'digiblocks')}
                        value={values.fontSize}
                        onChange={(newValue) => updateTypographyValue('fontSize', newValue)}
                        units={[
                            { label: 'px', value: 'px' },
                            { label: 'em', value: 'em' },
                            { label: 'rem', value: 'rem' },
                            { label: 'vw', value: 'vw' },
                            { label: 'vh', value: 'vh' },
                            { label: '%', value: '%' },
                        ]}
                        defaultUnit="px"
                        min={0}
                        max={{ px: 500, em: 50, rem: 50, vw: 100, vh: 100, '%': 100 }}
                        step={{ px: 1, em: 0.1, rem: 0.1, vw: 1, vh: 1, '%': 1 }}
                        defaultValues={defaults?.fontSize}
                    />

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

                    <ResponsiveRangeControl
                        label={__('Line Height', 'digiblocks')}
                        value={values.lineHeight}
                        onChange={(newValue) => updateTypographyValue('lineHeight', newValue)}
                        units={[
                            { label: 'px', value: 'px' },
                            { label: 'em', value: 'em' },
                            { label: 'rem', value: 'rem' },
                            { label: '%', value: '%' },
                        ]}
                        defaultUnit="em"
                        min={0}
                        max={{ px: 500, em: 50, rem: 50, '%': 100 }}
                        step={{ px: 1, em: 0.1, rem: 0.1, '%': 1 }}
                        defaultValues={defaults?.lineHeight}
                    />

                    <ResponsiveRangeControl
                        label={__('Letter Spacing', 'digiblocks')}
                        value={values.letterSpacing}
                        onChange={(newValue) => updateTypographyValue('letterSpacing', newValue)}
                        units={[
                            { label: 'px', value: 'px' },
                            { label: 'em', value: 'em' },
                            { label: 'rem', value: 'rem' },
                        ]}
                        defaultUnit="px"
                        min={{ px: -5, em: -0.5, rem: -0.5 }}
                        max={{ px: 500, em: 50, rem: 50 }}
                        step={{ px: 0.1, em: 0.01, rem: 0.01 }}
                        defaultValues={defaults?.letterSpacing}
                    />
                </div>
            )}
        </div>
    );
};

export default TypographyControl;