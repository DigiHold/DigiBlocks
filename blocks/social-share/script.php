<?php
/**
 * Social Share Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$id = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';

// JavaScript output
ob_start();
?>
(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSocialShare);
    } else {
        initSocialShare();
    }
    
    function initSocialShare() {
        const socialShareBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
        if (!socialShareBlock) return;
        
        // Get all social share buttons
        const shareButtons = socialShareBlock.querySelectorAll('.digiblocks-social-share-button');
        
        // Add click handler to each button
        shareButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const shareUrl = this.getAttribute('data-share-url');
                if (!shareUrl) return;
                
                // Get the current page URL
                const currentUrl = encodeURIComponent(window.location.href);
                
                // Replace placeholder with actual URL
                const finalUrl = shareUrl.replace('{url}', currentUrl);
                
                // Handle print action directly
                if (finalUrl === 'javascript:window.print()') {
                    window.print();
                    return;
                }
                
                // Calculate center position for the popup
                const width = 600;
                const height = 400;
                const left = window.screen.width / 2 - width / 2;
                const top = window.screen.height / 2 - height / 2;
                
                // Open share window centered on screen
                window.open(
                    finalUrl,
                    'share-dialog',
                    `width=${width},height=${height},left=${left},top=${top},location=no,menubar=no,toolbar=no,status=no,scrollbars=yes,resizable=yes`
                );
            });
        });
    }
})();
<?php
$digiblocks_js_output = ob_get_clean();