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
$id                           = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$columns                      = isset( $attrs['columns'] ) ? $attrs['columns'] : array();
$column_gap                   = isset( $attrs['columnGap'] ) ? $attrs['columnGap'] : 30;
$header_background_color      = isset( $attrs['headerBackgroundColor'] ) ? $attrs['headerBackgroundColor'] : '#f8f9fa';
$header_text_color            = isset( $attrs['headerTextColor'] ) ? $attrs['headerTextColor'] : '#333333';
$body_background_color        = isset( $attrs['bodyBackgroundColor'] ) ? $attrs['bodyBackgroundColor'] : '#ffffff';
$body_text_color              = isset( $attrs['bodyTextColor'] ) ? $attrs['bodyTextColor'] : '#666666';
$featured_column_highlight    = isset( $attrs['featuredColumnHighlightColor'] ) ? $attrs['featuredColumnHighlightColor'] : '#4a6cf7';
$button_background_color      = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$button_background_hover      = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3151d3';
$button_text_color            = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$button_text_hover_color      = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : $button_text_color;
$text_align                   = isset( $attrs['textAlign'] ) ? $attrs['textAlign'] : 'center';
$ribbon_style                 = isset( $attrs['ribbonStyle'] ) ? $attrs['ribbonStyle'] : 'none';
$ribbon_color                 = isset( $attrs['ribbonColor'] ) ? $attrs['ribbonColor'] : '#4a6cf7';
$ribbon_text_color            = isset( $attrs['ribbonTextColor'] ) ? $attrs['ribbonTextColor'] : '#ffffff';
$icon_included_color          = isset( $attrs['iconIncludedColor'] ) ? $attrs['iconIncludedColor'] : '#28a745';
$icon_excluded_color          = isset( $attrs['iconExcludedColor'] ) ? $attrs['iconExcludedColor'] : '#dc3545';
$animation                    = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';

// Get border properties
$border_style                 = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$border_color                 = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';

// Get box shadow
$box_shadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.1)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);

$box_shadow_hover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);

// Get responsive border width (with fallback)
$border_width = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
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

// Get border radius (with responsive fallback)
$border_radius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
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

// Get padding (with responsive fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
	'desktop' => array(
		'top'    => 30,
		'right'  => 30,
		'bottom' => 30,
		'left'   => 30,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 25,
		'right'  => 25,
		'bottom' => 25,
		'left'   => 25,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 20,
		'right'  => 20,
		'bottom' => 20,
		'left'   => 20,
		'unit'   => 'px',
	),
);

// Get margin (with responsive fallback)
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
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
		'bottom' => 30,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 30,
		'left'   => 0,
		'unit'   => 'px',
	),
);

// Get typography settings with default values
$title_typography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 24,
		'tablet'  => 22,
		'mobile'  => 20,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
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

$price_typography = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 48,
		'tablet'  => 42,
		'mobile'  => 36,
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

$features_typography = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
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

$button_typography = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
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

// CSS Output
ob_start();
?>
/* Pricing Table Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
	transition: all 0.3s ease;
}

/* Pricing Table Container */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: <?php echo esc_attr( $column_gap ); ?>px;
	align-items: stretch;
}

/* Pricing Column */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-column {
	flex: 1;
	flex-basis: 0;
	min-width: 250px;
	display: flex;
	flex-direction: column;
	text-align: <?php echo esc_attr( $text_align ); ?>;
	<?php if ( 'none' !== $border_style ) : ?>
		border-style: <?php echo esc_attr( $border_style ); ?>;
		border-color: <?php echo esc_attr( $border_color ); ?>;
		border-width: <?php echo esc_attr( $border_width['desktop']['top'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['right'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['bottom'] . $border_width['desktop']['unit'] . ' ' . $border_width['desktop']['left'] . $border_width['desktop']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $border_radius['desktop']['top'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['right'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['bottom'] . $border_radius['desktop']['unit'] . ' ' . $border_radius['desktop']['left'] . $border_radius['desktop']['unit'] ); ?>;
	<?php else : ?>
		border: none;
	<?php endif; ?>
	<?php echo digiblocks_get_box_shadow_css( $box_shadow ); ?>
	overflow: hidden;
	transition: all 0.3s ease;
	position: relative;
	background-color: #fff;
}

/* Featured Column */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-column.is-featured {
	<?php if ( $featured_column_highlight ) : ?>
	border-color: <?php echo esc_attr( $featured_column_highlight ); ?>;
	<?php endif; ?>
	transform: translateY(-10px);
	<?php if ( isset( $box_shadow['enable'] ) && $box_shadow['enable'] ) : ?>
		<?php echo digiblocks_get_box_shadow_css( $box_shadow ); ?>
	<?php else : ?>
		box-shadow: 0 8px 24px rgba(0,0,0,0.15);
	<?php endif; ?>
	z-index: 2;
}

/* Hover effects */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-column:hover {
	<?php if ( isset( $box_shadow_hover['enable'] ) && $box_shadow_hover['enable'] ) : ?>
		<?php echo digiblocks_get_box_shadow_css( $box_shadow_hover ); ?>
	<?php endif; ?>
	transform: translateY(-5px);
}

/* Header Section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-header {
	padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
	background-color: <?php echo esc_attr( $header_background_color ); ?>;
	color: <?php echo esc_attr( $header_text_color ); ?>;
}

/* Title */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-title {
	margin-top: 0;
	margin-bottom: 10px;
	color: <?php echo esc_attr( $header_text_color ); ?>;
	
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

/* Subtitle */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-subtitle {
	margin-top: 0;
	margin-bottom: 20px;
	opacity: 0.8;
	color: <?php echo esc_attr( $header_text_color ); ?>;
}

/* Price Container */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-price-container {
	margin-bottom: 10px;
}

/* Price */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-price {
	display: flex;
	align-items: center;
	justify-content: center;
	color: <?php echo esc_attr( $header_text_color ); ?>;
	
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
}

/* Currency */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-currency {
	font-size: 0.5em;
	align-self: flex-start;
	margin-top: 0.5em;
}

/* Price Amount */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-amount {
	/* No specific styling needed beyond what's in the parent */
}

/* Period */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-period {
	font-size: 0.3em;
	opacity: 0.7;
	align-self: flex-end;
}

/* Content/Body Section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-body {
	padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
	background-color: <?php echo esc_attr( $body_background_color ); ?>;
	color: <?php echo esc_attr( $body_text_color ); ?>;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}

/* Features List */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-features {
	list-style: none;
	padding: 0;
	margin: 0;
	margin-bottom: 20px;
	flex-grow: 1;
}

/* Feature Item */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-item {
	padding: 10px 0;
	display: flex;
	align-items: center;
	<?php if ( 'center' === $text_align ) : ?>
	justify-content: center;
	<?php endif; ?>
	<?php if ( 'none' !== $border_style ) : ?>
	border-bottom: 1px solid <?php echo esc_attr( $border_color ); ?>20;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['fontFamily'] ) ) : ?>
	font-family: <?php echo esc_attr( $features_typography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['fontSize']['desktop'] ) ) : ?>
	font-size: <?php echo esc_attr( $features_typography['fontSize']['desktop'] . ( $features_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['fontWeight'] ) ) : ?>
	font-weight: <?php echo esc_attr( $features_typography['fontWeight'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['fontStyle'] ) ) : ?>
	font-style: <?php echo esc_attr( $features_typography['fontStyle'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['textTransform'] ) ) : ?>
	text-transform: <?php echo esc_attr( $features_typography['textTransform'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['textDecoration'] ) ) : ?>
	text-decoration: <?php echo esc_attr( $features_typography['textDecoration'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['lineHeight']['desktop'] ) ) : ?>
	line-height: <?php echo esc_attr( $features_typography['lineHeight']['desktop'] . ( $features_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $features_typography['letterSpacing']['desktop'] ) ) : ?>
	letter-spacing: <?php echo esc_attr( $features_typography['letterSpacing']['desktop'] . ( $features_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-item:last-child {
	border-bottom: none;
}

/* Feature Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-icon {
	margin-right: 8px;
	flex-shrink: 0;
}

/* Included Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-icon.included svg {
	color: <?php echo esc_attr( $icon_included_color ); ?>;
}

/* Excluded Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-icon.excluded svg {
	color: <?php echo esc_attr( $icon_excluded_color ); ?>;
}

/* Feature Text */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-text {
	flex-grow: 1;
}

/* Button */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-button {
	display: inline-block;
	padding: 10px 20px;
	background-color: <?php echo esc_attr( $button_background_color ); ?>;
	color: <?php echo esc_attr( $button_text_color ); ?>;
	border-radius: 4px;
	text-decoration: none;
	transition: all 0.3s ease;
	cursor: pointer;
	
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
}

/* Button Hover */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-button:hover {
	background-color: <?php echo esc_attr( $button_background_hover ); ?>;
	color: <?php echo esc_attr( $button_text_hover_color ); ?>;
}

/* Featured Button */
.<?php echo esc_attr( $id ); ?> .is-featured .digiblocks-pricing-button {
	transform: scale(1.05);
}

/* Responsive Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
		margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-column {
		<?php if ( 'none' !== $border_style && isset( $border_width['tablet']) && isset( $border_radius['tablet'] ) ) : ?>
		border-width: <?php echo esc_attr( $border_width['tablet']['top'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['right'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['bottom'] . $border_width['tablet']['unit'] . ' ' . $border_width['tablet']['left'] . $border_width['tablet']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $border_radius['tablet']['top'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['right'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['bottom'] . $border_radius['tablet']['unit'] . ' ' . $border_radius['tablet']['left'] . $border_radius['tablet']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-header,
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-body {
		<?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
		padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-title {
		<?php if ( isset( $title_typography['fontSize']['tablet'] ) ) : ?>
		font-size: <?php echo esc_attr( $title_typography['fontSize']['tablet'] . ( $title_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $title_typography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $title_typography['lineHeight']['tablet'] . ( $title_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $title_typography['letterSpacing']['tablet'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $title_typography['letterSpacing']['tablet'] . ( $title_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-price {
		<?php if ( isset( $price_typography['fontSize']['tablet'] ) ) : ?>
		font-size: <?php echo esc_attr( $price_typography['fontSize']['tablet'] . ( $price_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $price_typography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $price_typography['lineHeight']['tablet'] . ( $price_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $price_typography['letterSpacing']['tablet'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $price_typography['letterSpacing']['tablet'] . ( $price_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-item {
		<?php if ( isset( $features_typography['fontSize']['tablet'] ) ) : ?>
		font-size: <?php echo esc_attr( $features_typography['fontSize']['tablet'] . ( $features_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $features_typography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $features_typography['lineHeight']['tablet'] . ( $features_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $features_typography['letterSpacing']['tablet'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $features_typography['letterSpacing']['tablet'] . ( $features_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-button {
		<?php if ( isset( $button_typography['fontSize']['tablet'] ) ) : ?>
		font-size: <?php echo esc_attr( $button_typography['fontSize']['tablet'] . ( $button_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $button_typography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $button_typography['lineHeight']['tablet'] . ( $button_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $button_typography['letterSpacing']['tablet'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $button_typography['letterSpacing']['tablet'] . ( $button_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
}

@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
		margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
		flex-direction: column;
		align-items: center;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-column {
		width: 100%;
		max-width: 100%;
		margin-bottom: 30px;
		
		<?php if ( 'none' !== $border_style && isset( $border_width['mobile']) && isset( $border_radius['mobile'] ) ) : ?>
		border-width: <?php echo esc_attr( $border_width['mobile']['top'] . $border_width['mobile']['unit'] . ' ' . $border_width['mobile']['right'] . $border_width['mobile']['unit'] . ' ' . $border_width['mobile']['bottom'] . $border_width['mobile']['unit'] . ' ' . $border_width['mobile']['left'] . $border_width['mobile']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $border_radius['mobile']['top'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['right'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['bottom'] . $border_radius['mobile']['unit'] . ' ' . $border_radius['mobile']['left'] . $border_radius['mobile']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-header,
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-body {
		<?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
		padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-title {
		<?php if ( isset( $title_typography['fontSize']['mobile'] ) ) : ?>
		font-size: <?php echo esc_attr( $title_typography['fontSize']['mobile'] . ( $title_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $title_typography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $title_typography['lineHeight']['mobile'] . ( $title_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $title_typography['letterSpacing']['mobile'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $title_typography['letterSpacing']['mobile'] . ( $title_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-price {
		<?php if ( isset( $price_typography['fontSize']['mobile'] ) ) : ?>
		font-size: <?php echo esc_attr( $price_typography['fontSize']['mobile'] . ( $price_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $price_typography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $price_typography['lineHeight']['mobile'] . ( $price_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $price_typography['letterSpacing']['mobile'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $price_typography['letterSpacing']['mobile'] . ( $price_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-feature-item {
		<?php if ( isset( $features_typography['fontSize']['mobile'] ) ) : ?>
		font-size: <?php echo esc_attr( $features_typography['fontSize']['mobile'] . ( $features_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $features_typography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $features_typography['lineHeight']['mobile'] . ( $features_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $features_typography['letterSpacing']['mobile'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $features_typography['letterSpacing']['mobile'] . ( $features_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-button {
		<?php if ( isset( $button_typography['fontSize']['mobile'] ) ) : ?>
		font-size: <?php echo esc_attr( $button_typography['fontSize']['mobile'] . ( $button_typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $button_typography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $button_typography['lineHeight']['mobile'] . ( $button_typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $button_typography['letterSpacing']['mobile'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $button_typography['letterSpacing']['mobile'] . ( $button_typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	/* Featured column adjustments for mobile */
	.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-column.is-featured {
		transform: translateY(0);
		margin-top: -10px;
		margin-bottom: 40px;
	}
}

<?php if ( 'none' !== $ribbon_style ) : ?>
/* Ribbon Styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-ribbon {
	position: absolute;
	z-index: 2;
	overflow: hidden;
	
	<?php if ( 'corner' === $ribbon_style ) : ?>
	width: 150px;
	height: 150px;
	top: -10px;
	right: -10px;
	
	.digiblocks-pricing-ribbon-text {
		position: absolute;
		transform: rotate(45deg);
		right: -40px;
		top: 30px;
		width: 200px;
		background-color: <?php echo esc_attr( $ribbon_color ); ?>;
		color: <?php echo esc_attr( $ribbon_text_color ); ?>;
		text-align: center;
		padding: 5px 0;
		font-size: 0.85em;
		font-weight: bold;
		text-transform: uppercase;
		box-shadow: 0 3px 10px rgba(0,0,0,0.1);
	}
	<?php endif; ?>
	
	<?php if ( 'top' === $ribbon_style ) : ?>
	top: 0;
	left: 0;
	right: 0;
	text-align: center;
	
	.digiblocks-pricing-ribbon-text {
		display: inline-block;
		background-color: <?php echo esc_attr( $ribbon_color ); ?>;
		color: <?php echo esc_attr( $ribbon_text_color ); ?>;
		padding: 5px 15px;
		font-size: 0.85em;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 0 0 4px 4px;
	}
	<?php endif; ?>
	
	<?php if ( 'side' === $ribbon_style ) : ?>
	top: 20px;
	left: -10px;
	
	.digiblocks-pricing-ribbon-text {
		display: inline-block;
		background-color: <?php echo esc_attr( $ribbon_color ); ?>;
		color: <?php echo esc_attr( $ribbon_text_color ); ?>;
		padding: 5px 15px;
		font-size: 0.85em;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 0 4px 4px 0;
		position: relative;
	}
	
	.digiblocks-pricing-ribbon-text:before {
		content: '';
		position: absolute;
		top: 100%;
		left: 0;
		border-style: solid;
		border-width: 0 10px 10px 0;
		border-color: transparent <?php echo esc_attr( $ribbon_color ); ?>88 transparent transparent;
	}
	<?php endif; ?>
}
<?php endif; ?>

<?php if ( 'none' !== $animation ) : ?>
/* Animation */
.<?php echo esc_attr( $id ); ?>.animate-<?php echo esc_attr( $animation ); ?> {
	animation: <?php echo esc_attr( $animation ); ?> 1s ease forwards;
}
<?php endif; ?>

<?php
$digiblocks_css_output = ob_get_clean();