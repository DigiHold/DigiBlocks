/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import CounterEdit from './edit';
import CounterSave from './save';


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
        displayIcon: {
            type: 'boolean',
            default: false
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
            default: ''
        },
        counterHoverColor: {
            type: 'string',
            default: ''
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
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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