<?php
/**
 * Product Add To Cart Block JavaScript
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
/* Product Add To Cart Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const addToCartForm = document.querySelector('.<?php echo esc_attr( $id ); ?> .digiblocks-add-to-cart-form');
    
    if (!addToCartForm) return;
    
    const addToCartButton = addToCartForm.querySelector('.digiblocks-add-to-cart-button');
    
    if (!addToCartButton) return;
    
    // Check if we have the localized data
    if (typeof digiBlocksAddToCartData === 'undefined') {
        console.error('DigiBlocks Add to Cart: Missing AJAX data');
        return;
    }
    
    // Flag to prevent multiple submissions
    let isSubmitting = false;
    
    // Handle variable products
    const variationsContainer = addToCartForm.querySelector('.digiblocks-variations');
    if (variationsContainer) {
        handleVariableProduct();
    }
    
    function handleVariableProduct() {
        const variationSelects = addToCartForm.querySelectorAll('select[name^="attribute_"]');
        const variationIdInput = addToCartForm.querySelector('input[name="variation_id"]');
        const variationsDataElement = addToCartForm.querySelector('.digiblocks-variations-data');
        const priceDisplay = addToCartForm.querySelector('.digiblocks-variation-price');
        const priceAmount = addToCartForm.querySelector('.digiblocks-variation-price .price-amount');
        const showCurrency = addToCartButton.dataset.showCurrency === '1';
        
        if (!variationsDataElement) return;
        
        let variations = [];
        try {
            variations = JSON.parse(variationsDataElement.textContent);
        } catch (e) {
            console.error('Error parsing variations data:', e);
            return;
        }
        
        function areAllVariationsSelected() {
            return Array.from(variationSelects).every(select => select.value !== '');
        }
        
        function findMatchingVariation() {
            // Only proceed if all variations are selected
            if (!areAllVariationsSelected()) {
                return null;
            }
            
            const selectedAttributes = {};
            
            variationSelects.forEach(select => {
                const attributeName = select.name;
                const selectedValue = select.value;
                selectedAttributes[attributeName] = selectedValue;
            });
            
            // Find matching variation - must match ALL attributes
            for (const variation of variations) {
                let matches = true;
                
                // Check if this variation matches all selected attributes
                for (const [attrName, attrValue] of Object.entries(selectedAttributes)) {
                    const variationAttrValue = variation.attributes[attrName];
                    if (!variationAttrValue || variationAttrValue !== attrValue) {
                        matches = false;
                        break;
                    }
                }
                
                // Also ensure the variation has values for all required attributes
                if (matches) {
                    const hasAllRequiredAttrs = Object.keys(selectedAttributes).every(attrName => {
                        return variation.attributes[attrName] && variation.attributes[attrName] !== '';
                    });
                    
                    if (hasAllRequiredAttrs) {
                        return variation;
                    }
                }
            }
            
            return null;
        }
        
        function updateVariation() {
            const allSelected = areAllVariationsSelected();
            const matchedVariation = findMatchingVariation();
            
            if (matchedVariation) {
                // Valid variation found
                variationIdInput.value = matchedVariation.variation_id;
                addToCartButton.disabled = !matchedVariation.is_purchasable || !matchedVariation.is_in_stock;
                addToCartButton.value = matchedVariation.variation_id;
                
                // Update price display
                updatePriceDisplay(matchedVariation);
                
            } else {
                // No valid variation found
                variationIdInput.value = 0;
                addToCartButton.value = addToCartButton.dataset.productId;
                
                if (allSelected) {
                    // All variations selected but no valid combination
                    addToCartButton.disabled = true;
                } else {
                    // Not all variations selected yet
                    addToCartButton.disabled = true;
                }
                
                // Hide price display
                if (priceDisplay) {
                    priceDisplay.style.display = 'none';
                }
            }
        }
        
        function updatePriceDisplay(variation) {
            if (!priceDisplay || !priceAmount) return;
            
            const currencySpan = priceDisplay.querySelector('.digiblocks-currency');
            
            // Get price information from variation
            let priceHtml = '';
            let rawPrice = '';
            
            if (variation.price_html) {
                // Use WooCommerce's formatted price HTML
                priceHtml = variation.price_html;
                
                // Extract raw price number from the HTML for custom formatting
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = variation.price_html;
                const priceText = tempDiv.textContent || tempDiv.innerText || '';
                // Extract number
                const priceMatch = priceText.match(/[\d,]+\.?\d*/);
                if (priceMatch) {
                    rawPrice = priceMatch[0];
                }
            } else if (variation.display_price !== undefined) {
                // Format price manually
                const price = parseFloat(variation.display_price);
                if (!isNaN(price)) {
                    rawPrice = price.toFixed(2);
                }
            }
            
            if (priceHtml || rawPrice) {
                if (showCurrency && rawPrice && currencySpan) {
                    // Show our custom currency and raw price
                    currencySpan.style.display = 'inline-flex';
                    priceAmount.textContent = rawPrice;
                } else if (priceHtml) {
                    // Hide our custom currency and use WooCommerce's formatted price
                    if (currencySpan) {
                        currencySpan.style.display = 'none';
                    }
                    priceAmount.innerHTML = priceHtml;
                } else {
                    // Fallback to raw price without currency
                    if (currencySpan) {
                        currencySpan.style.display = 'none';
                    }
                    priceAmount.textContent = rawPrice;
                }
                
                priceDisplay.style.display = 'flex';
            } else {
                priceDisplay.style.display = 'none';
            }
        }
        
        // Listen for changes
        variationSelects.forEach(select => {
            select.addEventListener('change', updateVariation);
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
        
        // Get product ID from button value or data-product-id attribute
        let productId = addToCartButton.value || addToCartButton.dataset.productId;
        
        // If no product ID from button, try to get from form data
        if (!productId) {
            productId = formData.get('add-to-cart');
        }
        
        // If still no product ID, try to get from any input with name="add-to-cart"
        if (!productId) {
            const addToCartInput = addToCartForm.querySelector('input[name="add-to-cart"]');
            if (addToCartInput) {
                productId = addToCartInput.value;
            }
        }
        
        if (!productId) {
            console.error('No product ID found');
            isSubmitting = false;
            return false;
        }
        
        // For variable products, validate that all variations are selected
        const variationSelects = addToCartForm.querySelectorAll('select[name^="attribute_"]');
        if (variationSelects.length > 0) {
            const allSelected = Array.from(variationSelects).every(select => select.value !== '');
            if (!allSelected) {
                showNotice('<?php esc_html_e( 'Please select all product options.', 'digiblocks' ); ?>', 'error');
                isSubmitting = false;
                return false;
            }
            
            const variationIdInput = addToCartForm.querySelector('input[name="variation_id"]');
            if (!variationIdInput || !variationIdInput.value || variationIdInput.value === '0') {
                showNotice('<?php esc_html_e( 'Please select a valid product variation.', 'digiblocks' ); ?>', 'error');
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
            buttonText.textContent = '<?php esc_html_e( 'Adding...', 'digiblocks' ); ?>';
        } else {
            addToCartButton.textContent = '<?php esc_html_e( 'Adding...', 'digiblocks' ); ?>';
        }
        
        // Prepare AJAX data
        const ajaxData = new FormData();
        ajaxData.append('action', 'digiblocks_add_to_cart');
        ajaxData.append('nonce', digiBlocksAddToCartData.nonce);
        ajaxData.append('product_id', productId);
        
        // Add all form data (important for variable products)
        for (const [key, value] of formData.entries()) {
            if (key !== 'add-to-cart') {
                ajaxData.append(key, value);
            }
        }
        
        // For variable products, also check if we have a variation_id from the button value
        const buttonValue = addToCartButton.value;
        if (buttonValue && buttonValue !== productId && buttonValue !== addToCartButton.dataset.productId) {
            ajaxData.append('variation_id', buttonValue);
        }
        
        // Make AJAX request
        fetch(digiBlocksAddToCartData.ajax_url, {
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
                showNotice(data.data.message || '<?php esc_html_e( 'Product added to cart!', 'digiblocks' ); ?>', 'success');
                
                // Update cart fragments if available
                if (data.data.fragments) {
                    updateCartFragments(data.data.fragments);
                }
                
                // Update cart count and totals
                if (typeof data.data.cart_count !== 'undefined') {
                    updateCartCount(data.data.cart_count);
                }
                if (typeof data.data.cart_total !== 'undefined') {
                    updateCartTotal(data.data.cart_total);
                }
                
                // Trigger WooCommerce events for compatibility
                document.body.dispatchEvent(new CustomEvent('added_to_cart', {
                    detail: {
                        productId: productId,
                        quantity: formData.get('quantity') || 1,
                        fragments: data.data.fragments || {},
                        cart_hash: data.data.cart_hash || ''
                    }
                }));
                
                // Trigger custom event for other scripts
                document.dispatchEvent(new CustomEvent('digiblocks_added_to_cart', {
                    detail: {
                        productId: productId,
                        quantity: formData.get('quantity') || 1,
                        response: data.data
                    }
                }));
                
                // Update mini cart if WooCommerce functions are available
                if (typeof wc_add_to_cart_params !== 'undefined') {
                    updateWooCommerceCart();
                }
                
                addToCartButton.classList.add('added');
                setTimeout(() => {
                    addToCartButton.classList.remove('added');
                }, 2000);
                
            } else {
                // Error
                const errorMessage = data.data && data.data.message ? data.data.message : '<?php esc_html_e( 'Error adding product to cart.', 'digiblocks' ); ?>';
                showNotice(errorMessage, 'error');
            }
        })
        .catch(error => {
            console.error('AJAX Error:', error);
            showNotice('<?php esc_html_e( 'Network error. Please try again.', 'digiblocks' ); ?>', 'error');
        })
        .finally(() => {
            // Remove loading state
            addToCartButton.classList.remove('loading');
            
            // Re-evaluate button state for variable products
            const variationsContainer = addToCartForm.querySelector('.digiblocks-variations');
            if (variationsContainer) {
                const variationSelects = addToCartForm.querySelectorAll('select[name^="attribute_"]');
                const allSelected = Array.from(variationSelects).every(select => select.value !== '');
                const variationIdInput = addToCartForm.querySelector('input[name="variation_id"]');
                const hasValidVariation = variationIdInput && variationIdInput.value && variationIdInput.value !== '0';
                
                addToCartButton.disabled = !allSelected || !hasValidVariation;
            } else {
                addToCartButton.disabled = false;
            }
            
            isSubmitting = false;
            
            if (buttonText) {
                buttonText.textContent = originalText;
            } else {
                addToCartButton.textContent = originalText;
            }
        });
        
        return false;
    }
    
    function updateCartFragments(fragments) {
        if (!fragments || typeof fragments !== 'object') return;
        
        Object.keys(fragments).forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element) {
                    element.outerHTML = fragments[selector];
                }
            });
        });
    }
    
    function updateCartCount(count) {
        if (typeof count === 'undefined') return;
        
        // Update common cart count selectors
        const selectors = [
            '.cart-contents-count',
            '.cart-count',
            '.cart-items-count',
            '.header-cart-count',
            '.woocommerce-cart-count',
            '.cart-total-count',
            '.cart-quantity'
        ];
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.textContent = count;
            });
        });
        
        // Update cart badges
        const badges = document.querySelectorAll('.cart-badge, .cart-bubble');
        badges.forEach(badge => {
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = '';
            } else {
                badge.style.display = 'none';
            }
        });
    }
    
    function updateCartTotal(total) {
        if (typeof total === 'undefined') return;
        
        // Update common cart total selectors
        const selectors = [
            '.cart-total',
            '.cart-amount',
            '.header-cart-total',
            '.woocommerce-cart-total'
        ];
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.textContent = total;
            });
        });
    }
    
    function updateWooCommerceCart() {
        // Refresh WooCommerce mini cart
        if (typeof jQuery !== 'undefined' && jQuery('body').hasClass('woocommerce-cart')) {
            // If on cart page, trigger update
            jQuery('body').trigger('update_checkout');
        }
        
        // Trigger WooCommerce cart widget update
        const cartWidgets = document.querySelectorAll('.widget_shopping_cart');
        cartWidgets.forEach(widget => {
            // Force refresh of cart widget
            const event = new Event('wc_fragment_refresh');
            widget.dispatchEvent(event);
        });
    }
    
    function showNotice(message, type) {
        // Remove existing notices
        const existingNotices = document.querySelectorAll('.digiblocks-wc-notice');
        existingNotices.forEach(notice => notice.remove());
        
        // Create notice
        const notice = document.createElement('div');
        notice.className = 'digiblocks-wc-notice woocommerce-notices-wrapper';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'error' ? 'woocommerce-error' : 'woocommerce-message';
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