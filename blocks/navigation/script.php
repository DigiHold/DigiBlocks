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
			
			// Mobile menu toggle functionality
			const toggleButton = navBlock.querySelector('.digiblocks-mobile-toggle');
			const menu = navBlock.querySelector('.digiblocks-navigation-menu');
			
			// Get all submenu toggles
			const submenuToggles = navBlock.querySelectorAll('.digiblocks-submenu-toggle');
			
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
					menu.classList.toggle('is-open');
					
					// Toggle aria attribute
					this.setAttribute('aria-expanded', menu.classList.contains('is-open'));
					
					// When closing the main menu, close all submenus too
					if (!menu.classList.contains('is-open')) {
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
		}
	})();
	<?php
	$digiblocks_js_output = ob_get_clean();
} else {
    // If mobile toggle is disabled, no script needed
    $digiblocks_js_output = '';
}