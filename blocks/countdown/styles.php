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
$endDate                  = isset( $attrs['endDate'] ) ? $attrs['endDate'] : '';
$showDays                 = isset( $attrs['showDays'] ) ? $attrs['showDays'] : true;
$showHours                = isset( $attrs['showHours'] ) ? $attrs['showHours'] : true;
$showMinutes              = isset( $attrs['showMinutes'] ) ? $attrs['showMinutes'] : true;
$showSeconds              = isset( $attrs['showSeconds'] ) ? $attrs['showSeconds'] : true;
$daysLabel                = isset( $attrs['daysLabel'] ) ? $attrs['daysLabel'] : __( 'Days', 'digiblocks' );
$hoursLabel               = isset( $attrs['hoursLabel'] ) ? $attrs['hoursLabel'] : __( 'Hours', 'digiblocks' );
$minutesLabel             = isset( $attrs['minutesLabel'] ) ? $attrs['minutesLabel'] : __( 'Minutes', 'digiblocks' );
$secondsLabel             = isset( $attrs['secondsLabel'] ) ? $attrs['secondsLabel'] : __( 'Seconds', 'digiblocks' );
$digitColor               = isset( $attrs['digitColor'] ) ? $attrs['digitColor'] : '#333333';
$digitBackground          = isset( $attrs['digitBackground'] ) ? $attrs['digitBackground'] : '#f0f0f0';
$digitHoverColor          = isset( $attrs['digitHoverColor'] ) ? $attrs['digitHoverColor'] : '';
$digitHoverBackground     = isset( $attrs['digitHoverBackground'] ) ? $attrs['digitHoverBackground'] : '';
$labelColor               = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '#666666';
$labelHoverColor          = isset( $attrs['labelHoverColor'] ) ? $attrs['labelHoverColor'] : '';
$separatorColor           = isset( $attrs['separatorColor'] ) ? $attrs['separatorColor'] : '#333333';
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
$boxPadding               = isset( $attrs['boxPadding'] ) ? $attrs['boxPadding'] : array(
	'desktop' => array(
		'top'    => 10,
		'right'  => 10,
		'bottom' => 10,
		'left'   => 10,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 10,
		'right'  => 10,
		'bottom' => 10,
		'left'   => 10,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 10,
		'right'  => 10,
		'bottom' => 10,
		'left'   => 10,
		'unit'   => 'px',
	),
);
$boxMargin                = isset( $attrs['boxMargin'] ) ? $attrs['boxMargin'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 0,
		'left'   => 0,
		'unit'   => 'px',
	),
);
$boxBorderWidth           = isset( $attrs['boxBorderWidth'] ) ? $attrs['boxBorderWidth'] : array(
	'desktop' => array(
		'top'    => 1,
		'right'  => 1,
		'bottom' => 1,
		'left'   => 1,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 1,
		'right'  => 1,
		'bottom' => 1,
		'left'   => 1,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 1,
		'right'  => 1,
		'bottom' => 1,
		'left'   => 1,
		'unit'   => 'px',
	),
);
$boxBorderColor           = isset( $attrs['boxBorderColor'] ) ? $attrs['boxBorderColor'] : '#e0e0e0';
$showBoxShadow            = isset( $attrs['showBoxShadow'] ) ? $attrs['showBoxShadow'] : false;
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
	'tablet'  => 30,
	'mobile'  => 16,
);
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$labelPosition            = isset( $attrs['labelPosition'] ) ? $attrs['labelPosition'] : 'bottom';
$labelSpacing             = isset( $attrs['labelSpacing'] ) ? $attrs['labelSpacing'] : array(
	'desktop' => 5,
	'tablet'  => 4,
	'mobile'  => 3,
);
$titleTypography          = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 70,
		'tablet'  => 38,
		'mobile'  => 26,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => 1.2,
		'tablet'  => 1.2,
		'mobile'  => 1.2,
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => 0,
		'mobile'  => 0,
	),
	'letterSpacingUnit' => 'px',
);
$contentTypography          = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => 14,
		'mobile'  => 12,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => 1.4,
		'tablet'  => 1.4,
		'mobile'  => 1.4,
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => 0,
		'mobile'  => 0,
	),
	'letterSpacingUnit' => 'px',
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
/* Countdown Block - <?php echo esc_attr( $block_id ); ?> */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
	margin: <?php echo esc_attr( $boxMargin['desktop']['top'] . $boxMargin['desktop']['unit'] . ' ' . $boxMargin['desktop']['right'] . $boxMargin['desktop']['unit'] . ' ' . $boxMargin['desktop']['bottom'] . $boxMargin['desktop']['unit'] . ' ' . $boxMargin['desktop']['left'] . $boxMargin['desktop']['unit'] ); ?>;
	text-align: <?php echo esc_attr( $align ); ?>;
	display: block;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-container {
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: <?php echo $align === 'center' ? 'center' : ($align === 'right' ? 'flex-end' : 'flex-start'); ?>;
	gap: <?php echo esc_attr( $itemSpacing['desktop'] ); ?>px;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item {
	display: flex;
	align-items: center;
}

<?php if ( 'top' === $labelPosition ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item {
		flex-direction: column-reverse;
	}
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
		margin-bottom: <?php echo esc_attr( $labelSpacing['desktop'] ); ?>px;
		margin-top: 0;
	}
<?php elseif ( 'inside' === $labelPosition && 'boxes' === $style ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item {
		flex-direction: column;
	}
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-digit {
		margin-bottom: <?php echo esc_attr( $labelSpacing['desktop'] ); ?>px;
	}
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
		margin-top: 0;
	}
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
<?php else : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item {
		flex-direction: column;
	}
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
		margin-top: <?php echo esc_attr( $labelSpacing['desktop'] ); ?>px;
	}
<?php endif; ?>

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
	transition: all 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-digit {
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
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
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
	
	color: <?php echo esc_attr( $labelColor ); ?>;
	transition: color 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:hover .digiblocks-countdown-label {
	<?php if ( $labelHoverColor ) : ?>
		color: <?php echo esc_attr( $labelHoverColor ); ?>;
	<?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-expired {
	<?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
		font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	
	<?php if ( ! empty( $titleTypography['fontWeight'] ) ) : ?>
		font-weight: <?php echo esc_attr( $titleTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	
	color: <?php echo esc_attr( $digitColor ); ?>;
	text-align: <?php echo esc_attr( $align ); ?>;
}

<?php if ( $displaySeparator ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-separator {
		color: <?php echo esc_attr( $separatorColor ); ?>;
		font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-separator::before {
		content: "<?php echo esc_attr( $separator_char ); ?>";
	}
	
	<?php if ( $separatorHoverColor ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:hover .digiblocks-countdown-separator {
			color: <?php echo esc_attr( $separatorHoverColor ); ?>;
		}
	<?php endif; ?>
<?php endif; ?>

<?php if ( 'boxes' === $style && $boxesEqual ) : ?>
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item {
		flex: 1 0 0;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
		width: 100%;
		text-align: center;
		box-sizing: border-box;
	}
<?php endif; ?>

<?php if ( 'boxes' === $style ) : ?>
	<?php if ( 'filled' === $boxStyle ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			color: <?php echo esc_attr( $digitColor ); ?>;
			border-radius: <?php echo esc_attr( $boxBorderRadius['desktop']['top'] . $boxBorderRadius['desktop']['unit'] . ' ' . $boxBorderRadius['desktop']['right'] . $boxBorderRadius['desktop']['unit'] . ' ' . $boxBorderRadius['desktop']['bottom'] . $boxBorderRadius['desktop']['unit'] . ' ' . $boxBorderRadius['desktop']['left'] . $boxBorderRadius['desktop']['unit'] ); ?>;
			padding: <?php echo esc_attr( $boxPadding['desktop']['top'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['right'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['bottom'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['left'] . $boxPadding['desktop']['unit'] ); ?>;
			<?php if ( $showBoxShadow && isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( $showBoxShadow && isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'outlined' === $boxStyle ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			background-color: transparent;
			color: <?php echo esc_attr( $digitColor ); ?>;
			border: <?php echo esc_attr( $boxBorderWidth['desktop']['top'] . $boxBorderWidth['desktop']['unit'] ); ?> solid <?php echo esc_attr( $boxBorderColor ); ?>;
			border-radius: <?php echo esc_attr( $boxBorderRadius['desktop']['top'] . $boxBorderRadius['desktop']['unit'] . ' ' . $boxBorderRadius['desktop']['right'] . $boxBorderRadius['desktop']['unit'] . ' ' . $boxBorderRadius['desktop']['bottom'] . $boxBorderRadius['desktop']['unit'] . ' ' . $boxBorderRadius['desktop']['left'] . $boxBorderRadius['desktop']['unit'] ); ?>;
			padding: <?php echo esc_attr( $boxPadding['desktop']['top'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['right'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['bottom'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['left'] . $boxPadding['desktop']['unit'] ); ?>;
			<?php if ( $showBoxShadow && isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( $showBoxShadow && isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'pill' === $boxStyle ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			color: <?php echo esc_attr( $digitColor ); ?>;
			border-radius: 50px;
			padding: <?php echo esc_attr( $boxPadding['desktop']['top'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['right'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['bottom'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['left'] . $boxPadding['desktop']['unit'] ); ?>;
			<?php if ( $showBoxShadow && isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( $showBoxShadow && isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'rounded' === $boxStyle ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			color: <?php echo esc_attr( $digitColor ); ?>;
			border-radius: 8px;
			padding: <?php echo esc_attr( $boxPadding['desktop']['top'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['right'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['bottom'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['left'] . $boxPadding['desktop']['unit'] ); ?>;
			<?php if ( $showBoxShadow && isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( $showBoxShadow && isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php elseif ( 'circle' === $boxStyle ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			background-color: <?php echo esc_attr( $digitBackground ); ?>;
			color: <?php echo esc_attr( $digitColor ); ?>;
			border-radius: 50%;
			aspect-ratio: 1/1;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: <?php echo esc_attr( $boxPadding['desktop']['top'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['right'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['bottom'] . $boxPadding['desktop']['unit'] . ' ' . $boxPadding['desktop']['left'] . $boxPadding['desktop']['unit'] ); ?>;
			<?php if ( $showBoxShadow && isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverBackground ) : ?>
				background-color: <?php echo esc_attr( $digitHoverBackground ); ?>;
			<?php endif; ?>
			
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( $showBoxShadow && isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php else : ?>
		/* Default box style */
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			color: <?php echo esc_attr( $digitColor ); ?>;
			<?php if ( $showBoxShadow && isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
				<?php $inset = isset( $boxShadow['position'] ) && 'inset' === $boxShadow['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadow['horizontal'] . 'px ' . $boxShadow['vertical'] . 'px ' . $boxShadow['blur'] . 'px ' . $boxShadow['spread'] . 'px ' . $boxShadow['color'] ); ?>;
			<?php endif; ?>
		}
		
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
			<?php if ( $digitHoverColor ) : ?>
				color: <?php echo esc_attr( $digitHoverColor ); ?>;
			<?php endif; ?>
			
			<?php if ( $showBoxShadow && isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
				<?php $inset = isset( $boxShadowHover['position'] ) && 'inset' === $boxShadowHover['position'] ? 'inset ' : ''; ?>
				box-shadow: <?php echo esc_attr( $inset . $boxShadowHover['horizontal'] . 'px ' . $boxShadowHover['vertical'] . 'px ' . $boxShadowHover['blur'] . 'px ' . $boxShadowHover['spread'] . 'px ' . $boxShadowHover['color'] ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
<?php else : ?>
	/* Simple style (no boxes) */
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
		color: <?php echo esc_attr( $digitColor ); ?>;
	}
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
		<?php if ( $digitHoverColor ) : ?>
			color: <?php echo esc_attr( $digitHoverColor ); ?>;
		<?php endif; ?>
	}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		margin: <?php echo esc_attr( $boxMargin['tablet']['top'] . $boxMargin['tablet']['unit'] . ' ' . $boxMargin['tablet']['right'] . $boxMargin['tablet']['unit'] . ' ' . $boxMargin['tablet']['bottom'] . $boxMargin['tablet']['unit'] . ' ' . $boxMargin['tablet']['left'] . $boxMargin['tablet']['unit'] ); ?>;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-container {
		gap: <?php echo esc_attr( $itemSpacing['tablet'] ); ?>px;
	}
	
	<?php if ( 'top' === $labelPosition ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
			margin-bottom: <?php echo esc_attr( $labelSpacing['tablet'] ); ?>px;
		}
	<?php elseif ( 'inside' === $labelPosition && 'boxes' === $style ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-digit {
			margin-bottom: <?php echo esc_attr( $labelSpacing['tablet'] ); ?>px;
		}
	<?php else : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
			margin-top: <?php echo esc_attr( $labelSpacing['tablet'] ); ?>px;
		}
	<?php endif; ?>
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-digit {
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
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
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
	
	<?php if ( 'boxes' === $style ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			padding: <?php echo esc_attr( $boxPadding['tablet']['top'] . $boxPadding['tablet']['unit'] . ' ' . $boxPadding['tablet']['right'] . $boxPadding['tablet']['unit'] . ' ' . $boxPadding['tablet']['bottom'] . $boxPadding['tablet']['unit'] . ' ' . $boxPadding['tablet']['left'] . $boxPadding['tablet']['unit'] ); ?>;
			<?php if ( 'outlined' !== $boxStyle && 'default' !== $boxStyle ) : ?>
				border-radius: <?php echo esc_attr( $boxBorderRadius['tablet']['top'] . $boxBorderRadius['tablet']['unit'] . ' ' . $boxBorderRadius['tablet']['right'] . $boxBorderRadius['tablet']['unit'] . ' ' . $boxBorderRadius['tablet']['bottom'] . $boxBorderRadius['tablet']['unit'] . ' ' . $boxBorderRadius['tablet']['left'] . $boxBorderRadius['tablet']['unit'] ); ?>;
			<?php elseif ( 'outlined' === $boxStyle ) : ?>
				border-width: <?php echo esc_attr( $boxBorderWidth['tablet']['top'] . $boxBorderWidth['tablet']['unit'] . ' ' . $boxBorderWidth['tablet']['right'] . $boxBorderWidth['tablet']['unit'] . ' ' . $boxBorderWidth['tablet']['bottom'] . $boxBorderWidth['tablet']['unit'] . ' ' . $boxBorderWidth['tablet']['left'] . $boxBorderWidth['tablet']['unit'] ); ?>;
				border-radius: <?php echo esc_attr( $boxBorderRadius['tablet']['top'] . $boxBorderRadius['tablet']['unit'] . ' ' . $boxBorderRadius['tablet']['right'] . $boxBorderRadius['tablet']['unit'] . ' ' . $boxBorderRadius['tablet']['bottom'] . $boxBorderRadius['tablet']['unit'] . ' ' . $boxBorderRadius['tablet']['left'] . $boxBorderRadius['tablet']['unit'] ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
	
	<?php if ( $displaySeparator ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-separator {
			<?php if ( ! empty( $titleTypography['fontSize']['tablet'] ) ) : ?>
				font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
}

/* Mobile styles */
@media (max-width: 767px) {
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		margin: <?php echo esc_attr( $boxMargin['mobile']['top'] . $boxMargin['mobile']['unit'] . ' ' . $boxMargin['mobile']['right'] . $boxMargin['mobile']['unit'] . ' ' . $boxMargin['mobile']['bottom'] . $boxMargin['mobile']['unit'] . ' ' . $boxMargin['mobile']['left'] . $boxMargin['mobile']['unit'] ); ?>;
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-container {
		gap: <?php echo esc_attr( $itemSpacing['mobile'] ); ?>px;
	}
	
	<?php if ( 'top' === $labelPosition ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
			margin-bottom: <?php echo esc_attr( $labelSpacing['mobile'] ); ?>px;
		}
	<?php elseif ( 'inside' === $labelPosition && 'boxes' === $style ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-digit {
			margin-bottom: <?php echo esc_attr( $labelSpacing['mobile'] ); ?>px;
		}
	<?php else : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
			margin-top: <?php echo esc_attr( $labelSpacing['mobile'] ); ?>px;
		}
	<?php endif; ?>
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-digit {
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
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-label {
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
	
	<?php if ( 'boxes' === $style ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-item-inner {
			padding: <?php echo esc_attr( $boxPadding['mobile']['top'] . $boxPadding['mobile']['unit'] . ' ' . $boxPadding['mobile']['right'] . $boxPadding['mobile']['unit'] . ' ' . $boxPadding['mobile']['bottom'] . $boxPadding['mobile']['unit'] . ' ' . $boxPadding['mobile']['left'] . $boxPadding['mobile']['unit'] ); ?>;
			<?php if ( 'outlined' !== $boxStyle && 'default' !== $boxStyle ) : ?>
				border-radius: <?php echo esc_attr( $boxBorderRadius['mobile']['top'] . $boxBorderRadius['mobile']['unit'] . ' ' . $boxBorderRadius['mobile']['right'] . $boxBorderRadius['mobile']['unit'] . ' ' . $boxBorderRadius['mobile']['bottom'] . $boxBorderRadius['mobile']['unit'] . ' ' . $boxBorderRadius['mobile']['left'] . $boxBorderRadius['mobile']['unit'] ); ?>;
			<?php elseif ( 'outlined' === $boxStyle ) : ?>
				border-width: <?php echo esc_attr( $boxBorderWidth['mobile']['top'] . $boxBorderWidth['mobile']['unit'] . ' ' . $boxBorderWidth['mobile']['right'] . $boxBorderWidth['mobile']['unit'] . ' ' . $boxBorderWidth['mobile']['bottom'] . $boxBorderWidth['mobile']['unit'] . ' ' . $boxBorderWidth['mobile']['left'] . $boxBorderWidth['mobile']['unit'] ); ?>;
				border-radius: <?php echo esc_attr( $boxBorderRadius['mobile']['top'] . $boxBorderRadius['mobile']['unit'] . ' ' . $boxBorderRadius['mobile']['right'] . $boxBorderRadius['mobile']['unit'] . ' ' . $boxBorderRadius['mobile']['bottom'] . $boxBorderRadius['mobile']['unit'] . ' ' . $boxBorderRadius['mobile']['left'] . $boxBorderRadius['mobile']['unit'] ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
	
	<?php if ( $displaySeparator ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-countdown-separator {
			<?php if ( ! empty( $titleTypography['fontSize']['mobile'] ) ) : ?>
				font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
			<?php endif; ?>
		}
	<?php endif; ?>
}
<?php
$digiblocks_css_output = ob_get_clean();