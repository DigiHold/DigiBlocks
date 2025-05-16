<?php
/**
 * Call to Action Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id               = isset( $attrs['id'] ) ? $attrs['id'] : '';
$highlightText    = isset( $attrs['highlightText'] ) ? $attrs['highlightText'] : '';
$highlightType    = isset( $attrs['highlightType'] ) ? $attrs['highlightType'] : 'none';

// Only generate JS if we have a block ID and highlight text
if ( empty( $id ) || empty( $highlightText ) || $highlightType === 'none' ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* Call to Action Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const ctaBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    
    if (!ctaBlock) return;
    
    // Process highlight text if it's set in HTML content but not processed
    const ctaTitle = ctaBlock.querySelector('.digiblocks-cta-title');
    
    if (ctaTitle && !ctaTitle.querySelector('.digiblocks-cta-highlight')) {
        // Try to find and wrap the highlight text with a span if not already highlighted
        const content = ctaTitle.innerHTML;
        const highlightTextEscaped = <?php echo esc_js(wp_json_encode($highlightText)); ?>;
        
        if (content && highlightTextEscaped && content.includes(highlightTextEscaped)) {
            // Create a safe regex pattern
            const pattern = new RegExp(`(${highlightTextEscaped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
            const newContent = content.replace(pattern, '<span class="digiblocks-cta-highlight">$1</span>');
            
            if (newContent !== content) {
                ctaTitle.innerHTML = newContent;
            }
        }
    }
});
<?php
$digiblocks_js_output = ob_get_clean();