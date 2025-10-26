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
$visibility                = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
$backgroundColor           = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$textColor                 = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '';
$labelColor                = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '';
$buttonBackgroundColor     = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextColor           = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBackgroundHoverColor = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3a5ce5';
$buttonTextHoverColor      = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$borderStyle               = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$borderColor               = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$buttonAlign               = isset( $attrs['buttonAlign'] ) ? $attrs['buttonAlign'] : 'left';
$animation                 = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$inputBorderStyle          = isset( $attrs['inputBorderStyle'] ) ? $attrs['inputBorderStyle'] : 'solid';
$inputBorderColor          = isset( $attrs['inputBorderColor'] ) ? $attrs['inputBorderColor'] : '#e0e0e0';
$inputBorderWidth          = isset( $attrs['inputBorderWidth'] ) ? $attrs['inputBorderWidth'] : 1;
$inputBackgroundColor      = isset( $attrs['inputBackgroundColor'] ) ? $attrs['inputBackgroundColor'] : '#ffffff';
$inputTextColor            = isset( $attrs['inputTextColor'] ) ? $attrs['inputTextColor'] : '';
$inputFocusBorderColor     = isset( $attrs['inputFocusBorderColor'] ) ? $attrs['inputFocusBorderColor'] : '#4a6cf7';

// Responsive attributes
$borderWidth = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
    'desktop' => array(
        'top'    => 1,
        'right'  => 1,
        'bottom' => 1,
        'left'   => 1,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
);

$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => array(
        'top'    => 8,
        'right'  => 8,
        'bottom' => 8,
        'left'   => 8,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
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
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
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
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
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
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
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
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => '',
        'right'  => '',
        'bottom' => '',
        'left'   => '',
        'unit'   => 'px',
    ),
);

$fieldGap = isset( $attrs['fieldGap'] ) ? $attrs['fieldGap'] : array(
    'desktop' => 20,
    'tablet'  => '',
    'mobile'  => '',
);

$labelMargin = isset( $attrs['labelMargin'] ) ? $attrs['labelMargin'] : array(
    'desktop' => 8,
    'tablet'  => '',
    'mobile'  => '',
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

// CSS Output
ob_start();
?>
/* Form Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php if ( !empty($textColor) ) : ?>
    color: <?php echo esc_attr( $textColor ); ?>;
    <?php endif; ?>
    <?php if ( 'none' !== $borderStyle ) : ?>
	border-style: <?php echo esc_attr( $borderStyle ); ?>;
	border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php endif; ?>
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
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . $v_unit ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . $v_unit ); ?>;
        <?php
            endif;
        endif;
        ?>
    <?php endif; ?>
    <?php if ( '' !== $zIndex && null !== $zIndex ) : ?>
        z-index: <?php echo esc_attr( $zIndex ); ?>;
    <?php endif; ?>
	<?php
    $transform_value = digiblocks_get_transform_css( $transform, 'desktop' );
    if ( ! empty( $transform_value ) ) :
    ?>
    transform: <?php echo esc_attr( $transform_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'desktop' ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $transformHover ) && isset( $transformHover['transitionDuration'] ) && '' !== $transformHover['transitionDuration'] && null !== $transformHover['transitionDuration'] ) : ?>
	transition: all <?php echo esc_attr( $transformHover['transitionDuration'] ); ?>ms ease;
	<?php else : ?>
    transition: all 0.3s ease;
	<?php endif; ?>
}

<?php
$has_box_shadow_hover = isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'];
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( $has_box_shadow_hover || ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $has_box_shadow_hover ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>

    <?php if ( ! empty( $transform_hover_value ) ) : ?>
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

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
    <?php if ( !empty($labelColor) ) : ?>
    color: <?php echo esc_attr( $labelColor ); ?>;
    <?php endif; ?>
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
	<?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( 'none' !== $inputBorderStyle ) : ?>
	border-style: <?php echo esc_attr( $inputBorderStyle ); ?>;
	border-color: <?php echo esc_attr( $inputBorderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
    background-color: <?php echo esc_attr( $inputBackgroundColor ); ?>;
    <?php if ( !empty($inputTextColor) ) : ?>
    color: <?php echo esc_attr( $inputTextColor ); ?>;
    <?php endif; ?>
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
	gap: 8px;
    cursor: pointer;
    margin-bottom: 8px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-checkbox-label span,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-radio-label span {
    flex: 1;
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
	<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'desktop' ) ); ?>
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
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php if ( 'none' !== $borderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
        <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '0';
            $h_unit_tablet = isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_tablet = isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '0';
            $v_unit_tablet = isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
            if ( '' !== $v_value_tablet ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_tablet = digiblocks_get_transform_css( $transform, 'tablet' );
        if ( ! empty( $transform_value_tablet ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_tablet ); ?>;
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'tablet' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'tablet' ); ?>;
		}
	<?php endif; ?>
    
    <?php if ( ! empty( $fieldGap['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-fields {
        gap: <?php echo esc_attr( $fieldGap['tablet'] ); ?>px;
        margin-bottom: <?php echo esc_attr( $fieldGap['tablet'] ); ?>px;
    }
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-field-label {
        <?php if ( ! empty( $labelMargin['tablet'] ) ) : ?>
        margin-bottom: <?php echo esc_attr( $labelMargin['tablet'] ); ?>px;
		<?php endif; ?>
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
		<?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php if ( 'none' !== $inputBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
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
    
    <?php if ( ! empty( $fieldGap['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-submit {
        margin-top: <?php echo esc_attr( $fieldGap['tablet'] ); ?>px;
    }
	<?php endif; ?>
    
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
    <?php if ( ! empty( $fieldGap['tablet'] ) ) : ?>
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
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php if ( 'none' !== $borderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
        <?php if ( !empty($typography['fontSize']) && !empty($typography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . (!empty($typography['fontSizeUnit']) ? $typography['fontSizeUnit'] : 'px') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['lineHeight']) && !empty($typography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . (!empty($typography['lineHeightUnit']) ? $typography['lineHeightUnit'] : 'em') ); ?>;
        <?php endif; ?>
        <?php if ( !empty($typography['letterSpacing']) && !empty($typography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . (!empty($typography['letterSpacingUnit']) ? $typography['letterSpacingUnit'] : 'px') ); ?>;
        <?php endif; ?>
    	<?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '0';
            $h_unit_mobile = isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '0';
            $v_unit_mobile = isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
            if ( '' !== $v_value_mobile ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_mobile = digiblocks_get_transform_css( $transform, 'mobile' );
        if ( ! empty( $transform_value_mobile ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_mobile ); ?>;
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'mobile' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'mobile' ); ?>;
		}
	<?php endif; ?>
    
    <?php if ( ! empty( $fieldGap['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-fields {
        gap: <?php echo esc_attr( $fieldGap['mobile'] ); ?>px;
        margin-bottom: <?php echo esc_attr( $fieldGap['mobile'] ); ?>px;
    }
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-field-label {
        <?php if ( ! empty( $labelMargin['mobile'] ) ) : ?>
        margin-bottom: <?php echo esc_attr( $labelMargin['mobile'] ); ?>px;
		<?php endif; ?>
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
		<?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php if ( 'none' !== $inputBorderStyle ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
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
    
    <?php if ( ! empty( $fieldGap['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-form-submit {
        margin-top: <?php echo esc_attr( $fieldGap['mobile'] ); ?>px;
    }
	<?php endif; ?>
    
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