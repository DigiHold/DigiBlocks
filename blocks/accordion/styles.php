<?php
/**
 * Accordion Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes
$id                     = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility             = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$items                  = isset( $attrs['items'] ) ? $attrs['items'] : array();
$titleColor             = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '';
$titleHoverColor        = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$titleActiveColor       = isset( $attrs['titleActiveColor'] ) ? $attrs['titleActiveColor'] : '#1e73be';
$backgroundColor        = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#ffffff';
$backgroundHoverColor   = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$backgroundActiveColor  = isset( $attrs['backgroundActiveColor'] ) ? $attrs['backgroundActiveColor'] : '#f7f7f7';
$contentColor           = isset( $attrs['contentColor'] ) ? $attrs['contentColor'] : '#666666';
$contentHoverColor      = isset( $attrs['contentHoverColor'] ) ? $attrs['contentHoverColor'] : '';
$borderColor            = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor       = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$iconPosition           = isset( $attrs['iconPosition'] ) ? $attrs['iconPosition'] : 'right';
$iconColor              = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '';
$iconHoverColor         = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconActiveColor        = isset( $attrs['iconActiveColor'] ) ? $attrs['iconActiveColor'] : '#1e73be';
$allowMultipleOpen      = isset( $attrs['allowMultipleOpen'] ) ? $attrs['allowMultipleOpen'] : false;
$iconType               = isset( $attrs['iconType'] ) ? $attrs['iconType'] : 'plusMinus';

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

// Get borderStyle (with fallback)
$borderStyle = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';

// Get box shadow
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

// Get iconSize (with fallback)
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 16,
    'tablet'  => '',
    'mobile'  => '',
);

// Get padding (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 20,
        'right'  => 20,
        'bottom' => 20,
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

// Get margin (with fallback)
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

// Get typography settings with default values
$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
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

$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
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

// CSS Output
ob_start();
?>
/* Accordion Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    width: 100%;
}

/* Accordion item */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item {
    overflow: hidden;
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
	<?php if ( 'none' !== $borderStyle ) : ?>
		border-style: <?php echo esc_attr( $borderStyle ); ?>;
		border-color: <?php echo esc_attr( $borderColor ); ?>;
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php endif; ?>
	<?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
	<?php else : ?>
		box-shadow: none;
	<?php endif; ?>
    transition: all 0.3s ease;
}

<?php if ( !empty( $backgroundHoverColor ) ) : ?>
	/* Accordion item hover state */
	.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover {
		background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
	}
<?php endif; ?>

<?php if ( !empty( $borderHoverColor ) ) : ?>
	/* Border hover color */
	.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover {
		border-color: <?php echo esc_attr( $borderHoverColor ); ?>;
	}
<?php endif; ?>

<?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
	/* Box shadow hover color */
	.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover {
		box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
	}
<?php endif; ?>

/* Accordion header */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header {
    position: relative;
    cursor: pointer;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	display: flex;
    align-items: center;
    justify-content: space-between;
	gap: .75rem;
<?php if ( 'left' === $iconPosition ) : ?>
    flex-direction: row-reverse;
    justify-content: flex-end;
<?php endif; ?>
    transition: background-color 0.3s ease;
}

/* Accordion title */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-title {
    margin: 0;
	<?php if ( ! empty( $titleColor ) ) : ?>
    	color: <?php echo esc_attr( $titleColor ); ?>;
	<?php endif; ?>
    flex: 1;
<?php if ( ! empty( $titleTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $titleTypography['fontFamily'] ); ?>;
<?php endif; ?>
    
<?php if ( ! empty( $titleTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $titleTypography['fontSize']['desktop'] . ($titleTypography['fontSizeUnit'] ?? 'px') ); ?>;
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
    line-height: <?php echo esc_attr( $titleTypography['lineHeight']['desktop'] . ($titleTypography['lineHeightUnit'] ?? 'em') ); ?>;
<?php endif; ?>
    
<?php if ( ! empty( $titleTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['desktop'] . ($titleTypography['letterSpacingUnit'] ?? 'px') ); ?>;
<?php endif; ?>
    transition: color 0.3s ease;
}

<?php if ( !empty( $titleHoverColor ) ) : ?>
/* Title hover state */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header:hover .digiblocks-accordion-title {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}
<?php endif; ?>

/* Accordion title active state */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
    color: <?php echo esc_attr( $titleActiveColor ); ?>;
}

/* Accordion icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* SVG icon fill color */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon svg {
    fill: <?php echo esc_attr( $iconColor ); ?>;
    width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    height: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    transition: all 0.3s ease;
}

<?php if ( !empty( $iconHoverColor ) ) : ?>
/* Icon hover state */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
    fill: <?php echo esc_attr( $iconHoverColor ); ?>;
}
<?php endif; ?>

/* Active icon color */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
    fill: <?php echo esc_attr( $iconActiveColor ); ?>;
}

/* Active header background */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
    background-color: <?php echo esc_attr( $backgroundActiveColor ); ?>;
}

/* Accordion content */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
    overflow: hidden;
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
<?php if ( ! empty( $contentColor ) ) : ?>
	color: <?php echo esc_attr( $contentColor ); ?>;
<?php endif; ?>
<?php if ( ! empty( $contentTypography['fontFamily'] ) ) : ?>
    font-family: <?php echo esc_attr( $contentTypography['fontFamily'] ); ?>;
<?php endif; ?>
    
<?php if ( ! empty( $contentTypography['fontSize']['desktop'] ) ) : ?>
    font-size: <?php echo esc_attr( $contentTypography['fontSize']['desktop'] . ($contentTypography['fontSizeUnit'] ?? 'px') ); ?>;
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
    line-height: <?php echo esc_attr( $contentTypography['lineHeight']['desktop'] . ($contentTypography['lineHeightUnit'] ?? 'em') ); ?>;
<?php endif; ?>
    
<?php if ( ! empty( $contentTypography['letterSpacing']['desktop'] ) ) : ?>
    letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['desktop'] . ($contentTypography['letterSpacingUnit'] ?? 'px') ); ?>;
<?php endif; ?>
    transition: color 0.3s ease;
}

<?php if ( !empty( $contentHoverColor ) ) : ?>
/* Content hover color */
.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item:hover .digiblocks-accordion-content {
    color: <?php echo esc_attr( $contentHoverColor ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content p:first-child {
    margin-top: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content p:last-child {
    margin-bottom: 0;
}

/* Tablet Styles */
@media (max-width: 991px) {
<?php if ( $margin && isset($margin['tablet']) ) : ?>
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
<?php endif; ?>
    
<?php if ( $padding && isset($padding['tablet']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
    }
<?php endif; ?>
    
<?php if ( isset($borderWidth['tablet']) && isset($borderRadius['tablet']) && 'none' !== $borderStyle ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item {
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
    }
<?php endif; ?>
    
<?php if ( isset($iconSize['tablet']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon svg {
        width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
        height: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
    }
<?php endif; ?>
    
<?php if ( isset($titleTypography['fontSize']['tablet']) || isset($titleTypography['lineHeight']['tablet']) || isset($titleTypography['letterSpacing']['tablet']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-title {
<?php if ( isset($titleTypography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ($titleTypography['fontSizeUnit'] ?? 'px') ); ?>;
<?php endif; ?>
<?php if ( isset($titleTypography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ($titleTypography['lineHeightUnit'] ?? 'em') ); ?>;
<?php endif; ?>
<?php if ( isset($titleTypography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ($titleTypography['letterSpacingUnit'] ?? 'px') ); ?>;
<?php endif; ?>
    }
<?php endif; ?>
    
<?php if ( isset($contentTypography['fontSize']['tablet']) || isset($contentTypography['lineHeight']['tablet']) || isset($contentTypography['letterSpacing']['tablet']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
<?php if ( isset($contentTypography['fontSize']['tablet']) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ($contentTypography['fontSizeUnit'] ?? 'px') ); ?>;
<?php endif; ?>
<?php if ( isset($contentTypography['lineHeight']['tablet']) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ($contentTypography['lineHeightUnit'] ?? 'em') ); ?>;
<?php endif; ?>
<?php if ( isset($contentTypography['letterSpacing']['tablet']) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ($contentTypography['letterSpacingUnit'] ?? 'px') ); ?>;
<?php endif; ?>
    }
<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
<?php if ( $margin && isset($margin['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
<?php endif; ?>
    
<?php if ( $padding && isset($padding['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-header {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
    }
<?php endif; ?>
    
<?php if ( isset($borderWidth['mobile']) && isset($borderRadius['mobile']) && 'none' !== $borderStyle ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-item {
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
    	<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
    }
<?php endif; ?>
    
<?php if ( isset($iconSize['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-icon svg {
        width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
        height: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
    }
<?php endif; ?>
    
<?php if ( isset($titleTypography['fontSize']['mobile']) || isset($titleTypography['lineHeight']['mobile']) || isset($titleTypography['letterSpacing']['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-title {
<?php if ( isset($titleTypography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ($titleTypography['fontSizeUnit'] ?? 'px') ); ?>;
<?php endif; ?>
<?php if ( isset($titleTypography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ($titleTypography['lineHeightUnit'] ?? 'em') ); ?>;
<?php endif; ?>
<?php if ( isset($titleTypography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ($titleTypography['letterSpacingUnit'] ?? 'px') ); ?>;
<?php endif; ?>
    }
<?php endif; ?>
    
<?php if ( isset($contentTypography['fontSize']['mobile']) || isset($contentTypography['lineHeight']['mobile']) || isset($contentTypography['letterSpacing']['mobile']) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-accordion-content {
<?php if ( isset($contentTypography['fontSize']['mobile']) ) : ?>
        font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ($contentTypography['fontSizeUnit'] ?? 'px') ); ?>;
<?php endif; ?>
<?php if ( isset($contentTypography['lineHeight']['mobile']) ) : ?>
        line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ($contentTypography['lineHeightUnit'] ?? 'em') ); ?>;
<?php endif; ?>
<?php if ( isset($contentTypography['letterSpacing']['mobile']) ) : ?>
        letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ($contentTypography['letterSpacingUnit'] ?? 'px') ); ?>;
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