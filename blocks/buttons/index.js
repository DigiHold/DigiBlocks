/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import ButtonsEdit from './edit';
import ButtonsSave from './save';
const { getBlockActiveStatus } = wp.digiBlocks;

/**
 * Register Buttons block
 */
registerBlockType('digiblocks/buttons', {
    apiVersion: 2,
    title: digiBlocksData.blocks['buttons'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['buttons'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['buttons'].description,
    keywords: [__('buttons', 'digiblocks'), __('button group', 'digiblocks'), __('link', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('buttons') ? true : false,
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
        layout: {
            type: 'string',
            default: 'horizontal'
        },
        align: {
            type: 'string',
            default: 'flex-start'
        },
        buttonSpacing: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: 8,
                mobile: 6
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        innerBlocks: [
            {
                name: 'digiblocks/button',
                attributes: {
                    text: __('Call to Action', 'digiblocks'),
                }
            },
            {
                name: 'digiblocks/button',
                attributes: {
                    text: __('Learn More', 'digiblocks'),
                }
            }
        ]
    },
    edit: ButtonsEdit,
    save: ButtonsSave,
});