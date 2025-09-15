(()=>{var{__:t}=window.wp.i18n,{useBlockProps:Be,RichText:Re,InspectorControls:Oe,PanelColorSettings:L,LinkControl:Pe,BlockControls:Je,AlignmentToolbar:Ke}=window.wp.blockEditor,{SelectControl:pe,RangeControl:O,ToggleControl:W,Button:De,__experimentalToggleGroupControl:ge,__experimentalToggleGroupControlOption:G,TabPanel:ze,BaseControl:Ee}=window.wp.components,{useState:ie,useEffect:ce,useRef:Ie}=window.wp.element,{useBlockId:Me,getDimensionCSS:$,animations:F,animationPreview:be}=digi.utils,{tabIcons:ae}=digi.icons,{ResponsiveControl:P,ResponsiveButtonGroup:je,DimensionControl:ne,TypographyControl:Ue,CustomTabPanel:Le,TabPanelBody:C}=digi.components,We=({attributes:D,setAttributes:o,clientId:Y})=>{let{id:a,anchor:B,visibility:m,customClasses:K,content:R,headingTag:S,textColor:Z,textHoverColor:w,backgroundColor:z,backgroundHoverColor:_,typography:n,align:T,padding:q,margin:Q,animation:g,highlightText:k,highlightColor:H,highlightType:N,displaySeparator:E,separatorColor:s,separatorSecondaryColor:y,separatorWidth:X,separatorHeight:A,separatorBorderRadius:c,separatorPosition:b,separatorStyle:I,separatorSpacing:ee,linkEnabled:le,linkUrl:re,linkOpenInNewTab:me,linkRel:ke,shadowEnabled:te,textShadow:h}=D;Me(a,Y,o);let[u,xe]=ie(window.digi.responsiveState.activeDevice),[Ye,qe]=ie(!1);ce(()=>window.digi.responsiveState.subscribe(i=>{xe(i)}),[]);let[se,fe]=ie(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(Y);if(e)return e}return"options"}),de=Ie(null);ce(()=>{if(g&&g!=="none"){let e=setTimeout(()=>{be(a,g,F,de)},100);return()=>clearTimeout(e)}},[g]);let ve=()=>{be(a,g,F,de)},$e=[{label:t("None","digiblocks"),value:"none"},...Object.keys(F).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()),value:e}))],ye=[{label:t("H1","digiblocks"),value:"h1"},{label:t("H2","digiblocks"),value:"h2"},{label:t("H3","digiblocks"),value:"h3"},{label:t("H4","digiblocks"),value:"h4"},{label:t("H5","digiblocks"),value:"h5"},{label:t("H6","digiblocks"),value:"h6"}],Qe=[{label:t("Background","digiblocks"),value:"background"},{label:t("Text Color","digiblocks"),value:"color"},{label:t("Underline","digiblocks"),value:"underline"}],Ce=[{name:"options",title:t("Options","digiblocks"),icon:ae.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:ae.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:ae.advancedIcon}],Se=[{name:"normal",title:t("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:t("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],we=()=>{let e=window.digi.responsiveState.activeDevice,i="";n&&(n.fontFamily&&(i+=`font-family: ${n.fontFamily};`),n.fontSize&&n.fontSize[e]&&(i+=`font-size: ${n.fontSize[e]}${n.fontSizeUnit||"px"};`),n.fontWeight&&(i+=`font-weight: ${n.fontWeight};`),n.fontStyle&&(i+=`font-style: ${n.fontStyle};`),n.textTransform&&(i+=`text-transform: ${n.textTransform};`),n.textDecoration&&(i+=`text-decoration: ${n.textDecoration};`),n.lineHeight&&n.lineHeight[e]&&(i+=`line-height: ${n.lineHeight[e]}${n.lineHeightUnit||"em"};`),n.letterSpacing&&n.letterSpacing[e]&&(i+=`letter-spacing: ${n.letterSpacing[e]}${n.letterSpacingUnit||"px"};`));let p="";te&&h&&(p=`text-shadow: ${h.horizontal}px ${h.vertical}px ${h.blur}px ${h.color};`);let M=`${$(q,"padding",e)}`,oe=`${$(Q,"margin",e,!0)}`,j="";g&&g!=="none"&&F[g]&&(j=F[g].keyframes);let l="";if(E&&s){let x=X[e]||50,d=A[e]||3,r=ee[e]||10,f=b==="top"?"top: 0;":"bottom: 0;",v=T==="center"?"left: 50%; transform: translateX(-50%);":T==="right"?"right: 0;":"left: 0;";switch(I){case"line-solid":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background-color: ${s};
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;case"line-gradient":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background: linear-gradient(to right, ${s}, ${y||"#ffffff"}, ${s});
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;case"line-double":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background-color: ${s};
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                        
                        .${a}::after {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background-color: ${y||s};
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r+d+3}px;`:`margin-bottom: ${r+d+3}px;`}
                        }
                    `;break;case"line-dashed":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${s}, 
                                ${s} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;case"line-dotted":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${s}, 
                                ${s} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;case"wave":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d*4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${s}, 
                                ${s} 5px, 
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
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;case"dots":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d*3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${s} 25%, 
                                transparent 25%
                            );
                            background-size: ${d*3}px ${d*3}px;
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;case"glow":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background-color: ${s};
                            box-shadow: 0 0 ${d*3}px ${d}px ${s};
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;case"faded":l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background: linear-gradient(to right, transparent, ${s}, transparent);
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `;break;default:l=`
                        .${a}::before {
                            content: '';
                            position: absolute;
                            ${f}
                            ${v}
                            width: ${x}px;
                            height: ${d}px;
                            background-color: ${s};
							${$(c,"border-radius",e)}
                            ${b==="top"?`margin-top: ${r}px;`:`margin-bottom: ${r}px;`}
                        }
                    `}}let U="";k&&k.trim()!==""&&(N==="background"?U=`
                    .${a} .digiblocks-highlight {
                        background-color: ${H};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `:N==="color"?U=`
                    .${a} .digiblocks-highlight {
                        color: ${H};
                    }
                `:N==="underline"&&(U=`
                    .${a} .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${H};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `));let J="";return le&&(J=`
                .${a} {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                .${a}:hover {
                    ${w?`color: ${w};`:""}
                    ${_?`background-color: ${_};`:""}
                }
            `),`
            /* Main heading styles */
            .${a} {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${T[e]};
                ${z?`background-color: ${z};`:""}
                ${M}
                ${oe}
                transition: color 0.3s ease, background-color 0.3s ease;
            }

            .${a} .digiblocks-heading-text {
                ${i}
                ${p}
                color: ${Z||"inherit"};
                margin: 0;
            }
            
            /* Hover effects */
            .${a}:hover {
                ${_?`background-color: ${_};`:""}
            }

            .${a}:hover .digiblocks-heading-text {
                ${w?`color: ${w};`:""}
            }
            
            /* Animation keyframes */
            ${j}
            
            /* Separator styles */
            ${l}
            
            /* Highlight styles */
            ${U}
            
            /* Link styles */
            ${J}

			/* Visibility Controls */
			${m.desktop?`
				@media (min-width: 992px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${m.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${m.mobile?`
				@media (max-width: 767px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Xe=()=>{if(!k||k.trim()==="")return R;let e=p=>p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return R.split(new RegExp(`(${e(k)})`,"g")).map((p,M)=>p===k?`<span class="digiblocks-highlight">${p}</span>`:p).join("")},_e=({style:e,color:i,secondaryColor:p,isSelected:M,onClick:oe})=>{let j={container:{display:"inline-block",width:"60px",height:"40px",margin:"5px",padding:"5px",border:`1px solid ${M?"#007cba":"#ddd"}`,backgroundColor:M?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",position:"relative"},preview:{position:"absolute",bottom:"5px",left:"5px",right:"5px",height:"5px",display:"flex",justifyContent:"center",alignItems:"center"}},l=null;switch(e){case"line-solid":l=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:i,borderRadius:"1px"}});break;case"line-gradient":l=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${i}, ${p||"#ffffff"}, ${i})`,borderRadius:"1px"}});break;case"line-double":l=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:i,borderRadius:"1px",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:p||i,borderRadius:"1px"}}));break;case"line-dashed":l=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${i}, ${i} 6px, transparent 6px, transparent 10px)`,borderRadius:"1px"}});break;case"line-dotted":l=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${i}, ${i} 2px, transparent 2px, transparent 4px)`,borderRadius:"1px"}});break;case"wave":l=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(45deg, ${i}, ${i} 2px, transparent 2px, transparent 6px)`,borderRadius:"1px"}});break;case"dots":l=wp.element.createElement("div",{style:{width:"100%",height:"5px",display:"flex",justifyContent:"space-between"}},[...Array(5)].map((U,J)=>wp.element.createElement("div",{key:J,style:{width:"4px",height:"4px",borderRadius:"50%",backgroundColor:i}})));break;case"glow":l=wp.element.createElement("div",{style:{width:"50%",height:"3px",backgroundColor:i,boxShadow:`0 0 5px 1px ${i}`,borderRadius:"1px"}});break;case"faded":l=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, transparent, ${i}, transparent)`,borderRadius:"1px"}});break;default:l=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:i,borderRadius:"1px"}})}return wp.element.createElement("div",{style:j.container,onClick:oe},wp.element.createElement("div",{style:{textAlign:"center",fontSize:"8px",marginBottom:"5px"}},e.replace("line-","").charAt(0).toUpperCase()+e.replace("line-","").slice(1)),wp.element.createElement("div",{style:j.preview},l))},Te=()=>{let e=[{label:t("Solid Line","digiblocks"),value:"line-solid"},{label:t("Gradient Line","digiblocks"),value:"line-gradient"},{label:t("Double Line","digiblocks"),value:"line-double"},{label:t("Dashed Line","digiblocks"),value:"line-dashed"},{label:t("Dotted Line","digiblocks"),value:"line-dotted"},{label:t("Wave","digiblocks"),value:"wave"},{label:t("Dot Pattern","digiblocks"),value:"dots"},{label:t("Glow","digiblocks"),value:"glow"},{label:t("Faded Edges","digiblocks"),value:"faded"}];return wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},e.map(p=>wp.element.createElement(_e,{key:p.value,style:p.value,color:s,secondaryColor:y,isSelected:I===p.value,onClick:()=>o({separatorStyle:p.value})})))},He=()=>{switch(se){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(C,{tab:"options",name:"heading-settings",title:t("Heading Settings","digiblocks"),initialOpen:!0},wp.element.createElement(pe,{label:t("Heading Tags","digiblocks"),value:S,options:ye,onChange:e=>o({headingTag:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(je,{label:t("Alignment","digiblocks"),value:T,onChange:e=>o({align:e}),options:[{label:t("Left","digiblocks"),value:"left"},{label:t("Center","digiblocks"),value:"center"},{label:t("Right","digiblocks"),value:"right"}]}),le?wp.element.createElement(Pe,{key:"link-control",value:{url:re,opensInNewTab:me,rel:ke},settings:[{id:"opensInNewTab",title:t("Open in new tab","digiblocks")},{id:"rel",title:t("Add noopener noreferrer","digiblocks")}],onChange:e=>{o({linkUrl:e.url,linkOpenInNewTab:e.opensInNewTab,linkRel:e.rel})},onRemove:()=>{o({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!re}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>o({linkEnabled:!0})},t("Add Link","digiblocks"))))),wp.element.createElement(C,{tab:"options",name:"separator",title:t("Separator","digiblocks"),initialOpen:!1},wp.element.createElement(W,{label:t("Display Separator","digiblocks"),checked:E,onChange:e=>o({displaySeparator:e}),__nextHasNoMarginBottom:!0}),E&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ee,{label:t("Separator Style","digiblocks"),className:"digiblocks-separator-style-selector",__nextHasNoMarginBottom:!0},Te()),wp.element.createElement(ge,{label:t("Position","digiblocks"),value:b,onChange:e=>o({separatorPosition:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(G,{value:"bottom",label:t("Bottom","digiblocks")}),wp.element.createElement(G,{value:"top",label:t("Top","digiblocks")})),wp.element.createElement(L,{title:t("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:s,onChange:e=>o({separatorColor:e}),label:t("Primary Color","digiblocks")},...I==="line-gradient"||I==="line-double"?[{value:y,onChange:e=>o({separatorSecondaryColor:e}),label:t("Secondary Color","digiblocks")}]:[]]}),wp.element.createElement(P,{label:t("Width","digiblocks")},wp.element.createElement(O,{value:X[u],onChange:e=>o({separatorWidth:{...X,[u]:e}}),min:10,max:300,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(P,{label:t("Height","digiblocks")},wp.element.createElement(O,{value:A[u],onChange:e=>o({separatorHeight:{...A,[u]:e}}),min:1,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(P,{label:t("Spacing","digiblocks")},wp.element.createElement(O,{value:ee[u],onChange:e=>o({separatorSpacing:{...ee,[u]:e}}),min:0,max:50,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),["line-solid","line-gradient","line-double","line-dashed","line-dotted","glow","faded"].includes(I)&&wp.element.createElement(P,{label:t("Border Radius","digiblocks")},wp.element.createElement(ne,{values:c&&c[u]?c[u]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:e=>o({separatorBorderRadius:{...c,[u]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(C,{tab:"options",name:"text-highlight",title:t("Text Highlight","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"highlight-text"},t("Text to Highlight","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"highlight-text",value:k||"",onChange:e=>o({highlightText:e.target.value}),placeholder:t("Enter text to highlight","digiblocks")})),wp.element.createElement("p",{className:"components-base-control__help"},t("The text you enter here will be highlighted in your heading.","digiblocks"))),k&&k.trim()!==""&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ge,{label:t("Highlight Type","digiblocks"),value:N,onChange:e=>o({highlightType:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(G,{value:"background",label:t("Background","digiblocks")}),wp.element.createElement(G,{value:"color",label:t("Text","digiblocks")}),wp.element.createElement(G,{value:"underline",label:t("Underline","digiblocks")})),wp.element.createElement(L,{title:t("Highlight Color","digiblocks"),initialOpen:!0,colorSettings:[{value:H,onChange:e=>o({highlightColor:e}),label:t("Color","digiblocks")}]}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(C,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ze,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Se},e=>e.name==="normal"?wp.element.createElement(L,{title:t("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Z,onChange:i=>o({textColor:i}),label:t("Text Color","digiblocks")},{value:z,onChange:i=>o({backgroundColor:i}),label:t("Background Color","digiblocks")}]}):wp.element.createElement(L,{title:t("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:w,onChange:i=>o({textHoverColor:i}),label:t("Text Hover Color","digiblocks")},{value:_,onChange:i=>o({backgroundHoverColor:i}),label:t("Background Hover Color","digiblocks")}]}))),wp.element.createElement(C,{tab:"style",name:"typo",title:t("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ue,{label:t("Typography Settings","digiblocks"),value:n,onChange:e=>o({typography:e}),defaults:{fontSize:{desktop:"",tablet:"",mobile:""},fontSizeUnit:"px",lineHeight:{desktop:"",tablet:"",mobile:""},lineHeightUnit:"em"}})),wp.element.createElement(C,{tab:"style",name:"text-shadow",title:t("Text Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(W,{label:t("Enable Text Shadow","digiblocks"),checked:te,onChange:e=>o({shadowEnabled:e}),__nextHasNoMarginBottom:!0}),te&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(L,{title:t("Shadow Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:h.color,onChange:e=>o({textShadow:{...h,color:e}}),label:t("Color","digiblocks")}]}),wp.element.createElement(O,{label:t("Horizontal Offset","digiblocks"),value:h.horizontal,onChange:e=>o({textShadow:{...h,horizontal:e}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(O,{label:t("Vertical Offset","digiblocks"),value:h.vertical,onChange:e=>o({textShadow:{...h,vertical:e}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(O,{label:t("Blur Radius","digiblocks"),value:h.blur,onChange:e=>o({textShadow:{...h,blur:e}}),min:0,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))),wp.element.createElement(C,{tab:"style",name:"spacing",title:t("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(P,{label:t("Padding","digiblocks")},wp.element.createElement(ne,{values:q[u],onChange:e=>o({padding:{...q,[u]:e}})})),wp.element.createElement(P,{label:t("Margin","digiblocks")},wp.element.createElement(ne,{values:Q[u],onChange:e=>o({margin:{...Q,[u]:e}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(C,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(pe,{label:t("Animation Effect","digiblocks"),value:g,options:$e,onChange:e=>o({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),g&&g!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(De,{variant:"secondary",isSecondary:!0,onClick:ve,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(C,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(W,{label:t("Hide on Desktop","digiblocks"),checked:m.desktop,onChange:e=>o({visibility:{...m,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(W,{label:t("Hide on Tablet","digiblocks"),checked:m.tablet,onChange:e=>o({visibility:{...m,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(W,{label:t("Hide on Mobile","digiblocks"),checked:m.mobile,onChange:e=>o({visibility:{...m,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(C,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:B||"",onChange:e=>o({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:K||"",onChange:e=>o({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ne=Be({className:`digiblocks-heading ${a} ${K||""}`,id:B||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Oe,null,wp.element.createElement(Le,{tabs:Ce,activeTab:se,onSelect:fe},He())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:we()}}),wp.element.createElement("div",{...Ne},wp.element.createElement(Re,{tagName:S,className:"digiblocks-heading-text",value:R,onChange:e=>o({content:e}),placeholder:t("Add Your Heading","digiblocks"),allowedFormats:["core/bold","core/italic"]})))},he=We;var{useBlockProps:Ae,RichText:Ge}=window.wp.blockEditor,Fe=({attributes:D})=>{let{id:o,anchor:Y,customClasses:a,content:B,headingTag:m,align:K,animation:R,highlightText:S,highlightType:Z,displaySeparator:w,separatorStyle:z,linkEnabled:_,linkUrl:n,linkOpenInNewTab:T,linkRel:q}=D,g={className:["digiblocks-heading",o,R!=="none"?`animate-${R}`:"",w?`has-separator separator-${z}`:"",a||""].filter(Boolean).join(" "),id:Y||null},k=()=>{if(!S||S.trim()==="")return B;let E=y=>y.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return B.split(new RegExp(`(${E(S)})`,"g")).map((y,X)=>y===S?`<span class="digiblocks-highlight">${y}</span>`:y).join("")},H=m,N=S&&S.trim()!==""?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:k()}}):wp.element.createElement(Ge.Content,{value:B});return _&&n?wp.element.createElement("a",{href:n,target:T?"_blank":"_self",rel:T?"noopener noreferrer":void 0,...g},wp.element.createElement(H,{className:"digiblocks-heading-text"},N)):wp.element.createElement("div",{...g},wp.element.createElement(H,{className:"digiblocks-heading-text"},N))},ue=Fe;var{__:V}=window.wp.i18n,{registerBlockType:Ve}=window.wp.blocks;Ve("digiblocks/heading",{apiVersion:2,title:digiBlocksData.blocks.heading.title,category:"digiblocks",icon:{src:()=>{let{viewbox:D,path:o}=digiBlocksData.blocks.heading.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${D}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:o}))}},description:digiBlocksData.blocks.heading.description,keywords:[V("heading","digiblocks"),V("title","digiblocks"),V("header","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"string",default:V("Add Your Heading","digiblocks")},headingTag:{type:"string",default:"h2"},textColor:{type:"string",default:""},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:"",tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:"",tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:"",tablet:"",mobile:""},letterSpacingUnit:"px"}},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"background"},displaySeparator:{type:"boolean",default:!1},separatorColor:{type:"string",default:"#1e73be"},separatorSecondaryColor:{type:"string",default:"#e0e0e0"},separatorWidth:{type:"object",default:{desktop:50,tablet:40,mobile:30}},separatorHeight:{type:"object",default:{desktop:3,tablet:2,mobile:2}},separatorPosition:{type:"string",default:"bottom"},separatorStyle:{type:"string",default:"line-solid"},separatorSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},separatorBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},shadowEnabled:{type:"boolean",default:!1},textShadow:{type:"object",default:{horizontal:2,vertical:2,blur:3,color:"rgba(0,0,0,0.3)"}}},example:{attributes:{content:V("Beautiful Heading","digiblocks"),level:2,textColor:"#333333",typography:{fontSize:{desktop:32},fontWeight:"600",lineHeight:{desktop:1.2}},displaySeparator:!0,separatorStyle:"line-gradient",separatorColor:"#1e73be"}},edit:he,save:ue});})();
