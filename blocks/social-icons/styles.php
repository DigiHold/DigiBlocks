<?php
/**
 * Social Icons Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$icons                = isset( $attrs['icons'] ) ? $attrs['icons'] : array();
$iconSize             = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 24,
    'tablet'  => 22,
    'mobile'  => 20
);
$iconSpacing          = isset( $attrs['iconSpacing'] ) ? $attrs['iconSpacing'] : array(
    'desktop' => 10,
    'tablet'  => 8,
    'mobile'  => 6
);
$iconColor            = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#333333';
$iconHoverColor       = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconBackground       = isset( $attrs['iconBackground'] ) ? $attrs['iconBackground'] : 'transparent';
$iconHoverBackground  = isset( $attrs['iconHoverBackground'] ) ? $attrs['iconHoverBackground'] : '';
$iconBorderStyle      = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'none';
$iconBorderWidth      = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : array(
    'desktop' => array( 'value' => 1, 'unit' => 'px' ),
    'tablet'  => array( 'value' => 1, 'unit' => 'px' ),
    'mobile'  => array( 'value' => 1, 'unit' => 'px' )
);
$iconBorderRadius     = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : array(
    'desktop' => array( 'value' => 0, 'unit' => 'px' ),
    'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
    'mobile'  => array( 'value' => 0, 'unit' => 'px' )
);
$iconBorderColor      = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : '#e0e0e0';
$iconHoverBorderColor = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : '';
$labelColor           = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '';
$labelHoverColor      = isset( $attrs['labelHoverColor'] ) ? $attrs['labelHoverColor'] : '';
$labelSpacing         = isset( $attrs['labelSpacing'] ) ? $attrs['labelSpacing'] : array(
    'desktop' => 5,
    'tablet'  => 5,
    'mobile'  => 5
);
$align                = isset( $attrs['align'] ) ? $attrs['align'] : 'left';
$padding              = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array( 'top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px' ),
    'tablet'  => array( 'top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px' ),
    'mobile'  => array( 'top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px' )
);
$animation            = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$showLabels           = isset( $attrs['showLabels'] ) ? $attrs['showLabels'] : false;
$labelPosition        = isset( $attrs['labelPosition'] ) ? $attrs['labelPosition'] : 'bottom';
$textTypography      = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 14,
        'tablet'  => 13,
        'mobile'  => 12,
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
/* Social Icons Block - <?php echo esc_attr( $block_id ); ?> */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
    display: flex;
    flex-wrap: wrap;
    gap: <?php echo esc_attr( $iconSpacing['desktop'] ); ?>px;
    justify-content: <?php echo $align === 'center' ? 'center' : ($align === 'right' ? 'flex-end' : 'flex-start'); ?>;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon {
    display: flex;
    align-items: center;
    text-decoration: none;
	<?php if ( $labelSpacing && isset( $labelSpacing['desktop'] ) ) : ?>
    	gap: <?php echo esc_attr( $labelSpacing['desktop'] ); ?>px;
    <?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: <?php echo esc_attr( $iconBackground ); ?>;
    color: <?php echo esc_attr( $iconColor ); ?>;
    <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' ) : ?>
		border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
		border-width: <?php echo esc_attr( $iconBorderWidth['desktop']['value'] . $iconBorderWidth['desktop']['unit'] ); ?>;
		border-radius: <?php echo esc_attr( $iconBorderRadius['desktop']['value'] . $iconBorderRadius['desktop']['unit'] ); ?>;
    <?php endif; ?>
    <?php if ( $padding && isset( $padding['desktop'] ) ) : ?>
    	padding: <?php echo esc_attr( $padding['desktop']['top'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['right'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['bottom'] . $padding['desktop']['unit'] . ' ' . $padding['desktop']['left'] . $padding['desktop']['unit'] ); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-icon span {
    display: flex;
    align-items: center;
    justify-content: center;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-icon svg {
    width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    fill: <?php echo esc_attr( $iconColor ); ?>;
    transition: all 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
    <?php if ( $iconHoverBackground ) : ?>
    background-color: <?php echo esc_attr( $iconHoverBackground ); ?>;
    <?php endif; ?>
    <?php if ( $iconHoverBorderColor ) : ?>
    border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
    <?php endif; ?>
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon:hover .digiblocks-social-icon-icon svg {
    <?php if ( $iconHoverColor ) : ?>
    fill: <?php echo esc_attr( $iconHoverColor ); ?>;
    <?php endif; ?>
}

<?php if ( $showLabels ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-label {
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
    	font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
    	font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ($textTypography['fontSizeUnit'] ?: 'px') ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontWeight'] ) ) : ?>
    	font-weight: <?php echo esc_attr( $textTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontStyle'] ) ) : ?>
    	font-style: <?php echo esc_attr( $textTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['textTransform'] ) ) : ?>
    	text-transform: <?php echo esc_attr( $textTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['textDecoration'] ) ) : ?>
    	text-decoration: <?php echo esc_attr( $textTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['lineHeight']['desktop'] ) ) : ?>
    	line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ($textTypography['lineHeightUnit'] ?: 'em') ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
    	letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ($textTypography['letterSpacingUnit'] ?: 'px') ); ?>;
    <?php endif; ?>
    
    color: <?php echo esc_attr( $labelColor ?: $iconColor ); ?>;
    transition: color 0.3s ease;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon:hover .digiblocks-social-icon-label {
    <?php if ( $labelHoverColor || $iconHoverColor ) : ?>
    	color: <?php echo esc_attr( $labelHoverColor ?: $iconHoverColor ); ?>;
    <?php endif; ?>
}

<?php if ( $labelPosition === 'top' ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon {
    flex-direction: column-reverse;
}
<?php elseif ( $labelPosition === 'right' ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon {
    flex-direction: row;
}
<?php elseif ( $labelPosition === 'bottom' ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon {
    flex-direction: column;
}
<?php elseif ( $labelPosition === 'left' ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon {
    flex-direction: row-reverse;
}
<?php endif; ?>
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        gap: <?php echo esc_attr( isset( $iconSpacing['tablet'] ) ? $iconSpacing['tablet'] : $iconSpacing['desktop'] ); ?>px;
    }

	<?php if ( $labelSpacing && isset( $labelSpacing['tablet'] ) ) : ?>
    	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon {
			gap: <?php echo esc_attr( isset( $labelSpacing['tablet'] ) ? $labelSpacing['tablet'] : $labelSpacing['desktop'] ); ?>px;
		}
    <?php endif; ?>

    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-icon {
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderWidth['tablet'] ) ) : ?>
        	border-width: <?php echo esc_attr( $iconBorderWidth['tablet']['value'] . $iconBorderWidth['tablet']['unit'] ); ?>;
        <?php endif; ?>
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderRadius['tablet'] ) ) : ?>
        	border-radius: <?php echo esc_attr( $iconBorderRadius['tablet']['value'] . $iconBorderRadius['tablet']['unit'] ); ?>;
        <?php endif; ?>
        <?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
        	padding: <?php echo esc_attr( $padding['tablet']['top'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['right'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['bottom'] . $padding['tablet']['unit'] . ' ' . $padding['tablet']['left'] . $padding['tablet']['unit'] ); ?>;
        <?php endif; ?>
    }

    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-icon svg {
        width: <?php echo esc_attr( isset( $iconSize['tablet'] ) ? $iconSize['tablet'] : $iconSize['desktop'] ); ?>px;
        height: <?php echo esc_attr( isset( $iconSize['tablet'] ) ? $iconSize['tablet'] : $iconSize['desktop'] ); ?>px;
    }
    
    <?php if ( $showLabels && isset( $textTypography['fontSize']['tablet'] ) ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-label {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ($textTypography['fontSizeUnit'] ?: 'px') ); ?>;
        
        <?php if ( isset( $textTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ($textTypography['lineHeightUnit'] ?: 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ($textTypography['letterSpacingUnit'] ?: 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        gap: <?php echo esc_attr( isset( $iconSpacing['mobile'] ) ? $iconSpacing['mobile'] : (isset( $iconSpacing['tablet'] ) ? $iconSpacing['tablet'] : $iconSpacing['desktop']) ); ?>px;
    }

	<?php if ( $labelSpacing && isset( $labelSpacing['mobile'] ) ) : ?>
    	[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon {
        	gap: <?php echo esc_attr( isset( $labelSpacing['mobile'] ) ? $labelSpacing['mobile'] : (isset( $labelSpacing['tablet'] ) ? $labelSpacing['tablet'] : $labelSpacing['desktop']) ); ?>px;
		}
    <?php endif; ?>

    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-icon {
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderWidth['mobile'] ) ) : ?>
        	border-width: <?php echo esc_attr( $iconBorderWidth['mobile']['value'] . $iconBorderWidth['mobile']['unit'] ); ?>;
        <?php endif; ?>
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderRadius['mobile'] ) ) : ?>
        	border-radius: <?php echo esc_attr( $iconBorderRadius['mobile']['value'] . $iconBorderRadius['mobile']['unit'] ); ?>;
        <?php endif; ?>
        <?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
        	padding: <?php echo esc_attr( $padding['mobile']['top'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['right'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['bottom'] . $padding['mobile']['unit'] . ' ' . $padding['mobile']['left'] . $padding['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }

    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-icon svg {
        width: <?php echo esc_attr( isset( $iconSize['mobile'] ) ? $iconSize['mobile'] : (isset( $iconSize['tablet'] ) ? $iconSize['tablet'] : $iconSize['desktop']) ); ?>px;
        height: <?php echo esc_attr( isset( $iconSize['mobile'] ) ? $iconSize['mobile'] : (isset( $iconSize['tablet'] ) ? $iconSize['tablet'] : $iconSize['desktop']) ); ?>px;
    }
    
    <?php if ( $showLabels && isset( $textTypography['fontSize']['mobile'] ) ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-social-icon-label {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ($textTypography['fontSizeUnit'] ?: 'px') ); ?>;
        
        <?php if ( isset( $textTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ($textTypography['lineHeightUnit'] ?: 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ($textTypography['letterSpacingUnit'] ?: 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

<?php
$digiblocks_css_output = ob_get_clean();