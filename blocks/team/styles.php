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
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
$members                  = isset( $attrs['members'] ) ? $attrs['members'] : array();
$columns                  = isset( $attrs['columns'] ) ? $attrs['columns'] : array(
	'desktop' => 3,
	'tablet'  => 2,
	'mobile'  => 1,
);
$gutter                   = isset( $attrs['gutter'] ) ? $attrs['gutter'] : array(
	'desktop' => 30,
	'tablet'  => '',
	'mobile'  => '',
);
$layout                   = isset( $attrs['layout'] ) ? $attrs['layout'] : 'grid';
$alignment                = isset( $attrs['alignment'] ) ? $attrs['alignment'] : 'center';
$imageStyle               = isset( $attrs['imageStyle'] ) ? $attrs['imageStyle'] : 'circle';
$imageSize                = isset( $attrs['imageSize'] ) ? $attrs['imageSize'] : array(
	'desktop' => 150,
	'tablet'  => '',
	'mobile'  => '',
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
	'fontSize' => array(
		'desktop' => array('value' => 22, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
	'lineHeight' => array(
		'desktop' => array('value' => 1.5, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
	'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);
$textTypography           = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
	'fontFamily'        => '',
	'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
	'fontWeight'        => '400',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
	'lineHeight' => array(
		'desktop' => array('value' => 1.5, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
	'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);
$contentTypography        = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
	'fontWeight'        => '400',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
	'lineHeight' => array(
		'desktop' => array('value' => 1.5, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
	'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);
$nameColor                = isset( $attrs['nameColor'] ) ? $attrs['nameColor'] : '#333333';
$positionColor            = isset( $attrs['positionColor'] ) ? $attrs['positionColor'] : '#666666';
$bioColor                 = isset( $attrs['bioColor'] ) ? $attrs['bioColor'] : '#666666';
$iconColor                = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#1e73be';
$iconHoverColor           = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '#135e9e';
$iconSize                 = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => 20,
	'tablet'  => '',
	'mobile'  => '',
);
$iconSpacing              = isset( $attrs['iconSpacing'] ) ? $attrs['iconSpacing'] : array(
	'desktop' => 10,
	'tablet'  => '',
	'mobile'  => '',
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
$boxMargin                = isset( $attrs['boxMargin'] ) ? $attrs['boxMargin'] : array(
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
$gutter_desktop = !empty($gutter['desktop']) ? $gutter['desktop'] : 30;
$gutter_tablet = !empty($gutter['tablet']) ? $gutter['tablet'] : $gutter_desktop;
$gutter_mobile = !empty($gutter['mobile']) ? $gutter['mobile'] : $gutter_tablet;

$column_width_desktop = "calc((100% - " . ( ( $columns['desktop'] - 1 ) * $gutter_desktop ) . "px) / " . $columns['desktop'] . ")";
$column_width_tablet  = "calc((100% - " . ( ( $columns['tablet'] - 1 ) * $gutter_tablet ) . "px) / " . $columns['tablet'] . ")";
$column_width_mobile  = "calc((100% - " . ( ( $columns['mobile'] - 1 ) * $gutter_mobile ) . "px) / " . $columns['mobile'] . ")";

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
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
        <?php
            endif;
        endif;
        ?>
    <?php endif; ?>
    <?php if ( '' !== $zIndex && null !== $zIndex ) : ?>
        z-index: <?php echo esc_attr( $zIndex ); ?>;
    <?php endif; ?>
	<?php
    $transform_value = digiblocks_get_transform_css( $transform, 'desktop' );
    if ( ! empty( $transform_value ) ) :
    ?>
    transform: <?php echo esc_attr( $transform_value ); ?>;
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'desktop' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $transformHover ) && isset( $transformHover['transitionDuration'] ) && '' !== $transformHover['transitionDuration'] && null !== $transformHover['transitionDuration'] ) : ?>
	transition: all <?php echo esc_attr( $transformHover['transitionDuration'] ); ?>ms ease;
	<?php endif; ?>
}

<?php
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
}
<?php endif; ?>

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
	flex: 1;
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
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['desktop'] ) && isset( $typography['fontSize']['desktop']['value'] ) && $typography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['desktop']['value'] ) ? $typography['fontSize']['desktop']['value'] : '' ) . (isset($typography['fontSize']['desktop']['unit']) ? $typography['fontSize']['desktop']['unit'] : 'px') ); ?>;
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
    <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['desktop'] ) && isset( $typography['lineHeight']['desktop']['value'] ) && $typography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['desktop']['value'] ) ? $typography['lineHeight']['desktop']['value'] : '' ) . (isset($typography['lineHeight']['desktop']['unit']) ? $typography['lineHeight']['desktop']['unit'] : 'em') ); ?>;
    <?php endif; ?>
    <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['desktop'] ) && isset( $typography['letterSpacing']['desktop']['value'] ) && $typography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['desktop']['value'] ) ? $typography['letterSpacing']['desktop']['value'] : '' ) . (isset($typography['letterSpacing']['desktop']['unit']) ? $typography['letterSpacing']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
}

/* Team Member Position */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-position {
    color: <?php echo esc_attr( $positionColor ); ?>;
    margin-bottom: 10px;
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) && $textTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) ? $textTypography['fontSize']['desktop']['value'] : '' ) . (isset($textTypography['fontSize']['desktop']['unit']) ? $textTypography['fontSize']['desktop']['unit'] : 'px') ); ?>;
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
    <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['desktop'] ) && isset( $textTypography['lineHeight']['desktop']['value'] ) && $textTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['desktop']['value'] ) ? $textTypography['lineHeight']['desktop']['value'] : '' ) . (isset($textTypography['lineHeight']['desktop']['unit']) ? $textTypography['lineHeight']['desktop']['unit'] : 'em') ); ?>;
    <?php endif; ?>
    <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['desktop'] ) && isset( $textTypography['letterSpacing']['desktop']['value'] ) && $textTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['desktop']['value'] ) ? $textTypography['letterSpacing']['desktop']['value'] : '' ) . (isset($textTypography['letterSpacing']['desktop']['unit']) ? $textTypography['letterSpacing']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
}

/* Team Member Bio */
.<?php echo esc_attr( $id ); ?> .digiblocks-team-member-bio {
    color: <?php echo esc_attr( $bioColor ); ?>;
    margin-bottom: <?php echo $showSocial ? '15px' : '0'; ?>;
    <?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) && $contentTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) ? $contentTypography['fontSize']['desktop']['value'] : '' ) . (isset($contentTypography['fontSize']['desktop']['unit']) ? $contentTypography['fontSize']['desktop']['unit'] : 'px') ); ?>;
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
    <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['desktop'] ) && isset( $contentTypography['lineHeight']['desktop']['value'] ) && $contentTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['desktop']['value'] ) ? $contentTypography['lineHeight']['desktop']['value'] : '' ) . (isset($contentTypography['lineHeight']['desktop']['unit']) ? $contentTypography['lineHeight']['desktop']['unit'] : 'em') ); ?>;
    <?php endif; ?>
    <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) && $contentTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) ? $contentTypography['letterSpacing']['desktop']['value'] : '' ) . (isset($contentTypography['letterSpacing']['desktop']['unit']) ? $contentTypography['letterSpacing']['desktop']['unit'] : 'px') ); ?>;
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
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '';
            $h_unit_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '';
            $v_unit_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
            if ( '' !== $v_value_tablet ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_tablet = digiblocks_get_transform_css( $transform, 'tablet' );
        if ( ! empty( $transform_value_tablet ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_tablet ); ?>;
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'tablet' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'tablet' ) ); ?>;
		}
	<?php endif; ?>
    
    <?php if ( ! empty( $gutter['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-container {
        gap: <?php echo esc_attr( $gutter['tablet'] ); ?>px;
    }

	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-container {
		gap: <?php echo esc_attr( $gutter['tablet'] ); ?>px;
	}

	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member {
		gap: <?php echo esc_attr( $gutter['tablet'] ); ?>px;
	}
    <?php endif; ?>
    
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
		<?php if ( ! empty( $imageSize['tablet'] ) ) : ?>
        width: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
        height: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( $image_border_radius_value_tablet ); ?>
        <?php if ( 'none' !== $imageBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
    }
    
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['tablet'] ) && isset( $typography['fontSize']['tablet']['value'] ) && $typography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-name {
        font-size: <?php echo esc_attr( ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['tablet']['value'] ) ? $typography['fontSize']['tablet']['value'] : '' ) . (isset($typography['fontSize']['tablet']['unit']) ? $typography['fontSize']['tablet']['unit'] : 'px') ); ?>;
        <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['tablet'] ) && isset( $typography['lineHeight']['tablet']['value'] ) && $typography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['tablet']['value'] ) ? $typography['lineHeight']['tablet']['value'] : '' ) . (isset($typography['lineHeight']['tablet']['unit']) ? $typography['lineHeight']['tablet']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['tablet'] ) && isset( $typography['letterSpacing']['tablet']['value'] ) && $typography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['tablet']['value'] ) ? $typography['letterSpacing']['tablet']['value'] : '' ) . (isset($typography['letterSpacing']['tablet']['unit']) ? $typography['letterSpacing']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) && $textTypography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-position {
        font-size: <?php echo esc_attr( ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) ? $textTypography['fontSize']['tablet']['value'] : '' ) . (isset($textTypography['fontSize']['tablet']['unit']) ? $textTypography['fontSize']['tablet']['unit'] : 'px') ); ?>;
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['tablet'] ) && isset( $textTypography['lineHeight']['tablet']['value'] ) && $textTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['tablet']['value'] ) ? $textTypography['lineHeight']['tablet']['value'] : '' ) . (isset($textTypography['lineHeight']['tablet']['unit']) ? $textTypography['lineHeight']['tablet']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['tablet'] ) && isset( $textTypography['letterSpacing']['tablet']['value'] ) && $textTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['tablet']['value'] ) ? $textTypography['letterSpacing']['tablet']['value'] : '' ) . (isset($textTypography['letterSpacing']['tablet']['unit']) ? $textTypography['letterSpacing']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) && $contentTypography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-bio {
        font-size: <?php echo esc_attr( ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) ? $contentTypography['fontSize']['tablet']['value'] : '' ) . (isset($contentTypography['fontSize']['tablet']['unit']) ? $contentTypography['fontSize']['tablet']['unit'] : 'px') ); ?>;
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) && $contentTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) ? $contentTypography['lineHeight']['tablet']['value'] : '' ) . (isset($contentTypography['lineHeight']['tablet']['unit']) ? $contentTypography['lineHeight']['tablet']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) && $contentTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) ? $contentTypography['letterSpacing']['tablet']['value'] : '' ) . (isset($contentTypography['letterSpacing']['tablet']['unit']) ? $contentTypography['letterSpacing']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( ! empty( $iconSpacing['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social {
        gap: <?php echo esc_attr( $iconSpacing['tablet'] ); ?>px;
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon {
        <?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'tablet' ) ); ?>
    }
    
    <?php if ( ! empty( $iconSize['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon svg {
        width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
        height: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
    }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $boxMargin, 'margin', 'mobile' ) ); ?>
    	<?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '';
            $h_unit_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '';
            $v_unit_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
            if ( '' !== $v_value_mobile ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_mobile = digiblocks_get_transform_css( $transform, 'mobile' );
        if ( ! empty( $transform_value_mobile ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_mobile ); ?>;
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'mobile' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'mobile' ) ); ?>;
		}
	<?php endif; ?>
    
    <?php if ( ! empty( $gutter['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-container {
        gap: <?php echo esc_attr( $gutter['mobile'] ); ?>px;
    }
    
	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-container {
		gap: <?php echo esc_attr( $gutter['mobile'] ); ?>px;
	}

	.<?php echo esc_attr( $id ); ?>.layout-list .digiblocks-team-member {
		gap: <?php echo esc_attr( $gutter['mobile'] ); ?>px;
	}
    <?php endif; ?>
    
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
		<?php if ( ! empty( $imageSize['mobile'] ) ) : ?>
        width: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( $image_border_radius_value_mobile ); ?>
        <?php if ( 'none' !== $imageBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
    }
    
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['mobile'] ) && isset( $typography['fontSize']['mobile']['value'] ) && $typography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-name {
        font-size: <?php echo esc_attr( ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['mobile']['value'] ) ? $typography['fontSize']['mobile']['value'] : '' ) . (isset($typography['fontSize']['mobile']['unit']) ? $typography['fontSize']['mobile']['unit'] : 'px') ); ?>;
        <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['mobile'] ) && isset( $typography['lineHeight']['mobile']['value'] ) && $typography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['mobile']['value'] ) ? $typography['lineHeight']['mobile']['value'] : '' ) . (isset($typography['lineHeight']['mobile']['unit']) ? $typography['lineHeight']['mobile']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['mobile'] ) && isset( $typography['letterSpacing']['mobile']['value'] ) && $typography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['mobile']['value'] ) ? $typography['letterSpacing']['mobile']['value'] : '' ) . (isset($typography['letterSpacing']['mobile']['unit']) ? $typography['letterSpacing']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) && $textTypography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-position {
        font-size: <?php echo esc_attr( ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) ? $textTypography['fontSize']['mobile']['value'] : '' ) . (isset($textTypography['fontSize']['mobile']['unit']) ? $textTypography['fontSize']['mobile']['unit'] : 'px') ); ?>;
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['mobile'] ) && isset( $textTypography['lineHeight']['mobile']['value'] ) && $textTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['mobile']['value'] ) ? $textTypography['lineHeight']['mobile']['value'] : '' ) . (isset($textTypography['lineHeight']['mobile']['unit']) ? $textTypography['lineHeight']['mobile']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['mobile'] ) && isset( $textTypography['letterSpacing']['mobile']['value'] ) && $textTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['mobile']['value'] ) ? $textTypography['letterSpacing']['mobile']['value'] : '' ) . (isset($textTypography['letterSpacing']['mobile']['unit']) ? $textTypography['letterSpacing']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) && $contentTypography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-bio {
        font-size: <?php echo esc_attr( ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) ? $contentTypography['fontSize']['mobile']['value'] : '' ) . (isset($contentTypography['fontSize']['mobile']['unit']) ? $contentTypography['fontSize']['mobile']['unit'] : 'px') ); ?>;
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) && $contentTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) ? $contentTypography['lineHeight']['mobile']['value'] : '' ) . (isset($contentTypography['lineHeight']['mobile']['unit']) ? $contentTypography['lineHeight']['mobile']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) && $contentTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) ? $contentTypography['letterSpacing']['mobile']['value'] : '' ) . (isset($contentTypography['letterSpacing']['mobile']['unit']) ? $contentTypography['letterSpacing']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( ! empty( $iconSpacing['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social {
        gap: <?php echo esc_attr( $iconSpacing['mobile'] ); ?>px;
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon {
        <?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'mobile' ) ); ?>
    }
    
    <?php if ( ! empty( $iconSize['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-team-member-social-icon svg {
        width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
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