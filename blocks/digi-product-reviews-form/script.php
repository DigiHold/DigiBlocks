<?php
/**
 * DigiCommerce Product Reviews Form Block JavaScript
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
/* DigiCommerce Product Reviews Form Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const reviewBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    
    if (!reviewBlock) return;
    
    const reviewForm = reviewBlock.querySelector('.review-form-section #digi-product-review-form');
    const reviewMessage = reviewBlock.querySelector('#review-message');
    const ratingInputs = reviewBlock.querySelectorAll('.review-form-section .rating-input input[type="radio"]');
    const ratingLabels = reviewBlock.querySelectorAll('.review-form-section .rating-input .rating-star');

    // If review form exists
    if (reviewForm) {
        // Handle star rating hover effects
        ratingLabels.forEach((label, index) => {
            label.addEventListener('mouseenter', function() {
                // Fill stars up to current
                for (let i = 0; i <= index; i++) {
                    if (ratingLabels[i]) {
                        ratingLabels[i].classList.add('active');
                    }
                }
                // Clear stars after current
                for (let i = index + 1; i < ratingLabels.length; i++) {
                    if (ratingLabels[i]) {
                        ratingLabels[i].classList.remove('active');
                    }
                }
            });
        });

        // Handle star rating container mouseleave
        const ratingContainer = reviewBlock.querySelector('.review-form-section .rating-input');
        if (ratingContainer) {
            ratingContainer.addEventListener('mouseleave', function() {
                // Reset to selected rating or clear all
                const selectedRating = reviewBlock.querySelector('.review-form-section .rating-input input[type="radio"]:checked');
                ratingLabels.forEach((label, index) => {
                    if (selectedRating && index < parseInt(selectedRating.value)) {
                        label.classList.add('active');
                    } else {
                        label.classList.remove('active');
                    }
                });
            });
        }

        // Handle rating selection
        ratingInputs.forEach(input => {
            input.addEventListener('change', function(e) {
                const rating = parseInt(e.target.value);
                ratingLabels.forEach((label, index) => {
                    if (index < rating) {
                        label.classList.add('active');
                    } else {
                        label.classList.remove('active');
                    }
                });
            });
        });

        // Handle star label clicks to select rating
        ratingLabels.forEach((label, index) => {
            label.addEventListener('click', function(e) {
                e.preventDefault();
                const ratingInput = reviewBlock.querySelector('.review-form-section .rating-input input[value="' + (index + 1) + '"]');
                if (ratingInput) {
                    ratingInput.checked = true;
                    ratingInput.dispatchEvent(new Event('change'));
                }
            });
        });

        // Handle form submission
        reviewForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Show loading state
            const submitButton = reviewForm.querySelector('.submit-button');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;

            try {
                const formData = new FormData(reviewForm);

                const response = await fetch(window.digiBlocksData.ajax_url, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin'
                });

                const data = await response.json();

                // Reset form on success
                if (data.success) {
                    reviewForm.reset();
                    showMessage(data.data.message, 'success');
                    
                    // Reset star ratings
                    ratingLabels.forEach(label => {
                        label.classList.remove('active');
                    });

                    // Reload page if automatically approve reviews after delay to show new review
                    if (window.digiBlocksData && window.digiBlocksData.digicommerceReviews && window.digiBlocksData.digicommerceReviews.approve_reviews) {
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    }
                } else {
                    showMessage(data.data.message, 'error');
                }
            } catch (error) {
                showMessage('An error occurred while submitting your review.', 'error');
            } finally {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });

        // Helper function to show messages
        function showMessage(message, type) {
            if (reviewMessage) {
                reviewMessage.textContent = message;
                reviewMessage.className = `review-message ${type}`;
                reviewMessage.classList.remove('hidden');

                // Auto hide after 5 seconds
                setTimeout(() => {
                    reviewMessage.classList.add('hidden');
                }, 5000);
            }
        }
    }

    // Handle smooth scrolling to review form when "Add a review" link is clicked
    const addReviewLinks = document.querySelectorAll('a[href="#reviews"], a[href="#review_form"]');
    
    addReviewLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const reviewFormSection = reviewBlock.querySelector('.review-form-section');
            if (reviewFormSection) {
                reviewFormSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
<?php
$digiblocks_js_output = ob_get_clean();