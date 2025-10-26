/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import ContainerEdit from './edit';
import ContainerSave from './save';

/**
 * Register Container block
 */
registerBlockType('digiblocks/container', {
    apiVersion: 2,
    title: digiBlocksData.blocks['container'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['container'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['container'].description,
    keywords: [__('container', 'digiblocks'), __('section', 'digiblocks'), __('row', 'digiblocks'), __('layout', 'digiblocks'), __('columns', 'digiblocks')],
    supports: {
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
    },
    attributes: {
		isNested: {
			type: 'boolean',
			default: false
		},
        id: {
            type: 'string',
            default: '',
        },
		visibility: {
			type: 'object',
			default: {
				desktop: false,
				tablet: false,
				mobile: false
			}
		},
		flexWrap: {
			type: 'object',
			default: {
				desktop: 'nowrap',
				tablet: '',
				mobile: ''
			}
		},
        anchor: {
            type: 'string',
            default: ''
        },
        customClasses: {
            type: 'string',
            default: ''
        },
        layout: {
            type: 'string',
            default: ''
        },
        contentLayout: {
            type: 'string',
            default: 'boxed'
        },
		contentWidth: {
			type: 'object',
			default: {
				desktop: { value: parseInt(digiBlocksData.contentWidth) || 1200, unit: 'px' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
			}
		},
		contentMaxWidth: {
			type: 'object',
			default: {
				desktop: { value: parseInt(digiBlocksData.contentMaxWidth) || 90, unit: '%' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
			}
		},
		heightType: {
			type: 'object',
			default: {
				desktop: 'auto',
				tablet: '',
				mobile: ''
			}
		},
		minHeight: {
			type: 'object',
			default: {
				desktop: { value: 0, unit: 'px' },
				tablet: { value: '', unit: '' },
				mobile: { value: '', unit: '' }
			}
		},
		horizontalAlign: {
			type: 'object',
			default: {
				desktop: 'center',
				tablet: '',
				mobile: ''
			}
		},
		verticalAlign: {
			type: 'object',
			default: {
				desktop: 'center',
				tablet: '',
				mobile: ''
			}
		},
		columnVerticalAlign: {
			type: 'object',
			default: {
				desktop: 'flex-start',
				tablet: '',
				mobile: ''
			}
		},
		columnGap: {
			type: 'object',
			default: {
				desktop: { value: 20, unit: 'px' },
				tablet: { value: '', unit: 'px' },
				mobile: { value: '', unit: 'px' }
			}
		},
		rowGap: {
			type: 'object',
			default: {
				desktop: { value: 20, unit: 'px' },
				tablet: { value: '', unit: 'px' },
				mobile: { value: '', unit: 'px' }
			}
		},
        reverseColumnsMobile: {
            type: 'boolean',
            default: false
        },
        stackOnTablet: {
            type: 'boolean',
            default: false
        },
        stackOnMobile: {
            type: 'boolean',
            default: true
        },
        overflowHidden: {
            type: 'boolean',
            default: false
        },
        backgroundColor: {
            type: 'string',
            default: ''
        },
        backgroundGradient: {
            type: 'object',
            default: {
                enable: false,
                type: 'linear',
                angle: 90,
                position: 'center center',
                colors: [
                    { color: '#667eea', position: 0 },
                    { color: '#764ba2', position: 100 }
                ]
            }
        },
        backgroundImage: {
            type: 'object',
            default: {
                url: '',
                id: 0,
                alt: '',
                size: ''
            }
        },
        backgroundPosition: {
            type: 'string',
            default: 'center center'
        },
        backgroundRepeat: {
            type: 'string',
            default: 'no-repeat'
        },
        backgroundSize: {
            type: 'string',
            default: 'cover'
        },
        backgroundVideo: {
            type: 'object',
            default: {
                url: '',
                id: 0,
                alt: '',
                size: ''
            }
        },
        backgroundVideoFallbackImage: {
            type: 'object',
            default: {
                url: '',
                id: 0,
                alt: '',
                size: ''
            }
        },
        backgroundOverlay: {
            type: 'string',
            default: ''
        },
        backgroundOverlayOpacity: {
            type: 'number',
            default: 0.7
        },
        backgroundOverlayBlendMode: {
            type: 'string',
            default: 'normal'
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
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
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
			layout: '',
			backgroundColor: '#f8f9fa',
			padding: {
				desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		// No inner blocks to ensure layout selector appears
		innerBlocks: [],
		viewportWidth: 500
	},
    edit: ContainerEdit,
    save: ContainerSave,
});