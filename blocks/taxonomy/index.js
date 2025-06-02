/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import TaxonomyEdit from './edit';
import TaxonomySave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Taxonomy block
 */
registerBlockType('digiblocks/taxonomy', {
    apiVersion: 2,
    title: digiBlocksData.blocks['taxonomy'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['taxonomy'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['taxonomy'].description,
    keywords: [__('taxonomy', 'digiblocks'), __('category', 'digiblocks'), __('tag', 'digiblocks'), __('archive', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('taxonomy') ? true : false,
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
        postsToShow: {
            type: 'number',
            default: 6
        },
        columns: {
            type: 'object',
            default: {
                desktop: 3,
                tablet: 2,
                mobile: 1
            }
        },
        displayFeaturedImage: {
            type: 'boolean',
            default: true
        },
        displayTitle: {
            type: 'boolean',
            default: true
        },
        displayMeta: {
            type: 'boolean',
            default: true
        },
        displayExcerpt: {
            type: 'boolean',
            default: true
        },
        displayReadMoreButton: {
            type: 'boolean',
            default: true
        },
        metaSettings: {
            type: 'object',
            default: {
                displayAuthor: true,
                displayDate: true,
                displayCategories: false,
                displayComments: true
            }
        },
        excerptLength: {
            type: 'number',
            default: 20
        },
        readMoreText: {
            type: 'string',
            default: __('Read More', 'digiblocks')
        },
        order: {
            type: 'string',
            default: 'desc'
        },
        orderBy: {
            type: 'string',
            default: 'date'
        },
        enablePagination: {
            type: 'boolean',
            default: true
        },
        paginationAlign: {
            type: 'string',
            default: 'center'
        },
        paginationBackgroundColor: {
            type: 'string',
            default: '#f8f9fa'
        },
        paginationTextColor: {
            type: 'string',
            default: '#333333'
        },
        paginationActiveBackgroundColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        paginationActiveTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        titleColor: {
            type: 'string',
            default: '#1a1a1a'
        },
        titleHoverColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        excerptColor: {
            type: 'string',
            default: '#666666'
        },
        metaColor: {
            type: 'string',
            default: '#888888'
        },
        metaHoverColor: {
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
        cardBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        cardBorderColor: {
            type: 'string',
            default: '#e8e8e8'
        },
        cardHoverShadowColor: {
            type: 'string',
            default: 'rgba(74, 108, 247, 0.15)'
        },
        imageMargin: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 18,
                mobile: 16
            }
        },
        contentMargin: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: 14,
                mobile: 12
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
                desktop: { top: 0, right: 0, bottom: 40, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 25, left: 0, unit: 'px' }
            }
        },
        itemSpacing: {
            type: 'object',
            default: {
                desktop: 25,
                tablet: 20,
                mobile: 15
            }
        },
        titleTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.3, tablet: 1.3, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 13, tablet: 12, mobile: 11 },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        contentTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 15, tablet: 14, mobile: 13 },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        buttonTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: '500',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        buttonPadding: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' },
                tablet: { top: 7, right: 14, bottom: 7, left: 14, unit: 'px' },
                mobile: { top: 6, right: 12, bottom: 6, left: 12, unit: 'px' }
            }
        },
        buttonBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 6, right: 6, bottom: 6, left: 6, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        imageSize: {
            type: 'string',
            default: 'medium'
        },
        imageBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        cardPadding: {
            type: 'object',
            default: {
                desktop: { top: 24, right: 24, bottom: 24, left: 24, unit: 'px' },
                tablet: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
                mobile: { top: 16, right: 16, bottom: 16, left: 16, unit: 'px' }
            }
        },
        cardBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 16, right: 16, bottom: 16, left: 16, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        cardBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
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
            postsToShow: 1,
            columns: { desktop: 1, tablet: 1, mobile: 1 },
            displayFeaturedImage: true,
            displayTitle: true,
            displayExcerpt: true,
            excerptLength: 15,
            displayMeta: true,
			enablePagination: false,
            titleColor: '#1a1a1a',
            excerptColor: '#666666',
            metaColor: '#888888',
            buttonBackgroundColor: '#4a6cf7',
            buttonTextColor: '#ffffff',
            itemSpacing: {
                desktop: 25,
                tablet: 20,
                mobile: 15
            }
        },
        viewportWidth: 600
    },
    edit: TaxonomyEdit,
    save: TaxonomySave,
});