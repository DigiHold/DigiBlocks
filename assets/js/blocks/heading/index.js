(()=>{var{__:t}=window.wp.i18n,{useBlockProps:rt,RichText:st,InspectorControls:dt,PanelColorSettings:A,LinkControl:ct}=window.wp.blockEditor,{TextControl:Ie,SelectControl:j,RangeControl:L,ToggleControl:ee,Button:Xe,__experimentalToggleGroupControl:Ce,__experimentalToggleGroupControlOption:U,TabPanel:pt,BaseControl:ut}=window.wp.components,{useState:Ye,useEffect:Le,useRef:gt}=window.wp.element,{useBlockId:bt,getDimensionCSS:O,animations:we,animationPreview:We}=digi.utils,{tabIcons:Se}=digi.icons,{ResponsiveControl:_e,ResponsiveButtonGroup:ht,ResponsiveRangeControl:Te,DimensionControl:He,TypographyControl:mt,CustomTabPanel:ft,TabPanelBody:w,TransformControl:kt}=digi.components,xt=({attributes:_,setAttributes:a,clientId:te,mergeBlocks:ce,onReplace:G})=>{let{id:s,anchor:X,visibility:T,customClasses:ae,content:F,headingTag:oe,maxWidth:W,textColor:q,textHoverColor:E,backgroundColor:ie,backgroundHoverColor:D,typography:m,align:Y,padding:Ne,margin:Be,animation:z,animationDuration:pe,animationDelay:ue,highlightText:v,highlightColor:le,highlightType:ne,textEffect:re,displaySeparator:ge,separatorColor:b,separatorSecondaryColor:se,separatorWidth:be,separatorHeight:he,separatorBorderRadius:V,separatorPosition:$,separatorStyle:Q,separatorSpacing:me,linkEnabled:Oe,linkUrl:De,linkOpenInNewTab:Ge,linkRel:Fe,shadowEnabled:fe,textShadow:y,position:Z,horizontalOrientation:ze,horizontalOffset:P,verticalOrientation:Ve,verticalOffset:R,zIndex:J,transform:ke,transformHover:I}=_;bt(s,te,a);let[S,qe]=Ye(window.digi.responsiveState.activeDevice);Le(()=>window.digi.responsiveState.subscribe(o=>{qe(o)}),[]);let[Pe,Qe]=Ye(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(te);if(e)return e}return"options"}),Re=gt(null);Le(()=>{if(z&&z!=="none"){let e=setTimeout(()=>{We(s,z,we,Re,pe,ue)},100);return()=>clearTimeout(e)}},[z]);let Ze=()=>{We(s,z,we,Re,pe,ue)},Je=[{label:t("None","digiblocks"),value:"none"},...Object.keys(we).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),value:e}))],Ke=()=>{if(!v||v.trim()===""||!F)return;let e=document.createElement("div");e.innerHTML=F,e.querySelectorAll(".digiblocks-highlight").forEach(g=>{let c=document.createTextNode(g.textContent);g.parentNode.replaceChild(c,g)}),e.normalize();let r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),p=[],f;for(;f=r.nextNode();)f.nodeValue&&f.nodeValue.includes(v)&&p.push(f);p.forEach(g=>{let c=g.nodeValue,C=c.indexOf(v);if(C===-1)return;let h=c.substring(0,C),H=c.substring(C,C+v.length),M=c.substring(C+v.length),l=document.createDocumentFragment();h&&l.appendChild(document.createTextNode(h));let n=document.createElement("span");n.className="digiblocks-highlight",n.textContent=H,l.appendChild(n),M&&l.appendChild(document.createTextNode(M)),g.parentNode.replaceChild(l,g)}),a({content:e.innerHTML})},Ae=[{label:t("H1","digiblocks"),value:"h1"},{label:t("H2","digiblocks"),value:"h2"},{label:t("H3","digiblocks"),value:"h3"},{label:t("H4","digiblocks"),value:"h4"},{label:t("H5","digiblocks"),value:"h5"},{label:t("H6","digiblocks"),value:"h6"}],et=[{name:"options",title:t("Options","digiblocks"),icon:Se.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:Se.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:Se.advancedIcon}],tt=[{name:"normal",title:t("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:t("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],xe=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"px":default:return 1500}},ve=e=>{switch(e){case"%":return 1;case"em":case"rem":return .1;case"px":default:return 1}},K=(e,o)=>{if(!e||typeof e!="object")return null;let r=p=>p===""||p===void 0||p===null?!0:typeof p=="object"&&p!==null?p.value===""||p.value===void 0||p.value===null:!1;return o==="mobile"?r(e.mobile)?r(e.tablet)?e.desktop:e.tablet:e.mobile:o==="tablet"?r(e.tablet)?e.desktop:e.tablet:e.desktop},Me=(e,o)=>{let r={left:"0%",center:"50%",right:"100%"},p={top:"0%",center:"50%",bottom:"100%"},f=r[e.xAnchor?.[o]||"center"],g=p[e.yAnchor?.[o]||"center"];return`${f} ${g}`},Ee=(e,o)=>{if(!e)return"";let r=[],p=l=>{if(!l)return"";let n=l[o],N=k=>k===""||k===void 0||k===null?!0:typeof k=="object"&&k!==null?k.value===""||k.value===void 0||k.value===null:!1;return o==="tablet"&&N(n)&&(n=l.desktop),o==="mobile"&&N(n)&&(n=l.tablet,N(n)&&(n=l.desktop)),typeof n=="object"&&n!==null?n.value!==void 0?n.value:"":n},f=p(e.rotate);if(f!==""&&f!==void 0&&f!==null){if(e.rotate3d){let l=p(e.perspective);l!==""&&l!==void 0&&l!==null&&r.push(`perspective(${l}px)`)}r.push(`rotate(${f}deg)`)}if(e.rotate3d){let l=p(e.rotateX);l!==""&&l!==void 0&&l!==null&&r.push(`rotateX(${l}deg)`);let n=p(e.rotateY);n!==""&&n!==void 0&&n!==null&&r.push(`rotateY(${n}deg)`)}let g=e.offsetX?.[o]?.value,c=e.offsetY?.[o]?.value,C=g!==""&&g!==void 0&&g!==null,h=c!==""&&c!==void 0&&c!==null;if(C||h){let l=C?`${g}${e.offsetX[o].unit||"px"}`:"0",n=h?`${c}${e.offsetY[o].unit||"px"}`:"0";r.push(`translate(${l}, ${n})`)}if(e.keepProportions){let l=p(e.scale);l!==""&&l!==void 0&&l!==null&&l!=1&&r.push(`scale(${l})`)}else{let l=p(e.scaleX),n=p(e.scaleY),N=l!==""&&l!==void 0&&l!==null?l:1,k=n!==""&&n!==void 0&&n!==null?n:1;(N!=1||k!=1)&&r.push(`scale(${N}, ${k})`)}let H=p(e.skewX);H!==""&&H!==void 0&&H!==null&&r.push(`skewX(${H}deg)`);let M=p(e.skewY);return M!==""&&M!==void 0&&M!==null&&r.push(`skewY(${M}deg)`),e.flipHorizontal&&r.push("scaleX(-1)"),e.flipVertical&&r.push("scaleY(-1)"),r.length>0?r.join(" "):""},at=()=>{let e=window.digi.responsiveState.activeDevice,o="";if(m){m.fontFamily&&(o+=`font-family: ${m.fontFamily};`);let d=K(m.fontSize,e);d&&d.value!==""&&d.value!==null&&d.value!==void 0&&(o+=`font-size: ${d.value}${d.unit!==null?d.unit:""};`),m.fontWeight&&(o+=`font-weight: ${m.fontWeight};`),m.fontStyle&&(o+=`font-style: ${m.fontStyle};`),m.textTransform&&(o+=`text-transform: ${m.textTransform};`),m.textDecoration&&(o+=`text-decoration: ${m.textDecoration};`);let u=K(m.lineHeight,e);u&&u.value!==""&&u.value!==null&&u.value!==void 0&&(o+=`line-height: ${u.value}${u.unit!==null?u.unit:""};`);let i=K(m.letterSpacing,e);i&&i.value!==""&&i.value!==null&&i.value!==void 0&&(o+=`letter-spacing: ${i.value}${i.unit!==null?i.unit:""};`)}let r="";fe&&y&&(r=`text-shadow: ${y.horizontal}px ${y.vertical}px ${y.blur}px ${y.color};`);let p=`${O(Ne,"padding",e)}`,f=`${O(Be,"margin",e,!0)}`,g="",c=K(W,e),C=K(Y,e);c&&c.value&&(g=`max-width: ${c.value}${c.unit!==null?c.unit:""};`,C==="center"?g+="margin-left: auto;margin-right: auto;":C==="right"&&(g+="margin-left: auto;"));let h="";if(ge&&b){let d=be[e]||50,u=he[e]||3,i=me[e]||10,x=$==="top"?"top: 0;":"bottom: 0;",B=Y==="center"?"left: 50%; transform: translateX(-50%);":Y==="right"?"right: 0;":"left: 0;";switch(Q){case"line-solid":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background-color: ${b};
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;case"line-gradient":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background: linear-gradient(to right, ${b}, ${se||"#ffffff"}, ${b});
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;case"line-double":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background-color: ${b};
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                        
                        .${s}::after {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background-color: ${se||b};
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i+u+3}px;`:`margin-bottom: ${i+u+3}px;`}
                        }
                    `;break;case"line-dashed":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${b}, 
                                ${b} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;case"line-dotted":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${b}, 
                                ${b} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;case"wave":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u*4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${b}, 
                                ${b} 5px, 
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
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;case"dots":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u*3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${b} 25%, 
                                transparent 25%
                            );
                            background-size: ${u*3}px ${u*3}px;
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;case"glow":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background-color: ${b};
                            box-shadow: 0 0 ${u*3}px ${u}px ${b};
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;case"faded":h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background: linear-gradient(to right, transparent, ${b}, transparent);
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `;break;default:h=`
                        .${s}::before {
                            content: '';
                            position: absolute;
                            ${x}
                            ${B}
                            width: ${d}px;
                            height: ${u}px;
                            background-color: ${b};
							${O(V,"border-radius",e)}
                            ${$==="top"?`margin-top: ${i}px;`:`margin-bottom: ${i}px;`}
                        }
                    `}}let H="";v&&v.trim()!==""&&(ne==="background"?H=`
                    .${s} .digiblocks-highlight {
                        background-color: ${le};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `:ne==="color"?H=`
                    .${s} .digiblocks-highlight {
                        color: ${le};
                    }
                `:ne==="underline"&&(H=`
                    .${s} .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${le};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `));let M="";re&&re!=="none"&&(M=`
				.${s} {
					mix-blend-mode: ${re};
				}
			`);let l="";Oe&&(l=`
                .${s} {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                .${s}:hover {
                    ${E?`color: ${E};`:""}
                    ${D?`background-color: ${D};`:""}
                }
            `);let n="";if(Z&&Z!=="default"){n+=`position: ${Z} !important;`;let d=P?.[e]?.value,u=P?.[e]?.unit||"px";(d===""||d===void 0)&&(e==="tablet"?d=P?.desktop?.value:e==="mobile"&&(d=P?.tablet?.value!==""&&P?.tablet?.value!==void 0?P?.tablet?.value:P?.desktop?.value)),d!==""&&d!==void 0&&(ze==="left"?n+=`left: ${d}${u};`:n+=`right: ${d}${u};`);let i=R?.[e]?.value,x=R?.[e]?.unit||"px";(i===""||i===void 0)&&(e==="tablet"?i=R?.desktop?.value:e==="mobile"&&(i=R?.tablet?.value!==""&&R?.tablet?.value!==void 0?R?.tablet?.value:R?.desktop?.value)),i!==""&&i!==void 0&&(Ve==="top"?n+=`top: ${i}${x};`:n+=`bottom: ${i}${x};`)}J!==""&&J!==void 0&&J!==null&&(n+=`z-index: ${J};`);let N="",k=Ee(ke,e);k&&(N+=`transform: ${k};`,N+=`transform-origin: ${Me(ke,e)};`);let $e=Ee(I,e);if($e&&I&&I.transitionDuration!==""&&I.transitionDuration!==void 0&&I.transitionDuration!==null){let d=I.transitionDuration;N+=`transition: transform ${d}ms ease;`}let ye="";return $e&&(ye+=`transform: ${$e};`,ye+=`transform-origin: ${Me(I,e)};`),`
            /* Main heading styles */
            .${s} {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${C};
                ${ie?`background-color: ${ie};`:""}
                ${p}
                ${f}
                ${n}
                transition: color 0.3s ease, background-color 0.3s ease;
                ${n}
				${N}
            }

            .${s} .digiblocks-heading-text {
                ${o}
                margin: 0;
                ${g}
                ${r}
                color: ${q||"inherit"};
				${ye}
            }
            
            /* Hover effects */
            .${s}:hover {
                ${D?`background-color: ${D};`:""}
            }

            .${s}:hover .digiblocks-heading-text {
                ${E?`color: ${E};`:""}
            }
            
            /* Separator styles */
            ${h}
            
            /* Highlight styles */
            ${H}
            
            /* Effect */
            ${M}
            
            /* Link styles */
            ${l}

			/* Visibility Controls */
			${T.desktop?`
				@media (min-width: 992px) {
					.${s} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${T.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${s} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${T.mobile?`
				@media (max-width: 767px) {
					.${s} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ot=({style:e,color:o,secondaryColor:r,isSelected:p,onClick:f})=>{let g={container:{display:"inline-block",width:"60px",height:"40px",margin:"5px",padding:"5px",border:`1px solid ${p?"#007cba":"#ddd"}`,backgroundColor:p?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",position:"relative"},preview:{position:"absolute",bottom:"5px",left:"5px",right:"5px",height:"5px",display:"flex",justifyContent:"center",alignItems:"center"}},c=null;switch(e){case"line-solid":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:o,borderRadius:"1px"}});break;case"line-gradient":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${o}, ${r||"#ffffff"}, ${o})`,borderRadius:"1px"}});break;case"line-double":c=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:o,borderRadius:"1px",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:r||o,borderRadius:"1px"}}));break;case"line-dashed":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${o}, ${o} 6px, transparent 6px, transparent 10px)`,borderRadius:"1px"}});break;case"line-dotted":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${o}, ${o} 2px, transparent 2px, transparent 4px)`,borderRadius:"1px"}});break;case"wave":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(45deg, ${o}, ${o} 2px, transparent 2px, transparent 6px)`,borderRadius:"1px"}});break;case"dots":c=wp.element.createElement("div",{style:{width:"100%",height:"5px",display:"flex",justifyContent:"space-between"}},[...Array(5)].map((C,h)=>wp.element.createElement("div",{key:h,style:{width:"4px",height:"4px",borderRadius:"50%",backgroundColor:o}})));break;case"glow":c=wp.element.createElement("div",{style:{width:"50%",height:"3px",backgroundColor:o,boxShadow:`0 0 5px 1px ${o}`,borderRadius:"1px"}});break;case"faded":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, transparent, ${o}, transparent)`,borderRadius:"1px"}});break;default:c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:o,borderRadius:"1px"}})}return wp.element.createElement("div",{style:g.container,onClick:f},wp.element.createElement("div",{style:{textAlign:"center",fontSize:"8px",marginBottom:"5px"}},e.replace("line-","").charAt(0).toUpperCase()+e.replace("line-","").slice(1)),wp.element.createElement("div",{style:g.preview},c))},it=()=>{let e=[{label:t("Solid Line","digiblocks"),value:"line-solid"},{label:t("Gradient Line","digiblocks"),value:"line-gradient"},{label:t("Double Line","digiblocks"),value:"line-double"},{label:t("Dashed Line","digiblocks"),value:"line-dashed"},{label:t("Dotted Line","digiblocks"),value:"line-dotted"},{label:t("Wave","digiblocks"),value:"wave"},{label:t("Dot Pattern","digiblocks"),value:"dots"},{label:t("Glow","digiblocks"),value:"glow"},{label:t("Faded Edges","digiblocks"),value:"faded"}];return wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},e.map(r=>wp.element.createElement(ot,{key:r.value,style:r.value,color:b,secondaryColor:se,isSelected:Q===r.value,onClick:()=>a({separatorStyle:r.value})})))},lt=()=>{switch(Pe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(w,{tab:"options",name:"heading-settings",title:t("Heading Settings","digiblocks"),initialOpen:!0},wp.element.createElement(j,{label:t("Heading Tags","digiblocks"),value:oe,options:Ae,onChange:e=>a({headingTag:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ht,{label:t("Alignment","digiblocks"),value:Y,onChange:e=>a({align:e}),options:[{label:t("Left","digiblocks"),value:"left"},{label:t("Center","digiblocks"),value:"center"},{label:t("Right","digiblocks"),value:"right"}]}),Oe?wp.element.createElement(ct,{key:"link-control",value:{url:De,opensInNewTab:Ge,rel:Fe},settings:[{id:"opensInNewTab",title:t("Open in new tab","digiblocks")},{id:"rel",title:t("Add noopener noreferrer","digiblocks")}],onChange:e=>{a({linkUrl:e.url,linkOpenInNewTab:e.opensInNewTab,linkRel:e.rel})},onRemove:()=>{a({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!De}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>a({linkEnabled:!0})},t("Add Link","digiblocks")))),wp.element.createElement(Te,{label:t("Max Width","digiblocks"),value:W,onChange:e=>a({maxWidth:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:xe(W?.[S]?.unit),step:ve(W?.[S]?.unit)})),wp.element.createElement(w,{tab:"options",name:"separator",title:t("Separator","digiblocks"),initialOpen:!1},wp.element.createElement(ee,{label:t("Display Separator","digiblocks"),checked:ge,onChange:e=>a({displaySeparator:e}),__nextHasNoMarginBottom:!0}),ge&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ut,{label:t("Separator Style","digiblocks"),className:"digiblocks-separator-style-selector",__nextHasNoMarginBottom:!0},it()),wp.element.createElement(Ce,{label:t("Position","digiblocks"),value:$,onChange:e=>a({separatorPosition:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(U,{value:"bottom",label:t("Bottom","digiblocks")}),wp.element.createElement(U,{value:"top",label:t("Top","digiblocks")})),wp.element.createElement(A,{title:t("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:b,onChange:e=>a({separatorColor:e}),label:t("Primary Color","digiblocks")},...Q==="line-gradient"||Q==="line-double"?[{value:se,onChange:e=>a({separatorSecondaryColor:e}),label:t("Secondary Color","digiblocks")}]:[]]}),wp.element.createElement(_e,{label:t("Width","digiblocks")},wp.element.createElement(L,{value:be[S],onChange:e=>a({separatorWidth:{...be,[S]:e}}),min:10,max:300,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(_e,{label:t("Height","digiblocks")},wp.element.createElement(L,{value:he[S],onChange:e=>a({separatorHeight:{...he,[S]:e}}),min:1,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(_e,{label:t("Spacing","digiblocks")},wp.element.createElement(L,{value:me[S],onChange:e=>a({separatorSpacing:{...me,[S]:e}}),min:0,max:50,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),["line-solid","line-gradient","line-double","line-dashed","line-dotted","glow","faded"].includes(Q)&&wp.element.createElement(He,{label:t("Border Radius","digiblocks"),value:V,onChange:e=>a({separatorBorderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(w,{tab:"options",name:"text-highlight",title:t("Text Highlight","digiblocks"),initialOpen:!1},wp.element.createElement(Ie,{label:t("Text to Highlight","digiblocks"),value:v||"",onChange:e=>a({highlightText:e}),placeholder:t("Enter text to highlight","digiblocks"),help:t("The text you enter here will be highlighted in your heading.","digiblocks"),__nextHasNoMarginBottom:!0}),v&&v.trim()!==""&&wp.element.createElement("div",{style:{marginTop:"10px",marginBottom:"16px"}},wp.element.createElement(Xe,{variant:"secondary",onClick:Ke,style:{width:"100%"}},t("Apply Highlight","digiblocks"))),v&&v.trim()!==""&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{label:t("Highlight Type","digiblocks"),value:ne,options:[{label:t("Background","digiblocks"),value:"background"},{label:t("Text","digiblocks"),value:"color"},{label:t("Underline","digiblocks"),value:"underline"}],onChange:e=>a({highlightType:e}),__nextHasNoMarginBottom:!0}),wp.element.createElement(A,{title:t("Highlight Color","digiblocks"),initialOpen:!0,colorSettings:[{value:le,onChange:e=>a({highlightColor:e}),label:t("Color","digiblocks")}]}))),wp.element.createElement(w,{tab:"options",name:"effect",title:t("Text Effect","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Blend Mode","digiblocks"),value:re,options:[{label:t("None","digiblocks"),value:"none"},{label:t("Difference","digiblocks"),value:"difference"},{label:t("Multiply","digiblocks"),value:"multiply"},{label:t("Screen","digiblocks"),value:"screen"},{label:t("Overlay","digiblocks"),value:"overlay"},{label:t("Darken","digiblocks"),value:"darken"},{label:t("Lighten","digiblocks"),value:"lighten"},{label:t("Color Dodge","digiblocks"),value:"color-dodge"},{label:t("Color Burn","digiblocks"),value:"color-burn"},{label:t("Hard Light","digiblocks"),value:"hard-light"},{label:t("Soft Light","digiblocks"),value:"soft-light"},{label:t("Exclusion","digiblocks"),value:"exclusion"},{label:t("Hue","digiblocks"),value:"hue"},{label:t("Saturation","digiblocks"),value:"saturation"},{label:t("Color","digiblocks"),value:"color"},{label:t("Luminosity","digiblocks"),value:"luminosity"}],onChange:e=>a({textEffect:e}),__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},t("Apply a blend mode effect to the heading text.","digiblocks"))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(w,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(pt,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:tt},e=>e.name==="normal"?wp.element.createElement(A,{title:t("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:q,onChange:o=>a({textColor:o}),label:t("Text Color","digiblocks")},{value:ie,onChange:o=>a({backgroundColor:o}),label:t("Background Color","digiblocks")}]}):wp.element.createElement(A,{title:t("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:E,onChange:o=>a({textHoverColor:o}),label:t("Text Hover Color","digiblocks")},{value:D,onChange:o=>a({backgroundHoverColor:o}),label:t("Background Hover Color","digiblocks")}]}))),wp.element.createElement(w,{tab:"style",name:"typo",title:t("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(mt,{label:t("Typography Settings","digiblocks"),value:m,onChange:e=>a({typography:e})})),wp.element.createElement(w,{tab:"style",name:"text-shadow",title:t("Text Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(ee,{label:t("Enable Text Shadow","digiblocks"),checked:fe,onChange:e=>a({shadowEnabled:e}),__nextHasNoMarginBottom:!0}),fe&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(A,{title:t("Shadow Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y.color,onChange:e=>a({textShadow:{...y,color:e}}),label:t("Color","digiblocks")}]}),wp.element.createElement(L,{label:t("Horizontal Offset","digiblocks"),value:y.horizontal,onChange:e=>a({textShadow:{...y,horizontal:e}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(L,{label:t("Vertical Offset","digiblocks"),value:y.vertical,onChange:e=>a({textShadow:{...y,vertical:e}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(L,{label:t("Blur Radius","digiblocks"),value:y.blur,onChange:e=>a({textShadow:{...y,blur:e}}),min:0,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(w,{tab:"advanced",name:"spacing",title:t("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(He,{label:t("Padding","digiblocks"),value:Ne,onChange:e=>a({padding:e})}),wp.element.createElement(He,{label:t("Margin","digiblocks"),value:Be,onChange:e=>a({margin:e})})),wp.element.createElement(w,{tab:"advanced",name:"position",title:t("Position","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Position","digiblocks"),value:Z,options:[{label:t("Default","digiblocks"),value:"default"},{label:t("Relative","digiblocks"),value:"relative"},{label:t("Absolute","digiblocks"),value:"absolute"},{label:t("Fixed","digiblocks"),value:"fixed"}],onChange:e=>a({position:e}),__nextHasNoMarginBottom:!0}),Z!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ce,{label:t("Horizontal Orientation","digiblocks"),value:ze,isBlock:!0,onChange:e=>a({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(U,{value:"left",label:t("Left","digiblocks")}),wp.element.createElement(U,{value:"right",label:t("Right","digiblocks")})),wp.element.createElement(Te,{label:t("Offset","digiblocks"),value:P,onChange:e=>a({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:xe(P?.[S]?.unit||"px"),step:ve(P?.[S]?.unit||"px")}),wp.element.createElement(Ce,{label:t("Vertical Orientation","digiblocks"),value:Ve,isBlock:!0,onChange:e=>a({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(U,{value:"top",label:t("Top","digiblocks")}),wp.element.createElement(U,{value:"bottom",label:t("Bottom","digiblocks")})),wp.element.createElement(Te,{label:t("Offset","digiblocks"),value:R,onChange:e=>a({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:xe(R?.[S]?.unit||"px"),step:ve(R?.[S]?.unit||"px")})),wp.element.createElement(L,{label:t("Z-Index","digiblocks"),value:J,onChange:e=>a({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(w,{tab:"advanced",name:"transform",title:t("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(kt,{normalValue:ke,hoverValue:I,onNormalChange:e=>a({transform:e}),onHoverChange:e=>a({transformHover:e})})),wp.element.createElement(w,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:t("Animation Effect","digiblocks"),value:z,options:Je,onChange:e=>a({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),z&&z!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{label:t("Animation Duration","digiblocks"),value:pe,options:[{label:t("Slow","digiblocks"),value:"slow"},{label:t("Normal","digiblocks"),value:"normal"},{label:t("Fast","digiblocks"),value:"fast"}],onChange:e=>a({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ie,{label:t("Animation Delay (ms)","digiblocks"),value:ue||0,onChange:e=>a({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),z&&z!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Xe,{variant:"secondary",isSecondary:!0,onClick:Ze,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(w,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ee,{label:t("Hide on Desktop","digiblocks"),checked:T.desktop,onChange:e=>a({visibility:{...T,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ee,{label:t("Hide on Tablet","digiblocks"),checked:T.tablet,onChange:e=>a({visibility:{...T,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ee,{label:t("Hide on Mobile","digiblocks"),checked:T.mobile,onChange:e=>a({visibility:{...T,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(w,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:X||"",onChange:e=>a({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:ae||"",onChange:e=>a({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},nt=rt({className:`digiblocks-heading ${s} ${ae||""}`,id:X||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,null,wp.element.createElement(ft,{tabs:et,activeTab:Pe,onSelect:Qe},lt())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:at()}}),wp.element.createElement("div",{...nt},wp.element.createElement(st,{identifier:"content",tagName:oe,className:"digiblocks-heading-text",value:F,onChange:e=>a({content:e}),onMerge:ce,onReplace:G,onRemove:G?()=>G([]):void 0,placeholder:t("Add Your Heading","digiblocks")})))},je=xt;var{useBlockProps:wt,RichText:vt}=window.wp.blockEditor,$t=({attributes:_})=>{let{id:a,anchor:te,customClasses:ce,content:G,headingTag:s,animation:X,animationDuration:T,animationDelay:ae,displaySeparator:F,separatorStyle:oe,linkEnabled:W,linkUrl:q,linkOpenInNewTab:E}=_,D={className:["digiblocks-heading",a,X!=="none"?`animate-${X} digi-animate-hidden`:"",F?`has-separator separator-${oe}`:"",ce||""].filter(Boolean).join(" "),id:te||null};X&&X!=="none"&&(D["data-animation-duration"]=T||"normal",D["data-animation-delay"]=ae||0);let m=s,Y=wp.element.createElement(vt.Content,{value:G});return W&&q?wp.element.createElement("a",{href:q,target:E?"_blank":"_self",rel:E?"noopener noreferrer":void 0,...D},wp.element.createElement(m,{className:"digiblocks-heading-text"},Y)):wp.element.createElement("div",{...D},wp.element.createElement(m,{className:"digiblocks-heading-text"},Y))},Ue=$t;var{__:de}=window.wp.i18n,{registerBlockType:yt}=window.wp.blocks;yt("digiblocks/heading",{apiVersion:3,title:digiBlocksData.blocks.heading.title,category:"digiblocks",icon:{src:()=>{let{viewbox:_,path:a}=digiBlocksData.blocks.heading.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${_}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:a}))}},description:digiBlocksData.blocks.heading.description,keywords:[de("heading","digiblocks"),de("title","digiblocks"),de("header","digiblocks")],supports:{html:!0,className:!1,customClassName:!1,anchor:!1,splitting:!0},transforms:{from:[{type:"block",blocks:["core/paragraph","digiblocks/text"],transform:_=>window.wp.blocks.createBlock("digiblocks/heading",{content:_.content})}],to:[{type:"block",blocks:["digiblocks/text"],transform:_=>window.wp.blocks.createBlock("digiblocks/text",{content:_.content})}]},merge:(_,a)=>({content:(_.content||"")+(a.content||"")}),attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"rich-text",source:"rich-text",selector:"h1,h2,h3,h4,h5,h6",role:"content"},headingTag:{type:"string",default:"h2"},textEffect:{type:"string",default:"none"},maxWidth:{type:"object",default:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},textColor:{type:"string",default:""},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:{value:"",unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},align:{type:"object",default:{desktop:"left",tablet:"",mobile:""}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"background"},displaySeparator:{type:"boolean",default:!1},separatorColor:{type:"string",default:"#1e73be"},separatorSecondaryColor:{type:"string",default:"#e0e0e0"},separatorWidth:{type:"object",default:{desktop:50,tablet:40,mobile:30}},separatorHeight:{type:"object",default:{desktop:3,tablet:2,mobile:2}},separatorPosition:{type:"string",default:"bottom"},separatorStyle:{type:"string",default:"line-solid"},separatorSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},separatorBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},shadowEnabled:{type:"boolean",default:!1},textShadow:{type:"object",default:{horizontal:2,vertical:2,blur:3,color:"rgba(0,0,0,0.3)"}},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{content:de("Beautiful Heading","digiblocks"),level:2,textColor:"#333333",typography:{fontSize:{desktop:32},fontWeight:"600",lineHeight:{desktop:1.2}},displaySeparator:!0,separatorStyle:"line-gradient",separatorColor:"#1e73be"}},edit:je,save:Ue});})();
