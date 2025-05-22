<?php
/**
 * Post Meta Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id               = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-post-meta-' . uniqid();
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
$spacing          = isset( $attrs['spacing'] ) ? $attrs['spacing'] : [
    'desktop' => 15,
    'tablet'  => 15,
    'mobile'  => 15,
];
$layout           = isset( $attrs['layout'] ) ? $attrs['layout'] : 'inline';
$separator        = isset( $attrs['separator'] ) ? $attrs['separator'] : 'none';
$textColor        = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '';
$textHoverColor   = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$labelColor       = isset( $attrs['labelColor'] ) ? $attrs['labelColor'] : '';
$iconColor        = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '';
$typography       = isset( $attrs['typography'] ) ? $attrs['typography'] : [
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
$padding          = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin           = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

// CSS Output
ob_start();
?>
/* Post Meta Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    <?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    
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

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-list {
    display: flex;
    flex-wrap: wrap;
	<?php if ( $align['desktop'] === 'left' ) : ?>
        justify-content: flex-start;
    <?php elseif ( $align['desktop'] === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: center;
    <?php endif; ?>
    <?php if ( $layout === 'block' ) : ?>
    flex-direction: column;
    <?php endif; ?>
    gap: <?php echo esc_attr( $spacing['desktop'] ); ?>px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item {
    display: flex;
    align-items: center;
	gap: 8px;
    <?php if ( $textColor ) : ?>
    color: <?php echo esc_attr( $textColor ); ?>;
    <?php endif; ?>
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item a {
    color: <?php echo esc_attr( $textColor ); ?>;
	text-decoration: none;
}

<?php if ( $textHoverColor ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item a:hover {
    color: <?php echo esc_attr( $textHoverColor ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-icon {
    display: inline-flex;
    <?php if ( $iconColor ) : ?>
    color: <?php echo esc_attr( $iconColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-meta-icon svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
}

<?php if ( $separator === 'dot' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
    content: "•";
    display: inline-block;
	margin-left: <?php echo esc_attr( $spacing['desktop'] / 2 ); ?>px;
    color: <?php echo esc_attr( $textColor ?: 'inherit' ); ?>;
}
body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
	margin-right: <?php echo esc_attr( $spacing['desktop'] / 2 ); ?>px;
}
<?php elseif ( $separator === 'line' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
    content: "|";
    display: inline-block;
	margin-left: <?php echo esc_attr( $spacing['desktop'] / 2 ); ?>px;
    color: <?php echo esc_attr( $textColor ?: 'inherit' ); ?>;
}
body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
	margin-right: <?php echo esc_attr( $spacing['desktop'] / 2 ); ?>px;
}
<?php elseif ( $separator === 'slash' ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
    content: "/";
    display: inline-block;
	margin-left: <?php echo esc_attr( $spacing['desktop'] / 2 ); ?>px;
    color: <?php echo esc_attr( $textColor ?: 'inherit' ); ?>;
}
body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
	margin-right: <?php echo esc_attr( $spacing['desktop'] / 2 ); ?>px;
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-list {
		<?php if ( $align['tablet'] === 'left' ) : ?>
			justify-content: flex-start;
		<?php elseif ( $align['tablet'] === 'right' ) : ?>
			justify-content: flex-end;
		<?php else : ?>
			justify-content: center;
		<?php endif; ?>
        gap: <?php echo esc_attr( $spacing['tablet'] ); ?>px;
    }

	<?php if ( $separator === 'dot' ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-left: <?php echo esc_attr( $spacing['tablet'] / 2 ); ?>px;
	}
	body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-right: <?php echo esc_attr( $spacing['tablet'] / 2 ); ?>px;
	}
	<?php elseif ( $separator === 'line' ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-left: <?php echo esc_attr( $spacing['tablet'] / 2 ); ?>px;
	}
	body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-right: <?php echo esc_attr( $spacing['tablet'] / 2 ); ?>px;
	}
	<?php elseif ( $separator === 'slash' ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-left: <?php echo esc_attr( $spacing['tablet'] / 2 ); ?>px;
	}
	body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-right: <?php echo esc_attr( $spacing['tablet'] / 2 ); ?>px;
	}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-meta-list {
		<?php if ( $align['mobile'] === 'left' ) : ?>
			justify-content: flex-start;
		<?php elseif ( $align['mobile'] === 'right' ) : ?>
			justify-content: flex-end;
		<?php else : ?>
			justify-content: center;
		<?php endif; ?>
        gap: <?php echo esc_attr( $spacing['mobile'] ); ?>px;
    }

	<?php if ( $separator === 'dot' ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-left: <?php echo esc_attr( $spacing['mobile'] / 2 ); ?>px;
	}
	body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-right: <?php echo esc_attr( $spacing['mobile'] / 2 ); ?>px;
	}
	<?php elseif ( $separator === 'line' ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-left: <?php echo esc_attr( $spacing['mobile'] / 2 ); ?>px;
	}
	body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-right: <?php echo esc_attr( $spacing['mobile'] / 2 ); ?>px;
	}
	<?php elseif ( $separator === 'slash' ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-left: <?php echo esc_attr( $spacing['mobile'] / 2 ); ?>px;
	}
	body.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-meta-item:not(:last-child)::after {
		margin-right: <?php echo esc_attr( $spacing['mobile'] / 2 ); ?>px;
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