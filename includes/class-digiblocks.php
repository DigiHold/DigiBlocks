<?php
/**
 * DigiBlocks Plugin
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
		// Initialize actions and filters.
		$this->init_hooks();

		// Load the plugin text domain.
		add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );

		// Register block category.
		add_filter( 'block_categories_all', array( $this, 'register_block_category' ), 9999999, 2 );

		// Register blocks.
		add_action( 'init', array( $this, 'register_blocks' ) );

		// Register custom REST API routes.
		add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );

		// Enqueue edir assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ) );

		// Enqueue admin scripts.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );

		// Add admin menu.
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );

		// Setup file generation hooks.
		add_action( 'save_post', array( $this, 'generate_block_assets' ), 10, 3 );

		// Enqueue block assets on frontend
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_block_assets' ) );

		// Initialize fonts manager
		$this->init_fonts_manager();
	}

	/**
	 * Initialize hooks.
	 */
	private function init_hooks() {
		// Activation hook.
		register_activation_hook( DIGIBLOCKS_PLUGIN_FILE, array( $this, 'plugin_activation' ) );

		// Deactivation hook.
		register_deactivation_hook( DIGIBLOCKS_PLUGIN_FILE, array( $this, 'plugin_deactivation' ) );
	}

	/**
	 * Load plugin text domain.
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'digiblocks', false, dirname( DIGIBLOCKS_PLUGIN_BASE ) . '/languages' );
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
			'recaptcha_site_key'   => '',
			'recaptcha_secret_key' => '',
			'google_maps_api_key'  => '',
			'google_maps_map_id'   => '',
		);

		// Get all blocks and set them to active by default.
		$blocks        = $this->get_blocks_list();
		$active_blocks = array();

		foreach ( $blocks as $block ) {
			$active_blocks[ $block['name'] ] = true;
		}

		add_option( 'digiblocks_settings', $default_settings );
		add_option( 'digiblocks_active_blocks', $active_blocks );

		// Set transient to redirect to the dashboard on activation.
		set_transient( 'digiblocks_activation_redirect', true, 30 );
	}

	/**
	 * Plugin deactivation.
	 */
	public function plugin_deactivation() {
		// Nothing to do on deactivation.
	}

	/**
	 * Register block category.
	 *
	 * @param array   $categories Block categories.
	 * @param WP_Post $post Current post object.
	 * @return array Modified block categories.
	 */
	public function register_block_category( $categories, $post ) { // phpcs:ignore
		return array_merge(
			array(
				array(
					'slug'  => 'digiblocks',
					'title' => esc_html__( 'DigiBlocks', 'digiblocks' ),
					'icon'  => $this->get_category_icon(),
				),
			),
			$categories
		);
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
	 * Register all blocks.
	 */
	public function register_blocks() {
		$active_blocks = get_option( 'digiblocks_active_blocks', array() );
		$blocks        = $this->get_blocks_list();

		foreach ( $blocks as $block ) {
			if ( ! isset( $active_blocks[ $block['name'] ] ) || $active_blocks[ $block['name'] ] ) {
				$this->register_block( $block['name'] );
			}
		}
	}

	/**
	 * Get list of all blocks available in the plugin.
	 *
	 * @return array List of blocks.
	 */
	public function get_blocks_list() {
		$blocks      = array();
		$blocks_data = $this->get_block_data();

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
	 * Get block data (title, icon, description).
	 *
	 * @param string $block_name Block name.
	 * @return array|false Block data or false if not found.
	 */
	public function get_block_data( $block_name = '' ) {
		// Define all block data
		$blocks_data = array(
			'accordion' => array(
				'title'       => __( 'Accordion', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '448 512',
					'path'    => 'M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176L32 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l176 0 0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-176 0 0-176z',
				),
				'description' => __( 'Display a vertically stacked list of accordion items.', 'digiblocks' ),
			),
			'call-to-action' => array(
				'title'       => __( 'Call To Action', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '512 512',
					'path'    => 'M256 480c123.7 0 224-100.3 224-224S379.7 32 256 32S32 132.3 32 256c0 10.4 .7 20.6 2.1 30.6l-9.6 3.5c-7.8 2.9-14.7 7.7-19.9 13.9C1.5 288.5 0 272.4 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256c-16.4 0-32.5-1.5-48.1-4.5c6.2-5.3 11-12.1 13.9-19.9l3.5-9.6c10 1.4 20.2 2.1 30.6 2.1zm-7.7-64.2L260 383.9c68.8-2.1 124-58.6 124-127.9c0-70.7-57.3-128-128-128c-69.3 0-125.8 55.1-127.9 124L96.2 263.7c-.1-2.6-.2-5.1-.2-7.7c0-88.4 71.6-160 160-160s160 71.6 160 160s-71.6 160-160 160c-2.6 0-5.2-.1-7.7-.2zM271 261.5l-79.2 215c-2.3 6.2-8.1 10.3-14.7 10.5s-12.6-3.8-15.1-9.9l-30.5-74L27.3 507.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L108.9 380.5 34.9 350c-6.1-2.5-10-8.5-9.9-15.1s4.3-12.4 10.5-14.7l215-79.2c5.9-2.2 12.4-.7 16.8 3.7s5.9 11 3.7 16.8zM143.3 360c3.9 1.6 7.1 4.8 8.7 8.7l24 58.2L229 283 85.1 336l58.2 24z',
				),
				'description' => __( 'Add a beautiful call to action block.', 'digiblocks' ),
			),
			'countdown' => array(
				'title'       => __( 'Countdown', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '512 512',
					'path'    => 'M256 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-79.4C388.2 40.8 480 137.7 480 256c0 123.7-100.3 224-224 224S32 379.7 32 256c0-61.9 25.1-117.8 65.6-158.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C28.7 121.3 0 185.3 0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM171.3 148.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96z',
				),
				'description' => __( 'Display a beautiful countdown timer.', 'digiblocks' ),
			),
			'counter' => array(
				'title'       => __( 'Counter', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '576 512',
					'path'    => 'M448 48c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9L416 192l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-144zM171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6 144 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-377.4 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96zM428 392a52 52 0 1 1 0-104 52 52 0 1 1 0 104zm-84-52c0 46.4 37.6 84 84 84c.4 0 .9 0 1.3 0l-25.4 29.6c-5.8 6.7-5 16.8 1.7 22.6s16.8 5 22.6-1.7l62.4-72.5C504.4 385.8 512 365.2 512 344c0 0-.1 0-.1 0c.1-1.3 .1-2.7 .1-4c0-46.4-37.6-84-84-84s-84 37.6-84 84z',
				),
				'description' => __( 'Display animated numerical counters.', 'digiblocks' ),
			),
			'faq' => array(
				'title'       => __( 'FAQ', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '640 512',
					'path'    => 'M202.7 288L352 288c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 192c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 16 55.5-41.6c5.5-4.2 12.3-6.4 19.2-6.4zM352 320l-149.3 0-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-16 0-32-32 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64zM320 448c-35.3 0-64-28.7-64-64l0-32 32 0 0 32c0 17.7 14.3 32 32 32l117.3 0c6.9 0 13.7 2.2 19.2 6.4L512 464l0-16c0-17.7 14.3-32 32-32l32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-128 0 0-32 128 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-32 0 0 32 0 16c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448 320 448zM184.3 70.3c-16.4 0-31 10.3-36.4 25.7l-.3 .9c-3 8.3 1.4 17.5 9.7 20.4s17.5-1.4 20.4-9.7l.3-.9c.9-2.7 3.5-4.4 6.3-4.4l41.3 0c6.5 0 11.7 5.3 11.7 11.7c0 4.2-2.2 8.1-5.9 10.2l-31.4 18c-5 2.9-8 8.1-8 13.9l0 9.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-.3L247.4 152c13.6-7.8 22-22.3 22-37.9c0-24.2-19.6-43.7-43.7-43.7l-41.3 0zM208 250.7a22.7 22.7 0 1 0 0-45.3 22.7 22.7 0 1 0 0 45.3z',
				),
				'description' => __( 'Create beautiful FAQ block with schema markup for SEO.', 'digiblocks' ),
			),
			'google-map' => array(
				'title'       => __( 'Google Map', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '384 512',
					'path'    => 'M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z',
				),
				'description' => __( 'Add a responsive Google Map with markers.', 'digiblocks' ),
			),
			'heading' => array(
				'title'       => __( 'Heading', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '448 512',
					'path'    => 'M0 48c0-8.8 7.2-16 16-16l64 0 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 64l0 160 256 0 0-160-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 176 0 208 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-192L96 256l0 192 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-208L64 64 16 64C7.2 64 0 56.8 0 48z',
				),
				'description' => __( 'Create a beautiful heading with various styling options.', 'digiblocks' ),
			),
			'icon' => array(
				'title'       => __( 'Icon', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '384 512',
					'path'    => 'M310.3 258.1C326.5 234.8 336 206.6 336 176c0-79.5-64.5-144-144-144S48 96.5 48 176c0 30.6 9.5 58.8 25.7 82.1c4.1 5.9 8.8 12.3 13.6 19c0 0 0 0 0 0c12.7 17.5 27.1 37.2 38 57.1c8.9 16.2 13.7 33.3 16.2 49.9L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-32.4 0c2.5-16.6 7.3-33.7 16.2-49.9c10.9-20 25.3-39.7 38-57.1c4.9-6.7 9.5-13 13.6-19zM192 96c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16zM146.7 448c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32l-90.5 0zM112 432l0-5.3c0-5.9 4.8-10.7 10.7-10.7l138.7 0c5.9 0 10.7 4.8 10.7 10.7l0 5.3c0 44.2-35.8 80-80 80s-80-35.8-80-80z',
				),
				'description' => __( 'Add a customizable icon with various styling options.', 'digiblocks' ),
			),
			'icon-box' => array(
				'title'       => __( 'Icon Box', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '576 512',
					'path'    => 'M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z',
				),
				'description' => __( 'Display an icon with title and text in a beautiful box layout.', 'digiblocks' ),
			),
			'separator' => array(
				'title'       => __( 'Separator', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '640 512',
					'path'    => 'M0 256c0-8.8 7.2-16 16-16l608 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 272c-8.8 0-16-7.2-16-16z',
				),
				'description' => __( 'Add a separator with various styles, text, and icon options.', 'digiblocks' ),
			),
			'social-icons' => array(
				'title'       => __( 'Social Icons', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '448 512',
					'path'    => 'M448 112c0 44.2-35.8 80-80 80c-22.9 0-43.6-9.6-58.1-25l-151 75.5c.8 4.4 1.1 8.9 1.1 13.5s-.4 9.1-1.1 13.5l151 75.5c14.6-15.4 35.2-25 58.1-25c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-9.7 1.7-19 4.9-27.7L147.2 299.5c-14.3 22-39 36.5-67.2 36.5c-44.2 0-80-35.8-80-80s35.8-80 80-80c28.2 0 52.9 14.5 67.2 36.5l145.7-72.9c-3.2-8.6-4.9-17.9-4.9-27.7c0-44.2 35.8-80 80-80s80 35.8 80 80zM80 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM416 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM368 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96z',
				),
				'description' => __( 'Add social media links with beautiful icons.', 'digiblocks' ),
			),
			'spacer' => array(
				'title'       => __( 'Spacer', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '512 512',
					'path'    => 'M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z',
				),
				'description' => __( 'Add vertical space between blocks with adjustable height.', 'digiblocks' ),
			),
			'team' => array(
				'title'       => __( 'Team', 'digiblocks' ),
				'icon'        => array(
					'viewbox' => '640 512',
					'path'    => 'M128 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM0 280c0 43.3 26.4 80.4 64 96l0 48c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-64 0 0-207.6c2.6-.3 5.3-.4 8-.4l48 0c9.3 0 18.1 1.7 26.2 4.9c8.2 3.2 17.5-.9 20.7-9.1s-.9-17.5-9.1-20.7c-11.7-4.6-24.5-7.1-37.8-7.1l-48 0C46.6 176 0 222.6 0 280zm64 59.9C44.7 327 32 304.9 32 280c0-25 12.7-47 32-59.9l0 119.8zM512 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM640 280c0-57.4-46.6-104-104-104l-48 0c-13.3 0-26.1 2.5-37.8 7.1c-8.2 3.2-12.3 12.5-9.1 20.7s12.5 12.3 20.7 9.1c8.1-3.2 16.9-4.9 26.2-4.9l48 0c2.7 0 5.4 .1 8 .4L544 416l-64 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 40c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-48c37.6-15.7 64-52.7 64-96zm-64 59.9l0-119.8C595.3 233 608 255 608 280c0 24.9-12.7 47-32 59.9zM288 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 256 96a64 64 0 1 0 128 0zm-80 96c-57.4 0-104 46.6-104 104c0 40.1 22.7 74.9 56 92.3l0 67.7c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-67.7c33.3-17.3 56-52.1 56-92.3c0-57.4-46.6-104-104-104l-32 0zm-48 50.3l0 107.3c-14.7-13.2-24-32.4-24-53.7c0-21.3 9.3-40.5 24-53.7zM288 448l0-222.2c5.1-1.2 10.5-1.8 16-1.8l32 0c5.5 0 10.9 .6 16 1.8L352 448l-64 0zm96-98.3l0-107.3c14.7 13.2 24 32.3 24 53.7c0 21.3-9.3 40.5-24 53.7z',
				),
				'description' => __( 'Display your team members in various layouts.', 'digiblocks' ),
			),
		);

		// If block name is specified, return data for that block
		if ( ! empty( $block_name ) ) {
			return isset( $blocks_data[ $block_name ] ) ? $blocks_data[ $block_name ] : false;
		}

		// Otherwise return all blocks data
		return $blocks_data;
	}

	/**
	 * Register a single block.
	 *
	 * @param string $block_name Block name.
	 */
	private function register_block( $block_name ) {
		$block_dir       = DIGIBLOCKS_PLUGIN_DIR . 'blocks/' . $block_name;
		$block_json_file = $block_dir . '/block.json';

		if ( file_exists( $block_json_file ) ) {
			register_block_type( $block_json_file );
		}
	}

	/**
	 * Generate block assets (CSS and JS) for a post.
	 *
	 * @param int     $post_id Post ID.
	 * @param WP_Post $post Post object.
	 */
	public function generate_block_assets( $post_id, $post ) {
		// Skip if this is an autosave, a revision, or a restore.
		if ( wp_is_post_autosave( $post_id ) || wp_is_post_revision( $post_id ) || ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) ) {
			return;
		}

		// Skip if post status is 'auto-draft'.
		if ( 'auto-draft' === $post->post_status ) {
			return;
		}

		// Skip if post type doesn't support the block editor.
		if ( ! use_block_editor_for_post_type( $post->post_type ) ) {
			return;
		}

		$content = $post->post_content;

		// Check if content has any DigiBlocks blocks.
		if ( false === strpos( $content, '<!-- wp:digiblocks/' ) ) {
			// No DigiBlocks found, clean up existing files.
			$this->cleanup_block_assets( $post_id );
			return;
		}

		// Extract CSS and JS from blocks.
		$css = $this->extract_block_css( $content, $post_id );
		$js  = $this->extract_block_js( $content, $post_id );

		// Generate assets.
		$this->generate_css_file( $post_id, $css );
		$this->generate_js_file( $post_id, $js );
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
			// Check if this is a DigiBlocks block.
			if ( isset( $block['blockName'] ) && 0 === strpos( $block['blockName'], 'digiblocks/' ) ) {
				$digiblock_count++;
				$block_name = str_replace( 'digiblocks/', '', $block['blockName'] );
				$block_instance_id = isset( $block['attrs']['id'] ) ? $block['attrs']['id'] : uniqid( 'digiblock-' );
	
				// Pass the block ID and attributes to get_block_css
				$block_css = $this->get_block_css( $block_name, $block_instance_id, $block['attrs'] );
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
		$block_css_file = DIGIBLOCKS_PLUGIN_DIR . 'blocks/' . $block_name . '/styles.php';
	
		if ( file_exists( $block_css_file ) ) {
			// Create a variable that will be accessible in the included file
			$digiblocks_css_output = '';
			
			// Include the file - it will set $digiblocks_css_output
			include $block_css_file;
			
			// Return the CSS set by the included file
			return $digiblocks_css_output;
		}
	
		return '';
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
			// Check if this is a DigiBlocks block.
			if ( isset( $block['blockName'] ) && 0 === strpos( $block['blockName'], 'digiblocks/' ) ) {
				$block_name        = str_replace( 'digiblocks/', '', $block['blockName'] );
				$block_instance_id = isset( $block['attrs']['id'] ) ? $block['attrs']['id'] : uniqid( 'digiblock-' );

				// Get block-specific JS.
				$block_js = $this->get_block_js( $block_name, $block_instance_id, $block['attrs'] );
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
		$block_js_file = DIGIBLOCKS_PLUGIN_DIR . 'blocks/' . $block_name . '/script.php';
	
		if ( file_exists( $block_js_file ) ) {
			// Create a variable that will be accessible in the included file
			$digiblocks_js_output = '';
			
			// Include the file - it will set $digiblocks_js_output
			include $block_js_file;
			
			// Return the JS set by the included file
			return $digiblocks_js_output;
		}
	
		return '';
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
		if (!$wp_filesystem || !is_object($wp_filesystem)) {
			$write_result = file_put_contents($css_file, $css);
			// Set appropriate permissions
			chmod($css_file, 0644);
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
		if (!$wp_filesystem || !is_object($wp_filesystem)) {
			$write_result = file_put_contents($js_file, $js);
			// Set appropriate permissions
			chmod($js_file, 0644);
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
		// Remove comments (single line).
		$js = preg_replace( '/(\/\/[^\n]*\n)/', '', $js );
		// Remove comments (multi-line).
		$js = preg_replace( '/(\/\*.*?\*\/)/', '', $js );
		// Remove whitespace.
		$js = preg_replace( '/\s+/', ' ', $js );

		return $js;
	}

	/**
	 * Clean up block assets.
	 *
	 * @param int $post_id Post ID.
	 */
	private function cleanup_block_assets( $post_id ) {
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
	 * Enqueue block assets on front-end.
	 */
	public function enqueue_block_assets() {
		global $post;

		if ( ! is_singular() || empty( $post ) ) {
			return;
		}

		$post_id  = $post->ID;
		$css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.css';
		$js_file  = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-' . $post_id . '.js';

		// Check if post content has DigiBlocks blocks
		if ( has_blocks( $post->post_content ) ) {
			$blocks         = parse_blocks( $post->post_content );
			$has_digiblocks = $this->has_digiblocks_blocks( $blocks );

			if ( $has_digiblocks ) {
				// Enqueue the CSS file
				if ( file_exists( $css_file ) ) {
					wp_enqueue_style(
						'digiblocks-' . $post_id,
						DIGIBLOCKS_ASSETS_URL . '/digiblocks-' . $post_id . '.css',
						array(),
						filemtime( $css_file )
					);
				}

				// Enqueue the JS file
				if ( file_exists( $js_file ) ) {
					wp_enqueue_script(
						'digiblocks-' . $post_id,
						DIGIBLOCKS_ASSETS_URL . '/digiblocks-' . $post_id . '.js',
						array(),
						filemtime( $js_file ),
						true
					);
				}

				// Check for Google Map blocks and enqueue the Google Maps API if needed
				if ($this->has_google_map_blocks($blocks)) {
					$this->enqueue_google_maps_api();
				}

				// Check for blocks with animations and enqueue if needed
				$this->enqueue_animations_if_needed( $post_id, $blocks );
			}
		}
	}

	/**
	 * Check if blocks array contains any DigiBlocks blocks.
	 *
	 * @param array $blocks Array of parsed blocks.
	 * @return bool True if DigiBlocks blocks are found.
	 */
	private function has_digiblocks_blocks( $blocks ) {
		foreach ( $blocks as $block ) {
			if ( isset( $block['blockName'] ) && 0 === strpos( $block['blockName'], 'digiblocks/' ) ) {
				return true;
			}
			
			if ( ! empty( $block['innerBlocks'] ) ) {
				if ( $this->has_digiblocks_blocks( $block['innerBlocks'] ) ) {
					return true;
				}
			}
		}
		
		return false;
	}

	/**
	 * Check if blocks array contains any Google Map blocks.
	 *
	 * @param array $blocks Array of parsed blocks.
	 * @return bool True if Google Map blocks are found.
	 */
	private function has_google_map_blocks($blocks) {
		foreach ($blocks as $block) {
			if (isset($block['blockName']) && $block['blockName'] === 'digiblocks/google-map') {
				return true;
			}
			
			if (!empty($block['innerBlocks'])) {
				if ($this->has_google_map_blocks($block['innerBlocks'])) {
					return true;
				}
			}
		}
		
		return false;
	}

	/**
	 * Enqueue Google Maps API.
	 */
	private function enqueue_google_maps_api() {
		// Get API key from settings
		$settings = get_option('digiblocks_settings', array());
		$api_key = isset($settings['google_maps_api_key']) ? $settings['google_maps_api_key'] : '';
		
		if (!empty($api_key)) {
			wp_enqueue_script(
				'google-maps-api',
				'https://maps.googleapis.com/maps/api/js?key=' . esc_attr($api_key) . '&callback=digiblocksGoogleMapsCallback&loading=async',
				array(),
				null,
				true
			);
		}
	}

	/**
	 * Check if any DigiBlocks with animations are present on the page.
	 *
	 * @param array $blocks Array of parsed blocks.
	 * @return bool True if animations are found.
	 */
	private function has_block_animations( $blocks ) {
		foreach ( $blocks as $block ) {
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
	 * Enqueue animations script if needed.
	 *
	 * @param int $post_id Post ID.
	 * @param array $blocks Parsed blocks from content.
	 */
	private function enqueue_animations_if_needed( $post_id, $blocks ) {
		static $animations_enqueued = false;
		
		// Check if animations are already enqueued
		if ( $animations_enqueued ) {
			return;
		}
		
		// Check if any block has animations
		if ( $this->has_block_animations( $blocks ) ) {
			wp_enqueue_script(
				'digiblocks-animations',
				DIGIBLOCKS_PLUGIN_URL . 'assets/js/front-animations.js',
				array(),
				DIGIBLOCKS_VERSION,
				true
			);
			
			$animations_enqueued = true;
		}
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
			58
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
		// Style for Archives editor.
		wp_enqueue_style(
			'digiblocks-archives-editor',
			DIGIBLOCKS_PLUGIN_URL . 'assets/css/blocks/editor.css',
			array( 'wp-edit-blocks' ),
			DIGIBLOCKS_VERSION
		);

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

		// Enqueue editor scripts.
		wp_enqueue_script(
			'digiblocks-blocks-editor',
			DIGIBLOCKS_PLUGIN_URL . 'assets/js/blocks/index.js',
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-editor',
				'wp-components',
				'wp-data',
				'wp-block-editor',
				'digiblocks-globals',
			),
			DIGIBLOCKS_VERSION,
			true
		);

		// Google Map API key.
		$settings = get_option('digiblocks_settings', array());
		$google_maps_api_key = isset($settings['google_maps_api_key']) ? $settings['google_maps_api_key'] : '';
		$google_maps_map_id = isset($settings['google_maps_map_id']) ? $settings['google_maps_map_id'] : '';

		// Add FA icons to the editor.
		wp_localize_script(
			'digiblocks-globals',
			'digiBlocksData',
			array(
				'fontAwesomeIcons' => $this->get_fa_icons(),
				'blocks'           => $this->get_block_data(),
				'activeBlocks'     => get_option( 'digiblocks_active_blocks', array() ),
				'googleMapsApiKey' => $google_maps_api_key,
				'googleMapsMapId'  => $google_maps_map_id,
			)
		);
	}

	/**
	 * Get Font Awesome icons.
	 */
	public function get_fa_icons() {
		$icons = array_merge(
			require_once plugin_dir_path( __FILE__ ) . 'icons/v6-0.php',
			require_once plugin_dir_path( __FILE__ ) . 'icons/v6-1.php',
			require_once plugin_dir_path( __FILE__ ) . 'icons/v6-2.php',
			require_once plugin_dir_path( __FILE__ ) . 'icons/v6-3.php',
		);

		// Allow developers to add custom icons
		return apply_filters( 'digiblocks_fa_icons', $icons );
	}

	/**
	 * Enqueue admin scripts.
	 *
	 * @param string $hook Hook suffix.
	 */
	public function enqueue_admin_scripts( $hook ) {
		// Load only on DigiBlocks admin pages.
		if ( 'toplevel_page_digiblocks' === $hook || 'digiblocks_page_digiblocks-settings' === $hook ) {
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

		// Validate settings.
		$validated_settings = array(
			'content_width'        => isset( $settings['content_width'] ) ? sanitize_text_field( $settings['content_width'] ) : $current_settings['content_width'],
			'recaptcha_site_key'   => isset( $settings['recaptcha_site_key'] ) ? sanitize_text_field( $settings['recaptcha_site_key'] ) : $current_settings['recaptcha_site_key'],
			'recaptcha_secret_key' => isset( $settings['recaptcha_secret_key'] ) ? sanitize_text_field( $settings['recaptcha_secret_key'] ) : $current_settings['recaptcha_secret_key'],
			'google_maps_api_key'  => isset( $settings['google_maps_api_key'] ) ? sanitize_text_field( $settings['google_maps_api_key'] ) : $current_settings['google_maps_api_key'],
			'google_maps_map_id'   => isset( $settings['google_maps_map_id'] ) ? sanitize_text_field( $settings['google_maps_map_id'] ) : $current_settings['google_maps_map_id'],
		);

		update_option( 'digiblocks_settings', $validated_settings );

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
		$active_blocks = $request->get_json_params();
		update_option( 'digiblocks_active_blocks', $active_blocks );

		return rest_ensure_response(
			array(
				'success' => true,
				'message' => __( 'Block settings updated successfully.', 'digiblocks' ),
			)
		);
	}

	/**
	 * Get plugin icon.
	 *
	 * @return string SVG icon.
	 */
	private function get_plugin_icon() {
		return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" fill="#fff"><path d="m48.9542389 5.0452399-21.4456806 11.5626397c9.7644787 5.3564796 4.6071224 2.5277596 21.4441586 11.7617607l21.4472008-11.7617588z"/><path d="m25.1662388 45.1154823-21.4456787 11.5611191c9.5319195 5.2303162 4.5615196 2.5034409 21.4441586 11.7617607l21.3712006-11.7207184c-6.8780023-3.8136863-2.5885583-1.4774398-21.3696805-11.6021614z"/><path d="m26.2788792 94.9547577 21.5551204-11.9487152v-24.4491997l-21.5551204 11.8210411z"/><path d="m72.7376785 45.1154823c-18.8555984 10.1642342-14.6254425 7.862957-21.3712005 11.6021614 8.4952812 4.6618423 4.0827217 2.2419968 21.3696823 11.7222443l21.4472046-11.7617607z"/><path d="m71.6204758 42.9358025v-24.4492035l-21.5551186 11.8210411v24.4917603c7.0406418-3.7939225 2.7223206-1.4242402 21.5551186-11.8635979z"/><path d="m50.0714417 58.5568428v24.4491997l21.5444793 11.9487152v-24.5783997c-18.2627983-10.0198402-13.8046417-7.5741577-21.5444793-11.8195152z"/><path d="m47.8324776 54.7963562v-24.4902363c-17.3903179-9.5410404-12.936718-7.0984001-21.5444775-11.819519v24.4492016c18.6853619 10.3633613 14.3518391 7.983036 21.5444775 11.8605537z"/><path d="m73.8488007 94.9547577 21.5551147-11.9487152v-24.4491997l-21.5551147 11.8210411z"/><path d="m2.5 58.5568428v24.4491997l21.5444794 11.9487152v-24.5783997c-17.2352791-9.4574394-12.7771197-7.0102386-21.5444794-11.8195152z"/><path d="m97.3297577 55.9622002c.059288.0440788.1185608.0896759.1489639.1489601.0106354.0167236.0121613.0349579.0212784.0516815-.0075989-.0182419-.0060806-.0395241-.0151978-.0562401-.0364761-.0623207-.1018448-.0987968-.1504745-.1519966-.0775223-.0881577-.1413651-.1869621-.2447205-.247757l.0015182.0015182c.1048737.0607949.1641541.1641503.2386323.2538339z"/></svg>';
	}
}