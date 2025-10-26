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
$id          = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility  = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$height = isset( $attrs['height'] ) ? $attrs['height'] : array(
    'desktop' => array( 'value' => 80, 'unit' => 'px' ),
    'tablet'  => array( 'value' => '', 'unit' => '' ),
    'mobile'  => array( 'value' => '', 'unit' => '' ),
);

$height_desktop = '';
if ( isset( $height['desktop']['value'] ) && $height['desktop']['value'] !== '' && $height['desktop']['value'] !== null ) {
    $unit = isset( $height['desktop']['unit'] ) && $height['desktop']['unit'] !== '' ? $height['desktop']['unit'] : 'px';
    $height_desktop = $height['desktop']['value'] . $unit;
}

$height_tablet = '';
if ( isset( $height['tablet']['value'] ) && $height['tablet']['value'] !== '' && $height['tablet']['value'] !== null ) {
    $unit = isset( $height['tablet']['unit'] ) && $height['tablet']['unit'] !== '' ? $height['tablet']['unit'] : 'px';
    $height_tablet = $height['tablet']['value'] . $unit;
}

$height_mobile = '';
if ( isset( $height['mobile']['value'] ) && $height['mobile']['value'] !== '' && $height['mobile']['value'] !== null ) {
    $unit = isset( $height['mobile']['unit'] ) && $height['mobile']['unit'] !== '' ? $height['mobile']['unit'] : 'px';
    $height_mobile = $height['mobile']['value'] . $unit;
}

// CSS Output
ob_start();
?>
/* Spacer Block - <?php echo esc_attr( $id ); ?> */
<?php if ( $height_desktop ) : ?>
.<?php echo esc_attr( $id ); ?> {
    height: <?php echo esc_attr( $height_desktop ); ?>;
}
<?php endif; ?>

/* Tablet Styles */
<?php if ( $height_tablet ) : ?>
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        height: <?php echo esc_attr( $height_tablet ); ?>;
    }
}
<?php endif; ?>

/* Mobile Styles */
<?php if ( $height_mobile ) : ?>
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        height: <?php echo esc_attr( $height_mobile ); ?>;
    }
}
<?php endif; ?>

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