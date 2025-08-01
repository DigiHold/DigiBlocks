/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import RowEdit from './edit';
import RowSave from './save';

/**
 * Register Row block
 */
registerBlockType('digiblocks/row', {
    apiVersion: 2,
    title: digiBlocksData.blocks['row'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['row'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['row'].description,
    keywords: [__('row', 'digiblocks'), __('flex', 'digiblocks'), __('horizontal', 'digiblocks'), __('layout', 'digiblocks')],
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
        anchor: {
            type: 'string',
            default: ''
        },
        customClasses: {
            type: 'string',
            default: ''
        },
        contentWidth: {
            type: 'object',
            default: {
                desktop: parseInt(digiBlocksData.contentWidth) || 1200,
                tablet: '',
                mobile: ''
            }
        },
        contentMaxWidth: {
            type: 'object',
            default: {
                desktop: parseInt(digiBlocksData.contentMaxWidth) || 90,
                tablet: '',
                mobile: ''
            }
        },
        heightType: {
            type: 'object',
            default: {
                desktop: 'auto',
                tablet: 'auto',
                mobile: 'auto'
            }
        },
		nestedWidth: {
			type: 'object',
			default: {
				desktop: 'auto',
				tablet: 'auto',
				mobile: 'auto'
			}
		},
        horizontalAlign: {
            type: 'object',
            default: {
                desktop: 'flex-start',
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
        minHeight: {
            type: 'object',
            default: {
                desktop: 0,
                tablet: 0,
                mobile: 0
            }
        },
        gap: {
            type: 'object',
            default: {
                desktop: { value: 20, unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' }
            }
        },
        overflowHidden: {
            type: 'boolean',
            default: false
        },
        zIndex: {
            type: 'number',
            default: 0
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
    },
    example: {
        attributes: {
            backgroundColor: '#f8f9fa',
            padding: {
                desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        innerBlocks: [
            {
                name: 'digiblocks/text',
                attributes: {
                    content: __('Row content goes here...', 'digiblocks')
                }
            }
        ],
        viewportWidth: 500
    },
    edit: RowEdit,
    save: RowSave,
});