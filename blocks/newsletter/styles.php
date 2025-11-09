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
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
$layout                      = isset( $attrs['layout'] ) ? $attrs['layout'] : 'stacked';
$align                       = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'left',
    'tablet'  => '',
    'mobile'  => '',
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
    'fontSize'          => ['desktop' => 24, 'tablet' => '', 'mobile' => ''],
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => '', 'mobile' => ''],
    'letterSpacing'     => ['desktop' => 0, 'tablet' => '', 'mobile' => ''],
];

$contentTypography       = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => '', 'mobile' =>''],
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => '', 'mobile' =>''],
    'letterSpacing'     => ['desktop' => 0, 'tablet' => '', 'mobile' =>''],
];

$textTypography             = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => '', 'mobile' =>''],
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => '', 'mobile' =>''],
    'letterSpacing'     => ['desktop' => 0, 'tablet' => '', 'mobile' =>''],
];

$buttonTypography            = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => '', 'mobile' =>''],
    'fontWeight'        => '500',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => '', 'mobile' =>''],
    'letterSpacing'     => ['desktop' => 0, 'tablet' => '', 'mobile' =>''],
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
    'tablet'  => ['value' => '', 'unit' => 'px'],
    'mobile'  => ['value' => '', 'unit' => 'px'],
];

$inputSpacing                = isset( $attrs['inputSpacing'] ) ? $attrs['inputSpacing'] : [
	'desktop' => ['value' => 10, 'unit' => 'px'],
    'tablet'  => ['value' => '', 'unit' => 'px'],
    'mobile'  => ['value' => '', 'unit' => 'px'],
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
    text-align: <?php echo esc_attr( $align['desktop'] === 'center' ? 'center' : ( $align['desktop'] === 'right' ? 'right' : 'left' ) ); ?>;
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
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
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'desktop' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $transformHover ) && isset( $transformHover['transitionDuration'] ) && '' !== $transformHover['transitionDuration'] && null !== $transformHover['transitionDuration'] ) : ?>
	transition: all <?php echo esc_attr( $transformHover['transitionDuration'] ); ?>ms ease;
	<?php else : ?>
    transition: all 0.3s ease;
	<?php endif; ?>
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

	<?php
	$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
	if ( ! empty( $transform_hover_value ) ) :
	?>
		transform: <?php echo esc_attr( $transform_hover_value ); ?>;
		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
	<?php endif; ?>
}

/* Newsletter Title */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-title {
    <?php if ( !empty($titleColor) ) : ?>
    color: <?php echo esc_attr( $titleColor ); ?>;
    <?php endif; ?>
    margin-top: 0;
    margin-bottom: <?php echo esc_attr($spacing['desktop']['value'] . ((is_array($spacing['desktop']) && array_key_exists('unit', $spacing['desktop']) ? $spacing['desktop']['unit'] : 'px') ?? '')); ?>;
    <?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['desktop'] ) && isset( $titleTypography['fontSize']['desktop']['value'] ) && $titleTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop']['value'] . ( $titleTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['desktop'] ) && isset( $titleTypography['lineHeight']['desktop']['value'] ) && $titleTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop']['value'] . ( $titleTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['desktop'] ) && isset( $titleTypography['letterSpacing']['desktop']['value'] ) && $titleTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop']['value'] . ( $titleTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
    margin-bottom: <?php echo esc_attr($spacing['desktop']['value'] . ((is_array($spacing['desktop']) && array_key_exists('unit', $spacing['desktop']) ? $spacing['desktop']['unit'] : 'px') ?? '')); ?>;
    <?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) && $contentTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop']['value'] . ( $contentTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['desktop'] ) && isset( $contentTypography['lineHeight']['desktop']['value'] ) && $contentTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop']['value'] . ( $contentTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) && $contentTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop']['value'] . ( $contentTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
}

/* Newsletter Form */
.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-form {
    display: flex;
    <?php echo $layout === 'stacked' ? 'flex-direction: column;' : 'flex-direction: row;'; ?>
    gap: <?php echo esc_attr($inputSpacing['desktop']['value'] . ((is_array($inputSpacing['desktop']) && array_key_exists('unit', $inputSpacing['desktop']) ? $inputSpacing['desktop']['unit'] : 'px') ?? '')); ?>;
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
    gap: <?php echo esc_attr($inputSpacing['desktop']['value'] . ((is_array($inputSpacing['desktop']) && array_key_exists('unit', $inputSpacing['desktop']) ? $inputSpacing['desktop']['unit'] : 'px') ?? '')); ?>;
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
	<?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) && $textTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    width: <?php echo esc_attr( $textTypography['fontSize']['desktop']['value'] . ( $textTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
    height: <?php echo esc_attr( $textTypography['fontSize']['desktop']['value'] . ( $textTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) && $textTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop']['value'] . ( $textTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['desktop'] ) && isset( $textTypography['lineHeight']['desktop']['value'] ) && $textTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop']['value'] . ( $textTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['desktop'] ) && isset( $textTypography['letterSpacing']['desktop']['value'] ) && $textTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop']['value'] . ( $textTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
	fill: <?php echo esc_attr( $inputTextColor ); ?>;
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
    <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['desktop'] ) && isset( $buttonTypography['fontSize']['desktop']['value'] ) && $buttonTypography['fontSize']['desktop']['value'] !== '' ) : ?>
    font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop']['value'] . ( $buttonTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    <?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['desktop'] ) && isset( $buttonTypography['lineHeight']['desktop']['value'] ) && $buttonTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
    line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop']['value'] . ( $buttonTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    <?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['desktop'] ) && isset( $buttonTypography['letterSpacing']['desktop']['value'] ) && $buttonTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
    letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop']['value'] . ( $buttonTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
    margin-top: <?php echo esc_attr($spacing['desktop']['value'] . ((is_array($spacing['desktop']) && array_key_exists('unit', $spacing['desktop']) ? $spacing['desktop']['unit'] : 'px') ?? '')); ?>;
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
		<?php if ( !empty($align['tablet']) ) : ?>
		text-align: <?php echo esc_attr( $align['tablet'] === 'center' ? 'center' : ( $align['tablet'] === 'right' ? 'right' : 'left' ) ); ?>;
		<?php endif; ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '';
            $h_unit_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '';
            $v_unit_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
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
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'tablet' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'tablet' ) ); ?>;
		}
	<?php endif; ?>

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-title {
        <?php if ( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && ! empty( $spacing['tablet']['value'] ) ) : ?>
    	margin-bottom: <?php echo esc_attr(( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && isset( $spacing['tablet']['value'] ) ? $spacing['tablet']['value'] : '' ) . (( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && isset( $spacing['tablet']['unit'] ) ? $spacing['tablet']['unit'] : '' ) ?? '')); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) && $titleTypography['fontSize']['tablet']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet']['value'] . ( $titleTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet'] ) && isset( $titleTypography['lineHeight']['tablet']['value'] ) && $titleTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet']['value'] . ( $titleTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) && $titleTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet']['value'] . ( $titleTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-description {
        <?php if ( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && ! empty( $spacing['tablet']['value'] ) ) : ?>
    	margin-bottom: <?php echo esc_attr(( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && isset( $spacing['tablet']['value'] ) ? $spacing['tablet']['value'] : '' ) . (( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && isset( $spacing['tablet']['unit'] ) ? $spacing['tablet']['unit'] : '' ) ?? '')); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) && $contentTypography['fontSize']['tablet']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet']['value'] . ( $contentTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) && $contentTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet']['value'] . ( $contentTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) && $contentTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet']['value'] . ( $contentTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-form {
        <?php if ( isset( $inputSpacing['tablet'] ) && is_array( $inputSpacing['tablet'] ) && ! empty( $inputSpacing['tablet']['value'] ) ) : ?>
    	gap: <?php echo esc_attr(( isset( $inputSpacing['tablet'] ) && is_array( $inputSpacing['tablet'] ) && isset( $inputSpacing['tablet']['value'] ) ? $inputSpacing['tablet']['value'] : '' ) . (( isset( $inputSpacing['tablet'] ) && is_array( $inputSpacing['tablet'] ) && isset( $inputSpacing['tablet']['unit'] ) ? $inputSpacing['tablet']['unit'] : '' ) ?? '')); ?>;
		<?php endif; ?>
        <?php if ( !empty($align['tablet']) && $layout === 'inline' && $align['tablet'] === 'center' ) : ?>
		justify-content: center;
		<?php endif; ?>
		<?php if ( !empty($align['tablet']) && $layout === 'inline' && $align['tablet'] === 'right' ) : ?>
		justify-content: flex-end;
		<?php endif; ?>
    }

    <?php if ( isset( $inputSpacing['tablet'] ) && is_array( $inputSpacing['tablet'] ) && ! empty( $inputSpacing['tablet']['value'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-fields {
    	gap: <?php echo esc_attr(( isset( $inputSpacing['tablet'] ) && is_array( $inputSpacing['tablet'] ) && isset( $inputSpacing['tablet']['value'] ) ? $inputSpacing['tablet']['value'] : '' ) . (( isset( $inputSpacing['tablet'] ) && is_array( $inputSpacing['tablet'] ) && isset( $inputSpacing['tablet']['unit'] ) ? $inputSpacing['tablet']['unit'] : '' ) ?? '')); ?>;
    }
	<?php endif; ?>

	.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input-icon {
		<?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) && $textTypography['fontSize']['tablet']['value'] !== '' ) : ?>
		width: <?php echo esc_attr( $textTypography['fontSize']['tablet']['value'] . ( $textTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
		height: <?php echo esc_attr( $textTypography['fontSize']['tablet']['value'] . ( $textTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
	}

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input {
		<?php if ( $inputBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $inputBorderWidth['tablet'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) && $textTypography['fontSize']['tablet']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet']['value'] . ( $textTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['tablet'] ) && isset( $textTypography['lineHeight']['tablet']['value'] ) && $textTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet']['value'] . ( $textTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['tablet'] ) && isset( $textTypography['letterSpacing']['tablet']['value'] ) && $textTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet']['value'] . ( $textTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-button {
		<?php if ( $buttonBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $buttonBorderWidth['tablet'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['tablet'] ) && isset( $buttonTypography['fontSize']['tablet']['value'] ) && $buttonTypography['fontSize']['tablet']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet']['value'] . ( $buttonTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['tablet'] ) && isset( $buttonTypography['lineHeight']['tablet']['value'] ) && $buttonTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet']['value'] . ( $buttonTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['tablet'] ) && isset( $buttonTypography['letterSpacing']['tablet']['value'] ) && $buttonTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet']['value'] . ( $buttonTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }

    <?php if ( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && ! empty( $spacing['tablet']['value'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-message {
    	margin-top: <?php echo esc_attr(( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && isset( $spacing['tablet']['value'] ) ? $spacing['tablet']['value'] : '' ) . (( isset( $spacing['tablet'] ) && is_array( $spacing['tablet'] ) && isset( $spacing['tablet']['unit'] ) ? $spacing['tablet']['unit'] : '' ) ?? '')); ?>;
    }
    <?php endif; ?>
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
        <?php if ( !empty($align['mobile']) ) : ?>
		text-align: <?php echo esc_attr( $align['mobile'] === 'center' ? 'center' : ( $align['mobile'] === 'right' ? 'right' : 'left' ) ); ?>;
		<?php endif; ?>
    	<?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '';
            $h_unit_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '';
            $v_unit_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
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
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'mobile' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'mobile' ) ); ?>;
		}
	<?php endif; ?>

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-title {
        <?php if ( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && ! empty( $spacing['mobile']['value'] ) ) : ?>
    	margin-bottom: <?php echo esc_attr(( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && isset( $spacing['mobile']['value'] ) ? $spacing['mobile']['value'] : '' ) . (( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && isset( $spacing['mobile']['unit'] ) ? $spacing['mobile']['unit'] : '' ) ?? '')); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) && $titleTypography['fontSize']['mobile']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile']['value'] . ( $titleTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile'] ) && isset( $titleTypography['lineHeight']['mobile']['value'] ) && $titleTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile']['value'] . ( $titleTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) && $titleTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile']['value'] . ( $titleTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-description {
        <?php if ( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && ! empty( $spacing['mobile']['value'] ) ) : ?>
    	margin-bottom: <?php echo esc_attr(( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && isset( $spacing['mobile']['value'] ) ? $spacing['mobile']['value'] : '' ) . (( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && isset( $spacing['mobile']['unit'] ) ? $spacing['mobile']['unit'] : '' ) ?? '')); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) && $contentTypography['fontSize']['mobile']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile']['value'] . ( $contentTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) && $contentTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile']['value'] . ( $contentTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) && $contentTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile']['value'] . ( $contentTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-form {
        flex-direction: column;
        <?php if ( isset( $inputSpacing['mobile'] ) && is_array( $inputSpacing['mobile'] ) && ! empty( $inputSpacing['mobile']['value'] ) ) : ?>
    	gap: <?php echo esc_attr(( isset( $inputSpacing['mobile'] ) && is_array( $inputSpacing['mobile'] ) && isset( $inputSpacing['mobile']['value'] ) ? $inputSpacing['mobile']['value'] : '' ) . (( isset( $inputSpacing['mobile'] ) && is_array( $inputSpacing['mobile'] ) && isset( $inputSpacing['mobile']['unit'] ) ? $inputSpacing['mobile']['unit'] : '' ) ?? '')); ?>;
		<?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-fields {
        flex-direction: column;
        <?php if ( isset( $inputSpacing['mobile'] ) && is_array( $inputSpacing['mobile'] ) && ! empty( $inputSpacing['mobile']['value'] ) ) : ?>
    	gap: <?php echo esc_attr(( isset( $inputSpacing['mobile'] ) && is_array( $inputSpacing['mobile'] ) && isset( $inputSpacing['mobile']['value'] ) ? $inputSpacing['mobile']['value'] : '' ) . (( isset( $inputSpacing['mobile'] ) && is_array( $inputSpacing['mobile'] ) && isset( $inputSpacing['mobile']['unit'] ) ? $inputSpacing['mobile']['unit'] : '' ) ?? '')); ?>;
		<?php endif; ?>
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input-icon {
		<?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) && $textTypography['fontSize']['mobile']['value'] !== '' ) : ?>
		width: <?php echo esc_attr( $textTypography['fontSize']['mobile']['value'] . ( $textTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
		height: <?php echo esc_attr( $textTypography['fontSize']['mobile']['value'] . ( $textTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
	}

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-input {
		<?php if ( $inputBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $inputBorderWidth['mobile'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $inputBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) && $textTypography['fontSize']['mobile']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile']['value'] . ( $textTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['mobile'] ) && isset( $textTypography['lineHeight']['mobile']['value'] ) && $textTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile']['value'] . ( $textTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['mobile'] ) && isset( $textTypography['letterSpacing']['mobile']['value'] ) && $textTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile']['value'] . ( $textTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-button {
		<?php if ( $buttonBorderStyle !== 'none' ) : ?>
		border-width: <?php echo esc_attr( $buttonBorderWidth['mobile'] ); ?>px;
		<?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['mobile'] ) && isset( $buttonTypography['fontSize']['mobile']['value'] ) && $buttonTypography['fontSize']['mobile']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile']['value'] . ( $buttonTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['mobile'] ) && isset( $buttonTypography['lineHeight']['mobile']['value'] ) && $buttonTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile']['value'] . ( $buttonTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['mobile'] ) && isset( $buttonTypography['letterSpacing']['mobile']['value'] ) && $buttonTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile']['value'] . ( $buttonTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        width: 100%;
    }

    <?php if ( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && ! empty( $spacing['mobile']['value'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-newsletter-message {
    	margin-top: <?php echo esc_attr(( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && isset( $spacing['mobile']['value'] ) ? $spacing['mobile']['value'] : '' ) . (( isset( $spacing['mobile'] ) && is_array( $spacing['mobile'] ) && isset( $spacing['mobile']['unit'] ) ? $spacing['mobile']['unit'] : '' ) ?? '')); ?>;
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

<?php
$digiblocks_css_output = ob_get_clean();