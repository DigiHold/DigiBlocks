<?php
/**
 * Pricing Table Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$tables                   = isset( $attrs['tables'] ) ? $attrs['tables'] : array();
$columns                  = isset( $attrs['columns'] ) ? $attrs['columns'] : 2;
$table_style              = isset( $attrs['tableStyle'] ) ? $attrs['tableStyle'] : 'style1';
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$title_typography         = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : null;
$price_typography         = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : null;
$text_typography          = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : null;
$content_typography       = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : null;
$button_typography        = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : null;
$padding                  = isset( $attrs['padding'] ) ? $attrs['padding'] : null;
$margin                   = isset( $attrs['margin'] ) ? $attrs['margin'] : null;
$border_radius            = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : null;
$border_width             = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : null;
$border_style             = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$border_color             = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e6e6e6';
$box_shadow               = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : null;
$box_shadow_hover         = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : null;
$button_radius            = isset( $attrs['buttonRadius'] ) ? $attrs['buttonRadius'] : 4;
$button_padding           = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : null;
$button_border_style      = isset( $attrs['buttonBorderStyle'] ) ? $attrs['buttonBorderStyle'] : 'none';
$button_border_width      = isset( $attrs['buttonBorderWidth'] ) ? $attrs['buttonBorderWidth'] : null;
$button_border_color      = isset( $attrs['buttonBorderColor'] ) ? $attrs['buttonBorderColor'] : '';
$button_border_hover_color = isset( $attrs['buttonBorderHoverColor'] ) ? $attrs['buttonBorderHoverColor'] : '';
$show_ribbon              = isset( $attrs['showRibbon'] ) ? $attrs['showRibbon'] : true;
$ribbon_style             = isset( $attrs['ribbonStyle'] ) ? $attrs['ribbonStyle'] : 'corner';
$ribbon_position          = isset( $attrs['ribbonPosition'] ) ? $attrs['ribbonPosition'] : 'right';
$table_text_color         = isset( $attrs['tableTextColor'] ) ? $attrs['tableTextColor'] : '#333333';
$table_background_color   = isset( $attrs['tableBackgroundColor'] ) ? $attrs['tableBackgroundColor'] : '#ffffff';
$header_background_color  = isset( $attrs['headerBackgroundColor'] ) ? $attrs['headerBackgroundColor'] : '#f8f9fa';
$button_text_color        = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$button_background_color  = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$button_text_hover_color  = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$button_bg_hover_color    = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3151e1';
$ribbon_text_color        = isset( $attrs['ribbonTextColor'] ) ? $attrs['ribbonTextColor'] : '#ffffff';
$ribbon_background_color  = isset( $attrs['ribbonBackgroundColor'] ) ? $attrs['ribbonBackgroundColor'] : '#4a6cf7';

// Get padding with fallback values
if ( ! $padding ) {
    $padding = array(
        'desktop' => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 0,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 0,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 0,
            'left'   => 0,
            'unit'   => 'px',
        ),
    );
}

// Get margin with fallback values
if ( ! $margin ) {
    $margin = array(
        'desktop' => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 30,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 20,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 15,
            'left'   => 0,
            'unit'   => 'px',
        ),
    );
}

// Get border radius with fallback values
if ( ! $border_radius ) {
    $border_radius = array(
        'desktop' => array(
            'top'    => 8,
            'right'  => 8,
            'bottom' => 8,
            'left'   => 8,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 8,
            'right'  => 8,
            'bottom' => 8,
            'left'   => 8,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 8,
            'right'  => 8,
            'bottom' => 8,
            'left'   => 8,
            'unit'   => 'px',
        ),
    );
}

// Get button padding with fallback values
if ( ! $button_padding ) {
    $button_padding = array(
        'desktop' => array(
            'top'    => 10,
            'right'  => 20,
            'bottom' => 10,
            'left'   => 20,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 8,
            'right'  => 16,
            'bottom' => 8,
            'left'   => 16,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 6,
            'right'  => 12,
            'bottom' => 6,
            'left'   => 12,
            'unit'   => 'px',
        ),
    );
}

// Get typography with default values
// Title Typography
if ( ! $title_typography ) {
    $title_typography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 24,
            'tablet'  => 20,
            'mobile'  => 18,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.4,
            'tablet'  => 1.3,
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
}

// Price Typography
if ( ! $price_typography ) {
    $price_typography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 36,
            'tablet'  => 30,
            'mobile'  => 26,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => 'bold',
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
}

// Text Typography
if ( ! $text_typography ) {
    $text_typography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 16,
            'tablet'  => 15,
            'mobile'  => 14,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.6,
            'tablet'  => 1.5,
            'mobile'  => 1.4,
        ),
        'lineHeightUnit'    => 'em',
        'letterSpacing'     => array(
            'desktop' => 0,
            'tablet'  => 0,
            'mobile'  => 0,
        ),
        'letterSpacingUnit' => 'px',
    );
}

// Content Typography
if ( ! $content_typography ) {
    $content_typography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 16,
            'tablet'  => 15,
            'mobile'  => 14,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.6,
            'tablet'  => 1.5,
            'mobile'  => 1.4,
        ),
        'lineHeightUnit'    => 'em',
        'letterSpacing'     => array(
            'desktop' => 0,
            'tablet'  => 0,
            'mobile'  => 0,
        ),
        'letterSpacingUnit' => 'px',
    );
}

// Button Typography
if ( ! $button_typography ) {
    $button_typography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 16,
            'tablet'  => 15,
            'mobile'  => 14,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.5,
            'tablet'  => 1.4,
            'mobile'  => 1.3,
        ),
        'lineHeightUnit'    => 'em',
        'letterSpacing'     => array(
            'desktop' => 0,
            'tablet'  => 0,
            'mobile'  => 0,
        ),
        'letterSpacingUnit' => 'px',
    );
}

// Get border width with fallback values
if ( ! $border_width ) {
    $border_width = array(
        'desktop' => array(
            'top'    => 1,
            'right'  => 1,
            'bottom' => 1,
            'left'   => 1,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 1,
            'right'  => 1,
            'bottom' => 1,
            'left'   => 1,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 1,
            'right'  => 1,
            'bottom' => 1,
            'left'   => 1,
            'unit'   => 'px',
        ),
    );
}

// Get button border width with fallback values
if ( ! $button_border_width ) {
    $button_border_width = array(
        'desktop' => array(
            'top'    => 1,
            'right'  => 1,
            'bottom' => 1,
            'left'   => 1,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 1,
            'right'  => 1,
            'bottom' => 1,
            'left'   => 1,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 1,
            'right'  => 1,
            'bottom' => 1,
            'left'   => 1,
            'unit'   => 'px',
        ),
    );
}

// CSS Output
ob_start();
?>
/* Pricing Table Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
    width: 100%;
    position: relative;
}

/* Grid container for tables */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-tables-container {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(<?php echo esc_attr( $columns ); ?>, 1fr);
}

/* Individual pricing table */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
	display: flex;
	flex-direction: column;
    background-color: <?php echo esc_attr( $table_background_color ); ?>;
    color: <?php echo esc_attr( $table_text_color ); ?>;
	<?php if ( 'none' !== $border_style ) : ?>
        border-style: <?php echo esc_attr( $border_style ); ?>;
        border-width: <?php echo esc_attr( $border_width['desktop']['top'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['right'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['bottom'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['left'] . $border_width['desktop']['unit'] ); ?>;
        border-color: <?php echo esc_attr( $border_color ); ?>;
        border-radius: <?php echo esc_attr( $border_radius['desktop']['top'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['right'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['bottom'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['left'] . $border_radius['desktop']['unit'] ); ?>;
    <?php else : ?>
        border: none;
    <?php endif; ?>
    
    <?php if ( isset( $box_shadow['enable'] ) && $box_shadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $box_shadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>
    
    padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
    position: relative;
    transition: all 0.3s ease;
}

/* Hover effect */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table:hover {
    <?php if ( isset( $box_shadow_hover['enable'] ) && $box_shadow_hover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $box_shadow_hover ) ); ?>;
    <?php endif; ?>
}

/* Highlighted table */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-highlighted {
    z-index: 1;
    <?php if ( 'style2' === $table_style ) : ?>
        transform: scale(1.05);
    <?php endif; ?>
    
    <?php if ( 'style3' === $table_style ) : ?>
        border-top-width: 10px !important;
    <?php endif; ?>
}

/* Header section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header {
	display: flex;
	flex-direction: column;
	gap: 10px;
    background-color: <?php echo esc_attr( $header_background_color ); ?>;
    text-align: center;
    
    <?php if ( 'style1' === $table_style ) : ?>
        padding: 20px;
        border-bottom: 1px solid <?php echo esc_attr( $border_color ); ?>;
    <?php endif; ?>
    
    <?php if ( 'style2' === $table_style ) : ?>
        padding: 30px 20px;
        margin: -1px -1px 0 -1px;
        color: #ffffff;
    <?php endif; ?>
    
    <?php if ( 'style3' === $table_style ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style4' === $table_style ) : ?>
        padding: 40px 20px 20px;
        border-radius: 16px 16px 0 0;
    <?php endif; ?>
    
    <?php if ( 'minimal' === $table_style ) : ?>
        padding: 20px;
        border-bottom: 1px solid <?php echo esc_attr( $border_color ); ?>;
    <?php endif; ?>
}

/* Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-icon {
    display: inline-flex;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-icon svg {
    width: 50px;
    height: 50px;
}
<?php
foreach ( $tables as $index => $table ) {
    $table_icon_color = isset( $table['iconColor'] ) ? $table['iconColor'] : '';
    $table_icon_hover_color = isset( $table['iconHoverColor'] ) ? $table['iconHoverColor'] : '';
    
    // Now use these variables for each table in the CSS output
    ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table:nth-child(<?php echo esc_attr( $index + 1 ); ?>) .digiblocks-pricing-table-icon svg {
        fill: <?php echo ! empty( $table_icon_color ) ? esc_attr( $table_icon_color ) : esc_attr( $table_text_color ); ?>;
        transition: fill 0.3s ease;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table:nth-child(<?php echo esc_attr( $index + 1 ); ?>):hover .digiblocks-pricing-table-icon svg {
        fill: <?php echo ! empty( $table_icon_hover_color ) ? esc_attr( $table_icon_hover_color ) : ( ! empty( $table_icon_color ) ? esc_attr( $table_icon_color ) : esc_attr( $table_text_color ) ); ?>;
    }
    <?php
}
?>

/* Special styling for style2 header text */
<?php if ( 'style2' === $table_style ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header .digiblocks-pricing-table-title,
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header .digiblocks-pricing-table-price {
    color: #ffffff !important;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header .digiblocks-pricing-table-description {
    color: rgba(255, 255, 255, 0.8) !important;
}
<?php endif; ?>

/* Title */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
    margin: 0;
    color: <?php echo esc_attr( $table_text_color ); ?>;
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
}

/* Price section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
    color: <?php echo esc_attr( $table_text_color ); ?>;
    <?php if ( ! empty( $price_typography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $price_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $price_typography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $price_typography['fontSize']['desktop'] . ( $price_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $price_typography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $price_typography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $price_typography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $price_typography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $price_typography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $price_typography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $price_typography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $price_typography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $price_typography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $price_typography['lineHeight']['desktop'] . ( $price_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $price_typography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $price_typography['letterSpacing']['desktop'] . ( $price_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( 'style4' === $table_style ) : ?>
        font-size: 3rem;
        line-height: 1;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period {
    <?php if ( ! empty( $text_typography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $text_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $text_typography['fontSize']['desktop'] . ( $text_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    opacity: 0.8;
}

/* Description */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
    <?php if ( ! empty( $text_typography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $text_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $text_typography['fontSize']['desktop'] . ( $text_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $text_typography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $text_typography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $text_typography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $text_typography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $text_typography['lineHeight']['desktop'] . ( $text_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $text_typography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $text_typography['letterSpacing']['desktop'] . ( $text_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

/* Features section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-features {
	display: flex;
	flex-direction: column;
    <?php if ( 'style1' === $table_style || 'minimal' === $table_style ) : ?>
        padding: 20px;
    <?php endif; ?>
    
    <?php if ( 'style2' === $table_style ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style3' === $table_style ) : ?>
        padding: 20px;
    <?php endif; ?>
    
    <?php if ( 'style4' === $table_style ) : ?>
        padding: 20px 30px;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
    display: flex;
    align-items: center;
    justify-content: <?php echo 'center' === $align ? 'center' : ( 'right' === $align ? 'flex-end' : 'flex-start' ); ?>;
	gap: 10px;
    <?php if ( ! empty( $content_typography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $content_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $content_typography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $content_typography['fontSize']['desktop'] . ( $content_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $content_typography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $content_typography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $content_typography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $content_typography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $content_typography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $content_typography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $content_typography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $content_typography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $content_typography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $content_typography['lineHeight']['desktop'] . ( $content_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $content_typography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $content_typography['letterSpacing']['desktop'] . ( $content_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-icon {
    display: inline-flex;
    align-items: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-check {
    color: #28a745;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-cross {
    color: #dc3545;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-disabled {
    opacity: 0.5;
    text-decoration: line-through;
}

/* Footer section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-footer {
	margin-top: auto;
    text-align: center;
    
    <?php if ( 'style1' === $table_style || 'minimal' === $table_style ) : ?>
        padding: 20px;
        border-top: 1px solid <?php echo esc_attr( $border_color ); ?>;
    <?php endif; ?>
    
    <?php if ( 'style2' === $table_style ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style3' === $table_style ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style4' === $table_style ) : ?>
        padding: 20px 20px 40px;
    <?php endif; ?>
}

/* Button */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
    background-color: <?php echo esc_attr( $button_background_color ); ?>;
    color: <?php echo esc_attr( $button_text_color ); ?>;
    padding: <?php echo esc_attr( $button_padding['desktop']['top'] . $button_padding['desktop']['unit'] . ' ' . $button_padding['desktop']['right'] . $button_padding['desktop']['unit'] . ' ' . $button_padding['desktop']['bottom'] . $button_padding['desktop']['unit'] . ' ' . $button_padding['desktop']['left'] . $button_padding['desktop']['unit'] ); ?>;
    border-radius: <?php echo esc_attr( $button_radius ); ?>px;
    <?php if ( 'none' !== $button_border_style ) : ?>
        border-style: <?php echo esc_attr( $button_border_style ); ?>;
        border-width: <?php echo esc_attr( $button_border_width['desktop']['top'] . $button_border_width['desktop']['unit'] . ' ' . $button_border_width['desktop']['right'] . $button_border_width['desktop']['unit'] . ' ' . $button_border_width['desktop']['bottom'] . $button_border_width['desktop']['unit'] . ' ' . $button_border_width['desktop']['left'] . $button_border_width['desktop']['unit'] ); ?>;
        border-color: <?php echo ! empty( $button_border_color ) ? esc_attr( $button_border_color ) : esc_attr( $button_background_color ); ?>;
    <?php else : ?>
        border: none;
    <?php endif; ?>
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    transition: all 0.3s ease;
    
    <?php if ( ! empty( $button_typography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $button_typography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $button_typography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $button_typography['fontSize']['desktop'] . ( $button_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $button_typography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $button_typography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $button_typography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $button_typography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $button_typography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $button_typography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $button_typography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $button_typography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $button_typography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $button_typography['lineHeight']['desktop'] . ( $button_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $button_typography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $button_typography['letterSpacing']['desktop'] . ( $button_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( 'style4' === $table_style ) : ?>
        padding: 15px 35px;
        border-radius: 50px;
    <?php endif; ?>
    
    <?php if ( 'minimal' === $table_style ) : ?>
        background: transparent;
        border: 1px solid <?php echo esc_attr( $button_background_color ); ?>;
        padding: 10px 25px;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button:hover {
    background-color: <?php echo esc_attr( $button_bg_hover_color ); ?>;
    color: <?php echo esc_attr( $button_text_hover_color ); ?>;

	<?php if ( ! empty( $button_border_hover_color ) && 'none' !== $button_border_style ) : ?>
        border-color: <?php echo esc_attr( $button_border_hover_color ); ?>;
    <?php endif; ?>
    
    <?php if ( 'minimal' === $table_style ) : ?>
        background: #f8f9fa;
    <?php endif; ?>
}

/* Ribbon */
<?php if ( $show_ribbon ) : ?>
    <?php if ( 'corner' === $ribbon_style ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 0;
            <?php echo 'right' === $ribbon_position ? 'right' : 'left'; ?>: 0;
            background: <?php echo esc_attr( $ribbon_background_color ); ?>;
            color: <?php echo esc_attr( $ribbon_text_color ); ?>;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            z-index: 2;
            <?php echo 'right' === $ribbon_position ? 'border-radius: 0 0 0 4px;' : 'border-radius: 0 0 4px 0;'; ?>
        }
    <?php endif; ?>
    
    <?php if ( 'banner' === $ribbon_style ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-highlighted {
            overflow: hidden;
        }

        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 7px;
            <?php echo 'right' === $ribbon_position ? 'right: -24px;' : 'left: -24px;'; ?>
            background: <?php echo esc_attr( $ribbon_background_color ); ?>;
            color: <?php echo esc_attr( $ribbon_text_color ); ?>;
            padding: 5px 30px;
            font-size: 12px;
            font-weight: bold;
            transform: <?php echo 'right' === $ribbon_position ? 'rotate(45deg)' : 'rotate(-45deg)'; ?>;
            z-index: 2;
            transform-origin: center center;
        }
    <?php endif; ?>
    
    <?php if ( 'side' === $ribbon_style ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 30px;
            <?php echo 'right' === $ribbon_position ? 'right' : 'left'; ?>: 0;
            background: <?php echo esc_attr( $ribbon_background_color ); ?>;
            color: <?php echo esc_attr( $ribbon_text_color ); ?>;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: bold;
            <?php echo 'right' === $ribbon_position ? 
                'border-radius: 4px 0 0 4px;' : 
                'border-radius: 0 4px 4px 0;'
            ?>
            z-index: 2;
        }
    <?php endif; ?>
    
    <?php if ( 'flag' === $ribbon_style ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 15px;
            <?php echo 'right' === $ribbon_position ? 'right' : 'left'; ?>: 15px;
            background: <?php echo esc_attr( $ribbon_background_color ); ?>;
            color: <?php echo esc_attr( $ribbon_text_color ); ?>;
            padding: 8px 15px;
            font-size: 12px;
            font-weight: bold;
            border-radius: 50px;
            z-index: 2;
        }
    <?php endif; ?>
<?php endif; ?>

/* Animation if defined */
<?php if ( 'none' !== $animation ) : ?>
.<?php echo esc_attr( $id ); ?> {
    animation-name: <?php echo esc_attr( $animation ); ?>;
    animation-duration: 1s;
    animation-fill-mode: both;
}
<?php endif; ?>

/* Responsive styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-tables-container {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-highlighted {
        transform: none !important;
    }
    
    .<?php echo esc_attr( $id ); ?> {
        margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
        padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
        <?php if ( 'none' !== $border_style ) : ?>
            border-width: <?php echo esc_attr( $border_width['tablet']['top'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['right'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['bottom'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['left'] . $border_width['tablet']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $border_radius['tablet']['top'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['right'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['bottom'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['left'] . $border_radius['tablet']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        padding: <?php echo esc_attr( $button_padding['tablet']['top'] . $button_padding['tablet']['unit'] . ' ' . $button_padding['tablet']['right'] . $button_padding['tablet']['unit'] . ' ' . $button_padding['tablet']['bottom'] . $button_padding['tablet']['unit'] . ' ' . $button_padding['tablet']['left'] . $button_padding['tablet']['unit'] ); ?>;
		<?php if ( 'none' !== $button_border_style ) : ?>
			border-width: <?php echo esc_attr( $button_border_width['tablet']['top'] . $button_border_width['tablet']['unit'] . ' ' . $button_border_width['tablet']['right'] . $button_border_width['tablet']['unit'] . ' ' . $button_border_width['tablet']['bottom'] . $button_border_width['tablet']['unit'] . ' ' . $button_border_width['tablet']['left'] . $button_border_width['tablet']['unit'] ); ?>;
		<?php endif; ?>
    }
    
    /* Title responsive */
    <?php if ( ! empty( $title_typography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
        font-size: <?php echo esc_attr( $title_typography['fontSize']['tablet'] . ( $title_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $title_typography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $title_typography['lineHeight']['tablet'] . ( $title_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $title_typography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $title_typography['letterSpacing']['tablet'] . ( $title_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Price responsive */
    <?php if ( ! empty( $price_typography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
        font-size: <?php echo esc_attr( $price_typography['fontSize']['tablet'] . ( $price_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $price_typography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $price_typography['lineHeight']['tablet'] . ( $price_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $price_typography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $price_typography['letterSpacing']['tablet'] . ( $price_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Text responsive */
    <?php if ( ! empty( $text_typography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period,
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
        font-size: <?php echo esc_attr( $text_typography['fontSize']['tablet'] . ( $text_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $text_typography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $text_typography['lineHeight']['tablet'] . ( $text_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $text_typography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $text_typography['letterSpacing']['tablet'] . ( $text_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Content responsive */
    <?php if ( ! empty( $content_typography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
        font-size: <?php echo esc_attr( $content_typography['fontSize']['tablet'] . ( $content_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $content_typography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $content_typography['lineHeight']['tablet'] . ( $content_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $content_typography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $content_typography['letterSpacing']['tablet'] . ( $content_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Button responsive */
    <?php if ( ! empty( $button_typography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        font-size: <?php echo esc_attr( $button_typography['fontSize']['tablet'] . ( $button_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $button_typography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $button_typography['lineHeight']['tablet'] . ( $button_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $button_typography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $button_typography['letterSpacing']['tablet'] . ( $button_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-tables-container {
        grid-template-columns: 1fr;
    }
    
    .<?php echo esc_attr( $id ); ?> {
        margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
        padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
        <?php if ( 'none' !== $border_style ) : ?>
            border-width: <?php echo esc_attr( $border_width['tablet']['top'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['right'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['bottom'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['left'] . $border_width['tablet']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $border_radius['mobile']['top'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['right'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['bottom'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['left'] . $border_radius['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        padding: <?php echo esc_attr( $button_padding['mobile']['top'] . $button_padding['mobile']['unit'] . ' ' . $button_padding['mobile']['right'] . $button_padding['mobile']['unit'] . ' ' . $button_padding['mobile']['bottom'] . $button_padding['mobile']['unit'] . ' ' . $button_padding['mobile']['left'] . $button_padding['mobile']['unit'] ); ?>;
		<?php if ( 'none' !== $button_border_style ) : ?>
			border-width: <?php echo esc_attr( $button_border_width['tablet']['top'] . $button_border_width['tablet']['unit'] . ' ' . $button_border_width['tablet']['right'] . $button_border_width['tablet']['unit'] . ' ' . $button_border_width['tablet']['bottom'] . $button_border_width['tablet']['unit'] . ' ' . $button_border_width['tablet']['left'] . $button_border_width['tablet']['unit'] ); ?>;
		<?php endif; ?>
    }
    
    /* Title responsive */
    <?php if ( ! empty( $title_typography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
        font-size: <?php echo esc_attr( $title_typography['fontSize']['mobile'] . ( $title_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $title_typography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $title_typography['lineHeight']['mobile'] . ( $title_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $title_typography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $title_typography['letterSpacing']['mobile'] . ( $title_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Price responsive */
    <?php if ( ! empty( $price_typography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
        font-size: <?php echo esc_attr( $price_typography['fontSize']['mobile'] . ( $price_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $price_typography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $price_typography['lineHeight']['mobile'] . ( $price_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $price_typography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $price_typography['letterSpacing']['mobile'] . ( $price_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Text responsive */
    <?php if ( ! empty( $text_typography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period,
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
        font-size: <?php echo esc_attr( $text_typography['fontSize']['mobile'] . ( $text_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $text_typography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $text_typography['lineHeight']['mobile'] . ( $text_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $text_typography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $text_typography['letterSpacing']['mobile'] . ( $text_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Content responsive */
    <?php if ( ! empty( $content_typography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
        font-size: <?php echo esc_attr( $content_typography['fontSize']['mobile'] . ( $content_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $content_typography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $content_typography['lineHeight']['mobile'] . ( $content_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $content_typography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $content_typography['letterSpacing']['mobile'] . ( $content_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Button responsive */
    <?php if ( ! empty( $button_typography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        font-size: <?php echo esc_attr( $button_typography['fontSize']['mobile'] . ( $button_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $button_typography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $button_typography['lineHeight']['mobile'] . ( $button_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $button_typography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $button_typography['letterSpacing']['mobile'] . ( $button_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();