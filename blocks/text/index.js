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
    apiVersion: 3,
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
        html: true,
        className: false,
        customClassName: false,
        anchor: false,
        splitting: true,
        __experimentalSlashInserter: true
    },
    merge: (attributes, attributesToMerge) => {
        return {
            content: (attributes.content || '') + (attributesToMerge.content || ''),
        };
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
            type: 'rich-text',
            source: 'rich-text',
            selector: 'p,span,div',
            role: 'content'
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
                fontSize: {
                    desktop: { value: '', unit: 'px' },
                    tablet: { value: '', unit: 'px' },
                    mobile: { value: '', unit: 'px' }
                },
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: {
                    desktop: { value: '', unit: 'em' },
                    tablet: { value: '', unit: 'em' },
                    mobile: { value: '', unit: 'em' }
                },
                letterSpacing: {
                    desktop: { value: '', unit: 'px' },
                    tablet: { value: '', unit: 'px' },
                    mobile: { value: '', unit: 'px' }
                }
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
                    bottom: 1,
                    left: 0,
                    unit: 'rem',
					isLinked: false,
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
		animationDuration: {
			type: 'string',
			default: 'normal'
		},
		animationDelay: {
			type: 'number',
			default: ''
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
            content: __('This is a powerful text block with advanced styling options. You can customize typography, colors, spacing, borders, shadows and add animations.', 'digiblocks'),
            textColor: '#2563eb',
            htmlTag: 'h2'
        },
        viewportWidth: 400
    },
    edit: TextEdit,
    save: TextSave,
});