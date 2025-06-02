/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import PricingTableEdit from './edit';
import PricingTableSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Pricing Table block
 */
registerBlockType('digiblocks/pricing-table', {
    apiVersion: 2,
    title: digiBlocksData.blocks['pricing-table'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['pricing-table'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['pricing-table'].description,
    keywords: [__('pricing', 'digiblocks'), __('price', 'digiblocks'), __('table', 'digiblocks'), __('plan', 'digiblocks'), __('subscription', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('pricing-table') ? true : false, // Remove the block if disabled
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
    },
	attributes: {
        id: {
            type: 'string',
        },
        anchor: {
            type: 'string',
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
        },
        tables: {
            type: 'array',
            default: [],
        },
        columns: {
            type: 'number',
            default: 2,
        },
        tableStyle: {
            type: 'string',
            default: 'style1',
        },
        align: {
            type: 'string',
            default: 'center',
        },
        animation: {
            type: 'string',
            default: 'none',
        },
        titleTypography: {
            type: 'object',
            default: {},
        },
        headingTypography: {
            type: 'object',
            default: {},
        },
        textTypography: {
            type: 'object',
            default: {},
        },
        contentTypography: {
            type: 'object',
            default: {},
        },
        buttonTypography: {
            type: 'object',
            default: {},
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            },
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' }
            },
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            },
        },
        borderStyle: {
            type: 'string',
            default: 'solid',
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            },
        },
        borderColor: {
            type: 'string',
            default: '#e6e6e6',
        },
        boxShadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.1)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
            },
        },
        boxShadowHover: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.15)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
            },
        },
        buttonRadius: {
            type: 'number',
            default: 4,
        },
        buttonPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
                tablet: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' },
                mobile: { top: 6, right: 12, bottom: 6, left: 12, unit: 'px' }
            },
        },
        buttonBorderStyle: {
            type: 'string',
            default: 'none',
        },
        buttonBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            },
        },
        buttonBorderColor: {
            type: 'string',
            default: '',
        },
        buttonBorderHoverColor: {
            type: 'string',
            default: '',
        },
        showRibbon: {
            type: 'boolean',
            default: true,
        },
        ribbonStyle: {
            type: 'string',
            default: 'corner',
        },
        ribbonPosition: {
            type: 'string',
            default: 'right',
        },
        tableTextColor: {
            type: 'string',
            default: '#333333',
        },
        tableBackgroundColor: {
            type: 'string',
            default: '#ffffff',
        },
        headerBackgroundColor: {
            type: 'string',
            default: '#f8f9fa',
        },
        buttonTextColor: {
            type: 'string',
            default: '#ffffff',
        },
        buttonBackgroundColor: {
            type: 'string',
            default: '#4a6cf7',
        },
        buttonTextHoverColor: {
            type: 'string',
            default: '#ffffff',
        },
        buttonBackgroundHoverColor: {
            type: 'string',
            default: '#3151e1',
        },
        ribbonTextColor: {
            type: 'string',
            default: '#ffffff',
        },
        ribbonBackgroundColor: {
            type: 'string',
            default: '#4a6cf7',
        },
    },
    example: {
        attributes: {
            tables: [
                {
                    id: 'table-1-example',
                    title: 'Basic Plan',
                    price: '$19',
                    period: '/month',
                    description: 'Great for starters',
                    features: [
                        { text: '1 Website', enabled: true },
                        { text: '5GB Storage', enabled: true },
                        { text: 'Premium Support', enabled: false }
                    ],
                    buttonText: 'Get Started',
                    isHighlighted: false,
                    ribbonText: 'Popular',
                }
            ],
            columns: 1,
            tableStyle: 'style1',
            showRibbon: true
        }
    },
    edit: PricingTableEdit,
    save: PricingTableSave,
});