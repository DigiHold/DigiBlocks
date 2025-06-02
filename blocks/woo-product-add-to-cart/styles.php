<?php
/**
 * Product Add To Cart Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                      = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-add-to-cart-' . uniqid();
$visibility              = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$showQuantityInput       = isset( $attrs['showQuantityInput'] ) ? $attrs['showQuantityInput'] : true;
$quantityInputWidth      = isset( $attrs['quantityInputWidth'] ) ? $attrs['quantityInputWidth'] : [
    'desktop' => 80,
    'tablet'  => 70,
    'mobile'  => 60,
];
$buttonAlignment         = isset( $attrs['buttonAlignment'] ) ? $attrs['buttonAlignment'] : 'flex-start';
$buttonWidth             = isset( $attrs['buttonWidth'] ) ? $attrs['buttonWidth'] : 'auto';
$buttonCustomWidth       = isset( $attrs['buttonCustomWidth'] ) ? $attrs['buttonCustomWidth'] : [
    'desktop' => 200,
    'tablet'  => 180,
    'mobile'  => 150,
];
$backgroundColor         = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#007cba';
$textColor               = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#ffffff';
$backgroundHoverColor    = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '#005a87';
$textHoverColor          = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '#ffffff';
$quantityBackgroundColor = isset( $attrs['quantityBackgroundColor'] ) ? $attrs['quantityBackgroundColor'] : '#ffffff';
$quantityTextColor       = isset( $attrs['quantityTextColor'] ) ? $attrs['quantityTextColor'] : '#333333';
$quantityBorderColor     = isset( $attrs['quantityBorderColor'] ) ? $attrs['quantityBorderColor'] : '#ddd';
$padding                 = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                  = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$buttonPadding           = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => ['top' => 12, 'right' => 24, 'bottom' => 12, 'left' => 24, 'unit' => 'px'],
    'tablet'  => ['top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 16, 'bottom' => 8, 'left' => 16, 'unit' => 'px'],
];
$buttonBorderRadius      = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$quantityBorderRadius    = isset( $attrs['quantityBorderRadius'] ) ? $attrs['quantityBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$typography              = isset( $attrs['typography'] ) ? $attrs['typography'] : [
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

// CSS Output
ob_start();
?>
/* Product Add To Cart Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-add-to-cart-container {
    display: flex;
    align-items: <?php echo $showQuantityInput ? 'stretch' : 'flex-start'; ?>;
    gap: 10px;
    justify-content: <?php echo esc_attr( $buttonAlignment ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-add-to-cart-form {
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-placeholder-notice {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    font-style: italic;
}

<?php if ( $showQuantityInput ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-wrapper .quantity {
	display: flex;
    height: 100%;
}


.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-input,
.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-wrapper .qty {
	height: 100%;
    width: <?php echo esc_attr( $quantityInputWidth['desktop'] ); ?>px;
    padding: 8px 12px;
    background-color: <?php echo esc_attr( $quantityBackgroundColor ); ?>;
    color: <?php echo esc_attr( $quantityTextColor ); ?>;
    border: 1px solid <?php echo esc_attr( $quantityBorderColor ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $quantityBorderRadius, 'border-radius', 'desktop' ) ); ?>
    font-size: 14px;
    text-align: center;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-input::-webkit-outer-spin-button,
.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-input::-webkit-inner-spin-button,
.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-wrapper .qty::-webkit-outer-spin-button,
.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-wrapper .qty::-webkit-inner-spin-button {
    margin: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-input:focus,
.<?php echo esc_attr( $id ); ?> .digiblocks-quantity-wrapper .qty:focus {
    outline: none;
    border-color: <?php echo esc_attr( $backgroundColor ); ?>;
    box-shadow: 0 0 0 1px <?php echo esc_attr( $backgroundColor ); ?>40;
}
<?php endif; ?>

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
	gap: 8px;
    background-color: <?php echo esc_attr( $backgroundColor ); ?> !important;
    color: <?php echo esc_attr( $textColor ); ?> !important;
    <?php if ( $buttonWidth === 'full' ) : ?>
    width: 100%;
    <?php elseif ( $buttonWidth === 'custom' ) : ?>
    width: <?php echo esc_attr( $buttonCustomWidth['desktop'] ); ?>px;
    <?php else : ?>
    width: auto;
    <?php endif; ?>
    <?php if ( ! empty( $typography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $typography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?> !important;
    <?php endif; ?>
    <?php if ( ! empty( $typography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $typography['fontWeight'] ); ?> !important;
    <?php endif; ?>
    <?php if ( ! empty( $typography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $typography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $typography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $typography['textDecoration'] ); ?> !important;
    <?php endif; ?>
    <?php if ( ! empty( $typography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?> !important;
    <?php endif; ?>
    <?php if ( ! empty( $typography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    border: none !important;
    cursor: pointer;
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
    transition: all 0.3s ease;
    box-shadow: none !important;
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button:hover {
    background-color: <?php echo esc_attr( $backgroundHoverColor ?: $backgroundColor ); ?> !important;
    color: <?php echo esc_attr( $textHoverColor ?: $textColor ); ?> !important;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px <?php echo esc_attr( $backgroundColor ); ?>40 !important;
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button:active {
    transform: translateY(0);
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button.loading {
    opacity: 0.7;
    cursor: not-allowed;
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button.loading::after {
    position: relative;
    top: auto;
    right: auto;
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button.added::after {
    margin: 0;
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button svg {
	display: flex;
    width: 1em;
    height: 1em;
    fill: currentColor;
}

.woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button .digiblocks-button-text {
    color: inherit;
}

.digiblocks-wc-notice .woocommerce-message {
    display: flex;
    align-items: center;
    gap: .5rem;
    background: transparent;
    color: #fff;
    border: 0;
    padding: 0;
    margin: 0;
}

.digiblocks-wc-notice .woocommerce-message::before {
    position: relative;
    left: auto;
    top: auto;
    color: #fff;
}

/* Variations */
.<?php echo esc_attr( $id ); ?> .digiblocks-variations {
    margin: 0 0 1.5rem;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-variation-field {
    margin-bottom: 1.25rem;
    position: relative;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-variation-field:last-child {
    margin-bottom: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-variation-field label {
	display: flex;
    font-weight: 600;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    position: relative;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-variation-field label::after {
    content: '*';
    color: #ef4444;
    margin-left: 0.25rem;
    font-weight: 500;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-variation-field select {
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #374151;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1.25rem;
    border: 1px solid #e5e7eb;
    border-radius: 2px;
    outline: none;
    transition: all 0.2s ease;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-variation-price {
	font-weight: 600;
    color: #17a817;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    <?php if ( $showQuantityInput ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-quantity-input,
    .<?php echo esc_attr( $id ); ?> .digiblocks-quantity-wrapper .qty {
        width: <?php echo esc_attr( $quantityInputWidth['tablet'] ); ?>px;
        <?php echo esc_attr( digiblocks_get_dimensions( $quantityBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    <?php endif; ?>
    
    .woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button {
        <?php if ( $buttonWidth === 'custom' ) : ?>
        width: <?php echo esc_attr( $buttonCustomWidth['tablet'] ); ?>px;
        <?php endif; ?>
        <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?> !important;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?> !important;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
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
    
    <?php if ( $showQuantityInput ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-quantity-input,
    .<?php echo esc_attr( $id ); ?> .digiblocks-quantity-wrapper .qty {
        width: <?php echo esc_attr( $quantityInputWidth['mobile'] ); ?>px;
        <?php echo esc_attr( digiblocks_get_dimensions( $quantityBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    <?php endif; ?>
    
    .woocommerce .<?php echo esc_attr( $id ); ?> button.digiblocks-add-to-cart-button {
        <?php if ( $buttonWidth === 'custom' ) : ?>
        width: <?php echo esc_attr( $buttonCustomWidth['mobile'] ); ?>px;
        <?php endif; ?>
        <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?> !important;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?> !important;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
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