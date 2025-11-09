(()=>{var{__:o}=window.wp.i18n,{useBlockProps:Ho,RichText:Re,InspectorControls:Mo,PanelColorSettings:j}=window.wp.blockEditor,{TextControl:ue,SelectControl:Q,RangeControl:ye,ToggleControl:ge,Button:oe,Tooltip:be,TabPanel:Ve,__experimentalToggleGroupControl:Ye,__experimentalToggleGroupControlOption:pe}=window.wp.components,{useState:qe,useEffect:Ce,useRef:Po}=window.wp.element,{useBlockId:Oo,getDimensionCSS:q,animations:Se,animationPreview:Xe}=digi.utils,{tabIcons:Ne}=digi.icons,{ResponsiveControl:je,ResponsiveRangeControl:Ee,DimensionControl:fe,TypographyControl:We,BoxShadowControl:Do,CustomTabPanel:Io,TabPanelBody:$,TransformControl:Fo}=digi.components,Ao=({attributes:te,setAttributes:l,clientId:L})=>{let{id:i,anchor:ee,visibility:S,customClasses:re,items:g,titleColor:ie,titleHoverColor:x,titleActiveColor:y,backgroundColor:E,backgroundHoverColor:P,backgroundActiveColor:O,contentColor:ce,contentBackgroundColor:D,borderColor:_,borderHoverColor:T,borderRadius:u,borderWidth:W,borderStyle:N,boxShadow:I,boxShadowHover:F,padding:R,margin:de,titleTypography:m,contentTypography:v,iconPosition:_e,iconColor:Te,iconHoverColor:me,iconActiveColor:Be,iconSize:G,animation:B,animationDuration:ve,animationDelay:he,allowMultipleOpen:ke,iconType:ze,titleTag:Je,questionPrefix:le,questionPrefixColor:xe,answerPrefix:ae,answerPrefixColor:$e,layout:U,itemsSpacing:Z,schemaType:Ke,schemaName:eo,position:ne,horizontalOrientation:He,horizontalOffset:z,verticalOrientation:Me,verticalOffset:H,zIndex:se,transform:we,transformHover:V}=te;Oo(i,L,l);let p=(e,t)=>{if(!e||typeof e!="object")return null;let n=r=>r===""||r===void 0||r===null?!0:typeof r=="object"&&r!==null?r.value===""||r.value===void 0||r.value===null:!1;return t==="mobile"?n(e.mobile)?n(e.tablet)?e.desktop:e.tablet:e.mobile:t==="tablet"?n(e.tablet)?e.desktop:e.tablet:e.desktop},[Pe,oo]=qe(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(L);if(e)return e}return"options"}),[Y,to]=qe(window.digi.responsiveState.activeDevice),[Vo,Yo]=qe(!1);Ce(()=>window.digi.responsiveState.subscribe(t=>{to(t)}),[]),Ce(()=>{if(g&&g.length>0){let e=g.map((t,n)=>t.id?t:{...t,id:`faq-item-${L.substr(0,8)}-${n}`});JSON.stringify(e)!==JSON.stringify(g)&&l({items:e})}},[L,g,l]);let Oe=Po(null);Ce(()=>{if(B&&B!=="none"){let e=setTimeout(()=>{Xe(i,B,Se,Oe,ve,he)},100);return()=>clearTimeout(e)}},[B]);let io=()=>{Xe(i,B,Se,Oe,ve,he)},lo=[{label:o("Default","digiblocks"),value:"default"},{label:o("None","digiblocks"),value:"none"},{label:o("Solid","digiblocks"),value:"solid"},{label:o("Dotted","digiblocks"),value:"dotted"},{label:o("Dashed","digiblocks"),value:"dashed"},{label:o("Double","digiblocks"),value:"double"},{label:o("Groove","digiblocks"),value:"groove"},{label:o("Inset","digiblocks"),value:"inset"},{label:o("Outset","digiblocks"),value:"outset"},{label:o("Ridge","digiblocks"),value:"ridge"}],ao=[{label:o("None","digiblocks"),value:"none"},...Object.keys(Se).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),value:e}))],no=[{label:o("Plus/Minus","digiblocks"),value:"plusMinus"},{label:o("Arrow","digiblocks"),value:"arrow"},{label:o("Chevron","digiblocks"),value:"chevron"},{label:o("Triangle","digiblocks"),value:"triangle"},{label:o("Circle Plus/Minus","digiblocks"),value:"circlePlusMinus"}],so=[{label:o("Right","digiblocks"),value:"right"},{label:o("Left","digiblocks"),value:"left"}],ro=[{label:o("H2","digiblocks"),value:"h2"},{label:o("H3","digiblocks"),value:"h3"},{label:o("H4","digiblocks"),value:"h4"},{label:o("H5","digiblocks"),value:"h5"},{label:o("H6","digiblocks"),value:"h6"},{label:o("p","digiblocks"),value:"p"},{label:o("div","digiblocks"),value:"div"}],co=[{label:o("Boxed","digiblocks"),value:"boxed"},{label:o("Classic","digiblocks"),value:"classic"},{label:o("Separated","digiblocks"),value:"separated"},{label:o("Minimalist","digiblocks"),value:"minimalist"},{label:o("Bordered","digiblocks"),value:"bordered"}],uo=[{label:o("Default FAQ Schema","digiblocks"),value:"FAQPage"},{label:o("Q&A Schema","digiblocks"),value:"QAPage"}],go=[{name:"options",title:o("Options","digiblocks"),icon:Ne.optionsIcon},{name:"style",title:o("Style","digiblocks"),icon:Ne.styleIcon},{name:"advanced",title:o("Advanced","digiblocks"),icon:Ne.advancedIcon}],De=[{name:"normal",title:o("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:o("Hover","digiblocks"),className:"digiblocks-tab-2 hover"},{name:"active",title:o("Active","digiblocks"),className:"digiblocks-tab-3 active"}],bo=()=>{let e=g.length,t={id:`faq-item-${L.substr(0,8)}-${e}`,title:o("New FAQ Question","digiblocks"),content:o("Add your answer here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1};l({items:[...g,t]})},po=e=>{let t=[...g];t.splice(e,1),l({items:t})},fo=e=>{let t=g[e],n=Date.now(),r={...t,id:`faq-item-${L.substr(0,8)}-${n}`,isOpen:!1},f=[...g];f.splice(e+1,0,r),l({items:f})},mo=e=>{if(e===0)return;let t=[...g],n=t[e];t.splice(e,1),t.splice(e-1,0,n),l({items:t})},vo=e=>{if(e===g.length-1)return;let t=[...g],n=t[e];t.splice(e,1),t.splice(e+1,0,n),l({items:t})},ho=e=>{let t=g.map((n,r)=>r===e?{...n,isOpen:!n.isOpen}:!ke&&r!==e&&n.isOpen?{...n,isOpen:!1}:n);l({items:t})},ko=(e,t)=>{let n=[...g];n[t].title=e,l({items:n})},xo=(e,t)=>{let n=[...g];n[t].content=e,l({items:n})},$o=(e,t=ze)=>{switch(t){case"plusMinus":return e?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${e?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${e?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${e?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return e?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return e?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},Ie=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"vw":case"vh":return 100;default:return 2e3}},Fe=e=>{switch(e){case"%":case"vw":case"vh":return 1;case"em":case"rem":return .1;default:return 1}},Ae=(e,t)=>{let n={left:"0%",center:"50%",right:"100%"},r={top:"0%",center:"50%",bottom:"100%"},f=n[e.xAnchor?.[t]||"center"],k=r[e.yAnchor?.[t]||"center"];return`${f} ${k}`},Qe=(e,t)=>{if(!e)return"";let n=[],r=c=>{if(!c)return"";let d=c[t],X=h=>h===""||h===void 0||h===null?!0:typeof h=="object"&&h!==null?h.value===""||h.value===void 0||h.value===null:!1;return t==="tablet"&&X(d)&&(d=c.desktop),t==="mobile"&&X(d)&&(d=c.tablet,X(d)&&(d=c.desktop)),typeof d=="object"&&d!==null?d.value!==void 0?d.value:"":d},f=r(e.rotate);if(f!==""&&f!==void 0&&f!==null){if(e.rotate3d){let c=r(e.perspective);c!==""&&c!==void 0&&c!==null&&n.push(`perspective(${c}px)`)}n.push(`rotate(${f}deg)`)}if(e.rotate3d){let c=r(e.rotateX);c!==""&&c!==void 0&&c!==null&&n.push(`rotateX(${c}deg)`);let d=r(e.rotateY);d!==""&&d!==void 0&&d!==null&&n.push(`rotateY(${d}deg)`)}let k=e.offsetX?.[t]?.value,w=e.offsetY?.[t]?.value,J=k!==""&&k!==void 0&&k!==null,M=w!==""&&w!==void 0&&w!==null;if(J||M){let c=J?`${k}${e.offsetX[t].unit||"px"}`:"0",d=M?`${w}${e.offsetY[t].unit||"px"}`:"0";n.push(`translate(${c}, ${d})`)}if(e.keepProportions){let c=r(e.scale);c!==""&&c!==void 0&&c!==null&&c!=1&&n.push(`scale(${c})`)}else{let c=r(e.scaleX),d=r(e.scaleY),X=c!==""&&c!==void 0&&c!==null?c:1,h=d!==""&&d!==void 0&&d!==null?d:1;(X!=1||h!=1)&&n.push(`scale(${X}, ${h})`)}let A=r(e.skewX);A!==""&&A!==void 0&&A!==null&&n.push(`skewX(${A}deg)`);let K=r(e.skewY);return K!==""&&K!==void 0&&K!==null&&n.push(`skewY(${K}deg)`),e.flipHorizontal&&n.push("scaleX(-1)"),e.flipVertical&&n.push("scaleY(-1)"),n.length>0?n.join(" "):""},wo=()=>{let e=window.digi.responsiveState.activeDevice,t=Z[e]!==void 0?Z[e]:16,n="";N&&N!=="default"&&N!=="none"?n=`
				border-style: ${N};
				border-color: ${_||"#e0e0e0"};
				${q(W,"border-width",e)}
				${q(u,"border-radius",e)}
			`:n="border: none;";let r="box-shadow: none;";I&&I.enable&&(r=`box-shadow: ${I.position==="inset"?"inset ":""}${I.horizontal}px ${I.vertical}px ${I.blur}px ${I.spread}px ${I.color};`);let f=`${q(R,"padding",e)}`,k="";if(m){m.fontFamily&&(k+=`font-family: ${m.fontFamily};`);let a=p(m.fontSize,e);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&(k+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),m.fontWeight&&(k+=`font-weight: ${m.fontWeight};`),m.fontStyle&&(k+=`font-style: ${m.fontStyle};`),m.textTransform&&(k+=`text-transform: ${m.textTransform};`),m.textDecoration&&(k+=`text-decoration: ${m.textDecoration};`);let s=p(m.lineHeight,e);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(k+=`line-height: ${s.value}${s.unit!==null?s.unit:""};`);let b=p(m.letterSpacing,e);b&&b.value!==""&&b.value!==null&&b.value!==void 0&&(k+=`letter-spacing: ${b.value}${b.unit!==null?b.unit:""};`)}let w="";if(v){v.fontFamily&&(w+=`font-family: ${v.fontFamily};`);let a=p(v.fontSize,e);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&(w+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),v.fontWeight&&(w+=`font-weight: ${v.fontWeight};`),v.fontStyle&&(w+=`font-style: ${v.fontStyle};`),v.textTransform&&(w+=`text-transform: ${v.textTransform};`),v.textDecoration&&(w+=`text-decoration: ${v.textDecoration};`);let s=p(v.lineHeight,e);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(w+=`line-height: ${s.value}${s.unit!==null?s.unit:""};`);let b=p(v.letterSpacing,e);b&&b.value!==""&&b.value!==null&&b.value!==void 0&&(w+=`letter-spacing: ${b.value}${b.unit!==null?b.unit:""};`)}let J="";F&&F.enable&&(J=`box-shadow: ${F.position==="inset"?"inset ":""}${F.horizontal}px ${F.vertical}px ${F.blur}px ${F.spread}px ${F.color};`);let M="";if(ne&&ne!=="default"){M+=`position: ${ne} !important;`;let a=z?.[e]?.value,s=z?.[e]?.unit||"px";(a===""||a===void 0)&&(e==="tablet"?a=z?.desktop?.value:e==="mobile"&&(a=z?.tablet?.value!==""&&z?.tablet?.value!==void 0?z?.tablet?.value:z?.desktop?.value)),a!==""&&a!==void 0&&(He==="left"?M+=`left: ${a}${s};`:M+=`right: ${a}${s};`);let b=H?.[e]?.value,Le=H?.[e]?.unit||"px";(b===""||b===void 0)&&(e==="tablet"?b=H?.desktop?.value:e==="mobile"&&(b=H?.tablet?.value!==""&&H?.tablet?.value!==void 0?H?.tablet?.value:H?.desktop?.value)),b!==""&&b!==void 0&&(Me==="top"?M+=`top: ${b}${Le};`:M+=`bottom: ${b}${Le};`)}se!==""&&se!==void 0&&se!==null&&(M+=`z-index: ${se};`);let A="",K=Qe(we,e);K&&(A+=`transform: ${K};`,A+=`transform-origin: ${Ae(we,e)};`);let c=Qe(V,e);if(c&&V&&V.transitionDuration!==""&&V.transitionDuration!==void 0&&V.transitionDuration!==null){let a=V.transitionDuration;A+=`transition: transform ${a}ms ease;`}let d="";c&&(d+=`transform: ${c};`,d+=`transform-origin: ${Ae(V,e)};`);let X=`
			/* FAQ Block - ${i} */
			.${i} {
				${q(de,"margin",e)}
				width: 100%;
                ${M}
				${A}
			}

            .${i}:hover {
                ${J}
				${d}
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
				${_e==="left"?"flex-direction: row-reverse; justify-content: flex-end;":"justify-content: space-between;"}
			}
			
			.${i} .digiblocks-faq-question-text {
				color: ${ie};
				${k}
				margin: 0;
				flex: 1;
				${le?"display: flex; align-items: center; gap: .5rem;":""}
				transition: color 0.3s ease;
			}
			
			.${i} .digiblocks-faq-question-prefix {
				${xe?`color: ${xe};`:""}
				font-weight: bold;
			}
			
			.${i} .digiblocks-faq-answer-prefix {
				${$e?`color: ${$e};`:""}
				font-weight: bold;
			}
			
			.${i} .digiblocks-faq-answer-content {
				display: flex;
				${ae?"display: flex; gap: .5rem;":""}
				color: ${ce};
				${w}
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
				color: ${Te};
				transition: all 0.3s ease;
				font-size: ${p(G,e)}px;
			}
			
			.${i} .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${i} .digiblocks-faq-question-icon svg {
				width: ${p(G,e)}px;
				height: ${p(G,e)}px;
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
				${x?`color: ${x};`:""}
			}
			
			.${i} .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${me?`color: ${me};`:""}
			}
			
			/* Handle active state */
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${y};
			}
			
			.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${Be};
			}

			/* Visibility Controls */
			${S.desktop?`
				@media (min-width: 992px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${S.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${S.mobile?`
				@media (max-width: 767px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`,h="";switch(U){case"boxed":h=`
					.${i} .digiblocks-faq-item {
						${n}
						${r}
						background-color: ${E||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${t}px;
					}
					
					.${i} .digiblocks-faq-item:hover {
						${J}
						${P?`background-color: ${P};`:""}
						${T?`border-color: ${T};`:""}
					}
					
					.${i} .digiblocks-faq-question {
						${f}
					}
					
					.${i} .digiblocks-faq-answer {
						${f}
						border-top: 1px solid ${_||"#e0e0e0"};
						${D?`background-color: ${D};`:""}
					}
					
					.${i} .digiblocks-faq-item.is-active {
						${O?`background-color: ${O};`:""}
					}
				`;break;case"classic":h=`
					.${i} .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${_||"#e0e0e0"};
						background-color: transparent;
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
					}
					
					.${i} .digiblocks-faq-question {
						${f}
					}
					
					.${i} .digiblocks-faq-answer {
						${q(R,"padding",e)}
						padding-top: 0;
					}
				`;break;case"separated":h=`
					.${i} .digiblocks-faq-item {
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
					}
					
					.${i} .digiblocks-faq-question {
						${f}
						${n}
						${r}
						background-color: ${E||"#ffffff"};
					}
					
					.${i} .digiblocks-faq-question:hover {
						${x?`color: ${x};`:""}
						${P?`background-color: ${P};`:""}
						${T?`border-color: ${T};`:""}
						${J}
					}
					
					.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${y?`color: ${y};`:""}
						${O?`background-color: ${O};`:""}
					}
					
					.${i} .digiblocks-faq-answer {
						${f}
						${D?`background-color: ${D};`:""}
						${n}
						border-top: none;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
						border-bottom-left-radius: ${u&&u[e]?u[e].left+u[e].unit:"8px"};
						border-bottom-right-radius: ${u&&u[e]?u[e].right+u[e].unit:"8px"};
						margin-top: -1px;
					}
				`;break;case"minimalist":h=`
					.${i} .digiblocks-faq-item {
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					.${i} .digiblocks-faq-question {
						${f}
						border-bottom: 2px solid ${_||"#e0e0e0"};
					}
					
					.${i} .digiblocks-faq-question:hover {
						${x?`color: ${x};`:""}
						border-color: ${x||T||"#cccccc"};
					}
					
					.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${y?`color: ${y};`:""}
						border-color: ${y||"#1e73be"};
					}
					
					.${i} .digiblocks-faq-answer {
						${q(R,"padding",e)}
					}
				`;break;case"bordered":h=`
					.${i} .digiblocks-faq-item {
						${n}
						background-color: transparent;
						margin-bottom: ${t}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					.${i} .digiblocks-faq-item:hover {
						${T?`border-color: ${T};`:""}
					}
					
					.${i} .digiblocks-faq-question {
						${f}
						background-color: ${E||"#f8f9fa"};
					}
					
					.${i} .digiblocks-faq-question:hover {
						${x?`color: ${x};`:""}
						${P?`background-color: ${P};`:""}
					}
					
					.${i} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${y?`color: ${y};`:""}
						${O?`background-color: ${O};`:""}
					}
					
					.${i} .digiblocks-faq-answer {
						${f}
						${D?`background-color: ${D};`:""}
					}
					
					.${i} .digiblocks-faq-item.is-active {
						border-color: ${y||_||"#1e73be"};
					}
				`;break;default:h=`
					.${i} .digiblocks-faq-item {
						${n}
						${r}
						background-color: ${E||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${t}px;
					}
					
					.${i} .digiblocks-faq-question {
						${f}
					}
					
					.${i} .digiblocks-faq-answer {
						${f}
						border-top: 1px solid #e0e0e0;
					}
				`}let To=`
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
		`,Bo=`
			@media (max-width: 991px) {
				.${i} {
					${q(de,"margin","tablet")}
				}
				
				.${i} .digiblocks-faq-item {
					margin-bottom: ${p(Z,"tablet")||t}px;
				}
				
				.${i} .digiblocks-faq-question,
				.${i} .digiblocks-faq-answer {
					${q(R,"padding","tablet")}
				}
				
				${U==="minimalist"?`
				.${i} .digiblocks-faq-answer {
					${q(R,"padding","tablet")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${(()=>{let a=p(G,"tablet");return a?`
					.${i} .digiblocks-faq-question-icon {
						font-size: ${a}px;
					}
					
					.${i} .digiblocks-faq-question-icon svg {
						width: ${a}px;
						height: ${a}px;
					}
					`:""})()}
				
				${(()=>{let a=p(m?.fontSize,"tablet"),s=p(m?.lineHeight,"tablet");return!a&&!s?"":`
					.${i} .digiblocks-faq-question-text {
						${a?`font-size: ${a.value}${a.unit!==null?a.unit:""};`:""}
						${s?`line-height: ${s.value}${s.unit!==null?s.unit:""};`:""}
					}
					`})()}
				
				${(()=>{let a=p(v?.fontSize,"tablet"),s=p(v?.lineHeight,"tablet");return!a&&!s?"":`
					.${i} .digiblocks-faq-answer-content {
						${a?`font-size: ${a.value}${a.unit!==null?a.unit:""};`:""}
						${s?`line-height: ${s.value}${s.unit!==null?s.unit:""};`:""}
					}
					`})()}
			}
		`,zo=`
			@media (max-width: 767px) {
				.${i} {
					${q(de,"margin","mobile")}
				}
				
				.${i} .digiblocks-faq-item {
					margin-bottom: ${p(Z,"mobile")||p(Z,"tablet")||t}px;
				}
				
				.${i} .digiblocks-faq-question,
				.${i} .digiblocks-faq-answer {
					${q(R,"padding","mobile")}
				}
				
				${U==="minimalist"?`
				.${i} .digiblocks-faq-answer {
					${q(R,"padding","mobile")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${(()=>{let a=p(G,"mobile");return a?`
					.${i} .digiblocks-faq-question-icon {
						font-size: ${a}px;
					}
					
					.${i} .digiblocks-faq-question-icon svg {
						width: ${a}px;
						height: ${a}px;
					}
					`:""})()}
				
				${(()=>{let a=p(m?.fontSize,"mobile"),s=p(m?.lineHeight,"mobile");return!a&&!s?"":`
					.${i} .digiblocks-faq-question-text {
						${a?`font-size: ${a.value}${a.unit!==null?a.unit:""};`:""}
						${s?`line-height: ${s.value}${s.unit!==null?s.unit:""};`:""}
					}
					`})()}
				
				${(()=>{let a=p(v?.fontSize,"mobile"),s=p(v?.lineHeight,"mobile");return!a&&!s?"":`
					.${i} .digiblocks-faq-answer-content {
						${a?`font-size: ${a.value}${a.unit!==null?a.unit:""};`:""}
						${s?`line-height: ${s.value}${s.unit!==null?s.unit:""};`:""}
					}
					`})()}
			}
		`;return`
			${X}
			${h}
			${To}
			${Bo}
			${zo}
		`},yo=e=>e==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Question Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ie,onChange:t=>l({titleColor:t}),label:o("Text Color","digiblocks")},{value:E,onChange:t=>l({backgroundColor:t}),label:o("Background Color","digiblocks")},{value:xe,onChange:t=>l({questionPrefixColor:t}),label:o("Prefix Color","digiblocks"),disableCustomColors:!le}]})):e==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Question Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x,onChange:t=>l({titleHoverColor:t}),label:o("Text Color","digiblocks")},{value:P,onChange:t=>l({backgroundHoverColor:t}),label:o("Background Color","digiblocks")}]})):e==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Question Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:t=>l({titleActiveColor:t}),label:o("Text Color","digiblocks")},{value:O,onChange:t=>l({backgroundActiveColor:t}),label:o("Background Color","digiblocks")}]})):null,qo=e=>e==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Te,onChange:t=>l({iconColor:t}),label:o("Icon Color","digiblocks")}]})):e==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:me,onChange:t=>l({iconHoverColor:t}),label:o("Icon Color","digiblocks")}]})):e==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Icon Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Be,onChange:t=>l({iconActiveColor:t}),label:o("Icon Color","digiblocks")}]})):null,Co=()=>wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Answer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ce,onChange:e=>l({contentColor:e}),label:o("Text Color","digiblocks")},{value:D,onChange:e=>l({contentBackgroundColor:e}),label:o("Background Color","digiblocks")},{value:$e,onChange:e=>l({answerPrefixColor:e}),label:o("Prefix Color","digiblocks"),disableCustomColors:!ae}]})),So=()=>{switch(Pe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($,{tab:"options",name:"content-settings",title:o("Items","digiblocks"),initialOpen:!0},wp.element.createElement(ge,{label:o("Allow Multiple Open","digiblocks"),checked:ke,onChange:()=>l({allowMultipleOpen:!ke}),help:o("When enabled, multiple FAQ items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Q,{label:o("Layout","digiblocks"),value:U,options:co,onChange:e=>l({layout:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"question-prefix",className:"components-base-control__label"},o("Question Prefix","digiblocks")),wp.element.createElement(ue,{id:"question-prefix",value:le||"",onChange:e=>l({questionPrefix:e}),placeholder:o("Example: Q:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},o("Add a prefix to questions (e.g., 'Q:').","digiblocks")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"answer-prefix",className:"components-base-control__label"},o("Answer Prefix","digiblocks")),wp.element.createElement(ue,{id:"answer-prefix",value:ae||"",onChange:e=>l({answerPrefix:e}),placeholder:o("Example: A:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},o("Add a prefix to answers (e.g., 'A:').","digiblocks")))),wp.element.createElement(je,{label:o("Items Spacing","digiblocks")},wp.element.createElement(ye,{value:Z[Y],onChange:e=>l({itemsSpacing:{...Z,[Y]:e}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement($,{tab:"options",name:"icon-settings",title:o("Icon Settings","digiblocks"),initialOpen:!1},wp.element.createElement(Q,{label:o("Icon Type","digiblocks"),value:ze,options:no,onChange:e=>l({iconType:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Q,{label:o("Icon Position","digiblocks"),value:_e,options:so,onChange:e=>l({iconPosition:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(je,{label:o("Icon Size","digiblocks")},wp.element.createElement(ye,{value:G[Y],onChange:e=>l({iconSize:{...G,[Y]:e}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement($,{tab:"options",name:"schema-settings",title:o("SEO Schema","digiblocks"),initialOpen:!1},wp.element.createElement(Q,{label:o("Schema Type","digiblocks"),value:Ke,options:uo,onChange:e=>l({schemaType:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ue,{label:o("Schema Name","digiblocks"),value:eo,onChange:e=>l({schemaName:e}),placeholder:o("Example: Product FAQ","digiblocks"),help:o("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement($,{tab:"options",name:"heading-settings",title:o("HTML Settings","digiblocks"),initialOpen:!1},wp.element.createElement(Q,{label:o("Question Tag","digiblocks"),value:Je,options:ro,onChange:e=>l({titleTag:e}),help:o("HTML tag for questions. Default is h3.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($,{tab:"style",name:"question-styles",title:o("Question Styles","digiblocks"),initialOpen:!0},wp.element.createElement(Ve,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:De},e=>yo(e.name)),wp.element.createElement(We,{label:o("Question Typography","digiblocks"),value:m,onChange:e=>l({titleTypography:e})})),wp.element.createElement($,{tab:"style",name:"answer-styles",title:o("Answer Styles","digiblocks"),initialOpen:!1},Co(),wp.element.createElement(We,{label:o("Answer Typography","digiblocks"),value:v,onChange:e=>l({contentTypography:e})})),wp.element.createElement($,{tab:"style",name:"icon-styles",title:o("Icon Styles","digiblocks"),initialOpen:!1},wp.element.createElement(Ve,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:De},e=>qo(e.name))),wp.element.createElement($,{tab:"style",name:"border-box",title:o("Border & Radius","digiblocks"),initialOpen:!1},U!=="classic"&&U!=="minimalist"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Q,{label:o("Border Style","digiblocks"),value:N||"default",options:lo,onChange:e=>{e!=="default"&&e!=="none"&&(N==="default"||N==="none"||!N)&&((!W||Object.keys(W).length===0)&&l({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!u||Object.keys(u).length===0)&&l({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),l({borderStyle:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),N&&N!=="default"&&N!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{title:o("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:_,onChange:e=>l({borderColor:e}),label:o("Border Color","digiblocks")},{value:T,onChange:e=>l({borderHoverColor:e}),label:o("Border Hover Color","digiblocks")}]}),wp.element.createElement(fe,{label:o("Border Width","digiblocks"),value:W,onChange:e=>l({borderWidth:e})}),wp.element.createElement(fe,{label:o("Border Radius","digiblocks"),value:u,onChange:e=>l({borderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement($,{tab:"style",name:"shadow",title:o("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Do,{normalValue:I,hoverValue:F,onNormalChange:e=>l({boxShadow:e}),onHoverChange:e=>l({boxShadowHover:e})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($,{tab:"advanced",name:"spacing",title:o("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(fe,{label:o("Padding","digiblocks"),value:R,onChange:e=>l({padding:e})}),wp.element.createElement(fe,{label:o("Margin","digiblocks"),value:de,onChange:e=>l({margin:e})})),wp.element.createElement($,{tab:"advanced",name:"position",title:o("Position","digiblocks"),initialOpen:!1},wp.element.createElement(Q,{label:o("Position","digiblocks"),value:ne,options:[{label:o("Default","digiblocks"),value:"default"},{label:o("Relative","digiblocks"),value:"relative"},{label:o("Absolute","digiblocks"),value:"absolute"},{label:o("Fixed","digiblocks"),value:"fixed"}],onChange:e=>l({position:e}),__nextHasNoMarginBottom:!0}),ne!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ye,{label:o("Horizontal Orientation","digiblocks"),value:He,isBlock:!0,onChange:e=>l({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(pe,{value:"left",label:o("Left","digiblocks")}),wp.element.createElement(pe,{value:"right",label:o("Right","digiblocks")})),wp.element.createElement(Ee,{label:o("Offset","digiblocks"),value:z,onChange:e=>l({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Ie(z?.[Y]?.unit||"px"),step:Fe(z?.[Y]?.unit||"px")}),wp.element.createElement(Ye,{label:o("Vertical Orientation","digiblocks"),value:Me,isBlock:!0,onChange:e=>l({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(pe,{value:"top",label:o("Top","digiblocks")}),wp.element.createElement(pe,{value:"bottom",label:o("Bottom","digiblocks")})),wp.element.createElement(Ee,{label:o("Offset","digiblocks"),value:H,onChange:e=>l({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Ie(H?.[Y]?.unit||"px"),step:Fe(H?.[Y]?.unit||"px")})),wp.element.createElement(ye,{label:o("Z-Index","digiblocks"),value:se,onChange:e=>l({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement($,{tab:"advanced",name:"transform",title:o("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(Fo,{normalValue:we,hoverValue:V,onNormalChange:e=>l({transform:e}),onHoverChange:e=>l({transformHover:e})})),wp.element.createElement($,{tab:"advanced",name:"animation",title:o("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(Q,{label:o("Animation Effect","digiblocks"),value:B,options:ao,onChange:e=>l({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B&&B!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Q,{label:o("Animation Duration","digiblocks"),value:ve,options:[{label:o("Slow","digiblocks"),value:"slow"},{label:o("Normal","digiblocks"),value:"normal"},{label:o("Fast","digiblocks"),value:"fast"}],onChange:e=>l({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ue,{label:o("Animation Delay (ms)","digiblocks"),value:he||0,onChange:e=>l({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),B&&B!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(oe,{variant:"secondary",isSecondary:!0,onClick:io,style:{width:"100%"}},o("Preview Animation","digiblocks")))),wp.element.createElement($,{tab:"advanced",name:"visibility",title:o("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,o("Editor Note:","digiblocks")),wp.element.createElement("br",null),o("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ge,{label:o("Hide on Desktop","digiblocks"),checked:S.desktop,onChange:e=>l({visibility:{...S,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ge,{label:o("Hide on Tablet","digiblocks"),checked:S.tablet,onChange:e=>l({visibility:{...S,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ge,{label:o("Hide on Mobile","digiblocks"),checked:S.mobile,onChange:e=>l({visibility:{...S,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement($,{tab:"advanced",name:"additional",title:o("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},o("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:ee||"",onChange:e=>l({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},o(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},o("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},o("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:re||"",onChange:e=>l({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},o("Separate multiple classes with spaces.","digiblocks")))))}},No=()=>!g||g.length===0?wp.element.createElement("div",{className:"digiblocks-no-items"},wp.element.createElement("p",null,o("No FAQ items found. Please add some items.","digiblocks"))):g.map((e,t)=>{let n=t===g.length-1;return wp.element.createElement("div",{key:e.id,className:`digiblocks-faq-item ${e.isOpen?"is-active":""}`,style:n?{marginBottom:0}:{}},wp.element.createElement("div",{className:"digiblocks-faq-question",onClick:()=>ho(t)},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},le&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},le),wp.element.createElement(Re,{tagName:"span",value:e.title,onChange:r=>ko(r,t),placeholder:o("Enter question...","digiblocks"),allowedFormats:["core/bold","core/italic"],className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},$o(e.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},ae&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},ae),wp.element.createElement(Re,{tagName:"div",value:e.content,onChange:r=>xo(r,t),placeholder:o("Enter answer...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/image","core/list"],className:"digiblocks-faq-answer-text"}))),wp.element.createElement("div",{className:"digiblocks-faq-item-controls"},wp.element.createElement(be,{text:o("Move Up","digiblocks")},wp.element.createElement(oe,{className:"digiblocks-faq-item-move-up",onClick:()=>mo(t),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},wp.element.createElement("path",{d:"M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"})),disabled:t===0,isSmall:!0})),wp.element.createElement(be,{text:o("Move Down","digiblocks")},wp.element.createElement(oe,{className:"digiblocks-faq-item-move-down",onClick:()=>vo(t),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},wp.element.createElement("path",{d:"M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"})),disabled:t===g.length-1,isSmall:!0})),wp.element.createElement(be,{text:o("Duplicate","digiblocks")},wp.element.createElement(oe,{className:"digiblocks-faq-item-duplicate",onClick:()=>fo(t),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"})),isSmall:!0})),wp.element.createElement(be,{text:o("Remove","digiblocks")},wp.element.createElement(oe,{className:"digiblocks-faq-item-remove",onClick:()=>po(t),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"})),isSmall:!0}))))}),_o=Ho({className:`digiblocks-faq-block ${i} ${U||"boxed"} ${re||""}`,id:ee||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mo,null,wp.element.createElement(Io,{tabs:go,activeTab:Pe,onSelect:oo},So())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:wo()}}),wp.element.createElement("div",{..._o},wp.element.createElement("div",{className:"digiblocks-faq-items"},No()),wp.element.createElement(oe,{variant:"primary",icon:"plus",onClick:bo,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},o("Add FAQ Item","digiblocks"))))},Ge=Ao;var{useBlockProps:Qo,RichText:Ue}=window.wp.blockEditor,Lo=({attributes:te})=>{let{id:l,anchor:L,customClasses:i,items:ee,titleTag:S,layout:re,questionPrefix:g,answerPrefix:ie,animation:x,animationDuration:y,animationDelay:E,allowMultipleOpen:P,iconType:O}=te,ce=["digiblocks-faq-block",l,re||"boxed",i||"",x!=="none"?`animate-${x} digi-animate-hidden`:""].filter(Boolean).join(" "),D=(u,W=O)=>{switch(W){case"plusMinus":return u?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${u?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${u?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${u?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return u?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return u?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},_=Qo.save({className:ce,id:L||null,"data-allow-multiple":P?"true":"false"});x&&x!=="none"&&(_["data-animation-duration"]=y||"normal",_["data-animation-delay"]=E||0);let T=()=>!ee||ee.length===0?null:ee.map((u,W)=>wp.element.createElement("div",{key:u.id,className:`digiblocks-faq-item ${u.isOpen?"is-active":""}`,"data-item-id":u.id},wp.element.createElement("div",{className:"digiblocks-faq-question"},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},g&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},g),wp.element.createElement(Ue.Content,{tagName:S||"h3",value:u.title,className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},D(u.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},ie&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},ie),wp.element.createElement(Ue.Content,{tagName:"div",className:"digiblocks-faq-answer-text",value:u.content})))));return wp.element.createElement("div",{..._},wp.element.createElement("div",{className:"digiblocks-faq-items"},T()))},Ze=Lo;var{__:C}=window.wp.i18n,{registerBlockType:Ro}=window.wp.blocks;Ro("digiblocks/faq",{apiVersion:2,title:digiBlocksData.blocks.faq.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:l}=digiBlocksData.blocks.faq.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:l}))}},description:digiBlocksData.blocks.faq.description,keywords:[C("faq","digiblocks"),C("questions","digiblocks"),C("answers","digiblocks"),C("schema","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"faq-item-1",title:C("What is a frequently asked question?","digiblocks"),content:C("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:C("How do I add more questions and answers?","digiblocks"),content:C('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.',"digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:""},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentBackgroundColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px",isLinked:!1},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:18,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:""},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:"",mobile:""}},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"},titleTag:{type:"string",default:"h3"},questionPrefix:{type:"string",default:""},questionPrefixColor:{type:"string",default:""},answerPrefix:{type:"string",default:""},answerPrefixColor:{type:"string",default:""},layout:{type:"string",default:"boxed"},itemsSpacing:{type:"object",default:{desktop:16,tablet:"",mobile:""}},schemaType:{type:"string",default:"FAQPage"},schemaName:{type:"string",default:""},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{items:[{id:"faq-item-1",title:C("What is a frequently asked question?","digiblocks"),content:C("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:C("How do I add more questions?","digiblocks"),content:C('Click the "Add FAQ Item" button to add more questions and answers.',"digiblocks"),isOpen:!1}],layout:"boxed",titleColor:"",titleActiveColor:"#1e73be",backgroundColor:"#ffffff"}},edit:Ge,save:Ze});})();
