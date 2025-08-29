<?php
/**
 * DigiBlocks Plugin
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * DigiBlocks main class.
 *
 * @package DigiBlocks
 */
class DigiBlocks {
	/**
	 * Instance of the plugin.
	 *
	 * @var DigiBlocks
	 */
	private static $instance;

	/**
	 * Plugin name.
	 *
	 * @var string
	 */
	private $plugin_name = 'digiblocks';

	/**
	 * Active blocks.
	 *
	 * @var array
	 */
	private $active_blocks = array();

	/**
	 * Cache for reusable blocks during request
	 *
	 * @var array
	 */
	private static $reusable_block_cache = array();

	/**
	 * Cache for reusable block processing results
	 *
	 * @var array
	 */
	private static $reusable_processing_cache = array();

	/**
	 * Creates or returns an instance of this class.
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class constructor.
	 */
	private function __construct() {
		// Get blocks data.
		require_once DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-blocks-data.php';

		// Review notice
		require_once DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-review-notice.php';

		// Initialize schema markup
		require_once DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-schema-markup.php';

		// Plugin/theme install and activation handlers.
		require_once DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-install.php';

		// Activation hook.
		register_activation_hook( DIGIBLOCKS_PLUGIN_FILE, array( $this, 'plugin_activation' ) );

		// Register block category.
		add_filter( 'block_categories_all', array( $this, 'register_block_category' ), 9999999, 2 );

		// Register custom REST API routes.
		add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );

		// Enqueue assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ) );
		
		// Enqueue admin scripts.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );

		// Add admin menu.
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );

		// Setup file generation hooks.
		add_action( 'save_post', array( $this, 'generate_block_assets' ), 10, 3 );
		
		// Clear builder cache when builder posts are modified
		add_action( 'save_post', array( $this, 'clear_builder_cache_on_save' ), 11, 3 );
		add_action( 'delete_post', array( $this, 'clear_builder_cache_on_delete' ), 10, 1 );

		// Clear reusable block cache when reusable blocks are updated
		add_action( 'save_post', array( $this, 'clear_reusable_cache_on_save' ), 10, 3 );
		add_action( 'delete_post', array( $this, 'clear_reusable_cache_on_delete' ), 10, 1 );
		add_action( 'wp_trash_post', array( $this, 'clear_reusable_cache_on_delete' ), 10, 1 );
		add_action( 'untrash_post', array( $this, 'clear_reusable_cache_on_save' ), 10, 1 );
		
		// Allow DigiBlocks text block in excerpts
		add_filter( 'excerpt_allowed_blocks', array( $this, 'allow_digiblocks_in_excerpts' ) );

		// Enqueue block assets on frontend
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_block_assets' ) );

		// Clean up assets when post is permanently deleted
		add_action( 'deleted_post', array( $this, 'cleanup_block_assets' ) );

		// Initialize fonts manager
		$this->init_fonts_manager();

		// Initialize conditional handlers
		add_action( 'init', array( $this, 'init_conditional_handlers' ) );

		if ( wp_is_block_theme() ) {
			// Watch for template modifications
			add_action( 'wp_after_insert_post', array( $this, 'handle_template_modification' ), 10, 4 );
			add_action( 'delete_post', array( $this, 'handle_template_deletion' ), 10, 2 );
		}

		// Custom footer
		add_filter( 'admin_footer_text', array( $this, 'footer_text' ), 99 );
		add_filter( 'update_footer', array( $this, 'update_footer' ), 99 );
	}

	/**
	 * Clear builder cache when builder posts are saved
	 *
	 * @param int     $post_id Post ID.
	 * @param WP_Post $post Post object.
	 * @param bool    $update Whether this is an update.
	 */
	public function clear_builder_cache_on_save( $post_id, $post, $update ) {
		if ( $post->post_type === 'digi_builder' ) {
			delete_transient( 'digiblocks_active_builders' );
		}
	}

	/**
	 * Clear builder cache when builder posts are deleted
	 *
	 * @param int $post_id Post ID.
	 */
	public function clear_builder_cache_on_delete( $post_id ) {
		$post = get_post( $post_id );
		if ( $post && $post->post_type === 'digi_builder' ) {
			delete_transient( 'digiblocks_active_builders' );
		}
	}

	/**
	 * Get cached reusable block content
	 *
	 * @param int $reusable_block_id Reusable block ID
	 * @return array|false Parsed blocks or false if not found
	 */
	private function get_cached_reusable_block( $reusable_block_id ) {
		if ( isset( self::$reusable_block_cache[ $reusable_block_id ] ) ) {
			return self::$reusable_block_cache[ $reusable_block_id ];
		}

		$reusable_post = get_post( $reusable_block_id );
		if ( ! $reusable_post || ! $reusable_post->post_content ) {
			self::$reusable_block_cache[ $reusable_block_id ] = array();
			return array();
		}

		$reusable_blocks = parse_blocks( $reusable_post->post_content );
		self::$reusable_block_cache[ $reusable_block_id ] = $reusable_blocks;
		
		return $reusable_blocks;
	}

	/**
	 * Clear reusable block cache
	 *
	 * @param int|null $reusable_block_id Specific block ID to clear, or null to clear all
	 */
	private function clear_reusable_block_cache( $reusable_block_id = null ) {
		if ( null === $reusable_block_id ) {
			self::$reusable_block_cache = array();
			self::$reusable_processing_cache = array();
		} else {
			unset( self::$reusable_block_cache[ $reusable_block_id ] );
			// Clear processing cache entries that might contain this reusable block
			foreach ( self::$reusable_processing_cache as $key => $value ) {
				if ( strpos( $key, "reusable_{$reusable_block_id}_" ) !== false ) {
					unset( self::$reusable_processing_cache[ $key ] );
				}
			}
		}
	}
	
	/**
	 * Clear reusable block cache when reusable blocks are saved
	 *
	 * @param int     $post_id Post ID.
	 * @param WP_Post $post Post object.
	 * @param bool    $update Whether this is an update.
	 */
	public function clear_reusable_cache_on_save( $post_id, $post = null, $update = null ) {
		// Handle both save_post and untrash_post hooks
		if ( null === $post ) {
			$post = get_post( $post_id );
		}
		
		if ( ! $post || $post->post_type !== 'wp_block' ) {
			return;
		}

		// Clear cache for this specific reusable block
		$this->clear_reusable_block_cache( $post_id );
		
		// Regenerate assets for all posts that might use this reusable block
		$this->regenerate_assets_using_reusable_block( $post_id );
	}

	/**
	 * Clear reusable block cache when reusable blocks are deleted
	 *
	 * @param int $post_id Post ID.
	 */
	public function clear_reusable_cache_on_delete( $post_id ) {
		$post = get_post( $post_id );
		if ( ! $post || $post->post_type !== 'wp_block' ) {
			return;
		}

		// Clear cache for this specific reusable block
		$this->clear_reusable_block_cache( $post_id );
		
		// Regenerate assets for all posts that might use this reusable block
		$this->regenerate_assets_using_reusable_block( $post_id );
	}

	/**
	 * Regenerate assets for posts that use a specific reusable block
	 *
	 * @param int $reusable_block_id Reusable block ID
	 */
	private function regenerate_assets_using_reusable_block( $reusable_block_id ) {
		// Search for posts that reference this reusable block
		global $wpdb;
		
		$posts_with_reusable = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT ID, post_content FROM {$wpdb->posts} 
				WHERE post_status IN ('publish', 'private', 'draft') 
				AND post_content LIKE %s",
				'%<!-- wp:block {"ref":' . $reusable_block_id . '} /-->%'
			)
		);

		foreach ( $posts_with_reusable as $post_data ) {
			$post = get_post( $post_data->ID );
			if ( $post ) {
				// Regenerate assets for this post
				$this->generate_block_assets( $post->ID, $post, true );
			}
		}
	}

	/**
	 * Get cached processing result for reusable block
	 *
	 * @param int    $reusable_block_id Reusable block ID
	 * @param string $type Processing type (css/js/animation/specific_block)
	 * @param string $block_name Specific block name for specific_block type
	 * @return mixed|false Cached result or false if not found
	 */
	private function get_cached_reusable_processing( $reusable_block_id, $type, $block_name = '' ) {
		$cache_key = "reusable_{$reusable_block_id}_{$type}";
		if ( ! empty( $block_name ) ) {
			$cache_key .= "_{$block_name}";
		}
		
		return isset( self::$reusable_processing_cache[ $cache_key ] ) 
			? self::$reusable_processing_cache[ $cache_key ] 
			: false;
	}

	/**
	 * Set cached processing result for reusable block
	 *
	 * @param int    $reusable_block_id Reusable block ID
	 * @param string $type Processing type (css/js/animation/specific_block)
	 * @param mixed  $result Result to cache
	 * @param string $block_name Specific block name for specific_block type
	 */
	private function set_cached_reusable_processing( $reusable_block_id, $type, $result, $block_name = '' ) {
		$cache_key = "reusable_{$reusable_block_id}_{$type}";
		if ( ! empty( $block_name ) ) {
			$cache_key .= "_{$block_name}";
		}
		
		self::$reusable_processing_cache[ $cache_key ] = $result;
	}

	/**
	 * Allow DigiBlocks text block in excerpts
	 *
	 * @param array $allowed_blocks Array of allowed block types for excerpts
	 * @return array Modified array with DigiBlocks text block added
	 */
	public function allow_digiblocks_in_excerpts( $allowed_blocks ) {
		// Add our text block to the allowed blocks list
		$allowed_blocks[] = 'digiblocks/text';
		
		return $allowed_blocks;
	}

	/**
     * Initialize the fonts manager.
     */
    private function init_fonts_manager() {
        // Include the DigiBlocks_Fonts class
        require_once DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-fonts.php';
		$fonts_handler = DigiBlocks_Fonts::get_instance();
		$fonts_handler->init();
    }

	/**
	 * Plugin activation.
	 */
	public function plugin_activation() {
		// Create the digiblocks folder in wp-content/uploads if it doesn't exist.
		if ( ! file_exists( DIGIBLOCKS_ASSETS_DIR ) ) {
			wp_mkdir_p( DIGIBLOCKS_ASSETS_DIR );
		}

		// Create default plugin settings.
		$default_settings = array(
			'content_width'        => '1200',
			'content_max_width'    => '90',
			'recaptcha_site_key'   => '',
			'recaptcha_secret_key' => '',
			'google_maps_api_key'  => '',
			'google_maps_map_id'   => '',
			'google_fonts_local'   => false,
			'enable_schema_markup' => true,
			'image_api_provider'   => '',
		);

		// By default, no blocks are inactive
		$inactive_blocks = array();
    
		add_option( 'digiblocks_settings', $default_settings );
		add_option( 'digiblocks_inactive_blocks', $inactive_blocks );

		// Set transient to redirect to the dashboard on activation.
		set_transient( 'digiblocks_activation_redirect', true, 30 );
	}

	/**
	 * Register block category.
	 *
	 * @param array   $categories Block categories.
	 * @param WP_Post $post Current post object.
	 * @return array Modified block categories.
	 */
	public function register_block_category( $categories, $post ) { // phpcs:ignore
		$new_categories = array(
			array(
				'slug'  => 'digiblocks',
				'title' => esc_html__( 'DigiBlocks', 'digiblocks' ),
				'icon'  => $this->get_category_icon(),
			),
		);

		// Add DigiCommerce category if DigiCommerce exists
		if ( class_exists( 'DigiCommerce' ) ) {
			$new_categories[] = array(
				'slug'  => 'digiblocks-digicommerce',
				'title' => esc_html__( 'DigiBlocks DigiCommerce', 'digiblocks' ),
				'icon'  => $this->get_category_icon(),
			);
		}

		// Add WooCommerce category if WooCommerce exists
		if ( class_exists( 'WooCommerce' ) ) {
			$new_categories[] = array(
				'slug'  => 'digiblocks-woocommerce',
				'title' => esc_html__( 'DigiBlocks WooCommerce', 'digiblocks' ),
				'icon'  => $this->get_category_icon(),
			);
		}

		// Add theme category
		$new_categories[] = array(
			'slug'  => 'digiblocks-theme',
			'title' => esc_html__( 'DigiBlocks Theme', 'digiblocks' ),
			'icon'  => $this->get_category_icon(),
		);

		return array_merge( $new_categories, $categories );
	}

	/**
	 * Get category icon.
	 *
	 * @return string SVG icon.
	 */
	private function get_category_icon() {
		return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/></svg>';
	}

	/**
	 * Get list of all blocks available in the plugin.
	 *
	 * @return array List of blocks.
	 */
	public function get_blocks_list() {
		$blocks      = array();
		$blocks_data = DigiBlocks_Blocks_Data::get_block_data();

		// Convert blocks data to the format expected by the dashboard
		foreach ($blocks_data as $block_name => $block_data) {
			// Generate SVG icon
			$icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' . $block_data['icon']['viewbox'] . '"><path d="' . $block_data['icon']['path'] . '"/></svg>';

			$blocks[] = array(
				'name'        => $block_name,
				'title'       => $block_data['title'],
				'description' => $block_data['description'],
				'icon'        => $icon,
			);
		}

		return $blocks;
	}

	/**
	 * Get plugin logo.
	 *
	 * @return string SVG icon.
	 */
	private function get_plugin_logo() {
		return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1764 350" width="200" height="40"><g><path d="M425.6331,249.9932V108.5933h69.6904c15.7559,0,29.624,2.8628,41.6123,8.585,11.9844,5.7256,21.3418,13.8369,28.0771,24.3408,6.7324,10.5039,10.1006,23.0283,10.1006,37.5728,0,14.6797-3.3682,27.3047-10.1006,37.875-6.7354,10.5732-16.0928,18.7197-28.0771,24.4414-11.9883,5.7256-25.8564,8.585-41.6123,8.585h-69.6904ZM473.305,212.8252h19.998c6.7324,0,12.625-1.2783,17.6758-3.8379,5.0498-2.5566,8.9883-6.3633,11.8164-11.4131s4.2422-11.2109,4.2422-18.4824c0-7.1367-1.4141-13.1968-4.2422-18.1807-2.8281-4.9805-6.7666-8.7524-11.8164-11.312-5.0508-2.5566-10.9434-3.8379-17.6758-3.8379h-19.998v67.064Z" fill="#16204c"/><path d="M592.4827,249.9932V108.5933h47.6719v141.3999h-47.6719Z" fill="#16204c"/><path d="M736.5071,253.2256c-11.4473,0-21.9863-1.7861-31.6133-5.3535-9.6289-3.5664-17.9775-8.6514-25.0479-15.251-7.0693-6.5967-12.5586-14.4082-16.4629-23.4316-3.9072-9.0205-5.8574-18.9883-5.8574-29.8965s1.9502-20.8721,5.8574-29.896c3.9043-9.0205,9.4248-16.832,16.5645-23.4316,7.1357-6.5967,15.585-11.6816,25.3506-15.251,9.7627-3.5669,20.5029-5.353,32.2188-5.353,14.0049,0,26.4941,2.3574,37.4717,7.0698,10.9736,4.7153,20.0293,11.4478,27.1689,20.2002l-30.502,26.8657c-4.4443-5.1162-9.2607-8.9888-14.4434-11.6147-5.1855-2.626-10.9424-3.939-17.2705-3.939-5.252,0-9.999.8076-14.2412,2.4238s-7.8467,3.9736-10.8076,7.0698c-2.9629,3.0996-5.252,6.8018-6.8672,11.1104-1.6162,4.311-2.4248,9.2256-2.4248,14.7456,0,5.252.8086,10.0693,2.4248,14.4434,1.6152,4.3779,3.9043,8.1152,6.8672,11.2109,2.9609,3.0996,6.4961,5.4893,10.6055,7.1709,4.1064,1.6855,8.7178,2.5254,13.8369,2.5254,5.3848,0,10.6367-.9092,15.7559-2.7275,5.1162-1.8174,10.5703-4.9482,16.3623-9.3926l26.6641,32.7236c-8.6201,5.792-18.4512,10.2363-29.4922,13.332-11.0439,3.0967-21.75,4.6465-32.1182,4.6465ZM756.7073,229.1875v-53.7324h41.4102v59.792l-41.4102-6.0596Z" fill="#16204c"/><path d="M818.5188,249.9932V108.5933h47.6719v141.3999h-47.6719Z" fill="#16204c"/><path d="M889.2161,249.9932V108.5933h75.5479c19.5254,0,33.9365,3.4688,43.2285,10.4028,9.292,6.9375,13.9375,15.791,13.9375,26.563,0,7.1396-1.9883,13.5024-5.959,19.0889-3.9736,5.5898-9.7305,9.999-17.2705,13.2319-7.5439,3.2314-16.8359,4.8477-27.876,4.8477l4.04-10.9082c11.04,0,20.5693,1.5493,28.583,4.6465,8.0107,3.0986,14.2061,7.5742,18.584,13.4326,4.374,5.8584,6.5645,12.8965,6.5645,21.1094,0,12.2549-5.084,21.8154-15.251,28.6836-10.1689,6.8682-25.0156,10.3018-44.541,10.3018h-79.5879ZM936.0803,216.6631h28.6836c5.2529,0,9.1914-.9404,11.8174-2.8281,2.626-1.8838,3.9395-4.6455,3.9395-8.2812s-1.3135-6.3945-3.9395-8.2822c-2.626-1.8848-6.5645-2.8281-11.8174-2.8281h-31.915v-31.5122h25.4512c5.3848,0,9.3242-.9092,11.8174-2.7271,2.4902-1.8179,3.7373-4.4092,3.7373-7.7769,0-3.5005-1.2471-6.1265-3.7373-7.8779-2.4932-1.7485-6.4326-2.626-11.8174-2.626h-22.2197v74.7397Z" fill="#16204c"/><path d="M1045.3616,249.9932V108.5933h47.6719v104.4341h63.832v36.9658h-111.5039Z" fill="#16204c"/><path d="M1242.3098,253.2256c-11.583,0-22.2539-1.8184-32.0166-5.4541-9.7656-3.6357-18.2148-8.7871-25.3506-15.4531-7.1396-6.666-12.6953-14.5088-16.665-23.5332-3.9736-9.0205-5.959-18.8516-5.959-29.4922,0-10.772,1.9854-20.6353,5.959-29.5928,3.9697-8.9541,9.5254-16.7661,16.665-23.4321,7.1357-6.666,15.585-11.8169,25.3506-15.4531,9.7627-3.6357,20.3672-5.4536,31.8154-5.4536,11.5801,0,22.2197,1.8179,31.916,5.4536,9.6953,3.6362,18.1104,8.7871,25.25,15.4531,7.1357,6.666,12.6904,14.478,16.6641,23.4321,3.9707,8.9575,5.96,18.8208,5.96,29.5928,0,10.6406-1.9893,20.4717-5.96,29.4922-3.9736,9.0244-9.5283,16.8672-16.6641,23.5332-7.1396,6.666-15.5547,11.8174-25.25,15.4531-9.6963,3.6357-20.2695,5.4541-31.7148,5.4541ZM1242.1087,214.6436c4.4434,0,8.585-.8086,12.4229-2.4238,3.8379-1.6162,7.2021-3.9395,10.0996-6.9697,2.8945-3.0293,5.1514-6.7314,6.7676-11.1094,1.6152-4.375,2.4238-9.3242,2.4238-14.8477,0-5.52-.8086-10.4692-2.4238-14.8467-1.6162-4.3745-3.873-8.0801-6.7676-11.1104-2.8975-3.0298-6.2617-5.3525-10.0996-6.9688s-7.9795-2.4238-12.4229-2.4238-8.585.8076-12.4238,2.4238c-3.8379,1.6162-7.2051,3.939-10.0996,6.9688-2.8975,3.0303-5.1514,6.7358-6.7666,11.1104-1.6162,4.3774-2.4248,9.3267-2.4248,14.8467,0,5.5234.8086,10.4727,2.4248,14.8477,1.6152,4.3779,3.8691,8.0801,6.7666,11.1094,2.8945,3.0303,6.2617,5.3535,10.0996,6.9697,3.8389,1.6152,7.9795,2.4238,12.4238,2.4238Z" fill="#16204c"/><path d="M1412.3928,253.2256c-11.3115,0-21.7842-1.7861-31.4111-5.3535-9.6289-3.5664-17.9775-8.6514-25.0479-15.251-7.0693-6.5967-12.5586-14.4082-16.4629-23.4316-3.9072-9.0205-5.8574-18.9883-5.8574-29.8965s1.9502-20.8721,5.8574-29.896c3.9043-9.0205,9.3936-16.832,16.4629-23.4316,7.0703-6.5967,15.4189-11.6816,25.0479-15.251,9.627-3.5669,20.0996-5.353,31.4111-5.353,13.8691,0,26.1592,2.4238,36.8652,7.272,10.7061,4.8477,19.5596,11.8516,26.5635,21.0078l-30.0986,26.8662c-4.1758-5.252-8.7871-9.3237-13.8369-12.2212-5.0498-2.894-10.7402-4.3428-17.0693-4.3428-4.9834,0-9.4932.8076-13.5332,2.4238s-7.5088,3.9736-10.4033,7.0698c-2.8975,3.0996-5.1514,6.8364-6.7666,11.2109-1.6162,4.3779-2.4248,9.2607-2.4248,14.645,0,5.3877.8086,10.2705,2.4248,14.6455,1.6152,4.3779,3.8691,8.1143,6.7666,11.2109,2.8945,3.0996,6.3633,5.4541,10.4033,7.0703,4.04,1.6152,8.5498,2.4238,13.5332,2.4238,6.3291,0,12.0195-1.4453,17.0693-4.3428,5.0498-2.8945,9.6611-6.9697,13.8369-12.2217l30.0986,26.8662c-7.0039,9.0234-15.8574,15.9932-26.5635,20.9072s-22.9961,7.373-36.8652,7.373Z" fill="#16204c"/><path d="M1489.554,249.9932V108.5933h46.8643v141.3999h-46.8643ZM1532.176,219.6934l-2.626-52.3184,53.3281-58.7817h51.9141l-59.792,65.8521-26.4619,27.0684-16.3623,18.1797ZM1582.4739,249.9932l-41.6113-54.9434,30.9053-32.7246,65.8525,87.668h-55.1465Z" fill="#16204c"/><path d="M1693.7766,253.2256c-11.8516,0-23.2998-1.3477-34.3398-4.04-11.0439-2.6924-20.1338-6.1924-27.2705-10.5039l15.3516-34.7441c6.7324,3.9072,14.2412,7.0381,22.5234,9.3926,8.2822,2.3584,16.3271,3.5352,24.1387,3.5352,4.5771,0,8.1816-.3027,10.8076-.9092,2.626-.6055,4.5449-1.4795,5.7568-2.626,1.2119-1.1426,1.8184-2.5244,1.8184-4.1406,0-2.5566-1.4141-4.5762-4.2422-6.0596-2.8281-1.4805-6.5654-2.7275-11.2109-3.7373-4.6465-1.0098-9.7314-2.0869-15.251-3.2324-5.5234-1.1426-11.0791-2.6572-16.665-4.5449-5.5898-1.8838-10.7061-4.374-15.3525-7.4736-4.6455-3.0967-8.3828-7.1709-11.2109-12.2217-2.8281-5.0498-4.2422-11.3433-4.2422-18.8867,0-8.7524,2.4561-16.7314,7.373-23.937,4.915-7.2026,12.2529-12.9595,22.0186-17.271,9.7617-4.3081,21.917-6.4639,36.4609-6.4639,9.5605,0,18.9883,1.0098,28.2803,3.0298s17.6396,5.1196,25.0479,9.292l-14.3428,34.542c-7.0029-3.5-13.7705-6.1265-20.3008-7.8779-6.5332-1.7485-12.8965-2.626-19.0889-2.626-4.5801,0-8.2158.4038-10.9082,1.2119-2.6953.8081-4.6143,1.8877-5.7568,3.2319-1.1455,1.3477-1.7168,2.8281-1.7168,4.4443,0,2.4238,1.4141,4.3428,4.2422,5.7568s6.5645,2.5942,11.2109,3.5352c4.6455.9434,9.7617,1.9536,15.3516,3.0298,5.5869,1.0796,11.1416,2.5596,16.665,4.4438,5.5205,1.8877,10.6055,4.3779,15.251,7.4741,4.6465,3.1001,8.3828,7.1401,11.2109,12.1206,2.8281,4.9834,4.2422,11.1787,4.2422,18.584,0,8.6191-2.459,16.5322-7.373,23.7344-4.917,7.2061-12.2207,12.998-21.917,17.3721-9.6963,4.375-21.8857,6.5654-36.5615,6.5654Z" fill="#16204c"/></g><g><circle cx="174.9319" cy="175" r="175" fill="#526bfe"/><g><path d="M176.5325,87.2646l-37.3028,20.1121c16.9844,9.3171,8.0137,4.3968,37.3001,20.4585l37.3054-20.4585-37.3028-20.1121Z" fill="#fff"/><path d="M135.1554,156.9631l-37.3028,20.1095c16.5799,9.0977,7.9343,4.3545,37.3001,20.4585l37.1732-20.3871c-11.9636-6.6336-4.5026-2.5699-37.1706-20.1809Z" fill="#fff"/><path d="M137.0908,243.6539l37.4931-20.7837v-42.5271l-37.4931,20.5616v42.7492Z" fill="#fff"/><path d="M217.9016,156.9631c-32.7976,17.6797-25.4396,13.6769-37.1732,20.1809,14.7768,8.1088,7.1015,3.8997,37.1706,20.3898l37.3054-20.4585-37.3028-20.1122Z" fill="#fff"/><path d="M215.9583,153.1718v-42.5271l-37.4931,20.5616v42.6012c12.2465-6.5992,4.7352-2.4773,37.4931-20.6356Z" fill="#fff"/><path d="M178.4757,180.3431v42.5271l37.4746,20.7837v-42.7519c-31.7664-17.4286-24.0119-13.1745-37.4746-20.559Z" fill="#fff"/><path d="M174.5813,173.8021v-42.5985c-30.2489-16.5958-22.5022-12.347-37.4746-20.559v42.5271c32.5015,18.0261,24.9637,13.8858,37.4746,20.6303Z" fill="#fff"/><path d="M219.8342,243.6539l37.4931-20.7837v-42.5271l-37.4931,20.5616v42.7492Z" fill="#fff"/><path d="M95.7296,180.3431v42.5271l37.4746,20.7837v-42.7519c-29.9792-16.4503-22.2246-12.1937-37.4746-20.559Z" fill="#fff"/></g></g></svg>';
	}

	/**
	 * Get promotional content for admin sidebar.
	 *
	 * @return string HTML content.
	 */
	public function get_promo_content() {
		ob_start();
		$install = DigiBlocks_Install::get_instance();

		// Check if DigiBlocks Pro is active
		$is_pro_active = defined( 'DIGIBLOCKS_PRO_VERSION' ) || class_exists( 'DigiBlocks_Pro' );
		
		if ( ! $is_pro_active ) : ?>
			<!-- DigiBlocks Pro Promotion -->
			<div class="digiblocks-admin-section">
				<div class="digiblocks-section-header">
					<h2 class="has-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52"><path fill="#EBF0F3" d="M488.179,16.371c0.153,1.619,0.29,3.389,0.404,5.288C488.468,19.76,488.334,17.99,488.179,16.371z"></path><path fill="#EBF0F3" d="M487.158,8.204c0.332,2.068,0.701,4.784,1.016,8.103C487.856,12.987,487.491,10.266,487.158,8.204z"></path><path fill="#EBF0F3" d="M486.392,4.091c0.065,0.296,0.153,0.725,0.252,1.225C486.542,4.8,486.458,4.39,486.392,4.091z"></path><path fill="#EBF0F3" d="M486.725,5.738c0.124,0.649,0.261,1.419,0.41,2.333C486.985,7.154,486.85,6.385,486.725,5.738z"></path><path fill="#EBF0F3" d="M486.239,3.419c0,0,0.047,0.201,0.104,0.448C486.279,3.59,486.239,3.419,486.239,3.419z"></path><path fill="#E56353" d="M487.135,8.071c0.008,0.047,0.015,0.085,0.023,0.133C487.15,8.154,487.143,8.12,487.135,8.071z"></path><path fill="#E56353" d="M486.644,5.317c0.026,0.131,0.054,0.276,0.081,0.421C486.695,5.578,486.671,5.46,486.644,5.317z"></path><path fill="#E56353" d="M486.343,3.866c0.012,0.055,0.033,0.157,0.049,0.225C486.369,3.992,486.36,3.942,486.343,3.866z"></path><path fill="#E56353" d="M488.583,21.659c0.006,0.08,0.01,0.157,0.015,0.237C488.594,21.816,488.589,21.739,488.583,21.659z"></path><path fill="#E56353" d="M488.173,16.306c0.002,0.02,0.005,0.044,0.006,0.064C488.177,16.349,488.175,16.327,488.173,16.306z"></path><path fill="#E56353" d="M13.653,281.926c53.632-53.632,140.587-53.632,194.219,0s53.633,140.588,0.001,194.22 c-3.433,3.433-7.011,6.631-10.699,9.625c27.233-6.744,53.069-20.576,74.354-41.861c62.309-62.309,62.31-163.331,0-225.641 c-62.308-62.308-163.331-62.309-225.641,0c-21.285,21.285-35.118,47.122-41.861,74.356C7.021,288.937,10.22,285.359,13.653,281.926 z"></path><path fill="#EBF0F3" d="M486.239,3.419c0,0-113.308-33.293-254.515,107.913c-59.636,59.636-109.74,131.207-127.614,182.576 l91.641,91.641c51.367-17.874,122.94-67.978,182.576-127.614C515.869,120.392,486.239,3.419,486.239,3.419z"></path><path fill="#EBF0F3" d="M482.97,82.981c-0.804,3.543-1.709,7.18-2.723,10.906C481.262,90.159,482.167,86.525,482.97,82.981z"></path><path fill="#EBF0F3" d="M483.091,82.46c5.834-25.975,6.331-46.816,5.508-60.564 C489.409,35.653,488.926,56.507,483.091,82.46z"></path><path fill="#EBF0F3" d="M480.121,94.359c-2.142,7.816-4.765,16.017-7.97,24.567 C475.358,110.373,477.98,102.179,480.121,94.359z"></path><path fill="#E56353" d="M486.239,3.419c0,0-46.167-13.482-116.236,13.383l84.144,84.144 C487.639,39.663,486.239,3.419,486.239,3.419z"></path><path fill="#E56353" d="M480.248,93.887c-0.043,0.159-0.083,0.314-0.126,0.473 C480.165,94.201,480.205,94.046,480.248,93.887z"></path><path fill="#E56353" d="M483.091,82.46c-0.039,0.172-0.081,0.347-0.12,0.52C483.01,82.807,483.051,82.633,483.091,82.46z"></path><path fill="#E56353" d="M472.145,118.943l0.004-0.012L472.145,118.943z"></path><path fill="#D15241" d="M472.151,118.926c3.205-8.549,5.828-16.751,7.97-24.567c0.044-0.158,0.084-0.313,0.126-0.473 c1.013-3.726,1.919-7.363,2.723-10.906c0.04-0.173,0.081-0.348,0.12-0.52c5.835-25.954,6.318-46.808,5.508-60.564 c-0.006-0.08-0.01-0.157-0.015-0.237c-0.114-1.899-0.251-3.669-0.404-5.288c-0.001-0.021-0.004-0.044-0.006-0.064 c-0.315-3.319-0.684-6.035-1.016-8.103c-0.008-0.048-0.014-0.086-0.023-0.133c-0.149-0.914-0.286-1.684-0.41-2.333 c-0.027-0.145-0.055-0.289-0.081-0.421c-0.099-0.501-0.188-0.929-0.252-1.225c-0.016-0.068-0.038-0.17-0.049-0.225 c-0.057-0.247-0.104-0.448-0.104-0.448s1.4,36.244-32.092,97.526l17.998,17.998C472.145,118.943,472.149,118.932,472.151,118.926z"></path><g transform="matrix(0.70711 -0.70711 0.70711 0.70711 1.699 59.07)"><ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 130.8527 660.7466)" fill="#E56353" cx="202.271" cy="303.273" rx="43.044" ry="43.044"></ellipse><ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 130.8527 660.7466)" fill="#27A2DB" cx="202.271" cy="303.273" rx="35.077" ry="35.077"></ellipse></g><path fill="#2D93BA" d="M336.486,112.003c12.534-12.534,32.856-12.533,45.389,0c12.173,12.173,12.419,31.631,0.949,44.228 c0.373-0.342,0.799-0.588,1.16-0.949c13.699-13.699,13.7-35.91,0.001-49.609c-13.699-13.699-35.91-13.699-49.609,0.001 c-13.699,13.699-13.7,35.909,0,49.609c0.362,0.362,0.789,0.607,1.161,0.948C324.067,143.634,324.314,124.176,336.486,112.003z"></path><path fill="#E1E6E9" d="M224.138,333.235l26.013,26.013c-3.119,1.848-6.194,3.597-9.256,5.311l-26.013-26.013 c-16.08,9.006-31.354,16.191-45.145,20.989l26.013,26.013c20.727-7.212,44.764-19.739,69.959-35.955l-26.013-26.013 C234.456,326.953,229.257,330.201,224.138,333.235z"></path><path fill="#E1E6E9" d="M265.75,349.568c37.233-23.97,77.016-56.073,112.576-91.633 c50.755-50.755,78.703-98.683,93.819-138.992l-17.998-17.998c-19.586,35.838-51.079,80.222-101.834,130.977 c-32.781,32.781-69.159,62.642-103.816,85.892l26.013,26.013C271.572,345.798,268.658,347.696,265.75,349.568z"></path><polygon fill="#FCD462" points="265.75,349.568 265.709,349.594 265.709,349.594 	"></polygon><path fill="#FCD462" d="M145.83,215.148c-1.979,2.951-3.886,5.879-5.766,8.801l99.632,99.632 c2.922-1.881,5.85-3.787,8.801-5.767L145.83,215.148z"></path><path fill="#F6C358" d="M274.51,343.827l-26.013-26.013c-2.951,1.98-5.879,3.886-8.801,5.767l26.013,26.013 c0.012-0.009,0.027-0.018,0.041-0.026C268.658,347.696,271.572,345.798,274.51,343.827z"></path><path fill="#FCD462" d="M130.409,239.506c-1.848,3.119-3.597,6.194-5.311,9.256l89.785,89.785 c3.062-1.714,6.137-3.463,9.256-5.311L130.409,239.506z"></path><path fill="#F6C358" d="M250.151,359.249l-26.013-26.013c-3.119,1.848-6.194,3.597-9.256,5.311l26.013,26.013 C243.958,362.846,247.033,361.097,250.151,359.249z"></path><polyline fill="#64798A" points="104.109,293.908 78.868,303.978 185.737,410.847 195.808,385.606 "></polyline><path fill="#E56353" d="M147.208,416.133c-10.9,30.999-46.238,40.056-46.238,40.056c8.208-13.205,2.855-34.261,2.855-34.261 c-38.9,43.896-68.69,32.664-68.69,32.664c-6.593-28.006,41.21-65.14,41.21-65.14c-12.848,3.569-26.766-3.926-26.766-3.926 c10.587-34.409,33.736-32.932,37.058-32.533c-5.365-0.696-61.483-6.789-71.675,41.455c0,0,18.558,8.565,36.759,5.353 c0,0-57.101,42.112-48.179,87.436c0,0,37.829,9.279,89.577-46.038c0,0-32.476,40.328-32.476,50.32 C60.642,491.52,133.056,478.632,147.208,416.133z"></path><path fill="#FCD462" d="M147.208,416.133c3.127-8.891,4.247-19.584,1.941-32.391 C150.193,395.8,149.379,406.544,147.208,416.133z"></path><path fill="#FCD462" d="M86.636,352.994c0.271,0.035,0.415,0.057,0.415,0.057S86.898,353.025,86.636,352.994z"></path><path fill="#FCD462" d="M49.579,385.526c0,0,13.918,7.495,26.766,3.926c0,0-47.803,37.134-41.21,65.14 c0,0,29.79,11.232,68.69-32.664c0,0,5.353,21.056-2.855,34.261c0,0,35.339-9.057,46.238-40.056 c2.171-9.589,2.985-20.334,1.941-32.391c-10.349,28.194-29.978,41.398-29.978,41.398c11.063-29.621,3.212-36.759,3.212-36.759 c-21.77,33.904-44.37,27.72-44.37,27.72c-0.117-19.388,25.455-39.497,25.455-39.497c-4.996,3.569-29.978,0.714-29.978,0.714 c0.714-14.989,13.561-24.268,13.561-24.268s-0.144-0.021-0.415-0.057C83.314,352.595,60.166,351.117,49.579,385.526z"></path><ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 131.4223 638.2308)" fill="#E56353" cx="197.893" cy="291.897" rx="11.541" ry="121.872"></ellipse><path fill="#D15241" d="M195.496,289.501c36.872-36.872,70.442-66.048,85.832-75.269c2.681-4.476,3.761-7.492,2.745-8.508 c-4.507-4.507-46.744,30.421-94.338,78.015c-47.594,47.594-82.523,89.83-78.015,94.338c1.016,1.016,4.032-0.064,8.508-2.745 C129.449,359.943,158.625,326.372,195.496,289.501z"></path></svg>
						<span><?php esc_html_e( 'Want More Features?', 'digiblocks-pro' ); ?></span>
					</h2>
					<p><?php esc_html_e( 'Unlock the full potential of DigiBlocks', 'digiblocks-pro' ); ?></p>
				</div>
				
				<div class="digiblocks-promo-container">
					<div class="digiblocks-promo-card">
						<div class="digiblocks-promo-content">
							<p style="margin: 0 0 1rem;"><?php esc_html_e( 'DigiBlocks Pro supercharges your website with powerful blocks designed specifically for WooCommerce and DigiCommerce. Build stunning product pages, shopping carts, and complete e-commerce experiences with ease. Plus, we\'re constantly adding new blocks and features to keep your site ahead of the curve.', 'digiblocks-pro' ); ?></p>
							<div class="digiblocks-link-wrapper">
								<a href="https://digihold.click/digiblocks-pro" target="_blank" rel="noopener noreferrer" class="digiblocks-button digiblocks-pro-button">
									<span><?php esc_html_e( 'Get DigiBlocks Pro', 'digiblocks-pro' ); ?></span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z"/></svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		<?php endif; ?>

		<!-- DigiCommerce Promo -->
		<div class="digiblocks-admin-section digiblocks-promo-section">
			<div class="digiblocks-section-header">
				<h2><?php esc_html_e( 'Grow Your Business', 'digiblocks' ); ?></h2>
			</div>

			<div class="digiblocks-promo-container">
				<div class="digiblocks-promo-product">
					<div class="digiblocks-promo-logo">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2148.09 350" width="200" height="33"><g><path d="M425.4756,249.9932V108.5933h69.6904c15.7559,0,29.624,2.8628,41.6123,8.585,11.9844,5.7256,21.3418,13.8369,28.0771,24.3408,6.7324,10.5039,10.1006,23.0283,10.1006,37.5718,0,14.6797-3.3682,27.3047-10.1006,37.875-6.7354,10.5732-16.0928,18.7197-28.0771,24.4424-11.9883,5.7256-25.8564,8.585-41.6123,8.585h-69.6904ZM473.1475,212.8252h19.998c6.7324,0,12.625-1.2783,17.6758-3.8379,5.0498-2.5566,8.9883-6.3633,11.8164-11.4131,2.8281-5.0508,4.2422-11.2109,4.2422-18.4834,0-7.1357-1.4141-13.1958-4.2422-18.1797-2.8281-4.9805-6.7666-8.7524-11.8164-11.312-5.0508-2.5566-10.9434-3.8379-17.6758-3.8379h-19.998v67.064Z" fill="#09053a"/><path d="M592.3252,249.9932V108.5933h47.6719v141.3999h-47.6719Z" fill="#09053a"/><path d="M736.3496,253.2246c-11.4473,0-21.9863-1.7861-31.6133-5.3525-9.6289-3.5664-17.9775-8.6514-25.0479-15.251-7.0693-6.5967-12.5586-14.4082-16.4629-23.4326-3.9072-9.0205-5.8574-18.9873-5.8574-29.8955s1.9502-20.8721,5.8574-29.896c3.9043-9.0205,9.4248-16.832,16.5645-23.4316,7.1357-6.5967,15.585-11.6816,25.3506-15.251,9.7627-3.5669,20.5029-5.353,32.2188-5.353,14.0049,0,26.4941,2.3574,37.4717,7.0698,10.9736,4.7153,20.0293,11.4478,27.1689,20.2002l-30.502,26.8657c-4.4443-5.1162-9.2607-8.9888-14.4434-11.6147-5.1855-2.626-10.9424-3.939-17.2705-3.939-5.252,0-9.999.8076-14.2412,2.4238s-7.8467,3.9736-10.8076,7.0698c-2.9629,3.0996-5.252,6.8018-6.8672,11.1104-1.6162,4.311-2.4248,9.2256-2.4248,14.7456,0,5.252.8086,10.0684,2.4248,14.4434,1.6152,4.377,3.9043,8.1143,6.8672,11.2109,2.9609,3.0986,6.4961,5.4883,10.6055,7.1709,4.1064,1.6855,8.7178,2.5244,13.8369,2.5244,5.3848,0,10.6367-.9082,15.7559-2.7266,5.1162-1.8184,10.5703-4.9492,16.3623-9.3936l26.6641,32.7246c-8.6201,5.792-18.4512,10.2354-29.4922,13.332-11.0439,3.0957-21.75,4.6455-32.1182,4.6455ZM756.5498,229.1865v-53.7314h41.4102v59.792l-41.4102-6.0605Z" fill="#09053a"/><path d="M818.3613,249.9932V108.5933h47.6719v141.3999h-47.6719Z" fill="#09053a"/><path d="M962.1826,253.2246c-11.3115,0-21.7842-1.7861-31.4111-5.3525-9.6289-3.5664-17.9775-8.6514-25.0479-15.251-7.0693-6.5967-12.5586-14.4082-16.4629-23.4326-3.9072-9.0205-5.8574-18.9873-5.8574-29.8955s1.9502-20.8721,5.8574-29.896c3.9043-9.0205,9.3936-16.832,16.4629-23.4316,7.0703-6.5967,15.4189-11.6816,25.0479-15.251,9.627-3.5669,20.0996-5.353,31.4111-5.353,13.8691,0,26.1592,2.4238,36.8652,7.272,10.7061,4.8477,19.5596,11.8516,26.5635,21.0078l-30.0986,26.8662c-4.1758-5.252-8.7871-9.3237-13.8369-12.2212-5.0498-2.894-10.7402-4.3428-17.0693-4.3428-4.9834,0-9.4932.8076-13.5332,2.4238s-7.5088,3.9736-10.4033,7.0698c-2.8975,3.0996-5.1514,6.8364-6.7666,11.2109-1.6162,4.3779-2.4248,9.2607-2.4248,14.645,0,5.3877.8086,10.2705,2.4248,14.6445,1.6152,4.3779,3.8691,8.1152,6.7666,11.2109,2.8945,3.0996,6.3633,5.4541,10.4033,7.0703s8.5498,2.4238,13.5332,2.4238c6.3291,0,12.0195-1.4453,17.0693-4.3428,5.0498-2.8945,9.6611-6.9688,13.8369-12.2207l30.0986,26.8662c-7.0039,9.0234-15.8574,15.9922-26.5635,20.9062-10.7061,4.915-22.9961,7.373-36.8652,7.373Z" fill="#09053a"/><path d="M1110.6504,253.2246c-11.583,0-22.2539-1.8174-32.0166-5.4541-9.7656-3.6357-18.2148-8.7861-25.3506-15.4521-7.1396-6.666-12.6953-14.5098-16.665-23.5332-3.9736-9.0205-5.959-18.8525-5.959-29.4922,0-10.772,1.9854-20.6353,5.959-29.5928,3.9697-8.9541,9.5254-16.7661,16.665-23.4321,7.1357-6.666,15.585-11.8169,25.3506-15.4531,9.7627-3.6357,20.3672-5.4536,31.8154-5.4536,11.5801,0,22.2197,1.8179,31.916,5.4536,9.6953,3.6362,18.1104,8.7871,25.25,15.4531,7.1357,6.666,12.6904,14.478,16.6641,23.4321,3.9707,8.9575,5.96,18.8208,5.96,29.5928,0,10.6396-1.9893,20.4717-5.96,29.4922-3.9736,9.0234-9.5283,16.8672-16.6641,23.5332-7.1396,6.666-15.5547,11.8164-25.25,15.4521-9.6963,3.6367-20.2695,5.4541-31.7148,5.4541ZM1110.4492,214.6426c4.4434,0,8.585-.8076,12.4229-2.4238s7.2021-3.9385,10.0996-6.9688c2.8945-3.0303,5.1514-6.7324,6.7676-11.1104,1.6152-4.374,2.4238-9.3232,2.4238-14.8467,0-5.52-.8086-10.4692-2.4238-14.8467-1.6162-4.3745-3.873-8.0801-6.7676-11.1104-2.8975-3.0298-6.2617-5.3525-10.0996-6.9688s-7.9795-2.4238-12.4229-2.4238-8.585.8076-12.4238,2.4238c-3.8379,1.6162-7.2051,3.939-10.0996,6.9688-2.8975,3.0303-5.1514,6.7358-6.7666,11.1104-1.6162,4.3774-2.4248,9.3267-2.4248,14.8467,0,5.5234.8086,10.4727,2.4248,14.8467,1.6152,4.3779,3.8691,8.0801,6.7666,11.1104,2.8945,3.0303,6.2617,5.3525,10.0996,6.9688,3.8389,1.6162,7.9795,2.4238,12.4238,2.4238Z" fill="#09053a"/><path d="M1207.6094,249.9932V108.5933h39.1885l56.5596,92.314h-20.6035l54.9434-92.314h39.1885l.4043,141.3999h-43.4307l-.4033-75.9521h6.8672l-37.5713,63.2256h-21.0078l-39.1885-63.2256h8.4844v75.9521h-43.4307Z" fill="#09053a"/><path d="M1400.3164,249.9932V108.5933h39.1885l56.5596,92.314h-20.6035l54.9434-92.314h39.1885l.4043,141.3999h-43.4307l-.4033-75.9521h6.8672l-37.5713,63.2256h-21.0078l-39.1885-63.2256h8.4844v75.9521h-43.4307Z" fill="#09053a"/><path d="M1639.8877,214.0371h70.7002v35.9561h-117.5645V108.5933h114.9385v35.9561h-68.0742v69.4878ZM1636.6562,161.1133h63.0234v34.3398h-63.0234v-34.3398Z" fill="#09053a"/><path d="M1728.9668,249.9932V108.5933h68.0742c13.1963,0,24.6094,2.1558,34.2393,6.4639,9.626,4.3115,17.0693,10.4727,22.3213,18.4829,5.252,8.0137,7.8779,17.4731,7.8779,28.3813s-2.626,20.3003-7.8779,28.1782-12.6953,13.9072-22.3213,18.0791c-9.6299,4.1758-21.043,6.2627-34.2393,6.2627h-41.6123l21.21-19.5947v55.1465h-47.6719ZM1776.6387,200.0986l-21.21-21.6133h38.582c6.5967,0,11.4795-1.4805,14.6455-4.4443,3.1621-2.9604,4.7471-7.0005,4.7471-12.1196s-1.585-9.1567-4.7471-12.1201c-3.166-2.9604-8.0488-4.4443-14.6455-4.4443h-38.582l21.21-21.6138v76.3555ZM1813.6055,249.9932l-34.7441-51.5098h50.5l35.1475,51.5098h-50.9033Z" fill="#09053a"/><path d="M1952.5801,253.2246c-11.3115,0-21.7842-1.7861-31.4111-5.3525-9.6289-3.5664-17.9775-8.6514-25.0479-15.251-7.0693-6.5967-12.5586-14.4082-16.4629-23.4326-3.9072-9.0205-5.8574-18.9873-5.8574-29.8955s1.9502-20.8721,5.8574-29.896c3.9043-9.0205,9.3936-16.832,16.4629-23.4316,7.0703-6.5967,15.4189-11.6816,25.0479-15.251,9.627-3.5669,20.0996-5.353,31.4111-5.353,13.8691,0,26.1592,2.4238,36.8652,7.272,10.7061,4.8477,19.5596,11.8516,26.5635,21.0078l-30.0986,26.8662c-4.1758-5.252-8.7871-9.3237-13.8369-12.2212-5.0498-2.894-10.7402-4.3428-17.0693-4.3428-4.9834,0-9.4932.8076-13.5332,2.4238s-7.5088,3.9736-10.4033,7.0698c-2.8975,3.0996-5.1514,6.8364-6.7666,11.2109-1.6162,4.3779-2.4248,9.2607-2.4248,14.645,0,5.3877.8086,10.2705,2.4248,14.6445,1.6152,4.3779,3.8691,8.1152,6.7666,11.2109,2.8945,3.0996,6.3633,5.4541,10.4033,7.0703s8.5498,2.4238,13.5332,2.4238c6.3291,0,12.0195-1.4453,17.0693-4.3428,5.0498-2.8945,9.6611-6.9688,13.8369-12.2207l30.0986,26.8662c-7.0039,9.0234-15.8574,15.9922-26.5635,20.9062-10.7061,4.915-22.9961,7.373-36.8652,7.373Z" fill="#09053a"/><path d="M2076.6055,214.0371h70.7002v35.9561h-117.5645V108.5933h114.9385v35.9561h-68.0742v69.4878ZM2073.374,161.1133h63.0234v34.3398h-63.0234v-34.3398Z" fill="#09053a"/></g><g><circle cx="175" cy="175" r="175" fill="#ccb161"/><path d="M349.8016,184.1762c-4.2758,82.7633-66.0552,150.3104-146.1534,163.4835l-81.4756-81.4756c-.3885-.3363-.7648-.6865-1.128-1.05-3.8777-3.8755-6.2738-9.2269-6.2738-15.1382-.009-6.1388,2.6257-11.9842,7.2311-16.0431l-8.3358-8.3358c-.3449-.299-.6796-.6111-1.0026-.9341-3.4402-3.4402-5.5752-8.1907-5.5752-13.4225,0-1.6406.2107-3.2339.6052-4.7542l-32.7454-32.7454c-2.0957-1.7274-2.3942-4.8267-.6668-6.9224.9339-1.133,2.3252-1.7894,3.7935-1.7897h38.6684l-45.2032-45.2032c-1.9201-1.9218-1.9187-5.0363.0031-6.9565.9211-.9202,2.1694-1.4378,3.4714-1.4392h28.3828l-24.457-24.457c-.9239-.9211-1.4422-2.1728-1.4401-3.4774-.0008-2.7163,2.2005-4.9189,4.9168-4.9197h20.5931c1.3409,0,2.5565.5359,3.4439,1.4051l.0729.0729,31.3753,31.3753h137.1708c1.4694-.003,2.8623.6545,3.7939,1.7908l70.9348,70.9363Z" fill="#ab8b2b" fill-rule="evenodd"/><path d="M247.1094,238.4189c3.1996,0,6.0907,1.2987,8.1966,3.3906,2.169,2.1718,3.3851,5.117,3.3804,8.1863,0,3.1938-1.2928,6.0907-3.3804,8.1827-2.1739,2.173-5.1228,3.3921-8.1966,3.3884-3.071.0049-6.0172-1.2146-8.1863-3.3884-2.1725-2.1686-3.3918-5.1131-3.3884-8.1827,0-3.1996,1.2965-6.0907,3.3884-8.1863,2.1696-2.1734,5.1154-3.3934,8.1863-3.3906h0ZM136.1827,238.4189c3.1988,0,6.0944,1.2987,8.1864,3.3906,2.1748,2.1686,3.3949,5.1151,3.3899,8.1863,0,3.1938-1.2943,6.0907-3.3899,8.1827-2.1685,2.1749-5.1152,3.3945-8.1864,3.3884-3.07.0055-6.0153-1.2141-8.1827-3.3884-2.1743-2.1675-3.3944-5.1126-3.3899-8.1827,0-3.1996,1.2943-6.0907,3.3899-8.1863,2.1678-2.1739,5.1126-3.3942,8.1827-3.3906h0ZM99.125,88.4322l5.4826,23.0161h-29.5947c-2.7165,0-4.9186,2.2021-4.9186,4.9186s2.2021,4.9186,4.9186,4.9186h68.8866c2.7159,0,4.9175,2.2016,4.9175,4.9175s-2.2016,4.9175-4.9175,4.9175h-34.6048l1.664,6.9934h-6.1666c-2.7165,0-4.9186,2.2021-4.9186,4.9186s2.2021,4.9186,4.9186,4.9186h44.2138c2.7165.0331,4.8917,2.2621,4.8586,4.9786-.0325,2.6698-2.1889,4.8261-4.8586,4.8586h-33.3645l1.7281,7.2596h-39.2962c-2.7147,0-4.9153,2.2014-4.9153,4.9175s2.2014,4.9175,4.9153,4.9175h77.7416c2.7165.0329,4.892,2.2616,4.8591,4.9781-.0323,2.6701-2.189,4.8268-4.8591,4.8591h-33.756l1.8251,7.6694c-4.3524.5068-8.268,2.4974-11.2211,5.4461-3.4402,3.4438-5.5752,8.1944-5.5752,13.424s2.1357,9.9823,5.5752,13.4225c3.4439,3.4461,8.1944,5.5796,13.4283,5.5796h1.766c-2.5444,1.0783-4.8574,2.6365-6.8126,4.5894-4.0237,4.0117-6.2817,9.4622-6.2738,15.1441,0,5.9114,2.396,11.2627,6.2738,15.1382,3.8755,3.8755,9.2305,6.2716,15.1382,6.2716,5.9114,0,11.2685-2.396,15.1441-6.2716,3.8755-3.8755,6.2716-9.2269,6.2716-15.1382.0077-5.6814-2.2493-11.1316-6.2716-15.1441-1.9561-1.9529-4.2698-3.511-6.8148-4.5894h94.2674c-2.5432,1.0782-4.8547,2.6364-6.8082,4.5894-3.8755,3.8755-6.2738,9.2305-6.2738,15.1441s2.3982,11.2627,6.2738,15.1382c3.8755,3.8755,9.2261,6.2716,15.1382,6.2716s11.2583-2.396,15.136-6.2716c3.8777-3.8755,6.2832-9.2269,6.2832-15.1382s-2.4062-11.2685-6.2832-15.1441c-1.9491-1.9546-4.2584-3.5131-6.8002-4.5894h7.019c2.7045,0,4.9117-2.2014,4.9117-4.9197s-2.2072-4.9197-4.9117-4.9197H126.0911c-2.5156,0-4.8059-1.0318-6.4728-2.6921-1.6603-1.6647-2.6965-3.9514-2.6965-6.4706,0-2.5156,1.0361-4.8023,2.6965-6.4663,1.6661-1.6603,3.9572-2.6965,6.4728-2.6965h119.6781c3.9827,0,7.6716-1.3322,10.6101-3.6429,2.9232-2.3005,5.0903-5.5694,6.0448-9.4588l17.3199-71.0639c.1609-.5052.2413-1.0325.2384-1.5626,0-2.7162-2.1875-4.9197-4.9117-4.9197H114.7168l-6.8863-28.91c-.4643-2.2944-2.4811-3.9437-4.822-3.9433h-20.5902c-2.7163-.0008-4.9189,2.2005-4.9197,4.9168v.0029c0,2.7159,2.2016,4.9175,4.9175,4.9175h16.7089v-.0007Z" fill="#fff" fill-rule="evenodd"/></g></svg>
					</div>
					<div class="digiblocks-promo-content">
						<p><?php echo wp_kses_post( __( 'Transform your site into a conversion-optimized ecommerce designed specifically for selling <strong>digital products</strong>, <strong>booking services</strong>, and delivering <strong>online courses</strong>. Lightning-fast checkout, secure digital delivery, and professional payment processing built to maximize your revenue and scale your digital business.', 'digiblocks' ) ); ?></p>
						<div class="digiblocks-link-wrapper">
							<?php
							$digicommerce_status = $install->get_plugin_status( 'digicommerce' );
							$button_action = $digicommerce_status['status'] === 'active' ? 'learn_more' : ($digicommerce_status['status'] === 'inactive' ? 'activate' : 'install');
							?>
							<button type="button" 
								class="digiblocks-button digiblocks-plugin-action <?php echo esc_attr( $digicommerce_status['button_class'] ); ?>"
								data-plugin="digicommerce" 
								data-action="<?php echo esc_attr( $button_action ); ?>"
								data-type="plugin"
								<?php if ( $digicommerce_status['status'] === 'active' ) : ?>
								data-url="<?php echo esc_url( $digicommerce_status['url'] ); ?>"
								<?php endif; ?>>
								<span><?php echo esc_html( $digicommerce_status['button_text'] ); ?></span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z"/></svg>
							</button>
						</div>
					</div>
				</div>

				<div class="digiblocks-promo-product">
					<div class="digiblocks-promo-logo">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1694 350" width="150" height="33"><path d="M426.999,249.9932V108.5933h69.6904c15.7559,0,29.624,2.8628,41.6123,8.585,11.9844,5.7256,21.3418,13.8369,28.0771,24.3408,6.7324,10.5039,10.1006,23.0283,10.1006,37.5728,0,14.6797-3.3682,27.3047-10.1006,37.875-6.7354,10.5732-16.0928,18.7197-28.0771,24.4414-11.9883,5.7256-25.8564,8.585-41.6123,8.585h-69.6904ZM474.6709,212.8252h19.998c6.7324,0,12.625-1.2783,17.6758-3.8379,5.0498-2.5566,8.9883-6.3633,11.8164-11.4131s4.2422-11.2109,4.2422-18.4824c0-7.1367-1.4141-13.1968-4.2422-18.1807-2.8281-4.9805-6.7666-8.7524-11.8164-11.312-5.0508-2.5566-10.9434-3.8379-17.6758-3.8379h-19.998v67.064Z" fill="#27293b"></path><path d="M593.8486,249.9932V108.5933h47.6719v141.3999h-47.6719Z" fill="#27293b"></path><path d="M737.873,253.2256c-11.4473,0-21.9863-1.7861-31.6133-5.3535-9.6289-3.5664-17.9775-8.6514-25.0479-15.251-7.0693-6.5967-12.5586-14.4082-16.4629-23.4316-3.9072-9.0205-5.8574-18.9883-5.8574-29.8965s1.9502-20.8721,5.8574-29.896c3.9043-9.0205,9.4248-16.832,16.5645-23.4316,7.1357-6.5967,15.585-11.6816,25.3506-15.251,9.7627-3.5669,20.5029-5.353,32.2188-5.353,14.0049,0,26.4941,2.3574,37.4717,7.0698,10.9736,4.7153,20.0293,11.4478,27.1689,20.2002l-30.502,26.8657c-4.4443-5.1162-9.2607-8.9888-14.4434-11.6147-5.1855-2.626-10.9424-3.939-17.2705-3.939-5.252,0-9.999.8076-14.2412,2.4238s-7.8467,3.9736-10.8076,7.0698c-2.9629,3.0996-5.252,6.8018-6.8672,11.1104-1.6162,4.311-2.4248,9.2256-2.4248,14.7456,0,5.252.8086,10.0693,2.4248,14.4434,1.6152,4.3779,3.9043,8.1152,6.8672,11.2109,2.9609,3.0996,6.4961,5.4893,10.6055,7.1709,4.1064,1.6855,8.7178,2.5254,13.8369,2.5254,5.3848,0,10.6367-.9092,15.7559-2.7275,5.1162-1.8174,10.5703-4.9482,16.3623-9.3926l26.6641,32.7236c-8.6201,5.792-18.4512,10.2363-29.4922,13.332-11.0439,3.0967-21.75,4.6465-32.1182,4.6465ZM758.0732,229.1875v-53.7324h41.4102v59.792l-41.4102-6.0596Z" fill="#27293b"></path><path d="M819.8848,249.9932V108.5933h47.6719v141.3999h-47.6719Z" fill="#27293b"></path><path d="M938.2539,249.9932h-47.6719V108.5933h114.9385v35.9561h-67.2666v105.4438ZM935.0225,168.7891h62.2158v35.9561h-62.2158v-35.9561Z" fill="#27293b"></path><path d="M1088.3398,253.2256c-21.6826,0-38.582-5.8584-50.7012-17.5742-12.1201-11.7158-18.1807-28.1445-18.1807-49.2881v-77.77h47.6719v76.356c0,10.7754,1.9512,18.417,5.8584,22.9268,3.9043,4.5137,9.1562,6.7676,15.7559,6.7676,6.7324,0,12.0195-2.2539,15.8574-6.7676,3.8379-4.5098,5.7568-12.1514,5.7568-22.9268v-76.356h46.8643v77.77c0,21.1436-6.0605,37.5723-18.1807,49.2881s-29.0215,17.5742-50.7021,17.5742Z" fill="#27293b"></path><path d="M1231.7598,253.2256c-11.8516,0-23.2998-1.3477-34.3398-4.04-11.0439-2.6924-20.1338-6.1924-27.2705-10.5039l15.3516-34.7441c6.7324,3.9072,14.2412,7.0381,22.5234,9.3926,8.2822,2.3584,16.3271,3.5352,24.1387,3.5352,4.5771,0,8.1816-.3027,10.8076-.9092,2.626-.6055,4.5449-1.4795,5.7568-2.626,1.2119-1.1426,1.8184-2.5244,1.8184-4.1406,0-2.5566-1.4141-4.5762-4.2422-6.0596-2.8281-1.4805-6.5654-2.7275-11.2109-3.7373-4.6465-1.0098-9.7314-2.0869-15.251-3.2324-5.5234-1.1426-11.0791-2.6572-16.665-4.5449-5.5898-1.8838-10.7061-4.374-15.3525-7.4736-4.6455-3.0967-8.3828-7.1709-11.2109-12.2217-2.8281-5.0498-4.2422-11.3433-4.2422-18.8867,0-8.7524,2.4561-16.7314,7.373-23.937,4.915-7.2026,12.2529-12.9595,22.0186-17.271,9.7617-4.3081,21.917-6.4639,36.4609-6.4639,9.5605,0,18.9883,1.0098,28.2803,3.0298s17.6396,5.1196,25.0479,9.292l-14.3428,34.542c-7.0029-3.5-13.7705-6.1265-20.3008-7.8779-6.5332-1.7485-12.8965-2.626-19.0889-2.626-4.5801,0-8.2158.4038-10.9082,1.2119-2.6953.8081-4.6143,1.8877-5.7568,3.2319-1.1455,1.3477-1.7168,2.8281-1.7168,4.4443,0,2.4238,1.4141,4.3428,4.2422,5.7568s6.5645,2.5942,11.2109,3.5352c4.6455.9434,9.7617,1.9536,15.3516,3.0298,5.5869,1.0796,11.1416,2.5596,16.665,4.4438,5.5205,1.8877,10.6055,4.3779,15.251,7.4741,4.6465,3.1001,8.3828,7.1401,11.2109,12.1206,2.8281,4.9834,4.2422,11.1787,4.2422,18.584,0,8.6191-2.459,16.5322-7.373,23.7344-4.917,7.2061-12.2207,12.998-21.917,17.3721-9.6963,4.375-21.8857,6.5654-36.5615,6.5654Z" fill="#27293b"></path><path d="M1311.751,249.9932V108.5933h47.6719v141.3999h-47.6719Z" fill="#27293b"></path><path d="M1456.7852,253.2256c-11.583,0-22.2539-1.8184-32.0166-5.4541-9.7656-3.6357-18.2148-8.7871-25.3506-15.4531-7.1396-6.666-12.6953-14.5088-16.665-23.5332-3.9736-9.0205-5.959-18.8516-5.959-29.4922,0-10.772,1.9854-20.6353,5.959-29.5928,3.9697-8.9541,9.5254-16.7661,16.665-23.4321,7.1357-6.666,15.585-11.8169,25.3506-15.4531,9.7627-3.6357,20.3672-5.4536,31.8154-5.4536,11.5801,0,22.2197,1.8179,31.916,5.4536,9.6953,3.6362,18.1104,8.7871,25.25,15.4531,7.1357,6.666,12.6904,14.478,16.6641,23.4321,3.9707,8.9575,5.96,18.8208,5.96,29.5928,0,10.6406-1.9893,20.4717-5.96,29.4922-3.9736,9.0244-9.5283,16.8672-16.6641,23.5332-7.1396,6.666-15.5547,11.8174-25.25,15.4531-9.6963,3.6357-20.2695,5.4541-31.7148,5.4541ZM1456.584,214.6436c4.4434,0,8.585-.8086,12.4229-2.4238,3.8379-1.6162,7.2021-3.9395,10.0996-6.9697,2.8945-3.0293,5.1514-6.7314,6.7676-11.1094,1.6152-4.375,2.4238-9.3242,2.4238-14.8477,0-5.52-.8086-10.4692-2.4238-14.8467-1.6162-4.3745-3.873-8.0801-6.7676-11.1104-2.8975-3.0298-6.2617-5.3525-10.0996-6.9688s-7.9795-2.4238-12.4229-2.4238-8.585.8076-12.4238,2.4238c-3.8379,1.6162-7.2051,3.939-10.0996,6.9688-2.8975,3.0303-5.1514,6.7358-6.7666,11.1104-1.6162,4.3774-2.4248,9.3267-2.4248,14.8467,0,5.5234.8086,10.4727,2.4248,14.8477,1.6152,4.3779,3.8691,8.0801,6.7666,11.1094,2.8945,3.0303,6.2617,5.3535,10.0996,6.9697,3.8389,1.6152,7.9795,2.4238,12.4238,2.4238Z" fill="#27293b"></path><path d="M1553.7432,249.9932V108.5933h39.1885l71.9121,86.0522h-18.1807v-86.0522h46.46v141.3999h-39.1875l-71.9121-86.0518h18.1797v86.0518h-46.46Z" fill="#27293b"></path><path d="M51.8626,51.2563c68.4318-68.3418,179.3817-68.3418,247.8136,0,68.4318,68.3418,68.4318,179.1456,0,247.4874-68.4318,68.3418-179.3817,68.3418-247.8136,0-68.4318-68.3418-68.4318-179.1456,0-247.4874Z" fill="#7091e6" fill-rule="evenodd"></path><path d="M195.6852,296.4658c11.0519-18.2927,12.0703-38.0499,3.0552-59.2724-2.507,11.3857-7.0929,18.2957-13.7581,20.7313,6.1895-19.7839,1.0175-41.1579-15.5162-64.1223-.3568,23.7179-5.4493,40.9952-15.2779,51.8324-13.5398,14.9145-13.3804,31.7468.4775,50.4962-57.5269-34.264-65.6429-80.2189-24.349-137.8632,2.5612,13.9258,8.7676,22.4755,18.6201,25.6492-10.7393-51.0064.56-94.4673,33.8976-130.3828.2049,79.7044,22.0426,86.7888,49.653,122.3671,29.8109,42.6957,12.2922,91.9676-36.8022,120.5645h0Z" fill="#f8faff" fill-rule="evenodd"></path></svg>
					</div>
					<div class="digiblocks-promo-content">
						<p><?php echo wp_kses_post( __( 'A lightning-fast, ultra-lightweight theme designed specifically for DigiBlocks. Features a powerful site builder that lets you create custom <strong>headers</strong>, <strong>footers</strong>, <strong>archives</strong>, and <strong>page templates</strong> with intelligent display rules. Build beautiful, high-performance websites with minimal configuration and maximum flexibility.', 'digiblocks' ) ); ?></p>
						<div class="digiblocks-link-wrapper">
							<?php
							$digifusion_status = $install->get_theme_status( 'digifusion' );
							$button_action = $digifusion_status['status'] === 'active' ? 'learn_more' : ($digifusion_status['status'] === 'inactive' ? 'activate' : 'install');
							?>
							<button type="button" 
								class="digiblocks-button digiblocks-plugin-action <?php echo esc_attr( $digifusion_status['button_class'] ); ?>"
								data-theme="digifusion" 
								data-action="<?php echo esc_attr( $button_action ); ?>"
								data-type="theme"
								<?php if ( $digifusion_status['status'] === 'active' ) : ?>
								data-url="<?php echo esc_url( $digifusion_status['url'] ); ?>"
								<?php endif; ?>>
								<span><?php echo esc_html( $digifusion_status['button_text'] ); ?></span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z"/></svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Resources Section -->
		<div class="digiblocks-admin-section digiblocks-resources-section">
			<div class="digiblocks-section-header">
				<h2><?php esc_html_e( 'Resources', 'digiblocks' ); ?></h2>
			</div>

			<div class="digiblocks-resources-container">
				<div class="digiblocks-resource-card">
					<div class="digiblocks-resource-title">
						<div class="digiblocks-resource-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="#526bfe"><path d="M352 448l0-256-112 0c-26.5 0-48-21.5-48-48l0-112L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32zm-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2L224 144c0 8.8 7.2 16 16 16l111.5 0zM0 64C0 28.7 28.7 0 64 0L220.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"/></svg>
						</div>
						<h3><?php esc_html_e( 'Documentation', 'digiblocks' ); ?></h3>
					</div>
					<div class="digiblocks-resource-content">
						<p><?php esc_html_e( 'Step-by-step guides to help you get the most out of DigiBlocks.', 'digiblocks' ); ?></p>
						<div class="digiblocks-link-wrapper">
							<a href="https://digihold.click/digiblocks-docs" target="_blank" class="digiblocks-link">
								<span><?php esc_html_e( 'View Documentation', 'digiblocks' ); ?></span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z"/></svg>
							</a>
						</div>
					</div>
				</div>

				<div class="digiblocks-resource-card">
					<div class="digiblocks-resource-title">
						<div class="digiblocks-resource-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="#526bfe"><path d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224l0 144.1c0 26.5-21.5 48-48 48l-82.7-.1c-6.6-18.6-24.4-32-45.3-32l-64 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l64 0c20.9 0 38.7-13.4 45.3-32l82.7 .1c44.2 0 80.1-35.8 80.1-80L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zM320 464c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0c8.8 0 16 7.2 16 16zM144 224l16 0 0 128-16 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zM64 272l0 32c0 44.2 35.8 80 80 80l16 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0c-44.2 0-80 35.8-80 80zm288-48l16 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-16 0 0-128zm16-32l-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l16 0c44.2 0 80-35.8 80-80l0-32c0-44.2-35.8-80-80-80z"/></svg>
						</div>
						<h3><?php esc_html_e( 'Expert Support', 'digiblocks' ); ?></h3>
					</div>
					<div class="digiblocks-resource-content">
						<p><?php esc_html_e( 'Get help from our dedicated team whenever you face an issue.', 'digiblocks' ); ?></p>
						<div class="digiblocks-link-wrapper">
							<a href="https://digihold.click/digiblocks-support" target="_blank" class="digiblocks-link">
								<span><?php esc_html_e( 'Get Support', 'digiblocks' ); ?></span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z"/></svg>
							</a>
						</div>
					</div>
				</div>

				<div class="digiblocks-resource-card">
					<div class="digiblocks-resource-title">
						<div class="digiblocks-resource-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="#526bfe"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
						</div>
						<h3><?php esc_html_e( 'Join Community', 'digiblocks' ); ?></h3>
					</div>
					<div class="digiblocks-resource-content">
						<p><?php esc_html_e( 'Connect with other users and developers to share ideas and solutions.', 'digiblocks' ); ?></p>
						<div class="digiblocks-link-wrapper">
							<a href="https://digihold.click/digiblocks-fb" target="_blank" class="digiblocks-link">
								<span><?php esc_html_e( 'Connect with Us', 'digiblocks' ); ?></span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z"/></svg>
							</a>
						</div>
					</div>
				</div>

				<div class="digiblocks-resource-card">
					<div class="digiblocks-resource-title">
						<div class="digiblocks-resource-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24" fill="#526bfe"><path d="M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z"/></svg>
						</div>
						<h3><?php esc_html_e( 'Rate DigiBlocks', 'digiblocks' ); ?></h3>
					</div>
					<div class="digiblocks-resource-content">
						<p><?php esc_html_e( 'Enjoying DigiBlocks? Show your support by leaving a review.', 'digiblocks' ); ?></p>
						<div class="digiblocks-link-wrapper">
							<a href="https://digihold.click/digiblocks-reviews" target="_blank" class="digiblocks-link">
								<span><?php esc_html_e( 'Leave a Review', 'digiblocks' ); ?></span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M505 273c9.4-9.4 9.4-24.6 0-33.9L369 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l406.1 0-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273z"/></svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Extract CSS from blocks.
	 *
	 * @param string $content Post content.
	 * @param int    $post_id Post ID.
	 * @return string Combined CSS.
	 */
	private function extract_block_css( $content, $post_id ) {
		$css = '';
		$blocks = parse_blocks( $content );
		
		// Process blocks recursively.
		$css = $this->process_blocks_for_css( $blocks, $post_id );
		return $css;
	}

	/**
	 * Process blocks recursively to extract CSS.
	 *
	 * @param array $blocks Array of blocks.
	 * @param int   $post_id Post ID.
	 * @return string Combined CSS.
	 */
	private function process_blocks_for_css( $blocks, $post_id ) {
		$css = '';
		$digiblock_count = 0;
	
		foreach ( $blocks as $block ) {
			// Handle reusable blocks
			if ( isset( $block['blockName'] ) && $block['blockName'] === 'core/block' ) {
				if ( isset( $block['attrs']['ref'] ) ) {
					$reusable_block_id = $block['attrs']['ref'];
					
					// Check cache first
					$cached_css = $this->get_cached_reusable_processing( $reusable_block_id, 'css' );
					if ( false !== $cached_css ) {
						$css .= $cached_css;
						continue;
					}
					
					$reusable_blocks = $this->get_cached_reusable_block( $reusable_block_id );
					if ( ! empty( $reusable_blocks ) ) {
						$reusable_css = $this->process_blocks_for_css( $reusable_blocks, $post_id );
						$this->set_cached_reusable_processing( $reusable_block_id, 'css', $reusable_css );
						$css .= $reusable_css;
					}
				}
				continue;
			}
	
			// Check if this is a DigiBlocks block.
			if ( isset( $block['blockName'] ) && 0 === strpos( $block['blockName'], 'digiblocks/' ) ) {
				$digiblock_count++;
				$block_name = str_replace( 'digiblocks/', '', $block['blockName'] );
				$block_instance_id = isset( $block['attrs']['id'] ) ? $block['attrs']['id'] : uniqid( 'digiblock-' );
	
				// Ensure attrs is always an array
				$block_attrs = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();
	
				// Pass the block ID and attributes to get_block_css
				$block_css = $this->get_block_css( $block_name, $block_instance_id, $block_attrs );
				$css .= $block_css;
			}
	
			// Process inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$inner_css = $this->process_blocks_for_css( $block['innerBlocks'], $post_id );
				$css .= $inner_css;
			}
		}
		return $css;
	}

	/**
	 * Get block-specific CSS.
	 *
	 * @param string $block_name Block name.
	 * @param string $block_id Block ID.
	 * @param array  $attrs Block attributes.
	 * @return string Block CSS.
	 */
	private function get_block_css( $block_name, $block_id, $attrs ) {
		// Get all possible CSS directories (main plugin + pro extensions)
		$css_directories = array( DIGIBLOCKS_PLUGIN_DIR . 'blocks/' . $block_name . '/styles.php' );
		$css_directories = apply_filters( 'digiblocks_block_css_directories', $css_directories, $block_name );
		
		$css_output = '';
		
		foreach ( $css_directories as $block_css_file ) {
			if ( file_exists( $block_css_file ) ) {
				// Ensure attrs is always an array
				if ( ! is_array( $attrs ) ) {
					$attrs = array();
				}
	
				// Create a variable that will be accessible in the included file
				$digiblocks_css_output = '';
				
				// Wrap include in try-catch to handle any errors in the styles file
				try {
					// Include the file - it will set $digiblocks_css_output
					include $block_css_file;
					$css_output .= $digiblocks_css_output;
				} catch ( Exception $e ) {
					continue;
				} catch ( Error $e ) {
					continue;
				}
			}
		}
		
		return $css_output;
	}

	/**
	 * Extract JS from blocks.
	 *
	 * @param string $content Post content.
	 * @param int    $post_id Post ID.
	 * @return string Combined JS.
	 */
	private function extract_block_js( $content, $post_id ) {
		$js     = '';
		$blocks = parse_blocks( $content );

		// Process blocks recursively.
		$js = $this->process_blocks_for_js( $blocks, $post_id );

		return $js;
	}

	/**
	 * Process blocks recursively to extract JS.
	 *
	 * @param array $blocks Array of blocks.
	 * @param int   $post_id Post ID.
	 * @return string Combined JS.
	 */
	private function process_blocks_for_js( $blocks, $post_id ) {
		$js = '';
	
		foreach ( $blocks as $block ) {
			// Handle reusable blocks
			if ( isset( $block['blockName'] ) && $block['blockName'] === 'core/block' ) {
				if ( isset( $block['attrs']['ref'] ) ) {
					$reusable_block_id = $block['attrs']['ref'];
					
					// Check cache first
					$cached_js = $this->get_cached_reusable_processing( $reusable_block_id, 'js' );
					if ( false !== $cached_js ) {
						$js .= $cached_js;
						continue;
					}
					
					$reusable_blocks = $this->get_cached_reusable_block( $reusable_block_id );
					if ( ! empty( $reusable_blocks ) ) {
						$reusable_js = $this->process_blocks_for_js( $reusable_blocks, $post_id );
						$this->set_cached_reusable_processing( $reusable_block_id, 'js', $reusable_js );
						$js .= $reusable_js;
					}
				}
				continue;
			}
	
			// Check if this is a DigiBlocks block.
			if ( isset( $block['blockName'] ) && 0 === strpos( $block['blockName'], 'digiblocks/' ) ) {
				$block_name        = str_replace( 'digiblocks/', '', $block['blockName'] );
				$block_instance_id = isset( $block['attrs']['id'] ) ? $block['attrs']['id'] : uniqid( 'digiblock-' );
	
				// Ensure attrs is always an array
				$block_attrs = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();
	
				// Get block-specific JS.
				$block_js = $this->get_block_js( $block_name, $block_instance_id, $block_attrs );
				$js      .= $block_js;
			}
	
			// Process inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$js .= $this->process_blocks_for_js( $block['innerBlocks'], $post_id );
			}
		}
	
		return $js;
	}

	/**
	 * Get block-specific JS.
	 *
	 * @param string $block_name Block name.
	 * @param string $block_id Block ID.
	 * @param array  $attrs Block attributes.
	 * @return string Block JS.
	 */
	private function get_block_js( $block_name, $block_id, $attrs ) {
		// Get all possible JS directories (main plugin + pro extensions)
		$js_directories = array( DIGIBLOCKS_PLUGIN_DIR . 'blocks/' . $block_name . '/script.php' );
		$js_directories = apply_filters( 'digiblocks_block_js_directories', $js_directories, $block_name );
		
		$js_output = '';
		
		foreach ( $js_directories as $block_js_file ) {
			if ( file_exists( $block_js_file ) ) {
				// Ensure attrs is always an array
				if ( ! is_array( $attrs ) ) {
					$attrs = array();
				}
	
				// Create a variable that will be accessible in the included file
				$digiblocks_js_output = '';
				
				// Wrap include in try-catch to handle any errors in the script file
				try {
					// Include the file - it will set $digiblocks_js_output
					include $block_js_file;
					$js_output .= $digiblocks_js_output;
				} catch ( Exception $e ) {
					continue;
				} catch ( Error $e ) {
					continue;
				}
			}
		}
		
		return $js_output;
	}

	/**
	 * Generate CSS file for a post.
	 *
	 * @param int    $post_id Post ID.
	 * @param string $css CSS content.
	 */
	public function generate_css_file( $post_id, $css ) {
		// Initialize WP_Filesystem
		global $wp_filesystem;
		if ( ! is_object( $wp_filesystem ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			$filesystem_init = WP_Filesystem();
		}

		$css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.css';

		if ( empty( $css ) ) {
			// Clean up CSS file if it exists.
			if ( $wp_filesystem->exists( $css_file ) ) {
				$delete_result = $wp_filesystem->delete( $css_file );
			}
			return;
		}

		// Ensure digiblocks directory exists in uploads folder.
		if ( ! file_exists( DIGIBLOCKS_ASSETS_DIR ) ) {
			$mkdir_result = wp_mkdir_p( DIGIBLOCKS_ASSETS_DIR );
		}

		// Direct file system access backup in case WP_Filesystem fails
		if ( ! $wp_filesystem || ! is_object( $wp_filesystem ) ) {
			// Try to initialize a direct file system instance as fallback
			if ( ! class_exists( 'WP_Filesystem_Direct' ) ) {
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';
			}
			$wp_filesystem_direct = new WP_Filesystem_Direct( null );
			$write_result = $wp_filesystem_direct->put_contents( $css_file, $css, FS_CHMOD_FILE );
			return;
		}

		// Minify CSS.
		$css = $this->minify_css( $css );

		// Write CSS file.
		$put_result = $wp_filesystem->put_contents( $css_file, $css, FS_CHMOD_FILE );
	}

	/**
	 * Generate JS file for a post.
	 *
	 * @param int    $post_id Post ID.
	 * @param string $js JS content.
	 */
	public function generate_js_file( $post_id, $js ) {
		// Initialize WP_Filesystem
		global $wp_filesystem;
		if ( ! is_object( $wp_filesystem ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			$filesystem_init = WP_Filesystem();
		}

		$js_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.js';

		if ( empty( $js ) ) {
			// Clean up JS file if it exists.
			if ( $wp_filesystem->exists( $js_file ) ) {
				$delete_result = $wp_filesystem->delete( $js_file );
			}
			return;
		}

		// Ensure digiblocks directory exists in uploads folder.
		if ( ! file_exists( DIGIBLOCKS_ASSETS_DIR ) ) {
			$mkdir_result = wp_mkdir_p( DIGIBLOCKS_ASSETS_DIR );
		}

		// Direct file system access backup in case WP_Filesystem fails
		if ( ! $wp_filesystem || ! is_object( $wp_filesystem ) ) {
			// Try to initialize a direct file system instance as fallback
			if ( ! class_exists( 'WP_Filesystem_Direct' ) ) {
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';
			}
			$wp_filesystem_direct = new WP_Filesystem_Direct( null );
			$write_result = $wp_filesystem_direct->put_contents( $js_file, $js, FS_CHMOD_FILE );
			return;
		}

		// Minify JS.
		$js = $this->minify_js( $js );

		// Write JS file.
		$put_result = $wp_filesystem->put_contents( $js_file, $js, FS_CHMOD_FILE );
	}

	/**
	 * Minify CSS.
	 *
	 * @param string $css CSS content.
	 * @return string Minified CSS.
	 */
	private function minify_css( $css ) {
		// Remove comments.
		$css = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css );
		
		// Ensure preg_replace didn't fail
		if ( null === $css ) {
			return '';
		}

		// Remove space after colons.
		$css = str_replace( ': ', ':', $css );
		
		// Remove whitespace.
		$css = str_replace( array( "\r\n", "\r", "\n", "\t", '  ', '    ', '    ' ), '', $css );

		return $css;
	}

	/**
	 * Minify JS.
	 *
	 * @param string $js JS content.
	 * @return string Minified JS.
	 */
	private function minify_js( $js ) {
		// Ensure JS is a string
		if ( ! is_string( $js ) || empty( $js ) ) {
			return '';
		}
	
		// Remove comments (single line).
		$js = preg_replace( '/(\/\/[^\n]*\n)/', '', $js );
		if ( null === $js ) {
			return '';
		}
	
		// Remove comments (multi-line).
		$js = preg_replace( '/(\/\*.*?\*\/)/', '', $js );
		if ( null === $js ) {
			return '';
		}
	
		// Remove whitespace.
		$js = preg_replace( '/\s+/', ' ', $js );
		if ( null === $js ) {
			return '';
		}
	
		return trim( $js );
	}

	/**
	 * Clean up block assets.
	 *
	 * @param int $post_id Post ID.
	 */
	public function cleanup_block_assets( $post_id ) {
		$css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.css';
		$js_file  = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.js';

		if ( file_exists( $css_file ) ) {
			wp_delete_file( $css_file );
		}

		if ( file_exists( $js_file ) ) {
			wp_delete_file( $js_file );
		}
	}

	/**
	 * Enqueue block assets on front-end
	 */
	public function enqueue_block_assets() {
		global $wp_query;
		
		$post_ids_to_check = array();
		$template_content_to_check = array();
		
		// Get post IDs to check based on current page type
		if ( is_singular() ) {
			// Single post/page/CPT
			$post_ids_to_check[] = get_the_ID();
		} else {
			// Archive pages, home page, search results - get all displayed post IDs
			if ( isset( $wp_query->posts ) && is_array( $wp_query->posts ) ) {
				foreach ( $wp_query->posts as $post ) {
					if ( isset( $post->ID ) ) {
						$post_ids_to_check[] = $post->ID;
					}
				}
			}
		}
		
		// Check for block theme templates and template parts
		$current_template_content = $this->get_current_template_content();
		if ( ! empty( $current_template_content ) ) {
			$template_content_to_check[] = $current_template_content;
		}
		
		// Add active builder posts if DigiStore Builder is active
		if ( class_exists( 'DigiStore_Builder' ) ) {
			$builder_posts = $this->get_active_builder_posts();
			foreach ( $builder_posts as $builder_post ) {
				$post_ids_to_check[] = $builder_post->ID;
			}
		}
		
		// Remove duplicates and invalid IDs
		$post_ids_to_check = array_unique( array_filter( $post_ids_to_check ) );
		
		// Track what we've enqueued to avoid duplicates
		static $enqueued_posts = array();
		static $enqueued_templates = array();
		static $global_assets_enqueued = false;
		
		$has_any_digiblocks = false;
		$all_blocks_for_global_assets = array();
		
		// Process each post
		foreach ( $post_ids_to_check as $post_id ) {
			// Skip if already processed
			if ( isset( $enqueued_posts[ $post_id ] ) ) {
				continue;
			}
			
			$css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.css';
			$js_file  = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.js';
			$post = null;
			
			// If no asset files exist, check content and generate if needed
			if ( ! file_exists( $css_file ) && ! file_exists( $js_file ) ) {
				$post = get_post( $post_id );
				if ( ! $post || ( false === strpos( $post->post_content, '<!-- wp:digiblocks/' ) && false === strpos( $post->post_content, '<!-- wp:block ' ) ) ) {
					$enqueued_posts[ $post_id ] = false;
					continue;
				}
				// Generate assets
				$this->generate_block_assets( $post_id, $post, true );
			}
			
			// Final check after potential generation
			$has_css = file_exists( $css_file );
			$has_js = file_exists( $js_file );
			
			// Skip if still no assets
			if ( ! $has_css && ! $has_js ) {
				$enqueued_posts[ $post_id ] = false;
				continue;
			}
			
			$has_any_digiblocks = true;
			
			// Enqueue CSS
			if ( $has_css ) {
				wp_enqueue_style(
					'digiblocks-' . $post_id,
					DIGIBLOCKS_ASSETS_URL . '/digiblocks-' . $post_id . '.css',
					array(),
					filemtime( $css_file )
				);
			}
			
			// Enqueue JS and add script data
			if ( $has_js ) {
				wp_enqueue_script(
					'digiblocks-' . $post_id,
					DIGIBLOCKS_ASSETS_URL . '/digiblocks-' . $post_id . '.js',
					array(),
					filemtime( $js_file ),
					true
				);
				
				// Get post if not already loaded
				if ( ! $post ) {
					$post = get_post( $post_id );
				}
				if ( $post && ! empty( $post->post_content ) ) {
					$blocks = parse_blocks( $post->post_content );
					$this->enqueue_consolidated_script_data( 'digiblocks-' . $post_id, $blocks );
					$all_blocks_for_global_assets = array_merge( $all_blocks_for_global_assets, $blocks );
				}
			}
			
			// Mark as processed
			$enqueued_posts[ $post_id ] = true;
		}
		
		// Process template content
		foreach ( $template_content_to_check as $index => $template_content ) {
			$template_key = 'template_' . $index;
			
			// Skip if already processed
			if ( isset( $enqueued_templates[ $template_key ] ) ) {
				continue;
			}
			
			// Check if template contains DigiBlocks
			if ( false === strpos( $template_content, '<!-- wp:digiblocks/' ) && false === strpos( $template_content, '<!-- wp:block ' ) ) {
				$enqueued_templates[ $template_key ] = false;
				continue;
			}
			
			// Generate a unique identifier for this template content
			$template_hash = substr( md5( $template_content ), 0, 6 );
			$css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-template-' . $template_hash . '.css';
			$js_file  = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-template-' . $template_hash . '.js';
			
			// Generate assets if they don't exist
			if ( ! file_exists( $css_file ) || ! file_exists( $js_file ) ) {
				$this->generate_template_assets( $template_content, $template_hash );
			}
			
			// Final check after potential generation
			$has_css = file_exists( $css_file );
			$has_js = file_exists( $js_file );
			
			// Skip if still no assets
			if ( ! $has_css && ! $has_js ) {
				$enqueued_templates[ $template_key ] = false;
				continue;
			}
			
			$has_any_digiblocks = true;
			
			// Enqueue CSS
			if ( $has_css ) {
				wp_enqueue_style(
					'digiblocks-template-' . $template_hash,
					DIGIBLOCKS_ASSETS_URL . '/digiblocks-template-' . $template_hash . '.css',
					array(),
					filemtime( $css_file )
				);
			}
			
			// Enqueue JS and add script data
			if ( $has_js ) {
				wp_enqueue_script(
					'digiblocks-template-' . $template_hash,
					DIGIBLOCKS_ASSETS_URL . '/digiblocks-template-' . $template_hash . '.js',
					array(),
					filemtime( $js_file ),
					true
				);
				
				$blocks = parse_blocks( $template_content );
				$this->enqueue_consolidated_script_data( 'digiblocks-template-' . $template_hash, $blocks );
				$all_blocks_for_global_assets = array_merge( $all_blocks_for_global_assets, $blocks );
			}
			
			// Mark as processed
			$enqueued_templates[ $template_key ] = true;
		}
		
		// Enqueue global assets only once per page if any DigiBlocks were found
		if ( $has_any_digiblocks && ! $global_assets_enqueued && ! empty( $all_blocks_for_global_assets ) ) {
			$this->enqueue_global_digiblocks_assets( $all_blocks_for_global_assets );
			$global_assets_enqueued = true;
		}
	}

	/**
	 * Enqueue global DigiBlocks assets (Google Maps, Lottie, Animations)
	 * These should only be loaded once per page regardless of how many blocks use them
	 *
	 * @param array $all_blocks All blocks found on the page
	 */
	private function enqueue_global_digiblocks_assets( $all_blocks ) {
		// Google Maps API
		if ( $this->has_specific_block( $all_blocks, 'digiblocks/google-map' ) ) {
			$settings = get_option( 'digiblocks_settings', array() );
			$api_key = isset( $settings['google_maps_api_key'] ) ? $settings['google_maps_api_key'] : '';
			
			if ( ! empty( $api_key ) ) {
				wp_enqueue_script(
					'google-maps-api',
					'https://maps.googleapis.com/maps/api/js?key=' . esc_attr( $api_key ) . '&callback=digiblocksGoogleMapsCallback&loading=async',
					array(),
					null,
					true
				);
			}
		}
		
		// Lottie Player
		if ( $this->has_specific_block( $all_blocks, 'digiblocks/lottie' ) ) {
			wp_enqueue_script(
				'digiblocks-lottie-player',
				DIGIBLOCKS_PLUGIN_URL . 'assets/js/lottie.js',
				array(),
				DIGIBLOCKS_VERSION,
				true
			);
		}
		
		// Animations
		if ( $this->has_block_animations( $all_blocks ) ) {
			wp_enqueue_script(
				'digiblocks-animations',
				DIGIBLOCKS_PLUGIN_URL . 'assets/js/front-animations.js',
				array(),
				DIGIBLOCKS_VERSION,
				true
			);
		}
	}

	/**
	 * Get active builder posts (simplified version)
	 *
	 * @return array Array of builder post objects
	 */
	private function get_active_builder_posts() {
		// Use transient caching for builder posts since they don't change often
		$cache_key = 'digiblocks_active_builders';
		$builder_posts = get_transient( $cache_key );
		
		if ( false === $builder_posts ) {
			$builder_posts = get_posts( array(
				'post_type'      => 'digi_builder',
				'post_status'    => 'publish',
				'posts_per_page' => -1,
				'fields'         => 'ids',
			) );
			
			// Convert IDs to post objects
			$builder_objects = array();
			foreach ( $builder_posts as $builder_id ) {
				$post = get_post( $builder_id );
				if ( $post ) {
					$builder_objects[] = $post;
				}
			}
			
			// Cache for 1 hour
			set_transient( $cache_key, $builder_objects, HOUR_IN_SECONDS );
			$builder_posts = $builder_objects;
		}
		
		return $builder_posts;
	}

	/**
	 * Enhanced generate_block_assets method to ensure clean regeneration
	 *
	 * @param int     $post_id Post ID.
	 * @param WP_Post $post Post object.
	 * @param bool    $force Force regeneration even if post hasn't changed.
	 */
	public function generate_block_assets( $post_id, $post, $force = false ) {
		// Skip if this is an autosave, a revision, or a restore
		if ( ! $force && ( wp_is_post_autosave( $post_id ) || wp_is_post_revision( $post_id ) || ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) ) ) {
			return;
		}

		// Skip if post status is 'auto-draft'
		if ( ! $force && 'auto-draft' === $post->post_status ) {
			return;
		}

		// Skip if post type doesn't support the block editor (except digi_builder)
		if ( ! $force && $post->post_type !== 'digi_builder' && ! use_block_editor_for_post_type( $post->post_type ) ) {
			return;
		}

		$content = $post->post_content;

		// Check if content has any DigiBlocks blocks or reusable blocks
		if ( false === strpos( $content, '<!-- wp:digiblocks/' ) && false === strpos( $content, '<!-- wp:block ' ) ) {
			// No DigiBlocks found, clean up existing files
			$this->cleanup_block_assets( $post_id );
			return;
		}

		// Extract CSS and JS from blocks
		$css = $this->extract_block_css( $content, $post_id );
		$js  = $this->extract_block_js( $content, $post_id );

		// Generate assets
		$this->generate_css_file( $post_id, $css );
		$this->generate_js_file( $post_id, $js );
		
		// Clear builder cache if this is a builder post
		if ( $post->post_type === 'digi_builder' ) {
			delete_transient( 'digiblocks_active_builders' );
		}
	}

	/**
	 * Clear builder cache when builder posts are modified
	 */
	public function clear_builder_cache() {
		delete_transient( 'digiblocks_active_builders' );
	}

	/**
	 * Consolidate all script data into a single wp_localize_script call
	 *
	 * @param string $script_handle Script handle to attach data to
	 * @param array  $blocks Array of parsed blocks
	 */
	private function enqueue_consolidated_script_data( $script_handle, $blocks ) {
		// Get settings once
		$settings = get_option( 'digiblocks_settings', array() );
		
		// Initialize consolidated data array with common data
		$consolidated_data = array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
		);

		// Check for Forms blocks
		if ( $this->has_specific_block( $blocks, 'digiblocks/forms' ) ) {
			$recaptcha_site_key   = isset( $settings['recaptcha_site_key'] ) ? $settings['recaptcha_site_key'] : '';
			$recaptcha_secret_key = isset( $settings['recaptcha_secret_key'] ) ? $settings['recaptcha_secret_key'] : '';

			// Enqueue Google reCAPTCHA if needed
			if ( ! empty( $recaptcha_site_key ) && ! empty( $recaptcha_secret_key ) ) {
				wp_enqueue_script(
					'google-recaptcha',
					'https://www.google.com/recaptcha/api.js?render=' . $recaptcha_site_key,
					array(),
					null,
					true
				);
			}

			$consolidated_data['forms'] = array(
				'form_nonce'         => wp_create_nonce( 'digiblocks_form_nonce' ),
				'recaptcha_site_key' => $recaptcha_site_key,
			);
		}

		// Check for Newsletter blocks
		if ( $this->has_specific_block( $blocks, 'digiblocks/newsletter' ) ) {
			$consolidated_data['newsletter'] = array(
				'nonce' => wp_create_nonce( 'digiblocks_newsletter_nonce' ),
			);
		}

		// Apply filter to allow pro version to add more script data
		$consolidated_data = apply_filters( 'digiblocks_consolidated_script_data', $consolidated_data, $blocks, $script_handle );

		// Check if DigiFusion Builder is active and needs to add data
		$builder_data = $this->get_digifusion_builder_data();
		if ( ! empty( $builder_data ) ) {
			// Merge builder data with consolidated data, avoiding duplicates
			$consolidated_data = array_merge( $consolidated_data, $builder_data );
			
			// Set a flag to prevent DigiFusion Builder from adding duplicate data
			if ( ! defined( 'DIGIBLOCKS_HANDLED_BUILDER_DATA' ) ) {
				define( 'DIGIBLOCKS_HANDLED_BUILDER_DATA', true );
			}
		}

		// Only localize if we have more than just ajax_url
		if ( count( $consolidated_data ) > 1 ) {
			wp_localize_script( $script_handle, 'digiBlocksData', $consolidated_data );
		}
	}

	/**
	 * Get DigiFusion Builder data if needed
	 *
	 * @return array Builder data array
	 */
	private function get_digifusion_builder_data() {
		// Check if DigiFusion Builder class exists and is initialized
		if ( ! class_exists( 'DigiFusion_Builder' ) ) {
			return array();
		}

		// Get the builder instance
		$builder = DigiFusion_Builder::get_instance();
		
		// Check if builder has a method to get required data
		if ( ! method_exists( $builder, 'get_required_script_data' ) ) {
			return array();
		}

		// Get the data from builder
		return $builder->get_required_script_data();
	}

	/**
	 * Generic method to check for specific block types recursively
	 *
	 * @param array  $blocks Array of parsed blocks.
	 * @param string $block_name Block name to search for.
	 * @return bool True if block is found.
	 */
	private function has_specific_block( $blocks, $block_name ) {
		foreach ( $blocks as $block ) {
			// Handle reusable blocks
			if ( isset( $block['blockName'] ) && $block['blockName'] === 'core/block' ) {
				if ( isset( $block['attrs']['ref'] ) ) {
					$reusable_block_id = $block['attrs']['ref'];
					
					// Check cache first
					$cached_result = $this->get_cached_reusable_processing( $reusable_block_id, 'specific_block', $block_name );
					if ( false !== $cached_result ) {
						if ( $cached_result ) {
							return true;
						}
						continue;
					}
					
					$reusable_blocks = $this->get_cached_reusable_block( $reusable_block_id );
					if ( ! empty( $reusable_blocks ) ) {
						$has_block = $this->has_specific_block( $reusable_blocks, $block_name );
						$this->set_cached_reusable_processing( $reusable_block_id, 'specific_block', $has_block, $block_name );
						if ( $has_block ) {
							return true;
						}
					}
				}
				continue;
			}
	
			if ( isset( $block['blockName'] ) && $block['blockName'] === $block_name ) {
				return true;
			}
			
			if ( ! empty( $block['innerBlocks'] ) ) {
				if ( $this->has_specific_block( $block['innerBlocks'], $block_name ) ) {
					return true;
				}
			}
		}
		
		return false;
	}

	/**
	 * Check if any DigiBlocks with animations are present on the page.
	 *
	 * @param array $blocks Array of parsed blocks.
	 * @return bool True if animations are found.
	 */
	private function has_block_animations( $blocks ) {
		foreach ( $blocks as $block ) {
			// Handle reusable blocks
			if ( isset( $block['blockName'] ) && $block['blockName'] === 'core/block' ) {
				if ( isset( $block['attrs']['ref'] ) ) {
					$reusable_block_id = $block['attrs']['ref'];
					
					// Check cache first
					$cached_result = $this->get_cached_reusable_processing( $reusable_block_id, 'animation' );
					if ( false !== $cached_result ) {
						if ( $cached_result ) {
							return true;
						}
						continue;
					}
					
					$reusable_blocks = $this->get_cached_reusable_block( $reusable_block_id );
					if ( ! empty( $reusable_blocks ) ) {
						$has_animations = $this->has_block_animations( $reusable_blocks );
						$this->set_cached_reusable_processing( $reusable_block_id, 'animation', $has_animations );
						if ( $has_animations ) {
							return true;
						}
					}
				}
				continue;
			}
	
			// Check if this is a DigiBlocks block with animation attribute
			if ( isset( $block['blockName'] ) && 
				0 === strpos( $block['blockName'], 'digiblocks/' ) && 
				isset( $block['attrs']['animation'] ) && 
				$block['attrs']['animation'] !== 'none' ) {
				return true;
			}
			
			// Check inner blocks recursively
			if ( ! empty( $block['innerBlocks'] ) ) {
				if ( $this->has_block_animations( $block['innerBlocks'] ) ) {
					return true;
				}
			}
		}
		
		return false;
	}

	/**
	 * Add admin menu.
	 */
	public function add_admin_menu() {
		$icon = 'data:image/svg+xml;base64,' . base64_encode( $this->get_plugin_icon() ); // phpcs:ignore

		add_menu_page(
			__( 'DigiBlocks', 'digiblocks' ),
			__( 'DigiBlocks', 'digiblocks' ),
			'manage_options',
			'digiblocks',
			array( $this, 'render_dashboard_page' ),
			$icon,
			50
		);

		add_submenu_page(
			'digiblocks',
			__( 'Dashboard', 'digiblocks' ),
			__( 'Dashboard', 'digiblocks' ),
			'manage_options',
			'digiblocks',
			array( $this, 'render_dashboard_page' )
		);

		add_submenu_page(
			'digiblocks',
			__( 'Settings', 'digiblocks' ),
			__( 'Settings', 'digiblocks' ),
			'manage_options',
			'digiblocks-settings',
			array( $this, 'render_settings_page' )
		);
	}

	/**
	 * Render dashboard page.
	 */
	public function render_dashboard_page() {
		include DIGIBLOCKS_PLUGIN_DIR . 'admin/dashboard.php';
	}

	/**
	 * Render settings page.
	 */
	public function render_settings_page() {
		include DIGIBLOCKS_PLUGIN_DIR . 'admin/settings.php';
	}

	/**
	 * Enqueue editor assets
	 */
	public function enqueue_editor_assets() {
		// First enqueue the globals script
		wp_enqueue_script(
			'digiblocks-globals',
			DIGIBLOCKS_PLUGIN_URL . 'assets/js/globals.js',
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-editor',
				'wp-components',
				'wp-data',
				'wp-block-editor',
			),
			DIGIBLOCKS_VERSION,
			true
		);

		// Enqueue individual block scripts with dependencies
		$this->enqueue_block_scripts();

		// Style for editor.
		wp_enqueue_style(
			'digiblocks-editor',
			DIGIBLOCKS_PLUGIN_URL . 'assets/css/blocks/editor.css',
			array( 'wp-edit-blocks' ),
			DIGIBLOCKS_VERSION
		);

		// Get settings
		$settings = get_option('digiblocks_settings', array());

		// Get default width and max width
		$content_width = !empty($settings['content_width']) ? intval($settings['content_width']) : 1200;
		$content_max_width = !empty($settings['content_max_width']) ? intval($settings['content_max_width']) : 90;

		// Google Map API key.
		$settings = get_option('digiblocks_settings', array());
		$google_maps_api_key = isset($settings['google_maps_api_key']) ? $settings['google_maps_api_key'] : '';
		$google_maps_map_id = isset($settings['google_maps_map_id']) ? $settings['google_maps_map_id'] : '';

		// Add FA icons to the editor.
		wp_localize_script(
			'digiblocks-globals',
			'digiBlocksData',
			array(
				'ajax_url'               => admin_url( 'admin-ajax.php' ),
				'admin_url'              => admin_url(),
				'fontAwesomeIcons'       => $this->get_fa_icons(),
				'blocks'                 => DigiBlocks_Blocks_Data::get_block_data(),
				'inactiveBlocks'         => get_option( 'digiblocks_inactive_blocks', array() ),
				'contentWidth'           => $content_width,
				'contentMaxWidth'        => $content_max_width,
				'googleMapsApiKey'       => $google_maps_api_key,
				'googleMapsMapId'        => $google_maps_map_id,
				'navigation_nonce'       => wp_create_nonce( 'digiblocks_nav_nonce' ),
				'isDigiActive'           => class_exists( 'DigiCommerce' ),
				'isDigiProActive'        => class_exists( 'DigiCommerce_Pro' ),
				'digiCurrency'           => ( class_exists( 'DigiCommerce' ) && class_exists( 'DigiCommerce_Product' ) ) ? DigiCommerce_Product::instance()->get_currency_symbol( DigiCommerce()->get_option( 'currency', 'USD' ) ) : '$',
        		'digiCurrencyPosition'   => class_exists( 'DigiCommerce' ) ? DigiCommerce()->get_option( 'currency_position', 'left' ) : 'left',
				'isWooActive'            => class_exists( 'WooCommerce' ),
				'lottie'                 => DIGIBLOCKS_PLUGIN_URL . 'assets/js/lottie.js',
				'postTypes'              => $this->get_searchable_post_types(),
				'homeUrl'                => home_url(),
				'image_search_nonce'     => wp_create_nonce( 'digiblocks_image_search_nonce' ),
				'image_search_available' => $this->is_image_search_available(),
			)
		);
	}

	/**
	 * Enqueue block scripts with proper dependencies
	 */
	private function enqueue_block_scripts() {
		$build_dir = DIGIBLOCKS_PLUGIN_DIR . 'assets/js/blocks/';
		
		if ( is_dir( $build_dir ) ) {
			$block_folders = array_filter( glob( $build_dir . '*' ), 'is_dir' );
			
			foreach ( $block_folders as $block_folder ) {
				$block_name = basename( $block_folder );
				$inactive_blocks = get_option( 'digiblocks_inactive_blocks', array() );
				
				if ( ! isset( $inactive_blocks[ $block_name ] ) || ! $inactive_blocks[ $block_name ] ) {
					$script_path = $block_folder . '/index.js';
					$script_handle = 'digiblocks-' . $block_name;
					
					if ( file_exists( $script_path ) && ! wp_script_is( $script_handle, 'enqueued' ) ) {
						wp_enqueue_script(
							$script_handle,
							DIGIBLOCKS_PLUGIN_URL . 'assets/js/blocks/' . $block_name . '/index.js',
							array( 'digiblocks-globals' ),
							DIGIBLOCKS_VERSION,
							true
						);
					}
				}
			}
		}
	}

	/**
	 * Get all available post types for search
	 * 
	 * @return array List of post types with labels
	 */
	public function get_searchable_post_types() {
		$post_types = get_post_types( array( 'public' => true ), 'objects' );
		$searchable_types = array();
		
		// Exclude certain post types that shouldn't be searchable
		$excluded_types = array( 'attachment', 'revision', 'nav_menu_item', 'custom_css', 'customize_changeset', 'oembed_cache', 'user_request', 'wp_block' );
		
		foreach ( $post_types as $post_type_slug => $post_type_object ) {
			if ( in_array( $post_type_slug, $excluded_types ) ) {
				continue;
			}
			
			$searchable_types[] = array(
				'label' => $post_type_object->labels->name,
				'value' => $post_type_slug,
			);
		}
		
		return $searchable_types;
	}

	/**
	 * Load icons from single JSON file
	 */
	private function load_fa_icons() {
		$icons_file = DIGIBLOCKS_PLUGIN_DIR . 'includes/icons/all-icons.json';
		
		if (!file_exists($icons_file)) {
			return array();
		}
		
		$file_contents = file_get_contents($icons_file);
		if ($file_contents === false) {
			return array();
		}
		
		$data = json_decode($file_contents, true);
		if (json_last_error() !== JSON_ERROR_NONE) {
			return array();
		}
		
		// Remove metadata
		unset($data['_metadata']);
		
		// Translate category titles if category list exists
		if (isset($data['digiblocks_category_list'])) {
			$data['digiblocks_category_list'] = $this->translate_category_titles($data['digiblocks_category_list']);
		}
		
		return $data;
	}

	/**
	 * Translate category titles
	 */
	private function translate_category_titles($categories) {
		$translations = array(
			// Styles
			'Solid' => __('Solid', 'digiblocks'),
			'Regular' => __('Regular', 'digiblocks'),
			'Brands' => __('Brands', 'digiblocks'),
			
			// Custom categories - only the ones actually used in the JSON
			'Navigation' => __('Navigation', 'digiblocks'),
			'Social' => __('Social', 'digiblocks'),
			'E-commerce' => __('E-commerce', 'digiblocks'),
			'Business' => __('Business', 'digiblocks'),
			'Users' => __('Users', 'digiblocks'),
			'Files' => __('Files', 'digiblocks'),
			'Charts' => __('Charts', 'digiblocks'),
			
			// Additional FA categories that might be used
			'Accessibility' => __('Accessibility', 'digiblocks'),
			'Animals' => __('Animals', 'digiblocks'),
			'Automotive' => __('Automotive', 'digiblocks'),
			'Buildings' => __('Buildings', 'digiblocks'),
			'Clothing' => __('Clothing', 'digiblocks'),
			'Communication' => __('Communication', 'digiblocks'),
			'Computers' => __('Computers', 'digiblocks'),
			'Design' => __('Design', 'digiblocks'),
			'Editors' => __('Editors', 'digiblocks'),
			'Energy' => __('Energy', 'digiblocks'),
			'Food' => __('Food', 'digiblocks'),
			'Games' => __('Games', 'digiblocks'),
			'Hands' => __('Hands', 'digiblocks'),
			'Health' => __('Health', 'digiblocks'),
			'Household' => __('Household', 'digiblocks'),
			'Maps' => __('Maps', 'digiblocks'),
			'Mathematical' => __('Mathematical', 'digiblocks'),
			'Media' => __('Media', 'digiblocks'),
			'Money' => __('Money', 'digiblocks'),
			'Music' => __('Music', 'digiblocks'),
			'Nature' => __('Nature', 'digiblocks'),
			'Objects' => __('Objects', 'digiblocks'),
			'Religion' => __('Religion', 'digiblocks'),
			'Science' => __('Science', 'digiblocks'),
			'Security' => __('Security', 'digiblocks'),
			'Shapes' => __('Shapes', 'digiblocks'),
			'Shopping' => __('Shopping', 'digiblocks'),
			'Sports' => __('Sports', 'digiblocks'),
			'Technology' => __('Technology', 'digiblocks'),
			'Time' => __('Time', 'digiblocks'),
			'Toggle' => __('Toggle', 'digiblocks'),
			'Transportation' => __('Transportation', 'digiblocks'),
			'Travel' => __('Travel', 'digiblocks'),
			'Weather' => __('Weather', 'digiblocks'),
			'Writing' => __('Writing', 'digiblocks'),
		);
		
		// Translate the titles for categories that exist
		foreach ($categories as &$category) {
			if (isset($translations[$category['title']])) {
				$category['title'] = $translations[$category['title']];
			}
		}
		
		return $categories;
	}

	/**
	 * Get Font Awesome icons with caching
	 */
	public function get_fa_icons() {
		// Include locale in cache key so each language gets its own cache
		$locale = get_locale();
		$cache_key = 'digiblocks_fa_icons_cache_' . DIGIBLOCKS_VERSION . '_' . $locale;
		$icons = get_transient($cache_key);
		
		if ($icons === false) {
			$icons = $this->load_fa_icons();
			
			if (!empty($icons)) {
				$icons = apply_filters('digiblocks_fa_icons', $icons);
				// Cache for 1 hour
				set_transient($cache_key, $icons, 3600);
			}
		}
		
		return $icons;
	}

	/**
	 * Enqueue admin scripts.
	 *
	 * @param string $hook Hook suffix.
	 */
	public function enqueue_admin_scripts( $hook ) {
		// Load only on DigiBlocks admin pages.
		if ( 'toplevel_page_digiblocks' === $hook || 'digiblocks_page_digiblocks-settings' === $hook || 'digiblocks_page_digiblocks-updates' === $hook ) {
			wp_enqueue_style(
				'digiblocks-admin',
				DIGIBLOCKS_PLUGIN_URL . 'assets/css/admin/admin.css',
				array(),
				DIGIBLOCKS_VERSION
			);

			wp_enqueue_script(
				'digiblocks-admin',
				DIGIBLOCKS_PLUGIN_URL . 'assets/js/admin/admin.js',
				array( 'wp-api', 'wp-i18n' ),
				DIGIBLOCKS_VERSION,
				true
			);

			wp_localize_script(
				'digiblocks-admin',
				'digiBlocksAdmin',
				array(
					'apiNonce' => wp_create_nonce( 'wp_rest' ),
					'apiUrl'   => rest_url( 'digiblocks/v1/' ),
					'ajaxUrl'  => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'digiblocks_plugin_action' ),
					'strings'  => array(
						// General strings
						'saving'               => __( 'Saving...', 'digiblocks' ),
						'saved'                => __( 'Settings saved successfully!', 'digiblocks' ),
						'saveError'            => __( 'Error saving settings.', 'digiblocks' ),
						'networkError'         => __( 'Network error occurred. Please try again.', 'digiblocks' ),
						
						// Regenerate functionality
						'regenerateButton'     => __( 'Regenerate All Assets', 'digiblocks' ),
						'confirmRegenerate'    => __( 'This will regenerate all DigiBlocks assets including builder elements. This may take a few moments. Continue?', 'digiblocks' ),
						'regenerating'         => __( 'Regenerating assets...', 'digiblocks' ),
						'postsProcessed'       => __( 'Posts processed: ', 'digiblocks' ),
						'buildersProcessed'    => __( 'Builders processed: ', 'digiblocks' ),
						'cssFiles'             => __( 'CSS files: ', 'digiblocks' ),
						'jsFiles'              => __( 'JS files: ', 'digiblocks' ),
						'fontFiles'            => __( 'Font files: ', 'digiblocks' ),
						'errors'               => __( 'Errors:', 'digiblocks' ),
						'regenerateError'      => __( 'An error occurred while regenerating assets.', 'digiblocks' ),
						'regenerateSuccess'    => __( 'Assets regenerated successfully!', 'digiblocks' ),
						
						// Block management
						'blockActivated'       => __( 'Block activated', 'digiblocks' ),
						'blockDeactivated'     => __( 'Block deactivated', 'digiblocks' ),
						'blockSaveError'       => __( 'Error saving block settings', 'digiblocks' ),

						// Plugin/theme installation and activation
						'installing'    => __( 'Installing...', 'digiblocks' ),
						'activating'    => __( 'Activating...', 'digiblocks' ),
						'install_plugin' => __( 'Install Plugin', 'digiblocks' ),
						'install_theme'  => __( 'Install Theme', 'digiblocks' ),
						'activate_plugin' => __( 'Activate Plugin', 'digiblocks' ),
						'activate_theme'  => __( 'Activate Theme', 'digiblocks' ),
						'learn_more'     => __( 'Learn More', 'digiblocks' ),
						'error'          => __( 'An error occurred. Please try again.', 'digiblocks' ),
					),
				)
			);
		}
	}

	/**
	 * Register REST API routes.
	 */
	public function register_rest_routes() {
		register_rest_route(
			'digiblocks/v1',
			'/update-settings',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'update_settings' ),
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);

		register_rest_route(
			'digiblocks/v1',
			'/update-blocks',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'update_active_blocks' ),
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);

		register_rest_route(
			'digiblocks/v1',
			'/regenerate-assets',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'regenerate_all_assets' ),
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);
	}

	/**
	 * Update settings.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response Response object.
	 */
	public function update_settings( $request ) {
		$settings         = $request->get_json_params();
		$current_settings = get_option( 'digiblocks_settings', array() );

		// Check for font loading mode change
		$font_setting_changed = false;
		$new_use_local_fonts = isset($settings['google_fonts_local']) ? (bool) $settings['google_fonts_local'] : false;
		$old_use_local_fonts = isset($current_settings['google_fonts_local']) ? (bool) $current_settings['google_fonts_local'] : false;
		
		if ($new_use_local_fonts !== $old_use_local_fonts) {
			$font_setting_changed = true;
		}

		// Validate settings.
		$validated_settings = array(
			'content_width'        => isset( $settings['content_width'] ) ? sanitize_text_field( $settings['content_width'] ) : $current_settings['content_width'],
			'content_max_width'    => isset( $settings['content_max_width'] ) ? sanitize_text_field( $settings['content_max_width'] ) : $current_settings['content_max_width'],
			'recaptcha_site_key'   => isset( $settings['recaptcha_site_key'] ) ? sanitize_text_field( $settings['recaptcha_site_key'] ) : $current_settings['recaptcha_site_key'],
			'recaptcha_secret_key' => isset( $settings['recaptcha_secret_key'] ) ? sanitize_text_field( $settings['recaptcha_secret_key'] ) : $current_settings['recaptcha_secret_key'],
			'google_maps_api_key'  => isset( $settings['google_maps_api_key'] ) ? sanitize_text_field( $settings['google_maps_api_key'] ) : $current_settings['google_maps_api_key'],
			'google_maps_map_id'   => isset( $settings['google_maps_map_id'] ) ? sanitize_text_field( $settings['google_maps_map_id'] ) : $current_settings['google_maps_map_id'],
			'google_fonts_local'   => $new_use_local_fonts,
			'enable_schema_markup' => isset( $settings['enable_schema_markup'] ) ? (bool) $settings['enable_schema_markup'] : $current_settings['enable_schema_markup'],
			'image_api_provider'  => isset( $settings['image_api_provider'] ) ? sanitize_text_field( $settings['image_api_provider'] ) : ( isset( $current_settings['image_api_provider'] ) ? $current_settings['image_api_provider'] : '' ),
			
			// Unsplash
			'unsplash_application_id' => isset( $settings['unsplash_application_id'] ) ? sanitize_text_field( $settings['unsplash_application_id'] ) : ( isset( $current_settings['unsplash_application_id'] ) ? $current_settings['unsplash_application_id'] : '' ),
			'unsplash_access_key'     => isset( $settings['unsplash_access_key'] ) ? sanitize_text_field( $settings['unsplash_access_key'] ) : ( isset( $current_settings['unsplash_access_key'] ) ? $current_settings['unsplash_access_key'] : '' ),
			'unsplash_secret_key'     => isset( $settings['unsplash_secret_key'] ) ? sanitize_text_field( $settings['unsplash_secret_key'] ) : ( isset( $current_settings['unsplash_secret_key'] ) ? $current_settings['unsplash_secret_key'] : '' ),
			
			// Pexels  
			'pexels_api_key'      => isset( $settings['pexels_api_key'] ) ? sanitize_text_field( $settings['pexels_api_key'] ) : ( isset( $current_settings['pexels_api_key'] ) ? $current_settings['pexels_api_key'] : '' ),

			// Pixabay
			'pixabay_api_key'     => isset( $settings['pixabay_api_key'] ) ? sanitize_text_field( $settings['pixabay_api_key'] ) : ( isset( $current_settings['pixabay_api_key'] ) ? $current_settings['pixabay_api_key'] : '' ),

			
			// Newsletter settings
			'newsletter_platform'  => isset( $settings['newsletter_platform'] ) ? sanitize_text_field( $settings['newsletter_platform'] ) : ( isset( $current_settings['newsletter_platform'] ) ? $current_settings['newsletter_platform'] : '' ),
			
			// MailChimp
			'mailchimp_api_key'       => isset( $settings['mailchimp_api_key'] ) ? sanitize_text_field( $settings['mailchimp_api_key'] ) : ( isset( $current_settings['mailchimp_api_key'] ) ? $current_settings['mailchimp_api_key'] : '' ),
			'mailchimp_audience_id'   => isset( $settings['mailchimp_audience_id'] ) ? sanitize_text_field( $settings['mailchimp_audience_id'] ) : ( isset( $current_settings['mailchimp_audience_id'] ) ? $current_settings['mailchimp_audience_id'] : '' ),
			'mailchimp_tags'          => isset( $settings['mailchimp_tags'] ) ? sanitize_text_field( $settings['mailchimp_tags'] ) : ( isset( $current_settings['mailchimp_tags'] ) ? $current_settings['mailchimp_tags'] : '' ),
			'mailchimp_double_optin'  => isset( $settings['mailchimp_double_optin'] ) ? (bool) $settings['mailchimp_double_optin'] : ( isset( $current_settings['mailchimp_double_optin'] ) ? $current_settings['mailchimp_double_optin'] : false ),
			
			// ActiveCampaign
			'activecampaign_api_url'  => isset( $settings['activecampaign_api_url'] ) ? esc_url_raw( $settings['activecampaign_api_url'] ) : ( isset( $current_settings['activecampaign_api_url'] ) ? $current_settings['activecampaign_api_url'] : '' ),
			'activecampaign_api_key'  => isset( $settings['activecampaign_api_key'] ) ? sanitize_text_field( $settings['activecampaign_api_key'] ) : ( isset( $current_settings['activecampaign_api_key'] ) ? $current_settings['activecampaign_api_key'] : '' ),
			'activecampaign_list_id'  => isset( $settings['activecampaign_list_id'] ) ? sanitize_text_field( $settings['activecampaign_list_id'] ) : ( isset( $current_settings['activecampaign_list_id'] ) ? $current_settings['activecampaign_list_id'] : '' ),
			'activecampaign_tags'     => isset( $settings['activecampaign_tags'] ) ? sanitize_text_field( $settings['activecampaign_tags'] ) : ( isset( $current_settings['activecampaign_tags'] ) ? $current_settings['activecampaign_tags'] : '' ),
			
			// Brevo
			'brevo_api_key'           => isset( $settings['brevo_api_key'] ) ? sanitize_text_field( $settings['brevo_api_key'] ) : ( isset( $current_settings['brevo_api_key'] ) ? $current_settings['brevo_api_key'] : '' ),
			'brevo_list_id'           => isset( $settings['brevo_list_id'] ) ? sanitize_text_field( $settings['brevo_list_id'] ) : ( isset( $current_settings['brevo_list_id'] ) ? $current_settings['brevo_list_id'] : '' ),
			
			// Klaviyo
			'klaviyo_api_key'         => isset( $settings['klaviyo_api_key'] ) ? sanitize_text_field( $settings['klaviyo_api_key'] ) : ( isset( $current_settings['klaviyo_api_key'] ) ? $current_settings['klaviyo_api_key'] : '' ),
			'klaviyo_list_id'         => isset( $settings['klaviyo_list_id'] ) ? sanitize_text_field( $settings['klaviyo_list_id'] ) : ( isset( $current_settings['klaviyo_list_id'] ) ? $current_settings['klaviyo_list_id'] : '' ),
			
			// ConvertKit
			'convertkit_api_key'      => isset( $settings['convertkit_api_key'] ) ? sanitize_text_field( $settings['convertkit_api_key'] ) : ( isset( $current_settings['convertkit_api_key'] ) ? $current_settings['convertkit_api_key'] : '' ),
			'convertkit_form_id'      => isset( $settings['convertkit_form_id'] ) ? sanitize_text_field( $settings['convertkit_form_id'] ) : ( isset( $current_settings['convertkit_form_id'] ) ? $current_settings['convertkit_form_id'] : '' ),
			'convertkit_tags'         => isset( $settings['convertkit_tags'] ) ? sanitize_text_field( $settings['convertkit_tags'] ) : ( isset( $current_settings['convertkit_tags'] ) ? $current_settings['convertkit_tags'] : '' ),
			
			// MailerLite
			'mailerlite_api_key'      => isset( $settings['mailerlite_api_key'] ) ? sanitize_text_field( $settings['mailerlite_api_key'] ) : ( isset( $current_settings['mailerlite_api_key'] ) ? $current_settings['mailerlite_api_key'] : '' ),
			'mailerlite_group_id'     => isset( $settings['mailerlite_group_id'] ) ? sanitize_text_field( $settings['mailerlite_group_id'] ) : ( isset( $current_settings['mailerlite_group_id'] ) ? $current_settings['mailerlite_group_id'] : '' ),
		);

		update_option( 'digiblocks_settings', $validated_settings );

		// Process all fonts if the font loading setting changed
		if ($font_setting_changed) {
			// Get the existing fonts manager instance
			$fonts_handler = DigiBlocks_Fonts::get_instance();
			$fonts_handler->process_all_fonts_on_setting_change($new_use_local_fonts);
		}

		return rest_ensure_response(
			array(
				'success' => true,
				'message' => __( 'Settings updated successfully.', 'digiblocks' ),
			)
		);
	}

	/**
	 * Update active blocks.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response Response object.
	 */
	public function update_active_blocks( $request ) {
		$blocks_status = $request->get_json_params();
		$inactive_blocks = array();
		
		// Find blocks that are set as inactive
		foreach ( $blocks_status as $block_name => $is_active ) {
			if ( ! $is_active ) {
				$inactive_blocks[$block_name] = true;
			}
		}
		
		// Save only the inactive blocks
		update_option( 'digiblocks_inactive_blocks', $inactive_blocks );

		return rest_ensure_response(
			array(
				'success' => true,
				'message' => __( 'Block settings updated successfully.', 'digiblocks' ),
			)
		);
	}

	/**
	 * Get active status for a block
	 *
	 * @param string $block_name Block name
	 * @return bool Whether the block is active
	 */
	public function get_block_active_status( $block_name ) {
		// Get list of inactive blocks
		$inactive_blocks = get_option('digiblocks_inactive_blocks', array());
		
		// If block is in the inactive list, it's not active
		if (isset($inactive_blocks[$block_name]) && $inactive_blocks[$block_name] === true) {
			return false;
		}
		
		// By default, all blocks are active if not explicitly deactivated
		return true;
	}

	/**
	 * Regenerate all DigiBlocks assets including builder elements.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response Response object.
	 */
	public function regenerate_all_assets( $request ) {
		// Increase execution time for large sites
		set_time_limit( 300 );
	
		// Clear reusable block cache before regeneration
		$this->clear_reusable_block_cache();
	
		$regenerated = array(
			'posts' => 0,
			'builders' => 0,
			'templates' => 0,
			'css_files' => 0,
			'js_files' => 0,
			'font_files' => 0,
			'errors' => array(),
		);
	
		try {
			// Get all public post types
			$post_types = get_post_types( array( 'public' => true ) );
			
			// Add DigiFusion Builder post type if it exists
			if ( post_type_exists( 'digi_builder' ) ) {
				$post_types[] = 'digi_builder';
			}
			
			// Get all posts that might contain blocks
			$posts = get_posts( array(
				'post_type'      => $post_types,
				'post_status'    => array( 'publish', 'private', 'draft' ),
				'posts_per_page' => -1,
				'suppress_filters' => false,
			) );
	
			// Process each post
			foreach ( $posts as $post ) {
				try {
					// Skip if post type doesn't support block editor (except for digi_builder)
					if ( $post->post_type !== 'digi_builder' && ! use_block_editor_for_post_type( $post->post_type ) ) {
						continue;
					}
	
					$content = $post->post_content;
	
					// Check if content has any DigiBlocks blocks (including Pro blocks)
					if ( false === strpos( $content, '<!-- wp:digiblocks/' ) && false === strpos( $content, '<!-- wp:block ' ) ) {
						// Clean up existing files for posts without DigiBlocks
						$this->cleanup_block_assets( $post->ID );
						continue;
					}
	
					// Use the existing generate_block_assets method which now works with Pro blocks
					$this->generate_block_assets( $post->ID, $post );
	
					// Check if files were actually created
					$css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post->ID . '.css';
					$js_file  = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post->ID . '.js';
	
					if ( file_exists( $css_file ) ) {
						$regenerated['css_files']++;
					}
	
					if ( file_exists( $js_file ) ) {
						$regenerated['js_files']++;
					}
	
					// Process fonts if the fonts manager exists
					if ( class_exists( 'DigiBlocks_Fonts' ) ) {
						$fonts_handler = DigiBlocks_Fonts::get_instance();
						$fonts_handler->process_post_fonts( $post->ID, $post, true );
						$regenerated['font_files']++;
					}
	
					// Track if this was a builder or regular post
					if ( $post->post_type === 'digi_builder' ) {
						$regenerated['builders']++;
					} else {
						$regenerated['posts']++;
					}
	
				} catch ( Exception $e ) {
					$regenerated['errors'][] = sprintf(
						'Error processing %s ID %d (%s): %s',
						$post->post_type === 'digi_builder' ? 'builder' : 'post',
						$post->ID,
						$post->post_title,
						$e->getMessage()
					);
				} catch ( Error $e ) {
					$regenerated['errors'][] = sprintf(
						'Fatal error processing %s ID %d (%s): %s',
						$post->post_type === 'digi_builder' ? 'builder' : 'post',
						$post->ID,
						$post->post_title,
						$e->getMessage()
					);
				}
			}
	
			// Process block theme templates
			if ( wp_is_block_theme() ) {
				try {
					$template_content = $this->get_current_template_content();
					
					if ( ! empty( $template_content ) && 
						 ( false !== strpos( $template_content, '<!-- wp:digiblocks/' ) || false !== strpos( $template_content, '<!-- wp:block ' ) ) ) {
						
						$template_hash = substr( md5( $template_content ), 0, 6 );
						$this->generate_template_assets( $template_content, $template_hash );
						
						// Check if template files were created
						$template_css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-template-' . $template_hash . '.css';
						$template_js_file  = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-template-' . $template_hash . '.js';
	
						if ( file_exists( $template_css_file ) ) {
							$regenerated['css_files']++;
						}
	
						if ( file_exists( $template_js_file ) ) {
							$regenerated['js_files']++;
						}
	
						$regenerated['templates']++;
					}
				} catch ( Exception $e ) {
					$regenerated['errors'][] = 'Error processing template: ' . $e->getMessage();
				} catch ( Error $e ) {
					$regenerated['errors'][] = 'Fatal error processing template: ' . $e->getMessage();
				}
			}
	
			// Clean up orphaned files
			$this->cleanup_orphaned_assets();
	
			// Clear builder cache if DigiFusion Builder exists
			if ( class_exists( 'DigiFusion_Builder' ) ) {
				$this->clear_digifusion_builder_cache();
			}
	
			// Regenerate all fonts if local fonts are enabled
			$settings = get_option( 'digiblocks_settings', array() );
			$use_local_fonts = isset( $settings['google_fonts_local'] ) ? $settings['google_fonts_local'] : false;
			
			if ( $use_local_fonts && class_exists( 'DigiBlocks_Fonts' ) ) {
				try {
					$fonts_handler = DigiBlocks_Fonts::get_instance();
					$fonts_handler->process_all_fonts_on_setting_change( true );
				} catch ( Exception $e ) {
					$regenerated['errors'][] = 'Error processing fonts: ' . $e->getMessage();
				}
			}
	
			// Create success message
			$message_parts = array();
			if ( $regenerated['posts'] > 0 ) {
				$message_parts[] = sprintf( '%d posts', $regenerated['posts'] );
			}
			if ( $regenerated['builders'] > 0 ) {
				$message_parts[] = sprintf( '%d builders', $regenerated['builders'] );
			}
			if ( $regenerated['templates'] > 0 ) {
				$message_parts[] = sprintf( '%d templates', $regenerated['templates'] );
			}
			
			$processed_items = ! empty( $message_parts ) ? implode( ', ', $message_parts ) : '0 items';
	
			return rest_ensure_response( array(
				'success' => true,
				'message' => sprintf(
					__( 'Successfully regenerated assets for %s. Created %d CSS files, %d JS files, and processed %d font files.', 'digiblocks' ),
					$processed_items,
					$regenerated['css_files'],
					$regenerated['js_files'],
					$regenerated['font_files']
				),
				'details' => $regenerated,
			) );
	
		} catch ( Exception $e ) {
			return rest_ensure_response( array(
				'success' => false,
				'message' => sprintf(
					__( 'Error regenerating assets: %s', 'digiblocks' ),
					$e->getMessage()
				),
			) );
		} catch ( Error $e ) {
			return rest_ensure_response( array(
				'success' => false,
				'message' => sprintf(
					__( 'Fatal error regenerating assets: %s', 'digiblocks' ),
					$e->getMessage()
				),
			) );
		}
	}

	/**
	 * Clear DigiFusion Builder cache after regeneration
	 */
	private function clear_digifusion_builder_cache() {
		// Clear the builder cache so the new assets are loaded
		global $wpdb;
		
		// Delete all DigiFusion builder transients
		$wpdb->query(
			$wpdb->prepare(
				"DELETE FROM $wpdb->options WHERE option_name LIKE %s",
				'_transient_digifusion_builders_%'
			)
		);
		
		// Also delete the timeout entries
		$wpdb->query(
			$wpdb->prepare(
				"DELETE FROM $wpdb->options WHERE option_name LIKE %s",
				'_transient_timeout_digifusion_builders_%'
			)
		);
	}

	/**
	 * Enhanced cleanup_orphaned_assets to include builder files
	 */
	private function cleanup_orphaned_assets() {
		if ( ! file_exists( DIGIBLOCKS_ASSETS_DIR ) ) {
			return;
		}
	
		// Get all existing posts including builders
		$post_types = get_post_types( array( 'public' => true ) );
		
		// Add DigiFusion Builder post type if it exists
		if ( post_type_exists( 'digi_builder' ) ) {
			$post_types[] = 'digi_builder';
		}
	
		$existing_posts = get_posts( array(
			'post_type'      => $post_types,
			'post_status'    => array( 'publish', 'private', 'draft', 'future', 'pending' ),
			'posts_per_page' => -1,
			'fields'         => 'ids',
		) );
	
		$existing_post_ids = array_flip( $existing_posts );
	
		// Get all files in the assets directory
		$files = glob( DIGIBLOCKS_ASSETS_DIR . '/digiblocks-*.{css,js}', GLOB_BRACE );
		
		if ( ! $files ) {
			return;
		}
	
		// Get current template content hash for comparison
		$current_template_content = '';
		if ( wp_is_block_theme() ) {
			$current_template_content = $this->get_current_template_content();
		}
		$current_template_hash = ! empty( $current_template_content ) ? md5( $current_template_content ) : '';
	
		foreach ( $files as $file ) {
			$filename = basename( $file );
			$should_delete = false;
			
			// Extract post ID from filename (digiblocks-{post_id}.css or digiblocks-{post_id}.js)
			if ( preg_match( '/^digiblocks-(\d+)\.(css|js)$/', $filename, $matches ) ) {
				$post_id = (int) $matches[1];
				
				// Delete file if post doesn't exist
				if ( ! isset( $existing_post_ids[ $post_id ] ) ) {
					$should_delete = true;
				}
			}
			
			// Handle font files (digiblocks-fonts-{post_id}.css)
			elseif ( preg_match( '/^digiblocks-fonts-(\d+)\.css$/', $filename, $matches ) ) {
				$post_id = (int) $matches[1];
				
				// Delete file if post doesn't exist
				if ( ! isset( $existing_post_ids[ $post_id ] ) ) {
					$should_delete = true;
				}
			}
			
			// Handle template files (digiblocks-template-{hash}.css or digiblocks-template-{hash}.js)
			elseif ( preg_match( '/^digiblocks-template-([a-f0-9]{32})\.(css|js)$/', $filename, $matches ) ) {
				$template_hash = $matches[1];
				
				// Delete template files if they don't match the current template
				if ( empty( $current_template_hash ) || $template_hash !== $current_template_hash ) {
					$should_delete = true;
				}
			}
			
			// Delete the file if it should be removed
			if ( $should_delete ) {
				wp_delete_file( $file );
			}
		}
	}

	/**
	 * Get plugin icon.
	 *
	 * @return string SVG icon.
	 */
	private function get_plugin_icon() {
		return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" fill="#fff"><path d="m48.9542389 5.0452399-21.4456806 11.5626397c9.7644787 5.3564796 4.6071224 2.5277596 21.4441586 11.7617607l21.4472008-11.7617588z"/><path d="m25.1662388 45.1154823-21.4456787 11.5611191c9.5319195 5.2303162 4.5615196 2.5034409 21.4441586 11.7617607l21.3712006-11.7207184c-6.8780023-3.8136863-2.5885583-1.4774398-21.3696805-11.6021614z"/><path d="m26.2788792 94.9547577 21.5551204-11.9487152v-24.4491997l-21.5551204 11.8210411z"/><path d="m72.7376785 45.1154823c-18.8555984 10.1642342-14.6254425 7.862957-21.3712005 11.6021614 8.4952812 4.6618423 4.0827217 2.2419968 21.3696823 11.7222443l21.4472046-11.7617607z"/><path d="m71.6204758 42.9358025v-24.4492035l-21.5551186 11.8210411v24.4917603c7.0406418-3.7939225 2.7223206-1.4242402 21.5551186-11.8635979z"/><path d="m50.0714417 58.5568428v24.4491997l21.5444793 11.9487152v-24.5783997c-18.2627983-10.0198402-13.8046417-7.5741577-21.5444793-11.8195152z"/><path d="m47.8324776 54.7963562v-24.4902363c-17.3903179-9.5410404-12.936718-7.0984001-21.5444775-11.819519v24.4492016c18.6853619 10.3633613 14.3518391 7.983036 21.5444775 11.8605537z"/><path d="m73.8488007 94.9547577 21.5551147-11.9487152v-24.4491997l-21.5551147 11.8210411z"/><path d="m2.5 58.5568428v24.4491997l21.5444794 11.9487152v-24.5783997c-17.2352791-9.4574394-12.7771197-7.0102386-21.5444794-11.8195152z"/><path d="m97.3297577 55.9622002c.059288.0440788.1185608.0896759.1489639.1489601.0106354.0167236.0121613.0349579.0212784.0516815-.0075989-.0182419-.0060806-.0395241-.0151978-.0562401-.0364761-.0623207-.1018448-.0987968-.1504745-.1519966-.0775223-.0881577-.1413651-.1869621-.2447205-.247757l.0015182.0015182c.1048737.0607949.1641541.1641503.2386323.2538339z"/></svg>';
	}

	/**
	 * Check if schema markup is enabled
	 *
	 * @return bool Whether schema markup is enabled
	 */
	public function is_schema_markup_enabled() {
		$settings = get_option( 'digiblocks_settings', array() );
		return isset( $settings['enable_schema_markup'] ) ? $settings['enable_schema_markup'] : true;
	}

	/**
	 * Initialize conditional handlers based on settings and usage.
	 */
	public function init_conditional_handlers() {
		// Initialize forms handler if needed
		$this->init_forms_handler();
		
		// Initialize newsletter handler if needed
		$this->init_newsletter_handler();
		
		// Initialize image API handler if needed
		$this->init_image_api_handler();
	}

	/**
	 * Initialize forms handler if needed.
	 */
	public function init_forms_handler() {
		// First, check if the forms block is even active in settings
		if (!$this->get_block_active_status('forms')) {
			return;
		}

		// Check if it's an AJAX form submission
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$is_form_submission = defined( 'DOING_AJAX' ) && DOING_AJAX && isset( $_POST['action'] ) && $_POST['action'] === 'digiblocks_submit_form';
		

		// Case 1: AJAX form submission - load the handler directly
		if ( $is_form_submission ) {
			$this->load_forms_handler();
			return;
		}

		// Case 2: Check if current page contains forms block
		global $post;
		if ( $post && has_blocks( $post->post_content ) ) {
			$blocks = parse_blocks( $post->post_content );
			if ( $this->has_specific_block( $blocks, 'digiblocks/forms' ) ) {
				$this->load_forms_handler();
			}
		}
	}

	/**
	 * Load the forms handler file if it hasn't been loaded yet.
	 */
	private function load_forms_handler() {
		static $handler_loaded = false;

		// Only load the handler once
		if ( ! $handler_loaded ) {
			$handler_file = DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-forms-handler.php';

			if ( file_exists( $handler_file ) ) {
				require_once $handler_file;
				$handler_loaded = true;
			}
		}
	}

	/**
	 * Initialize newsletter handler if needed.
	 */
	public function init_newsletter_handler() {
		// First, check if the newsletter block is even active in settings
		if (!$this->get_block_active_status('newsletter')) {
			return;
		}

		// Check if it's an AJAX newsletter submission
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$is_newsletter_submission = defined( 'DOING_AJAX' ) && DOING_AJAX && isset( $_POST['action'] ) && $_POST['action'] === 'digiblocks_newsletter_subscribe';
		

		// Case 1: AJAX newsletter submission - load the handler directly
		if ( $is_newsletter_submission ) {
			$this->load_newsletter_handler();
			return;
		}

		// Case 2: Check if current page contains newsletter block
		global $post;
		if ( $post && has_blocks( $post->post_content ) ) {
			$blocks = parse_blocks( $post->post_content );
			if ( $this->has_specific_block( $blocks, 'digiblocks/newsletter' ) ) {
				$this->load_newsletter_handler();
			}
		}
	}

	/**
	 * Load the newsletter handler file if it hasn't been loaded yet.
	 */
	private function load_newsletter_handler() {
		static $handler_loaded = false;

		// Only load the handler once
		if ( ! $handler_loaded ) {
			$handler_file = DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-newsletter-handler.php';

			if ( file_exists( $handler_file ) ) {
				require_once $handler_file;
				$handler_loaded = true;
			}
		}
	}

	/**
	 * Initialize image API handler if needed.
	 */
	private function init_image_api_handler() {
		// Get settings to check if image API is configured
		$settings = get_option( 'digiblocks_settings', array() );
		$image_api_provider = isset( $settings['image_api_provider'] ) ? $settings['image_api_provider'] : '';

		// Only load if provider is configured with required credentials
		if ( ! empty( $image_api_provider ) ) {
			$has_credentials = false;
			
			switch ( $image_api_provider ) {
				case 'unsplash':
					$has_credentials = ! empty( $settings['unsplash_access_key'] );
					break;
				case 'pexels':
					$has_credentials = ! empty( $settings['pexels_api_key'] );
					break;
				case 'pixabay':
					$has_credentials = ! empty( $settings['pixabay_api_key'] );
					break;
			}
			
			if ( $has_credentials ) {
				require_once DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-image-api-handler.php';
				new DigiBlocks_Image_API_Handler();
			}
		}
	}

	/**
	 * Check if image search is available
	 *
	 * @return bool Whether image search is available
	 */
	private function is_image_search_available() {
		$settings = get_option( 'digiblocks_settings', array() );
		$image_api_provider = isset( $settings['image_api_provider'] ) ? $settings['image_api_provider'] : '';
		
		if ( empty( $image_api_provider ) ) {
			return false;
		}
		
		// Check if the selected provider has the required credentials
		switch ( $image_api_provider ) {
			case 'unsplash':
				return ! empty( $settings['unsplash_access_key'] );
			case 'pexels':
				return ! empty( $settings['pexels_api_key'] );
			case 'pixabay':
				return ! empty( $settings['pixabay_api_key'] );
			default:
				return false;
		}
	}

	/**
	 * Get current template content from block theme
	 *
	 * @return string Template content
	 */
	private function get_current_template_content() {
		// Only proceed if we're using a block theme
		if ( ! wp_is_block_theme() ) {
			return '';
		}
		
		$template_content = '';
		
		try {
			// Get the current template
			$template = get_block_template( get_stylesheet() . '//' . get_page_template_slug() );
			
			// If no specific template, try to get the current template based on the query
			if ( ! $template ) {
				$template_hierarchy = array();
				
				if ( is_front_page() && is_home() ) {
					$template_hierarchy[] = 'front-page';
					$template_hierarchy[] = 'home';
					$template_hierarchy[] = 'index';
				} elseif ( is_front_page() ) {
					$template_hierarchy[] = 'front-page';
					$template_hierarchy[] = 'page';
					$template_hierarchy[] = 'index';
				} elseif ( is_home() ) {
					$template_hierarchy[] = 'home';
					$template_hierarchy[] = 'index';
				} elseif ( is_singular() ) {
					$post_type = get_post_type();
					$template_hierarchy[] = "single-{$post_type}";
					$template_hierarchy[] = 'single';
					$template_hierarchy[] = 'index';
				} elseif ( is_category() ) {
					$category = get_queried_object();
					$template_hierarchy[] = "category-{$category->slug}";
					$template_hierarchy[] = "category-{$category->term_id}";
					$template_hierarchy[] = 'category';
					$template_hierarchy[] = 'archive';
					$template_hierarchy[] = 'index';
				} elseif ( is_tag() ) {
					$tag = get_queried_object();
					$template_hierarchy[] = "tag-{$tag->slug}";
					$template_hierarchy[] = "tag-{$tag->term_id}";
					$template_hierarchy[] = 'tag';
					$template_hierarchy[] = 'archive';
					$template_hierarchy[] = 'index';
				} elseif ( is_author() ) {
					$author = get_queried_object();
					$template_hierarchy[] = "author-{$author->user_nicename}";
					$template_hierarchy[] = "author-{$author->ID}";
					$template_hierarchy[] = 'author';
					$template_hierarchy[] = 'archive';
					$template_hierarchy[] = 'index';
				} elseif ( is_date() ) {
					$template_hierarchy[] = 'date';
					$template_hierarchy[] = 'archive';
					$template_hierarchy[] = 'index';
				} elseif ( is_archive() ) {
					$post_type = get_post_type();
					if ( $post_type ) {
						$template_hierarchy[] = "archive-{$post_type}";
					}
					$template_hierarchy[] = 'archive';
					$template_hierarchy[] = 'index';
				} elseif ( is_search() ) {
					$template_hierarchy[] = 'search';
					$template_hierarchy[] = 'index';
				} elseif ( is_404() ) {
					$template_hierarchy[] = '404';
					$template_hierarchy[] = 'index';
				} else {
					$template_hierarchy[] = 'index';
				}
				
				// Try to get template from hierarchy
				foreach ( $template_hierarchy as $template_slug ) {
					$template = get_block_template( get_stylesheet() . '//' . $template_slug );
					if ( $template ) {
						break;
					}
				}
			}
			
			// Get template content
			if ( $template && isset( $template->content ) ) {
				$template_content = $template->content;
			}
			
			// Also get template parts used in the template
			if ( ! empty( $template_content ) ) {
				$template_content .= $this->get_template_parts_content( $template_content );
			}
			
		} catch ( Exception $e ) {
			// Silently handle errors
			return '';
		}
		
		return $template_content;
	}

	/**
	 * Get content from template parts referenced in template
	 *
	 * @param string $template_content Template content to scan
	 * @return string Combined template parts content
	 */
	private function get_template_parts_content( $template_content ) {
		$template_parts_content = '';
		
		// Parse blocks to find template parts
		$blocks = parse_blocks( $template_content );
		$template_parts_content .= $this->extract_template_parts_content( $blocks );
		
		return $template_parts_content;
	}

	/**
	 * Recursively extract template parts content
	 *
	 * @param array $blocks Array of parsed blocks
	 * @return string Combined template parts content
	 */
	private function extract_template_parts_content( $blocks ) {
		$content = '';
		
		foreach ( $blocks as $block ) {
			// Check if this is a template part block
			if ( isset( $block['blockName'] ) && $block['blockName'] === 'core/template-part' ) {
				if ( isset( $block['attrs']['slug'] ) ) {
					$template_part_slug = $block['attrs']['slug'];
					$template_part_theme = isset( $block['attrs']['theme'] ) ? $block['attrs']['theme'] : get_stylesheet();
					
					// Get the template part
					$template_part = get_block_template( $template_part_theme . '//' . $template_part_slug, 'wp_template_part' );
					
					if ( $template_part && isset( $template_part->content ) ) {
						$content .= $template_part->content;
						
						// Recursively get nested template parts
						$nested_blocks = parse_blocks( $template_part->content );
						$content .= $this->extract_template_parts_content( $nested_blocks );
					}
				}
			}
			
			// Check inner blocks
			if ( ! empty( $block['innerBlocks'] ) ) {
				$content .= $this->extract_template_parts_content( $block['innerBlocks'] );
			}
		}
		
		return $content;
	}

	/**
	 * Generate CSS and JS files for template content
	 *
	 * @param string $template_content Template content
	 * @param string $template_hash Unique hash for the template
	 */
	private function generate_template_assets( $template_content, $template_hash ) {
		// Extract CSS and JS from template blocks
		$css = $this->extract_block_css( $template_content, 'template-' . $template_hash );
		$js  = $this->extract_block_js( $template_content, 'template-' . $template_hash );
		
		// Generate CSS file
		$this->generate_template_css_file( $template_hash, $css );
		
		// Generate JS file
		$this->generate_template_js_file( $template_hash, $js );
	}

	/**
	 * Generate CSS file for template
	 *
	 * @param string $template_hash Template hash
	 * @param string $css CSS content
	 */
	private function generate_template_css_file( $template_hash, $css ) {
		// Initialize WP_Filesystem
		global $wp_filesystem;
		if ( ! is_object( $wp_filesystem ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			$filesystem_init = WP_Filesystem();
		}

		$css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-template-' . $template_hash . '.css';

		if ( empty( $css ) ) {
			// Clean up CSS file if it exists
			if ( $wp_filesystem && $wp_filesystem->exists( $css_file ) ) {
				$delete_result = $wp_filesystem->delete( $css_file );
			}
			return;
		}

		// Ensure digiblocks directory exists in uploads folder
		if ( ! file_exists( DIGIBLOCKS_ASSETS_DIR ) ) {
			$mkdir_result = wp_mkdir_p( DIGIBLOCKS_ASSETS_DIR );
		}

		// Direct file system access backup in case WP_Filesystem fails
		if ( ! $wp_filesystem || ! is_object( $wp_filesystem ) ) {
			if ( ! class_exists( 'WP_Filesystem_Direct' ) ) {
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';
			}
			$wp_filesystem_direct = new WP_Filesystem_Direct( null );
			$write_result = $wp_filesystem_direct->put_contents( $css_file, $this->minify_css( $css ), FS_CHMOD_FILE );
			return;
		}

		// Minify CSS and write file
		$put_result = $wp_filesystem->put_contents( $css_file, $this->minify_css( $css ), FS_CHMOD_FILE );
	}

	/**
	 * Generate JS file for template
	 *
	 * @param string $template_hash Template hash
	 * @param string $js JS content
	 */
	private function generate_template_js_file( $template_hash, $js ) {
		// Initialize WP_Filesystem
		global $wp_filesystem;
		if ( ! is_object( $wp_filesystem ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			$filesystem_init = WP_Filesystem();
		}

		$js_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-template-' . $template_hash . '.js';

		if ( empty( $js ) ) {
			// Clean up JS file if it exists
			if ( $wp_filesystem && $wp_filesystem->exists( $js_file ) ) {
				$delete_result = $wp_filesystem->delete( $js_file );
			}
			return;
		}

		// Ensure digiblocks directory exists in uploads folder
		if ( ! file_exists( DIGIBLOCKS_ASSETS_DIR ) ) {
			$mkdir_result = wp_mkdir_p( DIGIBLOCKS_ASSETS_DIR );
		}

		// Direct file system access backup in case WP_Filesystem fails
		if ( ! $wp_filesystem || ! is_object( $wp_filesystem ) ) {
			if ( ! class_exists( 'WP_Filesystem_Direct' ) ) {
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
				require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';
			}
			$wp_filesystem_direct = new WP_Filesystem_Direct( null );
			$write_result = $wp_filesystem_direct->put_contents( $js_file, $this->minify_js( $js ), FS_CHMOD_FILE );
			return;
		}

		// Minify JS and write file
		$put_result = $wp_filesystem->put_contents( $js_file, $this->minify_js( $js ), FS_CHMOD_FILE );
	}

	/**
	 * Handle template modification
	 *
	 * @param int     $post_id Post ID
	 * @param WP_Post $post Post object
	 * @param bool    $update Whether this is an update
	 * @param WP_Post $post_before Previous post object
	 */
	public function handle_template_modification( $post_id, $post, $update, $post_before ) {
		// Only handle wp_template and wp_template_part post types
		if ( ! in_array( $post->post_type, array( 'wp_template', 'wp_template_part' ), true ) ) {
			return;
		}

		// Skip autosaves and revisions
		if ( wp_is_post_autosave( $post_id ) || wp_is_post_revision( $post_id ) ) {
			return;
		}

		// Clear any existing template assets since template content has changed
		$this->cleanup_template_assets();
	}

	/**
	 * Handle template deletion
	 *
	 * @param int     $post_id Post ID
	 * @param WP_Post $post Post object
	 */
	public function handle_template_deletion( $post_id, $post ) {
		// Only handle wp_template and wp_template_part post types
		if ( ! in_array( $post->post_type, array( 'wp_template', 'wp_template_part' ), true ) ) {
			return;
		}

		// Clear any existing template assets since template was deleted
		$this->cleanup_template_assets();
	}

	/**
	 * Clean up template assets
	 */
	private function cleanup_template_assets() {
		if ( ! file_exists( DIGIBLOCKS_ASSETS_DIR ) ) {
			return;
		}

		// Get all template files
		$template_files = glob( DIGIBLOCKS_ASSETS_DIR . '/digiblocks-template-*.{css,js}', GLOB_BRACE );
		
		if ( $template_files ) {
			foreach ( $template_files as $file ) {
				wp_delete_file( $file );
			}
		}
	}

	/**
	 * Customize admin footer text
	 *
	 * @param string $text Footer text.
	 * @return string
	 */
	public function footer_text( $text ) {
		$screen = get_current_screen();

		if ( 'toplevel_page_digiblocks' === $screen->id || 'digiblocks_page_digiblocks-settings' === $screen->id ) {
			$text = sprintf(
				/* translators: %1$s: Plugin review link */
				esc_html__( 'Please rate %2$sDigiBlocks%3$s %4$s&#9733;&#9733;&#9733;&#9733;&#9733;%5$s on %6$sWordPress.org%7$s to help us spread the word.', 'digiblocks-pro' ),
				'https://wordpress.org/support/plugin/digiblocks/reviews/?filter=5#new-post',
				'<strong>',
				'</strong>',
				'<a href="https://wordpress.org/support/plugin/digiblocks/reviews/?filter=5#new-post" target="_blank" rel="noopener noreferrer">',
				'</a>',
				'<a href="https://wordpress.org/support/plugin/digiblocks/reviews/?filter=5#new-post" target="_blank" rel="noopener noreferrer">',
				'</a>'
			);
		}

		return $text;
	}

	/**
	 * Customize update footer version
	 *
	 * @param string $version Version text.
	 * @return string
	 */
	public function update_footer( $version ) {
		$screen = get_current_screen();

		if ( 'toplevel_page_digiblocks' === $screen->id || 'digiblocks_page_digiblocks-settings' === $screen->id ) {
			$version .= sprintf( ' | %1$s %2$s', 'DigiBlocks', DIGIBLOCKS_VERSION );
		}

		return $version;
	}
}