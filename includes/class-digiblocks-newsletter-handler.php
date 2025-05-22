<?php
/**
 * DigiBlocks Newsletter Handler
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Newsletter Handler Class
 */
class DigiBlocks_Newsletter_Handler {

	/**
	 * Instance of the class.
	 *
	 * @var DigiBlocks_Newsletter_Handler
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
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'wp_ajax_digiblocks_newsletter_subscribe', array( $this, 'handle_subscription' ) );
		add_action( 'wp_ajax_nopriv_digiblocks_newsletter_subscribe', array( $this, 'handle_subscription' ) );
	}

	/**
	 * Handle newsletter subscription.
	 */
	public function handle_subscription() {
		// Verify nonce
		if ( ! wp_verify_nonce( $_POST['digiblocks_newsletter_nonce'], 'digiblocks_newsletter_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Security check failed.', 'digiblocks' ) ) );
		}

		// Sanitize input data
		$email    = sanitize_email( $_POST['email'] );
		$name     = sanitize_text_field( $_POST['name'] );
		$block_id = sanitize_text_field( $_POST['block_id'] );

		// Validate email
		if ( empty( $email ) || ! is_email( $email ) ) {
			wp_send_json_error( array( 'message' => __( 'Please enter a valid email address.', 'digiblocks' ) ) );
		}

		// Settings
		$settings = get_option( 'digiblocks_settings', array() );

		// Get newsletter platform settings
		$newsletter_platform = isset( $settings['newsletter_platform'] ) ? $settings['newsletter_platform'] : '';

		if ( empty( $newsletter_platform ) ) {
			wp_send_json_error( array( 'message' => __( 'Newsletter platform is not configured.', 'digiblocks' ) ) );
		}

		// Subscribe to the selected platform
		$result = $this->subscribe_to_platform( $newsletter_platform, $email, $name, $settings );

		if ( $result['success'] ) {
			wp_send_json_success( array( 'message' => __( 'Successfully subscribed to newsletter!', 'digiblocks' ) ) );
		} else {
			wp_send_json_error( array( 'message' => $result['message'] ) );
		}
	}

	/**
	 * Subscribe to newsletter platform.
	 *
	 * @param string $platform Platform name.
	 * @param string $email    Email address.
	 * @param string $name     Name.
	 * @param array  $settings Plugin settings.
	 * @return array
	 */
	private function subscribe_to_platform( $platform, $email, $name, $settings ) {
		switch ( $platform ) {
			case 'mailchimp':
				return $this->subscribe_mailchimp( $email, $name, $settings );
			case 'activecampaign':
				return $this->subscribe_activecampaign( $email, $name, $settings );
			case 'brevo':
				return $this->subscribe_brevo( $email, $name, $settings );
			case 'klaviyo':
				return $this->subscribe_klaviyo( $email, $name, $settings );
			case 'convertkit':
				return $this->subscribe_convertkit( $email, $name, $settings );
			case 'mailerlite':
				return $this->subscribe_mailerlite( $email, $name, $settings );
			default:
				return array(
					'success' => false,
					'message' => __( 'Unsupported newsletter platform.', 'digiblocks' ),
				);
		}
	}

	/**
	 * Subscribe to MailChimp.
	 */
	private function subscribe_mailchimp( $email, $name, $settings ) {
		$api_key     = isset( $settings['mailchimp_api_key'] ) ? $settings['mailchimp_api_key'] : '';
		$audience_id = isset( $settings['mailchimp_audience_id'] ) ? $settings['mailchimp_audience_id'] : '';
		$tags        = isset( $settings['mailchimp_tags'] ) ? $settings['mailchimp_tags'] : '';
		$double_optin = isset( $settings['mailchimp_double_optin'] ) ? $settings['mailchimp_double_optin'] : false;

		if ( empty( $api_key ) || empty( $audience_id ) ) {
			return array(
				'success' => false,
				'message' => __( 'MailChimp API key or Audience ID is missing.', 'digiblocks' ),
			);
		}

		// Extract datacenter from API key
		$datacenter = substr( $api_key, strpos( $api_key, '-' ) + 1 );
		$url = "https://{$datacenter}.api.mailchimp.com/3.0/lists/{$audience_id}/members";

		$data = array(
			'email_address' => $email,
			'status'        => $double_optin ? 'pending' : 'subscribed',
		);

		if ( ! empty( $name ) ) {
			$name_parts = explode( ' ', $name, 2 );
			$data['merge_fields'] = array(
				'FNAME' => $name_parts[0],
				'LNAME' => isset( $name_parts[1] ) ? $name_parts[1] : '',
			);
		}

		if ( ! empty( $tags ) ) {
			$tags_array = array_map( 'trim', explode( ',', $tags ) );
			$data['tags'] = $tags_array;
		}

		$response = wp_remote_post( $url, array(
			'headers' => array(
				'Authorization' => 'Basic ' . base64_encode( 'user:' . $api_key ),
				'Content-Type'  => 'application/json',
			),
			'body' => wp_json_encode( $data ),
		) );

		if ( is_wp_error( $response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to connect to MailChimp.', 'digiblocks' ),
			);
		}

		$response_code = wp_remote_retrieve_response_code( $response );
		$response_body = wp_remote_retrieve_body( $response );
		$response_data = json_decode( $response_body, true );

		if ( $response_code === 200 ) {
			return array(
				'success' => true,
				'message' => __( 'Successfully subscribed!', 'digiblocks' ),
			);
		} elseif ( $response_code === 400 && isset( $response_data['title'] ) && $response_data['title'] === 'Member Exists' ) {
			return array(
				'success' => true,
				'message' => __( 'Email is already subscribed.', 'digiblocks' ),
			);
		} else {
			$error_message = isset( $response_data['detail'] ) ? $response_data['detail'] : __( 'Subscription failed.', 'digiblocks' );
			return array(
				'success' => false,
				'message' => $error_message,
			);
		}
	}

	/**
	 * Subscribe to ActiveCampaign.
	 */
	private function subscribe_activecampaign( $email, $name, $settings ) {
		$api_url  = isset( $settings['activecampaign_api_url'] ) ? rtrim( $settings['activecampaign_api_url'], '/' ) : '';
		$api_key  = isset( $settings['activecampaign_api_key'] ) ? $settings['activecampaign_api_key'] : '';
		$list_id  = isset( $settings['activecampaign_list_id'] ) ? $settings['activecampaign_list_id'] : '';
		$tags     = isset( $settings['activecampaign_tags'] ) ? $settings['activecampaign_tags'] : '';

		if ( empty( $api_url ) || empty( $api_key ) || empty( $list_id ) ) {
			return array(
				'success' => false,
				'message' => __( 'ActiveCampaign API URL, API key, or List ID is missing.', 'digiblocks' ),
			);
		}

		$contact_data = array(
			'contact' => array(
				'email' => $email,
			),
		);

		if ( ! empty( $name ) ) {
			$name_parts = explode( ' ', $name, 2 );
			$contact_data['contact']['firstName'] = $name_parts[0];
			if ( isset( $name_parts[1] ) ) {
				$contact_data['contact']['lastName'] = $name_parts[1];
			}
		}

		// Create or update contact
		$response = wp_remote_post( $api_url . '/api/3/contact/sync', array(
			'headers' => array(
				'Api-Token'    => $api_key,
				'Content-Type' => 'application/json',
			),
			'body' => wp_json_encode( $contact_data ),
		) );

		if ( is_wp_error( $response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to connect to ActiveCampaign.', 'digiblocks' ),
			);
		}

		$response_code = wp_remote_retrieve_response_code( $response );
		$response_body = wp_remote_retrieve_body( $response );
		$response_data = json_decode( $response_body, true );

		if ( $response_code !== 201 && $response_code !== 200 ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to create contact in ActiveCampaign.', 'digiblocks' ),
			);
		}

		$contact_id = $response_data['contact']['id'];

		// Add contact to list
		$list_data = array(
			'contactList' => array(
				'list'    => $list_id,
				'contact' => $contact_id,
				'status'  => 1,
			),
		);

		$response = wp_remote_post( $api_url . '/api/3/contactLists', array(
			'headers' => array(
				'Api-Token'    => $api_key,
				'Content-Type' => 'application/json',
			),
			'body' => wp_json_encode( $list_data ),
		) );

		if ( is_wp_error( $response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to add contact to list.', 'digiblocks' ),
			);
		}

		// Add tags if specified
		if ( ! empty( $tags ) ) {
			$tags_array = array_map( 'trim', explode( ',', $tags ) );
			foreach ( $tags_array as $tag ) {
				$tag_data = array(
					'contactTag' => array(
						'contact' => $contact_id,
						'tag'     => $tag,
					),
				);

				wp_remote_post( $api_url . '/api/3/contactTags', array(
					'headers' => array(
						'Api-Token'    => $api_key,
						'Content-Type' => 'application/json',
					),
					'body' => wp_json_encode( $tag_data ),
				) );
			}
		}

		return array(
			'success' => true,
			'message' => __( 'Successfully subscribed!', 'digiblocks' ),
		);
	}

	/**
	 * Subscribe to Brevo.
	 */
	private function subscribe_brevo( $email, $name, $settings ) {
		$api_key = isset( $settings['brevo_api_key'] ) ? $settings['brevo_api_key'] : '';
		$list_id = isset( $settings['brevo_list_id'] ) ? $settings['brevo_list_id'] : '';

		if ( empty( $api_key ) || empty( $list_id ) ) {
			return array(
				'success' => false,
				'message' => __( 'Brevo API key or List ID is missing.', 'digiblocks' ),
			);
		}

		$data = array(
			'email'      => $email,
			'listIds'    => array( (int) $list_id ),
			'updateEnabled' => true,
		);

		if ( ! empty( $name ) ) {
			$name_parts = explode( ' ', $name, 2 );
			$data['attributes'] = array(
				'PRENOM' => $name_parts[0], // First name in French
				'NOM'    => isset( $name_parts[1] ) ? $name_parts[1] : '', // Last name in French
			);
		}

		$response = wp_remote_post( 'https://api.brevo.com/v3/contacts', array(
			'headers' => array(
				'api-key'      => $api_key,
				'Content-Type' => 'application/json',
			),
			'body' => wp_json_encode( $data ),
		) );

		if ( is_wp_error( $response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to connect to Brevo.', 'digiblocks' ),
			);
		}

		$response_code = wp_remote_retrieve_response_code( $response );

		if ( $response_code === 201 || $response_code === 204 ) {
			return array(
				'success' => true,
				'message' => __( 'Successfully subscribed!', 'digiblocks' ),
			);
		} else {
			return array(
				'success' => false,
				'message' => __( 'Subscription failed.', 'digiblocks' ),
			);
		}
	}

	/**
	 * Subscribe to Klaviyo.
	 */
	private function subscribe_klaviyo( $email, $name, $settings ) {
		$api_key = isset( $settings['klaviyo_api_key'] ) ? $settings['klaviyo_api_key'] : '';
		$list_id = isset( $settings['klaviyo_list_id'] ) ? $settings['klaviyo_list_id'] : '';

		if ( empty( $api_key ) || empty( $list_id ) ) {
			return array(
				'success' => false,
				'message' => __( 'Klaviyo API key or List ID is missing.', 'digiblocks' ),
			);
		}

		// Split name into first and last name
		$first_name = '';
		$last_name = '';
		if ( ! empty( $name ) ) {
			$name_parts = explode( ' ', $name, 2 );
			$first_name = $name_parts[0];
			$last_name = isset( $name_parts[1] ) ? $name_parts[1] : '';
		}

		// First create/update the profile
		$profile_url = 'https://a.klaviyo.com/api/profiles';
		$profile_data = array(
			'data' => array(
				'type' => 'profile',
				'attributes' => array(
					'email' => $email,
					'first_name' => $first_name,
					'last_name' => $last_name,
				),
			),
		);

		$profile_response = wp_remote_post( $profile_url, array(
			'headers' => array(
				'Authorization' => 'Klaviyo-API-Key ' . $api_key,
				'accept' => 'application/vnd.api+json',
				'content-type' => 'application/vnd.api+json',
				'revision' => '2025-01-15',
			),
			'body' => wp_json_encode( $profile_data ),
		) );

		if ( is_wp_error( $profile_response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to connect to Klaviyo.', 'digiblocks' ),
			);
		}

		$profile_response_code = wp_remote_retrieve_response_code( $profile_response );
		$profile_body = json_decode( wp_remote_retrieve_body( $profile_response ), true );

		if ( $profile_response_code !== 201 && $profile_response_code !== 200 ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to create profile in Klaviyo.', 'digiblocks' ),
			);
		}

		if ( ! isset( $profile_body['data']['id'] ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to get profile ID from Klaviyo.', 'digiblocks' ),
			);
		}

		// Then add the profile to the list
		$list_url = "https://a.klaviyo.com/api/lists/{$list_id}/relationships/profiles";
		$list_data = array(
			'data' => array(
				array(
					'type' => 'profile',
					'id' => $profile_body['data']['id'],
				),
			),
		);

		$list_response = wp_remote_post( $list_url, array(
			'headers' => array(
				'Authorization' => 'Klaviyo-API-Key ' . $api_key,
				'accept' => 'application/vnd.api+json',
				'content-type' => 'application/vnd.api+json',
				'revision' => '2025-01-15',
			),
			'body' => wp_json_encode( $list_data ),
		) );

		if ( is_wp_error( $list_response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to add profile to Klaviyo list.', 'digiblocks' ),
			);
		}

		$list_response_code = wp_remote_retrieve_response_code( $list_response );

		if ( $list_response_code === 204 || $list_response_code === 200 ) {
			return array(
				'success' => true,
				'message' => __( 'Successfully subscribed!', 'digiblocks' ),
			);
		} else {
			return array(
				'success' => false,
				'message' => __( 'Failed to add to Klaviyo list.', 'digiblocks' ),
			);
		}
	}

	/**
	 * Subscribe to ConvertKit.
	 */
	private function subscribe_convertkit( $email, $name, $settings ) {
		$api_key = isset( $settings['convertkit_api_key'] ) ? $settings['convertkit_api_key'] : '';
		$form_id = isset( $settings['convertkit_form_id'] ) ? $settings['convertkit_form_id'] : '';
		$tags    = isset( $settings['convertkit_tags'] ) ? $settings['convertkit_tags'] : '';

		if ( empty( $api_key ) || empty( $form_id ) ) {
			return array(
				'success' => false,
				'message' => __( 'ConvertKit API key or Form ID is missing.', 'digiblocks' ),
			);
		}

		$url = "https://api.convertkit.com/v3/forms/{$form_id}/subscribe";

		// Prepare subscription data
		$data = array(
			'api_key' => $api_key,
			'email'   => $email,
		);

		// Handle name - split into first and last name
		if ( ! empty( $name ) ) {
			$name_parts = explode( ' ', $name, 2 );
			$data['first_name'] = $name_parts[0];
			
			// Add last name to custom fields if provided
			if ( isset( $name_parts[1] ) && ! empty( $name_parts[1] ) ) {
				$data['fields'] = array(
					'last_name' => $name_parts[1],
				);
			}
		}

		// Add tags if specified
		if ( ! empty( $tags ) ) {
			$tag_array = array_map( 'trim', explode( ',', $tags ) );
			// Convert tags to integers if they're numeric
			$data['tags'] = array_map(
				function ( $tag ) {
					return is_numeric( $tag ) ? (int) $tag : $tag;
				},
				$tag_array
			);
		}

		$response = wp_remote_post( $url, array(
			'headers' => array(
				'Content-Type' => 'application/json; charset=utf-8',
			),
			'body' => wp_json_encode( $data ),
		) );

		if ( is_wp_error( $response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to connect to ConvertKit.', 'digiblocks' ),
			);
		}

		$response_code = wp_remote_retrieve_response_code( $response );
		$response_body = wp_remote_retrieve_body( $response );

		if ( $response_code !== 200 ) {
			return array(
				'success' => false,
				'message' => __( 'ConvertKit subscription failed.', 'digiblocks' ),
			);
		}

		$body = json_decode( $response_body, true );
		if ( json_last_error() !== JSON_ERROR_NONE ) {
			return array(
				'success' => false,
				'message' => __( 'Invalid response from ConvertKit.', 'digiblocks' ),
			);
		}

		if ( ! isset( $body['subscription'] ) ) {
			return array(
				'success' => false,
				'message' => __( 'ConvertKit subscription was not created.', 'digiblocks' ),
			);
		}

		return array(
			'success' => true,
			'message' => __( 'Successfully subscribed!', 'digiblocks' ),
		);
	}

	/**
	 * Subscribe to MailerLite.
	 */
	private function subscribe_mailerlite( $email, $name, $settings ) {
		$api_key  = isset( $settings['mailerlite_api_key'] ) ? $settings['mailerlite_api_key'] : '';
		$group_id = isset( $settings['mailerlite_group_id'] ) ? $settings['mailerlite_group_id'] : '';

		if ( empty( $api_key ) || empty( $group_id ) ) {
			return array(
				'success' => false,
				'message' => __( 'MailerLite API key or Group ID is missing.', 'digiblocks' ),
			);
		}

		$data = array(
			'email'  => $email,
			'groups' => array( $group_id ),
		);

		if ( ! empty( $name ) ) {
			$data['name'] = $name;
		}

		$response = wp_remote_post( 'https://api.mailerlite.com/api/v2/subscribers', array(
			'headers' => array(
				'X-MailerLite-ApiKey' => $api_key,
				'Content-Type'        => 'application/json',
			),
			'body' => wp_json_encode( $data ),
		) );

		if ( is_wp_error( $response ) ) {
			return array(
				'success' => false,
				'message' => __( 'Failed to connect to MailerLite.', 'digiblocks' ),
			);
		}

		$response_code = wp_remote_retrieve_response_code( $response );

		if ( $response_code === 200 || $response_code === 201 ) {
			return array(
				'success' => true,
				'message' => __( 'Successfully subscribed!', 'digiblocks' ),
			);
		} else {
			return array(
				'success' => false,
				'message' => __( 'Subscription failed.', 'digiblocks' ),
			);
		}
	}
}

// Initialize the newsletter handler
DigiBlocks_Newsletter_Handler::get_instance();