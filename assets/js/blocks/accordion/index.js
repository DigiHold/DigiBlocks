(()=>{var{__:e}=window.wp.i18n,{useBlockProps:Go,RichText:bo,InspectorControls:jo,PanelColorSettings:x}=window.wp.blockEditor,{SelectControl:go,RangeControl:qo,ToggleControl:G,Button:z,Tooltip:j,__experimentalToggleGroupControl:mo,__experimentalToggleGroupControlOption:q,TabPanel:Jo}=window.wp.components,{useState:B,useEffect:uo,useRef:Ko}=window.wp.element,{useBlockId:Qo,animations:L,animationPreview:ko}=digi.utils,{tabIcons:oo}=digi.icons,{ResponsiveControl:F,DimensionControl:J,TypographyControl:fo,BoxShadowControl:Xo,CustomTabPanel:Yo,TabPanelBody:I}=digi.components,Zo=({attributes:D,setAttributes:i,clientId:M})=>{let{id:a,anchor:W,visibility:v,customClasses:O,items:m,titleColor:P,titleHoverColor:U,titleActiveColor:E,backgroundColor:V,backgroundHoverColor:u,backgroundActiveColor:eo,contentColor:to,contentHoverColor:K,borderColor:io,borderHoverColor:Q,borderRadius:r,borderWidth:d,borderStyle:R,boxShadow:w,boxShadowHover:C,padding:p,margin:b,titleTypography:s,contentTypography:c,iconPosition:X,iconColor:lo,iconHoverColor:Y,iconActiveColor:no,iconSize:A,animation:f,allowMultipleOpen:ao,iconType:Z}=D;Qo(a,M,i);let l=(o,t)=>!o||typeof o!="object"?null:t==="mobile"?o.mobile!==""&&o.mobile!==void 0&&o.mobile!==null?o.mobile:o.tablet!==""&&o.tablet!==void 0&&o.tablet!==null?o.tablet:o.desktop:t==="tablet"&&o.tablet!==""&&o.tablet!==void 0&&o.tablet!==null?o.tablet:o.desktop,[y,yo]=B(window.digi.responsiveState.activeDevice);uo(()=>window.digi.responsiveState.subscribe(t=>{yo(t)}),[]);let[so,$o]=B(()=>{if(window.digi.uiState){let o=window.digi.uiState.getActiveTab(M);if(o)return o}return"options"}),[ie,xo]=B("normal"),[le,wo]=B("normal"),[ne,So]=B("normal"),[ae,To]=B("normal"),[se,Ho]=B("normal"),_o=()=>{let o=[...m,{id:`item-${m.length+1}-${Date.now().toString(36)}`,title:e("New Accordion Item","digiblocks"),content:e("Add your content here.","digiblocks"),isOpen:!1}];i({items:o})},No=o=>{let t=[...m];t.splice(o,1),i({items:t})},Bo=(o,t)=>{let n=[...m];n[t].title=o,i({items:n})},Io=(o,t)=>{let n=[...m];n[t].content=o,i({items:n})},Oo=o=>{let t=[...m];ao||t.forEach((n,_)=>{_!==o&&(t[_].isOpen=!1)}),t[o].isOpen=!t[o].isOpen,i({items:t})},zo=o=>{if(o===0)return;let t=[...m],n=t[o];t[o]=t[o-1],t[o-1]=n,i({items:t})},Do=o=>{if(o===m.length-1)return;let t=[...m],n=t[o];t[o]=t[o+1],t[o+1]=n,i({items:t})},Mo=o=>{let t=m[o],n=Date.now(),_={...t,id:`accordion-item-${M.substr(0,8)}-${n}`,isOpen:!1},$=[...m];$.splice(o+1,0,_),i({items:$})},Po=[{label:e("None","digiblocks"),value:"none"},{label:e("Solid","digiblocks"),value:"solid"},{label:e("Dotted","digiblocks"),value:"dotted"},{label:e("Dashed","digiblocks"),value:"dashed"},{label:e("Double","digiblocks"),value:"double"},{label:e("Groove","digiblocks"),value:"groove"},{label:e("Inset","digiblocks"),value:"inset"},{label:e("Outset","digiblocks"),value:"outset"},{label:e("Ridge","digiblocks"),value:"ridge"}],Uo=[{label:e("None","digiblocks"),value:"none"},...Object.keys(L).map(o=>({label:o.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),value:o}))],co=Ko(null);uo(()=>{if(f&&f!=="none"){let o=setTimeout(()=>{ko(a,f,L,co)},100);return()=>clearTimeout(o)}},[f]);let Ro=()=>{ko(a,f,L,co)},Ao=[{name:"options",title:e("Options","digiblocks"),icon:oo.optionsIcon},{name:"style",title:e("Style","digiblocks"),icon:oo.styleIcon},{name:"advanced",title:e("Advanced","digiblocks"),icon:oo.advancedIcon}],Lo=o=>{let t=l(A,y)||16;return Z==="plusMinus"?wp.element.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:o?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):Z==="arrowUpDown"?wp.element.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:o?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null},Fo=()=>{let o=window.digi.responsiveState.activeDevice,t="";if(R&&R!=="none"){let g={top:l({desktop:d.desktop?.top||1,tablet:d.tablet?.top||"",mobile:d.mobile?.top||""},o),right:l({desktop:d.desktop?.right||1,tablet:d.tablet?.right||"",mobile:d.mobile?.right||""},o),bottom:l({desktop:d.desktop?.bottom||1,tablet:d.tablet?.bottom||"",mobile:d.mobile?.bottom||""},o),left:l({desktop:d.desktop?.left||1,tablet:d.tablet?.left||"",mobile:d.mobile?.left||""},o),unit:l({desktop:d.desktop?.unit||"px",tablet:d.tablet?.unit||"",mobile:d.mobile?.unit||""},o)},k={top:l({desktop:r.desktop?.top||8,tablet:r.tablet?.top||"",mobile:r.mobile?.top||""},o),right:l({desktop:r.desktop?.right||8,tablet:r.tablet?.right||"",mobile:r.mobile?.right||""},o),bottom:l({desktop:r.desktop?.bottom||8,tablet:r.tablet?.bottom||"",mobile:r.mobile?.bottom||""},o),left:l({desktop:r.desktop?.left||8,tablet:r.tablet?.left||"",mobile:r.mobile?.left||""},o),unit:l({desktop:r.desktop?.unit||"px",tablet:r.tablet?.unit||"",mobile:r.mobile?.unit||""},o)};t=`
				border-style: ${R};
				border-color: ${io||"#e0e0e0"};
				border-width: ${g.top}${g.unit} ${g.right}${g.unit} ${g.bottom}${g.unit} ${g.left}${g.unit};
				border-radius: ${k.top}${k.unit} ${k.right}${k.unit} ${k.bottom}${k.unit} ${k.left}${k.unit};
			`}else t="border-style: none;";let n="box-shadow: none;";w&&w.enable&&(n=`box-shadow: ${w.position==="inset"?"inset ":""}${w.horizontal}px ${w.vertical}px ${w.blur}px ${w.spread}px ${w.color};`);let _="";C&&C.enable&&(_=`box-shadow: ${C.position==="inset"?"inset ":""}${C.horizontal}px ${C.vertical}px ${C.blur}px ${C.spread}px ${C.color};`);let $={top:l({desktop:p.desktop?.top||20,tablet:p.tablet?.top||"",mobile:p.mobile?.top||""},o),right:l({desktop:p.desktop?.right||20,tablet:p.tablet?.right||"",mobile:p.mobile?.right||""},o),bottom:l({desktop:p.desktop?.bottom||20,tablet:p.tablet?.bottom||"",mobile:p.mobile?.bottom||""},o),left:l({desktop:p.desktop?.left||20,tablet:p.tablet?.left||"",mobile:p.mobile?.left||""},o),unit:l({desktop:p.desktop?.unit||"px",tablet:p.tablet?.unit||"",mobile:p.mobile?.unit||""},o)},H={top:l({desktop:b.desktop?.top||0,tablet:b.tablet?.top||"",mobile:b.mobile?.top||""},o),right:l({desktop:b.desktop?.right||0,tablet:b.tablet?.right||"",mobile:b.mobile?.right||""},o),bottom:l({desktop:b.desktop?.bottom||30,tablet:b.tablet?.bottom||"",mobile:b.mobile?.bottom||""},o),left:l({desktop:b.desktop?.left||0,tablet:b.tablet?.left||"",mobile:b.mobile?.left||""},o),unit:l({desktop:b.desktop?.unit||"px",tablet:b.tablet?.unit||"",mobile:b.mobile?.unit||""},o)},ro=`padding: ${$.top}${$.unit} ${$.right}${$.unit} ${$.bottom}${$.unit} ${$.left}${$.unit};`,Vo=`margin: ${H.top}${H.unit} ${H.right}${H.unit} ${H.bottom}${H.unit} ${H.left}${H.unit};`,S="";if(s){s.fontFamily&&(S+=`font-family: ${s.fontFamily};`);let g=l(s.fontSize||{desktop:18,tablet:"",mobile:""},o);g&&(S+=`font-size: ${g}${s.fontSizeUnit||"px"};`),s.fontWeight&&(S+=`font-weight: ${s.fontWeight};`),s.fontStyle&&(S+=`font-style: ${s.fontStyle};`),s.textTransform&&(S+=`text-transform: ${s.textTransform};`),s.textDecoration&&(S+=`text-decoration: ${s.textDecoration};`);let k=l(s.lineHeight||{desktop:1.5,tablet:"",mobile:""},o);k&&(S+=`line-height: ${k}${s.lineHeightUnit||"em"};`);let N=l(s.letterSpacing||{desktop:0,tablet:"",mobile:""},o);(N||N===0)&&(S+=`letter-spacing: ${N}${s.letterSpacingUnit||"px"};`)}let T="";if(c){c.fontFamily&&(T+=`font-family: ${c.fontFamily};`);let g=l(c.fontSize||{desktop:16,tablet:"",mobile:""},o);g&&(T+=`font-size: ${g}${c.fontSizeUnit||"px"};`),c.fontWeight&&(T+=`font-weight: ${c.fontWeight};`),c.fontStyle&&(T+=`font-style: ${c.fontStyle};`),c.textTransform&&(T+=`text-transform: ${c.textTransform};`),c.textDecoration&&(T+=`text-decoration: ${c.textDecoration};`);let k=l(c.lineHeight||{desktop:1.5,tablet:"",mobile:""},o);k&&(T+=`line-height: ${k}${c.lineHeightUnit||"em"};`);let N=l(c.letterSpacing||{desktop:0,tablet:"",mobile:""},o);(N||N===0)&&(T+=`letter-spacing: ${N}${c.letterSpacingUnit||"px"};`)}let po="";return f&&f!=="none"&&L[f]&&(po=L[f].keyframes),`
            /* Accordion item */
            .${a} .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${V||"#ffffff"};
                ${t}
                ${n}
				${Vo}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            .${a} .digiblocks-accordion-item:hover {
                ${u?`background-color: ${u};`:""}
                ${Q?`border-color: ${Q};`:""}
				${C&&C.enable?_:""}
            }
            
            /* Accordion header */
            .${a} .digiblocks-accordion-header {
                position: relative;
                cursor: pointer;
                ${ro}
                display: flex;
                align-items: center;
                justify-content: space-between;
				gap: .75rem;
                ${X==="left"?"flex-direction: row-reverse;":""}
                ${X==="left"?"justify-content: flex-end;":""}
                transition: background-color 0.3s ease;
            }
            
            /* Accordion title */
            .${a} .digiblocks-accordion-title {
                margin: 0;
                color: ${P};
                flex: 1;
                ${S}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for title */
            .${a} .digiblocks-accordion-header:hover .digiblocks-accordion-title {
                ${U?`color: ${U};`:""}
            }
            
            /* Accordion title active state */
            .${a} .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${E||"#1e73be"};
            }
            
            /* Accordion icon */
            .${a} .digiblocks-accordion-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* SVG icon fill color */
            .${a} .digiblocks-accordion-icon svg {
                fill: ${lo};
                width: ${l(A,o)}px;
				height: ${l(A,o)}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            .${a} .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${Y?`fill: ${Y};`:""}
            }
            
            /* Active icon color */
            .${a} .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${no||"#1e73be"};
            }
            
            /* Active header background */
            .${a} .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${eo||"#f7f7f7"};
            }
            
            /* Accordion content */
            .${a} .digiblocks-accordion-content {
                overflow: hidden;
                ${ro}
                color: ${to||"#666666"};
                ${T}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            .${a} .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${K?`color: ${K};`:""}
            }
            
            .${a} .digiblocks-accordion-content p:first-child {
                margin-top: 0;
            }
            
            .${a} .digiblocks-accordion-content p:last-child {
                margin-bottom: 0;
            }
            
            /* Item controls in editor */
			.${a} .digiblocks-accordion-item {
				position: relative;
			}

			.${a} .digiblocks-accordion-item-controls {
				display: flex;
				gap: 5px;
				position: absolute;
				right: 10px;
				top: 0;
				background-color: #fff;
				padding: 2px;
				border-radius: 3px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.12);
				z-index: 10;
			}
            
            /* Animation keyframes */
            ${po}

			/* Visibility Controls */
			${v.desktop?`
				@media (min-width: 992px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${v.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${v.mobile?`
				@media (max-width: 767px) {
					.${a} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Wo=()=>{switch(so){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(G,{label:e("Allow Multiple Open","digiblocks"),checked:ao,onChange:o=>i({allowMultipleOpen:o}),help:e("If enabled, multiple accordion items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(mo,{label:e("Icon Type","digiblocks"),value:Z,onChange:o=>i({iconType:o}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(q,{value:"plusMinus",label:e("Plus/Minus","digiblocks")}),wp.element.createElement(q,{value:"arrowUpDown",label:e("Up/Down","digiblocks")})),wp.element.createElement(mo,{label:e("Icon Position","digiblocks"),value:X,onChange:o=>i({iconPosition:o}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(q,{value:"left",label:e("Left","digiblocks")}),wp.element.createElement(q,{value:"right",label:e("Right","digiblocks")})),wp.element.createElement(F,{label:e("Icon Size","digiblocks")},wp.element.createElement(qo,{value:A[y],onChange:o=>i({iconSize:{...A,[y]:o}}),min:12,max:48,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{tab:"style",name:"colors",title:e("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Jo,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:[{name:"normal",title:e("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:e("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],onSelect:o=>{xo(o),wo(o),So(o),To(o),Ho(o)}},o=>o.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(x,{title:e("Title Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:P,onChange:t=>i({titleColor:t}),label:e("Title Color","digiblocks")},{value:E,onChange:t=>i({titleActiveColor:t}),label:e("Active Title Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:lo,onChange:t=>i({iconColor:t}),label:e("Icon Color","digiblocks")},{value:no,onChange:t=>i({iconActiveColor:t}),label:e("Active Icon Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:V,onChange:t=>i({backgroundColor:t}),label:e("Background Color","digiblocks")},{value:eo,onChange:t=>i({backgroundActiveColor:t}),label:e("Active Background Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Content Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:to,onChange:t=>i({contentColor:t}),label:e("Content Text Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Border Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:io,onChange:t=>i({borderColor:t}),label:e("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(x,{title:e("Title Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:U,onChange:t=>i({titleHoverColor:t}),label:e("Title Hover Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Icon Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Y,onChange:t=>i({iconHoverColor:t}),label:e("Icon Hover Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Background Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:u,onChange:t=>i({backgroundHoverColor:t}),label:e("Background Hover Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Content Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:K,onChange:t=>i({contentHoverColor:t}),label:e("Content Hover Color","digiblocks")}]}),wp.element.createElement(x,{title:e("Border Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Q,onChange:t=>i({borderHoverColor:t}),label:e("Border Hover Color","digiblocks")}]})))),wp.element.createElement(I,{tab:"style",name:"typo",title:e("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(fo,{label:e("Title Typography","digiblocks"),value:s,onChange:o=>i({titleTypography:o}),defaults:{fontSize:{desktop:18,tablet:"",mobile:""},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em"}}),wp.element.createElement(fo,{label:e("Content Typography","digiblocks"),value:c,onChange:o=>i({contentTypography:o}),defaults:{fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em"}})),wp.element.createElement(I,{tab:"style",name:"border",title:e("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(go,{label:e("Border Style","digiblocks"),value:R,options:Po,onChange:o=>i({borderStyle:o}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),R!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(F,{label:e("Border Width","digiblocks")},wp.element.createElement(J,{values:d[y],onChange:o=>i({borderWidth:{...d,[y]:o}})})),wp.element.createElement(F,{label:e("Border Radius","digiblocks")},wp.element.createElement(J,{values:r[y],onChange:o=>i({borderRadius:{...r,[y]:o}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Xo,{normalValue:w,hoverValue:C,onNormalChange:o=>i({boxShadow:o}),onHoverChange:o=>i({boxShadowHover:o})})),wp.element.createElement(I,{tab:"style",name:"spacing",title:e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(F,{label:e("Padding","digiblocks")},wp.element.createElement(J,{values:p[y],onChange:o=>i({padding:{...p,[y]:o}})})),wp.element.createElement(F,{label:e("Margin","digiblocks")},wp.element.createElement(J,{values:b[y],onChange:o=>i({margin:{...b,[y]:o}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(I,{tab:"advanced",name:"animation",title:e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(go,{label:e("Animation","digiblocks"),value:f,options:Uo,onChange:o=>i({animation:o}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),f&&f!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(z,{variant:"secondary",isSecondary:!0,onClick:Ro,style:{width:"100%"}},e("Preview Animation","digiblocks")))),wp.element.createElement(I,{tab:"advanced",name:"visibility",title:e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,e("Editor Note:","digiblocks")),wp.element.createElement("br",null),e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(G,{label:e("Hide on Desktop","digiblocks"),checked:v.desktop,onChange:o=>i({visibility:{...v,desktop:o}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:e("Hide on Tablet","digiblocks"),checked:v.tablet,onChange:o=>i({visibility:{...v,tablet:o}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(G,{label:e("Hide on Mobile","digiblocks"),checked:v.mobile,onChange:o=>i({visibility:{...v,mobile:o}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(I,{tab:"advanced",name:"additional",title:e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:W||"",onChange:o=>i({anchor:o.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:O||"",onChange:o=>i({customClasses:o.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},e("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Eo=Go({className:`digiblocks-accordion ${a} ${O||""}`,id:W||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(jo,null,wp.element.createElement(Yo,{tabs:Ao,activeTab:so,onSelect:o=>{requestAnimationFrame(()=>{$o(o)})}},Wo())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Fo()}}),wp.element.createElement("div",{...Eo},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},m.map((o,t)=>wp.element.createElement("div",{key:o.id,className:`digiblocks-accordion-item ${o.isOpen?"is-active":""}`},wp.element.createElement("div",{className:"digiblocks-accordion-header",onClick:()=>Oo(t)},wp.element.createElement(bo,{tagName:"h4",className:"digiblocks-accordion-title",value:o.title,onChange:n=>Bo(n,t),placeholder:e("Accordion Title","digiblocks")}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},Lo(o.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:o.isOpen?"block":"none"}},wp.element.createElement(bo,{tagName:"div",value:o.content,onChange:n=>Io(n,t),placeholder:e("Add your content here.","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-accordion-item-controls"},wp.element.createElement(j,{text:e("Move Up","digiblocks")},wp.element.createElement(z,{className:"digiblocks-accordion-item-move-up",onClick:n=>{n.stopPropagation(),zo(t)},icon:"arrow-up-alt2",disabled:t===0,isSmall:!0})),wp.element.createElement(j,{text:e("Move Down","digiblocks")},wp.element.createElement(z,{className:"digiblocks-accordion-item-move-down",onClick:n=>{n.stopPropagation(),Do(t)},icon:"arrow-down-alt2",disabled:t===m.length-1,isSmall:!0})),wp.element.createElement(j,{text:e("Duplicate","digiblocks")},wp.element.createElement(z,{className:"digiblocks-accordion-item-duplicate",onClick:n=>{n.stopPropagation(),Mo(t)},icon:"admin-page",isSmall:!0})),wp.element.createElement(j,{text:e("Remove","digiblocks")},wp.element.createElement(z,{className:"digiblocks-accordion-item-remove",onClick:n=>{n.stopPropagation(),No(t)},icon:"trash",isSmall:!0}))))),wp.element.createElement(z,{variant:"primary",icon:"plus",onClick:_o,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},e("Add Accordion Item","digiblocks")))))},ho=Zo;var{useBlockProps:oe,RichText:vo}=window.wp.blockEditor,ee=({attributes:D})=>{let{id:i,anchor:M,customClasses:a,items:W,iconPosition:v,iconType:O,allowMultipleOpen:m,animation:P}=D,U=u=>O==="plusMinus"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:u?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):O==="arrowUpDown"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:u?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null,E=["digiblocks-accordion",i,v==="left"?"icon-position-left":"icon-position-right",m?"allow-multiple-open":"single-open",P!=="none"?`animate-${P}`:"",a||""].filter(Boolean).join(" "),V=oe.save({className:E,id:M||null,"data-icon-type":O});return wp.element.createElement("div",{...V},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},W.map(u=>wp.element.createElement("div",{key:u.id,className:`digiblocks-accordion-item ${u.isOpen?"is-active":""}`,"data-item-id":u.id},wp.element.createElement("div",{className:"digiblocks-accordion-header"},wp.element.createElement(vo.Content,{tagName:"h4",className:"digiblocks-accordion-title",value:u.title}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},U(u.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:u.isOpen?"block":"none"}},wp.element.createElement(vo.Content,{tagName:"div",value:u.content}))))))},Co=ee;var{__:h}=window.wp.i18n,{registerBlockType:te}=window.wp.blocks;te("digiblocks/accordion",{apiVersion:2,title:digiBlocksData.blocks.accordion.title,category:"digiblocks",icon:{src:()=>{let{viewbox:D,path:i}=digiBlocksData.blocks.accordion.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${D}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:i}))}},description:digiBlocksData.blocks.accordion.description,keywords:[h("accordion","digiblocks"),h("toggle","digiblocks"),h("collapse","digiblocks"),h("faq","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"item-1",title:h("Accordion Item 1","digiblocks"),content:h("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!0},{id:"item-2",title:h("Accordion Item 2","digiblocks"),content:h("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:""},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentHoverColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:"",mobile:""},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:"",mobile:""},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:"",mobile:""},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:""},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:"",mobile:""}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"}},example:{attributes:{items:[{id:"item-1",title:h("Accordion Item 1","digiblocks"),content:h("This is some sample content for the accordion item.","digiblocks"),isOpen:!0},{id:"item-2",title:h("Accordion Item 2","digiblocks"),content:h("Click on an accordion item to see it expand.","digiblocks"),isOpen:!1}]}},edit:ho,save:Co});})();
