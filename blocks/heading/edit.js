/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    LinkControl
} = wp.blockEditor;
const {
    TextControl,
    SelectControl,
    RangeControl,
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    TabPanel,
    BaseControl
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, ResponsiveButtonGroup, ResponsiveRangeControl, DimensionControl, TypographyControl, CustomTabPanel, TabPanelBody, TransformControl } = digi.components;

/**
 * Edit function for the Heading block
 */
const HeadingEdit = ({ attributes, setAttributes, clientId, mergeBlocks, onReplace }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        content,
        headingTag,
        maxWidth,
        textColor,
        textHoverColor,
        backgroundColor,
        backgroundHoverColor,
        typography,
        align,
        padding,
        margin,
        animation,
		animationDuration,
		animationDelay,
        highlightText,
        highlightColor,
        highlightType,
		textEffect,
        displaySeparator,
        separatorColor,
        separatorSecondaryColor,
        separatorWidth,
        separatorHeight,
        separatorBorderRadius,
        separatorPosition,
        separatorStyle,
        separatorSpacing,
        linkEnabled,
        linkUrl,
        linkOpenInNewTab,
        linkRel,
        shadowEnabled,
        textShadow,
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

    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
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

	const handleApplyHighlight = () => {
		if (!highlightText || highlightText.trim() === '' || !content) {
			return;
		}

		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = content;

		const existingHighlights = tempDiv.querySelectorAll('.digiblocks-highlight');
		existingHighlights.forEach((highlight) => {
			const textNode = document.createTextNode(highlight.textContent);
			highlight.parentNode.replaceChild(textNode, highlight);
		});

		tempDiv.normalize();

		const walker = document.createTreeWalker(
			tempDiv,
			NodeFilter.SHOW_TEXT,
			null
		);

		const nodesToProcess = [];
		let currentNode;

		while (currentNode = walker.nextNode()) {
			if (currentNode.nodeValue && currentNode.nodeValue.includes(highlightText)) {
				nodesToProcess.push(currentNode);
			}
		}

		nodesToProcess.forEach((node) => {
			const text = node.nodeValue;
			const index = text.indexOf(highlightText);

			if (index === -1) return;

			const before = text.substring(0, index);
			const match = text.substring(index, index + highlightText.length);
			const after = text.substring(index + highlightText.length);

			const fragment = document.createDocumentFragment();

			if (before) {
				fragment.appendChild(document.createTextNode(before));
			}

			const span = document.createElement('span');
			span.className = 'digiblocks-highlight';
			span.textContent = match;
			fragment.appendChild(span);

			if (after) {
				fragment.appendChild(document.createTextNode(after));
			}

			node.parentNode.replaceChild(fragment, node);
		});

		setAttributes({ content: tempDiv.innerHTML });
	};

    // Heading tags
    const headingTagOptions = [
        { label: __('H1', 'digiblocks'), value: 'h1' },
        { label: __('H2', 'digiblocks'), value: 'h2' },
        { label: __('H3', 'digiblocks'), value: 'h3' },
        { label: __('H4', 'digiblocks'), value: 'h4' },
        { label: __('H5', 'digiblocks'), value: 'h5' },
        { label: __('H6', 'digiblocks'), value: 'h6' },
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
        
        // Typography CSS
        let typographyCSS = '';
        if (typography) {
            if (typography.fontFamily) {
                typographyCSS += `font-family: ${typography.fontFamily};`;
            }

            const fontSizeValue = getVal(typography.fontSize, activeDevice);
            if (fontSizeValue && fontSizeValue.value !== "" && fontSizeValue.value !== null && fontSizeValue.value !== undefined) {
                typographyCSS += `font-size: ${fontSizeValue.value}${fontSizeValue.unit !== null ? fontSizeValue.unit : ''};`;
            }

            if (typography.fontWeight) {
                typographyCSS += `font-weight: ${typography.fontWeight};`;
            }

            if (typography.fontStyle) {
                typographyCSS += `font-style: ${typography.fontStyle};`;
            }

            if (typography.textTransform) {
                typographyCSS += `text-transform: ${typography.textTransform};`;
            }

            if (typography.textDecoration) {
                typographyCSS += `text-decoration: ${typography.textDecoration};`;
            }

            const lineHeightValue = getVal(typography.lineHeight, activeDevice);
            if (lineHeightValue && lineHeightValue.value !== "" && lineHeightValue.value !== null && lineHeightValue.value !== undefined) {
                typographyCSS += `line-height: ${lineHeightValue.value}${lineHeightValue.unit !== null ? lineHeightValue.unit : ''};`;
            }

            const letterSpacingValue = getVal(typography.letterSpacing, activeDevice);
            if (letterSpacingValue && letterSpacingValue.value !== "" && letterSpacingValue.value !== null && letterSpacingValue.value !== undefined) {
                typographyCSS += `letter-spacing: ${letterSpacingValue.value}${letterSpacingValue.unit !== null ? letterSpacingValue.unit : ''};`;
            }
        }
        
        // Text shadow CSS
        let textShadowCSS = '';
        if (shadowEnabled && textShadow) {
            textShadowCSS = `text-shadow: ${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color};`;
        }
        
        // Padding and margin
        const paddingCSS = `${getDimensionCSS(padding, 'padding', activeDevice)}`;
        const marginCSS = `${getDimensionCSS(margin, 'margin', activeDevice, true)}`;
		
		// Content max width CSS
		let maxWidthCSS = '';
		const maxWidthValue = getVal(maxWidth, activeDevice);
		const alignValue = getVal(align, activeDevice);
		if (maxWidthValue && maxWidthValue.value) {
			maxWidthCSS = `max-width: ${maxWidthValue.value}${maxWidthValue.unit !== null ? maxWidthValue.unit : ''};`;
			if (alignValue === 'center') {
				maxWidthCSS += 'margin-left: auto;margin-right: auto;';
			} else if (alignValue === 'right') {
				maxWidthCSS += 'margin-left: auto;';
			}
		}
        
        // Enhanced Separator CSS
        let separatorCSS = '';
        if (displaySeparator && separatorColor) {
            const separatorWidthValue = separatorWidth[activeDevice] || 50;
            const separatorHeightValue = separatorHeight[activeDevice] || 3;
            const separatorSpacingValue = separatorSpacing[activeDevice] || 10;
            
            const position = separatorPosition === 'top' ? 'top: 0;' : 'bottom: 0;';
            const alignment = align === 'center' ? 'left: 50%; transform: translateX(-50%);' :
                              align === 'right' ? 'right: 0;' : 'left: 0;';
            
            // Different CSS for each separator style
            switch (separatorStyle) {
                case 'line-solid':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'line-gradient':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background: linear-gradient(to right, ${separatorColor}, ${separatorSecondaryColor || '#ffffff'}, ${separatorColor});
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'line-double':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                        
                        .${id}::after {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorSecondaryColor || separatorColor};
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue + separatorHeightValue + 3}px;` : `margin-bottom: ${separatorSpacingValue + separatorHeightValue + 3}px;`}
                        }
                    `;
                    break;
                
                case 'line-dashed':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${separatorColor}, 
                                ${separatorColor} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'line-dotted':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${separatorColor}, 
                                ${separatorColor} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'wave':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue * 4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${separatorColor}, 
                                ${separatorColor} 5px, 
                                transparent 5px, 
                                transparent 15px
                            );
                            mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            -webkit-mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'dots':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue * 3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${separatorColor} 25%, 
                                transparent 25%
                            );
                            background-size: ${separatorHeightValue * 3}px ${separatorHeightValue * 3}px;
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'glow':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
                            box-shadow: 0 0 ${separatorHeightValue * 3}px ${separatorHeightValue}px ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                case 'faded':
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background: linear-gradient(to right, transparent, ${separatorColor}, transparent);
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
                    break;
                
                default:
                    separatorCSS = `
                        .${id}::before {
                            content: '';
                            position: absolute;
                            ${position}
                            ${alignment}
                            width: ${separatorWidthValue}px;
                            height: ${separatorHeightValue}px;
                            background-color: ${separatorColor};
							${getDimensionCSS(separatorBorderRadius, 'border-radius', activeDevice)}
                            ${separatorPosition === 'top' ? `margin-top: ${separatorSpacingValue}px;` : `margin-bottom: ${separatorSpacingValue}px;`}
                        }
                    `;
            }
        }
        
        // Highlight styles
        let highlightCSS = '';
        if (highlightText && highlightText.trim() !== '') {
            if (highlightType === 'background') {
                highlightCSS = `
                    .${id} .digiblocks-highlight {
                        background-color: ${highlightColor};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `;
            } else if (highlightType === 'color') {
                highlightCSS = `
                    .${id} .digiblocks-highlight {
                        color: ${highlightColor};
                    }
                `;
            } else if (highlightType === 'underline') {
                highlightCSS = `
                    .${id} .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${highlightColor};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `;
            }
        }

		let effectCSS = '';
		if (textEffect && textEffect !== 'none') {
			effectCSS = `
				.${id} {
					mix-blend-mode: ${textEffect};
				}
			`;
		}
        
        // Link styles
        let linkCSS = '';
        if (linkEnabled) {
            linkCSS = `
                .${id} {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                .${id}:hover {
                    ${textHoverColor ? `color: ${textHoverColor};` : ''}
                    ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
                }
            `;
        }

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
            /* Main heading styles */
            .${id} {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${alignValue};
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                ${paddingCSS}
                ${marginCSS}
                ${positionCSS}
                transition: color 0.3s ease, background-color 0.3s ease;
                ${positionCSS}
				${transformCSS}
            }

            .${id} .digiblocks-heading-text {
                ${typographyCSS}
                margin: 0;
                ${maxWidthCSS}
                ${textShadowCSS}
                color: ${textColor || 'inherit'};
				${transformHoverCSS}
            }
            
            /* Hover effects */
            .${id}:hover {
                ${backgroundHoverColor ? `background-color: ${backgroundHoverColor};` : ''}
            }

            .${id}:hover .digiblocks-heading-text {
                ${textHoverColor ? `color: ${textHoverColor};` : ''}
            }
            
            /* Separator styles */
            ${separatorCSS}
            
            /* Highlight styles */
            ${highlightCSS}
            
            /* Effect */
            ${effectCSS}
            
            /* Link styles */
            ${linkCSS}

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

    // Separator styles preview component
    const SeparatorStylePreview = ({ style, color, secondaryColor, isSelected, onClick }) => {
        const previewStyles = {
            container: {
                display: 'inline-block',
                width: '60px',
                height: '40px',
                margin: '5px',
                padding: '5px',
                border: `1px solid ${isSelected ? '#007cba' : '#ddd'}`,
                backgroundColor: isSelected ? 'rgba(0,124,186,0.1)' : 'white',
                borderRadius: '4px',
                cursor: 'pointer',
                position: 'relative'
            },
            preview: {
                position: 'absolute',
                bottom: '5px',
                left: '5px',
                right: '5px',
                height: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        };

        // Generate preview based on style
        let previewContent = null;
        
        switch (style) {
            case 'line-solid':
                previewContent = <div style={{ width: '100%', height: '3px', backgroundColor: color, borderRadius: '1px' }} />;
                break;
                
            case 'line-gradient':
                previewContent = <div style={{ width: '100%', height: '3px', background: `linear-gradient(to right, ${color}, ${secondaryColor || '#ffffff'}, ${color})`, borderRadius: '1px' }} />;
                break;
                
            case 'line-double':
                previewContent = (
                    <>
                        <div style={{ width: '100%', height: '2px', backgroundColor: color, borderRadius: '1px', marginBottom: '2px' }} />
                        <div style={{ width: '100%', height: '2px', backgroundColor: secondaryColor || color, borderRadius: '1px' }} />
                    </>
                );
                break;
                
            case 'line-dashed':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 6px, transparent 6px, transparent 10px)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'line-dotted':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 2px, transparent 2px, transparent 4px)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'wave':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        backgroundImage: `repeating-linear-gradient(45deg, ${color}, ${color} 2px, transparent 2px, transparent 6px)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'dots':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '5px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} style={{ 
                                width: '4px', 
                                height: '4px', 
                                borderRadius: '50%', 
                                backgroundColor: color 
                            }} />
                        ))}
                    </div>
                );
                break;
                
            case 'glow':
                previewContent = (
                    <div style={{ 
                        width: '50%', 
                        height: '3px', 
                        backgroundColor: color,
                        boxShadow: `0 0 5px 1px ${color}`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            case 'faded':
                previewContent = (
                    <div style={{ 
                        width: '100%', 
                        height: '3px', 
                        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                        borderRadius: '1px'
                    }} />
                );
                break;
                
            default:
                previewContent = <div style={{ width: '100%', height: '3px', backgroundColor: color, borderRadius: '1px' }} />;
        }
        
        return (
            <div style={previewStyles.container} onClick={onClick}>
                <div style={{ textAlign: 'center', fontSize: '8px', marginBottom: '5px' }}>
                    {style.replace('line-', '').charAt(0).toUpperCase() + style.replace('line-', '').slice(1)}
                </div>
                <div style={previewStyles.preview}>
                    {previewContent}
                </div>
            </div>
        );
    };

	// Render separator style grid selector
    const renderSeparatorStyleGrid = () => {
        // Style options
		const separatorStyleOptions = [
			{ label: __('Solid Line', 'digiblocks'), value: 'line-solid' },
			{ label: __('Gradient Line', 'digiblocks'), value: 'line-gradient' },
			{ label: __('Double Line', 'digiblocks'), value: 'line-double' },
			{ label: __('Dashed Line', 'digiblocks'), value: 'line-dashed' },
			{ label: __('Dotted Line', 'digiblocks'), value: 'line-dotted' },
			{ label: __('Wave', 'digiblocks'), value: 'wave' },
			{ label: __('Dot Pattern', 'digiblocks'), value: 'dots' },
			{ label: __('Glow', 'digiblocks'), value: 'glow' },
			{ label: __('Faded Edges', 'digiblocks'), value: 'faded' },
		];

        // Main container style
        const containerStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            justifyContent: 'center',
            margin: '0 -5px',
            maxHeight: '200px',
            overflow: 'auto',
            padding: '4px 0',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            backgroundColor: '#f9f9f9'
        };

        return (
            <div style={containerStyle}>
				{separatorStyleOptions.map((option) => (
					<SeparatorStylePreview
						key={option.value}
						style={option.value}
						color={separatorColor}
						secondaryColor={separatorSecondaryColor}
						isSelected={separatorStyle === option.value}
						onClick={() => setAttributes({ separatorStyle: option.value })}
					/>
				))}
			</div>
        );
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="heading-settings"
                            title={__("Heading Settings", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Heading Tags", "digiblocks")}
                                value={headingTag}
                                options={headingTagOptions}
                                onChange={(value) => setAttributes({ headingTag: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
							
							<ResponsiveButtonGroup
                                label={__('Alignment', 'digiblocks')}
                                value={align}
                                onChange={(value) => setAttributes({ align: value })}
                                options={[
                                    { label: __('Left', 'digiblocks'), value: 'left' },
                                    { label: __('Center', 'digiblocks'), value: 'center' },
                                    { label: __('Right', 'digiblocks'), value: 'right' },
                                ]}
                            />

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
                            )}

							<ResponsiveRangeControl
								label={__("Max Width", "digiblocks")}
								value={maxWidth}
								onChange={(value) => setAttributes({ maxWidth: value })}
								units={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'em', value: 'em' },
									{ label: 'rem', value: 'rem' },
								]}
								defaultUnit="px"
								min={0}
								max={getMaxValue(maxWidth?.[localActiveDevice]?.unit)}
								step={getStepValue(maxWidth?.[localActiveDevice]?.unit)}
							/>
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="separator"
                            title={__("Separator", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Display Separator", "digiblocks")}
                                checked={displaySeparator}
                                onChange={(value) => setAttributes({ displaySeparator: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {displaySeparator && (
                                <>
                                    <BaseControl
                                        label={__("Separator Style", "digiblocks")}
                                        className="digiblocks-separator-style-selector"
										__nextHasNoMarginBottom={true}
                                    >
                                        {renderSeparatorStyleGrid()}
                                    </BaseControl>
                                    
                                    <ToggleGroupControl
                                        label={__("Position", "digiblocks")}
                                        value={separatorPosition}
                                        onChange={(value) => setAttributes({ separatorPosition: value })}
                                        isBlock
                                        __next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption 
                                            value="bottom" 
                                            label={__("Bottom", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption 
                                            value="top" 
                                            label={__("Top", "digiblocks")}
                                        />
                                    </ToggleGroupControl>
                                    
                                    <PanelColorSettings
                                        title={__("Separator Colors", "digiblocks")}
                                        initialOpen={true}
										enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: separatorColor,
                                                onChange: (value) => setAttributes({ separatorColor: value }),
                                                label: __("Primary Color", "digiblocks"),
                                            },
                                            ...(separatorStyle === 'line-gradient' || 
                                               separatorStyle === 'line-double' ? 
                                              [{
                                                  value: separatorSecondaryColor,
                                                  onChange: (value) => setAttributes({ separatorSecondaryColor: value }),
                                                  label: __("Secondary Color", "digiblocks"),
                                              }] : [])
                                        ]}
                                    />
                                    
                                    <ResponsiveControl
                                        label={__("Width", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={separatorWidth[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatorWidth: {
                                                        ...separatorWidth,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={10}
                                            max={300}
                                            step={1}
                                            __nextHasNoMarginBottom={true}
                                            __next40pxDefaultSize={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Height", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={separatorHeight[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatorHeight: {
                                                        ...separatorHeight,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={1}
                                            max={20}
                                            step={1}
                                            __nextHasNoMarginBottom={true}
                                            __next40pxDefaultSize={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    <ResponsiveControl
                                        label={__("Spacing", "digiblocks")}
                                    >
                                        <RangeControl
                                            value={separatorSpacing[localActiveDevice]}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatorSpacing: {
                                                        ...separatorSpacing,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            min={0}
                                            max={50}
                                            step={1}
                                            __nextHasNoMarginBottom={true}
                                            __next40pxDefaultSize={true}
                                        />
                                    </ResponsiveControl>
                                    
                                    {(['line-solid', 'line-gradient', 'line-double', 'line-dashed', 'line-dotted', 'glow', 'faded'].includes(separatorStyle)) && (
                                        <DimensionControl
                                            label={__("Border Radius", "digiblocks")}
                                            value={separatorBorderRadius}
                                            onChange={(value) => setAttributes({ separatorBorderRadius: value })}
                                            units={[
                                                { label: 'px', value: 'px' },
                                                { label: '%', value: '%' }
                                            ]}
                                        />
                                    )}
                                </>
                            )}
                        </TabPanelBody>

                        <TabPanelBody
                            tab="options"
                            name="text-highlight"
                            title={__("Text Highlight", "digiblocks")}
                            initialOpen={false}
                        >
                            <TextControl
								label={__("Text to Highlight", "digiblocks")}
								value={highlightText || ''}
								onChange={(value) => setAttributes({ highlightText: value })}
								placeholder={__("Enter text to highlight", "digiblocks")}
								help={__("The text you enter here will be highlighted in your heading.", "digiblocks")}
								__nextHasNoMarginBottom={true}
							/>

							{highlightText && highlightText.trim() !== '' && (
								<div style={{ marginTop: '10px', marginBottom: '16px' }}>
									<Button
										variant="secondary"
										onClick={handleApplyHighlight}
										style={{ width: '100%' }}
									>
										{__("Apply Highlight", "digiblocks")}
									</Button>
								</div>
							)}

                            {highlightText && highlightText.trim() !== '' && (
                                <>
									<SelectControl
										label={__("Highlight Type", "digiblocks")}
										value={highlightType}
										options={[
											{ label: __("Background", "digiblocks"), value: "background" },
											{ label: __("Text", "digiblocks"), value: "color" },
											{ label: __("Underline", "digiblocks"), value: "underline" },
										]}
										onChange={(value) => setAttributes({ highlightType: value })}
										__nextHasNoMarginBottom={true}
									/>
                                    
                                    <PanelColorSettings
                                        title={__("Highlight Color", "digiblocks")}
                                        initialOpen={true}
                                        colorSettings={[
                                            {
                                                value: highlightColor,
                                                onChange: (value) => setAttributes({ highlightColor: value }),
                                                label: __("Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                </>
                            )}
                        </TabPanelBody>
						
						<TabPanelBody
							tab="options"
							name="effect"
							title={__("Text Effect", "digiblocks")}
							initialOpen={false}
						>
							<SelectControl
								label={__("Blend Mode", "digiblocks")}
								value={textEffect}
								options={[
									{ label: __("None", "digiblocks"), value: "none" },
									{ label: __("Difference", "digiblocks"), value: "difference" },
									{ label: __("Multiply", "digiblocks"), value: "multiply" },
									{ label: __("Screen", "digiblocks"), value: "screen" },
									{ label: __("Overlay", "digiblocks"), value: "overlay" },
									{ label: __("Darken", "digiblocks"), value: "darken" },
									{ label: __("Lighten", "digiblocks"), value: "lighten" },
									{ label: __("Color Dodge", "digiblocks"), value: "color-dodge" },
									{ label: __("Color Burn", "digiblocks"), value: "color-burn" },
									{ label: __("Hard Light", "digiblocks"), value: "hard-light" },
									{ label: __("Soft Light", "digiblocks"), value: "soft-light" },
									{ label: __("Exclusion", "digiblocks"), value: "exclusion" },
									{ label: __("Hue", "digiblocks"), value: "hue" },
									{ label: __("Saturation", "digiblocks"), value: "saturation" },
									{ label: __("Color", "digiblocks"), value: "color" },
									{ label: __("Luminosity", "digiblocks"), value: "luminosity" },
								]}
								onChange={(value) => setAttributes({ textEffect: value })}
								__nextHasNoMarginBottom={true}
							/>
							<p className="components-base-control__help">
								{__("Apply a blend mode effect to the heading text.", "digiblocks")}
							</p>
						</TabPanelBody>
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
                                {(tab) => {
                                    if (tab.name === 'normal') {
                                        return (
                                            <PanelColorSettings
                                                title={__("Color Settings", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: textColor,
                                                        onChange: (value) => setAttributes({ textColor: value }),
                                                        label: __("Text Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundColor,
                                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                                        label: __("Background Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    } else {
                                        return (
                                            <PanelColorSettings
                                                title={__("Hover Color Settings", "digiblocks")}
                                                initialOpen={true}
                                                enableAlpha={true}
                                                colorSettings={[
                                                    {
                                                        value: textHoverColor,
                                                        onChange: (value) => setAttributes({ textHoverColor: value }),
                                                        label: __("Text Hover Color", "digiblocks"),
                                                    },
                                                    {
                                                        value: backgroundHoverColor,
                                                        onChange: (value) => setAttributes({ backgroundHoverColor: value }),
                                                        label: __("Background Hover Color", "digiblocks"),
                                                    },
                                                ]}
                                            />
                                        );
                                    }
                                }}
                            </TabPanel>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="typo"
                            title={__("Typography", "digiblocks")}
                            initialOpen={false}
                        >
                            <TypographyControl
                                label={__("Typography Settings", "digiblocks")}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="text-shadow"
                            title={__("Text Shadow", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Enable Text Shadow", "digiblocks")}
                                checked={shadowEnabled}
                                onChange={(value) => setAttributes({ shadowEnabled: value })}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {shadowEnabled && (
                                <>
                                    <PanelColorSettings
                                        title={__("Shadow Color", "digiblocks")}
                                        initialOpen={true}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: textShadow.color,
                                                onChange: (value) => 
                                                    setAttributes({ 
                                                        textShadow: {
                                                            ...textShadow,
                                                            color: value
                                                        }
                                                    }),
                                                label: __("Color", "digiblocks"),
                                            },
                                        ]}
                                    />
                                    
                                    <RangeControl
                                        label={__("Horizontal Offset", "digiblocks")}
                                        value={textShadow.horizontal}
                                        onChange={(value) => 
                                            setAttributes({ 
                                                textShadow: {
                                                    ...textShadow,
                                                    horizontal: value
                                                }
                                            })
                                        }
                                        min={-20}
                                        max={20}
                                        step={1}
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    />
                                    
                                    <RangeControl
                                        label={__("Vertical Offset", "digiblocks")}
                                        value={textShadow.vertical}
                                        onChange={(value) => 
                                            setAttributes({ 
                                                textShadow: {
                                                    ...textShadow,
                                                    vertical: value
                                                }
                                            })
                                        }
                                        min={-20}
                                        max={20}
                                        step={1}
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    />
                                    
                                    <RangeControl
                                        label={__("Blur Radius", "digiblocks")}
                                        value={textShadow.blur}
                                        onChange={(value) => 
                                            setAttributes({ 
                                                textShadow: {
                                                    ...textShadow,
                                                    blur: value
                                                }
                                            })
                                        }
                                        min={0}
                                        max={20}
                                        step={1}
                                        __nextHasNoMarginBottom={true}
                                        __next40pxDefaultSize={true}
                                    />
                                </>
                            )}
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
                                label={__("Animation Effect", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
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
        className: `digiblocks-heading ${id} ${customClasses || ''}`,
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
                <RichText
                    identifier="content"
                    tagName={headingTag}
                    className="digiblocks-heading-text"
                    value={content}
                    onChange={(value) => setAttributes({ content: value })}
                    onMerge={mergeBlocks}
                    onReplace={onReplace}
                    onRemove={onReplace ? () => onReplace([]) : undefined}
                    placeholder={__("Add Your Heading", "digiblocks")}
                />
            </div>
        </>
    );
};

export default HeadingEdit;