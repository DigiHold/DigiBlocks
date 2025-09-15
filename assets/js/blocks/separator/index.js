(()=>{var{__:t}=window.wp.i18n,{useBlockProps:we,InspectorControls:fe,PanelColorSettings:ye,BlockControls:$e,AlignmentToolbar:_e}=window.wp.blockEditor,{ToggleControl:G,SelectControl:Se,RangeControl:z,Button:Ce,TextControl:Ne,__experimentalToggleGroupControl:W,__experimentalToggleGroupControlOption:F,BaseControl:ze}=window.wp.components,{useState:E,useEffect:Z,useRef:Te}=window.wp.element,{useBlockId:Be,animations:M,animationPreview:ee}=digi.utils,{tabIcons:j}=digi.icons,{ResponsiveControl:De,TypographyControl:Le,CustomTabPanel:He,TabPanelBody:L}=digi.components,Me=({style:w,primaryColor:i,secondaryColor:T,isSelected:o,onClick:y})=>{let v={display:"inline-flex",flexDirection:"column",width:"60px",height:"60px",margin:"5px",border:`1px solid ${o?"#007cba":"#ddd"}`,backgroundColor:o?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},B={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:o?"500":"normal",borderBottom:`1px solid ${o?"#e0e0e0":"transparent"}`,backgroundColor:o?"rgba(0,124,186,0.05)":"transparent"},n={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},r=null;switch(w){case"line":r=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:i,borderRadius:"1px"}});break;case"dashed":r=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundImage:`linear-gradient(to right, ${i} 50%, transparent 50%)`,backgroundSize:"8px 2px",backgroundRepeat:"repeat-x",borderRadius:"1px"}});break;case"dotted":r=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`radial-gradient(circle, ${i} 1px, transparent 1px)`,backgroundSize:"4px 3px",backgroundPosition:"center",backgroundRepeat:"repeat-x"}});break;case"double":r=wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"2px"}},wp.element.createElement("div",{style:{height:"1px",backgroundColor:i,borderRadius:"1px"}}),wp.element.createElement("div",{style:{height:"1px",backgroundColor:i,borderRadius:"1px"}}));break;case"gradient":r=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${T||"transparent"}, ${i}, ${T||"transparent"})`,borderRadius:"1px"}});break;case"shadow":r=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:i,boxShadow:"0 1px 2px rgba(0,0,0,0.3)",borderRadius:"1px"}});break;case"wave":r=wp.element.createElement("svg",{height:"20",width:"100%",viewBox:"0 0 100 20",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,10 C20,5 30,15 50,10 C70,5 80,15 100,10 L100,20 L0,20 Z",fill:i}));break;case"zigzag":r=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polyline",{points:"0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0",fill:"none",stroke:i,strokeWidth:"2"}));break;case"slant":r=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polygon",{points:"0,0 100,10 100,0",fill:i}));break;default:r=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:i,borderRadius:"1px"}})}return wp.element.createElement("div",{style:v,onClick:y},wp.element.createElement("div",{style:B},(()=>{switch(w){case"line":return"Line";case"dashed":return"Dashed";case"dotted":return"Dotted";case"double":return"Double";case"gradient":return"Gradient";case"shadow":return"Shadow";case"wave":return"Wave";case"zigzag":return"Zigzag";case"slant":return"Slant";default:return w.charAt(0).toUpperCase()+w.slice(1)}})()),wp.element.createElement("div",{style:n},r))},Re=({attributes:w,setAttributes:i,clientId:T})=>{let{id:o,anchor:y,visibility:v,customClasses:B,contentType:n,content:r,align:k,iconValue:S,separatorStyle:g,primaryColor:p,secondaryColor:D,width:x,widthUnit:b,height:$,heightUnit:m,borderRadius:_,margin:s,animation:u,typography:d,iconSize:C,gap:V,textColor:R}=w;Be(o,T,i);let H=(e,l)=>!e||typeof e!="object"?null:l==="mobile"?e.mobile!==""&&e.mobile!==void 0&&e.mobile!==null?e.mobile:e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop:l==="tablet"&&e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop,[a,oe]=E(window.digi.responsiveState.activeDevice);Z(()=>window.digi.responsiveState.subscribe(l=>{oe(l)}),[]);let[q,ae]=E("options"),[A,ne]=E(!1);Z(()=>{let e=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ne(!0),!0):!1;if(!e()){let l=setTimeout(()=>{e()&&clearTimeout(l)},500);return()=>clearTimeout(l)}},[]);let le=e=>{i({iconValue:e})},Y=Te(null);Z(()=>{if(u&&u!=="none"){let e=setTimeout(()=>{ee(o,u,M,Y)},100);return()=>clearTimeout(e)}},[u]);let se=()=>{ee(o,u,M,Y)},re=[{label:"px",value:"px"},{label:"%",value:"%"}],ce=[{label:"px",value:"px"},{label:"%",value:"%"}],de=[{label:t("None","digiblocks"),value:"none"},{label:t("Text","digiblocks"),value:"text"},{label:t("Icon","digiblocks"),value:"icon"}],pe=[{label:t("None","digiblocks"),value:"none"},...Object.keys(M).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,l=>l.toUpperCase()),value:e}))],ge=[{name:"options",title:t("Options","digiblocks"),icon:j.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:j.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:j.advancedIcon}],be=A?window.digi.components.FontAwesomeControl:null,me=()=>{switch(g){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:p}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:p}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:p}));default:return null}},ve=()=>{let e=window.digi.responsiveState.activeDevice,l="",c=s[e]||{top:30,bottom:30,unit:"px"},N=x[e]||100,h=$[e]||3,J="",Ve="";switch(g){case"line":l=`
                    background-color: ${p};
                    height: ${h}${m};
                    width: ${N}${b};
                    border-radius: ${_[e]||0}px;
                `;break;case"dashed":l=`
                    border-top: ${h}${m} dashed ${p};
                    width: ${N}${b};
                `;break;case"dotted":l=`
                    border-top: ${h}${m} dotted ${p};
                    width: ${N}${b};
                `;break;case"double":l=`
                    border-top: ${Math.max(1,Math.floor(h/3))}${m} solid ${p};
                    border-bottom: ${Math.max(1,Math.floor(h/3))}${m} solid ${p};
                    height: ${h}${m};
                    width: ${N}${b};
                `;break;case"gradient":l=`
                    background: linear-gradient(90deg, ${D||"transparent"} 0%, ${p} 50%, ${D||"transparent"} 100%);
                    height: ${h}${m};
                    width: ${N}${b};
                    border-radius: ${_[e]||0}px;
                `;break;case"shadow":l=`
                    height: ${h}${m};
                    width: ${N}${b};
                    background-color: ${p};
                    border-radius: ${_[e]||0}px;
                    box-shadow: 0 ${Math.max(2,h/2)}px ${Math.max(4,h)}px rgba(0,0,0,0.2);
                `;break;case"wave":case"zigzag":case"slant":l=`
                    width: 100%;
                    height: 100%;
                    position: relative;
                `,J=`
                    .${o} .digiblocks-separator-shape {
                        width: 100%;
                        height: 100%;
                    }
                    .${o} .digiblocks-separator-shape svg {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                `;break}let I="";if((n==="text"||n==="icon")&&!["wave","zigzag","slant"].includes(g)){let f=V[e]||15;I=`
                .${o} .digiblocks-separator-content {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 0 ${f}px;
                    ${n==="text"&&R?`color: ${R};`:""}
                }
                
                .${o}.digiblocks-separator-has-content .digiblocks-separator-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    transform: translateY(-50%);
                }
            `}if(n==="icon"&&S&&S.svg&&(I+=`
                .${o} .digiblocks-separator-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .${o} .digiblocks-separator-icon svg {
                    width: ${H(C,e)||24}px;
					height: ${H(C,e)||24}px;
                    fill: ${R||p};
                }
            `),n==="text"&&d){let f="";d.fontFamily&&(f+=`font-family: ${d.fontFamily};`);let Q=H(d.fontSize,e);Q&&(f+=`font-size: ${Q}${d.fontSizeUnit||"px"};`),d.fontWeight&&(f+=`font-weight: ${d.fontWeight};`),d.fontStyle&&(f+=`font-style: ${d.fontStyle};`),d.textTransform&&(f+=`text-transform: ${d.textTransform};`);let X=H(d.lineHeight,e);X&&(f+=`line-height: ${X}${d.lineHeightUnit||"em"};`);let O=H(d.letterSpacing,e);(O||O===0)&&(f+=`letter-spacing: ${O}${d.letterSpacingUnit||"px"};`),I+=`
                .${o} .digiblocks-separator-text {
                    ${f}
                }
            `}let K="";u&&u!=="none"&&M[u]&&(K=M[u].keyframes);let P="";switch(k){case"center":P="margin-left: auto; margin-right: auto;";break;case"right":P="margin-left: auto; margin-right: 0;";break;default:P="margin-left: 0; margin-right: auto;";break}return`
            /* Separator Block - ${o} */
            .${o} {
                margin-top: ${c.top}${c.unit};
                margin-bottom: ${c.bottom}${c.unit};
                display: flex;
                align-items: center;
                justify-content: ${k==="center"?"center":k==="right"?"flex-end":"flex-start"};
                position: relative;
                clear: both;
                width: 100%;
            }
            
            .${o} .digiblocks-separator-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: ${k==="center"?"center":k==="right"?"flex-end":"flex-start"};
                width: 100%;
            }
            
            .${o} .digiblocks-separator-line {
                ${l}
                ${P}
            }
            
            ${J}
            ${I}
            ${K}
            
            /* Responsive styles will be handled by media queries */
            @media (max-width: 991px) {
                .${o} {
                    margin-top: ${s.tablet?s.tablet.top+(s.tablet.unit||"px"):c.top+c.unit};
                    margin-bottom: ${s.tablet?s.tablet.bottom+(s.tablet.unit||"px"):c.bottom+c.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${x.tablet?x.tablet+b:N+b};
                    height: ${$.tablet?$.tablet+m:h+m};
                    ${_.tablet?`border-radius: ${_.tablet}px;`:""}
                }
                
                ${n==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${C.tablet||20}px;
                    height: ${C.tablet||20}px;
                }`:""}
            }
            
            @media (max-width: 767px) {
                .${o} {
                    margin-top: ${s.mobile?s.mobile.top+(s.mobile.unit||"px"):c.top+c.unit};
                    margin-bottom: ${s.mobile?s.mobile.bottom+(s.mobile.unit||"px"):c.bottom+c.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${x.mobile?x.mobile+b:N+b};
                    height: ${$.mobile?$.mobile+m:h+m};
                    ${_.mobile?`border-radius: ${_.mobile}px;`:""}
                }
                
                ${n==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${C.mobile||16}px;
                    height: ${C.mobile||16}px;
                }`:""}
            }

			/* Visibility Controls */
			${v.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${v.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${v.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ue=()=>!S||!S.svg||S.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:S.svg}})),he=()=>wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},[{label:"Line",value:"line"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Gradient",value:"gradient"},{label:"Shadow",value:"shadow"},{label:"Wave",value:"wave"},{label:"Zigzag",value:"zigzag"},{label:"Slant",value:"slant"}].map(c=>wp.element.createElement(Me,{key:c.value,style:c.value,primaryColor:p||"#1e73be",secondaryColor:D,isSelected:g===c.value,onClick:()=>{["wave","zigzag","slant"].includes(c.value)&&n!=="none"?i({separatorStyle:c.value,contentType:"none"}):i({separatorStyle:c.value})}}))),ke=()=>{switch(q){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(ze,{label:t("Separator Style","digiblocks"),id:"separator-style-selector",__nextHasNoMarginBottom:!0},he()),["wave","zigzag","slant"].includes(g)?wp.element.createElement("div",{className:"components-notice is-warning",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},t("Content is not available with this separator style.","digiblocks"))):wp.element.createElement(W,{label:t("Content Type","digiblocks"),value:n,onChange:e=>i({contentType:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},de.map(e=>wp.element.createElement(F,{key:e.value,value:e.value,label:e.label}))),n==="text"&&wp.element.createElement(Ne,{label:t("Text Content","digiblocks"),value:r,onChange:e=>i({content:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),n==="icon"&&wp.element.createElement("div",{style:{marginTop:"15px"}},A?wp.element.createElement(be,{label:t("Select Icon","digiblocks"),value:S,onChange:le}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,t("Loading icon selector...","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(L,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ye,{title:t("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:p,onChange:e=>i({primaryColor:e}),label:t("Primary Color","digiblocks")},...g==="gradient"?[{value:D,onChange:e=>i({secondaryColor:e}),label:t("Secondary Color","digiblocks")}]:[],...n!=="none"?[{value:R,onChange:e=>i({textColor:e}),label:t(n==="text"?"Text Color":"Icon Color","digiblocks")}]:[]]})),wp.element.createElement(L,{tab:"style",name:"dimensions",title:t("Dimensions","digiblocks"),initialOpen:!1},!["wave","zigzag","slant"].includes(g)&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},t("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":t(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${a}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[a])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:x[a]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>i({width:{...x,[a]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(W,{value:b,onChange:e=>i({widthUnit:e}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":t("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},re.map(e=>wp.element.createElement(F,{key:e.value,value:e.value,label:e.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(z,{value:x[a],onChange:e=>i({width:{...x,[a]:e}}),min:1,max:b==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},t("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":t(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${a}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[a])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:$[a]===3,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>i({height:{...$,[a]:3}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(W,{value:m,onChange:e=>i({heightUnit:e}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":t("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},ce.map(e=>wp.element.createElement(F,{key:e.value,value:e.value,label:e.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(z,{value:$[a],onChange:e=>i({height:{...$,[a]:e}}),min:1,max:m==="%"?20:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))))))),["line","gradient","shadow"].includes(g)&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},t("Border Radius","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":t(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${a}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[a]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(z,{value:_[a],onChange:e=>i({borderRadius:{..._,[a]:e}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),(n==="text"||n==="icon")&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},t("Gap","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":t(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${a}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[a]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(z,{value:V[a],onChange:e=>i({gap:{...V,[a]:e}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),n==="icon"&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},t("Icon Size","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":t(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${a}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[a]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(z,{value:C[a],onChange:e=>i({iconSize:{...C,[a]:e}}),min:8,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(De,{label:t("Margin","digiblocks")},wp.element.createElement("div",{className:"digiblocks-margin-control"},wp.element.createElement(z,{label:t("Top","digiblocks"),value:s[a]?.top||30,onChange:e=>{let l={...s,[a]:{...s[a],top:e,unit:s[a]?.unit||"px"}};i({margin:l})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(z,{label:t("Bottom","digiblocks"),value:s[a]?.bottom||30,onChange:e=>{let l={...s,[a]:{...s[a],bottom:e,unit:s[a]?.unit||"px"}};i({margin:l})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),n==="text"&&wp.element.createElement(L,{tab:"style",name:"typography",title:t("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Le,{label:t("Text Typography","digiblocks"),value:d,onChange:e=>i({typography:e}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em"}})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(L,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Se,{label:t("Animation Effect","digiblocks"),value:u,options:pe,onChange:e=>i({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),u&&u!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Ce,{variant:"secondary",isSecondary:!0,onClick:se,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(L,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(G,{label:t("Hide on Desktop","digiblocks"),checked:v.desktop,onChange:e=>i({visibility:{...v,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:t("Hide on Tablet","digiblocks"),checked:v.tablet,onChange:e=>i({visibility:{...v,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:t("Hide on Mobile","digiblocks"),checked:v.mobile,onChange:e=>i({visibility:{...v,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(L,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:y||"",onChange:e=>i({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:B||"",onChange:e=>i({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},xe=we({className:`digiblocks-separator ${o} ${n!=="none"&&!["wave","zigzag","slant"].includes(g)?"digiblocks-separator-has-content":""} ${B||""}`,id:y||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($e,null,wp.element.createElement(_e,{value:k,onChange:e=>i({align:e})})),wp.element.createElement(fe,null,wp.element.createElement(He,{tabs:ge,activeTab:q,onSelect:ae},ke())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ve()}}),wp.element.createElement("div",{...xe},wp.element.createElement("div",{className:"digiblocks-separator-container"},n!=="none"&&!["wave","zigzag","slant"].includes(g)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},n==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},r),n==="icon"&&ue()),["wave","zigzag","slant"].includes(g)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},me()):wp.element.createElement("div",{className:"digiblocks-separator-line"}))))},te=Re;var{useBlockProps:Ie,RichText:Ge}=window.wp.blockEditor,Pe=({attributes:w})=>{let{id:i,anchor:T,customClasses:o,contentType:y,content:v,align:B,iconValue:n,separatorStyle:r,primaryColor:k,secondaryColor:S,animation:g}=w,p=()=>{switch(r){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:k}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:k}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:k}));default:return null}},D=()=>!n||!n.svg||n.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:n.svg}})),x=["digiblocks-separator",i,y!=="none"&&!["wave","zigzag","slant"].includes(r)?"digiblocks-separator-has-content":"",`align-${B}`,g!=="none"?`animate-${g}`:"",o||""].filter(Boolean).join(" "),b=Ie.save({className:x,id:T||null,"data-separator-style":r});return wp.element.createElement("div",{...b},wp.element.createElement("div",{className:"digiblocks-separator-container"},y!=="none"&&!["wave","zigzag","slant"].includes(r)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},y==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},v),y==="icon"&&D()),["wave","zigzag","slant"].includes(r)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},p()):wp.element.createElement("div",{className:"digiblocks-separator-line"})))},ie=Pe;var{__:U}=window.wp.i18n,{registerBlockType:Ue}=window.wp.blocks;Ue("digiblocks/separator",{apiVersion:2,title:digiBlocksData.blocks.separator.title,category:"digiblocks",icon:{src:()=>{let{viewbox:w,path:i}=digiBlocksData.blocks.separator.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:i}))}},description:digiBlocksData.blocks.separator.description,keywords:[U("separator","digiblocks"),U("divider","digiblocks"),U("horizontal rule","digiblocks"),U("hr","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},contentType:{type:"string",default:"none"},content:{type:"string",default:"Separator"},iconValue:{type:"object",default:null},separatorStyle:{type:"string",default:"line"},primaryColor:{type:"string",default:"#222222"},secondaryColor:{type:"string",default:"#f0f0f0"},textColor:{type:"string",default:"#333333"},width:{type:"object",default:{desktop:100,tablet:"",mobile:""}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:3,tablet:"",mobile:""}},heightUnit:{type:"string",default:"px"},borderRadius:{type:"object",default:{desktop:0,tablet:"",mobile:""}},margin:{type:"object",default:{desktop:{top:30,bottom:30,unit:"px"},tablet:{top:"",bottom:"",unit:"px"},mobile:{top:"",bottom:"",unit:"px"}}},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},iconSize:{type:"object",default:{desktop:24,tablet:"",mobile:""}},gap:{type:"object",default:{desktop:15,tablet:"",mobile:""}}},example:{attributes:{separatorStyle:"gradient",primaryColor:"#1e73be",secondaryColor:"#f0f0f0",width:{desktop:80},height:{desktop:4},contentType:"text",content:"Section",textColor:"#333333"}},edit:te,save:ie});})();
