(()=>{var{__:o}=window.wp.i18n,{useBlockProps:xo,InspectorControls:Qe,PanelColorSettings:Ae,BlockControls:wo,AlignmentToolbar:yo}=window.wp.blockEditor,{TextControl:ie,SelectControl:te,RangeControl:Be,TabPanel:$o,ToggleControl:F,DateTimePicker:Co,Button:So,__experimentalToggleGroupControl:Te,__experimentalToggleGroupControlOption:ge,BaseControl:_o}=window.wp.components,{useState:pe,useEffect:He,useRef:eo}=window.wp.element,{useBlockId:No,getDimensionCSS:L,animations:De,animationPreview:oo}=digi.utils,{tabIcons:Me}=digi.icons,{ResponsiveControl:io,ResponsiveRangeControl:to,DimensionControl:he,TypographyControl:lo,BoxShadowControl:Bo,CustomTabPanel:no,TabPanelBody:V,TransformControl:To}=digi.components,Ho=({attributes:le,setAttributes:i,clientId:me})=>{let{id:t,anchor:fe,visibility:$,customClasses:A,endDate:N,showDays:B,showHours:I,showMinutes:T,showSeconds:C,daysLabel:J,hoursLabel:X,minutesLabel:ne,secondsLabel:ee,digitColor:b,digitBackground:S,digitHoverColor:H,digitHoverBackground:W,labelColor:ae,labelHoverColor:ve,separatorColor:k,separatorHoverColor:ke,boxStyle:q,boxBorderRadius:xe,boxPadding:K,boxMargin:ze,boxBorderWidth:Oe,boxBorderColor:Pe,boxShadow:Y,boxShadowHover:R,itemSpacing:se,align:oe,labelPosition:_,labelSpacing:de,titleTypography:g,contentTypography:x,expiredMessage:Le,animation:D,animationDuration:we,animationDelay:ye,displaySeparator:E,separatorType:Ve,boxesEqual:$e,style:M,position:ce,horizontalOrientation:Ie,horizontalOffset:z,verticalOrientation:Xe,verticalOffset:O,zIndex:re,transform:Ce,transformHover:G}=le;No(t,me,i);let h=(e,l)=>{if(!e||typeof e!="object")return null;let d=n=>n===""||n===void 0||n===null?!0:typeof n=="object"&&n!==null?n.value===""||n.value===void 0||n.value===null:!1;return l==="mobile"?d(e.mobile)?d(e.tablet)?e.desktop:e.tablet:e.mobile:l==="tablet"?d(e.tablet)?e.desktop:e.tablet:e.desktop},[w,co]=pe(window.digi.responsiveState.activeDevice),[ue,Ye]=pe({days:30,hours:23,minutes:59,seconds:59}),[Re,Oo]=pe(!1),Se=eo(null);He(()=>window.digi.responsiveState.subscribe(l=>{co(l)}),[]);let[_e,Ee]=pe(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(me);if(e)return e}return"options"}),[Po,Lo]=pe("normal");He(()=>{if(!N){let l=new Date;l.setDate(l.getDate()+7),i({endDate:l.toISOString()})}let e=()=>{let l=new Date,d=new Date;N?d=new Date(N):d.setDate(d.getDate()+30);let n=d-l;if(n>0){let r=Math.floor(n/864e5),m=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),f=Math.floor(n%(1e3*60*60)/(1e3*60)),y=Math.floor(n%(1e3*60)/1e3);Ye({days:r,hours:m,minutes:f,seconds:y})}else Ye({days:0,hours:0,minutes:0,seconds:0})};return e(),Se.current=setInterval(e,1e3),()=>{Se.current&&clearInterval(Se.current)}},[N,i]);let je=eo(null);He(()=>{if(D&&D!=="none"){let e=setTimeout(()=>{oo(t,D,De,je,we,ye)},100);return()=>clearTimeout(e)}},[D]);let ro=()=>{oo(t,D,De,je,we,ye)},uo=[{label:o("Default","digiblocks"),value:"default"},{label:o("Filled","digiblocks"),value:"filled"},{label:o("Outlined","digiblocks"),value:"outlined"},{label:o("Pill","digiblocks"),value:"pill"},{label:o("Rounded","digiblocks"),value:"rounded"},{label:o("Circle","digiblocks"),value:"circle"}],bo=[{label:o("Bottom","digiblocks"),value:"bottom"},{label:o("Top","digiblocks"),value:"top"},{label:o("Inside","digiblocks"),value:"inside"}],go=[{label:o("Boxes","digiblocks"),value:"boxes"},{label:o("Simple","digiblocks"),value:"simple"}],po=[{label:o("Colon","digiblocks"),value:"colon"},{label:o("Hyphen","digiblocks"),value:"hyphen"},{label:o("Slash","digiblocks"),value:"slash"},{label:o("Dot","digiblocks"),value:"dot"}],mo=[{label:o("None","digiblocks"),value:"none"},...Object.keys(De).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,l=>l.toUpperCase()),value:e}))],Fe=[{name:"options",title:o("Options","digiblocks"),icon:Me.optionsIcon},{name:"style",title:o("Style","digiblocks"),icon:Me.styleIcon},{name:"advanced",title:o("Advanced","digiblocks"),icon:Me.advancedIcon}],fo=[{name:"normal",title:o("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:o("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],U=e=>e.toString().padStart(2,"0"),We=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"vw":case"vh":return 100;default:return 2e3}},qe=e=>{switch(e){case"%":case"vw":case"vh":return 1;case"em":case"rem":return .1;default:return 1}},Ge=(e,l)=>{let d={left:"0%",center:"50%",right:"100%"},n={top:"0%",center:"50%",bottom:"100%"},r=d[e.xAnchor?.[l]||"center"],m=n[e.yAnchor?.[l]||"center"];return`${r} ${m}`},Ue=(e,l)=>{if(!e)return"";let d=[],n=a=>{if(!a)return"";let c=a[l],j=v=>v===""||v===void 0||v===null?!0:typeof v=="object"&&v!==null?v.value===""||v.value===void 0||v.value===null:!1;return l==="tablet"&&j(c)&&(c=a.desktop),l==="mobile"&&j(c)&&(c=a.tablet,j(c)&&(c=a.desktop)),typeof c=="object"&&c!==null?c.value!==void 0?c.value:"":c},r=n(e.rotate);if(r!==""&&r!==void 0&&r!==null){if(e.rotate3d){let a=n(e.perspective);a!==""&&a!==void 0&&a!==null&&d.push(`perspective(${a}px)`)}d.push(`rotate(${r}deg)`)}if(e.rotate3d){let a=n(e.rotateX);a!==""&&a!==void 0&&a!==null&&d.push(`rotateX(${a}deg)`);let c=n(e.rotateY);c!==""&&c!==void 0&&c!==null&&d.push(`rotateY(${c}deg)`)}let m=e.offsetX?.[l]?.value,f=e.offsetY?.[l]?.value,y=m!==""&&m!==void 0&&m!==null,be=f!==""&&f!==void 0&&f!==null;if(y||be){let a=y?`${m}${e.offsetX[l].unit||"px"}`:"0",c=be?`${f}${e.offsetY[l].unit||"px"}`:"0";d.push(`translate(${a}, ${c})`)}if(e.keepProportions){let a=n(e.scale);a!==""&&a!==void 0&&a!==null&&a!=1&&d.push(`scale(${a})`)}else{let a=n(e.scaleX),c=n(e.scaleY),j=a!==""&&a!==void 0&&a!==null?a:1,v=c!==""&&c!==void 0&&c!==null?c:1;(j!=1||v!=1)&&d.push(`scale(${j}, ${v})`)}let Q=n(e.skewX);Q!==""&&Q!==void 0&&Q!==null&&d.push(`skewX(${Q}deg)`);let P=n(e.skewY);return P!==""&&P!==void 0&&P!==null&&d.push(`skewY(${P}deg)`),e.flipHorizontal&&d.push("scaleX(-1)"),e.flipVertical&&d.push("scaleY(-1)"),d.length>0?d.join(" "):""},vo=()=>{let e=w,l=h(se,w),d=h(de,w),n="";if(g){g.fontFamily&&(n+=`font-family: ${g.fontFamily};`);let s=h(g.fontSize,e);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(n+=`font-size: ${s.value}${s.unit!==null?s.unit:""};`),g.fontWeight&&(n+=`font-weight: ${g.fontWeight};`),g.fontStyle&&(n+=`font-style: ${g.fontStyle};`),g.textTransform&&(n+=`text-transform: ${g.textTransform};`);let p=h(g.lineHeight,e);p&&p.value!==""&&p.value!==null&&p.value!==void 0&&(n+=`line-height: ${p.value}${p.unit!==null?p.unit:""};`);let u=h(g.letterSpacing,e);u&&u.value!==""&&u.value!==null&&u.value!==void 0&&(n+=`letter-spacing: ${u.value}${u.unit!==null?u.unit:""};`)}let r="";if(x){x.fontFamily&&(r+=`font-family: ${x.fontFamily};`);let s=h(x.fontSize,e);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(r+=`font-size: ${s.value}${s.unit!==null?s.unit:""};`),x.fontWeight&&(r+=`font-weight: ${x.fontWeight};`),x.fontStyle&&(r+=`font-style: ${x.fontStyle};`),x.textTransform&&(r+=`text-transform: ${x.textTransform};`);let p=h(x.lineHeight,e);p&&p.value!==""&&p.value!==null&&p.value!==void 0&&(r+=`line-height: ${p.value}${p.unit!==null?p.unit:""};`);let u=h(x.letterSpacing,e);u&&u.value!==""&&u.value!==null&&u.value!==void 0&&(r+=`letter-spacing: ${u.value}${u.unit!==null?u.unit:""};`)}let m="";Y&&Y.enable&&(m=`box-shadow: ${Y.position==="inset"?"inset ":""}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`);let f="";R&&R.enable&&(f=`box-shadow: ${R.position==="inset"?"inset ":""}${R.horizontal}px ${R.vertical}px ${R.blur}px ${R.spread}px ${R.color};`);let y="";if(M==="boxes")switch(q){case"filled":y=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${S||"#f0f0f0"};
                            color: ${b};
							${L(K,"padding",e)}
							${L(xe,"border-radius",e)}
                            ${m}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${W||S||"#e0e0e0"};
                            color: ${H||b};
                            ${f}
                        }
                    `;break;case"outlined":y=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${b};
							${L(K,"padding",e)}
							border-style: solid;
							${L(Oe,"border-width",e)}
							border-color: ${Pe||"#e0e0e0"};
							${L(xe,"border-radius",e)}
							${L(K,"padding",e)}
                            ${m}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${W||"transparent"};
                            color: ${H||b};
                            ${f}
                        }
                    `;break;case"pill":y=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${S||"#f0f0f0"};
                            color: ${b};
                            border-radius: 50px;
							${L(K,"padding",e)}
                            ${m}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${W||S||"#e0e0e0"};
                            color: ${H||b};
                            ${f}
                        }
                    `;break;case"rounded":y=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${S||"#f0f0f0"};
                            color: ${b};
                            border-radius: 8px;
							${L(K,"padding",e)}
                            ${m}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${W||S||"#e0e0e0"};
                            color: ${H||b};
                            ${f}
                        }
                    `;break;case"circle":y=`
                        .${t} .digiblocks-countdown-item-inner {
                            background-color: ${S||"#f0f0f0"};
                            color: ${b};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							${L(K,"padding",e)}
                            ${m}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${W||S||"#e0e0e0"};
                            color: ${H||b};
                            ${f}
                        }
                    `;break;case"default":default:y=`
                        .${t} .digiblocks-countdown-item-inner {
                            color: ${b};
                            ${m}
                        }
                        .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${H||b};
                            ${f}
                        }
                    `;break}else y=`
                .${t} .digiblocks-countdown-item-inner {
                    color: ${b};
                }
                .${t} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${H||b};
                }
            `;let be="";if(E){let s="";switch(Ve){case"colon":s=":";break;case"hyphen":s="-";break;case"slash":s="/";break;case"dot":s="\u2022";break;default:s=":";break}be=`
                .${t} .digiblocks-countdown-separator {
                    color: ${k};
                    font-size: ${h(g?.fontSize,e)&&h(g.fontSize,e).value!==""&&h(g.fontSize,e).value!==null&&h(g.fontSize,e).value!==void 0?h(g.fontSize,e).value+h(g.fontSize,e).unit:"2rem"};
                }
                .${t} .digiblocks-countdown-separator::before {
                    content: "${s}";
                }
                .${t}:hover .digiblocks-countdown-separator {
                    color: ${ke||k};
                }
            `}let Q="";M==="boxes"&&$e&&(Q=`
                .${t} .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                .${t} .digiblocks-countdown-item-inner {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                }
            `);let P="";_==="top"?P=`
                .${t} .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                .${t} .digiblocks-countdown-label {
                    margin-bottom: ${d}px;
                    margin-top: 0;
                }
            `:_==="inside"?M==="boxes"?P=`
                    .${t} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${t} .digiblocks-countdown-digit {
                        margin-bottom: ${d}px;
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
                `:P=`
                    .${t} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${t} .digiblocks-countdown-label {
                        margin-top: ${d}px;
                    }
                `:P=`
                .${t} .digiblocks-countdown-item {
                    flex-direction: column;
                }
                .${t} .digiblocks-countdown-label {
                    margin-top: ${d}px;
                }
            `;let a="";if(ce&&ce!=="default"){a+=`position: ${ce} !important;`;let s=z?.[e]?.value,p=z?.[e]?.unit||"px";(s===""||s===void 0)&&(e==="tablet"?s=z?.desktop?.value:e==="mobile"&&(s=z?.tablet?.value!==""&&z?.tablet?.value!==void 0?z?.tablet?.value:z?.desktop?.value)),s!==""&&s!==void 0&&(Ie==="left"?a+=`left: ${s}${p};`:a+=`right: ${s}${p};`);let u=O?.[e]?.value,Ke=O?.[e]?.unit||"px";(u===""||u===void 0)&&(e==="tablet"?u=O?.desktop?.value:e==="mobile"&&(u=O?.tablet?.value!==""&&O?.tablet?.value!==void 0?O?.tablet?.value:O?.desktop?.value)),u!==""&&u!==void 0&&(Xe==="top"?a+=`top: ${u}${Ke};`:a+=`bottom: ${u}${Ke};`)}re!==""&&re!==void 0&&re!==null&&(a+=`z-index: ${re};`);let c="",j=Ue(Ce,e);j&&(c+=`transform: ${j};`,c+=`transform-origin: ${Ge(Ce,e)};`);let v=Ue(G,e);if(v&&G&&G.transitionDuration!==""&&G.transitionDuration!==void 0&&G.transitionDuration!==null){let s=G.transitionDuration;c+=`transition: transform ${s}ms ease;`}let Ne="";return v&&(Ne+=`transform: ${v};`,Ne+=`transform-origin: ${Ge(G,e)};`),`
            /* Countdown Block - ${t} */
            .${t} {
				${L(ze,"margin",e)}
                text-align: ${oe};
                display: block;
                ${a}
				${c}
            }

            .${t}:hover {
                ${f}
				${Ne}
            }
            
            .${t} .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${oe==="center"?"center":oe==="right"?"flex-end":"flex-start"};
                gap: ${l}px;
            }
            
            .${t} .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            .${t} .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            .${t} .digiblocks-countdown-digit {
                ${n}
            }
            
            .${t} .digiblocks-countdown-label {
                ${r}
                color: ${ae||"#666666"};
                transition: color 0.3s ease;
            }
            
            .${t}:hover .digiblocks-countdown-label {
                color: ${ve||ae||"#666666"};
            }
            
            .${t} .digiblocks-countdown-expired {
                ${n}
                color: ${b};
                text-align: ${oe};
            }
            
            /* Box style specific */
            ${y}
            
            /* Separator styles */
            ${be}
            
            /* Equal width styles */
            ${Q}
            
            /* Label positioning */
            ${P}

			/* Visibility Controls */
			${$.desktop?`
				@media (min-width: 992px) {
					.${t} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${$.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${t} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${$.mobile?`
				@media (max-width: 767px) {
					.${t} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Ze=()=>{switch(_e){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Te,{label:o("Style","digiblocks"),value:M,onChange:e=>i({style:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},go.map(e=>wp.element.createElement(ge,{key:e.value,value:e.value,label:e.label}))),M==="boxes"&&wp.element.createElement(te,{label:o("Box Style","digiblocks"),value:q,options:uo,onChange:e=>i({boxStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),M==="boxes"&&wp.element.createElement(F,{label:o("Equal Width Boxes","digiblocks"),checked:!!$e,onChange:()=>i({boxesEqual:!$e}),help:o("Make all countdown boxes the same width","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(te,{label:o("Label Position","digiblocks"),value:_,options:bo,onChange:e=>i({labelPosition:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:o("Show Separators","digiblocks"),checked:!!E,onChange:()=>i({displaySeparator:!E}),__nextHasNoMarginBottom:!0}),E&&wp.element.createElement(te,{label:o("Separator Type","digiblocks"),value:Ve,options:po,onChange:e=>i({separatorType:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(_o,{label:o("End Date & Time","digiblocks"),id:"countdown-date-time",__nextHasNoMarginBottom:!0},wp.element.createElement(Co,{currentDate:N,onChange:e=>i({endDate:e}),is12Hour:!0})),wp.element.createElement(ie,{label:o("Expired Message","digiblocks"),value:Le,onChange:e=>i({expiredMessage:e}),placeholder:o("Time's up!","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ie,{label:o("Days Label","digiblocks"),value:J,onChange:e=>i({daysLabel:e}),placeholder:o("Days","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ie,{label:o("Hours Label","digiblocks"),value:X,onChange:e=>i({hoursLabel:e}),placeholder:o("Hours","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ie,{label:o("Minutes Label","digiblocks"),value:ne,onChange:e=>i({minutesLabel:e}),placeholder:o("Minutes","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ie,{label:o("Seconds Label","digiblocks"),value:ee,onChange:e=>i({secondsLabel:e}),placeholder:o("Seconds","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:o("Show Days","digiblocks"),checked:B,onChange:()=>i({showDays:!B}),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:o("Show Hours","digiblocks"),checked:I,onChange:()=>i({showHours:!I}),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:o("Show Minutes","digiblocks"),checked:T,onChange:()=>i({showMinutes:!T}),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:o("Show Seconds","digiblocks"),checked:C,onChange:()=>i({showSeconds:!C}),__nextHasNoMarginBottom:!0}),wp.element.createElement(io,{label:o("Items Spacing","digiblocks")},wp.element.createElement(Be,{value:se&&se[w]!==void 0?se[w]:20,onChange:e=>i({itemSpacing:{...se,[w]:e}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(io,{label:o("Label Spacing","digiblocks")},wp.element.createElement(Be,{value:de&&de[w]!==void 0?de[w]:5,onChange:e=>i({labelSpacing:{...de,[w]:e}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(V,{tab:"style",name:"colors",title:o("Colors","digiblocks"),initialOpen:!0},wp.element.createElement($o,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:fo},e=>e.name==="normal"?wp.element.createElement(Ae,{title:o("Normal Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:b,onChange:l=>i({digitColor:l}),label:o("Digit Color","digiblocks")},...M==="boxes"?[{value:S,onChange:l=>i({digitBackground:l}),label:o("Box Background","digiblocks")}]:[],{value:ae,onChange:l=>i({labelColor:l}),label:o("Label Color","digiblocks")},...E?[{value:k,onChange:l=>i({separatorColor:l}),label:o("Separator Color","digiblocks")}]:[],...M==="boxes"&&q==="outlined"?[{value:Pe,onChange:l=>i({boxBorderColor:l}),label:o("Border Color","digiblocks")}]:[]]}):wp.element.createElement(Ae,{title:o("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:H,onChange:l=>i({digitHoverColor:l}),label:o("Digit Color","digiblocks")},...M==="boxes"?[{value:W,onChange:l=>i({digitHoverBackground:l}),label:o("Box Background","digiblocks")}]:[],{value:ve,onChange:l=>i({labelHoverColor:l}),label:o("Label Color","digiblocks")},...E?[{value:ke,onChange:l=>i({separatorHoverColor:l}),label:o("Separator Color","digiblocks")}]:[]]}))),wp.element.createElement(V,{tab:"style",name:"typography",title:o("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(lo,{label:o("Digit Typography","digiblocks"),value:g,onChange:e=>i({titleTypography:e})}),wp.element.createElement(lo,{label:o("Label Typography","digiblocks"),value:x,onChange:e=>i({contentTypography:e})})),M==="boxes"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(V,{tab:"style",name:"boxStyles",title:o("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(he,{label:o("Border Radius","digiblocks"),value:xe,onChange:e=>i({boxBorderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}),q==="outlined"&&wp.element.createElement(he,{label:o("Border Width","digiblocks"),value:Oe,onChange:e=>i({boxBorderWidth:e})})),wp.element.createElement(V,{tab:"style",name:"shadow",title:o("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Bo,{normalValue:Y,hoverValue:R,onNormalChange:e=>i({boxShadow:e}),onHoverChange:e=>i({boxShadowHover:e})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(V,{tab:"advanced",name:"spacing",title:o("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(he,{label:o("Padding","digiblocks"),value:K,onChange:e=>i({boxPadding:e})}),wp.element.createElement(he,{label:o("Margin","digiblocks"),value:ze,onChange:e=>i({boxMargin:e})})),wp.element.createElement(V,{tab:"advanced",name:"position",title:o("Position","digiblocks"),initialOpen:!1},wp.element.createElement(te,{label:o("Position","digiblocks"),value:ce,options:[{label:o("Default","digiblocks"),value:"default"},{label:o("Relative","digiblocks"),value:"relative"},{label:o("Absolute","digiblocks"),value:"absolute"},{label:o("Fixed","digiblocks"),value:"fixed"}],onChange:e=>i({position:e}),__nextHasNoMarginBottom:!0}),ce!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Te,{label:o("Horizontal Orientation","digiblocks"),value:Ie,isBlock:!0,onChange:e=>i({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(ge,{value:"left",label:o("Left","digiblocks")}),wp.element.createElement(ge,{value:"right",label:o("Right","digiblocks")})),wp.element.createElement(to,{label:o("Offset","digiblocks"),value:z,onChange:e=>i({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:We(z?.[w]?.unit||"px"),step:qe(z?.[w]?.unit||"px")}),wp.element.createElement(Te,{label:o("Vertical Orientation","digiblocks"),value:Xe,isBlock:!0,onChange:e=>i({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(ge,{value:"top",label:o("Top","digiblocks")}),wp.element.createElement(ge,{value:"bottom",label:o("Bottom","digiblocks")})),wp.element.createElement(to,{label:o("Offset","digiblocks"),value:O,onChange:e=>i({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:We(O?.[w]?.unit||"px"),step:qe(O?.[w]?.unit||"px")})),wp.element.createElement(Be,{label:o("Z-Index","digiblocks"),value:re,onChange:e=>i({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(V,{tab:"advanced",name:"transform",title:o("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(To,{normalValue:Ce,hoverValue:G,onNormalChange:e=>i({transform:e}),onHoverChange:e=>i({transformHover:e})})),wp.element.createElement(V,{tab:"advanced",name:"animation",title:o("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(te,{label:o("Animation Effect","digiblocks"),value:D,options:mo,onChange:e=>i({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),D&&D!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(te,{label:o("Animation Duration","digiblocks"),value:we,options:[{label:o("Slow","digiblocks"),value:"slow"},{label:o("Normal","digiblocks"),value:"normal"},{label:o("Fast","digiblocks"),value:"fast"}],onChange:e=>i({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ie,{label:o("Animation Delay (ms)","digiblocks"),value:ye||0,onChange:e=>i({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),D&&D!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(So,{variant:"secondary",isSecondary:!0,onClick:ro,disabled:Re,style:{width:"100%"}},o(Re?"Animating...":"Preview Animation","digiblocks")))),wp.element.createElement(V,{tab:"advanced",name:"visibility",title:o("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,o("Editor Note:","digiblocks")),wp.element.createElement("br",null),o("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(F,{label:o("Hide on Desktop","digiblocks"),checked:$.desktop,onChange:e=>i({visibility:{...$,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:o("Hide on Tablet","digiblocks"),checked:$.tablet,onChange:e=>i({visibility:{...$,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:o("Hide on Mobile","digiblocks"),checked:$.mobile,onChange:e=>i({visibility:{...$,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(V,{tab:"advanced",name:"additional",title:o("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},o("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:fe||"",onChange:e=>i({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},o(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},o("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},o("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:A||"",onChange:e=>i({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},o("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Je=xo({className:`digiblocks-countdown ${t} ${A||""}`,id:fe||null});if(!B&&!I&&!T&&!C)return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qe,null,wp.element.createElement(no,{tabs:Fe,activeTab:_e,onSelect:Ee},Ze())),wp.element.createElement("div",{...Je,style:{textAlign:oe}},wp.element.createElement("div",{className:"digiblocks-countdown-error"},o("Please enable at least one time unit in the block settings.","digiblocks"))));let ko=()=>{let{days:e,hours:l,minutes:d,seconds:n}=ue,r=[];return B&&(r.push(wp.element.createElement("div",{key:"days",className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},_==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(e)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},J||o("Days","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(e))),_!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},J||o("Days","digiblocks")))),E&&(I||T||C)&&r.push(wp.element.createElement("div",{key:"days-separator",className:"digiblocks-countdown-separator"}))),I&&(r.push(wp.element.createElement("div",{key:"hours",className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},_==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(l)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},X||o("Hours","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(l))),_!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},X||o("Hours","digiblocks")))),E&&(T||C)&&r.push(wp.element.createElement("div",{key:"hours-separator",className:"digiblocks-countdown-separator"}))),T&&(r.push(wp.element.createElement("div",{key:"minutes",className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},_==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(d)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},ne||o("Minutes","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(d))),_!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},ne||o("Minutes","digiblocks")))),E&&C&&r.push(wp.element.createElement("div",{key:"minutes-separator",className:"digiblocks-countdown-separator"}))),C&&r.push(wp.element.createElement("div",{key:"seconds",className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},_==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(n)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},ee||o("Seconds","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},U(n))),_!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},ee||o("Seconds","digiblocks")))),r},ho=ue.days===0&&ue.hours===0&&ue.minutes===0&&ue.seconds===0;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wo,null,wp.element.createElement(yo,{value:oe,onChange:e=>i({align:e})})),wp.element.createElement(Qe,null,wp.element.createElement(no,{tabs:Fe,activeTab:_e,onSelect:Ee},Ze())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:vo()}}),wp.element.createElement("div",{...Je},ho?wp.element.createElement("div",{className:"digiblocks-countdown-expired"},Le||o("Time's up!","digiblocks")):wp.element.createElement("div",{className:"digiblocks-countdown-container"},ko())))},ao=Ho;var{useBlockProps:Do}=window.wp.blockEditor,Mo=({attributes:le})=>{let{id:i,anchor:me,customClasses:t,endDate:fe,showDays:$,showHours:A,showMinutes:N,showSeconds:B,daysLabel:I,hoursLabel:T,minutesLabel:C,secondsLabel:J,displaySeparator:X,separatorType:ne,expiredMessage:ee,animation:b,animationDuration:S,animationDelay:H,align:W,style:ae,boxesEqual:ve,labelPosition:k}=le,ke=["digiblocks-countdown",i,`align-${W}`,b!=="none"?`animate-${b} digi-animate-hidden`:"",ae==="boxes"?"digiblocks-countdown-boxes":"digiblocks-countdown-simple",ve?"digiblocks-countdown-equal-width":"",`digiblocks-countdown-labels-${k}`,X?"digiblocks-countdown-has-separators":"",X?`digiblocks-countdown-separator-${ne}`:"",t||""].filter(Boolean).join(" "),q=Do.save({className:ke,id:me||null,"data-end-date":fe||"","data-show-days":$?"true":"false","data-show-hours":A?"true":"false","data-show-minutes":N?"true":"false","data-show-seconds":B?"true":"false","data-days-label":I||"Days","data-hours-label":T||"Hours","data-minutes-label":C||"Minutes","data-seconds-label":J||"Seconds","data-expired-message":ee||"Time's up!","data-label-position":k||"bottom"});return b&&b!=="none"&&(q["data-animation-duration"]=S||"normal",q["data-animation-delay"]=H||0),wp.element.createElement("div",{...q},wp.element.createElement("div",{className:"digiblocks-countdown-container"},$&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},k==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},I||"Days")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),k!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},I||"Days")),X&&(A||N||B)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),A&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},k==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},T||"Hours")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),k!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},T||"Hours")),X&&(N||B)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),N&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},k==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},C||"Minutes")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),k!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},C||"Minutes")),X&&B&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),B&&wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},k==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},J||"Seconds")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),k!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},J||"Seconds"))),wp.element.createElement("div",{className:"digiblocks-countdown-expired",style:{display:"none"}},ee||"Time's up!"))},so=Mo;var{__:Z}=window.wp.i18n,{registerBlockType:zo}=window.wp.blocks;zo("digiblocks/countdown",{apiVersion:2,title:digiBlocksData.blocks.countdown.title,category:"digiblocks",icon:{src:()=>{let{viewbox:le,path:i}=digiBlocksData.blocks.countdown.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${le}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:i}))}},description:digiBlocksData.blocks.countdown.description,keywords:[Z("countdown","digiblocks"),Z("timer","digiblocks"),Z("clock","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},endDate:{type:"string",default:""},showDays:{type:"boolean",default:!0},showHours:{type:"boolean",default:!0},showMinutes:{type:"boolean",default:!0},showSeconds:{type:"boolean",default:!0},daysLabel:{type:"string",default:Z("Days","digiblocks")},hoursLabel:{type:"string",default:Z("Hours","digiblocks")},minutesLabel:{type:"string",default:Z("Minutes","digiblocks")},secondsLabel:{type:"string",default:Z("Seconds","digiblocks")},digitColor:{type:"string",default:""},digitBackground:{type:"string",default:"#f0f0f0"},digitHoverColor:{type:"string",default:""},digitHoverBackground:{type:"string",default:""},labelColor:{type:"string",default:"#666666"},labelHoverColor:{type:"string",default:""},separatorColor:{type:"string",default:""},separatorHoverColor:{type:"string",default:""},boxStyle:{type:"string",default:"default"},boxBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderColor:{type:"string",default:"#e0e0e0"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},itemSpacing:{type:"object",default:{desktop:48,tablet:"",mobile:""}},align:{type:"string",default:"center"},labelPosition:{type:"string",default:"bottom"},labelSpacing:{type:"object",default:{desktop:5,tablet:"",mobile:""}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:70,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.2,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.4,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},expiredMessage:{type:"string",default:Z("Time's up!","digiblocks")},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},displaySeparator:{type:"boolean",default:!1},separatorType:{type:"string",default:"colon"},boxesEqual:{type:"boolean",default:!1},style:{type:"string",default:"boxes"},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{endDate:new Date(Date.now()+2592e6).toISOString(),style:"boxes",boxStyle:"filled",digitColor:"#ffffff",digitBackground:"#1e73be",labelColor:"#333333",showDays:!0,showHours:!0,showMinutes:!0,showSeconds:!0,titleTypography:{fontSize:{desktop:32}},contentTypography:{fontSize:{desktop:14}}}},edit:ao,save:so});})();
