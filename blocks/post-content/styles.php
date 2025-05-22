<?php
/**
 * Post Content Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                    = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-post-content-' . uniqid();
$visibility            = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$color                 = isset( $attrs['color'] ) ? $attrs['color'] : '';
$text_align            = isset( $attrs['textAlign'] ) ? $attrs['textAlign'] : [
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
];
$columns               = isset( $attrs['columns'] ) ? $attrs['columns'] : [
    'desktop' => 1,
    'tablet'  => 1,
    'mobile'  => 1,
];
$dropcap               = isset( $attrs['dropcap'] ) ? $attrs['dropcap'] : false;
$drop_cap_color        = isset( $attrs['dropCapColor'] ) ? $attrs['dropCapColor'] : '';
$drop_cap_size         = isset( $attrs['dropCapSize'] ) ? $attrs['dropCapSize'] : [
    'desktop' => 3.5,
    'tablet'  => 3.0,
    'mobile'  => 2.5,
];
$drop_cap_space        = isset( $attrs['dropCapSpace'] ) ? $attrs['dropCapSpace'] : [
    'desktop' => 10,
    'tablet'  => 8,
    'mobile'  => 6,
];
$list_spacing          = isset( $attrs['listSpacing'] ) ? $attrs['listSpacing'] : [
    'desktop' => 20,
    'tablet'  => 15,
    'mobile'  => 10,
];
$paragraph_spacing     = isset( $attrs['paragraphSpacing'] ) ? $attrs['paragraphSpacing'] : [
    'desktop' => 20,
    'tablet'  => 15,
    'mobile'  => 10,
];
$heading_spacing       = isset( $attrs['headingSpacing'] ) ? $attrs['headingSpacing'] : [
    'desktop' => 30,
    'tablet'  => 25,
    'mobile'  => 20,
];
$typography            = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.7, 'tablet' => 1.6, 'mobile' => 1.5],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$padding               = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$animation             = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';

// CSS Output
ob_start();
?>
/* Post Content Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php if ( $color ) : ?>
    color: <?php echo esc_attr( $color ); ?>;
    <?php endif; ?>
    text-align: <?php echo esc_attr( $text_align['desktop'] ); ?>;
    <?php if ( $columns['desktop'] > 1 ) : ?>
    column-count: <?php echo esc_attr( $columns['desktop'] ); ?>;
    column-gap: 2.5em;
    <?php endif; ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    transition: color 0.3s ease;

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

.<?php echo esc_attr( $id ); ?> p {
    margin-bottom: <?php echo esc_attr( $paragraph_spacing['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> h1, 
.<?php echo esc_attr( $id ); ?> h2, 
.<?php echo esc_attr( $id ); ?> h3, 
.<?php echo esc_attr( $id ); ?> h4, 
.<?php echo esc_attr( $id ); ?> h5, 
.<?php echo esc_attr( $id ); ?> h6 {
    margin-bottom: <?php echo esc_attr( $heading_spacing['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> ul, 
.<?php echo esc_attr( $id ); ?> ol {
    margin-bottom: <?php echo esc_attr( $list_spacing['desktop'] ); ?>px;
}

<?php if ( $dropcap ) : ?>
.<?php echo esc_attr( $id ); ?> p:first-of-type:first-letter {
    <?php if ( $drop_cap_color ) : ?>
    color: <?php echo esc_attr( $drop_cap_color ); ?>;
    <?php endif; ?>
    float: left;
    font-size: <?php echo esc_attr( $drop_cap_size['desktop'] ); ?>em;
    line-height: 0.8;
    margin-right: <?php echo esc_attr( $drop_cap_space['desktop'] ); ?>px;
    padding-top: 4px;
}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        text-align: <?php echo esc_attr( $text_align['tablet'] ); ?>;
        <?php if ( $columns['tablet'] > 1 ) : ?>
        column-count: <?php echo esc_attr( $columns['tablet'] ); ?>;
        <?php else : ?>
        column-count: 1;
        <?php endif; ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        
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
    
    .<?php echo esc_attr( $id ); ?> p {
        margin-bottom: <?php echo esc_attr( $paragraph_spacing['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> h1, 
    .<?php echo esc_attr( $id ); ?> h2, 
    .<?php echo esc_attr( $id ); ?> h3, 
    .<?php echo esc_attr( $id ); ?> h4, 
    .<?php echo esc_attr( $id ); ?> h5, 
    .<?php echo esc_attr( $id ); ?> h6 {
        margin-bottom: <?php echo esc_attr( $heading_spacing['tablet'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> ul, 
    .<?php echo esc_attr( $id ); ?> ol {
        margin-bottom: <?php echo esc_attr( $list_spacing['tablet'] ); ?>px;
    }
    
    <?php if ( $dropcap ) : ?>
    .<?php echo esc_attr( $id ); ?> p:first-of-type:first-letter {
        font-size: <?php echo esc_attr( $drop_cap_size['tablet'] ); ?>em;
        margin-right: <?php echo esc_attr( $drop_cap_space['tablet'] ); ?>px;
    }
    <?php endif; ?>
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        text-align: <?php echo esc_attr( $text_align['mobile'] ); ?>;
        column-count: 1; /* Force single column on mobile */
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
        
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
    
    .<?php echo esc_attr( $id ); ?> p {
        margin-bottom: <?php echo esc_attr( $paragraph_spacing['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> h1, 
    .<?php echo esc_attr( $id ); ?> h2, 
    .<?php echo esc_attr( $id ); ?> h3, 
    .<?php echo esc_attr( $id ); ?> h4, 
    .<?php echo esc_attr( $id ); ?> h5, 
    .<?php echo esc_attr( $id ); ?> h6 {
        margin-bottom: <?php echo esc_attr( $heading_spacing['mobile'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> ul, 
    .<?php echo esc_attr( $id ); ?> ol {
        margin-bottom: <?php echo esc_attr( $list_spacing['mobile'] ); ?>px;
    }
    
    <?php if ( $dropcap ) : ?>
    .<?php echo esc_attr( $id ); ?> p:first-of-type:first-letter {
        font-size: <?php echo esc_attr( $drop_cap_size['mobile'] ); ?>em;
        margin-right: <?php echo esc_attr( $drop_cap_space['mobile'] ); ?>px;
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