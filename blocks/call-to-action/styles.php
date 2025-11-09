<?php
/**
 * Call To Action Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id                      = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility              = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
$style                   = isset( $attrs['style'] ) ? $attrs['style'] : 'basic';
$horizontalLayout        = isset( $attrs['horizontalLayout'] ) ? $attrs['horizontalLayout'] : false;
$title                   = isset( $attrs['title'] ) ? $attrs['title'] : '';
$content                 = isset( $attrs['content'] ) ? $attrs['content'] : '';
$headingTag              = isset( $attrs['headingTag'] ) ? $attrs['headingTag'] : 'h2';
$padding                 = isset( $attrs['padding'] ) ? $attrs['padding'] : [
    'desktop' => [ 'top' => 40, 'right' => 30, 'bottom' => 40, 'left' => 30, 'unit' => 'px' ],
    'tablet'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ],
    'mobile'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ]
];
$margin                  = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$titleColor              = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '';
$textColor               = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$buttonColor             = isset( $attrs['buttonColor'] ) ? $attrs['buttonColor'] : '#1e73be';
$buttonTextColor         = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$backgroundColor         = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#f5f5f5';
$backgroundType          = isset( $attrs['backgroundType'] ) ? $attrs['backgroundType'] : 'color';
$backgroundImage         = isset( $attrs['backgroundImage'] ) ? $attrs['backgroundImage'] : null;
$backgroundOverlayColor  = isset( $attrs['backgroundOverlayColor'] ) ? $attrs['backgroundOverlayColor'] : 'rgba(0,0,0,0.5)';
$backgroundOverlayOpacity = isset( $attrs['backgroundOverlayOpacity'] ) ? $attrs['backgroundOverlayOpacity'] : 50;
$backgroundPosition      = isset( $attrs['backgroundPosition'] ) ? $attrs['backgroundPosition'] : 'center center';
$backgroundSize          = isset( $attrs['backgroundSize'] ) ? $attrs['backgroundSize'] : 'cover';
$backgroundRepeat        = isset( $attrs['backgroundRepeat'] ) ? $attrs['backgroundRepeat'] : 'no-repeat';
$borderStyle             = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth             = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : digiblocks_get_default_dimensions('px');
$borderColor             = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderRadius            = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');
$align                   = isset( $attrs['align'] ) ? $attrs['align'] : 'left';
$textAlign               = isset( $attrs['textAlign'] ) ? $attrs['textAlign'] : 'left';
$contentWidth            = isset( $attrs['contentWidth'] ) ? $attrs['contentWidth'] : null;
$width                   = isset( $attrs['width'] ) ? $attrs['width'] : '100%';
$animation               = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$buttonsAlign            = isset( $attrs['buttonsAlign'] ) ? $attrs['buttonsAlign'] : 'left';
$buttons                 = isset( $attrs['buttons'] ) ? $attrs['buttons'] : array();
$buttonBorderRadius      = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] :  [
    'desktop' => [ 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' ],
    'tablet'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ],
    'mobile'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ]
];
$buttonPadding           = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => [ 'top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px' ],
    'tablet'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ],
    'mobile'  => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ]
];
$titleHoverColor         = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$textHoverColor          = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$buttonHoverColor        = isset( $attrs['buttonHoverColor'] ) ? $attrs['buttonHoverColor'] : '';
$buttonTextHoverColor    = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '';
$backgroundHoverColor    = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$highlightText           = isset( $attrs['highlightText'] ) ? $attrs['highlightText'] : '';
$highlightColor          = isset( $attrs['highlightColor'] ) ? $attrs['highlightColor'] : '#ffde59';
$highlightType           = isset( $attrs['highlightType'] ) ? $attrs['highlightType'] : 'none';
$verticalAlign           = isset( $attrs['verticalAlign'] ) ? $attrs['verticalAlign'] : 'center';
$reverseColumnsMobile    = isset( $attrs['reverseColumnsMobile'] ) ? $attrs['reverseColumnsMobile'] : false;

$minHeight = isset( $attrs['minHeight'] ) ? $attrs['minHeight'] : array(
    'desktop' => 0,
    'tablet'  => 0,
    'mobile'  => 0
);

// Make sure minHeight has all responsive properties
$minHeight['desktop'] = isset($minHeight['desktop']) ? $minHeight['desktop'] : 0;
$minHeight['tablet'] = isset($minHeight['tablet']) ? $minHeight['tablet'] : 0;
$minHeight['mobile'] = isset($minHeight['mobile']) ? $minHeight['mobile'] : 0;

// Typography settings with safe defaults
$default_title_typography = array(
    'fontFamily' => '',
    'fontSize' => array(
		'desktop' => array('value' => 36, 'unit' => 'px'),
		'tablet'  => array('value' => 32, 'unit' => 'px'),
		'mobile'  => array('value' => 28, 'unit' => 'px'),
	),
    'fontWeight' => '700',
    'fontStyle' => 'normal',
    'textTransform' => 'none',
    'textDecoration' => 'none',
    'lineHeight' => array(
		'desktop' => array('value' => 1.2, 'unit' => 'em'),
		'tablet'  => array('value' => 1.2, 'unit' => 'em'),
		'mobile'  => array('value' => 1.2, 'unit' => 'em'),
	),
    'letterSpacing' => array('desktop' => 0, 'tablet' => 0, 'mobile' => 0),
);

$default_content_typography = array(
    'fontFamily' => '',
    'fontSize' => array(
		'desktop' => array('value' => 18, 'unit' => 'px'),
		'tablet'  => array('value' => 16, 'unit' => 'px'),
		'mobile'  => array('value' => 16, 'unit' => 'px'),
	),
    'fontWeight' => '400',
    'fontStyle' => 'normal',
    'textTransform' => 'none',
    'textDecoration' => 'none',
    'lineHeight' => array(
		'desktop' => array('value' => 1.6, 'unit' => 'em'),
		'tablet'  => array('value' => 1.6, 'unit' => 'em'),
		'mobile'  => array('value' => 1.5, 'unit' => 'em'),
	),
    'letterSpacing' => array('desktop' => 0, 'tablet' => 0, 'mobile' => 0),
);

$default_button_typography = array(
    'fontFamily' => '',
    'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => 16, 'unit' => 'px'),
		'mobile'  => array('value' => 16, 'unit' => 'px'),
	),
    'fontWeight' => '500',
    'fontStyle' => 'normal',
    'textTransform' => 'none',
    'textDecoration' => 'none',
    'lineHeight' => array(
		'desktop' => array('value' => 1.5, 'unit' => 'em'),
		'tablet'  => array('value' => 1.5, 'unit' => 'em'),
		'mobile'  => array('value' => 1.5, 'unit' => 'em'),
	),
    'letterSpacing' => array('desktop' => 0, 'tablet' => 0, 'mobile' => 0),
);

$titleTypography = isset($attrs['titleTypography']) ? $attrs['titleTypography'] : $default_title_typography;
$contentTypography = isset($attrs['contentTypography']) ? $attrs['contentTypography'] : $default_content_typography;
$buttonTypography = isset($attrs['buttonTypography']) ? $attrs['buttonTypography'] : $default_button_typography;

// Make sure typography objects have all needed properties
if (!isset($titleTypography['fontSize'])) {
    $titleTypography['fontSize'] = $default_title_typography['fontSize'];
} else {
    $titleTypography['fontSize']['desktop']['value'] = isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['desktop']['value'] ) ? $titleTypography['fontSize']['desktop']['value'] : $default_title_typography['fontSize']['desktop'];
    $titleTypography['fontSize']['tablet']['value'] = isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) ? $titleTypography['fontSize']['tablet']['value'] : $default_title_typography['fontSize']['tablet'];
    $titleTypography['fontSize']['mobile']['value'] = isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) ? $titleTypography['fontSize']['mobile']['value'] : $default_title_typography['fontSize']['mobile'];
}

if (!isset($titleTypography['lineHeight'])) {
    $titleTypography['lineHeight'] = $default_title_typography['lineHeight'];
} else {
    $titleTypography['lineHeight']['desktop']['value'] = isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['desktop']['value'] ) ? $titleTypography['lineHeight']['desktop']['value'] : $default_title_typography['lineHeight']['desktop'];
    $titleTypography['lineHeight']['tablet']['value'] = isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet']['value'] ) ? $titleTypography['lineHeight']['tablet']['value'] : $default_title_typography['lineHeight']['tablet'];
    $titleTypography['lineHeight']['mobile']['value'] = isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile']['value'] ) ? $titleTypography['lineHeight']['mobile']['value'] : $default_title_typography['lineHeight']['mobile'];
}

if (!isset($titleTypography['letterSpacing'])) {
    $titleTypography['letterSpacing'] = $default_title_typography['letterSpacing'];
} else {
    $titleTypography['letterSpacing']['desktop']['value'] = isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['desktop']['value'] ) ? $titleTypography['letterSpacing']['desktop']['value'] : $default_title_typography['letterSpacing']['desktop'];
    $titleTypography['letterSpacing']['tablet']['value'] = isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) ? $titleTypography['letterSpacing']['tablet']['value'] : $default_title_typography['letterSpacing']['tablet'];
    $titleTypography['letterSpacing']['mobile']['value'] = isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) ? $titleTypography['letterSpacing']['mobile']['value'] : $default_title_typography['letterSpacing']['mobile'];
}


// Do the same for contentTypography
if (!isset($contentTypography['fontSize'])) {
    $contentTypography['fontSize'] = $default_content_typography['fontSize'];
} else {
    $contentTypography['fontSize']['desktop']['value'] = isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) ? $contentTypography['fontSize']['desktop']['value'] : $default_content_typography['fontSize']['desktop'];
    $contentTypography['fontSize']['tablet']['value'] = isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) ? $contentTypography['fontSize']['tablet']['value'] : $default_content_typography['fontSize']['tablet'];
    $contentTypography['fontSize']['mobile']['value'] = isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) ? $contentTypography['fontSize']['mobile']['value'] : $default_content_typography['fontSize']['mobile'];
}

if (!isset($contentTypography['lineHeight'])) {
    $contentTypography['lineHeight'] = $default_content_typography['lineHeight'];
} else {
    $contentTypography['lineHeight']['desktop']['value'] = isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['desktop']['value'] ) ? $contentTypography['lineHeight']['desktop']['value'] : $default_content_typography['lineHeight']['desktop'];
    $contentTypography['lineHeight']['tablet']['value'] = isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) ? $contentTypography['lineHeight']['tablet']['value'] : $default_content_typography['lineHeight']['tablet'];
    $contentTypography['lineHeight']['mobile']['value'] = isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) ? $contentTypography['lineHeight']['mobile']['value'] : $default_content_typography['lineHeight']['mobile'];
}

if (!isset($contentTypography['letterSpacing'])) {
    $contentTypography['letterSpacing'] = $default_content_typography['letterSpacing'];
} else {
    $contentTypography['letterSpacing']['desktop']['value'] = isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) ? $contentTypography['letterSpacing']['desktop']['value'] : $default_content_typography['letterSpacing']['desktop'];
    $contentTypography['letterSpacing']['tablet']['value'] = isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) ? $contentTypography['letterSpacing']['tablet']['value'] : $default_content_typography['letterSpacing']['tablet'];
    $contentTypography['letterSpacing']['mobile']['value'] = isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) ? $contentTypography['letterSpacing']['mobile']['value'] : $default_content_typography['letterSpacing']['mobile'];
}


// And for buttonTypography
if (!isset($buttonTypography['fontSize'])) {
    $buttonTypography['fontSize'] = $default_button_typography['fontSize'];
} else {
    $buttonTypography['fontSize']['desktop']['value'] = isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['desktop']['value'] ) ? $buttonTypography['fontSize']['desktop']['value'] : $default_button_typography['fontSize']['desktop'];
    $buttonTypography['fontSize']['tablet']['value'] = isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['tablet']['value'] ) ? $buttonTypography['fontSize']['tablet']['value'] : $default_button_typography['fontSize']['tablet'];
    $buttonTypography['fontSize']['mobile']['value'] = isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['mobile']['value'] ) ? $buttonTypography['fontSize']['mobile']['value'] : $default_button_typography['fontSize']['mobile'];
}

if (!isset($buttonTypography['lineHeight'])) {
    $buttonTypography['lineHeight'] = $default_button_typography['lineHeight'];
} else {
    $buttonTypography['lineHeight']['desktop']['value'] = isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['desktop']['value'] ) ? $buttonTypography['lineHeight']['desktop']['value'] : $default_button_typography['lineHeight']['desktop'];
    $buttonTypography['lineHeight']['tablet']['value'] = isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['tablet']['value'] ) ? $buttonTypography['lineHeight']['tablet']['value'] : $default_button_typography['lineHeight']['tablet'];
    $buttonTypography['lineHeight']['mobile']['value'] = isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['mobile']['value'] ) ? $buttonTypography['lineHeight']['mobile']['value'] : $default_button_typography['lineHeight']['mobile'];
}

if (!isset($buttonTypography['letterSpacing'])) {
    $buttonTypography['letterSpacing'] = $default_button_typography['letterSpacing'];
} else {
    $buttonTypography['letterSpacing']['desktop']['value'] = isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['desktop']['value'] ) ? $buttonTypography['letterSpacing']['desktop']['value'] : $default_button_typography['letterSpacing']['desktop'];
    $buttonTypography['letterSpacing']['tablet']['value'] = isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['tablet']['value'] ) ? $buttonTypography['letterSpacing']['tablet']['value'] : $default_button_typography['letterSpacing']['tablet'];
    $buttonTypography['letterSpacing']['mobile']['value'] = isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['mobile']['value'] ) ? $buttonTypography['letterSpacing']['mobile']['value'] : $default_button_typography['letterSpacing']['mobile'];
}


// Box shadow settings
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable' => false,
    'color' => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical' => 0,
    'blur' => 0,
    'spread' => 0,
    'position' => 'outset'
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
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
/* Call to Action Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php if ( $style !== 'split' ) : ?>
        <?php if ( $backgroundType === 'color' ) : ?>
            background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        <?php elseif ( $backgroundType === 'image' && $backgroundImage && isset( $backgroundImage['url'] ) ) : ?>
            background-image: url(<?php echo esc_url( $backgroundImage['url'] ); ?>);
            background-position: <?php echo esc_attr( $backgroundPosition ); ?>;
            background-size: <?php echo esc_attr( $backgroundSize ); ?>;
            background-repeat: <?php echo esc_attr( $backgroundRepeat ); ?>;
        <?php elseif ( $backgroundType === 'gradient' ) : ?>
            background: linear-gradient(135deg, <?php echo esc_attr( $backgroundColor ); ?> 0%, <?php echo esc_attr( $backgroundHoverColor ? $backgroundHoverColor : '#2575fc' ); ?> 100%);
        <?php endif; ?>
    <?php endif; ?>

    <?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    <?php else : ?>
        border-style: none;
    <?php endif; ?>

    <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>

    /* Box Shadow */
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;

    <?php if ( $style !== 'split' ) : ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php endif; ?>

	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    position: relative;
    overflow: hidden;
    width: <?php echo esc_attr( $width ); ?>;
    <?php if ( $minHeight['desktop'] ) : ?>
        min-height: <?php echo esc_attr( $minHeight['desktop'] ); ?>px;
    <?php endif; ?>
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
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
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'desktop' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $transformHover ) && isset( $transformHover['transitionDuration'] ) && '' !== $transformHover['transitionDuration'] && null !== $transformHover['transitionDuration'] ) : ?>
	transition: all <?php echo esc_attr( $transformHover['transitionDuration'] ); ?>ms ease;
	<?php else : ?>
    transition: all 0.3s ease;
	<?php endif; ?>
}

<?php
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-container {
    <?php if ( $contentWidth ) : ?>
        max-width: <?php echo esc_attr( is_numeric( $contentWidth ) ? $contentWidth . '%' : $contentWidth ); ?>;
    <?php endif; ?>
    margin: 0 auto;
    <?php if ( $style !== 'split' ) : ?>
        text-align: <?php echo esc_attr( $align ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
    <?php if ( !empty( $titleColor ) ) : ?>
    	color: <?php echo esc_attr( $titleColor ); ?>;
    <?php endif; ?>
    margin-top: 0;
    margin-bottom: 20px;
    
    <?php if ( !empty( $titleTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['desktop']['value'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop']['value'] . (isset($titleTypography['fontSize']['desktop']['unit']) ? $titleTypography['fontSize']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $titleTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $titleTypography['fontWeight'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $titleTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $titleTypography['fontStyle'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $titleTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $titleTypography['textTransform'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $titleTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $titleTypography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['desktop']['value'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop']['value'] . (isset($titleTypography['lineHeight']['desktop']['unit']) ? $titleTypography['lineHeight']['desktop']['unit'] : 'em') ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['desktop']['value'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop']['value'] . (isset($titleTypography['letterSpacing']['desktop']['unit']) ? $titleTypography['letterSpacing']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>

    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
    color: <?php echo esc_attr( $textColor ); ?>;
    margin-bottom: 30px;
    
    <?php if ( !empty( $contentTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop']['value'] . (isset($contentTypography['fontSize']['desktop']['unit']) ? $contentTypography['fontSize']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $contentTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $contentTypography['fontWeight'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $contentTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $contentTypography['fontStyle'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $contentTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $contentTypography['textTransform'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $contentTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $contentTypography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['desktop']['value'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop']['value'] . (isset($contentTypography['lineHeight']['desktop']['unit']) ? $contentTypography['lineHeight']['desktop']['unit'] : 'em') ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop']['value'] . (isset($contentTypography['letterSpacing']['desktop']['unit']) ? $contentTypography['letterSpacing']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>

    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-buttons {
    text-align: <?php echo esc_attr( $buttonsAlign ); ?>;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    <?php if ( $buttonsAlign === 'center' ) : ?>
        justify-content: center;
    <?php elseif ( $buttonsAlign === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: flex-start;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    background-color: <?php echo esc_attr( $buttonColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
    
    <?php if ( !empty( $buttonTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $buttonTypography['fontFamily'] ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['desktop']['value'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop']['value'] . (isset($buttonTypography['fontSize']['desktop']['unit']) ? $buttonTypography['fontSize']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $buttonTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $buttonTypography['fontWeight'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $buttonTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $buttonTypography['fontStyle'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $buttonTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $buttonTypography['textTransform'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $buttonTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $buttonTypography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['desktop']['value'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop']['value'] . (isset($buttonTypography['lineHeight']['desktop']['unit']) ? $buttonTypography['lineHeight']['desktop']['unit'] : 'em') ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['desktop']['value'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop']['value'] . (isset($buttonTypography['letterSpacing']['desktop']['unit']) ? $buttonTypography['letterSpacing']['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>

    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-button.is-full-width {
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-button:not(.is-primary) {
    background-color: transparent;
    color: <?php echo esc_attr( $buttonColor ); ?>;
    border: 2px solid <?php echo esc_attr( $buttonColor ); ?>;
}

<?php if ( $highlightText && $highlightType && $highlightType !== 'none' ) : ?>
    /* Highlight styles */
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        white-space: pre-wrap;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-highlight {
        <?php if ( $highlightType === 'background' ) : ?>
            background-color: <?php echo esc_attr( $highlightColor ); ?>;
            padding: 0 5px;
            border-radius: 3px;
        <?php elseif ( $highlightType === 'text' ) : ?>
            color: <?php echo esc_attr( $highlightColor ); ?>;
        <?php elseif ( $highlightType === 'underline' ) : ?>
            border-bottom: 2px solid <?php echo esc_attr( $highlightColor ); ?>;
            padding-bottom: 2px;
        <?php endif; ?>
    }
<?php endif; ?>

/* Custom styles based on CTA style */
<?php if ( $style === 'split' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        padding: 0;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-split-container {
        display: flex;
        align-items: stretch;
        min-height: inherit;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-image-container {
        flex: 1;
        min-height: 300px;
        <?php if ( $backgroundImage && isset( $backgroundImage['url'] ) ) : ?>
            background-image: url(<?php echo esc_url( $backgroundImage['url'] ); ?>);
            background-position: <?php echo esc_attr( $backgroundPosition ); ?>;
            background-size: <?php echo esc_attr( $backgroundSize ); ?>;
            background-repeat: <?php echo esc_attr( $backgroundRepeat ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content-container {
        flex: 1;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
        <?php if ( $backgroundColor ) : ?>
            background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        <?php endif; ?>
        display: flex;
        flex-direction: column;
        justify-content: <?php echo esc_attr( $verticalAlign ); ?>;
    }
<?php endif; ?>

<?php if ( $style === 'cover' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        position: relative;
        z-index: 1;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        <?php if ( $backgroundImage && isset( $backgroundImage['url'] ) ) : ?>
            background-image: url(<?php echo esc_url( $backgroundImage['url'] ); ?>);
            background-position: <?php echo esc_attr( $backgroundPosition ); ?>;
            background-size: <?php echo esc_attr( $backgroundSize ); ?>;
            background-repeat: <?php echo esc_attr( $backgroundRepeat ); ?>;
        <?php else : ?>
            background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: <?php echo esc_attr( $backgroundOverlayColor ); ?>;
        opacity: <?php echo esc_attr( $backgroundOverlayOpacity / 100 ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        color: <?php echo !empty($titleColor) ? esc_attr($titleColor) : '#fff'; ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        color: <?php echo !empty($textColor) ? esc_attr($textColor) : 'rgba(255, 255, 255, 0.9)'; ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        border: 2px solid #fff;
        color: #fff;
        background-color: transparent;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button.is-primary {
        background-color: #fff;
        color: #000;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button:hover {
        background-color: #fff;
        color: #000;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button.is-primary:hover {
        background-color: transparent;
        color: #fff;
    }
<?php endif; ?>

<?php if ( $style === 'box' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        border: 2px solid <?php echo esc_attr( $borderColor ); ?>;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
<?php endif; ?>

<?php if ( $style === 'modern' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        position: relative;
        padding-left: 50px;
    }
    
    .<?php echo esc_attr( $id ); ?>:before {
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        height: 60%;
        width: 8px;
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
        border-radius: 4px;
    }
<?php endif; ?>

<?php if ( $style === 'gradient' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        background: linear-gradient(135deg, <?php echo esc_attr( $backgroundColor ); ?> 0%, <?php echo esc_attr( $backgroundHoverColor ? $backgroundHoverColor : '#2575fc' ); ?> 100%);
        color: #fff;
        border-radius: 10px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        color: <?php echo !empty($titleColor) ? esc_attr($titleColor) : '#fff'; ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        color: <?php echo !empty($textColor) ? esc_attr($textColor) : 'rgba(255, 255, 255, 0.9)'; ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        border: 2px solid #fff;
        color: #fff;
        background-color: transparent;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button.is-primary {
        background-color: #fff;
        color: #000;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button:hover {
        background-color: #fff;
        color: #000;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button.is-primary:hover {
        background-color: transparent;
        color: #fff;
    }
<?php endif; ?>

<?php if ( $style === 'minimal' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-buttons {
        position: relative;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-buttons:before {
        content: '';
        position: absolute;
        top: -20px;
        left: 0;
        width: 50px;
        height: 2px;
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
    }
<?php endif; ?>

<?php if ( $style === 'callout' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        border-left: 5px solid <?php echo esc_attr( $buttonColor ); ?>;
        background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        padding: 30px;
        position: relative;
        border-radius: 0 4px 4px 0;
    }
    
    .<?php echo esc_attr( $id ); ?>:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 5px;
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
        border-radius: 4px 0 0 4px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        color: <?php echo esc_attr( $titleColor ); ?>;
        margin-bottom: 15px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        color: <?php echo esc_attr( $textColor ); ?>;
        margin-bottom: 20px;
    }
<?php endif; ?>

<?php if ( $style === 'banner' ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        position: relative;
        padding: 30px;
        background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        border-radius: 0;
        overflow: visible;
    }
    
    .<?php echo esc_attr( $id ); ?>:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        color: <?php echo esc_attr( $titleColor ); ?>;
        margin-bottom: 15px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        color: <?php echo esc_attr( $textColor ); ?>;
        margin-bottom: 20px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
        color: <?php echo esc_attr( $buttonTextColor ); ?>;
        border-radius: 4px;
        padding: 10px 20px;
        transition: all 0.3s ease;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
<?php endif; ?>

<?php if ( $horizontalLayout ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-horizontal {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        width: 100%;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
        flex: 1;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-horizontal .digiblocks-cta-buttons {
        flex-shrink: 0;
    }

    /* Responsive styles for horizontal layout */
    @media (max-width: 767px) {
        .<?php echo esc_attr( $id ); ?> .digiblocks-cta-horizontal {
            flex-direction: column;
            align-items: <?php echo $align === 'center' ? 'center' : ($align === 'right' ? 'flex-end' : 'flex-start'); ?>;
            gap: 1rem;
        }
        
        .<?php echo esc_attr( $id ); ?> .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
            width: 100%;
            text-align: <?php echo esc_attr( $align ); ?>;
        }
    }
<?php endif; ?>

/* Hover effects */
.<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-cta-title {
    <?php if ( $titleHoverColor ) : ?>
        color: <?php echo esc_attr( $titleHoverColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-cta-content {
    <?php if ( $textHoverColor ) : ?>
        color: <?php echo esc_attr( $textHoverColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $backgroundHoverColor && $style !== 'gradient' && $style !== 'split' && $backgroundType === 'color' ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-button:hover {
    <?php if ( $buttonHoverColor ) : ?>
        background-color: <?php echo esc_attr( $buttonHoverColor ); ?>;
    <?php endif; ?>
    <?php if ( $buttonTextHoverColor ) : ?>
        color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
    <?php endif; ?>
}

/* Custom button styles */
<?php if ( !empty( $buttons ) && is_array( $buttons ) ) : ?>
    <?php foreach ( $buttons as $button ) : ?>
        <?php if ( isset( $button['customColors'] ) && $button['customColors'] ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button[data-button-id="<?php echo esc_attr( $button['id'] ); ?>"] {
                <?php if ( isset( $button['isPrimary'] ) && $button['isPrimary'] ) : ?>
                    background-color: <?php echo esc_attr( isset($button['backgroundColor']) ? $button['backgroundColor'] : $buttonColor ); ?>;
                    color: <?php echo esc_attr( isset($button['textColor']) ? $button['textColor'] : $buttonTextColor ); ?>;
                <?php else : ?>
                    background-color: transparent;
                    color: <?php echo esc_attr( isset($button['backgroundColor']) ? $button['backgroundColor'] : $buttonColor ); ?>;
                    border-color: <?php echo esc_attr( isset($button['backgroundColor']) ? $button['backgroundColor'] : $buttonColor ); ?>;
                <?php endif; ?>
                
                <?php if ( isset( $button['borderRadius'] ) ) : ?>
                    border-radius: <?php echo esc_attr( $button['borderRadius'] ); ?>px;
                <?php endif; ?>
            }
            
            .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button[data-button-id="<?php echo esc_attr( $button['id'] ); ?>"]:hover {
                <?php if ( isset( $button['hoverBackgroundColor'] ) && $button['hoverBackgroundColor'] ) : ?>
                    background-color: <?php echo esc_attr( $button['hoverBackgroundColor'] ); ?>;
                <?php endif; ?>
                
                <?php if ( isset( $button['hoverTextColor'] ) && $button['hoverTextColor'] ) : ?>
                    color: <?php echo esc_attr( $button['hoverTextColor'] ); ?>;
                <?php endif; ?>
            }
        <?php endif; ?>
    <?php endforeach; ?>
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $style !== 'split' ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>        
        <?php if ( $minHeight['tablet'] ) : ?>
            min-height: <?php echo esc_attr( $minHeight['tablet'] ); ?>px;
        <?php endif; ?>
        
        <?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '';
            $h_unit_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;

            $v_value_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '';
            $v_unit_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
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
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'tablet' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'tablet' ) ); ?>;
		}
	<?php endif; ?>
    
    <?php if ( $style === 'split' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content-container {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) ) : ?>
            font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet']['value'] . (isset($titleTypography['fontSize']['tablet']['unit']) ? $titleTypography['fontSize']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet']['value'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet']['value'] . (isset($titleTypography['lineHeight']['tablet']['unit']) ? $titleTypography['lineHeight']['tablet']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet']['value'] . (isset($titleTypography['letterSpacing']['tablet']['unit']) ? $titleTypography['letterSpacing']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) ) : ?>
            font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet']['value'] . (isset($contentTypography['fontSize']['tablet']['unit']) ? $contentTypography['fontSize']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet']['value'] . (isset($contentTypography['lineHeight']['tablet']['unit']) ? $contentTypography['lineHeight']['tablet']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet']['value'] . (isset($contentTypography['letterSpacing']['tablet']['unit']) ? $contentTypography['letterSpacing']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['tablet']['value'] ) ) : ?>
            font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet']['value'] . (isset($buttonTypography['fontSize']['tablet']['unit']) ? $buttonTypography['fontSize']['tablet']['unit'] : 'px') ); ?>;
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $style !== 'split' ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
        <?php if ( $minHeight['mobile'] ) : ?>
            min-height: <?php echo esc_attr( $minHeight['mobile'] ); ?>px;
        <?php endif; ?>
        <?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
    	<?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '';
            $h_unit_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '';
            $v_unit_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
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
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'mobile' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'mobile' ) ); ?>;
		}
	<?php endif; ?>
    
    <?php if ( $style === 'split' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-cta-split-container {
            flex-direction: <?php echo $reverseColumnsMobile ? 'column-reverse' : 'column'; ?>;
        }
        
        .<?php echo esc_attr( $id ); ?> .digiblocks-cta-image-container {
            min-height: 200px;
        }
        
        .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content-container {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) ) : ?>
            font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile']['value'] . (isset($titleTypography['fontSize']['mobile']['unit']) ? $titleTypography['fontSize']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile']['value'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile']['value'] . (isset($titleTypography['lineHeight']['mobile']['unit']) ? $titleTypography['lineHeight']['mobile']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile']['value'] . (isset($titleTypography['letterSpacing']['mobile']['unit']) ? $titleTypography['letterSpacing']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) ) : ?>
            font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile']['value'] . (isset($contentTypography['fontSize']['mobile']['unit']) ? $contentTypography['fontSize']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile']['value'] . (isset($contentTypography['lineHeight']['mobile']['unit']) ? $contentTypography['lineHeight']['mobile']['unit'] : 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile']['value'] . (isset($contentTypography['letterSpacing']['mobile']['unit']) ? $contentTypography['letterSpacing']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['mobile']['value'] ) ) : ?>
            font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile']['value'] . (isset($buttonTypography['fontSize']['mobile']['unit']) ? $buttonTypography['fontSize']['mobile']['unit'] : 'px') ); ?>;
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-buttons {
        flex-direction: column;
		gap: 10px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        width: 100%;
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