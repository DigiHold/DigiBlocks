/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import LogoEdit from './edit';
import LogoSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Logo block
 */
registerBlockType('digiblocks/logo', {
    apiVersion: 2,
    title: digiBlocksData.blocks['logo'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['logo'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['logo'].description,
    keywords: [__('logo', 'digiblocks'), __('brand', 'digiblocks'), __('identity', 'digiblocks'), __('header', 'digiblocks'), __('theme', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('logo') ? true : false,
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
        logoType: {
            type: 'string',
            default: 'image'
        },
        imageId: {
            type: 'number',
            default: 0
        },
        imageUrl: {
            type: 'string',
            default: ''
        },
        imageAlt: {
            type: 'string',
            default: ''
        },
        text: {
            type: 'string',
            default: __('Site Logo', 'digiblocks')
        },
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 28, tablet: 26, mobile: 24 },
                fontSizeUnit: 'px',
                fontWeight: '700',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
		textIcon: {
			type: 'object',
			default: null
		},
		iconPosition: {
			type: 'string',
			default: 'before'
		},
        logoWidth: {
			type: 'object',
			default: {
				desktop: { value: 200, unit: 'px' },
				tablet: { value: 180, unit: 'px' },
				mobile: { value: 150, unit: 'px' }
			}
		},
		logoHeight: {
			type: 'object',
			default: {
				desktop: { value: 0, unit: 'px' },
				tablet: { value: 0, unit: 'px' },
				mobile: { value: 0, unit: 'px' }
			}
		},
		iconSize: {
			type: 'object',
			default: {
				desktop: { value: 30, unit: 'px' },
				tablet: { value: 28, unit: 'px' },
				mobile: { value: 26, unit: 'px' }
			}
		},
        logoAlignment: {
            type: 'object',
            default: {
                desktop: 'flex-start',
                tablet: '',
                mobile: ''
            }
        },
        textColor: {
            type: 'string',
            default: '#333333'
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        backgroundColor: {
            type: 'string',
            default: ''
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        linkEnabled: {
            type: 'boolean',
            default: true
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
        hoverEffect: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            logoType: 'text',
            text: __('My Company', 'digiblocks'),
            logoAlignment: 'center',
            textColor: '#333333'
        }
    },
    edit: LogoEdit,
    save: LogoSave,
});