/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import IconBoxEdit from './edit';
import IconBoxSave from './save';


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
		iconSource: {
			type: 'string',
			default: 'library'
		},
		customSvg: {
			type: 'string',
			default: ''
		},
		iconValue: {
			type: 'object',
			default: null
		},
		align: {
			type: 'object',
			default: {
				desktop: 'center',
				tablet: '',
				mobile: ''
			}
		},
		justifyContent: {
			type: 'object',
			default: {
				desktop: 'center',
				tablet: '',
				mobile: ''
			}
		},
		iconLayout: {
			type: 'object',
			default: {
				desktop: 'above',
				tablet: '',
				mobile: ''
			}
		},
		iconContentGap: {
			type: 'object',
			default: {
				desktop: { value: 20, unit: 'px' },
				tablet: { value: '', unit: 'px' },
				mobile: { value: '', unit: 'px' }
			}
		},
		showTitle: {
			type: 'boolean',
			default: true
		},
		showContent: {
			type: 'boolean',
			default: true
		},
		showBadge: {
			type: 'boolean',
			default: false
		},
		badgeText: {
			type: 'string',
			default: __('Popular', 'digiblocks')
		},
		title: {
			type: 'string',
			default: __('Feature Title', 'digiblocks')
		},
		content: {
			type: 'string',
			default: __('Add your feature description here. Explain what makes this feature special.', 'digiblocks')
		},
		iconPadding: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		iconMargin: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		titlePadding: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		titleMargin: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '10', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		contentPadding: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		contentMargin: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '0', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		iconColor: {
			type: 'string',
			default: '#1e73be'
		},
		titleColor: {
			type: 'string',
			default: ''
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
			default: ''
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
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		iconBorderRadius: {
			type: 'object',
			default: {
				desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		iconBorderColor: {
			type: 'string',
			default: '#e0e0e0'
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
		linkType: {
			type: 'string',
			default: 'box'
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
		buttonText: {
			type: 'string',
			default: __('Learn More', 'digiblocks')
		},
		buttonBackgroundColor: {
			type: 'string',
			default: '#1e73be'
		},
		buttonBackgroundHoverColor: {
			type: 'string',
			default: '#135e9e'
		},
		buttonTextColor: {
			type: 'string',
			default: '#ffffff'
		},
		buttonTextHoverColor: {
			type: 'string',
			default: '#ffffff'
		},
		buttonBorderStyle: {
			type: 'string',
			default: 'default'
		},
		buttonBorderWidth: {
			type: 'object',
			default: {
				desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
		buttonBorderColor: {
			type: 'string',
			default: ''
		},
		buttonBorderHoverColor: {
			type: 'string',
			default: ''
		},
		buttonBoxShadow: {
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
		buttonBoxShadowHover: {
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
		buttonPadding: {
			type: 'object',
			default: {
				desktop: { top: 10, right: 20, bottom: 10, left: 20, unit: 'px', isLinked: false, },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		buttonMargin: {
			type: 'object',
			default: {
				desktop: { top: 15, right: 0, bottom: 0, left: 0, unit: 'px', isLinked: false, },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		buttonTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: '', tablet: '', mobile: '' },
				fontSizeUnit: 'px',
				fontWeight: '500',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: '', tablet: '', mobile: '' },
				lineHeightUnit: 'em',
				letterSpacing: { desktop: '', tablet: '', mobile: '' },
				letterSpacingUnit: 'px'
			}
		},
		badgeBackgroundColor: {
			type: 'string',
			default: '#f59e0b'
		},
		badgeBackgroundHoverColor: {
			type: 'string',
			default: ''
		},
		badgeTextColor: {
			type: 'string',
			default: '#ffffff'
		},
		badgeTextHoverColor: {
			type: 'string',
			default: ''
		},
		badgeTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: 0.7, tablet: '', mobile: '' },
				fontSizeUnit: 'rem',
				fontWeight: '700',
				fontStyle: 'normal',
				textTransform: 'uppercase',
				textDecoration: '',
				lineHeight: { desktop: 1.2, tablet: '', mobile: '' },
				lineHeightUnit: 'em',
				letterSpacing: { desktop: 0.05, tablet: '', mobile: '' },
				letterSpacingUnit: 'em'
			}
		},
		badgePadding: {
			type: 'object',
			default: {
				desktop: { top: 0.25, right: 0.5, bottom: 0.25, left: 0.5, unit: 'rem', isLinked: false, },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'rem' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'rem' }
			}
		},
		badgeBorderStyle: {
			type: 'string',
			default: 'none'
		},
		badgeBorderWidth: {
			type: 'object',
			default: {
				desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		badgeBorderRadius: {
			type: 'object',
			default: {
				desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
				tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
				mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
			}
		},
		badgeBorderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
		badgeBorderHoverColor: {
			type: 'string',
			default: ''
		},
		badgeBoxShadow: {
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
		badgeBoxShadowHover: {
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
		iconSize: {
			type: 'object',
			default: {
				desktop: { value: '48', unit: 'px' },
				tablet: { value: '', unit: 'px' },
				mobile: { value: '', unit: 'px' }
			}
		},
		iconHeight: {
			type: 'object',
			default: {
				desktop: { value: '', unit: 'px' },
				tablet: { value: '', unit: 'px' },
				mobile: { value: '', unit: 'px' }
			}
		},
		titleTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: '', tablet: '', mobile: '' },
				fontSizeUnit: 'px',
				fontWeight: '',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: '', tablet: '', mobile: '' },
				lineHeightUnit: 'em',
				letterSpacing: { desktop: '', tablet: '', mobile: '' },
				letterSpacingUnit: 'px'
			}
		},
		contentTypography: {
			type: 'object',
			default: {
				fontFamily: '',
				fontSize: { desktop: '', tablet: '', mobile: '' },
				fontSizeUnit: 'px',
				fontWeight: '',
				fontStyle: 'normal',
				textTransform: '',
				textDecoration: '',
				lineHeight: { desktop: '', tablet: '', mobile: '' },
				lineHeightUnit: 'em',
				letterSpacing: { desktop: '', tablet: '', mobile: '' },
				letterSpacingUnit: 'px'
			}
		},
		padding: {
			type: 'object',
			default: {
				desktop: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				},
				tablet: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				},
				mobile: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				}
			}
		},
		margin: {
			type: 'object',
			default: {
				desktop: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				},
				tablet: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				},
				mobile: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				}
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
		borderStyle: {
			type: 'string',
			default: 'default'
		},
		borderRadius: {
			type: 'object',
			default: {
				desktop: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				},
				tablet: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				},
				mobile: {
					top: '',
					right: '',
					bottom: '',
					left: '',
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
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				},
				mobile: {
					top: '',
					right: '',
					bottom: '',
					left: '',
					unit: 'px'
				}
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
			iconValue: {
				id: 'star',
				name: 'Star',
				svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',
				style: 'solid',
				categories: ['design', 'lifestyle-and-hobbies', 'social']
			},
			title: __('Feature Title', 'digiblocks'),
			content: __('Add your feature description here. Explain what makes this feature special.', 'digiblocks'),
			iconColor: '#1e73be'
		},
		viewportWidth: 400
	},
	edit: IconBoxEdit,
	save: IconBoxSave,
});