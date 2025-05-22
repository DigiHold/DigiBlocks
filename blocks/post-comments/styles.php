<?php
/**
 * Post Comments Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                       = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-comments-' . uniqid();
$visibility               = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$showAvatars              = isset( $attrs['showAvatars'] ) ? $attrs['showAvatars'] : true;
$avatarSize               = isset( $attrs['avatarSize'] ) ? $attrs['avatarSize'] : [
    'desktop' => 50,
    'tablet'  => 40,
    'mobile'  => 30,
];
$nestedComments           = isset( $attrs['nestedComments'] ) ? $attrs['nestedComments'] : true;
$titleColor               = isset( $attrs['titleColor'] ) ? $attrs['titleColor'] : '#333333';
$linkColor                = isset( $attrs['linkColor'] ) ? $attrs['linkColor'] : '#4a6cf7';
$linkHoverColor           = isset( $attrs['linkHoverColor'] ) ? $attrs['linkHoverColor'] : '#333333';
$textColor                = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '#333333';
$metaColor                = isset( $attrs['metaColor'] ) ? $attrs['metaColor'] : '#666666';
$metaHoverColor           = isset( $attrs['metaHoverColor'] ) ? $attrs['metaHoverColor'] : '#4a6cf7';
$borderColor              = isset( $attrs['borderColor'] ) ? $attrs['borderColor'] : '#e0e0e0';
$backgroundColor          = isset( $attrs['backgroundColor'] ) ? $attrs['backgroundColor'] : '';
$commentBackgroundColor   = isset( $attrs['commentBackgroundColor'] ) ? $attrs['commentBackgroundColor'] : '#ecf0f1';
$threadedCommentsBackgroundColor = isset( $attrs['threadedCommentsBackgroundColor'] ) ? $attrs['threadedCommentsBackgroundColor'] : '#ffffff';
$replyButtonColor         = isset( $attrs['replyButtonColor'] ) ? $attrs['replyButtonColor'] : '#4a6cf7';
$replyButtonBgColor       = isset( $attrs['replyButtonBgColor'] ) ? $attrs['replyButtonBgColor'] : 'transparent';
$replyButtonHoverColor    = isset( $attrs['replyButtonHoverColor'] ) ? $attrs['replyButtonHoverColor'] : '#3a5ce5';
$replyButtonBgHoverColor  = isset( $attrs['replyButtonBgHoverColor'] ) ? $attrs['replyButtonBgHoverColor'] : 'transparent';
$formBackgroundColor      = isset( $attrs['formBackgroundColor'] ) ? $attrs['formBackgroundColor'] : '#ecf0f1';
$formInputColor           = isset( $attrs['formInputColor'] ) ? $attrs['formInputColor'] : '#333333';
$formInputBgColor         = isset( $attrs['formInputBgColor'] ) ? $attrs['formInputBgColor'] : '#ffffff';
$formInputBorderColor     = isset( $attrs['formInputBorderColor'] ) ? $attrs['formInputBorderColor'] : '#d1d5db';
$formInputFocusBorderColor = isset( $attrs['formInputFocusBorderColor'] ) ? $attrs['formInputFocusBorderColor'] : '#4a6cf7';
$submitButtonTextColor    = isset( $attrs['submitButtonTextColor'] ) ? $attrs['submitButtonTextColor'] : '#ffffff';
$submitButtonBgColor      = isset( $attrs['submitButtonBgColor'] ) ? $attrs['submitButtonBgColor'] : '#4a6cf7';
$submitButtonTextHoverColor = isset( $attrs['submitButtonTextHoverColor'] ) ? $attrs['submitButtonTextHoverColor'] : '#ffffff';
$submitButtonBgHoverColor = isset( $attrs['submitButtonBgHoverColor'] ) ? $attrs['submitButtonBgHoverColor'] : '#3a5ce5';
$padding                  = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                   = isset( $attrs['margin'] ) ? $attrs['margin'] : digiblocks_get_default_dimensions('px');
$avatarRadius             = isset( $attrs['avatarRadius'] ) ? $attrs['avatarRadius'] : [
    'desktop' => ['top' => 50, 'right' => 50, 'bottom' => 50, 'left' => 50, 'unit' => '%'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => '%'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => '%'],
];
$formBorderRadius         = isset( $attrs['formBorderRadius'] ) ? $attrs['formBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$buttonBorderRadius       = isset( $attrs['buttonBorderRadius'] ) ? $attrs['buttonBorderRadius'] : [
    'desktop' => ['top' => 4, 'right' => 4, 'bottom' => 4, 'left' => 4, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$formPadding              = isset( $attrs['formPadding'] ) ? $attrs['formPadding'] : [
    'desktop' => ['top' => 30, 'right' => 30, 'bottom' => 30, 'left' => 30, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$buttonPadding            = isset( $attrs['buttonPadding'] ) ? $attrs['buttonPadding'] : [
    'desktop' => ['top' => 8, 'right' => 16, 'bottom' => 8, 'left' => 16, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$titleTypography          = isset( $attrs['titleTypography'] ) ? $attrs['titleTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 24, 'tablet' => 22, 'mobile' => 20],
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
$textTypography           = isset( $attrs['textTypography'] ) ? $attrs['textTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => 'normal',
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
    'lineHeight'        => ['desktop' => 1.6, 'tablet' => 1.5, 'mobile' => 1.4],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$buttonTypography         = isset( $attrs['buttonTypography'] ) ? $attrs['buttonTypography'] : [
    'fontFamily'        => '',
    'fontSize'          => ['desktop' => 14, 'tablet' => 13, 'mobile' => 12],
    'fontSizeUnit'      => 'px',
    'fontWeight'        => '500',
    'fontStyle'         => 'normal',
    'textTransform'     => '',
    'textDecoration'    => '',
    'lineHeight'        => ['desktop' => 1.5, 'tablet' => 1.4, 'mobile' => 1.3],
    'lineHeightUnit'    => 'em',
    'letterSpacing'     => ['desktop' => 0, 'tablet' => 0, 'mobile' => 0],
    'letterSpacingUnit' => 'px',
];
$animation                = isset( $attrs['animation'] ) ? $attrs['animation'] : 'none';
$boxShadow                = isset( $attrs['boxShadow'] ) ? $attrs['boxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$boxShadowHover           = isset( $attrs['boxShadowHover'] ) ? $attrs['boxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 5,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
];
$commentBoxShadow         = isset( $attrs['commentBoxShadow'] ) ? $attrs['commentBoxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 5,
    'spread'     => 0,
    'position'   => 'outset',
];
$commentBoxShadowHover    = isset( $attrs['commentBoxShadowHover'] ) ? $attrs['commentBoxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 5,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
];
$threadedCommentBoxShadow = isset( $attrs['threadedCommentBoxShadow'] ) ? $attrs['threadedCommentBoxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$threadedCommentBoxShadowHover = isset( $attrs['threadedCommentBoxShadowHover'] ) ? $attrs['threadedCommentBoxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 5,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
];
$formBoxShadow            = isset( $attrs['formBoxShadow'] ) ? $attrs['formBoxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 5,
    'spread'     => 0,
    'position'   => 'outset',
];
$formBoxShadowHover       = isset( $attrs['formBoxShadowHover'] ) ? $attrs['formBoxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 5,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
];
$buttonBoxShadow          = isset( $attrs['buttonBoxShadow'] ) ? $attrs['buttonBoxShadow'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.1)',
    'horizontal' => 0,
    'vertical'   => 0,
    'blur'       => 0,
    'spread'     => 0,
    'position'   => 'outset',
];
$buttonBoxShadowHover     = isset( $attrs['buttonBoxShadowHover'] ) ? $attrs['buttonBoxShadowHover'] : [
    'enable'     => false,
    'color'      => 'rgba(0, 0, 0, 0.2)',
    'horizontal' => 0,
    'vertical'   => 2,
    'blur'       => 5,
    'spread'     => 0,
    'position'   => 'outset',
];
$borderRadius             = isset( $attrs['borderRadius'] ) ? $attrs['borderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderWidth              = isset( $attrs['borderWidth'] ) ? $attrs['borderWidth'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$borderStyle              = isset( $attrs['borderStyle'] ) ? $attrs['borderStyle'] : 'none';
$commentBorderRadius      = isset( $attrs['commentBorderRadius'] ) ? $attrs['commentBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$commentBorderWidth       = isset( $attrs['commentBorderWidth'] ) ? $attrs['commentBorderWidth'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$commentBorderStyle       = isset( $attrs['commentBorderStyle'] ) ? $attrs['commentBorderStyle'] : 'solid';
$threadedCommentBorderRadius = isset( $attrs['threadedCommentBorderRadius'] ) ? $attrs['threadedCommentBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$threadedCommentBorderWidth = isset( $attrs['threadedCommentBorderWidth'] ) ? $attrs['threadedCommentBorderWidth'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$threadedCommentBorderStyle = isset( $attrs['threadedCommentBorderStyle'] ) ? $attrs['threadedCommentBorderStyle'] : 'solid';
$formBorderWidth          = isset( $attrs['formBorderWidth'] ) ? $attrs['formBorderWidth'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$formBorderStyle          = isset( $attrs['formBorderStyle'] ) ? $attrs['formBorderStyle'] : 'solid';
$buttonBorderWidth        = isset( $attrs['buttonBorderWidth'] ) ? $attrs['buttonBorderWidth'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 0, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$buttonBorderStyle        = isset( $attrs['buttonBorderStyle'] ) ? $attrs['buttonBorderStyle'] : 'none';
$buttonBorderColor        = isset( $attrs['buttonBorderColor'] ) ? $attrs['buttonBorderColor'] : '#4a6cf7';
$buttonBorderHoverColor   = isset( $attrs['buttonBorderHoverColor'] ) ? $attrs['buttonBorderHoverColor'] : '#3a5ce5';

// CSS Output
ob_start();
?>
/* Post Comments Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
    <?php echo esc_attr(digiblocks_get_dimensions($padding, 'padding', 'desktop')); ?>
    <?php echo esc_attr(digiblocks_get_dimensions($margin, 'margin', 'desktop')); ?>
    width: 100%;
    <?php if (!empty($backgroundColor)) : ?>
    background-color: <?php echo esc_attr($backgroundColor); ?>;
    <?php endif; ?>
    <?php if ($borderStyle !== 'none') : ?>
    border-style: <?php echo esc_attr($borderStyle); ?>;
    border-color: <?php echo esc_attr($borderColor); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($borderWidth, 'border-width', 'desktop')); ?>
    <?php endif; ?>
    <?php echo esc_attr(digiblocks_get_dimensions($borderRadius, 'border-radius', 'desktop')); ?>
    <?php if ($boxShadow && $boxShadow['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($boxShadow)); ?>;
	transition: all 0.3s ease;
    <?php endif; ?>
}

<?php if ($boxShadowHover && $boxShadowHover['enable']) : ?>
.<?php echo esc_attr( $id ); ?>:hover {
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($boxShadowHover)); ?>;
}
<?php endif; ?>

/* Comments Title */
.<?php echo esc_attr( $id ); ?> .digiblocks-comments-title,
.<?php echo esc_attr( $id ); ?> .comment-reply-title {
    color: <?php echo esc_attr($titleColor); ?>;
    margin: 0 0 1.5rem;
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
}

/* Comments List */
.<?php echo esc_attr( $id ); ?> .digiblocks-comments-list,
.<?php echo esc_attr( $id ); ?> .comment-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Comment Item */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment,
.<?php echo esc_attr( $id ); ?> .comment,
.<?php echo esc_attr( $id ); ?> .comment-body {
    margin-bottom: 1.5rem;
    <?php if (!empty($commentBackgroundColor)) : ?>
    background-color: <?php echo esc_attr($commentBackgroundColor); ?>;
    <?php endif; ?>
    <?php if ($commentBorderStyle !== 'none') : ?>
    border-style: <?php echo esc_attr($commentBorderStyle); ?>;
    border-color: <?php echo esc_attr($borderColor); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($commentBorderWidth, 'border-width', 'desktop')); ?>
    <?php endif; ?>
    <?php echo esc_attr(digiblocks_get_dimensions($commentBorderRadius, 'border-radius', 'desktop')); ?>
    <?php if ($commentBoxShadow && $commentBoxShadow['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($commentBoxShadow)); ?>;
	transition: all 0.3s ease;
    <?php endif; ?>
    padding: 1.5rem;
}


<?php if ($commentBoxShadowHover && $commentBoxShadowHover['enable']) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-comment:hover,
.<?php echo esc_attr( $id ); ?> .comment:hover,
.<?php echo esc_attr( $id ); ?> .comment-body:hover {
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($commentBoxShadowHover)); ?>;
}
<?php endif; ?>

/* Nested Comments */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-children,
.<?php echo esc_attr( $id ); ?> .children {
    margin-top: 1.5rem;
    margin-left: 2.5rem;
    list-style: none;
    padding: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-children .digiblocks-comment,
.<?php echo esc_attr( $id ); ?> .children .comment,
.<?php echo esc_attr( $id ); ?> .children .comment-body {
    <?php if (!empty($threadedCommentsBackgroundColor)) : ?>
    background-color: <?php echo esc_attr($threadedCommentsBackgroundColor); ?>;
    <?php endif; ?>
    <?php if ($threadedCommentBorderStyle !== 'none') : ?>
    border-style: <?php echo esc_attr($threadedCommentBorderStyle); ?>;
    border-color: <?php echo esc_attr($borderColor); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($threadedCommentBorderWidth, 'border-width', 'desktop')); ?>
    <?php endif; ?>
    <?php echo esc_attr(digiblocks_get_dimensions($threadedCommentBorderRadius, 'border-radius', 'desktop')); ?>
    <?php if ($threadedCommentBoxShadow && $threadedCommentBoxShadow['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($threadedCommentBoxShadow)); ?>;
	transition: all 0.3s ease;
    <?php endif; ?>
}

<?php if ($threadedCommentBoxShadowHover && $threadedCommentBoxShadowHover['enable']) : ?>
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-children .digiblocks-comment:hover,
.<?php echo esc_attr( $id ); ?> .children .comment:hover,
.<?php echo esc_attr( $id ); ?> .children .comment-body:hover {
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($threadedCommentBoxShadowHover)); ?>;
}
<?php endif; ?>

/* Comment Header */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-header,
.<?php echo esc_attr( $id ); ?> .comment-meta {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    gap: 1rem;
}

/* Comment Avatar */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-avatar,
.<?php echo esc_attr( $id ); ?> .comment-author .avatar {
    flex-shrink: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-avatar img,
.<?php echo esc_attr( $id ); ?> .comment-author .avatar {
    width: <?php echo esc_attr($avatarSize['desktop']); ?>px;
    height: <?php echo esc_attr($avatarSize['desktop']); ?>px;
    <?php echo esc_attr(digiblocks_get_dimensions($avatarRadius, 'border-radius', 'desktop')); ?>
    object-fit: cover;
}

/* Comment Meta */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-meta,
.<?php echo esc_attr( $id ); ?> .comment-metadata {
    flex-grow: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-author,
.<?php echo esc_attr( $id ); ?> .comment-author cite {
    margin: 0 0 0.25rem;
    color: <?php echo esc_attr($textColor); ?>;
    <?php if (!empty($contentTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($contentTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($contentTypography['fontSize']['desktop'] . ($contentTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($contentTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($contentTypography['fontWeight']); ?>;
    <?php endif; ?>
    font-weight: bold;
    font-style: normal;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-author a {
    color: <?php echo esc_attr($linkColor); ?>;
	text-decoration: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-author a:hover {
    color: <?php echo esc_attr($linkHoverColor); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-date,
.<?php echo esc_attr( $id ); ?> .comment-metadata a {
    font-size: 0.875em;
    color: <?php echo esc_attr($metaColor); ?>;
    <?php if (!empty($textTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($textTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($textTypography['fontSize']['desktop'] . ($textTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($textTypography['fontWeight']); ?>;
    <?php endif; ?>
    text-decoration: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-date a {
    color: <?php echo esc_attr($metaColor); ?>;
	text-decoration: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-date a:hover,
.<?php echo esc_attr( $id ); ?> .comment-metadata a:hover {
    color: <?php echo esc_attr($metaHoverColor); ?>;
}

/* Comment Content */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-content,
.<?php echo esc_attr( $id ); ?> .comment-content {
    color: <?php echo esc_attr($textColor); ?>;
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
    <?php if (!empty($contentTypography['lineHeight']['desktop'])) : ?>
    line-height: <?php echo esc_attr($contentTypography['lineHeight']['desktop'] . ($contentTypography['lineHeightUnit'] ?: 'em')); ?>;
    <?php endif; ?>
    margin-bottom: 1rem;
}

/* Comment awaiting moderation */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-awaiting-moderation,
.<?php echo esc_attr( $id ); ?> .comment-awaiting-moderation {
    margin: 0 0 1rem;
    color: #856404;
    background-color: #fff3cd;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-style: italic;
}

/* Comment Reply Link */
.<?php echo esc_attr( $id ); ?> .digiblocks-comment-reply,
.<?php echo esc_attr( $id ); ?> .comment-reply {
    text-align: right;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-reply-link,
.<?php echo esc_attr( $id ); ?> .comment-reply-link {
    display: inline-block;
    color: <?php echo esc_attr($replyButtonColor); ?>;
    background-color: <?php echo esc_attr($replyButtonBgColor); ?>;
    <?php if (!empty($buttonTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($buttonTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($buttonTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($buttonTypography['fontSize']['desktop'] . ($buttonTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($buttonTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($buttonTypography['fontWeight']); ?>;
    <?php endif; ?>
    <?php if ($buttonBorderStyle !== 'none') : ?>
    border-style: <?php echo esc_attr($buttonBorderStyle); ?>;
    border-color: <?php echo esc_attr($buttonBorderColor); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($buttonBorderWidth, 'border-width', 'desktop')); ?>
    <?php endif; ?>
    <?php echo esc_attr(digiblocks_get_dimensions($buttonBorderRadius, 'border-radius', 'desktop')); ?>
    <?php echo esc_attr(digiblocks_get_dimensions($buttonPadding, 'padding', 'desktop')); ?>
    <?php if ($buttonBoxShadow && $buttonBoxShadow['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($buttonBoxShadow)); ?>;
    <?php endif; ?>
    text-decoration: none;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-reply-link:hover,
.<?php echo esc_attr( $id ); ?> .comment-reply-link:hover {
    color: <?php echo esc_attr($replyButtonHoverColor); ?>;
    background-color: <?php echo esc_attr($replyButtonBgHoverColor); ?>;
    <?php if ($buttonBorderStyle !== 'none') : ?>
    border-color: <?php echo esc_attr($buttonBorderHoverColor); ?>;
    <?php endif; ?>
    <?php if ($buttonBoxShadowHover && $buttonBoxShadowHover['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($buttonBoxShadowHover)); ?>;
    <?php endif; ?>
}

/* Comment Form */
.<?php echo esc_attr( $id ); ?> #respond {
    margin: 2rem 0;
    background-color: <?php echo esc_attr($formBackgroundColor); ?>;
    <?php if ($formBorderStyle !== 'none') : ?>
    border-style: <?php echo esc_attr($formBorderStyle); ?>;
    border-color: <?php echo esc_attr($borderColor); ?>;
    <?php echo esc_attr(digiblocks_get_dimensions($formBorderWidth, 'border-width', 'desktop')); ?>
    <?php endif; ?>
    <?php echo esc_attr(digiblocks_get_dimensions($formBorderRadius, 'border-radius', 'desktop')); ?>
    <?php echo esc_attr(digiblocks_get_dimensions($formPadding, 'padding', 'desktop')); ?>
    <?php if ($formBoxShadow && $formBoxShadow['enable']) : ?>
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($formBoxShadow)); ?>;
	transition: all 0.3s ease;
    <?php endif; ?>
}

<?php if ($formBoxShadowHover && $formBoxShadowHover['enable']) : ?>
.<?php echo esc_attr( $id ); ?> #respond:hover {
    box-shadow: <?php echo esc_attr(digiblocks_get_box_shadow_css($formBoxShadowHover)); ?>;
}
<?php endif; ?>

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-form #respond {
    margin-bottom: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comment-form-title,
.<?php echo esc_attr( $id ); ?> .comment-reply-title {
    margin-top: 0;
    margin-bottom: 1rem;
    color: <?php echo esc_attr($titleColor); ?>;
    <?php if (!empty($titleTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($titleTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($titleTypography['fontSize']['desktop'] . ($titleTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($titleTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($titleTypography['fontWeight']); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-row,
.<?php echo esc_attr( $id ); ?> .comment-form p {
    margin-bottom: 1rem;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-label,
.<?php echo esc_attr( $id ); ?> .comment-form label {
    display: block;
    margin-bottom: 0.5rem;
    color: <?php echo esc_attr($textColor); ?>;
    <?php if (!empty($textTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($textTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($textTypography['fontSize']['desktop'] . ($textTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($textTypography['fontWeight']); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .comment-form .comment-form-cookies-consent label {
	margin: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-input,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-textarea,
.<?php echo esc_attr( $id ); ?> .comment-form input[type="text"],
.<?php echo esc_attr( $id ); ?> .comment-form input[type="email"],
.<?php echo esc_attr( $id ); ?> .comment-form input[type="url"],
.<?php echo esc_attr( $id ); ?> .comment-form textarea {
    width: 100%;
    padding: 0.75rem;
    color: <?php echo esc_attr($formInputColor); ?>;
    background-color: <?php echo esc_attr($formInputBgColor); ?>;
    border: 1px solid <?php echo esc_attr($formInputBorderColor); ?>;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    transition: border-color 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-input:focus,
.<?php echo esc_attr( $id ); ?> .digiblocks-form-textarea:focus,
.<?php echo esc_attr( $id ); ?> .comment-form input[type="text"]:focus,
.<?php echo esc_attr( $id ); ?> .comment-form input[type="email"]:focus,
.<?php echo esc_attr( $id ); ?> .comment-form input[type="url"]:focus,
.<?php echo esc_attr( $id ); ?> .comment-form textarea:focus {
    outline: none;
    border-color: <?php echo esc_attr($formInputFocusBorderColor); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-checkbox,
.<?php echo esc_attr( $id ); ?> .comment-form .comment-form-cookies-consent {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-checkbox-input,
.<?php echo esc_attr( $id ); ?> .comment-form .comment-form-cookies-consent input {
    margin: 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-submit,
.<?php echo esc_attr( $id ); ?> .comment-form .submit {
    margin-top: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background-color: <?php echo esc_attr($submitButtonBgColor); ?>;
    color: <?php echo esc_attr($submitButtonTextColor); ?>;
    <?php if (!empty($buttonTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($buttonTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($buttonTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($buttonTypography['fontSize']['desktop'] . ($buttonTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($buttonTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($buttonTypography['fontWeight']); ?>;
    <?php endif; ?>
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-submit:hover,
.<?php echo esc_attr( $id ); ?> .comment-form .submit:hover {
    background-color: <?php echo esc_attr($submitButtonBgHoverColor); ?>;
    color: <?php echo esc_attr($submitButtonTextHoverColor); ?>;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-form-cancel-reply,
.<?php echo esc_attr( $id ); ?> #cancel-comment-reply-link {
    margin-left: 1rem;
    color: <?php echo esc_attr($metaColor); ?>;
    text-decoration: none;
    <?php if (!empty($textTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($textTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($textTypography['fontSize']['desktop'] . ($textTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($textTypography['fontWeight']); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logged-in-as,
.<?php echo esc_attr( $id ); ?> .logged-in-as {
    margin-bottom: 1rem;
    font-style: italic;
    color: <?php echo esc_attr($metaColor); ?>;
    <?php if (!empty($textTypography['fontFamily'])) : ?>
    font-family: <?php echo esc_attr($textTypography['fontFamily']); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontSize']['desktop'])) : ?>
    font-size: <?php echo esc_attr($textTypography['fontSize']['desktop'] . ($textTypography['fontSizeUnit'] ?: 'px')); ?>;
    <?php endif; ?>
    <?php if (!empty($textTypography['fontWeight'])) : ?>
    font-weight: <?php echo esc_attr($textTypography['fontWeight']); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logged-in-as a,
.<?php echo esc_attr( $id ); ?> .logged-in-as a {
    color: <?php echo esc_attr($metaColor); ?>;
    text-decoration: underline;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-logged-in-as a:hover,
.<?php echo esc_attr( $id ); ?> .logged-in-as a:hover {
    color: <?php echo esc_attr($metaHoverColor); ?>;
}

/* Comments Navigation */
.<?php echo esc_attr( $id ); ?> .digiblocks-comments-navigation,
.<?php echo esc_attr( $id ); ?> .comment-navigation {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comments-navigation a,
.<?php echo esc_attr( $id ); ?> .comment-navigation a {
    color: <?php echo esc_attr($metaColor); ?>;
    text-decoration: none;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-comments-navigation a:hover,
.<?php echo esc_attr( $id ); ?> .comment-navigation a:hover {
    color: <?php echo esc_attr($metaHoverColor); ?>;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr(digiblocks_get_dimensions($padding, 'padding', 'tablet')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($margin, 'margin', 'tablet')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderRadius, 'border-radius', 'tablet')); ?>
        <?php if ($borderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderWidth, 'border-width', 'tablet')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment,
    .<?php echo esc_attr( $id ); ?> .comment,
    .<?php echo esc_attr( $id ); ?> .comment-body {
        <?php echo esc_attr(digiblocks_get_dimensions($commentBorderRadius, 'border-radius', 'tablet')); ?>
        <?php if ($commentBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($commentBorderWidth, 'border-width', 'tablet')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-children .digiblocks-comment,
    .<?php echo esc_attr( $id ); ?> .children .comment,
    .<?php echo esc_attr( $id ); ?> .children .comment-body {
        <?php echo esc_attr(digiblocks_get_dimensions($threadedCommentBorderRadius, 'border-radius', 'tablet')); ?>
        <?php if ($threadedCommentBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($threadedCommentBorderWidth, 'border-width', 'tablet')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-avatar img,
    .<?php echo esc_attr( $id ); ?> .comment-author .avatar {
        width: <?php echo esc_attr($avatarSize['tablet']); ?>px;
        height: <?php echo esc_attr($avatarSize['tablet']); ?>px;
        <?php echo esc_attr(digiblocks_get_dimensions($avatarRadius, 'border-radius', 'tablet')); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comments-title,
    .<?php echo esc_attr( $id ); ?> .comment-reply-title {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-content,
    .<?php echo esc_attr( $id ); ?> .comment-content {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-reply-link,
    .<?php echo esc_attr( $id ); ?> .comment-reply-link {
        <?php if (!empty($buttonTypography['fontSize']['tablet'])) : ?>
        font-size: <?php echo esc_attr($buttonTypography['fontSize']['tablet'] . ($buttonTypography['fontSizeUnit'] ?: 'px')); ?>;
        <?php endif; ?>
        <?php echo esc_attr(digiblocks_get_dimensions($buttonBorderRadius, 'border-radius', 'tablet')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($buttonPadding, 'padding', 'tablet')); ?>
        <?php if ($buttonBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($buttonBorderWidth, 'border-width', 'tablet')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> #respond {
        <?php echo esc_attr(digiblocks_get_dimensions($formBorderRadius, 'border-radius', 'tablet')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($formPadding, 'padding', 'tablet')); ?>
        <?php if ($formBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($formBorderWidth, 'border-width', 'tablet')); ?>
        <?php endif; ?>
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
        <?php echo esc_attr(digiblocks_get_dimensions($padding, 'padding', 'mobile')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($margin, 'margin', 'mobile')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderRadius, 'border-radius', 'mobile')); ?>
        <?php if ($borderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($borderWidth, 'border-width', 'mobile')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment,
    .<?php echo esc_attr( $id ); ?> .comment,
    .<?php echo esc_attr( $id ); ?> .comment-body {
        <?php echo esc_attr(digiblocks_get_dimensions($commentBorderRadius, 'border-radius', 'mobile')); ?>
        <?php if ($commentBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($commentBorderWidth, 'border-width', 'mobile')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-children .digiblocks-comment,
    .<?php echo esc_attr( $id ); ?> .children .comment,
    .<?php echo esc_attr( $id ); ?> .children .comment-body {
        <?php echo esc_attr(digiblocks_get_dimensions($threadedCommentBorderRadius, 'border-radius', 'mobile')); ?>
        <?php if ($threadedCommentBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($threadedCommentBorderWidth, 'border-width', 'mobile')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-avatar img,
    .<?php echo esc_attr( $id ); ?> .comment-author .avatar {
        width: <?php echo esc_attr($avatarSize['mobile']); ?>px;
        height: <?php echo esc_attr($avatarSize['mobile']); ?>px;
        <?php echo esc_attr(digiblocks_get_dimensions($avatarRadius, 'border-radius', 'mobile')); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comments-title,
    .<?php echo esc_attr( $id ); ?> .comment-reply-title {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-content,
    .<?php echo esc_attr( $id ); ?> .comment-content {
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
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-reply-link,
    .<?php echo esc_attr( $id ); ?> .comment-reply-link {
        <?php if (!empty($buttonTypography['fontSize']['mobile'])) : ?>
        font-size: <?php echo esc_attr($buttonTypography['fontSize']['mobile'] . ($buttonTypography['fontSizeUnit'] ?: 'px')); ?>;
        <?php endif; ?>
        <?php echo esc_attr(digiblocks_get_dimensions($buttonBorderRadius, 'border-radius', 'mobile')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($buttonPadding, 'padding', 'mobile')); ?>
        <?php if ($buttonBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($buttonBorderWidth, 'border-width', 'mobile')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> #respond {
        <?php echo esc_attr(digiblocks_get_dimensions($formBorderRadius, 'border-radius', 'mobile')); ?>
        <?php echo esc_attr(digiblocks_get_dimensions($formPadding, 'padding', 'mobile')); ?>
        <?php if ($formBorderStyle !== 'none') : ?>
        <?php echo esc_attr(digiblocks_get_dimensions($formBorderWidth, 'border-width', 'mobile')); ?>
        <?php endif; ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-comment-children,
    .<?php echo esc_attr( $id ); ?> .children {
        margin-left: 1rem;
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