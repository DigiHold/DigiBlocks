<?php
/**
 * Taxonomy Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                              = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-taxonomy-' . uniqid();
$visibility                      = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$columns                         = isset( $attrs['columns'] ) ? $attrs['columns'] : [
    'desktop' => 3,
    'tablet'  => 2,
    'mobile'  => 1,
];
$titleColor                      = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#1a1a1a';
$titleHoverColor                 = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '#4a6cf7';
$excerptColor                    = isset( $attrs['excerptColor'] ) ? $attrs['excerptColor'] : '#666666';
$metaColor                       = isset( $attrs['metaColor'] ) ? $attrs['metaColor'] : '#888888';
$metaHoverColor                  = isset( $attrs['metaHoverColor'] ) ? $attrs['metaHoverColor'] : '#4a6cf7';
$buttonBackgroundColor           = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextColor                 = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBackgroundHoverColor      = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3a5ce5';
$buttonTextHoverColor            = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$cardBackgroundColor             = isset( $attrs['cardBackgroundColor'] ) ? $attrs['cardBackgroundColor'] : '#ffffff';
$cardBorderColor                 = isset( $attrs['cardBorderColor'] ) ? $attrs['cardBorderColor'] : '#e8e8e8';
$cardHoverShadowColor            = isset( $attrs['cardHoverShadowColor'] ) ? $attrs['cardHoverShadowColor'] : 'rgba(74, 108, 247, 0.15)';
$imageMargin                     = isset( $attrs['imageMargin'] ) ? $attrs['imageMargin'] : [
    'desktop' => 20,
    'tablet'  => 18,
    'mobile'  => 16,
];
$contentMargin                   = isset( $attrs['contentMargin'] ) ? $attrs['contentMargin'] : [
    'desktop' => 16,
    'tablet'  => 14,
    'mobile'  => 12,
];
$padding                         = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                          = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 40, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 30, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 25, 'left' => 0, 'unit' => 'px'],
];
$itemSpacing                     = isset( $attrs['itemSpacing'] ) ? $attrs['itemSpacing'] : [
    'desktop' => 25,
    'tablet'  => 20,
    'mobile'  => 15,
];
$titleTypography                 = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 22, 'tablet' => 20, 'mobile' => 18],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.3, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$contentTypography               = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 15, 'tablet' => 14, 'mobile' => 13],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.6, 'tablet' => 1.5, 'mobile' => 1.4],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$textTypography                  = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 13, 'tablet' => 12, 'mobile' => 11],
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
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '500',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$buttonPadding                   = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => ['top' => 8, 'right' => 16, 'bottom' => 8, 'left' => 16, 'unit' => 'px'],
    'tablet'  => ['top' => 7, 'right' => 14, 'bottom' => 7, 'left' => 14, 'unit' => 'px'],
    'mobile'  => ['top' => 6, 'right' => 12, 'bottom' => 6, 'left' => 12, 'unit' => 'px'],
];
$buttonBorderRadius              = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 6, 'right' => 6, 'bottom' => 6, 'left' => 6, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$imageBorderRadius               = isset( $attrs['imageBorderRadius'] ) ? $attrs['imageBorderRadius'] : [
    'desktop' => ['top' => 12, 'right' => 12, 'bottom' => 12, 'left' => 12, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$cardPadding                     = isset( $attrs['cardPadding'] ) ? $attrs['cardPadding'] : [
    'desktop' => ['top' => 24, 'right' => 24, 'bottom' => 24, 'left' => 24, 'unit' => 'px'],
    'tablet'  => ['top' => 20, 'right' => 20, 'bottom' => 20, 'left' => 20, 'unit' => 'px'],
    'mobile'  => ['top' => 16, 'right' => 16, 'bottom' => 16, 'left' => 16, 'unit' => 'px'],
];
$cardBorderRadius                = isset( $attrs['cardBorderRadius'] ) ? $attrs['cardBorderRadius'] : [
    'desktop' => ['top' => 16, 'right' => 16, 'bottom' => 16, 'left' => 16, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$cardBorderWidth                 = isset( $attrs['cardBorderWidth'] ) ? $attrs['cardBorderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$paginationAlign                 = isset( $attrs['paginationAlign'] ) ? $attrs['paginationAlign'] : 'center';
$paginationBackgroundColor       = isset( $attrs['paginationBackgroundColor'] ) ? $attrs['paginationBackgroundColor'] : '#f8f9fa';
$paginationTextColor             = isset( $attrs['paginationTextColor'] ) ? $attrs['paginationTextColor'] : '#333333';
$paginationActiveBackgroundColor = isset( $attrs['paginationActiveBackgroundColor'] ) ? $attrs['paginationActiveBackgroundColor'] : '#4a6cf7';
$paginationActiveTextColor       = isset( $attrs['paginationActiveTextColor'] ) ? $attrs['paginationActiveTextColor'] : '#ffffff';

// CSS Output
ob_start();
?>
/* Taxonomy Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

/* Grid layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-container {
    display: grid;
    grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
    gap: <?php echo esc_attr( $itemSpacing['desktop'] ); ?>px;
}

/* Post item - Card style */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-item {
    display: flex;
    flex-direction: column;
    background-color: <?php echo esc_attr( $cardBackgroundColor ); ?>;
    border: 1px solid <?php echo esc_attr( $cardBorderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $cardPadding, 'padding', 'desktop' ) ); ?>
    transition: all 0.3s ease;
    overflow: hidden;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px <?php echo esc_attr( $cardHoverShadowColor ); ?>;
    border-color: <?php echo esc_attr( $cardBorderColor ); ?>80;
}

/* Featured image */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-image {
    width: 100%;
    overflow: hidden;
	<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'desktop' ) ); ?>
    margin-bottom: <?php echo esc_attr( $imageMargin['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-image:hover img {
    transform: scale(1.05);
}

/* Content */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-content {
    display: flex;
    flex-direction: column;
    gap: <?php echo esc_attr( $contentMargin['desktop'] ); ?>px;
    flex: 1;
}

/* Post title */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-title {
    margin: 0;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-title a {
    color: <?php echo esc_attr( $titleColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-title a:hover {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}

/* Post excerpt */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-excerpt {
    color: <?php echo esc_attr( $excerptColor ); ?>;
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
    flex: 1;
}

/* Footer meta */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-footer-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    color: <?php echo esc_attr( $metaColor ); ?>;
    margin-top: auto;
    padding-top: <?php echo esc_attr( $contentMargin['desktop'] ); ?>px;
    border-top: 1px solid <?php echo esc_attr( $cardBorderColor ); ?>40;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar {
    flex-shrink: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items a {
    color: <?php echo esc_attr( $metaColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items a:hover {
    color: <?php echo esc_attr( $metaHoverColor ); ?>;
}

/* Footer actions */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-footer-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: <?php echo esc_attr( $contentMargin['desktop'] ); ?>px;
}

/* Read more button */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-read-more {
    display: inline-flex;
    align-items: center;
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
    text-decoration: none;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-read-more:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
    transform: translateY(-1px);
}

/* Comments count */
.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-comments-count {
    color: <?php echo esc_attr( $metaColor ); ?>;
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
    display: flex;
    align-items: center;
    gap: .5rem;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-comments-count:hover {
    color: <?php echo esc_attr( $metaHoverColor ); ?>;
}

/* Pagination */
.<?php echo esc_attr( $id ); ?> .digiblocks-pagination {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: <?php echo esc_attr( $paginationAlign ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 42px;
    height: 42px;
    padding: 0 12px;
    background-color: <?php echo esc_attr( $paginationBackgroundColor ); ?>;
    color: <?php echo esc_attr( $paginationTextColor ); ?>;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 500;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers.current {
    background-color: <?php echo esc_attr( $paginationActiveBackgroundColor ); ?>;
    color: <?php echo esc_attr( $paginationActiveTextColor ); ?>;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px <?php echo esc_attr( $paginationActiveBackgroundColor ); ?>40;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers:hover:not(.current) {
    background-color: <?php echo esc_attr( $paginationActiveBackgroundColor ); ?>20;
    transform: translateY(-1px);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pagination .page-numbers svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-container {
        grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
        gap: <?php echo esc_attr( $itemSpacing['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-item {
		<?php echo esc_attr( digiblocks_get_dimensions( $cardPadding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-image {
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'tablet' ) ); ?>
        margin-bottom: <?php echo esc_attr( $imageMargin['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-content {
        gap: <?php echo esc_attr( $contentMargin['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-title {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-excerpt {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items,
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-comments-count {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-read-more {
        <?php if ( ! empty( $buttonTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-footer-meta {
        padding-top: <?php echo esc_attr( $contentMargin['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-footer-actions {
        margin-top: <?php echo esc_attr( $contentMargin['tablet'] ); ?>px;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-container {
        grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
        gap: <?php echo esc_attr( $itemSpacing['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-item {
		<?php echo esc_attr( digiblocks_get_dimensions( $cardPadding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-image {
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'mobile' ) ); ?>
        margin-bottom: <?php echo esc_attr( $imageMargin['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-content {
        gap: <?php echo esc_attr( $contentMargin['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-title {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-excerpt {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items,
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-comments-count {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-read-more {
        <?php if ( ! empty( $buttonTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-footer-meta {
        padding-top: <?php echo esc_attr( $contentMargin['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-taxonomy-footer-actions {
        margin-top: <?php echo esc_attr( $contentMargin['mobile'] ); ?>px;
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