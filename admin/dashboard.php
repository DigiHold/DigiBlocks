<?php
/**
 * Dashboard admin page for DigiBlocks.
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="digiblocks-admin-wrap">
	<div class="digiblocks-admin-header">
		<div class="digiblocks-admin-title">
			<div class="digiblocks-admin-icon">
				<?php echo $this->get_plugin_icon(); // phpcs:ignore ?>
			</div>
			<h1><?php esc_html_e( 'DigiBlocks', 'digiblocks' ); ?></h1>
		</div>
		<nav class="digiblocks-admin-tabs">
			<a href="<?php echo esc_url( admin_url( 'admin.php?page=digiblocks' ) ); ?>" class="active">
				<?php esc_html_e( 'Dashboard', 'digiblocks' ); ?>
			</a>
			<a href="<?php echo esc_url( admin_url( 'admin.php?page=digiblocks-settings' ) ); ?>">
				<?php esc_html_e( 'Settings', 'digiblocks' ); ?>
			</a>
		</nav>
	</div>

	<div class="digiblocks-admin-content">
		<div class="digiblocks-admin-section">
			<div class="digiblocks-section-header">
				<h2><?php esc_html_e( 'Block Manager', 'digiblocks' ); ?></h2>
				<p><?php esc_html_e( 'Enable or disable blocks to customize your editing experience.', 'digiblocks' ); ?></p>
			</div>

			<div class="digiblocks-blocks-container">
				<?php
				$blocks        = $this->get_blocks_list();
				$active_blocks = get_option( 'digiblocks_active_blocks', array() );

				if ( empty( $blocks ) ) {
					echo '<div class="digiblocks-notice"><p>' . esc_html__( 'No blocks found.', 'digiblocks' ) . '</p></div>';
				} else {
					echo '<div class="digiblocks-blocks-grid">';
					foreach ( $blocks as $block ) {
						$block_name        = $block['name'];
						$block_title       = $block['title'];
						$block_description = $block['description'];
						$block_icon        = $block['icon'];
						$is_active         = isset( $active_blocks[ $block_name ] ) ? $active_blocks[ $block_name ] : true;
						?>
						<div class="digiblocks-block-card<?php echo $is_active ? ' is-active' : ''; ?>" data-block-name="<?php echo esc_attr( $block_name ); ?>">
							<div class="digiblocks-block-card-header">
								<div class="digiblocks-block-icon">
									<?php
									// Since icon is already processed and converted to HTML in get_blocks_list()
									// we can just output it directly with proper escaping for SVG elements
									echo wp_kses(
										$block_icon,
										array(
											'span'   => array(
												'class' => array(),
											),
											'svg'    => array(
												'xmlns'   => array(),
												'viewbox' => array(),
												'width'   => array(),
												'height'  => array(),
												'fill'    => array(),
												'class'   => array(),
											),
											'path'   => array(
												'd'      => array(),
												'fill'   => array(),
												'stroke' => array(),
												'stroke-width' => array(),
												'stroke-linecap' => array(),
												'stroke-dasharray' => array(),
											),
											'g'      => array(
												'fill'   => array(),
												'transform' => array(),
											),
											'rect'   => array(
												'x'      => array(),
												'y'      => array(),
												'width'  => array(),
												'height' => array(),
												'fill'   => array(),
												'rx'     => array(),
											),
											'circle' => array(
												'cx'     => array(),
												'cy'     => array(),
												'r'      => array(),
												'fill'   => array(),
											),
										)
									);
									?>
								</div>
								<div class="digiblocks-block-info">
									<h3><?php echo esc_html( $block_title ); ?></h3>
									<?php if ( ! empty( $block_description ) ) : ?>
										<p><?php echo esc_html( $block_description ); ?></p>
									<?php endif; ?>
								</div>
								<div class="digiblocks-block-toggle">
									<label class="digiblocks-toggle">
										<input type="checkbox" <?php checked( $is_active ); ?>>
										<span class="digiblocks-toggle-slider"></span>
									</label>
								</div>
							</div>
						</div>
						<?php
					}
					echo '</div>';
				}
				?>
			</div>

			<div class="digiblocks-admin-actions">
				<button type="button" class="button button-primary" id="digiblocks-save-blocks">
					<?php esc_html_e( 'Save Changes', 'digiblocks' ); ?>
				</button>
				<div class="digiblocks-save-status"></div>
			</div>
		</div>

		<div class="digiblocks-admin-section">
			<div class="digiblocks-section-header">
				<h2><?php esc_html_e( 'Getting Started', 'digiblocks' ); ?></h2>
			</div>
			<div class="digiblocks-getting-started">
				<div class="digiblocks-step">
					<div class="digiblocks-step-number">1</div>
					<div class="digiblocks-step-content">
						<h3><?php esc_html_e( 'Enable Blocks', 'digiblocks' ); ?></h3>
						<p><?php esc_html_e( 'Use the Block Manager above to enable the blocks you want to use in your site.', 'digiblocks' ); ?></p>
					</div>
				</div>
				<div class="digiblocks-step">
					<div class="digiblocks-step-number">2</div>
					<div class="digiblocks-step-content">
						<h3><?php esc_html_e( 'Configure Settings', 'digiblocks' ); ?></h3>
						<p><?php esc_html_e( 'Head over to the Settings tab to configure global options like content width.', 'digiblocks' ); ?></p>
					</div>
				</div>
				<div class="digiblocks-step">
					<div class="digiblocks-step-number">3</div>
					<div class="digiblocks-step-content">
						<h3><?php esc_html_e( 'Start Building', 'digiblocks' ); ?></h3>
						<p><?php esc_html_e( 'Create or edit a page and look for the DigiBlocks category in the block inserter.', 'digiblocks' ); ?></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>