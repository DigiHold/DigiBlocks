/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import WooProductReviewsEdit from './edit';
import WooProductReviewsSave from './save';
import { getBlockActiveStatus, isWooActive } from '../../resources/js/blocks/utils.js';

if ( isWooActive() ) {
	/**
	 * Register Product Reviews block
	 */
	registerBlockType('digiblocks/woo-product-reviews', {
		apiVersion: 2,
		title: digiBlocksData.blocks['woo-product-reviews'].title,
		category: 'digiblocks-woocommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['woo-product-reviews'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['woo-product-reviews'].description,
		keywords: [__('product', 'digiblocks'), __('reviews', 'digiblocks'), __('rating', 'digiblocks'), __('stars', 'digiblocks'), __('woocommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('woo-product-reviews') ? true : false,
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
			showStars: {
				type: 'boolean',
				default: true
			},
			showCount: {
				type: 'boolean',
				default: true
			},
			showText: {
				type: 'boolean',
				default: true
			},
			alignment: {
				type: 'object',
				default: {
					desktop: 'left',
					tablet: 'left',
					mobile: 'left'
				}
			},
			starsColor: {
				type: 'string',
				default: '#ffa500'
			},
			starsEmptyColor: {
				type: 'string',
				default: '#e0e0e0'
			},
			countColor: {
				type: 'string',
				default: '#666666'
			},
			countHoverColor: {
				type: 'string',
				default: '#333333'
			},
			textColor: {
				type: 'string',
				default: '#666666'
			},
			textHoverColor: {
				type: 'string',
				default: '#333333'
			},
			starsSize: {
				type: 'object',
				default: {
					desktop: 20,
					tablet: 18,
					mobile: 16
				}
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
			countTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 14, tablet: 13, mobile: 12 },
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
			textTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 14, tablet: 13, mobile: 12 },
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
			animation: {
				type: 'string',
				default: 'none'
			},
		},
		example: {
			attributes: {
				showStars: true,
				showCount: true,
				showText: true,
				starsColor: '#ffa500',
				countColor: '#666666',
				textColor: '#666666'
			},
			viewportWidth: 400
		},
		edit: WooProductReviewsEdit,
		save: WooProductReviewsSave,
	});
}