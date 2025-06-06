<?php
/**
 * Forms Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id              = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$formName        = isset( $attrs['formName'] ) ? $attrs['formName'] : __( 'Contact Form', 'digiblocks' );
$recipientEmail  = isset( $attrs['recipientEmail'] ) ? $attrs['recipientEmail'] : '';
$enableRecaptcha = isset( $attrs['enableRecaptcha'] ) ? $attrs['enableRecaptcha'] : false;
$successMessage  = isset( $attrs['successMessage'] ) ? $attrs['successMessage'] : __( 'Thank you for your submission!', 'digiblocks' );
$errorMessage    = isset( $attrs['errorMessage'] ) ? $attrs['errorMessage'] : __( 'There was an error submitting the form. Please try again.', 'digiblocks' );
$fields          = isset( $attrs['fields'] ) ? $attrs['fields'] : array();
$emailSubject    = isset( $attrs['emailSubject'] ) ? $attrs['emailSubject'] : __( 'New form submission', 'digiblocks' );
$useSiteLogo     = isset( $attrs['useSiteLogo'] ) ? $attrs['useSiteLogo'] : true;
$customLogo      = isset( $attrs['customLogo'] ) ? $attrs['customLogo'] : '';
$emailHeader     = isset( $attrs['emailHeader'] ) ? $attrs['emailHeader'] : '';
$emailFooter     = isset( $attrs['emailFooter'] ) ? $attrs['emailFooter'] : '';
$businessName    = isset( $attrs['businessName'] ) ? $attrs['businessName'] : '';
$businessAddress = isset( $attrs['businessAddress'] ) ? $attrs['businessAddress'] : '';

// JavaScript Output
ob_start();
?>
/* Forms Block Script - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    // Check if we have the localized data
    if (typeof digiBlocksData === 'undefined' || !digiBlocksData.forms) {
        console.error('DigiBlocks Forms: Missing AJAX data');
        return;
    }
    
    // Find the form
    const form = document.getElementById('<?php echo esc_attr( $id ); ?>-form');
    
    if (!form) return;
    
    // Form elements
    const formContainer = form.closest('.<?php echo esc_attr( $id ); ?>');
    const successMessage = form.querySelector('.digiblocks-form-success');
    const errorMessage = form.querySelector('.digiblocks-form-error');
    const submitButton = form.querySelector('.digiblocks-form-submit-button');
    
    // Add submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear previous messages
        clearMessages();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Submit form
        submitForm();
    });
    
    // Field event listeners for validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error when user types
            const errorElement = this.closest('.digiblocks-form-field')?.querySelector('.digiblocks-form-field-error');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
    });
    
    /**
     * Form validation
     */
    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea, select');
        
        // Reset validation messages
        form.querySelectorAll('.digiblocks-form-field-error').forEach(error => {
            error.style.display = 'none';
        });
        
        // Validate each field
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    /**
     * Validate a specific field
     */
    function validateField(field) {
        // Skip hidden fields
        if (field.type === 'hidden') {
            return true;
        }
        
        const fieldContainer = field.closest('.digiblocks-form-field');
        if (!fieldContainer) return true;
        
        const errorElement = fieldContainer.querySelector('.digiblocks-form-field-error');
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.required && !field.value.trim()) {
            isValid = false;
            errorMessage = '<?php echo esc_js( __( 'This field is required.', 'digiblocks' ) ); ?>';
        }
        
        // Email validation
        if (field.type === 'email' && field.value.trim()) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(field.value.trim())) {
                isValid = false;
                errorMessage = '<?php echo esc_js( __( 'Please enter a valid email address.', 'digiblocks' ) ); ?>';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && field.value.trim()) {
            const phonePattern = /^[0-9+\- ()]{7,}$/;
            if (!phonePattern.test(field.value.trim())) {
                isValid = false;
                errorMessage = '<?php echo esc_js( __( 'Please enter a valid phone number.', 'digiblocks' ) ); ?>';
            }
        }
        
        // URL validation
        if (field.type === 'url' && field.value.trim()) {
            try {
                new URL(field.value.trim());
            } catch (e) {
                isValid = false;
                errorMessage = '<?php echo esc_js( __( 'Please enter a valid URL.', 'digiblocks' ) ); ?>';
            }
        }
        
        // Number validation
        if (field.type === 'number' && field.value.trim()) {
            if (isNaN(field.value.trim())) {
                isValid = false;
                errorMessage = '<?php echo esc_js( __( 'Please enter a valid number.', 'digiblocks' ) ); ?>';
            }
        }
        
        // Display error if not valid
        if (!isValid && errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            field.setAttribute('aria-invalid', 'true');
        } else if (errorElement) {
            errorElement.style.display = 'none';
            field.setAttribute('aria-invalid', 'false');
        }
        
        return isValid;
    }
    
    /**
     * Submit form via AJAX
     */
    function submitForm() {
        // Show loading state
        form.classList.add('is-submitting');
        
        // Create form data
        const formData = new FormData(form);
        formData.append('action', 'digiblocks_submit_form');
        formData.append('form_id', '<?php echo esc_attr( $id ); ?>');
        formData.append('form_name', '<?php echo esc_js( $formName ); ?>');
        formData.append('form_nonce', digiBlocksData.forms.form_nonce);
        
        // Add field labels to the form data
        const fieldLabels = {};
        form.querySelectorAll('.digiblocks-form-field').forEach(field => {
            const fieldId = field.dataset.fieldId;
            if (fieldId) {
				let labelEl;
				
				// Handle checkbox fields differently
				if (field.dataset.fieldType === 'checkbox') {
					labelEl = field.querySelector('.digiblocks-form-checkbox-label span');
				} else {
					labelEl = field.querySelector('.digiblocks-form-field-label');
				}
				
				if (labelEl) {
					// Remove the * symbol from required fields
					let labelText = labelEl.textContent.replace(/\*$/, '').trim();
					fieldLabels[fieldId] = labelText;
				}
			}
        });
        formData.append('field_labels', JSON.stringify(fieldLabels));
        
        // Add email settings
		formData.append('recipient', '<?php echo esc_js( $recipientEmail ); ?>');
        formData.append('email_subject', '<?php echo esc_js( $emailSubject ); ?>');
        formData.append('use_site_logo', '<?php echo esc_js( $useSiteLogo ? 'true' : 'false' ); ?>');
        <?php if (!empty($customLogo)) : ?>
			formData.append('custom_logo', <?php echo esc_js(wp_json_encode(esc_url_raw($customLogo))); ?>);
		<?php else : ?>
			formData.append('custom_logo', '');
		<?php endif; ?>
        formData.append('email_header', '<?php echo esc_js( $emailHeader ); ?>');
        formData.append('email_footer', '<?php echo esc_js( $emailFooter ); ?>');
        formData.append('business_name', '<?php echo esc_js( $businessName ); ?>');
        formData.append('business_address', '<?php echo esc_js( $businessAddress ); ?>');
        
        // Add reCAPTCHA token if enabled
        <?php if ( $enableRecaptcha ) : ?>
        if (typeof grecaptcha !== 'undefined' && digiBlocksData.forms.recaptcha_site_key) {
            grecaptcha.ready(function() {
                grecaptcha.execute(digiBlocksData.forms.recaptcha_site_key, {action: 'submit'}).then(function(token) {
                    formData.append('recaptcha_token', token);
                    sendFormData(formData);
                });
            });
        } else {
            sendFormData(formData);
        }
        <?php else : ?>
        sendFormData(formData);
        <?php endif; ?>
    }
    
    /**
     * Send form data to server
     */
    function sendFormData(formData) {
        fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Remove loading state
            form.classList.remove('is-submitting');
            
            if (data.success) {
                // Show success message
                successMessage.textContent = data.data.message || '<?php echo esc_js( $successMessage ); ?>';
                successMessage.style.display = 'block';
                
                // Reset form
                form.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Show error message
                errorMessage.textContent = data.data.message || '<?php echo esc_js( $errorMessage ); ?>';
                errorMessage.style.display = 'block';
                
                // Show field errors if any
                if (data.data.field_errors) {
                    Object.keys(data.data.field_errors).forEach(fieldId => {
                        const field = form.querySelector(`[name="${fieldId}"]`);
                        if (field) {
                            const fieldContainer = field.closest('.digiblocks-form-field');
                            const errorElement = fieldContainer.querySelector('.digiblocks-form-field-error');
                            if (errorElement) {
                                errorElement.textContent = data.data.field_errors[fieldId];
                                errorElement.style.display = 'block';
                                field.setAttribute('aria-invalid', 'true');
                            }
                        }
                    });
                }
                
                // Scroll to error message
                errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        })
        .catch(error => {
            // Remove loading state
            form.classList.remove('is-submitting');
            
            // Show error message
            errorMessage.textContent = '<?php echo esc_js( $errorMessage ); ?>';
            errorMessage.style.display = 'block';
            
            console.error('Form submission error:', error);
        });
    }
    
    /**
     * Clear all messages
     */
    function clearMessages() {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        form.querySelectorAll('.digiblocks-form-field-error').forEach(error => {
            error.style.display = 'none';
        });
    }
});
<?php
$digiblocks_js_output = ob_get_clean();