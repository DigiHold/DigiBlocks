/**
 * Custom Units Selector Component
  */
const { __ } = wp.i18n;
const { useState, useRef, useEffect } = wp.element;

const UnitsSelector = ({
    value = 'px',
    onChange,
    units = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' },
        { label: 'vw', value: 'vw' },
        { label: 'vh', value: 'vh' }
    ],
    ariaLabel = __('Select Units', 'digiblocks')
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [uniqueId] = useState(`units-${Math.random().toString(36).substr(2, 9)}`);

    const selectedUnit = units.find(unit => unit.value === value) || units[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const handleUnitChange = (unitValue) => {
        onChange(unitValue);
        setIsOpen(false);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <div className="digiblocks-units-wrapper" ref={wrapperRef}>
            <div
                className={`digiblocks-units-switcher ${isOpen ? 'is-open' : ''}`}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={ariaLabel}
                data-selected={selectedUnit.value}
            >
                <span className="digiblocks-units-switcher__label">{selectedUnit.icon || selectedUnit.label}</span>
                <span className={`dashicon dashicons dashicons-arrow-down-alt2 digiblocks-units-switcher__icon`}></span>
            </div>
            
            {isOpen && (
                <div className="digiblocks-units-choices">
                    {units.map((unit) => (
                        <div key={unit.value} className="digiblocks-units-choice">
                            <input
                                id={`${uniqueId}-${unit.value}`}
                                type="radio"
                                name={`${uniqueId}-unit`}
                                value={unit.value}
                                checked={value === unit.value}
                                onChange={() => handleUnitChange(unit.value)}
                                aria-label={typeof unit.label === 'string' ? unit.label : unit.value}
                            />
                            <label
                                className="digiblocks-units-choices-label"
                                htmlFor={`${uniqueId}-${unit.value}`}
                                data-choose={unit.value}
                            >
                                <span>{unit.icon || unit.label}</span>
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UnitsSelector;