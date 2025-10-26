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
$visibility         = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
    'tablet'  => '',
    'mobile'  => ''
);
$gap                = isset( $attrs['gap'] ) ? $attrs['gap'] : array(
    'desktop' => 15,
    'tablet'  => '',
    'mobile'  => ''
);

// Width and height with units
$width              = isset( $attrs['width'] ) ? $attrs['width'] : array(
    'desktop' => 100,
    'tablet'  => '',
    'mobile'  => ''
);
$widthUnit          = isset( $attrs['widthUnit'] ) ? $attrs['widthUnit'] : '%';
$height             = isset( $attrs['height'] ) ? $attrs['height'] : array(
    'desktop' => 3,
    'tablet'  => '',
    'mobile'  => ''
);
$heightUnit         = isset( $attrs['heightUnit'] ) ? $attrs['heightUnit'] : 'px';

// Border radius (only used for some styles)
$borderRadius       = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => 0,
    'tablet'  => '',
    'mobile'  => ''
);

// Margin
$margin             = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
    'desktop' => array(
        'top'    => 30,
        'bottom' => 30,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => '',
        'bottom' => '',
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => '',
        'bottom' => '',
        'unit'   => 'px',
    ),
);

// Typography
$typography         = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 16,
        'tablet'  => '',
        'mobile'  => '',
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array(
        'desktop' => 1.5,
        'tablet'  => '',
        'mobile'  => '',
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => 0,
        'tablet'  => '',
        'mobile'  => '',
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
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
}
<?php endif; ?>

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
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop'] . ($typography['fontSizeUnit'] ?? 'px') ); ?>;
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
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . ($typography['lineHeightUnit'] ?? 'em') ); ?>;
    <?php endif; ?>
    
    <?php if ( !empty($typography['letterSpacing']['desktop']) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . ($typography['letterSpacingUnit'] ?? 'px') ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    <?php if ( !empty($margin['tablet']['top']) || !empty($margin['tablet']['bottom']) ) : ?>
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( !empty($margin['tablet']['top']) ) : ?>
		margin-top: <?php echo esc_attr( $margin['tablet']['top'] . ($margin['tablet']['unit'] ?? 'px') ); ?>;
		<?php endif; ?>
		<?php if ( !empty($margin['tablet']['bottom']) ) : ?>
		margin-bottom: <?php echo esc_attr( $margin['tablet']['bottom'] . ($margin['tablet']['unit'] ?? 'px') ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>

	.<?php echo esc_attr( $id ); ?> {
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
    
    <?php if ( !empty($width['tablet']) || !empty($height['tablet']) || !empty($borderRadius['tablet']) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-separator-line {
		<?php if ( !empty($width['tablet']) ) : ?>
		width: <?php echo esc_attr( $width['tablet'] . $widthUnit ); ?>;
		<?php endif; ?>
		
		<?php if ( !empty($height['tablet']) ) : ?>
			<?php if ( !in_array($separatorStyle, array('dashed', 'dotted')) ) : ?>
			height: <?php echo esc_attr( $height['tablet'] . $heightUnit ); ?>;
			<?php else : ?>
			border-top-width: <?php echo esc_attr( $height['tablet'] . $heightUnit ); ?>;
			<?php endif; ?>
		<?php endif; ?>
		
		<?php if ( in_array($separatorStyle, array('line', 'gradient', 'shadow')) && !empty($borderRadius['tablet']) ) : ?>
		border-radius: <?php echo esc_attr( $borderRadius['tablet'] ); ?>px;
		<?php endif; ?>
	}
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-shape {
        width: 100%;
        height: 100%;
    }
    
    <?php if ( 'none' !== $contentType && !in_array($separatorStyle, array('wave', 'zigzag', 'slant')) && !empty($gap['tablet']) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-separator-content {
		padding: 0 <?php echo esc_attr( $gap['tablet'] ); ?>px;
	}
	<?php endif; ?>
    
    <?php if ( 'icon' === $contentType && $iconValue && isset($iconValue['svg']) && !empty($iconSize['tablet']) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-separator-icon svg {
		width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
		height: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
	}
	<?php endif; ?>
    
    <?php if ( 'text' === $contentType && ( !empty($typography['fontSize']['tablet']) || !empty($typography['lineHeight']['tablet']) || ( isset($typography['letterSpacing']['tablet']) && $typography['letterSpacing']['tablet'] !== '' ) ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-separator-text {
		<?php if ( !empty($typography['fontSize']['tablet']) ) : ?>
		font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ($typography['fontSizeUnit'] ?? 'px') ); ?>;
		<?php endif; ?>
		
		<?php if ( !empty($typography['lineHeight']['tablet']) ) : ?>
		line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ($typography['lineHeightUnit'] ?? 'em') ); ?>;
		<?php endif; ?>
		
		<?php if ( isset($typography['letterSpacing']['tablet']) && $typography['letterSpacing']['tablet'] !== '' ) : ?>
		letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ($typography['letterSpacingUnit'] ?? 'px') ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
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
	
    <?php if ( !empty($margin['mobile']['top']) || !empty($margin['mobile']['bottom']) ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( !empty($margin['mobile']['top']) ) : ?>
        margin-top: <?php echo esc_attr( $margin['mobile']['top'] . ($margin['mobile']['unit'] ?? 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($margin['mobile']['bottom']) ) : ?>
        margin-bottom: <?php echo esc_attr( $margin['mobile']['bottom'] . ($margin['mobile']['unit'] ?? 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( !empty($width['mobile']) || !empty($height['mobile']) || !empty($borderRadius['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-line {
        <?php if ( !empty($width['mobile']) ) : ?>
        width: <?php echo esc_attr( $width['mobile'] . $widthUnit ); ?>;
        <?php endif; ?>
        
        <?php if ( !empty($height['mobile']) ) : ?>
            <?php if ( !in_array($separatorStyle, array('dashed', 'dotted')) ) : ?>
            height: <?php echo esc_attr( $height['mobile'] . $heightUnit ); ?>;
            <?php else : ?>
            border-top-width: <?php echo esc_attr( $height['mobile'] . $heightUnit ); ?>;
            <?php endif; ?>
        <?php endif; ?>
        
        <?php if ( in_array($separatorStyle, array('line', 'gradient', 'shadow')) && !empty($borderRadius['mobile']) ) : ?>
        border-radius: <?php echo esc_attr( $borderRadius['mobile'] ); ?>px;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( 'none' !== $contentType && !in_array($separatorStyle, array('wave', 'zigzag', 'slant')) && !empty($gap['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-content {
        padding: 0 <?php echo esc_attr( $gap['mobile'] ); ?>px;
    }
    <?php endif; ?>
    
    <?php if ( 'icon' === $contentType && $iconValue && isset($iconValue['svg']) && !empty($iconSize['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-icon svg {
        width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
    }
    <?php endif; ?>
    
    <?php if ( 'text' === $contentType && ( !empty($typography['fontSize']['mobile']) || !empty($typography['lineHeight']['mobile']) || ( isset($typography['letterSpacing']['mobile']) && $typography['letterSpacing']['mobile'] !== '' ) ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-text {
        <?php if ( !empty($typography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ($typography['fontSizeUnit'] ?? 'px') ); ?>;
        <?php endif; ?>
        
        <?php if ( !empty($typography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ($typography['lineHeightUnit'] ?? 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset($typography['letterSpacing']['mobile']) && $typography['letterSpacing']['mobile'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ($typography['letterSpacingUnit'] ?? 'px') ); ?>;
        <?php endif; ?>
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