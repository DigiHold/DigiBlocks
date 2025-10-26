/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import HeadingEdit from './edit';
import HeadingSave from './save';

/**
 * Register Heading block
 */
registerBlockType('digiblocks/heading', {
    apiVersion: 3,
    title: digiBlocksData.blocks['heading'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['heading'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['heading'].description,
    keywords: [__('heading', 'digiblocks'), __('title', 'digiblocks'), __('header', 'digiblocks')],
    // Disable default controls and settings panels
    supports: {
        html: true,
        className: false,
        customClassName: false,
        anchor: false,
        splitting: true
    },
    transforms: {
        from: [
            {
                type: 'block',
                blocks: ['core/paragraph', 'digiblocks/text'],
                transform: (attributes) => {
                    return wp.blocks.createBlock('digiblocks/heading', {
                        content: attributes.content,
                    });
                },
            },
        ],
        to: [
            {
                type: 'block',
                blocks: ['digiblocks/text'],
                transform: (attributes) => {
                    return wp.blocks.createBlock('digiblocks/text', {
                        content: attributes.content,
                    });
                },
            },
        ],
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
            selector: 'h1,h2,h3,h4,h5,h6',
            role: 'content'
        },
        headingTag: {
            type: 'string',
            default: 'h2'
        },
		textEffect: {
			type: 'string',
			default: 'none'
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
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: '', tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: '', tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: '', tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        align: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: '',
                mobile: ''
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
		animationDuration: {
			type: 'string',
			default: 'normal'
		},
		animationDelay: {
			type: 'number',
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
            default: 'background'
        },
        displaySeparator: {
            type: 'boolean',
            default: false
        },
        separatorColor: {
            type: 'string',
            default: '#1e73be'
        },
        separatorSecondaryColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        separatorWidth: {
            type: 'object',
            default: {
                desktop: 50,
                tablet: 40,
                mobile: 30
            }
        },
        separatorHeight: {
            type: 'object',
            default: {
                desktop: 3,
                tablet: 2,
                mobile: 2
            }
        },
        separatorPosition: {
            type: 'string',
            default: 'bottom'
        },
        separatorStyle: {
            type: 'string',
            default: 'line-solid'
        },
        separatorSpacing: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: 8,
                mobile: 6
            }
        },
        separatorBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        linkEnabled: {
            type: 'boolean',
            default: false
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
        shadowEnabled: {
            type: 'boolean',
            default: false
        },
        textShadow: {
            type: 'object',
            default: {
                horizontal: 2,
                vertical: 2,
                blur: 3,
                color: 'rgba(0,0,0,0.3)'
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
                tablet: { value: 0, unit: 'px' },
                mobile: { value: 0, unit: 'px' },
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
                tablet: { value: 0, unit: 'px' },
                mobile: { value: 0, unit: 'px' },
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
            content: __('Beautiful Heading', 'digiblocks'),
            level: 2,
            textColor: '#333333',
            typography: {
                fontSize: { desktop: 32 },
                fontWeight: '600',
                lineHeight: { desktop: 1.2 }
            },
            displaySeparator: true,
            separatorStyle: 'line-gradient',
            separatorColor: '#1e73be'
        }
    },
    edit: HeadingEdit,
    save: HeadingSave,
});