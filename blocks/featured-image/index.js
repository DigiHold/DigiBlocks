/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import FeaturedImageEdit from './edit';
import FeaturedImageSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Featured Image block
 */
registerBlockType('digiblocks/featured-image', {
    apiVersion: 2,
    title: digiBlocksData.blocks['featured-image'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['featured-image'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['featured-image'].description,
    keywords: [__('featured image', 'digiblocks'), __('thumbnail', 'digiblocks'), __('post image', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('featured-image') ? true : false,
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
        imageSize: {
            type: 'string',
            default: 'large'
        },
        imageCrop: {
            type: 'boolean',
            default: false
        },
        aspectRatio: {
            type: 'string',
            default: 'default'
        },
        customHeight: {
            type: 'object',
            default: {
                desktop: 300,
                tablet: 250,
                mobile: 200
            }
        },
        enableCaption: {
            type: 'boolean',
            default: false
        },
        linkToPost: {
            type: 'boolean',
            default: false
        },
        width: {
            type: 'object',
            default: {
                desktop: 100,
                tablet: 100,
                mobile: 100
            }
        },
        align: {
            type: 'object',
            default: {
                desktop: 'center',
                tablet: 'center',
                mobile: 'center'
            }
        },
        borderStyle: {
            type: 'string',
            default: 'none'
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
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        boxShadow: {
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
        boxShadowHover: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.3)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
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
            imageSize: 'medium',
            borderStyle: 'solid',
            borderColor: '#e0e0e0',
            borderRadius: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        }
    },
    edit: FeaturedImageEdit,
    save: FeaturedImageSave,
});