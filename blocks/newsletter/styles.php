<?php
/**
 * Newsletter Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                          = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-newsletter-' . uniqid();
$visibility                  = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$layout                      = isset( $attrs['layout'] ) ? $attrs['layout'] : 'stacked';
$align                       = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
];
$titleColor                  = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '';
$titleHoverColor             = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$descriptionColor            = isset( $attrs['descriptionColor'] ) ? $attrs['descriptionColor'] : '#666666';
$inputTextColor              = isset( $attrs['inputTextColor'] ) ? $attrs['inputTextColor'] : '';
$inputBackgroundColor        = isset( $attrs['inputBackgroundColor'] ) ? $attrs['inputBackgroundColor'] : '#ffffff';
$inputBorderColor            = isset( $attrs['inputBorderColor'] ) ? $attrs['inputBorderColor'] : '#e0e0e0';
$inputBorderFocusColor       = isset( $attrs['inputBorderFocusColor'] ) ? $attrs['inputBorderFocusColor'] : '#4a6cf7';
$inputPlaceholderColor       = isset( $attrs['inputPlaceholderColor'] ) ? $attrs['inputPlaceholderColor'] : '#999999';
$buttonTextColor             = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBackgroundColor       = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextHoverColor        = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '';
$buttonBackgroundHoverColor  = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '';
$buttonBorderColor           = isset( $attrs['buttonBorderColor'] ) ? $attrs['buttonBorderColor'] : '';
$buttonBorderHoverColor      = isset( $attrs['buttonBorderHoverColor'] ) ? $attrs['buttonBorderHoverColor'] : '';
$containerBorderColor        = isset( $attrs['containerBorderColor'] ) ? $attrs['containerBorderColor'] : '';
$containerBorderHoverColor   = isset( $attrs['containerBorderHoverColor'] ) ? $attrs['containerBorderHoverColor'] : '';
$backgroundColor             = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor        = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';

$titleTypography             = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 24, 'tablet' => 22, 'mobile' => 20],
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

$contentTypography       = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : [
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

$textTypography             = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : [
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

$buttonTypography            = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : [
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

$containerBorderRadius       = isset( $attrs['containerBorderRadius'] ) ? $attrs['containerBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];

$containerBorderWidth        = isset( $attrs['containerBorderWidth'] ) ? $attrs['containerBorderWidth'] : [
    'desktop' => 1,
    'tablet'  => 1,
    'mobile'  => 1,
];

$inputBorderRadius           = isset( $attrs['inputBorderRadius'] ) ? $attrs['inputBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];

$inputBorderWidth            = isset( $attrs['inputBorderWidth'] ) ? $attrs['inputBorderWidth'] : [
    'desktop' => 1,
    'tablet'  => 1,
    'mobile'  => 1,
];

$buttonBorderRadius          = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];

$buttonBorderWidth           = isset( $attrs['buttonBorderWidth'] ) ? $attrs['buttonBorderWidth'] : [
    'desktop' => 1,
    'tablet'  => 1,
    'mobile'  => 1,
];

$containerBorderStyle        = isset( $attrs['containerBorderStyle'] ) ? $attrs['containerBorderStyle'] : 'none';
$inputBorderStyle            = isset( $attrs['inputBorderStyle'] ) ? $attrs['inputBorderStyle'] : 'solid';
$buttonBorderStyle           = isset( $attrs['buttonBorderStyle'] ) ? $attrs['buttonBorderStyle'] : 'solid';

$spacing                     = isset( $attrs['spacing'] ) ? $attrs['spacing'] : [
	'desktop' => ['value' => 20, 'unit' => 'px'],
    'tablet'  => ['value' => 15, 'unit' => 'px'],
    'mobile'  => ['value' => 10, 'unit' => 'px'],
];

$inputSpacing                = isset( $attrs['inputSpacing'] ) ? $attrs['inputSpacing'] : [
	'desktop' => ['value' => 10, 'unit' => 'px'],
    'tablet'  => ['value' => 8, 'unit' => 'px'],
    'mobile'  => ['value' => 6, 'unit' => 'px'],
];

$padding                     = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                      = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

$boxShadow                   = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];

$boxShadowHover              = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];

$inputBoxShadow              = isset( $attrs['inputBoxShadow'] ) ? $attrs['inputBoxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];

$inputBoxShadowHover         = isset( $attrs['inputBoxShadowHover'] ) ? $attrs['inputBoxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.15)',
    'horizontal' => 0,
    'vertical'   => 2,
    'blur'       => 4,
    'spread'     => 0,
    'position'   => 'outset',
];

$buttonBoxShadow             = isset( $attrs['buttonBoxShadow'] ) ? $attrs['buttonBoxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];

$buttonBoxShadowHover        = isset( $attrs['buttonBoxShadowHover'] ) ? $attrs['buttonBoxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.15)',
    'horizontal' => 0,
    'vertical'   => 2,
    'blur'       => 8,
    'spread'     => 0,
    'position'   => 'outset',
];

// CSS Output
ob_start();
?>
/* Newsletter Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    <?php if ( ! empty( $backgroundColor ) ) : ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php endif; ?>
    <?php if ( $boxShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php endif; ?>
	<?php if ( $containerBorderStyle !== 'none' && ! empty( $containerBorderColor ) ) : ?>
    border: <?php echo esc_attr( $containerBorderWidth['desktop'] ); ?>px <?php echo esc_attr( $containerBorderStyle ); ?> <?php echo esc_attr( $containerBorderColor ); ?>;
    <?php else : ?>
    border: none;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $containerBorderRadius, 'border-radius', 'desktop' ) ); ?>
    transition: all 0.3s ease;
    text-align: <?php echo esc_attr( $align['desktop'] === 'center' ? 'center' : ( $align['desktop'] === 'right' ? 'right' : 'left' ) ); ?>;
}

.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( ! empty( $backgroundHoverColor ) ) : ?>
    background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
    <?php if ( $boxShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
    <?php if ( $containerBorderStyle !== 'none' && ! empty( $containerBorderHoverColor ) ) : ?>
    border-color: <?php echo esc_attr( $containerBorderHoverColor ); ?>;
    <?php endif; ?>
}

/* Newsletter Title */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-title {
    <?php if ( !empty($titleColor) ) : ?>
    color: <?php echo esc_attr( $titleColor ); ?>;
    <?php endif; ?>
    margin-top: 0;
    margin-bottom: <?php echo esc_attr($spacing['desktop']['value'] . ($spacing['desktop']['unit'] ?: 'px')); ?>;
    <?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $titleTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $titleTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $titleTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $titleTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    transition: color 0.3s ease;
}

<?php if ( ! empty( $titleHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-newsletter-title {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}
<?php endif; ?>

/* Newsletter Description */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-description {
    color: <?php echo esc_attr( $descriptionColor ); ?>;
    margin-bottom: <?php echo esc_attr($spacing['desktop']['value'] . ($spacing['desktop']['unit'] ?: 'px')); ?>;
    <?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['fontWeight'] ) ) : ?>
    font-weight: <?php echo esc_attr( $contentTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['fontStyle'] ) ) : ?>
    font-style: <?php echo esc_attr( $contentTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['textTransform'] ) ) : ?>
    text-transform: <?php echo esc_attr( $contentTypography['textTransform'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['textDecoration'] ) ) : ?>
    text-decoration: <?php echo esc_attr( $contentTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['lineHeight']['desktop'] ) ) : ?>
    line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

/* Newsletter Form */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-form {
    display: flex;
    <?php echo $layout === 'stacked' ? 'flex-direction: column;' : 'flex-direction: row;'; ?>
    gap: <?php echo esc_attr($inputSpacing['desktop']['value'] . ($inputSpacing['desktop']['unit'] ?: 'px')); ?>;
    <?php if ( $layout === 'inline' && $align['desktop'] === 'center' ) : ?>
    justify-content: center;
    <?php endif; ?>
    <?php if ( $layout === 'inline' && $align['desktop'] === 'right' ) : ?>
    justify-content: flex-end;
    <?php endif; ?>
}

/* Form Fields */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-fields {
    display: flex;
    <?php echo $layout === 'stacked' ? 'flex-direction: column;' : 'flex-direction: row;'; ?>
    gap: <?php echo esc_attr($inputSpacing['desktop']['value'] . ($inputSpacing['desktop']['unit'] ?: 'px')); ?>;
    <?php echo $layout === 'inline' ? 'flex: 1;' : 'width: 100%;'; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-field {
    <?php echo $layout === 'stacked' ? 'width: 100%;' : 'flex: 1;'; ?>
}

/* Input Container with Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
	<?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
    width: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    height: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php else : ?>
    width: 1em;
    height: 1em;
    <?php endif; ?>
    <?php if ( !empty($inputTextColor) ) : ?>
    fill: <?php echo esc_attr( $inputTextColor ); ?>;
    <?php endif; ?>
    pointer-events: none;
    z-index: 2;
    opacity: 0.7;
    transition: all 0.3s ease;
}

/* Input Styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input {
    width: 100%;
    padding: 12px 16px 12px 50px;
    <?php if ( !empty($inputTextColor) ) : ?>
    color: <?php echo esc_attr( $inputTextColor ); ?>;
    <?php endif; ?>
    background-color: <?php echo esc_attr( $inputBackgroundColor ); ?>;
	<?php if ( $inputBorderStyle !== 'none' && ! empty( $inputBorderColor ) ) : ?>
    border: <?php echo esc_attr( $inputBorderWidth['desktop'] ); ?>px <?php echo esc_attr( $inputBorderStyle ); ?> <?php echo esc_attr( $inputBorderColor ); ?>;
    <?php else : ?>
    border: none;
    <?php endif; ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( $inputBoxShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $inputBoxShadow ) ); ?>;
    <?php endif; ?>
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
    transition: all 0.3s ease;
    outline: none;
    box-shadow: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input::placeholder {
    color: <?php echo esc_attr( $inputPlaceholderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input:focus {
    border-color: <?php echo esc_attr( $inputBorderFocusColor ); ?>;
    <?php if ( $inputBoxShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $inputBoxShadowHover ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input:focus + .digiblocks-newsletter-input-icon {
    opacity: 1;
	fill: <?php echo esc_attr( $inputBorderFocusColor ?: $inputTextColor ); ?>;
}

/* Button Styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-button {
    padding: 12px 24px;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
    background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
    <?php if ( $buttonBorderStyle !== 'none' && ! empty( $buttonBorderColor ) ) : ?>
    border: <?php echo esc_attr( $buttonBorderWidth['desktop'] ); ?>px <?php echo esc_attr( $buttonBorderStyle ); ?> <?php echo esc_attr( $buttonBorderColor ); ?>;
    <?php else : ?>
    border: none;
    <?php endif; ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( $buttonBoxShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $buttonBoxShadow ) ); ?>;
    <?php endif; ?>
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
    cursor: pointer;
    transition: all 0.3s ease;
    <?php echo $layout === 'stacked' ? 'width: 100%;' : 'white-space: nowrap;'; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-button:hover {
    color: <?php echo esc_attr( $buttonTextHoverColor ?: $buttonTextColor ); ?>;
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ?: $buttonBackgroundColor ); ?>;
    <?php if ( ! empty( $buttonBorderHoverColor ) ) : ?>
    border-color: <?php echo esc_attr( $buttonBorderHoverColor ); ?>;
    <?php endif; ?>
    <?php if ( $buttonBoxShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $buttonBoxShadowHover ) ); ?>;
    <?php endif; ?>
}

/* Messages */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-message {
    margin-top: <?php echo esc_attr($spacing['desktop']['value'] . ($spacing['desktop']['unit'] ?: 'px')); ?>;
    padding: 12px;
    border-radius: 4px;
    display: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-message.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-message.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		<?php if ( $containerBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $containerBorderWidth['tablet'] ); ?>px;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $containerBorderRadius, 'border-radius', 'tablet' ) ); ?>
        text-align: <?php echo esc_attr( $align['tablet'] === 'center' ? 'center' : ( $align['tablet'] === 'right' ? 'right' : 'left' ) ); ?>;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-title {
    	margin-bottom: <?php echo esc_attr($spacing['tablet']['value'] . ($spacing['tablet']['unit'] ?: 'px')); ?>;
        <?php if ( ! empty( $titleTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-description {
    	margin-bottom: <?php echo esc_attr($spacing['tablet']['value'] . ($spacing['tablet']['unit'] ?: 'px')); ?>;
        <?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-form {
        <?php if ( $inputSpacing['tablet']['value'] ) : ?>
    	gap: <?php echo esc_attr($inputSpacing['tablet']['value'] . ($inputSpacing['tablet']['unit'] ?: 'px')); ?>;
		<?php endif; ?>
        <?php if ( $layout === 'inline' && $align['tablet'] === 'center' ) : ?>
        justify-content: center;
        <?php endif; ?>
        <?php if ( $layout === 'inline' && $align['tablet'] === 'right' ) : ?>
        justify-content: flex-end;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-fields {
        <?php if ( $inputSpacing['tablet']['value'] ) : ?>
    	gap: <?php echo esc_attr($inputSpacing['tablet']['value'] . ($inputSpacing['tablet']['unit'] ?: 'px')); ?>;
		<?php endif; ?>
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input-icon {
		<?php if ( ! empty( $textTypography['fontSize']['tablet'] ) ) : ?>
		width: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		height: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input {
		<?php if ( $inputBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $inputBorderWidth['tablet'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'tablet' ) ); ?>
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

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-button {
		<?php if ( $buttonBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $buttonBorderWidth['tablet'] ); ?>px;
		<?php endif; ?>
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

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-message {
    	margin-top: <?php echo esc_attr($spacing['tablet']['value'] . ($spacing['tablet']['unit'] ?: 'px')); ?>;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		<?php if ( $containerBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $containerBorderWidth['mobile'] ); ?>px;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $containerBorderRadius, 'border-radius', 'mobile' ) ); ?>
        text-align: <?php echo esc_attr( $align['mobile'] === 'center' ? 'center' : ( $align['mobile'] === 'right' ? 'right' : 'left' ) ); ?>;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-title {
    	margin-bottom: <?php echo esc_attr($spacing['mobile']['value'] . ($spacing['mobile']['unit'] ?: 'px')); ?>;
        <?php if ( ! empty( $titleTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-description {
    	margin-bottom: <?php echo esc_attr($spacing['mobile']['value'] . ($spacing['mobile']['unit'] ?: 'px')); ?>;
        <?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-form {
        flex-direction: column;
        <?php if ( $inputSpacing['mobile']['value'] ) : ?>
    	gap: <?php echo esc_attr($inputSpacing['mobile']['value'] . ($inputSpacing['mobile']['unit'] ?: 'px')); ?>;
		<?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-fields {
        flex-direction: column;
        <?php if ( $inputSpacing['mobile']['value'] ) : ?>
    	gap: <?php echo esc_attr($inputSpacing['mobile']['value'] . ($inputSpacing['mobile']['unit'] ?: 'px')); ?>;
		<?php endif; ?>
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input-icon {
		<?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
		width: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		height: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input {
		<?php if ( $inputBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $inputBorderWidth['mobile'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'mobile' ) ); ?>
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

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-button {
		<?php if ( $buttonBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $buttonBorderWidth['mobile'] ); ?>px;
		<?php endif; ?>
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
        width: 100%;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-message {
    	margin-top: <?php echo esc_attr($spacing['mobile']['value'] . ($spacing['mobile']['unit'] ?: 'px')); ?>;
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