<?php
/**
 * Container Block Styles
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
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-container-' . uniqid();
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$isNested                 = isset( $attrs['isNested'] ) ? $attrs['isNested'] : false;
$contentLayout            = isset( $attrs['contentLayout'] ) ? $attrs['contentLayout'] : 'boxed';
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
$flexWrap                 = isset( $attrs['flexWrap'] ) ? $attrs['flexWrap'] : [
    'desktop' => 'nowrap',
    'tablet'  => 'nowrap',
    'mobile'  => 'nowrap',
];
$heightType = isset( $attrs['heightType'] ) ? $attrs['heightType'] : [
    'desktop' => 'auto',
    'tablet'  => 'auto',
    'mobile'  => 'auto',
];
$horizontalAlign = isset( $attrs['horizontalAlign'] ) ? $attrs['horizontalAlign'] : [
    'desktop' => 'center',
    'tablet'  => 'center',
    'mobile'  => 'center',
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
$columnGap = isset( $attrs['columnGap'] ) ? $attrs['columnGap'] : array(
	'desktop' => array( 'value' => 20, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$rowGap = isset( $attrs['rowGap'] ) ? $attrs['rowGap'] : array(
	'desktop' => array( 'value' => 20, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$reverseColumnsMobile     = isset( $attrs['reverseColumnsMobile'] ) ? $attrs['reverseColumnsMobile'] : false;
$stackOnTablet            = isset( $attrs['stackOnTablet'] ) ? $attrs['stackOnTablet'] : false;
$stackOnMobile            = isset( $attrs['stackOnMobile'] ) ? $attrs['stackOnMobile'] : true;
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

// Height CSS
$heightCSS = '';
if ( $heightType['desktop'] === 'full' ) {
    $heightCSS = 'height: 100vh;';
} elseif ( $heightType['desktop'] === 'custom' ) {
    $heightCSS = "min-height: {$minHeight['desktop']}px;";
}

// Responsive Height CSS
$heightTabletCSS = '';
if ( $heightType['tablet'] === 'auto' ) {
    $heightTabletCSS = 'height: auto;';
} elseif ( $heightType['tablet'] === 'full' ) {
    $heightTabletCSS = 'height: 100vh;';
} elseif ( $heightType['tablet'] === 'custom' ) {
    $heightTabletCSS = "min-height: {$minHeight['tablet']}px;";
}

$heightMobileCSS = '';
if ( $heightType['mobile'] === 'auto' ) {
    $heightMobileCSS = 'height: auto;';
} elseif ( $heightType['mobile'] === 'full' ) {
    $heightMobileCSS = 'height: 100vh;';
} elseif ( $heightType['mobile'] === 'custom' ) {
    $heightMobileCSS = "min-height: {$minHeight['mobile']}px;";
}

// Content width CSS
$contentWidthCSS = '';
if ($contentLayout === 'full') {
	$contentWidthCSS = 'width: 100%;';
} else {
    $contentWidthCSS = "width: {$contentWidth['desktop']}px;
    margin-left: auto;
    margin-right: auto;";
}

// Content max width CSS
$contentMaxWidthCSS = '';
if ($contentLayout === 'full') {
	$contentMaxWidthCSS = 'max-width: 100%;';
} else {
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
/* Container Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    position: relative;
    display: flex;
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
    <?php if ( $zIndex ) : ?>
    z-index: <?php echo esc_attr( $zIndex ); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> > .digiblocks-container-inner {
	display: flex;
	<?php echo esc_attr( digiblocks_get_css( 'flex-wrap', $flexWrap, 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_gap_css( $rowGap, $columnGap, 'desktop' ) ); ?>
	width: 100%;
}

<?php if (!$isNested) : ?>
.<?php echo esc_attr( $id ); ?>.alignfull > .digiblocks-container-inner {
    <?php echo esc_attr( $contentWidthCSS ); ?>
    <?php echo esc_attr( $contentMaxWidthCSS ); ?>
}
<?php endif; ?>

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
    }

	.<?php echo esc_attr( $id ); ?> > .digiblocks-container-inner {
		<?php echo esc_attr( digiblocks_get_css( 'flex-wrap', $flexWrap, 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_gap_css( $rowGap, $columnGap, 'tablet' ) ); ?>
        <?php if ( $stackOnTablet ) : ?>
		flex-direction: column;
        <?php endif; ?>
	}

	<?php if (!$isNested) : ?>
	.<?php echo esc_attr( $id ); ?>.alignfull > .digiblocks-container-inner {
		<?php if ($contentLayout !== 'full' && !empty($contentWidth['tablet'])) {
			?>
			width: <?php echo esc_attr( $contentWidth['tablet'] ); ?>px;
			<?php
		} else {
			?>
			width: 100%;
			<?php
		} ?>
		<?php if ($contentLayout !== 'full' && !empty($contentMaxWidth['tablet'])) {
			?>
			max-width: <?php echo esc_attr( $contentMaxWidth['tablet'] ); ?>%;
			<?php
		} else {
			?>
			max-width: 90%;
			<?php
		} ?>
	}
	<?php endif; ?>

	<?php if ( $stackOnTablet ) : ?>
		.<?php echo esc_attr( $id ); ?> > .digiblocks-container-inner .digiblocks-column {
			width: 100%;
		}
	<?php endif; ?>
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
    }

	.<?php echo esc_attr( $id ); ?> > .digiblocks-container-inner {
		<?php echo esc_attr( digiblocks_get_css( 'flex-wrap', $flexWrap, 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_css( 'align-items', $verticalAlign, 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_css( 'justify-content', $horizontalAlign, 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_gap_css( $rowGap, $columnGap, 'mobile' ) ); ?>
        <?php if ( $stackOnMobile ) : ?>
		flex-direction: column;
        <?php endif; ?>
        <?php if ( $reverseColumnsMobile ) : ?>
        flex-direction: column-reverse;
        <?php endif; ?>
	}

	<?php if (!$isNested) : ?>
	.<?php echo esc_attr( $id ); ?>.alignfull > .digiblocks-container-inner {
		<?php if ( $contentLayout !== 'full' && ! empty( $contentWidth['mobile'] ) ) {
			?>
			width: <?php echo esc_attr( $contentWidth['mobile'] ); ?>px;
			<?php
		} else {
			?>
			width: 100%;
			<?php
		} ?>
		<?php if ($contentLayout !== 'full' && !empty($contentMaxWidth['mobile'])) {
			?>
			max-width: <?php echo esc_attr( $contentMaxWidth['mobile'] ); ?>%;
			<?php
		} else {
			?>
			max-width: 90%;
			<?php
		} ?>
	}
	<?php endif; ?>

	<?php if ( $stackOnMobile ) : ?>
		.<?php echo esc_attr( $id ); ?> > .digiblocks-container-inner .digiblocks-column {
			width: 100%;
		}
	<?php endif; ?>
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