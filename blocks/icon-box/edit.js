/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    LinkControl,
} = wp.blockEditor;
const {
    TextControl,
    SelectControl,
    RangeControl,
	ToggleControl,
    TabPanel,
    Spinner,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, ResponsiveButtonGroup, ResponsiveRangeControl, TransformControl } = digi.components;

/**
 * Edit function for the Icon Box block
 */
const IconBoxEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
		iconSource,
        customSvg,
        iconValue,
        align,
        justifyContent,
		iconLayout,
		iconContentGap,
		showTitle,
    	showContent,
		showBadge,
		badgeText,
        title,
        content,
        titleColor,
        titleHoverColor,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        iconSize,
        iconHeight,
        iconColor,
        iconBackgroundColor,
        iconBorderStyle,
        iconBorderWidth,
        iconBorderRadius,
        iconBorderColor,
        iconHoverColor,
        iconHoverBackgroundColor,
        iconHoverBorderColor,
        titleTypography,
        contentTypography,
        iconPadding,
        iconMargin,
        titlePadding,
        titleMargin,
        contentPadding,
        contentMargin,
        padding,
        margin,
        animation,
		animationDuration,
		animationDelay,
        boxShadow,
        boxShadowHover,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        borderHoverColor,
        hoverEffect,
        linkEnabled,
        linkType,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
        buttonText,
        buttonIconSource,
        buttonIcon,
        buttonCustomSvg,
        buttonIconPosition,
        buttonIconSpacing,
        buttonBackgroundColor,
        buttonBackgroundHoverColor,
        buttonTextColor,
        buttonTextHoverColor,
        buttonBorderStyle,
        buttonBorderWidth,
        buttonBorderRadius,
        buttonBorderColor,
        buttonBorderHoverColor,
        buttonBoxShadow,
        buttonBoxShadowHover,
        buttonPadding,
        buttonMargin,
        buttonTypography,
		badgeBackgroundColor,
		badgeBackgroundHoverColor,
		badgeTextColor,
		badgeTextHoverColor,
		badgeTypography,
		badgePadding,
		badgeBorderStyle,
		badgeBorderWidth,
		badgeBorderRadius,
		badgeBorderColor,
		badgeBorderHoverColor,
		badgeBoxShadow,
		badgeBoxShadowHover,
        position,
        horizontalOrientation,
        horizontalOffset,
        verticalOrientation,
        verticalOffset,
        zIndex,
		transform,
        transformHover,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

	// Get responsive value with fallback
	const getVal = (obj, device) => {
		if (!obj || typeof obj !== 'object') return null;

		const isEmpty = (val) => {
			if (val === '' || val === undefined || val === null) return true;
			if (typeof val === 'object' && val !== null) {
				return val.value === '' || val.value === undefined || val.value === null;
			}
			return false;
		};

		if (device === 'mobile') {
			return !isEmpty(obj.mobile) ? obj.mobile :
				!isEmpty(obj.tablet) ? obj.tablet :
				obj.desktop;
		}
		if (device === 'tablet') {
			return !isEmpty(obj.tablet) ? obj.tablet : obj.desktop;
		}
		return obj.desktop;
	};

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});

    // State to track if global components are loaded
    const [componentsLoaded, setComponentsLoaded] = useState(false);

    // Check if the global components are loaded
    useEffect(() => {
        // Function to check if digi components are available
        const checkComponents = () => {
            if (window.digi && window.digi.components && window.digi.components.FontAwesomeControl) {
                setComponentsLoaded(true);
                return true;
            }
            return false;
        };
        
        // If components aren't immediately available, set up a small delay to check again
        if (!checkComponents()) {
            const timeout = setTimeout(() => {
                if (checkComponents()) {
                    clearTimeout(timeout);
                }
            }, 500);
            
            return () => clearTimeout(timeout);
        }
    }, []);

    // Set the icon value
    const setIconValue = (newIcon) => {
        setAttributes({ iconValue: newIcon });
    };

    // Use ref
	const previewTimeoutRef = useRef(null);

	// Effect to trigger animation preview when animation attribute changes
	useEffect(() => {
		if (animation && animation !== 'none') {
			const timeoutId = setTimeout(() => {
				animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
			}, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [animation]);

	// Button click handler
	const handlePreviewClick = () => {
		animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
	};

    // Border style options
    const borderStyleOptions = [
        { label: __("Default", "digiblocks"), value: "default" },
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
        { label: __("Groove", "digiblocks"), value: "groove" },
        { label: __("Inset", "digiblocks"), value: "inset" },
        { label: __("Outset", "digiblocks"), value: "outset" },
        { label: __("Ridge", "digiblocks"), value: "ridge" },
    ];

    // Hover effect options
    const hoverEffectOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Lift", "digiblocks"), value: "lift" },
        { label: __("Scale", "digiblocks"), value: "scale" },
        { label: __("Glow", "digiblocks"), value: "glow" },
    ];

    // Animation options
    const animationOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        ...Object.keys(animations).map((animation) => ({
            label: animation
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
            value: animation,
        })),
    ];
    
    // Link type options
    const linkTypeOptions = [
        { label: __("Box", "digiblocks"), value: "box" },
        { label: __("Button", "digiblocks"), value: "button" },
    ];

    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'options', 
            title: __('Options', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        { 
            name: 'style', 
            title: __('Style', 'digiblocks'),
            icon: tabIcons.styleIcon
        },
        { 
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Tabs for normal/hover states
    const stateTabList = [
        {
            name: 'normal',
            title: __('Normal', 'digiblocks'),
            className: 'digiblocks-tab-1 normal'
        },
        {
            name: 'hover',
            title: __('Hover', 'digiblocks'),
            className: 'digiblocks-tab-2 hover'
        }
    ];

	const getTransformOrigin = (transform, device) => {
        const xMap = { left: '0%', center: '50%', right: '100%' };
        const yMap = { top: '0%', center: '50%', bottom: '100%' };
        
        const x = xMap[transform.xAnchor?.[device] || 'center'];
        const y = yMap[transform.yAnchor?.[device] || 'center'];
        
        return `${x} ${y}`;
    };

	const getTransformCSS = (transform, device) => {
		if (!transform) return '';
		
		const transforms = [];
		
		const getValue = (prop) => {
			if (!prop) return '';
			
			let val = prop[device];
			
			// Check if value is empty
			const isEmpty = (v) => {
				if (v === '' || v === undefined || v === null) return true;
				if (typeof v === 'object' && v !== null) {
					return v.value === '' || v.value === undefined || v.value === null;
				}
				return false;
			};
			
			// Tablet fallback to desktop
			if (device === 'tablet' && isEmpty(val)) {
				val = prop.desktop;
			}
			
			// Mobile fallback to tablet, then desktop
			if (device === 'mobile' && isEmpty(val)) {
				val = prop.tablet;
				if (isEmpty(val)) {
					val = prop.desktop;
				}
			}
			
			return typeof val === 'object' && val !== null ? (val.value !== undefined ? val.value : '') : val;
		};
		
		const rotateValue = getValue(transform.rotate);
		if (rotateValue !== '' && rotateValue !== undefined && rotateValue !== null) {
			if (transform.rotate3d) {
				const perspectiveValue = getValue(transform.perspective);
				if (perspectiveValue !== '' && perspectiveValue !== undefined && perspectiveValue !== null) {
					transforms.push(`perspective(${perspectiveValue}px)`);
				}
			}
			transforms.push(`rotate(${rotateValue}deg)`);
		}
		
		if (transform.rotate3d) {
			const rotateXValue = getValue(transform.rotateX);
			if (rotateXValue !== '' && rotateXValue !== undefined && rotateXValue !== null) {
				transforms.push(`rotateX(${rotateXValue}deg)`);
			}
			const rotateYValue = getValue(transform.rotateY);
			if (rotateYValue !== '' && rotateYValue !== undefined && rotateYValue !== null) {
				transforms.push(`rotateY(${rotateYValue}deg)`);
			}
		}
		
		const offsetXValue = transform.offsetX?.[device]?.value;
		const offsetYValue = transform.offsetY?.[device]?.value;
		const hasOffsetX = offsetXValue !== '' && offsetXValue !== undefined && offsetXValue !== null;
		const hasOffsetY = offsetYValue !== '' && offsetYValue !== undefined && offsetYValue !== null;
		
		if (hasOffsetX || hasOffsetY) {
			const x = hasOffsetX ? `${offsetXValue}${transform.offsetX[device].unit || 'px'}` : '0';
			const y = hasOffsetY ? `${offsetYValue}${transform.offsetY[device].unit || 'px'}` : '0';
			transforms.push(`translate(${x}, ${y})`);
		}
		
		if (transform.keepProportions) {
			const scaleValue = getValue(transform.scale);
			if (scaleValue !== '' && scaleValue !== undefined && scaleValue !== null && scaleValue != 1) {
				transforms.push(`scale(${scaleValue})`);
			}
		} else {
			const scaleXValue = getValue(transform.scaleX);
			const scaleYValue = getValue(transform.scaleY);
			const scaleX = (scaleXValue !== '' && scaleXValue !== undefined && scaleXValue !== null) ? scaleXValue : 1;
			const scaleY = (scaleYValue !== '' && scaleYValue !== undefined && scaleYValue !== null) ? scaleYValue : 1;
			if (scaleX != 1 || scaleY != 1) {
				transforms.push(`scale(${scaleX}, ${scaleY})`);
			}
		}
		
		const skewXValue = getValue(transform.skewX);
		if (skewXValue !== '' && skewXValue !== undefined && skewXValue !== null) {
			transforms.push(`skewX(${skewXValue}deg)`);
		}
		const skewYValue = getValue(transform.skewY);
		if (skewYValue !== '' && skewYValue !== undefined && skewYValue !== null) {
			transforms.push(`skewY(${skewYValue}deg)`);
		}
		
		if (transform.flipHorizontal) {
			transforms.push('scaleX(-1)');
		}
		if (transform.flipVertical) {
			transforms.push('scaleY(-1)');
		}
		
		return transforms.length > 0 ? transforms.join(' ') : '';
	};

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;

		// Set alignment properties based on align value
		const currentAlign = getVal(align, activeDevice);
		let alignCSS = '';
		if (currentAlign === 'flex-start') {
			alignCSS = `
				align-items: flex-start;
				text-align: left;
			`;
		} else if (currentAlign === 'center') {
			alignCSS = `
				align-items: center;
				text-align: center;
			`;
		} else if (currentAlign === 'flex-end') {
			alignCSS = `
				align-items: flex-end;
				text-align: right;
			`;
		}

		// Set justify properties
		const currentJustify = getVal(justifyContent, activeDevice);
		let justifyContentCSS = '';
		if (currentJustify === 'flex-start') {
			justifyContentCSS = `
				justify-content: flex-start;
			`;
		} else if (currentJustify === 'center') {
			justifyContentCSS = `
				justify-content: center;
			`;
		} else if (currentJustify === 'flex-end') {
			justifyContentCSS = `
				justify-content: flex-end;
			`;
		}

		// Icon layout CSS with getVal
		const currentIconLayout = getVal(iconLayout, activeDevice);
		let flexDirectionCSS = '';
		if (currentIconLayout === 'above') {
			flexDirectionCSS = 'flex-direction: column;';
		} else if (currentIconLayout === 'after') {
			flexDirectionCSS = 'flex-direction: row-reverse;';
		} else {
			flexDirectionCSS = 'flex-direction: row;';
		}
        
        // Border styles
        let borderRadiusCSS = getDimensionCSS(borderRadius, 'border-radius', activeDevice);
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                ${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
            `;
        } else {
            borderCSS = 'border-style: none;';
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Padding and margin
        const paddingCSS = `${getDimensionCSS(padding, 'padding', activeDevice)}`;
        const marginCSS = `${getDimensionCSS(margin, 'margin', activeDevice)}`;  

        // Title typography CSS
        let titleTypographyCSS = '';
        if (titleTypography) {
            if (titleTypography.fontFamily) {
                titleTypographyCSS += `font-family: ${titleTypography.fontFamily};`;
            }
            
            const titleFontSize = getVal(titleTypography.fontSize, activeDevice);
			if (titleFontSize && titleFontSize.value !== "" && titleFontSize.value !== null && titleFontSize.value !== undefined) {
				titleTypographyCSS += `font-size: ${titleFontSize.value}${titleFontSize.unit !== null ? titleFontSize.unit : ''};`;
			}
            
            if (titleTypography.fontWeight) {
                titleTypographyCSS += `font-weight: ${titleTypography.fontWeight};`;
            }
            
            if (titleTypography.fontStyle) {
                titleTypographyCSS += `font-style: ${titleTypography.fontStyle};`;
            }
            
            if (titleTypography.textTransform) {
                titleTypographyCSS += `text-transform: ${titleTypography.textTransform};`;
            }
            
            if (titleTypography.textDecoration) {
                titleTypographyCSS += `text-decoration: ${titleTypography.textDecoration};`;
            }
            
            const titleLineHeight = getVal(titleTypography.lineHeight, activeDevice);
			if (titleLineHeight && titleLineHeight.value !== "" && titleLineHeight.value !== null && titleLineHeight.value !== undefined) {
				titleTypographyCSS += `line-height: ${titleLineHeight.value}${titleLineHeight.unit !== null ? titleLineHeight.unit : ''};`;
			}

			const titleLetterSpacing = getVal(titleTypography.letterSpacing, activeDevice);
			if (titleLetterSpacing && titleLetterSpacing.value !== "" && titleLetterSpacing.value !== null && titleLetterSpacing.value !== undefined) {
				titleTypographyCSS += `letter-spacing: ${titleLetterSpacing.value}${titleLetterSpacing.unit !== null ? titleLetterSpacing.unit : ''};`;
			}
        }
        
        // Content typography CSS
        let contentTypographyCSS = '';
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }
            
            const contentFontSize = getVal(contentTypography.fontSize, activeDevice);
			if (contentFontSize && contentFontSize.value !== "" && contentFontSize.value !== null && contentFontSize.value !== undefined) {
				contentTypographyCSS += `font-size: ${contentFontSize.value}${contentFontSize.unit !== null ? contentFontSize.unit : ''};`;
			}
            
            if (contentTypography.fontWeight) {
                contentTypographyCSS += `font-weight: ${contentTypography.fontWeight};`;
            }
            
            if (contentTypography.fontStyle) {
                contentTypographyCSS += `font-style: ${contentTypography.fontStyle};`;
            }
            
            if (contentTypography.textTransform) {
                contentTypographyCSS += `text-transform: ${contentTypography.textTransform};`;
            }
            
            if (contentTypography.textDecoration) {
                contentTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
            }
            
            const contentLineHeight = getVal(contentTypography.lineHeight, activeDevice);
			if (contentLineHeight && contentLineHeight.value !== "" && contentLineHeight.value !== null && contentLineHeight.value !== undefined) {
				contentTypographyCSS += `line-height: ${contentLineHeight.value}${contentLineHeight.unit !== null ? contentLineHeight.unit : ''};`;
			}
			
			const contentLetterSpacing = getVal(contentTypography.letterSpacing, activeDevice);
			if (contentLetterSpacing && contentLetterSpacing.value !== "" && contentLetterSpacing.value !== null && contentLetterSpacing.value !== undefined) {
				contentTypographyCSS += `letter-spacing: ${contentLetterSpacing.value}${contentLetterSpacing.unit !== null ? contentLetterSpacing.unit : ''};`;
			}
        }
        
        // Button typography CSS
        let buttonTypographyCSS = '';
        if (buttonTypography) {
            if (buttonTypography.fontFamily) {
                buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
            }
            
            const buttonFontSize = getVal(buttonTypography.fontSize, activeDevice);
			if (buttonFontSize && buttonFontSize.value !== "" && buttonFontSize.value !== null && buttonFontSize.value !== undefined) {
				buttonTypographyCSS += `font-size: ${buttonFontSize.value}${buttonFontSize.unit !== null ? buttonFontSize.unit : ''};`;
			}
            
            if (buttonTypography.fontWeight) {
                buttonTypographyCSS += `font-weight: ${buttonTypography.fontWeight};`;
            }
            
            if (buttonTypography.fontStyle) {
                buttonTypographyCSS += `font-style: ${buttonTypography.fontStyle};`;
            }
            
            if (buttonTypography.textTransform) {
                buttonTypographyCSS += `text-transform: ${buttonTypography.textTransform};`;
            }
            
            if (buttonTypography.textDecoration) {
                buttonTypographyCSS += `text-decoration: ${buttonTypography.textDecoration};`;
            }
            
            const buttonLineHeight = getVal(buttonTypography.lineHeight, activeDevice);
			if (buttonLineHeight && buttonLineHeight.value !== "" && buttonLineHeight.value !== null && buttonLineHeight.value !== undefined) {
				buttonTypographyCSS += `line-height: ${buttonLineHeight.value}${buttonLineHeight.unit !== null ? buttonLineHeight.unit : ''};`;
			}
			
			const buttonLetterSpacing = getVal(buttonTypography.letterSpacing, activeDevice);
			if (buttonLetterSpacing && buttonLetterSpacing.value !== "" && buttonLetterSpacing.value !== null && buttonLetterSpacing.value !== undefined) {
				buttonTypographyCSS += `letter-spacing: ${buttonLetterSpacing.value}${buttonLetterSpacing.unit !== null ? buttonLetterSpacing.unit : ''};`;
			}
        }

		// Badge typography CSS
		let badgeTypographyCSS = '';
		if (badgeTypography) {
			if (badgeTypography.fontFamily) {
				badgeTypographyCSS += `font-family: ${badgeTypography.fontFamily};`;
			}
			
			const badgeFontSize = getVal(badgeTypography.fontSize, activeDevice);
			if (badgeFontSize && badgeFontSize.value !== "" && badgeFontSize.value !== null && badgeFontSize.value !== undefined) {
				badgeTypographyCSS += `font-size: ${badgeFontSize.value}${badgeFontSize.unit !== null ? badgeFontSize.unit : ''};`;
			}
			
			if (badgeTypography.fontWeight) {
				badgeTypographyCSS += `font-weight: ${badgeTypography.fontWeight};`;
			}
			
			if (badgeTypography.fontStyle) {
				badgeTypographyCSS += `font-style: ${badgeTypography.fontStyle};`;
			}
			
			if (badgeTypography.textTransform) {
				badgeTypographyCSS += `text-transform: ${badgeTypography.textTransform};`;
			}
			
			if (badgeTypography.textDecoration) {
				badgeTypographyCSS += `text-decoration: ${badgeTypography.textDecoration};`;
			}
			
			const badgeLineHeight = getVal(badgeTypography.lineHeight, activeDevice);
			if (badgeLineHeight && badgeLineHeight.value !== "" && badgeLineHeight.value !== null && badgeLineHeight.value !== undefined) {
				badgeTypographyCSS += `line-height: ${badgeLineHeight.value}${badgeLineHeight.unit !== null ? badgeLineHeight.unit : ''};`;
			}
			
			const badgeLetterSpacing = getVal(badgeTypography.letterSpacing, activeDevice);
			if (badgeLetterSpacing && badgeLetterSpacing.value !== "" && badgeLetterSpacing.value !== null && badgeLetterSpacing.value !== undefined) {
				badgeTypographyCSS += `letter-spacing: ${badgeLetterSpacing.value}${badgeLetterSpacing.unit !== null ? badgeLetterSpacing.unit : ''};`;
			}
		}
        
        // Icon styles - only apply if an icon exists
        let iconCSS = '';
        let iconHoverCSS = '';
        let iconMarginCSS = '';

		// Check if either a library icon or custom SVG exists
		const hasIcon = (iconValue && iconValue.svg) || (iconSource === 'custom' && customSvg && customSvg.trim() !== '');
        
        // Only process icon styles if an icon actually exists
        if (hasIcon) {
            // Icon background color
            if (iconBackgroundColor) {
                iconCSS += `background-color: ${iconBackgroundColor};`;
            }
            
            // Icon padding
            if (iconPadding && iconPadding[activeDevice]) {
                iconCSS += `${getDimensionCSS(iconPadding, 'padding', activeDevice)}`;
            }
            
            // Icon border styles
            if (iconBorderStyle && iconBorderStyle !== 'default' && iconBorderStyle !== 'none') {
                const currentIconBorderWidth = iconBorderWidth && iconBorderWidth[activeDevice] 
                    ? iconBorderWidth[activeDevice] 
                    : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
                const currentIconBorderRadius = iconBorderRadius && iconBorderRadius[activeDevice] 
                    ? iconBorderRadius[activeDevice] 
                    : { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' };
                
                iconCSS += `
                    border-style: ${iconBorderStyle};
                    border-color: ${iconBorderColor || '#e0e0e0'};
					${getDimensionCSS(iconBorderWidth, 'border-width', activeDevice)}
					${getDimensionCSS(iconBorderRadius, 'border-radius', activeDevice)}
                `;
            }
            
            // Icon hover styles
            if (iconHoverColor) {
                iconHoverCSS += `fill: ${iconHoverColor} !important; color: ${iconHoverColor} !important;`;
            }
            
            if (iconHoverBackgroundColor) {
                iconHoverCSS += `background-color: ${iconHoverBackgroundColor};`;
            }
            
            if (iconHoverBorderColor) {
                iconHoverCSS += `border-color: ${iconHoverBorderColor};`;
            }
            
            // Icon margin
            if (iconMargin && iconMargin[activeDevice]) {
                iconMarginCSS = `${getDimensionCSS(iconMargin, 'margin', activeDevice)}`;
            }
        }
        
        // Hover effects
        let hoverCSS = '';
        
        // Box shadow hover
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            hoverCSS += `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Border hover
        if (borderHoverColor) {
            hoverCSS += `border-color: ${borderHoverColor};`;
        }
        
        // Additional hover effects
        if (hoverEffect === 'lift') {
            hoverCSS += 'transform: translateY(-10px);';
        } else if (hoverEffect === 'scale') {
            hoverCSS += 'transform: scale(1.05);';
        } else if (hoverEffect === 'glow') {
            hoverCSS += 'filter: brightness(1.1);';
        }
        
        // Link styles
        let linkCSS = '';
		if (linkEnabled && linkType === 'box') {
			linkCSS = `
				cursor: pointer;
				text-decoration: none;
			`;
		}
        
        // Button styles
        let buttonCSS = '';
        let buttonHoverCSS = '';
        
        if (linkEnabled && linkType === 'button') {
            // Button border styles
            let buttonBorderCSS = '';
            if (buttonBorderStyle && buttonBorderStyle !== 'default' && buttonBorderStyle !== 'none') {
                buttonBorderCSS = `
                    border-style: ${buttonBorderStyle};
                    border-color: ${buttonBorderColor || buttonBackgroundColor};
                    ${getDimensionCSS(buttonBorderWidth, 'border-width', activeDevice)}
                `;
            } else {
                buttonBorderCSS = 'border-style: none;';
            }
            
            // Button box shadow
            let buttonBoxShadowCSS = 'box-shadow: none;';
            if (buttonBoxShadow && buttonBoxShadow.enable) {
                const inset = buttonBoxShadow.position === 'inset' ? 'inset ' : '';
                buttonBoxShadowCSS = `box-shadow: ${inset}${buttonBoxShadow.horizontal}px ${buttonBoxShadow.vertical}px ${buttonBoxShadow.blur}px ${buttonBoxShadow.spread}px ${buttonBoxShadow.color};`;
            }
            
            // Button padding and margin
            const buttonPaddingCSS = `${getDimensionCSS(buttonPadding, 'padding', activeDevice)}`;
            const buttonMarginCSS = `${getDimensionCSS(buttonMargin, 'margin', activeDevice)}`;
            
            // Button hover styles
            if (buttonBoxShadowHover && buttonBoxShadowHover.enable) {
                const insetHover = buttonBoxShadowHover.position === 'inset' ? 'inset ' : '';
                buttonHoverCSS += `box-shadow: ${insetHover}${buttonBoxShadowHover.horizontal}px ${buttonBoxShadowHover.vertical}px ${buttonBoxShadowHover.blur}px ${buttonBoxShadowHover.spread}px ${buttonBoxShadowHover.color};`;
            }
            
            if (buttonBackgroundHoverColor) {
                buttonHoverCSS += `background-color: ${buttonBackgroundHoverColor};`;
            }
            
            if (buttonTextHoverColor) {
                buttonHoverCSS += `color: ${buttonTextHoverColor};`;
            }
            
            if (buttonBorderHoverColor) {
                buttonHoverCSS += `border-color: ${buttonBorderHoverColor};`;
            }

            const hasButtonIcon = (buttonIconSource === 'library' && buttonIcon) || (buttonIconSource === 'custom' && buttonCustomSvg && buttonCustomSvg.trim() !== '');

            let iconGapCSS = '';
            if (hasButtonIcon) {
                const iconSpacingValue = getVal(buttonIconSpacing, activeDevice);
                const iconSpacing = iconSpacingValue && iconSpacingValue.value !== '' && iconSpacingValue.value !== undefined
                    ? `${iconSpacingValue.value}${iconSpacingValue.unit || 'em'}`
                    : '0.5em';
                iconGapCSS = `gap: ${iconSpacing};`;
            }

            buttonCSS = `
                .${id} .digiblocks-button-wrapper {
                    display: flex;
                    justify-content: ${currentAlign === 'center' ? 'center' : currentAlign === 'flex-end' ? 'flex-end' : 'flex-start'};
                    ${buttonMarginCSS}
                }

                .${id} .digiblocks-button {
                    display: flex;
					align-items: center;
                    ${iconGapCSS}
                    background-color: ${buttonBackgroundColor};
                    color: ${buttonTextColor};
                    ${buttonPaddingCSS}
                    ${buttonBorderCSS}
                    ${getDimensionCSS(buttonBorderRadius, 'border-radius', activeDevice)}
                    ${buttonBoxShadowCSS}
                    ${buttonTypographyCSS}
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .${id} .digiblocks-button:hover {
                    ${buttonHoverCSS}
                }

                .${id} .digiblocks-button .digiblocks-button-icon {
                    display: inline-flex;
                    align-items: center;
                }

                .${id} .digiblocks-button .digiblocks-button-icon svg {
                    width: 1em;
                    height: 1em;
                    fill: currentColor;
                }
            `;
        }

		// Badge styles
		let badgeCSS = '';
		
		if (showBadge) {
			// Badge border styles
			let badgeBorderCSS = '';
			if (badgeBorderStyle && badgeBorderStyle !== 'default' && badgeBorderStyle !== 'none') {
				badgeBorderCSS = `
					border-style: ${badgeBorderStyle};
					border-color: ${badgeBorderColor || '#e0e0e0'};
					${getDimensionCSS(badgeBorderWidth, 'border-width', activeDevice)}
				`;
			} else {
				badgeBorderCSS = 'border-style: none;';
			}
			
			// Badge box shadow
			let badgeBoxShadowCSS = 'box-shadow: none;';
			if (badgeBoxShadow && badgeBoxShadow.enable) {
				const inset = badgeBoxShadow.position === 'inset' ? 'inset ' : '';
				badgeBoxShadowCSS = `box-shadow: ${inset}${badgeBoxShadow.horizontal}px ${badgeBoxShadow.vertical}px ${badgeBoxShadow.blur}px ${badgeBoxShadow.spread}px ${badgeBoxShadow.color};`;
			}
			
			// Badge padding
			const badgePaddingCSS = `${getDimensionCSS(badgePadding, 'padding', activeDevice)}`;
			
			// Badge hover styles
			let badgeHoverCSS = '';
			if (badgeBoxShadowHover && badgeBoxShadowHover.enable) {
				const insetHover = badgeBoxShadowHover.position === 'inset' ? 'inset ' : '';
				badgeHoverCSS += `box-shadow: ${insetHover}${badgeBoxShadowHover.horizontal}px ${badgeBoxShadowHover.vertical}px ${badgeBoxShadowHover.blur}px ${badgeBoxShadowHover.spread}px ${badgeBoxShadowHover.color};`;
			}
			
			if (badgeBackgroundHoverColor) {
				badgeHoverCSS += `background-color: ${badgeBackgroundHoverColor};`;
			}
			
			if (badgeTextHoverColor) {
				badgeHoverCSS += `color: ${badgeTextHoverColor};`;
			}
			
			if (badgeBorderHoverColor) {
				badgeHoverCSS += `border-color: ${badgeBorderHoverColor};`;
			}
			
			badgeCSS = `
				.${id} .digiblocks-icon-box-badge {
					position: absolute;
					top: 8px;
					right: 8px;
					background-color: ${badgeBackgroundColor};
					color: ${badgeTextColor};
					${badgePaddingCSS}
					${badgeBorderCSS}
					${getDimensionCSS(badgeBorderRadius, 'border-radius', activeDevice)}
					${badgeBoxShadowCSS}
					${badgeTypographyCSS}
					transition: all 0.3s ease;
					z-index: 1;
				}
				
				.${id}:hover .digiblocks-icon-box-badge {
					${badgeHoverCSS}
				}
			`;
		}

		// Padding and margin
        const titlePaddingCSS = `${getDimensionCSS(titlePadding, 'padding', activeDevice)}`;
        const titleMarginCSS = `${getDimensionCSS(titleMargin, 'margin', activeDevice, true)}`;
        const contentPaddingCSS = `${getDimensionCSS(contentPadding, 'padding', activeDevice)}`;
        const contentMarginCSS = `${getDimensionCSS(contentMargin, 'margin', activeDevice, true)}`;

        // Position styles
        let positionCSS = '';
        if (position && position !== 'default') {
            positionCSS += `position: ${position} !important;`;
            
            let horizontalValue = horizontalOffset?.[activeDevice]?.value;
            const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || 'px';
            if (horizontalValue === '' || horizontalValue === undefined) {
                if (activeDevice === 'tablet') {
                    horizontalValue = horizontalOffset?.desktop?.value;
                } else if (activeDevice === 'mobile') {
                    horizontalValue = horizontalOffset?.tablet?.value !== '' && horizontalOffset?.tablet?.value !== undefined
                        ? horizontalOffset?.tablet?.value
                        : horizontalOffset?.desktop?.value;
                }
            }
            if (horizontalValue !== '' && horizontalValue !== undefined) {
                if (horizontalOrientation === 'left') {
                    positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
                } else {
                    positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
                }
            }
            
            let verticalValue = verticalOffset?.[activeDevice]?.value;
            const verticalUnit = verticalOffset?.[activeDevice]?.unit || 'px';
            if (verticalValue === '' || verticalValue === undefined) {
                if (activeDevice === 'tablet') {
                    verticalValue = verticalOffset?.desktop?.value;
                } else if (activeDevice === 'mobile') {
                    verticalValue = verticalOffset?.tablet?.value !== '' && verticalOffset?.tablet?.value !== undefined
                        ? verticalOffset?.tablet?.value
                        : verticalOffset?.desktop?.value;
                }
            }
            if (verticalValue !== '' && verticalValue !== undefined) {
                if (verticalOrientation === 'top') {
                    positionCSS += `top: ${verticalValue}${verticalUnit};`;
                } else {
                    positionCSS += `bottom: ${verticalValue}${verticalUnit};`;
                }
            }
        }

        if (zIndex !== '' && zIndex !== undefined && zIndex !== null) {
            positionCSS += `z-index: ${zIndex};`;
        }

		// Transform
		let transformCSS = '';
		const transformValue = getTransformCSS(transform, activeDevice);
		if (transformValue) {
			transformCSS += `transform: ${transformValue};`;
			transformCSS += `transform-origin: ${getTransformOrigin(transform, activeDevice)};`;
		}

		const transformHoverValue = getTransformCSS(transformHover, activeDevice);
		if (transformHoverValue && transformHover && transformHover.transitionDuration !== '' && transformHover.transitionDuration !== undefined && transformHover.transitionDuration !== null) {
			const duration = transformHover.transitionDuration;
			transformCSS += `transition: transform ${duration}ms ease;`;
		}

		let transformHoverCSS = '';
		if (transformHoverValue) {
			transformHoverCSS += `transform: ${transformHoverValue};`;
			transformHoverCSS += `transform-origin: ${getTransformOrigin(transformHover, activeDevice)};`;
		}
        
        // Set base styles for the block
        return `
            /* Main block styles */
            .${id} {
				display: flex;
				position: relative;
				${alignCSS}
				${justifyContentCSS}
                background-color: ${backgroundColor || 'transparent'};
                ${boxShadowCSS}
                ${paddingCSS}
                ${marginCSS}
                ${borderCSS}
                ${borderRadiusCSS}
				${flexDirectionCSS}
				gap: ${getVal(iconContentGap, activeDevice).value || iconContentGap.desktop.value}${getVal(iconContentGap, activeDevice).unit || iconContentGap.desktop.unit};
                transition: all 0.3s ease;
                ${linkEnabled && linkType === 'box' ? linkCSS : ''}
                ${positionCSS}
				${transformCSS}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                ${hoverCSS}
				${transformHoverCSS}
            }
            
            ${hasIcon ? `
				/* Icon styles */
				.${id} .digiblocks-icon-box-icon {
					${iconMarginCSS}
					display: inline-flex;
					align-items: center;
					justify-content: center;
					${iconCSS}
					transition: all 0.3s ease;
				}

				.${id} .digiblocks-icon-box-icon span {
					display: flex;
				}

				.${id} .digiblocks-icon-box-icon svg {
					width: ${getVal(iconSize, activeDevice)?.value || iconSize?.desktop?.value || '48'}${getVal(iconSize, activeDevice)?.unit || iconSize?.desktop?.unit || 'px'};
					height: ${getVal(iconHeight, activeDevice)?.value ? `${getVal(iconHeight, activeDevice).value}${getVal(iconHeight, activeDevice).unit || iconHeight?.desktop?.unit || 'px'}` : '100%'};
					fill: ${iconColor || 'inherit'};
					transition: all 0.3s ease;
				}
				
				/* Icon hover styles */
				.${id}:hover .digiblocks-icon-box-icon {
					${iconHoverCSS}
				}
				
				.${id}:hover .digiblocks-icon-box-icon svg {
					${iconHoverColor ? `fill: ${iconHoverColor};` : ''}
				}
				` : ''}
            
            /* Title styles */
            .${id} .digiblocks-icon-box-title {
                color: ${titleColor || 'inherit'};
				${titlePaddingCSS}
                ${titleMarginCSS}
                ${titleTypographyCSS}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${id}:hover .digiblocks-icon-box-title {
                ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
            }
            
            /* Content styles */
            .${id} .digiblocks-icon-box-content {
                display: flex;
                flex-direction: column;
            }

            .${id} .digiblocks-icon-box-text {
                color: ${textColor || 'inherit'};
                ${contentTypographyCSS}
				${contentPaddingCSS}
                ${contentMarginCSS}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${id}:hover .digiblocks-icon-box-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
            }
            
            /* Button styles */
            ${buttonCSS}

			/* Badge styles */
			${badgeCSS}

			/* Tablet styles */
			@media (max-width: 991px) {
				.${id} {
					${getVal(align, 'tablet') ? `
						${getVal(align, 'tablet') === 'flex-start' ? 'align-items: flex-start; text-align: left;' : ''}
						${getVal(align, 'tablet') === 'center' ? 'align-items: center; text-align: center;' : ''}
						${getVal(align, 'tablet') === 'flex-end' ? 'align-items: flex-end; text-align: right;' : ''}
					` : ''}
					${getVal(iconLayout, 'tablet') === 'above' ? 'flex-direction: column;' : 
					getVal(iconLayout, 'tablet') === 'after' ? 'flex-direction: row-reverse;' : 
					getVal(iconLayout, 'tablet') ? 'flex-direction: row;' : ''}
					gap: ${getVal(iconContentGap, 'tablet').value || getVal(iconContentGap, 'desktop').value}${getVal(iconContentGap, 'tablet').unit || getVal(iconContentGap, 'desktop').unit};
				}
			}

			/* Mobile styles */
			@media (max-width: 767px) {
				.${id} {
					${getVal(align, 'mobile') ? `
						${getVal(align, 'mobile') === 'flex-start' ? 'align-items: flex-start; text-align: left;' : ''}
						${getVal(align, 'mobile') === 'center' ? 'align-items: center; text-align: center;' : ''}
						${getVal(align, 'mobile') === 'flex-end' ? 'align-items: flex-end; text-align: right;' : ''}
					` : ''}
					${getVal(iconLayout, 'mobile') === 'above' ? 'flex-direction: column;' : 
					getVal(iconLayout, 'mobile') === 'after' ? 'flex-direction: row-reverse;' : 
					getVal(iconLayout, 'mobile') ? 'flex-direction: row;' : ''}
					gap: ${getVal(iconContentGap, 'mobile').value || getVal(iconContentGap, 'desktop').value}${getVal(iconContentGap, 'mobile').unit || getVal(iconContentGap, 'desktop').unit};
				}
			}

			/* Visibility Controls */
			${visibility.desktop ? `
				@media (min-width: 992px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}
        `;
    };

	// Change data attr in units
	const getMaxValue = (unit) => {
		switch(unit) {
			case '%': return 100;
			case 'em':
			case 'rem': return 50;
			case 'px':
			default: return 1500;
		}
	};
	
	const getStepValue = (unit) => {
		switch(unit) {
			case '%': return 1;
			case 'em':
			case 'rem': return 0.1;
			case 'px':
			default: return 1;
		}
	};

    // Get FontAwesomeControl from the global object
    const FontAwesomeControl = componentsLoaded ? window.digi.components.FontAwesomeControl : null;

    // Render icon
	const renderIcon = () => {
		// For library icons
		if (iconSource === 'library' && iconValue && iconValue.svg && iconValue.svg.trim() !== '') {
			return (
				<div className="digiblocks-icon-box-icon">
					<span
						dangerouslySetInnerHTML={{
							__html: iconValue.svg,
						}}
					/>
				</div>
			);
		}
		
		// For custom SVG
		if (iconSource === 'custom' && customSvg && customSvg.trim() !== '') {
			return (
				<div className="digiblocks-icon-box-icon">
					<span
						dangerouslySetInnerHTML={{
							__html: customSvg,
						}}
					/>
				</div>
			);
		}
		
		return null;
	};

	// Render badge
	const renderBadge = () => {
		if (!showBadge) {
			return null;
		}
		
		return (
			<span className="digiblocks-icon-box-badge">
				{badgeText || __('Popular', 'digiblocks')}
			</span>
		);
	};
    
    // Render button if needed
    const renderButton = () => {
        if (!linkEnabled || linkType !== 'button') {
            return null;
        }

        let buttonIconElement = null;

        if (buttonIconSource === 'library' && buttonIcon && buttonIcon.svg) {
            buttonIconElement = (
                <span
                    className="digiblocks-button-icon"
                    dangerouslySetInnerHTML={{ __html: buttonIcon.svg }}
                />
            );
        } else if (buttonIconSource === 'custom' && buttonCustomSvg && buttonCustomSvg.trim() !== '') {
            buttonIconElement = (
                <span
                    className="digiblocks-button-icon"
                    dangerouslySetInnerHTML={{ __html: buttonCustomSvg }}
                />
            );
        }

        return (
            <div className="digiblocks-button-wrapper">
                <a
                    className="digiblocks-button"
                    href={linkUrl || '#'}
                    target={linkOpenInNewTab ? "_blank" : "_self"}
                    rel={linkRel}
                    onClick={(e) => e.preventDefault()}
                >
                    {buttonIconPosition === 'before' && buttonIconElement}
                    <RichText
                        tagName="span"
                        value={buttonText}
                        onChange={(value) => setAttributes({ buttonText: value })}
                        placeholder={__('Button Text', 'digiblocks')}
                    />
                    {buttonIconPosition === 'after' && buttonIconElement}
                </a>
            </div>
        );
    };

    // Render icon tab content based on active tab
    const renderIconTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Icon Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: iconBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconBackgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                    
                    {/* Icon Border Controls */}
                    <SelectControl
                        label={__("Border Style", "digiblocks")}
                        value={iconBorderStyle || 'default'}
                        options={borderStyleOptions}
                        onChange={(value) => {
                            // Initialize border width and radius with defaults when a style is first selected
                            if ((value !== 'default' && value !== 'none') && 
                                (iconBorderStyle === 'default' || iconBorderStyle === 'none' || !iconBorderStyle)) {
                                // Set initial border width if not already set
                                if (!iconBorderWidth || Object.keys(iconBorderWidth).length === 0) {
                                    setAttributes({
                                        iconBorderWidth: {
                                            desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                            tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                            mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                        }
                                    });
                                }
                            }
                            
                            setAttributes({
                                iconBorderStyle: value,
                            });
                        }}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    {/* Show border width and border radius controls only if a border style is selected */}
                    {iconBorderStyle && iconBorderStyle !== 'default' && iconBorderStyle !== 'none' && (
                        <>
                            {/* Border Color */}
                            <PanelColorSettings
                                title={__(
                                    "Border Color",
                                    "digiblocks"
                                )}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: iconBorderColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                iconBorderColor: value,
                                            }),
                                        label: __(
                                            "Border Color",
                                            "digiblocks"
                                        ),
                                    },
                                ]}
                            />
                            
                            {/* Border Width */}
                            <DimensionControl
								label={__("Border Width", "digiblocks")}
								value={iconBorderWidth}
								onChange={(value) => setAttributes({ iconBorderWidth: value })}
							/>
                            
                            {/* Border Radius */}
                            <DimensionControl
                                label={__("Border Radius", "digiblocks")}
                                value={iconBorderRadius}
                                onChange={(value) => setAttributes({ iconBorderRadius: value })}
                                units={[
                                    { label: 'px', value: 'px' },
                                    { label: '%', value: '%' }
                                ]}
                            />
                        </>
                    )}
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Icon Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: iconHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconHoverColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: iconHoverBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconHoverBackgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: iconHoverBorderColor,
                                onChange: (value) =>
                                    setAttributes({
                                        iconHoverBorderColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };

    // Render color tab content based on active tab
    const renderColorTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Color Settings",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: titleColor,
                                onChange: (value) =>
                                    setAttributes({
                                        titleColor: value,
                                    }),
                                label: __(
                                    "Title Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: textColor,
                                onChange: (value) =>
                                    setAttributes({
                                        textColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: backgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Hover Color Settings",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: titleHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        titleHoverColor: value,
                                    }),
                                label: __(
                                    "Title Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: textHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        textHoverColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: backgroundHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        backgroundHoverColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: borderHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        borderHoverColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };

    // Render button tab content based on active tab
    const renderButtonTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Button Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: buttonTextColor,
                                onChange: (value) =>
                                    setAttributes({
                                        buttonTextColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: buttonBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        buttonBackgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                    
                    {/* Button Border Controls */}
                    <SelectControl
                        label={__("Border Style", "digiblocks")}
                        value={buttonBorderStyle || 'default'}
                        options={borderStyleOptions}
                        onChange={(value) => {
                            // Initialize border width and radius with defaults when a style is first selected
                            if ((value !== 'default' && value !== 'none') && 
                                (buttonBorderStyle === 'default' || buttonBorderStyle === 'none' || !buttonBorderStyle)) {
                                // Set initial border width if not already set
                                if (!buttonBorderWidth || Object.keys(buttonBorderWidth).length === 0) {
                                    setAttributes({
                                        buttonBorderWidth: {
                                            desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                            tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
                                            mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
                                        }
                                    });
                                }
                            }
                            
                            setAttributes({
                                buttonBorderStyle: value,
                            });
                        }}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    
                    {/* Show border width and border radius controls only if a border style is selected */}
                    {buttonBorderStyle && buttonBorderStyle !== 'default' && buttonBorderStyle !== 'none' && (
                        <>
                            {/* Border Color */}
                            <PanelColorSettings
                                title={__(
                                    "Border Color",
                                    "digiblocks"
                                )}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: buttonBorderColor,
                                        onChange: (value) =>
                                            setAttributes({
                                                buttonBorderColor: value,
                                            }),
                                        label: __(
                                            "Border Color",
                                            "digiblocks"
                                        ),
                                    },
                                ]}
                            />
                            
                            {/* Border Width */}
                            <DimensionControl
								label={__("Border Width", "digiblocks")}
								value={buttonBorderWidth}
								onChange={(value) => setAttributes({ buttonBorderWidth: value })}
							/>
                        </>
                    )}
                    
                    {/* Button Border Radius */}
                    <DimensionControl
                        label={__("Border Radius", "digiblocks")}
                        value={buttonBorderRadius}
                        onChange={(value) => setAttributes({ buttonBorderRadius: value })}
                        units={[
                            { label: 'px', value: 'px' },
                            { label: '%', value: '%' }
                        ]}
                    />
                    
                    {/* Button Padding */}
                    <DimensionControl
						label={__("Padding", "digiblocks")}
						value={buttonPadding}
						onChange={(value) => setAttributes({ buttonPadding: value })}
					/>
                    
                    {/* Button Margin */}
                    <DimensionControl
						label={__("Margin", "digiblocks")}
						value={buttonMargin}
						onChange={(value) => setAttributes({ buttonMargin: value })}
					/>
                    
                    {/* Button Box Shadow */}
					<BoxShadowControl
						normalValue={buttonBoxShadow}
						hoverValue={buttonBoxShadowHover}
						onNormalChange={(value) =>
							setAttributes({
								buttonBoxShadow: value,
							})
						}
						onHoverChange={(value) =>
							setAttributes({
								buttonBoxShadowHover: value,
							})
						}
					/>
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Button Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: buttonTextHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        buttonTextHoverColor: value,
                                    }),
                                label: __(
                                    "Text Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: buttonBackgroundHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        buttonBackgroundHoverColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };

	// Render badge tab content based on active tab
	const renderBadgeTabContent = (tabName) => {
		if (tabName === 'normal') {
			return (
				<>
					<PanelColorSettings
						title={__(
							"Badge Colors",
							"digiblocks"
						)}
						initialOpen={true}
						enableAlpha={true}
						colorSettings={[
							{
								value: badgeTextColor,
								onChange: (value) =>
									setAttributes({
										badgeTextColor: value,
									}),
								label: __(
									"Text Color",
									"digiblocks"
								),
							},
							{
								value: badgeBackgroundColor,
								onChange: (value) =>
									setAttributes({
										badgeBackgroundColor: value,
									}),
								label: __(
									"Background Color",
									"digiblocks"
								),
							},
						]}
					/>
					
					{/* Badge Border Controls */}
					<SelectControl
						label={__("Border Style", "digiblocks")}
						value={badgeBorderStyle || 'none'}
						options={borderStyleOptions}
						onChange={(value) => {
							// Initialize border width when a style is first selected
							if ((value !== 'default' && value !== 'none') && 
								(badgeBorderStyle === 'default' || badgeBorderStyle === 'none' || !badgeBorderStyle)) {
								// Set initial border width if not already set
								if (!badgeBorderWidth || Object.keys(badgeBorderWidth).length === 0) {
									setAttributes({
										badgeBorderWidth: {
											desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
											tablet: { top: '', right: '', bottom: '', left: '', unit: 'px' },
											mobile: { top: '', right: '', bottom: '', left: '', unit: 'px' }
										}
									});
								}
							}
							
							setAttributes({
								badgeBorderStyle: value,
							});
						}}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					
					{/* Show border width controls only if a border style is selected */}
					{badgeBorderStyle && badgeBorderStyle !== 'default' && badgeBorderStyle !== 'none' && (
						<>
							{/* Border Color */}
							<PanelColorSettings
								title={__(
									"Border Color",
									"digiblocks"
								)}
								enableAlpha={true}
								colorSettings={[
									{
										value: badgeBorderColor,
										onChange: (value) =>
											setAttributes({
												badgeBorderColor: value,
											}),
										label: __(
											"Border Color",
											"digiblocks"
										),
									},
								]}
							/>
							
							{/* Border Width */}
							<DimensionControl
								label={__("Border Width", "digiblocks")}
								value={badgeBorderWidth}
								onChange={(value) => setAttributes({ badgeBorderWidth: value })}
							/>
						</>
					)}
					
					{/* Badge Border Radius */}
					<DimensionControl
						label={__("Border Radius", "digiblocks")}
						value={badgeBorderRadius}
						onChange={(value) => setAttributes({ badgeBorderRadius: value })}
						units={[
							{ label: 'px', value: 'px' },
							{ label: '%', value: '%' }
						]}
					/>

					{/* Badge Padding */}
					<DimensionControl
						label={__("Padding", "digiblocks")}
						value={badgePadding}
						onChange={(value) => setAttributes({ badgePadding: value })}
						units={[
							{ label: 'px', value: 'px' },
							{ label: 'rem', value: 'rem' },
							{ label: 'em', value: 'em' },
							{ label: '%', value: '%' }
						]}
					/>
					
					{/* Badge Box Shadow */}
					<BoxShadowControl
						normalValue={badgeBoxShadow}
						hoverValue={badgeBoxShadowHover}
						onNormalChange={(value) =>
							setAttributes({
								badgeBoxShadow: value,
							})
						}
						onHoverChange={(value) =>
							setAttributes({
								badgeBoxShadowHover: value,
							})
						}
					/>
				</>
			);
		} else if (tabName === 'hover') {
			return (
				<>
					<PanelColorSettings
						title={__(
							"Badge Hover Colors",
							"digiblocks"
						)}
						initialOpen={true}
						enableAlpha={true}
						colorSettings={[
							{
								value: badgeTextHoverColor,
								onChange: (value) =>
									setAttributes({
										badgeTextHoverColor: value,
									}),
								label: __(
									"Text Color",
									"digiblocks"
								),
							},
							{
								value: badgeBackgroundHoverColor,
								onChange: (value) =>
									setAttributes({
										badgeBackgroundHoverColor: value,
									}),
								label: __(
									"Background Color",
									"digiblocks"
								),
							},
							{
								value: badgeBorderHoverColor,
								onChange: (value) =>
									setAttributes({
										badgeBorderHoverColor: value,
									}),
								label: __(
									"Border Color",
									"digiblocks"
								),
							},
						]}
					/>
				</>
			);
		}
		
		return null;
	};
    
    // Render typography tab content for the button
    const renderButtonTypographyContent = () => {
        return (
            <TypographyControl
                label={__(
                    "Button Typography",
                    "digiblocks"
                )}
                value={buttonTypography}
                onChange={(value) =>
                    setAttributes({
                        buttonTypography: value,
                    })
                }
            />
        );
    };

	// Render typography tab content for the badge
	const renderBadgeTypographyContent = () => {
		return (
			<TypographyControl
				label={__(
					"Badge Typography",
					"digiblocks"
				)}
				value={badgeTypography}
				onChange={(value) =>
					setAttributes({
						badgeTypography: value,
					})
				}
			/>
		);
	};

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <div className="components-panel__body is-opened">
                            {/* Icon select box display */}
                            <div style={{ marginBottom: '2rem' }}>
								<ToggleGroupControl
									label={__("Icon Source", "digiblocks")}
									value={iconSource || 'library'}
									onChange={(value) => setAttributes({ iconSource: value })}
									isBlock
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								>
									<ToggleGroupControlOption 
										value="library" 
										label={__("Library", "digiblocks")} 
									/>
									<ToggleGroupControlOption 
										value="custom" 
										label={__("Custom", "digiblocks")} 
									/>
								</ToggleGroupControl>

								{/* Show library picker if 'library' is selected */}
								{iconSource === 'library' && (
									<>
										{!componentsLoaded ? (
											<div style={{ textAlign: 'center', padding: '20px 0' }}>
												<Spinner />
												<p>{__('Loading icon selector...', 'digiblocks')}</p>
											</div>
										) : (
											<FontAwesomeControl
												label={__('Select Icon', 'digiblocks')}
												value={iconValue}
												onChange={setIconValue}
											/>
										)}
										
										{iconValue && componentsLoaded && (
											<>
												{/* Show info about selected icon */}
												<div style={{ marginTop: '15px', marginBottom: '15px', padding: '10px', background: '#f0f0f1', borderRadius: '3px' }}>
													<p style={{ margin: '0 0 5px 0' }}>
														<strong>{__('Selected Icon:', 'digiblocks')}</strong> {iconValue.name}
													</p>
													<p style={{ margin: '0 0 5px 0' }}>
														<strong>{__('Style:', 'digiblocks')}</strong> {iconValue.style}
													</p>
													{iconValue.categories && iconValue.categories.length > 0 && (
														<p style={{ margin: '0' }}>
															<strong>{__('Categories:', 'digiblocks')}</strong> {iconValue.categories.join(', ')}
														</p>
													)}
												</div>
											</>
										)}
									</>
								)}

								{/* Show custom SVG textarea if 'custom' is selected */}
								{iconSource === 'custom' && (
									<div style={{ marginTop: '15px' }}>
										<div className="components-base-control">
											<label className="components-base-control__label" htmlFor="custom-svg-input">
												{__('Custom SVG Code', 'digiblocks')}
											</label>
											<textarea
												id="custom-svg-input"
												className="components-textarea-control__input"
												value={customSvg || ''}
												onChange={(e) => {
													const newSvg = e.target.value;
													
													// Create an iconValue object with the custom SVG
													const newIconValue = {
														id: 'custom-svg',
														name: 'Custom SVG',
														svg: newSvg,
														style: 'custom',
														categories: ['custom']
													};
													
													// Update both the customSvg attribute and the iconValue
													setAttributes({ 
														customSvg: newSvg,
														iconValue: newIconValue
													});
												}}
												placeholder={__('Paste your SVG code here...', 'digiblocks')}
												rows={10}
												style={{ width: '100%', marginTop: '8px' }}
											/>
											<p className="components-base-control__help">
												{__('Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.', 'digiblocks')}
											</p>
										</div>
										
										{/* Preview of custom SVG */}
										{customSvg && (
											<div style={{ marginTop: '15px', marginBottom: '15px' }}>
												<p><strong>{__('Preview:', 'digiblocks')}</strong></p>
												<div style={{ padding: '20px', background: '#f0f0f1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
													<div className="digiblocks-custom-svg-preview" style={{ width: '50px', height: '50px' }} dangerouslySetInnerHTML={{ __html: customSvg }}></div>
												</div>
											</div>
										)}
									</div>
								)}
							</div>

							<ResponsiveButtonGroup
								label={__('Align Items', 'digiblocks')}
								value={align}
								onChange={(value) => setAttributes({ align: value })}
								options={[
									{ label: __('Left', 'digiblocks'), value: 'flex-start' },
									{ label: __('Center', 'digiblocks'), value: 'center' },
									{ label: __('Right', 'digiblocks'), value: 'flex-end' },
								]}
							/>

							<ResponsiveButtonGroup
								label={__('Justify Items', 'digiblocks')}
								value={justifyContent}
								onChange={(value) => setAttributes({ justifyContent: value })}
								options={[
									{ label: __('Left', 'digiblocks'), value: 'flex-start' },
									{ label: __('Center', 'digiblocks'), value: 'center' },
									{ label: __('Right', 'digiblocks'), value: 'flex-end' },
								]}
							/>

							<ResponsiveButtonGroup
								label={__('Icon Layout', 'digiblocks')}
								value={iconLayout}
								onChange={(value) => setAttributes({ iconLayout: value })}
								options={[
									{ label: __('Before', 'digiblocks'), value: 'before' },
									{ label: __('Above', 'digiblocks'), value: 'above' },
									{ label: __('After', 'digiblocks'), value: 'after' },
								]}
							/>

							<ResponsiveRangeControl
								label={__("Gap", "digiblocks")}
								value={iconContentGap}
								onChange={(value) => setAttributes({ iconContentGap: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								min={0}
								max={100}
								step={1}
								defaultValues={{
									desktop: { value: 20, unit: 'px' },
									tablet: { value: '', unit: '' },
									mobile: { value: '', unit: '' }
								}}
							/>

							{/* Toggle controls for showing/hiding elements */}
							<ToggleControl
                                label={__("Show Title", "digiblocks")}
                                checked={showTitle}
                                onChange={(value) => setAttributes({ showTitle: value })}
                                __nextHasNoMarginBottom={true}
                            />

							<ToggleControl
                                label={__("Show Description", "digiblocks")}
                                checked={showContent}
                                onChange={(value) => setAttributes({ showContent: value })}
                                __nextHasNoMarginBottom={true}
                            />

							<ToggleControl
								label={__("Show Badge", "digiblocks")}
								checked={showBadge}
								onChange={(value) => setAttributes({ showBadge: value })}
								__nextHasNoMarginBottom={true}
							/>

							{showBadge && (
								<TextControl
									label={__("Badge Text", "digiblocks")}
									value={badgeText}
									onChange={(value) => setAttributes({ badgeText: value })}
									placeholder={__('Popular', 'digiblocks')}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
							)}

                            {/* Link settings */}
                            {!linkEnabled ? (
                                <div className="components-base-control">
                                    <div className="components-base-control__field">
                                        <button
                                            className="components-button width-full is-primary"
                                            onClick={() => setAttributes({ linkEnabled: true })}
                                        >
                                            {__("Add Link", "digiblocks")}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <LinkControl
                                        key="link-control"
                                        value={{
                                            url: linkUrl,
                                            opensInNewTab: linkOpenInNewTab,
                                            rel: linkRel
                                        }}
                                        settings={[
                                            {
                                                id: 'opensInNewTab',
                                                title: __('Open in new tab', 'digiblocks'),
                                            },
                                            {
                                                id: 'rel',
                                                title: __('Add noopener noreferrer', 'digiblocks'),
                                            },
                                        ]}
                                        onChange={(newLink) => {
                                            setAttributes({
                                                linkUrl: newLink.url,
                                                linkOpenInNewTab: newLink.opensInNewTab,
                                                linkRel: newLink.rel
                                            });
                                        }}
                                        onRemove={() => {
                                            setAttributes({
                                                linkEnabled: false,
                                                linkUrl: '',
                                                linkOpenInNewTab: false,
                                                linkRel: ''
                                            });
                                        }}
                                        suggestionsQuery={{
                                            type: 'post',
                                            subtype: 'any',
                                        }}
                                        forceIsEditingLink={!linkUrl}
                                    />
									
									<div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
										<ToggleGroupControl
											label={__("Link Type", "digiblocks")}
											value={linkType}
											onChange={(value) => setAttributes({ linkType: value })}
											isBlock
											__next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
										>
											<ToggleGroupControlOption 
												value="box" 
												label={__("Box", "digiblocks")} 
											/>
											<ToggleGroupControlOption 
												value="button" 
												label={__("Button", "digiblocks")} 
											/>
										</ToggleGroupControl>
									</div>
                                    
                                    {linkType === 'button' && (
                                        <>
                                            <TextControl
                                                label={__("Button Text", "digiblocks")}
                                                value={buttonText}
                                                onChange={(value) => setAttributes({ buttonText: value })}
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            />

                                            <ToggleGroupControl
                                                label={__("Button Icon Source", "digiblocks")}
                                                value={buttonIconSource || 'library'}
                                                onChange={(value) => setAttributes({ buttonIconSource: value })}
                                                isBlock
                                                __next40pxDefaultSize={true}
                                                __nextHasNoMarginBottom={true}
                                            >
                                                <ToggleGroupControlOption
                                                    value="library"
                                                    label={__("Library", "digiblocks")}
                                                />
                                                <ToggleGroupControlOption
                                                    value="custom"
                                                    label={__("Custom", "digiblocks")}
                                                />
                                            </ToggleGroupControl>

                                            {buttonIconSource === 'library' && componentsLoaded && FontAwesomeControl && (
                                                <FontAwesomeControl
                                                    label={__('Button Icon', 'digiblocks')}
                                                    value={buttonIcon}
                                                    onChange={(value) => setAttributes({ buttonIcon: value })}
                                                />
                                            )}

                                            {buttonIconSource === 'custom' && (
                                                <div style={{ marginTop: '15px' }}>
                                                    <div className="components-base-control">
                                                        <label className="components-base-control__label" htmlFor="button-custom-svg-input">
                                                            {__('Custom SVG Code', 'digiblocks')}
                                                        </label>
                                                        <textarea
                                                            id="button-custom-svg-input"
                                                            className="components-textarea-control__input"
                                                            value={buttonCustomSvg || ''}
                                                            onChange={(e) => setAttributes({ buttonCustomSvg: e.target.value })}
                                                            placeholder={__('Paste your SVG code here...', 'digiblocks')}
                                                            rows={10}
                                                            style={{ width: '100%', fontFamily: 'monospace', fontSize: '12px' }}
                                                        />
                                                        <p className="components-base-control__help" style={{ marginTop: '8px', fontSize: '12px' }}>
                                                            {__('Paste your SVG code here. Make sure it only contains valid SVG markup.', 'digiblocks')}
                                                        </p>
                                                    </div>

                                                    {buttonCustomSvg && (
                                                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                                                            <p><strong>{__('Preview:', 'digiblocks')}</strong></p>
                                                            <div style={{ padding: '20px', background: '#f0f0f1', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <div className="digiblocks-custom-svg-preview" style={{ width: '50px', height: '50px' }} dangerouslySetInnerHTML={{ __html: buttonCustomSvg }}></div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {((buttonIconSource === 'library' && buttonIcon) || (buttonIconSource === 'custom' && buttonCustomSvg)) && (
                                                <>
                                                    <ToggleGroupControl
                                                        label={__("Icon Position", "digiblocks")}
                                                        value={buttonIconPosition}
                                                        onChange={(value) => setAttributes({ buttonIconPosition: value })}
                                                        isBlock
                                                        __next40pxDefaultSize={true}
                                                        __nextHasNoMarginBottom={true}
                                                    >
                                                        <ToggleGroupControlOption
                                                            value="before"
                                                            label={__("Before", "digiblocks")}
                                                        />
                                                        <ToggleGroupControlOption
                                                            value="after"
                                                            label={__("After", "digiblocks")}
                                                        />
                                                    </ToggleGroupControl>

                                                    <ResponsiveRangeControl
                                                        label={__("Icon Spacing", "digiblocks")}
                                                        value={buttonIconSpacing}
                                                        onChange={(value) => setAttributes({ buttonIconSpacing: value })}
                                                        min={0}
                                                        max={5}
                                                        step={0.1}
                                                        units={['px', 'em', 'rem']}
                                                        allowReset={true}
                                                    />
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
							tab="style"
							name="colors"
                            title={__("Colors", "digiblocks")}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderColorTabContent(tab.name)}
                            </TabPanel>
                        </TabPanelBody>
                        <TabPanelBody
							tab="style"
							name="typo"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__(
                                    "Title Typography",
                                    "digiblocks"
                                )}
                                value={titleTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        titleTypography: value,
                                    })
                                }
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Content Typography",
                                    "digiblocks"
                                )}
                                value={contentTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        contentTypography: value,
                                    })
                                }
                            />
                            
                            {linkEnabled && linkType === "button" && 
                                renderButtonTypographyContent()
                            }

							{showBadge && 
								renderBadgeTypographyContent()
							}
                        </TabPanelBody>

                        <TabPanelBody 
							tab="style"
							name="padding"
                            title={__("Padding & Margin", "digiblocks")}
                            initialOpen={false}
                        >
							{/* Icon Padding */}
							<DimensionControl
								label={__("Icon Padding", "digiblocks")}
								value={iconPadding}
								onChange={(value) => setAttributes({ iconPadding: value })}
							/>
							
							{/* Icon Margin */}
							<DimensionControl
								label={__("Icon Margin", "digiblocks")}
								value={iconMargin}
								onChange={(value) => setAttributes({ iconMargin: value })}
							/>

							{/* Title Padding */}
							<DimensionControl
								label={__("Title Padding", "digiblocks")}
								value={titlePadding}
								onChange={(value) => setAttributes({ titlePadding: value })}
							/>
							
							{/* Title Margin */}
							<DimensionControl
								label={__("Title Margin", "digiblocks")}
								value={titleMargin}
								onChange={(value) => setAttributes({ titleMargin: value })}
							/>

							{/* Content Padding */}
							<DimensionControl
								label={__("Content Padding", "digiblocks")}
								value={contentPadding}
								onChange={(value) => setAttributes({ contentPadding: value })}
							/>
							
							{/* Content Margin */}
							<DimensionControl
								label={__("Content Margin", "digiblocks")}
								value={contentMargin}
								onChange={(value) => setAttributes({ contentMargin: value })}
							/>
                        </TabPanelBody>

                        <TabPanelBody 
							tab="style"
							name="icon"
                            title={__("Icon", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* Icon Size */}
							<ResponsiveRangeControl
								label={__("Icon Width", "digiblocks")}
								value={iconSize}
								onChange={(value) => setAttributes({ iconSize: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								defaultUnit="px"
								min={0}
								max={getMaxValue(iconSize?.[localActiveDevice]?.unit || 'px')}
								step={getStepValue(iconSize?.[localActiveDevice]?.unit || 'px')}
							/>

							<ResponsiveRangeControl
								label={__("Icon Height", "digiblocks")}
								value={iconHeight}
								onChange={(value) => setAttributes({ iconHeight: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								defaultUnit="px"
								min={0}
								max={getMaxValue(iconHeight?.[localActiveDevice]?.unit)}
								step={getStepValue(iconHeight?.[localActiveDevice]?.unit)}
							/>

                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderIconTabContent(tab.name)}
                            </TabPanel>
                        </TabPanelBody>
                        <TabPanelBody
							tab="style"
							name="box-style"
                            title={__("Box Style", "digiblocks")}
                            initialOpen={false}
                        >                            
                            {/* Border Style Dropdown */}
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius with defaults when a style is first selected
                                    if ((value !== 'default' && value !== 'none') && 
                                        (borderStyle === 'default' || borderStyle === 'none' || !borderStyle)) {
                                        // Set initial border width if not already set
                                        if (!borderWidth || Object.keys(borderWidth).length === 0) {
                                            setAttributes({
                                                borderWidth: {
                                                    desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                                }
                                            });
                                        }
                                    }
                                    
                                    setAttributes({
                                        borderStyle: value,
                                    });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border color and width only if border style is selected */}
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    {/* Border Color */}
                                    <PanelColorSettings
                                        title={__(
                                            "Border Color",
                                            "digiblocks"
                                        )}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) =>
                                                    setAttributes({
                                                        borderColor: value,
                                                    }),
                                                label: __(
                                                    "Border Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                    
                                    {/* Border Width */}
                                    <DimensionControl
                                        label={__("Border Width", "digiblocks")}
                                        value={borderWidth}
                                        onChange={(value) => setAttributes({ borderWidth: value })}
                                    />
                                </>
                            )}
                            
                            {/* Border Radius (always show) */}
                            <DimensionControl
                                label={__("Border Radius", "digiblocks")}
                                value={borderRadius}
                                onChange={(value) => setAttributes({ borderRadius: value })}
                                units={[
                                    { label: 'px', value: 'px' },
                                    { label: '%', value: '%' }
                                ]}
                            />
                            
                            <SelectControl
                                label={__(
                                    "Hover Effect",
                                    "digiblocks"
                                )}
                                value={hoverEffect}
                                options={hoverEffectOptions}
                                onChange={(value) =>
                                    setAttributes({
                                        hoverEffect: value,
                                    })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        {linkEnabled && linkType === "button" && (
                            <TabPanelBody
                                tab="style"
                                name="button"
                                title={__("Button", "digiblocks")}
                                initialOpen={false}
                            >
                                <TabPanel
                                    className="digiblocks-control-tabs"
                                    activeClass="active-tab"
                                    tabs={stateTabList}
                                >
                                    {(tab) => renderButtonTabContent(tab.name)}
                                </TabPanel>
                            </TabPanelBody>
                        )}
						{showBadge && (
							<TabPanelBody
								tab="style"
								name="badge"
								title={__("Badge", "digiblocks")}
								initialOpen={false}
							>
								<TabPanel
									className="digiblocks-control-tabs"
									activeClass="active-tab"
									tabs={stateTabList}
								>
									{(tab) => renderBadgeTabContent(tab.name)}
								</TabPanel>
							</TabPanelBody>
						)}
                        <TabPanelBody
							tab="style"
							name="shadow"
                            title={__("Box Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* Box Shadow Control */}
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) =>
                                    setAttributes({
                                        boxShadow: value,
                                    })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({
                                        boxShadowHover: value,
                                    })
                                }
                            />
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
							tab="advanced"
							name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={true}
                        >
                            <DimensionControl
								label={__("Padding", "digiblocks")}
								value={padding}
								onChange={(value) => setAttributes({ padding: value })}
							/>
							
                            <DimensionControl
								label={__("Margin", "digiblocks")}
								value={margin}
								onChange={(value) => setAttributes({ margin: value })}
							/>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="advanced"
                            name="position"
                            title={__("Position", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Position", "digiblocks")}
                                value={position}
                                options={[
                                    { label: __("Default", "digiblocks"), value: "default" },
                                    { label: __("Relative", "digiblocks"), value: "relative" },
                                    { label: __("Absolute", "digiblocks"), value: "absolute" },
                                    { label: __("Fixed", "digiblocks"), value: "fixed" },
                                ]}
                                onChange={(value) => setAttributes({ position: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {position !== 'default' && (
                                <>
                                    <ToggleGroupControl
                                        label={__("Horizontal Orientation", "digiblocks")}
                                        value={horizontalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ horizontalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="left"
                                            label={__("Left", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="right"
                                            label={__("Right", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={horizontalOffset}
                                        onChange={(value) => setAttributes({ horizontalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(horizontalOffset?.[localActiveDevice]?.unit || 'px')}
                                        step={getStepValue(horizontalOffset?.[localActiveDevice]?.unit || 'px')}
                                    />

                                    <ToggleGroupControl
                                        label={__("Vertical Orientation", "digiblocks")}
                                        value={verticalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ verticalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="top"
                                            label={__("Top", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="bottom"
                                            label={__("Bottom", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={verticalOffset}
                                        onChange={(value) => setAttributes({ verticalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(verticalOffset?.[localActiveDevice]?.unit || 'px')}
                                        step={getStepValue(verticalOffset?.[localActiveDevice]?.unit || 'px')}
                                    />
                                </>
                            )}

                            <RangeControl
                                label={__("Z-Index", "digiblocks")}
                                value={zIndex}
                                onChange={(value) => setAttributes({ zIndex: value })}
                                min={-999}
                                max={9999}
                                allowReset={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="transform"
                            title={__('Transform', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TransformControl
                                normalValue={transform}
                                hoverValue={transformHover}
                                onNormalChange={(value) => setAttributes({ transform: value })}
                                onHoverChange={(value) => setAttributes({ transformHover: value })}
                            />
                        </TabPanelBody>

						<TabPanelBody
							tab="advanced"
							name="animation"
                            title={__('Animation', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__(
                                    "Animation Effect",
                                    "digiblocks"
                                )}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) =>
                                    setAttributes({
                                        animation: value,
                                    })
                                }
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

							{animation && animation !== 'none' && (
								<>
									<SelectControl
										label={__("Animation Duration", "digiblocks")}
										value={animationDuration}
										options={[
											{ label: __("Slow", "digiblocks"), value: "slow" },
											{ label: __("Normal", "digiblocks"), value: "normal" },
											{ label: __("Fast", "digiblocks"), value: "fast" }
										]}
										onChange={(value) => setAttributes({ animationDuration: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
									
									<TextControl
										label={__("Animation Delay (ms)", "digiblocks")}
										value={animationDelay || 0}
										onChange={(value) => setAttributes({ animationDelay: parseInt(value) || 0 })}
										type="number"
										min={0}
										step={100}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</>
							)}
                            
                            {/* Animation Preview Button */}
                            {animation && animation !== 'none' && (
                                <div style={{ marginTop: '10px' }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={handlePreviewClick}
                                        style={{ width: '100%' }}
                                    >
                                        {__("Preview Animation", "digiblocks")}
                                    </Button>
                                </div>
                            )}
                        </TabPanelBody>
						
						<TabPanelBody
							tab="advanced"
							name="visibility"
							title={__('Visibility', 'digiblocks')}
							initialOpen={false}
						>
							<div className="components-base-control__help" style={{ 
								padding: '12px', 
								backgroundColor: '#f0f6fc', 
								border: '1px solid #c3ddfd', 
								borderRadius: '4px',
								marginBottom: '16px'
							}}>
								<strong>{__('Editor Note:', 'digiblocks')}</strong><br />
								{__('Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.', 'digiblocks')}
							</div>
							
							<ToggleControl
								label={__('Hide on Desktop', 'digiblocks')}
								checked={visibility.desktop}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										desktop: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Tablet', 'digiblocks')}
								checked={visibility.tablet}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										tablet: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Mobile', 'digiblocks')}
								checked={visibility.mobile}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										mobile: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
						</TabPanelBody>
						
                        <TabPanelBody
							tab="advanced"
							name="additional"
                            title={__("Additional", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* HTML Anchor field */}
                            <div className="components-base-control html-anchor-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="html-anchor">
                                        {__("HTML anchor", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="html-anchor"
                                        value={anchor || ""}
                                        onChange={(e) =>
                                            setAttributes({ anchor: e.target.value })
                                        }
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="html-anchor-help" className="components-base-control__help">
                                    {__("Enter a word or two — without spaces — to make a unique web address just for this block, called an \"anchor\". Then, you'll be able to link directly to this section of your page.", "digiblocks")}
                                    {' '}
                                    <a 
                                        className="components-external-link" 
                                        href="https://wordpress.org/documentation/article/page-jumps/" 
                                        target="_blank" 
                                        rel="external noreferrer noopener"
                                    >
                                        <span className="components-external-link__contents">
                                            {__("Learn more about anchors", "digiblocks")}
                                        </span>
                                        <span className="components-external-link__icon" aria-label="(opens in a new tab)">↗</span>
                                    </a>
                                </p>
                            </div>

                            {/* Additional CSS classes field */}
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="additional-css-classes">
                                        {__("Additional CSS class(es)", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="additional-css-classes"
                                        value={customClasses || ""}
                                        onChange={(e) =>
                                            setAttributes({ customClasses: e.target.value })
                                        }
                                        aria-describedby="additional-css-classes-help"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="additional-css-classes-help" className="components-base-control__help">
                                    {__("Separate multiple classes with spaces.", "digiblocks")}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
    };

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-icon-box ${id} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    return (
        <>
            <InspectorControls>
                <CustomTabPanel
                    tabs={tabList}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
				{renderBadge()}
                {renderIcon()}
                <div className="digiblocks-icon-box-content">
                    {showTitle && (
						<RichText
							tagName="h3"
							className="digiblocks-icon-box-title"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__("Feature Title", "digiblocks")}
						/>
					)}
					{showContent && (
						<RichText
							tagName="p"
							className="digiblocks-icon-box-text"
							value={content}
							onChange={(value) => setAttributes({ content: value })}
							placeholder={__(
								"Add your feature description here.",
								"digiblocks"
							)}
						/>
					)}
                    {renderButton()}
                </div>
            </div>
        </>
    );
};

export default IconBoxEdit;