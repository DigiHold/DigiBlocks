/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import WooProductsEdit from './edit';
import WooProductsSave from './save';
import { getBlockActiveStatus, isWooActive } from '../../resources/js/blocks/utils.js';

if ( isWooActive() ) {
	/**
	 * Register Woo Products block
	 */
	registerBlockType('digiblocks/woo-products', {
		apiVersion: 2,
		title: digiBlocksData.blocks['woo-products'].title,
		category: 'digiblocks-woocommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['woo-products'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['woo-products'].description,
		keywords: [__('woocommerce', 'digiblocks'), __('products', 'digiblocks'), __('shop', 'digiblocks'), __('store', 'digiblocks'), __('ecommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('woo-products') ? true : false,
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
			productsToShow: {
				type: 'number',
				default: 4
			},
			columns: {
				type: 'object',
				default: {
					desktop: 4,
					tablet: 2,
					mobile: 1
				}
			},
			displayFeaturedImage: {
				type: 'boolean',
				default: true
			},
			displayTitle: {
				type: 'boolean',
				default: true
			},
			displayPrice: {
				type: 'boolean',
				default: true
			},
			displayRating: {
				type: 'boolean',
				default: true
			},
			displaySaleBadge: {
				type: 'boolean',
				default: true
			},
			displayCategories: {
				type: 'boolean',
				default: true
			},
			displayShortDescription: {
				type: 'boolean',
				default: true
			},
			displayAddToCart: {
				type: 'boolean',
				default: true
			},
			shortDescriptionLength: {
				type: 'number',
				default: 25
			},
			order: {
				type: 'string',
				default: 'desc'
			},
			orderBy: {
				type: 'string',
				default: 'date'
			},
			categories: {
				type: 'array',
				default: []
			},
			onSale: {
				type: 'boolean',
				default: false
			},
			featured: {
				type: 'boolean',
				default: false
			},
			enablePagination: {
				type: 'boolean',
				default: false
			},
			paginationAlign: {
				type: 'string',
				default: 'center'
			},
			paginationBackgroundColor: {
				type: 'string',
				default: '#f8f9fa'
			},
			paginationTextColor: {
				type: 'string',
				default: '#333333'
			},
			paginationActiveBackgroundColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			paginationActiveTextColor: {
				type: 'string',
				default: '#ffffff'
			},
			titleColor: {
				type: 'string',
				default: '#333333'
			},
			titleHoverColor: {
				type: 'string',
				default: ''
			},
			priceColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			saleColor: {
				type: 'string',
				default: '#ff5252'
			},
			regularPriceColor: {
				type: 'string',
				default: '#999999'
			},
			ratingColor: {
				type: 'string',
				default: '#ffc107'
			},
			catBackgroundColor: {
				type: 'string',
				default: '#52576b'
			},
			catColor: {
				type: 'string',
				default: '#fff'
			},
			catHoverBackgroundColor: {
				type: 'string',
				default: '#3f4a73'
			},
			catHoverColor: {
				type: 'string',
				default: '#fff'
			},
			saleBadgeBackgroundColor: {
				type: 'string',
				default: '#ff5252'
			},
			saleBadgeColor: {
				type: 'string',
				default: '#ffffff'
			},
			descriptionColor: {
				type: 'string',
				default: '#666666'
			},
			buttonBackgroundColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			buttonTextColor: {
				type: 'string',
				default: '#ffffff'
			},
			buttonBackgroundHoverColor: {
				type: 'string',
				default: '#3a5ce5'
			},
			buttonTextHoverColor: {
				type: 'string',
				default: '#ffffff'
			},
			imageMargin: {
				type: 'object',
				default: {
					desktop: 15,
					tablet: 15,
					mobile: 15
				}
			},
			contentMargin: {
				type: 'object',
				default: {
					desktop: 14,
					tablet: 12,
					mobile: 12
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
			itemSpacing: {
				type: 'object',
				default: {
					desktop: 20,
					tablet: 15,
					mobile: 10
				}
			},
			titleTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 20, tablet: 18, mobile: 16 },
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
			headingTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 18, tablet: 16, mobile: 15 },
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
			textTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 13, tablet: 12, mobile: 11 },
					fontSizeUnit: 'px',
					fontWeight: 'normal',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			contentTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
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
			buttonTypography: {
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
			buttonPadding: {
				type: 'object',
				default: {
					desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
					tablet: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' },
					mobile: { top: 6, right: 12, bottom: 6, left: 12, unit: 'px' }
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
			imageSize: {
				type: 'string',
				default: 'woocommerce_thumbnail'
			},
			imageBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			cardStyle: {
				type: 'boolean',
				default: false
			},
			cardBackgroundColor: {
				type: 'string',
				default: '#ffffff'
			},
			cardPadding: {
				type: 'object',
				default: {
					desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
					tablet: { top: 15, right: 15, bottom: 15, left: 15, unit: 'px' },
					mobile: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' }
				}
			},
			cardBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			cardBorderStyle: {
				type: 'string',
				default: 'solid'
			},
			cardBorderWidth: {
				type: 'object',
				default: {
					desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			cardBorderColor: {
				type: 'string',
				default: '#e0e0e0'
			},
			cardShadow: {
				type: 'object',
				default: {
					enable: false,
					color: 'rgba(0, 0, 0, 0.1)',
					horizontal: 0,
					vertical: 0,
					blur: 0,
					spread: 0,
					position: 'outset'
				}
			},
			cardShadowHover: {
				type: 'object',
				default: {
					enable: false,
					color: 'rgba(0, 0, 0, 0.2)',
					horizontal: 0,
					vertical: 0,
					blur: 0,
					spread: 0,
					position: 'outset'
				}
			},
			animation: {
				type: 'string',
				default: 'none'
			},
		},
		example: {
			attributes: {
				productsToShow: 2,
				columns: {
					desktop: 2,
					tablet: 2,
					mobile: 1
				},
				displayFeaturedImage: true,
				displayTitle: true,
				displayPrice: true,
				displayRating: true,
				displayAddToCart: true,
				cardStyle: true
			},
			viewportWidth: 800
		},
		edit: WooProductsEdit,
		save: WooProductsSave,
	});
}