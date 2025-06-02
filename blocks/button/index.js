/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import ButtonEdit from './edit';
import ButtonSave from './save';

/**
 * Register Button block
 */
registerBlockType('digiblocks/button', {
    apiVersion: 2,
	title: __('Button', 'digiblocks'),
    parent: ['digiblocks/buttons'],
    icon: {
        src: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm0 9H5v-7h14v7z"/>
            </svg>
        )
    },
    description: __('A single button within the buttons block', 'digiblocks'),
    supports: {
        inserter: false, // Can only be inserted within buttons block
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
		reusable: false,
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
        text: {
            type: 'string',
            default: __('Button', 'digiblocks')
        },
        url: {
            type: 'string',
            default: ''
        },
        opensInNewTab: {
            type: 'boolean',
            default: false
        },
        rel: {
            type: 'boolean',
            default: false
        },
        iconValue: {
            type: 'object',
            default: null
        },
        iconPosition: {
            type: 'string',
            default: 'left'
        },
        size: {
            type: 'string',
            default: 'medium'
        },
        fill: {
            type: 'boolean',
            default: false
        },
        buttonTypography: {
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
        textColor: {
            type: 'string',
            default: '#ffffff'
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        backgroundColor: {
            type: 'string',
            default: '#1e73be'
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
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: ''
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
                desktop: { top: 12, right: 24, bottom: 12, left: 24, unit: 'px' },
                tablet: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
                mobile: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' }
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
        onlyIcon: {
            type: 'boolean',
            default: false
        }
    },
    example: {
        attributes: {
            text: __('Button', 'digiblocks'),
            backgroundColor: '#1e73be',
            textColor: '#ffffff'
        }
    },
    edit: ButtonEdit,
    save: ButtonSave,
});