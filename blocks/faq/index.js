/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import FAQEdit from './edit';
import FAQSave from './save';


/**
 * Register FAQ block
 */
registerBlockType('digiblocks/faq', {
    apiVersion: 2,
    title: digiBlocksData.blocks['faq'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['faq'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['faq'].description,
    keywords: [__('faq', 'digiblocks'), __('questions', 'digiblocks'), __('answers', 'digiblocks'), __('schema', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
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
        items: {
            type: 'array',
            default: [
                {
                    id: 'faq-item-1',
                    title: __('What is a frequently asked question?', 'digiblocks'),
                    content: __('A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.', 'digiblocks'),
                    isOpen: true
                },
                {
                    id: 'faq-item-2',
                    title: __('How do I add more questions and answers?', 'digiblocks'),
                    content: __('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.', 'digiblocks'),
                    isOpen: false
                }
            ]
        },
        titleColor: {
            type: 'string',
            default: ''
        },
        titleHoverColor: {
            type: 'string',
            default: ''
        },
        titleActiveColor: {
            type: 'string',
            default: '#1e73be'
        },
        backgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        backgroundActiveColor: {
            type: 'string',
            default: '#f7f7f7'
        },
        contentColor: {
            type: 'string',
            default: '#666666'
        },
        contentBackgroundColor: {
            type: 'string',
            default: ''
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderHoverColor: {
            type: 'string',
            default: ''
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderStyle: {
            type: 'string',
            default: 'solid'
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
                desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        titleTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 18, tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        contentTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        iconPosition: {
            type: 'string',
            default: 'right'
        },
        iconColor: {
            type: 'string',
            default: ''
        },
        iconHoverColor: {
            type: 'string',
            default: ''
        },
        iconActiveColor: {
            type: 'string',
            default: '#1e73be'
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: '',
                mobile: ''
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        allowMultipleOpen: {
            type: 'boolean',
            default: false
        },
        iconType: {
            type: 'string',
            default: 'plusMinus'
        },
        titleTag: {
            type: 'string',
            default: 'h3'
        },
        questionPrefix: {
            type: 'string',
            default: ''
        },
        questionPrefixColor: {
            type: 'string',
            default: ''
        },
        answerPrefix: {
            type: 'string',
            default: ''
        },
        answerPrefixColor: {
            type: 'string',
            default: ''
        },
        layout: {
            type: 'string',
            default: 'boxed'
        },
        itemsSpacing: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: '',
                mobile: ''
            }
        },
        schemaType: {
            type: 'string',
            default: 'FAQPage'
        },
        schemaName: {
            type: 'string',
            default: ''
        }
    },
    example: {
        attributes: {
            items: [
                {
                    id: 'faq-item-1',
                    title: __('What is a frequently asked question?', 'digiblocks'),
                    content: __('A frequently asked question (FAQ) is a question that is commonly asked by users or customers.', 'digiblocks'),
                    isOpen: true
                },
                {
                    id: 'faq-item-2',
                    title: __('How do I add more questions?', 'digiblocks'),
                    content: __('Click the "Add FAQ Item" button to add more questions and answers.', 'digiblocks'),
                    isOpen: false
                }
            ],
            layout: 'boxed',
            titleColor: '',
            titleActiveColor: '#1e73be',
            backgroundColor: '#ffffff'
        }
    },
    edit: FAQEdit,
    save: FAQSave,
});