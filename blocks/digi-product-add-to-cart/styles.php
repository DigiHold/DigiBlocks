<?php
/**
 * DigiCommerce Product Add To Cart Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                         = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-add-to-cart-' . uniqid();
$visibility                 = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$buttonAlignment            = isset( $attrs['buttonAlignment'] ) ? $attrs['buttonAlignment'] : 'flex-start';
$buttonWidth                = isset( $attrs['buttonWidth'] ) ? $attrs['buttonWidth'] : 'auto';
$buttonCustomWidth          = isset( $attrs['buttonCustomWidth'] ) ? $attrs['buttonCustomWidth'] : [
    'desktop' => 200,
    'tablet'  => 180,
    'mobile'  => 150,
];
$backgroundColor            = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#007cba';
$textColor                  = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#ffffff';
$backgroundHoverColor       = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '#005a87';
$textHoverColor             = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '#ffffff';
$variationBackgroundColor   = isset( $attrs['variationBackgroundColor'] ) ? $attrs['variationBackgroundColor'] : '#ffffff';
$variationTextColor         = isset( $attrs['variationTextColor'] ) ? $attrs['variationTextColor'] : '#333333';
$variationBorderColor       = isset( $attrs['variationBorderColor'] ) ? $attrs['variationBorderColor'] : '#ddd';
$padding                    = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                     = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$buttonPadding              = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => ['top' => 12, 'right' => 24, 'bottom' => 12, 'left' => 24, 'unit' => 'px'],
    'tablet'  => ['top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 16, 'bottom' => 8, 'left' => 16, 'unit' => 'px'],
];
$buttonBorderRadius         = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$variationBorderRadius      = isset( $attrs['variationBorderRadius'] ) ? $attrs['variationBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$typography                 = isset( $attrs['typography'] ) ? $attrs['typography'] : [
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
/* DigiCommerce Product Add To Cart Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-form {
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-placeholder-notice {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    font-style: italic;
}

/* Variations - Radio buttons style like single-product.php */
.<?php echo esc_attr( $id ); ?> .variation-prices {
    margin-bottom: 20px;
}

.<?php echo esc_attr( $id ); ?> .variation-prices .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.<?php echo esc_attr( $id ); ?> .variation-prices .flex .flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .variation-prices input[type="radio"] {
    display: none;
}

.<?php echo esc_attr( $id ); ?> .variation-prices label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 16px;
    background-color: <?php echo esc_attr( $variationBackgroundColor ); ?>;
    color: <?php echo esc_attr( $variationTextColor ); ?>;
    border: 2px solid <?php echo esc_attr( $variationBorderColor ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $variationBorderRadius, 'border-radius', 'desktop' ) ); ?>
    transition: all 0.3s ease;
    margin: 0;
    min-width: 120px;
    text-align: center;
}

.<?php echo esc_attr( $id ); ?> .variation-prices input[type="radio"]:checked + label {
    border-color: <?php echo esc_attr( $backgroundColor ); ?>;
    background-color: <?php echo esc_attr( $backgroundColor ); ?>20;
    color: <?php echo esc_attr( $backgroundColor ); ?>;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px <?php echo esc_attr( $backgroundColor ); ?>30;
}

.<?php echo esc_attr( $id ); ?> .variation-prices label:hover {
    border-color: <?php echo esc_attr( $backgroundColor ); ?>;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px <?php echo esc_attr( $backgroundColor ); ?>20;
}

.<?php echo esc_attr( $id ); ?> .variation-prices .leading-none {
    line-height: 1;
    margin: 0;
}

.<?php echo esc_attr( $id ); ?> .variation-prices .font-bold {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
}

.<?php echo esc_attr( $id ); ?> .variation-prices .variation-price,
.<?php echo esc_attr( $id ); ?> .variation-prices .variation-sale-price,
.<?php echo esc_attr( $id ); ?> .variation-prices .variation-regular-price {
    font-weight: 500;
    font-size: 13px;
}

.<?php echo esc_attr( $id ); ?> .variation-prices .variation-sale-price {
    color: #10b981;
}

.<?php echo esc_attr( $id ); ?> .variation-prices .variation-regular-price.line-through {
    text-decoration: line-through;
    color: #6b7280;
}

/* Button */
.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    color: <?php echo esc_attr( $textColor ); ?>;
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
    border: none;
    cursor: pointer;
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
    transition: all 0.3s ease;
    box-shadow: none;
    text-decoration: none;
    align-self: <?php echo esc_attr( $buttonAlignment ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button:hover {
    background-color: <?php echo esc_attr( $backgroundHoverColor ?: $backgroundColor ); ?>;
    color: <?php echo esc_attr( $textHoverColor ?: $textColor ); ?>;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px <?php echo esc_attr( $backgroundColor ); ?>40;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button:active {
    transform: translateY(0);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button.loading {
    opacity: 0.7;
    cursor: not-allowed;
    position: relative;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button.loading::after {
    content: '';
    display: flex;
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: digiblocks-spin 1s linear infinite;
}

@keyframes digiblocks-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button svg {
    display: flex;
    width: 1em;
    height: 1em;
    fill: currentColor;
    flex-shrink: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button .digiblocks-button-text {
    color: inherit;
}

/* Notice styling */
.digiblocks-digi-notice .digicommerce-success,
.digiblocks-digi-notice .digicommerce-error {
    display: flex;
    align-items: center;
    gap: .5rem;
    background: transparent;
    color: #fff;
    border: 0;
    padding: 0;
    margin: 0;
    font-weight: 600;
}

.digiblocks-digi-notice .digicommerce-success::before {
    content: '✓';
    font-weight: bold;
}

.digiblocks-digi-notice .digicommerce-error::before {
    content: '⚠';
    font-weight: bold;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .variation-prices label {
        <?php echo esc_attr( digiblocks_get_dimensions( $variationBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button {
        <?php if ( $buttonWidth === 'custom' ) : ?>
        width: <?php echo esc_attr( $buttonCustomWidth['tablet'] ); ?>px;
        <?php endif; ?>
        <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
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
    
    .<?php echo esc_attr( $id ); ?> .variation-prices label {
        <?php echo esc_attr( digiblocks_get_dimensions( $variationBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-digi-add-to-cart-button {
        <?php if ( $buttonWidth === 'custom' ) : ?>
        width: <?php echo esc_attr( $buttonCustomWidth['mobile'] ); ?>px;
        <?php endif; ?>
        <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
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