<?php
/**
 * Icon List Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes.
$id                 = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility         = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$items              = isset( $attrs['items'] ) ? $attrs['items'] : array();
$listLayout         = isset( $attrs['listLayout'] ) ? $attrs['listLayout'] : 'vertical';
$listAlign          = isset( $attrs['listAlign'] ) ? $attrs['listAlign'] : 'left';
$iconPosition       = isset( $attrs['iconPosition'] ) ? $attrs['iconPosition'] : 'before';
$iconSize           = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => 24,
	'tablet'  => '',
	'mobile'  => '',
);
$iconSpace          = isset( $attrs['iconSpace'] ) ? $attrs['iconSpace'] : array(
	'desktop' => 12,
	'tablet'  => '',
	'mobile'  => '',
);
$itemSpace          = isset( $attrs['itemSpace'] ) ? $attrs['itemSpace'] : array(
	'desktop' => 16,
	'tablet'  => '',
	'mobile'  => '',
);
$iconColor          = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#1e73be';
$iconHoverColor     = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$textColor          = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '';
$textHoverColor     = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor    = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$borderStyle        = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderColor        = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor   = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$hoverEffect        = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';

// Get spacing attributes with fallbacks
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');

$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 30,
		'left'   => 0,
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

// Border attributes
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
$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => 1.5,
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'px',
);

// Box shadow settings
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

// CSS Output
ob_start();
?>
/* Icon List Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
	<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php else : ?>
		border: none;
	<?php endif; ?>
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
	<?php if ( $backgroundColor ) : ?>
		background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	<?php endif; ?>
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover {
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

/* List container */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-wrapper {
	text-align: <?php echo esc_attr( $listAlign ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: <?php echo esc_attr( 'horizontal' === $listLayout ? 'row' : 'column' ); ?>;
	flex-wrap: wrap;
	justify-content: <?php echo esc_attr( 'center' === $listAlign ? 'center' : ( 'right' === $listAlign ? 'flex-end' : 'flex-start' ) ); ?>;
	gap: <?php echo esc_attr( $itemSpace['desktop'] . 'px' ); ?>;
}

/* List item */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item {
	display: inline-flex;
	align-items: center;
	justify-content: <?php echo esc_attr( 'center' === $listAlign ? 'center' : ( 'right' === $listAlign ? 'flex-end' : 'flex-start' ) ); ?>;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item:last-child {
	margin-bottom: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-child {
	display: inline-flex;
	<?php if ( 'after' === $iconPosition ) : ?>
		flex-direction: row-reverse;
	<?php endif; ?>
	gap: <?php echo esc_attr( $iconSpace['desktop'] . 'px' ); ?>;
	align-items: center;
}

/* Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-icon {
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: <?php echo esc_attr( $iconColor ); ?>;
	transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-icon span {
	display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-icon svg {
	width: <?php echo esc_attr( $iconSize['desktop'] . 'px' ); ?>;
	height: <?php echo esc_attr( $iconSize['desktop'] . 'px' ); ?>;
	fill: currentColor;
}

/* Text content */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-content {
    <?php if ( !empty($textColor) ) : ?>
	color: <?php echo esc_attr( $textColor ); ?>;
    <?php endif; ?>
	<?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( $contentTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
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
		line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( $contentTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( $contentTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
	<?php endif; ?>
	transition: color 0.3s ease;
}

/* Hover states */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item:hover .digiblocks-icon-list-icon {
	<?php if ( $iconHoverColor ) : ?>
		color: <?php echo esc_attr( $iconHoverColor ); ?>;
	<?php endif; ?>
}

<?php if ( $textHoverColor ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item:hover .digiblocks-icon-list-content {
		color: <?php echo esc_attr( $textHoverColor ); ?>;
	}
<?php endif; ?>

/* Link cursor for clickable items */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item a {
	cursor: pointer;
	text-decoration: none;
	color: inherit;
}

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list {
		gap: <?php echo esc_attr( $itemSpace['tablet'] . 'px' ); ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-child {
		gap: <?php echo esc_attr( $iconSpace['tablet'] . 'px' ); ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-icon svg {
		width: <?php echo esc_attr( $iconSize['tablet'] . 'px' ); ?>;
		height: <?php echo esc_attr( $iconSize['tablet'] . 'px' ); ?>;
	}
	
	<?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) || ! empty( $contentTypography['lineHeight']['tablet'] ) || ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-content {
			<?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
			<?php endif; ?>
			<?php if ( ! empty( $contentTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
			<?php endif; ?>
			<?php if ( ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
				letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list {
		gap: <?php echo esc_attr( $itemSpace['mobile'] . 'px' ); ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-child {
		gap: <?php echo esc_attr( $iconSpace['mobile'] . 'px' ); ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-icon svg {
		width: <?php echo esc_attr( $iconSize['mobile'] . 'px' ); ?>;
		height: <?php echo esc_attr( $iconSize['mobile'] . 'px' ); ?>;
	}
	
	<?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) || ! empty( $contentTypography['lineHeight']['mobile'] ) || ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-content {
			<?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
			<?php endif; ?>
			<?php if ( ! empty( $contentTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
			<?php endif; ?>
			<?php if ( ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
				letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
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