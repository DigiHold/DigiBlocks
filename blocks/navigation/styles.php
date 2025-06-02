<?php
/**
 * Navigation Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                                    = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';
$visibility                            = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$flexWrap                              = isset( $attrs['flexWrap'] ) ? $attrs['flexWrap'] : [
    'desktop' => 'nowrap',
    'tablet'  => '',
    'mobile'  => '',
];
$orientation                           = isset( $attrs['orientation'] ) ? $attrs['orientation'] : [
    'desktop' => 'horizontal',
    'tablet'  => '',
    'mobile'  => '',
];
$align                                 = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'flex-start',
    'tablet'  => '',
    'mobile'  => '',
];
$columns                               = isset( $attrs['columns'] ) ? $attrs['columns'] : [
    'desktop' => 1,
    'tablet'  => 1,
    'mobile'  => 1,
];
$linkEffect                            = isset( $attrs['linkEffect'] ) ? $attrs['linkEffect'] : 'none';
$submenuEffect                         = isset( $attrs['submenuEffect'] ) ? $attrs['submenuEffect'] : 'fade';
$mobileBreakpoint                      = isset( $attrs['mobileBreakpoint'] ) ? $attrs['mobileBreakpoint'] : 768;
$showMobileToggle                      = isset( $attrs['showMobileToggle'] ) ? $attrs['showMobileToggle'] : true;
$mobileAlign                           = isset( $attrs['mobileAlign'] ) ? $attrs['mobileAlign'] : 'flex-end';
$toggleIconColor                       = isset( $attrs['toggleIconColor'] ) ? $attrs['toggleIconColor'] : '#333333';
$toggleIconHoverColor                  = isset( $attrs['toggleIconHoverColor'] ) ? $attrs['toggleIconHoverColor'] : '#1e73be';
$mobileToggleSize                      = isset( $attrs['mobileToggleSize'] ) ? $attrs['mobileToggleSize'] : 50;
$linkBorderStyle                       = isset( $attrs['linkBorderStyle'] ) ? $attrs['linkBorderStyle'] : 'none';
$linkBorderWidth                       = isset( $attrs['linkBorderWidth'] ) ? $attrs['linkBorderWidth'] : digiblocks_get_default_dimensions('px');
$linkBorderColor                       = isset( $attrs['linkBorderColor'] ) ? $attrs['linkBorderColor'] : '#e0e0e0';
$linkBorderHoverColor                  = isset( $attrs['linkBorderHoverColor'] ) ? $attrs['linkBorderHoverColor'] : '';
$toggleIconBorderStyle                 = isset( $attrs['toggleIconBorderStyle'] ) ? $attrs['toggleIconBorderStyle'] : 'none';
$toggleIconBorderWidth = isset( $attrs['toggleIconBorderWidth'] ) ? $attrs['toggleIconBorderWidth'] : array(
    'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'
);
$toggleIconBorderRadius = isset( $attrs['toggleIconBorderRadius'] ) ? $attrs['toggleIconBorderRadius'] : array(
    'top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'
);
$toggleIconBackgroundColor             = isset( $attrs['toggleIconBackgroundColor'] ) ? $attrs['toggleIconBackgroundColor'] : '';
$toggleIconBackgroundHoverColor        = isset( $attrs['toggleIconBackgroundHoverColor'] ) ? $attrs['toggleIconBackgroundHoverColor'] : '';
$toggleIconBorderColor                 = isset( $attrs['toggleIconBorderColor'] ) ? $attrs['toggleIconBorderColor'] : '#e0e0e0';
$toggleIconBorderHoverColor            = isset( $attrs['toggleIconBorderHoverColor'] ) ? $attrs['toggleIconBorderHoverColor'] : '';
$linkColor                             = isset( $attrs['linkColor'] ) ? $attrs['linkColor'] : '#333333';
$linkHoverColor                        = isset( $attrs['linkHoverColor'] ) ? $attrs['linkHoverColor'] : '#1e73be';
$linkBackgroundColor                   = isset( $attrs['linkBackgroundColor'] ) ? $attrs['linkBackgroundColor'] : 'transparent';
$linkHoverBackgroundColor              = isset( $attrs['linkHoverBackgroundColor'] ) ? $attrs['linkHoverBackgroundColor'] : 'transparent';
$submenuBackgroundColor                = isset( $attrs['submenuBackgroundColor'] ) ? $attrs['submenuBackgroundColor'] : '#ffffff';
$submenuBorderColor                    = isset( $attrs['submenuBorderColor'] ) ? $attrs['submenuBorderColor'] : '#e0e0e0';
$submenuMobileBackgroundColor          = isset( $attrs['submenuMobileBackgroundColor'] ) ? $attrs['submenuMobileBackgroundColor'] : 'rgba(0, 0, 0, 0.02)';
$submenuMobileLinkColor                = isset( $attrs['submenuMobileLinkColor'] ) ? $attrs['submenuMobileLinkColor'] : $linkColor;
$submenuMobileLinkHoverColor           = isset( $attrs['submenuMobileLinkHoverColor'] ) ? $attrs['submenuMobileLinkHoverColor'] : $linkHoverColor;
$submenuMobileLinkHoverBackgroundColor = isset( $attrs['submenuMobileLinkHoverBackgroundColor'] ) ? $attrs['submenuMobileLinkHoverBackgroundColor'] : $linkHoverBackgroundColor;
$mobileFullWidth                       = isset( $attrs['mobileFullWidth'] ) ? $attrs['mobileFullWidth'] : true;
$menuType                              = isset( $attrs['menuType'] ) ? $attrs['menuType'] : 'wordpress';
$animation                             = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$customClasses                         = isset( $attrs['customClasses'] ) ? $attrs['customClasses'] : '';

// Get responsive spacing
$itemSpacing = isset( $attrs['itemSpacing'] ) ? $attrs['itemSpacing'] : array(
    'desktop' => 20,
    'tablet'  => 15,
    'mobile'  => 12,
);

// Get padding
$padding = isset( $attrs['padding'] ) ? $attrs['padding'] : array(
    'desktop' => array(
        'top'    => 8,
        'right'  => 10,
        'bottom' => 8,
        'left'   => 10,
        'unit'   => 'px',
    ),
    'tablet'  => array(
        'top'    => 6,
        'right'  => 8,
        'bottom' => 6,
        'left'   => 8,
        'unit'   => 'px',
    ),
    'mobile'  => array(
        'top'    => 0,
        'right'  => 20,
        'bottom' => 0,
        'left'   => 20,
        'unit'   => 'px',
    ),
);

// Get border radius
$borderRadius = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : array(
    'desktop' => array(
        'top'    => 4,
        'right'  => 4,
        'bottom' => 4,
        'left'   => 4,
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

// Get typography
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
        'mobile'  => 3,
    ),
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => array(
        'desktop' => 0,
        'tablet'  => 0,
        'mobile'  => 0,
    ),
    'letterSpacingUnit' => 'px',
);

// Get animation class if applicable.
$animation_class = '';
if ( ! empty( $animation ) && 'none' !== $animation ) {
    $animation_class = ' animate-' . $animation;
}

// CSS Output
ob_start();
?>
/* Navigation Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
    flex-direction: column;
    position: relative;
    <?php if ( $mobileFullWidth ) : ?>
    width: 100%;
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-wrapper {
	display: flex;
	flex-direction: column;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu {
    display: flex;
    <?php if ( 'vertical' !== $orientation['desktop'] && $columns['desktop'] > 1 ) : ?>
        display: grid;
        grid-template-columns: repeat(<?php echo esc_attr( $columns['desktop'] ); ?>, 1fr);
        flex-direction: unset;
    <?php else : ?>
        <?php echo 'nowrap' === $flexWrap['desktop'] ? 'flex-wrap: nowrap;' : 'flex-wrap: wrap;'; ?>
        <?php echo 'horizontal' === $orientation['desktop'] ? 'flex-direction: row;' : 'flex-direction: column;'; ?>
    <?php endif; ?>
    justify-content: <?php echo esc_attr( $align['desktop'] ); ?>;
    gap: <?php echo esc_attr( $itemSpacing['desktop'] ); ?>px;
    list-style: none;
    margin: 0;
    padding: 0;
    <?php if ( $animation_class ) : ?>
    animation-duration: 1s;
    animation-fill-mode: both;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item {
    position: relative;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    text-decoration: none;
    <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
    color: <?php echo esc_attr( $linkColor ); ?>;
    background-color: <?php echo esc_attr( $linkBackgroundColor ); ?>;
    <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    transition: all 0.3s ease;

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

	<?php if ( $linkBorderStyle && 'none' !== $linkBorderStyle ) : ?>
		border-style: <?php echo esc_attr( $linkBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $linkBorderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $linkBorderWidth, 'border-width', 'desktop' ) ); ?>
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover {
    color: <?php echo esc_attr( $linkHoverColor ); ?>;
    background-color: <?php echo esc_attr( $linkHoverBackgroundColor ); ?>;
	<?php if ( ! empty( $linkBorderHoverColor ) ) : ?>
		border-color: <?php echo esc_attr( $linkBorderHoverColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link.is-active {
    color: <?php echo esc_attr( $linkHoverColor ); ?>;
    background-color: <?php echo esc_attr( $linkHoverBackgroundColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-icon svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
}

/* Mobile Toggle with bars */
.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle {
    display: none;
    height: <?php echo esc_attr( $mobileToggleSize ); ?>px;
    width: <?php echo esc_attr( $mobileToggleSize ); ?>px;
	position: relative;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding: 0;
	<?php if ( ! empty( $toggleIconBackgroundColor ) ) : ?>
	background-color: <?php echo esc_attr( $toggleIconBackgroundColor ); ?>;
	<?php else : ?>
	background-color: transparent;
	<?php endif; ?>
    align-self: <?php echo esc_attr( $mobileAlign ); ?>;
    transition: all 0.3s ease;
	<?php if ( $toggleIconBorderRadius['top'] ) : ?>
    	border-radius: <?php echo esc_attr( $toggleIconBorderRadius['top'] . $toggleIconBorderRadius['unit'] ); ?> <?php echo esc_attr( $toggleIconBorderRadius['right'] . $toggleIconBorderRadius['unit'] ); ?> <?php echo esc_attr( $toggleIconBorderRadius['bottom'] . $toggleIconBorderRadius['unit'] ); ?> <?php echo esc_attr( $toggleIconBorderRadius['left'] . $toggleIconBorderRadius['unit'] ); ?>;
	<?php endif; ?>
	<?php if ( $toggleIconBorderStyle && 'none' !== $toggleIconBorderStyle ) : ?>
		border-style: <?php echo esc_attr( $toggleIconBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $toggleIconBorderColor ); ?>;
		border-width: <?php echo esc_attr( $toggleIconBorderWidth['top'] . $toggleIconBorderWidth['unit'] ); ?> <?php echo esc_attr( $toggleIconBorderWidth['right'] . $toggleIconBorderWidth['unit'] ); ?> <?php echo esc_attr( $toggleIconBorderWidth['bottom'] . $toggleIconBorderWidth['unit'] ); ?> <?php echo esc_attr( $toggleIconBorderWidth['left'] . $toggleIconBorderWidth['unit'] ); ?>;
	<?php else : ?>
    	border: none;
	<?php endif; ?>
}

<?php if ( ! empty( $toggleIconBackgroundHoverColor ) || ! empty( $toggleIconBorderHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle:hover {
    <?php if ( ! empty( $toggleIconBackgroundHoverColor ) ) : ?>
    background-color: <?php echo esc_attr( $toggleIconBackgroundHoverColor ); ?>;
    <?php endif; ?>
    <?php if ( ! empty( $toggleIconBorderHoverColor ) ) : ?>
    border-color: <?php echo esc_attr( $toggleIconBorderHoverColor ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle span {
	position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 2px;
    transform: translateX(-50%);
    background-color: <?php echo esc_attr( $toggleIconColor ); ?>;
    border-radius: 0.75rem;
    transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
}

<?php if ( ! empty( $toggleIconHoverColor ) ) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle:hover span {
    background-color: <?php echo esc_attr( $toggleIconHoverColor ); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle span:first-child {
    transform: translate(-50%, -9px);
    animation-delay: 100ms;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle span:nth-child(3) {
    transform: translate(-50%, 9px);
    animation-delay: 250ms;
}

/* Mobile menu open animation */
.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle[aria-expanded="true"] span:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle[aria-expanded="true"] span:nth-child(2) {
    transform: translate(-50%, -50%) scaleX(0);
    opacity: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle[aria-expanded="true"] span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(-45deg);
}

/* Submenu Styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: <?php echo esc_attr( $submenuBackgroundColor ); ?>;
    border: 1px solid <?php echo esc_attr( $submenuBorderColor ); ?>;
    border-radius: 4px;
    padding: 0;
    min-width: 200px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    list-style: none;
    margin: 0;
}

/* Nested submenu positioning */
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-submenu {
    top: 0;
    left: 100%;
    margin-top: -1px; /* Adjust for border overlap */
}

/* RTL support for nested submenus */
.rtl .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-submenu {
    left: auto;
    right: 100%;
}

<?php if ( 'vertical' === $orientation['desktop'] ) : ?>
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
        top: 0;
        left: 100%;
    }
<?php endif; ?>

/* Submenu icon styling */
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu-icon svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link {
    white-space: nowrap;
	line-height: 1.6;
}

/* Submenu toggle button styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link-sub {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link-sub .digiblocks-navigation-link {
    flex: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-submenu-toggle {
    display: none; /* Hidden by default in desktop view */
    cursor: pointer;
    padding: 0 .907em;
    font-weight: 400;
    background: none;
    border: none;
    color: inherit;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-submenu-toggle svg {
    width: 1em;
    height: 100%;
    fill: currentColor;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-submenu-toggle .icon-minus {
    display: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-submenu-toggle.is-open .icon-plus {
    display: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-submenu-toggle.is-open .icon-minus {
    display: block;
}

<?php
// Generate link effects CSS
if ( $linkEffect !== 'none' ) :
    switch ( $linkEffect ) :
        case 'underline': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
    position: relative;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: <?php echo esc_attr( $linkHoverColor ); ?>;
    transition: width 0.3s ease;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover::after,
.<?php echo esc_attr( $id ); ?> .current-menu-item .digiblocks-navigation-link::after {
    width: 100%;
}
        <?php break;
        case 'overline': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
    position: relative;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: <?php echo esc_attr( $linkHoverColor ); ?>;
    transition: width 0.3s ease;
    opacity: 0;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover::before,
.<?php echo esc_attr( $id ); ?> .current-menu-item .digiblocks-navigation-link::before {
    width: 100%;
    opacity: 1;
}
        <?php break;
        case 'border-bottom': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover,
.<?php echo esc_attr( $id ); ?> .current-menu-item .digiblocks-navigation-link {
    border-bottom-color: <?php echo esc_attr( $linkHoverColor ); ?>;
}
        <?php break;
        case 'border-top': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
    border-top: 2px solid transparent;
    transition: all 0.3s ease;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover,
.<?php echo esc_attr( $id ); ?> .current-menu-item .digiblocks-navigation-link {
    border-top-color: <?php echo esc_attr( $linkHoverColor ); ?>;
}
        <?php break;
        case 'bg-slide': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
    position: relative;
    overflow: hidden;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: <?php echo esc_attr( $linkHoverBackgroundColor ); ?>;
    transition: left 0.3s ease;
    z-index: -1;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover::before,
.<?php echo esc_attr( $id ); ?> .current-menu-item .digiblocks-navigation-link::before {
    left: 0;
}
        <?php break;
        case 'scale': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover,
.<?php echo esc_attr( $id ); ?> .current-menu-item .digiblocks-navigation-link {
    transform: scale(1.05);
}
        <?php break;
    endswitch;
endif;
?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link::before {
	display: none;
}

<?php
// Generate submenu effects CSS
switch ( $submenuEffect ) :
    case 'fade': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
    opacity: 1;
    visibility: visible;
    display: block;
}
    <?php break;
    case 'slide-up': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    display: block;
}
    <?php break;
    case 'slide-down': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    display: block;
}
    <?php break;
    case 'scale': ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.95);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    display: block;
}
    <?php break;
endswitch;
?>

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu {
        <?php if ( 'vertical' !== $orientation['tablet'] && $columns['tablet'] > 1 ) : ?>
            display: grid;
            grid-template-columns: repeat(<?php echo esc_attr( $columns['tablet'] ); ?>, 1fr);
            flex-direction: unset;
        <?php else : ?>
            <?php echo 'nowrap' === $flexWrap['tablet'] ? 'flex-wrap: nowrap;' : 'flex-wrap: wrap;'; ?>
            <?php echo 'horizontal' === $orientation['tablet'] ? 'flex-direction: row;' : 'flex-direction: column;'; ?>
        <?php endif; ?>
        gap: <?php echo esc_attr( $itemSpacing['tablet'] ); ?>px;
        <?php if ( ! empty( $align['tablet'] ) ) : ?>
        justify-content: <?php echo esc_attr( $align['tablet'] ); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'tablet' ) ); ?>
        
        <?php if ( ! empty( $textTypography['fontSize']['tablet'] ) ) : ?>
            font-size: <?php echo esc_attr( $textTypography['fontSize']['tablet'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $textTypography['lineHeight']['tablet'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['tablet'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $textTypography['letterSpacing']['tablet'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['tablet'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
    }
}

/* Mobile Styles */
@media (max-width: <?php echo esc_attr( $mobileBreakpoint ); ?>px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php if ( $mobileFullWidth ) : ?>
            width: 100%;
        <?php endif; ?>
    }

	<?php if ( $linkBorderStyle && 'none' !== $linkBorderStyle ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
		<?php echo esc_attr( digiblocks_get_dimensions( $linkBorderWidth, 'border-width', 'tablet' ) ); ?>
	}
	<?php endif; ?>

	.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle {
        display: <?php echo $showMobileToggle ? 'flex' : 'none'; ?>;
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-wrapper {
		<?php if ( $showMobileToggle ) : ?>
            position: absolute;
            top: 100%;
            left: 0;
            width: 100vw;
			max-height: 70vh;
            overflow-y: auto;
            background-color: <?php echo esc_attr( $submenuBackgroundColor ); ?>;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-bottom-radius: 4px;
            border: 1px solid <?php echo esc_attr( $submenuBorderColor ); ?>;
			border-top: 0;
            gap: 0;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                       visibility 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        <?php endif; ?>
		z-index: 1000;
	}
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-wrapper.is-open {
        opacity: 1;
        visibility: visible;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu {
        display: flex;
        <?php if ( 'vertical' !== $orientation['mobile'] && $columns['mobile'] > 1 ) : ?>
            display: grid;
            grid-template-columns: repeat(<?php echo esc_attr( $columns['mobile'] ); ?>, 1fr);
            flex-direction: unset;
        <?php else : ?>
            <?php echo 'nowrap' === $flexWrap['mobile'] ? 'flex-wrap: nowrap;' : 'flex-wrap: wrap;'; ?>
            <?php echo 'horizontal' === $orientation['mobile'] ? 'flex-direction: row;' : 'flex-direction: column;'; ?>
        <?php endif; ?>
        <?php if ( ! empty( $align['mobile'] ) ) : ?>
        justify-content: <?php echo esc_attr( $align['mobile'] ); ?>;
        <?php endif; ?>
		<?php if ( $showMobileToggle ) : ?>
            border: 0;
            gap: 0;
        <?php endif; ?>
        z-index: 1000;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link,
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link {
        <?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
        <?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'mobile' ) ); ?>
        
        <?php if ( ! empty( $textTypography['fontSize']['mobile'] ) ) : ?>
            font-size: <?php echo esc_attr( $textTypography['fontSize']['mobile'] . ( $textTypography['fontSizeUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $textTypography['lineHeight']['mobile'] ) ) : ?>
            line-height: <?php echo esc_attr( $textTypography['lineHeight']['mobile'] . ( $textTypography['lineHeightUnit'] ?: 'em' ) ); ?>;
        <?php endif; ?>
        
        <?php if ( ! empty( $textTypography['letterSpacing']['mobile'] ) ) : ?>
            letter-spacing: <?php echo esc_attr( $textTypography['letterSpacing']['mobile'] . ( $textTypography['letterSpacingUnit'] ?: 'px' ) ); ?>;
        <?php endif; ?>
		border: 0;
    }

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link::before,
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link::after {
		display: none;
	}
    
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
		display: none;
        position: relative;
        background-color: transparent;
        border-radius: 0;
        box-shadow: none;
        border: none;
        width: 100%;
        top: 0;
        transform: none;
        opacity: 1;
        visibility: visible;
    }

    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link,
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-submenu-toggle {
        background-color: <?php echo esc_attr( $submenuMobileBackgroundColor ); ?>;
        color: <?php echo esc_attr( $submenuMobileLinkColor ); ?>;
    }

    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link:hover,
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link-sub:hover > .digiblocks-navigation-link,
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .current-menu-item > .digiblocks-navigation-link {
        background-color: <?php echo esc_attr( $submenuMobileLinkHoverBackgroundColor ); ?>;
        color: <?php echo esc_attr( $submenuMobileLinkHoverColor ); ?>;
    }

    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-submenu-toggle {
        transition: all 0.3s ease;
    }

    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-submenu-toggle svg {
        fill: <?php echo esc_attr( $submenuMobileLinkColor ); ?>;
        transition: all 0.3s ease;
    }

    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link-sub:hover > .digiblocks-submenu-toggle {
        background-color: <?php echo esc_attr( $submenuMobileLinkHoverBackgroundColor ); ?>;
    }

    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link-sub:hover > .digiblocks-submenu-toggle svg {
        fill: <?php echo esc_attr( $submenuMobileLinkHoverColor ); ?>;
    }

    body .<?php echo esc_attr( $id ); ?> .digiblocks-submenu-toggle {
        display: inline-flex;
    }
    
    /* Override hover behavior in mobile */
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
        display: none;
    }
    
    /* Only show submenus when explicitly toggled */
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu.is-open,
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item.submenu-open:hover > .digiblocks-navigation-submenu {
        display: block;
		left: 0;
        margin: 0;
    }
    
    /* Hide regular submenu icons in mobile */
    body .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu-icon {
        display: none;
    }
}

/* WordPress specific menu styles */
.<?php echo esc_attr( $id ); ?> .current-menu-item > .digiblocks-navigation-link {
    color: <?php echo esc_attr( $linkHoverColor ); ?>;
    background-color: <?php echo esc_attr( $linkHoverBackgroundColor ); ?>;
}

/* Custom menu specific styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-custom-menu-item .digiblocks-navigation-link {
    display: flex;
    align-items: center;
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