<?php
/**
 * Pricing Table Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$tables                   = isset( $attrs['tables'] ) ? $attrs['tables'] : array();
$columns                  = isset( $attrs['columns'] ) ? $attrs['columns'] : 2;
$tableStyle               = isset( $attrs['tableStyle'] ) ? $attrs['tableStyle'] : 'style1';
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$titleTypography          = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : null;
$priceTypography          = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : null;
$textTypography           = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : null;
$contentTypography        = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : null;
$buttonTypography         = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : null;
$padding                  = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                   = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
	'desktop' => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 30,
		'left'   => 0,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 20,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 15,
		'left'   => 0,
		'unit'   => 'px',
	),
);
$borderRadius            = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
	'desktop' => array(
		'top'    => 8,
		'right'  => 8,
		'bottom' => 8,
		'left'   => 8,
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
$borderWidth             = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : array(
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
$borderStyle             = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$borderColor             = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e6e6e6';
$boxShadow               = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : null;
$boxShadowHover         = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : null;
$buttonRadius            = isset( $attrs['buttonRadius'] ) ? $attrs['buttonRadius'] : 4;
$buttonPadding           = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : array(
	'desktop' => array(
		'top'    => 10,
		'right'  => 20,
		'bottom' => 10,
		'left'   => 20,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 8,
		'right'  => 16,
		'bottom' => 8,
		'left'   => 16,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 6,
		'right'  => 12,
		'bottom' => 6,
		'left'   => 12,
		'unit'   => 'px',
	),
);
$buttonBorderStyle      = isset( $attrs['buttonBorderStyle'] ) ? $attrs['buttonBorderStyle'] : 'none';
$buttonBorderWidth      = isset( $attrs['buttonBorderWidth'] ) ? $attrs['buttonBorderWidth'] : array(
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
$buttonBorderColor      = isset( $attrs['buttonBorderColor'] ) ? $attrs['buttonBorderColor'] : '';
$buttonBorderHoverColor = isset( $attrs['buttonBorderHoverColor'] ) ? $attrs['buttonBorderHoverColor'] : '';
$showRibbon              = isset( $attrs['showRibbon'] ) ? $attrs['showRibbon'] : true;
$ribbonStyle             = isset( $attrs['ribbonStyle'] ) ? $attrs['ribbonStyle'] : 'corner';
$ribbonPosition          = isset( $attrs['ribbonPosition'] ) ? $attrs['ribbonPosition'] : 'right';
$tableTextColor         = isset( $attrs['tableTextColor'] ) ? $attrs['tableTextColor'] : '#333333';
$tableBackgroundColor   = isset( $attrs['tableBackgroundColor'] ) ? $attrs['tableBackgroundColor'] : '#ffffff';
$headerBackgroundColor  = isset( $attrs['headerBackgroundColor'] ) ? $attrs['headerBackgroundColor'] : '#f8f9fa';
$buttonTextColor        = isset( $attrs['buttonTextColor'] ) ? $attrs['buttonTextColor'] : '#ffffff';
$buttonBackgroundColor  = isset( $attrs['buttonBackgroundColor'] ) ? $attrs['buttonBackgroundColor'] : '#4a6cf7';
$buttonTextHoverColor  = isset( $attrs['buttonTextHoverColor'] ) ? $attrs['buttonTextHoverColor'] : '#ffffff';
$buttonBackgroundHoverColor    = isset( $attrs['buttonBackgroundHoverColor'] ) ? $attrs['buttonBackgroundHoverColor'] : '#3151e1';
$ribbonTextColor        = isset( $attrs['ribbonTextColor'] ) ? $attrs['ribbonTextColor'] : '#ffffff';
$ribbonBackgroundColor  = isset( $attrs['ribbonBackgroundColor'] ) ? $attrs['ribbonBackgroundColor'] : '#4a6cf7';

// Get typography with default values
// Title Typography
if ( ! $titleTypography ) {
    $titleTypography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 24,
            'tablet'  => 20,
            'mobile'  => 18,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.4,
            'tablet'  => 1.3,
            'mobile'  => 1.2,
        ),
        'lineHeightUnit'    => 'em',
        'letterSpacing'     => array(
            'desktop' => 0,
            'tablet'  => 0,
            'mobile'  => 0,
        ),
        'letterSpacingUnit' => 'px',
    );
}

// Price Typography
if ( ! $priceTypography ) {
    $priceTypography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 36,
            'tablet'  => 30,
            'mobile'  => 26,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => 'bold',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.2,
            'tablet'  => 1.2,
            'mobile'  => 1.2,
        ),
        'lineHeightUnit'    => 'em',
        'letterSpacing'     => array(
            'desktop' => 0,
            'tablet'  => 0,
            'mobile'  => 0,
        ),
        'letterSpacingUnit' => 'px',
    );
}

// Text Typography
if ( ! $textTypography ) {
    $textTypography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 16,
            'tablet'  => 15,
            'mobile'  => 14,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.6,
            'tablet'  => 1.5,
            'mobile'  => 1.4,
        ),
        'lineHeightUnit'    => 'em',
        'letterSpacing'     => array(
            'desktop' => 0,
            'tablet'  => 0,
            'mobile'  => 0,
        ),
        'letterSpacingUnit' => 'px',
    );
}

// Content Typography
if ( ! $contentTypography ) {
    $contentTypography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 16,
            'tablet'  => 15,
            'mobile'  => 14,
        ),
        'fontSizeUnit'      => 'px',
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight'        => array(
            'desktop' => 1.6,
            'tablet'  => 1.5,
            'mobile'  => 1.4,
        ),
        'lineHeightUnit'    => 'em',
        'letterSpacing'     => array(
            'desktop' => 0,
            'tablet'  => 0,
            'mobile'  => 0,
        ),
        'letterSpacingUnit' => 'px',
    );
}

// Button Typography
if ( ! $buttonTypography ) {
    $buttonTypography = array(
        'fontFamily'        => '',
        'fontSize'          => array(
            'desktop' => 16,
            'tablet'  => 15,
            'mobile'  => 14,
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
}

// CSS Output
ob_start();
?>
/* Pricing Table Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
    position: relative;
}

/* Grid container for tables */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-tables-container {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(<?php echo esc_attr( $columns ); ?>, 1fr);
}

/* Individual pricing table */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
	display: flex;
	flex-direction: column;
    background-color: <?php echo esc_attr( $tableBackgroundColor ); ?>;
    color: <?php echo esc_attr( $tableTextColor ); ?>;
	<?php if ( 'none' !== $borderStyle ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
        border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php else : ?>
        border: none;
    <?php endif; ?>
    
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_boxShadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>
    
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    position: relative;
    transition: all 0.3s ease;
}

/* Hover effect */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table:hover {
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_boxShadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
}

/* Highlighted table */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-highlighted {
    z-index: 1;
    <?php if ( 'style2' === $tableStyle ) : ?>
        transform: scale(1.05);
    <?php endif; ?>
    
    <?php if ( 'style3' === $tableStyle ) : ?>
        border-top-width: 10px !important;
    <?php endif; ?>
}

/* Header section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header {
	display: flex;
	flex-direction: column;
	gap: 10px;
    background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
    text-align: center;
    
    <?php if ( 'style1' === $tableStyle ) : ?>
        padding: 20px;
        border-bottom: 1px solid <?php echo esc_attr( $borderColor ); ?>;
    <?php endif; ?>
    
    <?php if ( 'style2' === $tableStyle ) : ?>
        padding: 30px 20px;
        margin: -1px -1px 0 -1px;
        color: #ffffff;
    <?php endif; ?>
    
    <?php if ( 'style3' === $tableStyle ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style4' === $tableStyle ) : ?>
        padding: 40px 20px 20px;
        border-radius: 16px 16px 0 0;
    <?php endif; ?>
    
    <?php if ( 'minimal' === $tableStyle ) : ?>
        padding: 20px;
        border-bottom: 1px solid <?php echo esc_attr( $borderColor ); ?>;
    <?php endif; ?>
}

/* Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-icon {
    display: inline-flex;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-icon svg {
    width: 50px;
    height: 50px;
}
<?php
foreach ( $tables as $index => $table ) {
    $table_icon_color = isset( $table['iconColor'] ) ? $table['iconColor'] : '';
    $table_icon_hover_color = isset( $table['iconHoverColor'] ) ? $table['iconHoverColor'] : '';
    
    // Now use these variables for each table in the CSS output
    ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table:nth-child(<?php echo esc_attr( $index + 1 ); ?>) .digiblocks-pricing-table-icon svg {
        fill: <?php echo ! empty( $table_icon_color ) ? esc_attr( $table_icon_color ) : esc_attr( $tableTextColor ); ?>;
        transition: fill 0.3s ease;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table:nth-child(<?php echo esc_attr( $index + 1 ); ?>):hover .digiblocks-pricing-table-icon svg {
        fill: <?php echo ! empty( $table_icon_hover_color ) ? esc_attr( $table_icon_hover_color ) : ( ! empty( $table_icon_color ) ? esc_attr( $table_icon_color ) : esc_attr( $tableTextColor ) ); ?>;
    }
    <?php
}
?>

/* Special styling for style2 header text */
<?php if ( 'style2' === $tableStyle ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header .digiblocks-pricing-table-title,
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header .digiblocks-pricing-table-price {
    color: #ffffff !important;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-header .digiblocks-pricing-table-description {
    color: rgba(255, 255, 255, 0.8) !important;
}
<?php endif; ?>

/* Title */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
    margin: 0;
    color: <?php echo esc_attr( $tableTextColor ); ?>;
    <?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $titleTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $titleTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $titleTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $titleTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
}

/* Price section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
    color: <?php echo esc_attr( $tableTextColor ); ?>;
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
    
    <?php if ( 'style4' === $tableStyle ) : ?>
        font-size: 3rem;
        line-height: 1;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period {
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    opacity: 0.8;
}

/* Description */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
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

/* Features section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-features {
	display: flex;
	flex-direction: column;
    <?php if ( 'style1' === $tableStyle || 'minimal' === $tableStyle ) : ?>
        padding: 20px;
    <?php endif; ?>
    
    <?php if ( 'style2' === $tableStyle ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style3' === $tableStyle ) : ?>
        padding: 20px;
    <?php endif; ?>
    
    <?php if ( 'style4' === $tableStyle ) : ?>
        padding: 20px 30px;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
    display: flex;
    align-items: center;
    justify-content: <?php echo 'center' === $align ? 'center' : ( 'right' === $align ? 'flex-end' : 'flex-start' ); ?>;
	gap: 10px;
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
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-icon {
    display: inline-flex;
    align-items: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-check {
    color: #28a745;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-cross {
    color: #dc3545;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-disabled {
    opacity: 0.5;
    text-decoration: line-through;
}

/* Footer section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-footer {
	margin-top: auto;
    text-align: center;
    
    <?php if ( 'style1' === $tableStyle || 'minimal' === $tableStyle ) : ?>
        padding: 20px;
        border-top: 1px solid <?php echo esc_attr( $borderColor ); ?>;
    <?php endif; ?>
    
    <?php if ( 'style2' === $tableStyle ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style3' === $tableStyle ) : ?>
        padding: 30px 20px;
    <?php endif; ?>
    
    <?php if ( 'style4' === $tableStyle ) : ?>
        padding: 20px 20px 40px;
    <?php endif; ?>
}

/* Button */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
    background-color: <?php echo esc_attr( $buttonBackgroundColor ); ?>;
    color: <?php echo esc_attr( $buttonTextColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'desktop' ) ); ?>
    border-radius: <?php echo esc_attr( $buttonRadius ); ?>px;
    <?php if ( 'none' !== $buttonBorderStyle ) : ?>
        border-style: <?php echo esc_attr( $buttonBorderStyle ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'desktop' ) ); ?>
        border-color: <?php echo ! empty( $buttonBorderColor ) ? esc_attr( $buttonBorderColor ) : esc_attr( $buttonBackgroundColor ); ?>;
    <?php else : ?>
        border: none;
    <?php endif; ?>
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    transition: all 0.3s ease;
    
    <?php if ( ! empty( $buttonTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $buttonTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $buttonTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $buttonTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $buttonTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $buttonTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $buttonTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $buttonTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $buttonTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $buttonTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $buttonTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $buttonTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $buttonTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( 'style4' === $tableStyle ) : ?>
        padding: 15px 35px;
        border-radius: 50px;
    <?php endif; ?>
    
    <?php if ( 'minimal' === $tableStyle ) : ?>
        background: transparent;
        border: 1px solid <?php echo esc_attr( $buttonBackgroundColor ); ?>;
        padding: 10px 25px;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button:hover {
    background-color: <?php echo esc_attr( $buttonBackgroundHoverColor ); ?>;
    color: <?php echo esc_attr( $buttonTextHoverColor ); ?>;

	<?php if ( ! empty( $buttonBorderHoverColor ) && 'none' !== $buttonBorderStyle ) : ?>
        border-color: <?php echo esc_attr( $buttonBorderHoverColor ); ?>;
    <?php endif; ?>
    
    <?php if ( 'minimal' === $tableStyle ) : ?>
        background: #f8f9fa;
    <?php endif; ?>
}

/* Ribbon */
<?php if ( $showRibbon ) : ?>
    <?php if ( 'corner' === $ribbonStyle ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 0;
            <?php echo 'right' === $ribbonPosition ? 'right' : 'left'; ?>: 0;
            background: <?php echo esc_attr( $ribbonBackgroundColor ); ?>;
            color: <?php echo esc_attr( $ribbonTextColor ); ?>;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            z-index: 2;
            <?php echo 'right' === $ribbonPosition ? 'border-radius: 0 0 0 4px;' : 'border-radius: 0 0 4px 0;'; ?>
        }
    <?php endif; ?>
    
    <?php if ( 'banner' === $ribbonStyle ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-highlighted {
            overflow: hidden;
        }

        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 7px;
            <?php echo 'right' === $ribbonPosition ? 'right: -24px;' : 'left: -24px;'; ?>
            background: <?php echo esc_attr( $ribbonBackgroundColor ); ?>;
            color: <?php echo esc_attr( $ribbonTextColor ); ?>;
            padding: 5px 30px;
            font-size: 12px;
            font-weight: bold;
            transform: <?php echo 'right' === $ribbonPosition ? 'rotate(45deg)' : 'rotate(-45deg)'; ?>;
            z-index: 2;
            transform-origin: center center;
        }
    <?php endif; ?>
    
    <?php if ( 'side' === $ribbonStyle ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 30px;
            <?php echo 'right' === $ribbonPosition ? 'right' : 'left'; ?>: 0;
            background: <?php echo esc_attr( $ribbonBackgroundColor ); ?>;
            color: <?php echo esc_attr( $ribbonTextColor ); ?>;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: bold;
            <?php echo 'right' === $ribbonPosition ? 
                'border-radius: 4px 0 0 4px;' : 
                'border-radius: 0 4px 4px 0;'
            ?>
            z-index: 2;
        }
    <?php endif; ?>
    
    <?php if ( 'flag' === $ribbonStyle ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-ribbon {
            position: absolute;
            top: 15px;
            <?php echo 'right' === $ribbonPosition ? 'right' : 'left'; ?>: 15px;
            background: <?php echo esc_attr( $ribbonBackgroundColor ); ?>;
            color: <?php echo esc_attr( $ribbonTextColor ); ?>;
            padding: 8px 15px;
            font-size: 12px;
            font-weight: bold;
            border-radius: 50px;
            z-index: 2;
        }
    <?php endif; ?>
<?php endif; ?>

/* Animation if defined */
<?php if ( 'none' !== $animation ) : ?>
.<?php echo esc_attr( $id ); ?> {
    animation-name: <?php echo esc_attr( $animation ); ?>;
    animation-duration: 1s;
    animation-fill-mode: both;
}
<?php endif; ?>

/* Responsive styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-tables-container {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-highlighted {
        transform: none !important;
    }
    
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php if ( 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'tablet' ) ); ?>
		<?php if ( 'none' !== $buttonBorderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'tablet' ) ); ?>
		<?php endif; ?>
    }
    
    /* Title responsive */
    <?php if ( ! empty( $titleTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $titleTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Price responsive */
    <?php if ( ! empty( $priceTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
        font-size: <?php echo esc_attr( $priceTypography['fontSize']['tablet'] . ( $priceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $priceTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $priceTypography['lineHeight']['tablet'] . ( $priceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $priceTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['tablet'] . ( $priceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Text responsive */
    <?php if ( ! empty( $textTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period,
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $textTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Content responsive */
    <?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $contentTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Button responsive */
    <?php if ( ! empty( $buttonTypography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $buttonTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-tables-container {
        grid-template-columns: 1fr;
    }
    
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php if ( 'none' !== $borderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
		<?php echo esc_attr( digiblocks_get_dimensions( $buttonPadding, 'padding', 'mobile' ) ); ?>
		<?php if ( 'none' !== $buttonBorderStyle ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $buttonBorderWidth, 'border-width', 'mobile' ) ); ?>
		<?php endif; ?>
    }
    
    /* Title responsive */
    <?php if ( ! empty( $titleTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $titleTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Price responsive */
    <?php if ( ! empty( $priceTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
        font-size: <?php echo esc_attr( $priceTypography['fontSize']['mobile'] . ( $priceTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $priceTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $priceTypography['lineHeight']['mobile'] . ( $priceTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $priceTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['mobile'] . ( $priceTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Text responsive */
    <?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period,
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $textTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $textTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Content responsive */
    <?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $contentTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Button responsive */
    <?php if ( ! empty( $buttonTypography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile'] . ( $buttonTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php if ( ! empty( $buttonTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile'] . ( $buttonTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $buttonTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile'] . ( $buttonTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
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