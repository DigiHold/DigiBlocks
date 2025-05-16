<?php
/**
 * Posts Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                              = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-posts-' . uniqid();
$postStyle                       = isset( $attrs['postStyle'] ) ? $attrs['postStyle'] : 'grid';
$columns                         = isset( $attrs['columns'] ) ? $attrs['columns'] : [
    'desktop' => 3,
    'tablet'  => 2,
    'mobile'  => 1,
];
$titleColor                      = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
$titleHoverColor                 = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$excerptColor                    = isset( $attrs['excerptColor'] ) ? $attrs['excerptColor'] : '#666666';
$catBackgroundColor              = isset( $attrs['catBackgroundColor'] ) ? $attrs['catBackgroundColor'] : '#52576b';
$catColor                        = isset( $attrs['catColor'] ) ? $attrs['catColor'] : '#fff';
$catHoverBackgroundColor         = isset( $attrs['catHoverBackgroundColor'] ) ? $attrs['catHoverBackgroundColor'] : '#3f4a73';
$catHoverColor                   = isset( $attrs['catHoverColor'] ) ? $attrs['catHoverColor'] : '#fff';
$metaColor                       = isset( $attrs['metaColor'] ) ? $attrs['metaColor'] : '#666666';
$metaHoverColor                  = isset( $attrs['metaHoverColor'] ) ? $attrs['metaHoverColor'] : '';
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
    'desktop' => 18,
    'tablet'  => 15,
    'mobile'  => 15,
];
$padding                         = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                          = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
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
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$imageBorderRadius               = isset( $attrs['imageBorderRadius'] ) ? $attrs['imageBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
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
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$cardBorderStyle                 = isset( $attrs['cardBorderStyle'] ) ? $attrs['cardBorderStyle'] : 'solid';
$cardBorderWidth                 = isset( $attrs['cardBorderWidth'] ) ? $attrs['cardBorderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
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
/* Posts Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

/* Grid layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-posts-container {
    display: <?php echo $postStyle === 'list' ? 'flex' : 'grid'; ?>;
    <?php if ( $postStyle === 'list' ) : ?>
    flex-direction: column;
    <?php endif; ?>
    <?php if ( $postStyle !== 'list' ) : ?>
    grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
    <?php endif; ?>
    gap: <?php echo esc_attr( $itemSpacing['desktop'] ); ?>px;
}

<?php if ( $postStyle === 'list' ) : ?>
	/* List layout */
	.<?php echo esc_attr( $id ); ?>.style-list .digiblocks-post-item {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
	}

	.<?php echo esc_attr( $id ); ?>.style-list .digiblocks-post-image {
		max-width: 35%;
		width: auto;
	}

	.<?php echo esc_attr( $id ); ?>.style-list .digiblocks-post-image img {
		height: 100%;
		object-fit: cover;
	}

	.<?php echo esc_attr( $id ); ?>.style-list .digiblocks-post-content {
		flex: 1;
	}
<?php endif; ?>

/* Post item */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-item {
	display: flex;
	flex-direction: column;
	gap: <?php echo esc_attr( $imageMargin['desktop'] ); ?>px;
    <?php if ( $cardStyle ) : ?>
    background-color: <?php echo esc_attr( $cardBackgroundColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $cardPadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderRadius, 'border-radius', 'desktop' ) ); ?>
    
    <?php if ( $cardBorderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $cardBorderStyle ); ?>;
    border-color: <?php echo esc_attr( $cardBorderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
    
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $cardShadow ) ); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-item:hover {
    <?php if ( $cardStyle && $cardShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $cardShadowHover ) ); ?>;
    <?php endif; ?>
}

/* Featured image */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-image {
    width: 100%;
    overflow: hidden;
	<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-image:hover img {
    transform: scale(1.05);
}

/* Content */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-content {
	display: flex;
	flex-direction: column;
	gap: <?php echo esc_attr( $contentMargin['desktop'] ); ?>px;
}

/* Post title */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-title {
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

.<?php echo esc_attr( $id ); ?> .digiblocks-post-title a {
    color: <?php echo esc_attr( $titleColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
}

<?php if ( ! empty( $titleHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-post-title a:hover {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}
<?php endif; ?>

/* Post excerpt */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-excerpt {
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
    color: <?php echo esc_attr( $excerptColor ); ?>;
}

/* Categories */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-categories {
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

.<?php echo esc_attr( $id ); ?> .digiblocks-post-categories a {
    display: inline-flex;
	border-radius: 3px;
	padding: 3px 5px;
	background-color: <?php echo esc_attr( $catBackgroundColor ); ?>;
	color: <?php echo esc_attr( $catColor ); ?>;
	text-decoration: none;
	transition: all 0.3s ease;
}

<?php if ( ! empty( $metaHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-post-categories a:hover {
    background-color: <?php echo esc_attr( $catHoverBackgroundColor ); ?>;
	color: <?php echo esc_attr( $catHoverColor ); ?>;
}
<?php endif; ?>

/* Footer meta */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-footer-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    color: <?php echo esc_attr( $metaColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar,
.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar a {
	display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar {
    flex-shrink: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items,
.<?php echo esc_attr( $id ); ?> .digiblocks-post-comments-count {
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

.<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items {
    display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items a {
    color: <?php echo esc_attr( $metaColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
}

<?php if ( ! empty( $metaHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-footer-meta-items a:hover {
    color: <?php echo esc_attr( $metaHoverColor ); ?>;
}
<?php endif; ?>

/* Footer actions */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-footer-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
	flex-wrap: wrap;
    gap: 1rem;
}

/* Read more button */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-read-more {
    display: inline-flex;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-post-read-more:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
}

/* Date meta */
.<?php echo esc_attr( $id ); ?> .digiblocks-post-comments-count {
    color: <?php echo esc_attr( $metaColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
	gap: .5rem;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-comments-count:hover {
    color: <?php echo esc_attr( $metaHoverColor ?: $titleColor ); ?>;
}

/* Card hover effect for non-list layouts */
<?php if ( $postStyle !== 'list' && $cardStyle ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-post-item:hover {
    transform: translateY(-5px);
}
<?php endif; ?>

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
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-posts-container {
        <?php if ( $postStyle !== 'list' ) : ?>
        grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
        <?php endif; ?>
        gap: <?php echo esc_attr( $itemSpacing['tablet'] ); ?>px;
    }
    
    <?php if ( $cardStyle ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-item {
		gap: <?php echo esc_attr( $imageMargin['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $cardPadding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderRadius, 'border-radius', 'tablet' ) ); ?>
        
        <?php if ( $cardBorderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-image {
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-content {
		gap: <?php echo esc_attr( $contentMargin['tablet'] ); ?>px;
	}
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-title {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-meta {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-excerpt {
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
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-comments-count {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-read-more {
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
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-posts-container {
        <?php if ( $postStyle !== 'list' ) : ?>
        grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
        <?php endif; ?>
        gap: <?php echo esc_attr( $itemSpacing['mobile'] ); ?>px;
    }

	<?php if ( $postStyle === 'list' ) : ?>
	.<?php echo esc_attr( $id ); ?>.style-list .digiblocks-post-item {
		flex-direction: column;
		flex-wrap: wrap;
		align-items: stretch;
	}

	.<?php echo esc_attr( $id ); ?>.style-list .digiblocks-post-image {
		max-width: 100%;
	}
	<?php endif; ?>
    
    <?php if ( $cardStyle ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-item {
		gap: <?php echo esc_attr( $imageMargin['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $cardPadding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderRadius, 'border-radius', 'mobile' ) ); ?>
        
        <?php if ( $cardBorderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $cardBorderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-image {
		<?php echo esc_attr( digiblocks_get_dimensions( $imageBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-content {
		gap: <?php echo esc_attr( $contentMargin['mobile'] ); ?>px;
	}
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-title {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-meta {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-excerpt {
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
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-comments-count {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-read-more {
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
}

<?php
$digiblocks_css_output = ob_get_clean();