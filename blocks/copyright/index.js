/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import CopyrightEdit from './edit';
import CopyrightSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Copyright block
 */
registerBlockType('digiblocks/copyright', {
    apiVersion: 2,
    title: digiBlocksData.blocks['copyright'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['copyright'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['copyright'].description,
    keywords: [__('copyright', 'digiblocks'), __('footer', 'digiblocks'), __('text', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('copyright') ? true : false,
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
        copyrightText: {
            type: 'string',
            default: __('© {year} {sitename}. All rights reserved.', 'digiblocks')
        },
        textAlign: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: '',
                mobile: ''
            }
        },
        textColor: {
            type: 'string',
            default: '#666666'
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        linkColor: {
            type: 'string',
            default: ''
        },
        linkHoverColor: {
            type: 'string',
            default: ''
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
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
        animation: {
            type: 'string',
            default: 'none'
        },
    },
    example: {
        attributes: {
            copyrightText: '© {year} {sitename}. All rights reserved.',
            textAlign: {
                desktop: 'center',
                tablet: 'center',
                mobile: 'center'
            }
        }
    },
    edit: CopyrightEdit,
    save: CopyrightSave,
});