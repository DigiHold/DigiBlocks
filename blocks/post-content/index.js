/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import PostContentEdit from './edit';
import PostContentSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Post Content block
 */
registerBlockType('digiblocks/post-content', {
    apiVersion: 2,
    title: digiBlocksData.blocks['post-content'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['post-content'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['post-content'].description,
    keywords: [__('content', 'digiblocks'), __('text', 'digiblocks'), __('post', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('post-content') ? true : false,
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
        color: {
            type: 'string',
            default: ''
        },
        textAlign: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: 'left',
                mobile: 'left'
            }
        },
        columns: {
            type: 'object',
            default: {
                desktop: 1,
                tablet: 1,
                mobile: 1
            }
        },
        dropcap: {
            type: 'boolean',
            default: false
        },
        dropCapColor: {
            type: 'string',
            default: '#333333'
        },
        dropCapSize: {
            type: 'object',
            default: {
                desktop: 3.5,
                tablet: 3.0,
                mobile: 2.5
            }
        },
        dropCapSpace: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: 8,
                mobile: 6
            }
        },
        listSpacing: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 15,
                mobile: 10
            }
        },
        paragraphSpacing: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 15,
                mobile: 10
            }
        },
        headingSpacing: {
            type: 'object',
            default: {
                desktop: 30,
                tablet: 25,
                mobile: 20
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
                lineHeight: { desktop: 1.7, tablet: 1.6, mobile: 1.5 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        padding: {
            type: 'object',
            default: {
                desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    unit: 'px'
                },
                tablet: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    unit: 'px'
                },
                mobile: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    unit: 'px'
                }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    unit: 'px'
                },
                tablet: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    unit: 'px'
                },
                mobile: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    unit: 'px'
                }
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            dropcap: true,
            color: '#333333',
            typography: {
                fontSize: { desktop: 16 },
                lineHeight: { desktop: 1.7 }
            }
        }
    },
    edit: PostContentEdit,
    save: PostContentSave,
});