<?php
/**
 * Counter Block Frontend Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


$id = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';

ob_start();
?>
/* Counter Animation Script for <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const counterInit = function() {
        // Find all counter blocks on the page
        const counters = document.querySelectorAll('.digiblocks-counter');
        
        if (!counters.length) {
            return;
        }
        
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
        
        // Format number with commas and decimal places
        function formatNumber(number, decimalPlaces, decimalSeparator, thousandSeparator) {
            // Handle decimal places
            let formattedNumber = number;
            if (decimalPlaces > 0) {
                formattedNumber = number.toFixed(decimalPlaces);
            } else {
                formattedNumber = Math.round(number);
            }
            
            // Convert to string for manipulation
            let numberStr = formattedNumber.toString();
            
            // Replace decimal separator if specified
            if (decimalPlaces > 0 && decimalSeparator && decimalSeparator !== '.') {
                numberStr = numberStr.replace('.', decimalSeparator);
            }
            
            // Add thousand separator if enabled
            if (thousandSeparator) {
                // Split by decimal separator
                let parts = numberStr.split(decimalSeparator || '.');
                
                // Format the integer part with commas
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
                
                // Join back with decimal part if exists
                numberStr = parts.join(decimalSeparator || '.');
            }
            
            return numberStr;
        }
        
        // Initialize counters
        counters.forEach(counter => {
            // Skip if already animated
            if (counter.getAttribute('data-animated') === 'true') {
                return;
            }
            
            // Get counter attributes
            const startValue = parseFloat(counter.getAttribute('data-start-value') || 0);
            const endValue = parseFloat(counter.getAttribute('data-end-value') || 0);
            const duration = parseInt(counter.getAttribute('data-duration') || 2000);
            const delay = parseInt(counter.getAttribute('data-delay') || 0);
            
            // Get formatting options
            const thousandSeparator = counter.getAttribute('data-thousand-separator') || '';
            const decimalPlaces = parseInt(counter.getAttribute('data-decimal-places') || 0);
            const decimalSeparator = counter.getAttribute('data-decimal-separator') || '.';
            
            // Find the counter number element
            const counterElement = counter.querySelector('.digiblocks-counter-number');
            if (!counterElement) return;
            
            // Set initial value
            counterElement.textContent = formatNumber(startValue, decimalPlaces, decimalSeparator, thousandSeparator);
            
            // Create animation function
            const animateCounter = () => {
                // Skip if already animated
                if (counter.getAttribute('data-animated') === 'true') {
                    return;
                }
                
                // Mark as animated
                counter.setAttribute('data-animated', 'true');
                
                // Animate with requestAnimationFrame for better performance
                const startTime = performance.now();
                const endTime = startTime + duration;
                
                // Apply the delay if present
                setTimeout(() => {
                    const updateCounter = (currentTime) => {
                        // Calculate progress
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        
                        // Calculate current value with easing
                        const easedProgress = easeOutQuad(progress);
                        const currentValue = startValue + (endValue - startValue) * easedProgress;
                        
                        // Update counter element
                        counterElement.textContent = formatNumber(currentValue, decimalPlaces, decimalSeparator, thousandSeparator);
                        
                        // Continue animation if not complete
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    };
                    
                    // Start animation
                    requestAnimationFrame(updateCounter);
                }, delay);
            };
            
            // Easing function for smoother animation
            function easeOutQuad(t) {
                return t * (2 - t);
            }
            
            // Animate if in viewport, otherwise add scroll listener
            if (isInViewport(counter)) {
                animateCounter();
            } else {
                const scrollHandler = () => {
                    if (isInViewport(counter) && counter.getAttribute('data-animated') !== 'true') {
                        animateCounter();
                        // Remove scroll listener once animated
                        window.removeEventListener('scroll', scrollHandler);
                    }
                };
                window.addEventListener('scroll', scrollHandler);
            }
        });
    };
    
    // Initialize counters on page load
    counterInit();
    
    // Re-initialize counters if content is loaded via AJAX
    if (typeof(MutationObserver) !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    // Check if any added node is a counter or contains a counter
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        const node = mutation.addedNodes[i];
                        if (node.classList && node.classList.contains('digiblocks-counter')) {
                            counterInit();
                            break;
                        } else if (node.querySelectorAll) {
                            const counters = node.querySelectorAll('.digiblocks-counter');
                            if (counters.length > 0) {
                                counterInit();
                                break;
                            }
                        }
                    }
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
});

<?php
$digiblocks_js_output = ob_get_clean();