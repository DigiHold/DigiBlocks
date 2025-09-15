(()=>{var{__:e}=window.wp.i18n,{useBlockProps:Zo,InspectorControls:Mo,PanelColorSettings:zo,BlockControls:Ao,AlignmentToolbar:oe}=window.wp.blockEditor,{SelectControl:bo,RangeControl:Lo,TabPanel:ee,ToggleControl:C,TextControl:no,DateTimePicker:ie,Button:te,__experimentalToggleGroupControl:ne,__experimentalToggleGroupControlOption:le,BaseControl:ae}=window.wp.components,{useState:lo,useEffect:ko,useRef:Po}=window.wp.element,{useBlockId:se,getDimensionCSS:N,animations:fo,animationPreview:Oo}=digi.utils,{tabIcons:vo}=digi.icons,{ResponsiveControl:j,DimensionControl:go,TypographyControl:Io,BoxShadowControl:de,CustomTabPanel:Ro,TabPanelBody:W}=digi.components,ce=({attributes:J,setAttributes:i,clientId:ao})=>{let{id:t,anchor:so,visibility:u,customClasses:F,endDate:v,showDays:h,showHours:_,showMinutes:w,showSeconds:m,daysLabel:U,hoursLabel:B,minutesLabel:K,secondsLabel:q,digitColor:s,digitBackground:k,digitHoverColor:y,digitHoverBackground:L,labelColor:b,labelHoverColor:co,separatorColor:Q,separatorHoverColor:ho,boxStyle:ro,boxBorderRadius:V,boxPadding:x,boxMargin:X,boxBorderWidth:Y,boxBorderColor:wo,showBoxShadow:Z,boxShadow:H,boxShadowHover:T,itemSpacing:A,align:G,labelPosition:f,labelSpacing:oo,titleTypography:l,contentTypography:r,expiredMessage:yo,animation:P,displaySeparator:D,separatorType:xo,boxesEqual:uo,style:S}=J;se(t,ao,i);let O=(o,n)=>!o||typeof o!="object"?null:n==="mobile"?o.mobile!==""&&o.mobile!==void 0&&o.mobile!==null?o.mobile:o.tablet!==""&&o.tablet!==void 0&&o.tablet!==null?o.tablet:o.desktop:n==="tablet"&&o.tablet!==""&&o.tablet!==void 0&&o.tablet!==null?o.tablet:o.desktop,[a,Wo]=lo(window.digi.responsiveState.activeDevice),[eo,So]=lo({days:30,hours:23,minutes:59,seconds:59}),[$o,ue]=lo(!1),po=Po(null);ko(()=>window.digi.responsiveState.subscribe(n=>{Wo(n)}),[]);let[mo,Co]=lo(()=>{if(window.digi.uiState){let o=window.digi.uiState.getActiveTab(ao);if(o)return o}return"options"}),[pe,me]=lo("normal");ko(()=>{if(!v){let n=new Date;n.setDate(n.getDate()+7),i({endDate:n.toISOString()})}let o=()=>{let n=new Date,p=new Date;v?p=new Date(v):p.setDate(p.getDate()+30);let c=p-n;if(c>0){let d=Math.floor(c/864e5),M=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),z=Math.floor(c%(1e3*60*60)/(1e3*60)),$=Math.floor(c%(1e3*60)/1e3);So({days:d,hours:M,minutes:z,seconds:$})}else So({days:0,hours:0,minutes:0,seconds:0})};return o(),po.current=setInterval(o,1e3),()=>{po.current&&clearInterval(po.current)}},[v,i]);let No=Po(null);ko(()=>{if(P&&P!=="none"){let o=setTimeout(()=>{Oo(t,P,fo,No)},100);return()=>clearTimeout(o)}},[P]);let Fo=()=>{Oo(t,P,fo,No)},qo=[{label:e("Default","digiblocks"),value:"default"},{label:e("Filled","digiblocks"),value:"filled"},{label:e("Outlined","digiblocks"),value:"outlined"},{label:e("Pill","digiblocks"),value:"pill"},{label:e("Rounded","digiblocks"),value:"rounded"},{label:e("Circle","digiblocks"),value:"circle"}],Vo=[{label:e("Bottom","digiblocks"),value:"bottom"},{label:e("Top","digiblocks"),value:"top"},{label:e("Inside","digiblocks"),value:"inside"}],Go=[{label:e("Boxes","digiblocks"),value:"boxes"},{label:e("Simple","digiblocks"),value:"simple"}],jo=[{label:e("Colon","digiblocks"),value:"colon"},{label:e("Hyphen","digiblocks"),value:"hyphen"},{label:e("Slash","digiblocks"),value:"slash"},{label:e("Dot","digiblocks"),value:"dot"}],Jo=[{label:e("None","digiblocks"),value:"none"},...Object.keys(fo).map(o=>({label:o.replace(/-/g," ").replace(/\b\w/g,n=>n.toUpperCase()),value:o}))],_o=[{name:"options",title:e("Options","digiblocks"),icon:vo.optionsIcon},{name:"style",title:e("Style","digiblocks"),icon:vo.styleIcon},{name:"advanced",title:e("Advanced","digiblocks"),icon:vo.advancedIcon}],Ko=[{name:"normal",title:e("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:e("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],I=o=>o.toString().padStart(2,"0"),Qo=()=>{let o=a,n=O(A,a),p=O(oo,a),c="";if(l){l.fontFamily&&(c+=`font-family: ${l.fontFamily};`);let g=O(l.fontSize,o);g&&(c+=`font-size: ${g}${l.fontSizeUnit||"px"};`),l.fontWeight&&(c+=`font-weight: ${l.fontWeight};`),l.fontStyle&&(c+=`font-style: ${l.fontStyle};`),l.textTransform&&(c+=`text-transform: ${l.textTransform};`);let to=O(l.lineHeight,o);to&&(c+=`line-height: ${to}${l.lineHeightUnit||"em"};`);let E=O(l.letterSpacing,o);(E||E===0)&&(c+=`letter-spacing: ${E}${l.letterSpacingUnit||"px"};`)}let d="";if(r){r.fontFamily&&(d+=`font-family: ${r.fontFamily};`);let g=O(r.fontSize,o);g&&(d+=`font-size: ${g}${r.fontSizeUnit||"px"};`),r.fontWeight&&(d+=`font-weight: ${r.fontWeight};`),r.fontStyle&&(d+=`font-style: ${r.fontStyle};`),r.textTransform&&(d+=`text-transform: ${r.textTransform};`);let to=O(r.lineHeight,o);to&&(d+=`line-height: ${to}${r.lineHeightUnit||"em"};`);let E=O(r.letterSpacing,o);(E||E===0)&&(d+=`letter-spacing: ${E}${r.letterSpacingUnit||"px"};`)}let M="";Z&&H&&H.enable&&(M=`box-shadow: ${H.position==="inset"?"inset ":""}${H.horizontal}px ${H.vertical}px ${H.blur}px ${H.spread}px ${H.color};`);let z="";Z&&T&&T.enable&&(z=`box-shadow: ${T.position==="inset"?"inset ":""}${T.horizontal}px ${T.vertical}px ${T.blur}px ${T.spread}px ${T.color};`);let $="";if(S==="boxes")switch(ro){case"filled":$=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${s};
							${N(x,"padding",o)}
							${N(V,"border-radius",o)}
                            ${M}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||k||"#e0e0e0"};
                            color: ${y||s};
                            ${z}
                        }
                    `;break;case"outlined":$=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${s};
							${N(x,"padding",o)}
							border-style: solid;
							${N(Y,"border-width",o)}
							border-color: ${wo||"#e0e0e0"};
							${N(V,"border-radius",o)}
							${N(x,"padding",o)}
                            ${M}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||"transparent"};
                            color: ${y||s};
                            ${z}
                        }
                    `;break;case"pill":$=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${s};
                            border-radius: 50px;
							${N(x,"padding",o)}
                            ${M}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||k||"#e0e0e0"};
                            color: ${y||s};
                            ${z}
                        }
                    `;break;case"rounded":$=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${s};
                            border-radius: 8px;
							${N(x,"padding",o)}
                            ${M}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||k||"#e0e0e0"};
                            color: ${y||s};
                            ${z}
                        }
                    `;break;case"circle":$=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${s};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							${N(x,"padding",o)}
                            ${M}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||k||"#e0e0e0"};
                            color: ${y||s};
                            ${z}
                        }
                    `;break;case"default":default:$=`
                        .${t} .digiblocks-countdown-item-inner {
                            color: ${s};
                            ${M}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${y||s};
                            ${z}
                        }
                    `;break}else $=`
                .${t} .digiblocks-countdown-item-inner {
                    color: ${s};
                }
                .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${y||s};
                }
            `;let To="";if(D){let g="";switch(xo){case"colon":g=":";break;case"hyphen":g="-";break;case"slash":g="/";break;case"dot":g="\u2022";break;default:g=":";break}To=`
                .${t} .digiblocks-countdown-separator {
                    color: ${Q};
                    font-size: ${l&&l.fontSize&&l.fontSize[o]?l.fontSize[o]+(l.fontSizeUnit||"px"):"2rem"};
                }
                .${t} .digiblocks-countdown-separator::before {
                    content: "${g}";
                }
                .${t}:hover .digiblocks-countdown-separator {
                    color: ${ho||Q};
                }
            `}let Do="";S==="boxes"&&uo&&(Do=`
                .${t} .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                .${t} .digiblocks-countdown-item-inner {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                }
            `);let io="";return f==="top"?io=`
                .${t} .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                .${t} .digiblocks-countdown-label {
                    margin-bottom: ${p}px;
                    margin-top: 0;
                }
            `:f==="inside"?S==="boxes"?io=`
                    .${t} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${t} .digiblocks-countdown-digit {
                        margin-bottom: ${p}px;
                    }
                    .${t} .digiblocks-countdown-label {
                        margin-top: 0;
                    }
                    .${t} .digiblocks-countdown-item-inner {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `:io=`
                    .${t} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${t} .digiblocks-countdown-label {
                        margin-top: ${p}px;
                    }
                `:io=`
                .${t} .digiblocks-countdown-item {
                    flex-direction: column;
                }
                .${t} .digiblocks-countdown-label {
                    margin-top: ${p}px;
                }
            `,`
            /* Countdown Block - ${t} */
            .${t} {
				${N(X,"margin",o)}
                text-align: ${G};
                display: block;
            }
            
            .${t} .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${G==="center"?"center":G==="right"?"flex-end":"flex-start"};
                gap: ${n}px;
            }
            
            .${t} .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            .${t} .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            .${t} .digiblocks-countdown-digit {
                ${c}
            }
            
            .${t} .digiblocks-countdown-label {
                ${d}
                color: ${b||"#666666"};
                transition: color 0.3s ease;
            }
            
            .${t}:hover .digiblocks-countdown-label {
                color: ${co||b||"#666666"};
            }
            
            .${t} .digiblocks-countdown-expired {
                ${c}
                color: ${s};
                text-align: ${G};
            }
            
            /* Box style specific */
            ${$}
            
            /* Separator styles */
            ${To}
            
            /* Equal width styles */
            ${Do}
            
            /* Label positioning */
            ${io}

			/* Visibility Controls */
			${u.desktop?`
				@media (min-width: 992px) {
					.${t} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${u.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${t} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${u.mobile?`
				@media (max-width: 767px) {
					.${t} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Bo=()=>{switch(mo){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(ne,{label:e("Style","digiblocks"),value:S,onChange:o=>i({style:o}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Go.map(o=>wp.element.createElement(le,{key:o.value,value:o.value,label:o.label}))),S==="boxes"&&wp.element.createElement(bo,{label:e("Box Style","digiblocks"),value:ro,options:qo,onChange:o=>i({boxStyle:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),S==="boxes"&&wp.element.createElement(C,{label:e("Equal Width Boxes","digiblocks"),checked:!!uo,onChange:()=>i({boxesEqual:!uo}),help:e("Make all countdown boxes the same width","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(bo,{label:e("Label Position","digiblocks"),value:f,options:Vo,onChange:o=>i({labelPosition:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(C,{label:e("Show Separators","digiblocks"),checked:!!D,onChange:()=>i({displaySeparator:!D}),__nextHasNoMarginBottom:!0}),D&&wp.element.createElement(bo,{label:e("Separator Type","digiblocks"),value:xo,options:jo,onChange:o=>i({separatorType:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ae,{label:e("End Date & Time","digiblocks"),id:"countdown-date-time",__nextHasNoMarginBottom:!0},wp.element.createElement(ie,{currentDate:v,onChange:o=>i({endDate:o}),is12Hour:!0})),wp.element.createElement(no,{label:e("Expired Message","digiblocks"),value:yo,onChange:o=>i({expiredMessage:o}),placeholder:e("Time's up!","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(no,{label:e("Days Label","digiblocks"),value:U,onChange:o=>i({daysLabel:o}),placeholder:e("Days","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(no,{label:e("Hours Label","digiblocks"),value:B,onChange:o=>i({hoursLabel:o}),placeholder:e("Hours","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(no,{label:e("Minutes Label","digiblocks"),value:K,onChange:o=>i({minutesLabel:o}),placeholder:e("Minutes","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(no,{label:e("Seconds Label","digiblocks"),value:q,onChange:o=>i({secondsLabel:o}),placeholder:e("Seconds","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(C,{label:e("Show Days","digiblocks"),checked:h,onChange:()=>i({showDays:!h}),__nextHasNoMarginBottom:!0}),wp.element.createElement(C,{label:e("Show Hours","digiblocks"),checked:_,onChange:()=>i({showHours:!_}),__nextHasNoMarginBottom:!0}),wp.element.createElement(C,{label:e("Show Minutes","digiblocks"),checked:w,onChange:()=>i({showMinutes:!w}),__nextHasNoMarginBottom:!0}),wp.element.createElement(C,{label:e("Show Seconds","digiblocks"),checked:m,onChange:()=>i({showSeconds:!m}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(W,{tab:"style",name:"colors",title:e("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ee,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Ko},o=>o.name==="normal"?wp.element.createElement(zo,{title:e("Normal Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:s,onChange:n=>i({digitColor:n}),label:e("Digit Color","digiblocks")},...S==="boxes"?[{value:k,onChange:n=>i({digitBackground:n}),label:e("Box Background","digiblocks")}]:[],{value:b,onChange:n=>i({labelColor:n}),label:e("Label Color","digiblocks")},...D?[{value:Q,onChange:n=>i({separatorColor:n}),label:e("Separator Color","digiblocks")}]:[],...S==="boxes"&&ro==="outlined"?[{value:wo,onChange:n=>i({boxBorderColor:n}),label:e("Border Color","digiblocks")}]:[]]}):wp.element.createElement(zo,{title:e("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:n=>i({digitHoverColor:n}),label:e("Digit Color","digiblocks")},...S==="boxes"?[{value:L,onChange:n=>i({digitHoverBackground:n}),label:e("Box Background","digiblocks")}]:[],{value:co,onChange:n=>i({labelHoverColor:n}),label:e("Label Color","digiblocks")},...D?[{value:ho,onChange:n=>i({separatorHoverColor:n}),label:e("Separator Color","digiblocks")}]:[]]}))),wp.element.createElement(W,{tab:"style",name:"typography",title:e("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Io,{label:e("Digit Typography","digiblocks"),value:l,onChange:o=>i({titleTypography:o}),defaults:{fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"600"}}),wp.element.createElement(Io,{label:e("Label Typography","digiblocks"),value:r,onChange:o=>i({contentTypography:o}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em"}})),S==="boxes"&&wp.element.createElement(W,{tab:"style",name:"boxStyles",title:e("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:e("Border Radius","digiblocks")},wp.element.createElement(go,{values:V&&V[a]?V[a]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:o=>i({boxBorderRadius:{...V,[a]:o}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),ro==="outlined"&&wp.element.createElement(j,{label:e("Border Width","digiblocks")},wp.element.createElement(go,{values:Y&&Y[a]?Y[a]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:o=>i({boxBorderWidth:{...Y,[a]:o}})})),wp.element.createElement(j,{label:e("Padding","digiblocks")},wp.element.createElement(go,{values:x&&x[a]?x[a]:{top:10,right:10,bottom:10,left:10,unit:"px"},onChange:o=>i({boxPadding:{...x,[a]:o}})})),wp.element.createElement(j,{label:e("Margin","digiblocks")},wp.element.createElement(go,{values:X&&X[a]?X[a]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:o=>i({boxMargin:{...X,[a]:o}})})),wp.element.createElement(C,{label:e("Box Shadow","digiblocks"),checked:!!Z,onChange:()=>i({showBoxShadow:!Z}),__nextHasNoMarginBottom:!0}),Z&&wp.element.createElement(de,{normalValue:H,hoverValue:T,onNormalChange:o=>i({boxShadow:o}),onHoverChange:o=>i({boxShadowHover:o})})),wp.element.createElement(W,{tab:"style",name:"spacing",title:e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:e("Items Spacing","digiblocks")},wp.element.createElement(Lo,{value:A&&A[a]!==void 0?A[a]:20,onChange:o=>i({itemSpacing:{...A,[a]:o}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(j,{label:e("Label Spacing","digiblocks")},wp.element.createElement(Lo,{value:oo&&oo[a]!==void 0?oo[a]:5,onChange:o=>i({labelSpacing:{...oo,[a]:o}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(W,{tab:"advanced",name:"animation",title:e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(bo,{label:e("Animation Effect","digiblocks"),value:P,options:Jo,onChange:o=>i({animation:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),P&&P!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(te,{variant:"secondary",isSecondary:!0,onClick:Fo,disabled:$o,style:{width:"100%"}},e($o?"Animating...":"Preview Animation","digiblocks")))),wp.element.createElement(W,{tab:"advanced",name:"visibility",title:e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,e("Editor Note:","digiblocks")),wp.element.createElement("br",null),e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(C,{label:e("Hide on Desktop","digiblocks"),checked:u.desktop,onChange:o=>i({visibility:{...u,desktop:o}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(C,{label:e("Hide on Tablet","digiblocks"),checked:u.tablet,onChange:o=>i({visibility:{...u,tablet:o}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(C,{label:e("Hide on Mobile","digiblocks"),checked:u.mobile,onChange:o=>i({visibility:{...u,mobile:o}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(W,{tab:"advanced",name:"additional",title:e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:so||"",onChange:o=>i({anchor:o.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:F||"",onChange:o=>i({customClasses:o.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},e("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ho=Zo({className:`digiblocks-countdown ${t} ${F||""}`,id:so||null});if(!h&&!_&&!w&&!m)return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mo,null,wp.element.createElement(Ro,{tabs:_o,activeTab:mo,onSelect:Co},Bo())),wp.element.createElement("div",{...Ho,style:{textAlign:G}},wp.element.createElement("div",{className:"digiblocks-countdown-error"},e("Please enable at least one time unit in the block settings.","digiblocks"))));let Xo=()=>{let{days:o,hours:n,minutes:p,seconds:c}=eo,d=[];return h&&(d.push(wp.element.createElement("div",{key:"days",className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},f==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(o)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},U||e("Days","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(o))),f!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},U||e("Days","digiblocks")))),D&&(_||w||m)&&d.push(wp.element.createElement("div",{key:"days-separator",className:"digiblocks-countdown-separator"}))),_&&(d.push(wp.element.createElement("div",{key:"hours",className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},f==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(n)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},B||e("Hours","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(n))),f!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},B||e("Hours","digiblocks")))),D&&(w||m)&&d.push(wp.element.createElement("div",{key:"hours-separator",className:"digiblocks-countdown-separator"}))),w&&(d.push(wp.element.createElement("div",{key:"minutes",className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},f==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(p)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},K||e("Minutes","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(p))),f!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},K||e("Minutes","digiblocks")))),D&&m&&d.push(wp.element.createElement("div",{key:"minutes-separator",className:"digiblocks-countdown-separator"}))),m&&d.push(wp.element.createElement("div",{key:"seconds",className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},f==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(c)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},q||e("Seconds","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},I(c))),f!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},q||e("Seconds","digiblocks")))),d},Yo=eo.days===0&&eo.hours===0&&eo.minutes===0&&eo.seconds===0;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ao,null,wp.element.createElement(oe,{value:G,onChange:o=>i({align:o})})),wp.element.createElement(Mo,null,wp.element.createElement(Ro,{tabs:_o,activeTab:mo,onSelect:Co},Bo())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Qo()}}),wp.element.createElement("div",{...Ho},Yo?wp.element.createElement("div",{className:"digiblocks-countdown-expired"},yo||e("Time's up!","digiblocks")):wp.element.createElement("div",{className:"digiblocks-countdown-container"},Xo())))},Uo=ce;var{useBlockProps:re}=window.wp.blockEditor,be=({attributes:J})=>{let{id:i,anchor:ao,customClasses:t,endDate:so,showDays:u,showHours:F,showMinutes:v,showSeconds:h,daysLabel:_,hoursLabel:w,minutesLabel:m,secondsLabel:U,displaySeparator:B,separatorType:K,expiredMessage:q,animation:s,align:k,style:y,boxesEqual:L,labelPosition:b}=J,co=["digiblocks-countdown",i,`align-${k}`,s!=="none"?`animate-${s}`:"",y==="boxes"?"digiblocks-countdown-boxes":"digiblocks-countdown-simple",L?"digiblocks-countdown-equal-width":"",`digiblocks-countdown-labels-${b}`,B?"digiblocks-countdown-has-separators":"",B?`digiblocks-countdown-separator-${K}`:"",t||""].filter(Boolean).join(" "),Q=re.save({className:co,id:ao||null,"data-end-date":so||"","data-show-days":u?"true":"false","data-show-hours":F?"true":"false","data-show-minutes":v?"true":"false","data-show-seconds":h?"true":"false","data-days-label":_||"Days","data-hours-label":w||"Hours","data-minutes-label":m||"Minutes","data-seconds-label":U||"Seconds","data-expired-message":q||"Time's up!","data-label-position":b||"bottom"});return wp.element.createElement("div",{...Q},wp.element.createElement("div",{className:"digiblocks-countdown-container"},u&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},b==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},_||"Days")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),b!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},_||"Days")),B&&(F||v||h)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),F&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},b==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},w||"Hours")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),b!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},w||"Hours")),B&&(v||h)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),v&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},b==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},m||"Minutes")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),b!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},m||"Minutes")),B&&h&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),h&&wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},b==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},U||"Seconds")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),b!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},U||"Seconds"))),wp.element.createElement("div",{className:"digiblocks-countdown-expired",style:{display:"none"}},q||"Time's up!"))},Eo=be;var{__:R}=window.wp.i18n,{registerBlockType:ge}=window.wp.blocks;ge("digiblocks/countdown",{apiVersion:2,title:digiBlocksData.blocks.countdown.title,category:"digiblocks",icon:{src:()=>{let{viewbox:J,path:i}=digiBlocksData.blocks.countdown.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${J}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:i}))}},description:digiBlocksData.blocks.countdown.description,keywords:[R("countdown","digiblocks"),R("timer","digiblocks"),R("clock","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},endDate:{type:"string",default:""},showDays:{type:"boolean",default:!0},showHours:{type:"boolean",default:!0},showMinutes:{type:"boolean",default:!0},showSeconds:{type:"boolean",default:!0},daysLabel:{type:"string",default:R("Days","digiblocks")},hoursLabel:{type:"string",default:R("Hours","digiblocks")},minutesLabel:{type:"string",default:R("Minutes","digiblocks")},secondsLabel:{type:"string",default:R("Seconds","digiblocks")},digitColor:{type:"string",default:""},digitBackground:{type:"string",default:"#f0f0f0"},digitHoverColor:{type:"string",default:""},digitHoverBackground:{type:"string",default:""},labelColor:{type:"string",default:"#666666"},labelHoverColor:{type:"string",default:""},separatorColor:{type:"string",default:""},separatorHoverColor:{type:"string",default:""},boxStyle:{type:"string",default:"default"},boxBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderColor:{type:"string",default:"#e0e0e0"},showBoxShadow:{type:"boolean",default:!1},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},itemSpacing:{type:"object",default:{desktop:48,tablet:"",mobile:""}},align:{type:"string",default:"center"},labelPosition:{type:"string",default:"bottom"},labelSpacing:{type:"object",default:{desktop:5,tablet:"",mobile:""}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:70,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},expiredMessage:{type:"string",default:R("Time's up!","digiblocks")},animation:{type:"string",default:"none"},displaySeparator:{type:"boolean",default:!1},separatorType:{type:"string",default:"colon"},boxesEqual:{type:"boolean",default:!1},style:{type:"string",default:"boxes"}},example:{attributes:{endDate:new Date(Date.now()+2592e6).toISOString(),style:"boxes",boxStyle:"filled",digitColor:"#ffffff",digitBackground:"#1e73be",labelColor:"#333333",showDays:!0,showHours:!0,showMinutes:!0,showSeconds:!0,titleTypography:{fontSize:{desktop:32}},contentTypography:{fontSize:{desktop:14}}}},edit:Uo,save:Eo});})();
