<?php
/**
 * Search Form Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                           = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-search-form-' . uniqid();
$visibility                   = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$placeholder                  = isset( $attrs['placeholder'] ) ? $attrs['placeholder'] : __( 'Search...', 'digiblocks' );
$buttonText                   = isset( $attrs['buttonText'] ) ? $attrs['buttonText'] : __( 'Search', 'digiblocks' );
$layout                       = isset( $attrs['layout'] ) ? $attrs['layout'] : 'horizontal';
$buttonPosition               = isset( $attrs['buttonPosition'] ) ? $attrs['buttonPosition'] : 'outside';
$inputBackgroundColor         = isset( $attrs['inputBackgroundColor'] ) ? $attrs['inputBackgroundColor'] : '#ffffff';
$inputTextColor               = isset( $attrs['inputTextColor'] ) ? $attrs['inputTextColor'] : '#333333';
$inputBorderColor             = isset( $attrs['inputBorderColor'] ) ? $attrs['inputBorderColor'] : '#e0e0e0';
$inputFocusBorderColor        = isset( $attrs['inputFocusBorderColor'] ) ? $attrs['inputFocusBorderColor'] : '#4a6cf7';
$buttonBackgroundColor        = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextColor              = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBorderColor            = isset( $attrs['buttonBorderColor'] ) ? $attrs['buttonBorderColor'] : '';
$buttonBackgroundHoverColor   = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3a5ce5';
$buttonTextHoverColor         = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$buttonBorderHoverColor       = isset( $attrs['buttonBorderHoverColor'] ) ? $attrs['buttonBorderHoverColor'] : '';
$dropdownBackgroundColor      = isset( $attrs['dropdownBackgroundColor'] ) ? $attrs['dropdownBackgroundColor'] : '#ffffff';
$dropdownTextColor            = isset( $attrs['dropdownTextColor'] ) ? $attrs['dropdownTextColor'] : '#333333';
$dropdownBorderColor          = isset( $attrs['dropdownBorderColor'] ) ? $attrs['dropdownBorderColor'] : '#e0e0e0';
$resultsBackgroundColor       = isset( $attrs['resultsBackgroundColor'] ) ? $attrs['resultsBackgroundColor'] : '#ffffff';
$resultsTextColor             = isset( $attrs['resultsTextColor'] ) ? $attrs['resultsTextColor'] : '#333333';
$resultsBorderColor           = isset( $attrs['resultsBorderColor'] ) ? $attrs['resultsBorderColor'] : '#e0e0e0';
$resultsHoverBackgroundColor  = isset( $attrs['resultsHoverBackgroundColor'] ) ? $attrs['resultsHoverBackgroundColor'] : '#f8f9fa';
$inputBorderStyle             = isset( $attrs['inputBorderStyle'] ) ? $attrs['inputBorderStyle'] : 'solid';
$inputBorderWidth             = isset( $attrs['inputBorderWidth'] ) ? $attrs['inputBorderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$inputBorderRadius            = isset( $attrs['inputBorderRadius'] ) ? $attrs['inputBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$buttonBorderStyle            = isset( $attrs['buttonBorderStyle'] ) ? $attrs['buttonBorderStyle'] : 'none';
$buttonBorderWidth            = isset( $attrs['buttonBorderWidth'] ) ? $attrs['buttonBorderWidth'] : digiblocks_get_default_dimensions('px');
$buttonBorderRadius           = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$dropdownBorderStyle          = isset( $attrs['dropdownBorderStyle'] ) ? $attrs['dropdownBorderStyle'] : 'solid';
$dropdownBorderWidth          = isset( $attrs['dropdownBorderWidth'] ) ? $attrs['dropdownBorderWidth'] : digiblocks_get_default_dimensions('px');
$dropdownBorderRadius         = isset( $attrs['dropdownBorderRadius'] ) ? $attrs['dropdownBorderRadius'] : digiblocks_get_default_dimensions('px');
$inputPadding                 = isset( $attrs['inputPadding'] ) ? $attrs['inputPadding'] : [
    'desktop' => ['top' => 12, 'right' => 16, 'bottom' => 12, 'left' => 16, 'unit' => 'px'],
    'tablet'  => ['top' => 10, 'right' => 14, 'bottom' => 10, 'left' => 14, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 12, 'bottom' => 8, 'left' => 12, 'unit' => 'px'],
];
$buttonPadding                = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => ['top' => 12, 'right' => 24, 'bottom' => 12, 'left' => 24, 'unit' => 'px'],
    'tablet'  => ['top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 16, 'bottom' => 8, 'left' => 16, 'unit' => 'px'],
];
$dropdownPadding              = isset( $attrs['dropdownPadding'] ) ? $attrs['dropdownPadding'] : [
    'desktop' => ['top' => 12, 'right' => 16, 'bottom' => 12, 'left' => 16, 'unit' => 'px'],
    'tablet'  => ['top' => 10, 'right' => 14, 'bottom' => 10, 'left' => 14, 'unit' => 'px'],
    'mobile'  => ['top' => 8, 'right' => 12, 'bottom' => 8, 'left' => 12, 'unit' => 'px'],
];
$formGap                      = isset( $attrs['formGap'] ) ? $attrs['formGap'] : [
    'desktop' => 16,
    'tablet'  => 14,
    'mobile'  => 12,
];
$typography              = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$buttonTypography             = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : [
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
$textTypography           = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$boxShadow                    = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$boxShadowHover               = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.15)',
    'horizontal' => 0,
    'vertical'   => 2,
    'blur'       => 8,
    'spread'     => 0,
    'position'   => 'outset',
];
$padding                      = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                       = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

// CSS Output
ob_start();
?>
/* Search Form Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php endif; ?>
    transition: all 0.3s ease;
}

<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
	.<?php echo esc_attr( $id ); ?>:hover {
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-search-form {
    display: flex;
    <?php if ( $buttonPosition === 'outside' ) : ?>
    	gap: <?php echo esc_attr( $formGap['desktop'] ); ?>px;
        <?php if ( $layout === 'vertical' ) : ?>
			flex-direction: column;
			align-items: stretch;
			<?php else : ?>
			flex-direction: row;
			align-items: center;
        <?php endif; ?>
    <?php else : ?>
        flex-direction: row;
        align-items: center;
    <?php endif; ?>
	position: relative;
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-input-wrapper {
    flex: 1;
    <?php if ( $buttonPosition === 'inside' ) : ?>
    position: relative;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-input {
    width: 100%;
    background-color: <?php echo esc_attr( $inputBackgroundColor ); ?>;
    color: <?php echo esc_attr( $inputTextColor ); ?>;
    <?php if ( $inputBorderStyle !== 'none' && $inputBorderStyle !== 'default' ) : ?>
    border-style: <?php echo esc_attr( $inputBorderStyle ); ?>;
    border-color: <?php echo esc_attr( $inputBorderColor ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'desktop' ) ); ?>
    <?php else : ?>
    border: 1px solid <?php echo esc_attr( $inputBorderColor ); ?>;
    <?php endif; ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'desktop' ) ); ?>
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
    <?php if ( ! empty( $typography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $typography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
    outline: none;
    <?php if ( $buttonPosition === 'inside' ) : ?>
    padding-right: 100px;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-input:focus {
    border-color: <?php echo esc_attr( $inputFocusBorderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-input::placeholder {
    color: <?php echo esc_attr( $inputTextColor ); ?>99;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-button {
    background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
    <?php if ( $buttonBorderStyle !== 'none' && $buttonBorderStyle !== 'default' ) : ?>
    border-style: <?php echo esc_attr( $buttonBorderStyle ); ?>;
    border-color: <?php echo esc_attr( $buttonBorderColor ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'desktop' ) ); ?>
    <?php else : ?>
    border: none;
    <?php endif; ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
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
    <?php if ( ! empty( $buttonTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $buttonTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    <?php if ( $buttonPosition === 'inside' ) : ?>
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-button:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
	<?php if ( $buttonBorderStyle !== 'none' ) : ?>
    border-color: <?php echo esc_attr( $buttonBorderHoverColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-button svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: <?php echo esc_attr( $resultsBackgroundColor ); ?>;
    color: <?php echo esc_attr( $resultsTextColor ); ?>;
    border: 1px solid <?php echo esc_attr( $resultsBorderColor ); ?>;
    border-radius: 4px;
    margin-top: 5px;
    max-height: 300px;
    overflow-y: auto;
    z-index: 1000;
    display: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
    <?php if ( ! empty( $textTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-results.show {
    display: block;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-result-item {
    padding: 12px 16px;
    border-bottom: 1px solid <?php echo esc_attr( $resultsBorderColor ); ?>33;
    cursor: pointer;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-result-item:hover {
    background-color: <?php echo esc_attr( $resultsHoverBackgroundColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-result-item:last-child {
    border-bottom: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-result-title {
    font-weight: 600;
    margin-bottom: 4px;
    line-height: 1.4;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-result-excerpt {
    font-size: 14px;
    opacity: 0.8;
    line-height: 1.4;
    margin: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-result-type {
    font-size: 12px;
    opacity: 0.6;
    text-transform: uppercase;
    margin-top: 4px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-no-results {
    padding: 16px;
    text-align: center;
    opacity: 0.7;
}

/* Loading state */
.<?php echo esc_attr( $id ); ?> .digiblocks-search-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-search-loading::after {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid <?php echo esc_attr( $inputTextColor ); ?>33;
    border-top-color: <?php echo esc_attr( $inputTextColor ); ?>;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-form {
        gap: <?php echo esc_attr( $formGap['tablet'] ); ?>px;
        <?php if ( $buttonPosition === 'outside' ) : ?>
            <?php if ( $layout === 'vertical' ) : ?>
            flex-direction: column;
            align-items: stretch;
            <?php else : ?>
            flex-direction: row;
            align-items: center;
            <?php endif; ?>
        <?php else : ?>
            flex-direction: row;
            align-items: center;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-input {
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'tablet' ) ); ?>
        <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-button {
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'tablet' ) ); ?>
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-results {
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
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-form {
        flex-direction: column;
        gap: <?php echo esc_attr( $formGap['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-input {
		<?php echo esc_attr( digiblocks_get_dimensions( $inputBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputPadding, 'padding', 'mobile' ) ); ?>
        <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( $buttonPosition === 'inside' ) : ?>
        padding-right: <?php echo esc_attr( $inputPadding['mobile']['right'] . $inputPadding['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-button {
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
        <?php if ( ! empty( $buttonTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( $buttonPosition === 'inside' ) : ?>
        position: static;
        transform: none;
        width: 100%;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-search-results {
        <?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        min-width: 100%;
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