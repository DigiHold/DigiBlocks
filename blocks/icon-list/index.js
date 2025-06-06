/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import IconListEdit from './edit';
import IconListSave from './save';
const { getBlockActiveStatus } = wp.digiBlocks;

/**
 * Register Icon List block
 */
registerBlockType('digiblocks/icon-list', {
    apiVersion: 2,
    title: digiBlocksData.blocks['icon-list'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['icon-list'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['icon-list'].description,
    keywords: [__('icon', 'digiblocks'), __('list', 'digiblocks'), __('menu', 'digiblocks'), __('feature', 'digiblocks'), __('service', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('icon-list') ? true : false,
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
		defaultIconSource: {
			type: 'string',
			default: 'library'
		},
		defaultCustomSvg: {
			type: 'string',
			default: ''
		},
        items: {
            type: 'array',
            default: [
                {
                    id: 'item-1',
                    content: __('First list item with icon', 'digiblocks'),
					iconSource: 'library',
                    icon: {
                        id: 'check',
                        name: 'Check',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    },
					customSvg: '',
                    linkEnabled: false,
                    linkUrl: '',
                    linkOpenInNewTab: false,
                    linkRel: ''
                },
                {
                    id: 'item-2',
                    content: __('Second list item with star icon', 'digiblocks'),
					iconSource: 'library',
                    icon: {
                        id: 'star',
                        name: 'Star',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    },
					customSvg: '',
                    linkUrl: '',
                    linkOpenInNewTab: false,
                    linkRel: ''
                },
                {
                    id: 'item-3',
                    content: __('Third list item with heart icon', 'digiblocks'),
					iconSource: 'library',
                    icon: {
                        id: 'heart',
                        name: 'Heart',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    },
					customSvg: '',
                    linkUrl: '',
                    linkOpenInNewTab: false,
                    linkRel: ''
                }
            ]
        },
        defaultIcon: {
            type: 'object',
            default: {
                id: 'check',
                name: 'Check',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
                style: 'solid',
                categories: ['design']
            }
        },
        contentTypography: {
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
        listLayout: {
            type: 'string',
            default: 'vertical'
        },
        listAlign: {
            type: 'string',
            default: 'left'
        },
        iconPosition: {
            type: 'string',
            default: 'before'
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 24,
                tablet: 20,
                mobile: 18
            }
        },
        iconSpace: {
            type: 'object',
            default: {
                desktop: 12,
                tablet: 10,
                mobile: 8
            }
        },
        itemSpace: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: 12,
                mobile: 8
            }
        },
        iconColor: {
            type: 'string',
            default: '#1e73be'
        },
        iconHoverColor: {
            type: 'string',
            default: ''
        },
        textColor: {
            type: 'string',
            default: '#333333'
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        animation: {
            type: 'string',
            default: 'none'
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
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 25, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' }
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
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
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
        backgroundColor: {
            type: 'string',
            default: ''
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        hoverEffect: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            items: [
                {
                    id: 'item-1',
                    content: __('Professional feature', 'digiblocks'),
                    icon: {
                        id: 'star',
                        name: 'Star',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    }
                },
                {
                    id: 'item-2',
                    content: __('24/7 support service', 'digiblocks'),
                    icon: {
                        id: 'headset',
                        name: 'Headset',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>',
                        style: 'solid',
                        categories: ['business', 'technology']
                    }
                },
                {
                    id: 'item-3',
                    content: __('Free updates and documentation', 'digiblocks'),
                    icon: {
                        id: 'download',
                        name: 'Download',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 0c17.7 0 32 14.3 32 32V242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7V32c0-17.7 14.3-32 32-32zM48 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H464c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H304 208 48zm272 80c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z"/></svg>',
                        style: 'solid',
                        categories: ['arrows', 'technology']
                    }
                }
            ],
            iconColor: '#1e73be',
            textColor: '#333333'
        },
        viewportWidth: 800
    },
    edit: IconListEdit,
    save: IconListSave,
});