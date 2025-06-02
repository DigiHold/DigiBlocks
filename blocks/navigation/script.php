<?php
/**
 * Navigation Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$id               = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$showMobileToggle = isset( $attrs['showMobileToggle'] ) ? $attrs['showMobileToggle'] : true;
$mobileBreakpoint = isset( $attrs['mobileBreakpoint'] ) ? $attrs['mobileBreakpoint'] : 768;

// Only generate JavaScript if mobile toggle is enabled
if ($showMobileToggle) {
	// JavaScript output
	ob_start();
	?>
	(function() {
		// Wait for DOM to be ready
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initNavigation);
		} else {
			initNavigation();
		}
		
		function initNavigation() {
			const navBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
			if (!navBlock) return;
			
			const mobileBreakpoint = <?php echo esc_attr( $mobileBreakpoint ); ?>;
			
			// Mobile menu toggle functionality
			const toggleButton = navBlock.querySelector('.digiblocks-mobile-toggle');
			const menu = navBlock.querySelector('.digiblocks-navigation-menu-wrapper');
			
			// Get all submenu toggles
			const submenuToggles = navBlock.querySelectorAll('.digiblocks-submenu-toggle');
			
			// Function to check if we're at mobile breakpoint
			function isMobile() {
				return window.innerWidth <= mobileBreakpoint;
			}
			
			// Function to set/update mobile positioning with container alignment
			function setMobilePositioning() {
				if (!menu) return;
				
				if (isMobile()) {
					// Find the closest digiblocks-container (for padding-bottom)
					const container = navBlock.closest('.digiblocks-container');
					// Find the closest digiblocks-container-inner (for width and positioning)
					const containerInner = navBlock.closest('.digiblocks-container-inner');
					
					if (container && containerInner) {
						// Get container padding-bottom and apply as margin-top
						const containerStyles = window.getComputedStyle(container);
						const paddingBottom = parseFloat(containerStyles.paddingBottom) || 0;
						menu.style.marginTop = `${paddingBottom}px`;
						
						// Get container-inner dimensions and position
						const containerInnerRect = containerInner.getBoundingClientRect();
						const navRect = navBlock.getBoundingClientRect();
						
						// Calculate the offset to align with container-inner left edge
						const leftOffset = navRect.left - containerInnerRect.left;
						
						// Set width to match container-inner
						menu.style.width = `${containerInnerRect.width}px`;
						
						// Position to align with container-inner left edge
						menu.style.left = `-${leftOffset}px`;
					} else {
						// Fallback to original behavior if containers not found
						const navRect = navBlock.getBoundingClientRect();
						const leftOffset = navRect.left;
						
						// Still add margin-top if we can find container
						if (container) {
							const containerStyles = window.getComputedStyle(container);
							const paddingBottom = parseFloat(containerStyles.paddingBottom) || 0;
							menu.style.marginTop = `${paddingBottom}px`;
						}
						
						menu.style.left = `-${leftOffset}px`;
					}
				} else {
					// Reset positioning for desktop/tablet
					menu.style.left = '';
					menu.style.width = '';
					menu.style.marginTop = '';
				}
			}
			
			// Set initial positioning on page load
			setMobilePositioning();
			
			// Add click handler to each submenu toggle
			submenuToggles.forEach(toggle => {
				toggle.addEventListener('click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					
					// Find parent menu item and its submenu
					const menuItem = this.closest('.digiblocks-navigation-menu-item');
					const submenu = menuItem ? menuItem.querySelector('.digiblocks-navigation-submenu') : null;
					
					if (menuItem && submenu) {
						// Toggle classes
						menuItem.classList.toggle('submenu-open');
						toggle.classList.toggle('is-open');
						submenu.classList.toggle('is-open');
						
						// Toggle aria attribute
						toggle.setAttribute('aria-expanded', toggle.classList.contains('is-open'));
					}
				});
			});
			
			// Main mobile toggle
			if (toggleButton && menu) {
				toggleButton.addEventListener('click', function() {
					const wasOpen = menu.classList.contains('is-open');
					
					// Toggle the menu visibility
					menu.classList.toggle('is-open');
					
					// Update positioning when opening
					if (!wasOpen) {
						setMobilePositioning();
					}
					
					// Toggle aria attribute
					this.setAttribute('aria-expanded', menu.classList.contains('is-open'));
					
					// When closing the main menu, close all submenus too
					if (wasOpen) {
						const openToggles = navBlock.querySelectorAll('.digiblocks-submenu-toggle.is-open');
						openToggles.forEach(toggle => {
							toggle.classList.remove('is-open');
							toggle.setAttribute('aria-expanded', 'false');
							
							const menuItem = toggle.closest('.digiblocks-navigation-menu-item');
							if (menuItem) {
								menuItem.classList.remove('submenu-open');
								const submenu = menuItem.querySelector('.digiblocks-navigation-submenu');
								if (submenu) {
									submenu.classList.remove('is-open');
								}
							}
						});
					}
				});
				
				// Initialize aria-expanded attribute
				toggleButton.setAttribute('aria-expanded', 'false');
			}
			
			// Update positioning on window resize
			let resizeTimeout;
			window.addEventListener('resize', function() {
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(function() {
					setMobilePositioning();
				}, 100);
			});
			
			// Update positioning on scroll (in case of layout changes)
			let scrollTimeout;
			window.addEventListener('scroll', function() {
				if (!isMobile()) return;
				
				clearTimeout(scrollTimeout);
				scrollTimeout = setTimeout(function() {
					setMobilePositioning();
				}, 10);
			});
		}
	})();
	<?php
	$digiblocks_js_output = ob_get_clean();
} else {
    // If mobile toggle is disabled, no script needed
    $digiblocks_js_output = '';
}
?>