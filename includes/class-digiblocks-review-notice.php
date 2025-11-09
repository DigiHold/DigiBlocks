<?php
/**
 * DigiBlocks Plugin
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * DigiBlocks review notice
 */
class DigiBlocks_Review_Notice {
	/**
	 * Instance of this class.
	 *
	 * @var null
	 */
	private static $instance = null;

	/**
	 * Constructor
	 */
	private function __construct() {
		// Add review notice
		add_action( 'admin_notices', array( $this, 'maybe_show_review_notice' ) );

		// Handle AJAX dismiss for review notice
		add_action( 'wp_ajax_digiblocks_dismiss_review_notice', array( $this, 'ajax_dismiss_review_notice' ) );

		// Enqueue admin scripts
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );

		// Set activation timestamp on plugin activation if not already set
		if ( ! get_option( 'digiblocks_activation_timestamp' ) ) {
			update_option( 'digiblocks_activation_timestamp', time() );
		}
	}

	/**
	 * Get the instance of this class.
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Check if review notice should be shown
	 */
	public function maybe_show_review_notice() {
		// Get current screen
		$screen = get_current_screen();

		// // Don't show on edit pages
		if ( $screen && 0 === strpos( $screen->base, 'edit' ) ) {
			return;
		}

		// Don't show notice if user has dismissed it
		if ( get_option( 'digiblocks_review_notice_dismissed' ) ) {
			return;
		}

		// Don't show if temporarily dismissed
		if ( get_transient( 'digiblocks_review_notice_dismissed_temporarily' ) ) {
			return;
		}

		// Get activation timestamp
		$activation_timestamp = get_option( 'digiblocks_activation_timestamp' );

		// If no timestamp, set it now
		if ( empty( $activation_timestamp ) ) {
			update_option( 'digiblocks_activation_timestamp', time() );
			return;
		}

		// Check if plugin has been active for at least 15 days
		$one_week = 15 * DAY_IN_SECONDS;
		if ( ( time() - $activation_timestamp ) < $one_week ) {
			return;
		}

		// Show the notice
		?>
		<div class="notice digiblocks-review-notice">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="80" height="80"><circle cx="256" cy="256" r="256" fill="#526bfe"/><g><path d="M256.0063,120.3601l-58.8067,31.7062c26.7754,14.6881,12.6333,6.9314,58.8025,32.2522l58.8108-32.2522-58.8067-31.7062Z" fill="#fff"/><path d="M190.7767,230.2376l-58.8067,31.702c26.1377,14.3422,12.5082,6.8647,58.8025,32.2522l58.6024-32.1396c-18.8603-10.4576-7.0981-4.0513-58.5983-31.8145Z" fill="#fff"/><path d="M193.8277,366.9029l59.1068-32.7648v-67.0427l-59.1068,32.4147v67.3928Z" fill="#fff"/><path d="M321.2233,230.2376c-51.7043,27.8716-40.1047,21.5612-58.6024,31.8145,23.2951,12.7833,11.1953,6.1478,58.5983,32.1438l58.8108-32.2522-58.8067-31.7062Z" fill="#fff"/><path d="M318.1598,224.2606v-67.0427l-59.1068,32.4147v67.1594c19.3063-10.4034,7.4649-3.9054,59.1068-32.5314Z" fill="#fff"/><path d="M259.0698,267.0954v67.0427l59.0776,32.7648v-67.397c-50.0788-27.4756-37.854-20.7693-59.0776-32.4105Z" fill="#fff"/><path d="M252.9302,256.7837v-67.1552c-47.6864-26.1627-35.4741-19.4647-59.0776-32.4106v67.0427c51.2375,28.4176,39.3545,21.8905,59.0776,32.5231Z" fill="#fff"/><path d="M324.2702,366.9029l59.1067-32.7648v-67.0427l-59.1067,32.4147v67.3928Z" fill="#fff"/><path d="M128.6231,267.0954v67.0427l59.0776,32.7648v-67.397c-47.2612-25.9334-35.0364-19.2229-59.0776-32.4105Z" fill="#fff"/></g></svg>
			<div class="digiblocks-review-content">
				<p class="digiblocks-review-text">
					<?php
					printf(
						/* translators: %1$s: Plugin review link */
						esc_html__( 'Do you like %2$sDigiBlocks%3$s? Please consider leaving a 5-star review %4$s&#9733;&#9733;&#9733;&#9733;&#9733;%5$s on %6$sWordPress.org%7$s to help us spread the word!', 'digiblocks' ),
						'https://wordpress.org/support/plugin/digiblocks/reviews/#new-post',
						'<strong>',
						'</strong>',
						'<a href="https://wordpress.org/support/plugin/digiblocks/reviews/#new-post" target="_blank" rel="noopener noreferrer">',
						'</a>',
						'<a href="https://wordpress.org/support/plugin/digiblocks/reviews/#new-post" target="_blank" rel="noopener noreferrer">',
						'</a>'
					);
					?>
				</p>

				<p class="digiblocks-review-buttons">
					<a href="https://wordpress.org/support/plugin/digiblocks/reviews/#new-post" class="button digiblocks-leave-review" target="_blank">
						<?php esc_html_e( 'Leave a Review', 'digiblocks' ); ?>
					</a>
					<a href="#" class="button digiblocks-dismiss-review-notice" data-permanent="true">
						<?php esc_html_e( 'Already Done', 'digiblocks' ); ?>
					</a>
					<a href="#" class="button digiblocks-dismiss-review-notice digiblocks-later-review">
						<?php esc_html_e( 'Maybe Later', 'digiblocks' ); ?>
					</a>
				</p>
			</div>
		</div>
		<?php
	}

	/**
	 * Enqueue script for the notice dismiss functionality
	 */
	public function enqueue_admin_scripts() {
		// Enqueue CSS file for review notice
		wp_enqueue_style(
			'digiblocks-review-notice-css',
			DIGIBLOCKS_PLUGIN_URL . 'assets/css/admin/review-notice.css',
			array(),
			DIGIBLOCKS_VERSION
		);

		// Enqueue JS file for review notice
		wp_enqueue_script(
			'digiblocks-review-notice-js',
			DIGIBLOCKS_PLUGIN_URL . 'assets/js/admin/review-notice.js',
			array(),
			DIGIBLOCKS_VERSION,
			true
		);

		wp_localize_script(
			'digiblocks-review-notice-js',
			'digiBlocksReviewVars',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'nonce'   => wp_create_nonce( 'digiblocks_dismiss_review' ),
			)
		);
	}

	/**
	 * Handle AJAX dismiss review notice
	 */
	public function ajax_dismiss_review_notice() {
		// Verify nonce
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'digiblocks_dismiss_review' ) ) {
			wp_send_json_error( 'Invalid nonce' );
		}

		$permanent = isset( $_POST['permanent'] ) && 'true' === $_POST['permanent'];

		if ( $permanent ) {
			update_option( 'digiblocks_review_notice_dismissed', true );
		} else {
			// Remind again after 30 days
			set_transient( 'digiblocks_review_notice_dismissed_temporarily', true, 30 * DAY_IN_SECONDS );
		}

		wp_send_json_success();
	}
}

// Initialize blocks.
DigiBlocks_Review_Notice::instance();