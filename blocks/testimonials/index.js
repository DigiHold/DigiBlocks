/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import TestimonialsEdit from './edit';
import TestimonialsSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Testimonials block
 */
registerBlockType('digiblocks/testimonials', {
    apiVersion: 2,
    title: digiBlocksData.blocks['testimonials'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['testimonials'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['testimonials'].description,
    keywords: [__('testimonials', 'digiblocks'), __('reviews', 'digiblocks'), __('quotes', 'digiblocks'), __('testimonial', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('testimonials') ? true : false, // Remove the block if disabled
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
        testimonials: {
            type: 'array',
            default: [
                {
                    id: 'testimonial-1',
                    name: __('John Doe', 'digiblocks'),
                    position: __('CEO', 'digiblocks'),
                    company: __('Tech Innovations Inc.', 'digiblocks'),
                    content: __('This product has completely transformed our business operations. The support team is incredibly responsive and helpful.', 'digiblocks'),
                    imageUrl: '',
                    imageId: '',
                    rating: 5
                },
                {
                    id: 'testimonial-2',
                    name: __('Sarah Johnson', 'digiblocks'),
                    position: __('Marketing Director', 'digiblocks'),
                    company: __('Creative Solutions', 'digiblocks'),
                    content: __('I cannot recommend this service enough. The quality and attention to detail exceeded our expectations.', 'digiblocks'),
                    imageUrl: '',
                    imageId: '',
                    rating: 5
                }
            ]
        },
        columns: {
            type: 'object',
            default: {
                desktop: 2,
                tablet: 2,
                mobile: 1
            }
        },
		align: {
            type: 'string',
            default: 'left'
        },
        autoplay: {
            type: 'boolean',
            default: true
        },
        autoplaySpeed: {
            type: 'number',
            default: 3000
        },
        showArrows: {
            type: 'boolean',
            default: true
        },
        showDots: {
            type: 'boolean',
            default: true
        },
        nameColor: {
            type: 'string',
            default: '#333333'
        },
        nameHoverColor: {
            type: 'string',
            default: ''
        },
        positionColor: {
            type: 'string',
            default: '#666666'
        },
        contentColor: {
            type: 'string',
            default: '#444444'
        },
        backgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        quoteIconColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        ratingColor: {
            type: 'string',
            default: '#ffc107'
        },
        borderStyle: {
            type: 'string',
            default: 'default'
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
                desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
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
                enable: true,
                color: 'rgba(0, 0, 0, 0.12)',
                horizontal: 0,
                vertical: 5,
                blur: 15,
                spread: 0,
                position: 'outset'
            }
        },
        boxShadowHover: {
            type: 'object',
            default: {
                enable: true,
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 10,
                blur: 20,
                spread: 0,
                position: 'outset'
            }
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 40, right: 40, bottom: 40, left: 40, unit: 'px' },
                tablet: { top: 30, right: 30, bottom: 30, left: 30, unit: 'px' },
                mobile: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' }
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
        contentTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'italic',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.7, tablet: 1.6, mobile: 1.5 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        headingTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 20, tablet: 18, mobile: 16 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.3, tablet: 1.3, mobile: 1.3 },
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
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.4 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0.5, tablet: 0.5, mobile: 0.5 },
                letterSpacingUnit: 'px'
            }
        },
        imageSize: {
            type: 'object',
            default: {
                desktop: 64,
                tablet: 56,
                mobile: 48
            }
        },
        quoteIconSize: {
            type: 'object',
            default: {
                desktop: 80,
                tablet: 50,
                mobile: 30
            }
        },
        showRating: {
            type: 'boolean',
            default: true
        },
        showQuoteIcon: {
            type: 'boolean',
            default: true
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        itemSpacing: {
            type: 'object',
            default: {
                desktop: 30,
                tablet: 25,
                mobile: 20
            }
        }
    },
    example: {
        attributes: {
            testimonials: [
                {
                    id: 'testimonial-1',
                    name: __('John Doe', 'digiblocks'),
                    position: __('CEO', 'digiblocks'),
                    company: __('Tech Innovations Inc.', 'digiblocks'),
                    content: __('This product has completely transformed our business operations. The support team is incredibly responsive and helpful.', 'digiblocks'),
                    imageUrl: '',
                    imageId: '',
                    rating: 5
                },
                {
                    id: 'testimonial-2',
                    name: __('Charlotte Lebon', 'digiblocks'),
					position: __('Marketing', 'digiblocks'),
					company: __('Creative Solutions', 'digiblocks'),
					content: __('We\'ve seen a 40% increase in customer engagement since implementing this solution. Highly recommended for any business.', 'digiblocks'),
                    imageUrl: '',
                    imageId: '',
                    rating: 5
                }
            ],
            layout: 'card',
            backgroundColor: '#ffffff'
        },
        viewportWidth: 800
    },
    edit: TestimonialsEdit,
    save: TestimonialsSave,
});