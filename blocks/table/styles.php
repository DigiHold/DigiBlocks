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
$id                     = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility             = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => 0, 'unit' => 'px' ),
	'mobile'  => array( 'value' => 0, 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
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

$boxShadowHover = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : array(
	'enable'     => false,
	'color'      => 'rgba(0, 0, 0, 0.2)',
	'horizontal' => 0,
	'vertical'   => 10,
	'blur'       => 25,
	'spread'     => 0,
	'position'   => 'outset',
);

// Typography
$headerTypography = isset( $attrs['headingTypography'] ) ? $attrs['headingTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 18,
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
	'lineHeight'        => array(
		'desktop' => 1.5,
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'px',
);

$textTypography = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '',
	'fontStyle'         => 'normal',
	'textTransform'     => '',
	'textDecoration'    => '',
	'lineHeight'        => array(
		'desktop' => 1.5,
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'px',
);

$footerTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
	'fontFamily'        => '',
	'fontSize'          => array(
		'desktop' => 16,
		'tablet'  => '',
		'mobile'  => '',
	),
	'fontSizeUnit'      => 'px',
	'fontWeight'        => '600',
	'fontStyle'         => 'normal',
	'textTransform'     => 'none',
	'textDecoration'    => 'none',
	'lineHeight'        => array(
		'desktop' => 1.5,
		'tablet'  => '',
		'mobile'  => '',
	),
	'lineHeightUnit'    => 'em',
	'letterSpacing'     => array(
		'desktop' => 0,
		'tablet'  => '',
		'mobile'  => '',
	),
	'letterSpacingUnit' => 'px',
);

// CSS Output
ob_start();
?>
/* Table Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    width: 100%;
    overflow: hidden;
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . $h_unit ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . $v_unit ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . $v_unit ); ?>;
        <?php
            endif;
        endif;
        ?>
    <?php endif; ?>
    <?php if ( '' !== $zIndex && null !== $zIndex ) : ?>
        z-index: <?php echo esc_attr( $zIndex ); ?>;
    <?php endif; ?>
	<?php
    $transform_value = digiblocks_get_transform_css( $transform, 'desktop' );
    if ( ! empty( $transform_value ) ) :
    ?>
    transform: <?php echo esc_attr( $transform_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'desktop' ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $transformHover ) && isset( $transformHover['transitionDuration'] ) && '' !== $transformHover['transitionDuration'] && null !== $transformHover['transitionDuration'] ) : ?>
	transition: all <?php echo esc_attr( $transformHover['transitionDuration'] ); ?>ms ease;
	<?php else : ?>
    transition: all 0.3s ease;
	<?php endif; ?>
}

<?php
$has_box_shadow_hover = isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'];
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( $has_box_shadow_hover || ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $has_box_shadow_hover ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>

    <?php if ( ! empty( $transform_hover_value ) ) : ?>
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

/* Set up main table styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-table {
    width: 100%;
    border-collapse: <?php echo esc_attr( $tableBorderCollapse ); ?>;
    border-spacing: 0;
    color: <?php echo esc_attr( $bodyTextColor ); ?>;
    
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop'] . ( $textTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
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
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop'] . ( $textTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $textTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop'] . ( $textTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( 'none' !== $tableBorderStyle ) : ?>
        border-style: <?php echo esc_attr( $tableBorderStyle ); ?>;
        border-width: <?php echo esc_attr( $tableBorderWidth ); ?>px;
        border-color: <?php echo esc_attr( $tableBorderColor ); ?>;
    <?php else : ?>
        border: none;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
}

/* Table header styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-table thead th {
    background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
    color: <?php echo esc_attr( $headerTextColor ); ?>;
    
    <?php if ( ! empty( $headerTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $headerTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $headerTypography['fontSize']['desktop'] . ( $headerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
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
        line-height: <?php echo esc_attr( $headerTypography['lineHeight']['desktop'] . ( $headerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $headerTypography['letterSpacing']['desktop'] . ( $headerTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $cellPadding, 'padding', 'desktop' ) ); ?>    
    vertical-align: middle;
    border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table thead th .digiblocks-cell-content {
	<?php if ( $headerAlignment === 'center' ) : ?>
        justify-content: center;
    <?php elseif ( $headerAlignment === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: flex-start;
    <?php endif; ?>
}

/* Table body styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td {
    background-color: <?php echo esc_attr( $bodyBackgroundColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $cellPadding, 'padding', 'desktop' ) ); ?> 
    vertical-align: middle;
    border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td .digiblocks-cell-content {
	<?php if ( $cellAlignment === 'center' ) : ?>
        justify-content: center;
    <?php elseif ( $cellAlignment === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: flex-start;
    <?php endif; ?>
}

/* First column styles if it's a header */
<?php if ( $firstColHeader ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td:first-child {
    background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
    color: <?php echo esc_attr( $headerTextColor ); ?>;
    
    <?php if ( ! empty( $headerTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $headerTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $headerTypography['fontSize']['desktop'] . ( $headerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $headerTypography['fontWeight'] ) ) : ?>
        font-weight: <?php echo esc_attr( $headerTypography['fontWeight'] ); ?>;
    <?php endif; ?>
    
    font-weight: bold;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td:first-child .digiblocks-cell-content {
	<?php if ( $headerAlignment === 'center' ) : ?>
        justify-content: center;
    <?php elseif ( $headerAlignment === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: flex-start;
    <?php endif; ?>
}
<?php endif; ?>

/* Alternating row styles if enabled */
<?php if ( $altRowBackgroundColor ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody tr:nth-child(even) td {
    background-color: <?php echo esc_attr( $altRowBackgroundColor ); ?>;
}

<?php if ( $firstColHeader ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody tr:nth-child(even) td:first-child {
    background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
}
<?php endif; ?>
<?php endif; ?>

/* Footer styles if enabled */
<?php if ( $hasFooter ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot td {
    background-color: <?php echo esc_attr( $footerBackgroundColor ); ?>;
    color: <?php echo esc_attr( $footerTextColor ); ?>;
    
    <?php if ( ! empty( $footerTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $footerTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['fontSize']['desktop'] ) ) : ?>
        font-size: <?php echo esc_attr( $footerTypography['fontSize']['desktop'] . ( $footerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
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
        line-height: <?php echo esc_attr( $footerTypography['lineHeight']['desktop'] . ( $footerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( ! empty( $footerTypography['letterSpacing']['desktop'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $footerTypography['letterSpacing']['desktop'] . ( $footerTypography['letterSpacingUnit'] ?? 'px' ) ); ?>;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $cellPadding, 'padding', 'desktop' ) ); ?>     
    text-align: <?php echo esc_attr( $footerAlignment ); ?>;
    vertical-align: middle;
    border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot td .digiblocks-cell-content {
	<?php if ( $footerAlignment === 'center' ) : ?>
        justify-content: center;
    <?php elseif ( $footerAlignment === 'right' ) : ?>
        justify-content: flex-end;
    <?php else : ?>
        justify-content: flex-start;
    <?php endif; ?>
}
<?php endif; ?>

/* Cell control icons */
.<?php echo esc_attr( $id ); ?> .digiblocks-table .digiblocks-cell-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-cell-content {
	display: flex;
	align-items: center;
	gap: 6px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table .digiblocks-cell-check {
    color: #28a745;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table .digiblocks-cell-warning {
    color: #dca236;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table .digiblocks-cell-cross {
    color: #dc3545;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-table .digiblocks-cell-stars {
    color: #ffc107;
    display: inline-flex;
	gap: 5px;
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( isset( $margin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?> 
        <?php endif; ?>
        
        <?php if ( isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?> 
        <?php endif; ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '0';
            $h_unit_tablet = isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_tablet = isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '0';
            $v_unit_tablet = isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
            if ( '' !== $v_value_tablet ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_tablet . $v_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_tablet = digiblocks_get_transform_css( $transform, 'tablet' );
        if ( ! empty( $transform_value_tablet ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_tablet ); ?>;
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'tablet' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'tablet' ); ?>;
		}
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table {
        <?php if ( isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?> 
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( $textTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table thead th,
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td,
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot td {
        <?php if ( isset( $cellPadding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $cellPadding, 'padding', 'tablet' ) ); ?> 
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table thead th {
        <?php if ( isset( $headerTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['tablet'] . ( $headerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['tablet'] . ( $headerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    <?php if ( $firstColHeader ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td:first-child {
        <?php if ( isset( $headerTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['tablet'] . ( $headerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['tablet'] . ( $headerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $hasFooter ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot td {
        <?php if ( isset( $footerTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $footerTypography['fontSize']['tablet'] . ( $footerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $footerTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $footerTypography['lineHeight']['tablet'] . ( $footerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( isset( $margin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?> 
        <?php endif; ?>
        
        <?php if ( isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?> 
        <?php endif; ?>
    	<?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '0';
            $h_unit_mobile = isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '0';
            $v_unit_mobile = isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
            if ( '' !== $v_value_mobile ) :
                if ( 'top' === $verticalOrientation ) :
            ?>
            top: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php else : ?>
            bottom: <?php echo esc_attr( $v_value_mobile . $v_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            ?>
        <?php endif; ?>
		<?php
        $transform_value_mobile = digiblocks_get_transform_css( $transform, 'mobile' );
        if ( ! empty( $transform_value_mobile ) ) :
        ?>
        transform: <?php echo esc_attr( $transform_value_mobile ); ?>;
    	transform-origin: <?php echo digiblocks_get_transform_origin( $transform, 'mobile' ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'mobile' ); ?>;
		}
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table {
        <?php if ( isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?> 
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $textTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table thead th,
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td,
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot td {
        <?php if ( isset( $cellPadding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $cellPadding, 'padding', 'mobile' ) ); ?> 
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table thead th {
        <?php if ( isset( $headerTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['mobile'] . ( $headerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['mobile'] . ( $headerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    
    <?php if ( $firstColHeader ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td:first-child {
        <?php if ( isset( $headerTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $headerTypography['fontSize']['mobile'] . ( $headerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $headerTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $headerTypography['lineHeight']['mobile'] . ( $headerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $hasFooter ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot td {
        <?php if ( isset( $footerTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $footerTypography['fontSize']['mobile'] . ( $footerTypography['fontSizeUnit'] ?? 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( isset( $footerTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $footerTypography['lineHeight']['mobile'] . ( $footerTypography['lineHeightUnit'] ?? 'em' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Responsive Modes for Mobile */
    <?php if ( 'stack' === $responsiveMode ) : ?>
    .<?php echo esc_attr( $id ); ?> {
		border-radius: 0;
		box-shadow: none;
    }

    .<?php echo esc_attr( $id ); ?> .digiblocks-table {
        border-collapse: collapse;
		border: 0;
		border-radius: 0;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table thead,
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot {
        display: none;
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody {
		display: flex;
		flex-direction: column;
		gap: 1rem;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody tr {
        display: block;
        border: <?php echo esc_attr( $tableBorderWidth ); ?>px <?php echo esc_attr( $tableBorderStyle ); ?> <?php echo esc_attr( $tableBorderColor ); ?>;
		<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        	box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
			transition: all 0.3s ease;
		<?php endif; ?>
    }
    
    /* Hover effects */
	<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-table tbody tr:hover {
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	}
	<?php endif; ?>
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td {
        display: flex;
        justify-content: space-between;
        text-align: right;
        border-bottom: 1px solid <?php echo esc_attr( $tableBorderColor ); ?>;
        border-top: none;
        border-left: none;
        border-right: none;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td::before {
        content: attr(data-label);
        font-weight: bold;
        margin-right: 1rem;
        text-align: left;
        flex: 1;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td:last-child {
        border-bottom: none;
    }
    
    <?php if ( $firstColHeader ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td:first-child {
        text-align: center;
        background-color: <?php echo esc_attr( $headerBackgroundColor ); ?>;
        color: <?php echo esc_attr( $headerTextColor ); ?>;
        justify-content: center;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tbody td:first-child::before {
        content: '';
        display: none;
    }
    <?php endif; ?>
    
    <?php if ( $hasFooter ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot tr {
        display: block;
        margin-top: 1rem;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table tfoot td {
        display: block;
        text-align: center;
    }
    <?php endif; ?>
    
    <?php elseif ( 'scroll' === $responsiveMode ) : ?>
    .<?php echo esc_attr( $id ); ?> {
        overflow-x: auto;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-table {
        min-width: 600px; /* Ensure it's wider than most mobile screens */
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