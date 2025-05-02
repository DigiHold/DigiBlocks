<?php
/**
 * Table Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes.
$hasFooter              = isset( $attrs['hasFooter'] ) ? $attrs['hasFooter'] : false;
$tableBorderColor       = isset( $attrs['tableBorderColor'] ) ? $attrs['tableBorderColor'] : '#e0e0e0';
$tableBorderWidth       = isset( $attrs['tableBorderWidth'] ) ? $attrs['tableBorderWidth'] : 1;
$tableBorderStyle       = isset( $attrs['tableBorderStyle'] ) ? $attrs['tableBorderStyle'] : 'solid';
$tableBorderCollapse    = isset( $attrs['tableBorderCollapse'] ) ? $attrs['tableBorderCollapse'] : 'collapse';
$headerBackgroundColor  = isset( $attrs['headerBackgroundColor'] ) ? $attrs['headerBackgroundColor'] : '#f8f9fa';
$headerTextColor        = isset( $attrs['headerTextColor'] ) ? $attrs['headerTextColor'] : '#333333';
$bodyBackgroundColor    = isset( $attrs['bodyBackgroundColor'] ) ? $attrs['bodyBackgroundColor'] : '#ffffff';
$altRowBackgroundColor  = isset( $attrs['altRowBackgroundColor'] ) ? $attrs['altRowBackgroundColor'] : '';
$bodyTextColor          = isset( $attrs['bodyTextColor'] ) ? $attrs['bodyTextColor'] : '#666666';
$footerBackgroundColor  = isset( $attrs['footerBackgroundColor'] ) ? $attrs['footerBackgroundColor'] : '#f8f9fa';
$footerTextColor        = isset( $attrs['footerTextColor'] ) ? $attrs['footerTextColor'] : '#333333';
$cellAlignment          = isset( $attrs['cellAlignment'] ) ? $attrs['cellAlignment'] : 'left';
$headerAlignment        = isset( $attrs['headerAlignment'] ) ? $attrs['headerAlignment'] : 'left';
$footerAlignment        = isset( $attrs['footerAlignment'] ) ? $attrs['footerAlignment'] : 'left';
$responsiveMode         = isset( $attrs['responsiveMode'] ) ? $attrs['responsiveMode'] : 'stack';
$firstColHeader         = isset( $attrs['firstColHeader'] ) ? $attrs['firstColHeader'] : false;

// Get responsive attributes
$cellPadding = isset( $attrs['cellPadding'] ) ? $attrs['cellPadding'] : array(
	'desktop' => array(
		'top'    => 15,
		'right'  => 15,
		'bottom' => 15,
		'left'   => 15,
		'unit'   => 'px',
	),
	'tablet'  => array(
		'top'    => 12,
		'right'  => 12,
		'bottom' => 12,
		'left'   => 12,
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

// Get border radius
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

// Get margin values
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : array(
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
		'bottom' => 25,
		'left'   => 0,
		'unit'   => 'px',
	),
	'mobile'  => array(
		'top'    => 0,
		'right'  => 0,
		'bottom' => 20,
		'left'   => 0,
		'unit'   => 'px',
	),
);

// Box shadow
$boxShadow = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.1)',
	'horizontal' => 0,
	'vertical'   => 2,
	'blur'       => 10,
	'spread'     => 0,
	'position'   => 'outset',
);

// Typography
$headerTypography = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 18,
		'tablet'  => 16,
		'mobile'  => 15,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
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

$textTypography = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
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

$footerTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => 15,
		'mobile'  => 14,
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
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
/* Table Block - <?php echo esc_attr( $block_id ); ?> */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
    margin: <?php echo esc_attr( $margin['desktop']['top'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['right'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['bottom'] . $margin['desktop']['unit'] . ' ' . $margin['desktop']['left'] . $margin['desktop']['unit'] ); ?>;
    
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>
    
    border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
    
    width: 100%;
    overflow: hidden;
}

/* Set up main table styles */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table {
    width: 100%;
    border-collapse: <?php echo esc_attr( $tableBorderCollapse ); ?>;
    border-spacing: 0;
    color: <?php echo esc_attr( $bodyTextColor ); ?>;
    
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
    
    <?php if ( 'none' !== $tableBorderStyle ) : ?>
        border-style: <?php echo esc_attr( $tableBorderStyle ); ?>;
        border-width: <?php echo esc_attr( $tableBorderWidth ); ?>px;
        border-color: <?php echo esc_attr( $tableBorderColor ); ?>;
    <?php else : ?>
        border: none;
    <?php endif; ?>
    
    border-radius: <?php echo esc_attr( $borderRadius['desktop']['top'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['right'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['bottom'] . $borderRadius['desktop']['unit'] . ' ' . $borderRadius['desktop']['left'] . $borderRadius['desktop']['unit'] ); ?>;
    
    overflow: hidden;
}

/* Table header styles */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table thead th {
    background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
    color: <?php echo esc_attr( $headerTextColor ); ?>;
    
    <?php if ( ! empty( $headerTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $headerTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $headerTypography['fontSize']['desktop'] . ( $headerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $headerTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $headerTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $headerTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $headerTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $headerTypography['lineHeight']['desktop'] . ( $headerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $headerTypography['letterSpacing']['desktop'] . ( $headerTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    padding: <?php echo esc_attr( $cellPadding['desktop']['top'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['right'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['bottom'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['left'] . $cellPadding['desktop']['unit'] ); ?>;
    
    text-align: <?php echo esc_attr( $headerAlignment ); ?>;
    vertical-align: middle;
    border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
}

/* Table body styles */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td {
    background-color: <?php echo esc_attr( $bodyBackgroundColor ); ?>;
    padding: <?php echo esc_attr( $cellPadding['desktop']['top'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['right'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['bottom'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['left'] . $cellPadding['desktop']['unit'] ); ?>;
    text-align: <?php echo esc_attr( $cellAlignment ); ?>;
    vertical-align: middle;
    border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
}

/* First column styles if it's a header */
<?php if ( $firstColHeader ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td:first-child {
    background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
    color: <?php echo esc_attr( $headerTextColor ); ?>;
    
    <?php if ( ! empty( $headerTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $headerTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $headerTypography['fontSize']['desktop'] . ( $headerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $headerTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    font-weight: bold;
    text-align: <?php echo esc_attr( $headerAlignment ); ?>;
}
<?php endif; ?>

/* Alternating row styles if enabled */
<?php if ( $altRowBackgroundColor ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody tr:nth-child(even) td {
    background-color: <?php echo esc_attr( $altRowBackgroundColor ); ?>;
}

<?php if ( $firstColHeader ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody tr:nth-child(even) td:first-child {
    background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
}
<?php endif; ?>
<?php endif; ?>

/* Footer styles if enabled */
<?php if ( $hasFooter ) : ?>
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot td {
    background-color: <?php echo esc_attr( $footerBackgroundColor ); ?>;
    color: <?php echo esc_attr( $footerTextColor ); ?>;
    
    <?php if ( ! empty( $footerTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $footerTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $footerTypography['fontSize']['desktop'] . ( $footerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $footerTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['fontStyle'] ) ) : ?>
        font-style: <?php echo esc_attr( $footerTypography['fontStyle'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['textTransform'] ) ) : ?>
        text-transform: <?php echo esc_attr( $footerTypography['textTransform'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['textDecoration'] ) ) : ?>
        text-decoration: <?php echo esc_attr( $footerTypography['textDecoration'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['lineHeight']['desktop'] ) ) : ?>
        line-height: <?php echo esc_attr( $footerTypography['lineHeight']['desktop'] . ( $footerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $footerTypography['letterSpacing']['desktop'] . ( $footerTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
    <?php endif; ?>
    
    padding: <?php echo esc_attr( $cellPadding['desktop']['top'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['right'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['bottom'] . $cellPadding['desktop']['unit'] . ' ' . $cellPadding['desktop']['left'] . $cellPadding['desktop']['unit'] ); ?>;
    
    text-align: <?php echo esc_attr( $footerAlignment ); ?>;
    vertical-align: middle;
    border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
}
<?php endif; ?>

/* Cell control icons */
[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table .digiblocks-cell-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table .digiblocks-cell-check {
    color: #28a745;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table .digiblocks-cell-cross {
    color: #dc3545;
}

[data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table .digiblocks-cell-stars {
    color: #ffc107;
    display: inline-flex;
}

/* Tablet Styles */
@media (max-width: 991px) {
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        <?php if ( isset( $margin['tablet'] ) ) : ?>
            margin: <?php echo esc_attr( $margin['tablet']['top'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['right'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['bottom'] . $margin['tablet']['unit'] . ' ' . $margin['tablet']['left'] . $margin['tablet']['unit'] ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $borderRadius['tablet'] ) ) : ?>
            border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table {
        <?php if ( isset( $borderRadius['tablet'] ) ) : ?>
            border-radius: <?php echo esc_attr( $borderRadius['tablet']['top'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['right'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['bottom'] . $borderRadius['tablet']['unit'] . ' ' . $borderRadius['tablet']['left'] . $borderRadius['tablet']['unit'] ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table thead th,
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td,
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot td {
        <?php if ( isset( $cellPadding['tablet'] ) ) : ?>
            padding: <?php echo esc_attr( $cellPadding['tablet']['top'] . $cellPadding['tablet']['unit'] . ' ' . $cellPadding['tablet']['right'] . $cellPadding['tablet']['unit'] . ' ' . $cellPadding['tablet']['bottom'] . $cellPadding['tablet']['unit'] . ' ' . $cellPadding['tablet']['left'] . $cellPadding['tablet']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table thead th {
        <?php if ( isset( $headerTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['tablet'] . ( $headerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['tablet'] . ( $headerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    <?php if ( $firstColHeader ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td:first-child {
        <?php if ( isset( $headerTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['tablet'] . ( $headerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['tablet'] . ( $headerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $hasFooter ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot td {
        <?php if ( isset( $footerTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $footerTypography['fontSize']['tablet'] . ( $footerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $footerTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $footerTypography['lineHeight']['tablet'] . ( $footerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        <?php if ( isset( $margin['mobile'] ) ) : ?>
            margin: <?php echo esc_attr( $margin['mobile']['top'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['right'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['bottom'] . $margin['mobile']['unit'] . ' ' . $margin['mobile']['left'] . $margin['mobile']['unit'] ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $borderRadius['mobile'] ) ) : ?>
            border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table {
        <?php if ( isset( $borderRadius['mobile'] ) ) : ?>
            border-radius: <?php echo esc_attr( $borderRadius['mobile']['top'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['right'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['bottom'] . $borderRadius['mobile']['unit'] . ' ' . $borderRadius['mobile']['left'] . $borderRadius['mobile']['unit'] ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table thead th,
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td,
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot td {
        <?php if ( isset( $cellPadding['mobile'] ) ) : ?>
            padding: <?php echo esc_attr( $cellPadding['mobile']['top'] . $cellPadding['mobile']['unit'] . ' ' . $cellPadding['mobile']['right'] . $cellPadding['mobile']['unit'] . ' ' . $cellPadding['mobile']['bottom'] . $cellPadding['mobile']['unit'] . ' ' . $cellPadding['mobile']['left'] . $cellPadding['mobile']['unit'] ); ?>;
        <?php endif; ?>
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table thead th {
        <?php if ( isset( $headerTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['mobile'] . ( $headerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['mobile'] . ( $headerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    <?php if ( $firstColHeader ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td:first-child {
        <?php if ( isset( $headerTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['mobile'] . ( $headerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['mobile'] . ( $headerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $hasFooter ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot td {
        <?php if ( isset( $footerTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $footerTypography['fontSize']['mobile'] . ( $footerTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $footerTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $footerTypography['lineHeight']['mobile'] . ( $footerTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Responsive Modes for Mobile */
    <?php if ( 'stack' === $responsiveMode ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table {
        border-collapse: collapse;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table thead,
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot {
        display: none;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody tr {
        display: block;
        margin-bottom: 1rem;
        border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td {
        display: flex;
        justify-content: space-between;
        text-align: right;
        border-bottom: 1px solid <?php echo esc_attr( $tableBorderColor ); ?>;
        border-top: none;
        border-left: none;
        border-right: none;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td::before {
        content: attr(data-label);
        font-weight: bold;
        margin-right: 1rem;
        text-align: left;
        flex: 1;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td:last-child {
        border-bottom: none;
    }
    
    <?php if ( $firstColHeader ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td:first-child {
        text-align: center;
        background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
        color: <?php echo esc_attr( $headerTextColor ); ?>;
        justify-content: center;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tbody td:first-child::before {
        content: '';
        display: none;
    }
    <?php endif; ?>
    
    <?php if ( $hasFooter ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot tr {
        display: block;
        margin-top: 1rem;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table tfoot td {
        display: block;
        text-align: center;
    }
    <?php endif; ?>
    
    <?php elseif ( 'scroll' === $responsiveMode ) : ?>
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] {
        overflow-x: auto;
    }
    
    [data-custom-id="<?php echo esc_attr( $block_id ); ?>"] .digiblocks-table {
        min-width: 600px; /* Ensure it's wider than most mobile screens */
    }
    <?php endif; ?>
}
<?php
$digiblocks_css_output = ob_get_clean();