<?php
/**
 * Custom walker for navigation menu
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class DigiBlocks_Navigation_Walker
 *
 * Custom walker for navigation menu
 */
class DigiBlocks_Navigation_Walker extends Walker_Nav_Menu {
    /**
     * Traverse elements to create list from elements.
     *
     * This is the crucial function that handles nested submenus correctly.
     * The default WordPress walker sometimes misses submenu children.
     *
     * @param object $element           Data object.
     * @param array  $children_elements List of elements to continue traversing.
     * @param int    $max_depth         Max depth to traverse.
     * @param int    $depth             Depth of current element.
     * @param array  $args              An array of arguments.
     * @param string $output            Passed by reference. Used to append additional content.
     */
    public function display_element($element, &$children_elements, $max_depth, $depth, $args, &$output) {
        if (!$element) {
            return;
        }

        $id_field = $this->db_fields['id'];
        $id = $element->$id_field;

        // Display this element
        $this->has_children = !empty($children_elements[$id]);
        if (isset($args[0]) && is_array($args[0])) {
            $args[0]['has_children'] = $this->has_children;
        }

        parent::display_element($element, $children_elements, $max_depth, $depth, $args, $output);
    }

    /**
     * Start the element output.
     */
	function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		$indent = ($depth) ? str_repeat("\t", $depth) : '';
		
		$classes = empty($item->classes) ? array() : (array) $item->classes;
		$classes[] = 'menu-item-' . $item->ID;
		
		// Check if the item has children
		$has_children = false;
		if (in_array('menu-item-has-children', $classes)) {
			$has_children = true;
			$classes[] = 'has-submenu';
		}
		
		// Build the class attribute
		$class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
		$class_names = $class_names ? ' class="digiblocks-navigation-menu-item ' . esc_attr($class_names) . '"' : ' class="digiblocks-navigation-menu-item"';
		
		$id = apply_filters('nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args);
		$id = $id ? ' id="' . esc_attr($id) . '"' : '';
		
		$output .= $indent . '<li' . $id . $class_names .'>';
		
		// Link attributes
		$atts = array();
		$atts['href'] = !empty($item->url) ? $item->url : '';
		$atts['title'] = !empty($item->attr_title) ? $item->attr_title : '';
		$atts['target'] = !empty($item->target) ? $item->target : '';
		$atts['rel'] = !empty($item->xfn) ? $item->xfn : '';
		if ($atts['target'] === '_blank') {
			$atts['rel'] = ($atts['rel'] ? $atts['rel'] . ' ' : '') . 'noopener noreferrer';
		}
		$atts['class'] = 'digiblocks-navigation-link';
		
		$atts = apply_filters('nav_menu_link_attributes', $atts, $item, $args, $depth);
		
		$attributes = '';
		foreach ($atts as $attr => $value) {
			if (!empty($value)) {
				$value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
				$attributes .= ' ' . $attr . '="' . $value . '"';
			}
		}
		
		// Build the link
		$title = apply_filters('the_title', $item->title, $item->ID);
		$title = apply_filters('nav_menu_item_title', $title, $item, $args, $depth);
		
		// Check if RTL
		$is_rtl = is_rtl();
		
		// Create the submenu toggle button for items with children
		$submenu_toggle = '';
		if ($has_children) {
			$submenu_toggle = '<button class="digiblocks-submenu-toggle" aria-expanded="false">';
			$submenu_toggle .= '<svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">';
			$submenu_toggle .= '<path d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 160L40 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0 0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160 160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0 0-160z"/>';
			$submenu_toggle .= '</svg>';
			$submenu_toggle .= '<svg class="icon-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em">';
			$submenu_toggle .= '<path d="M432 256c0 13.3-10.7 24-24 24L40 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l368 0c13.3 0 24 10.7 24 24z"/>';
			$submenu_toggle .= '</svg>';
			$submenu_toggle .= '</button>';
		}
		
		// Add dropdown icon based on depth and RTL setting - these will show in desktop view
		$dropdown_icon = '';
		if ($has_children) {
			if ($depth === 0) {
				// Top level with submenu - down arrow
				$dropdown_icon = '<span class="digiblocks-navigation-submenu-icon">' . 
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M241 369c-9.4 9.4-24.6 9.4-33.9 0L47 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 369z"/></svg>' . 
					'</span>';
			} else {
				// Submenu with its own submenu
				if ($is_rtl) {
					// Left arrow for RTL
					$dropdown_icon = '<span class="digiblocks-navigation-submenu-icon submenu-icon-rtl">' . 
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"/></svg>' . 
						'</span>';
				} else {
					// Right arrow for LTR
					$dropdown_icon = '<span class="digiblocks-navigation-submenu-icon submenu-icon-ltr">' . 
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"/></svg>' . 
						'</span>';
				}
			}
		}
		
		$item_output = $args->before;
		
		// Add plus/minus wrapper (for mobile)
		if ($has_children) {
			$item_output .= '<span class="digiblocks-navigation-link-sub">';
		}

		$item_output .= '<a'. $attributes .'>';
		$item_output .= $args->link_before . $title . $args->link_after;
		
		// Add the dropdown icon after the text (for desktop)
		if ($has_children) {
			$item_output .= $dropdown_icon;
		}
		
		$item_output .= '</a>';
		
		// Add plus/minus toggle after the link (for mobile)
		if ($has_children) {
			$item_output .= $submenu_toggle . '</span>';
		}
		
		$item_output .= $args->after;
		
		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	}

    /**
     * Start the level output.
     */
    function start_lvl(&$output, $depth = 0, $args = array()) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"digiblocks-navigation-submenu depth-" . ($depth + 1) . "\">\n";
    }
}