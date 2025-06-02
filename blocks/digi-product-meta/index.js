/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiProductMetaEdit from './edit';
import DigiProductMetaSave from './save';
import { getBlockActiveStatus, isDigiActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() ) {
	/**
	 * Register DigiCommerce Product Meta block
	 */
	registerBlockType('digiblocks/digi-product-meta', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-product-meta'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-product-meta'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-product-meta'].description,
		keywords: [__('product', 'digiblocks'), __('meta', 'digiblocks'), __('categories', 'digiblocks'), __('tags', 'digiblocks'), __('digicommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-product-meta') ? true : false,
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
			showCategories: {
				type: 'boolean',
				default: true
			},
			showTags: {
				type: 'boolean',
				default: true
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
				showCategories: true,
				showTags: true,
				layout: 'vertical'
			},
			viewportWidth: 400
		},
		edit: DigiProductMetaEdit,
		save: DigiProductMetaSave,
	});
}