/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import LoginLinkEdit from './edit';
import LoginLinkSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Login Link block
 */
registerBlockType('digiblocks/login-link', {
    apiVersion: 2,
    title: digiBlocksData.blocks['login-link'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['login-link'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['login-link'].description,
    keywords: [__('login', 'digiblocks'), __('account', 'digiblocks'), __('user', 'digiblocks'), __('link', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
		inserter: getBlockActiveStatus('login-link') ? true : false,
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
    },
    attributes: {
        id: {
            type: 'string',
        },
        customClasses: {
            type: 'string',
        },
		visibility: {
			type: 'object',
			default: {
				desktop: false,
				tablet: false,
				mobile: false
			}
		},
        loginText: {
            type: 'string',
            default: __('Log In', 'digiblocks'),
        },
        loginIconValue: {
            type: 'object',
            default: null,
        },
        loginIconPosition: {
            type: 'string',
            default: 'left',
        },
        loginUrl: {
            type: 'string',
            default: '',
        },
        loginOpenInNewTab: {
            type: 'boolean',
            default: false,
        },
        loginRel: {
            type: 'string',
            default: '',
        },
        loggedInText: {
            type: 'string',
            default: __('My Account', 'digiblocks'),
        },
        loggedInIconValue: {
            type: 'object',
            default: null,
        },
        loggedInIconPosition: {
            type: 'string',
            default: 'left',
        },
        loggedInUrl: {
            type: 'string',
            default: '',
        },
        loggedInOpenInNewTab: {
            type: 'boolean',
            default: false,
        },
        loggedInRel: {
            type: 'string',
            default: '',
        },
		align: {
            type: 'object',
            default: {
                desktop: 'flex-start',
                tablet: '',
                mobile: ''
            }
        },
        textColor: {
            type: 'string',
        },
        textHoverColor: {
            type: 'string',
        },
        typography: {
            type: 'object',
            default: {},
        },
		iconSize: {
			type: 'object',
			default: {
				desktop: 16,
				tablet: 15,
				mobile: 14
			}
		},
    },
	example: {
        attributes: {
            loginText: __('Log In', 'digiblocks'),
            loggedInText: __('My Account', 'digiblocks'),
            loginIconPosition: 'left',
            textColor: '#3a86ff',
            textHoverColor: '#023e8a',
            typography: {
                fontSize: {
                    desktop: 16,
                    tablet: 15,
                    mobile: 14
                },
                fontWeight: '500'
            }
        }
    },
    edit: LoginLinkEdit,
    save: LoginLinkSave,
});