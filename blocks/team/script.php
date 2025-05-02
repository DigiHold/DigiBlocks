<?php
/**
 * Team Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$layout = isset( $attrs['layout'] ) ? $attrs['layout'] : 'grid';

// JavaScript Output
ob_start();
?>

(function() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        // Find the team element
        const teamElement = document.querySelector('[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]');
        
        if (!teamElement) return;

        <?php if ( 'carousel' === $layout ) : ?>
			// Initialize carousel functionality
			initCarousel(teamElement);
        <?php endif; ?>
    });

    <?php if ( 'carousel' === $layout ) : ?>

    /**
     * Initialize carousel functionality
     * @param {HTMLElement} teamElement - The team block element
     */
    function initCarousel(teamElement) {
        const container = teamElement.querySelector('.digiblocks-team-container');
        
        if (!container) return;
        
        // Add navigation arrows
        const arrowPrev = document.createElement('button');
        arrowPrev.className = 'digiblocks-team-carousel-prev';
        arrowPrev.setAttribute('aria-label', 'Previous');
        arrowPrev.textContent = '←';
        
        const arrowNext = document.createElement('button');
        arrowNext.className = 'digiblocks-team-carousel-next';
        arrowNext.setAttribute('aria-label', 'Next');
        arrowNext.textContent = '→';
        
        // Create controls container
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'digiblocks-team-carousel-controls';
        controlsContainer.appendChild(arrowPrev);
        controlsContainer.appendChild(arrowNext);
        
        // Add controls to team element
        teamElement.appendChild(controlsContainer);
        
        // Add necessary CSS styles
        const style = document.createElement('style');
        style.textContent = `
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
                position: relative;
            }
            
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-carousel-controls {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }
            
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-carousel-prev,
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-carousel-next {
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-carousel-prev:hover,
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-carousel-next:hover {
                background-color: #f0f0f0;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-carousel-prev svg,
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-carousel-next svg {
                width: 16px;
                height: 16px;
                fill: #555;
            }
        `;
        document.head.appendChild(style);
        
        // Calculate scrolling distance (based on the first member's width)
        const members = container.querySelectorAll('.digiblocks-team-member');
        if (!members.length) return;
        
        let scrollDistance = members[0].offsetWidth + parseFloat(getComputedStyle(members[0]).marginRight);
        
        // Add event listeners to arrows
        arrowPrev.addEventListener('click', function() {
            container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });
        
        arrowNext.addEventListener('click', function() {
            container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });
        
        // Add keyboard navigation support
        container.setAttribute('tabindex', '0');
        container.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
                event.preventDefault();
            } else if (event.key === 'ArrowRight') {
                container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
                event.preventDefault();
            }
        });
        
        // Handle touch events for mobile swiping
        let startX, startY;
        let startTime;
        let isScrolling = false;
        
        container.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
            isScrolling = undefined;
        }, { passive: true });
        
        container.addEventListener('touchmove', function(e) {
            if (isScrolling === undefined) {
                isScrolling = (Math.abs(e.touches[0].clientY - startY) > Math.abs(e.touches[0].clientX - startX));
            }
            
            if (!isScrolling) {
                e.preventDefault(); // Prevent page scroll if swiping horizontally
            }
        }, { passive: false });
        
        container.addEventListener('touchend', function(e) {
            if (isScrolling) return;
            
            const endX = e.changedTouches[0].clientX;
            const endTime = Date.now();
            
            // Calculate distance and time
            const distX = endX - startX;
            const elapsedTime = endTime - startTime;
            
            // Check if the swipe was fast and long enough
            if (elapsedTime < 300 && Math.abs(distX) > 50) {
                if (distX > 0) {
                    // Swipe right - go to previous
                    container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
                } else {
                    // Swipe left - go to next
                    container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
                }
            }
        }, { passive: true });
        
        // Add resize listener to recalculate scroll distance
        window.addEventListener('resize', function() {
            if (!members.length) return;
            scrollDistance = members[0].offsetWidth + parseFloat(getComputedStyle(members[0]).marginRight);
        });
    }
    <?php endif; ?>
})();

<?php
$digiblocks_js_output = ob_get_clean();