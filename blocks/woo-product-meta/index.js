/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import WooProductMetaEdit from './edit';
import WooProductMetaSave from './save';
import { getBlockActiveStatus, isWooActive } from '../../resources/js/blocks/utils.js';

if ( isWooActive() ) {
	/**
	 * Register Product Meta block
	 */
	registerBlockType('digiblocks/woo-product-meta', {
		apiVersion: 2,
		title: digiBlocksData.blocks['woo-product-meta'].title,
		category: 'digiblocks-woocommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['woo-product-meta'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['woo-product-meta'].description,
		keywords: [__('product', 'digiblocks'), __('meta', 'digiblocks'), __('sku', 'digiblocks'), __('categories', 'digiblocks'), __('tags', 'digiblocks'), __('woocommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('woo-product-meta') ? true : false,
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
			showSKU: {
				type: 'boolean',
				default: true
			},
			showCategories: {
				type: 'boolean',
				default: true
			},
			showTags: {
				type: 'boolean',
				default: true
			},
			skuLabel: {
				type: 'string',
				default: __('SKU:', 'digiblocks')
			},
			categoriesLabel: {
				type: 'string',
				default: __('Categories:', 'digiblocks')
			},
			tagsLabel: {
				type: 'string',
				default: __('Tags:', 'digiblocks')
			},
			layout: {
				type: 'string',
				default: 'vertical'
			},
			alignment: {
				type: 'object',
				default: {
					desktop: 'flex-start',
					tablet: 'flex-start',
					mobile: 'flex-start'
				}
			},
			spacing: {
				type: 'object',
				default: {
					desktop: 15,
					tablet: 12,
					mobile: 10
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
					desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			labelTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 14, tablet: 13, mobile: 12 },
					fontSizeUnit: 'px',
					fontWeight: '600',
					fontStyle: 'normal',
					textTransform: 'uppercase',
					textDecoration: 'none',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0.5, tablet: 0.5, mobile: 0.5 },
					letterSpacingUnit: 'px'
				}
			},
			valueTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 14, tablet: 13, mobile: 12 },
					fontSizeUnit: 'px',
					fontWeight: 'normal',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			labelColor: {
				type: 'string',
				default: '#666666'
			},
			skuColor: {
				type: 'string',
				default: '#333333'
			},
			skuBackgroundColor: {
				type: 'string',
				default: 'rgba(0, 0, 0, 0.05)'
			},
			categoryColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			categoryHoverColor: {
				type: 'string',
				default: '#3a5ce5'
			},
			tagColor: {
				type: 'string',
				default: '#52c41a'
			},
			tagHoverColor: {
				type: 'string',
				default: '#389e0d'
			},
			categoryBackgroundColor: {
				type: 'string',
				default: 'rgba(74, 108, 247, 0.1)'
			},
			categoryHoverBackgroundColor: {
				type: 'string',
				default: 'rgba(74, 108, 247, 0.2)'
			},
			tagBackgroundColor: {
				type: 'string',
				default: 'rgba(82, 196, 26, 0.1)'
			},
			tagHoverBackgroundColor: {
				type: 'string',
				default: 'rgba(82, 196, 26, 0.2)'
			},
			borderRadius: {
				type: 'object',
				default: {
					desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			animation: {
				type: 'string',
				default: 'none'
			},
		},
		example: {
			attributes: {
				showSKU: true,
				showCategories: true,
				showTags: true,
				layout: 'vertical'
			},
			viewportWidth: 400
		},
		edit: WooProductMetaEdit,
		save: WooProductMetaSave,
	});
}