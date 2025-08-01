<?php
/**
 * Counter Block Styles
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
$iconValue                = isset( $attrs['iconValue'] ) ? $attrs['iconValue'] : null;
$startNumber              = isset( $attrs['startNumber'] ) ? intval( $attrs['startNumber'] ) : 0;
$endNumber                = isset( $attrs['endNumber'] ) ? intval( $attrs['endNumber'] ) : 0;
$counterPrefix            = isset( $attrs['counterPrefix'] ) ? $attrs['counterPrefix'] : '';
$counterSuffix            = isset( $attrs['counterSuffix'] ) ? $attrs['counterSuffix'] : '';
$counterPrefixSpacing     = isset( $attrs['counterPrefixSpacing'] ) ? $attrs['counterPrefixSpacing'] : 5;
$counterSuffixSpacing     = isset( $attrs['counterSuffixSpacing'] ) ? $attrs['counterSuffixSpacing'] : 5;
$title                    = isset( $attrs['title'] ) ? $attrs['title'] : '';
$description              = isset( $attrs['description'] ) ? $attrs['description'] : '';
$counterColor             = isset( $attrs['counterColor'] ) ? $attrs['counterColor'] : '';
$counterHoverColor        = isset( $attrs['counterHoverColor'] ) ? $attrs['counterHoverColor'] : '';
$titleColor               = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '';
$titleHoverColor          = isset( $attrs['titleHoverColor'] ) ? $attrs['titleHoverColor'] : '';
$textColor                = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#666666';
$textHoverColor           = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : 'transparent';
$backgroundHoverColor     = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$iconColor                = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#1e73be';
$iconHoverColor           = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconBackgroundColor      = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : 'transparent';
$iconHoverBackgroundColor = isset( $attrs['iconHoverBackgroundColor'] ) ? $attrs['iconHoverBackgroundColor'] : '';
$iconBorderStyle          = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'default';
$iconBorderWidth          = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : null;
$iconBorderRadius         = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : null;
$iconBorderColor          = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : '#e0e0e0';
$iconHoverBorderColor     = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : '';
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : 'center';
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$animationDuration        = isset( $attrs['animationDuration'] ) ? $attrs['animationDuration'] : 2000;
$animationDelay           = isset( $attrs['animationDelay'] ) ? $attrs['animationDelay'] : 0;
$hoverEffect              = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$displayIcon              = isset( $attrs['displayIcon'] ) ? $attrs['displayIcon'] : false;
$layoutStyle              = isset( $attrs['layoutStyle'] ) ? $attrs['layoutStyle'] : 'stacked';
$verticalSpacing          = isset( $attrs['verticalSpacing'] ) ? $attrs['verticalSpacing'] : 15;
$iconPadding              = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : null;
$iconMargin               = isset( $attrs['iconMargin'] ) ? $attrs['iconMargin'] : null;

// Get padding and margin (with fallback)
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 30,
        'right'  => 30,
        'bottom' => 30,
        'left'   => 30,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 25,
        'right'  => 25,
        'bottom' => 25,
        'left'   => 25,
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

// Get iconSize (with fallback)
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => 32,
    'tablet'  => 28,
    'mobile'  => 24,
);

// Get iconMargin (with fallback)
if ( ! $iconMargin && $displayIcon ) {
    $iconMargin = array(
        'desktop' => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 20,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'tablet'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 15,
            'left'   => 0,
            'unit'   => 'px',
        ),
        'mobile'  => array(
            'top'    => 0,
            'right'  => 0,
            'bottom' => 10,
            'left'   => 0,
            'unit'   => 'px',
        ),
    );
}

// Get borderWidth and borderRadius (with responsive fallback)
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

// Box shadow
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

// Get typography settings with default values
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 48,
        'tablet'  => 42,
        'mobile'  => 36,
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '700',
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

$titleTypography = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => 20,
        'tablet'  => 18,
        'mobile'  => 16,
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '500',
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

$contentTypography = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : array(
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

// CSS Output
ob_start();
?>
/* Counter Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && $borderWidth && isset( $borderWidth['desktop'] ) ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
        <?php if ( $borderRadius && isset( $borderRadius['desktop'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
        <?php endif; ?>
    <?php else : ?>
        border-style: none;
    <?php endif; ?>

    /* Box Shadow */
    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    text-align: <?php echo esc_attr( $align ); ?>;
    transition: all 0.3s ease;
}

/* Hover styles */
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $backgroundHoverColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
    
    <?php if ( isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
    
    <?php if ( 'lift' === $hoverEffect ) : ?>
        transform: translateY(-10px);
    <?php elseif ( 'scale' === $hoverEffect ) : ?>
        transform: scale(1.05);
    <?php elseif ( 'glow' === $hoverEffect ) : ?>
        filter: brightness(1.1);
    <?php endif; ?>
}

/* Layout styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-inner {
    display: flex;
    flex-direction: <?php echo 'inline' === $layoutStyle ? 'row' : 'column'; ?>;
    align-items: <?php echo 'inline' === $layoutStyle ? 'center' : ('left' === $align ? 'flex-start' : ('right' === $align ? 'flex-end' : 'center')); ?>;
    justify-content: <?php echo 'inline' === $layoutStyle ? 'flex-start' : 'center'; ?>;
    gap: <?php echo esc_attr( $verticalSpacing ); ?>px;
    <?php if ( 'centered' === $layoutStyle ) : ?>
        text-align: center;
    <?php endif; ?>
}

<?php if ( $displayIcon && $iconValue && isset( $iconValue['svg'] ) ) : ?>
/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
    <?php if ( $iconMargin && isset( $iconMargin['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'desktop' ) ); ?>
    <?php endif; ?>
    display: inline-flex;
    align-items: center;
    justify-content: center;
    <?php if ( $iconBackgroundColor ) : ?>
        background-color: <?php echo esc_attr( $iconBackgroundColor ); ?>;
    <?php endif; ?>
    <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && $iconBorderWidth && isset( $iconBorderWidth['desktop'] ) && $iconBorderRadius && isset( $iconBorderRadius['desktop'] ) ) : ?>
        border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
        border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php endif; ?>
    <?php if ( $iconPadding && isset( $iconPadding['desktop'] ) ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'desktop' ) ); ?>
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon span {
    display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon svg {
    width: <?php echo esc_attr( $iconSize['desktop'] ); ?>px;
    height: 100%;
    fill: <?php echo esc_attr( $iconColor ); ?>;
    transition: all 0.3s ease;
}

/* Icon hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-icon {
    <?php if ( $iconHoverBackgroundColor ) : ?>
        background-color: <?php echo esc_attr( $iconHoverBackgroundColor ); ?>;
    <?php endif; ?>
    <?php if ( $iconHoverBorderColor ) : ?>
        border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-icon svg {
    <?php if ( $iconHoverColor ) : ?>
        fill: <?php echo esc_attr( $iconHoverColor ); ?> !important;
        color: <?php echo esc_attr( $iconHoverColor ); ?> !important;
    <?php endif; ?>
}
<?php endif; ?>

/* Counter styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-number-wrapper {
    display: flex;
    align-items: center;
    justify-content: <?php echo 'left' === $align ? 'flex-start' : ('right' === $align ? 'flex-end' : 'center'); ?>;
    margin-bottom: 10px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-prefix {
    margin-right: <?php echo esc_attr( $counterPrefixSpacing ); ?>px;
    <?php if ( ! empty( $counterColor ) ) : ?>
    color: <?php echo esc_attr( $counterColor ); ?>;
    <?php endif; ?>
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
    
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-suffix {
    margin-left: <?php echo esc_attr( $counterSuffixSpacing ); ?>px;
    <?php if ( ! empty( $counterColor ) ) : ?>
    color: <?php echo esc_attr( $counterColor ); ?>;
    <?php endif; ?>
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
    
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-counter-number {
    <?php if ( ! empty( $counterColor ) ) : ?>
    color: <?php echo esc_attr( $counterColor ); ?>;
    <?php endif; ?>
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
    
    transition: color 0.3s ease;
}

/* Counter hover styles */
<?php if ( $counterHoverColor ) : ?>
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-number,
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-prefix,
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-suffix {
    color: <?php echo esc_attr( $counterHoverColor ); ?>;
}
<?php endif; ?>

/* Title styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-title {
    <?php if ( ! empty( $titleColor ) ) : ?>
    color: <?php echo esc_attr( $titleColor ); ?>;
    <?php endif; ?>
    margin-bottom: 10px;
    
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
    
    transition: color 0.3s ease;
}

<?php if ( $titleHoverColor ) : ?>
/* Title hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-title {
    color: <?php echo esc_attr( $titleHoverColor ); ?>;
}
<?php endif; ?>

/* Description styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-counter-description {
    color: <?php echo esc_attr( $textColor ); ?>;
    
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
    
    transition: color 0.3s ease;
}

<?php if ( $textHoverColor ) : ?>
/* Description hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-counter-description {
    color: <?php echo esc_attr( $textHoverColor ); ?>;
}
<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $padding && isset( $padding['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet'] ) && isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php endif; ?>
    }
    
    <?php if ( $displayIcon && $iconValue && isset( $iconValue['svg'] ) ) : ?>
        <?php if ( isset( $iconSize['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon svg {
                width: <?php echo esc_attr( $iconSize['tablet'] ); ?>px;
            }
        <?php endif; ?>
        
        <?php if ( $iconMargin && isset( $iconMargin['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'tablet' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconPadding && isset( $iconPadding['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'tablet' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['tablet'] ) && isset( $iconBorderRadius['tablet'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'tablet' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
            }
        <?php endif; ?>
    <?php endif; ?>
    
    <?php if ( ! empty( $typography['fontSize']['tablet'] ) || ! empty( $typography['lineHeight']['tablet'] ) || ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-number,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-prefix,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-suffix {
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
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['fontSize']['tablet'] ) || ! empty( $titleTypography['lineHeight']['tablet'] ) || ! empty( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-title {
            <?php if ( ! empty( $titleTypography['fontSize']['tablet'] ) ) : ?>
                font-size: <?php echo esc_attr( $titleTypography['fontSize']['tablet'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $titleTypography['lineHeight']['tablet'] ) ) : ?>
                line-height: <?php echo esc_attr( $titleTypography['lineHeight']['tablet'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $titleTypography['letterSpacing']['tablet'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['tablet'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) || ! empty( $contentTypography['lineHeight']['tablet'] ) || ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-description {
            <?php if ( ! empty( $contentTypography['fontSize']['tablet'] ) ) : ?>
                font-size: <?php echo esc_attr( $contentTypography['fontSize']['tablet'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $contentTypography['lineHeight']['tablet'] ) ) : ?>
                line-height: <?php echo esc_attr( $contentTypography['lineHeight']['tablet'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $contentTypography['letterSpacing']['tablet'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['tablet'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $padding && isset( $padding['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php endif; ?>
        <?php if ( $margin && isset( $margin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
        <?php endif; ?>
        
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile'] ) && isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php endif; ?>
    }
    
    <?php if ( $displayIcon && $iconValue && isset( $iconValue['svg'] ) ) : ?>
        <?php if ( isset( $iconSize['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon svg {
                width: <?php echo esc_attr( $iconSize['mobile'] ); ?>px;
            }
        <?php endif; ?>
        
        <?php if ( $iconMargin && isset( $iconMargin['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'mobile' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconPadding && isset( $iconPadding['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'mobile' ) ); ?>
            }
        <?php endif; ?>
        
        <?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['mobile'] ) && isset( $iconBorderRadius['mobile'] ) ) : ?>
            .<?php echo esc_attr( $id ); ?> .digiblocks-counter-icon {
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'mobile' ) ); ?>
				<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
            }
        <?php endif; ?>
    <?php endif; ?>
    
	<?php if ( ! empty( $typography['fontSize']['mobile'] ) || ! empty( $typography['lineHeight']['mobile'] ) || ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-number,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-prefix,
		.<?php echo esc_attr( $id ); ?> .digiblocks-counter-suffix {
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
    <?php endif; ?>
    
    <?php if ( ! empty( $titleTypography['fontSize']['mobile'] ) || ! empty( $titleTypography['lineHeight']['mobile'] ) || ! empty( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-title {
            <?php if ( ! empty( $titleTypography['fontSize']['mobile'] ) ) : ?>
                font-size: <?php echo esc_attr( $titleTypography['fontSize']['mobile'] . ( $titleTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $titleTypography['lineHeight']['mobile'] ) ) : ?>
                line-height: <?php echo esc_attr( $titleTypography['lineHeight']['mobile'] . ( $titleTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $titleTypography['letterSpacing']['mobile'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $titleTypography['letterSpacing']['mobile'] . ( $titleTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
    
    <?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) || ! empty( $contentTypography['lineHeight']['mobile'] ) || ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-counter-description {
            <?php if ( ! empty( $contentTypography['fontSize']['mobile'] ) ) : ?>
                font-size: <?php echo esc_attr( $contentTypography['fontSize']['mobile'] . ( $contentTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $contentTypography['lineHeight']['mobile'] ) ) : ?>
                line-height: <?php echo esc_attr( $contentTypography['lineHeight']['mobile'] . ( $contentTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
            <?php endif; ?>
            <?php if ( ! empty( $contentTypography['letterSpacing']['mobile'] ) ) : ?>
                letter-spacing: <?php echo esc_attr( $contentTypography['letterSpacing']['mobile'] . ( $contentTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
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