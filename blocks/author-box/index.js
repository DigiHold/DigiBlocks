/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import AuthorBoxEdit from './edit';
import AuthorBoxSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Author Box block
 */
registerBlockType('digiblocks/author-box', {
    apiVersion: 2,
    title: digiBlocksData.blocks['author-box'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['author-box'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['author-box'].description,
    keywords: [__('author', 'digiblocks'), __('profile', 'digiblocks'), __('bio', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('author-box') ? true : false,
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
            default: 'horizontal'
        },
        spacing: {
            type: 'number',
            default: {
                desktop: 40,
                tablet: '',
                mobile: ''
            }
        },
        avatarSize: {
            type: 'number',
            default: {
                desktop: 100,
                tablet: '',
                mobile: ''
            }
        },
        nameColor: {
            type: 'string',
            default: '#333333'
        },
        nameHoverColor: {
            type: 'string',
            default: ''
        },
        descriptionColor: {
            type: 'string',
            default: '#666666'
        },
        backgroundColor: {
            type: 'string',
            default: '#f9f9f9'
        },
        backgroundHoverColor: {
            type: 'string',
            default: ''
        },
        avatarBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        avatarBorderHoverColor: {
            type: 'string',
            default: ''
        },
        avatarBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        avatarBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 50, right: 50, bottom: 50, left: 50, unit: '%' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: '%' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: '%' }
            }
        },
        socialIconColor: {
            type: 'string',
            default: '#555555'
        },
        socialIconHoverColor: {
            type: 'string',
            default: '#ffffff'
        },
        socialIconBackgroundColor: {
            type: 'string',
            default: '#f0f0f0'
        },
        socialIconBackgroundHoverColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        socialButtonSize: {
            type: 'object',
            default: {
                desktop: { value: 36, unit: 'px' },
                tablet: { value: 32, unit: 'px' },
                mobile: { value: 28, unit: 'px' }
            }
        },
        socialIconSize: {
            type: 'object',
            default: {
                desktop: { value: 18, unit: 'px' },
                tablet: { value: 16, unit: 'px' },
                mobile: { value: 14, unit: 'px' }
            }
        },
        socialIconSpacing: {
            type: 'object',
            default: {
                desktop: { value: 8, unit: 'px' },
                tablet: { value: 8, unit: 'px' },
                mobile: { value: 6, unit: 'px' }
            }
        },
        socialIconBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 50, right: 50, bottom: 50, left: 50, unit: '%' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: '%' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: '%' }
            }
        },
        socialIconBorderStyle: {
            type: 'string',
            default: 'none'
        },
        socialIconBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        socialIconBorderColor: {
            type: 'string',
            default: ''
        },
        socialIconBorderHoverColor: {
            type: 'string',
            default: ''
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
                blur: 5,
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
                vertical: 5,
                blur: 15,
                spread: 0,
                position: 'outset'
            }
        },
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderStyle: {
            type: 'string',
            default: 'solid'
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
        animation: {
            type: 'string',
            default: 'none'
        },
        displayAvatar: {
            type: 'boolean',
            default: true
        },
        displayName: {
            type: 'boolean',
            default: true
        },
        displayBio: {
            type: 'boolean',
            default: true
        },
        displaySocial: {
            type: 'boolean',
            default: true
        },
        socialProfiles: {
            type: 'object',
            default: {
                website: {
                    enabled: false
                },
                facebook: {
                    enabled: false
                },
                twitter: {
                    enabled: false
                },
                instagram: {
                    enabled: false
                },
                linkedin: {
                    enabled: false
                },
                youtube: {
                    enabled: false
                },
                github: {
                    enabled: false
                }
            }
        }
    },
    example: {
        attributes: {
            layout: 'horizontal',
            displayAvatar: true,
            displayName: true,
            displayBio: true,
            displaySocial: true,
            socialProfiles: {
                twitter: {
                    enabled: true
                },
                linkedin: {
                    enabled: true
                }
            }
        }
    },
    edit: AuthorBoxEdit,
    save: AuthorBoxSave,
});