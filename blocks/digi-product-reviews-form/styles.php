<?php
/**
 * DigiCommerce Product Reviews Form Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                         = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-reviews-form-' . uniqid();
$visibility                 = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$formBackgroundColor        = isset( $attrs['formBackgroundColor'] ) ? $attrs['formBackgroundColor'] : '#ffffff';
$formTextColor              = isset( $attrs['formTextColor'] ) ? $attrs['formTextColor'] : '#333333';
$labelColor                 = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '#333333';
$inputBackgroundColor       = isset( $attrs['inputBackgroundColor'] ) ? $attrs['inputBackgroundColor'] : '#ffffff';
$inputTextColor             = isset( $attrs['inputTextColor'] ) ? $attrs['inputTextColor'] : '#333333';
$inputBorderColor           = isset( $attrs['inputBorderColor'] ) ? $attrs['inputBorderColor'] : '#ddd';
$inputFocusBorderColor      = isset( $attrs['inputFocusBorderColor'] ) ? $attrs['inputFocusBorderColor'] : '#4a6cf7';
$buttonBackgroundColor      = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextColor            = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBackgroundHoverColor = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3a5ce5';
$buttonTextHoverColor       = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$ratingStarColor            = isset( $attrs['ratingStarColor'] ) ? $attrs['ratingStarColor'] : '#ddd';
$ratingStarHoverColor       = isset( $attrs['ratingStarHoverColor'] ) ? $attrs['ratingStarHoverColor'] : '#ffa500';
$padding                    = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                     = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$formPadding                = isset( $attrs['formPadding'] ) ? $attrs['formPadding'] : [
    'desktop' => ['top' => 30, 'right' => 30, 'bottom' => 30, 'left' => 30, 'unit' => 'px'],
    'tablet'  => ['top' => 25, 'right' => 25, 'bottom' => 25, 'left' => 25, 'unit' => 'px'],
    'mobile'  => ['top' => 20, 'right' => 20, 'bottom' => 20, 'left' => 20, 'unit' => 'px'],
];
$inputPadding               = isset( $attrs['inputPadding'] ) ? $attrs['inputPadding'] : [
    'desktop' => ['top' => 12, 'right' => 15, 'bottom' => 12, 'left' => 15, 'unit' => 'px'],
    'tablet'  => ['top' => 10, 'right' => 12, 'bottom' => 10, 'left' => 12, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 10, 'bottom' => 8, 'left' => 10, 'unit' => 'px'],
];
$buttonPadding              = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => ['top' => 15, 'right' => 30, 'bottom' => 15, 'left' => 30, 'unit' => 'px'],
    'tablet'  => ['top' => 12, 'right' => 25, 'bottom' => 12, 'left' => 25, 'unit' => 'px'],
    'mobile'  => ['top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px'],
];
$labelTypography            = isset( $attrs['labelTypography'] ) ? $attrs['labelTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
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
$inputTypography            = isset( $attrs['inputTypography'] ) ? $attrs['inputTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
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
$buttonTypography           = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : [
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
$inputBorderRadius          = isset( $attrs['inputBorderRadius'] ) ? $attrs['inputBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$buttonBorderRadius         = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$formBorderRadius           = isset( $attrs['formBorderRadius'] ) ? $attrs['formBorderRadius'] : [
    'desktop' => ['top' => 12, 'right' => 12, 'bottom' => 12, 'left' => 12, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$formBorderStyle            = isset( $attrs['formBorderStyle'] ) ? $attrs['formBorderStyle'] : 'solid';
$formBorderWidth            = isset( $attrs['formBorderWidth'] ) ? $attrs['formBorderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$formBorderColor            = isset( $attrs['formBorderColor'] ) ? $attrs['formBorderColor'] : '#e0e0e0';
$formShadow                 = isset( $attrs['formShadow'] ) ? $attrs['formShadow'] : [
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 4,
    'blur'       => 20,
    'spread'     => 0,
    'position'   => 'outset',
];
$formShadowHover            = isset( $attrs['formShadowHover'] ) ? $attrs['formShadowHover'] : [
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.15)',
    'horizontal' => 0,
    'vertical'   => 8,
    'blur'       => 25,
    'spread'     => 0,
    'position'   => 'outset',
];
$inputBorderStyle           = isset( $attrs['inputBorderStyle'] ) ? $attrs['inputBorderStyle'] : 'solid';
$inputBorderWidth           = isset( $attrs['inputBorderWidth'] ) ? $attrs['inputBorderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];

// CSS Output
ob_start();
?>
/* DigiCommerce Product Reviews Form Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

/* Main Product Reviews Container */
.<?php echo esc_attr( $id ); ?> .product-reviews {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

/* Reviews Display Styles */
.<?php echo esc_attr( $id ); ?> .reviews-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: <?php echo esc_attr( $formTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.<?php echo esc_attr( $id ); ?> .review-item {
    padding: 1.5rem;
    background-color: <?php echo esc_attr( $inputBackgroundColor ); ?>;
    border: 1px solid <?php echo esc_attr( $inputBorderColor ); ?>;
    border-radius: 0.5rem;
    transition: box-shadow 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .review-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.<?php echo esc_attr( $id ); ?> .review-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
}

.<?php echo esc_attr( $id ); ?> .review-stars {
    display: flex;
    gap: 0.125rem;
}

.<?php echo esc_attr( $id ); ?> .review-stars .star {
    font-size: 1rem;
    line-height: 1;
}

.<?php echo esc_attr( $id ); ?> .review-stars .star.filled {
    color: <?php echo esc_attr( $ratingStarHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .review-stars .star.empty {
    color: <?php echo esc_attr( $ratingStarColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .review-author {
    font-weight: 600;
    color: <?php echo esc_attr( $labelColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .review-date {
    font-size: 0.875rem;
    color: <?php echo esc_attr( $inputTextColor ); ?>;
    opacity: 0.7;
}

.<?php echo esc_attr( $id ); ?> .review-content {
    margin: 0;
}

.<?php echo esc_attr( $id ); ?> .review-content p {
    margin: 0;
    color: <?php echo esc_attr( $formTextColor ); ?>;
    line-height: 1.6;
}

.<?php echo esc_attr( $id ); ?> .no-reviews {
    text-align: center;
    padding: 2rem;
    background-color: <?php echo esc_attr( $inputBackgroundColor ); ?>;
    border: 1px solid <?php echo esc_attr( $inputBorderColor ); ?>;
    border-radius: 0.5rem;
}

.<?php echo esc_attr( $id ); ?> .no-reviews p {
    margin: 0;
    color: <?php echo esc_attr( $formTextColor ); ?>;
    opacity: 0.7;
    font-size: 1.1rem;
}

/* Review Form Section */
.<?php echo esc_attr( $id ); ?> .review-form-section {
    border-top: 1px solid <?php echo esc_attr( $inputBorderColor ); ?>;
    padding-top: 2rem;
}

.<?php echo esc_attr( $id ); ?> .review-form {
    background-color: <?php echo esc_attr( $formBackgroundColor ); ?>;
    color: <?php echo esc_attr( $formTextColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $formPadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $formBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( $formBorderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $formBorderStyle ); ?>;
    border-color: <?php echo esc_attr( $formBorderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $formBorderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $formShadow ) ); ?>;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .review-form:hover {
    <?php if ( $formShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $formShadowHover ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .review-form h3 {
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: <?php echo esc_attr( $formTextColor ); ?>;
    font-size: 1.5rem;
    font-weight: 700;
}

.<?php echo esc_attr( $id ); ?> .review-form label {
    color: <?php echo esc_attr( $labelColor ); ?>;
    <?php if ( ! empty( $labelTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $labelTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $labelTypography['fontSize']['desktop'] . ( $labelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $labelTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $labelTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $labelTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $labelTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $labelTypography['lineHeight']['desktop'] . ( $labelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $labelTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $labelTypography['letterSpacing']['desktop'] . ( $labelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    display: block;
    margin-bottom: 8px;
}

.<?php echo esc_attr( $id ); ?> .review-form .required {
    color: #dc2626;
}

.<?php echo esc_attr( $id ); ?> .review-form input,
.<?php echo esc_attr( $id ); ?> .review-form textarea {
    background-color: <?php echo esc_attr( $inputBackgroundColor ); ?>;
    color: <?php echo esc_attr( $inputTextColor ); ?>;
    border-color: <?php echo esc_attr( $inputBorderColor ); ?>;
    <?php if ( $inputBorderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $inputBorderStyle ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'desktop' ) ); ?>
    <?php else : ?>
    border: none;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'desktop' ) ); ?>
    <?php if ( ! empty( $inputTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $inputTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $inputTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $inputTypography['fontSize']['desktop'] . ( $inputTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $inputTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $inputTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $inputTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $inputTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $inputTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $inputTypography['lineHeight']['desktop'] . ( $inputTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $inputTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $inputTypography['letterSpacing']['desktop'] . ( $inputTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    width: 100%;
    transition: border-color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .review-form input:focus,
.<?php echo esc_attr( $id ); ?> .review-form textarea:focus {
    border-color: <?php echo esc_attr( $inputFocusBorderColor ); ?>;
    outline: none;
}

.<?php echo esc_attr( $id ); ?> .review-form .form-row {
    margin-bottom: 1rem;
}

.<?php echo esc_attr( $id ); ?> .rating-input {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.<?php echo esc_attr( $id ); ?> .rating-input .rating-radio {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

.<?php echo esc_attr( $id ); ?> .rating-input .rating-star {
    color: <?php echo esc_attr( $ratingStarColor ); ?>;
    cursor: pointer;
    font-size: 1.5rem;
    margin-bottom: 0 !important;
    line-height: 1;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .rating-input .rating-star:hover,
.<?php echo esc_attr( $id ); ?> .rating-input .rating-radio:checked + .rating-star,
.<?php echo esc_attr( $id ); ?> .rating-input .rating-star.active {
    color: <?php echo esc_attr( $ratingStarHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .form-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
}

.<?php echo esc_attr( $id ); ?> .submit-button {
    background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
    border: none;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
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
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .submit-button:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .form-submit {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.<?php echo esc_attr( $id ); ?> .review-login-notice {
    background-color: #f8f9fa;
    padding: 1.5rem;
    text-align: center;
    border-radius: 0.5rem;
    border: 1px solid <?php echo esc_attr( $inputBorderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .login-notice-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.<?php echo esc_attr( $id ); ?> .login-notice-text {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: <?php echo esc_attr( $formTextColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .login-notice-button {
    margin: 0;
}

.<?php echo esc_attr( $id ); ?> .login-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
    padding: 0.5rem 1.5rem;
    border-radius: 0.375rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .login-button:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .review-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.375rem;
}

.<?php echo esc_attr( $id ); ?> .review-message.hidden {
    display: none;
}

.<?php echo esc_attr( $id ); ?> .review-message.success {
    background-color: #dcfce7;
    color: #15803d;
    border: 1px solid #bbf7d0;
}

.<?php echo esc_attr( $id ); ?> .review-message.error {
    background-color: #fee2e2;
    color: #b91c1c;
    border: 1px solid #fecaca;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .review-form {
		<?php echo esc_attr( digiblocks_get_dimensions( $formPadding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $formBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( $formBorderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $formBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .review-form label {
        <?php if ( ! empty( $labelTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $labelTypography['fontSize']['tablet'] . ( $labelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $labelTypography['lineHeight']['tablet'] . ( $labelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $labelTypography['letterSpacing']['tablet'] . ( $labelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .review-form input,
    .<?php echo esc_attr( $id ); ?> .review-form textarea {
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'tablet' ) ); ?>
        <?php if ( $inputBorderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( ! empty( $inputTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $inputTypography['fontSize']['tablet'] . ( $inputTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $inputTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $inputTypography['lineHeight']['tablet'] . ( $inputTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $inputTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $inputTypography['letterSpacing']['tablet'] . ( $inputTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .submit-button {
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( ! empty( $buttonTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .review-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .review-form {
		<?php echo esc_attr( digiblocks_get_dimensions( $formPadding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $formBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( $formBorderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $formBorderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .review-form label {
        <?php if ( ! empty( $labelTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $labelTypography['fontSize']['mobile'] . ( $labelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $labelTypography['lineHeight']['mobile'] . ( $labelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $labelTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $labelTypography['letterSpacing']['mobile'] . ( $labelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .review-form input,
    .<?php echo esc_attr( $id ); ?> .review-form textarea {
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'mobile' ) ); ?>
        <?php if ( $inputBorderStyle !== 'none' ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php if ( ! empty( $inputTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $inputTypography['fontSize']['mobile'] . ( $inputTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $inputTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $inputTypography['lineHeight']['mobile'] . ( $inputTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $inputTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $inputTypography['letterSpacing']['mobile'] . ( $inputTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
	.<?php echo esc_attr( $id ); ?> .submit-button {
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( ! empty( $buttonTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .form-fields {
        grid-template-columns: 1fr;
    }

    .<?php echo esc_attr( $id ); ?> .review-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
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