(() => {
  // blocks/forms/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    ToggleControl,
    TextControl,
    Button,
    TextareaControl,
    PanelBody,
    Tooltip,
    Dashicon,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useDispatch, useSelect } = window.wp.data;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var FormsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      formName,
      recipientEmail,
      successMessage,
      errorMessage,
      enableRecaptcha,
      emailSubject,
      useSiteLogo,
      customLogo,
      businessName,
      emailHeader,
      emailFooter,
      businessAddress,
      submitButtonText,
      buttonAlign,
      backgroundColor,
      textColor,
      labelColor,
      buttonBackgroundColor,
      buttonTextColor,
      buttonBackgroundHoverColor,
      buttonTextHoverColor,
      borderStyle,
      borderColor,
      borderWidth,
      borderRadius,
      padding,
      margin,
      typography,
      textTypography,
      buttonTypography,
      boxShadow,
      boxShadowHover,
      inputBorderStyle,
      inputBorderColor,
      inputBorderWidth,
      inputBorderRadius,
      inputPadding,
      inputBackgroundColor,
      inputTextColor,
      inputFocusBorderColor,
      animation,
      fieldGap,
      labelMargin,
      fields
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    const getVal = (obj, device) => {
      if (!obj || typeof obj !== "object")
        return null;
      if (device === "mobile") {
        return obj.mobile !== "" && obj.mobile !== void 0 && obj.mobile !== null ? obj.mobile : obj.tablet !== "" && obj.tablet !== void 0 && obj.tablet !== null ? obj.tablet : obj.desktop;
      }
      if (device === "tablet") {
        return obj.tablet !== "" && obj.tablet !== void 0 && obj.tablet !== null ? obj.tablet : obj.desktop;
      }
      return obj.desktop;
    };
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const [selectedFieldIndex, setSelectedFieldIndex] = useState(-1);
    const { selectBlock } = useDispatch("core/block-editor");
    const selectedBlockId = useSelect(
      (select) => select("core/block-editor").getSelectedBlockClientId()
    );
    useEffect(() => {
      if (selectedBlockId === clientId && selectedFieldIndex === -1 && fields.length > 0) {
        setSelectedFieldIndex(0);
      } else if (selectedBlockId !== clientId) {
        setSelectedFieldIndex(-1);
      }
    }, [selectedBlockId, clientId, fields.length]);
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          animationPreview(id, animation, animations, previewTimeoutRef);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef);
    };
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const fieldTypeOptions = [
      { label: __("Text", "digiblocks"), value: "text" },
      { label: __("Email", "digiblocks"), value: "email" },
      { label: __("Number", "digiblocks"), value: "number" },
      { label: __("Phone", "digiblocks"), value: "tel" },
      { label: __("URL", "digiblocks"), value: "url" },
      { label: __("Date", "digiblocks"), value: "date" },
      { label: __("Textarea", "digiblocks"), value: "textarea" },
      { label: __("Select", "digiblocks"), value: "select" },
      { label: __("Checkbox", "digiblocks"), value: "checkbox" },
      { label: __("Radio", "digiblocks"), value: "radio" },
      { label: __("Hidden", "digiblocks"), value: "hidden" }
    ];
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Double", "digiblocks"), value: "double" },
      { label: __("Groove", "digiblocks"), value: "groove" },
      { label: __("Inset", "digiblocks"), value: "inset" },
      { label: __("Outset", "digiblocks"), value: "outset" },
      { label: __("Ridge", "digiblocks"), value: "ridge" }
    ];
    const tabList = [
      {
        name: "options",
        title: __("Options", "digiblocks"),
        icon: tabIcons.optionsIcon
      },
      {
        name: "fields",
        title: __("Fields", "digiblocks"),
        icon: tabIcons.fieldIcon
      },
      {
        name: "style",
        title: __("Style", "digiblocks"),
        icon: tabIcons.styleIcon
      },
      {
        name: "advanced",
        title: __("Advanced", "digiblocks"),
        icon: tabIcons.advancedIcon
      }
    ];
    const addField = (type = "text") => {
      const newId = `field-${Date.now()}`;
      const newField = {
        id: newId,
        type,
        label: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
        placeholder: `Enter value`,
        required: false,
        width: 100,
        options: type === "select" || type === "radio" ? [
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" }
        ] : []
      };
      const newFields = [...fields, newField];
      setAttributes({ fields: newFields });
      setSelectedFieldIndex(newFields.length - 1);
    };
    const removeField = (index) => {
      const newFields = [...fields];
      newFields.splice(index, 1);
      setAttributes({ fields: newFields });
      if (selectedFieldIndex === index) {
        setSelectedFieldIndex(-1);
      } else if (selectedFieldIndex > index) {
        setSelectedFieldIndex(selectedFieldIndex - 1);
      }
    };
    const duplicateField = (index) => {
      const field = fields[index];
      const newField = {
        ...field,
        id: `field-${Date.now()}`
      };
      const newFields = [...fields];
      newFields.splice(index + 1, 0, newField);
      setAttributes({ fields: newFields });
      setSelectedFieldIndex(index + 1);
    };
    const updateField = (index, property, value) => {
      const newFields = [...fields];
      newFields[index] = {
        ...newFields[index],
        [property]: value
      };
      setAttributes({ fields: newFields });
    };
    const updateFieldOption = (fieldIndex, optionIndex, property, value) => {
      const newFields = [...fields];
      if (!newFields[fieldIndex].options) {
        newFields[fieldIndex].options = [];
      }
      newFields[fieldIndex].options[optionIndex] = {
        ...newFields[fieldIndex].options[optionIndex],
        [property]: value
      };
      setAttributes({ fields: newFields });
    };
    const addFieldOption = (fieldIndex) => {
      const newFields = [...fields];
      if (!newFields[fieldIndex].options) {
        newFields[fieldIndex].options = [];
      }
      const optionIndex = newFields[fieldIndex].options.length;
      newFields[fieldIndex].options.push({
        label: `Option ${optionIndex + 1}`,
        value: `option${optionIndex + 1}`
      });
      setAttributes({ fields: newFields });
    };
    const removeFieldOption = (fieldIndex, optionIndex) => {
      const newFields = [...fields];
      newFields[fieldIndex].options.splice(optionIndex, 1);
      setAttributes({ fields: newFields });
    };
    const moveFieldUp = (index) => {
      if (index <= 0)
        return;
      const newFields = [...fields];
      const temp = newFields[index];
      newFields[index] = newFields[index - 1];
      newFields[index - 1] = temp;
      setAttributes({ fields: newFields });
      if (selectedFieldIndex === index) {
        setSelectedFieldIndex(index - 1);
      } else if (selectedFieldIndex === index - 1) {
        setSelectedFieldIndex(index);
      }
    };
    const moveFieldDown = (index) => {
      if (index >= fields.length - 1)
        return;
      const newFields = [...fields];
      const temp = newFields[index];
      newFields[index] = newFields[index + 1];
      newFields[index + 1] = temp;
      setAttributes({ fields: newFields });
      if (selectedFieldIndex === index) {
        setSelectedFieldIndex(index + 1);
      } else if (selectedFieldIndex === index + 1) {
        setSelectedFieldIndex(index);
      }
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      let animationCSS = "";
      if (animation && animation !== "none" && animations[animation]) {
        animationCSS = animations[animation].keyframes;
      }
      let borderCSS = "";
      if (borderStyle && borderStyle !== "none") {
        borderCSS = `
				border-style: ${borderStyle};
				border-color: ${borderColor};
				${getDimensionCSS(borderWidth, "border-width", activeDevice)}
				${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
            `;
      } else {
        borderCSS = "border: none;";
      }
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      const paddingCSS = `${getDimensionCSS(padding, "padding", activeDevice)}`;
      const marginCSS = `${getDimensionCSS(margin, "margin", activeDevice)}`;
      const inputPaddingCSS = `${getDimensionCSS(inputPadding, "padding", activeDevice)}`;
      const inputBorderRadiusCSS = `${getDimensionCSS(inputBorderRadius, "border-radius", activeDevice)}`;
      let mainTypographyCSS = "";
      if (typography) {
        if (typography.fontFamily) {
          mainTypographyCSS += `font-family: ${typography.fontFamily};`;
        }
        const fontSize = getVal(typography.fontSize, activeDevice);
        if (fontSize) {
          typographyCSS += `font-size: ${fontSize}${typography.fontSizeUnit || "px"};`;
        }
        if (typography.fontWeight) {
          mainTypographyCSS += `font-weight: ${typography.fontWeight};`;
        }
        if (typography.fontStyle) {
          mainTypographyCSS += `font-style: ${typography.fontStyle};`;
        }
        if (typography.textTransform) {
          mainTypographyCSS += `text-transform: ${typography.textTransform};`;
        }
        const lineHeight = getVal(typography.lineHeight, activeDevice);
        if (lineHeight) {
          typographyCSS += `line-height: ${lineHeight}${typography.lineHeightUnit || "em"};`;
        }
        const letterSpacing = getVal(typography.letterSpacing, activeDevice);
        if (letterSpacing || letterSpacing === 0) {
          typographyCSS += `letter-spacing: ${letterSpacing}${typography.letterSpacingUnit || "px"};`;
        }
      }
      let textTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        const textFontSize = getVal(textTypography.fontSize, activeDevice);
        if (textFontSize) {
          textTypographyCSS += `font-size: ${textFontSize}${textTypography.fontSizeUnit || "px"};`;
        }
        if (textTypography.fontWeight) {
          textTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
        }
        if (textTypography.fontStyle) {
          textTypographyCSS += `font-style: ${textTypography.fontStyle};`;
        }
        if (textTypography.textTransform) {
          textTypographyCSS += `text-transform: ${textTypography.textTransform};`;
        }
        const textLineHeight = getVal(textTypography.lineHeight, activeDevice);
        if (textLineHeight) {
          textTypographyCSS += `line-height: ${textLineHeight}${textTypography.lineHeightUnit || "em"};`;
        }
        const textLetterSpacing = getVal(textTypography.letterSpacing, activeDevice);
        if (textLetterSpacing || textLetterSpacing === 0) {
          textTypographyCSS += `letter-spacing: ${textLetterSpacing}${textTypography.letterSpacingUnit || "px"};`;
        }
      }
      let buttonTypographyCSS = "";
      if (buttonTypography) {
        if (buttonTypography.fontFamily) {
          buttonTypographyCSS += `font-family: ${buttonTypography.fontFamily};`;
        }
        const buttonFontSize = getVal(buttonTypography.fontSize, activeDevice);
        if (buttonFontSize) {
          buttonTypographyCSS += `font-size: ${buttonFontSize}${buttonTypography.fontSizeUnit || "px"};`;
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
        const buttonLineHeight = getVal(buttonTypography.lineHeight, activeDevice);
        if (buttonLineHeight) {
          buttonTypographyCSS += `line-height: ${buttonLineHeight}${buttonTypography.lineHeightUnit || "em"};`;
        }
        const buttonLetterSpacing = getVal(buttonTypography.letterSpacing, activeDevice);
        if (buttonLetterSpacing || buttonLetterSpacing === 0) {
          buttonTypographyCSS += `letter-spacing: ${buttonLetterSpacing}${buttonTypography.letterSpacingUnit || "px"};`;
        }
      }
      const buttonAlignCSS = buttonAlign === "full" ? "width: 100%;" : `text-align: ${buttonAlign};`;
      const currentFieldGap = fieldGap ? getVal(fieldGap, activeDevice) : 20;
      const currentLabelMargin = labelMargin ? getVal(labelMargin, activeDevice) : 8;
      let animationKeyframes = "";
      if (animation && animation !== "none" && animations[animation]) {
        animationKeyframes = animations[animation].keyframes;
      }
      return `
            /* Forms Block - ${id} */
            .${id} {
                ${paddingCSS}
                ${marginCSS}
                ${boxShadowCSS}
                ${borderCSS}
                background-color: ${backgroundColor};
                color: ${textColor};
                width: 100%;
                transition: all 0.3s ease;
                ${mainTypographyCSS}
            }
            
            /* Form container */
            .${id} .digiblocks-form {
                width: 100%;
                position: relative;
            }
            
            /* Form fields */
            .${id} .digiblocks-form-fields {
                display: flex;
                flex-wrap: wrap;
                gap: ${currentFieldGap}px;
                margin-bottom: ${currentFieldGap}px;
            }
            
            /* Form field */
            .${id} .digiblocks-form-field {
                margin-bottom: 0;
                transition: all 0.3s ease;
                position: relative;
            }
            
            /* Form field label */
            .${id} .digiblocks-form-field-label {
                display: block;
                margin-bottom: ${currentLabelMargin}px;
                color: ${labelColor};
                ${textTypographyCSS}
            }
            
            /* Required indicator */
            .${id} .digiblocks-form-field-required {
                color: #e53e3e;
                margin-left: 4px;
            }
            
            /* Form inputs */
            .${id} .digiblocks-form-input,
            .${id} .digiblocks-form-textarea,
            .${id} .digiblocks-form-select {
                width: 100%;
                ${inputPaddingCSS}
                ${inputBorderRadiusCSS}
				border-style: ${inputBorderStyle};
				border-color: ${inputBorderColor};
				${getDimensionCSS(inputBorderWidth, "border-width", activeDevice)}
                background-color: ${inputBackgroundColor};
                color: ${inputTextColor};
                transition: all 0.3s ease;
                ${mainTypographyCSS}
            }
            
            .${id} .digiblocks-form-textarea {
                min-height: 150px;
                resize: vertical;
            }
            
            /* Focus styles */
            .${id} .digiblocks-form-input:focus,
            .${id} .digiblocks-form-textarea:focus,
            .${id} .digiblocks-form-select:focus {
                outline: none;
                border-color: ${inputFocusBorderColor};
            }
            
            /* Checkbox and radio styles */
            .${id} .digiblocks-form-checkbox-label,
            .${id} .digiblocks-form-radio-label {
                display: flex;
                align-items: center;
				gap: 8px;
                cursor: pointer;
                margin-bottom: 8px;
            }
            
            .${id} .digiblocks-form-checkbox-label span,
            .${id} .digiblocks-form-radio-label span {
                flex: 1;
            }
            
            /* Submit button container */
            .${id} .digiblocks-form-submit {
                ${buttonAlignCSS}
                margin-top: ${currentFieldGap}px;
            }
            
            /* Submit button */
            .${id} .digiblocks-form-submit-button {
                background-color: ${buttonBackgroundColor};
                color: ${buttonTextColor};
                border: none;
                ${inputBorderRadiusCSS}
                padding: 12px 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                ${buttonTypographyCSS}
                ${buttonAlign === "full" ? "width: 100%;" : ""}
            }
            
            /* Submit button hover */
            .${id} .digiblocks-form-submit-button:hover {
                background-color: ${buttonBackgroundHoverColor};
                color: ${buttonTextHoverColor};
            }
            
            /* Success message */
            .${id} .digiblocks-form-success {
                color: #38a169;
                padding: 10px;
                margin-top: 20px;
                border-radius: 4px;
                background-color: #f0fff4;
                border: 1px solid #c6f6d5;
                display: none;
            }
            
            /* Error message */
            .${id} .digiblocks-form-error {
                color: #e53e3e;
                padding: 10px;
                margin-top: 20px;
                border-radius: 4px;
                background-color: #fff5f5;
                border: 1px solid #fed7d7;
                display: none;
            }
            
            /* Field error message */
            .${id} .digiblocks-form-field-error {
                color: #e53e3e;
                font-size: 12px;
                margin-top: 4px;
                display: none;
            }
            
            /* Editor specific styles */
            .${id} .digiblocks-form-field.is-selected {
                outline: 2px dashed #4a6cf7;
            }
            
            .${id} .digiblocks-field-actions {
                position: absolute;
                right: 5px;
                top: 5px;
                display: flex;
                gap: 5px;
                z-index: 10;
            }
            
            .${id} .digiblocks-field-action-button {
                padding: 2px !important;
                min-width: auto !important;
                width: 24px !important;
                height: 24px !important;
            }
            
            .${id} .digiblocks-field-width-100 {
                width: 100%;
            }
            
            .${id} .digiblocks-field-width-75 {
				width: calc(75% - (${currentFieldGap}px * 0.25));
			}
			
			.${id} .digiblocks-field-width-66 {
				width: calc(66.66% - (${currentFieldGap}px * 0.33));
			}
			
			.${id} .digiblocks-field-width-50 {
				width: calc(50% - (${currentFieldGap}px * 0.5));
			}
			
			.${id} .digiblocks-field-width-33 {
				width: calc(33.33% - (${currentFieldGap}px * 0.67));
			}
			
			.${id} .digiblocks-field-width-25 {
				width: calc(25% - (${currentFieldGap}px * 0.75));
			}
            
            .${id} .digiblocks-form-fields-empty {
                padding: 20px;
                border: 2px dashed #ddd;
                text-align: center;
                border-radius: 4px;
            }
            
            /* Animation keyframes */
            ${animationKeyframes}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                .${id} .digiblocks-field-width-25,
                .${id} .digiblocks-field-width-33,
                .${id} .digiblocks-field-width-50,
                .${id} .digiblocks-field-width-66,
                .${id} .digiblocks-field-width-75 {
                    width: 100%;
                }
            }

            /* Animation keyframes */
            ${animationCSS}

			/* Editor field selection */
			.digi-field-select {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 12px;
				margin-bottom: 16px;
				width: 100%;
			}

			.digi-field-select button {
				font-size: .7rem;
				padding: 12px 8px;
				border-radius: 6px;
				border: 1px solid #e2e8f0;
				background-color: #f8fafc;
				color: #334155;
				transition: all 0.3s ease;
				font-weight: 500;
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: .5rem;
				height: 60px;
			}

			.digi-field-select button:hover:not(:disabled,[aria-disabled=true]) {
				background-color: #4a6cf7;
				color: white;
				transform: translateY(-2px);
				box-shadow: 0 4px 6px rgba(74, 108, 247, 0.2);
			}

			.digi-field-select button:not(:disabled,[aria-disabled=true]):active {
				transform: translateY(0);
				box-shadow: 0 1px 3px rgba(74, 108, 247, 0.2);
			}

			.block-editor-block-inspector .digiblocks-field-option .components-base-control {
				margin: 0;
			}

			/* Make the last button (Hidden) take up the full width */
			.digi-field-select button:last-child {
				grid-column: 1 / -1; /* Span all columns */
				margin-top: 4px;
				background-color: #f1f5f9;
			}

			.digi-field-select button svg {
				display: flex;
				width: 1.4rem;
				height: 1.4rem;
			}

			/* Visibility Controls */
			${visibility.desktop ? `
				@media (min-width: 992px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}
        `;
    };
    const renderFieldActions = (index) => {
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-field-actions" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-field-action-button",
          onClick: (e) => {
            e.stopPropagation();
            moveFieldUp(index);
          },
          icon: "arrow-up-alt2",
          disabled: index === 0,
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-field-action-button",
          onClick: (e) => {
            e.stopPropagation();
            moveFieldDown(index);
          },
          icon: "arrow-down-alt2",
          disabled: index === fields.length - 1,
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-field-action-button",
          onClick: (e) => {
            e.stopPropagation();
            duplicateField(index);
          },
          icon: "admin-page",
          isSmall: true
        }
      )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: "digiblocks-field-action-button",
          onClick: (e) => {
            e.stopPropagation();
            removeField(index);
          },
          icon: "trash",
          isDestructive: true,
          isSmall: true
        }
      )));
    };
    const renderFieldSettings = (fieldIndex) => {
      if (fieldIndex < 0 || fieldIndex >= fields.length) {
        return null;
      }
      const field = fields[fieldIndex];
      return /* @__PURE__ */ wp.element.createElement(
        PanelBody,
        {
          title: __("Field Settings", "digiblocks"),
          initialOpen: true
        },
        /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("Field Label", "digiblocks"),
            value: field.label || "",
            onChange: (value) => updateField(fieldIndex, "label", value),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          SelectControl,
          {
            label: __("Field Type", "digiblocks"),
            value: field.type,
            options: fieldTypeOptions,
            onChange: (value) => {
              if ((value === "select" || value === "radio") && (!field.options || field.options.length === 0)) {
                updateField(fieldIndex, "options", [
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" }
                ]);
              }
              updateField(fieldIndex, "type", value);
            },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        field.type !== "hidden" && field.type !== "checkbox" && field.type !== "radio" && /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("Placeholder", "digiblocks"),
            value: field.placeholder || "",
            onChange: (value) => updateField(fieldIndex, "placeholder", value),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        field.type === "hidden" && /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("Value", "digiblocks"),
            value: field.value || "",
            onChange: (value) => updateField(fieldIndex, "value", value),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          ToggleControl,
          {
            label: __("Required Field", "digiblocks"),
            checked: field.required || false,
            onChange: (value) => updateField(fieldIndex, "required", value),
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          ToggleGroupControl,
          {
            label: __("Field Width (%)", "digiblocks"),
            value: field.width?.toString() || "100",
            onChange: (value) => updateField(fieldIndex, "width", parseInt(value)),
            isBlock: true,
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          },
          /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControlOption,
            {
              value: "100",
              label: __("100", "digiblocks")
            }
          ),
          /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControlOption,
            {
              value: "75",
              label: __("75", "digiblocks")
            }
          ),
          /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControlOption,
            {
              value: "66",
              label: __("66", "digiblocks")
            }
          ),
          /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControlOption,
            {
              value: "50",
              label: __("50", "digiblocks")
            }
          ),
          /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControlOption,
            {
              value: "33",
              label: __("33", "digiblocks")
            }
          ),
          /* @__PURE__ */ wp.element.createElement(
            ToggleGroupControlOption,
            {
              value: "25",
              label: __("25", "digiblocks")
            }
          )
        ),
        (field.type === "select" || field.type === "radio") && field.options && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-field-options" }, /* @__PURE__ */ wp.element.createElement("p", { className: "components-base-control__label" }, __("Options", "digiblocks")), field.options.map((option, optionIndex) => /* @__PURE__ */ wp.element.createElement("div", { key: optionIndex, className: "digiblocks-field-option" }, /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", alignItems: "center", marginBottom: "15px" } }, /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("Label", "digiblocks"),
            value: option.label || "",
            onChange: (value) => updateFieldOption(fieldIndex, optionIndex, "label", value),
            style: { flexGrow: 1, marginRight: "8px" },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("Value", "digiblocks"),
            value: option.value || "",
            onChange: (value) => updateFieldOption(fieldIndex, optionIndex, "value", value),
            style: { flexGrow: 1, marginRight: "8px" },
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove Option", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            isDestructive: true,
            isSmall: true,
            icon: "trash",
            onClick: () => removeFieldOption(fieldIndex, optionIndex),
            style: { alignSelf: "flex-end", marginBottom: "8px" }
          }
        ))))), /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            isSecondary: true,
            onClick: () => addFieldOption(fieldIndex),
            style: { marginTop: "8px", width: "100%" }
          },
          __("Add Option", "digiblocks")
        ))
      );
    };
    const renderFormField = (field, index) => {
      const isSelected = selectedFieldIndex === index;
      const baseClassName = `digiblocks-form-field digiblocks-field-width-${field.width || "100"} ${isSelected ? "is-selected" : ""}`;
      const commonInputProps = {
        readOnly: true,
        tabIndex: -1,
        // Make not focusable
        style: { pointerEvents: "none" }
        // Prevent interaction
      };
      const SelectableWrapper = ({ children }) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          className: baseClassName,
          onClick: () => setSelectedFieldIndex(index)
        },
        isSelected && renderFieldActions(index),
        children
      );
      switch (field.type) {
        case "text":
        case "email":
        case "number":
        case "tel":
        case "url":
        case "date":
          return /* @__PURE__ */ wp.element.createElement(SelectableWrapper, { key: field.id, index }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label" }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), /* @__PURE__ */ wp.element.createElement(
            "input",
            {
              type: field.type,
              className: "digiblocks-form-input",
              placeholder: field.placeholder || "",
              ...commonInputProps
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "textarea":
          return /* @__PURE__ */ wp.element.createElement(SelectableWrapper, { key: field.id, index }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label" }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), /* @__PURE__ */ wp.element.createElement(
            "textarea",
            {
              className: "digiblocks-form-textarea",
              placeholder: field.placeholder || "",
              ...commonInputProps
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "select":
          return /* @__PURE__ */ wp.element.createElement(SelectableWrapper, { key: field.id, index }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label" }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), /* @__PURE__ */ wp.element.createElement(
            "select",
            {
              className: "digiblocks-form-select",
              ...commonInputProps
            },
            /* @__PURE__ */ wp.element.createElement("option", { value: "" }, field.placeholder || __("Select an option", "digiblocks")),
            field.options && field.options.map((option, optionIndex) => /* @__PURE__ */ wp.element.createElement("option", { key: optionIndex, value: option.value }, option.label))
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "checkbox":
          return /* @__PURE__ */ wp.element.createElement(SelectableWrapper, { key: field.id, index }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-checkbox-label" }, /* @__PURE__ */ wp.element.createElement(
            "input",
            {
              type: "checkbox",
              className: "digiblocks-form-checkbox",
              ...commonInputProps
            }
          ), /* @__PURE__ */ wp.element.createElement("span", null, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*"))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "radio":
          return /* @__PURE__ */ wp.element.createElement(SelectableWrapper, { key: field.id, index }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label" }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), field.options && field.options.map((option, optionIndex) => /* @__PURE__ */ wp.element.createElement("label", { key: optionIndex, className: "digiblocks-form-radio-label" }, /* @__PURE__ */ wp.element.createElement(
            "input",
            {
              type: "radio",
              className: "digiblocks-form-radio",
              name: `radio-${field.id}`,
              value: option.value,
              ...commonInputProps
            }
          ), /* @__PURE__ */ wp.element.createElement("span", null, option.label))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "hidden":
          return /* @__PURE__ */ wp.element.createElement(SelectableWrapper, { key: field.id, index }, /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "10px", background: "#f7f7f7", borderRadius: "4px" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ wp.element.createElement(Dashicon, { icon: "hidden", style: { marginRight: "8px" } }), /* @__PURE__ */ wp.element.createElement("span", null, /* @__PURE__ */ wp.element.createElement("strong", null, __("Hidden Field:", "digiblocks")), " ", field.label, /* @__PURE__ */ wp.element.createElement("br", null), /* @__PURE__ */ wp.element.createElement("small", { style: { opacity: 0.7 } }, __("Value:", "digiblocks"), " ", field.value || __("Not set", "digiblocks"))))));
        default:
          return null;
      }
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "form-settings",
              title: __("Form Settings", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Form Name", "digiblocks"),
                value: formName,
                onChange: (value) => setAttributes({ formName: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Recipient Email", "digiblocks"),
                value: recipientEmail,
                onChange: (value) => setAttributes({ recipientEmail: value }),
                help: __("Leave empty to use the admin email", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Button Text", "digiblocks"),
                value: submitButtonText,
                onChange: (value) => setAttributes({ submitButtonText: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Button Alignment", "digiblocks"),
                value: buttonAlign,
                onChange: (value) => setAttributes({ buttonAlign: value }),
                isBlock: true,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "left",
                  label: __("Left", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "center",
                  label: __("Center", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "right",
                  label: __("Right", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "full",
                  label: __("Full", "digiblocks")
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "messages",
              title: __("Messages", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TextareaControl,
              {
                label: __("Success Message", "digiblocks"),
                value: successMessage,
                onChange: (value) => setAttributes({ successMessage: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextareaControl,
              {
                label: __("Error Message", "digiblocks"),
                value: errorMessage,
                onChange: (value) => setAttributes({ errorMessage: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "security",
              title: __("Security", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Enable reCAPTCHA", "digiblocks"),
                checked: enableRecaptcha,
                onChange: (value) => setAttributes({ enableRecaptcha: value }),
                help: __("Enable Google reCAPTCHA to protect your form from spam.", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "email-settings",
              title: __("Email Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Email Subject", "digiblocks"),
                value: emailSubject,
                onChange: (value) => setAttributes({ emailSubject: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Use Site Logo", "digiblocks"),
                checked: useSiteLogo,
                onChange: (value) => setAttributes({ useSiteLogo: value }),
                help: __("Display the site logo in email header", "digiblocks"),
                __nextHasNoMarginBottom: true
              }
            ),
            !useSiteLogo && /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label" }, __("Custom Logo", "digiblocks")), /* @__PURE__ */ wp.element.createElement("div", { className: "editor-post-featured-image" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
              MediaUpload,
              {
                onSelect: (media) => {
                  setAttributes({
                    customLogo: media.url
                  });
                },
                allowedTypes: ["image"],
                value: customLogo,
                render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, !customLogo ? /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    onClick: open,
                    variant: "secondary",
                    className: "editor-post-featured-image__toggle"
                  },
                  __("Upload Logo", "digiblocks")
                ) : /* @__PURE__ */ wp.element.createElement("div", null, /* @__PURE__ */ wp.element.createElement(
                  "img",
                  {
                    src: customLogo,
                    alt: __("Logo", "digiblocks"),
                    style: {
                      maxWidth: "100%",
                      maxHeight: "100px",
                      marginBottom: "8px",
                      display: "block"
                    }
                  }
                ), /* @__PURE__ */ wp.element.createElement("div", { className: "components-button-group", style: { display: "flex" } }, /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    onClick: open,
                    variant: "secondary",
                    isSmall: true
                  },
                  __("Replace", "digiblocks")
                ), /* @__PURE__ */ wp.element.createElement(
                  Button,
                  {
                    onClick: () => setAttributes({ customLogo: "" }),
                    variant: "secondary",
                    isDestructive: true,
                    isSmall: true,
                    style: { marginLeft: "8px" }
                  },
                  __("Remove", "digiblocks")
                ))))
              }
            )))),
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Business Name", "digiblocks"),
                value: businessName,
                onChange: (value) => setAttributes({ businessName: value }),
                help: __("Leave empty to use the site name", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextareaControl,
              {
                label: __("Email Header Text", "digiblocks"),
                value: emailHeader,
                onChange: (value) => setAttributes({ emailHeader: value }),
                help: __("Optional text to display above the form data", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextareaControl,
              {
                label: __("Email Footer Text", "digiblocks"),
                value: emailFooter,
                onChange: (value) => setAttributes({ emailFooter: value }),
                help: __("Optional text for the email footer (e.g., business address)", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TextareaControl,
              {
                label: __("Business Address", "digiblocks"),
                value: businessAddress,
                onChange: (value) => setAttributes({ businessAddress: value }),
                help: __("Business address to display in email footer", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ));
        case "fields":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "fields",
              name: "field-types",
              title: __("Add Fields", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "digi-field-select" }, /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("text") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M64 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 80C0 53.5 21.5 32 48 32l176 0 176 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L256 96l0 320 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-320L64 96z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Text", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("email") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Email", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("number") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Number", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("tel") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Phone", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("date") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Date", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("textarea") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Textarea", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("select") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Select", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("checkbox") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Checkbox", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("radio") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Radio", "digiblocks"))), /* @__PURE__ */ wp.element.createElement(Button, { onClick: () => addField("hidden") }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" })), /* @__PURE__ */ wp.element.createElement("span", null, __("Hidden", "digiblocks")))),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Field Gap", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: fieldGap[localActiveDevice],
                  onChange: (value) => setAttributes({
                    fieldGap: {
                      ...fieldGap,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 50,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Label Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: labelMargin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    labelMargin: {
                      ...labelMargin,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 30,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), selectedFieldIndex >= 0 && renderFieldSettings(selectedFieldIndex));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "colors",
              title: __("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Form Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: backgroundColor,
                    onChange: (value) => setAttributes({ backgroundColor: value }),
                    label: __("Background Color", "digiblocks")
                  },
                  {
                    value: textColor,
                    onChange: (value) => setAttributes({ textColor: value }),
                    label: __("Text Color", "digiblocks")
                  },
                  {
                    value: labelColor,
                    onChange: (value) => setAttributes({ labelColor: value }),
                    label: __("Label Color", "digiblocks")
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Input Colors", "digiblocks"),
                initialOpen: false,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: inputBackgroundColor,
                    onChange: (value) => setAttributes({ inputBackgroundColor: value }),
                    label: __("Input Background", "digiblocks")
                  },
                  {
                    value: inputTextColor,
                    onChange: (value) => setAttributes({ inputTextColor: value }),
                    label: __("Input Text", "digiblocks")
                  },
                  {
                    value: inputBorderColor,
                    onChange: (value) => setAttributes({ inputBorderColor: value }),
                    label: __("Input Border", "digiblocks")
                  },
                  {
                    value: inputFocusBorderColor,
                    onChange: (value) => setAttributes({ inputFocusBorderColor: value }),
                    label: __("Input Focus Border", "digiblocks")
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Button Colors", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: buttonBackgroundColor,
                    onChange: (value) => setAttributes({ buttonBackgroundColor: value }),
                    label: __("Background Color", "digiblocks")
                  },
                  {
                    value: buttonTextColor,
                    onChange: (value) => setAttributes({ buttonTextColor: value }),
                    label: __("Text Color", "digiblocks")
                  },
                  {
                    value: buttonBackgroundHoverColor,
                    onChange: (value) => setAttributes({ buttonBackgroundHoverColor: value }),
                    label: __("Hover Background Color", "digiblocks")
                  },
                  {
                    value: buttonTextHoverColor,
                    onChange: (value) => setAttributes({ buttonTextHoverColor: value }),
                    label: __("Hover Text Color", "digiblocks")
                  }
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "typography",
              title: __("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Form Typography", "digiblocks"),
                value: typography,
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Label Typography", "digiblocks"),
                value: textTypography,
                onChange: (value) => setAttributes({ textTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Button Typography", "digiblocks"),
                value: buttonTypography,
                onChange: (value) => setAttributes({ buttonTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "form-border",
              title: __("Form Border", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: borderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ borderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: borderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "rem", value: "rem" },
                    { label: "em", value: "em" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Border Color", "digiblocks"),
                initialOpen: true,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: borderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    borderRadius: {
                      ...borderRadius,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            )),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "input-style",
              title: __("Input Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Input Border Style", "digiblocks"),
                value: inputBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ inputBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            inputBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Input Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: inputBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    inputBorderWidth: {
                      ...inputBorderWidth,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "rem", value: "rem" },
                    { label: "em", value: "em" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Input Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: inputBorderRadius && inputBorderRadius[localActiveDevice] ? inputBorderRadius[localActiveDevice] : {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    inputBorderRadius: {
                      ...inputBorderRadius,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            )),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Input Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: inputPadding && inputPadding[localActiveDevice] ? inputPadding[localActiveDevice] : {
                    top: 12,
                    right: 15,
                    bottom: 12,
                    left: 15,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    inputPadding: {
                      ...inputPadding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "spacing",
              title: __("Spacing", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: padding && padding[localActiveDevice] ? padding[localActiveDevice] : {
                    top: 30,
                    right: 30,
                    bottom: 30,
                    left: 30,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    padding: {
                      ...padding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: margin && margin[localActiveDevice] ? margin[localActiveDevice] : {
                    top: 0,
                    right: 0,
                    bottom: 30,
                    left: 0,
                    unit: "px"
                  },
                  onChange: (value) => setAttributes({
                    margin: {
                      ...margin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "animation",
              title: __("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: handlePreviewClick,
                style: { width: "100%" }
              },
              __("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "visibility",
              title: __("Visibility", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__help", style: {
              padding: "12px",
              backgroundColor: "#f0f6fc",
              border: "1px solid #c3ddfd",
              borderRadius: "4px",
              marginBottom: "16px"
            } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("Editor Note:", "digiblocks")), /* @__PURE__ */ wp.element.createElement("br", null), __("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Desktop", "digiblocks"),
                checked: visibility.desktop,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    desktop: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Tablet", "digiblocks"),
                checked: visibility.tablet,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    tablet: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Mobile", "digiblocks"),
                checked: visibility.mobile,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    mobile: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "additional",
              title: __("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "html-anchor",
                value: anchor || "",
                onChange: (e) => setAttributes({ anchor: e.target.value }),
                "aria-describedby": "html-anchor-help",
                autoCapitalize: "none",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "additional-css-classes",
                value: customClasses || "",
                onChange: (e) => setAttributes({ customClasses: e.target.value }),
                "aria-describedby": "additional-css-classes-help",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps({
      className: `digiblocks-forms ${id} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab,
        customClass: "four"
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-fields" }, fields && fields.length > 0 ? fields.map((field, index) => renderFormField(field, index)) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-fields-empty" }, __('No fields added yet. Click the "Fields" tab to add form fields.', "digiblocks"))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-submit", style: { textAlign: buttonAlign === "full" ? "center" : buttonAlign } }, /* @__PURE__ */ wp.element.createElement("button", { className: "digiblocks-form-submit-button" }, submitButtonText)), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-messages" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-success" }, successMessage), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-error" }, errorMessage)))));
  };
  var edit_default = FormsEdit;

  // blocks/forms/save.js
  var { useBlockProps: useBlockProps2 } = window.wp.blockEditor;
  var FormsSave = ({ attributes }) => {
    const {
      id,
      anchor,
      customClasses,
      animation,
      successMessage,
      errorMessage,
      submitButtonText,
      buttonAlign,
      fields
    } = attributes;
    const blockClass = `digiblocks-forms ${id} ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`;
    const blockProps = useBlockProps2.save({
      className: blockClass,
      id: anchor || null
    });
    const renderFormField = (field, index) => {
      const fieldWidthClass = `digiblocks-field-width-${field.width || "100"}`;
      switch (field.type) {
        case "text":
        case "email":
        case "number":
        case "tel":
        case "url":
        case "date":
          return /* @__PURE__ */ wp.element.createElement("div", { key: field.id, className: `digiblocks-form-field ${fieldWidthClass}`, "data-field-id": field.id, "data-field-type": field.type }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label", htmlFor: `${id}-${field.id}` }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), /* @__PURE__ */ wp.element.createElement(
            "input",
            {
              type: field.type,
              id: `${id}-${field.id}`,
              name: field.id,
              className: "digiblocks-form-input",
              placeholder: field.placeholder || "",
              required: field.required
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "textarea":
          return /* @__PURE__ */ wp.element.createElement("div", { key: field.id, className: `digiblocks-form-field ${fieldWidthClass}`, "data-field-id": field.id, "data-field-type": field.type }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label", htmlFor: `${id}-${field.id}` }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), /* @__PURE__ */ wp.element.createElement(
            "textarea",
            {
              id: `${id}-${field.id}`,
              name: field.id,
              className: "digiblocks-form-textarea",
              placeholder: field.placeholder || "",
              required: field.required
            }
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "select":
          return /* @__PURE__ */ wp.element.createElement("div", { key: field.id, className: `digiblocks-form-field ${fieldWidthClass}`, "data-field-id": field.id, "data-field-type": field.type }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label", htmlFor: `${id}-${field.id}` }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), /* @__PURE__ */ wp.element.createElement(
            "select",
            {
              id: `${id}-${field.id}`,
              name: field.id,
              className: "digiblocks-form-select",
              required: field.required
            },
            /* @__PURE__ */ wp.element.createElement("option", { value: "" }, field.placeholder || "Select an option"),
            field.options && field.options.map((option, optionIndex) => /* @__PURE__ */ wp.element.createElement("option", { key: optionIndex, value: option.value }, option.label))
          ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "checkbox":
          return /* @__PURE__ */ wp.element.createElement("div", { key: field.id, className: `digiblocks-form-field ${fieldWidthClass}`, "data-field-id": field.id, "data-field-type": field.type }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-checkbox-label" }, /* @__PURE__ */ wp.element.createElement(
            "input",
            {
              type: "checkbox",
              id: `${id}-${field.id}`,
              name: field.id,
              className: "digiblocks-form-checkbox",
              value: "1",
              required: field.required
            }
          ), /* @__PURE__ */ wp.element.createElement("span", null, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*"))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "radio":
          return /* @__PURE__ */ wp.element.createElement("div", { key: field.id, className: `digiblocks-form-field ${fieldWidthClass}`, "data-field-id": field.id, "data-field-type": field.type }, /* @__PURE__ */ wp.element.createElement("label", { className: "digiblocks-form-field-label" }, field.label, field.required && /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-form-field-required" }, "*")), field.options && field.options.map((option, optionIndex) => /* @__PURE__ */ wp.element.createElement("label", { key: optionIndex, className: "digiblocks-form-radio-label" }, /* @__PURE__ */ wp.element.createElement(
            "input",
            {
              type: "radio",
              id: `${id}-${field.id}-${optionIndex}`,
              name: field.id,
              className: "digiblocks-form-radio",
              value: option.value,
              required: field.required && optionIndex === 0
            }
          ), /* @__PURE__ */ wp.element.createElement("span", null, option.label))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-field-error" }));
        case "hidden":
          return /* @__PURE__ */ wp.element.createElement(
            "input",
            {
              key: field.id,
              type: "hidden",
              id: `${id}-${field.id}`,
              name: field.id,
              value: field.value || "",
              "data-field-id": field.id,
              "data-field-type": field.type
            }
          );
        default:
          return null;
      }
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement(
      "form",
      {
        className: "digiblocks-form",
        id: `${id}-form`,
        "data-form-id": id,
        onSubmit: "return false;"
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-fields" }, fields && fields.map((field, index) => renderFormField(field, index))),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-submit", style: { textAlign: buttonAlign === "full" ? "center" : buttonAlign } }, /* @__PURE__ */ wp.element.createElement(
        "button",
        {
          type: "submit",
          className: "digiblocks-form-submit-button",
          style: buttonAlign === "full" ? { width: "100%" } : {}
        },
        submitButtonText
      )),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-messages" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-success" }, successMessage), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-form-error" }, errorMessage))
    ));
  };
  var save_default = FormsSave;

  // blocks/forms/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/forms", {
    apiVersion: 2,
    title: digiBlocksData.blocks["forms"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["forms"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["forms"].description,
    keywords: [__2("form", "digiblocks"), __2("contact", "digiblocks"), __2("input", "digiblocks"), __2("email", "digiblocks"), __2("field", "digiblocks")],
    supports: {
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string",
        default: ""
      },
      anchor: {
        type: "string"
      },
      visibility: {
        type: "object",
        default: {
          desktop: false,
          tablet: false,
          mobile: false
        }
      },
      customClasses: {
        type: "string"
      },
      formName: {
        type: "string",
        default: __2("Contact Form", "digiblocks")
      },
      recipientEmail: {
        type: "string",
        default: ""
      },
      emailSubject: {
        type: "string",
        default: __2("New form submission", "digiblocks")
      },
      successMessage: {
        type: "string",
        default: __2("Thank you for your submission!", "digiblocks")
      },
      errorMessage: {
        type: "string",
        default: __2("There was an error submitting the form. Please try again.", "digiblocks")
      },
      enableRecaptcha: {
        type: "boolean",
        default: false
      },
      useSiteLogo: {
        type: "boolean",
        default: true
      },
      customLogo: {
        type: "string",
        default: ""
      },
      emailHeader: {
        type: "string",
        default: ""
      },
      emailFooter: {
        type: "string",
        default: ""
      },
      businessName: {
        type: "string",
        default: ""
      },
      businessAddress: {
        type: "string",
        default: ""
      },
      submitButtonText: {
        type: "string",
        default: __2("Submit", "digiblocks")
      },
      buttonAlign: {
        type: "string",
        default: "left"
      },
      backgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      textColor: {
        type: "string",
        default: ""
      },
      labelColor: {
        type: "string",
        default: ""
      },
      buttonBackgroundColor: {
        type: "string",
        default: "#4a6cf7"
      },
      buttonTextColor: {
        type: "string",
        default: "#ffffff"
      },
      buttonBackgroundHoverColor: {
        type: "string",
        default: "#3a5ce5"
      },
      buttonTextHoverColor: {
        type: "string",
        default: "#ffffff"
      },
      borderStyle: {
        type: "string",
        default: "solid"
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      padding: {
        type: "object",
        default: {
          desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      margin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      typography: {
        type: "object",
        default: {}
      },
      textTypography: {
        type: "object",
        default: {}
      },
      buttonTypography: {
        type: "object",
        default: {}
      },
      boxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.1)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      boxShadowHover: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      inputBorderStyle: {
        type: "string",
        default: "solid"
      },
      inputBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      inputBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      inputBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 4, right: 4, bottom: 4, left: 4, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      inputPadding: {
        type: "object",
        default: {
          desktop: { top: 12, right: 15, bottom: 12, left: 15, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      inputBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      inputTextColor: {
        type: "string",
        default: ""
      },
      inputFocusBorderColor: {
        type: "string",
        default: "#4a6cf7"
      },
      animation: {
        type: "string",
        default: "none"
      },
      fieldGap: {
        type: "object",
        default: {
          desktop: 20,
          tablet: "",
          mobile: ""
        }
      },
      labelMargin: {
        type: "object",
        default: {
          desktop: 8,
          tablet: "",
          mobile: ""
        }
      },
      fields: {
        type: "array",
        default: [
          {
            id: "name",
            type: "text",
            label: __2("Name", "digiblocks"),
            placeholder: __2("Enter your name", "digiblocks"),
            required: true,
            width: 100
          },
          {
            id: "email",
            type: "email",
            label: __2("Email", "digiblocks"),
            placeholder: __2("Enter your email", "digiblocks"),
            required: true,
            width: 100
          },
          {
            id: "message",
            type: "textarea",
            label: __2("Message", "digiblocks"),
            placeholder: __2("Enter your message", "digiblocks"),
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
            id: "name",
            type: "text",
            label: __2("Name", "digiblocks"),
            placeholder: __2("Enter your name", "digiblocks"),
            required: true,
            width: 100
          },
          {
            id: "email",
            type: "email",
            label: __2("Email", "digiblocks"),
            placeholder: __2("Enter your email", "digiblocks"),
            required: true,
            width: 100
          },
          {
            id: "message",
            type: "textarea",
            label: __2("Message", "digiblocks"),
            placeholder: __2("Enter your message", "digiblocks"),
            required: true,
            width: 100
          }
        ],
        formName: __2("Contact Form", "digiblocks"),
        backgroundColor: "#ffffff",
        textColor: "#333333",
        labelColor: "#333333",
        borderStyle: "solid",
        borderColor: "#e0e0e0",
        buttonBackgroundColor: "#4a6cf7",
        buttonTextColor: "#ffffff",
        submitButtonText: __2("Submit", "digiblocks"),
        viewportWidth: 450
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
