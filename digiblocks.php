<?php
/**
 * Plugin Name: DigiBlocks
 * Description: A collection of beautiful custom Gutenberg blocks for WordPress.
 * Version: 1.0.0
 * Author: DigiCommerce
 * Text Domain: digiblocks
 * Domain Path: /languages
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define constants.
define( 'DIGIBLOCKS_VERSION', '1.0.0' );
define( 'DIGIBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'DIGIBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'DIGIBLOCKS_PLUGIN_FILE', __FILE__ );
define( 'DIGIBLOCKS_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'DIGIBLOCKS_ASSETS_DIR', WP_CONTENT_DIR . '/uploads/digiblocks' );
define( 'DIGIBLOCKS_ASSETS_URL', WP_CONTENT_URL . '/uploads/digiblocks' );

// Include the main DigiBlocks class file.
require_once plugin_dir_path( __FILE__ ) . 'includes/class-digiblocks.php';

// Helper function to generate box shadow CSS
if ( ! function_exists( 'digiblocks_get_box_shadow_css' ) ) {
	/**
	 * Generate CSS box shadow property.
	 *
	 * @param array $shadow Box shadow settings.
	 * @return string CSS box shadow property.
	 */
	function digiblocks_get_box_shadow_css( $shadow ) {
		if ( ! isset( $shadow['enable'] ) || ! $shadow['enable'] ) {
			return 'none';
		}

		$inset      = ( isset( $shadow['position'] ) && 'inset' === $shadow['position'] ) ? 'inset ' : '';
		$horizontal = isset( $shadow['horizontal'] ) ? $shadow['horizontal'] : 0;
		$vertical   = isset( $shadow['vertical'] ) ? $shadow['vertical'] : 0;
		$blur       = isset( $shadow['blur'] ) ? $shadow['blur'] : 0;
		$spread     = isset( $shadow['spread'] ) ? $shadow['spread'] : 0;
		$color      = isset( $shadow['color'] ) ? $shadow['color'] : 'rgba(0, 0, 0, 0.2)';

		return "{$inset}{$horizontal}px {$vertical}px {$blur}px {$spread}px {$color}";
	}
}

// Helper function to process text with highlight spans
if ( ! function_exists( 'digiblocks_process_heading_content' ) ) {
	/**
	 * Process heading content to highlight specific text.
	 *
	 * @param string $content The content to process.
	 * @param string $highlight_text The text to highlight.
	 * @param string $highlight_type The type of highlight.
	 */
	function digiblocks_process_heading_content( $content, $highlight_text, $highlight_type ) {
		if ( empty( $highlight_text ) || empty( $content ) ) {
			return $content;
		}

		// Escape regex special characters in the highlight text
		$highlight_text_escaped = preg_quote( $highlight_text, '/' );

		// Replace the highlight text with a span
		$processed_content = preg_replace(
			'/(' . $highlight_text_escaped . ')/',
			'<span class="digiblocks-highlight">$1</span>',
			$content
		);

		return $processed_content ?: $content; // Return original content if replacement fails
	}
}

/**
 * DigiBlocks Initialization
 */
function digiblocks_init() {
	return DigiBlocks::get_instance();
}

// Start the plugin.
digiblocks_init();
