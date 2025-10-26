/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import TeamEdit from './edit';
import TeamSave from './save';


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
                tablet: '',
                mobile: ''
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
                tablet: '',
                mobile: ''
            }
        },
        imageBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        imageBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
                fontSize: { desktop: 22, tablet: '', mobile: '' },
                fontSizeUnit: 'px',
                fontWeight: '600',
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
                fontWeight: '400',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: '', mobile: '' },
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
                fontWeight: '400',
                fontStyle: 'normal',
                textTransform: 'none',
                textDecoration: 'none',
                lineHeight: { desktop: 1.5, tablet: '', mobile: '' },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: '', mobile: '' },
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
                tablet: '',
                mobile: ''
            }
        },
        iconSpacing: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: '',
                mobile: ''
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: '%' },
                mobile: { top: '', right: '', bottom: '', left: 50, unit: '%' }
            }
        },
        iconPadding: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        boxBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        boxMargin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: 'px', isLinked: false, },
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
		animationDuration: {
			type: 'string',
			default: 'normal'
		},
		animationDelay: {
			type: 'number',
			default: ''
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