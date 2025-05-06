<?php
/**
 * Logo Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes.
$id                   = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$logoType             = isset( $attrs['logoType'] ) ? $attrs['logoType'] : 'image';
$textColor            = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$textHoverColor       = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor      = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$borderStyle          = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderColor          = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor     = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$hoverEffect          = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$logoAlignment        = isset( $attrs['logoAlignment'] ) ? $attrs['logoAlignment'] : 'center';
$iconPosition         = isset( $attrs['iconPosition'] ) ? $attrs['iconPosition'] : 'before';

// Get icon sizeo
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => array( 'value' => 30, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 25, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 20, 'unit' => 'px' ),
);

// Get logo dimensions
$logoWidth = isset( $attrs['logoWidth'] ) ? $attrs['logoWidth'] : array(
	'desktop' => array( 'value' => 200, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 180, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 150, 'unit' => 'px' ),
);

$logoHeight = isset( $attrs['logoHeight'] ) ? $attrs['logoHeight'] : array(
	'desktop' => array( 'value' => '', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);

// Get padding and margin.
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
);

$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
);

// Get border width and radius.
$borderWidth = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
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

$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
);

// Get box shadow.
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);

// Get typography settings.
$textTypography = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 28,
		'tablet'  => 26,
		'mobile'  => 24,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '700',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
	'lineHeight'        => array(
		'desktop' => 1.2,
		'tablet'  => 1.2,
		'mobile'  => 1.2,
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => 0,
		'mobile'  => 0,
	),
	'letterSpacingUnit' => 'px',
);

// Get text icon
$textIcon = isset( $attrs['textIcon'] ) ? $attrs['textIcon'] : null;

// CSS Output
ob_start();
?>
/* Logo Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	display: flex;
	justify-content: <?php echo esc_attr( $logoAlignment ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container {
	display: inline-flex;
	align-items: center;
	<?php if ( $backgroundColor ) : ?>
		background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		border-width: <?php echo esc_attr( $borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
	padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
	margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container:hover {
	<?php if ( $backgroundHoverColor ) : ?>
		background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $borderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	<?php endif; ?>
	
	<?php if ( 'lift' === $hoverEffect ) : ?>
		transform: translateY(-10px);
	<?php elseif ( 'scale' === $hoverEffect ) : ?>
		transform: scale(1.05);
	<?php elseif ( 'glow' === $hoverEffect ) : ?>
		filter: brightness(1.1);
	<?php endif; ?>
}

/* Image Logo */
.<?php echo esc_attr( $id ); ?> .digiblocks-logo-image {
	min-width: 150px;
	width: <?php echo esc_attr( $logoWidth['desktop']['value'] ? $logoWidth['desktop']['value'] . $logoWidth['desktop']['unit'] : 'auto' ); ?>;
	max-width: 100%;
	<?php if ( !empty($logoHeight['desktop']['value']) && $logoHeight['desktop']['value'] !== 0 ) : ?>
		height: <?php echo esc_attr( $logoHeight['desktop']['value'] . $logoHeight['desktop']['unit'] ); ?>;
	<?php endif; ?>
	object-fit: contain;
	transition: all 0.3s ease;
}

/* Text Logo */
.<?php echo esc_attr( $id ); ?> .digiblocks-logo-text-wrapper {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	<?php if ( $logoType === 'text' && $textIcon ) : ?>
		<?php if ( $iconPosition === 'above' ) : ?>
			flex-direction: column;
		<?php endif; ?>
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logo-text {
	display: inline-block;
	color: <?php echo esc_attr( $textColor ); ?>;
	
	<?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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
		line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	
	transition: color 0.3s ease;
}

<?php if ( $textHoverColor ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container:hover .digiblocks-logo-text {
		color: <?php echo esc_attr( $textHoverColor ); ?>;
	}
<?php endif; ?>

/* Text Logo Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-logo-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logo-icon span {
	display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logo-icon svg {
	display: flex;
	width: <?php echo esc_attr( $iconSize['desktop']['value'] ? $iconSize['desktop']['value'] . $iconSize['desktop']['unit'] : '30px' ); ?>;
	height: 100%;
	fill: <?php echo esc_attr( $textColor ); ?>;
	transition: fill 0.3s ease;
}

<?php if ( $textHoverColor ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container:hover .digiblocks-logo-icon svg {
		fill: <?php echo esc_attr( $textHoverColor ); ?>;
	}
<?php endif; ?>

/* Link styles */
.<?php echo esc_attr( $id ); ?> a {
	display: inline-flex;
	text-decoration: none;
	color: inherit;
}

/* Placeholder style */
.<?php echo esc_attr( $id ); ?> .digiblocks-logo-placeholder {
	cursor: pointer;
}

/* Tablet Styles */
@media (max-width: 991px) {	
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container {
		<?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
		<?php endif; ?>
		padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
		margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-image {
		width: <?php echo esc_attr( $logoWidth['tablet']['value'] ? $logoWidth['tablet']['value'] . $logoWidth['tablet']['unit'] : 'auto' ); ?>;
		<?php if ( !empty($logoHeight['tablet']['value']) && $logoHeight['tablet']['value'] !== 0 ) : ?> <!-- Fixed condition -->
			height: <?php echo esc_attr( $logoHeight['tablet']['value'] . $logoHeight['tablet']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-text {
		<?php if ( ! empty( $textTypography['fontSize']['tablet'] ) ) : ?>
			font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['lineHeight']['tablet'] ) ) : ?>
			line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['letterSpacing']['tablet'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-icon svg {
		width: <?php echo esc_attr( $iconSize['tablet']['value'] ? $iconSize['tablet']['value'] . $iconSize['tablet']['unit'] : '25px' ); ?>;
	}
}

/* Mobile Styles */
@media (max-width: 767px) {	
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container {
		<?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
		<?php endif; ?>
		padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
		margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-image {
		width: <?php echo esc_attr( $logoWidth['mobile']['value'] ? $logoWidth['mobile']['value'] . $logoWidth['mobile']['unit'] : 'auto' ); ?>;
		<?php if ( !empty($logoHeight['mobile']['value']) && $logoHeight['mobile']['value'] !== 0 ) : ?> <!-- Fixed condition -->
			height: <?php echo esc_attr( $logoHeight['mobile']['value'] . $logoHeight['mobile']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-text {
		<?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
			font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['lineHeight']['mobile'] ) ) : ?>
			line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $textTypography['letterSpacing']['mobile'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-icon svg {
		width: <?php echo esc_attr( $iconSize['mobile']['value'] ? $iconSize['mobile']['value'] . $iconSize['mobile']['unit'] : '20px' ); ?>;
	}
}

<?php
$digiblocks_css_output = ob_get_clean();