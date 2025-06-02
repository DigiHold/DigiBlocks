/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import BreadcrumbsEdit from './edit';
import BreadcrumbsSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Breadcrumbs block
 */
registerBlockType('digiblocks/breadcrumbs', {
    apiVersion: 2,
    title: digiBlocksData.blocks['breadcrumbs'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['breadcrumbs'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['breadcrumbs'].description,
    keywords: [__('breadcrumb', 'digiblocks'), __('navigation', 'digiblocks'), __('path', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('breadcrumbs') ? true : false,
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
        align: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: 'left',
                mobile: 'left'
            }
        },
        textColor: {
            type: 'string',
            default: '#666666'
        },
        linkColor: {
            type: 'string',
            default: '#0066cc'
        },
        linkHoverColor: {
            type: 'string',
            default: '#004c99'
        },
        separatorColor: {
            type: 'string',
            default: '#666666'
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
                lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
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
        separatorSize: {
            type: 'object',
            default: {
                desktop: 12,
                tablet: 10,
                mobile: 9
            }
        },
        separatorSpacing: {
            type: 'object',
            default: {
                desktop: 8,
                tablet: 6,
                mobile: 4
            }
        },
        showHome: {
            type: 'boolean',
            default: true
        },
        homeText: {
            type: 'string',
            default: __('Home', 'digiblocks')
        },
        showCurrent: {
            type: 'boolean',
            default: true
        },
        useYoast: {
            type: 'boolean',
            default: false
        },
        useRankMath: {
            type: 'boolean',
            default: false
        },
        animation: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            textColor: '#666666',
            linkColor: '#0066cc',
            homeText: __('Home', 'digiblocks'),
            showHome: true,
            showCurrent: true
        }
    },
    edit: BreadcrumbsEdit,
    save: BreadcrumbsSave,
});