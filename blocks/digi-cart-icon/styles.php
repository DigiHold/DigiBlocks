<?php
/**
 * DigiCommerce Cart Icon Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes.
$id                               = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility                       = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$iconType                         = isset( $attrs['iconType'] ) ? $attrs['iconType'] : 'cart';
$customIcon                       = isset( $attrs['customIcon'] ) ? $attrs['customIcon'] : '';
$showCount                        = isset( $attrs['showCount'] ) ? $attrs['showCount'] : true;
$showText                         = isset( $attrs['showText'] ) ? $attrs['showText'] : false;
$showTotal                        = isset( $attrs['showTotal'] ) ? $attrs['showTotal'] : false;
$showMiniCart                     = isset( $attrs['showMiniCart'] ) ? $attrs['showMiniCart'] : false;
$hideOnEmpty                      = isset( $attrs['hideOnEmpty'] ) ? $attrs['hideOnEmpty'] : false;
$layout                           = isset( $attrs['layout'] ) ? $attrs['layout'] : array(
    'desktop' => 'horizontal',
    'tablet'  => 'horizontal',
    'mobile'  => 'horizontal',
);
$align                            = isset( $attrs['align'] ) ? $attrs['align'] : array(
    'desktop' => 'center',
    'tablet'  => 'center',
    'mobile'  => 'center',
);
$iconSize                         = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 24,
    'tablet'  => 22,
    'mobile'  => 20,
);
$iconColor                        = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#333333';
$iconHoverColor                   = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '#1e73be';
$countColor                       = isset( $attrs['countColor'] ) ? $attrs['countColor'] : '#ffffff';
$countBackgroundColor             = isset( $attrs['countBackgroundColor'] ) ? $attrs['countBackgroundColor'] : '#4a6cf7';
$countHoverColor                  = isset( $attrs['countHoverColor'] ) ? $attrs['countHoverColor'] : '#ffffff';
$countHoverBackgroundColor        = isset( $attrs['countHoverBackgroundColor'] ) ? $attrs['countHoverBackgroundColor'] : '#3a5ce5';
$textColor                        = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$textHoverColor                   = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '#1e73be';
$totalColor                       = isset( $attrs['totalColor'] ) ? $attrs['totalColor'] : '#333333';
$totalHoverColor                  = isset( $attrs['totalHoverColor'] ) ? $attrs['totalHoverColor'] : '#1e73be';
$backgroundColor                  = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : 'transparent';
$backgroundHoverColor             = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$borderStyle                      = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth                      = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : digiblocks_get_default_dimensions('px');
$borderRadius                     = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => array( 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' ),
    'tablet'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
    'mobile'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
);
$borderColor                      = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor                 = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$spacing                          = isset( $attrs['spacing'] ) ? $attrs['spacing'] : array(
    'desktop' => 8,
    'tablet'  => 6,
    'mobile'  => 4,
);
$padding                          = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array( 'top' => 8, 'right' => 12, 'bottom' => 8, 'left' => 12, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 6, 'right' => 10, 'bottom' => 6, 'left' => 10, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 4, 'right' => 8, 'bottom' => 4, 'left' => 8, 'unit' => 'px' ),
);
$margin                           = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$typography                       = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array( 'desktop' => 16, 'tablet' => 15, 'mobile' => 14 ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '500',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array( 'desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2 ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
    'letterSpacingUnit' => 'px',
);
$textTypography                   = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array( 'desktop' => 12, 'tablet' => 11, 'mobile' => 10 ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array( 'desktop' => 1, 'tablet' => 1, 'mobile' => 1 ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
    'letterSpacingUnit' => 'px',
);
$animation                        = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$hoverEffect                      = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';

// Mini Cart Settings
$miniCartWidth                    = isset( $attrs['miniCartWidth'] ) ? $attrs['miniCartWidth'] : array(
    'desktop' => 350,
    'tablet'  => 320,
    'mobile'  => 300,
);
$miniCartWidthDesktop             = isset($miniCartWidth['desktop']) && is_numeric($miniCartWidth['desktop']) ? $miniCartWidth['desktop'] : 350;
$miniCartWidthTablet              = isset($miniCartWidth['tablet']) && is_numeric($miniCartWidth['tablet']) ? $miniCartWidth['tablet'] : 320;
$miniCartWidthMobile              = isset($miniCartWidth['mobile']) && is_numeric($miniCartWidth['mobile']) ? $miniCartWidth['mobile'] : 300;
$miniCartPosition                 = isset( $attrs['miniCartPosition'] ) ? $attrs['miniCartPosition'] : 'right';
$miniCartBackgroundColor          = isset( $attrs['miniCartBackgroundColor'] ) ? $attrs['miniCartBackgroundColor'] : '#ffffff';
$miniCartBorderColor              = isset( $attrs['miniCartBorderColor'] ) ? $attrs['miniCartBorderColor'] : '#e0e0e0';
$miniCartTextColor                = isset( $attrs['miniCartTextColor'] ) ? $attrs['miniCartTextColor'] : '#333333';
$miniCartHeadingColor             = isset( $attrs['miniCartHeadingColor'] ) ? $attrs['miniCartHeadingColor'] : '#333333';
$miniCartPriceColor               = isset( $attrs['miniCartPriceColor'] ) ? $attrs['miniCartPriceColor'] : '#666666';
$miniCartTotalColor               = isset( $attrs['miniCartTotalColor'] ) ? $attrs['miniCartTotalColor'] : '#333333';
$miniCartButtonBackgroundColor    = isset( $attrs['miniCartButtonBackgroundColor'] ) ? $attrs['miniCartButtonBackgroundColor'] : '#1e73be';
$miniCartButtonTextColor          = isset( $attrs['miniCartButtonTextColor'] ) ? $attrs['miniCartButtonTextColor'] : '#ffffff';
$miniCartButtonHoverBackgroundColor = isset( $attrs['miniCartButtonHoverBackgroundColor'] ) ? $attrs['miniCartButtonHoverBackgroundColor'] : '#135e9e';
$miniCartButtonHoverTextColor     = isset( $attrs['miniCartButtonHoverTextColor'] ) ? $attrs['miniCartButtonHoverTextColor'] : '#ffffff';
$miniCartRemoveColor              = isset( $attrs['miniCartRemoveColor'] ) ? $attrs['miniCartRemoveColor'] : '#4a6cf7';
$miniCartRemoveHoverColor         = isset( $attrs['miniCartRemoveHoverColor'] ) ? $attrs['miniCartRemoveHoverColor'] : '#3a5ce5';
$miniCartTypography               = isset( $attrs['miniCartTypography'] ) ? $attrs['miniCartTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array( 'desktop' => 14, 'tablet' => 13, 'mobile' => 12 ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array( 'desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2 ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
    'letterSpacingUnit' => 'px',
);
$miniCartHeadingTypography        = isset( $attrs['miniCartHeadingTypography'] ) ? $attrs['miniCartHeadingTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array( 'desktop' => 18, 'tablet' => 17, 'mobile' => 16 ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array( 'desktop' => 1.3, 'tablet' => 1.2, 'mobile' => 1.1 ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
    'letterSpacingUnit' => 'px',
);
$miniCartButtonTypography         = isset( $attrs['miniCartButtonTypography'] ) ? $attrs['miniCartButtonTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array( 'desktop' => 14, 'tablet' => 13, 'mobile' => 12 ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array( 'desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2 ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
    'letterSpacingUnit' => 'px',
);

// CSS Output
ob_start();
?>
/* DigiCommerce Cart Icon Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
	position: relative;
	display: flex;
	<?php if ( $align['desktop'] === 'center' ) : ?>
        justify-content: center;
		text-align: center;
    <?php elseif ( $align['desktop'] === 'flex-end' ) : ?>
        justify-content: flex-end;
		text-align: right;
    <?php else : ?>
        justify-content: flex-start;
		text-align: left;
    <?php endif; ?>
	width: auto;
}

/* Cart Link */
.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link {
	display: inline-flex;
	align-items: center;
	flex-direction: <?php echo esc_attr( $layout['desktop'] === 'vertical' ? 'column' : 'row' ); ?>;
	gap: <?php echo esc_attr( $spacing['desktop'] ); ?>px;
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	
	<?php if ( $borderStyle && 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php else : ?>
		border: none;
	<?php endif; ?>
	
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	
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
	
	color: inherit;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
}

/* Hover effects */
.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link:hover {
	<?php if ( $backgroundHoverColor ) : ?>
		background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $borderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( 'scale' === $hoverEffect ) : ?>
		transform: scale(1.05);
	<?php elseif ( 'bounce' === $hoverEffect ) : ?>
		animation: digiblocks-bounce 0.6s;
	<?php elseif ( 'pulse' === $hoverEffect ) : ?>
		animation: digiblocks-pulse 0.6s;
	<?php endif; ?>
}

/* Icon container */
.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-icon {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Cart icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-icon svg {
	width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
	height: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
	fill: <?php echo esc_attr( $iconColor ); ?>;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link:hover .digiblocks-cart-icon-icon svg {
	fill: <?php echo esc_attr( $iconHoverColor ); ?>;
}

<?php if ( $showCount ) : ?>
/* Cart count */
.<?php echo esc_attr( $id ); ?> .digiblocks-cart-count {
	position: absolute;
	top: -8px;
	right: -8px;
	background-color: <?php echo esc_attr( $countBackgroundColor ); ?>;
	color: <?php echo esc_attr( $countColor ); ?>;
	border-radius: 50%;
	min-width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	
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

.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link:hover .digiblocks-cart-count {
	background-color: <?php echo esc_attr( $countHoverBackgroundColor ); ?>;
	color: <?php echo esc_attr( $countHoverColor ); ?>;
}
<?php endif; ?>

<?php if ( $showText ) : ?>
/* Cart text */
.<?php echo esc_attr( $id ); ?> .digiblocks-cart-text {
	color: <?php echo esc_attr( $textColor ); ?>;
	transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link:hover .digiblocks-cart-text {
	color: <?php echo esc_attr( $textHoverColor ); ?>;
}
<?php endif; ?>

<?php if ( $showTotal ) : ?>
/* Cart total */
.<?php echo esc_attr( $id ); ?> .digiblocks-cart-total {
	color: <?php echo esc_attr( $totalColor ); ?>;
	transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link:hover .digiblocks-cart-total {
	color: <?php echo esc_attr( $totalHoverColor ); ?>;
}
<?php endif; ?>

<?php if ( $showMiniCart ) : ?>
/* Mini Cart */
.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart {
	position: absolute;
	top: 100%;
	<?php echo esc_attr( $miniCartPosition === 'left' ? 'left: 0;' : 'right: 0;' ); ?>
	width: <?php echo esc_attr( $miniCartWidthDesktop ); ?>px;
	background-color: <?php echo esc_attr( $miniCartBackgroundColor ); ?>;
	border: 1px solid <?php echo esc_attr( $miniCartBorderColor ); ?>;
	border-radius: 8px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin-top: 10px;
	opacity: 0;
	visibility: hidden;
	transform: translateY(-10px);
	transition: all 0.3s ease;
	z-index: 9999;
	max-height: 400px;
	overflow-y: auto;
	
	<?php if ( ! empty( $miniCartTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $miniCartTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $miniCartTypography['fontSize']['desktop'] . ( $miniCartTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $miniCartTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartTypography['fontStyle'] ) ) : ?>
		font-style: <?php echo esc_attr( $miniCartTypography['fontStyle'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartTypography['lineHeight']['desktop'] ) ) : ?>
		line-height: <?php echo esc_attr( $miniCartTypography['lineHeight']['desktop'] . ( $miniCartTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
	
	color: <?php echo esc_attr( $miniCartTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-mini-cart {
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
	padding-bottom: 10px;
	border-bottom: 1px solid <?php echo esc_attr( $miniCartBorderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-title {
	margin: 0;
	color: <?php echo esc_attr( $miniCartHeadingColor ); ?>;
	
	<?php if ( ! empty( $miniCartHeadingTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $miniCartHeadingTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartHeadingTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $miniCartHeadingTypography['fontSize']['desktop'] . ( $miniCartHeadingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartHeadingTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $miniCartHeadingTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartHeadingTypography['lineHeight']['desktop'] ) ) : ?>
		line-height: <?php echo esc_attr( $miniCartHeadingTypography['lineHeight']['desktop'] . ( $miniCartHeadingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-close {
	background: none;
	border: none;
	font-size: 18px;
	cursor: pointer;
	color: <?php echo esc_attr( $miniCartRemoveColor ); ?>;
	transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-close:hover {
	color: <?php echo esc_attr( $miniCartRemoveHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-items {
	margin-bottom: 15px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid <?php echo esc_attr( $miniCartBorderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item:last-child {
	margin-bottom: 0;
	padding-bottom: 0;
	border-bottom: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item-details {
	flex: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item-name {
	margin: 0 0 5px 0;
	font-weight: 500;
	color: <?php echo esc_attr( $miniCartTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item-name a {
	color: inherit;
	text-decoration: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item-name a:hover {
	text-decoration: underline;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item-price {
	margin: 0;
	color: <?php echo esc_attr( $miniCartPriceColor ); ?>;
	font-size: 0.9em;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item-remove {
	background: none;
	border: none;
	color: <?php echo esc_attr( $miniCartRemoveColor ); ?>;
	cursor: pointer;
	font-size: 16px;
	padding: 5px;
	transition: color 0.3s ease;
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-item-remove:hover {
	color: <?php echo esc_attr( $miniCartRemoveHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-total {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	border-top: 1px solid <?php echo esc_attr( $miniCartBorderColor ); ?>;
	margin-bottom: 15px;
	font-weight: 600;
	color: <?php echo esc_attr( $miniCartTotalColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-buttons {
	display: flex;
	gap: 10px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-button {
	flex: 1;
	padding: 10px 15px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
	transition: all 0.3s ease;
	display: inline-block;
	
	<?php if ( ! empty( $miniCartButtonTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $miniCartButtonTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartButtonTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $miniCartButtonTypography['fontSize']['desktop'] . ( $miniCartButtonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartButtonTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $miniCartButtonTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $miniCartButtonTypography['lineHeight']['desktop'] ) ) : ?>
		line-height: <?php echo esc_attr( $miniCartButtonTypography['lineHeight']['desktop'] . ( $miniCartButtonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-button.primary {
	background-color: <?php echo esc_attr( $miniCartButtonBackgroundColor ); ?>;
	color: <?php echo esc_attr( $miniCartButtonTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-button.primary:hover {
	background-color: <?php echo esc_attr( $miniCartButtonHoverBackgroundColor ); ?>;
	color: <?php echo esc_attr( $miniCartButtonHoverTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-button.secondary {
	background-color: transparent;
	color: <?php echo esc_attr( $miniCartButtonBackgroundColor ); ?>;
	border: 1px solid <?php echo esc_attr( $miniCartButtonBackgroundColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-button.secondary:hover {
	background-color: <?php echo esc_attr( $miniCartButtonBackgroundColor ); ?>;
	color: <?php echo esc_attr( $miniCartButtonTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-empty {
	text-align: center;
	color: <?php echo esc_attr( $miniCartTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-empty p {
	margin: 0;
}
<?php endif; ?>

/* Animation keyframes */
@keyframes digiblocks-bounce {
	0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
	40%, 43% { transform: translate3d(0,-30px,0) scale(1.05); }
	70% { transform: translate3d(0,-15px,0) scale(1.05); }
	90% { transform: translate3d(0,-4px,0) scale(1.05); }
}

@keyframes digiblocks-pulse {
	0% { transform: scale(1); }
	50% { transform: scale(1.1); }
	100% { transform: scale(1); }
}

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( $align['tablet'] === 'center' ) : ?>
			justify-content: center;
			text-align: center;
		<?php elseif ( $align['tablet'] === 'flex-end' ) : ?>
			justify-content: flex-end;
			text-align: right;
		<?php else : ?>
			justify-content: flex-start;
			text-align: left;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link {
		flex-direction: <?php echo esc_attr( $layout['tablet'] === 'vertical' ? 'column' : 'row' ); ?>;
		gap: <?php echo esc_attr( $spacing['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		
		<?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
			font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
			line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
		
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-icon svg {
		width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
		height: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
	}
	
	<?php if ( $showCount ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-cart-count {
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
	<?php endif; ?>
	
	<?php if ( $showMiniCart ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart {
			width: <?php echo esc_attr( $miniCartWidthTablet ); ?>px;
			
			<?php if ( ! empty( $miniCartTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $miniCartTypography['fontSize']['tablet'] . ( $miniCartTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $miniCartTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $miniCartTypography['lineHeight']['tablet'] . ( $miniCartTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-title {
			<?php if ( ! empty( $miniCartHeadingTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $miniCartHeadingTypography['fontSize']['tablet'] . ( $miniCartHeadingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $miniCartHeadingTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $miniCartHeadingTypography['lineHeight']['tablet'] . ( $miniCartHeadingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-button {
			<?php if ( ! empty( $miniCartButtonTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $miniCartButtonTypography['fontSize']['tablet'] . ( $miniCartButtonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $miniCartButtonTypography['lineHeight']['tablet'] ) ) : ?>
				line-height: <?php echo esc_attr( $miniCartButtonTypography['lineHeight']['tablet'] . ( $miniCartButtonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( $align['mobile'] === 'center' ) : ?>
			justify-content: center;
			text-align: center;
		<?php elseif ( $align['mobile'] === 'flex-end' ) : ?>
			justify-content: flex-end;
			text-align: right;
		<?php else : ?>
			justify-content: flex-start;
			text-align: left;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-link {
		flex-direction: <?php echo esc_attr( $layout['mobile'] === 'vertical' ? 'column' : 'row' ); ?>;
		gap: <?php echo esc_attr( $spacing['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		
		<?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
			font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
			line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
		
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-cart-icon-icon svg {
		width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
		height: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
	}
	
	<?php if ( $showCount ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-cart-count {
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
	<?php endif; ?>
	
	<?php if ( $showMiniCart ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart {
			width: <?php echo esc_attr( $miniCartWidthMobile ); ?>px;
			
			<?php if ( ! empty( $miniCartTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $miniCartTypography['fontSize']['mobile'] . ( $miniCartTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $miniCartTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $miniCartTypography['lineHeight']['mobile'] . ( $miniCartTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-title {
			<?php if ( ! empty( $miniCartHeadingTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $miniCartHeadingTypography['fontSize']['mobile'] . ( $miniCartHeadingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $miniCartHeadingTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $miniCartHeadingTypography['lineHeight']['mobile'] . ( $miniCartHeadingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-mini-cart-button {
			<?php if ( ! empty( $miniCartButtonTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $miniCartButtonTypography['fontSize']['mobile'] . ( $miniCartButtonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
			
			<?php if ( ! empty( $miniCartButtonTypography['lineHeight']['mobile'] ) ) : ?>
				line-height: <?php echo esc_attr( $miniCartButtonTypography['lineHeight']['mobile'] . ( $miniCartButtonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
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

/* Hide when empty (if enabled) */
<?php if ( $hideOnEmpty ) : ?>
.<?php echo esc_attr( $id ); ?>.cart-empty {
	display: none;
}
<?php endif; ?>

<?php
$digiblocks_css_output = ob_get_clean();