/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import WooProductContentEdit from './edit';
import WooProductContentSave from './save';
import { getBlockActiveStatus, isWooActive } from '../../resources/js/blocks/utils.js';

if ( isWooActive() ) {
	/**
	 * Register Product Content block
	 */
	registerBlockType('digiblocks/woo-product-content', {
		apiVersion: 2,
		title: digiBlocksData.blocks['woo-product-content'].title,
		category: 'digiblocks-woocommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['woo-product-content'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['woo-product-content'].description,
		keywords: [__('product', 'digiblocks'), __('content', 'digiblocks'), __('description', 'digiblocks'), __('woocommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('woo-product-content') ? true : false,
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
			contentType: {
				type: 'string',
				default: 'description'
			},
			textColor: {
				type: 'string',
				default: '#333333'
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
					desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
					tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' },
					mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: 'px' }
				}
			},
			typography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
					fontSizeUnit: 'px',
					fontWeight: 'normal',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			animation: {
				type: 'string',
				default: 'none'
			},
		},
		example: {
			attributes: {
				contentType: 'description',
				textColor: '#333333'
			},
			viewportWidth: 600
		},
		edit: WooProductContentEdit,
		save: WooProductContentSave,
	});
}