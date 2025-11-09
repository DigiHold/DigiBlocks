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
$items              = isset( $attrs['items'] ) ? $attrs['items'] : array();
$listLayout         = isset( $attrs['listLayout'] ) ? $attrs['listLayout'] : [
	'desktop' => 'vertical',
	'tablet'  => '',
	'mobile'  => '',
];
$listAlign          = isset( $attrs['listAlign'] ) ? $attrs['listAlign'] : [
	'desktop' => 'left',
	'tablet'  => '',
	'mobile'  => '',
];
$columns            = isset( $attrs['columns'] ) ? $attrs['columns'] : [
	'desktop' => 1,
	'tablet'  => '',
	'mobile'  => '',
];
$iconPosition       = isset( $attrs['iconPosition'] ) ? $attrs['iconPosition'] : 'before';
$removeText         = isset( $attrs['removeText'] ) ? $attrs['removeText'] : false;
$iconWidth          = isset( $attrs['iconWidth'] ) ? $attrs['iconWidth'] : 'custom';
$iconSize           = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => array( 'value' => 24, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$iconSpace          = isset( $attrs['iconSpace'] ) ? $attrs['iconSpace'] : array(
	'desktop' => array( 'value' => 12, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$itemSpace          = isset( $attrs['itemSpace'] ) ? $attrs['itemSpace'] : array(
	'desktop' => array( 'value' => 16, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
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
	'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
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
	<?php else : ?>
    transition: all 0.3s ease;
	<?php endif; ?>
}

<?php
$has_background_hover = ! empty( $backgroundHoverColor );
$has_border_hover     = ! empty( $borderHoverColor );
$has_box_shadow_hover = isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'];
$has_hover_effect     = ! empty( $hoverEffect );

$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
$has_transform_hover   = ! empty( $transform_hover_value ) && ! in_array( $hoverEffect, array( 'lift', 'scale' ), true );

if ( $has_background_hover || $has_border_hover || $has_box_shadow_hover || $has_hover_effect || $has_transform_hover ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
	<?php if ( $has_background_hover ) : ?>
		background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	<?php endif; ?>

	<?php if ( $has_border_hover ) : ?>
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>

	<?php if ( $has_box_shadow_hover ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	<?php endif; ?>

	<?php if ( 'lift' === $hoverEffect ) : ?>
		transform: translateY(-10px);
	<?php elseif ( 'scale' === $hoverEffect ) : ?>
		transform: scale(1.05);
	<?php elseif ( 'glow' === $hoverEffect ) : ?>
		filter: brightness(1.1);
	<?php endif; ?>

	<?php if ( $has_transform_hover ) : ?>
		transform: <?php echo esc_attr( $transform_hover_value ); ?>;
		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
	<?php endif; ?>
}
<?php endif; ?>

/* List container */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-wrapper {
	text-align: <?php echo esc_attr( $listAlign['desktop'] ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: <?php echo esc_attr( 'center' === $listAlign['desktop'] ? 'center' : ( 'right' === $listAlign['desktop'] ? 'flex-end' : 'flex-start' ) ); ?>;
	gap: <?php
		$item_space_val = isset( $itemSpace['desktop']['value'] ) && '' !== $itemSpace['desktop']['value'] ? $itemSpace['desktop']['value'] : 16;
		$item_space_unit = isset( $itemSpace['desktop']['unit'] ) && null !== $itemSpace['desktop']['unit'] ? $itemSpace['desktop']['unit'] : '';
		echo esc_attr( $item_space_val . $item_space_unit );
	?>;
	<?php if ( 'horizontal' === $listLayout['desktop'] && $columns['desktop'] > 1 ) : ?>
		display: grid;
		grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
		flex-direction: unset;
	<?php else : ?>
		flex-direction: <?php echo esc_attr( 'horizontal' === $listLayout['desktop'] ? 'row' : 'column' ); ?>;
		flex-wrap: wrap;
	<?php endif; ?>
}

/* List item */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item {
	display: inline-flex;
	align-items: center;
	justify-content: <?php echo esc_attr( 'center' === $listAlign['desktop'] ? 'center' : ( 'right' === $listAlign['desktop'] ? 'flex-end' : 'flex-start' ) ); ?>;
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
	gap: <?php
		$icon_space_val = isset( $iconSpace['desktop']['value'] ) && '' !== $iconSpace['desktop']['value'] ? $iconSpace['desktop']['value'] : 12;
		$icon_space_unit = isset( $iconSpace['desktop']['unit'] ) && null !== $iconSpace['desktop']['unit'] ? $iconSpace['desktop']['unit'] : '';
		echo esc_attr( $icon_space_val . $icon_space_unit );
	?>;
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
	<?php if ( 'custom' === $iconWidth ) : ?>
		<?php
			$icon_size_val = isset( $iconSize['desktop']['value'] ) && '' !== $iconSize['desktop']['value'] ? $iconSize['desktop']['value'] : 24;
			$icon_size_unit = isset( $iconSize['desktop']['unit'] ) && null !== $iconSize['desktop']['unit'] ? $iconSize['desktop']['unit'] : '';
		?>
		width: <?php echo esc_attr( $icon_size_val . $icon_size_unit ); ?>;
		height: <?php echo esc_attr( $icon_size_val . $icon_size_unit ); ?>;
	<?php endif; ?>
	fill: currentColor;
}

/* Text content */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-content {
    <?php if ( $removeText ) : ?>
	display: none;
    <?php endif; ?>
    <?php if ( !empty($textColor) ) : ?>
	color: <?php echo esc_attr( $textColor ); ?>;
    <?php endif; ?>
	<?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) && $contentTypography['fontSize']['desktop']['value'] !== '' ) : ?>
		font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop']['value'] . ( $contentTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
		line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop']['value'] . ( $contentTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
	<?php endif; ?>
	<?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) && $contentTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
		letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop']['value'] . ( $contentTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
	
	<?php if ( ! empty( $listAlign['tablet'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-wrapper {
		text-align: <?php echo esc_attr( $listAlign['tablet'] ); ?>;
	}
	<?php endif; ?>

	<?php if ( ( isset( $itemSpace['tablet']['value'] ) && '' !== $itemSpace['tablet']['value'] ) || ! empty( $listLayout['tablet'] ) || ! empty( $listAlign['tablet'] ) || ! empty( $columns['tablet'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list {
		<?php if ( isset( $itemSpace['tablet']['value'] ) && '' !== $itemSpace['tablet']['value'] ) : ?>
			<?php
				$item_space_val_tablet = $itemSpace['tablet']['value'];
				$item_space_unit_tablet = isset( $itemSpace['tablet']['unit'] ) && null !== $itemSpace['tablet']['unit'] ? $itemSpace['tablet']['unit'] : '';
			?>
			gap: <?php echo esc_attr( $item_space_val_tablet . $item_space_unit_tablet ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $listLayout['tablet'] ) && 'horizontal' === $listLayout['tablet'] && ! empty( $columns['tablet'] ) && $columns['tablet'] > 1 ) : ?>
			display: grid;
			grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
			flex-direction: unset;
		<?php elseif ( ! empty( $listLayout['tablet'] ) ) : ?>
			flex-direction: <?php echo esc_attr( 'horizontal' === $listLayout['tablet'] ? 'row' : 'column' ); ?>;
			flex-wrap: wrap;
		<?php endif; ?>
		<?php if ( ! empty( $listAlign['tablet'] ) ) : ?>
			justify-content: <?php echo esc_attr( 'center' === $listAlign['tablet'] ? 'center' : ( 'right' === $listAlign['tablet'] ? 'flex-end' : 'flex-start' ) ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>

	<?php if ( ! empty( $listAlign['tablet'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item {
		justify-content: <?php echo esc_attr( 'center' === $listAlign['tablet'] ? 'center' : ( 'right' === $listAlign['tablet'] ? 'flex-end' : 'flex-start' ) ); ?>;
	}
	<?php endif; ?>

	<?php if ( isset( $iconSpace['tablet']['value'] ) && '' !== $iconSpace['tablet']['value'] ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-child {
		<?php
			$icon_space_val_tablet = $iconSpace['tablet']['value'];
			$icon_space_unit_tablet = isset( $iconSpace['tablet']['unit'] ) && null !== $iconSpace['tablet']['unit'] ? $iconSpace['tablet']['unit'] : '';
		?>
		gap: <?php echo esc_attr( $icon_space_val_tablet . $icon_space_unit_tablet ); ?>;
	}
	<?php endif; ?>

	<?php if ( 'custom' === $iconWidth && isset( $iconSize['tablet']['value'] ) && '' !== $iconSize['tablet']['value'] ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-icon svg {
		<?php
			$icon_size_val_tablet = $iconSize['tablet']['value'];
			$icon_size_unit_tablet = isset( $iconSize['tablet']['unit'] ) && null !== $iconSize['tablet']['unit'] ? $iconSize['tablet']['unit'] : '';
		?>
		width: <?php echo esc_attr( $icon_size_val_tablet . $icon_size_unit_tablet ); ?>;
		height: <?php echo esc_attr( $icon_size_val_tablet . $icon_size_unit_tablet ); ?>;
	}
	<?php endif; ?>
	
	<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet'] )  || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet'] )  || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) && $contentTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-content {
			<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) && $contentTypography['fontSize']['tablet']['value'] !== '' ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet']['value'] . ( $contentTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) && $contentTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet']['value'] . ( $contentTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) && $contentTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
				letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet']['value'] . ( $contentTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
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
	
	<?php if ( ! empty( $listAlign['mobile'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-wrapper {
		text-align: <?php echo esc_attr( $listAlign['mobile'] ); ?>;
	}
	<?php endif; ?>

	<?php if ( ( isset( $itemSpace['mobile']['value'] ) && '' !== $itemSpace['mobile']['value'] ) || ! empty( $listLayout['mobile'] ) || ! empty( $listAlign['mobile'] ) || ! empty( $columns['mobile'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list {
		<?php if ( isset( $itemSpace['mobile']['value'] ) && '' !== $itemSpace['mobile']['value'] ) : ?>
			<?php
				$item_space_val_mobile = $itemSpace['mobile']['value'];
				$item_space_unit_mobile = isset( $itemSpace['mobile']['unit'] ) && null !== $itemSpace['mobile']['unit'] ? $itemSpace['mobile']['unit'] : '';
			?>
			gap: <?php echo esc_attr( $item_space_val_mobile . $item_space_unit_mobile ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $listLayout['mobile'] ) && 'horizontal' === $listLayout['mobile'] && ! empty( $columns['mobile'] ) && $columns['mobile'] > 1 ) : ?>
			display: grid;
			grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
			flex-direction: unset;
		<?php elseif ( ! empty( $listLayout['mobile'] ) ) : ?>
			flex-direction: <?php echo esc_attr( 'horizontal' === $listLayout['mobile'] ? 'row' : 'column' ); ?>;
			flex-wrap: wrap;
		<?php endif; ?>
		<?php if ( ! empty( $listAlign['mobile'] ) ) : ?>
			justify-content: <?php echo esc_attr( 'center' === $listAlign['mobile'] ? 'center' : ( 'right' === $listAlign['mobile'] ? 'flex-end' : 'flex-start' ) ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>

	<?php if ( ! empty( $listAlign['mobile'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-item {
		justify-content: <?php echo esc_attr( 'center' === $listAlign['mobile'] ? 'center' : ( 'right' === $listAlign['mobile'] ? 'flex-end' : 'flex-start' ) ); ?>;
	}
	<?php endif; ?>

	<?php if ( isset( $iconSpace['mobile']['value'] ) && '' !== $iconSpace['mobile']['value'] ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-child {
		<?php
			$icon_space_val_mobile = $iconSpace['mobile']['value'];
			$icon_space_unit_mobile = isset( $iconSpace['mobile']['unit'] ) && null !== $iconSpace['mobile']['unit'] ? $iconSpace['mobile']['unit'] : '';
		?>
		gap: <?php echo esc_attr( $icon_space_val_mobile . $icon_space_unit_mobile ); ?>;
	}
	<?php endif; ?>

	<?php if ( 'custom' === $iconWidth && isset( $iconSize['mobile']['value'] ) && '' !== $iconSize['mobile']['value'] ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-icon svg {
		<?php
			$icon_size_val_mobile = $iconSize['mobile']['value'];
			$icon_size_unit_mobile = isset( $iconSize['mobile']['unit'] ) && null !== $iconSize['mobile']['unit'] ? $iconSize['mobile']['unit'] : '';
		?>
		width: <?php echo esc_attr( $icon_size_val_mobile . $icon_size_unit_mobile ); ?>;
		height: <?php echo esc_attr( $icon_size_val_mobile . $icon_size_unit_mobile ); ?>;
	}
	<?php endif; ?>
	
	<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile'] )  || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile'] )  || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) && $contentTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-list-content {
			<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) && $contentTypography['fontSize']['mobile']['value'] !== '' ) : ?>
				font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile']['value'] . ( $contentTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) && $contentTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
				line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile']['value'] . ( $contentTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
			<?php endif; ?>
			<?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) && $contentTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
				letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile']['value'] . ( $contentTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
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