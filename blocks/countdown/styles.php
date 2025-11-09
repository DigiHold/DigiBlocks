<?php
/**
 * Countdown Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
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
$endDate                  = isset( $attrs['endDate'] ) ? $attrs['endDate'] : '';
$showDays                 = isset( $attrs['showDays'] ) ? $attrs['showDays'] : true;
$showHours                = isset( $attrs['showHours'] ) ? $attrs['showHours'] : true;
$showMinutes              = isset( $attrs['showMinutes'] ) ? $attrs['showMinutes'] : true;
$showSeconds              = isset( $attrs['showSeconds'] ) ? $attrs['showSeconds'] : true;
$daysLabel                = isset( $attrs['daysLabel'] ) ? $attrs['daysLabel'] : __( 'Days', 'digiblocks' );
$hoursLabel               = isset( $attrs['hoursLabel'] ) ? $attrs['hoursLabel'] : __( 'Hours', 'digiblocks' );
$minutesLabel             = isset( $attrs['minutesLabel'] ) ? $attrs['minutesLabel'] : __( 'Minutes', 'digiblocks' );
$secondsLabel             = isset( $attrs['secondsLabel'] ) ? $attrs['secondsLabel'] : __( 'Seconds', 'digiblocks' );
$digitColor               = isset( $attrs['digitColor'] ) ? $attrs['digitColor'] : '';
$digitBackground          = isset( $attrs['digitBackground'] ) ? $attrs['digitBackground'] : '#f0f0f0';
$digitHoverColor          = isset( $attrs['digitHoverColor'] ) ? $attrs['digitHoverColor'] : '';
$digitHoverBackground     = isset( $attrs['digitHoverBackground'] ) ? $attrs['digitHoverBackground'] : '';
$labelColor               = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '#666666';
$labelHoverColor          = isset( $attrs['labelHoverColor'] ) ? $attrs['labelHoverColor'] : '';
$separatorColor           = isset( $attrs['separatorColor'] ) ? $attrs['separatorColor'] : '';
$separatorHoverColor      = isset( $attrs['separatorHoverColor'] ) ? $attrs['separatorHoverColor'] : '';
$boxStyle                 = isset( $attrs['boxStyle'] ) ? $attrs['boxStyle'] : 'default';
$boxBorderRadius          = isset( $attrs['boxBorderRadius'] ) ? $attrs['boxBorderRadius'] : array(
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
$boxPadding               = isset( $attrs['boxPadding'] ) ? $attrs['boxPadding'] : array(
	'desktop' => array(
		'top'    => 10,
		'right'  => 10,
		'bottom' => 10,
		'left'   => 10,
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
$boxMargin                = isset( $attrs['boxMargin'] ) ? $attrs['boxMargin'] : digiblocks_get_default_dimensions('px');
$boxBorderWidth           = isset( $attrs['boxBorderWidth'] ) ? $attrs['boxBorderWidth'] : array(
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
$boxBorderColor           = isset( $attrs['boxBorderColor'] ) ? $attrs['boxBorderColor'] : '#e0e0e0';
$boxShadow                = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$boxShadowHover           = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 0,
	'blur'       => 0,
	'spread'     => 0,
	'position'   => 'outset',
);
$itemSpacing              = isset( $attrs['itemSpacing'] ) ? $attrs['itemSpacing'] : array(
	'desktop' => 48,
	'tablet'  => '',
	'mobile'  => '',
);
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$labelPosition            = isset( $attrs['labelPosition'] ) ? $attrs['labelPosition'] : 'bottom';
$labelSpacing             = isset( $attrs['labelSpacing'] ) ? $attrs['labelSpacing'] : array(
	'desktop' => 5,
	'tablet'  => '',
	'mobile'  => '',
);
$titleTypography          = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
	'fontFamily'        => '',
	'fontSize' => array(
		'desktop' => array('value' => 70, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight' => array(
		'desktop' => array('value' => 1.2, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
	'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);
$contentTypography          = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight' => array(
		'desktop' => array('value' => 1.4, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
	'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
);
$expiredMessage           = isset( $attrs['expiredMessage'] ) ? $attrs['expiredMessage'] : __( "Time's up!", 'digiblocks' );
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$displaySeparator         = isset( $attrs['displaySeparator'] ) ? $attrs['displaySeparator'] : false;
$separatorType            = isset( $attrs['separatorType'] ) ? $attrs['separatorType'] : 'colon';
$boxesEqual               = isset( $attrs['boxesEqual'] ) ? $attrs['boxesEqual'] : false;
$style                    = isset( $attrs['style'] ) ? $attrs['style'] : 'boxes';

// Define separator character
$separator_char = ':';
switch ( $separatorType ) {
	case 'colon':
		$separator_char = ':';
		break;
	case 'hyphen':
		$separator_char = '-';
		break;
	case 'slash':
		$separator_char = '/';
		break;
	case 'dot':
		$separator_char = '•';
		break;
}

// CSS Output
ob_start();
?>
/* Countdown Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $boxMargin, 'margin', 'desktop' ) ); ?>
	text-align: <?php echo esc_attr( $align ); ?>;
	display: block;
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
	<?php endif; ?>
}

<?php
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-container {
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: <?php echo $align === 'center' ? 'center' : ( $align === 'right' ? 'flex-end' : 'flex-start' ) ?>;
	gap: <?php echo esc_attr( $itemSpacing['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item {
	display: flex;
	align-items: center;
}

<?php if ( 'top' === $labelPosition ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item {
		flex-direction: column-reverse;
	}
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
		margin-bottom: <?php echo esc_attr( $labelSpacing['desktop'] ); ?>px;
		margin-top: 0;
	}
<?php elseif ( 'inside' === $labelPosition && 'boxes' === $style ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item {
		flex-direction: column;
	}
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-digit {
		margin-bottom: <?php echo esc_attr( $labelSpacing['desktop'] ); ?>px;
	}
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
		margin-top: 0;
	}
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
<?php else : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item {
		flex-direction: column;
	}
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
		margin-top: <?php echo esc_attr( $labelSpacing['desktop'] ); ?>px;
	}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-digit {
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
}

.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
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
	
	color: <?php echo esc_attr( $labelColor ); ?>;
	transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-countdown-label {
	<?php if ( $labelHoverColor ) : ?>
		color: <?php echo esc_attr( $labelHoverColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-expired {
	<?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['desktop'] ) && isset( $titleTypography['fontSize']['desktop']['value'] ) && $titleTypography['fontSize']['desktop']['value'] !== '' ) : ?>
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop']['value'] . ( $titleTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $titleTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $titleTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $digitColor ) ) : ?>
		color: <?php echo esc_attr( $digitColor ); ?>;
	<?php endif; ?>
	text-align: <?php echo esc_attr( $align ); ?>;
}

<?php if ( $displaySeparator ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-separator {
		<?php if ( ! empty( $separatorColor ) ) : ?>
		color: <?php echo esc_attr( $separatorColor ); ?>;
		<?php endif; ?>
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop']['value'] . ( $titleTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-separator::before {
		content: "<?php echo esc_attr( $separator_char ); ?>";
	}
	
	<?php if ( $separatorHoverColor ) : ?>
		.<?php echo esc_attr( $id ); ?>:hover .digiblocks-countdown-separator {
			color: <?php echo esc_attr( $separatorHoverColor ); ?>;
		}
	<?php endif; ?>
<?php endif; ?>

<?php if ( 'boxes' === $style && $boxesEqual ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item {
		flex: 1 0 0;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
		width: 100%;
		text-align: center;
		box-sizing: border-box;
	}
<?php endif; ?>

<?php if ( 'boxes' === $style ) : ?>
	<?php if ( 'filled' === $boxStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			<?php if ( ! empty( $digitColor ) ) : ?>
				color: <?php echo esc_attr( $digitColor ); ?>;
			<?php endif; ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'desktop' ) ); ?>
			padding: <?php echo esc_attr( $boxPadding['desktop']['top'] . (is_array($boxPadding['desktop']) && array_key_exists('unit', $boxPadding['desktop']) ? $boxPadding['desktop']['unit'] : 'px') . ' ' . $boxPadding['desktop']['right'] . (is_array($boxPadding['desktop']) && array_key_exists('unit', $boxPadding['desktop']) ? $boxPadding['desktop']['unit'] : 'px') . ' ' . $boxPadding['desktop']['bottom'] . (is_array($boxPadding['desktop']) && array_key_exists('unit', $boxPadding['desktop']) ? $boxPadding['desktop']['unit'] : 'px') . ' ' . $boxPadding['desktop']['left'] . (is_array($boxPadding['desktop']) && array_key_exists('unit', $boxPadding['desktop']) ? $boxPadding['desktop']['unit'] : 'px') ); ?>;
			<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'outlined' === $boxStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			background-color: transparent;
			<?php if ( ! empty( $digitColor ) ) : ?>
			color: <?php echo esc_attr( $digitColor ); ?>;
			<?php endif; ?>
			border-style: solid;
			<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderWidth, 'border-width', 'desktop' ) ); ?>
			border-color: <?php echo esc_attr( $boxBorderColor ); ?>;
			<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'desktop' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'desktop' ) ); ?>
			<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'pill' === $boxStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			<?php if ( ! empty( $digitColor ) ) : ?>
			color: <?php echo esc_attr( $digitColor ); ?>;
			<?php endif; ?>
			border-radius: 50px;
			<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'desktop' ) ); ?>
			<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'rounded' === $boxStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			<?php if ( ! empty( $digitColor ) ) : ?>
			color: <?php echo esc_attr( $digitColor ); ?>;
			<?php endif; ?>
			border-radius: 8px;
			<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'desktop' ) ); ?>
			<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'circle' === $boxStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			<?php if ( ! empty( $digitColor ) ) : ?>
			color: <?php echo esc_attr( $digitColor ); ?>;
			<?php endif; ?>
			border-radius: 50%;
			aspect-ratio: 1/1;
			display: flex;
			justify-content: center;
			align-items: center;
			<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'desktop' ) ); ?>
			<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php else : ?>
		/* Default box style */
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			<?php if ( ! empty( $digitColor ) ) : ?>
			color: <?php echo esc_attr( $digitColor ); ?>;
			<?php endif; ?>
			<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
<?php else : ?>
	/* Simple style (no boxes) */
	<?php if ( ! empty( $digitColor ) ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
		color: <?php echo esc_attr( $digitColor ); ?>;
	}
	<?php endif; ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
		<?php if ( $digitHoverColor ) : ?>
			color: <?php echo esc_attr( $digitHoverColor ); ?>;
		<?php endif; ?>
	}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $boxMargin, 'margin', 'tablet' ) ); ?>
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
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-container {
		gap: <?php echo esc_attr( $itemSpacing['tablet'] ); ?>px;
	}
	
	<?php if ( 'top' === $labelPosition ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
			margin-bottom: <?php echo esc_attr( $labelSpacing['tablet'] ); ?>px;
		}
	<?php elseif ( 'inside' === $labelPosition && 'boxes' === $style ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-digit {
			margin-bottom: <?php echo esc_attr( $labelSpacing['tablet'] ); ?>px;
		}
	<?php else : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
			margin-top: <?php echo esc_attr( $labelSpacing['tablet'] ); ?>px;
		}
	<?php endif; ?>
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-digit {
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
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
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
	
	<?php if ( 'boxes' === $style ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'tablet' ) ); ?>
			<?php if ( 'outlined' !== $boxStyle && 'default' !== $boxStyle ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'tablet' ) ); ?>
			<?php elseif ( 'outlined' === $boxStyle ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderWidth, 'border-width', 'tablet' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'tablet' ) ); ?>
			<?php endif; ?>
		}
	<?php endif; ?>
	
	<?php if ( $displaySeparator ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-separator {
			<?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) && $titleTypography['fontSize']['tablet']['value'] !== '' ) : ?>
				font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet']['value'] . ( $titleTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
}

/* Mobile styles */
@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $boxMargin, 'margin', 'mobile' ) ); ?>
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
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-container {
		gap: <?php echo esc_attr( $itemSpacing['mobile'] ); ?>px;
	}
	
	<?php if ( 'top' === $labelPosition ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
			margin-bottom: <?php echo esc_attr( $labelSpacing['mobile'] ); ?>px;
		}
	<?php elseif ( 'inside' === $labelPosition && 'boxes' === $style ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-digit {
			margin-bottom: <?php echo esc_attr( $labelSpacing['mobile'] ); ?>px;
		}
	<?php else : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
			margin-top: <?php echo esc_attr( $labelSpacing['mobile'] ); ?>px;
		}
	<?php endif; ?>
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-digit {
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
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-label {
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
	
	<?php if ( 'boxes' === $style ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-item-inner {
			<?php echo esc_attr( digiblocks_get_dimensions( $boxPadding, 'padding', 'mobile' ) ); ?>
			<?php if ( 'outlined' !== $boxStyle && 'default' !== $boxStyle ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'mobile' ) ); ?>
			<?php elseif ( 'outlined' === $boxStyle ) : ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderWidth, 'border-width', 'mobile' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $boxBorderRadius, 'border-radius', 'mobile' ) ); ?>
			<?php endif; ?>
		}
	<?php endif; ?>
	
	<?php if ( $displaySeparator ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-countdown-separator {
			<?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) && $titleTypography['fontSize']['mobile']['value'] !== '' ) : ?>
				font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile']['value'] . ( $titleTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
			<?php endif; ?>
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