<?php
/**
 * Accordion Block Styles
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
$items                  = isset( $attrs['items'] ) ? $attrs['items'] : array();
$titleColor             = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '';
$titleHoverColor        = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$titleActiveColor       = isset( $attrs['titleActiveColor'] ) ? $attrs['titleActiveColor'] : '#1e73be';
$backgroundColor        = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$backgroundHoverColor   = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$backgroundActiveColor  = isset( $attrs['backgroundActiveColor'] ) ? $attrs['backgroundActiveColor'] : '#f7f7f7';
$contentColor           = isset( $attrs['contentColor'] ) ? $attrs['contentColor'] : '#666666';
$contentHoverColor      = isset( $attrs['contentHoverColor'] ) ? $attrs['contentHoverColor'] : '';
$borderColor            = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor       = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$iconPosition           = isset( $attrs['iconPosition'] ) ? $attrs['iconPosition'] : 'right';
$iconColor              = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '';
$iconHoverColor         = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconActiveColor        = isset( $attrs['iconActiveColor'] ) ? $attrs['iconActiveColor'] : '#1e73be';
$allowMultipleOpen      = isset( $attrs['allowMultipleOpen'] ) ? $attrs['allowMultipleOpen'] : false;
$iconType               = isset( $attrs['iconType'] ) ? $attrs['iconType'] : 'plusMinus';

// Get borderWidth (with responsive fallback)
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

// Get borderRadius (with responsive fallback)
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

// Get borderStyle (with fallback)
$borderStyle = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';

// Get box shadow
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

// Get iconSize (with fallback)
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 16,
    'tablet'  => '',
    'mobile'  => '',
);

// Get padding (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 20,
        'right'  => 20,
        'bottom' => 20,
        'left'   => 20,
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

// Get margin (with fallback)
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
    'desktop' => array(
        'top'    => 0,
        'right'  => 0,
        'bottom' => 30,
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

// Get typography settings with default values
$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
    'fontFamily'        => '',
    'fontSize' => array(
		'desktop' => array('value' => 18, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
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
/* Accordion Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    width: 100%;
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

/* Accordion item */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item {
    overflow: hidden;
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	<?php if ( 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php endif; ?>
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
    transition: all 0.3s ease;
}

<?php if ( !empty( $backgroundHoverColor ) ) : ?>
	/* Accordion item hover state */
	.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover {
		background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	}
<?php endif; ?>

<?php if ( !empty( $borderHoverColor ) ) : ?>
	/* Border hover color */
	.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover {
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	}
<?php endif; ?>

<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
	/* Box shadow hover color */
	.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover {
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	}
<?php endif; ?>

/* Accordion header */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header {
    position: relative;
    cursor: pointer;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	display: flex;
    align-items: center;
    justify-content: space-between;
	gap: .75rem;
<?php if ( 'left' === $iconPosition ) : ?>
    flex-direction: row-reverse;
    justify-content: flex-end;
<?php endif; ?>
    transition: background-color 0.3s ease;
}

/* Accordion title */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-title {
    margin: 0;
	<?php if ( ! empty( $titleColor ) ) : ?>
    	color: <?php echo esc_attr( $titleColor ); ?>;
	<?php endif; ?>
    flex: 1;
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

<?php if ( !empty( $titleHoverColor ) ) : ?>
/* Title hover state */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header:hover .digiblocks-accordion-title {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}
<?php endif; ?>

/* Accordion title active state */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
    color: <?php echo esc_attr( $titleActiveColor ); ?>;
}

/* Accordion icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* SVG icon fill color */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon svg {
    fill: <?php echo esc_attr( $iconColor ); ?>;
    width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    transition: all 0.3s ease;
}

<?php if ( !empty( $iconHoverColor ) ) : ?>
/* Icon hover state */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
    fill: <?php echo esc_attr( $iconHoverColor ); ?>;
}
<?php endif; ?>

/* Active icon color */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
    fill: <?php echo esc_attr( $iconActiveColor ); ?>;
}

/* Active header background */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
    background-color: <?php echo esc_attr( $backgroundActiveColor ); ?>;
}

/* Accordion content */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
    overflow: hidden;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
<?php if ( ! empty( $contentColor ) ) : ?>
	color: <?php echo esc_attr( $contentColor ); ?>;
<?php endif; ?>
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

<?php if ( !empty( $contentHoverColor ) ) : ?>
/* Content hover color */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover .digiblocks-accordion-content {
    color: <?php echo esc_attr( $contentHoverColor ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content p:first-child {
    margin-top: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content p:last-child {
    margin-bottom: 0;
}

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
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
    
	<?php if ( $padding && isset($padding['tablet']) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		}
	<?php endif; ?>
    
	<?php if ( isset($borderWidth['tablet']) && isset($borderRadius['tablet']) && 'none' !== $borderStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item {
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
		}
	<?php endif; ?>
    
	<?php if ( isset($iconSize['tablet']) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon svg {
			width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
			height: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
		}
	<?php endif; ?>
    
	<?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) || isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet']['value'] ) || isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-title {
		<?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) ) : ?>
			font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet']['value'] . ( $titleTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet']['value'] ) ) : ?>
			line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet']['value'] . ( $titleTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet']['value'] . ( $titleTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		}
	<?php endif; ?>
		
	<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
		<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) ) : ?>
			font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet']['value'] . ( $contentTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) ) : ?>
			line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet']['value'] . ( $contentTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet']['value'] . ( $contentTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
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
		
	<?php if ( $padding && isset($padding['mobile']) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( isset($borderWidth['mobile']) && isset($borderRadius['mobile']) && 'none' !== $borderStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item {
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( isset($iconSize['mobile']) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon svg {
			width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
			height: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
		}
	<?php endif; ?>
		
	<?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) || isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile']['value'] ) || isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-title {
		<?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) ) : ?>
			font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile']['value'] . ( $titleTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile']['value'] ) ) : ?>
			line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile']['value'] . ( $titleTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile']['value'] . ( $titleTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		}
	<?php endif; ?>
		
	<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
		<?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) ) : ?>
			font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile']['value'] . ( $contentTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) ) : ?>
			line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile']['value'] . ( $contentTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		<?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) ) : ?>
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