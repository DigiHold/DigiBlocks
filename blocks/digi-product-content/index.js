/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import DigiProductContentEdit from './edit';
import DigiProductContentSave from './save';
import { getBlockActiveStatus, isDigiActive } from '../../resources/js/blocks/utils.js';

if ( isDigiActive() ) {
	/**
	 * Register DigiCommerce Product Content block
	 */
	registerBlockType('digiblocks/digi-product-content', {
		apiVersion: 2,
		title: digiBlocksData.blocks['digi-product-content'].title,
		category: 'digiblocks-digicommerce',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['digi-product-content'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['digi-product-content'].description,
		keywords: [__('product', 'digiblocks'), __('content', 'digiblocks'), __('description', 'digiblocks'), __('digicommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('digi-product-content') ? true : false,
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
			alignment: {
				type: 'object',
				default: {
					desktop: 'left',
					tablet: 'left',
					mobile: 'left'
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
			textColor: {
				type: 'string',
				default: '#333333'
			},
			linkColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			linkHoverColor: {
				type: 'string',
				default: '#3a5ce5'
			},
			animation: {
				type: 'string',
				default: 'none'
			},
		},
		example: {
			attributes: {
				contentType: 'description'
			},
			viewportWidth: 600
		},
		edit: DigiProductContentEdit,
		save: DigiProductContentSave,
	});
}