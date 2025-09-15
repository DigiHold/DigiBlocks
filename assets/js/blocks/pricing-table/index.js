(()=>{var{__:e}=window.wp.i18n,{useBlockProps:be,RichText:D,InspectorControls:de,PanelColorSettings:V,LinkControl:ge}=window.wp.blockEditor,{SelectControl:I,RangeControl:Pt,ToggleControl:nt,Button:z,Tooltip:G,__experimentalToggleGroupControl:pe,__experimentalToggleGroupControlOption:kt}=window.wp.components,{useState:at,useEffect:pt,useRef:fe}=window.wp.element,{useBlockId:ue,getDimensionCSS:E,animations:xt,animationPreview:Rt}=digi.utils,{tabIcons:yt}=digi.icons,{ResponsiveControl:j,DimensionControl:q,TypographyControl:rt,BoxShadowControl:he,CustomTabPanel:me,TabPanelBody:C,FontAwesomeControl:Se}=digi.components,ke=({attributes:Q,setAttributes:l,clientId:ct})=>{let{id:i,anchor:bt,visibility:v,customClasses:J,tables:r,columns:K,tableStyle:dt,align:W,animation:w,titleTypography:d,headingTypography:n,textTypography:c,contentTypography:g,buttonTypography:f,padding:X,margin:Y,borderRadius:Z,borderWidth:A,borderStyle:tt,borderColor:Ct,boxShadow:B,boxShadowHover:x,buttonRadius:vt,buttonPadding:P,buttonBorderStyle:et,buttonBorderWidth:ot,buttonBorderColor:St,buttonBorderHoverColor:ft,showRibbon:gt,ribbonStyle:$t,ribbonPosition:U,tableTextColor:O,tableBackgroundColor:Tt,headerBackgroundColor:wt,buttonTextColor:ut,buttonBackgroundColor:ht,buttonTextHoverColor:Bt,buttonBackgroundHoverColor:Ht,ribbonTextColor:it,ribbonBackgroundColor:lt}=Q;ue(i,ct,l);let k=(t,o)=>!t||typeof t!="object"?null:o==="mobile"?t.mobile!==""&&t.mobile!==void 0&&t.mobile!==null?t.mobile:t.tablet!==""&&t.tablet!==void 0&&t.tablet!==null?t.tablet:t.desktop:o==="tablet"&&t.tablet!==""&&t.tablet!==void 0&&t.tablet!==null?t.tablet:t.desktop,[s,Wt]=at(window.digi.responsiveState.activeDevice),[Ce,ve]=at(!1),[Nt,Ot]=at(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(ct);if(t)return t}return"options"}),[b,L]=at(0),[_t,Lt]=at(!1);pt(()=>{let t=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(Lt(!0),!0):!1;if(!t()){let o=setTimeout(()=>{t()&&clearTimeout(o)},500);return()=>clearTimeout(o)}},[]),pt(()=>window.digi.responsiveState.subscribe(o=>{Wt(o)}),[]),pt(()=>{(!r||r.length===0)&&l({tables:[{id:`table-1-${Date.now().toString(36)}`,title:e("Basic Plan","digiblocks"),price:"$19",period:"/month",description:e("Great for starters","digiblocks"),iconValue:null,features:[{text:e("1 Website","digiblocks"),enabled:!0},{text:e("5GB Storage","digiblocks"),enabled:!0},{text:e("10k Visits Monthly","digiblocks"),enabled:!0},{text:e("Premium Support","digiblocks"),enabled:!1}],buttonText:e("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:e("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""},{id:`table-2-${Date.now().toString(36)}`,title:e("Pro Plan","digiblocks"),price:"$49",period:"/month",description:e("For growing businesses","digiblocks"),iconValue:null,features:[{text:e("5 Websites","digiblocks"),enabled:!0},{text:e("20GB Storage","digiblocks"),enabled:!0},{text:e("50k Visits Monthly","digiblocks"),enabled:!0},{text:e("Premium Support","digiblocks"),enabled:!0}],buttonText:e("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!0,ribbonText:e("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}],columns:2,tableStyle:"style1",align:"center",showRibbon:!0,ribbonStyle:"corner",ribbonPosition:"right",titleTypography:d||{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",fontWeight:"",fontFamily:""},headingTypography:n||{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"bold",fontFamily:""},textTypography:c||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},contentTypography:g||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},buttonTypography:f||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",fontWeight:"",fontFamily:""}})},[r,l]);let zt=fe(null);pt(()=>{if(w&&w!=="none"){let t=setTimeout(()=>{Rt(i,w,xt,zt)},100);return()=>clearTimeout(t)}},[w]);let Mt=()=>{Rt(i,w,xt,zt)},Vt=[{label:e("Style 1","digiblocks"),value:"style1"},{label:e("Style 2","digiblocks"),value:"style2"},{label:e("Style 3","digiblocks"),value:"style3"},{label:e("Style 4","digiblocks"),value:"style4"},{label:e("Minimal","digiblocks"),value:"minimal"}],It=[{label:e("Corner","digiblocks"),value:"corner"},{label:e("Banner","digiblocks"),value:"banner"},{label:e("Side","digiblocks"),value:"side"},{label:e("Flag","digiblocks"),value:"flag"}],Gt=[{label:e("Right","digiblocks"),value:"right"},{label:e("Left","digiblocks"),value:"left"}],Ut=[{label:e("None","digiblocks"),value:"none"},{label:e("Solid","digiblocks"),value:"solid"},{label:e("Dotted","digiblocks"),value:"dotted"},{label:e("Dashed","digiblocks"),value:"dashed"},{label:e("Double","digiblocks"),value:"double"}],Et=[{label:e("None","digiblocks"),value:"none"},...Object.keys(xt).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),value:t}))],jt=[{name:"options",title:e("Options","digiblocks"),icon:yt.optionsIcon},{name:"style",title:e("Style","digiblocks"),icon:yt.styleIcon},{name:"advanced",title:e("Advanced","digiblocks"),icon:yt.advancedIcon}],qt=()=>{let t=[...r,{id:`table-${r.length+1}-${Date.now().toString(36)}`,title:e("New Plan","digiblocks"),price:"$29",period:"/month",description:e("Add your description","digiblocks"),iconValue:null,features:[{text:e("Feature 1","digiblocks"),enabled:!0},{text:e("Feature 2","digiblocks"),enabled:!0},{text:e("Feature 3","digiblocks"),enabled:!1}],buttonText:e("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:e("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}];l({tables:t}),L(t.length-1)},Qt=t=>{if(r.length<=1)return;let o=[...r];o.splice(t,1),l({tables:o}),b>=o.length&&L(o.length-1)},Jt=t=>{let a={...r[t],id:`table-${r.length+1}-${Date.now().toString(36)}`},m=[...r];m.splice(t+1,0,a),l({tables:m}),L(t+1)},Kt=t=>{if(t===0)return;let o=[...r],a=o[t];o[t]=o[t-1],o[t-1]=a,l({tables:o}),L(t-1)},Xt=t=>{if(t===r.length-1)return;let o=[...r],a=o[t];o[t]=o[t+1],o[t+1]=a,l({tables:o}),L(t+1)},S=(t,o,a)=>{let m=[...r];m[t]={...m[t],[o]:a},l({tables:m})},Yt=t=>{let o=[...r];o[t].features.push({text:e("New Feature","digiblocks"),enabled:!0}),l({tables:o})},Zt=(t,o)=>{if(r[t].features.length<=1)return;let a=[...r];a[t].features.splice(o,1),l({tables:a})},At=(t,o,a,m)=>{let y=[...r];y[t].features[o]={...y[t].features[o],[a]:m},l({tables:y})},te=(t,o)=>{let a=[...r];a[t].features[o].enabled=!a[t].features[o].enabled,l({tables:a})},ee=t=>{l({tableStyle:t});let o={};switch(t){case"style1":o={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#f8f9fa",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#4a6cf7",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style2":o={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#4a6cf7",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff9800",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"}};break;case"style3":o={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff5252",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:3,right:3,bottom:3,left:3,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#4a6cf7",borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style4":o={tableBackgroundColor:"#f8f9fa",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#333333",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#000000",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#333333",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.08)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}};break;case"minimal":o={tableBackgroundColor:"transparent",headerBackgroundColor:"transparent",tableTextColor:"#333333",buttonBackgroundColor:"transparent",buttonTextColor:"#4a6cf7",buttonBackgroundHoverColor:"transparent",buttonTextHoverColor:"#3151e1",ribbonBackgroundColor:"#f8f9fa",ribbonTextColor:"#333333",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:"",right:"",bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;default:o={}}l(o)},oe=_t?window.digi.components.FontAwesomeControl:null,ie=()=>{let t=s,o="";tt&&tt!=="none"?o=`
				border-style: ${tt};
				border-color: ${Ct||"#e6e6e6"};
				${E(A,"border-width",t)}
				${E(Z,"border-radius",t)}
			`:o="border: none;";let a="box-shadow: none;";B&&B.enable&&(a=`box-shadow: ${B.position==="inset"?"inset ":""}${B.horizontal}px ${B.vertical}px ${B.blur}px ${B.spread}px ${B.color};`);let m="";x&&x.enable&&(m=`box-shadow: ${x.position==="inset"?"inset ":""}${x.horizontal}px ${x.vertical}px ${x.blur}px ${x.spread}px ${x.color};`);let y=`${E(X,"padding",t)}`,re=`${E(Y,"margin",t)}`,H="";if(d){d.fontFamily&&(H+=`font-family: ${d.fontFamily};`);let p=k(d.fontSize,s);p&&(H+=`font-size: ${p}${d.fontSizeUnit||"px"};`),d.fontWeight&&(H+=`font-weight: ${d.fontWeight};`),d.fontStyle&&(H+=`font-style: ${d.fontStyle};`),d.textTransform&&(H+=`text-transform: ${d.textTransform};`),d.textDecoration&&(H+=`text-decoration: ${d.textDecoration};`);let h=k(d.lineHeight,s);h&&(H+=`line-height: ${h}${d.lineHeightUnit||"em"};`);let u=k(d.letterSpacing,s);(u||u===0)&&(H+=`letter-spacing: ${u}${d.letterSpacingUnit||"px"};`)}let $="";if(n){n.fontFamily&&($+=`font-family: ${n.fontFamily};`);let p=k(n.fontSize,s);p&&($+=`font-size: ${p}${n.fontSizeUnit||"px"};`),n.fontWeight?$+=`font-weight: ${n.fontWeight};`:$+="font-weight: bold;",n.fontStyle&&($+=`font-style: ${n.fontStyle};`),n.textTransform&&($+=`text-transform: ${n.textTransform};`),n.textDecoration&&($+=`text-decoration: ${n.textDecoration};`);let h=k(n.lineHeight,s);h&&($+=`line-height: ${h}${n.lineHeightUnit||"em"};`);let u=k(n.letterSpacing,s);(u||u===0)&&($+=`letter-spacing: ${u}${n.letterSpacingUnit||"px"};`)}let T="";if(c){c.fontFamily&&(T+=`font-family: ${c.fontFamily};`);let p=k(c.fontSize,s);p&&(T+=`font-size: ${p}${c.fontSizeUnit||"px"};`),c.fontWeight&&(T+=`font-weight: ${c.fontWeight};`),c.fontStyle&&(T+=`font-style: ${c.fontStyle};`),c.textTransform&&(T+=`text-transform: ${c.textTransform};`),c.textDecoration&&(T+=`text-decoration: ${c.textDecoration};`);let h=k(c.lineHeight,s);h&&(T+=`line-height: ${h}${c.lineHeightUnit||"em"};`);let u=k(c.letterSpacing,s);(u||u===0)&&(T+=`letter-spacing: ${u}${c.letterSpacingUnit||"px"};`)}let N="";if(g){g.fontFamily&&(N+=`font-family: ${g.fontFamily};`);let p=k(g.fontSize,s);p&&(N+=`font-size: ${p}${g.fontSizeUnit||"px"};`),g.fontWeight&&(N+=`font-weight: ${g.fontWeight};`),g.fontStyle&&(N+=`font-style: ${g.fontStyle};`),g.textTransform&&(N+=`text-transform: ${g.textTransform};`),g.textDecoration&&(N+=`text-decoration: ${g.textDecoration};`);let h=k(g.lineHeight,s);h&&(N+=`line-height: ${h}${g.lineHeightUnit||"em"};`);let u=k(g.letterSpacing,s);(u||u===0)&&(N+=`letter-spacing: ${u}${g.letterSpacingUnit||"px"};`)}let _="";if(f){f.fontFamily&&(_+=`font-family: ${f.fontFamily};`);let p=k(f.fontSize,s);p&&(_+=`font-size: ${p}${f.fontSizeUnit||"px"};`),f.fontWeight&&(_+=`font-weight: ${f.fontWeight};`),f.fontStyle&&(_+=`font-style: ${f.fontStyle};`),f.textTransform&&(_+=`text-transform: ${f.textTransform};`),f.textDecoration&&(_+=`text-decoration: ${f.textDecoration};`);let h=k(f.lineHeight,s);h&&(_+=`line-height: ${h}${f.lineHeightUnit||"em"};`);let u=k(f.letterSpacing,s);(u||u===0)&&(_+=`letter-spacing: ${u}${f.letterSpacingUnit||"px"};`)}let se=vt||4,ce=P&&P[t]?`${E(P,"padding",t)}`:"padding: 10px 20px",mt="";et&&et!=="none"?mt=`
				border-style: ${et};
				border-color: ${St||ht||"#4a6cf7"};
				${E(ot,"border-width",t)}
			`:mt="border: none;";let R="";switch(dt){case"style1":R=`
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
				`;break;case"style2":R=`
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
				`;break;case"style3":R=`
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
				`;break;case"style4":R=`
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
				`;break;case"minimal":R=`
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
				`;break;default:R=""}let M="";if(gt)switch($t){case"corner":M=`
						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 0;
							${U==="right"?"right":"left"}: 0;
							background: ${lt||"#4a6cf7"};
							color: ${it||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							text-transform: uppercase;
							z-index: 2;
							${U==="right"?"border-radius: 0 0 0 4px;":"border-radius: 0 0 4px 0;"}
						}
					`;break;case"banner":M=`
						.${i} .digiblocks-pricing-table-highlighted {
							overflow: hidden;
						}

						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 7px;
							${U==="right"?"right":"left"}: -24px;
							background: ${lt||"#4a6cf7"};
							color: ${it||"#ffffff"};
							padding: 5px 30px;
							font-size: 12px;
							font-weight: bold;
							transform: ${U==="right"?"rotate(45deg)":"rotate(-45deg)"};
							z-index: 2;
							transform-origin: center center;
						}
					`;break;case"side":M=`
						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 30px;
							${U==="right"?"right":"left"}: 0;
							background: ${lt||"#4a6cf7"};
							color: ${it||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							${U==="right"?"border-radius: 4px 0 0 4px;":"border-radius: 0 4px 4px 0;"}
							z-index: 2;
						}
					`;break;case"flag":M=`
						.${i} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 15px;
							${U==="right"?"right":"left"}: 15px;
							background: ${lt||"#4a6cf7"};
							color: ${it||"#ffffff"};
							padding: 8px 15px;
							font-size: 12px;
							font-weight: bold;
							border-radius: 50px;
							z-index: 2;
						}
					`;break;default:M=""}return`
			/* Pricing Table Block - ${i} */
			.${i} {
				${re}
				width: 100%;
				position: relative;
			}
			
			/* Grid container for tables */
			.${i} .digiblocks-pricing-tables-container {
				display: grid;
				gap: 30px;
				grid-template-columns: repeat(${K}, 1fr);
			}
			
			/* Individual pricing table */
			.${i} .digiblocks-pricing-table {
				display: flex;
				flex-direction: column;
				background-color: ${Tt||"#ffffff"};
				color: ${O||"#333333"};
				${o}
				${a}
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
				${x&&x.enable?m:""}
			}
			
			/* Header section */
			.${i} .digiblocks-pricing-table-header {
				background-color: ${wt||"transparent"};
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
			
			${r.map((p,h)=>`
				/* Custom colors for table ${h+1} */
				.${i} .digiblocks-pricing-table:nth-child(${h+1}) .digiblocks-pricing-table-icon svg {
					fill: ${p.iconColor||O||"#333333"};
					transition: fill 0.3s ease;
				}
				
				.${i} .digiblocks-pricing-table:nth-child(${h+1}):hover .digiblocks-pricing-table-icon svg {
					fill: ${p.iconHoverColor||p.iconColor||O||"#333333"};
				}
			`).join("")}
			
			/* Title */
			.${i} .digiblocks-pricing-table-title {
				margin: 0;
				color: ${O||"#333333"};
				${H}
			}
			
			/* Price section */
			.${i} .digiblocks-pricing-table-price {
				color: ${O||"#333333"};
				${$}
			}
			
			.${i} .digiblocks-pricing-table-period {
				${T}
				opacity: 0.8;
			}
			
			/* Description */
			.${i} .digiblocks-pricing-table-description {
				${T}
			}
			
			/* Features section */
			.${i} .digiblocks-pricing-table-feature-wrapper {
				display: flex;
				align-items: center;
				justify-content: ${W==="center"?"center":W==="right"?"flex-end":"space-between"};
				gap: 10px;
			}

			.${i} .digiblocks-pricing-table-feature-item {
				display: flex;
				align-items: center;
				justify-content: ${W==="center"?"center":W==="right"?"flex-end":"flex-start"};
				gap: 10px;
				${N}
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
				background-color: ${ht||"#4a6cf7"};
				color: ${ut||"#ffffff"};
				${ce}
				border-radius: ${se}px;
				cursor: pointer;
				display: inline-block;
				text-decoration: none;
				transition: all 0.3s ease;
				${mt}
				${_}
			}
			
			.${i} .digiblocks-pricing-table-button:hover {
				background-color: ${Ht||"#3151e1"};
				color: ${Bt||"#ffffff"};
				${ft?`border-color: ${ft};`:""}
			}
			
			/* Ribbon */
			${M}
			
			/* Table-specific styles */
			${R}
			
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
			${v.desktop?`
				@media (min-width: 992px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${v.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${v.mobile?`
				@media (max-width: 767px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`},le=(t,o)=>wp.element.createElement("div",{key:t.id,className:`digiblocks-pricing-table ${b===o?"digiblocks-table-active":""} ${t.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,onClick:()=>L(o),style:t.backgroundColor?{backgroundColor:t.backgroundColor}:null},wp.element.createElement("div",{className:"digiblocks-table-item-controls"},wp.element.createElement(G,{text:e("Move Left","digiblocks")},wp.element.createElement(z,{icon:"arrow-left-alt2",isSmall:!0,onClick:a=>{a.stopPropagation(),Kt(o)},disabled:o===0})),wp.element.createElement(G,{text:e("Move Right","digiblocks")},wp.element.createElement(z,{icon:"arrow-right-alt2",isSmall:!0,onClick:a=>{a.stopPropagation(),Xt(o)},disabled:o===r.length-1})),wp.element.createElement(G,{text:e("Duplicate","digiblocks")},wp.element.createElement(z,{icon:"admin-page",isSmall:!0,onClick:a=>{a.stopPropagation(),Jt(o)}})),wp.element.createElement(G,{text:e("Remove","digiblocks")},wp.element.createElement(z,{icon:"trash",isSmall:!0,onClick:a=>{a.stopPropagation(),Qt(o)},disabled:r.length<=1}))),gt&&t.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(D,{tagName:"span",value:t.ribbonText,onChange:a=>S(o,"ribbonText",a),placeholder:e("Popular","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:t.headerBackgroundColor?{backgroundColor:t.headerBackgroundColor}:null},t.iconValue&&t.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:t.iconValue.svg}})),wp.element.createElement(D,{tagName:"h3",className:"digiblocks-pricing-table-title",value:t.title,onChange:a=>S(o,"title",a),placeholder:e("Plan Title","digiblocks"),style:t.textColor?{color:t.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:t.textColor?{color:t.textColor}:null},wp.element.createElement(D,{tagName:"span",className:"digiblocks-pricing-table-amount",value:t.price,onChange:a=>S(o,"price",a),placeholder:e("$0","digiblocks")}),wp.element.createElement(D,{tagName:"span",className:"digiblocks-pricing-table-period",value:t.period,onChange:a=>S(o,"period",a),placeholder:e("/month","digiblocks")})),wp.element.createElement(D,{tagName:"div",className:"digiblocks-pricing-table-description",value:t.description,onChange:a=>S(o,"description",a),placeholder:e("Short description","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},t.features.map((a,m)=>wp.element.createElement("div",{key:`feature-${m}`,className:"digiblocks-pricing-table-feature-wrapper"},wp.element.createElement("div",{className:`digiblocks-pricing-table-feature-item ${a.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},a.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(D,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:a.text,onChange:y=>At(o,m,"text",y),placeholder:e("Feature","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-feature-item-controls"},wp.element.createElement(G,{text:a.enabled?e("Disable","digiblocks"):e("Enable","digiblocks")},wp.element.createElement(z,{icon:a.enabled?"visibility":"hidden",isSmall:!0,onClick:y=>{y.stopPropagation(),te(o,m)}})),wp.element.createElement(G,{text:e("Remove","digiblocks")},wp.element.createElement(z,{icon:"trash",isSmall:!0,onClick:y=>{y.stopPropagation(),Zt(o,m)},disabled:t.features.length<=1}))))),wp.element.createElement(z,{variant:"secondary",isSmall:!0,onClick:a=>{a.stopPropagation(),Yt(o)},style:{width:"100%",marginTop:"10px"}},e("Add Feature","digiblocks"))),t.buttonUrl&&t.buttonUrl.trim()!==""&&wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("div",{className:"digiblocks-pricing-table-button",style:t.buttonBackgroundColor?{backgroundColor:t.buttonBackgroundColor,color:t.buttonTextColor||ut||"#ffffff"}:null},wp.element.createElement(D,{tagName:"span",value:t.buttonText,onChange:a=>S(o,"buttonText",a),placeholder:e("Get Started","digiblocks")})))),ne=()=>{switch(Nt){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(C,{tab:"options",name:"layout",title:e("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Pt,{label:e("Columns","digiblocks"),value:K,onChange:t=>l({columns:t}),min:1,max:4,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(I,{label:e("Table Style","digiblocks"),value:dt,options:Vt,onChange:t=>ee(t),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(pe,{label:e("Alignment","digiblocks"),value:W,onChange:t=>l({align:t}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(kt,{value:"left",label:e("Left","digiblocks")}),wp.element.createElement(kt,{value:"center",label:e("Center","digiblocks")}),wp.element.createElement(kt,{value:"right",label:e("Right","digiblocks")}))),wp.element.createElement(C,{tab:"options",name:"ribbon",title:e("Ribbon","digiblocks"),initialOpen:!1},wp.element.createElement(nt,{label:e("Show Ribbon","digiblocks"),checked:gt,onChange:t=>l({showRibbon:t}),help:e("Display a ribbon on highlighted tables.","digiblocks"),__nextHasNoMarginBottom:!0}),gt&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{label:e("Ribbon Style","digiblocks"),value:$t,options:It,onChange:t=>l({ribbonStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(I,{label:e("Ribbon Position","digiblocks"),value:U,options:Gt,onChange:t=>l({ribbonPosition:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(V,{title:e("Ribbon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:lt,onChange:t=>l({ribbonBackgroundColor:t}),label:e("Background Color","digiblocks")},{value:it,onChange:t=>l({ribbonTextColor:t}),label:e("Text Color","digiblocks")}]}))),wp.element.createElement(C,{tab:"options",name:"table-config",title:e("Table Settings","digiblocks"),initialOpen:!1},r[b]&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,e("Editing Table","digiblocks")," #",b+1),wp.element.createElement(nt,{label:e("Highlight This Table","digiblocks"),checked:r[b].isHighlighted,onChange:t=>S(b,"isHighlighted",t),help:e("Apply special styling to highlight this table.","digiblocks"),__nextHasNoMarginBottom:!0}),_t?wp.element.createElement(oe,{label:e("Select Icon","digiblocks"),value:r[b].iconValue,onChange:t=>S(b,"iconValue",t)}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,e("Loading icon selector...","digiblocks"))),r[b]&&r[b].iconValue&&wp.element.createElement(V,{title:e("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:r[b].iconColor,onChange:t=>S(b,"iconColor",t),label:e("Icon Color","digiblocks")},{value:r[b].iconHoverColor,onChange:t=>S(b,"iconHoverColor",t),label:e("Icon Hover Color","digiblocks")}]}),wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"10px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,e("Button Link","digiblocks"))),wp.element.createElement(ge,{value:r[b].buttonUrl?{url:r[b].buttonUrl,opensInNewTab:!!r[b].buttonOpenInNewTab,rel:r[b].buttonRel||""}:void 0,settings:[{id:"opensInNewTab",title:e("Open in new tab","digiblocks")},{id:"rel",title:e("Add noopener noreferrer","digiblocks")}],onChange:t=>{if(t&&t.url){let o=[...r];o[b]={...o[b],buttonUrl:t.url,buttonOpenInNewTab:!!t.opensInNewTab,buttonRel:t.rel||""},l({tables:o})}},onRemove:()=>{let t=[...r];t[b]={...t[b],buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:""},l({tables:t})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!r[b].buttonUrl})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(C,{tab:"style",name:"colors",title:e("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(V,{title:e("Table Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Tt,onChange:t=>l({tableBackgroundColor:t}),label:e("Background Color","digiblocks")},{value:wt,onChange:t=>l({headerBackgroundColor:t}),label:e("Header Background","digiblocks")},{value:O,onChange:t=>l({tableTextColor:t}),label:e("Text Color","digiblocks")}]}),wp.element.createElement(V,{title:e("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ht,onChange:t=>l({buttonBackgroundColor:t}),label:e("Background Color","digiblocks")},{value:ut,onChange:t=>l({buttonTextColor:t}),label:e("Text Color","digiblocks")},{value:Ht,onChange:t=>l({buttonBackgroundHoverColor:t}),label:e("Hover Background","digiblocks")},{value:Bt,onChange:t=>l({buttonTextHoverColor:t}),label:e("Hover Text","digiblocks")}]})),wp.element.createElement(C,{tab:"style",name:"typography",title:e("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(rt,{label:e("Title Typography","digiblocks"),value:d,onChange:t=>l({titleTypography:t}),defaults:{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(rt,{label:e("Price Typography","digiblocks"),value:n,onChange:t=>l({headingTypography:t}),defaults:{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(rt,{label:e("Description Typography","digiblocks"),value:c,onChange:t=>l({textTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(rt,{label:e("Features Typography","digiblocks"),value:g,onChange:t=>l({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(rt,{label:e("Button Typography","digiblocks"),value:f,onChange:t=>l({buttonTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(C,{tab:"style",name:"borders",title:e("Borders & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(I,{label:e("Border Style","digiblocks"),value:tt,options:Ut,onChange:t=>l({borderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),tt!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{label:e("Border Width","digiblocks")},wp.element.createElement(q,{values:A&&A[s]?A[s]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>l({borderWidth:{...A,[s]:t}})})),wp.element.createElement(V,{title:e("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ct,onChange:t=>l({borderColor:t}),label:e("Border Color","digiblocks")}]})),wp.element.createElement(j,{label:e("Border Radius","digiblocks")},wp.element.createElement(q,{values:Z&&Z[s]?Z[s]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:t=>l({borderRadius:{...Z,[s]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(he,{normalValue:B,hoverValue:x,onNormalChange:t=>l({boxShadow:t}),onHoverChange:t=>l({boxShadowHover:t})})),wp.element.createElement(C,{tab:"style",name:"button-style",title:e("Button Style","digiblocks"),initialOpen:!1},wp.element.createElement(Pt,{label:e("Border Radius","digiblocks"),value:vt,onChange:t=>l({buttonRadius:t}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(I,{label:e("Border Style","digiblocks"),value:et,options:Ut,onChange:t=>l({buttonBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),et!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{label:e("Border Width","digiblocks")},wp.element.createElement(q,{values:ot&&ot[s]?ot[s]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>l({buttonBorderWidth:{...ot,[s]:t}})})),wp.element.createElement(V,{title:e("Border Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:St,onChange:t=>l({buttonBorderColor:t}),label:e("Border Color","digiblocks")},{value:ft,onChange:t=>l({buttonBorderHoverColor:t}),label:e("Border Hover Color","digiblocks")}]})),wp.element.createElement(j,{label:e("Button Padding","digiblocks")},wp.element.createElement(q,{values:P&&P[s]?P[s]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:t=>l({buttonPadding:{...P,[s]:t}})}))),wp.element.createElement(C,{tab:"style",name:"spacing",title:e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:e("Padding","digiblocks")},wp.element.createElement(q,{values:X&&X[s]?X[s]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:t=>l({padding:{...X,[s]:t}})})),wp.element.createElement(j,{label:e("Margin","digiblocks")},wp.element.createElement(q,{values:Y&&Y[s]?Y[s]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:t=>l({margin:{...Y,[s]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(C,{tab:"advanced",name:"animation",title:e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(I,{label:e("Animation Effect","digiblocks"),value:w,options:Et,onChange:t=>l({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),w&&w!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(z,{variant:"secondary",isSecondary:!0,onClick:Mt,style:{width:"100%"}},e("Preview Animation","digiblocks")))),wp.element.createElement(C,{tab:"advanced",name:"visibility",title:e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,e("Editor Note:","digiblocks")),wp.element.createElement("br",null),e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(nt,{label:e("Hide on Desktop","digiblocks"),checked:v.desktop,onChange:t=>l({visibility:{...v,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(nt,{label:e("Hide on Tablet","digiblocks"),checked:v.tablet,onChange:t=>l({visibility:{...v,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(nt,{label:e("Hide on Mobile","digiblocks"),checked:v.mobile,onChange:t=>l({visibility:{...v,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(C,{tab:"advanced",name:"additional",title:e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:bt||"",onChange:t=>l({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:J||"",onChange:t=>l({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},e("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ae=be({className:`digiblocks-pricing-table-block ${i} ${J||""}`,id:bt||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(de,null,wp.element.createElement(me,{tabs:jt,activeTab:Nt,onSelect:Ot},ne())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ie()}}),wp.element.createElement("div",{...ae},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},r.map((t,o)=>le(t,o))),wp.element.createElement("div",{className:"digiblocks-pricing-table-controls"},wp.element.createElement(z,{variant:"primary",icon:"plus",onClick:qt},e("Add Pricing Table","digiblocks")))))},Dt=ke;var{__:Te}=window.wp.i18n,{useBlockProps:we,RichText:F}=window.wp.blockEditor,xe=({attributes:Q})=>{let{id:l,anchor:ct,customClasses:i,tables:bt,columns:v,tableStyle:J,align:r,animation:K,showRibbon:dt,ribbonStyle:W,ribbonPosition:w}=Q,d=["digiblocks-pricing-table-block",l,`align-${r}`,K!=="none"?`animate-${K}`:"",J?`style-${J}`:"",i||""].filter(Boolean).join(" ");return wp.element.createElement("div",{className:d,id:ct||null},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},bt.map(n=>wp.element.createElement("div",{key:n.id,className:`digiblocks-pricing-table ${n.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,style:n.backgroundColor?{backgroundColor:n.backgroundColor}:null},dt&&n.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(F.Content,{value:n.ribbonText})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:n.headerBackgroundColor?{backgroundColor:n.headerBackgroundColor}:null},n.iconValue&&n.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:n.iconValue.svg}})),wp.element.createElement(F.Content,{tagName:"h3",className:"digiblocks-pricing-table-title",value:n.title,style:n.textColor?{color:n.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:n.textColor?{color:n.textColor}:null},wp.element.createElement(F.Content,{tagName:"span",className:"digiblocks-pricing-table-amount",value:n.price}),wp.element.createElement(F.Content,{tagName:"span",className:"digiblocks-pricing-table-period",value:n.period})),wp.element.createElement(F.Content,{tagName:"div",className:"digiblocks-pricing-table-description",value:n.description,style:n.textColor?{color:n.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},n.features.map((c,g)=>wp.element.createElement("div",{key:`feature-${g}`,className:`digiblocks-pricing-table-feature-item ${c.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},c.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(F.Content,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:c.text,style:n.textColor?{color:n.textColor}:null})))),n.buttonUrl&&n.buttonUrl.trim()!==""&&wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("a",{href:n.buttonUrl||"#",className:"digiblocks-pricing-table-button",style:n.buttonBackgroundColor?{backgroundColor:n.buttonBackgroundColor,color:n.buttonTextColor||"#ffffff"}:null,target:n.buttonOpenInNewTab?"_blank":void 0,rel:n.buttonOpenInNewTab?`noopener noreferrer ${n.buttonRel||""}`.trim():n.buttonRel||void 0},wp.element.createElement(F.Content,{tagName:"span",value:n.buttonText})))))))},Ft=xe;var{__:st}=window.wp.i18n,{registerBlockType:ye}=window.wp.blocks;ye("digiblocks/pricing-table",{apiVersion:2,title:digiBlocksData.blocks["pricing-table"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:Q,path:l}=digiBlocksData.blocks["pricing-table"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${Q}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:l}))}},description:digiBlocksData.blocks["pricing-table"].description,keywords:[st("pricing","digiblocks"),st("price","digiblocks"),st("table","digiblocks"),st("plan","digiblocks"),st("subscription","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string"},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},tables:{type:"array",default:[]},columns:{type:"number",default:2},tableStyle:{type:"string",default:"style1"},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:36,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"bold",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.6,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e6e6e6"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonRadius:{type:"number",default:4},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderStyle:{type:"string",default:"none"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},showRibbon:{type:"boolean",default:!0},ribbonStyle:{type:"string",default:"corner"},ribbonPosition:{type:"string",default:"right"},tableTextColor:{type:"string",default:"#333333"},tableBackgroundColor:{type:"string",default:"#ffffff"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3151e1"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonBackgroundColor:{type:"string",default:"#4a6cf7"}},example:{attributes:{tables:[{id:"table-1-example",title:"Basic Plan",price:"$19",period:"/month",description:"Great for starters",features:[{text:"1 Website",enabled:!0},{text:"5GB Storage",enabled:!0},{text:"Premium Support",enabled:!1}],buttonText:"Get Started",isHighlighted:!1,ribbonText:"Popular"}],columns:1,tableStyle:"style1",showRibbon:!0}},edit:Dt,save:Ft});})();
