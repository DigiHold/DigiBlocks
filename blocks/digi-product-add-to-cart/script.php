<?php
/**
 * DigiCommerce Product Add To Cart Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id = isset( $attrs['id'] ) ? $attrs['id'] : '';

// Only generate JS if we have a block ID
if ( empty( $id ) ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* DigiCommerce Product Add To Cart Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    // Check if consolidated data exists
    if (typeof digiBlocksData === 'undefined' || !digiBlocksData.digiAddToCart) {
        console.error('DigiBlocks: Missing DigiCommerce add to cart data');
        return;
    }
    
    const addToCartForm = document.querySelector('.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-form');
    
    if (!addToCartForm) return;
    
    const addToCartButton = addToCartForm.querySelector('.digiblocks-digi-add-to-cart-button');
    
    if (!addToCartButton) return;
    
    // Get data from consolidated object
    const ajaxUrl = digiBlocksData.ajax_url;
    const nonce = digiBlocksData.digiAddToCart.nonce;
    
    // Text strings
    const strings = {
        adding: <?php echo wp_json_encode( __( 'Adding...', 'digiblocks' ) ); ?>,
        added: <?php echo wp_json_encode( __( 'Product added to cart!', 'digiblocks' ) ); ?>,
        error: <?php echo wp_json_encode( __( 'Error adding product to cart.', 'digiblocks' ) ); ?>,
        network_error: <?php echo wp_json_encode( __( 'Network error. Please try again.', 'digiblocks' ) ); ?>,
        select_option: <?php echo wp_json_encode( __( 'Please select a product option.', 'digiblocks' ) ); ?>,
        add_to_cart: <?php echo wp_json_encode( __( 'Add to cart', 'digiblocks' ) ); ?>
    };
    
    // Flag to prevent multiple submissions
    let isSubmitting = false;
    
    // Handle variable products with radio buttons
    const variationRadios = addToCartForm.querySelectorAll('input[name="price_variation"]');
    if (variationRadios.length > 0) {
        handleVariableProduct();
    }
    
    function handleVariableProduct() {
        const variationNameInput = addToCartForm.querySelector('input[name="variation_name"]');
        const variationPriceInput = addToCartForm.querySelector('input[name="variation_price"]');
        
        function updateVariation() {
            const selectedRadio = addToCartForm.querySelector('input[name="price_variation"]:checked');
            
            if (selectedRadio) {
                const name = selectedRadio.dataset.name;
                const price = selectedRadio.value;
                const formattedPrice = selectedRadio.dataset.formattedPrice;
                
                if (variationNameInput) variationNameInput.value = name || '';
                if (variationPriceInput) variationPriceInput.value = price || '';
                
                // Enable button
                addToCartButton.disabled = false;
                
                // Update button text to include price
                updateButtonText(formattedPrice);
            } else {
                if (variationNameInput) variationNameInput.value = '';
                if (variationPriceInput) variationPriceInput.value = '';
                
                addToCartButton.disabled = true;
                
                // Reset button text
                resetButtonText();
            }
        }
        
        function updateButtonText(formattedPrice) {
            const buttonTextSpan = addToCartButton.querySelector('.digiblocks-button-text');
            const originalText = addToCartButton.dataset.originalText || strings.add_to_cart;
            
            if (!addToCartButton.dataset.originalText) {
                addToCartButton.dataset.originalText = originalText;
            }
            
            let newText = originalText;
            if (formattedPrice) {
                newText = `${originalText} - ${formattedPrice}`;
            }
            
            if (buttonTextSpan) {
                buttonTextSpan.textContent = newText;
            } else {
                // Update button text while preserving SVG
                const svg = addToCartButton.querySelector('svg');
                const newButtonText = document.createElement('span');
                newButtonText.className = 'digiblocks-button-text';
                newButtonText.textContent = newText;
                
                addToCartButton.innerHTML = '';
                if (svg) {
                    addToCartButton.appendChild(svg);
                }
                addToCartButton.appendChild(newButtonText);
            }
        }
        
        function resetButtonText() {
            const buttonTextSpan = addToCartButton.querySelector('.digiblocks-button-text');
            const originalText = addToCartButton.dataset.originalText || strings.add_to_cart;
            
            if (buttonTextSpan) {
                buttonTextSpan.textContent = originalText;
            } else {
                const svg = addToCartButton.querySelector('svg');
                const newButtonText = document.createElement('span');
                newButtonText.className = 'digiblocks-button-text';
                newButtonText.textContent = originalText;
                
                addToCartButton.innerHTML = '';
                if (svg) {
                    addToCartButton.appendChild(svg);
                }
                addToCartButton.appendChild(newButtonText);
            }
        }
        
        // Listen for changes
        variationRadios.forEach(radio => {
            radio.addEventListener('change', updateVariation);
        });
        
        // Initial check - disable button by default for variable products
        addToCartButton.disabled = true;
        updateVariation();
    }
    
    // Prevent all form submissions first
    addToCartForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        
        // Only trigger if not already submitting
        if (!isSubmitting) {
            handleAddToCart();
        }
        
        return false;
    });
    
    // Handle button click for AJAX add to cart
    addToCartButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        
        // Only handle if not already submitting
        if (!isSubmitting) {
            handleAddToCart();
        }
        
        return false;
    });
    
    function handleAddToCart() {
        if (isSubmitting || addToCartButton.classList.contains('loading') || addToCartButton.disabled) {
            return false;
        }
        
        // Set flag to prevent multiple submissions
        isSubmitting = true;
        
        // Get form data
        const formData = new FormData(addToCartForm);
        
        // Get product ID
        const productId = formData.get('product_id') || addToCartButton.dataset.productId;
        
        if (!productId) {
            console.error('No product ID found');
            isSubmitting = false;
            return false;
        }
        
        // For variable products, validate that a variation is selected
        const variationRadios = addToCartForm.querySelectorAll('input[name="price_variation"]');
        if (variationRadios.length > 0) {
            const selectedRadio = addToCartForm.querySelector('input[name="price_variation"]:checked');
            if (!selectedRadio) {
                showNotice(strings.select_option, 'error');
                isSubmitting = false;
                return false;
            }
        }
        
        // Add loading state
        addToCartButton.classList.add('loading');
        addToCartButton.disabled = true;
        
        // Change button text
        const buttonText = addToCartButton.querySelector('.digiblocks-button-text');
        const originalText = buttonText ? buttonText.textContent : addToCartButton.textContent;
        if (buttonText) {
            buttonText.textContent = strings.adding;
        } else {
            // Preserve SVG while updating text
            const svg = addToCartButton.querySelector('svg');
            const newButtonText = document.createElement('span');
            newButtonText.className = 'digiblocks-button-text';
            newButtonText.textContent = strings.adding;
            
            addToCartButton.innerHTML = '';
            if (svg) {
                addToCartButton.appendChild(svg);
            }
            addToCartButton.appendChild(newButtonText);
        }
        
        // Prepare AJAX data
        const ajaxData = new FormData();
        ajaxData.append('action', 'digiblocks_digi_add_to_cart');
        ajaxData.append('nonce', nonce);
        ajaxData.append('product_id', productId);
        
        // Add variation data if available
        const variationName = formData.get('variation_name');
        const variationPrice = formData.get('variation_price');
        const productPrice = formData.get('product_price');
        
        if (variationName) {
            ajaxData.append('variation_name', variationName);
        }
        if (variationPrice) {
            ajaxData.append('variation_price', variationPrice);
        }
        if (productPrice) {
            ajaxData.append('product_price', productPrice);
        }
        
        // Make AJAX request
        fetch(ajaxUrl, {
            method: 'POST',
            body: ajaxData,
            credentials: 'same-origin'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // Success
                showNotice(data.data.message || strings.added, 'success');
                
                // Trigger DigiCommerce cart update event
                document.dispatchEvent(new CustomEvent('digicommerce_cart_updated', {
                    detail: {
                        source: 'add_to_cart',
                        productId: productId,
                        cart: data.data.cart || [],
                        response: data.data
                    }
                }));
                
                // Add success state
                addToCartButton.classList.add('added');
                setTimeout(() => {
                    addToCartButton.classList.remove('added');
                }, 2000);
                
            } else {
                // Error
                const errorMessage = data.data && data.data.message ? data.data.message : strings.error;
                showNotice(errorMessage, 'error');
            }
        })
        .catch(error => {
            console.error('AJAX Error:', error);
            showNotice(strings.network_error, 'error');
        })
        .finally(() => {
            // Remove loading state
            addToCartButton.classList.remove('loading');
            addToCartButton.disabled = false;
            isSubmitting = false;
            
            // Restore button text
            if (buttonText) {
                buttonText.textContent = originalText;
            } else {
                const svg = addToCartButton.querySelector('svg');
                const newButtonText = document.createElement('span');
                newButtonText.className = 'digiblocks-button-text';
                newButtonText.textContent = originalText;
                
                addToCartButton.innerHTML = '';
                if (svg) {
                    addToCartButton.appendChild(svg);
                }
                addToCartButton.appendChild(newButtonText);
            }
        });
        
        return false;
    }
    
    function showNotice(message, type) {
        // Remove existing notices
        const existingNotices = document.querySelectorAll('.digiblocks-digi-notice');
        existingNotices.forEach(notice => notice.remove());
        
        // Create notice
        const notice = document.createElement('div');
        notice.className = 'digiblocks-digi-notice';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'error' ? 'digicommerce-error' : 'digicommerce-success';
        messageDiv.setAttribute('role', 'alert');
        messageDiv.textContent = message;
        
        notice.appendChild(messageDiv);
        
        // Style the notice
        Object.assign(notice.style, {
            margin: '1em 0',
            padding: '1em 1.618em',
            backgroundColor: type === 'error' ? '#e2401c' : '#0f834d',
            color: '#fff',
            borderRadius: '4px',
            fontWeight: '600',
            position: 'relative',
            zIndex: '999'
        });
        
        // Insert notice
        addToCartForm.parentNode.insertBefore(notice, addToCartForm);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (notice.parentNode) {
                notice.style.opacity = '0';
                notice.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    if (notice.parentNode) {
                        notice.remove();
                    }
                }, 300);
            }
        }, 5000);
        
        // Scroll to notice
        notice.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'nearest'
        });
    }
});
<?php
$digiblocks_js_output = ob_get_clean();