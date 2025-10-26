/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import NewsletterEdit from './edit';
import NewsletterSave from './save';


/**
 * Register Newsletter block
 */
registerBlockType('digiblocks/newsletter', {
    apiVersion: 2,
    title: digiBlocksData.blocks['newsletter'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['newsletter'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['newsletter'].description,
    keywords: [__('newsletter', 'digiblocks'), __('subscribe', 'digiblocks'), __('email', 'digiblocks'), __('mailchimp', 'digiblocks')],
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
        layout: {
            type: 'string',
            default: 'stacked'
        },
        align: {
            type: 'object',
            default: {
                desktop: 'left',
                tablet: '',
                mobile: ''
            }
        },
        title: {
            type: 'string',
            default: __('Subscribe to our Newsletter', 'digiblocks')
        },
        showTitle: {
            type: 'boolean',
            default: true
        },
        description: {
            type: 'string',
            default: __('Stay updated with our latest news and offers', 'digiblocks')
        },
        showDescription: {
            type: 'boolean',
            default: true
        },
        emailPlaceholder: {
            type: 'string',
            default: __('Enter your email address', 'digiblocks')
        },
        namePlaceholder: {
            type: 'string',
            default: __('Enter your name', 'digiblocks')
        },
        buttonText: {
            type: 'string',
            default: __('Subscribe', 'digiblocks')
        },
        showNameField: {
            type: 'boolean',
            default: false
        },
        successMessage: {
            type: 'string',
            default: __('Thank you for subscribing!', 'digiblocks')
        },
        errorMessage: {
            type: 'string',
            default: __('Something went wrong. Please try again.', 'digiblocks')
        },
        titleColor: {
            type: 'string',
            default: ''
        },
        titleHoverColor: {
            type: 'string',
            default: ''
        },
        descriptionColor: {
            type: 'string',
            default: '#666666'
        },
        inputTextColor: {
            type: 'string',
            default: ''
        },
        inputBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        inputBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        inputBorderFocusColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        inputPlaceholderColor: {
            type: 'string',
            default: '#999999'
        },
        buttonTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        buttonBackgroundColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        buttonTextHoverColor: {
            type: 'string',
            default: ''
        },
        buttonBackgroundHoverColor: {
            type: 'string',
            default: ''
        },
        buttonBorderColor: {
            type: 'string',
            default: ''
        },
        buttonBorderHoverColor: {
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
        containerBorderColor: {
            type: 'string',
            default: ''
        },
        containerBorderHoverColor: {
            type: 'string',
            default: ''
        },
        titleTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 24, tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.4, tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        contentTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        buttonTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: '500',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: '', mobile: '' },
                letterSpacingUnit: 'px'
            }
        },
        containerBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        containerBorderWidth: {
            type: 'object',
            default: {
                desktop: 1,
                tablet: 1,
                mobile: 1
            }
        },
        containerBorderStyle: {
            type: 'string',
            default: 'none'
        },
        inputBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        inputBorderWidth: {
            type: 'object',
            default: {
                desktop: 1,
                tablet: 1,
                mobile: 1
            }
        },
        inputBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        buttonBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        buttonBorderWidth: {
            type: 'object',
            default: {
                desktop: 1,
                tablet: 1,
                mobile: 1
            }
        },
        buttonBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        spacing: {
            type: 'object',
            default: {
                desktop: { value: 20, unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' }
            }
        },
        inputSpacing: {
            type: 'object',
            default: {
                desktop: { value: 10, unit: 'px' },
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' }
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
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
            }
        },
        buttonBoxShadow: {
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
        buttonBoxShadowHover: {
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
        inputBoxShadow: {
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
        inputBoxShadowHover: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.15)',
                horizontal: 0,
                vertical: 2,
                blur: 4,
                spread: 0,
                position: 'outset'
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        },
		animationDuration: {
			type: 'string',
			default: 'normal'
		},
		animationDelay: {
			type: 'number',
			default: ''
		},
        position: {
            type: 'string',
            default: 'default',
        },
        horizontalOrientation: {
            type: 'string',
            default: 'left',
        },
        horizontalOffset: {
            type: 'object',
            default: {
                desktop: { value: 0, unit: 'px' },
                tablet: { value: 0, unit: 'px' },
                mobile: { value: 0, unit: 'px' },
            },
        },
        verticalOrientation: {
            type: 'string',
            default: 'top',
        },
        verticalOffset: {
            type: 'object',
            default: {
                desktop: { value: 0, unit: 'px' },
                tablet: { value: 0, unit: 'px' },
                mobile: { value: 0, unit: 'px' },
            },
        },
        zIndex: {
            type: 'number',
            default: '',
        },
		transform: {
            type: 'object',
            default: {
                rotate: { desktop: '', tablet: '', mobile: '' },
                rotate3d: false,
                rotateX: { desktop: '', tablet: '', mobile: '' },
                rotateY: { desktop: '', tablet: '', mobile: '' },
                perspective: { desktop: '', tablet: '', mobile: '' },
                offsetX: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                offsetY: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                keepProportions: true,
                scale: { desktop: '', tablet: '', mobile: '' },
                scaleX: { desktop: '', tablet: '', mobile: '' },
                scaleY: { desktop: '', tablet: '', mobile: '' },
                skewX: { desktop: '', tablet: '', mobile: '' },
                skewY: { desktop: '', tablet: '', mobile: '' },
                flipHorizontal: false,
                flipVertical: false,
                xAnchor: { desktop: 'center', tablet: '', mobile: '' },
                yAnchor: { desktop: 'center', tablet: '', mobile: '' },
                transitionDuration: ''
            }
        },
        transformHover: {
            type: 'object',
            default: {
                rotate: { desktop: '', tablet: '', mobile: '' },
                rotate3d: false,
                rotateX: { desktop: '', tablet: '', mobile: '' },
                rotateY: { desktop: '', tablet: '', mobile: '' },
                perspective: { desktop: '', tablet: '', mobile: '' },
                offsetX: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                offsetY: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
                keepProportions: true,
                scale: { desktop: '', tablet: '', mobile: '' },
                scaleX: { desktop: '', tablet: '', mobile: '' },
                scaleY: { desktop: '', tablet: '', mobile: '' },
                skewX: { desktop: '', tablet: '', mobile: '' },
                skewY: { desktop: '', tablet: '', mobile: '' },
                flipHorizontal: false,
                flipVertical: false,
                xAnchor: { desktop: 'center', tablet: '', mobile: '' },
                yAnchor: { desktop: 'center', tablet: '', mobile: '' },
                transitionDuration: ''
            }
        },
    },
    example: {
        attributes: {
            title: __('Subscribe to our Newsletter', 'digiblocks'),
            description: __('Stay updated with our latest news and offers', 'digiblocks'),
            layout: 'stacked',
            showTitle: true,
            showDescription: true,
            showNameField: false,
            buttonText: __('Subscribe', 'digiblocks'),
        },
    },
    edit: NewsletterEdit,
    save: NewsletterSave,
});