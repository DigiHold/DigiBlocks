/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import PostNavigationEdit from './edit';
import PostNavigationSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Post Navigation block
 */
registerBlockType('digiblocks/post-navigation', {
    apiVersion: 2,
    title: digiBlocksData.blocks['post-navigation'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['post-navigation'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['post-navigation'].description,
    keywords: [__('navigation', 'digiblocks'), __('post links', 'digiblocks'), __('next', 'digiblocks'), __('previous', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('post-navigation') ? true : false,
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
        showPostTitle: {
            type: 'boolean',
            default: true
        },
        showNavLabels: {
            type: 'boolean',
            default: true
        },
        previousLabel: {
            type: 'string',
            default: __('Previous', 'digiblocks')
        },
        nextLabel: {
            type: 'string',
            default: __('Next', 'digiblocks')
        },
        showFeaturedImage: {
            type: 'boolean',
            default: false
        },
        imageSize: {
            type: 'string',
            default: 'thumbnail'
        },
        color: {
            type: 'string',
            default: '#333333'
        },
        hoverColor: {
            type: 'string',
            default: ''
        },
        backgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        borderStyle: {
            type: 'string',
            default: 'default'
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
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderHoverColor: {
            type: 'string',
            default: ''
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
        animation: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            navigationType: 'default',
            showPostTitle: true,
            showNavLabels: true,
            previousLabel: __('Previous', 'digiblocks'),
            nextLabel: __('Next', 'digiblocks'),
            color: '#333333',
            backgroundColor: 'transparent'
        }
    },
    edit: PostNavigationEdit,
    save: PostNavigationSave,
});