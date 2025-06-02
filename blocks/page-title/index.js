/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import PageTitleEdit from './edit';
import PageTitleSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Page Title block
 */
registerBlockType('digiblocks/page-title', {
    apiVersion: 2,
    title: digiBlocksData.blocks['page-title'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['page-title'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['page-title'].description,
    keywords: [__('title', 'digiblocks'), __('heading', 'digiblocks'), __('header', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
		inserter: getBlockActiveStatus('page-title') ? true : false,
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
        headingTag: {
            type: 'string',
            default: 'h2'
        },
        align: {
			type: 'object',
			default: {
				desktop: 'left',
				tablet: 'left',
				mobile: 'left'
			}
		},
        color: {
            type: 'string',
            default: '#333333'
        },
        hoverColor: {
            type: 'string',
            default: ''
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 42, tablet: 32, mobile: 24 },
                fontSizeUnit: 'px',
                fontWeight: '700',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 12, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: 'px' }
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
        }
    },
    example: {
        attributes: {
            headingTag: 'h2',
            align: 'left',
            color: '#333333',
            typography: {
                fontSize: { desktop: 32 },
                fontWeight: '700',
                lineHeight: { desktop: 1.2 }
            }
        }
    },
    edit: PageTitleEdit,
    save: PageTitleSave,
});