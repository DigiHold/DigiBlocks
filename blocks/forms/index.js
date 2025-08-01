/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import FormsEdit from './edit';
import FormsSave from './save';


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
		visibility: {
			type: 'object',
			default: {
				desktop: false,
				tablet: false,
				mobile: false
			}
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
			default: ''
		},
        labelColor: {
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
        borderStyle: {
			type: 'string',
			default: 'solid'
		},
        borderColor: {
			type: 'string',
			default: '#e0e0e0'
		},
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
            type: 'object',
            default: {
                desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        inputBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
			default: ''
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