<?php
/**
 * Heading Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id            = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$highlightText = isset( $attrs['highlightText'] ) ? $attrs['highlightText'] : '';
$linkEnabled   = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;

// Only generate JS if we have a block ID and highlight text or link is enabled
if ( empty( $id ) || ( empty( $highlightText ) && !$linkEnabled ) ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* Heading Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    
    if (!heading) return;
    
    <?php if ( $highlightText && !empty( $highlightText ) ) : ?>
    // Process highlight text if it's set in HTML content but not processed
    const headingContent = heading.querySelector('.digiblocks-heading-text');
    
    if (headingContent && !headingContent.querySelector('.digiblocks-highlight')) {
        // Try to find and wrap the highlight text with a span if not already highlighted
        const content = headingContent.innerHTML;
        const highlightTextEscaped = <?php echo esc_js(wp_json_encode($highlightText)); ?>;
        
        if (content && highlightTextEscaped && content.includes(highlightTextEscaped)) {
            // Create a safe regex pattern
            const pattern = new RegExp(`(${highlightTextEscaped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
            const newContent = content.replace(pattern, '<span class="digiblocks-highlight">$1</span>');
            
            if (newContent !== content) {
                headingContent.innerHTML = newContent;
            }
        }
    }
    <?php endif; ?>
});
<?php
$digiblocks_js_output = ob_get_clean();