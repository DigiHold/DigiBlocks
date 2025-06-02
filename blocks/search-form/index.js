/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import SearchFormEdit from './edit';
import SearchFormSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Search Form block
 */
registerBlockType('digiblocks/search-form', {
    apiVersion: 2,
    title: digiBlocksData.blocks['search-form'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['search-form'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['search-form'].description,
    keywords: [__('search', 'digiblocks'), __('form', 'digiblocks'), __('ajax', 'digiblocks'), __('filter', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('search-form') ? true : false,
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
        placeholder: {
            type: 'string',
            default: __('Search...', 'digiblocks')
        },
        buttonText: {
            type: 'string',
            default: __('Search', 'digiblocks')
        },
        searchType: {
            type: 'string',
            default: 'all'
        },
        enableAjax: {
            type: 'boolean',
            default: false
        },
        postTypes: {
            type: 'array',
            default: []
        },
        layout: {
            type: 'string',
            default: 'horizontal'
        },
        buttonPosition: {
            type: 'string',
            default: 'outside'
        },
        inputBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        inputTextColor: {
            type: 'string',
            default: '#333333'
        },
        inputBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        inputFocusBorderColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        buttonBackgroundColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        buttonTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        buttonBackgroundHoverColor: {
            type: 'string',
            default: '#3a5ce5'
        },
        buttonTextHoverColor: {
            type: 'string',
            default: '#ffffff'
        },
        dropdownBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        dropdownTextColor: {
            type: 'string',
            default: '#333333'
        },
        dropdownBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        resultsBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        resultsTextColor: {
            type: 'string',
            default: '#333333'
        },
        resultsBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        resultsHoverBackgroundColor: {
            type: 'string',
            default: '#f8f9fa'
        },
        inputBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        inputBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        inputBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        buttonBorderStyle: {
            type: 'string',
            default: 'none'
        },
        buttonBorderColor: {
            type: 'string',
            default: ''
        },
        buttonBorderHoverColor: {
            type: 'string',
            default: ''
        },
        buttonBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        buttonBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        dropdownBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        dropdownBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        dropdownBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        inputPadding: {
            type: 'object',
            default: {
                desktop: { top: 12, right: 16, bottom: 12, left: 16, unit: 'px' },
                tablet: { top: 10, right: 14, bottom: 10, left: 14, unit: 'px' },
                mobile: { top: 8, right: 12, bottom: 8, left: 12, unit: 'px' }
            }
        },
        buttonPadding: {
            type: 'object',
            default: {
                desktop: { top: 12, right: 24, bottom: 12, left: 24, unit: 'px' },
                tablet: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
                mobile: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' }
            }
        },
        dropdownPadding: {
            type: 'object',
            default: {
                desktop: { top: 12, right: 16, bottom: 12, left: 16, unit: 'px' },
                tablet: { top: 10, right: 14, bottom: 10, left: 14, unit: 'px' },
                mobile: { top: 8, right: 12, bottom: 8, left: 12, unit: 'px' }
            }
        },
        formGap: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: 14,
                mobile: 12
            }
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        buttonTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '500',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
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
                position: 'outset'
            }
        },
        boxShadowHover: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.15)',
                horizontal: 0,
                vertical: 2,
                blur: 8,
                spread: 0,
                position: 'outset'
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
    },
    example: {
        attributes: {
            placeholder: 'Search posts and pages...',
            buttonText: 'Search',
            layout: 'horizontal',
            buttonPosition: 'outside',
            enableAjax: true
        },
    },
    edit: SearchFormEdit,
    save: SearchFormSave,
});