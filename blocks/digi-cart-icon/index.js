/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiCartIconEdit from './edit';
import DigiCartIconSave from './save';
import { getBlockActiveStatus, isDigiActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() ) {
	/**
	 * Register DigiCommerce Cart Icon block
	 */
	registerBlockType('digiblocks/digi-cart-icon', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-cart-icon'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-cart-icon'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-cart-icon'].description,
		keywords: [__('cart', 'digiblocks'), __('menu', 'digiblocks'), __('digicommerce', 'digiblocks'), __('shop', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-cart-icon') ? true : false,
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
			iconType: {
				type: 'string',
				default: 'cart'
			},
			customIcon: {
				type: 'string',
				default: ''
			},
			showCount: {
				type: 'boolean',
				default: true
			},
			showText: {
				type: 'boolean',
				default: false
			},
			showTotal: {
				type: 'boolean',
				default: false
			},
			showMiniCart: {
				type: 'boolean',
				default: false
			},
			hideOnEmpty: {
				type: 'boolean',
				default: false
			},
			cartText: {
				type: 'string',
				default: __('Cart', 'digiblocks')
			},
			emptyCartText: {
				type: 'string',
				default: __('Empty Cart', 'digiblocks')
			},
			layout: {
				type: 'object',
				default: {
					desktop: 'horizontal',
					tablet: 'horizontal',
					mobile: 'horizontal'
				}
			},
			align: {
				type: 'object',
				default: {
					desktop: 'center',
					tablet: 'center',
					mobile: 'center'
				}
			},
			iconSize: {
				type: 'object',
				default: {
					desktop: 24,
					tablet: 22,
					mobile: 20
				}
			},
			iconColor: {
				type: 'string',
				default: '#333333'
			},
			iconHoverColor: {
				type: 'string',
				default: '#1e73be'
			},
			countColor: {
				type: 'string',
				default: '#ffffff'
			},
			countBackgroundColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			countHoverColor: {
				type: 'string',
				default: '#ffffff'
			},
			countHoverBackgroundColor: {
				type: 'string',
				default: '#3a5ce5'
			},
			textColor: {
				type: 'string',
				default: '#333333'
			},
			textHoverColor: {
				type: 'string',
				default: '#1e73be'
			},
			totalColor: {
				type: 'string',
				default: '#333333'
			},
			totalHoverColor: {
				type: 'string',
				default: '#1e73be'
			},
			backgroundColor: {
				type: 'string',
				default: 'transparent'
			},
			backgroundHoverColor: {
				type: 'string',
				default: ''
			},
			borderStyle: {
				type: 'string',
				default: 'none'
			},
			borderWidth: {
				type: 'object',
				default: {
					desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			borderRadius: {
				type: 'object',
				default: {
					desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			borderColor: {
				type: 'string',
				default: '#e0e0e0'
			},
			borderHoverColor: {
				type: 'string',
				default: ''
			},
			spacing: {
				type: 'object',
				default: {
					desktop: 8,
					tablet: 6,
					mobile: 4
				}
			},
			padding: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 12, bottom: 8, left: 12, unit: 'px' },
					tablet: { top: 6, right: 10, bottom: 6, left: 10, unit: 'px' },
					mobile: { top: 4, right: 8, bottom: 4, left: 8, unit: 'px' }
				}
			},
			margin: {
				type: 'object',
				default: {
					desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
					tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
					mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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
					textTransform: '',
					textDecoration: '',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			textTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 12, tablet: 11, mobile: 10 },
					fontSizeUnit: 'px',
					fontWeight: '600',
					fontStyle: 'normal',
					textTransform: '',
					textDecoration: '',
					lineHeight: { desktop: 1, tablet: 1, mobile: 1 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			// Mini Cart Settings
			miniCartWidth: {
				type: 'object',
				default: {
					desktop: 350,
					tablet: 320,
					mobile: 300
				}
			},
			miniCartPosition: {
				type: 'string',
				default: 'right'
			},
			miniCartBackgroundColor: {
				type: 'string',
				default: '#ffffff'
			},
			miniCartBorderColor: {
				type: 'string',
				default: '#e0e0e0'
			},
			miniCartTextColor: {
				type: 'string',
				default: '#333333'
			},
			miniCartHeadingColor: {
				type: 'string',
				default: '#333333'
			},
			miniCartPriceColor: {
				type: 'string',
				default: '#666666'
			},
			miniCartTotalColor: {
				type: 'string',
				default: '#333333'
			},
			miniCartButtonBackgroundColor: {
				type: 'string',
				default: '#1e73be'
			},
			miniCartButtonTextColor: {
				type: 'string',
				default: '#ffffff'
			},
			miniCartButtonHoverBackgroundColor: {
				type: 'string',
				default: '#135e9e'
			},
			miniCartButtonHoverTextColor: {
				type: 'string',
				default: '#ffffff'
			},
			miniCartRemoveColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			miniCartRemoveHoverColor: {
				type: 'string',
				default: '#3a5ce5'
			},
			miniCartTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 14, tablet: 13, mobile: 12 },
					fontSizeUnit: 'px',
					fontWeight: 'normal',
					fontStyle: 'normal',
					textTransform: '',
					textDecoration: '',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			miniCartHeadingTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 18, tablet: 17, mobile: 16 },
					fontSizeUnit: 'px',
					fontWeight: '600',
					fontStyle: 'normal',
					textTransform: '',
					textDecoration: '',
					lineHeight: { desktop: 1.3, tablet: 1.2, mobile: 1.1 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			miniCartButtonTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 14, tablet: 13, mobile: 12 },
					fontSizeUnit: 'px',
					fontWeight: '600',
					fontStyle: 'normal',
					textTransform: '',
					textDecoration: '',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			animation: {
				type: 'string',
				default: 'none'
			},
			hoverEffect: {
				type: 'string',
				default: 'none'
			}
		},
		example: {
			attributes: {
				iconType: 'cart',
				showCount: true,
				showText: false,
				iconColor: '#333333'
			},
			viewportWidth: 300
		},
		edit: DigiCartIconEdit,
		save: DigiCartIconSave,
	});
}