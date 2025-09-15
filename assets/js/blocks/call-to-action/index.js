(()=>{var{__:t}=window.wp.i18n,{useBlockProps:$t,RichText:oe,InspectorControls:St,PanelColorSettings:T,BlockControls:wt,AlignmentToolbar:Bt,MediaUpload:Be,MediaUploadCheck:Te}=window.wp.blockEditor,{SelectControl:q,RangeControl:_e,ToggleControl:R,Button:X,__experimentalToggleGroupControl:He,__experimentalToggleGroupControlOption:Ne,TabPanel:Tt,TextControl:me,BaseControl:Ie}=window.wp.components,{useState:ze,useEffect:Re,useRef:_t}=window.wp.element,{useBlockId:Ht,getDimensionCSS:b,animations:De,animationPreview:Ue}=digi.utils,{tabIcons:Oe}=digi.icons,{ResponsiveControl:L,DimensionControl:ie,TypographyControl:Pe,BoxShadowControl:Nt,CustomTabPanel:zt,TabPanelBody:y}=digi.components,Rt=({attributes:ae,setAttributes:l,clientId:pe})=>{let{id:o,anchor:Z,visibility:f,customClasses:K,style:c,horizontalLayout:G,title:C,content:ne,headingTag:ue,titleColor:D,textColor:_,buttonColor:h,buttonTextColor:Q,backgroundColor:$,backgroundType:H,backgroundImage:p,backgroundOverlayColor:A,backgroundOverlayOpacity:re,backgroundPosition:v,backgroundSize:de,backgroundRepeat:ce,borderStyle:u,borderWidth:S,borderRadius:O,borderColor:fe,padding:P,margin:E,align:ee,titleTypography:a,contentTypography:n,buttonTypography:r,contentWidth:he,width:ke,animation:N,boxShadow:M,boxShadowHover:w,buttonBorderRadius:V,buttonPadding:J,buttonsAlign:se,buttons:m,titleHoverColor:ve,textHoverColor:xe,buttonHoverColor:ye,buttonTextHoverColor:Ce,backgroundHoverColor:te,highlightText:j,highlightColor:ge,highlightType:F,verticalAlign:$e,reverseColumnsMobile:Se,minHeight:k}=ae,[s,Le]=ze(window.digi.responsiveState.activeDevice),[Mt,jt]=ze(!1);Re(()=>window.digi.responsiveState.subscribe(i=>{Le(i)}),[]);let[Me,Ge]=ze(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(pe);if(e)return e}return"options"});Ht(o,pe,l),Re(()=>{(!m||!Array.isArray(m)||m.length===0)&&l({buttons:[{id:"button-1",text:t("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!0,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}]}),a||l({titleTypography:{fontFamily:"",fontSize:{desktop:36,tablet:32,mobile:28},fontSizeUnit:"px",fontWeight:"700",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),n||l({contentTypography:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.6,tablet:1.6,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),r||l({buttonTypography:{fontFamily:"",fontSize:{desktop:16,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),w||l({boxShadowHover:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}})},[m,a,n,r,w,l]);let je=_t(null);Re(()=>{if(N&&N!=="none"){let e=setTimeout(()=>{Ue(o,N,De,je)},100);return()=>clearTimeout(e)}},[N]);let Ee=()=>{Ue(o,N,De,je)},Ve=[{label:t("None","digiblocks"),value:"none"},{label:t("Solid","digiblocks"),value:"solid"},{label:t("Dotted","digiblocks"),value:"dotted"},{label:t("Dashed","digiblocks"),value:"dashed"},{label:t("Double","digiblocks"),value:"double"},{label:t("Groove","digiblocks"),value:"groove"},{label:t("Ridge","digiblocks"),value:"ridge"},{label:t("Inset","digiblocks"),value:"inset"},{label:t("Outset","digiblocks"),value:"outset"}],Je=[{label:t("None","digiblocks"),value:"none"},...Object.keys(De).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()),value:e}))],Ye=[{label:t("Basic","digiblocks"),value:"basic"},{label:t("Split","digiblocks"),value:"split"},{label:t("Cover","digiblocks"),value:"cover"},{label:t("Box","digiblocks"),value:"box"},{label:t("Modern","digiblocks"),value:"modern"},{label:t("Gradient","digiblocks"),value:"gradient"},{label:t("Minimal","digiblocks"),value:"minimal"},{label:t("Callout","digiblocks"),value:"callout"},{label:t("Banner","digiblocks"),value:"banner"}],qe=[{label:"H1",value:"h1"},{label:"H2",value:"h2"},{label:"H3",value:"h3"},{label:"H4",value:"h4"},{label:"H5",value:"h5"},{label:"H6",value:"h6"}],Xe=[{label:t("Color","digiblocks"),value:"color"},{label:t("Image","digiblocks"),value:"image"},{label:t("Gradient","digiblocks"),value:"gradient"}],Ze=[{label:t("Center Center","digiblocks"),value:"center center"},{label:t("Center Top","digiblocks"),value:"center top"},{label:t("Center Bottom","digiblocks"),value:"center bottom"},{label:t("Left Top","digiblocks"),value:"left top"},{label:t("Left Center","digiblocks"),value:"left center"},{label:t("Left Bottom","digiblocks"),value:"left bottom"},{label:t("Right Top","digiblocks"),value:"right top"},{label:t("Right Center","digiblocks"),value:"right center"},{label:t("Right Bottom","digiblocks"),value:"right bottom"}],Ke=[{label:t("Cover","digiblocks"),value:"cover"},{label:t("Contain","digiblocks"),value:"contain"},{label:t("Auto","digiblocks"),value:"auto"}],Qe=[{label:t("No Repeat","digiblocks"),value:"no-repeat"},{label:t("Repeat","digiblocks"),value:"repeat"},{label:t("Repeat X","digiblocks"),value:"repeat-x"},{label:t("Repeat Y","digiblocks"),value:"repeat-y"}],Ae=[{label:t("Left","digiblocks"),value:"left"},{label:t("Center","digiblocks"),value:"center"},{label:t("Right","digiblocks"),value:"right"}],et=[{label:t("Top","digiblocks"),value:"flex-start"},{label:t("Center","digiblocks"),value:"center"},{label:t("Bottom","digiblocks"),value:"flex-end"}],tt=[{label:t("None","digiblocks"),value:"none"},{label:t("Background","digiblocks"),value:"background"},{label:t("Text","digiblocks"),value:"text"},{label:t("Underline","digiblocks"),value:"underline"}],It={width:300,height:200},ot=[{name:"options",title:t("Options","digiblocks"),icon:Oe.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:Oe.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:Oe.advancedIcon}],it=[{name:"normal",title:t("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:t("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],lt=()=>{let e=`button-${m.length+1}`,i=[...m,{id:e,text:t("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!1,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}];l({buttons:i})},at=e=>{let i=m.filter(d=>d.id!==e);l({buttons:i})},x=(e,i,d)=>{let B=m.map(Y=>Y.id===e?{...Y,[i]:d}:Y);l({buttons:B})},nt=e=>{let i=c===e.value,d={display:"inline-flex",flexDirection:"column",width:"70px",height:"70px",margin:"5px",border:`1px solid ${i?"#007cba":"#ddd"}`,backgroundColor:i?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},B={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:i?"500":"normal",borderBottom:`1px solid ${i?"#e0e0e0":"transparent"}`,backgroundColor:i?"rgba(0,124,186,0.05)":"transparent"},Y={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},g=null;switch(e.value){case"basic":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"split":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex"}},wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#007cba",display:"flex",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"70%",backgroundColor:"#fff",opacity:.2}})),wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px"}},wp.element.createElement("div",{style:{width:"80%",height:"3px",backgroundColor:"#333",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"40%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;case"cover":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#007cba",opacity:.7,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"box":g=wp.element.createElement("div",{style:{width:"90%",height:"90%",margin:"auto",border:"2px solid #007cba",borderRadius:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"modern":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"3px",position:"relative"}},wp.element.createElement("div",{style:{position:"absolute",left:"0",top:"20%",width:"5px",height:"60%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px",marginLeft:"8px"}}));break;case"gradient":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"minimal":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"1px",backgroundColor:"#007cba",marginBottom:"1px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"callout":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #eee",borderLeft:"5px solid #007cba",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"5px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"banner":g=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#f0f7ff",position:"relative"}},wp.element.createElement("div",{style:{height:"4px",width:"100%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;default:g=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}))}return wp.element.createElement("div",{style:d,onClick:()=>l({style:e.value})},wp.element.createElement("div",{style:B},e.label),wp.element.createElement("div",{style:Y},g))},rt=()=>{let e=window.digi.responsiveState.activeDevice,i="";if(u&&u!=="none"){let Ct=b(S,"border-width",e)||"border-width: 1px 1px 1px 1px;";i=`
				border-style: ${u};
				border-color: ${fe||"#e0e0e0"};
				${Ct}
			`}else i="border-style: none;";let d="box-shadow: none;";M&&M.enable&&(d=`box-shadow: ${M.position==="inset"?"inset ":""}${M.horizontal}px ${M.vertical}px ${M.blur}px ${M.spread}px ${M.color};`);let B="";H==="color"?B=`background-color: ${$||"#f5f5f5"};`:H==="image"&&p&&p.url?B=`
                background-image: url(${p.url});
                background-position: ${v||"center center"};
                background-size: ${de||"cover"};
                background-repeat: ${ce||"no-repeat"};
            `:H==="gradient"&&(B=`background: linear-gradient(135deg, ${$||"#6a11cb"} 0%, ${te||"#2575fc"} 100%);`);let Y=k&&k[e]?`min-height: ${k[e]}px;`:"",g="";a&&(a.fontFamily&&(g+=`font-family: ${a.fontFamily};`),a.fontSize&&a.fontSize[e]&&(g+=`font-size: ${a.fontSize[e]}${a.fontSizeUnit||"px"};`),a.fontWeight&&(g+=`font-weight: ${a.fontWeight};`),a.fontStyle&&(g+=`font-style: ${a.fontStyle};`),a.textTransform&&(g+=`text-transform: ${a.textTransform};`),a.textDecoration&&(g+=`text-decoration: ${a.textDecoration};`),a.lineHeight&&a.lineHeight[e]&&(g+=`line-height: ${a.lineHeight[e]}${a.lineHeightUnit||"em"};`),a.letterSpacing&&a.letterSpacing[e]&&(g+=`letter-spacing: ${a.letterSpacing[e]}${a.letterSpacingUnit||"px"};`));let I="";n&&(n.fontFamily&&(I+=`font-family: ${n.fontFamily};`),n.fontSize&&n.fontSize[e]&&(I+=`font-size: ${n.fontSize[e]}${n.fontSizeUnit||"px"};`),n.fontWeight&&(I+=`font-weight: ${n.fontWeight};`),n.fontStyle&&(I+=`font-style: ${n.fontStyle};`),n.textTransform&&(I+=`text-transform: ${n.textTransform};`),n.textDecoration&&(I+=`text-decoration: ${n.textDecoration};`),n.lineHeight&&n.lineHeight[e]&&(I+=`line-height: ${n.lineHeight[e]}${n.lineHeightUnit||"em"};`),n.letterSpacing&&n.letterSpacing[e]&&(I+=`letter-spacing: ${n.letterSpacing[e]}${n.letterSpacingUnit||"px"};`));let U="";r&&(r.fontFamily&&(U+=`font-family: ${r.fontFamily};`),r.fontSize&&r.fontSize[e]&&(U+=`font-size: ${r.fontSize[e]}${r.fontSizeUnit||"px"};`),r.fontWeight&&(U+=`font-weight: ${r.fontWeight};`),r.fontStyle&&(U+=`font-style: ${r.fontStyle};`),r.textTransform&&(U+=`text-transform: ${r.textTransform};`),r.textDecoration&&(U+=`text-decoration: ${r.textDecoration};`),r.lineHeight&&r.lineHeight[e]&&(U+=`line-height: ${r.lineHeight[e]}${r.lineHeightUnit||"em"};`),r.letterSpacing&&r.letterSpacing[e]&&(U+=`letter-spacing: ${r.letterSpacing[e]}${r.letterSpacingUnit||"px"};`));let bt=he?`max-width: ${he}${typeof he=="number"?"%":""};`:"",pt=ke?`width: ${ke}${typeof ke=="number"?"px":""};`:"width: 100%;",ut=ee?`text-align: ${ee};`:"",ht=$e?`justify-content: ${$e};`:"justify-content: center;",mt=se?`text-align: ${se};`:"text-align: left;",ft=Se?"@media (max-width: 767px) { ."+o+" .digiblocks-cta-split-container { flex-direction: column-reverse; } }":"",be="";if(j&&F&&F!=="none"&&ge)switch(F){case"background":be=`
                        .${o} .digiblocks-cta-highlight {
                            background-color: ${ge};
                            padding: 0 5px;
                            border-radius: 3px;
                        }
                    `;break;case"text":be=`
                        .${o} .digiblocks-cta-highlight {
                            color: ${ge};
                        }
                    `;break;case"underline":be=`
                        .${o} .digiblocks-cta-highlight {
                            border-bottom: 2px solid ${ge};
                            padding-bottom: 2px;
                        }
                    `;break}let z="";switch(c){case"split":z=`
                    .${o} {
                        padding: 0;
                    }
                    
                    .${o} .digiblocks-cta-split-container {
                        display: flex;
                        align-items: stretch;
                        min-height: inherit;
                    }
                    
                    .${o} .digiblocks-cta-image-container {
                        flex: 1;
                        min-height: 300px;
                        background-image: url(${p?.url||""});
                        background-position: ${v||"center center"};
                        background-size: ${de||"cover"};
                        background-repeat: ${ce||"no-repeat"};
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        flex: 1;
                        ${b(P,"padding",e)}
                        ${$?`background-color: ${$};`:""}
                        display: flex;
                        flex-direction: column;
                        ${ht}
                    }

					@media (max-width: 767px) {
                        .${o} .digiblocks-cta-split-container {
                            flex-direction: column;
                        }
                        
                        .${o} .digiblocks-cta-image-container {
                            min-height: 200px;
                        }
                    }
                `;break;case"cover":z=`
                    .${o} {
                        position: relative;
                        z-index: 1;
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    .${o} .digiblocks-cta-background {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        ${B}
                    }
                    
                    .${o} .digiblocks-cta-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background-color: ${A||"rgba(0,0,0,0.5)"};
                        opacity: ${re!==void 0?re/100:.5};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${_||"rgba(255, 255, 255, 0.9)"};
                    }
                    
                    .${o} .digiblocks-cta-button {
                        border: 2px solid #fff;
                        color: #fff;
                        background-color: transparent;
                    }
                    
                    .${o} .digiblocks-cta-button.is-primary {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${o} .digiblocks-cta-button:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${o} .digiblocks-cta-button.is-primary:hover {
                        background-color: transparent;
                        color: #fff;
                    }
                `;break;case"box":z=`
                    .${o} {
                        border: 2px solid ${fe||"#e0e0e0"};
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                `;break;case"modern":z=`
                    .${o} {
                        position: relative;
                        padding-left: 50px;
                    }
                    
                    .${o}:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 20%;
                        height: 60%;
                        width: 8px;
                        background-color: ${h||"#1e73be"};
                        border-radius: 4px;
                    }
                `;break;case"gradient":z=`
                    .${o} {
                        background: linear-gradient(135deg, ${$||"#6a11cb"} 0%, ${te||"#2575fc"} 100%);
                        color: #fff;
                        border-radius: 10px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${_||"rgba(255, 255, 255, 0.9)"};
                    }
                    
                    .${o} .digiblocks-cta-button {
                        border: 2px solid #fff;
                        color: #fff;
                        background-color: transparent;
                    }
                    
                    .${o} .digiblocks-cta-button.is-primary {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${o} .digiblocks-cta-button:hover {
                        background-color: #fff;
                        color: #000;
                    }
                    
                    .${o} .digiblocks-cta-button.is-primary:hover {
                        background-color: transparent;
                        color: #fff;
                    }
                `;break;case"minimal":z=`
                    .${o} {
                        border-top: 1px solid #eee;
                        border-bottom: 1px solid #eee;
                        padding-top: 50px;
                        padding-bottom: 50px;
                    }
                    
                    .${o} .digiblocks-cta-buttons {
                        position: relative;
                    }
                    
                    .${o} .digiblocks-cta-buttons:before {
                        content: '';
                        position: absolute;
                        top: -20px;
                        left: 0;
                        width: 50px;
                        height: 2px;
                        background-color: ${h||"#1e73be"};
                    }
                `;break;case"callout":z=`
                    .${o} {
                        border-left: 5px solid ${h||"#1e73be"};
                        background-color: ${$||"#f5f5f5"};
                        padding: 30px;
                        position: relative;
                        border-radius: 0 4px 4px 0;
                    }
                    
                    .${o}:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        width: 5px;
                        background-color: ${h||"#1e73be"};
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${_||"#666"};
                        margin-bottom: 20px;
                    }
                `;break;case"banner":z=`
                    .${o} {
                        position: relative;
                        padding: 30px;
                        background-color: ${$||"#f0f7ff"};
                        border-radius: 0;
                        overflow: visible;
                    }
                    
                    .${o}:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background-color: ${h||"#1e73be"};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${_||"#666"};
                        margin-bottom: 20px;
                    }
                    
                    .${o} .digiblocks-cta-button {
                        background-color: ${h||"#1e73be"};
                        color: ${Q||"#fff"};
                        border-radius: 4px;
                        padding: 10px 20px;
                        transition: all 0.3s ease;
                    }
                    
                    .${o} .digiblocks-cta-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                `;break;default:z=""}let kt="";G&&(be=`
				.${o} .digiblocks-cta-horizontal {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 2rem;
					width: 100%;
				}
				
				.${o} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
					flex: 1;
				}
				
				.${o} .digiblocks-cta-horizontal .digiblocks-cta-buttons {
					flex-shrink: 0;
				}
				
				/* Responsive styles for horizontal layout */
				@media (max-width: 767px) {
					.${o} .digiblocks-cta-horizontal {
						flex-direction: column;
						align-items: ${ee==="center"?"center":ee==="right"?"flex-end":"flex-start"};
						gap: 1rem;
					}
					
					.${o} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
						width: 100%;
						text-align: ${ee};
					}
				}
			`);let vt=j&&F&&F!=="none"?`
            .${o} .digiblocks-cta-title {
                white-space: pre-wrap;
            }
        `:"",xt=`
            .${o} .digiblocks-cta-title {
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-cta-content {
                transition: color 0.3s ease;
            }
            
            .${o}:hover .digiblocks-cta-title {
                ${ve?`color: ${ve};`:""}
            }
            
            .${o}:hover .digiblocks-cta-content {
                ${xe?`color: ${xe};`:""}
            }
            
            .${o}:hover {
                ${te&&c!=="gradient"&&c!=="split"?`background-color: ${te};`:""}
                
                ${w&&w.enable?`
                    ${w.position==="inset"?"box-shadow: inset":"box-shadow:"} 
                    ${w.horizontal}px 
                    ${w.vertical}px 
                    ${w.blur}px 
                    ${w.spread}px 
                    ${w.color};`:""}
            }
            
            .${o} .digiblocks-cta-button {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-cta-button:hover {
                ${ye?`background-color: ${ye};`:""}
                ${Ce?`color: ${Ce};`:""}
            }
        `;return`
            /* Call to Action Block - ${o} */
            .${o} {
                ${c!=="split"?B:""}
                ${i}
				${b(O,"border-radius",e)}
                ${d}
                ${c!=="split"?`${b(P,"padding",e)}`:""}
                ${b(E,"margin",e)}
                ${pt}
                ${Y}
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .${o} .digiblocks-cta-container {
                ${bt}
                margin: 0 auto;
                ${c!=="split"?ut:""}
            }
            
            .${o} .digiblocks-cta-title {
                color: ${D};
                margin-top: 0;
                margin-bottom: 20px;
                ${g}
            }
            
            .${o} .digiblocks-cta-content {
                color: ${_||"#666666"};
                margin-bottom: 30px;
                ${I}
            }
            
            .${o} .digiblocks-cta-buttons {
                ${mt}
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                ${se==="center"?"justify-content: center;":se==="right"?"justify-content: flex-end;":"justify-content: flex-start;"}
            }
            
            .${o} .digiblocks-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                border: none;
                cursor: pointer;
                background-color: ${h||"#1e73be"};
                color: ${Q||"#ffffff"};
                ${b(J,"padding",e)}
                ${b(V,"border-radius",e)}
                ${U}
            }
            
            .${o} .digiblocks-cta-button.is-full-width {
                width: 100%;
            }
            
            .${o} .digiblocks-cta-button:not(.is-primary) {
                background-color: transparent;
                color: ${h||"#1e73be"};
                border: 2px solid ${h||"#1e73be"};
            }
            
            ${z}
            ${kt}
            ${be}
            ${vt}
            ${xt}
            ${ft}
            
            /* Responsive styles */
			@media (max-width: 991px) {
                .${o} {
                    ${c!=="split"?`${b(P,"padding","tablet")}`:""}
                    
					${b(E,"margin","tablet")}
                    
                    ${k&&k.tablet?`min-height: ${k.tablet}px;`:""}
                    
                    ${u&&u!=="none"&&S&&S.tablet?`${b(S,"border-width","tablet")}`:""}
                    
                    ${u&&u!=="none"&&O&&O.tablet?`${b(O,"border-radius","tablet")}`:""}
                }
                
                .${o} .digiblocks-cta-title {
                    ${a&&a.fontSize&&a.fontSize.tablet?`font-size: ${a.fontSize.tablet}${a.fontSizeUnit||"px"};`:""}
                    
                    ${a&&a.lineHeight&&a.lineHeight.tablet?`line-height: ${a.lineHeight.tablet}${a.lineHeightUnit||"em"};`:""}
                    
                    ${a&&a.letterSpacing&&a.letterSpacing.tablet?`letter-spacing: ${a.letterSpacing.tablet}${a.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${n&&n.fontSize&&n.fontSize.tablet?`font-size: ${n.fontSize.tablet}${n.fontSizeUnit||"px"};`:""}
                    
                    ${n&&n.lineHeight&&n.lineHeight.tablet?`line-height: ${n.lineHeight.tablet}${n.lineHeightUnit||"em"};`:""}
                    
                    ${n&&n.letterSpacing&&n.letterSpacing.tablet?`letter-spacing: ${n.letterSpacing.tablet}${n.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${r&&r.fontSize&&r.fontSize.tablet?`font-size: ${r.fontSize.tablet}${r.fontSizeUnit||"px"};`:""}

					${b(J,"padding","tablet")}
					${b(V,"border-radius","tablet")}
                }
            }

			@media (max-width: 767px) {
                .${o} {
					${c!=="split"?`${b(P,"padding","mobile")}`:""}

					${b(E,"margin","mobile")}
					
					${k&&k.mobile?`min-height: ${k.mobile}px;`:""}
					
					${u&&u!=="none"&&S&&S.mobile?`${b(S,"border-width","mobile")}`:""}
					
					${b(O,"border-radius","mobile")}
                }
                
                ${c==="split"?`.${o} .digiblocks-cta-split-container {
                        flex-direction: ${Se?"column-reverse":"column"};
                    }
                    
                    .${o} .digiblocks-cta-image-container {
                        min-height: 200px;
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        ${b(P,"padding","mobile")}
                    }`:""}
                
                .${o} .digiblocks-cta-title {
                    ${a&&a.fontSize&&a.fontSize.mobile?`font-size: ${a.fontSize.mobile}${a.fontSizeUnit||"px"};`:""}
                    
                    ${a&&a.lineHeight&&a.lineHeight.mobile?`line-height: ${a.lineHeight.mobile}${a.lineHeightUnit||"em"};`:""}
                    
                    ${a&&a.letterSpacing&&a.letterSpacing.mobile?`letter-spacing: ${a.letterSpacing.mobile}${a.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${n&&n.fontSize&&n.fontSize.mobile?`font-size: ${n.fontSize.mobile}${n.fontSizeUnit||"px"};`:""}
                    
                    ${n&&n.lineHeight&&n.lineHeight.mobile?`line-height: ${n.lineHeight.mobile}${n.lineHeightUnit||"em"};`:""}
                    
                    ${n&&n.letterSpacing&&n.letterSpacing.mobile?`letter-spacing: ${n.letterSpacing.mobile}${n.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${r&&r.fontSize&&r.fontSize.mobile?`font-size: ${r.fontSize.mobile}${r.fontSizeUnit||"px"};`:""}
                    
					${b(J,"padding","mobile")}
					${b(V,"border-radius","mobile")}
                }
                
                .${o} .digiblocks-cta-buttons {
                    flex-direction: column;
					gap: 10px;
                }
                
                .${o} .digiblocks-cta-button {
                    width: 100%;
                }
            }

			/* Change image for Split layout */
			.${o} .digiblocks-image-upload-container {
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			
			.${o} .digiblocks-image-upload-container img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
				cursor: pointer;
				transition: transform 0.3s ease;
			}
			
			.${o} .digiblocks-image-upload-container:hover img {
				transform: scale(1.05);
			}
			
			.${o} .digiblocks-change-image-button {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background-color: rgba(0, 0, 0, 0.5);
				color: white;
				padding: 8px 0;
				text-align: center;
				font-size: 12px;
				cursor: pointer;
				opacity: 0;
				transition: opacity 0.3s ease;
				border: none;
				width: 100%;
			}
			
			.${o} .digiblocks-image-upload-container:hover .digiblocks-change-image-button {
				opacity: 1;
			}
			
			.${o} .digiblocks-image-placeholder {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #f0f0f0;
				color: #888;
				font-size: 14px;
				cursor: pointer;
				min-height: 300px;
			}

			/* Visibility Controls */
			${f.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${f.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${f.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Ut=()=>{if(!j||!C)return C;let e=C.indexOf(j);if(e===-1)return C;let i=C.substring(0,e),d=C.substring(e,e+j.length),B=C.substring(e+j.length);return wp.element.createElement(wp.element.Fragment,null,i,wp.element.createElement("span",{className:"digiblocks-cta-highlight"},d),B)},dt=(e,i)=>wp.element.createElement("div",{className:"digiblocks-button-editor",key:e.id,style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"5px"}},wp.element.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"}},wp.element.createElement("h3",{style:{margin:0}},t("Button","digiblocks")," ",i+1),m.length>1&&wp.element.createElement(X,{isDestructive:!0,onClick:()=>at(e.id),icon:"trash"},t("Remove","digiblocks"))),wp.element.createElement(me,{label:t("Button Text","digiblocks"),value:e.text||"",onChange:d=>x(e.id,"text",d),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(me,{label:t("Button URL","digiblocks"),value:e.url||"",onChange:d=>x(e.id,"url",d),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(R,{label:t("Open in new tab","digiblocks"),checked:e.openInNewTab||!1,onChange:d=>x(e.id,"openInNewTab",d),__nextHasNoMarginBottom:!0}),wp.element.createElement(R,{label:t("Add noopener noreferrer","digiblocks"),checked:!!e.rel,onChange:d=>x(e.id,"rel",d?"noopener noreferrer":""),__nextHasNoMarginBottom:!0}),wp.element.createElement(R,{label:t("Primary Button","digiblocks"),checked:e.isPrimary||!1,onChange:d=>x(e.id,"isPrimary",d),__nextHasNoMarginBottom:!0}),wp.element.createElement(R,{label:t("Full Width Button","digiblocks"),checked:e.isFullWidth||!1,onChange:d=>x(e.id,"isFullWidth",d),__nextHasNoMarginBottom:!0}),wp.element.createElement(R,{label:t("Custom Colors","digiblocks"),checked:e.customColors||!1,onChange:d=>x(e.id,"customColors",d),__nextHasNoMarginBottom:!0})),e.customColors&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(T,{title:t("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:e.backgroundColor,onChange:d=>x(e.id,"backgroundColor",d),label:t("Background Color","digiblocks")},{value:e.textColor,onChange:d=>x(e.id,"textColor",d),label:t("Text Color","digiblocks")},{value:e.hoverBackgroundColor,onChange:d=>x(e.id,"hoverBackgroundColor",d),label:t("Hover Background Color","digiblocks")},{value:e.hoverTextColor,onChange:d=>x(e.id,"hoverTextColor",d),label:t("Hover Text Color","digiblocks")}]}),wp.element.createElement(me,{label:t("Border Radius","digiblocks"),type:"number",value:e.borderRadius||"",onChange:d=>x(e.id,"borderRadius",d),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),ct=()=>{switch(Me){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(y,{tab:"options",name:"general",title:t("General","digiblocks"),initialOpen:!0},wp.element.createElement(Ie,{label:t("CTA Style","digiblocks"),id:"cta-style-selector",className:"digiblocks-cta-style-selector",__nextHasNoMarginBottom:!0},wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px"}},Ye.map(e=>wp.element.createElement("div",{key:e.value},nt(e))))),wp.element.createElement(R,{label:t("Horizontal Layout","digiblocks"),help:t("Display content and buttons side by side","digiblocks"),checked:G||!1,onChange:e=>l({horizontalLayout:e}),__nextHasNoMarginBottom:!0}),wp.element.createElement(q,{label:t("Heading Tag","digiblocks"),value:ue||"h2",options:qe,onChange:e=>l({headingTag:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),c==="split"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(He,{label:t("Vertical Align","digiblocks"),value:$e||"center",onChange:e=>l({verticalAlign:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},et.map(e=>wp.element.createElement(Ne,{key:e.value,value:e.value,label:e.label}))),wp.element.createElement(R,{label:t("Reverse Columns on Mobile","digiblocks"),help:t("Place the image above the text on mobile devices","digiblocks"),checked:Se||!1,onChange:e=>l({reverseColumnsMobile:e}),__nextHasNoMarginBottom:!0})),wp.element.createElement(L,{label:t("Content Width","digiblocks")},wp.element.createElement(_e,{value:he,onChange:e=>l({contentWidth:e}),min:10,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(L,{label:t("Min Height","digiblocks")},wp.element.createElement(_e,{value:k&&k[s]?k[s]:0,onChange:e=>l({minHeight:{...k||{},[s]:e}}),min:0,max:1e3,step:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(y,{tab:"options",name:"content",title:t("Content","digiblocks"),initialOpen:!1},wp.element.createElement(Ie,{label:t("Title Highlight","digiblocks"),id:"title-highlight",help:t("Enter text within the title to highlight","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(me,{value:j||"",onChange:e=>l({highlightText:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),j&&wp.element.createElement(q,{label:t("Highlight Type","digiblocks"),value:F||"background",options:tt,onChange:e=>l({highlightType:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),j&&F&&F!=="none"&&wp.element.createElement(T,{title:t("Highlight Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ge,onChange:e=>l({highlightColor:e}),label:t("Highlight Color","digiblocks")}]})),wp.element.createElement(y,{tab:"options",name:"buttons",title:t("Buttons","digiblocks"),initialOpen:!1},wp.element.createElement(He,{label:t("Buttons Alignment","digiblocks"),value:se||"left",onChange:e=>l({buttonsAlign:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Ae.map(e=>wp.element.createElement(Ne,{key:e.value,value:e.value,label:e.label}))),wp.element.createElement(L,{label:t("Padding","digiblocks")},wp.element.createElement(ie,{values:J&&J[s]?J[s]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:e=>l({buttonPadding:{...J||{},[s]:e}})})),wp.element.createElement(L,{label:t("Border Radius","digiblocks")},wp.element.createElement(ie,{values:V&&V[s]?V[s]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:e=>l({buttonBorderRadius:{...V||{},[s]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("div",{className:"digiblocks-button-list"},m&&m.map((e,i)=>dt(e,i))),wp.element.createElement(X,{variant:"secondary",onClick:lt,style:{marginTop:"10px",width:"100%"}},t("Add Button","digiblocks"))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(y,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Tt,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:it},e=>e.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(T,{title:t("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:D,onChange:i=>l({titleColor:i}),label:t("Title Color","digiblocks")},{value:_,onChange:i=>l({textColor:i}),label:t("Text Color","digiblocks")}]}),wp.element.createElement(T,{title:t("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:h,onChange:i=>l({buttonColor:i}),label:t("Button Color","digiblocks")},{value:Q,onChange:i=>l({buttonTextColor:i}),label:t("Button Text Color","digiblocks")}]}),u&&u!=="none"&&wp.element.createElement(T,{title:t("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:fe,onChange:i=>l({borderColor:i}),label:t("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(T,{title:t("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ve,onChange:i=>l({titleHoverColor:i}),label:t("Title Hover Color","digiblocks")},{value:xe,onChange:i=>l({textHoverColor:i}),label:t("Text Hover Color","digiblocks")}]}),wp.element.createElement(T,{title:t("Button Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ye,onChange:i=>l({buttonHoverColor:i}),label:t("Button Hover Color","digiblocks")},{value:Ce,onChange:i=>l({buttonTextHoverColor:i}),label:t("Button Text Hover Color","digiblocks")}]}),H==="color"&&c!=="gradient"&&wp.element.createElement(T,{title:t("Background Hover Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:te,onChange:i=>l({backgroundHoverColor:i}),label:t("Background Hover Color","digiblocks")}]})))),wp.element.createElement(y,{tab:"style",name:"background",title:t("Background","digiblocks"),initialOpen:!1},c!=="gradient"&&wp.element.createElement(He,{label:t("Background Type","digiblocks"),value:H||"color",onChange:e=>l({backgroundType:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Xe.map(e=>wp.element.createElement(Ne,{key:e.value,value:e.value,label:e.label}))),H==="color"&&c!=="gradient"&&wp.element.createElement(T,{title:t("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:e=>l({backgroundColor:e}),label:t("Background Color","digiblocks")}]}),H==="gradient"||c==="gradient"?wp.element.createElement(T,{title:t("Gradient Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:e=>l({backgroundColor:e}),label:t("Start Color","digiblocks")},{value:te,onChange:e=>l({backgroundHoverColor:e}),label:t("End Color","digiblocks")}]}):null,H==="image"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement(Te,null,wp.element.createElement(Be,{onSelect:e=>{l({backgroundImage:{id:e.id,url:e.url,alt:e.alt||"",width:e.width,height:e.height}})},allowedTypes:["image"],value:p?.id,render:({open:e})=>wp.element.createElement(wp.element.Fragment,null,p?.url?wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement("img",{src:p.url,alt:p.alt,style:{display:"block",width:"100%",height:"auto",maxHeight:"150px",objectFit:"cover",marginBottom:"8px"}}),wp.element.createElement("div",{style:{display:"flex",gap:"8px"}},wp.element.createElement(X,{variant:"secondary",onClick:e,style:{flexGrow:1}},t("Replace","digiblocks")),wp.element.createElement(X,{variant:"secondary",onClick:()=>l({backgroundImage:null}),isDestructive:!0},t("Remove","digiblocks")))):wp.element.createElement("div",{style:{marginBottom:"8px"}},wp.element.createElement(X,{variant:"secondary",onClick:e,icon:"format-image",style:{width:"100%"}},t("Select Image","digiblocks"))))}))),p?.url&&!c.includes("split")&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_e,{label:t("Overlay Opacity (%)","digiblocks"),value:re||50,onChange:e=>l({backgroundOverlayOpacity:e}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(T,{title:t("Overlay Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:A,onChange:e=>l({backgroundOverlayColor:e}),label:t("Overlay Color","digiblocks")}]}),wp.element.createElement(q,{label:t("Background Position","digiblocks"),value:v||"center center",options:Ze,onChange:e=>l({backgroundPosition:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(q,{label:t("Background Size","digiblocks"),value:de||"cover",options:Ke,onChange:e=>l({backgroundSize:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(q,{label:t("Background Repeat","digiblocks"),value:ce||"no-repeat",options:Qe,onChange:e=>l({backgroundRepeat:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(y,{tab:"style",name:"typography",title:t("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Pe,{label:t("Title Typography","digiblocks"),value:a,onChange:e=>l({titleTypography:e})}),wp.element.createElement(Pe,{label:t("Content Typography","digiblocks"),value:n,onChange:e=>l({contentTypography:e})}),wp.element.createElement(Pe,{label:t("Button Typography","digiblocks"),value:r,onChange:e=>l({buttonTypography:e})})),wp.element.createElement(y,{tab:"style",name:"border",title:t("Border","digiblocks"),initialOpen:!1},wp.element.createElement(q,{label:t("Border Style","digiblocks"),value:u||"none",options:Ve,onChange:e=>l({borderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),u&&u!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(L,{label:t("Border Width","digiblocks")},wp.element.createElement(ie,{values:S&&S[s]?S[s]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:e=>l({borderWidth:{...S||{},[s]:e}})}))),wp.element.createElement(L,{label:t("Border Radius","digiblocks")},wp.element.createElement(ie,{values:O&&O[s]?O[s]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:e=>l({borderRadius:{...O||{},[s]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(y,{tab:"style",name:"spacing",title:t("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(L,{label:t("Padding","digiblocks")},wp.element.createElement(ie,{values:P&&P[s]?P[s]:{top:40,right:30,bottom:40,left:30,unit:"px"},onChange:e=>l({padding:{...P||{},[s]:e}})})),wp.element.createElement(L,{label:t("Margin","digiblocks")},wp.element.createElement(ie,{values:E&&E[s]?E[s]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:e=>l({margin:{...E||{},[s]:e}})}))),wp.element.createElement(y,{tab:"style",name:"shadow",title:t("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Nt,{normalValue:M||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},hoverValue:w||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},onNormalChange:e=>l({boxShadow:e}),onHoverChange:e=>l({boxShadowHover:e})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(y,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(q,{label:t("Animation Effect","digiblocks"),value:N||"none",options:Je,onChange:e=>l({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),N&&N!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(X,{variant:"secondary",isSecondary:!0,onClick:Ee,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(y,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(R,{label:t("Hide on Desktop","digiblocks"),checked:f.desktop,onChange:e=>l({visibility:{...f,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(R,{label:t("Hide on Tablet","digiblocks"),checked:f.tablet,onChange:e=>l({visibility:{...f,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(R,{label:t("Hide on Mobile","digiblocks"),checked:f.mobile,onChange:e=>l({visibility:{...f,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(y,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:Z||"",onChange:e=>l({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:K||"",onChange:e=>l({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},st=$t({className:`digiblocks-cta ${o} style-${c} ${N!=="none"?`animate-${N}`:""} ${K||""}`,id:Z||null}),we=()=>!m||m.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},m.map(e=>{let i=["digiblocks-cta-button",e.isPrimary?"is-primary":"",e.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),d=e.customColors?{backgroundColor:e.isPrimary?e.backgroundColor||h:"transparent",color:e.isPrimary?e.textColor||Q:e.backgroundColor||h,borderColor:e.backgroundColor||h,borderStyle:"solid",borderWidth:"2px",borderRadius:e.borderRadius?`${e.borderRadius}px`:void 0}:{};return wp.element.createElement("span",{key:e.id,className:i,style:e.customColors?d:{}},e.text||t("Click Here","digiblocks"))})),gt=()=>{let e=ue||"h2";switch(c){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${G?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(oe,{tagName:e,className:"digiblocks-cta-title",value:C,onChange:i=>l({title:i}),placeholder:t("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(oe,{tagName:"p",className:"digiblocks-cta-content",value:ne,onChange:i=>l({content:i}),placeholder:t("Add content...","digiblocks")})),we())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"},wp.element.createElement(Te,null,wp.element.createElement(Be,{onSelect:i=>{l({backgroundImage:{id:i.id,url:i.url,alt:i.alt||"",width:i.width,height:i.height}})},allowedTypes:["image"],value:p?.id,render:({open:i})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},p?.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:p.url,alt:p.alt||"",onClick:i}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:i},t("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-image-placeholder",onClick:i},t("Choose Image","digiblocks")))}))));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${G?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(oe,{tagName:e,className:"digiblocks-cta-title",value:C,onChange:i=>l({title:i}),placeholder:t("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(oe,{tagName:"p",className:"digiblocks-cta-content",value:ne,onChange:i=>l({content:i}),placeholder:t("Add content...","digiblocks")})),we()),!p?.url&&wp.element.createElement("div",{className:"digiblocks-image-placeholder"},wp.element.createElement(Te,null,wp.element.createElement(Be,{onSelect:i=>{l({backgroundImage:{id:i.id,url:i.url,alt:i.alt||"",width:i.width,height:i.height}})},allowedTypes:["image"],value:p?.id,render:({open:i})=>wp.element.createElement(X,{variant:"secondary",onClick:i,icon:"format-image"},t("Select Background Image","digiblocks"))}))));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${G?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(oe,{tagName:e,className:"digiblocks-cta-title",value:C,onChange:i=>l({title:i}),placeholder:t("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"],withoutInteractiveFormatting:!0}),wp.element.createElement(oe,{tagName:"p",className:"digiblocks-cta-content",value:ne,onChange:i=>l({content:i}),placeholder:t("Add content...","digiblocks"),withoutInteractiveFormatting:!0})),we())}};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(St,null,wp.element.createElement(zt,{tabs:ot,activeTab:Me,onSelect:Ge},ct())),wp.element.createElement(wt,null,wp.element.createElement(Bt,{value:ee,onChange:e=>l({align:e})})),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:rt()}}),wp.element.createElement("div",{...st},gt()))},We=Rt;var{useBlockProps:Dt,RichText:le}=window.wp.blockEditor,Ot=({attributes:ae})=>{let{id:l,anchor:pe,customClasses:o,style:Z,horizontalLayout:f,title:K,content:c,headingTag:G,backgroundImage:C,backgroundType:ne,align:ue,animation:D,buttons:_,highlightText:h,highlightType:Q,highlightColor:$}=ae,H=["digiblocks-cta",l,`style-${Z}`,D!=="none"?`animate-${D}`:"",o].filter(Boolean).join(" "),p=G||"h2",A=()=>!_||_.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},_.map(v=>{let de=["digiblocks-cta-button",v.isPrimary?"is-primary":"",v.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),ce=v.openInNewTab?"_blank":void 0,u=v.rel||void 0;return wp.element.createElement("a",{key:v.id,className:de,href:v.url||"#",target:ce,rel:u,"data-button-id":v.id},v.text||"Click Here")})),re=()=>{switch(Z){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${f?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(le.Content,{tagName:p,className:"digiblocks-cta-title",value:K}),wp.element.createElement(le.Content,{tagName:"p",className:"digiblocks-cta-content",value:c})),A())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"}));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${f?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(le.Content,{tagName:p,className:"digiblocks-cta-title",value:K}),wp.element.createElement(le.Content,{tagName:"p",className:"digiblocks-cta-content",value:c})),A()));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${f?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(le.Content,{tagName:p,className:"digiblocks-cta-title",value:K}),wp.element.createElement(le.Content,{tagName:"p",className:"digiblocks-cta-content",value:c})),A())}};return wp.element.createElement("div",{...Dt.save({className:H,id:pe||null,"data-style":Z,"data-background-type":ne||"color","data-align":ue||"left","data-highlight-text":h||"","data-highlight-type":Q||"none","data-highlight-color":$||"#ffde59"})},re())},Fe=Ot;var{__:W}=window.wp.i18n,{registerBlockType:Pt}=window.wp.blocks;Pt("digiblocks/call-to-action",{apiVersion:2,title:digiBlocksData.blocks["call-to-action"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ae,path:l}=digiBlocksData.blocks["call-to-action"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ae}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:l}))}},description:digiBlocksData.blocks["call-to-action"].description,keywords:[W("cta","digiblocks"),W("call to action","digiblocks"),W("button","digiblocks"),W("conversion","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},style:{type:"string",default:"basic"},horizontalLayout:{type:"boolean",default:!1},title:{type:"string",default:W("Ready to Get Started?","digiblocks")},content:{type:"string",default:W("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.","digiblocks")},headingTag:{type:"string",default:"h2"},titleColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},buttonColor:{type:"string",default:"#1e73be"},buttonTextColor:{type:"string",default:"#ffffff"},backgroundColor:{type:"string",default:"#f5f5f5"},backgroundType:{type:"string",default:"color"},backgroundImage:{type:"object",default:null},backgroundOverlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},backgroundOverlayOpacity:{type:"number",default:50},backgroundPosition:{type:"string",default:"center center"},backgroundSize:{type:"string",default:"cover"},backgroundRepeat:{type:"string",default:"no-repeat"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},padding:{type:"object",default:{desktop:{top:40,right:30,bottom:40,left:30,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},align:{type:"string",default:"left"},titleTypography:{type:"object"},contentTypography:{type:"object"},buttonTypography:{type:"object"},contentWidth:{type:"number"},width:{type:"string",default:"100%"},animation:{type:"string",default:"none"},boxShadow:{type:"object"},boxShadowHover:{type:"object"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonsAlign:{type:"string",default:"left"},buttons:{type:"array",default:[]},titleHoverColor:{type:"string",default:""},textHoverColor:{type:"string",default:""},buttonHoverColor:{type:"string",default:""},buttonTextHoverColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"none"},verticalAlign:{type:"string",default:"center"},reverseColumnsMobile:{type:"boolean",default:!1},minHeight:{type:"object"},gradientDirection:{type:"number",default:135},ribbonColor:{type:"string",default:"#1e73be"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonPosition:{type:"string",default:"top-right"},ribbonText:{type:"string",default:"Special Offer"}},example:{attributes:{style:"basic",title:W("Ready to Get Started?","digiblocks"),content:W("Join us today and experience the difference.","digiblocks"),buttons:[{id:"button-1",text:W("Sign Up Now","digiblocks"),url:"#",isPrimary:!0}],backgroundColor:"#f5f5f5"}},edit:We,save:Fe});})();
