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
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$members                  = isset( $attrs['members'] ) ? $attrs['members'] : array();
$columns                  = isset( $attrs['columns'] ) ? $attrs['columns'] : array(
	'desktop' => 3,
	'tablet'  => 2,
	'mobile'  => 1,
);
$gutter                   = isset( $attrs['gutter'] ) ? $attrs['gutter'] : array(
	'desktop' => 30,
	'tablet'  => 20,
	'mobile'  => 15,
);
$layout                   = isset( $attrs['layout'] ) ? $attrs['layout'] : 'grid';
$alignment                = isset( $attrs['alignment'] ) ? $attrs['alignment'] : 'center';
$imageStyle               = isset( $attrs['imageStyle'] ) ? $attrs['imageStyle'] : 'circle';
$imageSize                = isset( $attrs['imageSize'] ) ? $attrs['imageSize'] : array(
	'desktop' => 150,
	'tablet'  => 120,
	'mobile'  => 100,
);
$imageBorderRadius        = isset( $attrs['imageBorderRadius'] ) ? $attrs['imageBorderRadius'] : array(
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
$imageBorderWidth         = isset( $attrs['imageBorderWidth'] ) ? $attrs['imageBorderWidth'] : digiblocks_get_default_dimensions('px');
$imageBorderColor         = isset( $attrs['imageBorderColor'] ) ? $attrs['imageBorderColor'] : '#e0e0e0';
$imageBorderStyle         = isset( $attrs['imageBorderStyle'] ) ? $attrs['imageBorderStyle'] : 'none';
$typography               = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 22,
		'tablet'  => 20,
		'mobile'  => 18,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
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
$textTypography           = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '400',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
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
$contentTypography        = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '400',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
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
$nameColor                = isset( $attrs['nameColor'] ) ? $attrs['nameColor'] : '#333333';
$positionColor            = isset( $attrs['positionColor'] ) ? $attrs['positionColor'] : '#666666';
$bioColor                 = isset( $attrs['bioColor'] ) ? $attrs['bioColor'] : '#666666';
$iconColor                = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#1e73be';
$iconHoverColor           = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '#135e9e';
$iconSize                 = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => 20,
	'tablet'  => 18,
	'mobile'  => 16,
);
$iconSpacing              = isset( $attrs['iconSpacing'] ) ? $attrs['iconSpacing'] : array(
	'desktop' => 10,
	'tablet'  => 8,
	'mobile'  => 6,
);
$iconBackgroundColor      = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : 'transparent';
$iconBackgroundHoverColor = isset( $attrs['iconBackgroundHoverColor'] ) ? $attrs['iconBackgroundHoverColor'] : '';
$iconBorderRadius         = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : array(
	'desktop' => array(
		'top'    => 50,
		'right'  => 50,
		'bottom' => 50,
		'left'   => 50,
		'unit'   => '%',
	),
	'tablet'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => '%',
	),
	'mobile'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => '%',
	),
);
$iconPadding              = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : array(
	'desktop' => array(
		'top'    => 8,
		'right'  => 8,
		'bottom' => 8,
		'left'   => 8,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 6,
		'right'  => 6,
		'bottom' => 6,
		'left'   => 6,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 4,
		'right'  => 4,
		'bottom' => 4,
		'left'   => 4,
		'unit'   => 'px',
	),
);
$boxBackgroundColor       = isset( $attrs['boxBackgroundColor'] ) ? $attrs['boxBackgroundColor'] : '#ffffff';
$boxBorderColor           = isset( $attrs['boxBorderColor'] ) ? $attrs['boxBorderColor'] : '#e0e0e0';
$boxBorderRadius          = isset( $attrs['boxBorderRadius'] ) ? $attrs['boxBorderRadius'] : array(
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
$boxBorderWidth           = isset( $attrs['boxBorderWidth'] ) ? $attrs['boxBorderWidth'] : array(
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
$boxBorderStyle           = isset( $attrs['boxBorderStyle'] ) ? $attrs['boxBorderStyle'] : 'solid';
$boxPadding               = isset( $attrs['boxPadding'] ) ? $attrs['boxPadding'] : array(
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
$boxMargin                = isset( $attrs['boxMargin'] ) ? $attrs['boxMargin'] : array(
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
$boxShadow                = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.1)',
	'horizontal' => 0,
	'vertical'   => 5,
	'blur'       => 15,
	'spread'     => 0,
	'position'   => 'outset',
);
$boxShadowHover           = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 10,
	'blur'       => 25,
	'spread'     => 0,
	'position'   => 'outset',
);
$showName                 = isset( $attrs['showName'] ) ? (bool) $attrs['showName'] : true;
$showPosition             = isset( $attrs['showPosition'] ) ? (bool) $attrs['showPosition'] : true;
$showBio                  = isset( $attrs['showBio'] ) ? (bool) $attrs['showBio'] : true;
$showSocial               = isset( $attrs['showSocial'] ) ? (bool) $attrs['showSocial'] : true;

// Calculate column width based on number of columns and gutter
$column_width_desktop = "calc((100% - " . ( ( $columns['desktop'] - 1 ) * $gutter['desktop'] ) . "px) / " . $columns['desktop'] . ")";
$column_width_tablet  = "calc((100% - " . ( ( $columns['tablet'] - 1 ) * $gutter['tablet'] ) . "px) / " . $columns['tablet'] . ")";
$column_width_mobile  = "calc((100% - " . ( ( $columns['mobile'] - 1 ) * $gutter['mobile'] ) . "px) / " . $columns['mobile'] . ")";

// Get image border radius based on style or custom values
$image_border_radius_value_desktop = '';
$image_border_radius_value_tablet  = '';
$image_border_radius_value_mobile  = '';

if ( 'circle' === $imageStyle ) {
	$image_border_radius_value_desktop = 'border-radius: 50%;';
	$image_border_radius_value_tablet  = 'border-radius: 50%;';
	$image_border_radius_value_mobile  = 'border-radius: 50%;';
} elseif ( 'square' === $imageStyle ) {
	$image_border_radius_value_desktop = 'border-radius: 0;';
	$image_border_radius_value_tablet  = 'border-radius: 0;';
	$image_border_radius_value_mobile  = 'border-radius: 0;';
} elseif ( 'rounded' === $imageStyle ) {
	$image_border_radius_value_desktop = 'border-radius: 8px;';
	$image_border_radius_value_tablet  = 'border-radius: 8px;';
	$image_border_radius_value_mobile  = 'border-radius: 8px;';
} else {
	$image_border_radius_value_desktop = digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'desktop' );
	$image_border_radius_value_tablet  = digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'tablet' );
	$image_border_radius_value_mobile  = digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'mobile' );
}

// CSS Output
ob_start();
?>
/* Team Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $boxMargin, 'margin', 'desktop' ) ); ?>
}

/* Grid Layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-container {
    display: flex;
    flex-wrap: wrap;
    gap: <?php echo esc_attr( $gutter['desktop'] ); ?>px;
    justify-content: <?php echo 'center' === $alignment ? 'center' : ( 'right' === $alignment ? 'flex-end' : 'flex-start' ); ?>;
}

/* List Layout */
.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-container {
	display: flex;
	flex-direction: column;
	gap: <?php echo esc_attr( $gutter['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member {
	display: flex;
	align-items: center;
	width: 100%;
	gap: <?php echo esc_attr( $gutter['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member-image {
	margin: 0;
}

.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member-content {
	text-align: left !important;
}

.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member-social {
	justify-content: flex-start;
}

/* Team Member */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member {
	display: flex;
    align-items: <?php echo 'center' === $alignment ? 'center' : ( 'right' === $alignment ? 'flex-end' : 'flex-start' ); ?>;
    gap: 15px;
    <?php if ( 'grid' === $layout ) : ?>
    flex-direction: column;
    width: <?php echo esc_attr( $column_width_desktop ); ?>;
    <?php endif; ?>
    text-align: <?php echo esc_attr( $alignment ); ?>;
	background-color: <?php echo esc_attr( $boxBackgroundColor ); ?>;
    <?php if ( 'none' !== $boxBorderStyle ) : ?>
    border-style: <?php echo esc_attr( $boxBorderStyle ); ?>;
    border-color: <?php echo esc_attr( $boxBorderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'desktop' ) ); ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'desktop' ) ); ?>
    transition: all 0.3s ease;
}

/* Hover effects */
<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member:hover {
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
}
<?php endif; ?>

/* Team Member Image */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-image {
    width: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
	max-width: 100%;
    <?php echo esc_attr( $image_border_radius_value_desktop ); ?>
    overflow: hidden;
    display: flex;
    <?php if ( 'none' !== $imageBorderStyle ) : ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderWidth, 'border-width', 'desktop' ) ); ?>
	border-style: <?php echo esc_attr( $imageBorderStyle ); ?>;
	border-color: <?php echo esc_attr( $imageBorderColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Team Member Name */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-name {
    color: <?php echo esc_attr( $nameColor ); ?>;
	margin-top: 0;
    margin-bottom: 5px;
    <?php if ( ! empty( $typography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $typography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop'] . ( isset( $typography['fontSizeUnit'] ) ? $typography['fontSizeUnit'] : 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $typography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $typography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $typography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $typography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . ( isset( $typography['lineHeightUnit'] ) ? $typography['lineHeightUnit'] : 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . ( isset( $typography['letterSpacingUnit'] ) ? $typography['letterSpacingUnit'] : 'px' ) ); ?>;
    <?php endif; ?>
}

/* Team Member Position */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-position {
    color: <?php echo esc_attr( $positionColor ); ?>;
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
    <?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ( isset( $textTypography['letterSpacingUnit'] ) ? $textTypography['letterSpacingUnit'] : 'px' ) ); ?>;
    <?php endif; ?>
}

/* Team Member Bio */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-bio {
    color: <?php echo esc_attr( $bioColor ); ?>;
    margin-bottom: <?php echo $showSocial ? '15px' : '0'; ?>;
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
    <?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( isset( $contentTypography['letterSpacingUnit'] ) ? $contentTypography['letterSpacingUnit'] : 'px' ) ); ?>;
    <?php endif; ?>
}

/* Team Member Social */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social {
    display: flex;
    justify-content: <?php echo 'center' === $alignment ? 'center' : ( 'right' === $alignment ? 'flex-end' : 'flex-start' ); ?>;
    gap: <?php echo esc_attr( $iconSpacing['desktop'] ); ?>px;
    flex-wrap: wrap;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon {
    color: <?php echo esc_attr( $iconColor ); ?>;
    display: flex;
    align-items: center;
    justify-content: center;
    <?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'desktop' ) ); ?>
    background-color: <?php echo esc_attr( $iconBackgroundColor ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'desktop' ) ); ?>
    transition: all 0.3s ease;
    cursor: pointer;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon:hover {
    color: <?php echo esc_attr( $iconHoverColor ); ?>;
    <?php if ( $iconBackgroundHoverColor ) : ?>
    background-color: <?php echo esc_attr( $iconBackgroundHoverColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon svg {
	width: <?php echo !empty($iconSize['desktop']) ? esc_attr($iconSize['desktop']) . 'px' : '1.2rem'; ?>;
    height: <?php echo !empty($iconSize['desktop']) ? esc_attr($iconSize['desktop']) . 'px' : '1.2rem'; ?>;
    fill: currentColor;
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $boxMargin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-container {
        gap: <?php echo esc_attr( $gutter['tablet'] ); ?>px;
    }

	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-container {
		gap: <?php echo esc_attr( $gutter['tablet'] ); ?>px;
	}

	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member {
		gap: <?php echo esc_attr( $gutter['tablet'] ); ?>px;
	}
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member {
        <?php if ( 'grid' === $layout ) : ?>
        width: <?php echo esc_attr( $column_width_tablet ); ?>;
        <?php endif; ?>
		<?php if ( 'none' !== $boxBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-image {
        width: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
        height: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
        <?php echo esc_attr( $image_border_radius_value_tablet ); ?>
        <?php if ( 'none' !== $imageBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
    }
    
    <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-name {
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( isset( $typography['fontSizeUnit'] ) ? $typography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( isset( $typography['lineHeightUnit'] ) ? $typography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( isset( $typography['letterSpacingUnit'] ) ? $typography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-position {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( isset( $textTypography['fontSizeUnit'] ) ? $textTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php if ( ! empty( $textTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( isset( $textTypography['lineHeightUnit'] ) ? $textTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ( isset( $textTypography['letterSpacingUnit'] ) ? $textTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-bio {
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( isset( $contentTypography['fontSizeUnit'] ) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php if ( ! empty( $contentTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( isset( $contentTypography['lineHeightUnit'] ) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( isset( $contentTypography['letterSpacingUnit'] ) ? $contentTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social {
        gap: <?php echo esc_attr( $iconSpacing['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon {
        <?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon svg {
        width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
        height: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
    }
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $boxMargin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-container {
        gap: <?php echo esc_attr( $gutter['mobile'] ); ?>px;
    }
    
	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-container {
		gap: <?php echo esc_attr( $gutter['mobile'] ); ?>px;
	}

	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member {
		gap: <?php echo esc_attr( $gutter['mobile'] ); ?>px;
	}
    
	.<?php echo esc_attr( $id ); ?> .digiblocks-team-member {
    	<?php if ( 'grid' === $layout ) : ?>
		width: <?php echo esc_attr( $column_width_mobile ); ?>;
		<?php endif; ?>
		<?php if ( 'none' !== $boxBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'mobile' ) ); ?>
	}
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-image {
        width: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
        <?php echo esc_attr( $image_border_radius_value_mobile ); ?>
        <?php if ( 'none' !== $imageBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
    }
    
    <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-name {
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( isset( $typography['fontSizeUnit'] ) ? $typography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( isset( $typography['lineHeightUnit'] ) ? $typography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( isset( $typography['letterSpacingUnit'] ) ? $typography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-position {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( isset( $textTypography['fontSizeUnit'] ) ? $textTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php if ( ! empty( $textTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( isset( $textTypography['lineHeightUnit'] ) ? $textTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ( isset( $textTypography['letterSpacingUnit'] ) ? $textTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-bio {
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( isset( $contentTypography['fontSizeUnit'] ) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php if ( ! empty( $contentTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( isset( $contentTypography['lineHeightUnit'] ) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( isset( $contentTypography['letterSpacingUnit'] ) ? $contentTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social {
        gap: <?php echo esc_attr( $iconSpacing['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon {
        <?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon svg {
        width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
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