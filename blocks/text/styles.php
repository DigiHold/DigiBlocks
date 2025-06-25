<?php
/**
 * Text Block Styles
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
$textColor                    = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$textHoverColor               = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor              = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor         = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$backgroundGradient           = isset( $attrs['backgroundGradient'] ) ? $attrs['backgroundGradient'] : 'none';
$align                        = isset( $attrs['align'] ) ? $attrs['align'] : array(
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
);
$maxWidth                     = isset( $attrs['maxWidth'] ) ? $attrs['maxWidth'] : array(
	'desktop' => array( 'value' => '', 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$animation                    = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$hoverEffect                  = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle                  = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor                  = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor             = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';

// Text shadow
$textShadow = isset( $attrs['textShadow'] ) ? $attrs['textShadow'] : array(
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.3)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
);

// Box shadow
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

// Get padding (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 0,
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

// Get margin (with fallback)
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
    'desktop' => array(
        'top'    => 0,
        'right'  => 0,
        'bottom' => 16,
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
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => array(
        'top'    => 0,
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

// Get typography settings with default values
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 16,
        'tablet'  => 15,
        'mobile'  => 14,
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array(
        'desktop' => 1.5,
        'tablet'  => 1.4,
        'mobile'  => 1.3,
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => 0,
        'tablet'  => 0,
        'mobile'  => 0,
    ),
    'letterSpacingUnit' => 'px',
);

// CSS Output
ob_start();
?>
/* Text Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    text-align: <?php echo esc_attr( $align['desktop'] ); ?>;
    color: <?php echo esc_attr( $textColor ); ?>;
    
    <?php if ( $backgroundGradient && 'none' !== $backgroundGradient ) : ?>
        background: <?php echo esc_attr( $backgroundGradient ); ?>;
    <?php elseif ( $backgroundColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php endif; ?>
    
    <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
        <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    <?php else : ?>
        border-style: none;
    <?php endif; ?>
    
    <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>

    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>
    
    <?php if ( isset( $textShadow['enable'] ) && $textShadow['enable'] ) : ?>
        text-shadow: <?php echo esc_attr( $textShadow['horizontal'] ); ?>px <?php echo esc_attr( $textShadow['vertical'] ); ?>px <?php echo esc_attr( $textShadow['blur'] ); ?>px <?php echo esc_attr( $textShadow['color'] ); ?>;
    <?php endif; ?>

    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    
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
        
    <?php if ( ! empty( $typography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $typography['textTransform'] ); ?>;
    <?php endif; ?>
        
    <?php if ( ! empty( $typography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $typography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( ! empty( $typography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['desktop'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
        
    <?php if ( ! empty( $typography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['desktop'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
        
	<?php if ( ! empty( $maxWidth['desktop']['value'] ) ) : ?>
		max-width: <?php echo esc_attr( $maxWidth['desktop']['value'] . $maxWidth['desktop']['unit'] ); ?>;
		margin-left: auto;
		margin-right: auto;
	<?php endif; ?>
    
    transition: all 0.3s ease;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Hover effects for the text block */
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $textHoverColor ) : ?>
        color: <?php echo esc_attr( $textHoverColor ); ?>;
    <?php endif; ?>
        
    <?php if ( $backgroundHoverColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
        
    <?php if ( $borderHoverColor ) : ?>
        border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
        
    <?php if ( 'lift' === $hoverEffect ) : ?>
        transform: translateY(-5px);
    <?php elseif ( 'scale' === $hoverEffect ) : ?>
        transform: scale(1.02);
    <?php elseif ( 'glow' === $hoverEffect ) : ?>
        filter: brightness(1.1);
    <?php elseif ( 'bounce' === $hoverEffect ) : ?>
        transform: translateY(-3px);
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    <?php endif; ?>
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        text-align: <?php echo esc_attr( $align['tablet'] ); ?>;
        
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
        
        <?php if ( isset( $typography['fontSize']['tablet']) || isset( $typography['lineHeight']['tablet']) || isset( $typography['letterSpacing']['tablet'] ) ) : ?>
            <?php if ( isset( $typography['fontSize']['tablet'] ) ) : ?>
                font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['lineHeight']['tablet'] ) ) : ?>
                line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['letterSpacing']['tablet'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        <?php endif; ?>

		<?php if ( ! empty( $maxWidth['tablet']['value'] ) ) : ?>
			max-width: <?php echo esc_attr( $maxWidth['tablet']['value'] . $maxWidth['tablet']['unit'] ); ?>;
		<?php endif; ?>

		<?php if ( ! empty( $maxWidth['desktop']['value'] ) || ! empty( $maxWidth['tablet']['value'] ) ) : ?>
			margin-left: auto;
			margin-right: auto;
		<?php endif; ?>
    }
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        text-align: <?php echo esc_attr( $align['mobile'] ); ?>;
        
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
        
        <?php if ( isset( $typography['fontSize']['mobile']) || isset( $typography['lineHeight']['mobile']) || isset( $typography['letterSpacing']['mobile'] ) ) : ?>
            <?php if ( isset( $typography['fontSize']['mobile'] ) ) : ?>
                font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['lineHeight']['mobile'] ) ) : ?>
                line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $typography['letterSpacing']['mobile'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        <?php endif; ?>

		<?php if ( ! empty( $maxWidth['mobile']['value'] ) ) : ?>
			max-width: <?php echo esc_attr( $maxWidth['mobile']['value'] . $maxWidth['mobile']['unit'] ); ?>;
		<?php endif; ?>

		<?php if ( ! empty( $maxWidth['desktop']['value'] ) || ! empty( $maxWidth['tablet']['value'] ) || ! empty( $maxWidth['mobile']['value'] ) ) : ?>
			margin-left: auto;
			margin-right: auto;
		<?php endif; ?>
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