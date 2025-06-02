<?php
/**
 * DigiCommerce Cart Icon Block JavaScript - Updated for consolidated data
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

// Get DigiCommerce checkout page URL
$checkout_page_id = '';
if ( class_exists( 'DigiCommerce' ) ) {
	$checkout_page_id = DigiCommerce()->get_option( 'checkout_page_id', '' );
}
$checkout_url = $checkout_page_id ? get_permalink( $checkout_page_id ) : '';

// Get text strings
$text_strings = array(
	'total' => __( 'Total:', 'digiblocks' ),
	'view_cart' => __( 'View Cart', 'digiblocks' ),
	'checkout' => __( 'Checkout', 'digiblocks' ),
	'empty_cart' => __( 'Your cart is currently empty.', 'digiblocks' ),
	'quantity' => __( 'Quantity', 'digiblocks' ),
	'remove_item' => __( 'Remove this item', 'digiblocks' ),
	'shopping_cart' => __( 'Shopping Cart', 'digiblocks' ),
);

// JavaScript Output
ob_start();
?>
/* DigiCommerce Cart Icon Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
	const cartBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
	
	if (!cartBlock) return;
	
	// Check if consolidated data exists
	if (typeof digiBlocksData === 'undefined') {
		console.error('DigiBlocks: Missing consolidated data for cart functionality');
		return;
	}
	
	// Get data from consolidated object
	const ajaxUrl = digiBlocksData.ajax_url;
	const cartNonce = digiBlocksData.cart ? digiBlocksData.cart.cart_nonce : null;
	const digiCartNonce = digiBlocksData.digiAddToCart ? digiBlocksData.digiAddToCart.nonce : null;
	const digiOrderNonce = digiBlocksData.digiCart ? digiBlocksData.digiCart.order_nonce : null;
	
	// Validate required data
	if (!ajaxUrl || !cartNonce) {
		console.error('DigiBlocks Cart Icon: Missing required AJAX data');
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
	
	// Static data
	const checkoutUrl = <?php echo wp_json_encode( $checkout_url ); ?>;
	const textStrings = <?php echo wp_json_encode( $text_strings ); ?>;
	
	// Cart elements
	const cartIcon = cartBlock.querySelector('.digiblocks-cart-icon-icon');
	const cartCount = cartBlock.querySelector('.digiblocks-cart-count');
	const cartText = cartBlock.querySelector('.digiblocks-cart-text');
	const cartTotal = cartBlock.querySelector('.digiblocks-cart-total');
	const miniCart = cartBlock.querySelector('.digiblocks-mini-cart');
	const miniCartContent = miniCart ? miniCart.querySelector('.digiblocks-mini-cart-content') : null;
	const cartLink = cartBlock.querySelector('.digiblocks-cart-icon-link');
	
	// Flag to prevent duplicate requests
	let isUpdating = false;
	
	// Function to format price
	function formatPrice(price) {
		if (!price) return '';
		
		// Get currency symbol and position from DigiCommerce settings
		const currency = window.digiBlocksData?.digiCurrency || '$';
		const position = window.digiBlocksData?.digiCurrencyPosition || 'left';
		
		// Ensure price is a number
		const numericPrice = parseFloat(price);
		if (isNaN(numericPrice)) return '';
		
		const formattedNumber = numericPrice.toFixed(2);
		
		if (position === 'right') {
			return formattedNumber + currency;
		}
		return currency + formattedNumber;
	}
	
	// Function to update cart display
	function updateCartDisplay(data) {
		try {
			const count = parseInt(data.count) || 0;
			const total = data.total || '';
			
			// Update count
			if (cartCount && config.showCount) {
				cartCount.textContent = count.toString();
				
				// Show/hide count based on hide on empty setting
				if (config.hideOnEmpty && count === 0) {
					cartCount.style.display = 'none';
				} else {
					cartCount.style.display = 'flex';
				}
			}
			
			// Update total - always show if enabled, even when 0
			if (cartTotal && config.showTotal) {
				cartTotal.innerHTML = total || formatPrice(0);
				// Always show total if showTotal is enabled
				cartTotal.style.display = 'inline';
			}
			
			// Update text based on cart state
			if (cartText && config.showText) {
				const cartTextData = cartLink ? cartLink.dataset.cartText || 'Cart' : 'Cart';
				const emptyCartTextData = cartLink ? cartLink.dataset.emptyCartText || 'Empty Cart' : 'Empty Cart';
				
				if (count > 0) {
					cartText.textContent = cartTextData;
				} else {
					cartText.textContent = emptyCartTextData;
				}
			}
			
			// Update mini cart
			if (miniCart && config.showMiniCart) {
				updateMiniCartContent(data.items || [], total, count);
			}
			
			// Handle hide on empty for entire block
			if (config.hideOnEmpty) {
				if (count > 0) {
					cartBlock.classList.remove('cart-empty');
					cartBlock.style.display = '';
				} else {
					cartBlock.classList.add('cart-empty');
					cartBlock.style.display = 'none';
				}
			} else {
				cartBlock.classList.toggle('cart-empty', count === 0);
				cartBlock.style.display = '';
			}
			
			// Update aria-label for accessibility
			if (cartLink) {
				cartLink.setAttribute('aria-label', `View cart (${count} items)`);
			}
			
			// Add animation effect when item is added
			if (data.justAdded && cartIcon) {
				animateCartIcon();
			}
			
		} catch (error) {
			console.error('DigiBlocks Cart Icon: Error updating display', error);
		}
	}
	
	// Function to update mini cart content
	function updateMiniCartContent(items, total, count) {
		if (!miniCart || !miniCartContent) return;
		
		let miniCartHTML = '';
		
		if (count === 0) {
			// Empty state
			miniCartHTML = `
				<div class="digiblocks-mini-cart-empty">
					<p>${textStrings.empty_cart}</p>
				</div>
			`;
		} else {
			// Cart has items
			const itemsHTML = items.map((item, index) => {
				const itemPrice = item.price || formatPrice(item.price_raw || 0);
				const variationName = item.variation_name ? ` - ${item.variation_name}` : '';
				const productImage = item.image || '';
				
				// Create image HTML if image exists
				const imageHTML = productImage ? 
					`<div class="digiblocks-mini-cart-item-image">
						<img src="${productImage}" alt="${item.name || ''}" loading="lazy" />
					</div>` : '';
				
				return `
					<div class="digiblocks-mini-cart-item" data-cart-item-key="${index}">
						${imageHTML}
						<div class="digiblocks-mini-cart-item-details">
							<h4 class="digiblocks-mini-cart-item-name">
								${item.name || ''}${variationName}
							</h4>
							<p class="digiblocks-mini-cart-item-price">${itemPrice}</p>
						</div>
						<button 
							type="button"
							class="digiblocks-mini-cart-item-remove" 
							data-cart-item-key="${index}"
							aria-label="${textStrings.remove_item}"
							title="${textStrings.remove_item}"
						>
							×
						</button>
					</div>
				`;
			}).join('');
			
			miniCartHTML = `
				<div class="digiblocks-mini-cart-items">
					${itemsHTML}
				</div>
				<div class="digiblocks-mini-cart-total">
					<span>${textStrings.total}</span>
					<span class="total-amount">${total || formatPrice(0)}</span>
				</div>
				<div class="digiblocks-mini-cart-buttons">
					<a href="${checkoutUrl}" class="digiblocks-mini-cart-button primary">
						${textStrings.checkout}
					</a>
				</div>
			`;
		}
		
		miniCartContent.innerHTML = miniCartHTML;
	}
	
	// Function to animate cart icon
	function animateCartIcon() {
		if (!cartIcon) return;
		
		// Add animation class
		cartIcon.classList.add('cart-item-added');
		
		// Apply hover effect if configured
		if (config.hoverEffect === 'bounce') {
			cartBlock.style.animation = 'digiblocks-bounce 0.6s';
		} else if (config.hoverEffect === 'pulse') {
			cartBlock.style.animation = 'digiblocks-pulse 0.6s';
		} else if (config.hoverEffect === 'scale') {
			cartIcon.style.transform = 'scale(1.2)';
			setTimeout(() => {
				cartIcon.style.transform = '';
			}, 300);
		}
		
		// Remove animation class after animation completes
		setTimeout(() => {
			cartIcon.classList.remove('cart-item-added');
			cartBlock.style.animation = '';
		}, 600);
	}
	
	// Function to fetch cart data from DigiCommerce
	function fetchCartData(justAdded = false) {
		if (isUpdating) return;
		isUpdating = true;
		
		// Use consolidated data for AJAX request
		fetch(ajaxUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: 'action=digiblocks_get_digi_cart_data&nonce=' + encodeURIComponent(cartNonce)
		})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			if (data.success) {
				updateCartDisplay({
					count: parseInt(data.data.count) || 0,
					total: data.data.total || '',
					items: data.data.items || [],
					justAdded: justAdded
				});
			} else {
				console.error('DigiBlocks Cart Icon: Server returned error:', data);
				// Fallback: show empty cart
				updateCartDisplay({
					count: 0,
					total: formatPrice(0),
					items: [],
					justAdded: false
				});
			}
		})
		.catch(error => {
			console.error('DigiBlocks Cart Icon: Error fetching cart data', error);
			// Fallback: show empty cart
			updateCartDisplay({
				count: 0,
				total: formatPrice(0),
				items: [],
				justAdded: false
			});
		})
		.finally(() => {
			isUpdating = false;
		});
	}
	
	// Function to remove cart item using DigiCommerce endpoint
	function removeCartItem(itemIndex) {
		if (itemIndex === null || itemIndex === undefined || !digiOrderNonce) return;
		
		// Use DigiCommerce's remove cart item endpoint directly
		fetch(ajaxUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: 'action=digicommerce_remove_cart_item&nonce=' + encodeURIComponent(digiOrderNonce) + '&index=' + encodeURIComponent(itemIndex)
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				// Dispatch custom event for synchronization
				const cartUpdateEvent = new CustomEvent('digicommerce_cart_updated', {
					detail: {
						source: 'mini_cart',
						action: 'remove',
						itemIndex: itemIndex,
						data: data.data
					}
				});
				document.dispatchEvent(cartUpdateEvent);
				
				// Update cart display with new data
				fetchCartData();
			} else {
				console.error('Error removing cart item:', data);
				alert(data.data?.message || 'Failed to remove item from cart.');
			}
		})
		.catch(error => {
			console.error('DigiBlocks Cart Icon: Error removing cart item', error);
			alert('An error occurred while removing the item. Please try again.');
		});
	}
	
	// Event listeners for mini cart interactions
	if (miniCart) {
		// Use event delegation for dynamically created elements
		miniCart.addEventListener('click', function(e) {
			// Remove item
			const removeButton = e.target.closest('.digiblocks-mini-cart-item-remove');
			if (removeButton) {
				e.preventDefault();
				e.stopPropagation();
				const itemIndex = removeButton.dataset.cartItemKey;
				
				if (itemIndex !== null && itemIndex !== undefined) {
					removeCartItem(parseInt(itemIndex));
				}
				return false;
			}
			
			// Close mini cart
			if (e.target.matches('.digiblocks-mini-cart-close')) {
				e.preventDefault();
				hideMiniCart();
			}
		});
		
		// Prevent mini cart from closing when clicking inside
		miniCart.addEventListener('click', function(e) {
			e.stopPropagation();
		});
	}
	
	// Mini cart show/hide functions
	function showMiniCart() {
		if (miniCart && config.showMiniCart) {
			// Refresh cart data before showing
			fetchCartData();
			
			miniCart.style.opacity = '1';
			miniCart.style.visibility = 'visible';
			miniCart.style.transform = 'translateY(0)';
			miniCart.style.transition = 'all 0.3s ease';
		}
	}
	
	function hideMiniCart() {
		if (miniCart && config.showMiniCart) {
			miniCart.style.opacity = '0';
			miniCart.style.visibility = 'hidden';
			miniCart.style.transform = 'translateY(-10px)';
			miniCart.style.transition = 'all 0.3s ease';
		}
	}
	
	// Cart link event handlers
	if (cartLink) {
		// Show mini cart on hover if enabled
		if (config.showMiniCart) {
			cartLink.addEventListener('mouseenter', showMiniCart);
			
			cartLink.addEventListener('mouseleave', function() {
				setTimeout(() => {
					if (miniCart && !miniCart.matches(':hover')) {
						hideMiniCart();
					}
				}, 300);
			});
			
			if (miniCart) {
				miniCart.addEventListener('mouseleave', hideMiniCart);
			}
		}
		
		// Handle cart link clicks
		cartLink.addEventListener('click', function(e) {
			if (config.showMiniCart) {
				e.preventDefault();
				// Toggle mini cart on click
				if (miniCart.style.opacity === '1') {
					hideMiniCart();
				} else {
					showMiniCart();
				}
			} else {
				// Allow navigation to checkout page
				const linkCheckoutUrl = this.href || checkoutUrl;
				if (linkCheckoutUrl && e.target === this) {
					// Let the browser handle the navigation normally
					return true;
				}
			}
		});
		
		// Accessibility: Handle keyboard navigation
		cartLink.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				this.click();
			}
		});
	}
	
	// Handle DigiCommerce add to cart forms on product pages
	const digicommerceForms = document.querySelectorAll('.digicommerce-add-to-cart');
	digicommerceForms.forEach(form => {
		form.addEventListener('submit', async function(e) {
			e.preventDefault();
			
			// Check if we have the required nonce
			if (!digiCartNonce) {
				console.error('DigiBlocks: Missing DigiCommerce add to cart nonce');
				alert('Cart functionality is not properly configured.');
				return;
			}
			
			const formData = new FormData(form);
			const submitButton = form.querySelector('#add-to-cart-button, button[type="submit"]');
			let originalText = '';
			
			// Disable button during request
			if (submitButton) {
				originalText = submitButton.innerHTML;
				submitButton.disabled = true;
				submitButton.style.opacity = '0.7';
				submitButton.innerHTML = 'Adding...';
			}
			
			try {
				const response = await fetch(ajaxUrl, {
					method: 'POST',
					body: new URLSearchParams({
						action: 'digicommerce_add_to_cart',
						product_id: formData.get('product_id'),
						product_price: formData.get('product_price') || '',
						variation_name: formData.get('variation_name') || '',
						variation_price: formData.get('variation_price') || '',
						nonce: digiCartNonce,
					}),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				});
				
				const result = await response.json();
				
				if (result.success) {
					// Dispatch custom event for synchronization
					const cartAddEvent = new CustomEvent('digicommerce_cart_updated', {
						detail: {
							source: 'product_page',
							action: 'add',
							data: result.data
						}
					});
					document.dispatchEvent(cartAddEvent);
					
					// Update cart icon immediately
					setTimeout(() => {
						fetchCartData(true);
					}, 100);
					
					// Show success feedback
					if (submitButton) {
						submitButton.innerHTML = 'Added!';
						submitButton.style.backgroundColor = '#4CAF50';
						
						setTimeout(() => {
							submitButton.innerHTML = originalText;
							submitButton.style.backgroundColor = '';
							submitButton.disabled = false;
							submitButton.style.opacity = '';
						}, 2000);
					}
					
					// Redirect to checkout if configured
					if (result.data && result.data.redirect) {
						setTimeout(() => {
							window.location.href = result.data.redirect;
						}, 1500);
					}
				} else {
					// Show error
					alert(result.data.message || 'Failed to add product to cart.');
					
					// Re-enable button
					if (submitButton) {
						submitButton.innerHTML = originalText;
						submitButton.disabled = false;
						submitButton.style.opacity = '';
					}
				}
			} catch (error) {
				console.error('Error adding to cart:', error);
				alert('An error occurred. Please try again.');
				
				// Re-enable button
				if (submitButton) {
					submitButton.innerHTML = originalText;
					submitButton.disabled = false;
					submitButton.style.opacity = '';
				}
			}
		});
	});
	
	// Listen for DigiCommerce cart updates (from checkout page or other sources)
	document.addEventListener('digicommerce_cart_updated', function(e) {
		// Only update if the event is not coming from this mini cart
		if (!e.detail || e.detail.source !== 'mini_cart') {
			setTimeout(() => {
				fetchCartData();
			}, 100);
		}
	});
	
	// Listen for custom DigiCommerce events
	document.addEventListener('digicommerce_added_to_cart', function() {
		setTimeout(() => {
			fetchCartData(true);
		}, 200);
	});
	
	document.addEventListener('digicommerce_removed_from_cart', function() {
		setTimeout(() => {
			fetchCartData();
		}, 200);
	});
	
	// Listen for window focus to sync cart state
	window.addEventListener('focus', function() {
		if (!isUpdating) {
			fetchCartData();
		}
	});
	
	// Close mini cart when clicking outside
	document.addEventListener('click', function(e) {
		if (miniCart && config.showMiniCart && 
			!cartBlock.contains(e.target) && 
			miniCart.style.opacity === '1') {
			hideMiniCart();
		}
	});
	
	// Initial cart data fetch
	setTimeout(() => {
		fetchCartData();
	}, 100);
	
	// Periodic refresh to keep cart in sync (every 30 seconds)
	setInterval(() => {
		if (!isUpdating && document.visibilityState === 'visible') {
			fetchCartData();
		}
	}, 30000);
});

// Add styles for cart animation (only once)
if (!document.querySelector('#digiblocks-cart-animations')) {
	const style = document.createElement('style');
	style.id = 'digiblocks-cart-animations';
	style.textContent = `
		.cart-item-added {
			position: relative;
		}
		
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
			0% {
				transform: translate(-50%, -50%) scale(0);
				opacity: 1;
			}
			100% {
				transform: translate(-50%, -50%) scale(1.5);
				opacity: 0;
			}
		}
		
		@keyframes digiblocks-bounce {
			0%, 20%, 53%, 80%, 100% {
				transform: translate3d(0, 0, 0);
			}
			40%, 43% {
				transform: translate3d(0, -8px, 0);
			}
			70% {
				transform: translate3d(0, -4px, 0);
			}
			90% {
				transform: translate3d(0, -2px, 0);
			}
		}
		
		@keyframes digiblocks-pulse {
			0% {
				transform: scale(1);
			}
			50% {
				transform: scale(1.1);
			}
			100% {
				transform: scale(1);
			}
		}
		
		.digiblocks-mini-cart {
			transition: all 0.3s ease !important;
		}
		
		.digiblocks-mini-cart-item {
			display: flex;
			align-items: flex-start;
			gap: 12px;
			padding: 12px 0;
			border-bottom: 1px solid #eee;
		}
		
		.digiblocks-mini-cart-item:last-child {
			border-bottom: none;
		}
		
		.digiblocks-mini-cart-item-image {
			flex-shrink: 0;
			width: 50px;
			height: 50px;
			border-radius: 6px;
			overflow: hidden;
			background-color: #f5f5f5;
		}
		
		.digiblocks-mini-cart-item-image img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
		
		.digiblocks-mini-cart-item-details {
			flex: 1;
			min-width: 0;
		}
		
		.digiblocks-mini-cart-item-name {
			font-size: 14px;
			font-weight: 600;
			line-height: 1.3;
			margin: 0 0 4px 0;
			color: #333;
			word-wrap: break-word;
		}
		
		.digiblocks-mini-cart-item-price {
			font-size: 13px;
			font-weight: 500;
			margin: 0;
			color: #666;
		}
		
		.digiblocks-mini-cart-item-remove {
			cursor: pointer;
			background: none;
			border: none;
			font-size: 18px;
			color: #999;
			transition: color 0.2s ease;
			flex-shrink: 0;
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			padding: 0;
		}
		
		.digiblocks-mini-cart-item-remove:hover {
			color: #d32f2f;
			background-color: #fef2f2;
		}
	`;
	document.head.appendChild(style);
}
<?php
$digiblocks_js_output = ob_get_clean();