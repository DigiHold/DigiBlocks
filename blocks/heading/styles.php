<?php
/**
 * Heading Block Styles
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
$content                = isset( $attrs['content'] ) ? $attrs['content'] : '';
$level                  = isset( $attrs['level'] ) ? $attrs['level'] : 2;
$textColor              = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '';
$textHoverColor         = isset( $attrs['textHoverColor'] ) ? $attrs['textHoverColor'] : '';
$backgroundColor        = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$backgroundHoverColor   = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$align                  = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'left',
    'tablet'  => 'left',
    'mobile'  => 'left',
];
$animation              = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$highlightText          = isset( $attrs['highlightText'] ) ? $attrs['highlightText'] : '';
$highlightColor         = isset( $attrs['highlightColor'] ) ? $attrs['highlightColor'] : '#ffde59';
$highlightType          = isset( $attrs['highlightType'] ) ? $attrs['highlightType'] : 'background';
$displaySeparator       = isset( $attrs['displaySeparator'] ) ? $attrs['displaySeparator'] : false;
$separatorColor         = isset( $attrs['separatorColor'] ) ? $attrs['separatorColor'] : '#1e73be';
$separatorSecondaryColor = isset( $attrs['separatorSecondaryColor'] ) ? $attrs['separatorSecondaryColor'] : '#e0e0e0';
$separatorPosition      = isset( $attrs['separatorPosition'] ) ? $attrs['separatorPosition'] : 'bottom';
$separatorStyle         = isset( $attrs['separatorStyle'] ) ? $attrs['separatorStyle'] : 'line-solid';
$linkEnabled            = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;
$shadowEnabled          = isset( $attrs['shadowEnabled'] ) ? $attrs['shadowEnabled'] : false;

// Get separatorWidth (with fallback)
$separatorWidth = isset( $attrs['separatorWidth'] ) ? $attrs['separatorWidth'] : array(
    'desktop' => 50,
    'tablet'  => 40,
    'mobile'  => 30,
);

// Get separatorHeight (with fallback)
$separatorHeight = isset( $attrs['separatorHeight'] ) ? $attrs['separatorHeight'] : array(
    'desktop' => 3,
    'tablet'  => 2,
    'mobile'  => 2,
);

// Get separatorSpacing (with fallback)
$separatorSpacing = isset( $attrs['separatorSpacing'] ) ? $attrs['separatorSpacing'] : array(
    'desktop' => 10,
    'tablet'  => 8,
    'mobile'  => 6,
);

// Get separatorBorderRadius (with fallback)
$separatorBorderRadius = isset( $attrs['separatorBorderRadius'] ) ? $attrs['separatorBorderRadius'] : digiblocks_get_default_dimensions('px');

// Get textShadow settings
$textShadow = isset( $attrs['textShadow'] ) ? $attrs['textShadow'] : array(
    'horizontal' => 2,
    'vertical'   => 2,
    'blur'       => 3,
    'color'      => 'rgba(0,0,0,0.3)',
);

// Spacing
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');

// Get typography settings with default values
$typography = isset( $attrs['typography'] ) ? $attrs['typography'] : array(
    'fontFamily'        => '',
    'fontSize'          => array(
        'desktop' => '',
        'tablet'  => '',
        'mobile'  => '',
    ),
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => 'none',
    'textDecoration'    => 'none',
    'lineHeight'        => array(
        'desktop' => '',
        'tablet'  => '',
        'mobile'  => '',
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => '',
        'tablet'  => '',
        'mobile'  => '',
    ),
    'letterSpacingUnit' => 'px',
);

// CSS Output
ob_start();
?>
/* Heading Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: <?php echo esc_attr( $align['desktop'] ); ?>;
	<?php if ( $backgroundColor ) : ?>
        background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php endif; ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
	color: <?php echo esc_attr( $textColor ); ?>;
	<?php if ( $shadowEnabled && $textShadow ) : ?>
        text-shadow: <?php echo esc_attr( $textShadow['horizontal'] . 'px ' . $textShadow['vertical'] . 'px ' . $textShadow['blur'] . 'px ' . $textShadow['color'] ); ?>;
    <?php endif; ?>
    margin: 0;
	transition: all 0.3s ease;
}

/* Typography styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
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

<?php if ( $textHoverColor || $backgroundHoverColor ) : ?>
	/* Hover effects */
	<?php if ( $backgroundHoverColor ) : ?>
		.<?php echo esc_attr( $id ); ?>:hover {
			background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
		}
	<?php endif; ?>

	<?php if ( $textHoverColor ) : ?>
		.<?php echo esc_attr( $id ); ?>:hover .digiblocks-heading-text {
			color: <?php echo esc_attr( $textHoverColor ); ?>;
		}
	<?php endif; ?>
<?php endif; ?>

<?php if ( $linkEnabled ) : ?>
/* Link styles */
.<?php echo esc_attr( $id ); ?> {
    cursor: pointer;
    text-decoration: none;
}
<?php endif; ?>

<?php if ( $highlightText && ! empty( $highlightText ) ) : ?>
/* Highlight styles */
<?php if ( 'background' === $highlightType ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-highlight {
    background-color: <?php echo esc_attr( $highlightColor ); ?>;
    padding: 0 5px;
    border-radius: 3px;
}
<?php elseif ( 'color' === $highlightType ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-highlight {
    color: <?php echo esc_attr( $highlightColor ); ?>;
}
<?php elseif ( 'underline' === $highlightType ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-highlight {
    text-decoration: underline;
    text-decoration-color: <?php echo esc_attr( $highlightColor ); ?>;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
}
<?php endif; ?>
<?php endif; ?>

<?php if ( $displaySeparator ) : ?>
/* Enhanced Separator styles */
<?php
// Generate the right position styling based on alignment
$position_css = 'bottom: 0;';
if ( 'top' === $separatorPosition ) {
    $position_css = 'top: 0;';
}

$alignment_css = 'left: 0;';
if ( 'center' === $align ) {
    $alignment_css = 'left: 50%; transform: translateX(-50%);';
} elseif ( 'right' === $align ) {
    $alignment_css = 'right: 0;';
}

// Spacing margin
$spacing_margin = $separatorPosition === 'top' 
    ? "margin-top: {$separatorSpacing['desktop']}px;" 
    : "margin-bottom: {$separatorSpacing['desktop']}px;";
?>

<?php 
// Different styles for different separator types
switch ( $separatorStyle ) :
    
    case 'line-solid': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'line-gradient': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background: linear-gradient(to right, <?php echo esc_attr( $separatorColor ); ?>, <?php echo esc_attr( $separatorSecondaryColor ); ?>, <?php echo esc_attr( $separatorColor ); ?>);
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'line-double': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}

.<?php echo esc_attr( $id ); ?>::after {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorSecondaryColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo $separatorPosition === 'top' 
        ? "margin-top: " . esc_attr(($separatorSpacing['desktop'] + $separatorHeight['desktop'] + 3)) . "px;" 
        : "margin-bottom: " . esc_attr(($separatorSpacing['desktop'] + $separatorHeight['desktop'] + 3)) . "px;"; ?>
}
<?php break;

    case 'line-dashed': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-image: repeating-linear-gradient(
        to right, 
        <?php echo esc_attr( $separatorColor ); ?>, 
        <?php echo esc_attr( $separatorColor ); ?> 8px, 
        transparent 8px, 
        transparent 12px
    );
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'line-dotted': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-image: repeating-linear-gradient(
        to right, 
        <?php echo esc_attr( $separatorColor ); ?>, 
        <?php echo esc_attr( $separatorColor ); ?> 3px, 
        transparent 3px, 
        transparent 6px
    );
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'wave': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] * 4 ); ?>px;
    background-image: repeating-linear-gradient(
        45deg, 
        <?php echo esc_attr( $separatorColor ); ?>, 
        <?php echo esc_attr( $separatorColor ); ?> 5px, 
        transparent 5px, 
        transparent 15px
    );
    mask-image: linear-gradient(
        to bottom, 
        transparent 35%, 
        black 35%, 
        black 65%, 
        transparent 65%
    );
    -webkit-mask-image: linear-gradient(
        to bottom, 
        transparent 35%, 
        black 35%, 
        black 65%, 
        transparent 65%
    );
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'dots': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px;
    background-image: radial-gradient(
        circle, 
        <?php echo esc_attr( $separatorColor ); ?> 25%, 
        transparent 25%
    );
    background-size: <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px;
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'glow': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
    box-shadow: 0 0 <?php echo esc_attr( $separatorHeight['desktop'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    case 'faded': ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background: linear-gradient(to right, transparent, <?php echo esc_attr( $separatorColor ); ?>, transparent);
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php break;

    default: ?>
.<?php echo esc_attr( $id ); ?>::before {
    content: '';
    position: absolute;
    <?php echo esc_attr( $position_css ); ?>
    <?php echo esc_attr( $alignment_css ); ?>
    width: <?php echo esc_attr( $separatorWidth['desktop'] ); ?>px;
    height: <?php echo esc_attr( $separatorHeight['desktop'] ); ?>px;
    background-color: <?php echo esc_attr( $separatorColor ); ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php echo esc_attr( $spacing_margin ); ?>
}
<?php endswitch; ?>

<?php endif; ?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		text-align: <?php echo esc_attr( $align['tablet'] ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    <?php if ( ! empty( $typography['fontSize']['tablet'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
        font-size: <?php echo esc_attr( $typography['fontSize']['tablet'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        
        <?php if ( ! empty( $typography['lineHeight']['tablet'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['tablet'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['letterSpacing']['tablet'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['tablet'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $displaySeparator ) : ?>
    /* Tablet separator styles */
    <?php 
    $tablet_spacing = $separatorPosition === 'top' 
        ? "margin-top: {$separatorSpacing['tablet']}px;" 
        : "margin-bottom: {$separatorSpacing['tablet']}px;";
        
    // Different styles for tablet size
    switch ( $separatorStyle ) :
        case 'line-solid':
        case 'line-gradient':
        case 'line-dashed':
        case 'line-dotted':
        case 'glow': 
        case 'faded': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr($tablet_spacing); ?>
    }
    <?php break;
    
        case 'line-double': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo esc_attr($tablet_spacing); ?>
    }
    
    .<?php echo esc_attr( $id ); ?>::after {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'tablet' ) ); ?>
        <?php echo $separatorPosition === 'top' 
            ? "margin-top: " . esc_attr(($separatorSpacing['tablet'] + $separatorHeight['tablet'] + 3)) . "px;" 
            : "margin-bottom: " . esc_attr(($separatorSpacing['tablet'] + $separatorHeight['tablet'] + 3)) . "px;"; ?>
    }
    <?php break;
    
        case 'wave': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] * 4 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['tablet'] * 2 ); ?>px <?php echo esc_attr( $separatorHeight['tablet'] * 2 ); ?>px;
        <?php echo esc_attr($tablet_spacing); ?>
    }
    <?php break;
    
        case 'dots': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['tablet'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['tablet'] * 3 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['tablet'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['tablet'] * 3 ); ?>px;
        <?php echo esc_attr($tablet_spacing); ?>
    }
    <?php break;
    
    endswitch; ?>
    <?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		text-align: <?php echo esc_attr( $align['mobile'] ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    <?php if ( ! empty( $typography['fontSize']['mobile'] ) ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-heading-text {
        font-size: <?php echo esc_attr( $typography['fontSize']['mobile'] . ( $typography['fontSizeUnit'] ?: 'px' ) ); ?>;
        
        <?php if ( ! empty( $typography['lineHeight']['mobile'] ) ) : ?>
        line-height: <?php echo esc_attr( $typography['lineHeight']['mobile'] . ( $typography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $typography['letterSpacing']['mobile'] ) ) : ?>
        letter-spacing: <?php echo esc_attr( $typography['letterSpacing']['mobile'] . ( $typography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
    <?php endif; ?>
    
    <?php if ( $displaySeparator ) : ?>
    /* Mobile separator styles */
    <?php 
    $mobile_spacing = $separatorPosition === 'top' 
        ? "margin-top: {$separatorSpacing['mobile']}px;" 
        : "margin-bottom: {$separatorSpacing['mobile']}px;";
        
    // Different styles for mobile size
    switch ( $separatorStyle ) :
        case 'line-solid':
        case 'line-gradient':
        case 'line-dashed':
        case 'line-dotted':
        case 'glow':
        case 'faded': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr($mobile_spacing); ?>
    }
    <?php break;
    
        case 'line-double': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo esc_attr($mobile_spacing); ?>
    }
    
    .<?php echo esc_attr( $id ); ?>::after {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] ); ?>px;
		<?php echo esc_attr( digiblocks_get_dimensions( $separatorBorderRadius, 'border-radius', 'mobile' ) ); ?>
        <?php echo $separatorPosition === 'top' 
            ? "margin-top: " . esc_attr(($separatorSpacing['mobile'] + $separatorHeight['mobile'] + 3)) . "px;" 
            : "margin-bottom: " . esc_attr(($separatorSpacing['mobile'] + $separatorHeight['mobile'] + 3)) . "px;"; ?>
    }
    <?php break;
    
        case 'wave': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] * 4 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['mobile'] * 2 ); ?>px <?php echo esc_attr( $separatorHeight['mobile'] * 2 ); ?>px;
        <?php echo esc_attr($mobile_spacing); ?>
    }
    <?php break;
    
        case 'dots': ?>
    .<?php echo esc_attr( $id ); ?>::before {
        width: <?php echo esc_attr( $separatorWidth['mobile'] ); ?>px;
        height: <?php echo esc_attr( $separatorHeight['mobile'] * 3 ); ?>px;
        background-size: <?php echo esc_attr( $separatorHeight['mobile'] * 3 ); ?>px <?php echo esc_attr( $separatorHeight['mobile'] * 3 ); ?>px;
        <?php echo esc_attr($mobile_spacing); ?>
    }
    <?php break;
    
    endswitch; ?>
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