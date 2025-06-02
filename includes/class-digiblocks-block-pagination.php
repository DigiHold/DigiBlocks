<?php
/**
 * Block Pagination Helper Class
 * 
 * Provides clean pagination functionality for blocks with simple URLs
 * 
 * @package DigiBlocks
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class DigiBlocks_Block_Pagination
 * 
 * Provides standard pagination functionality for blocks with clean URLs
 */
class DigiBlocks_Block_Pagination {

	/**
	 * Instance of this class
	 *
	 * @var DigiBlocks_Block_Pagination
	 */
	private static $instance;

	/**
	 * Get instance
	 *
	 * @return DigiBlocks_Block_Pagination
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Get current page for a specific block type
	 *
	 * @param string $block_type Block type (posts, products, etc.).
	 * @return int Current page number.
	 */
	public function get_current_page_for_block( $block_type ) {
		// Try block-specific pagination first
		$block_page = isset( $_GET[ $block_type ] ) ? absint( $_GET[ $block_type ] ) : 0;
		
		if ( $block_page > 0 ) {
			return $block_page;
		}
		
		// Fallback to standard pagination if we're in the main query context
		$paged = get_query_var( 'paged' );
		if ( $paged ) {
			return $paged;
		}
		
		// Check for page query var (used on static front page)
		$page = get_query_var( 'page' );
		if ( $page ) {
			return $page;
		}
		
		return 1;
	}

	/**
	 * Render standard pagination for blocks
	 *
	 * @param WP_Query $query Query object.
	 * @param int      $current_page Current page.
	 * @param string   $block_type Block type (posts, products, etc.).
	 * @param string   $block_id Block ID for anchor.
	 * @return string Pagination HTML.
	 */
	public function render_pagination( $query, $current_page, $block_type, $block_id = '' ) {
		$total_pages = $query->max_num_pages;
		
		if ( $total_pages <= 1 ) {
			return '';
		}
		
		// Get current URL without pagination parameters
		$current_url = $this->get_clean_current_url();
		
		// Build pagination base URL with simple parameter
		$base_url = add_query_arg( $block_type, '%#%', $current_url );
		
		// Add fragment to scroll to block if ID provided
		if ( ! empty( $block_id ) ) {
			$base_url .= '#' . $block_id;
		}
		
		$pagination_args = array(
			'base'         => $base_url,
			'total'        => $total_pages,
			'current'      => $current_page,
			'format'       => '',
			'show_all'     => false,
			'type'         => 'plain',
			'end_size'     => 2,
			'mid_size'     => 1,
			'prev_next'    => true,
			'prev_text'    => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c-9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"/></svg>',
			'next_text'    => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"/></svg>',
			'add_args'     => false,
			'add_fragment' => '',
		);
		
		ob_start();
		?>
		<div class="digiblocks-pagination">
			<?php echo $this->get_custom_paginate_links( $pagination_args, $block_type, $block_id ); ?>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Custom paginate links that handles page 1 properly (removes parameter completely)
	 *
	 * @param array  $args Pagination arguments.
	 * @param string $block_type Block type.
	 * @param string $block_id Block ID for anchor.
	 * @return string Pagination HTML.
	 */
	private function get_custom_paginate_links( $args, $block_type, $block_id = '' ) {
		// Get the standard pagination links
		$links = paginate_links( $args );
		
		if ( ! $links ) {
			return '';
		}
		
		// Clean up page 1 links to be completely clean (no parameters, no fragment)
		$clean_url = $this->get_clean_current_url();
		
		// Replace links to page 1 with completely clean URLs
		$links = preg_replace_callback(
			'/href=["\']([^"\']*' . preg_quote( $block_type, '/' ) . '=1[^"\']*)["\']/',
			function( $matches ) use ( $clean_url ) {
				return 'href="' . esc_url( $clean_url ) . '"';
			},
			$links
		);
		
		return $links;
	}

	/**
	 * Get clean current URL without pagination parameters
	 *
	 * @return string Clean URL.
	 */
	private function get_clean_current_url() {
		// Get current URL
		$current_url = home_url( add_query_arg( null, null ) );
		
		// Remove existing pagination parameters
		$current_url = remove_query_arg( 'paged', $current_url );
		$current_url = remove_query_arg( 'page', $current_url );
		
		// Remove block pagination parameters
		$current_url = remove_query_arg( 'posts', $current_url );
		$current_url = remove_query_arg( 'products', $current_url );
		$current_url = remove_query_arg( 'results', $current_url );
		$current_url = remove_query_arg( 'digiproducts', $current_url );
		
		// Remove any other potential block pagination parameters
		$parsed_url = parse_url( $current_url );
		if ( isset( $parsed_url['query'] ) ) {
			parse_str( $parsed_url['query'], $query_vars );
			
			// List of known block types that might have pagination
			$block_types = array( 'posts', 'products', 'results', 'digi-products', 'taxonomy' );
			
			foreach ( $block_types as $type ) {
				$current_url = remove_query_arg( $type, $current_url );
			}
		}
		
		return $current_url;
	}

	/**
	 * Check if current request is for block pagination
	 *
	 * @param string $block_type Block type to check for.
	 * @return bool True if current request is paginating this block type.
	 */
	public function is_block_paginated( $block_type ) {
		return isset( $_GET[ $block_type ] ) && absint( $_GET[ $block_type ] ) > 1;
	}

	/**
	 * Build pagination URL for a specific page
	 *
	 * @param string $block_type Block type.
	 * @param int    $page_number Page number.
	 * @param string $block_id Block ID for anchor (optional).
	 * @return string Pagination URL.
	 */
	public function build_pagination_url( $block_type, $page_number, $block_id = '' ) {
		$current_url = $this->get_clean_current_url();
		
		// For page 1, return completely clean URL (no parameters, no fragment)
		if ( $page_number <= 1 ) {
			return $current_url;
		}
		
		// For other pages, add the simple parameter and optionally the fragment
		$pagination_url = add_query_arg( $block_type, $page_number, $current_url );
		
		if ( ! empty( $block_id ) ) {
			$pagination_url .= '#' . $block_id;
		}
		
		return $pagination_url;
	}

	/**
	 * Get pagination parameter name for a block type
	 *
	 * @param string $block_type Block type.
	 * @return string Parameter name.
	 */
	public function get_pagination_param( $block_type ) {
		return $block_type;
	}
}