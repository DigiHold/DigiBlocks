/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import RelatedPostsEdit from './edit';
import RelatedPostsSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Related Posts block
 */
registerBlockType('digiblocks/related-posts', {
    apiVersion: 2,
    title: digiBlocksData.blocks['related-posts'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['related-posts'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['related-posts'].description,
    keywords: [__('related', 'digiblocks'), __('posts', 'digiblocks'), __('similar', 'digiblocks'), __('category', 'digiblocks'), __('tag', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('related-posts') ? true : false,
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
            default: 3
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
                displayCategories: true,
                displayComments: false
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
        relationType: {
            type: 'string',
            default: 'category'  // category, tag, both
        },
        noRelatedPostsText: {
            type: 'string',
            default: __('No related posts found.', 'digiblocks')
        },
        headingText: {
            type: 'string',
            default: __('Related Posts', 'digiblocks')
        },
        displayHeading: {
            type: 'boolean',
            default: true
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
        catBackgroundColor: {
            type: 'string',
            default: '#52576b'
        },
        catColor: {
            type: 'string',
            default: '#fff'
        },
        catHoverBackgroundColor: {
            type: 'string',
            default: '#3f4a73'
        },
        catHoverColor: {
            type: 'string',
            default: '#fff'
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
                fontSize: { desktop: 14, tablet: 12, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: '500',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.3 },
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
                color: 'rgba(74, 108, 247, 0.15)',
                horizontal: 0,
                vertical: 8,
                blur: 25,
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
            postsToShow: 3,
            columns: {
                desktop: 3,
                tablet: 2,
                mobile: 1
            },
            displayFeaturedImage: true,
            displayTitle: true,
            displayExcerpt: true,
            displayHeading: true,
            headingText: 'Related Posts',
            relationType: 'category'
        },
    },
    edit: RelatedPostsEdit,
    save: RelatedPostsSave,
});