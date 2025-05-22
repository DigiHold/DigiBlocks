<?php
/**
 * Social Share Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id                         = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-social-' . uniqid();
$visibility                 = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$showLabels                 = isset( $attrs['showLabels'] ) ? $attrs['showLabels'] : false;
$buttonStyle                = isset( $attrs['buttonStyle'] ) ? $attrs['buttonStyle'] : 'filled';
$buttonSize                 = isset( $attrs['buttonSize'] ) ? $attrs['buttonSize'] : [
    'desktop' => 40,
    'tablet'  => 36,
    'mobile'  => 32,
];
$iconSpacing                = isset( $attrs['iconSpacing'] ) ? $attrs['iconSpacing'] : [
    'desktop' => 10,
    'tablet'  => 8,
    'mobile'  => 6,
];
$alignment                  = isset( $attrs['alignment'] ) ? $attrs['alignment'] : [
    'desktop' => 'flex-start',
    'tablet'  => 'flex-start',
    'mobile'  => 'flex-start',
];
$useCustomColors            = isset( $attrs['useCustomColors'] ) ? $attrs['useCustomColors'] : false;
$buttonBackgroundColor      = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '';
$buttonTextColor            = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '';
$buttonHoverBackgroundColor = isset( $attrs['buttonHoverBackgroundColor'] ) ? $attrs['buttonHoverBackgroundColor'] : '';
$buttonHoverTextColor       = isset( $attrs['buttonHoverTextColor'] ) ? $attrs['buttonHoverTextColor'] : '';
$borderStyle                = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$borderWidth                = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderRadius               = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderColor                = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '';
$borderHoverColor           = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$padding                    = isset( $attrs['padding'] ) ? $attrs['padding'] : [
    'desktop' => ['top' => 10, 'right' => 15, 'bottom' => 10, 'left' => 15, 'unit' => 'px'],
    'tablet'  => ['top' => 8, 'right' => 12, 'bottom' => 8, 'left' => 12, 'unit' => 'px'],
    'mobile'  => ['top' => 6, 'right' => 10, 'bottom' => 6, 'left' => 10, 'unit' => 'px'],
];
$margin                     = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$typography                 = isset( $attrs['typography'] ) ? $attrs['typography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$animation                  = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';

// Get active social networks
$facebook  = isset( $attrs['facebook'] ) ? $attrs['facebook'] : true;
$twitter   = isset( $attrs['twitter'] ) ? $attrs['twitter'] : true;
$linkedin  = isset( $attrs['linkedin'] ) ? $attrs['linkedin'] : true;
$pinterest = isset( $attrs['pinterest'] ) ? $attrs['pinterest'] : true;
$reddit    = isset( $attrs['reddit'] ) ? $attrs['reddit'] : false;
$whatsapp  = isset( $attrs['whatsapp'] ) ? $attrs['whatsapp'] : false;
$telegram  = isset( $attrs['telegram'] ) ? $attrs['telegram'] : false;
$email     = isset( $attrs['email'] ) ? $attrs['email'] : true;
$print     = isset( $attrs['print'] ) ? $attrs['print'] : false;

// Social networks data with their brand colors
$social_networks = [
    'facebook'  => [ 'enabled' => $facebook, 'color' => '#1877f2' ],
    'twitter'   => [ 'enabled' => $twitter, 'color' => '#000000' ],
    'linkedin'  => [ 'enabled' => $linkedin, 'color' => '#0077b5' ],
    'pinterest' => [ 'enabled' => $pinterest, 'color' => '#e60023' ],
    'reddit'    => [ 'enabled' => $reddit, 'color' => '#ff4500' ],
    'whatsapp'  => [ 'enabled' => $whatsapp, 'color' => '#25d366' ],
    'telegram'  => [ 'enabled' => $telegram, 'color' => '#0088cc' ],
    'email'     => [ 'enabled' => $email, 'color' => '#D44638' ],
    'print'     => [ 'enabled' => $print, 'color' => '#000000' ],
];

// CSS Output
ob_start();
?>
/* Social Share Buttons Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo digiblocks_get_dimensions( $margin, 'margin', 'desktop' ); ?>
    display: flex;
    flex-wrap: wrap;
    justify-content: <?php echo esc_attr( $alignment['desktop'] ); ?>;
    gap: <?php echo esc_attr( $iconSpacing['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
	gap: 8px;
    <?php echo digiblocks_get_dimensions( $padding, 'padding', 'desktop' ); ?>
    <?php if ($buttonStyle === 'outlined'): ?>
    border-style: <?php echo esc_attr($borderStyle !== 'none' ? $borderStyle : 'solid'); ?>;
    <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ?: 'border-width: 2px;'; ?>
    <?php elseif ($borderStyle !== 'none'): ?>
	border-style: <?php echo esc_attr( $borderStyle ); ?>;
    <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ); ?>
    border-color: <?php echo esc_attr( $borderColor ?: '#e0e0e0' ); ?>;
    <?php endif; ?>
    <?php echo digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ); ?>
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    line-height: 1;
    /* Button size */
    <?php if ( !$showLabels ) : ?>
    width: <?php echo esc_attr( $buttonSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $buttonSize['desktop'] ); ?>px;
    <?php endif; ?>
    
    /* Typography */
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

.<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button:hover {
    <?php if ( $borderStyle !== 'none' && !empty($borderHoverColor) ) : ?>
    border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
    <?php endif; ?>
    
    <?php if ( $useCustomColors ) : ?>
    background-color: <?php echo esc_attr( $buttonHoverBackgroundColor ?: ( $buttonBackgroundColor ? $buttonBackgroundColor . 'DD' : 'rgba(0,0,0,0.05)' ) ); ?>;
    color: <?php echo esc_attr( $buttonHoverTextColor ?: $buttonTextColor ?: '#333333' ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button span,
.<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button svg {
	display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button svg {
    width: <?php echo esc_attr( floor( $buttonSize['desktop'] * 0.45 ) ); ?>px;
    height: <?php echo esc_attr( floor( $buttonSize['desktop'] * 0.45 ) ); ?>px;
    fill: currentColor;
}

<?php if ( $useCustomColors ) : ?>
    /* Custom colors */
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button {
        background-color: <?php echo esc_attr( $buttonBackgroundColor ?: 'transparent' ); ?>;
        color: <?php echo esc_attr( $buttonTextColor ?: '#333333' ); ?>;
        border-color: <?php echo esc_attr( $borderColor ?: '#e0e0e0' ); ?>;
    }
<?php else : ?>
    /* Default styling based on button style */
    <?php if ( $buttonStyle === 'filled' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button {
            background-color: #555555;
            color: #ffffff;
        }
        
        .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button:hover {
            background-color: #444444;
        }
        
        /* Individual social network styling */
        <?php foreach ( $social_networks as $network => $data ) : ?>
            <?php if ( $data['enabled'] ) : ?>
                .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-<?php echo esc_attr( $network ); ?> {
                    background-color: <?php echo esc_attr( $data['color'] ); ?>;
                    color: #ffffff;
                }
                
                .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-<?php echo esc_attr( $network ); ?>:hover {
                    background-color: <?php echo esc_attr( $data['color'] ); ?>DD;
                }
            <?php endif; ?>
        <?php endforeach; ?>
    <?php elseif ( $buttonStyle === 'outlined' ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button {
            background-color: transparent;
            color: #555555;
            border-color: #555555;
        }
        
        .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button:hover {
            background-color: rgba(85, 85, 85, 0.1);
        }
        
        /* Individual social network styling */
        <?php foreach ( $social_networks as $network => $data ) : ?>
            <?php if ( $data['enabled'] ) : ?>
                .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-<?php echo esc_attr( $network ); ?> {
                    color: <?php echo esc_attr( $data['color'] ); ?>;
                    border-color: <?php echo esc_attr( $data['color'] ); ?>;
                }
                
                .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-<?php echo esc_attr( $network ); ?>:hover {
                    background-color: <?php echo esc_attr( $data['color'] ); ?>22;
                }
            <?php endif; ?>
        <?php endforeach; ?>
    <?php else : /* plain style */ ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button {
            background-color: transparent;
            color: #555555;
        }
        
        .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        
        /* Individual social network styling */
        <?php foreach ( $social_networks as $network => $data ) : ?>
            <?php if ( $data['enabled'] ) : ?>
                .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-<?php echo esc_attr( $network ); ?> {
                    color: <?php echo esc_attr( $data['color'] ); ?>;
                }
                
                .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-<?php echo esc_attr( $network ); ?>:hover {
                    background-color: <?php echo esc_attr( $data['color'] ); ?>22;
                }
            <?php endif; ?>
        <?php endforeach; ?>
    <?php endif; ?>
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        justify-content: <?php echo esc_attr( $alignment['tablet'] ); ?>;
        gap: <?php echo esc_attr( $iconSpacing['tablet'] ); ?>px;
        <?php echo digiblocks_get_dimensions( $margin, 'margin', 'tablet' ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button {
        width: <?php echo esc_attr( $buttonSize['tablet'] ); ?>px;
        height: <?php echo esc_attr( $buttonSize['tablet'] ); ?>px;
        <?php if ( $showLabels ) : ?>
        width: auto;
        <?php endif; ?>
        <?php echo digiblocks_get_dimensions( $padding, 'padding', 'tablet' ); ?>
        
        <?php if ($buttonStyle === 'outlined'): ?>
        border-style: <?php echo esc_attr($borderStyle !== 'none' ? $borderStyle : 'solid'); ?>;
        <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ?: 'border-width: 2px;'; ?>
        <?php elseif ($borderStyle !== 'none'): ?>
        <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ); ?>
        <?php endif; ?>
        
        <?php echo digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ); ?>
        
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button svg {
        width: <?php echo esc_attr( floor( $buttonSize['tablet'] * 0.45 ) ); ?>px;
        height: <?php echo esc_attr( floor( $buttonSize['tablet'] * 0.45 ) ); ?>px;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        justify-content: <?php echo esc_attr( $alignment['mobile'] ); ?>;
        gap: <?php echo esc_attr( $iconSpacing['mobile'] ); ?>px;
        <?php echo digiblocks_get_dimensions( $margin, 'margin', 'mobile' ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button {
        width: <?php echo esc_attr( $buttonSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $buttonSize['mobile'] ); ?>px;
        <?php if ( $showLabels ) : ?>
        width: auto;
        <?php endif; ?>
        <?php echo digiblocks_get_dimensions( $padding, 'padding', 'mobile' ); ?>
        
        <?php if ($buttonStyle === 'outlined'): ?>
        border-style: <?php echo esc_attr($borderStyle !== 'none' ? $borderStyle : 'solid'); ?>;
        <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ?: 'border-width: 2px;'; ?>
        <?php elseif ($borderStyle !== 'none'): ?>
        <?php echo digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ); ?>
        <?php endif; ?>
        
        <?php echo digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ); ?>
        
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-share-button svg {
        width: <?php echo esc_attr( floor( $buttonSize['mobile'] * 0.45 ) ); ?>px;
        height: <?php echo esc_attr( floor( $buttonSize['mobile'] * 0.45 ) ); ?>px;
    }
}

<?php if ( $animation !== 'none' && function_exists( 'digiblocks_get_animation_css' ) ) : ?>
    /* Animation */
    <?php echo digiblocks_get_animation_css( $animation, $id ); ?>
<?php endif; ?>

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