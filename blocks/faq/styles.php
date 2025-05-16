<?php
/**
 * FAQ Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$id                    = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$items                 = isset( $attrs['items'] ) ? $attrs['items'] : array();
$titleColor            = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
$titleHoverColor       = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$titleActiveColor      = isset( $attrs['titleActiveColor'] ) ? $attrs['titleActiveColor'] : '#1e73be';
$backgroundColor       = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$backgroundHoverColor  = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$backgroundActiveColor = isset( $attrs['backgroundActiveColor'] ) ? $attrs['backgroundActiveColor'] : '#f7f7f7';
$contentColor          = isset( $attrs['contentColor'] ) ? $attrs['contentColor'] : '#666666';
$contentBackgroundColor = isset( $attrs['contentBackgroundColor'] ) ? $attrs['contentBackgroundColor'] : '';
$borderColor           = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor      = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$iconColor             = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#333333';
$iconHoverColor        = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconActiveColor       = isset( $attrs['iconActiveColor'] ) ? $attrs['iconActiveColor'] : '#1e73be';
$layout                = isset( $attrs['layout'] ) ? $attrs['layout'] : 'boxed';
$animation             = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$iconType              = isset( $attrs['iconType'] ) ? $attrs['iconType'] : 'plusMinus';
$iconPosition          = isset( $attrs['iconPosition'] ) ? $attrs['iconPosition'] : 'right';
$questionPrefix        = isset( $attrs['questionPrefix'] ) ? $attrs['questionPrefix'] : '';
$questionPrefixColor   = isset( $attrs['questionPrefixColor'] ) ? $attrs['questionPrefixColor'] : '';
$answerPrefix          = isset( $attrs['answerPrefix'] ) ? $attrs['answerPrefix'] : '';
$answerPrefixColor     = isset( $attrs['answerPrefixColor'] ) ? $attrs['answerPrefixColor'] : '';
$titleTag              = isset( $attrs['titleTag'] ) ? $attrs['titleTag'] : 'h3';
$schemaEnabled         = isset( $attrs['schemaEnabled'] ) ? $attrs['schemaEnabled'] : false;
$schemaType            = isset( $attrs['schemaType'] ) ? $attrs['schemaType'] : 'FAQPage';
$schemaName            = isset( $attrs['schemaName'] ) ? $attrs['schemaName'] : '';

// Get border attributes
$borderStyle    = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$borderRadius   = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
	'desktop' => array( 'top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px' ),
	'tablet'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
	'mobile'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
);
$borderWidth    = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
	'desktop' => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ),
	'tablet'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
	'mobile'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
);

// Get box shadow attributes
$boxShadow     = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
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

// Get spacing attributes
$padding      = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
	'desktop' => array( 'top' => 20, 'right' => 20, 'bottom' => 20, 'left' => 20, 'unit' => 'px' ),
	'tablet'  => array( 'top' => 15, 'right' => 15, 'bottom' => 15, 'left' => 15, 'unit' => 'px' ),
	'mobile'  => array( 'top' => 10, 'right' => 10, 'bottom' => 10, 'left' => 10, 'unit' => 'px' ),
);
$margin       = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
	'desktop' => array( 'top' => 0, 'right' => 0, 'bottom' => 30, 'left' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'top' => 0, 'right' => 0, 'bottom' => 25, 'left' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'top' => 0, 'right' => 0, 'bottom' => 20, 'left' => 0, 'unit' => 'px' ),
);
$itemsSpacing = isset( $attrs['itemsSpacing'] ) ? $attrs['itemsSpacing'] : array(
	'desktop' => 16,
	'tablet'  => 14,
	'mobile'  => 12,
);

// Get typography attributes
$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array( 'desktop' => 18, 'tablet' => 16, 'mobile' => 15 ),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array( 'desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3 ),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
	'letterSpacingUnit' => 'px',
);
$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array( 'desktop' => 16, 'tablet' => 15, 'mobile' => 14 ),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array( 'desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3 ),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array( 'desktop' => 0, 'tablet' => 0, 'mobile' => 0 ),
	'letterSpacingUnit' => 'px',
);

// Get icon size
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => 16,
	'tablet'  => 14,
	'mobile'  => 12,
);

// CSS Output
ob_start();
?>
/* FAQ Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
	width: 100%;
}

/* Base styles for questions and answers */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
	position: relative;
	margin-bottom: <?php echo esc_attr( $itemsSpacing['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	display: flex;
	align-items: center;
	<?php if ( 'left' === $iconPosition ) : ?>
	flex-direction: row-reverse;
	justify-content: flex-end;
	<?php else : ?>
	justify-content: space-between;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-text,
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-text-content {
	color: <?php echo esc_attr( $titleColor ); ?>;
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
	margin: 0;
	flex: 1;
	<?php if ( $questionPrefix ) : ?>
	display: flex;
	align-items: center;
	gap: .5rem;
	<?php endif; ?>
	transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-text-content {
	margin: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-prefix {
	<?php if ( $questionPrefixColor ) : ?>
	color: <?php echo esc_attr( $questionPrefixColor ); ?>;
	<?php endif; ?>
	font-weight: bold;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer-prefix {
	<?php if ( $answerPrefixColor ) : ?>
	color: <?php echo esc_attr( $answerPrefixColor ); ?>;
	<?php endif; ?>
	font-weight: bold;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer-content {
	color: <?php echo esc_attr( $contentColor ); ?>;
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
	<?php if ( $answerPrefix ) : ?>
	display: flex;
	gap: .5rem;
	<?php endif; ?>
}

/* Handle answer display states */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
	overflow: hidden;
	display: none;
	transition: height 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-answer {
	display: block;
}

/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	gap: 15px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	color: <?php echo esc_attr( $iconColor ); ?>;
	transition: all 0.3s ease;
	font-size: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-icon span {
	display: flex;
	align-items: center;
	justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-icon svg {
	width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
	height: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
	transition: transform 0.3s ease;
	fill: currentColor;
}

/* Rotate icons when active */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-arrow,
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-chevron,
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-triangle {
	transform: rotate(180deg);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-icon-arrow,
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-icon-chevron,
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-icon-triangle {
	display: inline-flex;
	transition: transform 0.3s ease;
}

/* Handle hover state */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question:hover .digiblocks-faq-question-text,
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question:hover .digiblocks-faq-question-text-content {
	<?php if ( $titleHoverColor ) : ?>
	color: <?php echo esc_attr( $titleHoverColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
	<?php if ( $iconHoverColor ) : ?>
	color: <?php echo esc_attr( $iconHoverColor ); ?>;
	<?php endif; ?>
}

/* Handle active state */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question-text,
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question-text-content {
	color: <?php echo esc_attr( $titleActiveColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
	color: <?php echo esc_attr( $iconActiveColor ); ?>;
}

<?php
// Layout-specific styles
switch ( $layout ) :
	case 'boxed':
?>
/* Boxed layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
	<?php 
	// Always apply border for boxed layout
	$current_border_style = ($borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none') ? $borderStyle : 'solid';
	?>
	border-style: <?php echo esc_attr( $current_border_style ); ?>;
	border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( ( 'inset' === $boxShadow['position'] ? 'inset ' : '' ) . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
	<?php else : ?>
	box-shadow: none;
	<?php endif; ?>
	
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item:hover {
	<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( ( 'inset' === $boxShadowHover['position'] ? 'inset ' : '' ) . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
	<?php endif; ?>
	
	<?php if ( $backgroundHoverColor ) : ?>
	background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $borderHoverColor ) : ?>
	border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	padding-top: 0;
	border-top: 1px solid <?php echo esc_attr( $borderColor ); ?>;
	<?php if ( $contentBackgroundColor ) : ?>
	background-color: <?php echo esc_attr( $contentBackgroundColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active {
	<?php if ( $backgroundActiveColor ) : ?>
	background-color: <?php echo esc_attr( $backgroundActiveColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-answer {
	padding-top: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] ); ?>;
}
<?php
		break;
	case 'classic':
?>
/* Classic layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
	border: none;
	border-bottom: 1px solid <?php echo esc_attr( $borderColor ); ?>;
	background-color: transparent;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	padding-top: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-answer {
	padding-top: 0;
}
<?php
		break;
	case 'separated':
?>
/* Separated layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php 
	// Apply borders to separated layout questions 
	$current_border_style = ($borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none') ? $borderStyle : 'solid';
	?>
	border-style: <?php echo esc_attr( $current_border_style ); ?>;
	border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( ( 'inset' === $boxShadow['position'] ? 'inset ' : '' ) . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
	<?php else : ?>
	box-shadow: none;
	<?php endif; ?>
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question:hover {
	<?php if ( $titleHoverColor ) : ?>
	color: <?php echo esc_attr( $titleHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $backgroundHoverColor ) : ?>
	background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $borderHoverColor ) : ?>
	border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( ( 'inset' === $boxShadowHover['position'] ? 'inset ' : '' ) . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question {
	<?php if ( $titleActiveColor ) : ?>
	color: <?php echo esc_attr( $titleActiveColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $backgroundActiveColor ) : ?>
	background-color: <?php echo esc_attr( $backgroundActiveColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php if ( $contentBackgroundColor ) : ?>
	background-color: <?php echo esc_attr( $contentBackgroundColor ); ?>;
	<?php endif; ?>
	
	<?php 
	// Apply borders to separated layout questions 
	$current_border_style = ($borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none') ? $borderStyle : 'solid';
	?>
	border-style: <?php echo esc_attr( $current_border_style ); ?>;
	border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	border-top: none;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	margin-top: -1px;
}
<?php
		break;
	case 'minimalist':
?>
/* Minimalist layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
	transition: all 0.3s ease;
	background-color: transparent;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	border-bottom: 2px solid <?php echo esc_attr( $borderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question:hover {
	<?php if ( $titleHoverColor ) : ?>
	color: <?php echo esc_attr( $titleHoverColor ); ?>;
	<?php endif; ?>
	
	border-color: <?php echo esc_attr( $titleHoverColor ?: $borderHoverColor ?: '#cccccc' ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question {
	<?php if ( $titleActiveColor ) : ?>
	color: <?php echo esc_attr( $titleActiveColor ); ?>;
	<?php endif; ?>
	
	border-color: <?php echo esc_attr( $titleActiveColor ?: '#1e73be' ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	padding-left: 0;
	padding-right: 0;
}
<?php
		break;
	case 'bordered':
?>
/* Bordered layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
	<?php 
	// Apply borders to bordered layout
	$current_border_style = ($borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none') ? $borderStyle : 'solid';
	?>
	border-style: <?php echo esc_attr( $current_border_style ); ?>;
	border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	
	background-color: transparent;
	transition: all 0.3s ease;
	overflow: hidden;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item:hover {
	<?php if ( $borderHoverColor ) : ?>
	border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	background-color: <?php echo esc_attr( $backgroundColor ?: '#f8f9fa' ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question:hover {
	<?php if ( $titleHoverColor ) : ?>
	color: <?php echo esc_attr( $titleHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $backgroundHoverColor ) : ?>
	background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-question {
	<?php if ( $titleActiveColor ) : ?>
	color: <?php echo esc_attr( $titleActiveColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $backgroundActiveColor ) : ?>
	background-color: <?php echo esc_attr( $backgroundActiveColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php if ( $contentBackgroundColor ) : ?>
	background-color: <?php echo esc_attr( $contentBackgroundColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active {
	border-color: <?php echo esc_attr( $titleActiveColor ?: $borderColor ?: '#1e73be' ); ?>;
}
<?php
		break;
	default:
?>
/* Default layout */
.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
	<?php 
	// Apply borders to default layout
	$current_border_style = ($borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none') ? $borderStyle : 'solid';
	?>
	border-style: <?php echo esc_attr( $current_border_style ); ?>;
	border-color: <?php echo esc_attr( $borderColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( ( 'inset' === $boxShadow['position'] ? 'inset ' : '' ) . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
	<?php else : ?>
	box-shadow: none;
	<?php endif; ?>
	
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	padding-top: 0;
	border-top: 1px solid <?php echo esc_attr( $borderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-answer {
	padding-top: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] ); ?>;
}
<?php
		break;
endswitch;
?>

/* Animation CSS if provided */
<?php if ( 'none' !== $animation && function_exists( 'digiblocks_get_animation_css' ) ) : ?>
<?php echo esc_html( digiblocks_get_animation_css( $animation, $id ) ); ?>
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( isset( $margin['tablet'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
		margin-bottom: <?php echo esc_attr( isset( $itemsSpacing['tablet'] ) ? $itemsSpacing['tablet'] : $itemsSpacing['desktop'] ); ?>px;
		<?php if ( 'separated' !== $layout ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question,
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-answer {
		<?php if ( isset( $padding['tablet'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
		<?php if ( isset( $padding['tablet'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		padding-top: 0;
		<?php endif; ?>
	}
	
	<?php if ( 'separated' === $layout ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	<?php endif; ?>
	
	<?php if ( 'minimalist' === $layout ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		padding-left: 0;
		padding-right: 0;
	}
	<?php endif; ?>
	
	<?php if ( isset( $iconSize['tablet'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-icon {
		font-size: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-icon svg {
		width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
		height: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
	}
	<?php endif; ?>
	
	<?php if ( isset( $titleTypography['fontSize']['tablet'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-text,
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-text-content {
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php if ( isset( $titleTypography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>
	
	<?php if ( isset( $contentTypography['fontSize']['tablet'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer-content {
		font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php if ( isset( $contentTypography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php if ( isset( $margin['mobile'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item {
		margin-bottom: <?php echo esc_attr( isset( $itemsSpacing['mobile'] ) ? $itemsSpacing['mobile'] : $itemsSpacing['desktop'] ); ?>px;
		<?php if ( 'separated' !== $layout ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question,
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-item.is-active .digiblocks-faq-answer {
		<?php if ( isset( $padding['mobile'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
		<?php if ( isset( $padding['mobile'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		padding-top: 0;
		<?php endif; ?>
	}
	
	<?php if ( 'separated' === $layout ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	<?php endif; ?>
	
	<?php if ( 'minimalist' === $layout ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		padding-left: 0;
		padding-right: 0;
	}
	<?php endif; ?>
	
	<?php if ( isset( $iconSize['mobile'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-icon {
		font-size: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-icon svg {
		width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
		height: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
	}
	<?php endif; ?>
	
	<?php if ( isset( $titleTypography['fontSize']['mobile'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-text,
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-question-text-content {
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php if ( isset( $titleTypography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>
	
	<?php if ( isset( $contentTypography['fontSize']['mobile'] ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-faq-answer-content {
		font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php if ( isset( $contentTypography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
	}
	<?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();