<?php
/**
 * Page Title Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-page-title-' . uniqid();
$visibility        = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$headingTag        = isset( $attrs['headingTag'] ) ? $attrs['headingTag'] : 'h1';
$align             = isset( $attrs['align'] ) ? $attrs['align'] : array(
	'desktop' => 'left',
	'tablet'  => 'left',
	'mobile'  => 'left',
);
$color             = isset( $attrs['color'] ) ? $attrs['color'] : '#333333';
$hoverColor        = isset( $attrs['hoverColor'] ) ? $attrs['hoverColor'] : '';
$typography        = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 32,
        'tablet'  => 28,
        'mobile'  => 24,
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '700',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array(
        'desktop' => 1.2,
        'tablet'  => 1.2,
        'mobile'  => 1.2,
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => 0,
        'tablet'  => 0,
        'mobile'  => 0,
    ),
    'letterSpacingUnit' => 'px',
);
$padding           = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 0,
        'right'  => 0,
        'bottom' => 15,
        'left'   => 0,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 0,
        'right'  => 0,
        'bottom' => 12,
        'left'   => 0,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 0,
        'right'  => 0,
        'bottom' => 10,
        'left'   => 0,
        'unit'   => 'px',
    ),
);
$margin            = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
    'desktop' => array(
        'top'    => 0,
        'right'  => 0,
        'bottom' => 0,
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

// Get alignment for each device
$desktop_align = isset($align['desktop']) ? $align['desktop'] : 'left';
$tablet_align = isset($align['tablet']) ? $align['tablet'] : $desktop_align;
$mobile_align = isset($align['mobile']) ? $align['mobile'] : $tablet_align;

// CSS Output
ob_start();
?>
/* Page Title Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    color: <?php echo esc_attr( $color ); ?>;
    text-align: <?php echo esc_attr( $desktop_align ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    transition: color 0.3s ease;
    
    /* Typography */
    <?php if ( ! empty( $typography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $typography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
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

    <?php if ( ! empty( $typography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $typography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

<?php if ( $hoverColor ) : ?>
.<?php echo esc_attr( $id ); ?>:hover {
    color: <?php echo esc_attr( $hoverColor ); ?>;
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		text-align: <?php echo esc_attr( $tablet_align ); ?>;
        <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		text-align: <?php echo esc_attr( $mobile_align ); ?>;
        <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
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