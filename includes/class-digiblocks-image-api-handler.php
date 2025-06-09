<?php
/**
 * DigiBlocks Image API Handler
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class DigiBlocks_Image_API_Handler
 */
class DigiBlocks_Image_API_Handler {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_ajax_digiblocks_search_images', array( $this, 'ajax_search_images' ) );
		add_action( 'wp_ajax_digiblocks_download_image', array( $this, 'ajax_download_image' ) );
	}

	/**
	 * AJAX handler for searching images
	 */
	public function ajax_search_images() {
		// Verify nonce
		if ( ! wp_verify_nonce( $_POST['nonce'], 'digiblocks_image_search_nonce' ) ) {
			wp_die( esc_html__( 'Security check failed', 'digiblocks' ) );
		}

		// Check user permissions
		if ( ! current_user_can( 'upload_files' ) ) {
			wp_die( esc_html__( 'Insufficient permissions', 'digiblocks' ) );
		}

		$query = sanitize_text_field( $_POST['query'] );
		$page = intval( $_POST['page'] );
		$per_page = intval( $_POST['per_page'] );

		if ( empty( $query ) ) {
			wp_send_json_error( __( 'Search query is required', 'digiblocks' ) );
		}

		$settings = get_option( 'digiblocks_settings', array() );
		$provider = isset( $settings['image_api_provider'] ) ? $settings['image_api_provider'] : '';

		if ( empty( $provider ) ) {
			wp_send_json_error( __( 'No image API provider configured', 'digiblocks' ) );
		}

		$results = $this->search_images( $provider, $query, $page, $per_page );

		if ( is_wp_error( $results ) ) {
			wp_send_json_error( $results->get_error_message() );
		}

		wp_send_json_success( $results );
	}

	/**
	 * AJAX handler for downloading and uploading image to media library
	 */
	public function ajax_download_image() {
		// Verify nonce
		if ( ! wp_verify_nonce( $_POST['nonce'], 'digiblocks_image_search_nonce' ) ) {
			wp_die( esc_html__( 'Security check failed', 'digiblocks' ) );
		}

		// Check user permissions
		if ( ! current_user_can( 'upload_files' ) ) {
			wp_die( esc_html__( 'Insufficient permissions', 'digiblocks' ) );
		}

		// Decode JSON string to array
		$image_data_json = $_POST['image_data'];
		$image_data = json_decode( stripslashes( $image_data_json ), true );
		
		if ( ! $image_data || ! is_array( $image_data ) ) {
			wp_send_json_error( __( 'Invalid image data', 'digiblocks' ) );
		}
		
		// Sanitize image data
		$image_url = esc_url_raw( $image_data['url'] );
		$image_title = sanitize_text_field( $image_data['title'] );
		$image_alt = sanitize_text_field( $image_data['alt'] );
		$author_name = sanitize_text_field( $image_data['author'] );
		$author_url = esc_url_raw( $image_data['author_url'] );
		$source_url = esc_url_raw( $image_data['source_url'] );

		if ( empty( $image_url ) ) {
			wp_send_json_error( __( 'Image URL is required', 'digiblocks' ) );
		}

		$result = $this->download_and_upload_image( $image_url, $image_title, $image_alt, $author_name, $author_url, $source_url );

		if ( is_wp_error( $result ) ) {
			wp_send_json_error( $result->get_error_message() );
		}

		wp_send_json_success( $result );
	}

	/**
	 * Search images from the configured provider
	 *
	 * @param string $provider The API provider
	 * @param string $query Search query
	 * @param int $page Page number
	 * @param int $per_page Results per page
	 * @return array|WP_Error
	 */
	private function search_images( $provider, $query, $page = 1, $per_page = 20 ) {
		$settings = get_option( 'digiblocks_settings', array() );

		switch ( $provider ) {
			case 'unsplash':
				return $this->search_unsplash( $query, $page, $per_page, $settings );
			case 'pexels':
				return $this->search_pexels( $query, $page, $per_page, $settings );
			case 'pixabay':
				return $this->search_pixabay( $query, $page, $per_page, $settings );
			default:
				return new WP_Error( 'invalid_provider', __( 'Invalid image API provider', 'digiblocks' ) );
		}
	}

	/**
	 * Search Unsplash API
	 */
	private function search_unsplash( $query, $page, $per_page, $settings ) {
		$access_key = isset( $settings['unsplash_access_key'] ) ? $settings['unsplash_access_key'] : '';
		$application_id = isset( $settings['unsplash_application_id'] ) ? $settings['unsplash_application_id'] : '';
		
		if ( empty( $access_key ) ) {
			return new WP_Error( 'no_api_key', __( 'Unsplash Access Key not configured', 'digiblocks' ) );
		}

		$url = add_query_arg( array(
			'query' => $query,
			'page' => $page,
			'per_page' => min( $per_page, 30 ), // Unsplash max is 30
			'orientation' => 'landscape'
		), 'https://api.unsplash.com/search/photos' );

		$headers = array(
			'Authorization' => 'Client-ID ' . $access_key,
		);

		// Add Application ID header if provided
		if ( ! empty( $application_id ) ) {
			$headers['X-Unsplash-Client-ID'] = $application_id;
		}

		$response = wp_remote_get( $url, array(
			'headers' => $headers,
			'timeout' => 15
		) );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$body = wp_remote_retrieve_body( $response );
		$data = json_decode( $body, true );

		if ( ! $data || isset( $data['errors'] ) ) {
			return new WP_Error( 'api_error', __( 'Unsplash API error', 'digiblocks' ) );
		}

		$images = array();
		foreach ( $data['results'] as $photo ) {
			$images[] = array(
				'id' => $photo['id'],
				'title' => $photo['alt_description'] ?: $photo['description'] ?: 'Unsplash Image',
				'url' => $photo['urls']['regular'],
				'thumb' => $photo['urls']['thumb'],
				'width' => $photo['width'],
				'height' => $photo['height'],
				'author' => $photo['user']['name'],
				'author_url' => $photo['user']['links']['html'],
				'source_url' => $photo['links']['html'],
				'alt' => $photo['alt_description'] ?: $photo['description'] ?: '',
			);
		}

		return array(
			'images' => $images,
			'total' => $data['total'],
			'page' => $page,
			'per_page' => $per_page,
		);
	}

	/**
	 * Search Pexels API
	 */
	private function search_pexels( $query, $page, $per_page, $settings ) {
		$api_key = isset( $settings['pexels_api_key'] ) ? $settings['pexels_api_key'] : '';
		
		if ( empty( $api_key ) ) {
			return new WP_Error( 'no_api_key', __( 'Pexels API key not configured', 'digiblocks' ) );
		}

		$url = add_query_arg( array(
			'query' => $query,
			'page' => $page,
			'per_page' => min( $per_page, 80 ), // Pexels max is 80
		), 'https://api.pexels.com/v1/search' );

		$response = wp_remote_get( $url, array(
			'headers' => array(
				'Authorization' => $api_key,
			),
			'timeout' => 15
		) );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$body = wp_remote_retrieve_body( $response );
		$data = json_decode( $body, true );

		if ( ! $data || isset( $data['error'] ) ) {
			return new WP_Error( 'api_error', __( 'Pexels API error', 'digiblocks' ) );
		}

		$images = array();
		foreach ( $data['photos'] as $photo ) {
			$images[] = array(
				'id' => $photo['id'],
				'title' => $photo['alt'] ?: 'Pexels Image',
				'url' => $photo['src']['large'],
				'thumb' => $photo['src']['medium'],
				'width' => $photo['width'],
				'height' => $photo['height'],
				'author' => $photo['photographer'],
				'author_url' => $photo['photographer_url'],
				'source_url' => $photo['url'],
				'alt' => $photo['alt'] ?: '',
			);
		}

		return array(
			'images' => $images,
			'total' => $data['total_results'],
			'page' => $page,
			'per_page' => $per_page,
		);
	}

	/**
	 * Search Pixabay API
	 */
	private function search_pixabay( $query, $page, $per_page, $settings ) {
		$api_key = isset( $settings['pixabay_api_key'] ) ? $settings['pixabay_api_key'] : '';
		
		if ( empty( $api_key ) ) {
			return new WP_Error( 'no_api_key', __( 'Pixabay API key not configured', 'digiblocks' ) );
		}

		$url = add_query_arg( array(
			'key' => $api_key,
			'q' => $query,
			'image_type' => 'photo',
			'page' => $page,
			'per_page' => min( $per_page, 200 ), // Pixabay max is 200
			'safesearch' => 'true',
			'min_width' => 640,
		), 'https://pixabay.com/api/' );

		$response = wp_remote_get( $url, array(
			'timeout' => 15
		) );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$body = wp_remote_retrieve_body( $response );
		$data = json_decode( $body, true );

		if ( ! $data || isset( $data['error'] ) ) {
			return new WP_Error( 'api_error', __( 'Pixabay API error', 'digiblocks' ) );
		}

		$images = array();
		foreach ( $data['hits'] as $photo ) {
			$images[] = array(
				'id' => $photo['id'],
				'title' => $photo['tags'] ?: 'Pixabay Image',
				'url' => $photo['largeImageURL'],
				'thumb' => $photo['previewURL'],
				'width' => $photo['imageWidth'],
				'height' => $photo['imageHeight'],
				'author' => $photo['user'],
				'author_url' => 'https://pixabay.com/users/' . $photo['user'] . '-' . $photo['user_id'] . '/',
				'source_url' => $photo['pageURL'],
				'alt' => $photo['tags'] ?: '',
			);
		}

		return array(
			'images' => $images,
			'total' => $data['totalHits'],
			'page' => $page,
			'per_page' => $per_page,
		);
	}

	/**
	 * Download image and upload to media library
	 */
	private function download_and_upload_image( $image_url, $title, $alt, $author, $author_url, $source_url ) {
		require_once ABSPATH . 'wp-admin/includes/media.php';
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/image.php';

		// Download image
		$response = wp_remote_get( $image_url, array(
			'timeout' => 30
		) );

		if ( is_wp_error( $response ) ) {
			return new WP_Error( 'download_failed', __( 'Failed to download image', 'digiblocks' ) );
		}

		$image_data = wp_remote_retrieve_body( $response );
		$content_type = wp_remote_retrieve_header( $response, 'content-type' );

		// Get file extension from content type
		$extension = '';
		if ( strpos( $content_type, 'jpeg' ) !== false ) {
			$extension = '.jpg';
		} elseif ( strpos( $content_type, 'png' ) !== false ) {
			$extension = '.png';
		} elseif ( strpos( $content_type, 'webp' ) !== false ) {
			$extension = '.webp';
		} else {
			$extension = '.jpg'; // Default fallback
		}

		// Create a safe, short filename
		$safe_title = $this->create_safe_filename( $title );
		$filename = $safe_title . $extension;
		$filename = wp_unique_filename( wp_upload_dir()['path'], $filename );

		// Save to temporary file
		$upload_dir = wp_upload_dir();
		$temp_file = $upload_dir['path'] . '/' . $filename;
		
		$saved = file_put_contents( $temp_file, $image_data );
		if ( ! $saved ) {
			return new WP_Error( 'save_failed', __( 'Failed to save image', 'digiblocks' ) );
		}

		// Prepare attachment data
		$attachment = array(
			'guid' => $upload_dir['url'] . '/' . $filename,
			'post_mime_type' => $content_type,
			'post_title' => $title,
			'post_content' => '',
			'post_status' => 'inherit'
		);

		// Insert attachment
		$attachment_id = wp_insert_attachment( $attachment, $temp_file );
		
		if ( is_wp_error( $attachment_id ) ) {
			unlink( $temp_file );
			return $attachment_id;
		}

		// Generate metadata
		$attachment_data = wp_generate_attachment_metadata( $attachment_id, $temp_file );
		wp_update_attachment_metadata( $attachment_id, $attachment_data );

		// Update alt text and attribution
		update_post_meta( $attachment_id, '_wp_attachment_image_alt', $alt );
		
		// Add attribution information
		$caption = '';
		if ( $author && $author_url ) {
			$caption = sprintf( 'Photo by %s', $author );
		}
		
		if ( $caption ) {
			wp_update_post( array(
				'ID' => $attachment_id,
				'post_excerpt' => $caption
			) );
		}

		// Get attachment data for response
		$attachment_url = wp_get_attachment_url( $attachment_id );
		$attachment_metadata = wp_get_attachment_metadata( $attachment_id );

		return array(
			'id' => $attachment_id,
			'url' => $attachment_url,
			'alt' => $alt,
			'title' => $title,
			'sizes' => isset( $attachment_metadata['sizes'] ) ? $attachment_metadata['sizes'] : array(),
		);
	}

	/**
	 * Create a safe filename from title
	 *
	 * @param string $title Original title
	 * @return string Safe filename
	 */
	private function create_safe_filename( $title ) {
		// Fallback if title is empty
		if ( empty( $title ) ) {
			return 'digiblocks-image-' . time();
		}

		// Convert to lowercase and replace spaces with hyphens
		$safe_name = strtolower( $title );
		
		// Remove or replace problematic characters
		$safe_name = preg_replace( '/[^a-z0-9\s\-]/', '', $safe_name );
		$safe_name = preg_replace( '/\s+/', '-', $safe_name );
		$safe_name = preg_replace( '/-+/', '-', $safe_name );
		$safe_name = trim( $safe_name, '-' );
		
		// Truncate to reasonable length (max 50 characters)
		if ( strlen( $safe_name ) > 50 ) {
			$safe_name = substr( $safe_name, 0, 50 );
			// Remove any trailing incomplete word
			$last_dash = strrpos( $safe_name, '-' );
			if ( $last_dash !== false && $last_dash > 30 ) {
				$safe_name = substr( $safe_name, 0, $last_dash );
			}
		}
		
		// Final fallback if processing resulted in empty string
		if ( empty( $safe_name ) || strlen( $safe_name ) < 3 ) {
			return 'digiblocks-image-' . time();
		}
		
		return $safe_name;
	}
}