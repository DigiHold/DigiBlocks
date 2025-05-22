<?php
/**
 * Featured Image Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id           = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-featured-' . uniqid();
$visibility   = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$imageSize    = isset( $attrs['imageSize'] ) ? $attrs['imageSize'] : 'large';
$imageCrop    = isset( $attrs['imageCrop'] ) ? $attrs['imageCrop'] : false;
$aspectRatio  = isset( $attrs['aspectRatio'] ) ? $attrs['aspectRatio'] : 'default';
$customHeight = isset( $attrs['customHeight'] ) ? $attrs['customHeight'] : [
    'desktop' => 300,
    'tablet'  => 250,
    'mobile'  => 200,
];
$width        = isset( $attrs['width'] ) ? $attrs['width'] : [
    'desktop' => 100,
    'tablet'  => 100,
    'mobile'  => 100,
];
$align        = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'center',
    'tablet'  => 'center',
    'mobile'  => 'center',
];
$enableCaption = isset( $attrs['enableCaption'] ) ? $attrs['enableCaption'] : false;
$borderStyle  = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth  = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px']
];
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');
$borderColor  = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$padding      = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin       = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px']
];
$boxShadow    = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.3)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$animation    = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$linkToPost   = isset( $attrs['linkToPost'] ) ? $attrs['linkToPost'] : false;

// CSS Output
ob_start();
?>
/* Featured Image Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
	<?php if ( $align['desktop'] === 'left' ) : ?>
        justify-content: flex-start;
    <?php elseif ( $align['desktop'] === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: center;
    <?php endif; ?>
    width: 100%;
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> a {
    display: flex;
}

.<?php echo esc_attr( $id ); ?> span {
    display: flex;
    flex-direction: column;
    width: <?php echo esc_attr( $width['desktop'] ); ?>%;
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> img {
    display: flex;
    width: 100%;
    max-width: 100%;
    height: auto;
    <?php if ( $imageCrop ) : ?>
        <?php if ( $aspectRatio === '1:1' ) : ?>
        aspect-ratio: 1/1;
        <?php elseif ( $aspectRatio === '4:3' ) : ?>
        aspect-ratio: 4/3;
        <?php elseif ( $aspectRatio === '16:9' ) : ?>
        aspect-ratio: 16/9;
        <?php elseif ( $aspectRatio === '3:2' ) : ?>
        aspect-ratio: 3/2;
        <?php elseif ( $aspectRatio === 'custom' ) : ?>
        height: <?php echo esc_attr( $customHeight['desktop'] ); ?>px;
        <?php endif; ?>
        object-fit: cover;
    <?php else : ?>
        object-fit: contain;
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

<?php if ( $boxShadowHover['enable'] ) : ?>
.<?php echo esc_attr( $id ); ?> img:hover {
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> figcaption {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: #666;
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php if ( $align['tablet'] === 'left' ) : ?>
			justify-content: flex-start;
		<?php elseif ( $align['tablet'] === 'right' ) : ?>
			justify-content: flex-end;
		<?php else : ?>
			justify-content: center;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> figure {
        width: <?php echo esc_attr( $width['tablet'] ); ?>%;
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> img {
        <?php if ( $borderStyle !== 'none' ) : ?>
            <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        
        <?php if ( $imageCrop && $aspectRatio === 'custom' ) : ?>
            height: <?php echo esc_attr( $customHeight['tablet'] ); ?>px;
        <?php endif; ?>
    }
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php if ( $align['mobile'] === 'left' ) : ?>
			justify-content: flex-start;
		<?php elseif ( $align['mobile'] === 'right' ) : ?>
			justify-content: flex-end;
		<?php else : ?>
			justify-content: center;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> figure {
        width: <?php echo esc_attr( $width['mobile'] ); ?>%;
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> img {
        <?php if ( $borderStyle !== 'none' ) : ?>
            <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        
        <?php if ( $imageCrop && $aspectRatio === 'custom' ) : ?>
            height: <?php echo esc_attr( $customHeight['mobile'] ); ?>px;
        <?php endif; ?>
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