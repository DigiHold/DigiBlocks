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

// Only generate JS if we have a block ID and highlight text
if ( empty( $id ) || empty( $highlightText ) ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* Heading Block - <?php echo esc_attr( $id ); ?> */
(function() {
    const heading = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    if (!heading) return;
    
    const headingContent = heading.querySelector('.digiblocks-heading-text');
    if (!headingContent) return;
    
    const highlightText = <?php echo wp_json_encode( $highlightText ); ?>;
    if (!highlightText) return;
    
    function highlightTextNodes(element, searchText) {
        if (element.querySelector('.digiblocks-highlight')) {
            return;
        }
        
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null
        );
        
        const nodesToProcess = [];
        let currentNode;
        
        while (currentNode = walker.nextNode()) {
            if (currentNode.nodeValue && currentNode.nodeValue.includes(searchText)) {
                nodesToProcess.push(currentNode);
            }
        }
        
        nodesToProcess.forEach(function(node) {
            const text = node.nodeValue;
            const index = text.indexOf(searchText);
            
            if (index === -1) return;
            
            const before = text.substring(0, index);
            const match = text.substring(index, index + searchText.length);
            const after = text.substring(index + searchText.length);
            
            const fragment = document.createDocumentFragment();
            
            if (before) {
                fragment.appendChild(document.createTextNode(before));
            }
            
            const span = document.createElement('span');
            span.className = 'digiblocks-highlight';
            span.textContent = match;
            fragment.appendChild(span);
            
            if (after) {
                const afterNode = document.createTextNode(after);
                fragment.appendChild(afterNode);
            }
            
            node.parentNode.replaceChild(fragment, node);
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            highlightTextNodes(headingContent, highlightText);
        });
    } else {
        highlightTextNodes(headingContent, highlightText);
    }
})();
<?php
$digiblocks_js_output = ob_get_clean();