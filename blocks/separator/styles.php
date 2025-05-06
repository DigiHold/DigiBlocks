<?php
/**
 * Separator Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id                 = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$contentType        = isset( $attrs['contentType'] ) ? $attrs['contentType'] : 'none';
$content            = isset( $attrs['content'] ) ? $attrs['content'] : '';
$align              = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$iconValue          = isset( $attrs['iconValue'] ) ? $attrs['iconValue'] : null;
$separatorStyle     = isset( $attrs['separatorStyle'] ) ? $attrs['separatorStyle'] : 'line';
$primaryColor       = isset( $attrs['primaryColor'] ) ? $attrs['primaryColor'] : '#222222';
$secondaryColor     = isset( $attrs['secondaryColor'] ) ? $attrs['secondaryColor'] : '#f0f0f0';
$textColor          = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$animation          = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$iconSize           = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 24,
    'tablet'  => 20,
    'mobile'  => 16
);
$gap                = isset( $attrs['gap'] ) ? $attrs['gap'] : array(
    'desktop' => 15,
    'tablet'  => 10,
    'mobile'  => 8
);

// Width and height with units
$width              = isset( $attrs['width'] ) ? $attrs['width'] : array(
    'desktop' => 100,
    'tablet'  => 100,
    'mobile'  => 100
);
$widthUnit          = isset( $attrs['widthUnit'] ) ? $attrs['widthUnit'] : '%';
$height             = isset( $attrs['height'] ) ? $attrs['height'] : array(
    'desktop' => 3,
    'tablet'  => 2,
    'mobile'  => 2
);
$heightUnit         = isset( $attrs['heightUnit'] ) ? $attrs['heightUnit'] : 'px';

// Border radius (only used for some styles)
$borderRadius       = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => 0,
    'tablet'  => 0,
    'mobile'  => 0
);

// Margin
$margin             = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
    'desktop' => array(
        'top'    => 30,
        'bottom' => 30,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 25,
        'bottom' => 25,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 20,
        'bottom' => 20,
        'unit'   => 'px',
    ),
);

// Typography
$typography         = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 16,
        'tablet'  => 15,
        'mobile'  => 14,
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array(
        'desktop' => 1.5,
        'tablet'  => 1.5,
        'mobile'  => 1.5,
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => 0,
        'tablet'  => 0,
        'mobile'  => 0,
    ),
    'letterSpacingUnit' => 'px',
);

// CSS Output
ob_start();
?>
/* Separator Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    margin-top: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] ); ?>;
    margin-bottom: <?php echo esc_attr( $margin['desktop']['bottom'] . $margin['desktop']['unit'] ); ?>;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: <?php echo $align === 'center' ? 'center' : ($align === 'right' ? 'flex-end' : 'flex-start'); ?>;
}

/* Container that holds both content and line */
.<?php echo esc_attr( $id ); ?> .digiblocks-separator-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: <?php echo $align === 'left' ? 'flex-start' : ($align === 'right' ? 'flex-end' : 'center'); ?>;
    width: 100%;
}

/* Separator line base styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-separator-line {
    /* Apply style-specific properties */
    <?php if ( 'line' === $separatorStyle ) : ?>
    background-color: <?php echo esc_attr( $primaryColor ); ?>;
    height: <?php echo esc_attr( $height['desktop'] . $heightUnit ); ?>;
    width: <?php echo esc_attr( $width['desktop'] . $widthUnit ); ?>;
    border-radius: <?php echo esc_attr( $borderRadius['desktop'] ); ?>px;
    <?php elseif ( 'dashed' === $separatorStyle ) : ?>
    border-top: <?php echo esc_attr( $height['desktop'] . $heightUnit ); ?> dashed <?php echo esc_attr( $primaryColor ); ?>;
    width: <?php echo esc_attr( $width['desktop'] . $widthUnit ); ?>;
    <?php elseif ( 'dotted' === $separatorStyle ) : ?>
    border-top: <?php echo esc_attr( $height['desktop'] . $heightUnit ); ?> dotted <?php echo esc_attr( $primaryColor ); ?>;
    width: <?php echo esc_attr( $width['desktop'] . $widthUnit ); ?>;
    <?php elseif ( 'double' === $separatorStyle ) : ?>
    border-top: <?php echo esc_attr( max(1, floor($height['desktop']/3)) . $heightUnit ); ?> solid <?php echo esc_attr( $primaryColor ); ?>;
    border-bottom: <?php echo esc_attr( max(1, floor($height['desktop']/3)) . $heightUnit ); ?> solid <?php echo esc_attr( $primaryColor ); ?>;
    height: <?php echo esc_attr( $height['desktop'] . $heightUnit ); ?>;
    width: <?php echo esc_attr( $width['desktop'] . $widthUnit ); ?>;
    <?php elseif ( 'gradient' === $separatorStyle ) : ?>
    background: linear-gradient(90deg, <?php echo esc_attr( $secondaryColor ); ?> 0%, <?php echo esc_attr( $primaryColor ); ?> 50%, <?php echo esc_attr( $secondaryColor ); ?> 100%);
    height: <?php echo esc_attr( $height['desktop'] . $heightUnit ); ?>;
    width: <?php echo esc_attr( $width['desktop'] . $widthUnit ); ?>;
    border-radius: <?php echo esc_attr( $borderRadius['desktop'] ); ?>px;
    <?php elseif ( 'shadow' === $separatorStyle ) : ?>
    height: <?php echo esc_attr( $height['desktop'] . $heightUnit ); ?>;
    width: <?php echo esc_attr( $width['desktop'] . $widthUnit ); ?>;
    background-color: <?php echo esc_attr( $primaryColor ); ?>;
    border-radius: <?php echo esc_attr( $borderRadius['desktop'] ); ?>px;
    box-shadow: 0 <?php echo esc_attr( max(2, $height['desktop']/2) ); ?>px <?php echo esc_attr( max(4, $height['desktop']) ); ?>px rgba(0,0,0,0.2);
    <?php endif; ?>

    <?php if ( 'none' !== $contentType ) : ?>
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
    <?php endif; ?>
    
    <?php if ( 'left' === $align ) : ?>
    margin-left: 0;
    margin-right: auto;
    <?php elseif ( 'right' === $align ) : ?>
    margin-left: auto;
    margin-right: 0;
    <?php else : ?>
    margin-left: auto;
    margin-right: auto;
    <?php endif; ?>
}

/* SVG shape styles for special separators */
.<?php echo esc_attr( $id ); ?> .digiblocks-separator-shape {
    width: 100%;
    height: 100%;
    
    <?php if ( 'none' !== $contentType ) : ?>
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    <?php endif; ?>
    
    <?php if ( 'left' === $align ) : ?>
    margin-left: 0;
    margin-right: auto;
    <?php elseif ( 'right' === $align ) : ?>
    margin-left: auto;
    margin-right: 0;
    <?php else : ?>
    margin-left: auto;
    margin-right: auto;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-separator-shape svg {
    width: 100%;
    height: 100%;
    display: block;
}

/* Content styles for text or icon - only for compatible separator styles */
<?php if ( 'none' !== $contentType && !in_array($separatorStyle, array('wave', 'zigzag', 'slant')) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-separator-content {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 0 <?php echo esc_attr( $gap['desktop'] ); ?>px;
    <?php if ( 'text' === $contentType && $textColor ) : ?>
    color: <?php echo esc_attr( $textColor ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

/* Icon-specific styles */
<?php if ( 'icon' === $contentType && $iconValue && isset($iconValue['svg']) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-separator-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-separator-icon svg {
    width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    fill: <?php echo esc_attr( $textColor ?: $primaryColor ); ?>;
}
<?php endif; ?>

/* Text-specific styles with typography */
<?php if ( 'text' === $contentType ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-separator-text {
    <?php if ( !empty($typography['fontFamily']) ) : ?>
    font-family: <?php echo esc_attr( $typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( !empty($typography['fontSize']['desktop']) ) : ?>
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop'] . ($typography['fontSizeUnit'] ?: 'px') ); ?>;
    <?php endif; ?>
    
    <?php if ( !empty($typography['fontWeight']) ) : ?>
    font-weight: <?php echo esc_attr( $typography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( !empty($typography['fontStyle']) ) : ?>
    font-style: <?php echo esc_attr( $typography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( !empty($typography['textTransform']) ) : ?>
    text-transform: <?php echo esc_attr( $typography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( !empty($typography['lineHeight']['desktop']) ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . ($typography['lineHeightUnit'] ?: 'em') ); ?>;
    <?php endif; ?>
    
    <?php if ( !empty($typography['letterSpacing']['desktop']) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . ($typography['letterSpacingUnit'] ?: 'px') ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        margin-top: <?php echo esc_attr( isset($margin['tablet']['top']) ? $margin['tablet']['top'] . ($margin['tablet']['unit'] ?: 'px') : $margin['desktop']['top'] . $margin['desktop']['unit'] ); ?>;
        margin-bottom: <?php echo esc_attr( isset($margin['tablet']['bottom']) ? $margin['tablet']['bottom'] . ($margin['tablet']['unit'] ?: 'px') : $margin['desktop']['bottom'] . $margin['desktop']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-line {
        width: <?php echo esc_attr( isset($width['tablet']) ? $width['tablet'] . $widthUnit : $width['desktop'] . $widthUnit ); ?>;
        <?php if ( !in_array($separatorStyle, array('dashed', 'dotted')) ) : ?>
        height: <?php echo esc_attr( isset($height['tablet']) ? $height['tablet'] . $heightUnit : $height['desktop'] . $heightUnit ); ?>;
        <?php else : ?>
        border-top-width: <?php echo esc_attr( isset($height['tablet']) ? $height['tablet'] . $heightUnit : $height['desktop'] . $heightUnit ); ?>;
        <?php endif; ?>
        
        <?php if ( in_array($separatorStyle, array('line', 'gradient', 'shadow')) && isset($borderRadius['tablet']) ) : ?>
        border-radius: <?php echo esc_attr( $borderRadius['tablet'] ); ?>px;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-shape {
        width: 100%;
        height: 100%;
    }
    
    <?php if ( 'none' !== $contentType && !in_array($separatorStyle, array('wave', 'zigzag', 'slant')) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-content {
        padding: 0 <?php echo esc_attr( isset($gap['tablet']) ? $gap['tablet'] : $gap['desktop'] ); ?>px;
    }
    <?php endif; ?>
    
    <?php if ( 'icon' === $contentType && $iconValue && isset($iconValue['svg']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-icon svg {
        width: <?php echo esc_attr( isset($iconSize['tablet']) ? $iconSize['tablet'] : $iconSize['desktop'] ); ?>px;
        height: <?php echo esc_attr( isset($iconSize['tablet']) ? $iconSize['tablet'] : $iconSize['desktop'] ); ?>px;
    }
    <?php endif; ?>
    
    <?php if ( 'text' === $contentType && isset($typography['fontSize']['tablet']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-text {
        <?php if ( isset($typography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ($typography['fontSizeUnit'] ?: 'px') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset($typography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ($typography['lineHeightUnit'] ?: 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset($typography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ($typography['letterSpacingUnit'] ?: 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        margin-top: <?php echo esc_attr( isset($margin['mobile']['top']) ? $margin['mobile']['top'] . ($margin['mobile']['unit'] ?: 'px') : $margin['desktop']['top'] . $margin['desktop']['unit'] ); ?>;
        margin-bottom: <?php echo esc_attr( isset($margin['mobile']['bottom']) ? $margin['mobile']['bottom'] . ($margin['mobile']['unit'] ?: 'px') : $margin['desktop']['bottom'] . $margin['desktop']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-line {
        width: <?php echo esc_attr( isset($width['mobile']) ? $width['mobile'] . $widthUnit : $width['desktop'] . $widthUnit ); ?>;
        <?php if ( !in_array($separatorStyle, array('dashed', 'dotted')) ) : ?>
        height: <?php echo esc_attr( isset($height['mobile']) ? $height['mobile'] . $heightUnit : $height['desktop'] . $heightUnit ); ?>;
        <?php else : ?>
        border-top-width: <?php echo esc_attr( isset($height['mobile']) ? $height['mobile'] . $heightUnit : $height['desktop'] . $heightUnit ); ?>;
        <?php endif; ?>
        
        <?php if ( in_array($separatorStyle, array('line', 'gradient', 'shadow')) && isset($borderRadius['mobile']) ) : ?>
        border-radius: <?php echo esc_attr( $borderRadius['mobile'] ); ?>px;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-shape {
        width: 100%;
        height: 100%;
    }
    
    <?php if ( 'none' !== $contentType && !in_array($separatorStyle, array('wave', 'zigzag', 'slant')) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-content {
        padding: 0 <?php echo esc_attr( isset($gap['mobile']) ? $gap['mobile'] : $gap['desktop'] ); ?>px;
    }
    <?php endif; ?>
    
    <?php if ( 'icon' === $contentType && $iconValue && isset($iconValue['svg']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-icon svg {
        width: <?php echo esc_attr( isset($iconSize['mobile']) ? $iconSize['mobile'] : $iconSize['desktop'] ); ?>px;
        height: <?php echo esc_attr( isset($iconSize['mobile']) ? $iconSize['mobile'] : $iconSize['desktop'] ); ?>px;
    }
    <?php endif; ?>
    
    <?php if ( 'text' === $contentType && isset($typography['fontSize']['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-text {
        <?php if ( isset($typography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ($typography['fontSizeUnit'] ?: 'px') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset($typography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ($typography['lineHeightUnit'] ?: 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset($typography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ($typography['letterSpacingUnit'] ?: 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}
<?php
$digiblocks_css_output = ob_get_clean();