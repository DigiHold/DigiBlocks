<?php
/**
 * Helpers functions
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Helper function to generate box shadow CSS
 */
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

/**
 * Helper function to process text with highlight spans
 */
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
 * Allow SVG elements for wp_kses
 */
if ( ! function_exists( 'digiblocks_allow_svg_in_kses' ) ) {
	/**
	 * Allow SVG elements in wp_kses.
	 */
	function digiblocks_allow_svg_in_kses() {
		$svg_args = array(
			'svg'   => array(
				'class'           => true,
				'aria-hidden'     => true,
				'aria-labelledby' => true,
				'role'            => true,
				'xmlns'           => true,
				'viewbox'         => true,
				'width'           => true,
				'height'          => true,
				'fill'            => true,
				'stroke'          => true,
				'stroke-width'    => true,
			),
			'g'     => array( 'fill' => true ),
			'title' => array( 'title' => true ),
			'path'  => array(
				'd'               => true,
				'fill'            => true,
				'stroke'          => true,
				'stroke-width'    => true,
			),
			'line'  => array(
				'x1'              => true,
				'y1'              => true,
				'x2'              => true,
				'y2'              => true,
				'stroke'          => true,
				'stroke-width'    => true,
			),
			'polyline' => array(
				'points'          => true,
				'stroke'          => true,
				'fill'            => true,
			),
			'rect'  => array(
				'x'               => true,
				'y'               => true,
				'width'           => true,
				'height'          => true,
				'rx'              => true,
				'ry'              => true,
				'fill'            => true,
				'stroke'          => true,
			),
			'circle' => array(
				'cx'              => true,
				'cy'              => true,
				'r'               => true,
				'fill'            => true,
				'stroke'          => true,
			),
		);
		
		return $svg_args;
	}
}

/**
 * Get menu items via AJAX fallback for the navigation block in the editor
 */
function digiblocks_ajax_get_menu_items() {
    // Check nonce
    if (!isset($_POST['navigation_nonce']) || !wp_verify_nonce($_POST['navigation_nonce'], 'digiblocks_nav_nonce')) {
        wp_send_json_error('Invalid nonce');
        return;
    }
    
    // Check for menu ID
    if (!isset($_POST['menu_id']) || empty($_POST['menu_id'])) {
        wp_send_json_error('No menu ID provided');
        return;
    }
    
    $menu_id = intval($_POST['menu_id']);
    $menu_items = wp_get_nav_menu_items($menu_id);
    
    if (!$menu_items || !is_array($menu_items)) {
        wp_send_json_error('No menu items found');
        return;
    }
    
    // Return the full array of menu items directly
    wp_send_json_success($menu_items);
}
add_action('wp_ajax_digiblocks_get_menu_items', 'digiblocks_ajax_get_menu_items');