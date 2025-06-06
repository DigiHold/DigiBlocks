/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import AccordionEdit from './edit';
import AccordionSave from './save';
const { getBlockActiveStatus } = wp.digiBlocks;

/**
 * Register Accordion block
 */
registerBlockType('digiblocks/accordion', {
    apiVersion: 2,
    title: digiBlocksData.blocks['accordion'].title,
    category: 'digiblocks',
	icon: {
		src: () => {
			const { viewbox, path } = digiBlocksData.blocks['accordion'].icon;
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
					<path d={path} />
				</svg>
			);
		}
	},
	description: digiBlocksData.blocks['accordion'].description,
    keywords: [__('accordion', 'digiblocks'), __('toggle', 'digiblocks'), __('collapse', 'digiblocks'), __('faq', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
		inserter: getBlockActiveStatus('accordion') ? true : false,
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
		items: {
			type: 'array',
			default: [
				{
					id: 'item-1',
					title: __('Accordion Item 1', 'digiblocks'),
					content: __('Add your content here. Edit or remove this text inline or in the module Content settings.', 'digiblocks'),
					isOpen: true
				},
				{
					id: 'item-2',
					title: __('Accordion Item 2', 'digiblocks'),
					content: __('Add your content here. Edit or remove this text inline or in the module Content settings.', 'digiblocks'),
					isOpen: false
				}
			]
		},
		titleColor: {
			type: 'string',
			default: '#333333'
		},
		titleHoverColor: {
			type: 'string',
			default: ''
		},
		titleActiveColor: {
			type: 'string',
			default: '#1e73be'
		},
		backgroundColor: {
			type: 'string',
			default: '#ffffff'
		},
		backgroundHoverColor: {
			type: 'string',
			default: ''
		},
		backgroundActiveColor: {
			type: 'string',
			default: '#f7f7f7'
		},
		contentColor: {
			type: 'string',
			default: '#666666'
		},
		contentHoverColor: {
			type: 'string',
			default: ''
		},
		borderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
		borderHoverColor: {
			type: 'string',
			default: ''
		},
		borderRadius: {
			type: 'object',
			default: {
				desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		borderWidth: {
			type: 'object',
			default: {
				desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		borderStyle: {
			type: 'string',
			default: 'solid'
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
				desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
				tablet: { top: 15, right: 15, bottom: 15, left: 15, unit: 'px' },
				mobile: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' }
			}
		},
		margin: {
			type: 'object',
			default: {
				desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
				tablet: { top: 0, right: 0, bottom: 25, left: 0, unit: 'px' },
				mobile: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' }
			}
		},
		titleTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: 18, tablet: 16, mobile: 16 },
				fontSizeUnit: 'px',
				fontWeight: '600',
				fontStyle: 'normal',
				textTransform: 'none',
				textDecoration: 'none',
				lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
				lineHeightUnit: 'em',
				letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
				letterSpacingUnit: 'px'
			}
		},
		contentTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: 16, tablet: 15, mobile: 14 },
				fontSizeUnit: 'px',
				fontWeight: '',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
				lineHeightUnit: 'em',
				letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
				letterSpacingUnit: 'px'
			}
		},
		iconPosition: {
			type: 'string',
			default: 'right'
		},
		iconColor: {
			type: 'string',
			default: '#333333'
		},
		iconHoverColor: {
			type: 'string',
			default: ''
		},
		iconActiveColor: {
			type: 'string',
			default: '#1e73be'
		},
		iconSize: {
			type: 'object',
			default: {
				desktop: 16,
				tablet: 14,
				mobile: 12
			}
		},
		animation: {
			type: 'string',
			default: 'none'
		},
		allowMultipleOpen: {
			type: 'boolean',
			default: false
		},
		iconType: {
			type: 'string',
			default: 'plusMinus'
		}
	},
    example: {
        attributes: {
            items: [
                {
                    id: 'item-1',
                    title: __('Accordion Item 1', 'digiblocks'),
                    content: __('This is some sample content for the accordion item.', 'digiblocks'),
                    isOpen: true
                },
                {
                    id: 'item-2',
                    title: __('Accordion Item 2', 'digiblocks'),
                    content: __('Click on an accordion item to see it expand.', 'digiblocks'),
                    isOpen: false
                }
            ]
        }
    },
    edit: AccordionEdit,
    save: AccordionSave,
});