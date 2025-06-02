/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiPriceEdit from './edit';
import DigiPriceSave from './save';
import { getBlockActiveStatus, isDigiActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() ) {
	/**
	 * Register DigiCommerce Product Price block
	 */
	registerBlockType('digiblocks/digi-price', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-price'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-price'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-price'].description,
		keywords: [__('price', 'digiblocks'), __('digicommerce', 'digiblocks'), __('product', 'digiblocks'), __('cost', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-price') ? true : false,
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
			showRegularPrice: {
				type: 'boolean',
				default: true
			},
			showSalePrice: {
				type: 'boolean',
				default: true
			},
			showCurrency: {
				type: 'boolean',
				default: true
			},
			showFromLabel: {
				type: 'boolean',
				default: true
			},
			alignment: {
				type: 'string',
				default: 'left'
			},
			priceColor: {
				type: 'string',
				default: '#17a817'
			},
			salePriceColor: {
				type: 'string',
				default: '#e74c3c'
			},
			regularPriceColor: {
				type: 'string',
				default: '#999999'
			},
			currencyColor: {
				type: 'string',
				default: ''
			},
			fromLabelColor: {
				type: 'string',
				default: '#333333'
			},
			backgroundColor: {
				type: 'string',
				default: ''
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
			priceTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 32, tablet: 28, mobile: 24 },
					fontSizeUnit: 'px',
					fontWeight: '600',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			regularPriceTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 18, tablet: 16, mobile: 14 },
					fontSizeUnit: 'px',
					fontWeight: '400',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'line-through',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			fromLabelTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 20, tablet: 18, mobile: 16 },
					fontSizeUnit: 'px',
					fontWeight: '700',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			borderRadius: {
				type: 'object',
				default: {
					desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
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
				showRegularPrice: true,
				showSalePrice: true,
				showCurrency: true,
				showFromLabel: true,
				alignment: 'left',
				priceColor: '#17a817',
				regularPriceColor: '#999999',
				salePriceColor: '#e74c3c',
				fromLabelColor: '#333333'
			},
			viewportWidth: 600
		},
		edit: DigiPriceEdit,
		save: DigiPriceSave,
	});
}