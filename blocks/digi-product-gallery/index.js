/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiProductGalleryEdit from './edit';
import DigiProductGallerySave from './save';
import { getBlockActiveStatus, isDigiActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() ) {
	/**
	 * Register DigiCommerce Product Gallery block
	 */
	registerBlockType('digiblocks/digi-product-gallery', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-product-gallery'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-product-gallery'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-product-gallery'].description,
		keywords: [__('product', 'digiblocks'), __('gallery', 'digiblocks'), __('images', 'digiblocks'), __('digicommerce', 'digiblocks'), __('lightbox', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-product-gallery') ? true : false,
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
				default: 'large'
			},
			thumbnailSize: {
				type: 'string',
				default: 'medium'
			},
			mainImageBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			thumbnailBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			mainImageShadow: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.12)',
					horizontal: 0,
					vertical: 8,
					blur: 25,
					spread: 0,
					position: 'outset'
				}
			},
			mainImageShadowHover: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.18)',
					horizontal: 0,
					vertical: 15,
					blur: 35,
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
					vertical: 3,
					blur: 10,
					spread: 0,
					position: 'outset'
				}
			},
			thumbnailShadowHover: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.15)',
					horizontal: 0,
					vertical: 6,
					blur: 15,
					spread: 0,
					position: 'outset'
				}
			},
			spacing: {
				type: 'object',
				default: {
					desktop: 24,
					tablet: 20,
					mobile: 16
				}
			},
			thumbnailSpacing: {
				type: 'object',
				default: {
					desktop: 12,
					tablet: 10,
					mobile: 8
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
					desktop: { top: 0, right: 0, bottom: 32, left: 0, unit: 'px' },
					tablet: { top: 0, right: 0, bottom: 28, left: 0, unit: 'px' },
					mobile: { top: 0, right: 0, bottom: 24, left: 0, unit: 'px' }
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
		edit: DigiProductGalleryEdit,
		save: DigiProductGallerySave,
	});
}