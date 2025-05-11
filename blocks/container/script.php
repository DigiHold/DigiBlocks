<?php
/**
 * Container Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-container-' . uniqid();

// Script Output
ob_start();
?>
(function() {
    // Initialize background videos if present
    const container = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    if (container) {
        const videoContainer = container.querySelector('.digiblocks-bg-video-container');
        
        if (videoContainer) {
            const video = videoContainer.querySelector('video');
            
            if (video) {
                // Make sure video plays automatically
                video.play().catch(error => {
                    console.warn('Auto-play was prevented for background video:', error);
                });
                
                // Ensure video maintains aspect ratio on resize
                function adjustVideoSize() {
                    if (container.offsetWidth / container.offsetHeight > video.videoWidth / video.videoHeight) {
                        video.style.width = '100%';
                        video.style.height = 'auto';
                    } else {
                        video.style.width = 'auto';
                        video.style.height = '100%';
                    }
                }
                
                // Call once on load
                if (video.readyState >= 1) {
                    adjustVideoSize();
                } else {
                    video.addEventListener('loadedmetadata', adjustVideoSize);
                }
                
                // Adjust on window resize
                window.addEventListener('resize', adjustVideoSize);
            }
        }
    }
})();
<?php
$digiblocks_js_output = ob_get_clean();