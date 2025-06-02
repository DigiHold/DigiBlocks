<?php
/**
 * Register block with render callback
 *
 * @package DigiBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class DigiBlocks_Register_Blocks
 */
class DigiBlocks_Register_Blocks {
	/**
	 * Instance of the plugin.
	 *
	 * @var DigiBlocks
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
		// Pagination helper
		require_once DIGIBLOCKS_PLUGIN_DIR . 'includes/class-digiblocks-block-pagination.php';

		// Register blocks with server-side rendering
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Register block with render callback
	 */
	public function register_blocks() {
		// Create a list of blocks that need server-side rendering
		$blocks = array(
			'logo'            => array( $this, 'render_logo_block' ),
			'navigation'      => array( $this, 'render_navigation_block' ),
			'login-link'      => array( $this, 'render_login_link_block' ),
			'posts'           => array( $this, 'render_posts_block' ),
			'page-title'      => array( $this, 'render_page_title_block' ),
			'breadcrumbs'     => array( $this, 'render_breadcrumbs_block' ),
			'featured-image'  => array( $this, 'render_featured_image_block' ),
			'post-meta'       => array( $this, 'render_post_meta_block' ),
			'post-content'    => array( $this, 'render_post_content_block' ),
			'post-navigation' => array( $this, 'render_post_navigation_block' ),
			'author-box'      => array( $this, 'render_author_box_block' ),
			'related-posts'   => array( $this, 'render_related_posts_block' ),
			'post-comments'   => array( $this, 'render_post_comments_block' ),
			'taxonomy'        => array( $this, 'render_taxonomy_block' ),
			'search-results'  => array( $this, 'render_search_results_block' ),
			'copyright'       => array( $this, 'render_copyright_block' ),
		);

		foreach ( $blocks as $block_name => $render_callback ) {
			if ( digiblocks_init()->get_block_active_status( $block_name ) ) {
				register_block_type(
					'digiblocks/' . $block_name,
					array(
						'render_callback' => $render_callback,
					)
				);
			}
		}

		// Register DigiCommerce blocks if active
		$digiBlocks = array(
			'digi-products'             => array( $this, 'render_digi_products_block' ),
			'digi-cart-icon'            => array( $this, 'render_digi_cart_icon_block' ),
			'digi-price'                => array( $this, 'render_digi_price_block' ),
			'digi-product-gallery'      => array( $this, 'render_digi_product_gallery_block' ),
			'digi-product-meta'         => array( $this, 'render_digi_product_meta_block' ),
			'digi-product-content'      => array( $this, 'render_digi_product_content_block' ),
			'digi-product-features'     => array( $this, 'render_digi_product_features_block' ),
			'digi-product-add-to-cart'  => array( $this, 'render_digi_product_add_to_cart_block' ),
			'digi-product-reviews'      => array( $this, 'render_digi_product_reviews_block' ),
			'digi-product-reviews-form' => array( $this, 'render_digi_product_reviews_form_block' ),
		);

		foreach ( $digiBlocks as $block_name => $render_callback ) {
			if ( digiblocks_init()->get_block_active_status( $block_name ) && class_exists( 'DigiCommerce' ) ) {
				register_block_type(
					'digiblocks/' . $block_name,
					array(
						'render_callback' => $render_callback,
					)
				);
			}
		}

		// Register WooCommerce blocks if active
		$wooBlocks = array(
			'woo-products'             => array( $this, 'render_woo_products_block' ),
			'woo-cart-icon'            => array( $this, 'render_woo_cart_icon_block' ),
			'woo-price'                => array( $this, 'render_woo_price_block' ),
			'woo-product-gallery'      => array( $this, 'render_woo_product_gallery_block' ),
			'woo-product-meta'         => array( $this, 'render_woo_product_meta_block' ),
			'woo-product-content'      => array( $this, 'render_woo_product_content_block' ),
			'woo-product-add-to-cart'  => array( $this, 'render_woo_product_add_to_cart_block' ),
			'woo-product-reviews'      => array( $this, 'render_woo_product_reviews_block' ),
			'woo-product-reviews-form' => array( $this, 'render_woo_product_reviews_form_block' ),
		);

		foreach ( $wooBlocks as $block_name => $render_callback ) {
			if ( digiblocks_init()->get_block_active_status( $block_name ) && class_exists( 'WooCommerce' ) ) {
				register_block_type(
					'digiblocks/' . $block_name,
					array(
						'render_callback' => $render_callback,
					)
				);
			}
		}
	}

	/**
	 * Render callback for logo block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_logo_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-logo-' . uniqid();
		$anchor = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$customClasses = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$logoType = isset( $attributes['logoType'] ) ? $attributes['logoType'] : 'image';
		$imageUrl = isset( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';
		$imageAlt = isset( $attributes['imageAlt'] ) ? $attributes['imageAlt'] : '';
		$text = isset( $attributes['text'] ) ? $attributes['text'] : '';
		$textIcon = isset( $attributes['textIcon'] ) ? $attributes['textIcon'] : null;
		$iconPosition = isset( $attributes['iconPosition'] ) ? $attributes['iconPosition'] : 'before';
		$animation = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		$hoverEffect = isset( $attributes['hoverEffect'] ) ? $attributes['hoverEffect'] : 'none';
		$linkEnabled = isset( $attributes['linkEnabled'] ) ? (bool) $attributes['linkEnabled'] : true;
		$linkUrl = isset( $attributes['linkUrl'] ) ? $attributes['linkUrl'] : '';
		$linkOpenInNewTab = isset( $attributes['linkOpenInNewTab'] ) ? (bool) $attributes['linkOpenInNewTab'] : false;
		$linkRel = isset( $attributes['linkRel'] ) ? $attributes['linkRel'] : '';

		// Build block classes
		$block_classes = "digiblocks-logo $id";
		if ($animation !== 'none') {
			$block_classes .= " animate-$animation";
		}
		if ($hoverEffect !== 'none') {
			$block_classes .= " has-hover-$hoverEffect";
		}
		if ($customClasses) {
			$block_classes .= " $customClasses";
		}

		// Schema markup
		$org_schema = digiblocks_get_schema_markup('organization');
		$logo_schema = digiblocks_get_schema_property('logo');
		$url_schema = digiblocks_get_schema_property('url');

		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $block_classes ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( $org_schema ); ?>>
			<?php 
			// Determine if we should show a link
			$showLink = $linkEnabled;
			$targetUrl = $linkEnabled ? (!empty($linkUrl) ? $linkUrl : home_url()) : '';
			
			if ($showLink && $targetUrl): 
			?>
				<a href="<?php echo esc_url($targetUrl); ?>" 
				class="digiblocks-logo-link" 
				<?php if ($linkOpenInNewTab): ?>target="_blank"<?php endif; ?>
				<?php if ($linkOpenInNewTab): ?>rel="noopener noreferrer"<?php elseif ($linkRel): ?>rel="<?php echo esc_attr($linkRel); ?>"<?php endif; ?>
				<?php echo wp_kses_post( $url_schema ); ?>>
			<?php endif; ?>
			
			<div class="digiblocks-logo-container">
				<?php if ($logoType === 'image' && !empty($imageUrl)): ?>
					<img src="<?php echo esc_url($imageUrl); ?>" 
						alt="<?php echo esc_attr($imageAlt); ?>" 
						class="digiblocks-logo-image" 
						<?php echo wp_kses_post( $logo_schema ); ?> />
						
				<?php elseif ($logoType === 'text' && !empty($text)): ?>
					<div class="digiblocks-logo-text-wrapper" <?php echo wp_kses_post( $logo_schema ); ?>>
						<?php if ($textIcon && isset($textIcon['svg']) && $iconPosition === 'above'): ?>
							<div class="digiblocks-logo-icon">
								<?php echo wp_kses($textIcon['svg'], digiblocks_allow_svg_in_kses()); ?>
							</div>
						<?php endif; ?>
						
						<?php if ($textIcon && isset($textIcon['svg']) && $iconPosition === 'before'): ?>
							<div class="digiblocks-logo-icon">
								<?php echo wp_kses($textIcon['svg'], digiblocks_allow_svg_in_kses()); ?>
							</div>
						<?php endif; ?>
						
						<span class="digiblocks-logo-text"><?php echo wp_kses_post($text); ?></span>
						
						<?php if ($textIcon && isset($textIcon['svg']) && $iconPosition === 'after'): ?>
							<div class="digiblocks-logo-icon">
								<?php echo wp_kses($textIcon['svg'], digiblocks_allow_svg_in_kses()); ?>
							</div>
						<?php endif; ?>
					</div>
					
				<?php endif; ?>
			</div>
			
			<?php if ($showLink && $targetUrl): ?>
				</a>
			<?php endif; ?>
		</div>
		<?php
		
		return ob_get_clean();
	}

	/**
	 * Render callback for navigation block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_navigation_block( $attributes, $content, $block ) {
		// Get block attributes
		$id = $attributes['id'] ?? '';
		$anchor = $attributes['anchor'] ?? '';
		$customClasses = $attributes['customClasses'] ?? '';
		$menuType = $attributes['menuType'] ?? 'wordpress';
		$selectedMenu = $attributes['selectedMenu'] ?? null;
		$customItems = $attributes['customItems'] ?? array();
		$showMobileToggle = $attributes['showMobileToggle'] ?? true;
		
		// Build class names
		$block_classes = array(
			'digiblocks-navigation',
			$id,
			$customClasses,
		);
		
		$block_classes = array_filter($block_classes);
		$block_classes = implode(' ', $block_classes);
	
		// Get SVG allowed elements
		$allowed_svg = digiblocks_allow_svg_in_kses();
		
		// Start output buffering
		ob_start();
		?>
		<nav class="<?php echo esc_attr($block_classes); ?>"<?php echo !empty($anchor) ? ' id="' . esc_attr($anchor) . '"' : ''; ?> <?php echo wp_kses_post( digiblocks_get_schema_markup('navigation') ); ?>>
			
			<?php if ($showMobileToggle): ?>
				<button class="digiblocks-mobile-toggle" aria-label="<?php esc_attr_e('Toggle navigation', 'digiblocks'); ?>" data-toggle-target="<?php echo esc_attr($id); ?>">
					<span></span>
					<span></span>
					<span></span>
				</button>
			<?php endif; ?>
			
			<div class="digiblocks-navigation-menu-wrapper">
				<ul class="digiblocks-navigation-menu" id="<?php echo esc_attr('menu-' . $id); ?>">
					<?php if ($menuType === 'wordpress' && $selectedMenu): ?>
						<?php
						// Render WordPress menu
						wp_nav_menu(array(
							'menu' => $selectedMenu['id'],
							'container' => false,
							'items_wrap' => '%3$s',
							'depth' => 0,
							'fallback_cb' => false,
							'walker' => new DigiBlocks_Navigation_Walker()
						));
						?>
					<?php endif; ?>
					
					<?php foreach($customItems as $item): ?>
						<li class="digiblocks-navigation-menu-item">
							<a href="<?php echo esc_url($item['url']); ?>" 
							class="digiblocks-navigation-link"
							<?php echo (!empty($item['opensInNewTab']) ? 'target="_blank"' : ''); ?>
							<?php echo (!empty($item['rel']) ? 'rel="' . esc_attr($item['rel']) . '"' : (!empty($item['opensInNewTab']) ? 'rel="noopener noreferrer"' : '')); ?>>
								
								<?php 
								// Get icon position - defaults to 'before' if not set
								$icon_position = isset($item['iconPosition']) ? $item['iconPosition'] : 'before'; 
								
								// Display icon before text if position is 'before'
								if ($icon_position === 'before' && !empty($item['icon']['svg'])): 
								?>
									<span class="digiblocks-navigation-icon">
									<?php echo wp_kses($item['icon']['svg'], $allowed_svg); ?>
									</span>
								<?php endif; ?>
								
								<span class="digiblocks-navigation-text"><?php echo esc_html($item['text']); ?></span>
								
								<?php 
								// Display icon after text if position is 'after'
								if ($icon_position === 'after' && !empty($item['icon']['svg'])): 
								?>
									<span class="digiblocks-navigation-icon">
										<?php echo wp_kses($item['icon']['svg'], $allowed_svg); ?>
									</span>
								<?php endif; ?>
							</a>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</nav>
		<?php
		
		return ob_get_clean();
	}

	/**
	 * Render callback for login link block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_login_link_block( $attributes, $content, $block ) {
		// Get block attributes
		$id = $attributes['id'] ?? '';
		$anchor = $attributes['anchor'] ?? '';
		$custom_classes = $attributes['customClasses'] ?? '';
		
		// Check if user is logged in
		$is_logged_in = is_user_logged_in();
		
		if ($is_logged_in) {
			// Use logged in attributes
			$text = $attributes['loggedInText'] ?? __('My Account', 'digiblocks');
			$icon_value = $attributes['loggedInIconValue'] ?? null;
			$icon_position = $attributes['loggedInIconPosition'] ?? 'left';
			$url = $attributes['loggedInUrl'] ?? '';
			$new_tab = $attributes['loggedInOpenInNewTab'] ?? false;
			$rel = $attributes['loggedInRel'] ?? '';
			
			// Default to account page if no URL is provided
			if (empty($url)) {
				$url = get_edit_profile_url();
			}
		} else {
			// Use login attributes
			$text = $attributes['loginText'] ?? __('Log In', 'digiblocks');
			$icon_value = $attributes['loginIconValue'] ?? null;
			$icon_position = $attributes['loginIconPosition'] ?? 'left';
			$url = $attributes['loginUrl'] ?? '';
			$new_tab = $attributes['loginOpenInNewTab'] ?? false;
			$rel = $attributes['loginRel'] ?? '';
			
			// Default to login page if no URL is provided
			if (empty($url)) {
				$request_uri = isset( $_SERVER['REQUEST_URI'] ) ? esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';
				$url = wp_login_url( home_url( $request_uri ) );
			}
		}
		
		// Build class names
		$classes = "digiblocks-login-link $id $custom_classes";
		
		// Build the link
		$link = '<div class="' . esc_attr($classes) . '"';
			if (!empty($anchor)) {
				$link .= ' id="' . esc_attr($anchor) . '"';
			}
		$link .= '>';
			$link .= '<a href="' . esc_url($url) . '"';
			if ($new_tab) {
				$link .= ' target="_blank"';
				$rel = !empty($rel) ? $rel . ' noopener noreferrer' : 'noopener noreferrer';
			}
			if (!empty($rel)) {
				$link .= ' rel="' . esc_attr($rel) . '"';
			}
			$link .= '>';
			
			// Add content based on icon position
			$icon_html = '';
			if ($icon_value && isset($icon_value['svg'])) {
				$icon_html = '<span class="digiblocks-login-link-icon">' . $icon_value['svg'] . '</span>';
			}
			
			if ($icon_position === 'left') {
				$link .= $icon_html;
			}
			
			$link .= '<span class="digiblocks-login-link-text">' . esc_html($text) . '</span>';
			
			if ($icon_position === 'right') {
				$link .= $icon_html;
			}
			
			$link .= '</a>';
		$link .= '</div>';
		
		return $link;
	}

	/**
	 * Render callback for posts block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_posts_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id                       = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-posts-' . uniqid();
		$anchor                   = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes           = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$posts_to_show            = isset( $attributes['postsToShow'] ) ? $attributes['postsToShow'] : 3;
		$post_style               = isset( $attributes['postStyle'] ) ? $attributes['postStyle'] : 'grid';
		$display_featured_image   = isset( $attributes['displayFeaturedImage'] ) ? $attributes['displayFeaturedImage'] : true;
		$display_title            = isset( $attributes['displayTitle'] ) ? $attributes['displayTitle'] : true;
		$display_meta             = isset( $attributes['displayMeta'] ) ? $attributes['displayMeta'] : true;
		$display_excerpt          = isset( $attributes['displayExcerpt'] ) ? $attributes['displayExcerpt'] : true;
		$display_read_more_button = isset( $attributes['displayReadMoreButton'] ) ? $attributes['displayReadMoreButton'] : true;
		$meta_settings            = isset( $attributes['metaSettings'] ) ? $attributes['metaSettings'] : [
			'displayAuthor'     => true,
			'displayDate'       => true,
			'displayCategories' => true,
			'displayComments'   => true,
		];
		$excerpt_length           = isset( $attributes['excerptLength'] ) ? $attributes['excerptLength'] : 25;
		$read_more_text           = isset( $attributes['readMoreText'] ) ? $attributes['readMoreText'] : __( 'Read More', 'digiblocks' );
		$order                    = isset( $attributes['order'] ) ? $attributes['order'] : 'desc';
		$order_by                 = isset( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date';
		$categories               = isset( $attributes['categories'] ) ? $attributes['categories'] : [];
		$animation                = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		$image_size               = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'medium';

		// Pagination attributes
		$enable_pagination        = isset( $attributes['enablePagination'] ) ? $attributes['enablePagination'] : false;
			
		// Get the current responsive state
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
	
		// Build the block class
		$block_class = "digiblocks-posts $id style-$post_style $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Get the pagination helper
		$pagination = DigiBlocks_Block_Pagination::get_instance();

		// Get current page for this block
		$current_page = $pagination->get_current_page_for_block( 'posts' );
	
		// Set up the query arguments
		$args = array(
			'posts_per_page'      => $posts_to_show,
			'post_status'         => 'publish',
			'order'               => $order,
			'orderby'             => $order_by,
			'ignore_sticky_posts' => true,
			'paged'               => $current_page,
		);
	
		// Add categories if specified
		if ( ! empty( $categories ) && ! in_array( 0, $categories, true ) ) {
			$args['category__in'] = $categories;
		}
	
		// Get posts
		$query = new WP_Query( $args );
	
		// Start output buffer
		ob_start();
	
		if ( $query->have_posts() ) :
			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-posts-container <?php echo 'layout-' . esc_attr( $post_style ); ?>">
					<?php while ( $query->have_posts() ) : ?>
						<?php 
						$query->the_post(); 
						$post_id = get_the_ID();
						?>
						<article class="digiblocks-post-item" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'blog-post' ) ); ?>>
							<?php if ( $display_featured_image && has_post_thumbnail() ) : ?>
								<div class="digiblocks-post-image" <?php echo wp_kses_post( digiblocks_get_schema_property( 'image' ) ); ?>>
									<a href="<?php the_permalink(); ?>">
										<?php the_post_thumbnail( $image_size ); ?>
									</a>
								</div>
							<?php endif; ?>
	
							<div class="digiblocks-post-content">
								<?php if ( $display_title ) : ?>
									<h3 class="digiblocks-post-title" <?php echo wp_kses_post( digiblocks_get_schema_property( 'headline' ) ); ?>>
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</h3>
								<?php endif; ?>
	
								<?php if ( $display_excerpt ) : ?>
									<div class="digiblocks-post-excerpt" <?php echo wp_kses_post( digiblocks_get_schema_property( 'description' ) ); ?>>
										<?php 
										// Get the excerpt
										$excerpt = get_the_excerpt();
										
										// Limit by word count
										$words = explode(' ', $excerpt);
										if (count($words) > $excerpt_length) {
											$excerpt = implode(' ', array_slice($words, 0, $excerpt_length)) . '...';
										}
										
										echo wp_kses_post( $excerpt );
										?>
									</div>
								<?php endif; ?>

								<?php if ( $display_meta ): ?>
									<?php if ( isset( $meta_settings['displayCategories'] ) && $meta_settings['displayCategories'] ) : ?>
										<?php $categories = get_the_category(); ?>
										<?php if ( ! empty( $categories ) ) : ?>
											<div class="digiblocks-post-categories" <?php echo wp_kses_post( digiblocks_get_schema_property( 'articleSection' ) ); ?>>
												<?php
												$cat_links = array();
												foreach ($categories as $category) {
													$cat_links[] = '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
												}
												echo wp_kses_post( implode(' ', $cat_links) );
												?>
											</div>
										<?php endif; ?>
									<?php endif; ?>

									<div class="digiblocks-post-footer-meta">
										<?php if ( isset( $meta_settings['displayAuthor'] ) && $meta_settings['displayAuthor'] ): ?>
											<div class="digiblocks-author-avatar">
												<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
													<?php echo get_avatar(get_the_author_meta('ID'), 96); ?>
												</a>
											</div>
										<?php endif; ?>
										
										<div class="digiblocks-footer-meta-items">
											<?php if ( isset( $meta_settings['displayAuthor'] ) && $meta_settings['displayAuthor'] ): ?>
												<span class="digiblocks-posted-by" <?php echo wp_kses_post( digiblocks_get_schema_property( 'author' ) ); ?>>
													<span class="digiblocks-meta-prefix"><?php esc_html_e('by', 'digiblocks'); ?></span>
													<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" title="<?php echo esc_attr(get_the_author()); ?>" rel="author">
														<?php the_author(); ?>
													</a>
												</span>
											<?php endif; ?>
											
											<?php if ( isset( $meta_settings['displayDate'] ) && $meta_settings['displayDate'] ): ?>
												<span class="digiblocks-posted-on">
													<span class="digiblocks-meta-prefix"><?php esc_html_e('on', 'digiblocks'); ?></span>
													<time datetime="<?php echo esc_attr(get_the_date('c')); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'datePublished' ) ); ?>>
														<?php echo get_the_date(); ?>
													</time>
												</span>
											<?php endif; ?>
										</div>
									</div>
								<?php endif; ?>
	
								<?php 
								if ( $display_read_more_button || ( $display_meta && isset( $meta_settings['displayComments'] ) && $meta_settings['displayComments'] ) ): ?>
									<div class="digiblocks-post-footer-actions">
										<?php if ( $display_read_more_button ): ?>
											<a href="<?php echo esc_url( get_permalink() ); ?>" class="digiblocks-post-read-more">
												<?php echo esc_html( $read_more_text ); ?>
											</a>
										<?php endif; ?>
										
										<?php if ( $display_meta && isset( $meta_settings['displayComments'] ) && $meta_settings['displayComments'] ): 
											$comment_count = get_comments_number();
											$comment_link = get_comments_link();
											?>
											<a href="<?php echo esc_url( $comment_link ); ?>" class="digiblocks-post-comments-count">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 64C125.8 64 32 148.6 32 240c0 37.1 15.5 70.6 40 100c5.2 6.3 8.4 14.8 7.4 23.9c-3.1 27-11.4 52.5-25.7 76.3c-.5 .9-1.1 1.8-1.6 2.6c11.1-2.9 22.2-7 32.7-11.5L91.2 446l-6.4-14.7c17-7.4 33-16.7 48.4-27.4c8.5-5.9 19.4-7.5 29.2-4.2C193 410.1 224.1 416 256 416c130.2 0 224-84.6 224-176s-93.8-176-224-176zM0 240C0 125.2 114.5 32 256 32s256 93.2 256 208s-114.5 208-256 208c-36 0-70.5-6.7-103.8-17.9c-.2-.1-.5 0-.7 .1c-16.9 11.7-34.7 22.1-53.9 30.5C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.8s-1.1-12.8 3.4-17.4c8.1-8.2 15.2-18.2 21.7-29c11.7-19.6 18.7-40.6 21.3-63.1c0 0-.1-.1-.1-.2C19.6 327.1 0 286.6 0 240z"/></svg>
												<?php 
												if ( $comment_count == 0 ) {
													esc_html_e( 'Leave a Comment', 'digiblocks' );
												} elseif ( $comment_count == 1 ) {
													esc_html_e( '1 Comment', 'digiblocks' );
												} else {
													echo esc_html(
														sprintf(
															/* translators: %d: number of comments */
															esc_html__( '%d Comments', 'digiblocks' ),
															$comment_count
														)
													);
												}
												?>
											</a>
										<?php endif; ?>
									</div>
								<?php endif; ?>
							</div>
						</article>
					<?php endwhile; ?>
				</div>
				<?php if ( $enable_pagination && $query->max_num_pages > 1 ) :
					echo $pagination->render_pagination( $query, $current_page, 'posts', $id );
				endif; ?>
			</div>
			<?php
		else:
			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<p class="digiblocks-posts-no-results"><?php esc_html_e( 'No posts found.', 'digiblocks' ); ?></p>
			</div>
			<?php
		endif;
	
		// Reset post data
		wp_reset_postdata();
	
		// Get the output buffer
		$output = ob_get_clean();
	
		return $output;
	}

	/**
	 * Render callback for page title block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_page_title_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id          = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-page-title-' . uniqid();
		$anchor      = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$classes     = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$headingTag  = isset( $attributes['headingTag'] ) ? $attributes['headingTag'] : 'h2';
		$animation   = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		
		// Build class names
		$block_classes = "digiblocks-page-title $id";
		if (!empty($classes)) {
			$block_classes .= " $classes";
		}
		if ($animation !== 'none') {
			$block_classes .= " animate-$animation";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Get schema markup if enabled
		$schema_markup = '';
		if ( digiblocks_is_schema_enabled() ) {
			// Determine schema type based on context
			$schema_type = is_singular('post') ? 'blog-post' : (is_singular() ? 'article' : 'website');
			$schema_markup = digiblocks_get_schema_markup( $schema_type, $attributes );
			$schema_property = digiblocks_get_schema_property( 'name', $schema_type, $attributes );
		} else {
			$schema_property = '';
		}

		// Get the current page/post title
		$title = get_the_title();
		
		// If it's the front page or home page, we might want to use the site name instead
		if (is_front_page() && is_home()) {
			$title = get_bloginfo('name');
		}
		
		// For search results
		if (is_search()) {
			/* translators: %s: search query */
			$title = sprintf( esc_html__( 'Search Results for: %s', 'digiblocks' ), get_search_query() );
		}
		
		// For archives
		if (is_archive()) {
			$title = get_the_archive_title();
		}
		
		// For 404 pages
		if (is_404()) {
			$title = esc_html__( 'Page Not Found', 'digiblocks' );
		}
		
		// Render the block
		ob_start();
		?>
		<<?php echo esc_attr( $headingTag ); ?> class="<?php echo esc_attr( $block_classes ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( $schema_markup ); ?>>
			<?php echo wp_kses_post( $title ); ?>
		</<?php echo esc_attr( $headingTag ); ?>>
		<?php
		
		return ob_get_clean();
	}

	/**
	 * Render callback for breadcrumbs block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_breadcrumbs_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id           = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-breadcrumbs-' . uniqid();
		$anchor       = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$classes      = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$showHome     = isset( $attributes['showHome'] ) ? $attributes['showHome'] : true;
		$homeText     = isset( $attributes['homeText'] ) ? $attributes['homeText'] : __( 'Home', 'digiblocks' );
		$showCurrent  = isset( $attributes['showCurrent'] ) ? $attributes['showCurrent'] : true;
		$useYoast     = isset( $attributes['useYoast'] ) ? $attributes['useYoast'] : false;
		$useRankMath  = isset( $attributes['useRankMath'] ) ? $attributes['useRankMath'] : false;
		$animation    = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		
		// Build class names
		$block_classes = "digiblocks-breadcrumbs $id";
		if (!empty($classes)) {
			$block_classes .= " $classes";
		}
		if ($animation !== 'none') {
			$block_classes .= " animate-$animation";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
		
		// Check if we should use Yoast SEO's breadcrumbs
		if ( $useYoast && function_exists( 'yoast_breadcrumb' ) ) {
			ob_start();
			?>
			<div class="<?php echo esc_attr( $block_classes ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<?php yoast_breadcrumb( '<nav aria-label="' . esc_attr__( 'Breadcrumb', 'digiblocks' ) . '"><p id="breadcrumbs">', '</p></nav>' ); ?>
			</div>
			<?php
			return ob_get_clean();
		}
		
		// Check if we should use Rank Math's breadcrumbs
		if ( $useRankMath && function_exists( 'rank_math_the_breadcrumbs' ) ) {
			ob_start();
			?>
			<div class="<?php echo esc_attr( $block_classes ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<?php rank_math_the_breadcrumbs(); ?>
			</div>
			<?php
			return ob_get_clean();
		}
		
		// If we've reached here, we need to generate our own breadcrumbs
		$breadcrumbs = $this->generate_breadcrumbs( $showHome, $homeText, $showCurrent );
		
		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $block_classes ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
			<nav aria-label="<?php echo esc_attr__( 'Breadcrumb', 'digiblocks' ); ?>">
				<ol class="digiblocks-breadcrumb-list" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'breadcrumb' ) ); ?>>
					<?php 
					$position = 1;
					foreach ( $breadcrumbs as $index => $item ) :
						// Check if this is the home item and if we should show it
						if ( $index === 0 && ! $showHome ) {
							continue;
						}
						
						// Check if this is the last item and if we should show it
						if ( $index === count( $breadcrumbs ) - 1 && ! $showCurrent ) {
							continue;
						}
						
						// Determine if this is the current/last item
						$is_last = ( $index === count( $breadcrumbs ) - 1 );
						
						// Get the separator (not for the first item)
						$separator = $index > 0 ? sprintf(
							'<span class="digiblocks-breadcrumb-separator" aria-hidden="true">%s</span>',
							is_rtl() ? 
								'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"/></svg>' : 
								'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"/></svg>'
						) : '';
						
						// Start the list item
						echo '<li class="digiblocks-breadcrumb-item" ' . wp_kses_post( digiblocks_get_schema_markup( 'list-item' ) ) . '>';

						// If this is the last/current item
						if ( $is_last ) {
							// For the current page, just show the label without any separator
							$name_property = digiblocks_get_schema_property( 'name' );
							$position_property = digiblocks_get_schema_property( 'position' );

							if ( ! empty( $name_property ) ) {
								echo '<span class="digiblocks-breadcrumb-current" ' . wp_kses_post( $name_property ) . '>' . esc_html( $item['label'] ) . '</span>';
								echo '<meta ' . wp_kses_post( $position_property ) . ' content="' . esc_attr( $position ) . '" />';
							} else {
								echo '<span class="digiblocks-breadcrumb-current">' . esc_html( $item['label'] ) . '</span>';
							}
						} else {
							// For links, show the link followed by a separator
							$item_property = digiblocks_get_schema_property( 'item' );
							$name_property = digiblocks_get_schema_property( 'name' );
							$position_property = digiblocks_get_schema_property( 'position' );

							if ( ! empty( $item_property ) ) {
								echo '<a href="' . esc_url( $item['url'] ) . '" class="digiblocks-breadcrumb-link" ' . wp_kses_post( $item_property ) . '>';
								echo '<span ' . wp_kses_post( $name_property ) . '>' . esc_html( $item['label'] ) . '</span></a>';
								echo '<meta ' . wp_kses_post( $position_property ) . ' content="' . esc_attr( $position ) . '" />';
							} else {
								echo '<a href="' . esc_url( $item['url'] ) . '" class="digiblocks-breadcrumb-link">' . esc_html( $item['label'] ) . '</a>';
							}
							
							// Add separator after links
							echo '<span class="digiblocks-breadcrumb-separator" aria-hidden="true">';
							echo is_rtl() ? 
								'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"/></svg>' : 
								'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em"><path d="M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"/></svg>';
							echo '</span>';
						}

						echo '</li>';
						$position++;
					endforeach;
					?>
				</ol>
			</nav>
		</div>
		<?php
		
		// Return the rendered breadcrumb
		return ob_get_clean();
	}

	/**
	 * Render callback for featured image block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_featured_image_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id = isset($attributes['id']) ? $attributes['id'] : 'digi-featured-image-' . uniqid();
		$anchor = isset($attributes['anchor']) ? $attributes['anchor'] : '';
		$custom_classes = isset($attributes['customClasses']) ? $attributes['customClasses'] : '';
		$image_size = isset($attributes['imageSize']) ? $attributes['imageSize'] : 'large';
		$image_crop = isset($attributes['imageCrop']) ? $attributes['imageCrop'] : false;
		$aspect_ratio = isset($attributes['aspectRatio']) ? $attributes['aspectRatio'] : 'default';
		$enable_caption = isset($attributes['enableCaption']) ? $attributes['enableCaption'] : false;
		$link_to_post = isset($attributes['linkToPost']) ? $attributes['linkToPost'] : false;
		$animation = isset($attributes['animation']) ? $attributes['animation'] : 'none';
		
		// Build the class names
		$classes = "digiblocks-featured-image $id";
		if ($custom_classes) {
			$classes .= " $custom_classes";
		}
		if ($animation !== 'none') {
			$classes .= " animate-$animation";
		}
		if ($image_crop) {
			$classes .= " crop-enabled";
			if ($aspect_ratio !== 'default') {
				$classes .= " ratio-$aspect_ratio";
			}
		}
		
		// Additional attributes
		$attr = '';
		if ($anchor) {
			$attr .= ' id="' . esc_attr($anchor) . '"';
		}
		
		// Get the current post
		$post_id = get_the_ID();
		
		// Check if the post has a featured image
		if (has_post_thumbnail($post_id)) {
			$image_id = get_post_thumbnail_id($post_id);
			$image_alt = get_post_meta($image_id, '_wp_attachment_image_alt', true);
			$image_caption = '';
			
			// Get image caption if needed
			if ($enable_caption) {
				$attachment = get_post($image_id);
				if ($attachment) {
					$image_caption = $attachment->post_excerpt;
				}
			}
			
			// Get image source
			if ($image_size === 'custom') {
				// For custom size, use 'large' but we'll apply custom dimensions via CSS
				$image_src = wp_get_attachment_image_url($image_id, 'large');
			} else {
				$image_src = wp_get_attachment_image_url($image_id, $image_size);
			}
			
			// Start output buffer
			ob_start();
			
			// Render the image with container
			?>
			<figure class="<?php echo esc_attr($classes); ?>"<?php echo $attr; ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'image' ) ) ); ?>>
				<span>
					<?php if ($link_to_post): ?>
						<a href="<?php echo esc_url(get_permalink($post_id)); ?>">
							<img src="<?php echo esc_url($image_src); ?>" alt="<?php echo esc_attr($image_alt); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'image' ) ); ?> />
						</a>
					<?php else: ?>
						<img src="<?php echo esc_url($image_src); ?>" alt="<?php echo esc_attr($image_alt); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'image' ) ); ?> />
					<?php endif; ?>
					
					<?php if ($enable_caption && !empty($image_caption)): ?>
						<figcaption><?php echo wp_kses_post($image_caption); ?></figcaption>
					<?php endif; ?>
				</span>
			</figure>
			<?php
			
			return ob_get_clean();
		} else {
			// No featured image found
			return '<div class="' . esc_attr($classes) . '"' . $attr . '>' . 
				   '<div class="digiblocks-no-featured-image">' . 
				   esc_html__('No featured image found', 'digiblocks') . 
				   '</div></div>';
		}
	}

	/**
	 * Render callback for post meta block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_post_meta_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id               = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-post-meta-' . uniqid();
		$anchor           = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes   = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$display_author   = isset( $attributes['displayAuthor'] ) ? $attributes['displayAuthor'] : true;
		$display_date     = isset( $attributes['displayDate'] ) ? $attributes['displayDate'] : true;
		$display_categories = isset( $attributes['displayCategories'] ) ? $attributes['displayCategories'] : true;
		$display_tags     = isset( $attributes['displayTags'] ) ? $attributes['displayTags'] : true;
		$icon_display     = isset( $attributes['iconDisplay'] ) ? $attributes['iconDisplay'] : true;
		$layout           = isset( $attributes['layout'] ) ? $attributes['layout'] : 'inline';
		$separator        = isset( $attributes['separator'] ) ? $attributes['separator'] : 'none';
		$animation        = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		
		// Build class names
		$block_classes = "digiblocks-post-meta $id";
		if (!empty($custom_classes)) {
			$block_classes .= " $custom_classes";
		}
		if ($animation !== 'none') {
			$block_classes .= " animate-$animation";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
		
		// SVG icons for the meta items
		$author_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>';
		$date_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4 272 112c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>';
		$categories_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-156.1 0c-17 0-33.3-6.7-45.3-18.7L210.7 73.4c-6-6-14.1-9.4-22.6-9.4L64 64zM0 96C0 60.7 28.7 32 64 32l124.1 0c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4L448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"/></svg>';
		$tags_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em"><path d="M32 229.5L32 80c0-8.8 7.2-16 16-16l149.5 0c8.5 0 16.6 3.4 22.6 9.4l176 176c12.5 12.5 12.5 32.8 0 45.3L262.6 428.1c-12.5 12.5-32.8 12.5-45.3 0l-176-176L18.7 274.7l22.6-22.6c-6-6-9.4-14.1-9.4-22.6zm-32 0c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80L0 229.5zM112 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>';
		
		// Start output buffer
		ob_start();
		
		// Check if we're in a singular context
		$is_singular = is_singular();
		$post = get_post();
		
		// Start rendering
		?>
		<div class="<?php echo esc_attr( $block_classes ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'meta' ) ) ); ?>>
			<ul class="digiblocks-meta-list">
				<?php if ( $display_author && $post ) : ?>
					<li class="digiblocks-meta-item">
						<?php if ( $icon_display ) : ?>
							<span class="digiblocks-meta-icon"><?php echo wp_kses( $author_icon, digiblocks_allow_svg_in_kses() ); ?></span>
						<?php endif; ?>
						
						<span class="digiblocks-meta-value">
							<?php 
							if ( $is_singular ) {
								$author_id = $post->post_author;
								$author_name = get_the_author_meta( 'display_name', $author_id );
								$author_url = get_author_posts_url( $author_id );
								echo '<a href="' . esc_url( $author_url ) . '" ' . wp_kses_post( digiblocks_get_schema_property( 'author' ) ) . '>' . esc_html( $author_name ) . '</a>';
							}
							?>
						</span>
					</li>
				<?php endif; ?>
				
				<?php if ( $display_date && $post ) : ?>
					<li class="digiblocks-meta-item">
						<?php if ( $icon_display ) : ?>
							<span class="digiblocks-meta-icon"><?php echo wp_kses( $date_icon, digiblocks_allow_svg_in_kses() ); ?></span>
						<?php endif; ?>
						
						<span class="digiblocks-meta-value">
							<?php 
							if ( $is_singular ) {
								$post_date = get_the_date( '', $post );
								echo '<time datetime="' . esc_attr( get_the_date( 'c', $post ) ) . '" ' . wp_kses_post( digiblocks_get_schema_property( 'datePublished' ) ) . '>' . esc_html( $post_date ) . '</time>';
							} else {
								echo esc_html( date_i18n( get_option( 'date_format' ) ) );
							}
							?>
						</span>
					</li>
				<?php endif; ?>
				
				<?php if ( $display_categories && $post ) : ?>
					<li class="digiblocks-meta-item">
						<?php if ( $icon_display ) : ?>
							<span class="digiblocks-meta-icon"><?php echo wp_kses( $categories_icon, digiblocks_allow_svg_in_kses() ); ?></span>
						<?php endif; ?>
						
						<span class="digiblocks-meta-value">
							<?php 
							if ( $is_singular && 'post' === get_post_type() ) {
								$categories = get_the_category( $post->ID );
								if ( ! empty( $categories ) ) {
									$category_links = array();
									foreach ( $categories as $category ) {
										$category_links[] = '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" ' . wp_kses_post( digiblocks_get_schema_property( 'about' ) ) . '>' . esc_html( $category->name ) . '</a>';
									}
									echo implode( ', ', $category_links ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
								} else {
									esc_html_e( 'Uncategorized', 'digiblocks' );
								}
							}
							?>
						</span>
					</li>
				<?php endif; ?>
				
				<?php if ( $display_tags && $post ) : ?>
					<li class="digiblocks-meta-item">
						<?php if ( $icon_display ) : ?>
							<span class="digiblocks-meta-icon"><?php echo wp_kses( $tags_icon, digiblocks_allow_svg_in_kses() ); ?></span>
						<?php endif; ?>
						
						<span class="digiblocks-meta-value">
							<?php 
							if ( $is_singular && 'post' === get_post_type() ) {
								$tags = get_the_tags( $post->ID );
								if ( ! empty( $tags ) ) {
									$tag_links = array();
									foreach ( $tags as $tag ) {
										$tag_links[] = '<a href="' . esc_url( get_tag_link( $tag->term_id ) ) . '">' . esc_html( $tag->name ) . '</a>';
									}
									echo implode( ', ', $tag_links ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
								} else {
									esc_html_e( 'No Tags', 'digiblocks' );
								}
							}
							?>
						</span>
					</li>
				<?php endif; ?>
			</ul>
		</div>
		<?php
		
		// Return the generated HTML
		return ob_get_clean();
	}

	/**
	 * Render callback for post content block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_post_content_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id           = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-post-content-' . uniqid();
		$anchor       = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$classes      = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$animation    = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		
		// Build class names
		$block_classes = "digiblocks-post-content $id";
		if (!empty($classes)) {
			$block_classes .= " $classes";
		}
		if ($animation !== 'none') {
			$block_classes .= " animate-$animation";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
		
		// Get the post content
		$post_content = '';
		
		if (is_singular()) {
			global $post;
			
			// Ensure post content is not null
			$raw_content = isset( $post->post_content ) ? $post->post_content : '';
			
			// Get the raw post content - ensure it's a string
			$post_content = apply_filters( 'the_content', $raw_content );
			$post_content = is_string( $post_content ) ? $post_content : '';

			// Remove any instances of this block to prevent infinite loops - only if content is not empty
			if ( ! empty( $post_content ) ) {
				$post_content = preg_replace( '/<!-- wp:digiblocks\/post-content.*?\/-->/s', '', $post_content );
			}
		} else {
			// Fallback for non-singular pages (archive, etc.)
			$post_content = '<p>' . esc_html__('Post content will be displayed here in single post view.', 'digiblocks') . '</p>';
		}
		
		// Render the block
		ob_start();
		?>
		<div class="<?php echo esc_attr( $block_classes ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'content' ) ) ); ?>>
			<?php echo $post_content; ?>
		</div>
		<?php
		
		return ob_get_clean();
	}

	/**
	 * Render callback for post navigation block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_post_navigation_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id               = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-post-nav-' . uniqid();
		$anchor           = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$customClasses    = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$showPostTitle    = isset( $attributes['showPostTitle'] ) ? $attributes['showPostTitle'] : true;
		$showNavLabels    = isset( $attributes['showNavLabels'] ) ? $attributes['showNavLabels'] : true;
		$previousLabel    = isset( $attributes['previousLabel'] ) ? $attributes['previousLabel'] : __('Previous', 'digiblocks');
		$nextLabel        = isset( $attributes['nextLabel'] ) ? $attributes['nextLabel'] : __('Next', 'digiblocks');
		$showFeaturedImage = isset( $attributes['showFeaturedImage'] ) ? $attributes['showFeaturedImage'] : false;
		$imageSize        = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'thumbnail';
		$animation        = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		
		// Build the block class
		$block_class = "digiblocks-post-navigation $id";
		
		if ($animation !== 'none') {
			$block_class .= " animate-$animation";
		}
		
		if ($customClasses) {
			$block_class .= " $customClasses";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
		
		// Start output buffer
		ob_start();
		
		// Only show navigation on single posts
		if ( is_single() ) {
			// Get previous and next post objects
			$prev_post = get_previous_post();
			$next_post = get_next_post();
			
			if ( $prev_post || $next_post ) {
				?>
				<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
					<div class="digiblocks-post-navigation-links">
						<?php
						// Previous post link
						if ( $prev_post ) {
							$prev_title = get_the_title( $prev_post );
							$prev_url = get_permalink( $prev_post );
							$prev_image = '';
							
							if ( $showFeaturedImage && has_post_thumbnail( $prev_post ) ) {
								$prev_image = get_the_post_thumbnail( $prev_post, $imageSize, array( 'class' => 'digiblocks-post-navigation-image' ) );
							}
							?>
							<a href="<?php echo esc_url( $prev_url ); ?>" class="digiblocks-post-navigation-link digiblocks-post-navigation-prev">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M19 12H5M12 19l-7-7 7-7"/>
								</svg>
								
								<div class="digiblocks-post-navigation-content">
									<?php if ( $showNavLabels ) : ?>
										<span class="digiblocks-post-navigation-label"><?php echo esc_html( $previousLabel ); ?></span>
									<?php endif; ?>
									
									<?php if ( $showPostTitle ) : ?>
										<span class="digiblocks-post-navigation-title"><?php echo esc_html( $prev_title ); ?></span>
									<?php endif; ?>
								</div>
								<?php if ( $showFeaturedImage && $prev_image ) : ?>
									<?php echo wp_kses_post( $prev_image ); ?>
								<?php endif; ?>
							</a>
							<?php
						} else {
							// Empty div to maintain layout
							echo '<div class="digiblocks-post-navigation-placeholder"></div>';
						}
						
						// Next post link
						if ( $next_post ) {
							$next_title = get_the_title( $next_post );
							$next_url = get_permalink( $next_post );
							$next_image = '';
							
							if ( $showFeaturedImage && has_post_thumbnail( $next_post ) ) {
								$next_image = get_the_post_thumbnail( $next_post, $imageSize, array( 'class' => 'digiblocks-post-navigation-image' ) );
							}
							?>
							<a href="<?php echo esc_url( $next_url ); ?>" class="digiblocks-post-navigation-link digiblocks-post-navigation-next">
								<?php if ( $showFeaturedImage && $next_image ) : ?>
									<?php echo wp_kses_post( $next_image ); ?>
								<?php endif; ?>
								<div class="digiblocks-post-navigation-content">
									<?php if ( $showNavLabels ) : ?>
										<span class="digiblocks-post-navigation-label"><?php echo esc_html( $nextLabel ); ?></span>
									<?php endif; ?>
									
									<?php if ( $showPostTitle ) : ?>
										<span class="digiblocks-post-navigation-title"><?php echo esc_html( $next_title ); ?></span>
									<?php endif; ?>
								</div>
								
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M5 12h14M12 5l7 7-7 7"/>
								</svg>
							</a>
							<?php
						} else {
							// Empty div to maintain layout
							echo '<div class="digiblocks-post-navigation-placeholder"></div>';
						}
						?>
					</div>
				</div>
				<?php
			}
		}
		
		// Get the output buffer
		$output = ob_get_clean();
		
		return $output;
	}

	/**
	 * Render callback for the Author Box block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Block content.
	 * @param WP_Block $block      Block instance.
	 * @return string  Block content.
	 */
	public function render_author_box_block( $attributes, $content, $block ) {
		// Extract attributes
		$id              = isset( $attributes['id'] ) ? $attributes['id'] : '';
		$anchor          = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$customClasses   = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$layout          = isset( $attributes['layout'] ) ? $attributes['layout'] : 'horizontal';
		$animation       = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		$displayAvatar   = isset( $attributes['displayAvatar'] ) ? $attributes['displayAvatar'] : true;
		$displayName     = isset( $attributes['displayName'] ) ? $attributes['displayName'] : true;
		$displayBio      = isset( $attributes['displayBio'] ) ? $attributes['displayBio'] : true;
		$displaySocial   = isset( $attributes['displaySocial'] ) ? $attributes['displaySocial'] : true;
		$avatarSize      = isset( $attributes['avatarSize'] ) ? $attributes['avatarSize'] : [
			'desktop' => 100,
			'tablet'  => '',
			'mobile'  => '',
		];
		$socialProfiles   = isset( $attributes['socialProfiles'] ) ? $attributes['socialProfiles'] : [];

		// Build the block class
		$block_class = "digiblocks-post-navigation $id";
		
		if ($animation !== 'none') {
			$block_class .= " animate-$animation";
		}
		
		if ($customClasses) {
			$block_class .= " $customClasses";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Social media platform icons
		$social_icons = [
			'website'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192C2.8 212.5 0 233.9 0 256s2.8 43.5 8.1 64H131.2c-2.1-20.6-3.2-42-3.2-64s1.1-43.4 3.2-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>',
			'facebook' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>',
			'twitter'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>',
			'instagram' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
			'linkedin' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>',
			'youtube'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>',
			'github'   => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>',
		];

		// Get the current post's author
		global $post;
		if ( isset( $post->post_author ) ) {
			$author_id = $post->post_author;
		} else {
			// Fallback to the current user if no post is available
			$author_id = get_current_user_id();
		}
		
		// Get author data
		$author_name = get_the_author_meta( 'display_name', $author_id );
		$author_bio = get_the_author_meta( 'description', $author_id );
		$author_avatar = get_avatar( $author_id, $avatarSize['desktop'] );
		
		// Get social media profiles from user meta
		$author_website = get_the_author_meta( 'url', $author_id );
		$author_social = array(
			'facebook'  => get_the_author_meta( 'facebook', $author_id ),
			'twitter'   => get_the_author_meta( 'twitter', $author_id ),
			'instagram' => get_the_author_meta( 'instagram', $author_id ),
			'linkedin'  => get_the_author_meta( 'linkedin', $author_id ),
			'youtube'   => get_the_author_meta( 'youtube', $author_id ),
			'github'    => get_the_author_meta( 'github', $author_id ),
			'website'   => $author_website,
		);

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'person' ) ); ?>>
			<?php if ( $displayAvatar ) : ?>
				<div class="digiblocks-author-avatar">
					<?php echo $author_avatar; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
			<?php endif; ?>
			
			<div class="digiblocks-author-content">
				<?php if ( $displayName && ! empty( $author_name ) ) : ?>
					<h3 class="digiblocks-author-name" <?php echo wp_kses_post( digiblocks_get_schema_property( 'name' ) ); ?>><?php echo esc_html( $author_name ); ?></h3>
				<?php endif; ?>
				
				<?php if ( $displayBio && ! empty( $author_bio ) ) : ?>
					<p class="digiblocks-author-description" <?php echo wp_kses_post( digiblocks_get_schema_property( 'description' ) ); ?>><?php echo wp_kses_post( $author_bio ); ?></p>
				<?php endif; ?>
				
				<?php if ( $displaySocial && ! empty( $socialProfiles ) ) : ?>
					<div class="digiblocks-author-social">
						<?php 
						// Loop through the enabled social profiles in the block settings
						foreach ( $socialProfiles as $platform => $profile ) :
							if ( isset( $profile['enabled'] ) && $profile['enabled'] ) :
								// Get the platform URL from user meta (if available)
								$social_url = '';
								if ( isset( $author_social[$platform] ) && ! empty( $author_social[$platform] ) ) {
									$social_url = esc_url( $author_social[$platform] );
								} else {
									// Skip if we don't have a URL
									continue;
								}
								
								// If we have a URL, display the icon
								if ( ! empty( $social_url ) ) :
									$icon = isset( $social_icons[$platform] ) ? $social_icons[$platform] : '';
								?>
									<a href="<?php echo esc_url( $social_url ); ?>" target="_blank" rel="noopener noreferrer" <?php echo wp_kses_post( digiblocks_get_schema_property( 'sameAs' ) ); ?>>
										<?php echo $icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
									</a>
								<?php endif; ?>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
		<?php
		
		// Get the output buffer
		return ob_get_clean();
	}

	/**
	 * Render callback for related posts block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string The block content.
	 */
	public function render_related_posts_block($attributes, $content, $block) {
		// Extract block attributes
		$id                       = isset($attributes['id']) ? $attributes['id'] : 'digi-related-posts-' . uniqid();
		$anchor                   = isset($attributes['anchor']) ? $attributes['anchor'] : '';
		$custom_classes           = isset($attributes['customClasses']) ? $attributes['customClasses'] : '';
		$posts_to_show            = isset($attributes['postsToShow']) ? $attributes['postsToShow'] : 3;
		$post_style               = isset($attributes['postStyle']) ? $attributes['postStyle'] : 'grid';
		$display_featured_image   = isset($attributes['displayFeaturedImage']) ? $attributes['displayFeaturedImage'] : true;
		$display_title            = isset($attributes['displayTitle']) ? $attributes['displayTitle'] : true;
		$display_meta             = isset($attributes['displayMeta']) ? $attributes['displayMeta'] : true;
		$display_excerpt          = isset($attributes['displayExcerpt']) ? $attributes['displayExcerpt'] : true;
		$display_read_more_button = isset($attributes['displayReadMoreButton']) ? $attributes['displayReadMoreButton'] : true;
		$meta_settings            = isset($attributes['metaSettings']) ? $attributes['metaSettings'] : [
			'displayAuthor'     => true,
			'displayDate'       => true,
			'displayCategories' => true,
			'displayComments'   => false,
		];
		$excerpt_length           = isset($attributes['excerptLength']) ? $attributes['excerptLength'] : 25;
		$read_more_text           = isset($attributes['readMoreText']) ? $attributes['readMoreText'] : __('Read More', 'digiblocks');
		$relation_type            = isset($attributes['relationType']) ? $attributes['relationType'] : 'category';
		$no_related_posts_text    = isset($attributes['noRelatedPostsText']) ? $attributes['noRelatedPostsText'] : __('No related posts found.', 'digiblocks');
		$heading_text             = isset($attributes['headingText']) ? $attributes['headingText'] : __('Related Posts', 'digiblocks');
		$display_heading          = isset($attributes['displayHeading']) ? $attributes['displayHeading'] : true;
		$animation                = isset($attributes['animation']) ? $attributes['animation'] : 'none';
		$image_size               = isset($attributes['imageSize']) ? $attributes['imageSize'] : 'medium';

		// Get the current responsive state
		$animation_class = ('none' !== $animation) ? ' animate-' . $animation : '';
		
		// Build the block class
		$block_class = "digiblocks-related-posts $id style-$post_style $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr($anchor) . '"' : '';

		// Get the current post ID
		$current_post_id = get_the_ID();
		
		// If we're not on a singular post/page, return early
		if (!$current_post_id || !is_singular()) {
			ob_start();
			?>
			<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'related' ) ) ); ?>>
				<p><?php esc_html_e('This block displays related posts and will only show content on single post pages.', 'digiblocks'); ?></p>
			</div>
			<?php
			return ob_get_clean();
		}
		
		// Get the taxonomy terms of the current post based on relation type
		$term_ids = array();
		
		if ($relation_type === 'category' || $relation_type === 'both') {
			$categories = get_the_category($current_post_id);
			if (!empty($categories)) {
				foreach ($categories as $category) {
					$term_ids[] = $category->term_id;
				}
			}
		}
		
		if ($relation_type === 'tag' || $relation_type === 'both') {
			$tags = get_the_tags($current_post_id);
			if (!empty($tags)) {
				foreach ($tags as $tag) {
					$term_ids[] = $tag->term_id;
				}
			}
		}
		
		// If no terms were found, display the no related posts message
		if (empty($term_ids)) {
			ob_start();
			?>
			<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'related' ) ) ); ?>>
				<?php if ($display_heading) : ?>
					<h3 class="digiblocks-related-posts-heading"><?php echo esc_html($heading_text); ?></h3>
				<?php endif; ?>
				<p class="digiblocks-posts-no-results"><?php echo esc_html($no_related_posts_text); ?></p>
			</div>
			<?php
			return ob_get_clean();
		}
		
		// Set up the query arguments
		$args = array(
			'post_type'           => 'post',
			'posts_per_page'      => $posts_to_show,
			'post_status'         => 'publish',
			'post__not_in'        => array($current_post_id), // Exclude current post
			'ignore_sticky_posts' => true,
		);
		
		// Add the taxonomy query
		$tax_query = array('relation' => 'OR');
		
		if ($relation_type === 'category' || $relation_type === 'both') {
			$tax_query[] = array(
				'taxonomy' => 'category',
				'field'    => 'term_id',
				'terms'    => $term_ids,
			);
		}
		
		if ($relation_type === 'tag' || $relation_type === 'both') {
			$tax_query[] = array(
				'taxonomy' => 'post_tag',
				'field'    => 'term_id',
				'terms'    => $term_ids,
			);
		}
		
		$args['tax_query'] = $tax_query;
		
		// Get related posts
		$related_posts = new WP_Query($args);
		
		// Start output buffer
		ob_start();
		
		if ($related_posts->have_posts()) :
			?>
			<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'related' ) ) ); ?>>
				<?php if ($display_heading) : ?>
					<h3 class="digiblocks-related-posts-heading"><?php echo esc_html($heading_text); ?></h3>
				<?php endif; ?>
				
				<div class="digiblocks-posts-container layout-<?php echo esc_attr($post_style); ?>">
					<?php while ($related_posts->have_posts()) : ?>
						<?php 
						$related_posts->the_post(); 
						$post_id = get_the_ID();
						?>
						<article class="digiblocks-post-item" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article' ) ); ?>>
							<?php if ($display_featured_image && has_post_thumbnail()) : ?>
								<div class="digiblocks-post-image">
									<a href="<?php the_permalink(); ?>">
										<?php echo get_the_post_thumbnail( get_the_ID(), $image_size, array( wp_kses_post( digiblocks_get_schema_property( 'image' ) ) => '' ) ); ?>
									</a>
								</div>
							<?php endif; ?>
		
							<div class="digiblocks-post-content">
								<?php if ($display_title) : ?>
									<h3 class="digiblocks-post-title" <?php echo wp_kses_post( digiblocks_get_schema_property( 'headline' ) ); ?>>
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</h3>
								<?php endif; ?>
		
								<?php if ($display_excerpt) : ?>
									<div class="digiblocks-post-excerpt" <?php echo wp_kses_post( digiblocks_get_schema_property( 'description' ) ); ?>>
										<?php 
										// Get the excerpt
										$excerpt = get_the_excerpt();
										
										// Limit by word count
										$words = explode(' ', $excerpt);
										if (count($words) > $excerpt_length) {
											$excerpt = implode(' ', array_slice($words, 0, $excerpt_length)) . '...';
										}
										
										echo wp_kses_post($excerpt);
										?>
									</div>
								<?php endif; ?>

								<?php if ($display_meta): ?>
									<?php if (isset($meta_settings['displayCategories']) && $meta_settings['displayCategories']) : ?>
										<?php $categories = get_the_category(); ?>
										<?php if (!empty($categories)) : ?>
											<div class="digiblocks-post-categories">
												<?php
												$cat_links = array();
												foreach ($categories as $category) {
													$cat_links[] = '<a href="' . esc_url(get_category_link($category->term_id)) . '" ' . wp_kses_post( digiblocks_get_schema_property( 'about' ) ) . '>' . esc_html($category->name) . '</a>';
												}
												echo wp_kses_post(implode(' ', $cat_links));
												?>
											</div>
										<?php endif; ?>
									<?php endif; ?>

									<div class="digiblocks-post-footer-meta">
										<?php if (isset($meta_settings['displayAuthor']) && $meta_settings['displayAuthor']): ?>
											<div class="digiblocks-author-avatar">
												<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" title="<?php echo esc_attr(get_the_author()); ?>" rel="author" <?php echo wp_kses_post( digiblocks_get_schema_property( 'author' ) ); ?>>
													<?php echo get_avatar(get_the_author_meta('ID'), 96); ?>
												</a>
											</div>
										<?php endif; ?>
										
										<div class="digiblocks-footer-meta-items">
											<?php if (isset($meta_settings['displayAuthor']) && $meta_settings['displayAuthor']): ?>
												<span class="digiblocks-posted-by">
													<span class="digiblocks-meta-prefix"><?php esc_html_e('by', 'digiblocks'); ?></span>
													<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" title="<?php echo esc_attr(get_the_author()); ?>" rel="author">
														<?php the_author(); ?>
													</a>
												</span>
											<?php endif; ?>
											
											<?php if (isset($meta_settings['displayDate']) && $meta_settings['displayDate']): ?>
												<span class="digiblocks-posted-on">
													<span class="digiblocks-meta-prefix"><?php esc_html_e('on', 'digiblocks'); ?></span>
													<time datetime="<?php echo esc_attr(get_the_date('c')); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'datePublished' ) ); ?>>
														<?php echo get_the_date(); ?>
													</time>
												</span>
											<?php endif; ?>
										</div>
									</div>
								<?php endif; ?>
		
								<?php 
								if ($display_read_more_button || ($display_meta && isset($meta_settings['displayComments']) && $meta_settings['displayComments'])) : ?>
									<div class="digiblocks-post-footer-actions">
										<?php if ($display_read_more_button) : ?>
											<a href="<?php echo esc_url(get_permalink()); ?>" class="digiblocks-post-read-more">
												<?php echo esc_html($read_more_text); ?>
											</a>
										<?php endif; ?>
										
										<?php if ($display_meta && isset($meta_settings['displayComments']) && $meta_settings['displayComments']) : 
											$comment_count = get_comments_number();
											$comment_link = get_comments_link();
											?>
											<a href="<?php echo esc_url($comment_link); ?>" class="digiblocks-post-comments-count">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 64C125.8 64 32 148.6 32 240c0 37.1 15.5 70.6 40 100c5.2 6.3 8.4 14.8 7.4 23.9c-3.1 27-11.4 52.5-25.7 76.3c-.5 .9-1.1 1.8-1.6 2.6c11.1-2.9 22.2-7 32.7-11.5L91.2 446l-6.4-14.7c17-7.4 33-16.7 48.4-27.4c8.5-5.9 19.4-7.5 29.2-4.2C193 410.1 224.1 416 256 416c130.2 0 224-84.6 224-176s-93.8-176-224-176zM0 240C0 125.2 114.5 32 256 32s256 93.2 256 208s-114.5 208-256 208c-36 0-70.5-6.7-103.8-17.9c-.2-.1-.5 0-.7 .1c-16.9 11.7-34.7 22.1-53.9 30.5C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.8s-1.1-12.8 3.4-17.4c8.1-8.2 15.2-18.2 21.7-29c11.7-19.6 18.7-40.6 21.3-63.1c0 0-.1-.1-.1-.2C19.6 327.1 0 286.6 0 240z"/></svg>
												<?php 
												if ($comment_count == 0) {
													esc_html_e('Leave a Comment', 'digiblocks');
												} elseif ($comment_count == 1) {
													esc_html_e('1 Comment', 'digiblocks');
												} else {
													echo esc_html(
														sprintf(
															/* translators: %d: number of comments */
															esc_html__('%d Comments', 'digiblocks'),
															$comment_count
														)
													);
												}
												?>
											</a>
										<?php endif; ?>
									</div>
								<?php endif; ?>
							</div>
						</article>
					<?php endwhile; ?>
				</div>
			</div>
			<?php
		else :
			?>
			<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?>>
				<?php if ($display_heading) : ?>
					<h3 class="digiblocks-related-posts-heading"><?php echo esc_html($heading_text); ?></h3>
				<?php endif; ?>
				<p class="digiblocks-posts-no-results"><?php echo esc_html($no_related_posts_text); ?></p>
			</div>
			<?php
		endif;
		
		// Reset post data
		wp_reset_postdata();
		
		// Get the output buffer
		$output = ob_get_clean();
		
		return $output;
	}

	/**
	 * Render callback for the Post Comments block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Block content.
	 * @param WP_Block $block      Block instance.
	 * @return string  Block content.
	 */
	public function render_post_comments_block( $attributes, $content, $block ) {
		// Extract attributes
		$id                  = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-comments-' . uniqid();
		$anchor              = isset( $attributes['anchor'] ) ? $attributes['anchor'] : 'comments';
		$customClasses       = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$showAvatars         = isset( $attributes['showAvatars'] ) ? $attributes['showAvatars'] : true;
		$avatarSize          = isset( $attributes['avatarSize'] ) ? $attributes['avatarSize'] : [
			'desktop' => 50,
			'tablet'  => 40,
			'mobile'  => 30,
		];
		$commentsPerPage     = isset( $attributes['commentsPerPage'] ) ? $attributes['commentsPerPage'] : 20;
		$nestedComments      = isset( $attributes['nestedComments'] ) ? $attributes['nestedComments'] : true;
		$commentsOrder       = isset( $attributes['commentsOrder'] ) ? $attributes['commentsOrder'] : 'asc';
		$displayTitle        = isset( $attributes['displayTitle'] ) ? $attributes['displayTitle'] : true;
		$titleText           = isset( $attributes['titleText'] ) ? $attributes['titleText'] : __('Comments', 'digiblocks');
		$customFormTitle     = isset( $attributes['customFormTitle'] ) ? $attributes['customFormTitle'] : false;
		$formTitle           = isset( $attributes['formTitle'] ) ? $attributes['formTitle'] : __('Leave a Reply', 'digiblocks');
		$displayLoggedIn     = isset( $attributes['displayLoggedIn'] ) ? $attributes['displayLoggedIn'] : true;
		$loggedInText        = isset( $attributes['loggedInText'] ) ? $attributes['loggedInText'] : '';
		$displayCookieConsent = isset( $attributes['displayCookieConsent'] ) ? $attributes['displayCookieConsent'] : true;
		$cookieConsentText   = isset( $attributes['cookieConsentText'] ) ? $attributes['cookieConsentText'] : '';
		$displaySubmitButton = isset( $attributes['displaySubmitButton'] ) ? $attributes['displaySubmitButton'] : false;
		$submitButtonText    = isset( $attributes['submitButtonText'] ) ? $attributes['submitButtonText'] : '';
		$displayCancelReply  = isset( $attributes['displayCancelReply'] ) ? $attributes['displayCancelReply'] : false;
		$cancelReplyText     = isset( $attributes['cancelReplyText'] ) ? $attributes['cancelReplyText'] : '';
		$animation           = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
	
		// Build the block class
		$block_class = "digiblocks-comments $id";
		
		if ($animation !== 'none') {
			$block_class .= " animate-$animation";
		}
		
		if ($customClasses) {
			$block_class .= " $customClasses";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
	
		// Start output buffer
		ob_start();
	
		// Make sure we're on a singular post or page
		if (!is_singular()) {
			?>
			<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'comments' ) ) ); ?>>
				<p><?php esc_html_e('Comments will be displayed on singular posts and pages.', 'digiblocks'); ?></p>
			</div>
			<?php
			return ob_get_clean();
		}
	
		// Get post ID
		$post_id = get_the_ID();
		
		// Get total comment count
		$comment_count = get_comments_number($post_id);
		
		// Get current page
		$cpage = get_query_var('cpage');
		if (!$cpage) {
			$cpage = isset($_GET['cpage']) ? absint($_GET['cpage']) : 1;
		}
		
		// Set up the comments for display (not using get_comments directly)
		// Instead, we'll use WordPress's built-in functions that handle pagination correctly
		
		// Before output, we need to set comment pagination options
		if ($commentsPerPage > 0) {
			// Set these values before we call comments_template
			add_filter('comments_per_page', function() use ($commentsPerPage) {
				return $commentsPerPage;
			}, 999);
			
			// Ensure page_comments is enabled
			add_filter('pre_option_page_comments', '__return_true');
			
			// Set comment order
			add_filter('pre_option_comment_order', function() use ($commentsOrder) {
				return $commentsOrder;
			}, 999);
			
			// Set default comment page
			add_filter('pre_option_default_comments_page', function() {
				return 'oldest'; // This matches typical WordPress behavior
			}, 999);
		}
		
		// Custom comment callback function
		$comment_callback = function($comment, $args, $depth) use ($id, $showAvatars, $avatarSize) {
			$GLOBALS['comment'] = $comment;
			$avatar_size = $avatarSize['desktop']; // Use desktop size for simplicity
			
			// Get comment classes
			$comment_class = 'digiblocks-comment';
			if ($comment->comment_parent) {
				$comment_class .= ' digiblocks-child-comment';
			}
			?>
			<li id="comment-<?php comment_ID(); ?>" class="<?php echo esc_attr($comment_class); ?>" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'comment' ) ); ?>>
				<div class="digiblocks-comment-header">
					<?php if ($showAvatars) : ?>
						<div class="digiblocks-comment-avatar">
							<?php echo get_avatar($comment, $avatar_size); ?>
						</div>
					<?php endif; ?>
					
					<div class="digiblocks-comment-meta">
						<h4 class="digiblocks-comment-author" <?php echo wp_kses_post( digiblocks_get_schema_property( 'author' ) ); ?>>
							<?php comment_author_link(); ?>
						</h4>
						<div class="digiblocks-comment-date">
							<a href="<?php echo esc_url(get_comment_link()); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'dateCreated' ) ); ?>>
								<?php
								printf(
									/* translators: 1: Comment date, 2: Comment time */
									esc_html__('%1$s at %2$s', 'digiblocks'),
									get_comment_date(),
									get_comment_time()
								);
								?>
							</a>
							<?php edit_comment_link(__('Edit', 'digiblocks'), ' <span class="digiblocks-edit-link">(', ')</span>'); ?>
						</div>
					</div>
				</div>
	
				<div class="digiblocks-comment-content" <?php echo wp_kses_post( digiblocks_get_schema_property( 'text' ) ); ?>>
					<?php if ($comment->comment_approved == '0') : ?>
						<p class="digiblocks-comment-awaiting-moderation">
							<?php esc_html_e('Your comment is awaiting moderation.', 'digiblocks'); ?>
						</p>
					<?php endif; ?>
					
					<?php comment_text(); ?>
				</div>
	
				<div class="digiblocks-comment-reply">
					<?php
					comment_reply_link(
						array_merge(
							$args,
							array(
								'add_below' => 'comment',
								'depth'     => $depth,
								'max_depth' => $args['max_depth'],
								'reply_text' => __('Reply', 'digiblocks'),
								'login_text' => __('Log in to Reply', 'digiblocks')
							)
						)
					);
					?>
				</div>
			<?php
		};
	
		// Begin output
		?>
		<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'article', array( 'context' => 'comments' ) ) ); ?>>
			<?php if ($displayTitle && ($comment_count > 0 || comments_open($post_id))) : ?>
				<h3 class="digiblocks-comments-title">
					<?php
					if ($comment_count === 0) {
						echo esc_html($titleText);
					} else {
						// translators: %1$s: Comments count, %2$s: Post title
						printf(
							esc_html(_n(
								'%1$s Comment on "%2$s"',
								'%1$s Comments on "%2$s"',
								$comment_count,
								'digiblocks'
							)),
							number_format_i18n($comment_count),
							get_the_title()
						);
					}
					?>
				</h3>
			<?php endif; ?>
	
			<?php
			// We'll use WordPress's comment listing feature directly,
			// which handles pagination and threading correctly
			if ($comment_count > 0) {
				// Setup the comment listing arguments
				$list_args = array(
					'style'       => 'ul',
					'short_ping'  => true,
					'avatar_size' => $avatarSize['desktop'],
					'callback'    => $comment_callback,
					'per_page'    => $commentsPerPage,
					'page'        => $cpage,
					'reverse_top_level' => ($commentsOrder !== 'asc'),
					'max_depth'   => $nestedComments ? 5 : 1,
				);
				
				// Get all approved comments for this post
				$all_comments = get_comments(array(
					'post_id' => $post_id,
					'status'  => 'approve',
					'order'   => $commentsOrder,
				));
				
				echo '<ul class="digiblocks-comments-list">';
				
				// Use the WordPress function that correctly handles pagination
				wp_list_comments($list_args, $all_comments);
				
				echo '</ul>';
				
				// Calculate max pages
				$max_pages = ceil($comment_count / $commentsPerPage);
				
				// Show pagination if needed
				if ($max_pages > 1) {
					$pagination_args = array(
						'base'         => add_query_arg('cpage', '%#%'),
						'format'       => '',
						'total'        => $max_pages,
						'current'      => $cpage,
						'echo'         => true,
						'add_fragment' => '#' . $anchor,
						'prev_text'    => __('&laquo; Previous Comments', 'digiblocks'),
						'next_text'    => __('Next Comments &raquo;', 'digiblocks'),
					);
					
					echo '<nav class="digiblocks-comments-navigation" role="navigation">';
					echo paginate_links($pagination_args);
					echo '</nav>';
				}
			}
			?>
	
			<?php if (comments_open($post_id)) : ?>
				<div class="digiblocks-comment-form">
					<?php
					// Define custom comment form args
					$form_args = array();
					
					// Customize comment form title if needed
					if ($customFormTitle) {
						$form_args['title_reply'] = $formTitle;
					}
					
					// Customize submit button text if needed
					if ($displaySubmitButton) {
						$form_args['label_submit'] = $submitButtonText;
					}
					
					// Customize cancel reply text if needed
					if ($displayCancelReply) {
						$form_args['cancel_reply_link'] = $cancelReplyText;
					}
					
					// Customize logged in text if needed
					if ($displayLoggedIn && !empty($loggedInText)) {
						$user = wp_get_current_user();
						$user_identity = $user->exists() ? $user->display_name : '';
						$form_args['logged_in_as'] = sprintf(
							$loggedInText,
							get_edit_user_link(),
							$user_identity,
							wp_logout_url(apply_filters('the_permalink', get_permalink()))
						);
					}
					
					// Customize cookie consent text if needed
					if ($displayCookieConsent && !empty($cookieConsentText)) {
						$form_args['cookie_consent_text'] = $cookieConsentText;
					}
					
					comment_form($form_args);
					?>
				</div>
			<?php elseif ($comment_count > 0) : ?>
				<p class="digiblocks-comments-closed"><?php esc_html_e('Comments are closed.', 'digiblocks'); ?></p>
			<?php endif; ?>
		</div>
		<?php
	
		// Remove our temporarily added filters
		remove_filter('comments_per_page', function() use ($commentsPerPage) {
			return $commentsPerPage;
		}, 999);
		remove_filter('pre_option_page_comments', '__return_true');
		remove_filter('pre_option_comment_order', function() use ($commentsOrder) {
			return $commentsOrder;
		}, 999);
		remove_filter('pre_option_default_comments_page', function() {
			return 'oldest';
		}, 999);
	
		// Get the output buffer
		return ob_get_clean();
	}

	/**
	 * Render callback for taxonomy block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_taxonomy_block( $attributes, $content, $block ) {
		// Extract block attributes
		$id                       = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-taxonomy-' . uniqid();
		$anchor                   = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes           = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$posts_to_show            = isset( $attributes['postsToShow'] ) ? $attributes['postsToShow'] : 6;
		$display_featured_image   = isset( $attributes['displayFeaturedImage'] ) ? $attributes['displayFeaturedImage'] : true;
		$display_title            = isset( $attributes['displayTitle'] ) ? $attributes['displayTitle'] : true;
		$display_meta             = isset( $attributes['displayMeta'] ) ? $attributes['displayMeta'] : true;
		$display_excerpt          = isset( $attributes['displayExcerpt'] ) ? $attributes['displayExcerpt'] : true;
		$display_read_more_button = isset( $attributes['displayReadMoreButton'] ) ? $attributes['displayReadMoreButton'] : true;
		$meta_settings            = isset( $attributes['metaSettings'] ) ? $attributes['metaSettings'] : [
			'displayAuthor'     => true,
			'displayDate'       => true,
			'displayCategories' => false,
			'displayComments'   => true,
		];
		$excerpt_length           = isset( $attributes['excerptLength'] ) ? $attributes['excerptLength'] : 20;
		$read_more_text           = isset( $attributes['readMoreText'] ) ? $attributes['readMoreText'] : __( 'Read More', 'digiblocks' );
		$order                    = isset( $attributes['order'] ) ? $attributes['order'] : 'desc';
		$order_by                 = isset( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date';
		$animation                = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		$image_size               = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'medium';

		// Pagination attributes
		$enable_pagination        = isset( $attributes['enablePagination'] ) ? $attributes['enablePagination'] : true;
			
		// Get the current responsive state
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build the block class
		$block_class = "digiblocks-taxonomy $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Get the pagination helper
		$pagination = DigiBlocks_Block_Pagination::get_instance();

		// Get current page for this block
		$current_page = $pagination->get_current_page_for_block( 'taxonomy' );

		// Detect current taxonomy and term
		$current_taxonomy = '';
		$current_term_id = 0;
		$tax_query = array();

		if ( is_category() ) {
			$current_taxonomy = 'category';
			$current_term_id = get_queried_object_id();
			$tax_query = array(
				array(
					'taxonomy' => 'category',
					'field'    => 'term_id',
					'terms'    => $current_term_id,
				),
			);
		} elseif ( is_tag() ) {
			$current_taxonomy = 'post_tag';
			$current_term_id = get_queried_object_id();
			$tax_query = array(
				array(
					'taxonomy' => 'post_tag',
					'field'    => 'term_id',
					'terms'    => $current_term_id,
				),
			);
		} elseif ( is_tax() ) {
			$queried_object = get_queried_object();
			if ( $queried_object && isset( $queried_object->taxonomy ) ) {
				$current_taxonomy = $queried_object->taxonomy;
				$current_term_id = $queried_object->term_id;
				$tax_query = array(
					array(
						'taxonomy' => $current_taxonomy,
						'field'    => 'term_id',
						'terms'    => $current_term_id,
					),
				);
			}
		}

		// If we're not on a taxonomy page, don't display anything
		if ( empty( $tax_query ) ) {
			return '<div class="' . esc_attr( $block_class ) . '"' . wp_kses_post( $id_attr ) . '><p class="digiblocks-taxonomy-no-results">' . esc_html__( 'This block only displays content on taxonomy archive pages (categories, tags, custom taxonomies).', 'digiblocks' ) . '</p></div>';
		}

		// Set up the query arguments
		$args = array(
			'posts_per_page'      => $posts_to_show,
			'post_status'         => 'publish',
			'order'               => $order,
			'orderby'             => $order_by,
			'ignore_sticky_posts' => true,
			'paged'               => $current_page,
			'tax_query'           => $tax_query,
		);

		// Get posts
		$query = new WP_Query( $args );

		// Start output buffer
		ob_start();

		if ( $query->have_posts() ) :
			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-taxonomy-container">
					<?php while ( $query->have_posts() ) : ?>
						<?php 
						$query->the_post(); 
						$post_id = get_the_ID();
						?>
						<article class="digiblocks-taxonomy-item" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'blog-post' ) ); ?>>
							<?php if ( $display_featured_image && has_post_thumbnail() ) : ?>
								<div class="digiblocks-taxonomy-image" <?php echo wp_kses_post( digiblocks_get_schema_property( 'image' ) ); ?>>
									<a href="<?php the_permalink(); ?>">
										<?php the_post_thumbnail( $image_size ); ?>
									</a>
								</div>
							<?php endif; ?>

							<div class="digiblocks-taxonomy-content">
								<?php if ( $display_title ) : ?>
									<h3 class="digiblocks-taxonomy-title" <?php echo wp_kses_post( digiblocks_get_schema_property( 'headline' ) ); ?>>
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</h3>
								<?php endif; ?>

								<?php if ( $display_excerpt ) : ?>
									<div class="digiblocks-taxonomy-excerpt" <?php echo wp_kses_post( digiblocks_get_schema_property( 'description' ) ); ?>>
										<?php 
										// Get the excerpt
										$excerpt = get_the_excerpt();
										
										// Limit by word count
										$words = explode(' ', $excerpt);
										if (count($words) > $excerpt_length) {
											$excerpt = implode(' ', array_slice($words, 0, $excerpt_length)) . '...';
										}
										
										echo wp_kses_post( $excerpt );
										?>
									</div>
								<?php endif; ?>

								<?php if ( $display_meta ): ?>
									<div class="digiblocks-taxonomy-footer-meta">
										<?php if ( isset( $meta_settings['displayAuthor'] ) && $meta_settings['displayAuthor'] ): ?>
											<div class="digiblocks-author-avatar">
												<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
													<?php echo get_avatar(get_the_author_meta('ID'), 64); ?>
												</a>
											</div>
										<?php endif; ?>
										
										<div class="digiblocks-footer-meta-items">
											<?php if ( isset( $meta_settings['displayAuthor'] ) && $meta_settings['displayAuthor'] ): ?>
												<span class="digiblocks-posted-by" <?php echo wp_kses_post( digiblocks_get_schema_property( 'author' ) ); ?>>
													<span class="digiblocks-meta-prefix"><?php esc_html_e('by', 'digiblocks'); ?></span>
													<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" title="<?php echo esc_attr(get_the_author()); ?>" rel="author">
														<?php the_author(); ?>
													</a>
												</span>
											<?php endif; ?>
											
											<?php if ( isset( $meta_settings['displayDate'] ) && $meta_settings['displayDate'] ): ?>
												<span class="digiblocks-posted-on">
													<span class="digiblocks-meta-prefix"><?php esc_html_e('on', 'digiblocks'); ?></span>
													<time datetime="<?php echo esc_attr(get_the_date('c')); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'datePublished' ) ); ?>>
														<?php echo get_the_date(); ?>
													</time>
												</span>
											<?php endif; ?>
										</div>
									</div>
								<?php endif; ?>

								<?php 
								if ( $display_read_more_button || ( $display_meta && isset( $meta_settings['displayComments'] ) && $meta_settings['displayComments'] ) ): ?>
									<div class="digiblocks-taxonomy-footer-actions">
										<?php if ( $display_read_more_button ): ?>
											<a href="<?php echo esc_url( get_permalink() ); ?>" class="digiblocks-taxonomy-read-more">
												<?php echo esc_html( $read_more_text ); ?>
											</a>
										<?php endif; ?>
										
										<?php if ( $display_meta && isset( $meta_settings['displayComments'] ) && $meta_settings['displayComments'] ): 
											$comment_count = get_comments_number();
											$comment_link = get_comments_link();
											?>
											<a href="<?php echo esc_url( $comment_link ); ?>" class="digiblocks-taxonomy-comments-count">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 64C125.8 64 32 148.6 32 240c0 37.1 15.5 70.6 40 100c5.2 6.3 8.4 14.8 7.4 23.9c-3.1 27-11.4 52.5-25.7 76.3c-.5 .9-1.1 1.8-1.6 2.6c11.1-2.9 22.2-7 32.7-11.5L91.2 446l-6.4-14.7c17-7.4 33-16.7 48.4-27.4c8.5-5.9 19.4-7.5 29.2-4.2C193 410.1 224.1 416 256 416c130.2 0 224-84.6 224-176s-93.8-176-224-176zM0 240C0 125.2 114.5 32 256 32s256 93.2 256 208s-114.5 208-256 208c-36 0-70.5-6.7-103.8-17.9c-.2-.1-.5 0-.7 .1c-16.9 11.7-34.7 22.1-53.9 30.5C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.8s-1.1-12.8 3.4-17.4c8.1-8.2 15.2-18.2 21.7-29c11.7-19.6 18.7-40.6 21.3-63.1c0 0-.1-.1-.1-.2C19.6 327.1 0 286.6 0 240z"/></svg>
												<?php 
												if ( $comment_count == 0 ) {
													esc_html_e( 'Leave a Comment', 'digiblocks' );
												} elseif ( $comment_count == 1 ) {
													esc_html_e( '1 Comment', 'digiblocks' );
												} else {
													echo esc_html(
														sprintf(
															/* translators: %d: number of comments */
															esc_html__( '%d Comments', 'digiblocks' ),
															$comment_count
														)
													);
												}
												?>
											</a>
										<?php endif; ?>
									</div>
								<?php endif; ?>
							</div>
						</article>
					<?php endwhile; ?>
				</div>
				<?php if ( $enable_pagination && $query->max_num_pages > 1 ) :
					echo $pagination->render_pagination( $query, $current_page, 'taxonomy', $id );
				endif; ?>
			</div>
			<?php
		else:
			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<p class="digiblocks-taxonomy-no-results">
					<?php 
					if ( ! empty( $current_taxonomy ) ) {
						$term = get_term( $current_term_id, $current_taxonomy );
						if ( $term && ! is_wp_error( $term ) ) {
							printf( 
								/* translators: %s: taxonomy term name */
								esc_html__( 'No posts found in "%s".', 'digiblocks' ), 
								esc_html( $term->name )
							);
						} else {
							esc_html_e( 'No posts found for this taxonomy.', 'digiblocks' );
						}
					} else {
						esc_html_e( 'No posts found.', 'digiblocks' );
					}
					?>
				</p>
			</div>
			<?php
		endif;

		// Reset post data
		wp_reset_postdata();

		// Get the output buffer
		$output = ob_get_clean();

		return $output;
	}

	/**
	 * Render callback for search results block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string The block content.
	 */
	public function render_search_results_block($attributes, $content, $block) {
		// Extract block attributes
		$id                       = isset($attributes['id']) ? $attributes['id'] : 'digi-search-results-' . uniqid();
		$anchor                   = isset($attributes['anchor']) ? $attributes['anchor'] : '';
		$custom_classes           = isset($attributes['customClasses']) ? $attributes['customClasses'] : '';
		$posts_per_page           = isset($attributes['postsPerPage']) ? $attributes['postsPerPage'] : 10;
		$post_style               = isset($attributes['postStyle']) ? $attributes['postStyle'] : 'grid';
		$display_featured_image   = isset($attributes['displayFeaturedImage']) ? $attributes['displayFeaturedImage'] : true;
		$display_title            = isset($attributes['displayTitle']) ? $attributes['displayTitle'] : true;
		$display_meta             = isset($attributes['displayMeta']) ? $attributes['displayMeta'] : true;
		$display_excerpt          = isset($attributes['displayExcerpt']) ? $attributes['displayExcerpt'] : true;
		$display_read_more_button = isset($attributes['displayReadMoreButton']) ? $attributes['displayReadMoreButton'] : true;
		$meta_settings            = isset($attributes['metaSettings']) ? $attributes['metaSettings'] : [
			'displayAuthor'   => true,
			'displayDate'     => true,
			'displayPostType' => false,
		];
		$excerpt_length           = isset($attributes['excerptLength']) ? $attributes['excerptLength'] : 25;
		$read_more_text           = isset($attributes['readMoreText']) ? $attributes['readMoreText'] : __('Read More', 'digiblocks');
		$no_results_text          = isset($attributes['noResultsText']) ? $attributes['noResultsText'] : __('No search results found.', 'digiblocks');
		$heading_text             = isset($attributes['headingText']) ? $attributes['headingText'] : __('Search Results', 'digiblocks');
		$display_heading          = isset($attributes['displayHeading']) ? $attributes['displayHeading'] : true;
		$show_pagination          = isset($attributes['showPagination']) ? $attributes['showPagination'] : true;
		$animation                = isset($attributes['animation']) ? $attributes['animation'] : 'none';
		$image_size               = isset($attributes['imageSize']) ? $attributes['imageSize'] : 'medium';

		// Get the animation class
		$animation_class = ('none' !== $animation) ? ' animate-' . $animation : '';
		
		// Build the block class
		$block_class = "digiblocks-search-results $id style-$post_style $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr($anchor) . '"' : '';

		// Get the search query
		$search_query = get_search_query();
		
		// If we're not on a search page or no query, show a message
		if (!is_search() || empty($search_query)) {
			ob_start();
			?>
			<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?>>
				<?php if ($display_heading) : ?>
					<h3 class="digiblocks-search-results-heading"><?php echo esc_html($heading_text); ?></h3>
				<?php endif; ?>
				<p class="digiblocks-search-no-results">
					<?php 
					if (!is_search()) {
						esc_html_e('This block displays search results and will only show content on search pages.', 'digiblocks');
					} else {
						echo esc_html($no_results_text);
					}
					?>
				</p>
			</div>
			<?php
			return ob_get_clean();
		}
		
		// Get the pagination helper
		$pagination = DigiBlocks_Block_Pagination::get_instance();
		
		// Get current page for search blocks (using our new helper)
		$current_page = $pagination->get_current_page_for_block('results');
		
		// Set up the search query arguments
		$args = array(
			's'                   => $search_query,
			'posts_per_page'      => $posts_per_page,
			'paged'               => $current_page,
			'post_status'         => 'publish',
			'ignore_sticky_posts' => true,
			'post_type'           => 'any', // Search all post types
		);
		
		// Get search results
		$search_results = new WP_Query($args);
		
		// Start output buffer
		ob_start();
		
		?>
		<div class="<?php echo esc_attr($block_class); ?>"<?php echo wp_kses_post($id_attr); ?>>
			<?php if ($display_heading) : ?>
				<h3 class="digiblocks-search-results-heading">
					<?php 
					echo esc_html(
						sprintf(
							/* translators: %1$s: heading text, %2$s: search query */
							'%1$s for "%2$s"',
							$heading_text,
							$search_query
						)
					);
					?>
				</h3>
			<?php endif; ?>
			
			<?php if ($search_results->have_posts()) : ?>
				<div class="digiblocks-search-container layout-<?php echo esc_attr($post_style); ?>">
					<?php while ($search_results->have_posts()) : ?>
						<?php 
						$search_results->the_post(); 
						$post_id = get_the_ID();
						$post_type = get_post_type();
						?>
						<article class="digiblocks-search-item">
							<?php if ($display_featured_image && has_post_thumbnail()) : ?>
								<div class="digiblocks-search-image">
									<a href="<?php the_permalink(); ?>">
										<?php the_post_thumbnail($image_size); ?>
									</a>
								</div>
							<?php endif; ?>

							<div class="digiblocks-search-content">
								<?php if ($display_title) : ?>
									<h3 class="digiblocks-search-title">
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</h3>
								<?php endif; ?>

								<?php if ($display_meta): ?>
									<div class="digiblocks-search-meta">
										<?php if (isset($meta_settings['displayAuthor']) && $meta_settings['displayAuthor']) : ?>
											<span class="digiblocks-author">
												<span class="digiblocks-meta-prefix"><?php esc_html_e('by', 'digiblocks'); ?></span>
												<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" title="<?php echo esc_attr(get_the_author()); ?>" rel="author">
													<?php the_author(); ?>
												</a>
											</span>
										<?php endif; ?>
										
										<?php if (isset($meta_settings['displayDate']) && $meta_settings['displayDate']) : ?>
											<span class="digiblocks-date">
												<span class="digiblocks-meta-prefix"><?php esc_html_e('on', 'digiblocks'); ?></span>
												<time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
													<?php echo get_the_date(); ?>
												</time>
											</span>
										<?php endif; ?>

										<?php if (isset($meta_settings['displayPostType']) && $meta_settings['displayPostType']) : ?>
											<span class="digiblocks-post-type">
												<?php echo esc_html(ucfirst($post_type)); ?>
											</span>
										<?php endif; ?>
									</div>
								<?php endif; ?>

								<?php if ($display_excerpt) : ?>
									<div class="digiblocks-search-excerpt">
										<?php 
										// Get the excerpt
										$excerpt = get_the_excerpt();
										
										// Limit by word count
										$words = explode(' ', $excerpt);
										if (count($words) > $excerpt_length) {
											$excerpt = implode(' ', array_slice($words, 0, $excerpt_length)) . '...';
										}
										
										echo wp_kses_post($excerpt);
										?>
									</div>
								<?php endif; ?>

								<?php if ($display_read_more_button) : ?>
									<div class="digiblocks-search-actions">
										<a href="<?php echo esc_url(get_permalink()); ?>" class="digiblocks-search-read-more">
											<?php echo esc_html($read_more_text); ?>
										</a>
									</div>
								<?php endif; ?>
							</div>
						</article>
					<?php endwhile; ?>
				</div>

				<?php if ($show_pagination && $search_results->max_num_pages > 1) :
					echo $pagination->render_pagination($search_results, $current_page, 'results', $id);
				endif; ?>

			<?php else : ?>
				<p class="digiblocks-search-no-results"><?php echo esc_html($no_results_text); ?></p>
			<?php endif; ?>
		</div>
		<?php
		
		// Reset post data
		wp_reset_postdata();
		
		// Get the output buffer
		$output = ob_get_clean();
		
		return $output;
	}

	/**
	 * Render callback for the Copyright block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Block content.
	 * @param WP_Block $block      Block instance.
	 * @return string  Block content.
	 */
	public function render_copyright_block( $attributes, $content, $block ) {
		// Extract attributes
		$id              = isset( $attributes['id'] ) ? $attributes['id'] : '';
		$anchor          = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$customClasses   = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$copyrightText   = isset( $attributes['copyrightText'] ) ? $attributes['copyrightText'] : __( '© {year} {sitename}. All rights reserved.', 'digiblocks' );
		$animation       = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Build the block class
		$block_class = "digiblocks-copyright $id";
		
		if ( $animation !== 'none' ) {
			$block_class .= " animate-$animation";
		}
		
		if ( $customClasses ) {
			$block_class .= " $customClasses";
		}
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Process copyright text to replace placeholders
		$processed_text = $copyrightText;
		if ( ! empty( $processed_text ) ) {
			// Get current year, site name and URL
			$current_year = gmdate( 'Y' );
			$site_name = get_bloginfo( 'name' );
			$site_url = home_url();

			// Replace placeholders
			$processed_text = str_replace( '{year}', $current_year, $processed_text );
			$processed_text = str_replace( '{sitename}', $site_name, $processed_text );
			$processed_text = str_replace( 
				'{siteurl}', 
				'<a href="' . esc_url( $site_url ) . '">' . esc_html( $site_name ) . '</a>', 
				$processed_text 
			);
		}

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'organization' ) ); ?>>
			<div class="digiblocks-copyright-text" <?php echo wp_kses_post( digiblocks_get_schema_property( 'copyrightHolder' ) ); ?>>
				<?php echo wp_kses_post( $processed_text ); ?>
			</div>
		</div>
		<?php
		
		// Get the output buffer
		return ob_get_clean();
	}

	/**
	 * Generate breadcrumbs array
	 *
	 * @param bool   $show_home Show home link.
	 * @param string $home_text Home text.
	 * @param bool   $show_current Show current page.
	 * @return array Breadcrumbs array.
	 */
	private function generate_breadcrumbs( $show_home = true, $home_text = '', $show_current = true ) {
		// Initialize breadcrumbs array
		$breadcrumbs = array();
		
		// Get the home URL and add it as the first item
		$home_url = home_url( '/' );
		$breadcrumbs[] = array(
			'label' => ! empty( $home_text ) ? $home_text : __( 'Home', 'digiblocks' ),
			'url'   => $home_url,
		);
		
		// Front page
		if ( is_front_page() ) {
			// We're on the front page, don't add anything else
			return $breadcrumbs;
		}
		
		// Home page (if different from front page)
		if ( is_home() ) {
			$page_for_posts = get_option( 'page_for_posts' );
			if ( $page_for_posts ) {
				$breadcrumbs[] = array(
					'label' => get_the_title( $page_for_posts ),
					'url'   => get_permalink( $page_for_posts ),
				);
			} else {
				$breadcrumbs[] = array(
					'label' => __( 'Blog', 'digiblocks' ),
					'url'   => '',
				);
			}
			return $breadcrumbs;
		}
		
		// Category archives
		if ( is_category() ) {
			$category = get_queried_object();
			
			// If the category has a parent, add ancestors
			if ( $category->parent ) {
				$ancestors = array_reverse( get_ancestors( $category->term_id, 'category' ) );
				foreach ( $ancestors as $ancestor_id ) {
					$ancestor = get_term( $ancestor_id, 'category' );
					$breadcrumbs[] = array(
						'label' => $ancestor->name,
						'url'   => get_term_link( $ancestor ),
					);
				}
			}
			
			// Add current category
			$breadcrumbs[] = array(
				'label' => $category->name,
				'url'   => '',
			);
			return $breadcrumbs;
		}
		
		// Tag archives
		if ( is_tag() ) {
			$tag = get_queried_object();
			$breadcrumbs[] = array(
				'label' => sprintf( __( 'Tag: %s', 'digiblocks' ), $tag->name ),
				'url'   => '',
			);
			return $breadcrumbs;
		}
		
		// Author archives
		if ( is_author() ) {
			$author = get_queried_object();
			$breadcrumbs[] = array(
				'label' => sprintf( __( 'Author: %s', 'digiblocks' ), $author->display_name ),
				'url'   => '',
			);
			return $breadcrumbs;
		}
		
		// Date archives
		if ( is_date() ) {
			if ( is_year() ) {
				$breadcrumbs[] = array(
					'label' => get_the_time( 'Y' ),
					'url'   => '',
				);
			} elseif ( is_month() ) {
				$breadcrumbs[] = array(
					'label' => get_the_time( 'Y' ),
					'url'   => get_year_link( get_the_time( 'Y' ) ),
				);
				$breadcrumbs[] = array(
					'label' => get_the_time( 'F' ),
					'url'   => '',
				);
			} elseif ( is_day() ) {
				$breadcrumbs[] = array(
					'label' => get_the_time( 'Y' ),
					'url'   => get_year_link( get_the_time( 'Y' ) ),
				);
				$breadcrumbs[] = array(
					'label' => get_the_time( 'F' ),
					'url'   => get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ),
				);
				$breadcrumbs[] = array(
					'label' => get_the_time( 'd' ),
					'url'   => '',
				);
			}
			return $breadcrumbs;
		}
		
		// Search results
		if ( is_search() ) {
			$breadcrumbs[] = array(
				'label' => sprintf( __( 'Search results for: %s', 'digiblocks' ), get_search_query() ),
				'url'   => '',
			);
			return $breadcrumbs;
		}
		
		// 404 page
		if ( is_404() ) {
			$breadcrumbs[] = array(
				'label' => __( 'Page not found', 'digiblocks' ),
				'url'   => '',
			);
			return $breadcrumbs;
		}
		
		// Single post
		if ( is_singular( 'post' ) ) {
			// Get post categories
			$categories = get_the_category();
			if ( $categories ) {
				// Get the deepest category
				$category = $this->get_deepest_category( $categories );
				
				// If the category has ancestors, add them to the breadcrumbs
				if ( $category->parent ) {
					$ancestors = array_reverse( get_ancestors( $category->term_id, 'category' ) );
					foreach ( $ancestors as $ancestor_id ) {
						$ancestor = get_term( $ancestor_id, 'category' );
						$breadcrumbs[] = array(
							'label' => $ancestor->name,
							'url'   => get_term_link( $ancestor ),
						);
					}
				}
				
				// Add the category
				$breadcrumbs[] = array(
					'label' => $category->name,
					'url'   => get_term_link( $category ),
				);
			}
			
			// Add current post title
			if ( $show_current ) {
				$breadcrumbs[] = array(
					'label' => get_the_title(),
					'url'   => '',
				);
			}
			return $breadcrumbs;
		}
		
		// Custom post types
		if ( is_singular() && ! is_page() && ! is_attachment() ) {
			$post_type = get_post_type();
			$post_type_obj = get_post_type_object( $post_type );
			
			// Add post type archive link if available
			if ( $post_type_obj && $post_type_obj->has_archive ) {
				$breadcrumbs[] = array(
					'label' => $post_type_obj->labels->name,
					'url'   => get_post_type_archive_link( $post_type ),
				);
			}
			
			// For hierarchical post types, add ancestors
			if ( is_post_type_hierarchical( $post_type ) ) {
				$ancestors = array_reverse( get_post_ancestors( get_the_ID() ) );
				foreach ( $ancestors as $ancestor_id ) {
					$breadcrumbs[] = array(
						'label' => get_the_title( $ancestor_id ),
						'url'   => get_permalink( $ancestor_id ),
					);
				}
			}
			
			// Add taxonomy terms for this post type if applicable
			$taxonomies = get_object_taxonomies( $post_type, 'objects' );
			foreach ( $taxonomies as $taxonomy ) {
				if ( $taxonomy->hierarchical && $taxonomy->public ) {
					$terms = get_the_terms( get_the_ID(), $taxonomy->name );
					if ( $terms ) {
						$term = $this->get_deepest_term( $terms, $taxonomy->name );
						if ( $term ) {
							// Add term ancestors if any
							if ( $term->parent ) {
								$ancestors = array_reverse( get_ancestors( $term->term_id, $taxonomy->name ) );
								foreach ( $ancestors as $ancestor_id ) {
									$ancestor = get_term( $ancestor_id, $taxonomy->name );
									$breadcrumbs[] = array(
										'label' => $ancestor->name,
										'url'   => get_term_link( $ancestor ),
									);
								}
							}
							
							// Add the term
							$breadcrumbs[] = array(
								'label' => $term->name,
								'url'   => get_term_link( $term ),
							);
							break; // Only add one taxonomy's terms
						}
					}
				}
			}
			
			// Add current post title
			if ( $show_current ) {
				$breadcrumbs[] = array(
					'label' => get_the_title(),
					'url'   => '',
				);
			}
			return $breadcrumbs;
		}
		
		// Pages
		if ( is_page() ) {
			// For hierarchical pages, add ancestors
			$ancestors = array_reverse( get_post_ancestors( get_the_ID() ) );
			foreach ( $ancestors as $ancestor_id ) {
				$breadcrumbs[] = array(
					'label' => get_the_title( $ancestor_id ),
					'url'   => get_permalink( $ancestor_id ),
				);
			}
			
			// Add current page title
			if ( $show_current ) {
				$breadcrumbs[] = array(
					'label' => get_the_title(),
					'url'   => '',
				);
			}
			return $breadcrumbs;
		}
		
		// Attachments
		if ( is_attachment() ) {
			// Get parent post
			$parent_id = get_post()->post_parent;
			if ( $parent_id ) {
				$breadcrumbs[] = array(
					'label' => get_the_title( $parent_id ),
					'url'   => get_permalink( $parent_id ),
				);
			}
			
			// Add current attachment title
			if ( $show_current ) {
				$breadcrumbs[] = array(
					'label' => get_the_title(),
					'url'   => '',
				);
			}
			return $breadcrumbs;
		}
		
		// Custom post type archives
		if ( is_post_type_archive() ) {
			$post_type = get_post_type();
			$post_type_obj = get_post_type_object( $post_type );
			if ( $post_type_obj ) {
				$breadcrumbs[] = array(
					'label' => $post_type_obj->labels->name,
					'url'   => '',
				);
			}
			return $breadcrumbs;
		}
		
		// Custom taxonomy archives
		if ( is_tax() ) {
			$term = get_queried_object();
			$taxonomy = get_taxonomy( $term->taxonomy );
			
			// Add taxonomy name if available
			if ( $taxonomy ) {
				$breadcrumbs[] = array(
					'label' => $taxonomy->labels->name,
					'url'   => '',
				);
			}
			
			// If the term has a parent, add ancestors
			if ( $term->parent ) {
				$ancestors = array_reverse( get_ancestors( $term->term_id, $term->taxonomy ) );
				foreach ( $ancestors as $ancestor_id ) {
					$ancestor = get_term( $ancestor_id, $term->taxonomy );
					$breadcrumbs[] = array(
						'label' => $ancestor->name,
						'url'   => get_term_link( $ancestor ),
					);
				}
			}
			
			// Add current term
			$breadcrumbs[] = array(
				'label' => $term->name,
				'url'   => '',
			);
			return $breadcrumbs;
		}
		
		// If we've reached here, we don't know what kind of page this is
		if ( $show_current ) {
			$breadcrumbs[] = array(
				'label' => get_the_title(),
				'url'   => '',
			);
		}
		
		return $breadcrumbs;
	}

	/**
	 * Get the deepest category from an array of categories
	 *
	 * @param array $categories Array of categories.
	 * @return object The deepest category.
	 */
	private function get_deepest_category( $categories ) {
		// Start with the first category
		$deepest_category = $categories[0];
		$max_depth = 0;
		
		// Loop through categories to find the deepest one
		foreach ( $categories as $category ) {
			$depth = count( get_ancestors( $category->term_id, 'category' ) );
			if ( $depth > $max_depth ) {
				$max_depth = $depth;
				$deepest_category = $category;
			}
		}
		
		return $deepest_category;
	}

	/**
	 * Get the deepest term from an array of terms
	 *
	 * @param array  $terms Array of terms.
	 * @param string $taxonomy Taxonomy name.
	 * @return object The deepest term.
	 */
	private function get_deepest_term( $terms, $taxonomy ) {
		// Start with the first term
		$deepest_term = $terms[0];
		$max_depth = 0;
		
		// Loop through terms to find the deepest one
		foreach ( $terms as $term ) {
			$depth = count( get_ancestors( $term->term_id, $taxonomy ) );
			if ( $depth > $max_depth ) {
				$max_depth = $depth;
				$deepest_term = $term;
			}
		}
		
		return $deepest_term;
	}

	/**
	 * Render callback for digi products block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_digi_products_block( $attributes, $content, $block ) {
		// Check if DigiCommerce exists
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<p>' . __( 'DigiCommerce plugin is required to use this block.', 'digiblocks' ) . '</p>';
		}
	
		// Extract block attributes
		$id                       = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-products-' . uniqid();
		$anchor                   = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes           = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$products_to_show         = isset( $attributes['productsToShow'] ) ? $attributes['productsToShow'] : 3;
		$product_style            = isset( $attributes['productStyle'] ) ? $attributes['productStyle'] : 'grid';
		$display_featured_image   = isset( $attributes['displayFeaturedImage'] ) ? $attributes['displayFeaturedImage'] : true;
		$display_title            = isset( $attributes['displayTitle'] ) ? $attributes['displayTitle'] : true;
		$display_price            = isset( $attributes['displayPrice'] ) ? $attributes['displayPrice'] : true;
		$display_rating           = isset( $attributes['displayRating'] ) ? $attributes['displayRating'] : true;
		$display_categories       = isset( $attributes['displayCategories'] ) ? $attributes['displayCategories'] : true;
		$display_excerpt          = isset( $attributes['displayExcerpt'] ) ? $attributes['displayExcerpt'] : true;
		$display_view_product     = isset( $attributes['displayViewProductButton'] ) ? $attributes['displayViewProductButton'] : true;
		$excerpt_length           = isset( $attributes['excerptLength'] ) ? $attributes['excerptLength'] : 25;
		$view_product_text        = isset( $attributes['viewProductText'] ) ? $attributes['viewProductText'] : __( 'View Product', 'digiblocks' );
		$order                    = isset( $attributes['order'] ) ? $attributes['order'] : 'desc';
		$order_by                 = isset( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date';
		$categories               = isset( $attributes['categories'] ) ? $attributes['categories'] : [];
		$animation                = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
		$image_size               = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'medium';
		$enable_pagination        = isset( $attributes['enablePagination'] ) ? $attributes['enablePagination'] : false;
		
		// Get the current responsive state
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
		
		// Build the block class
		$block_class = "digiblocks-products $id style-$product_style $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
	
		// Get the pagination helper
		$pagination = DigiBlocks_Block_Pagination::get_instance();
		
		// Get current page for digi-products blocks (using our new helper)
		$current_page = $pagination->get_current_page_for_block( 'digi-products' );
		
		// Set up the query arguments
		$args = array(
			'post_type'           => 'digi_product',
			'posts_per_page'      => $products_to_show,
			'post_status'         => 'publish',
			'order'               => $order,
			'orderby'             => $order_by,
			'ignore_sticky_posts' => true,
			'paged'               => $current_page, // Fixed: was $paged
		);
		
		// Add categories if specified
		if ( ! empty( $categories ) && ! in_array( 0, $categories, true ) ) {
			$args['tax_query'] = array( // phpcs:ignore
				array(
					'taxonomy' => 'digi_product_cat',
					'field'    => 'term_id',
					'terms'    => $categories,
				),
			);
		}
		
		// For meta_value_num orderby, add meta_key for price
		if ( $order_by === 'meta_value_num' ) {
			$args['meta_key'] = 'digi_price'; // phpcs:ignore
		}
		
		// Get products
		$query = new WP_Query( $args );
		
		// Check for DigiCommerce_Pro and if reviews are enabled
		$reviews_enabled = class_exists( 'DigiCommerce_Pro' ) && 
						class_exists( 'DigiCommerce_Pro_Reviews' ) && 
						DigiCommerce()->get_option( 'enable_reviews', false );
		
		// Helper function to safely output schema markup
		$safe_schema = function( $markup ) {
			return !empty( $markup ) ? wp_kses_post( $markup ) : '';
		};
		
		// Start output buffer
		ob_start();
		
		if ( $query->have_posts() ) :
			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-products-container <?php echo 'layout-' . esc_attr( $product_style ); ?>">
					<?php while ( $query->have_posts() ) : ?>
						<?php 
						$query->the_post(); 
						$product_id = get_the_ID();
						
						// Get product meta
						$price = get_post_meta( $product_id, 'digi_price', true );
						$sale_price = get_post_meta( $product_id, 'digi_sale_price', true );
						?>
						<div class="digiblocks-product-item" <?php echo $safe_schema( digiblocks_get_schema_markup( 'product' ) ); ?>>
							<?php if ( $display_featured_image && has_post_thumbnail() ) : ?>
								<div class="digiblocks-product-image">
									<a href="<?php the_permalink(); ?>" <?php echo $safe_schema( digiblocks_get_schema_property( 'url' ) ); ?>>
										<div <?php echo $safe_schema( digiblocks_get_schema_property( 'image' ) ); ?>>
											<?php the_post_thumbnail( $image_size ); ?>
										</div>
									</a>
								</div>
							<?php endif; ?>
		
							<div class="digiblocks-product-content">
								<?php if ( $display_categories ): ?>
									<?php $product_categories = get_the_terms( $product_id, 'digi_product_cat' ); ?>
									<?php if ( ! empty( $product_categories ) && ! is_wp_error( $product_categories ) ) : ?>
										<div class="digiblocks-product-categories">
											<?php
											$cat_links = array();
											foreach ( $product_categories as $category ) {
												$cat_links[] = '<a href="' . esc_url( get_term_link( $category->term_id ) ) . '">' . esc_html( $category->name ) . '</a>';
											}
											echo wp_kses_post( implode( ' ', $cat_links ) );
											?>
										</div>
									<?php endif; ?>
								<?php endif; ?>
								
								<?php if ( $display_title ) : ?>
									<h3 class="digiblocks-product-title">
										<a href="<?php the_permalink(); ?>" <?php echo $safe_schema( digiblocks_get_schema_property( 'name' ) ); ?>><?php the_title(); ?></a>
									</h3>
								<?php endif; ?>
								
								<?php if ( $display_rating && $reviews_enabled ) : 
									// Get rating data if DigiCommerce Pro Reviews is active
									$rating_data = DigiCommerce_Pro_Reviews::instance()->get_product_rating( $product_id );
									if ( $rating_data['count'] > 0 ) :
									?>
									<div class="digiblocks-product-rating" <?php echo $safe_schema( digiblocks_get_schema_markup( 'rating' ) ); ?>>
										<div class="star-rating" <?php echo $safe_schema( digiblocks_get_schema_property( 'ratingValue' ) ); ?>>
											<?php 
											$rating = $rating_data['average'];
											$full_stars = floor( $rating );
											$half_star = ( $rating - $full_stars ) >= 0.5;
											
											// Output full stars
											for ( $i = 0; $i < $full_stars; $i++ ) {
												echo '<span class="star full">★</span>';
											}
											
											// Output half star if needed
											if ( $half_star ) {
												echo '<span class="star half">★</span>';
												$i++;
											}
											
											// Output empty stars
											for ( ; $i < 5; $i++ ) {
												echo '<span class="star empty">☆</span>';
											}
											?>
										</div>
										<span class="rating-count" <?php echo $safe_schema( digiblocks_get_schema_property( 'reviewCount' ) ); ?>>(<?php echo esc_html( $rating_data['count'] ); ?>)</span>
									</div>
									<?php endif; ?>
								<?php endif; ?>
								
								<?php if ( $display_price && ( !empty( $price ) || !empty( $sale_price ) ) ) : ?>
									<div class="digiblocks-product-price" <?php echo $safe_schema( digiblocks_get_schema_markup( 'price' ) ); ?>>
										<?php if ( !empty( $sale_price ) && $sale_price < $price ) : ?>
											<span class="regular-price del" <?php echo $safe_schema( digiblocks_get_schema_property( 'highPrice' ) ); ?>><?php echo wp_kses_post( DigiCommerce_Product::instance()->format_price( $price, '', true ) ); ?></span>
											<span class="sale-price" <?php echo $safe_schema( digiblocks_get_schema_property( 'price' ) ); ?>><?php echo wp_kses_post( DigiCommerce_Product::instance()->format_price( $sale_price, '', true ) ); ?></span>
										<?php else : ?>
											<span class="regular-price" <?php echo $safe_schema( digiblocks_get_schema_property( 'price' ) ); ?>><?php echo wp_kses_post( DigiCommerce_Product::instance()->format_price( $price, '', true ) ); ?></span>
										<?php endif; ?>
									</div>
								<?php endif; ?>
		
								<?php if ( $display_excerpt ) : ?>
									<div class="digiblocks-product-excerpt" <?php echo $safe_schema( digiblocks_get_schema_property( 'description' ) ); ?>>
										<?php 
										// Get the excerpt
										$excerpt = get_the_excerpt();
										
										// Limit by word count
										$words = explode(' ', $excerpt);
										if (count($words) > $excerpt_length) {
											$excerpt = implode(' ', array_slice($words, 0, $excerpt_length)) . '...';
										}
										
										echo wp_kses_post( $excerpt );
										?>
									</div>
								<?php endif; ?>
								
								<?php if ( $display_view_product ) : ?>
									<div class="digiblocks-product-view-wrapper">
										<a href="<?php the_permalink(); ?>" class="digiblocks-product-view">
											<?php echo esc_html( $view_product_text ); ?>
										</a>
									</div>
								<?php endif; ?>
							</div>
						</div>
					<?php endwhile; ?>
				</div>
				
				<?php if ( $enable_pagination && $query->max_num_pages > 1 ) :
					echo $pagination->render_pagination( $query, $current_page, 'digi-products', $id );
				endif; ?>
			</div>
			<?php
		else:
			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<p class="digiblocks-products-no-results"><?php esc_html_e( 'No products found.', 'digiblocks' ); ?></p>
			</div>
			<?php
		endif;
		
		// Reset post data
		wp_reset_postdata();
		
		// Get the output buffer
		$output = ob_get_clean();
		
		return $output;
	}

	/**
	 * Render callback for DigiCommerce Cart Icon block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_cart_icon_block( $attributes, $content, $block ) {
		// Check if DigiCommerce is active
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<p>' . __( 'DigiCommerce is not active. Please install and activate DigiCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id                    = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-cart-icon-' . uniqid();
		$anchor                = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes        = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$icon_type             = isset( $attributes['iconType'] ) ? $attributes['iconType'] : 'cart';
		$custom_icon           = isset( $attributes['customIcon'] ) ? $attributes['customIcon'] : '';
		$show_count            = isset( $attributes['showCount'] ) ? $attributes['showCount'] : true;
		$show_text             = isset( $attributes['showText'] ) ? $attributes['showText'] : false;
		$show_total            = isset( $attributes['showTotal'] ) ? $attributes['showTotal'] : false;
		$show_mini_cart        = isset( $attributes['showMiniCart'] ) ? $attributes['showMiniCart'] : false;
		$hide_on_empty         = isset( $attributes['hideOnEmpty'] ) ? $attributes['hideOnEmpty'] : false;
		$cart_text             = isset( $attributes['cartText'] ) ? $attributes['cartText'] : __( 'Cart', 'digiblocks' );
		$empty_cart_text       = isset( $attributes['emptyCartText'] ) ? $attributes['emptyCartText'] : __( 'Empty Cart', 'digiblocks' );
		$animation             = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get DigiCommerce cart data
		$cart_items = array();
		$cart_count = 0;
		$cart_total = 0;
		
		if ( class_exists( 'DigiCommerce_Checkout' ) ) {
			$cart_instance = DigiCommerce_Checkout::instance();
			$cart_items = $cart_instance->get_cart_items();
			$cart_count = count( $cart_items );
			
			// Calculate total
			foreach ( $cart_items as $item ) {
				$cart_total += isset( $item['price'] ) ? (float) $item['price'] : 0;
			}
		}

		// Format total using DigiCommerce currency settings
		$formatted_total = '';
		if ( class_exists( 'DigiCommerce_Product' ) ) {
			$product_instance = DigiCommerce_Product::instance();
			$currency_symbol = $product_instance->get_currency_symbol( DigiCommerce()->get_option( 'currency', 'USD' ) );
			$currency_position = DigiCommerce()->get_option( 'currency_position', 'left' );
			
			if ( 'right' === $currency_position ) {
				$formatted_total = number_format( $cart_total, 2 ) . $currency_symbol;
			} else {
				$formatted_total = $currency_symbol . number_format( $cart_total, 2 );
			}
		} else {
			$formatted_total = '$' . number_format( $cart_total, 2 );
		}

		// Get checkout URL
		$checkout_page_id = DigiCommerce()->get_option( 'checkout_page_id', '' );
		$checkout_url = $checkout_page_id ? get_permalink( $checkout_page_id ) : '#';

		// Build the block class
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
		$empty_class = ( $cart_count === 0 ) ? ' cart-empty' : '';
		$block_class = "digiblocks-cart-icon $id $custom_classes $animation_class $empty_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Hide block if cart is empty and hide_on_empty is true
		$style_attr = '';
		if ( $hide_on_empty && $cart_count === 0 ) {
			$style_attr = ' style="display: none;"';
		}

		// Get cart icon SVG
		$icon_svg = '';
		switch ( $icon_type ) {
			case 'bag':
				$icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>';
				break;
			case 'basket':
				$icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-13.4 19.1-7.3 30.8L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>';
				break;
			case 'custom':
				$icon_svg = ! empty( $custom_icon ) ? $custom_icon : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
				break;
			default: // cart
				$icon_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
				break;
		}

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?><?php echo wp_kses_post( $style_attr ); ?>>
			<a href="<?php echo esc_url( $checkout_url ); ?>" 
				class="digiblocks-cart-icon-link"
				data-cart-text="<?php echo esc_attr( $cart_text ); ?>"
				data-empty-cart-text="<?php echo esc_attr( $empty_cart_text ); ?>"
				data-show-mini-cart="<?php echo esc_attr( $show_mini_cart ? 'true' : 'false' ); ?>"
				aria-label="<?php echo esc_attr( sprintf( __( 'View cart (%d items)', 'digiblocks' ), $cart_count ) ); ?>">
				
				<div class="digiblocks-cart-icon-icon">
					<?php echo wp_kses( $icon_svg, digiblocks_allow_svg_in_kses() ); ?>
					
					<?php if ( $show_count ) : ?>
						<span class="digiblocks-cart-count" style="<?php echo $cart_count === 0 && $hide_on_empty ? 'display: none;' : ''; ?>">
							<?php echo esc_html( $cart_count ); ?>
						</span>
					<?php endif; ?>
				</div>
				
				<?php if ( $show_text ) : ?>
					<span class="digiblocks-cart-text">
						<?php echo esc_html( $cart_count > 0 ? $cart_text : $empty_cart_text ); ?>
					</span>
				<?php endif; ?>
				
				<?php if ( $show_total ) : ?>
					<span class="digiblocks-cart-total" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
						<?php echo esc_html( $formatted_total ); ?>
					</span>
				<?php endif; ?>
			</a>

			<?php if ( $show_mini_cart ) : ?>
				<div class="digiblocks-mini-cart" style="opacity: 0; visibility: hidden; transform: translateY(-10px);">
					<div class="digiblocks-mini-cart-header">
						<h3 class="digiblocks-mini-cart-title">
							<?php esc_html_e( 'Shopping Cart', 'digiblocks' ); ?>
						</h3>
						<button class="digiblocks-mini-cart-close" aria-label="<?php esc_attr_e( 'Close cart', 'digiblocks' ); ?>">
							×
						</button>
					</div>
					
					<div class="digiblocks-mini-cart-content">
						<?php if ( $cart_count > 0 ) : ?>
							<div class="digiblocks-mini-cart-items">
							<?php foreach ( $cart_items as $index => $cart_item ) :
								$product_id = isset( $cart_item['product_id'] ) ? $cart_item['product_id'] : 0;
								$product_name = isset( $cart_item['name'] ) ? $cart_item['name'] : '';
								$product_price = isset( $cart_item['price'] ) ? (float) $cart_item['price'] : 0;
								$variation_name = isset( $cart_item['variation_name'] ) && ! empty( $cart_item['variation_name'] ) ? ' - ' . $cart_item['variation_name'] : '';
								
								// Get product featured image
								$product_image_url = '';
								if ( $product_id ) {
									$image_id = get_post_thumbnail_id( $product_id );
									if ( $image_id ) {
										$product_image_url = wp_get_attachment_image_url( $image_id, 'thumbnail' );
									}
								}
								
								// Format price using DigiCommerce settings
								$formatted_price = '';
								if ( class_exists( 'DigiCommerce_Product' ) ) {
									$product_instance = DigiCommerce_Product::instance();
									$currency_symbol = $product_instance->get_currency_symbol( DigiCommerce()->get_option( 'currency', 'USD' ) );
									$currency_position = DigiCommerce()->get_option( 'currency_position', 'left' );
									
									if ( 'right' === $currency_position ) {
										$formatted_price = number_format( $product_price, 2 ) . $currency_symbol;
									} else {
										$formatted_price = $currency_symbol . number_format( $product_price, 2 );
									}
								} else {
									$formatted_price = '$' . number_format( $product_price, 2 );
								}
								?>
								<div class="digiblocks-mini-cart-item" data-cart-item-key="<?php echo esc_attr( $index ); ?>">
									<?php if ( $product_image_url ) : ?>
										<div class="digiblocks-mini-cart-item-image">
											<img src="<?php echo esc_url( $product_image_url ); ?>" alt="<?php echo esc_attr( $product_name ); ?>" loading="lazy" />
										</div>
									<?php endif; ?>
									
									<div class="digiblocks-mini-cart-item-details">
										<h4 class="digiblocks-mini-cart-item-name">
											<?php echo esc_html( $product_name . $variation_name ); ?>
										</h4>
										<p class="digiblocks-mini-cart-item-price"><?php echo esc_html( $formatted_price ); ?></p>
									</div>
									
									<button 
										class="digiblocks-mini-cart-item-remove" 
										data-cart-item-key="<?php echo esc_attr( $index ); ?>"
										aria-label="<?php esc_attr_e( 'Remove this item', 'digiblocks' ); ?>"
									>
										×
									</button>
								</div>
							<?php endforeach; ?>
							</div>
							
							<div class="digiblocks-mini-cart-total">
								<span><?php esc_html_e( 'Total:', 'digiblocks' ); ?></span>
								<span class="total-amount"><?php echo esc_html( $formatted_total ); ?></span>
							</div>
							
							<div class="digiblocks-mini-cart-buttons">
								<a href="<?php echo esc_url( $checkout_url ); ?>" class="digiblocks-mini-cart-button primary">
									<?php esc_html_e( 'Checkout', 'digiblocks' ); ?>
								</a>
							</div>
						<?php else : ?>
							<div class="digiblocks-mini-cart-empty">
								<p><?php esc_html_e( 'Your cart is currently empty.', 'digiblocks' ); ?></p>
							</div>
						<?php endif; ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Add this render method to the class
	 * Render callback for digi-price block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_digi_price_block( $attributes, $content, $block ) {
		// Check if DigiCommerce is active
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<div class="digiblocks-digi-price-error">' . __( 'DigiCommerce is required for this block.', 'digiblocks' ) . '</div>';
		}

		// Extract block attributes
		$id                  = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-digi-price-' . uniqid();
		$anchor              = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes      = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$show_regular_price  = isset( $attributes['showRegularPrice'] ) ? $attributes['showRegularPrice'] : true;
		$show_sale_price     = isset( $attributes['showSalePrice'] ) ? $attributes['showSalePrice'] : true;
		$show_currency       = isset( $attributes['showCurrency'] ) ? $attributes['showCurrency'] : true;
		$show_from_label     = isset( $attributes['showFromLabel'] ) ? $attributes['showFromLabel'] : true;
		$animation           = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get the current responsive state
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build the block class
		$block_class = "digiblocks-digi-price $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Get current product
		global $post;
		$product = null;
		
		// Try to get product from block context first
		if ( isset( $block->context['postId'] ) ) {
			$product_id = absint( $block->context['postId'] );
			if ( $product_id > 0 ) {
				$temp_post = get_post( $product_id );
				if ( $temp_post && 'digi_product' === $temp_post->post_type ) {
					$product = $temp_post;
				}
			}
		}
		
		// If still no product and we're on a product page
		if ( ! $product && is_singular( 'digi_product' ) ) {
			if ( $post && isset( $post->ID ) ) {
				$product_id = absint( $post->ID );
				if ( $product_id > 0 ) {
					$temp_post = get_post( $product_id );
					if ( $temp_post && 'digi_product' === $temp_post->post_type ) {
						$product = $temp_post;
					}
				}
			}
		}
		
		// Last resort: try to get product from query
		if ( ! $product ) {
			$post_id = get_the_ID();
			if ( $post_id && get_post_type( $post_id ) === 'digi_product' ) {
				$product = get_post( $post_id );
			}
		}

		// If still no valid product, show placeholder for editor or message
		if ( ! $product || 'digi_product' !== $product->post_type ) {
			// Check if we're in the editor context
			if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
				// Get currency symbol and position from DigiCommerce settings
				$currency_symbol = '$';
				$currency_position = 'left';
				
				if ( class_exists( 'DigiCommerce' ) ) {
					$currency_code = DigiCommerce()->get_option( 'currency', 'USD' );
					if ( class_exists( 'DigiCommerce_Product' ) ) {
						$currency_symbol = DigiCommerce_Product::instance()->get_currency_symbol( $currency_code );
					}
					$currency_position = DigiCommerce()->get_option( 'currency_position', 'left' );
				}
				
				// Return editor preview
				ob_start();
				?>
				<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
					<div class="digiblocks-price-container">
						<?php if ( $show_from_label ) : ?>
							<span class="digiblocks-from-label"><?php esc_html_e( 'From:', 'digiblocks' ); ?></span>
						<?php endif; ?>
						<div class="digiblocks-price-wrapper">
							<?php if ( $show_sale_price ) : ?>
								<span class="digiblocks-price digiblocks-sale-price">
									<?php if ( $show_currency && 'left' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
									<span class="digiblocks-price-value">19.99</span>
									<?php if ( $show_currency && 'right' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
								</span>
							<?php endif; ?>
							<?php if ( $show_regular_price && $show_sale_price ) : ?>
								<span class="digiblocks-price digiblocks-regular-price">
									<?php if ( $show_currency && 'left' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
									<span class="digiblocks-price-value">29.99</span>
									<?php if ( $show_currency && 'right' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
								</span>
							<?php endif; ?>
							<?php if ( ! $show_sale_price ) : ?>
								<span class="digiblocks-price">
									<?php if ( $show_currency && 'left' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
									<span class="digiblocks-price-value">24.99</span>
									<?php if ( $show_currency && 'right' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
								</span>
							<?php endif; ?>
						</div>
					</div>
					<div class="digiblocks-editor-notice">
						<?php esc_html_e( 'Preview - Actual product price will be displayed on frontend', 'digiblocks' ); ?>
					</div>
				</div>
				<?php
				return ob_get_clean();
			}
			
			return '<div class="' . esc_attr( $block_class ) . '"' . wp_kses_post( $id_attr ) . '>' . 
				__( 'Product price will be displayed here when viewing a DigiCommerce product.', 'digiblocks' ) . 
				'</div>';
		}

		// Get product data
		$product_id = $product->ID;
		$price_mode = get_post_meta( $product_id, 'digi_price_mode', true );
		
		// Get currency symbol and position from DigiCommerce settings
		$currency_symbol = '$';
		$currency_position = 'left';
		
		if ( class_exists( 'DigiCommerce' ) ) {
			$currency_code = DigiCommerce()->get_option( 'currency', 'USD' );
			if ( class_exists( 'DigiCommerce_Product' ) ) {
				$currency_symbol = DigiCommerce_Product::instance()->get_currency_symbol( $currency_code );
			}
			$currency_position = DigiCommerce()->get_option( 'currency_position', 'left' );
		}

		// Start output buffer
		ob_start();

		?>
		<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'product' ) ); ?>>
			<div class="digiblocks-price-container">
				<?php
				// Handle variable products
				if ( 'variations' === $price_mode ) {
					$variations = get_post_meta( $product_id, 'digi_price_variations', true );
					
					if ( ! empty( $variations ) && is_array( $variations ) ) {
						// Get all prices to determine range
						$prices = array();
						$sale_prices = array();
						$regular_prices = array();
						
						foreach ( $variations as $variation ) {
							$regular_price = floatval( $variation['price'] );
							$sale_price = isset( $variation['salePrice'] ) ? floatval( $variation['salePrice'] ) : 0;
							
							// Use sale price if available and greater than 0, otherwise regular price
							$current_price = ( $sale_price > 0 ) ? $sale_price : $regular_price;
							
							$prices[] = $current_price;
							$sale_prices[] = $sale_price;
							$regular_prices[] = $regular_price;
						}
						
						if ( ! empty( $prices ) ) {
							$min_price = min( $prices );
							$max_price = max( $prices );
							
							// Check if any variation has a sale price
							$has_sale = false;
							$min_sale_price = 0;
							$min_regular_price = 0;
							
							foreach ( $variations as $variation ) {
								$regular_price = floatval( $variation['price'] );
								$sale_price = isset( $variation['salePrice'] ) ? floatval( $variation['salePrice'] ) : 0;
								
								if ( $sale_price > 0 && $sale_price < $regular_price ) {
									$has_sale = true;
									if ( $min_sale_price === 0 || $sale_price < $min_sale_price ) {
										$min_sale_price = $sale_price;
										$min_regular_price = $regular_price;
									}
								}
							}
							
							// Show "From:" label if enabled
							if ( $show_from_label ) : ?>
								<span class="digiblocks-from-label"><?php esc_html_e( 'From:', 'digiblocks' ); ?></span>
							<?php endif; ?>
							
							<div class="digiblocks-price-wrapper">
								<?php
								if ( $has_sale && $show_sale_price && $show_regular_price ) {
									// Show sale price and regular price
									?>
									<span class="digiblocks-price digiblocks-sale-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
										<?php if ( $show_currency && 'left' === $currency_position ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
										<?php endif; ?>
										<span class="digiblocks-price-value"><?php echo esc_html( number_format( $min_sale_price, 2 ) ); ?></span>
										<?php if ( $show_currency && 'right' === $currency_position ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
										<?php endif; ?>
									</span>
									<span class="digiblocks-price digiblocks-regular-price">
										<?php if ( $show_currency && 'left' === $currency_position ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
										<?php endif; ?>
										<span class="digiblocks-price-value"><?php echo esc_html( number_format( $min_regular_price, 2 ) ); ?></span>
										<?php if ( $show_currency && 'right' === $currency_position ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
										<?php endif; ?>
									</span>
									<?php
								} else {
									// Show current price only
									?>
									<span class="digiblocks-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
										<?php if ( $show_currency && 'left' === $currency_position ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
										<?php endif; ?>
										<span class="digiblocks-price-value"><?php echo esc_html( number_format( $min_price, 2 ) ); ?></span>
										<?php if ( $show_currency && 'right' === $currency_position ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
										<?php endif; ?>
									</span>
									<?php
								}
								?>
							</div>
							<?php
						}
					}
				} else {
					// Handle simple products
					$regular_price = floatval( get_post_meta( $product_id, 'digi_price', true ) );
					$sale_price = floatval( get_post_meta( $product_id, 'digi_sale_price', true ) );
					
					$is_on_sale = ( $sale_price > 0 && $sale_price < $regular_price );
					$current_price = $is_on_sale ? $sale_price : $regular_price;
					
					if ( $current_price > 0 ) {
						?>
						<div class="digiblocks-price-wrapper">
							<?php
							if ( $is_on_sale && $show_sale_price && $show_regular_price ) {
								?>
								<span class="digiblocks-price digiblocks-sale-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
									<?php if ( $show_currency && 'left' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
									<span class="digiblocks-price-value"><?php echo esc_html( number_format( $sale_price, 2 ) ); ?></span>
									<?php if ( $show_currency && 'right' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
								</span>
								<span class="digiblocks-price digiblocks-regular-price">
									<?php if ( $show_currency && 'left' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
									<span class="digiblocks-price-value"><?php echo esc_html( number_format( $regular_price, 2 ) ); ?></span>
									<?php if ( $show_currency && 'right' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
								</span>
								<?php
							} else {
								?>
								<span class="digiblocks-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
									<?php if ( $show_currency && 'left' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
									<span class="digiblocks-price-value"><?php echo esc_html( number_format( $current_price, 2 ) ); ?></span>
									<?php if ( $show_currency && 'right' === $currency_position ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( $currency_symbol ); ?></span>
									<?php endif; ?>
								</span>
								<?php
							}
							?>
						</div>
						<?php
					}
				}
				?>
			</div>
		</div>
		<?php

		// Get the output buffer
		$output = ob_get_clean();

		return $output;
	}

	/**
	 * Render callback for DigiCommerce product gallery block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_product_gallery_block( $attributes, $content, $block ) {
		// Check if DigiCommerce is active
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<p>' . __( 'DigiCommerce is not active. Please install and activate DigiCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Check if we're on a single product page
		if ( ! is_singular( 'digi_product' ) ) {
			return '<div class="digiblocks-product-gallery-notice"><p>' . __( 'This block displays product images on single DigiCommerce product pages only.', 'digiblocks' ) . '</p></div>';
		}

		global $post;

		// Ensure we have a valid product
		if ( ! $post || 'digi_product' !== $post->post_type ) {
			return '<p>' . __( 'No product found.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id                    = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-gallery-' . uniqid();
		$anchor                = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes        = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$thumbnail_position    = isset( $attributes['thumbnailPosition'] ) ? $attributes['thumbnailPosition'] : 'bottom';
		$enable_lightbox       = isset( $attributes['enableLightbox'] ) ? $attributes['enableLightbox'] : true;
		$image_size            = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'large';
		$thumbnail_size        = isset( $attributes['thumbnailSize'] ) ? $attributes['thumbnailSize'] : 'medium';
		$animation             = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get product images
		$main_image_id = get_post_thumbnail_id( $post->ID );
		
		// Get gallery images from meta field (DigiCommerce stores as array of objects with 'id' key)
		$gallery = get_post_meta( $post->ID, 'digi_gallery', true );
		$gallery_image_ids = array();
		
		if ( ! empty( $gallery ) && is_array( $gallery ) ) {
			foreach ( $gallery as $image ) {
				if ( isset( $image['id'] ) ) {
					$gallery_image_ids[] = $image['id'];
				}
			}
		}
		
		// Combine main image with gallery images
		$all_image_ids = array();
		if ( $main_image_id ) {
			$all_image_ids[] = $main_image_id;
		}
		$all_image_ids = array_merge( $all_image_ids, $gallery_image_ids );

		// Remove duplicates
		$all_image_ids = array_unique( $all_image_ids );

		// If no images, try to get any attachments for this product
		if ( empty( $all_image_ids ) ) {
			$attachments = get_attached_media( 'image', $post->ID );
			if ( ! empty( $attachments ) ) {
				$all_image_ids = array_keys( $attachments );
			}
		}

		// If still no images, show placeholder
		if ( empty( $all_image_ids ) ) {
			return '<div class="digiblocks-product-gallery-no-images ' . esc_attr( $id ) . '"><p>' . __( 'No product images available.', 'digiblocks' ) . '</p></div>';
		}

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-digi-product-gallery-block $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
			<div class="digiblocks-product-gallery thumbnail-<?php echo esc_attr( $thumbnail_position ); ?>">
				
				<!-- Main Image -->
				<div class="digiblocks-main-image">
					<?php
					$main_image = wp_get_attachment_image( 
						$all_image_ids[0], 
						$image_size, 
						false, 
						array(
							'alt' => get_post_meta( $all_image_ids[0], '_wp_attachment_image_alt', true ) ?: get_the_title( $post->ID ),
							'data-full-src' => wp_get_attachment_image_url( $all_image_ids[0], 'full' )
						)
					);
					echo wp_kses_post( $main_image );
					?>
					
					<?php if ( $enable_lightbox ) : ?>
						<div class="digiblocks-lightbox-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"/></svg>
						</div>
					<?php endif; ?>
				</div>

				<!-- Thumbnails -->
				<?php if ( count( $all_image_ids ) > 1 ) : ?>
					<div class="digiblocks-thumbnails">
						<?php foreach ( $all_image_ids as $index => $image_id ) : ?>
							<div class="digiblocks-thumbnail <?php echo $index === 0 ? 'active' : ''; ?>">
								<?php
								echo wp_get_attachment_image( 
									$image_id, 
									$thumbnail_size, 
									false, 
									array(
										'alt' => get_post_meta( $image_id, '_wp_attachment_image_alt', true ) ?: get_the_title( $post->ID ) . ' ' . ( $index + 1 ),
										'data-full-src' => wp_get_attachment_image_url( $image_id, 'full' )
									)
								);
								?>
							</div>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				
			</div>
		</div>
		<?php

		return ob_get_clean();
	}

	/**
	 * Render callback for DigiCommerce Product Meta block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_product_meta_block( $attributes, $content, $block ) {
		// Check if DigiCommerce is active
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<p>' . __( 'DigiCommerce is not active. Please install and activate DigiCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Check if we're on a single product page or if it's a digi_product post type
		global $post;
		if ( ! $post || ( ! is_singular( 'digi_product' ) && 'digi_product' !== $post->post_type ) ) {
			return '<div class="digiblocks-product-meta-notice"><p>' . __( 'This block displays product meta on single product pages only.', 'digiblocks' ) . '</p></div>';
		}

		// Extract block attributes
		$id                               = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-meta-' . uniqid();
		$anchor                           = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes                   = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$show_categories                  = isset( $attributes['showCategories'] ) ? $attributes['showCategories'] : true;
		$show_tags                        = isset( $attributes['showTags'] ) ? $attributes['showTags'] : true;
		$categories_label                 = isset( $attributes['categoriesLabel'] ) ? $attributes['categoriesLabel'] : __( 'Categories:', 'digiblocks' );
		$tags_label                       = isset( $attributes['tagsLabel'] ) ? $attributes['tagsLabel'] : __( 'Tags:', 'digiblocks' );
		$animation                        = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get product data
		$product_categories = get_the_terms( $post->ID, 'digi_product_cat' );
		$product_tags = get_the_terms( $post->ID, 'digi_product_tag' );

		// Build class names
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
		$class_names = "digiblocks-product-meta $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Start output buffer
		ob_start();

		// Check if we have any data to show
		$has_data = false;
		if ( ( $show_categories && $product_categories && ! is_wp_error( $product_categories ) ) || 
			 ( $show_tags && $product_tags && ! is_wp_error( $product_tags ) ) ) {
			$has_data = true;
		}

		if ( ! $has_data ) {
			return '';
		}

		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'product' ) ); ?>>
			<div class="digiblocks-product-meta-container">
				<?php if ( $show_categories && $product_categories && ! is_wp_error( $product_categories ) ) : ?>
					<div class="digiblocks-meta-item digiblocks-categories-item">
						<span class="digiblocks-meta-label"><?php echo esc_html( $categories_label ); ?></span>
						<div class="digiblocks-meta-value">
							<?php foreach ( $product_categories as $category ) : ?>
								<a href="<?php echo esc_url( get_term_link( $category ) ); ?>" class="digiblocks-category-link">
									<?php echo esc_html( $category->name ); ?>
								</a>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endif; ?>
				
				<?php if ( $show_tags && $product_tags && ! is_wp_error( $product_tags ) ) : ?>
					<div class="digiblocks-meta-item digiblocks-tags-item">
						<span class="digiblocks-meta-label"><?php echo esc_html( $tags_label ); ?></span>
						<div class="digiblocks-meta-value">
							<?php foreach ( $product_tags as $tag ) : ?>
								<a href="<?php echo esc_url( get_term_link( $tag ) ); ?>" class="digiblocks-tag-link">
									<?php echo esc_html( $tag->name ); ?>
								</a>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
		<?php

		return ob_get_clean();
	}

	/**
	 * Render callback for DigiCommerce Product Content block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_product_content_block( $attributes, $content, $block ) {
		// Check if DigiCommerce is active
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<p>' . __( 'DigiCommerce is not active. Please install and activate DigiCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id             = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-content-' . uniqid();
		$anchor         = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$content_type   = isset( $attributes['contentType'] ) ? $attributes['contentType'] : 'description';
		$animation      = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-product-content-wrapper $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Check if we're on a DigiCommerce product page
		if ( ! is_singular( 'digi_product' ) ) {
			// Not on a product page, show placeholder message
			ob_start();
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-product-content">
					<p class="digiblocks-placeholder-notice">
						<?php 
						if ( $content_type === 'short_description' ) {
							esc_html_e( 'Product short description will be displayed here on single product pages.', 'digiblocks' ); 
						} else {
							esc_html_e( 'Product description will be displayed here on single product pages.', 'digiblocks' ); 
						}
						?>
					</p>
				</div>
			</div>
			<?php
			return ob_get_clean();
		}

		// Get the current product ID
		$product_id = get_the_ID();

		if ( ! $product_id ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '><p>' . esc_html__( 'Product not found.', 'digiblocks' ) . '</p></div>';
		}

		// Get the content based on content type
		$product_content = '';
		if ( $content_type === 'short_description' ) {
			$product_content = get_post_meta( $product_id, 'digi_product_description', true );
		} else {
			// Get full description from post content
			$post = get_post( $product_id );
			if ( $post ) {
				$product_content = $post->post_content;
			}
		}

		// Start output buffer
		ob_start();

		if ( ! empty( $product_content ) ) {
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-product-content" <?php echo wp_kses_post( digiblocks_get_schema_property( 'description' ) ); ?>>
					<?php 
					// Apply content filters to allow shortcodes, etc.
					echo wp_kses_post( apply_filters( 'the_content', $product_content ) );
					?>
				</div>
			</div>
			<?php
		} else {
			// No content available
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-product-content">
					<p class="digiblocks-no-content">
						<?php 
						if ( $content_type === 'short_description' ) {
							esc_html_e( 'No short description available for this product.', 'digiblocks' ); 
						} else {
							esc_html_e( 'No description available for this product.', 'digiblocks' ); 
						}
						?>
					</p>
				</div>
			</div>
			<?php
		}

		return ob_get_clean();
	}

	/**
	 * Render callback for DigiCommerce Product Features block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_product_features_block( $attributes, $content, $block ) {
		// Check if DigiCommerce is active
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<p>' . __( 'DigiCommerce is not active. Please install and activate DigiCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id               = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-features-' . uniqid();
		$anchor           = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes   = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$show_title       = isset( $attributes['showTitle'] ) ? $attributes['showTitle'] : true;
		$title_text       = isset( $attributes['titleText'] ) ? $attributes['titleText'] : __( 'Product Features', 'digiblocks' );
		$title_tag        = isset( $attributes['titleTag'] ) ? $attributes['titleTag'] : 'h3';
		$animation        = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-product-features-wrapper $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Check if we're on a single DigiCommerce product page
		if ( ! is_singular( 'digi_product' ) ) {
			// Not on a product page, show placeholder
			ob_start();
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<?php if ( $show_title ) : ?>
					<<?php echo esc_attr( $title_tag ); ?> class="digiblocks-features-title">
						<?php echo esc_html( $title_text ); ?>
					</<?php echo esc_attr( $title_tag ); ?>>
				<?php endif; ?>
				
				<div class="digiblocks-features-notice">
					<p><?php esc_html_e( 'This is a placeholder. Product features will be displayed here on single product pages.', 'digiblocks' ); ?></p>
				</div>
				
				<!-- Placeholder table -->
				<div class="digiblocks-features-table-wrapper">
					<table class="digiblocks-features-table">
						<tbody>
							<tr>
								<td class="digiblocks-feature-name"><?php esc_html_e( 'File Size', 'digiblocks' ); ?></td>
								<td class="digiblocks-feature-value"><?php esc_html_e( '25 MB', 'digiblocks' ); ?></td>
							</tr>
							<tr>
								<td class="digiblocks-feature-name"><?php esc_html_e( 'Format', 'digiblocks' ); ?></td>
								<td class="digiblocks-feature-value"><?php esc_html_e( 'PDF, DOCX', 'digiblocks' ); ?></td>
							</tr>
							<tr>
								<td class="digiblocks-feature-name"><?php esc_html_e( 'License', 'digiblocks' ); ?></td>
								<td class="digiblocks-feature-value"><?php esc_html_e( 'Commercial Use', 'digiblocks' ); ?></td>
							</tr>
							<tr>
								<td class="digiblocks-feature-name"><?php esc_html_e( 'Support', 'digiblocks' ); ?></td>
								<td class="digiblocks-feature-value"><?php esc_html_e( '1 Year', 'digiblocks' ); ?></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<?php
			return ob_get_clean();
		}

		// Get the current product ID
		$product_id = get_the_ID();
		
		// Get product features
		$features = get_post_meta( $product_id, 'digi_features', true );

		// Start output buffer
		ob_start();

		if ( ! empty( $features ) && is_array( $features ) ) {
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<?php if ( $show_title ) : ?>
					<<?php echo esc_attr( $title_tag ); ?> class="digiblocks-features-title" <?php echo wp_kses_post( digiblocks_get_schema_property( 'name' ) ); ?>>
						<?php echo esc_html( $title_text ); ?>
					</<?php echo esc_attr( $title_tag ); ?>>
				<?php endif; ?>
				
				<div class="digiblocks-features-table-wrapper" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'list' ) ); ?>>
					<table class="digiblocks-features-table">
						<tbody>
							<?php foreach ( $features as $index => $feature ) : ?>
								<tr class="digiblocks-feature-row digiblocks-feature-row-<?php echo esc_attr( $index ); ?>" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'list-item' ) ); ?>>
									<td class="digiblocks-feature-name" <?php echo wp_kses_post( digiblocks_get_schema_property( 'name' ) ); ?>>
										<?php echo esc_html( $feature['name'] ); ?>
									</td>
									<td class="digiblocks-feature-value" <?php echo wp_kses_post( digiblocks_get_schema_property( 'value' ) ); ?>>
										<?php echo esc_html( $feature['text'] ); ?>
									</td>
								</tr>
							<?php endforeach; ?>
						</tbody>
					</table>
				</div>
			</div>
			<?php
		} else {
			// No features available
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<?php if ( $show_title ) : ?>
					<<?php echo esc_attr( $title_tag ); ?> class="digiblocks-features-title">
						<?php echo esc_html( $title_text ); ?>
					</<?php echo esc_attr( $title_tag ); ?>>
				<?php endif; ?>
				
				<div class="digiblocks-features-empty">
					<p class="digiblocks-no-features">
						<?php esc_html_e( 'No features available for this product.', 'digiblocks' ); ?>
					</p>
				</div>
			</div>
			<?php
		}

		return ob_get_clean();
	}

	/**
	 * Render callback for DigiCommerce Product Add To Cart block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_product_add_to_cart_block( $attributes, $content, $block ) {
		// Check if DigiCommerce is active
		if ( ! class_exists( 'DigiCommerce' ) ) {
			return '<p>' . __( 'DigiCommerce is not active. Please install and activate DigiCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id             = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-add-to-cart-' . uniqid();
		$anchor         = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$button_text    = isset( $attributes['buttonText'] ) ? $attributes['buttonText'] : __( 'Add to cart', 'digiblocks' );
		$animation      = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-digi-product-add-to-cart $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Check if we're on a single DigiCommerce product page
		if ( ! is_singular( 'digi_product' ) ) {
			return;
		}

		// Get the current product
		global $post;
		$product_id = $post->ID;
		
		// Get product data
		$price_mode = get_post_meta( $product_id, 'digi_price_mode', true );
		$single_price = floatval( get_post_meta( $product_id, 'digi_price', true ) );
		$sale_price = floatval( get_post_meta( $product_id, 'digi_sale_price', true ) );
		$price_variations = get_post_meta( $product_id, 'digi_price_variations', true );

		// Get DigiCommerce product instance for price formatting
		$product_instance = DigiCommerce_Product::instance();

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
			<form class="digiblocks-digi-add-to-cart-form digicommerce-add-to-cart" method="POST" action="">
				<?php wp_nonce_field( 'digiblocks_digi_add_to_cart', 'nonce' ); ?>
				<input type="hidden" name="action" value="add_to_cart">
				<input type="hidden" name="product_id" value="<?php echo esc_attr( $product_id ); ?>">
				
				<div class="digiblocks-digi-add-to-cart-container">
					<?php
					// Handle variations like in single-product.php
					if ( 'variations' === $price_mode && ! empty( $price_variations ) && is_array( $price_variations ) ) :
						?>
						<div class="variation-prices">
							<div class="flex">
								<?php foreach ( $price_variations as $index => $variation ) : ?>
									<?php
									$regular_price = floatval( $variation['price'] );
									$sale_price_var = isset( $variation['salePrice'] ) ? floatval( $variation['salePrice'] ) : 0;
									$variation_name = sanitize_text_field( $variation['name'] );
									
									// Use sale price if it exists and is greater than 0
									$display_price = ( ! empty( $sale_price_var ) && $sale_price_var > 0 ) ? $sale_price_var : $regular_price;
									$formatted_price = $product_instance->format_price( $display_price, 'variation-price', true );
									?>
									<div class="flex">
										<input type="radio" 
											id="variation-<?php echo esc_attr( $index ); ?>-<?php echo esc_attr( $id ); ?>" 
											name="price_variation" 
											value="<?php echo esc_attr( $display_price ); ?>" 
											data-name="<?php echo esc_attr( $variation_name ); ?>" 
											data-formatted-price="<?php echo esc_attr( $formatted_price ); ?>"
											<?php checked( isset( $variation['isDefault'] ) && $variation['isDefault'] ); ?>>
										<label for="variation-<?php echo esc_attr( $index ); ?>-<?php echo esc_attr( $id ); ?>">
											<span class="leading-none font-bold"><?php echo esc_html( $variation_name ); ?></span>
											<?php if ( isset( $variation['salePrice'] ) && $variation['salePrice'] > 0 && $variation['salePrice'] < $variation['price'] ) : ?>
												<span class="leading-none flex items-center gap-1">
													<?php echo wp_kses_post( $product_instance->format_price( $variation['salePrice'], 'variation-sale-price' ) ); ?>
													<?php echo wp_kses_post( $product_instance->format_price( $variation['price'], 'variation-regular-price text-sm line-through' ) ); ?>
												</span>
											<?php else : ?>
												<span class="leading-none">
													<?php echo wp_kses_post( $product_instance->format_price( $variation['price'], 'variation-price' ) ); ?>
												</span>
											<?php endif; ?>
										</label>
									</div>
								<?php endforeach; ?>
							</div>
						</div>
						<input type="hidden" name="variation_name" value="">
						<input type="hidden" name="variation_price" value="">
						<?php
					else :
						// Simple product
						$display_price = ( $sale_price && $sale_price < $single_price ) ? $sale_price : $single_price;
						?>
						<input type="hidden" name="product_price" value="<?php echo esc_attr( $display_price ); ?>">
						<?php
					endif;
					?>
					
					<button 
						type="submit" 
						class="digiblocks-digi-add-to-cart-button"
						data-product-id="<?php echo esc_attr( $product_id ); ?>"
						<?php echo ( 'variations' === $price_mode ) ? 'disabled' : ''; ?>
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l7.4 36.9c2.2 10.7 11.2 18.2 22 18.2H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
						<span class="digiblocks-button-text">
							<?php
							if ( 'single' === $price_mode ) {
								$display_price = ( $sale_price && $sale_price < $single_price ) ? $sale_price : $single_price;
								$formatted_price = $product_instance->format_price( $display_price, '', true );
								echo esc_html( sprintf(
									/* translators: %s: Price */
									__( '%s for %s', 'digiblocks' ),
									$button_text,
									$formatted_price
								) );
							} else {
								echo esc_html( $button_text );
							}
							?>
						</span>
					</button>
				</div>
			</form>
		</div>
		<?php
		
		return ob_get_clean();
	}

	/**
	 * Render callback for DigiCommerce product reviews block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_product_reviews_block( $attributes, $content, $block ) {
		// Check if DigiCommerce Pro is active and reviews class exists
		if ( ! class_exists( 'DigiCommerce_Pro_Reviews' ) ) {
			return '<p>' . __( 'DigiCommerce Pro with Reviews addon is required to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id             = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-reviews-' . uniqid();
		$anchor         = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$show_stars     = isset( $attributes['showStars'] ) ? $attributes['showStars'] : true;
		$show_count     = isset( $attributes['showCount'] ) ? $attributes['showCount'] : true;
		$show_text      = isset( $attributes['showText'] ) ? $attributes['showText'] : true;
		$animation      = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-digi-product-reviews-block $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Check if we're on a single product page
		if ( ! is_singular( 'digi_product' ) ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-digi-product-reviews-notice">' . 
				__( 'Product reviews will be displayed on single product pages.', 'digiblocks' ) . 
				'</p></div>';
		}

		// Get the current product
		$product_id = get_the_ID();
		
		if ( ! $product_id || 'digi_product' !== get_post_type( $product_id ) ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-digi-product-reviews-notice">' . 
				__( 'Product not found.', 'digiblocks' ) . 
				'</p></div>';
		}

		// Get reviews instance
		$reviews = DigiCommerce_Pro_Reviews::instance();
		
		// Get product rating data
		$rating_data = $reviews->get_product_rating( $product_id );
		$average_rating = $rating_data['average'] ?: 0;
		$review_count = $rating_data['count'];

		// If no reviews yet, show message
		if ( $review_count === 0 ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<div class="digiblocks-digi-product-reviews">
					<span class="digiblocks-digi-product-reviews-text">' . 
					__( 'No reviews yet', 'digiblocks' ) . 
					'</span>
				</div></div>';
		}

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'review' ) ); ?>>
			<div class="digiblocks-digi-product-reviews">
				<a href="#digicommerce-reviews" class="digiblocks-digi-product-reviews-link">
					<?php if ( $show_stars ) : ?>
						<div class="digiblocks-digi-product-reviews-stars" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'rating' ) ); ?>>
							<?php
							for ( $i = 1; $i <= 5; $i++ ) {
								$fill = min( max( $average_rating - ( $i - 1 ), 0 ), 1 ) * 100;
								?>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="digiblocks-star">
									<defs>
										<linearGradient id="star-<?php echo esc_attr( $id . '-' . $i ); ?>">
											<stop offset="<?php echo esc_attr( $fill ); ?>%" class="star-filled" />
											<stop offset="<?php echo esc_attr( $fill ); ?>%" class="star-empty" />
										</linearGradient>
									</defs>
									<path fill="url(#star-<?php echo esc_attr( $id . '-' . $i ); ?>)" 
										d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
								</svg>
								<?php
							}
							?>
							<span class="screen-reader-text" <?php echo wp_kses_post( digiblocks_get_schema_property( 'ratingValue' ) ); ?> content="<?php echo esc_attr( $average_rating ); ?>">
								<?php echo sprintf( __( 'Rated %s out of 5', 'digiblocks' ), $average_rating ); ?>
							</span>
						</div>
					<?php endif; ?>
					
					<?php if ( $show_count || $show_text ) : ?>
						<span class="digiblocks-digi-product-reviews-count" <?php echo wp_kses_post( digiblocks_get_schema_property( 'reviewCount' ) ); ?> content="<?php echo esc_attr( $review_count ); ?>">
							<?php
							if ( $show_count && $show_text ) {
								printf(
									/* translators: 1: rating 2: number of reviews */
									esc_html( _n( '%.1f (%d review)', '%.1f (%d reviews)', $review_count, 'digiblocks' ) ),
									$average_rating,
									$review_count
								);
							} elseif ( $show_count ) {
								echo esc_html( $average_rating . ' (' . $review_count . ')' );
							} elseif ( $show_text ) {
								if ( $review_count === 1 ) {
									echo esc_html__( 'customer review', 'digiblocks' );
								} else {
									echo esc_html__( 'customer reviews', 'digiblocks' );
								}
							}
							?>
						</span>
					<?php endif; ?>
				</a>
			</div>
		</div>
		<?php

		return ob_get_clean();
	}

	/**
	 * Render callback for DigiCommerce Product Reviews Form block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_digi_product_reviews_form_block( $attributes, $content, $block ) {
		// Check if DigiCommerce Pro is active
		if ( ! class_exists( 'DigiCommerce_Pro' ) ) {
			return '<p>' . __( 'DigiCommerce Pro is not active. Please install and activate DigiCommerce Pro to use this block.', 'digiblocks' ) . '</p>';
		}
	
		// Extract block attributes
		$id             = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-reviews-form-' . uniqid();
		$anchor         = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$animation      = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
	
		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
	
		// Build class names
		$class_names = "digiblocks-digi-product-reviews-form-wrapper $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
	
		// Check if we're on a single DigiCommerce product page
		if ( ! is_singular( 'digi_product' ) ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-digi-product-reviews-form-notice">' . 
				__( 'Product reviews will be displayed on single product pages.', 'digiblocks' ) . 
				'</p></div>';
		}
	
		// Get the current product
		$product_id = get_the_ID();
		
		if ( ! $product_id || get_post_type( $product_id ) !== 'digi_product' ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-digi-product-reviews-form-error">' . 
				__( 'Product not found.', 'digiblocks' ) . 
				'</p></div>';
		}
	
		// Check if DigiCommerce Pro Reviews are available
		if ( ! class_exists( 'DigiCommerce_Pro_Reviews' ) ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-digi-product-reviews-form-disabled">' . 
				__( 'Product reviews are not available.', 'digiblocks' ) . 
				'</p></div>';
		}
	
		// Get the reviews instance
		$reviews_instance = DigiCommerce_Pro_Reviews::instance();
		
		// Get product reviews and rating data
		$reviews = $reviews_instance->get_product_reviews( $product_id );
		$rating_data = $reviews_instance->get_product_rating( $product_id );
	
		// Check if login is required
		$require_login = DigiCommerce()->get_option( 'require_login', false );
	
		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
			<div id="digicommerce-reviews" class="product-reviews">
				<!-- Reviews Section -->
				<?php if ( $rating_data['count'] > 0 ) : ?>
					<h3 class="reviews-title">
						<?php
						printf(
							/* translators: %d: number of reviews */
							esc_html( _n( '%d Review', '%d Reviews', $rating_data['count'], 'digiblocks' ) ),
							esc_html( $rating_data['count'] )
						);
						?>
					</h3>
	
					<div class="reviews-list">
						<?php foreach ( $reviews as $review ) : ?>
							<div class="review-item">
								<div class="review-header">
									<div class="review-stars">
										<?php
										for ( $i = 1; $i <= 5; $i++ ) {
											$star_class = ( $i <= $review['rating'] ) ? 'filled' : 'empty';
											echo '<span class="star ' . esc_attr( $star_class ) . '">★</span>';
										}
										?>
									</div>
									<span class="review-author"><?php echo esc_html( $review['author_name'] ); ?></span>
									<span class="review-date">
										<?php echo esc_html( date_i18n( get_option( 'date_format' ), strtotime( $review['date_created'] ) ) ); ?>
									</span>
								</div>
								<?php if ( ! empty( $review['review_text'] ) ) : ?>
									<div class="review-content">
										<p><?php echo esc_html( $review['review_text'] ); ?></p>
									</div>
								<?php endif; ?>
							</div>
						<?php endforeach; ?>
					</div>
				<?php else : ?>
					<div class="no-reviews">
						<p><?php esc_html_e( 'No reviews yet. Be the first to review this product!', 'digiblocks' ); ?></p>
					</div>
				<?php endif; ?>
	
				<!-- Review Form Section -->
				<div class="review-form-section">
					<?php if ( $require_login && ! is_user_logged_in() ) : ?>
						<?php
						$account_page_url = get_permalink( DigiCommerce()->get_option( 'account_page_id', '' ) );
						?>
						<div class="review-login-notice">
							<div class="login-notice-content">
								<p class="login-notice-text">
									<?php esc_html_e( 'You must be logged in to post a review.', 'digiblocks' ); ?>
								</p>
	
								<?php if ( $account_page_url ) : ?>
								<p class="login-notice-button">
									<a href="<?php echo esc_url( $account_page_url ); ?>" class="login-button">
										<?php esc_html_e( 'Log in', 'digiblocks' ); ?>
									</a>
								</p>
								<?php endif; ?>
							</div>
						</div>
					<?php else : ?>
						<form id="digi-product-review-form" class="review-form">
							<h3><?php esc_html_e( 'Add a review', 'digiblocks' ); ?></h3>
							
							<input type="hidden" name="product_id" value="<?php echo esc_attr( $product_id ); ?>">
							<input type="hidden" name="action" value="submit_review">
							<?php wp_nonce_field( 'submit_review', 'review_nonce' ); ?>
	
							<div class="form-row">
								<label for="rating">
									<?php esc_html_e( 'Rating', 'digiblocks' ); ?> <span class="required">*</span>
								</label>
								<div class="rating-input">
									<?php for ( $i = 1; $i <= 5; $i++ ) : ?>
										<input type="radio" name="rating" value="<?php echo esc_attr( $i ); ?>" 
											id="rating-<?php echo esc_attr( $i ); ?>" required class="rating-radio">
										<label for="rating-<?php echo esc_attr( $i ); ?>" class="rating-star">★</label>
									<?php endfor; ?>
								</div>
							</div>
	
							<?php if ( ! is_user_logged_in() ) : ?>
								<div class="form-fields">
									<div class="form-row">
										<label for="author_name">
											<?php esc_html_e( 'Name', 'digiblocks' ); ?> <span class="required">*</span>
										</label>
										<input type="text" id="author_name" name="author_name" required>
									</div>
									<div class="form-row">
										<label for="author_email">
											<?php esc_html_e( 'Email', 'digiblocks' ); ?> <span class="required">*</span>
										</label>
										<input type="email" id="author_email" name="author_email" required>
									</div>
								</div>
							<?php endif; ?>
	
							<div class="form-row">
								<label for="review_text">
									<?php esc_html_e( 'Your Review', 'digiblocks' ); ?> <span class="required">*</span>
								</label>
								<textarea id="review_text" name="review_text" rows="4" required></textarea>
							</div>
	
							<div class="form-submit">
								<button type="submit" class="submit-button">
									<?php esc_html_e( 'Submit Review', 'digiblocks' ); ?>
								</button>
							</div>
	
							<div id="review-message" class="review-message hidden"></div>
						</form>
					<?php endif; ?>
				</div>
			</div>
		</div>
		<?php
	
		return ob_get_clean();
	}

	/**
	 * Render callback for WooCommerce Products block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_products_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}
	
		// Extract block attributes
		$id                        = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-woo-products-' . uniqid();
		$anchor                    = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes            = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$products_to_show          = isset( $attributes['productsToShow'] ) ? intval( $attributes['productsToShow'] ) : 4;
		$display_featured_image    = isset( $attributes['displayFeaturedImage'] ) ? $attributes['displayFeaturedImage'] : true;
		$display_title             = isset( $attributes['displayTitle'] ) ? $attributes['displayTitle'] : true;
		$display_price             = isset( $attributes['displayPrice'] ) ? $attributes['displayPrice'] : true;
		$display_rating            = isset( $attributes['displayRating'] ) ? $attributes['displayRating'] : true;
		$display_sale_badge        = isset( $attributes['displaySaleBadge'] ) ? $attributes['displaySaleBadge'] : true;
		$display_categories        = isset( $attributes['displayCategories'] ) ? $attributes['displayCategories'] : true;
		$display_short_description = isset( $attributes['displayShortDescription'] ) ? $attributes['displayShortDescription'] : true;
		$display_add_to_cart       = isset( $attributes['displayAddToCart'] ) ? $attributes['displayAddToCart'] : true;
		$short_description_length  = isset( $attributes['shortDescriptionLength'] ) ? intval( $attributes['shortDescriptionLength'] ) : 25;
		$order                     = isset( $attributes['order'] ) ? $attributes['order'] : 'desc';
		$order_by                  = isset( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date';
		$categories                = isset( $attributes['categories'] ) ? $attributes['categories'] : [];
		$on_sale                   = isset( $attributes['onSale'] ) ? $attributes['onSale'] : false;
		$featured                  = isset( $attributes['featured'] ) ? $attributes['featured'] : false;
		$enable_pagination         = isset( $attributes['enablePagination'] ) ? $attributes['enablePagination'] : false;
		$image_size                = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'woocommerce_thumbnail';
		$animation                 = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
	
		// Get the pagination helper
		$pagination = DigiBlocks_Block_Pagination::get_instance();

		// Get current page for this block
		$current_page = $pagination->get_current_page_for_block( 'products' );
	
		// Set up the WP_Query arguments
		$query_args = array(
			'post_type'           => 'product',
			'post_status'         => 'publish',
			'ignore_sticky_posts' => true,
			'posts_per_page'      => $products_to_show,
			'paged'               => $current_page,
			'orderby'             => $order_by,
			'order'               => $order,
		);
	
		// Add categories if specified - use tax_query for proper category filtering
		if ( ! empty( $categories ) && ! in_array( 0, $categories, true ) ) {
			$query_args['tax_query'][] = array(
				'taxonomy' => 'product_cat',
				'field'    => 'term_id',
				'terms'    => $categories,
				'operator' => 'IN',
			);
		}
	
		// Add featured filter if specified
		if ( $featured ) {
			$query_args['tax_query'][] = array(
				'taxonomy' => 'product_visibility',
				'field'    => 'name',
				'terms'    => 'featured',
				'operator' => 'IN',
			);
		}
	
		// Add on sale filter if specified
		if ( $on_sale ) {
			$on_sale_ids = wc_get_product_ids_on_sale();
			
			if ( ! empty( $on_sale_ids ) ) {
				$query_args['post__in'] = $on_sale_ids;
			} else {
				$query_args['post__in'] = array(0); // No products on sale, show no results
			}
		}
	
		// Set up tax_query relation if multiple conditions exist
		if ( isset( $query_args['tax_query'] ) && count( $query_args['tax_query'] ) > 1 ) {
			$query_args['tax_query']['relation'] = 'AND';
		}
	
		// Make sure hide_out_of_stock is respected
		$stock_option = get_option( 'woocommerce_hide_out_of_stock_items', 'no' );
		if ( 'yes' === $stock_option ) {
			$query_args['meta_query'][] = array(
				'key'     => '_stock_status',
				'value'   => 'instock',
				'compare' => '=',
			);
		}
	
		// Create new query
		$products_query = new WP_Query( $query_args );
	
		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
	
		// Build class names
		$class_names = "digiblocks-woo-products $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
	
		// Start output buffer
		ob_start();
	
		if ( $products_query->have_posts() ) {
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-products-container">
					<?php 
					while ( $products_query->have_posts() ) : 
						$products_query->the_post();
						global $product;
						
						// Ensure $product is a WC_Product
						if ( ! is_a( $product, 'WC_Product' ) ) {
							$product = wc_get_product( get_the_ID() );
						}
						
						if ( ! $product ) {
							continue;
						}
					?>
						<div class="digiblocks-product-item" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'product' ) ); ?>>
							<?php if ( $display_sale_badge && $product->is_on_sale() ) : ?>
								<div class="digiblocks-product-sale-badge">
									<?php echo esc_html__( 'Sale!', 'digiblocks' ); ?>
								</div>
							<?php endif; ?>
	
							<?php if ( $display_featured_image ) : ?>
								<div class="digiblocks-product-image">
									<a href="<?php the_permalink(); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'url' ) ); ?>>
										<div <?php echo wp_kses_post( digiblocks_get_schema_property( 'image' ) ); ?>>
											<?php 
											if ( has_post_thumbnail() ) {
												the_post_thumbnail( $image_size );
											} else {
												echo wc_placeholder_img( $image_size ); // phpcs:ignore
											}
											?>
										</div>
									</a>
								</div>
							<?php endif; ?>
	
							<div class="digiblocks-product-content">
								<?php if ( $display_categories ) : 
									$product_categories = wc_get_product_category_list( get_the_ID(), '', '<div class="digiblocks-product-categories">', '</div>' );
									if ( $product_categories ) {
										echo wp_kses_post( $product_categories );
									}
								endif; ?>
	
								<?php if ( $display_title ) : ?>
									<h3 class="digiblocks-product-title">
										<a href="<?php the_permalink(); ?>" <?php echo wp_kses_post( digiblocks_get_schema_property( 'name' ) ); ?>>
											<?php the_title(); ?>
										</a>
									</h3>
								<?php endif; ?>
	
								<?php if ( $display_price ) : ?>
									<div class="digiblocks-product-price" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'price' ) ); ?>>
										<span <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>><?php echo wp_kses_post( $product->get_price_html() ); ?></span>
									</div>
								<?php endif; ?>
	
								<?php if ( $display_rating && wc_review_ratings_enabled() ) : ?>
									<div class="digiblocks-product-rating" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'rating' ) ); ?>>
										<?php
										$rating = $product->get_average_rating();
										$count = $product->get_review_count();
										
										if ( $rating > 0 ) {
											// Use WooCommerce's rating HTML
											echo '<div ' . wp_kses_post( digiblocks_get_schema_property( 'ratingValue' ) ) . ' content="' . esc_attr( $rating ) . '">';
											echo wc_get_rating_html( $rating ); // phpcs:ignore
											echo '</div>';
											// Display count
											if ( $count > 0 ) {
												echo '<span class="count" ' . wp_kses_post( digiblocks_get_schema_property( 'reviewCount' ) ) . '>(' . esc_html( $count ) . ')</span>';
											}
										} else {
											// Display empty stars if no ratings yet
											echo '<div class="star-rating">';
											for ( $i = 0; $i < 5; $i++ ) {
												echo '<span class="star empty"></span>';
											}
											echo '</div>';
											echo '<span class="count">(0)</span>';
										}
										?>
									</div>
								<?php endif; ?>
	
								<?php if ( $display_short_description ) : 
									$short_description = $product->get_short_description();
									if ( ! empty( $short_description ) ) {
										// Trim description to specified word count
										$description = wp_strip_all_tags( $short_description );
										$words = explode( ' ', $description, $short_description_length + 1 );
										if ( count( $words ) > $short_description_length ) {
											array_pop( $words );
											$description = implode( ' ', $words ) . '...';
										}
										?>
										<div class="digiblocks-product-excerpt" <?php echo wp_kses_post( digiblocks_get_schema_property( 'description' ) ); ?>>
											<?php echo esc_html( $description ); ?>
										</div>
									<?php 
									}
								endif; ?>
	
								<?php if ( $display_add_to_cart ) : ?>
									<div class="digiblocks-product-add-to-cart">
										<?php woocommerce_template_loop_add_to_cart(); ?>
									</div>
								<?php endif; ?>
							</div>
						</div>
					<?php endwhile; ?>
				</div>
	
				<?php if ( $enable_pagination && $products_query->max_num_pages > 1 ) :
					echo $pagination->render_pagination( $products_query, $current_page, 'products', $id );
				endif; ?>
			</div>
			<?php
			wp_reset_postdata();
		} else {
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<p class="digiblocks-products-no-results">
					<?php echo esc_html__( 'No products found.', 'digiblocks' ); ?>
				</p>
			</div>
			<?php
		}
	
		return ob_get_clean();
	}

	/**
	 * Render callback for Cart Icon block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_cart_icon_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id                    = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-cart-icon-' . uniqid();
		$anchor                = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes        = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$icon_type             = isset( $attributes['iconType'] ) ? $attributes['iconType'] : 'cart';
		$custom_icon           = isset( $attributes['customIcon'] ) ? $attributes['customIcon'] : '';
		$show_count            = isset( $attributes['showCount'] ) ? $attributes['showCount'] : true;
		$show_text             = isset( $attributes['showText'] ) ? $attributes['showText'] : false;
		$show_total            = isset( $attributes['showTotal'] ) ? $attributes['showTotal'] : false;
		$show_mini_cart        = isset( $attributes['showMiniCart'] ) ? $attributes['showMiniCart'] : false;
		$hide_on_empty         = isset( $attributes['hideOnEmpty'] ) ? $attributes['hideOnEmpty'] : false;
		$cart_text             = isset( $attributes['cartText'] ) ? $attributes['cartText'] : __( 'Cart', 'digiblocks' );
		$empty_cart_text       = isset( $attributes['emptyCartText'] ) ? $attributes['emptyCartText'] : __( 'Empty Cart', 'digiblocks' );
		$animation             = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get cart data
		$cart_count = WC()->cart ? WC()->cart->get_cart_contents_count() : 0;
		$cart_total = WC()->cart ? WC()->cart->get_cart_total() : wc_price( 0 );
		$cart_url = wc_get_cart_url();

		// Build the block class
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
		$empty_class = ( $cart_count === 0 ) ? ' cart-empty' : '';
		$block_class = "digiblocks-cart-icon $id $custom_classes $animation_class $empty_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Hide block if cart is empty and hide_on_empty is true
		$style_attr = '';
		if ( $hide_on_empty && $cart_count === 0 ) {
			$style_attr = ' style="display: none;"';
		}

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?><?php echo wp_kses_post( $style_attr ); ?>>
			<a href="<?php echo esc_url( $cart_url ); ?>" 
				class="digiblocks-cart-icon-link"
				data-cart-text="<?php echo esc_attr( $cart_text ); ?>"
				data-empty-cart-text="<?php echo esc_attr( $empty_cart_text ); ?>"
				data-show-mini-cart="<?php echo esc_attr( $show_mini_cart ? 'true' : 'false' ); ?>"
				aria-label="<?php echo esc_attr( sprintf( __( 'View cart (%d items)', 'digiblocks' ), $cart_count ) ); ?>">
				
				<div class="digiblocks-cart-icon-icon">
					<?php
					switch ( $icon_type ) {
						case 'bag':
							echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>';
							break;
						case 'basket':
							echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-13.4 19.1-7.3 30.8L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>';
							break;
						case 'custom':
							echo ! empty( $custom_icon ) ? wp_kses( $custom_icon, digiblocks_allow_svg_in_kses() ) : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
							break;
						default: // cart
							echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
							break;
					}
					?>
					
					<?php if ( $show_count ) : ?>
						<span class="digiblocks-cart-count" style="<?php echo $cart_count === 0 && $hide_on_empty ? 'display: none;' : ''; ?>">
							<?php echo esc_html( $cart_count ); ?>
						</span>
					<?php endif; ?>
				</div>
				
				<?php if ( $show_text ) : ?>
					<span class="digiblocks-cart-text">
						<?php echo esc_html( $cart_count > 0 ? $cart_text : $empty_cart_text ); ?>
					</span>
				<?php endif; ?>
				
				<?php if ( $show_total ) : ?>
					<span class="digiblocks-cart-total" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
						<?php echo wp_kses_post( $cart_total ); ?>
					</span>
				<?php endif; ?>
			</a>

			<?php if ( $show_mini_cart ) : ?>
				<div class="digiblocks-mini-cart" style="opacity: 0; visibility: hidden; transform: translateY(-10px);">
					<div class="digiblocks-mini-cart-header">
						<h3 class="digiblocks-mini-cart-title">
							<?php esc_html_e( 'Shopping Cart', 'digiblocks' ); ?>
						</h3>
						<button class="digiblocks-mini-cart-close" aria-label="<?php esc_attr_e( 'Close cart', 'digiblocks' ); ?>">
							×
						</button>
					</div>
					
					<div class="digiblocks-mini-cart-content">
						<?php if ( $cart_count > 0 ) : ?>
							<div class="digiblocks-mini-cart-items">
								<?php
								foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
									$product = $cart_item['data'];
									$product_id = $cart_item['product_id'];
									$quantity = $cart_item['quantity'];
									
									if ( ! $product || ! $product->exists() ) {
										continue;
									}
									
									$product_name = $product->get_name();
									$product_price = WC()->cart->get_product_price( $product );
									$product_image = $product->get_image( array( 50, 50 ) );
									$product_permalink = $product->is_visible() ? $product->get_permalink( $cart_item ) : '';
									?>
									<div class="digiblocks-mini-cart-item" data-cart-item-key="<?php echo esc_attr( $cart_item_key ); ?>">
										<?php if ( $product_image ) : ?>
											<div class="digiblocks-mini-cart-item-image">
												<?php if ( $product_permalink ) : ?>
													<a href="<?php echo esc_url( $product_permalink ); ?>">
														<?php echo wp_kses_post( $product_image ); ?>
													</a>
												<?php else : ?>
													<?php echo wp_kses_post( $product_image ); ?>
												<?php endif; ?>
											</div>
										<?php endif; ?>
										
										<div class="digiblocks-mini-cart-item-details">
											<h4 class="digiblocks-mini-cart-item-name">
												<?php if ( $product_permalink ) : ?>
													<a href="<?php echo esc_url( $product_permalink ); ?>">
														<?php echo esc_html( $product_name ); ?>
													</a>
												<?php else : ?>
													<?php echo esc_html( $product_name ); ?>
												<?php endif; ?>
											</h4>
											<p class="digiblocks-mini-cart-item-price">
												<?php echo wp_kses_post( $product_price ); ?>
											</p>
										</div>
										
										<input 
											type="number" 
											class="digiblocks-mini-cart-item-quantity" 
											value="<?php echo esc_attr( $quantity ); ?>" 
											min="0"
											data-cart-item-key="<?php echo esc_attr( $cart_item_key ); ?>"
											aria-label="<?php esc_attr_e( 'Quantity', 'digiblocks' ); ?>"
										/>
										
										<button 
											class="digiblocks-mini-cart-item-remove" 
											data-cart-item-key="<?php echo esc_attr( $cart_item_key ); ?>"
											aria-label="<?php esc_attr_e( 'Remove this item', 'digiblocks' ); ?>"
										>
											×
										</button>
									</div>
									<?php
								}
								?>
							</div>
							
							<div class="digiblocks-mini-cart-total">
								<span><?php esc_html_e( 'Total:', 'digiblocks' ); ?></span>
								<span class="total-amount"><?php echo wp_kses_post( WC()->cart->get_cart_total() ); ?></span>
							</div>
							
							<div class="digiblocks-mini-cart-buttons">
								<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="digiblocks-mini-cart-button secondary">
									<?php esc_html_e( 'View Cart', 'digiblocks' ); ?>
								</a>
								<a href="<?php echo esc_url( wc_get_checkout_url() ); ?>" class="digiblocks-mini-cart-button primary">
									<?php esc_html_e( 'Checkout', 'digiblocks' ); ?>
								</a>
							</div>
						<?php else : ?>
							<div class="digiblocks-mini-cart-empty">
								<p><?php esc_html_e( 'Your cart is currently empty.', 'digiblocks' ); ?></p>
							</div>
						<?php endif; ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Render callback for woo-price block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 */
	public function render_woo_price_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<div class="digiblocks-woo-price-error">' . __( 'WooCommerce is required for this block.', 'digiblocks' ) . '</div>';
		}
	
		// Extract block attributes
		$id                  = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-woo-price-' . uniqid();
		$anchor              = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes      = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$show_regular_price  = isset( $attributes['showRegularPrice'] ) ? $attributes['showRegularPrice'] : true;
		$show_sale_price     = isset( $attributes['showSalePrice'] ) ? $attributes['showSalePrice'] : true;
		$show_currency       = isset( $attributes['showCurrency'] ) ? $attributes['showCurrency'] : true;
		$animation           = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
	
		// Get the current responsive state
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
	
		// Build the block class
		$block_class = "digiblocks-woo-price $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
	
		// Get current product with proper type checking
		global $product;
		$wc_product = null;
		
		// Ensure we have a valid WC_Product object
		if ( $product && is_a( $product, 'WC_Product' ) ) {
			$wc_product = $product;
		} else {
			// Try to get product from block context
			if ( isset( $block->context['postId'] ) ) {
				$product_id = absint( $block->context['postId'] );
				if ( $product_id > 0 ) {
					$temp_product = wc_get_product( $product_id );
					if ( $temp_product && is_a( $temp_product, 'WC_Product' ) ) {
						$wc_product = $temp_product;
					}
				}
			}
			
			// If still no product and we're on a product page
			if ( ! $wc_product && is_product() ) {
				global $post;
				if ( $post && isset( $post->ID ) ) {
					$product_id = absint( $post->ID );
					if ( $product_id > 0 ) {
						$temp_product = wc_get_product( $product_id );
						if ( $temp_product && is_a( $temp_product, 'WC_Product' ) ) {
							$wc_product = $temp_product;
						}
					}
				}
			}
			
			// Last resort: try to get product from query
			if ( ! $wc_product ) {
				$post_id = get_the_ID();
				if ( $post_id && get_post_type( $post_id ) === 'product' ) {
					$temp_product = wc_get_product( $post_id );
					if ( $temp_product && is_a( $temp_product, 'WC_Product' ) ) {
						$wc_product = $temp_product;
					}
				}
			}
		}
	
		// If still no valid product, show placeholder for editor or message
		if ( ! $wc_product || ! is_a( $wc_product, 'WC_Product' ) ) {
			// Check if we're in the editor context
			if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
				// Return editor preview
				ob_start();
				?>
				<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
					<div class="digiblocks-price-wrapper">
						<?php if ( $show_sale_price ) : ?>
							<span class="digiblocks-price digiblocks-sale-price">
								<?php if ( $show_currency ) : ?>
									<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
								<?php endif; ?>
								19.99
							</span>
						<?php endif; ?>
						<?php if ( $show_regular_price && $show_sale_price ) : ?>
							<span class="digiblocks-price digiblocks-regular-price">
								<?php if ( $show_currency ) : ?>
									<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
								<?php endif; ?>
								29.99
							</span>
						<?php endif; ?>
						<?php if ( ! $show_sale_price ) : ?>
							<span class="digiblocks-price">
								<?php if ( $show_currency ) : ?>
									<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
								<?php endif; ?>
								24.99
							</span>
						<?php endif; ?>
					</div>
					<div style="font-size: 12px; color: #666; margin-top: 8px; font-style: italic;">
						<?php esc_html_e( 'Preview - Actual product price will be displayed on frontend', 'digiblocks' ); ?>
					</div>
				</div>
				<?php
				return ob_get_clean();
			}
			
			return '<div class="' . esc_attr( $block_class ) . '"' . wp_kses_post( $id_attr ) . '>' . 
				__( 'Product price will be displayed here when viewing a product.', 'digiblocks' ) . 
				'</div>';
		}
	
		// Start output buffer
		ob_start();
	
		?>
		<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'product' ) ); ?>>
			<div class="digiblocks-price-wrapper">
				<?php
				// Handle variable products with price ranges
				if ( $wc_product->is_type( 'variable' ) ) {
					$prices = $wc_product->get_variation_prices( true );
					
					if ( ! empty( $prices['price'] ) ) {
						$min_price = current( $prices['price'] );
						$max_price = end( $prices['price'] );
						
						// Check if there are sale prices
						$min_sale_price = current( $prices['sale_price'] );
						$max_sale_price = end( $prices['sale_price'] );
						$min_regular_price = current( $prices['regular_price'] );
						$max_regular_price = end( $prices['regular_price'] );
						
						$has_sale = $min_sale_price < $min_regular_price || $max_sale_price < $max_regular_price;
						
						if ( $min_price !== $max_price ) {
							// Price range
							if ( $has_sale && $show_sale_price && $show_regular_price ) {
								// Show sale price range and regular price range
								?>
								<span class="digiblocks-price digiblocks-sale-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
									<?php if ( $show_currency ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
									<?php endif; ?>
									<?php echo esc_html( wc_format_decimal( $min_price, 2 ) ); ?>
									<?php if ( $min_price !== $max_price ) : ?>
										 - 
										<?php if ( $show_currency ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
										<?php endif; ?>
										<?php echo esc_html( wc_format_decimal( $max_price, 2 ) ); ?>
									<?php endif; ?>
								</span>
								<span class="digiblocks-price digiblocks-regular-price">
									<?php if ( $show_currency ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
									<?php endif; ?>
									<?php echo esc_html( wc_format_decimal( $min_regular_price, 2 ) ); ?>
									<?php if ( $min_regular_price !== $max_regular_price ) : ?>
										 - 
										<?php if ( $show_currency ) : ?>
											<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
										<?php endif; ?>
										<?php echo esc_html( wc_format_decimal( $max_regular_price, 2 ) ); ?>
									<?php endif; ?>
								</span>
								<?php
							} else {
								// Show current price range only
								?>
								<span class="digiblocks-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
									<?php if ( $show_currency ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
									<?php endif; ?>
									<?php echo esc_html( wc_format_decimal( $min_price, 2 ) ); ?>
									 - 
									<?php if ( $show_currency ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
									<?php endif; ?>
									<?php echo esc_html( wc_format_decimal( $max_price, 2 ) ); ?>
								</span>
								<?php
							}
						} else {
							// Single price (all variations have same price)
							$current_price = $min_price;
							$is_on_sale = $min_sale_price < $min_regular_price;
							
							if ( $is_on_sale && $show_sale_price && $show_regular_price ) {
								?>
								<span class="digiblocks-price digiblocks-sale-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
									<?php if ( $show_currency ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
									<?php endif; ?>
									<?php echo esc_html( wc_format_decimal( $current_price, 2 ) ); ?>
								</span>
								<span class="digiblocks-price digiblocks-regular-price">
									<?php if ( $show_currency ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
									<?php endif; ?>
									<?php echo esc_html( wc_format_decimal( $min_regular_price, 2 ) ); ?>
								</span>
								<?php
							} else {
								?>
								<span class="digiblocks-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
									<?php if ( $show_currency ) : ?>
										<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
									<?php endif; ?>
									<?php echo esc_html( wc_format_decimal( $current_price, 2 ) ); ?>
								</span>
								<?php
							}
						}
					}
				} else {
					// Handle simple products and other types
					$is_on_sale = false;
					$sale_price = 0;
					$regular_price = 0;
					$current_price = 0;
					
					try {
						$is_on_sale = method_exists( $wc_product, 'is_on_sale' ) ? $wc_product->is_on_sale() : false;
						$sale_price = method_exists( $wc_product, 'get_sale_price' ) ? $wc_product->get_sale_price() : 0;
						$regular_price = method_exists( $wc_product, 'get_regular_price' ) ? $wc_product->get_regular_price() : 0;
						$current_price = method_exists( $wc_product, 'get_price' ) ? $wc_product->get_price() : 0;
					} catch ( Exception $e ) {
						error_log( 'DigiBlocks WooCommerce Price Block Error getting prices: ' . $e->getMessage() );
					}
					
					if ( $is_on_sale && $show_sale_price && $show_regular_price && $sale_price && $regular_price ) {
						?>
						<span class="digiblocks-price digiblocks-sale-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
							<?php if ( $show_currency ) : ?>
								<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
							<?php endif; ?>
							<?php echo esc_html( wc_format_decimal( $sale_price, 2 ) ); ?>
						</span>
						<span class="digiblocks-price digiblocks-regular-price">
							<?php if ( $show_currency ) : ?>
								<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
							<?php endif; ?>
							<?php echo esc_html( wc_format_decimal( $regular_price, 2 ) ); ?>
						</span>
						<?php
					} elseif ( $is_on_sale && $show_sale_price && ! $show_regular_price && $sale_price ) {
						?>
						<span class="digiblocks-price digiblocks-sale-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
							<?php if ( $show_currency ) : ?>
								<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
							<?php endif; ?>
							<?php echo esc_html( wc_format_decimal( $sale_price, 2 ) ); ?>
						</span>
						<?php
					} else {
						?>
						<span class="digiblocks-price" <?php echo wp_kses_post( digiblocks_get_schema_property( 'price' ) ); ?>>
							<?php if ( $show_currency ) : ?>
								<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
							<?php endif; ?>
							<?php 
							if ( $current_price ) {
								echo esc_html( wc_format_decimal( $current_price, 2 ) );
							} else {
								// Fallback to WooCommerce's price HTML without our custom formatting
								echo wp_kses_post( $wc_product->get_price_html() );
							}
							?>
						</span>
						<?php
					}
				}
				?>
			</div>
		</div>
		<?php
	
		// Get the output buffer
		$output = ob_get_clean();
	
		return $output;
	}

	/**
	 * Render callback for product gallery block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_product_gallery_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Check if we're on a single product page
		if ( ! is_product() ) {
			return '<div class="digiblocks-product-gallery-notice"><p>' . __( 'This block displays product images on single product pages only.', 'digiblocks' ) . '</p></div>';
		}

		global $product;

		// Ensure we have a valid product
		if ( ! is_a( $product, 'WC_Product' ) ) {
			$product = wc_get_product( get_the_ID() );
		}

		if ( ! $product ) {
			return '<p>' . __( 'No product found.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id                    = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-gallery-' . uniqid();
		$anchor                = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes        = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$thumbnail_position    = isset( $attributes['thumbnailPosition'] ) ? $attributes['thumbnailPosition'] : 'bottom';
		$enable_lightbox       = isset( $attributes['enableLightbox'] ) ? $attributes['enableLightbox'] : true;
		$image_size            = isset( $attributes['imageSize'] ) ? $attributes['imageSize'] : 'woocommerce_single';
		$thumbnail_size        = isset( $attributes['thumbnailSize'] ) ? $attributes['thumbnailSize'] : 'woocommerce_gallery_thumbnail';
		$animation             = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get product images
		$main_image_id = $product->get_image_id();
		$gallery_image_ids = $product->get_gallery_image_ids();
		
		// Combine main image with gallery images
		$all_image_ids = array();
		if ( $main_image_id ) {
			$all_image_ids[] = $main_image_id;
		}
		$all_image_ids = array_merge( $all_image_ids, $gallery_image_ids );

		// If no images, show placeholder
		if ( empty( $all_image_ids ) ) {
			return '<div class="digiblocks-product-gallery-no-images"><p>' . __( 'No product images available.', 'digiblocks' ) . '</p></div>';
		}

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-product-gallery-block $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
			<div class="digiblocks-product-gallery thumbnail-<?php echo esc_attr( $thumbnail_position ); ?>">
				
				<!-- Main Image -->
				<div class="digiblocks-main-image">
					<?php
					$main_image = wp_get_attachment_image( 
						$all_image_ids[0], 
						$image_size, 
						false, 
						array(
							'alt' => get_post_meta( $all_image_ids[0], '_wp_attachment_image_alt', true ) ?: $product->get_name(),
							'data-full-src' => wp_get_attachment_image_url( $all_image_ids[0], 'full' )
						)
					);
					echo wp_kses_post( $main_image );
					?>
					
					<?php if ( $enable_lightbox ) : ?>
						<div class="digiblocks-lightbox-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"/></svg>
						</div>
					<?php endif; ?>
				</div>

				<!-- Thumbnails -->
				<?php if ( count( $all_image_ids ) > 1 ) : ?>
					<div class="digiblocks-thumbnails">
						<?php foreach ( $all_image_ids as $index => $image_id ) : ?>
							<div class="digiblocks-thumbnail <?php echo $index === 0 ? 'active' : ''; ?>">
								<?php
								echo wp_get_attachment_image( 
									$image_id, 
									$thumbnail_size, 
									false, 
									array(
										'alt' => get_post_meta( $image_id, '_wp_attachment_image_alt', true ) ?: $product->get_name() . ' ' . ( $index + 1 ),
										'data-full-src' => wp_get_attachment_image_url( $image_id, 'full' )
									)
								);
								?>
							</div>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				
			</div>
		</div>
		<?php

		return ob_get_clean();
	}

	/**
	 * Render callback for Product Meta block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_product_meta_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Check if we're on a single product page
		if ( ! is_product() ) {
			return '<div class="digiblocks-product-gallery-notice"><p>' . __( 'This block displays product images on single product pages only.', 'digiblocks' ) . '</p></div>';
		}

		global $product;

		// Ensure we have a valid product
		if ( ! is_a( $product, 'WC_Product' ) ) {
			$product = wc_get_product( get_the_ID() );
		}

		if ( ! $product ) {
			return '<p>' . __( 'No product found.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id                = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-meta-' . uniqid();
		$anchor            = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes    = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$show_sku          = isset( $attributes['showSKU'] ) ? $attributes['showSKU'] : true;
		$show_categories   = isset( $attributes['showCategories'] ) ? $attributes['showCategories'] : true;
		$show_tags         = isset( $attributes['showTags'] ) ? $attributes['showTags'] : true;
		$sku_label         = isset( $attributes['skuLabel'] ) ? $attributes['skuLabel'] : __( 'SKU:', 'digiblocks' );
		$categories_label  = isset( $attributes['categoriesLabel'] ) ? $attributes['categoriesLabel'] : __( 'Categories:', 'digiblocks' );
		$tags_label        = isset( $attributes['tagsLabel'] ) ? $attributes['tagsLabel'] : __( 'Tags:', 'digiblocks' );
		$animation         = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get product data
		$sku = $product->get_sku();
		$product_categories = get_the_terms( $product->get_id(), 'product_cat' );
		$product_tags = get_the_terms( $product->get_id(), 'product_tag' );

		// Build class names
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
		$class_names = "digiblocks-product-meta $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Start output buffer
		ob_start();

		// Check if we have any data to show
		$has_data = false;
		if ( ( $show_sku && $sku ) || ( $show_categories && $product_categories ) || ( $show_tags && $product_tags ) ) {
			$has_data = true;
		}

		if ( ! $has_data ) {
			return '';
		}

		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'product' ) ); ?>>
			<div class="digiblocks-product-meta-container">
				<?php if ( $show_sku && $sku ) : ?>
					<div class="digiblocks-meta-item digiblocks-sku-item">
						<span class="digiblocks-meta-label"><?php echo esc_html( $sku_label ); ?></span>
						<div class="digiblocks-meta-value">
							<span class="digiblocks-sku-value" <?php echo wp_kses_post( digiblocks_get_schema_property( 'sku' ) ); ?>><?php echo esc_html( $sku ); ?></span>
						</div>
					</div>
				<?php endif; ?>
				
				<?php if ( $show_categories && $product_categories && ! is_wp_error( $product_categories ) ) : ?>
					<div class="digiblocks-meta-item digiblocks-categories-item">
						<span class="digiblocks-meta-label"><?php echo esc_html( $categories_label ); ?></span>
						<div class="digiblocks-meta-value">
							<?php foreach ( $product_categories as $category ) : ?>
								<a href="<?php echo esc_url( get_term_link( $category ) ); ?>" class="digiblocks-category-link">
									<?php echo esc_html( $category->name ); ?>
								</a>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endif; ?>
				
				<?php if ( $show_tags && $product_tags && ! is_wp_error( $product_tags ) ) : ?>
					<div class="digiblocks-meta-item digiblocks-tags-item">
						<span class="digiblocks-meta-label"><?php echo esc_html( $tags_label ); ?></span>
						<div class="digiblocks-meta-value">
							<?php foreach ( $product_tags as $tag ) : ?>
								<a href="<?php echo esc_url( get_term_link( $tag ) ); ?>" class="digiblocks-tag-link">
									<?php echo esc_html( $tag->name ); ?>
								</a>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
		<?php

		return ob_get_clean();
	}

	/**
	 * Render callback for Product Content block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_product_content_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id             = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-content-' . uniqid();
		$anchor         = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$content_type   = isset( $attributes['contentType'] ) ? $attributes['contentType'] : 'description';
		$animation      = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-product-content-wrapper $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Check if we're on a single product page
		if ( ! is_product() ) {
			// Not on a product page, show placeholder message
			ob_start();
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-product-content">
					<p class="digiblocks-placeholder-notice">
						<?php 
						if ( $content_type === 'short_description' ) {
							esc_html_e( 'Product short description will be displayed here on single product pages.', 'digiblocks' ); 
						} else {
							esc_html_e( 'Product description will be displayed here on single product pages.', 'digiblocks' ); 
						}
						?>
					</p>
				</div>
			</div>
			<?php
			return ob_get_clean();
		}

		// Get the current product
		global $product;
		if ( ! is_a( $product, 'WC_Product' ) ) {
			$product = wc_get_product( get_the_ID() );
		}

		if ( ! $product ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '><p>' . esc_html__( 'Product not found.', 'digiblocks' ) . '</p></div>';
		}

		// Get the content based on content type
		$product_content = '';
		if ( $content_type === 'short_description' ) {
			$product_content = $product->get_short_description();
		} else {
			$product_content = $product->get_description();
		}

		// Start output buffer
		ob_start();

		if ( ! empty( $product_content ) ) {
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-product-content" <?php echo wp_kses_post( digiblocks_get_schema_property( 'description' ) ); ?>>
					<?php 
					// Apply content filters to allow shortcodes, etc.
					echo wp_kses_post( apply_filters( 'the_content', $product_content ) );
					?>
				</div>
			</div>
			<?php
		} else {
			// No content available
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-product-content">
					<p class="digiblocks-no-content">
						<?php 
						if ( $content_type === 'short_description' ) {
							esc_html_e( 'No short description available for this product.', 'digiblocks' ); 
						} else {
							esc_html_e( 'No description available for this product.', 'digiblocks' ); 
						}
						?>
					</p>
				</div>
			</div>
			<?php
		}

		return ob_get_clean();
	}

	/**
	 * Render callback for Product Add To Cart block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_product_add_to_cart_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}
	
		// Extract block attributes
		$id                = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-add-to-cart-' . uniqid();
		$anchor            = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes    = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$button_text       = isset( $attributes['buttonText'] ) ? $attributes['buttonText'] : __( 'Add to cart', 'digiblocks' );
		$show_quantity     = isset( $attributes['showQuantityInput'] ) ? $attributes['showQuantityInput'] : true;
		$show_currency     = isset( $attributes['showCurrency'] ) ? $attributes['showCurrency'] : true;
		$animation         = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';
	
		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';
	
		// Build class names
		$class_names = "digiblocks-product-add-to-cart $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';
	
		// If not on a single product page, show placeholder message
		if ( ! is_product() ) {
			ob_start();
			?>
			<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-variation-price" style="display: none;">
					<span class="digiblocks-selected-price">
						<?php if ( $show_currency ) : ?>
							<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
						<?php endif; ?>
						<span class="price-amount">24.99</span>
					</span>
				</div>
				<div class="digiblocks-add-to-cart-container">
					<?php if ( $show_quantity ) : ?>
						<input
							type="number"
							class="digiblocks-quantity-input"
							value="1"
							min="1"
							readonly
						/>
					<?php endif; ?>
					<button class="digiblocks-add-to-cart-button" disabled>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
						<span class="digiblocks-button-text"><?php echo esc_html( $button_text ); ?></span>
					</button>
				</div>
				<p class="digiblocks-placeholder-notice" style="font-size: 12px; color: #666; margin-top: 10px; font-style: italic;">
					<?php esc_html_e( 'This add to cart button will be functional on single product pages.', 'digiblocks' ); ?>
				</p>
			</div>
			<?php
			return ob_get_clean();
		}
	
		// Get the current product
		global $product;
		if ( ! is_a( $product, 'WC_Product' ) ) {
			$product = wc_get_product( get_the_ID() );
		}
	
		if ( ! $product ) {
			return '<p>' . __( 'Product not found.', 'digiblocks' ) . '</p>';
		}
	
		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
			<form class="digiblocks-add-to-cart-form cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>
				<?php do_action( 'woocommerce_before_add_to_cart_form' ); ?>
	
				<?php
				// Handle variable products - add variation fields
				if ( $product->is_type( 'variable' ) ) {
					// Get available variations
					$available_variations = $product->get_available_variations();
					$attributes = $product->get_variation_attributes();
					$selected_attributes = $product->get_default_attributes();
	
					if ( ! empty( $available_variations ) ) {
						?>
						<div class="digiblocks-variations">
							<?php foreach ( $attributes as $attribute_name => $options ) : ?>
								<div class="digiblocks-variation-field">
									<?php
									$attribute_label = wc_attribute_label( $attribute_name );
									$selected = isset( $selected_attributes[ sanitize_title( $attribute_name ) ] ) ? $selected_attributes[ sanitize_title( $attribute_name ) ] : '';
									?>
									<label for="<?php echo esc_attr( sanitize_title( $attribute_name ) ); ?>">
										<?php echo esc_html( $attribute_label ); ?>
									</label>
									<select 
										id="<?php echo esc_attr( sanitize_title( $attribute_name ) ); ?>" 
										name="attribute_<?php echo esc_attr( sanitize_title( $attribute_name ) ); ?>" 
										data-attribute_name="attribute_<?php echo esc_attr( sanitize_title( $attribute_name ) ); ?>"
										required
									>
										<option value=""><?php echo esc_html( sprintf( __( 'Choose %s', 'digiblocks' ), $attribute_label ) ); ?></option>
										<?php
										if ( ! empty( $options ) ) {
											if ( isset( $options[0] ) ) {
												// List of options
												foreach ( $options as $option ) {
													echo '<option value="' . esc_attr( $option ) . '"' . selected( $selected, $option, false ) . '>' . esc_html( ucfirst( $option ) ) . '</option>';
												}
											} else {
												// Associative array
												foreach ( $options as $key => $option ) {
													echo '<option value="' . esc_attr( $key ) . '"' . selected( $selected, $key, false ) . '>' . esc_html( $option ) . '</option>';
												}
											}
										}
										?>
									</select>
								</div>
							<?php endforeach; ?>
							<input type="hidden" name="variation_id" class="variation_id" value="0" />
							<script type="application/json" class="digiblocks-variations-data"><?php echo wp_json_encode( $available_variations ); ?></script>
						</div>
						<?php
					}
				}
				?>
				
				<!-- Selected Variation Price Display -->
				<div class="digiblocks-variation-price" style="display: none; margin: 15px 0;">
					<span class="digiblocks-selected-price">
						<?php if ( $show_currency ) : ?>
							<span class="digiblocks-currency"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?></span>
						<?php endif; ?>
						<span class="price-amount"></span>
					</span>
				</div>
				
				<div class="digiblocks-add-to-cart-container">
					<?php if ( $show_quantity && ! $product->is_sold_individually() ) : ?>
						<div class="digiblocks-quantity-wrapper">
							<?php
							woocommerce_quantity_input(
								array(
									'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
									'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
									'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), // phpcs:ignore
									'classes'     => array( 'digiblocks-quantity-input' ),
								),
								$product
							);
							?>
						</div>
					<?php endif; ?>
					
					<button 
						type="submit" 
						name="add-to-cart" 
						value="<?php echo esc_attr( $product->get_id() ); ?>" 
						class="digiblocks-add-to-cart-button single_add_to_cart_button button alt wp-element-button"
						<?php echo $product->is_purchasable() && $product->is_in_stock() ? '' : 'disabled'; ?>
						data-product-id="<?php echo esc_attr( $product->get_id() ); ?>"
						data-product-type="<?php echo esc_attr( $product->get_type() ); ?>"
						data-show-currency="<?php echo esc_attr( $show_currency ? '1' : '0' ); ?>"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
						<span class="digiblocks-button-text"><?php echo esc_html( $button_text ); ?></span>
					</button>
				</div>
				
				<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
				<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>
			</form>
		</div>
		<?php
		
		return ob_get_clean();
	}

	/**
	 * Render callback for product reviews block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_product_reviews_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id             = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-reviews-' . uniqid();
		$anchor         = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$show_stars     = isset( $attributes['showStars'] ) ? $attributes['showStars'] : true;
		$show_count     = isset( $attributes['showCount'] ) ? $attributes['showCount'] : true;
		$show_text      = isset( $attributes['showText'] ) ? $attributes['showText'] : true;
		$animation      = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get animation class if any
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build class names
		$class_names = "digiblocks-product-reviews-block $id $custom_classes $animation_class";
		
		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Check if we're on a single product page
		if ( ! is_product() ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-product-reviews-notice">' . 
				__( 'Product reviews will be displayed on single product pages.', 'digiblocks' ) . 
				'</p></div>';
		}

		// Get the current product
		global $product;
		
		if ( ! is_a( $product, 'WC_Product' ) ) {
			$product = wc_get_product( get_the_ID() );
		}

		if ( ! $product ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-product-reviews-notice">' . 
				__( 'Product not found.', 'digiblocks' ) . 
				'</p></div>';
		}

		// Check if reviews are enabled
		if ( ! wc_review_ratings_enabled() ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<p class="digiblocks-product-reviews-notice">' . 
				__( 'Product reviews are disabled.', 'digiblocks' ) . 
				'</p></div>';
		}

		// Get product rating data
		$rating_count = $product->get_rating_count();
		$average_rating = $product->get_average_rating();
		$review_count = $product->get_review_count();

		// If no reviews yet, show message
		if ( $rating_count === 0 ) {
			return '<div class="' . esc_attr( $class_names ) . '"' . wp_kses_post( $id_attr ) . '>
				<div class="digiblocks-product-reviews">
					<span class="digiblocks-product-reviews-text">' . 
					__( 'No reviews yet', 'digiblocks' ) . 
					'</span>
				</div></div>';
		}

		// Start output buffer
		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_names ); ?>"<?php echo wp_kses_post( $id_attr ); ?> <?php echo wp_kses_post( digiblocks_get_schema_markup( 'review' ) ); ?>>
			<div class="digiblocks-product-reviews">
				<?php if ( $show_stars && $average_rating > 0 ) : ?>
					<div class="digiblocks-product-reviews-stars" <?php echo wp_kses_post( digiblocks_get_schema_markup( 'rating' ) ); ?>>
						<div class="star-rating" title="<?php echo sprintf( __( 'Rated %s out of 5', 'digiblocks' ), $average_rating ); ?>">
							<span style="width:<?php echo ( ( $average_rating / 5 ) * 100 ); ?>%" <?php echo wp_kses_post( digiblocks_get_schema_property( 'ratingValue' ) ); ?> content="<?php echo esc_attr( $average_rating ); ?>">
								<strong class="rating"><?php echo esc_html( $average_rating ); ?></strong> <?php echo esc_html__( 'out of 5', 'digiblocks' ); ?>
							</span>
						</div>
					</div>
				<?php endif; ?>
				
				<?php if ( $show_count && $review_count > 0 ) : ?>
					<a href="#reviews" class="digiblocks-product-reviews-count" <?php echo wp_kses_post( digiblocks_get_schema_property( 'reviewCount' ) ); ?> content="<?php echo esc_attr( $review_count ); ?>">
						(<?php echo esc_html( $review_count ); ?>)
					</a>
				<?php endif; ?>
				
				<?php if ( $show_text ) : ?>
					<a href="#reviews" class="digiblocks-product-reviews-text">
						<?php 
						if ( $review_count === 1 ) {
							echo esc_html__( 'customer review', 'digiblocks' );
						} else {
							echo esc_html__( 'customer reviews', 'digiblocks' );
						}
						?>
					</a>
				<?php endif; ?>
			</div>
		</div>
		<?php

		return ob_get_clean();
	}

	/**
	 * Render callback for Product Reviews Form block
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	public function render_woo_product_reviews_form_block( $attributes, $content, $block ) {
		// Check if WooCommerce is active
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '<p>' . __( 'WooCommerce is not active. Please install and activate WooCommerce to use this block.', 'digiblocks' ) . '</p>';
		}

		// Extract block attributes
		$id             = isset( $attributes['id'] ) ? $attributes['id'] : 'digi-product-reviews-form-' . uniqid();
		$anchor         = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
		$custom_classes = isset( $attributes['customClasses'] ) ? $attributes['customClasses'] : '';
		$animation      = isset( $attributes['animation'] ) ? $attributes['animation'] : 'none';

		// Get the current responsive state
		$animation_class = ( 'none' !== $animation ) ? ' animate-' . $animation : '';

		// Build the block class
		$block_class = "digiblocks-product-reviews-form-wrapper $id $custom_classes $animation_class";

		// Format the ID attribute
		$id_attr = $anchor ? ' id="' . esc_attr( $anchor ) . '"' : '';

		// Start output buffer
		ob_start();

		// Check if we're on a single product page
		if ( is_product() ) {
			global $product;
			
			// Make sure we have a valid product
			if ( ! $product || ! is_a( $product, 'WC_Product' ) ) {
				?>
				<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
					<p class="digiblocks-product-reviews-form-error">
						<?php esc_html_e( 'Product not found.', 'digiblocks' ); ?>
					</p>
				</div>
				<?php
				return ob_get_clean();
			}

			// Check if reviews are enabled
			if ( ! wc_reviews_enabled() ) {
				?>
				<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
					<p class="digiblocks-product-reviews-form-disabled">
						<?php esc_html_e( 'Reviews are not enabled.', 'digiblocks' ); ?>
					</p>
				</div>
				<?php
				return ob_get_clean();
			}

			// Get product reviews
			$product_id = $product->get_id();
			$reviews = get_comments( array(
				'post_id'    => $product_id,
				'status'     => 'approve',
				'type'       => 'review',
				'meta_query' => array(
					array(
						'key'     => 'verified',
						'compare' => 'EXISTS',
					),
				),
			) );

			// If no reviews found, try getting all approved comments for this product
			if ( empty( $reviews ) ) {
				$reviews = get_comments( array(
					'post_id' => $product_id,
					'status'  => 'approve',
					'type'    => '',
				) );
			}

			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div id="reviews" class="woocommerce-Reviews">
					<div id="comments">
						<h2 class="woocommerce-Reviews-title">
							<?php
							$count = count( $reviews );
							if ( $count && wc_review_ratings_enabled() ) {
								/* translators: 1: reviews count 2: product name */
								$reviews_title = sprintf( esc_html( _n( '%1$s review for %2$s', '%1$s reviews for %2$s', $count, 'woocommerce' ) ), esc_html( $count ), '<span>' . get_the_title() . '</span>' );
								echo apply_filters( 'woocommerce_reviews_title', $reviews_title, $count, $product ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							} else {
								esc_html_e( 'Reviews', 'woocommerce' );
							}
							?>
						</h2>

						<?php if ( ! empty( $reviews ) ) : ?>
							<ol class="commentlist">
								<?php
								foreach ( $reviews as $review ) {
									$rating = intval( get_comment_meta( $review->comment_ID, 'rating', true ) );
									?>
									<li class="comment" id="comment-<?php echo esc_attr( $review->comment_ID ); ?>">
										<div class="comment-text">
											<div class="comment-author vcard">
												<?php echo get_avatar( $review, 60 ); ?>
												<cite class="fn"><?php echo esc_html( $review->comment_author ); ?></cite>
												<?php if ( wc_review_ratings_enabled() && $rating ) : ?>
													<div class="star-rating">
														<span style="width:<?php echo ( $rating / 5 ) * 100; ?>%">
															<strong class="rating"><?php echo esc_html( $rating ); ?></strong> <?php esc_html_e( 'out of 5', 'woocommerce' ); ?>
														</span>
													</div>
												<?php endif; ?>
											</div>
											<time class="woocommerce-review__published-date" datetime="<?php echo esc_attr( get_comment_date( 'c', $review ) ); ?>">
												<?php echo esc_html( get_comment_date( '', $review ) ); ?>
											</time>
											<div class="description">
												<p><?php echo wp_kses_post( $review->comment_content ); ?></p>
											</div>
										</div>
									</li>
									<?php
								}
								?>
							</ol>
						<?php else : ?>
							<p class="woocommerce-noreviews"><?php esc_html_e( 'There are no reviews yet.', 'woocommerce' ); ?></p>
						<?php endif; ?>
					</div>

					<?php if ( get_option( 'woocommerce_review_rating_verification_required' ) === 'no' || wc_customer_bought_product( '', get_current_user_id(), $product->get_id() ) ) : ?>
						<div id="review_form_wrapper">
							<div id="review_form">
								<?php
								$commenter    = wp_get_current_commenter();
								$comment_form = array(
									/* translators: %s is product title */
									'title_reply'         => ! empty( $reviews ) ? esc_html__( 'Add a review', 'woocommerce' ) : sprintf( esc_html__( 'Be the first to review &ldquo;%s&rdquo;', 'woocommerce' ), get_the_title() ),
									'title_reply_to'      => esc_html__( 'Leave a Reply to %s', 'woocommerce' ),
									'title_reply_before'  => '<span id="reply-title" class="comment-reply-title">',
									'title_reply_after'   => '</span>',
									'comment_notes_after' => '',
									'label_submit'        => esc_html__( 'Submit', 'woocommerce' ),
									'logged_in_as'        => '',
									'comment_field'       => '',
								);

								$name_email_required = (bool) get_option( 'require_name_email', 1 );
								$fields              = array(
									'author' => array(
										'label'    => __( 'Name', 'woocommerce' ),
										'type'     => 'text',
										'value'    => $commenter['comment_author'],
										'required' => $name_email_required,
									),
									'email'  => array(
										'label'    => __( 'Email', 'woocommerce' ),
										'type'     => 'email',
										'value'    => $commenter['comment_author_email'],
										'required' => $name_email_required,
									),
								);

								$comment_form['fields'] = array();

								foreach ( $fields as $key => $field ) {
									$field_html  = '<p class="comment-form-' . esc_attr( $key ) . '">';
									$field_html .= '<label for="' . esc_attr( $key ) . '">' . esc_html( $field['label'] );

									if ( $field['required'] ) {
										$field_html .= '&nbsp;<span class="required">*</span>';
									}

									$field_html .= '</label><input id="' . esc_attr( $key ) . '" name="' . esc_attr( $key ) . '" type="' . esc_attr( $field['type'] ) . '" value="' . esc_attr( $field['value'] ) . '" size="30"' . ( $field['required'] ? ' required' : '' ) . ' /></p>';

									$comment_form['fields'][ $key ] = $field_html;
								}

								$account_page_url = wc_get_page_permalink( 'myaccount' );
								if ( $account_page_url ) {
									/* translators: %s opening and closing link tags respectively */
									$comment_form['must_log_in'] = '<p class="must-log-in">' . sprintf( esc_html__( 'You must be %1$slogged in%2$s to post a review.', 'woocommerce' ), '<a href="' . esc_url( $account_page_url ) . '">', '</a>' ) . '</p>';
								}

								if ( wc_review_ratings_enabled() ) {
									$comment_form['comment_field'] = '<div class="comment-form-rating"><label for="rating">' . esc_html__( 'Your rating', 'woocommerce' ) . ( wc_review_ratings_required() ? '&nbsp;<span class="required">*</span>' : '' ) . '</label><select name="rating" id="rating"' . ( wc_review_ratings_required() ? ' required' : '' ) . '>
										<option value="">' . esc_html__( 'Rate&hellip;', 'woocommerce' ) . '</option>
										<option value="5">' . esc_html__( 'Perfect', 'woocommerce' ) . '</option>
										<option value="4">' . esc_html__( 'Good', 'woocommerce' ) . '</option>
										<option value="3">' . esc_html__( 'Average', 'woocommerce' ) . '</option>
										<option value="2">' . esc_html__( 'Not that bad', 'woocommerce' ) . '</option>
										<option value="1">' . esc_html__( 'Very poor', 'woocommerce' ) . '</option>
									</select></div>';
								}

								$comment_form['comment_field'] .= '<p class="comment-form-comment"><label for="comment">' . esc_html__( 'Your review', 'woocommerce' ) . '&nbsp;<span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required></textarea></p>';

								comment_form( apply_filters( 'woocommerce_product_review_comment_form_args', $comment_form ) );
								?>
							</div>
						</div>
					<?php else : ?>
						<p class="woocommerce-verification-required"><?php esc_html_e( 'Only logged in customers who have purchased this product may leave a review.', 'woocommerce' ); ?></p>
					<?php endif; ?>
				</div>
			</div>
			<?php
		} else {
			// Not on a single product page - show a message
			?>
			<div class="<?php echo esc_attr( $block_class ); ?>"<?php echo wp_kses_post( $id_attr ); ?>>
				<div class="digiblocks-product-reviews-form digiblocks-placeholder">
					<p class="digiblocks-product-reviews-form-notice">
						<?php esc_html_e( 'This Product Reviews section will be displayed on single product pages.', 'digiblocks' ); ?>
					</p>
				</div>
			</div>
			<?php
		}

		return ob_get_clean();
	}
}

// Initialize.
DigiBlocks_Register_Blocks::get_instance();