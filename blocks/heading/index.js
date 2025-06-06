/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import HeadingEdit from './edit';
import HeadingSave from './save';
const { getBlockActiveStatus } = wp.digiBlocks;

/**
 * Register Heading block
 */
registerBlockType('digiblocks/heading', {
    apiVersion: 2,
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
		inserter: getBlockActiveStatus('heading') ? true : false,
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
            default: __('Add Your Heading', 'digiblocks')
        },
        headingTag: {
            type: 'string',
            default: 'h2'
        },
        textColor: {
            type: 'string',
            default: '#333333'
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
                fontSize: { desktop: 32, tablet: 28, mobile: 24 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        align: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: 'left',
                mobile: 'left'
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
        }
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