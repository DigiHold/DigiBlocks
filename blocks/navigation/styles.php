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
$orientation                           = isset( $attrs['orientation'] ) ? $attrs['orientation'] : 'horizontal';
$layout                                = isset( $attrs['layout'] ) ? $attrs['layout'] : 'default';
$align                                 = isset( $attrs['align'] ) ? $attrs['align'] : 'flex-start';
$mobileBreakpoint                      = isset( $attrs['mobileBreakpoint'] ) ? $attrs['mobileBreakpoint'] : 768;
$showMobileToggle                      = isset( $attrs['showMobileToggle'] ) ? $attrs['showMobileToggle'] : true;
$toggleIcon                            = isset( $attrs['toggleIcon'] ) ? $attrs['toggleIcon'] : 'hamburger';
$customToggleIcon                      = isset( $attrs['customToggleIcon'] ) ? $attrs['customToggleIcon'] : null;
$toggleIconColor                       = isset( $attrs['toggleIconColor'] ) ? $attrs['toggleIconColor'] : '#333333';
$toggleIconHoverColor                  = isset( $attrs['toggleIconHoverColor'] ) ? $attrs['toggleIconHoverColor'] : '#1e73be';
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

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu {
	display: flex;
	<?php echo 'horizontal' === $orientation ? 'flex-direction: row;' : 'flex-direction: column;'; ?>
	justify-content: <?php echo esc_attr( $align ); ?>;
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
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link:hover {
	color: <?php echo esc_attr( $linkHoverColor ); ?>;
	background-color: <?php echo esc_attr( $linkHoverBackgroundColor ); ?>;
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

/* Mobile Toggle Button */
.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle {
	display: none;
	background: none;
	border: none;
	cursor: pointer;
	padding: 5px;
	margin-bottom: 10px;
	align-self: <?php echo 'flex-start' === $align ? 'flex-start' : ( 'flex-end' === $align ? 'flex-end' : 'center' ); ?>;
	color: <?php echo esc_attr( $toggleIconColor ); ?>;
	transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle:hover {
	color: <?php echo esc_attr( $toggleIconHoverColor ); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle svg {
	width: 24px;
	height: 24px;
	display: block;
}

/* Submenu Styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
	display: none;
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

<?php if ( 'vertical' === $orientation ) : ?>
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
		top: 0;
		left: 100%;
	}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
	display: block;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link {
	white-space: nowrap;
}

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

/* Tablet Styles */
@media (max-width: 991px) {
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu {
		gap: <?php echo esc_attr( $itemSpacing['tablet'] ); ?>px;
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
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-mobile-toggle {
		display: <?php echo $showMobileToggle ? 'flex' : 'none'; ?>;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu {
		display: <?php echo $showMobileToggle ? 'none' : 'flex'; ?>;
		flex-direction: column;
		<?php if ( $showMobileToggle ) : ?>
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background-color: <?php echo esc_attr( $submenuBackgroundColor ); ?>;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			border: 1px solid <?php echo esc_attr( $submenuBorderColor ); ?>;
			gap: 0;
		<?php endif; ?>
		z-index: 1000;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu.is-open {
		display: flex;
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-link {
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
	}
	
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu {
		position: static;
		background-color: transparent;
		border-radius: 0;
		box-shadow: none;
		border: none;
		width: 100%;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link,
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-submenu-toggle {
		background-color: <?php echo esc_attr( $submenuMobileBackgroundColor ); ?>;
		color: <?php echo esc_attr( $submenuMobileLinkColor ); ?>;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link:hover,
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link-sub:hover > .digiblocks-navigation-link,
	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .current-menu-item > .digiblocks-navigation-link {
		background-color: <?php echo esc_attr( $submenuMobileLinkHoverBackgroundColor ); ?>;
		color: <?php echo esc_attr( $submenuMobileLinkHoverColor ); ?>;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-submenu-toggle {
		transition: all 0.3s ease;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-submenu-toggle svg {
		fill: <?php echo esc_attr( $submenuMobileLinkColor ); ?>;
		transition: all 0.3s ease;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link-sub:hover > .digiblocks-submenu-toggle {
		background-color: <?php echo esc_attr( $submenuMobileLinkHoverBackgroundColor ); ?>;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu .digiblocks-navigation-link-sub:hover > .digiblocks-submenu-toggle svg {
		fill: <?php echo esc_attr( $submenuMobileLinkHoverColor ); ?>;
	}

	.<?php echo esc_attr( $id ); ?> .digiblocks-submenu-toggle {
        display: inline-flex;
    }
    
    /* Override hover behavior in mobile */
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-menu-item:hover > .digiblocks-navigation-submenu {
        display: none;
    }
    
    /* Only show submenus when explicitly toggled */
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu.is-open {
        display: block !important;
    }
    
    /* Hide regular submenu icons in mobile */
    .<?php echo esc_attr( $id ); ?> .digiblocks-navigation-submenu-icon {
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

<?php
$digiblocks_css_output = ob_get_clean();