<?php
/**
 * Settings admin page for DigiBlocks.
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$settings = get_option(
	'digiblocks_settings',
	array(
		'content_width'        => '1200',
		'recaptcha_site_key'   => '',
		'recaptcha_secret_key' => '',
	)
);
?>
<div class="digiblocks-admin-wrap">
	<div class="digiblocks-admin-header">
		<div class="digiblocks-admin-title">
			<div class="digiblocks-admin-icon">
				<?php echo $this->get_plugin_icon(); // phpcs:ignore ?>
			</div>
			<h1><?php esc_html_e( 'DigiBlocks', 'digiblocks' ); ?></h1>
		</div>
		<nav class="digiblocks-admin-tabs">
			<a href="<?php echo esc_url( admin_url( 'admin.php?page=digiblocks' ) ); ?>">
				<?php esc_html_e( 'Dashboard', 'digiblocks' ); ?>
			</a>
			<a href="<?php echo esc_url( admin_url( 'admin.php?page=digiblocks-settings' ) ); ?>" class="active">
				<?php esc_html_e( 'Settings', 'digiblocks' ); ?>
			</a>
		</nav>
	</div>

	<div class="digiblocks-admin-content">
		<div class="digiblocks-admin-section">
			<div class="digiblocks-section-header">
				<h2><?php esc_html_e( 'Global Settings', 'digiblocks' ); ?></h2>
				<p><?php esc_html_e( 'Configure global settings for DigiBlocks.', 'digiblocks' ); ?></p>
			</div>

			<form id="digiblocks-settings-form" class="digiblocks-settings-form">
				<div class="digiblocks-form-wrapper">
					<div class="digiblocks-form-section">
						<h3><?php esc_html_e( 'Layout Settings', 'digiblocks' ); ?></h3>
						
						<div class="digiblocks-form-field">
							<label for="content_width">
								<?php esc_html_e( 'Content Width', 'digiblocks' ); ?>
								<span class="digiblocks-form-description"><?php esc_html_e( 'Default width for container block in pixels.', 'digiblocks' ); ?></span>
							</label>
							<div class="digiblocks-input-group digiblocks-content-width">
								<input 
									type="number" 
									id="content_width" 
									name="content_width" 
									value="<?php echo esc_attr( $settings['content_width'] ); ?>" 
									min="300" 
									max="3000" 
									step="10"
								>
								<span class="digiblocks-input-suffix">px</span>
							</div>
						</div>
					</div>

					<div class="digiblocks-form-section">
						<h3><?php esc_html_e( 'reCAPTCHA Settings', 'digiblocks' ); ?></h3>
						<p class="digiblocks-form-section-description">
							<?php esc_html_e( 'Configure Google reCAPTCHA v3 for form blocks. Get your keys from', 'digiblocks' ); ?>
							<a href="https://www.google.com/recaptcha/admin" target="_blank" rel="noopener noreferrer">
								<?php esc_html_e( 'Google reCAPTCHA Admin', 'digiblocks' ); ?>
							</a>
						</p>

						<div class="digiblocks-form-flex">
							<div class="digiblocks-form-field">
								<label for="recaptcha_site_key">
									<?php esc_html_e( 'Site Key', 'digiblocks' ); ?>
								</label>
								<input 
									type="text" 
									id="recaptcha_site_key" 
									name="recaptcha_site_key" 
									value="<?php echo esc_attr( $settings['recaptcha_site_key'] ); ?>" 
									placeholder="<?php esc_attr_e( 'Enter your site key', 'digiblocks' ); ?>"
								>
							</div>

							<div class="digiblocks-form-field">
								<label for="recaptcha_secret_key">
									<?php esc_html_e( 'Secret Key', 'digiblocks' ); ?>
								</label>
								<div class="digiblocks-input-group">
									<input 
										type="password" 
										id="recaptcha_secret_key" 
										name="recaptcha_secret_key" 
										value="<?php echo esc_attr( $settings['recaptcha_secret_key'] ); ?>" 
										placeholder="<?php esc_attr_e( 'Enter your secret key', 'digiblocks' ); ?>"
									>
									<button type="button" class="button button-secondary digiblocks-toggle-password">
										<span class="dashicons dashicons-visibility"></span>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div class="digiblocks-form-section">
						<h3><?php esc_html_e( 'Google Maps API Settings', 'digiblocks' ); ?></h3>
						<p class="digiblocks-form-section-description">
							<?php esc_html_e( 'Configure Google Maps API for the map block. Get your API key from', 'digiblocks' ); ?>
							<a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer">
								<?php esc_html_e( 'Google Cloud Console', 'digiblocks' ); ?>
							</a>
						</p>
						
						<div class="digiblocks-form-flex">
							<div class="digiblocks-form-field">
								<label for="google_maps_api_key">
									<?php esc_html_e( 'Google Maps API Key', 'digiblocks' ); ?>
								</label>
								<div class="digiblocks-input-group">
									<input 
										type="password" 
										id="google_maps_api_key" 
										name="google_maps_api_key" 
										value="<?php echo esc_attr( $settings['google_maps_api_key'] ); ?>" 
										placeholder="<?php esc_attr_e( 'Enter your Google Maps API key', 'digiblocks' ); ?>"
									>
									<button type="button" class="button button-secondary digiblocks-toggle-password">
										<span class="dashicons dashicons-visibility"></span>
									</button>
								</div>
							</div>

							<div class="digiblocks-form-field">
								<label for="google_maps_map_id">
									<?php esc_html_e( 'Default Map ID', 'digiblocks' ); ?>
								</label>
								<input 
									type="text" 
									id="google_maps_map_id" 
									name="google_maps_map_id" 
									value="<?php echo esc_attr( isset($settings['google_maps_map_id']) ? $settings['google_maps_map_id'] : '' ); ?>" 
									placeholder="<?php esc_attr_e( 'Enter your Map ID', 'digiblocks' ); ?>"
								>
								<span class="digiblocks-form-description"><?php esc_html_e( 'Optional. Used to add markers in your maps.', 'digiblocks' ); ?></span>
							</div>
						</div>
					</div>
				</div>

				<div class="digiblocks-form-actions">
					<button type="submit" class="button button-primary">
						<?php esc_html_e( 'Save Settings', 'digiblocks' ); ?>
					</button>
					<div class="digiblocks-save-status"></div>
				</div>
			</form>
		</div>
	</div>
</div>