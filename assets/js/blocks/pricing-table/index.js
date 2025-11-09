(()=>{var{__:t}=window.wp.i18n,{useBlockProps:zt,RichText:U,InspectorControls:Pt,PanelColorSettings:J,LinkControl:Dt}=window.wp.blockEditor,{TextControl:Ot,SelectControl:I,RangeControl:Ne,ToggleControl:ce,Button:F,Tooltip:K,__experimentalToggleGroupControl:He,__experimentalToggleGroupControlOption:G}=window.wp.components,{useState:de,useEffect:ye,useRef:Rt}=window.wp.element,{useBlockId:Lt,getDimensionCSS:A,animations:_e,animationPreview:it}=digi.utils,{tabIcons:ze}=digi.icons,{ResponsiveRangeControl:lt,DimensionControl:ee,TypographyControl:be,BoxShadowControl:Ft,CustomTabPanel:Vt,TabPanelBody:S,TransformControl:Mt}=digi.components,Wt=({attributes:te,setAttributes:l,clientId:pe})=>{let{id:i,anchor:ge,visibility:z,customClasses:oe,tables:d,columns:j,tableStyle:fe,align:X,animation:H,animationDuration:me,animationDelay:he,titleTypography:v,headingTypography:f,textTypography:r,contentTypography:m,buttonTypography:x,padding:Pe,margin:De,borderRadius:Oe,borderWidth:Re,borderStyle:ie,borderColor:Le,boxShadow:L,boxShadowHover:_,buttonRadius:Fe,buttonPadding:ke,buttonBorderStyle:le,buttonBorderWidth:Ve,buttonBorderColor:Me,buttonBorderHoverColor:Ce,showRibbon:ve,ribbonStyle:We,ribbonPosition:V,tableTextColor:q,tableBackgroundColor:Ie,headerBackgroundColor:je,buttonTextColor:$e,buttonBackgroundColor:Te,buttonTextHoverColor:Xe,buttonBackgroundHoverColor:Ye,ribbonTextColor:ne,ribbonBackgroundColor:ae,position:re,horizontalOrientation:Ue,horizontalOffset:P,verticalOrientation:Ge,verticalOffset:D,zIndex:se,transform:we,transformHover:M}=te;Lt(i,pe,l);let C=(e,o)=>{if(!e||typeof e!="object")return null;let n=b=>b===""||b===void 0||b===null?!0:typeof b=="object"&&b!==null?b.value===""||b.value===void 0||b.value===null:!1;return o==="mobile"?n(e.mobile)?n(e.tablet)?e.desktop:e.tablet:e.mobile:o==="tablet"?n(e.tablet)?e.desktop:e.tablet:e.desktop},[h,rt]=de(window.digi.responsiveState.activeDevice),[Yt,Ut]=de(!1),[Ee,st]=de(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(pe);if(e)return e}return"options"}),[g,Q]=de(0),[qe,ct]=de(!1);ye(()=>{let e=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ct(!0),!0):!1;if(!e()){let o=setTimeout(()=>{e()&&clearTimeout(o)},500);return()=>clearTimeout(o)}},[]),ye(()=>window.digi.responsiveState.subscribe(o=>{rt(o)}),[]),ye(()=>{(!d||d.length===0)&&l({tables:[{id:`table-1-${Date.now().toString(36)}`,title:t("Basic Plan","digiblocks"),price:"$19",period:"/month",description:t("Great for starters","digiblocks"),iconValue:null,features:[{text:t("1 Website","digiblocks"),enabled:!0},{text:t("5GB Storage","digiblocks"),enabled:!0},{text:t("10k Visits Monthly","digiblocks"),enabled:!0},{text:t("Premium Support","digiblocks"),enabled:!1}],buttonText:t("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:t("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""},{id:`table-2-${Date.now().toString(36)}`,title:t("Pro Plan","digiblocks"),price:"$49",period:"/month",description:t("For growing businesses","digiblocks"),iconValue:null,features:[{text:t("5 Websites","digiblocks"),enabled:!0},{text:t("20GB Storage","digiblocks"),enabled:!0},{text:t("50k Visits Monthly","digiblocks"),enabled:!0},{text:t("Premium Support","digiblocks"),enabled:!0}],buttonText:t("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!0,ribbonText:t("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}],columns:2,tableStyle:"style1",align:"center",showRibbon:!0,ribbonStyle:"corner",ribbonPosition:"right",titleTypography:v||{fontSize:{desktop:{value:24,unit:"px"},tablet:{value:20,unit:"px"},mobile:{value:18,unit:"px"}},lineHeight:{desktop:{value:1.4,unit:"em"},tablet:{value:1.3,unit:"em"},mobile:{value:1.2,unit:"em"}},fontWeight:"",fontFamily:""},headingTypography:f||{fontSize:{desktop:{value:36,unit:"px"},tablet:{value:30,unit:"px"},mobile:{value:26,unit:"px"}},lineHeight:{desktop:{value:1.2,unit:"em"},tablet:{value:1.2,unit:"em"},mobile:{value:1.2,unit:"em"}},fontWeight:"bold",fontFamily:""},textTypography:r||{fontSize:{desktop:{value:16,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:14,unit:"px"}},lineHeight:{desktop:{value:1.6,unit:"em"},tablet:{value:1.5,unit:"em"},mobile:{value:1.4,unit:"em"}},fontWeight:"",fontFamily:""},contentTypography:m||{fontSize:{desktop:{value:16,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:14,unit:"px"}},lineHeight:{desktop:{value:1.6,unit:"em"},tablet:{value:1.5,unit:"em"},mobile:{value:1.4,unit:"em"}},fontWeight:"",fontFamily:""},buttonTypography:x||{fontSize:{desktop:{value:16,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:14,unit:"px"}},lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:1.4,unit:"em"},mobile:{value:1.3,unit:"em"}},fontWeight:"",fontFamily:""}})},[d,l]);let Qe=Rt(null);ye(()=>{if(H&&H!=="none"){let e=setTimeout(()=>{it(i,H,_e,Qe,me,he)},100);return()=>clearTimeout(e)}},[H]);let dt=()=>{it(i,H,_e,Qe,me,he)},bt=[{label:t("Style 1","digiblocks"),value:"style1"},{label:t("Style 2","digiblocks"),value:"style2"},{label:t("Style 3","digiblocks"),value:"style3"},{label:t("Style 4","digiblocks"),value:"style4"},{label:t("Minimal","digiblocks"),value:"minimal"}],ut=[{label:t("Corner","digiblocks"),value:"corner"},{label:t("Banner","digiblocks"),value:"banner"},{label:t("Side","digiblocks"),value:"side"},{label:t("Flag","digiblocks"),value:"flag"}],pt=[{label:t("Right","digiblocks"),value:"right"},{label:t("Left","digiblocks"),value:"left"}],Ze=[{label:t("None","digiblocks"),value:"none"},{label:t("Solid","digiblocks"),value:"solid"},{label:t("Dotted","digiblocks"),value:"dotted"},{label:t("Dashed","digiblocks"),value:"dashed"},{label:t("Double","digiblocks"),value:"double"}],gt=[{label:t("None","digiblocks"),value:"none"},...Object.keys(_e).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),value:e}))],ft=[{name:"options",title:t("Options","digiblocks"),icon:ze.optionsIcon},{name:"style",title:t("Style","digiblocks"),icon:ze.styleIcon},{name:"advanced",title:t("Advanced","digiblocks"),icon:ze.advancedIcon}],mt=()=>{let e=[...d,{id:`table-${d.length+1}-${Date.now().toString(36)}`,title:t("New Plan","digiblocks"),price:"$29",period:"/month",description:t("Add your description","digiblocks"),iconValue:null,features:[{text:t("Feature 1","digiblocks"),enabled:!0},{text:t("Feature 2","digiblocks"),enabled:!0},{text:t("Feature 3","digiblocks"),enabled:!1}],buttonText:t("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:t("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}];l({tables:e}),Q(e.length-1)},ht=e=>{if(d.length<=1)return;let o=[...d];o.splice(e,1),l({tables:o}),g>=o.length&&Q(o.length-1)},kt=e=>{let n={...d[e],id:`table-${d.length+1}-${Date.now().toString(36)}`},b=[...d];b.splice(e+1,0,n),l({tables:b}),Q(e+1)},vt=e=>{if(e===0)return;let o=[...d],n=o[e];o[e]=o[e-1],o[e-1]=n,l({tables:o}),Q(e-1)},xt=e=>{if(e===d.length-1)return;let o=[...d],n=o[e];o[e]=o[e+1],o[e+1]=n,l({tables:o}),Q(e+1)},O=(e,o,n)=>{let b=[...d];b[e]={...b[e],[o]:n},l({tables:b})},yt=e=>{let o=[...d];o[e].features.push({text:t("New Feature","digiblocks"),enabled:!0}),l({tables:o})},Ct=(e,o)=>{if(d[e].features.length<=1)return;let n=[...d];n[e].features.splice(o,1),l({tables:n})},$t=(e,o,n,b)=>{let y=[...d];y[e].features[o]={...y[e].features[o],[n]:b},l({tables:y})},Tt=(e,o)=>{let n=[...d];n[e].features[o].enabled=!n[e].features[o].enabled,l({tables:n})},wt=e=>{l({tableStyle:e});let o={};switch(e){case"style1":o={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#f8f9fa",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#4a6cf7",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style2":o={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#4a6cf7",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff9800",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"}};break;case"style3":o={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff5252",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:3,right:3,bottom:3,left:3,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#4a6cf7",borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style4":o={tableBackgroundColor:"#f8f9fa",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#333333",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#000000",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#333333",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.08)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}};break;case"minimal":o={tableBackgroundColor:"transparent",headerBackgroundColor:"transparent",tableTextColor:"#333333",buttonBackgroundColor:"transparent",buttonTextColor:"#4a6cf7",buttonBackgroundHoverColor:"transparent",buttonTextHoverColor:"#3151e1",ribbonBackgroundColor:"#f8f9fa",ribbonTextColor:"#333333",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:"",right:"",bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;default:o={}}l(o)},St=qe?window.digi.components.FontAwesomeControl:null,Je=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"vw":case"vh":return 100;default:return 2e3}},Ke=e=>{switch(e){case"%":case"vw":case"vh":return 1;case"em":case"rem":return .1;default:return 1}},Ae=(e,o)=>{let n={left:"0%",center:"50%",right:"100%"},b={top:"0%",center:"50%",bottom:"100%"},y=n[e.xAnchor?.[o]||"center"],W=b[e.yAnchor?.[o]||"center"];return`${y} ${W}`},et=(e,o)=>{if(!e)return"";let n=[],b=u=>{if(!u)return"";let p=u[o],R=k=>k===""||k===void 0||k===null?!0:typeof k=="object"&&k!==null?k.value===""||k.value===void 0||k.value===null:!1;return o==="tablet"&&R(p)&&(p=u.desktop),o==="mobile"&&R(p)&&(p=u.tablet,R(p)&&(p=u.desktop)),typeof p=="object"&&p!==null?p.value!==void 0?p.value:"":p},y=b(e.rotate);if(y!==""&&y!==void 0&&y!==null){if(e.rotate3d){let u=b(e.perspective);u!==""&&u!==void 0&&u!==null&&n.push(`perspective(${u}px)`)}n.push(`rotate(${y}deg)`)}if(e.rotate3d){let u=b(e.rotateX);u!==""&&u!==void 0&&u!==null&&n.push(`rotateX(${u}deg)`);let p=b(e.rotateY);p!==""&&p!==void 0&&p!==null&&n.push(`rotateY(${p}deg)`)}let W=e.offsetX?.[o]?.value,$=e.offsetY?.[o]?.value,B=W!==""&&W!==void 0&&W!==null,N=$!==""&&$!==void 0&&$!==null;if(B||N){let u=B?`${W}${e.offsetX[o].unit||"px"}`:"0",p=N?`${$}${e.offsetY[o].unit||"px"}`:"0";n.push(`translate(${u}, ${p})`)}if(e.keepProportions){let u=b(e.scale);u!==""&&u!==void 0&&u!==null&&u!=1&&n.push(`scale(${u})`)}else{let u=b(e.scaleX),p=b(e.scaleY),R=u!==""&&u!==void 0&&u!==null?u:1,k=p!==""&&p!==void 0&&p!==null?p:1;(R!=1||k!=1)&&n.push(`scale(${R}, ${k})`)}let T=b(e.skewX);T!==""&&T!==void 0&&T!==null&&n.push(`skewX(${T}deg)`);let w=b(e.skewY);return w!==""&&w!==void 0&&w!==null&&n.push(`skewY(${w}deg)`),e.flipHorizontal&&n.push("scaleX(-1)"),e.flipVertical&&n.push("scaleY(-1)"),n.length>0?n.join(" "):""},Bt=()=>{let e=h,o="";ie&&ie!=="none"?o=`
				border-style: ${ie};
				border-color: ${Le||"#e6e6e6"};
				${A(Re,"border-width",e)}
				${A(Oe,"border-radius",e)}
			`:o="border: none;";let n="box-shadow: none;";L&&L.enable&&(n=`box-shadow: ${L.position==="inset"?"inset ":""}${L.horizontal}px ${L.vertical}px ${L.blur}px ${L.spread}px ${L.color};`);let b="";_&&_.enable&&(b=`box-shadow: ${_.position==="inset"?"inset ":""}${_.horizontal}px ${_.vertical}px ${_.blur}px ${_.spread}px ${_.color};`);let y=`${A(Pe,"padding",e)}`,W=`${A(De,"margin",e)}`,$="";if(v){v.fontFamily&&($+=`font-family: ${v.fontFamily};`);let a=C(v.fontSize,h);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&($+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),v.fontWeight&&($+=`font-weight: ${v.fontWeight};`),v.fontStyle&&($+=`font-style: ${v.fontStyle};`),v.textTransform&&($+=`text-transform: ${v.textTransform};`),v.textDecoration&&($+=`text-decoration: ${v.textDecoration};`);let c=C(v.lineHeight,h);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&($+=`line-height: ${c.value}${c.unit!==null?c.unit:""};`);let s=C(v.letterSpacing,h);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&($+=`letter-spacing: ${s.value}${s.unit!==null?s.unit:""};`)}let B="";if(f){f.fontFamily&&(B+=`font-family: ${f.fontFamily};`);let a=C(f.fontSize,h);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&(B+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),f.fontWeight?B+=`font-weight: ${f.fontWeight};`:B+="font-weight: bold;",f.fontStyle&&(B+=`font-style: ${f.fontStyle};`),f.textTransform&&(B+=`text-transform: ${f.textTransform};`),f.textDecoration&&(B+=`text-decoration: ${f.textDecoration};`);let c=C(f.lineHeight,h);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(B+=`line-height: ${c.value}${c.unit!==null?c.unit:""};`);let s=C(f.letterSpacing,h);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(B+=`letter-spacing: ${s.value}${s.unit!==null?s.unit:""};`)}let N="";if(r){r.fontFamily&&(N+=`font-family: ${r.fontFamily};`);let a=C(r.fontSize,h);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&(N+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),r.fontWeight&&(N+=`font-weight: ${r.fontWeight};`),r.fontStyle&&(N+=`font-style: ${r.fontStyle};`),r.textTransform&&(N+=`text-transform: ${r.textTransform};`),r.textDecoration&&(N+=`text-decoration: ${r.textDecoration};`);let c=C(r.lineHeight,h);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(N+=`line-height: ${c.value}${c.unit!==null?c.unit:""};`);let s=C(r.letterSpacing,h);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(N+=`letter-spacing: ${s.value}${s.unit!==null?s.unit:""};`)}let T="";if(m){m.fontFamily&&(T+=`font-family: ${m.fontFamily};`);let a=C(m.fontSize,h);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&(T+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),m.fontWeight&&(T+=`font-weight: ${m.fontWeight};`),m.fontStyle&&(T+=`font-style: ${m.fontStyle};`),m.textTransform&&(T+=`text-transform: ${m.textTransform};`),m.textDecoration&&(T+=`text-decoration: ${m.textDecoration};`);let c=C(m.lineHeight,h);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(T+=`line-height: ${c.value}${c.unit!==null?c.unit:""};`);let s=C(m.letterSpacing,h);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(T+=`letter-spacing: ${s.value}${s.unit!==null?s.unit:""};`)}let w="";if(x){x.fontFamily&&(w+=`font-family: ${x.fontFamily};`);let a=C(x.fontSize,h);a&&a.value!==""&&a.value!==null&&a.value!==void 0&&(w+=`font-size: ${a.value}${a.unit!==null?a.unit:""};`),x.fontWeight&&(w+=`font-weight: ${x.fontWeight};`),x.fontStyle&&(w+=`font-style: ${x.fontStyle};`),x.textTransform&&(w+=`text-transform: ${x.textTransform};`),x.textDecoration&&(w+=`text-decoration: ${x.textDecoration};`);let c=C(x.lineHeight,h);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(w+=`line-height: ${c.value}${c.unit!==null?c.unit:""};`);let s=C(x.letterSpacing,h);s&&s.value!==""&&s.value!==null&&s.value!==void 0&&(w+=`letter-spacing: ${s.value}${s.unit!==null?s.unit:""};`)}let u=Fe||4,p=ke&&ke[e]?`${A(ke,"padding",e)}`:"padding: 10px 20px",R="";le&&le!=="none"?R=`
				border-style: ${le};
				border-color: ${Me||Te||"#4a6cf7"};
				${A(Ve,"border-width",e)}
			`:R="border: none;";let k="";switch(fe){case"style1":k=`
					.${i} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${i} .digiblocks-pricing-table-header {
						display: flex;
						flex-direction: column;
						gap: 10px;
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${i} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${i} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
				`;break;case"style2":k=`
					.${i} .digiblocks-pricing-table {
						text-align: center;
						overflow: hidden;
					}
					
					.${i} .digiblocks-pricing-table-header {
						padding: 30px 20px;
						margin: -1px -1px 0 -1px;
						color: #ffffff;
					}
					
					.${i} .digiblocks-pricing-table-title {
						color: #ffffff !important;
					}
					
					.${i} .digiblocks-pricing-table-price {
						color: #ffffff !important;
					}
					
					.${i} .digiblocks-pricing-table-description {
						color: rgba(255, 255, 255, 0.8) !important;
					}
					
					.${i} .digiblocks-pricing-table-features {
						padding: 30px 20px;
					}
					
					.${i} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${i} .digiblocks-pricing-table-highlighted {
						transform: scale(1.05);
						z-index: 1;
					}
				`;break;case"style3":k=`
					.${i} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${i} .digiblocks-pricing-table-header {
						padding: 30px 20px;
					}
					
					.${i} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${i} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${i} .digiblocks-pricing-table-highlighted {
						border-top-width: 10px !important;
					}
				`;break;case"style4":k=`
					.${i} .digiblocks-pricing-table {
						text-align: center;
						border-radius: 16px;
					}
					
					.${i} .digiblocks-pricing-table-header {
						padding: 40px 20px 20px;
						border-radius: 16px 16px 0 0;
					}
					
					.${i} .digiblocks-pricing-table-price {
						font-size: 3rem;
						line-height: 1;
					}
					
					.${i} .digiblocks-pricing-table-features {
						padding: 20px 30px;
					}
					
					.${i} .digiblocks-pricing-table-footer {
						padding: 20px 20px 40px;
					}
					
					.${i} .digiblocks-pricing-table-button {
						padding: 15px 35px;
						border-radius: 50px;
					}
				`;break;case"minimal":k=`
					.${i} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${i} .digiblocks-pricing-table-header {
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${i} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${i} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
					
					.${i} .digiblocks-pricing-table-button {
						background: transparent;
						border: 1px solid #4a6cf7;
						padding: 10px 25px;
					}
					
					.${i} .digiblocks-pricing-table-button:hover {
						background: #f8f9fa;
					}
				`;break;default:k=""}let Z="";if(ve)switch(We){case"corner":Z=`
						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 0;
							${V==="right"?"right":"left"}: 0;
							background: ${ae||"#4a6cf7"};
							color: ${ne||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							text-transform: uppercase;
							z-index: 2;
							${V==="right"?"border-radius: 0 0 0 4px;":"border-radius: 0 0 4px 0;"}
						}
					`;break;case"banner":Z=`
						.${i} .digiblocks-pricing-table-highlighted {
							overflow: hidden;
						}

						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 7px;
							${V==="right"?"right":"left"}: -24px;
							background: ${ae||"#4a6cf7"};
							color: ${ne||"#ffffff"};
							padding: 5px 30px;
							font-size: 12px;
							font-weight: bold;
							transform: ${V==="right"?"rotate(45deg)":"rotate(-45deg)"};
							z-index: 2;
							transform-origin: center center;
						}
					`;break;case"side":Z=`
						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 30px;
							${V==="right"?"right":"left"}: 0;
							background: ${ae||"#4a6cf7"};
							color: ${ne||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							${V==="right"?"border-radius: 4px 0 0 4px;":"border-radius: 0 4px 4px 0;"}
							z-index: 2;
						}
					`;break;case"flag":Z=`
						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 15px;
							${V==="right"?"right":"left"}: 15px;
							background: ${ae||"#4a6cf7"};
							color: ${ne||"#ffffff"};
							padding: 8px 15px;
							font-size: 12px;
							font-weight: bold;
							border-radius: 50px;
							z-index: 2;
						}
					`;break;default:Z=""}let Y="";if(re&&re!=="default"){Y+=`position: ${re} !important;`;let a=P?.[e]?.value,c=P?.[e]?.unit||"px";(a===""||a===void 0)&&(e==="tablet"?a=P?.desktop?.value:e==="mobile"&&(a=P?.tablet?.value!==""&&P?.tablet?.value!==void 0?P?.tablet?.value:P?.desktop?.value)),a!==""&&a!==void 0&&(Ue==="left"?Y+=`left: ${a}${c};`:Y+=`right: ${a}${c};`);let s=D?.[e]?.value,ot=D?.[e]?.unit||"px";(s===""||s===void 0)&&(e==="tablet"?s=D?.desktop?.value:e==="mobile"&&(s=D?.tablet?.value!==""&&D?.tablet?.value!==void 0?D?.tablet?.value:D?.desktop?.value)),s!==""&&s!==void 0&&(Ge==="top"?Y+=`top: ${s}${ot};`:Y+=`bottom: ${s}${ot};`)}se!==""&&se!==void 0&&se!==null&&(Y+=`z-index: ${se};`);let xe="",tt=et(we,e);tt&&(xe+=`transform: ${tt};`,xe+=`transform-origin: ${Ae(we,e)};`);let Se=et(M,e);if(Se&&M&&M.transitionDuration!==""&&M.transitionDuration!==void 0&&M.transitionDuration!==null){let a=M.transitionDuration;xe+=`transition: transform ${a}ms ease;`}let Be="";return Se&&(Be+=`transform: ${Se};`,Be+=`transform-origin: ${Ae(M,e)};`),`
			/* Pricing Table Block - ${i} */
			.${i} {
				${W}
				width: 100%;
				position: relative;
                ${Y}
				${xe}
			}

            .${i}:hover {
                ${b}
				${Be}
            }
			
			/* Grid container for tables */
			.${i} .digiblocks-pricing-tables-container {
				display: grid;
				gap: 30px;
				grid-template-columns: repeat(${j}, 1fr);
			}
			
			/* Individual pricing table */
			.${i} .digiblocks-pricing-table {
				display: flex;
				flex-direction: column;
				background-color: ${Ie||"#ffffff"};
				color: ${q||"#333333"};
				${o}
				${n}
				${y}
				position: relative;
				transition: all 0.3s ease;
			}
			
			/* Highlighted table */
			.${i} .digiblocks-pricing-table-highlighted {
				z-index: 1;
			}
			
			/* Hover effect */
			.${i} .digiblocks-pricing-table:hover {
				${_&&_.enable?b:""}
			}
			
			/* Header section */
			.${i} .digiblocks-pricing-table-header {
				background-color: ${je||"transparent"};
				text-align: center;
			}
			
			/* Icon */
			.${i} .digiblocks-pricing-table-icon {
				display: inline-flex;
				justify-content: center;
			}

			.${i} .digiblocks-pricing-table-icon span {
				display: flex;
			}
			
			.${i} .digiblocks-pricing-table-icon svg {
				width: 50px;
				height: 50px;
			}
			
			${d.map((a,c)=>`
				/* Custom colors for table ${c+1} */
				.${i} .digiblocks-pricing-table:nth-child(${c+1}) .digiblocks-pricing-table-icon svg {
					fill: ${a.iconColor||q||"#333333"};
					transition: fill 0.3s ease;
				}
				
				.${i} .digiblocks-pricing-table:nth-child(${c+1}):hover .digiblocks-pricing-table-icon svg {
					fill: ${a.iconHoverColor||a.iconColor||q||"#333333"};
				}
			`).join("")}
			
			/* Title */
			.${i} .digiblocks-pricing-table-title {
				margin: 0;
				color: ${q||"#333333"};
				${$}
			}
			
			/* Price section */
			.${i} .digiblocks-pricing-table-price {
				color: ${q||"#333333"};
				${B}
			}
			
			.${i} .digiblocks-pricing-table-period {
				${N}
				opacity: 0.8;
			}
			
			/* Description */
			.${i} .digiblocks-pricing-table-description {
				${N}
			}
			
			/* Features section */
			.${i} .digiblocks-pricing-table-feature-wrapper {
				display: flex;
				align-items: center;
				justify-content: ${X==="center"?"center":X==="right"?"flex-end":"space-between"};
				gap: 10px;
			}

			.${i} .digiblocks-pricing-table-feature-item {
				display: flex;
				align-items: center;
				justify-content: ${X==="center"?"center":X==="right"?"flex-end":"flex-start"};
				gap: 10px;
				${T}
			}
			
			.${i} .digiblocks-pricing-table-feature-icon {
				display: inline-flex;
				align-items: center;
			}
			
			.${i} .digiblocks-pricing-table-feature-icon span {
				display: flex;
			}
			
			.${i} .digiblocks-pricing-table-feature-check {
				color: #28a745;
			}
			
			.${i} .digiblocks-pricing-table-feature-cross {
				color: #dc3545;
			}
			
			.${i} .digiblocks-pricing-table-feature-text {
				flex: 1;
			}
			
			.${i} .digiblocks-pricing-table-feature-disabled {
				opacity: 0.5;
				text-decoration: line-through;
			}
			
			/* Footer section */
			.${i} .digiblocks-pricing-table-footer {
				margin-top: auto;
				text-align: center;
			}
			
			/* Button */
			.${i} .digiblocks-pricing-table-button {
				background-color: ${Te||"#4a6cf7"};
				color: ${$e||"#ffffff"};
				${p}
				border-radius: ${u}px;
				cursor: pointer;
				display: inline-block;
				text-decoration: none;
				transition: all 0.3s ease;
				${R}
				${w}
			}
			
			.${i} .digiblocks-pricing-table-button:hover {
				background-color: ${Ye||"#3151e1"};
				color: ${Xe||"#ffffff"};
				${Ce?`border-color: ${Ce};`:""}
			}
			
			/* Ribbon */
			${Z}
			
			/* Table-specific styles */
			${k}
			
			/* Editor controls */
			.${i} .digiblocks-pricing-table-controls {
				margin-top: 20px;
				margin-bottom: 20px;
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				justify-content: center;
			}
			
			.${i} .digiblocks-table-item-controls {
				position: absolute;
				top: 5px;
				left: 5px;
				display: flex;
				gap: 5px;
				z-index: 10;
				background: rgba(255, 255, 255, 0.9);
				border-radius: 4px;
				padding: 3px;
			}
			
			.${i} .digiblocks-feature-item-controls {
				display: flex;
				gap: 5px;
			}
			
			/* Responsive styles */
			@media (max-width: 991px) {
				.${i} .digiblocks-pricing-tables-container {
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				}
				
				.${i} .digiblocks-pricing-table-highlighted {
					transform: none !important;
				}
			}
			
			@media (max-width: 767px) {
				.${i} .digiblocks-pricing-tables-container {
					grid-template-columns: 1fr;
				}
			}

			/* Visibility Controls */
			${z.desktop?`
				@media (min-width: 992px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${z.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${z.mobile?`
				@media (max-width: 767px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`},Nt=(e,o)=>wp.element.createElement("div",{key:e.id,className:`digiblocks-pricing-table ${g===o?"digiblocks-table-active":""} ${e.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,onClick:()=>Q(o),style:e.backgroundColor?{backgroundColor:e.backgroundColor}:null},wp.element.createElement("div",{className:"digiblocks-table-item-controls"},wp.element.createElement(K,{text:t("Move Left","digiblocks")},wp.element.createElement(F,{icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})),isSmall:!0,onClick:n=>{n.stopPropagation(),vt(o)},disabled:o===0})),wp.element.createElement(K,{text:t("Move Right","digiblocks")},wp.element.createElement(F,{icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})),isSmall:!0,onClick:n=>{n.stopPropagation(),xt(o)},disabled:o===d.length-1})),wp.element.createElement(K,{text:t("Duplicate","digiblocks")},wp.element.createElement(F,{icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"})),isSmall:!0,onClick:n=>{n.stopPropagation(),kt(o)}})),wp.element.createElement(K,{text:t("Remove","digiblocks")},wp.element.createElement(F,{icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"})),isSmall:!0,onClick:n=>{n.stopPropagation(),ht(o)},disabled:d.length<=1}))),ve&&e.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(U,{tagName:"span",value:e.ribbonText,onChange:n=>O(o,"ribbonText",n),placeholder:t("Popular","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:e.headerBackgroundColor?{backgroundColor:e.headerBackgroundColor}:null},e.iconValue&&e.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.iconValue.svg}})),wp.element.createElement(U,{tagName:"h3",className:"digiblocks-pricing-table-title",value:e.title,onChange:n=>O(o,"title",n),placeholder:t("Plan Title","digiblocks"),style:e.textColor?{color:e.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:e.textColor?{color:e.textColor}:null},wp.element.createElement(U,{tagName:"span",className:"digiblocks-pricing-table-amount",value:e.price,onChange:n=>O(o,"price",n),placeholder:t("$0","digiblocks")}),wp.element.createElement(U,{tagName:"span",className:"digiblocks-pricing-table-period",value:e.period,onChange:n=>O(o,"period",n),placeholder:t("/month","digiblocks")})),wp.element.createElement(U,{tagName:"div",className:"digiblocks-pricing-table-description",value:e.description,onChange:n=>O(o,"description",n),placeholder:t("Short description","digiblocks"),style:e.textColor?{color:e.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},e.features.map((n,b)=>wp.element.createElement("div",{key:`feature-${b}`,className:"digiblocks-pricing-table-feature-wrapper"},wp.element.createElement("div",{className:`digiblocks-pricing-table-feature-item ${n.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},n.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(U,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:n.text,onChange:y=>$t(o,b,"text",y),placeholder:t("Feature","digiblocks"),style:e.textColor?{color:e.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-feature-item-controls"},wp.element.createElement(K,{text:n.enabled?t("Disable","digiblocks"):t("Enable","digiblocks")},wp.element.createElement(F,{icon:n.enabled?"visibility":"hidden",isSmall:!0,onClick:y=>{y.stopPropagation(),Tt(o,b)}})),wp.element.createElement(K,{text:t("Remove","digiblocks")},wp.element.createElement(F,{icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"})),isSmall:!0,onClick:y=>{y.stopPropagation(),Ct(o,b)},disabled:e.features.length<=1}))))),wp.element.createElement(F,{variant:"secondary",isSmall:!0,onClick:n=>{n.stopPropagation(),yt(o)},style:{width:"100%",marginTop:"10px"}},t("Add Feature","digiblocks"))),e.buttonUrl&&e.buttonUrl.trim()!==""&&wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("div",{className:"digiblocks-pricing-table-button",style:e.buttonBackgroundColor?{backgroundColor:e.buttonBackgroundColor,color:e.buttonTextColor||$e||"#ffffff"}:null},wp.element.createElement(U,{tagName:"span",value:e.buttonText,onChange:n=>O(o,"buttonText",n),placeholder:t("Get Started","digiblocks")})))),Ht=()=>{switch(Ee){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(S,{tab:"options",name:"layout",title:t("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Ne,{label:t("Columns","digiblocks"),value:j,onChange:e=>l({columns:e}),min:1,max:4,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(I,{label:t("Table Style","digiblocks"),value:fe,options:bt,onChange:e=>wt(e),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(He,{label:t("Alignment","digiblocks"),value:X,onChange:e=>l({align:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(G,{value:"left",label:t("Left","digiblocks")}),wp.element.createElement(G,{value:"center",label:t("Center","digiblocks")}),wp.element.createElement(G,{value:"right",label:t("Right","digiblocks")}))),wp.element.createElement(S,{tab:"options",name:"ribbon",title:t("Ribbon","digiblocks"),initialOpen:!1},wp.element.createElement(ce,{label:t("Show Ribbon","digiblocks"),checked:ve,onChange:e=>l({showRibbon:e}),help:t("Display a ribbon on highlighted tables.","digiblocks"),__nextHasNoMarginBottom:!0}),ve&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{label:t("Ribbon Style","digiblocks"),value:We,options:ut,onChange:e=>l({ribbonStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(I,{label:t("Ribbon Position","digiblocks"),value:V,options:pt,onChange:e=>l({ribbonPosition:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(J,{title:t("Ribbon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ae,onChange:e=>l({ribbonBackgroundColor:e}),label:t("Background Color","digiblocks")},{value:ne,onChange:e=>l({ribbonTextColor:e}),label:t("Text Color","digiblocks")}]}))),wp.element.createElement(S,{tab:"options",name:"table-config",title:t("Table Settings","digiblocks"),initialOpen:!1},d[g]&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,t("Editing Table","digiblocks")," #",g+1),wp.element.createElement(ce,{label:t("Highlight This Table","digiblocks"),checked:d[g].isHighlighted,onChange:e=>O(g,"isHighlighted",e),help:t("Apply special styling to highlight this table.","digiblocks"),__nextHasNoMarginBottom:!0}),qe?wp.element.createElement(St,{label:t("Select Icon","digiblocks"),value:d[g].iconValue,onChange:e=>O(g,"iconValue",e)}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,t("Loading icon selector...","digiblocks"))),d[g]&&d[g].iconValue&&wp.element.createElement(J,{title:t("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:d[g].iconColor,onChange:e=>O(g,"iconColor",e),label:t("Icon Color","digiblocks")},{value:d[g].iconHoverColor,onChange:e=>O(g,"iconHoverColor",e),label:t("Icon Hover Color","digiblocks")}]}),wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"10px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,t("Button Link","digiblocks"))),wp.element.createElement(Dt,{value:d[g].buttonUrl?{url:d[g].buttonUrl,opensInNewTab:!!d[g].buttonOpenInNewTab,rel:d[g].buttonRel||""}:void 0,settings:[{id:"opensInNewTab",title:t("Open in new tab","digiblocks")},{id:"rel",title:t("Add noopener noreferrer","digiblocks")}],onChange:e=>{if(e&&e.url){let o=[...d];o[g]={...o[g],buttonUrl:e.url,buttonOpenInNewTab:!!e.opensInNewTab,buttonRel:e.rel||""},l({tables:o})}},onRemove:()=>{let e=[...d];e[g]={...e[g],buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:""},l({tables:e})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!d[g].buttonUrl})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(S,{tab:"style",name:"colors",title:t("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(J,{title:t("Table Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ie,onChange:e=>l({tableBackgroundColor:e}),label:t("Background Color","digiblocks")},{value:je,onChange:e=>l({headerBackgroundColor:e}),label:t("Header Background","digiblocks")},{value:q,onChange:e=>l({tableTextColor:e}),label:t("Text Color","digiblocks")}]}),wp.element.createElement(J,{title:t("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Te,onChange:e=>l({buttonBackgroundColor:e}),label:t("Background Color","digiblocks")},{value:$e,onChange:e=>l({buttonTextColor:e}),label:t("Text Color","digiblocks")},{value:Ye,onChange:e=>l({buttonBackgroundHoverColor:e}),label:t("Hover Background","digiblocks")},{value:Xe,onChange:e=>l({buttonTextHoverColor:e}),label:t("Hover Text","digiblocks")}]})),wp.element.createElement(S,{tab:"style",name:"typography",title:t("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(be,{label:t("Title Typography","digiblocks"),value:v,onChange:e=>l({titleTypography:e})}),wp.element.createElement(be,{label:t("Price Typography","digiblocks"),value:f,onChange:e=>l({headingTypography:e})}),wp.element.createElement(be,{label:t("Description Typography","digiblocks"),value:r,onChange:e=>l({textTypography:e})}),wp.element.createElement(be,{label:t("Features Typography","digiblocks"),value:m,onChange:e=>l({contentTypography:e})}),wp.element.createElement(be,{label:t("Button Typography","digiblocks"),value:x,onChange:e=>l({buttonTypography:e})})),wp.element.createElement(S,{tab:"style",name:"borders",title:t("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement(I,{label:t("Border Style","digiblocks"),value:ie,options:Ze,onChange:e=>l({borderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ie!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ee,{label:t("Border Width","digiblocks"),value:Re,onChange:e=>l({borderWidth:e})}),wp.element.createElement(J,{title:t("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Le,onChange:e=>l({borderColor:e}),label:t("Border Color","digiblocks")}]})),wp.element.createElement(ee,{label:t("Border Radius","digiblocks"),value:Oe,onChange:e=>l({borderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(S,{tab:"style",name:"shadow",title:t("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Ft,{normalValue:L,hoverValue:_,onNormalChange:e=>l({boxShadow:e}),onHoverChange:e=>l({boxShadowHover:e})})),wp.element.createElement(S,{tab:"style",name:"button-style",title:t("Button Style","digiblocks"),initialOpen:!1},wp.element.createElement(Ne,{label:t("Border Radius","digiblocks"),value:Fe,onChange:e=>l({buttonRadius:e}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(I,{label:t("Border Style","digiblocks"),value:le,options:Ze,onChange:e=>l({buttonBorderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),le!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ee,{label:t("Border Width","digiblocks"),value:Ve,onChange:e=>l({buttonBorderWidth:e})}),wp.element.createElement(J,{title:t("Border Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Me,onChange:e=>l({buttonBorderColor:e}),label:t("Border Color","digiblocks")},{value:Ce,onChange:e=>l({buttonBorderHoverColor:e}),label:t("Border Hover Color","digiblocks")}]})),wp.element.createElement(ee,{label:t("Button Padding","digiblocks"),value:ke,onChange:e=>l({buttonPadding:e})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(S,{tab:"advanced",name:"spacing",title:t("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(ee,{label:t("Padding","digiblocks"),value:Pe,onChange:e=>l({padding:e})}),wp.element.createElement(ee,{label:t("Margin","digiblocks"),value:De,onChange:e=>l({margin:e})})),wp.element.createElement(S,{tab:"advanced",name:"position",title:t("Position","digiblocks"),initialOpen:!1},wp.element.createElement(I,{label:t("Position","digiblocks"),value:re,options:[{label:t("Default","digiblocks"),value:"default"},{label:t("Relative","digiblocks"),value:"relative"},{label:t("Absolute","digiblocks"),value:"absolute"},{label:t("Fixed","digiblocks"),value:"fixed"}],onChange:e=>l({position:e}),__nextHasNoMarginBottom:!0}),re!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(He,{label:t("Horizontal Orientation","digiblocks"),value:Ue,isBlock:!0,onChange:e=>l({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(G,{value:"left",label:t("Left","digiblocks")}),wp.element.createElement(G,{value:"right",label:t("Right","digiblocks")})),wp.element.createElement(lt,{label:t("Offset","digiblocks"),value:P,onChange:e=>l({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Je(P?.[h]?.unit||"px"),step:Ke(P?.[h]?.unit||"px")}),wp.element.createElement(He,{label:t("Vertical Orientation","digiblocks"),value:Ge,isBlock:!0,onChange:e=>l({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(G,{value:"top",label:t("Top","digiblocks")}),wp.element.createElement(G,{value:"bottom",label:t("Bottom","digiblocks")})),wp.element.createElement(lt,{label:t("Offset","digiblocks"),value:D,onChange:e=>l({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Je(D?.[h]?.unit||"px"),step:Ke(D?.[h]?.unit||"px")})),wp.element.createElement(Ne,{label:t("Z-Index","digiblocks"),value:se,onChange:e=>l({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(S,{tab:"advanced",name:"transform",title:t("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(Mt,{normalValue:we,hoverValue:M,onNormalChange:e=>l({transform:e}),onHoverChange:e=>l({transformHover:e})})),wp.element.createElement(S,{tab:"advanced",name:"animation",title:t("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(I,{label:t("Animation Effect","digiblocks"),value:H,options:gt,onChange:e=>l({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),H&&H!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{label:t("Animation Duration","digiblocks"),value:me,options:[{label:t("Slow","digiblocks"),value:"slow"},{label:t("Normal","digiblocks"),value:"normal"},{label:t("Fast","digiblocks"),value:"fast"}],onChange:e=>l({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ot,{label:t("Animation Delay (ms)","digiblocks"),value:he||0,onChange:e=>l({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),H&&H!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(F,{variant:"secondary",isSecondary:!0,onClick:dt,style:{width:"100%"}},t("Preview Animation","digiblocks")))),wp.element.createElement(S,{tab:"advanced",name:"visibility",title:t("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,t("Editor Note:","digiblocks")),wp.element.createElement("br",null),t("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ce,{label:t("Hide on Desktop","digiblocks"),checked:z.desktop,onChange:e=>l({visibility:{...z,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ce,{label:t("Hide on Tablet","digiblocks"),checked:z.tablet,onChange:e=>l({visibility:{...z,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ce,{label:t("Hide on Mobile","digiblocks"),checked:z.mobile,onChange:e=>l({visibility:{...z,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(S,{tab:"advanced",name:"additional",title:t("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},t("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:ge||"",onChange:e=>l({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},t(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},t("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},t("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:e=>l({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},t("Separate multiple classes with spaces.","digiblocks")))));default:return null}},_t=zt({className:`digiblocks-pricing-table-block ${i} ${oe||""}`,id:ge||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,null,wp.element.createElement(Vt,{tabs:ft,activeTab:Ee,onSelect:st},Ht())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Bt()}}),wp.element.createElement("div",{..._t},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},d.map((e,o)=>Nt(e,o))),wp.element.createElement("div",{className:"digiblocks-pricing-table-controls"},wp.element.createElement(F,{variant:"primary",icon:"plus",onClick:mt},t("Add Pricing Table","digiblocks")))))},nt=Wt;var{__:Et}=window.wp.i18n,{useBlockProps:It,RichText:E}=window.wp.blockEditor,jt=({attributes:te})=>{let{id:l,anchor:pe,customClasses:i,tables:ge,columns:z,tableStyle:oe,align:d,animation:j,animationDuration:fe,animationDelay:X,showRibbon:H,ribbonStyle:me,ribbonPosition:he}=te,v=["digiblocks-pricing-table-block",l,`align-${d}`,j!=="none"?`animate-${j} digi-animate-hidden`:"",oe?`style-${oe}`:"",i||""].filter(Boolean).join(" "),f=It.save({className:v,id:pe||null});return j&&j!=="none"&&(f["data-animation-duration"]=fe||"normal",f["data-animation-delay"]=X||0),wp.element.createElement("div",{...f},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},ge.map(r=>wp.element.createElement("div",{key:r.id,className:`digiblocks-pricing-table ${r.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,style:r.backgroundColor?{backgroundColor:r.backgroundColor}:null},H&&r.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(E.Content,{value:r.ribbonText})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:r.headerBackgroundColor?{backgroundColor:r.headerBackgroundColor}:null},r.iconValue&&r.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:r.iconValue.svg}})),wp.element.createElement(E.Content,{tagName:"h3",className:"digiblocks-pricing-table-title",value:r.title,style:r.textColor?{color:r.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:r.textColor?{color:r.textColor}:null},wp.element.createElement(E.Content,{tagName:"span",className:"digiblocks-pricing-table-amount",value:r.price}),wp.element.createElement(E.Content,{tagName:"span",className:"digiblocks-pricing-table-period",value:r.period})),wp.element.createElement(E.Content,{tagName:"div",className:"digiblocks-pricing-table-description",value:r.description,style:r.textColor?{color:r.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},r.features.map((m,x)=>wp.element.createElement("div",{key:`feature-${x}`,className:`digiblocks-pricing-table-feature-item ${m.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},m.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(E.Content,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:m.text,style:r.textColor?{color:r.textColor}:null})))),r.buttonUrl&&r.buttonUrl.trim()!==""&&wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("a",{href:r.buttonUrl||"#",className:"digiblocks-pricing-table-button",style:r.buttonBackgroundColor?{backgroundColor:r.buttonBackgroundColor,color:r.buttonTextColor||"#ffffff"}:null,target:r.buttonOpenInNewTab?"_blank":void 0,rel:r.buttonOpenInNewTab?`noopener noreferrer ${r.buttonRel||""}`.trim():r.buttonRel||void 0},wp.element.createElement(E.Content,{tagName:"span",value:r.buttonText})))))))},at=jt;var{__:ue}=window.wp.i18n,{registerBlockType:Xt}=window.wp.blocks;Xt("digiblocks/pricing-table",{apiVersion:2,title:digiBlocksData.blocks["pricing-table"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:l}=digiBlocksData.blocks["pricing-table"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:l}))}},description:digiBlocksData.blocks["pricing-table"].description,keywords:[ue("pricing","digiblocks"),ue("price","digiblocks"),ue("table","digiblocks"),ue("plan","digiblocks"),ue("subscription","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string"},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},tables:{type:"array",default:[]},columns:{type:"number",default:2},tableStyle:{type:"string",default:"style1"},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.4,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:36,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"bold",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.2,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.6,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.4,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px",isLinked:!1},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e6e6e6"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonRadius:{type:"number",default:4},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderStyle:{type:"string",default:"none"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},showRibbon:{type:"boolean",default:!0},ribbonStyle:{type:"string",default:"corner"},ribbonPosition:{type:"string",default:"right"},tableTextColor:{type:"string",default:"#333333"},tableBackgroundColor:{type:"string",default:"#ffffff"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3151e1"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonBackgroundColor:{type:"string",default:"#4a6cf7"},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{tables:[{id:"table-1-example",title:"Basic Plan",price:"$19",period:"/month",description:"Great for starters",features:[{text:"1 Website",enabled:!0},{text:"5GB Storage",enabled:!0},{text:"Premium Support",enabled:!1}],buttonText:"Get Started",isHighlighted:!1,ribbonText:"Popular"}],columns:1,tableStyle:"style1",showRibbon:!0}},edit:nt,save:at});})();
