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
$lottieSource       = isset( $attrs['lottieSource'] ) ? $attrs['lottieSource'] : '';
$autoplay           = isset( $attrs['autoplay'] ) ? $attrs['autoplay'] : true;
$loop               = isset( $attrs['loop'] ) ? $attrs['loop'] : true;
$speed              = isset( $attrs['speed'] ) ? $attrs['speed'] : 1;
$width              = isset( $attrs['width'] ) ? $attrs['width'] : [
    'desktop' => 100,
    'tablet'  => 100,
    'mobile'  => 100,
];
$widthUnit         = isset( $attrs['widthUnit'] ) ? $attrs['widthUnit'] : '%';
$height             = isset( $attrs['height'] ) ? $attrs['height'] : [
    'desktop' => 300,
    'tablet'  => 250,
    'mobile'  => 200,
];
$heightUnit        = isset( $attrs['heightUnit'] ) ? $attrs['heightUnit'] : 'px';
$alignment          = isset( $attrs['alignment'] ) ? $attrs['alignment'] : 'center';
$backgroundColor   = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$showControls      = isset( $attrs['showControls'] ) ? $attrs['showControls'] : false;
$padding            = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin             = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 30, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 25, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 20, 'left' => 0, 'unit' => 'px'],
];
$borderStyle       = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth       = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderRadius      = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');
$borderColor       = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
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
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
    display: flex;
    justify-content: <?php echo esc_attr( $alignment === 'left' ? 'flex-start' : ($alignment === 'right' ? 'flex-end' : 'center') ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lottie-container {
    width: <?php echo esc_attr( $width['desktop'] . $widthUnit ); ?>;
    height: <?php echo esc_attr( $height['desktop'] . $heightUnit ); ?>;
    <?php if ( $backgroundColor ) : ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php endif; ?>
    overflow: hidden;
    position: relative;
    <?php if ( $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
    border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
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
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lottie-container {
        width: <?php echo esc_attr( $width['tablet'] . $widthUnit ); ?>;
        height: <?php echo esc_attr( $height['tablet'] . $heightUnit ); ?>;
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
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lottie-container {
        width: <?php echo esc_attr( $width['mobile'] . $widthUnit ); ?>;
        height: <?php echo esc_attr( $height['mobile'] . $heightUnit ); ?>;
        <?php if ( $borderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
    }
}

<?php
$digiblocks_css_output = ob_get_clean();