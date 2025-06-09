<?php
/**
 * Plugin/theme install and activation handlers
 *
 * @package DigiBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Class DigiBlocks_Install
 */
class DigiBlocks_Install {
	/**
	 * Instance of the plugin.
	 *
	 * @var DigiBlocks
	 */
	private static $instance;

	/**
	 * Plugin configurations
	 */
	private $plugins = array(
		'digicommerce' => array(
			'name' => 'DigiCommerce',
			'slug' => 'digicommerce/digicommerce.php',
			'repo_slug' => 'digicommerce',
			'learn_more_url' => 'https://digihold.click/digicommerce-site',
		),
	);

	/**
	 * Theme configurations
	 */
	private $themes = array(
		'digifusion' => array(
			'name' => 'DigiFusion',
			'slug' => 'digifusion',
			'repo_slug' => 'digifusion',
			'learn_more_url' => 'https://digihold.click/digifusion-site',
		),
	);

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
		add_action( 'wp_ajax_digiblocks_install_plugin', array( $this, 'ajax_install_plugin' ) );
		add_action( 'wp_ajax_digiblocks_activate_plugin', array( $this, 'ajax_activate_plugin' ) );
		add_action( 'wp_ajax_digiblocks_install_theme', array( $this, 'ajax_install_theme' ) );
		add_action( 'wp_ajax_digiblocks_activate_theme', array( $this, 'ajax_activate_theme' ) );
	}

	/**
	 * Check if plugin is installed.
	 */
	public function is_plugin_installed( $plugin_slug ) {
		$installed_plugins = get_plugins();
		return isset( $installed_plugins[ $plugin_slug ] );
	}

	/**
	 * Check if plugin is active.
	 */
	public function is_plugin_active( $plugin_slug ) {
		return is_plugin_active( $plugin_slug );
	}

	/**
	 * Get plugin status.
	 */
	public function get_plugin_status( $plugin_key ) {
		if ( ! isset( $this->plugins[ $plugin_key ] ) ) {
			return array(
				'status' => 'unknown',
				'button_text' => __( 'Unknown', 'digiblocks' ),
				'button_class' => 'button-secondary',
			);
		}

		$plugin = $this->plugins[ $plugin_key ];
		$is_installed = $this->is_plugin_installed( $plugin['slug'] );
		$is_active = $is_installed && $this->is_plugin_active( $plugin['slug'] );

		if ( $is_active ) {
			return array(
				'status' => 'active',
				'button_text' => __( 'Learn More', 'digiblocks' ),
				'button_class' => 'button-primary',
				'url' => $plugin['learn_more_url'],
			);
		} elseif ( $is_installed ) {
			return array(
				'status' => 'inactive',
				'button_text' => __( 'Activate Plugin', 'digiblocks' ),
				'button_class' => 'button-secondary',
			);
		} else {
			return array(
				'status' => 'not_installed',
				'button_text' => __( 'Install Plugin', 'digiblocks' ),
				'button_class' => 'button-primary',
			);
		}
	}

	/**
	 * Check if theme is installed.
	 */
	public function is_theme_installed( $theme_slug ) {
		$installed_themes = wp_get_themes();
		return isset( $installed_themes[ $theme_slug ] );
	}

	/**
	 * Check if theme is active.
	 */
	public function is_theme_active( $theme_slug ) {
		return get_stylesheet() === $theme_slug || get_template() === $theme_slug;
	}

	/**
	 * Get theme status.
	 */
	public function get_theme_status( $theme_key ) {
		if ( ! isset( $this->themes[ $theme_key ] ) ) {
			return array(
				'status' => 'unknown',
				'button_text' => __( 'Unknown', 'digiblocks' ),
				'button_class' => 'button-secondary',
			);
		}

		$theme = $this->themes[ $theme_key ];
		$is_installed = $this->is_theme_installed( $theme['slug'] );
		$is_active = $is_installed && $this->is_theme_active( $theme['slug'] );

		if ( $is_active ) {
			return array(
				'status' => 'active',
				'button_text' => __( 'Learn More', 'digiblocks' ),
				'button_class' => 'button-primary',
				'url' => $theme['learn_more_url'],
			);
		} elseif ( $is_installed ) {
			return array(
				'status' => 'inactive',
				'button_text' => __( 'Activate Theme', 'digiblocks' ),
				'button_class' => 'button-secondary',
			);
		} else {
			return array(
				'status' => 'not_installed',
				'button_text' => __( 'Install Theme', 'digiblocks' ),
				'button_class' => 'button-primary',
			);
		}
	}

	/**
	 * AJAX handler for installing plugin.
	 */
	public function ajax_install_plugin() {
		if ( ! wp_verify_nonce( $_POST['nonce'], 'digiblocks_plugin_action' ) ) {
			wp_die( __( 'Security check failed.', 'digiblocks' ) );
		}

		if ( ! current_user_can( 'install_plugins' ) ) {
			wp_send_json_error( __( 'You do not have permission to install plugins.', 'digiblocks' ) );
		}

		$plugin_key = sanitize_text_field( $_POST['plugin'] );

		if ( ! isset( $this->plugins[ $plugin_key ] ) ) {
			wp_send_json_error( __( 'Invalid plugin.', 'digiblocks' ) );
		}

		$plugin = $this->plugins[ $plugin_key ];

		if ( ! class_exists( 'Plugin_Upgrader' ) ) {
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		}

		if ( ! function_exists( 'plugins_api' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
		}

		$api = plugins_api( 'plugin_information', array( 'slug' => $plugin['repo_slug'] ) );

		if ( is_wp_error( $api ) ) {
			wp_send_json_error( $api->get_error_message() );
		}

		$upgrader = new Plugin_Upgrader( new WP_Ajax_Upgrader_Skin() );
		$install = $upgrader->install( $api->download_link );

		if ( is_wp_error( $install ) ) {
			wp_send_json_error( $install->get_error_message() );
		}

		$activate = activate_plugin( $plugin['slug'] );

		if ( is_wp_error( $activate ) ) {
			wp_send_json_error( $activate->get_error_message() );
		}

		wp_send_json_success( array(
			'message' => sprintf( __( '%s has been installed and activated successfully.', 'digiblocks' ), $plugin['name'] ),
			'status' => $this->get_plugin_status( $plugin_key ),
		) );
	}

	/**
	 * AJAX handler for activating plugin.
	 */
	public function ajax_activate_plugin() {
		if ( ! wp_verify_nonce( $_POST['nonce'], 'digiblocks_plugin_action' ) ) {
			wp_die( __( 'Security check failed.', 'digiblocks' ) );
		}

		if ( ! current_user_can( 'activate_plugins' ) ) {
			wp_send_json_error( __( 'You do not have permission to activate plugins.', 'digiblocks' ) );
		}

		$plugin_key = sanitize_text_field( $_POST['plugin'] );

		if ( ! isset( $this->plugins[ $plugin_key ] ) ) {
			wp_send_json_error( __( 'Invalid plugin.', 'digiblocks' ) );
		}

		$plugin = $this->plugins[ $plugin_key ];

		$activate = activate_plugin( $plugin['slug'] );

		if ( is_wp_error( $activate ) ) {
			wp_send_json_error( $activate->get_error_message() );
		}

		wp_send_json_success( array(
			'message' => sprintf( __( '%s has been activated successfully.', 'digiblocks' ), $plugin['name'] ),
			'status' => $this->get_plugin_status( $plugin_key ),
		) );
	}

	/**
	 * AJAX handler for installing theme.
	 */
	public function ajax_install_theme() {
		if ( ! wp_verify_nonce( $_POST['nonce'], 'digiblocks_plugin_action' ) ) {
			wp_die( __( 'Security check failed.', 'digiblocks' ) );
		}

		if ( ! current_user_can( 'install_themes' ) ) {
			wp_send_json_error( __( 'You do not have permission to install themes.', 'digiblocks' ) );
		}

		$theme_key = sanitize_text_field( $_POST['theme'] );

		if ( ! isset( $this->themes[ $theme_key ] ) ) {
			wp_send_json_error( __( 'Invalid theme.', 'digiblocks' ) );
		}

		$theme = $this->themes[ $theme_key ];

		if ( ! class_exists( 'Theme_Upgrader' ) ) {
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		}

		if ( ! function_exists( 'themes_api' ) ) {
			require_once ABSPATH . 'wp-admin/includes/theme.php';
		}

		$api = themes_api( 'theme_information', array( 'slug' => $theme['repo_slug'] ) );

		if ( is_wp_error( $api ) ) {
			wp_send_json_error( $api->get_error_message() );
		}

		$upgrader = new Theme_Upgrader( new WP_Ajax_Upgrader_Skin() );
		$install = $upgrader->install( $api->download_link );

		if ( is_wp_error( $install ) ) {
			wp_send_json_error( $install->get_error_message() );
		}

		switch_theme( $theme['slug'] );

		wp_send_json_success( array(
			'message' => sprintf( __( '%s has been installed and activated successfully.', 'digiblocks' ), $theme['name'] ),
			'status' => $this->get_theme_status( $theme_key ),
		) );
	}

	/**
	 * AJAX handler for activating theme.
	 */
	public function ajax_activate_theme() {
		if ( ! wp_verify_nonce( $_POST['nonce'], 'digiblocks_plugin_action' ) ) {
			wp_die( __( 'Security check failed.', 'digiblocks' ) );
		}

		if ( ! current_user_can( 'switch_themes' ) ) {
			wp_send_json_error( __( 'You do not have permission to activate themes.', 'digiblocks' ) );
		}

		$theme_key = sanitize_text_field( $_POST['theme'] );

		if ( ! isset( $this->themes[ $theme_key ] ) ) {
			wp_send_json_error( __( 'Invalid theme.', 'digiblocks' ) );
		}

		$theme = $this->themes[ $theme_key ];

		switch_theme( $theme['slug'] );

		wp_send_json_success( array(
			'message' => sprintf( __( '%s has been activated successfully.', 'digiblocks' ), $theme['name'] ),
			'status' => $this->get_theme_status( $theme_key ),
		) );
	}
}

// Initialize.
DigiBlocks_Install::get_instance();