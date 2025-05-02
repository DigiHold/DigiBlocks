<?php
/**
 * Team Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes.
$id                   = isset( $attrs['id'] ) ? $attrs['id'] : '';
$layout               = isset( $attrs['layout'] ) ? $attrs['layout'] : 'grid';
$columns              = isset( $attrs['columns'] ) ? $attrs['columns'] : array(
	'desktop' => 3,
	'tablet'  => 2,
	'mobile'  => 1,
);
$gap                  = isset( $attrs['gap'] ) ? $attrs['gap'] : array(
	'desktop' => array( 'horizontal' => 30, 'vertical' => 30, 'unit' => 'px' ),
	'tablet'  => array( 'horizontal' => 20, 'vertical' => 20, 'unit' => 'px' ),
	'mobile'  => array( 'horizontal' => 15, 'vertical' => 15, 'unit' => 'px' ),
);
$alignment            = isset( $attrs['alignment'] ) ? $attrs['alignment'] : 'center';
$showDescription      = isset( $attrs['showDescription'] ) ? $attrs['showDescription'] : true;
$showPosition         = isset( $attrs['showPosition'] ) ? $attrs['showPosition'] : true;
$showSocialIcons      = isset( $attrs['showSocialIcons'] ) ? $attrs['showSocialIcons'] : true;
$imageSize            = isset( $attrs['imageSize'] ) ? $attrs['imageSize'] : array(
	'desktop' => 150,
	'tablet'  => 120,
	'mobile'  => 100,
);
$imageShape           = isset( $attrs['imageShape'] ) ? $attrs['imageShape'] : 'circle';
$imageBorderWidth     = isset( $attrs['imageBorderWidth'] ) ? $attrs['imageBorderWidth'] : array(
	'desktop' => 0,
	'tablet'  => 0,
	'mobile'  => 0,
);
$imageBorderColor     = isset( $attrs['imageBorderColor'] ) ? $attrs['imageBorderColor'] : '#e0e0e0';
$imageBorderHoverColor = isset( $attrs['imageBorderHoverColor'] ) ? $attrs['imageBorderHoverColor'] : '';
$imageMargin          = isset( $attrs['imageMargin'] ) ? $attrs['imageMargin'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 20,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 15,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 10,
		'left'   => 0,
		'unit'   => 'px',
	),
);
$nameColor            = isset( $attrs['nameColor'] ) ? $attrs['nameColor'] : '#333333';
$nameHoverColor       = isset( $attrs['nameHoverColor'] ) ? $attrs['nameHoverColor'] : '';
$positionColor        = isset( $attrs['positionColor'] ) ? $attrs['positionColor'] : '#666666';
$positionHoverColor   = isset( $attrs['positionHoverColor'] ) ? $attrs['positionHoverColor'] : '';
$descriptionColor     = isset( $attrs['descriptionColor'] ) ? $attrs['descriptionColor'] : '#666666';
$descriptionHoverColor = isset( $attrs['descriptionHoverColor'] ) ? $attrs['descriptionHoverColor'] : '';
$cardBackgroundColor  = isset( $attrs['cardBackgroundColor'] ) ? $attrs['cardBackgroundColor'] : '#ffffff';
$cardBackgroundHoverColor = isset( $attrs['cardBackgroundHoverColor'] ) ? $attrs['cardBackgroundHoverColor'] : '';
$socialIconsColor     = isset( $attrs['socialIconsColor'] ) ? $attrs['socialIconsColor'] : '#1e73be';
$socialIconsHoverColor = isset( $attrs['socialIconsHoverColor'] ) ? $attrs['socialIconsHoverColor'] : '#135e9e';
$socialIconsBackgroundColor = isset( $attrs['socialIconsBackgroundColor'] ) ? $attrs['socialIconsBackgroundColor'] : 'transparent';
$socialIconsBackgroundHoverColor = isset( $attrs['socialIconsBackgroundHoverColor'] ) ? $attrs['socialIconsBackgroundHoverColor'] : '';
$socialIconsSize      = isset( $attrs['socialIconsSize'] ) ? $attrs['socialIconsSize'] : array(
	'desktop' => 16,
	'tablet'  => 14,
	'mobile'  => 12,
);
$socialIconsSpacing   = isset( $attrs['socialIconsSpacing'] ) ? $attrs['socialIconsSpacing'] : array(
	'desktop' => 10,
	'tablet'  => 8,
	'mobile'  => 6,
);
$headingTypography    = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : array(
	'fontFamily'     => '',
	'fontSize'       => array(
		'desktop' => 22,
		'tablet'  => 20,
		'mobile'  => 18,
	),
	'fontSizeUnit'   => 'px',
	'fontWeight'     => '600',
	'fontStyle'      => 'normal',
	'textTransform'  => '',
	'textDecoration' => '',
	'lineHeight'     => array(
		'desktop' => 1.5,
		'tablet'  => 1.4,
		'mobile'  => 1.3,
	),
	'lineHeightUnit' => 'em',
);
$textTypography   = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
	'fontFamily'     => '',
	'fontSize'       => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'   => 'px',
	'fontWeight'     => '',
	'fontStyle'      => 'italic',
	'textTransform'  => '',
	'textDecoration' => '',
	'lineHeight'     => array(
		'desktop' => 1.5,
		'tablet'  => 1.4,
		'mobile'  => 1.3,
	),
	'lineHeightUnit' => 'em',
);
$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'     => '',
	'fontSize'       => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'   => 'px',
	'fontWeight'     => '',
	'fontStyle'      => 'normal',
	'textTransform'  => '',
	'textDecoration' => '',
	'lineHeight'     => array(
		'desktop' => 1.5,
		'tablet'  => 1.4,
		'mobile'  => 1.3,
	),
	'lineHeightUnit' => 'em',
);
$padding              = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
	'desktop' => array(
		'top'    => 30,
		'right'  => 30,
		'bottom' => 30,
		'left'   => 30,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 25,
		'right'  => 25,
		'bottom' => 25,
		'left'   => 25,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 20,
		'right'  => 20,
		'bottom' => 20,
		'left'   => 20,
		'unit'   => 'px',
	),
);
$margin               = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 30,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 25,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 20,
		'left'   => 0,
		'unit'   => 'px',
	),
);
$animation            = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$borderStyle          = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderRadius         = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
	'desktop' => array(
		'top'    => 8,
		'right'  => 8,
		'bottom' => 8,
		'left'   => 8,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 8,
		'right'  => 8,
		'bottom' => 8,
		'left'   => 8,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 8,
		'right'  => 8,
		'bottom' => 8,
		'left'   => 8,
		'unit'   => 'px',
	),
);
$borderWidth          = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
	'desktop' => array(
		'top'    => 1,
		'right'  => 1,
		'bottom' => 1,
		'left'   => 1,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 1,
		'right'  => 1,
		'bottom' => 1,
		'left'   => 1,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 1,
		'right'  => 1,
		'bottom' => 1,
		'left'   => 1,
		'unit'   => 'px',
	),
);
$borderColor          = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor     = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$boxShadow            = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$boxShadowHover       = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);

// CSS Output
ob_start();
?>
/* Team Block - <?php echo esc_attr( $block_id ); ?> */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
	margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
	text-align: <?php echo esc_attr( $alignment ); ?>;
}

/* Team Container */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-container {
	<?php if ( 'grid' === $layout ) : ?>
		display: grid;
		grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
		grid-gap: <?php echo esc_attr( $gap['desktop']['vertical'] . $gap['desktop']['unit'] . ' ' . $gap['desktop']['horizontal'] . $gap['desktop']['unit'] ); ?>;
	<?php elseif ( 'list' === $layout ) : ?>
		display: flex;
		flex-direction: column;
		gap: <?php echo esc_attr( $gap['desktop']['vertical'] . $gap['desktop']['unit'] ); ?>;
	<?php elseif ( 'carousel' === $layout ) : ?>
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		gap: <?php echo esc_attr( $gap['desktop']['horizontal'] . $gap['desktop']['unit'] ); ?>;
		scrollbar-width: none;
		-ms-overflow-style: none;
		padding-bottom: 20px;
	<?php endif; ?>
}

<?php if ( 'carousel' === $layout ) : ?>
	/* Carousel Styles */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-container::-webkit-scrollbar {
		display: none;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
		scroll-snap-align: start;
		flex: 0 0 calc(<?php echo 100 / min( $columns['desktop'], 3 ); ?>% - <?php echo esc_attr( $gap['desktop']['horizontal'] . $gap['desktop']['unit'] ); ?>);
		min-width: 250px;
	}
<?php endif; ?>

/* Team Member */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
	<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		border-width: <?php echo esc_attr( $borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
	<?php else : ?>
		border-style: none;
	<?php endif; ?>
	
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
	
	padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
	background-color: <?php echo esc_attr( $cardBackgroundColor ); ?>;
	transition: all 0.3s ease;
	overflow: hidden;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member:hover {
	<?php if ( $borderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $cardBackgroundHoverColor ) : ?>
		background-color: <?php echo esc_attr( $cardBackgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	<?php endif; ?>
}

/* Member Image */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-image {
	width: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
	height: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
	margin: <?php echo esc_attr( $imageMargin['desktop']['top'] . $imageMargin['desktop']['unit'] . ' auto ' . $imageMargin['desktop']['bottom'] . $imageMargin['desktop']['unit'] ); ?>;
	position: relative;
	overflow: hidden;
	
	<?php if ( 'circle' === $imageShape ) : ?>
		border-radius: 50%;
	<?php elseif ( 'square' === $imageShape ) : ?>
		border-radius: 0;
	<?php elseif ( 'rounded' === $imageShape ) : ?>
		border-radius: 10px;
	<?php elseif ( 'hexagon' === $imageShape ) : ?>
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		border-radius: 0;
	<?php endif; ?>
	
	border: <?php echo esc_attr( $imageBorderWidth['desktop'] ); ?>px solid <?php echo esc_attr( $imageBorderColor ); ?>;
	transition: all 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member:hover .digiblocks-team-member-image {
	<?php if ( $imageBorderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $imageBorderHoverColor ); ?>;
	<?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-placeholder {
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Member Name */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-name {
	color: <?php echo esc_attr( $nameColor ); ?>;
	margin-top: 15px;
	margin-bottom: 5px;
	
	<?php if ( ! empty( $headingTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $headingTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $headingTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $headingTypography['fontSize']['desktop'] . ( isset( $headingTypography['fontSizeUnit'] ) ? $headingTypography['fontSizeUnit'] : 'px' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $headingTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $headingTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $headingTypography['fontStyle'] ) ) : ?>
		font-style: <?php echo esc_attr( $headingTypography['fontStyle'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $headingTypography['textTransform'] ) ) : ?>
		text-transform: <?php echo esc_attr( $headingTypography['textTransform'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $headingTypography['textDecoration'] ) ) : ?>
		text-decoration: <?php echo esc_attr( $headingTypography['textDecoration'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $headingTypography['lineHeight']['desktop'] ) ) : ?>
		line-height: <?php echo esc_attr( $headingTypography['lineHeight']['desktop'] . ( isset( $headingTypography['lineHeightUnit'] ) ? $headingTypography['lineHeightUnit'] : 'em' ) ); ?>;
	<?php endif; ?>
	
	transition: color 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member:hover .digiblocks-team-member-name {
	<?php if ( $nameHoverColor ) : ?>
		color: <?php echo esc_attr( $nameHoverColor ); ?>;
	<?php endif; ?>
}

/* Member Position */
<?php if ( $showPosition ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-position {
		color: <?php echo esc_attr( $positionColor ); ?>;
		margin-top: 0;
		margin-bottom: 10px;
		
		<?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
			font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
			font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( isset( $textTypography['fontSizeUnit'] ) ? $textTypography['fontSizeUnit'] : 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['fontWeight'] ) ) : ?>
			font-weight: <?php echo esc_attr( $textTypography['fontWeight'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['fontStyle'] ) ) : ?>
			font-style: <?php echo esc_attr( $textTypography['fontStyle'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['textTransform'] ) ) : ?>
			text-transform: <?php echo esc_attr( $textTypography['textTransform'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['textDecoration'] ) ) : ?>
			text-decoration: <?php echo esc_attr( $textTypography['textDecoration'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['lineHeight']['desktop'] ) ) : ?>
			line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ( isset( $textTypography['lineHeightUnit'] ) ? $textTypography['lineHeightUnit'] : 'em' ) ); ?>;
		<?php endif; ?>
		
		transition: color 0.3s ease;
	}

	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member:hover .digiblocks-team-member-position {
		<?php if ( $positionHoverColor ) : ?>
			color: <?php echo esc_attr( $positionHoverColor ); ?>;
		<?php endif; ?>
	}
<?php endif; ?>

/* Member Description */
<?php if ( $showDescription ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-description {
		color: <?php echo esc_attr( $descriptionColor ); ?>;
		margin-bottom: 15px;
		
		<?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
			font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
			font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( isset( $contentTypography['fontSizeUnit'] ) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $contentTypography['fontWeight'] ) ) : ?>
			font-weight: <?php echo esc_attr( $contentTypography['fontWeight'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $contentTypography['fontStyle'] ) ) : ?>
			font-style: <?php echo esc_attr( $contentTypography['fontStyle'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $contentTypography['textTransform'] ) ) : ?>
			text-transform: <?php echo esc_attr( $contentTypography['textTransform'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $contentTypography['textDecoration'] ) ) : ?>
			text-decoration: <?php echo esc_attr( $contentTypography['textDecoration'] ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $contentTypography['lineHeight']['desktop'] ) ) : ?>
			line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( isset( $contentTypography['lineHeightUnit'] ) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
		<?php endif; ?>
		
		transition: color 0.3s ease;
	}

	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member:hover .digiblocks-team-member-description {
		<?php if ( $descriptionHoverColor ) : ?>
			color: <?php echo esc_attr( $descriptionHoverColor ); ?>;
		<?php endif; ?>
	}
<?php endif; ?>

/* Social Links */
<?php if ( $showSocialIcons ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: <?php echo esc_attr( $socialIconsSpacing['desktop'] ); ?>px;
		margin-top: 15px;
	}

	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: <?php echo esc_attr( $socialIconsSize['desktop'] * 2 ); ?>px;
		height: <?php echo esc_attr( $socialIconsSize['desktop'] * 2 ); ?>px;
		background-color: <?php echo esc_attr( $socialIconsBackgroundColor ); ?>;
		border-radius: 50%;
		transition: all 0.3s ease;
		color: <?php echo esc_attr( $socialIconsColor ); ?>;
	}

	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-link:hover {
		<?php if ( $socialIconsHoverColor ) : ?>
			color: <?php echo esc_attr( $socialIconsHoverColor ); ?>;
		<?php endif; ?>
		
		<?php if ( $socialIconsBackgroundHoverColor ) : ?>
			background-color: <?php echo esc_attr( $socialIconsBackgroundHoverColor ); ?>;
		<?php endif; ?>
	}

	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-link svg {
		width: <?php echo esc_attr( $socialIconsSize['desktop'] ); ?>px;
		height: <?php echo esc_attr( $socialIconsSize['desktop'] ); ?>px;
		fill: currentColor;
	}
<?php endif; ?>

/* List Layout Adjustments */
<?php if ( 'list' === $layout ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-image-container {
		margin-right: 30px;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-content {
		flex: 1;
		text-align: left;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-links {
		justify-content: flex-start;
	}
<?php endif; ?>

/* Animation */
<?php if ( 'none' !== $animation ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"].animate-<?php echo esc_attr( $animation ); ?> {
		animation: <?php echo esc_attr( $animation ); ?> 1s forwards;
	}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
	}
	
	/* Team Container */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-container {
		<?php if ( 'grid' === $layout ) : ?>
			grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
			grid-gap: <?php echo esc_attr( $gap['tablet']['vertical'] . $gap['tablet']['unit'] . ' ' . $gap['tablet']['horizontal'] . $gap['tablet']['unit'] ); ?>;
		<?php elseif ( 'list' === $layout ) : ?>
			gap: <?php echo esc_attr( $gap['tablet']['vertical'] . $gap['tablet']['unit'] ); ?>;
		<?php elseif ( 'carousel' === $layout ) : ?>
			gap: <?php echo esc_attr( $gap['tablet']['horizontal'] . $gap['tablet']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	<?php if ( 'carousel' === $layout ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
			flex: 0 0 calc(<?php echo 100 / min( $columns['tablet'], 2 ); ?>% - <?php echo esc_attr( $gap['tablet']['horizontal'] . $gap['tablet']['unit'] ); ?>);
		}
	<?php endif; ?>
	
	/* Team Member */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
		<?php endif; ?>
		
		padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
	}
	
	/* Member Image */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-image {
		width: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
		height: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
		margin: <?php echo esc_attr( $imageMargin['tablet']['top'] . $imageMargin['tablet']['unit'] . ' auto ' . $imageMargin['tablet']['bottom'] . $imageMargin['tablet']['unit'] ); ?>;
		border-width: <?php echo esc_attr( $imageBorderWidth['tablet'] ); ?>px;
	}
	
	/* Member Name */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-name {
		<?php if ( ! empty( $headingTypography['fontSize']['tablet'] ) ) : ?>
			font-size: <?php echo esc_attr( $headingTypography['fontSize']['tablet'] . ( isset( $headingTypography['fontSizeUnit'] ) ? $headingTypography['fontSizeUnit'] : 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $headingTypography['lineHeight']['tablet'] ) ) : ?>
			line-height: <?php echo esc_attr( $headingTypography['lineHeight']['tablet'] . ( isset( $headingTypography['lineHeightUnit'] ) ? $headingTypography['lineHeightUnit'] : 'em' ) ); ?>;
		<?php endif; ?>
	}
	
	/* Member Position */
	<?php if ( $showPosition ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-position {
			<?php if ( ! empty( $textTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( isset( $textTypography['fontSizeUnit'] ) ? $textTypography['fontSizeUnit'] : 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $textTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( isset( $textTypography['lineHeightUnit'] ) ? $textTypography['lineHeightUnit'] : 'em' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
	
	/* Member Description */
	<?php if ( $showDescription ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-description {
			<?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( isset( $contentTypography['fontSizeUnit'] ) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $contentTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( isset( $contentTypography['lineHeightUnit'] ) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
	
	/* Social Links */
	<?php if ( $showSocialIcons ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-links {
			gap: <?php echo esc_attr( $socialIconsSpacing['tablet'] ); ?>px;
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-link {
			width: <?php echo esc_attr( $socialIconsSize['tablet'] * 2 ); ?>px;
			height: <?php echo esc_attr( $socialIconsSize['tablet'] * 2 ); ?>px;
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-link svg {
			width: <?php echo esc_attr( $socialIconsSize['tablet'] ); ?>px;
			height: <?php echo esc_attr( $socialIconsSize['tablet'] ); ?>px;
		}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
	}
	
	/* Team Container */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-container {
		<?php if ( 'grid' === $layout ) : ?>
			grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
			grid-gap: <?php echo esc_attr( $gap['mobile']['vertical'] . $gap['mobile']['unit'] . ' ' . $gap['mobile']['horizontal'] . $gap['mobile']['unit'] ); ?>;
		<?php elseif ( 'list' === $layout ) : ?>
			gap: <?php echo esc_attr( $gap['mobile']['vertical'] . $gap['mobile']['unit'] ); ?>;
		<?php elseif ( 'carousel' === $layout ) : ?>
			gap: <?php echo esc_attr( $gap['mobile']['horizontal'] . $gap['mobile']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	<?php if ( 'carousel' === $layout ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
			flex: 0 0 calc(100% - <?php echo esc_attr( $gap['mobile']['horizontal'] . $gap['mobile']['unit'] ); ?>);
			min-width: 200px;
		}
	<?php endif; ?>
	
	/* Team Member */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
		<?php endif; ?>
		
		padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
	}
	
	/* Member Image */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-image {
		width: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
		height: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
		margin: <?php echo esc_attr( $imageMargin['mobile']['top'] . $imageMargin['mobile']['unit'] . ' auto ' . $imageMargin['mobile']['bottom'] . $imageMargin['mobile']['unit'] ); ?>;
		border-width: <?php echo esc_attr( $imageBorderWidth['mobile'] ); ?>px;
	}
	
	/* Member Name */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-name {
		<?php if ( ! empty( $headingTypography['fontSize']['mobile'] ) ) : ?>
			font-size: <?php echo esc_attr( $headingTypography['fontSize']['mobile'] . ( isset( $headingTypography['fontSizeUnit'] ) ? $headingTypography['fontSizeUnit'] : 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $headingTypography['lineHeight']['mobile'] ) ) : ?>
			line-height: <?php echo esc_attr( $headingTypography['lineHeight']['mobile'] . ( isset( $headingTypography['lineHeightUnit'] ) ? $headingTypography['lineHeightUnit'] : 'em' ) ); ?>;
		<?php endif; ?>
	}
	
	/* Member Position */
	<?php if ( $showPosition ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-position {
			<?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( isset( $textTypography['fontSizeUnit'] ) ? $textTypography['fontSizeUnit'] : 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $textTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( isset( $textTypography['lineHeightUnit'] ) ? $textTypography['lineHeightUnit'] : 'em' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
	
	/* Member Description */
	<?php if ( $showDescription ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-description {
			<?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( isset( $contentTypography['fontSizeUnit'] ) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $contentTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( isset( $contentTypography['lineHeightUnit'] ) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
	
	/* Social Links */
	<?php if ( $showSocialIcons ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-links {
			gap: <?php echo esc_attr( $socialIconsSpacing['mobile'] ); ?>px;
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-link {
			width: <?php echo esc_attr( $socialIconsSize['mobile'] * 2 ); ?>px;
			height: <?php echo esc_attr( $socialIconsSize['mobile'] * 2 ); ?>px;
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-link svg {
			width: <?php echo esc_attr( $socialIconsSize['mobile'] ); ?>px;
			height: <?php echo esc_attr( $socialIconsSize['mobile'] ); ?>px;
		}
	<?php endif; ?>
	
	<?php if ( 'list' === $layout ) : ?>
		/* Mobile List Layout Adjustments */
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member {
			flex-direction: column;
			align-items: center;
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-image-container {
			margin-right: 0;
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-content {
			text-align: center;
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-team-member-social-links {
			justify-content: center;
		}
	<?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();