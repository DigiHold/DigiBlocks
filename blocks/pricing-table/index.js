/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import PricingTableEdit from './edit';
import PricingTableSave from './save';


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
		animationDuration: {
			type: 'string',
			default: 'normal'
		},
		animationDelay: {
			type: 'number',
			default: ''
		},
        titleTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: { value: 20, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
				fontWeight: '500',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: { value: 1.4, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } },
				letterSpacing: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }
			}
		},
        headingTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: { value: 36, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
				fontWeight: 'bold',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: { value: 1.2, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } },
				letterSpacing: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }
			}
		},
        textTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: { value: 16, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
				fontWeight: '',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: { value: 1.5, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } },
				letterSpacing: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }
			}
		},
        contentTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: { value: 16, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
				fontWeight: '',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: { value: 1.6, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } },
				letterSpacing: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }
			}
		},
       	buttonTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: { value: 16, unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } },
				fontWeight: '500',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: { value: 1.4, unit: 'em' }, tablet: { value: '', unit: 'em' }, mobile: { value: '', unit: 'em' } },
				letterSpacing: { desktop: { value: '', unit: 'px' }, tablet: { value: '', unit: 'px' }, mobile: { value: '', unit: 'px' } }
			}
		},
        padding: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            },
        },
        margin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px', isLinked: false, },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            },
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' },
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
                tablet: { value: '', unit: 'px' },
                mobile: { value: '', unit: 'px' },
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