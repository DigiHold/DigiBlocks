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
$id                   = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility           = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$icons                = isset( $attrs['icons'] ) ? $attrs['icons'] : array();
$iconWidth = isset( $attrs['iconWidth'] ) ? $attrs['iconWidth'] : array(
    'desktop' => array( 'value' => 1, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$iconHeight = isset( $attrs['iconHeight'] ) ? $attrs['iconHeight'] : array(
    'desktop' => array( 'value' => 1, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$iconSpacing = isset( $attrs['iconSpacing'] ) ? $attrs['iconSpacing'] : array(
    'desktop' => array( 'value' => 0.8, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$iconColor            = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#333333';
$iconHoverColor       = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconBackground       = isset( $attrs['iconBackground'] ) ? $attrs['iconBackground'] : 'transparent';
$iconHoverBackground  = isset( $attrs['iconHoverBackground'] ) ? $attrs['iconHoverBackground'] : '';
$iconBorderStyle      = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'none';
$iconBorderWidth      = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : array(
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
$iconBorderRadius     = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : digiblocks_get_default_dimensions('px');
$iconBorderColor      = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : '#e0e0e0';
$iconHoverBorderColor = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : '';
$labelColor           = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '';
$labelHoverColor      = isset( $attrs['labelHoverColor'] ) ? $attrs['labelHoverColor'] : '';
$labelSpacing = isset( $attrs['labelSpacing'] ) ? $attrs['labelSpacing'] : array(
    'desktop' => array( 'value' => 0.8, 'unit' => 'rem' ),
    'tablet'  => array( 'value' => '', 'unit' => 'rem' ),
    'mobile'  => array( 'value' => '', 'unit' => 'rem' ),
);
$align                = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'flex-start',
    'tablet'  => '',
    'mobile'  => '',
];
$padding              = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
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
/* Social Icons Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
    flex-wrap: wrap;
    gap: <?php echo esc_attr( $iconSpacing['desktop']['value'] ? $iconSpacing['desktop']['value'] . $iconSpacing['desktop']['unit'] : '0.8rem' ); ?>;
    justify-content: <?php echo esc_attr( $align['desktop'] ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    display: flex;
    align-items: center;
    text-decoration: none;
	<?php if ( $labelSpacing && isset( $labelSpacing['desktop'] ) ) : ?>
		gap: <?php echo esc_attr( $labelSpacing['desktop']['value'] ? $labelSpacing['desktop']['value'] . $labelSpacing['desktop']['unit'] : '0.8rem' ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: <?php echo esc_attr( $iconBackground ); ?>;
    color: <?php echo esc_attr( $iconColor ); ?>;
    <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' ) : ?>
		border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php endif; ?>
    <?php if ( $padding && isset( $padding['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon span {
    display: flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon svg {
    width: <?php echo esc_attr( $iconWidth['desktop']['value'] ? $iconWidth['desktop']['value'] . $iconWidth['desktop']['unit'] : '1rem' ); ?>;
    height: <?php echo esc_attr( $iconHeight['desktop']['value'] ? $iconHeight['desktop']['value'] . $iconHeight['desktop']['unit'] : '1rem' ); ?>;
    fill: <?php echo esc_attr( $iconColor ); ?>;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
    <?php if ( $iconHoverBackground ) : ?>
    background-color: <?php echo esc_attr( $iconHoverBackground ); ?>;
    <?php endif; ?>
    <?php if ( $iconHoverBorderColor ) : ?>
    border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon:hover .digiblocks-social-icon-icon svg {
    <?php if ( $iconHoverColor ) : ?>
    fill: <?php echo esc_attr( $iconHoverColor ); ?>;
    <?php endif; ?>
}

<?php if ( $showLabels ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-label {
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
    	font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
    	font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ($textTypography['fontSizeUnit'] ?? 'px') ); ?>;
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
    	line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ($textTypography['lineHeightUnit'] ?? 'em') ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
    	letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ($textTypography['letterSpacingUnit'] ?? 'px') ); ?>;
    <?php endif; ?>
    
    color: <?php echo esc_attr( $labelColor ?: $iconColor ); ?>;
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon:hover .digiblocks-social-icon-label {
    <?php if ( $labelHoverColor || $iconHoverColor ) : ?>
    	color: <?php echo esc_attr( $labelHoverColor ?: $iconHoverColor ); ?>;
    <?php endif; ?>
}

<?php if ( $labelPosition === 'top' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: column-reverse;
}
<?php elseif ( $labelPosition === 'right' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: row;
}
<?php elseif ( $labelPosition === 'bottom' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: column;
}
<?php elseif ( $labelPosition === 'left' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
    flex-direction: row-reverse;
}
<?php endif; ?>
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        gap: <?php echo esc_attr( $iconSpacing['tablet']['value'] ? $iconSpacing['tablet']['value'] . $iconSpacing['tablet']['unit'] : ($iconSpacing['desktop']['value'] . $iconSpacing['desktop']['unit']) ); ?>;
		<?php if ( ! empty( $align['tablet'] ) ) : ?>
		justify-content: <?php echo esc_attr( $align['tablet'] ); ?>;
        <?php endif; ?>
    }

	<?php if ( $labelSpacing && isset( $labelSpacing['tablet'] ) ) : ?>
    	.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
			gap: <?php echo esc_attr( $labelSpacing['tablet']['value'] ? $labelSpacing['tablet']['value'] . $labelSpacing['tablet']['unit'] : ($labelSpacing['desktop']['value'] . $labelSpacing['desktop']['unit']) ); ?>;
		}
    <?php endif; ?>

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon {
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderWidth['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon svg {
        width: <?php echo esc_attr( $iconWidth['tablet']['value'] ? $iconWidth['tablet']['value'] . $iconWidth['tablet']['unit'] : ($iconWidth['desktop']['value'] . $iconWidth['desktop']['unit']) ); ?>;
        height: <?php echo esc_attr( $iconHeight['tablet']['value'] ? $iconHeight['tablet']['value'] . $iconHeight['tablet']['unit'] : ($iconHeight['desktop']['value'] . $iconHeight['desktop']['unit']) ); ?>;
    }
    
    <?php if ( $showLabels && isset( $textTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-label {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ($textTypography['fontSizeUnit'] ?? 'px') ); ?>;
        
        <?php if ( isset( $textTypography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ($textTypography['lineHeightUnit'] ?? 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ($textTypography['letterSpacingUnit'] ?? 'px') ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        gap: <?php echo esc_attr( $iconSpacing['mobile']['value'] ? $iconSpacing['mobile']['value'] . $iconSpacing['mobile']['unit'] : ($iconSpacing['tablet']['value'] ? $iconSpacing['tablet']['value'] . $iconSpacing['tablet']['unit'] : ($iconSpacing['desktop']['value'] . $iconSpacing['desktop']['unit'])) ); ?>;
		<?php if ( ! empty( $align['mobile'] ) ) : ?>
		justify-content: <?php echo esc_attr( $align['mobile'] ); ?>;
        <?php endif; ?>
    }

	<?php if ( $labelSpacing && isset( $labelSpacing['mobile'] ) ) : ?>
    	.<?php echo esc_attr( $id ); ?> .digiblocks-social-icon {
			gap: <?php echo esc_attr( $labelSpacing['mobile']['value'] ? $labelSpacing['mobile']['value'] . $labelSpacing['mobile']['unit'] : ($labelSpacing['tablet']['value'] ? $labelSpacing['tablet']['value'] . $labelSpacing['tablet']['unit'] : ($labelSpacing['desktop']['value'] . $labelSpacing['desktop']['unit'])) ); ?>;
		}
    <?php endif; ?>

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon {
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderWidth['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php if ( $iconBorderStyle && $iconBorderStyle !== 'none' && isset( $iconBorderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php endif; ?>
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-icon svg {
        width: <?php echo esc_attr( $iconWidth['mobile']['value'] ? $iconWidth['mobile']['value'] . $iconWidth['mobile']['unit'] : ($iconWidth['tablet']['value'] ? $iconWidth['tablet']['value'] . $iconWidth['tablet']['unit'] : ($iconWidth['desktop']['value'] . $iconWidth['desktop']['unit'])) ); ?>;
        height: <?php echo esc_attr( $iconHeight['mobile']['value'] ? $iconHeight['mobile']['value'] . $iconHeight['mobile']['unit'] : ($iconHeight['tablet']['value'] ? $iconHeight['tablet']['value'] . $iconHeight['tablet']['unit'] : ($iconHeight['desktop']['value'] . $iconHeight['desktop']['unit'])) ); ?>;
    }
    
    <?php if ( $showLabels && isset( $textTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-social-icon-label {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ($textTypography['fontSizeUnit'] ?? 'px') ); ?>;
        
        <?php if ( isset( $textTypography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ($textTypography['lineHeightUnit'] ?? 'em') ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ($textTypography['letterSpacingUnit'] ?? 'px') ); ?>;
        <?php endif; ?>
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