<?php
/**
 * WooCommerce Products Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                              = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-woo-products-' . uniqid();
$columns                         = isset( $attrs['columns'] ) ? $attrs['columns'] : [
    'desktop' => 4,
    'tablet'  => 2,
    'mobile'  => 1,
];
$titleColor                      = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
$titleHoverColor                 = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$priceColor                      = isset( $attrs['priceColor'] ) ? $attrs['priceColor'] : '#4a6cf7';
$saleColor                       = isset( $attrs['saleColor'] ) ? $attrs['saleColor'] : '#ff5252';
$regularPriceColor               = isset( $attrs['regularPriceColor'] ) ? $attrs['regularPriceColor'] : '#999999';
$ratingColor                     = isset( $attrs['ratingColor'] ) ? $attrs['ratingColor'] : '#ffc107';
$catBackgroundColor              = isset( $attrs['catBackgroundColor'] ) ? $attrs['catBackgroundColor'] : '#52576b';
$catColor                        = isset( $attrs['catColor'] ) ? $attrs['catColor'] : '#fff';
$catHoverBackgroundColor         = isset( $attrs['catHoverBackgroundColor'] ) ? $attrs['catHoverBackgroundColor'] : '#3f4a73';
$catHoverColor                   = isset( $attrs['catHoverColor'] ) ? $attrs['catHoverColor'] : '#fff';
$saleBadgeBackgroundColor        = isset( $attrs['saleBadgeBackgroundColor'] ) ? $attrs['saleBadgeBackgroundColor'] : '#ff5252';
$saleBadgeColor                  = isset( $attrs['saleBadgeColor'] ) ? $attrs['saleBadgeColor'] : '#ffffff';
$descriptionColor                = isset( $attrs['descriptionColor'] ) ? $attrs['descriptionColor'] : '#666666';
$buttonBackgroundColor           = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextColor                 = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBackgroundHoverColor      = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3a5ce5';
$buttonTextHoverColor            = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$imageMargin                     = isset( $attrs['imageMargin'] ) ? $attrs['imageMargin'] : [
    'desktop' => 15,
    'tablet'  => 15,
    'mobile'  => 15,
];
$contentMargin                   = isset( $attrs['contentMargin'] ) ? $attrs['contentMargin'] : [
    'desktop' => 14,
    'tablet'  => 12,
    'mobile'  => 12,
];
$padding                         = isset( $attrs['padding'] ) ? $attrs['padding'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
];
$margin                          = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 30, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 25, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 20, 'left' => 0, 'unit' => 'px'],
];
$itemSpacing                     = isset( $attrs['itemSpacing'] ) ? $attrs['itemSpacing'] : [
    'desktop' => 20,
    'tablet'  => 15,
    'mobile'  => 10,
];
$titleTypography                 = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 20, 'tablet' => 18, 'mobile' => 16],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$headingTypography                 = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 18, 'tablet' => 16, 'mobile' => 15],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '700',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$contentTypography               = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
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
$textTypography                  = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : [
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
$buttonTypography                = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '500',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$buttonPadding                   = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => ['top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px'],
    'tablet'  => ['top' => 8, 'right' => 16, 'bottom' => 8, 'left' => 16, 'unit' => 'px'],
    'mobile'  => ['top' => 6, 'right' => 12, 'bottom' => 6, 'left' => 12, 'unit' => 'px'],
];
$buttonBorderRadius              = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'mobile'  => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
];
$imageBorderRadius               = isset( $attrs['imageBorderRadius'] ) ? $attrs['imageBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
];
$cardStyle                       = isset( $attrs['cardStyle'] ) ? $attrs['cardStyle'] : false;
$cardBackgroundColor             = isset( $attrs['cardBackgroundColor'] ) ? $attrs['cardBackgroundColor'] : '#ffffff';
$cardPadding                     = isset( $attrs['cardPadding'] ) ? $attrs['cardPadding'] : [
    'desktop' => ['top' => 20, 'right' => 20, 'bottom' => 20, 'left' => 20, 'unit' => 'px'],
    'tablet'  => ['top' => 15, 'right' => 15, 'bottom' => 15, 'left' => 15, 'unit' => 'px'],
    'mobile'  => ['top' => 10, 'right' => 10, 'bottom' => 10, 'left' => 10, 'unit' => 'px'],
];
$cardBorderRadius                = isset( $attrs['cardBorderRadius'] ) ? $attrs['cardBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
];
$cardBorderStyle                 = isset( $attrs['cardBorderStyle'] ) ? $attrs['cardBorderStyle'] : 'solid';
$cardBorderWidth                 = isset( $attrs['cardBorderWidth'] ) ? $attrs['cardBorderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'mobile'  => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
];
$cardBorderColor                 = isset( $attrs['cardBorderColor'] ) ? $attrs['cardBorderColor'] : '#e0e0e0';
$cardShadow                      = isset( $attrs['cardShadow'] ) ? $attrs['cardShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$cardShadowHover                 = isset( $attrs['cardShadowHover'] ) ? $attrs['cardShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$paginationAlign                 = isset( $attrs['paginationAlign'] ) ? $attrs['paginationAlign'] : 'center';
$paginationBackgroundColor       = isset( $attrs['paginationBackgroundColor'] ) ? $attrs['paginationBackgroundColor'] : '#f8f9fa';
$paginationTextColor             = isset( $attrs['paginationTextColor'] ) ? $attrs['paginationTextColor'] : '#333333';
$paginationActiveBackgroundColor = isset( $attrs['paginationActiveBackgroundColor'] ) ? $attrs['paginationActiveBackgroundColor'] : '#4a6cf7';
$paginationActiveTextColor       = isset( $attrs['paginationActiveTextColor'] ) ? $attrs['paginationActiveTextColor'] : '#ffffff';

// CSS Output
ob_start();
?>
/* WooCommerce Products Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
    padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
    width: 100%;
}

/* Grid layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-products-container {
    display: grid;
    grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
    gap: <?php echo esc_attr( $itemSpacing['desktop'] ); ?>px;
}

/* Product item */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-item {
    display: flex;
    flex-direction: column;
    gap: <?php echo esc_attr( $imageMargin['desktop'] ); ?>px;
    position: relative;
    <?php if ( $cardStyle ) : ?>
    background-color: <?php echo esc_attr( $cardBackgroundColor ); ?>;
    padding: <?php echo esc_attr( $cardPadding['desktop']['top'] . $cardPadding['desktop']['unit'] . ' ' . $cardPadding['desktop']['right'] . $cardPadding['desktop']['unit'] . ' ' . $cardPadding['desktop']['bottom'] . $cardPadding['desktop']['unit'] . ' ' . $cardPadding['desktop']['left'] . $cardPadding['desktop']['unit'] ); ?>;
    border-radius: <?php echo esc_attr( $cardBorderRadius['desktop']['top'] . $cardBorderRadius['desktop']['unit'] . ' ' . $cardBorderRadius['desktop']['right'] . $cardBorderRadius['desktop']['unit'] . ' ' . $cardBorderRadius['desktop']['bottom'] . $cardBorderRadius['desktop']['unit'] . ' ' . $cardBorderRadius['desktop']['left'] . $cardBorderRadius['desktop']['unit'] ); ?>;
    
    <?php if ( $cardBorderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $cardBorderStyle ); ?>;
    border-color: <?php echo esc_attr( $cardBorderColor ); ?>;
    border-width: <?php echo esc_attr( $cardBorderWidth['desktop']['top'] . $cardBorderWidth['desktop']['unit'] . ' ' . $cardBorderWidth['desktop']['right'] . $cardBorderWidth['desktop']['unit'] . ' ' . $cardBorderWidth['desktop']['bottom'] . $cardBorderWidth['desktop']['unit'] . ' ' . $cardBorderWidth['desktop']['left'] . $cardBorderWidth['desktop']['unit'] ); ?>;
    <?php endif; ?>
    
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $cardShadow ) ); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-item:hover {
    <?php if ( $cardStyle && $cardShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $cardShadowHover ) ); ?>;
    transform: translateY(-5px);
    <?php endif; ?>
}

/* Sale badge */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-sale-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    background-color: <?php echo esc_attr( $saleBadgeBackgroundColor ); ?>;
    color: <?php echo esc_attr( $saleBadgeColor ); ?>;
    padding: 4px 10px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}

/* Featured image */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-image {
    width: 100%;
    overflow: hidden;
    border-radius: <?php echo esc_attr( $imageBorderRadius['desktop']['top'] . $imageBorderRadius['desktop']['unit'] . ' ' . $imageBorderRadius['desktop']['right'] . $imageBorderRadius['desktop']['unit'] . ' ' . $imageBorderRadius['desktop']['bottom'] . $imageBorderRadius['desktop']['unit'] . ' ' . $imageBorderRadius['desktop']['left'] . $imageBorderRadius['desktop']['unit'] ); ?>;
    position: relative;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-image:hover img {
    transform: scale(1.05);
}

/* Content */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content {
    display: flex;
    flex-direction: column;
    gap: <?php echo esc_attr( $contentMargin['desktop'] ); ?>px;
}

/* Product title */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-title {
    margin: 0;
    color: <?php echo esc_attr( $titleColor ); ?>;
    <?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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
    <?php if ( ! empty( $titleTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-title a {
    color: <?php echo esc_attr( $titleColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
}

<?php if ( ! empty( $titleHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-product-title a:hover {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}
<?php endif; ?>

/* Star Rating */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-rating {
    display: flex;
    align-items: center;
    gap: 1px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-rating .star {
    color: <?php echo esc_attr( $ratingColor ); ?>;
    font-size: 16px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-rating .star.empty {
    color: #d3d3d3;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-rating .count {
    font-size: 12px;
    color: <?php echo esc_attr( $descriptionColor ); ?>;
    font-style: italic;
}

/* WooCommerce default star rating compatibility */
.<?php echo esc_attr( $id ); ?> .star-rating {
    display: inline-flex;
    overflow: hidden;
    position: relative;
    height: 1em;
    line-height: 1;
    font-size: 16px;
    width: 5.4em;
}

.<?php echo esc_attr( $id ); ?> .star-rating::before {
    content: "★★★★★";
    color: #d3d3d3;
    float: left;
    top: 0;
    left: 0;
    position: absolute;
}

.<?php echo esc_attr( $id ); ?> .star-rating span {
    overflow: hidden;
    float: left;
    top: 0;
    left: 0;
    position: absolute;
    padding-top: 1.5em;
}

.<?php echo esc_attr( $id ); ?> .star-rating span::before {
    content: "★★★★★";
    color: <?php echo esc_attr( $ratingColor ); ?>;
    top: 0;
    position: absolute;
    left: 0;
}

/* Price */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-price {
    display: flex;
    gap: 8px;
    align-items: center;
    color: <?php echo esc_attr( $priceColor ); ?>;
    <?php if ( ! empty( $headingTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $headingTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $headingTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $headingTypography['fontSize']['desktop'] . ( $headingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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
    <?php if ( ! empty( $headingTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $headingTypography['lineHeight']['desktop'] . ( $headingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $headingTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['desktop'] . ( $headingTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-price del {
    color: <?php echo esc_attr( $regularPriceColor ); ?>;
    text-decoration: line-through;
}
            
.<?php echo esc_attr( $id ); ?> .digiblocks-product-price ins {
	text-decoration: none;
}

/* Categories */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-categories {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-product-categories a {
    display: inline-flex;
    border-radius: 3px;
    padding: 3px 5px;
    background-color: <?php echo esc_attr( $catBackgroundColor ); ?>;
    color: <?php echo esc_attr( $catColor ); ?>;
    text-decoration: none;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-categories a:hover {
    background-color: <?php echo esc_attr( $catHoverBackgroundColor ); ?>;
    color: <?php echo esc_attr( $catHoverColor ); ?>;
}

/* Product description */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-excerpt {
    color: <?php echo esc_attr( $descriptionColor ); ?>;
    <?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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
    <?php if ( ! empty( $contentTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

/* Add to cart button */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-add-to-cart {
    display: flex;
	flex-direction: column;
	gap: .5rem;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-add-to-cart .button {
    display: flex;
	align-items: center;
	justify-content: center;
	gap: .5rem;
    background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
    <?php if ( ! empty( $buttonTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $buttonTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $buttonTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $buttonTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $buttonTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $buttonTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    padding: <?php echo esc_attr( $buttonPadding['desktop']['top'] . $buttonPadding['desktop']['unit'] . ' ' . $buttonPadding['desktop']['right'] . $buttonPadding['desktop']['unit'] . ' ' . $buttonPadding['desktop']['bottom'] . $buttonPadding['desktop']['unit'] . ' ' . $buttonPadding['desktop']['left'] . $buttonPadding['desktop']['unit'] ); ?>;
    border-radius: <?php echo esc_attr( $buttonBorderRadius['desktop']['top'] . $buttonBorderRadius['desktop']['unit'] . ' ' . $buttonBorderRadius['desktop']['right'] . $buttonBorderRadius['desktop']['unit'] . ' ' . $buttonBorderRadius['desktop']['bottom'] . $buttonBorderRadius['desktop']['unit'] . ' ' . $buttonBorderRadius['desktop']['left'] . $buttonBorderRadius['desktop']['unit'] ); ?>;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-add-to-cart .button:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ?: $buttonBackgroundColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ?: $buttonTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-add-to-cart .added_to_cart {
    display: flex;
    justify-content: center;
}

/* Pagination */
.<?php echo esc_attr( $id ); ?> .digiblocks-pagination {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: <?php echo esc_attr( $paginationAlign ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    background-color: <?php echo esc_attr( $paginationBackgroundColor ); ?>;
    color: <?php echo esc_attr( $paginationTextColor ); ?>;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers.current {
    background-color: <?php echo esc_attr( $paginationActiveBackgroundColor ); ?>;
    color: <?php echo esc_attr( $paginationActiveTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers:hover:not(.current) {
    background-color: <?php echo esc_attr( $paginationActiveBackgroundColor ); ?>40;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
        padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-products-container {
        grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
        gap: <?php echo esc_attr( $itemSpacing['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-item {
        gap: <?php echo esc_attr( $imageMargin['tablet'] ); ?>px;
        <?php if ( $cardStyle ) : ?>
        padding: <?php echo esc_attr( $cardPadding['tablet']['top'] . $cardPadding['tablet']['unit'] . ' ' . $cardPadding['tablet']['right'] . $cardPadding['tablet']['unit'] . ' ' . $cardPadding['tablet']['bottom'] . $cardPadding['tablet']['unit'] . ' ' . $cardPadding['tablet']['left'] . $cardPadding['tablet']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $cardBorderRadius['tablet']['top'] . $cardBorderRadius['tablet']['unit'] . ' ' . $cardBorderRadius['tablet']['right'] . $cardBorderRadius['tablet']['unit'] . ' ' . $cardBorderRadius['tablet']['bottom'] . $cardBorderRadius['tablet']['unit'] . ' ' . $cardBorderRadius['tablet']['left'] . $cardBorderRadius['tablet']['unit'] ); ?>;
        
        <?php if ( $cardBorderStyle !== 'none' ) : ?>
        border-width: <?php echo esc_attr( $cardBorderWidth['tablet']['top'] . $cardBorderWidth['tablet']['unit'] . ' ' . $cardBorderWidth['tablet']['right'] . $cardBorderWidth['tablet']['unit'] . ' ' . $cardBorderWidth['tablet']['bottom'] . $cardBorderWidth['tablet']['unit'] . ' ' . $cardBorderWidth['tablet']['left'] . $cardBorderWidth['tablet']['unit'] ); ?>;
        <?php endif; ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-image {
        border-radius: <?php echo esc_attr( $imageBorderRadius['tablet']['top'] . $imageBorderRadius['tablet']['unit'] . ' ' . $imageBorderRadius['tablet']['right'] . $imageBorderRadius['tablet']['unit'] . ' ' . $imageBorderRadius['tablet']['bottom'] . $imageBorderRadius['tablet']['unit'] . ' ' . $imageBorderRadius['tablet']['left'] . $imageBorderRadius['tablet']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-content {
        gap: <?php echo esc_attr( $contentMargin['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-title {
        <?php if ( ! empty( $titleTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-price {
        <?php if ( ! empty( $headingTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $headingTypography['fontSize']['tablet'] . ( $headingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $headingTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $headingTypography['lineHeight']['tablet'] . ( $headingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $headingTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['tablet'] . ( $headingTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-categories {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-excerpt {
        <?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-add-to-cart .add_to_cart_button {
        <?php if ( ! empty( $buttonTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        padding: <?php echo esc_attr( $buttonPadding['tablet']['top'] . $buttonPadding['tablet']['unit'] . ' ' . $buttonPadding['tablet']['right'] . $buttonPadding['tablet']['unit'] . ' ' . $buttonPadding['tablet']['bottom'] . $buttonPadding['tablet']['unit'] . ' ' . $buttonPadding['tablet']['left'] . $buttonPadding['tablet']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $buttonBorderRadius['tablet']['top'] . $buttonBorderRadius['tablet']['unit'] . ' ' . $buttonBorderRadius['tablet']['right'] . $buttonBorderRadius['tablet']['unit'] . ' ' . $buttonBorderRadius['tablet']['bottom'] . $buttonBorderRadius['tablet']['unit'] . ' ' . $buttonBorderRadius['tablet']['left'] . $buttonBorderRadius['tablet']['unit'] ); ?>;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
        padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-products-container {
        grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
        gap: <?php echo esc_attr( $itemSpacing['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-item {
        gap: <?php echo esc_attr( $imageMargin['mobile'] ); ?>px;
        <?php if ( $cardStyle ) : ?>
        padding: <?php echo esc_attr( $cardPadding['mobile']['top'] . $cardPadding['mobile']['unit'] . ' ' . $cardPadding['mobile']['right'] . $cardPadding['mobile']['unit'] . ' ' . $cardPadding['mobile']['bottom'] . $cardPadding['mobile']['unit'] . ' ' . $cardPadding['mobile']['left'] . $cardPadding['mobile']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $cardBorderRadius['mobile']['top'] . $cardBorderRadius['mobile']['unit'] . ' ' . $cardBorderRadius['mobile']['right'] . $cardBorderRadius['mobile']['unit'] . ' ' . $cardBorderRadius['mobile']['bottom'] . $cardBorderRadius['mobile']['unit'] . ' ' . $cardBorderRadius['mobile']['left'] . $cardBorderRadius['mobile']['unit'] ); ?>;
        
        <?php if ( $cardBorderStyle !== 'none' ) : ?>
        border-width: <?php echo esc_attr( $cardBorderWidth['mobile']['top'] . $cardBorderWidth['mobile']['unit'] . ' ' . $cardBorderWidth['mobile']['right'] . $cardBorderWidth['mobile']['unit'] . ' ' . $cardBorderWidth['mobile']['bottom'] . $cardBorderWidth['mobile']['unit'] . ' ' . $cardBorderWidth['mobile']['left'] . $cardBorderWidth['mobile']['unit'] ); ?>;
        <?php endif; ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-image {
        border-radius: <?php echo esc_attr( $imageBorderRadius['mobile']['top'] . $imageBorderRadius['mobile']['unit'] . ' ' . $imageBorderRadius['mobile']['right'] . $imageBorderRadius['mobile']['unit'] . ' ' . $imageBorderRadius['mobile']['bottom'] . $imageBorderRadius['mobile']['unit'] . ' ' . $imageBorderRadius['mobile']['left'] . $imageBorderRadius['mobile']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-content {
        gap: <?php echo esc_attr( $contentMargin['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-title {
        <?php if ( ! empty( $titleTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-price {
        <?php if ( ! empty( $headingTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $headingTypography['fontSize']['mobile'] . ( $headingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $headingTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $headingTypography['lineHeight']['mobile'] . ( $headingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $headingTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['mobile'] . ( $headingTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-categories {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-excerpt {
        <?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-add-to-cart .add_to_cart_button {
        <?php if ( ! empty( $buttonTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        padding: <?php echo esc_attr( $buttonPadding['mobile']['top'] . $buttonPadding['mobile']['unit'] . ' ' . $buttonPadding['mobile']['right'] . $buttonPadding['mobile']['unit'] . ' ' . $buttonPadding['mobile']['bottom'] . $buttonPadding['mobile']['unit'] . ' ' . $buttonPadding['mobile']['left'] . $buttonPadding['mobile']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $buttonBorderRadius['mobile']['top'] . $buttonBorderRadius['mobile']['unit'] . ' ' . $buttonBorderRadius['mobile']['right'] . $buttonBorderRadius['mobile']['unit'] . ' ' . $buttonBorderRadius['mobile']['bottom'] . $buttonBorderRadius['mobile']['unit'] . ' ' . $buttonBorderRadius['mobile']['left'] . $buttonBorderRadius['mobile']['unit'] ); ?>;
    }
}

<?php
$digiblocks_css_output = ob_get_clean();