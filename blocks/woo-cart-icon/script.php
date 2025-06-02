<?php
/**
 * Cart Icon Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id               = isset( $attrs['id'] ) ? $attrs['id'] : '';
$showCount        = isset( $attrs['showCount'] ) ? $attrs['showCount'] : true;
$showText         = isset( $attrs['showText'] ) ? $attrs['showText'] : false;
$showTotal        = isset( $attrs['showTotal'] ) ? $attrs['showTotal'] : false;
$showMiniCart     = isset( $attrs['showMiniCart'] ) ? $attrs['showMiniCart'] : false;
$hideOnEmpty      = isset( $attrs['hideOnEmpty'] ) ? $attrs['hideOnEmpty'] : false;
$hoverEffect      = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';

// Only generate JS if we have a block ID
if ( empty( $id ) ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* Cart Icon Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const cartBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    
    if (!cartBlock) return;
    
    // Check if we have the localized data
    if (typeof digiBlocksData === 'undefined' || !digiBlocksData.cart) {
        console.error('DigiBlocks Cart Icon: Missing AJAX data');
        return;
    }
    
    // Configuration
    const config = {
        hideOnEmpty: <?php echo $hideOnEmpty ? 'true' : 'false'; ?>,
        showCount: <?php echo $showCount ? 'true' : 'false'; ?>,
        showText: <?php echo $showText ? 'true' : 'false'; ?>,
        showTotal: <?php echo $showTotal ? 'true' : 'false'; ?>,
        showMiniCart: <?php echo $showMiniCart ? 'true' : 'false'; ?>,
        hoverEffect: '<?php echo esc_js( $hoverEffect ); ?>'
    };
    
    // Text strings
    const strings = {
        total: '<?php echo esc_js( __( 'Total:', 'digiblocks' ) ); ?>',
        viewCart: '<?php echo esc_js( __( 'View Cart', 'digiblocks' ) ); ?>',
        checkout: '<?php echo esc_js( __( 'Checkout', 'digiblocks' ) ); ?>',
        emptyCart: '<?php echo esc_js( __( 'Your cart is currently empty.', 'digiblocks' ) ); ?>',
        quantity: '<?php echo esc_js( __( 'Quantity', 'digiblocks' ) ); ?>',
        removeItem: '<?php echo esc_js( __( 'Remove this item', 'digiblocks' ) ); ?>'
    };
    
    // Cart elements
    const cartIcon = cartBlock.querySelector('.digiblocks-cart-icon-icon');
    const cartCount = cartBlock.querySelector('.digiblocks-cart-count');
    const cartText = cartBlock.querySelector('.digiblocks-cart-text');
    const cartTotal = cartBlock.querySelector('.digiblocks-cart-total');
    const miniCart = cartBlock.querySelector('.digiblocks-mini-cart');
    const miniCartContent = miniCart ? miniCart.querySelector('.digiblocks-mini-cart-content') : null;
    const cartLink = cartBlock.querySelector('.digiblocks-cart-icon-link');
    
    // State management
    let isUpdating = false;
    let miniCartVisible = false;
    
    // Update cart display
    function updateCartDisplay(data) {
        try {
            const count = parseInt(data.count) || 0;
            const total = data.total_html || data.total || '';
            
            // Update count
            if (cartCount && config.showCount) {
                cartCount.textContent = count.toString();
                cartCount.style.display = (config.hideOnEmpty && count === 0) ? 'none' : 'flex';
            }
            
            // Update total
            if (cartTotal && config.showTotal) {
                cartTotal.innerHTML = total;
            }
            
            // Update text
            if (cartText && config.showText) {
                const cartTextData = cartLink ? cartLink.dataset.cartText || 'Cart' : 'Cart';
                const emptyCartTextData = cartLink ? cartLink.dataset.emptyCartText || 'Empty Cart' : 'Empty Cart';
                cartText.textContent = count > 0 ? cartTextData : emptyCartTextData;
            }
            
            // Update mini cart
            if (miniCart && config.showMiniCart) {
                updateMiniCartContent(data.items || [], total, count);
            }
            
            // Handle hide on empty
            if (config.hideOnEmpty) {
                cartBlock.style.display = count > 0 ? '' : 'none';
            }
            cartBlock.classList.toggle('cart-empty', count === 0);
            
            // Update accessibility
            if (cartLink) {
                cartLink.setAttribute('aria-label', 'View cart (' + count + ' items)');
            }
            
            // Animation effect
            if (data.justAdded && cartIcon) {
                animateCartIcon();
            }
            
        } catch (error) {
            console.error('DigiBlocks Cart Icon: Error updating display', error);
        }
    }
    
    // Update mini cart content
    function updateMiniCartContent(items, total, count) {
        if (!miniCartContent) return;
        
        if (count === 0) {
            miniCartContent.innerHTML = '<div class="digiblocks-mini-cart-empty"><p>' + strings.emptyCart + '</p></div>';
            return;
        }
        
        let itemsHTML = '';
        items.forEach(function(item) {
            itemsHTML += '<div class="digiblocks-mini-cart-item" data-cart-item-key="' + (item.key || '') + '">';
            
            if (item.image) {
                itemsHTML += '<div class="digiblocks-mini-cart-item-image">';
                if (item.permalink) itemsHTML += '<a href="' + item.permalink + '">';
                itemsHTML += '<img src="' + item.image + '" alt="' + (item.name || '') + '" />';
                if (item.permalink) itemsHTML += '</a>';
                itemsHTML += '</div>';
            }
            
            itemsHTML += '<div class="digiblocks-mini-cart-item-details">';
            itemsHTML += '<h4 class="digiblocks-mini-cart-item-name">';
            if (item.permalink) itemsHTML += '<a href="' + item.permalink + '">';
            itemsHTML += item.name || '';
            if (item.permalink) itemsHTML += '</a>';
            itemsHTML += '</h4>';
            itemsHTML += '<p class="digiblocks-mini-cart-item-price">' + (item.price_html || item.price || '') + '</p>';
            itemsHTML += '</div>';
            
            itemsHTML += '<input type="number" class="digiblocks-mini-cart-item-quantity" value="' + (item.quantity || 1) + '" min="0" data-cart-item-key="' + (item.key || '') + '" aria-label="' + strings.quantity + '" />';
            itemsHTML += '<button class="digiblocks-mini-cart-item-remove" data-cart-item-key="' + (item.key || '') + '" aria-label="' + strings.removeItem + '" title="' + strings.removeItem + '">×</button>';
            itemsHTML += '</div>';
        });
        
        const cartUrl = typeof wc_add_to_cart_params !== 'undefined' && wc_add_to_cart_params.cart_url ? wc_add_to_cart_params.cart_url : '';
        const checkoutUrl = typeof wc_add_to_cart_params !== 'undefined' && wc_add_to_cart_params.checkout_url ? wc_add_to_cart_params.checkout_url : '';
        
        miniCartContent.innerHTML = 
            '<div class="digiblocks-mini-cart-items">' + itemsHTML + '</div>' +
            '<div class="digiblocks-mini-cart-total"><span>' + strings.total + '</span><span class="total-amount">' + total + '</span></div>' +
            '<div class="digiblocks-mini-cart-buttons">' +
            '<a href="' + cartUrl + '" class="digiblocks-mini-cart-button secondary">' + strings.viewCart + '</a>' +
            '<a href="' + checkoutUrl + '" class="digiblocks-mini-cart-button primary">' + strings.checkout + '</a>' +
            '</div>';
    }
    
    // Animate cart icon
    function animateCartIcon() {
        if (!cartIcon) return;
        
        cartIcon.classList.add('cart-item-added');
        
        if (config.hoverEffect === 'bounce') {
            cartBlock.style.animation = 'digiblocks-bounce 0.6s';
        } else if (config.hoverEffect === 'pulse') {
            cartBlock.style.animation = 'digiblocks-pulse 0.6s';
        } else if (config.hoverEffect === 'scale') {
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(function() {
                cartIcon.style.transform = '';
            }, 300);
        }
        
        setTimeout(function() {
            cartIcon.classList.remove('cart-item-added');
            cartBlock.style.animation = '';
        }, 600);
    }
    
    // Fetch cart data
    function fetchCartData(justAdded) {
        if (isUpdating) return;
        isUpdating = true;
        
        const formData = new FormData();
        formData.append('action', 'digiblocks_get_cart_data');
        formData.append('nonce', digiBlocksData.cart.cart_nonce);
        
        fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        })
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            if (data.success) {
                if (config.showMiniCart) {
                    fetchCartItems().then(function(items) {
                        updateCartDisplay({
                            count: data.data.count,
                            total: data.data.total,
                            total_html: data.data.total_html,
                            items: items,
                            justAdded: justAdded
                        });
                    }).catch(function() {
                        updateCartDisplay({
                            count: data.data.count,
                            total: data.data.total,
                            total_html: data.data.total_html,
                            items: [],
                            justAdded: justAdded
                        });
                    });
                } else {
                    updateCartDisplay({
                        count: data.data.count,
                        total: data.data.total,
                        total_html: data.data.total_html,
                        items: [],
                        justAdded: justAdded
                    });
                }
            } else {
                console.error('DigiBlocks Cart Icon: Server error', data);
            }
        })
        .catch(function(error) {
            console.error('DigiBlocks Cart Icon: Error fetching cart data', error);
        })
        .finally(function() {
            isUpdating = false;
        });
    }
    
    // Fetch cart items
    function fetchCartItems() {
        const formData = new FormData();
        formData.append('action', 'digiblocks_get_cart_items');
        formData.append('nonce', digiBlocksData.cart.cart_nonce);
        
        return fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        })
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            if (data.success) {
                return data.data.items || [];
            }
            throw new Error('Server returned error');
        });
    }
    
    // Update cart item quantity
    function updateCartItemQuantity(itemKey, quantity) {
        const formData = new FormData();
        formData.append('action', 'digiblocks_update_cart_item');
        formData.append('nonce', digiBlocksData.cart.cart_nonce);
        formData.append('cart_item_key', itemKey);
        formData.append('quantity', quantity);
        
        fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.success) {
                setTimeout(function() {
                    fetchCartData();
                }, 200);
            }
        })
        .catch(function(error) {
            console.error('DigiBlocks Cart Icon: Error updating cart item', error);
        });
    }
    
    // Remove cart item
    function removeCartItem(itemKey) {
        const formData = new FormData();
        formData.append('action', 'digiblocks_remove_cart_item');
        formData.append('nonce', digiBlocksData.cart.cart_nonce);
        formData.append('cart_item_key', itemKey);
        
        fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.success) {
                setTimeout(function() {
                    fetchCartData();
                }, 200);
            }
        })
        .catch(function(error) {
            console.error('DigiBlocks Cart Icon: Error removing cart item', error);
        });
    }
    
    // Show/hide mini cart
    function showMiniCart() {
        if (!miniCart || !config.showMiniCart) return;
        miniCartVisible = true;
        miniCart.style.opacity = '1';
        miniCart.style.visibility = 'visible';
        miniCart.style.transform = 'translateY(0)';
    }
    
    function hideMiniCart() {
        if (!miniCart || !config.showMiniCart) return;
        miniCartVisible = false;
        miniCart.style.opacity = '0';
        miniCart.style.visibility = 'hidden';
        miniCart.style.transform = 'translateY(-10px)';
    }
    
    // Event listeners for mini cart
    if (miniCart) {
        miniCart.addEventListener('change', function(e) {
            if (e.target.matches('.digiblocks-mini-cart-item-quantity')) {
                const itemKey = e.target.dataset.cartItemKey;
                const quantity = parseInt(e.target.value) || 0;
                if (itemKey) {
                    updateCartItemQuantity(itemKey, quantity);
                }
            }
        });
        
        miniCart.addEventListener('click', function(e) {
            if (e.target.matches('.digiblocks-mini-cart-item-remove')) {
                e.preventDefault();
                const itemKey = e.target.dataset.cartItemKey;
                if (itemKey) {
                    removeCartItem(itemKey);
                }
            }
            e.stopPropagation();
        });
    }
    
    // Cart link event handlers
    if (cartLink && config.showMiniCart) {
        cartLink.addEventListener('mouseenter', showMiniCart);
        cartLink.addEventListener('mouseleave', function() {
            setTimeout(function() {
                if (!miniCartVisible) {
                    hideMiniCart();
                }
            }, 300);
        });
        
        if (miniCart) {
            miniCart.addEventListener('mouseenter', function() {
                miniCartVisible = true;
            });
            miniCart.addEventListener('mouseleave', function() {
                miniCartVisible = false;
                hideMiniCart();
            });
        }
        
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (miniCart.style.opacity === '1') {
                hideMiniCart();
            } else {
                showMiniCart();
            }
        });
    }
    
    // Listen for WooCommerce events
    document.body.addEventListener('added_to_cart', function() {
        setTimeout(function() {
            fetchCartData(true);
        }, 200);
    });
    
    document.body.addEventListener('wc_fragment_refresh', function() {
        setTimeout(function() {
            fetchCartData();
        }, 100);
    });
    
    // Listen for DigiBlocks add to cart events
    document.addEventListener('digiblocks_added_to_cart', function() {
        setTimeout(function() {
            fetchCartData(true);
        }, 200);
    });
    
    // Initial fetch
    setTimeout(function() {
        fetchCartData();
    }, 100);
    
    // Periodic refresh
    setInterval(function() {
        if (!isUpdating) {
            fetchCartData();
        }
    }, 30000);
});

// Add animation styles (only once)
if (!document.querySelector('#digiblocks-cart-animations')) {
    const style = document.createElement('style');
    style.id = 'digiblocks-cart-animations';
    style.textContent = `
        .cart-item-added::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            border: 2px solid #4CAF50;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: cart-success-ring 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes cart-success-ring {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        
        @keyframes digiblocks-bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
            40%, 43% { transform: translate3d(0, -8px, 0); }
            70% { transform: translate3d(0, -4px, 0); }
            90% { transform: translate3d(0, -2px, 0); }
        }
        
        @keyframes digiblocks-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}
<?php
$digiblocks_js_output = ob_get_clean();