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
$layout = isset( $attrs['layout'] ) ? $attrs['layout'] : 'horizontal';
$align  = isset( $attrs['align'] ) ? $attrs['align'] : 'flex-start';

// CSS Output
ob_start();
?>
/* Buttons Block - <?php echo esc_attr( $block_id ); ?> */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
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
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		gap: <?php echo esc_attr( $buttonSpacing['tablet'] ); ?>px;
	}
}

@media (max-width: 767px) {
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		gap: <?php echo esc_attr( $buttonSpacing['mobile'] ); ?>px;
	}
}

<?php
$digiblocks_css_output = ob_get_clean();