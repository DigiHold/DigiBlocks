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
		iconSource: {
			type: 'string',
			default: 'library'
		},
		customSvg: {
			type: 'string',
			default: ''
		},
        iconValue: {
            type: 'object',
            default: null
        },
        iconPosition: {
            type: 'string',
            default: 'left'
        },
        iconWidth: {
            type: 'object',
            default: {
                desktop: { value: '', unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' }
            }
        },
        iconHeight: {
            type: 'object',
            default: {
                desktop: { value: '', unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' }
            }
        },
        iconGap: {
            type: 'object',
            default: {
                desktop: { value: '', unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' }
            }
        },
        iconColor: {
            type: 'string',
            default: ''
        },
        iconHoverColor: {
            type: 'string',
            default: ''
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
                fontSize: {
                    desktop: { value: '', unit: 'px' },
                    tablet: { value: '', unit: 'px' },
                    mobile: { value: '', unit: 'px' }
                },
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
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
                desktop: { top: 12, right: 24, bottom: 12, left: 24, unit: 'px', isLinked: false, },
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
        onlyIcon: {
            type: 'boolean',
            default: false
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
		hoverEffect: {
			type: 'string',
			default: 'none',
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
            text: __('Button', 'digiblocks'),
            backgroundColor: '#1e73be',
            textColor: '#ffffff'
        }
    },
    edit: ButtonEdit,
    save: ButtonSave,
});