<?php
/**
 * Google Map Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Get block attributes
$id                     = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility             = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$mapHeight              = isset($attrs['mapHeight']) ? $attrs['mapHeight'] : array(
    'desktop' => 400,
    'tablet' => 350,
    'mobile' => 300
);
$animation              = isset($attrs['animation']) ? $attrs['animation'] : 'none';
$borderStyle            = isset($attrs['borderStyle']) ? $attrs['borderStyle'] : 'none';
$borderWidth            = isset($attrs['borderWidth']) ? $attrs['borderWidth'] : array(
    'desktop' => array(
        'top' => 1,
        'right' => 1,
        'bottom' => 1,
        'left' => 1,
        'unit' => 'px'
    ),
    'tablet' => array(
        'top' => '',
        'right' => '',
        'bottom' => '',
        'left' => '',
        'unit' => 'px'
    ),
    'mobile' => array(
        'top' => '',
        'right' => '',
        'bottom' => '',
        'left' => '',
        'unit' => 'px'
    )
);
$borderRadius           = isset($attrs['borderRadius']) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');
$borderColor            = isset($attrs['borderColor']) ? $attrs['borderColor'] : '#e0e0e0';

// Box shadow
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
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

// Get box shadow CSS
$box_shadow_css = 'none';
if ( $boxShadow['enable'] ) {
    $position = $boxShadow['position'] === 'inset' ? 'inset ' : '';
    $box_shadow_css = $position . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'];
}

$box_shadow_hover_css = 'none';
if ( $boxShadowHover['enable'] ) {
    $position = $boxShadowHover['position'] === 'inset' ? 'inset ' : '';
    $box_shadow_hover_css = $position . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'];
}

// CSS Output
ob_start();
?>
/* Google Map Block - <?php echo esc_attr($id); ?> */
.<?php echo esc_attr($id); ?> {
    height: <?php echo esc_attr($mapHeight['desktop']); ?>px;
    width: 100%;
    overflow: hidden;
    
    <?php if ($borderStyle !== 'none') : ?>
        border-style: <?php echo esc_attr($borderStyle); ?>;
        border-color: <?php echo esc_attr($borderColor); ?>;
        <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php endif; ?>
    
    <?php if ($boxShadow['enable']) : ?>
        box-shadow: <?php echo esc_attr( $box_shadow_css ); ?>;
		transition: all .3s ease;
    <?php endif; ?>
}

<?php if ($boxShadowHover['enable']) : ?>
.<?php echo esc_attr($id); ?>:hover {
    box-shadow: <?php echo esc_attr( $box_shadow_hover_css ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr($id); ?> .digiblocks-google-map-container {
    width: 100%;
    height: 100%;
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr($id); ?> {
        height: <?php echo esc_attr(isset($mapHeight['tablet']) ? $mapHeight['tablet'] : 350); ?>px;
        
        <?php if ($borderStyle !== 'none' && isset($borderWidth['tablet']) && isset($borderRadius['tablet'])) : ?>
            <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
    }
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr($id); ?> {
        height: <?php echo esc_attr(isset($mapHeight['mobile']) ? $mapHeight['mobile'] : 300); ?>px;
        
        <?php if ($borderStyle !== 'none' && isset($borderWidth['mobile']) && isset($borderRadius['mobile'])) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
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