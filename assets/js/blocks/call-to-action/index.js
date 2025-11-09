(()=>{var{__:t}=window.wp.i18n,{useBlockProps:Et,RichText:pe,InspectorControls:Ut,PanelColorSettings:M,BlockControls:Jt,AlignmentToolbar:Zt,MediaUpload:qe,MediaUploadCheck:Ke}=window.wp.blockEditor,{TextControl:Se,SelectControl:G,RangeControl:Pe,ToggleControl:F,Button:ae,__experimentalToggleGroupControl:Be,__experimentalToggleGroupControlOption:ne,TabPanel:qt,BaseControl:bt}=window.wp.components,{useState:Qe,useEffect:Ae,useRef:Kt}=window.wp.element,{useBlockId:Qt,getDimensionCSS:v,animations:et,animationPreview:pt}=digi.utils,{tabIcons:tt}=digi.icons,{ResponsiveControl:ht,ResponsiveRangeControl:ft,DimensionControl:he,TypographyControl:ot,BoxShadowControl:At,CustomTabPanel:eo,TabPanelBody:S,TransformControl:to}=digi.components,oo=({attributes:me,setAttributes:l,clientId:Te})=>{let{id:o,anchor:re,visibility:B,customClasses:de,style:m,horizontalLayout:A,title:z,content:ve,headingTag:_e,titleColor:D,textColor:U,buttonColor:y,buttonTextColor:J,backgroundColor:O,backgroundType:P,backgroundImage:k,backgroundOverlayColor:He,backgroundOverlayOpacity:ee,backgroundPosition:te,backgroundSize:oe,backgroundRepeat:ke,borderStyle:f,borderWidth:I,borderRadius:Z,borderColor:xe,padding:se,margin:Ne,align:ce,titleTypography:n,contentTypography:r,buttonTypography:p,contentWidth:ze,width:Ie,animation:_,animationDuration:je,animationDelay:Ve,boxShadow:L,boxShadowHover:R,buttonBorderRadius:De,buttonPadding:Oe,buttonsAlign:ye,buttons:C,titleHoverColor:We,textHoverColor:Fe,buttonHoverColor:Le,buttonTextHoverColor:Ye,backgroundHoverColor:ge,highlightText:Y,highlightColor:Ce,highlightType:q,verticalAlign:Xe,reverseColumnsMobile:Ge,minHeight:T,position:$e,horizontalOrientation:it,horizontalOffset:j,verticalOrientation:lt,verticalOffset:V,zIndex:we,transform:Ee,transformHover:K}=me,[ie,kt]=Qe(window.digi.responsiveState.activeDevice),[no,ro]=Qe(!1);Ae(()=>window.digi.responsiveState.subscribe(i=>{kt(i)}),[]);let X=(e,i)=>{if(!e||typeof e!="object")return null;let a=s=>s===""||s===void 0||s===null?!0:typeof s=="object"&&s!==null?s.value===""||s.value===void 0||s.value===null:!1;return i==="mobile"?a(e.mobile)?a(e.tablet)?e.desktop:e.tablet:e.mobile:i==="tablet"?a(e.tablet)?e.desktop:e.tablet:e.desktop},[at,xt]=Qe(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(Te);if(e)return e}return"options"});Qt(o,Te,l),Ae(()=>{(!C||!Array.isArray(C)||C.length===0)&&l({buttons:[{id:"button-1",text:t("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!0,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}]}),n||l({titleTypography:{fontFamily:"",fontSize:{desktop:{value:36,unit:"px"},tablet:{value:32,unit:"px"},mobile:{value:28,unit:"px"}},fontWeight:"700",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:{value:1.2,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}}),r||l({contentTypography:{fontFamily:"",fontSize:{desktop:{value:18,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:{value:1.6,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}}),p||l({buttonTypography:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}}),R||l({boxShadowHover:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}})},[C,n,r,p,R,l]);let nt=Kt(null);Ae(()=>{if(_&&_!=="none"){let e=setTimeout(()=>{pt(o,_,et,nt,je,Ve)},100);return()=>clearTimeout(e)}},[_]);let yt=()=>{pt(o,_,et,nt,je,Ve)},Ct=[{label:t("None","digiblocks"),value:"none"},{label:t("Solid","digiblocks"),value:"solid"},{label:t("Dotted","digiblocks"),value:"dotted"},{label:t("Dashed","digiblocks"),value:"dashed"},{label:t("Double","digiblocks"),value:"double"},{label:t("Groove","digiblocks"),value:"groove"},{label:t("Ridge","digiblocks"),value:"ridge"},{label:t("Inset","digiblocks"),value:"inset"},{label:t("Outset","digiblocks"),value:"outset"}],$t=[{label:t("None","digiblocks"),value:"none"},...Object.keys(et).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()),value:e}))],wt=[{label:t("Basic","digiblocks"),value:"basic"},{label:t("Split","digiblocks"),value:"split"},{label:t("Cover","digiblocks"),value:"cover"},{label:t("Box","digiblocks"),value:"box"},{label:t("Modern","digiblocks"),value:"modern"},{label:t("Gradient","digiblocks"),value:"gradient"},{label:t("Minimal","digiblocks"),value:"minimal"},{label:t("Callout","digiblocks"),value:"callout"},{label:t("Banner","digiblocks"),value:"banner"}],St=[{label:"H1",value:"h1"},{label:"H2",value:"h2"},{label:"H3",value:"h3"},{label:"H4",value:"h4"},{label:"H5",value:"h5"},{label:"H6",value:"h6"}],Bt=[{label:t("Color","digiblocks"),value:"color"},{label:t("Image","digiblocks"),value:"image"},{label:t("Gradient","digiblocks"),value:"gradient"}],Tt=[{label:t("Center Center","digiblocks"),value:"center center"},{label:t("Center Top","digiblocks"),value:"center top"},{label:t("Center Bottom","digiblocks"),value:"center bottom"},{label:t("Left Top","digiblocks"),value:"left top"},{label:t("Left Center","digiblocks"),value:"left center"},{label:t("Left Bottom","digiblocks"),value:"left bottom"},{label:t("Right Top","digiblocks"),value:"right top"},{label:t("Right Center","digiblocks"),value:"right center"},{label:t("Right Bottom","digiblocks"),value:"right bottom"}],_t=[{label:t("Cover","digiblocks"),value:"cover"},{label:t("Contain","digiblocks"),value:"contain"},{label:t("Auto","digiblocks"),value:"auto"}],Ht=[{label:t("No Repeat","digiblocks"),value:"no-repeat"},{label:t("Repeat","digiblocks"),value:"repeat"},{label:t("Repeat X","digiblocks"),value:"repeat-x"},{label:t("Repeat Y","digiblocks"),value:"repeat-y"}],Nt=[{label:t("Left","digiblocks"),value:"left"},{label:t("Center","digiblocks"),value:"center"},{label:t("Right","digiblocks"),value:"right"}],zt=[{label:t("Top","digiblocks"),value:"flex-start"},{label:t("Center","digiblocks"),value:"center"},{label:t("Bottom","digiblocks"),value:"flex-end"}],Dt=[{label:t("None","digiblocks"),value:"none"},{label:t("Background","digiblocks"),value:"background"},{label:t("Text","digiblocks"),value:"text"},{label:t("Underline","digiblocks"),value:"underline"}],so={width:300,height:200},Ot=[{name:"options",title:t("Options","digiblocks"),icon:tt.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:tt.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:tt.advancedIcon}],Rt=[{name:"normal",title:t("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:t("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Mt=()=>{let e=`button-${C.length+1}`,i=[...C,{id:e,text:t("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!1,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}];l({buttons:i})},Pt=e=>{let i=C.filter(a=>a.id!==e);l({buttons:i})},H=(e,i,a)=>{let s=C.map($=>$.id===e?{...$,[i]:a}:$);l({buttons:s})},It=e=>{let i=m===e.value,a={display:"inline-flex",flexDirection:"column",width:"70px",height:"70px",margin:"5px",border:`1px solid ${i?"#007cba":"#ddd"}`,backgroundColor:i?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},s={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:i?"500":"normal",borderBottom:`1px solid ${i?"#e0e0e0":"transparent"}`,backgroundColor:i?"rgba(0,124,186,0.05)":"transparent"},$={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},u=null;switch(e.value){case"basic":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"split":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex"}},wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#007cba",display:"flex",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"70%",backgroundColor:"#fff",opacity:.2}})),wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px"}},wp.element.createElement("div",{style:{width:"80%",height:"3px",backgroundColor:"#333",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"40%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;case"cover":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#007cba",opacity:.7,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"box":u=wp.element.createElement("div",{style:{width:"90%",height:"90%",margin:"auto",border:"2px solid #007cba",borderRadius:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"modern":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"3px",position:"relative"}},wp.element.createElement("div",{style:{position:"absolute",left:"0",top:"20%",width:"5px",height:"60%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px",marginLeft:"8px"}}));break;case"gradient":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"minimal":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"1px",backgroundColor:"#007cba",marginBottom:"1px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"callout":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #eee",borderLeft:"5px solid #007cba",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"5px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"banner":u=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#f0f7ff",position:"relative"}},wp.element.createElement("div",{style:{height:"4px",width:"100%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;default:u=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}))}return wp.element.createElement("div",{style:a,onClick:()=>l({style:e.value})},wp.element.createElement("div",{style:s},e.label),wp.element.createElement("div",{style:$},u))},rt=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"vw":case"vh":return 100;default:return 2e3}},dt=e=>{switch(e){case"%":case"vw":case"vh":return 1;case"em":case"rem":return .1;default:return 1}},st=(e,i)=>{let a={left:"0%",center:"50%",right:"100%"},s={top:"0%",center:"50%",bottom:"100%"},$=a[e.xAnchor?.[i]||"center"],u=s[e.yAnchor?.[i]||"center"];return`${$} ${u}`},ct=(e,i)=>{if(!e)return"";let a=[],s=g=>{if(!g)return"";let h=g[i],Q=x=>x===""||x===void 0||x===null?!0:typeof x=="object"&&x!==null?x.value===""||x.value===void 0||x.value===null:!1;return i==="tablet"&&Q(h)&&(h=g.desktop),i==="mobile"&&Q(h)&&(h=g.tablet,Q(h)&&(h=g.desktop)),typeof h=="object"&&h!==null?h.value!==void 0?h.value:"":h},$=s(e.rotate);if($!==""&&$!==void 0&&$!==null){if(e.rotate3d){let g=s(e.perspective);g!==""&&g!==void 0&&g!==null&&a.push(`perspective(${g}px)`)}a.push(`rotate(${$}deg)`)}if(e.rotate3d){let g=s(e.rotateX);g!==""&&g!==void 0&&g!==null&&a.push(`rotateX(${g}deg)`);let h=s(e.rotateY);h!==""&&h!==void 0&&h!==null&&a.push(`rotateY(${h}deg)`)}let u=e.offsetX?.[i]?.value,w=e.offsetY?.[i]?.value,N=u!==""&&u!==void 0&&u!==null,Re=w!==""&&w!==void 0&&w!==null;if(N||Re){let g=N?`${u}${e.offsetX[i].unit||"px"}`:"0",h=Re?`${w}${e.offsetY[i].unit||"px"}`:"0";a.push(`translate(${g}, ${h})`)}if(e.keepProportions){let g=s(e.scale);g!==""&&g!==void 0&&g!==null&&g!=1&&a.push(`scale(${g})`)}else{let g=s(e.scaleX),h=s(e.scaleY),Q=g!==""&&g!==void 0&&g!==null?g:1,x=h!==""&&h!==void 0&&h!==null?h:1;(Q!=1||x!=1)&&a.push(`scale(${Q}, ${x})`)}let ue=s(e.skewX);ue!==""&&ue!==void 0&&ue!==null&&a.push(`skewX(${ue}deg)`);let be=s(e.skewY);return be!==""&&be!==void 0&&be!==null&&a.push(`skewY(${be}deg)`),e.flipHorizontal&&a.push("scaleX(-1)"),e.flipVertical&&a.push("scaleY(-1)"),a.length>0?a.join(" "):""},jt=()=>{let e=window.digi.responsiveState.activeDevice,i="";if(f&&f!=="none"){let b=v(I,"border-width",e)||"border-width: 1px 1px 1px 1px;";i=`
				border-style: ${f};
				border-color: ${xe||"#e0e0e0"};
				${b}
			`}else i="border-style: none;";let a="box-shadow: none;";L&&L.enable&&(a=`box-shadow: ${L.position==="inset"?"inset ":""}${L.horizontal}px ${L.vertical}px ${L.blur}px ${L.spread}px ${L.color};`);let s="";P==="color"?s=`background-color: ${O||"#f5f5f5"};`:P==="image"&&k&&k.url?s=`
                background-image: url(${k.url});
                background-position: ${te||"center center"};
                background-size: ${oe||"cover"};
                background-repeat: ${ke||"no-repeat"};
            `:P==="gradient"&&(s=`background: linear-gradient(135deg, ${O||"#6a11cb"} 0%, ${ge||"#2575fc"} 100%);`);let $=T&&T[e]?`min-height: ${T[e]}px;`:"",u="";if(n){n.fontFamily&&(u+=`font-family: ${n.fontFamily};`);let d=X(n.fontSize,e);d&&d.value!==""&&d.value!==null&&d.value!==void 0&&(u+=`font-size: ${d.value}${d.unit!==null?d.unit:""};`),n.fontWeight&&(u+=`font-weight: ${n.fontWeight};`),n.fontStyle&&(u+=`font-style: ${n.fontStyle};`),n.textTransform&&(u+=`text-transform: ${n.textTransform};`),n.textDecoration&&(u+=`text-decoration: ${n.textDecoration};`);let b=X(n.lineHeight,e);b&&b.value!==""&&b.value!==null&&b.value!==void 0&&(u+=`line-height: ${b.value}${b.unit!==null?b.unit:""};`);let c=X(n.letterSpacing,e);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(u+=`letter-spacing: ${c.value}${c.unit!==null?c.unit:""};`)}let w="";if(r){r.fontFamily&&(w+=`font-family: ${r.fontFamily};`);let d=X(r.fontSize,e);d&&d.value!==""&&d.value!==null&&d.value!==void 0&&(w+=`font-size: ${d.value}${d.unit!==null?d.unit:""};`),r.fontWeight&&(w+=`font-weight: ${r.fontWeight};`),r.fontStyle&&(w+=`font-style: ${r.fontStyle};`),r.textTransform&&(w+=`text-transform: ${r.textTransform};`),r.textDecoration&&(w+=`text-decoration: ${r.textDecoration};`);let b=X(r.lineHeight,e);b&&b.value!==""&&b.value!==null&&b.value!==void 0&&(w+=`line-height: ${b.value}${b.unit!==null?b.unit:""};`);let c=X(r.letterSpacing,e);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(w+=`letter-spacing: ${c.value}${c.unit!==null?c.unit:""};`)}let N="";if(p){p.fontFamily&&(N+=`font-family: ${p.fontFamily};`);let d=X(p.fontSize,e);d&&d.value!==""&&d.value!==null&&d.value!==void 0&&(N+=`font-size: ${d.value}${d.unit!==null?d.unit:""};`),p.fontWeight&&(N+=`font-weight: ${p.fontWeight};`),p.fontStyle&&(N+=`font-style: ${p.fontStyle};`),p.textTransform&&(N+=`text-transform: ${p.textTransform};`),p.textDecoration&&(N+=`text-decoration: ${p.textDecoration};`);let b=X(p.lineHeight,e);b&&b.value!==""&&b.value!==null&&b.value!==void 0&&(N+=`line-height: ${b.value}${b.unit!==null?b.unit:""};`);let c=X(p.letterSpacing,e);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(N+=`letter-spacing: ${c.value}${c.unit!==null?c.unit:""};`)}let Re=ze?`max-width: ${ze}${typeof ze=="number"?"%":""};`:"",ue=Ie?`width: ${Ie}${typeof Ie=="number"?"px":""};`:"width: 100%;",be=ce?`text-align: ${ce};`:"",g=Xe?`justify-content: ${Xe};`:"justify-content: center;",h=ye?`text-align: ${ye};`:"text-align: left;",Q=Ge?"@media (max-width: 767px) { ."+o+" .digiblocks-cta-split-container { flex-direction: column-reverse; } }":"",x="";if(Y&&q&&q!=="none"&&Ce)switch(q){case"background":x=`
                        .${o} .digiblocks-cta-highlight {
                            background-color: ${Ce};
                            padding: 0 5px;
                            border-radius: 3px;
                        }
                    `;break;case"text":x=`
                        .${o} .digiblocks-cta-highlight {
                            color: ${Ce};
                        }
                    `;break;case"underline":x=`
                        .${o} .digiblocks-cta-highlight {
                            border-bottom: 2px solid ${Ce};
                            padding-bottom: 2px;
                        }
                    `;break}let W="";switch(m){case"split":W=`
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
                        background-image: url(${k?.url||""});
                        background-position: ${te||"center center"};
                        background-size: ${oe||"cover"};
                        background-repeat: ${ke||"no-repeat"};
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        flex: 1;
                        ${v(se,"padding",e)}
                        ${O?`background-color: ${O};`:""}
                        display: flex;
                        flex-direction: column;
                        ${g}
                    }

					@media (max-width: 767px) {
                        .${o} .digiblocks-cta-split-container {
                            flex-direction: column;
                        }
                        
                        .${o} .digiblocks-cta-image-container {
                            min-height: 200px;
                        }
                    }
                `;break;case"cover":W=`
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
                        ${s}
                    }
                    
                    .${o} .digiblocks-cta-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background-color: ${He||"rgba(0,0,0,0.5)"};
                        opacity: ${ee!==void 0?ee/100:.5};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${U||"rgba(255, 255, 255, 0.9)"};
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
                `;break;case"box":W=`
                    .${o} {
                        border: 2px solid ${xe||"#e0e0e0"};
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                `;break;case"modern":W=`
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
                        background-color: ${y||"#1e73be"};
                        border-radius: 4px;
                    }
                `;break;case"gradient":W=`
                    .${o} {
                        background: linear-gradient(135deg, ${O||"#6a11cb"} 0%, ${ge||"#2575fc"} 100%);
                        color: #fff;
                        border-radius: 10px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${U||"rgba(255, 255, 255, 0.9)"};
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
                `;break;case"minimal":W=`
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
                        background-color: ${y||"#1e73be"};
                    }
                `;break;case"callout":W=`
                    .${o} {
                        border-left: 5px solid ${y||"#1e73be"};
                        background-color: ${O||"#f5f5f5"};
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
                        background-color: ${y||"#1e73be"};
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${U||"#666"};
                        margin-bottom: 20px;
                    }
                `;break;case"banner":W=`
                    .${o} {
                        position: relative;
                        padding: 30px;
                        background-color: ${O||"#f0f7ff"};
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
                        background-color: ${y||"#1e73be"};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${D};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${U||"#666"};
                        margin-bottom: 20px;
                    }
                    
                    .${o} .digiblocks-cta-button {
                        background-color: ${y||"#1e73be"};
                        color: ${J||"#fff"};
                        border-radius: 4px;
                        padding: 10px 20px;
                        transition: all 0.3s ease;
                    }
                    
                    .${o} .digiblocks-cta-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                `;break;default:W=""}let Yt="";A&&(x=`
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
						align-items: ${ce==="center"?"center":ce==="right"?"flex-end":"flex-start"};
						gap: 1rem;
					}
					
					.${o} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
						width: 100%;
						text-align: ${ce};
					}
				}
			`);let Xt=Y&&q&&q!=="none"?`
            .${o} .digiblocks-cta-title {
                white-space: pre-wrap;
            }
        `:"",Gt=`
            .${o} .digiblocks-cta-title {
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-cta-content {
                transition: color 0.3s ease;
            }
            
            .${o}:hover .digiblocks-cta-title {
                ${We?`color: ${We};`:""}
            }
            
            .${o}:hover .digiblocks-cta-content {
                ${Fe?`color: ${Fe};`:""}
            }
            
            .${o}:hover {
                ${ge&&m!=="gradient"&&m!=="split"?`background-color: ${ge};`:""}
                
                ${R&&R.enable?`
                    ${R.position==="inset"?"box-shadow: inset":"box-shadow:"} 
                    ${R.horizontal}px 
                    ${R.vertical}px 
                    ${R.blur}px 
                    ${R.spread}px 
                    ${R.color};`:""}
            }
            
            .${o} .digiblocks-cta-button {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-cta-button:hover {
                ${Le?`background-color: ${Le};`:""}
                ${Ye?`color: ${Ye};`:""}
            }
        `,le="";if($e&&$e!=="default"){le+=`position: ${$e} !important;`;let d=j?.[e]?.value,b=j?.[e]?.unit||"px";(d===""||d===void 0)&&(e==="tablet"?d=j?.desktop?.value:e==="mobile"&&(d=j?.tablet?.value!==""&&j?.tablet?.value!==void 0?j?.tablet?.value:j?.desktop?.value)),d!==""&&d!==void 0&&(it==="left"?le+=`left: ${d}${b};`:le+=`right: ${d}${b};`);let c=V?.[e]?.value,ut=V?.[e]?.unit||"px";(c===""||c===void 0)&&(e==="tablet"?c=V?.desktop?.value:e==="mobile"&&(c=V?.tablet?.value!==""&&V?.tablet?.value!==void 0?V?.tablet?.value:V?.desktop?.value)),c!==""&&c!==void 0&&(lt==="top"?le+=`top: ${c}${ut};`:le+=`bottom: ${c}${ut};`)}we!==""&&we!==void 0&&we!==null&&(le+=`z-index: ${we};`);let Me="",gt=ct(Ee,e);gt&&(Me+=`transform: ${gt};`,Me+=`transform-origin: ${st(Ee,e)};`);let Je=ct(K,e);if(Je&&K&&K.transitionDuration!==""&&K.transitionDuration!==void 0&&K.transitionDuration!==null){let d=K.transitionDuration;Me+=`transition: transform ${d}ms ease;`}let Ze="";return Je&&(Ze+=`transform: ${Je};`,Ze+=`transform-origin: ${st(K,e)};`),`
            /* Call to Action Block - ${o} */
            .${o} {
                ${m!=="split"?s:""}
                ${i}
				${v(Z,"border-radius",e)}
                ${a}
                ${m!=="split"?`${v(se,"padding",e)}`:""}
                ${v(Ne,"margin",e)}
                ${ue}
                ${$}
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
                ${le}
				${Me}
            }

            .${o}:hover {
				${Ze}
            }
            
            .${o} .digiblocks-cta-container {
                ${Re}
                margin: 0 auto;
                ${m!=="split"?be:""}
            }
            
            .${o} .digiblocks-cta-title {
                color: ${D};
                margin-top: 0;
                margin-bottom: 20px;
                ${u}
            }
            
            .${o} .digiblocks-cta-content {
                color: ${U||"#666666"};
                margin-bottom: 30px;
                ${w}
            }
            
            .${o} .digiblocks-cta-buttons {
                ${h}
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                ${ye==="center"?"justify-content: center;":ye==="right"?"justify-content: flex-end;":"justify-content: flex-start;"}
            }
            
            .${o} .digiblocks-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                border: none;
                cursor: pointer;
                background-color: ${y||"#1e73be"};
                color: ${J||"#ffffff"};
                ${v(Oe,"padding",e)}
                ${v(De,"border-radius",e)}
                ${N}
            }
            
            .${o} .digiblocks-cta-button.is-full-width {
                width: 100%;
            }
            
            .${o} .digiblocks-cta-button:not(.is-primary) {
                background-color: transparent;
                color: ${y||"#1e73be"};
                border: 2px solid ${y||"#1e73be"};
            }
            
            ${W}
            ${Yt}
            ${x}
            ${Xt}
            ${Gt}
            ${Q}
            
            /* Responsive styles */
			@media (max-width: 991px) {
                .${o} {
                    ${m!=="split"?`${v(se,"padding","tablet")}`:""}
                    
					${v(Ne,"margin","tablet")}
                    
                    ${T&&T.tablet?`min-height: ${T.tablet}px;`:""}
                    
                    ${f&&f!=="none"&&I&&I.tablet?`${v(I,"border-width","tablet")}`:""}
                    
                    ${f&&f!=="none"&&Z&&Z.tablet?`${v(Z,"border-radius","tablet")}`:""}
                }
                
                .${o} .digiblocks-cta-title {
                    ${n&&n.fontSize&&n.fontSize.tablet?`font-size: ${n.fontSize.tablet.value}${n.fontSize.tablet.unit};`:""}

                    ${n&&n.lineHeight&&n.lineHeight.tablet?`line-height: ${n.lineHeight.tablet.value}${n.lineHeight.tablet.unit};`:""}

                    ${n&&n.letterSpacing&&n.letterSpacing.tablet?`letter-spacing: ${n.letterSpacing.tablet.value}${n.letterSpacing.tablet.unit};`:""}
                }

                .${o} .digiblocks-cta-content {
                    ${r&&r.fontSize&&r.fontSize.tablet?`font-size: ${r.fontSize.tablet.value}${r.fontSize.tablet.unit};`:""}

                    ${r&&r.lineHeight&&r.lineHeight.tablet?`line-height: ${r.lineHeight.tablet.value}${r.lineHeight.tablet.unit};`:""}

                    ${r&&r.letterSpacing&&r.letterSpacing.tablet?`letter-spacing: ${r.letterSpacing.tablet.value}${r.letterSpacing.tablet.unit};`:""}
                }

                .${o} .digiblocks-cta-button {
                    ${p&&p.fontSize&&p.fontSize.tablet?`font-size: ${p.fontSize.tablet.value}${p.fontSize.tablet.unit};`:""}

					${v(Oe,"padding","tablet")}
					${v(De,"border-radius","tablet")}
                }
            }

			@media (max-width: 767px) {
                .${o} {
					${m!=="split"?`${v(se,"padding","mobile")}`:""}

					${v(Ne,"margin","mobile")}
					
					${T&&T.mobile?`min-height: ${T.mobile}px;`:""}
					
					${f&&f!=="none"&&I&&I.mobile?`${v(I,"border-width","mobile")}`:""}
					
					${v(Z,"border-radius","mobile")}
                }
                
                ${m==="split"?`.${o} .digiblocks-cta-split-container {
                        flex-direction: ${Ge?"column-reverse":"column"};
                    }
                    
                    .${o} .digiblocks-cta-image-container {
                        min-height: 200px;
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        ${v(se,"padding","mobile")}
                    }`:""}
                
                .${o} .digiblocks-cta-title {
                    ${n&&n.fontSize&&n.fontSize.mobile?`font-size: ${n.fontSize.mobile.value}${n.fontSize.mobile.unit};`:""}

                    ${n&&n.lineHeight&&n.lineHeight.mobile?`line-height: ${n.lineHeight.mobile.value}${n.lineHeight.mobile.unit};`:""}

                    ${n&&n.letterSpacing&&n.letterSpacing.mobile?`letter-spacing: ${n.letterSpacing.mobile.value}${n.letterSpacing.mobile.unit};`:""}
                }

                .${o} .digiblocks-cta-content {
                    ${r&&r.fontSize&&r.fontSize.mobile?`font-size: ${r.fontSize.mobile.value}${r.fontSize.mobile.unit};`:""}

                    ${r&&r.lineHeight&&r.lineHeight.mobile?`line-height: ${r.lineHeight.mobile.value}${r.lineHeight.mobile.unit};`:""}

                    ${r&&r.letterSpacing&&r.letterSpacing.mobile?`letter-spacing: ${r.letterSpacing.mobile.value}${r.letterSpacing.mobile.unit};`:""}
                }

                .${o} .digiblocks-cta-button {
                    ${p&&p.fontSize&&p.fontSize.mobile?`font-size: ${p.fontSize.mobile.value}${p.fontSize.mobile.unit};`:""}
                    
					${v(Oe,"padding","mobile")}
					${v(De,"border-radius","mobile")}
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
			${B.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${B.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${B.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},co=()=>{if(!Y||!z)return z;let e=z.indexOf(Y);if(e===-1)return z;let i=z.substring(0,e),a=z.substring(e,e+Y.length),s=z.substring(e+Y.length);return wp.element.createElement(wp.element.Fragment,null,i,wp.element.createElement("span",{className:"digiblocks-cta-highlight"},a),s)},Vt=(e,i)=>wp.element.createElement("div",{className:"digiblocks-button-editor",key:e.id,style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"5px"}},wp.element.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"}},wp.element.createElement("h3",{style:{margin:0}},t("Button","digiblocks")," ",i+1),C.length>1&&wp.element.createElement(ae,{isDestructive:!0,onClick:()=>Pt(e.id),icon:"trash"},t("Remove","digiblocks"))),wp.element.createElement(Se,{label:t("Button Text","digiblocks"),value:e.text||"",onChange:a=>H(e.id,"text",a),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Se,{label:t("Button URL","digiblocks"),value:e.url||"",onChange:a=>H(e.id,"url",a),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(F,{label:t("Open in new tab","digiblocks"),checked:e.openInNewTab||!1,onChange:a=>H(e.id,"openInNewTab",a),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:t("Add noopener noreferrer","digiblocks"),checked:!!e.rel,onChange:a=>H(e.id,"rel",a?"noopener noreferrer":""),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:t("Primary Button","digiblocks"),checked:e.isPrimary||!1,onChange:a=>H(e.id,"isPrimary",a),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:t("Full Width Button","digiblocks"),checked:e.isFullWidth||!1,onChange:a=>H(e.id,"isFullWidth",a),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:t("Custom Colors","digiblocks"),checked:e.customColors||!1,onChange:a=>H(e.id,"customColors",a),__nextHasNoMarginBottom:!0})),e.customColors&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(M,{title:t("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:e.backgroundColor,onChange:a=>H(e.id,"backgroundColor",a),label:t("Background Color","digiblocks")},{value:e.textColor,onChange:a=>H(e.id,"textColor",a),label:t("Text Color","digiblocks")},{value:e.hoverBackgroundColor,onChange:a=>H(e.id,"hoverBackgroundColor",a),label:t("Hover Background Color","digiblocks")},{value:e.hoverTextColor,onChange:a=>H(e.id,"hoverTextColor",a),label:t("Hover Text Color","digiblocks")}]}),wp.element.createElement(Se,{label:t("Border Radius","digiblocks"),type:"number",value:e.borderRadius||"",onChange:a=>H(e.id,"borderRadius",a),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),Wt=()=>{switch(at){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(S,{tab:"options",name:"general",title:t("General","digiblocks"),initialOpen:!0},wp.element.createElement(bt,{label:t("CTA Style","digiblocks"),id:"cta-style-selector",className:"digiblocks-cta-style-selector",__nextHasNoMarginBottom:!0},wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px"}},wt.map(e=>wp.element.createElement("div",{key:e.value},It(e))))),wp.element.createElement(F,{label:t("Horizontal Layout","digiblocks"),help:t("Display content and buttons side by side","digiblocks"),checked:A||!1,onChange:e=>l({horizontalLayout:e}),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:t("Heading Tag","digiblocks"),value:_e||"h2",options:St,onChange:e=>l({headingTag:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),m==="split"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Be,{label:t("Vertical Align","digiblocks"),value:Xe||"center",onChange:e=>l({verticalAlign:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},zt.map(e=>wp.element.createElement(ne,{key:e.value,value:e.value,label:e.label}))),wp.element.createElement(F,{label:t("Reverse Columns on Mobile","digiblocks"),help:t("Place the image above the text on mobile devices","digiblocks"),checked:Ge||!1,onChange:e=>l({reverseColumnsMobile:e}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ht,{label:t("Content Width","digiblocks")},wp.element.createElement(Pe,{value:ze,onChange:e=>l({contentWidth:e}),min:10,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(ht,{label:t("Min Height","digiblocks")},wp.element.createElement(Pe,{value:T&&T[ie]?T[ie]:0,onChange:e=>l({minHeight:{...T||{},[ie]:e}}),min:0,max:1e3,step:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(S,{tab:"options",name:"content",title:t("Content","digiblocks"),initialOpen:!1},wp.element.createElement(bt,{label:t("Title Highlight","digiblocks"),id:"title-highlight",help:t("Enter text within the title to highlight","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Se,{value:Y||"",onChange:e=>l({highlightText:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),Y&&wp.element.createElement(G,{label:t("Highlight Type","digiblocks"),value:q||"background",options:Dt,onChange:e=>l({highlightType:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Y&&q&&q!=="none"&&wp.element.createElement(M,{title:t("Highlight Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ce,onChange:e=>l({highlightColor:e}),label:t("Highlight Color","digiblocks")}]})),wp.element.createElement(S,{tab:"options",name:"buttons",title:t("Buttons","digiblocks"),initialOpen:!1},wp.element.createElement(Be,{label:t("Buttons Alignment","digiblocks"),value:ye||"left",onChange:e=>l({buttonsAlign:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Nt.map(e=>wp.element.createElement(ne,{key:e.value,value:e.value,label:e.label}))),wp.element.createElement(he,{label:t("Padding","digiblocks"),value:Oe,onChange:e=>l({buttonPadding:e})}),wp.element.createElement(he,{label:t("Border Radius","digiblocks"),value:De,onChange:e=>l({buttonBorderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}),wp.element.createElement("div",{className:"digiblocks-button-list"},C&&C.map((e,i)=>Vt(e,i))),wp.element.createElement(ae,{variant:"secondary",onClick:Mt,style:{marginTop:"10px",width:"100%"}},t("Add Button","digiblocks"))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(S,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(qt,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Rt},e=>e.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(M,{title:t("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:D,onChange:i=>l({titleColor:i}),label:t("Title Color","digiblocks")},{value:U,onChange:i=>l({textColor:i}),label:t("Text Color","digiblocks")}]}),wp.element.createElement(M,{title:t("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:y,onChange:i=>l({buttonColor:i}),label:t("Button Color","digiblocks")},{value:J,onChange:i=>l({buttonTextColor:i}),label:t("Button Text Color","digiblocks")}]}),f&&f!=="none"&&wp.element.createElement(M,{title:t("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:xe,onChange:i=>l({borderColor:i}),label:t("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(M,{title:t("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:We,onChange:i=>l({titleHoverColor:i}),label:t("Title Hover Color","digiblocks")},{value:Fe,onChange:i=>l({textHoverColor:i}),label:t("Text Hover Color","digiblocks")}]}),wp.element.createElement(M,{title:t("Button Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Le,onChange:i=>l({buttonHoverColor:i}),label:t("Button Hover Color","digiblocks")},{value:Ye,onChange:i=>l({buttonTextHoverColor:i}),label:t("Button Text Hover Color","digiblocks")}]}),P==="color"&&m!=="gradient"&&wp.element.createElement(M,{title:t("Background Hover Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ge,onChange:i=>l({backgroundHoverColor:i}),label:t("Background Hover Color","digiblocks")}]})))),wp.element.createElement(S,{tab:"style",name:"background",title:t("Background","digiblocks"),initialOpen:!1},m!=="gradient"&&wp.element.createElement(Be,{label:t("Background Type","digiblocks"),value:P||"color",onChange:e=>l({backgroundType:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Bt.map(e=>wp.element.createElement(ne,{key:e.value,value:e.value,label:e.label}))),P==="color"&&m!=="gradient"&&wp.element.createElement(M,{title:t("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:O,onChange:e=>l({backgroundColor:e}),label:t("Background Color","digiblocks")}]}),P==="gradient"||m==="gradient"?wp.element.createElement(M,{title:t("Gradient Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:O,onChange:e=>l({backgroundColor:e}),label:t("Start Color","digiblocks")},{value:ge,onChange:e=>l({backgroundHoverColor:e}),label:t("End Color","digiblocks")}]}):null,P==="image"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement(Ke,null,wp.element.createElement(qe,{onSelect:e=>{l({backgroundImage:{id:e.id,url:e.url,alt:e.alt||"",width:e.width,height:e.height}})},allowedTypes:["image"],value:k?.id,render:({open:e})=>wp.element.createElement(wp.element.Fragment,null,k?.url?wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement("img",{src:k.url,alt:k.alt,style:{display:"block",width:"100%",height:"auto",maxHeight:"150px",objectFit:"cover",marginBottom:"8px"}}),wp.element.createElement("div",{style:{display:"flex",gap:"8px"}},wp.element.createElement(ae,{variant:"secondary",onClick:e,style:{flexGrow:1}},t("Replace","digiblocks")),wp.element.createElement(ae,{variant:"secondary",onClick:()=>l({backgroundImage:null}),isDestructive:!0},t("Remove","digiblocks")))):wp.element.createElement("div",{style:{marginBottom:"8px"}},wp.element.createElement(ae,{variant:"secondary",onClick:e,icon:"format-image",style:{width:"100%"}},t("Select Image","digiblocks"))))}))),k?.url&&!m.includes("split")&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pe,{label:t("Overlay Opacity (%)","digiblocks"),value:ee||50,onChange:e=>l({backgroundOverlayOpacity:e}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(M,{title:t("Overlay Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:He,onChange:e=>l({backgroundOverlayColor:e}),label:t("Overlay Color","digiblocks")}]}),wp.element.createElement(G,{label:t("Background Position","digiblocks"),value:te||"center center",options:Tt,onChange:e=>l({backgroundPosition:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:t("Background Size","digiblocks"),value:oe||"cover",options:_t,onChange:e=>l({backgroundSize:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:t("Background Repeat","digiblocks"),value:ke||"no-repeat",options:Ht,onChange:e=>l({backgroundRepeat:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(S,{tab:"style",name:"typography",title:t("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(ot,{label:t("Title Typography","digiblocks"),value:n,onChange:e=>l({titleTypography:e})}),wp.element.createElement(ot,{label:t("Content Typography","digiblocks"),value:r,onChange:e=>l({contentTypography:e})}),wp.element.createElement(ot,{label:t("Button Typography","digiblocks"),value:p,onChange:e=>l({buttonTypography:e})})),wp.element.createElement(S,{tab:"style",name:"border",title:t("Border","digiblocks"),initialOpen:!1},wp.element.createElement(G,{label:t("Border Style","digiblocks"),value:f||"none",options:Ct,onChange:e=>l({borderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),f&&f!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(he,{label:t("Border Width","digiblocks"),value:I,onChange:e=>l({borderWidth:e})})),wp.element.createElement(he,{label:t("Border Radius","digiblocks"),value:Z,onChange:e=>l({borderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(S,{tab:"style",name:"shadow",title:t("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(At,{normalValue:L||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},hoverValue:R||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},onNormalChange:e=>l({boxShadow:e}),onHoverChange:e=>l({boxShadowHover:e})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(S,{tab:"advanced",name:"spacing",title:t("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(he,{label:t("Padding","digiblocks"),value:se,onChange:e=>l({padding:e})}),wp.element.createElement(he,{label:t("Margin","digiblocks"),value:Ne,onChange:e=>l({margin:e})})),wp.element.createElement(S,{tab:"advanced",name:"position",title:t("Position","digiblocks"),initialOpen:!1},wp.element.createElement(G,{label:t("Position","digiblocks"),value:$e,options:[{label:t("Default","digiblocks"),value:"default"},{label:t("Relative","digiblocks"),value:"relative"},{label:t("Absolute","digiblocks"),value:"absolute"},{label:t("Fixed","digiblocks"),value:"fixed"}],onChange:e=>l({position:e}),__nextHasNoMarginBottom:!0}),$e!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Be,{label:t("Horizontal Orientation","digiblocks"),value:it,isBlock:!0,onChange:e=>l({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(ne,{value:"left",label:t("Left","digiblocks")}),wp.element.createElement(ne,{value:"right",label:t("Right","digiblocks")})),wp.element.createElement(ft,{label:t("Offset","digiblocks"),value:j,onChange:e=>l({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultValues:{desktop:{value:0,unit:"px"},tablet:{value:0,unit:"px"},mobile:{value:0,unit:"px"}},min:0,max:rt(j?.[ie]?.unit||"px"),step:dt(j?.[ie]?.unit||"px")}),wp.element.createElement(Be,{label:t("Vertical Orientation","digiblocks"),value:lt,isBlock:!0,onChange:e=>l({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(ne,{value:"top",label:t("Top","digiblocks")}),wp.element.createElement(ne,{value:"bottom",label:t("Bottom","digiblocks")})),wp.element.createElement(ft,{label:t("Offset","digiblocks"),value:V,onChange:e=>l({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultValues:{desktop:{value:0,unit:"px"},tablet:{value:0,unit:"px"},mobile:{value:0,unit:"px"}},min:0,max:rt(V?.[ie]?.unit||"px"),step:dt(V?.[ie]?.unit||"px")})),wp.element.createElement(Pe,{label:t("Z-Index","digiblocks"),value:we,onChange:e=>l({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(S,{tab:"advanced",name:"transform",title:t("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(to,{normalValue:Ee,hoverValue:K,onNormalChange:e=>l({transform:e}),onHoverChange:e=>l({transformHover:e})})),wp.element.createElement(S,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(G,{label:t("Animation Effect","digiblocks"),value:_||"none",options:$t,onChange:e=>l({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),_&&_!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(G,{label:t("Animation Duration","digiblocks"),value:je,options:[{label:t("Slow","digiblocks"),value:"slow"},{label:t("Normal","digiblocks"),value:"normal"},{label:t("Fast","digiblocks"),value:"fast"}],onChange:e=>l({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Se,{label:t("Animation Delay (ms)","digiblocks"),value:Ve||0,onChange:e=>l({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),_&&_!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ae,{variant:"secondary",isSecondary:!0,onClick:yt,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(S,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(F,{label:t("Hide on Desktop","digiblocks"),checked:B.desktop,onChange:e=>l({visibility:{...B,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:t("Hide on Tablet","digiblocks"),checked:B.tablet,onChange:e=>l({visibility:{...B,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(F,{label:t("Hide on Mobile","digiblocks"),checked:B.mobile,onChange:e=>l({visibility:{...B,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(S,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:re||"",onChange:e=>l({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:de||"",onChange:e=>l({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ft=Et({className:`digiblocks-cta ${o} style-${m} ${_!=="none"?`animate-${_}`:""} ${de||""}`,id:re||null}),Ue=()=>!C||C.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},C.map(e=>{let i=["digiblocks-cta-button",e.isPrimary?"is-primary":"",e.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),a=e.customColors?{backgroundColor:e.isPrimary?e.backgroundColor||y:"transparent",color:e.isPrimary?e.textColor||J:e.backgroundColor||y,borderColor:e.backgroundColor||y,borderStyle:"solid",borderWidth:"2px",borderRadius:e.borderRadius?`${e.borderRadius}px`:void 0}:{};return wp.element.createElement("span",{key:e.id,className:i,style:e.customColors?a:{}},e.text||t("Click Here","digiblocks"))})),Lt=()=>{let e=_e||"h2";switch(m){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${A?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(pe,{tagName:e,className:"digiblocks-cta-title",value:z,onChange:i=>l({title:i}),placeholder:t("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(pe,{tagName:"p",className:"digiblocks-cta-content",value:ve,onChange:i=>l({content:i}),placeholder:t("Add content...","digiblocks")})),Ue())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"},wp.element.createElement(Ke,null,wp.element.createElement(qe,{onSelect:i=>{l({backgroundImage:{id:i.id,url:i.url,alt:i.alt||"",width:i.width,height:i.height}})},allowedTypes:["image"],value:k?.id,render:({open:i})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},k?.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:k.url,alt:k.alt||"",onClick:i}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:i},t("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-image-placeholder",onClick:i},t("Choose Image","digiblocks")))}))));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${A?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(pe,{tagName:e,className:"digiblocks-cta-title",value:z,onChange:i=>l({title:i}),placeholder:t("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(pe,{tagName:"p",className:"digiblocks-cta-content",value:ve,onChange:i=>l({content:i}),placeholder:t("Add content...","digiblocks")})),Ue()),!k?.url&&wp.element.createElement("div",{className:"digiblocks-image-placeholder"},wp.element.createElement(Ke,null,wp.element.createElement(qe,{onSelect:i=>{l({backgroundImage:{id:i.id,url:i.url,alt:i.alt||"",width:i.width,height:i.height}})},allowedTypes:["image"],value:k?.id,render:({open:i})=>wp.element.createElement(ae,{variant:"secondary",onClick:i,icon:"format-image"},t("Select Background Image","digiblocks"))}))));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${A?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(pe,{tagName:e,className:"digiblocks-cta-title",value:z,onChange:i=>l({title:i}),placeholder:t("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"],withoutInteractiveFormatting:!0}),wp.element.createElement(pe,{tagName:"p",className:"digiblocks-cta-content",value:ve,onChange:i=>l({content:i}),placeholder:t("Add content...","digiblocks"),withoutInteractiveFormatting:!0})),Ue())}};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ut,null,wp.element.createElement(eo,{tabs:Ot,activeTab:at,onSelect:xt},Wt())),wp.element.createElement(Jt,null,wp.element.createElement(Zt,{value:ce,onChange:e=>l({align:e})})),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:jt()}}),wp.element.createElement("div",{...Ft},Lt()))},mt=oo;var{useBlockProps:io,RichText:fe}=window.wp.blockEditor,lo=({attributes:me})=>{let{id:l,anchor:Te,customClasses:o,style:re,horizontalLayout:B,title:de,content:m,headingTag:A,backgroundImage:z,backgroundType:ve,align:_e,animation:D,animationDuration:U,animationDelay:y,buttons:J,highlightText:O,highlightType:P,highlightColor:k}=me,He=["digiblocks-cta",l,`style-${re}`,D!=="none"?`animate-${D} digi-animate-hidden`:"",o].filter(Boolean).join(" "),ee=io.save({className:He,id:Te||null,"data-style":re,"data-background-type":ve||"color","data-align":_e||"left","data-highlight-text":O||"","data-highlight-type":P||"none","data-highlight-color":k||"#ffde59"});D&&D!=="none"&&(ee["data-animation-duration"]=U||"normal",ee["data-animation-delay"]=y||0);let te=A||"h2",oe=()=>!J||J.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},J.map(f=>{let I=["digiblocks-cta-button",f.isPrimary?"is-primary":"",f.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),Z=f.openInNewTab?"_blank":void 0,xe=f.rel||void 0;return wp.element.createElement("a",{key:f.id,className:I,href:f.url||"#",target:Z,rel:xe,"data-button-id":f.id},f.text||"Click Here")})),ke=()=>{switch(re){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${B?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(fe.Content,{tagName:te,className:"digiblocks-cta-title",value:de}),wp.element.createElement(fe.Content,{tagName:"p",className:"digiblocks-cta-content",value:m})),oe())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"}));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${B?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(fe.Content,{tagName:te,className:"digiblocks-cta-title",value:de}),wp.element.createElement(fe.Content,{tagName:"p",className:"digiblocks-cta-content",value:m})),oe()));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${B?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(fe.Content,{tagName:te,className:"digiblocks-cta-title",value:de}),wp.element.createElement(fe.Content,{tagName:"p",className:"digiblocks-cta-content",value:m})),oe())}};return wp.element.createElement("div",{...ee},ke())},vt=lo;var{__:E}=window.wp.i18n,{registerBlockType:ao}=window.wp.blocks;ao("digiblocks/call-to-action",{apiVersion:2,title:digiBlocksData.blocks["call-to-action"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:me,path:l}=digiBlocksData.blocks["call-to-action"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${me}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:l}))}},description:digiBlocksData.blocks["call-to-action"].description,keywords:[E("cta","digiblocks"),E("call to action","digiblocks"),E("button","digiblocks"),E("conversion","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},style:{type:"string",default:"basic"},horizontalLayout:{type:"boolean",default:!1},title:{type:"string",default:E("Ready to Get Started?","digiblocks")},content:{type:"string",default:E("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.","digiblocks")},headingTag:{type:"string",default:"h2"},titleColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},buttonColor:{type:"string",default:"#1e73be"},buttonTextColor:{type:"string",default:"#ffffff"},backgroundColor:{type:"string",default:"#f5f5f5"},backgroundType:{type:"string",default:"color"},backgroundImage:{type:"object",default:null},backgroundOverlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},backgroundOverlayOpacity:{type:"number",default:50},backgroundPosition:{type:"string",default:"center center"},backgroundSize:{type:"string",default:"cover"},backgroundRepeat:{type:"string",default:"no-repeat"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},padding:{type:"object",default:{desktop:{top:40,right:30,bottom:40,left:30,unit:"px",isLinked:!1},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},align:{type:"string",default:"left"},titleTypography:{type:"object"},contentTypography:{type:"object"},buttonTypography:{type:"object"},contentWidth:{type:"number"},width:{type:"string",default:"100%"},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},boxShadow:{type:"object"},boxShadowHover:{type:"object"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px",isLinked:!1},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonsAlign:{type:"string",default:"left"},buttons:{type:"array",default:[]},titleHoverColor:{type:"string",default:""},textHoverColor:{type:"string",default:""},buttonHoverColor:{type:"string",default:""},buttonTextHoverColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"none"},verticalAlign:{type:"string",default:"center"},reverseColumnsMobile:{type:"boolean",default:!1},minHeight:{type:"object"},gradientDirection:{type:"number",default:135},ribbonColor:{type:"string",default:"#1e73be"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonPosition:{type:"string",default:"top-right"},ribbonText:{type:"string",default:"Special Offer"},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{style:"basic",title:E("Ready to Get Started?","digiblocks"),content:E("Join us today and experience the difference.","digiblocks"),buttons:[{id:"button-1",text:E("Sign Up Now","digiblocks"),url:"#",isPrimary:!0}],backgroundColor:"#f5f5f5"}},edit:mt,save:vt});})();
