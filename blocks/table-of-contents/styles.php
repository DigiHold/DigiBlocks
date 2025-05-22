<?php
/**
 * Table of Contents Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                  = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-toc-' . uniqid();
$visibility          = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$align               = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
];
$width               = isset( $attrs['width'] ) ? $attrs['width'] : [
    'desktop' => ['value' => 100, 'unit' => '%'],
    'tablet'  => ['value' => 100, 'unit' => '%'],
    'mobile'  => ['value' => 100, 'unit' => '%'],
];
$maxWidth            = isset( $attrs['maxWidth'] ) ? $attrs['maxWidth'] : [
    'desktop' => ['value' => '', 'unit' => 'px'],
    'tablet'  => ['value' => '', 'unit' => 'px'],
    'mobile'  => ['value' => '', 'unit' => 'px'],
];
$backgroundColor     = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#f8f9fa';
$titleColor          = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
$textColor           = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$linkColor           = isset( $attrs['linkColor'] ) ? $attrs['linkColor'] : '#4a6cf7';
$linkHoverColor      = isset( $attrs['linkHoverColor'] ) ? $attrs['linkHoverColor'] : '#3a5ce5';
$borderStyle         = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$borderWidth         = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderRadius        = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderColor         = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$padding             = isset( $attrs['padding'] ) ? $attrs['padding'] : [
    'desktop' => ['top' => 25, 'right' => 30, 'bottom' => 25, 'left' => 30, 'unit' => 'px'],
    'tablet'  => ['top' => 20, 'right' => 25, 'bottom' => 20, 'left' => 25, 'unit' => 'px'],
    'mobile'  => ['top' => 15, 'right' => 20, 'bottom' => 15, 'left' => 20, 'unit' => 'px'],
];
$margin              = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 30, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 25, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 20, 'left' => 0, 'unit' => 'px'],
];
$showAsCollapsible   = isset( $attrs['showAsCollapsible'] ) ? $attrs['showAsCollapsible'] : false;
$minimizeBox         = isset( $attrs['minimizeBox'] ) ? $attrs['minimizeBox'] : false;
$titleTypography     = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 22, 'tablet' => 20, 'mobile' => 18],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$contentTypography   = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.6, 'tablet' => 1.5, 'mobile' => 1.4],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$listSpacing         = isset( $attrs['listSpacing'] ) ? $attrs['listSpacing'] : [
    'desktop' => ['value' => 15, 'unit' => 'px'],
    'tablet'  => ['value' => 12, 'unit' => 'px'],
    'mobile'  => ['value' => 10, 'unit' => 'px'],
];
// Box shadow settings
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable' => false,
    'color' => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical' => 0,
    'blur' => 0,
    'spread' => 0,
    'position' => 'outset'
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
    'enable' => false,
    'color' => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical' => 0,
    'blur' => 0,
    'spread' => 0,
    'position' => 'outset'
);

// CSS Output
ob_start();
?>
/* Table of Contents Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    width: <?php echo esc_attr( $width['desktop']['value'] . $width['desktop']['unit'] ); ?>;
    <?php if ( ! empty( $maxWidth['desktop']['value'] ) ) : ?>
    max-width: <?php echo esc_attr( $maxWidth['desktop']['value'] . $maxWidth['desktop']['unit'] ); ?>;
    <?php endif; ?>
    margin-left: <?php echo $align['desktop'] === 'center' ? 'auto' : ($align['desktop'] === 'right' ? 'auto' : '0'); ?>;
    margin-right: <?php echo $align['desktop'] === 'center' ? 'auto' : ($align['desktop'] === 'left' ? 'auto' : '0'); ?>;
    text-align: <?php echo esc_attr( $align['desktop'] ); ?>;
    <?php echo digiblocks_get_dimensions( $margin, 'margin', 'desktop' ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-toc-container {
    position: relative;
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php if ( $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
    border-color: <?php echo esc_attr( $borderColor ); ?>;
    <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ); ?>
    <?php echo digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ); ?>
    <?php endif; ?>
    <?php echo digiblocks_get_dimensions( $padding, 'padding', 'desktop' ); ?>
    <?php if ( $boxShadow['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	transition: all 0.3s ease;
    <?php endif; ?>
}

<?php if ( $boxShadowHover['enable'] ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-toc-container:hover {
	box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
}
<?php endif; ?>

/* Title styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-toc-title {
    margin-top: 0;
    margin-bottom: <?php echo esc_attr( $listSpacing['desktop']['value'] . $listSpacing['desktop']['unit'] ); ?>;
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

/* List styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-toc-list {
    margin: 0;
    padding-left: 22px; /* Default indent for lists */
    color: <?php echo esc_attr( $textColor ); ?>;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-toc-list li {
    margin-bottom: <?php echo esc_attr( $listSpacing['desktop']['value'] . $listSpacing['desktop']['unit'] ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-toc-list li:last-child {
	margin-bottom: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-toc-list a {
    color: <?php echo esc_attr( $linkColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-toc-list a:hover {
    color: <?php echo esc_attr( $linkHoverColor ); ?>;
}

/* Collapsible TOC styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-toc-toggle-button {
    display: <?php echo $showAsCollapsible ? 'inline-flex' : 'none'; ?>;
    align-items: center;
    position: <?php echo $minimizeBox ? 'absolute' : 'relative'; ?>;
    <?php if ( $minimizeBox ) : ?>
    right: 15px;
    top: 15px;
    <?php else : ?>
    margin-left: 15px;
    <?php endif; ?>
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1;
    border: 1px solid <?php echo esc_attr( $borderColor ); ?>;
    border-radius: 4px;
    background-color: transparent;
    color: <?php echo esc_attr( $textColor ); ?>;
    cursor: pointer;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-toc-toggle-button:hover {
    background-color: <?php echo $backgroundColor !== '#ffffff' ? '#ffffff' : '#f1f1f1'; ?>;
}

/* Responsive styles - Tablet */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        width: <?php echo esc_attr( $width['tablet']['value'] . $width['tablet']['unit'] ); ?>;
        <?php if ( ! empty( $maxWidth['tablet']['value'] ) ) : ?>
        max-width: <?php echo esc_attr( $maxWidth['tablet']['value'] . $maxWidth['tablet']['unit'] ); ?>;
        <?php endif; ?>
        margin-left: <?php echo $align['tablet'] === 'center' ? 'auto' : ($align['tablet'] === 'right' ? 'auto' : '0'); ?>;
        margin-right: <?php echo $align['tablet'] === 'center' ? 'auto' : ($align['tablet'] === 'left' ? 'auto' : '0'); ?>;
        text-align: <?php echo esc_attr( $align['tablet'] ); ?>;
        <?php echo digiblocks_get_dimensions( $margin, 'margin', 'tablet' ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-container {
        <?php if ( $borderStyle !== 'none' ) : ?>
        <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ); ?>
        <?php echo digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ); ?>
        <?php endif; ?>
        <?php echo digiblocks_get_dimensions( $padding, 'padding', 'tablet' ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-title {
        margin-bottom: <?php echo esc_attr( $listSpacing['tablet']['value'] . $listSpacing['tablet']['unit'] ); ?>;
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-list {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-list li {
        margin-bottom: <?php echo esc_attr( $listSpacing['tablet']['value'] . $listSpacing['tablet']['unit'] ); ?>;
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-toc-list li:last-child {
		margin-bottom: 0;
	}
}

/* Responsive styles - Mobile */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        width: <?php echo esc_attr( $width['mobile']['value'] . $width['mobile']['unit'] ); ?>;
        <?php if ( ! empty( $maxWidth['mobile']['value'] ) ) : ?>
        max-width: <?php echo esc_attr( $maxWidth['mobile']['value'] . $maxWidth['mobile']['unit'] ); ?>;
        <?php endif; ?>
        margin-left: <?php echo $align['mobile'] === 'center' ? 'auto' : ($align['mobile'] === 'right' ? 'auto' : '0'); ?>;
        margin-right: <?php echo $align['mobile'] === 'center' ? 'auto' : ($align['mobile'] === 'left' ? 'auto' : '0'); ?>;
        text-align: <?php echo esc_attr( $align['mobile'] ); ?>;
        <?php echo digiblocks_get_dimensions( $margin, 'margin', 'mobile' ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-container {
        <?php if ( $borderStyle !== 'none' ) : ?>
        <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ); ?>
        <?php echo digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ); ?>
        <?php endif; ?>
        <?php echo digiblocks_get_dimensions( $padding, 'padding', 'mobile' ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-title {
        margin-bottom: <?php echo esc_attr( $listSpacing['mobile']['value'] . $listSpacing['mobile']['unit'] ); ?>;
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-list {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-toc-list li {
        margin-bottom: <?php echo esc_attr( $listSpacing['mobile']['value'] . $listSpacing['mobile']['unit'] ); ?>;
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-toc-list li:last-child {
		margin-bottom: 0;
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