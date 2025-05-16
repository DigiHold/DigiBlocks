<?php
/**
 * Column Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-column-' . uniqid();
$width                    = isset( $attrs['width'] ) ? $attrs['width'] : [
    'desktop' => 100,
    'tablet'  => 100,
    'mobile'  => 100,
];
$order                    = isset( $attrs['order'] ) ? $attrs['order'] : [
    'desktop' => 0,
    'tablet'  => 0,
    'mobile'  => 0,
];
$hoverEffect              = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundImage          = isset( $attrs['backgroundImage'] ) ? $attrs['backgroundImage'] : null;
$backgroundPosition       = isset( $attrs['backgroundPosition'] ) ? $attrs['backgroundPosition'] : 'center center';
$backgroundRepeat         = isset( $attrs['backgroundRepeat'] ) ? $attrs['backgroundRepeat'] : 'no-repeat';
$backgroundSize           = isset( $attrs['backgroundSize'] ) ? $attrs['backgroundSize'] : 'cover';
$backgroundOverlay        = isset( $attrs['backgroundOverlay'] ) ? $attrs['backgroundOverlay'] : '';
$backgroundOverlayOpacity = isset( $attrs['backgroundOverlayOpacity'] ) ? $attrs['backgroundOverlayOpacity'] : 0.7;
$backgroundOverlayBlendMode = isset( $attrs['backgroundOverlayBlendMode'] ) ? $attrs['backgroundOverlayBlendMode'] : 'normal';
$padding                  = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                   = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth              = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderRadius             = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');
// Box shadow
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
);

// Background image CSS
$backgroundImageCSS = '';
if ( ! empty( $backgroundImage ) && ! empty( $backgroundImage['url'] ) ) {
    $backgroundImageCSS = "background-image: url({$backgroundImage['url']});
    background-position: {$backgroundPosition};
    background-repeat: {$backgroundRepeat};
    background-size: {$backgroundSize};";
}

// CSS Output
ob_start();
?>
/* Column Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    position: relative;
    width: <?php echo esc_attr( $width['desktop'] ); ?>%;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    display: flex;
    flex-direction: column;
    <?php if ( $order['desktop'] !== 0 ) : ?>
    order: <?php echo esc_attr( $order['desktop'] ); ?>;
    <?php endif; ?>
    <?php if ( $backgroundColor ) : ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php endif; ?>
    <?php echo esc_attr( $backgroundImageCSS ); ?>
    <?php if ( $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    border-color: <?php echo esc_attr( $borderColor ); ?>;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
	<?php if ( 'lift' === $hoverEffect ) : ?>
        transform: translateY(-10px);
    <?php elseif ( 'scale' === $hoverEffect ) : ?>
        transform: scale(1.05);
    <?php elseif ( 'glow' === $hoverEffect ) : ?>
        filter: brightness(1.1);
    <?php endif; ?>
}

<?php if ( $backgroundOverlay ) : ?>
.<?php echo esc_attr( $id ); ?>:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: <?php echo esc_attr( $backgroundOverlay ); ?>;
    opacity: <?php echo esc_attr( $backgroundOverlayOpacity ); ?>;
    mix-blend-mode: <?php echo esc_attr( $backgroundOverlayBlendMode ); ?>;
    z-index: 1;
    pointer-events: none;
    border-radius: inherit;
}
.<?php echo esc_attr( $id ); ?> > * {
    position: relative;
    z-index: 2;
}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
    	width: <?php echo esc_attr( $width['tablet'] ); ?>%;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php if ( $order['tablet'] !== 0 ) : ?>
        order: <?php echo esc_attr( $order['tablet'] ); ?>;
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
    	width: <?php echo esc_attr( $width['mobile'] ); ?>%;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
        <?php if ( $order['mobile'] !== 0 ) : ?>
        order: <?php echo esc_attr( $order['mobile'] ); ?>;
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
    }
}

<?php
$digiblocks_css_output = ob_get_clean();