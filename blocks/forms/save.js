/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Forms block
 */
const FormsSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        animation,
        animationDuration,
        animationDelay,
        successMessage,
        errorMessage,
        submitButtonText,
        buttonAlign,
        fields
    } = attributes;

    // Get block classes
    const blockClass = `digiblocks-forms ${id} ${animation !== 'none' ? `animate-${animation} digi-animate-hidden` : ''} ${customClasses || ''}`;

    // Build class names
    const blockProps = useBlockProps.save({
        className: blockClass,
        id: anchor || null,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // Function to render the form field
    const renderFormField = (field, index) => {
        // Define the field width class
        const fieldWidthClass = `digiblocks-field-width-${field.width || '100'}`;
        
        switch (field.type) {
            case 'text':
            case 'email':
            case 'number':
            case 'tel':
            case 'url':
            case 'date':
                return (
                    <div key={field.id} className={`digiblocks-form-field ${fieldWidthClass}`} data-field-id={field.id} data-field-type={field.type}>
                        <label className="digiblocks-form-field-label" htmlFor={`${id}-${field.id}`}>
                            {field.label}
                            {field.required && <span className="digiblocks-form-field-required">*</span>}
                        </label>
                        
                        <input
                            type={field.type}
                            id={`${id}-${field.id}`}
                            name={field.id}
                            className="digiblocks-form-input"
                            placeholder={field.placeholder || ''}
                            required={field.required}
                        />
                        
                        <div className="digiblocks-form-field-error"></div>
                    </div>
                );
                
            case 'textarea':
                return (
                    <div key={field.id} className={`digiblocks-form-field ${fieldWidthClass}`} data-field-id={field.id} data-field-type={field.type}>
                        <label className="digiblocks-form-field-label" htmlFor={`${id}-${field.id}`}>
                            {field.label}
                            {field.required && <span className="digiblocks-form-field-required">*</span>}
                        </label>
                        
                        <textarea
                            id={`${id}-${field.id}`}
                            name={field.id}
                            className="digiblocks-form-textarea"
                            placeholder={field.placeholder || ''}
                            required={field.required}
                        ></textarea>
                        
                        <div className="digiblocks-form-field-error"></div>
                    </div>
                );
                
            case 'select':
                return (
                    <div key={field.id} className={`digiblocks-form-field ${fieldWidthClass}`} data-field-id={field.id} data-field-type={field.type}>
                        <label className="digiblocks-form-field-label" htmlFor={`${id}-${field.id}`}>
                            {field.label}
                            {field.required && <span className="digiblocks-form-field-required">*</span>}
                        </label>
                        
                        <select
                            id={`${id}-${field.id}`}
                            name={field.id}
                            className="digiblocks-form-select"
                            required={field.required}
                        >
                            <option value="">{field.placeholder || 'Select an option'}</option>
                            {field.options && field.options.map((option, optionIndex) => (
                                <option key={optionIndex} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        
                        <div className="digiblocks-form-field-error"></div>
                    </div>
                );
                
            case 'checkbox':
                return (
                    <div key={field.id} className={`digiblocks-form-field ${fieldWidthClass}`} data-field-id={field.id} data-field-type={field.type}>
                        <label className="digiblocks-form-checkbox-label">
                            <input
                                type="checkbox"
                                id={`${id}-${field.id}`}
                                name={field.id}
                                className="digiblocks-form-checkbox"
                                value="1"
                                required={field.required}
                            />
                            <span>
                                {field.label}
                                {field.required && <span className="digiblocks-form-field-required">*</span>}
                            </span>
                        </label>
                        
                        <div className="digiblocks-form-field-error"></div>
                    </div>
                );
                
            case 'radio':
                return (
                    <div key={field.id} className={`digiblocks-form-field ${fieldWidthClass}`} data-field-id={field.id} data-field-type={field.type}>
                        <label className="digiblocks-form-field-label">
                            {field.label}
                            {field.required && <span className="digiblocks-form-field-required">*</span>}
                        </label>
                        
                        {field.options && field.options.map((option, optionIndex) => (
                            <label key={optionIndex} className="digiblocks-form-radio-label">
                                <input
                                    type="radio"
                                    id={`${id}-${field.id}-${optionIndex}`}
                                    name={field.id}
                                    className="digiblocks-form-radio"
                                    value={option.value}
                                    required={field.required && optionIndex === 0}
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                        
                        <div className="digiblocks-form-field-error"></div>
                    </div>
                );
                
            case 'hidden':
                return (
                    <input
                        key={field.id}
                        type="hidden"
                        id={`${id}-${field.id}`}
                        name={field.id}
                        value={field.value || ''}
                        data-field-id={field.id}
                        data-field-type={field.type}
                    />
                );
                
            default:
                return null;
        }
    };

    return (
        <div {...blockProps}>
            <form 
                className="digiblocks-form" 
                id={`${id}-form`}
                data-form-id={id}
                onSubmit="return false;"
            >
                <div className="digiblocks-form-fields">
                    {fields && fields.map((field, index) => renderFormField(field, index))}
                </div>
                
                <div className="digiblocks-form-submit" style={{ textAlign: buttonAlign === 'full' ? 'center' : buttonAlign }}>
                    <button 
                        type="submit" 
                        className="digiblocks-form-submit-button"
                        style={buttonAlign === 'full' ? { width: '100%' } : {}}
                    >
                        {submitButtonText}
                    </button>
                </div>
                
                <div className="digiblocks-form-messages">
                    <div className="digiblocks-form-success">{successMessage}</div>
                    <div className="digiblocks-form-error">{errorMessage}</div>
                </div>
            </form>
        </div>
    );
};

export default FormsSave;