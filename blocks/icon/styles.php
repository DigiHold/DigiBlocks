<?php
/**
 * Icon Block Styles
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
$iconColor                = isset( $attrs['iconColor'] ) ? $attrs['iconColor'] : '#1e73be';
$iconBackgroundColor      = isset( $attrs['iconBackgroundColor'] ) ? $attrs['iconBackgroundColor'] : null;
$iconBorderStyle          = isset( $attrs['iconBorderStyle'] ) ? $attrs['iconBorderStyle'] : 'default';
$iconBorderWidth          = isset( $attrs['iconBorderWidth'] ) ? $attrs['iconBorderWidth'] : array(
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
$iconBorderRadius         = isset( $attrs['iconBorderRadius'] ) ? $attrs['iconBorderRadius'] : digiblocks_get_default_dimensions('px');
$iconBorderColor          = isset( $attrs['iconBorderColor'] ) ? $attrs['iconBorderColor'] : null;
$iconPadding              = isset( $attrs['iconPadding'] ) ? $attrs['iconPadding'] : digiblocks_get_default_dimensions('px');
$iconMargin               = isset( $attrs['iconMargin'] ) ? $attrs['iconMargin'] : digiblocks_get_default_dimensions('px');
$iconHoverColor           = isset( $attrs['iconHoverColor'] ) ? $attrs['iconHoverColor'] : '';
$iconHoverBackgroundColor = isset( $attrs['iconHoverBackgroundColor'] ) ? $attrs['iconHoverBackgroundColor'] : '';
$iconHoverBorderColor     = isset( $attrs['iconHoverBorderColor'] ) ? $attrs['iconHoverBorderColor'] : '';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : 'transparent';
$backgroundHoverColor     = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$align                    = isset( $attrs['align'] ) ? $attrs['align'] : [
    'desktop' => 'flex-start',
    'tablet'  => '',
    'mobile'  => '',
];
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$hoverEffect              = isset( $attrs['hoverEffect'] ) ? $attrs['hoverEffect'] : 'none';
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'default';
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$linkEnabled              = isset( $attrs['linkEnabled'] ) ? $attrs['linkEnabled'] : false;
$rotateIcon               = isset( $attrs['rotateIcon'] ) ? $attrs['rotateIcon'] : 0;
$flipHorizontal           = isset( $attrs['flipHorizontal'] ) ? $attrs['flipHorizontal'] : false;
$flipVertical             = isset( $attrs['flipVertical'] ) ? $attrs['flipVertical'] : false;

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

// Get icon size
$iconSize = isset( $attrs['iconSize'] ) ? $attrs['iconSize'] : array(
    'desktop' => array( 'value' => 48, 'unit' => 'px' ),
    'tablet'  => array( 'value' => '', 'unit' => 'px' ),
    'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);

// Get icon height
$iconHeight = isset( $attrs['iconHeight'] ) ? $attrs['iconHeight'] : array(
    'desktop' => array( 'value' => '', 'unit' => 'px' ),
    'tablet'  => array( 'value' => '', 'unit' => 'px' ),
    'mobile'  => array( 'value' => '', 'unit' => 'px' ),
);

// Create icon transform CSS
$transformProps = array();
if ( $rotateIcon ) {
    $transformProps[] = "rotate({$rotateIcon}deg)";
}
if ( $flipHorizontal ) {
    $transformProps[] = 'scaleX(-1)';
}
if ( $flipVertical ) {
    $transformProps[] = 'scaleY(-1)';
}
$transformCSS = !empty( $transformProps ) ? 'transform: ' . implode( ' ', $transformProps ) . ';' : '';

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

// CSS Output
ob_start();
?>
/* Icon Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    display: flex;
    justify-content: <?php echo esc_attr( $align['desktop'] ); ?>;
    align-items: center;
    background-color: <?php echo esc_attr( $backgroundColor ); ?>;
    <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle ) : ?>
        border-style: <?php echo esc_attr( $borderStyle ); ?>;
        border-color: <?php echo esc_attr( $borderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $borderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php else : ?>
        border-style: none;
    <?php endif; ?>

    <?php if ( isset( $boxShadow['enable'] ) && $boxShadow['enable'] ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadow ) ); ?>;
    <?php else : ?>
        box-shadow: none;
    <?php endif; ?>

	<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'desktop' ) ); ?>
    <?php if ( $linkEnabled ) : ?>
        cursor: pointer;
        text-decoration: none;
    <?php endif; ?>
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

/* Hover effects for the main block */
<?php
$has_background_hover = ! empty( $backgroundHoverColor );
$has_box_shadow_hover = isset( $boxShadowHover['enable'] ) && $boxShadowHover['enable'];
$has_hover_effect     = ! empty( $hoverEffect );

$transform_hover_value = digiblocks_get_transform_css( $transformHover, 'desktop' );
$has_transform_hover   = ! empty( $transform_hover_value ) && ! in_array( $hoverEffect, array( 'lift', 'scale' ), true );

if ( $has_background_hover || $has_box_shadow_hover || $has_hover_effect || $has_transform_hover ) :
?>
.<?php echo esc_attr( $id ); ?>:hover {
    <?php if ( $has_background_hover ) : ?>
        background-color: <?php echo esc_attr( $backgroundHoverColor ); ?>;
    <?php endif; ?>
        
    <?php if ( $has_box_shadow_hover ) : ?>
        box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $boxShadowHover ) ); ?>;
    <?php endif; ?>
        
    <?php if ( 'lift' === $hoverEffect ) : ?>
        transform: translateY(-10px);
    <?php elseif ( 'scale' === $hoverEffect ) : ?>
        transform: scale(1.05);
    <?php elseif ( 'glow' === $hoverEffect ) : ?>
        filter: brightness(1.1);
    <?php endif; ?>

    <?php if ( $has_transform_hover ) : ?>
        transform: <?php echo esc_attr( $transform_hover_value ); ?>;
        transform-origin: <?php echo digiblocks_get_transform_origin( $transformHover, 'desktop' ); ?>;
    <?php endif; ?>
}
<?php endif; ?>

<?php if ( 'spin' === $hoverEffect ) : ?>
@keyframes digiblocks-icon-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon span {
    animation: digiblocks-icon-spin 2s linear infinite;
}
<?php elseif ( 'pulse' === $hoverEffect ) : ?>
@keyframes digiblocks-icon-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon span {
    animation: digiblocks-icon-pulse 1.5s ease-in-out infinite;
}
<?php elseif ( 'shake' === $hoverEffect ) : ?>
@keyframes digiblocks-icon-shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(0); }
    75% { transform: translateX(5px); }
    100% { transform: translateX(0); }
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon span {
    animation: digiblocks-icon-shake 0.5s ease-in-out infinite;
}
<?php endif; ?>

/* Icon styles */
.<?php echo esc_attr( $id ); ?> .digiblocks-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	<?php if ( $iconBackgroundColor ) : ?>
		background-color: <?php echo esc_attr( $iconBackgroundColor ); ?>;
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && $iconBorderWidth && $iconBorderRadius ) : ?>
		border-style: <?php echo esc_attr( $iconBorderStyle ); ?>;
		border-color: <?php echo esc_attr( $iconBorderColor ); ?>;
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'desktop' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'desktop' ) ); ?>
	<?php endif; ?>
		
	<?php if ( $iconPadding ) : ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'desktop' ) ); ?>
	<?php endif; ?>

	transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon span {
	display: flex;
	<?php if ( $transformCSS ) : ?>
		<?php echo esc_attr( $transformCSS ); ?>
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-icon svg {
	<?php if ( ! empty( $iconSize['desktop']['value'] ) ) : ?>
		width: <?php echo esc_attr( $iconSize['desktop']['value'] . $iconSize['desktop']['unit'] ); ?>;
	<?php else: ?>
		width: 48px;
	<?php endif; ?>

	<?php if ( ! empty( $iconHeight['desktop']['value'] ) ) : ?>
		height: <?php echo esc_attr( $iconHeight['desktop']['value'] . $iconHeight['desktop']['unit'] ); ?>;
	<?php else: ?>
		height: auto;
	<?php endif; ?>
	fill: <?php echo esc_attr( $iconColor ); ?>;
	transition: all 0.3s ease;
}

/* Icon hover styles */
.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon {
	<?php if ( $iconHoverBackgroundColor ) : ?>
		background-color: <?php echo esc_attr( $iconHoverBackgroundColor ); ?>;
	<?php endif; ?>
		
	<?php if ( $iconHoverBorderColor ) : ?>
		border-color: <?php echo esc_attr( $iconHoverBorderColor ); ?>;
	<?php endif; ?>
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-icon svg {
	<?php if ( $iconHoverColor ) : ?>
		fill: <?php echo esc_attr( $iconHoverColor ); ?> !important; 
		color: <?php echo esc_attr( $iconHoverColor ); ?> !important;
	<?php endif; ?>
}

/* Tablet Styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		justify-content: <?php echo esc_attr( $align['tablet'] ); ?>;
        <?php if ( isset( $iconMargin['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'tablet' ) ); ?>
        <?php endif; ?>
                
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['tablet']) && isset( $borderRadius['tablet'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'tablet' ) ); ?>
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

	<?php if ( isset( $iconSize['tablet']['value'] ) || isset( $iconHeight['tablet']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-icon svg {
            <?php if ( ! empty( $iconSize['tablet']['value'] ) ) : ?>
                width: <?php echo esc_attr( $iconSize['tablet']['value'] . $iconSize['tablet']['unit'] ); ?>;
            <?php endif; ?>

            <?php if ( ! empty( $iconHeight['tablet']['value'] ) ) : ?>
                height: <?php echo esc_attr( $iconHeight['tablet']['value'] . $iconHeight['tablet']['unit'] ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
		
	<?php if ( $iconPadding && isset( $iconPadding['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'tablet' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['tablet']) && isset( $iconBorderRadius['tablet'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'tablet' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'tablet' ) ); ?>
		}
	<?php endif; ?>
}

/* Mobile Styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		justify-content: <?php echo esc_attr( $align['mobile'] ); ?>;
        <?php if ( isset( $iconMargin['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconMargin, 'margin', 'mobile' ) ); ?>
        <?php endif; ?>
                
        <?php if ( $borderStyle && 'default' !== $borderStyle && 'none' !== $borderStyle && isset( $borderWidth['mobile']) && isset( $borderRadius['mobile'] ) ) : ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $borderWidth, 'border-width', 'mobile' ) ); ?>
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
    
	<?php if ( isset( $iconSize['mobile']['value'] ) || isset( $iconHeight['mobile']['value'] ) ) : ?>
        .<?php echo esc_attr( $id ); ?> .digiblocks-icon svg {
            <?php if ( ! empty( $iconSize['mobile']['value'] ) ) : ?>
                width: <?php echo esc_attr( $iconSize['mobile']['value'] . $iconSize['mobile']['unit'] ); ?>;
            <?php endif; ?>

            <?php if ( ! empty( $iconHeight['mobile']['value'] ) ) : ?>
                height: <?php echo esc_attr( $iconHeight['mobile']['value'] . $iconHeight['mobile']['unit'] ); ?>;
            <?php endif; ?>
        }
    <?php endif; ?>
		
	<?php if ( $iconPadding && isset( $iconPadding['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconPadding, 'padding', 'mobile' ) ); ?>
		}
	<?php endif; ?>
		
	<?php if ( $iconBorderStyle && 'default' !== $iconBorderStyle && 'none' !== $iconBorderStyle && isset( $iconBorderWidth['mobile']) && isset( $iconBorderRadius['mobile'] ) ) : ?>
		.<?php echo esc_attr( $id ); ?> .digiblocks-icon {
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderWidth, 'border-width', 'mobile' ) ); ?>
			<?php echo esc_attr( digiblocks_get_dimensions( $iconBorderRadius, 'border-radius', 'mobile' ) ); ?>
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