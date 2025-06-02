/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import SocialShareEdit from './edit';
import SocialShareSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Social Share block
 */
registerBlockType('digiblocks/social-share', {
    apiVersion: 2,
	title: digiBlocksData.blocks['social-share'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['social-share'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['social-share'].description,
    keywords: [__('social', 'digiblocks'), __('share', 'digiblocks'), __('facebook', 'digiblocks'), __('twitter', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('social-share') ? true : false,
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
        showLabels: {
            type: 'boolean',
            default: false
        },
        buttonStyle: {
            type: 'string',
            default: 'filled'
        },
        buttonSize: {
            type: 'object',
            default: {
                desktop: 40,
                tablet: 36,
                mobile: 32
            }
        },
        iconSpacing: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: 8,
                mobile: 6
            }
        },
        alignment: {
            type: 'object',
            default: {
                desktop: 'flex-start',
                tablet: '',
                mobile: ''
            }
        },
        useCustomColors: {
            type: 'boolean',
            default: false
        },
        buttonBackgroundColor: {
            type: 'string',
            default: ''
        },
        buttonTextColor: {
            type: 'string',
            default: ''
        },
        buttonHoverBackgroundColor: {
            type: 'string',
            default: ''
        },
        buttonHoverTextColor: {
            type: 'string',
            default: ''
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
		borderColor: {
			type: 'string',
			default: ''
		},
		borderHoverColor: {
			type: 'string',
			default: ''
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
        padding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 15, bottom: 10, left: 15, unit: 'px' },
                tablet: { top: 8, right: 12, bottom: 8, left: 12, unit: 'px' },
                mobile: { top: 6, right: 10, bottom: 6, left: 10, unit: 'px' }
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
                fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        // Social platforms
        facebook: {
            type: 'boolean',
            default: true
        },
        twitter: {
            type: 'boolean',
            default: true
        },
        linkedin: {
            type: 'boolean',
            default: true
        },
        pinterest: {
            type: 'boolean',
            default: true
        },
        reddit: {
            type: 'boolean',
            default: false
        },
        whatsapp: {
            type: 'boolean',
            default: false
        },
        telegram: {
            type: 'boolean',
            default: false
        },
        email: {
            type: 'boolean',
            default: true
        },
        print: {
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
            facebook: true,
            twitter: true,
            linkedin: true,
            email: true,
            pinterest: false,
            reddit: false,
            whatsapp: false,
            telegram: false,
            print: false,
            buttonStyle: 'filled',
            buttonSize: {
                desktop: 40
            },
            alignment: {
                desktop: 'flex-start'
            }
        }
    },
    edit: SocialShareEdit,
    save: SocialShareSave,
});