<?php
/**
 * Post Navigation Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                    = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-post-nav-' . uniqid();
$visibility            = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$navigationType        = isset( $attrs['navigationType'] ) ? $attrs['navigationType'] : 'default';
$color                 = isset( $attrs['color'] ) ? $attrs['color'] : '#333333';
$hoverColor            = isset( $attrs['hoverColor'] ) ? $attrs['hoverColor'] : '';
$backgroundColor       = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : 'transparent';
$backgroundHoverColor  = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$borderStyle           = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderWidth           = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px']
];
$borderRadius          = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px']
];
$borderColor           = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor      = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$padding               = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$typography            = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
// Box shadow settings
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable' => false,
    'color' => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical' => 0,
    'blur' => 0,
    'spread' => 0,
    'position' => 'outset'
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
    'enable' => false,
    'color' => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical' => 0,
    'blur' => 0,
    'spread' => 0,
    'position' => 'outset'
);

// CSS Output
ob_start();
?>
/* Post Navigation Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-links {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-link {
	flex: 1;
    display: inline-flex;
    align-items: center;
    color: <?php echo esc_attr( $color ); ?>;
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php if ( $borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none' ) : ?>
    border-style: <?php echo esc_attr( $borderStyle ); ?>;
    border-color: <?php echo esc_attr( $borderColor ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    <?php endif; ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    padding: 10px 15px;
    text-decoration: none;
    transition: all 0.3s ease;
    gap: 10px;
    <?php if ( $boxShadow['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php endif; ?>
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
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-link:hover {
    color: <?php echo esc_attr( $hoverColor ?: $color ); ?>;
    background-color: <?php echo esc_attr( $backgroundHoverColor ?: $backgroundColor ); ?>;
	<?php if ( $borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none' && $borderHoverColor ) : ?>
    border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
    <?php endif; ?>
	<?php if ( $boxShadowHover['enable'] ) : ?>
	box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-next {
	text-align: right;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-content {
    display: flex;
	flex-direction: column;
	gap: .5rem;
	flex: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-label {
    font-size: 0.9em;
    opacity: 0.8;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-title {
    font-weight: 600;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-image {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    object-fit: cover;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-link {
        <?php if ( $borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none' ) : ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-links {
		flex-direction: column;
	}
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-post-navigation-link {
        <?php if ( $borderStyle && $borderStyle !== 'default' && $borderStyle !== 'none' ) : ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
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