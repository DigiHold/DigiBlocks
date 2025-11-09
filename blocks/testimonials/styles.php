<?php
/**
 * Testimonials Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id                   = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility           = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
$columns              = isset( $attrs['columns'] ) ? $attrs['columns'] : array(
    'desktop' => 2,
    'tablet'  => 2,
    'mobile'  => 1,
);
$align                = isset( $attrs['align'] ) ? $attrs['align'] : 'left';
$nameColor            = isset( $attrs['nameColor'] ) ? $attrs['nameColor'] : '#333333';
$nameHoverColor       = isset( $attrs['nameHoverColor'] ) ? $attrs['nameHoverColor'] : '';
$positionColor        = isset( $attrs['positionColor'] ) ? $attrs['positionColor'] : '#666666';
$contentColor         = isset( $attrs['contentColor'] ) ? $attrs['contentColor'] : '#444444';
$backgroundColor      = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$backgroundHoverColor = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$quoteIconColor       = isset( $attrs['quoteIconColor'] ) ? $attrs['quoteIconColor'] : '#e0e0e0';
$ratingColor          = isset( $attrs['ratingColor'] ) ? $attrs['ratingColor'] : '#ffc107';
$borderStyle          = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor          = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$imageSize            = isset( $attrs['imageSize'] ) ? $attrs['imageSize'] : array(
    'desktop' => 64,
    'tablet'  => '',
    'mobile'  => '',
);
$quoteIconSize        = isset( $attrs['quoteIconSize'] ) ? $attrs['quoteIconSize'] : array(
    'desktop' => 80,
    'tablet'  => '',
    'mobile'  => '',
);
$showRating           = isset( $attrs['showRating'] ) ? $attrs['showRating'] : true;
$showQuoteIcon        = isset( $attrs['showQuoteIcon'] ) ? $attrs['showQuoteIcon'] : true;
$animation            = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';

$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.12)',
    'horizontal' => 0,
    'vertical'   => 5,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 10,
    'blur'       => 20,
    'spread'     => 0,
    'position'   => 'outset',
);

// Get padding (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 40,
        'right'  => 40,
        'bottom' => 40,
        'left'   => 40,
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
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

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
        'top'    => 12,
        'right'  => 12,
        'bottom' => 12,
        'left'   => 12,
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
$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
    'fontFamily'        => '',
    'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    'fontWeight'        => '',
    'fontStyle'         => 'italic',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight' => array(
		'desktop' => array('value' => 1.7, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
    'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);

$headingTypography = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : array(
    'fontFamily'        => '',
    'fontSize' => array(
		'desktop' => array('value' => 20, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight' => array(
		'desktop' => array('value' => 1.3, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
    'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);

$textTypography = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
    'fontFamily'        => '',
    'fontSize' => array(
		'desktop' => array('value' => 14, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight' => array(
		'desktop' => array('value' => 1.4, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
    'letterSpacing' => array(
		'desktop' => array('value' => 0.5, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);

// CSS Output
ob_start();
?>
/* Testimonials Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    position: relative;
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

/* Basic testimonial styling */
.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    
    <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php else : ?>
        border: none;
    <?php endif; ?>

    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>

    position: relative;
    transition: all 0.3s ease;
	text-align: <?php echo esc_attr( $align ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content:hover {
    <?php if ( $backgroundHoverColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
}

<?php if ( $showQuoteIcon ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon {
        position: absolute;
        top: 6px;
        left: 10px;
        color: <?php echo esc_attr( $quoteIconColor ); ?>;
        opacity: 0.3;
        line-height: 1;
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon svg {
		width: <?php echo esc_attr( $quoteIconSize['desktop'] ); ?>px;
		height: <?php echo esc_attr( $quoteIconSize['desktop'] ); ?>px;
	}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-text {
    color: <?php echo esc_attr( $contentColor ); ?>;
    margin: 0;
    
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
	position: relative;
	z-index: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
	justify-content: <?php echo 'center' === $align ? 'center' : 'flex-start'; ?>;
	<?php if ( 'center' === $align ) : ?>
		flex-direction: column;
	<?php elseif ( 'right' === $align ) : ?>
		flex-direction: row-reverse;
	<?php endif; ?>
	position: relative;
	z-index: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-image {
    width: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
    border-radius: 50%;
    object-fit: cover;
    background: <?php echo esc_attr( $quoteIconColor ); ?>;
    flex-shrink: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-name {
    color: <?php echo esc_attr( $nameColor ); ?>;
    margin: 0;
    transition: color 0.3s ease;
    
    <?php if ( ! empty( $headingTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $headingTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $headingTypography['fontSize'] ) && is_array( $headingTypography['fontSize'] ) && isset( $headingTypography['fontSize']['desktop'] ) && isset( $headingTypography['fontSize']['desktop']['value'] ) && $headingTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $headingTypography['fontSize']['desktop']['value'] . ( $headingTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $headingTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $headingTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $headingTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $headingTypography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( isset( $headingTypography['lineHeight'] ) && is_array( $headingTypography['lineHeight'] ) && isset( $headingTypography['lineHeight']['desktop'] ) && isset( $headingTypography['lineHeight']['desktop']['value'] ) && $headingTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $headingTypography['lineHeight']['desktop']['value'] . ( $headingTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $headingTypography['letterSpacing'] ) && is_array( $headingTypography['letterSpacing'] ) && isset( $headingTypography['letterSpacing']['desktop'] ) && isset( $headingTypography['letterSpacing']['desktop']['value'] ) && $headingTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['desktop']['value'] . ( $headingTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
}

<?php if ( $nameHoverColor ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content:hover .digiblocks-testimonial-name {
        color: <?php echo esc_attr( $nameHoverColor ); ?>;
    }
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-position {
    color: <?php echo esc_attr( $positionColor ); ?>;
    margin: 5px 0 0 0;
    
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) && $textTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop']['value'] . ( $textTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $textTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $textTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $textTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $textTypography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['desktop'] ) && isset( $textTypography['lineHeight']['desktop']['value'] ) && $textTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop']['value'] . ( $textTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['desktop'] ) && isset( $textTypography['letterSpacing']['desktop']['value'] ) && $textTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop']['value'] . ( $textTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
}

<?php if ( $showRating ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-rating {
        display: flex;
		align-items: center;
		gap: 2px;
		justify-content: <?php echo 'center' === $align ? 'center' : ( 'right' === $align ? 'flex-end' : 'flex-start' ); ?>;
		position: relative;
		z-index: 1;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-rating-star {
        font-size: 16px;
    }
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonials-grid {
	display: grid;
	grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
	gap: <?php echo esc_attr( isset( $attrs['itemSpacing'] ) ? ( isset( $attrs['itemSpacing'] ) && is_array( $attrs['itemSpacing'] ) && isset( $attrs['itemSpacing']['desktop'] ) ? $attrs['itemSpacing']['desktop'] : '' ) : 30 ); ?>px;
}

/* Tablet Styles */
@media (max-width: 991px) {
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

    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content {
        <?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet']) && isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
    }

    <?php if ( $showQuoteIcon && isset( $quoteIconSize['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon svg {
            width: <?php echo esc_attr( $quoteIconSize['tablet'] ); ?>px;
            height: <?php echo esc_attr( $quoteIconSize['tablet'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( $showRating && isset( $attrs['ratingColor'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-rating-star {
            color: <?php echo esc_attr( $ratingColor ); ?>;
        }
    <?php endif; ?>

    <?php if ( isset( $imageSize['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-image {
            width: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
            height: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-text {
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

    <?php if ( isset( $headingTypography['fontSize'] ) && is_array( $headingTypography['fontSize'] ) && isset( $headingTypography['fontSize']['tablet']['value'] ) || isset( $headingTypography['lineHeight'] ) && is_array( $headingTypography['lineHeight'] ) && isset( $headingTypography['lineHeight']['tablet']['value'] ) || isset( $headingTypography['letterSpacing'] ) && is_array( $headingTypography['letterSpacing'] ) && isset( $headingTypography['letterSpacing']['tablet']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-name {
            <?php if ( isset( $headingTypography['fontSize'] ) && is_array( $headingTypography['fontSize'] ) && isset( $headingTypography['fontSize']['tablet']['value'] ) ) : ?>
                font-size: <?php echo esc_attr( $headingTypography['fontSize']['tablet']['value'] . ( $headingTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['lineHeight'] ) && is_array( $headingTypography['lineHeight'] ) && isset( $headingTypography['lineHeight']['tablet']['value'] ) ) : ?>
                line-height: <?php echo esc_attr( $headingTypography['lineHeight']['tablet']['value'] . ( $headingTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['letterSpacing'] ) && is_array( $headingTypography['letterSpacing'] ) && isset( $headingTypography['letterSpacing']['tablet']['value'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['tablet']['value'] . ( $headingTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) || isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['tablet']['value'] ) || isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['tablet']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-position {
            <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) ) : ?>
                font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet']['value'] . ( $textTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['tablet']['value'] ) ) : ?>
                line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet']['value'] . ( $textTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['tablet']['value'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet']['value'] . ( $textTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

	.<?php echo esc_attr( $id ); ?> .digiblocks-testimonials-grid {
		grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
		gap: <?php echo esc_attr( isset( $attrs['itemSpacing'] ) ? ( isset( $attrs['itemSpacing'] ) && is_array( $attrs['itemSpacing'] ) && isset( $attrs['itemSpacing']['tablet'] ) ? $attrs['itemSpacing']['tablet'] : '' ) : 25 ); ?>px;
	}
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

    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content {
        <?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile']) && isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
    }

    <?php if ( $showQuoteIcon && isset( $quoteIconSize['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon svg {
            width: <?php echo esc_attr( $quoteIconSize['mobile'] ); ?>px;
            height: <?php echo esc_attr( $quoteIconSize['mobile'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( isset( $imageSize['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-image {
            width: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
            height: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) || isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) || isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-text {
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

    <?php if ( isset( $headingTypography['fontSize'] ) && is_array( $headingTypography['fontSize'] ) && isset( $headingTypography['fontSize']['mobile']['value'] ) || isset( $headingTypography['lineHeight'] ) && is_array( $headingTypography['lineHeight'] ) && isset( $headingTypography['lineHeight']['mobile']['value'] ) || isset( $headingTypography['letterSpacing'] ) && is_array( $headingTypography['letterSpacing'] ) && isset( $headingTypography['letterSpacing']['mobile']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-name {
            <?php if ( isset( $headingTypography['fontSize'] ) && is_array( $headingTypography['fontSize'] ) && isset( $headingTypography['fontSize']['mobile']['value'] ) ) : ?>
                font-size: <?php echo esc_attr( $headingTypography['fontSize']['mobile']['value'] . ( $headingTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['lineHeight'] ) && is_array( $headingTypography['lineHeight'] ) && isset( $headingTypography['lineHeight']['mobile']['value'] ) ) : ?>
                line-height: <?php echo esc_attr( $headingTypography['lineHeight']['mobile']['value'] . ( $headingTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['letterSpacing'] ) && is_array( $headingTypography['letterSpacing'] ) && isset( $headingTypography['letterSpacing']['mobile']['value'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['mobile']['value'] . ( $headingTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) || isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['mobile']['value'] ) || isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['mobile']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-position {
            <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) ) : ?>
                font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile']['value'] . ( $textTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['mobile']['value'] ) ) : ?>
                line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile']['value'] . ( $textTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['mobile']['value'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile']['value'] . ( $textTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

	.<?php echo esc_attr( $id ); ?> .digiblocks-testimonials-grid {
		grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
		gap: <?php echo esc_attr( isset( $attrs['itemSpacing'] ) ? ( isset( $attrs['itemSpacing'] ) && is_array( $attrs['itemSpacing'] ) && isset( $attrs['itemSpacing']['mobile'] ) ? $attrs['itemSpacing']['mobile'] : '' ) : 20 ); ?>px;
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