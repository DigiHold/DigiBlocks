<?php
/**
 * Icon Box Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$iconValue                = isset( $attrs['iconValue'] ) ? $attrs['iconValue'] : null;
$iconColor                = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : null;
$iconBackgroundColor      = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : null;
$iconBorderStyle          = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'default';
$iconBorderWidth          = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : null;
$iconBorderRadius         = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : null;
$iconBorderColor          = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : null;
$iconPadding              = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : null;
$iconMargin               = isset( $attrs['iconMargin'] ) ? $attrs['iconMargin'] : null;
$iconHoverColor           = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : null;
$iconHoverBackgroundColor = isset( $attrs['iconHoverBackgroundColor'] ) ? $attrs['iconHoverBackgroundColor'] : null;
$iconHoverBorderColor     = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : null;
$titleColor               = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
$titleHoverColor          = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$textColor                = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$textHoverColor           = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$backgroundHoverColor     = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$hoverEffect              = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$linkEnabled              = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;

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

// Get icon size (with fallback)
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => 48,
	'tablet'  => 40,
	'mobile'  => 32,
);

// Get padding (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
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

// Get margin (with fallback)
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
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

// Get iconMargin (with fallback)
if ( ! $iconMargin ) {
	$iconMargin = array(
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
}

// Get borderWidth (with responsive fallback)
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

// Get borderRadius (with responsive fallback)
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
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

// Get typography settings with default values
$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 22,
		'tablet'  => 20,
		'mobile'  => 18,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => 1.5,
		'tablet'  => 1.4,
		'mobile'  => 1.3,
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => 0,
		'mobile'  => 0,
	),
	'letterSpacingUnit' => 'px',
);

$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => 1.5,
		'tablet'  => 1.4,
		'mobile'  => 1.3,
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => 0,
		'mobile'  => 0,
	),
	'letterSpacingUnit' => 'px',
);

// CSS Output
ob_start();
?>
/* Icon Box Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	display: flex;
	flex-direction: column;
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		border-width: <?php echo esc_attr( $borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
	<?php else : ?>
		border-style: none;
	<?php endif; ?>

	/* Box Shadow */
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>

	padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
	margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
	text-align: <?php echo esc_attr( $align ); ?>;
	transition: all 0.3s ease;
	<?php if ( $linkEnabled ) : ?>
		cursor: pointer;
		text-decoration: none;
	<?php endif; ?>
}

/* Hover effects for the main block */
.<?php echo esc_attr( $id ); ?>:hover {
	<?php if ( $backgroundHoverColor ) : ?>
		background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
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

<?php if ( $iconValue ) : ?>
	/* Icon styles */
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
		<?php if ( $iconMargin && isset( $iconMargin['desktop'] ) ) : ?>
			margin: <?php echo esc_attr( $iconMargin['desktop']['top'] . $iconMargin['desktop']['unit'] . ' ' . $iconMargin['desktop']['right'] . $iconMargin['desktop']['unit'] . ' ' . $iconMargin['desktop']['bottom'] . $iconMargin['desktop']['unit'] . ' ' . $iconMargin['desktop']['left'] . $iconMargin['desktop']['unit'] ); ?>;
		<?php endif; ?>

		display: inline-flex;
		align-items: center;
		justify-content: center;

		<?php if ( $iconBackgroundColor ) : ?>
			background-color: <?php echo esc_attr( $iconBackgroundColor ); ?>;
		<?php endif; ?>
			
		<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && $iconBorderWidth && $iconBorderRadius ) : ?>
			border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
			border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
			border-width: <?php echo esc_attr( $iconBorderWidth['desktop']['top'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['right'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['bottom'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['left'] . $iconBorderWidth['desktop']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $iconBorderRadius['desktop']['top'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['right'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['bottom'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['left'] . $iconBorderRadius['desktop']['unit'] ); ?>;
		<?php endif; ?>
			
		<?php if ( $iconPadding ) : ?>
			padding: <?php echo esc_attr( $iconPadding['desktop']['top'] . $iconPadding['desktop']['unit'] . ' ' . $iconPadding['desktop']['right'] . $iconPadding['desktop']['unit'] . ' ' . $iconPadding['desktop']['bottom'] . $iconPadding['desktop']['unit'] . ' ' . $iconPadding['desktop']['left'] . $iconPadding['desktop']['unit'] ); ?>;
		<?php endif; ?>

		transition: all 0.3s ease;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon span {
		display: flex;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
		width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
		height: 100%;
		fill: <?php echo esc_attr( $iconColor ); ?>;
		transition: all 0.3s ease;
	}

	/* Icon hover styles */
	.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-icon {
		<?php if ( $iconHoverBackgroundColor ) : ?>
			background-color: <?php echo esc_attr( $iconHoverBackgroundColor ); ?>;
		<?php endif; ?>
			
		<?php if ( $iconHoverBorderColor ) : ?>
			border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
		<?php endif; ?>
	}

	.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-icon svg {
		<?php if ( $iconHoverColor ) : ?>
			fill: <?php echo esc_attr( $iconHoverColor ); ?> !important; 
			color: <?php echo esc_attr( $iconHoverColor ); ?> !important;
		<?php endif; ?>
	}
<?php endif; ?>

/* Title styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-title {
	color: <?php echo esc_attr( $titleColor ); ?>;
	margin-bottom: 10px;

	<?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $titleTypography['fontWeight'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['fontStyle'] ) ) : ?>
		font-style: <?php echo esc_attr( $titleTypography['fontStyle'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['textTransform'] ) ) : ?>
		text-transform: <?php echo esc_attr( $titleTypography['textTransform'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['textDecoration'] ) ) : ?>
		text-decoration: <?php echo esc_attr( $titleTypography['textDecoration'] ); ?>;
	<?php endif; ?>

	<?php if ( ! empty( $titleTypography['lineHeight']['desktop'] ) ) : ?>
		line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>

	transition: color 0.3s ease;
}

<?php if ( $titleHoverColor ) : ?>
	/* Title hover styles */
	.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-title {
		color: <?php echo esc_attr( $titleHoverColor ); ?>;
	}
<?php endif; ?>

/* Content styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-text {
	color: <?php echo esc_attr( $textColor ); ?>;

	<?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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
		line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>

	transition: color 0.3s ease;
}

<?php if ( $textHoverColor ) : ?>
	/* Content hover styles */
	.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-text {
		color: <?php echo esc_attr( $textHoverColor ); ?>;
	}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
		<?php endif; ?>
		<?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
			margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
		<?php endif; ?>
				
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet']) && isset( $borderRadius['tablet'] ) ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
		<?php endif; ?>
	}

	<?php if ( $iconValue ) : ?>
		<?php if ( isset( $iconSize['tablet'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
				width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
			}
		<?php endif; ?>
			
		<?php if ( $iconMargin && isset( $iconMargin['tablet'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
				margin: <?php echo esc_attr( $iconMargin['tablet']['top'] . $iconMargin['tablet']['unit'] . ' ' . $iconMargin['tablet']['right'] . $iconMargin['tablet']['unit'] . ' ' . $iconMargin['tablet']['bottom'] . $iconMargin['tablet']['unit'] . ' ' . $iconMargin['tablet']['left'] . $iconMargin['tablet']['unit'] ); ?>;
			}
		<?php endif; ?>
			
		<?php if ( $iconPadding && isset( $iconPadding['tablet'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
				padding: <?php echo esc_attr( $iconPadding['tablet']['top'] . $iconPadding['tablet']['unit'] . ' ' . $iconPadding['tablet']['right'] . $iconPadding['tablet']['unit'] . ' ' . $iconPadding['tablet']['bottom'] . $iconPadding['tablet']['unit'] . ' ' . $iconPadding['tablet']['left'] . $iconPadding['tablet']['unit'] ); ?>;
			}
		<?php endif; ?>
			
		<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['tablet']) && isset( $iconBorderRadius['tablet'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
				border-width: <?php echo esc_attr( $iconBorderWidth['tablet']['top'] . $iconBorderWidth['tablet']['unit'] . ' ' . $iconBorderWidth['tablet']['right'] . $iconBorderWidth['tablet']['unit'] . ' ' . $iconBorderWidth['tablet']['bottom'] . $iconBorderWidth['tablet']['unit'] . ' ' . $iconBorderWidth['tablet']['left'] . $iconBorderWidth['tablet']['unit'] ); ?>;
				border-radius: <?php echo esc_attr( $iconBorderRadius['tablet']['top'] . $iconBorderRadius['tablet']['unit'] . ' ' . $iconBorderRadius['tablet']['right'] . $iconBorderRadius['tablet']['unit'] . ' ' . $iconBorderRadius['tablet']['bottom'] . $iconBorderRadius['tablet']['unit'] . ' ' . $iconBorderRadius['tablet']['left'] . $iconBorderRadius['tablet']['unit'] ); ?>;
			}
		<?php endif; ?>
	<?php endif; ?>

	<?php if ( isset( $titleTypography['fontSize']['tablet']) || isset( $titleTypography['lineHeight']['tablet']) || isset( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-title {
			<?php if ( isset( $titleTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $titleTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
				letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>

	<?php if ( isset( $contentTypography['fontSize']['tablet']) || isset( $contentTypography['lineHeight']['tablet']) || isset( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-text {
			<?php if ( isset( $contentTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $contentTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
				letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
		<?php endif; ?>
		<?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
			margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
		<?php endif; ?>
				
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile']) && isset( $borderRadius['mobile'] ) ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
		<?php endif; ?>
    }
    
	<?php if ( $iconValue ) : ?>
		<?php if ( isset( $iconSize['mobile'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
				width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
			}
		<?php endif; ?>
			
		<?php if ( $iconMargin && isset( $iconMargin['mobile'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
				margin: <?php echo esc_attr( $iconMargin['mobile']['top'] . $iconMargin['mobile']['unit'] . ' ' . $iconMargin['mobile']['right'] . $iconMargin['mobile']['unit'] . ' ' . $iconMargin['mobile']['bottom'] . $iconMargin['mobile']['unit'] . ' ' . $iconMargin['mobile']['left'] . $iconMargin['mobile']['unit'] ); ?>;
			}
		<?php endif; ?>
			
		<?php if ( $iconPadding && isset( $iconPadding['mobile'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
				padding: <?php echo esc_attr( $iconPadding['mobile']['top'] . $iconPadding['mobile']['unit'] . ' ' . $iconPadding['mobile']['right'] . $iconPadding['mobile']['unit'] . ' ' . $iconPadding['mobile']['bottom'] . $iconPadding['mobile']['unit'] . ' ' . $iconPadding['mobile']['left'] . $iconPadding['mobile']['unit'] ); ?>;
			}
		<?php endif; ?>
			
		<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['mobile']) && isset( $iconBorderRadius['mobile'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
				border-width: <?php echo esc_attr( $iconBorderWidth['mobile']['top'] . $iconBorderWidth['mobile']['unit'] . ' ' . $iconBorderWidth['mobile']['right'] . $iconBorderWidth['mobile']['unit'] . ' ' . $iconBorderWidth['mobile']['bottom'] . $iconBorderWidth['mobile']['unit'] . ' ' . $iconBorderWidth['mobile']['left'] . $iconBorderWidth['mobile']['unit'] ); ?>;
				border-radius: <?php echo esc_attr( $iconBorderRadius['mobile']['top'] . $iconBorderRadius['mobile']['unit'] . ' ' . $iconBorderRadius['mobile']['right'] . $iconBorderRadius['mobile']['unit'] . ' ' . $iconBorderRadius['mobile']['bottom'] . $iconBorderRadius['mobile']['unit'] . ' ' . $iconBorderRadius['mobile']['left'] . $iconBorderRadius['mobile']['unit'] ); ?>;
			}
		<?php endif; ?>
	<?php endif; ?>
    
	<?php if ( isset( $titleTypography['fontSize']['mobile']) || isset( $titleTypography['lineHeight']['mobile']) || isset( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-title {
			<?php if ( isset( $titleTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $titleTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif;
			if ( isset( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
				letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>

	<?php if ( isset( $contentTypography['fontSize']['mobile']) || isset( $contentTypography['lineHeight']['mobile']) || isset( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-text {
			<?php if ( isset( $contentTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif;
			if ( isset( $contentTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif;
			if ( isset( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
				letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();