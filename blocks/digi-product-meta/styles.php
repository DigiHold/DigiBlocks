<?php
/**
 * DigiCommerce Product Meta Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                                = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-meta-' . uniqid();
$visibility                        = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$layout                            = isset( $attrs['layout'] ) ? $attrs['layout'] : 'vertical';
$alignment                         = isset( $attrs['alignment'] ) ? $attrs['alignment'] : [
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
];
$spacing                           = isset( $attrs['spacing'] ) ? $attrs['spacing'] : [
    'desktop' => 15,
    'tablet'  => 12,
    'mobile'  => 10,
];
$padding                           = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                            = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$labelTypography                   = isset( $attrs['labelTypography'] ) ? $attrs['labelTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'uppercase',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0.5, 'tablet' => 0.5, 'mobile' => 0.5],
    'letterSpacingUnit' => 'px',
];
$valueTypography                   = isset( $attrs['valueTypography'] ) ? $attrs['valueTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$labelColor                        = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '#666666';
$categoryColor                     = isset( $attrs['categoryColor'] ) ? $attrs['categoryColor'] : '#4a6cf7';
$categoryHoverColor                = isset( $attrs['categoryHoverColor'] ) ? $attrs['categoryHoverColor'] : '#3a5ce5';
$tagColor                          = isset( $attrs['tagColor'] ) ? $attrs['tagColor'] : '#52c41a';
$tagHoverColor                     = isset( $attrs['tagHoverColor'] ) ? $attrs['tagHoverColor'] : '#389e0d';
$categoryBackgroundColor           = isset( $attrs['categoryBackgroundColor'] ) ? $attrs['categoryBackgroundColor'] : 'rgba(74, 108, 247, 0.1)';
$categoryHoverBackgroundColor      = isset( $attrs['categoryHoverBackgroundColor'] ) ? $attrs['categoryHoverBackgroundColor'] : 'rgba(74, 108, 247, 0.2)';
$tagBackgroundColor                = isset( $attrs['tagBackgroundColor'] ) ? $attrs['tagBackgroundColor'] : 'rgba(82, 196, 26, 0.1)';
$tagHoverBackgroundColor           = isset( $attrs['tagHoverBackgroundColor'] ) ? $attrs['tagHoverBackgroundColor'] : 'rgba(82, 196, 26, 0.2)';
$borderRadius                      = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];

// CSS Output
ob_start();
?>
/* DigiCommerce Product Meta Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-meta-container {
    display: flex;
    flex-direction: <?php echo $layout === 'horizontal' ? 'row' : 'column'; ?>;
    gap: <?php echo esc_attr( $spacing['desktop'] ); ?>px;
    <?php if ( $layout === 'horizontal' ) : ?>
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: <?php echo esc_attr( $alignment['desktop'] ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item {
    display: flex;
    align-items: center;
    justify-content: <?php echo esc_attr( $alignment['desktop'] ); ?>;
    gap: 8px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-label {
    color: <?php echo esc_attr( $labelColor ); ?>;
    <?php if ( ! empty( $labelTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $labelTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $labelTypography['fontSize']['desktop'] . ( $labelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $labelTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $labelTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $labelTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $labelTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $labelTypography['lineHeight']['desktop'] . ( $labelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $labelTypography['letterSpacing']['desktop'] . ( $labelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    margin: 0;
    flex-shrink: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-value {
    <?php if ( ! empty( $valueTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $valueTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $valueTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $valueTypography['fontSize']['desktop'] . ( $valueTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $valueTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $valueTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $valueTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $valueTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $valueTypography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $valueTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $valueTypography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $valueTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $valueTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $valueTypography['lineHeight']['desktop'] . ( $valueTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $valueTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $valueTypography['letterSpacing']['desktop'] . ( $valueTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-category-link,
.<?php echo esc_attr( $id ); ?> .digiblocks-tag-link {
    text-decoration: none;
    padding: 4px 8px;
    <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    transition: all 0.3s ease;
    display: inline-block;
    font-size: 0.9em;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-category-link {
    color: <?php echo esc_attr( $categoryColor ); ?>;
    background-color: <?php echo esc_attr( $categoryBackgroundColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-category-link:hover {
    color: <?php echo esc_attr( $categoryHoverColor ); ?>;
    background-color: <?php echo esc_attr( $categoryHoverBackgroundColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-tag-link {
    color: <?php echo esc_attr( $tagColor ); ?>;
    background-color: <?php echo esc_attr( $tagBackgroundColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-tag-link:hover {
    color: <?php echo esc_attr( $tagHoverColor ); ?>;
    background-color: <?php echo esc_attr( $tagHoverBackgroundColor ); ?>;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-meta-container {
        gap: <?php echo esc_attr( $spacing['tablet'] ); ?>px;
        <?php if ( $layout === 'horizontal' ) : ?>
        justify-content: <?php echo esc_attr( $alignment['tablet'] ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item {
        justify-content: <?php echo esc_attr( $alignment['tablet'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-label {
        <?php if ( ! empty( $labelTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $labelTypography['fontSize']['tablet'] . ( $labelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $labelTypography['lineHeight']['tablet'] . ( $labelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $labelTypography['letterSpacing']['tablet'] . ( $labelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-value {
        <?php if ( ! empty( $valueTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $valueTypography['fontSize']['tablet'] . ( $valueTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $valueTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $valueTypography['lineHeight']['tablet'] . ( $valueTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $valueTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $valueTypography['letterSpacing']['tablet'] . ( $valueTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-category-link,
    .<?php echo esc_attr( $id ); ?> .digiblocks-tag-link {
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-meta-container {
        gap: <?php echo esc_attr( $spacing['mobile'] ); ?>px;
        <?php if ( $layout === 'horizontal' ) : ?>
        flex-direction: column;
        justify-content: <?php echo esc_attr( $alignment['mobile'] ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item {
        justify-content: <?php echo esc_attr( $alignment['mobile'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-label {
        <?php if ( ! empty( $labelTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $labelTypography['fontSize']['mobile'] . ( $labelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $labelTypography['lineHeight']['mobile'] . ( $labelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $labelTypography['letterSpacing']['mobile'] . ( $labelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-value {
        <?php if ( ! empty( $valueTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $valueTypography['fontSize']['mobile'] . ( $valueTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $valueTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $valueTypography['lineHeight']['mobile'] . ( $valueTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $valueTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $valueTypography['letterSpacing']['mobile'] . ( $valueTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-category-link,
    .<?php echo esc_attr( $id ); ?> .digiblocks-tag-link {
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
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