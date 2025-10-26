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

if ( ! function_exists( 'digiblocks_get_justify_css' ) ) {
    /**
	 * Generate CSS for justify content.
	 *
	 * @param string $justify Justify Content value (flex-start, center, flex-end).
	 */
	function digiblocks_get_justify_css($justify) {
		if ($justify === 'flex-start') {
			return 'justify-content: flex-start;';
		} elseif ($justify === 'center') {
			return 'justify-content: center;';
		} elseif ($justify === 'flex-end') {
			return 'justify-content: flex-end';
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

if ( ! function_exists( 'digiblocks_get_single_gap_css' ) ) {
	/**
	 * Get single gap CSS for responsive design
	 *
	 * @param array  $gap_values Gap values array
	 * @param string $device Current device
	 * @return string CSS gap property
	 */
	function digiblocks_get_single_gap_css( $gap_values, $device ) {
		// Default gap structure
		$default_gap = array(
			'desktop' => array( 'value' => 20, 'unit' => 'px' ),
			'tablet'  => array( 'value' => '', 'unit' => 'px' ),
			'mobile'  => array( 'value' => '', 'unit' => 'px' ),
		);
		
		// Merge with defaults
		$gap_values = wp_parse_args( $gap_values, $default_gap );
		
		// Get gap value with responsive fallback
		$gap_value = '';
		$gap_unit = 'px';
		
		// If current device has a value, use it
		if ( isset( $gap_values[ $device ] ) && ! empty( $gap_values[ $device ]['value'] ) ) {
			$gap_value = $gap_values[ $device ]['value'];
			$gap_unit = isset( $gap_values[ $device ]['unit'] ) ? $gap_values[ $device ]['unit'] : 'px';
		} 
		// For tablet: fallback to desktop
		elseif ( $device === 'tablet' && isset( $gap_values['desktop'] ) && ! empty( $gap_values['desktop']['value'] ) ) {
			$gap_value = $gap_values['desktop']['value'];
			$gap_unit = isset( $gap_values['desktop']['unit'] ) ? $gap_values['desktop']['unit'] : 'px';
		}
		// For mobile: try tablet first, then desktop
		elseif ( $device === 'mobile' ) {
			if ( isset( $gap_values['tablet'] ) && ! empty( $gap_values['tablet']['value'] ) ) {
				$gap_value = $gap_values['tablet']['value'];
				$gap_unit = isset( $gap_values['tablet']['unit'] ) ? $gap_values['tablet']['unit'] : 'px';
			} elseif ( isset( $gap_values['desktop'] ) && ! empty( $gap_values['desktop']['value'] ) ) {
				$gap_value = $gap_values['desktop']['value'];
				$gap_unit = isset( $gap_values['desktop']['unit'] ) ? $gap_values['desktop']['unit'] : 'px';
			}
		}
		// Default case
		elseif ( isset( $gap_values['desktop'] ) && ! empty( $gap_values['desktop']['value'] ) ) {
			$gap_value = $gap_values['desktop']['value'];
			$gap_unit = isset( $gap_values['desktop']['unit'] ) ? $gap_values['desktop']['unit'] : 'px';
		}
		
		// Return gap CSS if we have a value
		if ( ! empty( $gap_value ) || $gap_value === 0 || $gap_value === '0' ) {
			return "gap: {$gap_value}{$gap_unit};";
		}
		
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
		$kses_defaults = wp_kses_allowed_html( 'post' );
	
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
				'focusable'       => true,
			),
			'g'       => array(
				'fill'            => true,
				'fill-rule'       => true,
				'transform'       => true,
			),
			'title' => array(
				'title' => true,
			),
			'path'    => array(
				'd'               => true,
				'fill'            => true,
				'fill-rule'       => true,
				'stroke'          => true,
				'stroke-width'    => true,
				'stroke-linecap'  => true,
				'stroke-linejoin' => true,
				'transform'       => true,
			),
			'line'  => array(
				'x1'              => true,
				'y1'              => true,
				'x2'              => true,
				'y2'              => true,
				'stroke'          => true,
				'stroke-width'    => true,
				'transform'       => true,
			),
			'polyline' => array(
				'points'          => true,
				'stroke'          => true,
				'fill'            => true,
				'transform'       => true,
			),
			'polygon' => array(
				'points'          => true,
				'fill'            => true,
				'fill-rule'       => true,
				'transform'       => true,
			),
			'rect'    => array(
				'x'               => true,
				'y'               => true,
				'width'           => true,
				'height'          => true,
				'fill'            => true,
				'stroke'          => true,
				'stroke-width'    => true,
				'rx'              => true,
				'ry'              => true,
				'transform'       => true,
			),
			'circle'  => array(
				'cx'              => true,
				'cy'              => true,
				'r'               => true,
				'fill'            => true,
				'stroke'          => true,
				'stroke-width'    => true,
				'transform'       => true,
			),
			'ellipse' => array(
				'cx'              => true,
				'cy'              => true,
				'rx'              => true,
				'ry'              => true,
				'fill'            => true,
				'stroke'          => true,
				'stroke-width'    => true,
				'transform'       => true,
			),
		);
		
		return array_merge($kses_defaults, $svg_args);
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

if ( ! function_exists( 'digiblocks_get_transform_origin' ) ) {
	/**
	 * Get transform origin CSS value.
	 *
	 * @param array  $transform Transform settings.
	 * @param string $device    Device (desktop, tablet, mobile).
	 * @return string Transform origin value or empty string.
	 */
	function digiblocks_get_transform_origin( $transform, $device ) {
		if ( empty( $transform ) ) {
			return '';
		}
		
		$x_map = array( 'left' => '0%', 'center' => '50%', 'right' => '100%' );
		$y_map = array( 'top' => '0%', 'center' => '50%', 'bottom' => '100%' );
		
		$x_anchor = '';
		$y_anchor = '';
		
		if ( $device === 'desktop' ) {
			$x_anchor = isset( $transform['xAnchor']['desktop'] ) && $transform['xAnchor']['desktop'] !== '' 
				? $transform['xAnchor']['desktop'] 
				: 'center';
			$y_anchor = isset( $transform['yAnchor']['desktop'] ) && $transform['yAnchor']['desktop'] !== '' 
				? $transform['yAnchor']['desktop'] 
				: 'center';
		} elseif ( $device === 'tablet' ) {
			$x_anchor = isset( $transform['xAnchor']['tablet'] ) && $transform['xAnchor']['tablet'] !== '' 
				? $transform['xAnchor']['tablet'] 
				: ( isset( $transform['xAnchor']['desktop'] ) && $transform['xAnchor']['desktop'] !== '' 
					? $transform['xAnchor']['desktop'] 
					: 'center' );
			$y_anchor = isset( $transform['yAnchor']['tablet'] ) && $transform['yAnchor']['tablet'] !== '' 
				? $transform['yAnchor']['tablet'] 
				: ( isset( $transform['yAnchor']['desktop'] ) && $transform['yAnchor']['desktop'] !== '' 
					? $transform['yAnchor']['desktop'] 
					: 'center' );
		} else {
			$x_anchor = isset( $transform['xAnchor']['mobile'] ) && $transform['xAnchor']['mobile'] !== '' 
				? $transform['xAnchor']['mobile'] 
				: ( isset( $transform['xAnchor']['tablet'] ) && $transform['xAnchor']['tablet'] !== '' 
					? $transform['xAnchor']['tablet'] 
					: ( isset( $transform['xAnchor']['desktop'] ) && $transform['xAnchor']['desktop'] !== '' 
						? $transform['xAnchor']['desktop'] 
						: 'center' ) );
			$y_anchor = isset( $transform['yAnchor']['mobile'] ) && $transform['yAnchor']['mobile'] !== '' 
				? $transform['yAnchor']['mobile'] 
				: ( isset( $transform['yAnchor']['tablet'] ) && $transform['yAnchor']['tablet'] !== '' 
					? $transform['yAnchor']['tablet'] 
					: ( isset( $transform['yAnchor']['desktop'] ) && $transform['yAnchor']['desktop'] !== '' 
						? $transform['yAnchor']['desktop'] 
						: 'center' ) );
		}
		
		if ( ! isset( $x_map[ $x_anchor ] ) || ! isset( $y_map[ $y_anchor ] ) ) {
			return '';
		}
		
		return $x_map[ $x_anchor ] . ' ' . $y_map[ $y_anchor ];
	}
}

if ( ! function_exists( 'digiblocks_get_transform_css' ) ) {
	/**
	 * Generate CSS transform property.
	 *
	 * @param array  $transform Transform settings.
	 * @param string $device    Device (desktop, tablet, mobile).
	 * @return string CSS transform value or empty string.
	 */
	function digiblocks_get_transform_css( $transform, $device ) {
		if ( empty( $transform ) ) {
			return '';
		}
		
		$transforms = array();
		
		$rotate_value = isset( $transform['rotate'][ $device ] ) ? $transform['rotate'][ $device ] : '';
		if ( is_array( $rotate_value ) && isset( $rotate_value['value'] ) ) {
			$rotate_value = $rotate_value['value'];
		}
		
		if ( $rotate_value !== '' && $rotate_value !== null ) {
			if ( ! empty( $transform['rotate3d'] ) ) {
				$perspective_value = isset( $transform['perspective'][ $device ] ) ? $transform['perspective'][ $device ] : '';
				if ( is_array( $perspective_value ) && isset( $perspective_value['value'] ) ) {
					$perspective_value = $perspective_value['value'];
				}
				if ( $perspective_value !== '' && $perspective_value !== null ) {
					$transforms[] = 'perspective(' . $perspective_value . 'px)';
				}
			}
			$transforms[] = 'rotate(' . $rotate_value . 'deg)';
		}
		
		if ( ! empty( $transform['rotate3d'] ) ) {
			$rotate_x_value = isset( $transform['rotateX'][ $device ] ) ? $transform['rotateX'][ $device ] : '';
			if ( is_array( $rotate_x_value ) && isset( $rotate_x_value['value'] ) ) {
				$rotate_x_value = $rotate_x_value['value'];
			}
			if ( $rotate_x_value !== '' && $rotate_x_value !== null ) {
				$transforms[] = 'rotateX(' . $rotate_x_value . 'deg)';
			}
			
			$rotate_y_value = isset( $transform['rotateY'][ $device ] ) ? $transform['rotateY'][ $device ] : '';
			if ( is_array( $rotate_y_value ) && isset( $rotate_y_value['value'] ) ) {
				$rotate_y_value = $rotate_y_value['value'];
			}
			if ( $rotate_y_value !== '' && $rotate_y_value !== null ) {
				$transforms[] = 'rotateY(' . $rotate_y_value . 'deg)';
			}
		}
		
		if ( ! empty( $transform['offsetX'][ $device ]['value'] ) || ! empty( $transform['offsetY'][ $device ]['value'] ) ) {
			$x = ! empty( $transform['offsetX'][ $device ] ) ? $transform['offsetX'][ $device ]['value'] . $transform['offsetX'][ $device ]['unit'] : '0';
			$y = ! empty( $transform['offsetY'][ $device ] ) ? $transform['offsetY'][ $device ]['value'] . $transform['offsetY'][ $device ]['unit'] : '0';
			$transforms[] = 'translate(' . $x . ', ' . $y . ')';
		}
		
		if ( ! empty( $transform['keepProportions'] ) ) {
			$scale_value = isset( $transform['scale'][ $device ] ) ? $transform['scale'][ $device ] : '';
			if ( is_array( $scale_value ) && isset( $scale_value['value'] ) ) {
				$scale_value = $scale_value['value'];
			}
			if ( $scale_value !== '' && $scale_value !== null && $scale_value != 1 ) {
				$transforms[] = 'scale(' . $scale_value . ')';
			}
		} else {
			$scale_x_value = isset( $transform['scaleX'][ $device ] ) ? $transform['scaleX'][ $device ] : 1;
			if ( is_array( $scale_x_value ) && isset( $scale_x_value['value'] ) ) {
				$scale_x_value = $scale_x_value['value'];
			}
			$scale_y_value = isset( $transform['scaleY'][ $device ] ) ? $transform['scaleY'][ $device ] : 1;
			if ( is_array( $scale_y_value ) && isset( $scale_y_value['value'] ) ) {
				$scale_y_value = $scale_y_value['value'];
			}
			$scale_x = ( $scale_x_value !== '' && $scale_x_value !== null ) ? $scale_x_value : 1;
			$scale_y = ( $scale_y_value !== '' && $scale_y_value !== null ) ? $scale_y_value : 1;
			if ( $scale_x != 1 || $scale_y != 1 ) {
				$transforms[] = 'scale(' . $scale_x . ', ' . $scale_y . ')';
			}
		}
		
		$skew_x_value = isset( $transform['skewX'][ $device ] ) ? $transform['skewX'][ $device ] : '';
		if ( is_array( $skew_x_value ) && isset( $skew_x_value['value'] ) ) {
			$skew_x_value = $skew_x_value['value'];
		}
		if ( $skew_x_value !== '' && $skew_x_value !== null ) {
			$transforms[] = 'skewX(' . $skew_x_value . 'deg)';
		}
		
		$skew_y_value = isset( $transform['skewY'][ $device ] ) ? $transform['skewY'][ $device ] : '';
		if ( is_array( $skew_y_value ) && isset( $skew_y_value['value'] ) ) {
			$skew_y_value = $skew_y_value['value'];
		}
		if ( $skew_y_value !== '' && $skew_y_value !== null ) {
			$transforms[] = 'skewY(' . $skew_y_value . 'deg)';
		}
		
		if ( ! empty( $transform['flipHorizontal'] ) ) {
			$transforms[] = 'scaleX(-1)';
		}
		if ( ! empty( $transform['flipVertical'] ) ) {
			$transforms[] = 'scaleY(-1)';
		}
		
		return ! empty( $transforms ) ? implode( ' ', $transforms ) : '';
	}
}