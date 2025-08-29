/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import SeparatorEdit from './edit';
import SeparatorSave from './save';


/**
 * Register Separator block
 */
registerBlockType('digiblocks/separator', {
    apiVersion: 2,
    title: digiBlocksData.blocks['separator'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['separator'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['separator'].description,
    keywords: [__('separator', 'digiblocks'), __('divider', 'digiblocks'), __('horizontal rule', 'digiblocks'), __('hr', 'digiblocks')],
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
        contentType: {
            type: 'string',
            default: 'none'
        },
        content: {
            type: 'string',
            default: 'Separator'
        },
        iconValue: {
            type: 'object',
            default: null
        },
        separatorStyle: {
            type: 'string',
            default: 'line'
        },
        primaryColor: {
            type: 'string',
            default: '#222222'
        },
        secondaryColor: {
            type: 'string',
            default: '#f0f0f0'
        },
        textColor: {
            type: 'string',
            default: '#333333'
        },
        width: {
            type: 'object',
            default: {
                desktop: 100,
                tablet: '',
                mobile: ''
            }
        },
        widthUnit: {
            type: 'string',
            default: '%'
        },
        height: {
            type: 'object',
            default: {
                desktop: 3,
                tablet: '',
                mobile: ''
            }
        },
        heightUnit: {
            type: 'string',
            default: 'px'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: 0,
                tablet: '',
                mobile: ''
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: {
                    top: 30,
                    bottom: 30,
                    unit: 'px'
                },
                tablet: {
                    top: '',
                    bottom: '',
                    unit: 'px'
                },
                mobile: {
                    top: '',
                    bottom: '',
                    unit: 'px'
                }
            }
        },
        align: {
            type: 'string',
            default: 'center'
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        typography: {
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
        iconSize: {
            type: 'object',
            default: {
                desktop: 24,
                tablet: '',
                mobile: ''
            }
        },
        gap: {
            type: 'object',
            default: {
                desktop: 15,
                tablet: '',
                mobile: ''
            }
        }
    },
    example: {
        attributes: {
            separatorStyle: 'gradient',
            primaryColor: '#1e73be',
            secondaryColor: '#f0f0f0',
            width: { desktop: 80 },
            height: { desktop: 4 },
            contentType: 'text',
            content: 'Section',
            textColor: '#333333'
        }
    },
    edit: SeparatorEdit,
    save: SeparatorSave,
});