<?php
/**
 * Buttons Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes with defaults.
$id            = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility    = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$layout        = isset( $attrs['layout'] ) ? $attrs['layout'] : 'horizontal';
$horizontalAlign = isset( $attrs['horizontalAlign'] ) ? $attrs['horizontalAlign'] : [
    'desktop' => 'center',
    'tablet'  => 'center',
    'mobile'  => 'center',
];
$verticalAlign = isset( $attrs['verticalAlign'] ) ? $attrs['verticalAlign'] : [
    'desktop' => 'flex-start',
    'tablet'  => 'flex-start',
    'mobile'  => 'flex-start',
];
$buttonSpacing = isset( $attrs['buttonSpacing'] ) ? $attrs['buttonSpacing'] : ['desktop' => 10, 'tablet' => 8, 'mobile' => 6];

// CSS Output
ob_start();
?>
/* Buttons Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	display: flex;
	flex-wrap: wrap;
	<?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'desktop' ) ); ?>
	gap: <?php echo esc_attr( $buttonSpacing['desktop'] ); ?>px;
	<?php if ( 'vertical' === $layout ) : ?>
		flex-direction: column;
	<?php endif; ?>	
	transition: all 0.3s ease;
}

/* Responsive styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'tablet' ) ); ?>
		gap: <?php echo esc_attr( $buttonSpacing['tablet'] ); ?>px;
	}
}

@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'mobile' ) ); ?>
		gap: <?php echo esc_attr( $buttonSpacing['mobile'] ); ?>px;
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