<?php
/**
 * DigiCommerce Product Features Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                  = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-features-' . uniqid();
$visibility          = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$show_title          = isset( $attrs['showTitle'] ) ? $attrs['showTitle'] : true;
$show_alternating    = isset( $attrs['showAlternating'] ) ? $attrs['showAlternating'] : true;
$padding             = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin              = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$title_typography    = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 24, 'tablet' => 22, 'mobile' => 20],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '700',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.3, 'tablet' => 1.3, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$name_typography     = isset( $attrs['nameTypography'] ) ? $attrs['nameTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.4],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$value_typography    = isset( $attrs['valueTypography'] ) ? $attrs['valueTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.4],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$title_color         = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#1a202c';
$name_color          = isset( $attrs['nameColor'] ) ? $attrs['nameColor'] : '#2d3748';
$value_color         = isset( $attrs['valueColor'] ) ? $attrs['valueColor'] : '#4a5568';
$background_color    = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$alternating_color   = isset( $attrs['alternatingColor'] ) ? $attrs['alternatingColor'] : '#f7fafc';
$border_color        = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e2e8f0';
$border_width        = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$border_radius       = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$cell_padding        = isset( $attrs['cellPadding'] ) ? $attrs['cellPadding'] : [
    'desktop' => ['top' => 16, 'right' => 20, 'bottom' => 16, 'left' => 20, 'unit' => 'px'],
    'tablet'  => ['top' => 14, 'right' => 16, 'bottom' => 14, 'left' => 16, 'unit' => 'px'],
    'mobile'  => ['top' => 12, 'right' => 14, 'bottom' => 12, 'left' => 14, 'unit' => 'px'],
];

// CSS Output
ob_start();
?>
/* DigiCommerce Product Features Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
}

<?php if ( $show_title ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-features-title {
    color: <?php echo esc_attr( $title_color ); ?>;
    <?php if ( ! empty( $title_typography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $title_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $title_typography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $title_typography['fontSize']['desktop'] . ( $title_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $title_typography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $title_typography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $title_typography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $title_typography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $title_typography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $title_typography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $title_typography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $title_typography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $title_typography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $title_typography['lineHeight']['desktop'] . ( $title_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $title_typography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $title_typography['letterSpacing']['desktop'] . ( $title_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    margin: 0 0 20px 0;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-features-table-wrapper {
    overflow: hidden;
    <?php echo esc_attr( digiblocks_get_dimensions( $border_radius, 'border-radius', 'desktop' ) ); ?>
    border: <?php echo esc_attr( $border_width['desktop']['top'] . ( $border_width['desktop']['unit'] ?: 'px' ) ); ?> solid <?php echo esc_attr( $border_color ); ?>;
    background-color: <?php echo esc_attr( $background_color ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-features-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: transparent;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-feature-row {
    border: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-feature-row:not(:last-child) .digiblocks-feature-name,
.<?php echo esc_attr( $id ); ?> .digiblocks-feature-row:not(:last-child) .digiblocks-feature-value {
    border-bottom: 1px solid <?php echo esc_attr( $border_color ); ?>;
}

<?php if ( $show_alternating ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-feature-row:nth-child(even) {
    background-color: <?php echo esc_attr( $alternating_color ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-feature-name,
.<?php echo esc_attr( $id ); ?> .digiblocks-feature-value {
    <?php echo esc_attr( digiblocks_get_dimensions( $cell_padding, 'padding', 'desktop' ) ); ?>
    border: none;
    vertical-align: top;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-feature-name {
    color: <?php echo esc_attr( $name_color ); ?>;
    <?php if ( ! empty( $name_typography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $name_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $name_typography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $name_typography['fontSize']['desktop'] . ( $name_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $name_typography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $name_typography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $name_typography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $name_typography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $name_typography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $name_typography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $name_typography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $name_typography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $name_typography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $name_typography['lineHeight']['desktop'] . ( $name_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $name_typography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $name_typography['letterSpacing']['desktop'] . ( $name_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    width: 40%;
    min-width: 150px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-feature-value {
    color: <?php echo esc_attr( $value_color ); ?>;
    <?php if ( ! empty( $value_typography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $value_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $value_typography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $value_typography['fontSize']['desktop'] . ( $value_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $value_typography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $value_typography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $value_typography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $value_typography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $value_typography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $value_typography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $value_typography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $value_typography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $value_typography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $value_typography['lineHeight']['desktop'] . ( $value_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $value_typography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $value_typography['letterSpacing']['desktop'] . ( $value_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    width: 60%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-features-notice {
    margin: 0 0 20px 0;
    padding: 12px 16px;
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 6px;
    color: #856404;
    font-size: 14px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-features-notice p {
    margin: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-features-empty {
    padding: 20px;
    text-align: center;
    color: #666;
    font-style: italic;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-no-features {
    margin: 0;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    <?php if ( $show_title ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-features-title {
        <?php if ( ! empty( $title_typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $title_typography['fontSize']['tablet'] . ( $title_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $title_typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $title_typography['lineHeight']['tablet'] . ( $title_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $title_typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $title_typography['letterSpacing']['tablet'] . ( $title_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-features-table-wrapper {
        <?php echo esc_attr( digiblocks_get_dimensions( $border_radius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( ! empty( $border_width['tablet']['top'] ) ) : ?>
        border: <?php echo esc_attr( $border_width['tablet']['top'] . ( $border_width['tablet']['unit'] ?: 'px' ) ); ?> solid <?php echo esc_attr( $border_color ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-name,
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-value {
        <?php echo esc_attr( digiblocks_get_dimensions( $cell_padding, 'padding', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-name {
        <?php if ( ! empty( $name_typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $name_typography['fontSize']['tablet'] . ( $name_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $name_typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $name_typography['lineHeight']['tablet'] . ( $name_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $name_typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $name_typography['letterSpacing']['tablet'] . ( $name_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-value {
        <?php if ( ! empty( $value_typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $value_typography['fontSize']['tablet'] . ( $value_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $value_typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $value_typography['lineHeight']['tablet'] . ( $value_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $value_typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $value_typography['letterSpacing']['tablet'] . ( $value_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    <?php if ( $show_title ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-features-title {
        <?php if ( ! empty( $title_typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $title_typography['fontSize']['mobile'] . ( $title_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $title_typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $title_typography['lineHeight']['mobile'] . ( $title_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $title_typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $title_typography['letterSpacing']['mobile'] . ( $title_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-features-table-wrapper {
        <?php echo esc_attr( digiblocks_get_dimensions( $border_radius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( ! empty( $border_width['mobile']['top'] ) ) : ?>
        border: <?php echo esc_attr( $border_width['mobile']['top'] . ( $border_width['mobile']['unit'] ?: 'px' ) ); ?> solid <?php echo esc_attr( $border_color ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-name,
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-value {
        <?php echo esc_attr( digiblocks_get_dimensions( $cell_padding, 'padding', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-name {
        <?php if ( ! empty( $name_typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $name_typography['fontSize']['mobile'] . ( $name_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $name_typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $name_typography['lineHeight']['mobile'] . ( $name_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $name_typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $name_typography['letterSpacing']['mobile'] . ( $name_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        width: 35%;
        min-width: 120px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-feature-value {
        <?php if ( ! empty( $value_typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $value_typography['fontSize']['mobile'] . ( $value_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $value_typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $value_typography['lineHeight']['mobile'] . ( $value_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $value_typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $value_typography['letterSpacing']['mobile'] . ( $value_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        width: 65%;
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