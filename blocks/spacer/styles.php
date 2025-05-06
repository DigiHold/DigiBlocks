<?php
/**
 * Spacer Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id     = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$height = isset( $attrs['height'] ) ? $attrs['height'] : array(
    'desktop' => 80,
    'tablet'  => 60,
    'mobile'  => 40,
);

// CSS Output
ob_start();
?>
/* Spacer Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    height: <?php echo esc_attr( $height['desktop'] ); ?>px;
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        height: <?php echo esc_attr( $height['tablet'] ); ?>px;
    }
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        height: <?php echo esc_attr( $height['mobile'] ); ?>px;
    }
}
<?php
$digiblocks_css_output = ob_get_clean();