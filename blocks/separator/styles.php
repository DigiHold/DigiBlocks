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
    'mobile'  => '',
);
$gap                = isset( $attrs['gap'] ) ? $attrs['gap'] : array(
    'desktop' => 15,
    'tablet'  => '',
    'mobile'  => '',
);

// Width and height with units
$width = isset( $attrs['width'] ) ? $attrs['width'] : [
    'desktop' => [ 'value' => 100, 'unit' => '%' ],
    'tablet'  => [ 'value' => '', 'unit' => '' ],
    'mobile'  => [ 'value' => '', 'unit' => '' ],
];
$height = isset( $attrs['height'] ) ? $attrs['height'] : [
    'desktop' => [ 'value' => 3, 'unit' => 'px' ],
    'tablet'  => [ 'value' => '', 'unit' => '' ],
    'mobile'  => [ 'value' => '', 'unit' => '' ],
];

// Border radius (only used for some styles)
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => [ 'value' => 0, 'unit' => 'px' ],
    'tablet'  => [ 'value' => '', 'unit' => '' ],
    'mobile'  => [ 'value' => '', 'unit' => '' ],
];

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
    'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight' => array(
		'desktop' => array('value' => 1.5, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
    'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);

// CSS Output
ob_start();
?>
/* Separator Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    margin-top: <?php echo esc_attr( $margin['desktop']['top'] . (is_array($margin['desktop']) && array_key_exists('unit', $margin['desktop']) ? $margin['desktop']['unit'] : 'px') ); ?>;
    margin-bottom: <?php echo esc_attr( $margin['desktop']['bottom'] . (is_array($margin['desktop']) && array_key_exists('unit', $margin['desktop']) ? $margin['desktop']['unit'] : 'px') ); ?>;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: <?php echo $align === 'center' ? 'center' : ($align === 'right' ? 'flex-end' : 'flex-start'); ?>;
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
    <?php if ( 'line' === $separatorStyle ) : ?>
    background-color: <?php echo esc_attr( $primaryColor ); ?>;
    <?php if ( ! empty( (is_array($width['desktop']) && isset($width['desktop']['value']) ? $width['desktop']['value'] : 0) ) ) : ?>
        width: <?php echo esc_attr( $width['desktop']['value'] . (is_array($width['desktop']) && array_key_exists('unit', $width['desktop']) ? $width['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0) ) ) : ?>
        height: <?php echo esc_attr( $height['desktop']['value'] . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( (is_array($borderRadius['desktop']) && isset($borderRadius['desktop']['value']) ? $borderRadius['desktop']['value'] : 0) ) ) : ?>
        border-radius: <?php echo esc_attr( $borderRadius['desktop']['value'] . (is_array($borderRadius['desktop']) && array_key_exists('unit', $borderRadius['desktop']) ? $borderRadius['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    
    <?php elseif ( 'dashed' === $separatorStyle ) : ?>
    <?php if ( ! empty( (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0) ) ) : ?>
        border-top: <?php echo esc_attr( $height['desktop']['value'] . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?> dashed <?php echo esc_attr( $primaryColor ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( (is_array($width['desktop']) && isset($width['desktop']['value']) ? $width['desktop']['value'] : 0) ) ) : ?>
        width: <?php echo esc_attr( $width['desktop']['value'] . (is_array($width['desktop']) && array_key_exists('unit', $width['desktop']) ? $width['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    
    <?php elseif ( 'dotted' === $separatorStyle ) : ?>
    <?php if ( ! empty( (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0) ) ) : ?>
        border-top: <?php echo esc_attr( $height['desktop']['value'] . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?> dotted <?php echo esc_attr( $primaryColor ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( (is_array($width['desktop']) && isset($width['desktop']['value']) ? $width['desktop']['value'] : 0) ) ) : ?>
        width: <?php echo esc_attr( $width['desktop']['value'] . (is_array($width['desktop']) && array_key_exists('unit', $width['desktop']) ? $width['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    
    <?php elseif ( 'double' === $separatorStyle ) : ?>
    <?php if ( ! empty( (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0) ) ) : ?>
        <?php
        $border_thickness = max(1, floor((is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0)/3));
        ?>
        border-top: <?php echo esc_attr( $border_thickness . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?> solid <?php echo esc_attr( $primaryColor ); ?>;
        border-bottom: <?php echo esc_attr( $border_thickness . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?> solid <?php echo esc_attr( $primaryColor ); ?>;
        height: <?php echo esc_attr( $height['desktop']['value'] . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( (is_array($width['desktop']) && isset($width['desktop']['value']) ? $width['desktop']['value'] : 0) ) ) : ?>
        width: <?php echo esc_attr( $width['desktop']['value'] . (is_array($width['desktop']) && array_key_exists('unit', $width['desktop']) ? $width['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    
    <?php elseif ( 'gradient' === $separatorStyle ) : ?>
    background: linear-gradient(90deg, <?php echo esc_attr( $secondaryColor ); ?> 0%, <?php echo esc_attr( $primaryColor ); ?> 50%, <?php echo esc_attr( $secondaryColor ); ?> 100%);
    <?php if ( ! empty( (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0) ) ) : ?>
        height: <?php echo esc_attr( $height['desktop']['value'] . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( (is_array($width['desktop']) && isset($width['desktop']['value']) ? $width['desktop']['value'] : 0) ) ) : ?>
        width: <?php echo esc_attr( $width['desktop']['value'] . (is_array($width['desktop']) && array_key_exists('unit', $width['desktop']) ? $width['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( (is_array($borderRadius['desktop']) && isset($borderRadius['desktop']['value']) ? $borderRadius['desktop']['value'] : 0) ) ) : ?>
        border-radius: <?php echo esc_attr( $borderRadius['desktop']['value'] . (is_array($borderRadius['desktop']) && array_key_exists('unit', $borderRadius['desktop']) ? $borderRadius['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    
    <?php elseif ( 'shadow' === $separatorStyle ) : ?>
    <?php if ( ! empty( (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0) ) ) : ?>
        height: <?php echo esc_attr( $height['desktop']['value'] . (is_array($height['desktop']) && array_key_exists('unit', $height['desktop']) ? $height['desktop']['unit'] : 'px') ); ?>;
        <?php
        $shadow_blur = max(2, (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0)/2);
        $shadow_spread = max(4, (is_array($height['desktop']) && isset($height['desktop']['value']) ? $height['desktop']['value'] : 0));
        ?>
        box-shadow: 0 <?php echo esc_attr( $shadow_blur ); ?>px <?php echo esc_attr( $shadow_spread ); ?>px rgba(0,0,0,0.2);
    <?php endif; ?>
    <?php if ( ! empty( (is_array($width['desktop']) && isset($width['desktop']['value']) ? $width['desktop']['value'] : 0) ) ) : ?>
        width: <?php echo esc_attr( $width['desktop']['value'] . (is_array($width['desktop']) && array_key_exists('unit', $width['desktop']) ? $width['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
    background-color: <?php echo esc_attr( $primaryColor ); ?>;
    <?php if ( ! empty( (is_array($borderRadius['desktop']) && isset($borderRadius['desktop']['value']) ? $borderRadius['desktop']['value'] : 0) ) ) : ?>
        border-radius: <?php echo esc_attr( $borderRadius['desktop']['value'] . (is_array($borderRadius['desktop']) && array_key_exists('unit', $borderRadius['desktop']) ? $borderRadius['desktop']['unit'] : 'px') ); ?>;
    <?php endif; ?>
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
    
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['desktop'] ) && isset( $typography['fontSize']['desktop']['value'] ) && $typography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop']['value'] . ( $typography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['desktop'] ) && isset( $typography['lineHeight']['desktop']['value'] ) && $typography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop']['value'] . ( $typography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['desktop'] ) && isset( $typography['letterSpacing']['desktop']['value'] ) && $typography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop']['value'] . ( $typography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    <?php if ( is_array($margin['tablet']) && (!empty($margin['tablet']['top']) || !empty($margin['tablet']['bottom'])) ) : ?>
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( !empty($margin['tablet']['top']) ) : ?>
		margin-top: <?php echo esc_attr( ( isset( $margin['tablet'] ) && is_array( $margin['tablet'] ) && isset( $margin['tablet']['top'] ) ? $margin['tablet']['top'] : '' ) . (( isset( $margin['tablet'] ) && is_array( $margin['tablet'] ) && isset( $margin['tablet']['unit'] ) ? $margin['tablet']['unit'] : '' ) ?? '') ); ?>;
		<?php endif; ?>
		<?php if ( !empty($margin['tablet']['bottom']) ) : ?>
		margin-bottom: <?php echo esc_attr( ( isset( $margin['tablet'] ) && is_array( $margin['tablet'] ) && isset( $margin['tablet']['bottom'] ) ? $margin['tablet']['bottom'] : '' ) . (( isset( $margin['tablet'] ) && is_array( $margin['tablet'] ) && isset( $margin['tablet']['unit'] ) ? $margin['tablet']['unit'] : '' ) ?? '') ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>

	.<?php echo esc_attr( $id ); ?> {
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
    
    <?php if ( (is_array($width['tablet']) && !empty($width['tablet']['value'])) || (is_array($height['tablet']) && !empty($height['tablet']['value'])) || (is_array($borderRadius['tablet']) && !empty($borderRadius['tablet']['value'])) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-separator-line {
			<?php if ( is_array($width['tablet']) && !empty($width['tablet']['value']) ) : ?>
			width: <?php echo esc_attr( ( isset( $width['tablet'] ) && is_array( $width['tablet'] ) && isset( $width['tablet']['value'] ) ? $width['tablet']['value'] : '' ) . ( isset( $width['tablet'] ) && is_array( $width['tablet'] ) && isset( $width['tablet']['unit'] ) ? $width['tablet']['unit'] : '' ) ); ?>;
			<?php endif; ?>

			<?php if ( is_array($height['tablet']) && !empty($height['tablet']['value']) ) : ?>
				<?php if ( !in_array($separatorStyle, array('dashed', 'dotted')) ) : ?>
				height: <?php echo esc_attr( ( isset( $height['tablet'] ) && is_array( $height['tablet'] ) && isset( $height['tablet']['value'] ) ? $height['tablet']['value'] : '' ) . ( isset( $height['tablet'] ) && is_array( $height['tablet'] ) && isset( $height['tablet']['unit'] ) ? $height['tablet']['unit'] : '' ) ); ?>;
				<?php else : ?>
				border-top-width: <?php echo esc_attr( ( isset( $height['tablet'] ) && is_array( $height['tablet'] ) && isset( $height['tablet']['value'] ) ? $height['tablet']['value'] : '' ) . ( isset( $height['tablet'] ) && is_array( $height['tablet'] ) && isset( $height['tablet']['unit'] ) ? $height['tablet']['unit'] : '' ) ); ?>;
				<?php endif; ?>
			<?php endif; ?>

			<?php if ( in_array($separatorStyle, array('line', 'gradient', 'shadow')) && is_array($borderRadius['tablet']) && !empty($borderRadius['tablet']['value']) ) : ?>
			border-radius: <?php echo esc_attr( ( isset( $borderRadius['tablet'] ) && is_array( $borderRadius['tablet'] ) && isset( $borderRadius['tablet']['value'] ) ? $borderRadius['tablet']['value'] : '' ) . ( isset( $borderRadius['tablet'] ) && is_array( $borderRadius['tablet'] ) && isset( $borderRadius['tablet']['unit'] ) ? $borderRadius['tablet']['unit'] : '' ) ); ?>;
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
    
    <?php if ( 'text' === $contentType && ( ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['tablet']['value'] ) && $typography['fontSize']['tablet']['value'] !== '' ) || ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['tablet']['value'] ) && $typography['lineHeight']['tablet']['value'] !== '' ) || ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['tablet']['value'] ) && $typography['letterSpacing']['tablet']['value'] !== '' ) ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-separator-text {
		<?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['tablet']['value'] ) && $typography['fontSize']['tablet']['value'] !== '' ) : ?>
		font-size: <?php echo esc_attr( $typography['fontSize']['tablet']['value'] . ( $typography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>

		<?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['tablet']['value'] ) && $typography['lineHeight']['tablet']['value'] !== '' ) : ?>
		line-height: <?php echo esc_attr( $typography['lineHeight']['tablet']['value'] . ( $typography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['tablet']['value'] ) && $typography['letterSpacing']['tablet']['value'] !== '' ) : ?>
		letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet']['value'] . ( $typography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
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
	
    <?php if ( is_array($margin['mobile']) && (!empty($margin['mobile']['top']) || !empty($margin['mobile']['bottom'])) ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( !empty($margin['mobile']['top']) ) : ?>
        margin-top: <?php echo esc_attr( ( isset( $margin['mobile'] ) && is_array( $margin['mobile'] ) && isset( $margin['mobile']['top'] ) ? $margin['mobile']['top'] : '' ) . (( isset( $margin['mobile'] ) && is_array( $margin['mobile'] ) && isset( $margin['mobile']['unit'] ) ? $margin['mobile']['unit'] : '' ) ?? '') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($margin['mobile']['bottom']) ) : ?>
        margin-bottom: <?php echo esc_attr( ( isset( $margin['mobile'] ) && is_array( $margin['mobile'] ) && isset( $margin['mobile']['bottom'] ) ? $margin['mobile']['bottom'] : '' ) . (( isset( $margin['mobile'] ) && is_array( $margin['mobile'] ) && isset( $margin['mobile']['unit'] ) ? $margin['mobile']['unit'] : '' ) ?? '') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
	<?php if ( (is_array($width['mobile']) && !empty($width['mobile']['value'])) || (is_array($height['mobile']) && !empty($height['mobile']['value'])) || (is_array($borderRadius['mobile']) && !empty($borderRadius['mobile']['value'])) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-separator-line {
			<?php if ( is_array($width['mobile']) && !empty($width['mobile']['value']) ) : ?>
			width: <?php echo esc_attr( ( isset( $width['mobile'] ) && is_array( $width['mobile'] ) && isset( $width['mobile']['value'] ) ? $width['mobile']['value'] : '' ) . ( isset( $width['mobile'] ) && is_array( $width['mobile'] ) && isset( $width['mobile']['unit'] ) ? $width['mobile']['unit'] : '' ) ); ?>;
			<?php endif; ?>

			<?php if ( is_array($height['mobile']) && !empty($height['mobile']['value']) ) : ?>
				<?php if ( !in_array($separatorStyle, array('dashed', 'dotted')) ) : ?>
				height: <?php echo esc_attr( ( isset( $height['mobile'] ) && is_array( $height['mobile'] ) && isset( $height['mobile']['value'] ) ? $height['mobile']['value'] : '' ) . ( isset( $height['mobile'] ) && is_array( $height['mobile'] ) && isset( $height['mobile']['unit'] ) ? $height['mobile']['unit'] : '' ) ); ?>;
				<?php else : ?>
				border-top-width: <?php echo esc_attr( ( isset( $height['mobile'] ) && is_array( $height['mobile'] ) && isset( $height['mobile']['value'] ) ? $height['mobile']['value'] : '' ) . ( isset( $height['mobile'] ) && is_array( $height['mobile'] ) && isset( $height['mobile']['unit'] ) ? $height['mobile']['unit'] : '' ) ); ?>;
				<?php endif; ?>
			<?php endif; ?>

			<?php if ( in_array($separatorStyle, array('line', 'gradient', 'shadow')) && is_array($borderRadius['mobile']) && !empty($borderRadius['mobile']['value']) ) : ?>
			border-radius: <?php echo esc_attr( ( isset( $borderRadius['mobile'] ) && is_array( $borderRadius['mobile'] ) && isset( $borderRadius['mobile']['value'] ) ? $borderRadius['mobile']['value'] : '' ) . ( isset( $borderRadius['mobile'] ) && is_array( $borderRadius['mobile'] ) && isset( $borderRadius['mobile']['unit'] ) ? $borderRadius['mobile']['unit'] : '' ) ); ?>;
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
    
    <?php if ( 'text' === $contentType && ( ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['mobile']['value'] ) && $typography['fontSize']['mobile']['value'] !== '' ) || ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['mobile']['value'] ) && $typography['lineHeight']['mobile']['value'] !== '' ) || ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['mobile']['value'] ) && $typography['letterSpacing']['mobile']['value'] !== '' ) ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-separator-text {
        <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['mobile']['value'] ) && $typography['fontSize']['mobile']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile']['value'] . ( $typography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>

        <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['mobile']['value'] ) && $typography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile']['value'] . ( $typography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['mobile']['value'] ) && $typography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile']['value'] . ( $typography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
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