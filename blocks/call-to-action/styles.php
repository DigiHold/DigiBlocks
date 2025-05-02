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
$style                   = isset( $attrs['style'] ) ? $attrs['style'] : 'basic';
$horizontalLayout        = isset( $attrs['horizontalLayout'] ) ? $attrs['horizontalLayout'] : false;
$title                   = isset( $attrs['title'] ) ? $attrs['title'] : '';
$content                 = isset( $attrs['content'] ) ? $attrs['content'] : '';
$headingTag              = isset( $attrs['headingTag'] ) ? $attrs['headingTag'] : 'h2';
$titleColor              = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
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
$borderColor             = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$align                   = isset( $attrs['align'] ) ? $attrs['align'] : 'left';
$textAlign               = isset( $attrs['textAlign'] ) ? $attrs['textAlign'] : 'left';
$contentWidth            = isset( $attrs['contentWidth'] ) ? $attrs['contentWidth'] : null;
$width                   = isset( $attrs['width'] ) ? $attrs['width'] : '100%';
$animation               = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$buttonsAlign            = isset( $attrs['buttonsAlign'] ) ? $attrs['buttonsAlign'] : 'left';
$buttons                 = isset( $attrs['buttons'] ) ? $attrs['buttons'] : array();
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

// Get responsive attributes with defaults
$borderWidth    = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
    'desktop' => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' )
);

$borderRadius   = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => array( 'top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px' )
);

$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array( 'top' => 40, 'right' => 30, 'bottom' => 40, 'left' => 30, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 30, 'right' => 25, 'bottom' => 30, 'left' => 25, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 25, 'right' => 20, 'bottom' => 25, 'left' => 20, 'unit' => 'px' )
);

$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
    'desktop' => array( 'top' => 0, 'right' => 0, 'bottom' => 30, 'left' => 0, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 0, 'right' => 0, 'bottom' => 25, 'left' => 0, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 0, 'right' => 0, 'bottom' => 20, 'left' => 0, 'unit' => 'px' )
);

$buttonBorderRadius = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : array(
    'desktop' => array( 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' )
);

$buttonPadding = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : array(
    'desktop' => array( 'top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px' )
);

$minHeight = isset( $attrs['minHeight'] ) ? $attrs['minHeight'] : array(
    'desktop' => 0,
    'tablet'  => 0,
    'mobile'  => 0
);

$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
    'fontFamily' => '',
	'fontSize' => array( 'desktop' => 36, 'tablet' => 32, 'mobile' => 28 ),
	'fontSizeUnit' => 'px',
	'fontWeight' => '700',
	'fontStyle' => 'normal',
	'textTransform' => 'none',
	'textDecoration' => 'none',
	'lineHeight' => array( 'desktop' => 1.2, 'tablet' => 1.2, 'mobile' => 1.2 ),
	'lineHeightUnit' => 'em',
	'letterSpacing' => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
	'letterSpacingUnit' => 'px'
);

$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
    'fontFamily' => '',
	'fontSize' => array( 'desktop' => 18, 'tablet' => 16, 'mobile' => 16 ),
	'fontSizeUnit' => 'px',
	'fontWeight' => '400',
	'fontStyle' => 'normal',
	'textTransform' => 'none',
	'textDecoration' => 'none',
	'lineHeight' => array( 'desktop' => 1.6, 'tablet' => 1.6, 'mobile' => 1.5 ),
	'lineHeightUnit' => 'em',
	'letterSpacing' => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
	'letterSpacingUnit' => 'px'
);

$buttonTypography = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : array(
    'fontFamily' => '',
    'fontSize' => array( 'desktop' => 16, 'tablet' => 16, 'mobile' => 16 ),
    'fontSizeUnit' => 'px',
    'fontWeight' => '500',
    'fontStyle' => 'normal',
    'textTransform' => 'none',
    'textDecoration' => 'none',
    'lineHeight' => array( 'desktop' => 1.5, 'tablet' => 1.5, 'mobile' => 1.5 ),
    'lineHeightUnit' => 'em',
    'letterSpacing' => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
    'letterSpacingUnit' => 'px'
);

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
/* Call to Action Block - <?php echo esc_attr( $block_id ); ?> */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
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
        border-width: <?php echo esc_attr( $borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
    <?php else : ?>
        border-style: none;
    <?php endif; ?>

    /* Box Shadow */
    box-shadow: <?php echo digiblocks_get_box_shadow_css( $boxShadow ); ?>;

    <?php if ( $style !== 'split' ) : ?>
        padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
    <?php endif; ?>

    margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    width: <?php echo esc_attr( $width ); ?>;
    <?php if ( $minHeight['desktop'] ) : ?>
        min-height: <?php echo esc_attr( $minHeight['desktop'] ); ?>px;
    <?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-container {
    <?php if ( $contentWidth ) : ?>
        max-width: <?php echo esc_attr( is_numeric( $contentWidth ) ? $contentWidth . '%' : $contentWidth ); ?>;
    <?php endif; ?>
    margin: 0 auto;
    <?php if ( $style !== 'split' ) : ?>
        text-align: <?php echo esc_attr( $align ); ?>;
    <?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
    color: <?php echo esc_attr( $titleColor ); ?>;
    margin-top: 0;
    margin-bottom: 20px;
    
    <?php if ( !empty( $titleTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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

    <?php if ( !empty( $titleTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>

    transition: color 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
    color: <?php echo esc_attr( $textColor ); ?>;
    margin-bottom: 30px;
    
    <?php if ( !empty( $contentTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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

    <?php if ( !empty( $contentTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>

    transition: color 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-buttons {
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

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    background-color: <?php echo esc_attr( $buttonColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
    padding: <?php echo esc_attr( $buttonPadding['desktop']['top'] . $buttonPadding['desktop']['unit'] . ' ' . $buttonPadding['desktop']['right'] . $buttonPadding['desktop']['unit'] . ' ' . $buttonPadding['desktop']['bottom'] . $buttonPadding['desktop']['unit'] . ' ' . $buttonPadding['desktop']['left'] . $buttonPadding['desktop']['unit'] ); ?>;
    border-radius: <?php echo esc_attr( $buttonBorderRadius['desktop']['top'] . $buttonBorderRadius['desktop']['unit'] . ' ' . $buttonBorderRadius['desktop']['right'] . $buttonBorderRadius['desktop']['unit'] . ' ' . $buttonBorderRadius['desktop']['bottom'] . $buttonBorderRadius['desktop']['unit'] . ' ' . $buttonBorderRadius['desktop']['left'] . $buttonBorderRadius['desktop']['unit'] ); ?>;
    
    <?php if ( !empty( $buttonTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $buttonTypography['fontFamily'] ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $buttonTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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

    <?php if ( !empty( $buttonTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
        
    <?php if ( !empty( $buttonTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>

    transition: all 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button.is-full-width {
    width: 100%;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button:not(.is-primary) {
    background-color: transparent;
    color: <?php echo esc_attr( $buttonColor ); ?>;
    border: 2px solid <?php echo esc_attr( $buttonColor ); ?>;
}

<?php if ( $highlightText && $highlightType && $highlightType !== 'none' ) : ?>
    /* Highlight styles */
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
        white-space: pre-wrap;
    }

    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-highlight {
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
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        padding: 0;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-split-container {
        display: flex;
        align-items: stretch;
        min-height: inherit;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-image-container {
        flex: 1;
        min-height: 300px;
        <?php if ( $backgroundImage && isset( $backgroundImage['url'] ) ) : ?>
            background-image: url(<?php echo esc_url( $backgroundImage['url'] ); ?>);
            background-position: <?php echo esc_attr( $backgroundPosition ); ?>;
            background-size: <?php echo esc_attr( $backgroundSize ); ?>;
            background-repeat: <?php echo esc_attr( $backgroundRepeat ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content-container {
        flex: 1;
        padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
        <?php if ( $backgroundColor ) : ?>
            background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        <?php endif; ?>
        display: flex;
        flex-direction: column;
        justify-content: <?php echo esc_attr( $verticalAlign ); ?>;
    }
<?php endif; ?>

<?php if ( $style === 'cover' ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        position: relative;
        z-index: 1;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-background {
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
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: <?php echo esc_attr( $backgroundOverlayColor ); ?>;
        opacity: <?php echo esc_attr( $backgroundOverlayOpacity / 100 ); ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
        color: <?php echo !empty($titleColor) ? esc_attr($titleColor) : '#fff'; ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
        color: <?php echo !empty($textColor) ? esc_attr($titleColor) : 'rgba(255, 255, 255, 0.9)'; ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
        border: 2px solid #fff;
        color: #fff;
        background-color: transparent;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button.is-primary {
        background-color: #fff;
        color: #000;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button:hover {
        background-color: #fff;
        color: #000;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button.is-primary:hover {
        background-color: transparent;
        color: #fff;
    }
<?php endif; ?>

<?php if ( $style === 'box' ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        border: 2px solid <?php echo esc_attr( $borderColor ); ?>;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
<?php endif; ?>

<?php if ( $style === 'modern' ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        position: relative;
        padding-left: 50px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:before {
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
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        background: linear-gradient(135deg, <?php echo esc_attr( $backgroundColor ); ?> 0%, <?php echo esc_attr( $backgroundHoverColor ? $backgroundHoverColor : '#2575fc' ); ?> 100%);
        color: #fff;
        border-radius: 10px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
        color: <?php echo !empty($titleColor) ? esc_attr($titleColor) : '#fff'; ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
        color: <?php echo !empty($textColor) ? esc_attr($titleColor) : 'rgba(255, 255, 255, 0.9)'; ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
        border: 2px solid #fff;
        color: #fff;
        background-color: transparent;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button.is-primary {
        background-color: #fff;
        color: #000;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button:hover {
        background-color: #fff;
        color: #000;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button.is-primary:hover {
        background-color: transparent;
        color: #fff;
    }
<?php endif; ?>

<?php if ( $style === 'minimal' ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-buttons {
        position: relative;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-buttons:before {
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
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        border-left: 5px solid <?php echo esc_attr( $buttonColor ); ?>;
        background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        padding: 30px;
        position: relative;
        border-radius: 0 4px 4px 0;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 5px;
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
        border-radius: 4px 0 0 4px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
        color: <?php echo esc_attr( $titleColor ); ?>;
        margin-bottom: 15px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
        color: <?php echo esc_attr( $textColor ); ?>;
        margin-bottom: 20px;
    }
<?php endif; ?>

<?php if ( $style === 'banner' ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        position: relative;
        padding: 30px;
        background-color: <?php echo esc_attr( $backgroundColor ); ?>;
        border-radius: 0;
        overflow: visible;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
        color: <?php echo esc_attr( $titleColor ); ?>;
        margin-bottom: 15px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
        color: <?php echo esc_attr( $textColor ); ?>;
        margin-bottom: 20px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
        background-color: <?php echo esc_attr( $buttonColor ); ?>;
        color: <?php echo esc_attr( $buttonTextColor ); ?>;
        border-radius: 4px;
        padding: 10px 20px;
        transition: all 0.3s ease;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
<?php endif; ?>

<?php if ( $horizontalLayout ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-horizontal {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        width: 100%;
    }

    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
        flex: 1;
    }

    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-horizontal .digiblocks-cta-buttons {
        flex-shrink: 0;
    }

    /* Responsive styles for horizontal layout */
    @media (max-width: 767px) {
        [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-horizontal {
            flex-direction: column;
            align-items: <?php echo $align === 'center' ? 'center' : ($align === 'right' ? 'flex-end' : 'flex-start'); ?>;
            gap: 1rem;
        }
        
        [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
            width: 100%;
            text-align: <?php echo esc_attr( $align ); ?>;
        }
    }
<?php endif; ?>

/* Hover effects */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
    transition: color 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
    transition: color 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:hover .digiblocks-cta-title {
    <?php if ( $titleHoverColor ) : ?>
        color: <?php echo esc_attr( $titleHoverColor ); ?>;
    <?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:hover .digiblocks-cta-content {
    <?php if ( $textHoverColor ) : ?>
        color: <?php echo esc_attr( $textHoverColor ); ?>;
    <?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:hover {
    <?php if ( $backgroundHoverColor && $style !== 'gradient' && $style !== 'split' && $backgroundType === 'color' ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo digiblocks_get_box_shadow_css( $boxShadowHover ); ?>;
    <?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
    transition: all 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button:hover {
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
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button[data-button-id="<?php echo esc_attr( $button['id'] ); ?>"] {
                <?php if ( isset( $button['isPrimary'] ) && $button['isPrimary'] ) : ?>
                    background-color: <?php echo esc_attr( $button['backgroundColor'] ? $button['backgroundColor'] : $buttonColor ); ?>;
                    color: <?php echo esc_attr( $button['textColor'] ? $button['textColor'] : $buttonTextColor ); ?>;
                <?php else : ?>
                    background-color: transparent;
                    color: <?php echo esc_attr( $button['backgroundColor'] ? $button['backgroundColor'] : $buttonColor ); ?>;
                    border-color: <?php echo esc_attr( $button['backgroundColor'] ? $button['backgroundColor'] : $buttonColor ); ?>;
                <?php endif; ?>
                
                <?php if ( isset( $button['borderRadius'] ) ) : ?>
                    border-radius: <?php echo esc_attr( $button['borderRadius'] ); ?>px;
                <?php endif; ?>
            }
            
            [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button[data-button-id="<?php echo esc_attr( $button['id'] ); ?>"]:hover {
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
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        <?php if ( $style !== 'split' ) : ?>
            padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
        <?php endif; ?>
        
        margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
        
        <?php if ( $minHeight['tablet'] ) : ?>
            min-height: <?php echo esc_attr( $minHeight['tablet'] ); ?>px;
        <?php endif; ?>
        
        <?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
            border-width: <?php echo esc_attr( $borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit'] ); ?>;
            border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    <?php if ( $style === 'split' ) : ?>
        [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content-container {
            padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
        }
    <?php endif; ?>
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
        <?php if ( isset( $titleTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
        <?php if ( isset( $contentTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
        <?php if ( isset( $buttonTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        padding: <?php echo esc_attr( $buttonPadding['tablet']['top'] . $buttonPadding['tablet']['unit'] . ' ' . $buttonPadding['tablet']['right'] . $buttonPadding['tablet']['unit'] . ' ' . $buttonPadding['tablet']['bottom'] . $buttonPadding['tablet']['unit'] . ' ' . $buttonPadding['tablet']['left'] . $buttonPadding['tablet']['unit'] ); ?>;
        
        border-radius: <?php echo esc_attr( $buttonBorderRadius['tablet']['top'] . $buttonBorderRadius['tablet']['unit'] . ' ' . $buttonBorderRadius['tablet']['right'] . $buttonBorderRadius['tablet']['unit'] . ' ' . $buttonBorderRadius['tablet']['bottom'] . $buttonBorderRadius['tablet']['unit'] . ' ' . $buttonBorderRadius['tablet']['left'] . $buttonBorderRadius['tablet']['unit'] ); ?>;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        <?php if ( $style !== 'split' ) : ?>
            padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
        <?php endif; ?>
        
        margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
        
        <?php if ( $minHeight['mobile'] ) : ?>
            min-height: <?php echo esc_attr( $minHeight['mobile'] ); ?>px;
        <?php endif; ?>
        
        <?php if ( $borderStyle && $borderStyle !== 'none' ) : ?>
            border-width: <?php echo esc_attr( $borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit'] ); ?>;
            border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    <?php if ( $style === 'split' ) : ?>
        [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-split-container {
            flex-direction: <?php echo $reverseColumnsMobile ? 'column-reverse' : 'column'; ?>;
        }
        
        [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-image-container {
            min-height: 200px;
        }
        
        [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content-container {
            padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
        }
    <?php endif; ?>
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-title {
        <?php if ( isset( $titleTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-content {
        <?php if ( isset( $contentTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
        <?php if ( isset( $buttonTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        padding: <?php echo esc_attr( $buttonPadding['mobile']['top'] . $buttonPadding['mobile']['unit'] . ' ' . $buttonPadding['mobile']['right'] . $buttonPadding['mobile']['unit'] . ' ' . $buttonPadding['mobile']['bottom'] . $buttonPadding['mobile']['unit'] . ' ' . $buttonPadding['mobile']['left'] . $buttonPadding['mobile']['unit'] ); ?>;
        
        border-radius: <?php echo esc_attr( $buttonBorderRadius['mobile']['top'] . $buttonBorderRadius['mobile']['unit'] . ' ' . $buttonBorderRadius['mobile']['right'] . $buttonBorderRadius['mobile']['unit'] . ' ' . $buttonBorderRadius['mobile']['bottom'] . $buttonBorderRadius['mobile']['unit'] . ' ' . $buttonBorderRadius['mobile']['left'] . $buttonBorderRadius['mobile']['unit'] ); ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-buttons {
        flex-direction: column;
		gap: 10px;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-cta-button {
        width: 100%;
    }
}
<?php
$digiblocks_css_output = ob_get_clean();