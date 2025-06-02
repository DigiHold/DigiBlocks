/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import IconEdit from './edit';
import IconSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Icon block
 */
registerBlockType('digiblocks/icon', {
    apiVersion: 2,
    title: digiBlocksData.blocks['icon'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['icon'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['icon'].description,
    keywords: [__('icon', 'digiblocks'), __('symbol', 'digiblocks'), __('fontawesome', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('icon') ? true : false, // Remove the block if disabled
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
		iconSource: {
			type: 'string',
			default: 'library'
		},
		customSvg: {
			type: 'string',
			default: ''
		},
        iconValue: {
            type: 'object',
            default: {
                id: 'heart',
                name: 'Heart',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>',
                style: 'solid',
                categories: ['symbols', 'emoji']
            }
        },
		align: {
            type: 'object',
            default: {
                desktop: 'flex-start',
                tablet: '',
                mobile: ''
            }
        },
        iconColor: {
            type: 'string',
            default: '#1e73be'
        },
        iconBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        iconBorderStyle: {
            type: 'string',
            default: 'default'
        },
        iconBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        iconBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        iconBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        iconPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 5, right: 5, bottom: 5, left: 5, unit: 'px' }
            }
        },
        iconMargin: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        iconHoverColor: {
            type: 'string',
            default: ''
        },
        iconHoverBackgroundColor: {
            type: 'string',
            default: ''
        },
        iconHoverBorderColor: {
            type: 'string',
            default: ''
        },
        linkEnabled: {
            type: 'boolean',
            default: false
        },
        linkUrl: {
            type: 'string',
            default: ''
        },
        linkOpenInNewTab: {
            type: 'boolean',
            default: false
        },
        linkRel: {
            type: 'string',
            default: ''
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 48,
                tablet: 40,
                mobile: 32
            }
        },
        backgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        borderStyle: {
            type: 'string',
            default: 'default'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                },
                tablet: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                },
                mobile: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                }
            }
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                },
                tablet: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                },
                mobile: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        hoverEffect: {
            type: 'string',
            default: 'none'
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
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
            }
        },
        rotateIcon: {
            type: 'number',
            default: 0
        },
        flipHorizontal: {
            type: 'boolean',
            default: false
        },
        flipVertical: {
            type: 'boolean',
            default: false
        }
    },
    example: {
        attributes: {
            iconValue: {
                id: 'star',
                name: 'Star',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
                style: 'solid',
                categories: ['design', 'basic-shapes']
            },
            iconColor: '#1e73be',
            backgroundColor: 'transparent',
            iconSize: { desktop: 80 },
			iconPadding: {
				desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			},
        },
    },
    edit: IconEdit,
    save: IconSave,
});