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
		'content_max_width'    => '90',
		'recaptcha_site_key'   => '',
		'recaptcha_secret_key' => '',
		'newsletter_platform'  => '',
	)
);
?>
<div class="digiblocks-admin-wrap">
	<div class="digiblocks-admin-header">
		<div class="digiblocks-admin-logo">
			<?php echo wp_kses( $this->get_plugin_logo(), digiblocks_allow_svg_in_kses() ); ?>
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
		<div class="digiblocks-admin-col digiblocks-admin-first">
			<div class="digiblocks-admin-section">
				<div class="digiblocks-section-header">
					<h2><?php esc_html_e( 'Assets Management', 'digiblocks' ); ?></h2>
					<p><?php esc_html_e( 'Regenerate all DigiBlocks CSS, JavaScript, and typography files. This will scan all posts and recreate asset files.', 'digiblocks' ); ?></p>
				</div>

				<div class="digiblocks-form-section">
					<div class="digiblocks-regenerate-section">
						<div class="digiblocks-regenerate-action">
							<button type="button" id="digiblocks-regenerate-assets" class="button button-secondary button-large">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="rotate-icon" width="18" height="18"><path d="M94 187.1C120.8 124.1 183.3 80 256 80c39.7 0 77.8 15.8 105.9 43.9L414.1 176 360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 54.1L395.9 89.9C358.8 52.8 308.5 32 256 32C163.4 32 83.9 88.2 49.8 168.3c-5.2 12.2 .5 26.3 12.7 31.5s26.3-.5 31.5-12.7zm368 157c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6C391 388.1 328.6 432 256 432c-39.7 0-77.8-15.8-105.9-43.9L97.9 336l54.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 288c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-54.1 52.1 52.1C153.2 459.2 203.5 480 256 480c92.5 0 171.8-56 206-135.9z"/></svg>
								<?php esc_html_e('Regenerate All Assets', 'digiblocks'); ?>
							</button>
							
							<div id="digiblocks-regenerate-progress" class="digiblocks-regenerate-progress" style="display: none;">
								<div class="digiblocks-progress-bar">
									<div class="digiblocks-progress-fill"></div>
								</div>
								<div class="digiblocks-progress-text">
									<?php esc_html_e('Regenerating assets...', 'digiblocks'); ?>
								</div>
							</div>
							
							<div id="digiblocks-regenerate-result" class="digiblocks-regenerate-result"></div>
						</div>

						<div class="digiblocks-regenerate-info">
							<h4><?php esc_html_e('When to regenerate assets:', 'digiblocks'); ?></h4>
							<ul>
								<li>
									<span class="check-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"/></svg></span>
									<span class="text"><?php esc_html_e('After updating the plugin', 'digiblocks'); ?></span>
								</li>
								<li>
									<span class="check-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"/></svg></span>
									<span class="text"><?php esc_html_e('When switching between local and CDN fonts', 'digiblocks'); ?></span>
								</li>
								<li>
									<span class="check-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"/></svg></span>
									<span class="text"><?php esc_html_e('If assets appear to be missing or corrupted', 'digiblocks'); ?></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="digiblocks-admin-section">
				<div class="digiblocks-section-header">
					<h2><?php esc_html_e( 'Global Settings', 'digiblocks' ); ?></h2>
					<p><?php esc_html_e( 'Configure global settings for DigiBlocks.', 'digiblocks' ); ?></p>
				</div>

				<form id="digiblocks-settings-form" class="digiblocks-settings-form">
					<div class="digiblocks-form-wrapper">
						<div class="digiblocks-form-section">
							<h3><?php esc_html_e( 'Layout Settings', 'digiblocks' ); ?></h3>
							
							<div class="digiblocks-form-flex">
								<div class="digiblocks-form-field">
									<label for="content_width">
										<?php esc_html_e('Content Width', 'digiblocks'); ?>
										<span class="digiblocks-form-description"><?php esc_html_e('Default width for container block in pixels.', 'digiblocks'); ?></span>
									</label>
									<div class="digiblocks-input-group digiblocks-content-width">
										<input 
											type="number" 
											id="content_width" 
											name="content_width" 
											value="<?php echo esc_attr($settings['content_width']); ?>" 
											min="300" 
											max="2000" 
											step="10"
										>
										<span class="digiblocks-input-suffix">px</span>
									</div>
								</div>

								<div class="digiblocks-form-field">
									<label for="content_max_width">
										<?php esc_html_e('Content Max Width', 'digiblocks'); ?>
										<span class="digiblocks-form-description"><?php esc_html_e('Default max width for container block in percentage.', 'digiblocks'); ?></span>
									</label>
									<div class="digiblocks-input-group digiblocks-content-width">
										<input 
											type="number" 
											id="content_max_width" 
											name="content_max_width" 
											value="<?php echo esc_attr(isset($settings['content_max_width']) ? $settings['content_max_width'] : '90'); ?>" 
											min="10" 
											max="100" 
											step="1"
										>
										<span class="digiblocks-input-suffix">%</span>
									</div>
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
							<h3><?php esc_html_e('Google Fonts Settings', 'digiblocks'); ?></h3>
							<p class="digiblocks-form-section-description">
								<?php esc_html_e('Configure how Google Fonts are loaded in your blocks.', 'digiblocks'); ?>
							</p>
							
							<div class="digiblocks-form-field digiblocks-toggle-field">
								<label class="digiblocks-toggle">
									<input 
										type="checkbox" 
										id="google_fonts_local" 
										name="google_fonts_local" 
										class="digiblocks-toggle" 
										<?php checked(isset($settings['google_fonts_local']) ? $settings['google_fonts_local'] : false); ?>
									>
									<span class="digiblocks-toggle-slider"></span>
								</label>
								<div class="digiblocks-toggle-caption">
									<label for="google_fonts_local">
										<?php esc_html_e('Download Google Fonts Locally', 'digiblocks'); ?>
									</label>
									<span class="digiblocks-form-description">
										<?php esc_html_e('When enabled, Google Fonts will be downloaded and served from your server. Default (disabled): Load fonts from Google CDN.', 'digiblocks'); ?>
									</span>
								</div>
							</div>
						</div>

						<div class="digiblocks-form-section">
							<h3><?php esc_html_e('Schema Markup Settings', 'digiblocks'); ?></h3>
							<p class="digiblocks-form-section-description">
								<?php esc_html_e('Configure schema markup for better SEO. Schema markup helps search engines understand your content better.', 'digiblocks'); ?>
							</p>
							
							<div class="digiblocks-form-field digiblocks-toggle-field">
								<label class="digiblocks-toggle">
									<input 
										type="checkbox" 
										id="enable_schema_markup" 
										name="enable_schema_markup" 
										class="digiblocks-toggle" 
										<?php checked(isset($settings['enable_schema_markup']) ? $settings['enable_schema_markup'] : true); ?>
									>
									<span class="digiblocks-toggle-slider"></span>
								</label>
								<div class="digiblocks-toggle-caption">
									<label for="enable_schema_markup">
										<?php esc_html_e('Enable Schema Markup', 'digiblocks'); ?>
									</label>
									<span class="digiblocks-form-description">
										<?php esc_html_e('When enabled, appropriate schema markup will be added to your blocks (FAQ, Breadcrumbs, etc.). Disable this if you prefer to handle schema markup manually or through another plugin.', 'digiblocks'); ?>
									</span>
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

						<div class="digiblocks-form-section">
							<h3><?php esc_html_e( 'Newsletter Settings', 'digiblocks' ); ?></h3>
							<p class="digiblocks-form-section-description">
								<?php esc_html_e( 'Configure newsletter platform integration for the Newsletter block.', 'digiblocks' ); ?>
							</p>

							<div class="digiblocks-form-field">
								<label for="newsletter_platform">
									<?php esc_html_e( 'Newsletter Platform', 'digiblocks' ); ?>
								</label>
								<select id="newsletter_platform" name="newsletter_platform">
									<option value=""><?php esc_html_e( 'Select Platform', 'digiblocks' ); ?></option>
									<option value="mailchimp" <?php selected( isset($settings['newsletter_platform']) ? $settings['newsletter_platform'] : '', 'mailchimp' ); ?>><?php esc_html_e( 'MailChimp', 'digiblocks' ); ?></option>
									<option value="activecampaign" <?php selected( isset($settings['newsletter_platform']) ? $settings['newsletter_platform'] : '', 'activecampaign' ); ?>><?php esc_html_e( 'ActiveCampaign', 'digiblocks' ); ?></option>
									<option value="brevo" <?php selected( isset($settings['newsletter_platform']) ? $settings['newsletter_platform'] : '', 'brevo' ); ?>><?php esc_html_e( 'Brevo', 'digiblocks' ); ?></option>
									<option value="klaviyo" <?php selected( isset($settings['newsletter_platform']) ? $settings['newsletter_platform'] : '', 'klaviyo' ); ?>><?php esc_html_e( 'Klaviyo', 'digiblocks' ); ?></option>
									<option value="convertkit" <?php selected( isset($settings['newsletter_platform']) ? $settings['newsletter_platform'] : '', 'convertkit' ); ?>><?php esc_html_e( 'ConvertKit', 'digiblocks' ); ?></option>
									<option value="mailerlite" <?php selected( isset($settings['newsletter_platform']) ? $settings['newsletter_platform'] : '', 'mailerlite' ); ?>><?php esc_html_e( 'MailerLite', 'digiblocks' ); ?></option>
								</select>
							</div>

							<!-- MailChimp Fields -->
							<div id="mailchimp-fields" class="newsletter-platform-fields digiblocks-form-row" <?php echo ( isset($settings['newsletter_platform']) && $settings['newsletter_platform'] === 'mailchimp' ) ? '' : 'style="display:none;"'; ?>>
								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="mailchimp_api_key">
											<?php esc_html_e( 'MailChimp API Key', 'digiblocks' ); ?>
										</label>
										<div class="digiblocks-input-group">
											<input 
												type="password" 
												id="mailchimp_api_key" 
												name="mailchimp_api_key" 
												value="<?php echo esc_attr( isset($settings['mailchimp_api_key']) ? $settings['mailchimp_api_key'] : '' ); ?>" 
												placeholder="<?php esc_attr_e( 'Enter your MailChimp API key', 'digiblocks' ); ?>"
											>
											<button type="button" class="button button-secondary digiblocks-toggle-password">
												<span class="dashicons dashicons-visibility"></span>
											</button>
										</div>
									</div>

									<div class="digiblocks-form-field">
										<label for="mailchimp_audience_id">
											<?php esc_html_e( 'Audience ID', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="mailchimp_audience_id" 
											name="mailchimp_audience_id" 
											value="<?php echo esc_attr( isset($settings['mailchimp_audience_id']) ? $settings['mailchimp_audience_id'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter your Audience ID', 'digiblocks' ); ?>"
										>
									</div>
								</div>

								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="mailchimp_tags">
											<?php esc_html_e( 'Tags (Optional)', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="mailchimp_tags" 
											name="mailchimp_tags" 
											value="<?php echo esc_attr( isset($settings['mailchimp_tags']) ? $settings['mailchimp_tags'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter tags separated by commas', 'digiblocks' ); ?>"
										>
									</div>

									<div class="digiblocks-form-field digiblocks-toggle-field">
										<label class="digiblocks-toggle">
											<input 
												type="checkbox" 
												id="mailchimp_double_optin" 
												name="mailchimp_double_optin" 
												class="digiblocks-toggle" 
												<?php checked(isset($settings['mailchimp_double_optin']) ? $settings['mailchimp_double_optin'] : false); ?>
											>
											<span class="digiblocks-toggle-slider"></span>
										</label>
										<div class="digiblocks-toggle-caption">
											<label for="mailchimp_double_optin">
												<?php esc_html_e('Double Opt-in', 'digiblocks'); ?>
											</label>
										</div>
									</div>
								</div>
							</div>

							<!-- ActiveCampaign Fields -->
							<div id="activecampaign-fields" class="newsletter-platform-fields digiblocks-form-row" <?php echo ( isset($settings['newsletter_platform']) && $settings['newsletter_platform'] === 'activecampaign' ) ? '' : 'style="display:none;"'; ?>>
								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="activecampaign_api_url">
											<?php esc_html_e( 'API URL', 'digiblocks' ); ?>
										</label>
										<input 
											type="url" 
											id="activecampaign_api_url" 
											name="activecampaign_api_url" 
											value="<?php echo esc_attr( isset($settings['activecampaign_api_url']) ? $settings['activecampaign_api_url'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'https://youraccountname.api-us1.com', 'digiblocks' ); ?>"
										>
									</div>

									<div class="digiblocks-form-field">
										<label for="activecampaign_api_key">
											<?php esc_html_e( 'API Key', 'digiblocks' ); ?>
										</label>
										<div class="digiblocks-input-group">
											<input 
												type="password" 
												id="activecampaign_api_key" 
												name="activecampaign_api_key" 
												value="<?php echo esc_attr( isset($settings['activecampaign_api_key']) ? $settings['activecampaign_api_key'] : '' ); ?>" 
												placeholder="<?php esc_attr_e( 'Enter your API key', 'digiblocks' ); ?>"
											>
											<button type="button" class="button button-secondary digiblocks-toggle-password">
												<span class="dashicons dashicons-visibility"></span>
											</button>
										</div>
									</div>
								</div>

								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="activecampaign_list_id">
											<?php esc_html_e( 'List ID', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="activecampaign_list_id" 
											name="activecampaign_list_id" 
											value="<?php echo esc_attr( isset($settings['activecampaign_list_id']) ? $settings['activecampaign_list_id'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter your List ID', 'digiblocks' ); ?>"
										>
									</div>

									<div class="digiblocks-form-field">
										<label for="activecampaign_tags">
											<?php esc_html_e( 'Tags (Optional)', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="activecampaign_tags" 
											name="activecampaign_tags" 
											value="<?php echo esc_attr( isset($settings['activecampaign_tags']) ? $settings['activecampaign_tags'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter tags separated by commas', 'digiblocks' ); ?>"
										>
									</div>
								</div>
							</div>

							<!-- Brevo Fields -->
							<div id="brevo-fields" class="newsletter-platform-fields digiblocks-form-row" <?php echo ( isset($settings['newsletter_platform']) && $settings['newsletter_platform'] === 'brevo' ) ? '' : 'style="display:none;"'; ?>>
								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="brevo_api_key">
											<?php esc_html_e( 'Brevo API Key', 'digiblocks' ); ?>
										</label>
										<div class="digiblocks-input-group">
											<input 
												type="password" 
												id="brevo_api_key" 
												name="brevo_api_key" 
												value="<?php echo esc_attr( isset($settings['brevo_api_key']) ? $settings['brevo_api_key'] : '' ); ?>" 
												placeholder="<?php esc_attr_e( 'Enter your Brevo API key', 'digiblocks' ); ?>"
											>
											<button type="button" class="button button-secondary digiblocks-toggle-password">
												<span class="dashicons dashicons-visibility"></span>
											</button>
										</div>
									</div>

									<div class="digiblocks-form-field">
										<label for="brevo_list_id">
											<?php esc_html_e( 'List ID', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="brevo_list_id" 
											name="brevo_list_id" 
											value="<?php echo esc_attr( isset($settings['brevo_list_id']) ? $settings['brevo_list_id'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter your List ID', 'digiblocks' ); ?>"
										>
									</div>
								</div>
							</div>

							<!-- Klaviyo Fields -->
							<div id="klaviyo-fields" class="newsletter-platform-fields digiblocks-form-row" <?php echo ( isset($settings['newsletter_platform']) && $settings['newsletter_platform'] === 'klaviyo' ) ? '' : 'style="display:none;"'; ?>>
								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="klaviyo_api_key">
											<?php esc_html_e( 'Private API Key', 'digiblocks' ); ?>
										</label>
										<div class="digiblocks-input-group">
											<input 
												type="password" 
												id="klaviyo_api_key" 
												name="klaviyo_api_key" 
												value="<?php echo esc_attr( isset($settings['klaviyo_api_key']) ? $settings['klaviyo_api_key'] : '' ); ?>" 
												placeholder="<?php esc_attr_e( 'Enter your Private API key', 'digiblocks' ); ?>"
											>
											<button type="button" class="button button-secondary digiblocks-toggle-password">
												<span class="dashicons dashicons-visibility"></span>
											</button>
										</div>
									</div>

									<div class="digiblocks-form-field">
										<label for="klaviyo_list_id">
											<?php esc_html_e( 'List ID', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="klaviyo_list_id" 
											name="klaviyo_list_id" 
											value="<?php echo esc_attr( isset($settings['klaviyo_list_id']) ? $settings['klaviyo_list_id'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter your List ID', 'digiblocks' ); ?>"
										>
									</div>
								</div>
							</div>

							<!-- ConvertKit Fields -->
							<div id="convertkit-fields" class="newsletter-platform-fields digiblocks-form-row" <?php echo ( isset($settings['newsletter_platform']) && $settings['newsletter_platform'] === 'convertkit' ) ? '' : 'style="display:none;"'; ?>>
								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="convertkit_api_key">
											<?php esc_html_e( 'ConvertKit API Key', 'digiblocks' ); ?>
										</label>
										<div class="digiblocks-input-group">
											<input 
												type="password" 
												id="convertkit_api_key" 
												name="convertkit_api_key" 
												value="<?php echo esc_attr( isset($settings['convertkit_api_key']) ? $settings['convertkit_api_key'] : '' ); ?>" 
												placeholder="<?php esc_attr_e( 'Enter your API key', 'digiblocks' ); ?>"
											>
											<button type="button" class="button button-secondary digiblocks-toggle-password">
												<span class="dashicons dashicons-visibility"></span>
											</button>
										</div>
									</div>

									<div class="digiblocks-form-field">
										<label for="convertkit_form_id">
											<?php esc_html_e( 'Form ID', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="convertkit_form_id" 
											name="convertkit_form_id" 
											value="<?php echo esc_attr( isset($settings['convertkit_form_id']) ? $settings['convertkit_form_id'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter your Form ID', 'digiblocks' ); ?>"
										>
									</div>
								</div>

								<div class="digiblocks-form-field">
									<label for="convertkit_tags">
										<?php esc_html_e( 'Tags (Optional)', 'digiblocks' ); ?>
									</label>
									<input 
										type="text" 
										id="convertkit_tags" 
										name="convertkit_tags" 
										value="<?php echo esc_attr( isset($settings['convertkit_tags']) ? $settings['convertkit_tags'] : '' ); ?>" 
										placeholder="<?php esc_attr_e( 'Enter tags separated by commas', 'digiblocks' ); ?>"
									>
								</div>
							</div>

							<!-- MailerLite Fields -->
							<div id="mailerlite-fields" class="newsletter-platform-fields digiblocks-form-row" <?php echo ( isset($settings['newsletter_platform']) && $settings['newsletter_platform'] === 'mailerlite' ) ? '' : 'style="display:none;"'; ?>>
								<div class="digiblocks-form-flex">
									<div class="digiblocks-form-field">
										<label for="mailerlite_api_key">
											<?php esc_html_e( 'MailerLite Token', 'digiblocks' ); ?>
										</label>
										<div class="digiblocks-input-group">
											<input 
												type="password" 
												id="mailerlite_api_key" 
												name="mailerlite_api_key" 
												value="<?php echo esc_attr( isset($settings['mailerlite_api_key']) ? $settings['mailerlite_api_key'] : '' ); ?>" 
												placeholder="<?php esc_attr_e( 'Enter your token', 'digiblocks' ); ?>"
											>
											<button type="button" class="button button-secondary digiblocks-toggle-password">
												<span class="dashicons dashicons-visibility"></span>
											</button>
										</div>
									</div>

									<div class="digiblocks-form-field">
										<label for="mailerlite_group_id">
											<?php esc_html_e( 'Group ID', 'digiblocks' ); ?>
										</label>
										<input 
											type="text" 
											id="mailerlite_group_id" 
											name="mailerlite_group_id" 
											value="<?php echo esc_attr( isset($settings['mailerlite_group_id']) ? $settings['mailerlite_group_id'] : '' ); ?>" 
											placeholder="<?php esc_attr_e( 'Enter your Group ID', 'digiblocks' ); ?>"
										>
									</div>
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

		<div class="digiblocks-admin-col digiblocks-admin-second">
			<?php echo wp_kses( $this->get_promo_content(), digiblocks_allow_svg_in_kses() ); ?>
		</div>
	</div>
</div>