(()=>{var{__:o}=window.wp.i18n,{useBlockProps:fo,InspectorControls:ko,PanelColorSettings:ce,MediaUpload:ho,MediaUploadCheck:vo}=window.wp.blockEditor,{SelectControl:pe,RangeControl:Ge,ToggleControl:Y,TextControl:S,Button:c,TextareaControl:te,PanelBody:xo,Tooltip:ae,Dashicon:yo,__experimentalToggleGroupControl:Ve,__experimentalToggleGroupControlOption:N}=window.wp.components,{useState:ye,useEffect:Ce,useRef:Co}=window.wp.element,{useDispatch:wo,useSelect:$o}=window.wp.data,{useBlockId:So,getDimensionCSS:W,animations:G,animationPreview:je}=digi.utils,{tabIcons:be}=digi.icons,{ResponsiveControl:H,DimensionControl:V,TypographyControl:we,BoxShadowControl:No,CustomTabPanel:_o,TabPanelBody:k}=digi.components,Bo=({attributes:K,setAttributes:l,clientId:P})=>{let{id:a,anchor:J,visibility:h,customClasses:se,formName:ge,recipientEmail:Q,successMessage:X,errorMessage:ne,enableRecaptcha:ue,emailSubject:me,useSiteLogo:t,customLogo:j,businessName:R,emailHeader:O,emailFooter:E,businessAddress:Ke,submitButtonText:$e,buttonAlign:I,backgroundColor:Se,textColor:Ne,labelColor:_e,buttonBackgroundColor:Be,buttonTextColor:Te,buttonBackgroundHoverColor:Fe,buttonTextHoverColor:He,borderStyle:Z,borderColor:Me,borderWidth:fe,borderRadius:ke,padding:A,margin:ee,typography:g,textTypography:u,buttonTypography:m,boxShadow:_,boxShadowHover:B,inputBorderStyle:he,inputBorderColor:ze,inputBorderWidth:ve,inputBorderRadius:oe,inputPadding:ie,inputBackgroundColor:Le,inputTextColor:De,inputFocusBorderColor:qe,animation:f,fieldGap:re,labelMargin:de,fields:p}=K;So(a,P,l);let v=(e,i)=>!e||typeof e!="object"?null:i==="mobile"?e.mobile!==""&&e.mobile!==void 0&&e.mobile!==null?e.mobile:e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop:i==="tablet"&&e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop,[r,Je]=ye(window.digi.responsiveState.activeDevice),[Pe,Qe]=ye(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(P);if(e)return e}return"options"}),[x,y]=ye(-1),{selectBlock:Mo}=wo("core/block-editor"),xe=$o(e=>e("core/block-editor").getSelectedBlockClientId());Ce(()=>{xe===P&&x===-1&&p.length>0?y(0):xe!==P&&y(-1)},[xe,P,p.length]),Ce(()=>window.digi.responsiveState.subscribe(i=>{Je(i)}),[]);let Re=Co(null);Ce(()=>{if(f&&f!=="none"){let e=setTimeout(()=>{je(a,f,G,Re)},100);return()=>clearTimeout(e)}},[f]);let Xe=()=>{je(a,f,G,Re)},Ze=[{label:o("None","digiblocks"),value:"none"},...Object.keys(G).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()),value:e}))],Ae=[{label:o("Text","digiblocks"),value:"text"},{label:o("Email","digiblocks"),value:"email"},{label:o("Number","digiblocks"),value:"number"},{label:o("Phone","digiblocks"),value:"tel"},{label:o("URL","digiblocks"),value:"url"},{label:o("Date","digiblocks"),value:"date"},{label:o("Textarea","digiblocks"),value:"textarea"},{label:o("Select","digiblocks"),value:"select"},{label:o("Checkbox","digiblocks"),value:"checkbox"},{label:o("Radio","digiblocks"),value:"radio"},{label:o("Hidden","digiblocks"),value:"hidden"}],Oe=[{label:o("None","digiblocks"),value:"none"},{label:o("Solid","digiblocks"),value:"solid"},{label:o("Dotted","digiblocks"),value:"dotted"},{label:o("Dashed","digiblocks"),value:"dashed"},{label:o("Double","digiblocks"),value:"double"},{label:o("Groove","digiblocks"),value:"groove"},{label:o("Inset","digiblocks"),value:"inset"},{label:o("Outset","digiblocks"),value:"outset"},{label:o("Ridge","digiblocks"),value:"ridge"}],eo=[{name:"options",title:o("Options","digiblocks"),icon:be.optionsIcon},{name:"fields",title:o("Fields","digiblocks"),icon:be.fieldIcon},{name:"style",title:o("Style","digiblocks"),icon:be.styleIcon},{name:"advanced",title:o("Advanced","digiblocks"),icon:be.advancedIcon}],w=(e="text")=>{let s={id:`field-${Date.now()}`,type:e,label:`New ${e.charAt(0).toUpperCase()+e.slice(1)} Field`,placeholder:"Enter value",required:!1,width:100,options:e==="select"||e==="radio"?[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]:[]},d=[...p,s];l({fields:d}),y(d.length-1)},oo=e=>{let i=[...p];i.splice(e,1),l({fields:i}),x===e?y(-1):x>e&&y(x-1)},io=e=>{let s={...p[e],id:`field-${Date.now()}`},d=[...p];d.splice(e+1,0,s),l({fields:d}),y(e+1)},U=(e,i,s)=>{let d=[...p];d[e]={...d[e],[i]:s},l({fields:d})},Ee=(e,i,s,d)=>{let b=[...p];b[e].options||(b[e].options=[]),b[e].options[i]={...b[e].options[i],[s]:d},l({fields:b})},lo=e=>{let i=[...p];i[e].options||(i[e].options=[]);let s=i[e].options.length;i[e].options.push({label:`Option ${s+1}`,value:`option${s+1}`}),l({fields:i})},to=(e,i)=>{let s=[...p];s[e].options.splice(i,1),l({fields:s})},ao=e=>{if(e<=0)return;let i=[...p],s=i[e];i[e]=i[e-1],i[e-1]=s,l({fields:i}),x===e?y(e-1):x===e-1&&y(e)},so=e=>{if(e>=p.length-1)return;let i=[...p],s=i[e];i[e]=i[e+1],i[e+1]=s,l({fields:i}),x===e?y(e+1):x===e+1&&y(e)},no=()=>{let e=r,i="";f&&f!=="none"&&G[f]&&(i=G[f].keyframes);let s="";Z&&Z!=="none"?s=`
				border-style: ${Z};
				border-color: ${Me};
				${W(fe,"border-width",e)}
				${W(ke,"border-radius",e)}
            `:s="border: none;";let d="box-shadow: none;";_&&_.enable&&(d=`box-shadow: ${_.position==="inset"?"inset ":""}${_.horizontal}px ${_.vertical}px ${_.blur}px ${_.spread}px ${_.color};`);let b="";B&&B.enable&&(b=`box-shadow: ${B.position==="inset"?"inset ":""}${B.horizontal}px ${B.vertical}px ${B.blur}px ${B.spread}px ${B.color};`);let M=`${W(A,"padding",e)}`,T=`${W(ee,"margin",e)}`,le=`${W(ie,"padding",e)}`,Ue=`${W(oe,"border-radius",e)}`,F="";if(g){g.fontFamily&&(F+=`font-family: ${g.fontFamily};`);let $=v(g.fontSize,e);$&&(F+=`font-size: ${$}${g.fontSizeUnit||"px"};`),g.fontWeight&&(F+=`font-weight: ${g.fontWeight};`),g.fontStyle&&(F+=`font-style: ${g.fontStyle};`),g.textTransform&&(F+=`text-transform: ${g.textTransform};`);let q=v(g.lineHeight,e);q&&(F+=`line-height: ${q}${g.lineHeightUnit||"em"};`);let C=v(g.letterSpacing,e);(C||C===0)&&(F+=`letter-spacing: ${C}${g.letterSpacingUnit||"px"};`)}let z="";if(u){u.fontFamily&&(z+=`font-family: ${u.fontFamily};`);let $=v(u.fontSize,e);$&&(z+=`font-size: ${$}${u.fontSizeUnit||"px"};`),u.fontWeight&&(z+=`font-weight: ${u.fontWeight};`),u.fontStyle&&(z+=`font-style: ${u.fontStyle};`),u.textTransform&&(z+=`text-transform: ${u.textTransform};`);let q=v(u.lineHeight,e);q&&(z+=`line-height: ${q}${u.lineHeightUnit||"em"};`);let C=v(u.letterSpacing,e);(C||C===0)&&(z+=`letter-spacing: ${C}${u.letterSpacingUnit||"px"};`)}let L="";if(m){m.fontFamily&&(L+=`font-family: ${m.fontFamily};`);let $=v(m.fontSize,e);$&&(L+=`font-size: ${$}${m.fontSizeUnit||"px"};`),m.fontWeight&&(L+=`font-weight: ${m.fontWeight};`),m.fontStyle&&(L+=`font-style: ${m.fontStyle};`),m.textTransform&&(L+=`text-transform: ${m.textTransform};`);let q=v(m.lineHeight,e);q&&(L+=`line-height: ${q}${m.lineHeightUnit||"em"};`);let C=v(m.letterSpacing,e);(C||C===0)&&(L+=`letter-spacing: ${C}${m.letterSpacingUnit||"px"};`)}let uo=I==="full"?"width: 100%;":`text-align: ${I};`,D=re?v(re,e):20,mo=de?v(de,e):8,We="";return f&&f!=="none"&&G[f]&&(We=G[f].keyframes),`
            /* Forms Block - ${a} */
            .${a} {
                ${M}
                ${T}
                ${d}
                ${s}
                background-color: ${Se};
                color: ${Ne};
                width: 100%;
                transition: all 0.3s ease;
                ${F}
            }
            
            /* Form container */
            .${a} .digiblocks-form {
                width: 100%;
                position: relative;
            }
            
            /* Form fields */
            .${a} .digiblocks-form-fields {
                display: flex;
                flex-wrap: wrap;
                gap: ${D}px;
                margin-bottom: ${D}px;
            }
            
            /* Form field */
            .${a} .digiblocks-form-field {
                margin-bottom: 0;
                transition: all 0.3s ease;
                position: relative;
            }
            
            /* Form field label */
            .${a} .digiblocks-form-field-label {
                display: block;
                margin-bottom: ${mo}px;
                color: ${_e};
                ${z}
            }
            
            /* Required indicator */
            .${a} .digiblocks-form-field-required {
                color: #e53e3e;
                margin-left: 4px;
            }
            
            /* Form inputs */
            .${a} .digiblocks-form-input,
            .${a} .digiblocks-form-textarea,
            .${a} .digiblocks-form-select {
                width: 100%;
                ${le}
                ${Ue}
				border-style: ${he};
				border-color: ${ze};
				${W(ve,"border-width",e)}
                background-color: ${Le};
                color: ${De};
                transition: all 0.3s ease;
                ${F}
            }
            
            .${a} .digiblocks-form-textarea {
                min-height: 150px;
                resize: vertical;
            }
            
            /* Focus styles */
            .${a} .digiblocks-form-input:focus,
            .${a} .digiblocks-form-textarea:focus,
            .${a} .digiblocks-form-select:focus {
                outline: none;
                border-color: ${qe};
            }
            
            /* Checkbox and radio styles */
            .${a} .digiblocks-form-checkbox-label,
            .${a} .digiblocks-form-radio-label {
                display: flex;
                align-items: center;
				gap: 8px;
                cursor: pointer;
                margin-bottom: 8px;
            }
            
            .${a} .digiblocks-form-checkbox-label span,
            .${a} .digiblocks-form-radio-label span {
                flex: 1;
            }
            
            /* Submit button container */
            .${a} .digiblocks-form-submit {
                ${uo}
                margin-top: ${D}px;
            }
            
            /* Submit button */
            .${a} .digiblocks-form-submit-button {
                background-color: ${Be};
                color: ${Te};
                border: none;
                ${Ue}
                padding: 12px 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                ${L}
                ${I==="full"?"width: 100%;":""}
            }
            
            /* Submit button hover */
            .${a} .digiblocks-form-submit-button:hover {
                background-color: ${Fe};
                color: ${He};
            }
            
            /* Success message */
            .${a} .digiblocks-form-success {
                color: #38a169;
                padding: 10px;
                margin-top: 20px;
                border-radius: 4px;
                background-color: #f0fff4;
                border: 1px solid #c6f6d5;
                display: none;
            }
            
            /* Error message */
            .${a} .digiblocks-form-error {
                color: #e53e3e;
                padding: 10px;
                margin-top: 20px;
                border-radius: 4px;
                background-color: #fff5f5;
                border: 1px solid #fed7d7;
                display: none;
            }
            
            /* Field error message */
            .${a} .digiblocks-form-field-error {
                color: #e53e3e;
                font-size: 12px;
                margin-top: 4px;
                display: none;
            }
            
            /* Editor specific styles */
            .${a} .digiblocks-form-field.is-selected {
                outline: 2px dashed #4a6cf7;
            }
            
            .${a} .digiblocks-field-actions {
                position: absolute;
                right: 5px;
                top: 5px;
                display: flex;
                gap: 5px;
                z-index: 10;
            }
            
            .${a} .digiblocks-field-action-button {
                padding: 2px !important;
                min-width: auto !important;
                width: 24px !important;
                height: 24px !important;
            }
            
            .${a} .digiblocks-field-width-100 {
                width: 100%;
            }
            
            .${a} .digiblocks-field-width-75 {
				width: calc(75% - (${D}px * 0.25));
			}
			
			.${a} .digiblocks-field-width-66 {
				width: calc(66.66% - (${D}px * 0.33));
			}
			
			.${a} .digiblocks-field-width-50 {
				width: calc(50% - (${D}px * 0.5));
			}
			
			.${a} .digiblocks-field-width-33 {
				width: calc(33.33% - (${D}px * 0.67));
			}
			
			.${a} .digiblocks-field-width-25 {
				width: calc(25% - (${D}px * 0.75));
			}
            
            .${a} .digiblocks-form-fields-empty {
                padding: 20px;
                border: 2px dashed #ddd;
                text-align: center;
                border-radius: 4px;
            }
            
            /* Animation keyframes */
            ${We}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                .${a} .digiblocks-field-width-25,
                .${a} .digiblocks-field-width-33,
                .${a} .digiblocks-field-width-50,
                .${a} .digiblocks-field-width-66,
                .${a} .digiblocks-field-width-75 {
                    width: 100%;
                }
            }

            /* Animation keyframes */
            ${i}

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
			${h.desktop?`
				@media (min-width: 992px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${h.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${h.mobile?`
				@media (max-width: 767px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ro=e=>wp.element.createElement("div",{className:"digiblocks-field-actions"},wp.element.createElement(ae,{text:o("Move Up","digiblocks")},wp.element.createElement(c,{className:"digiblocks-field-action-button",onClick:i=>{i.stopPropagation(),ao(e)},icon:"arrow-up-alt2",disabled:e===0,isSmall:!0})),wp.element.createElement(ae,{text:o("Move Down","digiblocks")},wp.element.createElement(c,{className:"digiblocks-field-action-button",onClick:i=>{i.stopPropagation(),so(e)},icon:"arrow-down-alt2",disabled:e===p.length-1,isSmall:!0})),wp.element.createElement(ae,{text:o("Duplicate","digiblocks")},wp.element.createElement(c,{className:"digiblocks-field-action-button",onClick:i=>{i.stopPropagation(),io(e)},icon:"admin-page",isSmall:!0})),wp.element.createElement(ae,{text:o("Remove","digiblocks")},wp.element.createElement(c,{className:"digiblocks-field-action-button",onClick:i=>{i.stopPropagation(),oo(e)},icon:"trash",isDestructive:!0,isSmall:!0}))),co=e=>{if(e<0||e>=p.length)return null;let i=p[e];return wp.element.createElement(xo,{title:o("Field Settings","digiblocks"),initialOpen:!0},wp.element.createElement(S,{label:o("Field Label","digiblocks"),value:i.label||"",onChange:s=>U(e,"label",s),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(pe,{label:o("Field Type","digiblocks"),value:i.type,options:Ae,onChange:s=>{(s==="select"||s==="radio")&&(!i.options||i.options.length===0)&&U(e,"options",[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]),U(e,"type",s)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),i.type!=="hidden"&&i.type!=="checkbox"&&i.type!=="radio"&&wp.element.createElement(S,{label:o("Placeholder","digiblocks"),value:i.placeholder||"",onChange:s=>U(e,"placeholder",s),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),i.type==="hidden"&&wp.element.createElement(S,{label:o("Value","digiblocks"),value:i.value||"",onChange:s=>U(e,"value",s),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Y,{label:o("Required Field","digiblocks"),checked:i.required||!1,onChange:s=>U(e,"required",s),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ve,{label:o("Field Width (%)","digiblocks"),value:i.width?.toString()||"100",onChange:s=>U(e,"width",parseInt(s)),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(N,{value:"100",label:o("100","digiblocks")}),wp.element.createElement(N,{value:"75",label:o("75","digiblocks")}),wp.element.createElement(N,{value:"66",label:o("66","digiblocks")}),wp.element.createElement(N,{value:"50",label:o("50","digiblocks")}),wp.element.createElement(N,{value:"33",label:o("33","digiblocks")}),wp.element.createElement(N,{value:"25",label:o("25","digiblocks")})),(i.type==="select"||i.type==="radio")&&i.options&&wp.element.createElement("div",{className:"digiblocks-field-options"},wp.element.createElement("p",{className:"components-base-control__label"},o("Options","digiblocks")),i.options.map((s,d)=>wp.element.createElement("div",{key:d,className:"digiblocks-field-option"},wp.element.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"15px"}},wp.element.createElement(S,{label:o("Label","digiblocks"),value:s.label||"",onChange:b=>Ee(e,d,"label",b),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(S,{label:o("Value","digiblocks"),value:s.value||"",onChange:b=>Ee(e,d,"value",b),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ae,{text:o("Remove Option","digiblocks")},wp.element.createElement(c,{isDestructive:!0,isSmall:!0,icon:"trash",onClick:()=>to(e,d),style:{alignSelf:"flex-end",marginBottom:"8px"}}))))),wp.element.createElement(c,{isSecondary:!0,onClick:()=>lo(e),style:{marginTop:"8px",width:"100%"}},o("Add Option","digiblocks"))))},po=(e,i)=>{let s=x===i,d=`digiblocks-form-field digiblocks-field-width-${e.width||"100"} ${s?"is-selected":""}`,b={readOnly:!0,tabIndex:-1,style:{pointerEvents:"none"}},M=({children:T})=>wp.element.createElement("div",{className:d,onClick:()=>y(i)},s&&ro(i),T);switch(e.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement(M,{key:e.id,index:i},wp.element.createElement("label",{className:"digiblocks-form-field-label"},e.label,e.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:e.type,className:"digiblocks-form-input",placeholder:e.placeholder||"",...b}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement(M,{key:e.id,index:i},wp.element.createElement("label",{className:"digiblocks-form-field-label"},e.label,e.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{className:"digiblocks-form-textarea",placeholder:e.placeholder||"",...b}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement(M,{key:e.id,index:i},wp.element.createElement("label",{className:"digiblocks-form-field-label"},e.label,e.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{className:"digiblocks-form-select",...b},wp.element.createElement("option",{value:""},e.placeholder||o("Select an option","digiblocks")),e.options&&e.options.map((T,le)=>wp.element.createElement("option",{key:le,value:T.value},T.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement(M,{key:e.id,index:i},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",className:"digiblocks-form-checkbox",...b}),wp.element.createElement("span",null,e.label,e.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement(M,{key:e.id,index:i},wp.element.createElement("label",{className:"digiblocks-form-field-label"},e.label,e.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),e.options&&e.options.map((T,le)=>wp.element.createElement("label",{key:le,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",className:"digiblocks-form-radio",name:`radio-${e.id}`,value:T.value,...b}),wp.element.createElement("span",null,T.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement(M,{key:e.id,index:i},wp.element.createElement("div",{style:{padding:"10px",background:"#f7f7f7",borderRadius:"4px"}},wp.element.createElement("div",{style:{display:"flex",alignItems:"center"}},wp.element.createElement(yo,{icon:"hidden",style:{marginRight:"8px"}}),wp.element.createElement("span",null,wp.element.createElement("strong",null,o("Hidden Field:","digiblocks"))," ",e.label,wp.element.createElement("br",null),wp.element.createElement("small",{style:{opacity:.7}},o("Value:","digiblocks")," ",e.value||o("Not set","digiblocks"))))));default:return null}},bo=()=>{switch(Pe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(k,{tab:"options",name:"form-settings",title:o("Form Settings","digiblocks"),initialOpen:!0},wp.element.createElement(S,{label:o("Form Name","digiblocks"),value:ge,onChange:e=>l({formName:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(S,{label:o("Recipient Email","digiblocks"),value:Q,onChange:e=>l({recipientEmail:e}),help:o("Leave empty to use the admin email","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(S,{label:o("Button Text","digiblocks"),value:$e,onChange:e=>l({submitButtonText:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ve,{label:o("Button Alignment","digiblocks"),value:I,onChange:e=>l({buttonAlign:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(N,{value:"left",label:o("Left","digiblocks")}),wp.element.createElement(N,{value:"center",label:o("Center","digiblocks")}),wp.element.createElement(N,{value:"right",label:o("Right","digiblocks")}),wp.element.createElement(N,{value:"full",label:o("Full","digiblocks")}))),wp.element.createElement(k,{tab:"options",name:"messages",title:o("Messages","digiblocks"),initialOpen:!1},wp.element.createElement(te,{label:o("Success Message","digiblocks"),value:X,onChange:e=>l({successMessage:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(te,{label:o("Error Message","digiblocks"),value:ne,onChange:e=>l({errorMessage:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(k,{tab:"options",name:"security",title:o("Security","digiblocks"),initialOpen:!1},wp.element.createElement(Y,{label:o("Enable reCAPTCHA","digiblocks"),checked:ue,onChange:e=>l({enableRecaptcha:e}),help:o("Enable Google reCAPTCHA to protect your form from spam.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(k,{tab:"options",name:"email-settings",title:o("Email Settings","digiblocks"),initialOpen:!1},wp.element.createElement(S,{label:o("Email Subject","digiblocks"),value:me,onChange:e=>l({emailSubject:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Y,{label:o("Use Site Logo","digiblocks"),checked:t,onChange:e=>l({useSiteLogo:e}),help:o("Display the site logo in email header","digiblocks"),__nextHasNoMarginBottom:!0}),!t&&wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label"},o("Custom Logo","digiblocks")),wp.element.createElement("div",{className:"editor-post-featured-image"},wp.element.createElement(vo,null,wp.element.createElement(ho,{onSelect:e=>{l({customLogo:e.url})},allowedTypes:["image"],value:j,render:({open:e})=>wp.element.createElement("div",{className:"components-base-control__field"},j?wp.element.createElement("div",null,wp.element.createElement("img",{src:j,alt:o("Logo","digiblocks"),style:{maxWidth:"100%",maxHeight:"100px",marginBottom:"8px",display:"block"}}),wp.element.createElement("div",{className:"components-button-group",style:{display:"flex"}},wp.element.createElement(c,{onClick:e,variant:"secondary",isSmall:!0},o("Replace","digiblocks")),wp.element.createElement(c,{onClick:()=>l({customLogo:""}),variant:"secondary",isDestructive:!0,isSmall:!0,style:{marginLeft:"8px"}},o("Remove","digiblocks")))):wp.element.createElement(c,{onClick:e,variant:"secondary",className:"editor-post-featured-image__toggle"},o("Upload Logo","digiblocks")))})))),wp.element.createElement(S,{label:o("Business Name","digiblocks"),value:R,onChange:e=>l({businessName:e}),help:o("Leave empty to use the site name","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(te,{label:o("Email Header Text","digiblocks"),value:O,onChange:e=>l({emailHeader:e}),help:o("Optional text to display above the form data","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(te,{label:o("Email Footer Text","digiblocks"),value:E,onChange:e=>l({emailFooter:e}),help:o("Optional text for the email footer (e.g., business address)","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(te,{label:o("Business Address","digiblocks"),value:Ke,onChange:e=>l({businessAddress:e}),help:o("Business address to display in email footer","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"fields":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(k,{tab:"fields",name:"field-types",title:o("Add Fields","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digi-field-select"},wp.element.createElement(c,{onClick:()=>w("text")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 80C0 53.5 21.5 32 48 32l176 0 176 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L256 96l0 320 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-320L64 96z"})),wp.element.createElement("span",null,o("Text","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("email")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),wp.element.createElement("span",null,o("Email","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("number")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"})),wp.element.createElement("span",null,o("Number","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("tel")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"})),wp.element.createElement("span",null,o("Phone","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("date")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"})),wp.element.createElement("span",null,o("Date","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("textarea")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"})),wp.element.createElement("span",null,o("Textarea","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("select")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"})),wp.element.createElement("span",null,o("Select","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("checkbox")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),wp.element.createElement("span",null,o("Checkbox","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("radio")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"})),wp.element.createElement("span",null,o("Radio","digiblocks"))),wp.element.createElement(c,{onClick:()=>w("hidden")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},wp.element.createElement("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})),wp.element.createElement("span",null,o("Hidden","digiblocks")))),wp.element.createElement(H,{label:o("Field Gap","digiblocks")},wp.element.createElement(Ge,{value:re[r],onChange:e=>l({fieldGap:{...re,[r]:e}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(H,{label:o("Label Margin","digiblocks")},wp.element.createElement(Ge,{value:de[r],onChange:e=>l({labelMargin:{...de,[r]:e}}),min:0,max:30,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),x>=0&&co(x));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(k,{tab:"style",name:"colors",title:o("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ce,{title:o("Form Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Se,onChange:e=>l({backgroundColor:e}),label:o("Background Color","digiblocks")},{value:Ne,onChange:e=>l({textColor:e}),label:o("Text Color","digiblocks")},{value:_e,onChange:e=>l({labelColor:e}),label:o("Label Color","digiblocks")}]}),wp.element.createElement(ce,{title:o("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Le,onChange:e=>l({inputBackgroundColor:e}),label:o("Input Background","digiblocks")},{value:De,onChange:e=>l({inputTextColor:e}),label:o("Input Text","digiblocks")},{value:ze,onChange:e=>l({inputBorderColor:e}),label:o("Input Border","digiblocks")},{value:qe,onChange:e=>l({inputFocusBorderColor:e}),label:o("Input Focus Border","digiblocks")}]}),wp.element.createElement(ce,{title:o("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Be,onChange:e=>l({buttonBackgroundColor:e}),label:o("Background Color","digiblocks")},{value:Te,onChange:e=>l({buttonTextColor:e}),label:o("Text Color","digiblocks")},{value:Fe,onChange:e=>l({buttonBackgroundHoverColor:e}),label:o("Hover Background Color","digiblocks")},{value:He,onChange:e=>l({buttonTextHoverColor:e}),label:o("Hover Text Color","digiblocks")}]})),wp.element.createElement(k,{tab:"style",name:"typography",title:o("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(we,{label:o("Form Typography","digiblocks"),value:g,onChange:e=>l({typography:e}),defaults:{fontSize:{desktop:"",tablet:"",mobile:""},fontSizeUnit:"px",lineHeight:{desktop:"",tablet:"",mobile:""},lineHeightUnit:"em"}}),wp.element.createElement(we,{label:o("Label Typography","digiblocks"),value:u,onChange:e=>l({textTypography:e}),defaults:{fontSize:{desktop:"",tablet:"",mobile:""},fontSizeUnit:"px",lineHeight:{desktop:"",tablet:"",mobile:""},lineHeightUnit:"em"}}),wp.element.createElement(we,{label:o("Button Typography","digiblocks"),value:m,onChange:e=>l({buttonTypography:e}),defaults:{fontSize:{desktop:"",tablet:"",mobile:""},fontSizeUnit:"px",lineHeight:{desktop:"",tablet:"",mobile:""},lineHeightUnit:"em"}})),wp.element.createElement(k,{tab:"style",name:"form-border",title:o("Form Border","digiblocks"),initialOpen:!1},wp.element.createElement(pe,{label:o("Border Style","digiblocks"),value:Z,options:Oe,onChange:e=>l({borderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Z!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(H,{label:o("Border Width","digiblocks")},wp.element.createElement(V,{values:fe[r],onChange:e=>l({borderWidth:{...fe,[r]:e}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(ce,{title:o("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Me,onChange:e=>l({borderColor:e}),label:o("Border Color","digiblocks")}]}),wp.element.createElement(H,{label:o("Border Radius","digiblocks")},wp.element.createElement(V,{values:ke[r],onChange:e=>l({borderRadius:{...ke,[r]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(No,{normalValue:_,hoverValue:B,onNormalChange:e=>l({boxShadow:e}),onHoverChange:e=>l({boxShadowHover:e})})),wp.element.createElement(k,{tab:"style",name:"input-style",title:o("Input Style","digiblocks"),initialOpen:!1},wp.element.createElement(pe,{label:o("Input Border Style","digiblocks"),value:he,options:Oe,onChange:e=>l({inputBorderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),he!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(H,{label:o("Input Border Width","digiblocks")},wp.element.createElement(V,{values:ve[r],onChange:e=>l({inputBorderWidth:{...ve,[r]:e}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(H,{label:o("Input Border Radius","digiblocks")},wp.element.createElement(V,{values:oe&&oe[r]?oe[r]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:e=>l({inputBorderRadius:{...oe,[r]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(H,{label:o("Input Padding","digiblocks")},wp.element.createElement(V,{values:ie&&ie[r]?ie[r]:{top:12,right:15,bottom:12,left:15,unit:"px"},onChange:e=>l({inputPadding:{...ie,[r]:e}})}))),wp.element.createElement(k,{tab:"style",name:"spacing",title:o("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(H,{label:o("Padding","digiblocks")},wp.element.createElement(V,{values:A&&A[r]?A[r]:{top:30,right:30,bottom:30,left:30,unit:"px"},onChange:e=>l({padding:{...A,[r]:e}})})),wp.element.createElement(H,{label:o("Margin","digiblocks")},wp.element.createElement(V,{values:ee&&ee[r]?ee[r]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:e=>l({margin:{...ee,[r]:e}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(k,{tab:"advanced",name:"animation",title:o("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(pe,{label:o("Animation Effect","digiblocks"),value:f,options:Ze,onChange:e=>l({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),f&&f!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(c,{variant:"secondary",isSecondary:!0,onClick:Xe,style:{width:"100%"}},o("Preview Animation","digiblocks")))),wp.element.createElement(k,{tab:"advanced",name:"visibility",title:o("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,o("Editor Note:","digiblocks")),wp.element.createElement("br",null),o("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Y,{label:o("Hide on Desktop","digiblocks"),checked:h.desktop,onChange:e=>l({visibility:{...h,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Y,{label:o("Hide on Tablet","digiblocks"),checked:h.tablet,onChange:e=>l({visibility:{...h,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Y,{label:o("Hide on Mobile","digiblocks"),checked:h.mobile,onChange:e=>l({visibility:{...h,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(k,{tab:"advanced",name:"additional",title:o("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},o("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:J||"",onChange:e=>l({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},o(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},o("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},o("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:se||"",onChange:e=>l({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},o("Separate multiple classes with spaces.","digiblocks")))));default:return null}},go=fo({className:`digiblocks-forms ${a} ${se||""}`,id:J||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ko,null,wp.element.createElement(_o,{tabs:eo,activeTab:Pe,onSelect:Qe,customClass:"four"},bo())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:no()}}),wp.element.createElement("div",{...go},wp.element.createElement("div",{className:"digiblocks-form"},wp.element.createElement("div",{className:"digiblocks-form-fields"},p&&p.length>0?p.map((e,i)=>po(e,i)):wp.element.createElement("div",{className:"digiblocks-form-fields-empty"},o('No fields added yet. Click the "Fields" tab to add form fields.',"digiblocks"))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:I==="full"?"center":I}},wp.element.createElement("button",{className:"digiblocks-form-submit-button"},$e)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},X),wp.element.createElement("div",{className:"digiblocks-form-error"},ne)))))},Ie=Bo;var{useBlockProps:To}=window.wp.blockEditor,Fo=({attributes:K})=>{let{id:l,anchor:P,customClasses:a,animation:J,successMessage:h,errorMessage:se,submitButtonText:ge,buttonAlign:Q,fields:X}=K,ne=`digiblocks-forms ${l} ${J!=="none"?`animate-${J}`:""} ${a||""}`,ue=To.save({className:ne,id:P||null}),me=(t,j)=>{let R=`digiblocks-field-width-${t.width||"100"}`;switch(t.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement("div",{key:t.id,className:`digiblocks-form-field ${R}`,"data-field-id":t.id,"data-field-type":t.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${l}-${t.id}`},t.label,t.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:t.type,id:`${l}-${t.id}`,name:t.id,className:"digiblocks-form-input",placeholder:t.placeholder||"",required:t.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement("div",{key:t.id,className:`digiblocks-form-field ${R}`,"data-field-id":t.id,"data-field-type":t.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${l}-${t.id}`},t.label,t.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{id:`${l}-${t.id}`,name:t.id,className:"digiblocks-form-textarea",placeholder:t.placeholder||"",required:t.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement("div",{key:t.id,className:`digiblocks-form-field ${R}`,"data-field-id":t.id,"data-field-type":t.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${l}-${t.id}`},t.label,t.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{id:`${l}-${t.id}`,name:t.id,className:"digiblocks-form-select",required:t.required},wp.element.createElement("option",{value:""},t.placeholder||"Select an option"),t.options&&t.options.map((O,E)=>wp.element.createElement("option",{key:E,value:O.value},O.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement("div",{key:t.id,className:`digiblocks-form-field ${R}`,"data-field-id":t.id,"data-field-type":t.type},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",id:`${l}-${t.id}`,name:t.id,className:"digiblocks-form-checkbox",value:"1",required:t.required}),wp.element.createElement("span",null,t.label,t.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement("div",{key:t.id,className:`digiblocks-form-field ${R}`,"data-field-id":t.id,"data-field-type":t.type},wp.element.createElement("label",{className:"digiblocks-form-field-label"},t.label,t.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),t.options&&t.options.map((O,E)=>wp.element.createElement("label",{key:E,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",id:`${l}-${t.id}-${E}`,name:t.id,className:"digiblocks-form-radio",value:O.value,required:t.required&&E===0}),wp.element.createElement("span",null,O.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement("input",{key:t.id,type:"hidden",id:`${l}-${t.id}`,name:t.id,value:t.value||"","data-field-id":t.id,"data-field-type":t.type});default:return null}};return wp.element.createElement("div",{...ue},wp.element.createElement("form",{className:"digiblocks-form",id:`${l}-form`,"data-form-id":l,onSubmit:"return false;"},wp.element.createElement("div",{className:"digiblocks-form-fields"},X&&X.map((t,j)=>me(t,j))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:Q==="full"?"center":Q}},wp.element.createElement("button",{type:"submit",className:"digiblocks-form-submit-button",style:Q==="full"?{width:"100%"}:{}},ge)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},h),wp.element.createElement("div",{className:"digiblocks-form-error"},se))))},Ye=Fo;var{__:n}=window.wp.i18n,{registerBlockType:Ho}=window.wp.blocks;Ho("digiblocks/forms",{apiVersion:2,title:digiBlocksData.blocks.forms.title,category:"digiblocks",icon:{src:()=>{let{viewbox:K,path:l}=digiBlocksData.blocks.forms.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${K}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:l}))}},description:digiBlocksData.blocks.forms.description,keywords:[n("form","digiblocks"),n("contact","digiblocks"),n("input","digiblocks"),n("email","digiblocks"),n("field","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},formName:{type:"string",default:n("Contact Form","digiblocks")},recipientEmail:{type:"string",default:""},emailSubject:{type:"string",default:n("New form submission","digiblocks")},successMessage:{type:"string",default:n("Thank you for your submission!","digiblocks")},errorMessage:{type:"string",default:n("There was an error submitting the form. Please try again.","digiblocks")},enableRecaptcha:{type:"boolean",default:!1},useSiteLogo:{type:"boolean",default:!0},customLogo:{type:"string",default:""},emailHeader:{type:"string",default:""},emailFooter:{type:"string",default:""},businessName:{type:"string",default:""},businessAddress:{type:"string",default:""},submitButtonText:{type:"string",default:n("Submit","digiblocks")},buttonAlign:{type:"string",default:"left"},backgroundColor:{type:"string",default:"#ffffff"},textColor:{type:"string",default:""},labelColor:{type:"string",default:""},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3a5ce5"},buttonTextHoverColor:{type:"string",default:"#ffffff"},borderStyle:{type:"string",default:"solid"},borderColor:{type:"string",default:"#e0e0e0"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},typography:{type:"object",default:{}},textTypography:{type:"object",default:{}},buttonTypography:{type:"object",default:{}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBorderStyle:{type:"string",default:"solid"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputPadding:{type:"object",default:{desktop:{top:12,right:15,bottom:12,left:15,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBackgroundColor:{type:"string",default:"#ffffff"},inputTextColor:{type:"string",default:""},inputFocusBorderColor:{type:"string",default:"#4a6cf7"},animation:{type:"string",default:"none"},fieldGap:{type:"object",default:{desktop:20,tablet:"",mobile:""}},labelMargin:{type:"object",default:{desktop:8,tablet:"",mobile:""}},fields:{type:"array",default:[{id:"name",type:"text",label:n("Name","digiblocks"),placeholder:n("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:n("Email","digiblocks"),placeholder:n("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:n("Message","digiblocks"),placeholder:n("Enter your message","digiblocks"),required:!0,width:100}]}},example:{attributes:{fields:[{id:"name",type:"text",label:n("Name","digiblocks"),placeholder:n("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:n("Email","digiblocks"),placeholder:n("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:n("Message","digiblocks"),placeholder:n("Enter your message","digiblocks"),required:!0,width:100}],formName:n("Contact Form","digiblocks"),backgroundColor:"#ffffff",textColor:"#333333",labelColor:"#333333",borderStyle:"solid",borderColor:"#e0e0e0",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",submitButtonText:n("Submit","digiblocks"),viewportWidth:450}},edit:Ie,save:Ye});})();
