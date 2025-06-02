/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import TableEdit from './edit';
import TableSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Table block
 */
registerBlockType('digiblocks/table', {
    apiVersion: 2,
    title: digiBlocksData.blocks['table'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['table'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['table'].description,
    keywords: [__('table', 'digiblocks'), __('comparison', 'digiblocks'), __('grid', 'digiblocks'), __('cells', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('table') ? true : false,
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
        tableData: {
            type: 'array',
            default: [
                ['Header 1', 'Header 2', 'Header 3'],
                ['Cell 1,1', 'Cell 1,2', 'Cell 1,3'],
                ['Cell 2,1', 'Cell 2,2', 'Cell 2,3']
            ]
        },
        hasHeader: {
            type: 'boolean',
            default: true
        },
        hasFooter: {
            type: 'boolean',
            default: false
        },
        tableBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        tableBorderWidth: {
            type: 'number',
            default: 1
        },
        tableBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        cellPadding: {
            type: 'object',
            default: {
                desktop: { top: 15, right: 15, bottom: 15, left: 15, unit: 'px' },
                tablet: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        tableBorderCollapse: {
            type: 'string',
            default: 'collapse'
        },
        headerBackgroundColor: {
            type: 'string',
            default: '#f8f9fa'
        },
        headerTextColor: {
            type: 'string',
            default: '#333333'
        },
        headingTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 18, tablet: 16, mobile: 15 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        bodyBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        altRowBackgroundColor: {
            type: 'string',
            default: ''
        },
        bodyTextColor: {
            type: 'string',
            default: '#666666'
        },
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        footerBackgroundColor: {
            type: 'string',
            default: '#f8f9fa'
        },
        footerTextColor: {
            type: 'string',
            default: '#333333'
        },
        contentTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
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
        boxShadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.1)',
                horizontal: 0,
                vertical: 2,
                blur: 10,
                spread: 0,
                position: 'outset'
            }
        },
        boxShadowHover: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 10,
                blur: 25,
                spread: 0,
                position: 'outset'
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
        cellAlignment: {
            type: 'string',
            default: 'left'
        },
        headerAlignment: {
            type: 'string',
            default: 'left'
        },
        footerAlignment: {
            type: 'string',
            default: 'left'
        },
        tablePreset: {
            type: 'string',
            default: 'default'
        },
        responsiveMode: {
            type: 'string',
            default: 'stack'
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        firstColHeader: {
            type: 'boolean',
            default: false
        },
        cellControls: {
            type: 'object',
            default: {}
        }
    },
    example: {
        attributes: {
            tableData: [
                ['Feature', 'Basic', 'Premium'],
                ['Storage', '10GB', '1TB'],
                ['Users', '1', 'Unlimited'],
                ['Support', 'Email', '24/7 Phone'],
                ['Price', '$9.99', '$29.99']
            ],
            hasHeader: true,
            headerBackgroundColor: '#f8f9fa',
            bodyBackgroundColor: '#ffffff',
            altRowBackgroundColor: '#f9f9f9',
        }
    },
    edit: TableEdit,
    save: TableSave,
});