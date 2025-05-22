<?php
/**
 * Author Box Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-author-box-' . uniqid();
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$layout                   = isset( $attrs['layout'] ) ? $attrs['layout'] : 'horizontal';
$spacing                  = isset( $attrs['spacing'] ) ? $attrs['spacing'] : [
    'desktop' => 40,
    'tablet'  => '',
    'mobile'  => '',
];
$avatarSize               = isset( $attrs['avatarSize'] ) ? $attrs['avatarSize'] : [
    'desktop' => 100,
    'tablet'  => '',
    'mobile'  => '',
];
$nameColor                = isset( $attrs['nameColor'] ) ? $attrs['nameColor'] : '#333333';
$nameHoverColor           = isset( $attrs['nameHoverColor'] ) ? $attrs['nameHoverColor'] : '';
$descriptionColor         = isset( $attrs['descriptionColor'] ) ? $attrs['descriptionColor'] : '#666666';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '#f9f9f9';
$backgroundHoverColor     = isset( $attrs['backgroundHoverColor'] ) ? $attrs['backgroundHoverColor'] : '';
$avatarBorderColor        = isset( $attrs['avatarBorderColor'] ) ? $attrs['avatarBorderColor'] : '#e0e0e0';
$avatarBorderHoverColor   = isset( $attrs['avatarBorderHoverColor'] ) ? $attrs['avatarBorderHoverColor'] : '';
$avatarBorderWidth        = isset( $attrs['avatarBorderWidth'] ) ? $attrs['avatarBorderWidth'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$avatarBorderRadius       = isset( $attrs['avatarBorderRadius'] ) ? $attrs['avatarBorderRadius'] : [
    'desktop' => ['top' => 50, 'right' => 50, 'bottom' => 50, 'left' => 50, 'unit' => '%'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => '%'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => '%'],
];
$socialIconColor          = isset( $attrs['socialIconColor'] ) ? $attrs['socialIconColor'] : '#555555';
$socialIconHoverColor     = isset( $attrs['socialIconHoverColor'] ) ? $attrs['socialIconHoverColor'] : '#ffffff';
$socialIconBackgroundColor = isset( $attrs['socialIconBackgroundColor'] ) ? $attrs['socialIconBackgroundColor'] : '#f0f0f0';
$socialIconBackgroundHoverColor = isset( $attrs['socialIconBackgroundHoverColor'] ) ? $attrs['socialIconBackgroundHoverColor'] : '#4a6cf7';
$socialButtonSize         = isset( $attrs['socialButtonSize'] ) ? $attrs['socialButtonSize'] : [
    'desktop' => ['value' => 36, 'unit' => 'px'],
    'tablet'  => ['value' => 32, 'unit' => 'px'],
    'mobile'  => ['value' => 28, 'unit' => 'px'],
];
$socialIconSize           = isset( $attrs['socialIconSize'] ) ? $attrs['socialIconSize'] : [
    'desktop' => ['value' => 18, 'unit' => 'px'],
    'tablet'  => ['value' => 16, 'unit' => 'px'],
    'mobile'  => ['value' => 14, 'unit' => 'px'],
];
$socialIconSpacing        = isset( $attrs['socialIconSpacing'] ) ? $attrs['socialIconSpacing'] : [
    'desktop' => ['value' => 8, 'unit' => 'px'],
    'tablet'  => ['value' => 8, 'unit' => 'px'],
    'mobile'  => ['value' => 6, 'unit' => 'px'],
];
$socialIconBorderRadius   = isset( $attrs['socialIconBorderRadius'] ) ? $attrs['socialIconBorderRadius'] : [
    'desktop' => ['top' => 50, 'right' => 50, 'bottom' => 50, 'left' => 50, 'unit' => '%'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => '%'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => '%'],
];
$socialIconBorderStyle    = isset( $attrs['socialIconBorderStyle'] ) ? $attrs['socialIconBorderStyle'] : 'none';
$socialIconBorderWidth    = isset( $attrs['socialIconBorderWidth'] ) ? $attrs['socialIconBorderWidth'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$socialIconBorderColor    = isset( $attrs['socialIconBorderColor'] ) ? $attrs['socialIconBorderColor'] : '';
$socialIconBorderHoverColor = isset( $attrs['socialIconBorderHoverColor'] ) ? $attrs['socialIconBorderHoverColor'] : '';
$padding                  = isset( $attrs['padding'] ) ? $attrs['padding'] : [
    'desktop' => ['top' => 30, 'right' => 30, 'bottom' => 30, 'left' => 30, 'unit' => 'px'],
    'tablet'  => ['top' => 25, 'right' => 25, 'bottom' => 25, 'left' => 25, 'unit' => 'px'],
    'mobile'  => ['top' => 20, 'right' => 20, 'bottom' => 20, 'left' => 20, 'unit' => 'px'],
];
$margin                   = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$boxShadow                = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 5,
    'spread'     => 0,
    'position'   => 'outset',
];
$boxShadowHover           = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.15)',
    'horizontal' => 0,
    'vertical'   => 5,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
];
$borderWidth              = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'solid';
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$borderHoverColor         = isset( $attrs['borderHoverColor'] ) ? $attrs['borderHoverColor'] : '';
$borderRadius             = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$titleTypography          = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 22, 'tablet' => 20, 'mobile' => 18],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '600',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.4, 'tablet' => 1.3, 'mobile' => 1.2],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$contentTypography        = isset( $attrs['contentTypography'] ) ? $attrs['contentTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 16, 'tablet' => 15, 'mobile' => 14],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$displayAvatar            = isset( $attrs['displayAvatar'] ) ? $attrs['displayAvatar'] : true;
$displayName              = isset( $attrs['displayName'] ) ? $attrs['displayName'] : true;
$displayBio               = isset( $attrs['displayBio'] ) ? $attrs['displayBio'] : true;
$displaySocial            = isset( $attrs['displaySocial'] ) ? $attrs['displaySocial'] : true;

// CSS Output
ob_start();
?>
/* Author Box Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	display: flex;
	flex-direction: <?php echo $layout === 'vertical' ? 'column' : 'row'; ?>;
	align-items: <?php echo $layout === 'vertical' ? 'center' : 'flex-start'; ?>;
	<?php echo $layout === 'vertical' ? 'text-align: center;' : ''; ?>
    gap: <?php echo esc_attr($spacing['desktop']); ?>px;
	background-color: <?php echo esc_attr($backgroundColor); ?>;
	<?php if ($borderStyle && $borderStyle !== 'none') : ?>
    border-style: <?php echo esc_attr($borderStyle); ?>;
    border-color: <?php echo esc_attr($borderColor); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($borderWidth, 'border-width', 'desktop')); ?>
    <?php endif; ?>
    <?php echo esc_attr(digiblocks_get_dimensions($borderRadius, 'border-radius', 'desktop')); ?>
    <?php if ($boxShadow && $boxShadow['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($boxShadow)); ?>;
    <?php endif; ?>
    <?php echo esc_attr(digiblocks_get_dimensions($padding, 'padding', 'desktop')); ?>
    <?php echo esc_attr(digiblocks_get_dimensions($margin, 'margin', 'desktop')); ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover {
    <?php if (!empty($backgroundHoverColor)) : ?>
    background-color: <?php echo esc_attr($backgroundHoverColor); ?>;
    <?php endif; ?>
    
    <?php if (!empty($borderHoverColor)) : ?>
    border-color: <?php echo esc_attr($borderHoverColor); ?>;
    <?php endif; ?>
    
    <?php if ($boxShadowHover && $boxShadowHover['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($boxShadowHover)); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar {
    display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar img {
    width: <?php echo esc_attr($avatarSize['desktop']); ?>px;
    height: <?php echo esc_attr($avatarSize['desktop']); ?>px;
    <?php echo esc_attr(digiblocks_get_dimensions($avatarBorderRadius, 'border-radius', 'desktop')); ?>
    object-fit: cover;
    <?php if ($avatarBorderWidth['desktop']['top']) : ?>
    border: <?php echo esc_attr($avatarBorderWidth['desktop']['top'] . ($avatarBorderWidth['desktop']['unit'] ?? 'px')); ?> solid <?php echo esc_attr($avatarBorderColor); ?>;
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-author-avatar img {
    <?php if (!empty($avatarBorderHoverColor)) : ?>
    border-color: <?php echo esc_attr($avatarBorderHoverColor); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-content {
    flex: 1;
    <?php echo $layout === 'vertical' ? 'width: 100%;' : ''; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-name {
    color: <?php echo esc_attr($nameColor); ?>;
    margin-top: 0;
    margin-bottom: 0.3em;
    <?php if (!empty($titleTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($titleTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($titleTypography['fontSize']['desktop'] . ($titleTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($titleTypography['fontWeight']); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['fontStyle'])) : ?>
    font-style: <?php echo esc_attr($titleTypography['fontStyle']); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['textTransform'])) : ?>
    text-transform: <?php echo esc_attr($titleTypography['textTransform']); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['textDecoration'])) : ?>
    text-decoration: <?php echo esc_attr($titleTypography['textDecoration']); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['lineHeight']['desktop'])) : ?>
    line-height: <?php echo esc_attr($titleTypography['lineHeight']['desktop'] . ($titleTypography['lineHeightUnit'] ?: 'em')); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['letterSpacing']['desktop'])) : ?>
    letter-spacing: <?php echo esc_attr($titleTypography['letterSpacing']['desktop'] . ($titleTypography['letterSpacingUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    transition: color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?>:hover .digiblocks-author-name {
    <?php if (!empty($nameHoverColor)) : ?>
    color: <?php echo esc_attr($nameHoverColor); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-description {
    color: <?php echo esc_attr($descriptionColor); ?>;
    margin-top: 0;
    margin-bottom: 1em;
    <?php if (!empty($contentTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($contentTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($contentTypography['fontSize']['desktop'] . ($contentTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($contentTypography['fontWeight']); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['fontStyle'])) : ?>
    font-style: <?php echo esc_attr($contentTypography['fontStyle']); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['textTransform'])) : ?>
    text-transform: <?php echo esc_attr($contentTypography['textTransform']); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['textDecoration'])) : ?>
    text-decoration: <?php echo esc_attr($contentTypography['textDecoration']); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['lineHeight']['desktop'])) : ?>
    line-height: <?php echo esc_attr($contentTypography['lineHeight']['desktop'] . ($contentTypography['lineHeightUnit'] ?: 'em')); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['letterSpacing']['desktop'])) : ?>
    letter-spacing: <?php echo esc_attr($contentTypography['letterSpacing']['desktop'] . ($contentTypography['letterSpacingUnit'] ?: 'px')); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-social {
    display: flex;
    gap: <?php echo esc_attr($socialIconSpacing['desktop']['value'] . ($socialIconSpacing['desktop']['unit'] ?: 'px')); ?>;
    <?php echo $layout === 'vertical' ? 'justify-content: center;' : ''; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: <?php echo esc_attr($socialButtonSize['desktop']['value'] . ($socialButtonSize['desktop']['unit'] ?: 'px')); ?>;
    height: <?php echo esc_attr($socialButtonSize['desktop']['value'] . ($socialButtonSize['desktop']['unit'] ?: 'px')); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($socialIconBorderRadius, 'border-radius', 'desktop')); ?>
    background-color: <?php echo esc_attr($socialIconBackgroundColor); ?>;
    color: <?php echo esc_attr($socialIconColor); ?>;
    <?php if ($socialIconBorderStyle && $socialIconBorderStyle !== 'none') : ?>
    border-style: <?php echo esc_attr($socialIconBorderStyle); ?>;
    border-color: <?php echo esc_attr($socialIconBorderColor ?: 'transparent'); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($socialIconBorderWidth, 'border-width', 'desktop')); ?>
    <?php endif; ?>
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-social a span,
.<?php echo esc_attr( $id ); ?> .digiblocks-author-social a svg {
	display: flex;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-social a svg {
    width: <?php echo esc_attr($socialIconSize['desktop']['value'] . ($socialIconSize['desktop']['unit'] ?: 'px')); ?>;
    height: <?php echo esc_attr($socialIconSize['desktop']['value'] . ($socialIconSize['desktop']['unit'] ?: 'px')); ?>;
    fill: currentColor;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-author-social a:hover {
    background-color: <?php echo esc_attr($socialIconBackgroundHoverColor); ?>;
    color: <?php echo esc_attr($socialIconHoverColor); ?>;
    <?php if (!empty($socialIconBorderHoverColor)) : ?>
    border-color: <?php echo esc_attr($socialIconBorderHoverColor); ?>;
    <?php endif; ?>
    transform: translateY(-2px);
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		gap: <?php echo esc_attr($spacing['tablet']); ?>px;
        <?php echo esc_attr(digiblocks_get_dimensions($padding, 'padding', 'tablet')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($margin, 'margin', 'tablet')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderRadius, 'border-radius', 'tablet')); ?>
        <?php if ($borderStyle && $borderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderWidth, 'border-width', 'tablet')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar img {
		width: <?php echo esc_attr($avatarSize['tablet']); ?>px;
		height: <?php echo esc_attr($avatarSize['tablet']); ?>px;
        <?php echo esc_attr(digiblocks_get_dimensions($avatarBorderRadius, 'border-radius', 'tablet')); ?>
		<?php if ($avatarBorderWidth['tablet']['top']) : ?>
		border-width: <?php echo esc_attr($avatarBorderWidth['tablet']['top'] . ($avatarBorderWidth['tablet']['unit'] ?? 'px')); ?>;
		<?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-name {
        <?php if (!empty($titleTypography['fontSize']['tablet'])) : ?>
        font-size: <?php echo esc_attr($titleTypography['fontSize']['tablet'] . ($titleTypography['fontSizeUnit'] ?: 'px')); ?>;
        <?php endif; ?>
        <?php if (!empty($titleTypography['lineHeight']['tablet'])) : ?>
        line-height: <?php echo esc_attr($titleTypography['lineHeight']['tablet'] . ($titleTypography['lineHeightUnit'] ?: 'em')); ?>;
        <?php endif; ?>
        <?php if (!empty($titleTypography['letterSpacing']['tablet'])) : ?>
        letter-spacing: <?php echo esc_attr($titleTypography['letterSpacing']['tablet'] . ($titleTypography['letterSpacingUnit'] ?: 'px')); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-description {
        <?php if (!empty($contentTypography['fontSize']['tablet'])) : ?>
        font-size: <?php echo esc_attr($contentTypography['fontSize']['tablet'] . ($contentTypography['fontSizeUnit'] ?: 'px')); ?>;
        <?php endif; ?>
        <?php if (!empty($contentTypography['lineHeight']['tablet'])) : ?>
        line-height: <?php echo esc_attr($contentTypography['lineHeight']['tablet'] . ($contentTypography['lineHeightUnit'] ?: 'em')); ?>;
        <?php endif; ?>
        <?php if (!empty($contentTypography['letterSpacing']['tablet'])) : ?>
        letter-spacing: <?php echo esc_attr($contentTypography['letterSpacing']['tablet'] . ($contentTypography['letterSpacingUnit'] ?: 'px')); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-social {
        gap: <?php echo esc_attr($socialIconSpacing['tablet']['value'] . ($socialIconSpacing['tablet']['unit'] ?: 'px')); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-social a {
        width: <?php echo esc_attr($socialButtonSize['tablet']['value'] . ($socialButtonSize['tablet']['unit'] ?: 'px')); ?>;
        height: <?php echo esc_attr($socialButtonSize['tablet']['value'] . ($socialButtonSize['tablet']['unit'] ?: 'px')); ?>;
        <?php echo esc_attr(digiblocks_get_dimensions($socialIconBorderRadius, 'border-radius', 'tablet')); ?>
        <?php if ($socialIconBorderStyle && $socialIconBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($socialIconBorderWidth, 'border-width', 'tablet')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-social a svg {
        width: <?php echo esc_attr($socialIconSize['tablet']['value'] . ($socialIconSize['tablet']['unit'] ?: 'px')); ?>;
        height: <?php echo esc_attr($socialIconSize['tablet']['value'] . ($socialIconSize['tablet']['unit'] ?: 'px')); ?>;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		gap: <?php echo esc_attr($spacing['mobile']); ?>px;
        <?php if ($layout === 'horizontal') : ?>
        flex-direction: column;
        align-items: center;
        text-align: center;
        <?php endif; ?>
        <?php echo esc_attr(digiblocks_get_dimensions($padding, 'padding', 'mobile')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($margin, 'margin', 'mobile')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderRadius, 'border-radius', 'mobile')); ?>
        <?php if ($borderStyle && $borderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderWidth, 'border-width', 'mobile')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-avatar img {
		width: <?php echo esc_attr($avatarSize['mobile']); ?>px;
		height: <?php echo esc_attr($avatarSize['mobile']); ?>px;
        <?php echo esc_attr(digiblocks_get_dimensions($avatarBorderRadius, 'border-radius', 'mobile')); ?>
		<?php if ($avatarBorderWidth['mobile']['top']) : ?>
		border-width: <?php echo esc_attr($avatarBorderWidth['mobile']['top'] . ($avatarBorderWidth['mobile']['unit'] ?? 'px')); ?>;
		<?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-name {
        <?php if (!empty($titleTypography['fontSize']['mobile'])) : ?>
        font-size: <?php echo esc_attr($titleTypography['fontSize']['mobile'] . ($titleTypography['fontSizeUnit'] ?: 'px')); ?>;
        <?php endif; ?>
        <?php if (!empty($titleTypography['lineHeight']['mobile'])) : ?>
        line-height: <?php echo esc_attr($titleTypography['lineHeight']['mobile'] . ($titleTypography['lineHeightUnit'] ?: 'em')); ?>;
        <?php endif; ?>
        <?php if (!empty($titleTypography['letterSpacing']['mobile'])) : ?>
        letter-spacing: <?php echo esc_attr($titleTypography['letterSpacing']['mobile'] . ($titleTypography['letterSpacingUnit'] ?: 'px')); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-description {
        <?php if (!empty($contentTypography['fontSize']['mobile'])) : ?>
        font-size: <?php echo esc_attr($contentTypography['fontSize']['mobile'] . ($contentTypography['fontSizeUnit'] ?: 'px')); ?>;
        <?php endif; ?>
        <?php if (!empty($contentTypography['lineHeight']['mobile'])) : ?>
        line-height: <?php echo esc_attr($contentTypography['lineHeight']['mobile'] . ($contentTypography['lineHeightUnit'] ?: 'em')); ?>;
        <?php endif; ?>
        <?php if (!empty($contentTypography['letterSpacing']['mobile'])) : ?>
        letter-spacing: <?php echo esc_attr($contentTypography['letterSpacing']['mobile'] . ($contentTypography['letterSpacingUnit'] ?: 'px')); ?>;
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-social {
        gap: <?php echo esc_attr($socialIconSpacing['mobile']['value'] . ($socialIconSpacing['mobile']['unit'] ?: 'px')); ?>;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-social a {
        width: <?php echo esc_attr($socialButtonSize['mobile']['value'] . ($socialButtonSize['mobile']['unit'] ?: 'px')); ?>;
        height: <?php echo esc_attr($socialButtonSize['mobile']['value'] . ($socialButtonSize['mobile']['unit'] ?: 'px')); ?>;
        <?php echo esc_attr(digiblocks_get_dimensions($socialIconBorderRadius, 'border-radius', 'mobile')); ?>
        <?php if ($socialIconBorderStyle && $socialIconBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($socialIconBorderWidth, 'border-width', 'mobile')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-author-social a svg {
        width: <?php echo esc_attr($socialIconSize['mobile']['value'] . ($socialIconSize['mobile']['unit'] ?: 'px')); ?>;
        height: <?php echo esc_attr($socialIconSize['mobile']['value'] . ($socialIconSize['mobile']['unit'] ?: 'px')); ?>;
    }
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