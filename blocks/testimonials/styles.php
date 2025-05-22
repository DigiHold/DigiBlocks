<?php
/**
 * Testimonials Block Styles
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
$columns              = isset( $attrs['columns'] ) ? $attrs['columns'] : array(
    'desktop' => 2,
    'tablet'  => 2,
    'mobile'  => 1,
);
$align                = isset( $attrs['align'] ) ? $attrs['align'] : 'left';
$nameColor            = isset( $attrs['nameColor'] ) ? $attrs['nameColor'] : '#333333';
$nameHoverColor       = isset( $attrs['nameHoverColor'] ) ? $attrs['nameHoverColor'] : '';
$positionColor        = isset( $attrs['positionColor'] ) ? $attrs['positionColor'] : '#666666';
$contentColor         = isset( $attrs['contentColor'] ) ? $attrs['contentColor'] : '#444444';
$backgroundColor      = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$backgroundHoverColor = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$quoteIconColor       = isset( $attrs['quoteIconColor'] ) ? $attrs['quoteIconColor'] : '#e0e0e0';
$ratingColor          = isset( $attrs['ratingColor'] ) ? $attrs['ratingColor'] : '#ffc107';
$borderStyle          = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor          = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$imageSize            = isset( $attrs['imageSize'] ) ? $attrs['imageSize'] : array(
    'desktop' => 64,
    'tablet'  => 56,
    'mobile'  => 48,
);
$quoteIconSize        = isset( $attrs['quoteIconSize'] ) ? $attrs['quoteIconSize'] : array(
    'desktop' => 80,
    'tablet'  => 50,
    'mobile'  => 30,
);
$showRating           = isset( $attrs['showRating'] ) ? $attrs['showRating'] : true;
$showQuoteIcon        = isset( $attrs['showQuoteIcon'] ) ? $attrs['showQuoteIcon'] : true;
$animation            = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';

$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.12)',
    'horizontal' => 0,
    'vertical'   => 5,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
);

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 10,
    'blur'       => 20,
    'spread'     => 0,
    'position'   => 'outset',
);

// Get padding (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 40,
        'right'  => 40,
        'bottom' => 40,
        'left'   => 40,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 30,
        'right'  => 30,
        'bottom' => 30,
        'left'   => 30,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 20,
        'right'  => 20,
        'bottom' => 20,
        'left'   => 20,
        'unit'   => 'px',
    ),
);

// Get margin (with fallback)
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

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

// Get borderRadius (with responsive fallback)
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => array(
        'top'    => 12,
        'right'  => 12,
        'bottom' => 12,
        'left'   => 12,
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

// Get typography settings with default values
$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 16,
        'tablet'  => 15,
        'mobile'  => 14,
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '',
    'fontStyle'         => 'italic',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array(
        'desktop' => 1.7,
        'tablet'  => 1.6,
        'mobile'  => 1.5,
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => 0,
        'tablet'  => 0,
        'mobile'  => 0,
    ),
    'letterSpacingUnit' => 'px',
);

$headingTypography = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 20,
        'tablet'  => 18,
        'mobile'  => 16,
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => array(
        'desktop' => 1.3,
        'tablet'  => 1.3,
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

$textTypography = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
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
        'desktop' => 1.4,
        'tablet'  => 1.4,
        'mobile'  => 1.4,
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => 0.5,
        'tablet'  => 0.5,
        'mobile'  => 0.5,
    ),
    'letterSpacingUnit' => 'px',
);

// CSS Output
ob_start();
?>
/* Testimonials Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    position: relative;
    width: 100%;
}

/* Basic testimonial styling */
.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    
    <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php else : ?>
        border: none;
    <?php endif; ?>

    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>

    position: relative;
    transition: all 0.3s ease;
	text-align: <?php echo esc_attr( $align ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content:hover {
    <?php if ( $backgroundHoverColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
}

<?php if ( $showQuoteIcon ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon {
        position: absolute;
        top: 6px;
        left: 10px;
        color: <?php echo esc_attr( $quoteIconColor ); ?>;
        opacity: 0.3;
        line-height: 1;
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon svg {
		width: <?php echo esc_attr( $quoteIconSize['desktop'] ); ?>px;
		height: <?php echo esc_attr( $quoteIconSize['desktop'] ); ?>px;
	}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-text {
    color: <?php echo esc_attr( $contentColor ); ?>;
    margin: 0;
    
    <?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $contentTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $contentTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $contentTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $contentTypography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( ! empty( $contentTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
	position: relative;
	z-index: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
	justify-content: <?php echo 'center' === $align ? 'center' : 'flex-start'; ?>;
	<?php if ( 'center' === $align ) : ?>
		flex-direction: column;
	<?php elseif ( 'right' === $align ) : ?>
		flex-direction: row-reverse;
	<?php endif; ?>
	position: relative;
	z-index: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-image {
    width: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $imageSize['desktop'] ); ?>px;
    border-radius: 50%;
    object-fit: cover;
    background: <?php echo esc_attr( $quoteIconColor ); ?>;
    flex-shrink: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-name {
    color: <?php echo esc_attr( $nameColor ); ?>;
    margin: 0;
    transition: color 0.3s ease;
    
    <?php if ( ! empty( $headingTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $headingTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $headingTypography['fontSize']['desktop'] . ( $headingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $headingTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $headingTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $headingTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $headingTypography['textDecoration'] ); ?>;
    <?php endif; ?>

    <?php if ( ! empty( $headingTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $headingTypography['lineHeight']['desktop'] . ( $headingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headingTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['desktop'] . ( $headingTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

<?php if ( $nameHoverColor ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content:hover .digiblocks-testimonial-name {
        color: <?php echo esc_attr( $nameHoverColor ); ?>;
    }
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-position {
    color: <?php echo esc_attr( $positionColor ); ?>;
    margin: 5px 0 0 0;
    
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
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
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

<?php if ( $showRating ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-rating {
        display: flex;
		align-items: center;
		gap: 2px;
		justify-content: <?php echo 'center' === $align ? 'center' : ( 'right' === $align ? 'flex-end' : 'flex-start' ); ?>;
		position: relative;
		z-index: 1;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-rating-star {
        font-size: 16px;
    }
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-testimonials-grid {
	display: grid;
	grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
	gap: <?php echo esc_attr( isset( $attrs['itemSpacing'] ) ? $attrs['itemSpacing']['desktop'] : 30 ); ?>px;
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content {
        <?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet']) && isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
    }

    <?php if ( $showQuoteIcon && isset( $quoteIconSize['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon svg {
            width: <?php echo esc_attr( $quoteIconSize['tablet'] ); ?>px;
            height: <?php echo esc_attr( $quoteIconSize['tablet'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( $showRating && isset( $attrs['ratingColor'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-rating-star {
            color: <?php echo esc_attr( $ratingColor ); ?>;
        }
    <?php endif; ?>

    <?php if ( isset( $imageSize['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-image {
            width: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
            height: <?php echo esc_attr( $imageSize['tablet'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( isset( $contentTypography['fontSize']['tablet']) || isset( $contentTypography['lineHeight']['tablet']) || isset( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-text {
            <?php if ( isset( $contentTypography['fontSize']['tablet'] ) ) : ?>
                font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['lineHeight']['tablet'] ) ) : ?>
                line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

    <?php if ( isset( $headingTypography['fontSize']['tablet']) || isset( $headingTypography['lineHeight']['tablet']) || isset( $headingTypography['letterSpacing']['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-name {
            <?php if ( isset( $headingTypography['fontSize']['tablet'] ) ) : ?>
                font-size: <?php echo esc_attr( $headingTypography['fontSize']['tablet'] . ( $headingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['lineHeight']['tablet'] ) ) : ?>
                line-height: <?php echo esc_attr( $headingTypography['lineHeight']['tablet'] . ( $headingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['letterSpacing']['tablet'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['tablet'] . ( $headingTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

    <?php if ( isset( $textTypography['fontSize']['tablet']) || isset( $textTypography['lineHeight']['tablet']) || isset( $textTypography['letterSpacing']['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-position {
            <?php if ( isset( $textTypography['fontSize']['tablet'] ) ) : ?>
                font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['lineHeight']['tablet'] ) ) : ?>
                line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['letterSpacing']['tablet'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

	.<?php echo esc_attr( $id ); ?> .digiblocks-testimonials-grid {
		grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
		gap: <?php echo esc_attr( isset( $attrs['itemSpacing'] ) ? $attrs['itemSpacing']['tablet'] : 25 ); ?>px;
	}
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-content {
        <?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile']) && isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
    }

    <?php if ( $showQuoteIcon && isset( $quoteIconSize['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-quote-icon svg {
            width: <?php echo esc_attr( $quoteIconSize['mobile'] ); ?>px;
            height: <?php echo esc_attr( $quoteIconSize['mobile'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( isset( $imageSize['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-image {
            width: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
            height: <?php echo esc_attr( $imageSize['mobile'] ); ?>px;
        }
    <?php endif; ?>

    <?php if ( isset( $contentTypography['fontSize']['mobile']) || isset( $contentTypography['lineHeight']['mobile']) || isset( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-text {
            <?php if ( isset( $contentTypography['fontSize']['mobile'] ) ) : ?>
                font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['lineHeight']['mobile'] ) ) : ?>
                line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

    <?php if ( isset( $headingTypography['fontSize']['mobile']) || isset( $headingTypography['lineHeight']['mobile']) || isset( $headingTypography['letterSpacing']['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-name {
            <?php if ( isset( $headingTypography['fontSize']['mobile'] ) ) : ?>
                font-size: <?php echo esc_attr( $headingTypography['fontSize']['mobile'] . ( $headingTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['lineHeight']['mobile'] ) ) : ?>
                line-height: <?php echo esc_attr( $headingTypography['lineHeight']['mobile'] . ( $headingTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $headingTypography['letterSpacing']['mobile'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $headingTypography['letterSpacing']['mobile'] . ( $headingTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

    <?php if ( isset( $textTypography['fontSize']['mobile']) || isset( $textTypography['lineHeight']['mobile']) || isset( $textTypography['letterSpacing']['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-testimonial-position {
            <?php if ( isset( $textTypography['fontSize']['mobile'] ) ) : ?>
                font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['lineHeight']['mobile'] ) ) : ?>
                line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( isset( $textTypography['letterSpacing']['mobile'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>

	.<?php echo esc_attr( $id ); ?> .digiblocks-testimonials-grid {
		grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
		gap: <?php echo esc_attr( isset( $attrs['itemSpacing'] ) ? $attrs['itemSpacing']['mobile'] : 20 ); ?>px;
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