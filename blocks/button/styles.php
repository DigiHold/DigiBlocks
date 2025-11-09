<?php
/**
 * Button Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes with defaults.
$id                  = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility          = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
$hoverEffect             = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
$link                = isset( $attrs['url'] ) ? $attrs['url'] : '';
$size                = isset( $attrs['size'] ) ? $attrs['size'] : 'medium';
$fill                = isset( $attrs['fill'] ) ? $attrs['fill'] : false;
$onlyIcon            = isset( $attrs['onlyIcon'] ) ? $attrs['onlyIcon'] : false;
$iconWidth           = isset( $attrs['iconWidth'] ) ? $attrs['iconWidth'] : array(
	'desktop' => array( 'value' => '', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$iconHeight          = isset( $attrs['iconHeight'] ) ? $attrs['iconHeight'] : array(
	'desktop' => array( 'value' => '', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$iconGap             = isset( $attrs['iconGap'] ) ? $attrs['iconGap'] : array(
	'desktop' => array( 'value' => '', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$iconColor           = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '';
$iconHoverColor      = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$textColor           = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#ffffff';
$textHoverColor      = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor     = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#1e73be';
$backgroundHoverColor = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$borderStyle         = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor         = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '';
$borderHoverColor    = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';

// Get spacing attributes with fallbacks
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
	'desktop' => array( 'top' => 12, 'right' => 24, 'bottom' => 12, 'left' => 24, 'unit' => 'px' ),
	'tablet'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
	'mobile'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
);

$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

$borderWidth = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
	'desktop' => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ),
	'tablet'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
	'mobile'  => array( 'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px' ),
);

$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');

$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
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

$buttonTypography = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : array(
	'fontFamily' => '',
    'fontSize' => array(
        'desktop' => array( 'value' => '', 'unit' => 'px' ),
        'tablet' => array( 'value' => '', 'unit' => 'px' ),
        'mobile' => array( 'value' => '', 'unit' => 'px' ),
    ),
    'fontWeight' => '',
    'fontStyle' => 'normal',
    'textTransform' => '',
    'textDecoration' => '',
    'lineHeight' => array(
        'desktop' => array( 'value' => '', 'unit' => 'em' ),
        'tablet' => array( 'value' => '', 'unit' => 'em' ),
        'mobile' => array( 'value' => '', 'unit' => 'em' ),
    ),
    'letterSpacing' => array(
        'desktop' => array( 'value' => '', 'unit' => 'px' ),
        'tablet' => array( 'value' => '', 'unit' => 'px' ),
        'mobile' => array( 'value' => '', 'unit' => 'px' ),
    ),
);

// CSS Output
ob_start();
?>
/* Button Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	line-height: 1;
	white-space: nowrap;
	box-sizing: border-box;
	<?php
	$gap_desktop = isset( $iconGap['desktop'] ) && is_array( $iconGap['desktop'] ) && isset( $iconGap['desktop']['value'] ) && '' !== $iconGap['desktop']['value'] && null !== $iconGap['desktop']['value'] ? $iconGap['desktop']['value'] : '';
	$gap_desktop_unit = isset( $iconGap['desktop'] ) && is_array( $iconGap['desktop'] ) && isset( $iconGap['desktop']['unit'] ) ? $iconGap['desktop']['unit'] : 'px';
	if ( '' !== $gap_desktop ) :
	?>
	gap: <?php echo esc_attr( $gap_desktop . $gap_desktop_unit ); ?>;
	<?php else : ?>
	gap: 8px;
	<?php endif; ?>
	
	color: <?php echo esc_attr( $textColor ); ?>;
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;

	<?php if ( $link ) : ?>
		cursor: pointer;
	<?php endif; ?>
	
	<?php if ( $fill ) : ?>
		width: 100%;
	<?php endif; ?>
	
	<?php
	// Always use custom padding
	echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) );
	?>

	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
		
	<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php else : ?>
		border: none;
	<?php endif; ?>

	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
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
	color: <?php echo esc_attr( $textHoverColor ?: $textColor ); ?>;
	<?php
	$effects_without_bg = array( 'none', 'grow-shadow', 'pulse', 'bounce', 'shine' );
	if ( empty( $hoverEffect ) || in_array( $hoverEffect, $effects_without_bg, true ) ) :
	?>
		background-color: <?php echo esc_attr( $backgroundHoverColor ?: $backgroundColor ); ?>;
	<?php endif; ?>
	text-decoration: none;

	<?php if ( $borderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>

	<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	<?php endif; ?>

	<?php
	$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
	if ( ! empty( $transform_hover_value ) ) :
	?>
		transform: <?php echo esc_attr( $transform_hover_value ); ?>;
		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
	<?php endif; ?>
}

<?php
$effect_color = ! empty( $backgroundHoverColor ) ? $backgroundHoverColor : $backgroundColor;

if ( ! empty( $hoverEffect ) && 'none' !== $hoverEffect ) :
	switch ( $hoverEffect ) {
		case 'sweep-corners':
			?>
.<?php echo esc_attr( $id ); ?> {
	overflow: hidden;
	position: relative;
	z-index: 0;
}
.<?php echo esc_attr( $id ); ?>::before, .<?php echo esc_attr( $id ); ?>::after, .<?php echo esc_attr( $id ); ?> .digiblocks-button-content-wrapper::before, .<?php echo esc_attr( $id ); ?> .digiblocks-button-content-wrapper::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: <?php echo esc_attr( $effect_color ); ?>;
	transition: all 0.5s ease;
	z-index: -1;
}
.<?php echo esc_attr( $id ); ?>::before {
	transform: translate(-100%, -100%);
}
.<?php echo esc_attr( $id ); ?>::after {
	transform: translate(-100%, 100%);
}
.<?php echo esc_attr( $id ); ?> .digiblocks-button-content-wrapper::before {
	transform: translate(100%, -100%);
}
.<?php echo esc_attr( $id ); ?> .digiblocks-button-content-wrapper::after {
	transform: translate(100%, 100%);
}
.<?php echo esc_attr( $id ); ?>:hover::before {
	transform: translate(-49%, -49%);
}
.<?php echo esc_attr( $id ); ?>:hover::after {
	transform: translate(-49%, 49%);
}
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-button-content-wrapper::before {
	transform: translate(50%, -50%);
}
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-button-content-wrapper::after {
	transform: translate(50%, 50%);
}
.<?php echo esc_attr( $id ); ?> .digiblocks-button-text {
	position: relative;
	z-index: 1;
}
			<?php
			break;
		case 'sweep-to-right':
			?>
.<?php echo esc_attr( $id ); ?> {
	overflow: hidden;
	position: relative;
	z-index: 0;
}
.<?php echo esc_attr( $id ); ?>::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 100%;
	background-color: <?php echo esc_attr( $effect_color ); ?>;
	transition: width 0.4s ease;
	z-index: -1;
}
.<?php echo esc_attr( $id ); ?>:hover::before {
	width: 100%;
}
			<?php
			break;
		case 'sweep-to-left':
			?>
.<?php echo esc_attr( $id ); ?> {
	overflow: hidden;
	position: relative;
	z-index: 0;
}
.<?php echo esc_attr( $id ); ?>::before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	width: 0;
	height: 100%;
	background-color: <?php echo esc_attr( $effect_color ); ?>;
	transition: width 0.4s ease;
	z-index: -1;
}
.<?php echo esc_attr( $id ); ?>:hover::before {
	width: 100%;
}
			<?php
			break;
		case 'sweep-to-top':
			?>
.<?php echo esc_attr( $id ); ?> {
	overflow: hidden;
	position: relative;
	z-index: 0;
}
.<?php echo esc_attr( $id ); ?>::before {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0;
	background-color: <?php echo esc_attr( $effect_color ); ?>;
	transition: height 0.4s ease;
	z-index: -1;
}
.<?php echo esc_attr( $id ); ?>:hover::before {
	height: 100%;
}
			<?php
			break;
		case 'sweep-to-bottom':
			?>
.<?php echo esc_attr( $id ); ?> {
	overflow: hidden;
	position: relative;
	z-index: 0;
}
.<?php echo esc_attr( $id ); ?>::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 0;
	background-color: <?php echo esc_attr( $effect_color ); ?>;
	transition: height 0.4s ease;
	z-index: -1;
}
.<?php echo esc_attr( $id ); ?>:hover::before {
	height: 100%;
}
			<?php
			break;
		case 'grow-shadow':
			?>
.<?php echo esc_attr( $id ); ?> {
	transition: all 0.3s ease, box-shadow 0.3s ease;
}
.<?php echo esc_attr( $id ); ?>:hover {
	transform: translateY(-3px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
			<?php
			break;
		case 'pulse':
			?>
.<?php echo esc_attr( $id ); ?> {
	transition: all 0.3s ease;
}
.<?php echo esc_attr( $id ); ?>:hover {
	animation: button-pulse-<?php echo esc_attr( $id ); ?> 0.6s ease-in-out;
}
@keyframes button-pulse-<?php echo esc_attr( $id ); ?> {
	0%, 100% { transform: scale(1); }
	50% { transform: scale(1.05); }
}
			<?php
			break;
		case 'bounce':
			?>
.<?php echo esc_attr( $id ); ?> {
	transition: all 0.3s ease;
}
.<?php echo esc_attr( $id ); ?>:hover {
	animation: button-bounce-<?php echo esc_attr( $id ); ?> 0.6s ease;
}
@keyframes button-bounce-<?php echo esc_attr( $id ); ?> {
	0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
	40% { transform: translateY(-10px); }
	60% { transform: translateY(-5px); }
}
			<?php
			break;
		case 'border-expand':
			?>
.<?php echo esc_attr( $id ); ?> {
	position: relative;
	overflow: hidden;
}
.<?php echo esc_attr( $id ); ?>::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	border: 2px solid <?php echo esc_attr( $effect_color ); ?>;
	border-radius: inherit;
	transform: translate(-50%, -50%);
	transition: all 0.4s ease;
	opacity: 0;
}
.<?php echo esc_attr( $id ); ?>:hover::before {
	width: calc(100% - 8px);
	height: calc(100% - 8px);
	opacity: 1;
}
			<?php
			break;
		case 'shine':
			?>
.<?php echo esc_attr( $id ); ?> {
	position: relative;
	overflow: hidden;
}
.<?php echo esc_attr( $id ); ?>::after {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 50%;
	height: 100%;
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
	transition: left 0.6s ease;
}
.<?php echo esc_attr( $id ); ?>:hover::after {
	left: 100%;
}
			<?php
			break;
	}
endif;
?>

/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-button-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	<?php if ( ! empty( $iconColor ) ) : ?>
		color: <?php echo esc_attr( $iconColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-button-icon svg {
	<?php
	$icon_width_desktop = isset( $iconWidth['desktop'] ) && is_array( $iconWidth['desktop'] ) && isset( $iconWidth['desktop']['value'] ) && '' !== $iconWidth['desktop']['value'] && null !== $iconWidth['desktop']['value'] ? $iconWidth['desktop']['value'] : '';
	$icon_width_desktop_unit = isset( $iconWidth['desktop'] ) && is_array( $iconWidth['desktop'] ) && isset( $iconWidth['desktop']['unit'] ) ? $iconWidth['desktop']['unit'] : 'px';

	$icon_height_desktop = isset( $iconHeight['desktop'] ) && is_array( $iconHeight['desktop'] ) && isset( $iconHeight['desktop']['value'] ) && '' !== $iconHeight['desktop']['value'] && null !== $iconHeight['desktop']['value'] ? $iconHeight['desktop']['value'] : '';
	$icon_height_desktop_unit = isset( $iconHeight['desktop'] ) && is_array( $iconHeight['desktop'] ) && isset( $iconHeight['desktop']['unit'] ) ? $iconHeight['desktop']['unit'] : 'px';
	?>
	<?php if ( '' !== $icon_width_desktop ) : ?>
		width: <?php echo esc_attr( $icon_width_desktop . $icon_width_desktop_unit ); ?>;
	<?php else : ?>
		width: 1em;
	<?php endif; ?>
	<?php if ( '' !== $icon_height_desktop ) : ?>
		height: <?php echo esc_attr( $icon_height_desktop . $icon_height_desktop_unit ); ?>;
	<?php else : ?>
		height: 1em;
	<?php endif; ?>
	fill: currentColor;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-button-icon {
	<?php if ( ! empty( $iconHoverColor ) ) : ?>
		color: <?php echo esc_attr( $iconHoverColor ); ?>;
	<?php endif; ?>
}

/* Typography for all inner buttons */
.<?php echo esc_attr( $id ); ?> {
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
}

/* Responsive styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php
		$gap_tablet = isset( $iconGap['tablet'] ) && is_array( $iconGap['tablet'] ) && isset( $iconGap['tablet']['value'] ) && '' !== $iconGap['tablet']['value'] && null !== $iconGap['tablet']['value'] ? $iconGap['tablet']['value'] : '';
		$gap_tablet_unit = isset( $iconGap['tablet'] ) && is_array( $iconGap['tablet'] ) && isset( $iconGap['tablet']['unit'] ) ? $iconGap['tablet']['unit'] : 'px';
		if ( '' !== $gap_tablet ) :
		?>
		gap: <?php echo esc_attr( $gap_tablet . $gap_tablet_unit ); ?>;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
		<?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['tablet'] ) && isset( $buttonTypography['fontSize']['tablet']['value'] ) && $buttonTypography['fontSize']['tablet']['value'] !== '' ) : ?>
			font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet']['value'] . ( $buttonTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['tablet'] ) && isset( $buttonTypography['lineHeight']['tablet']['value'] ) && $buttonTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
			line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet']['value'] . ( $buttonTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['tablet'] ) && isset( $buttonTypography['letterSpacing']['tablet']['value'] ) && $buttonTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
			letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet']['value'] . ( $buttonTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
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

	.<?php echo esc_attr( $id ); ?> .digiblocks-button-icon svg {
		<?php
		$icon_width_tablet = isset( $iconWidth['tablet'] ) && is_array( $iconWidth['tablet'] ) && isset( $iconWidth['tablet']['value'] ) && '' !== $iconWidth['tablet']['value'] && null !== $iconWidth['tablet']['value'] ? $iconWidth['tablet']['value'] : '';
		$icon_width_tablet_unit = isset( $iconWidth['tablet'] ) && is_array( $iconWidth['tablet'] ) && isset( $iconWidth['tablet']['unit'] ) ? $iconWidth['tablet']['unit'] : 'px';

		$icon_height_tablet = isset( $iconHeight['tablet'] ) && is_array( $iconHeight['tablet'] ) && isset( $iconHeight['tablet']['value'] ) && '' !== $iconHeight['tablet']['value'] && null !== $iconHeight['tablet']['value'] ? $iconHeight['tablet']['value'] : '';
		$icon_height_tablet_unit = isset( $iconHeight['tablet'] ) && is_array( $iconHeight['tablet'] ) && isset( $iconHeight['tablet']['unit'] ) ? $iconHeight['tablet']['unit'] : 'px';
		?>
		<?php if ( '' !== $icon_width_tablet ) : ?>
			width: <?php echo esc_attr( $icon_width_tablet . $icon_width_tablet_unit ); ?>;
		<?php endif; ?>
		<?php if ( '' !== $icon_height_tablet ) : ?>
			height: <?php echo esc_attr( $icon_height_tablet . $icon_height_tablet_unit ); ?>;
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
}

@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php
		$gap_mobile = isset( $iconGap['mobile'] ) && is_array( $iconGap['mobile'] ) && isset( $iconGap['mobile']['value'] ) && '' !== $iconGap['mobile']['value'] && null !== $iconGap['mobile']['value'] ? $iconGap['mobile']['value'] : '';
		$gap_mobile_unit = isset( $iconGap['mobile'] ) && is_array( $iconGap['mobile'] ) && isset( $iconGap['mobile']['unit'] ) ? $iconGap['mobile']['unit'] : 'px';
		if ( '' !== $gap_mobile ) :
		?>
		gap: <?php echo esc_attr( $gap_mobile . $gap_mobile_unit ); ?>;
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
		<?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['mobile'] ) && isset( $buttonTypography['fontSize']['mobile']['value'] ) && $buttonTypography['fontSize']['mobile']['value'] !== '' ) : ?>
			font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile']['value'] . ( $buttonTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['mobile'] ) && isset( $buttonTypography['lineHeight']['mobile']['value'] ) && $buttonTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
			line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile']['value'] . ( $buttonTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['mobile'] ) && isset( $buttonTypography['letterSpacing']['mobile']['value'] ) && $buttonTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
			letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile']['value'] . ( $buttonTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
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

	.<?php echo esc_attr( $id ); ?> .digiblocks-button-icon svg {
		<?php
		$icon_width_mobile = isset( $iconWidth['mobile'] ) && is_array( $iconWidth['mobile'] ) && isset( $iconWidth['mobile']['value'] ) && '' !== $iconWidth['mobile']['value'] && null !== $iconWidth['mobile']['value'] ? $iconWidth['mobile']['value'] : '';
		$icon_width_mobile_unit = isset( $iconWidth['mobile'] ) && is_array( $iconWidth['mobile'] ) && isset( $iconWidth['mobile']['unit'] ) ? $iconWidth['mobile']['unit'] : 'px';

		$icon_height_mobile = isset( $iconHeight['mobile'] ) && is_array( $iconHeight['mobile'] ) && isset( $iconHeight['mobile']['value'] ) && '' !== $iconHeight['mobile']['value'] && null !== $iconHeight['mobile']['value'] ? $iconHeight['mobile']['value'] : '';
		$icon_height_mobile_unit = isset( $iconHeight['mobile'] ) && is_array( $iconHeight['mobile'] ) && isset( $iconHeight['mobile']['unit'] ) ? $iconHeight['mobile']['unit'] : 'px';
		?>
		<?php if ( '' !== $icon_width_mobile ) : ?>
			width: <?php echo esc_attr( $icon_width_mobile . $icon_width_mobile_unit ); ?>;
		<?php endif; ?>
		<?php if ( '' !== $icon_height_mobile ) : ?>
			height: <?php echo esc_attr( $icon_height_mobile . $icon_height_mobile_unit ); ?>;
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