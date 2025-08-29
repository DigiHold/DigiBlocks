/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import TextEdit from './edit';
import TextSave from './save';


/**
 * Register Text block
 */
registerBlockType('digiblocks/text', {
    apiVersion: 2,
    title: digiBlocksData.blocks['text'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['text'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['text'].description,
    keywords: [__('text', 'digiblocks'), __('paragraph', 'digiblocks'), __('content', 'digiblocks')],
    // Disable default controls and settings panels
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
        content: {
            type: 'string',
            default: __('This is a powerful text block with advanced styling options.', 'digiblocks')
        },
        htmlTag: {
            type: 'string',
            default: 'p'
        },
        align: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: '',
                mobile: ''
            }
        },
		maxWidth: {
			type: 'object',
			default: {
				desktop: { value: '', unit: 'px' },
				tablet: { value: '', unit: 'px' },
				mobile: { value: '', unit: 'px' }
			}
		},
        textColor: {
            type: 'string',
            default: ''
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
        backgroundGradient: {
            type: 'string',
            default: 'none'
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: '', tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: '', tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: '', tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        textShadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.3)',
                horizontal: 0,
                vertical: 0,
                blur: 0
            }
        },
        padding: {
            type: 'object',
            default: {
                desktop: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
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
                    top: 0,
                    right: 0,
                    bottom: 16,
                    left: 0,
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
        },
        borderStyle: {
            type: 'string',
            default: 'default'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
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
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderHoverColor: {
            type: 'string',
            default: ''
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
        }
    },
    example: {
        attributes: {
            content: __('This is a powerful text block with advanced styling options. You can customize typography, colors, spacing, borders, shadows and add animations.', 'digiblocks'),
            textColor: '#2563eb',
            htmlTag: 'h2'
        },
        viewportWidth: 400
    },
    edit: TextEdit,
    save: TextSave,
});