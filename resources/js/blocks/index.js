/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * DigiBlocks
 */
import AccordionEdit from '../../../blocks/accordion/edit';
import AccordionSave from '../../../blocks/accordion/save';
import ButtonsEdit from '../../../blocks/buttons/edit';
import ButtonsSave from '../../../blocks/buttons/save';
import ButtonEdit from '../../../blocks/button/edit';
import ButtonSave from '../../../blocks/button/save';
import CallToActionEdit from '../../../blocks/call-to-action/edit';
import CallToActionSave from '../../../blocks/call-to-action/save';
import ColumnEdit from '../../../blocks/column/edit';
import ColumnSave from '../../../blocks/column/save';
import ContainerEdit from '../../../blocks/container/edit';
import ContainerSave from '../../../blocks/container/save';
import CountdownEdit from '../../../blocks/countdown/edit';
import CountdownSave from '../../../blocks/countdown/save';
import CounterEdit from '../../../blocks/counter/edit';
import CounterSave from '../../../blocks/counter/save';
import DigiProductsEdit from '../../../blocks/digi-products/edit';
import DigiProductsSave from '../../../blocks/digi-products/save';
import FAQEdit from '../../../blocks/faq/edit';
import FAQSave from '../../../blocks/faq/save';
import FormsEdit from '../../../blocks/forms/edit';
import FormsSave from '../../../blocks/forms/save';
import GoogleMapEdit from '../../../blocks/google-map/edit';
import GoogleMapSave from '../../../blocks/google-map/save';
import HeadingEdit from '../../../blocks/heading/edit';
import HeadingSave from '../../../blocks/heading/save';
import IconEdit from '../../../blocks/icon/edit';
import IconSave from '../../../blocks/icon/save';
import IconBoxEdit from '../../../blocks/icon-box/edit';
import IconBoxSave from '../../../blocks/icon-box/save';
import IconListEdit from '../../../blocks/icon-list/edit';
import IconListSave from '../../../blocks/icon-list/save';
import ImageEdit from '../../../blocks/image/edit';
import ImageSave from '../../../blocks/image/save';
import LottieEdit from '../../../blocks/lottie/edit';
import LottieSave from '../../../blocks/lottie/save';
import PostsEdit from '../../../blocks/posts/edit';
import PostsSave from '../../../blocks/posts/save';
import PricingTableEdit from '../../../blocks/pricing-table/edit';
import PricingTableSave from '../../../blocks/pricing-table/save';
import SeparatorEdit from '../../../blocks/separator/edit';
import SeparatorSave from '../../../blocks/separator/save';
import SocialIconsEdit from '../../../blocks/social-icons/edit';
import SocialIconsSave from '../../../blocks/social-icons/save';
import SpacerEdit from '../../../blocks/spacer/edit';
import SpacerSave from '../../../blocks/spacer/save';
import TableEdit from '../../../blocks/table/edit';
import TableSave from '../../../blocks/table/save';
import TeamEdit from '../../../blocks/team/edit';
import TeamSave from '../../../blocks/team/save';
import TestimonialsEdit from '../../../blocks/testimonials/edit';
import TestimonialsSave from '../../../blocks/testimonials/save';
import WooProductsEdit from '../../../blocks/woo-products/edit';
import WooProductsSave from '../../../blocks/woo-products/save';

/**
 * DigiBlocks Theme
 */
import LogoEdit from '../../../blocks/logo/edit';
import LogoSave from '../../../blocks/logo/save';
import NavigationEdit from '../../../blocks/navigation/edit';
import NavigationSave from '../../../blocks/navigation/save';
import LoginLinkEdit from '../../../blocks/login-link/edit';
import LoginLinkSave from '../../../blocks/login-link/save';

/**
 * Register blocks based on their status
 */
const getBlockActiveStatus = (blockName) => {
    // Check if digiBlocksData.activeBlocks exists and has this block info
    if (digiBlocksData.activeBlocks && typeof digiBlocksData.activeBlocks[blockName] !== 'undefined') {
        return digiBlocksData.activeBlocks[blockName];
    }
    // Default to active if not specified
    return true;
};

/**
 * Check if DigiCommerce is active
 */
const isDigiActive = () => {
    return window.digiBlocksData && window.digiBlocksData.isDigiActive;
};

/**
 * Check if WooCommerce is active
 */
const isWooActive = () => {
    // Check if the woocommerce global object exists
    return typeof window.wc !== 'undefined' || (window.digiBlocksData && window.digiBlocksData.isWooActive);
};

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
		inserter: getBlockActiveStatus('accordion') ? true : false, // Remove the block if disabled
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
				tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
				mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
			}
		},
		borderWidth: {
			type: 'object',
			default: {
				desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
				tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
				mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
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

/**
 * Register Button block
 */
registerBlockType('digiblocks/button', {
    apiVersion: 2,
	title: __('Button', 'digiblocks'),
    parent: ['digiblocks/buttons'],
    icon: {
        src: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm0 9H5v-7h14v7z"/>
            </svg>
        )
    },
    description: __('A single button within the buttons block', 'digiblocks'),
    supports: {
        inserter: false, // Can only be inserted within buttons block
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
		reusable: false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        text: {
            type: 'string',
            default: __('Button', 'digiblocks')
        },
        url: {
            type: 'string',
            default: ''
        },
        opensInNewTab: {
            type: 'boolean',
            default: false
        },
        rel: {
            type: 'boolean',
            default: false
        },
        iconValue: {
            type: 'object',
            default: null
        },
        iconPosition: {
            type: 'string',
            default: 'left'
        },
        size: {
            type: 'string',
            default: 'medium'
        },
        fill: {
            type: 'boolean',
            default: false
        },
        buttonTypography: {
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
        textColor: {
            type: 'string',
            default: '#ffffff'
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        backgroundColor: {
            type: 'string',
            default: '#1e73be'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        borderStyle: {
            type: 'string',
            default: 'default'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: ''
        },
        borderHoverColor: {
            type: 'string',
            default: ''
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
                desktop: { top: 12, right: 24, bottom: 12, left: 24, unit: 'px' },
                tablet: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
                mobile: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        onlyIcon: {
            type: 'boolean',
            default: false
        }
    },
    example: {
        attributes: {
            text: __('Button', 'digiblocks'),
            backgroundColor: '#1e73be',
            textColor: '#ffffff'
        }
    },
    edit: ButtonEdit,
    save: ButtonSave,
});

/**
 * Register Call to Action block
 */
registerBlockType('digiblocks/call-to-action', {
    apiVersion: 2,
    title: digiBlocksData.blocks['call-to-action'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['call-to-action'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['call-to-action'].description,
    keywords: [__('cta', 'digiblocks'), __('call to action', 'digiblocks'), __('button', 'digiblocks'), __('conversion', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('call-to-action') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        style: {
            type: 'string',
            default: 'basic'
        },
		horizontalLayout: {
			type: 'boolean',
			default: false
		},
        title: {
            type: 'string',
            default: __('Ready to Get Started?', 'digiblocks')
        },
        content: {
            type: 'string',
            default: __('Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.', 'digiblocks')
        },
        headingTag: {
            type: 'string',
            default: 'h2'
        },
        titleColor: {
            type: 'string',
            default: '#333333'
        },
        textColor: {
            type: 'string',
            default: '#666666'
        },
        buttonColor: {
            type: 'string',
            default: '#1e73be'
        },
        buttonTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        backgroundColor: {
            type: 'string',
            default: '#f5f5f5'
        },
        backgroundType: {
            type: 'string',
            default: 'color'
        },
        backgroundImage: {
            type: 'object',
            default: null
        },
        backgroundOverlayColor: {
            type: 'string',
            default: 'rgba(0,0,0,0.5)'
        },
        backgroundOverlayOpacity: {
            type: 'number',
            default: 50
        },
        backgroundPosition: {
            type: 'string',
            default: 'center center'
        },
        backgroundSize: {
            type: 'string',
            default: 'cover'
        },
        backgroundRepeat: {
            type: 'string',
            default: 'no-repeat'
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object'
        },
        borderRadius: {
            type: 'object'
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        padding: {
            type: 'object'
        },
        margin: {
            type: 'object'
        },
        align: {
            type: 'string',
            default: 'left'
        },
        titleTypography: {
            type: 'object'
        },
        contentTypography: {
            type: 'object'
        },
        buttonTypography: {
            type: 'object'
        },
        contentWidth: {
            type: 'number'
        },
        width: {
            type: 'string',
            default: '100%'
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        boxShadow: {
            type: 'object'
        },
        boxShadowHover: {
            type: 'object'
        },
        buttonBorderRadius: {
            type: 'object'
        },
        buttonPadding: {
            type: 'object'
        },
        buttonsAlign: {
            type: 'string',
            default: 'left'
        },
        buttons: {
            type: 'array',
            default: []
        },
        titleHoverColor: {
            type: 'string',
            default: ''
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        buttonHoverColor: {
            type: 'string',
            default: ''
        },
        buttonTextHoverColor: {
            type: 'string',
            default: ''
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
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
            default: 'none'
        },
        verticalAlign: {
            type: 'string',
            default: 'center'
        },
        reverseColumnsMobile: {
            type: 'boolean',
            default: false
        },
        minHeight: {
            type: 'object'
        },
        gradientDirection: {
            type: 'number',
            default: 135
        },
        ribbonColor: {
            type: 'string',
            default: '#1e73be'  
        },
        ribbonTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        ribbonPosition: {
            type: 'string',
            default: 'top-right'
        },
        ribbonText: {
            type: 'string',
            default: 'Special Offer'
        }
    },
    example: {
        attributes: {
            style: 'basic',
            title: __('Ready to Get Started?', 'digiblocks'),
            content: __('Join us today and experience the difference.', 'digiblocks'),
            buttons: [
                {
                    id: 'button-1',
                    text: __('Sign Up Now', 'digiblocks'),
                    url: '#',
                    isPrimary: true
                }
            ],
            backgroundColor: '#f5f5f5',
        }
    },
    edit: CallToActionEdit,
    save: CallToActionSave,
});

/**
 * Register Column block
 */
registerBlockType('digiblocks/column', {
	apiVersion: 2,
	title: __('Column', 'digiblocks'),
    parent: ['digiblocks/container'],
    icon: {
        src: () => (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24"><path d="M448 64l0 384 128 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l128 0zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"/></svg>
        )
    },
    description: __('Flexible column component to use within Container blocks', 'digiblocks'),
    supports: {
        inserter: false, // Can only be inserted within container block
        reusable: false,
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
        width: {
            type: 'object',
            default: {
                desktop: 100,
                tablet: 100,
                mobile: 100
            }
        },
        order: {
            type: 'object',
            default: {
                desktop: 0,
                tablet: 0,
                mobile: 0
            }
        },
        backgroundColor: {
            type: 'string',
            default: ''
        },
        backgroundImage: {
            type: 'object',
            default: {
                url: '',
                id: 0,
                alt: '',
                size: ''
            }
        },
        backgroundPosition: {
            type: 'string',
            default: 'center center'
        },
        backgroundRepeat: {
            type: 'string',
            default: 'no-repeat'
        },
        backgroundSize: {
            type: 'string',
            default: 'cover'
        },
        backgroundOverlay: {
            type: 'string',
            default: ''
        },
        backgroundOverlayOpacity: {
            type: 'number',
            default: 0.7
        },
        backgroundOverlayBlendMode: {
            type: 'string',
            default: 'normal'
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
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
    },
    edit: ColumnEdit,
    save: ColumnSave,
});

/**
 * Register Container block
 */
registerBlockType('digiblocks/container', {
    apiVersion: 2,
    title: digiBlocksData.blocks['container'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['container'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['container'].description,
    keywords: [__('container', 'digiblocks'), __('section', 'digiblocks'), __('row', 'digiblocks'), __('layout', 'digiblocks'), __('columns', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('container') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        layout: {
            type: 'string',
            default: ''
        },
        contentLayout: {
            type: 'string',
            default: 'boxed'
        },
		contentWidth: {
			type: 'object',
			default: {
				desktop: 1200,
				tablet: '',
				mobile: ''
			}
		},
		contentMaxWidth: {
			type: 'object',
			default: {
				desktop: 90,
				tablet: '',
				mobile: ''
			}
		},
        horizontalAlign: {
            type: 'string',
            default: 'center'
        },
        verticalAlign: {
            type: 'string',
            default: 'center'
        },
        heightType: {
            type: 'string',
            default: 'auto'
        },
        minHeight: {
            type: 'object',
            default: {
                desktop: 0,
                tablet: 0,
                mobile: 0
            }
        },
        columnGap: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 15,
                mobile: 10
            }
        },
        rowGap: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 15,
                mobile: 10
            }
        },
        reverseColumnsMobile: {
            type: 'boolean',
            default: false
        },
        stackOnTablet: {
            type: 'boolean',
            default: false
        },
        stackOnMobile: {
            type: 'boolean',
            default: true
        },
        overflowHidden: {
            type: 'boolean',
            default: false
        },
        zIndex: {
            type: 'number',
            default: 0
        },
        backgroundColor: {
            type: 'string',
            default: ''
        },
        backgroundImage: {
            type: 'object',
            default: {
                url: '',
                id: 0,
                alt: '',
                size: ''
            }
        },
        backgroundPosition: {
            type: 'string',
            default: 'center center'
        },
        backgroundRepeat: {
            type: 'string',
            default: 'no-repeat'
        },
        backgroundSize: {
            type: 'string',
            default: 'cover'
        },
        backgroundVideo: {
            type: 'object',
            default: {
                url: '',
                id: 0,
                alt: '',
                size: ''
            }
        },
        backgroundVideoFallbackImage: {
            type: 'object',
            default: {
                url: '',
                id: 0,
                alt: '',
                size: ''
            }
        },
        backgroundOverlay: {
            type: 'string',
            default: ''
        },
        backgroundOverlayOpacity: {
            type: 'number',
            default: 0.7
        },
        backgroundOverlayBlendMode: {
            type: 'string',
            default: 'normal'
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
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
        animation: {
            type: 'string',
            default: 'none'
        },
    },
	example: {
		attributes: {
			layout: '',
			backgroundColor: '#f8f9fa',
			padding: {
				desktop: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
				tablet: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' },
				mobile: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' }
			}
		},
		// No inner blocks to ensure layout selector appears
		innerBlocks: [],
		viewportWidth: 500
	},
    edit: ContainerEdit,
    save: ContainerSave,
});

/**
 * Register Countdown block
 */
registerBlockType('digiblocks/countdown', {
    apiVersion: 2,
    title: digiBlocksData.blocks['countdown'].title,
    category: 'digiblocks',
	icon: {
		src: () => {
			const { viewbox, path } = digiBlocksData.blocks['countdown'].icon;
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
					<path d={path} />
				</svg>
			);
		}
	},
	description: digiBlocksData.blocks['countdown'].description,
    keywords: [__('countdown', 'digiblocks'), __('timer', 'digiblocks'), __('clock', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('countdown') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        endDate: {
            type: 'string',
            default: ''
        },
        showDays: {
            type: 'boolean',
            default: true
        },
        showHours: {
            type: 'boolean',
            default: true
        },
        showMinutes: {
            type: 'boolean',
            default: true
        },
        showSeconds: {
            type: 'boolean',
            default: true
        },
        daysLabel: {
            type: 'string',
            default: __('Days', 'digiblocks')
        },
        hoursLabel: {
            type: 'string',
            default: __('Hours', 'digiblocks')
        },
        minutesLabel: {
            type: 'string',
            default: __('Minutes', 'digiblocks')
        },
        secondsLabel: {
            type: 'string',
            default: __('Seconds', 'digiblocks')
        },
        digitColor: {
            type: 'string',
            default: '#333333'
        },
        digitBackground: {
            type: 'string',
            default: '#f0f0f0'
        },
        digitHoverColor: {
            type: 'string',
            default: ''
        },
        digitHoverBackground: {
            type: 'string',
            default: ''
        },
        labelColor: {
            type: 'string',
            default: '#666666'
        },
        labelHoverColor: {
            type: 'string',
            default: ''
        },
        separatorColor: {
            type: 'string',
            default: '#333333'
        },
        separatorHoverColor: {
            type: 'string',
            default: ''
        },
        boxStyle: {
            type: 'string',
            default: 'default'
        },
        boxBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
            }
        },
        boxPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' },
                tablet: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' },
                mobile: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' }
            }
        },
        boxMargin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        boxBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        boxBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        showBoxShadow: {
            type: 'boolean',
            default: false
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
        itemSpacing: {
            type: 'object',
            default: {
                desktop: 48,
                tablet: 30,
                mobile: 16
            }
        },
        align: {
            type: 'string',
            default: 'center'
        },
        labelPosition: {
            type: 'string',
            default: 'bottom'
        },
        labelSpacing: {
            type: 'object',
            default: {
                desktop: 5,
                tablet: 4,
                mobile: 3
            }
        },
        titleTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 70, tablet: 38, mobile: 26 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        contentTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 14, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.4, tablet: 1.4, mobile: 1.4 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        expiredMessage: {
            type: 'string',
            default: __("Time's up!", 'digiblocks')
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        displaySeparator: {
            type: 'boolean',
            default: false
        },
        separatorType: {
            type: 'string',
            default: 'colon'
        },
        boxesEqual: {
            type: 'boolean',
            default: false
        },
        style: {
            type: 'string',
            default: 'boxes'
        }
    },
    example: {
        attributes: {
            endDate: new Date(Date.now() + 2592000000).toISOString(), // 30 days from now
            style: 'boxes',
            boxStyle: 'filled',
            digitColor: '#ffffff',
            digitBackground: '#1e73be',
            labelColor: '#333333',
            showDays: true,
            showHours: true,
            showMinutes: true,
            showSeconds: true,
			titleTypography: {
				fontSize: { desktop: 32 }
			},
			contentTypography: {
				fontSize: { desktop: 14 }
			}
        }
    },
    edit: CountdownEdit,
    save: CountdownSave,
});

/**
 * Register Counter block
 */
registerBlockType('digiblocks/counter', {
    apiVersion: 2,
    title: digiBlocksData.blocks['counter'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['counter'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['counter'].description,
    keywords: [__('counter', 'digiblocks'), __('number', 'digiblocks'), __('stats', 'digiblocks'), __('count up', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('counter') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        iconValue: {
            type: 'object',
            default: null
        },
        startNumber: {
            type: 'string',
            default: '0'
        },
        endNumber: {
            type: 'string',
            default: '100'
        },
        counterPrefix: {
            type: 'string',
            default: ''
        },
        counterPrefixSpacing: {
            type: 'number',
            default: 5
        },
        counterSuffix: {
            type: 'string',
            default: ''
        },
        counterSuffixSpacing: {
            type: 'number',
            default: 5
        },
        title: {
            type: 'string',
            default: 'Counter Title'
        },
        description: {
            type: 'string',
            default: 'Add description here.'
        },
        counterColor: {
            type: 'string',
            default: '#333333'
        },
        counterHoverColor: {
            type: 'string',
            default: ''
        },
        titleColor: {
            type: 'string',
            default: '#333333'
        },
        titleHoverColor: {
            type: 'string',
            default: ''
        },
        textColor: {
            type: 'string',
            default: '#666666'
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        backgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        iconColor: {
            type: 'string',
            default: '#1e73be'
        },
        iconHoverColor: {
            type: 'string',
            default: ''
        },
        iconBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        iconHoverBackgroundColor: {
            type: 'string',
            default: ''
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 32,
                tablet: 28,
                mobile: 24
            }
        },
        iconPadding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        iconMargin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: 'px' }
            }
        },
        iconBorderStyle: {
            type: 'string',
            default: 'default'
        },
        iconBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        iconBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        iconBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        iconHoverBorderColor: {
            type: 'string',
            default: ''
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 48, tablet: 42, mobile: 36 },
                fontSizeUnit: 'px',
                fontWeight: '700',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
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
                fontWeight: '500',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
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
        padding: {
            type: 'object',
            default: {
                desktop: {
                    top: 30,
                    right: 30,
                    bottom: 30,
                    left: 30,
                    unit: 'px'
                },
                tablet: {
                    top: 25,
                    right: 25,
                    bottom: 25,
                    left: 25,
                    unit: 'px'
                },
                mobile: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                    unit: 'px'
                }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: {
                    top: 0,
                    right: 0,
                    bottom: 30,
                    left: 0,
                    unit: 'px'
                },
                tablet: {
                    top: 0,
                    right: 0,
                    bottom: 25,
                    left: 0,
                    unit: 'px'
                },
                mobile: {
                    top: 0,
                    right: 0,
                    bottom: 20,
                    left: 0,
                    unit: 'px'
                }
            }
        },
        align: {
            type: 'string',
            default: 'center'
        },
        animation: {
            type: 'string',
            default: 'none'
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
        borderStyle: {
            type: 'string',
            default: 'default'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                },
                tablet: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                },
                mobile: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                }
            }
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                },
                tablet: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                },
                mobile: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        hoverEffect: {
            type: 'string',
            default: 'none'
        },
        animationDuration: {
            type: 'number',
            default: 2000
        },
        animationDelay: {
            type: 'number',
            default: 0
        },
        thousandSeparator: {
            type: 'string',
            default: ','
        },
        decimalPlaces: {
            type: 'number',
            default: 0
        },
        decimalSeparator: {
            type: 'string',
            default: '.'
        },
        layoutStyle: {
            type: 'string',
            default: 'stacked'
        },
        verticalSpacing: {
            type: 'number',
            default: 15
        },
        displayIcon: {
            type: 'boolean',
            default: false
        },
        numberWithCommas: {
            type: 'boolean',
            default: true
        }
    },
    example: {
        attributes: {
            startNumber: '0',
            endNumber: '100',
            counterPrefix: '',
            counterSuffix: '+',
            title: 'Happy Clients',
            description: 'Serving clients with excellence',
            displayIcon: true,
            iconValue: {
                id: 'user-check',
                name: 'User Check',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z"/></svg>',
                style: 'solid',
                categories: ['users-people']
            },
            counterColor: '#1e73be',
            iconColor: '#1e73be',
            backgroundColor: '#ffffff'
        }
    },
    edit: CounterEdit,
    save: CounterSave,
});

/**
 * Register Digi Products block
 */
if ( isDigiActive() ) {
    registerBlockType('digiblocks/digi-products', {
        apiVersion: 2,
        title: digiBlocksData.blocks['digi-products'].title,
        category: 'digiblocks',
        icon: {
            src: () => {
                const { viewbox, path } = digiBlocksData.blocks['digi-products'].icon;
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                        <path d={path} />
                    </svg>
                );
            }
        },
        description: digiBlocksData.blocks['digi-products'].description,
        keywords: [__('products', 'digiblocks'), __('digicommerce', 'digiblocks'), __('ecommerce', 'digiblocks'), __('store', 'digiblocks')],
        supports: {
            inserter: getBlockActiveStatus('digi-products') ? true : false,
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
            customClasses: {
                type: 'string',
                default: ''
            },
            productsToShow: {
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
            productStyle: {
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
            displayPrice: {
                type: 'boolean',
                default: true
            },
            displayRating: {
                type: 'boolean',
                default: true
            },
            displaySalePrice: {
                type: 'boolean',
                default: true
            },
            displayCategories: {
                type: 'boolean',
                default: true
            },
            displayExcerpt: {
                type: 'boolean',
                default: true
            },
            displayViewProductButton: {
                type: 'boolean',
                default: true
            },
            enablePagination: {
                type: 'boolean',
                default: false
            },
            paginationAlign: {
                type: 'string',
                default: 'center'
            },
            excerptLength: {
                type: 'number',
                default: 25
            },
            viewProductText: {
                type: 'string',
                default: __('View Product', 'digiblocks')
            },
            order: {
                type: 'string',
                default: 'desc'
            },
            orderBy: {
                type: 'string',
                default: 'date'
            },
            categories: {
                type: 'array',
                default: []
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
            priceColor: {
                type: 'string',
                default: '#4a6cf7'
            },
            salePriceColor: {
                type: 'string',
                default: '#e53935'
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
                    desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                    tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                    mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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
			headingTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 18, tablet: 16, mobile: 15 },
					fontSizeUnit: 'px',
					fontWeight: '700',
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
                    tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                    mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
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
                    tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                    mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
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
                    tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                    mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
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
                    tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                    mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
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
                productStyle: 'grid',
                productsToShow: 2,
                columns: {
                    desktop: 2,
                    tablet: 2,
                    mobile: 1
                },
                displayFeaturedImage: true,
                displayTitle: true,
                displayPrice: true,
                displayExcerpt: true,
                excerptLength: 15,
                cardStyle: true
            },
            viewportWidth: 800
        },
        edit: DigiProductsEdit,
        save: DigiProductsSave,
    });
}

/**
 * Register FAQ block
 */
registerBlockType('digiblocks/faq', {
    apiVersion: 2,
    title: digiBlocksData.blocks['faq'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['faq'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['faq'].description,
    keywords: [__('faq', 'digiblocks'), __('questions', 'digiblocks'), __('answers', 'digiblocks'), __('schema', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('faq') ? true : false, // Remove the block if disabled
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
        customClasses: {
            type: 'string',
            default: ''
        },
        items: {
            type: 'array',
            default: [
                {
                    id: 'faq-item-1',
                    title: __('What is a frequently asked question?', 'digiblocks'),
                    content: __('A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.', 'digiblocks'),
                    isOpen: true
                },
                {
                    id: 'faq-item-2',
                    title: __('How do I add more questions and answers?', 'digiblocks'),
                    content: __('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.', 'digiblocks'),
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
        contentBackgroundColor: {
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
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
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
                fontSize: { desktop: 18, tablet: 16, mobile: 15 },
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
        },
        titleTag: {
            type: 'string',
            default: 'h3'
        },
        questionPrefix: {
            type: 'string',
            default: ''
        },
        questionPrefixColor: {
            type: 'string',
            default: ''
        },
        answerPrefix: {
            type: 'string',
            default: ''
        },
        answerPrefixColor: {
            type: 'string',
            default: ''
        },
        layout: {
            type: 'string',
            default: 'boxed'
        },
        itemsSpacing: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: 12,
                mobile: 8
            }
        },
        schemaEnabled: {
            type: 'boolean',
            default: true
        },
        schemaType: {
            type: 'string',
            default: 'FAQPage'
        },
        schemaName: {
            type: 'string',
            default: ''
        }
    },
    example: {
        attributes: {
            items: [
                {
                    id: 'faq-item-1',
                    title: __('What is a frequently asked question?', 'digiblocks'),
                    content: __('A frequently asked question (FAQ) is a question that is commonly asked by users or customers.', 'digiblocks'),
                    isOpen: true
                },
                {
                    id: 'faq-item-2',
                    title: __('How do I add more questions?', 'digiblocks'),
                    content: __('Click the "Add FAQ Item" button to add more questions and answers.', 'digiblocks'),
                    isOpen: false
                }
            ],
            layout: 'boxed',
            titleColor: '#333333',
            titleActiveColor: '#1e73be',
            backgroundColor: '#ffffff'
        }
    },
    edit: FAQEdit,
    save: FAQSave,
});

/**
 * Register Forms block
 */
registerBlockType('digiblocks/forms', {
    apiVersion: 2,
    title: digiBlocksData.blocks['forms'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['forms'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['forms'].description,
    keywords: [__('form', 'digiblocks'), __('contact', 'digiblocks'), __('input', 'digiblocks'), __('email', 'digiblocks'), __('field', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('forms') ? true : false,
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
			type: 'string'
		},
        customClasses: {
			type: 'string'
		},
        formName: {
			type: 'string',
			default: __('Contact Form', 'digiblocks')
		},
        recipientEmail: {
			type: 'string',
			default: ''
		},
        emailSubject: {
			type: 'string',
			default: __('New form submission', 'digiblocks')
		},
        successMessage: {
			type: 'string',
			default: __('Thank you for your submission!', 'digiblocks')
		},
        errorMessage: {
			type: 'string',
			default: __('There was an error submitting the form. Please try again.', 'digiblocks')
		},
        enableRecaptcha: {
			type: 'boolean',
			default: false
		},
		useSiteLogo: {
			type: 'boolean',
			default: true
		},
		customLogo: {
			type: 'string',
			default: ''
		},
		emailHeader: {
			type: 'string',
			default: ''
		},
		emailFooter: {
			type: 'string',
			default: ''
		},
		businessName: {
			type: 'string',
			default: ''
		},
		businessAddress: {
			type: 'string',
			default: ''
		},
        submitButtonText: {
			type: 'string',
			default: __('Submit', 'digiblocks')
		},
        buttonAlign: {
			type: 'string',
			default: 'left'
		},
        backgroundColor: {
			type: 'string',
			default: '#ffffff'
		},
        textColor: {
			type: 'string',
			default: '#333333'
		},
        labelColor: {
			type: 'string',
			default: '#333333'
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
        borderStyle: {
			type: 'string',
			default: 'solid'
		},
        borderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
        borderWidth: {
			type: 'number',
			default: 1
		},
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: 'px' },
                tablet: { top: 25, right: 25, bottom: 25, left: 25, unit: 'px' },
                mobile: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' }
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
        typography: {
			type: 'object',
			default: {}
		},
        textTypography: {
			type: 'object',
			default: {}
		},
        buttonTypography: {
			type: 'object',
			default: {}
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
        inputBorderStyle: {
			type: 'string',
			default: 'solid'
		},
        inputBorderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
        inputBorderWidth: {
			type: 'number',
			default: 1
		},
        inputBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
            }
        },
        inputPadding: {
            type: 'object',
            default: {
                desktop: { top: 12, right: 15, bottom: 12, left: 15, unit: 'px' },
                tablet: { top: 10, right: 12, bottom: 10, left: 12, unit: 'px' },
                mobile: { top: 8, right: 10, bottom: 8, left: 10, unit: 'px' }
            }
        },
        inputBackgroundColor: {
			type: 'string',
			default: '#ffffff'
		},
        inputTextColor: {
			type: 'string',
			default: '#333333'
		},
        inputFocusBorderColor: {
			type: 'string',
			default: '#4a6cf7'
		},
        animation: {
			type: 'string',
			default: 'none'
		},
        fieldGap: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 15,
                mobile: 12
            }
        },
        labelMargin: {
            type: 'object',
            default: {
                desktop: 8,
                tablet: 6,
                mobile: 5
            }
        },
        fields: {
            type: 'array',
            default: [
                {
                    id: 'name',
                    type: 'text',
                    label: __('Name', 'digiblocks'),
                    placeholder: __('Enter your name', 'digiblocks'),
                    required: true,
                    width: 100
                },
                {
                    id: 'email',
                    type: 'email',
                    label: __('Email', 'digiblocks'),
                    placeholder: __('Enter your email', 'digiblocks'),
                    required: true,
                    width: 100
                },
                {
                    id: 'message',
                    type: 'textarea',
                    label: __('Message', 'digiblocks'),
                    placeholder: __('Enter your message', 'digiblocks'),
                    required: true,
                    width: 100
                }
            ]
        }
    },
	example: {
		attributes: {
			fields: [
				{
					id: 'name',
					type: 'text',
					label: __('Name', 'digiblocks'),
					placeholder: __('Enter your name', 'digiblocks'),
					required: true,
					width: 100
				},
				{
					id: 'email',
					type: 'email',
					label: __('Email', 'digiblocks'),
					placeholder: __('Enter your email', 'digiblocks'),
					required: true,
					width: 100
				},
				{
					id: 'message',
					type: 'textarea',
					label: __('Message', 'digiblocks'),
					placeholder: __('Enter your message', 'digiblocks'),
					required: true,
					width: 100
				}
			],
			formName: __('Contact Form', 'digiblocks'),
			backgroundColor: '#ffffff',
			textColor: '#333333',
			labelColor: '#333333',
			borderStyle: 'solid',
			borderColor: '#e0e0e0',
			buttonBackgroundColor: '#4a6cf7',
			buttonTextColor: '#ffffff',
			submitButtonText: __('Submit', 'digiblocks'),
			viewportWidth: 450
		}
	},
    edit: FormsEdit,
    save: FormsSave
});

/**
 * Register Google Map block
 */
registerBlockType('digiblocks/google-map', {
    apiVersion: 2,
    title: digiBlocksData.blocks['google-map'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['google-map'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['google-map'].description,
    keywords: [__('map', 'digiblocks'), __('google', 'digiblocks'), __('location', 'digiblocks'), __('marker', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('google-map') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        address: {
            type: 'string',
            default: ''
        },
        mapHeight: {
            type: 'object',
            default: {
                desktop: 400,
                tablet: 350,
                mobile: 300
            }
        },
        zoom: {
            type: 'number',
            default: 10
        },
        mapType: {
            type: 'string',
            default: 'roadmap'
        },
		mapStyle: {
			type: 'string',
			default: 'default'
		},
		customMapStyle: {
			type: 'string',
			default: ''
		},
        mapId: {
            type: 'string',
            default: ''
        },
        markers: {
            type: 'array',
            default: []
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        enableZoom: {
            type: 'boolean',
            default: true
        },
        enableScroll: {
            type: 'boolean',
            default: true
        },
        enableFullscreenControl: {
            type: 'boolean',
            default: true
        },
        enableStreetViewControl: {
            type: 'boolean',
            default: true
        },
        enableMapTypeControl: {
            type: 'boolean',
            default: true
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
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
    },
    example: {
        attributes: {
            address: 'New York, NY',
            mapHeight: {
                desktop: 300
            },
            zoom: 12,
            mapType: 'roadmap',
        }
    },
    edit: GoogleMapEdit,
    save: GoogleMapSave,
});

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
		inserter: getBlockActiveStatus('heading') ? true : false, // Remove the block if disabled
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
        customClasses: {
            type: 'string',
            default: ''
        },
        content: {
            type: 'string',
            default: __('Add Your Heading', 'digiblocks')
        },
        level: {
            type: 'number',
            default: 2
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
            type: 'string',
            default: 'left'
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: 'px' }
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
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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

/**
 * Register Icon block
 */
registerBlockType('digiblocks/icon', {
    apiVersion: 2,
    title: digiBlocksData.blocks['icon'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['icon'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['icon'].description,
    keywords: [__('icon', 'digiblocks'), __('symbol', 'digiblocks'), __('fontawesome', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('icon') ? true : false, // Remove the block if disabled
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
        customClasses: {
            type: 'string',
            default: ''
        },
        iconValue: {
            type: 'object',
            default: {
                id: 'heart',
                name: 'Heart',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>',
                style: 'solid',
                categories: ['symbols', 'emoji']
            }
        },
        iconColor: {
            type: 'string',
            default: '#1e73be'
        },
        iconBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        iconBorderStyle: {
            type: 'string',
            default: 'default'
        },
        iconBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        iconBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        iconBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        iconPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 5, right: 5, bottom: 5, left: 5, unit: 'px' }
            }
        },
        iconMargin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        iconHoverColor: {
            type: 'string',
            default: ''
        },
        iconHoverBackgroundColor: {
            type: 'string',
            default: ''
        },
        iconHoverBorderColor: {
            type: 'string',
            default: ''
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
        iconSize: {
            type: 'object',
            default: {
                desktop: 48,
                tablet: 40,
                mobile: 32
            }
        },
        backgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        align: {
            type: 'string',
            default: 'center'
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        borderStyle: {
            type: 'string',
            default: 'default'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                },
                tablet: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                },
                mobile: {
                    top: 8,
                    right: 8,
                    bottom: 8,
                    left: 8,
                    unit: 'px'
                }
            }
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                },
                tablet: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                },
                mobile: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1,
                    unit: 'px'
                }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        hoverEffect: {
            type: 'string',
            default: 'none'
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
        rotateIcon: {
            type: 'number',
            default: 0
        },
        flipHorizontal: {
            type: 'boolean',
            default: false
        },
        flipVertical: {
            type: 'boolean',
            default: false
        }
    },
    example: {
        attributes: {
            iconValue: {
                id: 'star',
                name: 'Star',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
                style: 'solid',
                categories: ['design', 'basic-shapes']
            },
            iconColor: '#1e73be',
            backgroundColor: 'transparent',
            iconSize: { desktop: 80 },
			iconPadding: {
				desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
				tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
				mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
			},
        },
    },
    edit: IconEdit,
    save: IconSave,
});

/**
 * Register Icon Box block
 */
registerBlockType('digiblocks/icon-box', {
	apiVersion: 2,
	title: digiBlocksData.blocks['icon-box'].title,
	category: 'digiblocks',
	icon: {
		src: () => {
			const { viewbox, path } = digiBlocksData.blocks['icon-box'].icon;
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
					<path d={path} />
				</svg>
			);
		}
	},
	description: digiBlocksData.blocks['icon-box'].description,
	keywords: [__('icon', 'digiblocks'), __('box', 'digiblocks'), __('feature', 'digiblocks'), __('service', 'digiblocks')],
	// Disable all default controls and settings panels
	supports: {
		inserter: getBlockActiveStatus('icon-box') ? true : false, // Remove the block if disabled
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
		customClasses: {
			type: 'string',
			default: ''
		},
		iconValue: {
			type: 'object',
			default: null
		},
		title: {
			type: 'string',
			default: __('Feature Title', 'digiblocks')
		},
		content: {
			type: 'string',
			default: __('Add your feature description here. Explain what makes this feature special.', 'digiblocks')
		},
		iconColor: {
			type: 'string',
			default: '#1e73be'
		},
		titleColor: {
			type: 'string',
			default: '#333333'
		},
		titleHoverColor: {
			type: 'string',
			default: ''
		},
		textColor: {
			type: 'string',
			default: '#666666'
		},
		textHoverColor: {
			type: 'string',
			default: ''
		},
		backgroundColor: {
			type: 'string',
			default: '#ffffff'
		},
		backgroundHoverColor: {
			type: 'string',
			default: ''
		},
		iconBackgroundColor: {
			type: 'string',
			default: 'transparent'
		},
		iconBorderStyle: {
			type: 'string',
			default: 'default'
		},
		iconBorderWidth: {
			type: 'object',
			default: {
				desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
				tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
				mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
			}
		},
		iconBorderRadius: {
			type: 'object',
			default: {
				desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
				tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
				mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
			}
		},
		iconBorderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
		iconPadding: {
			type: 'object',
			default: {
				desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
				tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
				mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
			}
		},
		iconMargin: {
			type: 'object',
			default: {
				desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
				tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' },
				mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: 'px' }
			}
		},
		iconHoverColor: {
			type: 'string',
			default: ''
		},
		iconHoverBackgroundColor: {
			type: 'string',
			default: ''
		},
		iconHoverBorderColor: {
			type: 'string',
			default: ''
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
		iconSize: {
			type: 'object',
			default: {
				desktop: 48,
				tablet: 40,
				mobile: 32
			}
		},
		titleTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: 22, tablet: 20, mobile: 18 },
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
		padding: {
			type: 'object',
			default: {
				desktop: {
					top: 30,
					right: 30,
					bottom: 30,
					left: 30,
					unit: 'px'
				},
				tablet: {
					top: 25,
					right: 25,
					bottom: 25,
					left: 25,
					unit: 'px'
				},
				mobile: {
					top: 20,
					right: 20,
					bottom: 20,
					left: 20,
					unit: 'px'
				}
			}
		},
		margin: {
			type: 'object',
			default: {
				desktop: {
					top: 0,
					right: 0,
					bottom: 30,
					left: 0,
					unit: 'px'
				},
				tablet: {
					top: 0,
					right: 0,
					bottom: 25,
					left: 0,
					unit: 'px'
				},
				mobile: {
					top: 0,
					right: 0,
					bottom: 20,
					left: 0,
					unit: 'px'
				}
			}
		},
		align: {
			type: 'string',
			default: 'center'
		},
		animation: {
			type: 'string',
			default: 'none'
		},
		borderStyle: {
			type: 'string',
			default: 'default'
		},
		borderRadius: {
			type: 'object',
			default: {
				desktop: {
					top: 8,
					right: 8,
					bottom: 8,
					left: 8,
					unit: 'px'
				},
				tablet: {
					top: 8,
					right: 8,
					bottom: 8,
					left: 8,
					unit: 'px'
				},
				mobile: {
					top: 8,
					right: 8,
					bottom: 8,
					left: 8,
					unit: 'px'
				}
			}
		},
		borderWidth: {
			type: 'object',
			default: {
				desktop: {
					top: 1,
					right: 1,
					bottom: 1,
					left: 1,
					unit: 'px'
				},
				tablet: {
					top: 1,
					right: 1,
					bottom: 1,
					left: 1,
					unit: 'px'
				},
				mobile: {
					top: 1,
					right: 1,
					bottom: 1,
					left: 1,
					unit: 'px'
				}
			}
		},
		borderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
		hoverEffect: {
			type: 'string',
			default: 'none'
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
        }
	},
	example: {
		attributes: {
			iconValue: {
				id: 'star',
				name: 'Star',
				svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
				style: 'solid',
				categories: ['design', 'lifestyle-and-hobbies', 'social']
			},
			title: __('Feature Title', 'digiblocks'),
			content: __('Add your feature description here. Explain what makes this feature special.', 'digiblocks'),
			iconColor: '#1e73be',
			backgroundColor: '#ffffff'
		},
		viewportWidth: 400
	},
	edit: IconBoxEdit,
	save: IconBoxSave,
});

/**
 * Register Icon List block
 */
registerBlockType('digiblocks/icon-list', {
    apiVersion: 2,
    title: digiBlocksData.blocks['icon-list'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['icon-list'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['icon-list'].description,
    keywords: [__('icon', 'digiblocks'), __('list', 'digiblocks'), __('menu', 'digiblocks'), __('feature', 'digiblocks'), __('service', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('icon-list') ? true : false, // Remove the block if disabled
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
        customClasses: {
            type: 'string',
            default: ''
        },
        items: {
            type: 'array',
            default: [
                {
                    id: 'item-1',
                    content: __('First list item with icon', 'digiblocks'),
                    icon: {
                        id: 'check',
                        name: 'Check',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    },
                    linkEnabled: false,
                    linkUrl: '',
                    linkOpenInNewTab: false,
                    linkRel: ''
                },
                {
                    id: 'item-2',
                    content: __('Second list item with star icon', 'digiblocks'),
                    icon: {
                        id: 'star',
                        name: 'Star',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    },
                    linkUrl: '',
                    linkOpenInNewTab: false,
                    linkRel: ''
                },
                {
                    id: 'item-3',
                    content: __('Third list item with heart icon', 'digiblocks'),
                    icon: {
                        id: 'heart',
                        name: 'Heart',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    },
                    linkUrl: '',
                    linkOpenInNewTab: false,
                    linkRel: ''
                }
            ]
        },
        defaultIcon: {
            type: 'object',
            default: {
                id: 'check',
                name: 'Check',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
                style: 'solid',
                categories: ['design']
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
        listLayout: {
            type: 'string',
            default: 'vertical'
        },
        listAlign: {
            type: 'string',
            default: 'left'
        },
        iconPosition: {
            type: 'string',
            default: 'before'
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 24,
                tablet: 20,
                mobile: 18
            }
        },
        iconSpace: {
            type: 'object',
            default: {
                desktop: 12,
                tablet: 10,
                mobile: 8
            }
        },
        itemSpace: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: 12,
                mobile: 8
            }
        },
        iconColor: {
            type: 'string',
            default: '#1e73be'
        },
        iconHoverColor: {
            type: 'string',
            default: ''
        },
        textColor: {
            type: 'string',
            default: '#333333'
        },
        textHoverColor: {
            type: 'string',
            default: ''
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderHoverColor: {
            type: 'string',
            default: ''
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
        backgroundColor: {
            type: 'string',
            default: ''
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        hoverEffect: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            items: [
                {
                    id: 'item-1',
                    content: __('Professional feature', 'digiblocks'),
                    icon: {
                        id: 'star',
                        name: 'Star',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',
                        style: 'solid',
                        categories: ['design']
                    }
                },
                {
                    id: 'item-2',
                    content: __('24/7 support service', 'digiblocks'),
                    icon: {
                        id: 'headset',
                        name: 'Headset',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>',
                        style: 'solid',
                        categories: ['business', 'technology']
                    }
                },
                {
                    id: 'item-3',
                    content: __('Free updates and documentation', 'digiblocks'),
                    icon: {
                        id: 'download',
                        name: 'Download',
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 0c17.7 0 32 14.3 32 32V242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7V32c0-17.7 14.3-32 32-32zM48 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H464c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H304 208 48zm272 80c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z"/></svg>',
                        style: 'solid',
                        categories: ['arrows', 'technology']
                    }
                }
            ],
            iconColor: '#1e73be',
            textColor: '#333333'
        },
        viewportWidth: 800
    },
    edit: IconListEdit,
    save: IconListSave,
});

/**
 * Register Image block
 */
registerBlockType('digiblocks/image', {
    apiVersion: 2,
    title: digiBlocksData.blocks['image'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['image'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['image'].description,
    keywords: [__('image', 'digiblocks'), __('picture', 'digiblocks'), __('photo', 'digiblocks'), __('media', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('image') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        imageId: {
            type: 'number',
        },
        imageUrl: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        altText: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'alt',
            default: '',
        },
        title: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'title',
            default: '',
        },
        caption: {
            type: 'string',
            source: 'html',
            selector: 'figcaption',
            default: '',
        },
        width: {
            type: 'object',
            default: {
                desktop: 100,
                tablet: 100,
                mobile: 100
            }
        },
        widthUnit: {
            type: 'string',
            default: '%'
        },
        height: {
            type: 'object',
            default: {
                desktop: 'auto',
                tablet: 'auto',
                mobile: 'auto'
            }
        },
        heightUnit: {
            type: 'string',
            default: 'px'
        },
        sizeSlug: {
            type: 'string',
            default: 'large',
        },
        align: {
            type: 'string',
            default: 'center',
        },
        alignTablet: {
            type: 'string',
            default: 'center',
        },
        alignMobile: {
            type: 'string',
            default: 'center',
        },
        objectFit: {
            type: 'string',
            default: 'cover',
        },
        borderStyle: {
            type: 'string',
            default: 'none',
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0',
        },
        borderHoverColor: {
            type: 'string',
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
                position: 'outset',
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
                position: 'outset',
            }
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        url: {
            type: 'string',
            default: ''
        },
        opensInNewTab: {
            type: 'boolean',
            default: false
        },
        rel: {
            type: 'string',
            default: ''
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        hoverEffect: {
            type: 'string',
            default: 'none'
        },
        overlayEnable: {
            type: 'boolean',
            default: false,
        },
        overlayColor: {
            type: 'string',
            default: 'rgba(0,0,0,0.5)',
        },
        overlayHoverOnly: {
            type: 'boolean',
            default: true,
        },
    },
    example: {
        attributes: {
            imageUrl: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
            sizeSlug: 'large',
            width: {
                desktop: 100,
                tablet: 100,
                mobile: 100
            },
            widthUnit: '%'
        },
    },
    edit: ImageEdit,
    save: ImageSave,
});

/**
 * Register Lottie Animation block
 */
registerBlockType('digiblocks/lottie', {
    apiVersion: 2,
    title: digiBlocksData.blocks['lottie'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['lottie'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['lottie'].description,
    keywords: [__('lottie', 'digiblocks'), __('animation', 'digiblocks'), __('dotlottie', 'digiblocks'), __('motion', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('lottie') ? true : false, // Remove the block if disabled
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
        customClasses: {
            type: 'string',
            default: ''
        },
        lottieSource: {
            type: 'string',
            default: ''
        },
        sourceType: {
            type: 'string',
            default: 'file'
        },
        lottieFile: {
            type: 'object',
            default: null
        },
        autoplay: {
            type: 'boolean',
            default: true
        },
        loop: {
            type: 'boolean',
            default: true
        },
        speed: {
            type: 'number',
            default: 1
        },
        width: {
            type: 'object',
            default: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            }
        },
        widthUnit: {
            type: 'string',
            default: 'px'
        },
        height: {
            type: 'object',
            default: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            }
        },
        heightUnit: {
            type: 'string',
            default: 'px'
        },
        alignment: {
            type: 'string',
            default: 'center'
        },
        backgroundColor: {
            type: 'string',
            default: ''
        },
        showControls: {
            type: 'boolean',
            default: false
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        shadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            lottieSource: 'https://lottie.host/74c2e0cc-daa3-4269-b9a8-3205d6cd70d6/V7KchLpRt2.lottie',
            autoplay: true,
            loop: true,
            width: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            },
            height: {
                desktop: 300,
                tablet: 300,
                mobile: 300
            }
        },
    },
    edit: LottieEdit,
    save: LottieSave,
});

/**
 * Register Posts block
 */
registerBlockType('digiblocks/posts', {
    apiVersion: 2,
    title: digiBlocksData.blocks['posts'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['posts'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['posts'].description,
    keywords: [__('post', 'digiblocks'), __('blog', 'digiblocks'), __('article', 'digiblocks'), __('grid', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('posts') ? true : false, // Remove the block if disabled
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
                displayComments: true
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
        order: {
            type: 'string',
            default: 'desc'
        },
        orderBy: {
            type: 'string',
            default: 'date'
        },
        categories: {
            type: 'array',
            default: []
        },
		enablePagination: {
			type: 'boolean',
			default: false
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
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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
                tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
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
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
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
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
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
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
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
			postsToShow: 1,
			columns: 1,
			displayFeaturedImage: true,
			displayTitle: true,
			displayExcerpt: true,
			excerptLength: 15,
			displayMeta: true,
			titleColor: '#333333',
			excerptColor: '#666666',
			metaColor: '#666666',
			buttonBackgroundColor: '#4a6cf7',
			buttonTextColor: '#ffffff',
			itemSpacing: {
				desktop: 20,
				tablet: 15,
				mobile: 10
			}
		},
		viewportWidth: 600
	},
    edit: PostsEdit,
    save: PostsSave,
});

/**
 * Register Pricing Table block
 */
registerBlockType('digiblocks/pricing-table', {
    apiVersion: 2,
    title: digiBlocksData.blocks['pricing-table'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['pricing-table'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['pricing-table'].description,
    keywords: [__('pricing', 'digiblocks'), __('price', 'digiblocks'), __('table', 'digiblocks'), __('plan', 'digiblocks'), __('subscription', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('pricing-table') ? true : false, // Remove the block if disabled
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
    },
	attributes: {
        id: {
            type: 'string',
        },
        anchor: {
            type: 'string',
        },
        customClasses: {
            type: 'string',
        },
        tables: {
            type: 'array',
            default: [],
        },
        columns: {
            type: 'number',
            default: 2,
        },
        tableStyle: {
            type: 'string',
            default: 'style1',
        },
        align: {
            type: 'string',
            default: 'center',
        },
        animation: {
            type: 'string',
            default: 'none',
        },
        titleTypography: {
            type: 'object',
            default: {},
        },
        headingTypography: {
            type: 'object',
            default: {},
        },
        textTypography: {
            type: 'object',
            default: {},
        },
        contentTypography: {
            type: 'object',
            default: {},
        },
        buttonTypography: {
            type: 'object',
            default: {},
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            },
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' }
            },
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            },
        },
        borderStyle: {
            type: 'string',
            default: 'solid',
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            },
        },
        borderColor: {
            type: 'string',
            default: '#e6e6e6',
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
            },
        },
        boxShadowHover: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.15)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
            },
        },
        buttonRadius: {
            type: 'number',
            default: 4,
        },
        buttonPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px' },
                tablet: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' },
                mobile: { top: 6, right: 12, bottom: 6, left: 12, unit: 'px' }
            },
        },
        buttonBorderStyle: {
            type: 'string',
            default: 'none',
        },
        buttonBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            },
        },
        buttonBorderColor: {
            type: 'string',
            default: '',
        },
        buttonBorderHoverColor: {
            type: 'string',
            default: '',
        },
        showRibbon: {
            type: 'boolean',
            default: true,
        },
        ribbonStyle: {
            type: 'string',
            default: 'corner',
        },
        ribbonPosition: {
            type: 'string',
            default: 'right',
        },
        tableTextColor: {
            type: 'string',
            default: '#333333',
        },
        tableBackgroundColor: {
            type: 'string',
            default: '#ffffff',
        },
        headerBackgroundColor: {
            type: 'string',
            default: '#f8f9fa',
        },
        buttonTextColor: {
            type: 'string',
            default: '#ffffff',
        },
        buttonBackgroundColor: {
            type: 'string',
            default: '#4a6cf7',
        },
        buttonTextHoverColor: {
            type: 'string',
            default: '#ffffff',
        },
        buttonBackgroundHoverColor: {
            type: 'string',
            default: '#3151e1',
        },
        ribbonTextColor: {
            type: 'string',
            default: '#ffffff',
        },
        ribbonBackgroundColor: {
            type: 'string',
            default: '#4a6cf7',
        },
    },
    example: {
        attributes: {
            tables: [
                {
                    id: 'table-1-example',
                    title: 'Basic Plan',
                    price: '$19',
                    period: '/month',
                    description: 'Great for starters',
                    features: [
                        { text: '1 Website', enabled: true },
                        { text: '5GB Storage', enabled: true },
                        { text: 'Premium Support', enabled: false }
                    ],
                    buttonText: 'Get Started',
                    isHighlighted: false,
                    ribbonText: 'Popular',
                }
            ],
            columns: 1,
            tableStyle: 'style1',
            showRibbon: true
        }
    },
    edit: PricingTableEdit,
    save: PricingTableSave,
});

/**
 * Register Separator block
 */
registerBlockType('digiblocks/separator', {
    apiVersion: 2,
    title: digiBlocksData.blocks['separator'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['separator'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['separator'].description,
    keywords: [__('separator', 'digiblocks'), __('divider', 'digiblocks'), __('horizontal rule', 'digiblocks'), __('hr', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('separator') ? true : false, // Remove the block if disabled
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
        customClasses: {
            type: 'string',
            default: ''
        },
        contentType: {
            type: 'string',
            default: 'none'
        },
        content: {
            type: 'string',
            default: 'Separator'
        },
        iconValue: {
            type: 'object',
            default: null
        },
        separatorStyle: {
            type: 'string',
            default: 'line'
        },
        primaryColor: {
            type: 'string',
            default: '#222222'
        },
        secondaryColor: {
            type: 'string',
            default: '#f0f0f0'
        },
        textColor: {
            type: 'string',
            default: '#333333'
        },
        width: {
            type: 'object',
            default: {
                desktop: 100,
                tablet: 100,
                mobile: 100
            }
        },
        widthUnit: {
            type: 'string',
            default: '%'
        },
        height: {
            type: 'object',
            default: {
                desktop: 3,
                tablet: 2,
                mobile: 2
            }
        },
        heightUnit: {
            type: 'string',
            default: 'px'
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: 0,
                tablet: 0,
                mobile: 0
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: {
                    top: 30,
                    bottom: 30,
                    unit: 'px'
                },
                tablet: {
                    top: 25,
                    bottom: 25,
                    unit: 'px'
                },
                mobile: {
                    top: 20,
                    bottom: 20,
                    unit: 'px'
                }
            }
        },
        align: {
            type: 'string',
            default: 'center'
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: 1.5, mobile: 1.5 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 24,
                tablet: 20,
                mobile: 16
            }
        },
        gap: {
            type: 'object',
            default: {
                desktop: 15,
                tablet: 10,
                mobile: 8
            }
        }
    },
    example: {
        attributes: {
            separatorStyle: 'gradient',
            primaryColor: '#1e73be',
            secondaryColor: '#f0f0f0',
            width: { desktop: 80 },
            height: { desktop: 4 },
            contentType: 'text',
            content: 'Section',
            textColor: '#333333'
        }
    },
    edit: SeparatorEdit,
    save: SeparatorSave,
});

/**
 * Register Social Icons block
 */
registerBlockType('digiblocks/social-icons', {
    apiVersion: 2,
    title: digiBlocksData.blocks['social-icons'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['social-icons'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['social-icons'].description,
    keywords: [__('social', 'digiblocks'), __('icons', 'digiblocks'), __('networks', 'digiblocks'), __('media', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
        inserter: getBlockActiveStatus('social-icons') ? true : false, // Remove the block if disabled
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
        customClasses: {
            type: 'string',
            default: ''
        },
        icons: {
            type: 'array',
            default: [
                {
                    id: 'social-icon-1',
                    iconValue: {
                        name: 'Facebook',
                        network: 'facebook',
                        svg: 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'
                    },
                    url: 'https://facebook.com',
                    label: 'Facebook',
                    openInNewTab: true,
                    rel: 'nofollow'
                },
                {
                    id: 'social-icon-2',
                    iconValue: {
                        name: 'Twitter',
                        network: 'twitter',
                        svg: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'
                    },
                    url: 'https://twitter.com',
                    label: 'Twitter',
                    openInNewTab: true,
                    rel: 'nofollow'
                },
                {
                    id: 'social-icon-3',
                    iconValue: {
                        name: 'Instagram',
                        network: 'instagram',
                        svg: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                    },
                    url: 'https://instagram.com',
                    label: 'Instagram',
                    openInNewTab: true,
                    rel: 'nofollow'
                }
            ]
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 24,
                tablet: 22,
                mobile: 20
            }
        },
        iconSpacing: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: 8,
                mobile: 6
            }
        },
        labelSpacing: {
            type: 'object',
            default: {
                desktop: 5,
                tablet: 5,
                mobile: 5
            }
        },
        iconColor: {
            type: 'string',
            default: '#333333'
        },
        iconHoverColor: {
            type: 'string',
            default: ''
        },
        labelColor: {
            type: 'string',
            default: ''
        },
        labelHoverColor: {
            type: 'string',
            default: ''
        },
        iconBackground: {
            type: 'string',
            default: 'transparent'
        },
        iconHoverBackground: {
            type: 'string',
            default: ''
        },
        iconBorderStyle: {
            type: 'string',
            default: 'none'
        },
        iconBorderWidth: {
            type: 'object',
            default: {
                desktop: { value: 1, unit: 'px' },
                tablet: { value: 1, unit: 'px' },
                mobile: { value: 1, unit: 'px' }
            }
        },
        iconBorderRadius: {
            type: 'object',
            default: {
                desktop: { value: 0, unit: 'px' },
                tablet: { value: 0, unit: 'px' },
                mobile: { value: 0, unit: 'px' }
            }
        },
        iconBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        iconHoverBorderColor: {
            type: 'string',
            default: ''
        },
        align: {
            type: 'string',
            default: 'left'
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        showLabels: {
            type: 'boolean',
            default: false
        },
        labelPosition: {
            type: 'string',
            default: 'bottom'
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
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        }
    },
    example: {
        attributes: {
            icons: [
                {
                    id: 'example-icon-1',
                    iconValue: {
                        name: 'Facebook',
                        network: 'facebook',
                        svg: 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z',
                    },
                    url: 'https://facebook.com',
                    label: 'Facebook',
                    openInNewTab: true,
                    rel: 'nofollow'
                },
                {
                    id: 'example-icon-2',
                    iconValue: {
                        name: 'Twitter',
                        network: 'twitter',
                        svg: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
                    },
                    url: 'https://twitter.com',
                    label: 'Twitter',
                    openInNewTab: true,
                    rel: 'nofollow'
                },
                {
                    id: 'example-icon-3',
                    iconValue: {
                        name: 'Instagram',
                        network: 'instagram',
                        svg: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
                    },
                    url: 'https://instagram.com',
                    label: 'Instagram',
                    openInNewTab: true,
                    rel: 'nofollow'
                }
            ],
            iconSpacing: { desktop: 20 },
            align: 'center',
            iconColor: '#1e73be',
            labelColor: '#09053a',
            iconBackground: 'transparent',
            showLabels: true,
            labelPosition: 'right',
        }
    },
    edit: SocialIconsEdit,
    save: SocialIconsSave,
});

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
        inserter: getBlockActiveStatus('spacer') ? true : false,
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

/**
 * Register Table block
 */
registerBlockType('digiblocks/table', {
    apiVersion: 2,
    title: digiBlocksData.blocks['table'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['table'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['table'].description,
    keywords: [__('table', 'digiblocks'), __('comparison', 'digiblocks'), __('grid', 'digiblocks'), __('cells', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('table') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        tableData: {
            type: 'array',
            default: [
                ['Header 1', 'Header 2', 'Header 3'],
                ['Cell 1,1', 'Cell 1,2', 'Cell 1,3'],
                ['Cell 2,1', 'Cell 2,2', 'Cell 2,3']
            ]
        },
        hasHeader: {
            type: 'boolean',
            default: true
        },
        hasFooter: {
            type: 'boolean',
            default: false
        },
        tableBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        tableBorderWidth: {
            type: 'number',
            default: 1
        },
        tableBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        cellPadding: {
            type: 'object',
            default: {
                desktop: { top: 15, right: 15, bottom: 15, left: 15, unit: 'px' },
                tablet: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        },
        tableBorderCollapse: {
            type: 'string',
            default: 'collapse'
        },
        headerBackgroundColor: {
            type: 'string',
            default: '#f8f9fa'
        },
        headerTextColor: {
            type: 'string',
            default: '#333333'
        },
        headingTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 18, tablet: 16, mobile: 15 },
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
        bodyBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        altRowBackgroundColor: {
            type: 'string',
            default: ''
        },
        bodyTextColor: {
            type: 'string',
            default: '#666666'
        },
        textTypography: {
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
        footerBackgroundColor: {
            type: 'string',
            default: '#f8f9fa'
        },
        footerTextColor: {
            type: 'string',
            default: '#333333'
        },
        contentTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
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
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        },
        boxShadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.1)',
                horizontal: 0,
                vertical: 2,
                blur: 10,
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
                vertical: 10,
                blur: 25,
                spread: 0,
                position: 'outset'
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
        cellAlignment: {
            type: 'string',
            default: 'left'
        },
        headerAlignment: {
            type: 'string',
            default: 'left'
        },
        footerAlignment: {
            type: 'string',
            default: 'left'
        },
        tablePreset: {
            type: 'string',
            default: 'default'
        },
        responsiveMode: {
            type: 'string',
            default: 'stack'
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        firstColHeader: {
            type: 'boolean',
            default: false
        },
        cellControls: {
            type: 'object',
            default: {}
        }
    },
    example: {
        attributes: {
            tableData: [
                ['Feature', 'Basic', 'Premium'],
                ['Storage', '10GB', '1TB'],
                ['Users', '1', 'Unlimited'],
                ['Support', 'Email', '24/7 Phone'],
                ['Price', '$9.99', '$29.99']
            ],
            hasHeader: true,
            headerBackgroundColor: '#f8f9fa',
            bodyBackgroundColor: '#ffffff',
            altRowBackgroundColor: '#f9f9f9',
        }
    },
    edit: TableEdit,
    save: TableSave,
});

/**
 * Register Team block
 */
registerBlockType('digiblocks/team', {
    apiVersion: 2,
    title: digiBlocksData.blocks['team'].title,
    category: 'digiblocks',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['team'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['team'].description,
    keywords: [__('team', 'digiblocks'), __('members', 'digiblocks'), __('staff', 'digiblocks'), __('people', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('team') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        members: {
            type: 'array',
            default: [
                {
                    id: 'team-member-1',
                    name: __('John Doe', 'digiblocks'),
                    position: __('CEO & Founder', 'digiblocks'),
                    bio: __('John has over 15 years of experience in the industry and leads our team with vision and expertise.', 'digiblocks'),
                    image: {
                        url: '',
                        id: '',
                        alt: ''
                    },
                    socials: [
                        {
                            id: 'social-1',
                            network: 'facebook',
                            url: 'https://facebook.com'
                        },
                        {
                            id: 'social-2',
                            network: 'twitter',
                            url: 'https://twitter.com'
                        }
                    ]
                },
                {
                    id: 'team-member-2',
                    name: __('Jane Smith', 'digiblocks'),
                    position: __('Creative Director', 'digiblocks'),
                    bio: __('Jane brings creativity and innovation to every project with her background in design and marketing.', 'digiblocks'),
                    image: {
                        url: '',
                        id: '',
                        alt: ''
                    },
                    socials: [
                        {
                            id: 'social-3',
                            network: 'linkedin',
                            url: 'https://linkedin.com'
                        },
                        {
                            id: 'social-4',
                            network: 'instagram',
                            url: 'https://instagram.com'
                        }
                    ]
                },
                {
                    id: 'team-member-3',
                    name: __('Mike Johnson', 'digiblocks'),
                    position: __('Lead Developer', 'digiblocks'),
                    bio: __('Mike is our technical expert, specializing in cutting-edge technologies and solving complex problems.', 'digiblocks'),
                    image: {
                        url: '',
                        id: '',
                        alt: ''
                    },
                    socials: [
                        {
                            id: 'social-5',
                            network: 'github',
                            url: 'https://github.com'
                        },
                        {
                            id: 'social-6',
                            network: 'dribbble',
                            url: 'https://dribbble.com'
                        }
                    ]
                }
            ]
        },
        columns: {
            type: 'object',
            default: {
                desktop: 3,
                tablet: 2,
                mobile: 1
            }
        },
        gutter: {
            type: 'object',
            default: {
                desktop: 30,
                tablet: 20,
                mobile: 15
            }
        },
        layout: {
            type: 'string',
            default: 'grid'
        },
        alignment: {
            type: 'string',
            default: 'center'
        },
        imageStyle: {
            type: 'string',
            default: 'circle'
        },
        imageSize: {
            type: 'object',
            default: {
                desktop: 150,
                tablet: 120,
                mobile: 100
            }
        },
        imageBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        },
        imageBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        imageBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        imageBorderStyle: {
            type: 'string',
            default: 'none'
        },
        typography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 22, tablet: 20, mobile: 18 },
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
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '400',
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
                fontWeight: '400',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        nameColor: {
            type: 'string',
            default: '#333333'
        },
        positionColor: {
            type: 'string',
            default: '#666666'
        },
        bioColor: {
            type: 'string',
            default: '#666666'
        },
        iconColor: {
            type: 'string',
            default: '#1e73be'
        },
        iconHoverColor: {
            type: 'string',
            default: '#135e9e'
        },
        iconSize: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 18,
                mobile: 16
            }
        },
        iconSpacing: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: 8,
                mobile: 6
            }
        },
        iconBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        iconBackgroundHoverColor: {
            type: 'string',
            default: ''
        },
        iconBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 50, right: 50, bottom: 50, left: 50, unit: '%' },
                tablet: { top: 50, right: 50, bottom: 50, left: 50, unit: '%' },
                mobile: { top: 50, right: 50, bottom: 50, left: 50, unit: '%' }
            }
        },
        iconPadding: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: 6, right: 6, bottom: 6, left: 6, unit: 'px' },
                mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
            }
        },
        boxBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        boxBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        boxBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
            }
        },
        boxBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        boxBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        boxPadding: {
            type: 'object',
            default: {
                desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: 'px' },
                tablet: { top: 25, right: 25, bottom: 25, left: 25, unit: 'px' },
                mobile: { top: 20, right: 20, bottom: 20, left: 20, unit: 'px' }
            }
        },
        boxMargin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 25, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' }
            }
        },
        boxShadow: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.1)',
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
                enable: false,
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 10,
                blur: 25,
                spread: 0,
                position: 'outset'
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        showName: {
            type: 'boolean',
            default: true
        },
        showPosition: {
            type: 'boolean',
            default: true
        },
        showBio: {
            type: 'boolean',
            default: true
        },
        showSocial: {
            type: 'boolean',
            default: true
        }
    },
    example: {
        attributes: {
            members: [
                {
                    id: 'team-member-1',
                    name: __('John Doe', 'digiblocks'),
                    position: __('CEO & Founder', 'digiblocks'),
                    bio: __('John has over 15 years of experience in the industry.', 'digiblocks'),
                    socials: [
                        {
                            id: 'social-1',
                            network: 'facebook',
                            url: 'https://facebook.com'
                        },
                        {
                            id: 'social-2',
                            network: 'twitter',
                            url: 'https://twitter.com'
                        }
                    ]
                },
                {
                    id: 'team-member-2',
                    name: __('Jane Smith', 'digiblocks'),
                    position: __('Creative Director', 'digiblocks'),
                    bio: __('Jane brings creativity to every project.', 'digiblocks'),
                    socials: [
                        {
                            id: 'social-3',
                            network: 'linkedin',
                            url: 'https://linkedin.com'
                        }
                    ]
                }
            ],
            columns: {
                desktop: 2,
                tablet: 2,
                mobile: 1
            }
        }
    },
    edit: TeamEdit,
    save: TeamSave,
});

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
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
                tablet: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' },
                mobile: { top: 12, right: 12, bottom: 12, left: 12, unit: 'px' }
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
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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

if ( isWooActive() ) {
	/**
	 * Register Woo Products block
	 */
	registerBlockType('digiblocks/woo-products', {
		apiVersion: 2,
		title: digiBlocksData.blocks['woo-products'].title,
		category: 'digiblocks',
		icon: {
			src: () => {
				const { viewbox, path } = digiBlocksData.blocks['woo-products'].icon;
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
						<path d={path} />
					</svg>
				);
			}
		},
		description: digiBlocksData.blocks['woo-products'].description,
		keywords: [__('woocommerce', 'digiblocks'), __('products', 'digiblocks'), __('shop', 'digiblocks'), __('store', 'digiblocks'), __('ecommerce', 'digiblocks')],
		supports: {
			inserter: getBlockActiveStatus('woo-products') ? true : false,
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
			customClasses: {
				type: 'string',
				default: ''
			},
			productsToShow: {
				type: 'number',
				default: 4
			},
			columns: {
				type: 'object',
				default: {
					desktop: 4,
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
			displayPrice: {
				type: 'boolean',
				default: true
			},
			displayRating: {
				type: 'boolean',
				default: true
			},
			displaySaleBadge: {
				type: 'boolean',
				default: true
			},
			displayCategories: {
				type: 'boolean',
				default: true
			},
			displayShortDescription: {
				type: 'boolean',
				default: true
			},
			displayAddToCart: {
				type: 'boolean',
				default: true
			},
			shortDescriptionLength: {
				type: 'number',
				default: 25
			},
			order: {
				type: 'string',
				default: 'desc'
			},
			orderBy: {
				type: 'string',
				default: 'date'
			},
			categories: {
				type: 'array',
				default: []
			},
			onSale: {
				type: 'boolean',
				default: false
			},
			featured: {
				type: 'boolean',
				default: false
			},
			enablePagination: {
				type: 'boolean',
				default: false
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
				default: '#333333'
			},
			titleHoverColor: {
				type: 'string',
				default: ''
			},
			priceColor: {
				type: 'string',
				default: '#4a6cf7'
			},
			saleColor: {
				type: 'string',
				default: '#ff5252'
			},
			regularPriceColor: {
				type: 'string',
				default: '#999999'
			},
			ratingColor: {
				type: 'string',
				default: '#ffc107'
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
			saleBadgeBackgroundColor: {
				type: 'string',
				default: '#ff5252'
			},
			saleBadgeColor: {
				type: 'string',
				default: '#ffffff'
			},
			descriptionColor: {
				type: 'string',
				default: '#666666'
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
					desktop: 14,
					tablet: 12,
					mobile: 12
				}
			},
			padding: {
				type: 'object',
				default: {
					desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
					tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
					mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
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
			headingTypography: {
				type: 'object',
				default: {
					fontFamily: '',
					fontSize: { desktop: 18, tablet: 16, mobile: 15 },
					fontSizeUnit: 'px',
					fontWeight: '700',
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
					tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
					mobile: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' }
				}
			},
			imageSize: {
				type: 'string',
				default: 'woocommerce_thumbnail'
			},
			imageBorderRadius: {
				type: 'object',
				default: {
					desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
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
					tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
					mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
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
					tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
					mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
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
				productsToShow: 2,
				columns: {
					desktop: 2,
					tablet: 2,
					mobile: 1
				},
				displayFeaturedImage: true,
				displayTitle: true,
				displayPrice: true,
				displayRating: true,
				displayAddToCart: true,
				cardStyle: true
			},
			viewportWidth: 800
		},
		edit: WooProductsEdit,
		save: WooProductsSave,
	});
}

/**
 * Register Logo block
 */
registerBlockType('digiblocks/logo', {
    apiVersion: 2,
    title: digiBlocksData.blocks['logo'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['logo'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['logo'].description,
    keywords: [__('logo', 'digiblocks'), __('brand', 'digiblocks'), __('identity', 'digiblocks'), __('header', 'digiblocks'), __('theme', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('logo') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        logoType: {
            type: 'string',
            default: 'image'
        },
        imageId: {
            type: 'number',
            default: 0
        },
        imageUrl: {
            type: 'string',
            default: ''
        },
        imageAlt: {
            type: 'string',
            default: ''
        },
        text: {
            type: 'string',
            default: __('Site Logo', 'digiblocks')
        },
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 28, tablet: 26, mobile: 24 },
                fontSizeUnit: 'px',
                fontWeight: '700',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.2, tablet: 1.2, mobile: 1.2 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
		textIcon: {
			type: 'object',
			default: null
		},
		iconPosition: {
			type: 'string',
			default: 'before'
		},
        logoWidth: {
			type: 'object',
			default: {
				desktop: { value: 200, unit: 'px' },
				tablet: { value: 180, unit: 'px' },
				mobile: { value: 150, unit: 'px' }
			}
		},
		logoHeight: {
			type: 'object',
			default: {
				desktop: { value: 0, unit: 'px' },
				tablet: { value: 0, unit: 'px' },
				mobile: { value: 0, unit: 'px' }
			}
		},
		iconSize: {
			type: 'object',
			default: {
				desktop: { value: 30, unit: 'px' },
				tablet: { value: 28, unit: 'px' },
				mobile: { value: 26, unit: 'px' }
			}
		},
        logoAlignment: {
            type: 'string',
            default: 'center'
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
        linkEnabled: {
            type: 'boolean',
            default: true
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
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        borderHoverColor: {
            type: 'string',
            default: ''
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
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        hoverEffect: {
            type: 'string',
            default: 'none'
        }
    },
    example: {
        attributes: {
            logoType: 'text',
            text: __('My Company', 'digiblocks'),
            logoAlignment: 'center',
            textColor: '#333333'
        }
    },
    edit: LogoEdit,
    save: LogoSave,
});

/**
 * Register Navigation block
 */
registerBlockType('digiblocks/navigation', {
    apiVersion: 2,
    title: digiBlocksData.blocks['navigation'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['navigation'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['navigation'].description,
    keywords: [__('navigation', 'digiblocks'), __('menu', 'digiblocks'), __('header', 'digiblocks')],
    supports: {
		inserter: getBlockActiveStatus('navigation') ? true : false,
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
        customClasses: {
            type: 'string',
            default: ''
        },
        menuType: {
            type: 'string',
            default: 'wordpress'
        },
        selectedMenu: {
            type: 'object',
            default: null
        },
        customItems: {
            type: 'array',
            default: []
        },
        orientation: {
            type: 'string',
            default: 'horizontal'
        },
        layout: {
            type: 'string',
            default: 'default'
        },
        align: {
            type: 'string',
            default: 'flex-start'
        },
        mobileBreakpoint: {
            type: 'number',
            default: 768
        },
        showMobileToggle: {
            type: 'boolean',
            default: true
        },
        toggleIcon: {
            type: 'string',
            default: 'hamburger'
        },
        customToggleIcon: {
            type: 'object',
            default: null
        },
        toggleIconColor: {
            type: 'string',
            default: '#333333'
        },
        toggleIconHoverColor: {
            type: 'string',
            default: ''
        },
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                fontSizeUnit: 'px',
                fontWeight: '',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
                lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 3 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        linkColor: {
            type: 'string',
            default: '#333333'
        },
        linkHoverColor: {
            type: 'string',
            default: '#1e73be'
        },
        linkBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        linkHoverBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        submenuBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        submenuBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
		submenuMobileBackgroundColor: {
			type: 'string',
			default: 'rgba(0, 0, 0, 0.02)'
		},
		submenuMobileLinkColor: {
			type: 'string',
			default: ''
		},
		submenuMobileLinkHoverColor: {
			type: 'string',
			default: ''
		},
		submenuMobileLinkHoverBackgroundColor: {
			type: 'string',
			default: ''
		},
        itemSpacing: {
            type: 'object',
            default: {
                desktop: 20,
                tablet: 15,
                mobile: 12
            }
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 10, bottom: 8, left: 10, unit: 'px' },
                tablet: { top: 6, right: 8, bottom: 6, left: 8, unit: 'px' },
                mobile: { top: 0, right: 20, bottom: 0, left: 20, unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
            }
        },
        animation: {
            type: 'string',
            default: 'none'
        },
        mobileFullWidth: {
            type: 'boolean',
            default: true
        }
    },
    example: {
        attributes: {
            menuType: 'custom',
            customItems: [
                {
                    id: 'nav-item-1',
                    text: __('Home', 'digiblocks'),
                    url: '#',
                    opensInNewTab: false,
                    icon: null
                },
                {
                    id: 'nav-item-2',
                    text: __('About', 'digiblocks'),
                    url: '#',
                    opensInNewTab: false,
                    icon: null
                },
                {
                    id: 'nav-item-3', 
                    text: __('Contact', 'digiblocks'),
                    url: '#',
                    opensInNewTab: false,
                    icon: null
                }
            ]
        }
    },
    edit: NavigationEdit,
    save: NavigationSave,
});

/**
 * Register Login Link block
 */
registerBlockType('digiblocks/login-link', {
    apiVersion: 2,
    title: digiBlocksData.blocks['login-link'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['login-link'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['login-link'].description,
    keywords: [__('login', 'digiblocks'), __('account', 'digiblocks'), __('user', 'digiblocks'), __('link', 'digiblocks')],
    // Disable all default controls and settings panels
    supports: {
		inserter: getBlockActiveStatus('login-link') ? true : false,
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
    },
    attributes: {
        id: {
            type: 'string',
        },
        customClasses: {
            type: 'string',
        },
        loginText: {
            type: 'string',
            default: __('Log In', 'digiblocks'),
        },
        loginIconValue: {
            type: 'object',
            default: null,
        },
        loginIconPosition: {
            type: 'string',
            default: 'left',
        },
        loginUrl: {
            type: 'string',
            default: '',
        },
        loginOpenInNewTab: {
            type: 'boolean',
            default: false,
        },
        loginRel: {
            type: 'string',
            default: '',
        },
        loggedInText: {
            type: 'string',
            default: __('My Account', 'digiblocks'),
        },
        loggedInIconValue: {
            type: 'object',
            default: null,
        },
        loggedInIconPosition: {
            type: 'string',
            default: 'left',
        },
        loggedInUrl: {
            type: 'string',
            default: '',
        },
        loggedInOpenInNewTab: {
            type: 'boolean',
            default: false,
        },
        loggedInRel: {
            type: 'string',
            default: '',
        },
        textColor: {
            type: 'string',
        },
        textHoverColor: {
            type: 'string',
        },
        typography: {
            type: 'object',
            default: {},
        },
		iconSize: {
			type: 'object',
			default: {
				desktop: 16,
				tablet: 15,
				mobile: 14
			}
		},
    },
	example: {
        attributes: {
            loginText: __('Log In', 'digiblocks'),
            loggedInText: __('My Account', 'digiblocks'),
            loginIconPosition: 'left',
            textColor: '#3a86ff',
            textHoverColor: '#023e8a',
            typography: {
                fontSize: {
                    desktop: 16,
                    tablet: 15,
                    mobile: 14
                },
                fontWeight: '500'
            }
        }
    },
    edit: LoginLinkEdit,
    save: LoginLinkSave,
});
