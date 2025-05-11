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

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-container-' . uniqid();
$contentLayout            = isset( $attrs['contentLayout'] ) ? $attrs['contentLayout'] : 'boxed';
$contentWidth             = isset( $attrs['contentWidth'] ) ? $attrs['contentWidth'] : [
    'desktop' => 1200,
    'tablet'  => '',
    'mobile'  => '',
];
$contentMaxWidth          = isset( $attrs['contentMaxWidth'] ) ? $attrs['contentMaxWidth'] : [
    'desktop' => 90,
    'tablet'  => '',
    'mobile'  => '',
];
$horizontalAlign          = isset( $attrs['horizontalAlign'] ) ? $attrs['horizontalAlign'] : 'center';
$verticalAlign            = isset( $attrs['verticalAlign'] ) ? $attrs['verticalAlign'] : 'center';
$heightType               = isset( $attrs['heightType'] ) ? $attrs['heightType'] : 'auto';
$minHeight                = isset( $attrs['minHeight'] ) ? $attrs['minHeight'] : [
    'desktop' => 0,
    'tablet'  => 0,
    'mobile'  => 0,
];
$columnGap                = isset( $attrs['columnGap'] ) ? $attrs['columnGap'] : [
    'desktop' => 20,
    'tablet'  => 15,
    'mobile'  => 10,
];
$rowGap                   = isset( $attrs['rowGap'] ) ? $attrs['rowGap'] : [
    'desktop' => 20,
    'tablet'  => 15,
    'mobile'  => 10,
];
$reverseColumnsMobile     = isset( $attrs['reverseColumnsMobile'] ) ? $attrs['reverseColumnsMobile'] : false;
$stackOnTablet            = isset( $attrs['stackOnTablet'] ) ? $attrs['stackOnTablet'] : false;
$stackOnMobile            = isset( $attrs['stackOnMobile'] ) ? $attrs['stackOnMobile'] : true;
$overflowHidden           = isset( $attrs['overflowHidden'] ) ? $attrs['overflowHidden'] : false;
$zIndex                   = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : 0;
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundImage          = isset( $attrs['backgroundImage'] ) ? $attrs['backgroundImage'] : null;
$backgroundPosition       = isset( $attrs['backgroundPosition'] ) ? $attrs['backgroundPosition'] : 'center center';
$backgroundRepeat         = isset( $attrs['backgroundRepeat'] ) ? $attrs['backgroundRepeat'] : 'no-repeat';
$backgroundSize           = isset( $attrs['backgroundSize'] ) ? $attrs['backgroundSize'] : 'cover';
$backgroundOverlay        = isset( $attrs['backgroundOverlay'] ) ? $attrs['backgroundOverlay'] : '';
$backgroundOverlayOpacity = isset( $attrs['backgroundOverlayOpacity'] ) ? $attrs['backgroundOverlayOpacity'] : 0.7;
$backgroundOverlayBlendMode = isset( $attrs['backgroundOverlayBlendMode'] ) ? $attrs['backgroundOverlayBlendMode'] : 'normal';
$padding                  = isset( $attrs['padding'] ) ? $attrs['padding'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
];
$margin                   = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
];
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth              = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'mobile'  => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
];
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderRadius             = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
];
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
if ( $heightType === 'full' ) {
    $heightCSS = 'height: 100vh;';
} elseif ( $heightType === 'custom' ) {
    $heightCSS = "min-height: {$minHeight['desktop']}px;";
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
/* Container Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    position: relative;
    display: flex;
    padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
    margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
    width: 100%;
    <?php echo esc_attr( $heightCSS ); ?>
    <?php if ( $backgroundColor ) : ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php endif; ?>
    <?php echo $backgroundImageCSS; ?>
    <?php if ( $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
    border-width: <?php echo esc_attr( $borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit'] ); ?>;
    border-color: <?php echo esc_attr( $borderColor ); ?>;
    <?php endif; ?>
    border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-container-inner {
	display: flex;
	flex-wrap: nowrap;
    gap: <?php echo esc_attr( $rowGap['desktop'] ); ?>px <?php echo esc_attr( $columnGap['desktop'] ); ?>px;
	width: 100%;
    <?php echo esc_attr( $contentWidthCSS ); ?>
    <?php echo esc_attr( $contentMaxWidthCSS ); ?>
    align-items: <?php echo esc_attr( $verticalAlign ); ?>;
    justify-content: <?php echo esc_attr( $horizontalAlign ); ?>;
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
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    object-fit: cover;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
        margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
        <?php if ( $heightType === 'custom' ) : ?>
        min-height: <?php echo esc_attr( $minHeight['tablet'] ); ?>px;
        <?php endif; ?>
        border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
        <?php if ( $borderStyle !== 'none' ) : ?>
        border-width: <?php echo esc_attr( $borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit'] ); ?>;
        <?php endif; ?>
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-container-inner {
        gap: <?php echo esc_attr( $rowGap['tablet'] ); ?>px <?php echo esc_attr( $columnGap['tablet'] ); ?>px;
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
        <?php if ( $stackOnTablet ) : ?>
		flex-direction: column;
        <?php endif; ?>
	}

	<?php if ( $stackOnTablet ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-container-inner .digiblocks-column {
			width: 100%;
		}
	<?php endif; ?>
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
        margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
        <?php if ( $heightType === 'custom' ) : ?>
        min-height: <?php echo esc_attr( $minHeight['mobile'] ); ?>px;
        <?php endif; ?>
        border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
        <?php if ( $borderStyle !== 'none' ) : ?>
        border-width: <?php echo esc_attr( $borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-container-inner {
		gap: <?php echo esc_attr( $rowGap['mobile'] ); ?>px <?php echo esc_attr( $columnGap['mobile'] ); ?>px;
		<?php if ($contentLayout !== 'full' && !empty($contentWidth['mobile'])) {
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
        <?php if ( $stackOnMobile ) : ?>
		flex-direction: column;
        <?php endif; ?>
        <?php if ( $reverseColumnsMobile ) : ?>
        flex-direction: column-reverse;
        <?php endif; ?>
	}

	<?php if ( $stackOnMobile ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-container-inner .digiblocks-column {
			width: 100%;
		}
	<?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();