<?php
/**
 * Product Content Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id         = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-content-' . uniqid();
$visibility = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$textColor  = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$padding    = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin     = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.6, 'tablet' => 1.5, 'mobile' => 1.4],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];

// CSS Output
ob_start();
?>
/* Product Content Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content {
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
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content p {
    margin-bottom: 1em;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content p:last-child {
    margin-bottom: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content ul,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content ol {
    margin: 1em 0;
    padding-left: 2em;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content li {
    margin-bottom: 0.5em;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h1,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h2,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h3,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h4,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h5,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h6 {
    margin: 1.5em 0 0.5em 0;
    font-weight: 600;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h1:first-child,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h2:first-child,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h3:first-child,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h4:first-child,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h5:first-child,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content h6:first-child {
    margin-top: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content a {
    color: inherit;
    text-decoration: underline;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content a:hover {
    text-decoration: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content img {
    max-width: 100%;
    height: auto;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content table th,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-content table td {
    padding: 0.5em;
    border: 1px solid #ddd;
    text-align: left;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-content table th {
    background-color: #f5f5f5;
    font-weight: 600;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-content {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-content {
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