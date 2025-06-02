/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import CallToActionEdit from './edit';
import CallToActionSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Call to Action block
 */
registerBlockType('digiblocks/call-to-action', {
    apiVersion: 2,
    title: digiBlocksData.blocks['call-to-action'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['call-to-action'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['call-to-action'].description,
    keywords: [__('cta', 'digiblocks'), __('call to action', 'digiblocks'), __('button', 'digiblocks'), __('conversion', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('call-to-action') ? true : false,
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
        style: {
            type: 'string',
            default: 'basic'
        },
		horizontalLayout: {
			type: 'boolean',
			default: false
		},
        title: {
            type: 'string',
            default: __('Ready to Get Started?', 'digiblocks')
        },
        content: {
            type: 'string',
            default: __('Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.', 'digiblocks')
        },
        headingTag: {
            type: 'string',
            default: 'h2'
        },
        titleColor: {
            type: 'string',
            default: '#333333'
        },
        textColor: {
            type: 'string',
            default: '#666666'
        },
        buttonColor: {
            type: 'string',
            default: '#1e73be'
        },
        buttonTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        backgroundColor: {
            type: 'string',
            default: '#f5f5f5'
        },
        backgroundType: {
            type: 'string',
            default: 'color'
        },
        backgroundImage: {
            type: 'object',
            default: null
        },
        backgroundOverlayColor: {
            type: 'string',
            default: 'rgba(0,0,0,0.5)'
        },
        backgroundOverlayOpacity: {
            type: 'number',
            default: 50
        },
        backgroundPosition: {
            type: 'string',
            default: 'center center'
        },
        backgroundSize: {
            type: 'string',
            default: 'cover'
        },
        backgroundRepeat: {
            type: 'string',
            default: 'no-repeat'
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
		borderWidth: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
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
		padding: {
            type: 'object',
            default: {
                desktop: { top: 40, right: 30, bottom: 40, left: 30, unit: 'px' },
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
        align: {
            type: 'string',
            default: 'left'
        },
        titleTypography: {
            type: 'object'
        },
        contentTypography: {
            type: 'object'
        },
        buttonTypography: {
            type: 'object'
        },
        contentWidth: {
            type: 'number'
        },
        width: {
            type: 'string',
            default: '100%'
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        boxShadow: {
            type: 'object'
        },
        boxShadowHover: {
            type: 'object'
        },
		buttonBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
		buttonPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        buttonsAlign: {
            type: 'string',
            default: 'left'
        },
        buttons: {
            type: 'array',
            default: []
        },
        titleHoverColor: {
            type: 'string',
            default: ''
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        buttonHoverColor: {
            type: 'string',
            default: ''
        },
        buttonTextHoverColor: {
            type: 'string',
            default: ''
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        highlightText: {
            type: 'string',
            default: ''
        },
        highlightColor: {
            type: 'string',
            default: '#ffde59'
        },
        highlightType: {
            type: 'string',
            default: 'none'
        },
        verticalAlign: {
            type: 'string',
            default: 'center'
        },
        reverseColumnsMobile: {
            type: 'boolean',
            default: false
        },
        minHeight: {
            type: 'object'
        },
        gradientDirection: {
            type: 'number',
            default: 135
        },
        ribbonColor: {
            type: 'string',
            default: '#1e73be'  
        },
        ribbonTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        ribbonPosition: {
            type: 'string',
            default: 'top-right'
        },
        ribbonText: {
            type: 'string',
            default: 'Special Offer'
        }
    },
    example: {
        attributes: {
            style: 'basic',
            title: __('Ready to Get Started?', 'digiblocks'),
            content: __('Join us today and experience the difference.', 'digiblocks'),
            buttons: [
                {
                    id: 'button-1',
                    text: __('Sign Up Now', 'digiblocks'),
                    url: '#',
                    isPrimary: true
                }
            ],
            backgroundColor: '#f5f5f5',
        }
    },
    edit: CallToActionEdit,
    save: CallToActionSave,
});