(()=>{var{__:o}=window.wp.i18n,{useBlockProps:Ie,RichText:he,InspectorControls:eo,PanelColorSettings:le,BlockControls:oo}=window.wp.blockEditor,{SelectControl:te,RangeControl:lo,ToggleControl:G,Button:O,ToolbarGroup:Re,ToolbarButton:j,BaseControl:ie,Popover:to,__experimentalToggleGroupControl:Y,__experimentalToggleGroupControlOption:$}=window.wp.components,{useState:Z,useEffect:ue,useRef:io}=window.wp.element,{useBlockId:ao,getDimensionCSS:ke,animations:I,animationPreview:Me}=digi.utils,{tabIcons:me}=digi.icons,{ResponsiveControl:Ce,DimensionControl:ve,TypographyControl:ye,BoxShadowControl:no,CustomTabPanel:ro,TabPanelBody:T}=digi.components,so=({attributes:V,setAttributes:a,clientId:ee})=>{let{id:l,anchor:B,visibility:m,customClasses:K,tableData:n,hasHeader:H,hasFooter:h,tableBorderColor:z,tableBorderWidth:W,tableBorderStyle:v,cellPadding:A,tableBorderCollapse:y,headerBackgroundColor:b,headerTextColor:f,headingTypography:c,bodyBackgroundColor:_,altRowBackgroundColor:R,bodyTextColor:we,textTypography:g,footerBackgroundColor:$e,footerTextColor:Be,contentTypography:p,borderRadius:ne,boxShadow:M,boxShadowHover:C,margin:q,cellAlignment:Se,headerAlignment:re,footerAlignment:Te,tablePreset:Le,responsiveMode:se,animation:x,firstColHeader:J,cellControls:u}=V;ao(l,ee,a);let D=(e,t)=>!e||typeof e!="object"?null:t==="mobile"?e.mobile!==""&&e.mobile!==void 0&&e.mobile!==null?e.mobile:e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop:t==="tablet"&&e.tablet!==""&&e.tablet!==void 0&&e.tablet!==null?e.tablet:e.desktop,[F,Fe]=Z(window.digi.responsiveState.activeDevice),[go,po]=Z(!1),[_e,Ue]=Z(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(ee);if(e)return e}return"options"}),[i,ce]=Z({row:-1,col:-1}),[Oe,de]=Z(!1);ue(()=>window.digi.responsiveState.subscribe(t=>{Fe(t)}),[]),ue(()=>{(!n||n.length===0)&&a({tableData:[["Header 1","Header 2","Header 3"],["Row 1, Cell 1","Row 1, Cell 2","Row 1, Cell 3"],["Row 2, Cell 1","Row 2, Cell 2","Row 2, Cell 3"]]}),u||a({cellControls:{}})},[n,u,a]);let Ne=io(null);ue(()=>{if(x&&x!=="none"){let e=setTimeout(()=>{Me(l,x,I,Ne)},100);return()=>clearTimeout(e)}},[x]);let We=()=>{Me(l,x,I,Ne)},Ae=[{label:o("Solid","digiblocks"),value:"solid"},{label:o("Dotted","digiblocks"),value:"dotted"},{label:o("Dashed","digiblocks"),value:"dashed"},{label:o("Double","digiblocks"),value:"double"},{label:o("None","digiblocks"),value:"none"}],Ee=[{label:o("Default","digiblocks"),value:"default"},{label:o("Striped","digiblocks"),value:"striped"},{label:o("Bordered","digiblocks"),value:"bordered"},{label:o("Borderless","digiblocks"),value:"borderless"},{label:o("Modern","digiblocks"),value:"modern"},{label:o("Minimal","digiblocks"),value:"minimal"}],Ge=[{label:o("None","digiblocks"),value:"none"},...Object.keys(I).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),value:e}))],je=[{name:"options",title:o("Options","digiblocks"),icon:me.optionsIcon},{name:"style",title:o("Style","digiblocks"),icon:me.styleIcon},{name:"advanced",title:o("Advanced","digiblocks"),icon:me.advancedIcon}],Q=e=>{if(!n||n.length===0)return;let t=[...n],r=t[0].length,s=Array(r).fill("");t.splice(e+1,0,s),a({tableData:t})},Ve=e=>{if(!n||n.length<=1)return;let t=[...n];t.splice(e,1),a({tableData:t})},X=e=>{if(!n||n.length===0)return;let t=n.map(r=>{let s=[...r];return s.splice(e+1,0,""),s});a({tableData:t})},Ke=e=>{if(!n||n[0].length<=1)return;let t=n.map(r=>{let s=[...r];return s.splice(e,1),s});a({tableData:t})},be=(e,t,r)=>{let s=[...n];s[t][r]=e,a({tableData:s})},ge=(e,t)=>{ce({row:e,col:t})},He=(e,t,r)=>{if(!u)return null;let s=`${e}-${t}`;return u[s]&&u[s][r]?u[s][r]:null},oe=(e,t,r,s)=>{let d=`${e}-${t}`,k={...u||{}};k[d]||(k[d]={}),k[d][r]=s,a({cellControls:k})},E=(e,t,r)=>{if(!u)return;let s=`${e}-${t}`,d={...u};d[s]&&d[s][r]&&(delete d[s][r],Object.keys(d[s]).length===0&&delete d[s],a({cellControls:d}))},qe=e=>{let t={};switch(e){case"striped":t={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f2f2f2",bodyTextColor:"#212529"};break;case"bordered":t={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:2,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"borderless":t={tablePreset:e,tableBorderStyle:"none",tableBorderWidth:0,tableBorderColor:"transparent",tableBorderCollapse:"collapse",headerBackgroundColor:"transparent",headerTextColor:"#212529",bodyBackgroundColor:"transparent",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"modern":t={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"separate",headerBackgroundColor:"#4a6cf7",headerTextColor:"#ffffff",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f8f9fa",bodyTextColor:"#212529",boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"},borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;case"minimal":t={tablePreset:e,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#ffffff",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;default:t={tablePreset:"default",tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#333333",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#666666",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}}a(t)},Je=()=>{let e=window.digi.responsiveState.activeDevice;if(!l)return"";let t=w=>{switch(w){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}},r="";v!=="none"?r=`
                border-style: ${v};
                border-width: ${W}px;
                border-color: ${z};
            `:r="border: none;";let s="box-shadow: none;";M&&M.enable&&(s=`box-shadow: ${M.position==="inset"?"inset ":""}${M.horizontal}px ${M.vertical}px ${M.blur}px ${M.spread}px ${M.color};`);let d="";C&&C.enable&&(d=`box-shadow: ${C.position==="inset"?"inset ":""}${C.horizontal}px ${C.vertical}px ${C.blur}px ${C.spread}px ${C.color};`);let k=`${ke(ne,"border-radius",e)}`,fe=`${ke(A,"padding",e)}`,Ze=`${ke(q,"margin",e)}`,N="";if(c){c.fontFamily&&(N+=`font-family: ${c.fontFamily};`);let w=D(c.fontSize,e);w&&(N+=`font-size: ${w}${c.fontSizeUnit||"px"};`),c.fontWeight&&(N+=`font-weight: ${c.fontWeight};`),c.fontStyle&&(N+=`font-style: ${c.fontStyle};`),c.textTransform&&(N+=`text-transform: ${c.textTransform};`),c.textDecoration&&(N+=`text-decoration: ${c.textDecoration};`);let U=D(c.lineHeight,e);U&&(N+=`line-height: ${U}${c.lineHeightUnit||"em"};`);let S=D(c.letterSpacing,e);(S||S===0)&&(N+=`letter-spacing: ${S}${c.letterSpacingUnit||"px"};`)}let P="";if(g){g.fontFamily&&(P+=`font-family: ${g.fontFamily};`);let w=D(g.fontSize,e);w&&(P+=`font-size: ${w}${g.fontSizeUnit||"px"};`),g.fontWeight&&(P+=`font-weight: ${g.fontWeight};`),g.fontStyle&&(P+=`font-style: ${g.fontStyle};`),g.textTransform&&(P+=`text-transform: ${g.textTransform};`),g.textDecoration&&(P+=`text-decoration: ${g.textDecoration};`);let U=D(g.lineHeight,e);U&&(P+=`line-height: ${U}${g.lineHeightUnit||"em"};`);let S=D(g.letterSpacing,e);(S||S===0)&&(P+=`letter-spacing: ${S}${g.letterSpacingUnit||"px"};`)}let L="";if(p){p.fontFamily&&(L+=`font-family: ${p.fontFamily};`);let w=D(p.fontSize,e);w&&(L+=`font-size: ${w}${p.fontSizeUnit||"px"};`),p.fontWeight&&(L+=`font-weight: ${p.fontWeight};`),p.fontStyle&&(L+=`font-style: ${p.fontStyle};`),p.textTransform&&(L+=`text-transform: ${p.textTransform};`),p.textDecoration&&(L+=`text-decoration: ${p.textDecoration};`);let U=D(p.lineHeight,e);U&&(L+=`line-height: ${U}${p.lineHeightUnit||"em"};`);let S=D(p.letterSpacing,e);(S||S===0)&&(L+=`letter-spacing: ${S}${p.letterSpacingUnit||"px"};`)}return`
            /* Table Block - ${l} */
            .${l} {
                ${Ze}
                ${s}
                ${k}
                width: 100%;
                transition: all 0.3s ease;
            }

			/* Hover effects */
            ${C&&C.enable?`
                .${l}:hover {
                    ${d}
                }
            `:""}
            
            /* Set up main table styles */
            .${l} .digiblocks-table {
                width: 100%;
                border-collapse: ${y};
                border-spacing: 0;
                color: ${we};
                ${P}
                ${r}
                ${k}
            }
            
            /* Table header styles */
            .${l} .digiblocks-table thead th {
                background-color: ${b};
                color: ${f};
                ${N}
                ${fe}
                vertical-align: middle;
                border: ${W}px ${v} ${z};
            }

            .${l} .digiblocks-table thead th .digiblocks-cell-content {
                justify-content: ${t(re)};
            }
            
            /* Table body styles */
            .${l} .digiblocks-table tbody td {
                background-color: ${_};
                ${fe}
                vertical-align: middle;
                border: ${W}px ${v} ${z};
            }

            .${l} .digiblocks-table tbody td .digiblocks-cell-content {
                justify-content: ${t(Se)};
            }
            
            /* First column styles if it's a header */
            ${J?`
            .${l} .digiblocks-table tbody td:first-child {
                background-color: ${b};
                color: ${f};
                ${N}
                font-weight: bold;
            }

            .${l} .digiblocks-table tbody td:first-child .digiblocks-cell-content {
                justify-content: ${t(re)};
            }
            `:""}
            
            /* Alternating row styles if enabled */
            ${R?`
            .${l} .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${R};
            }
            ${J?`
            .${l} .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${b};
            }
            `:""}
            `:""}
            
            /* Footer styles if enabled */
            ${h?`
            .${l} .digiblocks-table tfoot td {
                background-color: ${$e};
                color: ${Be};
                ${L}
                ${fe}
                vertical-align: middle;
                border: ${W}px ${v} ${z};
            }

            .${l} .digiblocks-table tfoot td .digiblocks-cell-content {
                justify-content: ${t(Te)};
            }
            `:""}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${se==="stack"?`
                .${l} {
					border-radius: 0;
					box-shadow: none;
                }

                .${l} .digiblocks-table {
                    border-collapse: collapse;
					border: 0;
					border-radius: 0;
                }
                
                .${l} .digiblocks-table thead,
                .${l} .digiblocks-table tfoot {
                    display: none;
                }

				.${l} .digiblocks-table tbody {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
                
                .${l} .digiblocks-table tbody tr {
                    display: block;
                    border: ${W}px ${v} ${z};
					${s}
					transition: all 0.3s ease;
                }

				/* Hover effects */
				${C&&C.enable?`
				.${l} .digiblocks-table tbody tr:hover {
						${d}
					}
				`:""}
                
                .${l} .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
					gap: 1rem;
                    text-align: right;
                    border-bottom: 1px solid ${z};
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                
                .${l} .digiblocks-table tbody td::before {
                    content: attr(data-label);
                    font-weight: bold;
                    text-align: left;
                    flex: 1;
                }
                
                .${l} .digiblocks-table tbody td:last-child {
                    border-bottom: none;
                }
                
                ${J?`
                .${l} .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${b};
                    color: ${f};
                    justify-content: center;
                }
                
                .${l} .digiblocks-table tbody td:first-child::before {
                    content: '';
                    display: none;
                }
                `:""}
                `:""}
                
                /* Scroll mode */
                ${se==="scroll"?`
                .${l} {
                    overflow-x: auto;
                }
                
                .${l} .digiblocks-table {
                    min-width: 600px; /* Ensure it's wider than most mobile screens */
                }
                `:""}
            }
            
            /* Cell content layout */
            .${l} .digiblocks-cell-content {
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .${l} .digiblocks-cell-icon {
                flex-shrink: 0;
            }
            
            /* Cell control icons */
            .${l} .digiblocks-table .digiblocks-cell-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .${l} .digiblocks-table .digiblocks-cell-check {
                color: #28a745;
            }
            
            .${l} .digiblocks-table .digiblocks-cell-warning {
                color: #dca236;
            }
            
            .${l} .digiblocks-table .digiblocks-cell-cross {
                color: #dc3545;
            }
            
            .${l} .digiblocks-table .digiblocks-cell-stars {
                color: #ffc107;
                display: inline-flex;
				gap: 5px;
            }
            
            /* Selected cell highlight */
            .${l} .digiblocks-table .digiblocks-selected-cell {
                position: relative;
                outline: 2px solid #4a6cf7;
                outline-offset: -2px;
                z-index: 1;
            }
            
            /* Cell Controls Toolbar */
            .${l} .digiblocks-cell-controls-toolbar {
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
            
            .${l} .digiblocks-cell-controls-label {
                font-weight: bold;
            }

			.${l} .digiblocks-cell-controls-buttons .components-button-group {
                display: flex;
                align-items: center;
            }

			.${l} .digiblocks-cell-controls-buttons .digiblocks-cell-control-check-button {
                color: #28a745;
            }

			.${l} .digiblocks-cell-controls-buttons .digiblocks-cell-control-warning-button {
                color: #dca236;
            }

			.${l} .digiblocks-cell-controls-buttons .digiblocks-cell-control-cross-button {
                color: #dc3545;
            }

			.${l} .digiblocks-cell-controls-buttons .digiblocks-cell-control-rating-button {
                color: #ffc107;
            }

			.${l} .digiblocks-cell-controls-buttons .digiblocks-cell-control-remove-button {
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
            .${l} .digiblocks-table-instructions {
                margin-bottom: 15px;
                font-style: italic;
                color: #555;
            }
            
            /* Editor controls */
            .${l} .digiblocks-table-controls {
                margin-top: 20px;
                margin-bottom: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
            }
            
            .${l} .digiblocks-row-controls,
            .${l} .digiblocks-col-controls {
                position: relative;
            }
            
            .${l} .digiblocks-cell-control-panel {
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
            
            .${l} .digiblocks-cell-control-panel h3 {
                margin-top: 0;
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            .${l} .digiblocks-control-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 5px;
            }
            
            /* Table caption if any */
            .${l} .digiblocks-table-caption {
                text-align: center;
                margin-bottom: 10px;
                font-style: italic;
            }
            
            /* Animation CSS for the table */
            ${x&&x!=="none"&&I[x]?I[x].keyframes:""}

			/* Visibility Controls */
			${m.desktop?`
				@media (min-width: 992px) {
					.${l} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${m.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${l} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${m.mobile?`
				@media (max-width: 767px) {
					.${l} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Qe=()=>i.row===-1||i.col===-1?null:wp.element.createElement("div",{className:"digiblocks-cell-controls-toolbar"},wp.element.createElement("div",{className:"digiblocks-cell-controls-label"},o("Selected Cell:","digiblocks")," Row ",i.row+1,", Column ",i.col+1),wp.element.createElement("div",{className:"digiblocks-cell-controls-buttons"},wp.element.createElement("div",{className:"components-button-group"},wp.element.createElement(O,{className:"digiblocks-cell-control-check-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),label:o("Add Check","digiblocks"),onClick:()=>{E(i.row,i.col,"stars"),oe(i.row,i.col,"icon","check")}}),wp.element.createElement(O,{className:"digiblocks-cell-control-warning-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})),label:o("Add Warning","digiblocks"),onClick:()=>{E(i.row,i.col,"stars"),oe(i.row,i.col,"icon","warning")}}),wp.element.createElement(O,{className:"digiblocks-cell-control-cross-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})),label:o("Add Cross","digiblocks"),onClick:()=>{E(i.row,i.col,"stars"),oe(i.row,i.col,"icon","cross")}}),wp.element.createElement(O,{className:"digiblocks-cell-control-rating-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),label:o("Add Rating","digiblocks"),onClick:()=>{E(i.row,i.col,"icon"),de(!0)}}),He(i.row,i.col,"icon")||He(i.row,i.col,"stars")?wp.element.createElement(O,{className:"digiblocks-cell-control-remove-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})),label:o("Remove Icons","digiblocks"),onClick:()=>{E(i.row,i.col,"icon"),E(i.row,i.col,"stars")}}):null),Oe&&wp.element.createElement(to,{className:"digiblocks-cell-control-popover",onClose:()=>de(!1),position:"bottom center"},wp.element.createElement("div",{className:"digiblocks-rating-selector"},wp.element.createElement("h3",null,o("Select Rating","digiblocks")),wp.element.createElement(Y,{isBlock:!0,onChange:e=>{oe(i.row,i.col,"stars",e.toString()),de(!1)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},[1,2,3,4,5].map(e=>wp.element.createElement($,{key:`star-${e}`,value:e,label:e.toString()}))))))),pe=(e,t)=>{if(!u)return null;let r=`${e}-${t}`;if(!u[r])return null;if(u[r].icon)switch(u[r].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"warning":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-warning"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(u[r].stars){let s=parseInt(u[r].stars)||0,d=[];for(let k=0;k<5;k++)k<s?d.push(wp.element.createElement("span",{key:`star-${k}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):d.push(wp.element.createElement("span",{key:`star-empty-${k}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},d)}return null},Xe=()=>{switch(_e){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(T,{tab:"options",name:"general-settings",title:o("Table Structure","digiblocks"),initialOpen:!0},wp.element.createElement(G,{label:o("Enable Header Row","digiblocks"),checked:H,onChange:()=>a({hasHeader:!H}),help:o("Display the first row as table header.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:o("Enable Footer Row","digiblocks"),checked:h,onChange:()=>a({hasFooter:!h}),help:o("Display the last row as table footer.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:o("First Column as Header","digiblocks"),checked:J,onChange:()=>a({firstColHeader:!J}),help:o("Use the first column as a header column.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(T,{tab:"options",name:"preset-settings",title:o("Table Presets","digiblocks"),initialOpen:!1},wp.element.createElement(te,{label:o("Table Style Preset","digiblocks"),value:Le,options:Ee,onChange:e=>qe(e),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(T,{tab:"options",name:"responsive-settings",title:o("Responsive Settings","digiblocks"),initialOpen:!1},wp.element.createElement(ie,{label:o("Mobile Behavior","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Y,{value:se,onChange:e=>a({responsiveMode:e}),help:o("How the table should behave on small screens.","digiblocks"),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement($,{value:"stack",label:o("Stack","digiblocks"),"aria-label":o("Stack Behavior","digiblocks")}),wp.element.createElement($,{value:"scroll",label:o("Scroll","digiblocks"),"aria-label":o("Scroll Behavior","digiblocks")})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(T,{tab:"style",name:"border-settings",title:o("Borders & Shadow","digiblocks"),initialOpen:!0},wp.element.createElement(te,{label:o("Border Style","digiblocks"),value:v,options:Ae,onChange:e=>a({tableBorderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lo,{label:o("Border Width","digiblocks"),value:W,onChange:e=>a({tableBorderWidth:e}),min:1,max:10,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(le,{title:o("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:z,onChange:e=>a({tableBorderColor:e}),label:o("Border Color","digiblocks")}]})),wp.element.createElement(te,{label:o("Border Collapse","digiblocks"),value:y,options:[{label:o("Collapse","digiblocks"),value:"collapse"},{label:o("Separate","digiblocks"),value:"separate"}],onChange:e=>a({tableBorderCollapse:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ce,{label:o("Border Radius","digiblocks")},wp.element.createElement(ve,{values:ne[F],onChange:e=>a({borderRadius:{...ne,[F]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(no,{label:o("Box Shadow","digiblocks"),normalValue:M,hoverValue:C,onNormalChange:e=>a({boxShadow:e}),onHoverChange:e=>a({boxShadowHover:e})})),wp.element.createElement(T,{tab:"style",name:"header-settings",title:o("Header Styles","digiblocks"),initialOpen:!1},wp.element.createElement(le,{title:o("Header Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:b,onChange:e=>a({headerBackgroundColor:e}),label:o("Background Color","digiblocks")},{value:f,onChange:e=>a({headerTextColor:e}),label:o("Text Color","digiblocks")}]}),wp.element.createElement(ye,{label:o("Header Typography","digiblocks"),value:c,onChange:e=>a({headingTypography:e}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(ie,{label:o("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Y,{value:re,onChange:e=>a({headerAlignment:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement($,{value:"left",label:o("Left","digiblocks"),"aria-label":o("Left","digiblocks")}),wp.element.createElement($,{value:"center",label:o("Center","digiblocks"),"aria-label":o("Center","digiblocks")}),wp.element.createElement($,{value:"right",label:o("Right","digiblocks"),"aria-label":o("Right","digiblocks")})))),wp.element.createElement(T,{tab:"style",name:"body-settings",title:o("Body Styles","digiblocks"),initialOpen:!1},wp.element.createElement(le,{title:o("Body Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:e=>a({bodyBackgroundColor:e}),label:o("Background Color","digiblocks")},{value:R,onChange:e=>a({altRowBackgroundColor:e}),label:o("Alternate Row Color","digiblocks")},{value:we,onChange:e=>a({bodyTextColor:e}),label:o("Text Color","digiblocks")}]}),wp.element.createElement(ye,{label:o("Body Typography","digiblocks"),value:g,onChange:e=>a({textTypography:e}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(ie,{label:o("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Y,{value:Se,onChange:e=>a({cellAlignment:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement($,{value:"left",label:o("Left","digiblocks"),"aria-label":o("Left","digiblocks")}),wp.element.createElement($,{value:"center",label:o("Center","digiblocks"),"aria-label":o("Center","digiblocks")}),wp.element.createElement($,{value:"right",label:o("Right","digiblocks"),"aria-label":o("Right","digiblocks")})))),h&&wp.element.createElement(T,{tab:"style",name:"footer-settings",title:o("Footer Styles","digiblocks"),initialOpen:!1},wp.element.createElement(le,{title:o("Footer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$e,onChange:e=>a({footerBackgroundColor:e}),label:o("Background Color","digiblocks")},{value:Be,onChange:e=>a({footerTextColor:e}),label:o("Text Color","digiblocks")}]}),wp.element.createElement(ye,{label:o("Footer Typography","digiblocks"),value:p,onChange:e=>a({contentTypography:e}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(ie,{label:o("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Y,{value:Te,onChange:e=>a({footerAlignment:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement($,{value:"left",label:o("Left","digiblocks"),"aria-label":o("Left","digiblocks")}),wp.element.createElement($,{value:"center",label:o("Center","digiblocks"),"aria-label":o("Center","digiblocks")}),wp.element.createElement($,{value:"right",label:o("Right","digiblocks"),"aria-label":o("Right","digiblocks")})))),wp.element.createElement(T,{tab:"style",name:"spacing",title:o("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ce,{label:o("Cell Padding","digiblocks")},wp.element.createElement(ve,{values:A&&A[F]?A[F]:{top:15,right:15,bottom:15,left:15,unit:"px"},onChange:e=>a({cellPadding:{...A,[F]:e}})})),wp.element.createElement(Ce,{label:o("Margin","digiblocks")},wp.element.createElement(ve,{values:q&&q[F]?q[F]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:e=>a({margin:{...q,[F]:e}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(T,{tab:"advanced",name:"animation",title:o("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(te,{label:o("Animation Effect","digiblocks"),value:x,options:Ge,onChange:e=>a({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),x&&x!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(O,{variant:"secondary",isSecondary:!0,onClick:We,style:{width:"100%"}},o("Preview Animation","digiblocks")))),wp.element.createElement(T,{tab:"advanced",name:"visibility",title:o("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,o("Editor Note:","digiblocks")),wp.element.createElement("br",null),o("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(G,{label:o("Hide on Desktop","digiblocks"),checked:m.desktop,onChange:e=>a({visibility:{...m,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:o("Hide on Tablet","digiblocks"),checked:m.tablet,onChange:e=>a({visibility:{...m,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:o("Hide on Mobile","digiblocks"),checked:m.mobile,onChange:e=>a({visibility:{...m,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(T,{tab:"advanced",name:"additional",title:o("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},o("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:B||"",onChange:e=>a({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},o(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},o("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},o("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:K||"",onChange:e=>a({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},o("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ye=()=>wp.element.createElement("table",{className:"digiblocks-table"},H&&n.length>0&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,n[0].map((e,t)=>wp.element.createElement("th",{key:`header-${t}`,onClick:()=>ge(0,t),className:i.row===0&&i.col===t?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},pe(0,t),wp.element.createElement(he,{tagName:"span",value:e,onChange:r=>be(r,0,t),placeholder:o("Header text","digiblocks")})))))),wp.element.createElement("tbody",null,n.slice(H?1:0,h?n.length-1:n.length).map((e,t)=>{let r=H?t+1:t;return wp.element.createElement("tr",{key:`row-${r}`},e.map((s,d)=>wp.element.createElement("td",{key:`cell-${r}-${d}`,"data-label":H&&n[0]&&n[0][d]?n[0][d]:"",onClick:()=>ge(r,d),className:i.row===r&&i.col===d?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},pe(r,d),wp.element.createElement(he,{tagName:"span",value:s,onChange:k=>be(k,r,d),placeholder:o("Cell text","digiblocks")})))))})),h&&n.length>1&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,n[n.length-1].map((e,t)=>wp.element.createElement("td",{key:`footer-${t}`,onClick:()=>ge(n.length-1,t),className:i.row===n.length-1&&i.col===t?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},pe(n.length-1,t),wp.element.createElement(he,{tagName:"span",value:e,onChange:r=>be(r,n.length-1,t),placeholder:o("Footer text","digiblocks")}))))))),ze=Ie({className:`digiblocks-table-block ${l} ${K||""}`,id:B||null});return!n||!Array.isArray(n)||n.length===0?wp.element.createElement("div",{...ze},wp.element.createElement("p",null,o("Initializing table...","digiblocks"))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(oo,null,wp.element.createElement(Re,null,wp.element.createElement(j,{icon:"table-row-before",label:o("Add Row Before","digiblocks"),onClick:()=>{i.row>=0?Q(i.row-1):Q(0)}}),wp.element.createElement(j,{icon:"table-row-after",label:o("Add Row After","digiblocks"),onClick:()=>{i.row>=0?Q(i.row):Q(n.length-1)}}),wp.element.createElement(j,{icon:"table-row-delete",label:o("Delete Row","digiblocks"),onClick:()=>{i.row>=0&&(Ve(i.row),ce({row:-1,col:-1}))},disabled:n.length<=1||i.row<0})),wp.element.createElement(Re,null,wp.element.createElement(j,{icon:"table-col-before",label:o("Add Column Before","digiblocks"),onClick:()=>{i.col>=0?X(i.col-1):X(0)}}),wp.element.createElement(j,{icon:"table-col-after",label:o("Add Column After","digiblocks"),onClick:()=>{i.col>=0?X(i.col):X(n[0].length-1)}}),wp.element.createElement(j,{icon:"table-col-delete",label:o("Delete Column","digiblocks"),onClick:()=>{i.col>=0&&(Ke(i.col),ce({row:-1,col:-1}))},disabled:n[0].length<=1||i.col<0}))),wp.element.createElement(eo,null,wp.element.createElement(ro,{tabs:je,activeTab:_e,onSelect:Ue},Xe())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Je()}}),wp.element.createElement("div",{...ze},wp.element.createElement("div",{className:"digiblocks-table-instructions"},wp.element.createElement("p",null,o("Click on any cell to select it and add icons, checks, warnings, crosses, or star ratings.","digiblocks"))),i.row!==-1&&i.col!==-1&&Qe(),wp.element.createElement("div",{className:"digiblocks-table-container"},Ye()),wp.element.createElement("div",{className:"digiblocks-table-controls"},wp.element.createElement("div",{className:"digiblocks-row-controls"},wp.element.createElement(O,{isPrimary:!0,icon:"plus",onClick:()=>Q(n.length-1)},o("Add Row","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-col-controls"},wp.element.createElement(O,{isPrimary:!0,icon:"plus",onClick:()=>X(n[0].length-1)},o("Add Column","digiblocks"))))))},De=so;var{__:ho}=window.wp.i18n,{useBlockProps:uo,RichText:xe}=window.wp.blockEditor,co=({attributes:V})=>{let{id:a,anchor:ee,customClasses:l,tableData:B,hasHeader:m,hasFooter:K,responsiveMode:n,animation:H,cellControls:h}=V,z=["digiblocks-table-block",a,`responsive-${n}`,H!=="none"?`animate-${H}`:"",l||""].filter(Boolean).join(" "),W=(y,b,f)=>{let c=`${y}-${b}`;return h[c]&&h[c][f]?h[c][f]:null},v=(y,b)=>{let f=`${y}-${b}`;if(!h[f])return null;if(h[f].icon)switch(h[f].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"warning":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-warning"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(h[f].stars){let c=parseInt(h[f].stars),_=[];for(let R=0;R<5;R++)R<c?_.push(wp.element.createElement("span",{key:`star-${R}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):_.push(wp.element.createElement("span",{key:`star-empty-${R}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},_)}return null};return wp.element.createElement("div",{...{className:z,id:ee||null}},wp.element.createElement("div",{className:"digiblocks-table-container"},wp.element.createElement("table",{className:"digiblocks-table"},m&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,B[0].map((y,b)=>wp.element.createElement("th",{key:`header-${b}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},v(0,b),wp.element.createElement(xe.Content,{tagName:"span",value:y})))))),wp.element.createElement("tbody",null,B.slice(m?1:0,K?B.length-1:B.length).map((y,b)=>{let f=m?b+1:b;return wp.element.createElement("tr",{key:`row-${f}`},y.map((c,_)=>wp.element.createElement("td",{key:`cell-${f}-${_}`,"data-label":m?B[0][_]:""},wp.element.createElement("div",{className:"digiblocks-cell-content"},v(f,_),wp.element.createElement(xe.Content,{tagName:"span",value:c})))))})),K&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,B[B.length-1].map((y,b)=>wp.element.createElement("td",{key:`footer-${b}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},v(B.length-1,b),wp.element.createElement(xe.Content,{tagName:"span",value:y})))))))))},Pe=co;var{__:ae}=window.wp.i18n,{registerBlockType:bo}=window.wp.blocks;bo("digiblocks/table",{apiVersion:2,title:digiBlocksData.blocks.table.title,category:"digiblocks",icon:{src:()=>{let{viewbox:V,path:a}=digiBlocksData.blocks.table.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${V}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:a}))}},description:digiBlocksData.blocks.table.description,keywords:[ae("table","digiblocks"),ae("comparison","digiblocks"),ae("grid","digiblocks"),ae("cells","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},tableData:{type:"array",default:[["Header 1","Header 2","Header 3"],["Cell 1,1","Cell 1,2","Cell 1,3"],["Cell 2,1","Cell 2,2","Cell 2,3"]]},hasHeader:{type:"boolean",default:!0},hasFooter:{type:"boolean",default:!1},tableBorderColor:{type:"string",default:"#e0e0e0"},tableBorderWidth:{type:"number",default:1},tableBorderStyle:{type:"string",default:"solid"},cellPadding:{type:"object",default:{desktop:{top:15,right:15,bottom:15,left:15,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},tableBorderCollapse:{type:"string",default:"collapse"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},headerTextColor:{type:"string",default:"#333333"},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},bodyBackgroundColor:{type:"string",default:"#ffffff"},altRowBackgroundColor:{type:"string",default:""},bodyTextColor:{type:"string",default:"#666666"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},footerBackgroundColor:{type:"string",default:"#f8f9fa"},footerTextColor:{type:"string",default:"#333333"},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:2,blur:10,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cellAlignment:{type:"string",default:"left"},headerAlignment:{type:"string",default:"left"},footerAlignment:{type:"string",default:"left"},tablePreset:{type:"string",default:"default"},responsiveMode:{type:"string",default:"stack"},animation:{type:"string",default:"none"},firstColHeader:{type:"boolean",default:!1},cellControls:{type:"object",default:{}}},example:{attributes:{tableData:[["Feature","Basic","Premium"],["Storage","10GB","1TB"],["Users","1","Unlimited"],["Support","Email","24/7 Phone"],["Price","$9.99","$29.99"]],hasHeader:!0,headerBackgroundColor:"#f8f9fa",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f9f9f9"}},edit:De,save:Pe});})();
