(()=>{var{__:t}=window.wp.i18n,{useBlockProps:Ke,InspectorControls:Qe,PanelColorSettings:T,RichText:be}=window.wp.blockEditor,{TextControl:V,ToggleControl:$,SelectControl:j,RangeControl:ue,TabPanel:Xe,Notice:Ze,Button:Ae,__experimentalToggleGroupControl:et,__experimentalToggleGroupControlOption:He}=window.wp.components,{useState:ze,useEffect:De,useRef:tt}=window.wp.element,{useBlockId:ot,getDimensionCSS:H,animations:z,animationPreview:Me}=digi.utils,{tabIcons:me}=digi.icons,{ResponsiveButtonGroup:lt,ResponsiveControl:h,DimensionControl:D,TypographyControl:E,BoxShadowControl:he,CustomTabPanel:it,TabPanelBody:m,ResponsiveRangeControl:Pe}=digi.components,nt=({attributes:S,setAttributes:o,clientId:M})=>{let{id:n,anchor:P,visibility:b,customClasses:L,layout:u,align:f,title:G,showTitle:R,description:U,showDescription:F,emailPlaceholder:W,namePlaceholder:B,buttonText:q,showNameField:N,successMessage:I,errorMessage:ke,titleColor:xe,titleHoverColor:Y,descriptionColor:ve,inputTextColor:O,inputBackgroundColor:ye,inputBorderColor:we,inputBorderFocusColor:J,inputPlaceholderColor:Ce,buttonTextColor:K,buttonBackgroundColor:Q,buttonTextHoverColor:$e,buttonBackgroundHoverColor:Se,buttonBorderColor:X,buttonBorderHoverColor:Be,backgroundColor:Z,backgroundHoverColor:A,containerBorderColor:Ne,containerBorderHoverColor:ee,titleTypography:s,contentTypography:d,textTypography:a,buttonTypography:r,containerBorderRadius:te,containerBorderWidth:oe,containerBorderStyle:le,inputBorderRadius:ie,inputBorderWidth:ne,inputBorderStyle:ae,buttonBorderRadius:re,buttonBorderWidth:se,buttonBorderStyle:de,spacing:C,inputSpacing:_,padding:ce,margin:pe,boxShadow:k,boxShadowHover:x,buttonBoxShadow:Ue,buttonBoxShadowHover:v,inputBoxShadow:y,inputBoxShadowHover:w,animation:p}=S;ot(n,M,o);let i=(e,l)=>!e||typeof e!="object"?null:l==="mobile"?e.mobile!==""&&e.mobile!==void 0&&e.mobile!==null?e.mobile:e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop:l==="tablet"&&e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop,[c,Fe]=ze(window.digi.responsiveState.activeDevice),[_e,We]=ze(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(M);if(e)return e}return"options"});De(()=>window.digi.responsiveState.subscribe(l=>{Fe(l)}),[]);let Te=tt(null);De(()=>{if(p&&p!=="none"){let e=setTimeout(()=>{Me(n,p,z,Te)},100);return()=>clearTimeout(e)}},[p]);let Ie=()=>{Me(n,p,z,Te)},Oe=[{label:t("None","digiblocks"),value:"none"},...Object.keys(z).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,l=>l.toUpperCase()),value:e}))],dt=[{label:t("Stacked","digiblocks"),value:"stacked"},{label:t("Inline","digiblocks"),value:"inline"}],ge=[{label:t("None","digiblocks"),value:"none"},{label:t("Solid","digiblocks"),value:"solid"},{label:t("Dashed","digiblocks"),value:"dashed"},{label:t("Dotted","digiblocks"),value:"dotted"},{label:t("Double","digiblocks"),value:"double"}],Ve=[{name:"options",title:t("Options","digiblocks"),icon:me.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:me.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:me.advancedIcon}],je=[{name:"normal",title:t("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:t("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Ee=()=>{let e=c,l="";return p&&p!=="none"&&z[p]&&(l=z[p].keyframes),`
            /* Newsletter Block - ${n} */
            .${n} {
                ${H(ce,"padding",e)}
                ${H(pe,"margin",e)}
                ${Z?`background-color: ${Z};`:""}
                ${k?.enable?`box-shadow: ${k.horizontal}px ${k.vertical}px ${k.blur}px ${k.spread}px ${k.color};`:""}
				${le!=="none"?"border: "+(oe[e]||1)+"px "+(le||"solid")+" "+Ne+";":"border: none;"}
                ${H(te,"border-radius",e)}
                transition: all 0.3s ease;
                text-align: ${i(f,e)==="center"?"center":i(f,e)==="right"?"right":"left"};
            }

            .${n}:hover {
                ${A?`background-color: ${A};`:""}
                ${ee?`border-color: ${ee};`:""}
                ${x?.enable?`box-shadow: ${x.horizontal}px ${x.vertical}px ${x.blur}px ${x.spread}px ${x.color};`:""}
            }

            /* Newsletter Title */
            .${n} .digiblocks-newsletter-title {
                color: ${xe};
                margin-top: 0;
                margin-bottom: ${i(C,e)?.value||20}${i(C,e)?.unit||"px"};
                ${s.fontFamily?`font-family: ${s.fontFamily};`:""}
                ${i(s.fontSize,e)?`font-size: ${i(s.fontSize,e)}${s.fontSizeUnit||"px"};`:""}
                ${s.fontWeight?`font-weight: ${s.fontWeight};`:""}
                ${s.fontStyle?`font-style: ${s.fontStyle};`:""}
                ${s.textTransform?`text-transform: ${s.textTransform};`:""}
                ${s.textDecoration?`text-decoration: ${s.textDecoration};`:""}
                ${i(s.lineHeight,e)?`line-height: ${i(s.lineHeight,e)}${s.lineHeightUnit||"em"};`:""}
                ${i(s.letterSpacing,e)?`letter-spacing: ${i(s.letterSpacing,e)}${s.letterSpacingUnit||"px"};`:""}
                transition: color 0.3s ease;
            }

            .${n}:hover .digiblocks-newsletter-title {
                ${Y?`color: ${Y};`:""}
            }

            /* Newsletter Description */
            .${n} .digiblocks-newsletter-description {
                color: ${ve};
                margin-bottom: ${C[e]?.value||20}${C[e]?.unit||"px"};
                ${d.fontFamily?`font-family: ${d.fontFamily};`:""}
                ${i(d.fontSize,e)?`font-size: ${i(d.fontSize,e)}${d.fontSizeUnit||"px"};`:""}
                ${d.fontWeight?`font-weight: ${d.fontWeight};`:""}
                ${d.fontStyle?`font-style: ${d.fontStyle};`:""}
                ${d.textTransform?`text-transform: ${d.textTransform};`:""}
                ${d.textDecoration?`text-decoration: ${d.textDecoration};`:""}
                ${i(d.lineHeight,e)?`line-height: ${i(d.lineHeight,e)}${d.lineHeightUnit||"em"};`:""}
				${i(d.letterSpacing,e)!==null?`letter-spacing: ${i(d.letterSpacing,e)}${d.letterSpacingUnit||"px"};`:""}
            }

            /* Newsletter Form */
            .${n} .digiblocks-newsletter-form {
                display: flex;
                ${u==="stacked"?"flex-direction: column;":"flex-direction: row;"}
                gap: ${i(_,e)?.value||10}${i(_,e)?.unit||"px"};
                ${u==="inline"&&i(f,e)==="center"?"justify-content: center;":""}
				${u==="inline"&&i(f,e)==="right"?"justify-content: flex-end;":""}
            }

            /* Form Fields */
            .${n} .digiblocks-newsletter-fields {
                display: flex;
                ${u==="stacked"?"flex-direction: column;":"flex-direction: row;"}
                gap: ${i(_,e)?.value||10}${i(_,e)?.unit||"px"};
                ${u==="inline"?"flex: 1;":"width: 100%;"}
            }

            .${n} .digiblocks-newsletter-field {
                ${u==="stacked"?"width: 100%;":"flex: 1;"}
            }

            /* Input Container with Icon */
            .${n} .digiblocks-newsletter-input-container {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
            }

            .${n} .digiblocks-newsletter-input-icon {
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
                ${a.fontSize?.[e]?`width: ${a.fontSize[e]}${a.fontSizeUnit||"px"};`:"width: 1em;"}
                ${a.fontSize?.[e]?`height: ${a.fontSize[e]}${a.fontSizeUnit||"px"};`:"height: 1em;"}
                fill: ${O};
                pointer-events: none;
                z-index: 2;
                opacity: 0.7;
                transition: all 0.3s ease;
            }

            /* Input Styles */
            .${n} .digiblocks-newsletter-input {
                width: 100%;
                padding: 12px 16px 12px 50px;
                color: ${O};
                background-color: ${ye};
				${ae!=="none"?"border: "+(ne[e]||1)+"px "+(ae||"solid")+" "+we+";":"border: none;"}
                ${H(ie,"border-radius",e)}
                ${y?.enable?`box-shadow: ${y.horizontal}px ${y.vertical}px ${y.blur}px ${y.spread}px ${y.color};`:""}
                ${a.fontFamily?`font-family: ${a.fontFamily};`:""}
                ${i(a.fontSize,e)?`font-size: ${i(a.fontSize,e)}${a.fontSizeUnit||"px"};`:""}
                ${a.fontWeight?`font-weight: ${a.fontWeight};`:""}
                ${a.fontStyle?`font-style: ${a.fontStyle};`:""}
                ${a.textTransform?`text-transform: ${a.textTransform};`:""}
                ${a.textDecoration?`text-decoration: ${a.textDecoration};`:""}
                ${i(a.lineHeight,e)?`line-height: ${i(a.lineHeight,e)}${a.lineHeightUnit||"em"};`:""}
				${i(a.letterSpacing,e)!==null?`letter-spacing: ${i(a.letterSpacing,e)}${a.letterSpacingUnit||"px"};`:""}
                transition: all 0.3s ease;
                outline: none;
				box-shadow: none;
            }

            .${n} .digiblocks-newsletter-input::placeholder {
                color: ${Ce};
            }

            .${n} .digiblocks-newsletter-input:focus {
                border-color: ${J};
                ${w?.enable?`box-shadow: ${w.horizontal}px ${w.vertical}px ${w.blur}px ${w.spread}px ${w.color};`:""}
            }

            .${n} .digiblocks-newsletter-input:focus + .digiblocks-newsletter-input-icon {
                opacity: 1;
                fill: ${J||O};
            }

            /* Button Styles */
            .${n} .digiblocks-newsletter-button {
                padding: 12px 24px;
                color: ${K};
                background-color: ${Q};
				${de!=="none"?"border: "+(se[e]||1)+"px "+(de||"solid")+" "+X+";":"border: none;"}
                ${H(re,"border-radius",e)}
                ${i(r.fontSize,e)?`font-size: ${i(r.fontSize,e)}${r.fontSizeUnit||"px"};`:""}
                ${r.fontFamily?`font-family: ${r.fontFamily};`:""}
                ${r.fontSize?.[e]?`font-size: ${r.fontSize[e]}${r.fontSizeUnit||"px"};`:""}
                ${r.fontWeight?`font-weight: ${r.fontWeight};`:""}
                ${r.fontStyle?`font-style: ${r.fontStyle};`:""}
                ${r.textTransform?`text-transform: ${r.textTransform};`:""}
                ${r.textDecoration?`text-decoration: ${r.textDecoration};`:""}
                ${i(r.lineHeight,e)?`line-height: ${i(r.lineHeight,e)}${r.lineHeightUnit||"em"};`:""}
				${i(r.letterSpacing,e)!==null?`letter-spacing: ${i(r.letterSpacing,e)}${r.letterSpacingUnit||"px"};`:""}
                cursor: pointer;
                transition: all 0.3s ease;
                ${u==="stacked"?"width: 100%;":"white-space: nowrap;"}
            }

            .${n} .digiblocks-newsletter-button:hover {
                color: ${$e||K};
                background-color: ${Se||Q};
                border-color: ${Be||X};
                ${v?.enable?`box-shadow: ${v.horizontal}px ${v.vertical}px ${v.blur}px ${v.spread}px ${v.color};`:""}
            }

            /* Messages */
            .${n} .digiblocks-newsletter-message {
                margin-top: ${C[e]}px;
                padding: 12px;
                border-radius: 4px;
                display: none;
            }

            .${n} .digiblocks-newsletter-message.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }

            .${n} .digiblocks-newsletter-message.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }

            /* Animation keyframes */
            ${l}

			/* Responsive */
			@media (max-width: 767px) {
				.${n} .digiblocks-newsletter-form {
					flex-direction: column;
				}
			}

			/* Visibility Controls */
			${b.desktop?`
				@media (min-width: 992px) {
					.${n} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${b.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${n} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${b.mobile?`
				@media (max-width: 767px) {
					.${n} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Ge=()=>{switch(_e){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(m,{tab:"options",name:"content",title:t("Content","digiblocks"),initialOpen:!0},wp.element.createElement(Ze,{status:"warning",isDismissible:!1,className:"digiblocks-notice components-base-control"},wp.element.createElement(wp.element.Fragment,null,t("Configure your newsletter platform in ","digiblocks"),wp.element.createElement("a",{href:"/wp-admin/admin.php?page=digiblocks-settings",target:"_blank",rel:"noopener noreferrer"},t("DigiBlocks Settings","digiblocks")),t(" to enable subscriptions.","digiblocks"))),wp.element.createElement($,{label:t("Show Title","digiblocks"),checked:R,onChange:e=>o({showTitle:e}),__nextHasNoMarginBottom:!0}),wp.element.createElement($,{label:t("Show Description","digiblocks"),checked:F,onChange:e=>o({showDescription:e}),__nextHasNoMarginBottom:!0}),wp.element.createElement($,{label:t("Show Name Field","digiblocks"),checked:N,onChange:e=>o({showNameField:e}),__nextHasNoMarginBottom:!0}),wp.element.createElement(V,{label:t("Email Placeholder","digiblocks"),value:W,onChange:e=>o({emailPlaceholder:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),N&&wp.element.createElement(V,{label:t("Name Placeholder","digiblocks"),value:B,onChange:e=>o({namePlaceholder:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(V,{label:t("Success Message","digiblocks"),value:I,onChange:e=>o({successMessage:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(V,{label:t("Error Message","digiblocks"),value:ke,onChange:e=>o({errorMessage:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(m,{tab:"options",name:"layout",title:t("Layout","digiblocks"),initialOpen:!1},wp.element.createElement(et,{label:t("Layout","digiblocks"),value:u,onChange:e=>o({layout:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(He,{value:"stacked",label:t("Stacked","digiblocks")}),wp.element.createElement(He,{value:"inline",label:t("Inline","digiblocks")})),wp.element.createElement(lt,{label:t("Alignment","digiblocks"),value:f,onChange:e=>o({align:e}),options:[{label:t("Left","digiblocks"),value:"left"},{label:t("Center","digiblocks"),value:"center"},{label:t("Right","digiblocks"),value:"right"}]}),wp.element.createElement(Pe,{label:t("Content Spacing","digiblocks"),value:C,onChange:e=>o({spacing:e}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1,defaultValues:{desktop:{value:20,unit:"px"},tablet:{value:20,unit:"px"},mobile:{value:20,unit:"px"}}}),wp.element.createElement(Pe,{label:t("Field Spacing","digiblocks"),value:_,onChange:e=>o({inputSpacing:e}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:50,step:1,defaultValues:{desktop:{value:10,unit:"px"},tablet:{value:8,unit:"px"},mobile:{value:6,unit:"px"}}})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(m,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Xe,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:je},e=>e.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(T,{title:t("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:xe,onChange:l=>o({titleColor:l}),label:t("Title Color","digiblocks")},{value:ve,onChange:l=>o({descriptionColor:l}),label:t("Description Color","digiblocks")}]}),wp.element.createElement(T,{title:t("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:O,onChange:l=>o({inputTextColor:l}),label:t("Input Text Color","digiblocks")},{value:ye,onChange:l=>o({inputBackgroundColor:l}),label:t("Input Background","digiblocks")},{value:we,onChange:l=>o({inputBorderColor:l}),label:t("Input Border","digiblocks")},{value:J,onChange:l=>o({inputBorderFocusColor:l}),label:t("Input Border Focus","digiblocks")},{value:Ce,onChange:l=>o({inputPlaceholderColor:l}),label:t("Placeholder Color","digiblocks")}]}),wp.element.createElement(T,{title:t("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:K,onChange:l=>o({buttonTextColor:l}),label:t("Button Text","digiblocks")},{value:Q,onChange:l=>o({buttonBackgroundColor:l}),label:t("Button Background","digiblocks")},{value:X,onChange:l=>o({buttonBorderColor:l}),label:t("Button Border","digiblocks")}]}),wp.element.createElement(T,{title:t("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Z,onChange:l=>o({backgroundColor:l}),label:t("Background Color","digiblocks")},{value:Ne,onChange:l=>o({containerBorderColor:l}),label:t("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(T,{title:t("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Y,onChange:l=>o({titleHoverColor:l}),label:t("Title Hover Color","digiblocks")},{value:$e,onChange:l=>o({buttonTextHoverColor:l}),label:t("Button Text Hover","digiblocks")},{value:Se,onChange:l=>o({buttonBackgroundHoverColor:l}),label:t("Button Background Hover","digiblocks")},{value:Be,onChange:l=>o({buttonBorderHoverColor:l}),label:t("Button Border Hover","digiblocks")},{value:A,onChange:l=>o({backgroundHoverColor:l}),label:t("Background Hover","digiblocks")},{value:ee,onChange:l=>o({containerBorderHoverColor:l}),label:t("Border Hover","digiblocks")}]})))),wp.element.createElement(m,{tab:"style",name:"typography",title:t("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(E,{label:t("Title Typography","digiblocks"),value:s,onChange:e=>o({titleTypography:e}),defaults:{fontSize:{desktop:24,tablet:22,mobile:20},fontWeight:"600",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(E,{label:t("Description Typography","digiblocks"),value:d,onChange:e=>o({contentTypography:e}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(E,{label:t("Input Typography","digiblocks"),value:a,onChange:e=>o({textTypography:e}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(E,{label:t("Button Typography","digiblocks"),value:r,onChange:e=>o({buttonTypography:e}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontWeight:"500",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}})),wp.element.createElement(m,{tab:"style",name:"borders",title:t("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement("h4",null,t("Container Border","digiblocks")),wp.element.createElement(j,{label:t("Container Border Style","digiblocks"),value:le,options:ge,onChange:e=>o({containerBorderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(h,{label:t("Container Border Width","digiblocks")},wp.element.createElement(ue,{value:oe[c],onChange:e=>o({containerBorderWidth:{...oe,[c]:e}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(h,{label:t("Container Border Radius","digiblocks")},wp.element.createElement(D,{values:te[c],onChange:e=>o({containerBorderRadius:{...te,[c]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,t("Input Border","digiblocks")),wp.element.createElement(j,{label:t("Input Border Style","digiblocks"),value:ae,options:ge,onChange:e=>o({inputBorderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(h,{label:t("Input Border Width","digiblocks")},wp.element.createElement(ue,{value:ne[c],onChange:e=>o({inputBorderWidth:{...ne,[c]:e}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(h,{label:t("Input Border Radius","digiblocks")},wp.element.createElement(D,{values:ie[c],onChange:e=>o({inputBorderRadius:{...ie,[c]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,t("Button Border","digiblocks")),wp.element.createElement(j,{label:t("Button Border Style","digiblocks"),value:de,options:ge,onChange:e=>o({buttonBorderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(h,{label:t("Button Border Width","digiblocks")},wp.element.createElement(ue,{value:se[c],onChange:e=>o({buttonBorderWidth:{...se,[c]:e}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(h,{label:t("Button Border Radius","digiblocks")},wp.element.createElement(D,{values:re[c],onChange:e=>o({buttonBorderRadius:{...re,[c]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(m,{tab:"style",name:"shadow",title:t("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(he,{label:t("Container Shadow","digiblocks"),normalValue:k,hoverValue:x,onNormalChange:e=>o({boxShadow:e}),onHoverChange:e=>o({boxShadowHover:e})}),wp.element.createElement(he,{label:t("Input Shadow","digiblocks"),normalValue:y,hoverValue:w,onNormalChange:e=>o({inputBoxShadow:e}),onHoverChange:e=>o({inputBoxShadowHover:e})}),wp.element.createElement(he,{label:t("Button Shadow","digiblocks"),normalValue:Ue,hoverValue:v,onNormalChange:e=>o({buttonBoxShadow:e}),onHoverChange:e=>o({buttonBoxShadowHover:e})})),wp.element.createElement(m,{tab:"style",name:"spacing",title:t("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(h,{label:t("Padding","digiblocks")},wp.element.createElement(D,{values:ce[c],onChange:e=>o({padding:{...ce,[c]:e}})})),wp.element.createElement(h,{label:t("Margin","digiblocks")},wp.element.createElement(D,{values:pe[c],onChange:e=>o({margin:{...pe,[c]:e}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(m,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(j,{label:t("Animation Effect","digiblocks"),value:p,options:Oe,onChange:e=>o({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),p&&p!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Ae,{variant:"secondary",isSecondary:!0,onClick:Ie,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(m,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement($,{label:t("Hide on Desktop","digiblocks"),checked:b.desktop,onChange:e=>o({visibility:{...b,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($,{label:t("Hide on Tablet","digiblocks"),checked:b.tablet,onChange:e=>o({visibility:{...b,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($,{label:t("Hide on Mobile","digiblocks"),checked:b.mobile,onChange:e=>o({visibility:{...b,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(m,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:e=>o({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:L||"",onChange:e=>o({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},qe=p!=="none"?` animate-${p}`:"",Ye=`digiblocks-newsletter ${n}${qe} ${L||""}`,Je=Ke({className:Ye,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qe,null,wp.element.createElement(it,{tabs:Ve,activeTab:_e,onSelect:We},Ge())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ee()}}),wp.element.createElement("div",{...Je},R&&wp.element.createElement(be,{tagName:"h3",className:"digiblocks-newsletter-title",value:G,onChange:e=>o({title:e}),placeholder:t("Subscribe to our Newsletter","digiblocks")}),F&&wp.element.createElement(be,{tagName:"p",className:"digiblocks-newsletter-description",value:U,onChange:e=>o({description:e}),placeholder:t("Stay updated with our latest news and offers","digiblocks")}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",onSubmit:e=>e.preventDefault()},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},N&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",className:"digiblocks-newsletter-input",placeholder:B,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",className:"digiblocks-newsletter-input",placeholder:W,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement(be,{tagName:"button",className:"digiblocks-newsletter-button",value:q,onChange:e=>o({buttonText:e}),placeholder:t("Subscribe","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success"},I),wp.element.createElement("div",{className:"digiblocks-newsletter-message error"},ke)))},Le=nt;var{useBlockProps:at,RichText:fe}=window.wp.blockEditor,rt=({attributes:S})=>{let{id:o,anchor:M,customClasses:n,title:P,showTitle:b,description:L,showDescription:u,emailPlaceholder:f,namePlaceholder:G,buttonText:R,showNameField:U,successMessage:F,errorMessage:W,animation:B}=S,q=B!=="none"?` animate-${B}`:"",N=`digiblocks-newsletter ${o}${q} ${n||""}`,I=at.save({className:N,id:M||null});return wp.element.createElement("div",{...I},b&&wp.element.createElement(fe.Content,{tagName:"h3",className:"digiblocks-newsletter-title",value:P}),u&&wp.element.createElement(fe.Content,{tagName:"p",className:"digiblocks-newsletter-description",value:L}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",method:"post"},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},U&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",name:"digiblocks_newsletter_name",className:"digiblocks-newsletter-input",placeholder:G,required:U}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",name:"digiblocks_newsletter_email",className:"digiblocks-newsletter-input",placeholder:f,required:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement("button",{type:"submit",className:"digiblocks-newsletter-button"},wp.element.createElement(fe.Content,{value:R})),wp.element.createElement("input",{type:"hidden",name:"action",value:"digiblocks_newsletter_subscribe"}),wp.element.createElement("input",{type:"hidden",name:"digiblocks_newsletter_nonce",value:""}),wp.element.createElement("input",{type:"hidden",name:"block_id",value:o})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success",style:{display:"none"}},F),wp.element.createElement("div",{className:"digiblocks-newsletter-message error",style:{display:"none"}},W))},Re=rt;var{__:g}=window.wp.i18n,{registerBlockType:st}=window.wp.blocks;st("digiblocks/newsletter",{apiVersion:2,title:digiBlocksData.blocks.newsletter.title,category:"digiblocks",icon:{src:()=>{let{viewbox:S,path:o}=digiBlocksData.blocks.newsletter.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${S}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:o}))}},description:digiBlocksData.blocks.newsletter.description,keywords:[g("newsletter","digiblocks"),g("subscribe","digiblocks"),g("email","digiblocks"),g("mailchimp","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},layout:{type:"string",default:"stacked"},align:{type:"object",default:{desktop:"left",tablet:"",mobile:""}},title:{type:"string",default:g("Subscribe to our Newsletter","digiblocks")},showTitle:{type:"boolean",default:!0},description:{type:"string",default:g("Stay updated with our latest news and offers","digiblocks")},showDescription:{type:"boolean",default:!0},emailPlaceholder:{type:"string",default:g("Enter your email address","digiblocks")},namePlaceholder:{type:"string",default:g("Enter your name","digiblocks")},buttonText:{type:"string",default:g("Subscribe","digiblocks")},showNameField:{type:"boolean",default:!1},successMessage:{type:"string",default:g("Thank you for subscribing!","digiblocks")},errorMessage:{type:"string",default:g("Something went wrong. Please try again.","digiblocks")},titleColor:{type:"string",default:""},titleHoverColor:{type:"string",default:""},descriptionColor:{type:"string",default:"#666666"},inputTextColor:{type:"string",default:""},inputBackgroundColor:{type:"string",default:"#ffffff"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderFocusColor:{type:"string",default:"#4a6cf7"},inputPlaceholderColor:{type:"string",default:"#999999"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:""},buttonBackgroundHoverColor:{type:"string",default:""},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},containerBorderColor:{type:"string",default:""},containerBorderHoverColor:{type:"string",default:""},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:24,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},containerBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},containerBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},containerBorderStyle:{type:"string",default:"none"},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},inputBorderStyle:{type:"string",default:"solid"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},buttonBorderStyle:{type:"string",default:"solid"},spacing:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},inputSpacing:{type:"object",default:{desktop:{value:10,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:8,spread:0,position:"outset"}},inputBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:4,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{title:g("Subscribe to our Newsletter","digiblocks"),description:g("Stay updated with our latest news and offers","digiblocks"),layout:"stacked",showTitle:!0,showDescription:!0,showNameField:!1,buttonText:g("Subscribe","digiblocks")}},edit:Le,save:Re});})();
