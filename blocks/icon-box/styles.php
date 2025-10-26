<?php
/**
 * Icon Box Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes.
$id                           = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility                   = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
$iconLayout                   = isset( $attrs['iconLayout'] ) ? $attrs['iconLayout'] : [
    'desktop' => 'above',
    'tablet'  => '',
    'mobile'  => '',
];
$iconContentGap               = isset( $attrs['iconContentGap'] ) ? $attrs['iconContentGap'] : array(
    'desktop' => array( 'value' => 20, 'unit' => 'px' ),
    'tablet'  => array( 'value' => '', 'unit' => 'px' ),
    'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$iconPadding                  = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : digiblocks_get_default_dimensions('px');
$iconMargin                   = isset( $attrs['iconMargin'] ) ? $attrs['iconMargin'] : digiblocks_get_default_dimensions('px');
$titlePadding                 = isset( $attrs['titlePadding'] ) ? $attrs['titlePadding'] : digiblocks_get_default_dimensions('px');
$titleMargin                  = isset( $attrs['titleMargin'] ) ? $attrs['titleMargin'] : array(
	'desktop' => array(
		'top'    => '',
		'right'  => '',
		'bottom' => 10,
		'left'   => '',
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
$contentPadding               = isset( $attrs['contentPadding'] ) ? $attrs['contentPadding'] : digiblocks_get_default_dimensions('px');
$contentMargin                = isset( $attrs['contentMargin'] ) ? $attrs['contentMargin'] : array(
	'desktop' => array(
		'top'    => '',
		'right'  => '',
		'bottom' => 0,
		'left'   => '',
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
$iconColor                    = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : null;
$iconBackgroundColor          = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : null;
$iconBorderStyle              = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'default';
$iconBorderWidth              = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : array(
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
$iconBorderRadius             = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : digiblocks_get_default_dimensions('px');
$iconBorderColor              = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : null;
$iconHoverColor               = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : null;
$iconHoverBackgroundColor     = isset( $attrs['iconHoverBackgroundColor'] ) ? $attrs['iconHoverBackgroundColor'] : null;
$iconHoverBorderColor         = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : null;
$showTitle                    = isset( $attrs['showTitle'] ) ? $attrs['showTitle'] : true;
$showContent                  = isset( $attrs['showContent'] ) ? $attrs['showContent'] : true;
$showBadge                    = isset( $attrs['showBadge'] ) ? $attrs['showBadge'] : false;
$badgeText                    = isset( $attrs['badgeText'] ) ? $attrs['badgeText'] : __('Popular', 'digiblocks');
$titleColor                   = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '';
$titleHoverColor              = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$textColor                    = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$textHoverColor               = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor              = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor         = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$align                        = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                    = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$hoverEffect                  = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle                  = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor                  = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor             = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$linkEnabled                  = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;
$linkType                     = isset( $attrs['linkType'] ) ? $attrs['linkType'] : 'box';

// Button specific attributes
$buttonText                   = isset( $attrs['buttonText'] ) ? $attrs['buttonText'] : __('Learn More', 'digiblocks');
$buttonBackgroundColor        = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#1e73be';
$buttonBackgroundHoverColor   = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#135e9e';
$buttonTextColor              = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonTextHoverColor         = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$buttonBorderStyle            = isset( $attrs['buttonBorderStyle'] ) ? $attrs['buttonBorderStyle'] : 'default';
$buttonBorderWidth            = isset( $attrs['buttonBorderWidth'] ) ? $attrs['buttonBorderWidth'] : array(
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
$buttonBorderRadius           = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : array(
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
$buttonBorderColor            = isset( $attrs['buttonBorderColor'] ) ? $attrs['buttonBorderColor'] : '';
$buttonBorderHoverColor       = isset( $attrs['buttonBorderHoverColor'] ) ? $attrs['buttonBorderHoverColor'] : '';
$buttonBoxShadow              = isset( $attrs['buttonBoxShadow'] ) ? $attrs['buttonBoxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$buttonBoxShadowHover         = isset( $attrs['buttonBoxShadowHover'] ) ? $attrs['buttonBoxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$buttonPadding                = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : array(
	'desktop' => array(
		'top'    => 10,
		'right'  => 20,
		'bottom' => 10,
		'left'   => 20,
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
$buttonMargin                 = isset( $attrs['buttonMargin'] ) ? $attrs['buttonMargin'] : array(
	'desktop' => array(
		'top'    => 15,
		'right'  => 0,
		'bottom' => 0,
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
$buttonTypography             = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '500',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'px',
);

// Badge specific attributes
$badgeBackgroundColor         = isset( $attrs['badgeBackgroundColor'] ) ? $attrs['badgeBackgroundColor'] : '#f59e0b';
$badgeBackgroundHoverColor    = isset( $attrs['badgeBackgroundHoverColor'] ) ? $attrs['badgeBackgroundHoverColor'] : '';
$badgeTextColor               = isset( $attrs['badgeTextColor'] ) ? $attrs['badgeTextColor'] : '#ffffff';
$badgeTextHoverColor          = isset( $attrs['badgeTextHoverColor'] ) ? $attrs['badgeTextHoverColor'] : '';
$badgeTypography              = isset( $attrs['badgeTypography'] ) ? $attrs['badgeTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 0.7,
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'rem',
	'fontWeight'        => '700',
	'fontStyle'         => 'normal',
	'textTransform'     => 'uppercase',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => 1.2,
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0.05,
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'em',
);
$badgePadding                 = isset( $attrs['badgePadding'] ) ? $attrs['badgePadding'] : array(
	'desktop' => array(
		'top'    => 0.25,
		'right'  => 0.5,
		'bottom' => 0.25,
		'left'   => 0.5,
		'unit'   => 'rem',
	),
	'tablet'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'rem',
	),
	'mobile'  => array(
		'top'    => '',
		'right'  => '',
		'bottom' => '',
		'left'   => '',
		'unit'   => 'rem',
	),
);
$badgeBorderStyle             = isset( $attrs['badgeBorderStyle'] ) ? $attrs['badgeBorderStyle'] : 'none';
$badgeBorderWidth             = isset( $attrs['badgeBorderWidth'] ) ? $attrs['badgeBorderWidth'] : array(
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
$badgeBorderRadius            = isset( $attrs['badgeBorderRadius'] ) ? $attrs['badgeBorderRadius'] : array(
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
$badgeBorderColor             = isset( $attrs['badgeBorderColor'] ) ? $attrs['badgeBorderColor'] : '#e0e0e0';
$badgeBorderHoverColor        = isset( $attrs['badgeBorderHoverColor'] ) ? $attrs['badgeBorderHoverColor'] : '';
$badgeBoxShadow               = isset( $attrs['badgeBoxShadow'] ) ? $attrs['badgeBoxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$badgeBoxShadowHover          = isset( $attrs['badgeBoxShadowHover'] ) ? $attrs['badgeBoxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);

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

// Get icon size (with fallback)
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
	'desktop' => array( 'value' => '48', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$iconHeight = isset( $attrs['iconHeight'] ) ? $attrs['iconHeight'] : array(
	'desktop' => array( 'value' => '', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);

// Get padding (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');

// Get margin (with fallback)
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

// Get borderWidth (with responsive fallback)
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

// Get borderRadius (with responsive fallback)
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');

// Get typography settings with default values
$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'px',
);

$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'px',
);

// Get alignment for each device with proper fallback
$align_responsive = isset( $attrs['align'] ) ? $attrs['align'] : array(
    'desktop' => 'center',
    'tablet'  => '',
    'mobile'  => '',
);

$desktop_align = isset($align_responsive['desktop']) ? $align_responsive['desktop'] : 'center';
$tablet_align = isset($align_responsive['tablet']) && $align_responsive['tablet'] !== '' ? $align_responsive['tablet'] : $desktop_align;
$mobile_align = isset($align_responsive['mobile']) && $align_responsive['mobile'] !== '' ? $align_responsive['mobile'] : $tablet_align;

$desktop_align_css = digiblocks_get_alignment_css($desktop_align);
$tablet_align_css = digiblocks_get_alignment_css($tablet_align);
$mobile_align_css = digiblocks_get_alignment_css($mobile_align);

// Get justify content for each device with proper fallback
$justify_responsive = isset( $attrs['justifyContent'] ) ? $attrs['justifyContent'] : array(
    'desktop' => 'center',
    'tablet'  => '',
    'mobile'  => '',
);

$desktop_justify = isset($justify_responsive['desktop']) ? $justify_responsive['desktop'] : 'center';
$tablet_justify = isset($justify_responsive['tablet']) && $justify_responsive['tablet'] !== '' ? $justify_responsive['tablet'] : $desktop_justify;
$mobile_justify = isset($justify_responsive['mobile']) && $justify_responsive['mobile'] !== '' ? $justify_responsive['mobile'] : $tablet_justify;

$desktop_justify_css = digiblocks_get_justify_css($desktop_justify);
$tablet_justify_css = digiblocks_get_justify_css($tablet_justify);
$mobile_justify_css = digiblocks_get_justify_css($mobile_justify);

// Create flex-direction mapping for each device with fallback
$desktop_layout = isset($iconLayout['desktop']) ? $iconLayout['desktop'] : 'above';
$tablet_layout = isset($iconLayout['tablet']) && $iconLayout['tablet'] !== '' ? $iconLayout['tablet'] : $desktop_layout;
$mobile_layout = isset($iconLayout['mobile']) && $iconLayout['mobile'] !== '' ? $iconLayout['mobile'] : $tablet_layout;

$flexDirection = array(
    'desktop' => $desktop_layout === 'above' ? 'column' : 
                ($desktop_layout === 'after' ? 'row-reverse' : 'row'),
    'tablet'  => $tablet_layout === 'above' ? 'column' : 
                ($tablet_layout === 'after' ? 'row-reverse' : 'row'),
    'mobile'  => $mobile_layout === 'above' ? 'column' : 
                ($mobile_layout === 'after' ? 'row-reverse' : 'row'),
);

// CSS Output
ob_start();
?>
/* Icon Box Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	display: flex;
	position: relative;
	<?php echo esc_attr( $desktop_align_css ); ?>
	<?php echo esc_attr( $desktop_justify_css ); ?>
	<?php echo esc_attr( digiblocks_get_css('flex-direction', $flexDirection, 'desktop') ); ?>
	gap: <?php echo esc_attr( !empty($iconContentGap['desktop']['value']) ? ($iconContentGap['desktop']['value'] . $iconContentGap['desktop']['unit']) : '20px' ); ?>;
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
	<?php else : ?>
		border-style: none;
	<?php endif; ?>
	
	/* Always apply border radius even if no border */
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>

	/* Box Shadow */
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>

	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
	<?php if ( $linkEnabled && 'box' === $linkType ) : ?>
		cursor: pointer;
		text-decoration: none;
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

/* Hover effects for the main block */
<?php
$has_background_hover  = ! empty( $backgroundHoverColor );
$has_box_shadow_hover  = isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'];
$has_hover_effect      = ! empty( $hoverEffect );
$has_border_hover      = ( 'none' !== $borderStyle && ! empty( $borderHoverColor ) );

$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
$has_transform_hover   = ! empty( $transform_hover_value ) && ! in_array( $hoverEffect, array( 'lift', 'scale' ), true );

if ( $has_background_hover || $has_box_shadow_hover || $has_hover_effect || $has_border_hover || $has_transform_hover ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
	<?php if ( $has_background_hover ) : ?>
		background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	<?php endif; ?>
		
	<?php if ( $has_box_shadow_hover ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	<?php endif; ?>
		
	<?php if ( 'lift' === $hoverEffect ) : ?>
		transform: translateY(-10px);
	<?php elseif ( 'scale' === $hoverEffect ) : ?>
		transform: scale(1.05);
	<?php elseif ( 'glow' === $hoverEffect ) : ?>
		filter: brightness(1.1);
	<?php endif; ?>

	<?php if ( $has_border_hover ) : ?>
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>

	<?php if ( $has_transform_hover ) : ?>
		transform: <?php echo esc_attr( $transform_hover_value ); ?>;
		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
	<?php endif; ?>
}
<?php endif; ?>

/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
	<?php if ( $iconMargin && isset( $iconMargin['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'desktop' ) ); ?>
	<?php endif; ?>
	display: inline-flex;
	<?php if ( $iconBackgroundColor ) : ?>
		background-color: <?php echo esc_attr( $iconBackgroundColor ); ?>;
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && $iconBorderWidth && $iconBorderRadius ) : ?>
		border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
		border-width: <?php echo esc_attr( $iconBorderWidth['desktop']['top'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['right'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['bottom'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['left'] . $iconBorderWidth['desktop']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $iconBorderRadius['desktop']['top'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['right'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['bottom'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['left'] . $iconBorderRadius['desktop']['unit'] ); ?>;
	<?php endif; ?>
		
	<?php if ( $iconPadding ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'desktop' ) ); ?>
	<?php endif; ?>

	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon span {
	display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
	<?php if ( ! empty( $iconSize['desktop']['value'] ) ) : ?>
		width: <?php echo esc_attr( $iconSize['desktop']['value'] . $iconSize['desktop']['unit'] ); ?>;
	<?php endif; ?>

	<?php if ( ! empty( $iconHeight['desktop']['value'] ) ) : ?>
		height: <?php echo esc_attr( $iconHeight['desktop']['value'] . $iconHeight['desktop']['unit'] ); ?>;
	<?php else: ?>
		height: 100%;
	<?php endif; ?>
	fill: <?php echo esc_attr( $iconColor ); ?>;
	transition: all 0.3s ease;
}

/* Icon hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-icon {
	<?php if ( $iconHoverBackgroundColor ) : ?>
		background-color: <?php echo esc_attr( $iconHoverBackgroundColor ); ?>;
	<?php endif; ?>
		
	<?php if ( $iconHoverBorderColor ) : ?>
		border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-icon svg {
	<?php if ( $iconHoverColor ) : ?>
		fill: <?php echo esc_attr( $iconHoverColor ); ?> !important; 
		color: <?php echo esc_attr( $iconHoverColor ); ?> !important;
	<?php endif; ?>
}

/* Content */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-content {
	display: flex;
	flex-direction: column;
}

<?php if ( $showTitle ) : ?>
/* Title styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-title {
    <?php if ( !empty($titleColor) ) : ?>
	color: <?php echo esc_attr( $titleColor ); ?>;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $titlePadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $titleMargin, 'margin', 'desktop' ) ); ?>

	<?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
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
		line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ( $titleTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ( $titleTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
	<?php endif; ?>

	transition: color 0.3s ease;
}

<?php if ( $titleHoverColor ) : ?>
	/* Title hover styles */
	.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-title {
		color: <?php echo esc_attr( $titleHoverColor ); ?>;
	}
<?php endif; ?>
<?php endif; ?>

<?php if ( $showContent ) : ?>
/* Content styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-text {
	<?php echo esc_attr( digiblocks_get_dimensions( $contentPadding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $contentMargin, 'margin', 'desktop' ) ); ?>
	color: <?php echo esc_attr( $textColor ); ?>;

	<?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( $contentTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
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
		line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( $contentTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( $contentTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
	<?php endif; ?>

	transition: color 0.3s ease;
}

<?php if ( $textHoverColor ) : ?>
	/* Content hover styles */
	.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-text {
		color: <?php echo esc_attr( $textHoverColor ); ?>;
	}
<?php endif; ?>
<?php endif; ?>

<?php if ( $linkEnabled && 'button' === $linkType ) : ?>
/* Button styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-button-wrapper {
	display: flex;
	justify-content: <?php echo esc_attr( $align['desktop'] === 'center' ? 'center' : ( $align['desktop'] === 'flex-end' ? 'flex-end' : 'flex-start' ) ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonMargin, 'margin', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-button {
	display: inline-block;
	background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
	color: <?php echo esc_attr( $buttonTextColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
	
	<?php if ( $buttonBorderStyle && 'default' !== $buttonBorderStyle && 'none' !== $buttonBorderStyle ) : ?>
		border-style: <?php echo esc_attr( $buttonBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $buttonBorderColor ? $buttonBorderColor : $buttonBackgroundColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'desktop' ) ); ?>
	<?php else : ?>
		border-style: none;
	<?php endif; ?>
	
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'desktop' ) ); ?>
	
	<?php if ( isset( $buttonBoxShadow['enable'] ) && $buttonBoxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $buttonBoxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
	
	<?php if ( ! empty( $buttonTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $buttonTypography['fontFamily'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop'] . ( $buttonTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
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
		line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . ( $buttonTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $buttonTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . ( $buttonTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
	<?php endif; ?>
	
	text-decoration: none;
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-button:hover {
	<?php if ( $buttonBackgroundHoverColor ) : ?>
		background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $buttonTextHoverColor ) : ?>
		color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $buttonBorderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $buttonBorderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $buttonBoxShadowHover['enable'] ) && $buttonBoxShadowHover['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $buttonBoxShadowHover ) ); ?>;
	<?php endif; ?>
}
<?php endif; ?>

<?php if ( $showBadge ) : ?>
/* Badge styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
	position: absolute;
	top: 8px;
	right: 8px;
	background-color: <?php echo esc_attr( $badgeBackgroundColor ); ?>;
	color: <?php echo esc_attr( $badgeTextColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $badgePadding, 'padding', 'desktop' ) ); ?>
	
	<?php if ( $badgeBorderStyle && 'default' !== $badgeBorderStyle && 'none' !== $badgeBorderStyle ) : ?>
		border-style: <?php echo esc_attr( $badgeBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $badgeBorderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $badgeBorderWidth, 'border-width', 'desktop' ) ); ?>
	<?php else : ?>
		border-style: none;
	<?php endif; ?>
	
	<?php echo esc_attr( digiblocks_get_dimensions( $badgeBorderRadius, 'border-radius', 'desktop' ) ); ?>
	
	<?php if ( isset( $badgeBoxShadow['enable'] ) && $badgeBoxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $badgeBoxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
	
	<?php if ( ! empty( $badgeTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $badgeTypography['fontFamily'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $badgeTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $badgeTypography['fontSize']['desktop'] . ( $badgeTypography['fontSizeUnit'] ?? 'rem' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $badgeTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $badgeTypography['fontWeight'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $badgeTypography['fontStyle'] ) ) : ?>
		font-style: <?php echo esc_attr( $badgeTypography['fontStyle'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $badgeTypography['textTransform'] ) ) : ?>
		text-transform: <?php echo esc_attr( $badgeTypography['textTransform'] ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $badgeTypography['textDecoration'] ) ) : ?>
		text-decoration: <?php echo esc_attr( $badgeTypography['textDecoration'] ); ?>;
	<?php endif; ?>

	<?php if ( ! empty( $badgeTypography['lineHeight']['desktop'] ) ) : ?>
		line-height: <?php echo esc_attr( $badgeTypography['lineHeight']['desktop'] . ( $badgeTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
	<?php endif; ?>
		
	<?php if ( ! empty( $badgeTypography['letterSpacing']['desktop'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $badgeTypography['letterSpacing']['desktop'] . ( $badgeTypography['letterSpacingUnit'] ?? 'em' ) ); ?>;
	<?php endif; ?>
	
	transition: all 0.3s ease;
	z-index: 1;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon-box-badge {
	<?php if ( $badgeBackgroundHoverColor ) : ?>
		background-color: <?php echo esc_attr( $badgeBackgroundHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $badgeTextHoverColor ) : ?>
		color: <?php echo esc_attr( $badgeTextHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( $badgeBorderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $badgeBorderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $badgeBoxShadowHover['enable'] ) && $badgeBoxShadowHover['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $badgeBoxShadowHover ) ); ?>;
	<?php endif; ?>
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( $tablet_align_css ); ?>
		<?php echo esc_attr( $tablet_justify_css ); ?>
		<?php echo digiblocks_get_css('flex-direction', $flexDirection, 'tablet'); ?>
		<?php if ( ! empty( $iconContentGap['tablet']['value'] ) ) : ?>
		gap: <?php echo esc_attr( $iconContentGap['tablet']['value'] . $iconContentGap['tablet']['unit'] ); ?>;
		<?php endif; ?>
		<?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php endif; ?>
		<?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		<?php endif; ?>
				
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet']) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
		
		<?php if ( isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
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

	<?php if ( isset( $iconSize['tablet']['value'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
			<?php if ( ! empty( $iconSize['tablet']['value'] ) ) : ?>
				width: <?php echo esc_attr( $iconSize['tablet']['value'] . $iconSize['tablet']['unit'] ); ?>;
			<?php endif; ?>

			<?php if ( ! empty( $iconHeight['tablet']['value'] ) ) : ?>
				height: <?php echo esc_attr( $iconHeight['tablet']['value'] . $iconHeight['tablet']['unit'] ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconMargin && isset( $iconMargin['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'tablet' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconPadding && isset( $iconPadding['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'tablet' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['tablet']) && isset( $iconBorderRadius['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
		}
	<?php endif; ?>

	<?php if ( $showTitle ) : ?>
		<?php if ( isset( $titleTypography['fontSize']['tablet']) || isset( $titleTypography['lineHeight']['tablet']) || isset( $titleTypography['letterSpacing']['tablet'] ) || isset( $titlePadding['titlePadding']['tablet'] ) || isset( $titleMargin['titleMargin']['tablet'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-title {
				<?php if ( isset( $titleTypography['fontSize']['tablet'] ) ) : ?>
					font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $titleTypography['lineHeight']['tablet'] ) ) : ?>
					line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( $titleTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $titlePadding, 'padding', 'tablet' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $titleMargin, 'margin', 'tablet' ) ); ?>
			}
		<?php endif; ?>
	<?php endif; ?>

	<?php if ( $showContent ) : ?>
		<?php if ( isset( $contentTypography['fontSize']['tablet']) || isset( $contentTypography['lineHeight']['tablet']) || isset( $contentTypography['letterSpacing']['tablet'] ) || isset( $contentPadding['contentPadding']['tablet'] ) || isset( $contentMargin['contentMargin']['tablet'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-text {
				<?php if ( isset( $contentTypography['fontSize']['tablet'] ) ) : ?>
					font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $contentTypography['lineHeight']['tablet'] ) ) : ?>
					line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $contentPadding, 'padding', 'tablet' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $contentMargin, 'margin', 'tablet' ) ); ?>
			}
		<?php endif; ?>
	<?php endif; ?>
	
	<?php if ( $linkEnabled && 'button' === $linkType ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-button-wrapper {
			justify-content: <?php echo esc_attr( $tablet_align === 'center' ? 'center' : ( $tablet_align === 'flex-end' ? 'flex-end' : 'flex-start' ) ); ?>;
			<?php if ( isset( $buttonMargin['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonMargin, 'margin', 'tablet' ) ); ?>
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-button {
			<?php if ( isset( $buttonPadding['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'tablet' ) ); ?>
			<?php endif; ?>
			
			<?php if ( $buttonBorderStyle && 'default' !== $buttonBorderStyle && 'none' !== $buttonBorderStyle && isset( $buttonBorderWidth['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'tablet' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonBorderRadius['tablet'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'tablet' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonTypography['fontSize']['tablet'] ) || isset( $buttonTypography['lineHeight']['tablet'] ) || isset( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
				<?php if ( isset( $buttonTypography['fontSize']['tablet'] ) ) : ?>
					font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( $buttonTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['lineHeight']['tablet'] ) ) : ?>
					line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet'] . ( $buttonTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet'] . ( $buttonTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
			<?php endif; ?>
		}
	<?php endif; ?>

	<?php if ( $showBadge ) : ?>
		<?php if ( isset( $badgePadding['tablet'] ) && ! empty( $badgePadding['tablet']['top'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php echo esc_attr( digiblocks_get_dimensions( $badgePadding, 'padding', 'tablet' ) ); ?>
			}
		<?php endif; ?>
		
		<?php if ( $badgeBorderStyle && 'default' !== $badgeBorderStyle && 'none' !== $badgeBorderStyle && isset( $badgeBorderWidth['tablet'] ) && ! empty( $badgeBorderWidth['tablet']['top'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php echo esc_attr( digiblocks_get_dimensions( $badgeBorderWidth, 'border-width', 'tablet' ) ); ?>
			}
		<?php endif; ?>
		
		<?php if ( isset( $badgeBorderRadius['tablet'] ) && ! empty( $badgeBorderRadius['tablet']['top'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php echo esc_attr( digiblocks_get_dimensions( $badgeBorderRadius, 'border-radius', 'tablet' ) ); ?>
			}
		<?php endif; ?>
		
		<?php if ( isset( $badgeTypography['fontSize']['tablet'] ) || isset( $badgeTypography['lineHeight']['tablet'] ) || isset( $badgeTypography['letterSpacing']['tablet'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php if ( isset( $badgeTypography['fontSize']['tablet'] ) ) : ?>
					font-size: <?php echo esc_attr( $badgeTypography['fontSize']['tablet'] . ( $badgeTypography['fontSizeUnit'] ?? 'rem' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $badgeTypography['lineHeight']['tablet'] ) ) : ?>
					line-height: <?php echo esc_attr( $badgeTypography['lineHeight']['tablet'] . ( $badgeTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $badgeTypography['letterSpacing']['tablet'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $badgeTypography['letterSpacing']['tablet'] . ( $badgeTypography['letterSpacingUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
			}
		<?php endif; ?>
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( $mobile_align_css ); ?>
		<?php echo esc_attr( $mobile_justify_css ); ?>
		<?php echo digiblocks_get_css('flex-direction', $flexDirection, 'mobile'); ?>
		<?php if ( ! empty( $iconContentGap['mobile']['value'] ) ) : ?>
		gap: <?php echo esc_attr( $iconContentGap['mobile']['value'] . $iconContentGap['mobile']['unit'] ); ?>;
		<?php endif; ?>
		<?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php endif; ?>
		<?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		<?php endif; ?>
				
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
		
		<?php if ( isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
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
    
	<?php if ( isset( $iconSize['mobile']['value'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon svg {
			<?php if ( ! empty( $iconSize['mobile']['value'] ) ) : ?>
				width: <?php echo esc_attr( $iconSize['mobile']['value'] . $iconSize['mobile']['unit'] ); ?>;
			<?php endif; ?>

			<?php if ( ! empty( $iconHeight['mobile']['value'] ) ) : ?>
				height: <?php echo esc_attr( $iconHeight['mobile']['value'] . $iconHeight['mobile']['unit'] ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconMargin && isset( $iconMargin['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'mobile' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconPadding && isset( $iconPadding['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'mobile' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['mobile']) && isset( $iconBorderRadius['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
		}
	<?php endif; ?>
    
	<?php if ( $showTitle ) : ?>
		<?php if ( isset( $titleTypography['fontSize']['mobile']) || isset( $titleTypography['lineHeight']['mobile']) || isset( $titleTypography['letterSpacing']['mobile'] ) || isset( $titlePadding['titlePadding']['mobile'] ) || isset( $titleMargin['titleMargin']['mobile'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-title {
				<?php if ( isset( $titleTypography['fontSize']['mobile'] ) ) : ?>
					font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $titleTypography['lineHeight']['mobile'] ) ) : ?>
					line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif;
				if ( isset( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( $titleTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $titlePadding, 'padding', 'mobile' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $titleMargin, 'margin', 'mobile' ) ); ?>
			}
		<?php endif; ?>
	<?php endif; ?>

	<?php if ( $showContent ) : ?>
		<?php if ( isset( $contentTypography['fontSize']['mobile']) || isset( $contentTypography['lineHeight']['mobile']) || isset( $contentTypography['letterSpacing']['mobile'] ) || isset( $contentPadding['contentPadding']['mobile'] ) || isset( $contentMargin['contentMargin']['mobile'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-text {
				<?php if ( isset( $contentTypography['fontSize']['mobile'] ) ) : ?>
					font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
				<?php endif;
				if ( isset( $contentTypography['lineHeight']['mobile'] ) ) : ?>
					line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif;
				if ( isset( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $contentPadding, 'padding', 'mobile' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $contentMargin, 'margin', 'mobile' ) ); ?>
			}
		<?php endif; ?>
	<?php endif; ?>
	
	<?php if ( $linkEnabled && 'button' === $linkType ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-button-wrapper {
			justify-content: <?php echo esc_attr( $mobile_align === 'center' ? 'center' : ( $mobile_align === 'flex-end' ? 'flex-end' : 'flex-start' ) ); ?>;
			<?php if ( isset( $buttonMargin['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonMargin, 'margin', 'mobile' ) ); ?>
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-button {
			<?php if ( isset( $buttonPadding['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
			<?php endif; ?>
			
			<?php if ( $buttonBorderStyle && 'default' !== $buttonBorderStyle && 'none' !== $buttonBorderStyle && isset( $buttonBorderWidth['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'mobile' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonBorderRadius['mobile'] ) ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderRadius, 'border-radius', 'mobile' ) ); ?>
			<?php endif; ?>
			
			<?php if ( isset( $buttonTypography['fontSize']['mobile'] ) || isset( $buttonTypography['lineHeight']['mobile'] ) || isset( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
				<?php if ( isset( $buttonTypography['fontSize']['mobile'] ) ) : ?>
					font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
					line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
				<?php endif; ?>
			<?php endif; ?>
		}
	<?php endif; ?>

	<?php if ( $showBadge ) : ?>
		<?php if ( isset( $badgePadding['mobile'] ) && ! empty( $badgePadding['mobile']['top'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php echo esc_attr( digiblocks_get_dimensions( $badgePadding, 'padding', 'mobile' ) ); ?>
			}
		<?php endif; ?>
		
		<?php if ( $badgeBorderStyle && 'default' !== $badgeBorderStyle && 'none' !== $badgeBorderStyle && isset( $badgeBorderWidth['mobile'] ) && ! empty( $badgeBorderWidth['mobile']['top'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php echo esc_attr( digiblocks_get_dimensions( $badgeBorderWidth, 'border-width', 'mobile' ) ); ?>
			}
		<?php endif; ?>
		
		<?php if ( isset( $badgeBorderRadius['mobile'] ) && ! empty( $badgeBorderRadius['mobile']['top'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php echo esc_attr( digiblocks_get_dimensions( $badgeBorderRadius, 'border-radius', 'mobile' ) ); ?>
			}
		<?php endif; ?>
		
		<?php if ( isset( $badgeTypography['fontSize']['mobile'] ) || isset( $badgeTypography['lineHeight']['mobile'] ) || isset( $badgeTypography['letterSpacing']['mobile'] ) ) : ?>
			.<?php echo esc_attr( $id ); ?> .digiblocks-icon-box-badge {
				<?php if ( isset( $badgeTypography['fontSize']['mobile'] ) ) : ?>
					font-size: <?php echo esc_attr( $badgeTypography['fontSize']['mobile'] . ( $badgeTypography['fontSizeUnit'] ?? 'rem' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $badgeTypography['lineHeight']['mobile'] ) ) : ?>
					line-height: <?php echo esc_attr( $badgeTypography['lineHeight']['mobile'] . ( $badgeTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
				<?php if ( isset( $badgeTypography['letterSpacing']['mobile'] ) ) : ?>
					letter-spacing: <?php echo esc_attr( $badgeTypography['letterSpacing']['mobile'] . ( $badgeTypography['letterSpacingUnit'] ?? 'em' ) ); ?>;
				<?php endif; ?>
			}
		<?php endif; ?>
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