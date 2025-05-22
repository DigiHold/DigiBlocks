<?php
/**
 * Helpers functions
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'digiblocks_get_dimensions' ) ) {
    /**
     * Generate dimension CSS property (padding, margin, border-width, border-radius).
     *
     * @param array  $dimensions Responsive dimension values.
     * @param string $property CSS property name (padding, margin, etc.).
     * @param string $device Device (desktop, tablet, mobile).
     * @return string CSS property with value or empty string.
     */
    function digiblocks_get_dimensions( $dimensions, $property, $device = 'desktop' ) {
        // Check if device data exists
        if ( !isset( $dimensions[$device] ) ) {
            return '';
        }
        
        $values = $dimensions[$device];
        
        // If not all required properties exist, return empty
        if ( !isset( $values['top'] ) || !isset( $values['right'] ) || 
             !isset( $values['bottom'] ) || !isset( $values['left'] ) || 
             !isset( $values['unit'] ) ) {
            return '';
        }
        
        // Check if any values are set (not empty)
        $has_value = 
            $values['top'] !== '' || 
            $values['right'] !== '' || 
            $values['bottom'] !== '' || 
            $values['left'] !== '';
        
        // If no values are set, return empty string
        if ( !$has_value ) {
            return '';
        }
        
        // If at least one value exists, make sure all values are set (empty values become 0)
        $top = $values['top'] !== '' ? $values['top'] : '0';
        $right = $values['right'] !== '' ? $values['right'] : '0';
        $bottom = $values['bottom'] !== '' ? $values['bottom'] : '0';
        $left = $values['left'] !== '' ? $values['left'] : '0';
        $unit = $values['unit'];
        
        // Return formatted CSS
        return sprintf(
            '%s: %s%s %s%s %s%s %s%s;',
            $property,
            $top, $unit,
            $right, $unit,
            $bottom, $unit,
            $left, $unit
        );
    }
}

if ( ! function_exists( 'digiblocks_get_css' ) ) {
    /**
	 * Generate CSS for responsive properties, avoiding duplication across breakpoints.
	 *
	 * @param string $property  CSS property name.
	 * @param mixed  $values    Responsive values (array with desktop, tablet, mobile keys).
	 * @param string $device    Device (desktop, tablet, mobile).
	 * @return string           CSS property with value or empty string.
	 */
	function digiblocks_get_css($property, $values, $device = 'desktop') {
		// If the value doesn't exist for this device, return empty
		if (!isset($values[$device]) || $values[$device] === '') {
			return '';
		}
		
		// For desktop, always output the value
		if ($device === 'desktop') {
			return sprintf('%s: %s;', $property, $values[$device]);
		}
		
		// For tablet, only output if different from desktop
		if ($device === 'tablet') {
			// Skip if the value matches desktop
			if (isset($values['desktop']) && $values['desktop'] !== '' && 
				$values[$device] === $values['desktop']) {
				return '';
			}
			
			return sprintf('%s: %s;', $property, $values[$device]);
		}
		
		// For mobile, compare to tablet first, then desktop
		if ($device === 'mobile') {
			// If tablet has a value and mobile matches it, skip
			if (isset($values['tablet']) && $values['tablet'] !== '' && 
				$values[$device] === $values['tablet']) {
				return '';
			}
			
			// If no tablet value but desktop has a value and mobile matches it, skip
			if ((!isset($values['tablet']) || $values['tablet'] === '') && 
				isset($values['desktop']) && $values['desktop'] !== '' && 
				$values[$device] === $values['desktop']) {
				return '';
			}
			
			return sprintf('%s: %s;', $property, $values[$device]);
		}
		
		return '';
	}
}

if ( ! function_exists( 'digiblocks_get_alignment_css' ) ) {
    /**
	 * Generate CSS for alignment.
	 *
	 * @param string $alignment Alignment value (flex-start, center, flex-end).
	 */
	function digiblocks_get_alignment_css($alignment) {
		if ($alignment === 'flex-start') {
			return 'align-items: flex-start; text-align: left;';
		} elseif ($alignment === 'center') {
			return 'align-items: center; text-align: center;';
		} elseif ($alignment === 'flex-end') {
			return 'align-items: flex-end; text-align: right;';
		}
		return '';
	}
}

if ( ! function_exists( 'digiblocks_get_gap_css' ) ) {
    /**
	 * Get gap CSS.
	 *
	 * @param array  $rowGap    Row gap values array with device keys.
	 * @param array  $columnGap Column gap values array with device keys.
	 * @param string $device   Current device (desktop, tablet, mobile).
	 * @return string Appropriate CSS property with value or empty string.
	 */
	function digiblocks_get_gap_css($rowGap, $columnGap, $device) {
		// Check if row gap has a value
		$hasRowValue = isset($rowGap[$device]['value']) && $rowGap[$device]['value'] !== '';
		
		// Check if column gap has a value
		$hasColumnValue = isset($columnGap[$device]['value']) && $columnGap[$device]['value'] !== '';
		
		// If both row and column gaps have values
		if ($hasRowValue && $hasColumnValue) {
			$rowValue = $rowGap[$device]['value'];
			$rowUnit = isset($rowGap[$device]['unit']) && !empty($rowGap[$device]['unit']) ? $rowGap[$device]['unit'] : 'px';
			
			$columnValue = $columnGap[$device]['value'];
			$columnUnit = isset($columnGap[$device]['unit']) && !empty($columnGap[$device]['unit']) ? $columnGap[$device]['unit'] : 'px';
			
			// Return full gap property
			return sprintf('gap: %s%s %s%s;', $rowValue, $rowUnit, $columnValue, $columnUnit);
		}
		
		// If only row gap has a value
		if ($hasRowValue && !$hasColumnValue) {
			$rowValue = $rowGap[$device]['value'];
			$rowUnit = isset($rowGap[$device]['unit']) && !empty($rowGap[$device]['unit']) ? $rowGap[$device]['unit'] : 'px';
			
			// Return row-gap property
			return sprintf('row-gap: %s%s;', $rowValue, $rowUnit);
		}
		
		// If only column gap has a value
		if (!$hasRowValue && $hasColumnValue) {
			$columnValue = $columnGap[$device]['value'];
			$columnUnit = isset($columnGap[$device]['unit']) && !empty($columnGap[$device]['unit']) ? $columnGap[$device]['unit'] : 'px';
			
			// Return column-gap property
			return sprintf('column-gap: %s%s;', $columnValue, $columnUnit);
		}
		
		// If neither has a value, return empty string
		return '';
	}
}

/**
 * Get default responsive dimension values.
 *
 * @param string $unit Optional. The default unit to use.
 * @return array Default responsive dimension values.
 */
function digiblocks_get_default_dimensions($unit = 'px') {
    return [
        'desktop' => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => $unit],
        'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => $unit],
        'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => $unit],
    ];
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
	if ( ! isset( $_POST['navigation_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['navigation_nonce'] ) ), 'digiblocks_nav_nonce' ) ) {
		wp_send_json_error( 'Invalid nonce' );
		return;
	}

	// Check for menu ID
	if ( ! isset( $_POST['menu_id'] ) || empty( $_POST['menu_id'] ) ) {
		wp_send_json_error( 'No menu ID provided' );
		return;
	}

	$menu_id    = intval( sanitize_text_field( wp_unslash( $_POST['menu_id'] ) ) );
	$menu_items = wp_get_nav_menu_items( $menu_id );

	if ( ! $menu_items || ! is_array( $menu_items ) ) {
		wp_send_json_error( 'No menu items found' );
		return;
	}

	// Return the full array of menu items directly
	wp_send_json_success( $menu_items );
}
add_action( 'wp_ajax_digiblocks_get_menu_items', 'digiblocks_ajax_get_menu_items' );
