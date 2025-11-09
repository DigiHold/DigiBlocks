<?php
/**
 * Social Icons Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id                   = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility           = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
$icons                = isset( $attrs['icons'] ) ? $attrs['icons'] : array();
$iconWidth = isset( $attrs['iconWidth'] ) ? $attrs['iconWidth'] : array(
    'desktop' => array( 'value' => 1, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$iconHeight = isset( $attrs['iconHeight'] ) ? $attrs['iconHeight'] : array(
    'desktop' => array( 'value' => 1, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$iconSpacing = isset( $attrs['iconSpacing'] ) ? $attrs['iconSpacing'] : array(
    'desktop' => array( 'value' => 0.8, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$iconColor            = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#333333';
$iconHoverColor       = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconBackground       = isset( $attrs['iconBackground'] ) ? $attrs['iconBackground'] : 'transparent';
$iconHoverBackground  = isset( $attrs['iconHoverBackground'] ) ? $attrs['iconHoverBackground'] : '';
$iconBorderStyle      = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'none';
$iconBorderWidth      = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : array(
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
$iconBorderRadius     = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : digiblocks_get_default_dimensions('px');
$iconBorderColor      = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : '#e0e0e0';
$iconHoverBorderColor = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : '';
$labelColor           = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '';
$labelHoverColor      = isset( $attrs['labelHoverColor'] ) ? $attrs['labelHoverColor'] : '';
$labelSpacing = isset( $attrs['labelSpacing'] ) ? $attrs['labelSpacing'] : array(
    'desktop' => array( 'value' => 0.8, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$align                = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'flex-start',
    'tablet'  => '',
    'mobile'  => '',
];
$padding              = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$animation            = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$showLabels           = isset( $attrs['showLabels'] ) ? $attrs['showLabels'] : false;
$labelPosition        = isset( $attrs['labelPosition'] ) ? $attrs['labelPosition'] : 'bottom';
$textTypography      = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
    'fontFamily'        => '',
    'fontSize' => array(
		'desktop' => array('value' => 14, 'unit' => 'px'),
		'tablet'  => array('value' => 13, 'unit' => 'px'),
		'mobile'  => array('value' => 12, 'unit' => 'px'),
	),
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight' => array(
		'desktop' => array('value' => 1.5, 'unit' => 'em'),
		'tablet'  => array('value' => 1.4, 'unit' => 'em'),
		'mobile'  => array('value' => 1.3, 'unit' => 'em'),
	),
    'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => 0, 'unit' => 'px'),
		'mobile'  => array('value' => 0, 'unit' => 'px'),
	),
);

// CSS Output
ob_start();
?>
/* Social Icons Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
    flex-wrap: wrap;
    gap: <?php
    $desktop_spacing_value = (is_array($iconSpacing['desktop']) && isset($iconSpacing['desktop']['value']) && $iconSpacing['desktop']['value']) ? $iconSpacing['desktop']['value'] : 0.8;
    $desktop_spacing_unit = (is_array($iconSpacing['desktop']) && array_key_exists('unit', $iconSpacing['desktop'])) ? $iconSpacing['desktop']['unit'] : 'rem';
    echo esc_attr( $desktop_spacing_value . ( $desktop_spacing_unit !== null ? $desktop_spacing_unit : '' ) );
    ?>;
    justify-content: <?php echo esc_attr( $align['desktop'] ); ?>;
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
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    display: flex;
    align-items: center;
    text-decoration: none;
	<?php if ( $labelSpacing && isset( $labelSpacing['desktop'] ) ) : ?>
		gap: <?php
        $desktop_label_spacing_value = (is_array($labelSpacing['desktop']) && isset($labelSpacing['desktop']['value']) && $labelSpacing['desktop']['value']) ? $labelSpacing['desktop']['value'] : 0.8;
        $desktop_label_spacing_unit = (is_array($labelSpacing['desktop']) && array_key_exists('unit', $labelSpacing['desktop'])) ? $labelSpacing['desktop']['unit'] : 'rem';
        echo esc_attr( $desktop_label_spacing_value . ( $desktop_label_spacing_unit !== null ? $desktop_label_spacing_unit : '' ) );
        ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: <?php echo esc_attr( $iconBackground ); ?>;
    color: <?php echo esc_attr( $iconColor ); ?>;
    <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' ) : ?>
		border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php endif; ?>
    <?php if ( $padding && isset( $padding['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon span {
    display: flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon svg {
    width: <?php
    $desktop_width_value = (is_array($iconWidth['desktop']) && isset($iconWidth['desktop']['value']) && $iconWidth['desktop']['value']) ? $iconWidth['desktop']['value'] : 1;
    $desktop_width_unit = (is_array($iconWidth['desktop']) && array_key_exists('unit', $iconWidth['desktop'])) ? $iconWidth['desktop']['unit'] : 'rem';
    echo esc_attr( $desktop_width_value . ( $desktop_width_unit !== null ? $desktop_width_unit : '' ) );
    ?>;
    height: <?php
    $desktop_height_value = (is_array($iconHeight['desktop']) && isset($iconHeight['desktop']['value']) && $iconHeight['desktop']['value']) ? $iconHeight['desktop']['value'] : 1;
    $desktop_height_unit = (is_array($iconHeight['desktop']) && array_key_exists('unit', $iconHeight['desktop'])) ? $iconHeight['desktop']['unit'] : 'rem';
    echo esc_attr( $desktop_height_value . ( $desktop_height_unit !== null ? $desktop_height_unit : '' ) );
    ?>;
    fill: <?php echo esc_attr( $iconColor ); ?>;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
    <?php if ( $iconHoverBackground ) : ?>
    background-color: <?php echo esc_attr( $iconHoverBackground ); ?>;
    <?php endif; ?>
    <?php if ( $iconHoverBorderColor ) : ?>
    border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon:hover .digiblocks-social-icon-icon svg {
    <?php if ( $iconHoverColor ) : ?>
    fill: <?php echo esc_attr( $iconHoverColor ); ?>;
    <?php endif; ?>
}

<?php if ( $showLabels ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-label {
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
    	font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) && $textTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    	font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop']['value'] . ( $textTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    	line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop']['value'] . ( $textTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['desktop'] ) && isset( $textTypography['letterSpacing']['desktop']['value'] ) && $textTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    	letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop']['value'] . ( $textTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    color: <?php echo esc_attr( $labelColor ?: $iconColor ); ?>;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon:hover .digiblocks-social-icon-label {
    <?php if ( $labelHoverColor || $iconHoverColor ) : ?>
    	color: <?php echo esc_attr( $labelHoverColor ?: $iconHoverColor ); ?>;
    <?php endif; ?>
}

<?php if ( $labelPosition === 'top' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: column-reverse;
}
<?php elseif ( $labelPosition === 'right' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: row;
}
<?php elseif ( $labelPosition === 'bottom' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: column;
}
<?php elseif ( $labelPosition === 'left' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: row-reverse;
}
<?php endif; ?>
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        gap: <?php
		$tablet_spacing_value = (is_array($iconSpacing['tablet']) && isset($iconSpacing['tablet']['value']) && $iconSpacing['tablet']['value']) ? $iconSpacing['tablet']['value'] : (is_array($iconSpacing['desktop']) && isset($iconSpacing['desktop']['value']) ? $iconSpacing['desktop']['value'] : 0);
		$tablet_spacing_unit = (is_array($iconSpacing['tablet']) && array_key_exists('unit', $iconSpacing['tablet'])) ? $iconSpacing['tablet']['unit'] : (is_array($iconSpacing['desktop']) && array_key_exists('unit', $iconSpacing['desktop']) ? $iconSpacing['desktop']['unit'] : 'px');
		echo esc_attr( $tablet_spacing_value . ( $tablet_spacing_unit !== null ? $tablet_spacing_unit : '' ) );
		?>;
		<?php if ( ! empty( $align['tablet'] ) ) : ?>
		justify-content: <?php echo esc_attr( $align['tablet'] ); ?>;
        <?php endif; ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['value'] ) && '' !== (is_array($horizontalOffset['tablet']) && isset($horizontalOffset['tablet']['value']) && $horizontalOffset['tablet']['value']) ? $horizontalOffset['tablet']['value'] : '';
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
            
            $v_value_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['value'] ) && '' !== (is_array($verticalOffset['tablet']) && isset($verticalOffset['tablet']['value']) && $verticalOffset['tablet']['value']) ? $verticalOffset['tablet']['value'] : '';
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

	<?php if ( $labelSpacing && isset( $labelSpacing['tablet'] ) ) : ?>
    	.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
			gap: <?php
            $tablet_label_spacing_value = (is_array($labelSpacing['tablet']) && isset($labelSpacing['tablet']['value']) && $labelSpacing['tablet']['value']) ? $labelSpacing['tablet']['value'] : ((is_array($labelSpacing['desktop']) && isset($labelSpacing['desktop']['value'])) ? $labelSpacing['desktop']['value'] : 0.8);
            $tablet_label_spacing_unit = (is_array($labelSpacing['tablet']) && array_key_exists('unit', $labelSpacing['tablet'])) ? $labelSpacing['tablet']['unit'] : ((is_array($labelSpacing['desktop']) && array_key_exists('unit', $labelSpacing['desktop'])) ? $labelSpacing['desktop']['unit'] : 'rem');
            echo esc_attr( $tablet_label_spacing_value . ( $tablet_label_spacing_unit !== null ? $tablet_label_spacing_unit : '' ) );
            ?>;
		}
    <?php endif; ?>

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon {
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderWidth['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon svg {
        width: <?php
        $tablet_width_value = (is_array($iconWidth['tablet']) && isset($iconWidth['tablet']['value']) && $iconWidth['tablet']['value']) ? $iconWidth['tablet']['value'] : ((is_array($iconWidth['desktop']) && isset($iconWidth['desktop']['value'])) ? $iconWidth['desktop']['value'] : 1);
        $tablet_width_unit = (is_array($iconWidth['tablet']) && array_key_exists('unit', $iconWidth['tablet'])) ? $iconWidth['tablet']['unit'] : ((is_array($iconWidth['desktop']) && array_key_exists('unit', $iconWidth['desktop'])) ? $iconWidth['desktop']['unit'] : 'rem');
        echo esc_attr( $tablet_width_value . ( $tablet_width_unit !== null ? $tablet_width_unit : '' ) );
        ?>;
        height: <?php
        $tablet_height_value = (is_array($iconHeight['tablet']) && isset($iconHeight['tablet']['value']) && $iconHeight['tablet']['value']) ? $iconHeight['tablet']['value'] : ((is_array($iconHeight['desktop']) && isset($iconHeight['desktop']['value'])) ? $iconHeight['desktop']['value'] : 1);
        $tablet_height_unit = (is_array($iconHeight['tablet']) && array_key_exists('unit', $iconHeight['tablet'])) ? $iconHeight['tablet']['unit'] : ((is_array($iconHeight['desktop']) && array_key_exists('unit', $iconHeight['desktop'])) ? $iconHeight['desktop']['unit'] : 'rem');
        echo esc_attr( $tablet_height_value . ( $tablet_height_unit !== null ? $tablet_height_unit : '' ) );
        ?>;
    }
    
    <?php if ( $showLabels && isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-label {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet']['value'] . ( $textTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['tablet']['value'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet']['value'] . ( $textTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['tablet']['value'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet']['value'] . ( $textTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        gap: <?php
        $mobile_spacing_value = (is_array($iconSpacing['mobile']) && isset($iconSpacing['mobile']['value']) && $iconSpacing['mobile']['value']) ? $iconSpacing['mobile']['value'] : ((is_array($iconSpacing['tablet']) && isset($iconSpacing['tablet']['value']) && $iconSpacing['tablet']['value']) ? $iconSpacing['tablet']['value'] : ((is_array($iconSpacing['desktop']) && isset($iconSpacing['desktop']['value'])) ? $iconSpacing['desktop']['value'] : 0.8));
        $mobile_spacing_unit = (is_array($iconSpacing['mobile']) && array_key_exists('unit', $iconSpacing['mobile'])) ? $iconSpacing['mobile']['unit'] : ((is_array($iconSpacing['tablet']) && array_key_exists('unit', $iconSpacing['tablet'])) ? $iconSpacing['tablet']['unit'] : ((is_array($iconSpacing['desktop']) && array_key_exists('unit', $iconSpacing['desktop'])) ? $iconSpacing['desktop']['unit'] : 'rem'));
        echo esc_attr( $mobile_spacing_value . ( $mobile_spacing_unit !== null ? $mobile_spacing_unit : '' ) );
        ?>;
		<?php if ( ! empty( $align['mobile'] ) ) : ?>
		justify-content: <?php echo esc_attr( $align['mobile'] ); ?>;
        <?php endif; ?>
    	<?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['value'] ) && '' !== (is_array($horizontalOffset['mobile']) && isset($horizontalOffset['mobile']['value']) && $horizontalOffset['mobile']['value']) ? $horizontalOffset['mobile']['value'] : '';
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
            
            $v_value_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['value'] ) && '' !== (is_array($verticalOffset['mobile']) && isset($verticalOffset['mobile']['value']) && $verticalOffset['mobile']['value']) ? $verticalOffset['mobile']['value'] : '';
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

	<?php if ( $labelSpacing && isset( $labelSpacing['mobile'] ) ) : ?>
    	.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
			gap: <?php
            $mobile_label_spacing_value = (is_array($labelSpacing['mobile']) && isset($labelSpacing['mobile']['value']) && $labelSpacing['mobile']['value']) ? $labelSpacing['mobile']['value'] : ((is_array($labelSpacing['tablet']) && isset($labelSpacing['tablet']['value']) && $labelSpacing['tablet']['value']) ? $labelSpacing['tablet']['value'] : ((is_array($labelSpacing['desktop']) && isset($labelSpacing['desktop']['value'])) ? $labelSpacing['desktop']['value'] : 0.8));
            $mobile_label_spacing_unit = (is_array($labelSpacing['mobile']) && array_key_exists('unit', $labelSpacing['mobile'])) ? $labelSpacing['mobile']['unit'] : ((is_array($labelSpacing['tablet']) && array_key_exists('unit', $labelSpacing['tablet'])) ? $labelSpacing['tablet']['unit'] : ((is_array($labelSpacing['desktop']) && array_key_exists('unit', $labelSpacing['desktop'])) ? $labelSpacing['desktop']['unit'] : 'rem'));
            echo esc_attr( $mobile_label_spacing_value . ( $mobile_label_spacing_unit !== null ? $mobile_label_spacing_unit : '' ) );
            ?>;
		}
    <?php endif; ?>

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon {
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderWidth['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon svg {
        width: <?php
        $mobile_width_value = (is_array($iconWidth['mobile']) && isset($iconWidth['mobile']['value']) && $iconWidth['mobile']['value']) ? $iconWidth['mobile']['value'] : ((is_array($iconWidth['tablet']) && isset($iconWidth['tablet']['value']) && $iconWidth['tablet']['value']) ? $iconWidth['tablet']['value'] : ((is_array($iconWidth['desktop']) && isset($iconWidth['desktop']['value'])) ? $iconWidth['desktop']['value'] : 1));
        $mobile_width_unit = (is_array($iconWidth['mobile']) && array_key_exists('unit', $iconWidth['mobile'])) ? $iconWidth['mobile']['unit'] : ((is_array($iconWidth['tablet']) && array_key_exists('unit', $iconWidth['tablet'])) ? $iconWidth['tablet']['unit'] : ((is_array($iconWidth['desktop']) && array_key_exists('unit', $iconWidth['desktop'])) ? $iconWidth['desktop']['unit'] : 'rem'));
        echo esc_attr( $mobile_width_value . ( $mobile_width_unit !== null ? $mobile_width_unit : '' ) );
        ?>;
        height: <?php
        $mobile_height_value = (is_array($iconHeight['mobile']) && isset($iconHeight['mobile']['value']) && $iconHeight['mobile']['value']) ? $iconHeight['mobile']['value'] : ((is_array($iconHeight['tablet']) && isset($iconHeight['tablet']['value']) && $iconHeight['tablet']['value']) ? $iconHeight['tablet']['value'] : ((is_array($iconHeight['desktop']) && isset($iconHeight['desktop']['value'])) ? $iconHeight['desktop']['value'] : 1));
        $mobile_height_unit = (is_array($iconHeight['mobile']) && array_key_exists('unit', $iconHeight['mobile'])) ? $iconHeight['mobile']['unit'] : ((is_array($iconHeight['tablet']) && array_key_exists('unit', $iconHeight['tablet'])) ? $iconHeight['tablet']['unit'] : ((is_array($iconHeight['desktop']) && array_key_exists('unit', $iconHeight['desktop'])) ? $iconHeight['desktop']['unit'] : 'rem'));
        echo esc_attr( $mobile_height_value . ( $mobile_height_unit !== null ? $mobile_height_unit : '' ) );
        ?>;
    }
    
    <?php if ( $showLabels && isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-label {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile']['value'] . ( $textTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['mobile']['value'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile']['value'] . ( $textTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['mobile']['value'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile']['value'] . ( $textTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
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