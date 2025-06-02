/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import PostMetaEdit from './edit';
import PostMetaSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Post Meta block
 */
registerBlockType('digiblocks/post-meta', {
    apiVersion: 2,
    title: digiBlocksData.blocks['post-meta'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['post-meta'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['post-meta'].description,
    keywords: [__('meta', 'digiblocks'), __('author', 'digiblocks'), __('date', 'digiblocks'), __('categories', 'digiblocks'), __('tags', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('post-meta') ? true : false,
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
        displayAuthor: {
            type: 'boolean',
            default: true
        },
        displayDate: {
            type: 'boolean',
            default: true
        },
        displayCategories: {
            type: 'boolean',
            default: true
        },
        displayTags: {
            type: 'boolean',
            default: true
        },
        iconDisplay: {
            type: 'boolean',
            default: true
        },
        layout: {
            type: 'string',
            default: 'inline'
        },
        separator: {
            type: 'string',
            default: 'dot'
        },
        align: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: 'left',
                mobile: 'left'
            }
        },
        spacing: {
            type: 'object',
            default: {
                desktop: 15,
                tablet: 15,
                mobile: 10
            }
        },
        textColor: {
            type: 'string',
            default: ''
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        iconColor: {
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
        }
    },
    example: {
        attributes: {
            displayAuthor: true,
            displayDate: true,
            displayCategories: true,
            displayTags: false,
            iconDisplay: true,
            separator: 'dot',
            layout: 'inline',
            textColor: '#666666'
        }
    },
    edit: PostMetaEdit,
    save: PostMetaSave,
});