<?php
/**
 * Copyright Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id           = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-copyright-' . uniqid();
$visibility   = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$textAlign    = isset( $attrs['textAlign'] ) ? $attrs['textAlign'] : [
    'desktop' => 'left',
    'tablet'  => '',
    'mobile'  => '',
];
$textColor       = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$textHoverColor  = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$linkColor       = isset( $attrs['linkColor'] ) ? $attrs['linkColor'] : '';
$linkHoverColor  = isset( $attrs['linkHoverColor'] ) ? $attrs['linkHoverColor'] : '';
$typography      = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$padding         = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin          = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$animation       = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';

// CSS Output
ob_start();
?>
/* Copyright Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    text-align: <?php echo esc_attr( $textAlign['desktop'] ); ?>;
    color: <?php echo esc_attr( $textColor ); ?>;
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
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( ! empty( $textHoverColor ) ) : ?>
    color: <?php echo esc_attr( $textHoverColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> strong {
    color: inherit;
}

.<?php echo esc_attr( $id ); ?> a {
    color: <?php echo esc_attr( $linkColor ?: $textColor ); ?>;
    text-decoration: inherit;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> a:hover {
    color: <?php echo esc_attr( $linkHoverColor ?: ( $linkColor ?: $textColor ) ); ?>;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( ! empty( $textAlign['tablet'] ) ) : ?>
        text-align: <?php echo esc_attr( $textAlign['tablet'] ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( ! empty( $textAlign['mobile'] ) ) : ?>
        text-align: <?php echo esc_attr( $textAlign['mobile'] ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
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