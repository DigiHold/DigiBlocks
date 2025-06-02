<?php
/**
 * Product Reviews Form Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id = isset( $attrs['id'] ) ? $attrs['id'] : '';

// Only generate JS if we have a block ID
if ( empty( $id ) ) {
    $digiblocks_js_output = '';
    return;
}

ob_start();
?>
/* Product Reviews Form Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const reviewBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    
    if (!reviewBlock) return;
    
    // Handle WooCommerce rating select dropdown change
    const ratingSelect = reviewBlock.querySelector('#rating');
    
    if (ratingSelect) {
        ratingSelect.addEventListener('change', function() {
            // Add visual feedback when rating is selected
            const selectedRating = this.value;
            if (selectedRating) {
                this.style.borderColor = '#4a6cf7';
            } else {
                this.style.borderColor = '';
            }
        });
    }
    
    // Handle custom star rating if present (for custom implementations)
    const stars = reviewBlock.querySelectorAll('.stars a');
    
    if (stars.length > 0) {
        stars.forEach((star, index) => {
            star.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all stars
                stars.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked star and all previous stars
                for (let i = 0; i <= index; i++) {
                    if (stars[i]) {
                        stars[i].classList.add('active');
                    }
                }
                
                // Set the rating value if there's a select dropdown
                if (ratingSelect) {
                    ratingSelect.value = index + 1;
                    ratingSelect.dispatchEvent(new Event('change'));
                }
            });
            
            star.addEventListener('mouseenter', function() {
                // Temporarily highlight stars on hover
                stars.forEach(s => s.classList.remove('hover'));
                for (let i = 0; i <= index; i++) {
                    if (stars[i]) {
                        stars[i].classList.add('hover');
                    }
                }
            });
        });
        
        // Reset hover effect when leaving the stars container
        const starsContainer = reviewBlock.querySelector('.stars, .comment-form-rating .stars');
        if (starsContainer) {
            starsContainer.addEventListener('mouseleave', function() {
                stars.forEach(s => s.classList.remove('hover'));
            });
        }
    }
    
    // Smooth scroll to review form when "Add a review" link is clicked
    const addReviewLinks = reviewBlock.querySelectorAll('a[href="#reviews"]');
    
    addReviewLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const reviewForm = reviewBlock.querySelector('#review_form');
            if (reviewForm) {
                reviewForm.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
<?php
$digiblocks_js_output = ob_get_clean();