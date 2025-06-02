/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiProductFeaturesEdit from './edit';
import DigiProductFeaturesSave from './save';
import { getBlockActiveStatus, isDigiActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() ) {
	/**
	 * Register DigiCommerce Product Features block
	 */
	registerBlockType('digiblocks/digi-product-features', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-product-features'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-product-features'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-product-features'].description,
		keywords: [__('product', 'digiblocks'), __('features', 'digiblocks'), __('table', 'digiblocks'), __('specifications', 'digiblocks'), __('digicommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-product-features') ? true : false,
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
			showTitle: {
				type: 'boolean',
				default: true
			},
			titleText: {
				type: 'string',
				default: __('Product Features', 'digiblocks')
			},
			titleTag: {
				type: 'string',
				default: 'h3'
			},
			showAlternating: {
				type: 'boolean',
				default: true
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
			titleTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 24, tablet: 22, mobile: 20 },
					fontSizeUnit: 'px',
					fontWeight: '700',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.3, tablet: 1.3, mobile: 1.3 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			nameTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
					fontSizeUnit: 'px',
					fontWeight: '600',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.4 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			valueTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 16, tablet: 15, mobile: 14 },
					fontSizeUnit: 'px',
					fontWeight: 'normal',
					fontStyle: 'normal',
					textTransform: 'none',
					textDecoration: 'none',
					lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.4 },
					lineHeightUnit: 'em',
					letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
					letterSpacingUnit: 'px'
				}
			},
			titleColor: {
				type: 'string',
				default: '#1a202c'
			},
			nameColor: {
				type: 'string',
				default: '#2d3748'
			},
			valueColor: {
				type: 'string',
				default: '#4a5568'
			},
			backgroundColor: {
				type: 'string',
				default: '#ffffff'
			},
			alternatingColor: {
				type: 'string',
				default: '#f7fafc'
			},
			borderColor: {
				type: 'string',
				default: '#e2e8f0'
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
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
					mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
				}
			},
			cellPadding: {
				type: 'object',
				default: {
					desktop: { top: 16, right: 20, bottom: 16, left: 20, unit: 'px' },
					tablet: { top: 14, right: 16, bottom: 14, left: 16, unit: 'px' },
					mobile: { top: 12, right: 14, bottom: 12, left: 14, unit: 'px' }
				}
			},
			animation: {
				type: 'string',
				default: 'none'
			},
		},
		example: {
			attributes: {
				showTitle: true,
				titleText: 'Product Features',
				showAlternating: true
			},
			viewportWidth: 600
		},
		edit: DigiProductFeaturesEdit,
		save: DigiProductFeaturesSave,
	});
}