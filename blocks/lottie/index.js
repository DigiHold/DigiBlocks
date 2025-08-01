/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import LottieEdit from './edit';
import LottieSave from './save';


/**
 * Register Lottie Animation block
 */
registerBlockType('digiblocks/lottie', {
    apiVersion: 2,
    title: digiBlocksData.blocks['lottie'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['lottie'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['lottie'].description,
    keywords: [__('lottie', 'digiblocks'), __('animation', 'digiblocks'), __('dotlottie', 'digiblocks'), __('motion', 'digiblocks')],
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
        lottieSource: {
            type: 'string',
            default: ''
        },
        sourceType: {
            type: 'string',
            default: 'file'
        },
        lottieFile: {
            type: 'object',
            default: null
        },
        autoplay: {
            type: 'boolean',
            default: true
        },
        loop: {
            type: 'boolean',
            default: true
        },
        speed: {
            type: 'number',
            default: 1
        },
        width: {
            type: 'object',
            default: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            }
        },
        widthUnit: {
            type: 'string',
            default: 'px'
        },
        height: {
            type: 'object',
            default: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            }
        },
        heightUnit: {
            type: 'string',
            default: 'px'
        },
        alignment: {
            type: 'string',
            default: 'center'
        },
        backgroundColor: {
            type: 'string',
            default: ''
        },
        showControls: {
            type: 'boolean',
            default: false
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
        shadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            lottieSource: 'https://lottie.host/74c2e0cc-daa3-4269-b9a8-3205d6cd70d6/V7KchLpRt2.lottie',
            autoplay: true,
            loop: true,
            width: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            },
            height: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            }
        },
    },
    edit: LottieEdit,
    save: LottieSave,
});