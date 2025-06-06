<?php
/**
 * Plugin Name: DigiBlocks
 * Plugin URI: https://digiblocks.me/
 * Description: A collection of beautiful custom Gutenberg blocks for WordPress.
 * Version: 1.0.0
 * Author: DigiHold
 * Author URI: https://digihold.me?utm_source=wordpress.org&utm_medium=referral&utm_campaign=plugin_directory&utm_content=digiblocks
 * Text Domain: digiblocks
 * Domain Path: /languages
 * Requires at least: 6.0
 * Tested up to: 6.7
 * Requires PHP: 7.4
 * Network: false
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define constants.
if ( ! defined( 'DIGIBLOCKS_VERSION' ) ) {
	define( 'DIGIBLOCKS_VERSION', '1.0.1' );
}
if ( ! defined( 'DIGIBLOCKS_PLUGIN_DIR' ) ) {
	define( 'DIGIBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}
if ( ! defined( 'DIGIBLOCKS_PLUGIN_URL' ) ) {
	define( 'DIGIBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}
if ( ! defined( 'DIGIBLOCKS_PLUGIN_FILE' ) ) {
	define( 'DIGIBLOCKS_PLUGIN_FILE', __FILE__ );
}
if ( ! defined( 'DIGIBLOCKS_PLUGIN_BASENAME' ) ) {
	define( 'DIGIBLOCKS_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
}
$upload_dir = wp_upload_dir();
if ( ! defined( 'DIGIBLOCKS_ASSETS_DIR' ) ) {
	define( 'DIGIBLOCKS_ASSETS_DIR', $upload_dir['basedir'] . '/digiblocks' );
}
if ( ! defined( 'DIGIBLOCKS_ASSETS_URL' ) ) {
	define( 'DIGIBLOCKS_ASSETS_URL', $upload_dir['baseurl'] . '/digiblocks' );
}

// Include the main DigiBlocks class file.
require_once plugin_dir_path( __FILE__ ) . 'includes/class-digiblocks.php';

// Helpers functions.
require_once plugin_dir_path( __FILE__ ) . 'includes/helpers.php';

/**
 * DigiBlocks Initialization
 */
function digiblocks_init() {
	return DigiBlocks::get_instance();
}

// Start the plugin.
digiblocks_init();
