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
    'fontSize' => array('desktop' => 36, 'tablet' => 32, 'mobile' => 28),
    'fontSizeUnit' => 'px',
    'fontWeight' => '700',
    'fontStyle' => 'normal',
    'textTransform' => 'none',
    'textDecoration' => 'none',
    'lineHeight' => array('desktop' => 1.2, 'tablet' => 1.2, 'mobile' => 1.2),
    'lineHeightUnit' => 'em',
    'letterSpacing' => array('desktop' => 0, 'tablet' => 0, 'mobile' => 0),
    'letterSpacingUnit' => 'px'
);

$default_content_typography = array(
    'fontFamily' => '',
    'fontSize' => array('desktop' => 18, 'tablet' => 16, 'mobile' => 16),
    'fontSizeUnit' => 'px',
    'fontWeight' => '400',
    'fontStyle' => 'normal',
    'textTransform' => 'none',
    'textDecoration' => 'none',
    'lineHeight' => array('desktop' => 1.6, 'tablet' => 1.6, 'mobile' => 1.5),
    'lineHeightUnit' => 'em',
    'letterSpacing' => array('desktop' => 0, 'tablet' => 0, 'mobile' => 0),
    'letterSpacingUnit' => 'px'
);

$default_button_typography = array(
    'fontFamily' => '',
    'fontSize' => array('desktop' => 16, 'tablet' => 16, 'mobile' => 16),
    'fontSizeUnit' => 'px',
    'fontWeight' => '500',
    'fontStyle' => 'normal',
    'textTransform' => 'none',
    'textDecoration' => 'none',
    'lineHeight' => array('desktop' => 1.5, 'tablet' => 1.5, 'mobile' => 1.5),
    'lineHeightUnit' => 'em',
    'letterSpacing' => array('desktop' => 0, 'tablet' => 0, 'mobile' => 0),
    'letterSpacingUnit' => 'px'
);

$titleTypography = isset($attrs['titleTypography']) ? $attrs['titleTypography'] : $default_title_typography;
$contentTypography = isset($attrs['contentTypography']) ? $attrs['contentTypography'] : $default_content_typography;
$buttonTypography = isset($attrs['buttonTypography']) ? $attrs['buttonTypography'] : $default_button_typography;

// Make sure typography objects have all needed properties
if (!isset($titleTypography['fontSize'])) {
    $titleTypography['fontSize'] = $default_title_typography['fontSize'];
} else {
    $titleTypography['fontSize']['desktop'] = isset($titleTypography['fontSize']['desktop']) ? $titleTypography['fontSize']['desktop'] : $default_title_typography['fontSize']['desktop'];
    $titleTypography['fontSize']['tablet'] = isset($titleTypography['fontSize']['tablet']) ? $titleTypography['fontSize']['tablet'] : $default_title_typography['fontSize']['tablet'];
    $titleTypography['fontSize']['mobile'] = isset($titleTypography['fontSize']['mobile']) ? $titleTypography['fontSize']['mobile'] : $default_title_typography['fontSize']['mobile'];
}

if (!isset($titleTypography['lineHeight'])) {
    $titleTypography['lineHeight'] = $default_title_typography['lineHeight'];
} else {
    $titleTypography['lineHeight']['desktop'] = isset($titleTypography['lineHeight']['desktop']) ? $titleTypography['lineHeight']['desktop'] : $default_title_typography['lineHeight']['desktop'];
    $titleTypography['lineHeight']['tablet'] = isset($titleTypography['lineHeight']['tablet']) ? $titleTypography['lineHeight']['tablet'] : $default_title_typography['lineHeight']['tablet'];
    $titleTypography['lineHeight']['mobile'] = isset($titleTypography['lineHeight']['mobile']) ? $titleTypography['lineHeight']['mobile'] : $default_title_typography['lineHeight']['mobile'];
}

if (!isset($titleTypography['letterSpacing'])) {
    $titleTypography['letterSpacing'] = $default_title_typography['letterSpacing'];
} else {
    $titleTypography['letterSpacing']['desktop'] = isset($titleTypography['letterSpacing']['desktop']) ? $titleTypography['letterSpacing']['desktop'] : $default_title_typography['letterSpacing']['desktop'];
    $titleTypography['letterSpacing']['tablet'] = isset($titleTypography['letterSpacing']['tablet']) ? $titleTypography['letterSpacing']['tablet'] : $default_title_typography['letterSpacing']['tablet'];
    $titleTypography['letterSpacing']['mobile'] = isset($titleTypography['letterSpacing']['mobile']) ? $titleTypography['letterSpacing']['mobile'] : $default_title_typography['letterSpacing']['mobile'];
}

$titleTypography['fontSizeUnit'] = isset($titleTypography['fontSizeUnit']) ? $titleTypography['fontSizeUnit'] : $default_title_typography['fontSizeUnit'];
$titleTypography['lineHeightUnit'] = isset($titleTypography['lineHeightUnit']) ? $titleTypography['lineHeightUnit'] : $default_title_typography['lineHeightUnit'];
$titleTypography['letterSpacingUnit'] = isset($titleTypography['letterSpacingUnit']) ? $titleTypography['letterSpacingUnit'] : $default_title_typography['letterSpacingUnit'];

// Do the same for contentTypography
if (!isset($contentTypography['fontSize'])) {
    $contentTypography['fontSize'] = $default_content_typography['fontSize'];
} else {
    $contentTypography['fontSize']['desktop'] = isset($contentTypography['fontSize']['desktop']) ? $contentTypography['fontSize']['desktop'] : $default_content_typography['fontSize']['desktop'];
    $contentTypography['fontSize']['tablet'] = isset($contentTypography['fontSize']['tablet']) ? $contentTypography['fontSize']['tablet'] : $default_content_typography['fontSize']['tablet'];
    $contentTypography['fontSize']['mobile'] = isset($contentTypography['fontSize']['mobile']) ? $contentTypography['fontSize']['mobile'] : $default_content_typography['fontSize']['mobile'];
}

if (!isset($contentTypography['lineHeight'])) {
    $contentTypography['lineHeight'] = $default_content_typography['lineHeight'];
} else {
    $contentTypography['lineHeight']['desktop'] = isset($contentTypography['lineHeight']['desktop']) ? $contentTypography['lineHeight']['desktop'] : $default_content_typography['lineHeight']['desktop'];
    $contentTypography['lineHeight']['tablet'] = isset($contentTypography['lineHeight']['tablet']) ? $contentTypography['lineHeight']['tablet'] : $default_content_typography['lineHeight']['tablet'];
    $contentTypography['lineHeight']['mobile'] = isset($contentTypography['lineHeight']['mobile']) ? $contentTypography['lineHeight']['mobile'] : $default_content_typography['lineHeight']['mobile'];
}

if (!isset($contentTypography['letterSpacing'])) {
    $contentTypography['letterSpacing'] = $default_content_typography['letterSpacing'];
} else {
    $contentTypography['letterSpacing']['desktop'] = isset($contentTypography['letterSpacing']['desktop']) ? $contentTypography['letterSpacing']['desktop'] : $default_content_typography['letterSpacing']['desktop'];
    $contentTypography['letterSpacing']['tablet'] = isset($contentTypography['letterSpacing']['tablet']) ? $contentTypography['letterSpacing']['tablet'] : $default_content_typography['letterSpacing']['tablet'];
    $contentTypography['letterSpacing']['mobile'] = isset($contentTypography['letterSpacing']['mobile']) ? $contentTypography['letterSpacing']['mobile'] : $default_content_typography['letterSpacing']['mobile'];
}

$contentTypography['fontSizeUnit'] = isset($contentTypography['fontSizeUnit']) ? $contentTypography['fontSizeUnit'] : $default_content_typography['fontSizeUnit'];
$contentTypography['lineHeightUnit'] = isset($contentTypography['lineHeightUnit']) ? $contentTypography['lineHeightUnit'] : $default_content_typography['lineHeightUnit'];
$contentTypography['letterSpacingUnit'] = isset($contentTypography['letterSpacingUnit']) ? $contentTypography['letterSpacingUnit'] : $default_content_typography['letterSpacingUnit'];

// And for buttonTypography
if (!isset($buttonTypography['fontSize'])) {
    $buttonTypography['fontSize'] = $default_button_typography['fontSize'];
} else {
    $buttonTypography['fontSize']['desktop'] = isset($buttonTypography['fontSize']['desktop']) ? $buttonTypography['fontSize']['desktop'] : $default_button_typography['fontSize']['desktop'];
    $buttonTypography['fontSize']['tablet'] = isset($buttonTypography['fontSize']['tablet']) ? $buttonTypography['fontSize']['tablet'] : $default_button_typography['fontSize']['tablet'];
    $buttonTypography['fontSize']['mobile'] = isset($buttonTypography['fontSize']['mobile']) ? $buttonTypography['fontSize']['mobile'] : $default_button_typography['fontSize']['mobile'];
}

if (!isset($buttonTypography['lineHeight'])) {
    $buttonTypography['lineHeight'] = $default_button_typography['lineHeight'];
} else {
    $buttonTypography['lineHeight']['desktop'] = isset($buttonTypography['lineHeight']['desktop']) ? $buttonTypography['lineHeight']['desktop'] : $default_button_typography['lineHeight']['desktop'];
    $buttonTypography['lineHeight']['tablet'] = isset($buttonTypography['lineHeight']['tablet']) ? $buttonTypography['lineHeight']['tablet'] : $default_button_typography['lineHeight']['tablet'];
    $buttonTypography['lineHeight']['mobile'] = isset($buttonTypography['lineHeight']['mobile']) ? $buttonTypography['lineHeight']['mobile'] : $default_button_typography['lineHeight']['mobile'];
}

if (!isset($buttonTypography['letterSpacing'])) {
    $buttonTypography['letterSpacing'] = $default_button_typography['letterSpacing'];
} else {
    $buttonTypography['letterSpacing']['desktop'] = isset($buttonTypography['letterSpacing']['desktop']) ? $buttonTypography['letterSpacing']['desktop'] : $default_button_typography['letterSpacing']['desktop'];
    $buttonTypography['letterSpacing']['tablet'] = isset($buttonTypography['letterSpacing']['tablet']) ? $buttonTypography['letterSpacing']['tablet'] : $default_button_typography['letterSpacing']['tablet'];
    $buttonTypography['letterSpacing']['mobile'] = isset($buttonTypography['letterSpacing']['mobile']) ? $buttonTypography['letterSpacing']['mobile'] : $default_button_typography['letterSpacing']['mobile'];
}

$buttonTypography['fontSizeUnit'] = isset($buttonTypography['fontSizeUnit']) ? $buttonTypography['fontSizeUnit'] : $default_button_typography['fontSizeUnit'];
$buttonTypography['lineHeightUnit'] = isset($buttonTypography['lineHeightUnit']) ? $buttonTypography['lineHeightUnit'] : $default_button_typography['lineHeightUnit'];
$buttonTypography['letterSpacingUnit'] = isset($buttonTypography['letterSpacingUnit']) ? $buttonTypography['letterSpacingUnit'] : $default_button_typography['letterSpacingUnit'];

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
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    width: <?php echo esc_attr( $width ); ?>;
    <?php if ( $minHeight['desktop'] ) : ?>
        min-height: <?php echo esc_attr( $minHeight['desktop'] ); ?>px;
    <?php endif; ?>
}

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
        
    <?php if ( isset( $titleTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( isset($titleTypography['fontSizeUnit']) ? $titleTypography['fontSizeUnit'] : 'px' ) ); ?>;
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

    <?php if ( isset( $titleTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ( isset($titleTypography['lineHeightUnit']) ? $titleTypography['lineHeightUnit'] : 'em' ) ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ( isset($titleTypography['letterSpacingUnit']) ? $titleTypography['letterSpacingUnit'] : 'px' ) ); ?>;
    <?php endif; ?>

    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
    color: <?php echo esc_attr( $textColor ); ?>;
    margin-bottom: 30px;
    
    <?php if ( !empty( $contentTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $contentTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( isset($contentTypography['fontSizeUnit']) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
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

    <?php if ( isset( $contentTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( isset($contentTypography['lineHeightUnit']) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( isset($contentTypography['letterSpacingUnit']) ? $contentTypography['letterSpacingUnit'] : 'px' ) ); ?>;
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
        
    <?php if ( isset( $buttonTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop'] . ( isset($buttonTypography['fontSizeUnit']) ? $buttonTypography['fontSizeUnit'] : 'px' ) ); ?>;
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

    <?php if ( isset( $buttonTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . ( isset($buttonTypography['lineHeightUnit']) ? $buttonTypography['lineHeightUnit'] : 'em' ) ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $buttonTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . ( isset($buttonTypography['letterSpacingUnit']) ? $buttonTypography['letterSpacingUnit'] : 'px' ) ); ?>;
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
    }
    
    <?php if ( $style === 'split' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content-container {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-title {
        <?php if ( isset( $titleTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( isset($titleTypography['fontSizeUnit']) ? $titleTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( isset($titleTypography['lineHeightUnit']) ? $titleTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( isset($titleTypography['letterSpacingUnit']) ? $titleTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        <?php if ( isset( $contentTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( isset($contentTypography['fontSizeUnit']) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( isset($contentTypography['lineHeightUnit']) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( isset($contentTypography['letterSpacingUnit']) ? $contentTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        <?php if ( isset( $buttonTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( isset($buttonTypography['fontSizeUnit']) ? $buttonTypography['fontSizeUnit'] : 'px' ) ); ?>;
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
    }
    
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
        <?php if ( isset( $titleTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( isset($titleTypography['fontSizeUnit']) ? $titleTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( isset($titleTypography['lineHeightUnit']) ? $titleTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( isset($titleTypography['letterSpacingUnit']) ? $titleTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-content {
        <?php if ( isset( $contentTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( isset($contentTypography['fontSizeUnit']) ? $contentTypography['fontSizeUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( isset($contentTypography['lineHeightUnit']) ? $contentTypography['lineHeightUnit'] : 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( isset($contentTypography['letterSpacingUnit']) ? $contentTypography['letterSpacingUnit'] : 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-cta-button {
        <?php if ( isset( $buttonTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( isset($buttonTypography['fontSizeUnit']) ? $buttonTypography['fontSizeUnit'] : 'px' ) ); ?>;
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