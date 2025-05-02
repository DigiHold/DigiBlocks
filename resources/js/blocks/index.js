/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import AccordionEdit from '../../../blocks/accordion/edit';
import AccordionSave from '../../../blocks/accordion/save';
import CallToActionEdit from '../../../blocks/call-to-action/edit';
import CallToActionSave from '../../../blocks/call-to-action/save';
import CountdownEdit from '../../../blocks/countdown/edit';
import CountdownSave from '../../../blocks/countdown/save';
import CounterEdit from '../../../blocks/counter/edit';
import CounterSave from '../../../blocks/counter/save';
import FAQEdit from '../../../blocks/faq/edit';
import FAQSave from '../../../blocks/faq/save';
import GoogleMapEdit from '../../../blocks/google-map/edit';
import GoogleMapSave from '../../../blocks/google-map/save';
import HeadingEdit from '../../../blocks/heading/edit';
import HeadingSave from '../../../blocks/heading/save';
import IconEdit from '../../../blocks/icon/edit';
import IconSave from '../../../blocks/icon/save';
import IconBoxEdit from '../../../blocks/icon-box/edit';
import IconBoxSave from '../../../blocks/icon-box/save';
import SeparatorEdit from '../../../blocks/separator/edit';
import SeparatorSave from '../../../blocks/separator/save';
import SocialIconsEdit from '../../../blocks/social-icons/edit';
import SocialIconsSave from '../../../blocks/social-icons/save';
import SpacerEdit from '../../../blocks/spacer/edit';
import SpacerSave from '../../../blocks/spacer/save';
import TeamEdit from '../../../blocks/team/edit';
import TeamSave from '../../../blocks/team/save';

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
			type: 'string'
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
            type: 'string'
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
            type: 'string'
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
            type: 'string'
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
            type: 'string'
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
            type: 'string'
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
            markers: [
                {
                    id: 'marker-1',
                    address: 'New York, NY',
                    latitude: 40.7128,
                    longitude: -74.0060,
                    title: 'New York City'
                }
            ]
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
            type: 'string'
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
            type: 'string'
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
            iconSize: { desktop: 20 }
        },
        viewportWidth: 100
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
			type: 'string'
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
            type: 'string'
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
            type: 'string'
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
                    iconValue: null,
                    url: '',
                    label: '',
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
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"></path></svg>',
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
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>',
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
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>',
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
            type: 'string'
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
    keywords: [__('team', 'digiblocks'), __('staff', 'digiblocks'), __('members', 'digiblocks'), __('employees', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('spacer') ? true : false,
        html: false,
        className: false,
        customClassName: false,
        anchor: false,
    },
    attributes: {
        id: {
            type: 'string'
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
            default: 'grid'
        },
        columns: {
            type: 'object',
            default: {
                desktop: 3,
                tablet: 2,
                mobile: 1
            }
        },
        gap: {
            type: 'object',
            default: {
                desktop: { horizontal: 30, vertical: 30, unit: 'px' },
                tablet: { horizontal: 20, vertical: 20, unit: 'px' },
                mobile: { horizontal: 15, vertical: 15, unit: 'px' }
            }
        },
        alignment: {
            type: 'string',
            default: 'center'
        },
        showDescription: {
            type: 'boolean',
            default: true
        },
        showPosition: {
            type: 'boolean',
            default: true
        },
        showSocialIcons: {
            type: 'boolean',
            default: true
        },
        imageSize: {
            type: 'object',
            default: {
                desktop: 150,
                tablet: 120,
                mobile: 100
            }
        },
        imageShape: {
            type: 'string',
            default: 'circle'
        },
        imageBorderWidth: {
            type: 'object',
            default: {
                desktop: 0,
                tablet: 0,
                mobile: 0
            }
        },
        imageBorderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        imageBorderHoverColor: {
            type: 'string',
            default: ''
        },
        imageMargin: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 20, left: 0, unit: 'px' },
                tablet: { top: 0, right: 0, bottom: 15, left: 0, unit: 'px' },
                mobile: { top: 0, right: 0, bottom: 10, left: 0, unit: 'px' }
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
        positionColor: {
            type: 'string',
            default: '#666666'
        },
        positionHoverColor: {
            type: 'string',
            default: ''
        },
        descriptionColor: {
            type: 'string',
            default: '#666666'
        },
        descriptionHoverColor: {
            type: 'string',
            default: ''
        },
        cardBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        cardBackgroundHoverColor: {
            type: 'string',
            default: ''
        },
        socialIconsColor: {
            type: 'string',
            default: '#1e73be'
        },
        socialIconsHoverColor: {
            type: 'string',
            default: '#135e9e'
        },
        socialIconsBackgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        socialIconsBackgroundHoverColor: {
            type: 'string',
            default: ''
        },
        socialIconsSize: {
            type: 'object',
            default: {
                desktop: 16,
                tablet: 14,
                mobile: 12
            }
        },
        socialIconsSpacing: {
            type: 'object',
            default: {
                desktop: 10,
                tablet: 8,
                mobile: 6
            }
        },
        headingTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                fontSizeUnit: 'px',
                fontWeight: '600',
                fontStyle: 'normal',
                textTransform: '',
                textDecoration: '',
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
                fontWeight: '',
                fontStyle: 'italic',
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
        members: {
            type: 'array',
            default: [
                {
                    id: 'member-1',
                    name: 'John Doe',
                    position: 'CEO & Founder',
                    description: 'John has over 15 years of experience in the industry and leads our company with a focus on innovation and growth.',
                    imageUrl: '',
                    imageId: 0,
                    socialLinks: [
                        { platform: 'facebook', url: '' },
                        { platform: 'twitter', url: '' },
                        { platform: 'linkedin', url: '' },
                        { platform: 'instagram', url: '' }
                    ]
                },
                {
                    id: 'member-2',
                    name: 'Jane Smith',
                    position: 'Marketing Director',
                    description: 'Jane brings creativity and strategic thinking to our marketing initiatives, with expertise in digital marketing and brand development.',
                    imageUrl: '',
                    imageId: 0,
                    socialLinks: [
                        { platform: 'facebook', url: '' },
                        { platform: 'twitter', url: '' },
                        { platform: 'linkedin', url: '' },
                        { platform: 'instagram', url: '' }
                    ]
                },
                {
                    id: 'member-3',
                    name: 'Michael Johnson',
                    position: 'Technical Lead',
                    description: 'Michael oversees all technical aspects of our projects, ensuring high-quality solutions that meet our clients\' needs.',
                    imageUrl: '',
                    imageId: 0,
                    socialLinks: [
                        { platform: 'facebook', url: '' },
                        { platform: 'twitter', url: '' },
                        { platform: 'linkedin', url: '' },
                        { platform: 'github', url: '' }
                    ]
                }
            ]
        }
    },
    example: {
        attributes: {
            layout: 'grid',
            columns: {
                desktop: 3
            },
            members: [
                {
                    id: 'member-1',
                    name: 'John Doe',
                    position: 'CEO & Founder',
                    description: 'John has over 15 years of experience in the industry.',
                    imageUrl: ''
                },
                {
                    id: 'member-2',
                    name: 'Jane Smith',
                    position: 'Marketing Director',
                    description: 'Jane brings creativity and strategic thinking to our marketing initiatives.',
                    imageUrl: ''
                }
            ]
        }
    },
    edit: TeamEdit,
    save: TeamSave,
});