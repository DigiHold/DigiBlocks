/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiProductReviewsFormEdit from './edit';
import DigiProductReviewsFormSave from './save';
import { getBlockActiveStatus, isDigiActive, isDigiProActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() && isDigiProActive() ) {
	/**
	 * Register DigiCommerce Product Reviews Form block
	 */
	registerBlockType('digiblocks/digi-product-reviews-form', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-product-reviews-form'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-product-reviews-form'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-product-reviews-form'].description,
		keywords: [__('product', 'digiblocks'), __('reviews', 'digiblocks'), __('digicommerce', 'digiblocks'), __('rating', 'digiblocks'), __('comments', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-product-reviews-form') ? true : false,
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
			formBackgroundColor: {
				type: 'string',
				default: '#ffffff'
			},
			formTextColor: {
				type: 'string',
				default: '#333333'
			},
			labelColor: {
				type: 'string',
				default: '#333333'
			},
			inputBackgroundColor: {
				type: 'string',
				default: '#ffffff'
			},
			inputTextColor: {
				type: 'string',
				default: '#333333'
			},
			inputBorderColor: {
				type: 'string',
				default: '#ddd'
			},
			inputFocusBorderColor: {
				type: 'string',
				default: '#4a6cf7'
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
			ratingStarColor: {
				type: 'string',
				default: '#ddd'
			},
			ratingStarHoverColor: {
				type: 'string',
				default: '#ffa500'
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
			formPadding: {
				type: 'object',
				default: {
					desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: 'px' },
					tablet: { top: 25, right: 25, bottom: 25, left: 25, unit: 'px' },
					mobile: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' }
				}
			},
			inputPadding: {
				type: 'object',
				default: {
					desktop: { top: 12, right: 15, bottom: 12, left: 15, unit: 'px' },
					tablet: { top: 10, right: 12, bottom: 10, left: 12, unit: 'px' },
					mobile: { top: 8, right: 10, bottom: 8, left: 10, unit: 'px' }
				}
			},
			buttonPadding: {
				type: 'object',
				default: {
					desktop: { top: 15, right: 30, bottom: 15, left: 30, unit: 'px' },
					tablet: { top: 12, right: 25, bottom: 12, left: 25, unit: 'px' },
					mobile: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' }
				}
			},
			labelTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
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
			inputTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
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
			inputBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			buttonBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			formBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			formBorderStyle: {
				type: 'string',
				default: 'solid'
			},
			formBorderWidth: {
				type: 'object',
				default: {
					desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			formBorderColor: {
				type: 'string',
				default: '#e0e0e0'
			},
			formShadow: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.1)',
					horizontal: 0,
					vertical: 4,
					blur: 20,
					spread: 0,
					position: 'outset'
				}
			},
			formShadowHover: {
				type: 'object',
				default: {
					enable: true,
					color: 'rgba(0, 0, 0, 0.15)',
					horizontal: 0,
					vertical: 8,
					blur: 25,
					spread: 0,
					position: 'outset'
				}
			},
			inputBorderStyle: {
				type: 'string',
				default: 'solid'
			},
			inputBorderWidth: {
				type: 'object',
				default: {
					desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
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
				formBackgroundColor: '#ffffff',
				formTextColor: '#333333',
				labelColor: '#333333',
				inputBackgroundColor: '#ffffff',
				inputTextColor: '#333333',
				inputBorderColor: '#ddd',
				buttonBackgroundColor: '#4a6cf7',
				buttonTextColor: '#ffffff',
				ratingStarColor: '#ddd',
				ratingStarHoverColor: '#ffa500'
			},
			viewportWidth: 600
		},
		edit: DigiProductReviewsFormEdit,
		save: DigiProductReviewsFormSave,
	});
}