<?php
/**
 * Accordion Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$block_id          = isset( $attrs['id'] ) ? $attrs['id'] : '';
$allow_multiple    = isset( $attrs['allowMultipleOpen'] ) ? $attrs['allowMultipleOpen'] : false;
$icon_type         = isset( $attrs['iconType'] ) ? $attrs['iconType'] : 'plusMinus';

// Only generate JS if we have a block ID
if ( empty( $block_id ) ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* Accordion Block - <?php echo esc_attr( $block_id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const accordion = document.querySelector('[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]');
    
    if (!accordion) return;
    
    const headers = accordion.querySelectorAll('.digiblocks-accordion-header');
    const allowMultiple = <?php echo $allow_multiple ? 'true' : 'false'; ?>;
    const iconType = '<?php echo esc_js( $icon_type ); ?>';

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.closest('.digiblocks-accordion-item');
            const content = item.querySelector('.digiblocks-accordion-content');
            const isActive = item.classList.contains('is-active');
            const iconContainer = this.querySelector('.digiblocks-accordion-icon');
            
            // If not allowing multiple open items, close all others
            if (!allowMultiple) {
                const activeItems = accordion.querySelectorAll('.digiblocks-accordion-item.is-active');
                activeItems.forEach(activeItem => {
                    if (activeItem !== item) {
                        activeItem.classList.remove('is-active');
                        const activeContent = activeItem.querySelector('.digiblocks-accordion-content');
                        const activeIconContainer = activeItem.querySelector('.digiblocks-accordion-icon');
                        
                        // Update icon visibility in the icon being closed
                        if (activeIconContainer) {
                            updateIconVisibility(activeIconContainer, false);
                        }
                        
                        // Hide content gracefully
                        activeContent.style.display = 'none';
                    }
                });
            }
            
            // Toggle current item
            if (isActive) {
                // Close this item
                item.classList.remove('is-active');
                
                // Update icon for this item
                updateIconVisibility(iconContainer, false);
                
                // Hide content
                content.style.display = 'none';
            } else {
                // Open this item
                item.classList.add('is-active');
                
                // Update icon for this item
                updateIconVisibility(iconContainer, true);
                
                // Show content
                content.style.display = 'block';
            }
        });
    });
    
    // Function to update icon based on open/closed state
    function updateIconVisibility(iconContainer, isOpen) {
        if (!iconContainer) return;
        
        const svg = iconContainer.querySelector('svg');
        if (!svg) return;
        
        const path = svg.querySelector('path');
        if (!path) return;
        
        if (iconType === 'plusMinus') {
            // Change the path data based on state
            path.setAttribute('d', isOpen 
                ? 'M19 13H5v-2h14v2z'  // minus icon
                : 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'  // plus icon
            );
        } else if (iconType === 'arrowUpDown') {
            // Change the path data based on state
            path.setAttribute('d', isOpen 
                ? 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'  // arrow up
                : 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z'   // arrow down
            );
        }
    }
    
    // Initialize all accordion items (both open and closed)
    const allItems = accordion.querySelectorAll('.digiblocks-accordion-item');
    allItems.forEach(item => {
        const content = item.querySelector('.digiblocks-accordion-content');
        const iconContainer = item.querySelector('.digiblocks-accordion-icon');
        const isActive = item.classList.contains('is-active');
        
        // Make sure content display is set correctly
        content.style.display = isActive ? 'block' : 'none';
        
        // Set initial icon for all items
        updateIconVisibility(iconContainer, isActive);
    });
});
<?php
$digiblocks_js_output = ob_get_clean();