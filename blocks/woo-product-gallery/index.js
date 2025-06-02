/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import WooProductGalleryEdit from './edit';
import WooProductGallerySave from './save';
import { getBlockActiveStatus, isWooActive } from '../../resources/js/blocks/utils.js';

if ( isWooActive() ) {
	/**
	 * Register Product Gallery block
	 */
	registerBlockType('digiblocks/woo-product-gallery', {
		apiVersion: 2,
		title: digiBlocksData.blocks['woo-product-gallery'].title,
		category: 'digiblocks-woocommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['woo-product-gallery'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['woo-product-gallery'].description,
		keywords: [__('product', 'digiblocks'), __('gallery', 'digiblocks'), __('images', 'digiblocks'), __('woocommerce', 'digiblocks'), __('lightbox', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('woo-product-gallery') ? true : false,
			html: false,
			className: false,
			customClassName: false,
			anchor: false,
		},
		attributes: {
			id: {
				type: 'string',
				default: '',
			},
			anchor: {
				type: 'string',
				default: ''
			},
			visibility: {
				type: 'object',
				default: {
					desktop: false,
					tablet: false,
					mobile: false
				}
			},
			customClasses: {
				type: 'string',
				default: ''
			},
			thumbnailPosition: {
				type: 'string',
				default: 'bottom'
			},
			enableLightbox: {
				type: 'boolean',
				default: true
			},
			galleryLayout: {
				type: 'string',
				default: 'grid'
			},
			thumbnailColumns: {
				type: 'object',
				default: {
					desktop: 4,
					tablet: 3,
					mobile: 2
				}
			},
			imageSize: {
				type: 'string',
				default: 'woocommerce_single'
			},
			thumbnailSize: {
				type: 'string',
				default: 'woocommerce_gallery_thumbnail'
			},
			mainImageBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			thumbnailBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 6, right: 6, bottom: 6, left: 6, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			mainImageShadow: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.1)',
					horizontal: 0,
					vertical: 4,
					blur: 20,
					spread: 0,
					position: 'outset'
				}
			},
			mainImageShadowHover: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.15)',
					horizontal: 0,
					vertical: 8,
					blur: 30,
					spread: 0,
					position: 'outset'
				}
			},
			thumbnailShadow: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.08)',
					horizontal: 0,
					vertical: 2,
					blur: 8,
					spread: 0,
					position: 'outset'
				}
			},
			thumbnailShadowHover: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.12)',
					horizontal: 0,
					vertical: 4,
					blur: 12,
					spread: 0,
					position: 'outset'
				}
			},
			spacing: {
				type: 'object',
				default: {
					desktop: 20,
					tablet: 15,
					mobile: 10
				}
			},
			thumbnailSpacing: {
				type: 'object',
				default: {
					desktop: 10,
					tablet: 8,
					mobile: 6
				}
			},
			padding: {
				type: 'object',
				default: {
					desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			margin: {
				type: 'object',
				default: {
					desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
					tablet: { top: 0, right: 0, bottom: 25, left: 0, unit: 'px' },
					mobile: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' }
				}
			},
			lightboxBackgroundColor: {
				type: 'string',
				default: 'rgba(0, 0, 0, 0.9)'
			},
			animation: {
				type: 'string',
				default: 'none'
			},
		},
		example: {
			attributes: {
				thumbnailPosition: 'bottom',
				enableLightbox: true,
				thumbnailColumns: {
					desktop: 4,
					tablet: 3,
					mobile: 2
				}
			},
			viewportWidth: 800
		},
		edit: WooProductGalleryEdit,
		save: WooProductGallerySave,
	});
}