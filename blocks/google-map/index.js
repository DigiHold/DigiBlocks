/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import GoogleMapEdit from './edit';
import GoogleMapSave from './save';


/**
 * Register Google Map block
 */
registerBlockType('digiblocks/google-map', {
    apiVersion: 2,
    title: digiBlocksData.blocks['google-map'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['google-map'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['google-map'].description,
    keywords: [__('map', 'digiblocks'), __('google', 'digiblocks'), __('location', 'digiblocks'), __('marker', 'digiblocks')],
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
        address: {
            type: 'string',
            default: ''
        },
        mapHeight: {
            type: 'object',
            default: {
                desktop: 400,
                tablet: 350,
                mobile: 300
            }
        },
        zoom: {
            type: 'number',
            default: 10
        },
        mapType: {
            type: 'string',
            default: 'roadmap'
        },
		mapStyle: {
			type: 'string',
			default: 'default'
		},
		customMapStyle: {
			type: 'string',
			default: ''
		},
        mapId: {
            type: 'string',
            default: ''
        },
        markers: {
            type: 'array',
            default: []
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        enableZoom: {
            type: 'boolean',
            default: true
        },
        enableScroll: {
            type: 'boolean',
            default: true
        },
        enableFullscreenControl: {
            type: 'boolean',
            default: true
        },
        enableStreetViewControl: {
            type: 'boolean',
            default: true
        },
        enableMapTypeControl: {
            type: 'boolean',
            default: true
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
            default: '#e0e0e0'
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
    },
    example: {
        attributes: {
            address: 'New York, NY',
            mapHeight: {
                desktop: 300
            },
            zoom: 12,
            mapType: 'roadmap',
        }
    },
    edit: GoogleMapEdit,
    save: GoogleMapSave,
});