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
$position                = isset( $attrs['position'] ) ? $attrs['position'] : 'default';
$horizontalOrientation   = isset( $attrs['horizontalOrientation'] ) ? $attrs['horizontalOrientation'] : 'left';
$horizontalOffset        = isset( $attrs['horizontalOffset'] ) ? $attrs['horizontalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$verticalOrientation     = isset( $attrs['verticalOrientation'] ) ? $attrs['verticalOrientation'] : 'top';
$verticalOffset          = isset( $attrs['verticalOffset'] ) ? $attrs['verticalOffset'] : array(
	'desktop' => array( 'value' => 0, 'unit' => 'px' ),
	'tablet'  => array( 'value' => '', 'unit' => 'px' ),
	'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);
$zIndex                  = isset( $attrs['zIndex'] ) ? $attrs['zIndex'] : '';
$transform               = isset( $attrs['transform'] ) ? $attrs['transform'] : array();
$transformHover          = isset( $attrs['transformHover'] ) ? $attrs['transformHover'] : array();
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

// Title Typography
if ( ! $titleTypography ) {
    $titleTypography = array(
        'fontFamily'        => '',
        'fontSize' => array(
		'desktop' => array('value' => 24, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight' => array(
		'desktop' => array('value' => 1.4, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
        'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    );
}

// Price Typography
if ( ! $priceTypography ) {
    $priceTypography = array(
        'fontFamily'        => '',
        'fontSize' => array(
		'desktop' => array('value' => 36, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
        'fontWeight'        => 'bold',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight' => array(
		'desktop' => array('value' => 1.2, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
        'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    );
}

// Text Typography
if ( ! $textTypography ) {
    $textTypography = array(
        'fontFamily'        => '',
        'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight' => array(
		'desktop' => array('value' => 1.6, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
        'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    );
}

// Content Typography
if ( ! $contentTypography ) {
    $contentTypography = array(
        'fontFamily'        => '',
        'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight' => array(
		'desktop' => array('value' => 1.6, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
        'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
    );
}

// Button Typography
if ( ! $buttonTypography ) {
    $buttonTypography = array(
        'fontFamily'        => '',
        'fontSize' => array(
		'desktop' => array('value' => 16, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
        'fontWeight'        => '',
        'fontStyle'         => 'normal',
        'textTransform'     => '',
        'textDecoration'    => '',
        'lineHeight' => array(
		'desktop' => array('value' => 1.5, 'unit' => 'em'),
		'tablet'  => array('value' => '', 'unit' => 'em'),
		'mobile'  => array('value' => '', 'unit' => 'em'),
	),
        'letterSpacing' => array(
		'desktop' => array('value' => 0, 'unit' => 'px'),
		'tablet'  => array('value' => '', 'unit' => 'px'),
		'mobile'  => array('value' => '', 'unit' => 'px'),
	),
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
    <?php if ( $position && 'default' !== $position ) : ?>
        position: <?php echo esc_attr( $position ); ?>;
        <?php
        $h_value = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['value'] ) && '' !== $horizontalOffset['desktop']['value'] ? $horizontalOffset['desktop']['value'] : '0';
        $h_unit = isset( $horizontalOffset['desktop'] ) && is_array( $horizontalOffset['desktop'] ) && isset( $horizontalOffset['desktop']['unit'] ) ? $horizontalOffset['desktop']['unit'] : 'px';
        if ( '' !== $h_value ) :
            if ( 'left' === $horizontalOrientation ) :
        ?>
        left: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php else : ?>
        right: <?php echo esc_attr( $h_value . ( $h_unit !== null ? $h_unit : '' ) ); ?>;
        <?php
            endif;
        endif;
        
        $v_value = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['value'] ) && '' !== $verticalOffset['desktop']['value'] ? $verticalOffset['desktop']['value'] : '0';
        $v_unit = isset( $verticalOffset['desktop'] ) && is_array( $verticalOffset['desktop'] ) && isset( $verticalOffset['desktop']['unit'] ) ? $verticalOffset['desktop']['unit'] : 'px';
        if ( '' !== $v_value ) :
            if ( 'top' === $verticalOrientation ) :
        ?>
        top: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
        <?php else : ?>
        bottom: <?php echo esc_attr( $v_value . ( $v_unit !== null ? $v_unit : '' ) ); ?>;
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
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'desktop' ) ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $transformHover ) && isset( $transformHover['transitionDuration'] ) && '' !== $transformHover['transitionDuration'] && null !== $transformHover['transitionDuration'] ) : ?>
	transition: all <?php echo esc_attr( $transformHover['transitionDuration'] ); ?>ms ease;
	<?php endif; ?>
}

<?php
$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
if ( ! empty( $transform_hover_value ) ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    transform: <?php echo esc_attr( $transform_hover_value ); ?>;
    transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'desktop' ) ); ?>;
}
<?php endif; ?>

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
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
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
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
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
    
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['desktop'] ) && isset( $titleTypography['fontSize']['desktop']['value'] ) && $titleTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop']['value'] . ( $titleTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['desktop'] ) && isset( $titleTypography['lineHeight']['desktop']['value'] ) && $titleTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop']['value'] . ( $titleTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['desktop'] ) && isset( $titleTypography['letterSpacing']['desktop']['value'] ) && $titleTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop']['value'] . ( $titleTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
}

/* Price section */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
    color: <?php echo esc_attr( $tableTextColor ); ?>;
    <?php if ( ! empty( $priceTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $priceTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $priceTypography['fontSize'] ) && is_array( $priceTypography['fontSize'] ) && isset( $priceTypography['fontSize']['desktop'] ) && isset( $priceTypography['fontSize']['desktop']['value'] ) && $priceTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $priceTypography['fontSize']['desktop']['value'] . ( $priceTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $priceTypography['lineHeight'] ) && is_array( $priceTypography['lineHeight'] ) && isset( $priceTypography['lineHeight']['desktop'] ) && isset( $priceTypography['lineHeight']['desktop']['value'] ) && $priceTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $priceTypography['lineHeight']['desktop']['value'] . ( $priceTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $priceTypography['letterSpacing'] ) && is_array( $priceTypography['letterSpacing'] ) && isset( $priceTypography['letterSpacing']['desktop'] ) && isset( $priceTypography['letterSpacing']['desktop']['value'] ) && $priceTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['desktop']['value'] . ( $priceTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) && $textTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop']['value'] . ( $textTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    opacity: 0.8;
}

/* Description */
.<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
    <?php if ( ! empty( $textTypography['fontFamily'] ) ) : ?>
        font-family: <?php echo esc_attr( $textTypography['fontFamily'] ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['desktop'] ) && isset( $textTypography['fontSize']['desktop']['value'] ) && $textTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $textTypography['fontSize']['desktop']['value'] . ( $textTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['desktop'] ) && isset( $textTypography['lineHeight']['desktop']['value'] ) && $textTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $textTypography['lineHeight']['desktop']['value'] . ( $textTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['desktop'] ) && isset( $textTypography['letterSpacing']['desktop']['value'] ) && $textTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['desktop']['value'] . ( $textTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['desktop'] ) && isset( $contentTypography['fontSize']['desktop']['value'] ) && $contentTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop']['value'] . ( $contentTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['desktop'] ) && isset( $contentTypography['lineHeight']['desktop']['value'] ) && $contentTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop']['value'] . ( $contentTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['desktop'] ) && isset( $contentTypography['letterSpacing']['desktop']['value'] ) && $contentTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop']['value'] . ( $contentTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['desktop'] ) && isset( $buttonTypography['fontSize']['desktop']['value'] ) && $buttonTypography['fontSize']['desktop']['value'] !== '' ) : ?>
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['desktop']['value'] . ( $buttonTypography['fontSize']['desktop']['unit'] ?? '' ) ); ?>;
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
    
    <?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['desktop'] ) && isset( $buttonTypography['lineHeight']['desktop']['value'] ) && $buttonTypography['lineHeight']['desktop']['value'] !== '' ) : ?>
        line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['desktop']['value'] . ( $buttonTypography['lineHeight']['desktop']['unit'] ?? '' ) ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['desktop'] ) && isset( $buttonTypography['letterSpacing']['desktop']['value'] ) && $buttonTypography['letterSpacing']['desktop']['value'] !== '' ) : ?>
        letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['desktop']['value'] . ( $buttonTypography['letterSpacing']['desktop']['unit'] ?? '' ) ); ?>;
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
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['value'] ) && '' !== $horizontalOffset['tablet']['value'] ? $horizontalOffset['tablet']['value'] : '';
            $h_unit_tablet = isset( $horizontalOffset['tablet'] ) && is_array( $horizontalOffset['tablet'] ) && isset( $horizontalOffset['tablet']['unit'] ) ? $horizontalOffset['tablet']['unit'] : 'px';
            if ( '' !== $h_value_tablet ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_tablet . $h_unit_tablet ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['value'] ) && '' !== $verticalOffset['tablet']['value'] ? $verticalOffset['tablet']['value'] : '';
            $v_unit_tablet = isset( $verticalOffset['tablet'] ) && is_array( $verticalOffset['tablet'] ) && isset( $verticalOffset['tablet']['unit'] ) ? $verticalOffset['tablet']['unit'] : 'px';
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
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'tablet' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_tablet = digiblocks_get_transform_css( $transformHover, 'tablet' );
	if ( ! empty( $transform_hover_value_tablet ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_tablet ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'tablet' ) ); ?>;
		}
	<?php endif; ?>

    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-tables-container {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-highlighted {
        transform: none !important;
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
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['tablet'] ) && isset( $titleTypography['fontSize']['tablet']['value'] ) && $titleTypography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet']['value'] . ( $titleTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['tablet'] ) && isset( $titleTypography['lineHeight']['tablet']['value'] ) && $titleTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet']['value'] . ( $titleTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['tablet'] ) && isset( $titleTypography['letterSpacing']['tablet']['value'] ) && $titleTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet']['value'] . ( $titleTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Price responsive */
    <?php if ( isset( $priceTypography['fontSize'] ) && is_array( $priceTypography['fontSize'] ) && isset( $priceTypography['fontSize']['tablet'] ) && isset( $priceTypography['fontSize']['tablet']['value'] ) && $priceTypography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
        font-size: <?php echo esc_attr( $priceTypography['fontSize']['tablet']['value'] . ( $priceTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $priceTypography['lineHeight'] ) && is_array( $priceTypography['lineHeight'] ) && isset( $priceTypography['lineHeight']['tablet'] ) && isset( $priceTypography['lineHeight']['tablet']['value'] ) && $priceTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $priceTypography['lineHeight']['tablet']['value'] . ( $priceTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $priceTypography['letterSpacing'] ) && is_array( $priceTypography['letterSpacing'] ) && isset( $priceTypography['letterSpacing']['tablet'] ) && isset( $priceTypography['letterSpacing']['tablet']['value'] ) && $priceTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['tablet']['value'] . ( $priceTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Text responsive */
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['tablet'] ) && isset( $textTypography['fontSize']['tablet']['value'] ) && $textTypography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period,
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet']['value'] . ( $textTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['tablet'] ) && isset( $textTypography['lineHeight']['tablet']['value'] ) && $textTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet']['value'] . ( $textTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['tablet'] ) && isset( $textTypography['letterSpacing']['tablet']['value'] ) && $textTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet']['value'] . ( $textTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Content responsive */
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['tablet'] ) && isset( $contentTypography['fontSize']['tablet']['value'] ) && $contentTypography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet']['value'] . ( $contentTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['tablet'] ) && isset( $contentTypography['lineHeight']['tablet']['value'] ) && $contentTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet']['value'] . ( $contentTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['tablet'] ) && isset( $contentTypography['letterSpacing']['tablet']['value'] ) && $contentTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet']['value'] . ( $contentTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Button responsive */
    <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['tablet'] ) && isset( $buttonTypography['fontSize']['tablet']['value'] ) && $buttonTypography['fontSize']['tablet']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['tablet']['value'] . ( $buttonTypography['fontSize']['tablet']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['tablet'] ) && isset( $buttonTypography['lineHeight']['tablet']['value'] ) && $buttonTypography['lineHeight']['tablet']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['tablet']['value'] . ( $buttonTypography['lineHeight']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['tablet'] ) && isset( $buttonTypography['letterSpacing']['tablet']['value'] ) && $buttonTypography['letterSpacing']['tablet']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['tablet']['value'] . ( $buttonTypography['letterSpacing']['tablet']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
}

@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $position && 'default' !== $position ) : ?>
            <?php
            $h_value_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['value'] ) && '' !== $horizontalOffset['mobile']['value'] ? $horizontalOffset['mobile']['value'] : '';
            $h_unit_mobile = isset( $horizontalOffset['mobile'] ) && is_array( $horizontalOffset['mobile'] ) && isset( $horizontalOffset['mobile']['unit'] ) ? $horizontalOffset['mobile']['unit'] : 'px';
            if ( '' !== $h_value_mobile ) :
                if ( 'left' === $horizontalOrientation ) :
            ?>
            left: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php else : ?>
            right: <?php echo esc_attr( $h_value_mobile . $h_unit_mobile ); ?>;
            <?php
                endif;
            endif;
            
            $v_value_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['value'] ) && '' !== $verticalOffset['mobile']['value'] ? $verticalOffset['mobile']['value'] : '';
            $v_unit_mobile = isset( $verticalOffset['mobile'] ) && is_array( $verticalOffset['mobile'] ) && isset( $verticalOffset['mobile']['unit'] ) ? $verticalOffset['mobile']['unit'] : 'px';
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
    	transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transform, 'mobile' ) ); ?>;
        <?php endif; ?>
    }

	<?php
	$transform_hover_value_mobile = digiblocks_get_transform_css( $transformHover, 'mobile' );
	if ( ! empty( $transform_hover_value_mobile ) ) :
	?>
		.<?php echo esc_attr( $id ); ?>:hover {
			transform: <?php echo esc_attr( $transform_hover_value_mobile ); ?>;
    		transform-origin: <?php echo esc_attr( digiblocks_get_transform_origin( $transformHover, 'mobile' ) ); ?>;
		}
	<?php endif; ?>

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
    <?php if ( isset( $titleTypography['fontSize'] ) && is_array( $titleTypography['fontSize'] ) && isset( $titleTypography['fontSize']['mobile'] ) && isset( $titleTypography['fontSize']['mobile']['value'] ) && $titleTypography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-title {
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile']['value'] . ( $titleTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $titleTypography['lineHeight'] ) && is_array( $titleTypography['lineHeight'] ) && isset( $titleTypography['lineHeight']['mobile'] ) && isset( $titleTypography['lineHeight']['mobile']['value'] ) && $titleTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile']['value'] . ( $titleTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $titleTypography['letterSpacing'] ) && is_array( $titleTypography['letterSpacing'] ) && isset( $titleTypography['letterSpacing']['mobile'] ) && isset( $titleTypography['letterSpacing']['mobile']['value'] ) && $titleTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile']['value'] . ( $titleTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Price responsive */
    <?php if ( isset( $priceTypography['fontSize'] ) && is_array( $priceTypography['fontSize'] ) && isset( $priceTypography['fontSize']['mobile'] ) && isset( $priceTypography['fontSize']['mobile']['value'] ) && $priceTypography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-price {
        font-size: <?php echo esc_attr( $priceTypography['fontSize']['mobile']['value'] . ( $priceTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $priceTypography['lineHeight'] ) && is_array( $priceTypography['lineHeight'] ) && isset( $priceTypography['lineHeight']['mobile'] ) && isset( $priceTypography['lineHeight']['mobile']['value'] ) && $priceTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $priceTypography['lineHeight']['mobile']['value'] . ( $priceTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $priceTypography['letterSpacing'] ) && is_array( $priceTypography['letterSpacing'] ) && isset( $priceTypography['letterSpacing']['mobile'] ) && isset( $priceTypography['letterSpacing']['mobile']['value'] ) && $priceTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $priceTypography['letterSpacing']['mobile']['value'] . ( $priceTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Text responsive */
    <?php if ( isset( $textTypography['fontSize'] ) && is_array( $textTypography['fontSize'] ) && isset( $textTypography['fontSize']['mobile'] ) && isset( $textTypography['fontSize']['mobile']['value'] ) && $textTypography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-period,
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-description {
        font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile']['value'] . ( $textTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $textTypography['lineHeight'] ) && is_array( $textTypography['lineHeight'] ) && isset( $textTypography['lineHeight']['mobile'] ) && isset( $textTypography['lineHeight']['mobile']['value'] ) && $textTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile']['value'] . ( $textTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $textTypography['letterSpacing'] ) && is_array( $textTypography['letterSpacing'] ) && isset( $textTypography['letterSpacing']['mobile'] ) && isset( $textTypography['letterSpacing']['mobile']['value'] ) && $textTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile']['value'] . ( $textTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Content responsive */
    <?php if ( isset( $contentTypography['fontSize'] ) && is_array( $contentTypography['fontSize'] ) && isset( $contentTypography['fontSize']['mobile'] ) && isset( $contentTypography['fontSize']['mobile']['value'] ) && $contentTypography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-feature-item {
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile']['value'] . ( $contentTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $contentTypography['lineHeight'] ) && is_array( $contentTypography['lineHeight'] ) && isset( $contentTypography['lineHeight']['mobile'] ) && isset( $contentTypography['lineHeight']['mobile']['value'] ) && $contentTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile']['value'] . ( $contentTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $contentTypography['letterSpacing'] ) && is_array( $contentTypography['letterSpacing'] ) && isset( $contentTypography['letterSpacing']['mobile'] ) && isset( $contentTypography['letterSpacing']['mobile']['value'] ) && $contentTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile']['value'] . ( $contentTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    /* Button responsive */
    <?php if ( isset( $buttonTypography['fontSize'] ) && is_array( $buttonTypography['fontSize'] ) && isset( $buttonTypography['fontSize']['mobile'] ) && isset( $buttonTypography['fontSize']['mobile']['value'] ) && $buttonTypography['fontSize']['mobile']['value'] !== '' ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-pricing-table-button {
        font-size: <?php echo esc_attr( $buttonTypography['fontSize']['mobile']['value'] . ( $buttonTypography['fontSize']['mobile']['unit'] ?? '' ) ); ?>;
        <?php if ( isset( $buttonTypography['lineHeight'] ) && is_array( $buttonTypography['lineHeight'] ) && isset( $buttonTypography['lineHeight']['mobile'] ) && isset( $buttonTypography['lineHeight']['mobile']['value'] ) && $buttonTypography['lineHeight']['mobile']['value'] !== '' ) : ?>
            line-height: <?php echo esc_attr( $buttonTypography['lineHeight']['mobile']['value'] . ( $buttonTypography['lineHeight']['mobile']['unit'] ?? '' ) ); ?>;
        <?php endif; ?>
        <?php if ( isset( $buttonTypography['letterSpacing'] ) && is_array( $buttonTypography['letterSpacing'] ) && isset( $buttonTypography['letterSpacing']['mobile'] ) && isset( $buttonTypography['letterSpacing']['mobile']['value'] ) && $buttonTypography['letterSpacing']['mobile']['value'] !== '' ) : ?>
            letter-spacing: <?php echo esc_attr( $buttonTypography['letterSpacing']['mobile']['value'] . ( $buttonTypography['letterSpacing']['mobile']['unit'] ?? '' ) ); ?>;
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