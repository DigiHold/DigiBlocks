<?php
/**
 * Image Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                  = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-image-' . uniqid();
$visibility          = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform           = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover      = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
$width               = isset( $attrs['width'] ) ? $attrs['width'] : [
    'desktop' => 100,
    'tablet'  => 100,
    'mobile'  => 100,
];
$widthUnit           = isset( $attrs['widthUnit'] ) ? $attrs['widthUnit'] : '%';
$height              = isset( $attrs['height'] ) ? $attrs['height'] : [
    'desktop' => 'auto',
    'tablet'  => 'auto',
    'mobile'  => 'auto',
];
$heightUnit          = isset( $attrs['heightUnit'] ) ? $attrs['heightUnit'] : 'px';
$align               = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$objectFit           = isset( $attrs['objectFit'] ) ? $attrs['objectFit'] : 'cover';
$borderStyle         = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth         = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => [ 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ],
    'tablet'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ],
    'mobile'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ],
];
$borderRadius        = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');
$borderColor         = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor    = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$boxShadow           = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$boxShadowHover      = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$padding             = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin              = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$hoverEffect         = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$overlayEnable       = isset( $attrs['overlayEnable'] ) ? $attrs['overlayEnable'] : false;
$overlayColor        = isset( $attrs['overlayColor'] ) ? $attrs['overlayColor'] : 'rgba(0,0,0,0.5)';
$overlayHoverOnly    = isset( $attrs['overlayHoverOnly'] ) ? $attrs['overlayHoverOnly'] : true;

// CSS Output
ob_start();
?>
/* Image Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
	<?php if ( $align === 'left' ) : ?>
        justify-content: flex-start;
    <?php elseif ( $align === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: center;
    <?php endif; ?>
    text-align: <?php echo esc_attr( $align ); ?>;
    <?php if ( isset( $attrs['containerWidth'] ) && 'full' === $attrs['containerWidth'] ) : ?>
        width: 100%;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . $v_unit ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . $v_unit ); ?>;
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
    transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'desktop' ); ?>;
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
    transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
}
<?php endif; ?>

/* Image styles */
.<?php echo esc_attr( $id ); ?> img {
    display: flex;
    <?php if ( isset( $attrs['dimensionType'] ) && 'custom' === $attrs['dimensionType'] ) : ?>
        width: <?php echo esc_attr( $width['desktop'] === 'auto' ? 'auto' : $width['desktop'] . $widthUnit ); ?>;
        height: <?php echo esc_attr( $height['desktop'] === 'auto' ? 'auto' : $height['desktop'] . $heightUnit ); ?>;
    <?php endif; ?>
    max-width: 100%;
    object-fit: <?php echo esc_attr( $objectFit ); ?>;
    <?php if ( $hoverEffect === 'zoom-out' ) : ?>
    transform: scale(1.1);
    <?php endif; ?>
    <?php if ( $hoverEffect === 'grayscale' ) : ?>
    filter: grayscale(100%);
    <?php endif; ?>
    <?php if ( $hoverEffect === 'blur' ) : ?>
    filter: blur(5px);
    <?php endif; ?>
    <?php if ( $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
    border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( $boxShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
}

/* Hover styles */
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $boxShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
    <?php if ( $borderHoverColor ) : ?>
    border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
    <?php endif; ?>
	<?php
    $transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
    if ( ! empty( $transform_hover_value ) ) :
    ?>
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover img {
    <?php if ( $hoverEffect === 'zoom-in' ) : ?>
    transform: scale(1.1);
    <?php endif; ?>
    <?php if ( $hoverEffect === 'zoom-out' ) : ?>
    transform: scale(1);
    <?php endif; ?>
    <?php if ( $hoverEffect === 'grayscale' ) : ?>
    filter: grayscale(0);
    <?php endif; ?>
    <?php if ( $hoverEffect === 'blur' ) : ?>
    filter: blur(0);
    <?php endif; ?>
    <?php if ( $hoverEffect === 'rotate' ) : ?>
    transform: rotate(5deg);
    <?php endif; ?>
    <?php if ( $hoverEffect === 'glow' ) : ?>
    filter: brightness(1.1);
    <?php endif; ?>
}

/* Overlay */
<?php if ( $overlayEnable ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: <?php echo esc_attr( $overlayColor ); ?>;
    opacity: <?php echo esc_attr( $overlayHoverOnly ? '0' : '1' ); ?>;
    transition: opacity 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-image-overlay {
    opacity: 1;
}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '0';
            $h_unit_tablet = isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_tablet = isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '0';
            $v_unit_tablet = isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
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
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'tablet' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'tablet' ); ?>;
		}
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> img {
        <?php if ( isset( $attrs['dimensionType'] ) && 'custom' === $attrs['dimensionType'] ) : ?>
            width: <?php echo esc_attr( $width['tablet'] === 'auto' ? 'auto' : $width['tablet'] . $widthUnit ); ?>;
            height: <?php echo esc_attr( $height['tablet'] === 'auto' ? 'auto' : $height['tablet'] . $heightUnit ); ?>;
        <?php endif; ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '0';
            $h_unit_mobile = isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '0';
            $v_unit_mobile = isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
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
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'mobile' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'mobile' ); ?>;
		}
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> img {
        <?php if ( isset( $attrs['dimensionType'] ) && 'custom' === $attrs['dimensionType'] ) : ?>
            width: <?php echo esc_attr( $width['mobile'] === 'auto' ? 'auto' : $width['mobile'] . $widthUnit ); ?>;
            height: <?php echo esc_attr( $height['mobile'] === 'auto' ? 'auto' : $height['mobile'] . $heightUnit ); ?>;
        <?php endif; ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
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