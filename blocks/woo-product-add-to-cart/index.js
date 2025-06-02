/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import WooProductAddToCartEdit from './edit';
import WooProductAddToCartSave from './save';
import { getBlockActiveStatus, isWooActive } from '../../resources/js/blocks/utils.js';

if ( isWooActive() ) {
	/**
	 * Register Product Add To Cart block
	 */
	registerBlockType('digiblocks/woo-product-add-to-cart', {
		apiVersion: 2,
		title: digiBlocksData.blocks['woo-product-add-to-cart'].title,
		category: 'digiblocks-woocommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['woo-product-add-to-cart'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['woo-product-add-to-cart'].description,
		keywords: [__('cart', 'digiblocks'), __('add to cart', 'digiblocks'), __('woocommerce', 'digiblocks'), __('product', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('woo-product-add-to-cart') && digiBlocksData.isWooActive ? true : false,
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
			buttonText: {
				type: 'string',
				default: __('Add to cart', 'digiblocks')
			},
			showQuantityInput: {
				type: 'boolean',
				default: true
			},
			quantityInputWidth: {
				type: 'object',
				default: {
					desktop: 80,
					tablet: 70,
					mobile: 60
				}
			},
			buttonAlignment: {
				type: 'string',
				default: 'flex-start'
			},
			buttonWidth: {
				type: 'string',
				default: 'auto'
			},
			buttonCustomWidth: {
				type: 'object',
				default: {
					desktop: 200,
					tablet: 180,
					mobile: 150
				}
			},
			backgroundColor: {
				type: 'string',
				default: '#007cba'
			},
			textColor: {
				type: 'string',
				default: '#ffffff'
			},
			backgroundHoverColor: {
				type: 'string',
				default: '#005a87'
			},
			textHoverColor: {
				type: 'string',
				default: '#ffffff'
			},
			quantityBackgroundColor: {
				type: 'string',
				default: '#ffffff'
			},
			quantityTextColor: {
				type: 'string',
				default: '#333333'
			},
			quantityBorderColor: {
				type: 'string',
				default: '#ddd'
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
			buttonPadding: {
				type: 'object',
				default: {
					desktop: { top: 12, right: 24, bottom: 12, left: 24, unit: 'px' },
					tablet: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
					mobile: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' }
				}
			},
			buttonBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			quantityBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			typography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
					fontSizeUnit: 'px',
					fontWeight: '500',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
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
				buttonText: __('Add to cart', 'digiblocks'),
				showQuantityInput: true,
				backgroundColor: '#007cba',
				textColor: '#ffffff'
			},
			viewportWidth: 400
		},
		edit: WooProductAddToCartEdit,
		save: WooProductAddToCartSave,
	});
}