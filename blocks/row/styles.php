<?php
/**
 * Row Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get plugin settings for defaults
$plugin_settings = get_option('digiblocks_settings', array(
    'content_width'     => '1200',
    'content_max_width' => '90',
));

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-row-' . uniqid();
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
$isNested                 = isset( $attrs['isNested'] ) ? $attrs['isNested'] : false;
$contentWidth             = isset( $attrs['contentWidth'] ) ? $attrs['contentWidth'] : [
    'desktop' => isset($plugin_settings['content_width']) && !empty($plugin_settings['content_width']) ? intval($plugin_settings['content_width']) : 1200,
    'tablet'  => '',
    'mobile'  => '',
];
$contentMaxWidth          = isset( $attrs['contentMaxWidth'] ) ? $attrs['contentMaxWidth'] : [
    'desktop' => isset($plugin_settings['content_max_width']) && !empty($plugin_settings['content_max_width']) ? intval($plugin_settings['content_max_width']) : 90,
    'tablet'  => '',
    'mobile'  => '',
];
$heightType = isset( $attrs['heightType'] ) ? $attrs['heightType'] : [
    'desktop' => 'auto',
    'tablet'  => 'auto',
    'mobile'  => 'auto',
];
$nestedWidth = isset( $attrs['nestedWidth'] ) ? $attrs['nestedWidth'] : [
    'desktop' => 'auto',
    'tablet'  => 'auto',
    'mobile'  => 'auto',
];
$horizontalAlign = isset( $attrs['horizontalAlign'] ) ? $attrs['horizontalAlign'] : [
    'desktop' => 'flex-start',
    'tablet'  => 'flex-start',
    'mobile'  => 'flex-start',
];
$verticalAlign = isset( $attrs['verticalAlign'] ) ? $attrs['verticalAlign'] : [
    'desktop' => 'center',
    'tablet'  => 'center',
    'mobile'  => 'center',
];
$minHeight                = isset( $attrs['minHeight'] ) ? $attrs['minHeight'] : [
    'desktop' => 0,
    'tablet'  => 0,
    'mobile'  => 0,
];
$gap = isset( $attrs['gap'] ) ? $attrs['gap'] : array(
    'desktop' => array( 'value' => 20, 'unit' => 'px' ),
    'tablet'  => array( 'value' => '', 'unit' => 'px' ),
    'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$overflowHidden           = isset( $attrs['overflowHidden'] ) ? $attrs['overflowHidden'] : false;
$zIndex                   = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : 0;
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundGradient       = isset( $attrs['backgroundGradient'] ) ? $attrs['backgroundGradient'] : array(
    'enable' => false,
    'type' => 'linear',
    'angle' => 90,
    'position' => 'center center',
    'colors' => array(
        array('color' => '#667eea', 'position' => 0),
        array('color' => '#764ba2', 'position' => 100)
    )
);
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
$borderWidth              = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : digiblocks_get_default_dimensions('px');
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

// Height CSS for non-nested rows only
$heightCSS = '';
if (!$isNested) {
    if ( $heightType['desktop'] === 'full' ) {
        $heightCSS = 'height: 100vh;';
    } elseif ( $heightType['desktop'] === 'custom' ) {
        $heightCSS = "min-height: {$minHeight['desktop']}px;";
    }
}

// Responsive Height CSS for non-nested rows only
$heightTabletCSS = '';
if (!$isNested) {
    if ( $heightType['tablet'] === 'auto' ) {
        $heightTabletCSS = 'height: auto;';
    } elseif ( $heightType['tablet'] === 'full' ) {
        $heightTabletCSS = 'height: 100vh;';
    } elseif ( $heightType['tablet'] === 'custom' ) {
        $heightTabletCSS = "min-height: {$minHeight['tablet']}px;";
    }
}

$heightMobileCSS = '';
if (!$isNested) {
    if ( $heightType['mobile'] === 'auto' ) {
        $heightMobileCSS = 'height: auto;';
    } elseif ( $heightType['mobile'] === 'full' ) {
        $heightMobileCSS = 'height: 100vh;';
    } elseif ( $heightType['mobile'] === 'custom' ) {
        $heightMobileCSS = "min-height: {$minHeight['mobile']}px;";
    }
}

// Content width CSS for non-nested rows
$contentWidthCSS = '';
if (!$isNested) {
    $contentWidthCSS = "width: {$contentWidth['desktop']}px;
    margin-left: auto;
    margin-right: auto;";
}

// Content max width CSS for non-nested rows
$contentMaxWidthCSS = '';
if (!$isNested) {
    $contentMaxWidthCSS = "max-width: {$contentMaxWidth['desktop']}%;";
}

// Generate gradient CSS
$gradientCSS = '';
if (isset($backgroundGradient['enable']) && $backgroundGradient['enable'] && !empty($backgroundGradient['colors'])) {
    $colorStops = array();
    foreach ($backgroundGradient['colors'] as $stop) {
        $colorStops[] = $stop['color'] . ' ' . $stop['position'] . '%';
    }
    $colorStopsString = implode(', ', $colorStops);
    
    if ($backgroundGradient['type'] === 'radial') {
        $gradientCSS = "background-image: radial-gradient(circle at {$backgroundGradient['position']}, {$colorStopsString});";
    } else {
        $gradientCSS = "background-image: linear-gradient({$backgroundGradient['angle']}deg, {$colorStopsString});";
    }
}

// Background styles - priority: gradient > image > color
$backgroundStyles = '';

// Background color (lowest priority)
if ( $backgroundColor ) {
    $backgroundStyles .= "background-color: {$backgroundColor};";
}

// Background gradient
if ( $gradientCSS ) {
    $backgroundStyles .= $gradientCSS;
}

// Background image (highest priority)
if ( ! empty( $backgroundImage ) && ! empty( $backgroundImage['url'] ) ) {
    $imageCSS = "url({$backgroundImage['url']})";
    if ( $gradientCSS ) {
        // Layer image over gradient
        $backgroundStyles = str_replace(
            'background-image: ' . substr($gradientCSS, 18, -1), // Remove 'background-image: ' and ';'
            "background-image: {$imageCSS}, " . substr($gradientCSS, 18, -1),
            $backgroundStyles
        );
    } else {
        $backgroundStyles .= "background-image: {$imageCSS};";
    }
    $backgroundStyles .= "background-position: {$backgroundPosition};
    background-repeat: {$backgroundRepeat};
    background-size: {$backgroundSize};";
}

// CSS Output
ob_start();
?>
/* Row Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    position: relative;
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
    <?php echo esc_attr( $heightCSS ); ?>
    <?php echo esc_attr( $backgroundStyles ); ?>
    <?php if ( $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    border-color: <?php echo esc_attr( $borderColor ); ?>;
    <?php endif; ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php endif; ?>
    <?php if ( $overflowHidden ) : ?>
    overflow: hidden;
    <?php endif; ?>
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . $v_unit ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . $v_unit ); ?>;
        <?php
            endif;
        endif;
        ?>
    <?php endif; ?>
    <?php if ( '' !== $zIndex && null !== $zIndex ) : ?>
        z-index: <?php echo esc_attr( $zIndex ); ?>;
    <?php endif; ?>
	<?php
    $transform_value = digiblocks_get_transform_css( $transform, 'desktop' );
    if ( ! empty( $transform_value ) ) :
    ?>
    transform: <?php echo esc_attr( $transform_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'desktop' ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $transformHover ) && isset( $transformHover['transitionDuration'] ) && '' !== $transformHover['transitionDuration'] && null !== $transformHover['transitionDuration'] ) : ?>
	transition: all <?php echo esc_attr( $transformHover['transitionDuration'] ); ?>ms ease;
	<?php else : ?>
    transition: all 0.3s ease;
	<?php endif; ?>
}

<?php
$has_box_shadow_hover = isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'];
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( $has_box_shadow_hover || ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $has_box_shadow_hover ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>

    <?php if ( ! empty( $transform_hover_value ) ) : ?>
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> > .digiblocks-row-inner {
    display: flex;
    <?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_single_gap_css( $gap, 'desktop' ) ); ?>
    <?php echo esc_attr( $contentWidthCSS ); ?>
    <?php echo esc_attr( $contentMaxWidthCSS ); ?>
}

.<?php echo esc_attr( $id ); ?>.is-nested {
    width: <?php echo $nestedWidth['desktop'] === 'full' ? '100%' : 'auto'; ?>;
    display: flex;
    <?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_single_gap_css( $gap, 'desktop' ) ); ?>
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

/* Background video */
.<?php echo esc_attr( $id ); ?> .digiblocks-bg-video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    border-radius: inherit;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-bg-video {
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php echo esc_attr( $heightTabletCSS ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '0';
            $h_unit_tablet = isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_tablet = isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '0';
            $v_unit_tablet = isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
            if ( '' !== $v_value_tablet ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_tablet = digiblocks_get_transform_css( $transform, 'tablet' );
        if ( ! empty( $transform_value_tablet ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_tablet ); ?>;
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'tablet' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'tablet' ); ?>;
		}
	<?php endif; ?>

    .<?php echo esc_attr( $id ); ?> > .digiblocks-row-inner {
        <?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_single_gap_css( $gap, 'tablet' ) ); ?>
        <?php if (!$isNested) : ?>
            <?php if (!empty($contentWidth['tablet'])) : ?>
                width: <?php echo esc_attr( $contentWidth['tablet'] ); ?>px;
            <?php else : ?>
                width: <?php echo esc_attr( $contentWidth['desktop'] ); ?>px;
            <?php endif; ?>
            <?php if (!empty($contentMaxWidth['tablet'])) : ?>
                max-width: <?php echo esc_attr( $contentMaxWidth['tablet'] ); ?>%;
            <?php else : ?>
                max-width: <?php echo esc_attr( $contentMaxWidth['desktop'] ); ?>%;
            <?php endif; ?>
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?>.is-nested {
        width: <?php echo $nestedWidth['tablet'] === 'full' ? '100%' : 'auto'; ?>;
        <?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_single_gap_css( $gap, 'tablet' ) ); ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
        <?php echo esc_attr( $heightMobileCSS ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( $borderStyle !== 'none' ) : ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
    	<?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '0';
            $h_unit_mobile = isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '0';
            $v_unit_mobile = isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
            if ( '' !== $v_value_mobile ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_mobile = digiblocks_get_transform_css( $transform, 'mobile' );
        if ( ! empty( $transform_value_mobile ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_mobile ); ?>;
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'mobile' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'mobile' ); ?>;
		}
	<?php endif; ?>

    .<?php echo esc_attr( $id ); ?> > .digiblocks-row-inner {
        <?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_single_gap_css( $gap, 'mobile' ) ); ?>
        <?php if (!$isNested) : ?>
            <?php if ( ! empty( $contentWidth['mobile'] ) ) : ?>
                width: <?php echo esc_attr( $contentWidth['mobile'] ); ?>px;
            <?php elseif ( ! empty( $contentWidth['tablet'] ) ) : ?>
                width: <?php echo esc_attr( $contentWidth['tablet'] ); ?>px;
            <?php else : ?>
                width: <?php echo esc_attr( $contentWidth['desktop'] ); ?>px;
            <?php endif; ?>
            <?php if ( ! empty( $contentMaxWidth['mobile'] ) ) : ?>
                max-width: <?php echo esc_attr( $contentMaxWidth['mobile'] ); ?>%;
            <?php elseif ( ! empty( $contentMaxWidth['tablet'] ) ) : ?>
                max-width: <?php echo esc_attr( $contentMaxWidth['tablet'] ); ?>%;
            <?php else : ?>
                max-width: <?php echo esc_attr( $contentMaxWidth['desktop'] ); ?>%;
            <?php endif; ?>
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?>.is-nested {
        width: <?php echo $nestedWidth['mobile'] === 'full' ? '100%' : 'auto'; ?>;
        <?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_single_gap_css( $gap, 'mobile' ) ); ?>
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