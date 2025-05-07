<?php
/**
 * Login Link Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                    = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$custom_classes        = isset( $attrs['customClasses'] ) ? $attrs['customClasses'] : '';
$text_color            = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '';
$text_hover_color      = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$typography            = isset( $attrs['typography'] ) ? $attrs['typography'] : array();
$icon_size             = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 16,
    'tablet' => 15,
    'mobile' => 14,
);

// CSS Output
ob_start();
?>
/* Login Link Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;
    <?php if ( ! empty( $text_color ) ) : ?>
        color: <?php echo esc_attr( $text_color ); ?>;
    <?php endif; ?>
    gap: 8px; /* Space between icon and text */
}

.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( ! empty( $text_hover_color ) ) : ?>
        color: <?php echo esc_attr( $text_hover_color ); ?>;
    <?php endif; ?>
}

/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-login-link-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-login-link-icon svg {
    width: <?php echo esc_attr( $icon_size['desktop'] ); ?>px;
    height: <?php echo esc_attr( $icon_size['desktop'] ); ?>px;
    fill: currentColor;
}

/* Typography */
.<?php echo esc_attr( $id ); ?> {
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

/* Responsive Typography and Icon Size */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-login-link-icon svg {
        width: <?php echo esc_attr( $icon_size['tablet'] ); ?>px;
        height: <?php echo esc_attr( $icon_size['tablet'] ); ?>px;
    }
}

@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-login-link-icon svg {
        width: <?php echo esc_attr( $icon_size['mobile'] ); ?>px;
        height: <?php echo esc_attr( $icon_size['mobile'] ); ?>px;
    }
}
<?php
$digiblocks_css_output = ob_get_clean();