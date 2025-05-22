<?php
/**
 * Newsletter Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$id = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-newsletter-' . uniqid();

// JavaScript output
ob_start();
?>
(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNewsletter);
    } else {
        initNewsletter();
    }
    
    function initNewsletter() {
        const newsletterBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
        if (!newsletterBlock) return;
        
        const form = newsletterBlock.querySelector('.digiblocks-newsletter-form');
        if (!form) return;
        
        // Add nonce to the form
        const nonceField = form.querySelector('input[name="digiblocks_newsletter_nonce"]');
        if (nonceField && typeof digiBlocksNewsletterData !== 'undefined') {
            nonceField.value = digiBlocksNewsletterData.nonce;
        }
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const submitButton = form.querySelector('.digiblocks-newsletter-button');
            const successMessage = newsletterBlock.querySelector('.digiblocks-newsletter-message.success');
            const errorMessage = newsletterBlock.querySelector('.digiblocks-newsletter-message.error');
            
            // Hide previous messages
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            
            // Disable submit button
            submitButton.disabled = true;
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = '<?php esc_html_e( 'Subscribing...', 'digiblocks' ); ?>';
            
            // Prepare data for AJAX
            const ajaxData = {
                action: 'digiblocks_newsletter_subscribe',
                email: formData.get('digiblocks_newsletter_email'),
                name: formData.get('digiblocks_newsletter_name') || '',
                block_id: formData.get('block_id'),
                digiblocks_newsletter_nonce: formData.get('digiblocks_newsletter_nonce')
            };
            
            submitForm(ajaxData);
            
            function submitForm(data) {
                // Convert data to URLSearchParams for proper encoding
                const params = new URLSearchParams();
                for (const key in data) {
                    params.append(key, data[key]);
                }
                
                fetch(digiBlocksNewsletterData.ajax_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: params.toString()
                })
                .then(response => response.json())
                .then(data => {
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    
                    if (data.success) {
                        // Show success message
                        successMessage.style.display = 'block';
                        
                        // Reset form
                        form.reset();
                        
                        // Hide success message after 5 seconds
                        setTimeout(function() {
                            successMessage.style.display = 'none';
                        }, 5000);
                    } else {
                        // Show error message
                        errorMessage.style.display = 'block';
                        
                        // Hide error message after 5 seconds
                        setTimeout(function() {
                            errorMessage.style.display = 'none';
                        }, 5000);
                    }
                })
                .catch(error => {
                    console.error('Newsletter subscription error:', error);
                    
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    
                    // Show error message
                    errorMessage.style.display = 'block';
                    
                    // Hide error message after 5 seconds
                    setTimeout(function() {
                        errorMessage.style.display = 'none';
                    }, 5000);
                });
            }
        });
    }
})();
<?php
$digiblocks_js_output = ob_get_clean();