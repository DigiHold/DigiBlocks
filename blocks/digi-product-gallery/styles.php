<?php
/**
 * DigiCommerce Product Gallery Block Styles
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id                         = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-product-gallery-' . uniqid();
$visibility                 = isset( $attrs['visibility'] ) ? $attrs['visibility'] : [
    'desktop' => false,
    'tablet'  => false,
    'mobile'  => false,
];
$thumbnailPosition          = isset( $attrs['thumbnailPosition'] ) ? $attrs['thumbnailPosition'] : 'bottom';
$enableLightbox             = isset( $attrs['enableLightbox'] ) ? $attrs['enableLightbox'] : true;
$thumbnailColumns           = isset( $attrs['thumbnailColumns'] ) ? $attrs['thumbnailColumns'] : [
    'desktop' => 4,
    'tablet'  => 3,
    'mobile'  => 2,
];
$mainImageBorderRadius      = isset( $attrs['mainImageBorderRadius'] ) ? $attrs['mainImageBorderRadius'] : [
    'desktop' => ['top' => 12, 'right' => 12, 'bottom' => 12, 'left' => 12, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$thumbnailBorderRadius      = isset( $attrs['thumbnailBorderRadius'] ) ? $attrs['thumbnailBorderRadius'] : [
    'desktop' => ['top' => 8, 'right' => 8, 'bottom' => 8, 'left' => 8, 'unit' => 'px'],
    'tablet'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
    'mobile'  => ['top' => '', 'right' => '', 'bottom' => '', 'left' => '', 'unit' => 'px'],
];
$mainImageShadow            = isset( $attrs['mainImageShadow'] ) ? $attrs['mainImageShadow'] : [
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.12)',
    'horizontal' => 0,
    'vertical'   => 8,
    'blur'       => 25,
    'spread'     => 0,
    'position'   => 'outset',
];
$mainImageShadowHover       = isset( $attrs['mainImageShadowHover'] ) ? $attrs['mainImageShadowHover'] : [
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.18)',
    'horizontal' => 0,
    'vertical'   => 15,
    'blur'       => 35,
    'spread'     => 0,
    'position'   => 'outset',
];
$thumbnailShadow            = isset( $attrs['thumbnailShadow'] ) ? $attrs['thumbnailShadow'] : [
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.08)',
    'horizontal' => 0,
    'vertical'   => 3,
    'blur'       => 10,
    'spread'     => 0,
    'position'   => 'outset',
];
$thumbnailShadowHover       = isset( $attrs['thumbnailShadowHover'] ) ? $attrs['thumbnailShadowHover'] : [
    'enable'     => true,
    'color'      => 'rgba(0, 0, 0, 0.15)',
    'horizontal' => 0,
    'vertical'   => 6,
    'blur'       => 15,
    'spread'     => 0,
    'position'   => 'outset',
];
$spacing                    = isset( $attrs['spacing'] ) ? $attrs['spacing'] : [
    'desktop' => 24,
    'tablet'  => 20,
    'mobile'  => 16,
];
$thumbnailSpacing           = isset( $attrs['thumbnailSpacing'] ) ? $attrs['thumbnailSpacing'] : [
    'desktop' => 12,
    'tablet'  => 10,
    'mobile'  => 8,
];
$padding                    = isset( $attrs['padding'] ) ? $attrs['padding'] : digiblocks_get_default_dimensions('px');
$margin                     = isset( $attrs['margin'] ) ? $attrs['margin'] : [
    'desktop' => ['top' => 0, 'right' => 0, 'bottom' => 32, 'left' => 0, 'unit' => 'px'],
    'tablet'  => ['top' => 0, 'right' => 0, 'bottom' => 28, 'left' => 0, 'unit' => 'px'],
    'mobile'  => ['top' => 0, 'right' => 0, 'bottom' => 24, 'left' => 0, 'unit' => 'px'],
];
$lightboxBackgroundColor    = isset( $attrs['lightboxBackgroundColor'] ) ? $attrs['lightboxBackgroundColor'] : 'rgba(0, 0, 0, 0.9)';

// CSS Output
ob_start();
?>
/* DigiCommerce Product Gallery Block - <?php echo esc_attr( $id ); ?> */
.<?php echo esc_attr( $id ); ?> {
	<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'desktop' ) ); ?>
	<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'desktop' ) ); ?>
    width: 100%;
}

/* Gallery Container */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery {
    display: flex;
	align-items: flex-start;
    flex-direction: <?php echo $thumbnailPosition === 'left' ? 'row' : 'column'; ?>;
    gap: <?php echo esc_attr( $spacing['desktop'] ); ?>px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left {
    flex-direction: row;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right {
    flex-direction: row-reverse;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-bottom {
    flex-direction: column;
}

/* Main Image */
.<?php echo esc_attr( $id ); ?> .digiblocks-main-image {
	width: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;
    cursor: <?php echo $enableLightbox ? 'zoom-in' : 'default'; ?>;
	<?php echo esc_attr( digiblocks_get_dimensions( $mainImageBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( $mainImageShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $mainImageShadow ) ); ?>;
    <?php endif; ?>
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-main-image:hover {
    <?php if ( $mainImageShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $mainImageShadowHover ) ); ?>;
    <?php endif; ?>
    transform: translateY(-4px);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-main-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: inherit;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-main-image:hover img {
    transform: scale(1.03);
}

/* Thumbnails Container */
.<?php echo esc_attr( $id ); ?> .digiblocks-thumbnails {
    display: grid;
    gap: <?php echo esc_attr( $thumbnailSpacing['desktop'] ); ?>px;
	width: 100%;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-bottom .digiblocks-thumbnails,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-top .digiblocks-thumbnails {
    grid-template-columns: repeat(<?php echo esc_attr( $thumbnailColumns['desktop'] ); ?>, 1fr);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails {
    display: flex;
    flex-direction: column;
    width: 160px;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,0.2) transparent;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails::-webkit-scrollbar,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails::-webkit-scrollbar {
    width: 6px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails::-webkit-scrollbar-track,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.05);
    border-radius: 3px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails::-webkit-scrollbar-thumb,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 3px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails::-webkit-scrollbar-thumb:hover,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.3);
}

/* Thumbnail Items */
.<?php echo esc_attr( $id ); ?> .digiblocks-thumbnail {
    position: relative;
    cursor: pointer;
    overflow: hidden;
	<?php echo esc_attr( digiblocks_get_dimensions( $thumbnailBorderRadius, 'border-radius', 'desktop' ) ); ?>
    <?php if ( $thumbnailShadow['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $thumbnailShadow ) ); ?>;
    <?php endif; ?>
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.7;
    aspect-ratio: 1;
    min-height: 80px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnail,
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnail {
    min-height: 100px;
    aspect-ratio: 1;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-thumbnail.active {
    opacity: 1;
    transform: scale(1.05);
    <?php if ( $thumbnailShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $thumbnailShadowHover ) ); ?>;
    <?php endif; ?>
}

.<?php echo esc_attr( $id ); ?> .digiblocks-thumbnail:hover {
    <?php if ( $thumbnailShadowHover['enable'] ) : ?>
    box-shadow: <?php echo esc_attr( digiblocks_get_box_shadow_css( $thumbnailShadowHover ) ); ?>;
    <?php endif; ?>
    opacity: 1;
    transform: scale(1.02);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: inherit;
}

/* Lightbox Icon */
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.8);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-main-image:hover .digiblocks-lightbox-icon {
    opacity: 1;
    transform: scale(1.1);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-icon svg {
    width: 22px;
    height: 22px;
    fill: #333;
}

/* Lightbox */
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: <?php echo esc_attr( $lightboxBackgroundColor ); ?>;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(4px);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox.active {
    opacity: 1;
    visibility: visible;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-close,
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-prev,
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-next {
    position: absolute;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.8);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-close {
    top: 24px;
    right: 24px;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-prev {
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-next {
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-close:hover,
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-prev:hover,
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-next:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-close:hover {
    transform: scale(1.1);
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-close svg,
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-prev svg,
.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-next svg {
    width: 24px;
    height: 24px;
    fill: #333;
}

.<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-counter {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.95);
    padding: 10px 20px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.8);
}

/* No images message */
.<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery-no-images {
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 12px;
    color: #666;
    font-style: italic;
}

/* Tablet styles */
@media (max-width: 991px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'tablet' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery {
        gap: <?php echo isset( $spacing['tablet'] ) ? esc_attr( $spacing['tablet'] ) : esc_attr( $spacing['desktop'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-thumbnails {
        gap: <?php echo isset( $thumbnailSpacing['tablet'] ) ? esc_attr( $thumbnailSpacing['tablet'] ) : esc_attr( $thumbnailSpacing['desktop'] ); ?>px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-bottom .digiblocks-thumbnails,
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-top .digiblocks-thumbnails {
        grid-template-columns: repeat(<?php echo isset( $thumbnailColumns['tablet'] ) ? esc_attr( $thumbnailColumns['tablet'] ) : esc_attr( $thumbnailColumns['desktop'] ); ?>, 1fr);
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-left .digiblocks-thumbnails,
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery.thumbnail-right .digiblocks-thumbnails {
        width: 130px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-main-image {
		<?php echo esc_attr( digiblocks_get_dimensions( $mainImageBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-thumbnail {
		<?php echo esc_attr( digiblocks_get_dimensions( $thumbnailBorderRadius, 'border-radius', 'tablet' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-close,
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-prev,
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-next {
        width: 48px;
        height: 48px;
    }
}

/* Mobile styles */
@media (max-width: 767px) {
    .<?php echo esc_attr( $id ); ?> {
		<?php echo esc_attr( digiblocks_get_dimensions( $padding, 'padding', 'mobile' ) ); ?>
		<?php echo esc_attr( digiblocks_get_dimensions( $margin, 'margin', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-product-gallery {
        gap: <?php echo isset( $spacing['mobile'] ) ? esc_attr( $spacing['mobile'] ) : esc_attr( $spacing['desktop'] ); ?>px;
        flex-direction: column !important;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-thumbnails {
        gap: <?php echo isset( $thumbnailSpacing['mobile'] ) ? esc_attr( $thumbnailSpacing['mobile'] ) : esc_attr( $thumbnailSpacing['desktop'] ); ?>px;
        grid-template-columns: repeat(<?php echo isset( $thumbnailColumns['mobile'] ) ? esc_attr( $thumbnailColumns['mobile'] ) : esc_attr( $thumbnailColumns['desktop'] ); ?>, 1fr) !important;
        width: 100% !important;
        max-height: none !important;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-main-image {
		<?php echo esc_attr( digiblocks_get_dimensions( $mainImageBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-thumbnail {
		<?php echo esc_attr( digiblocks_get_dimensions( $thumbnailBorderRadius, 'border-radius', 'mobile' ) ); ?>
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-prev,
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-next {
        left: 16px;
        right: 16px;
        width: 44px;
        height: 44px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-next {
        left: auto;
        right: 16px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-close {
        top: 16px;
        right: 16px;
        width: 44px;
        height: 44px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-counter {
        bottom: 16px;
        padding: 8px 16px;
        font-size: 13px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-icon {
        top: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
    }
    
    .<?php echo esc_attr( $id ); ?> .digiblocks-lightbox-icon svg {
        width: 18px;
        height: 18px;
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