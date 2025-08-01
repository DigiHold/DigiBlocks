/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import SpacerEdit from './edit';
import SpacerSave from './save';


/**
 * Register Spacer block
 */
registerBlockType('digiblocks/spacer', {
    apiVersion: 2,
    title: digiBlocksData.blocks['spacer'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['spacer'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['spacer'].description,
    keywords: [__('spacer', 'digiblocks'), __('gap', 'digiblocks'), __('spacing', 'digiblocks')],
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
        height: {
            type: 'object',
            default: {
                desktop: 80,
                tablet: 60,
                mobile: 40
            }
        }
    },
    example: {
        attributes: {
            height: {
                desktop: 80
            }
        }
    },
    edit: SpacerEdit,
    save: SpacerSave,
});