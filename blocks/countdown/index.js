/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import CountdownEdit from './edit';
import CountdownSave from './save';
const { getBlockActiveStatus } = wp.digiBlocks;

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
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        boxPadding: {
            type: 'object',
            default: {
                desktop: { top: 10, right: 10, bottom: 10, left: 10, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        boxMargin: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
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