<?php
/**
 * Countdown Block Frontend JS
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes for any custom JS
$end_date = isset( $attrs['endDate'] ) ? $attrs['endDate'] : '';

// JS Output
ob_start();
?>
/* Countdown JavaScript for <?php echo esc_attr( $block_id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.querySelector('[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]');
    if (!countdownElement) return;
    
    // Get attributes from the element
    const endDate = countdownElement.getAttribute('data-end-date') || '';
    const showDays = countdownElement.getAttribute('data-show-days') === 'true';
    const showHours = countdownElement.getAttribute('data-show-hours') === 'true';
    const showMinutes = countdownElement.getAttribute('data-show-minutes') === 'true';
    const showSeconds = countdownElement.getAttribute('data-show-seconds') === 'true';
    const daysLabel = countdownElement.getAttribute('data-days-label') || 'Days';
    const hoursLabel = countdownElement.getAttribute('data-hours-label') || 'Hours';
    const minutesLabel = countdownElement.getAttribute('data-minutes-label') || 'Minutes';
    const secondsLabel = countdownElement.getAttribute('data-seconds-label') || 'Seconds';
    const expiredMessage = countdownElement.getAttribute('data-expired-message') || "Time's up!";
    const labelPosition = countdownElement.getAttribute('data-label-position') || 'bottom';
    
    // Select elements
    const container = countdownElement.querySelector('.digiblocks-countdown-container');
    const expiredElement = countdownElement.querySelector('.digiblocks-countdown-expired');
    
    // DOM elements for each unit
    const daysElement = showDays ? countdownElement.querySelector('.digiblocks-countdown-days .digiblocks-countdown-digit') : null;
    const hoursElement = showHours ? countdownElement.querySelector('.digiblocks-countdown-hours .digiblocks-countdown-digit') : null;
    const minutesElement = showMinutes ? countdownElement.querySelector('.digiblocks-countdown-minutes .digiblocks-countdown-digit') : null;
    const secondsElement = showSeconds ? countdownElement.querySelector('.digiblocks-countdown-seconds .digiblocks-countdown-digit') : null;
    
    // Parse the end date
    const targetDate = new Date(endDate);
    
    // Check if the date is valid
    if (isNaN(targetDate.getTime())) {
        console.error('Invalid date format for countdown block');
        return;
    }
    
    // Format time with leading zeros
    function formatTime(value) {
        return value.toString().padStart(2, '0');
    }
    
    // Update the countdown
    function updateCountdown() {
        // Get current time
        const now = new Date();
        
        // Calculate time difference
        const difference = targetDate - now;
        
        // If the target date has passed, show expired message
        if (difference <= 0) {
            if (container) container.style.display = 'none';
            if (expiredElement) expiredElement.style.display = 'block';
            return;
        }
        
        // Calculate remaining time
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update the DOM
        if (daysElement) daysElement.textContent = formatTime(days);
        if (hoursElement) hoursElement.textContent = formatTime(hours);
        if (minutesElement) minutesElement.textContent = formatTime(minutes);
        if (secondsElement) secondsElement.textContent = formatTime(seconds);
    }
    
    // Initialize and set interval
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Clean up interval when the page is hidden or unloaded
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            clearInterval(countdownInterval);
        } else {
            updateCountdown();
            setInterval(updateCountdown, 1000);
        }
    });
    
    // Add animation on number change
    function addAnimationToDigits() {
        const allDigits = countdownElement.querySelectorAll('.digiblocks-countdown-digit');
        allDigits.forEach(digit => {
            digit.addEventListener('change', function() {
                digit.classList.add('digiblocks-digit-change');
                setTimeout(() => {
                    digit.classList.remove('digiblocks-digit-change');
                }, 500);
            });
        });
    }
    
    // Optionally add animation (this would require some CSS to be added in the styles.php file)
    // addAnimationToDigits();
});
<?php
$digiblocks_js_output = ob_get_clean();