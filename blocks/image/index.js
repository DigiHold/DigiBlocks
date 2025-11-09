/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import ImageEdit from './edit';
import ImageSave from './save';


/**
 * Register Image block
 */
registerBlockType('digiblocks/image', {
    apiVersion: 2,
    title: digiBlocksData.blocks['image'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['image'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['image'].description,
    keywords: [__('image', 'digiblocks'), __('picture', 'digiblocks'), __('photo', 'digiblocks'), __('media', 'digiblocks')],
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
        imageId: {
            type: 'number',
        },
        imageUrl: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        altText: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'alt',
            default: '',
        },
        title: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'title',
            default: '',
        },
        caption: {
            type: 'string',
            source: 'html',
            selector: 'figcaption',
            default: '',
        },
        dimensionType: {
            type: 'string',
            default: 'default',
        },
        containerWidth: {
            type: 'string',
            default: 'auto',
        },
        width: {
			type: "object",
			default: {
				desktop: { value: 100, unit: "%" },
				tablet: { value: "", unit: "" },
				mobile: { value: "", unit: "" }
			}
		},
		height: {
			type: "object",
			default: {
				desktop: { value: "", unit: "px" },
				tablet: { value: "", unit: "" },
				mobile: { value: "", unit: "" }
			}
		},
        sizeSlug: {
            type: 'string',
            default: 'large',
        },
        align: {
            type: 'string',
            default: 'center',
        },
        alignTablet: {
            type: 'string',
            default: 'center',
        },
        alignMobile: {
            type: 'string',
            default: 'center',
        },
        objectFit: {
            type: 'string',
            default: 'cover',
        },
        borderStyle: {
            type: 'string',
            default: 'none',
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
            default: '#e0e0e0',
        },
        borderHoverColor: {
            type: 'string',
        },
        boxShadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.1)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset',
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
                position: 'outset',
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
        url: {
            type: 'string',
            default: ''
        },
        opensInNewTab: {
            type: 'boolean',
            default: false
        },
        rel: {
            type: 'string',
            default: ''
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
        hoverEffect: {
            type: 'string',
            default: 'none'
        },
        overlayEnable: {
            type: 'boolean',
            default: false,
        },
        overlayColor: {
            type: 'string',
            default: 'rgba(0,0,0,0.5)',
        },
        overlayHoverOnly: {
            type: 'boolean',
            default: true,
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
            imageUrl: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
            sizeSlug: 'large',
            width: {
                desktop: { value: 100, unit: "%" },
                tablet: 100,
                mobile: 100
            }
        },
    },
    edit: ImageEdit,
    save: ImageSave,
});