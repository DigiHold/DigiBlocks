/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import SearchResultsEdit from './edit';
import SearchResultsSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Search Results block
 */
registerBlockType('digiblocks/search-results', {
    apiVersion: 2,
    title: digiBlocksData.blocks['search-results'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['search-results'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['search-results'].description,
    keywords: [__('search', 'digiblocks'), __('results', 'digiblocks'), __('query', 'digiblocks'), __('find', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('search-results') ? true : false,
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
        postsPerPage: {
            type: 'number',
            default: 10
        },
        columns: {
            type: 'object',
            default: {
                desktop: 3,
                tablet: 2,
                mobile: 1
            }
        },
        postStyle: {
            type: 'string',
            default: 'grid'
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
                displayPostType: false
            }
        },
        excerptLength: {
            type: 'number',
            default: 25
        },
        readMoreText: {
            type: 'string',
            default: __('Read More', 'digiblocks')
        },
        noResultsText: {
            type: 'string',
            default: __('No search results found.', 'digiblocks')
        },
        headingText: {
            type: 'string',
            default: __('Search Results', 'digiblocks')
        },
        displayHeading: {
            type: 'boolean',
            default: true
        },
        showPagination: {
            type: 'boolean',
            default: true
        },
		paginationAlign: {
			type: 'string',
			default: 'center'
		},
        titleColor: {
            type: 'string',
            default: '#333333'
        },
        titleHoverColor: {
            type: 'string',
            default: ''
        },
        excerptColor: {
            type: 'string',
            default: '#666666'
        },
        metaColor: {
            type: 'string',
            default: '#666666'
        },
        metaHoverColor: {
            type: 'string',
            default: ''
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
        headingColor: {
            type: 'string',
            default: '#333333'
        },
        noResultsColor: {
            type: 'string',
            default: '#666666'
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
        imageMargin: {
            type: 'object',
            default: {
                desktop: 15,
                tablet: 15,
                mobile: 15
            }
        },
        contentMargin: {
            type: 'object',
            default: {
                desktop: 18,
                tablet: 15,
                mobile: 15
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
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 25, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' }
            }
        },
        itemSpacing: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 15,
                mobile: 10
            }
        },
        headingTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 24, tablet: 22, mobile: 20 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        titleTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.4, tablet: 1.3, mobile: 1.2 },
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
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
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
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        buttonPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
                tablet: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' },
                mobile: { top: 6, right: 12, bottom: 6, left: 12, unit: 'px' }
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
        imageSize: {
            type: 'string',
            default: 'medium'
        },
        imageBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        cardStyle: {
            type: 'boolean',
            default: false
        },
        cardBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        cardPadding: {
            type: 'object',
            default: {
                desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
                tablet: { top: 15, right: 15, bottom: 15, left: 15, unit: 'px' },
                mobile: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' }
            }
        },
        cardBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        cardBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        cardBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        cardBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        cardShadow: {
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
        cardShadowHover: {
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
            postStyle: 'grid',
            postsPerPage: 6,
            columns: {
                desktop: 3,
                tablet: 2,
                mobile: 1
            },
            displayFeaturedImage: true,
            displayTitle: true,
            displayExcerpt: true,
            displayHeading: true,
            headingText: 'Search Results',
            showPagination: true,
        },
    },
    edit: SearchResultsEdit,
    save: SearchResultsSave,
});