<?php
/**
 * Breadcrumbs Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id               = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-breadcrumbs-' . uniqid();
$visibility       = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$align            = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
];
$textColor        = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$linkColor        = isset( $attrs['linkColor'] ) ? $attrs['linkColor'] : '#0066cc';
$linkHoverColor   = isset( $attrs['linkHoverColor'] ) ? $attrs['linkHoverColor'] : '#004c99';
$separatorColor   = isset( $attrs['separatorColor'] ) ? $attrs['separatorColor'] : '#666666';
$animation        = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$margin           = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$separatorSize    = isset( $attrs['separatorSize'] ) ? $attrs['separatorSize'] : [
    'desktop' => 12,
    'tablet'  => 10, 
    'mobile'  => 9,
];
$separatorSpacing = isset( $attrs['separatorSpacing'] ) ? $attrs['separatorSpacing'] : [
    'desktop' => 8,
    'tablet'  => 6,
    'mobile'  => 4,
];

// Typography settings
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.5, 'mobile' => 1.5],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];

// CSS Output
ob_start();
?>
/* Breadcrumbs Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    text-align: <?php echo esc_attr( $align['desktop'] ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-list {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-item {
    display: flex;
    align-items: center;
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

.<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-link {
    color: <?php echo esc_attr( $linkColor ); ?>;
    text-decoration: none;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-link:hover {
    color: <?php echo esc_attr( $linkHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-separator {
    display: flex;
    align-items: center;
    margin: 0 <?php echo esc_attr( $separatorSpacing['desktop'] ); ?>px;
    color: <?php echo esc_attr( $separatorColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-separator svg {
    width: <?php echo esc_attr( $separatorSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorSize['desktop'] ); ?>px;
    fill: currentColor;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        text-align: <?php echo esc_attr( $align['tablet'] ); ?>;
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-item {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-separator {
        margin: 0 <?php echo esc_attr( $separatorSpacing['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-separator svg {
        width: <?php echo esc_attr( $separatorSize['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorSize['tablet'] ); ?>px;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        text-align: <?php echo esc_attr( $align['mobile'] ); ?>;
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-item {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-separator {
        margin: 0 <?php echo esc_attr( $separatorSpacing['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-breadcrumb-separator svg {
        width: <?php echo esc_attr( $separatorSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorSize['mobile'] ); ?>px;
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