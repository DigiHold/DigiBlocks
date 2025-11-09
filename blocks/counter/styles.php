<?php
/**
 * Counter Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
$iconValue                = isset( $attrs['iconValue'] ) ? $attrs['iconValue'] : null;
$startNumber              = isset( $attrs['startNumber'] ) ? intval( $attrs['startNumber'] ) : 0;
$endNumber                = isset( $attrs['endNumber'] ) ? intval( $attrs['endNumber'] ) : 0;
$counterPrefix            = isset( $attrs['counterPrefix'] ) ? $attrs['counterPrefix'] : '';
$counterSuffix            = isset( $attrs['counterSuffix'] ) ? $attrs['counterSuffix'] : '';
$counterPrefixSpacing     = isset( $attrs['counterPrefixSpacing'] ) ? $attrs['counterPrefixSpacing'] : 5;
$counterSuffixSpacing     = isset( $attrs['counterSuffixSpacing'] ) ? $attrs['counterSuffixSpacing'] : 5;
$title                    = isset( $attrs['title'] ) ? $attrs['title'] : '';
$description              = isset( $attrs['description'] ) ? $attrs['description'] : '';
$counterColor             = isset( $attrs['counterColor'] ) ? $attrs['counterColor'] : '';
$counterHoverColor        = isset( $attrs['counterHoverColor'] ) ? $attrs['counterHoverColor'] : '';
$titleColor               = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '';
$titleHoverColor          = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$textColor                = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$textHoverColor           = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : 'transparent';
$backgroundHoverColor     = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$iconColor                = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#1e73be';
$iconHoverColor           = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconBackgroundColor      = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : 'transparent';
$iconHoverBackgroundColor = isset( $attrs['iconHoverBackgroundColor'] ) ? $attrs['iconHoverBackgroundColor'] : '';
$iconBorderStyle          = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'default';
$iconBorderWidth          = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : null;
$iconBorderRadius         = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : null;
$iconBorderColor          = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : '#e0e0e0';
$iconHoverBorderColor     = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : '';
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$animationDuration        = isset( $attrs['animationDuration'] ) ? $attrs['animationDuration'] : 2000;
$animationDelay           = isset( $attrs['animationDelay'] ) ? $attrs['animationDelay'] : 0;
$hoverEffect              = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$displayIcon              = isset( $attrs['displayIcon'] ) ? $attrs['displayIcon'] : false;
$layoutStyle              = isset( $attrs['layoutStyle'] ) ? $attrs['layoutStyle'] : 'stacked';
$verticalSpacing          = isset( $attrs['verticalSpacing'] ) ? $attrs['verticalSpacing'] : 15;
$iconPadding              = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : null;
$iconMargin               = isset( $attrs['iconMargin'] ) ? $attrs['iconMargin'] : null;

// Get padding and margin (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');

$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

// Get iconSize (with fallback)
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 32,
    'tablet'  => '',
    'mobile'  => '',
);

// Get iconMargin (with fallback)
if ( ! $iconMargin && $displayIcon ) {
    $iconMargin = array(
        'desktop' => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 20,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => '',
            'right'  => '',
            'bottom' => '',
            'left'   => '',
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => '',
            'right'  => '',
            'bottom' => '',
            'left'   => '',
            'unit'   => 'px',
        ),
    );
}

// Get borderWidth and borderRadius (with responsive fallback)
$borderWidth = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
	'desktop' => array(
		'top'    => 1,
		'right'  => 1,
		'bottom' => 1,
		'left'   => 1,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'px',
	),
);
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
	'desktop' => array(
		'top'    => 8,
		'right'  => 8,
		'bottom' => 8,
		'left'   => 8,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'px',
	),
);

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

// Get typography settings with default values
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize' => array(
		'desktop' => array('value' => 48, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    'fontWeight'        => '700',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight' => array(
		'desktop' => array('value' => 1.2, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
    'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);

$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
    'fontFamily'        => '',
    'fontSize' => array(
		'desktop' => array('value' => 20, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    'fontWeight'        => '500',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight' => array(
		'desktop' => array('value' => 1.4, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
    'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);

$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
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
/* Counter Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && $borderWidth && isset( $borderWidth['desktop'] ) ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
        <?php if ( $borderRadius && isset( $borderRadius['desktop'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
        <?php endif; ?>
    <?php else : ?>
        border-style: none;
    <?php endif; ?>

    /* Box Shadow */
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    text-align: <?php echo esc_attr( $align ); ?>;
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

/* Hover styles */
<?php
$has_background_hover  = ! empty( $backgroundHoverColor );
$has_box_shadow_hover  = isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'];
$has_hover_effect      = ! empty( $hoverEffect );

$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
$has_transform_hover   = ! empty( $transform_hover_value ) && ! in_array( $hoverEffect, array( 'lift', 'scale' ), true );

if ( $has_background_hover || $has_box_shadow_hover || $has_hover_effect || $has_transform_hover ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $has_background_hover ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>

    <?php if ( $has_box_shadow_hover ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>

    <?php if ( 'lift' === $hoverEffect ) : ?>
        transform: translateY(-10px);
    <?php elseif ( 'scale' === $hoverEffect ) : ?>
        transform: scale(1.05);
    <?php elseif ( 'glow' === $hoverEffect ) : ?>
        filter: brightness(1.1);
    <?php endif; ?>

    <?php if ( $has_transform_hover ) : ?>
        transform: <?php echo esc_attr( $transform_hover_value ); ?>;
        transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

/* Layout styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-inner {
    display: flex;
    flex-direction: <?php echo 'inline' === $layoutStyle ? 'row' : 'column'; ?>;
    align-items: <?php echo 'inline' === $layoutStyle ? 'center' : ('left' === $align ? 'flex-start' : ('right' === $align ? 'flex-end' : 'center')); ?>;
    justify-content: <?php echo 'inline' === $layoutStyle ? 'flex-start' : 'center'; ?>;
    gap: <?php echo esc_attr( $verticalSpacing ); ?>px;
    <?php if ( 'centered' === $layoutStyle ) : ?>
        text-align: center;
    <?php endif; ?>
}

<?php if ( $displayIcon && $iconValue && isset( $iconValue['svg'] ) ) : ?>
/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
    <?php if ( $iconMargin && isset( $iconMargin['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'desktop' ) ); ?>
    <?php endif; ?>
    display: inline-flex;
    align-items: center;
    justify-content: center;
    <?php if ( $iconBackgroundColor ) : ?>
        background-color: <?php echo esc_attr( $iconBackgroundColor ); ?>;
    <?php endif; ?>
    <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && $iconBorderWidth && isset( $iconBorderWidth['desktop'] ) && $iconBorderRadius && isset( $iconBorderRadius['desktop'] ) ) : ?>
        border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
        border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php endif; ?>
    <?php if ( $iconPadding && isset( $iconPadding['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'desktop' ) ); ?>
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon span {
    display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon svg {
    width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    height: 100%;
    fill: <?php echo esc_attr( $iconColor ); ?>;
    transition: all 0.3s ease;
}

/* Icon hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-icon {
    <?php if ( $iconHoverBackgroundColor ) : ?>
        background-color: <?php echo esc_attr( $iconHoverBackgroundColor ); ?>;
    <?php endif; ?>
    <?php if ( $iconHoverBorderColor ) : ?>
        border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-icon svg {
    <?php if ( $iconHoverColor ) : ?>
        fill: <?php echo esc_attr( $iconHoverColor ); ?> !important;
        color: <?php echo esc_attr( $iconHoverColor ); ?> !important;
    <?php endif; ?>
}
<?php endif; ?>

/* Counter styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-number-wrapper {
    display: flex;
    align-items: center;
    justify-content: <?php echo 'left' === $align ? 'flex-start' : ('right' === $align ? 'flex-end' : 'center'); ?>;
    margin-bottom: 10px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-prefix {
    margin-right: <?php echo esc_attr( $counterPrefixSpacing ); ?>px;
    <?php if ( ! empty( $counterColor ) ) : ?>
    color: <?php echo esc_attr( $counterColor ); ?>;
    <?php endif; ?>
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
    
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-suffix {
    margin-left: <?php echo esc_attr( $counterSuffixSpacing ); ?>px;
    <?php if ( ! empty( $counterColor ) ) : ?>
    color: <?php echo esc_attr( $counterColor ); ?>;
    <?php endif; ?>
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
    
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-number {
    <?php if ( ! empty( $counterColor ) ) : ?>
    color: <?php echo esc_attr( $counterColor ); ?>;
    <?php endif; ?>
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
    
    transition: color 0.3s ease;
}

/* Counter hover styles */
<?php if ( $counterHoverColor ) : ?>
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-number,
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-prefix,
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-suffix {
    color: <?php echo esc_attr( $counterHoverColor ); ?>;
}
<?php endif; ?>

/* Title styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-title {
    <?php if ( ! empty( $titleColor ) ) : ?>
    color: <?php echo esc_attr( $titleColor ); ?>;
    <?php endif; ?>
    margin-bottom: 10px;
    
    <?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['desktop'] ) && isset( $titleTypography['fontSize']['desktop']['value'] ) && $titleTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop']['value'] . ( $titleTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $titleTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $titleTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $titleTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $titleTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['desktop'] ) && isset( $titleTypography['lineHeight']['desktop']['value'] ) && $titleTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop']['value'] . ( $titleTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['desktop'] ) && isset( $titleTypography['letterSpacing']['desktop']['value'] ) && $titleTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop']['value'] . ( $titleTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    transition: color 0.3s ease;
}

<?php if ( $titleHoverColor ) : ?>
/* Title hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-title {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}
<?php endif; ?>

/* Description styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-description {
    color: <?php echo esc_attr( $textColor ); ?>;
    
    <?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) && $contentTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop']['value'] . ( $contentTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $contentTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $contentTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $contentTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $contentTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['desktop'] ) && isset( $contentTypography['lineHeight']['desktop']['value'] ) && $contentTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop']['value'] . ( $contentTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) && $contentTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop']['value'] . ( $contentTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    transition: color 0.3s ease;
}

<?php if ( $textHoverColor ) : ?>
/* Description hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-description {
    color: <?php echo esc_attr( $textHoverColor ); ?>;
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet'] ) && isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
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
    
    <?php if ( $displayIcon && $iconValue && isset( $iconValue['svg'] ) ) : ?>
        <?php if ( isset( $iconSize['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon svg {
                width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
            }
        <?php endif; ?>
        
        <?php if ( $iconMargin && isset( $iconMargin['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'tablet' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconPadding && isset( $iconPadding['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'tablet' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['tablet'] ) && isset( $iconBorderRadius['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'tablet' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
            }
        <?php endif; ?>
    <?php endif; ?>
    
    <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['tablet'] )  || isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['tablet'] )  || isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['tablet'] ) && isset( $typography['letterSpacing']['tablet']['value'] ) && $typography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-number,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-prefix,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-suffix {
            <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['tablet'] ) && isset( $typography['fontSize']['tablet']['value'] ) && $typography['fontSize']['tablet']['value'] !== '' ) : ?>
                font-size: <?php echo esc_attr( $typography['fontSize']['tablet']['value'] . ( $typography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['tablet'] ) && isset( $typography['lineHeight']['tablet']['value'] ) && $typography['lineHeight']['tablet']['value'] !== '' ) : ?>
                line-height: <?php echo esc_attr( $typography['lineHeight']['tablet']['value'] . ( $typography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['tablet'] ) && isset( $typography['letterSpacing']['tablet']['value'] ) && $typography['letterSpacing']['tablet']['value'] !== '' ) : ?>
                letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet']['value'] . ( $typography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
    
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet'] )  || isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet'] )  || isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) && $titleTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-title {
            <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) && $titleTypography['fontSize']['tablet']['value'] !== '' ) : ?>
                font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet']['value'] . ( $titleTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet'] ) && isset( $titleTypography['lineHeight']['tablet']['value'] ) && $titleTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
                line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet']['value'] . ( $titleTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) && $titleTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
                letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet']['value'] . ( $titleTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet'] )  || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet'] )  || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) && $contentTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-description {
            <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) && $contentTypography['fontSize']['tablet']['value'] !== '' ) : ?>
                font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet']['value'] . ( $contentTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) && $contentTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
                line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet']['value'] . ( $contentTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) && $contentTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
                letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet']['value'] . ( $contentTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile'] ) && isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php endif; ?>
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
    
    <?php if ( $displayIcon && $iconValue && isset( $iconValue['svg'] ) ) : ?>
        <?php if ( isset( $iconSize['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon svg {
                width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
            }
        <?php endif; ?>
        
        <?php if ( $iconMargin && isset( $iconMargin['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'mobile' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconPadding && isset( $iconPadding['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'mobile' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['mobile'] ) && isset( $iconBorderRadius['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'mobile' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
            }
        <?php endif; ?>
    <?php endif; ?>
    
	<?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['mobile'] )  || isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['mobile'] )  || isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['mobile'] ) && isset( $typography['letterSpacing']['mobile']['value'] ) && $typography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-number,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-prefix,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-suffix {
            <?php if ( isset( $typography['fontSize'] ) && is_array( $typography['fontSize'] ) && isset( $typography['fontSize']['mobile'] ) && isset( $typography['fontSize']['mobile']['value'] ) && $typography['fontSize']['mobile']['value'] !== '' ) : ?>
                font-size: <?php echo esc_attr( $typography['fontSize']['mobile']['value'] . ( $typography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['lineHeight'] ) && is_array( $typography['lineHeight'] ) && isset( $typography['lineHeight']['mobile'] ) && isset( $typography['lineHeight']['mobile']['value'] ) && $typography['lineHeight']['mobile']['value'] !== '' ) : ?>
                line-height: <?php echo esc_attr( $typography['lineHeight']['mobile']['value'] . ( $typography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['letterSpacing'] ) && is_array( $typography['letterSpacing'] ) && isset( $typography['letterSpacing']['mobile'] ) && isset( $typography['letterSpacing']['mobile']['value'] ) && $typography['letterSpacing']['mobile']['value'] !== '' ) : ?>
                letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile']['value'] . ( $typography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
    
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile'] )  || isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile'] )  || isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) && $titleTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-title {
            <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) && $titleTypography['fontSize']['mobile']['value'] !== '' ) : ?>
                font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile']['value'] . ( $titleTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile'] ) && isset( $titleTypography['lineHeight']['mobile']['value'] ) && $titleTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
                line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile']['value'] . ( $titleTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) && $titleTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
                letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile']['value'] . ( $titleTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile'] )  || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile'] )  || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) && $contentTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-description {
            <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) && $contentTypography['fontSize']['mobile']['value'] !== '' ) : ?>
                font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile']['value'] . ( $contentTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) && $contentTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
                line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile']['value'] . ( $contentTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) && $contentTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
                letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile']['value'] . ( $contentTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
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