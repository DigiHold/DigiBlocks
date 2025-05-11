<?php
/**
 * Form Processing for DigiBlocks Form Block
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * DigiBlocks_Forms_Handler class.
 */
class DigiBlocks_Forms_Handler {
	/**
	 * Instance of the class.
	 *
	 * @var DigiBlocks_Forms_Handler
	 */
	private static $instance;

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
		// Register AJAX action.
		add_action( 'wp_ajax_digiblocks_submit_form', array( $this, 'submit_form' ) );
		add_action( 'wp_ajax_nopriv_digiblocks_submit_form', array( $this, 'submit_form' ) );
	}

	/**
	 * Get reCAPTCHA secret key from settings.
	 *
	 * @return string reCAPTCHA secret key.
	 */
	private function get_recaptcha_secret_key() {
		$settings = get_option( 'digiblocks_settings', array() );
		return isset( $settings['recaptcha_secret_key'] ) ? $settings['recaptcha_secret_key'] : '';
	}

	/**
	 * Handle form submission.
	 */
	public function submit_form() {
		// Check the nonce.
		if ( ! isset( $_POST['form_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['form_nonce'] ) ), 'digiblocks_form_nonce' ) ) {
			wp_send_json_error( array( 'message' => esc_html__( 'Security check failed.', 'digiblocks' ) ) );
		}

		// Get form data.
		$form_id         = isset( $_POST['form_id'] ) ? sanitize_text_field( wp_unslash( $_POST['form_id'] ) ) : '';
		$form_name       = isset( $_POST['form_name'] ) ? sanitize_text_field( wp_unslash( $_POST['form_name'] ) ) : esc_html__( 'Contact Form', 'digiblocks' );
		$field_labels    = isset( $_POST['field_labels'] ) ? json_decode( stripslashes( $_POST['field_labels'] ), true ) : array();
		$email_subject   = isset( $_POST['email_subject'] ) ? sanitize_text_field( wp_unslash( $_POST['email_subject'] ) ) : '';
		$use_site_logo   = isset( $_POST['use_site_logo'] ) ? sanitize_text_field( wp_unslash( $_POST['use_site_logo'] ) ) === 'true' : true;
		$custom_logo     = isset( $_POST['custom_logo'] ) ? esc_url_raw( wp_unslash( $_POST['custom_logo'] ) ) : '';
		$email_header    = isset( $_POST['email_header'] ) ? sanitize_text_field( wp_unslash( $_POST['email_header'] ) ) : '';
		$email_footer    = isset( $_POST['email_footer'] ) ? sanitize_text_field( wp_unslash( $_POST['email_footer'] ) ) : '';
		$business_name   = isset( $_POST['business_name'] ) ? sanitize_text_field( wp_unslash( $_POST['business_name'] ) ) : '';
		$business_address = isset( $_POST['business_address'] ) ? sanitize_text_field( wp_unslash( $_POST['business_address'] ) ) : '';

		// Validate reCAPTCHA if enabled.
		if ( isset( $_POST['recaptcha_token'] ) && $this->get_recaptcha_secret_key() ) {
			$recaptcha_token = sanitize_text_field( wp_unslash( $_POST['recaptcha_token'] ) );
			$recaptcha_verification = $this->verify_recaptcha( $recaptcha_token );

			if ( ! $recaptcha_verification['success'] ) {
				wp_send_json_error( array( 'message' => esc_html__( 'reCAPTCHA verification failed. Please try again.', 'digiblocks' ) ) );
			}
		}

		// Collect form fields.
		$field_data = array();
		$excluded_fields = array( 
			'action', 'form_id', 'form_name', 'form_nonce', 'recaptcha_token',
			'field_labels', 'email_subject', 'use_site_logo', 'custom_logo',
			'email_header', 'email_footer', 'business_name', 'business_address', 'recipient'
		);
		
		// Process all form data
		foreach ( $_POST as $key => $value ) {
			if ( ! in_array( $key, $excluded_fields, true ) ) {
				if ( is_array( $value ) ) {
					$field_data[ $key ] = map_deep( $value, 'sanitize_text_field' );
				} else {
					$field_data[ $key ] = sanitize_text_field( wp_unslash( $value ) );
				}
			}
		}

		// Process based on form type.
		$result = $this->process_contact_form( $form_name, $field_data, $field_labels, array(
			'email_subject'    => $email_subject,
			'use_site_logo'    => $use_site_logo,
			'custom_logo'      => $custom_logo,
			'email_header'     => $email_header,
			'email_footer'     => $email_footer,
			'business_name'    => $business_name,
			'business_address' => $business_address,
		) );

		if ( $result['success'] ) {
			wp_send_json_success( array( 'message' => $result['message'] ) );
		} else {
			wp_send_json_error( array( 'message' => $result['message'], 'field_errors' => $result['field_errors'] ) );
		}
	}

	/**
	 * Verify reCAPTCHA token.
	 *
	 * @param string $token reCAPTCHA token.
	 * @return array Verification result.
	 */
	private function verify_recaptcha( $token ) {
		$secret_key = $this->get_recaptcha_secret_key();

		if ( empty( $secret_key ) || empty( $token ) ) {
			return array( 'success' => false );
		}

		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$data = array(
			'secret'   => $secret_key,
			'response' => $token,
			'remoteip' => $this->get_user_ip(),
		);

		$options = array(
			'body'        => $data,
			'timeout'     => 60,
			'redirection' => 5,
			'httpversion' => '1.1',
			'blocking'    => true,
			'cookies'     => array(),
			'sslverify'   => false,
		);

		$response = wp_remote_post( $url, $options );

		if ( is_wp_error( $response ) ) {
			return array( 'success' => false );
		}

		$result = json_decode( wp_remote_retrieve_body( $response ), true );

		// Check if the score is acceptable (for v3).
		if ( isset( $result['score'] ) && $result['score'] < 0.5 ) {
			return array( 'success' => false );
		}

		return $result;
	}

	/**
	 * Get user IP address.
	 *
	 * @return string User IP address.
	 */
	private function get_user_ip() {
		$ip = '';

		if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
			$ip = sanitize_text_field( wp_unslash( $_SERVER['HTTP_CLIENT_IP'] ) );
		} elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
			$ip = sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) );
		} elseif ( ! empty( $_SERVER['REMOTE_ADDR'] ) ) {
			$ip = sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
		}

		return $ip;
	}

	/**
	 * Process contact form.
	 *
	 * @param string $form_name The form name.
	 * @param array  $field_data Form field data.
	 * @param array  $field_labels Field labels array.
	 * @param array  $email_settings Email settings.
	 * @return array Processing result.
	 */
	private function process_contact_form( $form_name, $field_data, $field_labels = array(), $email_settings = array() ) {
		// Set default values.
		$result = array(
			'success'      => false,
			'message'      => esc_html__( 'There was an error processing your contact form submission.', 'digiblocks' ),
			'field_errors' => array(),
		);

		// Get recipient email.
		$recipient = isset( $_POST['recipient'] ) ? sanitize_email( wp_unslash( $_POST['recipient'] ) ) : get_option( 'admin_email' );
		
		// Check if recipient is valid.
		if ( ! is_email( $recipient ) ) {
			$recipient = get_option( 'admin_email' );
		}

		// Get email subject.
		$subject = !empty( $email_settings['email_subject'] ) ? $email_settings['email_subject'] : sprintf( 
			/* translators: %s: Form name */
			esc_html__( 'New submission from %s', 'digiblocks' ), 
			$form_name 
		);
		
		// Build email content
		$email_content = $this->generate_html_email( $form_name, $field_data, $field_labels, $email_settings );
		$headers = array( 'Content-Type: text/html; charset=UTF-8' );

		// Add sender email if available.
		if ( isset( $field_data['email'] ) && is_email( $field_data['email'] ) ) {
			$sender_name = isset( $field_data['name'] ) ? $field_data['name'] : esc_html__( 'Site Visitor', 'digiblocks' );
			$headers[] = 'Reply-To: ' . $sender_name . ' <' . $field_data['email'] . '>';
		}

		// Send email.
		$mail_sent = wp_mail( $recipient, $subject, $email_content, $headers );

		if ( $mail_sent ) {
			$result = array(
				'success'      => true,
				'message'      => esc_html__( 'Thank you for your message. It has been sent.', 'digiblocks' ),
				'field_errors' => array(),
			);

			// Log the form submission.
			$this->log_form_submission( $form_name, $field_data );
		}

		return $result;
	}

	/**
	 * Generate HTML email content.
	 *
	 * @param string $form_name Form name.
	 * @param array  $field_data Form field data.
	 * @param array  $field_labels Field labels.
	 * @param array  $email_settings Email settings.
	 * @return string HTML email content.
	 */
	private function generate_html_email( $form_name, $field_data, $field_labels, $email_settings ) {
		// Get site info
		$site_name = !empty( $email_settings['business_name'] ) ? $email_settings['business_name'] : get_bloginfo( 'name' );
		$site_url = home_url();
		
		// Get logo
		$logo_url = '';
		if ( $email_settings['use_site_logo'] ) {
			$custom_logo_id = get_theme_mod( 'custom_logo' );
			if ( $custom_logo_id ) {
				$logo_url = wp_get_attachment_image_url( $custom_logo_id, 'full' );
			}
		} elseif ( !empty( $email_settings['custom_logo'] ) ) {
			$logo_url = $email_settings['custom_logo'];
		}
		
		// Start building HTML
		$html = '<!DOCTYPE html>
		<html>
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
			<title>' . esc_html( $form_name ) . '</title>
			<style>
				@media only screen and (max-width: 620px) {
					table.body h1 {
						font-size: 28px !important;
						margin-bottom: 10px !important;
					}
					table.body p,
					table.body ul,
					table.body ol,
					table.body td,
					table.body span,
					table.body a {
						font-size: 16px !important;
					}
					table.body .wrapper,
					table.body .article {
						padding: 10px !important;
					}
					table.body .content {
						padding: 0 !important;
					}
					table.body .container {
						padding: 0 !important;
						width: 100% !important;
					}
					table.body .main {
						border-left-width: 0 !important;
						border-radius: 0 !important;
						border-right-width: 0 !important;
					}
					table.body .btn table {
						width: 100% !important;
					}
					table.body .btn a {
						width: 100% !important;
					}
					table.body .img-responsive {
						height: auto !important;
						max-width: 100% !important;
						width: auto !important;
					}
				}
				
				.form-data-table {
					width: 100%;
					border-collapse: collapse;
					margin-bottom: 20px;
				}
				.form-data-table th, .form-data-table td {
					border: 1px solid #e2e8f0;
					padding: 10px;
				}
				.form-data-table th {
					text-align: left;
					background-color: #f8fafc;
					font-weight: bold;
					width: 30%;
				}
				.footer-text {
					font-size: 14px;
					color: #718096;
					text-align: center;
					margin-top: 20px;
					padding-top: 20px;
					border-top: 1px solid #e2e8f0;
				}
				.footer-address {
					font-size: 12px;
					color: #718096;
					text-align: center;
					margin-top: 10px;
				}
			</style>
		</head>
		<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
			<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
				<tr>
					<td style="font-family: sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
					<td class="container" style="font-family: sans-serif; font-size: 16px; vertical-align: top; display: block; max-width: 600px; padding: 10px; width: 600px; margin: 0 auto;" width="600" valign="top">
						<div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 10px;">
							
							<!-- START CENTERED WHITE CONTAINER -->
							<table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 6px; width: 100%;" width="100%">
								<!-- START MAIN CONTENT AREA -->
								<tr>
									<td class="wrapper" style="font-family: sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
										<table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
											<tr>
												<td style="font-family: sans-serif; font-size: 16px; vertical-align: top;" valign="top">';
											
		// Logo section
		if ( $logo_url ) {
			$html .= '<div style="text-align: center; margin-bottom: 20px;">
						<img src="' . esc_url( $logo_url ) . '" alt="' . esc_attr( $site_name ) . '" style="max-width: 200px; height: auto;">
					</div>';
		} else {
			$html .= '<div style="text-align: center; margin-bottom: 20px;">
						<h1 style="color: #4a6cf7; font-size: 24px; margin: 0;">' . esc_html( $site_name ) . '</h1>
					</div>';
		}
		
		// Form name title
		$html .= '<h2 style="color: #3d4852; font-size: 20px; font-weight: bold; margin-top: 0; margin-bottom: 20px; text-align: center;">
					' . sprintf( esc_html__( 'New message from %s', 'digiblocks' ), esc_html( $form_name ) ) . '
				</h2>';
		
		// Optional header text
		if ( !empty( $email_settings['email_header'] ) ) {
			$html .= '<p style="color: #3d4852; font-size: 16px; line-height: 1.5em; margin: 0 0 20px;">' . 
						esc_html( $email_settings['email_header'] ) . 
					'</p>';
		}
		
		// Form data table
		$html .= '<table class="form-data-table" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
					<tbody>';
		
		// Loop through form fields
		foreach ( $field_data as $field_id => $value ) {
			// Skip empty fields
			if (empty($value) && $value !== '0') {
				continue;
			}

			// Get the field label from field_labels array
			$label = isset($field_labels[$field_id]) ? $field_labels[$field_id] : ucfirst(str_replace(array('-', '_'), ' ', $field_id));
    
			// Handle array values
			if ( is_array( $value ) ) {
				$value = implode( ', ', $value );
			}
		
			// Format checkbox values
			if ($value === "on" || $value === "yes" || $value === "1") {
				$value = __('Yes', 'digiblocks');
			}
			
			$html .= '<tr>
						<th style="text-align: left; background-color: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0; padding: 10px; width: 30%;">' . 
							esc_html( $label ) . 
						'</th>
						<td style="border: 1px solid #e2e8f0; padding: 10px;">' . 
							nl2br( esc_html( $value ) ) . 
						'</td>
					</tr>';
		}
		
		$html .= '</tbody></table>';
		
		// Optional footer text
		if ( !empty( $email_settings['email_footer'] ) ) {
			$html .= '<p style="color: #3d4852; font-size: 16px; line-height: 1.5em; margin: 20px 0 0;">' . 
						esc_html( $email_settings['email_footer'] ) . 
					'</p>';
		}
		
		// Footer section
		$html .= '</td></tr></table></td></tr></table>';
		
		// Footer signature
		$html .= '<div class="footer-text">' . 
					sprintf( 
						esc_html__( 'This email was sent from %1$s (%2$s)', 'digiblocks' ),
						esc_html( $site_name ),
						'<a href="' . esc_url( $site_url ) . '" style="color: #4a6cf7; text-decoration: underline;">' . esc_html( $site_url ) . '</a>'
					) . 
				'</div>';
		
		// Business address (if provided)
		if ( !empty( $email_settings['business_address'] ) ) {
			$html .= '<div class="footer-address">' . esc_html( $email_settings['business_address'] ) . '</div>';
		}
		
		// Close HTML document
		$html .= '</div></td><td style="font-family: sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td></tr></table></body></html>';
		
		return $html;
	}

	/**
	 * Log form submission.
	 *
	 * @param string $form_name The form name.
	 * @param array  $field_data Form field data.
	 */
	private function log_form_submission( $form_name, $field_data ) {
		// Option to store submissions in database or trigger custom action
		do_action( 'digiblocks_form_submission', $form_name, $field_data );
	}
}

// Initialize the form handler.
DigiBlocks_Forms_Handler::get_instance();