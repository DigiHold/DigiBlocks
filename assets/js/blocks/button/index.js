(()=>{var{__:t}=window.wp.i18n,{useBlockProps:st,RichText:rt,InspectorControls:dt,PanelColorSettings:Ce,LinkControl:ct}=window.wp.blockEditor,{TextControl:ut,SelectControl:j,TabPanel:$e,ToggleControl:K,RangeControl:pt,Button:bt,Spinner:gt,__experimentalToggleGroupControl:de,__experimentalToggleGroupControlOption:V}=window.wp.components,{useState:ce,useEffect:Se,useRef:ft}=window.wp.element,{useBlockId:mt,getDimensionCSS:ue,animations:_e,animationPreview:Xe}=digi.utils,{tabIcons:Te}=digi.icons,{ResponsiveRangeControl:Q,DimensionControl:pe,BoxShadowControl:vt,TypographyControl:ht,CustomTabPanel:kt,TabPanelBody:m,TransformControl:xt}=digi.components,yt=({attributes:ge,setAttributes:l,clientId:W,isSelected:Be})=>{let{id:o,anchor:G,visibility:k,customClasses:A,text:ee,url:M,opensInNewTab:Y,rel:te,iconSource:I,customSvg:N,iconValue:p,iconPosition:oe,iconWidth:le,iconHeight:L,iconGap:F,iconColor:O,iconHoverColor:R,size:fe,fill:U,textColor:E,textHoverColor:ne,backgroundColor:ae,backgroundHoverColor:ie,borderStyle:x,borderWidth:se,borderRadius:Ne,borderColor:He,borderHoverColor:me,boxShadow:_,boxShadowHover:T,padding:ve,margin:ze,onlyIcon:re,buttonTypography:f,animation:w,animationDuration:he,animationDelay:ke,position:q,horizontalOrientation:Ve,horizontalOffset:C,verticalOrientation:Ie,verticalOffset:$,zIndex:Z,hoverEffect:v,transform:xe,transformHover:H}=ge;mt(o,W,l);let[J,Fe]=ce(window.digi.responsiveState.activeDevice),[St,Oe]=ce(!1),[Pe,Ue]=ce(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(W);if(e)return e}return"options"}),[ye,qe]=ce(!1),Ze=e=>{l({iconValue:e})};Se(()=>{let e=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(qe(!0),!0):!1;if(!e()){let n=setTimeout(()=>{e()&&clearTimeout(n)},500);return()=>clearTimeout(n)}},[]),Se(()=>window.digi.responsiveState.subscribe(n=>{Fe(n)}),[]);let X=(e,n)=>{if(!e||typeof e!="object")return null;let s=d=>d===""||d===void 0||d===null?!0:typeof d=="object"&&d!==null?d.value===""||d.value===void 0||d.value===null:!1;return n==="mobile"?s(e.mobile)?s(e.tablet)?e.desktop:e.tablet:e.mobile:n==="tablet"?s(e.tablet)?e.desktop:e.tablet:e.desktop},Je=[{label:t("Default","digiblocks"),value:"default"},{label:t("None","digiblocks"),value:"none"},{label:t("Solid","digiblocks"),value:"solid"},{label:t("Dotted","digiblocks"),value:"dotted"},{label:t("Dashed","digiblocks"),value:"dashed"},{label:t("Double","digiblocks"),value:"double"},{label:t("Groove","digiblocks"),value:"groove"},{label:t("Inset","digiblocks"),value:"inset"},{label:t("Outset","digiblocks"),value:"outset"},{label:t("Ridge","digiblocks"),value:"ridge"}],Ke=[{label:t("Small","digiblocks"),value:"small"},{label:t("Medium","digiblocks"),value:"medium"},{label:t("Large","digiblocks"),value:"large"}],Qe=[{name:"options",title:t("Options","digiblocks"),icon:Te.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:Te.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:Te.advancedIcon}],we=[{name:"normal",title:t("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:t("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],De=ft(null);Se(()=>{if(w&&w!=="none"){let e=setTimeout(()=>{Xe(o,w,_e,De,he,ke)},100);return()=>clearTimeout(e)}},[w]);let Ae=[{label:t("None","digiblocks"),value:"none"},...Object.keys(_e).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,n=>n.toUpperCase()),value:e}))],et=()=>{Xe(o,w,_e,De,he,ke)},tt=ye?window.digi.components.FontAwesomeControl:null,Me=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"vw":case"vh":return 100;default:return 2e3}},Ye=e=>{switch(e){case"%":case"vw":case"vh":return 1;case"em":case"rem":return .1;default:return 1}},Le=(e,n)=>{let s={left:"0%",center:"50%",right:"100%"},d={top:"0%",center:"50%",bottom:"100%"},y=s[e.xAnchor?.[n]||"center"],z=d[e.yAnchor?.[n]||"center"];return`${y} ${z}`},Re=(e,n)=>{if(!e)return"";let s=[],d=i=>{if(!i)return"";let r=i[n],b=g=>g===""||g===void 0||g===null?!0:typeof g=="object"&&g!==null?g.value===""||g.value===void 0||g.value===null:!1;return n==="tablet"&&b(r)&&(r=i.desktop),n==="mobile"&&b(r)&&(r=i.tablet,b(r)&&(r=i.desktop)),typeof r=="object"&&r!==null?r.value!==void 0?r.value:"":r},y=d(e.rotate);if(y!==""&&y!==void 0&&y!==null){if(e.rotate3d){let i=d(e.perspective);i!==""&&i!==void 0&&i!==null&&s.push(`perspective(${i}px)`)}s.push(`rotate(${y}deg)`)}if(e.rotate3d){let i=d(e.rotateX);i!==""&&i!==void 0&&i!==null&&s.push(`rotateX(${i}deg)`);let r=d(e.rotateY);r!==""&&r!==void 0&&r!==null&&s.push(`rotateY(${r}deg)`)}let z=e.offsetX?.[n]?.value,P=e.offsetY?.[n]?.value,h=z!==""&&z!==void 0&&z!==null,S=P!==""&&P!==void 0&&P!==null;if(h||S){let i=h?`${z}${e.offsetX[n].unit||"px"}`:"0",r=S?`${P}${e.offsetY[n].unit||"px"}`:"0";s.push(`translate(${i}, ${r})`)}if(e.keepProportions){let i=d(e.scale);i!==""&&i!==void 0&&i!==null&&i!=1&&s.push(`scale(${i})`)}else{let i=d(e.scaleX),r=d(e.scaleY),b=i!==""&&i!==void 0&&i!==null?i:1,g=r!==""&&r!==void 0&&r!==null?r:1;(b!=1||g!=1)&&s.push(`scale(${b}, ${g})`)}let B=d(e.skewX);B!==""&&B!==void 0&&B!==null&&s.push(`skewX(${B}deg)`);let D=d(e.skewY);return D!==""&&D!==void 0&&D!==null&&s.push(`skewY(${D}deg)`),e.flipHorizontal&&s.push("scaleX(-1)"),e.flipVertical&&s.push("scaleY(-1)"),s.length>0?s.join(" "):""},ot=()=>{let e=J,n=ue(ve,"padding",e),s="";if(x&&x!=="default"&&x!=="none"){let u=ue(se,"border-width",e)||"border-width: 1px 1px 1px 1px;";s=`
                border-style: ${x};
                border-color: ${He};
                ${u}
            `}else s="border: none;";let d="";d=ue(Ne,"border-radius",e);let y="box-shadow: none;";_&&_.enable&&(y=`box-shadow: ${_.position==="inset"?"inset ":""}${_.horizontal}px ${_.vertical}px ${_.blur}px ${_.spread}px ${_.color};`);let z=ue(ze,"margin",e),P="";if(T&&T.enable){let a=T.position==="inset"?"inset ":"";P+=`box-shadow: ${a}${T.horizontal}px ${T.vertical}px ${T.blur}px ${T.spread}px ${T.color};`}let h="";if(f){f.fontFamily&&(h+=`font-family: ${f.fontFamily};`);let a=X(f.fontSize,e);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&(h+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),f.fontWeight&&(h+=`font-weight: ${f.fontWeight};`),f.fontStyle&&(h+=`font-style: ${f.fontStyle};`),f.textTransform&&(h+=`text-transform: ${f.textTransform};`),f.textDecoration&&(h+=`text-decoration: ${f.textDecoration};`);let u=X(f.lineHeight,e);u&&u.value!==""&&u.value!==null&&u.value!==void 0&&(h+=`line-height: ${u.value}${u.unit!==null?u.unit:""};`);let c=X(f.letterSpacing,e);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(h+=`letter-spacing: ${c.value}${c.unit!==null?c.unit:""};`)}let S="";if(q&&q!=="default"){S+=`position: ${q} !important;`;let a=C?.[e]?.value,u=C?.[e]?.unit||"px";(a===""||a===void 0)&&(e==="tablet"?a=C?.desktop?.value:e==="mobile"&&(a=C?.tablet?.value!==""&&C?.tablet?.value!==void 0?C?.tablet?.value:C?.desktop?.value)),a!==""&&a!==void 0&&(Ve==="left"?S+=`left: ${a}${u};`:S+=`right: ${a}${u};`);let c=$?.[e]?.value,Ee=$?.[e]?.unit||"px";(c===""||c===void 0)&&(e==="tablet"?c=$?.desktop?.value:e==="mobile"&&(c=$?.tablet?.value!==""&&$?.tablet?.value!==void 0?$?.tablet?.value:$?.desktop?.value)),c!==""&&c!==void 0&&(Ie==="top"?S+=`top: ${c}${Ee};`:S+=`bottom: ${c}${Ee};`)}Z!==""&&Z!==void 0&&Z!==null&&(S+=`z-index: ${Z};`);let B="",D=Re(xe,e);D&&(B+=`transform: ${D};`,B+=`transform-origin: ${Le(xe,e)};`);let i=Re(H,e);if(i&&H&&H.transitionDuration!==""&&H.transitionDuration!==void 0&&H.transitionDuration!==null){let a=H.transitionDuration;B+=`transition: transform ${a}ms ease;`}let r="";i&&(r+=`transform: ${i};`,r+=`transform-origin: ${Le(H,e)};`);let b="",g=ie||ae;if(v&&v!=="none")switch(v){case"sweep-corners":b=`
						.${o} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${o}::before, .${o}::after, .${o} .digiblocks-button-content-wrapper::before, .${o} .digiblocks-button-content-wrapper::after {
							content: "";
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							left: 0;
							background-color: ${g};
							transition: all 0.5s ease;
							z-index: -1;
						}
						.${o}::before {
							transform: translate(-100%, -100%);
						}
						.${o}::after {
							transform: translate(-100%, 100%);
						}
						.${o} .digiblocks-button-content-wrapper::before {
							transform: translate(100%, -100%);
						}
						.${o} .digiblocks-button-content-wrapper::after {
							transform: translate(100%, 100%);
						}
						.${o}:hover::before {
							transform: translate(-49%, -49%);
						}
						.${o}:hover::after {
							transform: translate(-49%, 49%);
						}
						.${o}:hover .digiblocks-button-content-wrapper::before {
							transform: translate(50%, -50%);
						}
						.${o}:hover .digiblocks-button-content-wrapper::after {
							transform: translate(50%, 50%);
						}
						.${o} .digiblocks-button-text {
							position: relative;
							z-index: 1;
						}
					`;break;case"sweep-to-right":b=`
						.${o} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${o}::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 0;
							height: 100%;
							background-color: ${g};
							transition: width 0.4s ease;
							z-index: -1;
						}
						.${o}:hover::before {
							width: 100%;
						}
					`;break;case"sweep-to-left":b=`
						.${o} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${o}::before {
							content: "";
							position: absolute;
							top: 0;
							right: 0;
							width: 0;
							height: 100%;
							background-color: ${g};
							transition: width 0.4s ease;
							z-index: -1;
						}
						.${o}:hover::before {
							width: 100%;
						}
					`;break;case"sweep-to-top":b=`
						.${o} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${o}::before {
							content: "";
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							height: 0;
							background-color: ${g};
							transition: height 0.4s ease;
							z-index: -1;
						}
						.${o}:hover::before {
							height: 100%;
						}
					`;break;case"sweep-to-bottom":b=`
						.${o} {
							overflow: hidden;
							position: relative;
							z-index: 0;
						}
						.${o}::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 0;
							background-color: ${g};
							transition: height 0.4s ease;
							z-index: -1;
						}
						.${o}:hover::before {
							height: 100%;
						}
					`;break;case"grow-shadow":b=`
						.${o} {
							transition: all 0.3s ease, box-shadow 0.3s ease;
						}
						.${o}:hover {
							transform: translateY(-3px);
							box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
						}
					`;break;case"pulse":b=`
						.${o} {
							transition: all 0.3s ease;
						}
						.${o}:hover {
							animation: button-pulse 0.6s ease-in-out;
						}
						@keyframes button-pulse {
							0%, 100% { transform: scale(1); }
							50% { transform: scale(1.05); }
						}
					`;break;case"bounce":b=`
						.${o} {
							transition: all 0.3s ease;
						}
						.${o}:hover {
							animation: button-bounce 0.6s ease;
						}
						@keyframes button-bounce {
							0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
							40% { transform: translateY(-10px); }
							60% { transform: translateY(-5px); }
						}
					`;break;case"border-expand":b=`
						.${o} {
							position: relative;
							overflow: hidden;
						}
						.${o}::before {
							content: "";
							position: absolute;
							top: 50%;
							left: 50%;
							width: 0;
							height: 0;
							border: 2px solid ${g};
							border-radius: inherit;
							transform: translate(-50%, -50%);
							transition: all 0.4s ease;
							opacity: 0;
						}
						.${o}:hover::before {
							width: calc(100% - 8px);
							height: calc(100% - 8px);
							opacity: 1;
						}
					`;break;case"shine":b=`
						.${o} {
							position: relative;
							overflow: hidden;
						}
						.${o}::after {
							content: "";
							position: absolute;
							top: 0;
							left: -100%;
							width: 50%;
							height: 100%;
							background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
							transition: left 0.6s ease;
						}
						.${o}:hover::after {
							left: 100%;
						}
					`;break;default:break}return`
            /* Button Block - ${o} */
            .${o} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease;
                ${n}
                ${s}
                ${d}
                ${y}
                ${z}
                ${U?"width: 100%;":""}
                ${(()=>{let a=X(F,e);return a&&a.value!==""&&a.value!==null&&a.value!==void 0?`gap: ${a.value}${a.unit||"px"};`:"gap: 8px;"})()}
                ${ae?`background-color: ${ae};`:""}
                ${E?`color: ${E};`:""}
                ${S}
				${B}
            }

            .${o}:hover {
                ${ne?`color: ${ne};`:""}
                ${(!v||["none","grow-shadow","pulse","bounce","shine"].includes(v))&&ie?`background-color: ${ie};`:""}
                ${me?`border-color: ${me};`:""}
                ${P}
				${r}
            }

			${b}

            /* Icon styles */
            .${o} .digiblocks-button-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                ${O?`color: ${O};`:""}
            }

            .${o} .digiblocks-button-icon svg {
                ${(()=>{let a=X(le,e),u=X(L,e),c="";return a&&a.value!==""&&a.value!==null&&a.value!==void 0?c+=`width: ${a.value}${a.unit||"px"};`:c+="width: 1em;",u&&u.value!==""&&u.value!==null&&u.value!==void 0?c+=`height: ${u.value}${u.unit||"px"};`:c+="height: 1em;",c+="fill: currentColor;",c})()}
            }

            .${o}:hover .digiblocks-button-icon {
                ${R?`color: ${R};`:""}
            }
            
            /* Button typography */
            .${o} {
                ${h}
            }

			/* Visibility Controls */
			${k.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${k.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${k.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},lt=()=>I==="library"&&p&&p.svg&&p.svg.trim()!==""?wp.element.createElement("span",{key:"icon",className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:p.svg}}):I==="custom"&&N&&N.trim()!==""?wp.element.createElement("span",{key:"icon",className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:N}}):null,nt=()=>{let e=lt(),n=re?null:wp.element.createElement(rt,{key:"text",value:ee,onChange:y=>l({text:y}),placeholder:t("Add text\u2026","digiblocks"),allowedFormats:[],withoutInteractiveFormatting:!0,identifier:"text"}),s=oe==="left"?[e,n].filter(Boolean):[n,e].filter(Boolean);return v&&v!=="none"&&["sweep-corners","sweep-to-right","sweep-to-left","sweep-to-top","sweep-to-bottom"].includes(v)?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("span",{className:"digiblocks-button-content-wrapper"},wp.element.createElement("span",{className:"digiblocks-button-text"},s))):s},at=()=>{switch(Pe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(m,{tab:"options",name:"icon",title:t("Icon","digiblocks"),initialOpen:!0},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement(de,{label:t("Icon Source","digiblocks"),value:I||"library",onChange:e=>l({iconSource:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(V,{value:"library",label:t("Library","digiblocks")}),wp.element.createElement(V,{value:"custom",label:t("Custom","digiblocks")})),I==="library"&&wp.element.createElement(wp.element.Fragment,null,ye?wp.element.createElement(tt,{label:t("Select Icon","digiblocks"),value:p,onChange:Ze}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(gt,null),wp.element.createElement("p",null,t("Loading icon selector...","digiblocks"))),p&&ye&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,t("Selected Icon:","digiblocks"))," ",p.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,t("Style:","digiblocks"))," ",p.style),p.categories&&p.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,t("Categories:","digiblocks"))," ",p.categories.join(", "))))),I==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},t("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:N||"",onChange:e=>{let n=e.target.value;l({customSvg:n,iconValue:{id:"custom-svg",name:"Custom SVG",svg:n,style:"custom",categories:["custom"]}})},placeholder:t("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},t("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),N&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,t("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:N}}))))),p&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(K,{label:t("Only Icon","digiblocks"),checked:re,onChange:e=>l({onlyIcon:e}),__nextHasNoMarginBottom:!0}),!re&&wp.element.createElement(de,{label:t("Icon Position","digiblocks"),value:oe,onChange:e=>l({iconPosition:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(V,{value:"left",label:t("Left","digiblocks")}),wp.element.createElement(V,{value:"right",label:t("Right","digiblocks")})))),wp.element.createElement(m,{tab:"options",name:"link",title:t("Link","digiblocks"),initialOpen:!1},wp.element.createElement(ct,{value:M?{url:M,opensInNewTab:Y,rel:te}:void 0,onChange:e=>{l({url:e.url,opensInNewTab:e.opensInNewTab,rel:e.rel||""}),Oe(!1)},settings:[{id:"opensInNewTab",title:t("Open in new tab")},{id:"rel",title:t("Add noopener noreferrer")}],onRemove:()=>{l({url:"",opensInNewTab:!1,rel:""}),Oe(!1)}})),wp.element.createElement(m,{tab:"options",name:"size",title:t("Size and Fill","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Size","digiblocks"),value:fe,options:Ke,onChange:e=>{let n={...ve};e==="small"?n.desktop={top:"8",right:"16",bottom:"8",left:"16",unit:"px",isLinked:!1}:e==="large"?n.desktop={top:"16",right:"32",bottom:"16",left:"32",unit:"px",isLinked:!1}:e==="medium"&&(n.desktop={top:"12",right:"24",bottom:"12",left:"24",unit:"px",isLinked:!1}),l({size:e,padding:n})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(K,{label:t("Expand to Container Width","digiblocks"),checked:U,onChange:e=>l({fill:e}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(m,{tab:"style",name:"typography",title:t("Typography","digiblocks"),initialOpen:!0},wp.element.createElement(ht,{label:t("Button Typography","digiblocks"),value:f,onChange:e=>l({buttonTypography:e})})),p&&wp.element.createElement(m,{tab:"style",name:"icon",title:t("Icon","digiblocks"),initialOpen:!1},wp.element.createElement(Q,{label:t("Icon Width","digiblocks"),value:le,onChange:e=>l({iconWidth:e}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultValues:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},min:0,max:200,step:1}),wp.element.createElement(Q,{label:t("Icon Height","digiblocks"),value:L,onChange:e=>l({iconHeight:e}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultValues:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},min:0,max:200,step:1}),!re&&wp.element.createElement(Q,{label:t("Gap","digiblocks"),value:F,onChange:e=>l({iconGap:e}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultValues:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},min:0,max:100,step:1}),wp.element.createElement($e,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:we},e=>wp.element.createElement(Ce,{title:e.name==="normal"?t("Icon Colors","digiblocks"):t("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:e.name==="normal"?O:R,onChange:n=>l(e.name==="normal"?{iconColor:n}:{iconHoverColor:n}),label:t("Icon Color","digiblocks")}]}))),wp.element.createElement(m,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement($e,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:we},e=>wp.element.createElement(Ce,{title:e.name==="normal"?t("Normal Colors","digiblocks"):t("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:e.name==="normal"?E:ne,onChange:n=>l(e.name==="normal"?{textColor:n}:{textHoverColor:n}),label:t("Text Color","digiblocks")},{value:e.name==="normal"?ae:ie,onChange:n=>l(e.name==="normal"?{backgroundColor:n}:{backgroundHoverColor:n}),label:t("Background Color","digiblocks")}]}))),wp.element.createElement(m,{tab:"style",name:"hover-effect",title:t("Hover Effect","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Hover Effect","digiblocks"),value:v||"none",options:[{label:t("None","digiblocks"),value:"none"},{label:t("Sweep from Corners","digiblocks"),value:"sweep-corners"},{label:t("Sweep to Right","digiblocks"),value:"sweep-to-right"},{label:t("Sweep to Left","digiblocks"),value:"sweep-to-left"},{label:t("Sweep to Top","digiblocks"),value:"sweep-to-top"},{label:t("Sweep to Bottom","digiblocks"),value:"sweep-to-bottom"},{label:t("Grow Shadow","digiblocks"),value:"grow-shadow"},{label:t("Pulse","digiblocks"),value:"pulse"},{label:t("Bounce","digiblocks"),value:"bounce"},{label:t("Border Expand","digiblocks"),value:"border-expand"},{label:t("Shine","digiblocks"),value:"shine"}],onChange:e=>l({hoverEffect:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v&&v!=="none"&&wp.element.createElement("div",{style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginTop:"12px"}},wp.element.createElement("p",{style:{margin:0,fontSize:"13px"}},wp.element.createElement("strong",null,t("Note:","digiblocks"))," ",["sweep-corners","sweep-to-right","sweep-to-left","sweep-to-top","sweep-to-bottom","border-expand"].includes(v)?t("The sweep/border color will use the hover background color if set, otherwise the normal background color.","digiblocks"):t("The hover background color will be applied along with this effect.","digiblocks")))),wp.element.createElement(m,{tab:"style",name:"box-style",title:t("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Border Style","digiblocks"),value:x||"default",options:Je,onChange:e=>{e!=="default"&&e!=="none"&&(x==="default"||x==="none"||!x)&&(!se||Object.keys(se).length===0)&&l({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),l({borderStyle:e})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),x&&x!=="default"&&x!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($e,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:we},e=>wp.element.createElement(Ce,{title:t("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:e.name==="normal"?He:me,onChange:n=>l(e.name==="normal"?{borderColor:n}:{borderHoverColor:n}),label:t("Border Color","digiblocks")}]})),wp.element.createElement(pe,{label:t("Border Width","digiblocks"),value:se,onChange:e=>l({borderWidth:e})})),wp.element.createElement(pe,{label:t("Border Radius","digiblocks"),value:Ne,onChange:e=>l({borderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(m,{tab:"style",name:"shadow",title:t("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(vt,{normalValue:_,hoverValue:T,onNormalChange:e=>l({boxShadow:e}),onHoverChange:e=>l({boxShadowHover:e})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(m,{tab:"advanced",name:"spacing",title:t("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(pe,{label:t("Padding","digiblocks"),value:ve,onChange:e=>l({padding:e})}),wp.element.createElement(pe,{label:t("Margin","digiblocks"),value:ze,onChange:e=>l({margin:e})})),wp.element.createElement(m,{tab:"advanced",name:"position",title:t("Position","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Position","digiblocks"),value:q,options:[{label:t("Default","digiblocks"),value:"default"},{label:t("Relative","digiblocks"),value:"relative"},{label:t("Absolute","digiblocks"),value:"absolute"},{label:t("Fixed","digiblocks"),value:"fixed"}],onChange:e=>l({position:e}),__nextHasNoMarginBottom:!0}),q!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(de,{label:t("Horizontal Orientation","digiblocks"),value:Ve,isBlock:!0,onChange:e=>l({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(V,{value:"left",label:t("Left","digiblocks")}),wp.element.createElement(V,{value:"right",label:t("Right","digiblocks")})),wp.element.createElement(Q,{label:t("Offset","digiblocks"),value:C,onChange:e=>l({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultValues:{desktop:{value:0,unit:"px"},tablet:{value:0,unit:"px"},mobile:{value:0,unit:"px"}},min:0,max:Me(C?.[J]?.unit||"px"),step:Ye(C?.[J]?.unit||"px")}),wp.element.createElement(de,{label:t("Vertical Orientation","digiblocks"),value:Ie,isBlock:!0,onChange:e=>l({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(V,{value:"top",label:t("Top","digiblocks")}),wp.element.createElement(V,{value:"bottom",label:t("Bottom","digiblocks")})),wp.element.createElement(Q,{label:t("Offset","digiblocks"),value:$,onChange:e=>l({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultValues:{desktop:{value:0,unit:"px"},tablet:{value:0,unit:"px"},mobile:{value:0,unit:"px"}},min:0,max:Me($?.[J]?.unit||"px"),step:Ye($?.[J]?.unit||"px")})),wp.element.createElement(pt,{label:t("Z-Index","digiblocks"),value:Z,onChange:e=>l({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(m,{tab:"advanced",name:"transform",title:t("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(xt,{normalValue:xe,hoverValue:H,onNormalChange:e=>l({transform:e}),onHoverChange:e=>l({transformHover:e})})),wp.element.createElement(m,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Animation Effect","digiblocks"),value:w,options:Ae,onChange:e=>l({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),w&&w!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{label:t("Animation Duration","digiblocks"),value:he,options:[{label:t("Slow","digiblocks"),value:"slow"},{label:t("Normal","digiblocks"),value:"normal"},{label:t("Fast","digiblocks"),value:"fast"}],onChange:e=>l({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ut,{label:t("Animation Delay (ms)","digiblocks"),value:ke||0,onChange:e=>l({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),w&&w!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(bt,{variant:"secondary",isSecondary:!0,onClick:et,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(m,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(K,{label:t("Hide on Desktop","digiblocks"),checked:k.desktop,onChange:e=>l({visibility:{...k,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(K,{label:t("Hide on Tablet","digiblocks"),checked:k.tablet,onChange:e=>l({visibility:{...k,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(K,{label:t("Hide on Mobile","digiblocks"),checked:k.mobile,onChange:e=>l({visibility:{...k,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(m,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:G||"",onChange:e=>l({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:A||"",onChange:e=>l({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},it=st({className:`digiblocks-button ${o} ${fe} ${A||""}`,id:G||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,null,wp.element.createElement(kt,{tabs:Qe,activeTab:Pe,onSelect:Ue},at())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ot()}}),wp.element.createElement("div",{...it},nt()))},je=yt;var{useBlockProps:We,RichText:wt}=window.wp.blockEditor,Ct=({attributes:ge})=>{let{id:l,anchor:W,customClasses:Be,text:o,url:G,opensInNewTab:k,rel:A,iconSource:ee,customSvg:M,iconValue:Y,iconPosition:te,size:I,onlyIcon:N,animation:p,animationDuration:oe,animationDelay:le,hoverEffect:L}=ge,F=["digiblocks-button",l,I,p!=="none"?`animate-${p} digi-animate-hidden`:"",Be||""].filter(Boolean).join(" "),O=We.save({className:F,id:W||null});p&&p!=="none"&&(O["data-animation-duration"]=oe||"normal",O["data-animation-delay"]=le||0);let R=()=>ee==="library"&&Y&&Y.svg&&Y.svg.trim()!==""?wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:Y.svg}}):ee==="custom"&&M&&M.trim()!==""?wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:M}}):null,U=(()=>{let E=wp.element.createElement(wp.element.Fragment,null,te==="left"&&R(),!N&&wp.element.createElement(wt.Content,{value:o}),te==="right"&&R());return L&&L!=="none"&&["sweep-corners","sweep-to-right","sweep-to-left","sweep-to-top","sweep-to-bottom"].includes(L)?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("span",{className:"digiblocks-button-content-wrapper"},wp.element.createElement("span",{className:"digiblocks-button-text"},E))):E})();return G?wp.element.createElement("a",{...We.save({className:F,id:W||null,href:G,target:k?"_blank":void 0,rel:A?"noopener noreferrer":void 0})},U):wp.element.createElement("div",{...O},U)},Ge=Ct;var{__:be}=window.wp.i18n,{registerBlockType:$t}=window.wp.blocks;$t("digiblocks/button",{apiVersion:2,title:be("Button","digiblocks"),parent:["digiblocks/buttons"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},wp.element.createElement("path",{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm0 9H5v-7h14v7z"}))},description:be("A single button within the buttons block","digiblocks"),supports:{inserter:!1,html:!1,className:!1,customClassName:!1,anchor:!1,reusable:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},text:{type:"string",default:be("Button","digiblocks")},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"boolean",default:!1},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:null},iconPosition:{type:"string",default:"left"},iconWidth:{type:"object",default:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},iconHeight:{type:"object",default:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},iconGap:{type:"object",default:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},iconColor:{type:"string",default:""},iconHoverColor:{type:"string",default:""},size:{type:"string",default:"medium"},fill:{type:"boolean",default:!1},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:"",unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},textColor:{type:"string",default:"#ffffff"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"#1e73be"},backgroundHoverColor:{type:"string",default:""},borderStyle:{type:"string",default:"default"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:""},borderHoverColor:{type:"string",default:""},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:12,right:24,bottom:12,left:24,unit:"px",isLinked:!1},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},onlyIcon:{type:"boolean",default:!1},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},hoverEffect:{type:"string",default:"none"},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{text:be("Button","digiblocks"),backgroundColor:"#1e73be",textColor:"#ffffff"}},edit:je,save:Ge});})();
