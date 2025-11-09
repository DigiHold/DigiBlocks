(()=>{var{__:l}=window.wp.i18n,{useBlockProps:xl,RichText:_e,InspectorControls:Cl,PanelColorSettings:ge,BlockControls:yl}=window.wp.blockEditor,{TextControl:wl,SelectControl:Z,RangeControl:Je,ToggleControl:J,Button:U,ToolbarGroup:Qe,ToolbarButton:Q,BaseControl:pe,Popover:$l,__experimentalToggleGroupControl:K,__experimentalToggleGroupControlOption:k}=window.wp.components,{useState:re,useEffect:Ne,useRef:Bl}=window.wp.element,{useBlockId:Sl,getDimensionCSS:ze,animations:se,animationPreview:el}=digi.utils,{tabIcons:He}=digi.icons,{ResponsiveRangeControl:ll,DimensionControl:De,TypographyControl:Me,BoxShadowControl:Tl,CustomTabPanel:_l,TabPanelBody:N,TransformControl:Nl}=digi.components,zl=({attributes:ee,setAttributes:a,clientId:ce})=>{let{id:t,anchor:D,visibility:$,customClasses:le,tableData:s,hasHeader:M,hasFooter:E,tableBorderColor:F,tableBorderWidth:v,tableBorderStyle:P,cellPadding:he,tableBorderCollapse:I,headerBackgroundColor:j,headerTextColor:B,headingTypography:g,bodyBackgroundColor:x,altRowBackgroundColor:H,bodyTextColor:O,textTypography:m,footerBackgroundColor:Pe,footerTextColor:Oe,contentTypography:C,borderRadius:Le,boxShadow:X,boxShadowHover:R,margin:Ve,cellAlignment:Fe,headerAlignment:me,footerAlignment:je,tablePreset:al,responsiveMode:ke,animation:S,animationDuration:ve,animationDelay:xe,firstColHeader:oe,cellControls:y,position:te,horizontalOrientation:Xe,horizontalOffset:L,verticalOrientation:Ye,verticalOffset:V,zIndex:ae,transform:Ce,transformHover:G}=ee;Sl(t,ce,a);let Y=(e,o)=>{if(!e||typeof e!="object")return null;let i=n=>n===""||n===void 0||n===null?!0:typeof n=="object"&&n!==null?n.value===""||n.value===void 0||n.value===null:!1;return o==="mobile"?i(e.mobile)?i(e.tablet)?e.desktop:e.tablet:e.mobile:o==="tablet"?i(e.tablet)?e.desktop:e.tablet:e.desktop},[de,il]=re(window.digi.responsiveState.activeDevice),[Ml,Rl]=re(!1),[We,nl]=re(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(ce);if(e)return e}return"options"}),[r,ye]=re({row:-1,col:-1}),[rl,we]=re(!1);Ne(()=>window.digi.responsiveState.subscribe(o=>{il(o)}),[]),Ne(()=>{(!s||s.length===0)&&a({tableData:[["Header 1","Header 2","Header 3"],["Row 1, Cell 1","Row 1, Cell 2","Row 1, Cell 3"],["Row 2, Cell 1","Row 2, Cell 2","Row 2, Cell 3"]]}),y||a({cellControls:{}})},[s,y,a]);let Ee=Bl(null);Ne(()=>{if(S&&S!=="none"){let e=setTimeout(()=>{el(t,S,se,Ee,ve,xe)},100);return()=>clearTimeout(e)}},[S]);let sl=()=>{el(t,S,se,Ee,ve,xe)},cl=[{label:l("Solid","digiblocks"),value:"solid"},{label:l("Dotted","digiblocks"),value:"dotted"},{label:l("Dashed","digiblocks"),value:"dashed"},{label:l("Double","digiblocks"),value:"double"},{label:l("None","digiblocks"),value:"none"}],dl=[{label:l("Default","digiblocks"),value:"default"},{label:l("Striped","digiblocks"),value:"striped"},{label:l("Bordered","digiblocks"),value:"bordered"},{label:l("Borderless","digiblocks"),value:"borderless"},{label:l("Modern","digiblocks"),value:"modern"},{label:l("Minimal","digiblocks"),value:"minimal"}],bl=[{label:l("None","digiblocks"),value:"none"},...Object.keys(se).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),value:e}))],ul=[{name:"options",title:l("Options","digiblocks"),icon:He.optionsIcon},{name:"style",title:l("Style","digiblocks"),icon:He.styleIcon},{name:"advanced",title:l("Advanced","digiblocks"),icon:He.advancedIcon}],ie=e=>{if(!s||s.length===0)return;let o=[...s],i=o[0].length,n=Array(i).fill("");o.splice(e+1,0,n),a({tableData:o})},gl=e=>{if(!s||s.length<=1)return;let o=[...s];o.splice(e,1),a({tableData:o})},ne=e=>{if(!s||s.length===0)return;let o=s.map(i=>{let n=[...i];return n.splice(e+1,0,""),n});a({tableData:o})},pl=e=>{if(!s||s[0].length<=1)return;let o=s.map(i=>{let n=[...i];return n.splice(e,1),n});a({tableData:o})},$e=(e,o,i)=>{let n=[...s];n[o][i]=e,a({tableData:n})},Be=(e,o)=>{ye({row:e,col:o})},Ge=(e,o,i)=>{if(!y)return null;let n=`${e}-${o}`;return y[n]&&y[n][i]?y[n][i]:null},be=(e,o,i,n)=>{let b=`${e}-${o}`,h={...y||{}};h[b]||(h[b]={}),h[b][i]=n,a({cellControls:h})},q=(e,o,i)=>{if(!y)return;let n=`${e}-${o}`,b={...y};b[n]&&b[n][i]&&(delete b[n][i],Object.keys(b[n]).length===0&&delete b[n],a({cellControls:b}))},fl=e=>{let o={};switch(e){case"striped":o={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f2f2f2",bodyTextColor:"#212529"};break;case"bordered":o={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:2,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"borderless":o={tablePreset:e,tableBorderStyle:"none",tableBorderWidth:0,tableBorderColor:"transparent",tableBorderCollapse:"collapse",headerBackgroundColor:"transparent",headerTextColor:"#212529",bodyBackgroundColor:"transparent",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"modern":o={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"separate",headerBackgroundColor:"#4a6cf7",headerTextColor:"#ffffff",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f8f9fa",bodyTextColor:"#212529",boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"},borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;case"minimal":o={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#ffffff",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;default:o={tablePreset:"default",tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#333333",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#666666",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}}a(o)},Ae=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"vw":case"vh":return 100;default:return 2e3}},Ue=e=>{switch(e){case"%":case"vw":case"vh":return 1;case"em":case"rem":return .1;default:return 1}},Ke=(e,o)=>{let i={left:"0%",center:"50%",right:"100%"},n={top:"0%",center:"50%",bottom:"100%"},b=i[e.xAnchor?.[o]||"center"],h=n[e.yAnchor?.[o]||"center"];return`${b} ${h}`},Ie=(e,o)=>{if(!e)return"";let i=[],n=d=>{if(!d)return"";let p=d[o],W=w=>w===""||w===void 0||w===null?!0:typeof w=="object"&&w!==null?w.value===""||w.value===void 0||w.value===null:!1;return o==="tablet"&&W(p)&&(p=d.desktop),o==="mobile"&&W(p)&&(p=d.tablet,W(p)&&(p=d.desktop)),typeof p=="object"&&p!==null?p.value!==void 0?p.value:"":p},b=n(e.rotate);if(b!==""&&b!==void 0&&b!==null){if(e.rotate3d){let d=n(e.perspective);d!==""&&d!==void 0&&d!==null&&i.push(`perspective(${d}px)`)}i.push(`rotate(${b}deg)`)}if(e.rotate3d){let d=n(e.rotateX);d!==""&&d!==void 0&&d!==null&&i.push(`rotateX(${d}deg)`);let p=n(e.rotateY);p!==""&&p!==void 0&&p!==null&&i.push(`rotateY(${p}deg)`)}let h=e.offsetX?.[o]?.value,A=e.offsetY?.[o]?.value,ue=h!==""&&h!==void 0&&h!==null,z=A!==""&&A!==void 0&&A!==null;if(ue||z){let d=ue?`${h}${e.offsetX[o].unit||"px"}`:"0",p=z?`${A}${e.offsetY[o].unit||"px"}`:"0";i.push(`translate(${d}, ${p})`)}if(e.keepProportions){let d=n(e.scale);d!==""&&d!==void 0&&d!==null&&d!=1&&i.push(`scale(${d})`)}else{let d=n(e.scaleX),p=n(e.scaleY),W=d!==""&&d!==void 0&&d!==null?d:1,w=p!==""&&p!==void 0&&p!==null?p:1;(W!=1||w!=1)&&i.push(`scale(${W}, ${w})`)}let T=n(e.skewX);T!==""&&T!==void 0&&T!==null&&i.push(`skewX(${T}deg)`);let _=n(e.skewY);return _!==""&&_!==void 0&&_!==null&&i.push(`skewY(${_}deg)`),e.flipHorizontal&&i.push("scaleX(-1)"),e.flipVertical&&i.push("scaleY(-1)"),i.length>0?i.join(" "):""},hl=()=>{let e=window.digi.responsiveState.activeDevice;if(!t)return"";let o=c=>{switch(c){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}},i="";P!=="none"?i=`
                border-style: ${P};
                border-width: ${v}px;
                border-color: ${F};
            `:i="border: none;";let n="box-shadow: none;";X&&X.enable&&(n=`box-shadow: ${X.position==="inset"?"inset ":""}${X.horizontal}px ${X.vertical}px ${X.blur}px ${X.spread}px ${X.color};`);let b="";R&&R.enable&&(b=`box-shadow: ${R.position==="inset"?"inset ":""}${R.horizontal}px ${R.vertical}px ${R.blur}px ${R.spread}px ${R.color};`);let h=`${ze(Le,"border-radius",e)}`,A=`${ze(he,"padding",e)}`,ue=`${ze(Ve,"margin",e)}`,z="";if(g){g.fontFamily&&(z+=`font-family: ${g.fontFamily};`);let c=Y(g.fontSize,e);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(z+=`font-size: ${c.value}${c.unit!==null?c.unit:""};`),g.fontWeight&&(z+=`font-weight: ${g.fontWeight};`),g.fontStyle&&(z+=`font-style: ${g.fontStyle};`),g.textTransform&&(z+=`text-transform: ${g.textTransform};`),g.textDecoration&&(z+=`text-decoration: ${g.textDecoration};`);let f=Y(g.lineHeight,e);f&&f.value!==""&&f.value!==null&&f.value!==void 0&&(z+=`line-height: ${f.value}${f.unit!==null?f.unit:""};`);let u=Y(g.letterSpacing,e);u&&u.value!==""&&u.value!==null&&u.value!==void 0&&(z+=`letter-spacing: ${u.value}${u.unit!==null?u.unit:""};`)}let T="";if(m){m.fontFamily&&(T+=`font-family: ${m.fontFamily};`);let c=Y(m.fontSize,e);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(T+=`font-size: ${c.value}${c.unit!==null?c.unit:""};`),m.fontWeight&&(T+=`font-weight: ${m.fontWeight};`),m.fontStyle&&(T+=`font-style: ${m.fontStyle};`),m.textTransform&&(T+=`text-transform: ${m.textTransform};`),m.textDecoration&&(T+=`text-decoration: ${m.textDecoration};`);let f=Y(m.lineHeight,e);f&&f.value!==""&&f.value!==null&&f.value!==void 0&&(T+=`line-height: ${f.value}${f.unit!==null?f.unit:""};`);let u=Y(m.letterSpacing,e);u&&u.value!==""&&u.value!==null&&u.value!==void 0&&(T+=`letter-spacing: ${u.value}${u.unit!==null?u.unit:""};`)}let _="";if(C){C.fontFamily&&(_+=`font-family: ${C.fontFamily};`);let c=Y(C.fontSize,e);c&&c.value!==""&&c.value!==null&&c.value!==void 0&&(_+=`font-size: ${c.value}${c.unit!==null?c.unit:""};`),C.fontWeight&&(_+=`font-weight: ${C.fontWeight};`),C.fontStyle&&(_+=`font-style: ${C.fontStyle};`),C.textTransform&&(_+=`text-transform: ${C.textTransform};`),C.textDecoration&&(_+=`text-decoration: ${C.textDecoration};`);let f=Y(C.lineHeight,e);f&&f.value!==""&&f.value!==null&&f.value!==void 0&&(_+=`line-height: ${f.value}${f.unit!==null?f.unit:""};`);let u=Y(C.letterSpacing,e);u&&u.value!==""&&u.value!==null&&u.value!==void 0&&(_+=`letter-spacing: ${u.value}${u.unit!==null?u.unit:""};`)}let d="";if(te&&te!=="default"){d+=`position: ${te} !important;`;let c=L?.[e]?.value,f=L?.[e]?.unit||"px";(c===""||c===void 0)&&(e==="tablet"?c=L?.desktop?.value:e==="mobile"&&(c=L?.tablet?.value!==""&&L?.tablet?.value!==void 0?L?.tablet?.value:L?.desktop?.value)),c!==""&&c!==void 0&&(Xe==="left"?d+=`left: ${c}${f};`:d+=`right: ${c}${f};`);let u=V?.[e]?.value,Ze=V?.[e]?.unit||"px";(u===""||u===void 0)&&(e==="tablet"?u=V?.desktop?.value:e==="mobile"&&(u=V?.tablet?.value!==""&&V?.tablet?.value!==void 0?V?.tablet?.value:V?.desktop?.value)),u!==""&&u!==void 0&&(Ye==="top"?d+=`top: ${u}${Ze};`:d+=`bottom: ${u}${Ze};`)}ae!==""&&ae!==void 0&&ae!==null&&(d+=`z-index: ${ae};`);let p="",W=Ie(Ce,e);W&&(p+=`transform: ${W};`,p+=`transform-origin: ${Ke(Ce,e)};`);let w=Ie(G,e);if(w&&G&&G.transitionDuration!==""&&G.transitionDuration!==void 0&&G.transitionDuration!==null){let c=G.transitionDuration;p+=`transition: transform ${c}ms ease;`}let Te="";return w&&(Te+=`transform: ${w};`,Te+=`transform-origin: ${Ke(G,e)};`),`
            /* Table Block - ${t} */
            .${t} {
                ${ue}
                ${n}
                ${h}
                width: 100%;
                transition: all 0.3s ease;
                ${d}
				${p}
            }

            .${t}:hover {
                ${b}
				${Te}
            }
            
            /* Set up main table styles */
            .${t} .digiblocks-table {
                width: 100%;
                border-collapse: ${I};
                border-spacing: 0;
                color: ${O};
                ${T}
                ${i}
                ${h}
            }
            
            /* Table header styles */
            .${t} .digiblocks-table thead th {
                background-color: ${j};
                color: ${B};
                ${z}
                ${A}
                vertical-align: middle;
                border: ${v}px ${P} ${F};
            }

            .${t} .digiblocks-table thead th .digiblocks-cell-content {
                justify-content: ${o(me)};
            }
            
            /* Table body styles */
            .${t} .digiblocks-table tbody td {
                background-color: ${x};
                ${A}
                vertical-align: middle;
                border: ${v}px ${P} ${F};
            }

            .${t} .digiblocks-table tbody td .digiblocks-cell-content {
                justify-content: ${o(Fe)};
            }
            
            /* First column styles if it's a header */
            ${oe?`
            .${t} .digiblocks-table tbody td:first-child {
                background-color: ${j};
                color: ${B};
                ${z}
                font-weight: bold;
            }

            .${t} .digiblocks-table tbody td:first-child .digiblocks-cell-content {
                justify-content: ${o(me)};
            }
            `:""}
            
            /* Alternating row styles if enabled */
            ${H?`
            .${t} .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${H};
            }
            ${oe?`
            .${t} .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${j};
            }
            `:""}
            `:""}
            
            /* Footer styles if enabled */
            ${E?`
            .${t} .digiblocks-table tfoot td {
                background-color: ${Pe};
                color: ${Oe};
                ${_}
                ${A}
                vertical-align: middle;
                border: ${v}px ${P} ${F};
            }

            .${t} .digiblocks-table tfoot td .digiblocks-cell-content {
                justify-content: ${o(je)};
            }
            `:""}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${ke==="stack"?`
                .${t} {
					border-radius: 0;
					box-shadow: none;
                }

                .${t} .digiblocks-table {
                    border-collapse: collapse;
					border: 0;
					border-radius: 0;
                }
                
                .${t} .digiblocks-table thead,
                .${t} .digiblocks-table tfoot {
                    display: none;
                }

				.${t} .digiblocks-table tbody {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
                
                .${t} .digiblocks-table tbody tr {
                    display: block;
                    border: ${v}px ${P} ${F};
					${n}
					transition: all 0.3s ease;
                }

				/* Hover effects */
				${R&&R.enable?`
				.${t} .digiblocks-table tbody tr:hover {
						${b}
					}
				`:""}
                
                .${t} .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
					gap: 1rem;
                    text-align: right;
                    border-bottom: 1px solid ${F};
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                
                .${t} .digiblocks-table tbody td::before {
                    content: attr(data-label);
                    font-weight: bold;
                    text-align: left;
                    flex: 1;
                }
                
                .${t} .digiblocks-table tbody td:last-child {
                    border-bottom: none;
                }
                
                ${oe?`
                .${t} .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${j};
                    color: ${B};
                    justify-content: center;
                }
                
                .${t} .digiblocks-table tbody td:first-child::before {
                    content: '';
                    display: none;
                }
                `:""}
                `:""}
                
                /* Scroll mode */
                ${ke==="scroll"?`
                .${t} {
                    overflow-x: auto;
                }
                
                .${t} .digiblocks-table {
                    min-width: 600px; /* Ensure it's wider than most mobile screens */
                }
                `:""}
            }
            
            /* Cell content layout */
            .${t} .digiblocks-cell-content {
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .${t} .digiblocks-cell-icon {
                flex-shrink: 0;
            }
            
            /* Cell control icons */
            .${t} .digiblocks-table .digiblocks-cell-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .${t} .digiblocks-table .digiblocks-cell-check {
                color: #28a745;
            }
            
            .${t} .digiblocks-table .digiblocks-cell-warning {
                color: #dca236;
            }
            
            .${t} .digiblocks-table .digiblocks-cell-cross {
                color: #dc3545;
            }
            
            .${t} .digiblocks-table .digiblocks-cell-stars {
                color: #ffc107;
                display: inline-flex;
				gap: 5px;
            }
            
            /* Selected cell highlight */
            .${t} .digiblocks-table .digiblocks-selected-cell {
                position: relative;
                outline: 2px solid #4a6cf7;
                outline-offset: -2px;
                z-index: 1;
            }
            
            /* Cell Controls Toolbar */
            .${t} .digiblocks-cell-controls-toolbar {
                margin-bottom: 15px;
                padding: 12px;
                background-color: #f0f0f1;
                border-radius: 4px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }
            
            .${t} .digiblocks-cell-controls-label {
                font-weight: bold;
            }

			.${t} .digiblocks-cell-controls-buttons .components-button-group {
                display: flex;
                align-items: center;
            }

			.${t} .digiblocks-cell-controls-buttons .digiblocks-cell-control-check-button {
                color: #28a745;
            }

			.${t} .digiblocks-cell-controls-buttons .digiblocks-cell-control-warning-button {
                color: #dca236;
            }

			.${t} .digiblocks-cell-controls-buttons .digiblocks-cell-control-cross-button {
                color: #dc3545;
            }

			.${t} .digiblocks-cell-controls-buttons .digiblocks-cell-control-rating-button {
                color: #ffc107;
            }

			.${t} .digiblocks-cell-controls-buttons .digiblocks-cell-control-remove-button {
                color: #fe5252;
            }
            
            .components-popover.digiblocks-cell-control-popover .components-popover__content {
				min-width: 200px;
				padding: 1rem;
			}
            
            .components-popover.digiblocks-cell-control-popover .components-popover__content h3 {
				font-size: 1rem;
				margin: 0 0 1rem;
			}

			.components-popover.digiblocks-cell-control-popover .components-button-group {
				display: flex;
			}

			.components-popover.digiblocks-cell-control-popover .components-button-group button {
				flex: 1;
			}
            
            /* Table instructions */
            .${t} .digiblocks-table-instructions {
                margin-bottom: 15px;
                font-style: italic;
                color: #555;
            }
            
            /* Editor controls */
            .${t} .digiblocks-table-controls {
                margin-top: 20px;
                margin-bottom: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
            }
            
            .${t} .digiblocks-row-controls,
            .${t} .digiblocks-col-controls {
                position: relative;
            }
            
            .${t} .digiblocks-cell-control-panel {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                z-index: 100;
                width: 240px;
            }
            
            .${t} .digiblocks-cell-control-panel h3 {
                margin-top: 0;
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            .${t} .digiblocks-control-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 5px;
            }
            
            /* Table caption if any */
            .${t} .digiblocks-table-caption {
                text-align: center;
                margin-bottom: 10px;
                font-style: italic;
            }
            
            /* Animation CSS for the table */
            ${S&&S!=="none"&&se[S]?se[S].keyframes:""}

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
        `},ml=()=>r.row===-1||r.col===-1?null:wp.element.createElement("div",{className:"digiblocks-cell-controls-toolbar"},wp.element.createElement("div",{className:"digiblocks-cell-controls-label"},l("Selected Cell:","digiblocks")," Row ",r.row+1,", Column ",r.col+1),wp.element.createElement("div",{className:"digiblocks-cell-controls-buttons"},wp.element.createElement("div",{className:"components-button-group"},wp.element.createElement(U,{className:"digiblocks-cell-control-check-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),label:l("Add Check","digiblocks"),onClick:()=>{q(r.row,r.col,"stars"),be(r.row,r.col,"icon","check")}}),wp.element.createElement(U,{className:"digiblocks-cell-control-warning-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})),label:l("Add Warning","digiblocks"),onClick:()=>{q(r.row,r.col,"stars"),be(r.row,r.col,"icon","warning")}}),wp.element.createElement(U,{className:"digiblocks-cell-control-cross-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})),label:l("Add Cross","digiblocks"),onClick:()=>{q(r.row,r.col,"stars"),be(r.row,r.col,"icon","cross")}}),wp.element.createElement(U,{className:"digiblocks-cell-control-rating-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),label:l("Add Rating","digiblocks"),onClick:()=>{q(r.row,r.col,"icon"),we(!0)}}),Ge(r.row,r.col,"icon")||Ge(r.row,r.col,"stars")?wp.element.createElement(U,{className:"digiblocks-cell-control-remove-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})),label:l("Remove Icons","digiblocks"),onClick:()=>{q(r.row,r.col,"icon"),q(r.row,r.col,"stars")}}):null),rl&&wp.element.createElement($l,{className:"digiblocks-cell-control-popover",onClose:()=>we(!1),position:"bottom center"},wp.element.createElement("div",{className:"digiblocks-rating-selector"},wp.element.createElement("h3",null,l("Select Rating","digiblocks")),wp.element.createElement(K,{isBlock:!0,onChange:e=>{be(r.row,r.col,"stars",e.toString()),we(!1)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},[1,2,3,4,5].map(e=>wp.element.createElement(k,{key:`star-${e}`,value:e,label:e.toString()}))))))),Se=(e,o)=>{if(!y)return null;let i=`${e}-${o}`;if(!y[i])return null;if(y[i].icon)switch(y[i].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"warning":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-warning"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(y[i].stars){let n=parseInt(y[i].stars)||0,b=[];for(let h=0;h<5;h++)h<n?b.push(wp.element.createElement("span",{key:`star-${h}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):b.push(wp.element.createElement("span",{key:`star-empty-${h}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},b)}return null},kl=()=>{switch(We){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(N,{tab:"options",name:"general-settings",title:l("Table Structure","digiblocks"),initialOpen:!0},wp.element.createElement(J,{label:l("Enable Header Row","digiblocks"),checked:M,onChange:()=>a({hasHeader:!M}),help:l("Display the first row as table header.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(J,{label:l("Enable Footer Row","digiblocks"),checked:E,onChange:()=>a({hasFooter:!E}),help:l("Display the last row as table footer.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(J,{label:l("First Column as Header","digiblocks"),checked:oe,onChange:()=>a({firstColHeader:!oe}),help:l("Use the first column as a header column.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(N,{tab:"options",name:"preset-settings",title:l("Table Presets","digiblocks"),initialOpen:!1},wp.element.createElement(Z,{label:l("Table Style Preset","digiblocks"),value:al,options:dl,onChange:e=>fl(e),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(N,{tab:"options",name:"responsive-settings",title:l("Responsive Settings","digiblocks"),initialOpen:!1},wp.element.createElement(pe,{label:l("Mobile Behavior","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(K,{value:ke,onChange:e=>a({responsiveMode:e}),help:l("How the table should behave on small screens.","digiblocks"),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"stack",label:l("Stack","digiblocks"),"aria-label":l("Stack Behavior","digiblocks")}),wp.element.createElement(k,{value:"scroll",label:l("Scroll","digiblocks"),"aria-label":l("Scroll Behavior","digiblocks")})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(N,{tab:"style",name:"border-settings",title:l("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(Z,{label:l("Border Style","digiblocks"),value:P,options:cl,onChange:e=>a({tableBorderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),P!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Je,{label:l("Border Width","digiblocks"),value:v,onChange:e=>a({tableBorderWidth:e}),min:1,max:10,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ge,{title:l("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:F,onChange:e=>a({tableBorderColor:e}),label:l("Border Color","digiblocks")}]})),wp.element.createElement(Z,{label:l("Border Collapse","digiblocks"),value:I,options:[{label:l("Collapse","digiblocks"),value:"collapse"},{label:l("Separate","digiblocks"),value:"separate"}],onChange:e=>a({tableBorderCollapse:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(De,{label:l("Border Radius","digiblocks"),value:Le,onChange:e=>a({borderRadius:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(N,{tab:"style",name:"shadow",title:l("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Tl,{normalValue:X,hoverValue:R,onNormalChange:e=>a({boxShadow:e}),onHoverChange:e=>a({boxShadowHover:e})})),wp.element.createElement(N,{tab:"style",name:"header-settings",title:l("Header Styles","digiblocks"),initialOpen:!1},wp.element.createElement(ge,{title:l("Header Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:j,onChange:e=>a({headerBackgroundColor:e}),label:l("Background Color","digiblocks")},{value:B,onChange:e=>a({headerTextColor:e}),label:l("Text Color","digiblocks")}]}),wp.element.createElement(Me,{label:l("Header Typography","digiblocks"),value:g,onChange:e=>a({headingTypography:e})}),wp.element.createElement(pe,{label:l("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(K,{value:me,onChange:e=>a({headerAlignment:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"left",label:l("Left","digiblocks"),"aria-label":l("Left","digiblocks")}),wp.element.createElement(k,{value:"center",label:l("Center","digiblocks"),"aria-label":l("Center","digiblocks")}),wp.element.createElement(k,{value:"right",label:l("Right","digiblocks"),"aria-label":l("Right","digiblocks")})))),wp.element.createElement(N,{tab:"style",name:"body-settings",title:l("Body Styles","digiblocks"),initialOpen:!1},wp.element.createElement(ge,{title:l("Body Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x,onChange:e=>a({bodyBackgroundColor:e}),label:l("Background Color","digiblocks")},{value:H,onChange:e=>a({altRowBackgroundColor:e}),label:l("Alternate Row Color","digiblocks")},{value:O,onChange:e=>a({bodyTextColor:e}),label:l("Text Color","digiblocks")}]}),wp.element.createElement(Me,{label:l("Body Typography","digiblocks"),value:m,onChange:e=>a({textTypography:e})}),wp.element.createElement(pe,{label:l("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(K,{value:Fe,onChange:e=>a({cellAlignment:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"left",label:l("Left","digiblocks"),"aria-label":l("Left","digiblocks")}),wp.element.createElement(k,{value:"center",label:l("Center","digiblocks"),"aria-label":l("Center","digiblocks")}),wp.element.createElement(k,{value:"right",label:l("Right","digiblocks"),"aria-label":l("Right","digiblocks")})))),E&&wp.element.createElement(N,{tab:"style",name:"footer-settings",title:l("Footer Styles","digiblocks"),initialOpen:!1},wp.element.createElement(ge,{title:l("Footer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Pe,onChange:e=>a({footerBackgroundColor:e}),label:l("Background Color","digiblocks")},{value:Oe,onChange:e=>a({footerTextColor:e}),label:l("Text Color","digiblocks")}]}),wp.element.createElement(Me,{label:l("Footer Typography","digiblocks"),value:C,onChange:e=>a({contentTypography:e})}),wp.element.createElement(pe,{label:l("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(K,{value:je,onChange:e=>a({footerAlignment:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"left",label:l("Left","digiblocks"),"aria-label":l("Left","digiblocks")}),wp.element.createElement(k,{value:"center",label:l("Center","digiblocks"),"aria-label":l("Center","digiblocks")}),wp.element.createElement(k,{value:"right",label:l("Right","digiblocks"),"aria-label":l("Right","digiblocks")})))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(N,{tab:"advanced",name:"spacing",title:l("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(De,{label:l("Cell Padding","digiblocks"),value:he,onChange:e=>a({cellPadding:e})}),wp.element.createElement(De,{label:l("Margin","digiblocks"),value:Ve,onChange:e=>a({margin:e})})),wp.element.createElement(N,{tab:"advanced",name:"position",title:l("Position","digiblocks"),initialOpen:!1},wp.element.createElement(Z,{label:l("Position","digiblocks"),value:te,options:[{label:l("Default","digiblocks"),value:"default"},{label:l("Relative","digiblocks"),value:"relative"},{label:l("Absolute","digiblocks"),value:"absolute"},{label:l("Fixed","digiblocks"),value:"fixed"}],onChange:e=>a({position:e}),__nextHasNoMarginBottom:!0}),te!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(K,{label:l("Horizontal Orientation","digiblocks"),value:Xe,isBlock:!0,onChange:e=>a({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"left",label:l("Left","digiblocks")}),wp.element.createElement(k,{value:"right",label:l("Right","digiblocks")})),wp.element.createElement(ll,{label:l("Offset","digiblocks"),value:L,onChange:e=>a({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Ae(L?.[de]?.unit||"px"),step:Ue(L?.[de]?.unit||"px")}),wp.element.createElement(K,{label:l("Vertical Orientation","digiblocks"),value:Ye,isBlock:!0,onChange:e=>a({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"top",label:l("Top","digiblocks")}),wp.element.createElement(k,{value:"bottom",label:l("Bottom","digiblocks")})),wp.element.createElement(ll,{label:l("Offset","digiblocks"),value:V,onChange:e=>a({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Ae(V?.[de]?.unit||"px"),step:Ue(V?.[de]?.unit||"px")})),wp.element.createElement(Je,{label:l("Z-Index","digiblocks"),value:ae,onChange:e=>a({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(N,{tab:"advanced",name:"transform",title:l("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(Nl,{normalValue:Ce,hoverValue:G,onNormalChange:e=>a({transform:e}),onHoverChange:e=>a({transformHover:e})})),wp.element.createElement(N,{tab:"advanced",name:"animation",title:l("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(Z,{label:l("Animation Effect","digiblocks"),value:S,options:bl,onChange:e=>a({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),S&&S!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Z,{label:l("Animation Duration","digiblocks"),value:ve,options:[{label:l("Slow","digiblocks"),value:"slow"},{label:l("Normal","digiblocks"),value:"normal"},{label:l("Fast","digiblocks"),value:"fast"}],onChange:e=>a({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(wl,{label:l("Animation Delay (ms)","digiblocks"),value:xe||0,onChange:e=>a({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),S&&S!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(U,{variant:"secondary",isSecondary:!0,onClick:sl,style:{width:"100%"}},l("Preview Animation","digiblocks")))),wp.element.createElement(N,{tab:"advanced",name:"visibility",title:l("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,l("Editor Note:","digiblocks")),wp.element.createElement("br",null),l("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(J,{label:l("Hide on Desktop","digiblocks"),checked:$.desktop,onChange:e=>a({visibility:{...$,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(J,{label:l("Hide on Tablet","digiblocks"),checked:$.tablet,onChange:e=>a({visibility:{...$,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(J,{label:l("Hide on Mobile","digiblocks"),checked:$.mobile,onChange:e=>a({visibility:{...$,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(N,{tab:"advanced",name:"additional",title:l("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},l("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:D||"",onChange:e=>a({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},l(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},l("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},l("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:e=>a({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},l("Separate multiple classes with spaces.","digiblocks")))));default:return null}},vl=()=>wp.element.createElement("table",{className:"digiblocks-table"},M&&s.length>0&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,s[0].map((e,o)=>wp.element.createElement("th",{key:`header-${o}`,onClick:()=>Be(0,o),className:r.row===0&&r.col===o?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},Se(0,o),wp.element.createElement(_e,{tagName:"span",value:e,onChange:i=>$e(i,0,o),placeholder:l("Header text","digiblocks")})))))),wp.element.createElement("tbody",null,s.slice(M?1:0,E?s.length-1:s.length).map((e,o)=>{let i=M?o+1:o;return wp.element.createElement("tr",{key:`row-${i}`},e.map((n,b)=>wp.element.createElement("td",{key:`cell-${i}-${b}`,"data-label":M&&s[0]&&s[0][b]?s[0][b]:"",onClick:()=>Be(i,b),className:r.row===i&&r.col===b?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},Se(i,b),wp.element.createElement(_e,{tagName:"span",value:n,onChange:h=>$e(h,i,b),placeholder:l("Cell text","digiblocks")})))))})),E&&s.length>1&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,s[s.length-1].map((e,o)=>wp.element.createElement("td",{key:`footer-${o}`,onClick:()=>Be(s.length-1,o),className:r.row===s.length-1&&r.col===o?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},Se(s.length-1,o),wp.element.createElement(_e,{tagName:"span",value:e,onChange:i=>$e(i,s.length-1,o),placeholder:l("Footer text","digiblocks")}))))))),qe=xl({className:`digiblocks-table-block ${t} ${le||""}`,id:D||null});return!s||!Array.isArray(s)||s.length===0?wp.element.createElement("div",{...qe},wp.element.createElement("p",null,l("Initializing table...","digiblocks"))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yl,null,wp.element.createElement(Qe,null,wp.element.createElement(Q,{icon:"table-row-before",label:l("Add Row Before","digiblocks"),onClick:()=>{r.row>=0?ie(r.row-1):ie(0)}}),wp.element.createElement(Q,{icon:"table-row-after",label:l("Add Row After","digiblocks"),onClick:()=>{r.row>=0?ie(r.row):ie(s.length-1)}}),wp.element.createElement(Q,{icon:"table-row-delete",label:l("Delete Row","digiblocks"),onClick:()=>{r.row>=0&&(gl(r.row),ye({row:-1,col:-1}))},disabled:s.length<=1||r.row<0})),wp.element.createElement(Qe,null,wp.element.createElement(Q,{icon:"table-col-before",label:l("Add Column Before","digiblocks"),onClick:()=>{r.col>=0?ne(r.col-1):ne(0)}}),wp.element.createElement(Q,{icon:"table-col-after",label:l("Add Column After","digiblocks"),onClick:()=>{r.col>=0?ne(r.col):ne(s[0].length-1)}}),wp.element.createElement(Q,{icon:"table-col-delete",label:l("Delete Column","digiblocks"),onClick:()=>{r.col>=0&&(pl(r.col),ye({row:-1,col:-1}))},disabled:s[0].length<=1||r.col<0}))),wp.element.createElement(Cl,null,wp.element.createElement(_l,{tabs:ul,activeTab:We,onSelect:nl},kl())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:hl()}}),wp.element.createElement("div",{...qe},wp.element.createElement("div",{className:"digiblocks-table-instructions"},wp.element.createElement("p",null,l("Click on any cell to select it and add icons, checks, warnings, crosses, or star ratings.","digiblocks"))),r.row!==-1&&r.col!==-1&&ml(),wp.element.createElement("div",{className:"digiblocks-table-container"},vl()),wp.element.createElement("div",{className:"digiblocks-table-controls"},wp.element.createElement("div",{className:"digiblocks-row-controls"},wp.element.createElement(U,{isPrimary:!0,icon:"plus",onClick:()=>ie(s.length-1)},l("Add Row","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-col-controls"},wp.element.createElement(U,{isPrimary:!0,icon:"plus",onClick:()=>ne(s[0].length-1)},l("Add Column","digiblocks"))))))},ol=zl;var{__:Ol}=window.wp.i18n,{useBlockProps:Ll,RichText:Re}=window.wp.blockEditor,Hl=({attributes:ee})=>{let{id:a,anchor:ce,customClasses:t,tableData:D,hasHeader:$,hasFooter:le,responsiveMode:s,animation:M,animationDuration:E,animationDelay:F,cellControls:v}=ee,P=["digiblocks-table-block",a,`responsive-${s}`,M!=="none"?`animate-${M} digi-animate-hidden`:"",t||""].filter(Boolean).join(" "),he=(B,g,x)=>{let H=`${B}-${g}`;return v[H]&&v[H][x]?v[H][x]:null},I=(B,g)=>{let x=`${B}-${g}`;if(!v[x])return null;if(v[x].icon)switch(v[x].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"warning":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-warning"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(v[x].stars){let H=parseInt(v[x].stars),O=[];for(let m=0;m<5;m++)m<H?O.push(wp.element.createElement("span",{key:`star-${m}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):O.push(wp.element.createElement("span",{key:`star-empty-${m}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},O)}return null},j={className:P,id:ce||null};return M&&M!=="none"&&(j["data-animation-duration"]=E||"normal",j["data-animation-delay"]=F||0),wp.element.createElement("div",{...j},wp.element.createElement("div",{className:"digiblocks-table-container"},wp.element.createElement("table",{className:"digiblocks-table"},$&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,D[0].map((B,g)=>wp.element.createElement("th",{key:`header-${g}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},I(0,g),wp.element.createElement(Re.Content,{tagName:"span",value:B})))))),wp.element.createElement("tbody",null,D.slice($?1:0,le?D.length-1:D.length).map((B,g)=>{let x=$?g+1:g;return wp.element.createElement("tr",{key:`row-${x}`},B.map((H,O)=>wp.element.createElement("td",{key:`cell-${x}-${O}`,"data-label":$?D[0][O]:""},wp.element.createElement("div",{className:"digiblocks-cell-content"},I(x,O),wp.element.createElement(Re.Content,{tagName:"span",value:H})))))})),le&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,D[D.length-1].map((B,g)=>wp.element.createElement("td",{key:`footer-${g}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},I(D.length-1,g),wp.element.createElement(Re.Content,{tagName:"span",value:B})))))))))},tl=Hl;var{__:fe}=window.wp.i18n,{registerBlockType:Dl}=window.wp.blocks;Dl("digiblocks/table",{apiVersion:2,title:digiBlocksData.blocks.table.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ee,path:a}=digiBlocksData.blocks.table.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ee}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:a}))}},description:digiBlocksData.blocks.table.description,keywords:[fe("table","digiblocks"),fe("comparison","digiblocks"),fe("grid","digiblocks"),fe("cells","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},tableData:{type:"array",default:[["Header 1","Header 2","Header 3"],["Cell 1,1","Cell 1,2","Cell 1,3"],["Cell 2,1","Cell 2,2","Cell 2,3"]]},hasHeader:{type:"boolean",default:!0},hasFooter:{type:"boolean",default:!1},tableBorderColor:{type:"string",default:"#e0e0e0"},tableBorderWidth:{type:"number",default:1},tableBorderStyle:{type:"string",default:"solid"},cellPadding:{type:"object",default:{desktop:{top:15,right:15,bottom:15,left:15,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},tableBorderCollapse:{type:"string",default:"collapse"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},headerTextColor:{type:"string",default:"#333333"},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:18,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},bodyBackgroundColor:{type:"string",default:"#ffffff"},altRowBackgroundColor:{type:"string",default:""},bodyTextColor:{type:"string",default:"#666666"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},footerBackgroundColor:{type:"string",default:"#f8f9fa"},footerTextColor:{type:"string",default:"#333333"},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:{value:16,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:{value:1.5,unit:"em"},tablet:{value:"",unit:"em"},mobile:{value:"",unit:"em"}},letterSpacing:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:2,blur:10,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px",isLinked:!1},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cellAlignment:{type:"string",default:"left"},headerAlignment:{type:"string",default:"left"},footerAlignment:{type:"string",default:"left"},tablePreset:{type:"string",default:"default"},responsiveMode:{type:"string",default:"stack"},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},firstColHeader:{type:"boolean",default:!1},cellControls:{type:"object",default:{}},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{tableData:[["Feature","Basic","Premium"],["Storage","10GB","1TB"],["Users","1","Unlimited"],["Support","Email","24/7 Phone"],["Price","$9.99","$29.99"]],hasHeader:!0,headerBackgroundColor:"#f8f9fa",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f9f9f9"}},edit:ol,save:tl});})();
