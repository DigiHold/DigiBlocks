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
$visibility           = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$logoType             = isset( $attrs['logoType'] ) ? $attrs['logoType'] : 'image';
$textColor            = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$textHoverColor       = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor      = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$borderStyle          = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderColor          = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor     = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$hoverEffect          = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$logoAlignment        = isset( $attrs['logoAlignment'] ) ? $attrs['logoAlignment'] : [
    'desktop' => 'flex-start',
    'tablet'  => '',
    'mobile'  => '',
];
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
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

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
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'px',
	),
);

$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');

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
	justify-content: <?php echo esc_attr( $logoAlignment['desktop'] ); ?>;
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
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php endif; ?>
	
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
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
	.<?php echo esc_attr( $id ); ?> {
		justify-content: <?php echo esc_attr( $logoAlignment['tablet'] ); ?>;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container {
		<?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
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
	.<?php echo esc_attr( $id ); ?> {
		justify-content: <?php echo esc_attr( $logoAlignment['mobile'] ); ?>;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-logo-container {
		<?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
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

/* Visibility Controls */
<?php if ( $visibility['desktop'] ) : ?>
@media (min-width: 992px) {
    .<?php echo esc_attr( $id ); ?> {
        display: none !important;
    }
}
<?php endif; ?>

<?php if ( $visibility['tablet'] ) : ?>
@media (min-width: 768px) and (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        display: none !important;
    }
}
<?php endif; ?>

<?php if ( $visibility['mobile'] ) : ?>
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        display: none !important;
    }
}
<?php endif; ?>

<?php
$digiblocks_css_output = ob_get_clean();