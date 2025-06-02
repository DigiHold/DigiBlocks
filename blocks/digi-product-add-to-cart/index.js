/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiProductAddToCartEdit from './edit';
import DigiProductAddToCartSave from './save';
import { getBlockActiveStatus, isDigiActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() ) {
	/**
	 * Register DigiCommerce Product Add To Cart block
	 */
	registerBlockType('digiblocks/digi-product-add-to-cart', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-product-add-to-cart'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-product-add-to-cart'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-product-add-to-cart'].description,
		keywords: [__('cart', 'digiblocks'), __('add to cart', 'digiblocks'), __('digicommerce', 'digiblocks'), __('product', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-product-add-to-cart') && digiBlocksData.isDigiActive ? true : false,
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
			variationBackgroundColor: {
				type: 'string',
				default: '#ffffff'
			},
			variationTextColor: {
				type: 'string',
				default: '#333333'
			},
			variationBorderColor: {
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
			variationBorderRadius: {
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
				backgroundColor: '#007cba',
				textColor: '#ffffff'
			},
			viewportWidth: 400
		},
		edit: DigiProductAddToCartEdit,
		save: DigiProductAddToCartSave,
	});
}