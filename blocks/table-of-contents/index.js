/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import TableOfContentsEdit from './edit';
import TableOfContentsSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Table of Contents block
 */
registerBlockType('digiblocks/table-of-contents', {
    apiVersion: 2,
    title: digiBlocksData.blocks['table-of-contents'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['table-of-contents'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['table-of-contents'].description,
    keywords: [__('toc', 'digiblocks'), __('table of contents', 'digiblocks'), __('contents', 'digiblocks'), __('headings', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('table-of-contents') ? true : false,
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
        title: {
            type: 'string',
            default: __('Table of Contents', 'digiblocks')
        },
        showTitle: {
            type: 'boolean',
            default: true
        },
        titleTag: {
            type: 'string',
            default: 'h2'
        },
        headingSelector: {
            type: 'string', 
            default: 'h2'
        },
        maxDepth: {
            type: 'number',
            default: 3
        },
        listType: {
            type: 'string',
            default: 'ul'
        },
        scrollOffset: {
            type: 'number',
            default: 30
        },
        enableSmoothScroll: {
            type: 'boolean',
            default: true
        },
        enableSEOMarkup: {
            type: 'boolean',
            default: true
        },
        minimizeBox: {
            type: 'boolean',
            default: false
        },
        showAsCollapsible: {
            type: 'boolean',
            default: false
        },
        initialCollapseState: {
            type: 'boolean',
            default: false
        },
        collapseButtonText: {
            type: 'object',
            default: {
                show: __('Show', 'digiblocks'),
                hide: __('Hide', 'digiblocks')
            }
        },
        align: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: 'left',
                mobile: 'left'
            }
        },
        width: {
            type: 'object',
            default: {
                desktop: { value: 100, unit: '%' },
                tablet: { value: 100, unit: '%' },
                mobile: { value: 100, unit: '%' }
            }
        },
        maxWidth: {
            type: 'object',
            default: {
                desktop: { value: '', unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' }
            }
        },
        backgroundColor: {
            type: 'string',
            default: '#f8f9fa'
        },
        titleColor: {
            type: 'string',
            default: '#333333'
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
        borderStyle: {
            type: 'string',
            default: 'solid'
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
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 25, right: 30, bottom: 25, left: 30, unit: 'px' },
                tablet: { top: 20, right: 25, bottom: 20, left: 25, unit: 'px' },
                mobile: { top: 15, right: 20, bottom: 15, left: 20, unit: 'px' }
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
        boxShadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.1)',
                horizontal: 0,
                vertical: 0,
                blur: 5,
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
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
            }
        },
        titleTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        listSpacing: {
			type: 'object',
			default: {
				desktop: { value: 15, unit: 'px' },
				tablet: { value: 12, unit: 'px' },
				mobile: { value: 10, unit: 'px' }
			}
		},
        animation: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            title: __('Table of Contents', 'digiblocks'),
            showTitle: true,
            titleTag: 'h2',
            headingSelector: 'h2',
            backgroundColor: '#f8f9fa',
            titleColor: '#333333',
            textColor: '#333333',
            linkColor: '#4a6cf7'
        }
    },
    edit: TableOfContentsEdit,
    save: TableOfContentsSave,
});