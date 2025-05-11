<?php
/**
 * Forms Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                        = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$backgroundColor           = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$textColor                 = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$labelColor                = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '#333333';
$buttonBackgroundColor     = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextColor           = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBackgroundHoverColor = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3a5ce5';
$buttonTextHoverColor      = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$borderStyle               = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$borderColor               = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderWidth               = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : 1;
$buttonAlign               = isset( $attrs['buttonAlign'] ) ? $attrs['buttonAlign'] : 'left';
$animation                 = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$inputBorderStyle          = isset( $attrs['inputBorderStyle'] ) ? $attrs['inputBorderStyle'] : 'solid';
$inputBorderColor          = isset( $attrs['inputBorderColor'] ) ? $attrs['inputBorderColor'] : '#e0e0e0';
$inputBorderWidth          = isset( $attrs['inputBorderWidth'] ) ? $attrs['inputBorderWidth'] : 1;
$inputBackgroundColor      = isset( $attrs['inputBackgroundColor'] ) ? $attrs['inputBackgroundColor'] : '#ffffff';
$inputTextColor            = isset( $attrs['inputTextColor'] ) ? $attrs['inputTextColor'] : '#333333';
$inputFocusBorderColor     = isset( $attrs['inputFocusBorderColor'] ) ? $attrs['inputFocusBorderColor'] : '#4a6cf7';

// Responsive attributes
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
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
        'bottom' => 25,
        'left'   => 0,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 0,
        'right'  => 0,
        'bottom' => 20,
        'left'   => 0,
        'unit'   => 'px',
    ),
);

$inputBorderRadius = isset( $attrs['inputBorderRadius'] ) ? $attrs['inputBorderRadius'] : array(
    'desktop' => array(
        'top'    => 4,
        'right'  => 4,
        'bottom' => 4,
        'left'   => 4,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 4,
        'right'  => 4,
        'bottom' => 4,
        'left'   => 4,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 4,
        'right'  => 4,
        'bottom' => 4,
        'left'   => 4,
        'unit'   => 'px',
    ),
);

$inputPadding = isset( $attrs['inputPadding'] ) ? $attrs['inputPadding'] : array(
    'desktop' => array(
        'top'    => 12,
        'right'  => 15,
        'bottom' => 12,
        'left'   => 15,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 10,
        'right'  => 12,
        'bottom' => 10,
        'left'   => 12,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 8,
        'right'  => 10,
        'bottom' => 8,
        'left'   => 10,
        'unit'   => 'px',
    ),
);

$fieldGap = isset( $attrs['fieldGap'] ) ? $attrs['fieldGap'] : array(
    'desktop' => 20,
    'tablet'  => 15,
    'mobile'  => 12,
);

$labelMargin = isset( $attrs['labelMargin'] ) ? $attrs['labelMargin'] : array(
    'desktop' => 8,
    'tablet'  => 6,
    'mobile'  => 5,
);

// Typography
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : array();
$textTypography = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array();
$buttonTypography = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : array();

// Box shadow
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
);

// Get box shadow CSS
$box_shadow_css = 'none';
if ( $boxShadow['enable'] ) {
    $position = $boxShadow['position'] === 'inset' ? 'inset ' : '';
    $box_shadow_css = $position . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'];
}

$box_shadow_hover_css = 'none';
if ( $boxShadowHover['enable'] ) {
    $position = $boxShadowHover['position'] === 'inset' ? 'inset ' : '';
    $box_shadow_hover_css = $position . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'];
}

// CSS Output
ob_start();
?>
/* Form Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    color: <?php echo esc_attr( $textColor ); ?>;
    <?php if ( 'none' !== $borderStyle ) : ?>
    border: <?php echo esc_attr( $borderWidth ); ?>px <?php echo esc_attr( $borderStyle ); ?> <?php echo esc_attr( $borderColor ); ?>;
    <?php endif; ?>
    border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
    padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
    margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
    box-shadow: <?php echo esc_attr( $box_shadow_css ); ?>;
    transition: all 0.3s ease;
    width: 100%;
    <?php if ( !empty($typography['fontFamily']) ) : ?>
    font-family: <?php echo esc_attr( $typography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['desktop']) ) : ?>
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['fontWeight']) ) : ?>
    font-weight: <?php echo esc_attr( $typography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['fontStyle']) ) : ?>
    font-style: <?php echo esc_attr( $typography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['textTransform']) ) : ?>
    text-transform: <?php echo esc_attr( $typography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['textDecoration']) ) : ?>
    text-decoration: <?php echo esc_attr( $typography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['desktop']) ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['desktop']) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover {
    box-shadow: <?php echo esc_attr( $box_shadow_hover_css ); ?>;
}

/* Form container */
.<?php echo esc_attr( $id ); ?> .digiblocks-form {
    width: 100%;
    position: relative;
}

/* Form fields container */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-fields {
    display: flex;
    flex-wrap: wrap;
    gap: <?php echo esc_attr( $fieldGap['desktop'] ); ?>px;
    margin-bottom: <?php echo esc_attr( $fieldGap['desktop'] ); ?>px;
}

/* Form field */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-field {
    margin-bottom: 0;
    transition: all 0.3s ease;
    position: relative;
}

/* Field labels */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-field-label {
    display: block;
    margin-bottom: <?php echo esc_attr( $labelMargin['desktop'] ); ?>px;
    color: <?php echo esc_attr( $labelColor ); ?>;
    <?php if ( !empty($textTypography['fontFamily']) ) : ?>
    font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($textTypography['fontSize']) && !empty($textTypography['fontSize']['desktop']) ) : ?>
    font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . (!empty($textTypography['fontSizeUnit']) ? $textTypography['fontSizeUnit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($textTypography['fontWeight']) ) : ?>
    font-weight: <?php echo esc_attr( $textTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($textTypography['fontStyle']) ) : ?>
    font-style: <?php echo esc_attr( $textTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($textTypography['textTransform']) ) : ?>
    text-transform: <?php echo esc_attr( $textTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($textTypography['textDecoration']) ) : ?>
    text-decoration: <?php echo esc_attr( $textTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($textTypography['lineHeight']) && !empty($textTypography['lineHeight']['desktop']) ) : ?>
    line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . (!empty($textTypography['lineHeightUnit']) ? $textTypography['lineHeightUnit'] : 'em') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($textTypography['letterSpacing']) && !empty($textTypography['letterSpacing']['desktop']) ) : ?>
    letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . (!empty($textTypography['letterSpacingUnit']) ? $textTypography['letterSpacingUnit'] : 'px') ); ?>;
    <?php endif; ?>
}

/* Required indicator */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-field-required {
    color: #e53e3e;
    margin-left: 4px;
}

/* Form inputs */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-input,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-textarea,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-select {
    width: 100%;
    padding: <?php echo esc_attr( $inputPadding['desktop']['top'] . $inputPadding['desktop']['unit'] . ' ' . $inputPadding['desktop']['right'] . $inputPadding['desktop']['unit'] . ' ' . $inputPadding['desktop']['bottom'] . $inputPadding['desktop']['unit'] . ' ' . $inputPadding['desktop']['left'] . $inputPadding['desktop']['unit'] ); ?>;
    border-radius: <?php echo esc_attr( $inputBorderRadius['desktop']['top'] . $inputBorderRadius['desktop']['unit'] . ' ' . $inputBorderRadius['desktop']['right'] . $inputBorderRadius['desktop']['unit'] . ' ' . $inputBorderRadius['desktop']['bottom'] . $inputBorderRadius['desktop']['unit'] . ' ' . $inputBorderRadius['desktop']['left'] . $inputBorderRadius['desktop']['unit'] ); ?>;
    border: <?php echo esc_attr( $inputBorderWidth ); ?>px <?php echo esc_attr( $inputBorderStyle ); ?> <?php echo esc_attr( $inputBorderColor ); ?>;
    background-color: <?php echo esc_attr( $inputBackgroundColor ); ?>;
    color: <?php echo esc_attr( $inputTextColor ); ?>;
    transition: all 0.3s ease;
    <?php if ( !empty($typography['fontFamily']) ) : ?>
    font-family: <?php echo esc_attr( $typography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['desktop']) ) : ?>
    font-size: <?php echo esc_attr( $typography['fontSize']['desktop'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['fontWeight']) ) : ?>
    font-weight: <?php echo esc_attr( $typography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['fontStyle']) ) : ?>
    font-style: <?php echo esc_attr( $typography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['textTransform']) ) : ?>
    text-transform: <?php echo esc_attr( $typography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['textDecoration']) ) : ?>
    text-decoration: <?php echo esc_attr( $typography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['desktop']) ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['desktop']) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-textarea {
    min-height: 150px;
    resize: vertical;
}

/* Focus styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-input:focus,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-textarea:focus,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-select:focus {
    outline: none;
    border-color: <?php echo esc_attr( $inputFocusBorderColor ); ?>;
}

/* Checkbox and radio styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-checkbox-label,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 8px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-checkbox,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-radio {
    margin-right: 8px;
}

/* Submit button container */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-submit {
    <?php if ( 'full' === $buttonAlign ) : ?>
    width: 100%;
    <?php else : ?>
    text-align: <?php echo esc_attr( $buttonAlign ); ?>;
    <?php endif; ?>
    margin-top: <?php echo esc_attr( $fieldGap['desktop'] ); ?>px;
}

/* Submit button */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-submit-button {
    background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
    border: none;
    border-radius: <?php echo esc_attr( $inputBorderRadius['desktop']['top'] . $inputBorderRadius['desktop']['unit'] . ' ' . $inputBorderRadius['desktop']['right'] . $inputBorderRadius['desktop']['unit'] . ' ' . $inputBorderRadius['desktop']['bottom'] . $inputBorderRadius['desktop']['unit'] . ' ' . $inputBorderRadius['desktop']['left'] . $inputBorderRadius['desktop']['unit'] ); ?>;
    padding: 12px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    <?php if ( !empty($buttonTypography['fontFamily']) ) : ?>
    font-family: <?php echo esc_attr( $buttonTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($buttonTypography['fontSize']) && !empty($buttonTypography['fontSize']['desktop']) ) : ?>
    font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop'] . (!empty($buttonTypography['fontSizeUnit']) ? $buttonTypography['fontSizeUnit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($buttonTypography['fontWeight']) ) : ?>
    font-weight: <?php echo esc_attr( $buttonTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($buttonTypography['fontStyle']) ) : ?>
    font-style: <?php echo esc_attr( $buttonTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($buttonTypography['textTransform']) ) : ?>
    text-transform: <?php echo esc_attr( $buttonTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($buttonTypography['textDecoration']) ) : ?>
    text-decoration: <?php echo esc_attr( $buttonTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( !empty($buttonTypography['lineHeight']) && !empty($buttonTypography['lineHeight']['desktop']) ) : ?>
    line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . (!empty($buttonTypography['lineHeightUnit']) ? $buttonTypography['lineHeightUnit'] : 'em') ); ?>;
    <?php endif; ?>
    <?php if ( !empty($buttonTypography['letterSpacing']) && !empty($buttonTypography['letterSpacing']['desktop']) ) : ?>
    letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . (!empty($buttonTypography['letterSpacingUnit']) ? $buttonTypography['letterSpacingUnit'] : 'px') ); ?>;
    <?php endif; ?>
    <?php if ( 'full' === $buttonAlign ) : ?>
    width: 100%;
    <?php endif; ?>
}

/* Submit button hover */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-submit-button:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
}

/* Success message */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-success {
    color: #38a169;
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #f0fff4;
    border: 1px solid #c6f6d5;
    display: none;
}

/* Error message */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-error {
    color: #e53e3e;
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #fff5f5;
    border: 1px solid #fed7d7;
    display: none;
}

/* Field error message */
.<?php echo esc_attr( $id ); ?> .digiblocks-form-field-error {
    color: #e53e3e;
    font-size: 12px;
    margin-top: 4px;
    display: none;
}

/* Field width classes */
.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-100 {
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-75 {
    width: calc(75% - (<?php echo esc_attr( $fieldGap['desktop'] ); ?>px * 0.25));
}

.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-66 {
    width: calc(66.66% - (<?php echo esc_attr( $fieldGap['desktop'] ); ?>px * 0.33));
}

.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-50 {
    width: calc(50% - (<?php echo esc_attr( $fieldGap['desktop'] ); ?>px * 0.5));
}

.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-33 {
    width: calc(33.33% - (<?php echo esc_attr( $fieldGap['desktop'] ); ?>px * 0.67));
}

.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-25 {
    width: calc(25% - (<?php echo esc_attr( $fieldGap['desktop'] ); ?>px * 0.75));
}

/* Loading state */
.<?php echo esc_attr( $id ); ?> .digiblocks-form.is-submitting {
    opacity: 0.7;
    pointer-events: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form.is-submitting .digiblocks-form-submit-button {
    position: relative;
    color: transparent;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form.is-submitting .digiblocks-form-submit-button:after {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: digiblocks-form-spinner 0.8s linear infinite;
}

@keyframes digiblocks-form-spinner {
    to {
        transform: rotate(360deg);
    }
}

/* Animation styles if set */
<?php if ( 'none' !== $animation ) : ?>
.<?php echo esc_attr( $id ); ?>.animate-<?php echo esc_attr( $animation ); ?> {
    animation: <?php echo esc_attr( $animation ); ?> 1s ease;
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
        margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
        <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-fields {
        gap: <?php echo esc_attr( $fieldGap['tablet'] ); ?>px;
        margin-bottom: <?php echo esc_attr( $fieldGap['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-field-label {
        margin-bottom: <?php echo esc_attr( $labelMargin['tablet'] ); ?>px;
        <?php if ( !empty($textTypography['fontSize']) && !empty($textTypography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . (!empty($textTypography['fontSizeUnit']) ? $textTypography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($textTypography['lineHeight']) && !empty($textTypography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . (!empty($textTypography['lineHeightUnit']) ? $textTypography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($textTypography['letterSpacing']) && !empty($textTypography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . (!empty($textTypography['letterSpacingUnit']) ? $textTypography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-input,
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-textarea,
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-select {
        padding: <?php echo esc_attr( $inputPadding['tablet']['top'] . $inputPadding['tablet']['unit'] . ' ' . $inputPadding['tablet']['right'] . $inputPadding['tablet']['unit'] . ' ' . $inputPadding['tablet']['bottom'] . $inputPadding['tablet']['unit'] . ' ' . $inputPadding['tablet']['left'] . $inputPadding['tablet']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $inputBorderRadius['tablet']['top'] . $inputBorderRadius['tablet']['unit'] . ' ' . $inputBorderRadius['tablet']['right'] . $inputBorderRadius['tablet']['unit'] . ' ' . $inputBorderRadius['tablet']['bottom'] . $inputBorderRadius['tablet']['unit'] . ' ' . $inputBorderRadius['tablet']['left'] . $inputBorderRadius['tablet']['unit'] ); ?>;
        <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-submit {
        margin-top: <?php echo esc_attr( $fieldGap['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-submit-button {
        <?php if ( !empty($buttonTypography['fontSize']) && !empty($buttonTypography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . (!empty($buttonTypography['fontSizeUnit']) ? $buttonTypography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($buttonTypography['lineHeight']) && !empty($buttonTypography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet'] . (!empty($buttonTypography['lineHeightUnit']) ? $buttonTypography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($buttonTypography['letterSpacing']) && !empty($buttonTypography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet'] . (!empty($buttonTypography['letterSpacingUnit']) ? $buttonTypography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    /* Field width classes for tablet */
    .<?php echo esc_attr( $id ); ?> .digiblocks-field-width-75 {
		width: calc(75% - (<?php echo esc_attr( $fieldGap['tablet'] ); ?>px * 0.25));
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-66 {
		width: calc(66.66% - (<?php echo esc_attr( $fieldGap['tablet'] ); ?>px * 0.33));
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-50 {
		width: calc(50% - (<?php echo esc_attr( $fieldGap['tablet'] ); ?>px * 0.5));
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-33 {
		width: calc(33.33% - (<?php echo esc_attr( $fieldGap['tablet'] ); ?>px * 0.67));
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-field-width-25 {
		width: calc(25% - (<?php echo esc_attr( $fieldGap['tablet'] ); ?>px * 0.75));
	}
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
        margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
        <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-fields {
        gap: <?php echo esc_attr( $fieldGap['mobile'] ); ?>px;
        margin-bottom: <?php echo esc_attr( $fieldGap['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-field-label {
        margin-bottom: <?php echo esc_attr( $labelMargin['mobile'] ); ?>px;
        <?php if ( !empty($textTypography['fontSize']) && !empty($textTypography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . (!empty($textTypography['fontSizeUnit']) ? $textTypography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($textTypography['lineHeight']) && !empty($textTypography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . (!empty($textTypography['lineHeightUnit']) ? $textTypography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($textTypography['letterSpacing']) && !empty($textTypography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . (!empty($textTypography['letterSpacingUnit']) ? $textTypography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-input,
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-textarea,
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-select {
        padding: <?php echo esc_attr( $inputPadding['mobile']['top'] . $inputPadding['mobile']['unit'] . ' ' . $inputPadding['mobile']['right'] . $inputPadding['mobile']['unit'] . ' ' . $inputPadding['mobile']['bottom'] . $inputPadding['mobile']['unit'] . ' ' . $inputPadding['mobile']['left'] . $inputPadding['mobile']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $inputBorderRadius['mobile']['top'] . $inputBorderRadius['mobile']['unit'] . ' ' . $inputBorderRadius['mobile']['right'] . $inputBorderRadius['mobile']['unit'] . ' ' . $inputBorderRadius['mobile']['bottom'] . $inputBorderRadius['mobile']['unit'] . ' ' . $inputBorderRadius['mobile']['left'] . $inputBorderRadius['mobile']['unit'] ); ?>;
        <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-submit {
        margin-top: <?php echo esc_attr( $fieldGap['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-submit-button {
        <?php if ( !empty($buttonTypography['fontSize']) && !empty($buttonTypography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . (!empty($buttonTypography['fontSizeUnit']) ? $buttonTypography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($buttonTypography['lineHeight']) && !empty($buttonTypography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . (!empty($buttonTypography['lineHeightUnit']) ? $buttonTypography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($buttonTypography['letterSpacing']) && !empty($buttonTypography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . (!empty($buttonTypography['letterSpacingUnit']) ? $buttonTypography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    }
    
    /* Stack all fields on mobile */
    .<?php echo esc_attr( $id ); ?> .digiblocks-field-width-25,
    .<?php echo esc_attr( $id ); ?> .digiblocks-field-width-33,
    .<?php echo esc_attr( $id ); ?> .digiblocks-field-width-50,
    .<?php echo esc_attr( $id ); ?> .digiblocks-field-width-66,
    .<?php echo esc_attr( $id ); ?> .digiblocks-field-width-75 {
        width: 100%;
    }
}

<?php
$digiblocks_css_output = ob_get_clean();
?>