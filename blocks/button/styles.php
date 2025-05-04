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
$size                = isset( $attrs['size'] ) ? $attrs['size'] : 'medium';
$fill                = isset( $attrs['fill'] ) ? $attrs['fill'] : false;
$onlyIcon            = isset( $attrs['onlyIcon'] ) ? $attrs['onlyIcon'] : false;
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
	'tablet'  => array( 'top' => 10, 'right' => 20, 'bottom' => 10, 'left' => 20, 'unit' => 'px' ),
	'mobile'  => array( 'top' => 8, 'right' => 16, 'bottom' => 8, 'left' => 16, 'unit' => 'px' ),
);

$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
	'desktop' => array( 'top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px' ),
);

$borderWidth = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
	'desktop' => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ),
	'tablet'  => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ),
	'mobile'  => array( 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px' ),
);

$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
	'desktop' => array( 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' ),
	'tablet'  => array( 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' ),
	'mobile'  => array( 'top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px' ),
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

$buttonTypography = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : array(
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

// CSS Output
ob_start();
?>
/* Button Block - <?php echo esc_attr( $block_id ); ?> */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	cursor: pointer;
	line-height: 1;
	white-space: nowrap;
	box-sizing: border-box;
	transition: all 0.3s ease;
	gap: 8px; /* Space between icon and text */
	
	color: <?php echo esc_attr( $textColor ); ?>;
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	
	<?php if ( $fill ) : ?>
		width: 100%;
	<?php endif; ?>
	
	<?php if ( 'custom' === $size ) : ?>
		padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
	<?php elseif ( 'small' === $size ) : ?>
		padding: 8px 16px;
		font-size: 0.875em;
	<?php elseif ( 'large' === $size ) : ?>
		padding: 16px 32px;
		font-size: 1.125em;
	<?php else : ?>
		padding: 12px 24px;
	<?php endif; ?>
	
	margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
	
	<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
		border-width: <?php echo esc_attr( $borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
	<?php else : ?>
		border: none;
	<?php endif; ?>
	
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"]:hover {
	color: <?php echo esc_attr( $textHoverColor ?: $textColor ); ?>;
	background-color: <?php echo esc_attr( $backgroundHoverColor ?: $backgroundColor ); ?>;
	text-decoration: none;
	
	<?php if ( $borderHoverColor ) : ?>
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	<?php endif; ?>
	
	<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	<?php endif; ?>
}

/* Icon styles */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-button-icon {
	display: flex;
	align-items: center;
	justify-content: center;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-button-icon svg {
	width: 1em;
	height: 1em;
	fill: currentColor;
}

/* Typography for all inner buttons */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
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
}

/* Responsive styles */
@media (max-width: 991px) {
	<?php if ( 'custom' === $size ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
			padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
		}
	<?php endif; ?>
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
		
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
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
}

@media (max-width: 767px) {
	<?php if ( 'custom' === $size ) : ?>
		[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
			padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
		}
	<?php endif; ?>
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
		
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			border-width: <?php echo esc_attr( $borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit'] ); ?>;
			border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
		<?php endif; ?>
	}
	
	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
		<?php if ( ! empty( $buttonTypography['fontSize']['mobile'] ) ) : ?>
			font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
			line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		
		<?php if ( ! empty( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
			letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
}

<?php
$digiblocks_css_output = ob_get_clean();