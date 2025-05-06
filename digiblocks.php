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

// Helpers functions.
require_once plugin_dir_path( __FILE__ ) . 'includes/helpers.php';

// Custon navigation walker.
require_once plugin_dir_path( __FILE__ ) . 'includes/class-digiblocks-navigation-walker.php';

/**
 * DigiBlocks Initialization
 */
function digiblocks_init() {
	return DigiBlocks::get_instance();
}

// Start the plugin.
digiblocks_init();
