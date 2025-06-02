/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import NavigationEdit from './edit';
import NavigationSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

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
        flexWrap: {
            type: 'object',
            default: {
                desktop: 'nowrap',
                tablet: '',
                mobile: ''
            }
        },
        orientation: {
            type: 'object',
            default: {
                desktop: 'horizontal',
                tablet: '',
                mobile: ''
            }
        },
        align: {
            type: 'object',
            default: {
                desktop: 'flex-start',
                tablet: '',
                mobile: ''
            }
        },
        columns: {
            type: 'object',
            default: {
                desktop: 1,
                tablet: 1,
                mobile: 1
            }
        },
        linkEffect: {
            type: 'string',
            default: 'none'
        },
        submenuEffect: {
            type: 'string',
            default: 'fade'
        },
        mobileBreakpoint: {
            type: 'number',
            default: 768
        },
        showMobileToggle: {
            type: 'boolean',
            default: true
        },
		mobileAlign: {
            type: 'object',
            default: 'flex-end',
        },
        toggleIconColor: {
            type: 'string',
            default: '#333333'
        },
        toggleIconHoverColor: {
            type: 'string',
            default: ''
        },
        mobileToggleSize: {
            type: 'number',
            default: 50,
        },
		linkBorderStyle: {
			type: 'string',
			default: 'none'
		},
		linkBorderWidth: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		linkBorderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
		linkBorderHoverColor: {
			type: 'string',
			default: ''
		},
		toggleIconBorderStyle: {
			type: 'string',
			default: 'none'
		},
		toggleIconBorderWidth: {
			type: 'object',
			default: { top: '', right: '', bottom: '', left: '', unit: 'px' }
		},
		toggleIconBorderRadius: {
			type: 'object',
			default: { top: '', right: '', bottom: '', left: '', unit: 'px' }
		},
		toggleIconBackgroundColor: {
			type: 'string',
			default: ''
		},
		toggleIconBackgroundHoverColor: {
			type: 'string',
			default: ''
		},
		toggleIconBorderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
		toggleIconBorderHoverColor: {
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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