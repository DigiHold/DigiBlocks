<?php
/**
 * Heading Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id                     = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility             = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
$content                = isset( $attrs['content'] ) ? $attrs['content'] : '';
$level                  = isset( $attrs['level'] ) ? $attrs['level'] : 2;
$textColor              = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '';
$textHoverColor         = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor        = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor   = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$align                  = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'left',
    'tablet'  => '',
    'mobile'  => '',
];
$maxWidth              = isset( $attrs['maxWidth'] ) ? $attrs['maxWidth'] : array(
	'desktop' => array( 'value' => '', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$highlightText          = isset( $attrs['highlightText'] ) ? $attrs['highlightText'] : '';
$highlightColor         = isset( $attrs['highlightColor'] ) ? $attrs['highlightColor'] : '#ffde59';
$highlightType          = isset( $attrs['highlightType'] ) ? $attrs['highlightType'] : 'background';
$textEffect             = isset( $attrs['textEffect'] ) ? $attrs['textEffect'] : 'none';
$displaySeparator       = isset( $attrs['displaySeparator'] ) ? $attrs['displaySeparator'] : false;
$separatorColor         = isset( $attrs['separatorColor'] ) ? $attrs['separatorColor'] : '#1e73be';
$separatorSecondaryColor = isset( $attrs['separatorSecondaryColor'] ) ? $attrs['separatorSecondaryColor'] : '#e0e0e0';
$separatorPosition      = isset( $attrs['separatorPosition'] ) ? $attrs['separatorPosition'] : 'bottom';
$separatorStyle         = isset( $attrs['separatorStyle'] ) ? $attrs['separatorStyle'] : 'line-solid';
$linkEnabled            = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;
$shadowEnabled          = isset( $attrs['shadowEnabled'] ) ? $attrs['shadowEnabled'] : false;

// Get separatorWidth (with fallback)
$separatorWidth = isset( $attrs['separatorWidth'] ) ? $attrs['separatorWidth'] : array(
    'desktop' => 50,
    'tablet'  => 40,
    'mobile'  => 30,
);

// Get separatorHeight (with fallback)
$separatorHeight = isset( $attrs['separatorHeight'] ) ? $attrs['separatorHeight'] : array(
    'desktop' => 3,
    'tablet'  => 2,
    'mobile'  => 2,
);

// Get separatorSpacing (with fallback)
$separatorSpacing = isset( $attrs['separatorSpacing'] ) ? $attrs['separatorSpacing'] : array(
    'desktop' => 10,
    'tablet'  => 8,
    'mobile'  => 6,
);

// Get separatorBorderRadius (with fallback)
$separatorBorderRadius = isset( $attrs['separatorBorderRadius'] ) ? $attrs['separatorBorderRadius'] : digiblocks_get_default_dimensions('px');

// Get textShadow settings
$textShadow = isset( $attrs['textShadow'] ) ? $attrs['textShadow'] : array(
    'horizontal' => 2,
    'vertical'   => 2,
    'blur'       => 3,
    'color'      => 'rgba(0,0,0,0.3)',
);

// Spacing
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

// Get typography settings with default values
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily' => '',
    'fontSize' => array(
        'desktop' => array( 'value' => '', 'unit' => 'px' ),
        'tablet' => array( 'value' => '', 'unit' => 'px' ),
        'mobile' => array( 'value' => '', 'unit' => 'px' ),
    ),
    'fontWeight' => '',
    'fontStyle' => 'normal',
    'textTransform' => '',
    'textDecoration' => '',
    'lineHeight' => array(
        'desktop' => array( 'value' => '', 'unit' => 'em' ),
        'tablet' => array( 'value' => '', 'unit' => 'em' ),
        'mobile' => array( 'value' => '', 'unit' => 'em' ),
    ),
    'letterSpacing' => array(
        'desktop' => array( 'value' => '', 'unit' => 'px' ),
        'tablet' => array( 'value' => '', 'unit' => 'px' ),
        'mobile' => array( 'value' => '', 'unit' => 'px' ),
    ),
);

// CSS Output
ob_start();
?>
/* Heading Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: <?php echo esc_attr( $align['desktop'] ); ?>;
	<?php if ( $backgroundColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
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
	<?php endif; ?>
	<?php if ( ! empty( $textEffect ) && 'none' !== $textEffect ) : ?>
		mix-blend-mode: <?php echo esc_attr( $textEffect ); ?>;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
	color: <?php echo esc_attr( $textColor ); ?>;
	<?php if ( $shadowEnabled && $textShadow ) : ?>
        text-shadow: <?php echo esc_attr( $textShadow['horizontal'] . 'px ' . $textShadow['vertical'] . 'px ' . $textShadow['blur'] . 'px ' . $textShadow['color'] ); ?>;
    <?php endif; ?>
    margin: 0;
    <?php if ( ! empty( (is_array($maxWidth['desktop']) && isset($maxWidth['desktop']['value']) ? $maxWidth['desktop']['value'] : 0) ) ) : ?>
		max-width: <?php echo esc_attr( $maxWidth['desktop']['value'] . (is_array($maxWidth['desktop']) && array_key_exists('unit', $maxWidth['desktop']) ? $maxWidth['desktop']['unit'] : 'px') ); ?>;
		<?php if ( 'center' === $align['desktop'] ) : ?>
			margin-left: auto;
			margin-right: auto;
		<?php elseif ( 'right' === $align['desktop'] ) : ?>
			margin-left: auto;
		<?php endif; ?>
	<?php endif; ?>
	transition: all 0.3s ease;
}

/* Typography styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
    <?php if ( ! empty( $typography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['desktop'] ) && isset( $typography['fontSize']['desktop']['value'] ) && $typography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['desktop']['value'] . ( $typography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $typography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $typography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $typography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $typography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $typography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $typography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $typography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $typography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['desktop'] ) && isset( $typography['lineHeight']['desktop']['value'] ) && $typography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['desktop']['value'] . ( $typography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['desktop'] ) && isset( $typography['letterSpacing']['desktop']['value'] ) && $typography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop']['value'] . ( $typography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
}

<?php if ( $textHoverColor || $backgroundHoverColor ) : ?>
	/* Hover effects */
	<?php if ( $backgroundHoverColor ) : ?>
		.<?php echo esc_attr( $id ); ?>:hover {
			background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
		}
	<?php endif; ?>

	<?php if ( $textHoverColor ) : ?>
		.<?php echo esc_attr( $id ); ?>:hover .digiblocks-heading-text {
			color: <?php echo esc_attr( $textHoverColor ); ?>;
		}
	<?php endif; ?>
<?php endif; ?>

<?php if ( $linkEnabled ) : ?>
/* Link styles */
.<?php echo esc_attr( $id ); ?> {
    cursor: pointer;
    text-decoration: none;
}
<?php endif; ?>

<?php if ( $highlightText && ! empty( $highlightText ) ) : ?>
/* Highlight styles */
<?php if ( 'background' === $highlightType ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-highlight {
    background-color: <?php echo esc_attr( $highlightColor ); ?>;
    padding: 0 5px;
    border-radius: 3px;
}
<?php elseif ( 'color' === $highlightType ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-highlight {
    color: <?php echo esc_attr( $highlightColor ); ?>;
}
<?php elseif ( 'underline' === $highlightType ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-highlight {
    text-decoration: underline;
    text-decoration-color: <?php echo esc_attr( $highlightColor ); ?>;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
}
<?php endif; ?>
<?php endif; ?>

<?php if ( $displaySeparator ) : ?>
/* Enhanced Separator styles */
<?php
// Generate the right position styling based on alignment
$position_css = 'bottom: 0;';
if ( 'top' === $separatorPosition ) {
    $position_css = 'top: 0;';
}

$alignment_css = 'left: 0;';
if ( 'center' === $align ) {
    $alignment_css = 'left: 50%; transform: translateX(-50%);';
} elseif ( 'right' === $align ) {
    $alignment_css = 'right: 0;';
}

// Spacing margin
$spacing_margin = $separatorPosition === 'top' 
    ? "margin-top: {$separatorSpacing['desktop']}px;" 
    : "margin-bottom: {$separatorSpacing['desktop']}px;";
?>

<?php 
// Different styles for different separator types
switch ( $separatorStyle ) :
    
    case 'line-solid': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'line-gradient': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background: linear-gradient(to right, <?php echo esc_attr( $separatorColor ); ?>, <?php echo esc_attr( $separatorSecondaryColor ); ?>, <?php echo esc_attr( $separatorColor ); ?>);
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'line-double': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}

.<?php echo esc_attr( $id ); ?>::after {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorSecondaryColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo $separatorPosition === 'top' 
        ? "margin-top: " . esc_attr(($separatorSpacing['desktop'] + $separatorHeight['desktop'] + 3)) . "px;" 
        : "margin-bottom: " . esc_attr(($separatorSpacing['desktop'] + $separatorHeight['desktop'] + 3)) . "px;"; ?>
}
<?php break;

    case 'line-dashed': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-image: repeating-linear-gradient(
        to right, 
        <?php echo esc_attr( $separatorColor ); ?>, 
        <?php echo esc_attr( $separatorColor ); ?> 8px, 
        transparent 8px, 
        transparent 12px
    );
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'line-dotted': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-image: repeating-linear-gradient(
        to right, 
        <?php echo esc_attr( $separatorColor ); ?>, 
        <?php echo esc_attr( $separatorColor ); ?> 3px, 
        transparent 3px, 
        transparent 6px
    );
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'wave': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] * 4 ); ?>px;
    background-image: repeating-linear-gradient(
        45deg, 
        <?php echo esc_attr( $separatorColor ); ?>, 
        <?php echo esc_attr( $separatorColor ); ?> 5px, 
        transparent 5px, 
        transparent 15px
    );
    mask-image: linear-gradient(
        to bottom, 
        transparent 35%, 
        black 35%, 
        black 65%, 
        transparent 65%
    );
    -webkit-mask-image: linear-gradient(
        to bottom, 
        transparent 35%, 
        black 35%, 
        black 65%, 
        transparent 65%
    );
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'dots': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px;
    background-image: radial-gradient(
        circle, 
        <?php echo esc_attr( $separatorColor ); ?> 25%, 
        transparent 25%
    );
    background-size: <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px;
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'glow': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
    box-shadow: 0 0 <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'faded': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background: linear-gradient(to right, transparent, <?php echo esc_attr( $separatorColor ); ?>, transparent);
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    default: ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php endswitch; ?>

<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $align['tablet'] ) : ?>
		text-align: <?php echo esc_attr( $align['tablet'] ); ?>;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
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
    
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['tablet'] ) && isset( $typography['fontSize']['tablet']['value'] ) && $typography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet']['value'] . ( $typography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        
        <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['tablet'] ) && isset( $typography['lineHeight']['tablet']['value'] ) && $typography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet']['value'] . ( $typography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['tablet'] ) && isset( $typography['letterSpacing']['tablet']['value'] ) && $typography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet']['value'] . ( $typography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>

		<?php if ( is_array( $maxWidth['tablet'] ) && ! empty( $maxWidth['tablet']['value'] ) ) : ?>
			max-width: <?php echo esc_attr( ( isset( $maxWidth['tablet'] ) && is_array( $maxWidth['tablet'] ) && isset( $maxWidth['tablet']['value'] ) ? $maxWidth['tablet']['value'] : '' ) . ( isset( $maxWidth['tablet'] ) && is_array( $maxWidth['tablet'] ) && isset( $maxWidth['tablet']['unit'] ) ? $maxWidth['tablet']['unit'] : '' ) ); ?>;
			<?php if ( 'center' === $align['tablet'] ) : ?>
				margin-left: auto;
				margin-right: auto;
			<?php elseif ( 'right' === $align['tablet'] ) : ?>
				margin-left: auto;
			<?php endif; ?>
		<?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $displaySeparator ) : ?>
    /* Tablet separator styles */
    <?php 
    $tablet_spacing = $separatorPosition === 'top' 
        ? "margin-top: {$separatorSpacing['tablet']}px;" 
        : "margin-bottom: {$separatorSpacing['tablet']}px;";
        
    // Different styles for tablet size
    switch ( $separatorStyle ) :
        case 'line-solid':
        case 'line-gradient':
        case 'line-dashed':
        case 'line-dotted':
        case 'glow': 
        case 'faded': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr($tablet_spacing); ?>
    }
    <?php break;
    
        case 'line-double': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr($tablet_spacing); ?>
    }
    
    .<?php echo esc_attr( $id ); ?>::after {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo $separatorPosition === 'top' 
            ? "margin-top: " . esc_attr(($separatorSpacing['tablet'] + $separatorHeight['tablet'] + 3)) . "px;" 
            : "margin-bottom: " . esc_attr(($separatorSpacing['tablet'] + $separatorHeight['tablet'] + 3)) . "px;"; ?>
    }
    <?php break;
    
        case 'wave': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] * 4 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['tablet'] * 2 ); ?>px <?php echo esc_attr( $separatorHeight['tablet'] * 2 ); ?>px;
        <?php echo esc_attr($tablet_spacing); ?>
    }
    <?php break;
    
        case 'dots': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] * 3 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['tablet'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['tablet'] * 3 ); ?>px;
        <?php echo esc_attr($tablet_spacing); ?>
    }
    <?php break;
    
    endswitch; ?>
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $align['mobile'] ) : ?>
		text-align: <?php echo esc_attr( $align['mobile'] ); ?>;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
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
    
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['mobile'] ) && isset( $typography['fontSize']['mobile']['value'] ) && $typography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile']['value'] . ( $typography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        
        <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['mobile'] ) && isset( $typography['lineHeight']['mobile']['value'] ) && $typography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile']['value'] . ( $typography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['mobile'] ) && isset( $typography['letterSpacing']['mobile']['value'] ) && $typography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile']['value'] . ( $typography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>

		<?php if ( is_array( $maxWidth['mobile'] ) && ! empty( $maxWidth['mobile']['value'] ) ) : ?>
			max-width: <?php echo esc_attr( ( isset( $maxWidth['mobile'] ) && is_array( $maxWidth['mobile'] ) && isset( $maxWidth['mobile']['value'] ) ? $maxWidth['mobile']['value'] : '' ) . ( isset( $maxWidth['mobile'] ) && is_array( $maxWidth['mobile'] ) && isset( $maxWidth['mobile']['unit'] ) ? $maxWidth['mobile']['unit'] : '' ) ); ?>;
			<?php if ( 'center' === $align['mobile'] ) : ?>
				margin-left: auto;
				margin-right: auto;
			<?php elseif ( 'right' === $align['mobile'] ) : ?>
				margin-left: auto;
			<?php endif; ?>
		<?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $displaySeparator ) : ?>
    /* Mobile separator styles */
    <?php 
    $mobile_spacing = $separatorPosition === 'top' 
        ? "margin-top: {$separatorSpacing['mobile']}px;" 
        : "margin-bottom: {$separatorSpacing['mobile']}px;";
        
    // Different styles for mobile size
    switch ( $separatorStyle ) :
        case 'line-solid':
        case 'line-gradient':
        case 'line-dashed':
        case 'line-dotted':
        case 'glow':
        case 'faded': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr($mobile_spacing); ?>
    }
    <?php break;
    
        case 'line-double': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr($mobile_spacing); ?>
    }
    
    .<?php echo esc_attr( $id ); ?>::after {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo $separatorPosition === 'top' 
            ? "margin-top: " . esc_attr(($separatorSpacing['mobile'] + $separatorHeight['mobile'] + 3)) . "px;" 
            : "margin-bottom: " . esc_attr(($separatorSpacing['mobile'] + $separatorHeight['mobile'] + 3)) . "px;"; ?>
    }
    <?php break;
    
        case 'wave': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] * 4 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['mobile'] * 2 ); ?>px <?php echo esc_attr( $separatorHeight['mobile'] * 2 ); ?>px;
        <?php echo esc_attr($mobile_spacing); ?>
    }
    <?php break;
    
        case 'dots': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] * 3 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['mobile'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['mobile'] * 3 ); ?>px;
        <?php echo esc_attr($mobile_spacing); ?>
    }
    <?php break;
    
    endswitch; ?>
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