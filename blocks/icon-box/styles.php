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
$id                           = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$iconColor                    = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : null;
$iconBackgroundColor          = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : null;
$iconBorderStyle              = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'default';
$iconBorderWidth              = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : array(
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
$iconBorderRadius             = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : digiblocks_get_default_dimensions('px');
$iconBorderColor              = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : null;
$iconPadding                  = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : digiblocks_get_default_dimensions('px');
$iconMargin                   = isset( $attrs['iconMargin'] ) ? $attrs['iconMargin'] : array(
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
$iconHoverColor               = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : null;
$iconHoverBackgroundColor     = isset( $attrs['iconHoverBackgroundColor'] ) ? $attrs['iconHoverBackgroundColor'] : null;
$iconHoverBorderColor         = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : null;
$showTitle                    = isset( $attrs['showTitle'] ) ? $attrs['showTitle'] : true;
$showContent                  = isset( $attrs['showContent'] ) ? $attrs['showContent'] : true;
$titleColor                   = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
$titleHoverColor              = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$textColor                    = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$textHoverColor               = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor              = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$backgroundHoverColor         = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$align                        = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                    = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$hoverEffect                  = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle                  = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor                  = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$linkEnabled                  = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;
$linkType                     = isset( $attrs['linkType'] ) ? $attrs['linkType'] : 'box';

// Button specific attributes
$buttonText                   = isset( $attrs['buttonText'] ) ? $attrs['buttonText'] : __('Learn More', 'digiblocks');
$buttonBackgroundColor        = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#1e73be';
$buttonBackgroundHoverColor   = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#135e9e';
$buttonTextColor              = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonTextHoverColor         = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$buttonBorderStyle            = isset( $attrs['buttonBorderStyle'] ) ? $attrs['buttonBorderStyle'] : 'default';
$buttonBorderWidth            = isset( $attrs['buttonBorderWidth'] ) ? $attrs['buttonBorderWidth'] : array(
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
$buttonBorderRadius           = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : array(
	'desktop' => array(
		'top'    => 4,
		'right'  => 4,
		'bottom' => 4,
		'left'   => 4,
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
$buttonBorderColor            = isset( $attrs['buttonBorderColor'] ) ? $attrs['buttonBorderColor'] : '';
$buttonBorderHoverColor       = isset( $attrs['buttonBorderHoverColor'] ) ? $attrs['buttonBorderHoverColor'] : '';
$buttonBoxShadow              = isset( $attrs['buttonBoxShadow'] ) ? $attrs['buttonBoxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$buttonBoxShadowHover         = isset( $attrs['buttonBoxShadowHover'] ) ? $attrs['buttonBoxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$buttonPadding                = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : array(
	'desktop' => array(
		'top'    => 10,
		'right'  => 20,
		'bottom' => 10,
		'left'   => 20,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 8, 
		'right'  => 16,
		'bottom' => 8,
		'left'   => 16,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 6,
		'right'  => 12,
		'bottom' => 6,
		'left'   => 12,
		'unit'   => 'px',
	),
);
$buttonMargin                 = isset( $attrs['buttonMargin'] ) ? $attrs['buttonMargin'] : array(
	'desktop' => array(
		'top'    => 15,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 10,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 8,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
);
$buttonTypography             = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '500',
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
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php else : ?>
		border-style: none;
	<?php endif; ?>
	
	/* Always apply border radius even if no border */
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>

	/* Box Shadow */
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>

	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
	text-align: <?php echo esc_attr( $align ); ?>;
	transition: all 0.3s ease;
	<?php if ( $linkEnabled && 'box' === $linkType ) : ?>
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

/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
	<?php if ( $iconMargin && isset( $iconMargin['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'desktop' ) ); ?>
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
		<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'desktop' ) ); ?>
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

<?php if ( $showTitle ) : ?>
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
<?php endif; ?>

<?php if ( $showContent ) : ?>
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
<?php endif; ?>

<?php if ( $linkEnabled && 'button' === $linkType ) : ?>
/* Button styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-button-wrapper {
	display: flex;
	justify-content: <?php echo esc_attr( $align === 'center' ? 'center' : ( $align === 'right' ? 'flex-end' : 'flex-start' ) ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonMargin, 'margin', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-button {
	display: inline-block;
	background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
	color: <?php echo esc_attr( $buttonTextColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
	
	<?php if ( $buttonBorderStyle && 'default' !== $buttonBorderStyle && 'none' !== $buttonBorderStyle ) : ?>
		border-style: <?php echo esc_attr( $buttonBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $buttonBorderColor ? $buttonBorderColor : $buttonBackgroundColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'desktop' ) ); ?>
	<?php else : ?>
		border-style: none;
	<?php endif; ?>
	
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
	
	<?php if ( isset( $buttonBoxShadow['enable'] ) && $buttonBoxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $buttonBoxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
	
	<?php if ( ! empty( $buttonTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $buttonTypography['fontFamily'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $buttonTypography['fontWeight'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['fontStyle'] ) ) : ?>
		font-style: <?php echo esc_attr( $buttonTypography['fontStyle'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['textTransform'] ) ) : ?>
		text-transform: <?php echo esc_attr( $buttonTypography['textTransform'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['textDecoration'] ) ) : ?>
		text-decoration: <?php echo esc_attr( $buttonTypography['textDecoration'] ); ?>;
	<?php endif; ?>

	<?php if ( ! empty( $buttonTypography['lineHeight']['desktop'] ) ) : ?>
		line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	
	text-decoration: none;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-button:hover {
	<?php if ( $buttonBackgroundHoverColor ) : ?>
		background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $buttonTextHoverColor ) : ?>
		color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $buttonBorderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $buttonBorderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $buttonBoxShadowHover['enable'] ) && $buttonBoxShadowHover['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $buttonBoxShadowHover ) ); ?>;
	<?php endif; ?>
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php endif; ?>
		<?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		<?php endif; ?>
				
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet']) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
		
		<?php if ( isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php endif; ?>
	}

	<?php if ( isset( $iconSize['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
			width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
		}
	<?php endif; ?>
		
	<?php if ( $iconMargin && isset( $iconMargin['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'tablet' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconPadding && isset( $iconPadding['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'tablet' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['tablet']) && isset( $iconBorderRadius['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
		}
	<?php endif; ?>

	<?php if ( $showTitle ) : ?>
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
	<?php endif; ?>

	<?php if ( $showContent ) : ?>
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
	<?php endif; ?>
	
	<?php if ( $linkEnabled && 'button' === $linkType ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-button-wrapper {
			<?php if ( isset( $buttonMargin['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonMargin, 'margin', 'tablet' ) ); ?>
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-button {
			<?php if ( isset( $buttonPadding['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'tablet' ) ); ?>
			<?php endif; ?>
			
			<?php if ( $buttonBorderStyle && 'default' !== $buttonBorderStyle && 'none' !== $buttonBorderStyle && isset( $buttonBorderWidth['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'tablet' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonBorderRadius['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'tablet' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonTypography['fontSize']['tablet'] ) || isset( $buttonTypography['lineHeight']['tablet'] ) || isset( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
				<?php if ( isset( $buttonTypography['fontSize']['tablet'] ) ) : ?>
					font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['lineHeight']['tablet'] ) ) : ?>
					line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
				<?php endif; ?>
			<?php endif; ?>
		}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php endif; ?>
		<?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		<?php endif; ?>
				
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
		
		<?php if ( isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php endif; ?>
    }
    
	<?php if ( isset( $iconSize['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
			width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
		}
	<?php endif; ?>
		
	<?php if ( $iconMargin && isset( $iconMargin['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'mobile' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconPadding && isset( $iconPadding['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'mobile' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['mobile']) && isset( $iconBorderRadius['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
		}
	<?php endif; ?>
    
	<?php if ( $showTitle ) : ?>
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
	<?php endif; ?>

	<?php if ( $showContent ) : ?>
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
	<?php endif; ?>
	
	<?php if ( $linkEnabled && 'button' === $linkType ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-button-wrapper {
			<?php if ( isset( $buttonMargin['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonMargin, 'margin', 'mobile' ) ); ?>
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-button {
			<?php if ( isset( $buttonPadding['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
			<?php endif; ?>
			
			<?php if ( $buttonBorderStyle && 'default' !== $buttonBorderStyle && 'none' !== $buttonBorderStyle && isset( $buttonBorderWidth['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'mobile' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonBorderRadius['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonTypography['fontSize']['mobile'] ) || isset( $buttonTypography['lineHeight']['mobile'] ) || isset( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
				<?php if ( isset( $buttonTypography['fontSize']['mobile'] ) ) : ?>
					font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
					line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
				<?php endif; ?>
			<?php endif; ?>
		}
	<?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();