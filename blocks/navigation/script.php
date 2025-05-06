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
$id             = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$openSubmenusOn = isset( $attrs['openSubmenusOn'] ) ? $attrs['openSubmenusOn'] : 'hover';

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
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                const menu = navBlock.querySelector('.digiblocks-navigation-menu');
                if (menu) {
                    menu.classList.toggle('is-open');
                    
                    // Toggle aria attributes for accessibility
                    const isExpanded = menu.classList.contains('is-open');
                    this.setAttribute('aria-expanded', isExpanded);
                }
            });
            
            // Initialize aria-expanded attribute
            toggleButton.setAttribute('aria-expanded', 'false');
        }
        
        <?php if ( $openSubmenusOn === 'click' ) : ?>
        // Handle submenu click toggling
        const menuItems = navBlock.querySelectorAll('.digiblocks-navigation-menu-item');
        
        menuItems.forEach(function(item) {
            const link = item.querySelector('.digiblocks-navigation-link');
            const submenu = item.querySelector('.digiblocks-navigation-submenu');
            
            if (link && submenu) {
                link.addEventListener('click', function(e) {
                    // Find submenu link click handler
                    if (e.target.closest('.digiblocks-navigation-submenu')) {
                        return;
                    }
                    
                    // Check if clicking on a parent link
                    const parentLink = e.target.closest('.digiblocks-navigation-link');
                    const parentItem = parentLink ? parentLink.closest('.digiblocks-navigation-menu-item') : null;
                    
                    if (parentItem && parentItem.querySelector('.digiblocks-navigation-submenu')) {
                        e.preventDefault();
                        
                        // Close other submenus
                        menuItems.forEach(function(otherItem) {
                            if (otherItem !== parentItem) {
                                const otherSubmenu = otherItem.querySelector('.digiblocks-navigation-submenu');
                                if (otherSubmenu) {
                                    otherSubmenu.style.display = 'none';
                                }
                            }
                        });
                        
                        // Toggle current submenu
                        const currentSubmenu = parentItem.querySelector('.digiblocks-navigation-submenu');
                        if (currentSubmenu) {
                            currentSubmenu.style.display = currentSubmenu.style.display === 'block' ? 'none' : 'block';
                        }
                    }
                });
            }
        });
        
        // Close submenu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navBlock.contains(e.target)) {
                menuItems.forEach(function(item) {
                    const submenu = item.querySelector('.digiblocks-navigation-submenu');
                    if (submenu) {
                        submenu.style.display = 'none';
                    }
                });
            }
        });
        <?php endif; ?>
    }
})();
<?php
$digiblocks_js_output = ob_get_clean();