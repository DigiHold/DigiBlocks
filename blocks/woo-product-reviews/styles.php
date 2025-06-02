<?php
/**
 * Product Reviews Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                   = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-reviews-' . uniqid();
$visibility           = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$alignment            = isset( $attrs['alignment'] ) ? $attrs['alignment'] : [
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
];
$starsColor           = isset( $attrs['starsColor'] ) ? $attrs['starsColor'] : '#ffa500';
$starsEmptyColor      = isset( $attrs['starsEmptyColor'] ) ? $attrs['starsEmptyColor'] : '#e0e0e0';
$countColor           = isset( $attrs['countColor'] ) ? $attrs['countColor'] : '#666666';
$countHoverColor      = isset( $attrs['countHoverColor'] ) ? $attrs['countHoverColor'] : '#333333';
$textColor            = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$textHoverColor       = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '#333333';
$starsSize            = isset( $attrs['starsSize'] ) ? $attrs['starsSize'] : [
    'desktop' => 20,
    'tablet'  => 18,
    'mobile'  => 16,
];
$spacing              = isset( $attrs['spacing'] ) ? $attrs['spacing'] : [
    'desktop' => 8,
    'tablet'  => 6,
    'mobile'  => 4,
];
$padding              = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin               = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$countTypography      = isset( $attrs['countTypography'] ) ? $attrs['countTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$textTypography       = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];

// CSS Output
ob_start();
?>
/* Product Reviews Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews {
    display: flex;
    align-items: center;
    gap: <?php echo esc_attr( $spacing['desktop'] ); ?>px;
    justify-content: <?php echo esc_attr( $alignment['desktop'] ); ?>;
    flex-wrap: wrap;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-stars {
    display: flex;
    align-items: center;
    gap: 3px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-stars .star-rating {
    position: relative;
    height: 1em;
    line-height: 1;
    font-size: <?php echo esc_attr( $starsSize['desktop'] ); ?>px;
    width: 5.4em;
    font-family: Arial, sans-serif !important;
    float: none;
    overflow: hidden;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-stars .star-rating::before {
    content: "★★★★★";
    color: <?php echo esc_attr( $starsEmptyColor ); ?>;
    position: absolute;
    top: 0;
    left: 0;
    font-family: Arial, sans-serif;
    letter-spacing: 0.1em;
    float: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-stars .star-rating span {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    float: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-stars .star-rating span::before {
    content: "★★★★★";
    color: <?php echo esc_attr( $starsColor ); ?>;
    position: absolute;
    top: 0;
    left: 0;
    font-family: Arial, sans-serif;
    letter-spacing: 0.1em;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-count {
    color: <?php echo esc_attr( $countColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
    <?php if ( ! empty( $countTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $countTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $countTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $countTypography['fontSize']['desktop'] . ( $countTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $countTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $countTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $countTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $countTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $countTypography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $countTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $countTypography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $countTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $countTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $countTypography['lineHeight']['desktop'] . ( $countTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $countTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $countTypography['letterSpacing']['desktop'] . ( $countTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

<?php if ( ! empty( $countHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-count:hover {
    color: <?php echo esc_attr( $countHoverColor ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-text {
    color: <?php echo esc_attr( $textColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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
    <?php if ( ! empty( $textTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

<?php if ( ! empty( $textHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-text:hover {
    color: <?php echo esc_attr( $textHoverColor ); ?>;
}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews {
        gap: <?php echo esc_attr( $spacing['tablet'] ); ?>px;
        justify-content: <?php echo esc_attr( $alignment['tablet'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-stars .star-rating {
        font-size: <?php echo esc_attr( $starsSize['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-count {
        <?php if ( ! empty( $countTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $countTypography['fontSize']['tablet'] . ( $countTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $countTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $countTypography['lineHeight']['tablet'] . ( $countTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $countTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $countTypography['letterSpacing']['tablet'] . ( $countTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-text {
        <?php if ( ! empty( $textTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews {
        gap: <?php echo esc_attr( $spacing['mobile'] ); ?>px;
        justify-content: <?php echo esc_attr( $alignment['mobile'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-stars .star-rating {
        font-size: <?php echo esc_attr( $starsSize['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-count {
        <?php if ( ! empty( $countTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $countTypography['fontSize']['mobile'] . ( $countTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $countTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $countTypography['lineHeight']['mobile'] . ( $countTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $countTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $countTypography['letterSpacing']['mobile'] . ( $countTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-reviews-text {
        <?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
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