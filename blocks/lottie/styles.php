<?php
/**
 * Lottie Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                 = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-lottie-' . uniqid();
$lottie_source      = isset( $attrs['lottieSource'] ) ? $attrs['lottieSource'] : '';
$autoplay           = isset( $attrs['autoplay'] ) ? $attrs['autoplay'] : true;
$loop               = isset( $attrs['loop'] ) ? $attrs['loop'] : true;
$speed              = isset( $attrs['speed'] ) ? $attrs['speed'] : 1;
$width              = isset( $attrs['width'] ) ? $attrs['width'] : [
    'desktop' => 100,
    'tablet'  => 100,
    'mobile'  => 100,
];
$width_unit         = isset( $attrs['widthUnit'] ) ? $attrs['widthUnit'] : '%';
$height             = isset( $attrs['height'] ) ? $attrs['height'] : [
    'desktop' => 300,
    'tablet'  => 250,
    'mobile'  => 200,
];
$height_unit        = isset( $attrs['heightUnit'] ) ? $attrs['heightUnit'] : 'px';
$alignment          = isset( $attrs['alignment'] ) ? $attrs['alignment'] : 'center';
$background_color   = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$show_controls      = isset( $attrs['showControls'] ) ? $attrs['showControls'] : false;
$padding            = isset( $attrs['padding'] ) ? $attrs['padding'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
];
$margin             = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 30, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 25, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 20, 'left' => 0, 'unit' => 'px'],
];
$border_style       = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$border_width       = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'mobile'  => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
];
$border_radius      = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
];
$border_color       = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$shadow             = isset( $attrs['shadow'] ) ? $attrs['shadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$animation          = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';

// CSS Output
ob_start();
?>
/* Lottie Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
    padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
    width: 100%;
    display: flex;
    justify-content: <?php echo esc_attr( $alignment === 'left' ? 'flex-start' : ($alignment === 'right' ? 'flex-end' : 'center') ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lottie-container {
    width: <?php echo esc_attr( $width['desktop'] . $width_unit ); ?>;
    height: <?php echo esc_attr( $height['desktop'] . $height_unit ); ?>;
    <?php if ( $background_color ) : ?>
    background-color: <?php echo esc_attr( $background_color ); ?>;
    <?php endif; ?>
    overflow: hidden;
    position: relative;
    <?php if ( $border_style !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $border_style ); ?>;
    border-color: <?php echo esc_attr( $border_color ); ?>;
    border-width: <?php echo esc_attr( $border_width['desktop']['top'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['right'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['bottom'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['left'] . $border_width['desktop']['unit'] ); ?>;
    <?php endif; ?>
    border-radius: <?php echo esc_attr( $border_radius['desktop']['top'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['right'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['bottom'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['left'] . $border_radius['desktop']['unit'] ); ?>;
    <?php if ( $shadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( $shadow['horizontal'] . 'px ' . $shadow['vertical'] . 'px ' . $shadow['blur'] . 'px ' . $shadow['spread'] . 'px ' . $shadow['color'] ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> canvas {
    width: 100%;
    height: 100%;
}

/* Controls */
.<?php echo esc_attr( $id ); ?> .digiblocks-lottie-controls {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 10;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lottie-play-pause {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
}

/* Error message */
.<?php echo esc_attr( $id ); ?> .digiblocks-lottie-error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #cc1818;
    max-width: 90%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
        padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lottie-container {
        width: <?php echo esc_attr( $width['tablet'] . $width_unit ); ?>;
        height: <?php echo esc_attr( $height['tablet'] . $height_unit ); ?>;
        <?php if ( $border_style !== 'none' ) : ?>
        border-width: <?php echo esc_attr( $border_width['tablet']['top'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['right'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['bottom'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['left'] . $border_width['tablet']['unit'] ); ?>;
        <?php endif; ?>
        border-radius: <?php echo esc_attr( $border_radius['tablet']['top'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['right'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['bottom'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['left'] . $border_radius['tablet']['unit'] ); ?>;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
        padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lottie-container {
        width: <?php echo esc_attr( $width['mobile'] . $width_unit ); ?>;
        height: <?php echo esc_attr( $height['mobile'] . $height_unit ); ?>;
        <?php if ( $border_style !== 'none' ) : ?>
        border-width: <?php echo esc_attr( $border_width['mobile']['top'] . $border_width['mobile']['unit'] . ' ' . $border_width['mobile']['right'] . $border_width['mobile']['unit'] . ' ' . $border_width['mobile']['bottom'] . $border_width['mobile']['unit'] . ' ' . $border_width['mobile']['left'] . $border_width['mobile']['unit'] ); ?>;
        <?php endif; ?>
        border-radius: <?php echo esc_attr( $border_radius['mobile']['top'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['right'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['bottom'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['left'] . $border_radius['mobile']['unit'] ); ?>;
    }
}

<?php
$digiblocks_css_output = ob_get_clean();