/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import PostCommentsEdit from './edit';
import PostCommentsSave from './save';
import { getBlockActiveStatus } from '../../resources/js/blocks/utils.js';

/**
 * Register Post Comments block
 */
registerBlockType('digiblocks/post-comments', {
    apiVersion: 2,
    title: digiBlocksData.blocks['post-comments'].title,
    category: 'digiblocks-theme',
    icon: {
        src: () => {
            const { viewbox, path } = digiBlocksData.blocks['post-comments'].icon;
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewbox}`} className="digiblocks-editor-icons">
                    <path d={path} />
                </svg>
            );
        }
    },
    description: digiBlocksData.blocks['post-comments'].description,
    keywords: [__('comments', 'digiblocks'), __('discussion', 'digiblocks'), __('feedback', 'digiblocks')],
    supports: {
        inserter: getBlockActiveStatus('post-comments') ? true : false,
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
        showAvatars: {
            type: 'boolean',
            default: true
        },
        avatarSize: {
            type: 'object',
            default: {
                desktop: 50,
                tablet: 40,
                mobile: 30
            }
        },
        commentsPerPage: {
            type: 'number',
            default: 20
        },
        nestedComments: {
            type: 'boolean',
            default: true
        },
        commentsOrder: {
            type: 'string',
            default: 'asc'
        },
        displayTitle: {
            type: 'boolean',
            default: true
        },
        titleText: {
            type: 'string',
            default: __('Comments', 'digiblocks')
        },
        customFormTitle: {
            type: 'boolean',
            default: false
        },
        formTitle: {
            type: 'string',
            default: __('Leave a Reply', 'digiblocks')
        },
        displayLoggedIn: {
            type: 'boolean',
            default: true
        },
        loggedInText: {
            type: 'string',
            default: ''
        },
        displayCookieConsent: {
            type: 'boolean',
            default: true
        },
        cookieConsentText: {
            type: 'string',
            default: ''
        },
        displaySubmitButton: {
            type: 'boolean',
            default: false
        },
        submitButtonText: {
            type: 'string',
            default: ''
        },
        displayCancelReply: {
            type: 'boolean',
            default: false
        },
        cancelReplyText: {
            type: 'string',
            default: ''
        },
        titleColor: {
            type: 'string',
            default: '#333333'
        },
        linkColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        linkHoverColor: {
            type: 'string',
            default: '#333333'
        },
        textColor: {
            type: 'string',
            default: '#333333'
        },
        metaColor: {
            type: 'string',
            default: '#666666'
        },
        metaHoverColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        borderColor: {
            type: 'string',
            default: '#e0e0e0'
        },
        backgroundColor: {
            type: 'string',
            default: ''
        },
        commentBackgroundColor: {
            type: 'string',
            default: '#ecf0f1'
        },
        threadedCommentsBackgroundColor: {
            type: 'string',
            default: '#ffffff'
        },
        replyButtonColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        replyButtonBgColor: {
            type: 'string',
            default: 'transparent'
        },
        replyButtonHoverColor: {
            type: 'string',
            default: '#3a5ce5'
        },
        replyButtonBgHoverColor: {
            type: 'string',
            default: 'transparent'
        },
        formBackgroundColor: {
            type: 'string',
            default: '#ecf0f1'
        },
        formInputColor: {
            type: 'string',
            default: '#333333'
        },
        formInputBgColor: {
            type: 'string',
            default: '#ffffff'
        },
        formInputBorderColor: {
            type: 'string',
            default: '#d1d5db'
        },
        formInputFocusBorderColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        submitButtonTextColor: {
            type: 'string',
            default: '#ffffff'
        },
        submitButtonBgColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        submitButtonTextHoverColor: {
            type: 'string',
            default: '#ffffff'
        },
        submitButtonBgHoverColor: {
            type: 'string',
            default: '#3a5ce5'
        },
        padding: {
            type: 'object',
            default: {
                desktop: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
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
        avatarRadius: {
            type: 'object',
            default: {
                desktop: { top: 50, right: 50, bottom: 50, left: 50, unit: '%' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: '%' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: '%' }
            }
        },
        formBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
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
        formPadding: {
            type: 'object',
            default: {
                desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        buttonPadding: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 16, bottom: 8, left: 16, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        titleTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 24, tablet: 22, mobile: 20 },
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
        textTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: 'normal',
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
                lineHeight: { desktop: 1.6, tablet: 1.5, mobile: 1.4 },
                lineHeightUnit: 'em',
                letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
                letterSpacingUnit: 'px'
            }
        },
        buttonTypography: {
            type: 'object',
            default: {
                fontFamily: '',
                fontSize: { desktop: 14, tablet: 13, mobile: 12 },
                fontSizeUnit: 'px',
                fontWeight: '500',
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
                color: 'rgba(0, 0, 0, 0.1)',
                horizontal: 0,
                vertical: 0,
                blur: 0,
                spread: 0,
                position: 'outset'
            }
        },
        commentBoxShadow: {
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
        commentBoxShadowHover: {
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
        threadedCommentBoxShadow: {
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
        threadedCommentBoxShadowHover: {
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
        formBoxShadow: {
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
        formBoxShadowHover: {
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
        buttonBoxShadow: {
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
        buttonBoxShadowHover: {
            type: 'object',
            default: {
                enable: false,
                color: 'rgba(0, 0, 0, 0.2)',
                horizontal: 0,
                vertical: 2,
                blur: 5,
                spread: 0,
                position: 'outset'
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
        borderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        borderStyle: {
            type: 'string',
            default: 'none'
        },
        commentBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        commentBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        commentBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        threadedCommentBorderRadius: {
            type: 'object',
            default: {
                desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        threadedCommentBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        threadedCommentBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        formBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        formBorderStyle: {
            type: 'string',
            default: 'solid'
        },
        buttonBorderWidth: {
            type: 'object',
            default: {
                desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
            }
        },
        buttonBorderStyle: {
            type: 'string',
            default: 'none'
        },
        buttonBorderColor: {
            type: 'string',
            default: '#4a6cf7'
        },
        buttonBorderHoverColor: {
            type: 'string',
            default: '#3a5ce5'
        }
    },
    example: {
        attributes: {
            layout: 'standard',
            showAvatars: true,
            commentsPerPage: 1,
            nestedComments: true,
            displayTitle: true,
            titleText: 'Comments',
            animation: 'none'
        },
    },
    edit: PostCommentsEdit,
    save: PostCommentsSave,
});