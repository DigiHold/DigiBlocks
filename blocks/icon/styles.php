<?php
/**
 * Icon Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$iconValue                = isset( $attrs['iconValue'] ) ? $attrs['iconValue'] : null;
$iconColor                = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#1e73be';
$iconBackgroundColor      = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : null;
$iconBorderStyle          = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'default';
$iconBorderWidth          = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : null;
$iconBorderRadius         = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : null;
$iconBorderColor          = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : null;
$iconPadding              = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : null;
$iconMargin               = isset( $attrs['iconMargin'] ) ? $attrs['iconMargin'] : null;
$iconHoverColor           = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconHoverBackgroundColor = isset( $attrs['iconHoverBackgroundColor'] ) ? $attrs['iconHoverBackgroundColor'] : '';
$iconHoverBorderColor     = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : '';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : 'transparent';
$backgroundHoverColor     = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$hoverEffect              = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$linkEnabled              = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;
$rotateIcon               = isset( $attrs['rotateIcon'] ) ? $attrs['rotateIcon'] : 0;
$flipHorizontal           = isset( $attrs['flipHorizontal'] ) ? $attrs['flipHorizontal'] : false;
$flipVertical             = isset( $attrs['flipVertical'] ) ? $attrs['flipVertical'] : false;

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

// Get icon size (with fallback)
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 48,
    'tablet'  => 40,
    'mobile'  => 32,
);

// Create icon transform CSS
$transformProps = array();
if ( $rotateIcon ) {
    $transformProps[] = "rotate({$rotateIcon}deg)";
}
if ( $flipHorizontal ) {
    $transformProps[] = 'scaleX(-1)';
}
if ( $flipVertical ) {
    $transformProps[] = 'scaleY(-1)';
}
$transformCSS = !empty( $transformProps ) ? 'transform: ' . implode( ' ', $transformProps ) . ';' : '';

// Get iconMargin (with fallback)
if ( ! $iconMargin ) {
    $iconMargin = array(
        'desktop' => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 0,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 0,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 0,
            'left'   => 0,
            'unit'   => 'px',
        ),
    );
}

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
        'top'    => 1,
        'right'  => 1,
        'bottom' => 1,
        'left'   => 1,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 1,
        'right'  => 1,
        'bottom' => 1,
        'left'   => 1,
        'unit'   => 'px',
    ),
);

// Get borderRadius (with responsive fallback)
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => array(
        'top'    => 8,
        'right'  => 8,
        'bottom' => 8,
        'left'   => 8,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 8,
        'right'  => 8,
        'bottom' => 8,
        'left'   => 8,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 8,
        'right'  => 8,
        'bottom' => 8,
        'left'   => 8,
        'unit'   => 'px',
    ),
);

// CSS Output
ob_start();
?>
/* Icon Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
    justify-content: <?php echo $align === 'center' ? 'center' : ($align === 'right' ? 'flex-end' : 'flex-start'); ?>;
    align-items: center;
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
        border-width: <?php echo esc_attr( $borderWidth['desktop']['top'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['right'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['bottom'] . $borderWidth['desktop']['unit'] . ' ' . $borderWidth['desktop']['left'] . $borderWidth['desktop']['unit'] ); ?>;
        border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
    <?php else : ?>
        border-style: none;
    <?php endif; ?>

    /* Box Shadow */
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>

    margin: <?php echo esc_attr( $iconMargin['desktop']['top'] . $iconMargin['desktop']['unit'] . ' ' . $iconMargin['desktop']['right'] . $iconMargin['desktop']['unit'] . ' ' . $iconMargin['desktop']['bottom'] . $iconMargin['desktop']['unit'] . ' ' . $iconMargin['desktop']['left'] . $iconMargin['desktop']['unit'] ); ?>;
    transition: all 0.3s ease;
    <?php if ( $linkEnabled ) : ?>
        cursor: pointer;
        text-decoration: none;
    <?php endif; ?>
}

/* Hover effects for the main block */
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $backgroundHoverColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
        
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
        
    <?php if ( 'lift' === $hoverEffect ) : ?>
        transform: translateY(-10px);
    <?php elseif ( 'scale' === $hoverEffect ) : ?>
        transform: scale(1.05);
    <?php elseif ( 'glow' === $hoverEffect ) : ?>
        filter: brightness(1.1);
    <?php endif; ?>
}

<?php if ( 'spin' === $hoverEffect ) : ?>
@keyframes digiblocks-icon-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon span {
    animation: digiblocks-icon-spin 2s linear infinite;
}
<?php elseif ( 'pulse' === $hoverEffect ) : ?>
@keyframes digiblocks-icon-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon span {
    animation: digiblocks-icon-pulse 1.5s ease-in-out infinite;
}
<?php elseif ( 'shake' === $hoverEffect ) : ?>
@keyframes digiblocks-icon-shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(0); }
    75% { transform: translateX(5px); }
    100% { transform: translateX(0); }
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon span {
    animation: digiblocks-icon-shake 0.5s ease-in-out infinite;
}
<?php endif; ?>

<?php if ( $iconValue ) : ?>
    /* Icon styles */
    .<?php echo esc_attr( $id ); ?> .digiblocks-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        <?php if ( $iconBackgroundColor ) : ?>
            background-color: <?php echo esc_attr( $iconBackgroundColor ); ?>;
        <?php endif; ?>
            
        <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && $iconBorderWidth && $iconBorderRadius ) : ?>
            border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
            border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
            border-width: <?php echo esc_attr( $iconBorderWidth['desktop']['top'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['right'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['bottom'] . $iconBorderWidth['desktop']['unit'] . ' ' . $iconBorderWidth['desktop']['left'] . $iconBorderWidth['desktop']['unit'] ); ?>;
            border-radius: <?php echo esc_attr( $iconBorderRadius['desktop']['top'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['right'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['bottom'] . $iconBorderRadius['desktop']['unit'] . ' ' . $iconBorderRadius['desktop']['left'] . $iconBorderRadius['desktop']['unit'] ); ?>;
        <?php endif; ?>
            
        <?php if ( $iconPadding ) : ?>
            padding: <?php echo esc_attr( $iconPadding['desktop']['top'] . $iconPadding['desktop']['unit'] . ' ' . $iconPadding['desktop']['right'] . $iconPadding['desktop']['unit'] . ' ' . $iconPadding['desktop']['bottom'] . $iconPadding['desktop']['unit'] . ' ' . $iconPadding['desktop']['left'] . $iconPadding['desktop']['unit'] ); ?>;
        <?php endif; ?>

        transition: all 0.3s ease;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-icon span {
        display: flex;
        <?php if ( $transformCSS ) : ?>
            <?php echo $transformCSS; ?>
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-icon svg {
        width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
        height: 100%;
        fill: <?php echo esc_attr( $iconColor ); ?>;
        transition: all 0.3s ease;
    }

    /* Icon hover styles */
    .<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon {
        <?php if ( $iconHoverBackgroundColor ) : ?>
            background-color: <?php echo esc_attr( $iconHoverBackgroundColor ); ?>;
        <?php endif; ?>
            
        <?php if ( $iconHoverBorderColor ) : ?>
            border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon svg {
        <?php if ( $iconHoverColor ) : ?>
            fill: <?php echo esc_attr( $iconHoverColor ); ?> !important; 
            color: <?php echo esc_attr( $iconHoverColor ); ?> !important;
        <?php endif; ?>
    }
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( isset( $iconMargin['tablet'] ) ) : ?>
            margin: <?php echo esc_attr( $iconMargin['tablet']['top'] . $iconMargin['tablet']['unit'] . ' ' . $iconMargin['tablet']['right'] . $iconMargin['tablet']['unit'] . ' ' . $iconMargin['tablet']['bottom'] . $iconMargin['tablet']['unit'] . ' ' . $iconMargin['tablet']['left'] . $iconMargin['tablet']['unit'] ); ?>;
        <?php endif; ?>
                
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet']) && isset( $borderRadius['tablet'] ) ) : ?>
            border-width: <?php echo esc_attr( $borderWidth['tablet']['top'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['right'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['bottom'] . $borderWidth['tablet']['unit'] . ' ' . $borderWidth['tablet']['left'] . $borderWidth['tablet']['unit'] ); ?>;
            border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
        <?php endif; ?>
    }

    <?php if ( $iconValue ) : ?>
        <?php if ( isset( $iconSize['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-icon svg {
                width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
            }
        <?php endif; ?>
            
        <?php if ( $iconPadding && isset( $iconPadding['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-icon {
                padding: <?php echo esc_attr( $iconPadding['tablet']['top'] . $iconPadding['tablet']['unit'] . ' ' . $iconPadding['tablet']['right'] . $iconPadding['tablet']['unit'] . ' ' . $iconPadding['tablet']['bottom'] . $iconPadding['tablet']['unit'] . ' ' . $iconPadding['tablet']['left'] . $iconPadding['tablet']['unit'] ); ?>;
            }
        <?php endif; ?>
            
        <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['tablet']) && isset( $iconBorderRadius['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-icon {
                border-width: <?php echo esc_attr( $iconBorderWidth['tablet']['top'] . $iconBorderWidth['tablet']['unit'] . ' ' . $iconBorderWidth['tablet']['right'] . $iconBorderWidth['tablet']['unit'] . ' ' . $iconBorderWidth['tablet']['bottom'] . $iconBorderWidth['tablet']['unit'] . ' ' . $iconBorderWidth['tablet']['left'] . $iconBorderWidth['tablet']['unit'] ); ?>;
                border-radius: <?php echo esc_attr( $iconBorderRadius['tablet']['top'] . $iconBorderRadius['tablet']['unit'] . ' ' . $iconBorderRadius['tablet']['right'] . $iconBorderRadius['tablet']['unit'] . ' ' . $iconBorderRadius['tablet']['bottom'] . $iconBorderRadius['tablet']['unit'] . ' ' . $iconBorderRadius['tablet']['left'] . $iconBorderRadius['tablet']['unit'] ); ?>;
            }
        <?php endif; ?>
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( isset( $iconMargin['mobile'] ) ) : ?>
            margin: <?php echo esc_attr( $iconMargin['mobile']['top'] . $iconMargin['mobile']['unit'] . ' ' . $iconMargin['mobile']['right'] . $iconMargin['mobile']['unit'] . ' ' . $iconMargin['mobile']['bottom'] . $iconMargin['mobile']['unit'] . ' ' . $iconMargin['mobile']['left'] . $iconMargin['mobile']['unit'] ); ?>;
        <?php endif; ?>
                
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile']) && isset( $borderRadius['mobile'] ) ) : ?>
            border-width: <?php echo esc_attr( $borderWidth['mobile']['top'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['right'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['bottom'] . $borderWidth['mobile']['unit'] . ' ' . $borderWidth['mobile']['left'] . $borderWidth['mobile']['unit'] ); ?>;
            border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    <?php if ( $iconValue ) : ?>
        <?php if ( isset( $iconSize['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-icon svg {
                width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
            }
        <?php endif; ?>
            
        <?php if ( $iconPadding && isset( $iconPadding['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-icon {
                padding: <?php echo esc_attr( $iconPadding['mobile']['top'] . $iconPadding['mobile']['unit'] . ' ' . $iconPadding['mobile']['right'] . $iconPadding['mobile']['unit'] . ' ' . $iconPadding['mobile']['bottom'] . $iconPadding['mobile']['unit'] . ' ' . $iconPadding['mobile']['left'] . $iconPadding['mobile']['unit'] ); ?>;
            }
        <?php endif; ?>
            
        <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['mobile']) && isset( $iconBorderRadius['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-icon {
                border-width: <?php echo esc_attr( $iconBorderWidth['mobile']['top'] . $iconBorderWidth['mobile']['unit'] . ' ' . $iconBorderWidth['mobile']['right'] . $iconBorderWidth['mobile']['unit'] . ' ' . $iconBorderWidth['mobile']['bottom'] . $iconBorderWidth['mobile']['unit'] . ' ' . $iconBorderWidth['mobile']['left'] . $iconBorderWidth['mobile']['unit'] ); ?>;
                border-radius: <?php echo esc_attr( $iconBorderRadius['mobile']['top'] . $iconBorderRadius['mobile']['unit'] . ' ' . $iconBorderRadius['mobile']['right'] . $iconBorderRadius['mobile']['unit'] . ' ' . $iconBorderRadius['mobile']['bottom'] . $iconBorderRadius['mobile']['unit'] . ' ' . $iconBorderRadius['mobile']['left'] . $iconBorderRadius['mobile']['unit'] ); ?>;
            }
        <?php endif; ?>
    <?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();