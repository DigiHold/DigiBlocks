(()=>{var{__:o}=window.wp.i18n,{useBlockProps:ro,RichText:xe,InspectorControls:go,PanelColorSettings:I}=window.wp.blockEditor,{SelectControl:L,RangeControl:we,ToggleControl:oe,Button:W,TextControl:re,Tooltip:ie,TabPanel:qe,__experimentalToggleGroupControl:wo,__experimentalToggleGroupControlOption:qo}=window.wp.components,{useState:de,useEffect:ge,useRef:bo}=window.wp.element,{useBlockId:po,getDimensionCSS:$,animations:K,animationPreview:ye}=digi.utils,{tabIcons:be}=digi.icons,{ResponsiveControl:V,DimensionControl:te,TypographyControl:Ce,BoxShadowControl:mo,CustomTabPanel:fo,TabPanelBody:x}=digi.components,uo=({attributes:j,setAttributes:a,clientId:M})=>{let{id:i,anchor:E,visibility:q,customClasses:X,items:r,titleColor:G,titleHoverColor:f,titleActiveColor:k,backgroundColor:O,backgroundHoverColor:S,backgroundActiveColor:N,contentColor:ee,contentBackgroundColor:_,borderColor:b,borderHoverColor:y,borderRadius:p,borderWidth:F,borderStyle:C,boxShadow:T,boxShadowHover:H,padding:z,margin:Z,titleTypography:s,contentTypography:c,iconPosition:pe,iconColor:me,iconHoverColor:ae,iconActiveColor:fe,iconSize:D,animation:v,allowMultipleOpen:le,iconType:ue,titleTag:Te,questionPrefix:J,questionPrefixColor:ne,answerPrefix:Y,answerPrefixColor:se,layout:A,itemsSpacing:Q,schemaType:He,schemaName:ze}=j;po(i,M,a);let d=(e,t)=>!e||typeof e!="object"?null:t==="mobile"?e.mobile!==""&&e.mobile!==void 0&&e.mobile!==null?e.mobile:e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop:t==="tablet"&&e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop,[he,Be]=de(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(M);if(e)return e}return"options"}),[m,Pe]=de(window.digi.responsiveState.activeDevice),[$o,xo]=de(!1);ge(()=>window.digi.responsiveState.subscribe(t=>{Pe(t)}),[]),ge(()=>{if(r&&r.length>0){let e=r.map((t,n)=>t.id?t:{...t,id:`faq-item-${M.substr(0,8)}-${n}`});JSON.stringify(e)!==JSON.stringify(r)&&a({items:e})}},[M,r,a]);let ke=bo(null);ge(()=>{if(v&&v!=="none"){let e=setTimeout(()=>{ye(i,v,K,ke)},100);return()=>clearTimeout(e)}},[v]);let Me=()=>{ye(i,v,K,ke)},Ie=[{label:o("Default","digiblocks"),value:"default"},{label:o("None","digiblocks"),value:"none"},{label:o("Solid","digiblocks"),value:"solid"},{label:o("Dotted","digiblocks"),value:"dotted"},{label:o("Dashed","digiblocks"),value:"dashed"},{label:o("Double","digiblocks"),value:"double"},{label:o("Groove","digiblocks"),value:"groove"},{label:o("Inset","digiblocks"),value:"inset"},{label:o("Outset","digiblocks"),value:"outset"},{label:o("Ridge","digiblocks"),value:"ridge"}],Oe=[{label:o("None","digiblocks"),value:"none"},...Object.keys(K).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),value:e}))],Fe=[{label:o("Plus/Minus","digiblocks"),value:"plusMinus"},{label:o("Arrow","digiblocks"),value:"arrow"},{label:o("Chevron","digiblocks"),value:"chevron"},{label:o("Triangle","digiblocks"),value:"triangle"},{label:o("Circle Plus/Minus","digiblocks"),value:"circlePlusMinus"}],De=[{label:o("Right","digiblocks"),value:"right"},{label:o("Left","digiblocks"),value:"left"}],Ae=[{label:o("H2","digiblocks"),value:"h2"},{label:o("H3","digiblocks"),value:"h3"},{label:o("H4","digiblocks"),value:"h4"},{label:o("H5","digiblocks"),value:"h5"},{label:o("H6","digiblocks"),value:"h6"},{label:o("p","digiblocks"),value:"p"},{label:o("div","digiblocks"),value:"div"}],Qe=[{label:o("Boxed","digiblocks"),value:"boxed"},{label:o("Classic","digiblocks"),value:"classic"},{label:o("Separated","digiblocks"),value:"separated"},{label:o("Minimalist","digiblocks"),value:"minimalist"},{label:o("Bordered","digiblocks"),value:"bordered"}],Re=[{label:o("Default FAQ Schema","digiblocks"),value:"FAQPage"},{label:o("Q&A Schema","digiblocks"),value:"QAPage"}],Ue=[{name:"options",title:o("Options","digiblocks"),icon:be.optionsIcon},{name:"style",title:o("Style","digiblocks"),icon:be.styleIcon},{name:"advanced",title:o("Advanced","digiblocks"),icon:be.advancedIcon}],ve=[{name:"normal",title:o("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:o("Hover","digiblocks"),className:"digiblocks-tab-2 hover"},{name:"active",title:o("Active","digiblocks"),className:"digiblocks-tab-3 active"}],Le=()=>{let e=r.length,t={id:`faq-item-${M.substr(0,8)}-${e}`,title:o("New FAQ Question","digiblocks"),content:o("Add your answer here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1};a({items:[...r,t]})},Ee=e=>{let t=[...r];t.splice(e,1),a({items:t})},We=e=>{let t=r[e],n=Date.now(),u={...t,id:`faq-item-${M.substr(0,8)}-${n}`,isOpen:!1},h=[...r];h.splice(e+1,0,u),a({items:h})},Ve=e=>{if(e===0)return;let t=[...r],n=t[e];t.splice(e,1),t.splice(e-1,0,n),a({items:t})},je=e=>{if(e===r.length-1)return;let t=[...r],n=t[e];t.splice(e,1),t.splice(e+1,0,n),a({items:t})},Ge=e=>{let t=r.map((n,u)=>u===e?{...n,isOpen:!n.isOpen}:!le&&u!==e&&n.isOpen?{...n,isOpen:!1}:n);a({items:t})},Ze=(e,t)=>{let n=[...r];n[t].title=e,a({items:n})},Je=(e,t)=>{let n=[...r];n[t].content=e,a({items:n})},Ye=(e,t=ue)=>{switch(t){case"plusMinus":return e?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${e?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${e?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${e?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return e?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return e?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},Ke=()=>{let e=window.digi.responsiveState.activeDevice,t=Q[e]!==void 0?Q[e]:16,n="";C&&C!=="default"&&C!=="none"?n=`
				border-style: ${C};
				border-color: ${b||"#e0e0e0"};
				${$(F,"border-width",e)}
				${$(p,"border-radius",e)}
			`:n="border: none;";let u="box-shadow: none;";T&&T.enable&&(u=`box-shadow: ${T.position==="inset"?"inset ":""}${T.horizontal}px ${T.vertical}px ${T.blur}px ${T.spread}px ${T.color};`);let h=`${$(z,"padding",e)}`,B="";if(s){s.fontFamily&&(B+=`font-family: ${s.fontFamily};`);let l=d(s.fontSize,e);l&&(B+=`font-size: ${l}${s.fontSizeUnit||"px"};`),s.fontWeight&&(B+=`font-weight: ${s.fontWeight};`),s.fontStyle&&(B+=`font-style: ${s.fontStyle};`),s.textTransform&&(B+=`text-transform: ${s.textTransform};`),s.textDecoration&&(B+=`text-decoration: ${s.textDecoration};`);let g=d(s.lineHeight,e);g&&(B+=`line-height: ${g}${s.lineHeightUnit||"em"};`);let U=d(s.letterSpacing,e);(U||U===0)&&(B+=`letter-spacing: ${U}${s.letterSpacingUnit||"px"};`)}let P="";if(c){c.fontFamily&&(P+=`font-family: ${c.fontFamily};`);let l=d(c.fontSize,e);l&&(P+=`font-size: ${l}${c.fontSizeUnit||"px"};`),c.fontWeight&&(P+=`font-weight: ${c.fontWeight};`),c.fontStyle&&(P+=`font-style: ${c.fontStyle};`),c.textTransform&&(P+=`text-transform: ${c.textTransform};`),c.textDecoration&&(P+=`text-decoration: ${c.textDecoration};`);let g=d(c.lineHeight,e);g&&(P+=`line-height: ${g}${c.lineHeightUnit||"em"};`);let U=d(c.letterSpacing,e);(U||U===0)&&(P+=`letter-spacing: ${U}${c.letterSpacingUnit||"px"};`)}let ce="";H&&H.enable&&(ce=`box-shadow: ${H.position==="inset"?"inset ":""}${H.horizontal}px ${H.vertical}px ${H.blur}px ${H.spread}px ${H.color};`);let lo=`
			/* FAQ Block - ${i} */
			.${i} {
				${$(Z,"margin",e)}
				width: 100%;
			}
			
			/* Base styles for questions and answers */
			.${i} .digiblocks-faq-question {
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				display: flex;
				align-items: center;
				${pe==="left"?"flex-direction: row-reverse; justify-content: flex-end;":"justify-content: space-between;"}
			}
			
			.${i} .digiblocks-faq-question-text {
				color: ${G};
				${B}
				margin: 0;
				flex: 1;
				${J?"display: flex; align-items: center; gap: .5rem;":""}
				transition: color 0.3s ease;
			}
			
			.${i} .digiblocks-faq-question-prefix {
				${ne?`color: ${ne};`:""}
				font-weight: bold;
			}
			
			.${i} .digiblocks-faq-answer-prefix {
				${se?`color: ${se};`:""}
				font-weight: bold;
			}
			
			.${i} .digiblocks-faq-answer-content {
				display: flex;
				${Y?"display: flex; gap: .5rem;":""}
				color: ${ee};
				${P}
			}
			
			/* Handle answer display states */
			.${i} .digiblocks-faq-answer {
				overflow: hidden;
				display: none;
				transition: height 0.3s ease;
			}
			
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			/* Icon styles */
			.${i} .digiblocks-faq-question {
				gap: 15px;
			}

			.${i} .digiblocks-faq-question-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				color: ${me};
				transition: all 0.3s ease;
				font-size: ${d(D,e)}px;
			}
			
			.${i} .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${i} .digiblocks-faq-question-icon svg {
				width: ${d(D,e)}px;
				height: ${d(D,e)}px;
				transition: transform 0.3s ease;
				fill: currentColor;
			}
			
			/* Rotate icons when active */
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-arrow,
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-chevron,
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-triangle {
				transform: rotate(180deg);
			}
			
			.${i} .digiblocks-faq-icon-arrow,
			.${i} .digiblocks-faq-icon-chevron,
			.${i} .digiblocks-faq-icon-triangle {
				display: inline-flex;
				transition: transform 0.3s ease;
			}
			
			/* Handle hover state */
			.${i} .digiblocks-faq-question:hover .digiblocks-faq-question-text {
				${f?`color: ${f};`:""}
			}
			
			.${i} .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${ae?`color: ${ae};`:""}
			}
			
			/* Handle active state */
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${k};
			}
			
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${fe};
			}

			/* Visibility Controls */
			${q.desktop?`
				@media (min-width: 992px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${q.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${q.mobile?`
				@media (max-width: 767px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`,R="";switch(A){case"boxed":R=`
					.${i} .digiblocks-faq-item {
						${n}
						${u}
						background-color: ${O||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${t}px;
					}
					
					.${i} .digiblocks-faq-item:hover {
						${ce}
						${S?`background-color: ${S};`:""}
						${y?`border-color: ${y};`:""}
					}
					
					.${i} .digiblocks-faq-question {
						${h}
					}
					
					.${i} .digiblocks-faq-answer {
						${h}
						border-top: 1px solid ${b||"#e0e0e0"};
						${_?`background-color: ${_};`:""}
					}
					
					.${i} .digiblocks-faq-item.is-active {
						${N?`background-color: ${N};`:""}
					}
				`;break;case"classic":R=`
					.${i} .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${b||"#e0e0e0"};
						background-color: transparent;
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
					}
					
					.${i} .digiblocks-faq-question {
						${h}
					}
					
					.${i} .digiblocks-faq-answer {
						${$(z,"padding",e)}
						padding-top: 0;
					}
				`;break;case"separated":R=`
					.${i} .digiblocks-faq-item {
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
					}
					
					.${i} .digiblocks-faq-question {
						${h}
						${n}
						${u}
						background-color: ${O||"#ffffff"};
					}
					
					.${i} .digiblocks-faq-question:hover {
						${f?`color: ${f};`:""}
						${S?`background-color: ${S};`:""}
						${y?`border-color: ${y};`:""}
						${ce}
					}
					
					.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${k?`color: ${k};`:""}
						${N?`background-color: ${N};`:""}
					}
					
					.${i} .digiblocks-faq-answer {
						${h}
						${_?`background-color: ${_};`:""}
						${n}
						border-top: none;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
						border-bottom-left-radius: ${p&&p[e]?p[e].left+p[e].unit:"8px"};
						border-bottom-right-radius: ${p&&p[e]?p[e].right+p[e].unit:"8px"};
						margin-top: -1px;
					}
				`;break;case"minimalist":R=`
					.${i} .digiblocks-faq-item {
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					.${i} .digiblocks-faq-question {
						${h}
						border-bottom: 2px solid ${b||"#e0e0e0"};
					}
					
					.${i} .digiblocks-faq-question:hover {
						${f?`color: ${f};`:""}
						border-color: ${f||y||"#cccccc"};
					}
					
					.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${k?`color: ${k};`:""}
						border-color: ${k||"#1e73be"};
					}
					
					.${i} .digiblocks-faq-answer {
						${$(z,"padding",e)}
					}
				`;break;case"bordered":R=`
					.${i} .digiblocks-faq-item {
						${n}
						background-color: transparent;
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					.${i} .digiblocks-faq-item:hover {
						${y?`border-color: ${y};`:""}
					}
					
					.${i} .digiblocks-faq-question {
						${h}
						background-color: ${O||"#f8f9fa"};
					}
					
					.${i} .digiblocks-faq-question:hover {
						${f?`color: ${f};`:""}
						${S?`background-color: ${S};`:""}
					}
					
					.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${k?`color: ${k};`:""}
						${N?`background-color: ${N};`:""}
					}
					
					.${i} .digiblocks-faq-answer {
						${h}
						${_?`background-color: ${_};`:""}
					}
					
					.${i} .digiblocks-faq-item.is-active {
						border-color: ${k||b||"#1e73be"};
					}
				`;break;default:R=`
					.${i} .digiblocks-faq-item {
						${n}
						${u}
						background-color: ${O||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${t}px;
					}
					
					.${i} .digiblocks-faq-question {
						${h}
					}
					
					.${i} .digiblocks-faq-answer {
						${h}
						border-top: 1px solid #e0e0e0;
					}
				`}let no=`
			.${i} .digiblocks-faq-item {
				position: relative;
			}
			
			.${i} .digiblocks-faq-item-controls {
				display: flex;
				gap: 5px;
				position: absolute;
				right: 10px;
				top: -28px;
				background-color: #fff;
				padding: 2px;
				border-radius: 3px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.12);
				z-index: 10;
			}
		
			/* Respect the is-active class for showing/hiding answers */
			.${i} .digiblocks-faq-answer {
				display: none;
				transition: height 0.3s ease;
			}
			
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			.${i} .digiblocks-faq-schema {
				margin-top: 15px;
			}
		`,so=`
			@media (max-width: 991px) {
				.${i} {
					${$(Z,"margin","tablet")}
				}
				
				.${i} .digiblocks-faq-item {
					margin-bottom: ${d(Q,"tablet")||t}px;
				}
				
				.${i} .digiblocks-faq-question,
				.${i} .digiblocks-faq-answer {
					${$(z,"padding","tablet")}
				}
				
				${A==="minimalist"?`
				.${i} .digiblocks-faq-answer {
					${$(z,"padding","tablet")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${(()=>{let l=d(D,"tablet");return l?`
					.${i} .digiblocks-faq-question-icon {
						font-size: ${l}px;
					}
					
					.${i} .digiblocks-faq-question-icon svg {
						width: ${l}px;
						height: ${l}px;
					}
					`:""})()}
				
				${(()=>{let l=d(s?.fontSize,"tablet"),g=d(s?.lineHeight,"tablet");return!l&&!g?"":`
					.${i} .digiblocks-faq-question-text {
						${l?`font-size: ${l}${s.fontSizeUnit||"px"};`:""}
						${g?`line-height: ${g}${s.lineHeightUnit||"em"};`:""}
					}
					`})()}
				
				${(()=>{let l=d(c?.fontSize,"tablet"),g=d(c?.lineHeight,"tablet");return!l&&!g?"":`
					.${i} .digiblocks-faq-answer-content {
						${l?`font-size: ${l}${c.fontSizeUnit||"px"};`:""}
						${g?`line-height: ${g}${c.lineHeightUnit||"em"};`:""}
					}
					`})()}
			}
		`,co=`
			@media (max-width: 767px) {
				.${i} {
					${$(Z,"margin","mobile")}
				}
				
				.${i} .digiblocks-faq-item {
					margin-bottom: ${d(Q,"mobile")||d(Q,"tablet")||t}px;
				}
				
				.${i} .digiblocks-faq-question,
				.${i} .digiblocks-faq-answer {
					${$(z,"padding","mobile")}
				}
				
				${A==="minimalist"?`
				.${i} .digiblocks-faq-answer {
					${$(z,"padding","mobile")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${(()=>{let l=d(D,"mobile");return l?`
					.${i} .digiblocks-faq-question-icon {
						font-size: ${l}px;
					}
					
					.${i} .digiblocks-faq-question-icon svg {
						width: ${l}px;
						height: ${l}px;
					}
					`:""})()}
				
				${(()=>{let l=d(s?.fontSize,"mobile"),g=d(s?.lineHeight,"mobile");return!l&&!g?"":`
					.${i} .digiblocks-faq-question-text {
						${l?`font-size: ${l}${s.fontSizeUnit||"px"};`:""}
						${g?`line-height: ${g}${s.lineHeightUnit||"em"};`:""}
					}
					`})()}
				
				${(()=>{let l=d(c?.fontSize,"mobile"),g=d(c?.lineHeight,"mobile");return!l&&!g?"":`
					.${i} .digiblocks-faq-answer-content {
						${l?`font-size: ${l}${c.fontSizeUnit||"px"};`:""}
						${g?`line-height: ${g}${c.lineHeightUnit||"em"};`:""}
					}
					`})()}
			}
		`,$e="";return v&&v!=="none"&&K[v]&&($e=K[v].keyframes),`
			${lo}
			${R}
			${no}
			${so}
			${co}
			${$e}
		`},Xe=e=>e==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Question Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:G,onChange:t=>a({titleColor:t}),label:o("Text Color","digiblocks")},{value:O,onChange:t=>a({backgroundColor:t}),label:o("Background Color","digiblocks")},{value:ne,onChange:t=>a({questionPrefixColor:t}),label:o("Prefix Color","digiblocks"),disableCustomColors:!J}]})):e==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Question Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:f,onChange:t=>a({titleHoverColor:t}),label:o("Text Color","digiblocks")},{value:S,onChange:t=>a({backgroundHoverColor:t}),label:o("Background Color","digiblocks")}]})):e==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Question Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:k,onChange:t=>a({titleActiveColor:t}),label:o("Text Color","digiblocks")},{value:N,onChange:t=>a({backgroundActiveColor:t}),label:o("Background Color","digiblocks")}]})):null,eo=e=>e==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:me,onChange:t=>a({iconColor:t}),label:o("Icon Color","digiblocks")}]})):e==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ae,onChange:t=>a({iconHoverColor:t}),label:o("Icon Color","digiblocks")}]})):e==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Icon Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:fe,onChange:t=>a({iconActiveColor:t}),label:o("Icon Color","digiblocks")}]})):null,oo=()=>wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Answer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ee,onChange:e=>a({contentColor:e}),label:o("Text Color","digiblocks")},{value:_,onChange:e=>a({contentBackgroundColor:e}),label:o("Background Color","digiblocks")},{value:se,onChange:e=>a({answerPrefixColor:e}),label:o("Prefix Color","digiblocks"),disableCustomColors:!Y}]})),io=()=>{switch(he){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(x,{tab:"options",name:"content-settings",title:o("Items","digiblocks"),initialOpen:!0},wp.element.createElement(oe,{label:o("Allow Multiple Open","digiblocks"),checked:le,onChange:()=>a({allowMultipleOpen:!le}),help:o("When enabled, multiple FAQ items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(L,{label:o("Layout","digiblocks"),value:A,options:Qe,onChange:e=>a({layout:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"question-prefix",className:"components-base-control__label"},o("Question Prefix","digiblocks")),wp.element.createElement(re,{id:"question-prefix",value:J||"",onChange:e=>a({questionPrefix:e}),placeholder:o("Example: Q:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},o("Add a prefix to questions (e.g., 'Q:').","digiblocks")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"answer-prefix",className:"components-base-control__label"},o("Answer Prefix","digiblocks")),wp.element.createElement(re,{id:"answer-prefix",value:Y||"",onChange:e=>a({answerPrefix:e}),placeholder:o("Example: A:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},o("Add a prefix to answers (e.g., 'A:').","digiblocks")))),wp.element.createElement(V,{label:o("Items Spacing","digiblocks")},wp.element.createElement(we,{value:Q[m],onChange:e=>a({itemsSpacing:{...Q,[m]:e}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(x,{tab:"options",name:"icon-settings",title:o("Icon Settings","digiblocks"),initialOpen:!1},wp.element.createElement(L,{label:o("Icon Type","digiblocks"),value:ue,options:Fe,onChange:e=>a({iconType:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(L,{label:o("Icon Position","digiblocks"),value:pe,options:De,onChange:e=>a({iconPosition:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(V,{label:o("Icon Size","digiblocks")},wp.element.createElement(we,{value:D[m],onChange:e=>a({iconSize:{...D,[m]:e}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(x,{tab:"options",name:"schema-settings",title:o("SEO Schema","digiblocks"),initialOpen:!1},wp.element.createElement(L,{label:o("Schema Type","digiblocks"),value:He,options:Re,onChange:e=>a({schemaType:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(re,{label:o("Schema Name","digiblocks"),value:ze,onChange:e=>a({schemaName:e}),placeholder:o("Example: Product FAQ","digiblocks"),help:o("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(x,{tab:"options",name:"heading-settings",title:o("HTML Settings","digiblocks"),initialOpen:!1},wp.element.createElement(L,{label:o("Question Tag","digiblocks"),value:Te,options:Ae,onChange:e=>a({titleTag:e}),help:o("HTML tag for questions. Default is h3.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(x,{tab:"style",name:"question-styles",title:o("Question Styles","digiblocks"),initialOpen:!0},wp.element.createElement(qe,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:ve},e=>Xe(e.name)),wp.element.createElement(Ce,{label:o("Question Typography","digiblocks"),value:s,onChange:e=>a({titleTypography:e}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(x,{tab:"style",name:"answer-styles",title:o("Answer Styles","digiblocks"),initialOpen:!1},oo(),wp.element.createElement(Ce,{label:o("Answer Typography","digiblocks"),value:c,onChange:e=>a({contentTypography:e}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(x,{tab:"style",name:"icon-styles",title:o("Icon Styles","digiblocks"),initialOpen:!1},wp.element.createElement(qe,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:ve},e=>eo(e.name))),wp.element.createElement(x,{tab:"style",name:"border-box",title:o("Border & Shadow","digiblocks"),initialOpen:!1},A!=="classic"&&A!=="minimalist"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(L,{label:o("Border Style","digiblocks"),value:C||"default",options:Ie,onChange:e=>{e!=="default"&&e!=="none"&&(C==="default"||C==="none"||!C)&&((!F||Object.keys(F).length===0)&&a({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!p||Object.keys(p).length===0)&&a({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}})),a({borderStyle:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),C&&C!=="default"&&C!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{title:o("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:b,onChange:e=>a({borderColor:e}),label:o("Border Color","digiblocks")},{value:y,onChange:e=>a({borderHoverColor:e}),label:o("Border Hover Color","digiblocks")}]}),wp.element.createElement(V,{label:o("Border Width","digiblocks")},wp.element.createElement(te,{values:F&&F[m]?F[m]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:e=>a({borderWidth:{...F,[m]:e}})})),wp.element.createElement(V,{label:o("Border Radius","digiblocks")},wp.element.createElement(te,{values:p&&p[m]?p[m]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:e=>a({borderRadius:{...p,[m]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(mo,{normalValue:T,hoverValue:H,onNormalChange:e=>a({boxShadow:e}),onHoverChange:e=>a({boxShadowHover:e})})),wp.element.createElement(x,{tab:"style",name:"spacing",title:o("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(V,{label:o("Padding","digiblocks")},wp.element.createElement(te,{values:z[m],onChange:e=>a({padding:{...z,[m]:e}})})),wp.element.createElement(V,{label:o("Margin","digiblocks")},wp.element.createElement(te,{values:Z[m],onChange:e=>a({margin:{...Z,[m]:e}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(x,{tab:"advanced",name:"animation",title:o("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(L,{label:o("Animation Effect","digiblocks"),value:v,options:Oe,onChange:e=>a({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v&&v!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(W,{variant:"secondary",isSecondary:!0,onClick:Me,style:{width:"100%"}},o("Preview Animation","digiblocks")))),wp.element.createElement(x,{tab:"advanced",name:"visibility",title:o("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,o("Editor Note:","digiblocks")),wp.element.createElement("br",null),o("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(oe,{label:o("Hide on Desktop","digiblocks"),checked:q.desktop,onChange:e=>a({visibility:{...q,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(oe,{label:o("Hide on Tablet","digiblocks"),checked:q.tablet,onChange:e=>a({visibility:{...q,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(oe,{label:o("Hide on Mobile","digiblocks"),checked:q.mobile,onChange:e=>a({visibility:{...q,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(x,{tab:"advanced",name:"additional",title:o("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},o("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:E||"",onChange:e=>a({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},o(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},o("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},o("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:X||"",onChange:e=>a({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},o("Separate multiple classes with spaces.","digiblocks")))))}},to=()=>!r||r.length===0?wp.element.createElement("div",{className:"digiblocks-no-items"},wp.element.createElement("p",null,o("No FAQ items found. Please add some items.","digiblocks"))):r.map((e,t)=>{let n=t===r.length-1;return wp.element.createElement("div",{key:e.id,className:`digiblocks-faq-item ${e.isOpen?"is-active":""}`,style:n?{marginBottom:0}:{}},wp.element.createElement("div",{className:"digiblocks-faq-question",onClick:()=>Ge(t)},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},J&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},J),wp.element.createElement(xe,{tagName:"span",value:e.title,onChange:u=>Ze(u,t),placeholder:o("Enter question...","digiblocks"),allowedFormats:["core/bold","core/italic"],className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},Ye(e.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},Y&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},Y),wp.element.createElement(xe,{tagName:"div",value:e.content,onChange:u=>Je(u,t),placeholder:o("Enter answer...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/image","core/list"],className:"digiblocks-faq-answer-text"}))),wp.element.createElement("div",{className:"digiblocks-faq-item-controls"},wp.element.createElement(ie,{text:o("Move Up","digiblocks")},wp.element.createElement(W,{className:"digiblocks-faq-item-move-up",onClick:()=>Ve(t),icon:"arrow-up-alt2",disabled:t===0,isSmall:!0})),wp.element.createElement(ie,{text:o("Move Down","digiblocks")},wp.element.createElement(W,{className:"digiblocks-faq-item-move-down",onClick:()=>je(t),icon:"arrow-down-alt2",disabled:t===r.length-1,isSmall:!0})),wp.element.createElement(ie,{text:o("Duplicate","digiblocks")},wp.element.createElement(W,{className:"digiblocks-faq-item-duplicate",onClick:()=>We(t),icon:"admin-page",isSmall:!0})),wp.element.createElement(ie,{text:o("Remove","digiblocks")},wp.element.createElement(W,{className:"digiblocks-faq-item-remove",onClick:()=>Ee(t),icon:"trash",isSmall:!0}))))}),ao=ro({className:`digiblocks-faq-block ${i} ${A||"boxed"} ${X||""}`,id:E||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(go,null,wp.element.createElement(fo,{tabs:Ue,activeTab:he,onSelect:Be},io())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ke()}}),wp.element.createElement("div",{...ao},wp.element.createElement("div",{className:"digiblocks-faq-items"},to()),wp.element.createElement(W,{variant:"primary",icon:"plus",onClick:Le,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},o("Add FAQ Item","digiblocks"))))},Se=uo;var{useBlockProps:ho,RichText:Ne}=window.wp.blockEditor,ko=({attributes:j})=>{let{id:a,anchor:M,customClasses:i,items:E,titleTag:q,layout:X,questionPrefix:r,answerPrefix:G,animation:f,allowMultipleOpen:k,iconType:O}=j,S=["digiblocks-faq-block",a,X||"boxed",i||"",f!=="none"?`animate-${f}`:""].filter(Boolean).join(" "),N=(b,y=O)=>{switch(y){case"plusMinus":return b?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${b?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${b?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${b?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return b?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return b?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},ee=ho.save({className:S,id:M||null,"data-allow-multiple":k?"true":"false"}),_=()=>!E||E.length===0?null:E.map((b,y)=>wp.element.createElement("div",{key:b.id,className:`digiblocks-faq-item ${b.isOpen?"is-active":""}`,"data-item-id":b.id},wp.element.createElement("div",{className:"digiblocks-faq-question"},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},r&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},r),wp.element.createElement(Ne.Content,{tagName:q||"h3",value:b.title,className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},N(b.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},G&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},G),wp.element.createElement(Ne.Content,{tagName:"div",className:"digiblocks-faq-answer-text",value:b.content})))));return wp.element.createElement("div",{...ee},wp.element.createElement("div",{className:"digiblocks-faq-items"},_()))},_e=ko;var{__:w}=window.wp.i18n,{registerBlockType:vo}=window.wp.blocks;vo("digiblocks/faq",{apiVersion:2,title:digiBlocksData.blocks.faq.title,category:"digiblocks",icon:{src:()=>{let{viewbox:j,path:a}=digiBlocksData.blocks.faq.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${j}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:a}))}},description:digiBlocksData.blocks.faq.description,keywords:[w("faq","digiblocks"),w("questions","digiblocks"),w("answers","digiblocks"),w("schema","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"faq-item-1",title:w("What is a frequently asked question?","digiblocks"),content:w("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:w("How do I add more questions and answers?","digiblocks"),content:w('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.',"digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:""},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentBackgroundColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:""},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:"",mobile:""}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"},titleTag:{type:"string",default:"h3"},questionPrefix:{type:"string",default:""},questionPrefixColor:{type:"string",default:""},answerPrefix:{type:"string",default:""},answerPrefixColor:{type:"string",default:""},layout:{type:"string",default:"boxed"},itemsSpacing:{type:"object",default:{desktop:16,tablet:"",mobile:""}},schemaType:{type:"string",default:"FAQPage"},schemaName:{type:"string",default:""}},example:{attributes:{items:[{id:"faq-item-1",title:w("What is a frequently asked question?","digiblocks"),content:w("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:w("How do I add more questions?","digiblocks"),content:w('Click the "Add FAQ Item" button to add more questions and answers.',"digiblocks"),isOpen:!1}],layout:"boxed",titleColor:"",titleActiveColor:"#1e73be",backgroundColor:"#ffffff"}},edit:Se,save:_e});})();
