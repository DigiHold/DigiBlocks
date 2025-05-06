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
        'top' => 1,
        'right' => 1,
        'bottom' => 1,
        'left' => 1,
        'unit' => 'px'
    ),
    'mobile' => array(
        'top' => 1,
        'right' => 1,
        'bottom' =>
        1,
        'left' => 1,
        'unit' => 'px'
    )
);
$borderRadius           = isset($attrs['borderRadius']) ? $attrs['borderRadius'] : array(
    'desktop' => array(
        'top' => 0,
        'right' => 0,
        'bottom' => 0,
        'left' => 0,
        'unit' => 'px'
    ),
    'tablet' => array(
        'top' => 0,
        'right' => 0,
        'bottom' => 0,
        'left' => 0,
        'unit' => 'px'
    ),
    'mobile' => array(
        'top' => 0,
        'right' => 0,
        'bottom' => 0,
        'left' => 0,
        'unit' => 'px'
    )
);
$borderColor            = isset($attrs['borderColor']) ? $attrs['borderColor'] : '#e0e0e0';
$boxShadow              = isset($attrs['boxShadow']) ? $attrs['boxShadow'] : array(
    'enable' => false,
    'color' => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical' => 0,
    'blur' => 0,
    'spread' => 0,
    'position' => 'outset'
);
$boxShadowHover         = isset($attrs['boxShadowHover']) ? $attrs['boxShadowHover'] : array(
    'enable' => false,
    'color' => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical' => 0,
    'blur' => 0,
    'spread' => 0,
    'position' => 'outset'
);

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
        border-width: <?php echo esc_attr($borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' 
            . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' 
            . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' 
            . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit']); ?>;
        border-radius: <?php echo esc_attr($borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' 
            . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' 
            . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' 
            . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit']); ?>;
    <?php endif; ?>
    
    <?php if (isset($boxShadow['enable']) && $boxShadow['enable']) : ?>
        box-shadow: <?php echo esc_attr(($boxShadow['position'] === 'inset' ? 'inset ' : '') 
            . $boxShadow['horizontal'] . 'px ' 
            . $boxShadow['vertical'] . 'px ' 
            . $boxShadow['blur'] . 'px ' 
            . $boxShadow['spread'] . 'px ' 
            . $boxShadow['color']); ?>;
		transition: all .3s ease;
    <?php endif; ?>
}

<?php if (isset($boxShadowHover['enable']) && $boxShadowHover['enable']) : ?>
.<?php echo esc_attr($id); ?>:hover {
    box-shadow: <?php echo esc_attr(($boxShadowHover['position'] === 'inset' ? 'inset ' : '') 
		. $boxShadowHover['horizontal'] . 'px ' 
		. $boxShadowHover['vertical'] . 'px ' 
		. $boxShadowHover['blur'] . 'px ' 
		. $boxShadowHover['spread'] . 'px ' 
		. $boxShadowHover['color']); ?>;
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
            border-width: <?php echo esc_attr($borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' 
                . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' 
                . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' 
                . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit']); ?>;
            border-radius: <?php echo esc_attr($borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' 
                . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' 
                . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' 
                . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit']); ?>;
        <?php endif; ?>
    }
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr($id); ?> {
        height: <?php echo esc_attr(isset($mapHeight['mobile']) ? $mapHeight['mobile'] : 300); ?>px;
        
        <?php if ($borderStyle !== 'none' && isset($borderWidth['mobile']) && isset($borderRadius['mobile'])) : ?>
            border-width: <?php echo esc_attr($borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' 
                . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' 
                . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' 
                . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit']); ?>;
            border-radius: <?php echo esc_attr($borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' 
                . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' 
                . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' 
                . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit']); ?>;
        <?php endif; ?>
    }
}
<?php
$digiblocks_css_output = ob_get_clean();