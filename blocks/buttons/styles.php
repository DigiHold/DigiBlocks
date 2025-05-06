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
$layout        = isset( $attrs['layout'] ) ? $attrs['layout'] : 'horizontal';
$align         = isset( $attrs['align'] ) ? $attrs['align'] : 'flex-start';
$buttonSpacing = isset( $attrs['buttonSpacing'] ) ? $attrs['buttonSpacing'] : ['desktop' => 10, 'tablet' => 8, 'mobile' => 6];

// CSS Output
ob_start();
?>
/* Buttons Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	display: flex;
	flex-wrap: wrap;
	align-items: <?php echo esc_attr( $align ); ?>;
	gap: <?php echo esc_attr( $buttonSpacing['desktop'] ); ?>px;
	<?php if ( 'vertical' === $layout ) : ?>
		flex-direction: column;
	<?php endif; ?>	
	transition: all 0.3s ease;
}

/* Responsive styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		gap: <?php echo esc_attr( $buttonSpacing['tablet'] ); ?>px;
	}
}

@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		gap: <?php echo esc_attr( $buttonSpacing['mobile'] ); ?>px;
	}
}

<?php
$digiblocks_css_output = ob_get_clean();