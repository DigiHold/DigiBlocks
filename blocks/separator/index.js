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
				desktop: { value: 100, unit: '%' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
			}
		},
		height: {
			type: 'object',
			default: {
				desktop: { value: 3, unit: 'px' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
			}
		},
		borderRadius: {
			type: 'object',
			default: {
				desktop: { value: 0, unit: 'px' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
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
		animationDuration: {
			type: 'string',
			default: 'normal'
		},
		animationDelay: {
			type: 'number',
			default: ''
		},
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: { value: 16, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: { value: 1.5, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } },
                letterSpacing: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }
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
        },
        position: {
            type: 'string',
            default: 'default',
        },
        horizontalOrientation: {
            type: 'string',
            default: 'left',
        },
        horizontalOffset: {
            type: 'object',
            default: {
                desktop: { value: 0, unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' },
            },
        },
        verticalOrientation: {
            type: 'string',
            default: 'top',
        },
        verticalOffset: {
            type: 'object',
            default: {
                desktop: { value: 0, unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' },
            },
        },
        zIndex: {
            type: 'number',
            default: '',
        },
		transform: {
            type: 'object',
            default: {
                rotate: { desktop: '', tablet: '', mobile: '' },
                rotate3d: false,
                rotateX: { desktop: '', tablet: '', mobile: '' },
                rotateY: { desktop: '', tablet: '', mobile: '' },
                perspective: { desktop: '', tablet: '', mobile: '' },
                offsetX: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                offsetY: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                keepProportions: true,
                scale: { desktop: '', tablet: '', mobile: '' },
                scaleX: { desktop: '', tablet: '', mobile: '' },
                scaleY: { desktop: '', tablet: '', mobile: '' },
                skewX: { desktop: '', tablet: '', mobile: '' },
                skewY: { desktop: '', tablet: '', mobile: '' },
                flipHorizontal: false,
                flipVertical: false,
                xAnchor: { desktop: 'center', tablet: '', mobile: '' },
                yAnchor: { desktop: 'center', tablet: '', mobile: '' },
                transitionDuration: ''
            }
        },
        transformHover: {
            type: 'object',
            default: {
                rotate: { desktop: '', tablet: '', mobile: '' },
                rotate3d: false,
                rotateX: { desktop: '', tablet: '', mobile: '' },
                rotateY: { desktop: '', tablet: '', mobile: '' },
                perspective: { desktop: '', tablet: '', mobile: '' },
                offsetX: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                offsetY: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                keepProportions: true,
                scale: { desktop: '', tablet: '', mobile: '' },
                scaleX: { desktop: '', tablet: '', mobile: '' },
                scaleY: { desktop: '', tablet: '', mobile: '' },
                skewX: { desktop: '', tablet: '', mobile: '' },
                skewY: { desktop: '', tablet: '', mobile: '' },
                flipHorizontal: false,
                flipVertical: false,
                xAnchor: { desktop: 'center', tablet: '', mobile: '' },
                yAnchor: { desktop: 'center', tablet: '', mobile: '' },
                transitionDuration: ''
            }
        },
    },
    example: {
		attributes: {
			separatorStyle: 'gradient',
			primaryColor: '#1e73be',
			secondaryColor: '#f0f0f0',
			width: { 
				desktop: { value: 80, unit: '%' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
			},
			height: { 
				desktop: { value: 4, unit: 'px' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
			},
			contentType: 'text',
			content: 'Section',
			textColor: '#333333'
		}
	},
    edit: SeparatorEdit,
    save: SeparatorSave,
});