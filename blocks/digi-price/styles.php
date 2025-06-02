<?php
/**
 * DigiCommerce Product Price Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-digi-price-' . uniqid();
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$alignment                = isset( $attrs['alignment'] ) ? $attrs['alignment'] : 'left';
$priceColor               = isset( $attrs['priceColor'] ) ? $attrs['priceColor'] : '#17a817';
$salePriceColor           = isset( $attrs['salePriceColor'] ) ? $attrs['salePriceColor'] : '#e74c3c';
$regularPriceColor        = isset( $attrs['regularPriceColor'] ) ? $attrs['regularPriceColor'] : '#999999';
$currencyColor            = isset( $attrs['currencyColor'] ) ? $attrs['currencyColor'] : '';
$fromLabelColor           = isset( $attrs['fromLabelColor'] ) ? $attrs['fromLabelColor'] : '#333333';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$padding                  = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                   = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$priceTypography          = isset( $attrs['priceTypography'] ) ? $attrs['priceTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 32, 'tablet' => 28, 'mobile' => 24],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$regularPriceTypography   = isset( $attrs['regularPriceTypography'] ) ? $attrs['regularPriceTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 18, 'tablet' => 16, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '400',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'line-through',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$fromLabelTypography      = isset( $attrs['fromLabelTypography'] ) ? $attrs['fromLabelTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 20, 'tablet' => 18, 'mobile' => 16],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '700',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$borderRadius             = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : digiblocks_get_default_dimensions('px');

// CSS Output
ob_start();
?>
/* DigiCommerce Product Price Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php if ( $backgroundColor ) : ?>
	background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	<?php endif; ?>
	text-align: <?php echo esc_attr( $alignment ); ?>;
	display: inline-block;
	width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-price-container {
	display: flex;
	align-items: baseline;
	gap: 8px;
	flex-wrap: wrap;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-price-wrapper {
	display: inline-flex;
	align-items: baseline;
	gap: 8px;
	flex-wrap: wrap;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-from-label {
	color: <?php echo esc_attr( $fromLabelColor ); ?>;
	<?php if ( ! empty( $fromLabelTypography['fontFamily'] ) ) : ?>
	font-family: <?php echo esc_attr( $fromLabelTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $fromLabelTypography['fontSize']['desktop'] ) ) : ?>
	font-size: <?php echo esc_attr( $fromLabelTypography['fontSize']['desktop'] . ( $fromLabelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $fromLabelTypography['fontWeight'] ) ) : ?>
	font-weight: <?php echo esc_attr( $fromLabelTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $fromLabelTypography['fontStyle'] ) ) : ?>
	font-style: <?php echo esc_attr( $fromLabelTypography['fontStyle'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $fromLabelTypography['textTransform'] ) ) : ?>
	text-transform: <?php echo esc_attr( $fromLabelTypography['textTransform'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $fromLabelTypography['textDecoration'] ) ) : ?>
	text-decoration: <?php echo esc_attr( $fromLabelTypography['textDecoration'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $fromLabelTypography['lineHeight']['desktop'] ) ) : ?>
	line-height: <?php echo esc_attr( $fromLabelTypography['lineHeight']['desktop'] . ( $fromLabelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $fromLabelTypography['letterSpacing']['desktop'] ) ) : ?>
	letter-spacing: <?php echo esc_attr( $fromLabelTypography['letterSpacing']['desktop'] . ( $fromLabelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-price {
	color: <?php echo esc_attr( $priceColor ); ?>;
	<?php if ( ! empty( $priceTypography['fontFamily'] ) ) : ?>
	font-family: <?php echo esc_attr( $priceTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $priceTypography['fontSize']['desktop'] ) ) : ?>
	font-size: <?php echo esc_attr( $priceTypography['fontSize']['desktop'] . ( $priceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $priceTypography['fontWeight'] ) ) : ?>
	font-weight: <?php echo esc_attr( $priceTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $priceTypography['fontStyle'] ) ) : ?>
	font-style: <?php echo esc_attr( $priceTypography['fontStyle'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $priceTypography['textTransform'] ) ) : ?>
	text-transform: <?php echo esc_attr( $priceTypography['textTransform'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $priceTypography['textDecoration'] ) ) : ?>
	text-decoration: <?php echo esc_attr( $priceTypography['textDecoration'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $priceTypography['lineHeight']['desktop'] ) ) : ?>
	line-height: <?php echo esc_attr( $priceTypography['lineHeight']['desktop'] . ( $priceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $priceTypography['letterSpacing']['desktop'] ) ) : ?>
	letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['desktop'] . ( $priceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	display: inline-flex;
	align-items: baseline;
	gap: 2px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-sale-price {
	color: <?php echo esc_attr( $salePriceColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-regular-price {
	color: <?php echo esc_attr( $regularPriceColor ); ?>;
	<?php if ( ! empty( $regularPriceTypography['fontFamily'] ) ) : ?>
	font-family: <?php echo esc_attr( $regularPriceTypography['fontFamily'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $regularPriceTypography['fontSize']['desktop'] ) ) : ?>
	font-size: <?php echo esc_attr( $regularPriceTypography['fontSize']['desktop'] . ( $regularPriceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $regularPriceTypography['fontWeight'] ) ) : ?>
	font-weight: <?php echo esc_attr( $regularPriceTypography['fontWeight'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $regularPriceTypography['fontStyle'] ) ) : ?>
	font-style: <?php echo esc_attr( $regularPriceTypography['fontStyle'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $regularPriceTypography['textTransform'] ) ) : ?>
	text-transform: <?php echo esc_attr( $regularPriceTypography['textTransform'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $regularPriceTypography['textDecoration'] ) ) : ?>
	text-decoration: <?php echo esc_attr( $regularPriceTypography['textDecoration'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $regularPriceTypography['lineHeight']['desktop'] ) ) : ?>
	line-height: <?php echo esc_attr( $regularPriceTypography['lineHeight']['desktop'] . ( $regularPriceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $regularPriceTypography['letterSpacing']['desktop'] ) ) : ?>
	letter-spacing: <?php echo esc_attr( $regularPriceTypography['letterSpacing']['desktop'] . ( $regularPriceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
	<?php endif; ?>
	display: inline-flex;
	align-items: baseline;
	gap: 2px;
}

<?php if ( ! empty( $currencyColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-currency {
    color: <?php echo esc_attr( $currencyColor ); ?>;
}
<?php endif; ?>

/* Tablet styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-from-label {
		<?php if ( ! empty( $fromLabelTypography['fontSize']['tablet'] ) ) : ?>
		font-size: <?php echo esc_attr( $fromLabelTypography['fontSize']['tablet'] . ( $fromLabelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $fromLabelTypography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $fromLabelTypography['lineHeight']['tablet'] . ( $fromLabelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $fromLabelTypography['letterSpacing']['tablet'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $fromLabelTypography['letterSpacing']['tablet'] . ( $fromLabelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-price {
		<?php if ( ! empty( $priceTypography['fontSize']['tablet'] ) ) : ?>
		font-size: <?php echo esc_attr( $priceTypography['fontSize']['tablet'] . ( $priceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $priceTypography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $priceTypography['lineHeight']['tablet'] . ( $priceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $priceTypography['letterSpacing']['tablet'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['tablet'] . ( $priceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-regular-price {
		<?php if ( ! empty( $regularPriceTypography['fontSize']['tablet'] ) ) : ?>
		font-size: <?php echo esc_attr( $regularPriceTypography['fontSize']['tablet'] . ( $regularPriceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $regularPriceTypography['lineHeight']['tablet'] ) ) : ?>
		line-height: <?php echo esc_attr( $regularPriceTypography['lineHeight']['tablet'] . ( $regularPriceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $regularPriceTypography['letterSpacing']['tablet'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $regularPriceTypography['letterSpacing']['tablet'] . ( $regularPriceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
}

/* Mobile styles */
@media (max-width: 767px) {
	.<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-from-label {
		<?php if ( ! empty( $fromLabelTypography['fontSize']['mobile'] ) ) : ?>
		font-size: <?php echo esc_attr( $fromLabelTypography['fontSize']['mobile'] . ( $fromLabelTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $fromLabelTypography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $fromLabelTypography['lineHeight']['mobile'] . ( $fromLabelTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $fromLabelTypography['letterSpacing']['mobile'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $fromLabelTypography['letterSpacing']['mobile'] . ( $fromLabelTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-price {
		<?php if ( ! empty( $priceTypography['fontSize']['mobile'] ) ) : ?>
		font-size: <?php echo esc_attr( $priceTypography['fontSize']['mobile'] . ( $priceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $priceTypography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $priceTypography['lineHeight']['mobile'] . ( $priceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $priceTypography['letterSpacing']['mobile'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['mobile'] . ( $priceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-regular-price {
		<?php if ( ! empty( $regularPriceTypography['fontSize']['mobile'] ) ) : ?>
		font-size: <?php echo esc_attr( $regularPriceTypography['fontSize']['mobile'] . ( $regularPriceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $regularPriceTypography['lineHeight']['mobile'] ) ) : ?>
		line-height: <?php echo esc_attr( $regularPriceTypography['lineHeight']['mobile'] . ( $regularPriceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
		<?php endif; ?>
		<?php if ( ! empty( $regularPriceTypography['letterSpacing']['mobile'] ) ) : ?>
		letter-spacing: <?php echo esc_attr( $regularPriceTypography['letterSpacing']['mobile'] . ( $regularPriceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
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