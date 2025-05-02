<?php
/**
 * FAQ Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$allowMultipleOpen = isset( $attrs['allowMultipleOpen'] ) ? $attrs['allowMultipleOpen'] : false;
$schemaEnabled     = isset( $attrs['schemaEnabled'] ) ? (bool) $attrs['schemaEnabled'] : true;
$schemaType        = isset( $attrs['schemaType'] ) ? $attrs['schemaType'] : 'FAQPage';
$schemaName        = isset( $attrs['schemaName'] ) ? $attrs['schemaName'] : '';
$items             = isset( $attrs['items'] ) ? $attrs['items'] : array();
$iconType          = isset( $attrs['iconType'] ) ? $attrs['iconType'] : 'plusMinus';

// JavaScript Output
ob_start();
?>

(function() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        // Find the FAQ element
        const faqElement = document.querySelector('[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]');
        
        if (!faqElement) return;
        
        // Find all FAQ items in this specific block
        const faqItems = faqElement.querySelectorAll('.digiblocks-faq-item');
        
        // Add click event listeners to each item's question
        faqItems.forEach(function(item) {
            const question = item.querySelector('.digiblocks-faq-question');
            
            if (!question) return;
            
            // Add click listener to question
            question.addEventListener('click', function(e) {
                e.preventDefault();
                
                const isActive = item.classList.contains('is-active');
                
                // If not allowing multiple open items, close others first
                if (!<?php echo $allowMultipleOpen ? 'true' : 'false'; ?> && !isActive) {
                    faqItems.forEach(function(otherItem) {
                        if (otherItem !== item && otherItem.classList.contains('is-active')) {
                            toggleItem(otherItem, false);
                        }
                    });
                }
                
                // Toggle the clicked item
                toggleItem(item, !isActive);
            });
        });
        
        /**
         * Toggle an item's open/closed state
         * @param {HTMLElement} item - The FAQ item element
         * @param {boolean} open - Whether to open or close
         */
        function toggleItem(item, open) {
            const iconContainer = item.querySelector('.digiblocks-faq-question-icon');
            
            if (open) {
                // Update icon first
                updateIcon(iconContainer, true);
                
                // Add active class
                item.classList.add('is-active');
            } else {
                // Update icon
                updateIcon(iconContainer, false);
                
                // Remove active class
                item.classList.remove('is-active');
            }
        }
        
        /**
         * Update the icon based on state
         * @param {HTMLElement} iconContainer - The icon container element
         * @param {boolean} isOpen - Whether the item is open
         */
        function updateIcon(iconContainer, isOpen) {
            if (!iconContainer) return;
            
            const iconType = '<?php echo esc_js($iconType); ?>';
            
            switch (iconType) {
                case 'plusMinus':
                    const plusMinusIcon = iconContainer.querySelector('.digiblocks-faq-icon-plus, .digiblocks-faq-icon-minus');
                    if (plusMinusIcon) {
                        // Update class
                        plusMinusIcon.className = isOpen ? 'digiblocks-faq-icon-minus' : 'digiblocks-faq-icon-plus';
                        
                        // Update SVG path
                        const svg = plusMinusIcon.querySelector('svg');
                        if (svg) {
                            const path = svg.querySelector('path');
                            if (path) {
                                path.setAttribute('d', isOpen 
                                    ? 'M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z' 
                                    : 'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
                                );
                            }
                        }
                    }
                    break;
                    
                case 'circlePlusMinus':
                    const circleIcon = iconContainer.querySelector('.digiblocks-faq-icon-circle-plus, .digiblocks-faq-icon-circle-minus');
                    if (circleIcon) {
                        // Update class
                        circleIcon.className = isOpen ? 'digiblocks-faq-icon-circle-minus' : 'digiblocks-faq-icon-circle-plus';
                        
                        // Update SVG path
                        const svg = circleIcon.querySelector('svg');
                        if (svg) {
                            const paths = svg.querySelectorAll('path');
                            if (paths.length > 1) {
                                paths[1].setAttribute('d', isOpen 
                                    ? 'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' 
                                    : 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'
                                );
                            }
                        }
                    }
                    break;
                    
                case 'arrow':
                case 'chevron':
                case 'triangle':
                    // These icons rotate via CSS
                    const rotateIcon = iconContainer.querySelector(`.digiblocks-faq-icon-${iconType}`);
                    if (rotateIcon) {
                        if (isOpen) {
                            rotateIcon.classList.add('is-open');
                        } else {
                            rotateIcon.classList.remove('is-open');
                        }
                    }
                    break;
            }
        }
    });
})();

<?php
// Generate JSON-LD Schema markup if enabled
if ( $schemaEnabled && ! empty( $items ) ) :
    // Prepare FAQ schema data
    $schema_data = array();
    
    if ( 'FAQPage' === $schemaType ) {
        $schema_data = array(
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => array()
        );
        
        foreach ( $items as $item ) {
            $question = strip_tags( $item['title'] );
            $answer = strip_tags( $item['content'] );
            
            if ( empty( $question ) || empty( $answer ) ) {
                continue;
            }
            
            $schema_data['mainEntity'][] = array(
                '@type' => 'Question',
                'name' => $question,
                'acceptedAnswer' => array(
                    '@type' => 'Answer',
                    'text' => $answer
                )
            );
        }
    } elseif ( 'QAPage' === $schemaType ) {
        $schema_data = array(
            '@context' => 'https://schema.org',
            '@type' => 'QAPage',
            'mainEntity' => array(
                '@type' => 'Question',
                'name' => !empty($schemaName) ? $schemaName : strip_tags($items[0]['title']),
                'text' => strip_tags($items[0]['title']),
                'answerCount' => count($items),
                'suggestedAnswer' => array()
            )
        );
        
        foreach ( $items as $item ) {
            $question = strip_tags( $item['title'] );
            $answer = strip_tags( $item['content'] );
            
            if ( empty( $question ) || empty( $answer ) ) {
                continue;
            }
            
            $schema_data['mainEntity']['suggestedAnswer'][] = array(
                '@type' => 'Answer',
                'text' => $answer
            );
        }
    }
    
    // Output schema if we have valid data
    if ( !empty( $schema_data ) && (
        ( 'FAQPage' === $schemaType && !empty( $schema_data['mainEntity'] ) ) ||
        ( 'QAPage' === $schemaType && !empty( $schema_data['mainEntity']['suggestedAnswer'] ) )
    ) ) :
		?>
		// Add Schema Markup
		document.addEventListener('DOMContentLoaded', function() {
			const schemaScript = document.createElement('script');
			schemaScript.type = 'application/ld+json';
			schemaScript.innerHTML = <?php echo json_encode(json_encode($schema_data)); ?>;
			document.head.appendChild(schemaScript);
		});
		<?php
    endif;
endif;

$digiblocks_js_output = ob_get_clean();