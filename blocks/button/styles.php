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
/* Button Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
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
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php elseif ( 'small' === $size ) : ?>
		padding: 8px 16px;
		font-size: 0.875em;
	<?php elseif ( 'large' === $size ) : ?>
		padding: 16px 32px;
		font-size: 1.125em;
	<?php else : ?>
		padding: 12px 24px;
	<?php endif; ?>

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
}

.<?php echo esc_attr( $id ); ?>:hover {
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
.<?php echo esc_attr( $id ); ?> .digiblocks-button-icon {
	display: flex;
	align-items: center;
	justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-button-icon svg {
	width: 1em;
	height: 1em;
	fill: currentColor;
}

/* Typography for all inner buttons */
.<?php echo esc_attr( $id ); ?> {
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
		.<?php echo esc_attr( $id ); ?> {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		}
	<?php endif; ?>
	
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> {
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
		.<?php echo esc_attr( $id ); ?> {
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		}
	<?php endif; ?>
	
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		
		<?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> {
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