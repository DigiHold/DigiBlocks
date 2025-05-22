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
    display: block;
	<?php if ( $align === 'left' ) : ?>
        justify-content: flex-start;
    <?php elseif ( $align === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: center;
    <?php endif; ?>
    text-align: <?php echo esc_attr( $align ); ?>;
    width: 100%;
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    transition: all 0.3s ease;
}

/* Figure styles */
.<?php echo esc_attr( $id ); ?> figure {
    display: inline-block;
    position: relative;
    margin: 0;
    width: <?php echo esc_attr( $width['desktop'] === 'auto' ? 'auto' : $width['desktop'] . $widthUnit ); ?>;
    max-width: 100%;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php if ( $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
    border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( $boxShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php endif; ?>
    overflow: hidden;
    transition: all 0.3s ease;
}

/* Image styles */
.<?php echo esc_attr( $id ); ?> figure img {
    display: flex;
    width: 100%;
    height: <?php echo esc_attr( $height['desktop'] === 'auto' ? 'auto' : $height['desktop'] . $heightUnit ); ?>;
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
    transition: all 0.3s ease;
}

/* Hover styles */
.<?php echo esc_attr( $id ); ?> figure:hover {
    <?php if ( $boxShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
    <?php if ( $borderHoverColor ) : ?>
    border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> figure:hover img {
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

.<?php echo esc_attr( $id ); ?> figure:hover .digiblocks-image-overlay {
    opacity: 1;
}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> figure {
        width: <?php echo esc_attr( $width['tablet'] === 'auto' ? 'auto' : $width['tablet'] . $widthUnit ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> figure img {
        height: <?php echo esc_attr( $height['tablet'] === 'auto' ? 'auto' : $height['tablet'] . $heightUnit ); ?>;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> figure {
        width: <?php echo esc_attr( $width['mobile'] === 'auto' ? 'auto' : $width['mobile'] . $widthUnit ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> figure img {
        height: <?php echo esc_attr( $height['mobile'] === 'auto' ? 'auto' : $height['mobile'] . $heightUnit ); ?>;
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